import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{A as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,S as d,T as f,_ as p,a as m,at as h,b as g,c as _,d as v,f as y,g as b,it as x,j as S,k as C,l as w,n as T,o as E,p as D,rt as O,s as k,t as A,v as j,w as M,x as N,y as P,z as F}from"./_plugin-vue_export-helper-CoO-E1Sm.js";import{S as I,_ as L,b as R,c as z,g as B,h as V,m as H,o as U,s as W,v as ee,x as G,y as K}from"./index-Ct6NUfYS.js";import{n as te,r as q,t as ne}from"./CodeWindow-7JPBnrGN.js";var re={class:`snippet`},ie=[`innerHTML`],ae={key:0,class:`parts`},oe={key:1,class:`returns`},se={key:2},ce=A({__name:`CodeSnippet`,props:{code:{type:String,required:!0},desc:{type:String,default:``},parts:{type:Array,default:()=>[]},returns:{type:String,default:``}},setup(e){let t=e,n=m(()=>te(t.code));return(t,r)=>(d(),w(`figure`,re,[E(`pre`,null,[E(`code`,{innerHTML:n.value},null,8,ie)]),e.parts.length?(d(),w(`dl`,ae,[(d(!0),w(T,null,M(e.parts,e=>(d(),w(T,{key:e.token},[E(`dt`,null,h(e.token),1),E(`dd`,null,h(e.role),1)],64))),128))])):_(``,!0),e.returns?(d(),w(`p`,oe,[r[0]||=E(`span`,{class:`returns-label`},`돌려주는 값`,-1),y(h(e.returns),1)])):_(``,!0),e.desc?(d(),w(`figcaption`,se,h(e.desc),1)):_(``,!0)]))}},[[`__scopeId`,`data-v-264d774b`]]),le=[`aria-expanded`],ue={key:0,class:`range`},de={class:`chevron`},fe={class:`lecture-body`},pe={key:0,class:`intro`},me=[`innerHTML`],he=[`innerHTML`],ge={key:1,class:`points`},_e=[`innerHTML`],ve={key:2,class:`syntax`},ye=A({__name:`LectureBrief`,props:{lecture:{type:Object,required:!0},studyRange:{type:String,default:``},open:{type:Boolean,default:!1}},setup(e){let t=o(e.open);return(n,r)=>(d(),w(`section`,{class:O([`lecture`,{closed:!t.value}])},[E(`button`,{class:`lecture-toggle`,type:`button`,"aria-expanded":t.value,onClick:r[0]||=e=>t.value=!t.value},[r[1]||=E(`span`,{class:`marker`},`📖`,-1),r[2]||=E(`span`,{class:`toggle-title`},`관련 강의 내용`,-1),e.studyRange?(d(),w(`span`,ue,`교안 `+h(e.studyRange),1)):_(``,!0),E(`span`,de,h(t.value?`−`:`+`),1)],8,le),s(E(`div`,fe,[e.lecture.intro?(d(),w(`p`,pe,[r[3]||=E(`span`,{class:`intro-label`},`쉽게 말하면`,-1),E(`span`,{innerHTML:F(q)(e.lecture.intro)},null,8,me)])):_(``,!0),E(`p`,{class:`lead`,innerHTML:F(q)(e.lecture.summary)},null,8,he),e.lecture.points?.length?(d(),w(`ul`,ge,[(d(!0),w(T,null,M(e.lecture.points,e=>(d(),w(`li`,{key:e,innerHTML:F(q)(e)},null,8,_e))),128))])):_(``,!0),e.lecture.syntax?.length?(d(),w(`div`,ve,[r[4]||=E(`p`,{class:`syntax-label`},`문법 정리`,-1),(d(!0),w(T,null,M(e.lecture.syntax,e=>(d(),k(ce,{key:e.code,code:e.code,desc:e.desc,parts:e.parts??[],returns:e.returns??``},null,8,[`code`,`desc`,`parts`,`returns`]))),128))])):_(``,!0)],512),[[R,t.value]])],2))}},[[`__scopeId`,`data-v-dd03eb2e`]]),be=[`aria-expanded`,`aria-label`,`title`],xe={key:0,class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`,"aria-hidden":`true`},Se={key:1,class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},Ce={class:`help-popover`,role:`note`},we={class:`help-text`},J=A({__name:`ConceptHelp`,props:{text:{type:String,required:!0}},setup(e){let t=o(!1),n=o(null),r=e=>{t.value&&n.value&&!n.value.contains(e.target)&&(t.value=!1)},i=e=>{e.key===`Escape`&&(t.value=!1)};return P(()=>{document.addEventListener(`mousedown`,r),document.addEventListener(`keydown`,i)}),j(()=>{document.removeEventListener(`mousedown`,r),document.removeEventListener(`keydown`,i)}),(r,i)=>(d(),w(`span`,{ref_key:`root`,ref:n,class:`concept-help`},[E(`button`,{class:O([`help-button`,{open:t.value}]),type:`button`,"aria-expanded":t.value,"aria-label":t.value?`개념 설명 닫기`:`개념 설명 보기`,title:t.value?`닫기`:`개념 설명 보기`,onClick:i[0]||=e=>t.value=!t.value},[t.value?(d(),w(`svg`,xe,[...i[1]||=[E(`path`,{d:`M18 6 6 18M6 6l12 12`},null,-1)]])):(d(),w(`svg`,Se,[...i[2]||=[E(`circle`,{cx:`12`,cy:`12`,r:`9.5`},null,-1),E(`path`,{d:`M12 16.5v-5`},null,-1),E(`circle`,{cx:`12`,cy:`8`,r:`1.15`,fill:`currentColor`,stroke:`none`},null,-1)]]))],10,be),s(E(`span`,Ce,[i[3]||=E(`span`,{class:`help-arrow`,"aria-hidden":`true`},null,-1),i[4]||=E(`span`,{class:`help-label`},`개념 설명`,-1),E(`span`,we,h(e.text),1)],512),[[R,t.value]])],512))}},[[`__scopeId`,`data-v-46feb191`]]),Te=e({default:()=>Re}),Ee={class:`practice-card`},De={class:`practice-area`},Oe=[`disabled`],ke={class:`practice-area`},Ae={class:`practice-area`},je={class:`input-group`},Me={class:`practice-area`},Ne={class:`practice-area`},Pe=`https://vuejs.org`,Fe=`https://vuejs.org/images/logo.png`,Ie=`user-profile-card`,Le=`https://vuejs.org/images/logo.png`,Re=A({__name:`BindPractice`,setup(e){let t=o(!0),n=o(!1),r=o(`dark-box`),i=o(`purple`),a=o(200),c={height:`80px`,color:`white`,backgroundColor:`#42b883`,transition:`all 0.3s ease`};return(e,o)=>(d(),w(`section`,Ee,[E(`div`,De,[E(`h2`,null,[o[4]||=y(` v-bind 디렉티브 기본 (축약형: 콜론) `,-1),D(J,{text:`v-bind는 href, src, disabled 같은 HTML 속성에 JavaScript 데이터를 연결합니다. 축약형은 : 입니다.`})]),E(`a`,{href:Pe,target:`_blank`},`Vue 공식 사이트`),E(`img`,{src:Fe,alt:`Vue 로고`,width:`80`}),E(`button`,{disabled:t.value},`잠기는 버튼`,8,Oe),E(`button`,{onClick:o[0]||=e=>t.value=!t.value},` 잠금 상태 변경 `)]),E(`div`,ke,[E(`h2`,null,[o[5]||=y(` v-bind 디렉티브 고급 (클래스 바인딩) `,-1),D(J,{text:`:class는 조건에 따라 CSS 클래스를 추가하거나 제거합니다. 객체와 배열 형식을 사용할 수 있습니다.`})]),E(`p`,{class:O({danger:n.value})},` 현재 경고 상태: `+h(n.value),3),E(`button`,{onClick:o[1]||=e=>n.value=!n.value},`경고 상태 변경`),E(`div`,{class:O([r.value,n.value?`red-border`:`gray-border`])},` 배열로 클래스를 조합한 상자 `,2)]),E(`div`,Ae,[E(`h2`,null,[o[6]||=y(` v-bind 디렉티브 고급 (스타일 바인딩) `,-1),D(J,{text:`:style은 색상이나 크기 같은 인라인 CSS 값을 데이터와 직접 연결합니다. 객체와 배열 형식을 지원합니다.`})]),E(`p`,{style:x({color:i.value,fontWeight:`bold`})},` 동적 스타일이 적용된 글자 `,4),E(`button`,{onClick:o[2]||=e=>i.value=i.value===`purple`?`blue`:`purple`},` 글자색 변경 `),E(`div`,je,[o[7]||=E(`label`,{for:`box-width`},`박스 너비: `,-1),s(E(`input`,{id:`box-width`,"onUpdate:modelValue":o[3]||=e=>a.value=e,type:`number`,step:`50`},null,512),[[K,a.value,void 0,{number:!0}]])]),E(`div`,{class:`size-box`,style:x([c,{width:a.value+`px`}])},h(a.value)+`px `,5)]),E(`div`,Me,[E(`h2`,null,[o[8]||=y(` Class Binding vs. Style Binding `,-1),D(J,{text:`미리 만든 디자인을 바꿀 때는 :class, 너비처럼 값 자체를 실시간으로 바꿀 때는 :style이 적합합니다.`})]),o[9]||=E(`p`,null,[y(` 미리 만든 디자인을 상태에 따라 바꿀 때는 `),E(`strong`,null,`:class`),y(`를 사용합니다. `)],-1),o[10]||=E(`p`,null,[y(` 너비나 색상 값을 실시간으로 직접 바꿀 때는 `),E(`strong`,null,`:style`),y(`을 사용합니다. `)],-1)]),E(`div`,Ne,[E(`h2`,null,[o[11]||=y(` v-bind 디렉티브 고급 (단축 문법) `,-1),D(J,{text:`HTML 속성명과 JavaScript 변수명이 같으면 :src='src'를 :src처럼 줄일 수 있는 Vue 3.4 이상의 문법입니다.`})]),E(`div`,{id:Ie},[E(`img`,{src:Le,alt:`Vue 로고`,width:`50`})])])]))}},[[`__scopeId`,`data-v-e7a49731`]]),ze=e({default:()=>Ye}),Be={class:`practice-card`},Ve={key:0},He={key:1},Ue={key:2,style:{color:`green`,"font-weight":`bold`}},We={key:3,style:{color:`blue`}},Ge={key:4,style:{color:`orange`}},Ke={key:5,style:{color:`red`,"font-weight":`bold`}},qe={class:`box`},Je={class:`practice-area comparison-area`},Ye=A({__name:`ConditionalPractice`,setup(e){let t=o(!1),n=o(85),r=o(!0);return(e,i)=>(d(),w(`section`,Be,[E(`h2`,null,[i[3]||=y(` v-if, v-else-if, v-else 디렉티브 학습 `,-1),D(J,{text:`조건에 따라 DOM 요소를 생성하거나 제거합니다. 여러 조건은 v-else-if와 v-else로 이어서 표현합니다.`})]),i[8]||=E(`h3`,null,`1) 기본 로그인 상태 스위치`,-1),t.value?(d(),w(`p`,Ve,`환영합니다! 회원 전용 화면입니다.`)):(d(),w(`p`,He,`로그인이 필요합니다. 먼저 로그인해 주세요.`)),E(`button`,{onClick:i[0]||=e=>t.value=!t.value},h(t.value?`로그아웃 하기`:`로그인 하기`),1),i[9]||=E(`br`,null,null,-1),i[10]||=E(`h3`,null,`2) 성적별 학점 등급 측정 (다중 조건문)`,-1),i[11]||=E(`label`,null,`현재 점수 입력: `,-1),s(E(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`number`,min:`0`,max:`100`,step:`5`},null,512),[[K,n.value]]),i[12]||=E(`br`,null,null,-1),n.value>=90?(d(),w(`div`,Ue,` 합격 등급: A 학점 (훌륭합니다!) `)):n.value>=80?(d(),w(`div`,We,` 합격 등급: B 학점 (양호합니다.) `)):n.value>=70?(d(),w(`div`,Ge,` 합격 등급: C 학점 (조금 더 분발하세요.) `)):(d(),w(`div`,Ke,` 합격 등급: F 학점 (재시험 대상입니다.) `)),E(`h2`,null,[i[4]||=y(` v-show 디렉티브 학습 `,-1),D(J,{text:`v-show는 요소를 DOM에 유지하면서 CSS display 속성으로 보이거나 숨깁니다.`})]),E(`button`,{onClick:i[2]||=e=>r.value=!r.value},` 화면 토글하기 `),i[13]||=E(`br`,null,null,-1),s(E(`div`,qe,[...i[5]||=[E(`p`,null,`v-show 상자`,-1),E(`p`,null,` 조건이 false가 되면 CSS display: none이 붙습니다. `,-1)]],512),[[R,r.value]]),E(`div`,Je,[E(`h2`,null,[i[6]||=y(` v-if vs. v-show `,-1),D(J,{text:`전환이 드물면 DOM을 생성·제거하는 v-if, 자주 열고 닫으면 display만 바꾸는 v-show가 적합합니다.`})]),i[7]||=E(`p`,null,` v-if는 DOM을 생성·제거하고, v-show는 DOM을 유지한 채 CSS display 속성으로 표시 여부를 바꿉니다. `,-1)])]))}},[[`__scopeId`,`data-v-e3392bd5`]]),Xe=e({default:()=>st}),Ze={class:`practice-card`},Qe={class:`practice-area`},$e={class:`practice-area`},et={class:`practice-area`},tt=[`disabled`],nt=[`disabled`],rt={class:`practice-area`},it={class:`practice-area`},at={class:`modifier-stop-area`},ot={class:`modifier-chain-area`},st=A({__name:`EventPractice`,setup(e){let t=o(0),n=o(``),r=o(!1),i=o(``),a=o(``),s=o(`transparent`),c=o(0),l=o(!1),u=o(0),f=o(0),p=o(0),m=()=>{window.alert(`함수가 성공적으로 호출되었습니다!`)},_=e=>{n.value=`창 좌표: X=${e.clientX}, Y=${e.clientY} / 문서 좌표: X=${e.pageX}, Y=${e.pageY}`},v=()=>{r.value||(window.addEventListener(`click`,_),r.value=!0,n.value=`좌표 확인 중: 브라우저 창 안을 클릭해 보세요.`)},b=()=>{window.removeEventListener(`click`,_),r.value=!1},S=(e,t)=>{i.value=`대상: ${e} / 클릭된 태그: ${t.target.tagName}`},C=e=>{let t=e.currentTarget.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.round(n*360);c.value=n*100,s.value=`hsl(${r}, 100%, 50%)`,a.value=`무지개 바 선택 / HSL 값: hsl(${r}, 100%, 50%)`},T=e=>{l.value=!0,e.currentTarget.setPointerCapture(e.pointerId),C(e)},O=e=>{l.value&&C(e)},k=e=>{l.value&&(C(e),l.value=!1,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{window.alert(`수식어 덕분에 네이버로 이동하지 않고 함수만 실행됩니다!`)},j=()=>{window.alert(`부모 박스가 클릭되었습니다!`)},M=()=>{window.alert(`1번 자식 클릭!`)},N=()=>{window.alert(`2번 자식(나만 켜짐) 클릭!`)},P=()=>{u.value++},F=()=>{f.value++},L=()=>{u.value=0,f.value=0,p.value++};return g(()=>{window.removeEventListener(`click`,_)}),(e,o)=>(d(),w(`section`,Ze,[E(`h2`,null,[o[2]||=y(` v-on 이벤트 핸들링 기초 `,-1),D(J,{text:`v-on은 클릭이나 키보드 입력 같은 이벤트를 감지해 코드를 실행합니다. 축약형은 @입니다.`})]),E(`div`,Qe,[E(`h3`,null,[o[3]||=y(` 1) 인라인 연산 처리 `,-1),D(J,{text:`Inline Handler는 count++처럼 간단한 JavaScript 표현식을 템플릿 안에서 바로 실행하는 방식입니다.`})]),E(`p`,null,`현재 카운트: `+h(t.value),1),E(`button`,{onClick:o[0]||=e=>t.value++},`1씩 증가`)]),E(`div`,$e,[E(`h3`,null,[o[4]||=y(` 2) 스크립트 함수 호출 `,-1),D(J,{text:`Method Handler는 script에 함수를 정의하고 이벤트에는 함수 이름을 연결하는 방식입니다.`})]),E(`button`,{onClick:m},`알림창 띄우기`)]),E(`div`,et,[E(`h2`,null,[o[5]||=y(` v-on 이벤트 객체($event) 활용 `,-1),D(J,{text:`함수 이름만 전달하면 이벤트 객체가 자동으로 전달됩니다. 다른 값과 이벤트 객체를 함께 넘길 때는 $event를 명시합니다.`})]),E(`p`,null,h(n.value||`좌표 확인 시작 버튼을 눌러주세요.`),1),E(`p`,null,` 현재 상태: `+h(r.value?`좌표 확인 중`:`좌표 확인 중지`),1),E(`p`,null,h(i.value||`태그: 버튼을 클릭해 보세요.`),1),E(`button`,{disabled:r.value,onClick:I(v,[`stop`])},` 좌표 확인 시작 `,8,tt),E(`button`,{disabled:!r.value,onClick:I(b,[`stop`])},` 좌표 그만 확인하기 `,8,nt),E(`button`,{onClick:o[1]||=e=>S(`회원A`,e)},` 회원 정보와 태그 확인 `)]),E(`div`,rt,[E(`h2`,null,[o[6]||=y(` 클릭한 색상 알아내기 `,-1),D(J,{text:`색상 이름은 함수 인자로 전달하고, 실제 CSS 배경색은 $event의 currentTarget에서 읽습니다.`})]),E(`div`,{class:`rainbow-bar`,role:`button`,tabindex:`0`,"aria-label":`무지개 색상 선택`,onPointerdown:T,onPointermove:O,onPointerup:k,onPointercancel:k},[E(`span`,{class:`rainbow-marker`,style:x({left:c.value+`%`})},null,4)],32),E(`p`,null,h(a.value||`무지개 바나 색상 버튼을 클릭해 보세요.`),1),E(`div`,{class:`selected-color`,style:x({backgroundColor:s.value})},null,4)]),E(`div`,it,[E(`h2`,null,[o[7]||=y(` 이벤트 수식어(Modifiers) 학습 `,-1),D(J,{text:`이벤트 수식어는 이벤트의 기본 동작이나 전파 방식을 간단한 접미어로 제어합니다.`})]),E(`h3`,null,[o[8]||=y(` 1) .prevent (기본 동작 막기) `,-1),D(J,{text:`.prevent는 preventDefault()와 같으며 링크 이동이나 폼 제출 후 새로고침 같은 기본 동작을 막습니다.`})]),E(`a`,{href:`https://www.naver.com`,onClick:I(A,[`prevent`])},` 네이버 링크 `),E(`div`,at,[E(`h3`,null,[o[9]||=y(` 2) .stop (이벤트 버블링 막기) `,-1),D(J,{text:`.stop은 stopPropagation()과 같으며 자식에서 발생한 이벤트가 부모로 올라가는 것을 막습니다.`})]),E(`div`,{class:`modifier-box`,onClick:j},[o[10]||=E(`p`,null,`부모 영역 (클릭 시 alert 발동)`,-1),E(`button`,{onClick:M},` 버블링 발생 버튼 `),E(`button`,{onClick:I(N,[`stop`])},` 버블링 차단 버튼 `)])]),E(`div`,ot,[E(`h3`,null,[o[11]||=y(` 3) .prevent.stop.once 연결하기 `,-1),D(J,{text:`첫 클릭에는 기본 동작 방지, 버블링 차단, 한 번만 실행이 함께 적용됩니다. once로 리스너가 제거된 뒤에는 나머지 수식어도 더 이상 실행되지 않습니다.`})]),E(`div`,{class:`modifier-box`,onClick:F},[E(`p`,null,`부모 클릭 횟수: `+h(f.value),1),E(`p`,null,`자식 함수 실행 횟수: `+h(u.value),1),(d(),w(`input`,{key:p.value,type:`checkbox`,onClickOnce:I(P,[`prevent`,`stop`])},null,32)),o[12]||=y(` 체크박스를 클릭해 보세요. `,-1)]),o[13]||=E(`p`,{class:`modifier-guide`},` 첫 클릭은 체크되지 않고 부모 클릭도 발생하지 않으며, 자식 함수만 한 번 실행됩니다. 두 번째 클릭부터는 once로 리스너가 제거되어 체크와 부모 클릭이 다시 동작합니다. `,-1),E(`button`,{onClick:I(L,[`stop`])},` 연결 수식어 실습 초기화 `)])])]))}},[[`__scopeId`,`data-v-dd838579`]]),ct=e({default:()=>dt}),lt={class:`practice-card`},ut={class:`practice-area lists`},dt=A({__name:`ForPractice`,setup(e){let t=o([`사과`,`바나나`,`딸기`]),n=o({name:`홍길동`,age:25,role:`개발자`}),r=o([{id:`prod-101`,name:`아이폰`},{id:`prod-102`,name:`갤럭시`}]);return(e,i)=>(d(),w(`section`,lt,[E(`h2`,null,[i[0]||=y(` v-for 디렉티브 학습 `,-1),D(J,{text:`v-for는 배열이나 객체의 항목을 반복해서 화면에 출력합니다. 각 항목에는 가능한 한 고유한 :key를 지정합니다.`})]),E(`div`,ut,[E(`div`,null,[i[1]||=E(`h3`,null,`배열 반복`,-1),E(`ul`,null,[(d(!0),w(T,null,M(t.value,(e,t)=>(d(),w(`li`,{key:e},h(t+1)+`번 과일: `+h(e),1))),128))])]),E(`div`,null,[i[2]||=E(`h3`,null,`객체 반복`,-1),E(`ul`,null,[(d(!0),w(T,null,M(n.value,(e,t,n)=>(d(),w(`li`,{key:t},` [`+h(n)+`] `+h(t)+`: `+h(e),1))),128))])]),E(`div`,null,[i[3]||=E(`h3`,null,`객체 배열 반복`,-1),E(`ul`,null,[(d(!0),w(T,null,M(r.value,e=>(d(),w(`li`,{key:e.id},h(e.name),1))),128))])])])]))}},[[`__scopeId`,`data-v-e533b99b`]]),ft=e({default:()=>vt}),pt={class:`practice-card`},mt={class:`practice-area`},ht={class:`practice-area`},gt=[`innerHTML`],_t={class:`practice-area`},Y=`이 글자는 <span style="color: red; font-weight: bold;">빨간색 굵은 글자</span>이다.`,vt=A({__name:`HtmlTextPractice`,setup(e){let t=o(``),n=o(``);function r(){n.value=t.value}return(e,i)=>(d(),w(`section`,pt,[E(`div`,mt,[E(`h2`,null,[i[1]||=y(` v-html 디렉티브 학습 `,-1),D(J,{text:`v-html은 문자열에 들어 있는 HTML 태그를 실제 HTML 요소로 해석해 출력합니다.`})]),i[2]||=E(`h3`,null,`일반 보간법 {{ }} 사용 결과:`,-1),E(`p`,null,h(Y)),i[3]||=E(`br`,null,null,-1),i[4]||=E(`h3`,null,`v-html 디렉티브 사용 결과:`,-1),E(`p`,{innerHTML:Y})]),E(`div`,ht,[E(`h2`,null,[i[5]||=y(` v-html XSS 학습 `,-1),D(J,{text:`XSS는 악성 스크립트가 다른 사용자의 브라우저에서 실행되는 공격입니다. 사용자 입력을 v-html에 직접 연결하면 위험합니다.`})]),s(E(`input`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,placeholder:`내용을 입력하세요`},null,512),[[K,t.value]]),E(`button`,{onClick:r},`확인`),E(`div`,{innerHTML:n.value},null,8,gt)]),i[7]||=E(`p`,{class:`warning`},` 위 코드는 XSS 위험을 확인하기 위한 학습용 예제입니다. 실제 서비스에서는 사용자 입력을 v-html로 직접 출력하지 않습니다. `,-1),E(`div`,_t,[E(`h2`,null,[i[6]||=y(` v-text 디렉티브 학습 `,-1),D(J,{text:`v-text는 값을 일반 텍스트로 출력합니다. HTML 태그가 포함되어 있어도 실제 태그로 해석하지 않습니다.`})]),E(`p`,{textContent:Y})])]))}},[[`__scopeId`,`data-v-860fa86e`]]),yt=e({default:()=>Rt}),bt={class:`practice-card`},xt={class:`practice-area`},St={class:`form-item`},Ct={class:`form-item`},wt=[`value`],Tt={class:`practice-area`},Et={class:`form-item`},Dt={class:`form-item`},Ot={class:`form-item`},kt={class:`option-group`},At={class:`form-item`},jt={class:`option-group`},Mt={class:`form-item`},Nt={class:`practice-area`},Pt={class:`form-item`},Ft={class:`form-item`},It={class:`form-item`},Lt={class:`form-item`},Rt=A({__name:`ModelPractice`,setup(e){let t=o(``),n=o(``),r=o(``),i=o(!1),a=o([]),c=o(``),l=o(``),u=o(``),f=o(``),p=o(``),m=o(``);return(e,o)=>(d(),w(`section`,bt,[E(`div`,xt,[E(`h2`,null,[o[14]||=y(` v-model 양방향 데이터 바인딩 `,-1),D(J,{text:`v-model은 입력 요소의 값과 Vue 데이터를 연결해 한쪽이 바뀌면 다른 쪽도 자동으로 반영되게 합니다.`})]),E(`div`,St,[o[16]||=E(`h3`,null,`1) v-model 축약 문법 (양방향)`,-1),s(E(`input`,{"onUpdate:modelValue":o[0]||=e=>t.value=e,type:`text`,placeholder:`여기에 입력하세요`},null,512),[[K,t.value]]),E(`p`,null,[o[15]||=y(` 입력된 값: `,-1),E(`strong`,null,h(t.value),1)])]),E(`div`,Ct,[o[18]||=E(`h3`,null,`2) v-model의 내부 작동 원리 (단방향 + 이벤트)`,-1),E(`input`,{value:n.value,type:`text`,placeholder:`원리 파악용 입력창`,onInput:o[1]||=e=>n.value=e.target.value},null,40,wt),E(`p`,null,[o[17]||=y(` 입력된 값: `,-1),E(`strong`,null,h(n.value),1)])])]),E(`div`,Tt,[E(`h2`,null,[o[19]||=y(` 모든 HTML Form 요소와 v-model 매핑 `,-1),D(J,{text:`Form 요소마다 v-model이 저장하는 값의 형태가 다릅니다. 단일 체크박스는 Boolean, 다중 체크박스는 Array로 시작합니다.`})]),E(`div`,Et,[o[20]||=E(`h3`,null,`1) Textarea (장문 텍스트)`,-1),s(E(`textarea`,{"onUpdate:modelValue":o[2]||=e=>r.value=e,placeholder:`의견을 남겨주세요`},null,512),[[K,r.value]]),E(`p`,null,`데이터 상태: `+h(r.value),1)]),E(`div`,Dt,[o[22]||=E(`h3`,null,`2) 단일 Checkbox (동의 여부)`,-1),E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":o[3]||=e=>i.value=e,type:`checkbox`},null,512),[[B,i.value]]),o[21]||=y(` 약관에 동의합니다. `,-1)]),E(`p`,null,`데이터 상태: `+h(i.value),1)]),E(`div`,Ot,[o[26]||=E(`h3`,null,`3) 다중 Checkbox (복수 선택 → 배열에 저장)`,-1),E(`div`,kt,[E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":o[4]||=e=>a.value=e,type:`checkbox`,value:`사과`},null,512),[[B,a.value]]),o[23]||=y(` 사과 `,-1)]),E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":o[5]||=e=>a.value=e,type:`checkbox`,value:`바나나`},null,512),[[B,a.value]]),o[24]||=y(` 바나나 `,-1)]),E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":o[6]||=e=>a.value=e,type:`checkbox`,value:`딸기`},null,512),[[B,a.value]]),o[25]||=y(` 딸기 `,-1)])]),E(`p`,null,`데이터 상태 (배열): `+h(a.value),1)]),E(`div`,At,[o[29]||=E(`h3`,null,`4) Radio (단일 선택)`,-1),E(`div`,jt,[E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":o[7]||=e=>c.value=e,type:`radio`,value:`남성`},null,512),[[L,c.value]]),o[27]||=y(` 남성 `,-1)]),E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":o[8]||=e=>c.value=e,type:`radio`,value:`여성`},null,512),[[L,c.value]]),o[28]||=y(` 여성 `,-1)])]),E(`p`,null,`데이터 상태: `+h(c.value),1)]),E(`div`,Mt,[o[31]||=E(`h3`,null,`5) Select (드롭다운 선택)`,-1),s(E(`select`,{"onUpdate:modelValue":o[9]||=e=>l.value=e},[...o[30]||=[E(`option`,{value:``},`-- 선택하세요 --`,-1),E(`option`,{value:`tesla`},`테슬라`,-1),E(`option`,{value:`hyundai`},`현대자동차`,-1),E(`option`,{value:`bmw`},`BMW`,-1)]],512),[[ee,l.value]]),E(`p`,null,`데이터 상태: `+h(l.value),1)])]),E(`div`,Nt,[E(`h2`,null,[o[32]||=y(` v-model 수식어(Modifiers) 활용 `,-1),D(J,{text:`v-model 수식어는 값의 반영 시점이나 저장 형태를 간단히 제어합니다. .lazy, .number, .trim을 단독 또는 연결해서 사용할 수 있습니다.`})]),E(`div`,Pt,[o[34]||=E(`h3`,null,`1) .lazy 수식어 (change 이벤트 시점 반영)`,-1),s(E(`input`,{"onUpdate:modelValue":o[10]||=e=>u.value=e,type:`text`,placeholder:`입력 후 Enter 또는 외부 클릭`},null,512),[[K,u.value,void 0,{lazy:!0}]]),E(`p`,null,[o[33]||=y(` 실시간이 아닌 확정된 값: `,-1),E(`strong`,null,h(u.value),1)])]),E(`div`,Ft,[o[37]||=E(`h3`,null,`2) .number 수식어 (Number 타입 자동 형변환)`,-1),s(E(`input`,{"onUpdate:modelValue":o[11]||=e=>f.value=e,type:`text`,placeholder:`나이를 입력하세요`},null,512),[[K,f.value,void 0,{number:!0}]]),E(`p`,null,[o[35]||=y(` 입력된 값: `,-1),E(`strong`,null,h(f.value),1)]),E(`p`,null,[o[36]||=y(` 데이터 타입: `,-1),E(`strong`,null,h(typeof f.value),1)])]),E(`div`,It,[o[40]||=E(`h3`,null,`3) .trim 수식어 (양끝 공백 자동 제거)`,-1),s(E(`input`,{"onUpdate:modelValue":o[12]||=e=>p.value=e,type:`text`,placeholder:`앞뒤 공백을 포함해 입력해 보세요`},null,512),[[K,p.value,void 0,{trim:!0}]]),E(`p`,null,[o[38]||=y(` 공백 제거된 값: `,-1),E(`strong`,null,`"`+h(p.value)+`"`,1)]),E(`p`,null,[o[39]||=y(` 문자열 길이: `,-1),E(`strong`,null,h(p.value.length),1)])]),E(`div`,Lt,[o[43]||=E(`h3`,null,`4) Chaining (수식어 체이닝: .trim.number)`,-1),s(E(`input`,{"onUpdate:modelValue":o[13]||=e=>m.value=e,type:`text`,placeholder:`공백과 숫자를 섞어 입력해 보세요`},null,512),[[K,m.value,void 0,{trim:!0,number:!0}]]),E(`p`,null,[o[41]||=y(` 처리된 값: `,-1),E(`strong`,null,`"`+h(m.value)+`"`,1)]),E(`p`,null,[o[42]||=y(` 데이터 타입: `,-1),E(`strong`,null,h(typeof m.value),1)])])])]))}},[[`__scopeId`,`data-v-208c25e3`]]),zt=e({default:()=>Vt}),Bt={class:`practice-card`},Vt={__name:`ReactivityPractice`,setup(e){let t=0,n=o(0),r=o(`hello vue`);return(e,i)=>(d(),w(`section`,Bt,[E(`h2`,null,[i[2]||=y(` 실습 1 — Reactivity와 보간법 `,-1),D(J,{text:`Reactivity는 데이터가 바뀌면 화면도 자동으로 갱신되는 특성이고, 보간법은 {{ }} 안의 값이나 표현식을 화면에 출력하는 문법입니다.`})]),E(`div`,null,[E(`p`,null,`일반 변수: `+h(F(t)),1),E(`button`,{onClick:i[0]||=e=>u(t)?t.value++:t++},`일반 변수 증가`),E(`p`,null,`반응형 변수: `+h(n.value),1),E(`button`,{onClick:i[1]||=e=>n.value++},`반응형 변수 증가`)]),E(`div`,null,[E(`p`,null,`원래 문자열: `+h(r.value),1),E(`p`,null,`대문자 변환: `+h(r.value.toUpperCase()),1),E(`p`,null,h(`Random number: `+Math.ceil(Math.random()*100)),1)])]))}},Ht=e({default:()=>Yt}),Ut={class:`practice-card`},Wt={class:`practice-area`},Gt={class:`practice-area`},Kt={class:`practice-area`},qt={class:`practice-area`},Jt={class:`button-group`},Yt=A({__name:`SpecialDirectivePractice`,setup(e){let t=o(`안녕하세요!`),n=o(1),r=o(`홍길동`),i=o(20);return(e,a)=>(d(),w(`section`,Ut,[E(`div`,Wt,[E(`h2`,null,[a[5]||=y(` v-pre 디렉티브 학습 `,-1),D(J,{text:`v-pre는 해당 요소와 자식의 Vue 문법을 해석하지 않고 작성된 내용을 그대로 표시합니다.`})]),E(`p`,null,`일반 출력: `+h(t.value),1),a[6]||=E(`p`,null,`v-pre 출력: {{ message }}`,-1)]),E(`div`,Gt,[E(`h2`,null,[a[7]||=y(` v-cloak 디렉티브 학습 `,-1),D(J,{text:`v-cloak은 Vue가 준비되기 전에 {{ message }} 같은 템플릿 원문이 잠깐 보이는 것을 CSS와 함께 방지합니다.`})]),E(`p`,null,`Vue가 준비되면 표시: `+h(t.value),1)]),E(`div`,Kt,[E(`h2`,null,[a[8]||=y(` v-once 디렉티브 학습 `,-1),D(J,{text:`v-once는 최초 한 번만 렌더링하고 이후 데이터가 변경되어도 해당 화면을 갱신하지 않습니다.`})]),E(`p`,null,`일반 값: `+h(n.value),1),a[0]||(l(-1,!0),(a[0]=E(`p`,null,[y(`최초 값으로 고정: `+h(n.value),1)])).cacheIndex=0,l(1),a[0]),E(`button`,{onClick:a[1]||=e=>n.value++},`숫자 증가`)]),E(`div`,qt,[E(`h2`,null,[a[9]||=y(` v-memo 디렉티브 학습 `,-1),D(J,{text:`v-memo는 지정한 의존성이 바뀔 때만 영역을 다시 렌더링합니다. 큰 목록 등 실제 성능 문제가 있는 경우에 제한적으로 사용합니다.`})]),c([r.value,i.value],()=>(d(),w(`div`,{class:`memo-box`},[E(`p`,null,`이름: `+h(r.value),1),E(`p`,null,`나이: `+h(i.value),1)])),a,2),E(`div`,Jt,[E(`button`,{onClick:a[3]||=e=>r.value=r.value===`홍길동`?`이순신`:`홍길동`},` 이름 변경 `),E(`button`,{onClick:a[4]||=e=>i.value++},`나이 증가`)])])]))}},[[`__scopeId`,`data-v-0ad0fb48`]]),Xt={type:`button`,class:`base-button`},Zt=A({__name:`BaseButton`,props:{label:{type:String,default:`기본 버튼`}},setup(e){return(t,n)=>(d(),w(`button`,Xt,h(e.label),1))}},[[`__scopeId`,`data-v-2e39ae80`]]),Qt=e({default:()=>an}),$t={class:`practice-card`},en={class:`practice-area`},tn={class:`row`},nn={class:`practice-area`},rn={class:`row`},an=A({__name:`ComponentRegistrationPractice`,setup(e){return(e,t)=>{let n=i(`GlobalBadge`);return d(),w(`section`,$t,[E(`h2`,null,[t[0]||=y(` Component 등록 — 지역 vs 전역 `,-1),D(J,{text:`지역 등록은 쓰는 파일에서 import 하는 방식이라 어디서 쓰는지 코드로 드러납니다. 전역 등록은 main.js에서 app.component()로 한 번만 해두면 어디서든 import 없이 쓸 수 있지만, 안 쓰는 컴포넌트까지 번들에 들어갑니다.`})]),E(`div`,en,[t[1]||=E(`h3`,null,`1) 지역(Local) 등록 — import 한 줄이 등록`,-1),t[2]||=E(`p`,{class:`explain`},[y(` 아래 두 버튼은 `),E(`b`,null,`같은 컴포넌트`),y(`입니다. 등록한 컴포넌트는 PascalCase와 kebab-case 두 가지로 부를 수 있습니다. `)],-1),E(`div`,tn,[D(Zt,{label:`PascalCase 호출`}),D(Zt,{label:`kebab-case 호출`})]),t[3]||=E(`pre`,{class:`code`},`import BaseButton from './BaseButton.vue'

<BaseButton />
<base-button></base-button>`,-1)]),E(`div`,nn,[t[4]||=E(`h3`,null,`2) 전역(Global) 등록 — import가 없다`,-1),t[5]||=E(`p`,{class:`explain`},[y(` 아래 배지는 이 파일에서 `),E(`b`,null,`import 하지 않았습니다.`),y(` main.js에서 한 번 등록해 둔 덕분에 바로 쓸 수 있습니다. `)],-1),E(`div`,rn,[D(n),D(n,{text:`어디서든 사용 가능`})]),t[6]||=E(`pre`,{class:`code`},`// main.js
app.component('GlobalBadge', GlobalBadge)

// 이 파일 — import 없이 바로
<GlobalBadge />`,-1)]),t[7]||=v(`<div class="practice-area" data-v-369125df><h3 data-v-369125df>3) 언제 무엇을 쓸까</h3><table class="compare" data-v-369125df><thead data-v-369125df><tr data-v-369125df><th data-v-369125df></th><th data-v-369125df>지역 등록</th><th data-v-369125df>전역 등록</th></tr></thead><tbody data-v-369125df><tr data-v-369125df><td data-v-369125df>등록 위치</td><td data-v-369125df>쓰는 파일에서 import</td><td data-v-369125df>main.js 한 곳</td></tr><tr data-v-369125df><td data-v-369125df>사용 범위</td><td data-v-369125df>그 파일 안에서만</td><td data-v-369125df>앱 전체</td></tr><tr data-v-369125df><td data-v-369125df>의존 관계</td><td data-v-369125df>코드에 드러남</td><td data-v-369125df>어디서 왔는지 안 보임</td></tr><tr data-v-369125df><td data-v-369125df>번들 크기</td><td data-v-369125df>쓰는 것만 포함</td><td data-v-369125df>안 써도 포함</td></tr><tr data-v-369125df><td data-v-369125df>적합한 경우</td><td data-v-369125df><b data-v-369125df>대부분의 컴포넌트</b></td><td data-v-369125df>앱 전반에서 반복되는 소수</td></tr></tbody></table></div>`,1)])}}},[[`__scopeId`,`data-v-369125df`]]),on={class:`counter-display`},sn=A({__name:`LifecycleChild`,setup(e){let t=o(0),n=null;return console.log(`1. [setup] 컴포넌트가 메모리에 생성되었습니다. (DOM 접근 불가능)`),P(()=>{console.log(`2. [onMounted] 화면에 완벽히 부착되었습니다! (API 호출/DOM 조작 적기)`),n=setInterval(()=>{t.value++},3e3)}),N(()=>{console.log(`3. [onUpdated] 데이터가 변경되어 화면을 새로 그렸습니다. (현재 count: ${t.value})`)}),g(()=>{clearInterval(n),console.log(`4. [onUnmounted] 컴포넌트가 소멸했습니다. 타이머 청소 완료!`)}),(e,n)=>(d(),w(T,null,[n[1]||=E(`h3`,null,`⏱️ 라이프사이클 훅 흐름 탐색기`,-1),E(`div`,on,[E(`p`,null,`실시간 타이머 카운트: `+h(t.value),1),E(`button`,{onClick:n[0]||=e=>t.value++},`수동으로 숫자 올리기`)])],64))}},[[`__scopeId`,`data-v-4c2f5f04`]]),cn=e({default:()=>dn}),ln={class:`practice-card`},un={key:1,class:`gone`},dn=A({__name:`LifecyclePractice`,setup(e){let t=o(!0);return(e,n)=>(d(),w(`section`,ln,[E(`h2`,null,[n[1]||=y(` Lifecycle Hook — 생성부터 소멸까지 `,-1),D(J,{text:`컴포넌트는 생성 → 부착(mount) → 갱신(update) → 소멸(unmount)의 생애를 거칩니다. 각 시점에 Vue가 불러주는 함수가 Lifecycle Hook입니다. 브라우저 콘솔(F12)을 열고 아래 버튼으로 컴포넌트를 껐다 켜면 네 단계가 순서대로 찍힙니다.`})]),n[2]||=E(`p`,{class:`hint`},`브라우저 콘솔(F12)을 열어두고 버튼을 눌러 보세요.`,-1),E(`button`,{class:`toggle-btn`,onClick:n[0]||=e=>t.value=!t.value},h(t.value?`🛑 실습 컴포넌트 파괴하기 (v-if="false")`:`🟢 실습 컴포넌트 다시 살리기`),1),n[3]||=E(`hr`,null,null,-1),t.value?(d(),k(sn,{key:0})):(d(),w(`p`,un,`컴포넌트가 소멸했습니다. 콘솔에서 타이머 정리 로그를 확인해 보세요.`))]))}},[[`__scopeId`,`data-v-d955f165`]]),fn={class:`child-container`},pn=A({__name:`PropsEmitsChild`,props:{parentData:{type:String,required:!0}},emits:[`update-request`],setup(e,{emit:t}){let n=t,r=()=>{n(`update-request`,`Child에서 가공한 새로운 데이터`)};return(t,n)=>(d(),w(`div`,fn,[n[1]||=E(`p`,{class:`role`},`하위 컴포넌트 (Child)`,-1),E(`p`,null,[n[0]||=y(` 수신된 Props 데이터: `,-1),E(`strong`,null,h(e.parentData),1)]),E(`button`,{onClick:r},`상위 컴포넌트로 갱신 요청 (Emit)`)]))}},[[`__scopeId`,`data-v-e98cd097`]]),mn=e({default:()=>vn}),hn={class:`practice-card`},gn={class:`parent-container`},_n={class:`state`},vn=A({__name:`PropsEmitsPractice`,setup(e){let t=o(`Parent 초기 메시지`),n=e=>{t.value=e};return(e,r)=>(d(),w(`section`,hn,[E(`h2`,null,[r[0]||=y(` Props & Emits — 부모와 자식의 대화 `,-1),D(J,{text:`데이터는 부모 → 자식 한 방향으로만 흐릅니다(Props). 자식이 값을 바꾸고 싶으면 직접 고치지 않고 부모에게 '바꿔 달라'고 신호를 보냅니다(Emits). 실제로 값을 바꾸는 주체는 언제나 데이터를 가진 부모입니다.`})]),E(`div`,gn,[r[2]||=E(`p`,{class:`role`},`상위 컴포넌트 (Parent)`,-1),E(`p`,_n,[r[1]||=y(` 현재 로컬 데이터(State): `,-1),E(`strong`,null,h(t.value),1)]),D(pn,{"parent-data":t.value,onUpdateRequest:n},null,8,[`parent-data`])])]))}},[[`__scopeId`,`data-v-cfac9a78`]]),yn={class:`node child`},bn={class:`field`},xn={class:`val`},Sn=A({__name:`FlowChild`,props:{message:{type:String,required:!0}},emits:[`reply`],setup(e,{emit:t}){let n=t;return(t,r)=>(d(),w(`div`,yn,[r[2]||=E(`p`,{class:`node-role`},`자식 (Child)`,-1),E(`p`,bn,[r[1]||=E(`span`,{class:`key`},`props.message`,-1),E(`span`,xn,h(e.message||`(빈 값)`),1)]),E(`button`,{onClick:r[0]||=e=>n(`reply`,`자식이 보낸 인사 👋`)},` 부모에게 신호 보내기 (emit) `)]))}},[[`__scopeId`,`data-v-8ceed664`]]),Cn=e({default:()=>Fn}),wn={class:`practice-card`},Tn={class:`flow`},En={class:`node parent`},Dn={class:`field`},On=[`value`],kn={class:`field`},An={class:`val`},jn={class:`arrows`},Mn={class:`log`},Nn={key:0,class:`log-empty`},Pn={class:`log-dir`},Fn=A({__name:`PropsFlowPractice`,setup(e){let t=o(`안녕하세요`),n=o(`아직 없음`),r=o(null),i=o([]),a=e=>{r.value=e,setTimeout(()=>{r.value===e&&(r.value=null)},700)},s=(e,t)=>{i.value.unshift({dir:e,text:t}),i.value.length>6&&i.value.pop()},c=e=>{t.value=e.target.value,a(`down`),s(`down`,`props.message = "${t.value}"`)},l=e=>{n.value=e,a(`up`),s(`up`,`emit('reply', "${e}")`)};return(e,a)=>(d(),w(`section`,wn,[E(`h2`,null,[a[0]||=y(` 데이터는 어느 쪽으로 흐르나 — Props ↓ / Emits ↑ `,-1),D(J,{text:`Props는 부모에서 자식으로 내려가고(↓), Emits는 자식에서 부모로 올라갑니다(↑). 반대 방향은 없습니다. 아래에서 입력하거나 버튼을 누르면 그 순간 어느 화살표가 켜지는지 확인해 보세요.`})]),E(`div`,Tn,[E(`div`,En,[a[3]||=E(`p`,{class:`node-role`},`부모 (Parent)`,-1),E(`label`,Dn,[a[1]||=E(`span`,{class:`key`},`message`,-1),E(`input`,{value:t.value,type:`text`,onInput:c},null,40,On)]),E(`p`,kn,[a[2]||=E(`span`,{class:`key`},`받은 신호`,-1),E(`span`,An,h(n.value),1)])]),E(`div`,jn,[E(`div`,{class:O([`arrow down`,{on:r.value===`down`}])},[...a[4]||=[E(`span`,{class:`head`},`↓`,-1),E(`span`,{class:`tag`},`props`,-1)]],2),E(`div`,{class:O([`arrow up`,{on:r.value===`up`}])},[...a[5]||=[E(`span`,{class:`head`},`↑`,-1),E(`span`,{class:`tag`},`emits`,-1)]],2)]),D(Sn,{message:t.value,onReply:l},null,8,[`message`])]),E(`div`,Mn,[a[6]||=E(`p`,{class:`log-title`},`주고받은 기록`,-1),i.value.length?_(``,!0):(d(),w(`p`,Nn,`입력하거나 버튼을 눌러 보세요.`)),(d(!0),w(T,null,M(i.value,(e,t)=>(d(),w(`p`,{key:t,class:O([`log-row`,e.dir])},[E(`span`,Pn,h(e.dir===`down`?`↓ 내려감`:`↑ 올라감`),1),E(`code`,null,h(e.text),1)],2))),128))])]))}},[[`__scopeId`,`data-v-f9dc9376`]]),In={class:`child`},Ln={class:`field`},Rn={class:`val`},zn=A({__name:`ReadonlyChild`,props:{count:{type:Number,required:!0}},emits:[`increase`],setup(e,{emit:t}){let n=e,r=t,i=o(``),a=()=>{let e=n.count;try{n.count=e+1}catch{}i.value=n.count===e?`실패 — 값은 그대로 ${n.count} 입니다. (콘솔 경고 확인)`:`어라, 바뀌었습니다: ${n.count}`},s=()=>{r(`increase`),i.value=`성공 — 부모가 값을 바꿔 주었습니다.`};return(t,n)=>(d(),w(`div`,In,[n[1]||=E(`p`,{class:`node-role`},`자식 (Child)`,-1),E(`p`,Ln,[n[0]||=E(`span`,{class:`key`},`props.count`,-1),E(`span`,Rn,h(e.count),1)]),E(`div`,{class:`buttons`},[E(`button`,{class:`bad`,onClick:a},`❌ 직접 바꾸기 (props.count++)`),E(`button`,{class:`good`,onClick:s},`✅ 부모에게 요청 (emit)`)]),i.value?(d(),w(`p`,{key:0,class:O([`result`,{fail:i.value.startsWith(`실패`)}])},h(i.value),3)):_(``,!0)]))}},[[`__scopeId`,`data-v-d711a9c2`]]),Bn=e({default:()=>Gn}),Vn={class:`practice-card`},Hn={class:`parent`},Un={class:`field`},Wn={class:`val`},Gn=A({__name:`PropsReadonlyPractice`,setup(e){let t=o(0),n=()=>{t.value++};return(e,r)=>(d(),w(`section`,Vn,[E(`h2`,null,[r[0]||=y(` Props는 읽기 전용 — 값의 주인은 부모다 `,-1),D(J,{text:`자식이 받은 Props를 직접 바꾸면 Vue가 막습니다. 값이 어디서 바뀌었는지 추적할 수 없게 되기 때문입니다. 자식은 '바꿔 달라'고 요청(emit)하고, 실제로 바꾸는 것은 값을 가진 부모입니다.`})]),E(`div`,Hn,[r[2]||=E(`p`,{class:`node-role`},`부모 (Parent) — 값의 주인`,-1),E(`p`,Un,[r[1]||=E(`span`,{class:`key`},`count`,-1),E(`span`,Wn,h(t.value),1)]),D(zn,{count:t.value,onIncrease:n},null,8,[`count`])]),r[3]||=E(`p`,{class:`hint`},[y(` 브라우저 콘솔(F12)을 열고 ❌ 버튼을 누르면 `),E(`code`,null,`Set operation on key "count" failed: target is readonly`),y(` 경고가 찍힙니다. `)],-1)]))}},[[`__scopeId`,`data-v-24c24705`]]),Kn={class:`named`},qn={class:`value`},Jn=A({__name:`DrillLeaf`,props:{theme:{type:String,required:!0}},setup(e){return(t,n)=>(d(),w(`div`,{class:O([`level`,e.theme])},[n[1]||=E(`p`,{class:`role`},`자식 (Child)`,-1),E(`p`,Kn,[n[0]||=E(`span`,{class:`name`},`props.theme :`,-1),E(`span`,qn,h(e.theme),1)])],2))}},[[`__scopeId`,`data-v-54c3d013`]]),Yn={class:`data`},Xn=A({__name:`DrillMid`,props:{theme:{type:String,required:!0}},setup(e){let t=e,n=o(!1);return C(()=>t.theme,()=>{n.value=!0,setTimeout(()=>n.value=!1,900)}),(t,r)=>(d(),w(`div`,{class:O([`level`,{passing:n.value}])},[r[1]||=E(`p`,{class:`role`},`부모 (Parent)`,-1),E(`p`,{class:O([`hold`,{passing:n.value}])},[r[0]||=E(`span`,{class:`name`},`props.theme :`,-1),E(`span`,Yn,h(e.theme),1)],2),r[2]||=E(`p`,{class:`desc`},`😩 쓰지도 않는 값을 받아서 아래로 넘긴다`,-1),D(Jn,{theme:e.theme},null,8,[`theme`])],2))}},[[`__scopeId`,`data-v-803c609f`]]),Zn={class:`named`},Qn={class:`value`},$n=A({__name:`InjectLeaf`,setup(e){let t=b(`globalTheme`,`(주입된 값 없음)`);return(e,n)=>(d(),w(`div`,{class:O([`level`,F(t)])},[n[1]||=E(`p`,{class:`role`},`자식 (Child)`,-1),E(`p`,Zn,[n[0]||=E(`span`,{class:`name`},`inject('globalTheme') :`,-1),E(`span`,Qn,h(F(t)),1)])],2))}},[[`__scopeId`,`data-v-79d6cd3e`]]),er={class:`level`},tr=A({__name:`InjectMid`,setup(e){return(e,t)=>(d(),w(`div`,er,[t[0]||=v(`<p class="role" data-v-c476208c>부모 (Parent)</p><p class="hold" data-v-c476208c><span class="name" data-v-c476208c>props :</span><span class="none" data-v-c476208c>없음 (0개)</span></p><p class="desc" data-v-c476208c>😌 값이 지나가는지도 모른다. 조용하다.</p>`,3),D($n)]))}},[[`__scopeId`,`data-v-c476208c`]]),nr=e({default:()=>ur}),rr={class:`practice-card`},ir={class:`root`},ar={class:`field`},or={class:`val`},sr={class:`compare`},cr={class:`col`},lr={class:`col`},ur=A({__name:`ProvideInjectPractice`,setup(e){let t=o(`dark-mode`);n(`globalTheme`,t);let r=()=>{t.value=t.value===`dark-mode`?`light-mode`:`dark-mode`};return(e,n)=>(d(),w(`section`,rr,[E(`h2`,null,[n[0]||=y(` Provide & Inject — 중간을 건너뛰고 전달하기 `,-1),D(J,{text:`계층이 깊어지면 중간 컴포넌트들이 자기는 쓰지도 않는 값을 받아서 아래로 넘기기만 하는 일이 생깁니다(Props Drilling). provide/inject는 그 중간을 건너뛰고 조상이 선언한 값을 후손이 직접 꺼내 쓰게 해 줍니다.`})]),E(`div`,ir,[n[6]||=E(`p`,{class:`root-role`},`조부모 (GrandParent) — 값의 주인`,-1),E(`p`,ar,[n[1]||=E(`span`,{class:`key`},`themeColor :`,-1),E(`span`,or,h(t.value),1),E(`button`,{onClick:r},`테마 바꾸기`)]),E(`div`,sr,[E(`div`,cr,[n[2]||=E(`p`,{class:`col-title bad`},`A · Props Drilling`,-1),n[3]||=E(`p`,{class:`col-desc`},[y(`값이 `),E(`b`,null,`중간을 통과해`),y(` 내려갑니다.`)],-1),D(Xn,{theme:t.value},null,8,[`theme`])]),E(`div`,lr,[n[4]||=E(`p`,{class:`col-title good`},`B · Provide / Inject`,-1),n[5]||=E(`p`,{class:`col-desc`},[y(`값이 `),E(`b`,null,`중간을 건너뛰고`),y(` 바로 갑니다.`)],-1),D(tr)])])]),n[7]||=E(`p`,{class:`footnote`},[y(` 버튼을 누를 때 `),E(`b`,null,`A의 중간 카드만 번쩍이는지`),y(` 보세요. 값이 그곳을 지나간다는 뜻입니다. 여기는 조부모 → 부모 → 자식 3단계라 차이가 작아 보이지만, 10단계쯤 되면 A는 중간 8곳을 전부 고쳐야 합니다. `)],-1)]))}},[[`__scopeId`,`data-v-8bf7e4c2`]]),dr={class:`sibling`},fr={class:`buttons`},pr=[`onClick`],mr=A({__name:`SiblingA`,emits:[`send`],setup(e,{emit:t}){let n=t,r=[`안녕!`,`점심 먹었어?`,`과제 다 했어?`];return(e,t)=>(d(),w(`div`,dr,[t[0]||=E(`p`,{class:`node-role`},`형제 A (보내는 쪽)`,-1),t[1]||=E(`p`,{class:`desc`},`누르면 부모에게 올려보냅니다(emit).`,-1),E(`div`,fr,[(d(),w(T,null,M(r,e=>E(`button`,{key:e,onClick:t=>n(`send`,e)},h(e),9,pr)),64))])]))}},[[`__scopeId`,`data-v-6a5f088d`]]),hr={class:`sibling`},gr=A({__name:`SiblingB`,props:{received:{type:String,default:``}},setup(e){return(t,n)=>(d(),w(`div`,hr,[n[0]||=E(`p`,{class:`node-role`},`형제 B (받는 쪽)`,-1),n[1]||=E(`p`,{class:`desc`},`부모가 내려준 값(props)만 볼 수 있습니다.`,-1),E(`p`,{class:O([`bubble`,{empty:!e.received}])},h(e.received||`아직 받은 말이 없습니다`),3)]))}},[[`__scopeId`,`data-v-c96b2e77`]]),_r=e({default:()=>Sr}),vr={class:`practice-card`},yr={class:`parent`},br={class:`route`},xr={class:`siblings`},Sr=A({__name:`SiblingTalkPractice`,setup(e){let t=o(``),n=o(0),r=e=>{n.value=1,setTimeout(()=>{t.value=e,n.value=2,setTimeout(()=>n.value=0,900)},450)};return(e,i)=>(d(),w(`section`,vr,[E(`h2`,null,[i[0]||=y(` 형제끼리는 부모를 거쳐야 한다 `,-1),D(J,{text:`같은 부모 아래 나란히 있는 컴포넌트끼리는 직접 연결된 선이 없습니다. A가 B에게 말하려면 반드시 부모에게 올렸다가(emit) 부모가 다시 B에게 내려줘야(props) 합니다. 부모를 거치는 이 경로가 눈에 보이도록 만들었습니다.`})]),E(`div`,yr,[i[2]||=E(`p`,{class:`node-role`},`부모 (Parent) — 중계자`,-1),E(`div`,br,[E(`span`,{class:O([`leg up`,{on:n.value>=1}])},`① A → 부모 \xA0emit`,2),E(`span`,{class:O([`leg down`,{on:n.value>=2}])},`② 부모 → B \xA0props`,2)]),E(`div`,xr,[D(mr,{onSend:r}),i[1]||=E(`span`,{class:`cut`,"aria-hidden":`true`},`✕ 직접 연결 없음`,-1),D(gr,{received:t.value},null,8,[`received`])])])]))}},[[`__scopeId`,`data-v-9ac8d55d`]]),Cr={class:`base-card`},wr={class:`slot-zone head`},Tr={class:`slot-zone body`},Er={class:`slot-zone foot`},X=A({__name:`SlotBaseCard`,setup(e){return(e,t)=>(d(),w(`div`,Cr,[E(`div`,wr,[f(e.$slots,`header`,{},()=>[t[0]||=E(`span`,{class:`fallback`},`header 구멍 (비어 있음)`,-1)],!0)]),E(`div`,Tr,[f(e.$slots,`default`,{},()=>[t[1]||=E(`span`,{class:`fallback`},`기본 구멍 (비어 있음)`,-1)],!0)]),E(`div`,Er,[f(e.$slots,`footer`,{},()=>[t[2]||=E(`span`,{class:`fallback`},`footer 구멍 (비어 있음)`,-1)],!0)])]))}},[[`__scopeId`,`data-v-fa66589e`]]),Dr=e({default:()=>Nr}),Or={class:`practice-card`},kr={class:`deck`},Ar={class:`case`},jr={class:`case`},Mr={class:`case`},Nr=A({__name:`SlotBaseCardPractice`,setup(e){return(e,t)=>(d(),w(`section`,Or,[E(`h2`,null,[t[0]||=y(` 더해보기 ① BaseCard 하나로 화면 3개 `,-1),D(J,{text:`아래 세 카드는 전부 같은 SlotBaseCard.vue 파일입니다. 테두리·모서리·구분선이 똑같은 이유죠. 다른 것은 부모가 header·body·footer 세 구멍에 무엇을 넣었는지뿐입니다. 껍데기를 한 번만 만들어 두고 화면마다 알맹이만 갈아 끼우는 것이 Slot의 목적입니다.`})]),t[9]||=E(`p`,{class:`explain`},[y(` 세 카드 모두 `),E(`b`,null,`같은 파일`),y(`입니다. 껍데기를 고치고 싶으면 `),E(`code`,null,`SlotBaseCard.vue`),y(` 한 곳만 고치면 세 개가 동시에 바뀝니다. `)],-1),E(`div`,kr,[E(`div`,Ar,[t[4]||=E(`p`,{class:`case-label`},`구멍 3개 모두 채움`,-1),D(X,null,{header:S(()=>[...t[1]||=[E(`b`,null,`주간 리포트`,-1)]]),footer:S(()=>[...t[2]||=[E(`button`,{type:`button`},`자세히`,-1)]]),default:S(()=>[t[3]||=E(`p`,{class:`line`},`이번 주 방문자가 12% 늘었습니다.`,-1)]),_:1})]),E(`div`,jr,[t[7]||=E(`p`,{class:`case-label`},`footer만 비움`,-1),D(X,null,{header:S(()=>[...t[5]||=[E(`b`,null,`공지`,-1)]]),default:S(()=>[t[6]||=E(`p`,{class:`line`},`금요일 18시에 배포가 있습니다.`,-1)]),_:1})]),E(`div`,Mr,[t[8]||=E(`p`,{class:`case-label`},`아무것도 안 채움`,-1),D(X)])]),t[10]||=v(`<div class="verdict" data-v-1f455799><p class="verdict-title" data-v-1f455799>그럼 Props로 하면 안 되나?</p><div class="verdict-grid" data-v-1f455799><div class="side bad" data-v-1f455799><p class="side-head" data-v-1f455799>❌ Props로 시도</p><pre data-v-1f455799><code data-v-1f455799>&lt;BaseCard title=&quot;주간 리포트&quot; /&gt;</code></pre><p class="side-why" data-v-1f455799> 제목 <b data-v-1f455799>글자</b>는 넘길 수 있습니다. 그런데 위 첫 카드의 footer에는 <b data-v-1f455799>&lt;button&gt; 태그</b>가 들어 있습니다. Props로 버튼을 넘기려면 문자열로 <code data-v-1f455799>&quot;&lt;button&gt;&quot;</code>을 보내야 하는데, 그건 화면이 아니라 그냥 글자입니다. </p></div><div class="side good" data-v-1f455799><p class="side-head" data-v-1f455799>✅ Slot이어야만 하는 이유</p><pre data-v-1f455799><code data-v-1f455799>&lt;template #footer&gt;
  &lt;button @click=&quot;...&quot;&gt;자세히&lt;/button&gt;
&lt;/template&gt;</code></pre><p class="side-why" data-v-1f455799><b data-v-1f455799>태그·이벤트·컴포넌트</b>가 통째로 들어갑니다. 넘기는 것이 값이 아니라 화면 조각이기 때문입니다. <b data-v-1f455799>버튼 하나만 들어가도 Props로는 안 됩니다.</b></p></div></div></div>`,1)]))}},[[`__scopeId`,`data-v-1f455799`]]),Pr={class:`list`},Fr={class:`fallback`},Z=A({__name:`SlotItemList`,setup(e){let t=o([{id:1,name:`노트북 거치대`,price:32e3,stock:12},{id:2,name:`기계식 키보드`,price:89e3,stock:0},{id:3,name:`USB-C 허브`,price:45e3,stock:3}]);return(e,n)=>(d(),w(`ul`,Pr,[(d(!0),w(T,null,M(t.value,t=>(d(),w(`li`,{key:t.id},[f(e.$slots,`default`,{item:t},()=>[E(`span`,Fr,h(t.name)+` (부모가 그리는 방법을 정하지 않음)`,1)],!0)]))),128))]))}},[[`__scopeId`,`data-v-5164d7f2`]]),Ir=e({default:()=>Yr}),Lr={class:`practice-card`},Rr={class:`views`},zr={class:`view`},Br={class:`plain`},Vr={class:`view`},Hr={class:`row`},Ur={class:`price`},Wr={class:`view`},Gr={class:`row`},Kr={key:0,class:`badge sold`},qr={key:1,class:`badge low`},Jr={key:2,class:`badge ok`},Yr=A({__name:`SlotListPractice`,setup(e){let t=e=>e.toLocaleString(`ko-KR`)+`원`;return(e,n)=>(d(),w(`section`,Lr,[E(`h2`,null,[n[0]||=y(` 더해보기 ② 같은 목록, 부모가 정하는 세 가지 모습 `,-1),D(J,{text:`목록 컴포넌트는 '무엇을 반복할지'(데이터와 v-for)만 책임지고, '각 항목을 어떻게 그릴지'는 부모에게 맡깁니다. 아래 세 목록은 전부 같은 SlotItemList.vue이고 데이터도 완전히 같습니다. 부모가 v-slot으로 받은 item을 다르게 그렸을 뿐입니다.`})]),n[4]||=E(`p`,{class:`explain`},[y(` 세 목록 모두 `),E(`b`,null,`같은 컴포넌트 · 같은 데이터`),y(`입니다. 데이터는 `),E(`code`,null,`SlotItemList.vue`),y(` 안에만 있고, 부모는 그리는 방법만 정합니다. `)],-1),E(`div`,Rr,[E(`div`,zr,[n[1]||=E(`p`,{class:`view-label`},`A · 이름만`,-1),D(Z,null,{default:S(({item:e})=>[E(`span`,Br,h(e.name),1)]),_:1})]),E(`div`,Vr,[n[2]||=E(`p`,{class:`view-label`},`B · 가격 강조`,-1),D(Z,null,{default:S(({item:e})=>[E(`div`,Hr,[E(`span`,null,h(e.name),1),E(`b`,Ur,h(t(e.price)),1)])]),_:1})]),E(`div`,Wr,[n[3]||=E(`p`,{class:`view-label`},`C · 재고 상태`,-1),D(Z,null,{default:S(({item:e})=>[E(`div`,Gr,[E(`span`,{class:O({out:e.stock===0})},h(e.name),3),e.stock===0?(d(),w(`span`,Kr,`품절`)):e.stock<5?(d(),w(`span`,qr,h(e.stock)+`개 남음`,1)):(d(),w(`span`,Jr,`재고 충분`))])]),_:1})])]),n[5]||=E(`p`,{class:`note`},[y(` C의 `),E(`b`,null,`품절 · 임박`),y(` 판단은 목록 컴포넌트가 아니라 `),E(`b`,null,`부모`),y(`가 했습니다. 목록은 `),E(`code`,null,`stock`),y(`이 무슨 뜻인지조차 모릅니다. 그래서 같은 목록을 쇼핑몰에도, 관리자 페이지에도 쓸 수 있습니다. `)],-1)]))}},[[`__scopeId`,`data-v-94406ce4`]]),Xr={class:`modal`,role:`dialog`,"aria-modal":`true`},Zr={class:`modal-head`},Qr={class:`modal-body`},$r={class:`modal-foot`},ei=A({__name:`SlotModal`,props:{open:{type:Boolean,default:!1}},emits:[`close`],setup(e,{emit:t}){let n=t;return(t,r)=>e.open?(d(),w(`div`,{key:0,class:`backdrop`,onClick:r[2]||=I(e=>n(`close`),[`self`])},[E(`div`,Xr,[E(`header`,Zr,[f(t.$slots,`title`,{},()=>[r[3]||=E(`b`,null,`제목 없음`,-1)],!0),E(`button`,{type:`button`,class:`close`,"aria-label":`닫기`,onClick:r[0]||=e=>n(`close`)},`✕`)]),E(`div`,Qr,[f(t.$slots,`default`,{},()=>[r[4]||=E(`p`,{class:`fallback`},`본문 구멍 (비어 있음)`,-1)],!0)]),E(`footer`,$r,[f(t.$slots,`actions`,{},()=>[E(`button`,{type:`button`,onClick:r[1]||=e=>n(`close`)},`닫기`)],!0)])])])):_(``,!0)}},[[`__scopeId`,`data-v-4b2f4b14`]]),ti=e({default:()=>si}),ni={class:`practice-card`},ri={class:`stage`},ii={class:`buttons`},ai={key:0,class:`result`},oi={key:1,class:`hint`},si=A({__name:`SlotModalPractice`,setup(e){let t=o(!1),n=o(!1),r=o(``),i=()=>{r.value=`삭제했습니다.`,t.value=!1};return(e,a)=>(d(),w(`section`,ni,[E(`h2`,null,[a[5]||=y(` 더해보기 ③ 모달 하나로 창 두 개 `,-1),D(J,{text:`모달 껍데기(어둡게 덮기·가운데 띄우기·닫기)는 어느 창이든 똑같습니다. 다른 건 제목·내용·버튼뿐이죠. 그래서 그 세 곳만 Named Slot으로 열어 두면, 모달 파일 하나로 확인창·안내창·입력창을 전부 만들 수 있습니다.`})]),a[11]||=E(`p`,{class:`explain`},[y(` 아래 두 버튼은 `),E(`b`,null,`같은 SlotModal.vue`),y(`를 엽니다. 껍데기는 같고 `),E(`code`,null,`#title`),y(` · 본문 · `),E(`code`,null,`#actions`),y(` 세 구멍만 다릅니다. `)],-1),E(`div`,ri,[E(`div`,ii,[E(`button`,{type:`button`,onClick:a[0]||=e=>t.value=!0},`삭제 확인창 열기`),E(`button`,{type:`button`,onClick:a[1]||=e=>n.value=!0},`안내창 열기`)]),r.value?(d(),w(`p`,ai,h(r.value),1)):_(``,!0),!t.value&&!n.value?(d(),w(`p`,oi,[...a[6]||=[y(` 위 버튼을 눌러 보세요. 모달은 `,-1),E(`b`,null,`이 점선 안에서만`,-1),y(` 열립니다. `,-1)]])):_(``,!0),D(ei,{open:t.value,onClose:a[3]||=e=>t.value=!1},{title:S(()=>[...a[7]||=[E(`b`,null,`정말 삭제할까요?`,-1)]]),actions:S(()=>[E(`button`,{type:`button`,onClick:a[2]||=e=>t.value=!1},`취소`),E(`button`,{type:`button`,class:`danger`,onClick:i},`삭제`)]),default:S(()=>[a[8]||=E(`p`,null,`삭제한 항목은 되돌릴 수 없습니다.`,-1)]),_:1},8,[`open`]),D(ei,{open:n.value,onClose:a[4]||=e=>n.value=!1},{title:S(()=>[...a[9]||=[E(`b`,null,`배포 안내`,-1)]]),default:S(()=>[a[10]||=E(`p`,null,`금요일 18시에 서비스가 잠시 중단됩니다.`,-1)]),_:1},8,[`open`])]),a[12]||=E(`p`,{class:`note`},[y(` 안내창은 `),E(`code`,null,`#actions`),y(`를 `),E(`b`,null,`채우지 않았습니다`),y(`. 그래서 SlotModal이 준비해 둔 기본 `),E(`b`,null,`닫기`),y(` 버튼 하나만 나옵니다. 구멍마다 기본값을 넣어 두면 부모가 매번 다 채우지 않아도 됩니다. `)],-1)]))}},[[`__scopeId`,`data-v-c7612aa2`]]),ci={},li={class:`base-card`};function ui(e,t){return d(),w(`div`,li,[f(e.$slots,`default`,{},()=>[t[0]||=E(`p`,null,`기본 콘텐츠 영역입니다.`,-1)],!0)])}var Q=A(ci,[[`render`,ui],[`__scopeId`,`data-v-187523ed`]]),di={},fi={class:`base-card`};function pi(e,t){return d(),w(`div`,fi,[E(`header`,null,[f(e.$slots,`header`,{},void 0,!0)]),E(`main`,null,[f(e.$slots,`default`,{},void 0,!0)])])}var mi=A(di,[[`render`,pi],[`__scopeId`,`data-v-f11484c5`]]),hi={class:`base-card`},gi=A({__name:`SlotScopedChild`,setup(e){let t=o(`현재 서버 상태 정상`),n=o(150);return(e,r)=>(d(),w(`div`,hi,[r[1]||=E(`p`,{class:`role`},`하위 컴포넌트 (Child)`,-1),f(e.$slots,`default`,{text:t.value,count:n.value},()=>[r[0]||=E(`p`,null,`부모가 마크업을 주입하지 않았을 때의 디폴트 화면`,-1)],!0)]))}},[[`__scopeId`,`data-v-54665344`]]),_i=e({default:()=>Ci}),vi={class:`practice-card`},yi={class:`practice-area`},bi={class:`practice-area`},xi={class:`practice-area`},Si={class:`display-panel`},Ci=A({__name:`SlotPractice`,setup(e){return(e,t)=>(d(),w(`section`,vi,[E(`h2`,null,[t[0]||=y(` Slot — 껍데기는 두고 알맹이만 갈아 끼우기 `,-1),D(J,{text:`Props가 '값'을 넘기는 것이라면 Slot은 '화면 조각(HTML)'을 통째로 넘기는 것입니다. 액자를 하나 만들어 두고 사진만 바꿔 끼우는 셈이라, 카드·모달·레이아웃처럼 껍데기는 같고 안쪽만 다른 UI에 씁니다.`})]),E(`div`,yi,[t[3]||=E(`h3`,null,`1) Default Slot — 이름 없는 구멍 하나`,-1),t[4]||=E(`p`,{class:`explain`},[y(` 같은 `),E(`b`,null,`SlotDefaultChild`),y(` 카드에 서로 다른 내용을 넣었습니다. 마지막 카드는 아무것도 안 넣어서 `),E(`b`,null,`기본값`),y(`이 나옵니다. `)],-1),D(Q,null,{default:S(()=>[...t[1]||=[E(`p`,null,`단순한 텍스트 문장을 주입합니다.`,-1)]]),_:1}),D(Q,null,{default:S(()=>[...t[2]||=[E(`h4`,{class:`warn`},`🔥 경고 상태`,-1),E(`button`,null,`확인`,-1)]]),_:1}),D(Q)]),E(`div`,bi,[t[7]||=E(`h3`,null,`2) Named Slot — 구멍에 이름을 붙여 여러 개`,-1),t[8]||=E(`p`,{class:`explain`},[E(`b`,null,`#header`),y(` 자리와 이름 없는 `),E(`b`,null,`본문`),y(` 자리에 각각 다른 내용을 넣습니다. `)],-1),D(mi,null,{header:S(()=>[...t[5]||=[E(`h4`,null,`Child 주입 제목`,-1)]]),default:S(()=>[t[6]||=E(`p`,null,` "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..." `,-1)]),_:1})]),E(`div`,xi,[t[9]||=E(`h3`,null,`3) Scoped Slot — 자식의 데이터를 부모가 받아 쓴다`,-1),t[10]||=E(`p`,{class:`explain`},[y(` 아래 값은 `),E(`b`,null,`자식이 가진 데이터`),y(`인데, 화면에 어떻게 그릴지는 `),E(`b`,null,`부모가`),y(` 정합니다. `)],-1),D(gi,null,{default:S(e=>[E(`div`,Si,[E(`p`,null,`알림 메시지: `+h(e.text),1),E(`p`,null,`접속자 수: `+h(e.count)+`명`,1)])]),_:1}),D(gi)])]))}},[[`__scopeId`,`data-v-4d263364`]]),wi=e({default:()=>Ei}),Ti={class:`practice-card`},Ei=A({__name:`ComputedCachePractice`,setup(e){let t=o(0),n=o(0),r=()=>(console.log(`❌ 일반 함수 실행됨!`),t.value*2),i=m(()=>(console.log(`✅ Computed 연산 실행됨!`),t.value*2));return(e,a)=>(d(),w(`section`,Ti,[E(`h2`,null,[a[2]||=y(` computed() 캐싱 동작 비교 `,-1),D(J,{text:`computed는 의존하는 값이 바뀔 때만 다시 계산하고 결과를 캐싱합니다. 일반 함수는 화면이 다시 그려질 때마다 무조건 재실행됩니다. dummy 버튼을 눌러 콘솔 출력 차이를 확인해 보세요.`})]),E(`p`,null,`count: `+h(t.value)+` | dummy: `+h(n.value),1),E(`button`,{onClick:a[0]||=e=>t.value++},`count 증가 (의존성 변경)`),E(`button`,{onClick:a[1]||=e=>n.value++},`dummy 증가 (무관한 변경)`),E(`p`,null,`일반 함수 결과: `+h(r()),1),E(`p`,null,`Computed 결과: `+h(i.value),1),a[3]||=E(`p`,{class:`console-hint`},[y(` 브라우저 콘솔(F12)을 열고 `),E(`b`,null,`dummy 증가`),y(`를 눌러보세요. 일반 함수만 계속 실행되고 computed는 조용합니다. `)],-1)]))}},[[`__scopeId`,`data-v-5263d813`]]),Di=e({default:()=>Mi}),Oi={class:`practice-card`},ki={class:`practice-area`},Ai={class:`monitor`},ji={class:`monitor target`},Mi=A({__name:`DeepWatchPractice`,setup(e){let t=o({name:`홍길동`,age:20}),n=o(`아직 반응 없음`),r=o(`아직 반응 없음`);return C(t,e=>{n.value=`[deep 감지] 누군가 변경됨! 현재 이름: ${e.name}, 나이: ${e.age}`},{deep:!0}),C(()=>t.value.age,(e,t)=>{r.value=`[타겟 감지] 나이가 ${t}세 ➡️ ${e}세로 변경됨!`}),(e,i)=>(d(),w(`section`,Oi,[E(`h2`,null,[i[2]||=y(` ref 객체 감시 — Deep Watch `,-1),D(J,{text:`ref에 객체를 담고 watch(user, ...)만 쓰면 속성 변경을 감지하지 못합니다. 객체 자체(참조)가 바뀐 게 아니기 때문입니다. deep: true로 내부 전체를 감시하거나, 화살표 함수로 특정 속성만 콕 집어 감시해야 합니다.`})]),E(`div`,ki,[i[3]||=E(`h3`,null,`👨‍💻 회원 데이터 조작 panel`,-1),E(`p`,null,`이름: `+h(t.value.name)+` / 나이: `+h(t.value.age)+`세`,1),E(`button`,{onClick:i[0]||=e=>t.value.name=`이순신`},`이름만 변경`),E(`button`,{onClick:i[1]||=e=>t.value.age++},`나이만 변경 (age++)`)]),E(`div`,Ai,[i[4]||=E(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) deep: true 모니터 (전체 감시)`,-1),E(`p`,null,h(n.value),1)]),E(`div`,ji,[i[5]||=E(`p`,{class:`monitor-title`},`🎯 2) 화살표 함수 모니터 (나이만 타겟 감시)`,-1),E(`p`,null,h(r.value),1)])]))}},[[`__scopeId`,`data-v-485827f2`]]),Ni=e({default:()=>Hi}),Pi={class:`practice-card`},Fi={class:`compare`},Ii={class:`side`},Li={class:`check`},Ri={class:`side highlight`},zi={class:`check`},Bi={class:`live`},Vi={key:0,class:`submitted`},Hi=A({__name:`FormStatePractice`,setup(e){let t=o(``),n=o(``),r=o(``),i=o(!1),c=()=>{t.value=``,n.value=``,r.value=``,i.value=!1},l=()=>JSON.stringify({name:t.value,email:n.value,age:r.value,agree:i.value},null,1),u={name:``,email:``,age:``,agree:!1},f=a({...u}),p=()=>{Object.assign(f,u)},m=()=>JSON.stringify(f,null,1),g=o(``),v=()=>{g.value=`[ref 방식] ${l()}`},b=()=>{g.value=`[reactive 방식] ${m()}`};return(e,a)=>(d(),w(`section`,Pi,[E(`h2`,null,[a[8]||=y(` 폼 상태 관리 — ref 여러 개 vs reactive 하나 `,-1),D(J,{text:`reactive의 장점은 '관련 있는 값을 한 덩어리로 다룰 수 있다'는 점입니다. 초기화·전송·전달을 객체 단위로 처리할 수 있어 필드가 많아질수록 코드가 짧아집니다. 대신 통째로 재할당하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다.`})]),E(`div`,Fi,[E(`div`,Ii,[a[13]||=E(`h3`,null,`A. ref 4개`,-1),E(`label`,null,[a[9]||=y(`이름 `,-1),s(E(`input`,{"onUpdate:modelValue":a[0]||=e=>t.value=e,type:`text`},null,512),[[K,t.value]])]),E(`label`,null,[a[10]||=y(`이메일 `,-1),s(E(`input`,{"onUpdate:modelValue":a[1]||=e=>n.value=e,type:`text`},null,512),[[K,n.value]])]),E(`label`,null,[a[11]||=y(`나이 `,-1),s(E(`input`,{"onUpdate:modelValue":a[2]||=e=>r.value=e,type:`number`},null,512),[[K,r.value,void 0,{number:!0}]])]),E(`label`,Li,[s(E(`input`,{"onUpdate:modelValue":a[3]||=e=>i.value=e,type:`checkbox`},null,512),[[B,i.value]]),a[12]||=y(` 약관 동의`,-1)]),E(`div`,{class:`buttons`},[E(`button`,{onClick:v},`전송`),E(`button`,{onClick:c},`초기화`)]),a[14]||=E(`pre`,{class:`code`},`name.value = ''
email.value = ''
age.value = ''
agree.value = false`,-1),a[15]||=E(`p`,{class:`note`},`필드가 늘면 이 줄도 같이 늘어난다`,-1)]),E(`div`,Ri,[a[20]||=E(`h3`,null,`B. reactive 1개`,-1),E(`label`,null,[a[16]||=y(`이름 `,-1),s(E(`input`,{"onUpdate:modelValue":a[4]||=e=>f.name=e,type:`text`},null,512),[[K,f.name]])]),E(`label`,null,[a[17]||=y(`이메일 `,-1),s(E(`input`,{"onUpdate:modelValue":a[5]||=e=>f.email=e,type:`text`},null,512),[[K,f.email]])]),E(`label`,null,[a[18]||=y(`나이 `,-1),s(E(`input`,{"onUpdate:modelValue":a[6]||=e=>f.age=e,type:`number`},null,512),[[K,f.age,void 0,{number:!0}]])]),E(`label`,zi,[s(E(`input`,{"onUpdate:modelValue":a[7]||=e=>f.agree=e,type:`checkbox`},null,512),[[B,f.agree]]),a[19]||=y(` 약관 동의`,-1)]),E(`div`,{class:`buttons`},[E(`button`,{onClick:b},`전송`),E(`button`,{onClick:p},`초기화`)]),a[21]||=E(`pre`,{class:`code`},`Object.assign(form, INITIAL_FORM)`,-1),a[22]||=E(`p`,{class:`note`},`필드가 몇 개든 한 줄로 끝난다`,-1)])]),E(`div`,Bi,[E(`div`,null,[a[23]||=E(`p`,{class:`live-label`},`A · ref 4개를 손으로 조립`,-1),E(`pre`,null,h(l()),1)]),E(`div`,null,[a[24]||=E(`p`,{class:`live-label`},`B · reactive 객체를 그대로 사용`,-1),E(`pre`,null,h(m()),1)])]),g.value?(d(),w(`p`,Vi,h(g.value),1)):_(``,!0)]))}},[[`__scopeId`,`data-v-be254916`]]),Ui=e({default:()=>qi}),Wi={class:`practice-card`},Gi={class:`practice-area`},Ki={class:`monitor`},qi=A({__name:`MultiWatchPractice`,setup(e){let t=o(`서울`),n=o(`오늘`),r=o(`대기 중...`);return C([t,n],([e,t],[n,i])=>{r.value=`[변경 감지] ${n}(${i}) ➡️ ${e}(${t})`,console.log(`🤖 [통합 API 호출] ${e}의 ${t} 날씨를 불러옵니다...`)}),(e,i)=>(d(),w(`section`,Wi,[E(`h2`,null,[i[4]||=y(` 여러 개의 변수 동시 감시 (Multi-Source Watch) `,-1),D(J,{text:`watch의 첫 번째 인자에 배열을 넘기면 여러 값을 한 번에 감시합니다. 콜백이 받는 새 값·이전 값도 배열이며, 감시 대상을 적은 순서 그대로 매핑됩니다. 둘 중 하나만 바뀌어도 콜백이 한 번 실행됩니다.`})]),E(`div`,Gi,[i[9]||=E(`h3`,null,`날씨 조건 설정`,-1),i[10]||=E(`label`,null,`도시: `,-1),s(E(`select`,{"onUpdate:modelValue":i[0]||=e=>t.value=e},[...i[5]||=[E(`option`,{value:`서울`},`서울`,-1),E(`option`,{value:`수원`},`수원`,-1),E(`option`,{value:`부산`},`부산`,-1)]],512),[[ee,t.value]]),i[11]||=E(`p`,{class:`field-label`},`날짜:`,-1),E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`radio`,value:`오늘`},null,512),[[L,n.value]]),i[6]||=y(` 오늘`,-1)]),E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":i[2]||=e=>n.value=e,type:`radio`,value:`내일`},null,512),[[L,n.value]]),i[7]||=y(` 내일`,-1)]),E(`label`,null,[s(E(`input`,{"onUpdate:modelValue":i[3]||=e=>n.value=e,type:`radio`,value:`주간예보`},null,512),[[L,n.value]]),i[8]||=y(` 주간예보`,-1)])]),E(`div`,Ki,[i[12]||=E(`h3`,null,`통합 모니터링 로그`,-1),E(`p`,null,`현재 상태: `+h(r.value),1)])]))}},[[`__scopeId`,`data-v-25d6c99a`]]),Ji=e({default:()=>$i}),Yi={class:`practice-card`},Xi={class:`practice-area`},Zi={class:`monitor auto`},Qi={class:`monitor target`},$i=A({__name:`ReactiveArrayWatchPractice`,setup(e){let t=a([`서울`,`수원`]),n=o(`대기 중...`),r=o(`대기 중...`);return C(t,(e,t)=>{n.value=`[자동 감시] 배열 변동 발생! 옛날길이인척하는:${t.length} / 현재길이:${e.length}`}),C(()=>[...t],(e,t)=>{r.value=`[스냅샷 감시] 진짜 과거 길이:${t.length} (데이터: ${t}) ➡️ 바뀐 길이:${e.length}`}),(e,i)=>(d(),w(`section`,Yi,[E(`h2`,null,[i[2]||=y(` reactive() 배열 감시 — 스냅샷 기법 `,-1),D(J,{text:`배열도 객체와 같은 함정이 있습니다. 변수명을 그대로 넘기면 이전 배열과 현재 배열이 같은 것을 가리켜 비교가 불가능합니다. 스프레드로 복사본을 만들어([...cityList]) 감시하면 과거 상태가 그대로 보존됩니다.`})]),E(`div`,Xi,[i[4]||=E(`h3`,null,`즐겨찾기 도시 목록 (reactive 배열)`,-1),E(`p`,null,[i[3]||=y(` 현재 등록된 도시: `,-1),E(`strong`,null,h(t),1)]),E(`button`,{onClick:i[0]||=e=>t.push(`부산`)},`부산 추가 (push)`),E(`button`,{onClick:i[1]||=e=>t.pop()},`최근 도시 삭제 (pop)`)]),E(`div`,Zi,[i[5]||=E(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) cityList 변수명 쌩으로 감시`,-1),E(`p`,null,h(n.value),1),i[6]||=E(`small`,null,`※ 주의: 이전 배열과 현재 배열의 내용물·길이가 똑같이 동기화되어 버립니다.`,-1)]),E(`div`,Qi,[i[7]||=E(`p`,{class:`monitor-title`},`🎯 2) () => [...cityList] 복사본 감시`,-1),E(`p`,null,h(r.value),1),i[8]||=E(`small`,null,`※ 성공: 과거 배열에 들어있던 내용물이 지워지지 않고 정상 대조됩니다.`,-1)])]))}},[[`__scopeId`,`data-v-e62c5023`]]),ea=e({default:()=>aa}),ta={class:`practice-card`},na={class:`practice-area`},ra={class:`practice-area`},ia=[`onClick`],aa=A({__name:`ReactiveStatePractice`,setup(e){let t=a({name:`이순신`,age:30}),n=()=>{t.age++},r=a([`사과`,`바나나`]),i=()=>{r.push(`과일 ${r.length+1}`)},o=e=>{r.splice(e,1)};return(e,a)=>(d(),w(`section`,ta,[E(`h2`,null,[a[0]||=y(` 반응형 상태 reactive() 특징 및 주의점 `,-1),D(J,{text:`reactive()는 객체·배열 전용이며 .value 없이 바로 접근합니다. 다만 객체를 통째로 재할당(userReactive = { ... })하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다. 그래서 실무는 ref()로 통일하는 추세입니다.`})]),E(`div`,na,[a[1]||=E(`h3`,null,`1) 객체(Object) reactive`,-1),E(`p`,null,`이름: `+h(t.name)+` / 나이: `+h(t.age)+`세`,1),E(`button`,{onClick:n},`reactive 나이 한 살 추가`)]),E(`div`,ra,[a[2]||=E(`h3`,null,`2) 배열(Array) reactive`,-1),E(`ul`,null,[(d(!0),w(T,null,M(r,(e,t)=>(d(),w(`li`,{key:t},[y(h(e)+` `,1),E(`button`,{style:{"margin-left":`8px`,padding:`2px 8px`},onClick:e=>o(t)},` 삭제 `,8,ia)]))),128))]),E(`button`,{onClick:i},`과일 항목 추가`)])]))}},[[`__scopeId`,`data-v-524a2c66`]]),oa=e({default:()=>da}),sa={class:`practice-card`},ca={class:`practice-area`},la={class:`monitor auto`},ua={class:`monitor target`},da=A({__name:`ReactiveWatchPractice`,setup(e){let t=a({productName:`노트북`,price:1e3}),n=o(`대기 중...`),r=o(`대기 중...`);return C(t,(e,t)=>{n.value=`[자동 deep] 가격 변동! 이전가격인척하는:${t.price}원 ➡️ 현재가격:${e.price}원`}),C(()=>t.price,(e,t)=>{r.value=`[타겟 조준] 가격이 진짜 올랐음! 옛날값:${t}원 ➡️ 바뀐값:${e}원`}),(e,i)=>(d(),w(`section`,sa,[E(`h2`,null,[i[1]||=y(` reactive() 데이터 watch 감시 규칙 `,-1),D(J,{text:`reactive 객체는 변수명을 그대로 넘기면 deep이 자동으로 켜져 내부 속성 변경까지 잡아냅니다. 다만 이전 값과 현재 값이 같은 객체를 가리켜서 oldVal이 쓸모없어집니다. 이전 값이 필요하면 화살표 함수로 특정 속성만 콕 집어야 합니다.`})]),E(`div`,ca,[i[2]||=E(`h3`,null,`🛒 상품 정보 관리 (reactive)`,-1),E(`p`,null,`상품명: `+h(t.productName)+` / 가격: `+h(t.price)+`원`,1),E(`button`,{onClick:i[0]||=e=>t.price+=500},`가격 500원 인상`)]),E(`div`,la,[i[3]||=E(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) state 변수 통째로 감시 (deep 자동화)`,-1),E(`p`,null,h(n.value),1),i[4]||=E(`small`,null,`※ 주의: 이전 값과 현재 값이 똑같이 찍힌다.`,-1)]),E(`div`,ua,[i[5]||=E(`p`,{class:`monitor-title`},`🎯 2) () => state.price 콕 집어 감시 (과거 추적)`,-1),E(`p`,null,h(r.value),1),i[6]||=E(`small`,null,`※ 성공: 과거의 원본 가격이 칼같이 보존된다.`,-1)])]))}},[[`__scopeId`,`data-v-50148cb5`]]),fa=e({default:()=>va}),pa={class:`practice-card`},ma={class:`practice-area`},ha={class:`log text`},ga={class:`practice-area`},_a={class:`log object`},va=A({__name:`RefArrayWatchPractice`,setup(e){let t=o([`홍길동`,`이순신`,`강감찬`]),n=o(`대기 중...`),r=o([{name:`서울`,temp:25},{name:`수원`,temp:22}]),i=o(`대기 중...`);return C(()=>t.value[0],(e,t)=>{n.value=`[방출/영입] 0번 선수 교체: ${t} ➡️ ${e}`}),C(()=>r.value[0],e=>{i.value=`[날씨 변동] 서울의 온도가 현재 ${e.temp}°C 로 변경되었습니다.`},{deep:!0}),(e,a)=>(d(),w(`section`,pa,[E(`h2`,null,[a[2]||=y(` ref 배열의 특정 인덱스 감시하기 `,-1),D(J,{text:`배열의 특정 요소만 감시하려면 화살표 함수로 콕 집어야 합니다. 다만 그 요소가 문자열이면 그대로 동작하지만, 객체라면 { deep: true }가 없으면 내부 속성 변경을 감지하지 못합니다. 가리키는 대상의 타입에 따라 규칙이 달라집니다.`})]),E(`div`,ma,[E(`h3`,null,`🏃‍♂️ 1) 문자열 배열: 현재 0번 멤버 [ `+h(t.value[0])+` ]`,1),E(`button`,{onClick:a[0]||=e=>t.value[0]=`손흥민`},`0번 멤버를 손흥민으로 교체`),E(`p`,ha,`로그: `+h(n.value),1)]),E(`div`,ga,[E(`h3`,null,`⛅ 2) 객체형 배열: 현재 `+h(r.value[0].name)+` 기온 [ `+h(r.value[0].temp)+`°C ]`,1),E(`button`,{onClick:a[1]||=e=>r.value[0].temp++},`서울 기온 1도 올리기 (temp++)`),E(`p`,_a,`로그: `+h(i.value),1)])]))}},[[`__scopeId`,`data-v-b0ee05f5`]]),ya=e({default:()=>xa}),ba={class:`practice-card`},xa={__name:`RefStatePractice`,setup(e){let t=o(0),n=o(`홍길동`),r=o(!0),i=o([`사과`,`배`]),a=o({name:`이순신`,age:30}),c=()=>{t.value++},l=()=>{a.value.name=`장보고`};return(e,o)=>(d(),w(`section`,ba,[E(`h2`,null,[o[3]||=y(` 반응형 상태 ref() 기초 `,-1),D(J,{text:`ref()는 값을 반응형 상자에 담습니다. script에서는 .value로 상자를 열어야 하고, template에서는 자동 언래핑되어 .value 없이 씁니다. 객체나 배열을 담아도 내부 속성 변경까지 감지됩니다.`})]),E(`p`,null,[o[4]||=y(` Ref 카운트: `,-1),E(`strong`,null,h(t.value),1)]),E(`p`,null,[o[5]||=y(`이름: `,-1),s(E(`input`,{"onUpdate:modelValue":o[0]||=e=>n.value=e},null,512),[[K,n.value]]),y(h(n.value),1)]),E(`p`,null,`활성 상태: `+h(r.value?`활성`:`비활성`),1),E(`p`,null,`과일 목록: `+h(i.value.join(`, `)),1),E(`p`,null,`사용자 정보: 이름 - `+h(a.value.name)+`, 나이 - `+h(a.value.age),1),E(`button`,{onClick:c},`Ref 변수 증가`),E(`button`,{onClick:o[1]||=e=>r.value=!r.value},`토글`),E(`button`,{onClick:o[2]||=e=>i.value.push(`귤`)},`과일 추가`),E(`button`,{onClick:l},`사용자 이름 변경`)]))}},Sa=e({default:()=>Fa}),Ca={class:`practice-card`},wa={class:`todo-input`},Ta=[`disabled`],Ea={class:`filter`},Da={key:0,class:`todo-list`},Oa=[`checked`,`onChange`],ka=[`onKeyup`,`onBlur`],Aa=[`onClick`],ja=[`onClick`],Ma={key:1,class:`empty`},Na={key:2,class:`empty`},Pa={key:3,class:`todo-foot`},Fa=A({__name:`TodoAdvancedPractice`,setup(e){let t=o([{id:1,title:`장보기`,done:!1},{id:2,title:`Vue 복습하기`,done:!0}]),n=o(``),r=3,i=()=>{let e=n.value.trim();e&&(t.value.push({id:r,title:e,done:!1}),r++,n.value=``)},a=e=>{e.done=!e.done},c=e=>{t.value=t.value.filter(t=>t.id!==e)},l=o(null),u=o(``),f=o(null),g=async e=>{l.value=e.id,u.value=e.title,await p(),f.value?.focus()},v=e=>{if(l.value===null)return;let t=u.value.trim();t&&(e.title=t),l.value=null},b=()=>{l.value=null},x=o(!1),S=m(()=>x.value?t.value.filter(e=>!e.done):t.value),C=m(()=>t.value.filter(e=>!e.done).length),k=m(()=>t.value.length-C.value);return(e,r)=>(d(),w(`section`,Ca,[E(`h2`,null,[r[3]||=y(` 할 일 목록 응용 2 — 잠금 · 수정 · 필터 `,-1),D(J,{text:`세 가지를 얹었습니다. ① :disabled로 빈 입력일 때 버튼 잠그기 ② 제목을 클릭해 인라인 수정(수정 중 상태를 ref로 관리) ③ computed로 필터와 집계를 옮기기. computed는 CC06에서 정식으로 배우지만 여기서 미리 써 봅니다.`})]),E(`div`,wa,[s(E(`input`,{"onUpdate:modelValue":r[0]||=e=>n.value=e,type:`text`,placeholder:`할 일을 입력하고 Enter`,onKeyup:G(i,[`enter`])},null,544),[[K,n.value]]),E(`button`,{disabled:!n.value.trim(),onClick:i},`추가`,8,Ta)]),E(`label`,Ea,[s(E(`input`,{"onUpdate:modelValue":r[1]||=e=>x.value=e,type:`checkbox`},null,512),[[B,x.value]]),r[4]||=y(` 남은 일만 보기 `,-1)]),S.value.length?(d(),w(`ul`,Da,[(d(!0),w(T,null,M(S.value,e=>(d(),w(`li`,{key:e.id,class:O({done:e.done})},[E(`input`,{type:`checkbox`,checked:e.done,onChange:t=>a(e)},null,40,Oa),l.value===e.id?s((d(),w(`input`,{key:0,ref_for:!0,ref:e=>e&&(f.value=e),"onUpdate:modelValue":r[2]||=e=>u.value=e,class:`edit-input`,onKeyup:[G(t=>v(e),[`enter`]),G(b,[`esc`])],onBlur:t=>v(e)},null,40,ka)),[[K,u.value]]):(d(),w(`span`,{key:1,class:`title`,title:`클릭하면 제목을 고칠 수 있습니다`,onClick:t=>g(e)},h(e.title),9,Aa)),E(`button`,{onClick:t=>c(e.id)},`삭제`,8,ja)],2))),128))])):t.value.length?(d(),w(`p`,Ma,` 🎉 남은 일이 없습니다. 필터를 끄면 완료한 항목을 볼 수 있어요. `)):(d(),w(`p`,Na,`아직 할 일이 없습니다. 위에서 하나 추가해 보세요.`)),t.value.length?(d(),w(`div`,Pa,[E(`span`,null,[r[5]||=y(` 전체 `,-1),E(`b`,null,h(t.value.length),1),r[6]||=y(` · 남은 일 `,-1),E(`b`,null,h(C.value),1),r[7]||=y(` · 완료 `,-1),E(`b`,null,h(k.value),1)]),r[8]||=E(`span`,{class:`hint`},`제목을 클릭 → 수정 · Enter 확정 · Esc 취소`,-1)])):_(``,!0)]))}},[[`__scopeId`,`data-v-f5c37e4e`]]),Ia=e({default:()=>Ga}),La={class:`practice-card`},Ra={class:`todo-input`},za={key:0,class:`todo-list`},Ba=[`checked`,`onChange`],Va={class:`title`},Ha=[`onClick`],Ua={key:1,class:`empty`},Wa={key:2,class:`todo-foot`},Ga=A({__name:`TodoListPractice`,setup(e){let t=o([]),n=o(``),r=1,i=()=>{let e=n.value.trim();e&&(t.value.push({id:r,title:e,done:!1}),r++,n.value=``)},a=e=>{e.done=!e.done},c=e=>{t.value=t.value.filter(t=>t.id!==e)},l=()=>{t.value=t.value.filter(e=>!e.done)};return(e,r)=>(d(),w(`section`,La,[E(`h2`,null,[r[1]||=y(` 할 일 목록 — ref 배열 응용 `,-1),D(J,{text:`ref([])에 객체를 담아 목록을 관리하는 연습입니다. 추가는 push, 삭제는 filter로 새 배열을 만들어 교체합니다. 배열 안 객체의 속성(done)을 직접 바꿔도 ref가 변화를 감지해 화면이 갱신됩니다.`})]),E(`div`,Ra,[s(E(`input`,{"onUpdate:modelValue":r[0]||=e=>n.value=e,type:`text`,placeholder:`할 일을 입력하고 Enter`,onKeyup:G(i,[`enter`])},null,544),[[K,n.value]]),E(`button`,{onClick:i},`추가`)]),t.value.length?(d(),w(`ul`,za,[(d(!0),w(T,null,M(t.value,e=>(d(),w(`li`,{key:e.id,class:O({done:e.done})},[E(`input`,{type:`checkbox`,checked:e.done,onChange:t=>a(e)},null,40,Ba),E(`span`,Va,h(e.title),1),E(`button`,{class:`remove`,onClick:t=>c(e.id)},`삭제`,8,Ha)],2))),128))])):(d(),w(`p`,Ua,`아직 할 일이 없습니다. 위에서 하나 추가해 보세요.`)),t.value.length?(d(),w(`div`,Wa,[E(`span`,null,[r[2]||=y(` 전체 `,-1),E(`b`,null,h(t.value.length),1),r[3]||=y(` · 남은 일 `,-1),E(`b`,null,h(t.value.filter(e=>!e.done).length),1),r[4]||=y(` · 완료 `,-1),E(`b`,null,h(t.value.filter(e=>e.done).length),1)]),E(`button`,{onClick:l},`완료한 항목 지우기`)])):_(``,!0)]))}},[[`__scopeId`,`data-v-db2e98ce`]]),Ka=e({default:()=>Xa}),qa={class:`practice-card`},Ja={class:`practice-area`},Ya={class:`monitor`},Xa=A({__name:`WatchEffectPractice`,setup(e){let n=o(`홍길동`),r=o(20),i=o(`대기 중...`);return t(()=>{i.value=`[자동 감지] 이름: ${n.value} / 나이: ${r.value}세`,console.log(`🤖 watchEffect가 내부 변수 변경을 감지하여 실행되었습니다.`)}),(e,t)=>(d(),w(`section`,qa,[E(`h2`,null,[t[2]||=y(` 자동 감시자 watchEffect() `,-1),D(J,{text:`watchEffect는 감시 대상을 적지 않습니다. 함수 안에서 읽은 반응형 값이 자동으로 의존성이 됩니다. 그리고 등록되는 즉시 한 번 실행되는 점이 watch와 가장 큰 차이입니다. 대신 이전 값은 받을 수 없습니다.`})]),E(`div`,Ja,[E(`p`,null,`이름: `+h(n.value)+` / 나이: `+h(r.value)+`세`,1),E(`button`,{onClick:t[0]||=e=>n.value=`이순신`},`이름을 '이순신'으로 변경`),E(`button`,{onClick:t[1]||=e=>r.value++},`나이 한 살 추가 (age++)`)]),E(`div`,Ya,[t[3]||=E(`h3`,null,`👁️‍🗨️ watchEffect 자동 모니터링 시스템`,-1),E(`p`,null,h(i.value),1),t[4]||=E(`small`,null,` ※ 새로고침하자마자 버튼을 안 눌러도 로그가 이미 찍혀있는 특징을 주목하세요! `,-1)])]))}},[[`__scopeId`,`data-v-542ebb87`]]),Za=e({default:()=>to}),Qa={class:`practice-card`},$a={class:`practice-area`},eo={class:`monitor`},to=A({__name:`WatchPractice`,setup(e){let t=o(`서울`),n=o(`아직 감시 시스템이 작동하지 않았습니다.`);return C(t,(e,t)=>{n.value=`📍 감시자 발동! [${t}]에서 [${e}]로 변경됨.`,console.log(`🤖 [서버 요청 완료] 기상청 서버에서 ${e}의 날씨 API를 다시 조회합니다...`)}),(e,r)=>(d(),w(`section`,Qa,[E(`h2`,null,[r[3]||=y(` 감시자 watch()의 원리와 실무 활용 `,-1),D(J,{text:`watch()는 값이 바뀌는 순간 무언가를 실행하는 감시자입니다. 콜백은 (새 값, 이전 값)을 받습니다. 화면에 보여줄 값은 computed로, API 호출·로그 같은 부수 효과는 watch로 처리합니다.`})]),E(`div`,$a,[r[4]||=E(`h3`,null,`🏙️ 지역 선택 제어판`,-1),E(`p`,null,`현재 선택된 도시: `+h(t.value),1),E(`button`,{onClick:r[0]||=e=>t.value=`서울`},`서울 선택`),E(`button`,{onClick:r[1]||=e=>t.value=`수원`},`수원 선택`),E(`button`,{onClick:r[2]||=e=>t.value=`부산`},`부산 선택`)]),E(`div`,eo,[r[5]||=E(`h3`,null,`👁️‍🗨️ 파수꾼(watch) 모니터링 시스템`,-1),E(`p`,null,h(n.value),1),r[6]||=E(`small`,null,`(버튼을 누른 후 브라우저 콘솔창 F12를 확인해 보세요)`,-1)])]))}},[[`__scopeId`,`data-v-f25592fe`]]),no=e({default:()=>bo}),ro={class:`practice-card`},io={class:`area`},ao={class:`routes`},oo={class:`path`},so={class:`name`},co={key:0,class:`hit`},lo={class:`area`},uo={class:`links`},fo={class:`area`},po={class:`view-name`},mo={class:`view-body`},ho={key:0,class:`params`},go={class:`area`},_o={class:`ab`},vo={class:`tick`},yo={class:`ab-buttons`},bo=A({__name:`RouterBasicPractice`,setup(e){let t=[{path:`/`,name:`home`,label:`홈`,body:`오늘의 날씨 목록이 여기 나옵니다.`},{path:`/about`,name:`about`,label:`소개`,body:`이 앱이 무엇인지 설명하는 화면입니다.`},{path:`/weather/:cityId`,name:`detail`,label:`도시 상세`,body:`한 도시의 시간별 날씨를 봅니다.`},{path:`/:pathMatch(.*)*`,name:`not-found`,label:`없는 페이지`,body:`404`}],n=o(`/`),r=o(`/`),i=m(()=>{for(let e of t){if(e.path===`/:pathMatch(.*)*`)continue;let t=`^`+e.path.replace(/:([\w]+)/g,`(?<$1>[^/]+)`)+`$`,r=n.value.match(new RegExp(t));if(r)return{route:e,params:r.groups??{}}}return{route:t[t.length-1],params:{}}}),a=e=>{n.value=e,r.value=e},c=o(0),l=o(!1),u=()=>{l.value=!0,c.value=0,setTimeout(()=>l.value=!1,1400)};return(e,n)=>(d(),w(`section`,ro,[E(`h2`,null,[n[9]||=y(` 주소 → 화면, 라우터가 하는 일 `,-1),D(J,{text:`라우터는 주소표(routes)를 들고 있다가, 주소가 바뀌면 거기 맞는 컴포넌트를 골라 RouterView 자리에 끼워 넣습니다. 아래는 그 과정을 그대로 흉내 낸 미니 라우터입니다. 진짜 vue-router를 이 안에 또 띄우면 이 사이트의 주소까지 바뀌므로 원리만 재현했습니다.`})]),E(`div`,io,[n[11]||=E(`h3`,null,`① 주소표 (routes)`,-1),E(`ul`,ao,[(d(),w(T,null,M(t,e=>E(`li`,{key:e.path,class:O({on:e===i.value.route})},[E(`code`,oo,h(e.path),1),n[10]||=E(`span`,{class:`arrow`,"aria-hidden":`true`},`→`,-1),E(`span`,so,h(e.label),1),e===i.value.route?(d(),w(`span`,co,`지금 이것`)):_(``,!0)],2)),64))])]),E(`div`,lo,[n[14]||=E(`h3`,null,`② 주소창`,-1),E(`form`,{class:`bar`,onSubmit:n[1]||=I(e=>a(r.value),[`prevent`])},[n[12]||=E(`span`,{class:`origin`},`myapp.com`,-1),s(E(`input`,{"onUpdate:modelValue":n[0]||=e=>r.value=e,spellcheck:`false`,"aria-label":`주소`,placeholder:`/about`},null,512),[[K,r.value]]),n[13]||=E(`button`,{type:`submit`,"aria-label":`이동`},[E(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[E(`path`,{d:`M5 12h13M13 6l6 6-6 6`})])],-1)],32),E(`p`,uo,[E(`button`,{type:`button`,class:`link`,onClick:n[2]||=e=>a(`/`)},`/`),E(`button`,{type:`button`,class:`link`,onClick:n[3]||=e=>a(`/about`)},`/about`),E(`button`,{type:`button`,class:`link`,onClick:n[4]||=e=>a(`/weather/seoul`)},`/weather/seoul`),E(`button`,{type:`button`,class:`link`,onClick:n[5]||=e=>a(`/weather/busan`)},`/weather/busan`),E(`button`,{type:`button`,class:`link`,onClick:n[6]||=e=>a(`/hello`)},`/hello (없는 주소)`)])]),E(`div`,fo,[n[16]||=E(`h3`,null,`③ <RouterView /> — 화면이 갈아끼워지는 자리`,-1),E(`div`,{class:O([`viewport`,{missing:i.value.route.name===`not-found`}])},[E(`p`,po,h(i.value.route.label),1),E(`p`,mo,h(i.value.route.body),1),Object.keys(i.value.params).length?(d(),w(`p`,ho,[n[15]||=E(`span`,{class:`tag`},`route.params`,-1),E(`code`,null,h(i.value.params),1)])):_(``,!0)],2)]),E(`div`,go,[n[18]||=E(`h3`,null,`④ 왜 <a href> 를 쓰면 안 되나`,-1),n[19]||=E(`p`,{class:`explain`},[y(` 아래 숫자는 화면이 기억하고 있는 값입니다(`),E(`code`,null,`ref`),y(`). 두 버튼을 각각 눌러 보세요. `)],-1),E(`div`,_o,[E(`div`,{class:O([`counter`,{wiped:l.value}])},[E(`span`,vo,h(c.value),1),E(`button`,{type:`button`,onClick:n[7]||=e=>c.value++},`+1 올리기`)],2),E(`div`,yo,[E(`button`,{type:`button`,class:`good`,onClick:n[8]||=e=>a(`/about`)},` RouterLink 로 이동 `),E(`button`,{type:`button`,class:`bad`,onClick:u},` <a href> 로 이동 `)])]),E(`p`,{class:O([`verdict`,{show:l.value}])},[...n[17]||=[y(` 새로고침이 일어나 `,-1),E(`b`,null,`기억하던 값이 0으로 초기화`,-1),y(`되었습니다. `,-1)]],2)])]))}},[[`__scopeId`,`data-v-9a2bf107`]]),xo=e({default:()=>Lo}),So={class:`practice-card`},Co={class:`area`},wo={class:`area`},To={class:`links`},Eo=[`onClick`],Do={key:0,class:`lock`,"aria-hidden":`true`},Oo={class:`area`},ko={class:`view-name`},Ao={class:`view-path`},jo={class:`toggle`},Mo={class:`area`},No={key:0,class:`logs`},Po={class:`hook`},Fo={class:`text`},Io={key:1,class:`hint`},Lo=A({__name:`RouterGuardPractice`,setup(e){let t=[{path:`/`,name:`Home`,label:`홈`,meta:{}},{path:`/about`,name:`About`,label:`소개`,meta:{}},{path:`/mypage`,name:`MyPage`,label:`마이페이지`,meta:{isAuth:!0}},{path:`/admin`,name:`Admin`,label:`관리자`,meta:{isAuth:!0}},{path:`/login`,name:`Login`,label:`로그인`,meta:{}}],n=o(!1),r=o(!0),i=o(`/`),a=o([]),c=m(()=>t.find(e=>e.path===i.value)??null),l=m(()=>c.value?{kind:`page`,route:c.value}:r.value?{kind:`not-found`}:{kind:`blank`}),u=(e,t,n=`plain`)=>a.value.unshift({id:a.value.length,hook:e,text:t,tone:n}),f=e=>{a.value=[];let r=t.find(t=>t.path===e)?.meta??{};if(u(`beforeEach`,`to: ${e} · from: ${i.value}`,`start`),r.isAuth&&!n.value){u(`beforeEach`,`to.meta.isAuth 인데 로그인 안 됨 → next('/login')`,`block`),i.value=`/login`,u(`afterEach`,`로그인 화면으로 이동 완료`,`done`);return}u(`beforeEach`,`next() — 통과 허가`,`pass`),u(`beforeResolve`,`컴포넌트까지 다 준비됨 (마지막 확인 지점)`,`plain`),i.value=e,u(`afterEach`,`화면 전환 완료 (분석 로그 보내기 좋은 곳)`,`done`)},p=()=>{n.value=!0,u(`상태`,`로그인했습니다. 이제 잠긴 주소도 들어갈 수 있습니다.`,`pass`)},g=()=>{n.value=!1,u(`상태`,`로그아웃했습니다.`,`block`)};return(e,i)=>(d(),w(`section`,So,[E(`h2`,null,[i[3]||=y(` Navigation Guard — 페이지 입장 전 검문소 `,-1),D(J,{text:`특정 주소로 들어가기 직전에 가로채서 권한을 검사하거나 다른 곳으로 보내는 장치입니다. 로그인해야 볼 수 있는 마이페이지·관리자 화면에 씁니다. beforeEach(시작 직전) → beforeResolve(컴포넌트까지 준비된 뒤) → afterEach(전환 완료 후) 순서로 불립니다.`})]),E(`div`,Co,[E(`div`,{class:O([`auth`,{on:n.value}])},[i[4]||=E(`span`,{class:`dot`,"aria-hidden":`true`},null,-1),E(`b`,null,h(n.value?`로그인 상태`:`비로그인 상태`),1),E(`code`,null,`isAuthenticated = `+h(n.value),1),E(`button`,{type:`button`,onClick:i[0]||=e=>n.value?g():p()},h(n.value?`로그아웃`:`로그인하기`),1)],2)]),E(`div`,wo,[i[5]||=E(`h3`,null,`어디로 갈까요`,-1),E(`div`,To,[(d(),w(T,null,M(t,e=>E(`button`,{key:e.path,type:`button`,class:O([`link`,{locked:e.meta.isAuth}]),onClick:t=>f(e.path)},[y(h(e.path)+` `,1),e.meta.isAuth?(d(),w(`span`,Do,`🔒`)):_(``,!0)],10,Eo)),64)),E(`button`,{type:`button`,class:`link ghost`,onClick:i[1]||=e=>f(`/unknown-page`)},` /unknown-page `)])]),E(`div`,Oo,[i[11]||=E(`h3`,null,`<RouterView />`,-1),E(`div`,{class:O([`viewport`,l.value.kind])},[l.value.kind===`page`?(d(),w(T,{key:0},[E(`p`,ko,h(l.value.route.label),1),E(`code`,Ao,h(l.value.route.path),1)],64)):l.value.kind===`not-found`?(d(),w(T,{key:1},[i[6]||=E(`p`,{class:`view-name`},`404 — 그런 페이지는 없습니다`,-1),i[7]||=E(`code`,{class:`view-path`},`Catch-all Route 가 받아 냈습니다`,-1)],64)):(d(),w(T,{key:2},[i[8]||=E(`p`,{class:`view-name blank`},`(하얗게 비어 있음)`,-1),i[9]||=E(`code`,{class:`view-path`},`매칭되는 컴포넌트가 없어 아무것도 그려지지 않았습니다`,-1)],64))],2),E(`label`,jo,[s(E(`input`,{"onUpdate:modelValue":i[2]||=e=>r.value=e,type:`checkbox`},null,512),[[B,r.value]]),i[10]||=E(`span`,null,[y(` Catch-all Route 사용 — `),E(`code`,null,`{ path: '/:pathMatch(.*)*', component: NotFoundView }`)],-1)])]),E(`div`,Mo,[i[12]||=E(`h3`,null,[y(`검문 기록 `),E(`small`,null,`최근 이동이 위에`)],-1),a.value.length?(d(),w(`ul`,No,[(d(!0),w(T,null,M(a.value,e=>(d(),w(`li`,{key:e.id,class:O(e.tone)},[E(`span`,Po,h(e.hook),1),E(`span`,Fo,h(e.text),1)],2))),128))])):(d(),w(`p`,Io,`위에서 주소를 눌러 보세요. 검문 순서가 여기 쌓입니다.`))])]))}},[[`__scopeId`,`data-v-0450e31b`]]),Ro=e({default:()=>rs}),zo={class:`practice-card`},Bo={class:`area`},Vo={class:`urlbar`},Ho={class:`url`},Uo={class:`area`},Wo={class:`route`},Go={key:0},Ko={key:0},qo={class:`area`},Jo={class:`methods`},Yo=[`onClick`],Xo={class:`area`},Zo={class:`stack`},Qo={class:`no`},$o={key:0,class:`here-tag`},es={class:`nav`},ts=[`disabled`],ns=[`disabled`],rs=A({__name:`RouterNavigatePractice`,setup(e){let t=o([`/`]),n=o(0),r=m(()=>t.value[n.value]),i=m(()=>{let[e,t=``]=r.value.split(`?`),n={};for(let e of t.split(`&`).filter(Boolean)){let[t,r=``]=e.split(`=`);n[decodeURIComponent(t)]=decodeURIComponent(r)}for(let t of[{name:`WeatherHome`,path:`/`},{name:`WeatherDetail`,path:`/weather/:cityId`},{name:`UserPosts`,path:`/user/:userId/posts`},{name:`Search`,path:`/search`}]){let r=RegExp(`^`+t.path.replace(/:(\w+)/g,`(?<$1>[^/]+)`)+`$`),i=e.match(r);if(i)return{name:t.name,path:e,params:i.groups??{},query:n}}return{name:`NotFound`,path:e,params:{},query:n}}),a=e=>{t.value=[...t.value.slice(0,n.value+1),e],n.value=t.value.length-1},s=e=>{t.value=[...t.value.slice(0,n.value),e],n.value=t.value.length-1},c=e=>{let r=n.value+e;r>=0&&r<t.value.length&&(n.value=r)},l=m(()=>n.value>0),u=m(()=>n.value<t.value.length-1),f=[{label:`router.push('/about')`,run:()=>a(`/about`),note:`가장 단순한 형태`},{label:`router.push({ name: 'WeatherDetail', params: { cityId: 'seoul' } })`,run:()=>a(`/weather/seoul`),note:`이름 + 동적 세그먼트`},{label:`router.push({ name: 'Search', query: { q: 'vue' } })`,run:()=>a(`/search?q=vue`),note:`물음표 뒤 쿼리`},{label:`router.push({ name: 'UserPosts', params: { userId: 42 } })`,run:()=>a(`/user/42/posts`),note:`중간 위치 동적 세그먼트`},{label:`router.replace('/login')`,run:()=>s(`/login`),note:`기록을 덮어쓴다 — 뒤로가기로 못 돌아온다`,danger:!0}];return(e,a)=>(d(),w(`section`,zo,[E(`h2`,null,[a[2]||=y(` useRoute() 로 읽고, useRouter() 로 옮긴다 `,-1),D(J,{text:`이름이 한 글자 차이라 헷갈립니다. useRoute()는 '지금 이 페이지의 정보'를 읽는 것이고(읽기 전용), useRouter()는 '페이지를 옮기는 리모컨'입니다(동작). 아래에서 버튼을 눌러 주소를 옮기면 위쪽 route 객체가 어떻게 바뀌는지 보세요.`})]),E(`div`,Bo,[E(`div`,Vo,[a[3]||=E(`span`,{class:`origin`},`myapp.com`,-1),E(`span`,Ho,h(r.value),1)])]),E(`div`,Uo,[a[8]||=E(`h3`,null,[y(`useRoute() — 지금 페이지의 정보 `),E(`span`,{class:`tag read`},`읽기`)],-1),E(`dl`,Wo,[a[4]||=E(`dt`,null,`route.path`,-1),E(`dd`,null,[E(`code`,null,h(i.value.path),1)]),a[5]||=E(`dt`,null,`route.name`,-1),E(`dd`,null,[E(`code`,null,h(i.value.name),1)]),a[6]||=E(`dt`,null,`route.params`,-1),E(`dd`,{class:O({empty:!Object.keys(i.value.params).length})},[E(`code`,null,h(i.value.params),1),Object.keys(i.value.params).length?_(``,!0):(d(),w(`small`,Go,`주소에 :빈칸이 없는 경로`))],2),a[7]||=E(`dt`,null,`route.query`,-1),E(`dd`,{class:O({empty:!Object.keys(i.value.query).length})},[E(`code`,null,h(i.value.query),1),Object.keys(i.value.query).length?_(``,!0):(d(),w(`small`,Ko,`물음표 뒤가 비어 있음`))],2)])]),E(`div`,qo,[a[9]||=E(`h3`,null,[y(`useRouter() — 페이지를 옮기는 리모컨 `),E(`span`,{class:`tag write`},`동작`)],-1),E(`ul`,Jo,[(d(),w(T,null,M(f,e=>E(`li`,{key:e.label},[E(`button`,{type:`button`,class:O({danger:e.danger}),onClick:t=>e.run()},[E(`code`,null,h(e.label),1),E(`small`,null,h(e.note),1)],10,Yo)])),64))])]),E(`div`,Xo,[a[10]||=E(`h3`,null,`히스토리 스택 — push 와 replace 의 차이`,-1),E(`ol`,Zo,[(d(!0),w(T,null,M(t.value,(e,t)=>(d(),w(`li`,{key:t,class:O({here:t===n.value})},[E(`span`,Qo,h(t),1),E(`code`,null,h(e),1),t===n.value?(d(),w(`span`,$o,`지금`)):_(``,!0)],2))),128))]),E(`div`,es,[E(`button`,{type:`button`,disabled:!l.value,onClick:a[0]||=e=>c(-1)},`← router.go(-1)`,8,ts),E(`button`,{type:`button`,disabled:!u.value,onClick:a[1]||=e=>c(1)},`router.go(1) →`,8,ns)]),a[11]||=E(`p`,{class:`note`},[E(`b`,null,`push`),y(` 는 기록을 `),E(`b`,null,`쌓고`),y(`, `),E(`b`,null,`replace`),y(` 는 지금 기록을 `),E(`b`,null,`덮어씁니다`),y(`. 그래서 로그인 후 이동에는 replace를 씁니다 — 뒤로가기로 로그인 화면에 다시 돌아가면 곤란하니까요. `)],-1)])]))}},[[`__scopeId`,`data-v-1eefdd55`]]),is=`<script setup>
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
`,as=`<script setup>
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
`,os=`<script setup>
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
`,ss=`<script setup>
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
`,cs=`<script setup>
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
`,ls=`<script setup>
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
`,us=`<script setup>
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
`,ds=`<script setup>
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
`,fs=`<script setup>
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
`,ps=`<script setup>
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
`,ms=`<script setup>
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
`,hs=`<script setup>
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
`,gs=`<script setup>
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
`,_s=`<script setup>
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
`,vs=`<script setup>
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
`,ys=`<script setup>
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
`,bs=`<script setup>
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
`,xs=`<script setup>
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
`,Ss=`<script setup>
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
`,Cs=`<script setup>
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
`,ws=`<script setup>
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
`,Ts=`<script setup>
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
`,Es=`<script setup>
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
`,Ds=`<script setup>
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
`,Os=`<script setup>
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
`,ks=`<script setup>
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
`,As=`<script setup>
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
`,js=`<script setup>
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
`,Ms=`<script setup>
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
`,Ns=`<script setup>
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
`,Ps=`<script setup>
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
`,Fs=`<script setup>
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
`,Is=`<script setup>
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
`,Ls=`<script setup>
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
`,Rs=`<script setup>
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
`,zs=Object.assign({"./basic/BindPractice.vue":Te,"./basic/ConditionalPractice.vue":ze,"./basic/EventPractice.vue":Xe,"./basic/ForPractice.vue":ct,"./basic/HtmlTextPractice.vue":ft,"./basic/ModelPractice.vue":yt,"./basic/ReactivityPractice.vue":zt,"./basic/SpecialDirectivePractice.vue":Ht,"./component/ComponentRegistrationPractice.vue":Qt,"./component/LifecyclePractice.vue":cn,"./component/PropsEmitsPractice.vue":mn,"./component/PropsFlowPractice.vue":Cn,"./component/PropsReadonlyPractice.vue":Bn,"./component/ProvideInjectPractice.vue":nr,"./component/SiblingTalkPractice.vue":_r,"./component/SlotBaseCardPractice.vue":Dr,"./component/SlotListPractice.vue":Ir,"./component/SlotModalPractice.vue":ti,"./component/SlotPractice.vue":_i,"./composition/ComputedCachePractice.vue":wi,"./composition/DeepWatchPractice.vue":Di,"./composition/FormStatePractice.vue":Ni,"./composition/MultiWatchPractice.vue":Ui,"./composition/ReactiveArrayWatchPractice.vue":Ji,"./composition/ReactiveStatePractice.vue":ea,"./composition/ReactiveWatchPractice.vue":oa,"./composition/RefArrayWatchPractice.vue":fa,"./composition/RefStatePractice.vue":ya,"./composition/TodoAdvancedPractice.vue":Sa,"./composition/TodoListPractice.vue":Ia,"./composition/WatchEffectPractice.vue":Ka,"./composition/WatchPractice.vue":Za,"./router/RouterBasicPractice.vue":no,"./router/RouterGuardPractice.vue":xo,"./router/RouterNavigatePractice.vue":Ro}),$=e=>e.split(`/`).pop().replace(`.vue`,``),Bs=Object.fromEntries(Object.entries(zs).map(([e,t])=>[$(e),t.default])),Vs=Object.fromEntries(Object.entries(zs).map(([e])=>[$(e),e.replace(`./`,`src/components/practices/`)]));Object.keys(Bs).sort();var Hs=e=>Bs[e]??null,Us=e=>Vs[e]??``,Ws=Object.fromEntries(Object.entries(Object.assign({"./basic/BindPractice.vue":is,"./basic/ConditionalPractice.vue":as,"./basic/EventPractice.vue":os,"./basic/ForPractice.vue":ss,"./basic/HtmlTextPractice.vue":cs,"./basic/ModelPractice.vue":ls,"./basic/ReactivityPractice.vue":us,"./basic/SpecialDirectivePractice.vue":ds,"./component/ComponentRegistrationPractice.vue":fs,"./component/LifecyclePractice.vue":ps,"./component/PropsEmitsPractice.vue":ms,"./component/PropsFlowPractice.vue":hs,"./component/PropsReadonlyPractice.vue":gs,"./component/ProvideInjectPractice.vue":_s,"./component/SiblingTalkPractice.vue":vs,"./component/SlotBaseCardPractice.vue":ys,"./component/SlotListPractice.vue":bs,"./component/SlotModalPractice.vue":xs,"./component/SlotPractice.vue":Ss,"./composition/ComputedCachePractice.vue":Cs,"./composition/DeepWatchPractice.vue":ws,"./composition/FormStatePractice.vue":Ts,"./composition/MultiWatchPractice.vue":Es,"./composition/ReactiveArrayWatchPractice.vue":Ds,"./composition/ReactiveStatePractice.vue":Os,"./composition/ReactiveWatchPractice.vue":ks,"./composition/RefArrayWatchPractice.vue":As,"./composition/RefStatePractice.vue":js,"./composition/TodoAdvancedPractice.vue":Ms,"./composition/TodoListPractice.vue":Ns,"./composition/WatchEffectPractice.vue":Ps,"./composition/WatchPractice.vue":Fs,"./router/RouterBasicPractice.vue":Is,"./router/RouterGuardPractice.vue":Ls,"./router/RouterNavigatePractice.vue":Rs})).map(([e,t])=>[$(e),t])),Gs=e=>Ws[e]??``,Ks=[`id`],qs=[`aria-expanded`,`title`],Js={class:`card-chevron`,"aria-hidden":`true`},Ys={class:`head-text`},Xs={class:`label`},Zs={class:`slide`},Qs={key:0,class:`goal`},$s={key:1,class:`card-summary`},ec={class:`head-badges`},tc={key:0,class:`badge live`},nc={key:1,class:`tasks`},rc={key:2,class:`fold pitfalls`},ic={class:`fold-body`},ac={key:0,class:`compare`},oc={key:0,class:`bad`},sc={key:1,class:`good`},cc={class:`why`},lc={key:3,class:`practice-note`},uc={class:`practice-head`},dc=[`aria-expanded`,`title`],fc={class:`chevron`,"aria-hidden":`true`},pc={key:0,class:`count`},mc={class:`practice-hint`},hc={class:`practice-main`},gc={key:0,class:`practice-mounts`},_c={class:`slot-tools`},vc=[`onClick`],yc=[`onClick`],bc={key:1,class:`practice-empty`},xc={key:2,class:`practice-missing`},Sc=[`aria-expanded`,`title`],Cc={class:`side-chevron`,"aria-hidden":`true`},wc={class:`side-body`},Tc={key:0,class:`side-block`},Ec={class:`side-heading`},Dc=[`onClick`],Oc={class:`guide`},kc=[`innerHTML`],Ac={class:`guide-see`},jc=[`innerHTML`],Mc={key:0,class:`guide-why`},Nc=[`innerHTML`],Pc={key:1,class:`group-extras`},Fc={key:1,class:`side-block fold extensions`},Ic={class:`fold-body`},Lc={key:5,class:`fold extensions`},Rc={class:`fold-body`},zc=A({__name:`ChallengeCard`,props:{challenge:{type:Object,required:!0}},setup(e){let t=e,n=m(()=>t.challenge.practices.map(e=>({name:e,component:Hs(e)})).filter(e=>e.component)),i=m(()=>t.challenge.practices.filter(e=>!Hs(e))),c=m(()=>n.value.length>0),l=m(()=>t.challenge.practiceGuide??[]),u=m(()=>{let e=[];for(let t of l.value)t.practice||e.length===0?e.push({label:t.practice??null,steps:[t]}):e[e.length-1].steps.push(t);return e.map(e=>({...e,extras:g.value.filter(t=>typeof t==`object`&&t.practice===e.label)}))}),f=m(()=>{let e=new Set(u.value.map(e=>e.label));return g.value.filter(t=>typeof t==`string`||!e.has(t.practice))}),p=e=>typeof e==`string`?e:e.text,g=m(()=>t.challenge.extensions??[]),v=m(()=>c.value&&(l.value.length>0||g.value.length>0)),b=o(!0),x=o(!0),S=o(!1),C=m(()=>{let e=[];return t.challenge.tasks?.length&&e.push(`연습 ${t.challenge.tasks.length}`),t.challenge.pitfalls?.length&&e.push(`주의 ${t.challenge.pitfalls.length}`),n.value.length&&e.push(`실습 ${n.value.length}`),e.join(` · `)}),D=m(()=>!v.value&&g.value.length>0),A=a({}),j=e=>`${e}-${A[e]??0}`,N=e=>{A[e]=(A[e]??0)+1},P=()=>{n.value.forEach(e=>N(e.name))},L=o(null),z=e=>{L.value=e},B=o(null),V=e=>e.replace(/\s+/g,` `).trim(),H=(e,t)=>{let n=B.value;if(!n)return;let r=[...n.querySelectorAll(`.practice-slot`)];if(!r.length)return;let i=r.find(t=>{let n=t.querySelector(`h2`);return n&&V(n.textContent)===V(e??``)})??r[t]??r[0];i.scrollIntoView({behavior:`smooth`,block:`center`}),i.classList.add(`is-target`),setTimeout(()=>i.classList.remove(`is-target`),1400)};return(t,a)=>(d(),w(`article`,{id:`challenge-${e.challenge.id}`,ref_key:`cardEl`,ref:B,class:O([`challenge`,[e.challenge.status,{collapsed:!S.value}]])},[E(`header`,{class:`challenge-head`,role:`button`,tabindex:`0`,"aria-expanded":S.value,title:S.value?`이 챌린지 접기`:`이 챌린지 펼치기`,onClick:a[0]||=e=>S.value=!S.value,onKeydown:[a[1]||=G(I(e=>S.value=!S.value,[`prevent`]),[`enter`]),a[2]||=G(I(e=>S.value=!S.value,[`prevent`]),[`space`])]},[E(`span`,Js,h(S.value?`▾`:`▸`),1),E(`div`,Ys,[E(`p`,Xs,[y(h(e.challenge.label)+` `,1),E(`span`,Zs,`교안 `+h(e.challenge.slidePage),1)]),E(`h3`,null,h(e.challenge.title),1),S.value?(d(),w(`p`,Qs,h(e.challenge.goal),1)):C.value?(d(),w(`p`,$s,h(C.value),1)):_(``,!0)]),E(`div`,ec,[E(`span`,{class:O([`badge`,e.challenge.status])},h(e.challenge.status===`done`?`학습 완료`:`진행 예정`),3),c.value?(d(),w(`span`,tc,` 실습 `+h(n.value.length)+`개 `,1)):_(``,!0)])],40,qs),S.value?(d(),w(T,{key:0},[e.challenge.lecture?(d(),k(ye,{key:0,lecture:e.challenge.lecture,"study-range":e.challenge.studyRange},null,8,[`lecture`,`study-range`])):_(``,!0),e.challenge.tasks?.length?(d(),w(`section`,nc,[a[6]||=E(`p`,{class:`section-label`},`✎ 연습 항목`,-1),E(`ul`,null,[(d(!0),w(T,null,M(e.challenge.tasks,e=>(d(),w(`li`,{key:e},h(e),1))),128))])])):_(``,!0),e.challenge.pitfalls?.length?(d(),w(`details`,rc,[E(`summary`,null,[a[7]||=E(`span`,{"aria-hidden":`true`},`⚠`,-1),a[8]||=y(` 조심할 점 `,-1),E(`b`,null,h(e.challenge.pitfalls.length),1)]),E(`div`,ic,[(d(!0),w(T,null,M(e.challenge.pitfalls,(e,t)=>(d(),w(`div`,{key:t,class:`pitfall`},[e.bad||e.good?(d(),w(`div`,ac,[e.bad?(d(),w(`p`,oc,[a[9]||=E(`span`,null,`❌`,-1),E(`code`,null,h(e.bad),1)])):_(``,!0),e.good?(d(),w(`p`,sc,[a[10]||=E(`span`,null,`✅`,-1),E(`code`,null,h(e.good),1)])):_(``,!0)])):_(``,!0),E(`p`,cc,h(e.why),1)]))),128))])])):_(``,!0),!c.value&&e.challenge.practiceNote?(d(),w(`p`,lc,[a[11]||=E(`span`,{"aria-hidden":`true`},`✓`,-1),y(` `+h(e.challenge.practiceNote),1)])):(d(),w(`section`,{key:4,class:O([`practice-zone`,{closed:!x.value}])},[E(`header`,uc,[E(`button`,{type:`button`,class:`practice-toggle`,"aria-expanded":x.value,title:x.value?`실습 화면 접기`:`실습 화면 펼치기`,onClick:a[3]||=e=>x.value=!x.value},[E(`span`,fc,h(x.value?`▾`:`▸`),1),a[12]||=E(`span`,{class:`practice-mark`,"aria-hidden":`true`},`🖥`,-1),a[13]||=E(`span`,{class:`practice-title`},`실습 화면`,-1),c.value?(d(),w(`span`,pc,h(n.value.length),1)):_(``,!0)],8,dc),E(`span`,mc,h(x.value?`직접 눌러보며 동작을 확인하세요`:`접어 둠 · 제목을 눌러 펼치기`),1),n.value.length>1&&x.value?(d(),w(`button`,{key:0,type:`button`,class:`reset-button reset-all`,"aria-label":`실습 전체 초기화`,title:`이 챌린지의 실습을 모두 처음 상태로 되돌립니다`,onClick:P},[...a[14]||=[E(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[E(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),E(`path`,{d:`M20 4v4.5h-4.5`})],-1)]])):_(``,!0)]),s(E(`div`,{class:O([`practice-body`,{"has-guide":v.value,"side-closed":v.value&&!b.value}])},[E(`div`,hc,[c.value?(d(),w(`div`,gc,[(d(!0),w(T,null,M(n.value,e=>(d(),w(`div`,{key:e.name,class:`practice-slot`},[E(`div`,_c,[E(`button`,{type:`button`,class:`icon-button`,"aria-label":`소스 코드 보기`,title:`소스 코드를 새 창으로 엽니다`,onClick:t=>z(e.name)},[...a[15]||=[E(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[E(`path`,{d:`M9 7 4 12l5 5M15 7l5 5-5 5`})],-1)]],8,vc),E(`button`,{type:`button`,class:`icon-button`,"aria-label":`이 실습 초기화`,title:`이 실습만 처음 상태로 되돌립니다 (페이지 새로고침 없음)`,onClick:t=>N(e.name)},[...a[16]||=[E(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[E(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),E(`path`,{d:`M20 4v4.5h-4.5`})],-1)]],8,yc)]),(d(),k(r(e.component),{key:j(e.name)}))]))),128))])):(d(),w(`p`,bc,[...a[17]||=[y(` 아직 이 챌린지에 연결된 실습 화면이 없습니다. `,-1),E(`code`,null,`src/components/practices/`,-1),y(` 에 컴포넌트를 추가하고 `,-1),E(`code`,null,`curriculum.js`,-1),y(` 의 `,-1),E(`code`,null,`practices`,-1),y(` 에 이름을 넣으면 여기에 나타납니다. `,-1)]])),i.value.length?(d(),w(`p`,xc,` ⚠ 파일을 찾지 못한 실습: `+h(i.value.join(`, `)),1)):_(``,!0)]),v.value?(d(),w(`aside`,{key:0,class:O([`guide-side`,{collapsed:!b.value}])},[E(`button`,{type:`button`,class:`side-toggle`,"aria-expanded":b.value,title:b.value?`접어서 실습 화면 넓히기`:`실습 도우미 펼치기`,onClick:a[4]||=e=>b.value=!b.value},[a[18]||=E(`span`,{class:`side-toggle-label`},[E(`span`,{"aria-hidden":`true`},`✓`),y(` 실습 도우미 `)],-1),E(`span`,Cc,h(b.value?`›`:`‹`),1)],8,Sc),s(E(`div`,wc,[l.value.length?(d(),w(`section`,Tc,[E(`p`,Ec,[a[19]||=y(` 확인 가이드 `,-1),E(`b`,null,h(l.value.length),1)]),(d(!0),w(T,null,M(u.value,(e,t)=>(d(),w(`div`,{key:t,class:`guide-group`},[e.label?(d(),w(`button`,{key:0,type:`button`,class:`guide-chip`,title:`이 실습으로 이동합니다`,onClick:n=>H(e.label,t)},[y(h(e.label)+` `,1),a[20]||=E(`span`,{class:`jump`,"aria-hidden":`true`},`↓`,-1)],8,Dc)):_(``,!0),E(`ol`,Oc,[(d(!0),w(T,null,M(e.steps,(e,t)=>(d(),w(`li`,{key:t},[E(`p`,{class:`guide-do`,innerHTML:F(q)(e.do)},null,8,kc),E(`p`,Ac,[a[21]||=E(`b`,null,`확인`,-1),a[22]||=y(),E(`span`,{innerHTML:F(q)(e.see)},null,8,jc)]),e.why?(d(),w(`p`,Mc,[a[23]||=E(`b`,null,`왜`,-1),a[24]||=y(),E(`span`,{innerHTML:F(q)(e.why)},null,8,Nc)])):_(``,!0)]))),128))]),e.extras.length?(d(),w(`div`,Pc,[a[25]||=E(`p`,{class:`extras-label`},[E(`span`,{"aria-hidden":`true`},`🚀`),y(` 더 해보기`)],-1),E(`ul`,null,[(d(!0),w(T,null,M(e.extras,(e,t)=>(d(),w(`li`,{key:t},h(p(e)),1))),128))])])):_(``,!0)]))),128))])):_(``,!0),f.value.length?(d(),w(`details`,Fc,[E(`summary`,null,[a[26]||=E(`span`,{"aria-hidden":`true`},`🚀`,-1),a[27]||=y(` 더 해보기 (전체) `,-1),E(`b`,null,h(f.value.length),1)]),E(`div`,Ic,[E(`ul`,null,[(d(!0),w(T,null,M(f.value,(e,t)=>(d(),w(`li`,{key:t},h(p(e)),1))),128))])])])):_(``,!0)],512),[[R,b.value]])],2)):_(``,!0)],2),[[R,x.value]])],2)),D.value?(d(),w(`details`,Lc,[E(`summary`,null,[a[28]||=E(`span`,{"aria-hidden":`true`},`🚀`,-1),a[29]||=y(` 더 해보기 (심화 응용) `,-1),E(`b`,null,h(g.value.length),1)]),E(`div`,Rc,[E(`ul`,null,[(d(!0),w(T,null,M(g.value,(e,t)=>(d(),w(`li`,{key:t},h(p(e)),1))),128))])])])):_(``,!0)],64)):_(``,!0),L.value?(d(),k(ne,{key:1,path:F(Us)(L.value),code:F(Gs)(L.value),onClose:a[5]||=e=>L.value=null},null,8,[`path`,`code`])):_(``,!0)],10,Ks))}},[[`__scopeId`,`data-v-6e637b45`]]),Bc=[`aria-expanded`],Vc={class:`chevron`,"aria-hidden":`true`},Hc={class:`orientation-body`},Uc={class:`rule`},Wc={class:`lead`},Gc={class:`cargo`},Kc={class:`name`},qc={class:`payload`},Jc={"aria-hidden":`true`},Yc=[`innerHTML`],Xc={class:`priority`},Zc={class:`p-name`},Qc={class:`p-weight`},$c={class:`p-when`},el={class:`keep`},tl=[`innerHTML`],nl=A({__name:`ChapterOrientation`,props:{orientation:{type:Object,required:!0}},setup(e){let t=o(!0);return(n,r)=>(d(),w(`section`,{class:O([`orientation`,{closed:!t.value}])},[E(`button`,{class:`orientation-toggle`,type:`button`,"aria-expanded":t.value,onClick:r[0]||=e=>t.value=!t.value},[r[1]||=E(`span`,{class:`marker`,"aria-hidden":`true`},`🧭`,-1),r[2]||=E(`span`,{class:`toggle-title`},`시작하기 전에 — 규칙은 하나뿐입니다`,-1),E(`span`,Vc,h(t.value?`−`:`+`),1)],8,Bc),s(E(`div`,Hc,[E(`p`,Uc,h(e.orientation.rule),1),E(`p`,Wc,h(e.orientation.lead),1),E(`ul`,Gc,[(d(!0),w(T,null,M(e.orientation.cargo,e=>(d(),w(`li`,{key:e.name},[E(`code`,Kc,h(e.name),1),E(`span`,qc,h(e.payload),1),E(`span`,{class:O([`dir`,e.dir===`위로`?`up`:`down`])},[E(`span`,Jc,h(e.dir===`위로`?`↑`:`↓`),1),y(` `+h(e.dir),1)],2)]))),128))]),E(`p`,{class:`why`,innerHTML:F(q)(e.orientation.why)},null,8,Yc),r[4]||=E(`p`,{class:`priority-label`},`실제로 쓰는 비중`,-1),E(`ul`,Xc,[(d(!0),w(T,null,M(e.orientation.priority,e=>(d(),w(`li`,{key:e.name,class:O(e.level)},[E(`span`,Zc,h(e.name),1),E(`span`,Qc,h(e.weight),1),E(`span`,$c,h(e.when),1)],2))),128))]),E(`p`,el,[r[3]||=E(`span`,{class:`keep-label`},`이것만은`,-1),E(`span`,{innerHTML:F(q)(e.orientation.keep)},null,8,tl)])],512),[[R,t.value]])],2))}},[[`__scopeId`,`data-v-bfb97b66`]]),rl={class:`chapter-nav`},il={class:`nav-head`},al={key:0,class:`nav-title`},ol=[`title`,`aria-label`],sl=[`title`,`onClick`],cl={class:`chapter-no`},ll={key:0,class:`chapter-info`},ul={key:1,class:`chapter-meta`},dl=[`title`],fl={key:0,class:`nav-legend`},pl={key:0},ml={id:`learning-content`,class:`learning-content`},hl={class:`chapter-head`},gl={class:`eyebrow`},_l={class:`chapter-summary`},vl={class:`topic-chips`},yl={key:1,class:`challenge-stack`},bl={key:2,class:`empty-state`},xl={key:3,class:`linked-assignments`},Sl={class:`step`},Cl=2,wl=A({__name:`LearningView`,props:{chapterId:{type:String,default:``}},setup(e){H();let t=V(),n=e,r=m(()=>{let e=Number(n.chapterId);return z.some(t=>t.id===e)?e:Cl}),a=e=>{t.push({name:`learning`,params:{chapterId:String(e)}}),document.getElementById(`learning-content`)?.scrollIntoView({behavior:`smooth`,block:`start`})};C(()=>n.chapterId,e=>{e||t.replace({name:`learning`,params:{chapterId:String(Cl)}})},{immediate:!0});let s=o(!1),c=m(()=>z.find(e=>e.id===r.value)),l=m(()=>W(r.value)),u=m(()=>U(r.value)),f=m(()=>z.map(e=>{let t=W(e.id),n=t.filter(e=>e.label.startsWith(`Code Challenge`));return{...e,total:n.length,live:t.filter(e=>e.practices.length>0).length,assignments:U(e.id).length}})),p=()=>{window.scrollTo({top:0,behavior:`smooth`})};return(e,t)=>{let n=i(`RouterLink`);return d(),w(T,null,[t[6]||=E(`section`,{class:`page-intro`},[E(`p`,{class:`eyebrow`},`LEARNING & CODE CHALLENGES`),E(`h1`,null,`학습 & 코드 챌린지`),E(`p`,null,[y(` 왼쪽에서 챕터를 고르면 해당 챕터의 `),E(`strong`,null,`코드 챌린지`),y(`가 열립니다. 각 챌린지는 `),E(`strong`,null,`관련 강의 내용 → 연습 항목 → 실습 화면`),y(` 순서로 이어집니다. `)])],-1),E(`section`,{class:O([`learning-layout`,{"nav-collapsed":s.value}])},[E(`aside`,rl,[E(`div`,il,[s.value?_(``,!0):(d(),w(`p`,al,`학습 로드맵`)),E(`button`,{type:`button`,class:`nav-toggle`,title:s.value?`메뉴 펼치기`:`메뉴 접기`,"aria-label":s.value?`메뉴 펼치기`:`메뉴 접기`,onClick:t[0]||=e=>s.value=!s.value},h(s.value?`»`:`«`),9,ol)]),(d(!0),w(T,null,M(f.value,e=>(d(),w(`button`,{key:e.id,type:`button`,class:O([`chapter-item`,{active:e.id===r.value}]),title:s.value?`${e.title} · ${e.slides}`:``,onClick:t=>a(e.id)},[E(`span`,cl,h(String(e.id).padStart(2,`0`)),1),s.value?_(``,!0):(d(),w(`span`,ll,[E(`b`,null,h(e.title),1),E(`small`,null,h(e.slides),1)])),s.value?_(``,!0):(d(),w(`span`,ul,[E(`i`,{class:O([`dot`,{live:e.live,none:!e.total}]),title:e.total?`코드 챌린지 ${e.total}개${e.live?` · 실습 화면 ${e.live}개`:``}`:`코드 챌린지 없음`},h(e.total||`–`),11,dl)]))],10,sl))),128)),s.value?_(``,!0):(d(),w(`p`,fl,[...t[1]||=[y(` 숫자 = 코드 챌린지 수 \xA0·\xA0 `,-1),E(`i`,{class:`dot live`},`n`,-1),y(` 실습 화면 있음 `,-1)]])),E(`button`,{type:`button`,class:`to-top`,title:`맨 위로`,"aria-label":`맨 위로 가기`,onClick:p},[t[2]||=E(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[E(`path`,{d:`m6 15 6-6 6 6`})],-1),s.value?_(``,!0):(d(),w(`span`,pl,`맨 위로`))])]),E(`div`,ml,[E(`header`,hl,[E(`div`,null,[E(`p`,gl,h(c.value.code)+` · 교안 `+h(c.value.slides),1),E(`h2`,null,h(c.value.title),1),E(`p`,_l,h(c.value.summary),1),E(`div`,vl,[(d(!0),w(T,null,M(c.value.topics,e=>(d(),w(`span`,{key:e},h(e),1))),128))])])]),c.value.orientation?(d(),k(nl,{key:0,orientation:c.value.orientation},null,8,[`orientation`])):_(``,!0),l.value.length?(d(),w(`div`,yl,[(d(!0),w(T,null,M(l.value,e=>(d(),k(zc,{key:e.id,challenge:e},null,8,[`challenge`]))),128))])):(d(),w(`p`,bl,[...t[3]||=[y(` 교안 기준으로 이 챕터에는 코드 챌린지가 없습니다. 아래 `,-1),E(`b`,null,`제출 과제`,-1),y(`로 바로 진행합니다. `,-1)]])),u.value.length?(d(),w(`section`,xl,[t[5]||=E(`p`,{class:`section-label`},`이 챕터의 제출 과제`,-1),(d(!0),w(T,null,M(u.value,e=>(d(),k(n,{key:e.id,class:`assignment-link`,to:`/assignments`},{default:S(()=>[E(`span`,Sl,h(String(e.id).padStart(2,`0`)),1),E(`span`,null,[E(`b`,null,h(e.title),1),E(`small`,null,h(e.goal),1)]),t[4]||=E(`span`,{class:`arrow`},`→`,-1)]),_:2},1024))),128))])):_(``,!0)])],2)],64)}}},[[`__scopeId`,`data-v-2064475a`]]);export{wl as default};