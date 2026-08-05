import{n as e}from"./rolldown-runtime-hePW80VL.js";import{$ as t,L as n,P as r,Q as i,Wt as a,_ as o,bt as s,d as c,dt as l,et as u,f as d,i as f,j as p,l as m,p as h,qt as g,u as _,v,z as y}from"./runtime-core.esm-bundler-kkMznkCl.js";import{d as b}from"./runtime-dom.esm-bundler-CHanmBTQ.js";import{r as x}from"./pinia-Cmt0qqyQ.js";import{h as S,m as C}from"./useApi-CROJJdhE-BZRBkDcY.js";import{n as w,t as T}from"./vue-router-Cv6XZhD8.js";import{t as E}from"./_plugin-vue_export-helper-BDNMzG2s.js";import{t as D}from"./WeatherAboutView-_LuNZmaV.js";import{t as O}from"./WeatherNotFoundView-BRTy6Wy1.js";import{t as k}from"./BaseDashboardCard-BhrmAXPN.js";import{n as A,t as j}from"./configStore-DHGN-ap5.js";import{t as M}from"./UiIcon-XW5wIqjf.js";import{i as ee,r as te,s as ne,u as re}from"./weatherApi-BF-tCb-P.js";import{t as ie}from"./HourlyDetail-CYfuyx4U.js";import{a as N,i as P,n as F,r as I,t as L}from"./stageFeatures-C25RV7ww.js";import{t as R}from"./StageDetailView-BTkL5PON.js";import{n as ae,t as z}from"./StageHomeView-BQOD1Yuq.js";import{n as B,r as oe,t as se}from"./WeatherByStatus-CGJsO4d1.js";import{t as V}from"./StageTarotView-CdE1LB_-.js";import{t as H}from"./WeatherBackdrop-DecxXYhD.js";var U=e({default:()=>pe}),ce={class:`dashboard-wrapper`},le={class:`search-box`},W=[`value`],G={class:`list-box`},K=[`onClick`],ue={key:0,class:`badge hot`},q={key:1,class:`badge cool`},de=[`onClick`],J={key:0,class:`empty-message`},fe={class:`status-bar`},pe=E({__name:`WeatherComposition`,setup(e){let r=l([{id:`city_01`,name:`서울`,temp:28,status:`맑음`},{id:`city_02`,name:`수원`,temp:24,status:`비`},{id:`city_03`,name:`부산`,temp:26,status:`구름`}]),a=l(``),s=l(`카드를 클릭하거나 검색해 보세요.`),c=m(()=>{let e=a.value.trim();return e?r.value.filter(t=>t.name.includes(e)):r.value});i(s,e=>{console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${e}"`)}),t(()=>{console.log(`🤖 [watchEffect 자동 호출] 현재 검색어 '${a.value}'에 매칭되는 API 데이터를 필터링합니다.`)});let u=(e,t)=>{window.alert(`${e}의 현재 날씨는 [${t}] 상태입니다.`)};return(e,t)=>(n(),h(`div`,ce,[_(`section`,le,[t[2]||=_(`h3`,null,`🔍 도시 검색`,-1),_(`input`,{type:`text`,value:a.value,placeholder:`검색할 도시 이름 입력`,onInput:t[0]||=e=>a.value=e.target.value},null,40,W),_(`p`,null,[t[1]||=o(` 검색 중인 도시: `,-1),_(`strong`,null,g(a.value),1)])]),_(`section`,G,[t[3]||=_(`h3`,null,`🏙️ 지역별 날씨 현황`,-1),(n(!0),h(f,null,y(c.value,e=>(n(),h(`div`,{key:e.id,class:`weather-card`,onClick:t=>s.value=`${e.name}이 선택되었습니다.`},[_(`h4`,null,g(e.name)+` (`+g(e.status)+`)`,1),_(`p`,null,`현재 기온: `+g(e.temp)+`°C`,1),e.temp>=25?(n(),h(`span`,ue,`🔥 더움 (25도 이상)`)):(n(),h(`span`,q,`❄️ 선선함 (25도 미만)`)),_(`button`,{class:`btn-detail`,onClick:b(t=>u(e.name,e.status),[`stop`])},` 상세보기 `,8,de)],8,K))),128)),c.value.length===0?(n(),h(`p`,J,` 😭 검색 결과와 일치하는 도시가 없습니다. `)):d(``,!0)]),_(`div`,fe,g(s.value),1)]))}},[[`__scopeId`,`data-v-6342b841`]]),Y=e({default:()=>Ce}),X={class:`weather-app`},Z={class:`weather-search`},Q=[`value`],me={class:`status-bar`},he={class:`weather-grid`},ge=[`onClick`],_e={class:`weather-card-header`},ve={class:`temperature`},ye={key:0,class:`hot`},be={key:1,class:`cool`},xe=[`onClick`],Se={key:0,class:`empty-message`},Ce=E({__name:`WeatherMockup`,setup(e){let t=l(``),r=l(`도시 카드를 선택해 주세요.`),i=l([{id:1,city:`서울`,temperature:28,weather:`맑음`},{id:2,city:`부산`,temperature:24,weather:`흐림`},{id:3,city:`제주`,temperature:26,weather:`구름 조금`},{id:4,city:`대전`,temperature:22,weather:`비`},{id:5,city:`광주`,temperature:30,weather:`맑음`}]),a=e=>{t.value=e.target.value},o=()=>{let e=t.value.trim();return e?i.value.filter(t=>t.city.includes(e)):i.value},s=e=>e>=25?`🔥 더움`:`❄️ 선선함`,c=e=>{r.value=`${e}이 선택되었습니다.`},u=(e,t)=>{window.alert(`${e}의 현재 날씨는 [${t}] 상태입니다.`)};return(e,i)=>(n(),h(`main`,X,[i[1]||=_(`h1`,null,`날씨 Mockup`,-1),_(`div`,Z,[i[0]||=_(`label`,{for:`city-search`},`한글 도시 검색`,-1),_(`input`,{id:`city-search`,value:t.value,type:`text`,placeholder:`예: 서울`,onInput:a},null,40,Q)]),_(`p`,me,g(r.value),1),_(`div`,he,[(n(!0),h(f,null,y(o(),e=>(n(),h(`article`,{key:e.id,class:`weather-card`,onClick:t=>c(e.city)},[_(`div`,_e,[_(`h2`,null,g(e.city),1),_(`span`,null,g(e.weather),1)]),_(`p`,ve,g(e.temperature)+`℃`,1),e.temperature>=25?(n(),h(`p`,ye,`🔥 더움`)):(n(),h(`p`,be,`❄️ 선선함`)),_(`button`,{type:`button`,onClick:b(t=>u(e.city,s(e.temperature)),[`stop`])},` 상세보기 `,8,xe)],8,ge))),128))]),o().length===0?(n(),h(`p`,Se,` 검색 결과와 일치하는 도시가 없습니다. `)):d(``,!0)]))}},[[`__scopeId`,`data-v-a56bc1a5`]]),we=e({default:()=>qe}),Te={class:`dashboard-wrapper`},Ee={class:`view-tabs`,role:`tablist`},De=[`aria-selected`],Oe=[`aria-selected`],ke={class:`tool-row`},Ae={class:`summary`},je={key:0,class:`fav-count`},Me=[`disabled`],Ne=[`disabled`],Pe={key:0,class:`hint stale`},Fe={key:1,class:`hint`},Ie={key:3,class:`error-message`},Le={key:4,class:`skeleton`},Re={key:0,class:`empty-message`},ze={key:1,class:`pager`,"aria-label":`목록 페이지`},Be=[`disabled`],Ve=[`aria-current`,`onClick`],He=[`disabled`],Ue={class:`status-bar`},We={key:0,class:`stamp`},Ge=`inwoo-weather-favorites`,$=5,Ke=6e5,qe=E({__name:`WeatherParent`,setup(e){let t=l([]),b=l(!1),x=l(``),S=l(!1),C=l(``),w=l(``),T=l(`전체`),E=l(`region`),D=l(`카드를 클릭하거나 검색해 보세요.`),O=l(``),A=l(1),j=()=>{O.value=``,D.value=`카드를 클릭하거나 검색해 보세요.`},N=e=>{if(O.value===e){j();return}O.value=e;let n=t.value.find(t=>t.id===e);D.value=n?`${n.name} · ${n.status} · ${n.temp}°C · 습도 ${n.humidity}%`:`카드를 클릭하거나 검색해 보세요.`},P=l(JSON.parse(localStorage.getItem(Ge)??`[]`)),F=e=>{P.value=P.value.includes(e)?P.value.filter(t=>t!==e):[...P.value,e]};i(P,e=>localStorage.setItem(Ge,JSON.stringify(e)),{deep:!0});let I=l(``),L=l(`idle`),R=()=>{if(!navigator.geolocation){L.value=`denied`;return}L.value=`asking`,navigator.geolocation.getCurrentPosition(({coords:e})=>{let t=re(e.latitude,e.longitude);I.value=t?.id??``,L.value=`done`},()=>{L.value=`denied`},{timeout:8e3})},z=async(e=!1)=>{b.value=!0,x.value=``;try{let{rows:n,at:r,stale:i}=await ne(void 0,e);t.value=[...n,...te],S.value=i,i&&setTimeout(()=>z(!0),0),U=r,C.value=new Date(r).toLocaleTimeString(`ko-KR`,{hour:`2-digit`,minute:`2-digit`})}catch(e){x.value=`날씨를 불러오지 못했습니다. 네트워크를 확인하고 다시 시도해 주세요.`,S.value=!1,console.error(`[weather] 불러오기 실패`,e)}finally{b.value=!1}},V=null,U=0,ce=()=>{le(),V=setInterval(()=>{document.visibilityState===`visible`&&z(!0)},Ke)},le=()=>{V&&clearInterval(V),V=null},W=()=>{document.visibilityState===`visible`&&Date.now()-U>Ke&&z(!0)};p(()=>{le(),document.removeEventListener(`visibilitychange`,W)}),r(async()=>{z(),ce(),document.addEventListener(`visibilitychange`,W),(await navigator.permissions?.query({name:`geolocation`}).catch(()=>null))?.state===`granted`&&R()});let G=m(()=>{let e=w.value.trim();return t.value.filter(t=>!e||t.name.includes(e))}),K=m(()=>{let e=G.value.filter(e=>T.value===`전체`||e.group===T.value),t=e=>e.id===I.value?0:P.value.includes(e.id)?1:2;return[...e].sort((e,n)=>t(e)-t(n))}),ue=m(()=>G.value.reduce((e,t)=>(e[t.group]=(e[t.group]??0)+1,e),{전체:G.value.length})),q=m(()=>Math.max(1,Math.ceil(K.value.length/$))),de=m(()=>K.value.slice((A.value-1)*$,A.value*$));i([w,T,E],()=>A.value=1),i(q,e=>{A.value>e&&(A.value=e)});let J=m(()=>t.value.find(e=>e.id===O.value)??null),fe=m(()=>t.value.find(e=>e.id===O.value)??t.value.find(e=>e.id===I.value)??null),pe=m(()=>fe.value?.status??``),Y=m(()=>G.value.filter(e=>P.value.includes(e.id)).length);i(D,e=>{console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${e}"`)});let X=l(``),Z=m(()=>t.value.find(e=>e.id===X.value)??null),Q=e=>{let n=t.value.find(t=>t.name===e);X.value=X.value===n?.id?``:n?.id??``};return(e,r)=>(n(),h(`div`,Te,[v(H,{status:pe.value},null,8,[`status`]),v(k,null,{default:u(()=>[v(ae,{"current-query":w.value,onUpdateQuery:r[0]||=e=>w.value=e},null,8,[`current-query`])]),_:1}),v(k,null,{default:u(()=>[_(`div`,Ee,[_(`button`,{type:`button`,role:`tab`,"aria-selected":E.value===`region`,class:a({active:E.value===`region`}),onClick:r[1]||=e=>E.value=`region`},[v(M,{name:`city`,size:16}),r[10]||=o(` 지역별 날씨 현황 `,-1)],10,De),_(`button`,{type:`button`,role:`tab`,"aria-selected":E.value===`status`,class:a({active:E.value===`status`}),onClick:r[2]||=e=>E.value=`status`},[v(M,{name:`droplet`,size:16}),r[11]||=o(` 날씨별 지역 현황 `,-1)],10,Oe)]),_(`div`,ke,[_(`p`,Ae,[_(`b`,null,g(G.value.length),1),r[12]||=o(`곳 `,-1),Y.value?(n(),h(`span`,je,[v(M,{name:`star`,size:12,filled:!0}),o(` `+g(Y.value),1)])):d(``,!0)]),_(`button`,{class:`tool`,type:`button`,disabled:L.value===`asking`,onClick:R},[v(M,{name:`location`,size:14}),o(` `+g(L.value===`asking`?`찾는 중…`:`내 위치`),1)],8,Me),_(`button`,{class:`tool`,type:`button`,disabled:b.value,onClick:r[3]||=e=>z(!0)},g(b.value?`불러오는 중…`:`새로고침`),9,Ne)]),S.value?(n(),h(`p`,Pe,[r[13]||=o(` 지금 서버 응답을 받지 못해 `,-1),_(`b`,null,g(C.value)+`에 받아 둔 값`,1),r[14]||=o(`을 보여 주고 있습니다. 잠시 뒤 새로고침을 눌러 보세요. `,-1)])):d(``,!0),L.value===`denied`?(n(),h(`p`,Fe,` 위치 권한이 없어 현재 위치를 표시하지 못했습니다. 나머지 기능은 그대로 쓸 수 있습니다. `)):d(``,!0),E.value===`region`?(n(),c(oe,{key:2,regions:[...s(ee),`데모`],current:T.value,counts:ue.value,onSelectRegion:r[4]||=e=>T.value=e},null,8,[`regions`,`current`,`counts`])):d(``,!0),x.value?(n(),h(`p`,Ie,[o(g(x.value)+` `,1),_(`button`,{type:`button`,onClick:r[5]||=e=>z(!0)},`다시 시도`)])):b.value&&!t.value.length?(n(),h(`div`,Le,[(n(),h(f,null,y(5,e=>_(`div`,{key:e,class:`skeleton-card`},[...r[15]||=[_(`span`,{class:`sk-tile`},null,-1),_(`span`,{class:`sk-lines`},[_(`i`,{class:`sk-line wide`}),_(`i`,{class:`sk-line`})],-1),_(`span`,{class:`sk-metrics`},[_(`i`,{class:`sk-pill`}),_(`i`,{class:`sk-pill`})],-1)]])),64))])):E.value===`region`?(n(),h(f,{key:5},[(n(!0),h(f,null,y(de.value,e=>(n(),h(f,{key:e.id},[v(B,{"city-item":e,favorite:P.value.includes(e.id),here:e.id===I.value,open:e.id===X.value,selected:e.id===O.value,onSelectCard:N,onClickDetail:Q,onToggleFavorite:F},null,8,[`city-item`,`favorite`,`here`,`open`,`selected`]),e.id===X.value?(n(),c(ie,{key:0,city:Z.value,onClose:r[6]||=e=>X.value=``},null,8,[`city`])):d(``,!0)],64))),128)),K.value.length===0?(n(),h(`p`,Re,[v(M,{name:`empty`,size:22}),r[16]||=o(` 검색 결과와 일치하는 도시가 없습니다. `,-1)])):d(``,!0),q.value>1?(n(),h(`nav`,ze,[_(`button`,{type:`button`,disabled:A.value===1,"aria-label":`이전`,onClick:r[7]||=e=>A.value--},`‹`,8,Be),(n(!0),h(f,null,y(q.value,e=>(n(),h(`button`,{key:e,type:`button`,class:a({active:e===A.value}),"aria-current":e===A.value?`page`:void 0,onClick:t=>A.value=e},g(e),11,Ve))),128)),_(`button`,{type:`button`,disabled:A.value===q.value,"aria-label":`다음`,onClick:r[8]||=e=>A.value++},` › `,8,He)])):d(``,!0)],64)):(n(),h(f,{key:6},[J.value?(n(),h(f,{key:0},[v(B,{"city-item":J.value,favorite:P.value.includes(J.value.id),here:J.value.id===I.value,open:J.value.id===X.value,selected:!0,onSelectCard:N,onClickDetail:Q,onToggleFavorite:F},null,8,[`city-item`,`favorite`,`here`,`open`]),J.value.id===X.value?(n(),c(ie,{key:0,city:Z.value,onClose:r[9]||=e=>X.value=``},null,8,[`city`])):d(``,!0)],64)):d(``,!0),v(se,{list:G.value,favorites:P.value,"here-id":I.value,"selected-id":O.value,onSelectCard:N,onToggleFavorite:F},null,8,[`list`,`favorites`,`here-id`,`selected-id`])],64))]),_:1}),_(`div`,Ue,[_(`span`,null,g(D.value),1),C.value?(n(),h(`small`,We,g(C.value)+` 기준 · Open-Meteo`,1)):d(``,!0)])]))}},[[`__scopeId`,`data-v-4af13157`]]),Je=e({default:()=>Qe}),Ye=[`title`],Xe={class:`symbol`},Ze={class:`name`},Qe=E({__name:`UnitToggler`,setup(e){let t=j(),{unit:r,unitSymbol:i}=x(t),{toggleUnit:a}=t;return(e,t)=>(n(),h(`button`,{type:`button`,class:`unit-toggler`,title:s(r)===`celsius`?`화씨(℉)로 보기`:`섭씨(℃)로 보기`,onClick:t[0]||=(...e)=>s(a)&&s(a)(...e)},[_(`span`,Xe,g(s(i)),1),_(`span`,Ze,g(s(r)===`celsius`?`섭씨`:`화씨`),1)],8,Ye))}},[[`__scopeId`,`data-v-052b21fd`]]),$e=e({default:()=>it}),et={class:`app`},tt={class:`column`},nt={class:`nav`,role:`tablist`},rt={class:`url`},it=E({__name:`WeatherUnitApp`,setup(e){let t=C(),r=m(()=>t.params.stageId??`5`),i=m(()=>t.name===`a4-about`);return(e,c)=>(n(),h(`div`,et,[v(H,{status:s(I)},null,8,[`status`]),_(`div`,tt,[_(`nav`,nt,[v(s(T),{to:{name:`a4-home`,params:{stageId:r.value}},class:a({on:!i.value})},{default:u(()=>[...c[0]||=[o(` 홈 `,-1)]]),_:1},8,[`to`,`class`]),v(s(T),{to:{name:`a4-about`,params:{stageId:r.value}},"active-class":`on`},{default:u(()=>[...c[1]||=[o(` 소개 `,-1)]]),_:1},8,[`to`]),_(`code`,rt,g(s(t).path),1),v(Qe)]),v(s(w))])]))}},[[`__scopeId`,`data-v-666130dd`]]),at=e({default:()=>_t}),ot={class:`head`},st={class:`title`},ct={class:`eyebrow`},lt={class:`status`},ut={class:`temp`},dt={class:`unit`},ft={class:`observation`},pt={class:`small`},mt={class:`foot`},ht={key:0,class:`from`},gt={key:1,class:`missing`},_t=E({__name:`WeatherDetailView`,setup(e){let t=C(),i=S(),p=l(null);r(()=>{p.value=N(t.params.cityId),p.value&&(I.value=p.value.status)});let y=m(()=>{let e=p.value?.status??``;return e.includes(`맑`)?`warm`:e.includes(`비`)||e.includes(`눈`)?`cool`:`neutral`}),{unit:b,unitSymbol:w}=x(j()),T=m(()=>{let e=p.value?.temp??0;return b.value===`celsius`?e:Math.round(e*9/5+32)}),E=()=>i.go(-1);return(e,r)=>(n(),c(k,null,{default:u(()=>[p.value?(n(),h(f,{key:0},[_(`header`,ot,[_(`div`,{class:a([`icon-tile`,y.value])},[v(A,{status:p.value.status,size:34},null,8,[`status`])],2),_(`div`,st,[_(`p`,ct,[o(g(p.value.region)+` · `,1),_(`code`,null,g(s(t).params.cityId),1)]),_(`h3`,null,g(p.value.name),1),_(`p`,lt,g(p.value.status),1)]),_(`p`,ut,[o(g(T.value),1),_(`span`,dt,g(s(w)),1)])]),_(`dl`,ft,[_(`div`,null,[r[1]||=_(`dt`,null,`습도`,-1),_(`dd`,null,[o(g(p.value.humidity),1),r[0]||=_(`i`,null,`%`,-1)])]),_(`div`,null,[r[3]||=_(`dt`,null,`풍속`,-1),_(`dd`,null,[o(g(p.value.wind),1),r[2]||=_(`i`,null,`m/s`,-1)])]),_(`div`,null,[r[5]||=_(`dt`,null,`기압`,-1),_(`dd`,null,[o(g(p.value.pressure),1),r[4]||=_(`i`,null,`hPa`,-1)])]),_(`div`,null,[r[7]||=_(`dt`,null,`가시거리`,-1),_(`dd`,null,[o(g(p.value.visibility),1),r[6]||=_(`i`,null,`km`,-1)])]),_(`div`,null,[r[8]||=_(`dt`,null,`미세먼지`,-1),_(`dd`,null,g(p.value.dust),1)]),_(`div`,null,[r[9]||=_(`dt`,null,`일출 · 일몰`,-1),_(`dd`,pt,g(p.value.sunrise)+` · `+g(p.value.sunset),1)])]),_(`footer`,mt,[s(t).query.from?(n(),h(`p`,ht,[r[10]||=_(`span`,{class:`tag`},`route.query`,-1),_(`code`,null,g(s(t).query),1)])):d(``,!0),_(`button`,{type:`button`,onClick:E},`← 이전 화면으로`)])],64)):(n(),h(`div`,gt,[v(M,{name:`empty`,size:24}),_(`p`,null,[_(`code`,null,g(s(t).params.cityId),1),r[11]||=o(` 에 해당하는 도시가 없습니다.`,-1)]),_(`button`,{type:`button`,onClick:E},`← 이전 화면으로`)]))]),_:1}))}},[[`__scopeId`,`data-v-0ad346f0`]]),vt=e({default:()=>xt}),yt={class:`home`},bt={key:0,class:`empty`},xt=E({__name:`WeatherHomeView`,setup(e){let t=C(),a=S(),{unit:p,unitSymbol:g}=x(j()),b=e=>p.value===`celsius`?e:Math.round(e*9/5+32),w=l(``),T=l(``),E=()=>{let e=P.find(e=>e.id===T.value);I.value=(e??P[0]).status};r(E),i(T,E);let D=m(()=>{let e=w.value.trim();return e?P.filter(t=>t.name.includes(e)):P}),O=e=>{let n=P.find(t=>t.name===e);n&&a.push({name:`a4-detail`,params:{stageId:t.params.stageId??`4`,cityId:n.id},query:{from:`home`}})};return(e,t)=>(n(),h(`div`,yt,[v(k,null,{default:u(()=>[v(ae,{"current-query":w.value,onUpdateQuery:t[0]||=e=>w.value=e},null,8,[`current-query`])]),_:1}),v(k,null,{default:u(()=>[_(`h3`,null,[v(M,{name:`city`,size:19}),t[2]||=o(` 지역별 날씨 현황`,-1)]),(n(!0),h(f,null,y(D.value,e=>(n(),c(B,{key:e.id,"city-item":e,selected:e.id===T.value,"temp-value":b(e.temp),"temp-unit":s(g),"detail-label":`상세보기`,onSelectCard:t[1]||=e=>T.value=T.value===e?``:e,onClickDetail:O},null,8,[`city-item`,`selected`,`temp-value`,`temp-unit`]))),128)),D.value.length?d(``,!0):(n(),h(`p`,bt,[v(M,{name:`empty`,size:22}),t[3]||=o(` 검색 결과와 일치하는 도시가 없습니다. `,-1)]))]),_:1})]))}},[[`__scopeId`,`data-v-de035d07`]]),St=e({default:()=>Dt}),Ct={class:`app`},wt={class:`column`},Tt={class:`nav`,role:`tablist`},Et={class:`url`},Dt=E({__name:`WeatherRouterApp`,setup(e){let t=C(),r=m(()=>t.params.stageId??`4`),i=m(()=>t.name===`a4-about`);return(e,c)=>(n(),h(`div`,Ct,[v(H,{status:s(I)},null,8,[`status`]),_(`div`,wt,[_(`nav`,Tt,[v(s(T),{to:{name:`a4-home`,params:{stageId:r.value}},class:a({on:!i.value})},{default:u(()=>[...c[0]||=[o(` 홈 `,-1)]]),_:1},8,[`to`,`class`]),v(s(T),{to:{name:`a4-about`,params:{stageId:r.value}},"active-class":`on`},{default:u(()=>[...c[1]||=[o(` 소개 `,-1)]]),_:1},8,[`to`]),_(`code`,Et,g(s(t).path),1)]),v(s(w))])]))}},[[`__scopeId`,`data-v-bc06f5e7`]]),Ot=e({default:()=>Nt}),kt={class:`app`},At={class:`column`},jt={class:`nav`,role:`tablist`},Mt={class:`url`},Nt=E({__name:`WeatherStackedApp`,setup(e){let t=C(),r=m(()=>F(t.params.stageId)),i=m(()=>String(r.value)),l=m(()=>L(t.params.stageId)),f=m(()=>t.name===`a4-about`),p=m(()=>t.name===`a4-tarot`),y=m(()=>!f.value&&!p.value);return(e,r)=>(n(),h(`div`,kt,[v(H,{status:s(I)},null,8,[`status`]),_(`div`,At,[_(`nav`,jt,[v(s(T),{to:{name:`a4-home`,params:{stageId:i.value}},class:a({on:y.value})},{default:u(()=>[...r[0]||=[o(` 홈 `,-1)]]),_:1},8,[`to`,`class`]),v(s(T),{to:{name:`a4-about`,params:{stageId:i.value}},"active-class":`on`},{default:u(()=>[...r[1]||=[o(` 소개 `,-1)]]),_:1},8,[`to`]),l.value.fortune?(n(),c(s(T),{key:0,to:{name:`a4-tarot`,params:{stageId:i.value}},"active-class":`on`},{default:u(()=>[...r[2]||=[o(` 운세 `,-1)]]),_:1},8,[`to`])):d(``,!0),_(`code`,Mt,g(s(t).path),1),l.value.unitToggle?(n(),c(Qe,{key:1})):d(``,!0)]),v(s(w))])]))}},[[`__scopeId`,`data-v-f7dcddb8`]]),Pt=`<script setup>
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
`,Ft=`<script setup>
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
`,It=`<script setup>
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
import BaseDashboardCard from '../weather/BaseDashboardCard.vue'
import SearchBar from '../weather/SearchBar.vue'
import RegionTabs from '../weather/RegionTabs.vue'
import WeatherCard from '../weather/WeatherCard.vue'
import WeatherByStatus from '../weather/WeatherByStatus.vue'
import HourlyDetail from '../weather/HourlyDetail.vue'
import WeatherBackdrop from '../weather/WeatherBackdrop.vue'
import UiIcon from '../weather/UiIcon.vue'
import { fetchWeather, nearestCity, REGIONS, DEMO_ROWS } from '../weather/weatherApi'

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
/*
 * 최종 결과물과 같은 규격 — 배경은 판 전체를 채우고, 내용만 가운데 기둥에 담긴다.
 * 그래서 바깥은 폭을 열어 두고 max-width 는 아래 자식 쪽에 건다.
 */
.dashboard-wrapper {
  position: relative;
}

/* 배경(z-index 0) 위에 카드가 오도록 */
.dashboard-wrapper > *:not(.backdrop) {
  position: relative;
  z-index: 1;
  /* 원본은 width: 600px 고정이지만, 좁은 화면에서 넘치지 않도록 max-width로 바꿈 */
  max-width: 660px;
  margin-right: auto;
  margin-left: auto;
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
`,Lt=`<script setup>
import { storeToRefs } from 'pinia'
import { useConfigStore } from '../../../stores/configStore'

/**
 * 누적 과제 5 — 단위 변경 버튼 (교안 191쪽)
 *
 * 이 컴포넌트는 props 를 하나도 받지 않는다.
 * 부모가 값을 내려 주는 대신 Store 를 직접 열어 보기 때문이다.
 * 그래서 내비게이션 바 옆이든 어디든, 갖다 놓기만 하면 동작한다.
 *
 * storeToRefs 로 감싸야 unit·unitSymbol 의 반응성이 살아 있다.
 * 그냥 구조 분해하면 값만 복사되어 눌러도 화면이 바뀌지 않는다.
 * 반면 toggleUnit 은 함수라 storeToRefs 없이 그대로 꺼내 쓴다.
 */
const configStore = useConfigStore()
const { unit, unitSymbol } = storeToRefs(configStore)
const { toggleUnit } = configStore
<\/script>

<template>
  <button
    type="button"
    class="unit-toggler"
    :title="unit === 'celsius' ? '화씨(℉)로 보기' : '섭씨(℃)로 보기'"
    @click="toggleUnit"
  >
    <span class="symbol">{{ unitSymbol }}</span>
    <span class="name">{{ unit === 'celsius' ? '섭씨' : '화씨' }}</span>
  </button>
</template>

<style scoped>
.unit-toggler {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  padding: 7px 14px 7px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
  font: inherit;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}

.unit-toggler:hover {
  border-color: var(--accent);
  background: var(--accent-tint);
}

.symbol {
  display: grid;
  width: 21px;
  height: 21px;
  place-items: center;
  border-radius: 50%;
  color: var(--on-accent);
  background: var(--accent);
  font-size: 11.5px;
  font-weight: 700;
}

.name {
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 700;
}
</style>
`,Rt=`<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import WeatherBackdrop from '../../weather/WeatherBackdrop.vue'
import { backdropStatus } from '../router4/backdropState'
import UnitToggler from './UnitToggler.vue'

/**
 * 과제 5 결과물의 껍데기 — 과제 4의 껍데기에 UnitToggler 한 줄을 더한 것이다.
 *
 * 화면(홈 · 소개 · 상세)은 과제 4에서 만든 것을 그대로 쓴다.
 * 누적 과제라 새로 만드는 것이 아니라 "쌓는" 것이고,
 * 실제로 이번에 늘어난 것은 내비게이션 바 옆의 단위 버튼 하나뿐이다.
 *
 * 그 버튼과 아래 화면들은 서로를 전혀 모른다.
 * 둘 다 configStore 라는 같은 사물함을 볼 뿐이다 — 그것이 Pinia 를 쓰는 이유다.
 */
const route = useRoute()

/** 자식 경로로 이동할 때 stageId 를 유지해야 한다 */
const stageId = computed(() => route.params.stageId ?? '5')

/** 소개를 뺀 나머지(홈 · 상세 · 없는 주소)는 전부 홈 갈래로 본다 */
const isAbout = computed(() => route.name === 'a4-about')
<\/script>

<template>
  <div class="app">
    <!-- 보고 있는 도시의 날씨가 배경이 된다 -->
    <WeatherBackdrop :status="backdropStatus" />

    <!-- 최종 결과물과 같은 형태 — 내비게이션과 본문이 한 기둥 안에서 같은 폭을 쓴다 -->
    <div class="column">
      <!-- 내비게이션 바 — 오른쪽 끝에 단위 변경 버튼을 둔다 -->
      <nav class="nav" role="tablist">
        <RouterLink :to="{ name: 'a4-home', params: { stageId } }" :class="{ on: !isAbout }">
          홈
        </RouterLink>
        <RouterLink :to="{ name: 'a4-about', params: { stageId } }" active-class="on">
          소개
        </RouterLink>
        <code class="url">{{ route.path }}</code>
        <UnitToggler />
      </nav>

      <!-- 메인 콘텐츠 — 주소에 맞는 화면이 여기 놓인다 -->
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
/* ── 여기부터는 최종 결과물(final/index.vue)과 같은 규격이다 ── */
.app {
  position: relative;
  display: grid;
}

/* 배경(z-index 0) 위에 내용이 오도록 */
.app > *:not(.backdrop) {
  position: relative;
  z-index: 1;
}

/* 화면의 폭을 여기 한 곳에서 정한다 */
.column {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  gap: 12px;
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  align-items: center;
  padding: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  backdrop-filter: blur(10px);
}

.nav a {
  padding: 8px 16px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.nav a:hover {
  color: var(--ink);
}

.nav a.on {
  color: var(--on-accent);
  background: var(--accent);
}

/* 주소는 오른쪽으로 밀고, 그 뒤에 단위 버튼이 온다 */
.url {
  margin-left: auto;
  padding: 0 12px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
  overflow-wrap: anywhere;
}

@media (max-width: 620px) {
  .url {
    display: none;
  }

  /* 주소가 숨으면 단위 버튼이 오른쪽 끝을 이어받는다 */
  .nav :deep(.unit-toggler) {
    margin-left: auto;
  }
}
</style>
`,zt=`<script setup>
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
`,Bt=`<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '../../../stores/configStore'
import BaseDashboardCard from '../../weather/BaseDashboardCard.vue'
import WeatherIcon from '../../weather/WeatherIcon.vue'
import UiIcon from '../../weather/UiIcon.vue'
import { findMockCity } from './mockCities'
import { backdropStatus } from './backdropState'

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
  // 보고 있는 도시의 날씨로 배경을 바꾼다
  if (city.value) backdropStatus.value = city.value.status
})

/** 아이콘 받침 색조 — 메인 카드와 같은 규칙 */
const tone = computed(() => {
  const status = city.value?.status ?? ''
  if (status.includes('맑')) return 'warm'
  if (status.includes('비') || status.includes('눈')) return 'cool'
  return 'neutral'
})

/**
 * 과제 5 — 메인 화면과 똑같은 Store 를 본다.
 * 메인에서 화씨로 바꾸고 상세로 들어와도 화씨가 그대로 유지되는 이유다.
 */
const { unit, unitSymbol } = storeToRefs(useConfigStore())

/** 교안 191쪽 — 화씨 환산식 (섭씨 × 9) / 5 + 32 */
const displayTemp = computed(() => {
  const celsius = city.value?.temp ?? 0
  return unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)
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
        <p class="temp">{{ displayTemp }}<span class="unit">{{ unitSymbol }}</span></p>
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
`,Vt=`<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '../../../stores/configStore'
import BaseDashboardCard from '../../weather/BaseDashboardCard.vue'
import SearchBar from '../../weather/SearchBar.vue'
import WeatherCard from '../../weather/WeatherCard.vue'
import UiIcon from '../../weather/UiIcon.vue'
import { MOCK_CITIES } from './mockCities'
import { backdropStatus } from './backdropState'

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

/**
 * 과제 5 — 온도 단위는 Store 에서 읽는다.
 *
 * 단위를 바꾸는 버튼(UnitToggler)은 이 화면이 아니라 껍데기의 내비게이션 바에 있다.
 * 서로 남남인 두 컴포넌트가 같은 값을 보는 방법이 Store 다.
 * 과제 4까지는 이 값을 건드릴 버튼 자체가 없어 늘 섭씨(초깃값)로 남는다.
 */
const { unit, unitSymbol } = storeToRefs(useConfigStore())

/** 교안 191쪽 — 섭씨 원본은 그대로 두고, 화씨는 (섭씨 × 9) / 5 + 32 로 환산해 보여 준다 */
const toUnit = (celsius) =>
  unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)

const searchQuery = ref('')
const selectedId = ref('')

/** 고른 도시가 없으면 첫 도시의 날씨를 배경으로 쓴다 */
const applyBackdrop = () => {
  const picked = MOCK_CITIES.find((city) => city.id === selectedId.value)
  backdropStatus.value = (picked ?? MOCK_CITIES[0]).status
}

onMounted(applyBackdrop)
watch(selectedId, applyBackdrop)

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
        :temp-value="toUnit(city.temp)"
        :temp-unit="unitSymbol"
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
`,Ht=`<script setup>
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
`,Ut=`<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import WeatherBackdrop from '../../weather/WeatherBackdrop.vue'
import { backdropStatus } from './backdropState'

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

/**
 * 소개를 뺀 나머지(홈 · 상세 · 없는 주소)는 전부 홈 갈래로 본다.
 * exact-active-class 만 쓰면 상세 화면에서 아무 탭도 안 눌린 상태가 된다.
 */
const isAbout = computed(() => route.name === 'a4-about')
<\/script>

<template>
  <div class="app">
    <!-- 보고 있는 도시의 날씨가 배경이 된다 -->
    <WeatherBackdrop :status="backdropStatus" />

    <!-- 최종 결과물과 같은 형태 — 내비게이션과 본문이 한 기둥 안에서 같은 폭을 쓴다 -->
    <div class="column">
      <!-- 내비게이션 바 -->
      <nav class="nav" role="tablist">
        <RouterLink :to="{ name: 'a4-home', params: { stageId } }" :class="{ on: !isAbout }">
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
  </div>
</template>

<style scoped>
/* ── 여기부터는 최종 결과물(final/index.vue)과 같은 규격이다 ── */
.app {
  position: relative;
  display: grid;
}

/* 배경(z-index 0) 위에 내용이 오도록 */
.app > *:not(.backdrop) {
  position: relative;
  z-index: 1;
}

/*
 * 화면의 폭을 여기 한 곳에서 정한다.
 * minmax(0, 1fr) 이 없으면 가로로 긴 내용이 들어왔을 때 칸이 벌어져
 * max-width 를 넘어간다. 0 을 최소로 못박아야 그 안에서 스크롤된다.
 */
.column {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  gap: 12px;
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  align-items: center;
  padding: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  backdrop-filter: blur(10px);
}

.nav a {
  padding: 8px 16px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.nav a:hover {
  color: var(--ink);
}

.nav a.on {
  color: var(--on-accent);
  background: var(--accent);
}

.url {
  margin-left: auto;
  padding: 0 12px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
  overflow-wrap: anywhere;
}

@media (max-width: 620px) {
  .url {
    display: none;
  }
}
</style>
`,Wt=`import { ref } from 'vue'

/**
 * 배경이 따라갈 날씨.
 *
 * 홈에서 고른 도시, 상세 화면의 도시가 각각 이 값을 바꾸고
 * 껍데기(WeatherRouterApp)의 배경이 그 값을 본다.
 *
 * 형제 화면끼리 값을 주고받아야 하는데 공통 부모를 거치기 번거로워서
 * 파일 하나에 담아 공유한다. 이런 상황이 잦아지면 Pinia(CH06)로 옮긴다.
 */
export const backdropStatus = ref('')
`,Gt=`/**
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
`,Kt=`<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import BaseDashboardCard from '../../weather/BaseDashboardCard.vue'
import WeatherIcon from '../../weather/WeatherIcon.vue'
import HourlyDetail from '../../weather/HourlyDetail.vue'
import UiIcon from '../../weather/UiIcon.vue'
import { CITIES, fetchCityDetail, fetchWeather, findCity } from '../../weather/weatherApi'
import { findMockCity } from '../router4/mockCities'
import { backdropStatus } from '../router4/backdropState'
import { useConfigStore } from '../../../stores/configStore'
import { featuresOf } from './stageFeatures'

/**
 * 4단계부터의 상세 화면.
 *
 * 관측값 표와 시간별 예보를 한 화면에 함께 둔다.
 * 단계가 올라간다고 앞 단계에 있던 것이 사라지면 안 되므로,
 * 화면은 하나만 두고 "채울 수 있는 값만" 채우는 방식으로 만든다.
 *
 *   4·5단계  Mock 에서 도시를 고른다 (관측값이 전부 들어 있다)
 *   6단계~   실제 응답에서 고른다 (제공자에 따라 없는 값이 있다)
 *
 * 시간별 예보는 좌표가 있어야 부를 수 있다. Mock 도시도 이름이 같은
 * 실제 도시를 찾아 붙여 주므로 4단계에서도 시간별을 볼 수 있다.
 */
const route = useRoute()
const router = useRouter()

const features = computed(() => featuresOf(route.params.stageId))
const { unit, unitSymbol } = storeToRefs(useConfigStore())
const toUnit = (celsius) =>
  unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)

const city = ref(null)
const isLoading = ref(true)
const errorMessage = ref('')

/**
 * 목록 응답에 없는 관측값(가시거리 · 일출/일몰 · 미세먼지).
 * 45개 도시분을 미리 받아 두면 낭비라, 이 화면에서 이 도시 것만 따로 받는다.
 */
const extras = ref({})

/**
 * 좌표는 목록을 기다리지 않고도 알 수 있다.
 * 실 API 는 id 가 곧 도시 코드이고, Mock 은 이름이 같은 실제 도시를 찾으면 된다.
 * 덕분에 목록 조회와 추가 관측값 조회를 나란히 보낼 수 있다.
 */
const coordsFor = (cityId) => {
  const direct = findCity(cityId)
  if (direct) return direct
  const mock = findMockCity(cityId)
  return mock ? (CITIES.find((item) => item.name === mock.name) ?? null) : null
}

const load = async () => {
  isLoading.value = true
  errorMessage.value = ''
  try {
    const live = features.value.liveApi
    const known = coordsFor(route.params.cityId)

    // 두 요청은 서로를 기다릴 이유가 없다
    const [list, extra] = await Promise.all([
      live ? fetchWeather() : Promise.resolve(null),
      // Mock 단계는 관측값이 데이터에 이미 다 들어 있어 더 받을 것이 없다
      live && known ? fetchCityDetail(known) : Promise.resolve({}),
    ])

    city.value = live
      ? (list?.rows.find((row) => row.id === route.params.cityId) ?? null)
      : findMockCity(route.params.cityId)
    extras.value = extra

    if (city.value) backdropStatus.value = city.value.status
  } catch (error) {
    errorMessage.value = '날씨를 불러오지 못했습니다.'
    console.error('[stage] 상세 불러오기 실패', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(load)
watch(() => route.params.cityId, load)

/** 아이콘 받침 색조 — 메인 카드와 같은 규칙 */
const tone = computed(() => {
  const status = city.value?.status ?? ''
  if (status.includes('맑')) return 'warm'
  if (status.includes('비') || status.includes('눈')) return 'cool'
  return 'neutral'
})

/**
 * 시간별 예보에 쓸 좌표.
 * 실제 도시는 id 로 바로 찾고, Mock 도시는 이름이 같은 실제 도시에 맞춘다.
 */
const coords = computed(() => {
  if (!city.value) return null
  return findCity(city.value.id) ?? CITIES.find((item) => item.name === city.value.name) ?? null
})

/** 값이 있는 항목만 표에 올린다 — 제공자마다 주는 것이 다르다 */
const observations = computed(() => {
  if (!city.value) return []
  // 목록에서 온 값이 우선, 없으면 상세에서 따로 받아 온 값으로 채운다
  const c = { ...extras.value, ...Object.fromEntries(
    Object.entries(city.value).filter(([, value]) => value !== null && value !== undefined && value !== ''),
  ) }
  return [
    {
      label: '오늘 최저 · 최고',
      value:
        c.tempMin != null && c.tempMax != null
          ? \`\${toUnit(c.tempMin)} · \${toUnit(c.tempMax)}\${unitSymbol.value}\`
          : null,
      unit: '',
    },
    { label: '강수 확률', value: c.rainChance, unit: '%' },
    { label: '습도', value: c.humidity, unit: '%' },
    { label: '미세먼지', value: c.dust, unit: '' },
    { label: '풍속', value: c.wind, unit: 'm/s' },
    { label: '가시거리', value: c.visibility, unit: 'km' },
    { label: '기압', value: c.pressure, unit: 'hPa' },
    {
      label: '일출 · 일몰',
      value: c.sunrise && c.sunset ? \`\${c.sunrise} · \${c.sunset}\` : null,
      unit: '',
      small: true,
    },
  ].filter((item) => item.value !== null && item.value !== undefined && item.value !== '')
})

/** 관측 시각 — 표의 값들이 언제 기준인지 밝혀 준다 */
const observedClock = computed(() => {
  const at = city.value?.observedAt
  if (!at) return ''
  const date = new Date(at)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
})

const goBack = () => router.go(-1)
<\/script>

<template>
  <div class="detail">
    <BaseDashboardCard>
      <p v-if="isLoading" class="notice">불러오는 중…</p>

      <template v-else-if="city">
        <header class="head">
          <div class="icon-tile" :class="tone">
            <WeatherIcon :status="city.status" :size="34" />
          </div>
          <div class="title">
            <p class="eyebrow">{{ city.region }} · <code>{{ city.id }}</code></p>
            <h3>{{ city.name }}</h3>
            <p class="status">{{ city.status }}</p>
          </div>
          <p class="temp">{{ toUnit(city.temp) }}<span class="unit">{{ unitSymbol }}</span></p>
        </header>

        <p class="obs-label">
          오늘의 관측값
          <small v-if="observedClock">{{ observedClock }} 기준</small>
        </p>

        <dl class="observation">
          <div v-for="item in observations" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd :class="{ small: item.small }">
              {{ item.value }}<i v-if="item.unit">{{ item.unit }}</i>
            </dd>
          </div>
        </dl>

        <footer class="foot">
          <el-button v-if="features.elementPlus" round size="small" @click="goBack">
            ← 이전 화면으로
          </el-button>
          <button v-else type="button" class="plain-back" @click="goBack">← 이전 화면으로</button>
        </footer>
      </template>

      <div v-else class="missing">
        <UiIcon name="empty" :size="24" />
        <p>
          <code>{{ route.params.cityId }}</code> 에 해당하는 도시가 없습니다.
          <span v-if="errorMessage">{{ errorMessage }}</span>
        </p>
        <button type="button" class="plain-back" @click="goBack">← 이전 화면으로</button>
      </div>
    </BaseDashboardCard>

    <!-- 시간별 예보 — 관측값과 같은 화면에 둔다 -->
    <HourlyDetail
      v-if="coords && city"
      :city="{
        ...coords,
        temp: city.temp,
        humidity: city.humidity,
        status: city.status,
      }"
      :to-unit="toUnit"
      :unit-symbol="unitSymbol"
      @close="goBack"
    />
  </div>
</template>

<style scoped>
.detail {
  display: grid;
  gap: 14px;
}

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

.eyebrow code {
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

.obs-label {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  margin: 0 2px 8px;
  color: var(--ink-soft);
  font-size: 12.5px;
  font-weight: 700;
}

.obs-label small {
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
}

/*
 * grid 로 칸을 못박으면 항목 수가 열 수의 배수가 아닐 때 마지막 줄에 빈 칸이 남는다.
 * flex 로 두면 남는 폭을 마지막 줄 항목들이 나눠 가져 빈 자리가 생기지 않는다.
 */
.observation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
}

.observation > div {
  flex: 1 1 148px;
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

.plain-back {
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
}

.plain-back:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-tint);
}

.foot :deep(.el-button) {
  margin-left: auto;
}

.notice,
.missing {
  display: grid;
  gap: 12px;
  padding: 30px 0;
  justify-items: center;
  margin: 0;
  color: var(--faint);
  text-align: center;
  font-size: 13.5px;
}

.missing p {
  margin: 0;
  color: var(--muted);
}

.missing .plain-back {
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
`,qt=`<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import BaseDashboardCard from '../../weather/BaseDashboardCard.vue'
import SearchBar from '../../weather/SearchBar.vue'
import RegionTabs from '../../weather/RegionTabs.vue'
import WeatherCard from '../../weather/WeatherCard.vue'
import WeatherByStatus from '../../weather/WeatherByStatus.vue'
import UiIcon from '../../weather/UiIcon.vue'
import { fetchWeather, nearestCity, groupOf, REGIONS, DEMO_ROWS } from '../../weather/weatherApi'
import { MOCK_CITIES } from '../router4/mockCities'
import { backdropStatus } from '../router4/backdropState'
import { useConfigStore } from '../../../stores/configStore'
import { featuresOf } from './stageFeatures'

/**
 * 4단계부터의 메인 화면.
 *
 * ── 왜 하나의 화면인가 ──
 * 단계는 쌓이기만 해야 한다. 3단계에서 만든 대시보드(보기 전환 · 지역 탭 ·
 * 내 위치 · 즐겨찾기 · 상태 바)가 4단계에서 사라지면 그건 누적이 아니라 퇴보다.
 * 그래서 홈은 하나만 두고, 단계에 따라 "무엇이 더 켜지는가"만 달라진다.
 *
 *   4단계  3단계 대시보드 + 라우터(상세 화면으로 주소를 옮긴다)
 *   5단계  + 섭씨/화씨 (Store 의 단위를 따른다)
 *   6단계  + Mock 대신 실제 API
 *   7단계  + 검색창·새로고침·로딩·알림을 Element Plus 로
 *
 * 무엇이 언제 켜지는지는 stageFeatures.js 한 곳에 적혀 있다.
 */
const route = useRoute()
const router = useRouter()

const features = computed(() => featuresOf(route.params.stageId))
const stageId = computed(() => String(route.params.stageId ?? 4))

/** 단위는 5단계에서 붙인 Store 를 그대로 이어 쓴다 */
const { unit, unitSymbol } = storeToRefs(useConfigStore())
const toUnit = (celsius) =>
  unit.value === 'celsius' ? celsius : Math.round((celsius * 9) / 5 + 32)

/* ── 데이터 ─────────────────────────────────────────────────────── */
const rows = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const source = ref('')
const updatedAt = ref('')

const SOURCE_LABEL = {
  openweather: 'OpenWeather',
  'open-meteo': 'Open-Meteo',
  'met.no': 'MET Norway',
  cache: '저장해 둔 값',
  mock: 'Mock Data',
}

/** 4·5단계는 고정 데이터, 6단계부터는 실제 응답 */
const load = async (force = false) => {
  if (!features.value.liveApi) {
    rows.value = MOCK_CITIES.map((city) => ({ ...city, group: groupOf(city.region) }))
    source.value = 'mock'
    updatedAt.value = ''
    applyBackdrop()
    return
  }

  isLoading.value = true
  errorMessage.value = ''
  try {
    const response = await fetchWeather(undefined, force)
    rows.value = [...response.rows, ...DEMO_ROWS]
    source.value = response.source ?? 'open-meteo'
    updatedAt.value = new Date(response.at).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    })
    applyBackdrop()
    if (force && features.value.elementPlus) {
      ElMessage.success({ message: '날씨를 새로 받았습니다.', duration: 1800 })
    }
  } catch (error) {
    errorMessage.value = '날씨를 불러오지 못했습니다. 네트워크를 확인해 주세요.'
    if (force && features.value.elementPlus) ElMessage.error('날씨를 불러오지 못했습니다.')
    console.error('[stage] 불러오기 실패', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => load())
// 단계를 옮기면 데이터 출처도 따라 바뀐다
watch(() => route.params.stageId, () => load())

/* ── 사용자가 만지는 상태 (3단계에서 물려받은 것들) ─────────────── */
const searchQuery = ref('')
const selectedRegion = ref('전체')
const viewMode = ref('region') // 'region' | 'status'
const selectedId = ref('')

const VIEW_OPTIONS = [
  { value: 'region', label: '지역별 날씨 현황', icon: 'city' },
  { value: 'status', label: '날씨별 지역 현황', icon: 'droplet' },
]

/** 즐겨찾기 — 새로고침해도 남도록 localStorage 에 담는다 */
const FAVORITES_KEY = 'inwoo-weather-favorites'
const favorites = ref(JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]'))

const toggleFavorite = (cityId) => {
  favorites.value = favorites.value.includes(cityId)
    ? favorites.value.filter((id) => id !== cityId)
    : [...favorites.value, cityId]
}

watch(favorites, (list) => localStorage.setItem(FAVORITES_KEY, JSON.stringify(list)), {
  deep: true,
})

/* ── 현재 위치 ──────────────────────────────────────────────────── */
const hereId = ref('')
const locationState = ref('idle') // idle | asking | done | denied

const findMyLocation = () => {
  if (!navigator.geolocation) {
    locationState.value = 'denied'
    return
  }
  locationState.value = 'asking'
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      hereId.value = nearestCity(coords.latitude, coords.longitude)?.id ?? ''
      locationState.value = 'done'
    },
    () => {
      locationState.value = 'denied'
      if (features.value.elementPlus) {
        ElMessage.warning('위치 권한이 없어 현재 위치를 표시하지 못했습니다.')
      }
    },
    { timeout: 8000 },
  )
}

/* ── 걸러낸 목록 ────────────────────────────────────────────────── */
const matched = computed(() => {
  const query = searchQuery.value.trim()
  return rows.value.filter((row) => !query || row.name.includes(query))
})

const filtered = computed(() => {
  const list = matched.value.filter(
    (row) => selectedRegion.value === '전체' || row.group === selectedRegion.value,
  )
  const rank = (row) => (row.id === hereId.value ? 0 : favorites.value.includes(row.id) ? 1 : 2)
  return [...list].sort((a, b) => rank(a) - rank(b)).slice(0, 8)
})

/** 탭에 붙일 지역별 개수 — 검색어까지 반영해 실제로 보이는 수를 센다 */
const regionCounts = computed(() =>
  matched.value.reduce(
    (acc, row) => {
      acc[row.group] = (acc[row.group] ?? 0) + 1
      return acc
    },
    { 전체: matched.value.length },
  ),
)

/** 이 단계의 지역 탭 목록 — Mock 은 지역이 적으니 있는 것만 보여 준다 */
const regionList = computed(() =>
  features.value.liveApi
    ? [...REGIONS, '데모']
    : [...new Set(rows.value.map((row) => row.group))],
)

const favoriteCount = computed(
  () => matched.value.filter((row) => favorites.value.includes(row.id)).length,
)

/* ── 상태 바 (3단계에서 물려받음) ───────────────────────────────── */
const selectedCityInfo = computed(() => {
  const city = rows.value.find((row) => row.id === selectedId.value)
  if (!city) return '카드를 클릭하거나 검색해 보세요.'
  return \`\${city.name} · \${city.status} · \${toUnit(city.temp)}\${unitSymbol.value} · 습도 \${city.humidity}%\`
})

/** 고른 도시가 없으면 첫 도시의 날씨를 배경으로 쓴다 */
const applyBackdrop = () => {
  const picked = rows.value.find((row) => row.id === selectedId.value)
  backdropStatus.value = (picked ?? rows.value[0])?.status ?? ''
}

const selectCity = (cityId) => {
  selectedId.value = selectedId.value === cityId ? '' : cityId
  applyBackdrop()
}

watch([searchQuery, selectedRegion, viewMode], () => {
  selectedId.value = ''
})

/**
 * 상세보기 — 4단계에서 붙은 것. alert 대신 주소를 옮긴다.
 * 단계 번호를 유지해야 상세에서 돌아왔을 때 같은 단계에 머문다.
 */
const goDetail = (cityName) => {
  const city = rows.value.find((row) => row.name === cityName)
  if (!city) return
  router.push({
    name: 'a4-detail',
    params: { stageId: stageId.value, cityId: city.id },
    query: { from: 'home' },
  })
}
<\/script>

<template>
  <div class="home">
    <!-- 검색 — 7단계부터 Element Plus 로 갈아끼운다 -->
    <BaseDashboardCard>
      <template v-if="features.elementPlus">
        <h3><UiIcon name="search" :size="19" /> 도시 검색</h3>
        <el-input v-model="searchQuery" size="large" clearable placeholder="검색할 도시 이름 입력">
          <template #prefix>
            <UiIcon name="search" :size="16" />
          </template>
        </el-input>
      </template>
      <SearchBar
        v-else
        :current-query="searchQuery"
        @update-query="(value) => (searchQuery = value)"
      />
    </BaseDashboardCard>

    <BaseDashboardCard>
      <!-- 보기 방식 — 3단계에서 물려받은 것 -->
      <el-segmented
        v-if="features.elementPlus"
        v-model="viewMode"
        :options="VIEW_OPTIONS"
        class="view-segmented"
      >
        <template #default="{ item }">
          <span class="seg-item"><UiIcon :name="item.icon" :size="15" /> {{ item.label }}</span>
        </template>
      </el-segmented>
      <div v-else class="view-tabs" role="tablist">
        <button
          v-for="option in VIEW_OPTIONS"
          :key="option.value"
          type="button"
          role="tab"
          :aria-selected="viewMode === option.value"
          :class="{ active: viewMode === option.value }"
          @click="viewMode = option.value"
        >
          <UiIcon :name="option.icon" :size="16" /> {{ option.label }}
        </button>
      </div>

      <!-- 도구 줄 -->
      <div class="tool-row">
        <p class="summary">
          <b>{{ matched.length }}</b>곳
          <span v-if="favoriteCount" class="fav-count">
            <UiIcon name="star" :size="12" :filled="true" /> {{ favoriteCount }}
          </span>
        </p>

        <span class="source">
          <span class="dot" :class="{ live: features.liveApi && source !== 'cache' }"></span>
          {{ SOURCE_LABEL[source] ?? '불러오는 중' }}
        </span>

        <template v-if="features.elementPlus">
          <el-button
            round
            size="small"
            :loading="locationState === 'asking'"
            @click="findMyLocation"
          >
            <UiIcon v-if="locationState !== 'asking'" name="location" :size="14" />
            <span class="btn-label">내 위치</span>
          </el-button>
          <!-- 새로고침은 아이콘만. loading 이면 el-button 이 스피너로 대신한다 -->
          <el-button
            v-if="features.liveApi"
            circle
            size="small"
            :loading="isLoading"
            title="새로고침"
            aria-label="새로고침"
            @click="load(true)"
          >
            <UiIcon v-if="!isLoading" name="refresh" :size="15" />
          </el-button>
        </template>
        <template v-else>
          <button
            type="button"
            class="tool"
            :disabled="locationState === 'asking'"
            @click="findMyLocation"
          >
            <UiIcon name="location" :size="14" />
            {{ locationState === 'asking' ? '찾는 중…' : '내 위치' }}
          </button>
          <button
            v-if="features.liveApi"
            type="button"
            class="tool"
            :disabled="isLoading"
            @click="load(true)"
          >
            {{ isLoading ? '불러오는 중…' : '새로고침' }}
          </button>
        </template>
      </div>

      <p v-if="locationState === 'denied'" class="hint">
        위치 권한이 없어 현재 위치를 표시하지 못했습니다. 나머지 기능은 그대로 쓸 수 있습니다.
      </p>

      <!-- 지역 탭은 지역별 보기에서만 의미가 있다 -->
      <RegionTabs
        v-if="viewMode === 'region'"
        :regions="regionList"
        :current="selectedRegion"
        :counts="regionCounts"
        @select-region="(region) => (selectedRegion = region)"
      />

      <p v-if="errorMessage" class="notice">{{ errorMessage }}</p>

      <p v-else-if="isLoading && !rows.length" class="notice">불러오는 중…</p>

      <!-- ① 지역별 -->
      <template v-else-if="viewMode === 'region'">
        <WeatherCard
          v-for="city in filtered"
          :key="city.id"
          :city-item="city"
          :favorite="favorites.includes(city.id)"
          :here="city.id === hereId"
          :selected="city.id === selectedId"
          :temp-value="toUnit(city.temp)"
          :temp-unit="unitSymbol"
          detail-label="상세보기"
          @select-card="selectCity"
          @click-detail="goDetail"
          @toggle-favorite="toggleFavorite"
          @dblclick="goDetail(city.name)"
        />
        <p v-if="!filtered.length" class="notice">
          <UiIcon name="empty" :size="22" /> 검색 결과와 일치하는 도시가 없습니다.
        </p>
      </template>

      <!-- ② 날씨별 -->
      <WeatherByStatus
        v-else
        :list="matched"
        :favorites="favorites"
        :here-id="hereId"
        :selected-id="selectedId"
        @select-card="selectCity"
        @toggle-favorite="toggleFavorite"
      />
    </BaseDashboardCard>

    <!-- 상태 바 — 3단계에서 물려받은 것 -->
    <div class="status-bar">
      <span>{{ selectedCityInfo }}</span>
      <small v-if="updatedAt" class="stamp">{{ updatedAt }} 기준 · {{ SOURCE_LABEL[source] }}</small>
      <small v-else class="stamp">{{ SOURCE_LABEL[source] ?? '' }}</small>
    </div>
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
  gap: 7px;
  align-items: center;
  justify-content: center;
  padding: 9px 12px;
  border: 0;
  border-radius: 999px;
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
}

.view-tabs button.active {
  color: var(--accent);
  background: var(--surface);
  box-shadow: 0 1px 4px rgb(15 23 42 / 8%);
}

.view-segmented {
  width: 100%;
  margin-bottom: 14px;
  padding: 4px;
  border-radius: 999px;
  background: var(--paper);
}

/* 선택 표시는 항목이 아니라 뒤에서 미끄러지는 별도 요소다 */
.view-segmented :deep(.el-segmented__item-selected) {
  border-radius: 999px;
  background: var(--surface);
  box-shadow: 0 1px 4px rgb(15 23 42 / 8%);
}

.view-segmented :deep(.el-segmented__item) {
  color: var(--muted);
}

.view-segmented :deep(.el-segmented__item.is-selected) {
  color: var(--accent);
  background: transparent;
}

.view-segmented :deep(.el-segmented__item) {
  padding: 9px 14px;
}

/* 항목 안의 내용이 칸 가운데 오도록 폭을 채운다 */
.seg-item {
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 13px;
  font-weight: 700;
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

.source {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 4px 11px;
  border-radius: 999px;
  background: var(--paper);
  color: var(--muted);
  font-size: 11.5px;
  font-weight: 600;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--line-strong);
}

.dot.live {
  background: var(--accent);
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
}

.tool:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.tool:disabled {
  cursor: progress;
  opacity: 0.6;
}

.btn-label {
  font-size: 12px;
}

/*
 * Element Plus 부품 맞춤.
 * circle 버튼은 안쪽 내용이 넘치면 동그라미 밖으로 삐져나오므로
 * 크기를 못박고 넘치는 것을 잘라 낸다.
 */
.tool-row :deep(.el-button) {
  --el-button-bg-color: var(--surface);
  --el-button-border-color: var(--line);
  --el-button-text-color: var(--muted);
  --el-button-hover-bg-color: var(--accent-tint);
  --el-button-hover-border-color: var(--accent);
  --el-button-hover-text-color: var(--accent);

  gap: 5px;
  font-weight: 600;
}

.tool-row :deep(.el-button.is-circle) {
  width: 28px;
  height: 28px;
  padding: 0;
  overflow: hidden;
}

.tool-row :deep(.el-button.is-circle .ui-icon),
.tool-row :deep(.el-button.is-circle .el-icon) {
  flex: none;
}

.hint {
  margin: 0 0 12px;
  padding: 9px 13px;
  border-radius: 9px;
  background: var(--paper);
  color: var(--faint);
  font-size: 12px;
}

.notice {
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;
  padding: 28px 0;
  margin: 0;
  color: var(--faint);
  font-size: 13.5px;
}

/* ── 상태 바 ── */
.status-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 11px 16px;
  border-radius: 14px;
  background: color-mix(in srgb, var(--surface) 82%, transparent);
  backdrop-filter: blur(10px);
  color: var(--ink-soft);
  font-size: 12.5px;
}

.stamp {
  margin-left: auto;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11px;
}

.home :deep(.el-input__wrapper) {
  padding: 4px 16px;
  border-radius: 999px;
  background: var(--paper);
  box-shadow: none;
}

.home :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px var(--accent) inset;
}

.home :deep(.el-input__prefix) {
  color: var(--faint);
}
</style>
`,Jt=`<script setup>
import { ref } from 'vue'
import BaseDashboardCard from '../../weather/BaseDashboardCard.vue'
import { tarotCards, cardBack } from '../../../final/data/tarotCards'

/**
 * 8단계에서 늘어난 메뉴 — 운세.
 *
 * 날씨 하나뿐이던 서비스에 두 번째 메뉴가 붙었다는 것을 보여 주는 자리다.
 * 세 장 스프레드까지 갖춘 완성형은 최종 결과물(/final/tarot)에 있다.
 */
const picked = ref(null)

const draw = () => {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)]
  picked.value = { card, reversed: Math.random() >= 0.5 }
}
<\/script>

<template>
  <BaseDashboardCard>
    <h3><span aria-hidden="true">✶</span> 오늘의 카드</h3>

    <div class="tarot" :style="{ '--card-back': \`url(\${cardBack})\` }">
      <div class="frame">
        <img
          v-if="picked"
          :src="picked.card.image"
          :alt="\`\${picked.card.name} 타로 카드\`"
          :class="{ reversed: picked.reversed }"
        />
        <div v-else class="back" aria-hidden="true"></div>
      </div>

      <div class="copy">
        <template v-if="picked">
          <p class="muted">
            {{ picked.card.arcana }} · {{ picked.card.number }}
            {{ picked.reversed ? '· 역방향' : '' }}
          </p>
          <h4>{{ picked.card.name }}</h4>
          <p>{{ picked.card.message }}</p>
        </template>
        <template v-else>
          <p class="muted">78장 중 한 장</p>
          <h4>카드를 뽑아 보세요</h4>
          <p>날씨 말고도 볼거리를 하나 더 붙였습니다. 이번 단계에서 늘어난 메뉴입니다.</p>
        </template>

        <button type="button" class="draw" @click="draw">
          {{ picked ? '다시 뽑기' : '카드 뽑기' }}
        </button>
      </div>
    </div>
  </BaseDashboardCard>
</template>

<style scoped>
h3 {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 0 16px;
  color: var(--ink);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

h4 {
  margin: 0 0 6px;
  color: var(--ink);
  font-size: 20px;
  font-weight: 700;
}

.tarot {
  display: grid;
  grid-template-columns: minmax(120px, 160px) 1fr;
  gap: 22px;
  align-items: center;
}

.frame {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1144 / 1919;
  border-radius: 12px;
  box-shadow: 0 12px 24px #17132530;
}

.frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.frame img.reversed {
  transform: rotate(180deg);
}

.back {
  width: 100%;
  height: 100%;
  border: 3px solid #e7c978;
  background: var(--card-back) center / 100% 100% no-repeat;
}

.copy p {
  margin: 0 0 6px;
  color: var(--ink-soft);
  font-size: 13.5px;
  line-height: 1.7;
}

.muted {
  color: var(--muted);
  font-size: 12.5px;
}

.draw {
  margin-top: 14px;
  padding: 9px 16px;
  border: 0;
  border-radius: 999px;
  color: var(--on-accent);
  background: var(--accent);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}

@media (max-width: 520px) {
  .tarot {
    grid-template-columns: 1fr;
  }

  .frame {
    max-width: 180px;
  }
}
</style>
`,Yt=`<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import WeatherBackdrop from '../../weather/WeatherBackdrop.vue'
import UnitToggler from '../pinia5/UnitToggler.vue'
import { backdropStatus } from '../router4/backdropState'
import { featuresOf, stageNumber } from './stageFeatures'

/**
 * 6~8단계 결과물의 껍데기 — 5단계 껍데기 위에 한 겹씩 더 얹은 것.
 *
 *   4단계 껍데기 : 홈 · 소개 (RouterLink + RouterView)
 *   5단계        + 단위 토글
 *   6단계        + 실제 API (목록을 Mock 이 아니라 서버에서 받는다)
 *   7단계        + Element Plus 조작 요소 (본문 화면에서)
 *   8단계        + 운세 메뉴
 *
 * 단계마다 앱을 통째로 복사하지 않고, "몇 단계부터 켜지는가"만
 * stageFeatures.js 에서 읽어 껍데기와 본문이 함께 참고한다.
 */
const route = useRoute()

const stage = computed(() => stageNumber(route.params.stageId))
const stageId = computed(() => String(stage.value))
const features = computed(() => featuresOf(route.params.stageId))

const isAbout = computed(() => route.name === 'a4-about')
const isTarot = computed(() => route.name === 'a4-tarot')
const isHome = computed(() => !isAbout.value && !isTarot.value)
<\/script>

<template>
  <div class="app">
    <!-- 보고 있는 도시의 날씨가 배경이 된다 -->
    <WeatherBackdrop :status="backdropStatus" />

    <div class="column">
      <nav class="nav" role="tablist">
        <RouterLink :to="{ name: 'a4-home', params: { stageId } }" :class="{ on: isHome }">
          홈
        </RouterLink>
        <RouterLink :to="{ name: 'a4-about', params: { stageId } }" active-class="on">
          소개
        </RouterLink>
        <!-- 8단계에서 늘어난 메뉴 -->
        <RouterLink
          v-if="features.fortune"
          :to="{ name: 'a4-tarot', params: { stageId } }"
          active-class="on"
        >
          운세
        </RouterLink>

        <code class="url">{{ route.path }}</code>

        <!-- 5단계에서 붙인 단위 토글 -->
        <UnitToggler v-if="features.unitToggle" />
      </nav>

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  display: grid;
}

/* 배경(z-index 0) 위에 내용이 오도록 */
.app > *:not(.backdrop) {
  position: relative;
  z-index: 1;
}

.column {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  gap: 12px;
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  align-items: center;
  padding: 2px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--surface) 72%, transparent);
  backdrop-filter: blur(10px);
}

.nav a {
  padding: 8px 16px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.nav a:hover {
  color: var(--ink);
}

.nav a.on {
  color: var(--on-accent);
  background: var(--accent);
}

.url {
  margin-left: auto;
  padding: 0 12px;
  color: var(--faint);
  font-family: var(--font-mono);
  font-size: 11.5px;
  overflow-wrap: anywhere;
}

@media (max-width: 620px) {
  .url {
    display: none;
  }

  .nav :deep(.unit-toggler) {
    margin-left: auto;
  }
}
</style>
`,Xt=`/**
 * 단계별 결과물이 "쌓이는" 규칙을 여기 한 곳에 적어 둔다.
 * ------------------------------------------------------------------
 * 이 사이트의 /project 는 과제를 하나씩 쌓아 올린 앱을 단계별로 보여 준다.
 * 그래서 각 단계는 "그 단계에서 새로 배운 것"만 더해진 이전 단계여야 한다.
 *
 *   4단계  라우터로 도는 앱 (홈 · 소개 · 상세 · 없는 주소)
 *   5단계  + 섭씨/화씨 토글            (Pinia)
 *   6단계  + Mock 대신 실제 API        (Axios)
 *   7단계  + 조작 요소를 Element Plus 로
 *   8단계  + 운세 메뉴와 늘어난 API
 *
 * 단계마다 앱을 통째로 복사하면 같은 코드가 다섯 벌이 된다.
 * 그래서 "몇 단계부터 켜지는가"만 여기서 정하고, 화면은 이 값을 보고 그린다.
 * 코드를 읽는 사람은 이 표 하나로 무엇이 언제 늘어났는지 알 수 있다.
 */
export const STAGE_STEPS = [
  { from: 5, key: 'unitToggle', label: '섭씨/화씨 토글', chapter: 'CH06 Pinia' },
  { from: 6, key: 'liveApi', label: '실제 날씨 API', chapter: 'CH07 Axios' },
  { from: 7, key: 'elementPlus', label: 'Element Plus 조작 요소', chapter: 'CH08 UI 라이브러리' },
  { from: 8, key: 'fortune', label: '운세 메뉴 · API 확장', chapter: 'CH09 Modern JS' },
]

/** 주소의 :stageId 를 숫자로. 없으면 라우터 과제가 시작된 4단계로 본다. */
export const stageNumber = (stageId) => {
  const parsed = Number(stageId)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 4
}

/**
 * 이 단계에서 켜져 있는 기능들.
 *   featuresOf(6) → { unitToggle: true, liveApi: true, elementPlus: false, fortune: false }
 */
export const featuresOf = (stageId) => {
  const stage = stageNumber(stageId)
  return Object.fromEntries(STAGE_STEPS.map((step) => [step.key, stage >= step.from]))
}

/** 이 단계에서 "새로" 켜진 것 (단계 머리에 '이번에 추가된 것'으로 보여 준다) */
export const addedAt = (stageId) => {
  const stage = stageNumber(stageId)
  return STAGE_STEPS.find((step) => step.from === stage) ?? null
}
`,Zt=Object.fromEntries(Object.entries(Object.assign({"./WeatherComposition.vue":U,"./WeatherMockup.vue":Y,"./WeatherParent.vue":we,"./pinia5/UnitToggler.vue":Je,"./pinia5/WeatherUnitApp.vue":$e,"./router4/WeatherAboutView.vue":D,"./router4/WeatherDetailView.vue":at,"./router4/WeatherHomeView.vue":vt,"./router4/WeatherNotFoundView.vue":O,"./router4/WeatherRouterApp.vue":St,"./stages/StageDetailView.vue":R,"./stages/StageHomeView.vue":z,"./stages/StageTarotView.vue":V,"./stages/WeatherStackedApp.vue":Ot})).map(([e,t])=>[e.split(`/`).pop().replace(`.vue`,``),t.default]));Object.keys(Zt).sort();var Qt=e=>Zt[e]??null,$t=Object.assign({"./WeatherComposition.vue":Pt,"./WeatherMockup.vue":Ft,"./WeatherParent.vue":It,"./pinia5/UnitToggler.vue":Lt,"./pinia5/WeatherUnitApp.vue":Rt,"./router4/WeatherAboutView.vue":zt,"./router4/WeatherDetailView.vue":Bt,"./router4/WeatherHomeView.vue":Vt,"./router4/WeatherNotFoundView.vue":Ht,"./router4/WeatherRouterApp.vue":Ut,"./router4/backdropState.js":Wt,"./router4/mockCities.js":Gt,"./stages/StageDetailView.vue":Kt,"./stages/StageHomeView.vue":qt,"./stages/StageTarotView.vue":Jt,"./stages/WeatherStackedApp.vue":Yt,"./stages/stageFeatures.js":Xt}),en=Object.fromEntries(Object.entries($t).map(([e,t])=>[e.replace(`./`,``).replace(/\.(vue|js)$/,``),t])),tn=Object.fromEntries(Object.keys($t).map(e=>[e.replace(`./`,``).replace(/\.(vue|js)$/,``),e.replace(`./`,`src/components/assignments/`)])),nn=e=>en[e]===void 0?Object.keys(en).find(t=>t.endsWith(`/${e}`)):e,rn=e=>en[nn(e)]??``,an=e=>tn[nn(e)]??``;export{Qt as n,rn as r,an as t};