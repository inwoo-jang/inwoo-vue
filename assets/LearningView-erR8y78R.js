import{n as e}from"./rolldown-runtime-hePW80VL.js";import{$ as t,B as n,F as r,G as i,I as a,Kt as o,L as s,O as c,P as l,Q as u,R as d,T as f,U as p,V as m,Wt as h,_ as g,bt as _,d as v,dt as y,et as b,f as x,g as S,i as C,j as w,l as T,lt as E,nt as D,ot as O,p as k,qt as A,tt as j,u as M,v as N,z as P}from"./runtime-core.esm-bundler-kkMznkCl.js";import{a as F,c as I,d as L,l as R,o as z,s as B,u as V}from"./runtime-dom.esm-bundler-CHanmBTQ.js";import{n as H,r as U}from"./pinia-Cmt0qqyQ.js";import{t as W}from"./message-Ri3ptyqj.js";import{t as ee}from"./message-box-CV2dSrpA.js";import{h as te}from"./useApi-CROJJdhE-BZRBkDcY.js";import{i as G,n as ne,r as re}from"./curriculum-Ds-rmL8H.js";import{t as K}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{t as ie}from"./axios-DhiQ7QLW.js";import{n as ae,r as q,t as oe}from"./CodeWindow-Dv9EOwfb.js";var se={class:`snippet`},ce=[`innerHTML`],le={key:0,class:`parts`},ue={key:1,class:`returns`},de={key:2},fe=K({__name:`CodeSnippet`,props:{code:{type:String,required:!0},desc:{type:String,default:``},parts:{type:Array,default:()=>[]},returns:{type:String,default:``}},setup(e){let t=e,n=T(()=>ae(t.code));return(t,r)=>(s(),k(`figure`,se,[M(`pre`,null,[M(`code`,{innerHTML:n.value},null,8,ce)]),e.parts.length?(s(),k(`dl`,le,[(s(!0),k(C,null,P(e.parts,e=>(s(),k(C,{key:e.token},[M(`dt`,null,A(e.token),1),M(`dd`,null,A(e.role),1)],64))),128))])):x(``,!0),e.returns?(s(),k(`p`,ue,[r[0]||=M(`span`,{class:`returns-label`},`돌려주는 값`,-1),g(A(e.returns),1)])):x(``,!0),e.desc?(s(),k(`figcaption`,de,A(e.desc),1)):x(``,!0)]))}},[[`__scopeId`,`data-v-264d774b`]]),pe=[`aria-expanded`],me={key:0,class:`range`},he={class:`chevron`},ge={class:`lecture-body`},_e={key:0,class:`intro`},ve=[`innerHTML`],ye=[`innerHTML`],be={key:1,class:`points`},xe=[`innerHTML`],Se={key:2,class:`syntax`},Ce=K({__name:`LectureBrief`,props:{lecture:{type:Object,required:!0},studyRange:{type:String,default:``},open:{type:Boolean,default:!1}},setup(e){let t=y(e.open);return(n,r)=>(s(),k(`section`,{class:h([`lecture`,{closed:!t.value}])},[M(`button`,{class:`lecture-toggle`,type:`button`,"aria-expanded":t.value,onClick:r[0]||=e=>t.value=!t.value},[r[1]||=M(`span`,{class:`marker`},`📖`,-1),r[2]||=M(`span`,{class:`toggle-title`},`관련 강의 내용`,-1),e.studyRange?(s(),k(`span`,me,`교안 `+A(e.studyRange),1)):x(``,!0),M(`span`,he,A(t.value?`−`:`+`),1)],8,pe),j(M(`div`,ge,[e.lecture.intro?(s(),k(`p`,_e,[r[3]||=M(`span`,{class:`intro-label`},`쉽게 말하면`,-1),M(`span`,{innerHTML:_(q)(e.lecture.intro)},null,8,ve)])):x(``,!0),M(`p`,{class:`lead`,innerHTML:_(q)(e.lecture.summary)},null,8,ye),e.lecture.points?.length?(s(),k(`ul`,be,[(s(!0),k(C,null,P(e.lecture.points,e=>(s(),k(`li`,{key:e,innerHTML:_(q)(e)},null,8,xe))),128))])):x(``,!0),e.lecture.syntax?.length?(s(),k(`div`,Se,[r[4]||=M(`p`,{class:`syntax-label`},`문법 정리`,-1),(s(!0),k(C,null,P(e.lecture.syntax,e=>(s(),v(fe,{key:e.code,code:e.code,desc:e.desc,parts:e.parts??[],returns:e.returns??``},null,8,[`code`,`desc`,`parts`,`returns`]))),128))])):x(``,!0)],512),[[R,t.value]])],2))}},[[`__scopeId`,`data-v-dd03eb2e`]]),we=[`aria-expanded`,`aria-label`,`title`],Te={key:0,class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`,"aria-hidden":`true`},Ee={key:1,class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},De={class:`help-popover`,role:`note`},Oe={class:`help-text`},J=K({__name:`ConceptHelp`,props:{text:{type:String,required:!0}},setup(e){let t=y(!1),n=y(null),r=e=>{t.value&&n.value&&!n.value.contains(e.target)&&(t.value=!1)},i=e=>{e.key===`Escape`&&(t.value=!1)};return l(()=>{document.addEventListener(`mousedown`,r),document.addEventListener(`keydown`,i)}),w(()=>{document.removeEventListener(`mousedown`,r),document.removeEventListener(`keydown`,i)}),(r,i)=>(s(),k(`span`,{ref_key:`root`,ref:n,class:`concept-help`},[M(`button`,{class:h([`help-button`,{open:t.value}]),type:`button`,"aria-expanded":t.value,"aria-label":t.value?`개념 설명 닫기`:`개념 설명 보기`,title:t.value?`닫기`:`개념 설명 보기`,onClick:i[0]||=e=>t.value=!t.value},[t.value?(s(),k(`svg`,Te,[...i[1]||=[M(`path`,{d:`M18 6 6 18M6 6l12 12`},null,-1)]])):(s(),k(`svg`,Ee,[...i[2]||=[M(`circle`,{cx:`12`,cy:`12`,r:`9.5`},null,-1),M(`path`,{d:`M12 16.5v-5`},null,-1),M(`circle`,{cx:`12`,cy:`8`,r:`1.15`,fill:`currentColor`,stroke:`none`},null,-1)]]))],10,we),j(M(`span`,De,[i[3]||=M(`span`,{class:`help-arrow`,"aria-hidden":`true`},null,-1),i[4]||=M(`span`,{class:`help-label`},`개념 설명`,-1),M(`span`,Oe,A(e.text),1)],512),[[R,t.value]])],512))}},[[`__scopeId`,`data-v-46feb191`]]),ke=e({default:()=>He}),Ae={class:`practice-card`},je={class:`practice-area`},Me=[`disabled`],Ne={class:`practice-area`},Pe={class:`practice-area`},Fe={class:`input-group`},Ie={class:`practice-area`},Le={class:`practice-area`},Re=`https://vuejs.org`,ze=`https://vuejs.org/images/logo.png`,Be=`user-profile-card`,Ve=`https://vuejs.org/images/logo.png`,He=K({__name:`BindPractice`,setup(e){let t=y(!0),n=y(!1),r=y(`dark-box`),i=y(`purple`),a=y(200),c={height:`80px`,color:`white`,backgroundColor:`#42b883`,transition:`all 0.3s ease`};return(e,l)=>(s(),k(`section`,Ae,[M(`div`,je,[M(`h2`,null,[l[4]||=g(` v-bind 디렉티브 기본 (축약형: 콜론) `,-1),N(J,{text:`v-bind는 href, src, disabled 같은 HTML 속성에 JavaScript 데이터를 연결합니다. 축약형은 : 입니다.`})]),M(`a`,{href:Re,target:`_blank`},`Vue 공식 사이트`),M(`img`,{src:ze,alt:`Vue 로고`,width:`80`}),M(`button`,{disabled:t.value},`잠기는 버튼`,8,Me),M(`button`,{onClick:l[0]||=e=>t.value=!t.value},` 잠금 상태 변경 `)]),M(`div`,Ne,[M(`h2`,null,[l[5]||=g(` v-bind 디렉티브 고급 (클래스 바인딩) `,-1),N(J,{text:`:class는 조건에 따라 CSS 클래스를 추가하거나 제거합니다. 객체와 배열 형식을 사용할 수 있습니다.`})]),M(`p`,{class:h({danger:n.value})},` 현재 경고 상태: `+A(n.value),3),M(`button`,{onClick:l[1]||=e=>n.value=!n.value},`경고 상태 변경`),M(`div`,{class:h([r.value,n.value?`red-border`:`gray-border`])},` 배열로 클래스를 조합한 상자 `,2)]),M(`div`,Pe,[M(`h2`,null,[l[6]||=g(` v-bind 디렉티브 고급 (스타일 바인딩) `,-1),N(J,{text:`:style은 색상이나 크기 같은 인라인 CSS 값을 데이터와 직접 연결합니다. 객체와 배열 형식을 지원합니다.`})]),M(`p`,{style:o({color:i.value,fontWeight:`bold`})},` 동적 스타일이 적용된 글자 `,4),M(`button`,{onClick:l[2]||=e=>i.value=i.value===`purple`?`blue`:`purple`},` 글자색 변경 `),M(`div`,Fe,[l[7]||=M(`label`,{for:`box-width`},`박스 너비: `,-1),j(M(`input`,{id:`box-width`,"onUpdate:modelValue":l[3]||=e=>a.value=e,type:`number`,step:`50`},null,512),[[I,a.value,void 0,{number:!0}]])]),M(`div`,{class:`size-box`,style:o([c,{width:a.value+`px`}])},A(a.value)+`px `,5)]),M(`div`,Ie,[M(`h2`,null,[l[8]||=g(` Class Binding vs. Style Binding `,-1),N(J,{text:`미리 만든 디자인을 바꿀 때는 :class, 너비처럼 값 자체를 실시간으로 바꿀 때는 :style이 적합합니다.`})]),l[9]||=M(`p`,null,[g(` 미리 만든 디자인을 상태에 따라 바꿀 때는 `),M(`strong`,null,`:class`),g(`를 사용합니다. `)],-1),l[10]||=M(`p`,null,[g(` 너비나 색상 값을 실시간으로 직접 바꿀 때는 `),M(`strong`,null,`:style`),g(`을 사용합니다. `)],-1)]),M(`div`,Le,[M(`h2`,null,[l[11]||=g(` v-bind 디렉티브 고급 (단축 문법) `,-1),N(J,{text:`HTML 속성명과 JavaScript 변수명이 같으면 :src='src'를 :src처럼 줄일 수 있는 Vue 3.4 이상의 문법입니다.`})]),M(`div`,{id:Be},[M(`img`,{src:Ve,alt:`Vue 로고`,width:`50`})])])]))}},[[`__scopeId`,`data-v-e7a49731`]]),Ue=e({default:()=>$e}),We={class:`practice-card`},Ge={key:0},Ke={key:1},qe={key:2,style:{color:`green`,"font-weight":`bold`}},Je={key:3,style:{color:`blue`}},Ye={key:4,style:{color:`orange`}},Xe={key:5,style:{color:`red`,"font-weight":`bold`}},Ze={class:`box`},Qe={class:`practice-area comparison-area`},$e=K({__name:`ConditionalPractice`,setup(e){let t=y(!1),n=y(85),r=y(!0);return(e,i)=>(s(),k(`section`,We,[M(`h2`,null,[i[3]||=g(` v-if, v-else-if, v-else 디렉티브 학습 `,-1),N(J,{text:`조건에 따라 DOM 요소를 생성하거나 제거합니다. 여러 조건은 v-else-if와 v-else로 이어서 표현합니다.`})]),i[8]||=M(`h3`,null,`1) 기본 로그인 상태 스위치`,-1),t.value?(s(),k(`p`,Ge,`환영합니다! 회원 전용 화면입니다.`)):(s(),k(`p`,Ke,`로그인이 필요합니다. 먼저 로그인해 주세요.`)),M(`button`,{onClick:i[0]||=e=>t.value=!t.value},A(t.value?`로그아웃 하기`:`로그인 하기`),1),i[9]||=M(`br`,null,null,-1),i[10]||=M(`h3`,null,`2) 성적별 학점 등급 측정 (다중 조건문)`,-1),i[11]||=M(`label`,null,`현재 점수 입력: `,-1),j(M(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`number`,min:`0`,max:`100`,step:`5`},null,512),[[I,n.value]]),i[12]||=M(`br`,null,null,-1),n.value>=90?(s(),k(`div`,qe,` 합격 등급: A 학점 (훌륭합니다!) `)):n.value>=80?(s(),k(`div`,Je,` 합격 등급: B 학점 (양호합니다.) `)):n.value>=70?(s(),k(`div`,Ye,` 합격 등급: C 학점 (조금 더 분발하세요.) `)):(s(),k(`div`,Xe,` 합격 등급: F 학점 (재시험 대상입니다.) `)),M(`h2`,null,[i[4]||=g(` v-show 디렉티브 학습 `,-1),N(J,{text:`v-show는 요소를 DOM에 유지하면서 CSS display 속성으로 보이거나 숨깁니다.`})]),M(`button`,{onClick:i[2]||=e=>r.value=!r.value},` 화면 토글하기 `),i[13]||=M(`br`,null,null,-1),j(M(`div`,Ze,[...i[5]||=[M(`p`,null,`v-show 상자`,-1),M(`p`,null,` 조건이 false가 되면 CSS display: none이 붙습니다. `,-1)]],512),[[R,r.value]]),M(`div`,Qe,[M(`h2`,null,[i[6]||=g(` v-if vs. v-show `,-1),N(J,{text:`전환이 드물면 DOM을 생성·제거하는 v-if, 자주 열고 닫으면 display만 바꾸는 v-show가 적합합니다.`})]),i[7]||=M(`p`,null,` v-if는 DOM을 생성·제거하고, v-show는 DOM을 유지한 채 CSS display 속성으로 표시 여부를 바꿉니다. `,-1)])]))}},[[`__scopeId`,`data-v-e3392bd5`]]),et=e({default:()=>pt}),tt={class:`practice-card`},nt={class:`practice-area`},rt={class:`practice-area`},it={class:`practice-area`},at=[`disabled`],ot=[`disabled`],st={class:`practice-area`},ct={class:`color-buttons`},lt=[`onClick`],ut={class:`practice-area`},dt={class:`modifier-stop-area`},ft={class:`modifier-chain-area`},pt=K({__name:`EventPractice`,setup(e){let t=y(0),n=y(``),i=y(!1),a=y(``),c=y(``),l=y(`transparent`),u=y(0),d=y(!1),f=y(0),p=y(0),m=y(0),h=()=>{window.alert(`함수가 성공적으로 호출되었습니다!`)},_=e=>{n.value=`창 좌표: X=${e.clientX}, Y=${e.clientY} / 문서 좌표: X=${e.pageX}, Y=${e.pageY}`},v=()=>{i.value||(window.addEventListener(`click`,_),i.value=!0,n.value=`좌표 확인 중: 브라우저 창 안을 클릭해 보세요.`)},b=()=>{window.removeEventListener(`click`,_),i.value=!1},x=(e,t)=>{a.value=`대상: ${e} / 클릭된 태그: ${t.target.tagName}`},S=[{name:`빨강`,css:`#e2564a`},{name:`초록`,css:`#2f8f5b`},{name:`파랑`,css:`#3a6ea8`}],w=(e,t)=>{let n=window.getComputedStyle(t.currentTarget).backgroundColor;l.value=n,c.value=`선택한 색상: ${e} / CSS 값: ${n}`},T=e=>{let t=e.currentTarget.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.round(n*360);u.value=n*100,l.value=`hsl(${r}, 100%, 50%)`,c.value=`무지개 바 선택 / HSL 값: hsl(${r}, 100%, 50%)`},E=e=>{d.value=!0,e.currentTarget.setPointerCapture(e.pointerId),T(e)},D=e=>{d.value&&T(e)},O=e=>{d.value&&(T(e),d.value=!1,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},j=()=>{window.alert(`수식어 덕분에 네이버로 이동하지 않고 함수만 실행됩니다!`)},F=()=>{window.alert(`부모 박스가 클릭되었습니다!`)},I=()=>{window.alert(`1번 자식 클릭!`)},R=()=>{window.alert(`2번 자식(나만 켜짐) 클릭!`)},z=()=>{f.value++},B=()=>{p.value++},V=()=>{f.value=0,p.value=0,m.value++};return r(()=>{window.removeEventListener(`click`,_)}),(e,r)=>(s(),k(`section`,tt,[M(`h2`,null,[r[2]||=g(` v-on 이벤트 핸들링 기초 `,-1),N(J,{text:`v-on은 클릭이나 키보드 입력 같은 이벤트를 감지해 코드를 실행합니다. 축약형은 @입니다.`})]),M(`div`,nt,[M(`h3`,null,[r[3]||=g(` 1) 인라인 연산 처리 `,-1),N(J,{text:`Inline Handler는 count++처럼 간단한 JavaScript 표현식을 템플릿 안에서 바로 실행하는 방식입니다.`})]),M(`p`,null,`현재 카운트: `+A(t.value),1),M(`button`,{onClick:r[0]||=e=>t.value++},`1씩 증가`)]),M(`div`,rt,[M(`h3`,null,[r[4]||=g(` 2) 스크립트 함수 호출 `,-1),N(J,{text:`Method Handler는 script에 함수를 정의하고 이벤트에는 함수 이름을 연결하는 방식입니다.`})]),M(`button`,{onClick:h},`알림창 띄우기`)]),M(`div`,it,[M(`h2`,null,[r[5]||=g(` v-on 이벤트 객체($event) 활용 `,-1),N(J,{text:`함수 이름만 전달하면 이벤트 객체가 자동으로 전달됩니다. 다른 값과 이벤트 객체를 함께 넘길 때는 $event를 명시합니다.`})]),M(`p`,null,A(n.value||`좌표 확인 시작 버튼을 눌러주세요.`),1),M(`p`,null,` 현재 상태: `+A(i.value?`좌표 확인 중`:`좌표 확인 중지`),1),M(`p`,null,A(a.value||`태그: 버튼을 클릭해 보세요.`),1),M(`button`,{disabled:i.value,onClick:L(v,[`stop`])},` 좌표 확인 시작 `,8,at),M(`button`,{disabled:!i.value,onClick:L(b,[`stop`])},` 좌표 그만 확인하기 `,8,ot),M(`button`,{onClick:r[1]||=e=>x(`회원A`,e)},` 회원 정보와 태그 확인 `)]),M(`div`,st,[M(`h2`,null,[r[6]||=g(` 클릭한 색상 알아내기 `,-1),N(J,{text:`색상 이름은 함수 인자로 전달하고, 실제 CSS 배경색은 $event의 currentTarget에서 읽습니다.`})]),M(`div`,{class:`rainbow-bar`,role:`button`,tabindex:`0`,"aria-label":`무지개 색상 선택`,onPointerdown:E,onPointermove:D,onPointerup:O,onPointercancel:O},[M(`span`,{class:`rainbow-marker`,style:o({left:u.value+`%`})},null,4)],32),M(`div`,ct,[(s(),k(C,null,P(S,e=>M(`button`,{key:e.name,type:`button`,class:`color-button`,style:o({backgroundColor:e.css}),onClick:t=>w(e.name,t)},A(e.name),13,lt)),64))]),M(`p`,null,A(c.value||`무지개 바나 색상 버튼을 클릭해 보세요.`),1),M(`div`,{class:`selected-color`,style:o({backgroundColor:l.value})},null,4)]),M(`div`,ut,[M(`h2`,null,[r[7]||=g(` 이벤트 수식어(Modifiers) 학습 `,-1),N(J,{text:`이벤트 수식어는 이벤트의 기본 동작이나 전파 방식을 간단한 접미어로 제어합니다.`})]),M(`h3`,null,[r[8]||=g(` 1) .prevent (기본 동작 막기) `,-1),N(J,{text:`.prevent는 preventDefault()와 같으며 링크 이동이나 폼 제출 후 새로고침 같은 기본 동작을 막습니다.`})]),M(`a`,{href:`https://www.naver.com`,onClick:L(j,[`prevent`])},` 네이버 링크 `),M(`div`,dt,[M(`h3`,null,[r[9]||=g(` 2) .stop (이벤트 버블링 막기) `,-1),N(J,{text:`.stop은 stopPropagation()과 같으며 자식에서 발생한 이벤트가 부모로 올라가는 것을 막습니다.`})]),M(`div`,{class:`modifier-box`,onClick:F},[r[10]||=M(`p`,null,`부모 영역 (클릭 시 alert 발동)`,-1),M(`button`,{onClick:I},` 버블링 발생 버튼 `),M(`button`,{onClick:L(R,[`stop`])},` 버블링 차단 버튼 `)])]),M(`div`,ft,[M(`h3`,null,[r[11]||=g(` 3) .prevent.stop.once 연결하기 `,-1),N(J,{text:`첫 클릭에는 기본 동작 방지, 버블링 차단, 한 번만 실행이 함께 적용됩니다. once로 리스너가 제거된 뒤에는 나머지 수식어도 더 이상 실행되지 않습니다.`})]),M(`div`,{class:`modifier-box`,onClick:B},[M(`p`,null,`부모 클릭 횟수: `+A(p.value),1),M(`p`,null,`자식 함수 실행 횟수: `+A(f.value),1),(s(),k(`input`,{key:m.value,type:`checkbox`,onClickOnce:L(z,[`prevent`,`stop`])},null,32)),r[12]||=g(` 체크박스를 클릭해 보세요. `,-1)]),r[13]||=M(`p`,{class:`modifier-guide`},` 첫 클릭은 체크되지 않고 부모 클릭도 발생하지 않으며, 자식 함수만 한 번 실행됩니다. 두 번째 클릭부터는 once로 리스너가 제거되어 체크와 부모 클릭이 다시 동작합니다. `,-1),M(`button`,{onClick:L(V,[`stop`])},` 연결 수식어 실습 초기화 `)])])]))}},[[`__scopeId`,`data-v-13063ffe`]]),mt=e({default:()=>_t}),ht={class:`practice-card`},gt={class:`practice-area lists`},_t=K({__name:`ForPractice`,setup(e){let t=y([`사과`,`바나나`,`딸기`]),n=y({name:`홍길동`,age:25,role:`개발자`}),r=y([{id:`prod-101`,name:`아이폰`},{id:`prod-102`,name:`갤럭시`}]);return(e,i)=>(s(),k(`section`,ht,[M(`h2`,null,[i[0]||=g(` v-for 디렉티브 학습 `,-1),N(J,{text:`v-for는 배열이나 객체의 항목을 반복해서 화면에 출력합니다. 각 항목에는 가능한 한 고유한 :key를 지정합니다.`})]),M(`div`,gt,[M(`div`,null,[i[1]||=M(`h3`,null,`배열 반복`,-1),M(`ul`,null,[(s(!0),k(C,null,P(t.value,(e,t)=>(s(),k(`li`,{key:e},A(t+1)+`번 과일: `+A(e),1))),128))])]),M(`div`,null,[i[2]||=M(`h3`,null,`객체 반복`,-1),M(`ul`,null,[(s(!0),k(C,null,P(n.value,(e,t,n)=>(s(),k(`li`,{key:t},` [`+A(n)+`] `+A(t)+`: `+A(e),1))),128))])]),M(`div`,null,[i[3]||=M(`h3`,null,`객체 배열 반복`,-1),M(`ul`,null,[(s(!0),k(C,null,P(r.value,e=>(s(),k(`li`,{key:e.id},A(e.name),1))),128))])])])]))}},[[`__scopeId`,`data-v-e533b99b`]]),vt=e({default:()=>wt}),yt={class:`practice-card`},bt={class:`practice-area`},xt={class:`practice-area`},St=[`innerHTML`],Ct={class:`practice-area`},Y=`이 글자는 <span style="color: red; font-weight: bold;">빨간색 굵은 글자</span>이다.`,wt=K({__name:`HtmlTextPractice`,setup(e){let t=y(``),n=y(``);function r(){n.value=t.value}return(e,i)=>(s(),k(`section`,yt,[M(`div`,bt,[M(`h2`,null,[i[1]||=g(` v-html 디렉티브 학습 `,-1),N(J,{text:`v-html은 문자열에 들어 있는 HTML 태그를 실제 HTML 요소로 해석해 출력합니다.`})]),i[2]||=M(`h3`,null,`일반 보간법 {{ }} 사용 결과:`,-1),M(`p`,null,A(Y)),i[3]||=M(`br`,null,null,-1),i[4]||=M(`h3`,null,`v-html 디렉티브 사용 결과:`,-1),M(`p`,{innerHTML:Y})]),M(`div`,xt,[M(`h2`,null,[i[5]||=g(` v-html XSS 학습 `,-1),N(J,{text:`XSS는 악성 스크립트가 다른 사용자의 브라우저에서 실행되는 공격입니다. 사용자 입력을 v-html에 직접 연결하면 위험합니다.`})]),j(M(`input`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,placeholder:`내용을 입력하세요`},null,512),[[I,t.value]]),M(`button`,{onClick:r},`확인`),M(`div`,{innerHTML:n.value},null,8,St)]),i[7]||=M(`p`,{class:`warning`},` 위 코드는 XSS 위험을 확인하기 위한 학습용 예제입니다. 실제 서비스에서는 사용자 입력을 v-html로 직접 출력하지 않습니다. `,-1),M(`div`,Ct,[M(`h2`,null,[i[6]||=g(` v-text 디렉티브 학습 `,-1),N(J,{text:`v-text는 값을 일반 텍스트로 출력합니다. HTML 태그가 포함되어 있어도 실제 태그로 해석하지 않습니다.`})]),M(`p`,{textContent:Y})])]))}},[[`__scopeId`,`data-v-860fa86e`]]),Tt=e({default:()=>Wt}),Et={class:`practice-card`},Dt={class:`practice-area`},Ot={class:`form-item`},kt={class:`form-item`},At=[`value`],jt={class:`practice-area`},Mt={class:`form-item`},Nt={class:`form-item`},Pt={class:`form-item`},Ft={class:`option-group`},It={class:`form-item`},Lt={class:`option-group`},Rt={class:`form-item`},zt={class:`practice-area`},Bt={class:`form-item`},Vt={class:`form-item`},Ht={class:`form-item`},Ut={class:`form-item`},Wt=K({__name:`ModelPractice`,setup(e){let t=y(``),n=y(``),r=y(``),i=y(!1),a=y([]),o=y(``),c=y(``),l=y(``),u=y(``),d=y(``),f=y(``);return(e,p)=>(s(),k(`section`,Et,[M(`div`,Dt,[M(`h2`,null,[p[14]||=g(` v-model 양방향 데이터 바인딩 `,-1),N(J,{text:`v-model은 입력 요소의 값과 Vue 데이터를 연결해 한쪽이 바뀌면 다른 쪽도 자동으로 반영되게 합니다.`})]),M(`div`,Ot,[p[16]||=M(`h3`,null,`1) v-model 축약 문법 (양방향)`,-1),j(M(`input`,{"onUpdate:modelValue":p[0]||=e=>t.value=e,type:`text`,placeholder:`여기에 입력하세요`},null,512),[[I,t.value]]),M(`p`,null,[p[15]||=g(` 입력된 값: `,-1),M(`strong`,null,A(t.value),1)])]),M(`div`,kt,[p[18]||=M(`h3`,null,`2) v-model의 내부 작동 원리 (단방향 + 이벤트)`,-1),M(`input`,{value:n.value,type:`text`,placeholder:`원리 파악용 입력창`,onInput:p[1]||=e=>n.value=e.target.value},null,40,At),M(`p`,null,[p[17]||=g(` 입력된 값: `,-1),M(`strong`,null,A(n.value),1)])])]),M(`div`,jt,[M(`h2`,null,[p[19]||=g(` 모든 HTML Form 요소와 v-model 매핑 `,-1),N(J,{text:`Form 요소마다 v-model이 저장하는 값의 형태가 다릅니다. 단일 체크박스는 Boolean, 다중 체크박스는 Array로 시작합니다.`})]),M(`div`,Mt,[p[20]||=M(`h3`,null,`1) Textarea (장문 텍스트)`,-1),j(M(`textarea`,{"onUpdate:modelValue":p[2]||=e=>r.value=e,placeholder:`의견을 남겨주세요`},null,512),[[I,r.value]]),M(`p`,null,`데이터 상태: `+A(r.value),1)]),M(`div`,Nt,[p[22]||=M(`h3`,null,`2) 단일 Checkbox (동의 여부)`,-1),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[3]||=e=>i.value=e,type:`checkbox`},null,512),[[F,i.value]]),p[21]||=g(` 약관에 동의합니다. `,-1)]),M(`p`,null,`데이터 상태: `+A(i.value),1)]),M(`div`,Pt,[p[26]||=M(`h3`,null,`3) 다중 Checkbox (복수 선택 → 배열에 저장)`,-1),M(`div`,Ft,[M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[4]||=e=>a.value=e,type:`checkbox`,value:`사과`},null,512),[[F,a.value]]),p[23]||=g(` 사과 `,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[5]||=e=>a.value=e,type:`checkbox`,value:`바나나`},null,512),[[F,a.value]]),p[24]||=g(` 바나나 `,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[6]||=e=>a.value=e,type:`checkbox`,value:`딸기`},null,512),[[F,a.value]]),p[25]||=g(` 딸기 `,-1)])]),M(`p`,null,`데이터 상태 (배열): `+A(a.value),1)]),M(`div`,It,[p[29]||=M(`h3`,null,`4) Radio (단일 선택)`,-1),M(`div`,Lt,[M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[7]||=e=>o.value=e,type:`radio`,value:`남성`},null,512),[[z,o.value]]),p[27]||=g(` 남성 `,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":p[8]||=e=>o.value=e,type:`radio`,value:`여성`},null,512),[[z,o.value]]),p[28]||=g(` 여성 `,-1)])]),M(`p`,null,`데이터 상태: `+A(o.value),1)]),M(`div`,Rt,[p[31]||=M(`h3`,null,`5) Select (드롭다운 선택)`,-1),j(M(`select`,{"onUpdate:modelValue":p[9]||=e=>c.value=e},[...p[30]||=[M(`option`,{value:``},`-- 선택하세요 --`,-1),M(`option`,{value:`tesla`},`테슬라`,-1),M(`option`,{value:`hyundai`},`현대자동차`,-1),M(`option`,{value:`bmw`},`BMW`,-1)]],512),[[B,c.value]]),M(`p`,null,`데이터 상태: `+A(c.value),1)])]),M(`div`,zt,[M(`h2`,null,[p[32]||=g(` v-model 수식어(Modifiers) 활용 `,-1),N(J,{text:`v-model 수식어는 값의 반영 시점이나 저장 형태를 간단히 제어합니다. .lazy, .number, .trim을 단독 또는 연결해서 사용할 수 있습니다.`})]),M(`div`,Bt,[p[34]||=M(`h3`,null,`1) .lazy 수식어 (change 이벤트 시점 반영)`,-1),j(M(`input`,{"onUpdate:modelValue":p[10]||=e=>l.value=e,type:`text`,placeholder:`입력 후 Enter 또는 외부 클릭`},null,512),[[I,l.value,void 0,{lazy:!0}]]),M(`p`,null,[p[33]||=g(` 실시간이 아닌 확정된 값: `,-1),M(`strong`,null,A(l.value),1)])]),M(`div`,Vt,[p[37]||=M(`h3`,null,`2) .number 수식어 (Number 타입 자동 형변환)`,-1),j(M(`input`,{"onUpdate:modelValue":p[11]||=e=>u.value=e,type:`text`,placeholder:`나이를 입력하세요`},null,512),[[I,u.value,void 0,{number:!0}]]),M(`p`,null,[p[35]||=g(` 입력된 값: `,-1),M(`strong`,null,A(u.value),1)]),M(`p`,null,[p[36]||=g(` 데이터 타입: `,-1),M(`strong`,null,A(typeof u.value),1)])]),M(`div`,Ht,[p[40]||=M(`h3`,null,`3) .trim 수식어 (양끝 공백 자동 제거)`,-1),j(M(`input`,{"onUpdate:modelValue":p[12]||=e=>d.value=e,type:`text`,placeholder:`앞뒤 공백을 포함해 입력해 보세요`},null,512),[[I,d.value,void 0,{trim:!0}]]),M(`p`,null,[p[38]||=g(` 공백 제거된 값: `,-1),M(`strong`,null,`"`+A(d.value)+`"`,1)]),M(`p`,null,[p[39]||=g(` 문자열 길이: `,-1),M(`strong`,null,A(d.value.length),1)])]),M(`div`,Ut,[p[43]||=M(`h3`,null,`4) Chaining (수식어 체이닝: .trim.number)`,-1),j(M(`input`,{"onUpdate:modelValue":p[13]||=e=>f.value=e,type:`text`,placeholder:`공백과 숫자를 섞어 입력해 보세요`},null,512),[[I,f.value,void 0,{trim:!0,number:!0}]]),M(`p`,null,[p[41]||=g(` 처리된 값: `,-1),M(`strong`,null,`"`+A(f.value)+`"`,1)]),M(`p`,null,[p[42]||=g(` 데이터 타입: `,-1),M(`strong`,null,A(typeof f.value),1)])])])]))}},[[`__scopeId`,`data-v-208c25e3`]]),Gt=e({default:()=>qt}),Kt={class:`practice-card`},qt={__name:`ReactivityPractice`,setup(e){let t=0,n=y(0),r=y(`hello vue`);return(e,i)=>(s(),k(`section`,Kt,[M(`h2`,null,[i[2]||=g(` 실습 1 — Reactivity와 보간법 `,-1),N(J,{text:`Reactivity는 데이터가 바뀌면 화면도 자동으로 갱신되는 특성이고, 보간법은 {{ }} 안의 값이나 표현식을 화면에 출력하는 문법입니다.`})]),M(`div`,null,[M(`p`,null,`일반 변수: `+A(_(t)),1),M(`button`,{onClick:i[0]||=e=>O(t)?t.value++:t++},`일반 변수 증가`),M(`p`,null,`반응형 변수: `+A(n.value),1),M(`button`,{onClick:i[1]||=e=>n.value++},`반응형 변수 증가`)]),M(`div`,null,[M(`p`,null,`원래 문자열: `+A(r.value),1),M(`p`,null,`대문자 변환: `+A(r.value.toUpperCase()),1),M(`p`,null,A(`Random number: `+Math.ceil(Math.random()*100)),1)])]))}},Jt=e({default:()=>tn}),Yt={class:`practice-card`},Xt={class:`practice-area`},Zt={class:`practice-area`},Qt={class:`practice-area`},$t={class:`practice-area`},en={class:`button-group`},tn=K({__name:`SpecialDirectivePractice`,setup(e){let t=y(`안녕하세요!`),n=y(1),r=y(`홍길동`),a=y(20);return(e,o)=>(s(),k(`section`,Yt,[M(`div`,Xt,[M(`h2`,null,[o[5]||=g(` v-pre 디렉티브 학습 `,-1),N(J,{text:`v-pre는 해당 요소와 자식의 Vue 문법을 해석하지 않고 작성된 내용을 그대로 표시합니다.`})]),M(`p`,null,`일반 출력: `+A(t.value),1),o[6]||=M(`p`,null,`v-pre 출력: {{ message }}`,-1)]),M(`div`,Zt,[M(`h2`,null,[o[7]||=g(` v-cloak 디렉티브 학습 `,-1),N(J,{text:`v-cloak은 Vue가 준비되기 전에 {{ message }} 같은 템플릿 원문이 잠깐 보이는 것을 CSS와 함께 방지합니다.`})]),M(`p`,null,`Vue가 준비되면 표시: `+A(t.value),1)]),M(`div`,Qt,[M(`h2`,null,[o[8]||=g(` v-once 디렉티브 학습 `,-1),N(J,{text:`v-once는 최초 한 번만 렌더링하고 이후 데이터가 변경되어도 해당 화면을 갱신하지 않습니다.`})]),M(`p`,null,`일반 값: `+A(n.value),1),o[0]||(i(-1,!0),(o[0]=M(`p`,null,[g(`최초 값으로 고정: `+A(n.value),1)])).cacheIndex=0,i(1),o[0]),M(`button`,{onClick:o[1]||=e=>n.value++},`숫자 증가`)]),M(`div`,$t,[M(`h2`,null,[o[9]||=g(` v-memo 디렉티브 학습 `,-1),N(J,{text:`v-memo는 지정한 의존성이 바뀔 때만 영역을 다시 렌더링합니다. 큰 목록 등 실제 성능 문제가 있는 경우에 제한적으로 사용합니다.`})]),D([r.value,a.value],()=>(s(),k(`div`,{class:`memo-box`},[M(`p`,null,`이름: `+A(r.value),1),M(`p`,null,`나이: `+A(a.value),1)])),o,2),M(`div`,en,[M(`button`,{onClick:o[3]||=e=>r.value=r.value===`홍길동`?`이순신`:`홍길동`},` 이름 변경 `),M(`button`,{onClick:o[4]||=e=>a.value++},`나이 증가`)])])]))}},[[`__scopeId`,`data-v-0ad0fb48`]]),nn={type:`button`,class:`base-button`},rn=K({__name:`BaseButton`,props:{label:{type:String,default:`기본 버튼`}},setup(e){return(t,n)=>(s(),k(`button`,nn,A(e.label),1))}},[[`__scopeId`,`data-v-2e39ae80`]]),an=e({default:()=>dn}),on={class:`practice-card`},sn={class:`practice-area`},cn={class:`row`},ln={class:`practice-area`},un={class:`row`},dn=K({__name:`ComponentRegistrationPractice`,setup(e){return(e,t)=>{let n=m(`GlobalBadge`);return s(),k(`section`,on,[M(`h2`,null,[t[0]||=g(` Component 등록 — 지역 vs 전역 `,-1),N(J,{text:`지역 등록은 쓰는 파일에서 import 하는 방식이라 어디서 쓰는지 코드로 드러납니다. 전역 등록은 main.js에서 app.component()로 한 번만 해두면 어디서든 import 없이 쓸 수 있지만, 안 쓰는 컴포넌트까지 번들에 들어갑니다.`})]),M(`div`,sn,[t[1]||=M(`h3`,null,`1) 지역(Local) 등록 — import 한 줄이 등록`,-1),t[2]||=M(`p`,{class:`explain`},[g(` 아래 두 버튼은 `),M(`b`,null,`같은 컴포넌트`),g(`입니다. 등록한 컴포넌트는 PascalCase와 kebab-case 두 가지로 부를 수 있습니다. `)],-1),M(`div`,cn,[N(rn,{label:`PascalCase 호출`}),N(rn,{label:`kebab-case 호출`})]),t[3]||=M(`pre`,{class:`code`},`import BaseButton from './BaseButton.vue'

<BaseButton />
<base-button></base-button>`,-1)]),M(`div`,ln,[t[4]||=M(`h3`,null,`2) 전역(Global) 등록 — import가 없다`,-1),t[5]||=M(`p`,{class:`explain`},[g(` 아래 배지는 이 파일에서 `),M(`b`,null,`import 하지 않았습니다.`),g(` main.js에서 한 번 등록해 둔 덕분에 바로 쓸 수 있습니다. `)],-1),M(`div`,un,[N(n),N(n,{text:`어디서든 사용 가능`})]),t[6]||=M(`pre`,{class:`code`},`// main.js
app.component('GlobalBadge', GlobalBadge)

// 이 파일 — import 없이 바로
<GlobalBadge />`,-1)]),t[7]||=S(`<div class="practice-area" data-v-369125df><h3 data-v-369125df>3) 언제 무엇을 쓸까</h3><table class="compare" data-v-369125df><thead data-v-369125df><tr data-v-369125df><th data-v-369125df></th><th data-v-369125df>지역 등록</th><th data-v-369125df>전역 등록</th></tr></thead><tbody data-v-369125df><tr data-v-369125df><td data-v-369125df>등록 위치</td><td data-v-369125df>쓰는 파일에서 import</td><td data-v-369125df>main.js 한 곳</td></tr><tr data-v-369125df><td data-v-369125df>사용 범위</td><td data-v-369125df>그 파일 안에서만</td><td data-v-369125df>앱 전체</td></tr><tr data-v-369125df><td data-v-369125df>의존 관계</td><td data-v-369125df>코드에 드러남</td><td data-v-369125df>어디서 왔는지 안 보임</td></tr><tr data-v-369125df><td data-v-369125df>번들 크기</td><td data-v-369125df>쓰는 것만 포함</td><td data-v-369125df>안 써도 포함</td></tr><tr data-v-369125df><td data-v-369125df>적합한 경우</td><td data-v-369125df><b data-v-369125df>대부분의 컴포넌트</b></td><td data-v-369125df>앱 전반에서 반복되는 소수</td></tr></tbody></table></div>`,1)])}}},[[`__scopeId`,`data-v-369125df`]]),fn={class:`counter-display`},pn=K({__name:`LifecycleChild`,setup(e){let t=y(0),n=null;return console.log(`1. [setup] 컴포넌트가 메모리에 생성되었습니다. (DOM 접근 불가능)`),l(()=>{console.log(`2. [onMounted] 화면에 완벽히 부착되었습니다! (API 호출/DOM 조작 적기)`),n=setInterval(()=>{t.value++},3e3)}),a(()=>{console.log(`3. [onUpdated] 데이터가 변경되어 화면을 새로 그렸습니다. (현재 count: ${t.value})`)}),r(()=>{clearInterval(n),console.log(`4. [onUnmounted] 컴포넌트가 소멸했습니다. 타이머 청소 완료!`)}),(e,n)=>(s(),k(C,null,[n[1]||=M(`h3`,null,`⏱️ 라이프사이클 훅 흐름 탐색기`,-1),M(`div`,fn,[M(`p`,null,`실시간 타이머 카운트: `+A(t.value),1),M(`button`,{onClick:n[0]||=e=>t.value++},`수동으로 숫자 올리기`)])],64))}},[[`__scopeId`,`data-v-4c2f5f04`]]),mn=e({default:()=>_n}),hn={class:`practice-card`},gn={key:1,class:`gone`},_n=K({__name:`LifecyclePractice`,setup(e){let t=y(!0);return(e,n)=>(s(),k(`section`,hn,[M(`h2`,null,[n[1]||=g(` Lifecycle Hook — 생성부터 소멸까지 `,-1),N(J,{text:`컴포넌트는 생성 → 부착(mount) → 갱신(update) → 소멸(unmount)의 생애를 거칩니다. 각 시점에 Vue가 불러주는 함수가 Lifecycle Hook입니다. 브라우저 콘솔(F12)을 열고 아래 버튼으로 컴포넌트를 껐다 켜면 네 단계가 순서대로 찍힙니다.`})]),n[2]||=M(`p`,{class:`hint`},`브라우저 콘솔(F12)을 열어두고 버튼을 눌러 보세요.`,-1),M(`button`,{class:`toggle-btn`,onClick:n[0]||=e=>t.value=!t.value},A(t.value?`🛑 실습 컴포넌트 파괴하기 (v-if="false")`:`🟢 실습 컴포넌트 다시 살리기`),1),n[3]||=M(`hr`,null,null,-1),t.value?(s(),v(pn,{key:0})):(s(),k(`p`,gn,`컴포넌트가 소멸했습니다. 콘솔에서 타이머 정리 로그를 확인해 보세요.`))]))}},[[`__scopeId`,`data-v-d955f165`]]),vn={class:`child-container`},yn=K({__name:`PropsEmitsChild`,props:{parentData:{type:String,required:!0}},emits:[`update-request`],setup(e,{emit:t}){let n=t,r=()=>{n(`update-request`,`Child에서 가공한 새로운 데이터`)};return(t,n)=>(s(),k(`div`,vn,[n[1]||=M(`p`,{class:`role`},`하위 컴포넌트 (Child)`,-1),M(`p`,null,[n[0]||=g(` 수신된 Props 데이터: `,-1),M(`strong`,null,A(e.parentData),1)]),M(`button`,{onClick:r},`상위 컴포넌트로 갱신 요청 (Emit)`)]))}},[[`__scopeId`,`data-v-e98cd097`]]),bn=e({default:()=>wn}),xn={class:`practice-card`},Sn={class:`parent-container`},Cn={class:`state`},wn=K({__name:`PropsEmitsPractice`,setup(e){let t=y(`Parent 초기 메시지`),n=e=>{t.value=e};return(e,r)=>(s(),k(`section`,xn,[M(`h2`,null,[r[0]||=g(` Props & Emits — 부모와 자식의 대화 `,-1),N(J,{text:`데이터는 부모 → 자식 한 방향으로만 흐릅니다(Props). 자식이 값을 바꾸고 싶으면 직접 고치지 않고 부모에게 '바꿔 달라'고 신호를 보냅니다(Emits). 실제로 값을 바꾸는 주체는 언제나 데이터를 가진 부모입니다.`})]),M(`div`,Sn,[r[2]||=M(`p`,{class:`role`},`상위 컴포넌트 (Parent)`,-1),M(`p`,Cn,[r[1]||=g(` 현재 로컬 데이터(State): `,-1),M(`strong`,null,A(t.value),1)]),N(yn,{"parent-data":t.value,onUpdateRequest:n},null,8,[`parent-data`])])]))}},[[`__scopeId`,`data-v-cfac9a78`]]),Tn={class:`node child`},En={class:`field`},Dn={class:`val`},On=K({__name:`FlowChild`,props:{message:{type:String,required:!0}},emits:[`reply`],setup(e,{emit:t}){let n=t;return(t,r)=>(s(),k(`div`,Tn,[r[2]||=M(`p`,{class:`node-role`},`자식 (Child)`,-1),M(`p`,En,[r[1]||=M(`span`,{class:`key`},`props.message`,-1),M(`span`,Dn,A(e.message||`(빈 값)`),1)]),M(`button`,{onClick:r[0]||=e=>n(`reply`,`자식이 보낸 인사 👋`)},` 부모에게 신호 보내기 (emit) `)]))}},[[`__scopeId`,`data-v-8ceed664`]]),kn=e({default:()=>Vn}),An={class:`practice-card`},jn={class:`flow`},Mn={class:`node parent`},Nn={class:`field`},Pn=[`value`],Fn={class:`field`},In={class:`val`},Ln={class:`arrows`},Rn={class:`log`},zn={key:0,class:`log-empty`},Bn={class:`log-dir`},Vn=K({__name:`PropsFlowPractice`,setup(e){let t=y(`안녕하세요`),n=y(`아직 없음`),r=y(null),i=y([]),a=e=>{r.value=e,setTimeout(()=>{r.value===e&&(r.value=null)},700)},o=(e,t)=>{i.value.unshift({dir:e,text:t}),i.value.length>6&&i.value.pop()},c=e=>{t.value=e.target.value,a(`down`),o(`down`,`props.message = "${t.value}"`)},l=e=>{n.value=e,a(`up`),o(`up`,`emit('reply', "${e}")`)};return(e,a)=>(s(),k(`section`,An,[M(`h2`,null,[a[0]||=g(` 데이터는 어느 쪽으로 흐르나 — Props ↓ / Emits ↑ `,-1),N(J,{text:`Props는 부모에서 자식으로 내려가고(↓), Emits는 자식에서 부모로 올라갑니다(↑). 반대 방향은 없습니다. 아래에서 입력하거나 버튼을 누르면 그 순간 어느 화살표가 켜지는지 확인해 보세요.`})]),M(`div`,jn,[M(`div`,Mn,[a[3]||=M(`p`,{class:`node-role`},`부모 (Parent)`,-1),M(`label`,Nn,[a[1]||=M(`span`,{class:`key`},`message`,-1),M(`input`,{value:t.value,type:`text`,onInput:c},null,40,Pn)]),M(`p`,Fn,[a[2]||=M(`span`,{class:`key`},`받은 신호`,-1),M(`span`,In,A(n.value),1)])]),M(`div`,Ln,[M(`div`,{class:h([`arrow down`,{on:r.value===`down`}])},[...a[4]||=[M(`span`,{class:`head`},`↓`,-1),M(`span`,{class:`tag`},`props`,-1)]],2),M(`div`,{class:h([`arrow up`,{on:r.value===`up`}])},[...a[5]||=[M(`span`,{class:`head`},`↑`,-1),M(`span`,{class:`tag`},`emits`,-1)]],2)]),N(On,{message:t.value,onReply:l},null,8,[`message`])]),M(`div`,Rn,[a[6]||=M(`p`,{class:`log-title`},`주고받은 기록`,-1),i.value.length?x(``,!0):(s(),k(`p`,zn,`입력하거나 버튼을 눌러 보세요.`)),(s(!0),k(C,null,P(i.value,(e,t)=>(s(),k(`p`,{key:t,class:h([`log-row`,e.dir])},[M(`span`,Bn,A(e.dir===`down`?`↓ 내려감`:`↑ 올라감`),1),M(`code`,null,A(e.text),1)],2))),128))])]))}},[[`__scopeId`,`data-v-f9dc9376`]]),Hn={class:`child`},Un={class:`field`},Wn={class:`val`},Gn=K({__name:`ReadonlyChild`,props:{count:{type:Number,required:!0}},emits:[`increase`],setup(e,{emit:t}){let n=e,r=t,i=y(``),a=()=>{let e=n.count;try{n.count=e+1}catch{}i.value=n.count===e?`실패 — 값은 그대로 ${n.count} 입니다. (콘솔 경고 확인)`:`어라, 바뀌었습니다: ${n.count}`},o=()=>{r(`increase`),i.value=`성공 — 부모가 값을 바꿔 주었습니다.`};return(t,n)=>(s(),k(`div`,Hn,[n[1]||=M(`p`,{class:`node-role`},`자식 (Child)`,-1),M(`p`,Un,[n[0]||=M(`span`,{class:`key`},`props.count`,-1),M(`span`,Wn,A(e.count),1)]),M(`div`,{class:`buttons`},[M(`button`,{class:`bad`,onClick:a},`❌ 직접 바꾸기 (props.count++)`),M(`button`,{class:`good`,onClick:o},`✅ 부모에게 요청 (emit)`)]),i.value?(s(),k(`p`,{key:0,class:h([`result`,{fail:i.value.startsWith(`실패`)}])},A(i.value),3)):x(``,!0)]))}},[[`__scopeId`,`data-v-1932b01b`]]),Kn=e({default:()=>Zn}),qn={class:`practice-card`},Jn={class:`parent`},Yn={class:`field`},Xn={class:`val`},Zn=K({__name:`PropsReadonlyPractice`,setup(e){let t=y(0),n=()=>{t.value++};return(e,r)=>(s(),k(`section`,qn,[M(`h2`,null,[r[0]||=g(` Props는 읽기 전용 — 값의 주인은 부모다 `,-1),N(J,{text:`자식이 받은 Props를 직접 바꾸면 Vue가 막습니다. 값이 어디서 바뀌었는지 추적할 수 없게 되기 때문입니다. 자식은 '바꿔 달라'고 요청(emit)하고, 실제로 바꾸는 것은 값을 가진 부모입니다.`})]),M(`div`,Jn,[r[2]||=M(`p`,{class:`node-role`},`부모 (Parent) — 값의 주인`,-1),M(`p`,Yn,[r[1]||=M(`span`,{class:`key`},`count`,-1),M(`span`,Xn,A(t.value),1)]),N(Gn,{count:t.value,onIncrease:n},null,8,[`count`])]),r[3]||=M(`p`,{class:`hint`},[g(` 브라우저 콘솔(F12)을 열고 ❌ 버튼을 누르면 `),M(`code`,null,`Set operation on key "count" failed: target is readonly`),g(` 경고가 찍힙니다. `)],-1)]))}},[[`__scopeId`,`data-v-24c24705`]]),Qn={class:`named`},$n={class:`value`},er=K({__name:`DrillLeaf`,props:{theme:{type:String,required:!0}},setup(e){return(t,n)=>(s(),k(`div`,{class:h([`level`,e.theme])},[n[1]||=M(`p`,{class:`role`},`자식 (Child)`,-1),M(`p`,Qn,[n[0]||=M(`span`,{class:`name`},`props.theme :`,-1),M(`span`,$n,A(e.theme),1)])],2))}},[[`__scopeId`,`data-v-54c3d013`]]),tr={class:`data`},nr=K({__name:`DrillMid`,props:{theme:{type:String,required:!0}},setup(e){let t=e,n=y(!1);return u(()=>t.theme,()=>{n.value=!0,setTimeout(()=>n.value=!1,900)}),(t,r)=>(s(),k(`div`,{class:h([`level`,{passing:n.value}])},[r[1]||=M(`p`,{class:`role`},`부모 (Parent)`,-1),M(`p`,{class:h([`hold`,{passing:n.value}])},[r[0]||=M(`span`,{class:`name`},`props.theme :`,-1),M(`span`,tr,A(e.theme),1)],2),r[2]||=M(`p`,{class:`desc`},`😩 쓰지도 않는 값을 받아서 아래로 넘긴다`,-1),N(er,{theme:e.theme},null,8,[`theme`])],2))}},[[`__scopeId`,`data-v-803c609f`]]),rr={class:`named`},ir={class:`value`},ar=K({__name:`InjectLeaf`,setup(e){let t=f(`globalTheme`,`(주입된 값 없음)`);return(e,n)=>(s(),k(`div`,{class:h([`level`,_(t)])},[n[1]||=M(`p`,{class:`role`},`자식 (Child)`,-1),M(`p`,rr,[n[0]||=M(`span`,{class:`name`},`inject('globalTheme') :`,-1),M(`span`,ir,A(_(t)),1)])],2))}},[[`__scopeId`,`data-v-79d6cd3e`]]),or={class:`level`},sr=K({__name:`InjectMid`,setup(e){return(e,t)=>(s(),k(`div`,or,[t[0]||=S(`<p class="role" data-v-c476208c>부모 (Parent)</p><p class="hold" data-v-c476208c><span class="name" data-v-c476208c>props :</span><span class="none" data-v-c476208c>없음 (0개)</span></p><p class="desc" data-v-c476208c>😌 값이 지나가는지도 모른다. 조용하다.</p>`,3),N(ar)]))}},[[`__scopeId`,`data-v-c476208c`]]),cr=e({default:()=>gr}),lr={class:`practice-card`},ur={class:`root`},dr={class:`field`},fr={class:`val`},pr={class:`compare`},mr={class:`col`},hr={class:`col`},gr=K({__name:`ProvideInjectPractice`,setup(e){let t=y(`dark-mode`);d(`globalTheme`,t);let n=()=>{t.value=t.value===`dark-mode`?`light-mode`:`dark-mode`};return(e,r)=>(s(),k(`section`,lr,[M(`h2`,null,[r[0]||=g(` Provide & Inject — 중간을 건너뛰고 전달하기 `,-1),N(J,{text:`계층이 깊어지면 중간 컴포넌트들이 자기는 쓰지도 않는 값을 받아서 아래로 넘기기만 하는 일이 생깁니다(Props Drilling). provide/inject는 그 중간을 건너뛰고 조상이 선언한 값을 후손이 직접 꺼내 쓰게 해 줍니다.`})]),M(`div`,ur,[r[6]||=M(`p`,{class:`root-role`},`조부모 (GrandParent) — 값의 주인`,-1),M(`p`,dr,[r[1]||=M(`span`,{class:`key`},`themeColor :`,-1),M(`span`,fr,A(t.value),1),M(`button`,{onClick:n},`테마 바꾸기`)]),M(`div`,pr,[M(`div`,mr,[r[2]||=M(`p`,{class:`col-title bad`},`A · Props Drilling`,-1),r[3]||=M(`p`,{class:`col-desc`},[g(`값이 `),M(`b`,null,`중간을 통과해`),g(` 내려갑니다.`)],-1),N(nr,{theme:t.value},null,8,[`theme`])]),M(`div`,hr,[r[4]||=M(`p`,{class:`col-title good`},`B · Provide / Inject`,-1),r[5]||=M(`p`,{class:`col-desc`},[g(`값이 `),M(`b`,null,`중간을 건너뛰고`),g(` 바로 갑니다.`)],-1),N(sr)])])]),r[7]||=M(`p`,{class:`footnote`},[g(` 버튼을 누를 때 `),M(`b`,null,`A의 중간 카드만 번쩍이는지`),g(` 보세요. 값이 그곳을 지나간다는 뜻입니다. 여기는 조부모 → 부모 → 자식 3단계라 차이가 작아 보이지만, 10단계쯤 되면 A는 중간 8곳을 전부 고쳐야 합니다. `)],-1)]))}},[[`__scopeId`,`data-v-8bf7e4c2`]]),_r={class:`sibling`},vr={class:`buttons`},yr=[`onClick`],br=K({__name:`SiblingA`,emits:[`send`],setup(e,{emit:t}){let n=t,r=[`안녕!`,`점심 먹었어?`,`과제 다 했어?`];return(e,t)=>(s(),k(`div`,_r,[t[0]||=M(`p`,{class:`node-role`},`형제 A (보내는 쪽)`,-1),t[1]||=M(`p`,{class:`desc`},`누르면 부모에게 올려보냅니다(emit).`,-1),M(`div`,vr,[(s(),k(C,null,P(r,e=>M(`button`,{key:e,onClick:t=>n(`send`,e)},A(e),9,yr)),64))])]))}},[[`__scopeId`,`data-v-6a5f088d`]]),xr={class:`sibling`},Sr=K({__name:`SiblingB`,props:{received:{type:String,default:``}},setup(e){return(t,n)=>(s(),k(`div`,xr,[n[0]||=M(`p`,{class:`node-role`},`형제 B (받는 쪽)`,-1),n[1]||=M(`p`,{class:`desc`},`부모가 내려준 값(props)만 볼 수 있습니다.`,-1),M(`p`,{class:h([`bubble`,{empty:!e.received}])},A(e.received||`아직 받은 말이 없습니다`),3)]))}},[[`__scopeId`,`data-v-c96b2e77`]]),Cr=e({default:()=>Or}),wr={class:`practice-card`},Tr={class:`parent`},Er={class:`route`},Dr={class:`siblings`},Or=K({__name:`SiblingTalkPractice`,setup(e){let t=y(``),n=y(0),r=e=>{n.value=1,setTimeout(()=>{t.value=e,n.value=2,setTimeout(()=>n.value=0,900)},450)};return(e,i)=>(s(),k(`section`,wr,[M(`h2`,null,[i[0]||=g(` 형제끼리는 부모를 거쳐야 한다 `,-1),N(J,{text:`같은 부모 아래 나란히 있는 컴포넌트끼리는 직접 연결된 선이 없습니다. A가 B에게 말하려면 반드시 부모에게 올렸다가(emit) 부모가 다시 B에게 내려줘야(props) 합니다. 부모를 거치는 이 경로가 눈에 보이도록 만들었습니다.`})]),M(`div`,Tr,[i[2]||=M(`p`,{class:`node-role`},`부모 (Parent) — 중계자`,-1),M(`div`,Er,[M(`span`,{class:h([`leg up`,{on:n.value>=1}])},`① A → 부모 \xA0emit`,2),M(`span`,{class:h([`leg down`,{on:n.value>=2}])},`② 부모 → B \xA0props`,2)]),M(`div`,Dr,[N(br,{onSend:r}),i[1]||=M(`span`,{class:`cut`,"aria-hidden":`true`},`✕ 직접 연결 없음`,-1),N(Sr,{received:t.value},null,8,[`received`])])])]))}},[[`__scopeId`,`data-v-9ac8d55d`]]),kr={class:`base-card`},Ar={class:`slot-zone head`},jr={class:`slot-zone body`},Mr={class:`slot-zone foot`},X=K({__name:`SlotBaseCard`,setup(e){return(e,t)=>(s(),k(`div`,kr,[M(`div`,Ar,[n(e.$slots,`header`,{},()=>[t[0]||=M(`span`,{class:`fallback`},`header 구멍 (비어 있음)`,-1)],!0)]),M(`div`,jr,[n(e.$slots,`default`,{},()=>[t[1]||=M(`span`,{class:`fallback`},`기본 구멍 (비어 있음)`,-1)],!0)]),M(`div`,Mr,[n(e.$slots,`footer`,{},()=>[t[2]||=M(`span`,{class:`fallback`},`footer 구멍 (비어 있음)`,-1)],!0)])]))}},[[`__scopeId`,`data-v-fa66589e`]]),Nr=e({default:()=>zr}),Pr={class:`practice-card`},Fr={class:`deck`},Ir={class:`case`},Lr={class:`case`},Rr={class:`case`},zr=K({__name:`SlotBaseCardPractice`,setup(e){return(e,t)=>(s(),k(`section`,Pr,[M(`h2`,null,[t[0]||=g(` 더해보기 ① BaseCard 하나로 화면 3개 `,-1),N(J,{text:`아래 세 카드는 전부 같은 SlotBaseCard.vue 파일입니다. 테두리·모서리·구분선이 똑같은 이유죠. 다른 것은 부모가 header·body·footer 세 구멍에 무엇을 넣었는지뿐입니다. 껍데기를 한 번만 만들어 두고 화면마다 알맹이만 갈아 끼우는 것이 Slot의 목적입니다.`})]),t[9]||=M(`p`,{class:`explain`},[g(` 세 카드 모두 `),M(`b`,null,`같은 파일`),g(`입니다. 껍데기를 고치고 싶으면 `),M(`code`,null,`SlotBaseCard.vue`),g(` 한 곳만 고치면 세 개가 동시에 바뀝니다. `)],-1),M(`div`,Fr,[M(`div`,Ir,[t[4]||=M(`p`,{class:`case-label`},`구멍 3개 모두 채움`,-1),N(X,null,{header:b(()=>[...t[1]||=[M(`b`,null,`주간 리포트`,-1)]]),footer:b(()=>[...t[2]||=[M(`button`,{type:`button`},`자세히`,-1)]]),default:b(()=>[t[3]||=M(`p`,{class:`line`},`이번 주 방문자가 12% 늘었습니다.`,-1)]),_:1})]),M(`div`,Lr,[t[7]||=M(`p`,{class:`case-label`},`footer만 비움`,-1),N(X,null,{header:b(()=>[...t[5]||=[M(`b`,null,`공지`,-1)]]),default:b(()=>[t[6]||=M(`p`,{class:`line`},`금요일 18시에 배포가 있습니다.`,-1)]),_:1})]),M(`div`,Rr,[t[8]||=M(`p`,{class:`case-label`},`아무것도 안 채움`,-1),N(X)])]),t[10]||=S(`<div class="verdict" data-v-1f455799><p class="verdict-title" data-v-1f455799>그럼 Props로 하면 안 되나?</p><div class="verdict-grid" data-v-1f455799><div class="side bad" data-v-1f455799><p class="side-head" data-v-1f455799>❌ Props로 시도</p><pre data-v-1f455799><code data-v-1f455799>&lt;BaseCard title=&quot;주간 리포트&quot; /&gt;</code></pre><p class="side-why" data-v-1f455799> 제목 <b data-v-1f455799>글자</b>는 넘길 수 있습니다. 그런데 위 첫 카드의 footer에는 <b data-v-1f455799>&lt;button&gt; 태그</b>가 들어 있습니다. Props로 버튼을 넘기려면 문자열로 <code data-v-1f455799>&quot;&lt;button&gt;&quot;</code>을 보내야 하는데, 그건 화면이 아니라 그냥 글자입니다. </p></div><div class="side good" data-v-1f455799><p class="side-head" data-v-1f455799>✅ Slot이어야만 하는 이유</p><pre data-v-1f455799><code data-v-1f455799>&lt;template #footer&gt;
  &lt;button @click=&quot;...&quot;&gt;자세히&lt;/button&gt;
&lt;/template&gt;</code></pre><p class="side-why" data-v-1f455799><b data-v-1f455799>태그·이벤트·컴포넌트</b>가 통째로 들어갑니다. 넘기는 것이 값이 아니라 화면 조각이기 때문입니다. <b data-v-1f455799>버튼 하나만 들어가도 Props로는 안 됩니다.</b></p></div></div></div>`,1)]))}},[[`__scopeId`,`data-v-1f455799`]]),Br={class:`list`},Vr={class:`fallback`},Z=K({__name:`SlotItemList`,setup(e){let t=y([{id:1,name:`노트북 거치대`,price:32e3,stock:12},{id:2,name:`기계식 키보드`,price:89e3,stock:0},{id:3,name:`USB-C 허브`,price:45e3,stock:3}]);return(e,r)=>(s(),k(`ul`,Br,[(s(!0),k(C,null,P(t.value,t=>(s(),k(`li`,{key:t.id},[n(e.$slots,`default`,{item:t},()=>[M(`span`,Vr,A(t.name)+` (부모가 그리는 방법을 정하지 않음)`,1)],!0)]))),128))]))}},[[`__scopeId`,`data-v-5164d7f2`]]),Hr=e({default:()=>ti}),Ur={class:`practice-card`},Wr={class:`views`},Gr={class:`view`},Kr={class:`plain`},qr={class:`view`},Jr={class:`row`},Yr={class:`price`},Xr={class:`view`},Zr={class:`row`},Qr={key:0,class:`badge sold`},$r={key:1,class:`badge low`},ei={key:2,class:`badge ok`},ti=K({__name:`SlotListPractice`,setup(e){let t=e=>e.toLocaleString(`ko-KR`)+`원`;return(e,n)=>(s(),k(`section`,Ur,[M(`h2`,null,[n[0]||=g(` 더해보기 ② 같은 목록, 부모가 정하는 세 가지 모습 `,-1),N(J,{text:`목록 컴포넌트는 '무엇을 반복할지'(데이터와 v-for)만 책임지고, '각 항목을 어떻게 그릴지'는 부모에게 맡깁니다. 아래 세 목록은 전부 같은 SlotItemList.vue이고 데이터도 완전히 같습니다. 부모가 v-slot으로 받은 item을 다르게 그렸을 뿐입니다.`})]),n[4]||=M(`p`,{class:`explain`},[g(` 세 목록 모두 `),M(`b`,null,`같은 컴포넌트 · 같은 데이터`),g(`입니다. 데이터는 `),M(`code`,null,`SlotItemList.vue`),g(` 안에만 있고, 부모는 그리는 방법만 정합니다. `)],-1),M(`div`,Wr,[M(`div`,Gr,[n[1]||=M(`p`,{class:`view-label`},`A · 이름만`,-1),N(Z,null,{default:b(({item:e})=>[M(`span`,Kr,A(e.name),1)]),_:1})]),M(`div`,qr,[n[2]||=M(`p`,{class:`view-label`},`B · 가격 강조`,-1),N(Z,null,{default:b(({item:e})=>[M(`div`,Jr,[M(`span`,null,A(e.name),1),M(`b`,Yr,A(t(e.price)),1)])]),_:1})]),M(`div`,Xr,[n[3]||=M(`p`,{class:`view-label`},`C · 재고 상태`,-1),N(Z,null,{default:b(({item:e})=>[M(`div`,Zr,[M(`span`,{class:h({out:e.stock===0})},A(e.name),3),e.stock===0?(s(),k(`span`,Qr,`품절`)):e.stock<5?(s(),k(`span`,$r,A(e.stock)+`개 남음`,1)):(s(),k(`span`,ei,`재고 충분`))])]),_:1})])]),n[5]||=M(`p`,{class:`note`},[g(` C의 `),M(`b`,null,`품절 · 임박`),g(` 판단은 목록 컴포넌트가 아니라 `),M(`b`,null,`부모`),g(`가 했습니다. 목록은 `),M(`code`,null,`stock`),g(`이 무슨 뜻인지조차 모릅니다. 그래서 같은 목록을 쇼핑몰에도, 관리자 페이지에도 쓸 수 있습니다. `)],-1)]))}},[[`__scopeId`,`data-v-94406ce4`]]),ni={class:`modal`,role:`dialog`,"aria-modal":`true`},ri={class:`modal-head`},ii={class:`modal-body`},ai={class:`modal-foot`},oi=K({__name:`SlotModal`,props:{open:{type:Boolean,default:!1}},emits:[`close`],setup(e,{emit:t}){let r=t;return(t,i)=>e.open?(s(),k(`div`,{key:0,class:`backdrop`,onClick:i[2]||=L(e=>r(`close`),[`self`])},[M(`div`,ni,[M(`header`,ri,[n(t.$slots,`title`,{},()=>[i[3]||=M(`b`,null,`제목 없음`,-1)],!0),M(`button`,{type:`button`,class:`close`,"aria-label":`닫기`,onClick:i[0]||=e=>r(`close`)},`✕`)]),M(`div`,ii,[n(t.$slots,`default`,{},()=>[i[4]||=M(`p`,{class:`fallback`},`본문 구멍 (비어 있음)`,-1)],!0)]),M(`footer`,ai,[n(t.$slots,`actions`,{},()=>[M(`button`,{type:`button`,onClick:i[1]||=e=>r(`close`)},`닫기`)],!0)])])])):x(``,!0)}},[[`__scopeId`,`data-v-4b2f4b14`]]),si=e({default:()=>pi}),ci={class:`practice-card`},li={class:`stage`},ui={class:`buttons`},di={key:0,class:`result`},fi={key:1,class:`hint`},pi=K({__name:`SlotModalPractice`,setup(e){let t=y(!1),n=y(!1),r=y(``),i=()=>{r.value=`삭제했습니다.`,t.value=!1};return(e,a)=>(s(),k(`section`,ci,[M(`h2`,null,[a[5]||=g(` 더해보기 ③ 모달 하나로 창 두 개 `,-1),N(J,{text:`모달 껍데기(어둡게 덮기·가운데 띄우기·닫기)는 어느 창이든 똑같습니다. 다른 건 제목·내용·버튼뿐이죠. 그래서 그 세 곳만 Named Slot으로 열어 두면, 모달 파일 하나로 확인창·안내창·입력창을 전부 만들 수 있습니다.`})]),a[11]||=M(`p`,{class:`explain`},[g(` 아래 두 버튼은 `),M(`b`,null,`같은 SlotModal.vue`),g(`를 엽니다. 껍데기는 같고 `),M(`code`,null,`#title`),g(` · 본문 · `),M(`code`,null,`#actions`),g(` 세 구멍만 다릅니다. `)],-1),M(`div`,li,[M(`div`,ui,[M(`button`,{type:`button`,onClick:a[0]||=e=>t.value=!0},`삭제 확인창 열기`),M(`button`,{type:`button`,onClick:a[1]||=e=>n.value=!0},`안내창 열기`)]),r.value?(s(),k(`p`,di,A(r.value),1)):x(``,!0),!t.value&&!n.value?(s(),k(`p`,fi,[...a[6]||=[g(` 위 버튼을 눌러 보세요. 모달은 `,-1),M(`b`,null,`이 점선 안에서만`,-1),g(` 열립니다. `,-1)]])):x(``,!0),N(oi,{open:t.value,onClose:a[3]||=e=>t.value=!1},{title:b(()=>[...a[7]||=[M(`b`,null,`정말 삭제할까요?`,-1)]]),actions:b(()=>[M(`button`,{type:`button`,onClick:a[2]||=e=>t.value=!1},`취소`),M(`button`,{type:`button`,class:`danger`,onClick:i},`삭제`)]),default:b(()=>[a[8]||=M(`p`,null,`삭제한 항목은 되돌릴 수 없습니다.`,-1)]),_:1},8,[`open`]),N(oi,{open:n.value,onClose:a[4]||=e=>n.value=!1},{title:b(()=>[...a[9]||=[M(`b`,null,`배포 안내`,-1)]]),default:b(()=>[a[10]||=M(`p`,null,`금요일 18시에 서비스가 잠시 중단됩니다.`,-1)]),_:1},8,[`open`])]),a[12]||=M(`p`,{class:`note`},[g(` 안내창은 `),M(`code`,null,`#actions`),g(`를 `),M(`b`,null,`채우지 않았습니다`),g(`. 그래서 SlotModal이 준비해 둔 기본 `),M(`b`,null,`닫기`),g(` 버튼 하나만 나옵니다. 구멍마다 기본값을 넣어 두면 부모가 매번 다 채우지 않아도 됩니다. `)],-1)]))}},[[`__scopeId`,`data-v-c7612aa2`]]),mi={},hi={class:`base-card`};function gi(e,t){return s(),k(`div`,hi,[n(e.$slots,`default`,{},()=>[t[0]||=M(`p`,null,`기본 콘텐츠 영역입니다.`,-1)],!0)])}var Q=K(mi,[[`render`,gi],[`__scopeId`,`data-v-187523ed`]]),_i={},vi={class:`base-card`};function yi(e,t){return s(),k(`div`,vi,[M(`header`,null,[n(e.$slots,`header`,{},void 0,!0)]),M(`main`,null,[n(e.$slots,`default`,{},void 0,!0)])])}var bi=K(_i,[[`render`,yi],[`__scopeId`,`data-v-f11484c5`]]),xi={class:`base-card`},Si=K({__name:`SlotScopedChild`,setup(e){let t=y(`현재 서버 상태 정상`),r=y(150);return(e,i)=>(s(),k(`div`,xi,[i[1]||=M(`p`,{class:`role`},`하위 컴포넌트 (Child)`,-1),n(e.$slots,`default`,{text:t.value,count:r.value},()=>[i[0]||=M(`p`,null,`부모가 마크업을 주입하지 않았을 때의 디폴트 화면`,-1)],!0)]))}},[[`__scopeId`,`data-v-54665344`]]),Ci=e({default:()=>ki}),wi={class:`practice-card`},Ti={class:`practice-area`},Ei={class:`practice-area`},Di={class:`practice-area`},Oi={class:`display-panel`},ki=K({__name:`SlotPractice`,setup(e){return(e,t)=>(s(),k(`section`,wi,[M(`h2`,null,[t[0]||=g(` Slot — 껍데기는 두고 알맹이만 갈아 끼우기 `,-1),N(J,{text:`Props가 '값'을 넘기는 것이라면 Slot은 '화면 조각(HTML)'을 통째로 넘기는 것입니다. 액자를 하나 만들어 두고 사진만 바꿔 끼우는 셈이라, 카드·모달·레이아웃처럼 껍데기는 같고 안쪽만 다른 UI에 씁니다.`})]),M(`div`,Ti,[t[3]||=M(`h3`,null,`1) Default Slot — 이름 없는 구멍 하나`,-1),t[4]||=M(`p`,{class:`explain`},[g(` 같은 `),M(`b`,null,`SlotDefaultChild`),g(` 카드에 서로 다른 내용을 넣었습니다. 마지막 카드는 아무것도 안 넣어서 `),M(`b`,null,`기본값`),g(`이 나옵니다. `)],-1),N(Q,null,{default:b(()=>[...t[1]||=[M(`p`,null,`단순한 텍스트 문장을 주입합니다.`,-1)]]),_:1}),N(Q,null,{default:b(()=>[...t[2]||=[M(`h4`,{class:`warn`},`🔥 경고 상태`,-1),M(`button`,null,`확인`,-1)]]),_:1}),N(Q)]),M(`div`,Ei,[t[7]||=M(`h3`,null,`2) Named Slot — 구멍에 이름을 붙여 여러 개`,-1),t[8]||=M(`p`,{class:`explain`},[M(`b`,null,`#header`),g(` 자리와 이름 없는 `),M(`b`,null,`본문`),g(` 자리에 각각 다른 내용을 넣습니다. `)],-1),N(bi,null,{header:b(()=>[...t[5]||=[M(`h4`,null,`Child 주입 제목`,-1)]]),default:b(()=>[t[6]||=M(`p`,null,` "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..." `,-1)]),_:1})]),M(`div`,Di,[t[9]||=M(`h3`,null,`3) Scoped Slot — 자식의 데이터를 부모가 받아 쓴다`,-1),t[10]||=M(`p`,{class:`explain`},[g(` 아래 값은 `),M(`b`,null,`자식이 가진 데이터`),g(`인데, 화면에 어떻게 그릴지는 `),M(`b`,null,`부모가`),g(` 정합니다. `)],-1),N(Si,null,{default:b(e=>[M(`div`,Oi,[M(`p`,null,`알림 메시지: `+A(e.text),1),M(`p`,null,`접속자 수: `+A(e.count)+`명`,1)])]),_:1}),N(Si)])]))}},[[`__scopeId`,`data-v-4d263364`]]),Ai=e({default:()=>Mi}),ji={class:`practice-card`},Mi=K({__name:`ComputedCachePractice`,setup(e){let t=y(0),n=y(0),r=()=>(console.log(`❌ 일반 함수 실행됨!`),t.value*2),i=T(()=>(console.log(`✅ Computed 연산 실행됨!`),t.value*2));return(e,a)=>(s(),k(`section`,ji,[M(`h2`,null,[a[2]||=g(` computed() 캐싱 동작 비교 `,-1),N(J,{text:`computed는 의존하는 값이 바뀔 때만 다시 계산하고 결과를 캐싱합니다. 일반 함수는 화면이 다시 그려질 때마다 무조건 재실행됩니다. dummy 버튼을 눌러 콘솔 출력 차이를 확인해 보세요.`})]),M(`p`,null,`count: `+A(t.value)+` | dummy: `+A(n.value),1),M(`button`,{onClick:a[0]||=e=>t.value++},`count 증가 (의존성 변경)`),M(`button`,{onClick:a[1]||=e=>n.value++},`dummy 증가 (무관한 변경)`),M(`p`,null,`일반 함수 결과: `+A(r()),1),M(`p`,null,`Computed 결과: `+A(i.value),1),a[3]||=M(`p`,{class:`console-hint`},[g(` 브라우저 콘솔(F12)을 열고 `),M(`b`,null,`dummy 증가`),g(`를 눌러보세요. 일반 함수만 계속 실행되고 computed는 조용합니다. `)],-1)]))}},[[`__scopeId`,`data-v-5263d813`]]),Ni=e({default:()=>Ri}),Pi={class:`practice-card`},Fi={class:`practice-area`},Ii={class:`monitor`},Li={class:`monitor target`},Ri=K({__name:`DeepWatchPractice`,setup(e){let t=y({name:`홍길동`,age:20}),n=y(`아직 반응 없음`),r=y(`아직 반응 없음`);return u(t,e=>{n.value=`[deep 감지] 누군가 변경됨! 현재 이름: ${e.name}, 나이: ${e.age}`},{deep:!0}),u(()=>t.value.age,(e,t)=>{r.value=`[타겟 감지] 나이가 ${t}세 ➡️ ${e}세로 변경됨!`}),(e,i)=>(s(),k(`section`,Pi,[M(`h2`,null,[i[2]||=g(` ref 객체 감시 — Deep Watch `,-1),N(J,{text:`ref에 객체를 담고 watch(user, ...)만 쓰면 속성 변경을 감지하지 못합니다. 객체 자체(참조)가 바뀐 게 아니기 때문입니다. deep: true로 내부 전체를 감시하거나, 화살표 함수로 특정 속성만 콕 집어 감시해야 합니다.`})]),M(`div`,Fi,[i[3]||=M(`h3`,null,`👨‍💻 회원 데이터 조작 panel`,-1),M(`p`,null,`이름: `+A(t.value.name)+` / 나이: `+A(t.value.age)+`세`,1),M(`button`,{onClick:i[0]||=e=>t.value.name=`이순신`},`이름만 변경`),M(`button`,{onClick:i[1]||=e=>t.value.age++},`나이만 변경 (age++)`)]),M(`div`,Ii,[i[4]||=M(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) deep: true 모니터 (전체 감시)`,-1),M(`p`,null,A(n.value),1)]),M(`div`,Li,[i[5]||=M(`p`,{class:`monitor-title`},`🎯 2) 화살표 함수 모니터 (나이만 타겟 감시)`,-1),M(`p`,null,A(r.value),1)])]))}},[[`__scopeId`,`data-v-485827f2`]]),zi=e({default:()=>Ji}),Bi={class:`practice-card`},Vi={class:`compare`},Hi={class:`side`},Ui={class:`check`},Wi={class:`side highlight`},Gi={class:`check`},Ki={class:`live`},qi={key:0,class:`submitted`},Ji=K({__name:`FormStatePractice`,setup(e){let t=y(``),n=y(``),r=y(``),i=y(!1),a=()=>{t.value=``,n.value=``,r.value=``,i.value=!1},o=()=>JSON.stringify({name:t.value,email:n.value,age:r.value,agree:i.value},null,1),c={name:``,email:``,age:``,agree:!1},l=E({...c}),u=()=>{Object.assign(l,c)},d=()=>JSON.stringify(l,null,1),f=y(``),p=()=>{f.value=`[ref 방식] ${o()}`},m=()=>{f.value=`[reactive 방식] ${d()}`};return(e,c)=>(s(),k(`section`,Bi,[M(`h2`,null,[c[8]||=g(` 폼 상태 관리 — ref 여러 개 vs reactive 하나 `,-1),N(J,{text:`reactive의 장점은 '관련 있는 값을 한 덩어리로 다룰 수 있다'는 점입니다. 초기화·전송·전달을 객체 단위로 처리할 수 있어 필드가 많아질수록 코드가 짧아집니다. 대신 통째로 재할당하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다.`})]),M(`div`,Vi,[M(`div`,Hi,[c[13]||=M(`h3`,null,`A. ref 4개`,-1),M(`label`,null,[c[9]||=g(`이름 `,-1),j(M(`input`,{"onUpdate:modelValue":c[0]||=e=>t.value=e,type:`text`},null,512),[[I,t.value]])]),M(`label`,null,[c[10]||=g(`이메일 `,-1),j(M(`input`,{"onUpdate:modelValue":c[1]||=e=>n.value=e,type:`text`},null,512),[[I,n.value]])]),M(`label`,null,[c[11]||=g(`나이 `,-1),j(M(`input`,{"onUpdate:modelValue":c[2]||=e=>r.value=e,type:`number`},null,512),[[I,r.value,void 0,{number:!0}]])]),M(`label`,Ui,[j(M(`input`,{"onUpdate:modelValue":c[3]||=e=>i.value=e,type:`checkbox`},null,512),[[F,i.value]]),c[12]||=g(` 약관 동의`,-1)]),M(`div`,{class:`buttons`},[M(`button`,{onClick:p},`전송`),M(`button`,{onClick:a},`초기화`)]),c[14]||=M(`pre`,{class:`code`},`name.value = ''
email.value = ''
age.value = ''
agree.value = false`,-1),c[15]||=M(`p`,{class:`note`},`필드가 늘면 이 줄도 같이 늘어난다`,-1)]),M(`div`,Wi,[c[20]||=M(`h3`,null,`B. reactive 1개`,-1),M(`label`,null,[c[16]||=g(`이름 `,-1),j(M(`input`,{"onUpdate:modelValue":c[4]||=e=>l.name=e,type:`text`},null,512),[[I,l.name]])]),M(`label`,null,[c[17]||=g(`이메일 `,-1),j(M(`input`,{"onUpdate:modelValue":c[5]||=e=>l.email=e,type:`text`},null,512),[[I,l.email]])]),M(`label`,null,[c[18]||=g(`나이 `,-1),j(M(`input`,{"onUpdate:modelValue":c[6]||=e=>l.age=e,type:`number`},null,512),[[I,l.age,void 0,{number:!0}]])]),M(`label`,Gi,[j(M(`input`,{"onUpdate:modelValue":c[7]||=e=>l.agree=e,type:`checkbox`},null,512),[[F,l.agree]]),c[19]||=g(` 약관 동의`,-1)]),M(`div`,{class:`buttons`},[M(`button`,{onClick:m},`전송`),M(`button`,{onClick:u},`초기화`)]),c[21]||=M(`pre`,{class:`code`},`Object.assign(form, INITIAL_FORM)`,-1),c[22]||=M(`p`,{class:`note`},`필드가 몇 개든 한 줄로 끝난다`,-1)])]),M(`div`,Ki,[M(`div`,null,[c[23]||=M(`p`,{class:`live-label`},`A · ref 4개를 손으로 조립`,-1),M(`pre`,null,A(o()),1)]),M(`div`,null,[c[24]||=M(`p`,{class:`live-label`},`B · reactive 객체를 그대로 사용`,-1),M(`pre`,null,A(d()),1)])]),f.value?(s(),k(`p`,qi,A(f.value),1)):x(``,!0)]))}},[[`__scopeId`,`data-v-be254916`]]),Yi=e({default:()=>$i}),Xi={class:`practice-card`},Zi={class:`practice-area`},Qi={class:`monitor`},$i=K({__name:`MultiWatchPractice`,setup(e){let t=y(`서울`),n=y(`오늘`),r=y(`대기 중...`);return u([t,n],([e,t],[n,i])=>{r.value=`[변경 감지] ${n}(${i}) ➡️ ${e}(${t})`,console.log(`🤖 [통합 API 호출] ${e}의 ${t} 날씨를 불러옵니다...`)}),(e,i)=>(s(),k(`section`,Xi,[M(`h2`,null,[i[4]||=g(` 여러 개의 변수 동시 감시 (Multi-Source Watch) `,-1),N(J,{text:`watch의 첫 번째 인자에 배열을 넘기면 여러 값을 한 번에 감시합니다. 콜백이 받는 새 값·이전 값도 배열이며, 감시 대상을 적은 순서 그대로 매핑됩니다. 둘 중 하나만 바뀌어도 콜백이 한 번 실행됩니다.`})]),M(`div`,Zi,[i[9]||=M(`h3`,null,`날씨 조건 설정`,-1),i[10]||=M(`label`,null,`도시: `,-1),j(M(`select`,{"onUpdate:modelValue":i[0]||=e=>t.value=e},[...i[5]||=[M(`option`,{value:`서울`},`서울`,-1),M(`option`,{value:`수원`},`수원`,-1),M(`option`,{value:`부산`},`부산`,-1)]],512),[[B,t.value]]),i[11]||=M(`p`,{class:`field-label`},`날짜:`,-1),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`radio`,value:`오늘`},null,512),[[z,n.value]]),i[6]||=g(` 오늘`,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":i[2]||=e=>n.value=e,type:`radio`,value:`내일`},null,512),[[z,n.value]]),i[7]||=g(` 내일`,-1)]),M(`label`,null,[j(M(`input`,{"onUpdate:modelValue":i[3]||=e=>n.value=e,type:`radio`,value:`주간예보`},null,512),[[z,n.value]]),i[8]||=g(` 주간예보`,-1)])]),M(`div`,Qi,[i[12]||=M(`h3`,null,`통합 모니터링 로그`,-1),M(`p`,null,`현재 상태: `+A(r.value),1)])]))}},[[`__scopeId`,`data-v-25d6c99a`]]),ea=e({default:()=>aa}),ta={class:`practice-card`},na={class:`practice-area`},ra={class:`monitor auto`},ia={class:`monitor target`},aa=K({__name:`ReactiveArrayWatchPractice`,setup(e){let t=E([`서울`,`수원`]),n=y(`대기 중...`),r=y(`대기 중...`);return u(t,(e,t)=>{n.value=`[자동 감시] 배열 변동 발생! 옛날길이인척하는:${t.length} / 현재길이:${e.length}`}),u(()=>[...t],(e,t)=>{r.value=`[스냅샷 감시] 진짜 과거 길이:${t.length} (데이터: ${t}) ➡️ 바뀐 길이:${e.length}`}),(e,i)=>(s(),k(`section`,ta,[M(`h2`,null,[i[2]||=g(` reactive() 배열 감시 — 스냅샷 기법 `,-1),N(J,{text:`배열도 객체와 같은 함정이 있습니다. 변수명을 그대로 넘기면 이전 배열과 현재 배열이 같은 것을 가리켜 비교가 불가능합니다. 스프레드로 복사본을 만들어([...cityList]) 감시하면 과거 상태가 그대로 보존됩니다.`})]),M(`div`,na,[i[4]||=M(`h3`,null,`즐겨찾기 도시 목록 (reactive 배열)`,-1),M(`p`,null,[i[3]||=g(` 현재 등록된 도시: `,-1),M(`strong`,null,A(t),1)]),M(`button`,{onClick:i[0]||=e=>t.push(`부산`)},`부산 추가 (push)`),M(`button`,{onClick:i[1]||=e=>t.pop()},`최근 도시 삭제 (pop)`)]),M(`div`,ra,[i[5]||=M(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) cityList 변수명 쌩으로 감시`,-1),M(`p`,null,A(n.value),1),i[6]||=M(`small`,null,`※ 주의: 이전 배열과 현재 배열의 내용물·길이가 똑같이 동기화되어 버립니다.`,-1)]),M(`div`,ia,[i[7]||=M(`p`,{class:`monitor-title`},`🎯 2) () => [...cityList] 복사본 감시`,-1),M(`p`,null,A(r.value),1),i[8]||=M(`small`,null,`※ 성공: 과거 배열에 들어있던 내용물이 지워지지 않고 정상 대조됩니다.`,-1)])]))}},[[`__scopeId`,`data-v-e62c5023`]]),oa=e({default:()=>da}),sa={class:`practice-card`},ca={class:`practice-area`},la={class:`practice-area`},ua=[`onClick`],da=K({__name:`ReactiveStatePractice`,setup(e){let t=E({name:`이순신`,age:30}),n=()=>{t.age++},r=E([`사과`,`바나나`]),i=()=>{r.push(`과일 ${r.length+1}`)},a=e=>{r.splice(e,1)};return(e,o)=>(s(),k(`section`,sa,[M(`h2`,null,[o[0]||=g(` 반응형 상태 reactive() 특징 및 주의점 `,-1),N(J,{text:`reactive()는 객체·배열 전용이며 .value 없이 바로 접근합니다. 다만 객체를 통째로 재할당(userReactive = { ... })하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다. 그래서 실무는 ref()로 통일하는 추세입니다.`})]),M(`div`,ca,[o[1]||=M(`h3`,null,`1) 객체(Object) reactive`,-1),M(`p`,null,`이름: `+A(t.name)+` / 나이: `+A(t.age)+`세`,1),M(`button`,{onClick:n},`reactive 나이 한 살 추가`)]),M(`div`,la,[o[2]||=M(`h3`,null,`2) 배열(Array) reactive`,-1),M(`ul`,null,[(s(!0),k(C,null,P(r,(e,t)=>(s(),k(`li`,{key:t},[g(A(e)+` `,1),M(`button`,{style:{"margin-left":`8px`,padding:`2px 8px`},onClick:e=>a(t)},` 삭제 `,8,ua)]))),128))]),M(`button`,{onClick:i},`과일 항목 추가`)])]))}},[[`__scopeId`,`data-v-524a2c66`]]),fa=e({default:()=>_a}),pa={class:`practice-card`},ma={class:`practice-area`},ha={class:`monitor auto`},ga={class:`monitor target`},_a=K({__name:`ReactiveWatchPractice`,setup(e){let t=E({productName:`노트북`,price:1e3}),n=y(`대기 중...`),r=y(`대기 중...`);return u(t,(e,t)=>{n.value=`[자동 deep] 가격 변동! 이전가격인척하는:${t.price}원 ➡️ 현재가격:${e.price}원`}),u(()=>t.price,(e,t)=>{r.value=`[타겟 조준] 가격이 진짜 올랐음! 옛날값:${t}원 ➡️ 바뀐값:${e}원`}),(e,i)=>(s(),k(`section`,pa,[M(`h2`,null,[i[1]||=g(` reactive() 데이터 watch 감시 규칙 `,-1),N(J,{text:`reactive 객체는 변수명을 그대로 넘기면 deep이 자동으로 켜져 내부 속성 변경까지 잡아냅니다. 다만 이전 값과 현재 값이 같은 객체를 가리켜서 oldVal이 쓸모없어집니다. 이전 값이 필요하면 화살표 함수로 특정 속성만 콕 집어야 합니다.`})]),M(`div`,ma,[i[2]||=M(`h3`,null,`🛒 상품 정보 관리 (reactive)`,-1),M(`p`,null,`상품명: `+A(t.productName)+` / 가격: `+A(t.price)+`원`,1),M(`button`,{onClick:i[0]||=e=>t.price+=500},`가격 500원 인상`)]),M(`div`,ha,[i[3]||=M(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) state 변수 통째로 감시 (deep 자동화)`,-1),M(`p`,null,A(n.value),1),i[4]||=M(`small`,null,`※ 주의: 이전 값과 현재 값이 똑같이 찍힌다.`,-1)]),M(`div`,ga,[i[5]||=M(`p`,{class:`monitor-title`},`🎯 2) () => state.price 콕 집어 감시 (과거 추적)`,-1),M(`p`,null,A(r.value),1),i[6]||=M(`small`,null,`※ 성공: 과거의 원본 가격이 칼같이 보존된다.`,-1)])]))}},[[`__scopeId`,`data-v-50148cb5`]]),va=e({default:()=>wa}),ya={class:`practice-card`},ba={class:`practice-area`},xa={class:`log text`},Sa={class:`practice-area`},Ca={class:`log object`},wa=K({__name:`RefArrayWatchPractice`,setup(e){let t=y([`홍길동`,`이순신`,`강감찬`]),n=y(`대기 중...`),r=y([{name:`서울`,temp:25},{name:`수원`,temp:22}]),i=y(`대기 중...`);return u(()=>t.value[0],(e,t)=>{n.value=`[방출/영입] 0번 선수 교체: ${t} ➡️ ${e}`}),u(()=>r.value[0],e=>{i.value=`[날씨 변동] 서울의 온도가 현재 ${e.temp}°C 로 변경되었습니다.`},{deep:!0}),(e,a)=>(s(),k(`section`,ya,[M(`h2`,null,[a[2]||=g(` ref 배열의 특정 인덱스 감시하기 `,-1),N(J,{text:`배열의 특정 요소만 감시하려면 화살표 함수로 콕 집어야 합니다. 다만 그 요소가 문자열이면 그대로 동작하지만, 객체라면 { deep: true }가 없으면 내부 속성 변경을 감지하지 못합니다. 가리키는 대상의 타입에 따라 규칙이 달라집니다.`})]),M(`div`,ba,[M(`h3`,null,`🏃‍♂️ 1) 문자열 배열: 현재 0번 멤버 [ `+A(t.value[0])+` ]`,1),M(`button`,{onClick:a[0]||=e=>t.value[0]=`손흥민`},`0번 멤버를 손흥민으로 교체`),M(`p`,xa,`로그: `+A(n.value),1)]),M(`div`,Sa,[M(`h3`,null,`⛅ 2) 객체형 배열: 현재 `+A(r.value[0].name)+` 기온 [ `+A(r.value[0].temp)+`°C ]`,1),M(`button`,{onClick:a[1]||=e=>r.value[0].temp++},`서울 기온 1도 올리기 (temp++)`),M(`p`,Ca,`로그: `+A(i.value),1)])]))}},[[`__scopeId`,`data-v-b0ee05f5`]]),Ta=e({default:()=>Da}),Ea={class:`practice-card`},Da={__name:`RefStatePractice`,setup(e){let t=y(0),n=y(`홍길동`),r=y(!0),i=y([`사과`,`배`]),a=y({name:`이순신`,age:30}),o=()=>{t.value++},c=()=>{a.value.name=`장보고`};return(e,l)=>(s(),k(`section`,Ea,[M(`h2`,null,[l[3]||=g(` 반응형 상태 ref() 기초 `,-1),N(J,{text:`ref()는 값을 반응형 상자에 담습니다. script에서는 .value로 상자를 열어야 하고, template에서는 자동 언래핑되어 .value 없이 씁니다. 객체나 배열을 담아도 내부 속성 변경까지 감지됩니다.`})]),M(`p`,null,[l[4]||=g(` Ref 카운트: `,-1),M(`strong`,null,A(t.value),1)]),M(`p`,null,[l[5]||=g(`이름: `,-1),j(M(`input`,{"onUpdate:modelValue":l[0]||=e=>n.value=e},null,512),[[I,n.value]]),g(A(n.value),1)]),M(`p`,null,`활성 상태: `+A(r.value?`활성`:`비활성`),1),M(`p`,null,`과일 목록: `+A(i.value.join(`, `)),1),M(`p`,null,`사용자 정보: 이름 - `+A(a.value.name)+`, 나이 - `+A(a.value.age),1),M(`button`,{onClick:o},`Ref 변수 증가`),M(`button`,{onClick:l[1]||=e=>r.value=!r.value},`토글`),M(`button`,{onClick:l[2]||=e=>i.value.push(`귤`)},`과일 추가`),M(`button`,{onClick:c},`사용자 이름 변경`)]))}},Oa=e({default:()=>Va}),ka={class:`practice-card`},Aa={class:`todo-input`},ja=[`disabled`],Ma={class:`filter`},Na={key:0,class:`todo-list`},Pa=[`checked`,`onChange`],Fa=[`onKeyup`,`onBlur`],Ia=[`onClick`],La=[`onClick`],Ra={key:1,class:`empty`},za={key:2,class:`empty`},Ba={key:3,class:`todo-foot`},Va=K({__name:`TodoAdvancedPractice`,setup(e){let t=y([{id:1,title:`장보기`,done:!1},{id:2,title:`Vue 복습하기`,done:!0}]),n=y(``),r=3,i=()=>{let e=n.value.trim();e&&(t.value.push({id:r,title:e,done:!1}),r++,n.value=``)},a=e=>{e.done=!e.done},o=e=>{t.value=t.value.filter(t=>t.id!==e)},l=y(null),u=y(``),d=y(null),f=async e=>{l.value=e.id,u.value=e.title,await c(),d.value?.focus()},p=e=>{if(l.value===null)return;let t=u.value.trim();t&&(e.title=t),l.value=null},m=()=>{l.value=null},_=y(!1),v=T(()=>_.value?t.value.filter(e=>!e.done):t.value),b=T(()=>t.value.filter(e=>!e.done).length),S=T(()=>t.value.length-b.value);return(e,r)=>(s(),k(`section`,ka,[M(`h2`,null,[r[3]||=g(` 할 일 목록 응용 2 — 잠금 · 수정 · 필터 `,-1),N(J,{text:`세 가지를 얹었습니다. ① :disabled로 빈 입력일 때 버튼 잠그기 ② 제목을 클릭해 인라인 수정(수정 중 상태를 ref로 관리) ③ computed로 필터와 집계를 옮기기. computed는 CC06에서 정식으로 배우지만 여기서 미리 써 봅니다.`})]),M(`div`,Aa,[j(M(`input`,{"onUpdate:modelValue":r[0]||=e=>n.value=e,type:`text`,placeholder:`할 일을 입력하고 Enter`,onKeyup:V(i,[`enter`])},null,544),[[I,n.value]]),M(`button`,{disabled:!n.value.trim(),onClick:i},`추가`,8,ja)]),M(`label`,Ma,[j(M(`input`,{"onUpdate:modelValue":r[1]||=e=>_.value=e,type:`checkbox`},null,512),[[F,_.value]]),r[4]||=g(` 남은 일만 보기 `,-1)]),v.value.length?(s(),k(`ul`,Na,[(s(!0),k(C,null,P(v.value,e=>(s(),k(`li`,{key:e.id,class:h({done:e.done})},[M(`input`,{type:`checkbox`,checked:e.done,onChange:t=>a(e)},null,40,Pa),l.value===e.id?j((s(),k(`input`,{key:0,ref_for:!0,ref:e=>e&&(d.value=e),"onUpdate:modelValue":r[2]||=e=>u.value=e,class:`edit-input`,onKeyup:[V(t=>p(e),[`enter`]),V(m,[`esc`])],onBlur:t=>p(e)},null,40,Fa)),[[I,u.value]]):(s(),k(`span`,{key:1,class:`title`,title:`클릭하면 제목을 고칠 수 있습니다`,onClick:t=>f(e)},A(e.title),9,Ia)),M(`button`,{onClick:t=>o(e.id)},`삭제`,8,La)],2))),128))])):t.value.length?(s(),k(`p`,Ra,` 🎉 남은 일이 없습니다. 필터를 끄면 완료한 항목을 볼 수 있어요. `)):(s(),k(`p`,za,`아직 할 일이 없습니다. 위에서 하나 추가해 보세요.`)),t.value.length?(s(),k(`div`,Ba,[M(`span`,null,[r[5]||=g(` 전체 `,-1),M(`b`,null,A(t.value.length),1),r[6]||=g(` · 남은 일 `,-1),M(`b`,null,A(b.value),1),r[7]||=g(` · 완료 `,-1),M(`b`,null,A(S.value),1)]),r[8]||=M(`span`,{class:`hint`},`제목을 클릭 → 수정 · Enter 확정 · Esc 취소`,-1)])):x(``,!0)]))}},[[`__scopeId`,`data-v-f5c37e4e`]]),Ha=e({default:()=>Za}),Ua={class:`practice-card`},Wa={class:`todo-input`},Ga={key:0,class:`todo-list`},Ka=[`checked`,`onChange`],qa={class:`title`},Ja=[`onClick`],Ya={key:1,class:`empty`},Xa={key:2,class:`todo-foot`},Za=K({__name:`TodoListPractice`,setup(e){let t=y([]),n=y(``),r=1,i=()=>{let e=n.value.trim();e&&(t.value.push({id:r,title:e,done:!1}),r++,n.value=``)},a=e=>{e.done=!e.done},o=e=>{t.value=t.value.filter(t=>t.id!==e)},c=()=>{t.value=t.value.filter(e=>!e.done)};return(e,r)=>(s(),k(`section`,Ua,[M(`h2`,null,[r[1]||=g(` 할 일 목록 — ref 배열 응용 `,-1),N(J,{text:`ref([])에 객체를 담아 목록을 관리하는 연습입니다. 추가는 push, 삭제는 filter로 새 배열을 만들어 교체합니다. 배열 안 객체의 속성(done)을 직접 바꿔도 ref가 변화를 감지해 화면이 갱신됩니다.`})]),M(`div`,Wa,[j(M(`input`,{"onUpdate:modelValue":r[0]||=e=>n.value=e,type:`text`,placeholder:`할 일을 입력하고 Enter`,onKeyup:V(i,[`enter`])},null,544),[[I,n.value]]),M(`button`,{onClick:i},`추가`)]),t.value.length?(s(),k(`ul`,Ga,[(s(!0),k(C,null,P(t.value,e=>(s(),k(`li`,{key:e.id,class:h({done:e.done})},[M(`input`,{type:`checkbox`,checked:e.done,onChange:t=>a(e)},null,40,Ka),M(`span`,qa,A(e.title),1),M(`button`,{class:`remove`,onClick:t=>o(e.id)},`삭제`,8,Ja)],2))),128))])):(s(),k(`p`,Ya,`아직 할 일이 없습니다. 위에서 하나 추가해 보세요.`)),t.value.length?(s(),k(`div`,Xa,[M(`span`,null,[r[2]||=g(` 전체 `,-1),M(`b`,null,A(t.value.length),1),r[3]||=g(` · 남은 일 `,-1),M(`b`,null,A(t.value.filter(e=>!e.done).length),1),r[4]||=g(` · 완료 `,-1),M(`b`,null,A(t.value.filter(e=>e.done).length),1)]),M(`button`,{onClick:c},`완료한 항목 지우기`)])):x(``,!0)]))}},[[`__scopeId`,`data-v-db2e98ce`]]),Qa=e({default:()=>no}),$a={class:`practice-card`},eo={class:`practice-area`},to={class:`monitor`},no=K({__name:`WatchEffectPractice`,setup(e){let n=y(`홍길동`),r=y(20),i=y(`대기 중...`);return t(()=>{i.value=`[자동 감지] 이름: ${n.value} / 나이: ${r.value}세`,console.log(`🤖 watchEffect가 내부 변수 변경을 감지하여 실행되었습니다.`)}),(e,t)=>(s(),k(`section`,$a,[M(`h2`,null,[t[2]||=g(` 자동 감시자 watchEffect() `,-1),N(J,{text:`watchEffect는 감시 대상을 적지 않습니다. 함수 안에서 읽은 반응형 값이 자동으로 의존성이 됩니다. 그리고 등록되는 즉시 한 번 실행되는 점이 watch와 가장 큰 차이입니다. 대신 이전 값은 받을 수 없습니다.`})]),M(`div`,eo,[M(`p`,null,`이름: `+A(n.value)+` / 나이: `+A(r.value)+`세`,1),M(`button`,{onClick:t[0]||=e=>n.value=`이순신`},`이름을 '이순신'으로 변경`),M(`button`,{onClick:t[1]||=e=>r.value++},`나이 한 살 추가 (age++)`)]),M(`div`,to,[t[3]||=M(`h3`,null,`👁️‍🗨️ watchEffect 자동 모니터링 시스템`,-1),M(`p`,null,A(i.value),1),t[4]||=M(`small`,null,` ※ 새로고침하자마자 버튼을 안 눌러도 로그가 이미 찍혀있는 특징을 주목하세요! `,-1)])]))}},[[`__scopeId`,`data-v-542ebb87`]]),ro=e({default:()=>so}),io={class:`practice-card`},ao={class:`practice-area`},oo={class:`monitor`},so=K({__name:`WatchPractice`,setup(e){let t=y(`서울`),n=y(`아직 감시 시스템이 작동하지 않았습니다.`);return u(t,(e,t)=>{n.value=`📍 감시자 발동! [${t}]에서 [${e}]로 변경됨.`,console.log(`🤖 [서버 요청 완료] 기상청 서버에서 ${e}의 날씨 API를 다시 조회합니다...`)}),(e,r)=>(s(),k(`section`,io,[M(`h2`,null,[r[3]||=g(` 감시자 watch()의 원리와 실무 활용 `,-1),N(J,{text:`watch()는 값이 바뀌는 순간 무언가를 실행하는 감시자입니다. 콜백은 (새 값, 이전 값)을 받습니다. 화면에 보여줄 값은 computed로, API 호출·로그 같은 부수 효과는 watch로 처리합니다.`})]),M(`div`,ao,[r[4]||=M(`h3`,null,`🏙️ 지역 선택 제어판`,-1),M(`p`,null,`현재 선택된 도시: `+A(t.value),1),M(`button`,{onClick:r[0]||=e=>t.value=`서울`},`서울 선택`),M(`button`,{onClick:r[1]||=e=>t.value=`수원`},`수원 선택`),M(`button`,{onClick:r[2]||=e=>t.value=`부산`},`부산 선택`)]),M(`div`,oo,[r[5]||=M(`h3`,null,`👁️‍🗨️ 파수꾼(watch) 모니터링 시스템`,-1),M(`p`,null,A(n.value),1),r[6]||=M(`small`,null,`(버튼을 누른 후 브라우저 콘솔창 F12를 확인해 보세요)`,-1)])]))}},[[`__scopeId`,`data-v-f25592fe`]]),co=e({default:()=>Oo}),lo={class:`practice-card`},uo={class:`area`},fo={class:`request`},po={class:`modes`},mo=[`onClick`],ho={class:`url`},go=[`disabled`],_o={class:`area`},vo={key:0,class:`panel loading`},yo={key:1,class:`panel error`},bo={class:`e-body`},xo={key:2,class:`panel ok`},So={class:`w-city`},Co={class:`w-temp`},wo={class:`w-desc`},To={key:3,class:`panel idle`},Eo={key:0,class:`area`},Do={class:`logs`},Oo=K({__name:`AxiosWeatherPractice`,setup(e){let t=e=>new Promise(t=>setTimeout(t,e)),n={Seoul:{name:`서울`,temp:27.3,humidity:62,desc:`구름 조금`},Busan:{name:`부산`,temp:24.8,humidity:78,desc:`흐림`},Jeju:{name:`제주`,temp:26.1,humidity:71,desc:`가끔 비`}},r=y(`ok`),i=[{value:`ok`,label:`정상 응답`,hint:`200`},{value:`slow`,label:`느린 응답`,hint:`2.5초`},{value:`notfound`,label:`없는 도시`,hint:`404`},{value:`server`,label:`서버 오류`,hint:`500`},{value:`timeout`,label:`응답 없음`,hint:`timeout`}],a=ie.create({baseURL:`https://api.example.com/data/2.5`,timeout:2e3});a.defaults.adapter=async e=>{let i=e.params?.q??``;if(r.value===`slow`?await t(2500):await t(600),r.value===`timeout`&&await t(1e4),r.value===`server`)return Promise.reject(Object.assign(Error(`Request failed with status code 500`),{response:{status:500,data:{message:`internal server error`}},config:e}));let a=n[i];return r.value===`notfound`||!a?Promise.reject(Object.assign(Error(`Request failed with status code 404`),{response:{status:404,data:{cod:`404`,message:`city not found`}},config:e})):{status:200,statusText:`OK`,headers:{},config:e,data:{name:a.name,main:{temp:a.temp,humidity:a.humidity},weather:[{description:a.desc}]}}};let o=y(`Seoul`),c=y(null),l=y(``),u=y(!1),d=y(0),f=y([]),p=(e,t=`plain`)=>f.value.push({id:f.value.length,text:e,tone:t}),m=async()=>{u.value=!0,c.value=null,l.value=``,f.value=[],d.value=0;let e=performance.now();p(`GET /weather?q=${o.value} — 보냈다. 응답을 기다린다`,`wait`);try{let e=await a.get(`/weather`,{params:{q:o.value,units:`metric`,appid:`<API_KEY>`}});c.value={city:e.data.name,temp:e.data.main.temp,humidity:e.data.main.humidity,desc:e.data.weather[0].description},p(`${e.status} ${e.statusText} — response.data 도착`,`ok`)}catch(e){e.response?(l.value=`서버가 ${e.response.status} 로 거절했습니다.`,p(`error.response.status = ${e.response.status}`,`fail`),p(`error.response.data = ${JSON.stringify(e.response.data)}`,`fail`)):(l.value=`서버가 응답하지 않습니다. 네트워크를 확인해 주세요.`,p(`error.response 가 없다 — ${e.code??e.message}`,`fail`))}finally{u.value=!1,d.value=Math.round(performance.now()-e),p(`finally — 로딩 종료 (${d.value}ms)`,`done`)}};return(e,t)=>(s(),k(`section`,lo,[M(`h2`,null,[t[1]||=g(` Axios — 서버에서 날씨 받아오기 `,-1),N(J,{text:`Axios는 브라우저에서 서버에 HTTP 요청을 보내는 라이브러리입니다. axios.get()은 Promise를 돌려주므로 await로 기다립니다. 서버가 준 값은 response가 아니라 response.data에 들어 있습니다. 2xx가 아니면 catch로 떨어지고, 서버가 답을 준 실패는 error.response에 담깁니다.`})]),t[13]||=M(`p`,{class:`lead`},[g(` 실제 OpenWeather 대신 `),M(`b`,null,`가짜 서버`),g(`를 붙였습니다. 키도 네트워크도 필요 없고, 대신 실패를 마음대로 일으켜 볼 수 있습니다. 호출하는 쪽 코드는 진짜 API 와 똑같습니다. `)],-1),M(`div`,uo,[t[5]||=M(`h3`,null,`요청`,-1),M(`div`,fo,[M(`label`,null,[t[3]||=M(`span`,{class:`lb`},`도시 (params.q)`,-1),j(M(`select`,{"onUpdate:modelValue":t[0]||=e=>o.value=e},[...t[2]||=[M(`option`,{value:`Seoul`},`Seoul`,-1),M(`option`,{value:`Busan`},`Busan`,-1),M(`option`,{value:`Jeju`},`Jeju`,-1),M(`option`,{value:`Atlantis`},`Atlantis (DB에 없음)`,-1)]],512),[[B,o.value]])]),M(`label`,null,[t[4]||=M(`span`,{class:`lb`},`서버가 이렇게 굴게`,-1),M(`div`,po,[(s(),k(C,null,P(i,e=>M(`button`,{key:e.value,type:`button`,class:h([`mode`,{on:r.value===e.value}]),onClick:t=>r.value=e.value},[g(A(e.label)+` `,1),M(`small`,null,A(e.hint),1)],10,mo)),64))])])]),M(`pre`,ho,`GET https://api.example.com/data/2.5/weather?q=`+A(o.value)+`&units=metric`,1),M(`button`,{type:`button`,class:`go`,disabled:u.value,onClick:m},A(u.value?`불러오는 중…`:`axios.get() 보내기`),9,go)]),M(`div`,_o,[t[10]||=M(`h3`,null,[g(`화면 `),M(`small`,null,`로딩 · 성공 · 실패 세 갈래를 모두 그려야 한다`)],-1),u.value?(s(),k(`div`,vo,[...t[6]||=[M(`span`,{class:`spinner`,"aria-hidden":`true`},null,-1),M(`p`,null,`불러오는 중입니다…`,-1)]])):l.value?(s(),k(`div`,yo,[t[7]||=M(`p`,{class:`e-title`},`불러오지 못했습니다`,-1),M(`p`,bo,A(l.value),1),M(`button`,{type:`button`,class:`retry`,onClick:m},`다시 시도`)])):c.value?(s(),k(`div`,xo,[M(`p`,So,A(c.value.city),1),M(`p`,Co,[g(A(c.value.temp),1),t[8]||=M(`span`,null,`℃`,-1)]),M(`p`,wo,A(c.value.desc)+` · 습도 `+A(c.value.humidity)+`%`,1)])):(s(),k(`div`,To,[...t[9]||=[M(`p`,null,`아직 요청하지 않았습니다. 위 버튼을 눌러 보세요.`,-1)]]))]),f.value.length?(s(),k(`div`,Eo,[t[12]||=M(`h3`,null,`통신 기록`,-1),M(`ul`,Do,[(s(!0),k(C,null,P(f.value,e=>(s(),k(`li`,{key:e.id,class:h(e.tone)},[t[11]||=M(`span`,{class:`dot`,"aria-hidden":`true`},null,-1),M(`span`,null,A(e.text),1)],2))),128))])])):x(``,!0)]))}},[[`__scopeId`,`data-v-038d0ac1`]]),ko=e({default:()=>zo}),Ao={class:`practice-card`},jo={class:`area`},Mo={key:0,class:`files`},No={class:`f-name`},Po={key:1,class:`all-gone`},Fo={class:`area`},Io={class:`dl-actions`},Lo={key:0,class:`area`},Ro={class:`logs`},zo=K({__name:`ElementConfirmPractice`,setup(e){let t=y([`월간 보고서.pdf`,`회의록.docx`,`예산안.xlsx`]),n=y(0),r=y(!1),i=null,a=y([]),o=(e,t=`plain`)=>a.value.push({id:a.value.length,text:e,tone:t}),c=e=>{ee.confirm(`'${e}' 을(를) 정말 삭제하시겠습니까?`,`삭제 확인`,{confirmButtonText:`삭제`,cancelButtonText:`취소`,type:`warning`}).then(()=>{t.value=t.value.filter(t=>t!==e),W.success(`삭제되었습니다.`),o(`then — '${e}' 삭제됨`,`ok`)}).catch(()=>{W.info(`삭제를 취소했습니다.`),o(`catch — 취소를 눌렀다`,`plain`)})},l=()=>{r.value||(r.value=!0,n.value=0,o(`setInterval 시작 — 300ms 마다 20씩`,`wait`),i=setInterval(()=>{n.value+=20,n.value>=100&&(n.value=100,clearInterval(i),i=null,r.value=!1,W.success(`다운로드가 완료되었습니다.`),o(`clearInterval — 100 도달, 타이머 정리`,`ok`))},300))},u=()=>{clearInterval(i),i=null,n.value=0,r.value=!1,t.value=[`월간 보고서.pdf`,`회의록.docx`,`예산안.xlsx`],a.value=[]};return w(()=>clearInterval(i)),(e,i)=>{let o=m(`el-button`),d=m(`el-card`),f=m(`el-progress`);return s(),k(`section`,Ao,[M(`h2`,null,[i[0]||=g(` Element Plus — 삭제 확인과 진행률 `,-1),N(J,{text:`ElMessageBox.confirm()은 확인·취소 버튼이 있는 모달을 띄우고 Promise를 돌려줍니다. 확인을 누르면 then, 취소를 누르면 catch로 갑니다. el-progress는 percentage에 0~100 숫자를 주면 막대가 찹니다. setInterval로 값을 올릴 때는 100에서 clearInterval로 반드시 멈춰야 합니다.`})]),M(`div`,jo,[i[2]||=M(`h3`,null,[g(`ElMessageBox `),M(`small`,null,`확인은 then, 취소는 catch`)],-1),N(d,{shadow:`never`},{default:b(()=>[t.value.length?(s(),k(`ul`,Mo,[(s(!0),k(C,null,P(t.value,e=>(s(),k(`li`,{key:e},[M(`span`,No,A(e),1),N(o,{type:`danger`,size:`small`,plain:``,onClick:t=>c(e)},{default:b(()=>[...i[1]||=[g(` 삭제 `,-1)]]),_:1},8,[`onClick`])]))),128))])):(s(),k(`p`,Po,`파일을 모두 지웠습니다. 아래 초기화로 되돌릴 수 있습니다.`))]),_:1}),i[3]||=M(`p`,{class:`hint-line`},[g(` 확인도 눌러 보고 `),M(`b`,null,`취소도 눌러 보세요.`),g(` 취소 쪽이 catch 로 간다는 것이 이 문법의 전부입니다. `)],-1)]),M(`div`,Fo,[i[5]||=M(`h3`,null,[g(`el-progress `),M(`small`,null,`setInterval 은 반드시 멈춰야 한다`)],-1),N(d,{shadow:`never`},{default:b(()=>[N(f,{percentage:n.value,status:n.value===100?`success`:void 0,"stroke-width":14},null,8,[`percentage`,`status`]),M(`div`,Io,[N(o,{type:`primary`,loading:r.value,onClick:l},{default:b(()=>[g(A(r.value?`다운로드 중…`:`다운로드 시작`),1)]),_:1},8,[`loading`]),N(o,{onClick:u},{default:b(()=>[...i[4]||=[g(`초기화`,-1)]]),_:1})])]),_:1})]),a.value.length?(s(),k(`div`,Lo,[i[7]||=M(`h3`,null,`기록`,-1),M(`ul`,Ro,[(s(!0),k(C,null,P(a.value,e=>(s(),k(`li`,{key:e.id,class:h(e.tone)},[i[6]||=M(`span`,{class:`dot`,"aria-hidden":`true`},null,-1),M(`span`,null,A(e.text),1)],2))),128))])])):x(``,!0),i[8]||=M(`p`,{class:`note`},[M(`b`,null,`타이머는 스스로 멈추지 않습니다.`),g(` 100 에서 `),M(`code`,null,`clearInterval`),g(` 을 부르지 않으면 값이 120, 140 으로 계속 올라가고, 이 실습을 닫아도 뒤에서 계속 돕니다. 그래서 `),M(`code`,null,`onBeforeUnmount`),g(` 에서도 한 번 더 정리합니다. `)],-1)])}}},[[`__scopeId`,`data-v-80fcad8f`]]),Bo=e({default:()=>$o}),Vo={class:`practice-card`},Ho={class:`area`},Uo={class:`field`},Wo={class:`field row`},Go={class:`state`},Ko={class:`actions`},qo={class:`area`},Jo={class:`state-box`},Yo={class:`area`},Xo={key:0,class:`history`},Zo={class:`tag`},Qo={key:1,class:`hint`},$o=K({__name:`ElementFormPractice`,setup(e){let t=E({email:``,agree:!1}),n=y([]),r=(e,t)=>n.value.unshift({id:n.value.length,type:e,text:t}),i=()=>{if(!t.email.includes(`@`)){W.error(`올바른 이메일 형식이 아닙니다.`),r(`error`,`ElMessage.error — @ 가 없다`);return}if(!t.agree){W.warning(`약관에 동의해야 가입할 수 있습니다.`),r(`warning`,`ElMessage.warning — 약관 미동의`);return}W.success(`${t.email} 님, 가입이 완료되었습니다.`),r(`success`,`ElMessage.success — 통과`)},a=()=>{t.email=``,t.agree=!1,n.value=[]};return(e,r)=>{let o=m(`el-input`),c=m(`el-switch`),l=m(`el-button`),u=m(`el-card`);return s(),k(`section`,Vo,[M(`h2`,null,[r[2]||=g(` Element Plus — 회원가입 폼 `,-1),N(J,{text:`el-input·el-switch는 템플릿에 태그로 쓰는 컴포넌트이고, ElMessage는 태그가 아니라 import해서 호출하는 함수입니다. 화면 오른쪽 위에 잠깐 떴다 사라지는 알림을 띄웁니다. success·warning·error·info 네 종류가 있습니다.`})]),M(`div`,Ho,[N(u,{shadow:`never`,class:`form-card`},{header:b(()=>[...r[3]||=[M(`span`,{class:`card-title`},`회원가입`,-1)]]),default:b(()=>[M(`div`,Uo,[r[4]||=M(`label`,{for:`ep-email`},`이메일`,-1),N(o,{id:`ep-email`,modelValue:t.email,"onUpdate:modelValue":r[0]||=e=>t.email=e,placeholder:`you@example.com`,clearable:``},null,8,[`modelValue`])]),M(`div`,Wo,[r[5]||=M(`label`,{for:`ep-agree`},`약관 동의`,-1),N(c,{id:`ep-agree`,modelValue:t.agree,"onUpdate:modelValue":r[1]||=e=>t.agree=e},null,8,[`modelValue`]),M(`span`,Go,A(t.agree?`동의함`:`동의 안 함`),1)]),M(`div`,Ko,[N(l,{type:`primary`,onClick:i},{default:b(()=>[...r[6]||=[g(`가입하기`,-1)]]),_:1}),N(l,{onClick:a},{default:b(()=>[...r[7]||=[g(`초기화`,-1)]]),_:1})])]),_:1})]),M(`div`,qo,[r[8]||=M(`h3`,null,[g(`userForm `),M(`small`,null,`reactive 객체 안이 이렇게 바뀐다`)],-1),M(`pre`,Jo,A({email:t.email,agree:t.agree}),1)]),M(`div`,Yo,[r[10]||=M(`h3`,null,[g(`알림 기록 `),M(`small`,null,`화면 알림은 3초면 사라지므로 여기 남긴다`)],-1),n.value.length?(s(),k(`ul`,Xo,[(s(!0),k(C,null,P(n.value,e=>(s(),k(`li`,{key:e.id,class:h(e.type)},[M(`span`,Zo,A(e.type),1),M(`span`,null,A(e.text),1)],2))),128))])):(s(),k(`p`,Qo,[...r[9]||=[g(` 빈 칸으로 한 번, `,-1),M(`code`,null,`@`,-1),g(` 없이 한 번, 약관을 끈 채로 한 번 — 세 갈래를 모두 눌러 보세요. `,-1)]]))]),r[11]||=M(`p`,{class:`note`},[M(`b`,null,`ElMessage 는 태그가 아닙니다.`),g(` 템플릿에 `),M(`code`,null,`<el-message />`),g(` 를 적는 것이 아니라 `),M(`code`,null,`import { ElMessage } from 'element-plus'`),g(` 로 가져와 함수처럼 호출합니다. `)],-1)])}}},[[`__scopeId`,`data-v-2fa4b6bf`]]),es=e({default:()=>us}),ts={class:`practice-card`},ns={class:`area`},rs={class:`price`},is={class:`field`},as={class:`field`},os={class:`total`},ss={class:`area`},cs={class:`values`},ls=12500,us=K({__name:`ElementProductPractice`,setup(e){let t=y(1),n=y(4),r=T(()=>(t.value*ls).toLocaleString()),i=[`별로예요`,`그저 그래요`,`괜찮아요`,`좋아요`,`최고예요`];return(e,a)=>{let o=m(`el-input-number`),c=m(`el-rate`),l=m(`el-card`);return s(),k(`section`,ts,[M(`h2`,null,[a[2]||=g(` Element Plus — 상품 수량과 별점 `,-1),N(J,{text:`el-input-number는 숫자 전용 입력창으로 min·max·step으로 범위를 제한합니다. el-rate는 별점 컴포넌트로 show-text를 켜면 점수에 맞는 설명이 함께 나옵니다. 둘 다 v-model로 숫자를 주고받습니다.`})]),M(`div`,ns,[N(l,{shadow:`never`,class:`product-card`},{header:b(()=>[...a[3]||=[M(`span`,{class:`card-title`},`SKALA 텀블러`,-1)]]),default:b(()=>[M(`p`,rs,A(ls.toLocaleString())+`원`,1),M(`div`,is,[a[4]||=M(`label`,null,`수량`,-1),N(o,{modelValue:t.value,"onUpdate:modelValue":a[0]||=e=>t.value=e,min:1,max:10,step:1},null,8,[`modelValue`]),a[5]||=M(`span`,{class:`limit`},`1 ~ 10개`,-1)]),M(`div`,as,[a[6]||=M(`label`,null,`별점`,-1),N(c,{modelValue:n.value,"onUpdate:modelValue":a[1]||=e=>n.value=e,"show-text":``,texts:i},null,8,[`modelValue`])]),M(`div`,os,[a[7]||=M(`span`,null,`합계`,-1),M(`b`,null,A(r.value)+`원`,1)])]),_:1})]),M(`div`,ss,[a[10]||=M(`h3`,null,[g(`지금 값 `),M(`small`,null,`v-model 이 묶어 둔 반응형 상태`)],-1),M(`ul`,cs,[M(`li`,null,[a[8]||=M(`code`,null,`productQuantity`,-1),M(`b`,null,A(t.value),1)]),M(`li`,null,[a[9]||=M(`code`,null,`productRate`,-1),M(`b`,null,A(n.value),1)])])]),a[11]||=M(`p`,{class:`note`},[g(` 수량에서 `),M(`b`,null,`−`),g(` 를 계속 눌러 보세요. 1 에서 멈추고 버튼이 비활성화됩니다. `),M(`code`,null,`:min="1"`),g(` 한 줄이 하는 일입니다. 직접 만들었다면 입력값 검사·버튼 잠금·음수 방어를 전부 손으로 짜야 합니다. `)],-1)])}}},[[`__scopeId`,`data-v-6ea38ed4`]]),ds=e({default:()=>Cs}),fs={class:`practice-card`},ps={class:`area`},ms={class:`run`},hs=[`disabled`],gs={class:`switch`},_s=[`disabled`],vs={class:`area`},ys={class:`pipe`},bs={key:0,class:`area`},xs={class:`logs`},Ss={class:`area`},Cs=K({__name:`ModernAsyncPractice`,setup(e){let t=y(``),n=y([]),r=y(!1),i=y(!1),a=()=>new Promise(e=>setTimeout(()=>e({uid:777}),400)),o=e=>new Promise((t,n)=>setTimeout(()=>{i.value?n(Error(`프로필 서버 응답 없음`)):t({uid:e,nick:`Graves`})},400)),c=(e,t=`plain`)=>n.value.push({id:n.value.length,text:e,tone:t}),l=async()=>{r.value=!0,n.value=[],t.value=`데이터 동기화 중...`;try{c(`await fetchUserId() — 여기서 멈춰 기다린다`,`wait`);let{uid:e}=await a();c(`uid 도착: ${e}`,`ok`),c(`await fetchUserProfile(${e}) — 앞 결과를 인자로 넘겨 연쇄 호출`,`wait`);let{nick:n}=await o(e);c(`nick 도착: ${n}`,`ok`),t.value=`동기화 성공: ${n}님 환영합니다.`}catch(e){c(`catch 로 떨어짐 — ${e.message}`,`fail`),t.value=`통신 실패`}finally{r.value=!1}};return(e,a)=>(s(),k(`section`,fs,[M(`h2`,null,[a[1]||=g(` 과제 3 — 비동기 연쇄 파이프라인 (Async/Await) `,-1),N(J,{text:`async는 이 함수 안에서 비동기 처리를 하겠다는 선언이고, await는 그 작업이 끝날 때까지 다음 줄로 넘어가지 말라는 명령입니다. async 함수는 항상 Promise를 반환합니다. .then/.catch 대신 try/catch로 에러를 잡습니다.`})]),M(`div`,ps,[M(`div`,ms,[M(`button`,{type:`button`,class:`go`,disabled:r.value,onClick:l},A(r.value?`통신 중…`:`과제 3 가동`),9,hs),M(`label`,gs,[j(M(`input`,{"onUpdate:modelValue":a[0]||=e=>i.value=e,type:`checkbox`,disabled:r.value},null,8,_s),[[F,i.value]]),a[2]||=M(`span`,null,[g(`두 번째 호출을 실패시키기 `),M(`small`,null,`catch 로 가는 길 보기`)],-1)])])]),M(`div`,vs,[a[6]||=M(`h3`,null,[g(`두 번의 기다림 `),M(`small`,null,`각 400ms`)],-1),M(`div`,ys,[M(`div`,{class:h([`stage`,{done:n.value.some(e=>e.text.includes(`uid 도착`))}])},[...a[3]||=[M(`code`,null,`fetchUserId()`,-1),M(`span`,null,`{ uid: 777 }`,-1)]],2),a[5]||=M(`span`,{class:`link`,"aria-hidden":`true`},`→`,-1),M(`div`,{class:h([`stage`,{done:n.value.some(e=>e.text.includes(`nick 도착`))}])},[...a[4]||=[M(`code`,null,`fetchUserProfile(uid)`,-1),M(`span`,null,`{ uid, nick }`,-1)]],2)]),a[7]||=M(`p`,{class:`hint-line`},[g(` 앞 호출의 결과(`),M(`code`,null,`uid`),g(`)가 뒤 호출의 인자가 됩니다. 그래서 동시에 못 하고 순서대로 기다립니다. `)],-1)]),n.value.length?(s(),k(`div`,bs,[a[9]||=M(`h3`,null,`진행 기록`,-1),M(`ul`,xs,[(s(!0),k(C,null,P(n.value,e=>(s(),k(`li`,{key:e.id,class:h(e.tone)},[a[8]||=M(`span`,{class:`dot`,"aria-hidden":`true`},null,-1),M(`span`,null,A(e.text),1)],2))),128))])])):x(``,!0),M(`div`,Ss,[a[10]||=M(`h3`,null,`결과창 3`,-1),M(`div`,{class:h([`console`,{empty:!t.value}])},A(t.value||`가동 버튼을 누르면 통신 결과가 여기 찍힙니다.`),3)])]))}},[[`__scopeId`,`data-v-d190aa58`]]),ws=e({default:()=>Rs}),Ts={class:`practice-card`},Es={class:`area`},Ds={class:`given`},Os={class:`given-item`},ks={class:`chips`},As={class:`area`},js={class:`run`},Ms={key:0,class:`area`},Ns={class:`steps`},Ps={class:`s-name`},Fs={class:`s-code`},Is={class:`s-why`},Ls={class:`area`},Rs=K({__name:`ModernExtractPractice`,setup(e){let t=y(``),n=y([]),r=[`김수원`,`이서울`,`박부산`,`최대전`],i={id:101,grade:`VIP`,details:{score:95}},a=()=>{let e=r.includes(`박부산`),{grade:a,details:{score:o}}=i;t.value=`부산 포함 여부: ${e} / 등급: ${a} / 점수: ${o}점`,n.value=[{label:`memberContainsPark`,code:`MEMBERS.includes('박부산')`,value:String(e),kind:`boolean`,why:`값 자체가 아니라 "있느냐"만 돌려준다. 그래서 true 다.`},{label:`grade`,code:`const { grade } = RAW_DATA`,value:`'${a}'`,kind:`string`,why:`키 이름과 변수 이름이 같아야 꺼내진다.`},{label:`score`,code:`const { details: { score } } = RAW_DATA`,value:String(o),kind:`number`,why:`콜론은 "이름 바꾸기"가 아니라 "한 겹 더 들어가기"다.`}]},o=()=>{t.value=``,n.value=[]};return(e,c)=>(s(),k(`section`,Ts,[M(`h2`,null,[c[0]||=g(` 과제 1 — 데이터 추출 및 포맷팅 `,-1),N(J,{text:"구조 분해 할당은 객체나 배열에서 필요한 값만 골라 변수로 꺼내는 문법입니다. 중첩된 객체는 콜론(:)으로 한 겹 더 들어갑니다. 템플릿 리터럴은 백틱(`) 안에서 ${} 로 값을 끼워 넣어 문자열을 조립하는 문법입니다."})]),M(`div`,Es,[c[3]||=M(`h3`,null,`주어진 재료`,-1),M(`div`,Ds,[M(`div`,Os,[c[1]||=M(`code`,{class:`g-name`},`members`,-1),M(`div`,ks,[(s(),k(C,null,P(r,e=>M(`span`,{key:e,class:h({hit:e===`박부산`})},A(e),3)),64))])]),M(`div`,{class:`given-item`},[c[2]||=M(`code`,{class:`g-name`},`rawData`,-1),M(`pre`,{class:`g-value`},A(i))])])]),M(`div`,As,[M(`div`,js,[M(`button`,{type:`button`,class:`go`,onClick:a},`과제 1 가동`),t.value?(s(),k(`button`,{key:0,type:`button`,class:`ghost`,onClick:o},`지우기`)):x(``,!0)])]),n.value.length?(s(),k(`div`,Ms,[c[4]||=M(`h3`,null,[g(`꺼낸 값 `),M(`small`,null,`결과창에 들어가기 전 모습`)],-1),M(`ul`,Ns,[(s(!0),k(C,null,P(n.value,e=>(s(),k(`li`,{key:e.label},[M(`code`,Ps,A(e.label),1),M(`code`,Fs,A(e.code),1),M(`span`,{class:h([`s-value`,e.kind])},A(e.value),3),M(`span`,Is,A(e.why),1)]))),128))])])):x(``,!0),M(`div`,Ls,[c[5]||=M(`h3`,null,`결과창 1`,-1),M(`div`,{class:h([`console`,{empty:!t.value}])},A(t.value||`가동 버튼을 누르면 조립된 문자열이 여기 찍힙니다.`),3)])]))}},[[`__scopeId`,`data-v-0ded5264`]]),zs=e({default:()=>oc}),Bs={class:`practice-card`},Vs={class:`area`},Hs={class:`given`},Us={class:`given-item`},Ws={class:`chips`},Gs={class:`area`},Ks={class:`run`},qs={key:0,class:`area`},Js={class:`carts`},Ys={class:`cart`},Xs={class:`chips`},Zs={class:`cart`},Qs={class:`chips`},$s={key:1,class:`area`},ec={class:`compare`},tc={class:`cm-label`},nc={class:`cm-cell old`},rc={class:`cm-cell now`},ic={class:`cm-why`},ac={class:`area`},oc=K({__name:`ModernImmutablePractice`,setup(e){let t=y(``),n=y([]),r=y([]),i=y([]),a=[`Apple`,`Banana`],o={name:`Orange`,stock:0,preview:null},c=()=>{let e=[...a,o.name],s=o?.preview??`이미지 준비중`,c=o.stock??0;t.value=`카트: ${e} / 이미지: ${s} / 수량: ${c}개`,r.value=[...a],i.value=e,n.value=[{label:`stock (0)`,old:o.stock||99,oldCode:`stock || 99`,now:o.stock??99,nowCode:`stock ?? 99`,why:`0 은 Falsy 라서 || 는 없는 값으로 본다. ?? 는 null·undefined 만 없는 값으로 본다.`,broken:!0},{label:`preview (null)`,old:o.preview||`이미지 준비중`,oldCode:`preview || …`,now:o.preview??`이미지 준비중`,nowCode:`preview ?? …`,why:`null 은 둘 다 없는 값으로 본다. 여기서는 결과가 같다.`,broken:!1}]},l=()=>{t.value=``,n.value=[],r.value=[],i.value=[]},u=e=>e===``?`''`:String(e);return(e,d)=>(s(),k(`section`,Bs,[M(`h2`,null,[d[0]||=g(` 과제 2 — 불변성 복사 및 데이터 방어 `,-1),N(J,{text:`스프레드 연산자(...)는 배열·객체를 펼쳐 새 것을 만들어 원본을 지킵니다. 널 병합 연산자(??)는 좌항이 null이나 undefined일 때만 우항의 기본값을 씁니다. 논리합(||)과 달리 숫자 0과 빈 문자열을 값으로 인정합니다.`})]),M(`div`,Vs,[d[3]||=M(`h3`,null,`주어진 재료`,-1),M(`div`,Hs,[M(`div`,Us,[d[1]||=M(`code`,{class:`g-name`},`currentCart`,-1),M(`div`,Ws,[(s(),k(C,null,P(a,e=>M(`span`,{key:e},A(e),1)),64))])]),M(`div`,{class:`given-item`},[d[2]||=M(`code`,{class:`g-name`},`newProduct`,-1),M(`pre`,{class:`g-value`},A(o))])]),d[4]||=M(`p`,{class:`hint-line`},[M(`b`,null,`stock 이 0`),g(`이고 `),M(`b`,null,`preview 가 null`),g(`인 것이 이 과제의 함정입니다. `)],-1)]),M(`div`,Gs,[M(`div`,Ks,[M(`button`,{type:`button`,class:`go`,onClick:c},`과제 2 가동`),t.value?(s(),k(`button`,{key:0,type:`button`,class:`ghost`,onClick:l},`지우기`)):x(``,!0)])]),i.value.length?(s(),k(`div`,qs,[d[8]||=M(`h3`,null,[g(`원본은 그대로인가 `),M(`small`,null,`스프레드가 하는 일`)],-1),M(`div`,Js,[M(`div`,Ys,[d[5]||=M(`p`,{class:`c-label`},[g(`currentCart `),M(`span`,{class:`tag keep`},`원본`)],-1),M(`div`,Xs,[(s(!0),k(C,null,P(r.value,e=>(s(),k(`span`,{key:e},A(e),1))),128))])]),d[7]||=M(`span`,{class:`arrow`,"aria-hidden":`true`},`→`,-1),M(`div`,Zs,[d[6]||=M(`p`,{class:`c-label`},[g(`updatedCart `),M(`span`,{class:`tag new`},`새 배열`)],-1),M(`div`,Qs,[(s(!0),k(C,null,P(i.value,e=>(s(),k(`span`,{key:e,class:h({added:e===`Orange`})},A(e),3))),128))])])]),d[9]||=M(`p`,{class:`hint-line`},[g(` 오른쪽에 Orange 가 늘었는데 왼쪽은 두 개 그대로입니다. `),M(`code`,null,`=`),g(` 로 대입했다면 왼쪽도 같이 늘었을 것입니다. `)],-1)])):x(``,!0),n.value.length?(s(),k(`div`,$s,[d[10]||=M(`h3`,null,[g(`|| 였다면 `),M(`small`,null,`같은 값에 두 연산자를 각각 써 본 결과`)],-1),M(`ul`,ec,[(s(!0),k(C,null,P(n.value,e=>(s(),k(`li`,{key:e.label,class:h({broken:e.broken})},[M(`span`,tc,A(e.label),1),M(`span`,nc,[M(`code`,null,A(e.oldCode),1),M(`b`,null,A(u(e.old)),1)]),M(`span`,rc,[M(`code`,null,A(e.nowCode),1),M(`b`,null,A(u(e.now)),1)]),M(`span`,ic,A(e.why),1)],2))),128))])])):x(``,!0),M(`div`,ac,[d[11]||=M(`h3`,null,`결과창 2`,-1),M(`div`,{class:h([`console`,{empty:!t.value}])},A(t.value||`가동 버튼을 누르면 조립된 문자열이 여기 찍힙니다.`),3)])]))}},[[`__scopeId`,`data-v-ce0bc34a`]]),sc=H(`counter`,()=>{let e=y(0),t=T(()=>e.value*2);function n(){e.value++}return{count:e,doubleCount:t,increment:n}}),cc={class:`panel`},lc={class:`label`},uc={class:`count`},dc={class:`double`},fc=K({__name:`StoreCounterPanel`,props:{label:{type:String,required:!0}},setup(e){let t=sc(),{count:n,doubleCount:r}=U(t);return(i,a)=>(s(),k(`div`,cc,[M(`p`,lc,A(e.label),1),M(`p`,uc,A(_(n)),1),M(`p`,dc,`doubleCount · `+A(_(r)),1),M(`button`,{type:`button`,onClick:a[0]||=e=>_(t).increment()},`increment()`)]))}},[[`__scopeId`,`data-v-492b3aa9`]]),pc=e({default:()=>Tc}),mc={class:`practice-card`},hc={class:`area`},gc={class:`panels`},_c={class:`area`},vc={key:0,class:`compare`},yc={class:`cell good`},bc={class:`cell-value`},xc={class:`cell bad`},Sc={class:`cell-value`},Cc={key:1,class:`controls`},wc={key:2,class:`note warn`},Tc=K({__name:`StoreCounterPractice`,setup(e){let t=sc(),{count:n}=U(t),{count:r}=t,i=()=>{t.count=0},a=y(!1);return(e,o)=>(s(),k(`section`,mc,[M(`h2`,null,[o[3]||=g(` 한 사물함을 두 컴포넌트가 함께 본다 `,-1),N(J,{text:`아래 두 패널은 부모가 값을 내려 주지 않습니다. 각자 useCounterStore()를 불러 같은 사물함을 열 뿐입니다. 한쪽에서 increment()를 누르면 다른 쪽 숫자도 같이 바뀝니다 — 이것이 Props Drilling 없이 상태를 나누는 방법입니다.`})]),M(`div`,hc,[M(`div`,gc,[N(fc,{label:`COMPONENT A`}),N(fc,{label:`COMPONENT B`})]),o[4]||=M(`p`,{class:`note`},[g(` 두 패널 사이에는 `),M(`b`,null,`props 도 emits 도 없습니다`),g(`. 각자 `),M(`code`,null,`useCounterStore()`),g(` 로 같은 Store 를 열었을 뿐인데 숫자가 함께 움직입니다. `)],-1)]),M(`div`,_c,[M(`h3`,null,[o[5]||=g(` storeToRefs 를 빼면 어떻게 되나 `,-1),M(`button`,{type:`button`,class:`peek`,onClick:o[0]||=e=>a.value=!a.value},A(a.value?`닫기`:`직접 확인`),1)]),a.value?(s(),k(`div`,vc,[M(`div`,yc,[o[6]||=M(`p`,{class:`cell-head`},[M(`span`,{class:`tag ok`},`정상`),M(`code`,null,`const { count } = storeToRefs(store)`)],-1),M(`p`,bc,A(_(n)),1)]),M(`div`,xc,[o[7]||=M(`p`,{class:`cell-head`},[M(`span`,{class:`tag no`},`끊김`),M(`code`,null,`const { count } = store`)],-1),M(`p`,Sc,A(_(r)),1)])])):x(``,!0),a.value?(s(),k(`div`,Cc,[M(`button`,{type:`button`,onClick:o[1]||=e=>_(t).increment()},`increment()`),M(`button`,{type:`button`,class:`ghost`,onClick:o[2]||=e=>i()},`0 으로 되돌리기`)])):x(``,!0),a.value?(s(),k(`p`,wc,[...o[8]||=[g(` 오른쪽은 `,-1),M(`b`,null,`값이 복사된 순간`,-1),g(`에 멈춰 있습니다. Store 의 state 는 ref 인데 구조 분해하면 `,-1),M(`code`,null,`.value`,-1),g(` 만 꺼내져 연결이 끊기기 때문입니다. `,-1),M(`b`,null,`actions 는 함수라 그냥 꺼내 써도 됩니다`,-1),g(` — storeToRefs 는 state 와 getters 에만 씁니다. `,-1)]])):x(``,!0)])]))}},[[`__scopeId`,`data-v-4f9b28d2`]]),Ec=e({default:()=>Uc}),Dc={class:`practice-card`},Oc={class:`area`},kc={class:`routes`},Ac={class:`path`},jc={class:`name`},Mc={key:0,class:`hit`},Nc={class:`area`},Pc={class:`links`},Fc={class:`area`},Ic={class:`view-name`},Lc={class:`view-body`},Rc={key:0,class:`params`},zc={class:`area`},Bc={class:`ab`},Vc={class:`tick`},Hc={class:`ab-buttons`},Uc=K({__name:`RouterBasicPractice`,setup(e){let t=[{path:`/`,name:`home`,label:`홈`,body:`오늘의 날씨 목록이 여기 나옵니다.`},{path:`/about`,name:`about`,label:`소개`,body:`이 앱이 무엇인지 설명하는 화면입니다.`},{path:`/weather/:cityId`,name:`detail`,label:`도시 상세`,body:`한 도시의 시간별 날씨를 봅니다.`},{path:`/:pathMatch(.*)*`,name:`not-found`,label:`없는 페이지`,body:`404`}],n=y(`/`),r=y(`/`),i=T(()=>{for(let e of t){if(e.path===`/:pathMatch(.*)*`)continue;let t=`^`+e.path.replace(/:([\w]+)/g,`(?<$1>[^/]+)`)+`$`,r=n.value.match(new RegExp(t));if(r)return{route:e,params:r.groups??{}}}return{route:t[t.length-1],params:{}}}),a=e=>{n.value=e,r.value=e},o=y(0),c=y(!1),l=()=>{c.value=!0,o.value=0,setTimeout(()=>c.value=!1,1400)};return(e,n)=>(s(),k(`section`,Dc,[M(`h2`,null,[n[9]||=g(` 주소 → 화면, 라우터가 하는 일 `,-1),N(J,{text:`라우터는 주소표(routes)를 들고 있다가, 주소가 바뀌면 거기 맞는 컴포넌트를 골라 RouterView 자리에 끼워 넣습니다. 아래는 그 과정을 그대로 흉내 낸 미니 라우터입니다. 진짜 vue-router를 이 안에 또 띄우면 이 사이트의 주소까지 바뀌므로 원리만 재현했습니다.`})]),M(`div`,Oc,[n[11]||=M(`h3`,null,`① 주소표 (routes)`,-1),M(`ul`,kc,[(s(),k(C,null,P(t,e=>M(`li`,{key:e.path,class:h({on:e===i.value.route})},[M(`code`,Ac,A(e.path),1),n[10]||=M(`span`,{class:`arrow`,"aria-hidden":`true`},`→`,-1),M(`span`,jc,A(e.label),1),e===i.value.route?(s(),k(`span`,Mc,`지금 이것`)):x(``,!0)],2)),64))])]),M(`div`,Nc,[n[14]||=M(`h3`,null,`② 주소창`,-1),M(`form`,{class:`bar`,onSubmit:n[1]||=L(e=>a(r.value),[`prevent`])},[n[12]||=M(`span`,{class:`origin`},`myapp.com`,-1),j(M(`input`,{"onUpdate:modelValue":n[0]||=e=>r.value=e,spellcheck:`false`,"aria-label":`주소`,placeholder:`/about`},null,512),[[I,r.value]]),n[13]||=M(`button`,{type:`submit`,"aria-label":`이동`},[M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`M5 12h13M13 6l6 6-6 6`})])],-1)],32),M(`p`,Pc,[M(`button`,{type:`button`,class:`link`,onClick:n[2]||=e=>a(`/`)},`/`),M(`button`,{type:`button`,class:`link`,onClick:n[3]||=e=>a(`/about`)},`/about`),M(`button`,{type:`button`,class:`link`,onClick:n[4]||=e=>a(`/weather/seoul`)},`/weather/seoul`),M(`button`,{type:`button`,class:`link`,onClick:n[5]||=e=>a(`/weather/busan`)},`/weather/busan`),M(`button`,{type:`button`,class:`link`,onClick:n[6]||=e=>a(`/hello`)},`/hello (없는 주소)`)])]),M(`div`,Fc,[n[16]||=M(`h3`,null,`③ <RouterView /> — 화면이 갈아끼워지는 자리`,-1),M(`div`,{class:h([`viewport`,{missing:i.value.route.name===`not-found`}])},[M(`p`,Ic,A(i.value.route.label),1),M(`p`,Lc,A(i.value.route.body),1),Object.keys(i.value.params).length?(s(),k(`p`,Rc,[n[15]||=M(`span`,{class:`tag`},`route.params`,-1),M(`code`,null,A(i.value.params),1)])):x(``,!0)],2)]),M(`div`,zc,[n[18]||=M(`h3`,null,`④ 왜 <a href> 를 쓰면 안 되나`,-1),n[19]||=M(`p`,{class:`explain`},[g(` 아래 숫자는 화면이 기억하고 있는 값입니다(`),M(`code`,null,`ref`),g(`). 두 버튼을 각각 눌러 보세요. `)],-1),M(`div`,Bc,[M(`div`,{class:h([`counter`,{wiped:c.value}])},[M(`span`,Vc,A(o.value),1),M(`button`,{type:`button`,onClick:n[7]||=e=>o.value++},`+1 올리기`)],2),M(`div`,Hc,[M(`button`,{type:`button`,class:`good`,onClick:n[8]||=e=>a(`/about`)},` RouterLink 로 이동 `),M(`button`,{type:`button`,class:`bad`,onClick:l},` <a href> 로 이동 `)])]),M(`p`,{class:h([`verdict`,{show:c.value}])},[...n[17]||=[g(` 새로고침이 일어나 `,-1),M(`b`,null,`기억하던 값이 0으로 초기화`,-1),g(`되었습니다. `,-1)]],2)])]))}},[[`__scopeId`,`data-v-9a2bf107`]]),Wc=e({default:()=>ol}),Gc={class:`practice-card`},Kc={class:`area`},qc={class:`area`},Jc={class:`links`},Yc=[`onClick`],Xc={key:0,class:`lock`,"aria-hidden":`true`},Zc={class:`area`},Qc={class:`view-name`},$c={class:`view-path`},el={class:`toggle`},tl={class:`area`},nl={key:0,class:`logs`},rl={class:`hook`},il={class:`text`},al={key:1,class:`hint`},ol=K({__name:`RouterGuardPractice`,setup(e){let t=[{path:`/`,name:`Home`,label:`홈`,meta:{}},{path:`/about`,name:`About`,label:`소개`,meta:{}},{path:`/mypage`,name:`MyPage`,label:`마이페이지`,meta:{isAuth:!0}},{path:`/admin`,name:`Admin`,label:`관리자`,meta:{isAuth:!0}},{path:`/login`,name:`Login`,label:`로그인`,meta:{}}],n=y(!1),r=y(!0),i=y(`/`),a=y([]),o=T(()=>t.find(e=>e.path===i.value)??null),c=T(()=>o.value?{kind:`page`,route:o.value}:r.value?{kind:`not-found`}:{kind:`blank`}),l=(e,t,n=`plain`)=>a.value.unshift({id:a.value.length,hook:e,text:t,tone:n}),u=e=>{a.value=[];let r=t.find(t=>t.path===e)?.meta??{};if(l(`beforeEach`,`to: ${e} · from: ${i.value}`,`start`),r.isAuth&&!n.value){l(`beforeEach`,`to.meta.isAuth 인데 로그인 안 됨 → next('/login')`,`block`),i.value=`/login`,l(`afterEach`,`로그인 화면으로 이동 완료`,`done`);return}l(`beforeEach`,`next() — 통과 허가`,`pass`),l(`beforeResolve`,`컴포넌트까지 다 준비됨 (마지막 확인 지점)`,`plain`),i.value=e,l(`afterEach`,`화면 전환 완료 (분석 로그 보내기 좋은 곳)`,`done`)},d=()=>{n.value=!0,l(`상태`,`로그인했습니다. 이제 잠긴 주소도 들어갈 수 있습니다.`,`pass`)},f=()=>{n.value=!1,l(`상태`,`로그아웃했습니다.`,`block`)};return(e,i)=>(s(),k(`section`,Gc,[M(`h2`,null,[i[3]||=g(` Navigation Guard — 페이지 입장 전 검문소 `,-1),N(J,{text:`특정 주소로 들어가기 직전에 가로채서 권한을 검사하거나 다른 곳으로 보내는 장치입니다. 로그인해야 볼 수 있는 마이페이지·관리자 화면에 씁니다. beforeEach(시작 직전) → beforeResolve(컴포넌트까지 준비된 뒤) → afterEach(전환 완료 후) 순서로 불립니다.`})]),M(`div`,Kc,[M(`div`,{class:h([`auth`,{on:n.value}])},[i[4]||=M(`span`,{class:`dot`,"aria-hidden":`true`},null,-1),M(`b`,null,A(n.value?`로그인 상태`:`비로그인 상태`),1),M(`code`,null,`isAuthenticated = `+A(n.value),1),M(`button`,{type:`button`,onClick:i[0]||=e=>n.value?f():d()},A(n.value?`로그아웃`:`로그인하기`),1)],2)]),M(`div`,qc,[i[5]||=M(`h3`,null,`어디로 갈까요`,-1),M(`div`,Jc,[(s(),k(C,null,P(t,e=>M(`button`,{key:e.path,type:`button`,class:h([`link`,{locked:e.meta.isAuth}]),onClick:t=>u(e.path)},[g(A(e.path)+` `,1),e.meta.isAuth?(s(),k(`span`,Xc,`🔒`)):x(``,!0)],10,Yc)),64)),M(`button`,{type:`button`,class:`link ghost`,onClick:i[1]||=e=>u(`/unknown-page`)},` /unknown-page `)])]),M(`div`,Zc,[i[11]||=M(`h3`,null,`<RouterView />`,-1),M(`div`,{class:h([`viewport`,c.value.kind])},[c.value.kind===`page`?(s(),k(C,{key:0},[M(`p`,Qc,A(c.value.route.label),1),M(`code`,$c,A(c.value.route.path),1)],64)):c.value.kind===`not-found`?(s(),k(C,{key:1},[i[6]||=M(`p`,{class:`view-name`},`404 — 그런 페이지는 없습니다`,-1),i[7]||=M(`code`,{class:`view-path`},`Catch-all Route 가 받아 냈습니다`,-1)],64)):(s(),k(C,{key:2},[i[8]||=M(`p`,{class:`view-name blank`},`(하얗게 비어 있음)`,-1),i[9]||=M(`code`,{class:`view-path`},`매칭되는 컴포넌트가 없어 아무것도 그려지지 않았습니다`,-1)],64))],2),M(`label`,el,[j(M(`input`,{"onUpdate:modelValue":i[2]||=e=>r.value=e,type:`checkbox`},null,512),[[F,r.value]]),i[10]||=M(`span`,null,[g(` Catch-all Route 사용 — `),M(`code`,null,`{ path: '/:pathMatch(.*)*', component: NotFoundView }`)],-1)])]),M(`div`,tl,[i[12]||=M(`h3`,null,[g(`검문 기록 `),M(`small`,null,`최근 이동이 위에`)],-1),a.value.length?(s(),k(`ul`,nl,[(s(!0),k(C,null,P(a.value,e=>(s(),k(`li`,{key:e.id,class:h(e.tone)},[M(`span`,rl,A(e.hook),1),M(`span`,il,A(e.text),1)],2))),128))])):(s(),k(`p`,al,`위에서 주소를 눌러 보세요. 검문 순서가 여기 쌓입니다.`))])]))}},[[`__scopeId`,`data-v-0450e31b`]]),sl=e({default:()=>El}),cl={class:`practice-card`},ll={class:`area`},ul={class:`urlbar`},dl={class:`url`},fl={class:`area`},pl={class:`route`},ml={key:0},hl={key:0},gl={class:`area`},_l={class:`methods`},vl=[`onClick`],yl={class:`area`},bl={class:`stack`},xl={class:`no`},Sl={key:0,class:`here-tag`},Cl={class:`nav`},wl=[`disabled`],Tl=[`disabled`],El=K({__name:`RouterNavigatePractice`,setup(e){let t=y([`/`]),n=y(0),r=T(()=>t.value[n.value]),i=T(()=>{let[e,t=``]=r.value.split(`?`),n={};for(let e of t.split(`&`).filter(Boolean)){let[t,r=``]=e.split(`=`);n[decodeURIComponent(t)]=decodeURIComponent(r)}for(let t of[{name:`WeatherHome`,path:`/`},{name:`WeatherDetail`,path:`/weather/:cityId`},{name:`UserPosts`,path:`/user/:userId/posts`},{name:`Search`,path:`/search`}]){let r=RegExp(`^`+t.path.replace(/:(\w+)/g,`(?<$1>[^/]+)`)+`$`),i=e.match(r);if(i)return{name:t.name,path:e,params:i.groups??{},query:n}}return{name:`NotFound`,path:e,params:{},query:n}}),a=e=>{t.value=[...t.value.slice(0,n.value+1),e],n.value=t.value.length-1},o=e=>{t.value=[...t.value.slice(0,n.value),e],n.value=t.value.length-1},c=e=>{let r=n.value+e;r>=0&&r<t.value.length&&(n.value=r)},l=T(()=>n.value>0),u=T(()=>n.value<t.value.length-1),d=[{label:`router.push('/about')`,run:()=>a(`/about`),note:`가장 단순한 형태`},{label:`router.push({ name: 'WeatherDetail', params: { cityId: 'seoul' } })`,run:()=>a(`/weather/seoul`),note:`이름 + 동적 세그먼트`},{label:`router.push({ name: 'Search', query: { q: 'vue' } })`,run:()=>a(`/search?q=vue`),note:`물음표 뒤 쿼리`},{label:`router.push({ name: 'UserPosts', params: { userId: 42 } })`,run:()=>a(`/user/42/posts`),note:`중간 위치 동적 세그먼트`},{label:`router.replace('/login')`,run:()=>o(`/login`),note:`기록을 덮어쓴다 — 뒤로가기로 못 돌아온다`,danger:!0}];return(e,a)=>(s(),k(`section`,cl,[M(`h2`,null,[a[2]||=g(` useRoute() 로 읽고, useRouter() 로 옮긴다 `,-1),N(J,{text:`이름이 한 글자 차이라 헷갈립니다. useRoute()는 '지금 이 페이지의 정보'를 읽는 것이고(읽기 전용), useRouter()는 '페이지를 옮기는 리모컨'입니다(동작). 아래에서 버튼을 눌러 주소를 옮기면 위쪽 route 객체가 어떻게 바뀌는지 보세요.`})]),M(`div`,ll,[M(`div`,ul,[a[3]||=M(`span`,{class:`origin`},`myapp.com`,-1),M(`span`,dl,A(r.value),1)])]),M(`div`,fl,[a[8]||=M(`h3`,null,[g(`useRoute() — 지금 페이지의 정보 `),M(`span`,{class:`tag read`},`읽기`)],-1),M(`dl`,pl,[a[4]||=M(`dt`,null,`route.path`,-1),M(`dd`,null,[M(`code`,null,A(i.value.path),1)]),a[5]||=M(`dt`,null,`route.name`,-1),M(`dd`,null,[M(`code`,null,A(i.value.name),1)]),a[6]||=M(`dt`,null,`route.params`,-1),M(`dd`,{class:h({empty:!Object.keys(i.value.params).length})},[M(`code`,null,A(i.value.params),1),Object.keys(i.value.params).length?x(``,!0):(s(),k(`small`,ml,`주소에 :빈칸이 없는 경로`))],2),a[7]||=M(`dt`,null,`route.query`,-1),M(`dd`,{class:h({empty:!Object.keys(i.value.query).length})},[M(`code`,null,A(i.value.query),1),Object.keys(i.value.query).length?x(``,!0):(s(),k(`small`,hl,`물음표 뒤가 비어 있음`))],2)])]),M(`div`,gl,[a[9]||=M(`h3`,null,[g(`useRouter() — 페이지를 옮기는 리모컨 `),M(`span`,{class:`tag write`},`동작`)],-1),M(`ul`,_l,[(s(),k(C,null,P(d,e=>M(`li`,{key:e.label},[M(`button`,{type:`button`,class:h({danger:e.danger}),onClick:t=>e.run()},[M(`code`,null,A(e.label),1),M(`small`,null,A(e.note),1)],10,vl)])),64))])]),M(`div`,yl,[a[10]||=M(`h3`,null,`히스토리 스택 — push 와 replace 의 차이`,-1),M(`ol`,bl,[(s(!0),k(C,null,P(t.value,(e,t)=>(s(),k(`li`,{key:t,class:h({here:t===n.value})},[M(`span`,xl,A(t),1),M(`code`,null,A(e),1),t===n.value?(s(),k(`span`,Sl,`지금`)):x(``,!0)],2))),128))]),M(`div`,Cl,[M(`button`,{type:`button`,disabled:!l.value,onClick:a[0]||=e=>c(-1)},`← router.go(-1)`,8,wl),M(`button`,{type:`button`,disabled:!u.value,onClick:a[1]||=e=>c(1)},`router.go(1) →`,8,Tl)]),a[11]||=M(`p`,{class:`note`},[M(`b`,null,`push`),g(` 는 기록을 `),M(`b`,null,`쌓고`),g(`, `),M(`b`,null,`replace`),g(` 는 지금 기록을 `),M(`b`,null,`덮어씁니다`),g(`. 그래서 로그인 후 이동에는 replace를 씁니다 — 뒤로가기로 로그인 화면에 다시 돌아가면 곤란하니까요. `)],-1)])]))}},[[`__scopeId`,`data-v-1eefdd55`]]),Dl=`<script setup>
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
`,Ol=`<script setup>
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
`,kl=`<script setup>
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

/**
 * 눌러 볼 색상 버튼.
 * css 를 인라인 style 로 칠해 두면, 아래에서 getComputedStyle 로 다시 읽었을 때
 * 내가 적은 이름이 아니라 브라우저가 계산한 rgb() 값이 나온다 — 그 차이를 보는 실습이다.
 */
const COLOR_BUTTONS = [
  { name: '빨강', css: '#e2564a' },
  { name: '초록', css: '#2f8f5b' },
  { name: '파랑', css: '#3a6ea8' },
]

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

      <!--
        색상 이름은 내가 직접 넘기는 인자이고, $event 는 Vue 가 주는 이벤트 객체다.
        둘을 함께 넘길 때는 인자를 적는 순간 $event 가 자동으로 사라지므로
        이렇게 명시적으로 적어 줘야 한다 — 이 실습에서 가장 자주 걸리는 지점이다.
      -->
      <div class="color-buttons">
        <button
          v-for="color in COLOR_BUTTONS"
          :key="color.name"
          type="button"
          class="color-button"
          :style="{ backgroundColor: color.css }"
          @click="getColorInfo(color.name, $event)"
        >
          {{ color.name }}
        </button>
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

.color-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0;
}

.color-button {
  padding: 8px 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 700;
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
`,Al=`<script setup>
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
`,jl=`<script setup>
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
`,Ml=`<script setup>
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
`,Nl=`<script setup>
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
`,Pl=`<script setup>
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
`,Fl=`<script setup>
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
`,Il=`<script setup>
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
`,Ll=`<script setup>
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
`,Rl=`<script setup>
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
`,zl=`<script setup>
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
`,Bl=`<script setup>
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
`,Vl=`<script setup>
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
`,Hl=`<script setup>
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
`,Ul=`<script setup>
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
`,Wl=`<script setup>
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
`,Gl=`<script setup>
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
`,Kl=`<script setup>
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
`,ql=`<script setup>
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
`,Jl=`<script setup>
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
`,Yl=`<script setup>
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
`,Xl=`<script setup>
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
`,Zl=`<script setup>
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
`,Ql=`<script setup>
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
`,$l=`<script setup>
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
`,eu=`<script setup>
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
`,tu=`<script setup>
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
`,nu=`<script setup>
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
`,ru=`<script setup>
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
`,iu=`<script setup>
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
`,au=`<script setup>
import { ref } from 'vue'
import axios from 'axios'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 208쪽 Code Challenge — Axios 로 날씨 API 호출하기.
 *
 * 교안은 OpenWeather 실키를 쓰지만 여기서는 가짜 서버를 컴포넌트 안에 둔다.
 * 이 사이트는 이미 실키로 429(Too Many Requests)와 키 노출을 겪었고,
 * 무엇보다 학습에서 봐야 할 것은 날씨 값이 아니라 "실패했을 때 무슨 일이 나는가"다.
 * 진짜 서버로는 500 이나 타임아웃을 마음대로 일으켜 볼 수 없다.
 *
 * axios 인스턴스에 가짜 어댑터를 끼웠으므로, 호출하는 쪽 코드
 * (axios.get → try/catch/finally) 는 실제 API 를 쓸 때와 완전히 같다.
 */

/** 응답을 지연시켜 로딩 상태가 눈에 보이게 한다 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const FAKE_DB = {
  Seoul: { name: '서울', temp: 27.3, humidity: 62, desc: '구름 조금' },
  Busan: { name: '부산', temp: 24.8, humidity: 78, desc: '흐림' },
  Jeju: { name: '제주', temp: 26.1, humidity: 71, desc: '가끔 비' },
}

/** 다음 호출에서 서버가 어떻게 굴 것인지 */
const mode = ref('ok')

const MODES = [
  { value: 'ok', label: '정상 응답', hint: '200' },
  { value: 'slow', label: '느린 응답', hint: '2.5초' },
  { value: 'notfound', label: '없는 도시', hint: '404' },
  { value: 'server', label: '서버 오류', hint: '500' },
  { value: 'timeout', label: '응답 없음', hint: 'timeout' },
]

/**
 * axios 인스턴스 — baseURL·timeout·params 를 여기서 한 번만 정한다.
 * adapter 를 바꾸면 네트워크로 나가지 않고 이 함수가 대신 응답한다.
 */
const api = axios.create({
  baseURL: 'https://api.example.com/data/2.5',
  timeout: 2000,
})

api.defaults.adapter = async (config) => {
  const city = config.params?.q ?? ''

  if (mode.value === 'slow') await sleep(2500)
  else await sleep(600)

  if (mode.value === 'timeout') await sleep(10000)

  if (mode.value === 'server') {
    // axios 는 2xx 가 아니면 reject 한다. error.response 에 서버가 준 것이 들어 있다
    return Promise.reject(
      Object.assign(new Error('Request failed with status code 500'), {
        response: { status: 500, data: { message: 'internal server error' } },
        config,
      }),
    )
  }

  const found = FAKE_DB[city]
  if (mode.value === 'notfound' || !found) {
    return Promise.reject(
      Object.assign(new Error('Request failed with status code 404'), {
        response: { status: 404, data: { cod: '404', message: 'city not found' } },
        config,
      }),
    )
  }

  return {
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
    data: {
      name: found.name,
      main: { temp: found.temp, humidity: found.humidity },
      weather: [{ description: found.desc }],
    },
  }
}

const city = ref('Seoul')
const weather = ref(null)
const errorMessage = ref('')
const isLoading = ref(false)
const elapsed = ref(0)
const logs = ref([])

const add = (text, tone = 'plain') => logs.value.push({ id: logs.value.length, text, tone })

/**
 * 교안의 getWeather 와 같은 모양이다.
 * try 에서 성공을, catch 에서 실패를, finally 에서 성공·실패 무관한 뒷정리를 한다.
 */
const getWeather = async () => {
  isLoading.value = true
  weather.value = null
  errorMessage.value = ''
  logs.value = []
  elapsed.value = 0

  const startedAt = performance.now()
  add(\`GET /weather?q=\${city.value} — 보냈다. 응답을 기다린다\`, 'wait')

  try {
    const response = await api.get('/weather', {
      params: { q: city.value, units: 'metric', appid: '<API_KEY>' },
    })

    // 서버가 준 것은 response 가 아니라 response.data 다 — 가장 자주 틀리는 지점
    weather.value = {
      city: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      desc: response.data.weather[0].description,
    }
    add(\`\${response.status} \${response.statusText} — response.data 도착\`, 'ok')
  } catch (error) {
    // 실패는 두 갈래다. 서버가 답을 준 실패와, 아예 답이 없는 실패
    if (error.response) {
      errorMessage.value = \`서버가 \${error.response.status} 로 거절했습니다.\`
      add(\`error.response.status = \${error.response.status}\`, 'fail')
      add(\`error.response.data = \${JSON.stringify(error.response.data)}\`, 'fail')
    } else {
      errorMessage.value = '서버가 응답하지 않습니다. 네트워크를 확인해 주세요.'
      add(\`error.response 가 없다 — \${error.code ?? error.message}\`, 'fail')
    }
  } finally {
    // 로딩 표시는 여기서 끈다. try 끝에서 끄면 실패했을 때 영원히 도는 화면이 된다
    isLoading.value = false
    elapsed.value = Math.round(performance.now() - startedAt)
    add(\`finally — 로딩 종료 (\${elapsed.value}ms)\`, 'done')
  }
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Axios — 서버에서 날씨 받아오기
      <ConceptHelp
        text="Axios는 브라우저에서 서버에 HTTP 요청을 보내는 라이브러리입니다. axios.get()은 Promise를 돌려주므로 await로 기다립니다. 서버가 준 값은 response가 아니라 response.data에 들어 있습니다. 2xx가 아니면 catch로 떨어지고, 서버가 답을 준 실패는 error.response에 담깁니다."
      />
    </h2>

    <p class="lead">
      실제 OpenWeather 대신 <b>가짜 서버</b>를 붙였습니다. 키도 네트워크도 필요 없고, 대신 실패를
      마음대로 일으켜 볼 수 있습니다. 호출하는 쪽 코드는 진짜 API 와 똑같습니다.
    </p>

    <!-- 요청 만들기 -->
    <div class="area">
      <h3>요청</h3>
      <div class="request">
        <label>
          <span class="lb">도시 (params.q)</span>
          <select v-model="city">
            <option value="Seoul">Seoul</option>
            <option value="Busan">Busan</option>
            <option value="Jeju">Jeju</option>
            <option value="Atlantis">Atlantis (DB에 없음)</option>
          </select>
        </label>

        <label>
          <span class="lb">서버가 이렇게 굴게</span>
          <div class="modes">
            <button
              v-for="m in MODES"
              :key="m.value"
              type="button"
              class="mode"
              :class="{ on: mode === m.value }"
              @click="mode = m.value"
            >
              {{ m.label }}
              <small>{{ m.hint }}</small>
            </button>
          </div>
        </label>
      </div>

      <pre class="url">GET https://api.example.com/data/2.5/weather?q={{ city }}&amp;units=metric</pre>

      <button type="button" class="go" :disabled="isLoading" @click="getWeather">
        {{ isLoading ? '불러오는 중…' : 'axios.get() 보내기' }}
      </button>
    </div>

    <!-- 화면 세 가지 상태 -->
    <div class="area">
      <h3>화면 <small>로딩 · 성공 · 실패 세 갈래를 모두 그려야 한다</small></h3>

      <div v-if="isLoading" class="panel loading">
        <span class="spinner" aria-hidden="true" />
        <p>불러오는 중입니다…</p>
      </div>

      <div v-else-if="errorMessage" class="panel error">
        <p class="e-title">불러오지 못했습니다</p>
        <p class="e-body">{{ errorMessage }}</p>
        <button type="button" class="retry" @click="getWeather">다시 시도</button>
      </div>

      <div v-else-if="weather" class="panel ok">
        <p class="w-city">{{ weather.city }}</p>
        <p class="w-temp">{{ weather.temp }}<span>℃</span></p>
        <p class="w-desc">{{ weather.desc }} · 습도 {{ weather.humidity }}%</p>
      </div>

      <div v-else class="panel idle">
        <p>아직 요청하지 않았습니다. 위 버튼을 눌러 보세요.</p>
      </div>
    </div>

    <!-- 통신 기록 -->
    <div v-if="logs.length" class="area">
      <h3>통신 기록</h3>
      <ul class="logs">
        <li v-for="log in logs" :key="log.id" :class="log.tone">
          <span class="dot" aria-hidden="true" />
          <span>{{ log.text }}</span>
        </li>
      </ul>
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

.lead {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.area + .area {
  margin-top: 20px;
}

/* 요청 */
.request {
  display: grid;
  gap: 12px;
  margin-bottom: 12px;
}

.request label {
  display: grid;
  gap: 7px;
}

.lb {
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.request select {
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
  color: var(--ink);
  font: inherit;
  font-size: 13px;
}

.modes {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mode {
  display: grid;
  gap: 2px;
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  text-align: left;
}

.mode small {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 10.5px;
}

.mode.on {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
  font-weight: 700;
}

.mode.on small {
  color: var(--accent);
}

.url {
  margin: 0 0 12px;
  padding: 11px 14px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
  overflow-x: auto;
}

.go {
  padding: 10px 20px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.go:disabled {
  opacity: 0.55;
  cursor: progress;
}

/* 결과 패널 */
.panel {
  display: grid;
  gap: 8px;
  padding: 26px 20px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
  text-align: center;
}

.panel.idle {
  color: var(--faint);
  font-size: 13px;
}

.panel.loading {
  justify-items: center;
  color: var(--muted);
  font-size: 13px;
}

.spinner {
  width: 22px;
  height: 22px;
  border: 2px solid var(--line);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation-duration: 3s;
  }
}

.panel.error {
  border-color: var(--signal);
  background: var(--signal-tint);
}

.e-title {
  margin: 0;
  color: var(--signal);
  font-size: 14.5px;
  font-weight: 700;
}

.e-body {
  margin: 0;
  color: var(--signal);
  font-size: 13px;
}

.retry {
  justify-self: center;
  margin-top: 4px;
  padding: 7px 16px;
  border: 1px solid var(--signal);
  border-radius: 999px;
  color: var(--signal);
  background: transparent;
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
}

.panel.ok {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.w-city {
  margin: 0;
  color: var(--accent);
  font-size: 14px;
  font-weight: 700;
}

.w-temp {
  margin: 0;
  color: var(--ink);
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.w-temp span {
  font-size: 20px;
}

.w-desc {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

/* 기록 */
.logs {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.logs li {
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.6;
  word-break: break-all;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--line-strong);
}

.logs li.wait .dot {
  background: var(--slate);
}

.logs li.ok .dot {
  background: var(--accent);
}

.logs li.fail {
  background: var(--signal-tint);
  color: var(--signal);
}

.logs li.fail .dot {
  background: var(--signal);
}
</style>
`,ou=`<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 227쪽 Code Challenge — 삭제 확인창과 진행률.
 *
 * 두 가지가 한 화면에 있는 이유가 있다.
 * ElMessageBox 는 "확인은 then, 취소는 catch" 라는 Promise 갈래를 보여 주고,
 * el-progress 는 setInterval 을 반드시 정리해야 한다는 것을 보여 준다.
 * 둘 다 안 지키면 조용히 새는 코드가 된다 — 화면에는 아무 표시도 안 난다.
 */

const items = ref(['월간 보고서.pdf', '회의록.docx', '예산안.xlsx'])
const downloadProgress = ref(0)
const isDownloading = ref(false)

/** setInterval 이 돌려준 번호. 이걸 들고 있어야 나중에 멈출 수 있다 */
let timer = null

const logs = ref([])
const add = (text, tone = 'plain') => logs.value.push({ id: logs.value.length, text, tone })

/**
 * 교안의 handleDelete 와 같은 모양이다.
 * ElMessageBox.confirm 은 Promise 를 돌려준다 — 확인은 then, 취소는 catch 다.
 */
const handleDelete = (name) => {
  ElMessageBox.confirm(\`'\${name}' 을(를) 정말 삭제하시겠습니까?\`, '삭제 확인', {
    confirmButtonText: '삭제',
    cancelButtonText: '취소',
    type: 'warning',
  })
    .then(() => {
      items.value = items.value.filter((item) => item !== name)
      ElMessage.success('삭제되었습니다.')
      add(\`then — '\${name}' 삭제됨\`, 'ok')
    })
    .catch(() => {
      // catch 를 빼먹으면 취소할 때마다 Unhandled Promise Rejection 경고가 뜬다
      ElMessage.info('삭제를 취소했습니다.')
      add('catch — 취소를 눌렀다', 'plain')
    })
}

const startDownload = () => {
  if (isDownloading.value) return

  isDownloading.value = true
  downloadProgress.value = 0
  add('setInterval 시작 — 300ms 마다 20씩', 'wait')

  timer = setInterval(() => {
    downloadProgress.value += 20

    if (downloadProgress.value >= 100) {
      downloadProgress.value = 100

      // 여기서 멈추지 않으면 100 을 넘어 계속 돌면서 값을 밀어 올린다
      clearInterval(timer)
      timer = null

      isDownloading.value = false
      ElMessage.success('다운로드가 완료되었습니다.')
      add('clearInterval — 100 도달, 타이머 정리', 'ok')
    }
  }, 300)
}

const resetAll = () => {
  clearInterval(timer)
  timer = null
  downloadProgress.value = 0
  isDownloading.value = false
  items.value = ['월간 보고서.pdf', '회의록.docx', '예산안.xlsx']
  logs.value = []
}

/**
 * 실습을 접거나 다른 챕터로 옮겨 가도 타이머는 살아 있다.
 * 컴포넌트가 사라질 때 반드시 정리한다.
 */
onBeforeUnmount(() => clearInterval(timer))
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Element Plus — 삭제 확인과 진행률
      <ConceptHelp
        text="ElMessageBox.confirm()은 확인·취소 버튼이 있는 모달을 띄우고 Promise를 돌려줍니다. 확인을 누르면 then, 취소를 누르면 catch로 갑니다. el-progress는 percentage에 0~100 숫자를 주면 막대가 찹니다. setInterval로 값을 올릴 때는 100에서 clearInterval로 반드시 멈춰야 합니다."
      />
    </h2>

    <!-- 삭제 확인 -->
    <div class="area">
      <h3>ElMessageBox <small>확인은 then, 취소는 catch</small></h3>
      <el-card shadow="never">
        <ul v-if="items.length" class="files">
          <li v-for="name in items" :key="name">
            <span class="f-name">{{ name }}</span>
            <el-button type="danger" size="small" plain @click="handleDelete(name)">
              삭제
            </el-button>
          </li>
        </ul>
        <p v-else class="all-gone">파일을 모두 지웠습니다. 아래 초기화로 되돌릴 수 있습니다.</p>
      </el-card>
      <p class="hint-line">
        확인도 눌러 보고 <b>취소도 눌러 보세요.</b> 취소 쪽이 catch 로 간다는 것이 이 문법의
        전부입니다.
      </p>
    </div>

    <!-- 진행률 -->
    <div class="area">
      <h3>el-progress <small>setInterval 은 반드시 멈춰야 한다</small></h3>
      <el-card shadow="never">
        <el-progress
          :percentage="downloadProgress"
          :status="downloadProgress === 100 ? 'success' : undefined"
          :stroke-width="14"
        />
        <div class="dl-actions">
          <el-button type="primary" :loading="isDownloading" @click="startDownload">
            {{ isDownloading ? '다운로드 중…' : '다운로드 시작' }}
          </el-button>
          <el-button @click="resetAll">초기화</el-button>
        </div>
      </el-card>
    </div>

    <!-- 기록 -->
    <div v-if="logs.length" class="area">
      <h3>기록</h3>
      <ul class="logs">
        <li v-for="log in logs" :key="log.id" :class="log.tone">
          <span class="dot" aria-hidden="true" />
          <span>{{ log.text }}</span>
        </li>
      </ul>
    </div>

    <p class="note">
      <b>타이머는 스스로 멈추지 않습니다.</b> 100 에서
      <code>clearInterval</code> 을 부르지 않으면 값이 120, 140 으로 계속 올라가고, 이 실습을 닫아도
      뒤에서 계속 돕니다. 그래서
      <code>onBeforeUnmount</code> 에서도 한 번 더 정리합니다.
    </p>
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

.files {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.files li {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 9px 4px;
}

.files li + li {
  border-top: 1px solid var(--line);
}

.f-name {
  color: var(--ink-soft);
  font-size: 13px;
}

.all-gone {
  margin: 0;
  padding: 14px 0;
  color: var(--faint);
  font-size: 12.5px;
  text-align: center;
}

.hint-line {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.dl-actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

/* 기록 */
.logs {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.logs li {
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 12.5px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--line-strong);
}

.logs li.wait .dot {
  background: var(--slate);
}

.logs li.ok .dot {
  background: var(--accent);
}

.note {
  margin: 20px 0 0;
  padding: 13px 16px;
  border: 1px dashed var(--accent);
  border-radius: 10px;
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.8;
}

.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

:deep(.el-card) {
  border-color: var(--line);
  border-radius: 12px;
  background: var(--surface);
}

:deep(.el-button--primary) {
  --el-button-bg-color: var(--accent);
  --el-button-border-color: var(--accent);
  --el-button-hover-bg-color: var(--accent);
  --el-button-hover-border-color: var(--accent);
}
</style>
`,su=`<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 225쪽 Code Challenge — Element Plus 회원가입 폼.
 *
 * el-input · el-switch 는 태그로 쓰지만 ElMessage 는 태그가 아니라 함수다.
 * 이 차이가 이 챕터에서 가장 자주 걸리는 지점이라, 화면에도 그대로 적어 뒀다.
 */

const userForm = reactive({
  email: '',
  agree: false,
})

/** 어떤 검증이 걸렸는지 눈에 남겨 둔다. 알림은 3초면 사라지기 때문이다 */
const history = ref([])

const record = (type, text) =>
  history.value.unshift({ id: history.value.length, type, text })

const submit = () => {
  // 순서가 중요하다. 이메일부터 보고, 통과하면 약관을 본다
  if (!userForm.email.includes('@')) {
    ElMessage.error('올바른 이메일 형식이 아닙니다.')
    record('error', 'ElMessage.error — @ 가 없다')
    return
  }

  if (!userForm.agree) {
    ElMessage.warning('약관에 동의해야 가입할 수 있습니다.')
    record('warning', 'ElMessage.warning — 약관 미동의')
    return
  }

  ElMessage.success(\`\${userForm.email} 님, 가입이 완료되었습니다.\`)
  record('success', 'ElMessage.success — 통과')
}

const reset = () => {
  userForm.email = ''
  userForm.agree = false
  history.value = []
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Element Plus — 회원가입 폼
      <ConceptHelp
        text="el-input·el-switch는 템플릿에 태그로 쓰는 컴포넌트이고, ElMessage는 태그가 아니라 import해서 호출하는 함수입니다. 화면 오른쪽 위에 잠깐 떴다 사라지는 알림을 띄웁니다. success·warning·error·info 네 종류가 있습니다."
      />
    </h2>

    <div class="area">
      <el-card shadow="never" class="form-card">
        <template #header>
          <span class="card-title">회원가입</span>
        </template>

        <div class="field">
          <label for="ep-email">이메일</label>
          <el-input
            id="ep-email"
            v-model="userForm.email"
            placeholder="you@example.com"
            clearable
          />
        </div>

        <div class="field row">
          <label for="ep-agree">약관 동의</label>
          <el-switch id="ep-agree" v-model="userForm.agree" />
          <span class="state">{{ userForm.agree ? '동의함' : '동의 안 함' }}</span>
        </div>

        <div class="actions">
          <el-button type="primary" @click="submit">가입하기</el-button>
          <el-button @click="reset">초기화</el-button>
        </div>
      </el-card>
    </div>

    <!-- 지금 상태 -->
    <div class="area">
      <h3>userForm <small>reactive 객체 안이 이렇게 바뀐다</small></h3>
      <pre class="state-box">{{ { email: userForm.email, agree: userForm.agree } }}</pre>
    </div>

    <!-- 알림 기록 -->
    <div class="area">
      <h3>알림 기록 <small>화면 알림은 3초면 사라지므로 여기 남긴다</small></h3>
      <ul v-if="history.length" class="history">
        <li v-for="item in history" :key="item.id" :class="item.type">
          <span class="tag">{{ item.type }}</span>
          <span>{{ item.text }}</span>
        </li>
      </ul>
      <p v-else class="hint">
        빈 칸으로 한 번, <code>@</code> 없이 한 번, 약관을 끈 채로 한 번 — 세 갈래를 모두 눌러
        보세요.
      </p>
    </div>

    <p class="note">
      <b>ElMessage 는 태그가 아닙니다.</b> 템플릿에 <code>&lt;el-message /&gt;</code> 를 적는 것이
      아니라 <code>import { ElMessage } from 'element-plus'</code> 로 가져와 함수처럼 호출합니다.
    </p>
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

.form-card {
  max-width: 460px;
}

.card-title {
  font-size: 14.5px;
  font-weight: 700;
}

.field {
  display: grid;
  gap: 7px;
  margin-bottom: 16px;
}

.field.row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.field label {
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 600;
}

.state {
  color: var(--faint);
  font-size: 12px;
}

.actions {
  display: flex;
  gap: 8px;
}

.state-box {
  margin: 0;
  padding: 13px 16px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 12px;
}

/* 기록 */
.history {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.history li {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 12.5px;
}

.tag {
  padding: 3px 0;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 700;
  text-align: center;
}

.history li.success .tag {
  color: var(--on-accent);
  background: var(--accent);
}

.history li.warning .tag {
  color: var(--slate);
  background: var(--surface);
}

.history li.error .tag {
  color: #fff;
  background: var(--signal);
}

.hint {
  margin: 0;
  padding: 16px 0;
  color: var(--faint);
  font-size: 12.5px;
  text-align: center;
}

.hint code,
.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.note {
  margin: 20px 0 0;
  padding: 13px 16px;
  border: 1px dashed var(--accent);
  border-radius: 10px;
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.8;
}

/* 라이브러리 기본 색을 이 사이트 토큰에 맞춘다 */
:deep(.el-card) {
  border-color: var(--line);
  border-radius: 12px;
  background: var(--surface);
}

:deep(.el-button--primary) {
  --el-button-bg-color: var(--accent);
  --el-button-border-color: var(--accent);
  --el-button-hover-bg-color: var(--accent);
  --el-button-hover-border-color: var(--accent);
}

:deep(.el-switch.is-checked .el-switch__core) {
  border-color: var(--accent);
  background-color: var(--accent);
}
</style>
`,cu=`<script setup>
import { computed, ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 226쪽 Code Challenge — 상품 수량과 별점.
 *
 * el-input-number 와 el-rate 는 둘 다 v-model 로 숫자를 주고받는다.
 * 직접 만들면 "1 미만으로 못 내려가게" "소수점 못 넣게" 같은 것을
 * 전부 손으로 막아야 하는데, min·max·step 속성 한 줄로 끝난다는 것이 요점이다.
 */

const productQuantity = ref(1)
const productRate = ref(4)

const UNIT_PRICE = 12500

const total = computed(() => (productQuantity.value * UNIT_PRICE).toLocaleString())

/** 별점을 말로 바꿔 보여 준다 — el-rate 의 texts 와 같은 값 */
const RATE_TEXTS = ['별로예요', '그저 그래요', '괜찮아요', '좋아요', '최고예요']
<\/script>

<template>
  <section class="practice-card">
    <h2>
      Element Plus — 상품 수량과 별점
      <ConceptHelp
        text="el-input-number는 숫자 전용 입력창으로 min·max·step으로 범위를 제한합니다. el-rate는 별점 컴포넌트로 show-text를 켜면 점수에 맞는 설명이 함께 나옵니다. 둘 다 v-model로 숫자를 주고받습니다."
      />
    </h2>

    <div class="area">
      <el-card shadow="never" class="product-card">
        <template #header>
          <span class="card-title">SKALA 텀블러</span>
        </template>

        <p class="price">{{ UNIT_PRICE.toLocaleString() }}원</p>

        <div class="field">
          <label>수량</label>
          <el-input-number v-model="productQuantity" :min="1" :max="10" :step="1" />
          <span class="limit">1 ~ 10개</span>
        </div>

        <div class="field">
          <label>별점</label>
          <el-rate v-model="productRate" show-text :texts="RATE_TEXTS" />
        </div>

        <div class="total">
          <span>합계</span>
          <b>{{ total }}원</b>
        </div>
      </el-card>
    </div>

    <div class="area">
      <h3>지금 값 <small>v-model 이 묶어 둔 반응형 상태</small></h3>
      <ul class="values">
        <li>
          <code>productQuantity</code>
          <b>{{ productQuantity }}</b>
        </li>
        <li>
          <code>productRate</code>
          <b>{{ productRate }}</b>
        </li>
      </ul>
    </div>

    <p class="note">
      수량에서 <b>−</b> 를 계속 눌러 보세요. 1 에서 멈추고 버튼이 비활성화됩니다.
      <code>:min="1"</code> 한 줄이 하는 일입니다. 직접 만들었다면 입력값 검사·버튼 잠금·음수
      방어를 전부 손으로 짜야 합니다.
    </p>
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

.product-card {
  max-width: 460px;
}

.card-title {
  font-size: 14.5px;
  font-weight: 700;
}

.price {
  margin: 0 0 18px;
  color: var(--ink);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.field {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
}

.field label {
  width: 44px;
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 600;
}

.limit {
  color: var(--faint);
  font-size: 11.5px;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
}

.total b {
  color: var(--accent);
  font-size: 20px;
  font-weight: 800;
}

.values {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.values li {
  display: grid;
  grid-template-columns: 160px auto;
  gap: 12px;
  align-items: center;
  padding: 10px 14px;
  border-radius: 9px;
  background: var(--paper);
}

.values code {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12px;
}

.values b {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 14px;
}

.note {
  margin: 20px 0 0;
  padding: 13px 16px;
  border: 1px dashed var(--accent);
  border-radius: 10px;
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.8;
}

.note code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

:deep(.el-card) {
  border-color: var(--line);
  border-radius: 12px;
  background: var(--surface);
}
</style>
`,lu=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 249쪽 Code Challenge — 비동기 연쇄 파이프라인 (Async/Await).
 *
 * 교안 코드는 400ms 씩 두 번 기다린 뒤 결과 한 줄만 남긴다.
 * 그 800ms 동안 무슨 일이 일어나는지가 async/await 의 전부이므로,
 * 단계마다 기록을 남기고 실패 스위치를 붙여 catch 로도 떨어뜨려 본다.
 */

/** 실시간 화면 출력을 위한 Vue 상태값 (교안의 수정 금지 부분) */
const result3 = ref('')

const logs = ref([])
const running = ref(false)
const shouldFail = ref(false)

/** 가상의 백엔드 API (교안의 수정 금지 부분 — Promise 반환형 화살표 함수) */
const fetchUserId = () => new Promise((res) => setTimeout(() => res({ uid: 777 }), 400))

const fetchUserProfile = (uid) =>
  new Promise((res, rej) =>
    setTimeout(() => {
      // 실패 스위치가 켜져 있으면 여기서 거부한다 — catch 로 가는 길을 보려고 붙였다
      if (shouldFail.value) rej(new Error('프로필 서버 응답 없음'))
      else res({ uid, nick: 'Graves' })
    }, 400),
  )

const add = (text, tone = 'plain') => logs.value.push({ id: logs.value.length, text, tone })

const runTask3 = async () => {
  running.value = true
  logs.value = []
  result3.value = '데이터 동기화 중...'

  try {
    add('await fetchUserId() — 여기서 멈춰 기다린다', 'wait')
    const idResult = await fetchUserId()

    // 1. 결과 객체에서 uid 를 구조 분해로 뽑아낸다
    const { uid } = idResult
    add(\`uid 도착: \${uid}\`, 'ok')

    add(\`await fetchUserProfile(\${uid}) — 앞 결과를 인자로 넘겨 연쇄 호출\`, 'wait')
    const profile = await fetchUserProfile(uid)

    // 2. 최종 결과 객체에서 nick 을 뽑아낸다
    const { nick } = profile
    add(\`nick 도착: \${nick}\`, 'ok')

    result3.value = \`동기화 성공: \${nick}님 환영합니다.\`
  } catch (error) {
    // 3. 비동기 통신 중 발생할 수 있는 에러를 여기서 잡는다
    add(\`catch 로 떨어짐 — \${error.message}\`, 'fail')
    result3.value = '통신 실패'
  } finally {
    running.value = false
  }
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      과제 3 — 비동기 연쇄 파이프라인 (Async/Await)
      <ConceptHelp
        text="async는 이 함수 안에서 비동기 처리를 하겠다는 선언이고, await는 그 작업이 끝날 때까지 다음 줄로 넘어가지 말라는 명령입니다. async 함수는 항상 Promise를 반환합니다. .then/.catch 대신 try/catch로 에러를 잡습니다."
      />
    </h2>

    <!-- 실행 -->
    <div class="area">
      <div class="run">
        <button type="button" class="go" :disabled="running" @click="runTask3">
          {{ running ? '통신 중…' : '과제 3 가동' }}
        </button>
        <label class="switch">
          <input v-model="shouldFail" type="checkbox" :disabled="running" />
          <span>두 번째 호출을 실패시키기 <small>catch 로 가는 길 보기</small></span>
        </label>
      </div>
    </div>

    <!-- 파이프라인 -->
    <div class="area">
      <h3>두 번의 기다림 <small>각 400ms</small></h3>
      <div class="pipe">
        <div class="stage" :class="{ done: logs.some((l) => l.text.includes('uid 도착')) }">
          <code>fetchUserId()</code>
          <span>{ uid: 777 }</span>
        </div>
        <span class="link" aria-hidden="true">→</span>
        <div class="stage" :class="{ done: logs.some((l) => l.text.includes('nick 도착')) }">
          <code>fetchUserProfile(uid)</code>
          <span>{ uid, nick }</span>
        </div>
      </div>
      <p class="hint-line">
        앞 호출의 결과(<code>uid</code>)가 뒤 호출의 인자가 됩니다. 그래서 동시에 못 하고 순서대로
        기다립니다.
      </p>
    </div>

    <!-- 진행 기록 -->
    <div v-if="logs.length" class="area">
      <h3>진행 기록</h3>
      <ul class="logs">
        <li v-for="log in logs" :key="log.id" :class="log.tone">
          <span class="dot" aria-hidden="true" />
          <span>{{ log.text }}</span>
        </li>
      </ul>
    </div>

    <!-- 결과창 -->
    <div class="area">
      <h3>결과창 3</h3>
      <div class="console" :class="{ empty: !result3 }">
        {{ result3 || '가동 버튼을 누르면 통신 결과가 여기 찍힙니다.' }}
      </div>
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

/* 실행 */
.run {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.go {
  padding: 10px 20px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.go:disabled {
  opacity: 0.55;
  cursor: progress;
}

.switch {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--muted);
  cursor: pointer;
  font-size: 12.5px;
}

.switch small {
  color: var(--faint);
  font-size: 11px;
}

/* 파이프라인 */
.pipe {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
}

.stage {
  display: grid;
  gap: 5px;
  padding: 14px 16px;
  border: 1px dashed var(--line-strong);
  border-radius: 10px;
  background: var(--paper);
  transition: all 0.3s ease;
}

/* 도착한 단계만 실선으로 굳는다 */
.stage.done {
  border-style: solid;
  border-color: var(--accent);
  background: var(--accent-tint);
}

.stage code {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.stage.done code {
  color: var(--accent);
}

.stage span {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.link {
  color: var(--faint);
  font-size: 18px;
}

.hint-line {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.hint-line code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

/* 기록 */
.logs {
  display: grid;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.logs li {
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink-soft);
  font-size: 12.5px;
  line-height: 1.6;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--line-strong);
}

.logs li.wait .dot {
  background: var(--slate);
}

.logs li.ok .dot {
  background: var(--accent);
}

.logs li.fail {
  background: var(--signal-tint);
  color: var(--signal);
}

.logs li.fail .dot {
  background: var(--signal);
}

/* 결과창 */
.console {
  padding: 15px 18px;
  border-radius: 10px;
  color: #e8e8e8;
  background: #2b2b2b;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
}

.console.empty {
  color: #8a8a8a;
}

@media (max-width: 640px) {
  .pipe {
    grid-template-columns: 1fr;
  }

  .link {
    justify-self: center;
    transform: rotate(90deg);
  }
}
</style>
`,uu=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 247쪽 Code Challenge — 데이터 추출 및 포맷팅.
 *
 * 교안은 결과창 한 줄만 보여 주지만, 그 한 줄이 나오기까지
 * 값이 어떤 모양으로 바뀌는지가 이 문법의 전부다.
 * 그래서 중간 변수 세 개를 각각 따로 보여 준다.
 */

/** 실시간 화면 출력을 위한 Vue 상태값 (교안의 수정 금지 부분) */
const result1 = ref('')

/** 중간 과정을 보여 주려고 따로 담아 둔다. 교안 코드에는 없다 */
const steps = ref([])

const MEMBERS = ['김수원', '이서울', '박부산', '최대전']
const RAW_DATA = { id: 101, grade: 'VIP', details: { score: 95 } }

const runTask1 = () => {
  // 1. includes() — 배열에 그 값이 있는지 true/false 로만 알려 준다
  const memberContainsPark = MEMBERS.includes('박부산')

  // 2. 중첩 구조 분해 — details 안으로 한 겹 더 들어간다.
  //    콜론 뒤가 "더 들어갈 곳"이라, details 라는 변수는 생기지 않는다.
  const {
    grade,
    details: { score },
  } = RAW_DATA

  // 3. 템플릿 리터럴 — 백틱 안에서 \${} 로 값을 끼워 넣는다
  result1.value = \`부산 포함 여부: \${memberContainsPark} / 등급: \${grade} / 점수: \${score}점\`

  steps.value = [
    {
      label: 'memberContainsPark',
      code: "MEMBERS.includes('박부산')",
      value: String(memberContainsPark),
      kind: 'boolean',
      why: '값 자체가 아니라 "있느냐"만 돌려준다. 그래서 true 다.',
    },
    {
      label: 'grade',
      code: 'const { grade } = RAW_DATA',
      value: \`'\${grade}'\`,
      kind: 'string',
      why: '키 이름과 변수 이름이 같아야 꺼내진다.',
    },
    {
      label: 'score',
      code: 'const { details: { score } } = RAW_DATA',
      value: String(score),
      kind: 'number',
      why: '콜론은 "이름 바꾸기"가 아니라 "한 겹 더 들어가기"다.',
    },
  ]
}

const reset = () => {
  result1.value = ''
  steps.value = []
}
<\/script>

<template>
  <section class="practice-card">
    <h2>
      과제 1 — 데이터 추출 및 포맷팅
      <ConceptHelp
        text="구조 분해 할당은 객체나 배열에서 필요한 값만 골라 변수로 꺼내는 문법입니다. 중첩된 객체는 콜론(:)으로 한 겹 더 들어갑니다. 템플릿 리터럴은 백틱(\`) 안에서 \${} 로 값을 끼워 넣어 문자열을 조립하는 문법입니다."
      />
    </h2>

    <!-- 재료 -->
    <div class="area">
      <h3>주어진 재료</h3>
      <div class="given">
        <div class="given-item">
          <code class="g-name">members</code>
          <div class="chips">
            <span v-for="name in MEMBERS" :key="name" :class="{ hit: name === '박부산' }">
              {{ name }}
            </span>
          </div>
        </div>
        <div class="given-item">
          <code class="g-name">rawData</code>
          <pre class="g-value">{{ RAW_DATA }}</pre>
        </div>
      </div>
    </div>

    <!-- 실행 -->
    <div class="area">
      <div class="run">
        <button type="button" class="go" @click="runTask1">과제 1 가동</button>
        <button v-if="result1" type="button" class="ghost" @click="reset">지우기</button>
      </div>
    </div>

    <!-- 중간 과정 -->
    <div v-if="steps.length" class="area">
      <h3>꺼낸 값 <small>결과창에 들어가기 전 모습</small></h3>
      <ul class="steps">
        <li v-for="step in steps" :key="step.label">
          <code class="s-name">{{ step.label }}</code>
          <code class="s-code">{{ step.code }}</code>
          <span class="s-value" :class="step.kind">{{ step.value }}</span>
          <span class="s-why">{{ step.why }}</span>
        </li>
      </ul>
    </div>

    <!-- 결과창 -->
    <div class="area">
      <h3>결과창 1</h3>
      <div class="console" :class="{ empty: !result1 }">
        {{ result1 || '가동 버튼을 누르면 조립된 문자열이 여기 찍힙니다.' }}
      </div>
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

/* 재료 */
.given {
  display: grid;
  gap: 8px;
}

.given-item {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 11px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.g-name {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.chips span {
  padding: 4px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 12.5px;
}

/* 찾는 값 하나만 눈에 띄게 — includes() 가 무엇을 보는지 */
.chips span.hit {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
  font-weight: 700;
}

.g-value {
  margin: 0;
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 12px;
  white-space: pre-wrap;
}

/* 실행 */
.run {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.go {
  padding: 10px 20px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.ghost {
  padding: 10px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
}

/* 중간 과정 */
.steps {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.steps li {
  display: grid;
  grid-template-columns: 152px minmax(0, 1.1fr) auto;
  gap: 10px 12px;
  align-items: center;
  padding: 11px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.s-name {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.s-code {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.s-value {
  padding: 3px 10px;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
  white-space: nowrap;
}

/* 타입이 다르다는 것을 색으로 갈라 준다 — true 는 값이 아니라 판정이다 */
.s-value.boolean {
  color: var(--accent);
  background: var(--accent-tint);
}

.s-value.string {
  color: var(--slate);
  background: var(--paper-strong, var(--surface));
}

.s-value.number {
  color: var(--signal);
  background: var(--signal-tint);
}

.s-why {
  grid-column: 1 / -1;
  color: var(--faint);
  font-size: 12px;
  line-height: 1.6;
}

/* 결과창 — 교안 화면과 같은 검은 콘솔 */
.console {
  padding: 15px 18px;
  border-radius: 10px;
  color: #e8e8e8;
  background: #2b2b2b;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
  word-break: break-all;
}

.console.empty {
  color: #8a8a8a;
}

@media (max-width: 640px) {
  .given-item,
  .steps li {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .s-value {
    justify-self: start;
  }
}
</style>
`,du=`<script setup>
import { ref } from 'vue'
import ConceptHelp from '../../ConceptHelp.vue'

/**
 * 교안 248쪽 Code Challenge — 불변성 복사 및 기본값 방어.
 *
 * 이 과제의 진짜 함정은 stock: 0 이다.
 * || 를 쓰면 0 이 사라지고, ?? 를 쓰면 살아남는다.
 * 결과창만 봐서는 왜 그런지 알 수 없으므로 두 방식을 나란히 계산해 보여 준다.
 */

/** 실시간 화면 출력을 위한 Vue 상태값 (교안의 수정 금지 부분) */
const result2 = ref('')

const compare = ref([])
const cartBefore = ref([])
const cartAfter = ref([])

const CURRENT_CART = ['Apple', 'Banana']
const NEW_PRODUCT = { name: 'Orange', stock: 0, preview: null }

const runTask2 = () => {
  // 1. 스프레드 — 기존 배열을 펼쳐 새 배열을 만든다. 원본은 그대로 남는다
  const updatedCart = [...CURRENT_CART, NEW_PRODUCT.name]

  // 2. 옵셔널 체이닝(?.) + 널 병합(??) 연쇄
  //    preview 가 null 이므로 우항의 기본값으로 넘어간다
  const imgStatus = NEW_PRODUCT?.preview ?? '이미지 준비중'

  // 3. stock 은 0 이다. ?? 는 0 을 "값이 있다"고 인정한다
  const finalStock = NEW_PRODUCT.stock ?? 0

  result2.value = \`카트: \${updatedCart} / 이미지: \${imgStatus} / 수량: \${finalStock}개\`

  cartBefore.value = [...CURRENT_CART]
  cartAfter.value = updatedCart

  compare.value = [
    {
      label: 'stock (0)',
      old: NEW_PRODUCT.stock || 99,
      oldCode: 'stock || 99',
      now: NEW_PRODUCT.stock ?? 99,
      nowCode: 'stock ?? 99',
      why: '0 은 Falsy 라서 || 는 없는 값으로 본다. ?? 는 null·undefined 만 없는 값으로 본다.',
      broken: true,
    },
    {
      label: 'preview (null)',
      old: NEW_PRODUCT.preview || '이미지 준비중',
      oldCode: 'preview || …',
      now: NEW_PRODUCT.preview ?? '이미지 준비중',
      nowCode: 'preview ?? …',
      why: 'null 은 둘 다 없는 값으로 본다. 여기서는 결과가 같다.',
      broken: false,
    },
  ]
}

const reset = () => {
  result2.value = ''
  compare.value = []
  cartBefore.value = []
  cartAfter.value = []
}

/** 화면에 찍을 때 빈 문자열과 0 이 구분되게 */
const show = (value) => (value === '' ? "''" : String(value))
<\/script>

<template>
  <section class="practice-card">
    <h2>
      과제 2 — 불변성 복사 및 데이터 방어
      <ConceptHelp
        text="스프레드 연산자(...)는 배열·객체를 펼쳐 새 것을 만들어 원본을 지킵니다. 널 병합 연산자(??)는 좌항이 null이나 undefined일 때만 우항의 기본값을 씁니다. 논리합(||)과 달리 숫자 0과 빈 문자열을 값으로 인정합니다."
      />
    </h2>

    <!-- 재료 -->
    <div class="area">
      <h3>주어진 재료</h3>
      <div class="given">
        <div class="given-item">
          <code class="g-name">currentCart</code>
          <div class="chips">
            <span v-for="item in CURRENT_CART" :key="item">{{ item }}</span>
          </div>
        </div>
        <div class="given-item">
          <code class="g-name">newProduct</code>
          <pre class="g-value">{{ NEW_PRODUCT }}</pre>
        </div>
      </div>
      <p class="hint-line">
        <b>stock 이 0</b>이고 <b>preview 가 null</b>인 것이 이 과제의 함정입니다.
      </p>
    </div>

    <!-- 실행 -->
    <div class="area">
      <div class="run">
        <button type="button" class="go" @click="runTask2">과제 2 가동</button>
        <button v-if="result2" type="button" class="ghost" @click="reset">지우기</button>
      </div>
    </div>

    <!-- 원본 보존 -->
    <div v-if="cartAfter.length" class="area">
      <h3>원본은 그대로인가 <small>스프레드가 하는 일</small></h3>
      <div class="carts">
        <div class="cart">
          <p class="c-label">currentCart <span class="tag keep">원본</span></p>
          <div class="chips">
            <span v-for="item in cartBefore" :key="item">{{ item }}</span>
          </div>
        </div>
        <span class="arrow" aria-hidden="true">→</span>
        <div class="cart">
          <p class="c-label">updatedCart <span class="tag new">새 배열</span></p>
          <div class="chips">
            <span v-for="item in cartAfter" :key="item" :class="{ added: item === 'Orange' }">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
      <p class="hint-line">
        오른쪽에 Orange 가 늘었는데 왼쪽은 두 개 그대로입니다. <code>=</code> 로 대입했다면 왼쪽도
        같이 늘었을 것입니다.
      </p>
    </div>

    <!-- || vs ?? -->
    <div v-if="compare.length" class="area">
      <h3>|| 였다면 <small>같은 값에 두 연산자를 각각 써 본 결과</small></h3>
      <ul class="compare">
        <li v-for="row in compare" :key="row.label" :class="{ broken: row.broken }">
          <span class="cm-label">{{ row.label }}</span>
          <span class="cm-cell old">
            <code>{{ row.oldCode }}</code>
            <b>{{ show(row.old) }}</b>
          </span>
          <span class="cm-cell now">
            <code>{{ row.nowCode }}</code>
            <b>{{ show(row.now) }}</b>
          </span>
          <span class="cm-why">{{ row.why }}</span>
        </li>
      </ul>
    </div>

    <!-- 결과창 -->
    <div class="area">
      <h3>결과창 2</h3>
      <div class="console" :class="{ empty: !result2 }">
        {{ result2 || '가동 버튼을 누르면 조립된 문자열이 여기 찍힙니다.' }}
      </div>
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

/* 재료 */
.given {
  display: grid;
  gap: 8px;
}

.given-item {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 11px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.g-name {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.g-value {
  margin: 0;
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 12px;
  white-space: pre-wrap;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.chips span {
  padding: 4px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 12.5px;
}

.chips span.added {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
  font-weight: 700;
}

.hint-line {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.7;
}

.hint-line code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11.5px;
}

/* 실행 */
.run {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.go {
  padding: 10px 20px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.ghost {
  padding: 10px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
}

/* 원본 vs 복사본 */
.carts {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: 12px;
  align-items: center;
}

.cart {
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

.c-label {
  display: flex;
  gap: 7px;
  align-items: center;
  margin: 0 0 8px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11.5px;
  font-weight: 700;
}

.tag {
  padding: 2px 8px;
  border-radius: 999px;
  font-family: var(--font-sans, inherit);
  font-size: 10.5px;
}

.tag.keep {
  color: var(--slate);
  background: var(--surface);
}

.tag.new {
  color: var(--on-accent);
  background: var(--accent);
}

.arrow {
  color: var(--faint);
  font-size: 18px;
}

/* || vs ?? 대조표 */
.compare {
  display: grid;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.compare li {
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr) minmax(0, 1fr);
  gap: 9px 12px;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--paper);
}

/* || 이 값을 망가뜨리는 줄만 붉게 — 여기가 이 과제의 핵심이다 */
.compare li.broken {
  border-color: var(--signal);
  background: var(--signal-tint);
}

.cm-label {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.cm-cell {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: baseline;
}

.cm-cell code {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

.cm-cell b {
  padding: 3px 10px;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.cm-cell.old b {
  color: var(--signal);
  background: var(--paper);
}

.cm-cell.now b {
  color: var(--accent);
  background: var(--accent-tint);
}

.compare li.broken .cm-cell.old b {
  background: #fff;
}

.cm-why {
  grid-column: 1 / -1;
  color: var(--faint);
  font-size: 12px;
  line-height: 1.6;
}

.compare li.broken .cm-why {
  color: var(--signal);
}

/* 결과창 */
.console {
  padding: 15px 18px;
  border-radius: 10px;
  color: #e8e8e8;
  background: #2b2b2b;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
  word-break: break-all;
}

.console.empty {
  color: #8a8a8a;
}

@media (max-width: 700px) {
  .carts {
    grid-template-columns: 1fr;
  }

  .arrow {
    justify-self: center;
    transform: rotate(90deg);
  }

  .given-item,
  .compare li {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}
</style>
`,fu=`<script setup>
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
`,pu=`<script setup>
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
`,mu=`<script setup>
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
`,hu=`<script setup>
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
`,gu=Object.assign({"./basic/BindPractice.vue":ke,"./basic/ConditionalPractice.vue":Ue,"./basic/EventPractice.vue":et,"./basic/ForPractice.vue":mt,"./basic/HtmlTextPractice.vue":vt,"./basic/ModelPractice.vue":Tt,"./basic/ReactivityPractice.vue":Gt,"./basic/SpecialDirectivePractice.vue":Jt,"./component/ComponentRegistrationPractice.vue":an,"./component/LifecyclePractice.vue":mn,"./component/PropsEmitsPractice.vue":bn,"./component/PropsFlowPractice.vue":kn,"./component/PropsReadonlyPractice.vue":Kn,"./component/ProvideInjectPractice.vue":cr,"./component/SiblingTalkPractice.vue":Cr,"./component/SlotBaseCardPractice.vue":Nr,"./component/SlotListPractice.vue":Hr,"./component/SlotModalPractice.vue":si,"./component/SlotPractice.vue":Ci,"./composition/ComputedCachePractice.vue":Ai,"./composition/DeepWatchPractice.vue":Ni,"./composition/FormStatePractice.vue":zi,"./composition/MultiWatchPractice.vue":Yi,"./composition/ReactiveArrayWatchPractice.vue":ea,"./composition/ReactiveStatePractice.vue":oa,"./composition/ReactiveWatchPractice.vue":fa,"./composition/RefArrayWatchPractice.vue":va,"./composition/RefStatePractice.vue":Ta,"./composition/TodoAdvancedPractice.vue":Oa,"./composition/TodoListPractice.vue":Ha,"./composition/WatchEffectPractice.vue":Qa,"./composition/WatchPractice.vue":ro,"./library/AxiosWeatherPractice.vue":co,"./library/ElementConfirmPractice.vue":ko,"./library/ElementFormPractice.vue":Bo,"./library/ElementProductPractice.vue":es,"./library/ModernAsyncPractice.vue":ds,"./library/ModernExtractPractice.vue":ws,"./library/ModernImmutablePractice.vue":zs,"./library/StoreCounterPractice.vue":pc,"./router/RouterBasicPractice.vue":Ec,"./router/RouterGuardPractice.vue":Wc,"./router/RouterNavigatePractice.vue":sl}),$=e=>e.split(`/`).pop().replace(`.vue`,``),_u=Object.fromEntries(Object.entries(gu).map(([e,t])=>[$(e),t.default])),vu=Object.fromEntries(Object.entries(gu).map(([e])=>[$(e),e.replace(`./`,`src/components/practices/`)]));Object.keys(_u).sort();var yu=e=>_u[e]??null,bu=e=>vu[e]??``,xu=Object.fromEntries(Object.entries(Object.assign({"./basic/BindPractice.vue":Dl,"./basic/ConditionalPractice.vue":Ol,"./basic/EventPractice.vue":kl,"./basic/ForPractice.vue":Al,"./basic/HtmlTextPractice.vue":jl,"./basic/ModelPractice.vue":Ml,"./basic/ReactivityPractice.vue":Nl,"./basic/SpecialDirectivePractice.vue":Pl,"./component/ComponentRegistrationPractice.vue":Fl,"./component/LifecyclePractice.vue":Il,"./component/PropsEmitsPractice.vue":Ll,"./component/PropsFlowPractice.vue":Rl,"./component/PropsReadonlyPractice.vue":zl,"./component/ProvideInjectPractice.vue":Bl,"./component/SiblingTalkPractice.vue":Vl,"./component/SlotBaseCardPractice.vue":Hl,"./component/SlotListPractice.vue":Ul,"./component/SlotModalPractice.vue":Wl,"./component/SlotPractice.vue":Gl,"./composition/ComputedCachePractice.vue":Kl,"./composition/DeepWatchPractice.vue":ql,"./composition/FormStatePractice.vue":Jl,"./composition/MultiWatchPractice.vue":Yl,"./composition/ReactiveArrayWatchPractice.vue":Xl,"./composition/ReactiveStatePractice.vue":Zl,"./composition/ReactiveWatchPractice.vue":Ql,"./composition/RefArrayWatchPractice.vue":$l,"./composition/RefStatePractice.vue":eu,"./composition/TodoAdvancedPractice.vue":tu,"./composition/TodoListPractice.vue":nu,"./composition/WatchEffectPractice.vue":ru,"./composition/WatchPractice.vue":iu,"./library/AxiosWeatherPractice.vue":au,"./library/ElementConfirmPractice.vue":ou,"./library/ElementFormPractice.vue":su,"./library/ElementProductPractice.vue":cu,"./library/ModernAsyncPractice.vue":lu,"./library/ModernExtractPractice.vue":uu,"./library/ModernImmutablePractice.vue":du,"./library/StoreCounterPractice.vue":fu,"./router/RouterBasicPractice.vue":pu,"./router/RouterGuardPractice.vue":mu,"./router/RouterNavigatePractice.vue":hu})).map(([e,t])=>[$(e),t])),Su=e=>xu[e]??``,Cu=[`id`],wu=[`aria-expanded`,`title`],Tu={class:`card-chevron`,"aria-hidden":`true`},Eu={class:`head-text`},Du={class:`label`},Ou={class:`slide`},ku={key:0,class:`goal`},Au={key:1,class:`card-summary`},ju={class:`head-badges`},Mu={key:0,class:`badge live`},Nu={key:1,class:`tasks`},Pu={key:2,class:`fold pitfalls`},Fu={class:`fold-body`},Iu={key:0,class:`compare`},Lu={key:0,class:`bad`},Ru={key:1,class:`good`},zu={class:`why`},Bu={key:3,class:`practice-note`},Vu={class:`practice-head`},Hu=[`aria-expanded`,`title`],Uu={class:`chevron`,"aria-hidden":`true`},Wu={key:0,class:`count`},Gu={class:`practice-hint`},Ku={class:`practice-main`},qu={key:0,class:`practice-mounts`},Ju={class:`slot-tools`},Yu=[`onClick`],Xu=[`onClick`],Zu={key:1,class:`practice-empty`},Qu={key:2,class:`practice-missing`},$u=[`aria-expanded`,`title`],ed={class:`side-chevron`,"aria-hidden":`true`},td={class:`side-body`},nd={key:0,class:`side-block`},rd={class:`side-heading`},id=[`onClick`],ad={class:`guide`},od=[`innerHTML`],sd={class:`guide-see`},cd=[`innerHTML`],ld={key:0,class:`guide-why`},ud=[`innerHTML`],dd={key:1,class:`group-extras`},fd={key:1,class:`side-block fold extensions`},pd={class:`fold-body`},md={key:5,class:`fold extensions`},hd={class:`fold-body`},gd=K({__name:`ChallengeCard`,props:{challenge:{type:Object,required:!0}},setup(e){let t=e,n=T(()=>t.challenge.practices.map(e=>({name:e,component:yu(e)})).filter(e=>e.component)),r=T(()=>t.challenge.practices.filter(e=>!yu(e))),i=T(()=>n.value.length>0),a=T(()=>t.challenge.practiceGuide??[]),o=T(()=>{let e=[];for(let t of a.value)t.practice||e.length===0?e.push({label:t.practice??null,steps:[t]}):e[e.length-1].steps.push(t);return e.map(e=>({...e,extras:u.value.filter(t=>typeof t==`object`&&t.practice===e.label)}))}),c=T(()=>{let e=new Set(o.value.map(e=>e.label));return u.value.filter(t=>typeof t==`string`||!e.has(t.practice))}),l=e=>typeof e==`string`?e:e.text,u=T(()=>t.challenge.extensions??[]),d=T(()=>i.value&&(a.value.length>0||u.value.length>0)),f=y(!0),m=y(!0),b=y(!1),S=T(()=>{let e=[];return t.challenge.tasks?.length&&e.push(`연습 ${t.challenge.tasks.length}`),t.challenge.pitfalls?.length&&e.push(`주의 ${t.challenge.pitfalls.length}`),n.value.length&&e.push(`실습 ${n.value.length}`),e.join(` · `)}),w=T(()=>!d.value&&u.value.length>0),D=E({}),O=e=>`${e}-${D[e]??0}`,N=e=>{D[e]=(D[e]??0)+1},F=()=>{n.value.forEach(e=>N(e.name))},I=y(null),z=e=>{I.value=e},B=y(null),H=e=>e.replace(/\s+/g,` `).trim(),U=(e,t)=>{let n=B.value;if(!n)return;let r=[...n.querySelectorAll(`.practice-slot`)];if(!r.length)return;let i=r.find(t=>{let n=t.querySelector(`h2`);return n&&H(n.textContent)===H(e??``)})??r[t]??r[0];i.scrollIntoView({behavior:`smooth`,block:`center`}),i.classList.add(`is-target`),setTimeout(()=>i.classList.remove(`is-target`),1400)};return(t,y)=>(s(),k(`article`,{id:`challenge-${e.challenge.id}`,ref_key:`cardEl`,ref:B,class:h([`challenge`,[e.challenge.status,{collapsed:!b.value}]])},[M(`header`,{class:`challenge-head`,role:`button`,tabindex:`0`,"aria-expanded":b.value,title:b.value?`이 챌린지 접기`:`이 챌린지 펼치기`,onClick:y[0]||=e=>b.value=!b.value,onKeydown:[y[1]||=V(L(e=>b.value=!b.value,[`prevent`]),[`enter`]),y[2]||=V(L(e=>b.value=!b.value,[`prevent`]),[`space`])]},[M(`span`,Tu,A(b.value?`▾`:`▸`),1),M(`div`,Eu,[M(`p`,Du,[g(A(e.challenge.label)+` `,1),M(`span`,Ou,`교안 `+A(e.challenge.slidePage),1)]),M(`h3`,null,A(e.challenge.title),1),b.value?(s(),k(`p`,ku,A(e.challenge.goal),1)):S.value?(s(),k(`p`,Au,A(S.value),1)):x(``,!0)]),M(`div`,ju,[M(`span`,{class:h([`badge`,e.challenge.status])},A(e.challenge.status===`done`?`학습 완료`:`진행 예정`),3),i.value?(s(),k(`span`,Mu,` 실습 `+A(n.value.length)+`개 `,1)):x(``,!0)])],40,wu),b.value?(s(),k(C,{key:0},[e.challenge.lecture?(s(),v(Ce,{key:0,lecture:e.challenge.lecture,"study-range":e.challenge.studyRange},null,8,[`lecture`,`study-range`])):x(``,!0),e.challenge.tasks?.length?(s(),k(`section`,Nu,[y[6]||=M(`p`,{class:`section-label`},`✎ 연습 항목`,-1),M(`ul`,null,[(s(!0),k(C,null,P(e.challenge.tasks,e=>(s(),k(`li`,{key:e},A(e),1))),128))])])):x(``,!0),e.challenge.pitfalls?.length?(s(),k(`details`,Pu,[M(`summary`,null,[y[7]||=M(`span`,{"aria-hidden":`true`},`⚠`,-1),y[8]||=g(` 조심할 점 `,-1),M(`b`,null,A(e.challenge.pitfalls.length),1)]),M(`div`,Fu,[(s(!0),k(C,null,P(e.challenge.pitfalls,(e,t)=>(s(),k(`div`,{key:t,class:`pitfall`},[e.bad||e.good?(s(),k(`div`,Iu,[e.bad?(s(),k(`p`,Lu,[y[9]||=M(`span`,null,`❌`,-1),M(`code`,null,A(e.bad),1)])):x(``,!0),e.good?(s(),k(`p`,Ru,[y[10]||=M(`span`,null,`✅`,-1),M(`code`,null,A(e.good),1)])):x(``,!0)])):x(``,!0),M(`p`,zu,A(e.why),1)]))),128))])])):x(``,!0),!i.value&&e.challenge.practiceNote?(s(),k(`p`,Bu,[y[11]||=M(`span`,{"aria-hidden":`true`},`✓`,-1),g(` `+A(e.challenge.practiceNote),1)])):(s(),k(`section`,{key:4,class:h([`practice-zone`,{closed:!m.value}])},[M(`header`,Vu,[M(`button`,{type:`button`,class:`practice-toggle`,"aria-expanded":m.value,title:m.value?`실습 화면 접기`:`실습 화면 펼치기`,onClick:y[3]||=e=>m.value=!m.value},[M(`span`,Uu,A(m.value?`▾`:`▸`),1),y[12]||=M(`span`,{class:`practice-mark`,"aria-hidden":`true`},`🖥`,-1),y[13]||=M(`span`,{class:`practice-title`},`실습 화면`,-1),i.value?(s(),k(`span`,Wu,A(n.value.length),1)):x(``,!0)],8,Hu),M(`span`,Gu,A(m.value?`직접 눌러보며 동작을 확인하세요`:`접어 둠 · 제목을 눌러 펼치기`),1),n.value.length>1&&m.value?(s(),k(`button`,{key:0,type:`button`,class:`reset-button reset-all`,"aria-label":`실습 전체 초기화`,title:`이 챌린지의 실습을 모두 처음 상태로 되돌립니다`,onClick:F},[...y[14]||=[M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),M(`path`,{d:`M20 4v4.5h-4.5`})],-1)]])):x(``,!0)]),j(M(`div`,{class:h([`practice-body`,{"has-guide":d.value,"side-closed":d.value&&!f.value}])},[M(`div`,Ku,[i.value?(s(),k(`div`,qu,[(s(!0),k(C,null,P(n.value,e=>(s(),k(`div`,{key:e.name,class:`practice-slot`},[M(`div`,Ju,[M(`button`,{type:`button`,class:`icon-button`,"aria-label":`소스 코드 보기`,title:`소스 코드를 새 창으로 엽니다`,onClick:t=>z(e.name)},[...y[15]||=[M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`M9 7 4 12l5 5M15 7l5 5-5 5`})],-1)]],8,Yu),M(`button`,{type:`button`,class:`icon-button`,"aria-label":`이 실습 초기화`,title:`이 실습만 처음 상태로 되돌립니다 (페이지 새로고침 없음)`,onClick:t=>N(e.name)},[...y[16]||=[M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),M(`path`,{d:`M20 4v4.5h-4.5`})],-1)]],8,Xu)]),(s(),v(p(e.component),{key:O(e.name)}))]))),128))])):(s(),k(`p`,Zu,[...y[17]||=[g(` 아직 이 챌린지에 연결된 실습 화면이 없습니다. `,-1),M(`code`,null,`src/components/practices/`,-1),g(` 에 컴포넌트를 추가하고 `,-1),M(`code`,null,`curriculum.js`,-1),g(` 의 `,-1),M(`code`,null,`practices`,-1),g(` 에 이름을 넣으면 여기에 나타납니다. `,-1)]])),r.value.length?(s(),k(`p`,Qu,` ⚠ 파일을 찾지 못한 실습: `+A(r.value.join(`, `)),1)):x(``,!0)]),d.value?(s(),k(`aside`,{key:0,class:h([`guide-side`,{collapsed:!f.value}])},[M(`button`,{type:`button`,class:`side-toggle`,"aria-expanded":f.value,title:f.value?`접어서 실습 화면 넓히기`:`실습 도우미 펼치기`,onClick:y[4]||=e=>f.value=!f.value},[y[18]||=M(`span`,{class:`side-toggle-label`},[M(`span`,{"aria-hidden":`true`},`✓`),g(` 실습 도우미 `)],-1),M(`span`,ed,A(f.value?`›`:`‹`),1)],8,$u),j(M(`div`,td,[a.value.length?(s(),k(`section`,nd,[M(`p`,rd,[y[19]||=g(` 확인 가이드 `,-1),M(`b`,null,A(a.value.length),1)]),(s(!0),k(C,null,P(o.value,(e,t)=>(s(),k(`div`,{key:t,class:`guide-group`},[e.label?(s(),k(`button`,{key:0,type:`button`,class:`guide-chip`,title:`이 실습으로 이동합니다`,onClick:n=>U(e.label,t)},[g(A(e.label)+` `,1),y[20]||=M(`span`,{class:`jump`,"aria-hidden":`true`},`↓`,-1)],8,id)):x(``,!0),M(`ol`,ad,[(s(!0),k(C,null,P(e.steps,(e,t)=>(s(),k(`li`,{key:t},[M(`p`,{class:`guide-do`,innerHTML:_(q)(e.do)},null,8,od),M(`p`,sd,[y[21]||=M(`b`,null,`확인`,-1),y[22]||=g(),M(`span`,{innerHTML:_(q)(e.see)},null,8,cd)]),e.why?(s(),k(`p`,ld,[y[23]||=M(`b`,null,`왜`,-1),y[24]||=g(),M(`span`,{innerHTML:_(q)(e.why)},null,8,ud)])):x(``,!0)]))),128))]),e.extras.length?(s(),k(`div`,dd,[y[25]||=M(`p`,{class:`extras-label`},[M(`span`,{"aria-hidden":`true`},`🚀`),g(` 더 해보기`)],-1),M(`ul`,null,[(s(!0),k(C,null,P(e.extras,(e,t)=>(s(),k(`li`,{key:t},A(l(e)),1))),128))])])):x(``,!0)]))),128))])):x(``,!0),c.value.length?(s(),k(`details`,fd,[M(`summary`,null,[y[26]||=M(`span`,{"aria-hidden":`true`},`🚀`,-1),y[27]||=g(` 더 해보기 (전체) `,-1),M(`b`,null,A(c.value.length),1)]),M(`div`,pd,[M(`ul`,null,[(s(!0),k(C,null,P(c.value,(e,t)=>(s(),k(`li`,{key:t},A(l(e)),1))),128))])])])):x(``,!0)],512),[[R,f.value]])],2)):x(``,!0)],2),[[R,m.value]])],2)),w.value?(s(),k(`details`,md,[M(`summary`,null,[y[28]||=M(`span`,{"aria-hidden":`true`},`🚀`,-1),y[29]||=g(` 더 해보기 (심화 응용) `,-1),M(`b`,null,A(u.value.length),1)]),M(`div`,hd,[M(`ul`,null,[(s(!0),k(C,null,P(u.value,(e,t)=>(s(),k(`li`,{key:t},A(l(e)),1))),128))])])])):x(``,!0)],64)):x(``,!0),I.value?(s(),v(oe,{key:1,path:_(bu)(I.value),code:_(Su)(I.value),onClose:y[5]||=e=>I.value=null},null,8,[`path`,`code`])):x(``,!0)],10,Cu))}},[[`__scopeId`,`data-v-6e637b45`]]),_d=[`aria-expanded`],vd={class:`toggle-title`},yd={class:`chevron`,"aria-hidden":`true`},bd={class:`notes-body`},xd={class:`lead`},Sd=[`aria-expanded`,`onClick`],Cd={class:`no`},wd={class:`section-title`},Td={key:0,class:`slide`},Ed={class:`section-body`},Dd={key:1,class:`bullets`},Od={key:2,class:`table-wrap`},kd={key:3,class:`code`},Ad={key:4,class:`note-line`},jd={key:0,class:`checklist`},Md={key:1,class:`quiz`},Nd=K({__name:`ChapterNotes`,props:{notes:{type:Object,required:!0}},setup(e){let t=e,n=y(!1),r=y(0),i=e=>{r.value=r.value===e?-1:e},a=e=>Array.isArray(e)?e:[e],o=T(()=>t.notes.sections.length);return(t,c)=>(s(),k(`section`,{class:h([`notes`,{closed:!n.value}])},[M(`button`,{class:`notes-toggle`,type:`button`,"aria-expanded":n.value,onClick:c[0]||=e=>n.value=!n.value},[c[2]||=M(`span`,{class:`marker`,"aria-hidden":`true`},`📖`,-1),M(`span`,vd,[c[1]||=g(` 교안 정리 — 이 챕터를 여기서 복습합니다 `,-1),M(`small`,null,A(e.notes.range)+` · `+A(o.value)+`개 항목`,1)]),M(`span`,yd,A(n.value?`−`:`+`),1)],8,_d),j(M(`div`,bd,[M(`p`,xd,A(e.notes.lead),1),(s(!0),k(C,null,P(e.notes.sections,(e,t)=>(s(),k(`article`,{key:e.title,class:h([`note-section`,{open:r.value===t}])},[M(`button`,{class:`section-head`,type:`button`,"aria-expanded":r.value===t,onClick:e=>i(t)},[M(`span`,Cd,A(String(t+1).padStart(2,`0`)),1),M(`span`,wd,A(e.title),1),e.slide?(s(),k(`span`,Td,A(e.slide),1)):x(``,!0)],8,Sd),j(M(`div`,Ed,[e.body?(s(!0),k(C,{key:0},P(a(e.body),(e,t)=>(s(),k(`p`,{key:t,class:`para`},A(e),1))),128)):x(``,!0),e.bullets?(s(),k(`ul`,Dd,[(s(!0),k(C,null,P(e.bullets,e=>(s(),k(`li`,{key:e},A(e),1))),128))])):x(``,!0),e.table?(s(),k(`div`,Od,[M(`table`,null,[M(`thead`,null,[M(`tr`,null,[(s(!0),k(C,null,P(e.table.head,e=>(s(),k(`th`,{key:e},A(e),1))),128))])]),M(`tbody`,null,[(s(!0),k(C,null,P(e.table.rows,(e,t)=>(s(),k(`tr`,{key:t},[(s(!0),k(C,null,P(e,(e,t)=>(s(),k(`td`,{key:t},A(e),1))),128))]))),128))])])])):x(``,!0),e.code?(s(),k(`figure`,kd,[M(`figcaption`,null,A(e.code.caption),1),M(`pre`,null,[M(`code`,null,A(e.code.text),1)])])):x(``,!0),e.note?(s(),k(`p`,Ad,[c[3]||=M(`span`,{"aria-hidden":`true`},`⚠`,-1),g(` `+A(e.note),1)])):x(``,!0)],512),[[R,r.value===t]])],2))),128)),e.notes.checklist?(s(),k(`section`,jd,[c[4]||=M(`p`,{class:`block-label`},`이만큼 말할 수 있으면 이 챕터는 넘어가도 됩니다`,-1),M(`ul`,null,[(s(!0),k(C,null,P(e.notes.checklist,e=>(s(),k(`li`,{key:e},A(e),1))),128))])])):x(``,!0),e.notes.quiz?(s(),k(`section`,Md,[c[5]||=M(`p`,{class:`block-label`},`스스로 확인 — 답을 떠올린 뒤 펼쳐 보세요`,-1),(s(!0),k(C,null,P(e.notes.quiz,e=>(s(),k(`details`,{key:e.q},[M(`summary`,null,A(e.q),1),M(`p`,null,A(e.a),1)]))),128))])):x(``,!0)],512),[[R,n.value]])],2))}},[[`__scopeId`,`data-v-ec97fd99`]]),Pd=[`aria-expanded`],Fd={class:`chevron`,"aria-hidden":`true`},Id={class:`orientation-body`},Ld={class:`rule`},Rd={class:`lead`},zd={class:`cargo`},Bd={class:`name`},Vd={class:`payload`},Hd={"aria-hidden":`true`},Ud=[`innerHTML`],Wd={class:`priority`},Gd={class:`p-name`},Kd={class:`p-weight`},qd={class:`p-when`},Jd={class:`keep`},Yd=[`innerHTML`],Xd=K({__name:`ChapterOrientation`,props:{orientation:{type:Object,required:!0}},setup(e){let t=y(!0);return(n,r)=>(s(),k(`section`,{class:h([`orientation`,{closed:!t.value}])},[M(`button`,{class:`orientation-toggle`,type:`button`,"aria-expanded":t.value,onClick:r[0]||=e=>t.value=!t.value},[r[1]||=M(`span`,{class:`marker`,"aria-hidden":`true`},`🧭`,-1),r[2]||=M(`span`,{class:`toggle-title`},`시작하기 전에 — 규칙은 하나뿐입니다`,-1),M(`span`,Fd,A(t.value?`−`:`+`),1)],8,Pd),j(M(`div`,Id,[M(`p`,Ld,A(e.orientation.rule),1),M(`p`,Rd,A(e.orientation.lead),1),M(`ul`,zd,[(s(!0),k(C,null,P(e.orientation.cargo,e=>(s(),k(`li`,{key:e.name},[M(`code`,Bd,A(e.name),1),M(`span`,Vd,A(e.payload),1),M(`span`,{class:h([`dir`,e.dir===`위로`?`up`:`down`])},[M(`span`,Hd,A(e.dir===`위로`?`↑`:`↓`),1),g(` `+A(e.dir),1)],2)]))),128))]),M(`p`,{class:`why`,innerHTML:_(q)(e.orientation.why)},null,8,Ud),r[4]||=M(`p`,{class:`priority-label`},`실제로 쓰는 비중`,-1),M(`ul`,Wd,[(s(!0),k(C,null,P(e.orientation.priority,e=>(s(),k(`li`,{key:e.name,class:h(e.level)},[M(`span`,Gd,A(e.name),1),M(`span`,Kd,A(e.weight),1),M(`span`,qd,A(e.when),1)],2))),128))]),M(`p`,Jd,[r[3]||=M(`span`,{class:`keep-label`},`이것만은`,-1),M(`span`,{innerHTML:_(q)(e.orientation.keep)},null,8,Yd)])],512),[[R,t.value]])],2))}},[[`__scopeId`,`data-v-bfb97b66`]]),Zd={6:{range:`178~190쪽`,lead:`컴포넌트 계층을 타고 값을 넘기는 대신, 화면 밖 저장소 하나를 두고 모두가 거기를 본다. 이 챕터의 절반은 Store 만드는 법, 나머지 절반은 그것으로 로그인을 구현하는 사례연구다.`,sections:[{title:`Pinia란 무엇인가`,slide:`179쪽`,body:`Vue Application이 크고 복잡해질수록 Component 간 데이터를 전달하는 일이 어려워집니다. Pinia는 Component 계층 구조와 상관없이 별도의 전역 데이터 저장소(Store)를 개설해 반응형 데이터를 관리합니다.`,bullets:[`Pinia는 Vue 3의 상태(state) 관리 라이브러리다. Vue 2에서는 Vuex를 썼다.`,`상태(State)란 웹 애플리케이션을 렌더링하는 과정에 영향을 줄 수 있는 값을 말하고, 상태관리란 그 값을 다루는 방법을 말한다.`,`package.json 의 dependencies 에 pinia 가 들어 있어야 한다.`]},{title:`Store — 무엇을 한 파일에 담는가`,slide:`180쪽`,body:`Store는 여러 파일로 구성될 수 있으며, 일반적으로 의미가 있는 상태끼리 파일 하나로 작성합니다. 예를 들어 인증스토어(authStore.js), UI스토어(uiStore.js), 알림스토어(alertStore.js), 공통코드스토어(commonStore.js)처럼 나눕니다.`,table:{head:[`용어`,`기술적 본질`,`Vue 3 내장 문법 매핑`,`주요 역할`],rows:[[`state`,`반응형 데이터 변수`,`ref() / reactive()`,`전역으로 공유할 상태 데이터 객체를 정의한다`],[`getters`,`읽기 전용 계산된 변수`,`computed()`,`원본 state를 기반으로 실시간 가공한다`],[`actions`,`상태 변경 및 통신 함수`,`function()`,`state 값을 변경하는 핸들러 로직 / 서버 비동기 API 통신(axios 등) 수행`]]},note:`Pinia 를 새로 외우는 것이 아니다. 이미 아는 ref · computed · function 에 이름을 새로 붙인 것뿐이다.`},{title:`구축 3단계 ① Pinia 등록`,slide:`181쪽`,body:`src/main.js 에서 createPinia() 함수로 pinia 인스턴스를 생성하고, 애플리케이션 인스턴스의 use() 함수로 등록합니다.`,code:{caption:`src/main.js`,text:`import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())   // ① 인스턴스 생성 ② use() 로 등록
app.use(router)

app.mount('#app')`},note:`이 한 줄을 빠뜨리면 useStore() 를 부르는 순간 "no active Pinia" 오류가 난다.`},{title:`구축 3단계 ② Store 생성`,slide:`182쪽`,body:`src/stores/스토어명.js 에서 Pinia 패키지가 제공하는 defineStore() 함수로 만듭니다. defineStore()가 돌려준 Store Instance를 할당하는 변수의 식별자는 use + 파일명 + Store 규칙에 따라 작성합니다.`,code:{caption:`src/stores/counter.js`,text:`import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})`},table:{head:[`코드`,`Vue 3 내장 기술 스펙`,`Pinia 관점의 명칭`,`실제 런타임 역할 및 의미`],rows:[[`count`,`ref() 반응형 상태 변수`,`state (상태 데이터)`,`전역에서 공유할 원본 숫자 데이터의 저장소 (기본값 0)`],[`doubleCount`,`computed() 계산된 변수`,`getters (연산 상태)`,`count 가 변경될 때만 실시간 연동되어 계산되는 Read-Only 변수`],[`increment()`,`일반 JavaScript 함수`,`actions (실행 액션)`,`전역 state 인 count 값을 안전하게 1씩 증가시키는 함수`],[`return { … }`,`객체 반환 문법`,`Expose (외부 개방 API)`,`이 스토어를 import 할 외부 컴포넌트가 전역 데이터에 접근할 수 있도록 선언`]]},note:`return 에 넣지 않은 것은 밖에서 보이지 않는다. 스토어 안에서만 쓰는 값은 일부러 빼 두면 된다.`},{title:`구축 3단계 ③ Store 사용`,slide:`183쪽`,body:`① 정의한 스토어를 import 하고 ② 인스턴스를 가동해(전역 저장소 포인터 확보) ③ state · getter · action 을 꺼내 씁니다.`,code:{caption:`StoreCounter.vue`,text:`<script setup>
// 1. 정의한 카운터 스토어 플러그인 import
import { useCounterStore } from '@/stores/counter.js'

// 2. 인스턴스 가동 (전역 저장소 포인터 확보)
const counterStore = useCounterStore()
<\/script>

<template>
  <p>원본 카운트 데이터(state): {{ counterStore.count }}</p>
  <p>2배 연산 데이터(getters): {{ counterStore.doubleCount }}</p>
  <button @click="counterStore.increment">숫자 1 증가 (actions)</button>
</template>`}},{title:`가장 자주 하는 실수 — 구조 분해로 반응성이 끊긴다`,slide:`184쪽`,body:`Store의 데이터 속성(State, Getters)은 구조분해할당(Destructuring Assignment) 시 반응형이 유실될 수 있습니다.`,code:{caption:`오류 유발 코드 / 올바른 코드`,text:`// ✘ 이렇게 구조 분해 할당을 하면
//   Vue 3 반응형 시스템(Proxy 주소)이 단절되어 화면이 갱신되지 않습니다.
const { count, increment } = counterStore

// ✔ 데이터(State, Getters)는 storeToRefs 로 감싸야 연결 고리가 보존된다
import { storeToRefs } from 'pinia'

const { count, doubleCount } = storeToRefs(counterStore)
const { increment } = counterStore   // 함수인 Actions 는 그냥 꺼내도 무방`},bullets:[`구조분해할당(Destructuring Assignment)이란 Array나 Object의 구조를 분해하여, 내부의 값들을 별도의 독립된 개별 변수에 각각 직접 할당하는 모던 JavaScript 표현식이다.`,`storeToRefs 는 state · getters 에만 쓴다. actions 는 함수라 그대로 꺼내 써도 된다.`],note:`화면이 안 바뀐다면 십중팔구 여기다. 값은 찍히는데 갱신만 안 되는 증상이 특징이다.`},{title:`(사례연구) authStore — 로그인 전체 흐름`,slide:`185~186쪽`,body:`로그인은 "서버가 검증하고, 프런트가 보관한다"로 나뉩니다. 둘 다 login() 이라는 이름을 쓰지만 하는 일이 다릅니다.`,bullets:[`① 컴포넌트(LoginView.vue)가 axios.post("/api/login", { id, pw }) 로 요청한다.`,`② 백엔드가 DB와 대조해 검증하고 200 OK 로 Token + User Data 를 응답한다.`,`③ 컴포넌트가 authStore.login(user, token) 액션을 호출해 State 와 localStorage 에 저장한다.`],table:{head:[`구분`,`Backend API login() — 검증 & 발급`,`Pinia authStore.login() — 저장 & 유지`],rows:[[`하는 일`,`사용자가 입력한 ID/PW를 DB에 저장된 값과 비교`,`백엔드가 응답한 토큰과 유저 정보를 반응형 State에 저장`],[`결과물`,`인증 성공 시 보안 JWT Access Token 생성`,`새로고침 시에도 유지되도록 localStorage 동기화`],[`다음 단계`,`클라이언트에 토큰 및 유저 프로필 객체 응답`,`Navigation Guard에서 접근 권한 검사 용도로 상태 공유`]]}},{title:`JWT — 무엇이고 왜 쓰는가`,slide:`187쪽`,body:`JWT(JSON Web Token)는 정보를 안전하게 JSON 객체 형태로 주고받기 위해 정의된 표준 규격으로, Backend가 발급합니다. 점(.) 2개로 구분된 3개의 긴 암호문(Base64)으로 이루어져 있습니다 — Header, Payload, Signature.`,code:{caption:`JWT 의 생김새와 전달 방법`,text:`eyJhbGciOi... . eyJzdWIiOi... . d3g4eT...
   Header          Payload        Signature

GET /api/user/profile HTTP/1.1
Host: api.skala.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json`},table:{head:[`구분`,`기존 세션(Session) 방식`,`JWT (Token) 방식`],rows:[[`로그인 정보 저장소`,`서버 메모리 / DB`,`클라이언트 (브라우저 State / LocalStorage)`],[`서버 부하`,`동시 접속자가 많으면 서버 메모리 부담 증가`,`서버에 저장하지 않으므로 부하가 매우 적음 (Stateless)`],[`서버 확장성`,`서버를 여러 대 늘릴 때 세션 공유 설정(Redis 등) 필요`,`서버가 여러 대여도 토큰 서명만 검증하면 되므로 확장 용이`],[`적합한 아키텍처`,`전통적인 서버 사이드 렌더링 (SSR)`,`SPA (Vue, React) + REST API 서버`]]},note:`Base64는 누구나 쉽게 복호화할 수 있으므로 Payload에 민감정보를 넣으면 안 된다. 실무에서는 Axios Request Interceptor 로 토큰을 자동 주입한다.`},{title:`(사례연구) authStore 전체 코드`,slide:`188쪽`,body:`사용자의 토큰(JWT), 사용자 정보, 로그인 상태 등을 앱 전체에서 공유하기 위한 전역 인증 스토어입니다. 파일명은 authStore.js 로 지정하고, 외부에서 불러올 함수명은 Vue Composable 관례에 따라 useAuthStore 로 내보냅니다.`,code:{caption:`src/stores/authStore.js`,text:`import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // 1. State: 로그인 토큰 및 사용자 정보
  const token = ref(localStorage.getItem('accessToken') || null)
  const user = ref(JSON.parse(localStorage.getItem('userInfo') || 'null'))

  // 2. Getters: 로그인 여부 확인 및 사용자 이름
  const isLoggedIn = computed(() => !!token.value)
  const userName = computed(() => user.value?.name || '게스트')

  // 3. Actions: 로그인 / 로그아웃 로직
  function login(userData, authToken) {
    user.value = userData
    token.value = authToken
    // 브라우저 재접속 시 유지용
    localStorage.setItem('accessToken', authToken)
    localStorage.setItem('userInfo', JSON.stringify(userData))
  }
  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userInfo')
  }

  return { token, user, isLoggedIn, userName, login, logout }
})`}},{title:`Navigation Guard 와 연동`,slide:`189쪽`,body:`router/index.js 에서 stores/authStore.js 를 import 해 이동 직전에 접근 권한을 검사합니다.`,code:{caption:`src/router/index.js`,text:`router.beforeEach((to, from) => {
  // Guard 내부에서 authStore 호출
  const authStore = useAuthStore()

  // 1. 인증이 필요한 페이지 접근 시 로그인 여부 체크
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    alert('로그인이 필요한 서비스입니다.')
    // 로그인 후 돌아올 위치를 함께 전달
    return { name: 'Login', query: { redirect: to.fullPath } }
  }

  // 2. 이미 로그인한 사용자가 로그인 페이지 접근 시 메인으로 이동
  if (to.name === 'Login' && authStore.isLoggedIn) {
    return { name: 'Dashboard' }
  }
})`},note:`Guard 안에서 useAuthStore() 를 "호출 시점에" 부르는 것이 중요하다. 파일 맨 위에서 미리 꺼내 두면 Pinia 가 아직 활성화되지 않아 오류가 난다.`}],checklist:[`Props Drilling 이 무엇이고 Pinia 가 그것을 어떻게 없애는지 한 문장으로 말할 수 있다`,`state · getters · actions 를 각각 ref · computed · function 과 대응시킬 수 있다`,`main.js 에 app.use(createPinia()) 를 적는 이유를 안다`,`storeToRefs 를 언제 쓰고 언제 쓰지 않는지 구분할 수 있다`,`Backend 의 login() 과 authStore 의 login() 이 각각 무엇을 하는지 나눠 설명할 수 있다`,`JWT 가 세션 방식보다 SPA 에 적합한 이유를 두 가지 댈 수 있다`,`Navigation Guard 에서 로그인 여부를 검사하고 redirect 쿼리를 남기는 코드를 쓸 수 있다`],quiz:[{q:`화면에 스토어 값을 꽂았는데 값이 바뀌어도 화면이 그대로다. 가장 먼저 의심할 곳은?`,a:`storeToRefs 없이 구조 분해했는지 확인한다. const { count } = store 는 반응형 Proxy 연결이 끊겨 값만 복사된다.`},{q:`state 를 객체가 아니라 함수로 돌려주는 이유는?`,a:`스토어가 여러 번 생성될 때 인스턴스마다 별도의 값을 갖게 하기 위해서다. 객체를 그대로 두면 모두가 같은 객체를 공유하게 된다.`},{q:`JWT Payload 에 사용자 비밀번호를 넣어도 되는가?`,a:`안 된다. Base64 는 암호화가 아니라 인코딩이라 누구나 복호화할 수 있다.`},{q:`토큰을 localStorage 에도 저장하는 이유는?`,a:`새로고침하면 자바스크립트 메모리(State)가 초기화되기 때문이다. 다만 진짜 유효한지는 서버에 다시 물어봐야 한다.`}]},7:{range:`192~207쪽`,lead:`앞의 여섯 챕터는 브라우저 안에서 끝나는 이야기였다. 이 챕터부터 화면 밖 서버와 대화한다. HTTP 규약 → REST 설계 → Axios 문법 순으로 좁혀 들어간다.`,sections:[{title:`HTTP 와 Method`,slide:`193쪽`,body:`HTTP(HyperText Transfer Protocol)는 웹 브라우저와 웹 서버가 인터넷상에서 데이터를 주고받기 위해 세계적으로 약속한 표준 통신 규약(Protocol)입니다. 일반적으로 Client에서 Server로 HTTP Request를 보내고 서버는 요청에 대해 HTTP Response를 보냅니다. HTTP Method는 Client가 Server에 요청하는 작업이 무엇인지를 나타냅니다.`,table:{head:[`HTTP 메서드`,`CRUD 연산 기능 (Database)`,`실제 수행하는 행위의 의미`],rows:[[`GET`,`Read (조회)`,`서버의 데이터를 바꾸지 않고 오직 읽어오기만 함`],[`POST`,`Create (생성)`,`서버에 새로운 데이터를 밀어 넣어 등록함`],[`PUT / PATCH`,`Update (수정)`,`서버에 이미 있는 데이터를 찾아서 값을 변경함`],[`DELETE`,`Delete (삭제)`,`서버에 있는 특정 데이터를 타격하여 파괴함`]]},note:`각 Method 의 역할은 강제 규칙이 아니다. POST 로 데이터를 삭제하거나 변경해도 동작은 한다 — 다만 약속을 어긴 것이라 남이 읽기 어려워진다.`},{title:`API 와 REST 설계 원칙`,slide:`194쪽`,body:`API(Application Programming Interface)는 서로 다른 소프트웨어 애플리케이션이 자신들의 기능이나 데이터를 상대방이 안전하고 쉽게 가져다 쓸 수 있도록 열어놓은 규칙입니다. Web에서의 API는 Browser와 Server 간에 HTTP를 사용해 데이터를 주고받는 약속을 의미합니다.`,bullets:[`REST(REpresentational State Transfer) API 는 웹의 HTTP를 활용하면서, 자원을 이름으로 구분하여 해당 자원의 데이터를 주고받는 방식의 웹 인터페이스 스타일이다.`,`HTTP Method(GET, POST, DELETE, PUT)를 활용하여 자원에 대한 CRUD 작업을 적용한다.`,`오늘날 대부분의 인터페이스에 활용된다.`],code:{caption:`주소(URI)는 오직 명사(자원)로만 구성한다`,text:`✘ 나쁜 예 (Non-REST)   /getWeather   /deleteUser   /update_city
                        → 주소에 동사가 포함됨

✔ 바른 예 (REST)       /weather      /users        /cities
                        → 오직 깔끔한 명사만 남김

행위(동사)는 HTTP Method 로 대체한다.
  GET    /users      목록 조회
  POST   /users      등록
  DELETE /users/1    1번 삭제`}},{title:`Frontend 와 Backend 의 경계`,slide:`195쪽`,table:{head:[`구분`,`맡는 일`],rows:[[`Frontend`,`사용자가 웹 브라우저를 통해 눈으로 보고, 클릭하고, 입력하는 모든 화면(UI/UX) 영역. 사용자의 행동(Event)을 감지하고, Backend API를 통해 받은 데이터를 보기 좋게 시각화(렌더링)한다.`],[`Backend`,`시스템의 핵심 비즈니스 로직, 데이터 가공, 보안, 데이터베이스(DB) 관리를 전담하는 서버 영역. 데이터베이스를 안전하게 제어하고, 로직과 규칙을 거쳐 Frontend가 필요한 데이터를 API를 통해 전달한다.`]]}},{title:`연습용 API 두 곳`,slide:`196~199쪽`,body:`JSON Placeholder 는 전 세계 프론트엔드 개발자들이 통신 및 CRUD 코드를 테스트할 때 사용하는 무료 가상 REST API 서비스입니다(https://jsonplaceholder.typicode.com/). OpenWeather 는 전 세계 20만 개 이상의 도시 데이터를 일관된 규격으로 제공하는 가장 대중적인 REST API 서비스입니다.`,table:{head:[`Method`,`엔드포인트`,`전달할 데이터 (Body)`,`Response`],rows:[[`GET`,`/posts`,`없음`,`서버에 등록된 전체 가상 데이터 목록 조회 (배열)`],[`GET`,`/posts/1`,`없음`,`1번 고유 ID를 가진 데이터 상세 조회`],[`POST`,`/posts`,`{ title, body, userId }`,`새로운 정보 등록 (보낸 데이터와 함께 id: 101 을 추가해서 객체 반환)`],[`PUT`,`/posts/1`,`{ title, body }`,`새 내용으로 교체 (보낸 데이터와 함께 id:1 추가해서 반환)`],[`DELETE`,`/posts/1`,`없음`,`1번 데이터 삭제 (성공 시 공백 반환)`]]},code:{caption:`OpenWeather Current Weather API 호출 주소`,text:`# 좌표로 호출
https://api.openweathermap.org/data/2.5/weather
  ?lat={lat}&lon={lon}&appid={API key}&units=metric&lang=kr

# 도시 이름으로 호출 (Geocoding 내장)
https://api.openweathermap.org/data/2.5/weather
  ?q=\${targetCity.english}&appid=\${API_KEY}&units=metric&lang=kr

# 무료 등급: 월 1,000,000건 · 분당 60건
# units=metric 을 빼면 켈빈(K)으로 온다. lang=kr 이면 설명이 한글로 온다.`},note:`Postman 은 서버에서 제공하는 API를 테스트하는 도구다. 코드를 쓰기 전에 Postman 으로 먼저 주소와 키가 맞는지 확인하면 디버깅이 훨씬 빨라진다.`},{title:`Fetch API vs Axios`,slide:`201쪽`,table:{head:[`비교 항목`,`Fetch API`,`Axios`],rows:[[`설치 여부`,`없음 (브라우저 기본 내장 빌트인)`,`필수 (npm i axios 로 패키지 설치 필요)`],[`JSON 변환`,`수동 (반드시 res.json() 파싱 단계를 거침)`,`자동 (내부적으로 JSON을 object로 자동 변환)`],[`에러 핸들링`,`수동 처리`,`자동 처리`],[`실무 선호도`,`중간`,`매우 높음`],[`BaseURL 설정`,`지원 안 함`,`지원 (axios.create)`],[`요청/응답 인터셉터`,`지원 안 함`,`지원 (요청 직전 로그인 토큰 자동 탑승, 에러 발생 시 공통 팝업 가로채기 등)`]]},note:`실무에서 Axios 를 고르는 진짜 이유는 마지막 두 줄이다. baseURL 과 인터셉터가 없으면 주소·토큰·에러 문구가 부르는 곳마다 흩어진다.`},{title:`Axios 기본 사용`,slide:`202~204쪽`,body:`npm install axios 로 설치한 뒤 package.json 의 dependencies 에 들어왔는지 확인합니다. 아래는 OpenWeather 호출로 기본 동작 원리를 익히는 예제입니다.`,code:{caption:`요청 — async / await + try / catch / finally`,text:`<script setup>
import { ref } from 'vue'
import axios from 'axios'

const weatherData = ref(null)
const isLoading = ref(false)

const handleFetchWeather = async () => {
  isLoading.value = true

  const API_KEY = '8964edc63b366d27b5b728b7976570b7'
  const URL = \`https://api.openweathermap.org/data/2.5/weather?lat=35.158582&lon=126.804975&appid=\${API_KEY}&units=metric&lang=kr\`

  try {
    // 비동기 통신: 서버에서 데이터를 다 가져올 때까지 await 로 기다린다.
    const response = await axios.get(URL)
    // fetch()는 응답 String을 Json으로 변환해야 하지만(.json()),
    // Axios 에서는 응답(response.data)이 자동으로 JSON 파싱 된다.
    weatherData.value = response.data
  } catch (error) {
    // 4xx, 5xx 에러나 네트워크 오프라인 시 자동으로 reject 되어 catch 에서 처리한다.
    console.error('통신 중 에러가 발생했습니다:', error)
    alert('데이터를 가져오지 못했습니다. API 키 활성화 여부나 주소를 확인하세요.')
  } finally {
    isLoading.value = false
  }
}
<\/script>`},bullets:[`isLoading 은 통신 시작에 true, finally 에서 false 로 되돌린다. finally 에 두어야 성공하든 실패하든 반드시 풀린다.`,`화면에서는 :disabled="isLoading" 으로 버튼을 잠그고, v-if="weatherData" / v-else 로 결과와 안내를 갈라 준다.`,`weatherData.name(도시), weatherData.main.temp(기온), weatherData.weather[0].description(날씨 설명), weatherData.main.humidity(습도) 를 꺼내 쓴다.`]},{title:`Axios 함수 목록`,slide:`205쪽`,table:{head:[`구분`,`함수명 / 호출 형태`,`주요 특징 및 용도`,`예시`],rows:[[`인스턴스 생성`,`axios.create([config])`,`사용자 정의 설정을 가진 독립된 Axios 인스턴스를 생성한다`,`const api = axios.create({ baseURL: '/api' })`],[`기본 객체 호출`,`axios(config)`,`Config 객체 하나만 전달하여 요청을 보낸다`,`axios({ method: 'get', url: '/users' })`],[`URL+설정 호출`,`axios(url, [config])`,`첫 번째 인자로 URL, 두 번째로 설정 객체를 전달한다`,`axios('/users', { method: 'post', data: {} })`],[`조회`,`axios.get(url, [config])`,`데이터 조회 (Body 없음, Query String 사용)`,`axios.get('/users', { params: { id: 1 } })`],[`생성`,`axios.post(url, [data], [config])`,`데이터 생성 (Body 데이터 포함, JSON 자동 변환)`,`axios.post('/users', { name: 'Kim' })`],[`전체 수정`,`axios.put(url, [data], [config])`,`데이터 전체 수정 (Body 데이터 포함)`,`axios.put('/users/1', { name: 'Lee' })`],[`일부 수정`,`axios.patch(url, [data], [config])`,`데이터 일부 수정 (Body 데이터 포함)`,`axios.patch('/users/1', { age: 20 })`],[`삭제`,`axios.delete(url, [config])`,`데이터 삭제`,`axios.delete('/users/1')`],[`인터셉터`,`axios.interceptors.request`,`요청 전송 직전 토큰(JWT) 삽입 등 공통 전처리를 수행한다`,`api.interceptors.request.use(config => …)`],[`인터셉터`,`axios.interceptors.response`,`응답 수신 직후 에러 공통 처리, 데이터 가공 등 후처리를 수행한다`,`api.interceptors.response.use(res => …)`],[`병렬 요청`,`axios.all([…])`,`여러 개의 Axios Promise를 배열로 받아 동시에 실행한다`,`axios.all([getA(), getB()])`],[`병렬 요청`,`axios.spread(callback)`,`axios.all 의 결과를 각 변수로 분해하여 수신한다`,`.then(axios.spread((resA, resB) => …))`]]},note:`통신 메서드들은 호출 후 자바스크립트의 Standard Promise 객체를 반환한다. 그래서 .then 으로도, await 로도 받을 수 있다.`},{title:`비동기 호출 방식 — .then vs async/await`,slide:`206쪽`,body:`Axios가 Promise를 리턴하기 때문에 두 가지 비동기 처리 방식을 쓸 수 있습니다.`,table:{head:[`비교 항목`,`Promise (.then()) 방식`,`async / await 방식`],rows:[[`문법적 기반`,`ES6 (2015년) 도입 표준 객체 기반`,`ES8 (2017년) 도입, Promise를 감싼 문법적 설탕`],[`코드 스타일`,`체이닝 방식 (콜백 함수를 뒤에 줄줄이 엮어 나감)`,`동기식 스타일 (위에서 아래로 순차적으로 읽히는 일반 코드 형태)`],[`에러 핸들링`,`.catch(error => { … }) 메서드로 제어`,`자바스크립트 정석 문법인 try { … } catch (e) { … } 로 제어`],[`실무 선호도`,`보통 (간단한 단발성 통신에 가끔 사용)`,`매우 높음 (가독성과 유지보수성이 매우 유리)`]]},code:{caption:`실행 순서가 다르다 — 로그가 찍히는 차례를 보라`,text:`// .then 방식 — '1번 → 2번 → 3번' 이 아니라 1 → 2 → 3(도착) 순
console.log('1. 통신 시작 구역')
axios.get(URL)
  .then((response) => console.log('3. 데이터 도착:', response.data))
  .catch((error) => console.error('에러 발생:', error))
console.log('2. 통신 요청 직후 라인')
// 백엔드 데이터가 오기 전에 '2번 로그'가 콘솔창에 먼저 기록된다

// async/await 방식 — 위에서 아래로 읽은 그대로
const fetchWeatherAsync = async () => {
  console.log('1. 통신 시작 구역')
  try {
    const response = await axios.get(URL)   // 도착할 때까지 이 줄에서 기다린다
    console.log('2. 데이터 도착:', response.data)
  } catch (error) {
    console.error('에러 발생:', error)
  }
  console.log('3. 모든 통신 프로세스 완전히 끝난 후 라인')
  // '1번 -> 2번 -> 3번' 순서대로 기록된다
}`}},{title:`CRUD 한 바퀴 (AxiosJson.vue)`,slide:`207쪽`,body:`JSONPlaceholder 예제로 REST API의 CRUD 처리 코드를 확인합니다.`,code:{caption:`READ — 목록 가져오기`,text:`<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 1. 백엔드 공용 주소
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

// 2. 반응형 상태 데이터
const items = ref([])      // 서버에서 받아온 데이터 배열 박스
const textInput = ref('')  // 입력창과 연결된 글자 데이터 박스

// [READ] GET : 데이터 가져오기
const handleRead = async () => {
  try {
    // 공부용으로 딱 3개만 들고 옵니다.
    const response = await axios.get(BASE_URL, { params: { _limit: 3 } })
    items.value = response.data
    console.log('GET 성공:', response.data)
  } catch (error) {
    console.error('GET 실패:', error)
  }
}

onMounted(handleRead)
<\/script>`},bullets:[`POST 는 axios.post(BASE_URL, { title: textInput.value }) 처럼 두 번째 인자에 Body 를 싣는다.`,"PUT 은 axios.put(`${BASE_URL}/${id}`, {…}) 로 자원 주소를 지정한다.","DELETE 는 axios.delete(`${BASE_URL}/${id}`) 로 Body 없이 보낸다.",`JSONPlaceholder 는 가상 서버라 실제로 저장되지는 않는다. 응답은 성공한 것처럼 돌아온다.`]}],checklist:[`HTTP Method 4개와 CRUD 를 짝지어 말할 수 있다`,`REST 설계에서 URI 에 동사를 쓰지 않는 이유를 설명할 수 있다`,`Fetch 대신 Axios 를 쓰는 이유를 baseURL · 인터셉터로 설명할 수 있다`,`async / await 와 try / catch / finally 로 로딩·에러 상태를 다룰 수 있다`,`response 와 response.data 의 차이를 안다`,`.then 방식과 await 방식의 실행 순서 차이를 로그 순서로 설명할 수 있다`,`axios.create 로 인스턴스를 만들고 baseURL 을 지정할 수 있다`],quiz:[{q:`axios.get() 의 결과에서 실제 데이터는 어디에 들어 있는가?`,a:`response.data 다. response 는 status · headers · config 까지 담은 봉투이고, data 가 그 안의 내용물이다.`},{q:`fetch 와 달리 axios 는 4xx·5xx 응답을 어떻게 다루는가?`,a:`자동으로 reject 되어 catch 로 넘어간다. fetch 는 404 여도 resolve 되므로 res.ok 를 직접 검사해야 한다.`},{q:`isLoading = false 를 finally 에 두는 이유는?`,a:`성공하든 실패하든 반드시 실행되기 때문이다. try 안에만 두면 에러가 났을 때 로딩이 영원히 풀리지 않는다.`},{q:`URI 를 /getWeather 로 지으면 무엇이 잘못인가?`,a:`행위(동사)는 HTTP Method 가 표현해야 한다. 주소는 자원(명사)만 가리켜야 /weather 하나로 GET·POST·DELETE 를 모두 표현할 수 있다.`}]},8:{range:`210~227쪽`,lead:`직접 만들던 버튼·입력창·팝업을 가져다 쓴다. 이 챕터의 본문은 대부분 "무엇이 있는지"를 훑는 카탈로그다. 외울 것이 아니라 필요할 때 찾아보는 목록으로 두면 된다.`,sections:[{title:`UI 라이브러리를 쓰는 이유`,slide:`211쪽`,body:`UI 라이브러리는 웹 애플리케이션 UI(User Interface) 구축에 필요한 공통 컴포넌트(Button, Input, Form, Dialog, Table 등)를 Vue 3 컴포넌트 단위로 모듈화하여 제공하는 오픈소스 소프트웨어 패키지입니다.`,bullets:[`개발 리소스 절감: CSS 스타일시트 및 HTML 마크업 코드 작성을 생략하고 완성된 컴포넌트 태그를 호출하므로 UI 구현 속도가 향상된다.`,`크로스 브라우징 및 반응형 대응: 다양한 브라우저 환경(Chrome, Safari, Firefox 등)과 디바이스 해상도(Mobile, Tablet, Desktop)별 미디어 쿼리가 내부적으로 최적화되어 있다.`,`웹 표준 및 접근성(WAI-ARIA) 준수: 스크린 리더 인식, 키보드 포커스 제어 등 웹 접근성 가이드라인이 컴포넌트 레벨에서 사전 구현되어 있다.`]},{title:`Vue 3 생태계 UI 라이브러리 비교`,slide:`212쪽`,table:{head:[`비교 항목`,`Vuetify`,`Element Plus`,`PrimeVue`],rows:[[`기반 디자인 명세`,`Google Material Design`,`Enterprise Desktop View`,`Multi-Theme & Flex CSS`],[`TypeScript 지원`,`지원 완료`,`완전 기본 내장 (최상)`,`지원 완료`],[`스타일 격리/커스텀`,`SASS 변수 수정 방식`,`CSS 변수 수정 방식`,`Unstyled 모드 지원 (최상)`],[`특화 컴포넌트`,`Mobile V-App Layout`,`Data Table, Form Validation`,`Advanced Chart, Tree Table`],[`전용 컴포넌트 태그 예시`,`<v-btn>`,`<el-button>`,`<Button>`]]},note:`Global 시장에서는 PrimeVue 와 Vuetify 의 점유율이 높으며, 국내에서는 Element Plus 의 점유율이 높다. Element Plus 의 학습 난이도가 가장 낮다.`},{title:`설치와 등록`,slide:`213~215쪽`,body:`공식 사이트는 https://element-plus.org/ 입니다. Guide · Component · Resource 세 갈래로 되어 있고, 실무에서는 Component 문서를 가장 많이 봅니다.`,code:{caption:`설치 후 src/main.js 에 전역 설정 주입`,text:`npm install element-plus

# ── src/main.js ──────────────────────────────
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Element Plus 모듈 및 필수 CSS 장부 파일 Import
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)   // Vue 앱에 Element Plus 사용 등록

app.mount('#app')`},note:`CSS 를 import 하지 않으면 태그는 인식되지만 스타일이 하나도 입혀지지 않는다. 내 디자인 토큰이 위에 덮이도록 순서에도 신경 쓴다.`},{title:`컴포넌트 카탈로그 ① Basic — 화면 구조와 기본 요소`,slide:`216~217쪽`,table:{head:[`컴포넌트`,`전용 태그`,`기능`],rows:[[`Button`,`<el-button>`,`다양한 색상, 크기, 비활성화 등을 지원하는 실무 표준 버튼 컴포넌트`],[`Container`,`<el-container>`,`레이아웃 외곽을 잡는 부모 컨테이너 (<el-header>, <el-aside> 등과 결합)`],[`Icon`,`<el-icon>`,`시스템 아이콘(화살표, 검색 등)을 손쉽게 주입하는 전용 아이콘 시스템`],[`Layout`,`<el-row>, <el-col>`,`24분할 기반의 정밀한 반응형 그리드(Grid) 레이아웃 배치 시스템`],[`Link`,`<el-link>`,`스타일 처리와 밑줄, 아이콘 결합이 내장된 텍스트 하이퍼링크 부품`],[`Text`,`<el-text>`,`크기, 두께, 말줄임표(Truncate) 처리가 손쉬운 표준 텍스트 컴포넌트`],[`Scrollbar`,`<el-scrollbar>`,`브라우저 기본 스크롤바 대신 세련된 커스텀 스크롤바를 씌우는 부품`],[`Space`,`<el-space>`,`자식 컴포넌트들 간의 가로/세로 여백(Gap)을 균일하게 통제하는 인프라`],[`Splitter`,`<el-splitter>`,`화면을 좌우/상하로 분할하고 마우스 드래그로 너비를 조절하는 레이아웃 부품`],[`Config Provider`,`<el-config-provider>`,`프로젝트 전체의 다국어 언어팩(Locale), 컴포넌트 기본 크기, z-index 를 일괄 제어`],[`Border / Color / Typography`,`(CSS Utility)`,`테두리 둥글기·두께, 브랜드 색상 세트, 표준 글꼴·크기·행간 명세`]]}},{title:`컴포넌트 카탈로그 ② Form — 입력과 검증`,slide:`218~219쪽`,body:`회원가입, 조건 검색 등 데이터를 입력하고 검증하는 컴포넌트입니다.`,table:{head:[`컴포넌트`,`전용 태그`,`기능`],rows:[[`Form`,`<el-form>, <el-form-item>`,`입력창들을 감싸서 실시간 데이터 검증(Validation) 및 경고 메시지를 뿜는 통제소`],[`Input`,`<el-input>`,`기본 텍스트, 비밀번호(눈 아이콘), 한 번에 지우기(X) 등을 지원하는 필수 인풋`],[`Input Number`,`<el-input-number>`,`오직 숫자만 입력받으며 +, - 버튼으로 수량을 조절하는 전용 인풋`],[`Autocomplete`,`<el-autocomplete>`,`사용자가 입력 시 백엔드 추천 검색어 목록을 아래에 즉시 띄워주는 인풋창`],[`Cascader`,`<el-cascader>`,`시/도 → 구/군 → 동 처럼 계층 구조의 데이터를 단계별로 선택하는 창`],[`Checkbox / Radio`,`<el-checkbox> / <el-radio>`,`다중 선택 및 그룹화 / 여러 단일 선택 중 무조건 1개만 고르도록 통제`],[`Select`,`<el-select>`,`화살표를 누르면 하부 옵션 목록이 슬라이딩 드롭다운되는 표준 선택 상자`],[`Virtualized Select`,`<el-select-v2>`,`옵션이 수만 개일 때 화면 버벅임 없이 렌더링하는 가상 스크롤 버전`],[`Date / DateTime Picker`,`<el-date-picker>, <el-date-time-picker>`,`실무 빈도 최상. 달력이 팝업되어 날짜(및 시간)를 선택하는 부품`],[`Time Picker / Select`,`<el-time-picker> / <el-time-select>`,`시:분:초 정밀 선택 / 09:00, 09:30 등 미리 지정된 목록 중 선택`],[`Switch`,`<el-switch>`,`ON/OFF, 토글 모드, 다크모드 스위칭을 시각적으로 변환하는 버튼`],[`Slider / Rate`,`<el-slider> / <el-rate>`,`바 위의 슬라이더로 수치 범위 지정 / 별점(★)을 클릭·드래그로 입력`],[`Color Picker`,`<el-color-picker>`,`마우스 클릭으로 웹 표준 컬러차트에서 색상을 선택하는 부품`],[`Transfer / TreeSelect`,`<el-transfer> / <el-tree-select>`,`좌우 바구니로 항목 이동 / 트리 구조를 품은 드롭다운 선택 상자`],[`Upload`,`<el-upload>`,`마우스 클릭 혹은 드래그 앤 드롭으로 파일을 첨부해 백엔드로 전송하는 인프라`],[`Input Tag / OTP / Mention`,`<el-input-tag>, <el-input-otp>, <el-mention>`,`엔터로 태그 칩 생성 / 인증번호 칸 분리 입력 / @ 멘션 창`]]}},{title:`컴포넌트 카탈로그 ③ Data — 받아온 데이터를 뿌리기`,slide:`220~221쪽`,body:`백엔드에서 전달받은 데이터 등을 표나 리스트로 가공해 뿌리는 컴포넌트입니다.`,table:{head:[`컴포넌트`,`전용 태그`,`기능`],rows:[[`Table`,`<el-table>`,`실무 점유율 1위. 정렬, 필터, 열 고정, 합계 연산이 탑재된 끝판왕 그리드 표`],[`Card`,`<el-card>`,`외곽 섀도우 펜스를 치는 만능 레이아웃 블록`],[`Pagination`,`<el-pagination>`,`데이터가 많을 때 [1] [2] [3] … [다음] 구조로 페이지를 쪼개주는 네비게이터`],[`Progress`,`<el-progress>`,`진행률이나 다운로드 게이지 바를 퍼센트(%) 애니메이션 그래프로 보여주는 바`],[`Skeleton`,`<el-skeleton>`,`실제 데이터가 오기 전, 회색빛 유령 레이아웃을 띄워 유저의 체감 속도를 높이는 버퍼`],[`Empty`,`<el-empty>`,`"조회된 검색 결과가 없습니다" 라는 안내 이미지와 문구를 자동 배치`],[`Tag / Badge`,`<el-tag> / <el-badge>`,`상태값을 색상 배지로 강조 / 알림 아이콘 우측 상단에 숫자 배지`],[`Avatar / Image`,`<el-avatar> / <el-image>`,`프로필 사진 크롭 / 로딩 실패 시 대체 이미지 및 클릭 확대(Viewer)`],[`Descriptions`,`<el-descriptions>`,`이름 : 홍길동 / 나이 : 20 구조의 정갈한 명세서 표`],[`Calendar / Countdown`,`<el-calendar> / <el-countdown>`,`월간 달력 판 / 종료 시간까지 실시간 초 단위 카운팅`],[`Timeline / Tree`,`<el-timeline> / <el-tree>`,`시간 흐름순 이력을 수직선 그래프로 / 계층형 아코디언 구조`],[`Carousel / Collapse`,`<el-carousel> / <el-collapse>`,`좌우 슬라이딩 이미지 뷰어 / 눌러서 펼쳐지는 접이식 메뉴`],[`Statistic / Result`,`<el-statistic> / <el-result>`,`숫자에 콤마를 달아 강조 / 결제 성공·실패 통짜 결과 화면`],[`Infinite Scroll / Watermark`,`v-infinite-scroll / <el-watermark>`,`스크롤 끝에서 자동 이어붙이기 / 화면 뒤에 투명 워터마크`],[`Tour`,`<el-tour>`,`신규 유저에게 "여기를 클릭하세요" 팝업 팁을 돌며 안내하는 튜토리얼`]]}},{title:`컴포넌트 카탈로그 ④ Navigation · Feedback · Others`,slide:`222~224쪽`,table:{head:[`분류`,`컴포넌트 / 태그`,`기능`],rows:[[`Navigation`,`Tabs <el-tabs>`,`한 화면 안에서 탭을 누를 때마다 하부 본문만 스위칭해 주는 전환 탭`],[`Navigation`,`Menu <el-menu>`,`사내 시스템 좌측에 들어가는 아코디언 사이드바 내비게이션 메뉴 시스템`],[`Navigation`,`Breadcrumb <el-breadcrumb>`,`현재 위치 경로를 Dashboard > Weather > Suwon 형태로 정렬해 주는 텍스트 바`],[`Navigation`,`Dropdown <el-dropdown>`,`마우스를 올리거나 클릭하면 하부 액션 메뉴 목록이 내려오는 드롭다운`],[`Navigation`,`Steps <el-steps>`,`정보입력 → 본인인증 → 가입완료 단계 진행 상태를 숫자로 시각화하는 바`],[`Navigation`,`Anchor / Backtop / Page Header`,`목차 워프 링크 / 맨 위로 이동 버튼 / 뒤로가기 + 서브 타이틀 헤더`],[`Feedback`,`Message (ElMessage)`,`화면 상단 중앙에 2초간 "저장 완료" 토스트 알림을 띄우고 사라지는 일시 알림창`],[`Feedback`,`MessageBox (ElMessageBox)`,`브라우저 구식 alert(), confirm() 을 완벽히 대체하는 세련된 최종 확인 팝업창`],[`Feedback`,`Notification (ElNotification)`,`화면 우측 구석에서 윈도우 알림처럼 상세 메시지 카드를 띄워주는 고급 알림창`],[`Feedback`,`Dialog <el-dialog>`,`화면 중앙에 어두운 딤드(Dimmed) 처리를 하고 팝업창을 띄우는 정석 모달창`],[`Feedback`,`Drawer <el-drawer>`,`스마트폰 앱 메뉴처럼 화면 우측이나 좌측에서 서랍장이 열리는 슬라이드 창`],[`Feedback`,`Loading (v-loading 디렉티브)`,`태그에 이 지시어만 적어주면 데이터 수신 중일 때 회전 스피너와 막을 쳐주는 사양`],[`Feedback`,`Alert / Popconfirm / Popover / Tooltip`,`상단 고정 알림 띠 / 버튼 위 작은 확인창 / 상세 설명 풍선 / 짧은 힌트`],[`Others`,`Affix <el-affix>`,`스크롤을 내려도 특정 메뉴나 버튼이 화면 최상단에 고정되어 따라오는 장치`],[`Others`,`Segmented <el-segmented>`,`라디오 버튼을 가로형 슬라이딩 스위치 바 탭 형태로 진화시킨 제어 컨트롤러`],[`Others`,`Animate (CSS Utility)`,`컴포넌트들이 나타나거나 사라질 때 주는 내장 애니메이션 효과 세트`]]},note:`Message · MessageBox · Notification 은 태그가 아니라 JS 함수로 부른다. import { ElMessage } from "element-plus" 처럼 가져와 ElMessage.success("저장 완료") 로 쓴다.`},{title:`실습 1 — 회원가입 폼과 검증`,slide:`225쪽`,body:`<el-card> 안에 <el-input>(이메일), <el-switch>(약관 동의), <el-button>(가입)을 배치하고, 버튼을 누를 때 값을 검사해 ElMessage 로 결과를 알립니다.`,code:{caption:`userForm 객체와 검증`,text:`const userForm = ref({
  email: '',
  agree: false,
})

const handleRegister = () => {
  if (!userForm.value.email.includes('@')) {
    ElMessage.error('올바른 이메일 형식이 아닙니다.')
    return
  }
  if (!userForm.value.agree) {
    ElMessage.warning('이용약관에 동의하셔야 합니다.')
    return
  }
  ElMessage.success('가입 신청이 정상적으로 완료되었습니다!')
}`},note:`ElMessage 는 error · warning · success · info 네 가지를 가진다. 검증에 걸리면 return 으로 즉시 빠져나가는 것이 핵심이다.`},{title:`실습 2 — 수량과 평점`,slide:`226쪽`,body:`<el-input-number> 로 구매 수량을, <el-rate> 로 별점을 입력받아 실시간 요약을 보여줍니다.`,code:{caption:`반응형 데이터`,text:`const productQuantity = ref(1)   // 수량 카운터 기본값
const productRate = ref(4)       // 별점 기본값 (별 4개)

// <el-input-number v-model="productQuantity" :min="1" :max="10" />
// <el-rate v-model="productRate" />
// 실시간 장부 요약: 선택 수량 {{ productQuantity }}개 / 내가 준 점수 {{ productRate }}점`}},{title:`실습 3 — 확인 팝업과 진행률`,slide:`227쪽`,body:`ElMessageBox.confirm 으로 삭제를 되묻고, <el-progress> 로 진행률을 애니메이션합니다. confirm 은 Promise 를 돌려주므로 .then(확인) / .catch(취소) 로 갈립니다.`,code:{caption:`파일 삭제 Confirm + 게이지 바`,text:`const confirmDelete = () => {
  ElMessageBox.confirm('서버에서 해당 파일을 영구히 삭제하시겠습니까?', '최종 경고', {
    confirmButtonText: '네, 삭제합니다',
    cancelButtonText: '취소',
    type: 'danger',
  })
    .then(() => ElMessage.success('파일이 안전하게 파쇄되었습니다.'))
    .catch(() => ElMessage.info('삭제 작업이 취소되었습니다.'))
}

const downloadProgress = ref(0)
const isDownloading = ref(false)

const startDownload = () => {
  if (isDownloading.value) return
  isDownloading.value = true
  downloadProgress.value = 0

  const interval = setInterval(() => {
    downloadProgress.value += 20
    if (downloadProgress.value >= 100) {
      clearInterval(interval)
      isDownloading.value = false
      ElMessage.success('대용량 데이터 로드가 완료되었습니다!')
    }
  }, 400)
}`},note:`취소를 누르면 reject 되어 catch 로 간다. catch 를 빼먹으면 콘솔에 처리되지 않은 Promise 경고가 뜬다.`}],checklist:[`UI 라이브러리를 쓰면 무엇이 절감되는지 세 가지로 말할 수 있다`,`Element Plus 를 국내에서 많이 쓰는 이유를 비교표로 설명할 수 있다`,`main.js 에 라이브러리와 CSS 를 등록하는 두 줄을 외우지 않고도 찾아 쓸 수 있다`,`태그로 쓰는 컴포넌트와 JS 함수로 부르는 컴포넌트(ElMessage 등)를 구분할 수 있다`,`el-form 검증과 직접 if 로 검증하는 방식의 차이를 안다`,`ElMessageBox.confirm 이 Promise 를 돌려준다는 점과 취소가 catch 로 간다는 점을 안다`],quiz:[{q:`el-button 은 나오는데 스타일이 하나도 없다. 무엇을 빠뜨렸나?`,a:`import 'element-plus/dist/index.css' 다. 컴포넌트 등록과 CSS 로드는 별개다.`},{q:`ElMessage 를 쓰려면 템플릿에 어떤 태그를 적어야 하는가?`,a:`적지 않는다. 태그가 아니라 JS 함수라서 import 해서 호출만 하면 화면에 알아서 떠오른다.`},{q:`ElMessageBox.confirm 에서 사용자가 취소를 눌렀다. 코드의 어디로 가는가?`,a:`catch 로 간다. 확인은 then, 취소는 catch 다. catch 가 없으면 처리되지 않은 Promise 경고가 뜬다.`},{q:`데이터가 오기 전 화면이 텅 비어 보인다. 어떤 컴포넌트가 어울리나?`,a:`el-skeleton 이다. 회색 유령 레이아웃을 미리 깔아 체감 속도를 높인다. 결과가 없을 때는 el-empty 를 쓴다.`}]}},Qd=e=>Zd[e]??null,$d={class:`chapter-nav`},ef={class:`nav-head`},tf={key:0,class:`nav-title`},nf=[`title`,`aria-label`],rf=[`title`,`onClick`],af={class:`chapter-no`},of={key:0,class:`chapter-info`},sf={key:1,class:`chapter-meta`},cf=[`title`],lf={key:0,class:`nav-legend`},uf={key:0},df={id:`learning-content`,class:`learning-content`},ff={class:`chapter-head`},pf={class:`eyebrow`},mf={class:`chapter-summary`},hf={class:`topic-chips`},gf={key:2,class:`challenge-stack`},_f={key:3,class:`empty-state`},vf={key:4,class:`linked-assignments`},yf={class:`step`},bf=2,xf=K({__name:`LearningView`,props:{chapterId:{type:String,default:``}},setup(e){let t=te(),n=e,r=T(()=>{let e=Number(n.chapterId);return G.some(t=>t.id===e)?e:bf}),i=e=>{t.push({name:`learning`,params:{chapterId:String(e)}}),document.getElementById(`learning-content`)?.scrollIntoView({behavior:`smooth`,block:`start`})};u(()=>n.chapterId,e=>{e||t.replace({name:`learning`,params:{chapterId:String(bf)}})},{immediate:!0});let a=y(!1),o=T(()=>G.find(e=>e.id===r.value)),c=T(()=>Qd(r.value)),l=T(()=>re(r.value)),d=T(()=>ne(r.value)),f=T(()=>G.map(e=>{let t=re(e.id),n=t.filter(e=>e.label.startsWith(`Code Challenge`));return{...e,total:n.length,live:t.filter(e=>e.practices.length>0).length,assignments:ne(e.id).length}})),p=()=>{window.scrollTo({top:0,behavior:`smooth`})};return(e,t)=>{let n=m(`RouterLink`);return s(),k(C,null,[t[6]||=M(`section`,{class:`page-intro`},[M(`p`,{class:`eyebrow`},`LEARNING & CODE CHALLENGES`),M(`h1`,null,`학습 & 코드 챌린지`),M(`p`,null,[g(` 왼쪽에서 챕터를 고르면 해당 챕터의 `),M(`strong`,null,`코드 챌린지`),g(`가 열립니다. 각 챌린지는 `),M(`strong`,null,`관련 강의 내용 → 연습 항목 → 실습 화면`),g(` 순서로 이어집니다. `)])],-1),M(`section`,{class:h([`learning-layout`,{"nav-collapsed":a.value}])},[M(`aside`,$d,[M(`div`,ef,[a.value?x(``,!0):(s(),k(`p`,tf,`학습 로드맵`)),M(`button`,{type:`button`,class:`nav-toggle`,title:a.value?`메뉴 펼치기`:`메뉴 접기`,"aria-label":a.value?`메뉴 펼치기`:`메뉴 접기`,onClick:t[0]||=e=>a.value=!a.value},A(a.value?`»`:`«`),9,nf)]),(s(!0),k(C,null,P(f.value,e=>(s(),k(`button`,{key:e.id,type:`button`,class:h([`chapter-item`,{active:e.id===r.value}]),title:a.value?`${e.title} · ${e.slides}`:``,onClick:t=>i(e.id)},[M(`span`,af,A(String(e.id).padStart(2,`0`)),1),a.value?x(``,!0):(s(),k(`span`,of,[M(`b`,null,A(e.title),1),M(`small`,null,A(e.slides),1)])),a.value?x(``,!0):(s(),k(`span`,sf,[M(`i`,{class:h([`dot`,{live:e.live,none:!e.total}]),title:e.total?`코드 챌린지 ${e.total}개${e.live?` · 실습 화면 ${e.live}개`:``}`:`코드 챌린지 없음`},A(e.total||`–`),11,cf)]))],10,rf))),128)),a.value?x(``,!0):(s(),k(`p`,lf,[...t[1]||=[g(` 숫자 = 코드 챌린지 수 \xA0·\xA0 `,-1),M(`i`,{class:`dot live`},`n`,-1),g(` 실습 화면 있음 `,-1)]])),M(`button`,{type:`button`,class:`to-top`,title:`맨 위로`,"aria-label":`맨 위로 가기`,onClick:p},[t[2]||=M(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[M(`path`,{d:`m6 15 6-6 6 6`})],-1),a.value?x(``,!0):(s(),k(`span`,uf,`맨 위로`))])]),M(`div`,df,[M(`header`,ff,[M(`div`,null,[M(`p`,pf,A(o.value.code)+` · 교안 `+A(o.value.slides),1),M(`h2`,null,A(o.value.title),1),M(`p`,mf,A(o.value.summary),1),M(`div`,hf,[(s(!0),k(C,null,P(o.value.topics,e=>(s(),k(`span`,{key:e},A(e),1))),128))])])]),o.value.orientation?(s(),v(Xd,{key:0,orientation:o.value.orientation},null,8,[`orientation`])):x(``,!0),c.value?(s(),v(Nd,{key:1,notes:c.value},null,8,[`notes`])):x(``,!0),l.value.length?(s(),k(`div`,gf,[(s(!0),k(C,null,P(l.value,e=>(s(),v(gd,{key:e.id,challenge:e},null,8,[`challenge`]))),128))])):(s(),k(`p`,_f,[...t[3]||=[g(` 교안 기준으로 이 챕터에는 코드 챌린지가 없습니다. 아래 `,-1),M(`b`,null,`제출 과제`,-1),g(`로 바로 진행합니다. `,-1)]])),d.value.length?(s(),k(`section`,vf,[t[5]||=M(`p`,{class:`section-label`},`이 챕터의 제출 과제`,-1),(s(!0),k(C,null,P(d.value,e=>(s(),v(n,{key:e.id,class:`assignment-link`,to:`/assignments`},{default:b(()=>[M(`span`,yf,A(String(e.id).padStart(2,`0`)),1),M(`span`,null,[M(`b`,null,A(e.title),1),M(`small`,null,A(e.goal),1)]),t[4]||=M(`span`,{class:`arrow`},`→`,-1)]),_:2},1024))),128))])):x(``,!0)])],2)],64)}}},[[`__scopeId`,`data-v-a046f792`]]);export{xf as default};