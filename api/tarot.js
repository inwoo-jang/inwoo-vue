/**
 * 타로 해석 프록시 (Vercel 서버리스 함수)
 * ------------------------------------------------------------------
 * 브라우저는 비밀을 가질 수 없다. 프런트에 키를 두면 개발자 도구에서
 * 그대로 보이고, 빌드하면 번들 파일에도 박힌다.
 *
 * 그래서 키를 여기 서버에만 둔다. 브라우저는 뽑은 카드 세 장만 보내고,
 * 이 함수가 자기 키로 OpenAI 를 불러 결과만 돌려준다.
 *
 * 환경변수는 OPENAI_API_KEY 다 — VITE_ 를 붙이면 안 된다.
 * VITE_ 로 시작하는 값은 프런트 번들에 그대로 들어가기 때문이다.
 *
 * 배포 후 Vercel 대시보드 → Settings → Environment Variables 에서 넣는다.
 */
const MODEL = process.env.OPENAI_MODEL ?? 'gpt-4o-mini'

/**
 * 이 주소들에서 온 요청만 받는다.
 * 열어 두면 누구나 이 창구로 남의 키를 쓸 수 있다.
 */
const ALLOWED_ORIGINS = [
  'https://inwoo-jang.github.io', // GitHub Pages (inwoo-vue · 6class-1group 공용)
  'http://localhost:5173',
  'http://localhost:4173',
]

/** 같은 Vercel 배포에서 온 요청도 허용한다 */
const isAllowedOrigin = (origin) => {
  if (!origin) return true // 같은 출처(same-origin)면 Origin 헤더가 없다
  if (ALLOWED_ORIGINS.includes(origin)) return true
  return /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin)
}

/**
 * IP 당 호출 횟수 제한.
 *
 * 서버리스는 인스턴스가 뜨고 지므로 이 숫자는 완벽하지 않다.
 * 무방비로 열어 두는 것보다 낫다는 정도의 방지턱이다.
 * 비용이 걱정되면 OpenAI 대시보드에서 월 사용 한도를 함께 걸어 둔다.
 */
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 20
const hits = new Map()

const tooManyRequests = (ip) => {
  const now = Date.now()
  const fresh = (hits.get(ip) ?? []).filter((at) => now - at < WINDOW_MS)
  fresh.push(now)
  hits.set(ip, fresh)

  // 오래된 기록은 흘려보낸다 (메모리가 계속 불어나지 않도록)
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (!times.some((at) => now - at < WINDOW_MS)) hits.delete(key)
    }
  }

  return fresh.length > MAX_PER_WINDOW
}

const SYSTEM_PROMPT = `당신은 타로 전문가입니다. 차분하고 명료하며 은은하게 신비로운 말투를 사용합니다. 과장 없이 이해하기 쉬운 문장으로 말합니다.

[스프레드 정의]
1번 카드: 오늘의 전반적 흐름
2번 카드: 오늘 마주할 변수 또는 주의점
3번 카드: 오늘의 조언 (행동 지침)

[출력 형식]
오늘 운세의 전반적 흐름(2문장 이내)
오늘 마주할 변수 또는 주의점(2문장 이내)
오늘의 조언 및 구체적 행동 지침(2문장 이내)

[작성 규칙]
전체 400자 내외. 장황하게 늘리거나 같은말을 반복하지 않는다.

반드시 뽑힌 카드의 실제 상징(그림 요소, 원소, 수비학)에 근거해 해석한다. 카드와 무관한 일반론적 덕담을 쓰지 않는다.
누구에게나 해당되는 모호한 표현("당신은 때로 불안하지만 강한 사람입니다" 류)을 금지한다. 대신 '오늘'이라는 시간 단위에 한정된 서술을 한다.
사용자의 직업·연애 상태·나이를 임의로 가정하지 않는다. 상황을 특정하지 말고 상황 유형으로 표현한다.
건강·수명·질병·사망, 특정인의 마음, 금전 손익을 단정하지 않는다.
역방향은 '나쁨'이 아니라 '에너지의 방향 전환·내면화'로 해석한다.
어두운 카드(죽음, 탑, 악마 등)가 나와도 공포를 조장하지 않고 변화·해방의 관점으로 풀되, 억지로 좋게만 포장하지도 않는다.
마지막에 "타로는 결정을 대신하지 않습니다. 오늘의 방향을 잡는 참고로 봐주세요."를 한 줄 덧붙인다.
존댓말, 담백하고 따뜻한 톤. 이모지는 헤더 외 사용 금지.
return only Korean.`

/**
 * 받은 것이 정말 "타로 세 장"인지 확인한다.
 * 확인하지 않으면 이 창구가 아무 프롬프트나 대신 보내 주는 통로가 된다.
 */
const readPicks = (body) => {
  const picks = body?.picks
  if (!Array.isArray(picks) || picks.length !== 3) return null

  return picks.map((pick) => {
    const name = String(pick?.name ?? '').trim()
    if (!name || name.length > 40) return null
    return { name, reversed: Boolean(pick?.reversed) }
  }).every(Boolean)
    ? picks.map((pick) => ({
        name: String(pick.name).trim().slice(0, 40),
        reversed: Boolean(pick.reversed),
      }))
    : null
}

const buildUserPrompt = (picks) =>
  `타로 리딩 주제: "오늘의 운세"

[뽑은 카드]
${picks
  .map((pick, i) => `${i + 1}번 카드: ${pick.name} (${pick.reversed ? '역방향' : '정방향'})`)
  .join('\n')}`

export default async function handler(req, res) {
  const origin = req.headers.origin

  if (!isAllowedOrigin(origin)) {
    return res.status(403).json({ error: '허용되지 않은 출처입니다.' })
  }
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST 만 받습니다.' })

  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({ error: '서버에 API 키가 설정되어 있지 않습니다.' })
  }

  const ip =
    (req.headers['x-forwarded-for'] ?? '').split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown'

  if (tooManyRequests(ip)) {
    return res.status(429).json({ error: '요청이 너무 잦습니다. 잠시 뒤에 다시 시도해 주세요.' })
  }

  const picks = readPicks(req.body)
  if (!picks) {
    return res.status(400).json({ error: '타로 카드 세 장을 보내 주세요.' })
  }

  try {
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 700,
        temperature: 0.8,
        stream: true,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: buildUserPrompt(picks) },
        ],
      }),
    })

    if (!upstream.ok || !upstream.body) {
      const detail = await upstream.text().catch(() => '')
      console.error('[tarot] OpenAI 응답 실패', upstream.status, detail.slice(0, 300))
      return res.status(502).json({ error: '해석을 받아 오지 못했습니다.' })
    }

    // 글자가 만들어지는 대로 흘려 보낸다. 400자라도 다 기다리면 몇 초가 빈다.
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.setHeader('Cache-Control', 'no-store')

    const reader = upstream.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const payload = line.slice(6).trim()
        if (payload === '[DONE]') continue
        try {
          const delta = JSON.parse(payload).choices?.[0]?.delta?.content
          if (delta) res.write(delta)
        } catch {
          // 조각난 줄은 다음 덩어리에서 이어 붙는다
        }
      }
    }

    res.end()
  } catch (error) {
    console.error('[tarot] 프록시 오류', error)
    if (!res.headersSent) res.status(500).json({ error: '해석을 받아 오지 못했습니다.' })
    else res.end()
  }
}
