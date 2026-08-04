import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{A as t,I as n,M as r,S as i,T as a,_ as o,a as s,at as c,c as l,f as u,it as d,j as f,k as p,l as m,n as h,o as g,p as _,rt as v,s as y,t as b,v as x,w as S,y as C,z as w}from"./_plugin-vue_export-helper-CoO-E1Sm.js";import{i as T,v as E,x as D}from"./index-COdl3nUE.js";var O=e({default:()=>ee}),k={class:`dashboard-wrapper`},A={class:`search-box`},j=[`value`],M={class:`list-box`},N=[`onClick`],P={key:0,class:`badge hot`},F={key:1,class:`badge cool`},I=[`onClick`],L={key:0,class:`empty-message`},R={class:`status-bar`},ee=b({__name:`WeatherComposition`,setup(e){let r=n([{id:`city_01`,name:`서울`,temp:28,status:`맑음`},{id:`city_02`,name:`수원`,temp:24,status:`비`},{id:`city_03`,name:`부산`,temp:26,status:`구름`}]),a=n(``),o=n(`카드를 클릭하거나 검색해 보세요.`),d=s(()=>{let e=a.value.trim();return e?r.value.filter(t=>t.name.includes(e)):r.value});p(o,e=>{console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${e}"`)}),t(()=>{console.log(`🤖 [watchEffect 자동 호출] 현재 검색어 '${a.value}'에 매칭되는 API 데이터를 필터링합니다.`)});let f=(e,t)=>{window.alert(`${e}의 현재 날씨는 [${t}] 상태입니다.`)};return(e,t)=>(i(),m(`div`,k,[g(`section`,A,[t[2]||=g(`h3`,null,`🔍 도시 검색`,-1),g(`input`,{type:`text`,value:a.value,placeholder:`검색할 도시 이름 입력`,onInput:t[0]||=e=>a.value=e.target.value},null,40,j),g(`p`,null,[t[1]||=u(` 검색 중인 도시: `,-1),g(`strong`,null,c(a.value),1)])]),g(`section`,M,[t[3]||=g(`h3`,null,`🏙️ 지역별 날씨 현황`,-1),(i(!0),m(h,null,S(d.value,e=>(i(),m(`div`,{key:e.id,class:`weather-card`,onClick:t=>o.value=`${e.name}이 선택되었습니다.`},[g(`h4`,null,c(e.name)+` (`+c(e.status)+`)`,1),g(`p`,null,`현재 기온: `+c(e.temp)+`°C`,1),e.temp>=25?(i(),m(`span`,P,`🔥 더움 (25도 이상)`)):(i(),m(`span`,F,`❄️ 선선함 (25도 미만)`)),g(`button`,{class:`btn-detail`,onClick:D(t=>f(e.name,e.status),[`stop`])},` 상세보기 `,8,I)],8,N))),128)),d.value.length===0?(i(),m(`p`,L,` 😭 검색 결과와 일치하는 도시가 없습니다. `)):l(``,!0)]),g(`div`,R,c(o.value),1)]))}},[[`__scopeId`,`data-v-6342b841`]]),z=e({default:()=>ce}),te={class:`weather-app`},B={class:`weather-search`},ne=[`value`],re={class:`status-bar`},V={class:`weather-grid`},H=[`onClick`],U={class:`weather-card-header`},W={class:`temperature`},ie={key:0,class:`hot`},ae={key:1,class:`cool`},oe=[`onClick`],se={key:0,class:`empty-message`},ce=b({__name:`WeatherMockup`,setup(e){let t=n(``),r=n(`도시 카드를 선택해 주세요.`),a=n([{id:1,city:`서울`,temperature:28,weather:`맑음`},{id:2,city:`부산`,temperature:24,weather:`흐림`},{id:3,city:`제주`,temperature:26,weather:`구름 조금`},{id:4,city:`대전`,temperature:22,weather:`비`},{id:5,city:`광주`,temperature:30,weather:`맑음`}]),o=e=>{t.value=e.target.value},s=()=>{let e=t.value.trim();return e?a.value.filter(t=>t.city.includes(e)):a.value},u=e=>e>=25?`🔥 더움`:`❄️ 선선함`,d=e=>{r.value=`${e}이 선택되었습니다.`},f=(e,t)=>{window.alert(`${e}의 현재 날씨는 [${t}] 상태입니다.`)};return(e,n)=>(i(),m(`main`,te,[n[1]||=g(`h1`,null,`날씨 Mockup`,-1),g(`div`,B,[n[0]||=g(`label`,{for:`city-search`},`한글 도시 검색`,-1),g(`input`,{id:`city-search`,value:t.value,type:`text`,placeholder:`예: 서울`,onInput:o},null,40,ne)]),g(`p`,re,c(r.value),1),g(`div`,V,[(i(!0),m(h,null,S(s(),e=>(i(),m(`article`,{key:e.id,class:`weather-card`,onClick:t=>d(e.city)},[g(`div`,U,[g(`h2`,null,c(e.city),1),g(`span`,null,c(e.weather),1)]),g(`p`,W,c(e.temperature)+`℃`,1),e.temperature>=25?(i(),m(`p`,ie,`🔥 더움`)):(i(),m(`p`,ae,`❄️ 선선함`)),g(`button`,{type:`button`,onClick:D(t=>f(e.city,u(e.temperature)),[`stop`])},` 상세보기 `,8,oe)],8,H))),128))]),s().length===0?(i(),m(`p`,se,` 검색 결과와 일치하는 도시가 없습니다. `)):l(``,!0)]))}},[[`__scopeId`,`data-v-a56bc1a5`]]),le={},ue={class:`base-dashboard-card`};function de(e,t){return i(),m(`div`,ue,[a(e.$slots,`default`,{},void 0,!0)])}var fe=b(le,[[`render`,de],[`__scopeId`,`data-v-242be1a1`]]),pe=[`width`,`height`,`fill`],me={key:3,d:`M12 3.2 6.9 8.6a7 7 0 1 0 10.2 0Z`},he={key:4,d:`m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 16.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85Z`},ge={key:6,d:`m5 12.5 4.5 4.5L19 7`},G=b({__name:`UiIcon`,props:{name:{type:String,required:!0},size:{type:Number,default:18},filled:{type:Boolean,default:!1}},setup(e){return(t,n)=>(i(),m(`svg`,{class:`ui-icon`,width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:e.filled?`currentColor`:`none`,stroke:`currentColor`,"stroke-width":`1.7`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[e.name===`search`?(i(),m(h,{key:0},[n[0]||=g(`circle`,{cx:`11`,cy:`11`,r:`7`},null,-1),n[1]||=g(`path`,{d:`m20 20-3.5-3.5`},null,-1)],64)):e.name===`city`?(i(),m(h,{key:1},[n[2]||=g(`path`,{d:`M3 21h18`},null,-1),n[3]||=g(`path`,{d:`M5 21V8l6-4v17`},null,-1),n[4]||=g(`path`,{d:`M11 21V11h8v10`},null,-1),n[5]||=g(`path`,{d:`M8 11v0M8 15v0M15 15v0M15 18v0`},null,-1)],64)):e.name===`thermometer`?(i(),m(h,{key:2},[n[6]||=g(`path`,{d:`M14 14.76V4.5a2.5 2.5 0 0 0-5 0v10.26a4.5 4.5 0 1 0 5 0Z`},null,-1),n[7]||=g(`path`,{d:`M11.5 8v6.5`},null,-1)],64)):e.name===`droplet`?(i(),m(`path`,me)):e.name===`star`?(i(),m(`path`,he)):e.name===`location`?(i(),m(h,{key:5},[n[8]||=g(`path`,{d:`M20 10c0 5.2-8 12-8 12s-8-6.8-8-12a8 8 0 0 1 16 0Z`},null,-1),n[9]||=g(`circle`,{cx:`12`,cy:`10`,r:`2.6`},null,-1)],64)):e.name===`check`?(i(),m(`path`,ge)):e.name===`empty`?(i(),m(h,{key:7},[n[10]||=g(`circle`,{cx:`11`,cy:`11`,r:`7`},null,-1),n[11]||=g(`path`,{d:`m20 20-3.5-3.5`},null,-1),n[12]||=g(`path`,{d:`M8.5 11h5`},null,-1)],64)):l(``,!0)],8,pe))}},[[`__scopeId`,`data-v-479a4352`]]),_e={class:`search-inner`},ve={class:`field`},ye=[`value`],be={key:0,class:`echo`},xe=b({__name:`SearchBar`,props:{currentQuery:{type:String,default:``}},emits:[`update-query`],setup(e){return(t,n)=>(i(),m(`div`,_e,[n[2]||=g(`h3`,null,`도시 검색`,-1),g(`div`,ve,[_(G,{name:`search`,class:`field-icon`}),g(`input`,{type:`text`,value:e.currentQuery,placeholder:`검색할 도시 이름 입력`,onInput:n[0]||=e=>t.$emit(`update-query`,e.target.value)},null,40,ye)]),e.currentQuery?(i(),m(`p`,be,[n[1]||=u(` 검색 중인 도시: `,-1),g(`strong`,null,c(e.currentQuery),1)])):l(``,!0)]))}},[[`__scopeId`,`data-v-ea78255f`]]),Se={class:`tabs`,role:`tablist`},Ce=[`aria-selected`,`onClick`],we={key:0,class:`count`},Te=b({__name:`RegionTabs`,props:{regions:{type:Array,required:!0},current:{type:String,default:`전체`},counts:{type:Object,default:()=>({})}},emits:[`select-region`],setup(e){return(t,n)=>(i(),m(`div`,Se,[(i(!0),m(h,null,S([`전체`,...e.regions],n=>(i(),m(`button`,{key:n,type:`button`,role:`tab`,class:v([`tab`,{active:n===e.current}]),"aria-selected":n===e.current,onClick:e=>t.$emit(`select-region`,n)},[u(c(n)+` `,1),e.counts[n]?(i(),m(`span`,we,c(e.counts[n]),1)):l(``,!0)],10,Ce))),128))]))}},[[`__scopeId`,`data-v-9f28431c`]]),Ee=`/inwoo-vue/assets/cloudy-2E7sEDOx.png`,De=`/inwoo-vue/assets/cyclone-aIHj9EYY.png`,Oe=`/inwoo-vue/assets/fog-CgKfDHh6.png`,ke=`/inwoo-vue/assets/heavy-rain-BB9-6u3z.png`,Ae=`/inwoo-vue/assets/high-voltage-MVrtm2Cl.png`,je=`/inwoo-vue/assets/lightning-GnlRTz7K.png`,Me=`/inwoo-vue/assets/mostly-cloudy-Bz6ZXwtr.png`,Ne=`/inwoo-vue/assets/mostly-sunny-DO6Rb_QD.png`,Pe=`/inwoo-vue/assets/partly-cloudy-CwLdcgX4.png`,Fe=`/inwoo-vue/assets/rain-CAwRObws.png`,Ie=`/inwoo-vue/assets/snow-czBjwpY6.png`,Le=`/inwoo-vue/assets/snowflake-BN0VQHwI.png`,Re=`/inwoo-vue/assets/snowman-BIgeyGRZ.png`,ze=`/inwoo-vue/assets/sun-shower-ClQNSOjq.png`,Be=`/inwoo-vue/assets/sunny-DThjelya.png`,Ve=`/inwoo-vue/assets/thermometer-V3UvkbrT.png`,He=`/inwoo-vue/assets/thunderstorm-BwXzlJQ7.png`,Ue=`/inwoo-vue/assets/tornado-BGeVSE-W.png`,We=[`src`,`width`,`height`,`alt`,`title`],K=b({__name:`WeatherIcon`,props:{status:{type:String,required:!0},size:{type:Number,default:26}},setup(e){let t=e,n=Object.fromEntries(Object.entries(Object.assign({"../../../assets/weather-icons/cloudy.png":Ee,"../../../assets/weather-icons/cyclone.png":De,"../../../assets/weather-icons/fog.png":Oe,"../../../assets/weather-icons/heavy-rain.png":ke,"../../../assets/weather-icons/high-voltage.png":Ae,"../../../assets/weather-icons/lightning.png":je,"../../../assets/weather-icons/mostly-cloudy.png":Me,"../../../assets/weather-icons/mostly-sunny.png":Ne,"../../../assets/weather-icons/partly-cloudy.png":Pe,"../../../assets/weather-icons/rain.png":Fe,"../../../assets/weather-icons/snow.png":Ie,"../../../assets/weather-icons/snowflake.png":Le,"../../../assets/weather-icons/snowman.png":Re,"../../../assets/weather-icons/sun-shower.png":ze,"../../../assets/weather-icons/sunny.png":Be,"../../../assets/weather-icons/thermometer.png":Ve,"../../../assets/weather-icons/thunderstorm.png":He,"../../../assets/weather-icons/tornado.png":Ue})).map(([e,t])=>[e.split(`/`).pop().replace(`.png`,``),t])),r=[[`대체로 맑`,`mostly-sunny`],[`소나기`,`sun-shower`],[`뇌우`,`thunderstorm`],[`천둥`,`thunderstorm`],[`번개`,`lightning`],[`폭설`,`snowman`],[`한파`,`snowflake`],[`눈보라`,`snow`],[`싸락눈`,`snow`],[`눈`,`snow`],[`호우`,`heavy-rain`],[`장마`,`heavy-rain`],[`이슬비`,`rain`],[`어는 비`,`rain`],[`비`,`rain`],[`안개`,`fog`],[`미세먼지`,`fog`],[`태풍`,`cyclone`],[`돌풍`,`tornado`],[`구름조금`,`partly-cloudy`],[`구름 조금`,`partly-cloudy`],[`구름많`,`mostly-cloudy`],[`흐림`,`cloudy`],[`구름`,`cloudy`],[`맑음`,`sunny`],[`맑`,`sunny`]],a=s(()=>{let e=r.find(([e])=>t.status.includes(e));return e?e[1]:`thermometer`}),o=s(()=>n[a.value]??n.thermometer);return(t,n)=>(i(),m(`img`,{class:v([`weather-icon`,a.value]),src:o.value,width:e.size,height:e.size,alt:e.status,title:e.status,decoding:`async`},null,10,We))}},[[`__scopeId`,`data-v-ea83332f`]]),Ge={class:`sky`},Ke={class:`sky-text`},qe={key:0,class:`badge here-badge`},Je={key:1,class:`pick`,title:`배경이 이 지역을 따릅니다`},Ye={key:2,class:`badge demo-badge`},Xe={class:`status`},Ze={class:`metrics`},Qe={class:`value`},$e={class:`band`},et={class:`value`},tt={class:`band`},nt=[`aria-pressed`,`title`],rt=[`aria-expanded`],it=b({__name:`WeatherCard`,props:{cityItem:{type:Object,required:!0},favorite:{type:Boolean,default:!1},here:{type:Boolean,default:!1},open:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},emits:[`select-card`,`click-detail`,`toggle-favorite`],setup(e,{emit:t}){let n=e,r=t,a=s(()=>{let e=n.cityItem.status;return e.includes(`맑`)?`warm`:e.includes(`비`)||e.includes(`눈`)?`cool`:`neutral`}),o=[{min:30,key:`scorching`,label:`무더워요`},{min:25,key:`hot`,label:`더워요`},{min:20,key:`mild`,label:`선선해요`},{min:10,key:`cool`,label:`쌀쌀해요`},{min:-1/0,key:`cold`,label:`추워요`}],d=[{min:80,key:`wet`,label:`눅눅해요`},{min:60,key:`humid`,label:`습해요`},{min:40,key:`nice`,label:`쾌적해요`},{min:-1/0,key:`dry`,label:`건조해요`}],f=s(()=>o.find(e=>n.cityItem.temp>=e.min)),p=s(()=>d.find(e=>n.cityItem.humidity>=e.min));return(t,n)=>(i(),m(`div`,{class:v([`weather-card`,{here:e.here,open:e.open,selected:e.selected}]),onClick:n[2]||=t=>r(`select-card`,e.cityItem.id)},[g(`div`,Ge,[g(`div`,{class:v([`icon-tile`,a.value])},[_(K,{status:e.cityItem.status,size:32},null,8,[`status`])],2),g(`div`,Ke,[g(`h4`,null,[u(c(e.cityItem.name)+` `,1),e.here?(i(),m(`span`,qe,[_(G,{name:`location`,size:11}),n[3]||=u(` 현재 위치 `,-1)])):l(``,!0),e.selected?(i(),m(`span`,Je,[_(G,{name:`check`,size:13})])):l(``,!0),e.cityItem.demo?(i(),m(`span`,Ye,`데모`)):l(``,!0)]),g(`p`,Xe,c(e.cityItem.status),1)])]),g(`div`,Ze,[g(`p`,{class:v([`metric`,f.value.key])},[_(G,{name:`thermometer`,size:15}),g(`b`,Qe,[u(c(e.cityItem.temp),1),n[4]||=g(`span`,{class:`unit`},`°C`,-1)]),g(`span`,$e,c(f.value.label),1)],2),g(`p`,{class:v([`metric`,p.value.key])},[_(G,{name:`droplet`,size:15}),g(`b`,et,[u(c(e.cityItem.humidity),1),n[5]||=g(`span`,{class:`unit`},`%`,-1)]),g(`span`,tt,c(p.value.label),1)],2)]),g(`button`,{class:v([`star`,{on:e.favorite}]),type:`button`,"aria-pressed":e.favorite,title:e.favorite?`즐겨찾기 해제`:`즐겨찾기에 추가`,onClick:n[0]||=D(t=>r(`toggle-favorite`,e.cityItem.id),[`stop`])},[_(G,{name:`star`,size:17,filled:e.favorite},null,8,[`filled`])],10,nt),e.cityItem.demo?l(``,!0):(i(),m(`button`,{key:0,class:v([`btn-detail`,{on:e.open}]),"aria-expanded":e.open,onClick:n[1]||=D(t=>r(`click-detail`,e.cityItem.name,e.cityItem.status),[`stop`])},c(e.open?`닫기`:`시간별`),11,rt))],2))}},[[`__scopeId`,`data-v-12b51248`]]),at={class:`by-status`},ot={class:`group-head`},st={class:`status-name`},ct={class:`count`},lt={class:`chips`},ut=[`onClick`],dt={class:`chip-name`},ft={class:`chip-temp`},pt={class:`chip-region`},mt=[`title`,`onClick`],ht={key:0,class:`empty-message`},gt=b({__name:`WeatherByStatus`,props:{list:{type:Array,required:!0},favorites:{type:Array,default:()=>[]},hereId:{type:String,default:``},selectedId:{type:String,default:``}},emits:[`select-card`,`toggle-favorite`],setup(e){let t=e,n=s(()=>{let e=new Map;for(let n of t.list)e.has(n.status)||e.set(n.status,[]),e.get(n.status).push(n);return[...e.entries()].map(([e,t])=>({status:e,cities:[...t].sort((e,t)=>t.temp-e.temp)})).sort((e,t)=>t.cities.length-e.cities.length)});return(t,r)=>(i(),m(`div`,at,[(i(!0),m(h,null,S(n.value,n=>(i(),m(`div`,{key:n.status,class:`group`},[g(`p`,ot,[_(K,{status:n.status,size:26},null,8,[`status`]),g(`b`,st,c(n.status),1),g(`span`,ct,c(n.cities.length)+`곳`,1)]),g(`ul`,lt,[(i(!0),m(h,null,S(n.cities,n=>(i(),m(`li`,{key:n.id},[g(`button`,{type:`button`,class:v([`chip`,{here:n.id===e.hereId,selected:n.id===e.selectedId}]),onClick:e=>t.$emit(`select-card`,n.id)},[n.id===e.hereId?(i(),y(G,{key:0,name:`location`,size:11})):l(``,!0),g(`span`,dt,c(n.name),1),n.id===e.selectedId?(i(),y(G,{key:1,name:`check`,size:12,class:`chip-check`})):l(``,!0),g(`span`,ft,c(n.temp)+`°`,1),g(`span`,pt,c(n.region),1)],10,ut),g(`button`,{type:`button`,class:v([`chip-star`,{on:e.favorites.includes(n.id)}]),title:e.favorites.includes(n.id)?`즐겨찾기 해제`:`즐겨찾기에 추가`,onClick:e=>t.$emit(`toggle-favorite`,n.id)},[_(G,{name:`star`,size:13,filled:e.favorites.includes(n.id)},null,8,[`filled`])],10,mt)]))),128))])]))),128)),n.value.length?l(``,!0):(i(),m(`p`,ht,[_(G,{name:`empty`,size:22}),r[0]||=u(` 표시할 날씨가 없습니다. `,-1)]))]))}},[[`__scopeId`,`data-v-968dcb10`]]),_t=`https://api.open-meteo.com/v1/forecast`,q=[{id:`seoul`,name:`서울`,region:`서울`,lat:37.5665,lon:126.978},{id:`incheon`,name:`인천`,region:`인천`,lat:37.4563,lon:126.7052},{id:`suwon`,name:`수원`,region:`경기`,lat:37.2636,lon:127.0286},{id:`seongnam`,name:`성남`,region:`경기`,lat:37.42,lon:127.1265},{id:`goyang`,name:`고양`,region:`경기`,lat:37.6584,lon:126.832},{id:`yongin`,name:`용인`,region:`경기`,lat:37.2411,lon:127.1776},{id:`bucheon`,name:`부천`,region:`경기`,lat:37.5035,lon:126.766},{id:`pyeongtaek`,name:`평택`,region:`경기`,lat:36.9921,lon:127.1129},{id:`chuncheon`,name:`춘천`,region:`강원`,lat:37.8813,lon:127.73},{id:`wonju`,name:`원주`,region:`강원`,lat:37.3422,lon:127.9202},{id:`gangneung`,name:`강릉`,region:`강원`,lat:37.7519,lon:128.8761},{id:`sokcho`,name:`속초`,region:`강원`,lat:38.207,lon:128.5918},{id:`cheongju`,name:`청주`,region:`충북`,lat:36.6424,lon:127.489},{id:`chungju`,name:`충주`,region:`충북`,lat:36.9911,lon:127.926},{id:`jecheon`,name:`제천`,region:`충북`,lat:37.1326,lon:128.191},{id:`cheonan`,name:`천안`,region:`충남`,lat:36.8151,lon:127.1139},{id:`asan`,name:`아산`,region:`충남`,lat:36.7898,lon:127.0018},{id:`seosan`,name:`서산`,region:`충남`,lat:36.7848,lon:126.4503},{id:`boryeong`,name:`보령`,region:`충남`,lat:36.3333,lon:126.6128},{id:`daejeon`,name:`대전`,region:`대전`,lat:36.3504,lon:127.3845},{id:`sejong`,name:`세종`,region:`세종`,lat:36.48,lon:127.289},{id:`jeonju`,name:`전주`,region:`전북`,lat:35.8242,lon:127.148},{id:`gunsan`,name:`군산`,region:`전북`,lat:35.9676,lon:126.7369},{id:`iksan`,name:`익산`,region:`전북`,lat:35.9483,lon:126.9576},{id:`namwon`,name:`남원`,region:`전북`,lat:35.4164,lon:127.3905},{id:`mokpo`,name:`목포`,region:`전남`,lat:34.8118,lon:126.3922},{id:`yeosu`,name:`여수`,region:`전남`,lat:34.7604,lon:127.6622},{id:`suncheon`,name:`순천`,region:`전남`,lat:34.9506,lon:127.4872},{id:`gwangyang`,name:`광양`,region:`전남`,lat:34.9407,lon:127.696},{id:`gwangju`,name:`광주`,region:`광주`,lat:35.1595,lon:126.8526},{id:`daegu`,name:`대구`,region:`대구`,lat:35.8714,lon:128.6014},{id:`pohang`,name:`포항`,region:`경북`,lat:36.019,lon:129.3435},{id:`gyeongju`,name:`경주`,region:`경북`,lat:35.8562,lon:129.2247},{id:`andong`,name:`안동`,region:`경북`,lat:36.5684,lon:128.7294},{id:`gumi`,name:`구미`,region:`경북`,lat:36.1195,lon:128.3446},{id:`yeongju`,name:`영주`,region:`경북`,lat:36.8057,lon:128.624},{id:`ulsan`,name:`울산`,region:`울산`,lat:35.5384,lon:129.3114},{id:`changwon`,name:`창원`,region:`경남`,lat:35.228,lon:128.6811},{id:`jinju`,name:`진주`,region:`경남`,lat:35.1803,lon:128.1076},{id:`tongyeong`,name:`통영`,region:`경남`,lat:34.8544,lon:128.4331},{id:`gimhae`,name:`김해`,region:`경남`,lat:35.2286,lon:128.8894},{id:`geoje`,name:`거제`,region:`경남`,lat:34.8806,lon:128.6211},{id:`busan`,name:`부산`,region:`부산`,lat:35.1796,lon:129.0756},{id:`jeju`,name:`제주`,region:`제주`,lat:33.4996,lon:126.5312},{id:`seogwipo`,name:`서귀포`,region:`제주`,lat:33.2541,lon:126.56}],vt={서울:`서울`,인천:`인천/경기`,경기:`인천/경기`,강원:`강원`,대전:`대전/세종/충청`,세종:`대전/세종/충청`,충북:`대전/세종/충청`,충남:`대전/세종/충청`,광주:`광주/전라`,전북:`광주/전라`,전남:`광주/전라`,대구:`대구/경북`,경북:`대구/경북`,부산:`부산/울산/경남`,울산:`부산/울산/경남`,경남:`부산/울산/경남`,제주:`제주`},J=e=>vt[e]??e,yt=[...new Set(q.map(e=>J(e.region)))],bt={0:`맑음`,1:`대체로 맑음`,2:`구름조금`,3:`흐림`,45:`안개`,48:`안개`,51:`이슬비`,53:`이슬비`,55:`이슬비`,56:`어는 비`,57:`어는 비`,61:`비`,63:`비`,65:`호우`,66:`어는 비`,67:`어는 비`,71:`눈`,73:`눈`,75:`폭설`,77:`싸락눈`,80:`소나기`,81:`소나기`,82:`소나기`,85:`눈보라`,86:`눈보라`,95:`뇌우`,96:`뇌우`,99:`뇌우`},xt=e=>bt[e]??`알 수 없음`,St=`inwoo-weather-cache`,Ct=6e5,wt=(e,t)=>{try{let n=localStorage.getItem(St);if(!n)return null;let r=JSON.parse(n);return r.count===e&&Date.now()-r.at<=t?r:null}catch{return null}},Tt=(e,t)=>{try{localStorage.setItem(St,JSON.stringify({at:Date.now(),count:e,rows:t}))}catch{}},Et=e=>new Promise(t=>setTimeout(t,e)),Dt=`https://api.met.no/weatherapi/locationforecast/2.0/compact`,Ot=[[`thunder`,`뇌우`],[`heavysnow`,`폭설`],[`snow`,`눈`],[`sleet`,`진눈깨비`],[`heavyrainshowers`,`소나기`],[`rainshowers`,`소나기`],[`lightrainshowers`,`소나기`],[`heavyrain`,`호우`],[`lightrain`,`이슬비`],[`rain`,`비`],[`fog`,`안개`],[`cloudy`,`흐림`],[`partlycloudy`,`구름조금`],[`fair`,`대체로 맑음`],[`clearsky`,`맑음`]],kt=(e=``)=>{let t=e.replace(/_(day|night|polartwilight)$/,``);return Ot.find(([e])=>t.includes(e))?.[1]??`알 수 없음`},At=async(e,t,n)=>{let r=[];for(let i=0;i<e.length;i+=t)r.push(...await Promise.all(e.slice(i,i+t).map(n)));return r},jt=async e=>At(e,8,async e=>{let t=await fetch(`${Dt}?lat=${e.lat}&lon=${e.lon}`);if(!t.ok)throw Error(`백업 서버가 ${t.status} 응답을 보냈습니다.`);let n=(await t.json()).properties.timeseries[0],r=n.data.instant.details;return{id:e.id,name:e.name,region:e.region,group:J(e.region),temp:Math.round(r.air_temperature??0),humidity:Math.round(r.relative_humidity??0),status:kt(n.data.next_1_hours?.summary?.symbol_code),observedAt:n.time??``}}),Mt=async e=>{for(let t=0;t<2;t++){let n=await fetch(e);if(n.ok)return n;if(n.status!==429||t===1)throw Error(`날씨 서버가 ${n.status} 응답을 보냈습니다.`);await Et(1500)}},Nt=async(e=q,t=!1)=>{let n=t?null:wt(e.length,Ct);if(n)return{rows:n.rows,at:n.at,stale:!1,source:`cache`};let r;try{r=await(await Mt(`${_t}?${params}`)).json()}catch(t){console.warn(`[weather] 1차 서버 실패, 백업 서버로 넘어갑니다.`,t);try{let t=await jt(e);return Tt(e.length,t),{rows:t,at:Date.now(),stale:!1,source:`met.no`}}catch(n){console.warn(`[weather] 백업 서버도 실패했습니다.`,n);let r=wt(e.length,1/0);if(r)return{rows:r.rows,at:r.at,stale:!0};throw t}}let i=Array.isArray(r)?r:[r],a=e.map((e,t)=>{let n=i[t]?.current??{};return{id:e.id,name:e.name,region:e.region,group:J(e.region),temp:Math.round(n.temperature_2m??0),humidity:Math.round(n.relative_humidity_2m??0),status:xt(n.weather_code),observedAt:n.time??``}});return Tt(e.length,a),{rows:a,at:Date.now(),stale:!1,source:`open-meteo`}},Pt=(e,t,n,r)=>{let i=e=>e*Math.PI/180,a=i(n-e),o=i(r-t),s=Math.sin(a/2)**2+Math.cos(i(e))*Math.cos(i(n))*Math.sin(o/2)**2;return 12742*Math.asin(Math.sqrt(s))},Ft=(e,t)=>q.reduce((n,r)=>{let i=Pt(e,t,r.lat,r.lon);return!n||i<n.distance?{...r,distance:i}:n},null),Y=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,X=(e,t)=>{let n=new Date(`${e}T00:00:00`);return n.setDate(n.getDate()+t),Y(n)},Z={min:X(Y(new Date),-90),max:X(Y(new Date),14)},It=async(e,t,n=t)=>{let r=new URLSearchParams({latitude:e.lat,longitude:e.lon,hourly:`temperature_2m,relative_humidity_2m,weather_code,precipitation_probability`,start_date:t,end_date:n,timezone:`Asia/Seoul`}),i=await fetch(`${_t}?${r}`);if(!i.ok)throw Error(`시간별 예보를 받지 못했습니다 (${i.status}).`);let{hourly:a}=await i.json();return a.time.map((e,t)=>({time:e,hour:Number(e.slice(11,13)),temp:Math.round(a.temperature_2m[t]),humidity:Math.round(a.relative_humidity_2m[t]),status:xt(a.weather_code[t]),rainChance:a.precipitation_probability[t]??0}))},Lt=[[`맑음`,31,40],[`대체로 맑음`,28,52],[`구름조금`,26,58],[`구름많음`,24,66],[`흐림`,21,72],[`이슬비`,18,84],[`비`,19,92],[`호우`,17,96],[`소나기`,23,80],[`눈`,-3,74],[`폭설`,-7,81],[`안개`,12,95],[`뇌우`,24,85]].map(([e,t,n])=>({id:`demo-`+e.replace(/\s/g,``),name:e,region:`데모`,group:`데모`,temp:t,humidity:n,status:e,demo:!0})),Rt=e=>q.find(t=>t.id===e)??null,zt={key:0,class:`detail`},Bt={class:`detail-head`},Vt={key:0,class:`sido`},Ht={class:`current`},Ut={class:`date-bar`},Wt=[`disabled`],Gt={class:`date-field`},Kt={class:`date-label`},qt={key:0,class:`tag today`},Jt={key:1,class:`tag past`},Yt={key:2,class:`tag future`},Xt=[`min`,`max`],Zt=[`disabled`],Qt={key:0,class:`state`},$t={key:1,class:`state error`},en={class:`axis`},tn={key:0},nn={class:`bar-slot`},rn={class:`temp`},an={key:0,class:`rain`},on={key:1,class:`rain none`},sn={class:`hour`},cn={key:2,class:`daymark`},ln=6,un=12,dn=b({__name:`HourlyDetail`,props:{city:{type:Object,default:null}},emits:[`close`],setup(e,{emit:t}){let a=e,f=t,y=n([]),b=n(!1),x=n(``),C=Y(new Date),T=new Date().getHours(),D=n(C),O=n(null),k=s(()=>D.value===C),A=s(()=>D.value<C);p(()=>[a.city?.id,D.value],async()=>{if(a.city){b.value=!0,x.value=``;try{let e=Rt(a.city.id);if(k.value){let t=await It(e,D.value,X(D.value,1)),n=new Date,r=new Date(n).setHours(n.getHours()-ln,0,0,0),i=new Date(n).setHours(n.getHours()+un,0,0,0);y.value=t.filter(e=>{let t=new Date(e.time).getTime();return t>=r&&t<=i})}else y.value=await It(e,D.value)}catch(e){x.value=`시간별 날씨를 불러오지 못했습니다.`,y.value=[],console.error(`[weather] 시간별 조회 실패`,e)}finally{b.value=!1}if(k.value){await o();let e=O.value,t=e?.querySelector(`.now`);e&&t&&(e.scrollLeft=t.offsetLeft-e.clientWidth/2+t.offsetWidth/2)}}},{immediate:!0}),p(()=>a.city?.id,()=>D.value=C);let j=e=>{let t=X(D.value,e);t>=Z.min&&t<=Z.max&&(D.value=t)},M=s(()=>{let e=new Date(`${D.value}T00:00:00`),t=[`일`,`월`,`화`,`수`,`목`,`금`,`토`][e.getDay()];return`${e.getMonth()+1}월 ${e.getDate()}일 (${t})`}),N=s(()=>{if(!y.value.length)return{min:0,max:1};let e=y.value.map(e=>e.temp),t=Math.min(...e),n=Math.max(...e);return{min:t,max:n===t?t+1:n}}),P=e=>Math.round(26+(e-N.value.min)/(N.value.max-N.value.min)*34);return(t,n)=>e.city?(i(),m(`section`,zt,[g(`header`,Bt,[_(K,{status:e.city.status,size:26},null,8,[`status`]),g(`div`,null,[g(`h4`,null,[u(c(e.city.name)+` `,1),e.city.region===e.city.name?l(``,!0):(i(),m(`span`,Vt,c(e.city.region),1))]),g(`p`,Ht,`지금 `+c(e.city.temp)+`°C · 습도 `+c(e.city.humidity)+`% · `+c(e.city.status),1)]),g(`button`,{class:`close`,type:`button`,"aria-label":`닫기`,onClick:n[0]||=e=>f(`close`)},`✕`)]),g(`div`,Ut,[g(`button`,{type:`button`,class:`step`,disabled:w(X)(D.value,-1)<w(Z).min,"aria-label":`하루 전`,onClick:n[1]||=e=>j(-1)},` ‹ `,8,Wt),g(`label`,Gt,[g(`span`,Kt,[u(c(M.value)+` `,1),k.value?(i(),m(`b`,qt,`오늘`)):A.value?(i(),m(`b`,Jt,`지난 날씨`)):(i(),m(`b`,Yt,`예보`))]),r(g(`input`,{"onUpdate:modelValue":n[2]||=e=>D.value=e,type:`date`,min:w(Z).min,max:w(Z).max},null,8,Xt),[[E,D.value]])]),g(`button`,{type:`button`,class:`step`,disabled:w(X)(D.value,1)>w(Z).max,"aria-label":`하루 뒤`,onClick:n[3]||=e=>j(1)},` › `,8,Zt),k.value?l(``,!0):(i(),m(`button`,{key:0,type:`button`,class:`today-btn`,onClick:n[4]||=e=>D.value=w(C)},` 오늘로 `))]),b.value?(i(),m(`p`,Qt,`시간별 예보를 불러오는 중…`)):x.value?(i(),m(`p`,$t,c(x.value),1)):y.value.length?(i(),m(h,{key:2},[g(`p`,en,[k.value?(i(),m(`span`,tn,`지금 기준 앞뒤 시간 · `)):l(``,!0),u(`최저 `+c(N.value.min)+`°C ~ 최고 `+c(N.value.max)+`°C `,1)]),g(`ul`,{ref_key:`hoursEl`,ref:O,class:`hours`},[(i(!0),m(h,null,S(y.value,e=>(i(),m(`li`,{key:e.time,class:v({now:k.value&&e.hour===w(T)})},[g(`span`,nn,[g(`span`,rn,c(e.temp)+`°`,1),g(`span`,{class:`bar`,style:d({height:P(e.temp)+`px`})},null,4)]),_(K,{status:e.status,size:18},null,8,[`status`]),e.rainChance>0?(i(),m(`span`,an,[_(G,{name:`droplet`,size:10}),u(c(e.rainChance)+`% `,1)])):(i(),m(`span`,on,`–`)),g(`span`,sn,c(k.value&&e.hour===w(T)?`지금`:e.hour+`시`),1),e.hour===0?(i(),m(`span`,cn,`다음날`)):l(``,!0)],2))),128))],512)],64)):l(``,!0)])):l(``,!0)}},[[`__scopeId`,`data-v-ab3056f6`]]),fn={key:0,class:`mist`},pn=.618033988749895,mn=b({__name:`WeatherBackdrop`,props:{status:{type:String,default:``}},setup(e){let t=e,r=Object.fromEntries(Object.entries(Object.assign({"../../../assets/photos/cloudy.jpg":()=>T(()=>import(`./cloudy-79FvOUrg.js`).then(e=>e.default),[]),"../../../assets/photos/lightning.jpg":()=>T(()=>import(`./lightning-BiLOcaih.js`).then(e=>e.default),[]),"../../../assets/photos/mostly-sunny.jpg":()=>T(()=>import(`./mostly-sunny-ia0xcVKP.js`).then(e=>e.default),[]),"../../../assets/photos/overcast.jpg":()=>T(()=>import(`./overcast-hCz2yzGp.js`).then(e=>e.default),[]),"../../../assets/photos/partly-cloudy.jpg":()=>T(()=>import(`./partly-cloudy-BCMTYjrN.js`).then(e=>e.default),[]),"../../../assets/photos/rain.jpg":()=>T(()=>import(`./rain-CRgnNhCC.js`).then(e=>e.default),[]),"../../../assets/photos/storm.jpg":()=>T(()=>import(`./storm-5A07q_Yo.js`).then(e=>e.default),[]),"../../../assets/photos/sunny.jpg":()=>T(()=>import(`./sunny-BxS2j8Tt.js`).then(e=>e.default),[])})).map(([e,t])=>[e.split(`/`).pop().replace(`.jpg`,``),t])),a={},o=async e=>(a[e]||(a[e]=await r[e]?.()),a[e]),c=[[`뇌우`,{photo:`storm`,effect:`storm`}],[`번개`,{photo:`lightning`,effect:`lightning`}],[`폭설`,{photo:`overcast`,effect:`snow-heavy`}],[`눈보라`,{photo:`overcast`,effect:`snow-heavy`}],[`싸락눈`,{photo:`overcast`,effect:`snow`}],[`눈`,{photo:`overcast`,effect:`snow`}],[`한파`,{photo:`overcast`,effect:`snow`}],[`소나기`,{photo:`rain`,effect:`shower`}],[`호우`,{photo:`rain`,effect:`rain-heavy`}],[`이슬비`,{photo:`rain`,effect:`drizzle`}],[`어는 비`,{photo:`rain`,effect:`rain`}],[`비`,{photo:`rain`,effect:`rain`}],[`안개`,{photo:`overcast`,effect:`fog`}],[`미세먼지`,{photo:`overcast`,effect:`fog`}],[`흐림`,{photo:`overcast`,effect:`clouds-slow`}],[`구름조금`,{photo:`partly-cloudy`,effect:`clouds`}],[`구름많`,{photo:`cloudy`,effect:`clouds`}],[`구름`,{photo:`cloudy`,effect:`clouds`}],[`대체로 맑`,{photo:`mostly-sunny`,effect:`sun-clouds`}],[`맑`,{photo:`sunny`,effect:`sun`}]],u={photo:`partly-cloudy`,effect:`clouds`},f=s(()=>{if(!t.status)return u;let e=c.find(([e])=>t.status.includes(e));return e?e[1]:u}),_=n([``,``]),y=n(0),b=0;p(()=>f.value.photo,async e=>{let t=++b,n=await o(e);if(!n||t!==b||_.value[y.value]===n)return;let r=1-y.value;_.value[r]=n,y.value=r},{immediate:!0});let w=n(null),E=n(1),D=null;C(()=>{let e=()=>{let e=w.value?.offsetHeight??0;E.value=Math.min(4,Math.max(1,Math.ceil(e/window.innerHeight)))};D=new ResizeObserver(e),w.value&&D.observe(w.value),window.addEventListener(`resize`,e),e(),x(()=>window.removeEventListener(`resize`,e))}),x(()=>D?.disconnect());let O=(e,{minDur:t,maxDur:n,minLen:r,maxLen:i,minOp:a,maxOp:o,width:s})=>Array.from({length:e},(e,c)=>{let l=c*pn%1,u=c*37%100/100,d=c*61%100/100,f=c*83%100/100,p=t+d*(n-t);return{left:u*106-3,dur:p,len:r+f*(i-r),delay:-l*p,opacity:a+f*(o-a),width:f>.7?s+.6:s}}),k=O(95,{minDur:1.8,maxDur:2.9,minLen:8,maxLen:22,minOp:.16,maxOp:.4,width:1}),A=O(150,{minDur:.7,maxDur:1.1,minLen:28,maxLen:70,minOp:.3,maxOp:.75,width:1.3}),j=O(200,{minDur:.5,maxDur:.78,minLen:42,maxLen:100,minOp:.34,maxOp:.85,width:1.6}),M=O(280,{minDur:.28,maxDur:.46,minLen:75,maxLen:175,minOp:.4,maxOp:.95,width:2.2}),N=s(()=>{let e={drizzle:k,shower:j,"rain-heavy":M}[f.value.effect]??A;return E.value>=3?e.filter((e,t)=>t%2==0):e}),P=s(()=>[`storm`,`lightning`,`rain-heavy`,`rain`,`shower`].includes(f.value.effect));return(e,t)=>(i(),m(`div`,{ref_key:`rootEl`,ref:w,class:v([`backdrop`,[`fx-${f.value.effect}`,{dark:P.value}]]),"aria-hidden":`true`},[(i(!0),m(h,null,S(_.value,(e,t)=>(i(),m(`div`,{key:t,class:v([`photo`,{on:t===y.value}]),style:d(e?{backgroundImage:`url(${e})`}:null)},null,6))),128)),f.value.effect===`sun`||f.value.effect===`sun-clouds`?(i(),m(h,{key:0},[t[0]||=g(`div`,{class:`glow`},null,-1),t[1]||=g(`div`,{class:`rays`},null,-1)],64)):l(``,!0),[`clouds`,`clouds-slow`,`sun-clouds`,`fog`,`overcast`].includes(f.value.effect)?(i(),m(h,{key:1},[t[2]||=g(`div`,{class:`cloud-layer a`},null,-1),t[3]||=g(`div`,{class:`cloud-layer b`},null,-1)],64)):l(``,!0),[`rain`,`rain-heavy`,`drizzle`,`shower`,`storm`].includes(f.value.effect)?(i(),m(h,{key:2},[(i(!0),m(h,null,S(E.value,e=>(i(),m(`div`,{key:e,class:`rain-field`,style:d({top:(e-1)*100+`vh`})},[(i(!0),m(h,null,S(N.value,(e,t)=>(i(),m(`span`,{key:t,class:`drop`,style:d({left:e.left+`%`,height:e.len+`px`,width:e.width+`px`,opacity:e.opacity,animationDuration:e.dur+`s`,animationDelay:e.delay+`s`})},null,4))),128))],4))),128)),f.value.effect===`drizzle`?l(``,!0):(i(),m(`div`,fn))],64)):l(``,!0),[`snow`,`snow-heavy`].includes(f.value.effect)?(i(),m(h,{key:3},[t[4]||=g(`div`,{class:`snow-layer a`},null,-1),t[5]||=g(`div`,{class:`snow-layer b`},null,-1),t[6]||=g(`div`,{class:`snow-layer c`},null,-1)],64)):l(``,!0),f.value.effect===`fog`?(i(),m(h,{key:4},[t[7]||=g(`div`,{class:`fog-layer a`},null,-1),t[8]||=g(`div`,{class:`fog-layer b`},null,-1)],64)):l(``,!0),[`storm`,`lightning`].includes(f.value.effect)?(i(),m(h,{key:5},[t[10]||=g(`div`,{class:`flash`},null,-1),(i(),m(h,null,S(2,e=>g(`svg`,{key:e,class:v([`bolt`,e===1?`a`:`b`]),viewBox:`0 0 200 300`,preserveAspectRatio:`xMidYMin meet`},[...t[9]||=[g(`path`,{d:`M96 0 78 96 112 88 66 210`,fill:`none`,stroke:`#bfe0ff`,"stroke-width":`11`,"stroke-linejoin":`round`,"stroke-linecap":`round`,opacity:`0.55`},null,-1),g(`path`,{d:`M96 0 78 96 112 88 66 210 90 128 58 138Z`,fill:`#f2f9ff`},null,-1),g(`path`,{d:`M96 0 78 96 112 88 66 210`,fill:`none`,stroke:`#fff`,"stroke-width":`2.4`,"stroke-linejoin":`round`,"stroke-linecap":`round`},null,-1),g(`path`,{d:`M84 62 46 104M104 108 142 142M74 150 44 188`,fill:`none`,stroke:`#eaf5ff`,"stroke-width":`2.2`,"stroke-linecap":`round`},null,-1)]],2)),64))],64)):l(``,!0),t[11]||=g(`div`,{class:`veil`},null,-1)],2))}},[[`__scopeId`,`data-v-64ab8157`]]),hn=e({default:()=>Ln}),gn={class:`dashboard-wrapper`},_n={class:`view-tabs`,role:`tablist`},vn=[`aria-selected`],yn=[`aria-selected`],bn={class:`tool-row`},xn={class:`summary`},Sn={key:0,class:`fav-count`},Cn=[`disabled`],wn=[`disabled`],Tn={key:0,class:`hint stale`},En={key:1,class:`hint`},Dn={key:3,class:`error-message`},On={key:4,class:`empty-message`},kn={key:0,class:`empty-message`},An={key:1,class:`pager`,"aria-label":`목록 페이지`},jn=[`disabled`],Mn=[`aria-current`,`onClick`],Nn=[`disabled`],Pn={class:`status-bar`},Fn={key:0,class:`stamp`},In=`inwoo-weather-favorites`,Q=5,Ln=b({__name:`WeatherParent`,setup(e){let t=n([]),r=n(!1),a=n(``),o=n(!1),d=n(``),b=n(``),x=n(`전체`),T=n(`region`),E=n(`카드를 클릭하거나 검색해 보세요.`),D=n(``),O=n(1),k=()=>{D.value=``,E.value=`카드를 클릭하거나 검색해 보세요.`},A=e=>{if(D.value===e){k();return}D.value=e;let n=t.value.find(t=>t.id===e);E.value=n?`${n.name} · ${n.status} · ${n.temp}°C · 습도 ${n.humidity}%`:`카드를 클릭하거나 검색해 보세요.`},j=n(JSON.parse(localStorage.getItem(In)??`[]`)),M=e=>{j.value=j.value.includes(e)?j.value.filter(t=>t!==e):[...j.value,e]};p(j,e=>localStorage.setItem(In,JSON.stringify(e)),{deep:!0});let N=n(``),P=n(`idle`),F=()=>{if(!navigator.geolocation){P.value=`denied`;return}P.value=`asking`,navigator.geolocation.getCurrentPosition(({coords:e})=>{let t=Ft(e.latitude,e.longitude);N.value=t?.id??``,P.value=`done`},()=>{P.value=`denied`},{timeout:8e3})},I=async(e=!1)=>{r.value=!0,a.value=``;try{let{rows:n,at:r,stale:i}=await Nt(void 0,e);t.value=[...n,...Lt],o.value=i,d.value=new Date(r).toLocaleTimeString(`ko-KR`,{hour:`2-digit`,minute:`2-digit`})}catch(e){a.value=`날씨를 불러오지 못했습니다. 네트워크를 확인하고 다시 시도해 주세요.`,o.value=!1,console.error(`[weather] 불러오기 실패`,e)}finally{r.value=!1}};C(async()=>{I(),(await navigator.permissions?.query({name:`geolocation`}).catch(()=>null))?.state===`granted`&&F()});let L=s(()=>{let e=b.value.trim();return t.value.filter(t=>!e||t.name.includes(e))}),R=s(()=>{let e=L.value.filter(e=>x.value===`전체`||e.group===x.value),t=e=>e.id===N.value?0:j.value.includes(e.id)?1:2;return[...e].sort((e,n)=>t(e)-t(n))}),ee=s(()=>L.value.reduce((e,t)=>(e[t.group]=(e[t.group]??0)+1,e),{전체:L.value.length})),z=s(()=>Math.max(1,Math.ceil(R.value.length/Q))),te=s(()=>R.value.slice((O.value-1)*Q,O.value*Q));p([b,x,T],()=>O.value=1),p(z,e=>{O.value>e&&(O.value=e)});let B=s(()=>t.value.find(e=>e.id===D.value)??null),ne=s(()=>t.value.find(e=>e.id===D.value)??t.value.find(e=>e.id===N.value)??null),re=s(()=>ne.value?.status??``),V=s(()=>L.value.filter(e=>j.value.includes(e.id)).length);p(E,e=>{console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${e}"`)});let H=n(``),U=s(()=>t.value.find(e=>e.id===H.value)??null),W=e=>{let n=t.value.find(t=>t.name===e);H.value=H.value===n?.id?``:n?.id??``};return(e,n)=>(i(),m(`div`,gn,[_(mn,{status:re.value},null,8,[`status`]),_(fe,null,{default:f(()=>[_(xe,{"current-query":b.value,onUpdateQuery:n[0]||=e=>b.value=e},null,8,[`current-query`])]),_:1}),_(fe,null,{default:f(()=>[g(`div`,_n,[g(`button`,{type:`button`,role:`tab`,"aria-selected":T.value===`region`,class:v({active:T.value===`region`}),onClick:n[1]||=e=>T.value=`region`},[_(G,{name:`city`,size:16}),n[10]||=u(` 지역별 날씨 현황 `,-1)],10,vn),g(`button`,{type:`button`,role:`tab`,"aria-selected":T.value===`status`,class:v({active:T.value===`status`}),onClick:n[2]||=e=>T.value=`status`},[_(G,{name:`droplet`,size:16}),n[11]||=u(` 날씨별 지역 현황 `,-1)],10,yn)]),g(`div`,bn,[g(`p`,xn,[g(`b`,null,c(L.value.length),1),n[12]||=u(`곳 `,-1),V.value?(i(),m(`span`,Sn,[_(G,{name:`star`,size:12,filled:!0}),u(` `+c(V.value),1)])):l(``,!0)]),g(`button`,{class:`tool`,type:`button`,disabled:P.value===`asking`,onClick:F},[_(G,{name:`location`,size:14}),u(` `+c(P.value===`asking`?`찾는 중…`:`내 위치`),1)],8,Cn),g(`button`,{class:`tool`,type:`button`,disabled:r.value,onClick:n[3]||=e=>I(!0)},c(r.value?`불러오는 중…`:`새로고침`),9,wn)]),o.value?(i(),m(`p`,Tn,[n[13]||=u(` 지금 서버 응답을 받지 못해 `,-1),g(`b`,null,c(d.value)+`에 받아 둔 값`,1),n[14]||=u(`을 보여 주고 있습니다. 잠시 뒤 새로고침을 눌러 보세요. `,-1)])):l(``,!0),P.value===`denied`?(i(),m(`p`,En,` 위치 권한이 없어 현재 위치를 표시하지 못했습니다. 나머지 기능은 그대로 쓸 수 있습니다. `)):l(``,!0),T.value===`region`?(i(),y(Te,{key:2,regions:[...w(yt),`데모`],current:x.value,counts:ee.value,onSelectRegion:n[4]||=e=>x.value=e},null,8,[`regions`,`current`,`counts`])):l(``,!0),a.value?(i(),m(`p`,Dn,[u(c(a.value)+` `,1),g(`button`,{type:`button`,onClick:n[5]||=e=>I(!0)},`다시 시도`)])):r.value&&!t.value.length?(i(),m(`p`,On,` 날씨를 불러오는 중입니다… `)):T.value===`region`?(i(),m(h,{key:5},[(i(!0),m(h,null,S(te.value,e=>(i(),m(h,{key:e.id},[_(it,{"city-item":e,favorite:j.value.includes(e.id),here:e.id===N.value,open:e.id===H.value,selected:e.id===D.value,onSelectCard:A,onClickDetail:W,onToggleFavorite:M},null,8,[`city-item`,`favorite`,`here`,`open`,`selected`]),e.id===H.value?(i(),y(dn,{key:0,city:U.value,onClose:n[6]||=e=>H.value=``},null,8,[`city`])):l(``,!0)],64))),128)),R.value.length===0?(i(),m(`p`,kn,[_(G,{name:`empty`,size:22}),n[15]||=u(` 검색 결과와 일치하는 도시가 없습니다. `,-1)])):l(``,!0),z.value>1?(i(),m(`nav`,An,[g(`button`,{type:`button`,disabled:O.value===1,"aria-label":`이전`,onClick:n[7]||=e=>O.value--},`‹`,8,jn),(i(!0),m(h,null,S(z.value,e=>(i(),m(`button`,{key:e,type:`button`,class:v({active:e===O.value}),"aria-current":e===O.value?`page`:void 0,onClick:t=>O.value=e},c(e),11,Mn))),128)),g(`button`,{type:`button`,disabled:O.value===z.value,"aria-label":`다음`,onClick:n[8]||=e=>O.value++},` › `,8,Nn)])):l(``,!0)],64)):(i(),m(h,{key:6},[B.value?(i(),m(h,{key:0},[_(it,{"city-item":B.value,favorite:j.value.includes(B.value.id),here:B.value.id===N.value,open:B.value.id===H.value,selected:!0,onSelectCard:A,onClickDetail:W,onToggleFavorite:M},null,8,[`city-item`,`favorite`,`here`,`open`]),B.value.id===H.value?(i(),y(dn,{key:0,city:U.value,onClose:n[9]||=e=>H.value=``},null,8,[`city`])):l(``,!0)],64)):l(``,!0),_(gt,{list:L.value,favorites:j.value,"here-id":N.value,"selected-id":D.value,onSelectCard:A,onToggleFavorite:M},null,8,[`list`,`favorites`,`here-id`,`selected-id`])],64))]),_:1}),g(`div`,Pn,[g(`span`,null,c(E.value),1),d.value?(i(),m(`small`,Fn,c(d.value)+` 기준 · Open-Meteo`,1)):l(``,!0)])]))}},[[`__scopeId`,`data-v-6d9e9c22`]]),Rn=`<script setup>
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
`,zn=`<script setup>
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
`,Bn=`<script setup>
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
import { ref, computed, watch, onMounted } from 'vue'
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
    // 데모 3곳은 배경 확인용이라 맨 뒤에 붙인다
    weatherList.value = [...rows, ...DEMO_ROWS]
    isStale.value = stale
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

onMounted(async () => {
  load()
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

      <!-- 첫 로딩 -->
      <p v-else-if="isLoading && !weatherList.length" class="empty-message">
        날씨를 불러오는 중입니다…
      </p>

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
`,Vn=`<template>
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
`,Hn=`<script setup>
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
`,Un=`<script setup>
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
`,Wn=`<script setup>
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
`,Gn=`<script setup>
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
`,Kn=`<script setup>
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

    <!-- 눈: 크기가 다른 눈송이가 흔들리며 내린다 -->
    <template v-if="['snow', 'snow-heavy'].includes(scene.effect)">
      <div class="snow-layer a" />
      <div class="snow-layer b" />
      <div class="snow-layer c" />
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
.snow-layer {
  position: absolute;
  inset: -20% 0 0;
  background-repeat: repeat;
}

.snow-layer.a {
  background-image:
    radial-gradient(circle 3px at 12% 8%, rgb(255 255 255 / 92%), transparent),
    radial-gradient(circle 2px at 38% 22%, rgb(255 255 255 / 80%), transparent),
    radial-gradient(circle 3px at 68% 12%, rgb(255 255 255 / 88%), transparent),
    radial-gradient(circle 2px at 88% 30%, rgb(255 255 255 / 78%), transparent);
  background-size: 260px 260px;
  animation: snow-fall 11s linear infinite;
}

.snow-layer.b {
  background-image:
    radial-gradient(circle 2px at 22% 40%, rgb(255 255 255 / 70%), transparent),
    radial-gradient(circle 4px at 55% 60%, rgb(255 255 255 / 85%), transparent),
    radial-gradient(circle 2px at 80% 48%, rgb(255 255 255 / 66%), transparent);
  background-size: 340px 340px;
  animation:
    snow-fall 17s linear infinite,
    sway 7s ease-in-out infinite alternate;
}

.snow-layer.c {
  background-image:
    radial-gradient(circle 5px at 34% 70%, rgb(255 255 255 / 62%), transparent),
    radial-gradient(circle 4px at 72% 84%, rgb(255 255 255 / 55%), transparent);
  background-size: 430px 430px;
  animation:
    snow-fall 24s linear infinite,
    sway 11s ease-in-out infinite alternate-reverse;
}

.fx-snow-heavy .snow-layer {
  animation-duration: 7s;
  opacity: 1;
}

@keyframes snow-fall {
  to {
    background-position-y: 130%;
  }
}

@keyframes sway {
  from {
    transform: translateX(-16px);
  }
  to {
    transform: translateX(16px);
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
`,qn=`<script setup>
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
`,Jn=`<script setup>
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
      {{ open ? '닫기' : '시간별' }}
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
`,Yn=`<script setup>
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
`,Xn=`/**
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

export const fetchWeather = async (cities = CITIES, force = false) => {
  const fresh = force ? null : readCache(cities.length, CACHE_TTL)
  if (fresh) return { rows: fresh.rows, at: fresh.at, stale: false, source: 'cache' }

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
`,Zn=Object.fromEntries(Object.entries(Object.assign({"./WeatherComposition.vue":O,"./WeatherMockup.vue":z,"./WeatherParent.vue":hn})).map(([e,t])=>[e.replace(`./`,``).replace(`.vue`,``),t.default]));Object.keys(Zn).sort();var Qn=e=>Zn[e]??null,$n=Object.assign({"./WeatherComposition.vue":Rn,"./WeatherMockup.vue":zn,"./WeatherParent.vue":Bn,"./weather/BaseDashboardCard.vue":Vn,"./weather/HourlyDetail.vue":Hn,"./weather/RegionTabs.vue":Un,"./weather/SearchBar.vue":Wn,"./weather/UiIcon.vue":Gn,"./weather/WeatherBackdrop.vue":Kn,"./weather/WeatherByStatus.vue":qn,"./weather/WeatherCard.vue":Jn,"./weather/WeatherIcon.vue":Yn,"./weather/weatherApi.js":Xn}),$=Object.fromEntries(Object.entries($n).map(([e,t])=>[e.replace(`./`,``).replace(/\.(vue|js)$/,``),t])),er=Object.fromEntries(Object.keys($n).map(e=>[e.replace(`./`,``).replace(/\.(vue|js)$/,``),e.replace(`./`,`src/components/assignments/`)])),tr=e=>$[e]===void 0?Object.keys($).find(t=>t.endsWith(`/${e}`)):e,nr=e=>$[tr(e)]??``,rr=e=>er[tr(e)]??``;export{Qn as n,nr as r,rr as t};