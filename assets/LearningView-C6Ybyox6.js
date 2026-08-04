import{n as e}from"./rolldown-runtime-hePW80VL.js";import{$ as t,B as n,F as r,G as i,I as a,Kt as o,L as s,O as c,P as l,Q as u,R as d,T as f,U as p,V as m,Wt as h,_ as g,bt as _,d as v,dt as y,et as b,f as x,g as S,i as C,j as w,l as T,lt as E,nt as D,ot as O,p as k,qt as A,tt as j,u as M,v as N,z as P}from"./runtime-core.esm-bundler-kkMznkCl.js";import{a as F,c as I,d as L,l as R,o as z,s as B,u as V}from"./runtime-dom.esm-bundler-CHanmBTQ.js";import{n as H,r as U}from"./pinia-Cmt0qqyQ.js";import{h as ee,m as te}from"./useApi-CROJJdhE-BZRBkDcY.js";import{i as W,n as G,r as ne}from"./curriculum-Dfni6hga.js";import{t as K}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{n as re,r as q,t as ie}from"./CodeWindow-Dv9EOwfb.js";var ae={class:`snippet`},oe=[`innerHTML`],se={key:0,class:`parts`},ce={key:1,class:`returns`},le={key:2},ue=K({__name:`CodeSnippet`,props:{code:{type:String,required:!0},desc:{type:String,default:``},parts:{type:Array,default:()=>[]},returns:{type:String,default:``}},setup(e){let t=e,n=T(()=>re(t.code));return(t,r)=>(s(),k(`figure`,ae,[M(`pre`,null,[M(`code`,{innerHTML:n.value},null,8,oe)]),e.parts.length?(s(),k(`dl`,se,[(s(!0),k(C,null,P(e.parts,e=>(s(),k(C,{key:e.token},[M(`dt`,null,A(e.token),1),M(`dd`,null,A(e.role),1)],64))),128))])):x(``,!0),e.returns?(s(),k(`p`,ce,[r[0]||=M(`span`,{class:`returns-label`},`돌려주는 값`,-1),g(A(e.returns),1)])):x(``,!0),e.desc?(s(),k(`figcaption`,le,A(e.desc),1)):x(``,!0)]))}},[[`__scopeId`,`data-v-264d774b`]]),de=[`aria-expanded`],fe={key:0,class:`range`},pe={class:`chevron`},me={class:`lecture-body`},he={key:0,class:`intro`},ge=[`innerHTML`],_e=[`innerHTML`],ve={key:1,class:`points`},ye=[`innerHTML`],be={key:2,class:`syntax`},xe=K({__name:`LectureBrief`,props:{lecture:{type:Object,required:!0},studyRange:{type:String,default:``},open:{type:Boolean,default:!1}},setup(e){let t=y(e.open);return(n,r)=>(s(),k(`section`,{class:h([`lecture`,{closed:!t.value}])},[M(`button`,{class:`lecture-toggle`,type:`button`,"aria-expanded":t.value,onClick:r[0]||=e=>t.value=!t.value},[r[1]||=M(`span`,{class:`marker`},`📖`,-1),r[2]||=M(`span`,{class:`toggle-title`},`관련 강의 내용`,-1),e.studyRange?(s(),k(`span`,fe,`교안 `+A(e.studyRange),1)):x(``,!0),M(`span`,pe,A(t.value?`−`:`+`),1)],8,de),j(M(`div`,me,[e.lecture.intro?(s(),k(`p`,he,[r[3]||=M(`span`,{class:`intro-label`},`쉽게 말하면`,-1),M(`span`,{innerHTML:_(q)(e.lecture.intro)},null,8,ge)])):x(``,!0),M(`p`,{class:`lead`,innerHTML:_(q)(e.lecture.summary)},null,8,_e),e.lecture.points?.length?(s(),k(`ul`,ve,[(s(!0),k(C,null,P(e.lecture.points,e=>(s(),k(`li`,{key:e,innerHTML:_(q)(e)},null,8,ye))),128))])):x(``,!0),e.lecture.syntax?.length?(s(),k(`div`,be,[r[4]||=M(`p`,{class:`syntax-label`},`문법 정리`,-1),(s(!0),k(C,null,P(e.lecture.syntax,e=>(s(),v(ue,{key:e.code,code:e.code,desc:e.desc,parts:e.parts??[],returns:e.returns??``},null,8,[`code`,`desc`,`parts`,`returns`]))),128))])):x(``,!0)],512),[[R,t.value]])],2))}},[[`__scopeId`,`data-v-dd03eb2e`]]),Se=[`aria-expanded`,`aria-label`,`title`],Ce={key:0,class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`,"aria-hidden":`true`},we={key:1,class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},Te={class:`help-popover`,role:`note`},Ee={class:`help-text`},J=K({__name:`ConceptHelp`,props:{text:{type:String,required:!0}},setup(e){let t=y(!1),n=y(null),r=e=>{t.value&&n.value&&!n.value.contains(e.target)&&(t.value=!1)},i=e=>{e.key===`Escape`&&(t.value=!1)};return l(()=>{document.addEventListener(`mousedown`,r),document.addEventListener(`keydown`,i)}),w(()=>{document.removeEventListener(`mousedown`,r),document.removeEventListener(`keydown`,i)}),(r,i)=>(s(),k(`span`,{ref_key:`root`,ref:n,class:`concept-help`},[M(`button`,{class:h([`help-button`,{open:t.value}]),type:`button`,"aria-expanded":t.value,"aria-label":t.value?`개념 설명 닫기`:`개념 설명 보기`,title:t.value?`닫기`:`개념 설명 보기`,onClick:i[0]||=e=>t.value=!t.value},[t.value?(s(),k(`svg`,Ce,[...i[1]||=[M(`path`,{d:`M18 6 6 18M6 6l12 12`},null,-1)]])):(s(),k(`svg`,we,[...i[2]||=[M(`circle`,{cx:`12`,cy:`12`,r:`9.5`},null,-1),M(`path`,{d:`M12 16.5v-5`},null,-1),M(`circle`,{cx:`12`,cy:`8`,r:`1.15`,fill:`currentColor`,stroke:`none`},null,-1)]]))],10,Se),j(M(`span`,Te,[i[3]||=M(`span`,{class:`help-arrow`,"aria-hidden":`true`},null,-1),i[4]||=M(`span`,{class:`help-label`},`개념 설명`,-1),M(`span`,Ee,A(e.text),1)],512),[[R,t.value]])],512))}},[[`__scopeId`,`data-v-46feb191`]]),De=e({default:()=>Be}),Oe={class:`practice-card`},ke={class:`practice-area`},Ae=[`disabled`],je={class:`practice-area`},Me={class:`practice-area`},Ne={class:`input-group`},Pe={class:`practice-area`},Fe={class:`practice-area`},Ie=`https://vuejs.org`,Le=`https://vuejs.org/images/logo.png`,Re=`user-profile-card`,ze=`https://vuejs.org/images/logo.png`,Be=K({__name:`BindPractice`,setup(e){let t=y(!0),n=y(!1),r=y(`dark-box`),i=y(`purple`),a=y(200),c={height:`80px`,color:`white`,backgroundColor:`#42b883`,transition:`all 0.3s ease`};return(e,l)=>(s(),k(`section`,Oe,[M(`div`,ke,[M(`h2`,null,[l[4]||=g(` v-bind 디렉티브 기본 (축약형: 콜론) `,-1),N(J,{text:`v-bind는 href, src, disabled 같은 HTML 속성에 JavaScript 데이터를 연결합니다. 축약형은 : 입니다.`})]),M(`a`,{href:Ie,target:`_blank`},`Vue 공식 사이트`),M(`img`,{src:Le,alt:`Vue 로고`,width:`80`}),M(`button`,{disabled:t.value},`잠기는 버튼`,8,Ae),M(`button`,{onClick:l[0]||=e=>t.value=!t.value},` 잠금 상태 변경 `)]),M(`div`,je,[M(`h2`,null,[l[5]||=g(` v-bind 디렉티브 고급 (클래스 바인딩) `,-1),N(J,{text:`:class는 조건에 따라 CSS 클래스를 추가하거나 제거합니다. 객체와 배열 형식을 사용할 수 있습니다.`})]),M(`p`,{class:h({danger:n.value})},` 현재 경고 상태: `+A(n.value),3),M(`button`,{onClick:l[1]||=e=>n.value=!n.value},`경고 상태 변경`),M(`div`,{class:h([r.value,n.value?`red-border`:`gray-border`])},` 배열로 클래스를 조합한 상자 `,2)]),M(`div`,Me,[M(`h2`,null,[l[6]||=g(` v-bind 디렉티브 고급 (스타일 바인딩) `,-1),N(J,{text:`:style은 색상이나 크기 같은 인라인 CSS 값을 데이터와 직접 연결합니다. 객체와 배열 형식을 지원합니다.`})]),M(`p`,{style:o({color:i.value,fontWeight:`bold`})},` 동적 스타일이 적용된 글자 `,4),M(`button`,{onClick:l[2]||=e=>i.value=i.value===`purple`?`blue`:`purple`},` 글자색 변경 `),M(`div`,Ne,[l[7]||=M(`label`,{for:`box-width`},`박스 너비: `,-1),j(M(`input`,{id:`box-width`,"onUpdate:modelValue":l[3]||=e=>a.value=e,type:`number`,step:`50`},null,512),[[I,a.value,void 0,{number:!0}]])]),M(`div`,{class:`size-box`,style:o([c,{width:a.value+`px`}])},A(a.value)+`px `,5)]),M(`div`,Pe,[M(`h2`,null,[l[8]||=g(` Class Binding vs. Style Binding `,-1),N(J,{text:`미리 만든 디자인을 바꿀 때는 :class, 너비처럼 값 자체를 실시간으로 바꿀 때는 :style이 적합합니다.`})]),l[9]||=M(`p`,null,[g(` 미리 만든 디자인을 상태에 따라 바꿀 때는 `),M(`strong`,null,`:class`),g(`를 사용합니다. `)],-1),l[10]||=M(`p`,null,[g(` 너비나 색상 값을 실시간으로 직접 바꿀 때는 `),M(`strong`,null,`:style`),g(`을 사용합니다. `)],-1)]),M(`div`,Fe,[M(`h2`,null,[l[11]||=g(` v-bind 디렉티브 고급 (단축 문법) `,-1),N(J,{text:`HTML 속성명과 JavaScript 변수명이 같으면 :src='src'를 :src처럼 줄일 수 있는 Vue 3.4 이상의 문법입니다.`})]),M(`div`,{id:Re},[M(`img`,{src:ze,alt:`Vue 로고`,width:`50`})])])]))}},[[`__scopeId`,`data-v-e7a49731`]]),Ve=e({default:()=>Ze}),He={class:`practice-card`},Ue={key:0},We={key:1},Ge={key:2,style:{color:`green`,"font-weight":`bold`}},Ke={key:3,style:{color:`blue`}},qe={key:4,style:{color:`orange`}},Je={key:5,style:{color:`red`,"font-weight":`bold`}},Ye={class:`box`},Xe={class:`practice-area comparison-area`},Ze=K({__name:`ConditionalPractice`,setup(e){let t=y(!1),n=y(85),r=y(!0);return(e,i)=>(s(),k(`section`,He,[M(`h2`,null,[i[3]||=g(` v-if, v-else-if, v-else 디렉티브 학습 `,-1),N(J,{text:`조건에 따라 DOM 요소를 생성하거나 제거합니다. 여러 조건은 v-else-if와 v-else로 이어서 표현합니다.`})]),i[8]||=M(`h3`,null,`1) 기본 로그인 상태 스위치`,-1),t.value?(s(),k(`p`,Ue,`환영합니다! 회원 전용 화면입니다.`)):(s(),k(`p`,We,`로그인이 필요합니다. 먼저 로그인해 주세요.`)),M(`button`,{onClick:i[0]||=e=>t.value=!t.value},A(t.value?`로그아웃 하기`:`로그인 하기`),1),i[9]||=M(`br`,null,null,-1),i[10]||=M(`h3`,null,`2) 성적별 학점 등급 측정 (다중 조건문)`,-1),i[11]||=M(`label`,null,`현재 점수 입력: `,-1),j(M(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`number`,min:`0`,max:`100`,step:`5`},null,512),[[I,n.value]]),i[12]||=M(`br`,null,null,-1),n.value>=90?(s(),k(`div`,Ge,` 합격 등급: A 학점 (훌륭합니다!) `)):n.value>=80?(s(),k(`div`,Ke,` 합격 등급: B 학점 (양호합니다.) `)):n.value>=70?(s(),k(`div`,qe,` 합격 등급: C 학점 (조금 더 분발하세요.) `)):(s(),k(`div`,Je,` 합격 등급: F 학점 (재시험 대상입니다.) `)),M(`h2`,null,[i[4]||=g(` v-show 디렉티브 학습 `,-1),N(J,{text:`v-show는 요소를 DOM에 유지하면서 CSS display 속성으로 보이거나 숨깁니다.`})]),M(`button`,{onClick:i[2]||=e=>r.value=!r.value},` 화면 토글하기 `),i[13]||=M(`br`,null,null,-1),j(M(`div`,Ye,[...i[5]||=[M(`p`,null,`v-show 상자`,-1),M(`p`,null,` 조건이 false가 되면 CSS display: none이 붙습니다. `,-1)]],512),[[R,r.value]]),M(`div`,Xe,[M(`h2`,null,[i[6]||=g(` v-if vs. v-show `,-1),N(J,{text:`전환이 드물면 DOM을 생성·제거하는 v-if, 자주 열고 닫으면 display만 바꾸는 v-show가 적합합니다.`})]),i[7]||=M(`p`,null,` v-if는 DOM을 생성·제거하고, v-show는 DOM을 유지한 채 CSS display 속성으로 표시 여부를 바꿉니다. `,-1)])]))}},[[`__scopeId`,`data-v-e3392bd5`]]),Qe=e({default:()=>lt}),$e={class:`practice-card`},et={class:`practice-area`},tt={class:`practice-area`},nt={class:`practice-area`},rt=[`disabled`],it=[`disabled`],at={class:`practice-area`},ot={class:`practice-area`},st={class:`modifier-stop-area`},ct={class:`modifier-chain-area`},lt=K({__name:`EventPractice`,setup(e){let t=y(0),n=y(``),i=y(!1),a=y(``),c=y(``),l=y(`transparent`),u=y(0),d=y(!1),f=y(0),p=y(0),m=y(0),h=()=>{window.alert(`함수가 성공적으로 호출되었습니다!`)},_=e=>{n.value=`창 좌표: X=${e.clientX}, Y=${e.clientY} / 문서 좌표: X=${e.pageX}, Y=${e.pageY}`},v=()=>{i.value||(window.addEventListener(`click`,_),i.value=!0,n.value=`좌표 확인 중: 브라우저 창 안을 클릭해 보세요.`)},b=()=>{window.removeEventListener(`click`,_),i.value=!1},x=(e,t)=>{a.value=`대상: ${e} / 클릭된 태그: ${t.target.tagName}`},S=e=>{let t=e.currentTarget.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.round(n*360);u.value=n*100,l.value=`hsl(${r}, 100%, 50%)`,c.value=`무지개 바 선택 / HSL 값: hsl(${r}, 100%, 50%)`},C=e=>{d.value=!0,e.currentTarget.setPointerCapture(e.pointerId),S(e)},w=e=>{d.value&&S(e)},T=e=>{d.value&&(S(e),d.value=!1,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},E=()=>{window.alert(`수식어 덕분에 네이버로 이동하지 않고 함수만 실행됩니다!`)},D=()=>{window.alert(`부모 박스가 클릭되었습니다!`)},O=()=>{window.alert(`1번 자식 클릭!`)},j=()=>{window.alert(`2번 자식(나만 켜짐) 클릭!`)},P=()=>{f.value++},F=()=>{p.value++},I=()=>{f.value=0,p.value=0,m.value++};return r(()=>{window.removeEventListener(`click`,_)}),(e,r)=>(s(),k(`section`,$e,[M(`h2`,null,[r[2]||=g(` v-on 이벤트 핸들링 기초 `,-1),N(J,{text:`v-on은 클릭이나 키보드 입력 같은 이벤트를 감지해 코드를 실행합니다. 축약형은 @입니다.`})]),M(`div`,et,[M(`h3`,null,[r[3]||=g(` 1) 인라인 연산 처리 `,-1),N(J,{text:`Inline Handler는 count++처럼 간단한 JavaScript 표현식을 템플릿 안에서 바로 실행하는 방식입니다.`})]),M(`p`,null,`현재 카운트: `+A(t.value),1),M(`button`,{onClick:r[0]||=e=>t.value++},`1씩 증가`)]),M(`div`,tt,[M(`h3`,null,[r[4]||=g(` 2) 스크립트 함수 호출 `,-1),N(J,{text:`Method Handler는 script에 함수를 정의하고 이벤트에는 함수 이름을 연결하는 방식입니다.`})]),M(`button`,{onClick:h},`알림창 띄우기`)]),M(`div`,nt,[M(`h2`,null,[r[5]||=g(` v-on 이벤트 객체($event) 활용 `,-1),N(J,{text:`함수 이름만 전달하면 이벤트 객체가 자동으로 전달됩니다. 다른 값과 이벤트 객체를 함께 넘길 때는 $event를 명시합니다.`})]),M(`p`,null,A(n.value||`좌표 확인 시작 버튼을 눌러주세요.`),1),M(`p`,null,` 현재 상태: `+A(i.value?`좌표 확인 중`:`좌표 확인 중지`),1),M(`p`,null,A(a.value||`태그: 버튼을 클릭해 보세요.`),1),M(`button`,{disabled:i.value,onClick:L(v,[`stop`])},` 좌표 확인 시작 `,8,rt),M(`button`,{disabled:!i.value,onClick:L(b,[`stop`])},` 좌표 그만 확인하기 `,8,it),M(`button`,{onClick:r[1]||=e=>x(`회원A`,e)},` 회원 정보와 태그 확인 `)]),M(`div`,at,[M(`h2`,null,[r[6]||=g(` 클릭한 색상 알아내기 `,-1),N(J,{text:`색상 이름은 함수 인자로 전달하고, 실제 CSS 배경색은 $event의 currentTarget에서 읽습니다.`})]),M(`div`,{class:`rainbow-bar`,role:`button`,tabindex:`0`,"aria-label":`무지개 색상 선택`,onPointerdown:C,onPointermove:w,onPointerup:T,onPointercancel:T},[M(`span`,{class:`rainbow-marker`,style:o({left:u.value+`%`})},null,4)],32),M(`p`,null,A(c.value||`무지개 바나 색상 버튼을 클릭해 보세요.`),1),M(`div`,{class:`selected-color`,style:o({backgroundColor:l.value})},null,4)]),M(`div`,ot,[M(`h2`,null,[r[7]||=g(` 이벤트 수식어(Modifiers) 학습 `,-1),N(J,{text:`이벤트 수식어는 이벤트의 기본 동작이나 전파 방식을 간단한 접미어로 제어합니다.`})]),M(`h3`,null,[r[8]||=g(` 1) .prevent (기본 동작 막기) `,-1),N(J,{text:`.prevent는 preventDefault()와 같으며 링크 이동이나 폼 제출 후 새로고침 같은 기본 동작을 막습니다.`})]),M(`a`,{href:`https://www.naver.com`,onClick:L(E,[`prevent`])},` 네이버 링크 `),M(`div`,st,[M(`h3`,null,[r[9]||=g(` 2) .stop (이벤트 버블링 막기) `,-1),N(J,{text:`.stop은 stopPropagation()과 같으며 자식에서 발생한 이벤트가 부모로 올라가는 것을 막습니다.`})]),M(`div`,{class:`modifier-box`,onClick:D},[r[10]||=M(`p`,null,`부모 영역 (클릭 시 alert 발동)`,-1),M(`button`,{onClick:O},` 버블링 발생 버튼 `),M(`button`,{onClick:L(j,[`stop`])},` 버블링 차단 버튼 `)])]),M(`div`,ct,[M(`h3`,null,[r[11]||=g(` 3) .prevent.stop.once 연결하기 `,-1),N(J,{text:`첫 클릭에는 기본 동작 방지, 버블링 차단, 한 번만 실행이 함께 적용됩니다. once로 리스너가 제거된 뒤에는 나머지 수식어도 더 이상 실행되지 않습니다.`})]),M(`div`,{class:`modifier-box`,onClick:F},[M(`p`,null,`부모 클릭 횟수: `+A(p.value),1),M(`p`,null,`자식 함수 실행 횟수: `+A(f.value),1),(s(),k(`input`,{key:m.value,type:`checkbox`,onClickOnce:L(P,[`prevent`,`stop`])},null,32)),r[12]||=g(` 체크박스를 클릭해 보세요. `,-1)]),r[13]||=M(`p`,{class:`modifier-guide`},` 첫 클릭은 체크되지 않고 부모 클릭도 발생하지 않으며, 자식 함수만 한 번 실행됩니다. 두 번째 클릭부터는 once로 리스너가 제거되어 체크와 부모 클릭이 다시 동작합니다. `,-1),M(`button`,{onClick:L(I,[`stop`])},` 연결 수식어 실습 초기화 `)])])]))}},[[`__scopeId`,`data-v-dd838579`]]),ut=e({default:()=>pt}),dt={class:`practice-card`},ft={class:`practice-area lists`},pt=K({__name:`ForPractice`,setup(e){let t=y([`사과`,`바나나`,`딸기`]),n=y({name:`홍길동`,age:25,role:`개발자`}),r=y([{id:`prod-101`,name:`아이폰`},{id:`prod-102`,name:`갤럭시`}]);return(e,i)=>(s(),k(`section`,dt,[M(`h2`,null,[i[0]||=g(` v-for 디렉티브 학습 `,-1),N(J,{text:`v-for는 배열이나 객체의 항목을 반복해서 화면에 출력합니다. 각 항목에는 가능한 한 고유한 :key를 지정합니다.`})]),M(`div`,ft,[M(`div`,null,[i[1]||=M(`h3`,null,`배열 반복`,-1),M(`ul`,null,[(s(!0),k(C,null,P(t.value,(e,t)=>(s(),k(`li`,{key:e},A(t+1)+`번 과일: `+A(e),1))),128))])]),M(`div`,null,[i[2]||=M(`h3`,null,`객체 반복`,-1),M(`ul`,null,[(s(!0),k(C,null,P(n.value,(e,t,n)=>(s(),k(`li`,{key:t},` [`+A(n)+`] `+A(t)+`: `+A(e),1))),128))])]),M(`div`,null,[i[3]||=M(`h3`,null,`객체 배열 반복`,-1),M(`ul`,null,[(s(!0),k(C,null,P(r.value,e=>(s(),k(`li`,{key:e.id},A(e.name),1))),128))])])])]))}},[[`__scopeId`,`data-v-e533b99b`]]),mt=e({default:()=>bt}),ht={class:`practice-card`},gt={class:`practice-area`},_t={class:`practice-area`},vt=[`innerHTML`],yt={class:`practice-area`},Y=`이 글자는 <span style="color: red; font-weight: bold;">빨간색 굵은 글자</span>이다.`,bt=K({__name:`HtmlTextPractice`,setup(e){let t=y(``),n=y(``);function r(){n.value=t.value}return(e,i)=>(s(),k(`section`,ht,[M(`div`,gt,[M(`h2`,null,[i[1]||=g(` v-html 디렉티브 학습 `,-1),N(J,{text:`v-html은 문자열에 들어 있는 HTML 태그를 실제 HTML 요소로 해석해 출력합니다.`})]),i[2]||=M(`h3`,null,`일반 보간법 {{ }} 사용 결과:`,-1),M(`p`,null,A(Y)),i[3]||=M(`br`,null,null,-1),i[4]||=M(`h3`,null,`v-html 디렉티브 사용 결과:`,-1),M(`p`,{innerHTML:Y})]),M(`div`,_t,[M(`h2`,null,[i[5]||=g(` v-html XSS 학습 `,-1),N(J,{text:`XSS는 악성 스크립트가 다른 사용자의 브라우저에서 실행되는 공격입니다. 사용자 입력을 v-html에 직접 연결하면 위험합니다.`})]),j(M(`input`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,placeholder:`내용을 입력하세요`},null,512),[[I,t.value]]),M(`button`,{onClick:r},`확인`),M(`div`,{innerHTML:n.value},null,8,vt)]),i[7]||=M(`p`,{class:`warning`},` 위 코드는 XSS 위험을 확인하기 위한 학습용 예제입니다. 실제 서비스에서는 사용자 입력을 v-html로 직접 출력하지 않습니다. `,-1),M(`div`,yt,[M(`h2`,null,[i[6]||=g(` v-text 디렉티브 학습 `,-1),N(J,{text:`v-text는 값을 일반 텍스트로 출력합니다. HTML 태그가 포함되어 있어도 실제 태그로 해석하지 않습니다.`})]),M(`p`,{textContent:Y})])]))}},[[`__scopeId`,`data-v-860fa86e`]]),xt=e({default:()=>Bt}),St={class:`practice-card`},Ct={class:`practice-area`},wt={class:`form-item`},Tt={class:`form-item`},Et=[`value`],Dt={class:`practice-area`},Ot={class:`form-item`},kt={class:`form-item`},At={class:`form-item`},jt={class:`option-group`},Mt={class:`form-item`},Nt={class:`option-group`},Pt={class:`form-item`},Ft={class:`practice-area`},It={class:`form-item`},Lt={class:`form-item`},Rt={class:`form-item`},zt={class:`form-item`},Bt=K({__name:`ModelPractice`,setup(e){let t=y(``),n=y(``),r=y(``),i=y(!1),a=y([]),o=y(``),c=y(``),l=y(``),u=y(``),d=y(``),f=y(``);return(e,p)=>(s(),k(`section`,St,[M(`div`,Ct,[M(`h2`,null,[p[14]||=g(` v-model 양방향 데이터 바인딩 `,-1),N(J,{text:`v-model은 입력 요소의 값과 Vue 데이터를 연결해 한쪽이 바뀌면 다른 쪽도 자동으로 반영되게 합니다.`})]),M(`div`,wt,[p[16]||=M(`h3`,null,`1) v-model 축약 문법 (양방향)`,-1),j(M(`input`,{"onUpdate:modelValue":p[0]||=e=>t.value=e,type:`text`,placeholder:`여기에 입력하세요`},null,512),[[I,t.value]]),M(`p`,null,[p[15]||=g(` 입력된 값: `,-1),M(`strong`,null,A(t.value),1)])]),M(`div`,Tt,[p[18]||=M(`h3`,null,`2) v-model의 내부 작동 원리 (단방향 + 이벤트)`,-1),M(`input`,{value:n.value,type:`text`,placeholder:`원리 파악용 입력창`,onInput:p[1]||=e=>n.value=e.target.value},null,40,Et),M(`p`,null,[p[17]||=g(` 입력된 값: `,-1),M(`strong`,null,A(n.value),1)])])]),M(`div`,Dt,[M(`h2`,null,[p[19]||=g(` 모든 HTML Form 요소와 v-model 매핑 `,-1),N(J,{text:`Form 요소마다 v-model이 저장하는 값의 형태가 다릅니다. 단일 체크박스는 Boolean, 다중 체크박스는 Array로 시작합니다.`})]),M(`div`,Ot,[p[20]||=M(`h3`,null,`1) Textarea (장문 텍스트)`,-1),j(M(`textarea`,{"onUpdate:modelValue":p[2]||=e=>r.value=e,placeholder:`의견을 남겨주세요`},null,512),[[I,r.value]]),M(`p`,null,`데이터 상태: `+A(r.value),1)]),M(`div`,kt,[p[22]||=M(`h3`,null,`2) 단일 Checkbox (동의 여부)`,-1),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[3]||=e=>i.value=e,type:`checkbox`},null,512),[[F,i.value]]),p[21]||=g(` 약관에 동의합니다. `,-1)]),M(`p`,null,`데이터 상태: `+A(i.value),1)]),M(`div`,At,[p[26]||=M(`h3`,null,`3) 다중 Checkbox (복수 선택 → 배열에 저장)`,-1),M(`div`,jt,[M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[4]||=e=>a.value=e,type:`checkbox`,value:`사과`},null,512),[[F,a.value]]),p[23]||=g(` 사과 `,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[5]||=e=>a.value=e,type:`checkbox`,value:`바나나`},null,512),[[F,a.value]]),p[24]||=g(` 바나나 `,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[6]||=e=>a.value=e,type:`checkbox`,value:`딸기`},null,512),[[F,a.value]]),p[25]||=g(` 딸기 `,-1)])]),M(`p`,null,`데이터 상태 (배열): `+A(a.value),1)]),M(`div`,Mt,[p[29]||=M(`h3`,null,`4) Radio (단일 선택)`,-1),M(`div`,Nt,[M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[7]||=e=>o.value=e,type:`radio`,value:`남성`},null,512),[[z,o.value]]),p[27]||=g(` 남성 `,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[8]||=e=>o.value=e,type:`radio`,value:`여성`},null,512),[[z,o.value]]),p[28]||=g(` 여성 `,-1)])]),M(`p`,null,`데이터 상태: `+A(o.value),1)]),M(`div`,Pt,[p[31]||=M(`h3`,null,`5) Select (드롭다운 선택)`,-1),j(M(`select`,{"onUpdate:modelValue":p[9]||=e=>c.value=e},[...p[30]||=[M(`option`,{value:``},`-- 선택하세요 --`,-1),M(`option`,{value:`tesla`},`테슬라`,-1),M(`option`,{value:`hyundai`},`현대자동차`,-1),M(`option`,{value:`bmw`},`BMW`,-1)]],512),[[B,c.value]]),M(`p`,null,`데이터 상태: `+A(c.value),1)])]),M(`div`,Ft,[M(`h2`,null,[p[32]||=g(` v-model 수식어(Modifiers) 활용 `,-1),N(J,{text:`v-model 수식어는 값의 반영 시점이나 저장 형태를 간단히 제어합니다. .lazy, .number, .trim을 단독 또는 연결해서 사용할 수 있습니다.`})]),M(`div`,It,[p[34]||=M(`h3`,null,`1) .lazy 수식어 (change 이벤트 시점 반영)`,-1),j(M(`input`,{"onUpdate:modelValue":p[10]||=e=>l.value=e,type:`text`,placeholder:`입력 후 Enter 또는 외부 클릭`},null,512),[[I,l.value,void 0,{lazy:!0}]]),M(`p`,null,[p[33]||=g(` 실시간이 아닌 확정된 값: `,-1),M(`strong`,null,A(l.value),1)])]),M(`div`,Lt,[p[37]||=M(`h3`,null,`2) .number 수식어 (Number 타입 자동 형변환)`,-1),j(M(`input`,{"onUpdate:modelValue":p[11]||=e=>u.value=e,type:`text`,placeholder:`나이를 입력하세요`},null,512),[[I,u.value,void 0,{number:!0}]]),M(`p`,null,[p[35]||=g(` 입력된 값: `,-1),M(`strong`,null,A(u.value),1)]),M(`p`,null,[p[36]||=g(` 데이터 타입: `,-1),M(`strong`,null,A(typeof u.value),1)])]),M(`div`,Rt,[p[40]||=M(`h3`,null,`3) .trim 수식어 (양끝 공백 자동 제거)`,-1),j(M(`input`,{"onUpdate:modelValue":p[12]||=e=>d.value=e,type:`text`,placeholder:`앞뒤 공백을 포함해 입력해 보세요`},null,512),[[I,d.value,void 0,{trim:!0}]]),M(`p`,null,[p[38]||=g(` 공백 제거된 값: `,-1),M(`strong`,null,`"`+A(d.value)+`"`,1)]),M(`p`,null,[p[39]||=g(` 문자열 길이: `,-1),M(`strong`,null,A(d.value.length),1)])]),M(`div`,zt,[p[43]||=M(`h3`,null,`4) Chaining (수식어 체이닝: .trim.number)`,-1),j(M(`input`,{"onUpdate:modelValue":p[13]||=e=>f.value=e,type:`text`,placeholder:`공백과 숫자를 섞어 입력해 보세요`},null,512),[[I,f.value,void 0,{trim:!0,number:!0}]]),M(`p`,null,[p[41]||=g(` 처리된 값: `,-1),M(`strong`,null,`"`+A(f.value)+`"`,1)]),M(`p`,null,[p[42]||=g(` 데이터 타입: `,-1),M(`strong`,null,A(typeof f.value),1)])])])]))}},[[`__scopeId`,`data-v-208c25e3`]]),Vt=e({default:()=>Ut}),Ht={class:`practice-card`},Ut={__name:`ReactivityPractice`,setup(e){let t=0,n=y(0),r=y(`hello vue`);return(e,i)=>(s(),k(`section`,Ht,[M(`h2`,null,[i[2]||=g(` 실습 1 — Reactivity와 보간법 `,-1),N(J,{text:`Reactivity는 데이터가 바뀌면 화면도 자동으로 갱신되는 특성이고, 보간법은 {{ }} 안의 값이나 표현식을 화면에 출력하는 문법입니다.`})]),M(`div`,null,[M(`p`,null,`일반 변수: `+A(_(t)),1),M(`button`,{onClick:i[0]||=e=>O(t)?t.value++:t++},`일반 변수 증가`),M(`p`,null,`반응형 변수: `+A(n.value),1),M(`button`,{onClick:i[1]||=e=>n.value++},`반응형 변수 증가`)]),M(`div`,null,[M(`p`,null,`원래 문자열: `+A(r.value),1),M(`p`,null,`대문자 변환: `+A(r.value.toUpperCase()),1),M(`p`,null,A(`Random number: `+Math.ceil(Math.random()*100)),1)])]))}},Wt=e({default:()=>Zt}),Gt={class:`practice-card`},Kt={class:`practice-area`},qt={class:`practice-area`},Jt={class:`practice-area`},Yt={class:`practice-area`},Xt={class:`button-group`},Zt=K({__name:`SpecialDirectivePractice`,setup(e){let t=y(`안녕하세요!`),n=y(1),r=y(`홍길동`),a=y(20);return(e,o)=>(s(),k(`section`,Gt,[M(`div`,Kt,[M(`h2`,null,[o[5]||=g(` v-pre 디렉티브 학습 `,-1),N(J,{text:`v-pre는 해당 요소와 자식의 Vue 문법을 해석하지 않고 작성된 내용을 그대로 표시합니다.`})]),M(`p`,null,`일반 출력: `+A(t.value),1),o[6]||=M(`p`,null,`v-pre 출력: {{ message }}`,-1)]),M(`div`,qt,[M(`h2`,null,[o[7]||=g(` v-cloak 디렉티브 학습 `,-1),N(J,{text:`v-cloak은 Vue가 준비되기 전에 {{ message }} 같은 템플릿 원문이 잠깐 보이는 것을 CSS와 함께 방지합니다.`})]),M(`p`,null,`Vue가 준비되면 표시: `+A(t.value),1)]),M(`div`,Jt,[M(`h2`,null,[o[8]||=g(` v-once 디렉티브 학습 `,-1),N(J,{text:`v-once는 최초 한 번만 렌더링하고 이후 데이터가 변경되어도 해당 화면을 갱신하지 않습니다.`})]),M(`p`,null,`일반 값: `+A(n.value),1),o[0]||(i(-1,!0),(o[0]=M(`p`,null,[g(`최초 값으로 고정: `+A(n.value),1)])).cacheIndex=0,i(1),o[0]),M(`button`,{onClick:o[1]||=e=>n.value++},`숫자 증가`)]),M(`div`,Yt,[M(`h2`,null,[o[9]||=g(` v-memo 디렉티브 학습 `,-1),N(J,{text:`v-memo는 지정한 의존성이 바뀔 때만 영역을 다시 렌더링합니다. 큰 목록 등 실제 성능 문제가 있는 경우에 제한적으로 사용합니다.`})]),D([r.value,a.value],()=>(s(),k(`div`,{class:`memo-box`},[M(`p`,null,`이름: `+A(r.value),1),M(`p`,null,`나이: `+A(a.value),1)])),o,2),M(`div`,Xt,[M(`button`,{onClick:o[3]||=e=>r.value=r.value===`홍길동`?`이순신`:`홍길동`},` 이름 변경 `),M(`button`,{onClick:o[4]||=e=>a.value++},`나이 증가`)])])]))}},[[`__scopeId`,`data-v-0ad0fb48`]]),Qt={type:`button`,class:`base-button`},$t=K({__name:`BaseButton`,props:{label:{type:String,default:`기본 버튼`}},setup(e){return(t,n)=>(s(),k(`button`,Qt,A(e.label),1))}},[[`__scopeId`,`data-v-2e39ae80`]]),en=e({default:()=>sn}),tn={class:`practice-card`},nn={class:`practice-area`},rn={class:`row`},an={class:`practice-area`},on={class:`row`},sn=K({__name:`ComponentRegistrationPractice`,setup(e){return(e,t)=>{let n=m(`GlobalBadge`);return s(),k(`section`,tn,[M(`h2`,null,[t[0]||=g(` Component 등록 — 지역 vs 전역 `,-1),N(J,{text:`지역 등록은 쓰는 파일에서 import 하는 방식이라 어디서 쓰는지 코드로 드러납니다. 전역 등록은 main.js에서 app.component()로 한 번만 해두면 어디서든 import 없이 쓸 수 있지만, 안 쓰는 컴포넌트까지 번들에 들어갑니다.`})]),M(`div`,nn,[t[1]||=M(`h3`,null,`1) 지역(Local) 등록 — import 한 줄이 등록`,-1),t[2]||=M(`p`,{class:`explain`},[g(` 아래 두 버튼은 `),M(`b`,null,`같은 컴포넌트`),g(`입니다. 등록한 컴포넌트는 PascalCase와 kebab-case 두 가지로 부를 수 있습니다. `)],-1),M(`div`,rn,[N($t,{label:`PascalCase 호출`}),N($t,{label:`kebab-case 호출`})]),t[3]||=M(`pre`,{class:`code`},`import BaseButton from './BaseButton.vue'

<BaseButton />
<base-button></base-button>`,-1)]),M(`div`,an,[t[4]||=M(`h3`,null,`2) 전역(Global) 등록 — import가 없다`,-1),t[5]||=M(`p`,{class:`explain`},[g(` 아래 배지는 이 파일에서 `),M(`b`,null,`import 하지 않았습니다.`),g(` main.js에서 한 번 등록해 둔 덕분에 바로 쓸 수 있습니다. `)],-1),M(`div`,on,[N(n),N(n,{text:`어디서든 사용 가능`})]),t[6]||=M(`pre`,{class:`code`},`// main.js
app.component('GlobalBadge', GlobalBadge)

// 이 파일 — import 없이 바로
<GlobalBadge />`,-1)]),t[7]||=S(`<div class="practice-area" data-v-369125df><h3 data-v-369125df>3) 언제 무엇을 쓸까</h3><table class="compare" data-v-369125df><thead data-v-369125df><tr data-v-369125df><th data-v-369125df></th><th data-v-369125df>지역 등록</th><th data-v-369125df>전역 등록</th></tr></thead><tbody data-v-369125df><tr data-v-369125df><td data-v-369125df>등록 위치</td><td data-v-369125df>쓰는 파일에서 import</td><td data-v-369125df>main.js 한 곳</td></tr><tr data-v-369125df><td data-v-369125df>사용 범위</td><td data-v-369125df>그 파일 안에서만</td><td data-v-369125df>앱 전체</td></tr><tr data-v-369125df><td data-v-369125df>의존 관계</td><td data-v-369125df>코드에 드러남</td><td data-v-369125df>어디서 왔는지 안 보임</td></tr><tr data-v-369125df><td data-v-369125df>번들 크기</td><td data-v-369125df>쓰는 것만 포함</td><td data-v-369125df>안 써도 포함</td></tr><tr data-v-369125df><td data-v-369125df>적합한 경우</td><td data-v-369125df><b data-v-369125df>대부분의 컴포넌트</b></td><td data-v-369125df>앱 전반에서 반복되는 소수</td></tr></tbody></table></div>`,1)])}}},[[`__scopeId`,`data-v-369125df`]]),cn={class:`counter-display`},ln=K({__name:`LifecycleChild`,setup(e){let t=y(0),n=null;return console.log(`1. [setup] 컴포넌트가 메모리에 생성되었습니다. (DOM 접근 불가능)`),l(()=>{console.log(`2. [onMounted] 화면에 완벽히 부착되었습니다! (API 호출/DOM 조작 적기)`),n=setInterval(()=>{t.value++},3e3)}),a(()=>{console.log(`3. [onUpdated] 데이터가 변경되어 화면을 새로 그렸습니다. (현재 count: ${t.value})`)}),r(()=>{clearInterval(n),console.log(`4. [onUnmounted] 컴포넌트가 소멸했습니다. 타이머 청소 완료!`)}),(e,n)=>(s(),k(C,null,[n[1]||=M(`h3`,null,`⏱️ 라이프사이클 훅 흐름 탐색기`,-1),M(`div`,cn,[M(`p`,null,`실시간 타이머 카운트: `+A(t.value),1),M(`button`,{onClick:n[0]||=e=>t.value++},`수동으로 숫자 올리기`)])],64))}},[[`__scopeId`,`data-v-4c2f5f04`]]),un=e({default:()=>pn}),dn={class:`practice-card`},fn={key:1,class:`gone`},pn=K({__name:`LifecyclePractice`,setup(e){let t=y(!0);return(e,n)=>(s(),k(`section`,dn,[M(`h2`,null,[n[1]||=g(` Lifecycle Hook — 생성부터 소멸까지 `,-1),N(J,{text:`컴포넌트는 생성 → 부착(mount) → 갱신(update) → 소멸(unmount)의 생애를 거칩니다. 각 시점에 Vue가 불러주는 함수가 Lifecycle Hook입니다. 브라우저 콘솔(F12)을 열고 아래 버튼으로 컴포넌트를 껐다 켜면 네 단계가 순서대로 찍힙니다.`})]),n[2]||=M(`p`,{class:`hint`},`브라우저 콘솔(F12)을 열어두고 버튼을 눌러 보세요.`,-1),M(`button`,{class:`toggle-btn`,onClick:n[0]||=e=>t.value=!t.value},A(t.value?`🛑 실습 컴포넌트 파괴하기 (v-if="false")`:`🟢 실습 컴포넌트 다시 살리기`),1),n[3]||=M(`hr`,null,null,-1),t.value?(s(),v(ln,{key:0})):(s(),k(`p`,fn,`컴포넌트가 소멸했습니다. 콘솔에서 타이머 정리 로그를 확인해 보세요.`))]))}},[[`__scopeId`,`data-v-d955f165`]]),mn={class:`child-container`},hn=K({__name:`PropsEmitsChild`,props:{parentData:{type:String,required:!0}},emits:[`update-request`],setup(e,{emit:t}){let n=t,r=()=>{n(`update-request`,`Child에서 가공한 새로운 데이터`)};return(t,n)=>(s(),k(`div`,mn,[n[1]||=M(`p`,{class:`role`},`하위 컴포넌트 (Child)`,-1),M(`p`,null,[n[0]||=g(` 수신된 Props 데이터: `,-1),M(`strong`,null,A(e.parentData),1)]),M(`button`,{onClick:r},`상위 컴포넌트로 갱신 요청 (Emit)`)]))}},[[`__scopeId`,`data-v-e98cd097`]]),gn=e({default:()=>bn}),_n={class:`practice-card`},vn={class:`parent-container`},yn={class:`state`},bn=K({__name:`PropsEmitsPractice`,setup(e){let t=y(`Parent 초기 메시지`),n=e=>{t.value=e};return(e,r)=>(s(),k(`section`,_n,[M(`h2`,null,[r[0]||=g(` Props & Emits — 부모와 자식의 대화 `,-1),N(J,{text:`데이터는 부모 → 자식 한 방향으로만 흐릅니다(Props). 자식이 값을 바꾸고 싶으면 직접 고치지 않고 부모에게 '바꿔 달라'고 신호를 보냅니다(Emits). 실제로 값을 바꾸는 주체는 언제나 데이터를 가진 부모입니다.`})]),M(`div`,vn,[r[2]||=M(`p`,{class:`role`},`상위 컴포넌트 (Parent)`,-1),M(`p`,yn,[r[1]||=g(` 현재 로컬 데이터(State): `,-1),M(`strong`,null,A(t.value),1)]),N(hn,{"parent-data":t.value,onUpdateRequest:n},null,8,[`parent-data`])])]))}},[[`__scopeId`,`data-v-cfac9a78`]]),xn={class:`node child`},Sn={class:`field`},Cn={class:`val`},wn=K({__name:`FlowChild`,props:{message:{type:String,required:!0}},emits:[`reply`],setup(e,{emit:t}){let n=t;return(t,r)=>(s(),k(`div`,xn,[r[2]||=M(`p`,{class:`node-role`},`자식 (Child)`,-1),M(`p`,Sn,[r[1]||=M(`span`,{class:`key`},`props.message`,-1),M(`span`,Cn,A(e.message||`(빈 값)`),1)]),M(`button`,{onClick:r[0]||=e=>n(`reply`,`자식이 보낸 인사 👋`)},` 부모에게 신호 보내기 (emit) `)]))}},[[`__scopeId`,`data-v-8ceed664`]]),Tn=e({default:()=>Ln}),En={class:`practice-card`},Dn={class:`flow`},On={class:`node parent`},kn={class:`field`},An=[`value`],jn={class:`field`},Mn={class:`val`},Nn={class:`arrows`},Pn={class:`log`},Fn={key:0,class:`log-empty`},In={class:`log-dir`},Ln=K({__name:`PropsFlowPractice`,setup(e){let t=y(`안녕하세요`),n=y(`아직 없음`),r=y(null),i=y([]),a=e=>{r.value=e,setTimeout(()=>{r.value===e&&(r.value=null)},700)},o=(e,t)=>{i.value.unshift({dir:e,text:t}),i.value.length>6&&i.value.pop()},c=e=>{t.value=e.target.value,a(`down`),o(`down`,`props.message = "${t.value}"`)},l=e=>{n.value=e,a(`up`),o(`up`,`emit('reply', "${e}")`)};return(e,a)=>(s(),k(`section`,En,[M(`h2`,null,[a[0]||=g(` 데이터는 어느 쪽으로 흐르나 — Props ↓ / Emits ↑ `,-1),N(J,{text:`Props는 부모에서 자식으로 내려가고(↓), Emits는 자식에서 부모로 올라갑니다(↑). 반대 방향은 없습니다. 아래에서 입력하거나 버튼을 누르면 그 순간 어느 화살표가 켜지는지 확인해 보세요.`})]),M(`div`,Dn,[M(`div`,On,[a[3]||=M(`p`,{class:`node-role`},`부모 (Parent)`,-1),M(`label`,kn,[a[1]||=M(`span`,{class:`key`},`message`,-1),M(`input`,{value:t.value,type:`text`,onInput:c},null,40,An)]),M(`p`,jn,[a[2]||=M(`span`,{class:`key`},`받은 신호`,-1),M(`span`,Mn,A(n.value),1)])]),M(`div`,Nn,[M(`div`,{class:h([`arrow down`,{on:r.value===`down`}])},[...a[4]||=[M(`span`,{class:`head`},`↓`,-1),M(`span`,{class:`tag`},`props`,-1)]],2),M(`div`,{class:h([`arrow up`,{on:r.value===`up`}])},[...a[5]||=[M(`span`,{class:`head`},`↑`,-1),M(`span`,{class:`tag`},`emits`,-1)]],2)]),N(wn,{message:t.value,onReply:l},null,8,[`message`])]),M(`div`,Pn,[a[6]||=M(`p`,{class:`log-title`},`주고받은 기록`,-1),i.value.length?x(``,!0):(s(),k(`p`,Fn,`입력하거나 버튼을 눌러 보세요.`)),(s(!0),k(C,null,P(i.value,(e,t)=>(s(),k(`p`,{key:t,class:h([`log-row`,e.dir])},[M(`span`,In,A(e.dir===`down`?`↓ 내려감`:`↑ 올라감`),1),M(`code`,null,A(e.text),1)],2))),128))])]))}},[[`__scopeId`,`data-v-f9dc9376`]]),Rn={class:`child`},zn={class:`field`},Bn={class:`val`},Vn=K({__name:`ReadonlyChild`,props:{count:{type:Number,required:!0}},emits:[`increase`],setup(e,{emit:t}){let n=e,r=t,i=y(``),a=()=>{let e=n.count;try{n.count=e+1}catch{}i.value=n.count===e?`실패 — 값은 그대로 ${n.count} 입니다. (콘솔 경고 확인)`:`어라, 바뀌었습니다: ${n.count}`},o=()=>{r(`increase`),i.value=`성공 — 부모가 값을 바꿔 주었습니다.`};return(t,n)=>(s(),k(`div`,Rn,[n[1]||=M(`p`,{class:`node-role`},`자식 (Child)`,-1),M(`p`,zn,[n[0]||=M(`span`,{class:`key`},`props.count`,-1),M(`span`,Bn,A(e.count),1)]),M(`div`,{class:`buttons`},[M(`button`,{class:`bad`,onClick:a},`❌ 직접 바꾸기 (props.count++)`),M(`button`,{class:`good`,onClick:o},`✅ 부모에게 요청 (emit)`)]),i.value?(s(),k(`p`,{key:0,class:h([`result`,{fail:i.value.startsWith(`실패`)}])},A(i.value),3)):x(``,!0)]))}},[[`__scopeId`,`data-v-d711a9c2`]]),Hn=e({default:()=>qn}),Un={class:`practice-card`},Wn={class:`parent`},Gn={class:`field`},Kn={class:`val`},qn=K({__name:`PropsReadonlyPractice`,setup(e){let t=y(0),n=()=>{t.value++};return(e,r)=>(s(),k(`section`,Un,[M(`h2`,null,[r[0]||=g(` Props는 읽기 전용 — 값의 주인은 부모다 `,-1),N(J,{text:`자식이 받은 Props를 직접 바꾸면 Vue가 막습니다. 값이 어디서 바뀌었는지 추적할 수 없게 되기 때문입니다. 자식은 '바꿔 달라'고 요청(emit)하고, 실제로 바꾸는 것은 값을 가진 부모입니다.`})]),M(`div`,Wn,[r[2]||=M(`p`,{class:`node-role`},`부모 (Parent) — 값의 주인`,-1),M(`p`,Gn,[r[1]||=M(`span`,{class:`key`},`count`,-1),M(`span`,Kn,A(t.value),1)]),N(Vn,{count:t.value,onIncrease:n},null,8,[`count`])]),r[3]||=M(`p`,{class:`hint`},[g(` 브라우저 콘솔(F12)을 열고 ❌ 버튼을 누르면 `),M(`code`,null,`Set operation on key "count" failed: target is readonly`),g(` 경고가 찍힙니다. `)],-1)]))}},[[`__scopeId`,`data-v-24c24705`]]),Jn={class:`named`},Yn={class:`value`},Xn=K({__name:`DrillLeaf`,props:{theme:{type:String,required:!0}},setup(e){return(t,n)=>(s(),k(`div`,{class:h([`level`,e.theme])},[n[1]||=M(`p`,{class:`role`},`자식 (Child)`,-1),M(`p`,Jn,[n[0]||=M(`span`,{class:`name`},`props.theme :`,-1),M(`span`,Yn,A(e.theme),1)])],2))}},[[`__scopeId`,`data-v-54c3d013`]]),Zn={class:`data`},Qn=K({__name:`DrillMid`,props:{theme:{type:String,required:!0}},setup(e){let t=e,n=y(!1);return u(()=>t.theme,()=>{n.value=!0,setTimeout(()=>n.value=!1,900)}),(t,r)=>(s(),k(`div`,{class:h([`level`,{passing:n.value}])},[r[1]||=M(`p`,{class:`role`},`부모 (Parent)`,-1),M(`p`,{class:h([`hold`,{passing:n.value}])},[r[0]||=M(`span`,{class:`name`},`props.theme :`,-1),M(`span`,Zn,A(e.theme),1)],2),r[2]||=M(`p`,{class:`desc`},`😩 쓰지도 않는 값을 받아서 아래로 넘긴다`,-1),N(Xn,{theme:e.theme},null,8,[`theme`])],2))}},[[`__scopeId`,`data-v-803c609f`]]),$n={class:`named`},er={class:`value`},tr=K({__name:`InjectLeaf`,setup(e){let t=f(`globalTheme`,`(주입된 값 없음)`);return(e,n)=>(s(),k(`div`,{class:h([`level`,_(t)])},[n[1]||=M(`p`,{class:`role`},`자식 (Child)`,-1),M(`p`,$n,[n[0]||=M(`span`,{class:`name`},`inject('globalTheme') :`,-1),M(`span`,er,A(_(t)),1)])],2))}},[[`__scopeId`,`data-v-79d6cd3e`]]),nr={class:`level`},rr=K({__name:`InjectMid`,setup(e){return(e,t)=>(s(),k(`div`,nr,[t[0]||=S(`<p class="role" data-v-c476208c>부모 (Parent)</p><p class="hold" data-v-c476208c><span class="name" data-v-c476208c>props :</span><span class="none" data-v-c476208c>없음 (0개)</span></p><p class="desc" data-v-c476208c>😌 값이 지나가는지도 모른다. 조용하다.</p>`,3),N(tr)]))}},[[`__scopeId`,`data-v-c476208c`]]),ir=e({default:()=>fr}),ar={class:`practice-card`},or={class:`root`},sr={class:`field`},cr={class:`val`},lr={class:`compare`},ur={class:`col`},dr={class:`col`},fr=K({__name:`ProvideInjectPractice`,setup(e){let t=y(`dark-mode`);d(`globalTheme`,t);let n=()=>{t.value=t.value===`dark-mode`?`light-mode`:`dark-mode`};return(e,r)=>(s(),k(`section`,ar,[M(`h2`,null,[r[0]||=g(` Provide & Inject — 중간을 건너뛰고 전달하기 `,-1),N(J,{text:`계층이 깊어지면 중간 컴포넌트들이 자기는 쓰지도 않는 값을 받아서 아래로 넘기기만 하는 일이 생깁니다(Props Drilling). provide/inject는 그 중간을 건너뛰고 조상이 선언한 값을 후손이 직접 꺼내 쓰게 해 줍니다.`})]),M(`div`,or,[r[6]||=M(`p`,{class:`root-role`},`조부모 (GrandParent) — 값의 주인`,-1),M(`p`,sr,[r[1]||=M(`span`,{class:`key`},`themeColor :`,-1),M(`span`,cr,A(t.value),1),M(`button`,{onClick:n},`테마 바꾸기`)]),M(`div`,lr,[M(`div`,ur,[r[2]||=M(`p`,{class:`col-title bad`},`A · Props Drilling`,-1),r[3]||=M(`p`,{class:`col-desc`},[g(`값이 `),M(`b`,null,`중간을 통과해`),g(` 내려갑니다.`)],-1),N(Qn,{theme:t.value},null,8,[`theme`])]),M(`div`,dr,[r[4]||=M(`p`,{class:`col-title good`},`B · Provide / Inject`,-1),r[5]||=M(`p`,{class:`col-desc`},[g(`값이 `),M(`b`,null,`중간을 건너뛰고`),g(` 바로 갑니다.`)],-1),N(rr)])])]),r[7]||=M(`p`,{class:`footnote`},[g(` 버튼을 누를 때 `),M(`b`,null,`A의 중간 카드만 번쩍이는지`),g(` 보세요. 값이 그곳을 지나간다는 뜻입니다. 여기는 조부모 → 부모 → 자식 3단계라 차이가 작아 보이지만, 10단계쯤 되면 A는 중간 8곳을 전부 고쳐야 합니다. `)],-1)]))}},[[`__scopeId`,`data-v-8bf7e4c2`]]),pr={class:`sibling`},mr={class:`buttons`},hr=[`onClick`],gr=K({__name:`SiblingA`,emits:[`send`],setup(e,{emit:t}){let n=t,r=[`안녕!`,`점심 먹었어?`,`과제 다 했어?`];return(e,t)=>(s(),k(`div`,pr,[t[0]||=M(`p`,{class:`node-role`},`형제 A (보내는 쪽)`,-1),t[1]||=M(`p`,{class:`desc`},`누르면 부모에게 올려보냅니다(emit).`,-1),M(`div`,mr,[(s(),k(C,null,P(r,e=>M(`button`,{key:e,onClick:t=>n(`send`,e)},A(e),9,hr)),64))])]))}},[[`__scopeId`,`data-v-6a5f088d`]]),_r={class:`sibling`},vr=K({__name:`SiblingB`,props:{received:{type:String,default:``}},setup(e){return(t,n)=>(s(),k(`div`,_r,[n[0]||=M(`p`,{class:`node-role`},`형제 B (받는 쪽)`,-1),n[1]||=M(`p`,{class:`desc`},`부모가 내려준 값(props)만 볼 수 있습니다.`,-1),M(`p`,{class:h([`bubble`,{empty:!e.received}])},A(e.received||`아직 받은 말이 없습니다`),3)]))}},[[`__scopeId`,`data-v-c96b2e77`]]),yr=e({default:()=>wr}),br={class:`practice-card`},xr={class:`parent`},Sr={class:`route`},Cr={class:`siblings`},wr=K({__name:`SiblingTalkPractice`,setup(e){let t=y(``),n=y(0),r=e=>{n.value=1,setTimeout(()=>{t.value=e,n.value=2,setTimeout(()=>n.value=0,900)},450)};return(e,i)=>(s(),k(`section`,br,[M(`h2`,null,[i[0]||=g(` 형제끼리는 부모를 거쳐야 한다 `,-1),N(J,{text:`같은 부모 아래 나란히 있는 컴포넌트끼리는 직접 연결된 선이 없습니다. A가 B에게 말하려면 반드시 부모에게 올렸다가(emit) 부모가 다시 B에게 내려줘야(props) 합니다. 부모를 거치는 이 경로가 눈에 보이도록 만들었습니다.`})]),M(`div`,xr,[i[2]||=M(`p`,{class:`node-role`},`부모 (Parent) — 중계자`,-1),M(`div`,Sr,[M(`span`,{class:h([`leg up`,{on:n.value>=1}])},`① A → 부모 \xA0emit`,2),M(`span`,{class:h([`leg down`,{on:n.value>=2}])},`② 부모 → B \xA0props`,2)]),M(`div`,Cr,[N(gr,{onSend:r}),i[1]||=M(`span`,{class:`cut`,"aria-hidden":`true`},`✕ 직접 연결 없음`,-1),N(vr,{received:t.value},null,8,[`received`])])])]))}},[[`__scopeId`,`data-v-9ac8d55d`]]),Tr={class:`base-card`},Er={class:`slot-zone head`},Dr={class:`slot-zone body`},Or={class:`slot-zone foot`},X=K({__name:`SlotBaseCard`,setup(e){return(e,t)=>(s(),k(`div`,Tr,[M(`div`,Er,[n(e.$slots,`header`,{},()=>[t[0]||=M(`span`,{class:`fallback`},`header 구멍 (비어 있음)`,-1)],!0)]),M(`div`,Dr,[n(e.$slots,`default`,{},()=>[t[1]||=M(`span`,{class:`fallback`},`기본 구멍 (비어 있음)`,-1)],!0)]),M(`div`,Or,[n(e.$slots,`footer`,{},()=>[t[2]||=M(`span`,{class:`fallback`},`footer 구멍 (비어 있음)`,-1)],!0)])]))}},[[`__scopeId`,`data-v-fa66589e`]]),kr=e({default:()=>Fr}),Ar={class:`practice-card`},jr={class:`deck`},Mr={class:`case`},Nr={class:`case`},Pr={class:`case`},Fr=K({__name:`SlotBaseCardPractice`,setup(e){return(e,t)=>(s(),k(`section`,Ar,[M(`h2`,null,[t[0]||=g(` 더해보기 ① BaseCard 하나로 화면 3개 `,-1),N(J,{text:`아래 세 카드는 전부 같은 SlotBaseCard.vue 파일입니다. 테두리·모서리·구분선이 똑같은 이유죠. 다른 것은 부모가 header·body·footer 세 구멍에 무엇을 넣었는지뿐입니다. 껍데기를 한 번만 만들어 두고 화면마다 알맹이만 갈아 끼우는 것이 Slot의 목적입니다.`})]),t[9]||=M(`p`,{class:`explain`},[g(` 세 카드 모두 `),M(`b`,null,`같은 파일`),g(`입니다. 껍데기를 고치고 싶으면 `),M(`code`,null,`SlotBaseCard.vue`),g(` 한 곳만 고치면 세 개가 동시에 바뀝니다. `)],-1),M(`div`,jr,[M(`div`,Mr,[t[4]||=M(`p`,{class:`case-label`},`구멍 3개 모두 채움`,-1),N(X,null,{header:b(()=>[...t[1]||=[M(`b`,null,`주간 리포트`,-1)]]),footer:b(()=>[...t[2]||=[M(`button`,{type:`button`},`자세히`,-1)]]),default:b(()=>[t[3]||=M(`p`,{class:`line`},`이번 주 방문자가 12% 늘었습니다.`,-1)]),_:1})]),M(`div`,Nr,[t[7]||=M(`p`,{class:`case-label`},`footer만 비움`,-1),N(X,null,{header:b(()=>[...t[5]||=[M(`b`,null,`공지`,-1)]]),default:b(()=>[t[6]||=M(`p`,{class:`line`},`금요일 18시에 배포가 있습니다.`,-1)]),_:1})]),M(`div`,Pr,[t[8]||=M(`p`,{class:`case-label`},`아무것도 안 채움`,-1),N(X)])]),t[10]||=S(`<div class="verdict" data-v-1f455799><p class="verdict-title" data-v-1f455799>그럼 Props로 하면 안 되나?</p><div class="verdict-grid" data-v-1f455799><div class="side bad" data-v-1f455799><p class="side-head" data-v-1f455799>❌ Props로 시도</p><pre data-v-1f455799><code data-v-1f455799>&lt;BaseCard title=&quot;주간 리포트&quot; /&gt;</code></pre><p class="side-why" data-v-1f455799> 제목 <b data-v-1f455799>글자</b>는 넘길 수 있습니다. 그런데 위 첫 카드의 footer에는 <b data-v-1f455799>&lt;button&gt; 태그</b>가 들어 있습니다. Props로 버튼을 넘기려면 문자열로 <code data-v-1f455799>&quot;&lt;button&gt;&quot;</code>을 보내야 하는데, 그건 화면이 아니라 그냥 글자입니다. </p></div><div class="side good" data-v-1f455799><p class="side-head" data-v-1f455799>✅ Slot이어야만 하는 이유</p><pre data-v-1f455799><code data-v-1f455799>&lt;template #footer&gt;
  &lt;button @click=&quot;...&quot;&gt;자세히&lt;/button&gt;
&lt;/template&gt;</code></pre><p class="side-why" data-v-1f455799><b data-v-1f455799>태그·이벤트·컴포넌트</b>가 통째로 들어갑니다. 넘기는 것이 값이 아니라 화면 조각이기 때문입니다. <b data-v-1f455799>버튼 하나만 들어가도 Props로는 안 됩니다.</b></p></div></div></div>`,1)]))}},[[`__scopeId`,`data-v-1f455799`]]),Ir={class:`list`},Lr={class:`fallback`},Z=K({__name:`SlotItemList`,setup(e){let t=y([{id:1,name:`노트북 거치대`,price:32e3,stock:12},{id:2,name:`기계식 키보드`,price:89e3,stock:0},{id:3,name:`USB-C 허브`,price:45e3,stock:3}]);return(e,r)=>(s(),k(`ul`,Ir,[(s(!0),k(C,null,P(t.value,t=>(s(),k(`li`,{key:t.id},[n(e.$slots,`default`,{item:t},()=>[M(`span`,Lr,A(t.name)+` (부모가 그리는 방법을 정하지 않음)`,1)],!0)]))),128))]))}},[[`__scopeId`,`data-v-5164d7f2`]]),Rr=e({default:()=>Zr}),zr={class:`practice-card`},Br={class:`views`},Vr={class:`view`},Hr={class:`plain`},Ur={class:`view`},Wr={class:`row`},Gr={class:`price`},Kr={class:`view`},qr={class:`row`},Jr={key:0,class:`badge sold`},Yr={key:1,class:`badge low`},Xr={key:2,class:`badge ok`},Zr=K({__name:`SlotListPractice`,setup(e){let t=e=>e.toLocaleString(`ko-KR`)+`원`;return(e,n)=>(s(),k(`section`,zr,[M(`h2`,null,[n[0]||=g(` 더해보기 ② 같은 목록, 부모가 정하는 세 가지 모습 `,-1),N(J,{text:`목록 컴포넌트는 '무엇을 반복할지'(데이터와 v-for)만 책임지고, '각 항목을 어떻게 그릴지'는 부모에게 맡깁니다. 아래 세 목록은 전부 같은 SlotItemList.vue이고 데이터도 완전히 같습니다. 부모가 v-slot으로 받은 item을 다르게 그렸을 뿐입니다.`})]),n[4]||=M(`p`,{class:`explain`},[g(` 세 목록 모두 `),M(`b`,null,`같은 컴포넌트 · 같은 데이터`),g(`입니다. 데이터는 `),M(`code`,null,`SlotItemList.vue`),g(` 안에만 있고, 부모는 그리는 방법만 정합니다. `)],-1),M(`div`,Br,[M(`div`,Vr,[n[1]||=M(`p`,{class:`view-label`},`A · 이름만`,-1),N(Z,null,{default:b(({item:e})=>[M(`span`,Hr,A(e.name),1)]),_:1})]),M(`div`,Ur,[n[2]||=M(`p`,{class:`view-label`},`B · 가격 강조`,-1),N(Z,null,{default:b(({item:e})=>[M(`div`,Wr,[M(`span`,null,A(e.name),1),M(`b`,Gr,A(t(e.price)),1)])]),_:1})]),M(`div`,Kr,[n[3]||=M(`p`,{class:`view-label`},`C · 재고 상태`,-1),N(Z,null,{default:b(({item:e})=>[M(`div`,qr,[M(`span`,{class:h({out:e.stock===0})},A(e.name),3),e.stock===0?(s(),k(`span`,Jr,`품절`)):e.stock<5?(s(),k(`span`,Yr,A(e.stock)+`개 남음`,1)):(s(),k(`span`,Xr,`재고 충분`))])]),_:1})])]),n[5]||=M(`p`,{class:`note`},[g(` C의 `),M(`b`,null,`품절 · 임박`),g(` 판단은 목록 컴포넌트가 아니라 `),M(`b`,null,`부모`),g(`가 했습니다. 목록은 `),M(`code`,null,`stock`),g(`이 무슨 뜻인지조차 모릅니다. 그래서 같은 목록을 쇼핑몰에도, 관리자 페이지에도 쓸 수 있습니다. `)],-1)]))}},[[`__scopeId`,`data-v-94406ce4`]]),Qr={class:`modal`,role:`dialog`,"aria-modal":`true`},$r={class:`modal-head`},ei={class:`modal-body`},ti={class:`modal-foot`},ni=K({__name:`SlotModal`,props:{open:{type:Boolean,default:!1}},emits:[`close`],setup(e,{emit:t}){let r=t;return(t,i)=>e.open?(s(),k(`div`,{key:0,class:`backdrop`,onClick:i[2]||=L(e=>r(`close`),[`self`])},[M(`div`,Qr,[M(`header`,$r,[n(t.$slots,`title`,{},()=>[i[3]||=M(`b`,null,`제목 없음`,-1)],!0),M(`button`,{type:`button`,class:`close`,"aria-label":`닫기`,onClick:i[0]||=e=>r(`close`)},`✕`)]),M(`div`,ei,[n(t.$slots,`default`,{},()=>[i[4]||=M(`p`,{class:`fallback`},`본문 구멍 (비어 있음)`,-1)],!0)]),M(`footer`,ti,[n(t.$slots,`actions`,{},()=>[M(`button`,{type:`button`,onClick:i[1]||=e=>r(`close`)},`닫기`)],!0)])])])):x(``,!0)}},[[`__scopeId`,`data-v-4b2f4b14`]]),ri=e({default:()=>li}),ii={class:`practice-card`},ai={class:`stage`},oi={class:`buttons`},si={key:0,class:`result`},ci={key:1,class:`hint`},li=K({__name:`SlotModalPractice`,setup(e){let t=y(!1),n=y(!1),r=y(``),i=()=>{r.value=`삭제했습니다.`,t.value=!1};return(e,a)=>(s(),k(`section`,ii,[M(`h2`,null,[a[5]||=g(` 더해보기 ③ 모달 하나로 창 두 개 `,-1),N(J,{text:`모달 껍데기(어둡게 덮기·가운데 띄우기·닫기)는 어느 창이든 똑같습니다. 다른 건 제목·내용·버튼뿐이죠. 그래서 그 세 곳만 Named Slot으로 열어 두면, 모달 파일 하나로 확인창·안내창·입력창을 전부 만들 수 있습니다.`})]),a[11]||=M(`p`,{class:`explain`},[g(` 아래 두 버튼은 `),M(`b`,null,`같은 SlotModal.vue`),g(`를 엽니다. 껍데기는 같고 `),M(`code`,null,`#title`),g(` · 본문 · `),M(`code`,null,`#actions`),g(` 세 구멍만 다릅니다. `)],-1),M(`div`,ai,[M(`div`,oi,[M(`button`,{type:`button`,onClick:a[0]||=e=>t.value=!0},`삭제 확인창 열기`),M(`button`,{type:`button`,onClick:a[1]||=e=>n.value=!0},`안내창 열기`)]),r.value?(s(),k(`p`,si,A(r.value),1)):x(``,!0),!t.value&&!n.value?(s(),k(`p`,ci,[...a[6]||=[g(` 위 버튼을 눌러 보세요. 모달은 `,-1),M(`b`,null,`이 점선 안에서만`,-1),g(` 열립니다. `,-1)]])):x(``,!0),N(ni,{open:t.value,onClose:a[3]||=e=>t.value=!1},{title:b(()=>[...a[7]||=[M(`b`,null,`정말 삭제할까요?`,-1)]]),actions:b(()=>[M(`button`,{type:`button`,onClick:a[2]||=e=>t.value=!1},`취소`),M(`button`,{type:`button`,class:`danger`,onClick:i},`삭제`)]),default:b(()=>[a[8]||=M(`p`,null,`삭제한 항목은 되돌릴 수 없습니다.`,-1)]),_:1},8,[`open`]),N(ni,{open:n.value,onClose:a[4]||=e=>n.value=!1},{title:b(()=>[...a[9]||=[M(`b`,null,`배포 안내`,-1)]]),default:b(()=>[a[10]||=M(`p`,null,`금요일 18시에 서비스가 잠시 중단됩니다.`,-1)]),_:1},8,[`open`])]),a[12]||=M(`p`,{class:`note`},[g(` 안내창은 `),M(`code`,null,`#actions`),g(`를 `),M(`b`,null,`채우지 않았습니다`),g(`. 그래서 SlotModal이 준비해 둔 기본 `),M(`b`,null,`닫기`),g(` 버튼 하나만 나옵니다. 구멍마다 기본값을 넣어 두면 부모가 매번 다 채우지 않아도 됩니다. `)],-1)]))}},[[`__scopeId`,`data-v-c7612aa2`]]),ui={},di={class:`base-card`};function fi(e,t){return s(),k(`div`,di,[n(e.$slots,`default`,{},()=>[t[0]||=M(`p`,null,`기본 콘텐츠 영역입니다.`,-1)],!0)])}var Q=K(ui,[[`render`,fi],[`__scopeId`,`data-v-187523ed`]]),pi={},mi={class:`base-card`};function hi(e,t){return s(),k(`div`,mi,[M(`header`,null,[n(e.$slots,`header`,{},void 0,!0)]),M(`main`,null,[n(e.$slots,`default`,{},void 0,!0)])])}var gi=K(pi,[[`render`,hi],[`__scopeId`,`data-v-f11484c5`]]),_i={class:`base-card`},vi=K({__name:`SlotScopedChild`,setup(e){let t=y(`현재 서버 상태 정상`),r=y(150);return(e,i)=>(s(),k(`div`,_i,[i[1]||=M(`p`,{class:`role`},`하위 컴포넌트 (Child)`,-1),n(e.$slots,`default`,{text:t.value,count:r.value},()=>[i[0]||=M(`p`,null,`부모가 마크업을 주입하지 않았을 때의 디폴트 화면`,-1)],!0)]))}},[[`__scopeId`,`data-v-54665344`]]),yi=e({default:()=>Ti}),bi={class:`practice-card`},xi={class:`practice-area`},Si={class:`practice-area`},Ci={class:`practice-area`},wi={class:`display-panel`},Ti=K({__name:`SlotPractice`,setup(e){return(e,t)=>(s(),k(`section`,bi,[M(`h2`,null,[t[0]||=g(` Slot — 껍데기는 두고 알맹이만 갈아 끼우기 `,-1),N(J,{text:`Props가 '값'을 넘기는 것이라면 Slot은 '화면 조각(HTML)'을 통째로 넘기는 것입니다. 액자를 하나 만들어 두고 사진만 바꿔 끼우는 셈이라, 카드·모달·레이아웃처럼 껍데기는 같고 안쪽만 다른 UI에 씁니다.`})]),M(`div`,xi,[t[3]||=M(`h3`,null,`1) Default Slot — 이름 없는 구멍 하나`,-1),t[4]||=M(`p`,{class:`explain`},[g(` 같은 `),M(`b`,null,`SlotDefaultChild`),g(` 카드에 서로 다른 내용을 넣었습니다. 마지막 카드는 아무것도 안 넣어서 `),M(`b`,null,`기본값`),g(`이 나옵니다. `)],-1),N(Q,null,{default:b(()=>[...t[1]||=[M(`p`,null,`단순한 텍스트 문장을 주입합니다.`,-1)]]),_:1}),N(Q,null,{default:b(()=>[...t[2]||=[M(`h4`,{class:`warn`},`🔥 경고 상태`,-1),M(`button`,null,`확인`,-1)]]),_:1}),N(Q)]),M(`div`,Si,[t[7]||=M(`h3`,null,`2) Named Slot — 구멍에 이름을 붙여 여러 개`,-1),t[8]||=M(`p`,{class:`explain`},[M(`b`,null,`#header`),g(` 자리와 이름 없는 `),M(`b`,null,`본문`),g(` 자리에 각각 다른 내용을 넣습니다. `)],-1),N(gi,null,{header:b(()=>[...t[5]||=[M(`h4`,null,`Child 주입 제목`,-1)]]),default:b(()=>[t[6]||=M(`p`,null,` "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..." `,-1)]),_:1})]),M(`div`,Ci,[t[9]||=M(`h3`,null,`3) Scoped Slot — 자식의 데이터를 부모가 받아 쓴다`,-1),t[10]||=M(`p`,{class:`explain`},[g(` 아래 값은 `),M(`b`,null,`자식이 가진 데이터`),g(`인데, 화면에 어떻게 그릴지는 `),M(`b`,null,`부모가`),g(` 정합니다. `)],-1),N(vi,null,{default:b(e=>[M(`div`,wi,[M(`p`,null,`알림 메시지: `+A(e.text),1),M(`p`,null,`접속자 수: `+A(e.count)+`명`,1)])]),_:1}),N(vi)])]))}},[[`__scopeId`,`data-v-4d263364`]]),Ei=e({default:()=>Oi}),Di={class:`practice-card`},Oi=K({__name:`ComputedCachePractice`,setup(e){let t=y(0),n=y(0),r=()=>(console.log(`❌ 일반 함수 실행됨!`),t.value*2),i=T(()=>(console.log(`✅ Computed 연산 실행됨!`),t.value*2));return(e,a)=>(s(),k(`section`,Di,[M(`h2`,null,[a[2]||=g(` computed() 캐싱 동작 비교 `,-1),N(J,{text:`computed는 의존하는 값이 바뀔 때만 다시 계산하고 결과를 캐싱합니다. 일반 함수는 화면이 다시 그려질 때마다 무조건 재실행됩니다. dummy 버튼을 눌러 콘솔 출력 차이를 확인해 보세요.`})]),M(`p`,null,`count: `+A(t.value)+` | dummy: `+A(n.value),1),M(`button`,{onClick:a[0]||=e=>t.value++},`count 증가 (의존성 변경)`),M(`button`,{onClick:a[1]||=e=>n.value++},`dummy 증가 (무관한 변경)`),M(`p`,null,`일반 함수 결과: `+A(r()),1),M(`p`,null,`Computed 결과: `+A(i.value),1),a[3]||=M(`p`,{class:`console-hint`},[g(` 브라우저 콘솔(F12)을 열고 `),M(`b`,null,`dummy 증가`),g(`를 눌러보세요. 일반 함수만 계속 실행되고 computed는 조용합니다. `)],-1)]))}},[[`__scopeId`,`data-v-5263d813`]]),ki=e({default:()=>Pi}),Ai={class:`practice-card`},ji={class:`practice-area`},Mi={class:`monitor`},Ni={class:`monitor target`},Pi=K({__name:`DeepWatchPractice`,setup(e){let t=y({name:`홍길동`,age:20}),n=y(`아직 반응 없음`),r=y(`아직 반응 없음`);return u(t,e=>{n.value=`[deep 감지] 누군가 변경됨! 현재 이름: ${e.name}, 나이: ${e.age}`},{deep:!0}),u(()=>t.value.age,(e,t)=>{r.value=`[타겟 감지] 나이가 ${t}세 ➡️ ${e}세로 변경됨!`}),(e,i)=>(s(),k(`section`,Ai,[M(`h2`,null,[i[2]||=g(` ref 객체 감시 — Deep Watch `,-1),N(J,{text:`ref에 객체를 담고 watch(user, ...)만 쓰면 속성 변경을 감지하지 못합니다. 객체 자체(참조)가 바뀐 게 아니기 때문입니다. deep: true로 내부 전체를 감시하거나, 화살표 함수로 특정 속성만 콕 집어 감시해야 합니다.`})]),M(`div`,ji,[i[3]||=M(`h3`,null,`👨‍💻 회원 데이터 조작 panel`,-1),M(`p`,null,`이름: `+A(t.value.name)+` / 나이: `+A(t.value.age)+`세`,1),M(`button`,{onClick:i[0]||=e=>t.value.name=`이순신`},`이름만 변경`),M(`button`,{onClick:i[1]||=e=>t.value.age++},`나이만 변경 (age++)`)]),M(`div`,Mi,[i[4]||=M(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) deep: true 모니터 (전체 감시)`,-1),M(`p`,null,A(n.value),1)]),M(`div`,Ni,[i[5]||=M(`p`,{class:`monitor-title`},`🎯 2) 화살표 함수 모니터 (나이만 타겟 감시)`,-1),M(`p`,null,A(r.value),1)])]))}},[[`__scopeId`,`data-v-485827f2`]]),Fi=e({default:()=>Wi}),Ii={class:`practice-card`},Li={class:`compare`},Ri={class:`side`},zi={class:`check`},Bi={class:`side highlight`},Vi={class:`check`},Hi={class:`live`},Ui={key:0,class:`submitted`},Wi=K({__name:`FormStatePractice`,setup(e){let t=y(``),n=y(``),r=y(``),i=y(!1),a=()=>{t.value=``,n.value=``,r.value=``,i.value=!1},o=()=>JSON.stringify({name:t.value,email:n.value,age:r.value,agree:i.value},null,1),c={name:``,email:``,age:``,agree:!1},l=E({...c}),u=()=>{Object.assign(l,c)},d=()=>JSON.stringify(l,null,1),f=y(``),p=()=>{f.value=`[ref 방식] ${o()}`},m=()=>{f.value=`[reactive 방식] ${d()}`};return(e,c)=>(s(),k(`section`,Ii,[M(`h2`,null,[c[8]||=g(` 폼 상태 관리 — ref 여러 개 vs reactive 하나 `,-1),N(J,{text:`reactive의 장점은 '관련 있는 값을 한 덩어리로 다룰 수 있다'는 점입니다. 초기화·전송·전달을 객체 단위로 처리할 수 있어 필드가 많아질수록 코드가 짧아집니다. 대신 통째로 재할당하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다.`})]),M(`div`,Li,[M(`div`,Ri,[c[13]||=M(`h3`,null,`A. ref 4개`,-1),M(`label`,null,[c[9]||=g(`이름 `,-1),j(M(`input`,{"onUpdate:modelValue":c[0]||=e=>t.value=e,type:`text`},null,512),[[I,t.value]])]),M(`label`,null,[c[10]||=g(`이메일 `,-1),j(M(`input`,{"onUpdate:modelValue":c[1]||=e=>n.value=e,type:`text`},null,512),[[I,n.value]])]),M(`label`,null,[c[11]||=g(`나이 `,-1),j(M(`input`,{"onUpdate:modelValue":c[2]||=e=>r.value=e,type:`number`},null,512),[[I,r.value,void 0,{number:!0}]])]),M(`label`,zi,[j(M(`input`,{"onUpdate:modelValue":c[3]||=e=>i.value=e,type:`checkbox`},null,512),[[F,i.value]]),c[12]||=g(` 약관 동의`,-1)]),M(`div`,{class:`buttons`},[M(`button`,{onClick:p},`전송`),M(`button`,{onClick:a},`초기화`)]),c[14]||=M(`pre`,{class:`code`},`name.value = ''
email.value = ''
age.value = ''
agree.value = false`,-1),c[15]||=M(`p`,{class:`note`},`필드가 늘면 이 줄도 같이 늘어난다`,-1)]),M(`div`,Bi,[c[20]||=M(`h3`,null,`B. reactive 1개`,-1),M(`label`,null,[c[16]||=g(`이름 `,-1),j(M(`input`,{"onUpdate:modelValue":c[4]||=e=>l.name=e,type:`text`},null,512),[[I,l.name]])]),M(`label`,null,[c[17]||=g(`이메일 `,-1),j(M(`input`,{"onUpdate:modelValue":c[5]||=e=>l.email=e,type:`text`},null,512),[[I,l.email]])]),M(`label`,null,[c[18]||=g(`나이 `,-1),j(M(`input`,{"onUpdate:modelValue":c[6]||=e=>l.age=e,type:`number`},null,512),[[I,l.age,void 0,{number:!0}]])]),M(`label`,Vi,[j(M(`input`,{"onUpdate:modelValue":c[7]||=e=>l.agree=e,type:`checkbox`},null,512),[[F,l.agree]]),c[19]||=g(` 약관 동의`,-1)]),M(`div`,{class:`buttons`},[M(`button`,{onClick:m},`전송`),M(`button`,{onClick:u},`초기화`)]),c[21]||=M(`pre`,{class:`code`},`Object.assign(form, INITIAL_FORM)`,-1),c[22]||=M(`p`,{class:`note`},`필드가 몇 개든 한 줄로 끝난다`,-1)])]),M(`div`,Hi,[M(`div`,null,[c[23]||=M(`p`,{class:`live-label`},`A · ref 4개를 손으로 조립`,-1),M(`pre`,null,A(o()),1)]),M(`div`,null,[c[24]||=M(`p`,{class:`live-label`},`B · reactive 객체를 그대로 사용`,-1),M(`pre`,null,A(d()),1)])]),f.value?(s(),k(`p`,Ui,A(f.value),1)):x(``,!0)]))}},[[`__scopeId`,`data-v-be254916`]]),Gi=e({default:()=>Yi}),Ki={class:`practice-card`},qi={class:`practice-area`},Ji={class:`monitor`},Yi=K({__name:`MultiWatchPractice`,setup(e){let t=y(`서울`),n=y(`오늘`),r=y(`대기 중...`);return u([t,n],([e,t],[n,i])=>{r.value=`[변경 감지] ${n}(${i}) ➡️ ${e}(${t})`,console.log(`🤖 [통합 API 호출] ${e}의 ${t} 날씨를 불러옵니다...`)}),(e,i)=>(s(),k(`section`,Ki,[M(`h2`,null,[i[4]||=g(` 여러 개의 변수 동시 감시 (Multi-Source Watch) `,-1),N(J,{text:`watch의 첫 번째 인자에 배열을 넘기면 여러 값을 한 번에 감시합니다. 콜백이 받는 새 값·이전 값도 배열이며, 감시 대상을 적은 순서 그대로 매핑됩니다. 둘 중 하나만 바뀌어도 콜백이 한 번 실행됩니다.`})]),M(`div`,qi,[i[9]||=M(`h3`,null,`날씨 조건 설정`,-1),i[10]||=M(`label`,null,`도시: `,-1),j(M(`select`,{"onUpdate:modelValue":i[0]||=e=>t.value=e},[...i[5]||=[M(`option`,{value:`서울`},`서울`,-1),M(`option`,{value:`수원`},`수원`,-1),M(`option`,{value:`부산`},`부산`,-1)]],512),[[B,t.value]]),i[11]||=M(`p`,{class:`field-label`},`날짜:`,-1),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`radio`,value:`오늘`},null,512),[[z,n.value]]),i[6]||=g(` 오늘`,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":i[2]||=e=>n.value=e,type:`radio`,value:`내일`},null,512),[[z,n.value]]),i[7]||=g(` 내일`,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":i[3]||=e=>n.value=e,type:`radio`,value:`주간예보`},null,512),[[z,n.value]]),i[8]||=g(` 주간예보`,-1)])]),M(`div`,Ji,[i[12]||=M(`h3`,null,`통합 모니터링 로그`,-1),M(`p`,null,`현재 상태: `+A(r.value),1)])]))}},[[`__scopeId`,`data-v-25d6c99a`]]),Xi=e({default:()=>ta}),Zi={class:`practice-card`},Qi={class:`practice-area`},$i={class:`monitor auto`},ea={class:`monitor target`},ta=K({__name:`ReactiveArrayWatchPractice`,setup(e){let t=E([`서울`,`수원`]),n=y(`대기 중...`),r=y(`대기 중...`);return u(t,(e,t)=>{n.value=`[자동 감시] 배열 변동 발생! 옛날길이인척하는:${t.length} / 현재길이:${e.length}`}),u(()=>[...t],(e,t)=>{r.value=`[스냅샷 감시] 진짜 과거 길이:${t.length} (데이터: ${t}) ➡️ 바뀐 길이:${e.length}`}),(e,i)=>(s(),k(`section`,Zi,[M(`h2`,null,[i[2]||=g(` reactive() 배열 감시 — 스냅샷 기법 `,-1),N(J,{text:`배열도 객체와 같은 함정이 있습니다. 변수명을 그대로 넘기면 이전 배열과 현재 배열이 같은 것을 가리켜 비교가 불가능합니다. 스프레드로 복사본을 만들어([...cityList]) 감시하면 과거 상태가 그대로 보존됩니다.`})]),M(`div`,Qi,[i[4]||=M(`h3`,null,`즐겨찾기 도시 목록 (reactive 배열)`,-1),M(`p`,null,[i[3]||=g(` 현재 등록된 도시: `,-1),M(`strong`,null,A(t),1)]),M(`button`,{onClick:i[0]||=e=>t.push(`부산`)},`부산 추가 (push)`),M(`button`,{onClick:i[1]||=e=>t.pop()},`최근 도시 삭제 (pop)`)]),M(`div`,$i,[i[5]||=M(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) cityList 변수명 쌩으로 감시`,-1),M(`p`,null,A(n.value),1),i[6]||=M(`small`,null,`※ 주의: 이전 배열과 현재 배열의 내용물·길이가 똑같이 동기화되어 버립니다.`,-1)]),M(`div`,ea,[i[7]||=M(`p`,{class:`monitor-title`},`🎯 2) () => [...cityList] 복사본 감시`,-1),M(`p`,null,A(r.value),1),i[8]||=M(`small`,null,`※ 성공: 과거 배열에 들어있던 내용물이 지워지지 않고 정상 대조됩니다.`,-1)])]))}},[[`__scopeId`,`data-v-e62c5023`]]),na=e({default:()=>sa}),ra={class:`practice-card`},ia={class:`practice-area`},aa={class:`practice-area`},oa=[`onClick`],sa=K({__name:`ReactiveStatePractice`,setup(e){let t=E({name:`이순신`,age:30}),n=()=>{t.age++},r=E([`사과`,`바나나`]),i=()=>{r.push(`과일 ${r.length+1}`)},a=e=>{r.splice(e,1)};return(e,o)=>(s(),k(`section`,ra,[M(`h2`,null,[o[0]||=g(` 반응형 상태 reactive() 특징 및 주의점 `,-1),N(J,{text:`reactive()는 객체·배열 전용이며 .value 없이 바로 접근합니다. 다만 객체를 통째로 재할당(userReactive = { ... })하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다. 그래서 실무는 ref()로 통일하는 추세입니다.`})]),M(`div`,ia,[o[1]||=M(`h3`,null,`1) 객체(Object) reactive`,-1),M(`p`,null,`이름: `+A(t.name)+` / 나이: `+A(t.age)+`세`,1),M(`button`,{onClick:n},`reactive 나이 한 살 추가`)]),M(`div`,aa,[o[2]||=M(`h3`,null,`2) 배열(Array) reactive`,-1),M(`ul`,null,[(s(!0),k(C,null,P(r,(e,t)=>(s(),k(`li`,{key:t},[g(A(e)+` `,1),M(`button`,{style:{"margin-left":`8px`,padding:`2px 8px`},onClick:e=>a(t)},` 삭제 `,8,oa)]))),128))]),M(`button`,{onClick:i},`과일 항목 추가`)])]))}},[[`__scopeId`,`data-v-524a2c66`]]),ca=e({default:()=>pa}),la={class:`practice-card`},ua={class:`practice-area`},da={class:`monitor auto`},fa={class:`monitor target`},pa=K({__name:`ReactiveWatchPractice`,setup(e){let t=E({productName:`노트북`,price:1e3}),n=y(`대기 중...`),r=y(`대기 중...`);return u(t,(e,t)=>{n.value=`[자동 deep] 가격 변동! 이전가격인척하는:${t.price}원 ➡️ 현재가격:${e.price}원`}),u(()=>t.price,(e,t)=>{r.value=`[타겟 조준] 가격이 진짜 올랐음! 옛날값:${t}원 ➡️ 바뀐값:${e}원`}),(e,i)=>(s(),k(`section`,la,[M(`h2`,null,[i[1]||=g(` reactive() 데이터 watch 감시 규칙 `,-1),N(J,{text:`reactive 객체는 변수명을 그대로 넘기면 deep이 자동으로 켜져 내부 속성 변경까지 잡아냅니다. 다만 이전 값과 현재 값이 같은 객체를 가리켜서 oldVal이 쓸모없어집니다. 이전 값이 필요하면 화살표 함수로 특정 속성만 콕 집어야 합니다.`})]),M(`div`,ua,[i[2]||=M(`h3`,null,`🛒 상품 정보 관리 (reactive)`,-1),M(`p`,null,`상품명: `+A(t.productName)+` / 가격: `+A(t.price)+`원`,1),M(`button`,{onClick:i[0]||=e=>t.price+=500},`가격 500원 인상`)]),M(`div`,da,[i[3]||=M(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) state 변수 통째로 감시 (deep 자동화)`,-1),M(`p`,null,A(n.value),1),i[4]||=M(`small`,null,`※ 주의: 이전 값과 현재 값이 똑같이 찍힌다.`,-1)]),M(`div`,fa,[i[5]||=M(`p`,{class:`monitor-title`},`🎯 2) () => state.price 콕 집어 감시 (과거 추적)`,-1),M(`p`,null,A(r.value),1),i[6]||=M(`small`,null,`※ 성공: 과거의 원본 가격이 칼같이 보존된다.`,-1)])]))}},[[`__scopeId`,`data-v-50148cb5`]]),ma=e({default:()=>ba}),ha={class:`practice-card`},ga={class:`practice-area`},_a={class:`log text`},va={class:`practice-area`},ya={class:`log object`},ba=K({__name:`RefArrayWatchPractice`,setup(e){let t=y([`홍길동`,`이순신`,`강감찬`]),n=y(`대기 중...`),r=y([{name:`서울`,temp:25},{name:`수원`,temp:22}]),i=y(`대기 중...`);return u(()=>t.value[0],(e,t)=>{n.value=`[방출/영입] 0번 선수 교체: ${t} ➡️ ${e}`}),u(()=>r.value[0],e=>{i.value=`[날씨 변동] 서울의 온도가 현재 ${e.temp}°C 로 변경되었습니다.`},{deep:!0}),(e,a)=>(s(),k(`section`,ha,[M(`h2`,null,[a[2]||=g(` ref 배열의 특정 인덱스 감시하기 `,-1),N(J,{text:`배열의 특정 요소만 감시하려면 화살표 함수로 콕 집어야 합니다. 다만 그 요소가 문자열이면 그대로 동작하지만, 객체라면 { deep: true }가 없으면 내부 속성 변경을 감지하지 못합니다. 가리키는 대상의 타입에 따라 규칙이 달라집니다.`})]),M(`div`,ga,[M(`h3`,null,`🏃‍♂️ 1) 문자열 배열: 현재 0번 멤버 [ `+A(t.value[0])+` ]`,1),M(`button`,{onClick:a[0]||=e=>t.value[0]=`손흥민`},`0번 멤버를 손흥민으로 교체`),M(`p`,_a,`로그: `+A(n.value),1)]),M(`div`,va,[M(`h3`,null,`⛅ 2) 객체형 배열: 현재 `+A(r.value[0].name)+` 기온 [ `+A(r.value[0].temp)+`°C ]`,1),M(`button`,{onClick:a[1]||=e=>r.value[0].temp++},`서울 기온 1도 올리기 (temp++)`),M(`p`,ya,`로그: `+A(i.value),1)])]))}},[[`__scopeId`,`data-v-b0ee05f5`]]),xa=e({default:()=>Ca}),Sa={class:`practice-card`},Ca={__name:`RefStatePractice`,setup(e){let t=y(0),n=y(`홍길동`),r=y(!0),i=y([`사과`,`배`]),a=y({name:`이순신`,age:30}),o=()=>{t.value++},c=()=>{a.value.name=`장보고`};return(e,l)=>(s(),k(`section`,Sa,[M(`h2`,null,[l[3]||=g(` 반응형 상태 ref() 기초 `,-1),N(J,{text:`ref()는 값을 반응형 상자에 담습니다. script에서는 .value로 상자를 열어야 하고, template에서는 자동 언래핑되어 .value 없이 씁니다. 객체나 배열을 담아도 내부 속성 변경까지 감지됩니다.`})]),M(`p`,null,[l[4]||=g(` Ref 카운트: `,-1),M(`strong`,null,A(t.value),1)]),M(`p`,null,[l[5]||=g(`이름: `,-1),j(M(`input`,{"onUpdate:modelValue":l[0]||=e=>n.value=e},null,512),[[I,n.value]]),g(A(n.value),1)]),M(`p`,null,`활성 상태: `+A(r.value?`활성`:`비활성`),1),M(`p`,null,`과일 목록: `+A(i.value.join(`, `)),1),M(`p`,null,`사용자 정보: 이름 - `+A(a.value.name)+`, 나이 - `+A(a.value.age),1),M(`button`,{onClick:o},`Ref 변수 증가`),M(`button`,{onClick:l[1]||=e=>r.value=!r.value},`토글`),M(`button`,{onClick:l[2]||=e=>i.value.push(`귤`)},`과일 추가`),M(`button`,{onClick:c},`사용자 이름 변경`)]))}},wa=e({default:()=>La}),Ta={class:`practice-card`},Ea={class:`todo-input`},Da=[`disabled`],Oa={class:`filter`},ka={key:0,class:`todo-list`},Aa=[`checked`,`onChange`],ja=[`onKeyup`,`onBlur`],Ma=[`onClick`],Na=[`onClick`],Pa={key:1,class:`empty`},Fa={key:2,class:`empty`},Ia={key:3,class:`todo-foot`},La=K({__name:`TodoAdvancedPractice`,setup(e){let t=y([{id:1,title:`장보기`,done:!1},{id:2,title:`Vue 복습하기`,done:!0}]),n=y(``),r=3,i=()=>{let e=n.value.trim();e&&(t.value.push({id:r,title:e,done:!1}),r++,n.value=``)},a=e=>{e.done=!e.done},o=e=>{t.value=t.value.filter(t=>t.id!==e)},l=y(null),u=y(``),d=y(null),f=async e=>{l.value=e.id,u.value=e.title,await c(),d.value?.focus()},p=e=>{if(l.value===null)return;let t=u.value.trim();t&&(e.title=t),l.value=null},m=()=>{l.value=null},_=y(!1),v=T(()=>_.value?t.value.filter(e=>!e.done):t.value),b=T(()=>t.value.filter(e=>!e.done).length),S=T(()=>t.value.length-b.value);return(e,r)=>(s(),k(`section`,Ta,[M(`h2`,null,[r[3]||=g(` 할 일 목록 응용 2 — 잠금 · 수정 · 필터 `,-1),N(J,{text:`세 가지를 얹었습니다. ① :disabled로 빈 입력일 때 버튼 잠그기 ② 제목을 클릭해 인라인 수정(수정 중 상태를 ref로 관리) ③ computed로 필터와 집계를 옮기기. computed는 CC06에서 정식으로 배우지만 여기서 미리 써 봅니다.`})]),M(`div`,Ea,[j(M(`input`,{"onUpdate:modelValue":r[0]||=e=>n.value=e,type:`text`,placeholder:`할 일을 입력하고 Enter`,onKeyup:V(i,[`enter`])},null,544),[[I,n.value]]),M(`button`,{disabled:!n.value.trim(),onClick:i},`추가`,8,Da)]),M(`label`,Oa,[j(M(`input`,{"onUpdate:modelValue":r[1]||=e=>_.value=e,type:`checkbox`},null,512),[[F,_.value]]),r[4]||=g(` 남은 일만 보기 `,-1)]),v.value.length?(s(),k(`ul`,ka,[(s(!0),k(C,null,P(v.value,e=>(s(),k(`li`,{key:e.id,class:h({done:e.done})},[M(`input`,{type:`checkbox`,checked:e.done,onChange:t=>a(e)},null,40,Aa),l.value===e.id?j((s(),k(`input`,{key:0,ref_for:!0,ref:e=>e&&(d.value=e),"onUpdate:modelValue":r[2]||=e=>u.value=e,class:`edit-input`,onKeyup:[V(t=>p(e),[`enter`]),V(m,[`esc`])],onBlur:t=>p(e)},null,40,ja)),[[I,u.value]]):(s(),k(`span`,{key:1,class:`title`,title:`클릭하면 제목을 고칠 수 있습니다`,onClick:t=>f(e)},A(e.title),9,Ma)),M(`button`,{onClick:t=>o(e.id)},`삭제`,8,Na)],2))),128))])):t.value.length?(s(),k(`p`,Pa,` 🎉 남은 일이 없습니다. 필터를 끄면 완료한 항목을 볼 수 있어요. `)):(s(),k(`p`,Fa,`아직 할 일이 없습니다. 위에서 하나 추가해 보세요.`)),t.value.length?(s(),k(`div`,Ia,[M(`span`,null,[r[5]||=g(` 전체 `,-1),M(`b`,null,A(t.value.length),1),r[6]||=g(` · 남은 일 `,-1),M(`b`,null,A(b.value),1),r[7]||=g(` · 완료 `,-1),M(`b`,null,A(S.value),1)]),r[8]||=M(`span`,{class:`hint`},`제목을 클릭 → 수정 · Enter 확정 · Esc 취소`,-1)])):x(``,!0)]))}},[[`__scopeId`,`data-v-f5c37e4e`]]),Ra=e({default:()=>qa}),za={class:`practice-card`},Ba={class:`todo-input`},Va={key:0,class:`todo-list`},Ha=[`checked`,`onChange`],Ua={class:`title`},Wa=[`onClick`],Ga={key:1,class:`empty`},Ka={key:2,class:`todo-foot`},qa=K({__name:`TodoListPractice`,setup(e){let t=y([]),n=y(``),r=1,i=()=>{let e=n.value.trim();e&&(t.value.push({id:r,title:e,done:!1}),r++,n.value=``)},a=e=>{e.done=!e.done},o=e=>{t.value=t.value.filter(t=>t.id!==e)},c=()=>{t.value=t.value.filter(e=>!e.done)};return(e,r)=>(s(),k(`section`,za,[M(`h2`,null,[r[1]||=g(` 할 일 목록 — ref 배열 응용 `,-1),N(J,{text:`ref([])에 객체를 담아 목록을 관리하는 연습입니다. 추가는 push, 삭제는 filter로 새 배열을 만들어 교체합니다. 배열 안 객체의 속성(done)을 직접 바꿔도 ref가 변화를 감지해 화면이 갱신됩니다.`})]),M(`div`,Ba,[j(M(`input`,{"onUpdate:modelValue":r[0]||=e=>n.value=e,type:`text`,placeholder:`할 일을 입력하고 Enter`,onKeyup:V(i,[`enter`])},null,544),[[I,n.value]]),M(`button`,{onClick:i},`추가`)]),t.value.length?(s(),k(`ul`,Va,[(s(!0),k(C,null,P(t.value,e=>(s(),k(`li`,{key:e.id,class:h({done:e.done})},[M(`input`,{type:`checkbox`,checked:e.done,onChange:t=>a(e)},null,40,Ha),M(`span`,Ua,A(e.title),1),M(`button`,{class:`remove`,onClick:t=>o(e.id)},`삭제`,8,Wa)],2))),128))])):(s(),k(`p`,Ga,`아직 할 일이 없습니다. 위에서 하나 추가해 보세요.`)),t.value.length?(s(),k(`div`,Ka,[M(`span`,null,[r[2]||=g(` 전체 `,-1),M(`b`,null,A(t.value.length),1),r[3]||=g(` · 남은 일 `,-1),M(`b`,null,A(t.value.filter(e=>!e.done).length),1),r[4]||=g(` · 완료 `,-1),M(`b`,null,A(t.value.filter(e=>e.done).length),1)]),M(`button`,{onClick:c},`완료한 항목 지우기`)])):x(``,!0)]))}},[[`__scopeId`,`data-v-db2e98ce`]]),Ja=e({default:()=>Qa}),Ya={class:`practice-card`},Xa={class:`practice-area`},Za={class:`monitor`},Qa=K({__name:`WatchEffectPractice`,setup(e){let n=y(`홍길동`),r=y(20),i=y(`대기 중...`);return t(()=>{i.value=`[자동 감지] 이름: ${n.value} / 나이: ${r.value}세`,console.log(`🤖 watchEffect가 내부 변수 변경을 감지하여 실행되었습니다.`)}),(e,t)=>(s(),k(`section`,Ya,[M(`h2`,null,[t[2]||=g(` 자동 감시자 watchEffect() `,-1),N(J,{text:`watchEffect는 감시 대상을 적지 않습니다. 함수 안에서 읽은 반응형 값이 자동으로 의존성이 됩니다. 그리고 등록되는 즉시 한 번 실행되는 점이 watch와 가장 큰 차이입니다. 대신 이전 값은 받을 수 없습니다.`})]),M(`div`,Xa,[M(`p`,null,`이름: `+A(n.value)+` / 나이: `+A(r.value)+`세`,1),M(`button`,{onClick:t[0]||=e=>n.value=`이순신`},`이름을 '이순신'으로 변경`),M(`button`,{onClick:t[1]||=e=>r.value++},`나이 한 살 추가 (age++)`)]),M(`div`,Za,[t[3]||=M(`h3`,null,`👁️‍🗨️ watchEffect 자동 모니터링 시스템`,-1),M(`p`,null,A(i.value),1),t[4]||=M(`small`,null,` ※ 새로고침하자마자 버튼을 안 눌러도 로그가 이미 찍혀있는 특징을 주목하세요! `,-1)])]))}},[[`__scopeId`,`data-v-542ebb87`]]),$a=e({default:()=>ro}),eo={class:`practice-card`},to={class:`practice-area`},no={class:`monitor`},ro=K({__name:`WatchPractice`,setup(e){let t=y(`서울`),n=y(`아직 감시 시스템이 작동하지 않았습니다.`);return u(t,(e,t)=>{n.value=`📍 감시자 발동! [${t}]에서 [${e}]로 변경됨.`,console.log(`🤖 [서버 요청 완료] 기상청 서버에서 ${e}의 날씨 API를 다시 조회합니다...`)}),(e,r)=>(s(),k(`section`,eo,[M(`h2`,null,[r[3]||=g(` 감시자 watch()의 원리와 실무 활용 `,-1),N(J,{text:`watch()는 값이 바뀌는 순간 무언가를 실행하는 감시자입니다. 콜백은 (새 값, 이전 값)을 받습니다. 화면에 보여줄 값은 computed로, API 호출·로그 같은 부수 효과는 watch로 처리합니다.`})]),M(`div`,to,[r[4]||=M(`h3`,null,`🏙️ 지역 선택 제어판`,-1),M(`p`,null,`현재 선택된 도시: `+A(t.value),1),M(`button`,{onClick:r[0]||=e=>t.value=`서울`},`서울 선택`),M(`button`,{onClick:r[1]||=e=>t.value=`수원`},`수원 선택`),M(`button`,{onClick:r[2]||=e=>t.value=`부산`},`부산 선택`)]),M(`div`,no,[r[5]||=M(`h3`,null,`👁️‍🗨️ 파수꾼(watch) 모니터링 시스템`,-1),M(`p`,null,A(n.value),1),r[6]||=M(`small`,null,`(버튼을 누른 후 브라우저 콘솔창 F12를 확인해 보세요)`,-1)])]))}},[[`__scopeId`,`data-v-f25592fe`]]),io=H(`counter`,()=>{let e=y(0),t=T(()=>e.value*2);function n(){e.value++}return{count:e,doubleCount:t,increment:n}}),ao={class:`panel`},oo={class:`label`},so={class:`count`},co={class:`double`},lo=K({__name:`StoreCounterPanel`,props:{label:{type:String,required:!0}},setup(e){let t=io(),{count:n,doubleCount:r}=U(t);return(i,a)=>(s(),k(`div`,ao,[M(`p`,oo,A(e.label),1),M(`p`,so,A(_(n)),1),M(`p`,co,`doubleCount · `+A(_(r)),1),M(`button`,{type:`button`,onClick:a[0]||=e=>_(t).increment()},`increment()`)]))}},[[`__scopeId`,`data-v-492b3aa9`]]),uo=e({default:()=>Co}),fo={class:`practice-card`},po={class:`area`},mo={class:`panels`},ho={class:`area`},go={key:0,class:`compare`},_o={class:`cell good`},vo={class:`cell-value`},yo={class:`cell bad`},bo={class:`cell-value`},xo={key:1,class:`controls`},So={key:2,class:`note warn`},Co=K({__name:`StoreCounterPractice`,setup(e){let t=io(),{count:n}=U(t),{count:r}=t,i=()=>{t.count=0},a=y(!1);return(e,o)=>(s(),k(`section`,fo,[M(`h2`,null,[o[3]||=g(` 한 사물함을 두 컴포넌트가 함께 본다 `,-1),N(J,{text:`아래 두 패널은 부모가 값을 내려 주지 않습니다. 각자 useCounterStore()를 불러 같은 사물함을 열 뿐입니다. 한쪽에서 increment()를 누르면 다른 쪽 숫자도 같이 바뀝니다 — 이것이 Props Drilling 없이 상태를 나누는 방법입니다.`})]),M(`div`,po,[M(`div`,mo,[N(lo,{label:`COMPONENT A`}),N(lo,{label:`COMPONENT B`})]),o[4]||=M(`p`,{class:`note`},[g(` 두 패널 사이에는 `),M(`b`,null,`props 도 emits 도 없습니다`),g(`. 각자 `),M(`code`,null,`useCounterStore()`),g(` 로 같은 Store 를 열었을 뿐인데 숫자가 함께 움직입니다. `)],-1)]),M(`div`,ho,[M(`h3`,null,[o[5]||=g(` storeToRefs 를 빼면 어떻게 되나 `,-1),M(`button`,{type:`button`,class:`peek`,onClick:o[0]||=e=>a.value=!a.value},A(a.value?`닫기`:`직접 확인`),1)]),a.value?(s(),k(`div`,go,[M(`div`,_o,[o[6]||=M(`p`,{class:`cell-head`},[M(`span`,{class:`tag ok`},`정상`),M(`code`,null,`const { count } = storeToRefs(store)`)],-1),M(`p`,vo,A(_(n)),1)]),M(`div`,yo,[o[7]||=M(`p`,{class:`cell-head`},[M(`span`,{class:`tag no`},`끊김`),M(`code`,null,`const { count } = store`)],-1),M(`p`,bo,A(_(r)),1)])])):x(``,!0),a.value?(s(),k(`div`,xo,[M(`button`,{type:`button`,onClick:o[1]||=e=>_(t).increment()},`increment()`),M(`button`,{type:`button`,class:`ghost`,onClick:o[2]||=e=>i()},`0 으로 되돌리기`)])):x(``,!0),a.value?(s(),k(`p`,So,[...o[8]||=[g(` 오른쪽은 `,-1),M(`b`,null,`값이 복사된 순간`,-1),g(`에 멈춰 있습니다. Store 의 state 는 ref 인데 구조 분해하면 `,-1),M(`code`,null,`.value`,-1),g(` 만 꺼내져 연결이 끊기기 때문입니다. `,-1),M(`b`,null,`actions 는 함수라 그냥 꺼내 써도 됩니다`,-1),g(` — storeToRefs 는 state 와 getters 에만 씁니다. `,-1)]])):x(``,!0)])]))}},[[`__scopeId`,`data-v-4f9b28d2`]]),wo=e({default:()=>Vo}),To={class:`practice-card`},Eo={class:`area`},Do={class:`routes`},Oo={class:`path`},ko={class:`name`},Ao={key:0,class:`hit`},jo={class:`area`},Mo={class:`links`},No={class:`area`},Po={class:`view-name`},Fo={class:`view-body`},Io={key:0,class:`params`},Lo={class:`area`},Ro={class:`ab`},zo={class:`tick`},Bo={class:`ab-buttons`},Vo=K({__name:`RouterBasicPractice`,setup(e){let t=[{path:`/`,name:`home`,label:`홈`,body:`오늘의 날씨 목록이 여기 나옵니다.`},{path:`/about`,name:`about`,label:`소개`,body:`이 앱이 무엇인지 설명하는 화면입니다.`},{path:`/weather/:cityId`,name:`detail`,label:`도시 상세`,body:`한 도시의 시간별 날씨를 봅니다.`},{path:`/:pathMatch(.*)*`,name:`not-found`,label:`없는 페이지`,body:`404`}],n=y(`/`),r=y(`/`),i=T(()=>{for(let e of t){if(e.path===`/:pathMatch(.*)*`)continue;let t=`^`+e.path.replace(/:([\w]+)/g,`(?<$1>[^/]+)`)+`$`,r=n.value.match(new RegExp(t));if(r)return{route:e,params:r.groups??{}}}return{route:t[t.length-1],params:{}}}),a=e=>{n.value=e,r.value=e},o=y(0),c=y(!1),l=()=>{c.value=!0,o.value=0,setTimeout(()=>c.value=!1,1400)};return(e,n)=>(s(),k(`section`,To,[M(`h2`,null,[n[9]||=g(` 주소 → 화면, 라우터가 하는 일 `,-1),N(J,{text:`라우터는 주소표(routes)를 들고 있다가, 주소가 바뀌면 거기 맞는 컴포넌트를 골라 RouterView 자리에 끼워 넣습니다. 아래는 그 과정을 그대로 흉내 낸 미니 라우터입니다. 진짜 vue-router를 이 안에 또 띄우면 이 사이트의 주소까지 바뀌므로 원리만 재현했습니다.`})]),M(`div`,Eo,[n[11]||=M(`h3`,null,`① 주소표 (routes)`,-1),M(`ul`,Do,[(s(),k(C,null,P(t,e=>M(`li`,{key:e.path,class:h({on:e===i.value.route})},[M(`code`,Oo,A(e.path),1),n[10]||=M(`span`,{class:`arrow`,"aria-hidden":`true`},`→`,-1),M(`span`,ko,A(e.label),1),e===i.value.route?(s(),k(`span`,Ao,`지금 이것`)):x(``,!0)],2)),64))])]),M(`div`,jo,[n[14]||=M(`h3`,null,`② 주소창`,-1),M(`form`,{class:`bar`,onSubmit:n[1]||=L(e=>a(r.value),[`prevent`])},[n[12]||=M(`span`,{class:`origin`},`myapp.com`,-1),j(M(`input`,{"onUpdate:modelValue":n[0]||=e=>r.value=e,spellcheck:`false`,"aria-label":`주소`,placeholder:`/about`},null,512),[[I,r.value]]),n[13]||=M(`button`,{type:`submit`,"aria-label":`이동`},[M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`M5 12h13M13 6l6 6-6 6`})])],-1)],32),M(`p`,Mo,[M(`button`,{type:`button`,class:`link`,onClick:n[2]||=e=>a(`/`)},`/`),M(`button`,{type:`button`,class:`link`,onClick:n[3]||=e=>a(`/about`)},`/about`),M(`button`,{type:`button`,class:`link`,onClick:n[4]||=e=>a(`/weather/seoul`)},`/weather/seoul`),M(`button`,{type:`button`,class:`link`,onClick:n[5]||=e=>a(`/weather/busan`)},`/weather/busan`),M(`button`,{type:`button`,class:`link`,onClick:n[6]||=e=>a(`/hello`)},`/hello (없는 주소)`)])]),M(`div`,No,[n[16]||=M(`h3`,null,`③ <RouterView /> — 화면이 갈아끼워지는 자리`,-1),M(`div`,{class:h([`viewport`,{missing:i.value.route.name===`not-found`}])},[M(`p`,Po,A(i.value.route.label),1),M(`p`,Fo,A(i.value.route.body),1),Object.keys(i.value.params).length?(s(),k(`p`,Io,[n[15]||=M(`span`,{class:`tag`},`route.params`,-1),M(`code`,null,A(i.value.params),1)])):x(``,!0)],2)]),M(`div`,Lo,[n[18]||=M(`h3`,null,`④ 왜 <a href> 를 쓰면 안 되나`,-1),n[19]||=M(`p`,{class:`explain`},[g(` 아래 숫자는 화면이 기억하고 있는 값입니다(`),M(`code`,null,`ref`),g(`). 두 버튼을 각각 눌러 보세요. `)],-1),M(`div`,Ro,[M(`div`,{class:h([`counter`,{wiped:c.value}])},[M(`span`,zo,A(o.value),1),M(`button`,{type:`button`,onClick:n[7]||=e=>o.value++},`+1 올리기`)],2),M(`div`,Bo,[M(`button`,{type:`button`,class:`good`,onClick:n[8]||=e=>a(`/about`)},` RouterLink 로 이동 `),M(`button`,{type:`button`,class:`bad`,onClick:l},` <a href> 로 이동 `)])]),M(`p`,{class:h([`verdict`,{show:c.value}])},[...n[17]||=[g(` 새로고침이 일어나 `,-1),M(`b`,null,`기억하던 값이 0으로 초기화`,-1),g(`되었습니다. `,-1)]],2)])]))}},[[`__scopeId`,`data-v-9a2bf107`]]),Ho=e({default:()=>is}),Uo={class:`practice-card`},Wo={class:`area`},Go={class:`area`},Ko={class:`links`},qo=[`onClick`],Jo={key:0,class:`lock`,"aria-hidden":`true`},Yo={class:`area`},Xo={class:`view-name`},Zo={class:`view-path`},Qo={class:`toggle`},$o={class:`area`},es={key:0,class:`logs`},ts={class:`hook`},ns={class:`text`},rs={key:1,class:`hint`},is=K({__name:`RouterGuardPractice`,setup(e){let t=[{path:`/`,name:`Home`,label:`홈`,meta:{}},{path:`/about`,name:`About`,label:`소개`,meta:{}},{path:`/mypage`,name:`MyPage`,label:`마이페이지`,meta:{isAuth:!0}},{path:`/admin`,name:`Admin`,label:`관리자`,meta:{isAuth:!0}},{path:`/login`,name:`Login`,label:`로그인`,meta:{}}],n=y(!1),r=y(!0),i=y(`/`),a=y([]),o=T(()=>t.find(e=>e.path===i.value)??null),c=T(()=>o.value?{kind:`page`,route:o.value}:r.value?{kind:`not-found`}:{kind:`blank`}),l=(e,t,n=`plain`)=>a.value.unshift({id:a.value.length,hook:e,text:t,tone:n}),u=e=>{a.value=[];let r=t.find(t=>t.path===e)?.meta??{};if(l(`beforeEach`,`to: ${e} · from: ${i.value}`,`start`),r.isAuth&&!n.value){l(`beforeEach`,`to.meta.isAuth 인데 로그인 안 됨 → next('/login')`,`block`),i.value=`/login`,l(`afterEach`,`로그인 화면으로 이동 완료`,`done`);return}l(`beforeEach`,`next() — 통과 허가`,`pass`),l(`beforeResolve`,`컴포넌트까지 다 준비됨 (마지막 확인 지점)`,`plain`),i.value=e,l(`afterEach`,`화면 전환 완료 (분석 로그 보내기 좋은 곳)`,`done`)},d=()=>{n.value=!0,l(`상태`,`로그인했습니다. 이제 잠긴 주소도 들어갈 수 있습니다.`,`pass`)},f=()=>{n.value=!1,l(`상태`,`로그아웃했습니다.`,`block`)};return(e,i)=>(s(),k(`section`,Uo,[M(`h2`,null,[i[3]||=g(` Navigation Guard — 페이지 입장 전 검문소 `,-1),N(J,{text:`특정 주소로 들어가기 직전에 가로채서 권한을 검사하거나 다른 곳으로 보내는 장치입니다. 로그인해야 볼 수 있는 마이페이지·관리자 화면에 씁니다. beforeEach(시작 직전) → beforeResolve(컴포넌트까지 준비된 뒤) → afterEach(전환 완료 후) 순서로 불립니다.`})]),M(`div`,Wo,[M(`div`,{class:h([`auth`,{on:n.value}])},[i[4]||=M(`span`,{class:`dot`,"aria-hidden":`true`},null,-1),M(`b`,null,A(n.value?`로그인 상태`:`비로그인 상태`),1),M(`code`,null,`isAuthenticated = `+A(n.value),1),M(`button`,{type:`button`,onClick:i[0]||=e=>n.value?f():d()},A(n.value?`로그아웃`:`로그인하기`),1)],2)]),M(`div`,Go,[i[5]||=M(`h3`,null,`어디로 갈까요`,-1),M(`div`,Ko,[(s(),k(C,null,P(t,e=>M(`button`,{key:e.path,type:`button`,class:h([`link`,{locked:e.meta.isAuth}]),onClick:t=>u(e.path)},[g(A(e.path)+` `,1),e.meta.isAuth?(s(),k(`span`,Jo,`🔒`)):x(``,!0)],10,qo)),64)),M(`button`,{type:`button`,class:`link ghost`,onClick:i[1]||=e=>u(`/unknown-page`)},` /unknown-page `)])]),M(`div`,Yo,[i[11]||=M(`h3`,null,`<RouterView />`,-1),M(`div`,{class:h([`viewport`,c.value.kind])},[c.value.kind===`page`?(s(),k(C,{key:0},[M(`p`,Xo,A(c.value.route.label),1),M(`code`,Zo,A(c.value.route.path),1)],64)):c.value.kind===`not-found`?(s(),k(C,{key:1},[i[6]||=M(`p`,{class:`view-name`},`404 — 그런 페이지는 없습니다`,-1),i[7]||=M(`code`,{class:`view-path`},`Catch-all Route 가 받아 냈습니다`,-1)],64)):(s(),k(C,{key:2},[i[8]||=M(`p`,{class:`view-name blank`},`(하얗게 비어 있음)`,-1),i[9]||=M(`code`,{class:`view-path`},`매칭되는 컴포넌트가 없어 아무것도 그려지지 않았습니다`,-1)],64))],2),M(`label`,Qo,[j(M(`input`,{"onUpdate:modelValue":i[2]||=e=>r.value=e,type:`checkbox`},null,512),[[F,r.value]]),i[10]||=M(`span`,null,[g(` Catch-all Route 사용 — `),M(`code`,null,`{ path: '/:pathMatch(.*)*', component: NotFoundView }`)],-1)])]),M(`div`,$o,[i[12]||=M(`h3`,null,[g(`검문 기록 `),M(`small`,null,`최근 이동이 위에`)],-1),a.value.length?(s(),k(`ul`,es,[(s(!0),k(C,null,P(a.value,e=>(s(),k(`li`,{key:e.id,class:h(e.tone)},[M(`span`,ts,A(e.hook),1),M(`span`,ns,A(e.text),1)],2))),128))])):(s(),k(`p`,rs,`위에서 주소를 눌러 보세요. 검문 순서가 여기 쌓입니다.`))])]))}},[[`__scopeId`,`data-v-0450e31b`]]),as=e({default:()=>ws}),os={class:`practice-card`},ss={class:`area`},cs={class:`urlbar`},ls={class:`url`},us={class:`area`},ds={class:`route`},fs={key:0},ps={key:0},ms={class:`area`},hs={class:`methods`},gs=[`onClick`],_s={class:`area`},vs={class:`stack`},ys={class:`no`},bs={key:0,class:`here-tag`},xs={class:`nav`},Ss=[`disabled`],Cs=[`disabled`],ws=K({__name:`RouterNavigatePractice`,setup(e){let t=y([`/`]),n=y(0),r=T(()=>t.value[n.value]),i=T(()=>{let[e,t=``]=r.value.split(`?`),n={};for(let e of t.split(`&`).filter(Boolean)){let[t,r=``]=e.split(`=`);n[decodeURIComponent(t)]=decodeURIComponent(r)}for(let t of[{name:`WeatherHome`,path:`/`},{name:`WeatherDetail`,path:`/weather/:cityId`},{name:`UserPosts`,path:`/user/:userId/posts`},{name:`Search`,path:`/search`}]){let r=RegExp(`^`+t.path.replace(/:(\w+)/g,`(?<$1>[^/]+)`)+`$`),i=e.match(r);if(i)return{name:t.name,path:e,params:i.groups??{},query:n}}return{name:`NotFound`,path:e,params:{},query:n}}),a=e=>{t.value=[...t.value.slice(0,n.value+1),e],n.value=t.value.length-1},o=e=>{t.value=[...t.value.slice(0,n.value),e],n.value=t.value.length-1},c=e=>{let r=n.value+e;r>=0&&r<t.value.length&&(n.value=r)},l=T(()=>n.value>0),u=T(()=>n.value<t.value.length-1),d=[{label:`router.push('/about')`,run:()=>a(`/about`),note:`가장 단순한 형태`},{label:`router.push({ name: 'WeatherDetail', params: { cityId: 'seoul' } })`,run:()=>a(`/weather/seoul`),note:`이름 + 동적 세그먼트`},{label:`router.push({ name: 'Search', query: { q: 'vue' } })`,run:()=>a(`/search?q=vue`),note:`물음표 뒤 쿼리`},{label:`router.push({ name: 'UserPosts', params: { userId: 42 } })`,run:()=>a(`/user/42/posts`),note:`중간 위치 동적 세그먼트`},{label:`router.replace('/login')`,run:()=>o(`/login`),note:`기록을 덮어쓴다 — 뒤로가기로 못 돌아온다`,danger:!0}];return(e,a)=>(s(),k(`section`,os,[M(`h2`,null,[a[2]||=g(` useRoute() 로 읽고, useRouter() 로 옮긴다 `,-1),N(J,{text:`이름이 한 글자 차이라 헷갈립니다. useRoute()는 '지금 이 페이지의 정보'를 읽는 것이고(읽기 전용), useRouter()는 '페이지를 옮기는 리모컨'입니다(동작). 아래에서 버튼을 눌러 주소를 옮기면 위쪽 route 객체가 어떻게 바뀌는지 보세요.`})]),M(`div`,ss,[M(`div`,cs,[a[3]||=M(`span`,{class:`origin`},`myapp.com`,-1),M(`span`,ls,A(r.value),1)])]),M(`div`,us,[a[8]||=M(`h3`,null,[g(`useRoute() — 지금 페이지의 정보 `),M(`span`,{class:`tag read`},`읽기`)],-1),M(`dl`,ds,[a[4]||=M(`dt`,null,`route.path`,-1),M(`dd`,null,[M(`code`,null,A(i.value.path),1)]),a[5]||=M(`dt`,null,`route.name`,-1),M(`dd`,null,[M(`code`,null,A(i.value.name),1)]),a[6]||=M(`dt`,null,`route.params`,-1),M(`dd`,{class:h({empty:!Object.keys(i.value.params).length})},[M(`code`,null,A(i.value.params),1),Object.keys(i.value.params).length?x(``,!0):(s(),k(`small`,fs,`주소에 :빈칸이 없는 경로`))],2),a[7]||=M(`dt`,null,`route.query`,-1),M(`dd`,{class:h({empty:!Object.keys(i.value.query).length})},[M(`code`,null,A(i.value.query),1),Object.keys(i.value.query).length?x(``,!0):(s(),k(`small`,ps,`물음표 뒤가 비어 있음`))],2)])]),M(`div`,ms,[a[9]||=M(`h3`,null,[g(`useRouter() — 페이지를 옮기는 리모컨 `),M(`span`,{class:`tag write`},`동작`)],-1),M(`ul`,hs,[(s(),k(C,null,P(d,e=>M(`li`,{key:e.label},[M(`button`,{type:`button`,class:h({danger:e.danger}),onClick:t=>e.run()},[M(`code`,null,A(e.label),1),M(`small`,null,A(e.note),1)],10,gs)])),64))])]),M(`div`,_s,[a[10]||=M(`h3`,null,`히스토리 스택 — push 와 replace 의 차이`,-1),M(`ol`,vs,[(s(!0),k(C,null,P(t.value,(e,t)=>(s(),k(`li`,{key:t,class:h({here:t===n.value})},[M(`span`,ys,A(t),1),M(`code`,null,A(e),1),t===n.value?(s(),k(`span`,bs,`지금`)):x(``,!0)],2))),128))]),M(`div`,xs,[M(`button`,{type:`button`,disabled:!l.value,onClick:a[0]||=e=>c(-1)},`← router.go(-1)`,8,Ss),M(`button`,{type:`button`,disabled:!u.value,onClick:a[1]||=e=>c(1)},`router.go(1) →`,8,Cs)]),a[11]||=M(`p`,{class:`note`},[M(`b`,null,`push`),g(` 는 기록을 `),M(`b`,null,`쌓고`),g(`, `),M(`b`,null,`replace`),g(` 는 지금 기록을 `),M(`b`,null,`덮어씁니다`),g(`. 그래서 로그인 후 이동에는 replace를 씁니다 — 뒤로가기로 로그인 화면에 다시 돌아가면 곤란하니까요. `)],-1)])]))}},[[`__scopeId`,`data-v-1eefdd55`]]),Ts=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const dynamicUrl = 'https://vuejs.org'
const logoImgSrc = 'https://vuejs.org/images/logo.png'
const isButtonDisabled = ref(true)

const isWarning = ref(false)
const themeClass = ref('dark-box')

const textColor = ref('purple')
const boxWidth = ref(200)
const baseBoxStyle = {
  height: '80px',
  color: 'white',
  backgroundColor: '#42b883',
  transition: 'all 0.3s ease',
}

// HTML 속성명과 변수명이 같을 때 사용하는 축약형
const id = 'user-profile-card'
const src = 'https://vuejs.org/images/logo.png'
<\/script>

<template>
  <section class="practice-card">
    <div class="practice-area">
      <h2>
        v-bind 디렉티브 기본 (축약형: 콜론)
        <ConceptHelp
          text="v-bind는 href, src, disabled 같은 HTML 속성에 JavaScript 데이터를 연결합니다. 축약형은 : 입니다."
        />
      </h2>
      <a :href="dynamicUrl" target="_blank">Vue 공식 사이트</a>
      <img :src="logoImgSrc" alt="Vue 로고" width="80" />

      <button :disabled="isButtonDisabled">잠기는 버튼</button>
      <button @click="isButtonDisabled = !isButtonDisabled">
        잠금 상태 변경
      </button>
    </div>

    <div class="practice-area">
      <h2>
        v-bind 디렉티브 고급 (클래스 바인딩)
        <ConceptHelp
          text=":class는 조건에 따라 CSS 클래스를 추가하거나 제거합니다. 객체와 배열 형식을 사용할 수 있습니다."
        />
      </h2>
      <p :class="{ danger: isWarning }">
        현재 경고 상태: {{ isWarning }}
      </p>
      <button @click="isWarning = !isWarning">경고 상태 변경</button>

      <div
        :class="[
          themeClass,
          isWarning ? 'red-border' : 'gray-border',
        ]"
      >
        배열로 클래스를 조합한 상자
      </div>
    </div>

    <div class="practice-area">
      <h2>
        v-bind 디렉티브 고급 (스타일 바인딩)
        <ConceptHelp
          text=":style은 색상이나 크기 같은 인라인 CSS 값을 데이터와 직접 연결합니다. 객체와 배열 형식을 지원합니다."
        />
      </h2>
      <p :style="{ color: textColor, fontWeight: 'bold' }">
        동적 스타일이 적용된 글자
      </p>
      <button
        @click="
          textColor = textColor === 'purple' ? 'blue' : 'purple'
        "
      >
        글자색 변경
      </button>

      <div class="input-group">
        <label for="box-width">박스 너비: </label>
        <input
          id="box-width"
          v-model.number="boxWidth"
          type="number"
          step="50"
        />
      </div>

      <div
        class="size-box"
        :style="[baseBoxStyle, { width: boxWidth + 'px' }]"
      >
        {{ boxWidth }}px
      </div>
    </div>

    <div class="practice-area">
      <h2>
        Class Binding vs. Style Binding
        <ConceptHelp
          text="미리 만든 디자인을 바꿀 때는 :class, 너비처럼 값 자체를 실시간으로 바꿀 때는 :style이 적합합니다."
        />
      </h2>
      <p>
        미리 만든 디자인을 상태에 따라 바꿀 때는
        <strong>:class</strong>를 사용합니다.
      </p>
      <p>
        너비나 색상 값을 실시간으로 직접 바꿀 때는
        <strong>:style</strong>을 사용합니다.
      </p>
    </div>

    <div class="practice-area">
      <h2>
        v-bind 디렉티브 고급 (단축 문법)
        <ConceptHelp
          text="HTML 속성명과 JavaScript 변수명이 같으면 :src='src'를 :src처럼 줄일 수 있는 Vue 3.4 이상의 문법입니다."
        />
      </h2>
      <div :id>
        <img :src alt="Vue 로고" width="50" />
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  display: block;
  margin: 12px 0;
}

.input-group {
  margin-top: 22px;
}

.danger {
  color: red;
  font-weight: bold;
}

.dark-box {
  margin-top: 10px;
  padding: 15px;
  color: white;
  background-color: #333;
}

.red-border {
  border: 3px solid red;
}

.gray-border {
  border: 3px solid #ccc;
}

.size-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
</style>
`,Es=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// 1. 조건부 온/오프 스위치 변수
const isLogged = ref(false)

// 2. 다중 조건 분기용 숫자 변수
const score = ref(85)

// v-show 화면 표시 여부
const isVisible = ref(true)
<\/script>

<template>
  <section class="practice-card">
    <h2>
      v-if, v-else-if, v-else 디렉티브 학습
      <ConceptHelp
        text="조건에 따라 DOM 요소를 생성하거나 제거합니다. 여러 조건은 v-else-if와 v-else로 이어서 표현합니다."
      />
    </h2>

    <h3>1) 기본 로그인 상태 스위치</h3>
    <p v-if="isLogged">환영합니다! 회원 전용 화면입니다.</p>
    <p v-else>로그인이 필요합니다. 먼저 로그인해 주세요.</p>
    <button @click="isLogged = !isLogged">
      {{ isLogged ? '로그아웃 하기' : '로그인 하기' }}
    </button>

    <br />

    <h3>2) 성적별 학점 등급 측정 (다중 조건문)</h3>
    <label>현재 점수 입력: </label>
    <input
      v-model="score"
      type="number"
      min="0"
      max="100"
      step="5"
    />
    <br />

    <div
      v-if="score >= 90"
      style="color: green; font-weight: bold"
    >
      합격 등급: A 학점 (훌륭합니다!)
    </div>
    <div v-else-if="score >= 80" style="color: blue">
      합격 등급: B 학점 (양호합니다.)
    </div>
    <div v-else-if="score >= 70" style="color: orange">
      합격 등급: C 학점 (조금 더 분발하세요.)
    </div>
    <div v-else style="color: red; font-weight: bold">
      합격 등급: F 학점 (재시험 대상입니다.)
    </div>

    <h2>
      v-show 디렉티브 학습
      <ConceptHelp
        text="v-show는 요소를 DOM에 유지하면서 CSS display 속성으로 보이거나 숨깁니다."
      />
    </h2>
    <button @click="isVisible = !isVisible">
      화면 토글하기
    </button>
    <br />

    <div v-show="isVisible" class="box">
      <p>v-show 상자</p>
      <p>
        조건이 false가 되면 CSS display: none이 붙습니다.
      </p>
    </div>

    <div class="practice-area comparison-area">
      <h2>
        v-if vs. v-show
        <ConceptHelp
          text="전환이 드물면 DOM을 생성·제거하는 v-if, 자주 열고 닫으면 display만 바꾸는 v-show가 적합합니다."
        />
      </h2>
      <p>
        v-if는 DOM을 생성·제거하고, v-show는 DOM을 유지한 채
        CSS display 속성으로 표시 여부를 바꿉니다.
      </p>
    </div>
  </section>
</template>

<style scoped>
.box {
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background-color: #3498db;
}

.comparison-area {
  margin-top: 36px;
}
</style>
`,Ds=`<script setup>
import { onUnmounted, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const count = ref(0)
const position = ref('')
const isTracking = ref(false)
const tagName = ref('')
const selectedColor = ref('')
const selectedColorCss = ref('transparent')
const rainbowPosition = ref(0)
const isRainbowDragging = ref(false)
const combinedRunCount = ref(0)
const parentClickCount = ref(0)
const modifierDemoKey = ref(0)

// 메서드 핸들러 함수 정의
const showAlert = () => {
  window.alert('함수가 성공적으로 호출되었습니다!')
}

// 브라우저 창 전체에서 클릭 좌표 확인
const getWindowClick = (e) => {
  position.value =
    \`창 좌표: X=\${e.clientX}, Y=\${e.clientY} / \` +
    \`문서 좌표: X=\${e.pageX}, Y=\${e.pageY}\`
}

const startTracking = () => {
  if (isTracking.value) return

  window.addEventListener('click', getWindowClick)
  isTracking.value = true
  position.value = '좌표 확인 중: 브라우저 창 안을 클릭해 보세요.'
}

const stopTracking = () => {
  window.removeEventListener('click', getWindowClick)
  isTracking.value = false
}

// 데이터와 이벤트 객체를 함께 받음
const getWithParam = (name, e) => {
  tagName.value =
    \`대상: \${name} / 클릭된 태그: \${e.target.tagName}\`
}

// 클릭한 버튼의 이름과 실제 CSS 배경색을 확인
const getColorInfo = (colorName, e) => {
  const backgroundColor = window.getComputedStyle(
    e.currentTarget,
  ).backgroundColor

  selectedColorCss.value = backgroundColor
  selectedColor.value =
    \`선택한 색상: \${colorName} / CSS 값: \${backgroundColor}\`
}

// 무지개 바 안에서 포인터의 위치를 0~360도 색상으로 변환
const updateRainbowColor = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const ratio = Math.min(
    1,
    Math.max(0, (e.clientX - rect.left) / rect.width),
  )
  const hue = Math.round(ratio * 360)

  rainbowPosition.value = ratio * 100
  selectedColorCss.value = \`hsl(\${hue}, 100%, 50%)\`
  selectedColor.value =
    \`무지개 바 선택 / HSL 값: hsl(\${hue}, 100%, 50%)\`
}

const startRainbowDrag = (e) => {
  isRainbowDragging.value = true
  e.currentTarget.setPointerCapture(e.pointerId)
  updateRainbowColor(e)
}

const dragRainbow = (e) => {
  if (!isRainbowDragging.value) return
  updateRainbowColor(e)
}

const stopRainbowDrag = (e) => {
  if (!isRainbowDragging.value) return

  updateRainbowColor(e)
  isRainbowDragging.value = false

  if (e.currentTarget.hasPointerCapture(e.pointerId)) {
    e.currentTarget.releasePointerCapture(e.pointerId)
  }
}

const handleLink = () => {
  window.alert(
    '수식어 덕분에 네이버로 이동하지 않고 함수만 실행됩니다!',
  )
}

const handleBox = () => {
  window.alert('부모 박스가 클릭되었습니다!')
}

const handleNormalChild = () => {
  window.alert('1번 자식 클릭!')
}

const handleStoppedChild = () => {
  window.alert('2번 자식(나만 켜짐) 클릭!')
}

const handleCombinedModifiers = () => {
  combinedRunCount.value++
}

const handleCombinedParent = () => {
  parentClickCount.value++
}

const resetCombinedDemo = () => {
  combinedRunCount.value = 0
  parentClickCount.value = 0
  modifierDemoKey.value++
}

onUnmounted(() => {
  window.removeEventListener('click', getWindowClick)
})
<\/script>

<template>
  <section class="practice-card">
    <h2>
      v-on 이벤트 핸들링 기초
      <ConceptHelp
        text="v-on은 클릭이나 키보드 입력 같은 이벤트를 감지해 코드를 실행합니다. 축약형은 @입니다."
      />
    </h2>

    <div class="practice-area">
      <h3>
        1) 인라인 연산 처리
        <ConceptHelp
          text="Inline Handler는 count++처럼 간단한 JavaScript 표현식을 템플릿 안에서 바로 실행하는 방식입니다."
        />
      </h3>
      <p>현재 카운트: {{ count }}</p>
      <button @click="count++">1씩 증가</button>
    </div>

    <div class="practice-area">
      <h3>
        2) 스크립트 함수 호출
        <ConceptHelp
          text="Method Handler는 script에 함수를 정의하고 이벤트에는 함수 이름을 연결하는 방식입니다."
        />
      </h3>
      <button @click="showAlert">알림창 띄우기</button>
    </div>

    <div class="practice-area">
      <h2>
        v-on 이벤트 객체($event) 활용
        <ConceptHelp
          text="함수 이름만 전달하면 이벤트 객체가 자동으로 전달됩니다. 다른 값과 이벤트 객체를 함께 넘길 때는 $event를 명시합니다."
        />
      </h2>

      <p>
        {{ position || '좌표 확인 시작 버튼을 눌러주세요.' }}
      </p>
      <p>
        현재 상태:
        {{ isTracking ? '좌표 확인 중' : '좌표 확인 중지' }}
      </p>
      <p>{{ tagName || '태그: 버튼을 클릭해 보세요.' }}</p>

      <button
        :disabled="isTracking"
        @click.stop="startTracking"
      >
        좌표 확인 시작
      </button>
      <button
        :disabled="!isTracking"
        @click.stop="stopTracking"
      >
        좌표 그만 확인하기
      </button>
      <button @click="getWithParam('회원A', $event)">
        회원 정보와 태그 확인
      </button>
    </div>

    <div class="practice-area">
      <h2>
        클릭한 색상 알아내기
        <ConceptHelp
          text="색상 이름은 함수 인자로 전달하고, 실제 CSS 배경색은 $event의 currentTarget에서 읽습니다."
        />
      </h2>

      <div
        class="rainbow-bar"
        role="button"
        tabindex="0"
        aria-label="무지개 색상 선택"
        @pointerdown="startRainbowDrag"
        @pointermove="dragRainbow"
        @pointerup="stopRainbowDrag"
        @pointercancel="stopRainbowDrag"
      >
        <span
          class="rainbow-marker"
          :style="{ left: rainbowPosition + '%' }"
        ></span>
      </div>

      <p>
        {{ selectedColor || '무지개 바나 색상 버튼을 클릭해 보세요.' }}
      </p>

      <div
        class="selected-color"
        :style="{ backgroundColor: selectedColorCss }"
      ></div>
    </div>

    <div class="practice-area">
      <h2>
        이벤트 수식어(Modifiers) 학습
        <ConceptHelp
          text="이벤트 수식어는 이벤트의 기본 동작이나 전파 방식을 간단한 접미어로 제어합니다."
        />
      </h2>

      <h3>
        1) .prevent (기본 동작 막기)
        <ConceptHelp
          text=".prevent는 preventDefault()와 같으며 링크 이동이나 폼 제출 후 새로고침 같은 기본 동작을 막습니다."
        />
      </h3>
      <a
        href="https://www.naver.com"
        @click.prevent="handleLink"
      >
        네이버 링크
      </a>

      <div class="modifier-stop-area">
        <h3>
          2) .stop (이벤트 버블링 막기)
          <ConceptHelp
            text=".stop은 stopPropagation()과 같으며 자식에서 발생한 이벤트가 부모로 올라가는 것을 막습니다."
          />
        </h3>

        <div class="modifier-box" @click="handleBox">
          <p>부모 영역 (클릭 시 alert 발동)</p>
          <button @click="handleNormalChild">
            버블링 발생 버튼
          </button>
          <button @click.stop="handleStoppedChild">
            버블링 차단 버튼
          </button>
        </div>
      </div>

      <div class="modifier-chain-area">
        <h3>
          3) .prevent.stop.once 연결하기
          <ConceptHelp
            text="첫 클릭에는 기본 동작 방지, 버블링 차단, 한 번만 실행이 함께 적용됩니다. once로 리스너가 제거된 뒤에는 나머지 수식어도 더 이상 실행되지 않습니다."
          />
        </h3>

        <div
          class="modifier-box"
          @click="handleCombinedParent"
        >
          <p>부모 클릭 횟수: {{ parentClickCount }}</p>
          <p>자식 함수 실행 횟수: {{ combinedRunCount }}</p>

          <input
            :key="modifierDemoKey"
            type="checkbox"
            @click.prevent.stop.once="handleCombinedModifiers"
          />
          체크박스를 클릭해 보세요.
        </div>

        <p class="modifier-guide">
          첫 클릭은 체크되지 않고 부모 클릭도 발생하지 않으며,
          자식 함수만 한 번 실행됩니다. 두 번째 클릭부터는 once로
          리스너가 제거되어 체크와 부모 클릭이 다시 동작합니다.
        </p>

        <button @click.stop="resetCombinedDemo">
          연결 수식어 실습 초기화
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rainbow-bar {
  position: relative;
  height: 44px;
  margin: 14px 0;
  border: 1px solid #ccd5d2;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    #f00,
    #ff0,
    #0f0,
    #0ff,
    #00f,
    #f0f,
    #f00
  );
  cursor: crosshair;
  touch-action: none;
  user-select: none;
}

.rainbow-marker {
  position: absolute;
  top: -4px;
  width: 4px;
  height: 52px;
  border: 1px solid white;
  background-color: #263238;
  transform: translateX(-50%);
  pointer-events: none;
}

.selected-color {
  width: 100%;
  height: 34px;
  margin: 10px 0 16px;
  border: 1px solid #ccd5d2;
  border-radius: 6px;
}

.color-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.color-button {
  padding: 10px 16px;
  border: 0;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

.color-red {
  background-color: #e74c3c;
}

.color-green {
  background-color: #27ae60;
}

.color-blue {
  background-color: #3498db;
}

.modifier-stop-area {
  margin-top: 28px;
}

.modifier-chain-area {
  margin-top: 28px;
}

.modifier-box {
  padding: 20px;
  border-radius: 6px;
  background-color: #eee;
}

.modifier-guide {
  color: #52645d;
  line-height: 1.6;
}
</style>
`,Os=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const fruits = ref(['사과', '바나나', '딸기'])
const user = ref({
  name: '홍길동',
  age: 25,
  role: '개발자',
})
const products = ref([
  { id: 'prod-101', name: '아이폰' },
  { id: 'prod-102', name: '갤럭시' },
])
<\/script>

<template>
  <section class="practice-card">
    <h2>
      v-for 디렉티브 학습
      <ConceptHelp
        text="v-for는 배열이나 객체의 항목을 반복해서 화면에 출력합니다. 각 항목에는 가능한 한 고유한 :key를 지정합니다."
      />
    </h2>

    <div class="practice-area lists">
      <div>
        <h3>배열 반복</h3>
        <ul>
          <li v-for="(fruit, index) in fruits" :key="fruit">
            {{ index + 1 }}번 과일: {{ fruit }}
          </li>
        </ul>
      </div>

      <div>
        <h3>객체 반복</h3>
        <ul>
          <li
            v-for="(value, key, index) in user"
            :key="key"
          >
            [{{ index }}] {{ key }}: {{ value }}
          </li>
        </ul>
      </div>

      <div>
        <h3>객체 배열 반복</h3>
        <ul>
          <li
            v-for="product in products"
            :key="product.id"
          >
            {{ product.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lists {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}
</style>
`,ks=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const rawHtmlData =
  '이 글자는 <span style="color: red; font-weight: bold;">빨간색 굵은 글자</span>이다.'
const inputValue = ref('')
const message = ref('')

function showMessage() {
  message.value = inputValue.value
}
<\/script>

<template>
  <section class="practice-card">
    <div class="practice-area">
      <h2>
        v-html 디렉티브 학습
        <ConceptHelp
          text="v-html은 문자열에 들어 있는 HTML 태그를 실제 HTML 요소로 해석해 출력합니다."
        />
      </h2>

      <h3>일반 보간법 &#123;&#123; &#125;&#125; 사용 결과:</h3>
      <p>{{ rawHtmlData }}</p>

      <br />

      <h3>v-html 디렉티브 사용 결과:</h3>
      <p v-html="rawHtmlData"></p>
    </div>

    <div class="practice-area">
      <h2>
        v-html XSS 학습
        <ConceptHelp
          text="XSS는 악성 스크립트가 다른 사용자의 브라우저에서 실행되는 공격입니다. 사용자 입력을 v-html에 직접 연결하면 위험합니다."
        />
      </h2>
      <input
        v-model="inputValue"
        placeholder="내용을 입력하세요"
      />
      <button @click="showMessage">확인</button>
      <div v-html="message"></div>
    </div>

    <p class="warning">
      위 코드는 XSS 위험을 확인하기 위한 학습용 예제입니다.
      실제 서비스에서는 사용자 입력을 v-html로 직접 출력하지 않습니다.
    </p>

    <div class="practice-area">
      <h2>
        v-text 디렉티브 학습
        <ConceptHelp
          text="v-text는 값을 일반 텍스트로 출력합니다. HTML 태그가 포함되어 있어도 실제 태그로 해석하지 않습니다."
        />
      </h2>
      <p v-text="rawHtmlData"></p>
    </div>
  </section>
</template>

<style scoped>
.warning {
  color: #c0392b;
  font-weight: bold;
}
</style>
`,As=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const text1 = ref('') // v-model용 변수
const text2 = ref('') // 원리 이해용 변수

const comment = ref('')
const isAgreed = ref(false) // 단일 체크박스는 Boolean
const favoriteFruits = ref([]) // 다중 체크박스는 배열로 시작
const gender = ref('')
const selectedCar = ref('')

// v-model Modifiers 실습용 반응형 변수
const lazyText = ref('')
const age = ref('')
const userEmail = ref('')
const price = ref('')
<\/script>

<template>
  <section class="practice-card">
    <div class="practice-area">
      <h2>
        v-model 양방향 데이터 바인딩
        <ConceptHelp
          text="v-model은 입력 요소의 값과 Vue 데이터를 연결해 한쪽이 바뀌면 다른 쪽도 자동으로 반영되게 합니다."
        />
      </h2>

      <div class="form-item">
        <h3>1) v-model 축약 문법 (양방향)</h3>
        <input
          v-model="text1"
          type="text"
          placeholder="여기에 입력하세요"
        />
        <p>
          입력된 값: <strong>{{ text1 }}</strong>
        </p>
      </div>

      <div class="form-item">
        <h3>2) v-model의 내부 작동 원리 (단방향 + 이벤트)</h3>
        <input
          :value="text2"
          type="text"
          placeholder="원리 파악용 입력창"
          @input="(e) => (text2 = e.target.value)"
        />
        <p>
          입력된 값: <strong>{{ text2 }}</strong>
        </p>
      </div>

    </div>

    <div class="practice-area">
      <h2>
        모든 HTML Form 요소와 v-model 매핑
        <ConceptHelp
          text="Form 요소마다 v-model이 저장하는 값의 형태가 다릅니다. 단일 체크박스는 Boolean, 다중 체크박스는 Array로 시작합니다."
        />
      </h2>

      <div class="form-item">
        <h3>1) Textarea (장문 텍스트)</h3>
        <textarea
          v-model="comment"
          placeholder="의견을 남겨주세요"
        ></textarea>
        <p>데이터 상태: {{ comment }}</p>
      </div>

      <div class="form-item">
        <h3>2) 단일 Checkbox (동의 여부)</h3>
        <label>
          <input v-model="isAgreed" type="checkbox" />
          약관에 동의합니다.
        </label>
        <p>데이터 상태: {{ isAgreed }}</p>
      </div>

      <div class="form-item">
        <h3>3) 다중 Checkbox (복수 선택 → 배열에 저장)</h3>
        <div class="option-group">
          <label>
            <input
              v-model="favoriteFruits"
              type="checkbox"
              value="사과"
            />
            사과
          </label>
          <label>
            <input
              v-model="favoriteFruits"
              type="checkbox"
              value="바나나"
            />
            바나나
          </label>
          <label>
            <input
              v-model="favoriteFruits"
              type="checkbox"
              value="딸기"
            />
            딸기
          </label>
        </div>
        <p>데이터 상태 (배열): {{ favoriteFruits }}</p>
      </div>

      <div class="form-item">
        <h3>4) Radio (단일 선택)</h3>
        <div class="option-group">
          <label>
            <input
              v-model="gender"
              type="radio"
              value="남성"
            />
            남성
          </label>
          <label>
            <input
              v-model="gender"
              type="radio"
              value="여성"
            />
            여성
          </label>
        </div>
        <p>데이터 상태: {{ gender }}</p>
      </div>

      <div class="form-item">
        <h3>5) Select (드롭다운 선택)</h3>
        <select v-model="selectedCar">
          <option value="">-- 선택하세요 --</option>
          <option value="tesla">테슬라</option>
          <option value="hyundai">현대자동차</option>
          <option value="bmw">BMW</option>
        </select>
        <p>데이터 상태: {{ selectedCar }}</p>
      </div>
    </div>

    <div class="practice-area">
      <h2>
        v-model 수식어(Modifiers) 활용
        <ConceptHelp
          text="v-model 수식어는 값의 반영 시점이나 저장 형태를 간단히 제어합니다. .lazy, .number, .trim을 단독 또는 연결해서 사용할 수 있습니다."
        />
      </h2>

      <div class="form-item">
        <h3>1) .lazy 수식어 (change 이벤트 시점 반영)</h3>
        <input
          v-model.lazy="lazyText"
          type="text"
          placeholder="입력 후 Enter 또는 외부 클릭"
        />
        <p>
          실시간이 아닌 확정된 값:
          <strong>{{ lazyText }}</strong>
        </p>
      </div>

      <div class="form-item">
        <h3>2) .number 수식어 (Number 타입 자동 형변환)</h3>
        <input
          v-model.number="age"
          type="text"
          placeholder="나이를 입력하세요"
        />
        <p>
          입력된 값: <strong>{{ age }}</strong>
        </p>
        <p>
          데이터 타입: <strong>{{ typeof age }}</strong>
        </p>
      </div>

      <div class="form-item">
        <h3>3) .trim 수식어 (양끝 공백 자동 제거)</h3>
        <input
          v-model.trim="userEmail"
          type="text"
          placeholder="앞뒤 공백을 포함해 입력해 보세요"
        />
        <p>
          공백 제거된 값: <strong>"{{ userEmail }}"</strong>
        </p>
        <p>
          문자열 길이: <strong>{{ userEmail.length }}</strong>
        </p>
      </div>

      <div class="form-item">
        <h3>4) Chaining (수식어 체이닝: .trim.number)</h3>
        <input
          v-model.trim.number="price"
          type="text"
          placeholder="공백과 숫자를 섞어 입력해 보세요"
        />
        <p>
          처리된 값: <strong>"{{ price }}"</strong>
        </p>
        <p>
          데이터 타입: <strong>{{ typeof price }}</strong>
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
input[type='text'],
textarea,
select {
  width: min(100%, 420px);
  padding: 8px;
  border: 1px solid #ccd5d2;
  border-radius: 6px;
  font: inherit;
}

textarea {
  min-height: 90px;
  resize: vertical;
}

.form-item + .form-item {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px dashed #dfe7e4;
}

.option-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
`,js=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// 일반 변수: 값이 바뀌어도 Vue가 화면 갱신을 감지하지 못함
let normalCount = 0

// 반응형 변수: 값이 바뀌면 Vue가 화면을 다시 그림
const count = ref(0)
const welcomeMessage = ref('hello vue')
<\/script>

<template>
  <section class="practice-card">
    <h2>
      실습 1 — Reactivity와 보간법
      <ConceptHelp
        text="Reactivity는 데이터가 바뀌면 화면도 자동으로 갱신되는 특성이고, 보간법은 {{ }} 안의 값이나 표현식을 화면에 출력하는 문법입니다."
      />
    </h2>

    <div>
      <p>일반 변수: {{ normalCount }}</p>
      <button @click="normalCount++">일반 변수 증가</button>

      <p>반응형 변수: {{ count }}</p>
      <button @click="count++">반응형 변수 증가</button>
    </div>

    <div>
      <p>원래 문자열: {{ welcomeMessage }}</p>
      <p>대문자 변환: {{ welcomeMessage.toUpperCase() }}</p>
      <p>{{ 'Random number: ' + Math.ceil(Math.random() * 100) }}</p>
    </div>
  </section>
</template>
`,Ms=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const message = ref('안녕하세요!')
const count = ref(1)
const name = ref('홍길동')
const age = ref(20)
<\/script>

<template>
  <section class="practice-card">
    <div class="practice-area">
      <h2>
        v-pre 디렉티브 학습
        <ConceptHelp
          text="v-pre는 해당 요소와 자식의 Vue 문법을 해석하지 않고 작성된 내용을 그대로 표시합니다."
        />
      </h2>
      <p>일반 출력: {{ message }}</p>
      <p v-pre>v-pre 출력: {{ message }}</p>
    </div>

    <div class="practice-area">
      <h2>
        v-cloak 디렉티브 학습
        <ConceptHelp
          text="v-cloak은 Vue가 준비되기 전에 {{ message }} 같은 템플릿 원문이 잠깐 보이는 것을 CSS와 함께 방지합니다."
        />
      </h2>
      <p v-cloak>Vue가 준비되면 표시: {{ message }}</p>
    </div>

    <div class="practice-area">
      <h2>
        v-once 디렉티브 학습
        <ConceptHelp
          text="v-once는 최초 한 번만 렌더링하고 이후 데이터가 변경되어도 해당 화면을 갱신하지 않습니다."
        />
      </h2>
      <p>일반 값: {{ count }}</p>
      <p v-once>최초 값으로 고정: {{ count }}</p>
      <button @click="count++">숫자 증가</button>
    </div>

    <div class="practice-area">
      <h2>
        v-memo 디렉티브 학습
        <ConceptHelp
          text="v-memo는 지정한 의존성이 바뀔 때만 영역을 다시 렌더링합니다. 큰 목록 등 실제 성능 문제가 있는 경우에 제한적으로 사용합니다."
        />
      </h2>
      <div v-memo="[name, age]" class="memo-box">
        <p>이름: {{ name }}</p>
        <p>나이: {{ age }}</p>
      </div>

      <div class="button-group">
        <button
          @click="
            name = name === '홍길동' ? '이순신' : '홍길동'
          "
        >
          이름 변경
        </button>
        <button @click="age++">나이 증가</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
[v-cloak] {
  display: none;
}

.memo-box {
  padding: 10px;
  border: 1px solid #42b883;
  border-radius: 8px;
}
</style>
`,Ns=`<script setup>
import ConceptHelp from '../../ConceptHelp.vue'

// ⬇️ 지역(Local) 등록 — 이 import 한 줄이 곧 "등록"이다.
//    <script setup>에서는 components: { ... } 를 따로 쓰지 않아도 된다.
import BaseButton from './BaseButton.vue'

// ⬇️ GlobalBadge는 import가 없다!
//    main.js에서 app.component('GlobalBadge', ...) 로 전역 등록했기 때문에
//    이 파일에서는 아무것도 하지 않아도 <GlobalBadge />를 쓸 수 있다.
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Component 등록 — 지역 vs 전역
      <ConceptHelp
        text="지역 등록은 쓰는 파일에서 import 하는 방식이라 어디서 쓰는지 코드로 드러납니다. 전역 등록은 main.js에서 app.component()로 한 번만 해두면 어디서든 import 없이 쓸 수 있지만, 안 쓰는 컴포넌트까지 번들에 들어갑니다."
      />
    </h2>

    <div class="practice-area">
      <h3>1) 지역(Local) 등록 — import 한 줄이 등록</h3>
      <p class="explain">
        아래 두 버튼은 <b>같은 컴포넌트</b>입니다. 등록한 컴포넌트는 PascalCase와 kebab-case 두
        가지로 부를 수 있습니다.
      </p>

      <div class="row">
        <BaseButton label="PascalCase 호출" />
        <base-button label="kebab-case 호출"></base-button>
      </div>

      <pre class="code">import BaseButton from './BaseButton.vue'

&lt;BaseButton /&gt;
&lt;base-button&gt;&lt;/base-button&gt;</pre>
    </div>

    <div class="practice-area">
      <h3>2) 전역(Global) 등록 — import가 없다</h3>
      <p class="explain">
        아래 배지는 이 파일에서 <b>import 하지 않았습니다.</b> main.js에서 한 번 등록해 둔 덕분에
        바로 쓸 수 있습니다.
      </p>

      <div class="row">
        <GlobalBadge />
        <GlobalBadge text="어디서든 사용 가능" />
      </div>

      <pre class="code">// main.js
app.component('GlobalBadge', GlobalBadge)

// 이 파일 — import 없이 바로
&lt;GlobalBadge /&gt;</pre>
    </div>

    <div class="practice-area">
      <h3>3) 언제 무엇을 쓸까</h3>
      <table class="compare">
        <thead>
          <tr>
            <th></th>
            <th>지역 등록</th>
            <th>전역 등록</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>등록 위치</td>
            <td>쓰는 파일에서 import</td>
            <td>main.js 한 곳</td>
          </tr>
          <tr>
            <td>사용 범위</td>
            <td>그 파일 안에서만</td>
            <td>앱 전체</td>
          </tr>
          <tr>
            <td>의존 관계</td>
            <td>코드에 드러남</td>
            <td>어디서 왔는지 안 보임</td>
          </tr>
          <tr>
            <td>번들 크기</td>
            <td>쓰는 것만 포함</td>
            <td>안 써도 포함</td>
          </tr>
          <tr>
            <td>적합한 경우</td>
            <td><b>대부분의 컴포넌트</b></td>
            <td>앱 전반에서 반복되는 소수</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.explain {
  margin: 0 0 12px;
  font-size: 13.5px;
  line-height: 1.7;
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.code {
  margin: 0;
  overflow-x: auto;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 12.5px;
  line-height: 1.7;
}

.compare {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.compare th,
.compare td {
  padding: 9px 10px;
  border-bottom: 1px solid var(--line);
  text-align: left;
}

.compare thead th {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.compare tbody td:first-child {
  color: var(--faint);
  font-size: 12px;
  white-space: nowrap;
}

.compare tbody td {
  color: var(--ink-soft);
}
</style>
`,Ps=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import LifecycleChild from './LifecycleChild.vue'

const isShow = ref(true)
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Lifecycle Hook — 생성부터 소멸까지
      <ConceptHelp
        text="컴포넌트는 생성 → 부착(mount) → 갱신(update) → 소멸(unmount)의 생애를 거칩니다. 각 시점에 Vue가 불러주는 함수가 Lifecycle Hook입니다. 브라우저 콘솔(F12)을 열고 아래 버튼으로 컴포넌트를 껐다 켜면 네 단계가 순서대로 찍힙니다."
      />
    </h2>

    <p class="hint">브라우저 콘솔(F12)을 열어두고 버튼을 눌러 보세요.</p>

    <button class="toggle-btn" @click="isShow = !isShow">
      {{ isShow ? '🛑 실습 컴포넌트 파괴하기 (v-if="false")' : '🟢 실습 컴포넌트 다시 살리기' }}
    </button>

    <hr />

    <LifecycleChild v-if="isShow" />
    <p v-else class="gone">컴포넌트가 소멸했습니다. 콘솔에서 타이머 정리 로그를 확인해 보세요.</p>
  </section>
</template>

<style scoped>
.hint {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13px;
}

.toggle-btn {
  width: 100%;
  margin-bottom: 15px;
  padding: 12px 15px;
  font-weight: bold;
  cursor: pointer;
}

hr {
  margin: 0 0 16px;
  border: 0;
  border-top: 1px solid var(--line);
}

.gone {
  padding: 26px;
  border: 1px dashed var(--line-strong);
  border-radius: 12px;
  color: var(--muted);
  background: var(--paper);
  font-size: 13.5px;
  text-align: center;
}
</style>
`,Fs=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import PropsEmitsChild from './PropsEmitsChild.vue'

// 1. 상위 컴포넌트의 로컬 반응형 상태 정의
const message = ref('Parent 초기 메시지')

// 2. 하위 컴포넌트의 커스텀 이벤트를 수신했을 때 실행될 핸들러 함수
// 인자(newValue)로 하위 컴포넌트가 보낸 페이로드가 자동 주입됩니다.
const handleUpdateRequest = (newValue) => {
  message.value = newValue
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Props & Emits — 부모와 자식의 대화
      <ConceptHelp
        text="데이터는 부모 → 자식 한 방향으로만 흐릅니다(Props). 자식이 값을 바꾸고 싶으면 직접 고치지 않고 부모에게 '바꿔 달라'고 신호를 보냅니다(Emits). 실제로 값을 바꾸는 주체는 언제나 데이터를 가진 부모입니다."
      />
    </h2>

    <div class="parent-container">
      <p class="role">상위 컴포넌트 (Parent)</p>
      <p class="state">
        현재 로컬 데이터(State): <strong>{{ message }}</strong>
      </p>

      <PropsEmitsChild :parent-data="message" @update-request="handleUpdateRequest" />
    </div>
  </section>
</template>

<style scoped>
.parent-container {
  padding: 20px;
  border: 2px solid var(--accent-line);
  border-radius: 14px;
  background: var(--paper);
}

.role {
  margin: 0 0 10px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.state {
  margin: 0 0 16px;
}

.state strong {
  color: var(--accent);
}
</style>
`,Is=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import FlowChild from './FlowChild.vue'

/**
 * 데이터가 어느 방향으로 흐르는지 눈으로 보는 실습.
 * 부모가 값을 바꾸면 ↓ 화살표, 자식이 emit 하면 ↑ 화살표가 켜진다.
 */
const message = ref('안녕하세요')
const lastReply = ref('아직 없음')

const flowing = ref(null) // 'down' | 'up' | null
const log = ref([])

const flash = (dir) => {
  flowing.value = dir
  setTimeout(() => {
    if (flowing.value === dir) flowing.value = null
  }, 700)
}

const push = (dir, text) => {
  log.value.unshift({ dir, text })
  if (log.value.length > 6) log.value.pop()
}

// 부모가 입력할 때마다 = props가 아래로 흐른다
const onInput = (e) => {
  message.value = e.target.value
  flash('down')
  push('down', \`props.message = "\${message.value}"\`)
}

// 자식이 신호를 올려보냈을 때
const onReply = (payload) => {
  lastReply.value = payload
  flash('up')
  push('up', \`emit('reply', "\${payload}")\`)
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      데이터는 어느 쪽으로 흐르나 — Props ↓ / Emits ↑
      <ConceptHelp
        text="Props는 부모에서 자식으로 내려가고(↓), Emits는 자식에서 부모로 올라갑니다(↑). 반대 방향은 없습니다. 아래에서 입력하거나 버튼을 누르면 그 순간 어느 화살표가 켜지는지 확인해 보세요."
      />
    </h2>

    <div class="flow">
      <!-- 부모 -->
      <div class="node parent">
        <p class="node-role">부모 (Parent)</p>
        <label class="field">
          <span class="key">message</span>
          <input :value="message" type="text" @input="onInput" />
        </label>
        <p class="field">
          <span class="key">받은 신호</span>
          <span class="val">{{ lastReply }}</span>
        </p>
      </div>

      <!-- 화살표 -->
      <div class="arrows">
        <div class="arrow down" :class="{ on: flowing === 'down' }">
          <span class="head">↓</span>
          <span class="tag">props</span>
        </div>
        <div class="arrow up" :class="{ on: flowing === 'up' }">
          <span class="head">↑</span>
          <span class="tag">emits</span>
        </div>
      </div>

      <!-- 자식 -->
      <FlowChild :message="message" @reply="onReply" />
    </div>

    <!-- 무엇이 오갔는지 기록 -->
    <div class="log">
      <p class="log-title">주고받은 기록</p>
      <p v-if="!log.length" class="log-empty">입력하거나 버튼을 눌러 보세요.</p>
      <p v-for="(item, i) in log" :key="i" class="log-row" :class="item.dir">
        <span class="log-dir">{{ item.dir === 'down' ? '↓ 내려감' : '↑ 올라감' }}</span>
        <code>{{ item.text }}</code>
      </p>
    </div>
  </section>
</template>

<style scoped>
.flow {
  display: grid;
  gap: 12px;
  margin-bottom: 18px;
}

.node {
  padding: 16px 18px;
  border-radius: 12px;
}

.parent {
  border: 2px solid var(--accent-line);
  background: var(--paper);
}

.node-role {
  margin: 0 0 12px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.field {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  margin: 0 0 10px;
}

.field:last-child {
  margin-bottom: 0;
}

.key {
  min-width: 72px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.val {
  color: var(--ink);
  font-size: 14px;
  font-weight: 600;
}

/* 화살표 — 흐를 때만 켜진다 */
.arrows {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 4px 0;
}

.arrow {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--faint);
  background: var(--surface);
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.arrow .head {
  font-size: 15px;
  font-weight: 800;
}

.arrow .tag {
  font-family: var(--font-mono);
  font-size: 11px;
}

.arrow.down.on {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
  transform: translateY(3px);
}

.arrow.up.on {
  border-color: var(--slate);
  color: var(--slate);
  background: var(--slate-tint);
  transform: translateY(-3px);
}

/* 기록 */
.log {
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
}

.log-title {
  margin: 0 0 10px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.log-empty {
  margin: 0;
  color: var(--faint);
  font-size: 13px;
}

.log-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
  margin: 0 0 6px;
}

.log-row:last-child {
  margin-bottom: 0;
}

.log-dir {
  min-width: 62px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
}

.log-row.down .log-dir {
  color: var(--accent);
}

.log-row.up .log-dir {
  color: var(--slate);
}

.log-row code {
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 12px;
}

@media (min-width: 640px) {
  .flow {
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  .arrows {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
`,Ls=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import ReadonlyChild from './ReadonlyChild.vue'

/**
 * "왜 자식이 직접 못 바꾸나"를 눌러서 확인하는 실습.
 * 값의 주인은 부모다. 자식은 요청만 할 수 있다.
 */
const count = ref(0)

const increase = () => {
  count.value++
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Props는 읽기 전용 — 값의 주인은 부모다
      <ConceptHelp
        text="자식이 받은 Props를 직접 바꾸면 Vue가 막습니다. 값이 어디서 바뀌었는지 추적할 수 없게 되기 때문입니다. 자식은 '바꿔 달라'고 요청(emit)하고, 실제로 바꾸는 것은 값을 가진 부모입니다."
      />
    </h2>

    <div class="parent">
      <p class="node-role">부모 (Parent) — 값의 주인</p>
      <p class="field">
        <span class="key">count</span>
        <span class="val">{{ count }}</span>
      </p>

      <ReadonlyChild :count="count" @increase="increase" />
    </div>

    <p class="hint">
      브라우저 콘솔(F12)을 열고 ❌ 버튼을 누르면
      <code>Set operation on key "count" failed: target is readonly</code> 경고가 찍힙니다.
    </p>
  </section>
</template>

<style scoped>
.parent {
  padding: 18px 20px;
  border: 2px solid var(--accent-line);
  border-radius: 14px;
  background: var(--paper);
}

.node-role {
  margin: 0 0 12px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.field {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0 0 16px;
}

.key {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.val {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
}

.hint {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.hint code {
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--surface-sunken);
  font-family: var(--font-mono);
  font-size: 11.5px;
}
</style>
`,Rs=`<script setup>
import { provide, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import DrillMid from './DrillMid.vue'
import InjectMid from './InjectMid.vue'

/**
 * 같은 값을 3단계 아래로 내려보내는 두 가지 방법을 나란히 비교한다.
 *   A. Props Drilling — 중간 컴포넌트가 필요 없는 값을 받아서 토스
 *   B. Provide / Inject — 중간을 건너뛰고 조상 → 후손 직통
 */
const themeColor = ref('dark-mode')

// 주입할 키(Key) 이름과 실제 데이터(Value)를 등록한다
provide('globalTheme', themeColor)

const toggle = () => {
  themeColor.value = themeColor.value === 'dark-mode' ? 'light-mode' : 'dark-mode'
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Provide & Inject — 중간을 건너뛰고 전달하기
      <ConceptHelp
        text="계층이 깊어지면 중간 컴포넌트들이 자기는 쓰지도 않는 값을 받아서 아래로 넘기기만 하는 일이 생깁니다(Props Drilling). provide/inject는 그 중간을 건너뛰고 조상이 선언한 값을 후손이 직접 꺼내 쓰게 해 줍니다."
      />
    </h2>

    <div class="root">
      <p class="root-role">조부모 (GrandParent) — 값의 주인</p>
      <p class="field">
        <span class="key">themeColor :</span>
        <span class="val">{{ themeColor }}</span>
        <button @click="toggle">테마 바꾸기</button>
      </p>

      <div class="compare">
        <!-- A -->
        <div class="col">
          <p class="col-title bad">A · Props Drilling</p>
          <p class="col-desc">값이 <b>중간을 통과해</b> 내려갑니다.</p>
          <DrillMid :theme="themeColor" />
        </div>

        <!-- B -->
        <div class="col">
          <p class="col-title good">B · Provide / Inject</p>
          <p class="col-desc">값이 <b>중간을 건너뛰고</b> 바로 갑니다.</p>
          <InjectMid />
        </div>
      </div>
    </div>

    <p class="footnote">
      버튼을 누를 때 <b>A의 중간 카드만 번쩍이는지</b> 보세요. 값이 그곳을 지나간다는 뜻입니다. 여기는 조부모 → 부모 → 자식 3단계라 차이가 작아 보이지만, 10단계쯤 되면 A는 중간 8곳을 전부 고쳐야 합니다.
    </p>
  </section>
</template>

<style scoped>
.root {
  padding: 18px 20px;
  border: 2px solid var(--accent-line);
  border-radius: 14px;
  background: var(--paper);
}

.root-role {
  margin: 0 0 12px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.field {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
}

.key {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.val {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 17px;
  font-weight: 700;
}

.compare {
  display: grid;
  gap: 14px;
}

.col-title {
  margin: 0 0 4px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.col-title.bad {
  color: var(--signal);
}

.col-title.good {
  color: var(--accent);
}

.col-desc {
  margin: 0 0 10px;
  color: var(--muted);
  font-size: 12.5px;
}

.footnote {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

@media (min-width: 620px) {
  .compare {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}
</style>
`,zs=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import SiblingA from './SiblingA.vue'
import SiblingB from './SiblingB.vue'

/**
 * 형제끼리는 직접 대화하는 선이 없다.
 * A가 emit → 부모가 받아서 → B에게 props로 내려준다.
 */
const received = ref('')
const step = ref(0) // 0 대기 · 1 올라감 · 2 내려감

const onSend = (text) => {
  step.value = 1
  setTimeout(() => {
    received.value = text
    step.value = 2
    setTimeout(() => (step.value = 0), 900)
  }, 450)
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      형제끼리는 부모를 거쳐야 한다
      <ConceptHelp
        text="같은 부모 아래 나란히 있는 컴포넌트끼리는 직접 연결된 선이 없습니다. A가 B에게 말하려면 반드시 부모에게 올렸다가(emit) 부모가 다시 B에게 내려줘야(props) 합니다. 부모를 거치는 이 경로가 눈에 보이도록 만들었습니다."
      />
    </h2>

    <div class="parent">
      <p class="node-role">부모 (Parent) — 중계자</p>

      <div class="route">
        <span class="leg up" :class="{ on: step >= 1 }">① A → 부모 &nbsp;emit</span>
        <span class="leg down" :class="{ on: step >= 2 }">② 부모 → B &nbsp;props</span>
      </div>

      <div class="siblings">
        <SiblingA @send="onSend" />
        <span class="cut" aria-hidden="true">✕ 직접 연결 없음</span>
        <SiblingB :received="received" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.parent {
  padding: 18px 20px;
  border: 2px solid var(--accent-line);
  border-radius: 14px;
  background: var(--paper);
}

.node-role {
  margin: 0 0 12px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* 경로 표시 */
.route {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.leg {
  padding: 5px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--faint);
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 11.5px;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.leg.up.on {
  border-color: var(--slate);
  color: var(--slate);
  background: var(--slate-tint);
}

.leg.down.on {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

/* 형제 배치 */
.siblings {
  display: grid;
  gap: 10px;
  align-items: center;
}

.cut {
  justify-self: center;
  padding: 4px 10px;
  border: 1px dashed var(--line-strong);
  border-radius: 999px;
  color: var(--faint);
  font-size: 11px;
}

@media (min-width: 640px) {
  .siblings {
    grid-template-columns: 1fr auto 1fr;
  }
}
</style>
`,Bs=`<script setup>
import ConceptHelp from '../../ConceptHelp.vue'
import SlotBaseCard from './SlotBaseCard.vue'

/**
 * 더해보기 ① header · body · footer 세 구멍짜리 BaseCard 하나로 화면 3개를 만든다.
 * 세 카드 모두 같은 파일(SlotBaseCard.vue)이다. 다른 건 부모가 채워 넣은 내용뿐이다.
 */
<\/script>

<template>
  <section class="practice-card">
    <h2>
      더해보기 ① BaseCard 하나로 화면 3개
      <ConceptHelp
        text="아래 세 카드는 전부 같은 SlotBaseCard.vue 파일입니다. 테두리·모서리·구분선이 똑같은 이유죠. 다른 것은 부모가 header·body·footer 세 구멍에 무엇을 넣었는지뿐입니다. 껍데기를 한 번만 만들어 두고 화면마다 알맹이만 갈아 끼우는 것이 Slot의 목적입니다."
      />
    </h2>

    <p class="explain">
      세 카드 모두 <b>같은 파일</b>입니다. 껍데기를 고치고 싶으면
      <code>SlotBaseCard.vue</code> 한 곳만 고치면 세 개가 동시에 바뀝니다.
    </p>

    <div class="deck">
      <!-- 1. 세 구멍 모두 채운 경우 -->
      <div class="case">
        <p class="case-label">구멍 3개 모두 채움</p>
        <SlotBaseCard>
          <template #header><b>주간 리포트</b></template>

          <p class="line">이번 주 방문자가 12% 늘었습니다.</p>

          <template #footer>
            <button type="button">자세히</button>
          </template>
        </SlotBaseCard>
      </div>

      <!-- 2. footer를 비워 기본값이 나오는 경우 -->
      <div class="case">
        <p class="case-label">footer만 비움</p>
        <SlotBaseCard>
          <template #header><b>공지</b></template>

          <p class="line">금요일 18시에 배포가 있습니다.</p>
        </SlotBaseCard>
      </div>

      <!-- 3. 아무것도 안 채운 경우 -->
      <div class="case">
        <p class="case-label">아무것도 안 채움</p>
        <SlotBaseCard />
      </div>
    </div>

    <!-- 더해보기 ⑤ Props로는 불가능하고 Slot이어야만 하는 상황 -->
    <div class="verdict">
      <p class="verdict-title">그럼 Props로 하면 안 되나?</p>
      <div class="verdict-grid">
        <div class="side bad">
          <p class="side-head">❌ Props로 시도</p>
          <pre><code>&lt;BaseCard title="주간 리포트" /&gt;</code></pre>
          <p class="side-why">
            제목 <b>글자</b>는 넘길 수 있습니다. 그런데 위 첫 카드의 footer에는
            <b>&lt;button&gt; 태그</b>가 들어 있습니다. Props로 버튼을 넘기려면 문자열로
            <code>"&lt;button&gt;"</code>을 보내야 하는데, 그건 화면이 아니라 그냥 글자입니다.
          </p>
        </div>
        <div class="side good">
          <p class="side-head">✅ Slot이어야만 하는 이유</p>
          <pre><code>&lt;template #footer&gt;
  &lt;button @click="..."&gt;자세히&lt;/button&gt;
&lt;/template&gt;</code></pre>
          <p class="side-why">
            <b>태그·이벤트·컴포넌트</b>가 통째로 들어갑니다. 넘기는 것이 값이 아니라 화면 조각이기
            때문입니다. <b>버튼 하나만 들어가도 Props로는 안 됩니다.</b>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.explain {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.explain code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.92em;
}

.deck {
  display: grid;
  gap: 12px;
}

.case-label {
  margin: 0 0 6px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
}

.line {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.6;
}

/* Props vs Slot 판정 */
.verdict {
  margin-top: 18px;
  padding: 14px 16px;
  border: 1px solid var(--slate-line);
  border-radius: 12px;
  background: var(--slate-tint);
}

.verdict-title {
  margin: 0 0 12px;
  color: var(--slate);
  font-size: 13.5px;
  font-weight: 800;
}

.verdict-grid {
  display: grid;
  gap: 12px;
}

.side {
  padding: 12px 14px;
  border-radius: 10px;
  background: var(--surface);
}

.side-head {
  margin: 0 0 8px;
  font-size: 12.5px;
  font-weight: 800;
}

.side.bad .side-head {
  color: var(--signal);
}

.side.good .side-head {
  color: var(--accent);
}

.side pre {
  overflow-x: auto;
  margin: 0 0 8px;
  padding: 9px 11px;
  border-radius: 7px;
  background: var(--paper);
}

.side code {
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.65;
  white-space: pre;
}

.side-why {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.75;
}

.side-why code {
  padding: 1px 4px;
  border-radius: 3px;
  background: var(--paper);
}

@media (min-width: 700px) {
  .deck {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }

  .verdict-grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}
</style>
`,Vs=`<script setup>
import ConceptHelp from '../../ConceptHelp.vue'
import SlotItemList from './SlotItemList.vue'

const won = (n) => n.toLocaleString('ko-KR') + '원'
<\/script>

<template>
  <section class="practice-card">
    <h2>
      더해보기 ② 같은 목록, 부모가 정하는 세 가지 모습
      <ConceptHelp
        text="목록 컴포넌트는 '무엇을 반복할지'(데이터와 v-for)만 책임지고, '각 항목을 어떻게 그릴지'는 부모에게 맡깁니다. 아래 세 목록은 전부 같은 SlotItemList.vue이고 데이터도 완전히 같습니다. 부모가 v-slot으로 받은 item을 다르게 그렸을 뿐입니다."
      />
    </h2>

    <p class="explain">
      세 목록 모두 <b>같은 컴포넌트 · 같은 데이터</b>입니다. 데이터는
      <code>SlotItemList.vue</code> 안에만 있고, 부모는 그리는 방법만 정합니다.
    </p>

    <div class="views">
      <!-- 1. 단순 표기 -->
      <div class="view">
        <p class="view-label">A · 이름만</p>
        <SlotItemList v-slot="{ item }">
          <span class="plain">{{ item.name }}</span>
        </SlotItemList>
      </div>

      <!-- 2. 가격 강조 -->
      <div class="view">
        <p class="view-label">B · 가격 강조</p>
        <SlotItemList v-slot="{ item }">
          <div class="row">
            <span>{{ item.name }}</span>
            <b class="price">{{ won(item.price) }}</b>
          </div>
        </SlotItemList>
      </div>

      <!-- 3. 재고 상태까지 판단 -->
      <div class="view">
        <p class="view-label">C · 재고 상태</p>
        <SlotItemList v-slot="{ item }">
          <div class="row">
            <span :class="{ out: item.stock === 0 }">{{ item.name }}</span>
            <span v-if="item.stock === 0" class="badge sold">품절</span>
            <span v-else-if="item.stock < 5" class="badge low">{{ item.stock }}개 남음</span>
            <span v-else class="badge ok">재고 충분</span>
          </div>
        </SlotItemList>
      </div>
    </div>

    <p class="note">
      C의 <b>품절 · 임박</b> 판단은 목록 컴포넌트가 아니라 <b>부모</b>가 했습니다. 목록은
      <code>stock</code>이 무슨 뜻인지조차 모릅니다. 그래서 같은 목록을 쇼핑몰에도, 관리자 페이지에도
      쓸 수 있습니다.
    </p>
  </section>
</template>

<style scoped>
.explain,
.note {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}

.note {
  margin: 16px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--accent);
  border-radius: 0 9px 9px 0;
  background: var(--accent-tint);
  color: var(--ink-soft);
}

.explain code,
.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 0.92em;
}

.views {
  display: grid;
  gap: 14px;
}

.view-label {
  margin: 0 0 6px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
}

.plain {
  font-size: 13.5px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 13.5px;
}

.price {
  margin-left: auto;
  color: var(--accent);
  font-family: var(--font-mono);
}

.out {
  color: var(--faint);
  text-decoration: line-through;
}

.badge {
  margin-left: auto;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

.badge.sold {
  color: var(--signal);
  background: var(--signal-tint);
}

.badge.low {
  color: var(--slate);
  background: var(--slate-tint);
}

.badge.ok {
  color: var(--accent);
  background: var(--accent-tint);
}

@media (min-width: 760px) {
  .views {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
}
</style>
`,Hs=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'
import SlotModal from './SlotModal.vue'

/**
 * 더해보기 ③ 같은 모달 껍데기로 성격이 다른 창 두 개를 만든다.
 * 삭제 확인창과 안내창은 버튼 구성부터 다르지만, 모달 파일은 하나다.
 */
const openConfirm = ref(false)
const openNotice = ref(false)
const result = ref('')

const remove = () => {
  result.value = '삭제했습니다.'
  openConfirm.value = false
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      더해보기 ③ 모달 하나로 창 두 개
      <ConceptHelp
        text="모달 껍데기(어둡게 덮기·가운데 띄우기·닫기)는 어느 창이든 똑같습니다. 다른 건 제목·내용·버튼뿐이죠. 그래서 그 세 곳만 Named Slot으로 열어 두면, 모달 파일 하나로 확인창·안내창·입력창을 전부 만들 수 있습니다."
      />
    </h2>

    <p class="explain">
      아래 두 버튼은 <b>같은 SlotModal.vue</b>를 엽니다. 껍데기는 같고
      <code>#title</code> · 본문 · <code>#actions</code> 세 구멍만 다릅니다.
    </p>

    <!-- 모달이 이 영역 안에서만 덮이도록 기준점을 준다 -->
    <div class="stage">
      <div class="buttons">
        <button type="button" @click="openConfirm = true">삭제 확인창 열기</button>
        <button type="button" @click="openNotice = true">안내창 열기</button>
      </div>

      <p v-if="result" class="result">{{ result }}</p>

      <!-- 모달이 닫혀 있을 때 무대가 비어 보이지 않게 -->
      <p v-if="!openConfirm && !openNotice" class="hint">
        위 버튼을 눌러 보세요. 모달은 <b>이 점선 안에서만</b> 열립니다.
      </p>

      <!-- 1. 버튼 두 개짜리 확인창 -->
      <SlotModal :open="openConfirm" @close="openConfirm = false">
        <template #title><b>정말 삭제할까요?</b></template>

        <p>삭제한 항목은 되돌릴 수 없습니다.</p>

        <template #actions>
          <button type="button" @click="openConfirm = false">취소</button>
          <button type="button" class="danger" @click="remove">삭제</button>
        </template>
      </SlotModal>

      <!-- 2. #actions를 안 채워 기본 버튼이 나오는 안내창 -->
      <SlotModal :open="openNotice" @close="openNotice = false">
        <template #title><b>배포 안내</b></template>

        <p>금요일 18시에 서비스가 잠시 중단됩니다.</p>
      </SlotModal>
    </div>

    <p class="note">
      안내창은 <code>#actions</code>를 <b>채우지 않았습니다</b>. 그래서 SlotModal이 준비해 둔 기본
      <b>닫기</b> 버튼 하나만 나옵니다. 구멍마다 기본값을 넣어 두면 부모가 매번 다 채우지 않아도
      됩니다.
    </p>
  </section>
</template>

<style scoped>
.explain,
.note {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.75;
}

.note {
  margin: 14px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--accent);
  border-radius: 0 9px 9px 0;
  background: var(--accent-tint);
  color: var(--ink-soft);
}

.explain code,
.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--surface);
  font-family: var(--font-mono);
  font-size: 0.92em;
}

/* 모달이 화면 전체가 아니라 이 안에서만 덮이게 하는 기준점 */
.stage {
  position: relative;
  min-height: 190px;
  padding: 16px;
  border: 1px dashed var(--line-strong);
  border-radius: 12px;
  background: var(--paper);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.result {
  margin: 12px 0 0;
  color: var(--accent);
  font-size: 13px;
  font-weight: 700;
}

.hint {
  display: grid;
  min-height: 110px;
  margin: 12px 0 0;
  color: var(--faint);
  font-size: 12.5px;
  place-items: center;
  text-align: center;
}

.danger {
  border-color: var(--signal);
  color: var(--signal);
}
</style>
`,Us=`<script setup>
import ConceptHelp from '../../ConceptHelp.vue'
import SlotDefaultChild from './SlotDefaultChild.vue'
import SlotNamedChild from './SlotNamedChild.vue'
import SlotScopedChild from './SlotScopedChild.vue'
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Slot — 껍데기는 두고 알맹이만 갈아 끼우기
      <ConceptHelp
        text="Props가 '값'을 넘기는 것이라면 Slot은 '화면 조각(HTML)'을 통째로 넘기는 것입니다. 액자를 하나 만들어 두고 사진만 바꿔 끼우는 셈이라, 카드·모달·레이아웃처럼 껍데기는 같고 안쪽만 다른 UI에 씁니다."
      />
    </h2>

    <div class="practice-area">
      <h3>1) Default Slot — 이름 없는 구멍 하나</h3>
      <p class="explain">
        같은 <b>SlotDefaultChild</b> 카드에 서로 다른 내용을 넣었습니다. 마지막 카드는 아무것도 안
        넣어서 <b>기본값</b>이 나옵니다.
      </p>

      <SlotDefaultChild>
        <p>단순한 텍스트 문장을 주입합니다.</p>
      </SlotDefaultChild>

      <SlotDefaultChild>
        <h4 class="warn">🔥 경고 상태</h4>
        <button>확인</button>
      </SlotDefaultChild>

      <SlotDefaultChild></SlotDefaultChild>
    </div>

    <div class="practice-area">
      <h3>2) Named Slot — 구멍에 이름을 붙여 여러 개</h3>
      <p class="explain">
        <b>#header</b> 자리와 이름 없는 <b>본문</b> 자리에 각각 다른 내용을 넣습니다.
      </p>

      <SlotNamedChild>
        <template #header>
          <h4>Child 주입 제목</h4>
        </template>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt..."
        </p>
      </SlotNamedChild>
    </div>

    <div class="practice-area">
      <h3>3) Scoped Slot — 자식의 데이터를 부모가 받아 쓴다</h3>
      <p class="explain">
        아래 값은 <b>자식이 가진 데이터</b>인데, 화면에 어떻게 그릴지는 <b>부모가</b> 정합니다.
      </p>

      <SlotScopedChild v-slot="slotBag">
        <div class="display-panel">
          <p>알림 메시지: {{ slotBag.text }}</p>
          <p>접속자 수: {{ slotBag.count }}명</p>
        </div>
      </SlotScopedChild>

      <SlotScopedChild></SlotScopedChild>
    </div>
  </section>
</template>

<style scoped>
h3 {
  margin: 0 0 8px;
  color: var(--ink);
  font-size: 15px;
  font-weight: 700;
}

.explain {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

h4 {
  margin: 0 0 8px;
  color: var(--ink);
  font-size: 14px;
}

.warn {
  color: var(--danger);
}

.display-panel {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 8px;
  background: var(--signal-tint);
}

.display-panel p {
  margin: 0;
  font-size: 13.5px;
}

.display-panel p + p {
  margin-top: 4px;
}
</style>
`,Ws=`<script setup>
import { ref, computed } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const count = ref(0)
const dummy = ref(0) // computed와 무관한 변수

// 1. 일반 함수: 화면이 조금이라도 리렌더링되면 무조건 재실행
const getMethodResult = () => {
  console.log('❌ 일반 함수 실행됨!')
  return count.value * 2
}

// 2. Computed: count가 바뀔 때만 재연산 (dummy가 바뀔 땐 이전 값 재사용)
const doubleCount = computed(() => {
  console.log('✅ Computed 연산 실행됨!')
  return count.value * 2
})
<\/script>

<template>
  <section class="practice-card">
    <h2>
      computed() 캐싱 동작 비교
      <ConceptHelp
        text="computed는 의존하는 값이 바뀔 때만 다시 계산하고 결과를 캐싱합니다. 일반 함수는 화면이 다시 그려질 때마다 무조건 재실행됩니다. dummy 버튼을 눌러 콘솔 출력 차이를 확인해 보세요."
      />
    </h2>

    <p>count: {{ count }} | dummy: {{ dummy }}</p>
    <button @click="count++">count 증가 (의존성 변경)</button>
    <button @click="dummy++">dummy 증가 (무관한 변경)</button>

    <!-- dummy 버튼을 누를 때 콘솔 출력 차이를 확인 -->
    <p>일반 함수 결과: {{ getMethodResult() }}</p>
    <p>Computed 결과: {{ doubleCount }}</p>

    <p class="console-hint">
      브라우저 콘솔(F12)을 열고 <b>dummy 증가</b>를 눌러보세요. 일반 함수만 계속 실행되고 computed는
      조용합니다.
    </p>
  </section>
</template>

<style scoped>
.console-hint {
  margin-top: 14px;
  padding: 11px 13px;
  border-left: 3px solid #4d8fbe;
  border-radius: 4px;
  background: #eef5fa;
  font-size: 13px;
}
</style>
`,Gs=`<script setup>
import { ref, watch } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const user = ref({
  name: '홍길동',
  age: 20,
})

const logDeep = ref('아직 반응 없음')
const logTarget = ref('아직 반응 없음')

// 실패하는 예시 (가장 많이 범하는 오류)
// watch(user, () => { console.log('이 로그는 영원히 안 찍힙니다.') })

// 해결책 1: deep 옵션을 켜서 객체 하위 속성 전체 감시하기
watch(
  user,
  (newVal) => {
    logDeep.value = \`[deep 감지] 누군가 변경됨! 현재 이름: \${newVal.name}, 나이: \${newVal.age}\`
  },
  { deep: true },
)

// 해결책 2: 화살표 함수로 특정 속성(age)만 콕 집어 감시하기 (★이전 값 추적 가능!)
watch(
  () => user.value.age,
  (newAge, oldAge) => {
    logTarget.value = \`[타겟 감지] 나이가 \${oldAge}세 ➡️ \${newAge}세로 변경됨!\`
  },
)
<\/script>

<template>
  <section class="practice-card">
    <h2>
      ref 객체 감시 — Deep Watch
      <ConceptHelp
        text="ref에 객체를 담고 watch(user, ...)만 쓰면 속성 변경을 감지하지 못합니다. 객체 자체(참조)가 바뀐 게 아니기 때문입니다. deep: true로 내부 전체를 감시하거나, 화살표 함수로 특정 속성만 콕 집어 감시해야 합니다."
      />
    </h2>

    <div class="practice-area">
      <h3>👨‍💻 회원 데이터 조작 panel</h3>
      <p>이름: {{ user.name }} / 나이: {{ user.age }}세</p>
      <button @click="user.name = '이순신'">이름만 변경</button>
      <button @click="user.age++">나이만 변경 (age++)</button>
    </div>

    <div class="monitor">
      <p class="monitor-title">👁️‍🗨️ 1) deep: true 모니터 (전체 감시)</p>
      <p>{{ logDeep }}</p>
    </div>

    <div class="monitor target">
      <p class="monitor-title">🎯 2) 화살표 함수 모니터 (나이만 타겟 감시)</p>
      <p>{{ logTarget }}</p>
    </div>
  </section>
</template>

<style scoped>
.monitor {
  margin-top: 14px;
  padding: 14px 16px;
  border: 1px solid #0984e3;
  border-radius: 10px;
  background: #e3fafc;
  font-weight: bold;
}

.monitor.target {
  border-color: #6c5ce7;
  background: #efe5ff;
}

.monitor-title {
  margin-top: 0;
}

.monitor p {
  margin-bottom: 0;
}
</style>
`,Ks=`<script setup>
import { reactive, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/* ── A. ref 여러 개로 관리 ─────────────────────────────────── */
const name = ref('')
const email = ref('')
const age = ref('')
const agree = ref(false)

// 필드가 늘어날수록 초기화 코드도 같이 늘어난다
const resetRefs = () => {
  name.value = ''
  email.value = ''
  age.value = ''
  agree.value = false
}

// 서버로 보낼 모양을 만들려면 매번 손으로 조립해야 한다
const refPayload = () =>
  JSON.stringify(
    { name: name.value, email: email.value, age: age.value, agree: agree.value },
    null,
    1,
  )

/* ── B. reactive 객체 하나로 관리 ──────────────────────────── */
const INITIAL_FORM = { name: '', email: '', age: '', agree: false }

const form = reactive({ ...INITIAL_FORM })

// 필드가 몇 개든 초기화는 한 줄이다
const resetForm = () => {
  Object.assign(form, INITIAL_FORM)
}

const formPayload = () => JSON.stringify(form, null, 1)

/* 공통 — 두 방식의 결과가 같은지 보여주기 위한 표시용 */
const submitted = ref('')

const submitRefs = () => {
  submitted.value = \`[ref 방식] \${refPayload()}\`
}

const submitForm = () => {
  submitted.value = \`[reactive 방식] \${formPayload()}\`
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      폼 상태 관리 — ref 여러 개 vs reactive 하나
      <ConceptHelp
        text="reactive의 장점은 '관련 있는 값을 한 덩어리로 다룰 수 있다'는 점입니다. 초기화·전송·전달을 객체 단위로 처리할 수 있어 필드가 많아질수록 코드가 짧아집니다. 대신 통째로 재할당하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다."
      />
    </h2>

    <div class="compare">
      <!-- A -->
      <div class="side">
        <h3>A. ref 4개</h3>
        <label>이름 <input v-model="name" type="text" /></label>
        <label>이메일 <input v-model="email" type="text" /></label>
        <label>나이 <input v-model.number="age" type="number" /></label>
        <label class="check"><input v-model="agree" type="checkbox" /> 약관 동의</label>

        <div class="buttons">
          <button @click="submitRefs">전송</button>
          <button @click="resetRefs">초기화</button>
        </div>

        <pre class="code">name.value = ''
email.value = ''
age.value = ''
agree.value = false</pre>
        <p class="note">필드가 늘면 이 줄도 같이 늘어난다</p>
      </div>

      <!-- B -->
      <div class="side highlight">
        <h3>B. reactive 1개</h3>
        <label>이름 <input v-model="form.name" type="text" /></label>
        <label>이메일 <input v-model="form.email" type="text" /></label>
        <label>나이 <input v-model.number="form.age" type="number" /></label>
        <label class="check"><input v-model="form.agree" type="checkbox" /> 약관 동의</label>

        <div class="buttons">
          <button @click="submitForm">전송</button>
          <button @click="resetForm">초기화</button>
        </div>

        <pre class="code">Object.assign(form, INITIAL_FORM)</pre>
        <p class="note">필드가 몇 개든 한 줄로 끝난다</p>
      </div>
    </div>

    <!-- 현재 상태를 그대로 보여준다 -->
    <div class="live">
      <div>
        <p class="live-label">A · ref 4개를 손으로 조립</p>
        <pre>{{ refPayload() }}</pre>
      </div>
      <div>
        <p class="live-label">B · reactive 객체를 그대로 사용</p>
        <pre>{{ formPayload() }}</pre>
      </div>
    </div>

    <p v-if="submitted" class="submitted">{{ submitted }}</p>
  </section>
</template>

<style scoped>
.compare {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin-bottom: 16px;
}

.side {
  padding: 16px;
  border: 1px solid #e0eaf1;
  border-radius: 10px;
  background: #fbfdfe;
}

.side.highlight {
  border-color: #9fd6bd;
  background: #f5fcf9;
}

.side h3 {
  margin: 0 0 12px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #5f7a8c;
  font-size: 13px;
}

label input[type='text'],
label input[type='number'] {
  display: block;
  width: 100%;
  margin-top: 4px;
}

label.check {
  display: flex;
  align-items: center;
  gap: 7px;
}

.buttons {
  margin: 12px 0 10px;
}

.code {
  margin: 0;
  overflow-x: auto;
  padding: 10px 12px;
  border-radius: 7px;
  background: #eef3f7;
  color: #40586b;
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
}

.note {
  margin: 7px 0 0;
  color: #90a5b4;
  font-size: 12px;
}

.live {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.live-label {
  margin: 0 0 5px;
  color: #7b8e9c;
  font-size: 11.5px;
  font-weight: 800;
}

.live pre {
  margin: 0;
  overflow-x: auto;
  padding: 10px 12px;
  border: 1px solid #e4ecf2;
  border-radius: 8px;
  background: white;
  color: #37505f;
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
}

.submitted {
  margin: 14px 0 0;
  padding: 11px 13px;
  border-left: 3px solid #42b883;
  border-radius: 0 7px 7px 0;
  background: #eefaf4;
  color: #24694d;
  font-family: 'SF Mono', Menlo, Consolas, monospace;
  font-size: 12px;
  white-space: pre-wrap;
}
</style>
`,qs=`<script setup>
import { ref, watch } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const city = ref('서울')
const dateType = ref('오늘')
const apiStatus = ref('대기 중...')

// 🟢 두 개의 ref 변수를 배열[] 형태로 묶어 동시에 감시합니다.
watch([city, dateType], ([newCity, newDate], [oldCity, oldDate]) => {
  // 새 값과 옛 값도 상단에 적어준 [city, dateType] 순서대로 매핑되어 들어옵니다.
  apiStatus.value = \`[변경 감지] \${oldCity}(\${oldDate}) ➡️ \${newCity}(\${newDate})\`

  // 💡 실무 활용: 두 옵션 중 하나만 바뀌어도 통합 API 요청을 보냅니다.
  console.log(\`🤖 [통합 API 호출] \${newCity}의 \${newDate} 날씨를 불러옵니다...\`)
})
<\/script>

<template>
  <section class="practice-card">
    <h2>
      여러 개의 변수 동시 감시 (Multi-Source Watch)
      <ConceptHelp
        text="watch의 첫 번째 인자에 배열을 넘기면 여러 값을 한 번에 감시합니다. 콜백이 받는 새 값·이전 값도 배열이며, 감시 대상을 적은 순서 그대로 매핑됩니다. 둘 중 하나만 바뀌어도 콜백이 한 번 실행됩니다."
      />
    </h2>

    <div class="practice-area">
      <h3>날씨 조건 설정</h3>

      <label>도시: </label>
      <select v-model="city">
        <option value="서울">서울</option>
        <option value="수원">수원</option>
        <option value="부산">부산</option>
      </select>

      <p class="field-label">날짜:</p>
      <label><input v-model="dateType" type="radio" value="오늘" /> 오늘</label>
      <label><input v-model="dateType" type="radio" value="내일" /> 내일</label>
      <label><input v-model="dateType" type="radio" value="주간예보" /> 주간예보</label>
    </div>

    <div class="monitor">
      <h3>통합 모니터링 로그</h3>
      <p>현재 상태: {{ apiStatus }}</p>
    </div>
  </section>
</template>

<style scoped>
.field-label {
  margin: 16px 0 6px;
  font-weight: 600;
}

label {
  margin-right: 14px;
}

.monitor {
  margin-top: 18px;
  padding: 16px;
  border: 1px solid #00b894;
  border-radius: 10px;
  background: #e8f5e9;
}

.monitor h3 {
  margin-top: 0;
}
</style>
`,Js=`<script setup>
import { reactive, ref, watch } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// reactive로 선언한 빈 배열 (날씨 앱의 즐겨찾기 도시 리스트 모형)
const cityList = reactive(['서울', '수원'])

const logAuto = ref('대기 중...')
const logCopy = ref('대기 중...')

// 🟢 1) 변수명 그대로 넣기 (배열 추가/삭제 자동 추적)
watch(cityList, (newArr, oldArr) => {
  // newArr.length와 oldArr.length가 똑같이 늘어난 상태로 출력됩니다.
  logAuto.value = \`[자동 감시] 배열 변동 발생! 옛날길이인척하는:\${oldArr.length} / 현재길이:\${newArr.length}\`
})

// 🟢 2) 화살표 함수로 스냅샷(복사본)을 만들어 감시 (과거 배열 완벽 보존!)
watch(
  () => [...cityList],
  (newArr, oldArr) => {
    // 🔥 구조 분해 복사본을 감시하므로 과거 배열의 원본 데이터와 길이가 그대로 살아있습니다.
    logCopy.value = \`[스냅샷 감시] 진짜 과거 길이:\${oldArr.length} (데이터: \${oldArr}) ➡️ 바뀐 길이:\${newArr.length}\`
  },
)
<\/script>

<template>
  <section class="practice-card">
    <h2>
      reactive() 배열 감시 — 스냅샷 기법
      <ConceptHelp
        text="배열도 객체와 같은 함정이 있습니다. 변수명을 그대로 넘기면 이전 배열과 현재 배열이 같은 것을 가리켜 비교가 불가능합니다. 스프레드로 복사본을 만들어([...cityList]) 감시하면 과거 상태가 그대로 보존됩니다."
      />
    </h2>

    <div class="practice-area">
      <h3>즐겨찾기 도시 목록 (reactive 배열)</h3>
      <p>
        현재 등록된 도시: <strong>{{ cityList }}</strong>
      </p>
      <button @click="cityList.push('부산')">부산 추가 (push)</button>
      <button @click="cityList.pop()">최근 도시 삭제 (pop)</button>
    </div>

    <div class="monitor auto">
      <p class="monitor-title">👁️‍🗨️ 1) cityList 변수명 쌩으로 감시</p>
      <p>{{ logAuto }}</p>
      <small>※ 주의: 이전 배열과 현재 배열의 내용물·길이가 똑같이 동기화되어 버립니다.</small>
    </div>

    <div class="monitor target">
      <p class="monitor-title">🎯 2) () =&gt; [...cityList] 복사본 감시</p>
      <p>{{ logCopy }}</p>
      <small>※ 성공: 과거 배열에 들어있던 내용물이 지워지지 않고 정상 대조됩니다.</small>
    </div>
  </section>
</template>

<style scoped>
.monitor {
  margin-top: 14px;
  padding: 14px 16px;
  border: 1px solid;
  border-radius: 10px;
  font-weight: bold;
}

.monitor p {
  margin-bottom: 0;
  color: inherit;
}

.monitor-title {
  margin-top: 0;
}

.monitor small {
  display: block;
  margin-top: 8px;
  font-weight: normal;
  opacity: 0.85;
}

.auto {
  border-color: #ff7675;
  background: #fff5f5;
  color: #c0392b;
}

.target {
  border-color: #00b894;
  background: #e8f5e9;
  color: #27ae60;
}
</style>
`,Ys=`<script setup>
import { reactive } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// 1. 객체형 reactive 상태
const userReactive = reactive({
  name: '이순신',
  age: 30,
})
const celebrateReactive = () => {
  userReactive.age++
}

// 2. 배열형 reactive 상태
const items = reactive(['사과', '바나나'])
// 배열 요소 추가
const addItem = () => {
  items.push(\`과일 \${items.length + 1}\`)
}
// 배열 요소 삭제
const removeItem = (index) => {
  items.splice(index, 1)
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      반응형 상태 reactive() 특징 및 주의점
      <ConceptHelp
        text="reactive()는 객체·배열 전용이며 .value 없이 바로 접근합니다. 다만 객체를 통째로 재할당(userReactive = { ... })하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다. 그래서 실무는 ref()로 통일하는 추세입니다."
      />
    </h2>

    <div class="practice-area">
      <h3>1) 객체(Object) reactive</h3>
      <p>이름: {{ userReactive.name }} / 나이: {{ userReactive.age }}세</p>
      <button @click="celebrateReactive">reactive 나이 한 살 추가</button>
    </div>

    <div class="practice-area">
      <h3>2) 배열(Array) reactive</h3>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
          <button style="margin-left: 8px; padding: 2px 8px" @click="removeItem(index)">
            삭제
          </button>
        </li>
      </ul>
      <button @click="addItem">과일 항목 추가</button>
    </div>
  </section>
</template>

<style scoped>
ul {
  display: grid;
  gap: 6px;
  margin: 0 0 12px;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  color: #4c6459;
  font-size: 14px;
}
</style>
`,Xs=`<script setup>
import { reactive, ref, watch } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// reactive로 선언한 묶음 상품 데이터
const state = reactive({
  productName: '노트북',
  price: 1000,
})

const logAutoDeep = ref('대기 중...')
const logTarget = ref('대기 중...')

// 🟢 1) 변수명 그대로 감시 (자동 deep: true 작동)
watch(state, (newVal, oldVal) => {
  // newVal.price와 oldVal.price가 똑같이 2000으로 나옵니다!
  logAutoDeep.value = \`[자동 deep] 가격 변동! 이전가격인척하는:\${oldVal.price}원 ➡️ 현재가격:\${newVal.price}원\`
})

// 🟢 2) 화살표 함수로 특정 속성만 감시 (이전 값 추적 가능!)
watch(
  () => state.price,
  (newPrice, oldPrice) => {
    // 🔥 특정 알맹이 값만 추출했으므로 진짜 과거 가격(1000)이 정상 보존됩니다.
    logTarget.value = \`[타겟 조준] 가격이 진짜 올랐음! 옛날값:\${oldPrice}원 ➡️ 바뀐값:\${newPrice}원\`
  },
)
<\/script>

<template>
  <section class="practice-card">
    <h2>
      reactive() 데이터 watch 감시 규칙
      <ConceptHelp
        text="reactive 객체는 변수명을 그대로 넘기면 deep이 자동으로 켜져 내부 속성 변경까지 잡아냅니다. 다만 이전 값과 현재 값이 같은 객체를 가리켜서 oldVal이 쓸모없어집니다. 이전 값이 필요하면 화살표 함수로 특정 속성만 콕 집어야 합니다."
      />
    </h2>

    <div class="practice-area">
      <h3>🛒 상품 정보 관리 (reactive)</h3>
      <p>상품명: {{ state.productName }} / 가격: {{ state.price }}원</p>
      <button @click="state.price += 500">가격 500원 인상</button>
    </div>

    <div class="monitor auto">
      <p class="monitor-title">👁️‍🗨️ 1) state 변수 통째로 감시 (deep 자동화)</p>
      <p>{{ logAutoDeep }}</p>
      <small>※ 주의: 이전 값과 현재 값이 똑같이 찍힌다.</small>
    </div>

    <div class="monitor target">
      <p class="monitor-title">🎯 2) () =&gt; state.price 콕 집어 감시 (과거 추적)</p>
      <p>{{ logTarget }}</p>
      <small>※ 성공: 과거의 원본 가격이 칼같이 보존된다.</small>
    </div>
  </section>
</template>

<style scoped>
.monitor {
  margin-top: 14px;
  padding: 14px 16px;
  border: 1px solid;
  border-radius: 10px;
  font-weight: bold;
}

.monitor p {
  margin-bottom: 0;
}

.monitor-title {
  margin-top: 0;
}

.monitor small {
  display: block;
  margin-top: 8px;
  font-weight: normal;
  opacity: 0.85;
}

.auto {
  border-color: #ff7675;
  background: #fff5f5;
  color: #c0392b;
}

.target {
  border-color: #00b894;
  background: #e8f5e9;
  color: #27ae60;
}

/* 실습 공통 스타일보다 우선하도록 색을 유지 */
.monitor :deep(p),
.monitor p {
  color: inherit;
}
</style>
`,Zs=`<script setup>
import { ref, watch } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// 케이스 1: 문자열 배열
const teamMembers = ref(['홍길동', '이순신', '강감찬'])
const logMember = ref('대기 중...')

// 케이스 2: 객체 배열
const cityWeather = ref([
  { name: '서울', temp: 25 },
  { name: '수원', temp: 22 },
])
const logWeather = ref('대기 중...')

// 🟢 1) 기본형 배열의 0번째 요소(글자) 감시하기
watch(
  () => teamMembers.value[0],
  (newNames, oldNames) => {
    logMember.value = \`[방출/영입] 0번 선수 교체: \${oldNames} ➡️ \${newNames}\`
  },
)

// 🟢 2) 객체형 배열의 0번째 요소(객체 내부) 감시하기
// ⚠️ 가리키는 대상이 객체이므로 { deep: true }가 없으면 내부 temp가 변해도 묵묵부답입니다!
watch(
  () => cityWeather.value[0],
  (newSeoul) => {
    logWeather.value = \`[날씨 변동] 서울의 온도가 현재 \${newSeoul.temp}°C 로 변경되었습니다.\`
  },
  { deep: true },
)
<\/script>

<template>
  <section class="practice-card">
    <h2>
      ref 배열의 특정 인덱스 감시하기
      <ConceptHelp
        text="배열의 특정 요소만 감시하려면 화살표 함수로 콕 집어야 합니다. 다만 그 요소가 문자열이면 그대로 동작하지만, 객체라면 { deep: true }가 없으면 내부 속성 변경을 감지하지 못합니다. 가리키는 대상의 타입에 따라 규칙이 달라집니다."
      />
    </h2>

    <div class="practice-area">
      <h3>🏃‍♂️ 1) 문자열 배열: 현재 0번 멤버 [ {{ teamMembers[0] }} ]</h3>
      <button @click="teamMembers[0] = '손흥민'">0번 멤버를 손흥민으로 교체</button>
      <p class="log text">로그: {{ logMember }}</p>
    </div>

    <div class="practice-area">
      <h3>⛅ 2) 객체형 배열: 현재 {{ cityWeather[0].name }} 기온 [ {{ cityWeather[0].temp }}°C ]</h3>
      <button @click="cityWeather[0].temp++">서울 기온 1도 올리기 (temp++)</button>
      <p class="log object">로그: {{ logWeather }}</p>
    </div>
  </section>
</template>

<style scoped>
.log {
  margin-top: 10px;
  font-weight: bold;
}

.text {
  color: #0984e3;
}

.object {
  color: #6c5ce7;
}
</style>
`,Qs=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const count = ref(0)
const name = ref('홍길동')
const isActive = ref(true)
const items = ref(['사과', '배'])
const user = ref({
  name: '이순신',
  age: 30,
})

const increaseRef = () => {
  count.value++
}
const changeUserName = () => {
  user.value.name = '장보고'
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      반응형 상태 ref() 기초
      <ConceptHelp
        text="ref()는 값을 반응형 상자에 담습니다. script에서는 .value로 상자를 열어야 하고, template에서는 자동 언래핑되어 .value 없이 씁니다. 객체나 배열을 담아도 내부 속성 변경까지 감지됩니다."
      />
    </h2>

    <p>
      Ref 카운트: <strong>{{ count }}</strong>
    </p>
    <p>이름: <input v-model="name" />{{ name }}</p>
    <p>활성 상태: {{ isActive ? '활성' : '비활성' }}</p>
    <p>과일 목록: {{ items.join(', ') }}</p>
    <p>사용자 정보: 이름 - {{ user.name }}, 나이 - {{ user.age }}</p>

    <button @click="increaseRef">Ref 변수 증가</button>
    <button @click="isActive = !isActive">토글</button>
    <button @click="items.push('귤')">과일 추가</button>
    <button @click="changeUserName">사용자 이름 변경</button>
  </section>
</template>
`,$s=`<script setup>
import { computed, nextTick, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const todos = ref([
  { id: 1, title: '장보기', done: false },
  { id: 2, title: 'Vue 복습하기', done: true },
])
const newTitle = ref('')
let nextId = 3

/* ── 1) 추가 ─────────────────────────────────────────────── */
const addTodo = () => {
  const title = newTitle.value.trim()
  // 버튼을 :disabled로 잠가도 Enter로는 들어올 수 있으니 검사는 남겨둔다
  if (!title) return

  todos.value.push({ id: nextId, title, done: false })
  nextId++
  newTitle.value = ''
}

const toggleTodo = (todo) => {
  todo.done = !todo.done
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

/* ── 2) 제목 수정 ─────────────────────────────────────────── */
// 지금 수정 중인 항목의 id. null이면 아무것도 수정 중이 아니다.
const editingId = ref(null)
// 수정 중인 값. 원본과 분리해야 Esc로 되돌릴 수 있다.
const editingTitle = ref('')
// 입력창 DOM을 담아둘 자리 (포커스를 주기 위해)
const editInput = ref(null)

const startEdit = async (todo) => {
  editingId.value = todo.id
  editingTitle.value = todo.title

  // 이 시점에는 입력창이 아직 화면에 없다. 다 그려질 때까지 기다린 뒤 포커스.
  await nextTick()
  editInput.value?.focus()
}

const confirmEdit = (todo) => {
  // Enter로 확정하면 입력창이 사라지며 blur가 한 번 더 들어올 수 있다. 중복 실행 차단.
  if (editingId.value === null) return

  const title = editingTitle.value.trim()
  if (title) todo.title = title // 비어 있으면 원래 제목을 유지
  editingId.value = null
}

const cancelEdit = () => {
  editingId.value = null // 고치던 값은 버린다
}

/* ── 3) 필터와 집계 (computed) ────────────────────────────── */
const showOnlyRemaining = ref(false)

// 화면에 실제로 그릴 목록
const visibleTodos = computed(() =>
  showOnlyRemaining.value ? todos.value.filter((todo) => !todo.done) : todos.value,
)

const remainingCount = computed(() => todos.value.filter((todo) => !todo.done).length)

// 이미 계산된 computed를 재사용하면 filter를 한 번 덜 돈다
const doneCount = computed(() => todos.value.length - remainingCount.value)
<\/script>

<template>
  <section class="practice-card">
    <h2>
      할 일 목록 응용 2 — 잠금 · 수정 · 필터
      <ConceptHelp
        text="세 가지를 얹었습니다. ① :disabled로 빈 입력일 때 버튼 잠그기 ② 제목을 클릭해 인라인 수정(수정 중 상태를 ref로 관리) ③ computed로 필터와 집계를 옮기기. computed는 CC06에서 정식으로 배우지만 여기서 미리 써 봅니다."
      />
    </h2>

    <!-- 입력 -->
    <div class="todo-input">
      <input
        v-model="newTitle"
        type="text"
        placeholder="할 일을 입력하고 Enter"
        @keyup.enter="addTodo"
      />
      <button :disabled="!newTitle.trim()" @click="addTodo">추가</button>
    </div>

    <!-- 필터 -->
    <label class="filter">
      <input v-model="showOnlyRemaining" type="checkbox" />
      남은 일만 보기
    </label>

    <!-- 목록 -->
    <ul v-if="visibleTodos.length" class="todo-list">
      <li v-for="todo in visibleTodos" :key="todo.id" :class="{ done: todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />

        <!-- 수정 중일 때: 입력창 -->
        <input
          v-if="editingId === todo.id"
          :ref="(el) => el && (editInput = el)"
          v-model="editingTitle"
          class="edit-input"
          @keyup.enter="confirmEdit(todo)"
          @keyup.esc="cancelEdit"
          @blur="confirmEdit(todo)"
        />

        <!-- 평소: 글자. 클릭하면 수정 모드로 -->
        <span v-else class="title" title="클릭하면 제목을 고칠 수 있습니다" @click="startEdit(todo)">
          {{ todo.title }}
        </span>

        <button @click="removeTodo(todo.id)">삭제</button>
      </li>
    </ul>

    <!-- 빈 화면은 두 가지 의미를 구분해야 한다 -->
    <p v-else-if="todos.length" class="empty">
      🎉 남은 일이 없습니다. 필터를 끄면 완료한 항목을 볼 수 있어요.
    </p>
    <p v-else class="empty">아직 할 일이 없습니다. 위에서 하나 추가해 보세요.</p>

    <!-- 집계 -->
    <div v-if="todos.length" class="todo-foot">
      <span>
        전체 <b>{{ todos.length }}</b> · 남은 일 <b>{{ remainingCount }}</b> · 완료
        <b>{{ doneCount }}</b>
      </span>
      <span class="hint">제목을 클릭 → 수정 · Enter 확정 · Esc 취소</span>
    </div>
  </section>
</template>

<style scoped>
.todo-input {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.todo-input input {
  flex: 1;
  max-width: 320px;
}

.filter {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 14px;
  color: #5f7a8c;
  font-size: 13px;
  cursor: pointer;
}

.todo-list {
  display: grid;
  gap: 7px;
  margin: 0 0 14px;
  padding: 0;
  list-style: none;
}

.todo-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border: 1px solid #e0eaf1;
  border-radius: 8px;
  background: #fbfdfe;
}

.todo-list .title {
  margin-right: auto;
  color: #37505f;
  font-size: 14px;
  cursor: pointer;
}

.todo-list .title:hover {
  text-decoration: underline dotted;
}

.edit-input {
  margin-right: auto;
  padding: 5px 8px;
  border: 1px solid #8fb9d8;
  border-radius: 6px;
  font-size: 14px;
}

.todo-list li.done {
  background: #f4f7f9;
}

.todo-list li.done .title {
  color: #9fb0bc;
  text-decoration: line-through;
}

.empty {
  padding: 18px;
  border: 1px dashed #dbe6ee;
  border-radius: 8px;
  color: #9ab0bf;
  font-size: 13.5px;
  text-align: center;
}

.todo-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #eef3f6;
  color: #6b8497;
  font-size: 13px;
}

.todo-foot b {
  color: #1f5b81;
}

.hint {
  color: #9ab0bf;
  font-size: 12px;
}
</style>
`,ec=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

// 할 일 목록. 빈 배열로 시작하며, 항목은 { id, title, done } 모양의 객체다.
const todos = ref([])

// 입력창과 양방향으로 묶일 값
const newTitle = ref('')

// 화면에 표시하지 않는 값이라 ref로 감쌀 필요가 없다.
// (ref로 감싸면 .value를 계속 붙여야 해서 오히려 번거롭다)
let nextId = 1

// 추가 — 빈 문자열이나 공백만 입력한 경우는 막는다
const addTodo = () => {
  const title = newTitle.value.trim()
  if (!title) return

  todos.value.push({ id: nextId, title, done: false })
  nextId++
  newTitle.value = '' // 입력창 비우기
}

// 완료 토글 — 배열 안 객체의 속성을 직접 바꿔도 ref가 감지한다
const toggleTodo = (todo) => {
  todo.done = !todo.done
}

// 삭제 — filter로 "그 항목만 빠진 새 배열"을 만들어 통째로 갈아 끼운다
const removeTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

// 완료된 항목 일괄 삭제
const clearDone = () => {
  todos.value = todos.value.filter((todo) => !todo.done)
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      할 일 목록 — ref 배열 응용
      <ConceptHelp
        text="ref([])에 객체를 담아 목록을 관리하는 연습입니다. 추가는 push, 삭제는 filter로 새 배열을 만들어 교체합니다. 배열 안 객체의 속성(done)을 직접 바꿔도 ref가 변화를 감지해 화면이 갱신됩니다."
      />
    </h2>

    <!-- 입력 -->
    <div class="todo-input">
      <input
        v-model="newTitle"
        type="text"
        placeholder="할 일을 입력하고 Enter"
        @keyup.enter="addTodo"
      />
      <button @click="addTodo">추가</button>
    </div>

    <!-- 목록 -->
    <ul v-if="todos.length" class="todo-list">
      <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)" />
        <span class="title">{{ todo.title }}</span>
        <button class="remove" @click="removeTodo(todo.id)">삭제</button>
      </li>
    </ul>

    <!-- 목록이 비었을 때 -->
    <p v-else class="empty">아직 할 일이 없습니다. 위에서 하나 추가해 보세요.</p>

    <!-- 요약 — computed 없이 템플릿 표현식만으로 계산 -->
    <div v-if="todos.length" class="todo-foot">
      <span>
        전체 <b>{{ todos.length }}</b> ·
        남은 일 <b>{{ todos.filter((todo) => !todo.done).length }}</b> ·
        완료 <b>{{ todos.filter((todo) => todo.done).length }}</b>
      </span>
      <button @click="clearDone">완료한 항목 지우기</button>
    </div>
  </section>
</template>

<style scoped>
.todo-input {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.todo-input input {
  flex: 1;
  max-width: 320px;
}

.todo-list {
  display: grid;
  gap: 7px;
  margin: 0 0 14px;
  padding: 0;
  list-style: none;
}

.todo-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border: 1px solid #e0eaf1;
  border-radius: 8px;
  background: #fbfdfe;
}

.todo-list .title {
  margin-right: auto;
  color: #37505f;
  font-size: 14px;
}

/* 완료된 항목은 흐리게 + 취소선 */
.todo-list li.done {
  background: #f4f7f9;
}

.todo-list li.done .title {
  color: #9fb0bc;
  text-decoration: line-through;
}

.empty {
  padding: 18px;
  border: 1px dashed #dbe6ee;
  border-radius: 8px;
  color: #9ab0bf;
  font-size: 13.5px;
  text-align: center;
}

.todo-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #eef3f6;
  color: #6b8497;
  font-size: 13px;
}

.todo-foot b {
  color: #1f5b81;
}
</style>
`,tc=`<script setup>
import { ref, watchEffect } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const username = ref('홍길동')
const age = ref(20)
const logMessage = ref('대기 중...')

// watchEffect 가동: 감시 대상을 지정하는 파라미터가 없습니다!
watchEffect(() => {
  // Vue가 이 내부 코드를 읽고 'username'과 'age'를 자동으로 감시 리스트에 등록합니다.
  logMessage.value = \`[자동 감지] 이름: \${username.value} / 나이: \${age.value}세\`

  // 화면이 처음 켜질 때 1등으로 즉시 실행되는 증거를 콘솔에서 확인합니다.
  console.log('🤖 watchEffect가 내부 변수 변경을 감지하여 실행되었습니다.')
})
<\/script>

<template>
  <section class="practice-card">
    <h2>
      자동 감시자 watchEffect()
      <ConceptHelp
        text="watchEffect는 감시 대상을 적지 않습니다. 함수 안에서 읽은 반응형 값이 자동으로 의존성이 됩니다. 그리고 등록되는 즉시 한 번 실행되는 점이 watch와 가장 큰 차이입니다. 대신 이전 값은 받을 수 없습니다."
      />
    </h2>

    <div class="practice-area">
      <p>이름: {{ username }} / 나이: {{ age }}세</p>
      <button @click="username = '이순신'">이름을 '이순신'으로 변경</button>
      <button @click="age++">나이 한 살 추가 (age++)</button>
    </div>

    <div class="monitor">
      <h3>👁️‍🗨️ watchEffect 자동 모니터링 시스템</h3>
      <p>{{ logMessage }}</p>
      <small>
        ※ 새로고침하자마자 버튼을 안 눌러도 로그가 이미 찍혀있는 특징을 주목하세요!
      </small>
    </div>
  </section>
</template>

<style scoped>
.monitor {
  margin-top: 18px;
  padding: 16px;
  border: 1px solid #e74c3c;
  border-radius: 10px;
  background: #fff5f5;
  font-weight: bold;
}

.monitor h3 {
  margin-top: 0;
}

.monitor small {
  display: block;
  margin-top: 8px;
  color: gray;
  font-weight: normal;
}
</style>
`,nc=`<script setup>
import { ref, watch } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

const currentCity = ref('서울')
const logMessage = ref('아직 감시 시스템이 작동하지 않았습니다.')

// currentCity 변수를 유심히 감시하는 watch 시스템 가동
watch(currentCity, (newValue, oldValue) => {
  // 값이 바뀌는 순간, 바뀐 알맹이(값) 두 개가 자동으로 주입됩니다.
  logMessage.value = \`📍 감시자 발동! [\${oldValue}]에서 [\${newValue}]로 변경됨.\`
  // 실무 활용처 시뮬레이션
  console.log(\`🤖 [서버 요청 완료] 기상청 서버에서 \${newValue}의 날씨 API를 다시 조회합니다...\`)
})
<\/script>

<template>
  <section class="practice-card">
    <h2>
      감시자 watch()의 원리와 실무 활용
      <ConceptHelp
        text="watch()는 값이 바뀌는 순간 무언가를 실행하는 감시자입니다. 콜백은 (새 값, 이전 값)을 받습니다. 화면에 보여줄 값은 computed로, API 호출·로그 같은 부수 효과는 watch로 처리합니다."
      />
    </h2>

    <div class="practice-area">
      <h3>🏙️ 지역 선택 제어판</h3>
      <p>현재 선택된 도시: {{ currentCity }}</p>
      <button @click="currentCity = '서울'">서울 선택</button>
      <button @click="currentCity = '수원'">수원 선택</button>
      <button @click="currentCity = '부산'">부산 선택</button>
    </div>

    <div class="monitor">
      <h3>👁️‍🗨️ 파수꾼(watch) 모니터링 시스템</h3>
      <p>{{ logMessage }}</p>
      <small>(버튼을 누른 후 브라우저 콘솔창 F12를 확인해 보세요)</small>
    </div>
  </section>
</template>

<style scoped>
.monitor {
  margin-top: 18px;
  padding: 16px;
  border: 1px solid #0984e3;
  border-radius: 10px;
  background: #e3fafc;
}

.monitor h3 {
  margin-top: 0;
}

.monitor small {
  color: gray;
  font-size: 12px;
}
</style>
`,rc=`<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import ConceptHelp from '../../ConceptHelp.vue'
import StoreCounterPanel from './StoreCounterPanel.vue'
import { useCounterStore } from '../../../stores/counter'

/**
 * Code Challenge 10 — Pinia Store (교안 190쪽)
 *
 * 아래 두 패널은 서로의 존재를 모르는 형제 컴포넌트다.
 * props 도 emits 도 없이 숫자가 같이 움직이는 것을 눈으로 확인하는 것이 핵심이다.
 *
 * 아래쪽에는 가장 흔한 실수(storeToRefs 누락)를 나란히 놓았다.
 * 두 숫자가 언제 갈라지는지 직접 눌러 보면 왜 필요한지가 분명해진다.
 */
const counter = useCounterStore()

/** 올바른 방법 — storeToRefs 로 감싸면 ref 로 꺼내져 반응성이 유지된다 */
const { count } = storeToRefs(counter)

/**
 * 잘못된 방법 — 그냥 구조 분해하면 "그 순간의 숫자"만 복사된다.
 * 이 화면에 들어온 시점의 값에서 멈춰 있고, 이후 increment() 를 눌러도 꿈쩍하지 않는다.
 */
const { count: brokenCount } = counter

/** 실습을 처음부터 다시 보기 위한 초기화 */
const reset = () => {
  counter.count = 0
}

const showBroken = ref(false)
<\/script>

<template>
  <section class="practice-card">
    <h2>
      한 사물함을 두 컴포넌트가 함께 본다
      <ConceptHelp
        text="아래 두 패널은 부모가 값을 내려 주지 않습니다. 각자 useCounterStore()를 불러 같은 사물함을 열 뿐입니다. 한쪽에서 increment()를 누르면 다른 쪽 숫자도 같이 바뀝니다 — 이것이 Props Drilling 없이 상태를 나누는 방법입니다."
      />
    </h2>

    <div class="area">
      <div class="panels">
        <StoreCounterPanel label="COMPONENT A" />
        <StoreCounterPanel label="COMPONENT B" />
      </div>
      <p class="note">
        두 패널 사이에는 <b>props 도 emits 도 없습니다</b>. 각자
        <code>useCounterStore()</code> 로 같은 Store 를 열었을 뿐인데 숫자가 함께 움직입니다.
      </p>
    </div>

    <!-- 가장 흔한 실수 -->
    <div class="area">
      <h3>
        storeToRefs 를 빼면 어떻게 되나
        <button type="button" class="peek" @click="showBroken = !showBroken">
          {{ showBroken ? '닫기' : '직접 확인' }}
        </button>
      </h3>

      <div v-if="showBroken" class="compare">
        <div class="cell good">
          <p class="cell-head">
            <span class="tag ok">정상</span>
            <code>const { count } = storeToRefs(store)</code>
          </p>
          <p class="cell-value">{{ count }}</p>
        </div>
        <div class="cell bad">
          <p class="cell-head">
            <span class="tag no">끊김</span>
            <code>const { count } = store</code>
          </p>
          <p class="cell-value">{{ brokenCount }}</p>
        </div>
      </div>

      <div v-if="showBroken" class="controls">
        <button type="button" @click="counter.increment()">increment()</button>
        <button type="button" class="ghost" @click="reset()">0 으로 되돌리기</button>
      </div>

      <p v-if="showBroken" class="note warn">
        오른쪽은 <b>값이 복사된 순간</b>에 멈춰 있습니다. Store 의 state 는 ref 인데 구조 분해하면
        <code>.value</code> 만 꺼내져 연결이 끊기기 때문입니다.
        <b>actions 는 함수라 그냥 꺼내 써도 됩니다</b> — storeToRefs 는 state 와 getters 에만
        씁니다.
      </p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

.area + .area {
  margin-top: 20px;
}

.panels {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.peek {
  padding: 5px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 11.5px;
  font-weight: 700;
}

.peek:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.compare {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.cell {
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
}

.cell.good {
  border-color: var(--accent-line);
  background: var(--accent-tint);
}

.cell.bad {
  border-color: var(--signal-line);
  background: var(--signal-tint);
}

.cell-head {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  margin: 0 0 8px;
}

.cell-head code {
  overflow-wrap: anywhere;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.cell-value {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 28px;
  font-weight: 700;
}

.tag {
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
}

.tag.ok {
  color: var(--on-accent);
  background: var(--accent);
}

.tag.no {
  color: var(--surface);
  background: var(--signal);
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.controls button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--ink-soft);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 12px;
}

.controls button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.controls button.ghost {
  color: var(--faint);
}

.note {
  margin: 12px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--accent);
  border-radius: 0 9px 9px 0;
  background: var(--accent-tint);
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.75;
}

.note code {
  font-family: var(--font-mono);
  font-size: 12px;
}

.note.warn {
  border-left-color: var(--signal);
  background: var(--signal-tint);
}

@media (max-width: 520px) {
  .panels,
  .compare {
    grid-template-columns: 1fr;
  }
}
</style>
`,ic=`<script setup>
import { computed, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 라우터가 하는 일을 손으로 만져 보는 실습.
 *
 * 진짜 vue-router를 이 안에 또 띄우면 사이트 주소까지 바뀌어 버리므로,
 * "주소표를 보고 화면을 고른다"는 원리만 그대로 흉내 낸 미니 라우터다.
 * 원리는 완전히 같다 — path 를 보고 component 를 고른다.
 */

/** 주소표 (routes) — 진짜 router/index.js 와 같은 모양 */
const routes = [
  { path: '/', name: 'home', label: '홈', body: '오늘의 날씨 목록이 여기 나옵니다.' },
  { path: '/about', name: 'about', label: '소개', body: '이 앱이 무엇인지 설명하는 화면입니다.' },
  {
    path: '/weather/:cityId',
    name: 'detail',
    label: '도시 상세',
    body: '한 도시의 시간별 날씨를 봅니다.',
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', label: '없는 페이지', body: '404' },
]

/** 지금 주소 */
const currentPath = ref('/')

/** 주소창에 직접 칠 수 있게 */
const typed = ref('/')

/**
 * 주소를 보고 어떤 화면을 그릴지 고른다.
 * 위에서부터 검사하고, 맨 마지막 catch-all 이 나머지를 전부 받는다.
 */
const matched = computed(() => {
  for (const route of routes) {
    if (route.path === '/:pathMatch(.*)*') continue
    const pattern = '^' + route.path.replace(/:([\\w]+)/g, '(?<$1>[^/]+)') + '$'
    const found = currentPath.value.match(new RegExp(pattern))
    if (found) return { route, params: found.groups ?? {} }
  }
  return { route: routes[routes.length - 1], params: {} }
})

const go = (path) => {
  currentPath.value = path
  typed.value = path
}

/** 새로고침을 흉내 낸다 — a 태그를 눌렀을 때 무슨 일이 벌어지는지 보기 위함 */
const counter = ref(0)
const wiped = ref(false)

const hardReload = () => {
  wiped.value = true
  counter.value = 0
  setTimeout(() => (wiped.value = false), 1400)
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      주소 → 화면, 라우터가 하는 일
      <ConceptHelp
        text="라우터는 주소표(routes)를 들고 있다가, 주소가 바뀌면 거기 맞는 컴포넌트를 골라 RouterView 자리에 끼워 넣습니다. 아래는 그 과정을 그대로 흉내 낸 미니 라우터입니다. 진짜 vue-router를 이 안에 또 띄우면 이 사이트의 주소까지 바뀌므로 원리만 재현했습니다."
      />
    </h2>

    <!-- ① 주소표 -->
    <div class="area">
      <h3>① 주소표 (routes)</h3>
      <ul class="routes">
        <li v-for="route in routes" :key="route.path" :class="{ on: route === matched.route }">
          <code class="path">{{ route.path }}</code>
          <span class="arrow" aria-hidden="true">→</span>
          <span class="name">{{ route.label }}</span>
          <span v-if="route === matched.route" class="hit">지금 이것</span>
        </li>
      </ul>
    </div>

    <!-- ② 주소창 -->
    <div class="area">
      <h3>② 주소창</h3>
      <form class="bar" @submit.prevent="go(typed)">
        <span class="origin">myapp.com</span>
        <input
          v-model="typed"
          spellcheck="false"
          aria-label="주소"
          placeholder="/about"
        />
        <button type="submit" aria-label="이동">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13M13 6l6 6-6 6" />
          </svg>
        </button>
      </form>
      <p class="links">
        <button type="button" class="link" @click="go('/')">/</button>
        <button type="button" class="link" @click="go('/about')">/about</button>
        <button type="button" class="link" @click="go('/weather/seoul')">/weather/seoul</button>
        <button type="button" class="link" @click="go('/weather/busan')">/weather/busan</button>
        <button type="button" class="link" @click="go('/hello')">/hello (없는 주소)</button>
      </p>
    </div>

    <!-- ③ RouterView -->
    <div class="area">
      <h3>③ &lt;RouterView /&gt; — 화면이 갈아끼워지는 자리</h3>
      <div class="viewport" :class="{ missing: matched.route.name === 'not-found' }">
        <p class="view-name">{{ matched.route.label }}</p>
        <p class="view-body">{{ matched.route.body }}</p>
        <p v-if="Object.keys(matched.params).length" class="params">
          <span class="tag">route.params</span>
          <code>{{ matched.params }}</code>
        </p>
      </div>
    </div>

    <!-- ④ a 태그가 위험한 이유 -->
    <div class="area">
      <h3>④ 왜 &lt;a href&gt; 를 쓰면 안 되나</h3>
      <p class="explain">
        아래 숫자는 화면이 기억하고 있는 값입니다(<code>ref</code>). 두 버튼을 각각 눌러 보세요.
      </p>
      <div class="ab">
        <div class="counter" :class="{ wiped }">
          <span class="tick">{{ counter }}</span>
          <button type="button" @click="counter++">+1 올리기</button>
        </div>
        <div class="ab-buttons">
          <button type="button" class="good" @click="go('/about')">
            RouterLink 로 이동
          </button>
          <button type="button" class="bad" @click="hardReload">
            &lt;a href&gt; 로 이동
          </button>
        </div>
      </div>
      <p class="verdict" :class="{ show: wiped }">
        새로고침이 일어나 <b>기억하던 값이 0으로 초기화</b>되었습니다.
      </p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

.area + .area {
  margin-top: 20px;
}

.explain {
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.explain code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.92em;
}

/* ── 주소표 ── */
.routes {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.routes li {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.routes li.on {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.path {
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.arrow {
  color: var(--faint);
}

.name {
  color: var(--muted);
  font-size: 12.5px;
}

.hit {
  margin-left: auto;
  padding: 2px 9px;
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 10.5px;
  font-weight: 700;
}

/* ── 주소창 ── */
.bar {
  display: grid;
  /* 도메인은 글자만큼, 입력창이 남는 폭을 전부, 버튼은 정사각형 */
  grid-template-columns: max-content minmax(0, 1fr) 40px;
  align-items: center;
  height: 42px;
  padding: 0 5px 0 0;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  transition: border-color 0.15s ease;
}

.bar:focus-within {
  border-color: var(--accent);
}

.origin {
  padding: 0 2px 0 16px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 12.5px;
  user-select: none;
}

.bar input {
  min-width: 0;
  height: 100%;
  padding: 0 8px;
  border: 0;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-family: var(--font-mono);
  font-size: 13.5px;
  outline: none;
}

.bar input::placeholder {
  color: var(--line-strong);
}

.bar button {
  display: grid;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--accent-tint);
  color: var(--accent);
  cursor: pointer;
  place-items: center;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.bar button:hover {
  color: var(--on-accent);
  background: var(--accent);
}

.bar button svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 0;
}

.link {
  padding: 5px 11px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ── RouterView ── */
.viewport {
  padding: 22px 20px;
  border: 2px dashed var(--accent);
  border-radius: 12px;
  background: var(--paper);
  text-align: center;
}

.viewport.missing {
  border-color: var(--signal);
}

.view-name {
  margin: 0 0 6px;
  color: var(--accent);
  font-size: 17px;
  font-weight: 700;
}

.viewport.missing .view-name {
  color: var(--signal);
}

.view-body {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.params {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 12px 0 0;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--surface);
}

.params .tag {
  color: var(--faint);
  font-size: 10.5px;
  font-weight: 700;
}

.params code {
  font-family: var(--font-mono);
  font-size: 12px;
}

/* ── a 태그 비교 ── */
.ab {
  display: grid;
  gap: 12px;
}

.counter {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
  transition: background 0.2s ease;
}

.counter.wiped {
  background: var(--signal-tint);
}

.tick {
  min-width: 46px;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 700;
  text-align: center;
}

.counter button {
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
}

.ab-buttons {
  display: grid;
  gap: 8px;
}

.ab-buttons button {
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}

.ab-buttons .good {
  border-color: var(--accent);
  color: var(--accent);
}

.ab-buttons .bad {
  border-color: var(--signal);
  color: var(--signal);
}

.verdict {
  height: 0;
  margin: 10px 0 0;
  color: var(--signal);
  font-size: 12.5px;
  font-weight: 600;
  opacity: 0;
  text-align: center;
  transition: opacity 0.2s ease;
}

.verdict.show {
  height: auto;
  opacity: 1;
}

@media (min-width: 620px) {
  .ab {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}
</style>
`,ac=`<script setup>
import { computed, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * Navigation Guard(검문소)와 Catch-all Route를 손으로 만져 보는 실습.
 *
 * 진짜 라우터를 이 안에 또 띄우면 사이트 주소까지 바뀌므로,
 * beforeEach → beforeResolve → afterEach 순서와 next()의 역할만 그대로 흉내 냈다.
 */

/** 주소표. meta.isAuth 가 붙은 곳은 로그인해야 들어갈 수 있다 */
const ROUTES = [
  { path: '/', name: 'Home', label: '홈', meta: {} },
  { path: '/about', name: 'About', label: '소개', meta: {} },
  { path: '/mypage', name: 'MyPage', label: '마이페이지', meta: { isAuth: true } },
  { path: '/admin', name: 'Admin', label: '관리자', meta: { isAuth: true } },
  { path: '/login', name: 'Login', label: '로그인', meta: {} },
]

const isAuthenticated = ref(false)
const useCatchAll = ref(true)
const currentPath = ref('/')
const logs = ref([])

const matched = computed(() => ROUTES.find((r) => r.path === currentPath.value) ?? null)

/** 지금 화면에 그려질 것 */
const screen = computed(() => {
  if (matched.value) return { kind: 'page', route: matched.value }
  return useCatchAll.value ? { kind: 'not-found' } : { kind: 'blank' }
})

const add = (hook, text, tone = 'plain') =>
  logs.value.unshift({ id: logs.value.length, hook, text, tone })

/**
 * 라우터가 주소를 옮길 때 거치는 순서를 그대로 재현한다.
 *   beforeEach → (통과하면) beforeResolve → 화면 그리기 → afterEach
 */
const navigate = (to) => {
  logs.value = []
  const target = ROUTES.find((r) => r.path === to)
  const meta = target?.meta ?? {}

  add('beforeEach', \`to: \${to} · from: \${currentPath.value}\`, 'start')

  // 교안 174쪽의 예제와 같은 판단
  if (meta.isAuth && !isAuthenticated.value) {
    add('beforeEach', \`to.meta.isAuth 인데 로그인 안 됨 → next('/login')\`, 'block')
    currentPath.value = '/login'
    add('afterEach', '로그인 화면으로 이동 완료', 'done')
    return
  }

  add('beforeEach', 'next() — 통과 허가', 'pass')
  add('beforeResolve', '컴포넌트까지 다 준비됨 (마지막 확인 지점)', 'plain')
  currentPath.value = to
  add('afterEach', '화면 전환 완료 (분석 로그 보내기 좋은 곳)', 'done')
}

const login = () => {
  isAuthenticated.value = true
  add('상태', '로그인했습니다. 이제 잠긴 주소도 들어갈 수 있습니다.', 'pass')
}

const logout = () => {
  isAuthenticated.value = false
  add('상태', '로그아웃했습니다.', 'block')
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Navigation Guard — 페이지 입장 전 검문소
      <ConceptHelp
        text="특정 주소로 들어가기 직전에 가로채서 권한을 검사하거나 다른 곳으로 보내는 장치입니다. 로그인해야 볼 수 있는 마이페이지·관리자 화면에 씁니다. beforeEach(시작 직전) → beforeResolve(컴포넌트까지 준비된 뒤) → afterEach(전환 완료 후) 순서로 불립니다."
      />
    </h2>

    <!-- 로그인 상태 -->
    <div class="area">
      <div class="auth" :class="{ on: isAuthenticated }">
        <span class="dot" aria-hidden="true" />
        <b>{{ isAuthenticated ? '로그인 상태' : '비로그인 상태' }}</b>
        <code>isAuthenticated = {{ isAuthenticated }}</code>
        <button type="button" @click="isAuthenticated ? logout() : login()">
          {{ isAuthenticated ? '로그아웃' : '로그인하기' }}
        </button>
      </div>
    </div>

    <!-- 주소 이동 -->
    <div class="area">
      <h3>어디로 갈까요</h3>
      <div class="links">
        <button
          v-for="route in ROUTES"
          :key="route.path"
          type="button"
          class="link"
          :class="{ locked: route.meta.isAuth }"
          @click="navigate(route.path)"
        >
          {{ route.path }}
          <span v-if="route.meta.isAuth" class="lock" aria-hidden="true">🔒</span>
        </button>
        <button type="button" class="link ghost" @click="navigate('/unknown-page')">
          /unknown-page
        </button>
      </div>
    </div>

    <!-- 화면 -->
    <div class="area">
      <h3>&lt;RouterView /&gt;</h3>
      <div class="viewport" :class="screen.kind">
        <template v-if="screen.kind === 'page'">
          <p class="view-name">{{ screen.route.label }}</p>
          <code class="view-path">{{ screen.route.path }}</code>
        </template>
        <template v-else-if="screen.kind === 'not-found'">
          <p class="view-name">404 — 그런 페이지는 없습니다</p>
          <code class="view-path">Catch-all Route 가 받아 냈습니다</code>
        </template>
        <template v-else>
          <p class="view-name blank">(하얗게 비어 있음)</p>
          <code class="view-path">매칭되는 컴포넌트가 없어 아무것도 그려지지 않았습니다</code>
        </template>
      </div>

      <label class="toggle">
        <input v-model="useCatchAll" type="checkbox" />
        <span>
          Catch-all Route 사용 —
          <code>{ path: '/:pathMatch(.*)*', component: NotFoundView }</code>
        </span>
      </label>
    </div>

    <!-- 검문 기록 -->
    <div class="area">
      <h3>검문 기록 <small>최근 이동이 위에</small></h3>
      <ul v-if="logs.length" class="logs">
        <li v-for="log in logs" :key="log.id" :class="log.tone">
          <span class="hook">{{ log.hook }}</span>
          <span class="text">{{ log.text }}</span>
        </li>
      </ul>
      <p v-else class="hint">위에서 주소를 눌러 보세요. 검문 순서가 여기 쌓입니다.</p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

h3 small {
  color: var(--faint);
  font-size: 11px;
  font-weight: 500;
}

.area + .area {
  margin-top: 20px;
}

/* 로그인 상태 */
.auth {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
}

.auth .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--signal);
}

.auth.on .dot {
  background: var(--accent);
}

.auth b {
  font-size: 13.5px;
}

.auth code {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.auth button {
  margin-left: auto;
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
}

.auth button:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* 주소 버튼 */
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.link {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 7px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 12px;
}

.link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.link.locked {
  border-style: dashed;
}

.link.ghost {
  color: var(--faint);
}

.lock {
  font-size: 10px;
}

/* 화면 */
.viewport {
  padding: 26px 20px;
  border: 2px dashed var(--accent);
  border-radius: 12px;
  background: var(--paper);
  text-align: center;
}

.viewport.not-found {
  border-color: var(--signal);
}

.viewport.blank {
  border-color: var(--line-strong);
  background: #fff;
}

.view-name {
  margin: 0 0 6px;
  color: var(--accent);
  font-size: 17px;
  font-weight: 700;
}

.viewport.not-found .view-name {
  color: var(--signal);
}

.view-name.blank {
  color: var(--line-strong);
}

.view-path {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.toggle {
  display: flex;
  gap: 9px;
  align-items: center;
  margin-top: 12px;
  color: var(--muted);
  cursor: pointer;
  font-size: 12.5px;
}

.toggle code {
  font-family: var(--font-mono);
  font-size: 11.5px;
}

/* 검문 기록 */
.logs {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.logs li {
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr);
  gap: 10px;
  align-items: baseline;
  padding: 8px 12px;
  border-radius: 9px;
  background: var(--paper);
}

.logs .hook {
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 700;
}

.logs .text {
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.6;
}

.logs li.start {
  box-shadow: inset 3px 0 0 var(--slate);
}

.logs li.pass {
  box-shadow: inset 3px 0 0 var(--accent);
}

.logs li.pass .hook {
  color: var(--accent);
}

.logs li.block {
  background: var(--signal-tint);
  box-shadow: inset 3px 0 0 var(--signal);
}

.logs li.block .hook,
.logs li.block .text {
  color: var(--signal);
}

.logs li.done {
  box-shadow: inset 3px 0 0 var(--line-strong);
}

.hint {
  margin: 0;
  padding: 18px 0;
  color: var(--faint);
  font-size: 12.5px;
  text-align: center;
}

@media (max-width: 520px) {
  .logs li {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
`,oc=`<script setup>
import { computed, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * useRoute() 와 useRouter() 를 손으로 만져 보는 실습.
 *
 *   useRoute()  = 지금 이 페이지의 "정보"를 읽는다      (읽기)
 *   useRouter() = 페이지를 "옮긴다"                     (쓰기)
 *
 * 진짜 라우터를 이 안에 또 띄우면 사이트 주소까지 바뀌므로,
 * 히스토리 스택과 주소 해석만 그대로 흉내 냈다. 원리는 같다.
 */

/** 히스토리 스택 — 뒤로가기가 왜 되는지 눈으로 보기 위해 직접 쌓는다 */
const history = ref(['/'])
const cursor = ref(0)

const currentUrl = computed(() => history.value[cursor.value])

/** 주소 문자열 → route 객체 (path · params · query · name) */
const route = computed(() => {
  const [path, search = ''] = currentUrl.value.split('?')

  const query = {}
  for (const pair of search.split('&').filter(Boolean)) {
    const [k, v = ''] = pair.split('=')
    query[decodeURIComponent(k)] = decodeURIComponent(v)
  }

  // 주소표에서 맞는 줄을 찾아 동적 세그먼트(:cityId)를 뽑는다
  const TABLE = [
    { name: 'WeatherHome', path: '/' },
    { name: 'WeatherDetail', path: '/weather/:cityId' },
    { name: 'UserPosts', path: '/user/:userId/posts' },
    { name: 'Search', path: '/search' },
  ]
  for (const row of TABLE) {
    const re = new RegExp('^' + row.path.replace(/:(\\w+)/g, '(?<$1>[^/]+)') + '$')
    const hit = path.match(re)
    if (hit) return { name: row.name, path, params: hit.groups ?? {}, query }
  }
  return { name: 'NotFound', path, params: {}, query }
})

/** ── useRouter() 흉내 ── */
const push = (url) => {
  // 현재 위치 뒤쪽(앞으로가기 기록)은 버리고 새 기록을 쌓는다
  history.value = [...history.value.slice(0, cursor.value + 1), url]
  cursor.value = history.value.length - 1
}

const replace = (url) => {
  // 지금 기록을 덮어쓴다 — 뒤로 가면 여기가 아니라 그 이전으로 간다
  history.value = [...history.value.slice(0, cursor.value), url]
  cursor.value = history.value.length - 1
}

const go = (step) => {
  const next = cursor.value + step
  if (next >= 0 && next < history.value.length) cursor.value = next
}

const canBack = computed(() => cursor.value > 0)
const canForward = computed(() => cursor.value < history.value.length - 1)

/** 교안 171쪽 표의 예시들 */
const EXAMPLES = [
  { label: "router.push('/about')", run: () => push('/about'), note: '가장 단순한 형태' },
  {
    label: "router.push({ name: 'WeatherDetail', params: { cityId: 'seoul' } })",
    run: () => push('/weather/seoul'),
    note: '이름 + 동적 세그먼트',
  },
  {
    label: "router.push({ name: 'Search', query: { q: 'vue' } })",
    run: () => push('/search?q=vue'),
    note: '물음표 뒤 쿼리',
  },
  {
    label: "router.push({ name: 'UserPosts', params: { userId: 42 } })",
    run: () => push('/user/42/posts'),
    note: '중간 위치 동적 세그먼트',
  },
  {
    label: "router.replace('/login')",
    run: () => replace('/login'),
    note: '기록을 덮어쓴다 — 뒤로가기로 못 돌아온다',
    danger: true,
  },
]
<\/script>

<template>
  <section class="practice-card">
    <h2>
      useRoute() 로 읽고, useRouter() 로 옮긴다
      <ConceptHelp
        text="이름이 한 글자 차이라 헷갈립니다. useRoute()는 '지금 이 페이지의 정보'를 읽는 것이고(읽기 전용), useRouter()는 '페이지를 옮기는 리모컨'입니다(동작). 아래에서 버튼을 눌러 주소를 옮기면 위쪽 route 객체가 어떻게 바뀌는지 보세요."
      />
    </h2>

    <!-- 주소 -->
    <div class="area">
      <div class="urlbar">
        <span class="origin">myapp.com</span>
        <span class="url">{{ currentUrl }}</span>
      </div>
    </div>

    <!-- useRoute() -->
    <div class="area">
      <h3>useRoute() — 지금 페이지의 정보 <span class="tag read">읽기</span></h3>
      <dl class="route">
        <dt>route.path</dt>
        <dd><code>{{ route.path }}</code></dd>
        <dt>route.name</dt>
        <dd><code>{{ route.name }}</code></dd>
        <dt>route.params</dt>
        <dd :class="{ empty: !Object.keys(route.params).length }">
          <code>{{ route.params }}</code>
          <small v-if="!Object.keys(route.params).length">주소에 :빈칸이 없는 경로</small>
        </dd>
        <dt>route.query</dt>
        <dd :class="{ empty: !Object.keys(route.query).length }">
          <code>{{ route.query }}</code>
          <small v-if="!Object.keys(route.query).length">물음표 뒤가 비어 있음</small>
        </dd>
      </dl>
    </div>

    <!-- useRouter() -->
    <div class="area">
      <h3>useRouter() — 페이지를 옮기는 리모컨 <span class="tag write">동작</span></h3>
      <ul class="methods">
        <li v-for="item in EXAMPLES" :key="item.label">
          <button type="button" :class="{ danger: item.danger }" @click="item.run()">
            <code>{{ item.label }}</code>
            <small>{{ item.note }}</small>
          </button>
        </li>
      </ul>
    </div>

    <!-- 히스토리 -->
    <div class="area">
      <h3>히스토리 스택 — push 와 replace 의 차이</h3>
      <ol class="stack">
        <li v-for="(url, i) in history" :key="i" :class="{ here: i === cursor }">
          <span class="no">{{ i }}</span>
          <code>{{ url }}</code>
          <span v-if="i === cursor" class="here-tag">지금</span>
        </li>
      </ol>
      <div class="nav">
        <button type="button" :disabled="!canBack" @click="go(-1)">← router.go(-1)</button>
        <button type="button" :disabled="!canForward" @click="go(1)">router.go(1) →</button>
      </div>
      <p class="note">
        <b>push</b> 는 기록을 <b>쌓고</b>, <b>replace</b> 는 지금 기록을 <b>덮어씁니다</b>. 그래서
        로그인 후 이동에는 replace를 씁니다 — 뒤로가기로 로그인 화면에 다시 돌아가면 곤란하니까요.
      </p>
    </div>
  </section>
</template>

<style scoped>
h3 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

.area + .area {
  margin-top: 20px;
}

.tag {
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
}

.tag.read {
  color: var(--slate);
  background: var(--slate-tint);
}

.tag.write {
  color: var(--on-accent);
  background: var(--accent);
}

/* 주소 */
.urlbar {
  display: flex;
  gap: 2px;
  align-items: center;
  height: 42px;
  padding: 0 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
}

.origin {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.url {
  overflow: hidden;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 13.5px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* route 객체 */
.route {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 7px 14px;
  margin: 0;
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
}

.route dt {
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.route dd {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  min-width: 0;
  margin: 0;
}

.route dd code {
  overflow-wrap: anywhere;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.route dd.empty code {
  color: var(--faint);
}

.route dd small {
  color: var(--faint);
  font-size: 11px;
}

/* 메서드 버튼 */
.methods {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.methods button {
  display: grid;
  width: 100%;
  gap: 3px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  text-align: left;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.methods button:hover {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.methods button.danger:hover {
  border-color: var(--signal);
  background: var(--signal-tint);
}

.methods code {
  overflow-wrap: anywhere;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.methods small {
  color: var(--muted);
  font-size: 11.5px;
}

/* 히스토리 */
.stack {
  display: grid;
  gap: 4px;
  margin: 0 0 12px;
  padding: 0;
  list-style: none;
}

.stack li {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 7px 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
}

.stack li.here {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.stack .no {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

.stack code {
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 12.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.here-tag {
  margin-left: auto;
  padding: 2px 9px;
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 10px;
  font-weight: 700;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.nav button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 12px;
}

.nav button:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.nav button:disabled {
  cursor: default;
  opacity: 0.35;
}

.note {
  margin: 12px 0 0;
  padding: 12px 14px;
  border-left: 3px solid var(--accent);
  border-radius: 0 9px 9px 0;
  background: var(--accent-tint);
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.75;
}

@media (max-width: 560px) {
  .route {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .route dd {
    margin-bottom: 8px;
  }
}
</style>
`,sc=Object.assign({"./basic/BindPractice.vue":De,"./basic/ConditionalPractice.vue":Ve,"./basic/EventPractice.vue":Qe,"./basic/ForPractice.vue":ut,"./basic/HtmlTextPractice.vue":mt,"./basic/ModelPractice.vue":xt,"./basic/ReactivityPractice.vue":Vt,"./basic/SpecialDirectivePractice.vue":Wt,"./component/ComponentRegistrationPractice.vue":en,"./component/LifecyclePractice.vue":un,"./component/PropsEmitsPractice.vue":gn,"./component/PropsFlowPractice.vue":Tn,"./component/PropsReadonlyPractice.vue":Hn,"./component/ProvideInjectPractice.vue":ir,"./component/SiblingTalkPractice.vue":yr,"./component/SlotBaseCardPractice.vue":kr,"./component/SlotListPractice.vue":Rr,"./component/SlotModalPractice.vue":ri,"./component/SlotPractice.vue":yi,"./composition/ComputedCachePractice.vue":Ei,"./composition/DeepWatchPractice.vue":ki,"./composition/FormStatePractice.vue":Fi,"./composition/MultiWatchPractice.vue":Gi,"./composition/ReactiveArrayWatchPractice.vue":Xi,"./composition/ReactiveStatePractice.vue":na,"./composition/ReactiveWatchPractice.vue":ca,"./composition/RefArrayWatchPractice.vue":ma,"./composition/RefStatePractice.vue":xa,"./composition/TodoAdvancedPractice.vue":wa,"./composition/TodoListPractice.vue":Ra,"./composition/WatchEffectPractice.vue":Ja,"./composition/WatchPractice.vue":$a,"./library/StoreCounterPractice.vue":uo,"./router/RouterBasicPractice.vue":wo,"./router/RouterGuardPractice.vue":Ho,"./router/RouterNavigatePractice.vue":as}),$=e=>e.split(`/`).pop().replace(`.vue`,``),cc=Object.fromEntries(Object.entries(sc).map(([e,t])=>[$(e),t.default])),lc=Object.fromEntries(Object.entries(sc).map(([e])=>[$(e),e.replace(`./`,`src/components/practices/`)]));Object.keys(cc).sort();var uc=e=>cc[e]??null,dc=e=>lc[e]??``,fc=Object.fromEntries(Object.entries(Object.assign({"./basic/BindPractice.vue":Ts,"./basic/ConditionalPractice.vue":Es,"./basic/EventPractice.vue":Ds,"./basic/ForPractice.vue":Os,"./basic/HtmlTextPractice.vue":ks,"./basic/ModelPractice.vue":As,"./basic/ReactivityPractice.vue":js,"./basic/SpecialDirectivePractice.vue":Ms,"./component/ComponentRegistrationPractice.vue":Ns,"./component/LifecyclePractice.vue":Ps,"./component/PropsEmitsPractice.vue":Fs,"./component/PropsFlowPractice.vue":Is,"./component/PropsReadonlyPractice.vue":Ls,"./component/ProvideInjectPractice.vue":Rs,"./component/SiblingTalkPractice.vue":zs,"./component/SlotBaseCardPractice.vue":Bs,"./component/SlotListPractice.vue":Vs,"./component/SlotModalPractice.vue":Hs,"./component/SlotPractice.vue":Us,"./composition/ComputedCachePractice.vue":Ws,"./composition/DeepWatchPractice.vue":Gs,"./composition/FormStatePractice.vue":Ks,"./composition/MultiWatchPractice.vue":qs,"./composition/ReactiveArrayWatchPractice.vue":Js,"./composition/ReactiveStatePractice.vue":Ys,"./composition/ReactiveWatchPractice.vue":Xs,"./composition/RefArrayWatchPractice.vue":Zs,"./composition/RefStatePractice.vue":Qs,"./composition/TodoAdvancedPractice.vue":$s,"./composition/TodoListPractice.vue":ec,"./composition/WatchEffectPractice.vue":tc,"./composition/WatchPractice.vue":nc,"./library/StoreCounterPractice.vue":rc,"./router/RouterBasicPractice.vue":ic,"./router/RouterGuardPractice.vue":ac,"./router/RouterNavigatePractice.vue":oc})).map(([e,t])=>[$(e),t])),pc=e=>fc[e]??``,mc=[`id`],hc=[`aria-expanded`,`title`],gc={class:`card-chevron`,"aria-hidden":`true`},_c={class:`head-text`},vc={class:`label`},yc={class:`slide`},bc={key:0,class:`goal`},xc={key:1,class:`card-summary`},Sc={class:`head-badges`},Cc={key:0,class:`badge live`},wc={key:1,class:`tasks`},Tc={key:2,class:`fold pitfalls`},Ec={class:`fold-body`},Dc={key:0,class:`compare`},Oc={key:0,class:`bad`},kc={key:1,class:`good`},Ac={class:`why`},jc={key:3,class:`practice-note`},Mc={class:`practice-head`},Nc=[`aria-expanded`,`title`],Pc={class:`chevron`,"aria-hidden":`true`},Fc={key:0,class:`count`},Ic={class:`practice-hint`},Lc={class:`practice-main`},Rc={key:0,class:`practice-mounts`},zc={class:`slot-tools`},Bc=[`onClick`],Vc=[`onClick`],Hc={key:1,class:`practice-empty`},Uc={key:2,class:`practice-missing`},Wc=[`aria-expanded`,`title`],Gc={class:`side-chevron`,"aria-hidden":`true`},Kc={class:`side-body`},qc={key:0,class:`side-block`},Jc={class:`side-heading`},Yc=[`onClick`],Xc={class:`guide`},Zc=[`innerHTML`],Qc={class:`guide-see`},$c=[`innerHTML`],el={key:0,class:`guide-why`},tl=[`innerHTML`],nl={key:1,class:`group-extras`},rl={key:1,class:`side-block fold extensions`},il={class:`fold-body`},al={key:5,class:`fold extensions`},ol={class:`fold-body`},sl=K({__name:`ChallengeCard`,props:{challenge:{type:Object,required:!0}},setup(e){let t=e,n=T(()=>t.challenge.practices.map(e=>({name:e,component:uc(e)})).filter(e=>e.component)),r=T(()=>t.challenge.practices.filter(e=>!uc(e))),i=T(()=>n.value.length>0),a=T(()=>t.challenge.practiceGuide??[]),o=T(()=>{let e=[];for(let t of a.value)t.practice||e.length===0?e.push({label:t.practice??null,steps:[t]}):e[e.length-1].steps.push(t);return e.map(e=>({...e,extras:u.value.filter(t=>typeof t==`object`&&t.practice===e.label)}))}),c=T(()=>{let e=new Set(o.value.map(e=>e.label));return u.value.filter(t=>typeof t==`string`||!e.has(t.practice))}),l=e=>typeof e==`string`?e:e.text,u=T(()=>t.challenge.extensions??[]),d=T(()=>i.value&&(a.value.length>0||u.value.length>0)),f=y(!0),m=y(!0),b=y(!1),S=T(()=>{let e=[];return t.challenge.tasks?.length&&e.push(`연습 ${t.challenge.tasks.length}`),t.challenge.pitfalls?.length&&e.push(`주의 ${t.challenge.pitfalls.length}`),n.value.length&&e.push(`실습 ${n.value.length}`),e.join(` · `)}),w=T(()=>!d.value&&u.value.length>0),D=E({}),O=e=>`${e}-${D[e]??0}`,N=e=>{D[e]=(D[e]??0)+1},F=()=>{n.value.forEach(e=>N(e.name))},I=y(null),z=e=>{I.value=e},B=y(null),H=e=>e.replace(/\s+/g,` `).trim(),U=(e,t)=>{let n=B.value;if(!n)return;let r=[...n.querySelectorAll(`.practice-slot`)];if(!r.length)return;let i=r.find(t=>{let n=t.querySelector(`h2`);return n&&H(n.textContent)===H(e??``)})??r[t]??r[0];i.scrollIntoView({behavior:`smooth`,block:`center`}),i.classList.add(`is-target`),setTimeout(()=>i.classList.remove(`is-target`),1400)};return(t,y)=>(s(),k(`article`,{id:`challenge-${e.challenge.id}`,ref_key:`cardEl`,ref:B,class:h([`challenge`,[e.challenge.status,{collapsed:!b.value}]])},[M(`header`,{class:`challenge-head`,role:`button`,tabindex:`0`,"aria-expanded":b.value,title:b.value?`이 챌린지 접기`:`이 챌린지 펼치기`,onClick:y[0]||=e=>b.value=!b.value,onKeydown:[y[1]||=V(L(e=>b.value=!b.value,[`prevent`]),[`enter`]),y[2]||=V(L(e=>b.value=!b.value,[`prevent`]),[`space`])]},[M(`span`,gc,A(b.value?`▾`:`▸`),1),M(`div`,_c,[M(`p`,vc,[g(A(e.challenge.label)+` `,1),M(`span`,yc,`교안 `+A(e.challenge.slidePage),1)]),M(`h3`,null,A(e.challenge.title),1),b.value?(s(),k(`p`,bc,A(e.challenge.goal),1)):S.value?(s(),k(`p`,xc,A(S.value),1)):x(``,!0)]),M(`div`,Sc,[M(`span`,{class:h([`badge`,e.challenge.status])},A(e.challenge.status===`done`?`학습 완료`:`진행 예정`),3),i.value?(s(),k(`span`,Cc,` 실습 `+A(n.value.length)+`개 `,1)):x(``,!0)])],40,hc),b.value?(s(),k(C,{key:0},[e.challenge.lecture?(s(),v(xe,{key:0,lecture:e.challenge.lecture,"study-range":e.challenge.studyRange},null,8,[`lecture`,`study-range`])):x(``,!0),e.challenge.tasks?.length?(s(),k(`section`,wc,[y[6]||=M(`p`,{class:`section-label`},`✎ 연습 항목`,-1),M(`ul`,null,[(s(!0),k(C,null,P(e.challenge.tasks,e=>(s(),k(`li`,{key:e},A(e),1))),128))])])):x(``,!0),e.challenge.pitfalls?.length?(s(),k(`details`,Tc,[M(`summary`,null,[y[7]||=M(`span`,{"aria-hidden":`true`},`⚠`,-1),y[8]||=g(` 조심할 점 `,-1),M(`b`,null,A(e.challenge.pitfalls.length),1)]),M(`div`,Ec,[(s(!0),k(C,null,P(e.challenge.pitfalls,(e,t)=>(s(),k(`div`,{key:t,class:`pitfall`},[e.bad||e.good?(s(),k(`div`,Dc,[e.bad?(s(),k(`p`,Oc,[y[9]||=M(`span`,null,`❌`,-1),M(`code`,null,A(e.bad),1)])):x(``,!0),e.good?(s(),k(`p`,kc,[y[10]||=M(`span`,null,`✅`,-1),M(`code`,null,A(e.good),1)])):x(``,!0)])):x(``,!0),M(`p`,Ac,A(e.why),1)]))),128))])])):x(``,!0),!i.value&&e.challenge.practiceNote?(s(),k(`p`,jc,[y[11]||=M(`span`,{"aria-hidden":`true`},`✓`,-1),g(` `+A(e.challenge.practiceNote),1)])):(s(),k(`section`,{key:4,class:h([`practice-zone`,{closed:!m.value}])},[M(`header`,Mc,[M(`button`,{type:`button`,class:`practice-toggle`,"aria-expanded":m.value,title:m.value?`실습 화면 접기`:`실습 화면 펼치기`,onClick:y[3]||=e=>m.value=!m.value},[M(`span`,Pc,A(m.value?`▾`:`▸`),1),y[12]||=M(`span`,{class:`practice-mark`,"aria-hidden":`true`},`🖥`,-1),y[13]||=M(`span`,{class:`practice-title`},`실습 화면`,-1),i.value?(s(),k(`span`,Fc,A(n.value.length),1)):x(``,!0)],8,Nc),M(`span`,Ic,A(m.value?`직접 눌러보며 동작을 확인하세요`:`접어 둠 · 제목을 눌러 펼치기`),1),n.value.length>1&&m.value?(s(),k(`button`,{key:0,type:`button`,class:`reset-button reset-all`,"aria-label":`실습 전체 초기화`,title:`이 챌린지의 실습을 모두 처음 상태로 되돌립니다`,onClick:F},[...y[14]||=[M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),M(`path`,{d:`M20 4v4.5h-4.5`})],-1)]])):x(``,!0)]),j(M(`div`,{class:h([`practice-body`,{"has-guide":d.value,"side-closed":d.value&&!f.value}])},[M(`div`,Lc,[i.value?(s(),k(`div`,Rc,[(s(!0),k(C,null,P(n.value,e=>(s(),k(`div`,{key:e.name,class:`practice-slot`},[M(`div`,zc,[M(`button`,{type:`button`,class:`icon-button`,"aria-label":`소스 코드 보기`,title:`소스 코드를 새 창으로 엽니다`,onClick:t=>z(e.name)},[...y[15]||=[M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`M9 7 4 12l5 5M15 7l5 5-5 5`})],-1)]],8,Bc),M(`button`,{type:`button`,class:`icon-button`,"aria-label":`이 실습 초기화`,title:`이 실습만 처음 상태로 되돌립니다 (페이지 새로고침 없음)`,onClick:t=>N(e.name)},[...y[16]||=[M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),M(`path`,{d:`M20 4v4.5h-4.5`})],-1)]],8,Vc)]),(s(),v(p(e.component),{key:O(e.name)}))]))),128))])):(s(),k(`p`,Hc,[...y[17]||=[g(` 아직 이 챌린지에 연결된 실습 화면이 없습니다. `,-1),M(`code`,null,`src/components/practices/`,-1),g(` 에 컴포넌트를 추가하고 `,-1),M(`code`,null,`curriculum.js`,-1),g(` 의 `,-1),M(`code`,null,`practices`,-1),g(` 에 이름을 넣으면 여기에 나타납니다. `,-1)]])),r.value.length?(s(),k(`p`,Uc,` ⚠ 파일을 찾지 못한 실습: `+A(r.value.join(`, `)),1)):x(``,!0)]),d.value?(s(),k(`aside`,{key:0,class:h([`guide-side`,{collapsed:!f.value}])},[M(`button`,{type:`button`,class:`side-toggle`,"aria-expanded":f.value,title:f.value?`접어서 실습 화면 넓히기`:`실습 도우미 펼치기`,onClick:y[4]||=e=>f.value=!f.value},[y[18]||=M(`span`,{class:`side-toggle-label`},[M(`span`,{"aria-hidden":`true`},`✓`),g(` 실습 도우미 `)],-1),M(`span`,Gc,A(f.value?`›`:`‹`),1)],8,Wc),j(M(`div`,Kc,[a.value.length?(s(),k(`section`,qc,[M(`p`,Jc,[y[19]||=g(` 확인 가이드 `,-1),M(`b`,null,A(a.value.length),1)]),(s(!0),k(C,null,P(o.value,(e,t)=>(s(),k(`div`,{key:t,class:`guide-group`},[e.label?(s(),k(`button`,{key:0,type:`button`,class:`guide-chip`,title:`이 실습으로 이동합니다`,onClick:n=>U(e.label,t)},[g(A(e.label)+` `,1),y[20]||=M(`span`,{class:`jump`,"aria-hidden":`true`},`↓`,-1)],8,Yc)):x(``,!0),M(`ol`,Xc,[(s(!0),k(C,null,P(e.steps,(e,t)=>(s(),k(`li`,{key:t},[M(`p`,{class:`guide-do`,innerHTML:_(q)(e.do)},null,8,Zc),M(`p`,Qc,[y[21]||=M(`b`,null,`확인`,-1),y[22]||=g(),M(`span`,{innerHTML:_(q)(e.see)},null,8,$c)]),e.why?(s(),k(`p`,el,[y[23]||=M(`b`,null,`왜`,-1),y[24]||=g(),M(`span`,{innerHTML:_(q)(e.why)},null,8,tl)])):x(``,!0)]))),128))]),e.extras.length?(s(),k(`div`,nl,[y[25]||=M(`p`,{class:`extras-label`},[M(`span`,{"aria-hidden":`true`},`🚀`),g(` 더 해보기`)],-1),M(`ul`,null,[(s(!0),k(C,null,P(e.extras,(e,t)=>(s(),k(`li`,{key:t},A(l(e)),1))),128))])])):x(``,!0)]))),128))])):x(``,!0),c.value.length?(s(),k(`details`,rl,[M(`summary`,null,[y[26]||=M(`span`,{"aria-hidden":`true`},`🚀`,-1),y[27]||=g(` 더 해보기 (전체) `,-1),M(`b`,null,A(c.value.length),1)]),M(`div`,il,[M(`ul`,null,[(s(!0),k(C,null,P(c.value,(e,t)=>(s(),k(`li`,{key:t},A(l(e)),1))),128))])])])):x(``,!0)],512),[[R,f.value]])],2)):x(``,!0)],2),[[R,m.value]])],2)),w.value?(s(),k(`details`,al,[M(`summary`,null,[y[28]||=M(`span`,{"aria-hidden":`true`},`🚀`,-1),y[29]||=g(` 더 해보기 (심화 응용) `,-1),M(`b`,null,A(u.value.length),1)]),M(`div`,ol,[M(`ul`,null,[(s(!0),k(C,null,P(u.value,(e,t)=>(s(),k(`li`,{key:t},A(l(e)),1))),128))])])])):x(``,!0)],64)):x(``,!0),I.value?(s(),v(ie,{key:1,path:_(dc)(I.value),code:_(pc)(I.value),onClose:y[5]||=e=>I.value=null},null,8,[`path`,`code`])):x(``,!0)],10,mc))}},[[`__scopeId`,`data-v-6e637b45`]]),cl=[`aria-expanded`],ll={class:`chevron`,"aria-hidden":`true`},ul={class:`orientation-body`},dl={class:`rule`},fl={class:`lead`},pl={class:`cargo`},ml={class:`name`},hl={class:`payload`},gl={"aria-hidden":`true`},_l=[`innerHTML`],vl={class:`priority`},yl={class:`p-name`},bl={class:`p-weight`},xl={class:`p-when`},Sl={class:`keep`},Cl=[`innerHTML`],wl=K({__name:`ChapterOrientation`,props:{orientation:{type:Object,required:!0}},setup(e){let t=y(!0);return(n,r)=>(s(),k(`section`,{class:h([`orientation`,{closed:!t.value}])},[M(`button`,{class:`orientation-toggle`,type:`button`,"aria-expanded":t.value,onClick:r[0]||=e=>t.value=!t.value},[r[1]||=M(`span`,{class:`marker`,"aria-hidden":`true`},`🧭`,-1),r[2]||=M(`span`,{class:`toggle-title`},`시작하기 전에 — 규칙은 하나뿐입니다`,-1),M(`span`,ll,A(t.value?`−`:`+`),1)],8,cl),j(M(`div`,ul,[M(`p`,dl,A(e.orientation.rule),1),M(`p`,fl,A(e.orientation.lead),1),M(`ul`,pl,[(s(!0),k(C,null,P(e.orientation.cargo,e=>(s(),k(`li`,{key:e.name},[M(`code`,ml,A(e.name),1),M(`span`,hl,A(e.payload),1),M(`span`,{class:h([`dir`,e.dir===`위로`?`up`:`down`])},[M(`span`,gl,A(e.dir===`위로`?`↑`:`↓`),1),g(` `+A(e.dir),1)],2)]))),128))]),M(`p`,{class:`why`,innerHTML:_(q)(e.orientation.why)},null,8,_l),r[4]||=M(`p`,{class:`priority-label`},`실제로 쓰는 비중`,-1),M(`ul`,vl,[(s(!0),k(C,null,P(e.orientation.priority,e=>(s(),k(`li`,{key:e.name,class:h(e.level)},[M(`span`,yl,A(e.name),1),M(`span`,bl,A(e.weight),1),M(`span`,xl,A(e.when),1)],2))),128))]),M(`p`,Sl,[r[3]||=M(`span`,{class:`keep-label`},`이것만은`,-1),M(`span`,{innerHTML:_(q)(e.orientation.keep)},null,8,Cl)])],512),[[R,t.value]])],2))}},[[`__scopeId`,`data-v-bfb97b66`]]),Tl={class:`chapter-nav`},El={class:`nav-head`},Dl={key:0,class:`nav-title`},Ol=[`title`,`aria-label`],kl=[`title`,`onClick`],Al={class:`chapter-no`},jl={key:0,class:`chapter-info`},Ml={key:1,class:`chapter-meta`},Nl=[`title`],Pl={key:0,class:`nav-legend`},Fl={key:0},Il={id:`learning-content`,class:`learning-content`},Ll={class:`chapter-head`},Rl={class:`eyebrow`},zl={class:`chapter-summary`},Bl={class:`topic-chips`},Vl={key:1,class:`challenge-stack`},Hl={key:2,class:`empty-state`},Ul={key:3,class:`linked-assignments`},Wl={class:`step`},Gl=2,Kl=K({__name:`LearningView`,props:{chapterId:{type:String,default:``}},setup(e){te();let t=ee(),n=e,r=T(()=>{let e=Number(n.chapterId);return W.some(t=>t.id===e)?e:Gl}),i=e=>{t.push({name:`learning`,params:{chapterId:String(e)}}),document.getElementById(`learning-content`)?.scrollIntoView({behavior:`smooth`,block:`start`})};u(()=>n.chapterId,e=>{e||t.replace({name:`learning`,params:{chapterId:String(Gl)}})},{immediate:!0});let a=y(!1),o=T(()=>W.find(e=>e.id===r.value)),c=T(()=>ne(r.value)),l=T(()=>G(r.value)),d=T(()=>W.map(e=>{let t=ne(e.id),n=t.filter(e=>e.label.startsWith(`Code Challenge`));return{...e,total:n.length,live:t.filter(e=>e.practices.length>0).length,assignments:G(e.id).length}})),f=()=>{window.scrollTo({top:0,behavior:`smooth`})};return(e,t)=>{let n=m(`RouterLink`);return s(),k(C,null,[t[6]||=M(`section`,{class:`page-intro`},[M(`p`,{class:`eyebrow`},`LEARNING & CODE CHALLENGES`),M(`h1`,null,`학습 & 코드 챌린지`),M(`p`,null,[g(` 왼쪽에서 챕터를 고르면 해당 챕터의 `),M(`strong`,null,`코드 챌린지`),g(`가 열립니다. 각 챌린지는 `),M(`strong`,null,`관련 강의 내용 → 연습 항목 → 실습 화면`),g(` 순서로 이어집니다. `)])],-1),M(`section`,{class:h([`learning-layout`,{"nav-collapsed":a.value}])},[M(`aside`,Tl,[M(`div`,El,[a.value?x(``,!0):(s(),k(`p`,Dl,`학습 로드맵`)),M(`button`,{type:`button`,class:`nav-toggle`,title:a.value?`메뉴 펼치기`:`메뉴 접기`,"aria-label":a.value?`메뉴 펼치기`:`메뉴 접기`,onClick:t[0]||=e=>a.value=!a.value},A(a.value?`»`:`«`),9,Ol)]),(s(!0),k(C,null,P(d.value,e=>(s(),k(`button`,{key:e.id,type:`button`,class:h([`chapter-item`,{active:e.id===r.value}]),title:a.value?`${e.title} · ${e.slides}`:``,onClick:t=>i(e.id)},[M(`span`,Al,A(String(e.id).padStart(2,`0`)),1),a.value?x(``,!0):(s(),k(`span`,jl,[M(`b`,null,A(e.title),1),M(`small`,null,A(e.slides),1)])),a.value?x(``,!0):(s(),k(`span`,Ml,[M(`i`,{class:h([`dot`,{live:e.live,none:!e.total}]),title:e.total?`코드 챌린지 ${e.total}개${e.live?` · 실습 화면 ${e.live}개`:``}`:`코드 챌린지 없음`},A(e.total||`–`),11,Nl)]))],10,kl))),128)),a.value?x(``,!0):(s(),k(`p`,Pl,[...t[1]||=[g(` 숫자 = 코드 챌린지 수 \xA0·\xA0 `,-1),M(`i`,{class:`dot live`},`n`,-1),g(` 실습 화면 있음 `,-1)]])),M(`button`,{type:`button`,class:`to-top`,title:`맨 위로`,"aria-label":`맨 위로 가기`,onClick:f},[t[2]||=M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`m6 15 6-6 6 6`})],-1),a.value?x(``,!0):(s(),k(`span`,Fl,`맨 위로`))])]),M(`div`,Il,[M(`header`,Ll,[M(`div`,null,[M(`p`,Rl,A(o.value.code)+` · 교안 `+A(o.value.slides),1),M(`h2`,null,A(o.value.title),1),M(`p`,zl,A(o.value.summary),1),M(`div`,Bl,[(s(!0),k(C,null,P(o.value.topics,e=>(s(),k(`span`,{key:e},A(e),1))),128))])])]),o.value.orientation?(s(),v(wl,{key:0,orientation:o.value.orientation},null,8,[`orientation`])):x(``,!0),c.value.length?(s(),k(`div`,Vl,[(s(!0),k(C,null,P(c.value,e=>(s(),v(sl,{key:e.id,challenge:e},null,8,[`challenge`]))),128))])):(s(),k(`p`,Hl,[...t[3]||=[g(` 교안 기준으로 이 챕터에는 코드 챌린지가 없습니다. 아래 `,-1),M(`b`,null,`제출 과제`,-1),g(`로 바로 진행합니다. `,-1)]])),l.value.length?(s(),k(`section`,Ul,[t[5]||=M(`p`,{class:`section-label`},`이 챕터의 제출 과제`,-1),(s(!0),k(C,null,P(l.value,e=>(s(),v(n,{key:e.id,class:`assignment-link`,to:`/assignments`},{default:b(()=>[M(`span`,Wl,A(String(e.id).padStart(2,`0`)),1),M(`span`,null,[M(`b`,null,A(e.title),1),M(`small`,null,A(e.goal),1)]),t[4]||=M(`span`,{class:`arrow`},`→`,-1)]),_:2},1024))),128))])):x(``,!0)])],2)],64)}}},[[`__scopeId`,`data-v-2064475a`]]);export{Kl as default};