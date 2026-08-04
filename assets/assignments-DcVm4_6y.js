import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{A as t,I as n,M as r,S as i,_ as a,a as o,at as s,c,f as l,it as u,j as d,k as f,l as p,n as m,o as h,p as g,rt as _,s as v,t as y,v as b,w as x,y as S,z as C}from"./_plugin-vue_export-helper-CoO-E1Sm.js";import{S as w,f as T,i as E,m as D,p as O,y as k}from"./index-DonUOvFG.js";import{t as A}from"./WeatherAboutView-vqMGQ6QH.js";import{a as j,c as M,i as N,o as P,r as F,s as I}from"./mockCities-QVu0fjpA.js";import{t as L}from"./WeatherDetailView-KfNvHczD.js";import{a as R,i as ee,n as te,r as z,t as B}from"./WeatherHomeView-BQaDlPWY.js";import{t as V}from"./WeatherNotFoundView-DObk0E5H.js";import{a as ne,c as H,i as U,l as re,n as ie,o as W,r as ae,s as oe,t as G}from"./weatherApi-D01IqwYo.js";var se=e({default:()=>fe}),K={class:`dashboard-wrapper`},ce={class:`search-box`},q=[`value`],le={class:`list-box`},ue=[`onClick`],J={key:0,class:`badge hot`},Y={key:1,class:`badge cool`},X=[`onClick`],Z={key:0,class:`empty-message`},de={class:`status-bar`},fe=y({__name:`WeatherComposition`,setup(e){let r=n([{id:`city_01`,name:`서울`,temp:28,status:`맑음`},{id:`city_02`,name:`수원`,temp:24,status:`비`},{id:`city_03`,name:`부산`,temp:26,status:`구름`}]),a=n(``),u=n(`카드를 클릭하거나 검색해 보세요.`),d=o(()=>{let e=a.value.trim();return e?r.value.filter(t=>t.name.includes(e)):r.value});f(u,e=>{console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${e}"`)}),t(()=>{console.log(`🤖 [watchEffect 자동 호출] 현재 검색어 '${a.value}'에 매칭되는 API 데이터를 필터링합니다.`)});let g=(e,t)=>{window.alert(`${e}의 현재 날씨는 [${t}] 상태입니다.`)};return(e,t)=>(i(),p(`div`,K,[h(`section`,ce,[t[2]||=h(`h3`,null,`🔍 도시 검색`,-1),h(`input`,{type:`text`,value:a.value,placeholder:`검색할 도시 이름 입력`,onInput:t[0]||=e=>a.value=e.target.value},null,40,q),h(`p`,null,[t[1]||=l(` 검색 중인 도시: `,-1),h(`strong`,null,s(a.value),1)])]),h(`section`,le,[t[3]||=h(`h3`,null,`🏙️ 지역별 날씨 현황`,-1),(i(!0),p(m,null,x(d.value,e=>(i(),p(`div`,{key:e.id,class:`weather-card`,onClick:t=>u.value=`${e.name}이 선택되었습니다.`},[h(`h4`,null,s(e.name)+` (`+s(e.status)+`)`,1),h(`p`,null,`현재 기온: `+s(e.temp)+`°C`,1),e.temp>=25?(i(),p(`span`,J,`🔥 더움 (25도 이상)`)):(i(),p(`span`,Y,`❄️ 선선함 (25도 미만)`)),h(`button`,{class:`btn-detail`,onClick:w(t=>g(e.name,e.status),[`stop`])},` 상세보기 `,8,X)],8,ue))),128)),d.value.length===0?(i(),p(`p`,Z,` 😭 검색 결과와 일치하는 도시가 없습니다. `)):c(``,!0)]),h(`div`,de,s(u.value),1)]))}},[[`__scopeId`,`data-v-6342b841`]]),pe=e({default:()=>Ee}),me={class:`weather-app`},he={class:`weather-search`},ge=[`value`],_e={class:`status-bar`},ve={class:`weather-grid`},ye=[`onClick`],be={class:`weather-card-header`},xe={class:`temperature`},Se={key:0,class:`hot`},Ce={key:1,class:`cool`},we=[`onClick`],Te={key:0,class:`empty-message`},Ee=y({__name:`WeatherMockup`,setup(e){let t=n(``),r=n(`도시 카드를 선택해 주세요.`),a=n([{id:1,city:`서울`,temperature:28,weather:`맑음`},{id:2,city:`부산`,temperature:24,weather:`흐림`},{id:3,city:`제주`,temperature:26,weather:`구름 조금`},{id:4,city:`대전`,temperature:22,weather:`비`},{id:5,city:`광주`,temperature:30,weather:`맑음`}]),o=e=>{t.value=e.target.value},l=()=>{let e=t.value.trim();return e?a.value.filter(t=>t.city.includes(e)):a.value},u=e=>e>=25?`🔥 더움`:`❄️ 선선함`,d=e=>{r.value=`${e}이 선택되었습니다.`},f=(e,t)=>{window.alert(`${e}의 현재 날씨는 [${t}] 상태입니다.`)};return(e,n)=>(i(),p(`main`,me,[n[1]||=h(`h1`,null,`날씨 Mockup`,-1),h(`div`,he,[n[0]||=h(`label`,{for:`city-search`},`한글 도시 검색`,-1),h(`input`,{id:`city-search`,value:t.value,type:`text`,placeholder:`예: 서울`,onInput:o},null,40,ge)]),h(`p`,_e,s(r.value),1),h(`div`,ve,[(i(!0),p(m,null,x(l(),e=>(i(),p(`article`,{key:e.id,class:`weather-card`,onClick:t=>d(e.city)},[h(`div`,be,[h(`h2`,null,s(e.city),1),h(`span`,null,s(e.weather),1)]),h(`p`,xe,s(e.temperature)+`℃`,1),e.temperature>=25?(i(),p(`p`,Se,`🔥 더움`)):(i(),p(`p`,Ce,`❄️ 선선함`)),h(`button`,{type:`button`,onClick:w(t=>f(e.city,u(e.temperature)),[`stop`])},` 상세보기 `,8,we)],8,ye))),128))]),l().length===0?(i(),p(`p`,Te,` 검색 결과와 일치하는 도시가 없습니다. `)):c(``,!0)]))}},[[`__scopeId`,`data-v-a56bc1a5`]]),De=e({default:()=>je}),Oe={class:`tabs`,role:`tablist`},ke=[`aria-selected`,`onClick`],Ae={key:0,class:`count`},je=y({__name:`RegionTabs`,props:{regions:{type:Array,required:!0},current:{type:String,default:`전체`},counts:{type:Object,default:()=>({})}},emits:[`select-region`],setup(e){return(t,n)=>(i(),p(`div`,Oe,[(i(!0),p(m,null,x([`전체`,...e.regions],n=>(i(),p(`button`,{key:n,type:`button`,role:`tab`,class:_([`tab`,{active:n===e.current}]),"aria-selected":n===e.current,onClick:e=>t.$emit(`select-region`,n)},[l(s(n)+` `,1),e.counts[n]?(i(),p(`span`,Ae,s(e.counts[n]),1)):c(``,!0)],10,ke))),128))]))}},[[`__scopeId`,`data-v-9f28431c`]]),Me=e({default:()=>We}),Ne={class:`by-status`},Pe={class:`group-head`},Fe={class:`status-name`},Ie={class:`count`},Le={class:`chips`},Re=[`onClick`],ze={class:`chip-name`},Be={class:`chip-temp`},Ve={class:`chip-region`},He=[`title`,`onClick`],Ue={key:0,class:`empty-message`},We=y({__name:`WeatherByStatus`,props:{list:{type:Array,required:!0},favorites:{type:Array,default:()=>[]},hereId:{type:String,default:``},selectedId:{type:String,default:``}},emits:[`select-card`,`toggle-favorite`],setup(e){let t=e,n=o(()=>{let e=new Map;for(let n of t.list)e.has(n.status)||e.set(n.status,[]),e.get(n.status).push(n);return[...e.entries()].map(([e,t])=>({status:e,cities:[...t].sort((e,t)=>t.temp-e.temp)})).sort((e,t)=>t.cities.length-e.cities.length)});return(t,r)=>(i(),p(`div`,Ne,[(i(!0),p(m,null,x(n.value,n=>(i(),p(`div`,{key:n.status,class:`group`},[h(`p`,Pe,[g(j,{status:n.status,size:26},null,8,[`status`]),h(`b`,Fe,s(n.status),1),h(`span`,Ie,s(n.cities.length)+`곳`,1)]),h(`ul`,Le,[(i(!0),p(m,null,x(n.cities,n=>(i(),p(`li`,{key:n.id},[h(`button`,{type:`button`,class:_([`chip`,{here:n.id===e.hereId,selected:n.id===e.selectedId}]),onClick:e=>t.$emit(`select-card`,n.id)},[n.id===e.hereId?(i(),v(F,{key:0,name:`location`,size:11})):c(``,!0),h(`span`,ze,s(n.name),1),n.id===e.selectedId?(i(),v(F,{key:1,name:`check`,size:12,class:`chip-check`})):c(``,!0),h(`span`,Be,s(n.temp)+`°`,1),h(`span`,Ve,s(n.region),1)],10,Re),h(`button`,{type:`button`,class:_([`chip-star`,{on:e.favorites.includes(n.id)}]),title:e.favorites.includes(n.id)?`즐겨찾기 해제`:`즐겨찾기에 추가`,onClick:e=>t.$emit(`toggle-favorite`,n.id)},[g(F,{name:`star`,size:13,filled:e.favorites.includes(n.id)},null,8,[`filled`])],10,He)]))),128))])]))),128)),n.value.length?c(``,!0):(i(),p(`p`,Ue,[g(F,{name:`empty`,size:22}),r[0]||=l(` 표시할 날씨가 없습니다. `,-1)]))]))}},[[`__scopeId`,`data-v-968dcb10`]]),Ge=e({default:()=>Q}),Ke={key:0,class:`detail`},qe={class:`detail-head`},Je={key:0,class:`sido`},Ye={class:`current`},Xe={class:`date-bar`},Ze=[`disabled`],Qe={class:`date-field`},$e={class:`date-label`},et={key:0,class:`tag today`},tt={key:1,class:`tag past`},nt={key:2,class:`tag future`},rt=[`min`,`max`],it=[`disabled`],at={key:0,class:`state`},ot={key:1,class:`state error`},st={class:`axis`},ct={key:0},lt={class:`bar-slot`},ut={class:`temp`},dt={key:0,class:`rain`},ft={key:1,class:`rain none`},pt={class:`hour`},mt={key:2,class:`daymark`},ht=6,gt=12,Q=y({__name:`HourlyDetail`,props:{city:{type:Object,default:null}},emits:[`close`],setup(e,{emit:t}){let d=e,v=t,y=n([]),b=n(!1),S=n(``),w=re(new Date),T=new Date().getHours(),E=n(w),D=n(null),O=o(()=>E.value===w),A=o(()=>E.value<w);f(()=>[d.city?.id,E.value],async()=>{if(d.city){b.value=!0,S.value=``;try{let e=W(d.city.id);if(O.value){let t=await U(e,E.value,H(E.value,1)),n=new Date,r=new Date(n).setHours(n.getHours()-ht,0,0,0),i=new Date(n).setHours(n.getHours()+gt,0,0,0);y.value=t.filter(e=>{let t=new Date(e.time).getTime();return t>=r&&t<=i})}else y.value=await U(e,E.value)}catch(e){S.value=`시간별 날씨를 불러오지 못했습니다.`,y.value=[],console.error(`[weather] 시간별 조회 실패`,e)}finally{b.value=!1}if(O.value){await a();let e=D.value,t=e?.querySelector(`.now`);e&&t&&(e.scrollLeft=t.offsetLeft-e.clientWidth/2+t.offsetWidth/2)}}},{immediate:!0}),f(()=>d.city?.id,()=>E.value=w);let M=e=>{let t=H(E.value,e);t>=G.min&&t<=G.max&&(E.value=t)},N=o(()=>{let e=new Date(`${E.value}T00:00:00`),t=[`일`,`월`,`화`,`수`,`목`,`금`,`토`][e.getDay()];return`${e.getMonth()+1}월 ${e.getDate()}일 (${t})`}),P=o(()=>{if(!y.value.length)return{min:0,max:1};let e=y.value.map(e=>e.temp),t=Math.min(...e),n=Math.max(...e);return{min:t,max:n===t?t+1:n}}),I=e=>Math.round(26+(e-P.value.min)/(P.value.max-P.value.min)*34);return(t,n)=>e.city?(i(),p(`section`,Ke,[h(`header`,qe,[g(j,{status:e.city.status,size:26},null,8,[`status`]),h(`div`,null,[h(`h4`,null,[l(s(e.city.name)+` `,1),e.city.region===e.city.name?c(``,!0):(i(),p(`span`,Je,s(e.city.region),1))]),h(`p`,Ye,`지금 `+s(e.city.temp)+`°C · 습도 `+s(e.city.humidity)+`% · `+s(e.city.status),1)]),h(`button`,{class:`close`,type:`button`,"aria-label":`닫기`,onClick:n[0]||=e=>v(`close`)},`✕`)]),h(`div`,Xe,[h(`button`,{type:`button`,class:`step`,disabled:C(H)(E.value,-1)<C(G).min,"aria-label":`하루 전`,onClick:n[1]||=e=>M(-1)},` ‹ `,8,Ze),h(`label`,Qe,[h(`span`,$e,[l(s(N.value)+` `,1),O.value?(i(),p(`b`,et,`오늘`)):A.value?(i(),p(`b`,tt,`지난 날씨`)):(i(),p(`b`,nt,`예보`))]),r(h(`input`,{"onUpdate:modelValue":n[2]||=e=>E.value=e,type:`date`,min:C(G).min,max:C(G).max},null,8,rt),[[k,E.value]])]),h(`button`,{type:`button`,class:`step`,disabled:C(H)(E.value,1)>C(G).max,"aria-label":`하루 뒤`,onClick:n[3]||=e=>M(1)},` › `,8,it),O.value?c(``,!0):(i(),p(`button`,{key:0,type:`button`,class:`today-btn`,onClick:n[4]||=e=>E.value=C(w)},` 오늘로 `))]),b.value?(i(),p(`p`,at,`시간별 예보를 불러오는 중…`)):S.value?(i(),p(`p`,ot,s(S.value),1)):y.value.length?(i(),p(m,{key:2},[h(`p`,st,[O.value?(i(),p(`span`,ct,`지금 기준 앞뒤 시간 · `)):c(``,!0),l(`최저 `+s(P.value.min)+`°C ~ 최고 `+s(P.value.max)+`°C `,1)]),h(`ul`,{ref_key:`hoursEl`,ref:D,class:`hours`},[(i(!0),p(m,null,x(y.value,e=>(i(),p(`li`,{key:e.time,class:_({now:O.value&&e.hour===C(T)})},[h(`span`,lt,[h(`span`,ut,s(e.temp)+`°`,1),h(`span`,{class:`bar`,style:u({height:I(e.temp)+`px`})},null,4)]),g(j,{status:e.status,size:18},null,8,[`status`]),e.rainChance>0?(i(),p(`span`,dt,[g(F,{name:`droplet`,size:10}),l(s(e.rainChance)+`% `,1)])):(i(),p(`span`,ft,`–`)),h(`span`,pt,s(O.value&&e.hour===C(T)?`지금`:e.hour+`시`),1),e.hour===0?(i(),p(`span`,mt,`다음날`)):c(``,!0)],2))),128))],512)],64)):c(``,!0)])):c(``,!0)}},[[`__scopeId`,`data-v-ab3056f6`]]),_t=e({default:()=>xt}),vt={key:0,class:`mist`},yt={key:0,class:`blizzard`},bt=.618033988749895,xt=y({__name:`WeatherBackdrop`,props:{status:{type:String,default:``}},setup(e){let t=e,r=Object.fromEntries(Object.entries(Object.assign({"../../../assets/photos/cloudy.jpg":()=>E(()=>import(`./cloudy-79FvOUrg.js`).then(e=>e.default),[]),"../../../assets/photos/lightning.jpg":()=>E(()=>import(`./lightning-BiLOcaih.js`).then(e=>e.default),[]),"../../../assets/photos/mostly-sunny.jpg":()=>E(()=>import(`./mostly-sunny-ia0xcVKP.js`).then(e=>e.default),[]),"../../../assets/photos/overcast.jpg":()=>E(()=>import(`./overcast-hCz2yzGp.js`).then(e=>e.default),[]),"../../../assets/photos/partly-cloudy.jpg":()=>E(()=>import(`./partly-cloudy-BCMTYjrN.js`).then(e=>e.default),[]),"../../../assets/photos/rain.jpg":()=>E(()=>import(`./rain-CRgnNhCC.js`).then(e=>e.default),[]),"../../../assets/photos/storm.jpg":()=>E(()=>import(`./storm-5A07q_Yo.js`).then(e=>e.default),[]),"../../../assets/photos/sunny.jpg":()=>E(()=>import(`./sunny-BxS2j8Tt.js`).then(e=>e.default),[])})).map(([e,t])=>[e.split(`/`).pop().replace(`.jpg`,``),t])),a={},s=async e=>(a[e]||(a[e]=await r[e]?.()),a[e]),l=[[`뇌우`,{photo:`storm`,effect:`storm`}],[`번개`,{photo:`lightning`,effect:`lightning`}],[`폭설`,{photo:`overcast`,effect:`snow-heavy`}],[`눈보라`,{photo:`overcast`,effect:`snow-heavy`}],[`싸락눈`,{photo:`overcast`,effect:`snow`}],[`눈`,{photo:`overcast`,effect:`snow`}],[`한파`,{photo:`overcast`,effect:`snow`}],[`소나기`,{photo:`rain`,effect:`shower`}],[`호우`,{photo:`rain`,effect:`rain-heavy`}],[`이슬비`,{photo:`rain`,effect:`drizzle`}],[`어는 비`,{photo:`rain`,effect:`rain`}],[`비`,{photo:`rain`,effect:`rain`}],[`안개`,{photo:`overcast`,effect:`fog`}],[`미세먼지`,{photo:`overcast`,effect:`fog`}],[`흐림`,{photo:`overcast`,effect:`clouds-slow`}],[`구름조금`,{photo:`partly-cloudy`,effect:`clouds`}],[`구름많`,{photo:`cloudy`,effect:`clouds`}],[`구름`,{photo:`cloudy`,effect:`clouds`}],[`대체로 맑`,{photo:`mostly-sunny`,effect:`sun-clouds`}],[`맑`,{photo:`sunny`,effect:`sun`}]],d={photo:`partly-cloudy`,effect:`clouds`},g=o(()=>{if(!t.status)return d;let e=l.find(([e])=>t.status.includes(e));return e?e[1]:d}),v=n([``,``]),y=n(0),C=0;f(()=>g.value.photo,async e=>{let t=++C,n=await s(e);if(!n||t!==C||v.value[y.value]===n)return;let r=1-y.value;v.value[r]=n,y.value=r},{immediate:!0});let w=n(null),T=n(1),D=null;S(()=>{let e=()=>{let e=w.value?.offsetHeight??0;T.value=Math.min(4,Math.max(1,Math.ceil(e/window.innerHeight)))};D=new ResizeObserver(e),w.value&&D.observe(w.value),window.addEventListener(`resize`,e),e(),b(()=>window.removeEventListener(`resize`,e))}),b(()=>D?.disconnect());let O=(e,{minDur:t,maxDur:n,minLen:r,maxLen:i,minOp:a,maxOp:o,width:s})=>Array.from({length:e},(e,c)=>{let l=c*bt%1,u=c*37%100/100,d=c*61%100/100,f=c*83%100/100,p=t+d*(n-t);return{left:u*106-3,dur:p,len:r+f*(i-r),delay:-l*p,opacity:a+f*(o-a),width:f>.7?s+.6:s}}),k=O(95,{minDur:1.8,maxDur:2.9,minLen:8,maxLen:22,minOp:.16,maxOp:.4,width:1}),A=O(150,{minDur:.7,maxDur:1.1,minLen:28,maxLen:70,minOp:.3,maxOp:.75,width:1.3}),j=O(200,{minDur:.5,maxDur:.78,minLen:42,maxLen:100,minOp:.34,maxOp:.85,width:1.6}),M=O(280,{minDur:.28,maxDur:.46,minLen:75,maxLen:175,minOp:.4,maxOp:.95,width:2.2}),N=(e,{minDur:t,maxDur:n,minSize:r,maxSize:i,swayMin:a,swayMax:o})=>Array.from({length:e},(e,s)=>{let c=s*bt%1,l=s*41%100/100,u=s*67%100/100,d=s*89%100/100,f=t+u*(n-t);return{left:l*106-3,dur:f,size:r+d*(i-r),delay:-c*f,opacity:.45+d*.5,sway:a+l*(o-a),swayDur:1.8+d*2.6}}),P=N(120,{minDur:4.5,maxDur:8,minSize:3,maxSize:8,swayMin:24,swayMax:70}),F=N(230,{minDur:1.6,maxDur:3.2,minSize:4,maxSize:13,swayMin:60,swayMax:150}),I=o(()=>{let e=g.value.effect===`snow-heavy`?F:P;return T.value>=3?e.filter((e,t)=>t%2==0):e}),L=o(()=>{let e={drizzle:k,shower:j,"rain-heavy":M}[g.value.effect]??A;return T.value>=3?e.filter((e,t)=>t%2==0):e}),R=o(()=>[`storm`,`lightning`,`rain-heavy`,`rain`,`shower`].includes(g.value.effect));return(e,t)=>(i(),p(`div`,{ref_key:`rootEl`,ref:w,class:_([`backdrop`,[`fx-${g.value.effect}`,{dark:R.value}]]),"aria-hidden":`true`},[(i(!0),p(m,null,x(v.value,(e,t)=>(i(),p(`div`,{key:t,class:_([`photo`,{on:t===y.value}]),style:u(e?{backgroundImage:`url(${e})`}:null)},null,6))),128)),g.value.effect===`sun`||g.value.effect===`sun-clouds`?(i(),p(m,{key:0},[t[0]||=h(`div`,{class:`glow`},null,-1),t[1]||=h(`div`,{class:`rays`},null,-1)],64)):c(``,!0),[`clouds`,`clouds-slow`,`sun-clouds`,`fog`,`overcast`].includes(g.value.effect)?(i(),p(m,{key:1},[t[2]||=h(`div`,{class:`cloud-layer a`},null,-1),t[3]||=h(`div`,{class:`cloud-layer b`},null,-1)],64)):c(``,!0),[`rain`,`rain-heavy`,`drizzle`,`shower`,`storm`].includes(g.value.effect)?(i(),p(m,{key:2},[(i(!0),p(m,null,x(T.value,e=>(i(),p(`div`,{key:e,class:`rain-field`,style:u({top:(e-1)*100+`vh`})},[(i(!0),p(m,null,x(L.value,(e,t)=>(i(),p(`span`,{key:t,class:`drop`,style:u({left:e.left+`%`,height:e.len+`px`,width:e.width+`px`,opacity:e.opacity,animationDuration:e.dur+`s`,animationDelay:e.delay+`s`})},null,4))),128))],4))),128)),g.value.effect===`drizzle`?c(``,!0):(i(),p(`div`,vt))],64)):c(``,!0),[`snow`,`snow-heavy`].includes(g.value.effect)?(i(),p(m,{key:3},[(i(!0),p(m,null,x(T.value,e=>(i(),p(`div`,{key:e,class:`snow-field`,style:u({top:(e-1)*100+`vh`})},[(i(!0),p(m,null,x(I.value,(e,t)=>(i(),p(`span`,{key:t,class:`flake-fall`,style:u({left:e.left+`%`,animationDuration:e.dur+`s`,animationDelay:e.delay+`s`})},[h(`span`,{class:`flake`,style:u({width:e.size+`px`,height:e.size+`px`,opacity:e.opacity,animationDuration:e.swayDur+`s`,"--sway":e.sway+`px`})},null,4)],4))),128))],4))),128)),g.value.effect===`snow-heavy`?(i(),p(`div`,yt)):c(``,!0)],64)):c(``,!0),g.value.effect===`fog`?(i(),p(m,{key:4},[t[4]||=h(`div`,{class:`fog-layer a`},null,-1),t[5]||=h(`div`,{class:`fog-layer b`},null,-1)],64)):c(``,!0),[`storm`,`lightning`].includes(g.value.effect)?(i(),p(m,{key:5},[t[7]||=h(`div`,{class:`flash`},null,-1),(i(),p(m,null,x(2,e=>h(`svg`,{key:e,class:_([`bolt`,e===1?`a`:`b`]),viewBox:`0 0 200 300`,preserveAspectRatio:`xMidYMin meet`},[...t[6]||=[h(`path`,{d:`M96 0 78 96 112 88 66 210`,fill:`none`,stroke:`#bfe0ff`,"stroke-width":`11`,"stroke-linejoin":`round`,"stroke-linecap":`round`,opacity:`0.55`},null,-1),h(`path`,{d:`M96 0 78 96 112 88 66 210 90 128 58 138Z`,fill:`#f2f9ff`},null,-1),h(`path`,{d:`M96 0 78 96 112 88 66 210`,fill:`none`,stroke:`#fff`,"stroke-width":`2.4`,"stroke-linejoin":`round`,"stroke-linecap":`round`},null,-1),h(`path`,{d:`M84 62 46 104M104 108 142 142M74 150 44 188`,fill:`none`,stroke:`#eaf5ff`,"stroke-width":`2.2`,"stroke-linecap":`round`},null,-1)]],2)),64))],64)):c(``,!0),t[8]||=h(`div`,{class:`veil`},null,-1)],2))}},[[`__scopeId`,`data-v-30c4148e`]]),St=e({default:()=>Gt}),Ct={class:`dashboard-wrapper`},wt={class:`view-tabs`,role:`tablist`},Tt=[`aria-selected`],Et=[`aria-selected`],Dt={class:`tool-row`},Ot={class:`summary`},kt={key:0,class:`fav-count`},At=[`disabled`],jt=[`disabled`],Mt={key:0,class:`hint stale`},Nt={key:1,class:`hint`},Pt={key:3,class:`error-message`},Ft={key:4,class:`skeleton`},It={key:0,class:`empty-message`},Lt={key:1,class:`pager`,"aria-label":`목록 페이지`},Rt=[`disabled`],zt=[`aria-current`,`onClick`],Bt=[`disabled`],Vt={class:`status-bar`},Ht={key:0,class:`stamp`},Ut=`inwoo-weather-favorites`,$=5,Wt=6e5,Gt=y({__name:`WeatherParent`,setup(e){let t=n([]),r=n(!1),a=n(``),u=n(!1),y=n(``),w=n(``),T=n(`전체`),E=n(`region`),D=n(`카드를 클릭하거나 검색해 보세요.`),O=n(``),k=n(1),A=()=>{O.value=``,D.value=`카드를 클릭하거나 검색해 보세요.`},j=e=>{if(O.value===e){A();return}O.value=e;let n=t.value.find(t=>t.id===e);D.value=n?`${n.name} · ${n.status} · ${n.temp}°C · 습도 ${n.humidity}%`:`카드를 클릭하거나 검색해 보세요.`},M=n(JSON.parse(localStorage.getItem(Ut)??`[]`)),N=e=>{M.value=M.value.includes(e)?M.value.filter(t=>t!==e):[...M.value,e]};f(M,e=>localStorage.setItem(Ut,JSON.stringify(e)),{deep:!0});let P=n(``),L=n(`idle`),R=()=>{if(!navigator.geolocation){L.value=`denied`;return}L.value=`asking`,navigator.geolocation.getCurrentPosition(({coords:e})=>{let t=oe(e.latitude,e.longitude);P.value=t?.id??``,L.value=`done`},()=>{L.value=`denied`},{timeout:8e3})},z=async(e=!1)=>{r.value=!0,a.value=``;try{let{rows:n,at:r,stale:i}=await ne(void 0,e);t.value=[...n,...ie],u.value=i,i&&setTimeout(()=>z(!0),0),V=r,y.value=new Date(r).toLocaleTimeString(`ko-KR`,{hour:`2-digit`,minute:`2-digit`})}catch(e){a.value=`날씨를 불러오지 못했습니다. 네트워크를 확인하고 다시 시도해 주세요.`,u.value=!1,console.error(`[weather] 불러오기 실패`,e)}finally{r.value=!1}},B=null,V=0,H=()=>{U(),B=setInterval(()=>{document.visibilityState===`visible`&&z(!0)},Wt)},U=()=>{B&&clearInterval(B),B=null},re=()=>{document.visibilityState===`visible`&&Date.now()-V>Wt&&z(!0)};b(()=>{U(),document.removeEventListener(`visibilitychange`,re)}),S(async()=>{z(),H(),document.addEventListener(`visibilitychange`,re),(await navigator.permissions?.query({name:`geolocation`}).catch(()=>null))?.state===`granted`&&R()});let W=o(()=>{let e=w.value.trim();return t.value.filter(t=>!e||t.name.includes(e))}),G=o(()=>{let e=W.value.filter(e=>T.value===`전체`||e.group===T.value),t=e=>e.id===P.value?0:M.value.includes(e.id)?1:2;return[...e].sort((e,n)=>t(e)-t(n))}),se=o(()=>W.value.reduce((e,t)=>(e[t.group]=(e[t.group]??0)+1,e),{전체:W.value.length})),K=o(()=>Math.max(1,Math.ceil(G.value.length/$))),ce=o(()=>G.value.slice((k.value-1)*$,k.value*$));f([w,T,E],()=>k.value=1),f(K,e=>{k.value>e&&(k.value=e)});let q=o(()=>t.value.find(e=>e.id===O.value)??null),le=o(()=>t.value.find(e=>e.id===O.value)??t.value.find(e=>e.id===P.value)??null),ue=o(()=>le.value?.status??``),J=o(()=>W.value.filter(e=>M.value.includes(e.id)).length);f(D,e=>{console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${e}"`)});let Y=n(``),X=o(()=>t.value.find(e=>e.id===Y.value)??null),Z=e=>{let n=t.value.find(t=>t.name===e);Y.value=Y.value===n?.id?``:n?.id??``};return(e,n)=>(i(),p(`div`,Ct,[g(xt,{status:ue.value},null,8,[`status`]),g(I,null,{default:d(()=>[g(ee,{"current-query":w.value,onUpdateQuery:n[0]||=e=>w.value=e},null,8,[`current-query`])]),_:1}),g(I,null,{default:d(()=>[h(`div`,wt,[h(`button`,{type:`button`,role:`tab`,"aria-selected":E.value===`region`,class:_({active:E.value===`region`}),onClick:n[1]||=e=>E.value=`region`},[g(F,{name:`city`,size:16}),n[10]||=l(` 지역별 날씨 현황 `,-1)],10,Tt),h(`button`,{type:`button`,role:`tab`,"aria-selected":E.value===`status`,class:_({active:E.value===`status`}),onClick:n[2]||=e=>E.value=`status`},[g(F,{name:`droplet`,size:16}),n[11]||=l(` 날씨별 지역 현황 `,-1)],10,Et)]),h(`div`,Dt,[h(`p`,Ot,[h(`b`,null,s(W.value.length),1),n[12]||=l(`곳 `,-1),J.value?(i(),p(`span`,kt,[g(F,{name:`star`,size:12,filled:!0}),l(` `+s(J.value),1)])):c(``,!0)]),h(`button`,{class:`tool`,type:`button`,disabled:L.value===`asking`,onClick:R},[g(F,{name:`location`,size:14}),l(` `+s(L.value===`asking`?`찾는 중…`:`내 위치`),1)],8,At),h(`button`,{class:`tool`,type:`button`,disabled:r.value,onClick:n[3]||=e=>z(!0)},s(r.value?`불러오는 중…`:`새로고침`),9,jt)]),u.value?(i(),p(`p`,Mt,[n[13]||=l(` 지금 서버 응답을 받지 못해 `,-1),h(`b`,null,s(y.value)+`에 받아 둔 값`,1),n[14]||=l(`을 보여 주고 있습니다. 잠시 뒤 새로고침을 눌러 보세요. `,-1)])):c(``,!0),L.value===`denied`?(i(),p(`p`,Nt,` 위치 권한이 없어 현재 위치를 표시하지 못했습니다. 나머지 기능은 그대로 쓸 수 있습니다. `)):c(``,!0),E.value===`region`?(i(),v(je,{key:2,regions:[...C(ae),`데모`],current:T.value,counts:se.value,onSelectRegion:n[4]||=e=>T.value=e},null,8,[`regions`,`current`,`counts`])):c(``,!0),a.value?(i(),p(`p`,Pt,[l(s(a.value)+` `,1),h(`button`,{type:`button`,onClick:n[5]||=e=>z(!0)},`다시 시도`)])):r.value&&!t.value.length?(i(),p(`div`,Ft,[(i(),p(m,null,x(5,e=>h(`div`,{key:e,class:`skeleton-card`},[...n[15]||=[h(`span`,{class:`sk-tile`},null,-1),h(`span`,{class:`sk-lines`},[h(`i`,{class:`sk-line wide`}),h(`i`,{class:`sk-line`})],-1),h(`span`,{class:`sk-metrics`},[h(`i`,{class:`sk-pill`}),h(`i`,{class:`sk-pill`})],-1)]])),64))])):E.value===`region`?(i(),p(m,{key:5},[(i(!0),p(m,null,x(ce.value,e=>(i(),p(m,{key:e.id},[g(te,{"city-item":e,favorite:M.value.includes(e.id),here:e.id===P.value,open:e.id===Y.value,selected:e.id===O.value,onSelectCard:j,onClickDetail:Z,onToggleFavorite:N},null,8,[`city-item`,`favorite`,`here`,`open`,`selected`]),e.id===Y.value?(i(),v(Q,{key:0,city:X.value,onClose:n[6]||=e=>Y.value=``},null,8,[`city`])):c(``,!0)],64))),128)),G.value.length===0?(i(),p(`p`,It,[g(F,{name:`empty`,size:22}),n[16]||=l(` 검색 결과와 일치하는 도시가 없습니다. `,-1)])):c(``,!0),K.value>1?(i(),p(`nav`,Lt,[h(`button`,{type:`button`,disabled:k.value===1,"aria-label":`이전`,onClick:n[7]||=e=>k.value--},`‹`,8,Rt),(i(!0),p(m,null,x(K.value,e=>(i(),p(`button`,{key:e,type:`button`,class:_({active:e===k.value}),"aria-current":e===k.value?`page`:void 0,onClick:t=>k.value=e},s(e),11,zt))),128)),h(`button`,{type:`button`,disabled:k.value===K.value,"aria-label":`다음`,onClick:n[8]||=e=>k.value++},` › `,8,Bt)])):c(``,!0)],64)):(i(),p(m,{key:6},[q.value?(i(),p(m,{key:0},[g(te,{"city-item":q.value,favorite:M.value.includes(q.value.id),here:q.value.id===P.value,open:q.value.id===Y.value,selected:!0,onSelectCard:j,onClickDetail:Z,onToggleFavorite:N},null,8,[`city-item`,`favorite`,`here`,`open`]),q.value.id===Y.value?(i(),v(Q,{key:0,city:X.value,onClose:n[9]||=e=>Y.value=``},null,8,[`city`])):c(``,!0)],64)):c(``,!0),g(We,{list:W.value,favorites:M.value,"here-id":P.value,"selected-id":O.value,onSelectCard:j,onToggleFavorite:N},null,8,[`list`,`favorites`,`here-id`,`selected-id`])],64))]),_:1}),h(`div`,Vt,[h(`span`,null,s(D.value),1),y.value?(i(),p(`small`,Ht,s(y.value)+` 기준 · Open-Meteo`,1)):c(``,!0)])]))}},[[`__scopeId`,`data-v-dba696e8`]]),Kt=e({default:()=>Xt}),qt={class:`app`},Jt={class:`nav`,role:`tablist`},Yt={class:`url`},Xt=y({__name:`WeatherRouterApp`,setup(e){let t=D(),n=o(()=>t.params.stageId??`4`);return(e,r)=>(i(),p(`div`,qt,[h(`nav`,Jt,[g(C(T),{to:{name:`a4-home`,params:{stageId:n.value}},"exact-active-class":`on`},{default:d(()=>[...r[0]||=[l(` 홈 `,-1)]]),_:1},8,[`to`]),g(C(T),{to:{name:`a4-about`,params:{stageId:n.value}},"active-class":`on`},{default:d(()=>[...r[1]||=[l(` 소개 `,-1)]]),_:1},8,[`to`]),h(`code`,Yt,s(C(t).path),1)]),g(C(O))]))}},[[`__scopeId`,`data-v-35cc4162`]]),Zt=`<script setup>
/**
 * 누적 과제 2 — 날씨 컴포지션 (교안 126쪽)
 * 1일차 Mockup에 computed · watch · watchEffect를 얹은 버전.
 */
import { ref, computed, watch, watchEffect } from 'vue'

// 1. [1일차 데이터] 가상의 백엔드 데이터 배열
const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
])

// 2. [1일차 데이터] 검색어 및 알림창 제어용 데이터
const searchQuery = ref('')
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')

// 3. [2일차 추가] computed를 활용한 실시간 검색 필터링 연산기 (★핵심)
const filteredWeatherList = computed(() => {
  // 사용자가 입력한 검색어의 앞뒤 공백을 제거합니다.
  const query = searchQuery.value.trim()

  // 검색어가 비어있다면 원본 weatherList를 그대로 보여줍니다.
  if (!query) {
    return weatherList.value
  }

  // 검색어가 포함된 도시만 칼같이 필터링하여 실시간으로 뱉어냅니다.
  return weatherList.value.filter((item) => item.name.includes(query))
})

// 4. [2일차 추가] watch를 활용한 선택 도시 추적 센서
// selectedCityInfo의 문구 변화를 감시하여 후속 로그를 처리합니다.
watch(selectedCityInfo, (newInfo) => {
  console.log(\`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "\${newInfo}"\`)
})

// 5. [2일차 추가] watchEffect를 활용한 자동 의존성 API 로그 시뮬레이션
// 타이핑할 때마다 변하는 searchQuery를 AI CCTV처럼 자동 추적합니다.
watchEffect(() => {
  console.log(
    \`🤖 [watchEffect 자동 호출] 현재 검색어 '\${searchQuery.value}'에 매칭되는 API 데이터를 필터링합니다.\`,
  )
})

// 알림 대행 함수
const showDetail = (cityName, status) => {
  window.alert(\`\${cityName}의 현재 날씨는 [\${status}] 상태입니다.\`)
}
<\/script>

<template>
  <div class="dashboard-wrapper">
    <section class="search-box">
      <h3>🔍 도시 검색</h3>
      <input
        type="text"
        :value="searchQuery"
        placeholder="검색할 도시 이름 입력"
        @input="(e) => (searchQuery = e.target.value)"
      />
      <p>
        검색 중인 도시: <strong>{{ searchQuery }}</strong>
      </p>
    </section>

    <section class="list-box">
      <h3>🏙️ 지역별 날씨 현황</h3>

      <div
        v-for="item in filteredWeatherList"
        :key="item.id"
        class="weather-card"
        @click="selectedCityInfo = \`\${item.name}이 선택되었습니다.\`"
      >
        <h4>{{ item.name }} ({{ item.status }})</h4>
        <p>현재 기온: {{ item.temp }}°C</p>

        <span v-if="item.temp >= 25" class="badge hot">🔥 더움 (25도 이상)</span>
        <span v-else class="badge cool">❄️ 선선함 (25도 미만)</span>

        <button class="btn-detail" @click.stop="showDetail(item.name, item.status)">
          상세보기
        </button>
      </div>

      <p v-if="filteredWeatherList.length === 0" class="empty-message">
        😭 검색 결과와 일치하는 도시가 없습니다.
      </p>
    </section>

    <div class="status-bar">
      {{ selectedCityInfo }}
    </div>
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  max-width: 620px;
  margin: 0 auto;
}

h3 {
  margin: 0 0 14px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* 검색 */
.search-box {
  margin-bottom: 22px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

.search-box input {
  width: min(320px, 100%);
  padding: 13px 16px;
  border: 1px solid var(--line);
  border-radius: 10px;
  color: var(--ink);
  background: var(--paper);
  font: inherit;
  font-size: 15px;
}

.search-box input:focus {
  border-color: var(--accent);
  background: var(--surface);
  outline: none;
}

.search-box p {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.search-box strong {
  color: var(--accent);
  font-weight: 700;
}

/* 목록 */
.list-box {
  display: grid;
  gap: 10px;
  margin-bottom: 18px;
}

.list-box h3 {
  margin-bottom: 0;
}

.weather-card {
  position: relative;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  cursor: pointer;
  transition:
    border-color 0.16s ease,
    transform 0.16s ease;
}

.weather-card:hover {
  border-color: var(--accent-line);
  transform: translateY(-1px);
}

.weather-card h4 {
  margin: 0 0 10px;
  padding-right: 92px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.weather-card p {
  margin: 0 0 12px;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 11px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
}

.hot {
  border-color: color-mix(in srgb, var(--signal) 35%, transparent);
  color: var(--signal);
  background: var(--signal-tint);
}

.cool {
  border-color: color-mix(in srgb, var(--slate) 30%, transparent);
  color: var(--slate);
  background: var(--slate-tint);
}

.btn-detail {
  position: absolute;
  right: 16px;
  top: 16px;
  padding: 7px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--paper);
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}

.btn-detail:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.empty-message {
  padding: 26px 0;
  color: var(--muted);
  font-size: 13.5px;
  text-align: center;
}

/* 상태바 */
.status-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  color: var(--ink-soft);
  font-size: 13.5px;
}

.status-bar::before {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--accent);
  content: '';
}
</style>
`,Qt=`<script setup>
/**
 * 누적 과제 1 — 날씨 Mockup (교안 98쪽)
 * 원본: weather-mockup/src/App.vue
 *
 * 로직은 원본 그대로이며, 이 사이트에 끼워 넣기 위해
 * 전역 <style>을 <style scoped>로 바꾸고 body/* 리셋만 제거했습니다.
 */
import { ref } from 'vue'

const searchQuery = ref('')
const selectedCityMessage = ref('도시 카드를 선택해 주세요.')

const weatherList = ref([
  { id: 1, city: '서울', temperature: 28, weather: '맑음' },
  { id: 2, city: '부산', temperature: 24, weather: '흐림' },
  { id: 3, city: '제주', temperature: 26, weather: '구름 조금' },
  { id: 4, city: '대전', temperature: 22, weather: '비' },
  { id: 5, city: '광주', temperature: 30, weather: '맑음' },
])

const handleSearchInput = (e) => {
  searchQuery.value = e.target.value
}

const getFilteredWeatherList = () => {
  const keyword = searchQuery.value.trim()

  if (!keyword) return weatherList.value

  return weatherList.value.filter((weather) => weather.city.includes(keyword))
}

const getTemperatureStatus = (temperature) => {
  return temperature >= 25 ? '🔥 더움' : '❄️ 선선함'
}

const selectCity = (cityName) => {
  selectedCityMessage.value = \`\${cityName}이 선택되었습니다.\`
}

const showDetail = (cityName, status) => {
  window.alert(\`\${cityName}의 현재 날씨는 [\${status}] 상태입니다.\`)
}
<\/script>

<template>
  <main class="weather-app">
    <h1>날씨 Mockup</h1>

    <div class="weather-search">
      <label for="city-search">한글 도시 검색</label>
      <input
        id="city-search"
        :value="searchQuery"
        type="text"
        placeholder="예: 서울"
        @input="handleSearchInput"
      />
    </div>

    <p class="status-bar">{{ selectedCityMessage }}</p>

    <div class="weather-grid">
      <article
        v-for="weather in getFilteredWeatherList()"
        :key="weather.id"
        class="weather-card"
        @click="selectCity(weather.city)"
      >
        <div class="weather-card-header">
          <h2>{{ weather.city }}</h2>
          <span>{{ weather.weather }}</span>
        </div>

        <p class="temperature">{{ weather.temperature }}℃</p>

        <p v-if="weather.temperature >= 25" class="hot">🔥 더움</p>
        <p v-else class="cool">❄️ 선선함</p>

        <button
          type="button"
          @click.stop="showDetail(weather.city, getTemperatureStatus(weather.temperature))"
        >
          상세보기
        </button>
      </article>
    </div>

    <p v-if="getFilteredWeatherList().length === 0" class="empty-message">
      검색 결과와 일치하는 도시가 없습니다.
    </p>
  </main>
</template>

<style scoped>
.weather-app {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.weather-app > h1 {
  margin: 0 0 20px;
  color: var(--ink);
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.035em;
}

.weather-search {
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
}

.weather-search label {
  color: var(--ink);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.weather-search input {
  max-width: 320px;
  padding: 12px 15px;
  border: 1px solid var(--line);
  border-radius: 10px;
  color: var(--ink);
  background: var(--surface);
  font: inherit;
  font-size: 15px;
}

.weather-search input:focus {
  border-color: var(--accent);
  outline: none;
}

.status-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  padding: 14px 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  color: var(--ink-soft);
  font-size: 13.5px;
}

.status-bar::before {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--accent);
  content: '';
}

.weather-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
  gap: 12px;
}

.weather-card {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  cursor: pointer;
  transition:
    border-color 0.16s ease,
    transform 0.16s ease;
}

.weather-card:hover {
  border-color: var(--accent-line);
  transform: translateY(-1px);
}

.weather-card-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}

.weather-card-header h2 {
  margin: 0;
  color: var(--ink);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.weather-card-header span {
  color: var(--faint);
  font-size: 11.5px;
}

.temperature {
  margin: 14px 0 10px;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.04em;
}

.hot,
.cool {
  display: inline-flex;
  align-items: center;
  margin: 0 0 14px;
  padding: 4px 11px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 600;
}

.hot {
  border-color: color-mix(in srgb, var(--signal) 35%, transparent);
  color: var(--signal);
  background: var(--signal-tint);
}

.cool {
  border-color: color-mix(in srgb, var(--slate) 30%, transparent);
  color: var(--slate);
  background: var(--slate-tint);
}

.weather-card button {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--paper);
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}

.weather-card button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.empty-message {
  padding: 30px;
  color: var(--muted);
  font-size: 13.5px;
  text-align: center;
}

@media (max-width: 520px) {
  .weather-search input {
    max-width: none;
  }
}
</style>
`,$t=`<script setup>
/**
 * 누적 과제 3 — 날씨 컴포넌트 분리 (교안 158쪽)
 * 기능은 그대로 두고 컴포넌트로 나눈 뒤, 데이터를 실제 API로 바꾼 결과물.
 *
 *   WeatherParent.vue          ← 모든 반응형 데이터 보유 (이 파일)
 *   ├── BaseDashboardCard.vue    공통 껍데기 + <slot>
 *   ├── SearchBar.vue            props: current-query / emits: update-query
 *   ├── RegionTabs.vue           props: regions·current / emits: select-region
 *   ├── WeatherCard.vue          props: city-item·favorite·here / emits: 3종
 *   │   └── WeatherIcon.vue      props: status
 *   └── WeatherByStatus.vue      같은 목록을 날씨 기준으로 묶어 보여준다
 *
 * 날씨는 Open-Meteo에서 받아온다 (weather/weatherApi.js).
 */
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
// 1. 컴포넌트 파일명 국룰 표기법(PascalCase) 매칭 수입
import BaseDashboardCard from './weather/BaseDashboardCard.vue'
import SearchBar from './weather/SearchBar.vue'
import RegionTabs from './weather/RegionTabs.vue'
import WeatherCard from './weather/WeatherCard.vue'
import WeatherByStatus from './weather/WeatherByStatus.vue'
import HourlyDetail from './weather/HourlyDetail.vue'
import WeatherBackdrop from './weather/WeatherBackdrop.vue'
import UiIcon from './weather/UiIcon.vue'
import { fetchWeather, nearestCity, REGIONS, DEMO_ROWS } from './weather/weatherApi'

const FAVORITES_KEY = 'inwoo-weather-favorites'

// ── 서버에서 받아 오는 데이터 ──
const weatherList = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const isStale = ref(false)
const updatedAt = ref('')

// ── 사용자가 만지는 상태 ──
const searchQuery = ref('')
const selectedRegion = ref('전체')
const viewMode = ref('region') // 'region' | 'status'
const selectedCityInfo = ref('카드를 클릭하거나 검색해 보세요.')
const selectedCityId = ref('')

// ── 목록은 5곳씩 끊어서 보여 준다 ──
const PAGE_SIZE = 5
const page = ref(1)

/** 선택을 풀면 배경이 다시 현재 위치를 따른다 */
const clearSelection = () => {
  selectedCityId.value = ''
  selectedCityInfo.value = '카드를 클릭하거나 검색해 보세요.'
}

/** 카드를 고르면 상태 바 문구도 부모가 만든다 (자식은 id만 올려 준다) */
const selectCity = (cityId) => {
  // 같은 카드를 다시 누르면 선택을 푼다 (배경은 현재 위치로 돌아간다)
  if (selectedCityId.value === cityId) {
    clearSelection()
    return
  }
  selectedCityId.value = cityId
  const city = weatherList.value.find((item) => item.id === cityId)
  selectedCityInfo.value = city
    ? \`\${city.name} · \${city.status} · \${city.temp}°C · 습도 \${city.humidity}%\`
    : '카드를 클릭하거나 검색해 보세요.'
}

// ── 즐겨찾기 — 새로고침해도 남도록 localStorage에 담는다 ──
const favorites = ref(JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]'))

const toggleFavorite = (cityId) => {
  favorites.value = favorites.value.includes(cityId)
    ? favorites.value.filter((id) => id !== cityId)
    : [...favorites.value, cityId]
}

watch(favorites, (list) => localStorage.setItem(FAVORITES_KEY, JSON.stringify(list)), {
  deep: true,
})

// ── 현재 위치 ──
const hereId = ref('')
const locationState = ref('idle') // idle | asking | done | denied

/** 브라우저 위치 → 가장 가까운 도시 하나를 맨 앞에 올린다 */
const findMyLocation = () => {
  if (!navigator.geolocation) {
    locationState.value = 'denied'
    return
  }
  locationState.value = 'asking'
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const near = nearestCity(coords.latitude, coords.longitude)
      hereId.value = near?.id ?? ''
      locationState.value = 'done'
    },
    () => {
      // 거부하거나 실패해도 화면은 그대로 동작한다
      locationState.value = 'denied'
    },
    { timeout: 8000 },
  )
}

/** 실제 API 호출 — 실패해도 화면이 죽지 않도록 에러를 상태로 받는다 */
const load = async (force = false) => {
  isLoading.value = true
  errorMessage.value = ''
  try {
    const { rows, at, stale } = await fetchWeather(undefined, force)
    // 데모는 배경 확인용이라 맨 뒤에 붙인다
    weatherList.value = [...rows, ...DEMO_ROWS]
    isStale.value = stale

    // 저장해 둔 값을 먼저 보여 줬다면, 뒤에서 조용히 새 값을 받아 바꿔 끼운다
    if (stale) setTimeout(() => load(true), 0)
    lastLoadedAt = at
    updatedAt.value = new Date(at).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch (error) {
    errorMessage.value = '날씨를 불러오지 못했습니다. 네트워크를 확인하고 다시 시도해 주세요.'
    isStale.value = false
    console.error('[weather] 불러오기 실패', error)
  } finally {
    isLoading.value = false
  }
}

/**
 * 10분마다 조용히 새로 받는다.
 * 다만 보고 있지 않은 탭에서까지 부르면 서버에 실례이므로,
 * 화면이 보일 때만 돌리고 다시 돌아왔을 때 한 번 맞춰 준다.
 */
const REFRESH_MS = 10 * 60 * 1000
let timer = null
let lastLoadedAt = 0

const startAutoRefresh = () => {
  stopAutoRefresh()
  timer = setInterval(() => {
    if (document.visibilityState === 'visible') load(true)
  }, REFRESH_MS)
}

const stopAutoRefresh = () => {
  if (timer) clearInterval(timer)
  timer = null
}

/** 탭으로 돌아왔는데 값이 오래됐으면 바로 맞춘다 */
const onVisible = () => {
  if (document.visibilityState !== 'visible') return
  if (Date.now() - lastLoadedAt > REFRESH_MS) load(true)
}

onBeforeUnmount(() => {
  stopAutoRefresh()
  document.removeEventListener('visibilitychange', onVisible)
})

onMounted(async () => {
  load()
  startAutoRefresh()
  document.addEventListener('visibilitychange', onVisible)
  // 이미 허용해 둔 사용자에게만 조용히 위치를 쓴다. 처음이면 버튼을 누를 때 묻는다.
  const status = await navigator.permissions?.query({ name: 'geolocation' }).catch(() => null)
  if (status?.state === 'granted') findMyLocation()
})

// 기존 핵심 비즈니스 로직(computed, watch)의 소유권은 안전하게 부모 콘텍스트가 격리 유지
const matched = computed(() => {
  const query = searchQuery.value.trim()
  return weatherList.value.filter((item) => !query || item.name.includes(query))
})

/** 지역 필터까지 적용하고, 현재 위치 → 즐겨찾기 → 나머지 순으로 세운다 */
const filteredWeatherList = computed(() => {
  const list = matched.value.filter(
    (item) => selectedRegion.value === '전체' || item.group === selectedRegion.value,
  )
  const rank = (item) => (item.id === hereId.value ? 0 : favorites.value.includes(item.id) ? 1 : 2)
  return [...list].sort((a, b) => rank(a) - rank(b))
})

/** 탭에 붙일 지역별 개수 — 검색어까지 반영해 실제로 보이는 수를 센다 */
const regionCounts = computed(() =>
  matched.value.reduce(
    (acc, item) => {
      acc[item.group] = (acc[item.group] ?? 0) + 1
      return acc
    },
    { 전체: matched.value.length },
  ),
)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredWeatherList.value.length / PAGE_SIZE)),
)

/** 지금 페이지에 보일 5곳 */
const pagedList = computed(() =>
  filteredWeatherList.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE),
)

/** 검색어·지역·보기를 바꾸면 1페이지로 되돌린다 */
watch([searchQuery, selectedRegion, viewMode], () => (page.value = 1))

/** 목록이 줄어 지금 페이지가 사라지면 마지막 페이지로 당긴다 */
watch(totalPages, (total) => {
  if (page.value > total) page.value = total
})

/**
 * 배경이 따라갈 날씨.
 *   ① 사용자가 고른 도시 → ② 현재 위치 도시 → ③ 둘 다 없으면 기본 배경
 */
/** 지금 고른 도시 (없으면 null) */
const selectedCity = computed(
  () => weatherList.value.find((item) => item.id === selectedCityId.value) ?? null,
)

const backdropCity = computed(
  () =>
    weatherList.value.find((item) => item.id === selectedCityId.value) ??
    weatherList.value.find((item) => item.id === hereId.value) ??
    null,
)

const backdropStatus = computed(
  () => backdropCity.value?.status ?? '',
)

const favoriteCount = computed(
  () => matched.value.filter((item) => favorites.value.includes(item.id)).length,
)

watch(selectedCityInfo, (newInfo) => {
  console.log(\`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "\${newInfo}"\`)
})

// ── 상세보기 — 시간별 예보 ──
const detailCityId = ref('')

const detailCity = computed(
  () => weatherList.value.find((item) => item.id === detailCityId.value) ?? null,
)

/** 같은 도시를 다시 누르면 닫는다 */
const showDetail = (cityName) => {
  const city = weatherList.value.find((item) => item.name === cityName)
  detailCityId.value = detailCityId.value === city?.id ? '' : (city?.id ?? '')
}
<\/script>

<template>
  <div class="dashboard-wrapper">
    <!-- 고른 도시(없으면 현재 위치)의 날씨를 배경으로 -->
    <WeatherBackdrop :status="backdropStatus" />

    <BaseDashboardCard>
      <SearchBar :current-query="searchQuery" @update-query="(val) => (searchQuery = val)" />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <!-- 보기 방식 — 같은 데이터를 지역 기준으로 볼지, 날씨 기준으로 볼지 -->
      <div class="view-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          :aria-selected="viewMode === 'region'"
          :class="{ active: viewMode === 'region' }"
          @click="viewMode = 'region'"
        >
          <UiIcon name="city" :size="16" /> 지역별 날씨 현황
        </button>
        <button
          type="button"
          role="tab"
          :aria-selected="viewMode === 'status'"
          :class="{ active: viewMode === 'status' }"
          @click="viewMode = 'status'"
        >
          <UiIcon name="droplet" :size="16" /> 날씨별 지역 현황
        </button>
      </div>

      <div class="tool-row">
        <p class="summary">
          <b>{{ matched.length }}</b>곳
          <span v-if="favoriteCount" class="fav-count">
            <UiIcon name="star" :size="12" :filled="true" /> {{ favoriteCount }}
          </span>
        </p>

        <button
          class="tool"
          type="button"
          :disabled="locationState === 'asking'"
          @click="findMyLocation"
        >
          <UiIcon name="location" :size="14" />
          {{ locationState === 'asking' ? '찾는 중…' : '내 위치' }}
        </button>
        <button class="tool" type="button" :disabled="isLoading" @click="load(true)">
          {{ isLoading ? '불러오는 중…' : '새로고침' }}
        </button>
      </div>

      <p v-if="isStale" class="hint stale">
        지금 서버 응답을 받지 못해 <b>{{ updatedAt }}에 받아 둔 값</b>을 보여 주고 있습니다.
        잠시 뒤 새로고침을 눌러 보세요.
      </p>

      <p v-if="locationState === 'denied'" class="hint">
        위치 권한이 없어 현재 위치를 표시하지 못했습니다. 나머지 기능은 그대로 쓸 수 있습니다.
      </p>

      <!-- 지역 탭은 지역별 보기에서만 의미가 있다 -->
      <RegionTabs
        v-if="viewMode === 'region'"
        :regions="[...REGIONS, '데모']"
        :current="selectedRegion"
        :counts="regionCounts"
        @select-region="(region) => (selectedRegion = region)"
      />

      <!-- 불러오기 실패 -->
      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
        <button type="button" @click="load(true)">다시 시도</button>
      </p>

      <!-- 첫 로딩 — 빈 화면 대신 카드 모양을 먼저 깔아 둔다 -->
      <div v-else-if="isLoading && !weatherList.length" class="skeleton">
        <div v-for="n in 5" :key="n" class="skeleton-card">
          <span class="sk-tile" />
          <span class="sk-lines">
            <i class="sk-line wide" />
            <i class="sk-line" />
          </span>
          <span class="sk-metrics">
            <i class="sk-pill" />
            <i class="sk-pill" />
          </span>
        </div>
      </div>

      <!-- ① 지역별 -->
      <template v-else-if="viewMode === 'region'">
        <template v-for="item in pagedList" :key="item.id">
          <WeatherCard
            :city-item="item"
            :favorite="favorites.includes(item.id)"
            :here="item.id === hereId"
            :open="item.id === detailCityId"
          :selected="item.id === selectedCityId"
            @select-card="selectCity"
            @click-detail="showDetail"
            @toggle-favorite="toggleFavorite"
          />

          <!-- 시간별 예보는 누른 카드 바로 아래에 펼쳐진다 -->
          <HourlyDetail
            v-if="item.id === detailCityId"
            :city="detailCity"
            @close="detailCityId = ''"
          />
        </template>

        <p v-if="filteredWeatherList.length === 0" class="empty-message">
          <UiIcon name="empty" :size="22" />
          검색 결과와 일치하는 도시가 없습니다.
        </p>

        <!-- 5곳이 넘으면 페이지로 나눠 본다 -->
        <nav v-if="totalPages > 1" class="pager" aria-label="목록 페이지">
          <button type="button" :disabled="page === 1" aria-label="이전" @click="page--">‹</button>
          <button
            v-for="n in totalPages"
            :key="n"
            type="button"
            :class="{ active: n === page }"
            :aria-current="n === page ? 'page' : undefined"
            @click="page = n"
          >
            {{ n }}
          </button>
          <button
            type="button"
            :disabled="page === totalPages"
            aria-label="다음"
            @click="page++"
          >
            ›
          </button>
        </nav>
      </template>

      <!-- ② 날씨별 -->
      <template v-else>
        <!-- 고른 곳은 맨 위에 카드로 올려 시간별까지 볼 수 있게 한다 -->
        <template v-if="selectedCity">
          <WeatherCard
            :city-item="selectedCity"
            :favorite="favorites.includes(selectedCity.id)"
            :here="selectedCity.id === hereId"
            :open="selectedCity.id === detailCityId"
            :selected="true"
            @select-card="selectCity"
            @click-detail="showDetail"
            @toggle-favorite="toggleFavorite"
          />
          <HourlyDetail
            v-if="selectedCity.id === detailCityId"
            :city="detailCity"
            @close="detailCityId = ''"
          />
        </template>

          <WeatherByStatus
          :list="matched"
          :favorites="favorites"
          :here-id="hereId"
          :selected-id="selectedCityId"
          @select-card="selectCity"
          @toggle-favorite="toggleFavorite"
        />
      </template>
    </BaseDashboardCard>

    <div class="status-bar">
      <span>{{ selectedCityInfo }}</span>
      <small v-if="updatedAt" class="stamp">{{ updatedAt }} 기준 · Open-Meteo</small>
    </div>
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  /* 원본은 width: 600px 고정이지만, 좁은 화면에서 넘치지 않도록 max-width로 바꿈 */
  max-width: 660px;
  margin: 0 auto;
}

/* 배경(z-index 0) 위에 카드가 오도록 */
.dashboard-wrapper > *:not(.backdrop) {
  position: relative;
  z-index: 1;
}

/* ── 보기 방식 탭 ── */
.view-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 14px;
  padding: 4px;
  border-radius: 999px;
  background: var(--paper);
}

.view-tabs button {
  display: inline-flex;
  flex: 1;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 0;
  border-radius: 999px;
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  transition:
    color 0.15s ease,
    background 0.15s ease;
}

.view-tabs button:hover {
  color: var(--accent);
}

.view-tabs button.active {
  color: var(--accent);
  background: var(--surface);
  box-shadow: 0 1px 4px rgb(15 23 42 / 8%);
}

/* ── 도구 줄 ── */
.tool-row {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  margin-bottom: 12px;
}

.summary {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 auto 0 2px;
  color: var(--muted);
  font-size: 12.5px;
}

.summary b {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 14px;
}

.fav-count {
  display: inline-flex;
  gap: 3px;
  align-items: center;
  color: #b8862a;
  font-family: var(--font-mono);
  font-weight: 700;
}

.tool {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.tool:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.tool:disabled {
  cursor: progress;
  opacity: 0.6;
}

.hint {
  margin: 0 0 12px;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--faint);
  font-size: 12px;
}

.hint.stale {
  border: 1px solid var(--signal);
  background: var(--signal-tint);
  color: var(--signal);
}

.empty-message {
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  color: var(--faint);
  font-size: 13.5px;
}

.error-message {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 24px 16px;
  border: 1px dashed var(--signal);
  border-radius: 12px;
  color: var(--signal);
  font-size: 13px;
  text-align: center;
}

.error-message button {
  padding: 5px 12px;
  border: 1px solid var(--signal);
  border-radius: 999px;
  color: var(--signal);
  background: transparent;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
}

/* ── 첫 로딩 스켈레톤 ── */
.skeleton {
  display: grid;
  gap: 9px;
}

.skeleton-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
}

.sk-tile {
  width: 50px;
  height: 50px;
  border-radius: 16px;
}

.sk-lines {
  display: grid;
  gap: 7px;
}

.sk-line {
  width: 90px;
  height: 11px;
  border-radius: 999px;
}

.sk-line.wide {
  width: 130px;
  height: 14px;
}

.sk-metrics {
  display: grid;
  gap: 5px;
}

.sk-pill {
  width: 120px;
  height: 22px;
  border-radius: 999px;
}

/* 은은하게 흐르는 빛 — 멈춰 있지 않다는 신호 */
.sk-tile,
.sk-line,
.sk-pill {
  background: linear-gradient(
    90deg,
    var(--paper) 25%,
    color-mix(in srgb, var(--line) 60%, transparent) 37%,
    var(--paper) 63%
  );
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
}

@keyframes shimmer {
  from {
    background-position: 100% 0;
  }
  to {
    background-position: -100% 0;
  }
}

/* ── 페이지 버튼 ── */
.pager {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin-top: 14px;
}

.pager button {
  min-width: 30px;
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

.pager button:hover:not(:disabled):not(.active) {
  border-color: var(--accent);
  color: var(--accent);
}

.pager button.active {
  border-color: var(--accent);
  color: var(--on-accent);
  background: var(--accent);
}

.pager button:disabled {
  cursor: default;
  opacity: 0.35;
}

/* 상태바 — 화면 맨 아래에서 결과를 알려주는 줄 */
.status-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  color: var(--ink-soft);
  font-size: 13.5px;
}

.status-bar::before {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--accent);
  content: '';
}

.stamp {
  margin-left: auto;
  color: var(--faint);
  font-size: 11.5px;
}
</style>

<!-- 배경은 이 대시보드가 아니라 "실행 프레임 전체"를 덮어야 한다.
     그래서 배경을 담을 기준점을 바깥 컨테이너에 준다. scoped 밖에 두는 이유다. -->
<style>
.stage-body:has(.dashboard-wrapper),
.result-stage:has(.dashboard-wrapper) {
  position: relative;
}
</style>
`,en=`<script setup>
import { useRoute, useRouter } from 'vue-router'

/**
 * 과제 4 — 서비스 소개 (/about)
 * 주소에 직접 연결되는 정적 페이지다.
 */
const route = useRoute()
const router = useRouter()

/** 교안 172쪽 handleGoHome — 메인으로 (push) */
const goHome = () => {
  router.push({ name: 'a4-home', params: { stageId: route.params.stageId ?? '4' } })
}
<\/script>

<template>
  <div class="about">
    <h3>이 서비스는</h3>
    <p>
      전국 주요 도시의 날씨를 한 화면에서 보여 주는 대시보드입니다. 도시를 고르면 습도 · 풍속 ·
      기압 같은 상세 관측값을 확인할 수 있습니다.
    </p>

    <ul>
      <li>메인 화면은 <code>/</code>, 상세는 <code>/weather/:cityId</code> 로 이어집니다.</li>
      <li>주소를 그대로 복사해 보내면 같은 화면이 열립니다.</li>
      <li>없는 주소로 들어오면 안내 페이지가 대신 나옵니다.</li>
    </ul>

    <button type="button" @click="goHome">← 메인 대시보드로 돌아가기</button>
  </div>
</template>

<style scoped>
.about {
  padding: 22px 24px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}

h3 {
  margin: 0 0 10px;
  color: var(--ink);
  font-size: 18px;
  font-weight: 700;
}

p {
  margin: 0 0 14px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.8;
}

ul {
  margin: 0 0 18px;
  padding-left: 18px;
  color: var(--muted);
}

li {
  margin-bottom: 6px;
  font-size: 13px;
  line-height: 1.7;
}

code {
  padding: 1px 5px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: var(--paper);
  font-family: var(--font-mono);
  font-size: 0.92em;
}

button {
  padding: 9px 15px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  background: var(--accent-tint);
  color: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}
</style>
`,tn=`<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseDashboardCard from '../weather/BaseDashboardCard.vue'
import WeatherIcon from '../weather/WeatherIcon.vue'
import UiIcon from '../weather/UiIcon.vue'
import { findMockCity } from './mockCities'

/**
 * 과제 4 — 도시 상세 (/weather/:cityId)
 *
 * 주소의 :cityId 자리에 들어온 값을 useRoute()로 읽어,
 * Mount 시점에 Mock Data에서 해당 도시를 고른다.
 */
const route = useRoute()
const router = useRouter()

const city = ref(null)

onMounted(() => {
  city.value = findMockCity(route.params.cityId)
})

/** 아이콘 받침 색조 — 메인 카드와 같은 규칙 */
const tone = computed(() => {
  const status = city.value?.status ?? ''
  if (status.includes('맑')) return 'warm'
  if (status.includes('비') || status.includes('눈')) return 'cool'
  return 'neutral'
})

/** 교안 172쪽 handleGoBack — 1단계 이전 주소 기록으로 */
const goBack = () => router.go(-1)
<\/script>

<template>
  <BaseDashboardCard>
    <template v-if="city">
      <header class="head">
        <div class="icon-tile" :class="tone">
          <WeatherIcon :status="city.status" :size="34" />
        </div>
        <div class="title">
          <p class="eyebrow">
            {{ city.region }} · <code>{{ route.params.cityId }}</code>
          </p>
          <h3>{{ city.name }}</h3>
          <p class="status">{{ city.status }}</p>
        </div>
        <p class="temp">{{ city.temp }}<span class="unit">°C</span></p>
      </header>

      <dl class="observation">
        <div><dt>습도</dt><dd>{{ city.humidity }}<i>%</i></dd></div>
        <div><dt>풍속</dt><dd>{{ city.wind }}<i>m/s</i></dd></div>
        <div><dt>기압</dt><dd>{{ city.pressure }}<i>hPa</i></dd></div>
        <div><dt>가시거리</dt><dd>{{ city.visibility }}<i>km</i></dd></div>
        <div><dt>미세먼지</dt><dd>{{ city.dust }}</dd></div>
        <div><dt>일출 · 일몰</dt><dd class="small">{{ city.sunrise }} · {{ city.sunset }}</dd></div>
      </dl>

      <footer class="foot">
        <p v-if="route.query.from" class="from">
          <span class="tag">route.query</span>
          <code>{{ route.query }}</code>
        </p>
        <button type="button" @click="goBack">← 이전 화면으로</button>
      </footer>
    </template>

    <!-- 주소에 없는 도시 코드가 들어온 경우 -->
    <div v-else class="missing">
      <UiIcon name="empty" :size="24" />
      <p><code>{{ route.params.cityId }}</code> 에 해당하는 도시가 없습니다.</p>
      <button type="button" @click="goBack">← 이전 화면으로</button>
    </div>
  </BaseDashboardCard>
</template>

<style scoped>
.head {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  margin-bottom: 18px;
}

.icon-tile {
  display: grid;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  place-items: center;
}

.icon-tile.warm {
  background: #fdf2d5;
}

.icon-tile.cool {
  background: #e5eff9;
}

.icon-tile.neutral {
  background: #edf0f3;
}

.eyebrow {
  margin: 0 0 3px;
  color: var(--faint);
  font-size: 11.5px;
}

.eyebrow code,
.from code {
  font-family: var(--font-mono);
}

h3 {
  margin: 0 0 2px;
  color: var(--ink);
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.status {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
}

.temp {
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.unit {
  margin-left: 2px;
  color: var(--faint);
  font-size: 15px;
  font-weight: 500;
}

.observation {
  display: grid;
  gap: 8px;
  margin: 0;
  grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
}

.observation > div {
  padding: 12px 15px;
  border-radius: 13px;
  background: var(--paper);
}

dt {
  margin-bottom: 4px;
  color: var(--faint);
  font-size: 11.5px;
}

dd {
  display: flex;
  gap: 4px;
  align-items: baseline;
  margin: 0;
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 17px;
  font-weight: 700;
}

dd i {
  color: var(--faint);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
}

dd.small {
  font-size: 14px;
}

.foot {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
}

.from {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin: 0;
  padding: 7px 13px;
  border-radius: 999px;
  background: var(--paper);
  font-size: 12px;
}

.tag {
  color: var(--faint);
  font-size: 10.5px;
  font-weight: 700;
}

.foot button,
.missing button {
  margin-left: auto;
  padding: 9px 15px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
}

.foot button:hover,
.missing button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.missing {
  display: grid;
  gap: 12px;
  padding: 30px 0;
  justify-items: center;
  color: var(--faint);
  text-align: center;
}

.missing p {
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
}

.missing button {
  margin: 0;
}

@media (max-width: 480px) {
  .head {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .temp {
    grid-column: 2;
  }
}
</style>
`,nn=`<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseDashboardCard from '../weather/BaseDashboardCard.vue'
import SearchBar from '../weather/SearchBar.vue'
import WeatherCard from '../weather/WeatherCard.vue'
import UiIcon from '../weather/UiIcon.vue'
import { MOCK_CITIES } from './mockCities'

/**
 * 과제 4 — 메인 대시보드 (/ 경로)
 * WeatherParent를 대신하는 "페이지 단위 최상위 컴포넌트"다.
 *
 * 화면 부품은 components/ 의 것을 그대로 가져다 쓴다.
 * views 는 페이지를 조립하는 곳, 재사용 부품은 components 에 두는 구분이다.
 *
 * 이전 과제에서 상세보기는 window.alert() 였다.
 * 이제는 라우터로 상세 페이지에 다녀온다 (Programmatic Navigation).
 */
const route = useRoute()
const router = useRouter()

const searchQuery = ref('')
const selectedId = ref('')

const filteredCities = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) return MOCK_CITIES
  return MOCK_CITIES.filter((city) => city.name.includes(query))
})

/**
 * 상세보기 — alert 대신 주소를 옮긴다.
 * 교안 172쪽의 handleAdvancedMove 와 같은 형태다.
 */
const goDetail = (cityName) => {
  const city = MOCK_CITIES.find((item) => item.name === cityName)
  if (!city) return
  router.push({
    name: 'a4-detail', // 라우터 설정에 등록된 고유 Name
    params: { stageId: route.params.stageId ?? '4', cityId: city.id }, // :cityId 자리에 매핑
    query: { from: 'home' }, // 주소창 뒤에 ?from=home
  })
}
<\/script>

<template>
  <div class="home">
    <BaseDashboardCard>
      <SearchBar :current-query="searchQuery" @update-query="(val) => (searchQuery = val)" />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <h3><UiIcon name="city" :size="19" /> 지역별 날씨 현황</h3>

      <WeatherCard
        v-for="city in filteredCities"
        :key="city.id"
        :city-item="city"
        :selected="city.id === selectedId"
        detail-label="상세보기"
        @select-card="(id) => (selectedId = selectedId === id ? '' : id)"
        @click-detail="goDetail"
      />

      <p v-if="!filteredCities.length" class="empty">
        <UiIcon name="empty" :size="22" />
        검색 결과와 일치하는 도시가 없습니다.
      </p>
    </BaseDashboardCard>
  </div>
</template>

<style scoped>
.home {
  display: grid;
  gap: 14px;
}

h3 {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 0 14px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.empty {
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  color: var(--faint);
  font-size: 13.5px;
}
</style>
`,rn=`<script setup>
import { useRoute, useRouter } from 'vue-router'

/**
 * 과제 4 — 없는 주소 (Catch-all Route)
 * routes 배열 맨 마지막의 /:pathMatch(.*)* 가 여기로 보낸다.
 */
const route = useRoute()
const router = useRouter()

const goHome = () => {
  router.push({ name: 'a4-home', params: { stageId: route.params.stageId ?? '4' } })
}
<\/script>

<template>
  <div class="missing">
    <p class="code">404</p>
    <h3>그런 페이지는 없습니다</h3>
    <p class="path">
      찾으신 주소 <code>{{ route.fullPath }}</code>
    </p>
    <button type="button" @click="goHome">← 메인 대시보드로 돌아가기</button>
  </div>
</template>

<style scoped>
.missing {
  padding: 46px 24px;
  border: 1px dashed var(--signal);
  border-radius: 14px;
  background: var(--surface);
  text-align: center;
}

.code {
  margin: 0 0 8px;
  color: var(--signal);
  font-family: var(--font-mono);
  font-size: 34px;
  font-weight: 800;
}

h3 {
  margin: 0 0 8px;
  color: var(--ink);
  font-size: 18px;
}

.path {
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 12.5px;
}

.path code {
  padding: 2px 8px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: var(--paper);
  font-family: var(--font-mono);
  overflow-wrap: anywhere;
}

button {
  padding: 9px 15px;
  border: 1px solid var(--accent);
  border-radius: 999px;
  background: var(--accent-tint);
  color: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}
</style>
`,an=`<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

/**
 * 과제 4 결과물의 껍데기 — 교안의 App.vue 역할.
 *
 *   내비게이션 바 : <RouterLink>
 *   메인 콘텐츠   : <RouterView />
 *
 * 이 사이트 안에서 돌아가야 하므로, 과제의 화면들은
 * /project/:stageId 아래의 자식 경로로 등록되어 있다.
 * 원리는 교안과 같다 — 주소가 바뀌면 RouterView 자리가 갈아끼워진다.
 */
const route = useRoute()

/** 자식 경로로 이동할 때 stageId 를 유지해야 한다 */
const stageId = computed(() => route.params.stageId ?? '4')
<\/script>

<template>
  <div class="app">
    <!-- 내비게이션 바 -->
    <nav class="nav" role="tablist">
      <RouterLink
        :to="{ name: 'a4-home', params: { stageId } }"
        exact-active-class="on"
      >
        홈
      </RouterLink>
      <RouterLink :to="{ name: 'a4-about', params: { stageId } }" active-class="on">
        소개
      </RouterLink>
      <code class="url">{{ route.path }}</code>
    </nav>

    <!-- 메인 콘텐츠 — 주소에 맞는 화면이 여기 놓인다 -->
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  display: grid;
  gap: 14px;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  padding: 4px;
  border-radius: 999px;
  background: var(--paper);
}

.nav a {
  padding: 9px 22px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition:
    color 0.15s ease,
    background 0.15s ease;
}

.nav a:hover {
  color: var(--accent);
}

.nav a.on {
  color: var(--accent);
  background: var(--surface);
  box-shadow: 0 1px 4px rgb(15 23 42 / 8%);
}

.url {
  margin-left: auto;
  padding: 4px 13px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
}
</style>
`,on=`/**
 * 과제 4용 Mock Data.
 * 실제 API 대신 도시 코드(cityId)로 찾아 쓰는 임시 데이터다.
 * WeatherDetailView 가 route.params.cityId 로 여기서 한 건을 골라낸다.
 */
export const MOCK_CITIES = [
  {
    id: 'city_01',
    name: '서울',
    region: '서울',
    temp: 28,
    humidity: 45,
    status: '맑음',
    wind: 2.4,
    pressure: 1012,
    visibility: 12,
    dust: '보통',
    sunrise: '05:32',
    sunset: '19:48',
  },
  {
    id: 'city_02',
    name: '수원',
    region: '경기',
    temp: 24,
    humidity: 88,
    status: '비',
    wind: 3.1,
    pressure: 1005,
    visibility: 4,
    dust: '좋음',
    sunrise: '05:34',
    sunset: '19:47',
  },
  {
    id: 'city_03',
    name: '부산',
    region: '경남',
    temp: 26,
    humidity: 72,
    status: '구름',
    wind: 4.6,
    pressure: 1009,
    visibility: 9,
    dust: '보통',
    sunrise: '05:21',
    sunset: '19:36',
  },
  {
    id: 'city_04',
    name: '강릉',
    region: '강원',
    temp: 21,
    humidity: 92,
    status: '안개',
    wind: 1.2,
    pressure: 1011,
    visibility: 2,
    dust: '좋음',
    sunrise: '05:24',
    sunset: '19:41',
  },
  {
    id: 'city_05',
    name: '대구',
    region: '경북',
    temp: 31,
    humidity: 33,
    status: '맑음',
    wind: 1.8,
    pressure: 1008,
    visibility: 14,
    dust: '나쁨',
    sunrise: '05:26',
    sunset: '19:39',
  },
  {
    id: 'city_06',
    name: '제주',
    region: '제주',
    temp: 29,
    humidity: 64,
    status: '소나기',
    wind: 5.2,
    pressure: 1006,
    visibility: 6,
    dust: '좋음',
    sunrise: '05:38',
    sunset: '19:44',
  },
]

/** 도시 코드로 한 건 찾기. 없으면 null */
export const findMockCity = (cityId) => MOCK_CITIES.find((c) => c.id === cityId) ?? null
`,sn=`<template>
  <div class="base-dashboard-card">
    <slot></slot>
  </div>
</template>

<style scoped>
/* 껍데기는 색을 거의 쓰지 않는다. 안에 들어올 내용이 주인공이기 때문. */
.base-dashboard-card {
  padding: 22px;
  margin-bottom: 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
}
</style>
`,cn=`<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import WeatherIcon from './WeatherIcon.vue'
import UiIcon from './UiIcon.vue'
import { fetchHourly, findCity, toDateKey, shiftDate, DATE_RANGE } from './weatherApi'

/**
 * 시간별 예보 패널.
 * 어느 도시를 볼지는 부모가 정하고(props), 닫는 것도 부모에게 알린다(emits).
 * 다만 "그 도시의 시간별 데이터"는 이 화면에서만 쓰므로 여기서 직접 불러온다.
 */
const props = defineProps({
  city: { type: Object, default: null },
})

const emit = defineEmits(['close'])

const rows = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

const TODAY = toDateKey(new Date())
const currentHour = new Date().getHours()

/** 오늘은 지금을 가운데 두고 앞 6시간 ~ 뒤 12시간만 본다 */
const HOURS_BEFORE = 6
const HOURS_AFTER = 12

const dateKey = ref(TODAY)
const hoursEl = ref(null)
const isToday = computed(() => dateKey.value === TODAY)
const isPast = computed(() => dateKey.value < TODAY)

const load = async () => {
  if (!props.city) return
  isLoading.value = true
  errorMessage.value = ''
  try {
    const city = findCity(props.city.id)

    if (isToday.value) {
      // 지금 +12시간이 자정을 넘길 수 있으므로 내일까지 받아 온 뒤 잘라 쓴다
      const all = await fetchHourly(city, dateKey.value, shiftDate(dateKey.value, 1))
      const now = new Date()
      const from = new Date(now).setHours(now.getHours() - HOURS_BEFORE, 0, 0, 0)
      const to = new Date(now).setHours(now.getHours() + HOURS_AFTER, 0, 0, 0)
      rows.value = all.filter((row) => {
        const t = new Date(row.time).getTime()
        return t >= from && t <= to
      })
    } else {
      // 오늘이 아니면 그날 하루를 통째로 본다
      rows.value = await fetchHourly(city, dateKey.value)
    }
  } catch (error) {
    errorMessage.value = '시간별 날씨를 불러오지 못했습니다.'
    rows.value = []
    console.error('[weather] 시간별 조회 실패', error)
  } finally {
    isLoading.value = false
  }

  // 오늘이면 지금 시각이 화면 가운데 오도록 가로 스크롤을 맞춰 준다
  if (isToday.value) {
    await nextTick()
    const el = hoursEl.value
    const now = el?.querySelector('.now')
    if (el && now) el.scrollLeft = now.offsetLeft - el.clientWidth / 2 + now.offsetWidth / 2
  }
}

/** 도시가 바뀌거나 날짜를 옮기면 새로 불러온다 */
watch(() => [props.city?.id, dateKey.value], load, { immediate: true })

/** 다른 도시를 열면 날짜는 오늘로 되돌린다 */
watch(
  () => props.city?.id,
  () => (dateKey.value = TODAY),
)

const move = (days) => {
  const next = shiftDate(dateKey.value, days)
  if (next >= DATE_RANGE.min && next <= DATE_RANGE.max) dateKey.value = next
}

/** 2026-07-20 → 7월 20일 (월) */
const dateLabel = computed(() => {
  const d = new Date(\`\${dateKey.value}T00:00:00\`)
  const weekday = ['일', '월', '화', '수', '목', '금', '토'][d.getDay()]
  return \`\${d.getMonth() + 1}월 \${d.getDate()}일 (\${weekday})\`
})

/** 막대 높이를 정하려면 24시간 중 최저·최고가 필요하다 */
const range = computed(() => {
  if (!rows.value.length) return { min: 0, max: 1 }
  const temps = rows.value.map((r) => r.temp)
  const min = Math.min(...temps)
  const max = Math.max(...temps)
  return { min, max: max === min ? min + 1 : max }
})

const heightOf = (temp) =>
  Math.round(26 + ((temp - range.value.min) / (range.value.max - range.value.min)) * 34)
<\/script>

<template>
  <section v-if="city" class="detail">
    <header class="detail-head">
      <WeatherIcon :status="city.status" :size="26" />
      <div>
        <h4>
          {{ city.name }}
          <span v-if="city.region !== city.name" class="sido">{{ city.region }}</span>
        </h4>
        <p class="current">지금 {{ city.temp }}°C · 습도 {{ city.humidity }}% · {{ city.status }}</p>
      </div>
      <button class="close" type="button" aria-label="닫기" @click="emit('close')">✕</button>
    </header>

    <!-- 날짜 선택 — 과거 90일부터 미래 14일까지 -->
    <div class="date-bar">
      <button
        type="button"
        class="step"
        :disabled="shiftDate(dateKey, -1) < DATE_RANGE.min"
        aria-label="하루 전"
        @click="move(-1)"
      >
        ‹
      </button>

      <label class="date-field">
        <span class="date-label">
          {{ dateLabel }}
          <b v-if="isToday" class="tag today">오늘</b>
          <b v-else-if="isPast" class="tag past">지난 날씨</b>
          <b v-else class="tag future">예보</b>
        </span>
        <input v-model="dateKey" type="date" :min="DATE_RANGE.min" :max="DATE_RANGE.max" />
      </label>

      <button
        type="button"
        class="step"
        :disabled="shiftDate(dateKey, 1) > DATE_RANGE.max"
        aria-label="하루 뒤"
        @click="move(1)"
      >
        ›
      </button>

      <button v-if="!isToday" type="button" class="today-btn" @click="dateKey = TODAY">
        오늘로
      </button>
    </div>

    <p v-if="isLoading" class="state">시간별 예보를 불러오는 중…</p>
    <p v-else-if="errorMessage" class="state error">{{ errorMessage }}</p>

    <template v-else-if="rows.length">
      <p class="axis">
        <span v-if="isToday">지금 기준 앞뒤 시간 · </span>최저 {{ range.min }}°C ~ 최고
        {{ range.max }}°C
      </p>

      <!-- 가로로 스크롤되는 시간별 막대 -->
      <ul ref="hoursEl" class="hours">
        <li
          v-for="row in rows"
          :key="row.time"
          :class="{ now: isToday && row.hour === currentHour }"
        >
          <!-- 막대는 바닥을 맞추고 위로 자란다. 숫자도 막대 위에 붙어 함께 오르내린다 -->
          <span class="bar-slot">
            <span class="temp">{{ row.temp }}°</span>
            <span class="bar" :style="{ height: heightOf(row.temp) + 'px' }" />
          </span>
          <WeatherIcon :status="row.status" :size="18" />
          <span v-if="row.rainChance > 0" class="rain">
            <UiIcon name="droplet" :size="10" />{{ row.rainChance }}%
          </span>
          <span v-else class="rain none">–</span>
          <span class="hour">
            {{ isToday && row.hour === currentHour ? '지금' : row.hour + '시' }}
          </span>
          <span v-if="row.hour === 0" class="daymark">다음날</span>
        </li>
      </ul>
    </template>
  </section>
</template>

<style scoped>
.detail {
  margin-bottom: 12px;
  padding: 14px 16px;
  border: 1px solid var(--accent);
  border-radius: 16px;
  background: var(--surface);
}

.detail-head {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 12px;
}

.detail-head h4 {
  margin: 0 0 2px;
  color: var(--ink);
  font-size: 16px;
  font-weight: 700;
}

.sido {
  margin-left: 5px;
  color: var(--faint);
  font-size: 11.5px;
  font-weight: 500;
}

.current {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
}

.close {
  margin-left: auto;
  padding: 4px 9px;
  border: 0;
  border-radius: 8px;
  color: var(--faint);
  background: transparent;
  cursor: pointer;
  font-size: 13px;
}

.close:hover {
  background: var(--paper);
}

.axis {
  margin: 0 0 10px;
  color: var(--faint);
  font-size: 11.5px;
}

.state {
  margin: 0;
  padding: 22px 0;
  color: var(--faint);
  font-size: 13px;
  text-align: center;
}

.state.error {
  color: var(--signal);
}

/* ── 날짜 선택 ── */
.date-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  margin-bottom: 12px;
}

.step {
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font-size: 15px;
  line-height: 1;
}

.step:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.step:disabled {
  cursor: default;
  opacity: 0.35;
}

/* 날짜 글자를 누르면 달력이 열리도록 input을 투명하게 겹쳐 둔다 */
.date-field {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 5px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  cursor: pointer;
}

.date-field:hover {
  border-color: var(--accent);
}

.date-label {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  color: var(--ink);
  font-size: 12.5px;
  font-weight: 700;
}

.date-field input {
  position: absolute;
  inset: 0;
  border: 0;
  background: transparent;
  color: transparent;
  cursor: pointer;
  font: inherit;
  opacity: 0;
}

.tag {
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
}

.tag.today {
  color: var(--on-accent);
  background: var(--accent);
}

.tag.past {
  color: var(--slate);
  background: var(--slate-tint);
}

.tag.future {
  color: #b8672a;
  background: #fdf0e0;
}

.today-btn {
  padding: 5px 11px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 11.5px;
  font-weight: 600;
}

.today-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* 시간별 막대 — 좁으면 가로로 밀어서 본다 */
.hours {
  /* 자식의 offsetLeft가 이 목록 기준이 되도록 위치 지정 요소로 만든다 */
  position: relative;
  display: flex;
  gap: 4px;
  overflow-x: auto;
  margin: 0;
  padding: 0 0 6px;
  list-style: none;
  scrollbar-width: thin;
}

.hours li {
  display: grid;
  flex: none;
  width: 46px;
  gap: 4px;
  justify-items: center;
  padding: 8px 2px;
  border-radius: 12px;
}

/* 지금 시각은 배경으로 구분 */
.hours li.now {
  background: var(--accent-tint);
}

.temp {
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 12.5px;
  font-weight: 700;
}

/* 막대가 놓이는 자리 — 높이를 고정해 바닥선을 맞춘다 */
.bar-slot {
  display: flex;
  height: 84px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
}

/* 기온이 높을수록 막대가 길어진다 */
.bar {
  width: 5px;
  border-radius: 999px;
  background: linear-gradient(to top, var(--accent), color-mix(in srgb, var(--signal) 70%, transparent));
}

.rain {
  display: inline-flex;
  gap: 2px;
  align-items: center;
  color: #3d7fc1;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
}

.rain.none {
  color: var(--line-strong);
}

.hour {
  color: var(--muted);
  font-size: 11px;
}

.daymark {
  color: var(--faint);
  font-size: 9.5px;
}

.hours li.now .hour {
  color: var(--accent);
  font-weight: 700;
}
</style>
`,ln=`<script setup>
/**
 * 지역 선택 탭.
 * 어느 지역이 선택됐는지는 부모가 알고 있고(props),
 * 이 컴포넌트는 "눌렸다"고 알리기만 한다(emits).
 */
defineProps({
  regions: { type: Array, required: true },
  current: { type: String, default: '전체' },
  counts: { type: Object, default: () => ({}) },
})

defineEmits(['select-region'])
<\/script>

<template>
  <div class="tabs" role="tablist">
    <button
      v-for="region in ['전체', ...regions]"
      :key="region"
      type="button"
      role="tab"
      class="tab"
      :class="{ active: region === current }"
      :aria-selected="region === current"
      @click="$emit('select-region', region)"
    >
      {{ region }}
      <span v-if="counts[region]" class="count">{{ counts[region] }}</span>
    </button>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.tab {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  transition:
    border-color 0.15s ease,
    color 0.15s ease,
    background 0.15s ease;
}

.tab:hover {
  border-color: var(--accent-line);
  color: var(--accent);
}

.tab.active {
  border-color: var(--accent);
  color: var(--on-accent);
  background: var(--accent);
}

.count {
  padding: 1px 6px;
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10.5px;
  font-weight: 700;
}

.tab.active .count {
  background: rgb(255 255 255 / 25%);
  color: var(--on-accent);
}
</style>
`,un=`<script setup>
import UiIcon from './UiIcon.vue'

// 1. 상위로 입력 텍스트를 전달할 커스텀 이벤트 등록 (매크로)
defineEmits(['update-query'])

// 2. 상위로부터 현재 검색 상태 값을 수신 (한글 동기화 상태 유지용)
defineProps({
  currentQuery: {
    type: String,
    default: '',
  },
})
<\/script>

<template>
  <div class="search-inner">
    <h3>도시 검색</h3>

    <!-- 돋보기를 입력칸 안에 두어 제목을 깔끔하게 비운다 -->
    <div class="field">
      <UiIcon name="search" class="field-icon" />
      <input
        type="text"
        :value="currentQuery"
        placeholder="검색할 도시 이름 입력"
        @input="$emit('update-query', $event.target.value)"
      />
    </div>

    <p v-if="currentQuery" class="echo">
      검색 중인 도시: <strong>{{ currentQuery }}</strong>
    </p>
  </div>
</template>

<style scoped>
.search-inner h3 {
  margin: 0 0 14px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* 아이콘을 겹쳐 놓기 위한 기준점 */
.field {
  position: relative;
}

.field-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  color: var(--faint);
  transform: translateY(-50%);
  pointer-events: none;
  transition: color 0.15s ease;
}

.field:focus-within .field-icon {
  color: var(--accent);
}

.search-inner input {
  width: 100%;
  padding: 13px 16px 13px 42px;
  border: 1px solid var(--line);
  border-radius: 10px;
  color: var(--ink);
  background: var(--paper);
  font: inherit;
  font-size: 15px;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.search-inner input::placeholder {
  color: var(--faint);
}

.search-inner input:focus {
  border-color: var(--accent);
  background: var(--surface);
  outline: none;
}

.echo {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.search-inner strong {
  color: var(--accent);
  font-weight: 700;
}
</style>
`,dn=`<script setup>
/**
 * 화면 조작을 돕는 UI 아이콘.
 *
 * 이 대시보드는 아이콘 체계를 둘로 나눠서 쓴다.
 *   · 날씨 상태(데이터) → WeatherIcon.vue 의 컬러 PNG
 *   · 화면 안내(UI)     → 이 파일의 단색 선 아이콘
 * 섞어 쓰면 투박해 보이므로 역할이 다르면 체계도 다르게 둔다.
 */
defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 18 },
  /** 별표처럼 "켜짐" 상태를 색으로 채워야 하는 아이콘에 쓴다 */
  filled: { type: Boolean, default: false },
})
<\/script>

<template>
  <svg
    class="ui-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="filled ? 'currentColor' : 'none'"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <!-- 돋보기 -->
    <template v-if="name === 'search'">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </template>

    <!-- 도시 건물 -->
    <template v-else-if="name === 'city'">
      <path d="M3 21h18" />
      <path d="M5 21V8l6-4v17" />
      <path d="M11 21V11h8v10" />
      <path d="M8 11v0M8 15v0M15 15v0M15 18v0" />
    </template>

    <!-- 온도계 -->
    <template v-else-if="name === 'thermometer'">
      <path d="M14 14.76V4.5a2.5 2.5 0 0 0-5 0v10.26a4.5 4.5 0 1 0 5 0Z" />
      <path d="M11.5 8v6.5" />
    </template>

    <!-- 물방울 (습도) -->
    <template v-else-if="name === 'droplet'">
      <path d="M12 3.2 6.9 8.6a7 7 0 1 0 10.2 0Z" />
    </template>

    <!-- 별표 (즐겨찾기) -->
    <template v-else-if="name === 'star'">
      <path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 16.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85Z" />
    </template>

    <!-- 현재 위치 -->
    <template v-else-if="name === 'location'">
      <path d="M20 10c0 5.2-8 12-8 12s-8-6.8-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </template>

    <!-- 체크 -->
    <template v-else-if="name === 'check'">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </template>

    <!-- 결과 없음 — 빈 돋보기 -->
    <template v-else-if="name === 'empty'">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
      <path d="M8.5 11h5" />
    </template>
  </svg>
</template>

<style scoped>
.ui-icon {
  flex: none;
  vertical-align: -3px;
}
</style>
`,fn=`<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

/**
 * 날씨 배경.
 * ------------------------------------------------------------------
 * 사진 한 장을 그대로 깔지 않는다. 사진은 "무대"만 맡고,
 * 그 위에 날씨에 맞는 움직이는 층을 겹쳐 장면을 만든다.
 *
 *   사진(느린 확대) + 효과층(비 · 눈 · 안개 · 구름 · 햇살 · 번개) + 어둡게 덮개
 *
 * 눈과 안개는 사진이 없어서 흐린 하늘 사진 위에 효과층만으로 만들어 냈다.
 */
const props = defineProps({
  /** 한글 날씨 문자열. 없으면 기본 배경 */
  status: { type: String, default: '' },
})

/**
 * 사진은 필요할 때 한 장씩 불러온다.
 * eager로 8장(약 2MB)을 한꺼번에 받으면 첫 화면이 눈에 띄게 느려진다.
 */
const loaders = Object.fromEntries(
  Object.entries(import.meta.glob('../../../assets/photos/*.jpg', { import: 'default' })).map(
    ([path, load]) => [path.split('/').pop().replace('.jpg', ''), load],
  ),
)

const cache = {}

const loadPhoto = async (name) => {
  if (!cache[name]) cache[name] = await loaders[name]?.()
  return cache[name]
}

/**
 * 날씨 → { photo: 배경 사진, effect: 겹칠 움직임 }
 * 위에서부터 검사하므로 좁은 말이 먼저 와야 한다.
 */
const SCENES = [
  ['뇌우', { photo: 'storm', effect: 'storm' }],
  ['번개', { photo: 'lightning', effect: 'lightning' }],
  ['폭설', { photo: 'overcast', effect: 'snow-heavy' }],
  ['눈보라', { photo: 'overcast', effect: 'snow-heavy' }],
  ['싸락눈', { photo: 'overcast', effect: 'snow' }],
  ['눈', { photo: 'overcast', effect: 'snow' }],
  ['한파', { photo: 'overcast', effect: 'snow' }],
  ['소나기', { photo: 'rain', effect: 'shower' }],
  ['호우', { photo: 'rain', effect: 'rain-heavy' }],
  ['이슬비', { photo: 'rain', effect: 'drizzle' }],
  ['어는 비', { photo: 'rain', effect: 'rain' }],
  ['비', { photo: 'rain', effect: 'rain' }],
  ['안개', { photo: 'overcast', effect: 'fog' }],
  ['미세먼지', { photo: 'overcast', effect: 'fog' }],
  ['흐림', { photo: 'overcast', effect: 'clouds-slow' }],
  ['구름조금', { photo: 'partly-cloudy', effect: 'clouds' }],
  ['구름많', { photo: 'cloudy', effect: 'clouds' }],
  ['구름', { photo: 'cloudy', effect: 'clouds' }],
  ['대체로 맑', { photo: 'mostly-sunny', effect: 'sun-clouds' }],
  ['맑', { photo: 'sunny', effect: 'sun' }],
]

const DEFAULT_SCENE = { photo: 'partly-cloudy', effect: 'clouds' }

const scene = computed(() => {
  if (!props.status) return DEFAULT_SCENE
  const found = SCENES.find(([word]) => props.status.includes(word))
  return found ? found[1] : DEFAULT_SCENE
})

/**
 * 사진을 겹 두 개로 번갈아 깔고 투명도만 바꿔 부드럽게 넘긴다.
 * <Transition>은 out-in 도중 상태가 엉키는 경우가 있어 직접 관리한다.
 */
const layers = ref(['', ''])
const front = ref(0)

// 늦게 도착한 사진이 나중에 고른 사진을 덮어쓰지 않도록 순번을 확인한다
let requestId = 0

watch(
  () => scene.value.photo,
  async (name) => {
    const id = ++requestId
    const url = await loadPhoto(name)
    if (!url || id !== requestId) return
    if (layers.value[front.value] === url) return
    const back = 1 - front.value
    layers.value[back] = url
    front.value = back
  },
  { immediate: true },
)

const rootEl = ref(null)
const fieldCount = ref(1)

let observer = null

onMounted(() => {
  const measure = () => {
    const height = rootEl.value?.offsetHeight ?? 0
    // 너무 많이 쌓으면 무거워지므로 6개까지만
    fieldCount.value = Math.min(4, Math.max(1, Math.ceil(height / window.innerHeight)))
  }
  observer = new ResizeObserver(measure)
  if (rootEl.value) observer.observe(rootEl.value)
  window.addEventListener('resize', measure)
  measure()
  onBeforeUnmount(() => window.removeEventListener('resize', measure))
})

onBeforeUnmount(() => observer?.disconnect())

/**
 * 빗방울을 낱개로 만든다.
 * 줄무늬를 통째로 밀면 "사선 무늬가 미끄러지는" 느낌만 나고 비처럼 보이지 않는다.
 *
 * 시작 시각(delay)은 반드시 "그 방울 자신의 주기"에 대한 비율로 흩어야 한다.
 * 공통 최대값으로 흩으면 주기가 짧은 방울들이 같은 구간에 몰려서
 * 위쪽에만 비가 오는 것처럼 보인다.
 *
 * 값은 황금비로 흩는다. Math.random을 쓰면 다시 그릴 때마다 튀어서 끊겨 보인다.
 */
const GOLDEN = 0.618033988749895

const makeDrops = (count, { minDur, maxDur, minLen, maxLen, minOp, maxOp, width }) =>
  Array.from({ length: count }, (_, i) => {
    const phase = (i * GOLDEN) % 1 // 낙하 위상 — 고르게 흩어진다
    const a = ((i * 37) % 100) / 100 // 가로 위치
    const b = ((i * 61) % 100) / 100 // 속도
    const c = ((i * 83) % 100) / 100 // 길이
    const dur = minDur + b * (maxDur - minDur)
    return {
      left: a * 106 - 3,
      dur,
      len: minLen + c * (maxLen - minLen),
      delay: -phase * dur,
      opacity: minOp + c * (maxOp - minOp),
      width: c > 0.7 ? width + 0.6 : width,
    }
  })

/* 네 가지 비는 굵기 · 길이 · 속도 · 개수를 확실히 갈라 놓아야 구분된다 */
const DRIZZLE = makeDrops(95, {
  minDur: 1.8, maxDur: 2.9, minLen: 8, maxLen: 22, minOp: 0.16, maxOp: 0.4, width: 1,
})
const RAIN = makeDrops(150, {
  minDur: 0.7, maxDur: 1.1, minLen: 28, maxLen: 70, minOp: 0.3, maxOp: 0.75, width: 1.3,
})
const SHOWER = makeDrops(200, {
  minDur: 0.5, maxDur: 0.78, minLen: 42, maxLen: 100, minOp: 0.34, maxOp: 0.85, width: 1.6,
})
const RAIN_HEAVY = makeDrops(280, {
  minDur: 0.28, maxDur: 0.46, minLen: 75, maxLen: 175, minOp: 0.4, maxOp: 0.95, width: 2.2,
})

/**
 * 눈송이. 비와 달리 좌우로 흔들리며 떨어져야 눈처럼 보인다.
 * 흔들림과 낙하는 transform 이 충돌하므로 겉/속 두 겹으로 나눈다.
 */
const makeFlakes = (count, { minDur, maxDur, minSize, maxSize, swayMin, swayMax }) =>
  Array.from({ length: count }, (_, i) => {
    const phase = (i * GOLDEN) % 1
    const a = ((i * 41) % 100) / 100
    const b = ((i * 67) % 100) / 100
    const c = ((i * 89) % 100) / 100
    const dur = minDur + b * (maxDur - minDur)
    return {
      left: a * 106 - 3,
      dur,
      size: minSize + c * (maxSize - minSize),
      delay: -phase * dur,
      opacity: 0.45 + c * 0.5,
      sway: swayMin + a * (swayMax - swayMin),
      swayDur: 1.8 + c * 2.6,
    }
  })

const SNOW = makeFlakes(120, {
  minDur: 4.5, maxDur: 8, minSize: 3, maxSize: 8, swayMin: 24, swayMax: 70,
})
const SNOW_HEAVY = makeFlakes(230, {
  minDur: 1.6, maxDur: 3.2, minSize: 4, maxSize: 13, swayMin: 60, swayMax: 150,
})

const flakes = computed(() => {
  const base = scene.value.effect === 'snow-heavy' ? SNOW_HEAVY : SNOW
  if (fieldCount.value >= 3) return base.filter((_, i) => i % 2 === 0)
  return base
})

const drops = computed(() => {
  const base =
    ({ drizzle: DRIZZLE, shower: SHOWER, 'rain-heavy': RAIN_HEAVY })[scene.value.effect] ?? RAIN
  // 층이 여러 개면 방울 수가 곱해지므로, 층이 많을 때는 층당 개수를 줄인다
  if (fieldCount.value >= 3) return base.filter((_, i) => i % 2 === 0)
  return base
})

/**
 * 목록이 길어지면 배경도 그만큼 길어진다.
 * 비는 화면 높이(vh)를 기준으로 떨어지므로, 그대로 두면 맨 위 한 화면에만 내린다.
 * 배경 높이를 재서 "화면 한 개 분량"의 비를 필요한 만큼 세로로 쌓는다.
 */
/** 어두운 사진 위에서는 글자가 잘 보이도록 덮개를 더 진하게 */
const isDark = computed(() =>
  ['storm', 'lightning', 'rain-heavy', 'rain', 'shower'].includes(scene.value.effect),
)
<\/script>

<template>
  <div
    ref="rootEl"
    class="backdrop"
    :class="[\`fx-\${scene.effect}\`, { dark: isDark }]"
    aria-hidden="true"
  >
    <!-- 사진은 천천히 확대되며 살아 있는 느낌만 준다 -->
    <div
      v-for="(url, i) in layers"
      :key="i"
      class="photo"
      :class="{ on: i === front }"
      :style="url ? { backgroundImage: \`url(\${url})\` } : null"
    />

    <!-- ── 효과층 ── -->

    <!-- 햇살: 은은한 빛무리 + 아주 느리게 도는 빛살 -->
    <template v-if="scene.effect === 'sun' || scene.effect === 'sun-clouds'">
      <div class="glow" />
      <div class="rays" />
    </template>

    <!-- 구름: 크고 부드러운 덩어리가 옆으로 흐른다 -->
    <template
      v-if="['clouds', 'clouds-slow', 'sun-clouds', 'fog', 'overcast'].includes(scene.effect)"
    >
      <div class="cloud-layer a" />
      <div class="cloud-layer b" />
    </template>

    <!-- 비: 빗방울을 낱개로 뿌리고, 바닥에는 물안개를 깐다 -->
    <template v-if="['rain', 'rain-heavy', 'drizzle', 'shower', 'storm'].includes(scene.effect)">
      <!-- 클래스 이름은 시간별 패널의 .rain 과 겹치지 않게 rain-field 로 둔다 -->
      <div
        v-for="k in fieldCount"
        :key="k"
        class="rain-field"
        :style="{ top: (k - 1) * 100 + 'vh' }"
      >
        <span
          v-for="(d, i) in drops"
          :key="i"
          class="drop"
          :style="{
            left: d.left + '%',
            height: d.len + 'px',
            width: d.width + 'px',
            opacity: d.opacity,
            animationDuration: d.dur + 's',
            animationDelay: d.delay + 's',
          }"
        />
      </div>
      <div v-if="scene.effect !== 'drizzle'" class="mist" />
    </template>

    <!-- 눈: 크기가 다른 눈송이가 좌우로 흔들리며 내린다 -->
    <template v-if="['snow', 'snow-heavy'].includes(scene.effect)">
      <div
        v-for="k in fieldCount"
        :key="k"
        class="snow-field"
        :style="{ top: (k - 1) * 100 + 'vh' }"
      >
        <span
          v-for="(f, i) in flakes"
          :key="i"
          class="flake-fall"
          :style="{
            left: f.left + '%',
            animationDuration: f.dur + 's',
            animationDelay: f.delay + 's',
          }"
        >
          <span
            class="flake"
            :style="{
              width: f.size + 'px',
              height: f.size + 'px',
              opacity: f.opacity,
              animationDuration: f.swayDur + 's',
              '--sway': f.sway + 'px',
            }"
          />
        </span>
      </div>
      <!-- 폭설은 앞을 가리는 눈보라까지 -->
      <div v-if="scene.effect === 'snow-heavy'" class="blizzard" />
    </template>

    <!-- 안개: 뿌연 띠가 좌우로 천천히 밀린다 -->
    <template v-if="scene.effect === 'fog'">
      <div class="fog-layer a" />
      <div class="fog-layer b" />
    </template>

    <!-- 번개: 하늘이 번쩍인 뒤 갈래가 잠깐 그어진다 -->
    <template v-if="['storm', 'lightning'].includes(scene.effect)">
      <div class="flash" />
      <svg
        v-for="n in 2"
        :key="n"
        class="bolt"
        :class="n === 1 ? 'a' : 'b'"
        viewBox="0 0 200 300"
        preserveAspectRatio="xMidYMin meet"
      >
        <!-- 바깥 후광 -->
        <path
          d="M96 0 78 96 112 88 66 210"
          fill="none"
          stroke="#bfe0ff"
          stroke-width="11"
          stroke-linejoin="round"
          stroke-linecap="round"
          opacity="0.55"
        />
        <!-- 몸통 -->
        <path d="M96 0 78 96 112 88 66 210 90 128 58 138Z" fill="#f2f9ff" />
        <!-- 하얗게 타는 심지 -->
        <path
          d="M96 0 78 96 112 88 66 210"
          fill="none"
          stroke="#fff"
          stroke-width="2.4"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <!-- 잔가지 -->
        <path
          d="M84 62 46 104M104 108 142 142M74 150 44 188"
          fill="none"
          stroke="#eaf5ff"
          stroke-width="2.2"
          stroke-linecap="round"
        />
      </svg>
    </template>

    <!-- 글자가 읽히도록 덮는 층 -->
    <div class="veil" />
  </div>
</template>

<style scoped>
.backdrop {
  position: absolute;
  z-index: 0;
  overflow: hidden;
  inset: 0;
  pointer-events: none;
}

/* ── 사진 ── */
.photo {
  position: absolute;
  background-position: center;
  background-size: cover;
  inset: 0;
  opacity: 0;
  transition: opacity 0.9s ease;
  animation: drift 40s ease-in-out infinite alternate;
}

.photo.on {
  opacity: 1;
}

/* 맑음 사진은 아래쪽에 옅은 구름이 깔려 있다. 파란 하늘 쪽을 보여 준다 */
.fx-sun .photo {
  background-position: 50% 22%;
}

@keyframes drift {
  from {
    transform: scale(1.06) translate(0, 0);
  }
  to {
    transform: scale(1.14) translate(-1.5%, -1%);
  }
}

/* ── 덮개 — 카드 글씨가 읽히도록 ── */
.veil {
  position: absolute;
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 22%),
    rgb(255 255 255 / 38%) 45%,
    rgb(255 255 255 / 52%)
  );
  inset: 0;
}

.backdrop.dark .veil {
  background: linear-gradient(
    180deg,
    rgb(255 255 255 / 34%),
    rgb(255 255 255 / 50%) 45%,
    rgb(255 255 255 / 62%)
  );
}

/* ── 햇살 ── */
.glow {
  position: absolute;
  top: -18%;
  right: -8%;
  width: 46%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgb(255 236 160 / 85%), rgb(255 236 160 / 0%) 68%);
  animation: pulse 6s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.12);
  }
}

.rays {
  position: absolute;
  top: -60%;
  right: -30%;
  width: 110%;
  aspect-ratio: 1;
  background: conic-gradient(
    from 0deg,
    rgb(255 244 200 / 0%) 0deg,
    rgb(255 244 200 / 30%) 10deg,
    rgb(255 244 200 / 0%) 20deg,
    rgb(255 244 200 / 0%) 45deg,
    rgb(255 244 200 / 24%) 55deg,
    rgb(255 244 200 / 0%) 65deg,
    rgb(255 244 200 / 0%) 360deg
  );
  animation: spin 90s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ── 구름 ── */
.cloud-layer {
  position: absolute;
  width: 220%;
  inset: 0 auto 0 0;
  /* 배경이 길어져도 구름이 아래까지 이어지도록 세로로도 반복한다 */
  background-repeat: repeat;
  background-size: 100% 100vh;
}

.cloud-layer.a {
  background-image:
    radial-gradient(ellipse 220px 90px at 12% 26%, rgb(255 255 255 / 70%), transparent 70%),
    radial-gradient(ellipse 300px 110px at 45% 18%, rgb(255 255 255 / 55%), transparent 72%),
    radial-gradient(ellipse 190px 80px at 76% 32%, rgb(255 255 255 / 62%), transparent 70%);
  animation: slide-left 70s linear infinite;
}

.cloud-layer.b {
  background-image:
    radial-gradient(ellipse 260px 95px at 25% 55%, rgb(255 255 255 / 42%), transparent 72%),
    radial-gradient(ellipse 200px 78px at 62% 66%, rgb(255 255 255 / 36%), transparent 70%);
  animation: slide-left 110s linear infinite;
}

.fx-clouds-slow .cloud-layer.a {
  animation-duration: 130s;
}

.fx-clouds-slow .cloud-layer.b {
  animation-duration: 190s;
}

@keyframes slide-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ── 비 ── */
.rain-field {
  /* 층 하나가 화면 한 개 높이. 이것을 세로로 쌓아 배경 끝까지 채운다.
     위로 조금 올려 두어야 층과 층 사이가 비지 않는다 */
  position: absolute;
  right: 0;
  left: 0;
  height: 100vh;
  margin-top: -30vh;
}

/* 빗방울 하나. 위는 투명하고 아래로 갈수록 진해야 떨어지는 물줄기로 보인다 */
.drop {
  position: absolute;
  top: -12%;
  border-radius: 999px;
  background: linear-gradient(
    to bottom,
    rgb(214 232 246 / 0%),
    rgb(214 232 246 / 75%) 45%,
    rgb(236 246 255 / 95%)
  );
  animation-name: drop-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

/* 바람에 조금 기울어 떨어진다.
   낙하 거리는 화면보다 넉넉해야 바닥까지 빈틈이 없다 */
@keyframes drop-fall {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-60px, 130vh, 0);
  }
}

/* 바닥에 튀어 오르는 물안개 */
.mist {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 26%;
  background: linear-gradient(to top, rgb(226 238 248 / 55%), transparent);
  animation: mist-breathe 4.5s ease-in-out infinite;
}

@keyframes mist-breathe {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.9;
  }
}

/* 이슬비 — 가늘고 흐릿하게 흩날린다 */
.fx-drizzle .drop {
  filter: blur(0.7px);
  animation-name: drop-drift;
}

@keyframes drop-drift {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-105px, 130vh, 0);
  }
}

/* 소나기 — 굵게 쏟아지되 세기가 물결친다 */
.fx-shower .rain-field {
  animation: shower-burst 6s ease-in-out infinite;
}

/* 층이 여러 개여도 같은 박자로 물결치게 한다 */
.fx-shower .rain-field:nth-child(n) {
  animation-delay: 0s;
}

@keyframes shower-burst {
  0%,
  100% {
    opacity: 0.55;
  }
  35%,
  65% {
    opacity: 1;
  }
}

/* 호우 — 굵고 빠르고 많이, 더 기울어 쏟아진다 */
.fx-rain-heavy .drop {
  animation-name: drop-fall-hard;
}

@keyframes drop-fall-hard {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-140px, 130vh, 0);
  }
}

.fx-rain-heavy .mist {
  height: 34%;
}

/* ── 눈 (사진이 없어 효과층으로 만든 장면) ── */
.snow-field {
  position: absolute;
  right: 0;
  left: 0;
  height: 100vh;
  margin-top: -30vh;
}

/* 겉: 아래로 떨어지는 일만 한다 */
.flake-fall {
  position: absolute;
  top: 0;
  animation-name: flake-drop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

@keyframes flake-drop {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 130vh, 0);
  }
}

/* 속: 좌우로 흔들리는 일만 한다 */
.flake {
  display: block;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fff, rgb(226 240 255 / 85%) 60%, rgb(200 224 248 / 55%));
  box-shadow: 0 0 6px rgb(255 255 255 / 70%);
  animation-name: flake-sway;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes flake-sway {
  from {
    transform: translateX(calc(var(--sway) * -1));
  }
  to {
    transform: translateX(var(--sway));
  }
}

/* 폭설 — 바람에 크게 쓸리고, 앞이 뿌옇게 가린다 */
.fx-snow-heavy .flake-fall {
  animation-name: flake-drop-hard;
}

@keyframes flake-drop-hard {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-260px, 130vh, 0);
  }
}

.fx-snow-heavy .flake {
  box-shadow: 0 0 10px rgb(255 255 255 / 90%);
}

.blizzard {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(105deg, transparent 0 12px, rgb(255 255 255 / 22%) 12px 14px, transparent 14px 30px),
    linear-gradient(102deg, transparent 0 26px, rgb(255 255 255 / 14%) 26px 29px, transparent 29px 60px);
  animation: blizzard-rush 0.9s linear infinite;
}

@keyframes blizzard-rush {
  to {
    transform: translate3d(-30px, 60px, 0);
  }
}

/* ── 안개 (사진이 없어 효과층으로 만든 장면) ── */
.fog-layer {
  position: absolute;
  width: 200%;
  inset: 0 auto 0 0;
  background-repeat: repeat;
  background-size: 100% 100vh;
  filter: blur(2px);
}

.fog-layer.a {
  background: linear-gradient(
    180deg,
    transparent 4%,
    rgb(238 242 245 / 82%) 30%,
    transparent 52%,
    rgb(238 242 245 / 70%) 78%,
    transparent 96%
  );
  animation: slide-left 55s linear infinite;
}

.fog-layer.b {
  background: linear-gradient(
    180deg,
    rgb(246 248 250 / 55%) 10%,
    transparent 40%,
    rgb(246 248 250 / 62%) 66%,
    transparent 92%
  );
  animation: slide-left 85s linear infinite reverse;
}

/* ── 번개 ── */
/* 하늘 전체가 번쩍 — 짧고 불규칙하게 두 번 치는 것이 실제와 가깝다 */
.flash {
  position: absolute;
  background: radial-gradient(
    ellipse 80% 60% at 40% 0%,
    rgb(255 255 255 / 95%),
    rgb(214 234 255 / 60%) 55%,
    transparent 80%
  );
  inset: 0;
  opacity: 0;
  animation: flash 9s linear infinite;
}

/* 갈래는 섬광과 같은 박자로 잠깐만, 대신 아주 밝게 */
.bolt {
  position: absolute;
  opacity: 0;
  filter: drop-shadow(0 0 6px rgb(255 255 255 / 95%))
    drop-shadow(0 0 22px rgb(150 205 255 / 90%)) drop-shadow(0 0 52px rgb(120 185 255 / 70%));
  animation: bolt 9s linear infinite;
  will-change: opacity;
}

.bolt.a {
  top: -3%;
  left: 22%;
  width: 27%;
  height: 76%;
}

/* 두 번째 갈래는 반대쪽에서 시차를 두고 친다 */
.bolt.b {
  top: 2%;
  right: 16%;
  left: auto;
  width: 19%;
  height: 58%;
  animation-delay: 4.9s;
  transform: scaleX(-1);
}

.fx-lightning .flash,
.fx-lightning .bolt {
  animation-duration: 6.5s;
}

.fx-lightning .bolt.b {
  animation-delay: 3.4s;
}

@keyframes flash {
  0%,
  100% {
    opacity: 0;
  }
  1.4% {
    opacity: 0.85;
  }
  2.2% {
    opacity: 0.12;
  }
  2.9% {
    opacity: 0.7;
  }
  4.6% {
    opacity: 0;
  }
  /* 두 번째 갈래(4.9s ≒ 54%)와 같은 순간에 하늘도 번쩍인다 */
  53.5% {
    opacity: 0;
  }
  54.4% {
    opacity: 0.7;
  }
  55.2% {
    opacity: 0.1;
  }
  56% {
    opacity: 0.5;
  }
  57.6% {
    opacity: 0;
  }
}

@keyframes bolt {
  0%,
  100% {
    opacity: 0;
  }
  0.9% {
    opacity: 1;
  }
  1.4% {
    opacity: 0.1;
  }
  1.8% {
    opacity: 1;
  }
  2.3% {
    opacity: 0.25;
  }
  2.8% {
    opacity: 0.95;
  }
  3.3% {
    opacity: 0.15;
  }
  3.7% {
    opacity: 0.7;
  }
  4.6% {
    opacity: 0;
  }
}

/* 움직임을 줄여 달라고 설정한 사용자에게는 정지 화면으로 */
@media (prefers-reduced-motion: reduce) {
  .backdrop * {
    animation: none !important;
  }
}
</style>
`,pn=`<script setup>
import { computed } from 'vue'
import WeatherIcon from './WeatherIcon.vue'
import UiIcon from './UiIcon.vue'

/**
 * 날씨별 지역 현황.
 * 같은 목록을 "지역 기준"이 아니라 "날씨 기준"으로 묶어 본다.
 * 데이터는 그대로 받고, 묶는 방법만 여기서 정한다.
 */
const props = defineProps({
  list: { type: Array, required: true },
  favorites: { type: Array, default: () => [] },
  hereId: { type: String, default: '' },
  selectedId: { type: String, default: '' },
})

defineEmits(['select-card', 'toggle-favorite'])

/** 같은 status끼리 묶고, 지역이 많은 날씨부터 위로 올린다 */
const groups = computed(() => {
  const bucket = new Map()
  for (const item of props.list) {
    if (!bucket.has(item.status)) bucket.set(item.status, [])
    bucket.get(item.status).push(item)
  }
  return [...bucket.entries()]
    .map(([status, cities]) => ({
      status,
      cities: [...cities].sort((a, b) => b.temp - a.temp),
    }))
    .sort((a, b) => b.cities.length - a.cities.length)
})
<\/script>

<template>
  <div class="by-status">
    <div v-for="group in groups" :key="group.status" class="group">
      <p class="group-head">
        <WeatherIcon :status="group.status" :size="26" />
        <b class="status-name">{{ group.status }}</b>
        <span class="count">{{ group.cities.length }}곳</span>
      </p>

      <ul class="chips">
        <li v-for="city in group.cities" :key="city.id">
          <button
            type="button"
            class="chip"
            :class="{ here: city.id === hereId, selected: city.id === selectedId }"
            @click="$emit('select-card', city.id)"
          >
            <UiIcon v-if="city.id === hereId" name="location" :size="11" />
            <span class="chip-name">{{ city.name }}</span>
            <UiIcon v-if="city.id === selectedId" name="check" :size="12" class="chip-check" />
            <span class="chip-temp">{{ city.temp }}°</span>
            <span class="chip-region">{{ city.region }}</span>
          </button>
          <button
            type="button"
            class="chip-star"
            :class="{ on: favorites.includes(city.id) }"
            :title="favorites.includes(city.id) ? '즐겨찾기 해제' : '즐겨찾기에 추가'"
            @click="$emit('toggle-favorite', city.id)"
          >
            <UiIcon name="star" :size="13" :filled="favorites.includes(city.id)" />
          </button>
        </li>
      </ul>
    </div>

    <p v-if="!groups.length" class="empty-message">
      <UiIcon name="empty" :size="22" />
      표시할 날씨가 없습니다.
    </p>
  </div>
</template>

<style scoped>
.by-status {
  display: grid;
  gap: 12px;
}

.group {
  padding: 13px 15px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
}

.group-head {
  display: flex;
  gap: 9px;
  align-items: center;
  margin: 0 0 10px;
}

.status-name {
  color: var(--ink);
  font-size: 14.5px;
  font-weight: 700;
}

.count {
  padding: 2px 9px;
  border-radius: 999px;
  color: var(--muted);
  background: var(--paper);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.chips li {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  transition: border-color 0.15s ease;
}

.chips li:hover {
  border-color: var(--accent-line);
}

.chip {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 5px 4px 5px 11px;
  border: 0;
  background: transparent;
  cursor: pointer;
  font: inherit;
}

.chip.here {
  color: var(--accent);
}

/* 선택된 곳 — 카드와 같이 연한 회색 테두리 + 체크 */
.chips li:has(.chip.selected) {
  border-color: var(--line-strong);
  background: var(--surface);
}

.chip-check {
  color: var(--muted);
}

.chip-name {
  font-size: 12.5px;
  font-weight: 700;
}

.chip-temp {
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
}

.chip-region {
  color: var(--faint);
  font-size: 10.5px;
}

.chip-star {
  padding: 0 9px 0 5px;
  border: 0;
  background: transparent;
  color: var(--line-strong);
  cursor: pointer;
  transition: color 0.15s ease;
}

.chip-star:hover,
.chip-star.on {
  color: #e0a12a;
}

.empty-message {
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 30px 0;
  color: var(--faint);
  font-size: 13.5px;
}
</style>
`,mn=`<script setup>
import { computed } from 'vue'
import WeatherIcon from './WeatherIcon.vue'
import UiIcon from './UiIcon.vue'

// 1. 상위로부터 단방향 주입받을 객체 데이터 규격 검수 (매크로)
const props = defineProps({
  cityItem: {
    type: Object,
    required: true,
  },
  /** 즐겨찾기로 별표를 쳤는지 — 기억하는 건 부모다 */
  favorite: { type: Boolean, default: false },
  /** 현재 위치에서 가장 가까운 도시인지 */
  here: { type: Boolean, default: false },
  /** 이 도시의 시간별 예보가 펼쳐져 있는지 */
  open: { type: Boolean, default: false },
  /** 지금 배경이 따라가는(=사용자가 고른) 도시인지 */
  selected: { type: Boolean, default: false },
  /** 오른쪽 버튼 문구. 과제 4에서는 '상세보기'로 쓴다 */
  detailLabel: { type: String, default: '시간별' },
})

// 2. 상위로 송신할 두 가지 경로의 커스텀 이벤트 식별자 등록 (매크로)
const emit = defineEmits(['select-card', 'click-detail', 'toggle-favorite'])

/** 아이콘 받침 색조 — 컬러 아이콘이 흰 배경에 떠 보이지 않게 잡아 준다 */
const tone = computed(() => {
  const s = props.cityItem.status
  if (s.includes('맑')) return 'warm'
  if (s.includes('비') || s.includes('눈')) return 'cool'
  return 'neutral'
})

/**
 * 기온 구간 — 위에서부터 검사해 처음 걸리는 것을 쓴다.
 * 기준을 데이터로 빼 두면 나중에 구간을 바꿔도 여기 한 곳만 고치면 된다.
 */
const TEMP_BANDS = [
  { min: 30, key: 'scorching', label: '무더워요' },
  { min: 25, key: 'hot', label: '더워요' },
  { min: 20, key: 'mild', label: '선선해요' },
  { min: 10, key: 'cool', label: '쌀쌀해요' },
  { min: -Infinity, key: 'cold', label: '추워요' },
]

/** 습도 구간 */
const HUMIDITY_BANDS = [
  { min: 80, key: 'wet', label: '눅눅해요' },
  { min: 60, key: 'humid', label: '습해요' },
  { min: 40, key: 'nice', label: '쾌적해요' },
  { min: -Infinity, key: 'dry', label: '건조해요' },
]

const temp = computed(() => TEMP_BANDS.find((b) => props.cityItem.temp >= b.min))
const humidity = computed(() => HUMIDITY_BANDS.find((b) => props.cityItem.humidity >= b.min))
<\/script>

<template>
  <div
    class="weather-card"
    :class="{ here, open, selected }"
    @click="emit('select-card', cityItem.id)"
  >
    <!-- ① 날씨 — 하늘 상태 -->
    <div class="sky">
      <!-- 받은 status를 아이콘 컴포넌트에 그대로 넘긴다 (props 한 단계 더 내려감) -->
      <div class="icon-tile" :class="tone">
        <WeatherIcon :status="cityItem.status" :size="32" />
      </div>
      <div class="sky-text">
        <h4>
          {{ cityItem.name }}
          <!-- 현재 위치와 선택은 다른 것이므로 겹쳐도 둘 다 보여 준다 -->
          <span v-if="here" class="badge here-badge">
            <UiIcon name="location" :size="11" /> 현재 위치
          </span>
          <span v-if="selected" class="pick" title="배경이 이 지역을 따릅니다">
            <UiIcon name="check" :size="13" />
          </span>
          <span v-if="cityItem.demo" class="badge demo-badge">데모</span>
        </h4>
        <p class="status">{{ cityItem.status }}</p>
      </div>
    </div>

    <!-- ② 수치 — 기온과 습도를 한 덩어리로 묶는다 -->
    <div class="metrics">
      <p class="metric" :class="temp.key">
        <UiIcon name="thermometer" :size="15" />
        <b class="value">{{ cityItem.temp }}<span class="unit">°C</span></b>
        <span class="band">{{ temp.label }}</span>
      </p>
      <p class="metric" :class="humidity.key">
        <UiIcon name="droplet" :size="15" />
        <b class="value">{{ cityItem.humidity }}<span class="unit">%</span></b>
        <span class="band">{{ humidity.label }}</span>
      </p>
    </div>

    <!-- 별표는 카드 클릭(선택)과 겹치지 않도록 .stop 을 붙인다 -->
    <button
      class="star"
      :class="{ on: favorite }"
      type="button"
      :aria-pressed="favorite"
      :title="favorite ? '즐겨찾기 해제' : '즐겨찾기에 추가'"
      @click.stop="emit('toggle-favorite', cityItem.id)"
    >
      <UiIcon name="star" :size="17" :filled="favorite" />
    </button>

    <button
      v-if="!cityItem.demo"
      class="btn-detail"
      :class="{ on: open }"
      :aria-expanded="open"
      @click.stop="emit('click-detail', cityItem.name, cityItem.status)"
    >
      {{ open ? '닫기' : detailLabel }}
    </button>
  </div>
</template>

<style scoped>
.weather-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 9px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;
}

.weather-card:hover {
  border-color: var(--accent-line);
  box-shadow: 0 5px 16px rgb(15 23 42 / 7%);
  transform: translateY(-2px);
}

/* 시간별 예보를 펼친 카드 */
.weather-card.open {
  border-color: var(--accent);
}

/* 현재 위치 — 초록 */
.weather-card.here {
  border-color: var(--accent);
  background: var(--accent-tint);
}

/* 선택된 곳 — 배경이 이 도시를 따라간다.
   테두리는 눈에 거슬리지 않게 연한 회색으로만 두고, 표시는 옆의 체크가 맡는다 */
.weather-card.selected {
  border-color: var(--line-strong);
  background: var(--paper);
}

.weather-card.selected.here {
  background: var(--accent-tint);
}

/* ── ① 날씨 ── */
.sky {
  display: flex;
  gap: 11px;
  align-items: center;
  min-width: 0;
}

.icon-tile {
  display: grid;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  place-items: center;
  transition: transform 0.2s ease;
}

.weather-card:hover .icon-tile {
  transform: scale(1.06) rotate(-3deg);
}

.icon-tile.warm {
  background: #fdf2d5;
}

.icon-tile.cool {
  background: #e5eff9;
}

.icon-tile.neutral {
  background: #edf0f3;
}

.sky-text {
  min-width: 0;
}

.weather-card h4 {
  margin: 0 0 2px;
  color: var(--ink);
  font-size: 16.5px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.status {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
}

/* ── ② 수치 ── */
.metrics {
  display: grid;
  gap: 4px;
}

.metric {
  display: grid;
  grid-template-columns: 15px auto auto;
  gap: 7px;
  align-items: center;
  margin: 0;
  padding: 4px 11px 4px 9px;
  border-radius: 999px;
}

.value {
  font-family: var(--font-mono);
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.unit {
  margin-left: 1px;
  font-size: 10.5px;
  font-weight: 500;
  opacity: 0.7;
}

.band {
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

/* 기온 — 더울수록 붉게, 추울수록 푸르게 */
.metric.scorching {
  color: #b03a1c;
  background: #fce6dc;
}

.metric.hot {
  color: #b8672a;
  background: #fdf0e0;
}

.metric.mild {
  color: #3f7d55;
  background: #e6f2e9;
}

.metric.cool {
  color: #3a6f95;
  background: #e6eff6;
}

.metric.cold {
  color: #3b5a8c;
  background: #e5eaf5;
}

/* 습도 — 눅눅할수록 짙은 파랑, 건조하면 모래빛 */
.metric.wet {
  color: #2b5f8a;
  background: #dfeaf4;
}

.metric.humid {
  color: #3d7396;
  background: #e8f1f7;
}

.metric.nice {
  color: #4a7f68;
  background: #e7f2ed;
}

.metric.dry {
  color: #937243;
  background: #f6eede;
}

.badge {
  display: inline-flex;
  gap: 3px;
  align-items: center;
  margin-left: 5px;
  padding: 2px 8px 2px 6px;
  border-radius: 999px;
  color: var(--on-accent);
  font-size: 10px;
  font-weight: 700;
  vertical-align: 2px;
  white-space: nowrap;
}

.here-badge {
  background: var(--accent);
}


/* 실제 관측값이 아님을 분명히 */
.demo-badge {
  padding: 2px 8px;
  color: var(--muted);
  background: var(--line);
}

/* 선택 표시 — 도시 이름 옆 체크 */
.pick {
  display: inline-flex;
  margin-left: 5px;
  color: var(--muted);
  vertical-align: -1px;
}

/* ── 별표 ── */
.star {
  display: grid;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--faint);
  cursor: pointer;
  place-items: center;
  transition:
    color 0.15s ease,
    background 0.15s ease,
    transform 0.15s ease;
}

.star:hover {
  color: #e0a12a;
  background: #fdf4dc;
  transform: scale(1.12);
}

.star.on {
  color: #e0a12a;
}

/* ── 버튼 ── */
.btn-detail {
  padding: 7px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  background: var(--paper);
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition:
    border-color 0.15s ease,
    color 0.15s ease,
    background 0.15s ease;
}

.btn-detail.on {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.btn-detail:hover {
  border-color: var(--accent-line);
  color: var(--accent);
  background: var(--accent-tint);
}

/* 좁아지면 수치 덩어리를 아래로 내린다 */
@media (max-width: 520px) {
  .weather-card {
    grid-template-columns: minmax(0, 1fr) auto auto;
  }

  .metrics {
    grid-column: 1 / -1;
    grid-template-columns: repeat(2, max-content);
  }
}
</style>
`,hn=`<script setup>
import { computed } from 'vue'

/**
 * 날씨 상태 문자열을 아이콘 하나로 바꿔 주는 작은 컴포넌트.
 * 데이터도 이벤트도 없고, 받은 status를 그리기만 한다.
 *
 * 아이콘은 src/assets/weather-icons/ 의 PNG를 쓴다.
 * import.meta.glob으로 폴더를 통째로 읽으므로,
 * 파일을 추가하면 아래 MATCH에 한 줄만 더하면 된다.
 */
const props = defineProps({
  status: { type: String, required: true },
  size: { type: Number, default: 26 },
})

/** { sunny: '/assets/sunny-a1b2.png', ... } — 빌드 후 경로로 바뀐다 */
const icons = import.meta.glob('../../../assets/weather-icons/*.png', {
  eager: true,
  import: 'default',
})

const iconUrl = Object.fromEntries(
  Object.entries(icons).map(([path, url]) => [path.split('/').pop().replace('.png', ''), url]),
)

/**
 * 상태 글자에 이 단어가 들어 있으면 이 아이콘.
 * 위에 있는 것부터 검사하므로 '소나기'가 '비'보다 먼저 와야 한다.
 */
const MATCH = [
  ['대체로 맑', 'mostly-sunny'],
  ['소나기', 'sun-shower'],
  ['뇌우', 'thunderstorm'],
  ['천둥', 'thunderstorm'],
  ['번개', 'lightning'],
  ['폭설', 'snowman'],
  ['한파', 'snowflake'],
  ['눈보라', 'snow'],
  ['싸락눈', 'snow'],
  ['눈', 'snow'],
  ['호우', 'heavy-rain'],
  ['장마', 'heavy-rain'],
  ['이슬비', 'rain'],
  ['어는 비', 'rain'],
  ['비', 'rain'],
  ['안개', 'fog'],
  ['미세먼지', 'fog'],
  ['태풍', 'cyclone'],
  ['돌풍', 'tornado'],
  ['구름조금', 'partly-cloudy'],
  ['구름 조금', 'partly-cloudy'],
  ['구름많', 'mostly-cloudy'],
  ['흐림', 'cloudy'],
  ['구름', 'cloudy'],
  ['맑음', 'sunny'],
  ['맑', 'sunny'],
]

const name = computed(() => {
  const found = MATCH.find(([word]) => props.status.includes(word))
  // 못 찾으면 기온 아이콘으로 대신한다 (빈칸보다는 낫다)
  return found ? found[1] : 'thermometer'
})

const src = computed(() => iconUrl[name.value] ?? iconUrl.thermometer)
<\/script>

<template>
  <img
    class="weather-icon"
    :class="name"
    :src="src"
    :width="size"
    :height="size"
    :alt="status"
    :title="status"
    decoding="async"
  />
</template>

<style scoped>
.weather-icon {
  flex: none;
  object-fit: contain;
  vertical-align: -4px;
}

/* 안개(🌫️)는 이모지 자체가 사각형 덩어리라 다른 아이콘보다 커 보인다.
   같은 크기로 두면 혼자 무거워 보여서 살짝 줄인다. */
.weather-icon.fog {
  transform: scale(0.84);
}
</style>
`,gn=`/**
 * Open-Meteo 날씨 API
 * ------------------------------------------------------------------
 * 화면(컴포넌트)과 데이터 가져오는 일을 파일부터 분리한다.
 * 컴포넌트는 "무엇을 보여줄지"만, 이 파일은 "어디서 가져올지"만 안다.
 *
 * API 키가 필요 없고 CORS도 열려 있어 브라우저에서 바로 호출할 수 있다.
 * 문서: https://open-meteo.com/en/docs
 */

const BASE_URL = 'https://api.open-meteo.com/v1/forecast'

/**
 * 조회할 지역 목록.
 * 여기에 한 줄 추가하면 화면에도 지역 탭에도 자동으로 반영된다.
 */
export const CITIES = [
  { id: 'seoul', name: '서울', region: '서울', lat: 37.5665, lon: 126.978 },

  { id: 'incheon', name: '인천', region: '인천', lat: 37.4563, lon: 126.7052 },

  { id: 'suwon', name: '수원', region: '경기', lat: 37.2636, lon: 127.0286 },
  { id: 'seongnam', name: '성남', region: '경기', lat: 37.42, lon: 127.1265 },
  { id: 'goyang', name: '고양', region: '경기', lat: 37.6584, lon: 126.832 },
  { id: 'yongin', name: '용인', region: '경기', lat: 37.2411, lon: 127.1776 },
  { id: 'bucheon', name: '부천', region: '경기', lat: 37.5035, lon: 126.766 },
  { id: 'pyeongtaek', name: '평택', region: '경기', lat: 36.9921, lon: 127.1129 },

  { id: 'chuncheon', name: '춘천', region: '강원', lat: 37.8813, lon: 127.73 },
  { id: 'wonju', name: '원주', region: '강원', lat: 37.3422, lon: 127.9202 },
  { id: 'gangneung', name: '강릉', region: '강원', lat: 37.7519, lon: 128.8761 },
  { id: 'sokcho', name: '속초', region: '강원', lat: 38.207, lon: 128.5918 },

  { id: 'cheongju', name: '청주', region: '충북', lat: 36.6424, lon: 127.489 },
  { id: 'chungju', name: '충주', region: '충북', lat: 36.9911, lon: 127.926 },
  { id: 'jecheon', name: '제천', region: '충북', lat: 37.1326, lon: 128.191 },

  { id: 'cheonan', name: '천안', region: '충남', lat: 36.8151, lon: 127.1139 },
  { id: 'asan', name: '아산', region: '충남', lat: 36.7898, lon: 127.0018 },
  { id: 'seosan', name: '서산', region: '충남', lat: 36.7848, lon: 126.4503 },
  { id: 'boryeong', name: '보령', region: '충남', lat: 36.3333, lon: 126.6128 },

  { id: 'daejeon', name: '대전', region: '대전', lat: 36.3504, lon: 127.3845 },

  { id: 'sejong', name: '세종', region: '세종', lat: 36.48, lon: 127.289 },

  { id: 'jeonju', name: '전주', region: '전북', lat: 35.8242, lon: 127.148 },
  { id: 'gunsan', name: '군산', region: '전북', lat: 35.9676, lon: 126.7369 },
  { id: 'iksan', name: '익산', region: '전북', lat: 35.9483, lon: 126.9576 },
  { id: 'namwon', name: '남원', region: '전북', lat: 35.4164, lon: 127.3905 },

  { id: 'mokpo', name: '목포', region: '전남', lat: 34.8118, lon: 126.3922 },
  { id: 'yeosu', name: '여수', region: '전남', lat: 34.7604, lon: 127.6622 },
  { id: 'suncheon', name: '순천', region: '전남', lat: 34.9506, lon: 127.4872 },
  { id: 'gwangyang', name: '광양', region: '전남', lat: 34.9407, lon: 127.696 },

  { id: 'gwangju', name: '광주', region: '광주', lat: 35.1595, lon: 126.8526 },

  { id: 'daegu', name: '대구', region: '대구', lat: 35.8714, lon: 128.6014 },

  { id: 'pohang', name: '포항', region: '경북', lat: 36.019, lon: 129.3435 },
  { id: 'gyeongju', name: '경주', region: '경북', lat: 35.8562, lon: 129.2247 },
  { id: 'andong', name: '안동', region: '경북', lat: 36.5684, lon: 128.7294 },
  { id: 'gumi', name: '구미', region: '경북', lat: 36.1195, lon: 128.3446 },
  { id: 'yeongju', name: '영주', region: '경북', lat: 36.8057, lon: 128.624 },

  { id: 'ulsan', name: '울산', region: '울산', lat: 35.5384, lon: 129.3114 },

  { id: 'changwon', name: '창원', region: '경남', lat: 35.228, lon: 128.6811 },
  { id: 'jinju', name: '진주', region: '경남', lat: 35.1803, lon: 128.1076 },
  { id: 'tongyeong', name: '통영', region: '경남', lat: 34.8544, lon: 128.4331 },
  { id: 'gimhae', name: '김해', region: '경남', lat: 35.2286, lon: 128.8894 },
  { id: 'geoje', name: '거제', region: '경남', lat: 34.8806, lon: 128.6211 },

  { id: 'busan', name: '부산', region: '부산', lat: 35.1796, lon: 129.0756 },

  { id: 'jeju', name: '제주', region: '제주', lat: 33.4996, lon: 126.5312 },
  { id: 'seogwipo', name: '서귀포', region: '제주', lat: 33.2541, lon: 126.56 },
]

/**
 * 시·도 17개를 그대로 탭으로 만들면 칩이 너무 많다.
 * 카드에는 시·도(region)를 그대로 보여 주고, 탭만 권역(group)으로 묶는다.
 */
const REGION_GROUP = {
  서울: '서울',
  인천: '인천/경기',
  경기: '인천/경기',
  강원: '강원',
  대전: '대전/세종/충청',
  세종: '대전/세종/충청',
  충북: '대전/세종/충청',
  충남: '대전/세종/충청',
  광주: '광주/전라',
  전북: '광주/전라',
  전남: '광주/전라',
  대구: '대구/경북',
  경북: '대구/경북',
  부산: '부산/울산/경남',
  울산: '부산/울산/경남',
  경남: '부산/울산/경남',
  제주: '제주',
}

export const groupOf = (sido) => REGION_GROUP[sido] ?? sido

/** 탭에 쓸 권역 목록 (CITIES 등장 순서대로, 중복 제거) */
export const REGIONS = [...new Set(CITIES.map((city) => groupOf(city.region)))]

/**
 * WMO 날씨 코드 → 한글 상태.
 * 여기서 만든 글자를 WeatherIcon이 받아 아이콘을 고르므로,
 * 아이콘 매칭 표에 있는 단어(맑음·비·눈·소나기·뇌우·안개…)를 포함해야 한다.
 */
const WMO = {
  0: '맑음',
  1: '대체로 맑음',
  2: '구름조금',
  3: '흐림',
  45: '안개',
  48: '안개',
  51: '이슬비',
  53: '이슬비',
  55: '이슬비',
  56: '어는 비',
  57: '어는 비',
  61: '비',
  63: '비',
  65: '호우',
  66: '어는 비',
  67: '어는 비',
  71: '눈',
  73: '눈',
  75: '폭설',
  77: '싸락눈',
  80: '소나기',
  81: '소나기',
  82: '소나기',
  85: '눈보라',
  86: '눈보라',
  95: '뇌우',
  96: '뇌우',
  99: '뇌우',
}

export const describeWeather = (code) => WMO[code] ?? '알 수 없음'

/**
 * 여러 지역의 현재 날씨를 한 번의 요청으로 가져온다.
 * 좌표를 콤마로 이어 보내면 보낸 순서 그대로 배열이 돌아온다.
 *
 * 같은 값을 10분 안에 다시 요청하지 않도록 브라우저에 잠깐 저장해 둔다.
 * 무료 API라 요청이 잦으면 429(요청 한도 초과)를 돌려준다.
 *
 * @param {boolean} force 새로고침 버튼처럼 캐시를 무시하고 받아야 할 때
 * @returns {Promise<Array>} [{ id, name, region, temp, humidity, status }, ...]
 * @throws {Error} 네트워크 오류이거나 응답이 200이 아닐 때
 */
const CACHE_KEY = 'inwoo-weather-cache'
const CACHE_TTL = 10 * 60 * 1000

/**
 * 받아 둔 값을 localStorage에 남긴다.
 * 새로고침해도 남아 있어야 서버가 막혔을 때 화면이 비지 않는다.
 */
const readCache = (count, maxAge) => {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const saved = JSON.parse(raw)
    if (saved.count !== count) return null
    return Date.now() - saved.at <= maxAge ? saved : null
  } catch {
    return null
  }
}

const writeCache = (count, rows) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), count, rows }))
  } catch {
    // 저장 공간이 없어도 화면은 그대로 동작해야 한다
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/* ------------------------------------------------------------------
 * 백업 제공자 — 노르웨이 기상청(MET Norway)
 * ------------------------------------------------------------------
 * Open-Meteo가 429(요청 한도 초과)를 돌려줄 때를 대비한 두 번째 줄.
 * 키가 필요 없고 CORS도 열려 있다. 대신 좌표 하나당 한 번씩 불러야 해서
 * 평소에는 쓰지 않고 1차가 실패했을 때만 쓴다.
 * https://api.met.no/weatherapi/locationforecast/2.0/documentation
 */
const METNO_URL = 'https://api.met.no/weatherapi/locationforecast/2.0/compact'

/** met.no 심볼 코드 → 한글 상태 (아이콘 매칭 표의 낱말을 포함해야 한다) */
const SYMBOL = [
  ['thunder', '뇌우'],
  ['heavysnow', '폭설'],
  ['snow', '눈'],
  ['sleet', '진눈깨비'],
  ['heavyrainshowers', '소나기'],
  ['rainshowers', '소나기'],
  ['lightrainshowers', '소나기'],
  ['heavyrain', '호우'],
  ['lightrain', '이슬비'],
  ['rain', '비'],
  ['fog', '안개'],
  ['cloudy', '흐림'],
  ['partlycloudy', '구름조금'],
  ['fair', '대체로 맑음'],
  ['clearsky', '맑음'],
]

const describeSymbol = (code = '') => {
  const key = code.replace(/_(day|night|polartwilight)$/, '')
  return SYMBOL.find(([word]) => key.includes(word))?.[1] ?? '알 수 없음'
}

/** 한 번에 너무 많이 던지지 않도록 몇 개씩 끊어서 부른다 */
const inBatches = async (items, size, task) => {
  const out = []
  for (let i = 0; i < items.length; i += size) {
    out.push(...(await Promise.all(items.slice(i, i + size).map(task))))
  }
  return out
}

const fetchFromMetNo = async (cities) =>
  inBatches(cities, 8, async (city) => {
    const response = await fetch(\`\${METNO_URL}?lat=\${city.lat}&lon=\${city.lon}\`)
    if (!response.ok) throw new Error(\`백업 서버가 \${response.status} 응답을 보냈습니다.\`)
    const data = await response.json()
    const now = data.properties.timeseries[0]
    const details = now.data.instant.details
    return {
      id: city.id,
      name: city.name,
      region: city.region,
      group: groupOf(city.region),
      temp: Math.round(details.air_temperature ?? 0),
      humidity: Math.round(details.relative_humidity ?? 0),
      status: describeSymbol(now.data.next_1_hours?.summary?.symbol_code),
      observedAt: now.time ?? '',
    }
  })

/** 429(요청 한도 초과)는 잠깐 기다리면 풀리는 경우가 많아 한 번만 다시 시도한다 */
const request = async (url) => {
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await fetch(url)
    if (response.ok) return response
    if (response.status !== 429 || attempt === 1) {
      throw new Error(\`날씨 서버가 \${response.status} 응답을 보냈습니다.\`)
    }
    await sleep(1500)
  }
}

/**
 * 지금 날아가고 있는 요청. 화면 여러 곳에서 동시에 불러도 요청은 하나만 나간다.
 * 앱이 뜨자마자 미리 던져 두면(primeWeather) 화면이 준비될 즈음 답이 와 있다.
 */
let inflight = null

const loadFresh = (cities) => {
  if (!inflight) {
    inflight = requestFresh(cities).finally(() => {
      inflight = null
    })
  }
  return inflight
}

/**
 * 화면보다 먼저 날씨를 부르기 시작한다.
 * 컴포넌트가 다 그려진 뒤에 요청하면 그만큼 늦어진다.
 * 이미 신선한 값이 있으면 아무 것도 하지 않는다.
 */
export const primeWeather = () => {
  if (readCache(CITIES.length, CACHE_TTL)) return
  loadFresh(CITIES).catch(() => {
    // 실패해도 화면 쪽에서 다시 시도하므로 여기서는 조용히 넘어간다
  })
}

/**
 * 저장된 값이 있으면 **먼저 보여 주고**, 오래됐으면 뒤에서 조용히 새로 받는다
 * (stale-while-revalidate). 화면이 비어 있는 시간을 없애기 위함이다.
 */
export const fetchWeather = async (cities = CITIES, force = false) => {
  if (!force) {
    const cached = readCache(cities.length, Infinity)
    if (cached) {
      const isFresh = Date.now() - cached.at < CACHE_TTL
      if (!isFresh) primeWeather() // 뒤에서 새로 받아 둔다
      return { rows: cached.rows, at: cached.at, stale: !isFresh, source: 'cache' }
    }
  }
  return loadFresh(cities)
}

const requestFresh = async (cities = CITIES) => {
  const params = new URLSearchParams({
    latitude: cities.map((c) => c.lat).join(','),
    longitude: cities.map((c) => c.lon).join(','),
    current: 'temperature_2m,relative_humidity_2m,weather_code',
    timezone: 'Asia/Seoul',
  })

  let data
  try {
    const response = await request(\`\${BASE_URL}?\${params}\`)
    data = await response.json()
  } catch (error) {
    console.warn('[weather] 1차 서버 실패, 백업 서버로 넘어갑니다.', error)
    // ② 백업 제공자로 다시 시도한다
    try {
      const rows = await fetchFromMetNo(cities)
      writeCache(cities.length, rows)
      return { rows, at: Date.now(), stale: false, source: 'met.no' }
    } catch (backupError) {
      console.warn('[weather] 백업 서버도 실패했습니다.', backupError)
      // ③ 둘 다 막혔더라도 지난번에 받아 둔 값이 있으면 그걸 보여 준다.
      //    빈 화면에 오류만 띄우는 것보다 낫다.
      const stale = readCache(cities.length, Infinity)
      if (stale) return { rows: stale.rows, at: stale.at, stale: true }
      throw error
    }
  }
  // 지역이 하나면 배열이 아니라 객체 하나로 오므로 형태를 맞춰 준다
  const list = Array.isArray(data) ? data : [data]

  const rows = cities.map((city, index) => {
    const current = list[index]?.current ?? {}
    return {
      id: city.id,
      name: city.name,
      region: city.region, // 시·도 — 카드에 그대로 보여 준다
      group: groupOf(city.region), // 권역 — 탭 필터에 쓴다
      temp: Math.round(current.temperature_2m ?? 0),
      humidity: Math.round(current.relative_humidity_2m ?? 0),
      status: describeWeather(current.weather_code),
      observedAt: current.time ?? '',
    }
  })

  writeCache(cities.length, rows)
  return { rows, at: Date.now(), stale: false, source: 'open-meteo' }
}

/**
 * 두 좌표 사이의 거리(km). 하버사인 공식.
 * 현재 위치에서 가장 가까운 도시를 고를 때만 쓴다.
 */
const distanceKm = (lat1, lon1, lat2, lon2) => {
  const toRad = (deg) => (deg * Math.PI) / 180
  const R = 6371
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(a))
}

/** 주어진 좌표에서 가장 가까운 도시를 돌려준다 */
export const nearestCity = (lat, lon) =>
  CITIES.reduce((closest, city) => {
    const d = distanceKm(lat, lon, city.lat, city.lon)
    return !closest || d < closest.distance ? { ...city, distance: d } : closest
  }, null)

/** 'YYYY-MM-DD' 형식으로 바꾼다 (toISOString은 UTC라 하루가 밀릴 수 있어 직접 만든다) */
export const toDateKey = (date) =>
  \`\${date.getFullYear()}-\${String(date.getMonth() + 1).padStart(2, '0')}-\${String(
    date.getDate(),
  ).padStart(2, '0')}\`

/** 오늘 기준 며칠 전/후 날짜 키 */
export const shiftDate = (dateKey, days) => {
  const d = new Date(\`\${dateKey}T00:00:00\`)
  d.setDate(d.getDate() + days)
  return toDateKey(d)
}

/** Open-Meteo가 주는 범위: 과거 92일 ~ 미래 15일 */
export const DATE_RANGE = {
  min: shiftDate(toDateKey(new Date()), -90),
  max: shiftDate(toDateKey(new Date()), 14),
}

/**
 * 한 도시의 하루치 시간별 날씨를 가져온다.
 * 목록에는 현재 날씨만 필요하니 시간별은 상세보기에서만 부른다.
 * 목록 전체를 시간별로 받으면 응답이 수십 배로 커진다.
 *
 * @param {object} city  CITIES의 항목 (좌표가 있어야 한다)
 * @param {string} startDate 'YYYY-MM-DD'. 과거 90일 ~ 미래 14일까지 된다.
 * @param {string} endDate   생략하면 하루치만. 자정을 넘겨 봐야 할 때 다음 날을 준다.
 * @returns {Promise<Array>} [{ time, hour, temp, humidity, status, rainChance }, ...]
 */
export const fetchHourly = async (city, startDate, endDate = startDate) => {
  const params = new URLSearchParams({
    latitude: city.lat,
    longitude: city.lon,
    hourly: 'temperature_2m,relative_humidity_2m,weather_code,precipitation_probability',
    start_date: startDate,
    end_date: endDate,
    timezone: 'Asia/Seoul',
  })

  const response = await fetch(\`\${BASE_URL}?\${params}\`)
  if (!response.ok) {
    throw new Error(\`시간별 예보를 받지 못했습니다 (\${response.status}).\`)
  }

  const { hourly } = await response.json()

  return hourly.time.map((time, i) => ({
    time,
    hour: Number(time.slice(11, 13)),
    temp: Math.round(hourly.temperature_2m[i]),
    humidity: Math.round(hourly.relative_humidity_2m[i]),
    status: describeWeather(hourly.weather_code[i]),
    rainChance: hourly.precipitation_probability[i] ?? 0,
  }))
}

/**
 * 배경을 확인해 보기 위한 가짜 데이터.
 * 실제 날씨가 며칠씩 맑기만 하면 비·눈·번개 배경을 볼 방법이 없어서 넣어 두었다.
 * demo 표시가 있으므로 실제 관측값과 섞이지 않는다.
 */
export const DEMO_ROWS = [
  ['맑음', 31, 40],
  ['대체로 맑음', 28, 52],
  ['구름조금', 26, 58],
  ['구름많음', 24, 66],
  ['흐림', 21, 72],
  ['이슬비', 18, 84],
  ['비', 19, 92],
  ['호우', 17, 96],
  ['소나기', 23, 80],
  ['눈', -3, 74],
  ['폭설', -7, 81],
  ['안개', 12, 95],
  ['뇌우', 24, 85],
].map(([status, temp, humidity]) => ({
  id: 'demo-' + status.replace(/\\s/g, ''),
  name: status,
  region: '데모',
  group: '데모',
  temp,
  humidity,
  status,
  demo: true,
}))

/** id로 도시 정보(좌표 포함)를 찾는다 */
export const findCity = (id) => CITIES.find((city) => city.id === id) ?? null
`,_n=Object.fromEntries(Object.entries(Object.assign({"./WeatherComposition.vue":se,"./WeatherMockup.vue":pe,"./WeatherParent.vue":St,"./router4/WeatherAboutView.vue":A,"./router4/WeatherDetailView.vue":L,"./router4/WeatherHomeView.vue":B,"./router4/WeatherNotFoundView.vue":V,"./router4/WeatherRouterApp.vue":Kt,"./weather/BaseDashboardCard.vue":M,"./weather/HourlyDetail.vue":Ge,"./weather/RegionTabs.vue":De,"./weather/SearchBar.vue":R,"./weather/UiIcon.vue":N,"./weather/WeatherBackdrop.vue":_t,"./weather/WeatherByStatus.vue":Me,"./weather/WeatherCard.vue":z,"./weather/WeatherIcon.vue":P})).map(([e,t])=>[e.split(`/`).pop().replace(`.vue`,``),t.default]));Object.keys(_n).sort();var vn=e=>_n[e]??null,yn=Object.assign({"./WeatherComposition.vue":Zt,"./WeatherMockup.vue":Qt,"./WeatherParent.vue":$t,"./router4/WeatherAboutView.vue":en,"./router4/WeatherDetailView.vue":tn,"./router4/WeatherHomeView.vue":nn,"./router4/WeatherNotFoundView.vue":rn,"./router4/WeatherRouterApp.vue":an,"./router4/mockCities.js":on,"./weather/BaseDashboardCard.vue":sn,"./weather/HourlyDetail.vue":cn,"./weather/RegionTabs.vue":ln,"./weather/SearchBar.vue":un,"./weather/UiIcon.vue":dn,"./weather/WeatherBackdrop.vue":fn,"./weather/WeatherByStatus.vue":pn,"./weather/WeatherCard.vue":mn,"./weather/WeatherIcon.vue":hn,"./weather/weatherApi.js":gn}),bn=Object.fromEntries(Object.entries(yn).map(([e,t])=>[e.replace(`./`,``).replace(/\.(vue|js)$/,``),t])),xn=Object.fromEntries(Object.keys(yn).map(e=>[e.replace(`./`,``).replace(/\.(vue|js)$/,``),e.replace(`./`,`src/components/assignments/`)])),Sn=e=>bn[e]===void 0?Object.keys(bn).find(t=>t.endsWith(`/${e}`)):e,Cn=e=>bn[Sn(e)]??``,wn=e=>xn[Sn(e)]??``;export{vn as n,Cn as r,wn as t};