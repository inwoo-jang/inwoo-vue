var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var r={},i=[],a=()=>{},o=()=>!1,s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith(`onUpdate:`),l=Object.assign,u=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,m=e=>C(e)===`[object Map]`,h=e=>C(e)===`[object Set]`,g=e=>C(e)===`[object Date]`,_=e=>typeof e==`function`,v=e=>typeof e==`string`,y=e=>typeof e==`symbol`,b=e=>typeof e==`object`&&!!e,x=e=>(b(e)||_(e))&&_(e.then)&&_(e.catch),S=Object.prototype.toString,C=e=>S.call(e),ee=e=>C(e).slice(8,-1),te=e=>C(e)===`[object Object]`,ne=e=>v(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,re=n(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ie=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ae=/-\w/g,w=ie(e=>e.replace(ae,e=>e.slice(1).toUpperCase())),oe=/\B([A-Z])/g,se=ie(e=>e.replace(oe,`-$1`).toLowerCase()),ce=ie(e=>e.charAt(0).toUpperCase()+e.slice(1)),le=ie(e=>e?`on${ce(e)}`:``),T=(e,t)=>!Object.is(e,t),ue=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},de=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},fe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},pe,me=()=>pe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function E(e){if(p(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=v(r)?ve(r):E(r);if(i)for(let e in i)t[e]=i[e]}return t}if(v(e)||b(e))return e}var he=/;(?![^(]*\))/g,ge=/:([^]+)/,_e=/\/\*[^]*?\*\//g;function ve(e){let t={};return e.replace(_e,``).split(he).forEach(e=>{if(e){let n=e.split(ge);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function D(e){let t=``;if(v(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){let r=D(e[n]);r&&(t+=r+` `)}else if(b(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ye=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,be=n(ye);ye+``;function xe(e){return!!e||e===``}function Se(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ce(e[r],t[r]);return n}function Ce(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=y(e),r=y(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return n&&r?Se(e,t):!1;if(n=b(e),r=b(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Ce(e[n],t[n]))return!1}}return String(e)===String(t)}function we(e,t){return e.findIndex(e=>Ce(e,t))}var Te=e=>!!(e&&e.__v_isRef===!0),O=e=>v(e)?e:e==null?``:p(e)||b(e)&&(e.toString===S||!_(e.toString))?Te(e)?O(e.value):JSON.stringify(e,Ee,2):String(e),Ee=(e,t)=>Te(t)?Ee(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[De(t,r)+` =>`]=n,e),{})}:h(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>De(e))}:y(t)?De(t):b(t)&&!p(t)&&!te(t)?String(t):t,De=(e,t=``)=>y(e)?`Symbol(${e.description??t})`:e,k,Oe=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&k&&(k.active?(this.parent=k,this.index=(k.scopes||(k.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=k;try{return k=this,e()}finally{k=t}}}on(){++this._on===1&&(this.prevScope=k,k=this)}off(){if(this._on>0&&--this._on===0){if(k===this)k=this.prevScope;else{let e=k;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ke(){return k}var A,Ae=new WeakSet,je=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,k&&(k.active?k.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ae.has(this)&&(Ae.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Je(this),Re(this);let e=A,t=We;A=this,We=!0;try{return this.fn()}finally{ze(this),A=e,We=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)He(e);this.deps=this.depsTail=void 0,Je(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ae.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Be(this)&&this.run()}get dirty(){return Be(this)}},Me=0,Ne,Pe;function Fe(e,t=!1){if(e.flags|=8,t){e.next=Pe,Pe=e;return}e.next=Ne,Ne=e}function Ie(){Me++}function Le(){if(--Me>0)return;if(Pe){let e=Pe;for(Pe=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ne;){let t=Ne;for(Ne=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Re(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ze(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),He(r),Ue(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Be(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ve(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ve(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ye)||(e.globalVersion=Ye,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Be(e))))return;e.flags|=2;let t=e.dep,n=A,r=We;A=e,We=!0;try{Re(e);let n=e.fn(e._value);(t.version===0||T(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{A=n,We=r,ze(e),e.flags&=-3}}function He(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)He(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ue(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var We=!0,Ge=[];function Ke(){Ge.push(We),We=!1}function qe(){let e=Ge.pop();We=e===void 0||e}function Je(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=A;A=void 0;try{t()}finally{A=e}}}var Ye=0,Xe=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ze=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!A||!We||A===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==A)t=this.activeLink=new Xe(A,this),A.deps?(t.prevDep=A.depsTail,A.depsTail.nextDep=t,A.depsTail=t):A.deps=A.depsTail=t,Qe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=A.depsTail,t.nextDep=void 0,A.depsTail.nextDep=t,A.depsTail=t,A.deps===t&&(A.deps=e)}return t}trigger(e){this.version++,Ye++,this.notify(e)}notify(e){Ie();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Le()}}};function Qe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Qe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var $e=new WeakMap,et=Symbol(``),tt=Symbol(``),nt=Symbol(``);function j(e,t,n){if(We&&A){let t=$e.get(e);t||$e.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ze),r.map=t,r.key=n),r.track()}}function rt(e,t,n,r,i,a){let o=$e.get(e);if(!o){Ye++;return}let s=e=>{e&&e.trigger()};if(Ie(),t===`clear`)o.forEach(s);else{let i=p(e),a=i&&ne(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===nt||!y(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(nt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(et)),m(e)&&s(o.get(tt)));break;case`delete`:i||(s(o.get(et)),m(e)&&s(o.get(tt)));break;case`set`:m(e)&&s(o.get(et))}}Le()}function it(e){let t=M(e);return t===e?t:(j(t,`iterate`,nt),Ut(e)?t:t.map(Kt))}function at(e){return j(e=M(e),`iterate`,nt),e}function ot(e,t){return Ht(e)?qt(Vt(e)?Kt(t):t):Kt(t)}var st={__proto__:null,[Symbol.iterator](){return ct(this,Symbol.iterator,e=>ot(this,e))},concat(...e){return it(this).concat(...e.map(e=>p(e)?it(e):e))},entries(){return ct(this,`entries`,e=>(e[1]=ot(this,e[1]),e))},every(e,t){return ut(this,`every`,e,t,void 0,arguments)},filter(e,t){return ut(this,`filter`,e,t,e=>e.map(e=>ot(this,e)),arguments)},find(e,t){return ut(this,`find`,e,t,e=>ot(this,e),arguments)},findIndex(e,t){return ut(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ut(this,`findLast`,e,t,e=>ot(this,e),arguments)},findLastIndex(e,t){return ut(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ut(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ft(this,`includes`,e)},indexOf(...e){return ft(this,`indexOf`,e)},join(e){return it(this).join(e)},lastIndexOf(...e){return ft(this,`lastIndexOf`,e)},map(e,t){return ut(this,`map`,e,t,void 0,arguments)},pop(){return pt(this,`pop`)},push(...e){return pt(this,`push`,e)},reduce(e,...t){return dt(this,`reduce`,e,t)},reduceRight(e,...t){return dt(this,`reduceRight`,e,t)},shift(){return pt(this,`shift`)},some(e,t){return ut(this,`some`,e,t,void 0,arguments)},splice(...e){return pt(this,`splice`,e)},toReversed(){return it(this).toReversed()},toSorted(e){return it(this).toSorted(e)},toSpliced(...e){return it(this).toSpliced(...e)},unshift(...e){return pt(this,`unshift`,e)},values(){return ct(this,`values`,e=>ot(this,e))}};function ct(e,t,n){let r=at(e),i=r[t]();return r!==e&&!Ut(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var lt=Array.prototype;function ut(e,t,n,r,i,a){let o=at(e),s=o!==e&&!Ut(e),c=o[t];if(c!==lt[t]){let t=c.apply(e,a);return s?Kt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,ot(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function dt(e,t,n,r){let i=at(e),a=i!==e&&!Ut(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=ot(e,t)),n.call(this,t,ot(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?ot(e,c):c}function ft(e,t,n){let r=M(e);j(r,`iterate`,nt);let i=r[t](...n);return(i===-1||i===!1)&&Wt(n[0])?(n[0]=M(n[0]),r[t](...n)):i}function pt(e,t,n=[]){Ke(),Ie();let r=M(e)[t].apply(e,n);return Le(),qe(),r}var mt=n(`__proto__,__v_isRef,__isVue`),ht=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(y));function gt(e){y(e)||(e=String(e));let t=M(this);return j(t,`has`,e),t.hasOwnProperty(e)}var _t=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ft:Pt:i?Nt:Mt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=p(e);if(!r){let e;if(a&&(e=st[t]))return e;if(t===`hasOwnProperty`)return gt}let o=Reflect.get(e,t,N(e)?e:n);if((y(t)?ht.has(t):mt(t))||(r||j(e,`get`,t),i))return o;if(N(o)){let e=a&&ne(t)?o:o.value;return r&&b(e)?zt(e):e}return b(o)?r?zt(o):Lt(o):o}},vt=class extends _t{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=p(e)&&ne(t);if(!this._isShallow){let e=Ht(i);if(!Ut(n)&&!Ht(n)&&(i=M(i),n=M(n)),!a&&N(i)&&!N(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:f(e,t),s=Reflect.set(e,t,n,N(e)?e:r);return e===M(r)&&s&&(o?T(n,i)&&rt(e,`set`,t,n,i):rt(e,`add`,t,n)),s}deleteProperty(e,t){let n=f(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&rt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!y(t)||!ht.has(t))&&j(e,`has`,t),n}ownKeys(e){return j(e,`iterate`,p(e)?`length`:et),Reflect.ownKeys(e)}},yt=class extends _t{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},bt=new vt,xt=new yt,St=new vt(!0),Ct=e=>e,wt=e=>Reflect.getPrototypeOf(e);function Tt(e,t,n){return function(...r){let i=this.__v_raw,a=M(i),o=m(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,u=i[e](...r),d=n?Ct:t?qt:Kt;return!t&&j(a,`iterate`,c?tt:et),l(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:s?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Et(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Dt(e,t){let n={get(n){let r=this.__v_raw,i=M(r),a=M(n);e||(T(n,a)&&j(i,`get`,n),j(i,`get`,a));let{has:o}=wt(i),s=t?Ct:e?qt:Kt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&j(M(t),`iterate`,et),t.size},has(t){let n=this.__v_raw,r=M(n),i=M(t);return e||(T(t,i)&&j(r,`has`,t),j(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=M(a),s=t?Ct:e?qt:Kt;return!e&&j(o,`iterate`,et),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return l(n,e?{add:Et(`add`),set:Et(`set`),delete:Et(`delete`),clear:Et(`clear`)}:{add(e){let n=M(this),r=wt(n),i=M(e),a=!t&&!Ut(e)&&!Ht(e)?i:e;return r.has.call(n,a)||T(e,a)&&r.has.call(n,e)||T(i,a)&&r.has.call(n,i)||(n.add(a),rt(n,`add`,a,a)),this},set(e,n){!t&&!Ut(n)&&!Ht(n)&&(n=M(n));let r=M(this),{has:i,get:a}=wt(r),o=i.call(r,e);o||=(e=M(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?T(n,s)&&rt(r,`set`,e,n,s):rt(r,`add`,e,n),this},delete(e){let t=M(this),{has:n,get:r}=wt(t),i=n.call(t,e);i||=(e=M(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&rt(t,`delete`,e,void 0,a),o},clear(){let e=M(this),t=e.size!==0,n=e.clear();return t&&rt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Tt(r,e,t)}),n}function Ot(e,t){let n=Dt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(f(n,r)&&r in t?n:t,r,i)}var kt={get:Ot(!1,!1)},At={get:Ot(!1,!0)},jt={get:Ot(!0,!1)},Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap;function It(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Lt(e){return Ht(e)?e:Bt(e,!1,bt,kt,Mt)}function Rt(e){return Bt(e,!1,St,At,Nt)}function zt(e){return Bt(e,!0,xt,jt,Pt)}function Bt(e,t,n,r,i){if(!b(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=It(ee(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Vt(e){return Ht(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function Ut(e){return!!(e&&e.__v_isShallow)}function Wt(e){return e?!!e.__v_raw:!1}function M(e){let t=e&&e.__v_raw;return t?M(t):e}function Gt(e){return!f(e,`__v_skip`)&&Object.isExtensible(e)&&de(e,`__v_skip`,!0),e}var Kt=e=>b(e)?Lt(e):e,qt=e=>b(e)?zt(e):e;function N(e){return e?e.__v_isRef===!0:!1}function P(e){return Jt(e,!1)}function Jt(e,t){return N(e)?e:new Yt(e,t)}var Yt=class{constructor(e,t){this.dep=new Ze,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:M(e),this._value=t?e:Kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ut(e)||Ht(e);e=n?e:M(e),T(e,t)&&(this._rawValue=e,this._value=n?e:Kt(e),this.dep.trigger())}};function F(e){return N(e)?e.value:e}var Xt={get:(e,t,n)=>t===`__v_raw`?e:F(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return N(i)&&!N(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Zt(e){return Vt(e)?e:new Proxy(e,Xt)}var Qt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ze(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ye-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&A!==this)return Fe(this,!0),!0}get value(){let e=this.dep.track();return Ve(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function $t(e,t,n=!1){let r,i;return _(e)?r=e:(r=e.get,i=e.set),new Qt(r,i,n)}var en={},tn=new WeakMap,nn=void 0;function rn(e,t=!1,n=nn){if(n){let t=tn.get(n);t||tn.set(n,t=[]),t.push(e)}}function an(e,t,n=r){let{immediate:i,deep:o,once:s,scheduler:c,augmentJob:l,call:d}=n,f=e=>o?e:Ut(e)||o===!1||o===0?on(e,1):on(e),m,h,g,v,y=!1,b=!1;if(N(e)?(h=()=>e.value,y=Ut(e)):Vt(e)?(h=()=>f(e),y=!0):p(e)?(b=!0,y=e.some(e=>Vt(e)||Ut(e)),h=()=>e.map(e=>{if(N(e))return e.value;if(Vt(e))return f(e);if(_(e))return d?d(e,2):e()})):h=_(e)?t?d?()=>d(e,2):e:()=>{if(g){Ke();try{g()}finally{qe()}}let t=nn;nn=m;try{return d?d(e,3,[v]):e(v)}finally{nn=t}}:a,t&&o){let e=h,t=o===!0?1/0:o;h=()=>on(e(),t)}let x=ke(),S=()=>{m.stop(),x&&x.active&&u(x.effects,m)};if(s&&t){let e=t;t=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(en):en,ee=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(t){let n=m.run();if(e||o||y||(b?n.some((e,t)=>T(e,C[t])):T(n,C))){g&&g();let e=nn;nn=m;try{let e=[n,C===en?void 0:b&&C[0]===en?[]:C,v];C=n,d?d(t,3,e):t(...e)}finally{nn=e}}}else m.run()};return l&&l(ee),m=new je(h),m.scheduler=c?()=>c(ee,!1):ee,v=e=>rn(e,!1,m),g=m.onStop=()=>{let e=tn.get(m);if(e){if(d)d(e,4);else for(let t of e)t();tn.delete(m)}},t?i?ee(!0):C=m.run():c?c(ee.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function on(e,t=1/0,n){if(t<=0||!b(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,N(e))on(e.value,t,n);else if(p(e))for(let r=0;r<e.length;r++)on(e[r],t,n);else if(h(e)||m(e))e.forEach(e=>{on(e,t,n)});else if(te(e)){for(let r in e)on(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&on(e[r],t,n)}return e}function sn(e,t,n,r){try{return r?e(...r):e()}catch(e){ln(e,t,n)}}function cn(e,t,n,r){if(_(e)){let i=sn(e,t,n,r);return i&&x(i)&&i.catch(e=>{ln(e,t,n)}),i}if(p(e)){let i=[];for(let a=0;a<e.length;a++)i.push(cn(e[a],t,n,r));return i}}function ln(e,t,n,i=!0){let a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||r;if(t){let r=t.parent,i=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,a)===!1)return}r=r.parent}if(o){Ke(),sn(o,null,10,[e,i,a]),qe();return}}un(e,n,a,i,s)}function un(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var dn=[],fn=-1,pn=[],mn=null,hn=0,gn=Promise.resolve(),_n=null;function vn(e){let t=_n||gn;return e?t.then(this?e.bind(this):e):t}function yn(e){let t=fn+1,n=dn.length;for(;t<n;){let r=t+n>>>1,i=dn[r],a=Tn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function bn(e){if(!(e.flags&1)){let t=Tn(e),n=dn[dn.length-1];!n||!(e.flags&2)&&t>=Tn(n)?dn.push(e):dn.splice(yn(t),0,e),e.flags|=1,xn()}}function xn(){_n||=gn.then(En)}function Sn(e){p(e)?pn.push(...e):mn&&e.id===-1?mn.splice(hn+1,0,e):e.flags&1||(pn.push(e),e.flags|=1),xn()}function Cn(e,t,n=fn+1){for(;n<dn.length;n++){let t=dn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;dn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function wn(e){if(pn.length){let e=[...new Set(pn)].sort((e,t)=>Tn(e)-Tn(t));if(pn.length=0,mn){mn.push(...e);return}for(mn=e,hn=0;hn<mn.length;hn++){let e=mn[hn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}mn=null,hn=0}}var Tn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function En(e){try{for(fn=0;fn<dn.length;fn++){let e=dn[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<dn.length;fn++){let e=dn[fn];e&&(e.flags&=-2)}fn=-1,dn.length=0,wn(e),_n=null,(dn.length||pn.length)&&En(e)}}var I=null,Dn=null;function On(e){let t=I;return I=e,Dn=e&&e.type.__scopeId||null,t}function L(e,t=I,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Zi(-1);let i=On(t),a=qi.length,o;try{o=e(...n)}finally{for(let e=qi.length;e>a;e--)Yi();On(i),r._d&&Zi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function R(e,t){if(I===null)return e;let n=Aa(I),i=e.dirs||=[];for(let e=0;e<t.length;e++){let[a,o,s,c=r]=t[e];a&&(_(a)&&(a={mounted:a,updated:a}),a.deep&&on(o),i.push({dir:a,instance:n,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function kn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ke(),cn(c,n,8,[e.el,s,e,t]),qe())}}function An(e,t){if(Y){let n=Y.provides,r=Y.parent&&Y.parent.provides;r===n&&(n=Y.provides=Object.create(r)),n[e]=t}}function jn(e,t,n=!1){let r=ha();if(r||ei){let i=ei?ei._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&_(t)?t.call(r&&r.proxy):t}}var Mn=Symbol.for(`v-scx`),Nn=()=>jn(Mn);function Pn(e,t){return Fn(e,null,t)}function z(e,t,n){return Fn(e,t,n)}function Fn(e,t,n=r){let{immediate:i,deep:o,flush:s,once:c}=n,u=l({},n),d=t&&i||!t&&s!==`post`,f;if(xa){if(s===`sync`){let e=Nn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=a,e.resume=a,e.pause=a,e}}let p=Y;u.call=(e,t,n)=>cn(e,p,t,n);let m=!1;s===`post`?u.scheduler=e=>{ji(e,p&&p.suspense)}:s!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():bn(e)}),u.augmentJob=e=>{t&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=an(e,t,u);return xa&&(f?f.push(h):d&&h()),h}function In(e,t,n){let r=this.proxy,i=v(e)?e.includes(`.`)?Ln(r,e):()=>r[e]:e.bind(r,r),a;_(t)?a=t:(a=t.handler,n=t);let o=va(this),s=Fn(i,a.bind(r),n);return o(),s}function Ln(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Rn=new WeakMap,zn=Symbol(`_vte`),Bn=e=>e.__isTeleport,Vn=e=>e&&(e.disabled||e.disabled===``),Hn=e=>e&&(e.defer||e.defer===``),Un=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Wn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Gn=(e,t)=>{let n=e&&e.to;return v(n)?t?t(n):null:n},Kn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Vn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Vn(e.props),r=e.target=Gn(e.props,m),a=Zn(r,e,h,p);r&&(o!==`svg`&&Un(r)?o=`svg`:o!==`mathml`&&Wn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),Xn(e,!1)))},S=e=>{let t=()=>{if(Rn.get(e)===t){if(Rn.delete(e),Vn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),Xn(e,!0)}x(e)}};Rn.set(e,t),ji(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Hn(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),Xn(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Rn.get(e);if(u){u.flags|=8,Rn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Vn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Un(p)?o=`svg`:(o===`mathml`||Wn(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),Li(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):qn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=Gn(t.props,m);e&&(t.target=e,qn(t,e,null,l,0))}else g&&qn(t,p,h,l,1);Xn(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Vn(f),m=a||!p,h=Rn.get(e);if(h&&(h.flags|=8,Rn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:qn,hydrate:Jn};function qn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Rn.has(e)&&(!d||Vn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Jn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=Gn(t.props,c),h=Vn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||Zn(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||Zn(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),Xn(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var Yn=Kn;function Xn(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function Zn(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[zn]=o,e&&(r(a,e,i),r(o,e,i)),o}var Qn=Symbol(`_leaveCb`);function $n(e,t){e.shapeFlag&6&&e.component?(e.transition=t,$n(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function er(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function tr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var nr=new WeakMap;function rr(e,t,n,i,a=!1){if(p(e)){e.forEach((e,r)=>rr(e,t&&(p(t)?t[r]:t),n,i,a));return}if(ar(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&rr(e,t,n,i.component.subTree);return}let s=i.shapeFlag&4?Aa(i.component):i.el,c=a?null:s,{i:l,r:d}=e,m=t&&t.r,h=l.refs===r?l.refs={}:l.refs,g=l.setupState,y=M(g),b=g===r?o:e=>!tr(h,e)&&f(y,e),x=(e,t)=>!(t&&tr(h,t));if(m!=null&&m!==d){if(ir(t),v(m))h[m]=null,b(m)&&(g[m]=null);else if(N(m)){let e=t;x(m,e.k)&&(m.value=null),e.k&&(h[e.k]=null)}}if(_(d))sn(d,l,12,[c,h]);else{let t=v(d),r=N(d);if(t||r){let i=()=>{if(e.f){let n=t?b(d)?g[d]:h[d]:x(d)||!e.k?d.value:h[e.k];if(a)p(n)&&u(n,s);else if(p(n))n.includes(s)||n.push(s);else if(t)h[d]=[s],b(d)&&(g[d]=h[d]);else{let t=[s];x(d,e.k)&&(d.value=t),e.k&&(h[e.k]=t)}}else t?(h[d]=c,b(d)&&(g[d]=c)):r&&(x(d,e.k)&&(d.value=c),e.k&&(h[e.k]=c))};if(c){let t=()=>{i(),nr.delete(e)};t.id=-1,nr.set(e,t),ji(t,n)}else ir(e),i()}}}function ir(e){let t=nr.get(e);t&&(t.flags|=8,nr.delete(e))}me().requestIdleCallback,me().cancelIdleCallback;var ar=e=>!!e.type.__asyncLoader,or=e=>e.type.__isKeepAlive;function sr(e,t){lr(e,`a`,t)}function cr(e,t){lr(e,`da`,t)}function lr(e,t,n=Y){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(dr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)or(e.parent.vnode)&&ur(r,t,n,e),e=e.parent}}function ur(e,t,n,r){let i=dr(t,e,r,!0);vr(()=>{u(r[t],i)},n)}function dr(e,t,n=Y,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ke();let i=va(n),a=cn(t,n,e,r);return i(),qe(),a};return r?i.unshift(a):i.push(a),a}}var fr=e=>(t,n=Y)=>{(!xa||e===`sp`)&&dr(e,(...e)=>t(...e),n)},pr=fr(`bm`),mr=fr(`m`),hr=fr(`bu`),gr=fr(`u`),_r=fr(`bum`),vr=fr(`um`),yr=fr(`sp`),br=fr(`rtg`),xr=fr(`rtc`);function Sr(e,t=Y){dr(`ec`,e,t)}var Cr=`components`;function wr(e,t){return Dr(Cr,e,!0,t)||e}var Tr=Symbol.for(`v-ndc`);function Er(e){return v(e)?Dr(Cr,e,!1)||e:e||Tr}function Dr(e,t,n=!0,r=!1){let i=I||Y;if(i){let n=i.type;if(e===Cr){let e=ja(n,!1);if(e&&(e===t||e===w(t)||e===ce(w(t))))return n}let a=Or(i[e]||n[e],t)||Or(i.appContext[e],t);return!a&&r?n:a}}function Or(e,t){return e&&(e[t]||e[w(t)]||e[ce(w(t))])}function B(e,t,n,r){let i,a=n&&n[r],o=p(e);if(o||v(e)){let n=o&&Vt(e),r=!1,s=!1;n&&(r=!Ut(e),s=Ht(e),e=at(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?qt(Kt(e[n])):Kt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(b(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function kr(e,t,n={},r,i,a){if(I.ce||I.parent&&ar(I.parent)&&I.parent.ce){let e=a!=null&&n.key==null?l({},n,{key:a}):n,i=Object.keys(e).length>0;return t!=="default"&&(e.name=t),H(),W(V,null,[K(`slot`,e,r&&r())],i?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);let s=qi.length;H();let c;try{let i=o&&Ar(o(n)),s=n.key||a||i&&i.key;c=W(V,{key:(s&&!y(s)?s:`_${t}`)+(!i&&r?`_fb`:``)},i||(r?r():[]),i&&e._===1?64:-2)}catch(e){for(let e=qi.length;e>s;e--)Yi();throw e}finally{o&&o._c&&(o._d=!0)}return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),c}function Ar(e){return e.some(e=>!$i(e)||!(e.type===Gi||e.type===V&&!Ar(e.children)))?e:null}var jr=e=>e?ba(e)?Aa(e):jr(e.parent):null,Mr=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jr(e.parent),$root:e=>jr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Vr(e),$forceUpdate:e=>e.f||=()=>{bn(e.update)},$nextTick:e=>e.n||=vn.bind(e.proxy),$watch:e=>In.bind(e)}),Nr=(e,t)=>e!==r&&!e.__isScriptSetup&&f(e,t),Pr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(t[0]!==`$`){let e=s[t];if(e!==void 0)switch(e){case 1:return i[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else if(Nr(i,t))return s[t]=1,i[t];else if(a!==r&&f(a,t))return s[t]=2,a[t];else if(f(o,t))return s[t]=3,o[t];else if(n!==r&&f(n,t))return s[t]=4,n[t];else Ir&&(s[t]=0)}let u=Mr[t],d,p;if(u)return t===`$attrs`&&j(e.attrs,`get`,``),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==r&&f(n,t))return s[t]=4,n[t];if(p=l.config.globalProperties,f(p,t))return p[t]},set({_:e},t,n){let{data:i,setupState:a,ctx:o}=e;return Nr(a,t)?(a[t]=n,!0):i!==r&&f(i,t)?(i[t]=n,!0):f(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(n[c]||e!==r&&c[0]!==`$`&&f(e,c)||Nr(t,c)||f(o,c)||f(i,c)||f(Mr,c)||f(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?f(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Fr(e){return p(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Ir=!0;function Lr(e){let t=Vr(e),n=e.proxy,r=e.ctx;Ir=!1,t.beforeCreate&&zr(t.beforeCreate,e,`bc`);let{data:i,computed:o,methods:s,watch:c,provide:l,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:h,updated:g,activated:v,deactivated:y,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:ee,render:te,renderTracked:ne,renderTriggered:re,errorCaptured:ie,serverPrefetch:ae,expose:w,inheritAttrs:oe,components:se,directives:ce,filters:le}=t;if(u&&Rr(u,r,null),s)for(let e in s){let t=s[e];_(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);b(t)&&(e.data=Lt(t))}if(Ir=!0,o)for(let e in o){let t=o[e],i=X({get:_(t)?t.bind(n,n):_(t.get)?t.get.bind(n,n):a,set:!_(t)&&_(t.set)?t.set.bind(n):a});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(c)for(let e in c)Br(c[e],r,n,e);if(l){let e=_(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{An(t,e[t])})}d&&zr(d,e,`c`);function T(e,t){p(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(T(pr,f),T(mr,m),T(hr,h),T(gr,g),T(sr,v),T(cr,y),T(Sr,ie),T(xr,ne),T(br,re),T(_r,S),T(vr,ee),T(yr,ae),p(w))if(w.length){let t=e.exposed||={};w.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};te&&e.render===a&&(e.render=te),oe!=null&&(e.inheritAttrs=oe),se&&(e.components=se),ce&&(e.directives=ce),ae&&er(e)}function Rr(e,t,n=a){p(e)&&(e=Kr(e));for(let n in e){let r=e[n],i;i=b(r)?`default`in r?jn(r.from||n,r.default,!0):jn(r.from||n):jn(r),N(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function zr(e,t,n){cn(p(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Br(e,t,n,r){let i=r.includes(`.`)?Ln(n,r):()=>n[r];if(v(e)){let n=t[e];_(n)&&z(i,n)}else if(_(e))z(i,e.bind(n));else if(b(e))if(p(e))e.forEach(e=>Br(e,t,n,r));else{let r=_(e.handler)?e.handler.bind(n):t[e.handler];_(r)&&z(i,r,e)}}function Vr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Hr(c,e,o,!0)),Hr(c,t,o)),b(t)&&a.set(t,c),c}function Hr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Hr(e,a,n,!0),i&&i.forEach(t=>Hr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Ur[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Ur={data:Wr,props:Yr,emits:Yr,methods:Jr,computed:Jr,beforeCreate:qr,created:qr,beforeMount:qr,mounted:qr,beforeUpdate:qr,updated:qr,beforeDestroy:qr,beforeUnmount:qr,destroyed:qr,unmounted:qr,activated:qr,deactivated:qr,errorCaptured:qr,serverPrefetch:qr,components:Jr,directives:Jr,watch:Xr,provide:Wr,inject:Gr};function Wr(e,t){return t?e?function(){return l(_(e)?e.call(this,this):e,_(t)?t.call(this,this):t)}:t:e}function Gr(e,t){return Jr(Kr(e),Kr(t))}function Kr(e){if(p(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function qr(e,t){return e?[...new Set([].concat(e,t))]:t}function Jr(e,t){return e?l(Object.create(null),e,t):t}function Yr(e,t){return e?p(e)&&p(t)?[...new Set([...e,...t])]:l(Object.create(null),Fr(e),Fr(t??{})):t}function Xr(e,t){if(!e)return t;if(!t)return e;let n=l(Object.create(null),e);for(let r in t)n[r]=qr(e[r],t[r]);return n}function Zr(){return{app:null,config:{isNativeTag:o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Qr=0;function $r(e,t){return function(n,r=null){_(n)||(n=l({},n)),r!=null&&!b(r)&&(r=null);let i=Zr(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Qr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Fa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&_(e.install)?(a.add(e),e.install(c,...t)):_(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||K(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Aa(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(cn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=ei;ei=c;try{return e()}finally{ei=t}}};return c}}var ei=null,ti=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${w(t)}Modifiers`]||e[`${se(t)}Modifiers`];function ni(e,t,...n){if(e.isUnmounted)return;let i=e.vnode.props||r,a=n,o=t.startsWith(`update:`),s=o&&ti(i,t.slice(7));s&&(s.trim&&(a=n.map(e=>v(e)?e.trim():e)),s.number&&(a=n.map(fe)));let c,l=i[c=le(t)]||i[c=le(w(t))];!l&&o&&(l=i[c=le(se(t))]),l&&cn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,cn(u,e,6,a)}}var ri=new WeakMap;function ii(e,t,n=!1){let r=n?ri:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!_(e)){let r=e=>{let n=ii(e,t,!0);n&&(s=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(b(e)&&r.set(e,null),null):(p(a)?a.forEach(e=>o[e]=null):l(o,a),b(e)&&r.set(e,o),o)}function ai(e,t){return!e||!s(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),f(e,t[0].toLowerCase()+t.slice(1))||f(e,se(t))||f(e,t))}function oi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=On(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=sa(u.call(t,e,d,f,m,p,h)),y=s}else{let e=t;v=sa(e.length>1?e(f,{attrs:s,slots:o,emit:l}):e(f,null)),y=t.props?s:si(s)}}catch(t){qi.length=0,ln(t,e,1),v=K(Gi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(c)&&(y=ci(y,a)),b=aa(b,y,!1,!0))}return n.dirs&&(b=aa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&$n(b,n.transition),v=b,On(_),v}var si=e=>{let t;for(let n in e)(n===`class`||n===`style`||s(n))&&((t||={})[n]=e[n]);return t},ci=(e,t)=>{let n={};for(let r in e)(!c(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function li(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ui(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(di(o,r,n)&&!ai(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||ui(r,o,l):!!o;return!1}function ui(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(di(t,e,a)&&!ai(n,a))return!0}return!1}function di(e,t,n){let r=e[n],i=t[n];return n===`style`&&b(r)&&b(i)?!Ce(r,i):r!==i}function fi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var pi={},mi=()=>Object.create(pi),hi=e=>Object.getPrototypeOf(e)===pi;function gi(e,t,n,r=!1){let i={},a=mi();e.propsDefaults=Object.create(null),vi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:Rt(i):e.type.props?i:a,e.attrs=a}function _i(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=M(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(ai(e.emitsOptions,o))continue;let u=t[o];if(c)if(f(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=w(o);i[t]=yi(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{vi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!f(t,a)&&((r=se(a))===a||!f(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=yi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!f(t,e))&&(delete a[e],l=!0)}l&&rt(e.attrs,`set`,``)}function vi(e,t,n,i){let[a,o]=e.propsOptions,s=!1,c;if(t)for(let r in t){if(re(r))continue;let l=t[r],u;a&&f(a,u=w(r))?!o||!o.includes(u)?n[u]=l:(c||={})[u]=l:ai(e.emitsOptions,r)||(!(r in i)||l!==i[r])&&(i[r]=l,s=!0)}if(o){let t=M(n),i=c||r;for(let r=0;r<o.length;r++){let s=o[r];n[s]=yi(a,t,s,i[s],e,!f(i,s))}}return s}function yi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=f(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&_(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=va(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===se(n))&&(r=!0))}return r}var bi=new WeakMap;function xi(e,t,n=!1){let a=n?bi:t.propsCache,o=a.get(e);if(o)return o;let s=e.props,c={},u=[],d=!1;if(!_(e)){let r=e=>{d=!0;let[n,r]=xi(e,t,!0);l(c,n),r&&u.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!d)return b(e)&&a.set(e,i),i;if(p(s))for(let e=0;e<s.length;e++){let t=w(s[e]);Si(t)&&(c[t]=r)}else if(s)for(let e in s){let t=w(e);if(Si(t)){let n=s[e],r=c[t]=p(n)||_(n)?{type:n}:l({},n),i=r.type,a=!1,o=!0;if(p(i))for(let e=0;e<i.length;++e){let t=i[e],n=_(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=_(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||f(r,`default`))&&u.push(t)}}let m=[c,u];return b(e)&&a.set(e,m),m}function Si(e){return e[0]!==`$`&&!re(e)}var Ci=e=>e===`_`||e===`_ctx`||e===`$stable`,wi=e=>p(e)?e.map(sa):[sa(e)],Ti=(e,t,n)=>{if(t._n)return t;let r=L((...e)=>wi(t(...e)),n);return r._c=!1,r},Ei=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Ci(n))continue;let i=e[n];if(_(i))t[n]=Ti(n,i,r);else if(i!=null){let e=wi(i);t[n]=()=>e}}},Di=(e,t)=>{let n=wi(t);e.slots.default=()=>n},Oi=(e,t,n)=>{for(let r in t)(n||!Ci(r))&&(e[r]=t[r])},ki=(e,t,n)=>{let r=e.slots=mi();if(e.vnode.shapeFlag&32){let e=t._;e?(Oi(r,t,n),n&&de(r,`_`,e,!0)):Ei(t,r)}else t&&Di(e,t)},Ai=(e,t,n)=>{let{vnode:i,slots:a}=e,o=!0,s=r;if(i.shapeFlag&32){let e=t._;e?n&&e===1?o=!1:Oi(a,t,n):(o=!t.$stable,Ei(t,a)),s=t}else t&&(Di(e,t),s={default:1});if(o)for(let e in a)!Ci(e)&&s[e]==null&&delete a[e]},ji=Ui;function Mi(e){return Ni(e)}function Ni(e,t){let n=me();n.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=a,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!ea(e,t)&&(r=xe(e),_e(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Wi:y(e,t,n,r);break;case Gi:b(e,t,n,r);break;case Ki:e??x(t,n,r,o);break;case V:se(e,t,n,r,i,a,o,s,c);break;default:d&1?ee(e,t,n,r,i,a,o,s,c):d&6?ce(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,we)}u!=null&&i?rr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&rr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},ee=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ae(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&ie(e.children,d,null,r,i,Pi(e,a),s,u),_&&kn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!re(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&da(f,r,e)}_&&kn(e,null,r,`beforeMount`);let v=Ii(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&ji(()=>{try{f&&da(f,r,e),v&&g.enter(d),_&&kn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Hi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ie=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?ca(e[l]):sa(e[l]);v(null,c,t,n,r,i,a,o,s)}},ae=(e,t,n,i,a,o,s)=>{let l=t.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=e.patchFlag&16;let m=e.props||r,h=t.props||r,g;if(n&&Fi(n,!1),(g=h.onVnodeBeforeUpdate)&&da(g,n,t,e),f&&kn(t,e,n,`beforeUpdate`),n&&Fi(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?w(e.dynamicChildren,d,l,n,i,Pi(t,a),o):s||pe(e,t,l,null,n,i,Pi(t,a),o,!1),u>0){if(u&16)oe(l,m,h,n,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],i=m[r],o=h[r];(o!==i||r===`value`)&&c(l,r,i,o,a,n)}}u&1&&e.children!==t.children&&p(l,t.children)}else!s&&d==null&&oe(l,m,h,n,a);((g=h.onVnodeUpdated)||f)&&ji(()=>{g&&da(g,n,t,e),f&&kn(t,e,n,`updated`)},i)},w=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===V||!ea(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},oe=(e,t,n,i,a)=>{if(t!==n){if(t!==r)for(let r in t)!re(r)&&!(r in n)&&c(e,r,t[r],null,a,i);for(let r in n){if(re(r))continue;let o=n[r],s=t[r];o!==s&&r!==`value`&&c(e,r,s,o,a,i)}`value`in n&&c(e,`value`,t.value,n.value,a)}},se=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),ie(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(w(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Li(e,t,!0)):pe(e,t,n,f,i,a,s,c,l)},ce=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):le(t,n,r,i,a,o,c):T(e,t,c)},le=(e,t,n,r,i,a,o)=>{let s=e.component=ma(e,r,i);if(or(e)&&(s.ctx.renderer=we),Sa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,de,o),!e.el){let r=s.subTree=K(Gi);b(null,r,t,n),e.placeholder=r.el}}else de(s,e,t,n,i,a,o)},T=(e,t,n)=>{let r=t.component=e.component;if(li(e,t,n))if(r.asyncDep&&!r.asyncResolved){fe(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},de=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=zi(e);if(n){t&&(t.el=c.el,fe(e,t,o)),n.asyncDep.then(()=>{ji(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Fi(e,!1),t?(t.el=c.el,fe(e,t,o)):t=c,n&&ue(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&da(d,s,t,c),Fi(e,!0);let f=oi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),xe(p),e,i,a),t.el=f.el,u===null&&fi(e,f.el),r&&ji(r,i),(d=t.props&&t.props.onVnodeUpdated)&&ji(()=>da(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=ar(t);if(Fi(e,!1),l&&ue(l),!m&&(o=c&&c.onVnodeBeforeMount)&&da(o,d,t),Fi(e,!0),s&&O){let t=()=>{e.subTree=oi(e),O(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=oi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&ji(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;ji(()=>da(o,d,e),i)}(t.shapeFlag&256||d&&ar(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&ji(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new je(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>bn(u),Fi(e,!0),l()},fe=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,_i(e,t.props,r,n),Ai(e,t.children,n),Ke(),Cn(e),qe()},pe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){he(l,d,n,r,i,a,o,s,c);return}if(f&256){E(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&be(l,i,a),d!==l&&p(n,d)):u&16?m&16?he(l,d,n,r,i,a,o,s,c):be(l,i,a,!0):(u&8&&p(n,``),m&16&&ie(d,n,r,i,a,o,s,c))},E=(e,t,n,r,a,o,s,c,l)=>{e||=i,t||=i;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let r=t[p]=l?ca(t[p]):sa(t[p]);v(e[p],r,n,null,a,o,s,c,l)}u>d?be(e,a,o,!0,!1,f):ie(t,n,r,a,o,s,c,l,f)},he=(e,t,n,r,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let r=e[u],i=t[u]=l?ca(t[u]):sa(t[u]);if(ea(r,i))v(r,i,n,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let r=e[f],i=t[p]=l?ca(t[p]):sa(t[p]);if(ea(r,i))v(r,i,n,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,i=e<d?t[e].el:r;for(;u<=p;)v(null,t[u]=l?ca(t[u]):sa(t[u]),n,i,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)_e(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?ca(t[u]):sa(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let r=e[u];if(y>=b){_e(r,a,o,!0);continue}let i;if(r.key!=null)i=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&ea(r,t[_])){i=_;break}i===void 0?_e(r,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(r,t[i],n,null,a,o,s,c,l),y++)}let ee=x?Ri(C):i;for(_=ee.length-1,u=b-1;u>=0;u--){let e=h+u,i=t[e],f=t[e+1],p=e+1<d?f.el||Vi(f):r;C[u]===0?v(null,i,n,p,a,o,s,c,l):x&&(_<0||u!==ee[_]?ge(i,n,p,2):_--)}}},ge=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ge(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,we);return}if(c===V){o(a,t,n);for(let e=0;e<u.length;e++)ge(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ki){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[Qn]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),ji(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Qn];a._isLeaving&&a[Qn](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},_e=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ke(),rr(s,null,n,e,!0),qe()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!ar(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&da(_,t,e),u&6)ye(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&kn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,we,r):l&&!l.hasOnce&&(a!==V||d>0&&d&64)?be(l,t,n,!1,!0):(a===V&&d&384||!i&&u&16)&&be(c,t,n),r&&ve(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&ji(()=>{_&&da(_,t,e),h&&kn(e,null,t,`unmounted`),v&&(e.el=null)},n)},ve=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===V){D(n,r);return}if(t===Ki){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},D=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ye=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Bi(c),Bi(l),r&&ue(r),i.stop(),a&&(a.flags|=8,_e(o,e,t,n)),s&&ji(s,t),ji(()=>{e.isUnmounted=!0},t)},be=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)_e(e[o],t,n,r,i)},xe=e=>{if(e.shapeFlag&6)return xe(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[zn];return n?h(n):t},Se=!1,Ce=(e,t,n)=>{let r;e==null?t._vnode&&(_e(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,Se||=(Se=!0,Cn(r),wn(),!1)},we={p:v,um:_e,m:ge,r:ve,mt:le,mc:ie,pc:pe,pbc:w,n:xe,o:e},Te,O;return t&&([Te,O]=t(we)),{render:Ce,hydrate:Te,createApp:$r(Ce,Te)}}function Pi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Fi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ii(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Li(e,t,n=!1){let r=e.children,i=t.children;if(p(r)&&p(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=ca(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Li(t,a)),a.type===Wi&&(a.patchFlag===-1&&(a=i[e]=ca(a)),a.el=t.el),a.type===Gi&&!a.el&&(a.el=t.el)}}function Ri(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function zi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zi(t)}function Bi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Vi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Vi(t.subTree):null}var Hi=e=>e.__isSuspense;function Ui(e,t){t&&t.pendingBranch?p(e)?t.effects.push(...e):t.effects.push(e):Sn(e)}var V=Symbol.for(`v-fgt`),Wi=Symbol.for(`v-txt`),Gi=Symbol.for(`v-cmt`),Ki=Symbol.for(`v-stc`),qi=[],Ji=null;function H(e=!1){qi.push(Ji=e?null:[])}function Yi(){qi.pop(),Ji=qi[qi.length-1]||null}var Xi=1;function Zi(e,t=!1){Xi+=e,e<0&&Ji&&t&&(Ji.hasOnce=!0)}function Qi(e){return e.dynamicChildren=Xi>0?Ji||i:null,Yi(),Xi>0&&Ji&&Ji.push(e),e}function U(e,t,n,r,i,a){return Qi(G(e,t,n,r,i,a,!0))}function W(e,t,n,r,i){return Qi(K(e,t,n,r,i,!0))}function $i(e){return e?e.__v_isVNode===!0:!1}function ea(e,t){return e.type===t.type&&e.key===t.key}var ta=({key:e})=>e??null,na=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:v(e)||N(e)||_(e)?{i:I,r:e,k:t,f:!!n}:e);function G(e,t=null,n=null,r=0,i=null,a=e===V?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ta(t),ref:t&&na(t),scopeId:Dn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:I};return s?(la(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=v(n)?8:16),Xi>0&&!o&&Ji&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ji.push(c),c}var K=ra;function ra(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Tr)&&(e=Gi),$i(e)){let r=aa(e,t,!0);return n&&la(r,n),Xi>0&&!a&&Ji&&(r.shapeFlag&6?Ji[Ji.indexOf(e)]=r:Ji.push(r)),r.patchFlag=-2,r}if(Ma(e)&&(e=e.__vccOpts),t){t=ia(t);let{class:e,style:n}=t;e&&!v(e)&&(t.class=D(e)),b(n)&&(Wt(n)&&!p(n)&&(n=l({},n)),t.style=E(n))}let o=v(e)?1:Hi(e)?128:Bn(e)?64:b(e)?4:_(e)?2:0;return G(e,t,n,r,i,o,a,!0)}function ia(e){return e?Wt(e)||hi(e)?l({},e):e:null}function aa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ua(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ta(l),ref:t&&t.ref?n&&a?p(a)?a.concat(na(t)):[a,na(t)]:na(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==V?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&aa(e.ssContent),ssFallback:e.ssFallback&&aa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&$n(u,c.clone(u)),u}function q(e=` `,t=0){return K(Wi,null,e,t)}function oa(e,t){let n=K(Ki,null,e);return n.staticCount=t,n}function J(e=``,t=!1){return t?(H(),W(Gi,null,e)):K(Gi,null,e)}function sa(e){return e==null||typeof e==`boolean`?K(Gi):p(e)?K(V,null,e.slice()):$i(e)?ca(e):K(Wi,null,String(e))}function ca(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:aa(e)}function la(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(p(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),la(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!hi(t)?t._ctx=I:r===3&&I&&(I.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(_(t)){if(r&65){la(e,{default:t});return}t={default:t,_ctx:I},n=32}else t=String(t),r&64?(n=16,t=[q(t)]):n=8;e.children=t,e.shapeFlag|=n}function ua(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=D([t.class,r.class]));else if(e===`style`)t.style=E([t.style,r.style]);else if(s(e)){let n=t[e],i=r[e];i&&n!==i&&!(p(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!c(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function da(e,t,n,r=null){cn(e,t,7,[n,r])}var fa=Zr(),pa=0;function ma(e,t,n){let i=e.type,a=(t?t.appContext:e.appContext)||fa,o={uid:pa++,vnode:e,type:i,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oe(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xi(i,a),emitsOptions:ii(i,a),emit:null,emitted:null,propsDefaults:r,inheritAttrs:i.inheritAttrs,ctx:r,data:r,props:r,attrs:r,slots:r,refs:r,setupState:r,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ni.bind(null,o),e.ce&&e.ce(o),o}var Y=null,ha=()=>Y||I,ga,_a;{let e=me(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ga=t(`__VUE_INSTANCE_SETTERS__`,e=>Y=e),_a=t(`__VUE_SSR_SETTERS__`,e=>xa=e)}var va=e=>{let t=Y;return ga(e),e.scope.on(),()=>{e.scope.off(),ga(t)}},ya=()=>{Y&&Y.scope.off(),ga(null)};function ba(e){return e.vnode.shapeFlag&4}var xa=!1;function Sa(e,t=!1,n=!1){t&&_a(t);let{props:r,children:i}=e.vnode,a=ba(e);gi(e,r,a,t),ki(e,i,n||t);let o=a?Ca(e,t):void 0;return t&&_a(!1),o}function Ca(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Pr);let{setup:r}=n;if(r){Ke();let n=e.setupContext=r.length>1?ka(e):null,i=va(e),a=sn(r,e,0,[e.props,n]),o=x(a);if(qe(),i(),(o||e.sp)&&!ar(e)&&er(e),o){if(a.then(ya,ya),t)return a.then(n=>{wa(e,n,t)}).catch(t=>{ln(t,e,0)});e.asyncDep=a}else wa(e,a,t)}else Da(e,t)}function wa(e,t,n){_(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:b(t)&&(e.setupState=Zt(t)),Da(e,n)}var Ta,Ea;function Da(e,t,n){let r=e.type;if(!e.render){if(!t&&Ta&&!r.render){let t=r.template||Vr(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=Ta(t,l(l({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||a,Ea&&Ea(e)}{let t=va(e);Ke();try{Lr(e)}finally{qe(),t()}}}var Oa={get(e,t){return j(e,`get`,``),e[t]}};function ka(e){return{attrs:new Proxy(e.attrs,Oa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Aa(e){return e.exposed?e.exposeProxy||=new Proxy(Zt(Gt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Mr)return Mr[n](e)},has(e,t){return t in e||t in Mr}}):e.proxy}function ja(e,t=!0){return _(e)?e.displayName||e.name:e.name||t&&e.__name}function Ma(e){return _(e)&&`__vccOpts`in e}var X=(e,t)=>$t(e,t,xa);function Na(e,t,n,r){let i=n[r];if(i&&Pa(i,e))return i;let a=t();return a.memo=e.slice(),a.cacheIndex=r,n[r]=a}function Pa(e,t){let n=e.memo;if(n.length!=t.length)return!1;for(let e=0;e<n.length;e++)if(T(n[e],t[e]))return!1;return Xi>0&&Ji&&Ji.push(e),!0}var Fa=`3.5.40`,Ia=void 0,La=typeof window<`u`&&window.trustedTypes;if(La)try{Ia=La.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ra=Ia?e=>Ia.createHTML(e):e=>e,za=`http://www.w3.org/2000/svg`,Ba=`http://www.w3.org/1998/Math/MathML`,Va=typeof document<`u`?document:null,Ha=Va&&Va.createElement(`template`),Ua={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Va.createElementNS(za,e):t===`mathml`?Va.createElementNS(Ba,e):n?Va.createElement(e,{is:n}):Va.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Va.createTextNode(e),createComment:e=>Va.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Va.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ha.innerHTML=Ra(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ha.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Wa=Symbol(`_vtc`);function Ga(e,t,n){let r=e[Wa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ka=Symbol(`_vod`),qa=Symbol(`_vsh`),Ja={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Ka]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Ya(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ya(e,!0),r.enter(e)):r.leave(e,()=>{Ya(e,!1)}):Ya(e,t))},beforeUnmount(e,{value:t}){Ya(e,t)}};function Ya(e,t){e.style.display=t?e[Ka]:`none`,e[qa]=!t}var Xa=Symbol(``),Za=/(?:^|;)\s*display\s*:/;function Qa(e,t,n){let r=e.style,i=v(n),a=!1;if(n&&!i){if(t)if(v(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??eo(r,t,``)}else for(let e in t)n[e]??eo(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?eo(r,i,``):io(e,i,!v(t)&&t?t[i]:void 0,o)||eo(r,i,o)}}else if(i){if(t!==n){let e=r[Xa];e&&(n+=`;`+e),r.cssText=n,a=Za.test(n)}}else t&&e.removeAttribute(`style`);Ka in e&&(e[Ka]=a?r.display:``,e[qa]&&(r.display=`none`))}var $a=/\s*!important$/;function eo(e,t,n){if(p(n))n.forEach(n=>eo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=ro(e,t);$a.test(n)?e.setProperty(se(r),n.replace($a,``),`important`):e[r]=n}}var to=[`Webkit`,`Moz`,`ms`],no={};function ro(e,t){let n=no[t];if(n)return n;let r=w(t);if(r!==`filter`&&r in e)return no[t]=r;r=ce(r);for(let n=0;n<to.length;n++){let i=to[n]+r;if(i in e)return no[t]=i}return t}function io(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&v(r)&&n===r}var ao=`http://www.w3.org/1999/xlink`;function oo(e,t,n,r,i,a=be(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(ao,t.slice(6,t.length)):e.setAttributeNS(ao,t,n):n==null||a&&!xe(n)?e.removeAttribute(t):e.setAttribute(t,a?``:y(n)?String(n):n)}function so(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ra(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=xe(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function co(e,t,n,r){e.addEventListener(t,n,r)}function lo(e,t,n,r){e.removeEventListener(t,n,r)}var uo=Symbol(`_vei`);function fo(e,t,n,r,i=null){let a=e[uo]||(e[uo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=ho(t);r?co(e,n,a[t]=yo(r,i),s):o&&(lo(e,n,o,s),a[t]=void 0)}}var po=/(Once|Passive|Capture)$/,mo=/^on:?(?:Once|Passive|Capture)$/;function ho(e){let t,n;for(;(n=e.match(po))&&!mo.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):se(e.slice(2)),t]}var go=0,_o=Promise.resolve(),vo=()=>go||=(_o.then(()=>go=0),Date.now());function yo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(p(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&cn(e,t,5,a)}}else cn(r,t,5,[e])};return n.value=e,n.attached=vo(),n}var bo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xo=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Ga(e,r,o):t===`style`?Qa(e,n,r):s(t)?c(t)||fo(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):So(e,t,r,o))?(so(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&oo(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Co(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!v(r)))?so(e,w(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),oo(e,t,r,o))};function So(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&bo(t)&&_(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return bo(t)&&v(n)?!1:t in e}function Co(e,t){let n=e._def.props;if(!n)return!1;let r=w(t);return Array.isArray(n)?n.some(e=>w(e)===r):Object.keys(n).some(e=>w(e)===r)}var wo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return p(t)?e=>ue(t,e):t};function To(e){e.target.composing=!0}function Eo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var Do=Symbol(`_assign`);function Oo(e,t,n){return t&&(e=e.trim()),n&&(e=fe(e)),e}var Z={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Do]=wo(i);let a=r||i.props&&i.props.type===`number`;co(e,t?`change`:`input`,t=>{t.target.composing||e[Do](Oo(e.value,n,a))}),(n||a)&&co(e,`change`,()=>{e.value=Oo(e.value,n,a)}),t||(co(e,`compositionstart`,To),co(e,`compositionend`,Eo),co(e,`change`,Eo))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[Do]=wo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?fe(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},ko={deep:!0,created(e,t,n){e[Do]=wo(n),co(e,`change`,()=>{let t=e._modelValue,n=Po(e),r=e.checked,i=e[Do];if(p(t)){let e=we(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(h(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Fo(e,r))})},mounted:Ao,beforeUpdate(e,t,n){e[Do]=wo(n),Ao(e,t,n)}};function Ao(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(p(t))i=we(t,r.props.value)>-1;else if(h(t))i=t.has(r.props.value);else{if(t===n)return;i=Ce(t,Fo(e,!0))}e.checked!==i&&(e.checked=i)}var jo={created(e,{value:t},n){e.checked=Ce(t,n.props.value),e[Do]=wo(n),co(e,`change`,()=>{e[Do](Po(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[Do]=wo(r),t!==n&&(e.checked=Ce(t,r.props.value))}},Mo={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,co(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?fe(Po(e)):Po(e));e[Do](e.multiple?h(e._modelValue)?new Set(t):t:t[0]),e._assigning=!0,vn(()=>{e._assigning=!1})}),e[Do]=wo(r)},mounted(e,{value:t}){No(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[Do]=wo(n)},updated(e,{value:t}){e._assigning||No(e,t)}};function No(e,t){let n=e.multiple,r=p(t);if(!(n&&!r&&!h(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=Po(a);if(n)if(r){let e=typeof o;a.selected=e===`string`||e===`number`?t.some(e=>String(e)===String(o)):we(t,o)>-1}else a.selected=t.has(o);else if(Ce(Po(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Po(e){return`_value`in e?e._value:e.value}function Fo(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Io=[`ctrl`,`shift`,`alt`,`meta`],Lo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Io.some(n=>e[`${n}Key`]&&!t.includes(n))},Ro=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Lo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},zo={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Bo=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=se(n.key);if(t.some(e=>e===r||zo[e]===r))return e(n)}))},Vo=l({patchProp:xo},Ua),Ho;function Uo(){return Ho||=Mi(Vo)}var Wo=((...e)=>{let t=Uo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Ko(e);if(!r)return;let i=t._component;!_(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Go(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Go(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Ko(e){return v(e)?document.querySelector(e):e}var qo=[{id:1,code:`CH01`,title:`Vue.js 시작하기`,subtitle:`개발환경 · 프로젝트 생성 · Vite`,slides:`8~38쪽`,summary:`Vue가 무엇이고 왜 쓰는지, 그리고 내 컴퓨터에 개발환경을 갖춰 inwoo-vue 프로젝트를 띄우기까지의 과정입니다.`,topics:[`MVVM`,`Virtual DOM`,`SPA`,`Node.js · npm`,`Project Scaffolding`,`Vite`,`HMR`]},{id:2,code:`CH02`,title:`Vue 문법`,subtitle:`반응성 · 디렉티브 · 이벤트 · 폼`,slides:`40~98쪽`,summary:`데이터를 화면에 꽂고(보간법·디렉티브), 사용자의 행동에 반응하고(이벤트), 입력값을 주고받는(v-model) Vue의 기본 문법입니다.`,topics:[`Reactivity`,`Interpolation`,`v-bind`,`v-if / v-for`,`v-on`,`v-model`,`Scoped Style`]},{id:3,code:`CH03`,title:`Composition API`,subtitle:`ref · reactive · computed · watch`,slides:`100~126쪽`,summary:`데이터가 화면을 움직이게 만드는 엔진입니다. 반응형 상태를 선언하고, 파생값을 계산하고, 변화를 감시합니다.`,topics:[`ref()`,`reactive()`,`computed()`,`watch()`,`watchEffect()`]},{id:4,code:`CH04`,title:`Vue Component`,subtitle:`생명주기 · Props · Emits · Slot`,slides:`128~158쪽`,summary:`화면을 재사용 가능한 부품으로 나누고, 부품끼리 데이터를 주고받는 규칙을 배웁니다.`,topics:[`Lifecycle Hooks`,`defineProps()`,`defineEmits()`,`Slot`,`Provide/Inject`],orientation:{rule:`데이터는 위에서 아래로만 흐른다.`,lead:`이 챕터의 문법이 여러 개라 예외가 많아 보이지만, 실제 규칙은 위 한 줄뿐입니다. Vue가 금지하는 건 딱 하나 — 자식이 부모의 값을 직접 바꾸는 것, 형제가 형제를 직접 만지는 것입니다. 아래 네 가지는 서로 다른 문법이 아니라, 같은 파이프에 실리는 화물이 다른 것뿐입니다.`,cargo:[{name:`props`,payload:`값 (문자열 · 숫자 · 객체)`,dir:`아래로`},{name:`slot`,payload:`화면 조각 (HTML 덩어리)`,dir:`아래로`},{name:`provide / inject`,payload:`값을, 중간을 건너뛰고`,dir:`아래로`},{name:`emit`,payload:`"이런 일이 생겼다"는 신호 (값이 아님)`,dir:`위로`}],why:`왜 이렇게까지 불편하게 만들까요? 컴포넌트가 서로 아무나 만질 수 있으면, 값이 이상해졌을 때 **범인을 찾을 수가 없습니다** — 100개 컴포넌트가 전부 용의자가 됩니다. 단방향을 강제하면 "이 값은 위에서 내려온 것" 하나로 추적 경로가 딱 하나가 됩니다. **불편한 것이 목적입니다.**`,priority:[{name:`props + emit`,weight:`90%`,when:`거의 항상. 이것만 확실히 하면 됩니다`,level:`core`},{name:`slot`,weight:`가끔`,when:`카드 · 모달처럼 껍데기를 재사용할 때`,level:`mid`},{name:`provide / inject`,weight:`드묾`,when:`실무에선 대부분 Pinia(CH06)로 해결합니다`,level:`low`},{name:`scoped slot`,weight:`드묾`,when:`남이 쓸 컴포넌트를 만들 때`,level:`low`}],keep:"부모가 `:값`으로 내려주고, 자식이 `emit`으로 알린다. **자식은 받은 값을 절대 직접 고치지 않는다.**"}},{id:5,code:`CH05`,title:`Vue Router`,subtitle:`주소에 따라 화면 바꾸기`,slides:`160~177쪽`,summary:`SPA에서 페이지를 이동시키는 방법입니다. 주소와 컴포넌트를 연결하고, 동적 경로와 404를 처리합니다.`,topics:[`createRouter`,`RouterLink / RouterView`,`useRoute()`,`useRouter()`,`Navigation Guard`]},{id:6,code:`CH06`,title:`Pinia`,subtitle:`Store와 전역 상태 관리`,slides:`179~191쪽`,summary:`여러 컴포넌트가 함께 쓰는 데이터를 한곳에 모아두는 공용 사물함입니다.`,topics:[`defineStore()`,`state · getters · actions`,`storeToRefs()`,`JWT 로그인 흐름`]},{id:7,code:`CH07`,title:`Axios`,subtitle:`서버와 데이터 주고받기`,slides:`193~209쪽`,summary:`HTTP로 외부 API를 호출해 실제 데이터를 화면에 가져옵니다. OpenWeather API를 연동합니다.`,topics:[`HTTP · REST API`,`axios.get()`,`async / await`,`OpenWeather API`]},{id:8,code:`CH08`,title:`Element Plus`,subtitle:`UI 컴포넌트 라이브러리`,slides:`211~228쪽`,summary:`이미 만들어진 버튼·폼·다이얼로그를 가져다 써서 화면 완성도를 빠르게 끌어올립니다.`,topics:[`el-button · el-card`,`el-form · el-input`,`ElMessage`,`ElMessageBox`]},{id:9,code:`CH09`,title:`Modern JavaScript`,subtitle:`데이터 처리 · 비동기 · 불변성`,slides:`230~250쪽`,summary:`Vue 코드 곳곳에 등장하는 ES6+ 문법을 정리합니다. 구조 분해, 스프레드, async/await가 핵심입니다.`,topics:[`구조 분해 할당`,`Spread / Rest`,`Template Literals`,`Promise · async/await`,`?. 와 ??`]},{id:10,code:`CH10`,title:`품질과 배포`,subtitle:`ESLint · Prettier · 환경변수 · Build`,slides:`252~274쪽`,summary:`코드 품질을 점검하고, API 키를 안전하게 분리하고, 빌드해서 배포하는 마무리 단계입니다.`,topics:[`ESLint`,`Prettier`,`.env / import.meta.env`,`vite build`,`GitHub Pages`]}],Jo=[{id:0,chapterId:1,label:`준비 실습`,title:`개발환경 구성과 프로젝트 생성`,slidePage:`36~38쪽`,studyRange:`8~35쪽`,goal:`Node.js와 VS Code 확장을 설치하고, inwoo-vue 프로젝트를 생성해 개발 서버를 띄웁니다.`,lecture:{intro:`집을 짓기 전에 터를 닦고 비계를 세우는 단계입니다. Vue 코드를 한 줄도 쓰지 않지만, 이 준비가 없으면 아무것도 실행되지 않습니다. 명령어 세 줄이면 폴더 20개짜리 프로젝트가 30초 만에 만들어집니다.`,summary:`Project Scaffolding(29쪽)은 개발에 필요한 기본 디렉터리 구조, 빌드/스타일 설정, 공통 모듈을 자동 생성해 초기 개발 환경(뼈대)을 구성하는 작업입니다. 팀 전체가 동일한 구조에서 시작할 수 있게 해 줍니다.`,points:[`Vue는 국내 SI 실무에서 널리 쓰이는 프레임워크로, React·Angular 중 가장 가볍고 배우기 쉽다.`,`MVVM: 데이터만 바꾸면 화면은 Vue가 알아서 갱신한다.`,`Virtual DOM: 메모리의 설계도 사본과 비교해 바뀐 부분만 실제 화면에 반영한다.`,`SPA: HTML 한 장만 받고 이후에는 JS가 내용만 교체한다.`,`설치 프롬프트에서 Router·Pinia·ESLint·Prettier는 Yes, TypeScript·JSX·Vitest·E2E는 No를 선택한다.`],syntax:[{code:`npm create vue@latest   # 뼈대 생성 (Scaffolding)
cd inwoo-vue
npm install             # 라이브러리 설치 → node_modules/ 생성
npm run format          # Prettier로 초기 코드 정리
npm run dev             # 개발 서버 → localhost:5173`,parts:[{token:`npm`,role:`Node.js에 딸려 오는 패키지 관리자. 라이브러리 앱스토어 역할`},{token:`create vue@latest`,role:`Vue 공식 프로젝트 생성기를 최신 버전으로 내려받아 실행`},{token:`cd inwoo-vue`,role:`만들어진 폴더 안으로 이동. 이걸 빼먹는 실수가 가장 잦다`},{token:`npm install`,role:`package.json에 적힌 라이브러리를 실제로 내려받아 node_modules 생성`},{token:`npm run dev`,role:`package.json의 scripts.dev를 실행. 내부적으로 vite가 돈다`}],returns:`명령어라서 값을 돌려주지는 않는다. 대신 파일과 폴더가 생기고, 마지막 dev는 localhost:5173에서 도는 개발 서버를 띄운 채 계속 실행된다(끄려면 Ctrl+C).`,desc:`create는 뼈대만 만든다. node_modules는 npm install에서 생긴다.`},{code:`<script setup>
// 자바스크립트 영역 (우선 비워둡니다)
<\/script>

<template>
  <h1>Welcome to SKALA-VUE project!</h1>
</template>`,parts:[{token:`<script setup>`,role:`JavaScript를 쓰는 방. setup은 Composition API를 간편하게 쓰는 표시`},{token:`<template>`,role:`화면에 보일 HTML을 쓰는 방. 컴포넌트마다 하나씩 있다`},{token:`<h1>`,role:`평범한 HTML. Vue 문법이 없으면 그냥 HTML 그대로 나온다`}],returns:`.vue 파일 전체가 "컴포넌트 하나"가 되어 App.vue로 export된다. main.js의 createApp(App)이 이것을 받아 화면에 붙인다.`,desc:`교안 50쪽 — 기본 App.vue를 비우고 인사말 한 줄만 남기면 이 단계는 끝난다.`}]},tasks:[`Node.js 설치`,`VS Code 확장 3종 설치 (Vue Official · ESLint · Prettier)`,`Chrome Vue Devtools 설치`,`npm create vue@latest 로 inwoo-vue 생성`,`localhost:5173 에서 화면 확인`,`HMR 확인 — 코드 저장 시 새로고침 없이 반영`],pitfalls:[{bad:`npm create vue@latest 실행 후 바로 npm run dev`,good:`npm create vue@latest → cd → npm install → npm run dev`,why:`create는 뼈대만 만듭니다. npm install을 건너뛰면 node_modules가 없어서 "vite: command not found" 오류가 납니다.`},{why:`프로젝트를 만든 폴더로 cd 하지 않고 명령어를 실행하는 실수가 가장 잦습니다. 터미널 경로가 프로젝트 안인지 항상 확인하세요.`},{why:`node_modules 폴더는 절대 직접 수정하거나 Git에 올리지 않습니다. 용량이 매우 크고 npm install로 언제든 다시 만들 수 있습니다.`},{why:`package.json은 프로젝트의 설명서입니다. 무엇을 하는지 모르는 상태에서 손대면 프로젝트 전체가 실행되지 않을 수 있습니다.`}],extensions:[`Vue Devtools의 Components 탭에서 컴포넌트 트리를 열어 보고, 값을 직접 바꿔 화면이 따라 바뀌는지 확인해 보세요.`,`src/App.vue의 글자를 바꾸고 저장해 보세요. 새로고침 없이 반영되는 것이 HMR입니다.`,`터미널에서 npm run build를 실행하고 dist/ 폴더가 어떻게 생겼는지 열어 보세요.`,`package.json의 scripts 항목을 읽고, dev · build · preview가 각각 무슨 명령인지 정리해 보세요.`],practices:[],practiceNote:`이 단계는 설치와 프로젝트 생성으로 끝납니다. 조작할 실습 화면은 없고, App.vue에 인사말 한 줄만 남은 상태에서 다음 챕터로 넘어갑니다.`,status:`done`},{id:1,chapterId:2,label:`Code Challenge 01`,title:`반응형 데이터와 보간법`,slidePage:`54쪽`,studyRange:`40~53쪽`,goal:`일반 변수와 ref() 변수의 차이를 눈으로 확인하고, {{ }} 안에서 JavaScript 표현식을 사용해 봅니다.`,lecture:{intro:`Vue를 쓰는 가장 큰 이유가 여기 있습니다. 예전에는 값이 바뀌면 "화면의 저 글자를 이걸로 바꿔라"까지 개발자가 직접 명령해야 했습니다. Vue에서는 데이터만 바꾸면 화면은 알아서 따라옵니다. 단, 아무 변수나 되는 게 아니라 ref()로 감싼 변수만 그렇습니다.`,summary:`Reactivity는 데이터가 바뀌면 화면이 자동으로 다시 그려지는 특성입니다. Text Interpolation({{ }})은 그 값을 화면에 꽂아 넣는 문법이며, 안쪽은 단순 문자열이 아니라 JavaScript 표현식이 실행되는 자리입니다.`,points:[`let으로 만든 **일반 변수는 값이 바뀌어도 화면이 그대로**다. Vue가 변화를 감지하지 못한다.`,`**ref()로 감싼 변수만 화면이 따라 바뀐다.**`,"**script에서는 `.value`를 붙이고, template에서는 생략**한다(자동 언래핑).",`{{ }} 안에는 표현식만 가능하다. if 문 같은 문장(statement)은 쓸 수 없다.`,`템플릿에서 접근 가능한 전역은 Math, JSON, Date 등 허용 목록뿐이다. alert·window는 막힌다.`],syntax:[{code:`const count = ref(0)      // 선언
count.value++             // script에서는 .value
{{ count }}               // template에서는 그대로`,parts:[{token:`const count`,role:`내가 정하는 이름(식별자). 상자를 가리키는 변수`},{token:`ref(0)`,role:`Vue 내장 함수 + 초깃값. import { ref } from 'vue' 필요`},{token:`.value`,role:`script에서 상자를 여는 뚜껑. template에서는 붙이지 않는다`}],returns:`ref()는 상자 객체를 돌려준다. 그래서 count 자체는 객체이고, 진짜 숫자는 count.value에 들어 있다.`,desc:`ref()는 값을 상자에 담는다. script에서만 상자를 연다.`},{code:`{{ message.toUpperCase() }}
{{ count * 2 }}
{{ isOk ? '가능' : '불가' }}`,parts:[{token:`{{ }}`,role:`보간법(Interpolation). 안쪽이 JavaScript 표현식으로 실행된다`},{token:`message.toUpperCase()`,role:`메서드 호출도 가능. 결과 문자열이 출력된다`},{token:`count * 2`,role:`연산도 가능. 원본 count는 바뀌지 않는다`},{token:`isOk ? '가능' : '불가'`,role:`삼항 연산자. if 문은 못 쓰므로 조건 분기는 이걸로`}],returns:`표현식의 결과가 문자열로 변환되어 화면에 출력된다. 화면이 다시 그려질 때마다 매번 재계산되므로 무거운 계산은 넣지 않는다.`,desc:`보간법 안에서 메서드 호출·연산·삼항 연산자를 쓸 수 있다.`}]},tasks:[`반응형 데이터가 바뀌면 화면이 바뀌는 예제 작성`,`일반 변수와 ref() 변수의 차이 비교`,`{{ }} 안에서 JavaScript 표현식 사용`],practiceGuide:[{practice:`Reactivity와 보간법`,do:`"일반 변수 증가" 버튼을 5번 눌러 보세요.`,see:`화면의 숫자가 0에서 그대로 멈춰 있습니다.`,why:`let으로 만든 변수라 값은 실제로 5까지 올라갔지만, Vue가 변화를 감지하지 못해 화면을 다시 그리지 않습니다.`},{do:`이어서 "반응형 변수 증가"를 한 번 눌러 보세요.`,see:`반응형 숫자는 1이 되고, 그 순간 일반 변수도 갑자기 5로 바뀝니다.`,why:`반응형 값이 바뀌어 화면이 통째로 다시 그려질 때, 일반 변수의 최신 값이 "묻어서" 함께 표시된 것입니다. 일반 변수가 반응형이 된 게 아닙니다.`},{do:`"대문자 변환" 줄과 "Random number" 줄을 보세요.`,see:`toUpperCase()와 Math.ceil()의 결과가 출력됩니다.`,why:`{{ }} 안은 단순 문자열이 아니라 JavaScript 표현식이 실행되는 자리이기 때문입니다.`},{do:`아무 버튼이나 눌러 화면을 다시 그려 보세요.`,see:`Random number 값이 매번 바뀝니다.`,why:`화면이 다시 그려질 때마다 {{ }} 안의 표현식도 다시 계산됩니다. 그래서 무거운 계산은 여기 넣으면 안 됩니다.`}],pitfalls:[{bad:`let count = 0`,good:`const count = ref(0)`,why:`화면에 보여줄 값은 반드시 ref()로 감싸야 합니다. 일반 변수는 바뀌어도 화면이 반응하지 않습니다.`},{bad:`count++  (script 안에서)`,good:`count.value++`,why:`script에서는 상자를 열어야 하므로 .value가 필요합니다. 빼먹으면 값이 바뀌지 않거나 NaN이 됩니다.`},{bad:`{{ count.value }}`,good:`{{ count }}`,why:`template에서는 Vue가 자동으로 상자를 열어줍니다. .value를 붙이면 undefined가 출력됩니다.`},{bad:`{{ if (isOk) { ... } }}`,good:`{{ isOk ? '가능' : '불가' }}`,why:`{{ }} 안에는 값이 되는 표현식만 넣을 수 있습니다. if 문 같은 문장은 쓸 수 없어 삼항 연산자를 씁니다.`},{bad:`{{ alert("안녕") }}`,good:`script에 함수를 만들고 @click으로 호출`,why:`template은 허용된 전역만 쓸 수 있는 샌드박스입니다. alert · window · localStorage는 막혀 있습니다.`}],extensions:[{practice:`Reactivity와 보간법`,text:`ref()에 배열을 담고 {{ }}에서 .length와 .join(", ")을 출력해 보세요.`},{practice:`Reactivity와 보간법`,text:`{{ }} 안에서 new Date().getFullYear()를 써 보세요. Date는 허용 목록에 있어 동작합니다.`},{practice:`Reactivity와 보간법`,text:`숫자를 3자리마다 쉼표로 끊어 표시해 보세요. toLocaleString()을 쓰면 됩니다.`},{practice:`Reactivity와 보간법`,text:`{{ }} 안에 복잡한 계산식을 넣어보고, 나중에 배울 computed()로 옮기면 무엇이 좋아질지 생각해 보세요.`},{practice:`Reactivity와 보간법`,text:`ref(0) 대신 ref({ count: 0 })으로 바꿔 보고, 화면과 script에서 접근 방법이 어떻게 달라지는지 비교해 보세요.`}],practices:[`ReactivityPractice`],status:`done`},{id:2,chapterId:2,label:`Code Challenge 02`,title:`Vue 디렉티브`,slidePage:`75쪽`,studyRange:`55~74쪽`,goal:`v-html·v-text·v-bind·v-if·v-for와 특수 디렉티브를 실제로 조작하며 동작 차이를 확인합니다.`,lecture:{intro:`디렉티브는 HTML 태그에 붙이는 "Vue 전용 명령어"입니다. 원래 HTML은 정해진 글자만 보여줄 수 있는데, v- 로 시작하는 속성을 붙이면 "조건에 따라 보여줘", "배열만큼 반복해", "이 값을 주소로 써" 같은 지시를 할 수 있습니다. 이번 챕터에서 배우는 v-bind · v-if · v-for 세 개가 실무에서 가장 많이 쓰입니다.`,summary:'Directive는 HTML 요소에 Vue의 동작을 연결하는 v- 접두사 특수 속성입니다. `v-이름:argument.modifier="value"` 구조를 가지며, 따옴표 안은 JavaScript가 실행되는 자리입니다.',points:[`v-html은 문자열을 실제 HTML로 해석한다. **외부 입력에 쓰면 XSS 위험**이 있으므로 금지.`,`v-bind(축약형 :)는 HTML 속성에 데이터를 연결한다. class·style 바인딩은 객체/배열 구문을 지원한다.`,`**v-if는 DOM을 생성·제거**하고, **v-show는 CSS display만** 바꾼다. 자주 토글하면 v-show가 유리.`,"v-for에는 **반드시 고유한 `:key`**를 붙인다. index보다 데이터의 id가 안전하다.",`v-pre·v-cloak·v-once·v-memo는 렌더링을 제어하는 특수 디렉티브다.`],syntax:[{code:`v-bind:href="url"   →   :href="url"
v-on:click="fn"     →   @click="fn"`,parts:[{token:`v-bind / v-on`,role:`디렉티브 이름. Vue가 정한 것이라 마음대로 바꿀 수 없다`},{token:`:href / :click`,role:`Argument. 어떤 속성/이벤트에 걸지 지정한다`},{token:`"url" / "fn"`,role:`Value. 따옴표 안은 JavaScript가 실행되는 자리`}],returns:`디렉티브는 값을 돌려주지 않는다. 대신 Vue가 해당 DOM 요소에 속성을 연결하거나 이벤트 리스너를 등록한다.`,desc:`가장 많이 쓰는 두 디렉티브에는 축약형이 있다.`},{code:`:class="{ active: isOn }"          // 객체 — 조건이 true인 클래스만
:class="[baseClass, extraClass]"   // 배열 — 여러 클래스 조합
:style="{ color: c, fontSize: s + 'px' }"`,parts:[{token:`active`,role:`적용할 CSS 클래스 이름. 내가 만든 클래스라 자유롭게 정한다`},{token:`isOn`,role:`조건이 되는 반응형 변수. true일 때만 클래스가 붙는다`},{token:`baseClass`,role:`문자열이 담긴 변수. 그 값이 클래스 이름이 된다`},{token:`fontSize`,role:`CSS의 font-size를 JavaScript 객체 키로 쓴 것. camelCase 필수`},{token:`+ 'px'`,role:`단위. 숫자만 넣으면 CSS가 무시한다`}],returns:`평가 결과가 실제 class 속성 문자열이나 인라인 style로 변환되어 요소에 붙는다. 정적 class와 함께 쓰면 합쳐진다.`,desc:`CSS 속성명은 camelCase로 쓴다.`},{code:`<li v-for="city in cities" :key="city.id">
  {{ city.name }}
</li>`,parts:[{token:`city`,role:`내가 정하는 이름(식별자). 반복 중인 항목 하나를 담는 변수`},{token:`in`,role:`고정 문법. of로 써도 동작한다`},{token:`cities`,role:`반복할 배열. 보통 ref로 만든 반응형 배열`},{token:`:key="city.id"`,role:`Vue가 항목을 구분하는 고유값. index보다 데이터의 id가 안전`}],returns:`배열 길이만큼 <li> 요소가 복제되어 렌더링된다. v-for가 붙은 태그와 그 자식 전체가 반복 단위다.`,desc:`:key는 Vue가 항목을 구분하는 식별자다.`}]},tasks:[`v-html과 v-text의 차이 확인`,`v-bind 기본 바인딩 (href · src · disabled)`,`클래스 바인딩과 스타일 바인딩`,`v-if / v-else-if / v-else 와 v-show 비교`,`v-for 로 배열과 객체 반복 출력`,`v-pre · v-cloak · v-once · v-memo 동작 확인`],practiceGuide:[{practice:`v-html · v-text 디렉티브`,do:`"일반 보간법" 줄과 "v-html" 줄을 비교해 보세요.`,see:`위쪽은 <span style=...> 태그가 글자 그대로 보이고, 아래쪽은 실제 빨간 굵은 글자로 나옵니다.`,why:`{{ }}는 문자열을 안전하게 그대로 출력하고, v-html은 HTML로 해석해 삽입하기 때문입니다.`},{do:`XSS 학습 입력창에 <b>굵게</b> 를 입력하고 확인을 눌러 보세요.`,see:`입력한 태그가 실제로 굵은 글자가 되어 화면에 삽입됩니다.`,why:`사용자 입력이 그대로 HTML이 된다는 뜻입니다. 악성 스크립트도 같은 방식으로 실행될 수 있어 실무에서는 절대 금지입니다.`},{practice:`v-bind 디렉티브`,do:`"잠금 상태 변경"을 눌러 보세요.`,see:`위쪽 "잠기는 버튼"이 회색으로 비활성화됐다가 다시 눌러지는 상태로 바뀝니다.`,why:`:disabled="isButtonDisabled" 로 HTML 속성이 데이터와 연결되어 있기 때문입니다.`},{do:`"경고 상태 변경"을 누르고 글자색과 상자 테두리를 함께 보세요.`,see:`글자가 빨간 굵은 글씨로 바뀌고, 아래 상자 테두리도 회색에서 빨강으로 바뀝니다.`,why:`객체 구문 :class="{ danger: isWarning }" 과 배열 구문 :class="[a, 조건 ? b : c]" 이 동시에 동작하는 예입니다.`},{do:`"박스 너비" 입력칸의 숫자를 300, 500으로 바꿔 보세요.`,see:`초록 상자의 가로 길이가 부드럽게 따라 변합니다.`,why:`미리 만든 클래스로는 표현할 수 없는 실시간 수치라서 :style을 쓰는 경우입니다.`},{practice:`v-if · v-else · v-show 디렉티브`,do:`점수 입력칸에 95 / 85 / 75 / 50을 차례로 넣어 보세요.`,see:`A · B · C · F 학점 문구가 색깔까지 바뀌며 하나씩만 표시됩니다.`,why:`v-if · v-else-if · v-else는 위에서부터 검사해 처음 참인 것 하나만 화면에 만듭니다.`},{do:`"화면 토글하기"를 누른 뒤 개발자도구 Elements 탭에서 파란 상자를 찾아보세요.`,see:`상자는 사라졌지만 HTML에는 남아 있고 style="display: none"이 붙어 있습니다.`,why:`v-show는 DOM을 지우지 않고 CSS로만 숨깁니다. 반면 v-if는 DOM 자체가 없어집니다.`},{practice:`v-for 디렉티브`,do:`"객체 반복" 목록을 보세요.`,see:`[0] name: 홍길동 처럼 값·키·인덱스가 함께 나옵니다.`,why:`v-for="(value, key, index) in object" 순서로 세 가지를 받을 수 있습니다. 배열과 순서가 다르니 주의하세요.`},{practice:`v-pre · v-cloak · v-once · v-memo`,do:`"숫자 증가"를 눌러 보세요.`,see:`"일반 값"만 올라가고 "최초 값으로 고정"은 그대로 멈춰 있습니다.`,why:`v-once가 붙은 영역은 최초 한 번만 렌더링하고 이후 갱신을 건너뜁니다.`},{do:`v-pre가 붙은 줄을 보세요.`,see:`{{ message }} 가 해석되지 않고 글자 그대로 보입니다.`,why:`v-pre는 Vue 문법 해석을 끕니다. 문서에서 코드 예시를 보여줄 때 유용합니다.`}],pitfalls:[{bad:`<div v-html="userInput">`,good:`<div>{{ userInput }}</div>`,why:`사용자가 입력한 값을 v-html로 출력하면 XSS 공격에 뚫립니다. 내가 직접 작성했거나 안전하게 정제한 내용만 넣습니다.`},{bad:`<li v-for="item in items">`,good:`<li v-for="item in items" :key="item.id">`,why:`:key가 없으면 목록을 정렬하거나 중간 항목을 지울 때 화면이 엉킵니다. 가능하면 index 대신 데이터의 고유 id를 쓰세요.`},{bad:`<li v-for="item in items" v-if="item.ok">`,good:`computed로 걸러낸 배열을 v-for에 넘긴다`,why:`Vue 3에서 v-if가 v-for보다 먼저 평가되어 item을 아직 모릅니다. 같은 태그에 두 개를 함께 쓰면 안 됩니다.`},{bad:`:style="{ font-size: size }"`,good:`:style="{ fontSize: size + 'px' }"`,why:`JavaScript 객체의 CSS 속성명은 camelCase로 씁니다. 그리고 숫자만 넣으면 적용되지 않아 단위를 붙여야 합니다.`},{bad:`href="{{ url }}"`,good:`:href="url"`,why:`HTML 속성 안에서는 보간법이 동작하지 않습니다. 속성에 데이터를 넣을 때는 반드시 v-bind(:)를 씁니다.`},{why:`자주 열고 닫는 UI(탭·토글)는 v-show, 조건이 거의 안 바뀌거나 처음부터 필요 없는 무거운 영역은 v-if가 유리합니다.`}],extensions:[{practice:`v-if · v-else · v-show 디렉티브`,text:`점수에 따라 v-if로 글자를 바꾸는 대신, :class로 등급별 색상 클래스를 붙이도록 바꿔 보세요.`},{practice:`v-for 디렉티브`,text:`v-for에 index를 :key로 쓴 목록을 만들고, 중간 항목을 삭제했을 때 화면이 어떻게 어긋나는지 실험해 보세요.`},{practice:`v-for 디렉티브`,text:`과일 배열에 검색 입력창을 추가하고, filter()로 걸러진 결과만 v-for로 출력해 보세요.`},{practice:`v-for 디렉티브`,text:`v-for 안에 v-for를 중첩해 "카테고리 > 상품" 2단 목록을 만들어 보세요.`},{practice:`v-bind 디렉티브`,text:`:style로 진행률 바를 만들어 보세요. 너비를 percent + "%" 로 연결하면 됩니다.`},{practice:`v-if · v-else · v-show 디렉티브`,text:`v-show와 v-if를 각각 100개 요소에 적용하고 토글 속도를 체감해 보세요.`}],practices:[`HtmlTextPractice`,`BindPractice`,`ConditionalPractice`,`ForPractice`,`SpecialDirectivePractice`],status:`done`},{id:3,chapterId:2,label:`Code Challenge 03`,title:`이벤트 처리`,slidePage:`87쪽`,studyRange:`76~86쪽`,goal:`v-on으로 사용자 행동을 감지하고, 이벤트 객체와 수식어로 동작을 제어합니다.`,lecture:{intro:`지금까지는 데이터를 화면에 "보여주기"만 했습니다. 이제 사용자가 클릭하거나 키를 눌렀을 때 반응하는 법을 배웁니다. 버튼에 @click="함수이름" 을 붙이면 끝입니다. 여기에 .prevent 같은 옵션 한 글자를 더하면 원래 JavaScript로 여러 줄 써야 했던 처리를 대신해 줍니다.`,summary:'v-on(축약형 @)은 DOM 요소에 이벤트 리스너를 연결합니다. `@argument.modifier="value"` — argument는 이벤트 이름, modifier는 처리 옵션, value는 실행할 코드입니다.',points:['**괄호 없는 `@click="fn"`은 함수의 참조를 등록**한다. `@click="fn()"`은 즉시 실행되어 버린다.',`인자를 넘길 때는 @click="fn(값, $event)" 처럼 $event를 명시해야 이벤트 객체를 함께 받을 수 있다.`,`e.target은 실제로 이벤트를 발생시킨 요소, e.currentTarget은 리스너가 걸린 요소다.`,`.prevent는 e.preventDefault(), .stop은 e.stopPropagation()과 같다.`,`수식어는 체이닝할 수 있고, 왼쪽부터 순서대로 실행되므로 순서가 결과를 바꾼다.`,"**`<form>`에는 `@submit.prevent`가 사실상 필수**다. 없으면 새로고침으로 상태가 초기화된다."],syntax:[{code:`   v-on : click .prevent = "handleSubmit"
   ─┬──   ──┬──  ───┬───    ──────┬──────
    │       │       │             │
   이름  Argument Modifier      Value`,parts:[{token:`v-on`,role:`디렉티브 이름. 축약형 @ 를 쓰면 이 부분이 통째로 사라진다`},{token:`click`,role:`Argument — 감지할 이벤트 이름. submit·keyup·input 등`},{token:`.prevent`,role:`Modifier — 처리 옵션. 여러 개 이어 붙일 수 있다`},{token:`"handleSubmit"`,role:`Value — 실행할 함수 이름 또는 표현식`}],returns:`값을 돌려주지 않는다. Vue가 addEventListener를 대신 호출해 리스너를 등록하고, 컴포넌트가 사라질 때 알아서 해제해 준다.`,desc:`모든 디렉티브가 공유하는 4칸 구조.`},{code:`<form  @submit.prevent="save">      새로고침 방지
<button @click.stop.once="like">   버블링 차단 + 1회만
<input  @keyup.enter="search" />   Enter 키에 반응
<div   @click.self="close">        자기 자신 클릭만`,parts:[{token:`.prevent`,role:`e.preventDefault() 와 동일. 브라우저 기본 동작을 막는다`},{token:`.stop`,role:`e.stopPropagation() 과 동일. 부모로 전파되는 것을 막는다`},{token:`.once`,role:`최초 1회 실행 후 리스너를 제거한다`},{token:`.enter`,role:`키보드 수식어. Enter를 눌렀을 때만 실행`},{token:`.self`,role:`e.target === e.currentTarget 일 때만 실행`}],returns:`핸들러 함수가 return 한 값은 사용되지 않는다. 이벤트 처리는 "값"이 아니라 "동작"을 만든다.`,desc:`실무에서 가장 자주 쓰는 조합.`}]},tasks:[`v-on 이벤트 핸들러와 축약형 @ 사용`,`Inline Handler 와 Method Handler 구분`,`이벤트 객체($event) 사용`,`.prevent · .stop · .once · .self 수식어 적용`,`키보드 · 시스템 키 · 마우스 버튼 수식어 확인`],practiceGuide:[{practice:`Vue 이벤트 핸들링 (v-on)`,do:`"1씩 증가"(인라인)와 "알림창 띄우기"(메서드) 버튼을 각각 눌러 보세요.`,see:`앞은 숫자가 올라가고, 뒤는 알림창이 뜹니다.`,why:`한 줄짜리 동작은 태그 안에 바로(@click="count++"), 여러 줄이면 script의 함수로 분리합니다.`},{do:`"회원 정보와 태그 확인" 버튼을 눌러 보세요.`,see:`전달한 이름과 클릭된 태그 이름이 함께 표시됩니다.`,why:`인자를 넘길 때는 @click="fn(값, $event)" 처럼 $event를 명시해야 이벤트 객체도 함께 받을 수 있습니다.`},{do:`"네이버 링크"를 눌러 보세요.`,see:`페이지가 네이버로 이동하지 않고 그 자리에 머뭅니다.`,why:`.prevent가 링크의 기본 동작(주소 이동)을 막았기 때문입니다. 폼의 새로고침을 막는 것과 같은 원리입니다.`},{do:`"버블링 발생 버튼"과 "버블링 차단 버튼"을 차례로 눌러 보세요.`,see:`앞은 자식과 부모 메시지가 둘 다 뜨고, 뒤는 자식 메시지만 뜹니다.`,why:`클릭은 자식에서 부모로 물방울처럼 올라갑니다(버블링). .stop이 그 전파를 끊습니다.`},{do:`연결 수식어 실습의 체크박스를 두 번 눌러 보세요.`,see:`첫 클릭은 체크가 안 되고 부모도 반응 안 하지만, 두 번째 클릭부터는 정상 동작합니다.`,why:`.prevent.stop.once가 함께 걸려 있어, once로 리스너가 제거된 뒤에는 수식어가 사라지기 때문입니다. 수식어는 왼쪽부터 순서대로 적용됩니다.`}],pitfalls:[{bad:`@click="handleClick()"`,good:`@click="handleClick"`,why:`괄호를 붙이면 화면이 그려지는 순간 즉시 실행되고, 그 반환값(undefined)이 리스너로 등록됩니다. 인자를 넘길 때만 괄호를 씁니다.`},{bad:`<form @submit="save">`,good:`<form @submit.prevent="save">`,why:`.prevent가 없으면 제출 후 페이지가 새로고침되어 ref 값이 전부 초기화됩니다. 함수는 실행되기 때문에 원인을 찾기 어렵습니다.`},{bad:`<input @keyup.enter="save" /> 만으로 폼 안에서 처리`,good:`<input @keyup.enter.prevent="save" />`,why:`.enter는 "언제 실행할지"만 정합니다. 폼 안에서 Enter를 누르면 여전히 submit이 발생해 새로고침될 수 있습니다.`},{bad:`@click="alert('안녕')"`,good:`script에 함수를 만들고 @click="showAlert"`,why:`template은 샌드박스라 alert · window 같은 브라우저 전역을 쓸 수 없습니다.`},{bad:`@click.prevent.self="fn"`,good:`@click.self.prevent="fn"  (의도에 따라)`,why:`수식어는 왼쪽부터 순서대로 실행되어 순서가 결과를 바꿉니다. 앞이면 모든 클릭의 기본 동작을 막고, 뒤면 self로 걸러진 것만 막습니다.`},{why:`@keyup.left는 키보드 방향키, @click.left는 마우스 왼쪽 버튼입니다. 같은 수식어라도 앞의 이벤트 이름에 따라 의미가 달라집니다.`}],extensions:[{practice:`Vue 이벤트 핸들링 (v-on)`,text:`검색 입력창을 만들고 @keyup.enter로 검색이 실행되게 해 보세요.`},{practice:`Vue 이벤트 핸들링 (v-on)`,text:`모달을 만들고 배경에는 @click.self="close", 내용에는 @click.stop을 걸어 "바깥 클릭으로만 닫기"를 구현해 보세요.`},{practice:`Vue 이벤트 핸들링 (v-on)`,text:`@keyup.esc로 모달을 닫는 기능을 추가해 보세요.`},{practice:`Vue 이벤트 핸들링 (v-on)`,text:`우클릭 메뉴를 @click.right.prevent로 만들어 브라우저 기본 메뉴를 대체해 보세요.`},{practice:`Vue 이벤트 핸들링 (v-on)`,text:`@click.ctrl 과 @click.ctrl.exact 를 각각 걸어두고, Ctrl+Shift+클릭을 했을 때 차이를 확인해 보세요.`},{practice:`Vue 이벤트 핸들링 (v-on)`,text:`버튼에 .once를 걸어 "좋아요 중복 클릭 방지"를 만들어 보세요.`}],practices:[`EventPractice`],status:`done`},{id:4,chapterId:2,label:`Code Challenge 04`,title:`폼과 스타일`,slidePage:`97쪽`,studyRange:`88~96쪽`,goal:`v-model로 폼 요소와 데이터를 양방향으로 묶고, scoped 스타일을 적용합니다.`,lecture:{intro:`지금까지는 데이터 → 화면 한 방향이었습니다. 입력창은 반대로 사용자가 화면에서 값을 넣죠. v-model은 이 두 방향을 한 줄로 묶어줍니다. 변수를 고치면 입력창이 바뀌고, 입력창에 타이핑하면 변수가 바뀝니다.`,summary:`v-model은 v-bind의 :value와 v-on의 @input을 합친 축약 문법으로, 입력창과 데이터를 양방향으로 연결합니다(Two-way Data Binding).`,points:["**`v-model`은 `:value` + `@input`을 합친 축약형**이다.",`체크박스 다중 선택은 ref([]) 배열, 라디오·셀렉트는 ref('') 문자열로 선언한다.`,`.lazy는 change 시점에, .number는 숫자로 변환해서, .trim은 앞뒤 공백을 잘라서 저장한다.`,"**`<style scoped>`를 빼면 CSS가 전역으로 퍼진다.** 다른 화면 디자인이 깨진다.",`한글 입력(IME)은 조합 중 이벤트가 달라서, 원리 확인용으로는 :value + @input을 직접 써 보는 것이 좋다.`],syntax:[{code:`<input v-model="text" />

<!-- 위 한 줄은 아래와 같다 -->
<input :value="text" @input="text = $event.target.value" />`,parts:[{token:`v-model`,role:`양방향 바인딩 디렉티브. 아래 두 줄을 합친 축약형`},{token:`:value="text"`,role:`데이터 → 화면 방향. 변수 값을 입력창에 표시`},{token:`@input`,role:`화면 → 데이터 방향. 입력이 일어날 때마다 실행`},{token:`$event.target.value`,role:`입력창 DOM 요소가 가진 현재 입력값`}],returns:`값을 돌려주지 않는다. 대신 text 변수와 입력창이 계속 같은 값을 유지하도록 Vue가 연결을 관리한다.`,desc:`v-model의 정체.`},{code:`<input v-model.lazy="msg" />    change 시점에 반영
<input v-model.number="age" />  숫자로 변환
<input v-model.trim="name" />   앞뒤 공백 제거`,parts:[{token:`.lazy`,role:`input 대신 change 이벤트로 바꾼다. 포커스를 벗어날 때 반영`},{token:`.number`,role:`입력 문자열을 숫자로 변환해서 저장한다`},{token:`.trim`,role:`앞뒤 공백을 잘라내고 저장한다`}],returns:`변수에 저장되는 값의 "형태"가 달라진다. .number를 쓰면 typeof가 string이 아닌 number가 된다.`,desc:`수식어는 필요한 만큼 이어 붙일 수 있다(.trim.number).`}]},tasks:[`v-model 양방향 데이터 바인딩`,`input · checkbox · radio · select 와 v-model 연결`,`.lazy · .number · .trim 수식어 적용`,`<style scoped> 로 컴포넌트 스타일 작성`],practiceGuide:[{practice:`v-model 양방향 데이터 바인딩`,do:`위쪽 v-model 입력창과 아래쪽 :value + @input 입력창에 같은 글자를 타이핑해 보세요.`,see:`두 칸 모두 아래에 입력값이 실시간으로 따라 나옵니다. 동작이 완전히 같습니다.`,why:`v-model은 :value와 @input을 합친 축약형이라는 것을 눈으로 확인하는 부분입니다.`},{do:`다중 체크박스(사과·바나나·딸기)를 두 개 이상 체크해 보세요.`,see:`아래에 ["사과", "딸기"] 처럼 배열로 쌓입니다.`,why:`같은 v-model에 묶인 체크박스는 ref([]) 배열에 체크된 value들이 모입니다.`},{do:`라디오 버튼(남성/여성)을 바꿔가며 눌러 보세요.`,see:`하나만 선택되고 값이 문자열로 교체됩니다.`,why:`라디오와 드롭다운은 ref("") 문자열로 선언합니다. 배열이 아닙니다.`},{do:`.lazy 입력칸에 글자를 치다가, Tab을 누르거나 다른 곳을 클릭해 보세요.`,see:`타이핑 중에는 값이 안 바뀌다가 포커스를 벗어나는 순간 한꺼번에 반영됩니다.`,why:`.lazy는 input이 아니라 change 이벤트 시점에 값을 저장하기 때문입니다.`},{do:`.number 입력칸에 25를 입력하고 바로 아래 "데이터 타입" 줄을 보세요.`,see:`string이 아니라 number라고 표시됩니다.`,why:`HTML 입력값은 기본적으로 항상 문자열입니다. .number가 숫자로 변환해 줍니다.`},{do:`.trim 입력칸에 앞뒤로 공백을 잔뜩 넣고 글자를 써 보세요.`,see:`따옴표로 감싼 결과에 공백이 사라지고, 문자열 길이도 줄어듭니다.`,why:`.trim이 저장 시점에 앞뒤 공백을 잘라냅니다. 이메일·아이디 입력에서 필수입니다.`}],pitfalls:[{bad:`const fruits = ref('')  // 다중 체크박스용`,good:`const fruits = ref([])`,why:`다중 체크박스는 배열로 선언해야 합니다. 문자열로 두면 true/false만 저장되어 어떤 항목인지 알 수 없습니다.`},{bad:`const age = ref(0) 후 v-model="age"`,good:`v-model.number="age"`,why:`입력값은 항상 문자열로 들어옵니다. .number 없이 계산하면 20 + 1 이 "201"이 되는 사고가 납니다.`},{bad:`<input :value="text" /> 만 사용`,good:`<input v-model="text" />`,why:`:value만 쓰면 화면 → 데이터 방향이 없어서 타이핑해도 변수가 바뀌지 않습니다.`},{bad:`<style>`,good:`<style scoped>`,why:`scoped를 빼면 이 컴포넌트의 CSS가 앱 전체로 퍼져 다른 화면 디자인을 망가뜨립니다.`},{why:`한글은 자음·모음을 조합하는 중(IME)에는 input 이벤트가 다르게 발생합니다. 한글 입력이 이상하면 v-model 대신 @change나 .lazy를 검토하세요.`}],extensions:[{practice:`v-model 양방향 데이터 바인딩`,text:`이름·이메일·비밀번호가 있는 회원가입 폼을 만들고 @submit.prevent로 처리해 보세요.`},{practice:`v-model 양방향 데이터 바인딩`,text:`입력값이 비어 있으면 제출 버튼을 :disabled로 잠그도록 만들어 보세요.`},{practice:`v-model 양방향 데이터 바인딩`,text:`이메일에 @가 없으면 빨간 경고 문구가 뜨도록 v-if와 computed를 조합해 보세요.`},{practice:`v-model 양방향 데이터 바인딩`,text:`체크박스로 선택한 과일 개수를 computed로 세어 "3개 선택됨"을 표시해 보세요.`},{practice:`v-model 양방향 데이터 바인딩`,text:`드롭다운 선택에 따라 아래 내용이 바뀌는 2단 선택(시/구) 폼을 만들어 보세요.`},{practice:`v-model 양방향 데이터 바인딩`,text:`입력 글자 수 제한(예: 20자)을 만들고 남은 글자 수를 실시간으로 보여 주세요.`}],practices:[`ModelPractice`],status:`done`},{id:5,chapterId:3,label:`Code Challenge 05`,title:`Reactive State — ref와 reactive`,slidePage:`107쪽`,studyRange:`100~106쪽`,goal:`ref()와 reactive()의 차이를 이해하고 상황에 맞게 선택합니다.`,lecture:{intro:`ref는 값을 "상자"에 넣어두는 것입니다. Vue는 상자를 지켜보다가 안의 내용이 바뀌면 화면을 다시 그립니다. 다만 script에서 상자 안을 꺼내려면 뚜껑(.value)을 열어야 하고, template에서는 Vue가 알아서 열어줍니다. reactive는 뚜껑이 없는 대신 객체에만 쓸 수 있습니다.`,summary:`Composition API는 <script setup> 안에서 반응형 상태를 선언하는 방식입니다. ref()는 모든 타입에, reactive()는 객체 전용으로 사용합니다.`,points:[`ref()는 원시값·객체 모두 가능하고, script에서 .value로 접근한다.`,`reactive()는 객체 전용이며 .value가 없지만, **통째로 재할당하면 반응성이 끊긴다.**`,`그래서 **실무는 ref()로 통일하는 추세**다.`,`template에서는 ref가 자동 언래핑되어 .value 없이 쓴다.`],syntax:[{code:`const count = ref(0)`,parts:[{token:`const count`,role:`내가 정하는 이름(식별자). const로 선언해도 안의 값은 바꿀 수 있다`},{token:`ref(...)`,role:`Vue 내장 함수. import { ref } from 'vue' 가 필요하다`},{token:`0`,role:`초깃값. 숫자·문자열·불린·배열·객체 무엇이든 가능하다`}],returns:`RefImpl 이라는 객체를 돌려준다. 실제 값은 그 안의 .value에 들어 있다. 그래서 script에서는 count.value, template에서는 {{ count }}로 쓴다.`,desc:`const로 선언하는 이유: 상자 자체를 바꾸는 게 아니라 상자 안의 값만 바꾸기 때문이다.`},{code:`const user = reactive({ name: '홍길동', age: 30 })

user.name = '이순신'   // 바로 접근 (.value 없음)`,parts:[{token:`const user`,role:`식별자. 반응형 객체를 담을 변수`},{token:`reactive(...)`,role:`Vue 내장 함수. 객체와 배열에만 쓸 수 있다`},{token:`{ name: ..., age: ... }`,role:`초기 객체. 이 안의 속성들이 모두 감시 대상이 된다`},{token:`user.name`,role:`.value 없이 속성에 바로 접근한다`}],returns:`Proxy 객체를 돌려준다. 원본과 똑같이 생겼지만 속성을 읽고 쓸 때 Vue가 가로채서 변화를 감지한다.`,desc:`reactive(0) 처럼 숫자를 넣으면 동작하지 않고 경고가 뜬다.`}]},tasks:[`ref() 예제 작성`,`reactive() 예제 작성`,`script의 .value 와 template 자동 언래핑 차이 확인`],practiceGuide:[{practice:`반응형 상태 ref() 기초`,do:`"Ref 변수 증가"를 눌러 보세요.`,see:`카운트가 1씩 올라갑니다.`,why:`script의 함수 안에서 count.value++ 로 상자 안의 값을 바꿨기 때문입니다. .value를 빼면 동작하지 않습니다.`},{do:`이름 입력칸에 글자를 타이핑해 보세요.`,see:`입력칸 오른쪽 글자가 실시간으로 따라 바뀝니다.`,why:`ref에 담긴 문자열이 v-model로 양방향 연결되어 있기 때문입니다.`},{do:`"과일 추가"를 눌러 보세요.`,see:`목록 끝에 "귤"이 붙습니다.`,why:`ref에 배열을 담아도 push 같은 내부 변경까지 감지됩니다. 배열은 items.value.push(...)로 접근합니다.`},{do:`"사용자 이름 변경"을 눌러 보세요.`,see:`이순신이 장보고로 바뀝니다.`,why:`ref에 객체를 담으면 user.value.name 처럼 .value를 한 번 거쳐 속성에 접근합니다.`},{practice:`반응형 상태 reactive() 특징 및 주의점`,do:`"reactive 나이 한 살 추가"를 눌러 보세요.`,see:`나이가 31세로 올라갑니다.`,why:`reactive는 .value 없이 userReactive.age++ 로 바로 접근합니다. 이것이 ref와의 가장 큰 차이입니다.`},{do:`"과일 항목 추가"와 각 항목의 "삭제"를 눌러 보세요.`,see:`목록이 즉시 늘어나고 줄어듭니다.`,why:`reactive로 만든 배열도 push · splice 같은 메서드 호출을 감지해 화면을 갱신합니다.`},{practice:`할 일 목록 — ref 배열 응용`,do:`입력창에 "우유 사기"를 치고 Enter를 눌러 보세요.`,see:`목록에 추가되고 입력창이 비워집니다.`,why:`todos.value.push()로 배열에 넣고, newTitle.value = "" 로 입력창을 초기화했기 때문입니다. @keyup.enter는 CC03에서 배운 이벤트 수식어입니다.`},{do:`아무것도 입력하지 않고, 또는 공백만 넣고 "추가"를 눌러 보세요.`,see:`아무 일도 일어나지 않습니다.`,why:`trim()으로 공백을 걷어낸 뒤 빈 문자열이면 return으로 함수를 빠져나가게 막아둔 덕분입니다.`},{do:`체크박스를 눌러 완료 표시를 해보세요.`,see:`글자에 취소선이 생기고 회색으로 흐려지며, 아래 "남은 일" 숫자가 줄어듭니다.`,why:`배열 안 객체의 done 속성만 바꿨는데도 화면이 갱신됩니다. ref는 안에 담긴 객체의 속성 변경까지 감지합니다.`},{do:`항목을 3개쯤 만든 뒤 가운데 것을 "삭제"해 보세요.`,see:`그 항목만 사라지고 나머지는 그대로 남습니다.`,why:`filter로 "그 id가 아닌 것만" 모은 새 배열을 만들어 통째로 교체했습니다. 원본을 직접 건드리지 않는 불변성 방식입니다(CC16에서 다시 나옵니다).`},{do:`아래 요약 줄의 숫자를 보세요.`,see:`전체 · 남은 일 · 완료 개수가 실시간으로 바뀝니다.`,why:`computed 없이 템플릿에서 todos.filter(...).length 를 직접 계산한 것입니다. CC01에서 배운 "{{ }} 안은 표현식이 실행되는 자리"의 응용입니다.`},{practice:`할 일 목록 응용 2 — 잠금 · 수정 · 필터`,do:`입력창을 비운 채로 "추가" 버튼을 보세요.`,see:`버튼이 회색으로 잠겨 있고 마우스를 올리면 금지 커서가 나옵니다. 글자를 치면 바로 풀립니다.`,why:`:disabled="!newTitle.trim()" 로 잠갔습니다. 다만 화면만 막은 것이라 addTodo 안의 검사 코드는 그대로 남겨둬야 합니다. Enter로는 여전히 들어올 수 있으니까요.`},{do:`할 일 제목을 클릭해 보세요.`,see:`글자가 입력창으로 바뀌고 커서가 자동으로 들어갑니다.`,why:`editingId에 그 항목의 id를 넣어 "지금 몇 번을 수정 중인지" 기억합니다. 커서는 nextTick으로 입력창이 그려질 때까지 기다린 뒤에 넣어야 들어갑니다.`},{do:`제목을 아무렇게나 고치다가 Esc를 눌러 보세요.`,see:`고치던 내용이 버려지고 원래 제목으로 돌아옵니다.`,why:`원본(todo.title)이 아니라 복사본(editingTitle)을 고치고 있기 때문입니다. v-model을 원본에 바로 걸었다면 취소할 방법이 없습니다.`},{do:`이번에는 제목을 고치고 Enter를 눌러 보세요. 그 다음 다른 항목을 수정하다 바깥을 클릭해 보세요.`,see:`Enter는 확정, 바깥 클릭(blur)도 확정됩니다.`,why:`Enter로 확정하면 입력창이 사라지며 blur가 한 번 더 들어올 수 있습니다. confirmEdit 맨 위의 "editingId가 null이면 return" 가드가 그 중복 실행을 막습니다.`},{do:`"남은 일만 보기"를 켠 뒤 남은 항목을 전부 완료 처리해 보세요.`,see:`목록이 비면서 "🎉 남은 일이 없습니다"가 뜹니다. 필터를 끄면 완료 항목이 다시 보입니다.`,why:`빈 화면에는 "할 일이 아예 없음"과 "필터 때문에 안 보임" 두 가지 의미가 있어서 v-else-if로 구분했습니다.`},{do:`항목을 추가·삭제하며 아래 집계 숫자를 보세요.`,see:`전체 · 남은 일 · 완료가 정확히 맞아떨어집니다.`,why:`computed로 옮긴 덕분입니다. 의존하는 todos가 바뀔 때만 다시 계산하고, doneCount는 remainingCount라는 다른 computed를 재사용해 filter를 한 번 덜 돕니다.`},{practice:`폼 상태 관리 — ref 여러 개 vs reactive 하나`,do:`왼쪽(A)과 오른쪽(B)에 같은 값을 입력해 보세요.`,see:`아래 두 결과 상자의 내용이 똑같습니다.`,why:`동작은 완전히 같습니다. 차이는 "쓰는 사람이 얼마나 편한가"에 있습니다.`},{do:`양쪽의 "초기화" 버튼을 누르고, 그 아래 회색 코드 상자를 비교해 보세요.`,see:`A는 4줄, B는 Object.assign 한 줄입니다.`,why:`reactive는 관련된 값이 한 덩어리라서 객체 단위로 통째로 다룰 수 있습니다. 필드가 10개로 늘면 A는 10줄, B는 그대로 한 줄입니다.`},{do:`결과 상자의 코드 모양을 비교해 보세요.`,see:`A는 { name: name.value, email: email.value, ... } 처럼 손으로 조립했고, B는 form을 그대로 넘겼습니다.`,why:`서버로 보내거나 자식 컴포넌트에 넘길 때 reactive는 객체 하나만 전달하면 됩니다. ref 방식은 매번 조립하거나 인자를 여러 개 넘겨야 합니다.`},{do:`소스 코드(</> 아이콘)를 열어 form 선언부를 보세요.`,see:`reactive({ ...INITIAL_FORM }) 처럼 초깃값을 복사해서 넣었습니다.`,why:`INITIAL_FORM을 직접 넘기면 초기화할 때 원본까지 같이 바뀝니다. 스프레드로 복사본을 만들어 원본을 지켰습니다(CC16 불변성의 응용).`}],pitfalls:[{bad:`count++  (script 안)`,good:`count.value++`,why:`ref는 script에서 반드시 .value를 거칩니다. 빼먹으면 값이 바뀌지 않거나 NaN이 됩니다.`},{bad:`{{ count.value }}  (template 안)`,good:`{{ count }}`,why:`template에서는 자동으로 언래핑됩니다. .value를 붙이면 undefined가 나옵니다.`},{bad:`userReactive = { name: '새이름' }`,good:`userReactive.name = '새이름'`,why:`reactive 객체를 통째로 재할당하면 Vue가 감시하던 Proxy와의 연결이 끊겨 화면이 더 이상 갱신되지 않습니다.`},{bad:`const count = reactive(0)`,good:`const count = ref(0)`,why:`reactive는 객체·배열 전용입니다. 숫자·문자열 같은 원시값에는 쓸 수 없습니다.`},{bad:`const { name } = reactive({ name: "홍길동" })`,good:`toRefs()로 분해하거나 user.name 으로 접근`,why:`reactive 객체를 구조 분해하면 반응성이 끊어집니다. 값만 복사되기 때문입니다.`},{why:`헷갈리면 전부 ref()로 통일하세요. 실무도 그 방향이고, .value만 기억하면 되어 규칙이 하나로 줄어듭니다.`}],extensions:[{practice:`반응형 상태 reactive() 특징 및 주의점`,text:`ref로 만든 객체와 reactive로 만든 객체를 나란히 두고, 통째로 재할당했을 때 어느 쪽이 화면 갱신을 멈추는지 실험해 보세요.`},{practice:`할 일 목록 — ref 배열 응용`,text:`위 세 가지는 아래 "응용 2" 실습에 이미 구현해 두었습니다. 먼저 스스로 만들어 본 뒤 소스를 열어 비교해 보세요.`},{practice:`할 일 목록 응용 2 — 잠금 · 수정 · 필터`,text:`"전체 / 남은 일 / 완료" 3단 필터로 바꿔 보세요. ref에 문자열을 담고 computed에서 분기하면 됩니다.`},{practice:`할 일 목록 응용 2 — 잠금 · 수정 · 필터`,text:`수정 중에 Esc를 눌러도 blur가 먼저 발생해 확정되지는 않는지 확인하고, 문제가 있다면 cancelEdit에 플래그를 두어 막아 보세요.`},{practice:`할 일 목록 응용 2 — 잠금 · 수정 · 필터`,text:`항목에 마감일을 추가하고, 오늘 날짜가 지난 항목만 빨갛게 표시해 보세요.`},{practice:`할 일 목록 응용 2 — 잠금 · 수정 · 필터`,text:`할 일을 localStorage에 저장했다가 새로고침 후 복원해 보세요. watch를 쓰면 자동 저장이 됩니다(CC06 예습).`},{practice:`반응형 상태 reactive() 특징 및 주의점`,text:`reactive 객체를 구조 분해해서 화면에 출력해 보고, 값이 안 바뀌는 것을 확인한 뒤 toRefs()로 고쳐 보세요.`},{practice:`반응형 상태 reactive() 특징 및 주의점`,text:`Vue Devtools를 열고 ref와 reactive가 각각 어떻게 표시되는지 비교해 보세요.`},{practice:`반응형 상태 reactive() 특징 및 주의점`,text:`입력 폼의 여러 필드를 reactive 객체 하나로 묶어 관리해 보고, ref 여러 개로 관리할 때와 비교해 보세요.`}],practices:[`RefStatePractice`,`ReactiveStatePractice`,`TodoListPractice`,`TodoAdvancedPractice`,`FormStatePractice`],status:`done`},{id:6,chapterId:3,label:`Code Challenge 06`,title:`Computed와 Watchers`,slidePage:`125쪽`,studyRange:`108~124쪽`,goal:`파생 데이터는 computed로, 부수 효과는 watch로 처리하는 기준을 익힙니다.`,lecture:{intro:`computed는 엑셀의 수식 셀입니다. "A1 곱하기 2"라고 적어두면 A1이 바뀔 때 알아서 다시 계산되죠. watch는 CCTV입니다. 값이 바뀌는 순간을 지켜보다가 "바뀌었으니 서버에 다시 물어봐" 같은 동작을 실행합니다. 화면에 보여줄 값이면 computed, 무언가를 실행해야 하면 watch입니다.`,summary:`computed()는 다른 데이터로부터 자동 계산되는 값(엑셀의 수식 셀)이고, watch()는 값이 바뀌는 순간 무언가를 실행하는 감시자입니다.`,points:[`**computed는 의존하는 값이 바뀔 때만 다시 계산**되고 결과를 캐싱한다.`,`**화면에 보여줄 값이면 computed, 무언가를 실행해야 하면 watch.** 이 기준 하나면 충분하다.`,`watch는 여러 값을 배열로 감시(Multi-Source)할 수 있다.`,"객체 내부까지 감시하려면 **`{ deep: true }`** 옵션이 필요하다.",`watchEffect()는 의존성을 자동으로 추적하며 즉시 한 번 실행된다.`],syntax:[{code:`const double = computed(() => count.value * 2)`,parts:[{token:`const double`,role:`내가 정하는 이름(식별자). 계산 결과를 담을 변수`},{token:`computed(...)`,role:`Vue 내장 함수. 'vue'에서 import 해야 쓸 수 있다`},{token:`() => ...`,role:`계산 방법을 적은 화살표 함수. computed에 넘기는 인자`},{token:`count.value`,role:`의존성. 이 값이 바뀔 때만 다시 계산된다`},{token:`* 2`,role:`실제 계산식. 화살표 함수가 이 결과를 return 한다`}],returns:`ref 객체를 돌려준다. script에서는 double.value, template에서는 {{ double }}로 읽는다. 읽기 전용이라 double.value = 5 처럼 직접 대입할 수 없다.`,desc:`화살표 함수에 중괄호가 없으면 그 식의 결과가 곧 return 값이다.`},{code:`watch(city, (newVal, oldVal) => {
  console.log(oldVal, '→', newVal)
})`,parts:[{token:`watch(...)`,role:`Vue 내장 함수. 인자를 두 개 받는다`},{token:`city`,role:`1번째 인자 — 감시 대상. ref 변수 이름만 넘긴다 (.value 붙이지 않음)`},{token:`(newVal, oldVal) => {}`,role:`2번째 인자 — 값이 바뀔 때 실행할 콜백 함수`},{token:`newVal`,role:`바뀐 뒤의 값. 이름은 마음대로 정해도 되고 순서로 결정된다`},{token:`oldVal`,role:`바뀌기 전의 값. 첫 실행 때는 undefined일 수 있다`}],returns:`감시를 중단하는 함수(stop)를 돌려준다. const stop = watch(...) 로 받아 stop()을 호출하면 감시가 끝난다. 보통은 안 쓰고 버린다.`,desc:`콜백 안에서 return 한 값은 쓰이지 않는다. watch는 "값"이 아니라 "동작"을 만든다.`},{code:`watchEffect(() => console.log(query.value))`,parts:[{token:`watchEffect(...)`,role:`Vue 내장 함수. 인자를 하나만 받는다`},{token:`() => ...`,role:`실행할 함수. 감시 대상을 따로 적지 않는다`},{token:`query.value`,role:`함수 안에서 읽은 값이 자동으로 의존성이 된다`}],returns:`watch와 마찬가지로 감시 중단 함수를 돌려준다.`,desc:`watch와 달리 이전 값을 받을 수 없고, 등록 즉시 한 번 실행된다.`}]},tasks:[`computed() 계산값 만들기`,`단일 값 watch()`,`Multi-Source Watch`,`Deep Watch ({ deep: true })`,`reactive 데이터 감시`,`watchEffect() 자동 의존성 추적`],practiceGuide:[{practice:`computed() 캐싱 동작 비교`,do:`브라우저 콘솔(F12)을 먼저 열어두세요. 이 실습은 콘솔이 핵심입니다.`,see:`아무 것도 없는 빈 콘솔이 보입니다.`},{do:`"dummy 증가"를 3번 눌러 보세요.`,see:`콘솔에 "❌ 일반 함수 실행됨!"만 3번 찍히고, "✅ Computed"는 한 번도 안 찍힙니다.`,why:`dummy는 computed가 의존하는 값이 아니라서 재계산하지 않고 캐시된 값을 그대로 씁니다. 반면 일반 함수는 화면이 다시 그려질 때마다 무조건 실행됩니다.`},{do:`"count 증가"를 눌러 보세요.`,see:`이번에는 "❌ 일반 함수"와 "✅ Computed"가 둘 다 찍힙니다.`,why:`count는 computed의 의존성이므로 재계산이 필요합니다. 이것이 캐싱의 정체입니다.`},{practice:`감시자 watch()의 원리와 실무 활용`,do:`"부산 선택"을 눌러 보세요.`,see:`모니터 박스에 "[서울]에서 [부산]로 변경됨"이 뜨고, 콘솔에 서버 요청 로그가 찍힙니다.`,why:`watch 콜백이 (newValue, oldValue)를 받기 때문에 이전 값과 새 값을 모두 쓸 수 있습니다.`},{do:`이미 선택된 "부산"을 한 번 더 눌러 보세요.`,see:`아무 일도 일어나지 않습니다.`,why:`watch는 값이 실제로 바뀔 때만 발동합니다. 같은 값을 다시 넣으면 변경이 아니므로 무시됩니다.`},{practice:`여러 개의 변수 동시 감시 (Multi-Source Watch)`,do:`도시만 "부산"으로 바꿔 보세요.`,see:`로그에 도시와 날짜가 함께 나옵니다. 날짜는 안 바꿨는데도 표시됩니다.`,why:`배열로 감시하면 둘 중 하나만 바뀌어도 콜백이 한 번 실행되고, 두 값 모두 전달됩니다. 조건이 여러 개인 API 호출을 한 번으로 묶을 때 쓰는 패턴입니다.`},{do:`이어서 날짜만 "주간예보"로 바꿔 보세요.`,see:`이전 값이 (부산, 오늘), 새 값이 (부산, 주간예보)로 찍힙니다.`,why:`새 값·이전 값 배열은 감시 대상을 적은 순서 [city, dateType] 그대로 매핑됩니다. 순서를 헷갈리면 값이 뒤바뀝니다.`},{practice:`ref 객체 감시 — Deep Watch`,do:`"이름만 변경"을 눌러 보세요.`,see:`파란 deep 모니터만 반응하고, 보라색 타겟 모니터는 그대로입니다.`,why:`deep은 객체 안 아무 속성이나 바뀌면 발동하지만, 타겟 감시는 age만 보고 있기 때문입니다.`},{do:`"나이만 변경"을 눌러 보세요.`,see:`두 모니터가 모두 반응하고, 보라색에는 이전 나이 → 새 나이가 표시됩니다.`,why:`deep 감시는 이전 값을 제대로 주지 못합니다(같은 객체라 newVal과 oldVal이 동일). 이전 값이 필요하면 화살표 함수로 특정 속성을 콕 집어야 합니다.`},{practice:`ref 배열의 특정 인덱스 감시하기`,do:`"0번 멤버를 손흥민으로 교체"를 눌러 보세요.`,see:`파란 로그에 홍길동 ➡️ 손흥민 으로 이전 값까지 정확히 나옵니다.`,why:`() => teamMembers.value[0] 이 가리키는 것이 문자열이라, 값이 바뀌면 곧바로 다른 값으로 인식됩니다.`},{do:`"서울 기온 1도 올리기"를 눌러 보세요.`,see:`보라색 로그에 온도가 갱신됩니다.`,why:`이 감시 대상은 객체라서 { deep: true }를 붙였기 때문입니다. deep을 빼면 temp가 아무리 올라가도 반응하지 않습니다 — 같은 객체를 계속 가리키기 때문입니다.`},{practice:`reactive() 데이터 watch 감시 규칙`,do:`"가격 500원 인상"을 눌러 보세요.`,see:`빨간 박스는 이전값·현재값이 둘 다 1500으로 똑같고, 초록 박스만 1000 ➡️ 1500으로 제대로 나옵니다.`,why:`reactive 변수명을 그대로 넘기면 deep이 자동으로 켜지지만, newVal과 oldVal이 같은 객체를 가리켜 이전 값이 의미를 잃습니다.`},{practice:`reactive() 배열 감시 — 스냅샷 기법`,do:`"부산 추가"를 누르고 두 박스를 비교해 보세요.`,see:`빨간 박스는 옛 길이·새 길이가 모두 3이고, 초록 박스는 2 ➡️ 3 으로 과거 데이터까지 보여줍니다.`,why:`[...cityList] 로 복사본을 만들어 감시하면 매번 새 배열이 생기므로 과거 상태가 그대로 보존됩니다. 이것이 스냅샷 기법입니다.`},{do:`"최근 도시 삭제"를 눌러 초록 박스의 데이터 부분을 보세요.`,see:`삭제되기 전 배열 내용이 그대로 찍힙니다.`,why:`변경 전후를 비교해야 하는 실무 로직(무엇이 추가·삭제됐는지 계산)은 이 방식이 필수입니다.`},{practice:`자동 감시자 watchEffect()`,do:`페이지를 새로고침하고 아무 버튼도 누르지 마세요.`,see:`모니터에 이미 "[자동 감지] 이름: 홍길동 / 나이: 20세"가 찍혀 있고, 콘솔에도 로그가 하나 있습니다.`,why:`watchEffect는 등록되는 즉시 한 번 실행됩니다. watch는 값이 바뀌기 전까지 조용하다는 점과 정반대입니다.`},{do:`"이름 변경"과 "나이 추가"를 눌러 보세요.`,see:`감시 대상을 한 줄도 적지 않았는데 둘 다 반응합니다.`,why:`함수 안에서 username.value와 age.value를 읽었기 때문에, Vue가 그 둘을 자동으로 의존성 목록에 넣습니다.`}],pitfalls:[{bad:`watch(city.value, ...)`,good:`watch(city, ...)`,why:`감시 대상에는 ref 변수 자체를 넘깁니다. .value를 붙이면 값(문자열)을 넘기게 되어 감시가 동작하지 않습니다.`},{bad:`const double = computed(() => { count.value * 2 })`,good:`const double = computed(() => count.value * 2)`,why:`화살표 함수에 중괄호를 쓰면 return을 직접 적어야 합니다. 빠뜨리면 undefined가 반환됩니다.`},{bad:`double.value = 10`,good:`원본인 count.value를 바꾼다`,why:`computed는 읽기 전용입니다. 직접 대입하면 경고가 뜨고 값도 바뀌지 않습니다.`},{bad:`<p>{{ getResult() }}</p> 로 무거운 계산`,good:`const result = computed(...) 후 {{ result }}`,why:`템플릿에서 함수를 호출하면 화면이 다시 그려질 때마다 매번 실행됩니다. 이번 실습의 콘솔 로그가 바로 그 증거입니다.`},{bad:`watch(user, ...) 로 객체 속성 변경 감지`,good:`watch(user, ..., { deep: true })`,why:`객체를 감시할 때 내부 속성 변경까지 잡으려면 deep 옵션이 필요합니다.`}],extensions:[{practice:`ref 객체 감시 — Deep Watch`,text:`DeepWatchPractice.vue의 주석 처리된 "실패하는 예시"를 살려 보세요. deep 없이는 아무리 눌러도 로그가 찍히지 않습니다 — 가장 많이 하는 실수를 직접 확인하는 방법입니다.`},{practice:`감시자 watch()의 원리와 실무 활용`,text:`watch에 { immediate: true } 옵션을 주고, 화면을 열자마자 콜백이 한 번 실행되는지 확인해 보세요.`},{practice:`여러 개의 변수 동시 감시 (Multi-Source Watch)`,text:`watch([cityA, cityB], ([newA, newB], [oldA, oldB]) => {...}) 형태로 두 값을 동시에 감시해 보세요.`},{practice:`reactive() 데이터 watch 감시 규칙`,text:`reactive 객체를 만들고 { deep: true } 없이 / 있이 감시했을 때 차이를 비교해 보세요.`},{practice:`자동 감시자 watchEffect()`,text:`watchEffect로 같은 감시를 구현해 보고, 이전 값을 못 받는다는 점이 어떤 상황에서 불편한지 느껴 보세요.`},{practice:`감시자 watch()의 원리와 실무 활용`,text:`검색어를 입력할 때마다 API를 호출하지 않도록, watch 안에 setTimeout으로 디바운스를 걸어 보세요.`},{practice:`computed() 캐싱 동작 비교`,text:`computed로 "도시 이름 + 현재 단위" 같은 조합 문자열을 만들어 화면에 출력해 보세요.`}],practices:[`ComputedCachePractice`,`WatchPractice`,`MultiWatchPractice`,`DeepWatchPractice`,`RefArrayWatchPractice`,`ReactiveWatchPractice`,`ReactiveArrayWatchPractice`,`WatchEffectPractice`],status:`done`},{id:23,chapterId:4,label:`개념 정리`,title:`Component 등록 — 지역 vs 전역`,slidePage:`128~132쪽`,studyRange:`128~132쪽`,goal:`컴포넌트가 무엇이고 어떻게 등록해서 쓰는지, 지역 등록과 전역 등록의 차이를 확인합니다.`,lecture:{intro:`컴포넌트는 "언제든 다른 부품으로 갈아 끼울 수 있는 표준화된 모듈"입니다. 레고 블록처럼요. 그런데 만들어만 두면 쓸 수 없고 "이 블록을 쓰겠다"고 등록해야 합니다. 등록 방법이 두 가지인데, 하나는 쓰는 파일에서 import 하는 것(지역)이고 다른 하나는 main.js에서 한 번에 선언하는 것(전역)입니다.`,summary:`컴포넌트의 핵심은 독립성(Independency)과 교체 가능성(Replaceability)입니다. Vue에서는 .vue 파일 하나가 컴포넌트 하나이며, 이들이 Tree 구조로 연결되어 애플리케이션을 이룹니다.`,points:[`부모-자식은 철저히 독립되어 있다. 자식은 부모의 변수를 마음대로 가져다 쓸 수 없고, 부모도 자식 내부를 들여다볼 수 없다.`,`형제끼리는 직접 대화하는 선이 없다. 부모를 거쳐 올라갔다 내려와야 한다.`,`<script setup>에서는 import 한 줄이 곧 등록이다. components: { ... } 를 따로 쓰지 않는다.`,`등록한 컴포넌트는 PascalCase(<BaseButton />)와 kebab-case(<base-button>) 둘 다로 부를 수 있다.`,`전역 등록은 main.js에서 app.component(태그이름, 컴포넌트)로 한다.`,`전역 등록은 편하지만 안 쓰는 컴포넌트까지 번들에 들어가고, 어디서 온 태그인지 코드만 봐서는 알 수 없다.`],syntax:[{code:`<script setup>
import BaseButton from './components/BaseButton.vue'
<\/script>

<template>
  <BaseButton />
  <base-button></base-button>
</template>`,parts:[{token:`import BaseButton`,role:`내가 정하는 이름. 이 이름이 곧 태그 이름이 된다`},{token:`'./components/BaseButton.vue'`,role:`파일 경로. 확장자 .vue까지 적는다`},{token:`<BaseButton />`,role:`PascalCase 호출. 자식이 없으면 자기 닫힘 태그로`},{token:`<base-button>`,role:`kebab-case 호출. 위와 완전히 같은 컴포넌트`}],returns:`import는 컴포넌트 정의 객체를 돌려준다. <script setup>은 이 변수를 자동으로 템플릿에 노출하므로 별도 등록 코드가 필요 없다.`,desc:`교안 130쪽 — 지역(Local) 등록.`},{code:`// main.js
import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/BaseButton.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.mount('#app')`,parts:[{token:`createApp(App)`,role:`앱 인스턴스를 만든다. 이 결과를 app에 담는다`},{token:`app.component(...)`,role:`전역 등록 메서드. 인자를 두 개 받는다`},{token:`'BaseButton'`,role:`1번째 인자 — template에서 부를 태그 이름`},{token:`BaseButton`,role:`2번째 인자 — 위에서 import 한 컴포넌트`}],returns:`app 객체를 그대로 돌려주므로 .component(...).component(...) 처럼 이어 쓸 수 있다. 등록 후에는 앱 안 어디서든 import 없이 쓸 수 있다.`,desc:`교안 131쪽 — 전역(Global) 등록. 반드시 app.mount() 이전에 등록해야 한다.`}]},tasks:[`컴포넌트의 독립성과 교체 가능성 이해`,`부모-자식 · 형제 · 조상-후손 관계 파악`,`지역 등록 — 부모에서 자식을 import 해서 사용`,`PascalCase와 kebab-case 두 가지 호출 방식 확인`,`전역 등록 — main.js에서 app.component()로 등록`,`지역과 전역 등록의 장단점 비교`],pitfalls:[{bad:`App.component('BaseButton', BaseButton)`,good:`app.component('BaseButton', BaseButton)`,why:`교안 131쪽에 대문자 App으로 적힌 오타가 있습니다. App은 import 한 루트 컴포넌트라 .component() 메서드가 없어 실행하면 에러가 납니다. createApp이 돌려준 소문자 app을 써야 합니다.`},{bad:`app.mount("#app") 뒤에 app.component(...)`,good:`mount 이전에 등록`,why:`이미 화면을 그린 뒤에 등록하면 그 태그를 찾지 못해 "Failed to resolve component" 경고가 뜹니다.`},{bad:`import BaseButton from './BaseButton'`,good:`import BaseButton from './BaseButton.vue'`,why:`.vue 확장자를 빼면 Vite가 파일을 찾지 못합니다. JS 파일과 달리 생략할 수 없습니다.`},{bad:`자주 안 쓰는 컴포넌트까지 전역 등록`,good:`기본은 지역 등록, 앱 전반에 반복되는 소수만 전역`,why:`전역 등록한 컴포넌트는 한 번도 쓰지 않아도 번들에 포함됩니다. 또 태그가 어디서 왔는지 코드만 봐서는 알 수 없어 유지보수가 어려워집니다.`},{why:`Options API에서는 components: { BaseButton } 선언이 필요했습니다. <script setup>에서는 import만으로 끝나므로, 옛날 예제를 보고 따라 하다 헷갈리지 마세요.`}],practiceGuide:[{practice:`Component 등록 — 지역 vs 전역`,do:`1번 영역의 두 버튼을 비교해 보세요.`,see:`"PascalCase 호출"과 "kebab-case 호출" 버튼이 똑같이 생겼습니다.`,why:`같은 컴포넌트를 두 가지 이름으로 부른 것입니다. HTML은 대소문자를 구분하지 않아서 Vue가 두 표기를 모두 받아줍니다.`},{do:`2번 영역의 배지를 보고, 소스 코드(</> 아이콘)를 열어 상단 import 문을 확인해 보세요.`,see:`BaseButton은 import가 있는데 GlobalBadge는 없습니다. 그런데도 화면에는 잘 나옵니다.`,why:`main.js에서 app.component("GlobalBadge", ...) 로 전역 등록했기 때문입니다. 이 사이트에 실제로 등록해 둔 것이라 어느 실습에서든 쓸 수 있습니다.`},{do:`3번 비교표에서 "번들 크기" 줄을 눈여겨보세요.`,see:`전역 등록은 안 써도 포함된다고 적혀 있습니다.`,why:`전역 등록이 편해 보여도 기본은 지역 등록인 이유입니다. 버튼·아이콘처럼 앱 전반에서 수십 번 반복되는 소수만 전역으로 올립니다.`}],extensions:[{practice:`Component 등록 — 지역 vs 전역`,text:`src/components/GlobalBadge.vue 를 열어 색이나 문구를 바꿔 보고, 등록은 그대로인데 화면만 바뀌는지 확인해 보세요.`},{practice:`Component 등록 — 지역 vs 전역`,text:`main.js의 app.component(...) 줄을 주석 처리하면 어떤 경고가 뜨는지 콘솔에서 확인해 보세요.`},{practice:`Component 등록 — 지역 vs 전역`,text:`전역 등록을 체이닝(.component(...).component(...))으로 두 개 이어 붙여 보세요.`},{practice:`Component 등록 — 지역 vs 전역`,text:`부모-자식-손자 3단 구조를 만들고, 손자가 부모의 변수를 직접 쓸 수 없다는 것을 확인해 보세요.`}],practices:[`ComponentRegistrationPractice`],status:`done`},{id:7,chapterId:4,label:`Code Challenge 07`,title:`컴포넌트 생명주기`,slidePage:`136쪽`,studyRange:`128~135쪽`,goal:`Lifecycle Hook이 호출되는 순서와 각 시점에 할 일을 확인합니다.`,lecture:{intro:`컴포넌트도 사람처럼 태어나고 사라집니다. "화면에 나타난 직후"에 데이터를 불러오고, "사라지기 직전"에 뒷정리를 해야 합니다. Lifecycle Hook은 그 순간마다 Vue가 불러주는 알림입니다. 특히 onMounted에서 켠 것은 onUnmounted에서 꼭 꺼야 합니다.`,summary:`컴포넌트는 생성 → 마운트 → 업데이트 → 해제의 생애를 가지며, 각 시점에 끼어들 수 있는 함수가 Lifecycle Hook입니다.`,points:[`**onMounted()는 화면에 그려진 직후** 실행된다. 초기 데이터 로딩·DOM 접근은 여기서.`,`**onMounted에서 켠 것은 onUnmounted에서 반드시 끈다.** 안 하면 메모리 누수가 생긴다.`,`onUpdated()는 반응형 데이터 변경으로 화면이 다시 그려진 뒤 실행된다.`],syntax:[{code:`onMounted(() => {
  timer = setInterval(tick, 1000)
})

onUnmounted(() => {
  clearInterval(timer)   // 정리 필수
})`,parts:[{token:`onMounted(...)`,role:`Vue 내장 함수. 'vue'에서 import 필요`},{token:`() => {...}`,role:`인자로 넘기는 콜백. 그 시점에 실행할 코드`},{token:`timer`,role:`내가 정하는 이름. 함수 밖에 선언해야 정리할 때 접근할 수 있다`},{token:`setInterval(tick, 1000)`,role:`1000ms마다 tick을 실행. 타이머 id를 돌려준다`},{token:`clearInterval(timer)`,role:`그 id로 타이머를 끈다`}],returns:`onMounted 자체는 값을 돌려주지 않는다. 콜백에서 return 한 값도 쓰이지 않는다. setInterval만 타이머 id(숫자)를 돌려준다.`,desc:`켰으면 끈다 — 짝을 맞추는 습관.`}]},tasks:[`Lifecycle Hook 예제 작성`,`onMounted()에서 초기 작업 실행`,`onUnmounted()에서 타이머·이벤트 정리`],practiceGuide:[{practice:`Lifecycle Hook — 생성부터 소멸까지`,do:`브라우저 콘솔(F12)을 열고 페이지를 새로고침해 보세요.`,see:`1. [setup] → 2. [onMounted] 순서로 두 줄이 찍힙니다.`,why:`<script setup> 본문이 곧 생성 단계이고, 화면에 붙은 뒤에야 onMounted가 실행됩니다. 그래서 DOM을 만지는 코드는 onMounted 안에 넣어야 합니다.`},{do:`3초쯤 기다렸다가 콘솔을 보세요.`,see:`카운트가 저절로 올라가면서 3. [onUpdated] 가 반복해서 찍힙니다.`,why:`onMounted에서 켠 setInterval이 3초마다 count를 바꾸고, 값이 바뀔 때마다 화면이 다시 그려지기 때문입니다.`},{do:`"수동으로 숫자 올리기"를 눌러 보세요.`,see:`역시 onUpdated가 찍힙니다.`,why:`onUpdated는 "왜 바뀌었는지"를 가리지 않습니다. 반응형 데이터가 바뀌어 화면이 갱신되면 무조건 실행됩니다.`},{do:`"🛑 실습 컴포넌트 파괴하기"를 눌러 보세요.`,see:`4. [onUnmounted] 가 찍히고, 그 뒤로는 onUpdated가 더 이상 나오지 않습니다.`,why:`v-if가 false가 되면서 컴포넌트가 완전히 파괴되었고, onUnmounted에서 clearInterval로 타이머를 껐기 때문입니다.`},{do:`껐다 켜기를 서너 번 반복해 보세요.`,see:`켤 때마다 카운트가 0부터 다시 시작하고, 로그도 1 → 2 순서로 처음부터 다시 찍힙니다.`,why:`v-if로 파괴된 컴포넌트는 다시 켤 때 "새로 태어납니다". 이전 상태는 남지 않습니다. (참고: v-show는 숨기기만 해서 생애가 끝나지 않습니다)`}],pitfalls:[{bad:`onMounted에서 setInterval만 실행`,good:`onUnmounted에서 clearInterval로 정리`,why:`컴포넌트가 사라져도 타이머는 계속 돕니다. 화면을 오갈수록 타이머가 쌓여 메모리 누수와 오작동이 발생합니다.`},{bad:`setup 최상단에서 document.getElementById(...)`,good:`onMounted 안에서 접근`,why:`setup이 실행되는 시점에는 아직 화면이 그려지지 않아 요소를 찾을 수 없습니다(null).`},{bad:`onMounted(async () => {...}) 안에서만 에러 처리 생략`,good:`try-catch로 감싸고 로딩·에러 상태를 함께 관리`,why:`초기 데이터 로딩이 실패하면 화면이 빈 채로 멈춥니다. 사용자에게 상태를 알려줘야 합니다.`},{why:`onUpdated 안에서 반응형 값을 바꾸면 다시 업데이트가 일어나 무한 루프에 빠질 수 있습니다.`}],extensions:[`LifecycleChild.vue의 clearInterval 줄을 잠깐 지우고 껐다 켜기를 반복해 보세요. 꺼둔 컴포넌트의 타이머까지 계속 돌면서 로그가 겹쳐 쏟아집니다 — 이것이 메모리 누수입니다.`,`onMounted에서 1초마다 증가하는 타이머를 만들고, onUnmounted를 지웠다 넣었다 하며 콘솔 로그가 어떻게 달라지는지 확인해 보세요.`,`각 Hook에 console.log를 넣고 실행 순서를 직접 눈으로 확인해 보세요.`,`onMounted에서 가짜 API(setTimeout)를 호출하고, 로딩 중에는 "불러오는 중..."을 보여 주세요.`,`v-if로 컴포넌트를 껐다 켜면서 mounted와 unmounted가 반복 호출되는지 관찰해 보세요.`,`창 크기 변경(resize) 이벤트를 onMounted에서 등록하고 onUnmounted에서 해제해 보세요.`],practices:[`LifecyclePractice`],status:`done`},{id:8,chapterId:4,label:`Code Challenge 08`,title:`Props와 Emits`,slidePage:`152쪽`,studyRange:`137~151쪽`,goal:`부모에서 자식으로는 Props, 자식에서 부모로는 Emits로 데이터를 전달합니다.`,lecture:{intro:`컴포넌트를 나누면 데이터를 어떻게 주고받을지가 문제가 됩니다. Vue의 규칙은 단순합니다. 부모가 자식에게 줄 때는 Props(택배로 내려보내기), 자식이 부모에게 알릴 때는 Emits(손 들고 신호 보내기)입니다. 자식이 받은 Props를 직접 고치는 것은 금지입니다.`,summary:`Vue의 데이터 흐름은 단방향입니다. 부모 → 자식은 Props(속성), 자식 → 부모는 Emits(이벤트)로만 전달합니다.`,points:[`defineProps()로 받을 속성을 선언한다. type과 required를 명시하면 실수를 줄일 수 있다.`,`**Props는 읽기 전용**이다. 자식이 직접 수정하면 안 된다.`,`**부모 → 자식은 Props, 자식 → 부모는 Emits.** 반대 방향은 없다.`,`부모는 자식 태그에 @이벤트명="핸들러"로 받는다.`,`이벤트 이름은 kebab-case(update-query)를 권장한다.`],syntax:[{code:`// 자식
const props = defineProps({ city: { type: Object, required: true } })
const emit  = defineEmits(['select-card'])
emit('select-card', props.city.id)

// 부모
<WeatherCard :city="item" @select-card="onSelect" />`,parts:[{token:`defineProps({...})`,role:`컴파일러 매크로. import 없이 쓸 수 있고 자식에서만 쓴다`},{token:`city`,role:`받을 속성 이름. 부모의 :city 와 이름이 같아야 한다`},{token:`type · required`,role:`검증 옵션. 잘못된 값이 오면 콘솔에 경고가 뜬다`},{token:`defineEmits([...])`,role:`자식이 올려보낼 이벤트 이름 목록을 선언`},{token:`emit('select-card', 값)`,role:`1번째 인자는 이벤트 이름, 2번째부터는 함께 보낼 데이터`},{token:`@select-card="onSelect"`,role:`부모가 받는 쪽. emit의 2번째 인자가 onSelect의 매개변수로 들어온다`}],returns:`defineProps는 props 객체를, defineEmits는 emit 함수를 돌려준다. emit() 자체는 값을 돌려주지 않는다.`,desc:`내려줄 때는 :prop, 올려받을 때는 @event.`}]},tasks:[`부모에서 자식으로 Props 전달`,`자식에서 부모로 Emits 이벤트 전달`],practiceGuide:[{practice:`데이터는 어느 쪽으로 흐르나 — Props ↓ / Emits ↑`,do:`부모의 입력칸에 글자를 쳐 보세요.`,see:`아래쪽 ↓ props 화살표가 초록으로 켜지고, 자식의 props.message가 따라 바뀝니다.`,why:`부모가 값을 바꾸면 그 값이 자식으로 내려갑니다. 이것이 Props입니다. 방향은 항상 부모 → 자식 한 쪽뿐입니다.`},{do:`자식의 "부모에게 신호 보내기 (emit)" 버튼을 눌러 보세요.`,see:`이번엔 ↑ emits 화살표가 파랗게 켜지고, 부모의 "받은 신호"가 채워집니다.`,why:`자식이 부모에게 값을 전달하는 유일한 방법입니다. 자식이 부모 값을 직접 건드린 게 아니라 신호만 올려보낸 것입니다.`},{do:`아래 "주고받은 기록"을 보세요.`,see:`↓ 내려감 / ↑ 올라감 이 번갈아 쌓입니다.`,why:`두 방향이 각각 다른 문법(props / emit)으로 이루어진다는 점만 기억하면 절반은 끝난 셈입니다.`},{practice:`Props는 읽기 전용 — 값의 주인은 부모다`,do:`❌ "직접 바꾸기" 버튼을 눌러 보세요.`,see:`빨간 문구로 "실패 — 값은 그대로 0 입니다"가 뜨고 숫자가 안 바뀝니다.`,why:`Props 객체는 읽기 전용이라 자식의 대입이 무시됩니다. 콘솔(F12)에는 target is readonly 경고가 찍힙니다.`},{do:`✅ "부모에게 요청" 버튼을 눌러 보세요.`,see:`부모와 자식의 숫자가 함께 1 올라갑니다.`,why:`자식은 emit으로 요청만 했고 실제로 count를 올린 것은 부모의 increase 함수입니다. 값을 바꾸는 주체는 언제나 그 값을 가진 쪽입니다.`},{do:`두 버튼을 번갈아 여러 번 눌러 보세요.`,see:`❌ 쪽은 아무리 눌러도 숫자가 그대로입니다.`,why:`"자식이 값을 못 바꾼다"가 규칙이 아니라 실제 동작임을 확인하는 부분입니다. 이 제약 덕분에 값이 어디서 바뀌었는지 항상 추적할 수 있습니다.`},{practice:`Props & Emits — 부모와 자식의 대화`,do:`초록 테두리(부모)와 파란 점선(자식) 안의 문장을 비교해 보세요.`,see:`두 곳에 똑같이 "Parent 초기 메시지"가 적혀 있습니다.`,why:`부모가 가진 message를 :parent-data로 내려보냈기 때문입니다. 자식은 그 값을 읽기만 합니다.`},{do:`"상위 컴포넌트로 갱신 요청 (Emit)"을 눌러 보세요.`,see:`자식 안에서 눌렀는데 부모의 문장까지 함께 바뀝니다.`,why:`자식은 값을 직접 고치지 않았습니다. emit("update-request", 새값)으로 신호만 보냈고, 실제로 message를 바꾼 것은 부모의 handleUpdateRequest 함수입니다.`},{do:`소스 코드(</> 아이콘)를 열어 자식의 sendNotification 함수를 보세요.`,see:`payload를 만들어 emit의 두 번째 인자로 넘기고 있습니다.`,why:`이 값이 부모 핸들러의 매개변수(newValue)로 그대로 들어옵니다. 이것이 자식 → 부모로 데이터를 올려보내는 유일한 통로입니다.`},{practice:`형제끼리는 부모를 거쳐야 한다`,do:`형제 A의 "안녕!" 버튼을 눌러 보세요.`,see:`① A → 부모 emit 이 먼저 켜지고, 잠시 뒤 ② 부모 → B props 가 켜지면서 B의 말풍선이 채워집니다.`,why:`A와 B 사이에는 직접 연결된 선이 없습니다(가운데 ✕ 표시). 반드시 부모를 한 번 거쳐야 합니다.`},{do:`소스 코드(</> 아이콘)를 열어 SiblingA와 SiblingB를 확인해 보세요.`,see:`A에는 emit만, B에는 props만 있고 서로를 import한 곳이 없습니다.`,why:`형제는 서로의 존재조차 모릅니다. 이 구조가 복잡해지면 그때 Pinia(6장) 같은 공용 저장소를 씁니다.`}],pitfalls:[{bad:`props.city = 새로운값  (자식에서)`,good:`emit('update-city', 새로운값) 으로 부모에게 요청`,why:`Props는 읽기 전용입니다. 자식이 직접 고치면 경고가 뜨고, 부모가 다시 렌더링할 때 값이 되돌아갑니다.`},{bad:`<WeatherCard city="item" />`,good:`<WeatherCard :city="item" />`,why:`콜론을 빼면 "item"이라는 글자 그대로 전달됩니다. 데이터를 넘길 때는 반드시 v-bind(:)를 씁니다.`},{bad:`defineProps(['city'])`,good:`defineProps({ city: { type: Object, required: true } })`,why:`타입과 필수 여부를 적어두면 잘못된 값이 들어왔을 때 콘솔에서 바로 알 수 있습니다.`},{bad:`emit('selectCard') / @selectCard`,good:`emit('select-card') / @select-card`,why:`HTML 속성은 대소문자를 구분하지 않습니다. 이벤트 이름은 kebab-case로 통일하세요.`},{why:`Props로 객체나 배열을 넘기면 참조가 공유됩니다. 자식이 내부 속성을 바꾸면 경고 없이 부모 데이터까지 바뀌니 주의하세요.`}],extensions:[`PropsEmitsChild.vue에서 parentData를 직접 바꾸는 코드를 넣어 보세요(예: parentData = "테스트"). 콘솔에 Props 변경 경고가 뜨고 화면은 바뀌지 않습니다 — Props가 읽기 전용이라는 증거입니다.`,`숫자와 증감 버튼을 가진 Counter 컴포넌트를 만들고, 값은 부모가 관리하도록 Props/Emits로 연결해 보세요.`,`Props에 default 값을 지정하고, 부모가 값을 안 넘겼을 때 어떻게 되는지 확인해 보세요.`,`validator 옵션으로 "양수만 허용"하는 Props를 만들고 음수를 넘겨 경고를 확인해 보세요.`,`defineModel()을 찾아보고 v-model을 컴포넌트에 직접 쓰는 방법을 실험해 보세요.`,`자식이 여러 이벤트(select · delete · edit)를 올리도록 만들고 부모에서 각각 처리해 보세요.`],practices:[`PropsFlowPractice`,`PropsReadonlyPractice`,`PropsEmitsPractice`,`SiblingTalkPractice`],status:`done`},{id:24,chapterId:4,label:`개념 정리`,title:`Provide & Inject — Props Drilling 건너뛰기`,slidePage:`150~151쪽`,studyRange:`150~151쪽`,goal:`계층이 깊을 때 중간 컴포넌트를 건너뛰고 조상의 값을 후손이 직접 꺼내 쓰는 방법을 확인합니다.`,lecture:{intro:`3층 건물에서 1층 사람이 3층 사람에게 물건을 전하려면 2층을 거쳐야 합니다. 그런데 2층 사람은 그 물건이 뭔지도 모르고 관심도 없는데 계속 받아서 올려야 하죠. 이게 **Props Drilling**입니다. provide/inject는 1층과 3층 사이에 **직통 엘리베이터**를 놓는 것입니다.`,summary:`Props Drilling은 중간 컴포넌트들이 자기는 쓰지도 않는 데이터를 오직 아래로 전달하기 위해 받아야 하는 현상입니다. provide/inject는 중간 계층을 완전히 건너뛰고, 조상이 선언한 반응형 상태를 후손이 직접 결합해 사용하는 방식입니다.`,points:[`**Props Drilling**: 상위 → 하위 → 최하위로 갈 때, 중간 컴포넌트가 필요 없는 값을 받아 아래로 토스하는 반복.`,"조상은 `provide(키, 값)`으로 등록하고, 후손은 `inject(키)`로 꺼낸다.",`**중간 컴포넌트는 그 값의 존재조차 몰라도 된다.**`,"같은 값이라도 층마다 이름이 다르다: 조부모 `themeColor` → 부모 `props.theme` → 자식 `props.theme`. **provide/inject는 이 중간 이름을 아예 거치지 않는다.**",`provide한 값이 ref면 **반응형이 그대로 유지**된다. 조상이 바꾸면 후손 화면도 바뀐다.`,`키를 문자열로 주고받으므로 **오타가 나면 조용히 undefined**가 된다. inject의 두 번째 인자로 기본값을 주면 안전하다.`,`교안 참고: **전역 상태 관리(Pinia)가 있어서 실무 사용 빈도는 높지 않다.** 개념만 알아두면 된다.`],syntax:[{code:`// GrandParent.vue
import { ref, provide } from 'vue'

const themeColor = ref('dark-mode')

// 주입할 키(Key) 이름과 실제 데이터(Value)를 등록
provide('globalTheme', themeColor)`,parts:[{token:`provide(...)`,role:`Vue 내장 함수. 'vue'에서 import 한다`},{token:`'globalTheme'`,role:`1번째 인자 — 키. 후손이 이 이름으로 찾는다 (내가 정한다)`},{token:`themeColor`,role:`2번째 인자 — 내려보낼 값. ref를 넣으면 반응형이 유지된다`}],returns:`값을 돌려주지 않는다. setup이 실행되는 동안 등록만 해 둔다. 그래서 조건문이나 비동기 안에서 호출하면 안 된다.`,desc:`교안 151쪽 — 조상 쪽 코드.`},{code:`// GrandChild.vue
import { inject } from 'vue'

// 상위 조상이 provide한 키 이름을 지정하여 직접 인젝션
const theme = inject('globalTheme')

// 조상이 없을 때를 대비해 기본값을 주는 것이 안전하다
const safe = inject('globalTheme', '(기본값)')`,parts:[{token:`inject(...)`,role:`Vue 내장 함수. provide와 짝을 이룬다`},{token:`'globalTheme'`,role:`1번째 인자 — 조상이 등록한 키와 철자가 같아야 한다`},{token:`'(기본값)'`,role:`2번째 인자(선택) — 못 찾았을 때 쓸 값`}],returns:`provide된 값을 그대로 돌려준다. ref를 넣었다면 ref가 나오므로 script에서는 .value가 필요하다(template은 자동 언래핑).`,desc:`교안 151쪽 — 후손 쪽 코드. 중간 컴포넌트는 아무것도 하지 않는다.`}]},tasks:[`Props Drilling이 무엇인지 이해`,`조상에서 provide(키, 값)으로 등록`,`후손에서 inject(키)로 꺼내 쓰기`,`중간 컴포넌트가 값을 몰라도 되는 것 확인`,`Pinia와의 역할 차이 파악`],practiceGuide:[{practice:`Provide & Inject — 중간을 건너뛰고 전달하기`,do:`버튼을 누르기 전에, 세 층(조부모 → 부모 → 자식)에 적힌 변수명을 따라가 보세요.`,see:`A는 themeColor → props.theme → props.theme 로 이어지고, B는 부모 칸이 "props : 없음 (0개)" 입니다.`,why:`같은 값이 층마다 이름을 바꿔 내려갑니다. A는 부모를 반드시 거쳐야 하지만, B는 자식이 inject('globalTheme')으로 조부모에게서 바로 꺼냅니다.`},{do:`이제 "테마 바꾸기" 버튼을 누르고 **중간 카드**를 보세요.`,see:`A의 중간 카드만 주황색으로 번쩍입니다. B의 중간은 아무 반응이 없습니다.`,why:`A에서는 값이 중간을 통과해 지나갑니다. B에서는 조상 → 후손 직통이라 중간이 아예 관여하지 않습니다. 이것이 Props Drilling과 provide/inject의 결정적 차이입니다.`},{do:`최하위 카드 두 개를 보세요.`,see:`색이 동시에 바뀝니다(어두운 카드 ↔ 밝은 카드).`,why:`경로는 완전히 다른데 도착한 결과는 같습니다. provide에 ref를 넣었기 때문에 반응형이 그대로 유지됩니다.`},{do:`소스 코드(</> 아이콘)를 열어 InjectMid의 script를 보세요.`,see:`defineProps가 아예 없고 주석 한 줄만 있습니다.`,why:`중간이 값을 전혀 모른다는 뜻입니다. 계층이 5단계면 A는 중간 4곳을 전부 고쳐야 하지만 B는 조상과 후손만 고치면 됩니다.`}],pitfalls:[{bad:`provide('globalTheme', …) / inject('globalThem')`,good:`키 문자열을 정확히 일치시킨다`,why:`오타가 나면 에러가 아니라 조용히 undefined가 됩니다. 화면만 비어 보여서 원인 찾기가 어렵습니다.`},{bad:`inject('globalTheme')`,good:`inject('globalTheme', '기본값')`,why:`조상이 없는 곳에서 쓰이면 undefined가 됩니다. 두 번째 인자로 기본값을 주면 그런 상황에서도 화면이 깨지지 않습니다.`},{bad:`provide를 조건문·setTimeout 안에서 호출`,good:`setup 최상단에서 바로 호출`,why:`provide는 컴포넌트가 만들어지는 동안에만 등록됩니다. 나중에 호출하면 후손이 찾지 못합니다.`},{bad:`후손이 inject한 값을 마음대로 수정`,good:`조상이 값과 함께 "바꾸는 함수"도 provide`,why:`누가 바꿨는지 추적할 수 없게 됩니다. Props가 읽기 전용인 것과 같은 이유입니다.`},{why:`앱 전체가 함께 쓰는 상태라면 provide/inject보다 Pinia(6장)가 낫습니다. Devtools 지원과 구조가 훨씬 명확합니다.`}],extensions:[{practice:`Provide & Inject — 중간을 건너뛰고 전달하기`,text:`InjectLeaf.vue의 inject 키를 일부러 틀리게 바꿔 보세요(예: globalThem). 기본값이 대신 나오고 콘솔에 injection 경고가 뜹니다.`},{practice:`Provide & Inject — 중간을 건너뛰고 전달하기`,text:`조상에서 값과 함께 toggle 함수도 provide하고, 후손이 그 함수를 호출해 테마를 바꾸도록 만들어 보세요.`},{practice:`Provide & Inject — 중간을 건너뛰고 전달하기`,text:`중간 계층을 하나 더 끼워 4단계로 만들어 보세요. A는 코드가 늘지만 B는 그대로인 것을 확인할 수 있습니다.`},{practice:`Provide & Inject — 중간을 건너뛰고 전달하기`,text:`6장 Pinia를 배운 뒤 같은 기능을 Store로 다시 만들어 보고, 어느 쪽이 읽기 쉬운지 비교해 보세요.`}],practices:[`ProvideInjectPractice`],status:`done`},{id:9,chapterId:4,label:`Code Challenge 09`,title:`Slot`,slidePage:`157쪽`,studyRange:`153~156쪽`,goal:`컴포넌트 안에 내용을 끼워 넣는 Slot의 세 가지 형태를 사용합니다.`,lecture:{intro:`Props가 "값"을 넘기는 것이라면, Slot은 "화면 조각(HTML)"을 통째로 넘기는 것입니다. 액자를 하나 만들어 두고 사진만 바꿔 끼우는 셈이죠. 카드·모달·레이아웃처럼 껍데기는 같고 안쪽만 다른 UI를 만들 때 씁니다.`,summary:`Slot은 컴포넌트에 "구멍"을 뚫어 두고 부모가 그 자리에 내용을 채워 넣게 하는 문법입니다. 껍데기는 재사용하고 알맹이만 바꿉니다.`,points:[`Default Slot: <slot />에 부모가 넣은 내용이 그대로 들어간다.`,`Named Slot: <slot name="header" />처럼 구멍에 이름을 붙여 여러 개를 만든다.`,`Scoped Slot: 자식이 가진 데이터를 부모의 슬롯 내용에 넘겨준다.`],syntax:[{code:`<!-- 자식: BaseCard.vue -->
<div class="card">
  <slot name="header" />
  <slot />
</div>

<!-- 부모 -->
<BaseCard>
  <template #header><h3>제목</h3></template>
  본문 내용
</BaseCard>`,parts:[{token:`<slot />`,role:`이름 없는 기본 구멍. 부모가 그냥 넣은 내용이 여기로 들어온다`},{token:`<slot name="header" />`,role:`이름 붙은 구멍. 여러 개를 만들 수 있다`},{token:`header`,role:`내가 정하는 이름. 부모의 #header 와 정확히 일치해야 한다`},{token:`<template #header>`,role:`부모가 그 구멍을 채우는 문법. v-slot:header 의 축약형`}],returns:`Slot은 값이 아니라 화면 조각(HTML)을 전달한다. 부모가 아무것도 안 넣으면 <slot> 태그 사이에 적어둔 기본 내용이 표시된다.`,desc:`#header 는 v-slot:header 의 축약형이며 <template> 태그에만 붙일 수 있다.`}]},tasks:[`Default Slot`,`Named Slot`,`Scoped Slot`],practiceGuide:[{practice:`Slot — 껍데기는 두고 알맹이만 갈아 끼우기`,do:`1번 영역의 카드 세 개를 비교해 보세요.`,see:`테두리와 배경은 똑같은데 안쪽 내용만 다릅니다. 세 번째 카드에는 "기본 콘텐츠 영역입니다"가 나옵니다.`,why:`같은 SlotDefaultChild를 세 번 썼기 때문입니다. 세 번째는 아무것도 안 넣어서 <slot> 태그 사이에 적어둔 기본값이 나온 것입니다.`},{do:`2번 영역에서 제목과 본문의 위치를 보세요.`,see:`제목이 위, 본문이 아래로 정확히 나뉘어 있습니다.`,why:`자식이 <slot name="header">와 이름 없는 <slot> 두 개의 구멍을 뚫어 뒀고, 부모가 #header로 어느 구멍에 넣을지 지정했기 때문입니다.`},{do:`3번 영역의 주황색 패널에 적힌 값을 보세요.`,see:`"현재 서버 상태 정상"과 "150명"이 표시됩니다.`,why:`이 값들은 부모가 아니라 자식이 가진 데이터입니다. 자식이 <slot :text="message" :count="userCount">로 넘겨줬고, 부모가 v-slot="slotBag"으로 받아 원하는 모양으로 그렸습니다.`},{do:`3번 영역의 두 번째 카드(내용을 안 넣은 것)를 보세요.`,see:`"부모가 마크업을 주입하지 않았을 때의 디폴트 화면"이 나옵니다.`,why:`Scoped Slot도 기본값을 가질 수 있습니다. 부모가 채우지 않으면 자식이 준비해 둔 화면이 나옵니다.`},{practice:`더해보기 ① BaseCard 하나로 화면 3개`,do:`카드 세 장의 **테두리와 구분선**을 비교해 보세요.`,see:`세 장의 껍데기가 완전히 똑같습니다. 세 번째 카드에는 회색 글씨로 "header 구멍 (비어 있음)" 같은 안내가 보입니다.`,why:"세 장 모두 같은 `SlotBaseCard.vue` 한 파일입니다. 껍데기를 고치고 싶으면 그 파일 한 곳만 고치면 세 장이 동시에 바뀝니다."},{do:`두 번째 카드의 아래쪽을 보세요. footer만 비워 둔 카드입니다.`,see:`header와 본문은 채워졌는데 footer 자리에만 회색 기본 안내가 나옵니다.`,why:`**구멍은 각각 따로 기본값을 가집니다.** 부모가 채운 구멍은 채운 대로, 안 채운 구멍은 기본값으로 나옵니다.`},{do:`맨 아래 "그럼 Props로 하면 안 되나?" 칸의 ❌와 ✅ 코드를 비교해 보세요.`,see:'❌ 쪽은 `title="주간 리포트"` 처럼 **글자만** 넘기고, ✅ 쪽은 `<button @click>` 을 통째로 넘깁니다.',why:`**Props는 값, Slot은 화면 조각입니다.** 첫 카드 footer에는 버튼이 들어 있는데, 이건 Props로는 넘길 방법이 없습니다. 버튼 하나만 들어가도 Slot이어야 합니다.`},{practice:`더해보기 ② 같은 목록, 부모가 정하는 세 가지 모습`,do:`A · B · C 세 목록의 **항목 이름**을 비교해 보세요.`,see:`세 목록 모두 "노트북 거치대 · 기계식 키보드 · USB-C 허브" 로 완전히 같습니다.`,why:"데이터는 `SlotItemList.vue` 안에만 있습니다. 부모는 데이터를 하나도 갖고 있지 않습니다."},{do:`C 목록의 "기계식 키보드" 줄을 보세요.`,see:`이름에 취소선이 그어지고 **품절** 배지가 붙어 있습니다. A와 B에는 그런 표시가 없습니다.`,why:"재고가 0인지 판단한 것은 목록이 아니라 **부모**입니다. 목록은 `stock`이 무슨 뜻인지도 모릅니다. 그래서 같은 목록을 쇼핑몰에도 관리자 페이지에도 쓸 수 있습니다."},{do:"소스 코드(</> 아이콘)를 열어 `SlotItemList.vue` 에 `stock` 이라는 글자가 몇 번 나오는지 세어 보세요.",see:`데이터 정의에 한 번 나올 뿐, **화면을 그리는 곳에는 한 번도 안 나옵니다.**`,why:`이것이 Scoped Slot의 목적입니다. 자식은 데이터를 내밀기만 하고, 그 데이터로 무엇을 판단할지는 전부 부모 몫입니다.`},{practice:`더해보기 ③ 모달 하나로 창 두 개`,do:`"삭제 확인창 열기"를 누르고, 닫은 뒤 "안내창 열기"를 눌러 보세요.`,see:`덮이는 방식·가운데 정렬·✕ 버튼이 두 창 모두 똑같습니다.`,why:"두 창 모두 같은 `SlotModal.vue` 입니다. 껍데기 로직(덮기·닫기)은 한 번만 만들면 됩니다."},{do:`두 창의 **아래쪽 버튼 줄**을 비교해 보세요.`,see:`확인창은 [취소] [삭제] 두 개, 안내창은 [닫기] 하나입니다.`,why:"확인창은 `#actions` 를 직접 채웠고, **안내창은 채우지 않았습니다.** 그래서 SlotModal이 준비해 둔 기본 닫기 버튼이 나온 것입니다."},{do:`확인창에서 [삭제]를 눌러 보세요.`,see:`창이 닫히고 "삭제했습니다."가 표시됩니다.`,why:'`@click="remove"` 는 **부모가 슬롯 안에 넣은 것**이라 부모의 함수가 그대로 실행됩니다. 모달은 삭제가 뭔지 전혀 모릅니다. Props로는 이런 동작을 넘길 수 없습니다.'}],pitfalls:[{bad:`<slot name="header" /> 인데 부모는 <template #head>`,good:`이름을 정확히 일치시킨다 (#header)`,why:`이름이 다르면 조용히 아무것도 안 나옵니다. 에러가 없어서 찾기 어렵습니다.`},{bad:`<BaseCard></BaseCard>  (내용 없음)`,good:`<slot>기본 내용</slot> 으로 대비`,why:`부모가 아무것도 안 넣으면 빈 영역이 됩니다. slot 태그 사이에 기본값을 적어두면 안전합니다.`},{bad:`Slot 안에서 자식의 데이터를 그냥 사용`,good:`<slot :item="item" /> + <template #default="{ item }">`,why:`Slot 내용은 부모 범위에서 컴파일되므로 자식의 변수를 볼 수 없습니다. 넘겨줘야 쓸 수 있습니다(Scoped Slot).`},{why:`#header 는 v-slot:header 의 축약형입니다. #은 <template> 태그에만 붙일 수 있습니다.`}],extensions:[`BaseCard에 #aside 구멍을 하나 더 뚫고, 부모가 채운 카드와 비운 카드를 나란히 두어 보세요.`,`목록의 슬롯에 item 말고 index도 함께 넘겨(<slot :item :index />) 부모가 번호를 붙이게 해 보세요.`,`모달의 #actions 버튼에서 emit을 올려, 어떤 버튼을 눌렀는지 부모가 알게 해 보세요.`,`Named Slot 이름을 일부러 틀리게 써 보세요(#actions → #action). 에러 없이 조용히 기본값이 나오는 것을 확인하세요.`,`슬롯 안에서 자식의 변수를 v-slot 없이 그냥 써 보세요. 왜 안 되는지 콘솔 에러로 확인해 보세요.`],practices:[`SlotPractice`,`SlotBaseCardPractice`,`SlotListPractice`,`SlotModalPractice`],status:`done`},{id:10,chapterId:6,label:`Code Challenge 10`,title:`Pinia Store`,slidePage:`190쪽`,studyRange:`179~189쪽`,goal:`Pinia를 등록하고 Store를 만들어 여러 컴포넌트에서 공유합니다.`,lecture:{intro:`Props와 Emits로 데이터를 넘기다 보면, 손자에게 값을 주려고 아들을 거쳐야 하는 상황이 생깁니다(Props Drilling). Pinia는 건물 로비의 공용 사물함입니다. 누구든 층수와 상관없이 바로 열어보고 넣을 수 있어서, 로그인 정보나 설정처럼 앱 전체가 쓰는 값을 담습니다.`,summary:`Pinia는 여러 컴포넌트가 함께 쓰는 데이터를 담는 공용 사물함입니다. state(데이터) · getters(계산값) · actions(동작)로 구성됩니다.`,points:[`main.js에서 app.use(createPinia())로 등록한다.`,`stores/counter.js에서 defineStore()로 만든다. 이름은 use~Store 규칙을 따른다.`,"state를 그냥 구조 분해하면 **반응성이 끊긴다. `storeToRefs()`로 감싼다.**",`actions는 state를 바꾸는 함수이며 this 없이 직접 접근한다.`],syntax:[{code:`export const useCounterStore = defineStore('counter', {
  state:   () => ({ count: 0 }),
  getters: { double: (s) => s.count * 2 },
  actions: { increase() { this.count++ } },
})

const store = useCounterStore()
const { count } = storeToRefs(store)   // 반응성 유지`,parts:[{token:`useCounterStore`,role:`내가 정하는 이름. use~Store 관례를 따른다`},{token:`defineStore(...)`,role:`Pinia 함수. 인자를 두 개 받는다`},{token:`'counter'`,role:`1번째 인자 — 스토어의 고유 id. Devtools에 이 이름으로 표시된다`},{token:`{ state, getters, actions }`,role:`2번째 인자 — 스토어 설계도`},{token:`state: () => ({...})`,role:`반드시 객체를 돌려주는 함수여야 한다`},{token:`getters`,role:`computed에 해당. 1번째 매개변수로 state를 받는다`},{token:`actions`,role:`메서드. 여기서는 this로 state에 접근한다`},{token:`storeToRefs(store)`,role:`state·getters를 반응성을 유지한 채 꺼내는 함수`}],returns:`defineStore는 "스토어를 꺼내는 함수"를 돌려준다. 그래서 컴포넌트에서 useCounterStore() 처럼 한 번 더 호출해야 실제 스토어가 나온다.`,desc:`storeToRefs를 빼먹는 것이 가장 흔한 실수. actions는 그냥 store.increase 로 쓴다.`}]},tasks:[`main.js에 Pinia 등록`,`stores/counter.js에 Store 생성`,`StoreCounter.vue에서 Store 사용`,`Vue Devtools에서 Pinia 상태 확인`],pitfalls:[{bad:`const { count } = useCounterStore()`,good:`const { count } = storeToRefs(useCounterStore())`,why:`그냥 구조 분해하면 값만 복사되어 반응성이 끊깁니다. 화면이 갱신되지 않는 원인 1위입니다.`},{bad:`storeToRefs(store).increase`,good:`store.increase  (actions는 그대로)`,why:`storeToRefs는 state와 getters에만 씁니다. actions는 함수라 그냥 꺼내 써도 됩니다.`},{bad:`state: { count: 0 }`,good:`state: () => ({ count: 0 })`,why:`state는 반드시 객체를 돌려주는 함수여야 합니다. 그래야 인스턴스마다 값이 섞이지 않습니다.`},{bad:`main.js에 app.use(createPinia()) 누락`,good:`createApp(App).use(createPinia()).mount("#app")`,why:`등록하지 않으면 useStore 호출 시점에 "no active Pinia" 오류가 납니다.`},{why:`스토어 이름은 use로 시작하고 Store로 끝내는 관례(useCounterStore)를 지키면 협업할 때 헷갈리지 않습니다.`}],extensions:[`다크모드 on/off를 Pinia로 관리하고, 여러 화면에서 동시에 반영되는지 확인해 보세요.`,`getters로 "장바구니 총액"처럼 state에서 파생되는 값을 만들어 보세요.`,`localStorage에 값을 저장했다가 새로고침 후 복원하는 로직을 action에 넣어 보세요.`,`Vue Devtools의 Pinia 탭에서 state를 직접 수정하고 화면이 따라 바뀌는지 확인해 보세요.`,`스토어를 두 개(예: authStore, configStore) 만들고 역할을 나눠 보세요.`],practices:[],status:`todo`},{id:11,chapterId:7,label:`Code Challenge 11`,title:`Axios와 날씨 API`,slidePage:`208쪽`,studyRange:`193~207쪽`,goal:`Axios로 OpenWeather API를 호출해 실제 데이터를 받아옵니다.`,lecture:{intro:`지금까지 화면에 쓴 데이터는 전부 우리가 직접 적어둔 가짜였습니다. 이제 진짜 서버에 전화를 걸어 실제 날씨를 받아옵니다. Axios가 그 전화기입니다. 다만 전화는 즉시 끝나지 않으므로, 응답을 기다리는 동안 "불러오는 중" 화면을 보여주는 처리가 함께 필요합니다.`,summary:`Axios는 서버와 JSON 데이터를 주고받는 HTTP 클라이언트입니다. fetch보다 편해서(JSON 자동 변환·에러 처리·인터셉터) 실무 표준으로 쓰입니다.`,points:[`npm install axios 로 설치한다.`,"**응답의 알맹이는 `res.data`** 안에 들어 있다.",`async/await + try-catch-finally 로 로딩·에러 상태를 함께 관리한다.`,"**API Key는 소스에 직접 쓰지 말고 `.env`로 분리**한다. 과제 평가 항목이다."],syntax:[{code:`try {
  isLoading.value = true
  const res = await axios.get(url, { params: { q: city } })
  data.value = res.data          // 알맹이는 res.data
} catch (e) {
  error.value = e.message
} finally {
  isLoading.value = false
}`,parts:[{token:`try / catch / finally`,role:`JavaScript 문법. 실패할 수 있는 코드를 감싼다`},{token:`await`,role:`응답이 올 때까지 기다린다. async 함수 안에서만 쓸 수 있다`},{token:`axios.get(url, 설정)`,role:`1번째 인자는 주소, 2번째는 옵션 객체`},{token:`params: { q: city }`,role:`쿼리스트링이 된다. ?q=서울 로 변환되어 붙는다`},{token:`res.data`,role:`응답의 알맹이. res 자체에는 status·headers도 함께 들어 있다`},{token:`e.message`,role:`catch가 받는 에러 객체의 설명 문자열`}],returns:`axios.get()은 Promise를 돌려주고, await를 붙이면 응답 객체(res)가 나온다. res 안에는 data · status · headers 등이 들어 있다.`,desc:`finally에서 로딩 해제 — 성공/실패 모두 실행된다.`}]},tasks:[`Axios 설치`,`OpenWeather 가입 및 API Key 발급`,`Axios Weather 예제 작성`,`Axios JSON Placeholder 예제 작성`],pitfalls:[{bad:`data.value = res`,good:`data.value = res.data`,why:`응답 객체에는 status·headers 등이 함께 들어 있습니다. 실제 알맹이는 res.data입니다.`},{bad:`const KEY = 'abc123' 을 소스에 직접 작성`,good:`import.meta.env.VITE_API_KEY 로 분리 + .gitignore`,why:`API 키가 GitHub에 공개되면 남이 내 할당량을 쓰고 요금이 청구될 수 있습니다. 제출 평가 항목이기도 합니다.`},{bad:`await 없이 axios.get(...) 결과를 바로 사용`,good:`const res = await axios.get(...)`,why:`await를 빼면 Promise 객체가 담겨 화면에 [object Promise]가 나옵니다.`},{bad:`try만 쓰고 finally 생략`,good:`finally에서 isLoading = false`,why:`요청이 실패했을 때 로딩 표시가 영원히 사라지지 않습니다. finally는 성공·실패 모두 실행됩니다.`},{why:`OpenWeather API 키는 발급 직후 몇 십 분간 활성화되지 않을 수 있습니다. 401 오류가 나면 조금 기다렸다 다시 시도하세요.`}],extensions:[`로딩 중 스피너, 실패 시 에러 메시지, 성공 시 데이터 — 세 가지 상태를 v-if로 나눠 보세요.`,`검색어를 입력하면 도시 날씨를 불러오도록 만들고, 없는 도시를 입력했을 때 404 처리를 해 보세요.`,`axios.create()로 baseURL과 timeout을 설정한 인스턴스를 만들어 보세요.`,`여러 도시의 날씨를 Promise.all로 한꺼번에 불러와 보세요.`,`응답 데이터를 그대로 쓰지 말고, 화면에 필요한 형태로 가공하는 함수를 따로 만들어 보세요.`],practices:[],status:`todo`},{id:12,chapterId:8,label:`Code Challenge 12`,title:`Element Plus — 회원가입 폼`,slidePage:`225쪽`,studyRange:`214~215쪽 · 218~219쪽 · 223쪽`,goal:`el-card·el-input·el-switch로 폼을 만들고 ElMessage로 검증 결과를 안내합니다.`,lecture:{intro:`버튼 하나를 예쁘게 만들려면 CSS를 한참 써야 합니다. Element Plus는 이미 잘 만들어진 버튼·입력창·달력·표를 가져다 쓰는 것입니다. 이케아 가구처럼 조립만 하면 됩니다. 설치하고 main.js에 등록하면 <el-button> 같은 태그를 바로 쓸 수 있습니다.`,summary:`Element Plus는 이미 만들어진 UI 컴포넌트 모음입니다. 설치 후 main.js에 등록하면 <el-> 태그를 바로 쓸 수 있습니다.`,points:[`npm install element-plus 후 main.js에서 import + app.use(ElementPlus).`,`CSS도 함께 import 해야 스타일이 적용된다.`,`ElMessage는 태그가 아니라 함수로 호출하는 알림이다.`],syntax:[{code:`import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

ElMessage.error('이메일 형식이 올바르지 않습니다.')`,parts:[{token:`ElementPlus`,role:`내가 정하는 이름(default import라 자유롭게 지을 수 있다)`},{token:`'element-plus/dist/index.css'`,role:`스타일시트. 이 줄을 빼먹으면 디자인이 하나도 안 입혀진다`},{token:`app.use(...)`,role:`Vue 플러그인 등록. main.js에서 한 번만 실행`},{token:`ElMessage.error(...)`,role:`태그가 아니라 함수. error·warning·success·info 네 종류`}],returns:`app.use()는 app 객체를 그대로 돌려줘서 체이닝이 가능하다. ElMessage 계열은 알림 인스턴스를 돌려주지만 보통 쓰지 않는다.`,desc:`CSS import를 빼먹으면 스타일이 깨진다.`}]},tasks:[`userForm에 email·agree 상태 만들기`,`이메일에 @가 없으면 ElMessage.error 표시`,`약관 미동의 시 ElMessage.warning 표시`,`검증 성공 시 ElMessage.success 표시`,`el-card · el-input · el-switch · el-button 사용`],pitfalls:[{bad:`import ElementPlus from 'element-plus' 만 작성`,good:`import 'element-plus/dist/index.css' 도 함께`,why:`CSS를 빼먹으면 컴포넌트는 동작하지만 스타일이 하나도 안 입혀져 깨져 보입니다. 가장 흔한 첫 실수입니다.`},{bad:`<ElMessage>오류</ElMessage>`,good:`ElMessage.error('오류')`,why:`ElMessage는 태그가 아니라 script에서 호출하는 함수입니다.`},{bad:`v-model 없이 el-input에 :value만`,good:`v-model="userForm.email"`,why:`Element Plus 컴포넌트도 v-model을 그대로 지원합니다. 굳이 직접 이벤트를 연결할 필요가 없습니다.`},{why:`전체 등록(app.use)은 편하지만 번들 용량이 커집니다. 실무에서는 쓰는 컴포넌트만 골라 등록하는 방식도 고려합니다.`}],extensions:[`el-form의 rules 옵션으로 직접 짠 검증 로직을 대체해 보세요.`,`비밀번호 확인 필드를 추가하고 두 값이 다르면 경고를 띄워 보세요.`,`el-dialog로 가입 완료 팝업을 만들어 보세요.`,`기존에 만든 날씨 검색창을 el-input + el-button으로 바꿔 보세요.`,`el-loading을 API 호출 중에 표시해 보세요.`],practices:[],status:`todo`},{id:13,chapterId:8,label:`Code Challenge 13`,title:`Element Plus — 상품 수량과 별점`,slidePage:`226쪽`,studyRange:`216~221쪽`,goal:`el-input-number와 el-rate로 상품 UI를 구성합니다.`,lecture:{intro:`수량 입력칸과 별점은 직접 만들면 은근히 손이 많이 갑니다(플러스/마이너스 버튼, 최솟값 제한, 별 채우기…). Element Plus는 el-input-number와 el-rate로 이걸 한 줄에 끝냅니다. v-model만 연결하면 됩니다.`,summary:`Basic·Form·Data 카테고리의 컴포넌트를 조합해 상품 카드를 만듭니다.`,points:[`el-input-number는 v-model로 숫자 상태와 직접 연결된다.`,`el-rate는 별점 값을 숫자로 관리한다.`],syntax:[{code:`const productQuantity = ref(1)
const productRate = ref(4)

<el-input-number v-model="productQuantity" :min="1" />
<el-rate v-model="productRate" />`,parts:[{token:`productQuantity`,role:`내가 정하는 이름. 숫자로 초기화해야 한다`},{token:`<el-input-number>`,role:`Element Plus가 제공하는 컴포넌트 태그`},{token:`v-model`,role:`평범한 input과 똑같이 양방향 연결된다`},{token:`:min="1"`,role:`콜론 필수. 없으면 문자열 "1"이 전달된다`}],returns:`컴포넌트라서 값을 돌려주지 않는다. 대신 v-model로 연결된 ref 값이 사용자의 조작에 따라 갱신된다.`,desc:`Element Plus 컴포넌트도 v-model을 그대로 지원한다.`}]},tasks:[`productQuantity 초깃값 1로 설정`,`productRate 초깃값 4로 설정`,`el-card · el-input-number 등으로 상품 UI 구성`],pitfalls:[{bad:`<el-input-number v-model="qty" />  (최솟값 없음)`,good:`<el-input-number v-model="qty" :min="1" />`,why:`제한이 없으면 수량이 0이나 음수까지 내려갑니다. :min과 :max를 함께 지정하세요.`},{bad:`const qty = ref("1")`,good:`const qty = ref(1)`,why:`el-input-number는 숫자를 다룹니다. 문자열로 초기화하면 계산할 때 문제가 생깁니다.`},{bad:`:min="1" 을 min="1" 으로 작성`,good:`:min="1"`,why:`콜론이 없으면 숫자 1이 아니라 문자열 "1"이 전달됩니다.`}],extensions:[`수량 × 단가로 총액을 computed로 계산해 표시해 보세요.`,`el-rate에 show-score와 텍스트 옵션을 붙여 "4.0점"까지 보여 주세요.`,`상품 여러 개를 v-for로 카드 목록으로 만들어 보세요.`,`재고보다 많은 수량을 고르면 경고를 띄우도록 watch를 붙여 보세요.`],practices:[],status:`todo`},{id:14,chapterId:8,label:`Code Challenge 14`,title:`Element Plus — 삭제 확인과 진행률`,slidePage:`227쪽`,studyRange:`220~223쪽`,goal:`ElMessageBox로 확인 창을 띄우고 el-progress로 진행률을 표시합니다.`,lecture:{intro:`"정말 삭제하시겠습니까?" 창은 사용자의 대답을 기다려야 합니다. 언제 대답할지 모르니 Promise로 처리합니다. 확인을 누르면 then, 취소를 누르면 catch로 갈라집니다. 진행률 바는 setInterval로 숫자를 올리되, 끝나면 반드시 타이머를 꺼야 합니다.`,summary:`ElMessageBox.confirm()은 Promise를 반환하므로 then/catch 또는 await로 사용자의 선택을 처리합니다.`,points:[`확인은 then(또는 await 성공), 취소는 catch로 들어온다.`,`setInterval로 만든 타이머는 100 도달 시 clearInterval로 반드시 정리한다.`],syntax:[{code:`ElMessageBox.confirm('삭제하시겠습니까?')
  .then(() => ElMessage.success('삭제됨'))
  .catch(() => ElMessage.info('취소됨'))`,parts:[{token:`ElMessageBox.confirm(...)`,role:`Element Plus 함수. 확인 창을 띄운다`},{token:`'삭제하시겠습니까?'`,role:`1번째 인자 — 사용자에게 보여줄 메시지`},{token:`.then(...)`,role:`사용자가 "확인"을 눌렀을 때 실행`},{token:`.catch(...)`,role:`사용자가 "취소"를 눌렀을 때 실행. 생략하면 콘솔 에러`}],returns:`Promise를 돌려준다. 확인이면 이행(resolve), 취소면 거부(reject)로 갈라진다. async 함수 안에서는 await + try-catch로도 쓸 수 있다.`,desc:`취소도 catch로 잡아야 콘솔 에러가 안 난다.`}]},tasks:[`ElMessageBox.confirm()으로 삭제 확인`,`삭제·취소 결과를 ElMessage로 안내`,`downloadProgress · isDownloading 반응형 상태 만들기`,`setInterval로 진행률 20씩 증가`,`100 도달 시 타이머 정리 및 완료 메시지`],pitfalls:[{bad:`ElMessageBox.confirm(...).then(...)  (catch 없음)`,good:`.then(...).catch(...) 둘 다 작성`,why:`취소는 "거부된 Promise"로 처리됩니다. catch가 없으면 콘솔에 Uncaught 오류가 찍힙니다.`},{bad:`100% 도달 후에도 setInterval 유지`,good:`clearInterval(timer)로 정리`,why:`타이머가 계속 돌면서 값이 100을 넘어가고, 화면을 벗어나도 멈추지 않습니다.`},{bad:`다운로드 중에도 버튼을 계속 누를 수 있음`,good:`:disabled="isDownloading"`,why:`중복 실행되면 타이머가 여러 개 돌아 진행률이 두 배로 뜁니다.`},{why:`let timer는 함수 밖 스코프에 두세요. onUnmounted에서도 정리하려면 접근할 수 있어야 합니다.`}],extensions:[`진행률이 100%가 되면 el-progress의 status를 success로 바꿔 보세요.`,`"취소" 버튼을 만들어 진행 중인 타이머를 중단해 보세요.`,`삭제 확인을 async/await + try-catch 방식으로 바꿔 보세요.`,`목록에서 항목을 삭제할 때 확인 창을 띄우고 실제로 배열에서 제거해 보세요.`,`onUnmounted에서 타이머를 정리하고, 화면을 빠르게 오갈 때 문제가 없는지 확인해 보세요.`],practices:[],status:`todo`},{id:15,chapterId:9,label:`Code Challenge 15`,title:`데이터 추출과 포맷팅`,slidePage:`247쪽`,studyRange:`234쪽 · 235쪽 · 241쪽`,goal:`구조 분해 할당과 템플릿 리터럴로 데이터를 뽑아 문자열로 조립합니다.`,lecture:{intro:`지금까지 Vue 코드에서 계속 보이던 낯선 문법들을 정리하는 챕터입니다. 구조 분해는 택배 상자에서 필요한 물건만 꺼내는 것이고, 템플릿 리터럴은 문자열 사이에 값을 끼워 넣는 문법입니다. 둘 다 알고 나면 코드가 훨씬 짧아집니다.`,summary:"구조 분해 할당은 객체·배열에서 필요한 값만 골라 변수로 꺼내는 문법이고, 템플릿 리터럴은 백틱과 ${}로 문자열을 조립하는 문법입니다.",points:[`중첩 객체도 한 줄로 분해할 수 있다: const { grade, details: { score } } = raw`,`includes()는 배열에 특정 값이 있는지 boolean으로 알려준다.`,"템플릿 리터럴 안에서는 ${}로 표현식을 넣는다."],syntax:[{code:"const { grade, details: { score } } = rawData\nconst msg = `등급: ${grade} / 점수: ${score}점`",parts:[{token:`const { grade }`,role:`식별자. 객체의 grade 키와 이름이 같아야 꺼내진다`},{token:`details: { score }`,role:`중첩 분해. 콜론 뒤에 한 겹 더 들어간다 (details 변수는 안 생김)`},{token:`= rawData`,role:`분해할 원본 객체`},{token:"`백틱`",role:`템플릿 리터럴. 작은따옴표가 아니다`},{token:"${grade}",role:`문자열 안에 값을 끼워 넣는 자리. 표현식도 가능`}],returns:`구조 분해는 값을 복사해 새 변수를 만든다(원본은 그대로). 템플릿 리터럴은 조립된 문자열 하나를 만든다.`,desc:`중첩 분해 + 템플릿 리터럴.`}]},tasks:[`members.includes('박부산') 결과를 memberContainsPark에 저장`,`rawData에서 grade와 details.score를 구조 분해로 한 줄 추출`,`템플릿 리터럴로 결과 문자열 조립`],pitfalls:[{bad:`'점수: ' + score + '점'`,good:"`점수: ${score}점`",why:"+ 연결은 따옴표와 공백을 놓치기 쉽습니다. 템플릿 리터럴은 백틱(`)을 쓰며 작은따옴표가 아닙니다."},{bad:`const { details.score } = rawData`,good:`const { details: { score } } = rawData`,why:`중첩 객체를 분해할 때는 콜론으로 한 단계 더 들어갑니다. 점 표기법은 쓸 수 없습니다.`},{bad:`const { name } = undefined`,good:`const { name } = rawData ?? {}`,why:`값이 없는 객체를 분해하면 TypeError로 앱이 멈춥니다.`},{why:`includes()는 대소문자를 구분합니다. 검색 기능에 쓸 때는 양쪽을 toLowerCase()로 맞추세요.`}],extensions:[`날씨 객체에서 도시명·기온·상태만 구조 분해로 꺼내 한 줄 요약 문자열을 만들어 보세요.`,`배열 구조 분해로 [첫째, 둘째] = 배열 형태를 실험해 보세요.`,`함수 매개변수에서 바로 구조 분해하는 형태(function f({ name, age }))를 써 보세요.`,`map()과 템플릿 리터럴을 조합해 목록 문자열을 만들어 보세요.`,`기본값 문법 const { unit = "C" } = config 를 실험해 보세요.`],practices:[],status:`todo`},{id:16,chapterId:9,label:`Code Challenge 16`,title:`불변성 복사와 기본값 방어`,slidePage:`248쪽`,studyRange:`236~238쪽 · 245~246쪽`,goal:`스프레드로 원본을 지키며 복사하고, ?. 와 ?? 로 안전하게 기본값을 씁니다.`,lecture:{intro:`원본을 그대로 두고 복사본을 만드는 것이 불변성입니다. 원본을 직접 고치면 어디서 바뀌었는지 추적이 안 되고 Vue의 반응성도 놓치기 쉽습니다. 그리고 || 와 ?? 의 차이는 실무에서 "재고 0개"가 갑자기 기본값으로 바뀌는 버그로 자주 나타납니다.`,summary:`스프레드(...)는 원본을 건드리지 않고 새 배열/객체를 만듭니다. ??는 null·undefined일 때만 기본값을 쓰므로 0이나 빈 문자열을 보존합니다.`,points:[`push()는 원본을 바꾸지만 [...arr, item]은 새 배열을 만든다 — 반응성에 유리하다.`,"**`||`는 0과 빈 문자열도 기본값으로 바꿔버린다. `??`는 그렇지 않다.**",`?. 는 중간 값이 없으면 에러 대신 undefined를 반환한다.`],syntax:[{code:`const updated = [...cart, 'Orange']
const img   = product?.image ?? '이미지 준비중'
const stock = product.count ?? 0    // count가 0이면 0 유지`,parts:[{token:`[...cart, ...]`,role:`스프레드. 기존 배열을 펼쳐 담고 뒤에 새 항목을 붙인다`},{token:`?.`,role:`Optional Chaining. 앞이 없으면 에러 대신 undefined`},{token:`??`,role:`Nullish 병합. 왼쪽이 null·undefined일 때만 오른쪽을 쓴다`},{token:`product.count ?? 0`,role:`count가 0이어도 0이 유지된다. || 였다면 기본값으로 바뀐다`}],returns:`스프레드는 새 배열/객체를 만들어 돌려준다(원본 불변, 단 한 겹만 복사). ??는 왼쪽 또는 오른쪽 값 하나를 돌려준다.`,desc:`재고 0을 지키려면 || 가 아니라 ?? 를 쓴다.`}]},tasks:[`스프레드로 기존 장바구니 뒤에 'Orange'를 추가한 새 배열 만들기`,`?. 와 ?? 로 이미지가 없을 때 '이미지 준비중' 사용`,`?? 로 재고 값 0이 기본값으로 바뀌지 않게 처리`,`템플릿 리터럴로 결과 문자열 조립`],pitfalls:[{bad:`const stock = product.count || 0`,good:`const stock = product.count ?? 0`,why:`|| 는 0과 빈 문자열도 falsy로 보고 기본값으로 바꿔버립니다. "재고 0개"가 사라지는 대표적인 버그입니다.`},{bad:`cart.push("Orange")`,good:`const updated = [...cart, "Orange"]`,why:`push는 원본을 직접 바꿉니다. 새 배열을 만들면 변경 전후를 비교할 수 있고 예상치 못한 부작용이 줄어듭니다.`},{bad:`const copy = { ...user }  후 copy.address.city 수정`,good:`중첩 객체는 안쪽까지 따로 복사`,why:`스프레드는 한 겹만 복사(얕은 복사)합니다. 안쪽 객체는 원본과 공유되어 함께 바뀝니다.`},{bad:`product.image.url  (image가 없을 때)`,good:`product.image?.url ?? "준비중"`,why:`중간 값이 없으면 TypeError로 앱이 멈춥니다. ?. 는 그 경우 undefined를 돌려줍니다.`}],extensions:[`?? 와 || 를 각각 쓴 코드를 나란히 두고 값에 0, "", null을 넣어 결과를 비교해 보세요.`,`객체 스프레드로 기존 설정에 일부만 덮어쓰는 { ...config, unit: "F" } 를 만들어 보세요.`,`중첩 객체를 얕은 복사한 뒤 안쪽 값을 바꿔 원본까지 바뀌는지 직접 확인해 보세요.`,`Rest 문법 const [first, ...rest] = arr 로 배열을 나눠 보세요.`,`API 응답에 값이 빠져 있는 상황을 가정하고 ?. 와 ?? 로 방어 코드를 짜 보세요.`],practices:[],status:`todo`},{id:17,chapterId:9,label:`Code Challenge 17`,title:`비동기 연쇄 처리`,slidePage:`249쪽`,studyRange:`239~240쪽`,goal:`async/await로 비동기 호출을 순서대로 연결하고 try-catch로 실패를 처리합니다.`,lecture:{intro:`서버 요청은 즉시 끝나지 않습니다. Promise는 "나중에 결과를 줄게"라는 약속이고, await는 "그 결과가 올 때까지 여기서 기다려"라는 뜻입니다. await 덕분에 비동기 코드를 위에서 아래로 읽히는 평범한 코드처럼 쓸 수 있습니다.`,summary:`Promise는 나중에 도착할 값을 담은 약속이고, async/await는 그 약속을 동기 코드처럼 읽히게 만드는 문법입니다.`,points:[`await는 async 함수 안에서만 쓸 수 있다.`,`앞의 결과가 뒤의 입력이 되는 연쇄 호출에 특히 유용하다.`,`에러는 try-catch로 잡는다. 잡지 않으면 Unhandled Rejection이 된다.`],syntax:[{code:`try {
  const { uid }  = await fetchUserId()
  const { nick } = await fetchUserProfile(uid)
  result.value = \`동기화 성공: \${nick}님 환영합니다.\`
} catch {
  result.value = '통신 실패'
}`,parts:[{token:`await`,role:`Promise가 끝날 때까지 기다린다. async 함수 안에서만 사용 가능`},{token:`const { uid }`,role:`구조 분해. 응답 객체에서 uid만 꺼낸다`},{token:`fetchUserProfile(uid)`,role:`앞 결과를 인자로 넘기는 연쇄 호출`},{token:`try { } catch { }`,role:`실패 처리. catch에 매개변수를 안 써도 된다`}],returns:`await를 붙이면 Promise가 "풀린 값"이 나온다. async 함수 자체는 항상 Promise를 돌려주므로, 부르는 쪽에서도 await가 필요하다.`,desc:`연쇄 호출 전체를 하나의 try로 감싼다.`}]},tasks:[`fetchUserId()를 await하고 uid 추출`,`fetchUserProfile(uid)를 이어서 호출하고 nick 추출`,`전체 비동기 로직을 try-catch로 감싸기`,`성공 시 '동기화 성공: [닉네임]님 환영합니다.' 표시`,`실패 시 '통신 실패' 표시`],pitfalls:[{bad:`function load() { const r = await fetch() }`,good:`async function load() { const r = await fetch() }`,why:`await는 async 함수 안에서만 쓸 수 있습니다. 빠뜨리면 문법 오류가 납니다.`},{bad:`const data = fetchUser()  (await 없음)`,good:`const data = await fetchUser()`,why:`await를 빼면 Promise 객체 자체가 담겨 화면에 [object Promise]가 출력됩니다.`},{bad:`try-catch 없이 await 연속 호출`,good:`전체를 하나의 try-catch로 감싸기`,why:`중간에 하나라도 실패하면 Unhandled Rejection이 발생하고 이후 코드가 실행되지 않습니다.`},{bad:`독립적인 요청 3개를 await로 하나씩`,good:`await Promise.all([a(), b(), c()])`,why:`서로 의존하지 않는 요청까지 순서대로 기다리면 시간이 3배로 걸립니다.`}],extensions:[`setTimeout으로 2초 뒤 성공하는 가짜 API를 만들고 로딩 표시를 붙여 보세요.`,`일부러 실패하는 함수를 만들어 catch 블록이 동작하는지 확인해 보세요.`,`Promise.all과 순차 await의 실행 시간을 console.time으로 측정해 비교해 보세요.`,`.then().catch() 체인으로 짠 코드를 async/await로 바꿔 보세요.`,`재시도 로직(실패하면 한 번 더 호출)을 만들어 보세요.`],practices:[],status:`todo`},{id:18,chapterId:10,label:`Code Challenge 18`,title:`ESLint`,slidePage:`270쪽`,studyRange:`252~258쪽`,goal:`규칙을 설정하고 의도적으로 위반한 뒤, 에디터와 CLI에서 검출되는지 확인합니다.`,lecture:{intro:`ESLint는 맞춤법 검사기입니다. 실행하기 전에 오타, 안 쓰는 변수, 위험한 문법을 미리 잡아줍니다. 특히 == 대신 === 를 쓰게 하는 규칙이 중요한데, ==는 "0"과 0을 같다고 판단해서 예상 밖의 버그를 만들기 때문입니다.`,summary:`ESLint는 문법 오류와 위험한 작성 방식을 실행 전에 잡아내는 정적 분석 도구입니다. Prettier와 역할이 달라 함께 씁니다.`,points:[`eqeqeq 규칙은 == 대신 ===를 강제한다. == 는 타입 변환 때문에 예상 밖의 결과를 낸다.`,`에디터에는 물결선으로, 터미널에서는 npm run lint로 확인한다.`,`확인이 끝나면 의도적으로 넣은 오류는 반드시 제거한다.`],syntax:[{code:`rules: {
  'eqeqeq': ['error', 'always'],
  'no-console': 'off',
}`,parts:[{token:`rules`,role:`ESLint 설정 객체의 키. 검사 규칙을 모아두는 곳`},{token:`'eqeqeq'`,role:`규칙 이름. ESLint가 정한 것이라 철자를 정확히 써야 한다`},{token:`['error', 'always']`,role:`1번째는 심각도, 2번째는 옵션`},{token:`'error' / 'warn' / 'off'`,role:`심각도 3단계. error만 npm run lint를 실패시킨다`}],returns:`설정이라 값을 돌려주지 않는다. 저장하면 에디터에 물결선이 뜨고, npm run lint 실행 시 오류 목록이 출력된다.`,desc:`eslint.config.js 의 rules 블록.`}]},tasks:[`'eqeqeq': ['error', 'always'] 규칙 설정`,`'no-console': 'off' 로 console.log 허용`,`컴포넌트에 의도적으로 if (userAge == 20) 작성`,`에디터 물결선과 npm run lint 오류 확인`,`확인 후 의도적 오류 제거`],pitfalls:[{bad:`의도적으로 넣은 오류를 그대로 두고 제출`,good:`확인 후 반드시 제거`,why:`최종 과제 평가 항목이 "ESLint Error 0개"입니다. 실습용 오류를 남기면 감점됩니다.`},{bad:`if (userAge == 20)`,good:`if (userAge === 20)`,why:`==는 타입을 자동 변환해 "20" == 20 을 참으로 봅니다. 의도치 않은 곳에서 조건이 통과합니다.`},{bad:`에디터에 물결선이 안 보이는데 그냥 진행`,good:`VS Code ESLint 확장 설치 여부 확인`,why:`설정 파일이 있어도 확장이 없으면 에디터에는 표시되지 않습니다. npm run lint로도 확인하세요.`},{why:`ESLint는 코드의 "문제"를, Prettier는 코드의 "모양"을 다룹니다. 경쟁 도구가 아니라 둘 다 씁니다.`}],extensions:[`no-unused-vars 규칙을 켜고 안 쓰는 변수를 만들어 경고를 확인해 보세요.`,`npm run lint -- --fix 로 자동 수정되는 항목과 안 되는 항목을 구분해 보세요.`,`vue/multi-word-component-names 규칙을 찾아보고 왜 컴포넌트 이름을 두 단어로 짓는지 이해해 보세요.`,`특정 줄만 검사에서 제외하는 // eslint-disable-next-line 을 써 보세요.`],practices:[],status:`todo`},{id:19,chapterId:10,label:`Code Challenge 19`,title:`Prettier`,slidePage:`271쪽`,studyRange:`259~262쪽`,goal:`정렬이 어긋난 코드를 넣고 npm run format으로 자동 정리되는 것을 확인합니다.`,lecture:{intro:`Prettier는 코드 정돈 로봇입니다. 들여쓰기가 삐뚤빼뚤하든 따옴표가 섞여 있든, 저장 한 번이면 정해진 모양으로 맞춰줍니다. 팀 전체가 같은 규칙을 쓰면 "누가 공백만 바꿨는지" 같은 무의미한 충돌이 사라집니다.`,summary:`Prettier는 코드의 "모양"만 자동 정리합니다. 들여쓰기·따옴표·세미콜론을 통일해 팀 협업 시 diff 충돌을 줄입니다.`,points:[`저장 시 자동 포맷(formatOnSave)을 켜 두면 편하다.`,`불필요한 백틱은 일반 따옴표로 바뀐다.`,`ESLint(문제 검사)와 Prettier(모양 정리)는 경쟁 도구가 아니다.`],syntax:[{code:"const     myRegion   = `Suwon` ;\nconst regionGreeting = `웰컴 투 ${myRegion}`;\n\n// npm run format 실행 후 정렬 확인",parts:[{token:`const     myRegion`,role:`과도한 공백. Prettier가 한 칸으로 정리한다`},{token:"`Suwon`",role:`값이 안 들어가는 백틱. 일반 따옴표로 바뀐다`},{token:` ;`,role:`세미콜론 앞 공백. 제거된다`},{token:"`웰컴 투 ${myRegion}`",role:"${}가 있으므로 백틱이 유지된다"}],returns:`명령이라 값을 돌려주지 않는다. npm run format은 파일 자체를 덮어써서 저장한다(되돌리려면 Git 사용).`,desc:`일부러 어긋나게 쓰고 실행해 본다.`}]},tasks:[`정렬이 어긋난 코드를 컴포넌트에 작성`,`npm run format 실행`,`공백·세미콜론 변화 확인`,`백틱이 따옴표로 바뀌는지 확인`],pitfalls:[{bad:`ESLint와 Prettier 설정이 서로 충돌`,good:`역할 분리 (ESLint=문제, Prettier=모양)`,why:`따옴표·세미콜론 규칙을 양쪽에 중복으로 걸면 저장할 때마다 서로 되돌리는 현상이 생깁니다.`},{bad:`npm run format 후 확인 없이 커밋`,good:`변경된 파일을 훑어보고 커밋`,why:`포맷팅이 전체 파일을 건드리면 diff가 커집니다. 실제 로직 변경이 묻히지 않게 따로 커밋하세요.`},{why:"값이 들어가지 않는 문자열에 백틱을 쓰면 Prettier가 일반 따옴표로 바꿉니다. ${}가 있을 때만 백틱을 쓰세요."}],extensions:[`VS Code에서 formatOnSave를 켜고 저장만으로 정렬되는지 확인해 보세요.`,`.prettierrc에 printWidth나 singleQuote 옵션을 바꿔보고 결과 차이를 비교해 보세요.`,`일부러 한 줄을 아주 길게 쓰고 Prettier가 어디서 줄바꿈하는지 관찰해 보세요.`,`.prettierignore로 특정 폴더를 제외해 보세요.`],practices:[],status:`todo`},{id:20,chapterId:10,label:`Code Challenge 20`,title:`환경변수`,slidePage:`272쪽`,studyRange:`263~267쪽`,goal:`모드별 .env 파일을 만들고 import.meta.env로 읽어옵니다.`,lecture:{intro:`개발할 때 쓰는 주소와 실제 서비스 주소는 다릅니다. 코드를 매번 고치는 대신, 주소나 API 키를 .env 파일에 따로 빼두고 상황에 맞게 갈아 끼웁니다. API 키를 소스에 직접 적지 않는 것이 핵심이며, 이는 과제 평가 항목이기도 합니다.`,summary:`Vite는 VITE_ 접두사가 붙은 환경변수만 클라이언트 코드에 노출합니다. --mode 옵션으로 어떤 .env를 쓸지 고릅니다.`,points:[`VITE_ 접두사가 없으면 import.meta.env에서 읽히지 않는다.`,`.env 파일은 반드시 .gitignore에 넣어 Git에 올리지 않는다.`,`환경변수는 빌드 시점에 값이 박히므로, 진짜 비밀키는 프론트에 두면 안 된다.`],syntax:[{code:`# .env.staging
VITE_API_URL=https://api-stage.skcc.com

// 사용
console.log(import.meta.env.VITE_API_URL)

// package.json
"build:staging": "vite build --mode staging"`,parts:[{token:`.env.staging`,role:`파일 이름. 뒤의 staging이 --mode 값과 정확히 같아야 한다`},{token:`VITE_`,role:`접두사. 이게 없으면 클라이언트 코드에 노출되지 않는다`},{token:`API_URL`,role:`내가 정하는 이름. 대문자+언더스코어가 관례`},{token:`import.meta.env`,role:`Vite가 제공하는 환경변수 객체. process.env가 아니다`},{token:`--mode staging`,role:`어떤 .env 파일을 쓸지 고르는 옵션`}],returns:`import.meta.env.VITE_API_URL은 문자열을 돌려준다. 없는 변수를 읽으면 undefined가 나온다. 값은 빌드 시점에 코드에 그대로 박히므로 브라우저에서 확인할 수 있다.`,desc:`모드 이름과 파일 확장자가 일치해야 한다.`}]},tasks:[`.env.staging 생성 후 VITE_API_URL 설정`,`.env.production 생성 후 VITE_API_URL 설정`,`컴포넌트에서 import.meta.env.VITE_API_URL 출력`,`package.json에 build:staging 스크립트 추가`,`npm run build:staging 실행 후 적용 환경 확인`],pitfalls:[{bad:`API_URL=https://...`,good:`VITE_API_URL=https://...`,why:`VITE_ 접두사가 없으면 import.meta.env에서 읽히지 않고 undefined가 나옵니다. Vite가 의도적으로 막는 것입니다.`},{bad:`.env 파일을 Git에 커밋`,good:`.gitignore에 .env* 추가`,why:`API 키가 공개 저장소에 올라가면 남이 내 할당량을 쓰고 요금이 청구됩니다. 최종 과제 평가 항목이기도 합니다.`},{bad:`결제 키·DB 비밀번호를 VITE_ 변수에 저장`,good:`진짜 비밀키는 백엔드에 두기`,why:`VITE_ 변수는 빌드 시 코드에 그대로 박혀서, 브라우저 개발자도구에서 누구나 볼 수 있습니다. "숨긴 것"이 아니라 "분리한 것"일 뿐입니다.`},{bad:`.env를 고치고 화면만 새로고침`,good:`개발 서버를 껐다 다시 실행`,why:`환경변수는 서버가 시작될 때 읽힙니다. HMR로는 반영되지 않습니다.`},{why:`파일 이름과 --mode 값이 정확히 일치해야 합니다. --mode staging 은 .env.staging 을 찾습니다.`}],extensions:[`.env.development와 .env.production을 만들고, dev와 build에서 각각 다른 값이 나오는지 확인해 보세요.`,`import.meta.env.MODE와 .DEV, .PROD 값을 화면에 출력해 보세요.`,`OpenWeather API 키를 .env로 옮기고, 소스에서 키 문자열을 완전히 제거해 보세요.`,`.env.example 파일을 만들어 "어떤 변수가 필요한지"만 공유하는 방식을 실험해 보세요.`,`빌드된 dist/assets의 JS 파일을 열어 VITE_ 값이 그대로 박혀 있는지 직접 확인해 보세요.`],practices:[],status:`todo`},{id:21,chapterId:10,label:`Code Challenge 21`,title:`Build`,slidePage:`273쪽`,studyRange:`268~269쪽`,goal:`npm run build로 배포용 정적 파일을 생성하고 결과물을 확인합니다.`,lecture:{intro:`개발 중인 코드는 여러 파일로 흩어져 있고 브라우저가 바로 읽지 못하는 문법도 섞여 있습니다. 빌드는 이것을 하나로 묶고 압축해서 "어디에 올려도 열리는 파일 뭉치"로 포장하는 과정입니다. 이삿짐을 박스에 싸는 것과 같고, 결과물은 dist/ 폴더에 나옵니다.`,summary:`빌드는 개발용 소스를 브라우저가 바로 읽을 수 있는 정적 파일로 포장하는 과정입니다. 결과물은 dist/에 생성됩니다.`,points:[`파일명에 붙는 해시는 브라우저 캐시를 무효화하기 위한 것이다.`,`dist/는 소스가 아니므로 .gitignore 대상이지만, GitHub Pages 배포 방식에 따라 예외를 둘 수 있다.`,`npm run preview로 빌드 결과를 로컬에서 미리 확인할 수 있다.`],syntax:[{code:`npm run build     # dist/ 생성
npm run preview   # 빌드 결과 확인`,parts:[{token:`npm run`,role:`package.json의 scripts에 적힌 명령을 실행한다`},{token:`build`,role:`scripts.build → vite build. 소스를 dist/로 포장한다`},{token:`preview`,role:`scripts.preview → 만들어진 dist/를 로컬 서버로 띄워 확인`},{token:`dist/`,role:`빌드 결과 폴더. 매번 새로 만들어지므로 직접 수정하면 안 된다`}],returns:`값 대신 파일이 생긴다. dist/index.html 하나와 dist/assets/ 안에 해시가 붙은 js·css 파일이 나온다. 해시는 코드가 바뀔 때마다 달라져 브라우저 캐시를 무효화한다.`,desc:`dist/assets/ 안의 해시 파일명을 확인한다.`}]},tasks:[`npm run build 실행`,`프로젝트 루트에 dist/ 폴더 생성 확인`,`dist/assets/에 해시 포함 JS 파일 생성 확인`],pitfalls:[{bad:`dist/ 안의 파일을 직접 수정`,good:`src/를 고치고 다시 빌드`,why:`dist는 매번 새로 만들어지는 결과물입니다. 직접 고친 내용은 다음 빌드에서 전부 사라집니다.`},{bad:`빌드만 하고 확인 없이 배포`,good:`npm run preview로 결과를 먼저 확인`,why:`개발 서버에서는 잘 되다가 빌드 후에만 깨지는 경우가 있습니다(경로 문제, 환경변수 누락 등).`},{bad:`GitHub Pages에 올렸는데 흰 화면`,good:`vite.config.js에 base: '/저장소이름/' 설정`,why:`GitHub Pages는 하위 경로로 서비스되어, base가 기본값(/)이면 JS·CSS 경로를 못 찾습니다.`},{bad:`빌드 전 ESLint 오류를 방치`,good:`npm run lint로 Error 0개 확인 후 빌드`,why:`최종 과제 평가 기준이 ESLint Error 0개입니다. 빌드는 lint 오류가 있어도 통과할 수 있어 따로 확인해야 합니다.`}],extensions:[`npm run preview를 실행해 빌드 결과를 로컬에서 확인해 보세요.`,`dist/assets의 파일명에 붙은 해시가 코드를 고칠 때마다 바뀌는지 확인하고, 왜 필요한지 생각해 보세요.`,`빌드 전후의 파일 크기를 비교해 보세요. gzip 크기가 왜 더 중요한지 찾아보세요.`,`GitHub Pages나 Netlify에 실제로 배포하고 시크릿 창에서 열어 보세요.`,`vite.config.js에서 build.sourcemap을 켜고 dist에 무엇이 추가되는지 확인해 보세요.`],practices:[],status:`todo`}],Yo=[{id:1,chapterId:2,title:`날씨 Mockup`,slidePage:`98쪽`,scope:`2장 Vue 문법 전체 · 40~97쪽`,goal:`Vue 문법만으로 정적인 날씨 대시보드 화면을 만듭니다.`,requirements:[`weatherList 반응형 배열 만들기`,`v-for로 도시별 날씨 카드 반복 출력`,`:key에 도시의 id 연결`,`v-if로 25℃ 이상이면 🔥 더움, 미만이면 ❄️ 선선함 표시`,`한글 도시 검색 입력창을 :value와 @input으로 처리`,`카드 클릭 시 상태바에 "{도시}이 선택되었습니다." 표시`,`상세보기 버튼은 버블링 없이 window.alert 실행`],result:`WeatherMockup`,resultNote:`원본 프로젝트: weather-mockup/src/App.vue`,status:`done`},{id:2,chapterId:3,title:`날씨 컴포지션`,slidePage:`126쪽`,scope:`3장 Composition API 전체 · 100~125쪽`,goal:`computed와 watch로 검색 필터링과 변화 감시를 붙입니다.`,requirements:[`searchQuery · selectedCityInfo · weatherList를 반응형 상태로 정의`,`computed()로 filteredWeatherList 만들기`,`watch()로 selectedCityInfo 감시 후 콘솔 기록`,`watchEffect()로 searchQuery 변화 콘솔 기록`,`검색어가 비면 원본 목록 표시`,`검색 결과가 있으면 필터링된 목록 표시`,`결과가 없으면 안내 문구 표시`],result:`WeatherComposition`,resultNote:`검색·카드 클릭 시 콘솔(F12)에 watch·watchEffect 로그가 찍힙니다`,status:`done`},{id:3,chapterId:4,title:`날씨 컴포넌트 분리`,slidePage:`158쪽`,scope:`4장 Vue Component 전체 · 128~157쪽`,goal:`기능은 그대로 두고 화면을 재사용 가능한 컴포넌트로 쪼갭니다.`,requirements:[`WeatherParent.vue — 모든 반응형 데이터 유지`,`BaseDashboardCard.vue — 공통 디자인과 <slot> 제공`,`SearchBar.vue — 검색어 Props 수신, update-query 이벤트 전달`,`WeatherCard.vue — 도시 객체 Props, select-card·click-detail 이벤트 전달`,`각 컴포넌트 디자인을 <style scoped>로 분리`],result:`WeatherParent`,resultNote:`Open-Meteo API 실시간 데이터 · 하위 컴포넌트는 src/components/assignments/weather/ 에 있습니다`,anatomy:{intro:`화면은 하나지만 파일은 9개입니다. 날씨는 Open-Meteo API에서 실제로 받아옵니다. 받아온 데이터는 전부 부모가 쥐고 있고, 자식들은 받아서 그리기만 합니다. 자식이 무언가 하고 싶으면 직접 바꾸지 않고 부모에게 "이런 일이 생겼다"고 알립니다.`,tree:[{name:`WeatherParent`,file:`WeatherParent`,role:`데이터의 주인 (부모)`,owner:!0,state:[`weatherList`,`searchQuery`,`selectedRegion`,`viewMode`,`favorites`,`hereId`,`detailCityId`,`isLoading`,`errorMessage`],note:`onMounted에서 API를 부르고, 받아온 목록과 로딩·에러 상태를 전부 여기서만 관리합니다. 자식은 상태를 하나도 갖고 있지 않습니다.`,children:[{name:`weatherApi.js`,file:`weather/weatherApi`,role:`데이터를 가져오는 곳 (컴포넌트 아님)`,props:[],emits:[],note:`화면을 그리지 않습니다. 좌표 목록을 들고 Open-Meteo에 요청을 보내고, WMO 숫자 코드를 한글 날씨로 바꿔 돌려주기만 합니다. 화면과 통신을 파일부터 갈라 두면 API가 바뀌어도 컴포넌트는 손대지 않아도 됩니다.`},{name:`BaseDashboardCard`,file:`weather/BaseDashboardCard`,role:`공통 껍데기`,props:[],emits:[],note:`<slot> 하나만 있습니다. 안에 무엇이 들어오는지 모르고, 테두리와 여백만 책임집니다.`},{name:`SearchBar`,file:`weather/SearchBar`,role:`검색 입력`,props:[{name:`current-query`,as:`currentQuery`,type:`String`,desc:`지금 검색어가 무엇인지`}],emits:[{name:`update-query`,payload:`입력한 문자열`,desc:`사용자가 타이핑할 때마다`}],note:`searchQuery를 직접 바꾸지 않습니다. 바꾸는 건 부모가 합니다.`},{name:`RegionTabs`,file:`weather/RegionTabs`,role:`지역 선택 탭`,props:[{name:`regions`,as:`regions`,type:`Array`,desc:`고를 수 있는 권역 목록 (시·도 17개를 8권역으로 묶은 것)`},{name:`current`,as:`current`,type:`String`,desc:`지금 선택된 지역`},{name:`counts`,as:`counts`,type:`Object`,desc:`지역별 도시 개수`}],emits:[{name:`select-region`,payload:`누른 지역 이름`,desc:`탭을 눌렀을 때`}],note:`어느 탭이 눌린 상태인지도 자기가 기억하지 않습니다. current를 받아서 색만 칠하고, 눌리면 알리기만 합니다.`},{name:`WeatherCard`,file:`weather/WeatherCard`,role:`도시 카드 (여러 개)`,props:[{name:`city-item`,as:`cityItem`,type:`Object`,desc:`도시 하나의 정보 (이름 · 기온 · 습도 · 날씨)`},{name:`favorite`,as:`favorite`,type:`Boolean`,desc:`별표를 쳤는지`},{name:`here`,as:`here`,type:`Boolean`,desc:`현재 위치와 가장 가까운 곳인지`}],emits:[{name:`select-card`,payload:`선택 안내 문구`,desc:`카드를 클릭했을 때`},{name:`click-detail`,payload:`도시명 · 날씨상태`,desc:`시간별 버튼을 눌렀을 때`},{name:`toggle-favorite`,payload:`도시 id`,desc:`별표를 눌렀을 때`}],note:`v-for로 45장이 만들어집니다. 별표가 켜졌는지조차 자기가 모릅니다 — favorite을 받아서 색만 칠하고, 눌리면 id를 올려보낼 뿐입니다.`},{name:`HourlyDetail`,file:`weather/HourlyDetail`,role:`시간별 날씨 (날짜 선택)`,props:[{name:`city`,as:`city`,type:`Object`,desc:`펼쳐서 볼 도시`}],emits:[{name:`close`,payload:`없음`,desc:`✕ 를 눌렀을 때`}],note:`지금까지의 자식들과 달리 자기 데이터를 직접 불러옵니다. 하루치 24시간 값은 이 화면에서만 쓰기 때문입니다. 목록 전체를 시간별로 받으면 응답이 수십 배가 되므로, 필요한 곳에서 필요할 때만 부르는 편이 낫습니다.`},{name:`WeatherByStatus`,file:`weather/WeatherByStatus`,role:`날씨별 지역 현황`,props:[{name:`list`,as:`list`,type:`Array`,desc:`검색까지 걸러진 도시 목록`},{name:`favorites`,as:`favorites`,type:`Array`,desc:`별표 친 도시 id 목록`},{name:`here-id`,as:`hereId`,type:`String`,desc:`현재 위치 도시 id`}],emits:[{name:`select-card`,payload:`선택 안내 문구`,desc:`칩을 클릭했을 때`},{name:`toggle-favorite`,payload:`도시 id`,desc:`별표를 눌렀을 때`}],note:`WeatherCard와 완전히 같은 목록을 받지만 날씨 기준으로 묶어 보여줍니다. 데이터를 그대로 두고 화면만 갈아 끼운 예입니다.`},{name:`WeatherIcon`,file:`weather/WeatherIcon`,role:`날씨 아이콘`,under:`WeatherCard`,props:[{name:`status`,as:`status`,type:`String`,desc:`'맑음' · '비' · '구름' 같은 날씨 글자`}],emits:[],note:`받은 글자에 어떤 단어가 들어 있는지 보고 아이콘 18종 중 하나를 고릅니다. 데이터도 이벤트도 없는 가장 단순한 컴포넌트이며, 부모의 status가 WeatherCard를 거쳐 한 칸 더 내려간 예입니다.`}]}],flows:[{title:`화면이 처음 열리면`,steps:[{who:`WeatherParent`,dir:`own`,label:`onMounted(load)`,desc:`화면이 붙는 순간 딱 한 번 실행된다.`},{who:`weatherApi.js`,dir:`own`,label:`fetch(open-meteo)`,desc:`전국 45개 지역 좌표를 한 번의 요청으로 보낸다. 컴포넌트가 아니라 별도 파일이 맡는다.`},{who:`WeatherParent`,dir:`own`,label:`weatherList = 받아온 배열`,desc:`실패하면 errorMessage에 담아 화면에 다시 시도 버튼을 띄운다.`},{who:`WeatherCard`,dir:`down`,label:`:city-item 으로 45장 생성`,desc:`v-for가 배열을 보고 카드를 만든다. 데이터가 오면 화면은 알아서 따라온다.`}]},{title:`지역 탭 "대구/경북"을 누르면`,steps:[{who:`RegionTabs`,dir:`up`,label:`emit('select-region', '대구/경북')`,desc:`탭은 자기가 눌렸다는 사실만 알린다.`},{who:`WeatherParent`,dir:`own`,label:`selectedRegion = '대구/경북'`,desc:`어느 탭이 선택됐는지는 부모가 기억한다.`},{who:`RegionTabs`,dir:`down`,label:`:current 로 다시 내려감`,desc:`그 값이 되돌아와 탭 색이 칠해진다. 탭은 스스로 색을 바꾸지 않았다.`},{who:`WeatherCard`,dir:`down`,label:`대구·포항·경주 등만 남음`,desc:`computed가 지역과 검색어를 함께 걸러 낸다.`}]},{title:`검색창에 "수"를 입력하면`,steps:[{who:`SearchBar`,dir:`up`,label:`emit('update-query', '수')`,desc:`자식이 부모에게 알린다. 자식은 여기까지만 한다.`},{who:`WeatherParent`,dir:`own`,label:`searchQuery = '수'`,desc:`값을 실제로 바꾸는 건 주인인 부모다.`},{who:`WeatherParent`,dir:`own`,label:`filteredWeatherList 재계산`,desc:`computed가 searchQuery에 의존하므로 자동으로 다시 계산된다.`},{who:`WeatherCard`,dir:`down`,label:`:city-item 으로 새 목록 전달`,desc:`이름에 '수'가 든 수원·여수·서산 등만 남는다. 카드는 아무것도 안 했는데 화면이 바뀐다.`}]},{title:`별표를 누르면`,steps:[{who:`WeatherCard`,dir:`up`,label:`emit('toggle-favorite', 'suwon')`,desc:`카드는 자기가 별표 상태인지도 모른다. 눌렸다는 사실만 올린다.`},{who:`WeatherParent`,dir:`own`,label:`favorites 배열에 추가/제거`,desc:`기억하는 것도, 바꾸는 것도 부모다.`},{who:`WeatherParent`,dir:`own`,label:`watch → localStorage 저장`,desc:`새로고침해도 별표가 남는 이유. 브라우저에 적어 둔다.`},{who:`WeatherCard`,dir:`down`,label:`:favorite 로 되돌아옴 + 위로 정렬`,desc:`별이 노랗게 차고 카드가 위로 올라간다. 카드가 스스로 한 일은 없다.`}]},{title:`도시 카드를 클릭하면`,steps:[{who:`WeatherCard`,dir:`up`,label:`emit('select-card', '서울을 선택했습니다')`,desc:`카드는 문구만 만들어 올려보낸다.`},{who:`WeatherParent`,dir:`own`,label:`selectedCityInfo = 받은 문구`,desc:`부모가 자기 상태에 받아 넣는다.`},{who:`WeatherParent`,dir:`own`,label:`watch가 감지 → 콘솔 출력`,desc:`개발자 도구 Console에서 👁️‍🗨️ 로그를 확인할 수 있다.`},{who:`상태 바`,dir:`down`,label:`맨 아래 줄 문구 교체`,desc:`카드가 상태 바를 직접 만진 적은 한 번도 없다.`}]}],point:`카드를 눌러 맨 아래 상태 바가 바뀌는 것을 보세요. **카드와 상태 바는 서로를 전혀 모릅니다.** 둘 다 부모만 알고 있고, 부모를 거쳐 연결됩니다. 이것이 형제끼리 직접 대화하지 않는다는 규칙입니다.`},status:`done`},{id:4,chapterId:5,title:`Router 활용`,slidePage:`176~177쪽`,scope:`5장 Vue Router · 160~175쪽`,goal:`메인·About·동적 상세·404 페이지를 라우터로 연결합니다.`,requirements:[`라우터에 Lazy Loading 적용`,`정의되지 않은 주소를 처리하는 Catch-all Route 추가`,`App.vue에 <RouterLink> 내비게이션과 <RouterView> 배치`,`WeatherHomeView.vue를 / 경로의 메인 화면으로`,`상세보기의 alert()를 router.push('/weather/' + id)로 교체`,`WeatherDetailView.vue에서 cityId로 도시 정보 조회`,`도시 정보는 컴포넌트 Mount 시점에 선택`,`WeatherAboutView.vue에 서비스 설명과 메인 이동`,`NotFoundView.vue에 잘못된 주소 안내와 메인 이동`],status:`todo`},{id:5,chapterId:6,title:`날씨 단위 Store`,slidePage:`191쪽`,scope:`6장 Pinia 전체 · 179~190쪽`,goal:`섭씨·화씨 전환 상태를 Pinia Store로 전역 관리합니다.`,requirements:[`state: unit — 단위 저장, 초깃값 'celsius'`,`getter: unitSymbol — ℃ 또는 ℉ 반환`,`action: toggleUnit — celsius ↔ fahrenheit 전환`,`UnitToggler.vue에 단위 변경 버튼 만들기`,`Navigation Bar 옆에 UnitToggler.vue 배치`,`메인과 상세 화면에 단위 변경 적용`,`변환식: (섭씨 × 9) / 5 + 32`],status:`todo`},{id:6,chapterId:7,title:`날씨 데이터 연동`,slidePage:`209쪽`,scope:`7장 Axios 전체 · 193~208쪽`,goal:`Mock Data를 OpenWeather API의 실제 응답으로 교체합니다.`,requirements:[`Axios 라이브러리 설치`,`OpenWeatherMap 가입 및 API Key 발급`,`API Key를 .env의 VITE_ 변수로 분리`],note:`교안 209쪽은 제목이 "날씨 데이터 연동"이지만 본문 요구사항이 191쪽 UnitToggler 과제와 동일합니다. Axios 연동의 상세 범위는 강사 안내를 확인하세요.`,status:`todo`},{id:7,chapterId:8,title:`Element Plus 적용`,slidePage:`228쪽`,scope:`8장 UI 라이브러리 전체 · 211~227쪽`,goal:`완성된 날씨 화면에 Element Plus 컴포넌트를 입힙니다.`,requirements:[`기존 날씨 과제에 Element Plus 컴포넌트를 자유롭게 적용`],status:`todo`},{id:8,chapterId:9,title:`메뉴와 API 확장`,slidePage:`250쪽`,scope:`9장 Modern JavaScript 전체 및 7장 Axios`,goal:`메뉴를 추가하고 활용할 API를 늘려 기존 과제를 확장합니다.`,requirements:[`메뉴 추가`,`활용할 API 추가`],note:`구체적인 메뉴 수와 API 종류는 교안에 지정되어 있지 않습니다.`,status:`todo`},{id:9,chapterId:10,title:`최종 완성과 배포`,slidePage:`274쪽`,scope:`교안 전체 · 특히 10장 252~273쪽`,goal:`오류를 제거하고 API 키를 보호한 뒤 정적 배포까지 마칩니다.`,requirements:[`ESLint로 점검해 Error 0개 만들기`,`API Key를 환경변수로 분리`,`.gitignore로 API Key와 환경 파일 보호`,`npm run build로 dist/ 생성`,`GitHub Pages에 정적 파일 배포`],status:`final`}],Xo=[`본인 GitHub 계정에 Public 저장소를 만들어 제출`,`저장소 주소 예시: https://github.com/본인계정/inwoo-vue`,`선택·권장: Vercel · Netlify · GitHub Pages 배포 URL 제출`,`시크릿 창(⌘+Shift+N)에서 로그인 없이 저장소가 열리는지 확인`],Zo=[{score:`91~100`,grade:`Excellent`,criteria:`기본 요구사항 완전 충족 + 추가 실습`},{score:`81~90`,grade:`Good`,criteria:`기본 요구사항 완전 충족 + 개인 실습 흔적`},{score:`71~80`,grade:`Fair`,criteria:`최소 요구사항 부분 충족 + 올바른 Public 저장소 제출`},{score:`61~70`,grade:`Poor`,criteria:`핵심 기능 다수 누락 또는 비공개 저장소로 채점 불가`}],Qo=[{title:`개발 서버 실행`,detail:`npm run dev로 Vue 앱이 정상 실행된다`},{title:`핵심 기능`,detail:`날씨 검색, 선택, 상세보기가 동작한다`},{title:`컴포넌트 분리`,detail:`컴포넌트가 역할별로 분리되어 있다`},{title:`Router`,detail:`메인 · About · 동적 상세 · Not Found가 동작한다`},{title:`Pinia`,detail:`섭씨·화씨 전환이 메인과 상세 화면에 반영된다`},{title:`Axios`,detail:`실제 API 연동 범위를 강사에게 확인했다`},{title:`Element Plus`,detail:`기존 화면에 UI 컴포넌트가 적용되어 있다`},{title:`ESLint`,detail:`Error가 0개다`},{title:`Prettier`,detail:`npm run format 포맷팅을 완료했다`},{title:`API Key 보호`,detail:`소스와 Git 기록에 키가 노출되지 않는다`},{title:`Build`,detail:`npm run build가 성공하고 dist/가 생성된다`},{title:`저장소 공개`,detail:`GitHub 저장소가 Public이다`},{title:`시크릿 창 확인`,detail:`로그인 없이 저장소를 열 수 있다`},{title:`배포 URL`,detail:`가능하면 배포 URL도 제출한다`}],$o=e=>Jo.filter(t=>t.chapterId===e),es=e=>Yo.filter(t=>t.chapterId===e),ts=Jo.filter(e=>e.practices.length>0).length,ns=Jo.filter(e=>e.id>0).length,rs=Yo.filter(e=>e.status===`done`).length,Q=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},is=t({default:()=>hs}),as={class:`dashboard-wrapper`},os={class:`search-box`},ss=[`value`],cs={class:`list-box`},ls=[`onClick`],us={key:0,class:`badge hot`},ds={key:1,class:`badge cool`},fs=[`onClick`],ps={key:0,class:`empty-message`},ms={class:`status-bar`},hs=Q({__name:`WeatherComposition`,setup(e){let t=P([{id:`city_01`,name:`서울`,temp:28,status:`맑음`},{id:`city_02`,name:`수원`,temp:24,status:`비`},{id:`city_03`,name:`부산`,temp:26,status:`구름`}]),n=P(``),r=P(`카드를 클릭하거나 검색해 보세요.`),i=X(()=>{let e=n.value.trim();return e?t.value.filter(t=>t.name.includes(e)):t.value});z(r,e=>{console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${e}"`)}),Pn(()=>{console.log(`🤖 [watchEffect 자동 호출] 현재 검색어 '${n.value}'에 매칭되는 API 데이터를 필터링합니다.`)});let a=(e,t)=>{window.alert(`${e}의 현재 날씨는 [${t}] 상태입니다.`)};return(e,t)=>(H(),U(`div`,as,[G(`section`,os,[t[2]||=G(`h3`,null,`🔍 도시 검색`,-1),G(`input`,{type:`text`,value:n.value,placeholder:`검색할 도시 이름 입력`,onInput:t[0]||=e=>n.value=e.target.value},null,40,ss),G(`p`,null,[t[1]||=q(` 검색 중인 도시: `,-1),G(`strong`,null,O(n.value),1)])]),G(`section`,cs,[t[3]||=G(`h3`,null,`🏙️ 지역별 날씨 현황`,-1),(H(!0),U(V,null,B(i.value,e=>(H(),U(`div`,{key:e.id,class:`weather-card`,onClick:t=>r.value=`${e.name}이 선택되었습니다.`},[G(`h4`,null,O(e.name)+` (`+O(e.status)+`)`,1),G(`p`,null,`현재 기온: `+O(e.temp)+`°C`,1),e.temp>=25?(H(),U(`span`,us,`🔥 더움 (25도 이상)`)):(H(),U(`span`,ds,`❄️ 선선함 (25도 미만)`)),G(`button`,{class:`btn-detail`,onClick:Ro(t=>a(e.name,e.status),[`stop`])},` 상세보기 `,8,fs)],8,ls))),128)),i.value.length===0?(H(),U(`p`,ps,` 😭 검색 결과와 일치하는 도시가 없습니다. `)):J(``,!0)]),G(`div`,ms,O(r.value),1)]))}},[[`__scopeId`,`data-v-6342b841`]]),gs=t({default:()=>ks}),_s={class:`weather-app`},vs={class:`weather-search`},ys=[`value`],bs={class:`status-bar`},xs={class:`weather-grid`},Ss=[`onClick`],Cs={class:`weather-card-header`},ws={class:`temperature`},Ts={key:0,class:`hot`},Es={key:1,class:`cool`},Ds=[`onClick`],Os={key:0,class:`empty-message`},ks=Q({__name:`WeatherMockup`,setup(e){let t=P(``),n=P(`도시 카드를 선택해 주세요.`),r=P([{id:1,city:`서울`,temperature:28,weather:`맑음`},{id:2,city:`부산`,temperature:24,weather:`흐림`},{id:3,city:`제주`,temperature:26,weather:`구름 조금`},{id:4,city:`대전`,temperature:22,weather:`비`},{id:5,city:`광주`,temperature:30,weather:`맑음`}]),i=e=>{t.value=e.target.value},a=()=>{let e=t.value.trim();return e?r.value.filter(t=>t.city.includes(e)):r.value},o=e=>e>=25?`🔥 더움`:`❄️ 선선함`,s=e=>{n.value=`${e}이 선택되었습니다.`},c=(e,t)=>{window.alert(`${e}의 현재 날씨는 [${t}] 상태입니다.`)};return(e,r)=>(H(),U(`main`,_s,[r[1]||=G(`h1`,null,`날씨 Mockup`,-1),G(`div`,vs,[r[0]||=G(`label`,{for:`city-search`},`한글 도시 검색`,-1),G(`input`,{id:`city-search`,value:t.value,type:`text`,placeholder:`예: 서울`,onInput:i},null,40,ys)]),G(`p`,bs,O(n.value),1),G(`div`,xs,[(H(!0),U(V,null,B(a(),e=>(H(),U(`article`,{key:e.id,class:`weather-card`,onClick:t=>s(e.city)},[G(`div`,Cs,[G(`h2`,null,O(e.city),1),G(`span`,null,O(e.weather),1)]),G(`p`,ws,O(e.temperature)+`℃`,1),e.temperature>=25?(H(),U(`p`,Ts,`🔥 더움`)):(H(),U(`p`,Es,`❄️ 선선함`)),G(`button`,{type:`button`,onClick:Ro(t=>c(e.city,o(e.temperature)),[`stop`])},` 상세보기 `,8,Ds)],8,Ss))),128))]),a().length===0?(H(),U(`p`,Os,` 검색 결과와 일치하는 도시가 없습니다. `)):J(``,!0)]))}},[[`__scopeId`,`data-v-a56bc1a5`]]),As={},js={class:`base-dashboard-card`};function Ms(e,t){return H(),U(`div`,js,[kr(e.$slots,`default`,{},void 0,!0)])}var Ns=Q(As,[[`render`,Ms],[`__scopeId`,`data-v-242be1a1`]]),Ps=[`width`,`height`,`fill`],Fs={key:3,d:`M12 3.2 6.9 8.6a7 7 0 1 0 10.2 0Z`},Is={key:4,d:`m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 16.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85Z`},Ls={key:6,d:`m5 12.5 4.5 4.5L19 7`},Rs=Q({__name:`UiIcon`,props:{name:{type:String,required:!0},size:{type:Number,default:18},filled:{type:Boolean,default:!1}},setup(e){return(t,n)=>(H(),U(`svg`,{class:`ui-icon`,width:e.size,height:e.size,viewBox:`0 0 24 24`,fill:e.filled?`currentColor`:`none`,stroke:`currentColor`,"stroke-width":`1.7`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},[e.name===`search`?(H(),U(V,{key:0},[n[0]||=G(`circle`,{cx:`11`,cy:`11`,r:`7`},null,-1),n[1]||=G(`path`,{d:`m20 20-3.5-3.5`},null,-1)],64)):e.name===`city`?(H(),U(V,{key:1},[n[2]||=G(`path`,{d:`M3 21h18`},null,-1),n[3]||=G(`path`,{d:`M5 21V8l6-4v17`},null,-1),n[4]||=G(`path`,{d:`M11 21V11h8v10`},null,-1),n[5]||=G(`path`,{d:`M8 11v0M8 15v0M15 15v0M15 18v0`},null,-1)],64)):e.name===`thermometer`?(H(),U(V,{key:2},[n[6]||=G(`path`,{d:`M14 14.76V4.5a2.5 2.5 0 0 0-5 0v10.26a4.5 4.5 0 1 0 5 0Z`},null,-1),n[7]||=G(`path`,{d:`M11.5 8v6.5`},null,-1)],64)):e.name===`droplet`?(H(),U(`path`,Fs)):e.name===`star`?(H(),U(`path`,Is)):e.name===`location`?(H(),U(V,{key:5},[n[8]||=G(`path`,{d:`M20 10c0 5.2-8 12-8 12s-8-6.8-8-12a8 8 0 0 1 16 0Z`},null,-1),n[9]||=G(`circle`,{cx:`12`,cy:`10`,r:`2.6`},null,-1)],64)):e.name===`check`?(H(),U(`path`,Ls)):e.name===`empty`?(H(),U(V,{key:7},[n[10]||=G(`circle`,{cx:`11`,cy:`11`,r:`7`},null,-1),n[11]||=G(`path`,{d:`m20 20-3.5-3.5`},null,-1),n[12]||=G(`path`,{d:`M8.5 11h5`},null,-1)],64)):J(``,!0)],8,Ps))}},[[`__scopeId`,`data-v-479a4352`]]),zs={class:`search-inner`},Bs={class:`field`},Vs=[`value`],Hs={key:0,class:`echo`},Us=Q({__name:`SearchBar`,props:{currentQuery:{type:String,default:``}},emits:[`update-query`],setup(e){return(t,n)=>(H(),U(`div`,zs,[n[2]||=G(`h3`,null,`도시 검색`,-1),G(`div`,Bs,[K(Rs,{name:`search`,class:`field-icon`}),G(`input`,{type:`text`,value:e.currentQuery,placeholder:`검색할 도시 이름 입력`,onInput:n[0]||=e=>t.$emit(`update-query`,e.target.value)},null,40,Vs)]),e.currentQuery?(H(),U(`p`,Hs,[n[1]||=q(` 검색 중인 도시: `,-1),G(`strong`,null,O(e.currentQuery),1)])):J(``,!0)]))}},[[`__scopeId`,`data-v-ea78255f`]]),Ws={class:`tabs`,role:`tablist`},Gs=[`aria-selected`,`onClick`],Ks={key:0,class:`count`},qs=Q({__name:`RegionTabs`,props:{regions:{type:Array,required:!0},current:{type:String,default:`전체`},counts:{type:Object,default:()=>({})}},emits:[`select-region`],setup(e){return(t,n)=>(H(),U(`div`,Ws,[(H(!0),U(V,null,B([`전체`,...e.regions],n=>(H(),U(`button`,{key:n,type:`button`,role:`tab`,class:D([`tab`,{active:n===e.current}]),"aria-selected":n===e.current,onClick:e=>t.$emit(`select-region`,n)},[q(O(n)+` `,1),e.counts[n]?(H(),U(`span`,Ks,O(e.counts[n]),1)):J(``,!0)],10,Gs))),128))]))}},[[`__scopeId`,`data-v-9f28431c`]]),Js=`/inwoo-vue/assets/cloudy-2E7sEDOx.png`,Ys=`/inwoo-vue/assets/cyclone-aIHj9EYY.png`,Xs=`/inwoo-vue/assets/fog-CgKfDHh6.png`,Zs=`/inwoo-vue/assets/heavy-rain-BB9-6u3z.png`,Qs=`/inwoo-vue/assets/high-voltage-MVrtm2Cl.png`,$s=`/inwoo-vue/assets/lightning-GnlRTz7K.png`,ec=`/inwoo-vue/assets/mostly-cloudy-Bz6ZXwtr.png`,tc=`/inwoo-vue/assets/mostly-sunny-DO6Rb_QD.png`,nc=`/inwoo-vue/assets/partly-cloudy-CwLdcgX4.png`,rc=`/inwoo-vue/assets/rain-CAwRObws.png`,ic=`/inwoo-vue/assets/snow-czBjwpY6.png`,ac=`/inwoo-vue/assets/snowflake-BN0VQHwI.png`,oc=`/inwoo-vue/assets/snowman-BIgeyGRZ.png`,sc=`/inwoo-vue/assets/sun-shower-ClQNSOjq.png`,cc=`/inwoo-vue/assets/sunny-DThjelya.png`,lc=`/inwoo-vue/assets/thermometer-V3UvkbrT.png`,uc=`/inwoo-vue/assets/thunderstorm-BwXzlJQ7.png`,dc=`/inwoo-vue/assets/tornado-BGeVSE-W.png`,fc=[`src`,`width`,`height`,`alt`,`title`],pc=Q({__name:`WeatherIcon`,props:{status:{type:String,required:!0},size:{type:Number,default:26}},setup(e){let t=e,n=Object.fromEntries(Object.entries(Object.assign({"../../../assets/weather-icons/cloudy.png":Js,"../../../assets/weather-icons/cyclone.png":Ys,"../../../assets/weather-icons/fog.png":Xs,"../../../assets/weather-icons/heavy-rain.png":Zs,"../../../assets/weather-icons/high-voltage.png":Qs,"../../../assets/weather-icons/lightning.png":$s,"../../../assets/weather-icons/mostly-cloudy.png":ec,"../../../assets/weather-icons/mostly-sunny.png":tc,"../../../assets/weather-icons/partly-cloudy.png":nc,"../../../assets/weather-icons/rain.png":rc,"../../../assets/weather-icons/snow.png":ic,"../../../assets/weather-icons/snowflake.png":ac,"../../../assets/weather-icons/snowman.png":oc,"../../../assets/weather-icons/sun-shower.png":sc,"../../../assets/weather-icons/sunny.png":cc,"../../../assets/weather-icons/thermometer.png":lc,"../../../assets/weather-icons/thunderstorm.png":uc,"../../../assets/weather-icons/tornado.png":dc})).map(([e,t])=>[e.split(`/`).pop().replace(`.png`,``),t])),r=[[`대체로 맑`,`mostly-sunny`],[`소나기`,`sun-shower`],[`뇌우`,`thunderstorm`],[`천둥`,`thunderstorm`],[`번개`,`lightning`],[`폭설`,`snowman`],[`한파`,`snowflake`],[`눈보라`,`snow`],[`싸락눈`,`snow`],[`눈`,`snow`],[`호우`,`heavy-rain`],[`장마`,`heavy-rain`],[`이슬비`,`rain`],[`어는 비`,`rain`],[`비`,`rain`],[`안개`,`fog`],[`미세먼지`,`fog`],[`태풍`,`cyclone`],[`돌풍`,`tornado`],[`구름조금`,`partly-cloudy`],[`구름 조금`,`partly-cloudy`],[`구름많`,`mostly-cloudy`],[`흐림`,`cloudy`],[`구름`,`cloudy`],[`맑음`,`sunny`],[`맑`,`sunny`]],i=X(()=>{let e=r.find(([e])=>t.status.includes(e));return e?e[1]:`thermometer`}),a=X(()=>n[i.value]??n.thermometer);return(t,n)=>(H(),U(`img`,{class:D([`weather-icon`,i.value]),src:a.value,width:e.size,height:e.size,alt:e.status,title:e.status,decoding:`async`},null,10,fc))}},[[`__scopeId`,`data-v-ea83332f`]]),mc={class:`sky`},hc={class:`sky-text`},gc={key:0,class:`badge here-badge`},_c={key:1,class:`pick`,title:`배경이 이 지역을 따릅니다`},vc={key:2,class:`badge demo-badge`},yc={class:`status`},bc={class:`metrics`},xc={class:`value`},Sc={class:`band`},Cc={class:`value`},wc={class:`band`},Tc=[`aria-pressed`,`title`],Ec=[`aria-expanded`],Dc=Q({__name:`WeatherCard`,props:{cityItem:{type:Object,required:!0},favorite:{type:Boolean,default:!1},here:{type:Boolean,default:!1},open:{type:Boolean,default:!1},selected:{type:Boolean,default:!1}},emits:[`select-card`,`click-detail`,`toggle-favorite`],setup(e,{emit:t}){let n=e,r=t,i=X(()=>{let e=n.cityItem.status;return e.includes(`맑`)?`warm`:e.includes(`비`)||e.includes(`눈`)?`cool`:`neutral`}),a=[{min:30,key:`scorching`,label:`무더워요`},{min:25,key:`hot`,label:`더워요`},{min:20,key:`mild`,label:`선선해요`},{min:10,key:`cool`,label:`쌀쌀해요`},{min:-1/0,key:`cold`,label:`추워요`}],o=[{min:80,key:`wet`,label:`눅눅해요`},{min:60,key:`humid`,label:`습해요`},{min:40,key:`nice`,label:`쾌적해요`},{min:-1/0,key:`dry`,label:`건조해요`}],s=X(()=>a.find(e=>n.cityItem.temp>=e.min)),c=X(()=>o.find(e=>n.cityItem.humidity>=e.min));return(t,n)=>(H(),U(`div`,{class:D([`weather-card`,{here:e.here,open:e.open,selected:e.selected}]),onClick:n[2]||=t=>r(`select-card`,e.cityItem.id)},[G(`div`,mc,[G(`div`,{class:D([`icon-tile`,i.value])},[K(pc,{status:e.cityItem.status,size:32},null,8,[`status`])],2),G(`div`,hc,[G(`h4`,null,[q(O(e.cityItem.name)+` `,1),e.here?(H(),U(`span`,gc,[K(Rs,{name:`location`,size:11}),n[3]||=q(` 현재 위치 `,-1)])):J(``,!0),e.selected?(H(),U(`span`,_c,[K(Rs,{name:`check`,size:13})])):J(``,!0),e.cityItem.demo?(H(),U(`span`,vc,`데모`)):J(``,!0)]),G(`p`,yc,O(e.cityItem.status),1)])]),G(`div`,bc,[G(`p`,{class:D([`metric`,s.value.key])},[K(Rs,{name:`thermometer`,size:15}),G(`b`,xc,[q(O(e.cityItem.temp),1),n[4]||=G(`span`,{class:`unit`},`°C`,-1)]),G(`span`,Sc,O(s.value.label),1)],2),G(`p`,{class:D([`metric`,c.value.key])},[K(Rs,{name:`droplet`,size:15}),G(`b`,Cc,[q(O(e.cityItem.humidity),1),n[5]||=G(`span`,{class:`unit`},`%`,-1)]),G(`span`,wc,O(c.value.label),1)],2)]),G(`button`,{class:D([`star`,{on:e.favorite}]),type:`button`,"aria-pressed":e.favorite,title:e.favorite?`즐겨찾기 해제`:`즐겨찾기에 추가`,onClick:n[0]||=Ro(t=>r(`toggle-favorite`,e.cityItem.id),[`stop`])},[K(Rs,{name:`star`,size:17,filled:e.favorite},null,8,[`filled`])],10,Tc),e.cityItem.demo?J(``,!0):(H(),U(`button`,{key:0,class:D([`btn-detail`,{on:e.open}]),"aria-expanded":e.open,onClick:n[1]||=Ro(t=>r(`click-detail`,e.cityItem.name,e.cityItem.status),[`stop`])},O(e.open?`닫기`:`시간별`),11,Ec))],2))}},[[`__scopeId`,`data-v-12b51248`]]),Oc={class:`by-status`},kc={class:`group-head`},Ac={class:`status-name`},jc={class:`count`},Mc={class:`chips`},Nc=[`onClick`],Pc={class:`chip-name`},Fc={class:`chip-temp`},Ic={class:`chip-region`},Lc=[`title`,`onClick`],Rc={key:0,class:`empty-message`},zc=Q({__name:`WeatherByStatus`,props:{list:{type:Array,required:!0},favorites:{type:Array,default:()=>[]},hereId:{type:String,default:``},selectedId:{type:String,default:``}},emits:[`select-card`,`toggle-favorite`],setup(e){let t=e,n=X(()=>{let e=new Map;for(let n of t.list)e.has(n.status)||e.set(n.status,[]),e.get(n.status).push(n);return[...e.entries()].map(([e,t])=>({status:e,cities:[...t].sort((e,t)=>t.temp-e.temp)})).sort((e,t)=>t.cities.length-e.cities.length)});return(t,r)=>(H(),U(`div`,Oc,[(H(!0),U(V,null,B(n.value,n=>(H(),U(`div`,{key:n.status,class:`group`},[G(`p`,kc,[K(pc,{status:n.status,size:26},null,8,[`status`]),G(`b`,Ac,O(n.status),1),G(`span`,jc,O(n.cities.length)+`곳`,1)]),G(`ul`,Mc,[(H(!0),U(V,null,B(n.cities,n=>(H(),U(`li`,{key:n.id},[G(`button`,{type:`button`,class:D([`chip`,{here:n.id===e.hereId,selected:n.id===e.selectedId}]),onClick:e=>t.$emit(`select-card`,n.id)},[n.id===e.hereId?(H(),W(Rs,{key:0,name:`location`,size:11})):J(``,!0),G(`span`,Pc,O(n.name),1),n.id===e.selectedId?(H(),W(Rs,{key:1,name:`check`,size:12,class:`chip-check`})):J(``,!0),G(`span`,Fc,O(n.temp)+`°`,1),G(`span`,Ic,O(n.region),1)],10,Nc),G(`button`,{type:`button`,class:D([`chip-star`,{on:e.favorites.includes(n.id)}]),title:e.favorites.includes(n.id)?`즐겨찾기 해제`:`즐겨찾기에 추가`,onClick:e=>t.$emit(`toggle-favorite`,n.id)},[K(Rs,{name:`star`,size:13,filled:e.favorites.includes(n.id)},null,8,[`filled`])],10,Lc)]))),128))])]))),128)),n.value.length?J(``,!0):(H(),U(`p`,Rc,[K(Rs,{name:`empty`,size:22}),r[0]||=q(` 표시할 날씨가 없습니다. `,-1)]))]))}},[[`__scopeId`,`data-v-968dcb10`]]),Bc=`https://api.open-meteo.com/v1/forecast`,Vc=[{id:`seoul`,name:`서울`,region:`서울`,lat:37.5665,lon:126.978},{id:`incheon`,name:`인천`,region:`인천`,lat:37.4563,lon:126.7052},{id:`suwon`,name:`수원`,region:`경기`,lat:37.2636,lon:127.0286},{id:`seongnam`,name:`성남`,region:`경기`,lat:37.42,lon:127.1265},{id:`goyang`,name:`고양`,region:`경기`,lat:37.6584,lon:126.832},{id:`yongin`,name:`용인`,region:`경기`,lat:37.2411,lon:127.1776},{id:`bucheon`,name:`부천`,region:`경기`,lat:37.5035,lon:126.766},{id:`pyeongtaek`,name:`평택`,region:`경기`,lat:36.9921,lon:127.1129},{id:`chuncheon`,name:`춘천`,region:`강원`,lat:37.8813,lon:127.73},{id:`wonju`,name:`원주`,region:`강원`,lat:37.3422,lon:127.9202},{id:`gangneung`,name:`강릉`,region:`강원`,lat:37.7519,lon:128.8761},{id:`sokcho`,name:`속초`,region:`강원`,lat:38.207,lon:128.5918},{id:`cheongju`,name:`청주`,region:`충북`,lat:36.6424,lon:127.489},{id:`chungju`,name:`충주`,region:`충북`,lat:36.9911,lon:127.926},{id:`jecheon`,name:`제천`,region:`충북`,lat:37.1326,lon:128.191},{id:`cheonan`,name:`천안`,region:`충남`,lat:36.8151,lon:127.1139},{id:`asan`,name:`아산`,region:`충남`,lat:36.7898,lon:127.0018},{id:`seosan`,name:`서산`,region:`충남`,lat:36.7848,lon:126.4503},{id:`boryeong`,name:`보령`,region:`충남`,lat:36.3333,lon:126.6128},{id:`daejeon`,name:`대전`,region:`대전`,lat:36.3504,lon:127.3845},{id:`sejong`,name:`세종`,region:`세종`,lat:36.48,lon:127.289},{id:`jeonju`,name:`전주`,region:`전북`,lat:35.8242,lon:127.148},{id:`gunsan`,name:`군산`,region:`전북`,lat:35.9676,lon:126.7369},{id:`iksan`,name:`익산`,region:`전북`,lat:35.9483,lon:126.9576},{id:`namwon`,name:`남원`,region:`전북`,lat:35.4164,lon:127.3905},{id:`mokpo`,name:`목포`,region:`전남`,lat:34.8118,lon:126.3922},{id:`yeosu`,name:`여수`,region:`전남`,lat:34.7604,lon:127.6622},{id:`suncheon`,name:`순천`,region:`전남`,lat:34.9506,lon:127.4872},{id:`gwangyang`,name:`광양`,region:`전남`,lat:34.9407,lon:127.696},{id:`gwangju`,name:`광주`,region:`광주`,lat:35.1595,lon:126.8526},{id:`daegu`,name:`대구`,region:`대구`,lat:35.8714,lon:128.6014},{id:`pohang`,name:`포항`,region:`경북`,lat:36.019,lon:129.3435},{id:`gyeongju`,name:`경주`,region:`경북`,lat:35.8562,lon:129.2247},{id:`andong`,name:`안동`,region:`경북`,lat:36.5684,lon:128.7294},{id:`gumi`,name:`구미`,region:`경북`,lat:36.1195,lon:128.3446},{id:`yeongju`,name:`영주`,region:`경북`,lat:36.8057,lon:128.624},{id:`ulsan`,name:`울산`,region:`울산`,lat:35.5384,lon:129.3114},{id:`changwon`,name:`창원`,region:`경남`,lat:35.228,lon:128.6811},{id:`jinju`,name:`진주`,region:`경남`,lat:35.1803,lon:128.1076},{id:`tongyeong`,name:`통영`,region:`경남`,lat:34.8544,lon:128.4331},{id:`gimhae`,name:`김해`,region:`경남`,lat:35.2286,lon:128.8894},{id:`geoje`,name:`거제`,region:`경남`,lat:34.8806,lon:128.6211},{id:`busan`,name:`부산`,region:`부산`,lat:35.1796,lon:129.0756},{id:`jeju`,name:`제주`,region:`제주`,lat:33.4996,lon:126.5312},{id:`seogwipo`,name:`서귀포`,region:`제주`,lat:33.2541,lon:126.56}],Hc={서울:`서울`,인천:`인천/경기`,경기:`인천/경기`,강원:`강원`,대전:`대전/세종/충청`,세종:`대전/세종/충청`,충북:`대전/세종/충청`,충남:`대전/세종/충청`,광주:`광주/전라`,전북:`광주/전라`,전남:`광주/전라`,대구:`대구/경북`,경북:`대구/경북`,부산:`부산/울산/경남`,울산:`부산/울산/경남`,경남:`부산/울산/경남`,제주:`제주`},Uc=e=>Hc[e]??e,Wc=[...new Set(Vc.map(e=>Uc(e.region)))],Gc={0:`맑음`,1:`대체로 맑음`,2:`구름조금`,3:`흐림`,45:`안개`,48:`안개`,51:`이슬비`,53:`이슬비`,55:`이슬비`,56:`어는 비`,57:`어는 비`,61:`비`,63:`비`,65:`호우`,66:`어는 비`,67:`어는 비`,71:`눈`,73:`눈`,75:`폭설`,77:`싸락눈`,80:`소나기`,81:`소나기`,82:`소나기`,85:`눈보라`,86:`눈보라`,95:`뇌우`,96:`뇌우`,99:`뇌우`},Kc=e=>Gc[e]??`알 수 없음`,qc=`inwoo-weather-cache`,Jc=6e5,Yc=(e,t)=>{try{let n=localStorage.getItem(qc);if(!n)return null;let r=JSON.parse(n);return r.count===e&&Date.now()-r.at<=t?r:null}catch{return null}},Xc=(e,t)=>{try{localStorage.setItem(qc,JSON.stringify({at:Date.now(),count:e,rows:t}))}catch{}},Zc=e=>new Promise(t=>setTimeout(t,e)),Qc=`https://api.met.no/weatherapi/locationforecast/2.0/compact`,$c=[[`thunder`,`뇌우`],[`heavysnow`,`폭설`],[`snow`,`눈`],[`sleet`,`진눈깨비`],[`heavyrainshowers`,`소나기`],[`rainshowers`,`소나기`],[`lightrainshowers`,`소나기`],[`heavyrain`,`호우`],[`lightrain`,`이슬비`],[`rain`,`비`],[`fog`,`안개`],[`cloudy`,`흐림`],[`partlycloudy`,`구름조금`],[`fair`,`대체로 맑음`],[`clearsky`,`맑음`]],el=(e=``)=>{let t=e.replace(/_(day|night|polartwilight)$/,``);return $c.find(([e])=>t.includes(e))?.[1]??`알 수 없음`},tl=async(e,t,n)=>{let r=[];for(let i=0;i<e.length;i+=t)r.push(...await Promise.all(e.slice(i,i+t).map(n)));return r},nl=async e=>tl(e,8,async e=>{let t=await fetch(`${Qc}?lat=${e.lat}&lon=${e.lon}`);if(!t.ok)throw Error(`백업 서버가 ${t.status} 응답을 보냈습니다.`);let n=(await t.json()).properties.timeseries[0],r=n.data.instant.details;return{id:e.id,name:e.name,region:e.region,group:Uc(e.region),temp:Math.round(r.air_temperature??0),humidity:Math.round(r.relative_humidity??0),status:el(n.data.next_1_hours?.summary?.symbol_code),observedAt:n.time??``}}),rl=async e=>{for(let t=0;t<2;t++){let n=await fetch(e);if(n.ok)return n;if(n.status!==429||t===1)throw Error(`날씨 서버가 ${n.status} 응답을 보냈습니다.`);await Zc(1500)}},il=async(e=Vc,t=!1)=>{let n=t?null:Yc(e.length,Jc);if(n)return{rows:n.rows,at:n.at,stale:!1,source:`cache`};let r;try{r=await(await rl(`${Bc}?${params}`)).json()}catch(t){console.warn(`[weather] 1차 서버 실패, 백업 서버로 넘어갑니다.`,t);try{let t=await nl(e);return Xc(e.length,t),{rows:t,at:Date.now(),stale:!1,source:`met.no`}}catch(n){console.warn(`[weather] 백업 서버도 실패했습니다.`,n);let r=Yc(e.length,1/0);if(r)return{rows:r.rows,at:r.at,stale:!0};throw t}}let i=Array.isArray(r)?r:[r],a=e.map((e,t)=>{let n=i[t]?.current??{};return{id:e.id,name:e.name,region:e.region,group:Uc(e.region),temp:Math.round(n.temperature_2m??0),humidity:Math.round(n.relative_humidity_2m??0),status:Kc(n.weather_code),observedAt:n.time??``}});return Xc(e.length,a),{rows:a,at:Date.now(),stale:!1,source:`open-meteo`}},al=(e,t,n,r)=>{let i=e=>e*Math.PI/180,a=i(n-e),o=i(r-t),s=Math.sin(a/2)**2+Math.cos(i(e))*Math.cos(i(n))*Math.sin(o/2)**2;return 12742*Math.asin(Math.sqrt(s))},ol=(e,t)=>Vc.reduce((n,r)=>{let i=al(e,t,r.lat,r.lon);return!n||i<n.distance?{...r,distance:i}:n},null),sl=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,cl=(e,t)=>{let n=new Date(`${e}T00:00:00`);return n.setDate(n.getDate()+t),sl(n)},ll={min:cl(sl(new Date),-90),max:cl(sl(new Date),14)},ul=async(e,t,n=t)=>{let r=new URLSearchParams({latitude:e.lat,longitude:e.lon,hourly:`temperature_2m,relative_humidity_2m,weather_code,precipitation_probability`,start_date:t,end_date:n,timezone:`Asia/Seoul`}),i=await fetch(`${Bc}?${r}`);if(!i.ok)throw Error(`시간별 예보를 받지 못했습니다 (${i.status}).`);let{hourly:a}=await i.json();return a.time.map((e,t)=>({time:e,hour:Number(e.slice(11,13)),temp:Math.round(a.temperature_2m[t]),humidity:Math.round(a.relative_humidity_2m[t]),status:Kc(a.weather_code[t]),rainChance:a.precipitation_probability[t]??0}))},dl=[[`맑음`,31,40],[`대체로 맑음`,28,52],[`구름조금`,26,58],[`구름많음`,24,66],[`흐림`,21,72],[`이슬비`,18,84],[`비`,19,92],[`호우`,17,96],[`소나기`,23,80],[`눈`,-3,74],[`폭설`,-7,81],[`안개`,12,95],[`뇌우`,24,85]].map(([e,t,n])=>({id:`demo-`+e.replace(/\s/g,``),name:e,region:`데모`,group:`데모`,temp:t,humidity:n,status:e,demo:!0})),fl=e=>Vc.find(t=>t.id===e)??null,pl={key:0,class:`detail`},ml={class:`detail-head`},hl={key:0,class:`sido`},gl={class:`current`},_l={class:`date-bar`},vl=[`disabled`],yl={class:`date-field`},bl={class:`date-label`},xl={key:0,class:`tag today`},Sl={key:1,class:`tag past`},Cl={key:2,class:`tag future`},wl=[`min`,`max`],Tl=[`disabled`],El={key:0,class:`state`},Dl={key:1,class:`state error`},Ol={class:`axis`},kl={key:0},Al={class:`bar-slot`},jl={class:`temp`},Ml={key:0,class:`rain`},Nl={key:1,class:`rain none`},Pl={class:`hour`},Fl={key:2,class:`daymark`},Il=6,Ll=12,Rl=Q({__name:`HourlyDetail`,props:{city:{type:Object,default:null}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=P([]),a=P(!1),o=P(``),s=sl(new Date),c=new Date().getHours(),l=P(s),u=P(null),d=X(()=>l.value===s),f=X(()=>l.value<s);z(()=>[n.city?.id,l.value],async()=>{if(n.city){a.value=!0,o.value=``;try{let e=fl(n.city.id);if(d.value){let t=await ul(e,l.value,cl(l.value,1)),n=new Date,r=new Date(n).setHours(n.getHours()-Il,0,0,0),a=new Date(n).setHours(n.getHours()+Ll,0,0,0);i.value=t.filter(e=>{let t=new Date(e.time).getTime();return t>=r&&t<=a})}else i.value=await ul(e,l.value)}catch(e){o.value=`시간별 날씨를 불러오지 못했습니다.`,i.value=[],console.error(`[weather] 시간별 조회 실패`,e)}finally{a.value=!1}if(d.value){await vn();let e=u.value,t=e?.querySelector(`.now`);e&&t&&(e.scrollLeft=t.offsetLeft-e.clientWidth/2+t.offsetWidth/2)}}},{immediate:!0}),z(()=>n.city?.id,()=>l.value=s);let p=e=>{let t=cl(l.value,e);t>=ll.min&&t<=ll.max&&(l.value=t)},m=X(()=>{let e=new Date(`${l.value}T00:00:00`),t=[`일`,`월`,`화`,`수`,`목`,`금`,`토`][e.getDay()];return`${e.getMonth()+1}월 ${e.getDate()}일 (${t})`}),h=X(()=>{if(!i.value.length)return{min:0,max:1};let e=i.value.map(e=>e.temp),t=Math.min(...e),n=Math.max(...e);return{min:t,max:n===t?t+1:n}}),g=e=>Math.round(26+(e-h.value.min)/(h.value.max-h.value.min)*34);return(t,n)=>e.city?(H(),U(`section`,pl,[G(`header`,ml,[K(pc,{status:e.city.status,size:26},null,8,[`status`]),G(`div`,null,[G(`h4`,null,[q(O(e.city.name)+` `,1),e.city.region===e.city.name?J(``,!0):(H(),U(`span`,hl,O(e.city.region),1))]),G(`p`,gl,`지금 `+O(e.city.temp)+`°C · 습도 `+O(e.city.humidity)+`% · `+O(e.city.status),1)]),G(`button`,{class:`close`,type:`button`,"aria-label":`닫기`,onClick:n[0]||=e=>r(`close`)},`✕`)]),G(`div`,_l,[G(`button`,{type:`button`,class:`step`,disabled:F(cl)(l.value,-1)<F(ll).min,"aria-label":`하루 전`,onClick:n[1]||=e=>p(-1)},` ‹ `,8,vl),G(`label`,yl,[G(`span`,bl,[q(O(m.value)+` `,1),d.value?(H(),U(`b`,xl,`오늘`)):f.value?(H(),U(`b`,Sl,`지난 날씨`)):(H(),U(`b`,Cl,`예보`))]),R(G(`input`,{"onUpdate:modelValue":n[2]||=e=>l.value=e,type:`date`,min:F(ll).min,max:F(ll).max},null,8,wl),[[Z,l.value]])]),G(`button`,{type:`button`,class:`step`,disabled:F(cl)(l.value,1)>F(ll).max,"aria-label":`하루 뒤`,onClick:n[3]||=e=>p(1)},` › `,8,Tl),d.value?J(``,!0):(H(),U(`button`,{key:0,type:`button`,class:`today-btn`,onClick:n[4]||=e=>l.value=F(s)},` 오늘로 `))]),a.value?(H(),U(`p`,El,`시간별 예보를 불러오는 중…`)):o.value?(H(),U(`p`,Dl,O(o.value),1)):i.value.length?(H(),U(V,{key:2},[G(`p`,Ol,[d.value?(H(),U(`span`,kl,`지금 기준 앞뒤 시간 · `)):J(``,!0),q(`최저 `+O(h.value.min)+`°C ~ 최고 `+O(h.value.max)+`°C `,1)]),G(`ul`,{ref_key:`hoursEl`,ref:u,class:`hours`},[(H(!0),U(V,null,B(i.value,e=>(H(),U(`li`,{key:e.time,class:D({now:d.value&&e.hour===F(c)})},[G(`span`,Al,[G(`span`,jl,O(e.temp)+`°`,1),G(`span`,{class:`bar`,style:E({height:g(e.temp)+`px`})},null,4)]),K(pc,{status:e.status,size:18},null,8,[`status`]),e.rainChance>0?(H(),U(`span`,Ml,[K(Rs,{name:`droplet`,size:10}),q(O(e.rainChance)+`% `,1)])):(H(),U(`span`,Nl,`–`)),G(`span`,Pl,O(d.value&&e.hour===F(c)?`지금`:e.hour+`시`),1),e.hour===0?(H(),U(`span`,Fl,`다음날`)):J(``,!0)],2))),128))],512)],64)):J(``,!0)])):J(``,!0)}},[[`__scopeId`,`data-v-ab3056f6`]]),zl=`modulepreload`,Bl=function(e){return`/inwoo-vue/`+e},Vl={},Hl=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Bl(t,n),t=s(t),t in Vl)return;Vl[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:zl,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ul={class:`rain`},Wl=Q({__name:`WeatherBackdrop`,props:{status:{type:String,default:``}},setup(e){let t=e,n=Object.fromEntries(Object.entries(Object.assign({"../../../assets/photos/cloudy.jpg":()=>Hl(()=>import(`./cloudy-79FvOUrg.js`).then(e=>e.default),[]),"../../../assets/photos/lightning.jpg":()=>Hl(()=>import(`./lightning-BiLOcaih.js`).then(e=>e.default),[]),"../../../assets/photos/mostly-sunny.jpg":()=>Hl(()=>import(`./mostly-sunny-ia0xcVKP.js`).then(e=>e.default),[]),"../../../assets/photos/overcast.jpg":()=>Hl(()=>import(`./overcast-hCz2yzGp.js`).then(e=>e.default),[]),"../../../assets/photos/partly-cloudy.jpg":()=>Hl(()=>import(`./partly-cloudy-BCMTYjrN.js`).then(e=>e.default),[]),"../../../assets/photos/rain.jpg":()=>Hl(()=>import(`./rain-CRgnNhCC.js`).then(e=>e.default),[]),"../../../assets/photos/storm.jpg":()=>Hl(()=>import(`./storm-5A07q_Yo.js`).then(e=>e.default),[]),"../../../assets/photos/sunny.jpg":()=>Hl(()=>import(`./sunny-BxS2j8Tt.js`).then(e=>e.default),[])})).map(([e,t])=>[e.split(`/`).pop().replace(`.jpg`,``),t])),r={},i=async e=>(r[e]||(r[e]=await n[e]?.()),r[e]),a=[[`뇌우`,{photo:`storm`,effect:`storm`}],[`번개`,{photo:`lightning`,effect:`lightning`}],[`폭설`,{photo:`overcast`,effect:`snow-heavy`}],[`눈보라`,{photo:`overcast`,effect:`snow-heavy`}],[`싸락눈`,{photo:`overcast`,effect:`snow`}],[`눈`,{photo:`overcast`,effect:`snow`}],[`한파`,{photo:`overcast`,effect:`snow`}],[`소나기`,{photo:`rain`,effect:`rain`}],[`호우`,{photo:`rain`,effect:`rain-heavy`}],[`이슬비`,{photo:`rain`,effect:`drizzle`}],[`어는 비`,{photo:`rain`,effect:`rain`}],[`비`,{photo:`rain`,effect:`rain`}],[`안개`,{photo:`overcast`,effect:`fog`}],[`미세먼지`,{photo:`overcast`,effect:`fog`}],[`흐림`,{photo:`overcast`,effect:`clouds-slow`}],[`구름조금`,{photo:`partly-cloudy`,effect:`clouds`}],[`구름많`,{photo:`cloudy`,effect:`clouds`}],[`구름`,{photo:`cloudy`,effect:`clouds`}],[`대체로 맑`,{photo:`mostly-sunny`,effect:`sun-clouds`}],[`맑`,{photo:`sunny`,effect:`sun`}]],o={photo:`partly-cloudy`,effect:`clouds`},s=X(()=>{if(!t.status)return o;let e=a.find(([e])=>t.status.includes(e));return e?e[1]:o}),c=P([``,``]),l=P(0),u=0;z(()=>s.value.photo,async e=>{let t=++u,n=await i(e);if(!n||t!==u||c.value[l.value]===n)return;let r=1-l.value;c.value[r]=n,l.value=r},{immediate:!0});let d=(e,{minDur:t,maxDur:n,minLen:r,maxLen:i})=>Array.from({length:e},(e,a)=>{let o=a*37%100/100,s=a*61%100/100,c=a*83%100/100,l=a*29%100/100;return{left:o*104-2,dur:t+s*(n-t),len:r+c*(i-r),delay:-l*n,opacity:.3+c*.55,width:c>.72?2:1.3}}),f=d(120,{minDur:.5,maxDur:.95,minLen:42,maxLen:110}),p=d(190,{minDur:.34,maxDur:.6,minLen:60,maxLen:150}),m=d(80,{minDur:1.3,maxDur:2.1,minLen:14,maxLen:34}),h=X(()=>s.value.effect===`rain-heavy`?p:s.value.effect===`drizzle`?m:f),g=X(()=>[`storm`,`lightning`,`rain-heavy`,`rain`].includes(s.value.effect));return(e,t)=>(H(),U(`div`,{class:D([`backdrop`,[`fx-${s.value.effect}`,{dark:g.value}]]),"aria-hidden":`true`},[(H(!0),U(V,null,B(c.value,(e,t)=>(H(),U(`div`,{key:t,class:D([`photo`,{on:t===l.value}]),style:E(e?{backgroundImage:`url(${e})`}:null)},null,6))),128)),s.value.effect===`sun`||s.value.effect===`sun-clouds`?(H(),U(V,{key:0},[t[0]||=G(`div`,{class:`glow`},null,-1),t[1]||=G(`div`,{class:`rays`},null,-1)],64)):J(``,!0),[`clouds`,`clouds-slow`,`sun-clouds`,`fog`,`overcast`].includes(s.value.effect)?(H(),U(V,{key:1},[t[2]||=G(`div`,{class:`cloud-layer a`},null,-1),t[3]||=G(`div`,{class:`cloud-layer b`},null,-1)],64)):J(``,!0),[`rain`,`rain-heavy`,`drizzle`,`storm`].includes(s.value.effect)?(H(),U(V,{key:2},[G(`div`,Ul,[(H(!0),U(V,null,B(h.value,(e,t)=>(H(),U(`span`,{key:t,class:`drop`,style:E({left:e.left+`%`,height:e.len+`px`,width:e.width+`px`,opacity:e.opacity,animationDuration:e.dur+`s`,animationDelay:e.delay+`s`})},null,4))),128))]),t[4]||=G(`div`,{class:`mist`},null,-1)],64)):J(``,!0),[`snow`,`snow-heavy`].includes(s.value.effect)?(H(),U(V,{key:3},[t[5]||=G(`div`,{class:`snow-layer a`},null,-1),t[6]||=G(`div`,{class:`snow-layer b`},null,-1),t[7]||=G(`div`,{class:`snow-layer c`},null,-1)],64)):J(``,!0),s.value.effect===`fog`?(H(),U(V,{key:4},[t[8]||=G(`div`,{class:`fog-layer a`},null,-1),t[9]||=G(`div`,{class:`fog-layer b`},null,-1)],64)):J(``,!0),[`storm`,`lightning`].includes(s.value.effect)?(H(),U(V,{key:5},[t[11]||=G(`div`,{class:`flash`},null,-1),(H(),U(V,null,B(2,e=>G(`svg`,{key:e,class:D([`bolt`,e===1?`a`:`b`]),viewBox:`0 0 200 300`,preserveAspectRatio:`xMidYMin meet`},[...t[10]||=[G(`path`,{d:`M96 0 78 96 112 88 66 210`,fill:`none`,stroke:`#bfe0ff`,"stroke-width":`11`,"stroke-linejoin":`round`,"stroke-linecap":`round`,opacity:`0.55`},null,-1),G(`path`,{d:`M96 0 78 96 112 88 66 210 90 128 58 138Z`,fill:`#f2f9ff`},null,-1),G(`path`,{d:`M96 0 78 96 112 88 66 210`,fill:`none`,stroke:`#fff`,"stroke-width":`2.4`,"stroke-linejoin":`round`,"stroke-linecap":`round`},null,-1),G(`path`,{d:`M84 62 46 104M104 108 142 142M74 150 44 188`,fill:`none`,stroke:`#eaf5ff`,"stroke-width":`2.2`,"stroke-linecap":`round`},null,-1)]],2)),64))],64)):J(``,!0),t[12]||=G(`div`,{class:`veil`},null,-1)],2))}},[[`__scopeId`,`data-v-e690c8f2`]]),Gl=t({default:()=>mu}),Kl={class:`dashboard-wrapper`},ql={class:`view-tabs`,role:`tablist`},Jl=[`aria-selected`],Yl=[`aria-selected`],Xl={class:`tool-row`},Zl={class:`summary`},Ql={key:0,class:`fav-count`},$l=[`disabled`],eu=[`disabled`],tu={key:0,class:`hint stale`},nu={key:1,class:`hint`},ru={key:3,class:`error-message`},iu={key:4,class:`empty-message`},au={key:0,class:`empty-message`},ou={key:1,class:`pager`,"aria-label":`목록 페이지`},su=[`disabled`],cu=[`aria-current`,`onClick`],lu=[`disabled`],uu={class:`status-bar`},du={key:0,class:`stamp`},fu=`inwoo-weather-favorites`,pu=5,mu=Q({__name:`WeatherParent`,setup(e){let t=P([]),n=P(!1),r=P(``),i=P(!1),a=P(``),o=P(``),s=P(`전체`),c=P(`region`),l=P(`카드를 클릭하거나 검색해 보세요.`),u=P(``),d=P(1),f=()=>{u.value=``,l.value=`카드를 클릭하거나 검색해 보세요.`},p=e=>{if(u.value===e){f();return}u.value=e;let n=t.value.find(t=>t.id===e);l.value=n?`${n.name} · ${n.status} · ${n.temp}°C · 습도 ${n.humidity}%`:`카드를 클릭하거나 검색해 보세요.`},m=P(JSON.parse(localStorage.getItem(fu)??`[]`)),h=e=>{m.value=m.value.includes(e)?m.value.filter(t=>t!==e):[...m.value,e]};z(m,e=>localStorage.setItem(fu,JSON.stringify(e)),{deep:!0});let g=P(``),_=P(`idle`),v=()=>{if(!navigator.geolocation){_.value=`denied`;return}_.value=`asking`,navigator.geolocation.getCurrentPosition(({coords:e})=>{let t=ol(e.latitude,e.longitude);g.value=t?.id??``,_.value=`done`},()=>{_.value=`denied`},{timeout:8e3})},y=async(e=!1)=>{n.value=!0,r.value=``;try{let{rows:n,at:r,stale:o}=await il(void 0,e);t.value=[...n,...dl],i.value=o,a.value=new Date(r).toLocaleTimeString(`ko-KR`,{hour:`2-digit`,minute:`2-digit`})}catch(e){r.value=`날씨를 불러오지 못했습니다. 네트워크를 확인하고 다시 시도해 주세요.`,i.value=!1,console.error(`[weather] 불러오기 실패`,e)}finally{n.value=!1}};mr(async()=>{y(),(await navigator.permissions?.query({name:`geolocation`}).catch(()=>null))?.state===`granted`&&v()});let b=X(()=>{let e=o.value.trim();return t.value.filter(t=>!e||t.name.includes(e))}),x=X(()=>{let e=b.value.filter(e=>s.value===`전체`||e.group===s.value),t=e=>e.id===g.value?0:m.value.includes(e.id)?1:2;return[...e].sort((e,n)=>t(e)-t(n))}),S=X(()=>b.value.reduce((e,t)=>(e[t.group]=(e[t.group]??0)+1,e),{전체:b.value.length})),C=X(()=>Math.max(1,Math.ceil(x.value.length/pu))),ee=X(()=>x.value.slice((d.value-1)*pu,d.value*pu));z([o,s,c],()=>d.value=1),z(C,e=>{d.value>e&&(d.value=e)});let te=X(()=>t.value.find(e=>e.id===u.value)??null),ne=X(()=>t.value.find(e=>e.id===u.value)??t.value.find(e=>e.id===g.value)??null),re=X(()=>ne.value?.status??``),ie=X(()=>b.value.filter(e=>m.value.includes(e.id)).length);z(l,e=>{console.log(`👁️‍🗨️ [watch 감지] 상태 바 문구가 업데이트되었습니다 -> "${e}"`)});let ae=P(``),w=X(()=>t.value.find(e=>e.id===ae.value)??null),oe=e=>{let n=t.value.find(t=>t.name===e);ae.value=ae.value===n?.id?``:n?.id??``};return(e,f)=>(H(),U(`div`,Kl,[K(Wl,{status:re.value},null,8,[`status`]),K(Ns,null,{default:L(()=>[K(Us,{"current-query":o.value,onUpdateQuery:f[0]||=e=>o.value=e},null,8,[`current-query`])]),_:1}),K(Ns,null,{default:L(()=>[G(`div`,ql,[G(`button`,{type:`button`,role:`tab`,"aria-selected":c.value===`region`,class:D({active:c.value===`region`}),onClick:f[1]||=e=>c.value=`region`},[K(Rs,{name:`city`,size:16}),f[10]||=q(` 지역별 날씨 현황 `,-1)],10,Jl),G(`button`,{type:`button`,role:`tab`,"aria-selected":c.value===`status`,class:D({active:c.value===`status`}),onClick:f[2]||=e=>c.value=`status`},[K(Rs,{name:`droplet`,size:16}),f[11]||=q(` 날씨별 지역 현황 `,-1)],10,Yl)]),G(`div`,Xl,[G(`p`,Zl,[G(`b`,null,O(b.value.length),1),f[12]||=q(`곳 `,-1),ie.value?(H(),U(`span`,Ql,[K(Rs,{name:`star`,size:12,filled:!0}),q(` `+O(ie.value),1)])):J(``,!0)]),G(`button`,{class:`tool`,type:`button`,disabled:_.value===`asking`,onClick:v},[K(Rs,{name:`location`,size:14}),q(` `+O(_.value===`asking`?`찾는 중…`:`내 위치`),1)],8,$l),G(`button`,{class:`tool`,type:`button`,disabled:n.value,onClick:f[3]||=e=>y(!0)},O(n.value?`불러오는 중…`:`새로고침`),9,eu)]),i.value?(H(),U(`p`,tu,[f[13]||=q(` 지금 서버 응답을 받지 못해 `,-1),G(`b`,null,O(a.value)+`에 받아 둔 값`,1),f[14]||=q(`을 보여 주고 있습니다. 잠시 뒤 새로고침을 눌러 보세요. `,-1)])):J(``,!0),_.value===`denied`?(H(),U(`p`,nu,` 위치 권한이 없어 현재 위치를 표시하지 못했습니다. 나머지 기능은 그대로 쓸 수 있습니다. `)):J(``,!0),c.value===`region`?(H(),W(qs,{key:2,regions:[...F(Wc),`데모`],current:s.value,counts:S.value,onSelectRegion:f[4]||=e=>s.value=e},null,8,[`regions`,`current`,`counts`])):J(``,!0),r.value?(H(),U(`p`,ru,[q(O(r.value)+` `,1),G(`button`,{type:`button`,onClick:f[5]||=e=>y(!0)},`다시 시도`)])):n.value&&!t.value.length?(H(),U(`p`,iu,` 날씨를 불러오는 중입니다… `)):c.value===`region`?(H(),U(V,{key:5},[(H(!0),U(V,null,B(ee.value,e=>(H(),U(V,{key:e.id},[K(Dc,{"city-item":e,favorite:m.value.includes(e.id),here:e.id===g.value,open:e.id===ae.value,selected:e.id===u.value,onSelectCard:p,onClickDetail:oe,onToggleFavorite:h},null,8,[`city-item`,`favorite`,`here`,`open`,`selected`]),e.id===ae.value?(H(),W(Rl,{key:0,city:w.value,onClose:f[6]||=e=>ae.value=``},null,8,[`city`])):J(``,!0)],64))),128)),x.value.length===0?(H(),U(`p`,au,[K(Rs,{name:`empty`,size:22}),f[15]||=q(` 검색 결과와 일치하는 도시가 없습니다. `,-1)])):J(``,!0),C.value>1?(H(),U(`nav`,ou,[G(`button`,{type:`button`,disabled:d.value===1,"aria-label":`이전`,onClick:f[7]||=e=>d.value--},`‹`,8,su),(H(!0),U(V,null,B(C.value,e=>(H(),U(`button`,{key:e,type:`button`,class:D({active:e===d.value}),"aria-current":e===d.value?`page`:void 0,onClick:t=>d.value=e},O(e),11,cu))),128)),G(`button`,{type:`button`,disabled:d.value===C.value,"aria-label":`다음`,onClick:f[8]||=e=>d.value++},` › `,8,lu)])):J(``,!0)],64)):(H(),U(V,{key:6},[te.value?(H(),U(V,{key:0},[K(Dc,{"city-item":te.value,favorite:m.value.includes(te.value.id),here:te.value.id===g.value,open:te.value.id===ae.value,selected:!0,onSelectCard:p,onClickDetail:oe,onToggleFavorite:h},null,8,[`city-item`,`favorite`,`here`,`open`]),te.value.id===ae.value?(H(),W(Rl,{key:0,city:w.value,onClose:f[9]||=e=>ae.value=``},null,8,[`city`])):J(``,!0)],64)):J(``,!0),K(zc,{list:b.value,favorites:m.value,"here-id":g.value,"selected-id":u.value,onSelectCard:p,onToggleFavorite:h},null,8,[`list`,`favorites`,`here-id`,`selected-id`])],64))]),_:1}),G(`div`,uu,[G(`span`,null,O(l.value),1),a.value?(H(),U(`small`,du,O(a.value)+` 기준 · Open-Meteo`,1)):J(``,!0)])]))}},[[`__scopeId`,`data-v-6d9e9c22`]]),hu=`<script setup>
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
`,gu=`<script setup>
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
`,_u=`<script setup>
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
`,vu=`<template>
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
`,yu=`<script setup>
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
`,bu=`<script setup>
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
`,xu=`<script setup>
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
`,Su=`<script setup>
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
`,Cu=`<script setup>
import { computed, ref, watch } from 'vue'

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
  ['소나기', { photo: 'rain', effect: 'rain' }],
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

/**
 * 빗방울을 낱개로 만든다.
 * 줄무늬를 통째로 밀면 "사선 무늬가 미끄러지는" 느낌만 나고 비처럼 보이지 않는다.
 * 길이 · 속도 · 굵기 · 시작 시각을 흩어 놓아야 쏟아지는 것처럼 보인다.
 *
 * 값은 규칙적인 수식으로 흩는다. Math.random을 쓰면 다시 그릴 때마다 튀어서
 * 애니메이션이 끊겨 보인다.
 */
const makeDrops = (count, { minDur, maxDur, minLen, maxLen }) =>
  Array.from({ length: count }, (_, i) => {
    const a = ((i * 37) % 100) / 100 // 가로 위치
    const b = ((i * 61) % 100) / 100 // 속도
    const c = ((i * 83) % 100) / 100 // 길이
    const d = ((i * 29) % 100) / 100 // 시작 시각
    return {
      left: a * 104 - 2,
      dur: minDur + b * (maxDur - minDur),
      len: minLen + c * (maxLen - minLen),
      delay: -d * maxDur,
      opacity: 0.3 + c * 0.55,
      width: c > 0.72 ? 2 : 1.3,
    }
  })

const RAIN = makeDrops(120, { minDur: 0.5, maxDur: 0.95, minLen: 42, maxLen: 110 })
const RAIN_HEAVY = makeDrops(190, { minDur: 0.34, maxDur: 0.6, minLen: 60, maxLen: 150 })
const DRIZZLE = makeDrops(80, { minDur: 1.3, maxDur: 2.1, minLen: 14, maxLen: 34 })

const drops = computed(() => {
  if (scene.value.effect === 'rain-heavy') return RAIN_HEAVY
  if (scene.value.effect === 'drizzle') return DRIZZLE
  return RAIN
})

/** 어두운 사진 위에서는 글자가 잘 보이도록 덮개를 더 진하게 */
const isDark = computed(() =>
  ['storm', 'lightning', 'rain-heavy', 'rain'].includes(scene.value.effect),
)
<\/script>

<template>
  <div class="backdrop" :class="[\`fx-\${scene.effect}\`, { dark: isDark }]" aria-hidden="true">
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
    <template v-if="['rain', 'rain-heavy', 'drizzle', 'storm'].includes(scene.effect)">
      <div class="rain">
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
      <div class="mist" />
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
  background-repeat: repeat-x;
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
.rain {
  position: absolute;
  inset: -14% 0 0;
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

/* 바람에 조금 기울어 떨어진다 */
@keyframes drop-fall {
  from {
    transform: translate3d(0, -20%, 0);
  }
  to {
    transform: translate3d(-90px, 125vh, 0);
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

/* 이슬비는 흐릿하게, 호우는 더 기울고 빠르게 */
.fx-drizzle .drop {
  filter: blur(0.4px);
}

.fx-drizzle .mist {
  opacity: 0.4;
}

.fx-rain-heavy .drop {
  animation-name: drop-fall-hard;
}

@keyframes drop-fall-hard {
  from {
    transform: translate3d(0, -20%, 0);
  }
  to {
    transform: translate3d(-150px, 130vh, 0);
  }
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
`,wu=`<script setup>
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
`,Tu=`<script setup>
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
`,Eu=`<script setup>
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
`,Du=`/**
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
`,Ou=Object.fromEntries(Object.entries(Object.assign({"./WeatherComposition.vue":is,"./WeatherMockup.vue":gs,"./WeatherParent.vue":Gl})).map(([e,t])=>[e.replace(`./`,``).replace(`.vue`,``),t.default]));Object.keys(Ou).sort();var ku=e=>Ou[e]??null,Au=Object.assign({"./WeatherComposition.vue":hu,"./WeatherMockup.vue":gu,"./WeatherParent.vue":_u,"./weather/BaseDashboardCard.vue":vu,"./weather/HourlyDetail.vue":yu,"./weather/RegionTabs.vue":bu,"./weather/SearchBar.vue":xu,"./weather/UiIcon.vue":Su,"./weather/WeatherBackdrop.vue":Cu,"./weather/WeatherByStatus.vue":wu,"./weather/WeatherCard.vue":Tu,"./weather/WeatherIcon.vue":Eu,"./weather/weatherApi.js":Du}),ju=Object.fromEntries(Object.entries(Au).map(([e,t])=>[e.replace(`./`,``).replace(/\.(vue|js)$/,``),t])),Mu=Object.fromEntries(Object.keys(Au).map(e=>[e.replace(`./`,``).replace(/\.(vue|js)$/,``),e.replace(`./`,`src/components/assignments/`)])),Nu=e=>ju[e]===void 0?Object.keys(ju).find(t=>t.endsWith(`/${e}`)):e,Pu=e=>ju[Nu(e)]??``,Fu=e=>Mu[Nu(e)]??``,Iu={class:`progress-bar`},Lu={class:`track`},Ru={class:`assignment-timeline`},zu={class:`step`},Bu={class:`assignment-body`},Vu={class:`topline`},Hu={class:`eyebrow`},Uu={class:`slide`},Wu={class:`goal`},Gu={class:`scope`},Ku={class:`chapter-tag`},qu={class:`range`},Ju=[`open`],Yu={key:0,class:`note`},Xu={key:1,class:`result`},Zu={key:0},Qu={class:`result-stage`},$u=Q({__name:`AssignmentsView`,setup(e){let t=e=>qo.find(t=>t.id===e)?.title??``,n={done:`완료`,todo:`진행 예정`,final:`최종`},r=X(()=>Yo.filter(e=>e.status===`done`).length);return(e,i)=>(H(),U(V,null,[i[3]||=G(`section`,{class:`page-intro`},[G(`p`,{class:`eyebrow`},`SUBMISSION ASSIGNMENTS`),G(`h1`,null,`제출 과제`),G(`p`,null,[q(` 각 과제는 이전 결과물에서 `),G(`strong`,null,`이어집니다`),q(`. 여기서 완성한 결과가 최종 날씨 서비스의 기반이 됩니다. `)])],-1),G(`section`,Iu,[G(`div`,null,[i[0]||=G(`p`,{class:`label`},`전체 진행률`,-1),G(`strong`,null,O(r.value)+` / `+O(F(Yo).length),1)]),G(`div`,Lu,[G(`i`,{style:E({width:`${r.value/F(Yo).length*100}%`})},null,4)])]),G(`section`,Ru,[(H(!0),U(V,null,B(F(Yo),e=>(H(),U(`article`,{key:e.id,class:D([`assignment-card`,e.status])},[G(`div`,zu,O(String(e.id).padStart(2,`0`)),1),G(`div`,Bu,[G(`div`,Vu,[G(`p`,Hu,[q(` ASSIGNMENT `+O(String(e.id).padStart(2,`0`))+` `,1),G(`span`,Uu,`교안 `+O(e.slidePage),1)]),G(`span`,{class:D([`status`,e.status])},O(n[e.status]),3)]),G(`h2`,null,O(e.title),1),G(`p`,Wu,O(e.goal),1),G(`div`,Gu,[G(`span`,Ku,O(t(e.chapterId)),1),G(`span`,qu,O(e.scope),1)]),G(`details`,{class:`requirements`,open:e.status!==`todo`},[G(`summary`,null,`요구사항 `+O(e.requirements.length)+`개`,1),G(`ul`,null,[(H(!0),U(V,null,B(e.requirements,e=>(H(),U(`li`,{key:e},O(e),1))),128))])],8,Ju),e.note?(H(),U(`p`,Yu,`⚠ `+O(e.note),1)):J(``,!0),F(ku)(e.result)?(H(),U(`details`,Xu,[G(`summary`,null,[i[1]||=G(`span`,{"aria-hidden":`true`},`▶`,-1),i[2]||=q(` 결과물 보기 `,-1),e.resultNote?(H(),U(`small`,Zu,O(e.resultNote),1)):J(``,!0)]),G(`div`,Qu,[(H(),W(Er(F(ku)(e.result))))])])):J(``,!0)])],2))),128))])],64))}},[[`__scopeId`,`data-v-59c19f57`]]),ed={class:`hero`},td={class:`progress-card`},nd={class:`progress-track`},rd={class:`section-block`},id={class:`chapter-grid`},ad={class:`number`},od={class:`section-block`},sd={class:`project-strip`},cd={class:`mini-stats`},ld=Q({__name:`HomeView`,setup(e){let t=Math.round(rs/Yo.length*100);return(e,n)=>(H(),U(V,null,[G(`section`,ed,[n[3]||=oa(`<div data-v-9ae6c4f2><p class="eyebrow" data-v-9ae6c4f2>LEARN · PRACTICE · SUBMIT</p><h1 data-v-9ae6c4f2>Vue를 배우고,<br data-v-9ae6c4f2><span data-v-9ae6c4f2>하나의 결과물</span>로 완성하세요.</h1><p class="hero-copy" data-v-9ae6c4f2> 코드 챌린지로 개념을 익히고, 단계별 제출 과제로 날씨 웹 애플리케이션을 발전시킵니다. </p><div class="hero-actions" data-v-9ae6c4f2><a class="primary-button" href="#/learning" data-v-9ae6c4f2>학습 시작하기</a><a class="secondary-button" href="#/assignments" data-v-9ae6c4f2>제출 과제 보기</a></div></div>`,1),G(`div`,td,[n[0]||=G(`p`,{class:`card-label`},`MY LEARNING`,-1),G(`strong`,null,O(F(rs))+` / `+O(F(Yo).length),1),n[1]||=G(`span`,null,`제출 과제 진행률`,-1),G(`div`,nd,[G(`i`,{style:E({width:`${F(t)}%`})},null,4)]),n[2]||=G(`a`,{href:`#/project`},`최종 결과물 확인 →`,-1)])]),G(`section`,rd,[n[4]||=G(`div`,{class:`section-heading`},[G(`div`,null,[G(`p`,{class:`eyebrow`},`CURRICULUM`),G(`h2`,null,`학습 영역`)]),G(`a`,{href:`#/learning`},`전체 학습 보기 →`)],-1),G(`div`,id,[(H(!0),U(V,null,B(F(qo).slice(0,4),e=>(H(),U(`article`,{key:e.id,class:`info-card`},[G(`span`,ad,O(String(e.id).padStart(2,`0`)),1),G(`h3`,null,O(e.title),1),G(`p`,null,O(e.subtitle),1),G(`small`,null,`교안 `+O(e.slides),1)]))),128))])]),G(`section`,od,[n[9]||=G(`div`,{class:`section-heading`},[G(`div`,null,[G(`p`,{class:`eyebrow`},`SUBMISSION PROJECT`),G(`h2`,null,`하나의 날씨 프로젝트`)]),G(`a`,{href:`#/assignments`},`과제 전체 보기 →`)],-1),G(`div`,sd,[n[8]||=G(`div`,null,[G(`span`,{class:`project-icon`},`☁`),G(`h3`,null,`Weather Dashboard`),G(`p`,null,`Mockup에서 API 연동과 배포까지, 과제 결과물이 순서대로 이어집니다.`)],-1),G(`div`,cd,[G(`strong`,null,O(F(ns)),1),n[5]||=G(`span`,null,`개 코드 챌린지`,-1),G(`strong`,null,O(F(ts)),1),n[6]||=G(`span`,null,`개 실습 화면 연결됨`,-1),G(`strong`,null,O(F(Yo).length),1),n[7]||=G(`span`,null,`단계별 제출 과제`,-1)])])])],64))}},[[`__scopeId`,`data-v-9ae6c4f2`]]),ud=new Set(`const.let.var.function.return.if.else.for.while.do.switch.case.default.break.continue.new.delete.typeof.instanceof.in.of.import.export.from.as.async.await.try.catch.finally.throw.class.extends.this.null.undefined.true.false.void.yield`.split(`.`)),dd=new Set(`ref.reactive.computed.watch.watchEffect.toRefs.toRef.unref.isRef.shallowRef.readonly.nextTick.onMounted.onUnmounted.onBeforeMount.onBeforeUnmount.onUpdated.onBeforeUpdate.onErrorCaptured.defineProps.defineEmits.defineExpose.defineModel.createApp.defineStore.storeToRefs.provide.inject.useRoute.useRouter.createPinia.createRouter`.split(`.`)),fd=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),pd=e=>e?fd(String(e)).replace(/\*\*([^*]+)\*\*/g,`<mark>$1</mark>`).replace(/`([^`]+)`/g,`<code>$1</code>`):``,md=(e,t)=>`<span class="tok-${e}">${fd(t)}</span>`,hd=new RegExp([`(<!--[\\s\\S]*?-->)`,`(/\\*[\\s\\S]*?\\*/)`,`(//[^\\n]*)`,"(`(?:\\\\[\\s\\S]|[^`\\\\])*`)",`('(?:\\\\[\\s\\S]|[^'\\\\\\n])*')`,`("(?:\\\\[\\s\\S]|[^"\\\\\\n])*")`,`(</?[A-Za-z][\\w.-]*)`,`(\\s(?:v-[\\w:.\\-\\[\\]]+|[@:#][\\w.\\-\\[\\]]+))`,`(\\b\\d+(?:\\.\\d+)?\\b)`,`([A-Za-z_$][\\w$]*)`].join(`|`),`g`),gd=e=>{if(!e)return``;let t=``,n=0;for(let r of e.matchAll(hd)){t+=fd(e.slice(n,r.index)),n=r.index+r[0].length;let[i,a,o,s,c,l,u,d,f,p,m]=r;a||o||s?t+=md(`comment`,i):c||l||u?t+=md(`string`,i):d?t+=md(`tag`,i):f?t+=i.slice(0,1)+md(`attr`,i.slice(1)):p?t+=md(`number`,i):m?ud.has(m)?t+=md(`keyword`,i):dd.has(m)?t+=md(`api`,i):t+=fd(i):t+=fd(i)}return t+fd(e.slice(n))},_d={class:`snippet`},vd=[`innerHTML`],yd={key:0,class:`parts`},bd={key:1,class:`returns`},xd={key:2},Sd=Q({__name:`CodeSnippet`,props:{code:{type:String,required:!0},desc:{type:String,default:``},parts:{type:Array,default:()=>[]},returns:{type:String,default:``}},setup(e){let t=e,n=X(()=>gd(t.code));return(t,r)=>(H(),U(`figure`,_d,[G(`pre`,null,[G(`code`,{innerHTML:n.value},null,8,vd)]),e.parts.length?(H(),U(`dl`,yd,[(H(!0),U(V,null,B(e.parts,e=>(H(),U(V,{key:e.token},[G(`dt`,null,O(e.token),1),G(`dd`,null,O(e.role),1)],64))),128))])):J(``,!0),e.returns?(H(),U(`p`,bd,[r[0]||=G(`span`,{class:`returns-label`},`돌려주는 값`,-1),q(O(e.returns),1)])):J(``,!0),e.desc?(H(),U(`figcaption`,xd,O(e.desc),1)):J(``,!0)]))}},[[`__scopeId`,`data-v-264d774b`]]),Cd=[`aria-expanded`],wd={key:0,class:`range`},Td={class:`chevron`},Ed={class:`lecture-body`},Dd={key:0,class:`intro`},Od=[`innerHTML`],kd=[`innerHTML`],Ad={key:1,class:`points`},jd=[`innerHTML`],Md={key:2,class:`syntax`},Nd=Q({__name:`LectureBrief`,props:{lecture:{type:Object,required:!0},studyRange:{type:String,default:``},open:{type:Boolean,default:!1}},setup(e){let t=P(e.open);return(n,r)=>(H(),U(`section`,{class:D([`lecture`,{closed:!t.value}])},[G(`button`,{class:`lecture-toggle`,type:`button`,"aria-expanded":t.value,onClick:r[0]||=e=>t.value=!t.value},[r[1]||=G(`span`,{class:`marker`},`📖`,-1),r[2]||=G(`span`,{class:`toggle-title`},`관련 강의 내용`,-1),e.studyRange?(H(),U(`span`,wd,`교안 `+O(e.studyRange),1)):J(``,!0),G(`span`,Td,O(t.value?`−`:`+`),1)],8,Cd),R(G(`div`,Ed,[e.lecture.intro?(H(),U(`p`,Dd,[r[3]||=G(`span`,{class:`intro-label`},`쉽게 말하면`,-1),G(`span`,{innerHTML:F(pd)(e.lecture.intro)},null,8,Od)])):J(``,!0),G(`p`,{class:`lead`,innerHTML:F(pd)(e.lecture.summary)},null,8,kd),e.lecture.points?.length?(H(),U(`ul`,Ad,[(H(!0),U(V,null,B(e.lecture.points,e=>(H(),U(`li`,{key:e,innerHTML:F(pd)(e)},null,8,jd))),128))])):J(``,!0),e.lecture.syntax?.length?(H(),U(`div`,Md,[r[4]||=G(`p`,{class:`syntax-label`},`문법 정리`,-1),(H(!0),U(V,null,B(e.lecture.syntax,e=>(H(),W(Sd,{key:e.code,code:e.code,desc:e.desc,parts:e.parts??[],returns:e.returns??``},null,8,[`code`,`desc`,`parts`,`returns`]))),128))])):J(``,!0)],512),[[Ja,t.value]])],2))}},[[`__scopeId`,`data-v-dd03eb2e`]]),Pd={class:`code-window`},Fd={class:`window-bar`},Id={class:`path`},Ld={class:`meta`},Rd={class:`code-scroll`},zd=[`innerHTML`],Bd=Q({__name:`CodeWindow`,props:{path:{type:String,required:!0},code:{type:String,required:!0}},emits:[`close`],setup(e,{emit:t}){let n=e,r=t,i=X(()=>gd(n.code)),a=X(()=>n.code.split(`
`).length),o=P(!1),s=async()=>{try{await navigator.clipboard.writeText(n.code),o.value=!0,setTimeout(()=>o.value=!1,1500)}catch{o.value=!1}},c=e=>{e.key===`Escape`&&r(`close`)};return mr(()=>{document.addEventListener(`keydown`,c),document.body.style.overflow=`hidden`}),_r(()=>{document.removeEventListener(`keydown`,c),document.body.style.overflow=``}),(t,n)=>(H(),W(Yn,{to:`body`},[G(`div`,{class:`code-backdrop`,role:`dialog`,"aria-modal":`true`,onClick:n[1]||=Ro(e=>r(`close`),[`self`])},[G(`div`,Pd,[G(`header`,Fd,[n[3]||=G(`span`,{class:`dots`,"aria-hidden":`true`},[G(`i`),G(`i`),G(`i`)],-1),G(`code`,Id,O(e.path),1),G(`span`,Ld,O(a.value)+`줄`,1),G(`button`,{type:`button`,class:`bar-button`,onClick:s},O(o.value?`복사됨`:`복사`),1),G(`button`,{type:`button`,class:`bar-button close`,"aria-label":`닫기`,onClick:n[0]||=e=>r(`close`)},[...n[2]||=[G(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[G(`path`,{d:`M18 6 6 18M6 6l12 12`})],-1)]])]),G(`div`,Rd,[G(`pre`,null,[G(`code`,{innerHTML:i.value},null,8,zd)])]),n[4]||=G(`footer`,{class:`window-foot`},[G(`span`,null,[G(`kbd`,null,`Esc`),q(` 또는 바깥을 클릭하면 닫힙니다`)]),G(`span`,{class:`legend`},[G(`i`,{class:`tok-keyword`},`키워드`),G(`i`,{class:`tok-api`},`Vue 함수`),G(`i`,{class:`tok-tag`},`태그`),G(`i`,{class:`tok-attr`},`디렉티브`),G(`i`,{class:`tok-string`},`문자열`),G(`i`,{class:`tok-comment`},`주석`)])],-1)])])]))}},[[`__scopeId`,`data-v-fe776e53`]]),Vd=[`aria-expanded`,`aria-label`,`title`],Hd={key:0,class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2.2`,"stroke-linecap":`round`,"aria-hidden":`true`},Ud={key:1,class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"aria-hidden":`true`},Wd={class:`help-popover`,role:`note`},Gd={class:`help-text`},$=Q({__name:`ConceptHelp`,props:{text:{type:String,required:!0}},setup(e){let t=P(!1),n=P(null),r=e=>{t.value&&n.value&&!n.value.contains(e.target)&&(t.value=!1)},i=e=>{e.key===`Escape`&&(t.value=!1)};return mr(()=>{document.addEventListener(`mousedown`,r),document.addEventListener(`keydown`,i)}),_r(()=>{document.removeEventListener(`mousedown`,r),document.removeEventListener(`keydown`,i)}),(r,i)=>(H(),U(`span`,{ref_key:`root`,ref:n,class:`concept-help`},[G(`button`,{class:D([`help-button`,{open:t.value}]),type:`button`,"aria-expanded":t.value,"aria-label":t.value?`개념 설명 닫기`:`개념 설명 보기`,title:t.value?`닫기`:`개념 설명 보기`,onClick:i[0]||=e=>t.value=!t.value},[t.value?(H(),U(`svg`,Hd,[...i[1]||=[G(`path`,{d:`M18 6 6 18M6 6l12 12`},null,-1)]])):(H(),U(`svg`,Ud,[...i[2]||=[G(`circle`,{cx:`12`,cy:`12`,r:`9.5`},null,-1),G(`path`,{d:`M12 16.5v-5`},null,-1),G(`circle`,{cx:`12`,cy:`8`,r:`1.15`,fill:`currentColor`,stroke:`none`},null,-1)]]))],10,Vd),R(G(`span`,Wd,[i[3]||=G(`span`,{class:`help-arrow`,"aria-hidden":`true`},null,-1),i[4]||=G(`span`,{class:`help-label`},`개념 설명`,-1),G(`span`,Gd,O(e.text),1)],512),[[Ja,t.value]])],512))}},[[`__scopeId`,`data-v-46feb191`]]),Kd=t({default:()=>of}),qd={class:`practice-card`},Jd={class:`practice-area`},Yd=[`disabled`],Xd={class:`practice-area`},Zd={class:`practice-area`},Qd={class:`input-group`},$d={class:`practice-area`},ef={class:`practice-area`},tf=`https://vuejs.org`,nf=`https://vuejs.org/images/logo.png`,rf=`user-profile-card`,af=`https://vuejs.org/images/logo.png`,of=Q({__name:`BindPractice`,setup(e){let t=P(!0),n=P(!1),r=P(`dark-box`),i=P(`purple`),a=P(200),o={height:`80px`,color:`white`,backgroundColor:`#42b883`,transition:`all 0.3s ease`};return(e,s)=>(H(),U(`section`,qd,[G(`div`,Jd,[G(`h2`,null,[s[4]||=q(` v-bind 디렉티브 기본 (축약형: 콜론) `,-1),K($,{text:`v-bind는 href, src, disabled 같은 HTML 속성에 JavaScript 데이터를 연결합니다. 축약형은 : 입니다.`})]),G(`a`,{href:tf,target:`_blank`},`Vue 공식 사이트`),G(`img`,{src:nf,alt:`Vue 로고`,width:`80`}),G(`button`,{disabled:t.value},`잠기는 버튼`,8,Yd),G(`button`,{onClick:s[0]||=e=>t.value=!t.value},` 잠금 상태 변경 `)]),G(`div`,Xd,[G(`h2`,null,[s[5]||=q(` v-bind 디렉티브 고급 (클래스 바인딩) `,-1),K($,{text:`:class는 조건에 따라 CSS 클래스를 추가하거나 제거합니다. 객체와 배열 형식을 사용할 수 있습니다.`})]),G(`p`,{class:D({danger:n.value})},` 현재 경고 상태: `+O(n.value),3),G(`button`,{onClick:s[1]||=e=>n.value=!n.value},`경고 상태 변경`),G(`div`,{class:D([r.value,n.value?`red-border`:`gray-border`])},` 배열로 클래스를 조합한 상자 `,2)]),G(`div`,Zd,[G(`h2`,null,[s[6]||=q(` v-bind 디렉티브 고급 (스타일 바인딩) `,-1),K($,{text:`:style은 색상이나 크기 같은 인라인 CSS 값을 데이터와 직접 연결합니다. 객체와 배열 형식을 지원합니다.`})]),G(`p`,{style:E({color:i.value,fontWeight:`bold`})},` 동적 스타일이 적용된 글자 `,4),G(`button`,{onClick:s[2]||=e=>i.value=i.value===`purple`?`blue`:`purple`},` 글자색 변경 `),G(`div`,Qd,[s[7]||=G(`label`,{for:`box-width`},`박스 너비: `,-1),R(G(`input`,{id:`box-width`,"onUpdate:modelValue":s[3]||=e=>a.value=e,type:`number`,step:`50`},null,512),[[Z,a.value,void 0,{number:!0}]])]),G(`div`,{class:`size-box`,style:E([o,{width:a.value+`px`}])},O(a.value)+`px `,5)]),G(`div`,$d,[G(`h2`,null,[s[8]||=q(` Class Binding vs. Style Binding `,-1),K($,{text:`미리 만든 디자인을 바꿀 때는 :class, 너비처럼 값 자체를 실시간으로 바꿀 때는 :style이 적합합니다.`})]),s[9]||=G(`p`,null,[q(` 미리 만든 디자인을 상태에 따라 바꿀 때는 `),G(`strong`,null,`:class`),q(`를 사용합니다. `)],-1),s[10]||=G(`p`,null,[q(` 너비나 색상 값을 실시간으로 직접 바꿀 때는 `),G(`strong`,null,`:style`),q(`을 사용합니다. `)],-1)]),G(`div`,ef,[G(`h2`,null,[s[11]||=q(` v-bind 디렉티브 고급 (단축 문법) `,-1),K($,{text:`HTML 속성명과 JavaScript 변수명이 같으면 :src='src'를 :src처럼 줄일 수 있는 Vue 3.4 이상의 문법입니다.`})]),G(`div`,{id:rf},[G(`img`,{src:af,alt:`Vue 로고`,width:`50`})])])]))}},[[`__scopeId`,`data-v-e7a49731`]]),sf=t({default:()=>_f}),cf={class:`practice-card`},lf={key:0},uf={key:1},df={key:2,style:{color:`green`,"font-weight":`bold`}},ff={key:3,style:{color:`blue`}},pf={key:4,style:{color:`orange`}},mf={key:5,style:{color:`red`,"font-weight":`bold`}},hf={class:`box`},gf={class:`practice-area comparison-area`},_f=Q({__name:`ConditionalPractice`,setup(e){let t=P(!1),n=P(85),r=P(!0);return(e,i)=>(H(),U(`section`,cf,[G(`h2`,null,[i[3]||=q(` v-if, v-else-if, v-else 디렉티브 학습 `,-1),K($,{text:`조건에 따라 DOM 요소를 생성하거나 제거합니다. 여러 조건은 v-else-if와 v-else로 이어서 표현합니다.`})]),i[8]||=G(`h3`,null,`1) 기본 로그인 상태 스위치`,-1),t.value?(H(),U(`p`,lf,`환영합니다! 회원 전용 화면입니다.`)):(H(),U(`p`,uf,`로그인이 필요합니다. 먼저 로그인해 주세요.`)),G(`button`,{onClick:i[0]||=e=>t.value=!t.value},O(t.value?`로그아웃 하기`:`로그인 하기`),1),i[9]||=G(`br`,null,null,-1),i[10]||=G(`h3`,null,`2) 성적별 학점 등급 측정 (다중 조건문)`,-1),i[11]||=G(`label`,null,`현재 점수 입력: `,-1),R(G(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`number`,min:`0`,max:`100`,step:`5`},null,512),[[Z,n.value]]),i[12]||=G(`br`,null,null,-1),n.value>=90?(H(),U(`div`,df,` 합격 등급: A 학점 (훌륭합니다!) `)):n.value>=80?(H(),U(`div`,ff,` 합격 등급: B 학점 (양호합니다.) `)):n.value>=70?(H(),U(`div`,pf,` 합격 등급: C 학점 (조금 더 분발하세요.) `)):(H(),U(`div`,mf,` 합격 등급: F 학점 (재시험 대상입니다.) `)),G(`h2`,null,[i[4]||=q(` v-show 디렉티브 학습 `,-1),K($,{text:`v-show는 요소를 DOM에 유지하면서 CSS display 속성으로 보이거나 숨깁니다.`})]),G(`button`,{onClick:i[2]||=e=>r.value=!r.value},` 화면 토글하기 `),i[13]||=G(`br`,null,null,-1),R(G(`div`,hf,[...i[5]||=[G(`p`,null,`v-show 상자`,-1),G(`p`,null,` 조건이 false가 되면 CSS display: none이 붙습니다. `,-1)]],512),[[Ja,r.value]]),G(`div`,gf,[G(`h2`,null,[i[6]||=q(` v-if vs. v-show `,-1),K($,{text:`전환이 드물면 DOM을 생성·제거하는 v-if, 자주 열고 닫으면 display만 바꾸는 v-show가 적합합니다.`})]),i[7]||=G(`p`,null,` v-if는 DOM을 생성·제거하고, v-show는 DOM을 유지한 채 CSS display 속성으로 표시 여부를 바꿉니다. `,-1)])]))}},[[`__scopeId`,`data-v-e3392bd5`]]),vf=t({default:()=>kf}),yf={class:`practice-card`},bf={class:`practice-area`},xf={class:`practice-area`},Sf={class:`practice-area`},Cf=[`disabled`],wf=[`disabled`],Tf={class:`practice-area`},Ef={class:`practice-area`},Df={class:`modifier-stop-area`},Of={class:`modifier-chain-area`},kf=Q({__name:`EventPractice`,setup(e){let t=P(0),n=P(``),r=P(!1),i=P(``),a=P(``),o=P(`transparent`),s=P(0),c=P(!1),l=P(0),u=P(0),d=P(0),f=()=>{window.alert(`함수가 성공적으로 호출되었습니다!`)},p=e=>{n.value=`창 좌표: X=${e.clientX}, Y=${e.clientY} / 문서 좌표: X=${e.pageX}, Y=${e.pageY}`},m=()=>{r.value||(window.addEventListener(`click`,p),r.value=!0,n.value=`좌표 확인 중: 브라우저 창 안을 클릭해 보세요.`)},h=()=>{window.removeEventListener(`click`,p),r.value=!1},g=(e,t)=>{i.value=`대상: ${e} / 클릭된 태그: ${t.target.tagName}`},_=e=>{let t=e.currentTarget.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width)),r=Math.round(n*360);s.value=n*100,o.value=`hsl(${r}, 100%, 50%)`,a.value=`무지개 바 선택 / HSL 값: hsl(${r}, 100%, 50%)`},v=e=>{c.value=!0,e.currentTarget.setPointerCapture(e.pointerId),_(e)},y=e=>{c.value&&_(e)},b=e=>{c.value&&(_(e),c.value=!1,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId))},x=()=>{window.alert(`수식어 덕분에 네이버로 이동하지 않고 함수만 실행됩니다!`)},S=()=>{window.alert(`부모 박스가 클릭되었습니다!`)},C=()=>{window.alert(`1번 자식 클릭!`)},ee=()=>{window.alert(`2번 자식(나만 켜짐) 클릭!`)},te=()=>{l.value++},ne=()=>{u.value++},re=()=>{l.value=0,u.value=0,d.value++};return vr(()=>{window.removeEventListener(`click`,p)}),(e,c)=>(H(),U(`section`,yf,[G(`h2`,null,[c[2]||=q(` v-on 이벤트 핸들링 기초 `,-1),K($,{text:`v-on은 클릭이나 키보드 입력 같은 이벤트를 감지해 코드를 실행합니다. 축약형은 @입니다.`})]),G(`div`,bf,[G(`h3`,null,[c[3]||=q(` 1) 인라인 연산 처리 `,-1),K($,{text:`Inline Handler는 count++처럼 간단한 JavaScript 표현식을 템플릿 안에서 바로 실행하는 방식입니다.`})]),G(`p`,null,`현재 카운트: `+O(t.value),1),G(`button`,{onClick:c[0]||=e=>t.value++},`1씩 증가`)]),G(`div`,xf,[G(`h3`,null,[c[4]||=q(` 2) 스크립트 함수 호출 `,-1),K($,{text:`Method Handler는 script에 함수를 정의하고 이벤트에는 함수 이름을 연결하는 방식입니다.`})]),G(`button`,{onClick:f},`알림창 띄우기`)]),G(`div`,Sf,[G(`h2`,null,[c[5]||=q(` v-on 이벤트 객체($event) 활용 `,-1),K($,{text:`함수 이름만 전달하면 이벤트 객체가 자동으로 전달됩니다. 다른 값과 이벤트 객체를 함께 넘길 때는 $event를 명시합니다.`})]),G(`p`,null,O(n.value||`좌표 확인 시작 버튼을 눌러주세요.`),1),G(`p`,null,` 현재 상태: `+O(r.value?`좌표 확인 중`:`좌표 확인 중지`),1),G(`p`,null,O(i.value||`태그: 버튼을 클릭해 보세요.`),1),G(`button`,{disabled:r.value,onClick:Ro(m,[`stop`])},` 좌표 확인 시작 `,8,Cf),G(`button`,{disabled:!r.value,onClick:Ro(h,[`stop`])},` 좌표 그만 확인하기 `,8,wf),G(`button`,{onClick:c[1]||=e=>g(`회원A`,e)},` 회원 정보와 태그 확인 `)]),G(`div`,Tf,[G(`h2`,null,[c[6]||=q(` 클릭한 색상 알아내기 `,-1),K($,{text:`색상 이름은 함수 인자로 전달하고, 실제 CSS 배경색은 $event의 currentTarget에서 읽습니다.`})]),G(`div`,{class:`rainbow-bar`,role:`button`,tabindex:`0`,"aria-label":`무지개 색상 선택`,onPointerdown:v,onPointermove:y,onPointerup:b,onPointercancel:b},[G(`span`,{class:`rainbow-marker`,style:E({left:s.value+`%`})},null,4)],32),G(`p`,null,O(a.value||`무지개 바나 색상 버튼을 클릭해 보세요.`),1),G(`div`,{class:`selected-color`,style:E({backgroundColor:o.value})},null,4)]),G(`div`,Ef,[G(`h2`,null,[c[7]||=q(` 이벤트 수식어(Modifiers) 학습 `,-1),K($,{text:`이벤트 수식어는 이벤트의 기본 동작이나 전파 방식을 간단한 접미어로 제어합니다.`})]),G(`h3`,null,[c[8]||=q(` 1) .prevent (기본 동작 막기) `,-1),K($,{text:`.prevent는 preventDefault()와 같으며 링크 이동이나 폼 제출 후 새로고침 같은 기본 동작을 막습니다.`})]),G(`a`,{href:`https://www.naver.com`,onClick:Ro(x,[`prevent`])},` 네이버 링크 `),G(`div`,Df,[G(`h3`,null,[c[9]||=q(` 2) .stop (이벤트 버블링 막기) `,-1),K($,{text:`.stop은 stopPropagation()과 같으며 자식에서 발생한 이벤트가 부모로 올라가는 것을 막습니다.`})]),G(`div`,{class:`modifier-box`,onClick:S},[c[10]||=G(`p`,null,`부모 영역 (클릭 시 alert 발동)`,-1),G(`button`,{onClick:C},` 버블링 발생 버튼 `),G(`button`,{onClick:Ro(ee,[`stop`])},` 버블링 차단 버튼 `)])]),G(`div`,Of,[G(`h3`,null,[c[11]||=q(` 3) .prevent.stop.once 연결하기 `,-1),K($,{text:`첫 클릭에는 기본 동작 방지, 버블링 차단, 한 번만 실행이 함께 적용됩니다. once로 리스너가 제거된 뒤에는 나머지 수식어도 더 이상 실행되지 않습니다.`})]),G(`div`,{class:`modifier-box`,onClick:ne},[G(`p`,null,`부모 클릭 횟수: `+O(u.value),1),G(`p`,null,`자식 함수 실행 횟수: `+O(l.value),1),(H(),U(`input`,{key:d.value,type:`checkbox`,onClickOnce:Ro(te,[`prevent`,`stop`])},null,32)),c[12]||=q(` 체크박스를 클릭해 보세요. `,-1)]),c[13]||=G(`p`,{class:`modifier-guide`},` 첫 클릭은 체크되지 않고 부모 클릭도 발생하지 않으며, 자식 함수만 한 번 실행됩니다. 두 번째 클릭부터는 once로 리스너가 제거되어 체크와 부모 클릭이 다시 동작합니다. `,-1),G(`button`,{onClick:Ro(re,[`stop`])},` 연결 수식어 실습 초기화 `)])])]))}},[[`__scopeId`,`data-v-dd838579`]]),Af=t({default:()=>Nf}),jf={class:`practice-card`},Mf={class:`practice-area lists`},Nf=Q({__name:`ForPractice`,setup(e){let t=P([`사과`,`바나나`,`딸기`]),n=P({name:`홍길동`,age:25,role:`개발자`}),r=P([{id:`prod-101`,name:`아이폰`},{id:`prod-102`,name:`갤럭시`}]);return(e,i)=>(H(),U(`section`,jf,[G(`h2`,null,[i[0]||=q(` v-for 디렉티브 학습 `,-1),K($,{text:`v-for는 배열이나 객체의 항목을 반복해서 화면에 출력합니다. 각 항목에는 가능한 한 고유한 :key를 지정합니다.`})]),G(`div`,Mf,[G(`div`,null,[i[1]||=G(`h3`,null,`배열 반복`,-1),G(`ul`,null,[(H(!0),U(V,null,B(t.value,(e,t)=>(H(),U(`li`,{key:e},O(t+1)+`번 과일: `+O(e),1))),128))])]),G(`div`,null,[i[2]||=G(`h3`,null,`객체 반복`,-1),G(`ul`,null,[(H(!0),U(V,null,B(n.value,(e,t,n)=>(H(),U(`li`,{key:t},` [`+O(n)+`] `+O(t)+`: `+O(e),1))),128))])]),G(`div`,null,[i[3]||=G(`h3`,null,`객체 배열 반복`,-1),G(`ul`,null,[(H(!0),U(V,null,B(r.value,e=>(H(),U(`li`,{key:e.id},O(e.name),1))),128))])])])]))}},[[`__scopeId`,`data-v-e533b99b`]]),Pf=t({default:()=>Vf}),Ff={class:`practice-card`},If={class:`practice-area`},Lf={class:`practice-area`},Rf=[`innerHTML`],zf={class:`practice-area`},Bf=`이 글자는 <span style="color: red; font-weight: bold;">빨간색 굵은 글자</span>이다.`,Vf=Q({__name:`HtmlTextPractice`,setup(e){let t=P(``),n=P(``);function r(){n.value=t.value}return(e,i)=>(H(),U(`section`,Ff,[G(`div`,If,[G(`h2`,null,[i[1]||=q(` v-html 디렉티브 학습 `,-1),K($,{text:`v-html은 문자열에 들어 있는 HTML 태그를 실제 HTML 요소로 해석해 출력합니다.`})]),i[2]||=G(`h3`,null,`일반 보간법 {{ }} 사용 결과:`,-1),G(`p`,null,O(Bf)),i[3]||=G(`br`,null,null,-1),i[4]||=G(`h3`,null,`v-html 디렉티브 사용 결과:`,-1),G(`p`,{innerHTML:Bf})]),G(`div`,Lf,[G(`h2`,null,[i[5]||=q(` v-html XSS 학습 `,-1),K($,{text:`XSS는 악성 스크립트가 다른 사용자의 브라우저에서 실행되는 공격입니다. 사용자 입력을 v-html에 직접 연결하면 위험합니다.`})]),R(G(`input`,{"onUpdate:modelValue":i[0]||=e=>t.value=e,placeholder:`내용을 입력하세요`},null,512),[[Z,t.value]]),G(`button`,{onClick:r},`확인`),G(`div`,{innerHTML:n.value},null,8,Rf)]),i[7]||=G(`p`,{class:`warning`},` 위 코드는 XSS 위험을 확인하기 위한 학습용 예제입니다. 실제 서비스에서는 사용자 입력을 v-html로 직접 출력하지 않습니다. `,-1),G(`div`,zf,[G(`h2`,null,[i[6]||=q(` v-text 디렉티브 학습 `,-1),K($,{text:`v-text는 값을 일반 텍스트로 출력합니다. HTML 태그가 포함되어 있어도 실제 태그로 해석하지 않습니다.`})]),G(`p`,{textContent:Bf})])]))}},[[`__scopeId`,`data-v-860fa86e`]]),Hf=t({default:()=>sp}),Uf={class:`practice-card`},Wf={class:`practice-area`},Gf={class:`form-item`},Kf={class:`form-item`},qf=[`value`],Jf={class:`practice-area`},Yf={class:`form-item`},Xf={class:`form-item`},Zf={class:`form-item`},Qf={class:`option-group`},$f={class:`form-item`},ep={class:`option-group`},tp={class:`form-item`},np={class:`practice-area`},rp={class:`form-item`},ip={class:`form-item`},ap={class:`form-item`},op={class:`form-item`},sp=Q({__name:`ModelPractice`,setup(e){let t=P(``),n=P(``),r=P(``),i=P(!1),a=P([]),o=P(``),s=P(``),c=P(``),l=P(``),u=P(``),d=P(``);return(e,f)=>(H(),U(`section`,Uf,[G(`div`,Wf,[G(`h2`,null,[f[14]||=q(` v-model 양방향 데이터 바인딩 `,-1),K($,{text:`v-model은 입력 요소의 값과 Vue 데이터를 연결해 한쪽이 바뀌면 다른 쪽도 자동으로 반영되게 합니다.`})]),G(`div`,Gf,[f[16]||=G(`h3`,null,`1) v-model 축약 문법 (양방향)`,-1),R(G(`input`,{"onUpdate:modelValue":f[0]||=e=>t.value=e,type:`text`,placeholder:`여기에 입력하세요`},null,512),[[Z,t.value]]),G(`p`,null,[f[15]||=q(` 입력된 값: `,-1),G(`strong`,null,O(t.value),1)])]),G(`div`,Kf,[f[18]||=G(`h3`,null,`2) v-model의 내부 작동 원리 (단방향 + 이벤트)`,-1),G(`input`,{value:n.value,type:`text`,placeholder:`원리 파악용 입력창`,onInput:f[1]||=e=>n.value=e.target.value},null,40,qf),G(`p`,null,[f[17]||=q(` 입력된 값: `,-1),G(`strong`,null,O(n.value),1)])])]),G(`div`,Jf,[G(`h2`,null,[f[19]||=q(` 모든 HTML Form 요소와 v-model 매핑 `,-1),K($,{text:`Form 요소마다 v-model이 저장하는 값의 형태가 다릅니다. 단일 체크박스는 Boolean, 다중 체크박스는 Array로 시작합니다.`})]),G(`div`,Yf,[f[20]||=G(`h3`,null,`1) Textarea (장문 텍스트)`,-1),R(G(`textarea`,{"onUpdate:modelValue":f[2]||=e=>r.value=e,placeholder:`의견을 남겨주세요`},null,512),[[Z,r.value]]),G(`p`,null,`데이터 상태: `+O(r.value),1)]),G(`div`,Xf,[f[22]||=G(`h3`,null,`2) 단일 Checkbox (동의 여부)`,-1),G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":f[3]||=e=>i.value=e,type:`checkbox`},null,512),[[ko,i.value]]),f[21]||=q(` 약관에 동의합니다. `,-1)]),G(`p`,null,`데이터 상태: `+O(i.value),1)]),G(`div`,Zf,[f[26]||=G(`h3`,null,`3) 다중 Checkbox (복수 선택 → 배열에 저장)`,-1),G(`div`,Qf,[G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":f[4]||=e=>a.value=e,type:`checkbox`,value:`사과`},null,512),[[ko,a.value]]),f[23]||=q(` 사과 `,-1)]),G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":f[5]||=e=>a.value=e,type:`checkbox`,value:`바나나`},null,512),[[ko,a.value]]),f[24]||=q(` 바나나 `,-1)]),G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":f[6]||=e=>a.value=e,type:`checkbox`,value:`딸기`},null,512),[[ko,a.value]]),f[25]||=q(` 딸기 `,-1)])]),G(`p`,null,`데이터 상태 (배열): `+O(a.value),1)]),G(`div`,$f,[f[29]||=G(`h3`,null,`4) Radio (단일 선택)`,-1),G(`div`,ep,[G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":f[7]||=e=>o.value=e,type:`radio`,value:`남성`},null,512),[[jo,o.value]]),f[27]||=q(` 남성 `,-1)]),G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":f[8]||=e=>o.value=e,type:`radio`,value:`여성`},null,512),[[jo,o.value]]),f[28]||=q(` 여성 `,-1)])]),G(`p`,null,`데이터 상태: `+O(o.value),1)]),G(`div`,tp,[f[31]||=G(`h3`,null,`5) Select (드롭다운 선택)`,-1),R(G(`select`,{"onUpdate:modelValue":f[9]||=e=>s.value=e},[...f[30]||=[G(`option`,{value:``},`-- 선택하세요 --`,-1),G(`option`,{value:`tesla`},`테슬라`,-1),G(`option`,{value:`hyundai`},`현대자동차`,-1),G(`option`,{value:`bmw`},`BMW`,-1)]],512),[[Mo,s.value]]),G(`p`,null,`데이터 상태: `+O(s.value),1)])]),G(`div`,np,[G(`h2`,null,[f[32]||=q(` v-model 수식어(Modifiers) 활용 `,-1),K($,{text:`v-model 수식어는 값의 반영 시점이나 저장 형태를 간단히 제어합니다. .lazy, .number, .trim을 단독 또는 연결해서 사용할 수 있습니다.`})]),G(`div`,rp,[f[34]||=G(`h3`,null,`1) .lazy 수식어 (change 이벤트 시점 반영)`,-1),R(G(`input`,{"onUpdate:modelValue":f[10]||=e=>c.value=e,type:`text`,placeholder:`입력 후 Enter 또는 외부 클릭`},null,512),[[Z,c.value,void 0,{lazy:!0}]]),G(`p`,null,[f[33]||=q(` 실시간이 아닌 확정된 값: `,-1),G(`strong`,null,O(c.value),1)])]),G(`div`,ip,[f[37]||=G(`h3`,null,`2) .number 수식어 (Number 타입 자동 형변환)`,-1),R(G(`input`,{"onUpdate:modelValue":f[11]||=e=>l.value=e,type:`text`,placeholder:`나이를 입력하세요`},null,512),[[Z,l.value,void 0,{number:!0}]]),G(`p`,null,[f[35]||=q(` 입력된 값: `,-1),G(`strong`,null,O(l.value),1)]),G(`p`,null,[f[36]||=q(` 데이터 타입: `,-1),G(`strong`,null,O(typeof l.value),1)])]),G(`div`,ap,[f[40]||=G(`h3`,null,`3) .trim 수식어 (양끝 공백 자동 제거)`,-1),R(G(`input`,{"onUpdate:modelValue":f[12]||=e=>u.value=e,type:`text`,placeholder:`앞뒤 공백을 포함해 입력해 보세요`},null,512),[[Z,u.value,void 0,{trim:!0}]]),G(`p`,null,[f[38]||=q(` 공백 제거된 값: `,-1),G(`strong`,null,`"`+O(u.value)+`"`,1)]),G(`p`,null,[f[39]||=q(` 문자열 길이: `,-1),G(`strong`,null,O(u.value.length),1)])]),G(`div`,op,[f[43]||=G(`h3`,null,`4) Chaining (수식어 체이닝: .trim.number)`,-1),R(G(`input`,{"onUpdate:modelValue":f[13]||=e=>d.value=e,type:`text`,placeholder:`공백과 숫자를 섞어 입력해 보세요`},null,512),[[Z,d.value,void 0,{trim:!0,number:!0}]]),G(`p`,null,[f[41]||=q(` 처리된 값: `,-1),G(`strong`,null,`"`+O(d.value)+`"`,1)]),G(`p`,null,[f[42]||=q(` 데이터 타입: `,-1),G(`strong`,null,O(typeof d.value),1)])])])]))}},[[`__scopeId`,`data-v-208c25e3`]]),cp=t({default:()=>up}),lp={class:`practice-card`},up={__name:`ReactivityPractice`,setup(e){let t=0,n=P(0),r=P(`hello vue`);return(e,i)=>(H(),U(`section`,lp,[G(`h2`,null,[i[2]||=q(` 실습 1 — Reactivity와 보간법 `,-1),K($,{text:`Reactivity는 데이터가 바뀌면 화면도 자동으로 갱신되는 특성이고, 보간법은 {{ }} 안의 값이나 표현식을 화면에 출력하는 문법입니다.`})]),G(`div`,null,[G(`p`,null,`일반 변수: `+O(F(t)),1),G(`button`,{onClick:i[0]||=e=>N(t)?t.value++:t++},`일반 변수 증가`),G(`p`,null,`반응형 변수: `+O(n.value),1),G(`button`,{onClick:i[1]||=e=>n.value++},`반응형 변수 증가`)]),G(`div`,null,[G(`p`,null,`원래 문자열: `+O(r.value),1),G(`p`,null,`대문자 변환: `+O(r.value.toUpperCase()),1),G(`p`,null,O(`Random number: `+Math.ceil(Math.random()*100)),1)])]))}},dp=t({default:()=>vp}),fp={class:`practice-card`},pp={class:`practice-area`},mp={class:`practice-area`},hp={class:`practice-area`},gp={class:`practice-area`},_p={class:`button-group`},vp=Q({__name:`SpecialDirectivePractice`,setup(e){let t=P(`안녕하세요!`),n=P(1),r=P(`홍길동`),i=P(20);return(e,a)=>(H(),U(`section`,fp,[G(`div`,pp,[G(`h2`,null,[a[5]||=q(` v-pre 디렉티브 학습 `,-1),K($,{text:`v-pre는 해당 요소와 자식의 Vue 문법을 해석하지 않고 작성된 내용을 그대로 표시합니다.`})]),G(`p`,null,`일반 출력: `+O(t.value),1),a[6]||=G(`p`,null,`v-pre 출력: {{ message }}`,-1)]),G(`div`,mp,[G(`h2`,null,[a[7]||=q(` v-cloak 디렉티브 학습 `,-1),K($,{text:`v-cloak은 Vue가 준비되기 전에 {{ message }} 같은 템플릿 원문이 잠깐 보이는 것을 CSS와 함께 방지합니다.`})]),G(`p`,null,`Vue가 준비되면 표시: `+O(t.value),1)]),G(`div`,hp,[G(`h2`,null,[a[8]||=q(` v-once 디렉티브 학습 `,-1),K($,{text:`v-once는 최초 한 번만 렌더링하고 이후 데이터가 변경되어도 해당 화면을 갱신하지 않습니다.`})]),G(`p`,null,`일반 값: `+O(n.value),1),a[0]||(Zi(-1,!0),(a[0]=G(`p`,null,[q(`최초 값으로 고정: `+O(n.value),1)])).cacheIndex=0,Zi(1),a[0]),G(`button`,{onClick:a[1]||=e=>n.value++},`숫자 증가`)]),G(`div`,gp,[G(`h2`,null,[a[9]||=q(` v-memo 디렉티브 학습 `,-1),K($,{text:`v-memo는 지정한 의존성이 바뀔 때만 영역을 다시 렌더링합니다. 큰 목록 등 실제 성능 문제가 있는 경우에 제한적으로 사용합니다.`})]),Na([r.value,i.value],()=>(H(),U(`div`,{class:`memo-box`},[G(`p`,null,`이름: `+O(r.value),1),G(`p`,null,`나이: `+O(i.value),1)])),a,2),G(`div`,_p,[G(`button`,{onClick:a[3]||=e=>r.value=r.value===`홍길동`?`이순신`:`홍길동`},` 이름 변경 `),G(`button`,{onClick:a[4]||=e=>i.value++},`나이 증가`)])])]))}},[[`__scopeId`,`data-v-0ad0fb48`]]),yp={type:`button`,class:`base-button`},bp=Q({__name:`BaseButton`,props:{label:{type:String,default:`기본 버튼`}},setup(e){return(t,n)=>(H(),U(`button`,yp,O(e.label),1))}},[[`__scopeId`,`data-v-2e39ae80`]]),xp=t({default:()=>Dp}),Sp={class:`practice-card`},Cp={class:`practice-area`},wp={class:`row`},Tp={class:`practice-area`},Ep={class:`row`},Dp=Q({__name:`ComponentRegistrationPractice`,setup(e){return(e,t)=>{let n=wr(`GlobalBadge`);return H(),U(`section`,Sp,[G(`h2`,null,[t[0]||=q(` Component 등록 — 지역 vs 전역 `,-1),K($,{text:`지역 등록은 쓰는 파일에서 import 하는 방식이라 어디서 쓰는지 코드로 드러납니다. 전역 등록은 main.js에서 app.component()로 한 번만 해두면 어디서든 import 없이 쓸 수 있지만, 안 쓰는 컴포넌트까지 번들에 들어갑니다.`})]),G(`div`,Cp,[t[1]||=G(`h3`,null,`1) 지역(Local) 등록 — import 한 줄이 등록`,-1),t[2]||=G(`p`,{class:`explain`},[q(` 아래 두 버튼은 `),G(`b`,null,`같은 컴포넌트`),q(`입니다. 등록한 컴포넌트는 PascalCase와 kebab-case 두 가지로 부를 수 있습니다. `)],-1),G(`div`,wp,[K(bp,{label:`PascalCase 호출`}),K(bp,{label:`kebab-case 호출`})]),t[3]||=G(`pre`,{class:`code`},`import BaseButton from './BaseButton.vue'

<BaseButton />
<base-button></base-button>`,-1)]),G(`div`,Tp,[t[4]||=G(`h3`,null,`2) 전역(Global) 등록 — import가 없다`,-1),t[5]||=G(`p`,{class:`explain`},[q(` 아래 배지는 이 파일에서 `),G(`b`,null,`import 하지 않았습니다.`),q(` main.js에서 한 번 등록해 둔 덕분에 바로 쓸 수 있습니다. `)],-1),G(`div`,Ep,[K(n),K(n,{text:`어디서든 사용 가능`})]),t[6]||=G(`pre`,{class:`code`},`// main.js
app.component('GlobalBadge', GlobalBadge)

// 이 파일 — import 없이 바로
<GlobalBadge />`,-1)]),t[7]||=oa(`<div class="practice-area" data-v-369125df><h3 data-v-369125df>3) 언제 무엇을 쓸까</h3><table class="compare" data-v-369125df><thead data-v-369125df><tr data-v-369125df><th data-v-369125df></th><th data-v-369125df>지역 등록</th><th data-v-369125df>전역 등록</th></tr></thead><tbody data-v-369125df><tr data-v-369125df><td data-v-369125df>등록 위치</td><td data-v-369125df>쓰는 파일에서 import</td><td data-v-369125df>main.js 한 곳</td></tr><tr data-v-369125df><td data-v-369125df>사용 범위</td><td data-v-369125df>그 파일 안에서만</td><td data-v-369125df>앱 전체</td></tr><tr data-v-369125df><td data-v-369125df>의존 관계</td><td data-v-369125df>코드에 드러남</td><td data-v-369125df>어디서 왔는지 안 보임</td></tr><tr data-v-369125df><td data-v-369125df>번들 크기</td><td data-v-369125df>쓰는 것만 포함</td><td data-v-369125df>안 써도 포함</td></tr><tr data-v-369125df><td data-v-369125df>적합한 경우</td><td data-v-369125df><b data-v-369125df>대부분의 컴포넌트</b></td><td data-v-369125df>앱 전반에서 반복되는 소수</td></tr></tbody></table></div>`,1)])}}},[[`__scopeId`,`data-v-369125df`]]),Op={class:`counter-display`},kp=Q({__name:`LifecycleChild`,setup(e){let t=P(0),n=null;return console.log(`1. [setup] 컴포넌트가 메모리에 생성되었습니다. (DOM 접근 불가능)`),mr(()=>{console.log(`2. [onMounted] 화면에 완벽히 부착되었습니다! (API 호출/DOM 조작 적기)`),n=setInterval(()=>{t.value++},3e3)}),gr(()=>{console.log(`3. [onUpdated] 데이터가 변경되어 화면을 새로 그렸습니다. (현재 count: ${t.value})`)}),vr(()=>{clearInterval(n),console.log(`4. [onUnmounted] 컴포넌트가 소멸했습니다. 타이머 청소 완료!`)}),(e,n)=>(H(),U(V,null,[n[1]||=G(`h3`,null,`⏱️ 라이프사이클 훅 흐름 탐색기`,-1),G(`div`,Op,[G(`p`,null,`실시간 타이머 카운트: `+O(t.value),1),G(`button`,{onClick:n[0]||=e=>t.value++},`수동으로 숫자 올리기`)])],64))}},[[`__scopeId`,`data-v-4c2f5f04`]]),Ap=t({default:()=>Np}),jp={class:`practice-card`},Mp={key:1,class:`gone`},Np=Q({__name:`LifecyclePractice`,setup(e){let t=P(!0);return(e,n)=>(H(),U(`section`,jp,[G(`h2`,null,[n[1]||=q(` Lifecycle Hook — 생성부터 소멸까지 `,-1),K($,{text:`컴포넌트는 생성 → 부착(mount) → 갱신(update) → 소멸(unmount)의 생애를 거칩니다. 각 시점에 Vue가 불러주는 함수가 Lifecycle Hook입니다. 브라우저 콘솔(F12)을 열고 아래 버튼으로 컴포넌트를 껐다 켜면 네 단계가 순서대로 찍힙니다.`})]),n[2]||=G(`p`,{class:`hint`},`브라우저 콘솔(F12)을 열어두고 버튼을 눌러 보세요.`,-1),G(`button`,{class:`toggle-btn`,onClick:n[0]||=e=>t.value=!t.value},O(t.value?`🛑 실습 컴포넌트 파괴하기 (v-if="false")`:`🟢 실습 컴포넌트 다시 살리기`),1),n[3]||=G(`hr`,null,null,-1),t.value?(H(),W(kp,{key:0})):(H(),U(`p`,Mp,`컴포넌트가 소멸했습니다. 콘솔에서 타이머 정리 로그를 확인해 보세요.`))]))}},[[`__scopeId`,`data-v-d955f165`]]),Pp={class:`child-container`},Fp=Q({__name:`PropsEmitsChild`,props:{parentData:{type:String,required:!0}},emits:[`update-request`],setup(e,{emit:t}){let n=t,r=()=>{n(`update-request`,`Child에서 가공한 새로운 데이터`)};return(t,n)=>(H(),U(`div`,Pp,[n[1]||=G(`p`,{class:`role`},`하위 컴포넌트 (Child)`,-1),G(`p`,null,[n[0]||=q(` 수신된 Props 데이터: `,-1),G(`strong`,null,O(e.parentData),1)]),G(`button`,{onClick:r},`상위 컴포넌트로 갱신 요청 (Emit)`)]))}},[[`__scopeId`,`data-v-e98cd097`]]),Ip=t({default:()=>Bp}),Lp={class:`practice-card`},Rp={class:`parent-container`},zp={class:`state`},Bp=Q({__name:`PropsEmitsPractice`,setup(e){let t=P(`Parent 초기 메시지`),n=e=>{t.value=e};return(e,r)=>(H(),U(`section`,Lp,[G(`h2`,null,[r[0]||=q(` Props & Emits — 부모와 자식의 대화 `,-1),K($,{text:`데이터는 부모 → 자식 한 방향으로만 흐릅니다(Props). 자식이 값을 바꾸고 싶으면 직접 고치지 않고 부모에게 '바꿔 달라'고 신호를 보냅니다(Emits). 실제로 값을 바꾸는 주체는 언제나 데이터를 가진 부모입니다.`})]),G(`div`,Rp,[r[2]||=G(`p`,{class:`role`},`상위 컴포넌트 (Parent)`,-1),G(`p`,zp,[r[1]||=q(` 현재 로컬 데이터(State): `,-1),G(`strong`,null,O(t.value),1)]),K(Fp,{"parent-data":t.value,onUpdateRequest:n},null,8,[`parent-data`])])]))}},[[`__scopeId`,`data-v-cfac9a78`]]),Vp={class:`node child`},Hp={class:`field`},Up={class:`val`},Wp=Q({__name:`FlowChild`,props:{message:{type:String,required:!0}},emits:[`reply`],setup(e,{emit:t}){let n=t;return(t,r)=>(H(),U(`div`,Vp,[r[2]||=G(`p`,{class:`node-role`},`자식 (Child)`,-1),G(`p`,Hp,[r[1]||=G(`span`,{class:`key`},`props.message`,-1),G(`span`,Up,O(e.message||`(빈 값)`),1)]),G(`button`,{onClick:r[0]||=e=>n(`reply`,`자식이 보낸 인사 👋`)},` 부모에게 신호 보내기 (emit) `)]))}},[[`__scopeId`,`data-v-8ceed664`]]),Gp=t({default:()=>rm}),Kp={class:`practice-card`},qp={class:`flow`},Jp={class:`node parent`},Yp={class:`field`},Xp=[`value`],Zp={class:`field`},Qp={class:`val`},$p={class:`arrows`},em={class:`log`},tm={key:0,class:`log-empty`},nm={class:`log-dir`},rm=Q({__name:`PropsFlowPractice`,setup(e){let t=P(`안녕하세요`),n=P(`아직 없음`),r=P(null),i=P([]),a=e=>{r.value=e,setTimeout(()=>{r.value===e&&(r.value=null)},700)},o=(e,t)=>{i.value.unshift({dir:e,text:t}),i.value.length>6&&i.value.pop()},s=e=>{t.value=e.target.value,a(`down`),o(`down`,`props.message = "${t.value}"`)},c=e=>{n.value=e,a(`up`),o(`up`,`emit('reply', "${e}")`)};return(e,a)=>(H(),U(`section`,Kp,[G(`h2`,null,[a[0]||=q(` 데이터는 어느 쪽으로 흐르나 — Props ↓ / Emits ↑ `,-1),K($,{text:`Props는 부모에서 자식으로 내려가고(↓), Emits는 자식에서 부모로 올라갑니다(↑). 반대 방향은 없습니다. 아래에서 입력하거나 버튼을 누르면 그 순간 어느 화살표가 켜지는지 확인해 보세요.`})]),G(`div`,qp,[G(`div`,Jp,[a[3]||=G(`p`,{class:`node-role`},`부모 (Parent)`,-1),G(`label`,Yp,[a[1]||=G(`span`,{class:`key`},`message`,-1),G(`input`,{value:t.value,type:`text`,onInput:s},null,40,Xp)]),G(`p`,Zp,[a[2]||=G(`span`,{class:`key`},`받은 신호`,-1),G(`span`,Qp,O(n.value),1)])]),G(`div`,$p,[G(`div`,{class:D([`arrow down`,{on:r.value===`down`}])},[...a[4]||=[G(`span`,{class:`head`},`↓`,-1),G(`span`,{class:`tag`},`props`,-1)]],2),G(`div`,{class:D([`arrow up`,{on:r.value===`up`}])},[...a[5]||=[G(`span`,{class:`head`},`↑`,-1),G(`span`,{class:`tag`},`emits`,-1)]],2)]),K(Wp,{message:t.value,onReply:c},null,8,[`message`])]),G(`div`,em,[a[6]||=G(`p`,{class:`log-title`},`주고받은 기록`,-1),i.value.length?J(``,!0):(H(),U(`p`,tm,`입력하거나 버튼을 눌러 보세요.`)),(H(!0),U(V,null,B(i.value,(e,t)=>(H(),U(`p`,{key:t,class:D([`log-row`,e.dir])},[G(`span`,nm,O(e.dir===`down`?`↓ 내려감`:`↑ 올라감`),1),G(`code`,null,O(e.text),1)],2))),128))])]))}},[[`__scopeId`,`data-v-f9dc9376`]]),im={class:`child`},am={class:`field`},om={class:`val`},sm=Q({__name:`ReadonlyChild`,props:{count:{type:Number,required:!0}},emits:[`increase`],setup(e,{emit:t}){let n=e,r=t,i=P(``),a=()=>{let e=n.count;try{n.count=e+1}catch{}i.value=n.count===e?`실패 — 값은 그대로 ${n.count} 입니다. (콘솔 경고 확인)`:`어라, 바뀌었습니다: ${n.count}`},o=()=>{r(`increase`),i.value=`성공 — 부모가 값을 바꿔 주었습니다.`};return(t,n)=>(H(),U(`div`,im,[n[1]||=G(`p`,{class:`node-role`},`자식 (Child)`,-1),G(`p`,am,[n[0]||=G(`span`,{class:`key`},`props.count`,-1),G(`span`,om,O(e.count),1)]),G(`div`,{class:`buttons`},[G(`button`,{class:`bad`,onClick:a},`❌ 직접 바꾸기 (props.count++)`),G(`button`,{class:`good`,onClick:o},`✅ 부모에게 요청 (emit)`)]),i.value?(H(),U(`p`,{key:0,class:D([`result`,{fail:i.value.startsWith(`실패`)}])},O(i.value),3)):J(``,!0)]))}},[[`__scopeId`,`data-v-d711a9c2`]]),cm=t({default:()=>pm}),lm={class:`practice-card`},um={class:`parent`},dm={class:`field`},fm={class:`val`},pm=Q({__name:`PropsReadonlyPractice`,setup(e){let t=P(0),n=()=>{t.value++};return(e,r)=>(H(),U(`section`,lm,[G(`h2`,null,[r[0]||=q(` Props는 읽기 전용 — 값의 주인은 부모다 `,-1),K($,{text:`자식이 받은 Props를 직접 바꾸면 Vue가 막습니다. 값이 어디서 바뀌었는지 추적할 수 없게 되기 때문입니다. 자식은 '바꿔 달라'고 요청(emit)하고, 실제로 바꾸는 것은 값을 가진 부모입니다.`})]),G(`div`,um,[r[2]||=G(`p`,{class:`node-role`},`부모 (Parent) — 값의 주인`,-1),G(`p`,dm,[r[1]||=G(`span`,{class:`key`},`count`,-1),G(`span`,fm,O(t.value),1)]),K(sm,{count:t.value,onIncrease:n},null,8,[`count`])]),r[3]||=G(`p`,{class:`hint`},[q(` 브라우저 콘솔(F12)을 열고 ❌ 버튼을 누르면 `),G(`code`,null,`Set operation on key "count" failed: target is readonly`),q(` 경고가 찍힙니다. `)],-1)]))}},[[`__scopeId`,`data-v-24c24705`]]),mm={class:`named`},hm={class:`value`},gm=Q({__name:`DrillLeaf`,props:{theme:{type:String,required:!0}},setup(e){return(t,n)=>(H(),U(`div`,{class:D([`level`,e.theme])},[n[1]||=G(`p`,{class:`role`},`자식 (Child)`,-1),G(`p`,mm,[n[0]||=G(`span`,{class:`name`},`props.theme :`,-1),G(`span`,hm,O(e.theme),1)])],2))}},[[`__scopeId`,`data-v-54c3d013`]]),_m={class:`data`},vm=Q({__name:`DrillMid`,props:{theme:{type:String,required:!0}},setup(e){let t=e,n=P(!1);return z(()=>t.theme,()=>{n.value=!0,setTimeout(()=>n.value=!1,900)}),(t,r)=>(H(),U(`div`,{class:D([`level`,{passing:n.value}])},[r[1]||=G(`p`,{class:`role`},`부모 (Parent)`,-1),G(`p`,{class:D([`hold`,{passing:n.value}])},[r[0]||=G(`span`,{class:`name`},`props.theme :`,-1),G(`span`,_m,O(e.theme),1)],2),r[2]||=G(`p`,{class:`desc`},`😩 쓰지도 않는 값을 받아서 아래로 넘긴다`,-1),K(gm,{theme:e.theme},null,8,[`theme`])],2))}},[[`__scopeId`,`data-v-803c609f`]]),ym={class:`named`},bm={class:`value`},xm=Q({__name:`InjectLeaf`,setup(e){let t=jn(`globalTheme`,`(주입된 값 없음)`);return(e,n)=>(H(),U(`div`,{class:D([`level`,F(t)])},[n[1]||=G(`p`,{class:`role`},`자식 (Child)`,-1),G(`p`,ym,[n[0]||=G(`span`,{class:`name`},`inject('globalTheme') :`,-1),G(`span`,bm,O(F(t)),1)])],2))}},[[`__scopeId`,`data-v-79d6cd3e`]]),Sm={class:`level`},Cm=Q({__name:`InjectMid`,setup(e){return(e,t)=>(H(),U(`div`,Sm,[t[0]||=oa(`<p class="role" data-v-c476208c>부모 (Parent)</p><p class="hold" data-v-c476208c><span class="name" data-v-c476208c>props :</span><span class="none" data-v-c476208c>없음 (0개)</span></p><p class="desc" data-v-c476208c>😌 값이 지나가는지도 모른다. 조용하다.</p>`,3),K(xm)]))}},[[`__scopeId`,`data-v-c476208c`]]),wm=t({default:()=>Mm}),Tm={class:`practice-card`},Em={class:`root`},Dm={class:`field`},Om={class:`val`},km={class:`compare`},Am={class:`col`},jm={class:`col`},Mm=Q({__name:`ProvideInjectPractice`,setup(e){let t=P(`dark-mode`);An(`globalTheme`,t);let n=()=>{t.value=t.value===`dark-mode`?`light-mode`:`dark-mode`};return(e,r)=>(H(),U(`section`,Tm,[G(`h2`,null,[r[0]||=q(` Provide & Inject — 중간을 건너뛰고 전달하기 `,-1),K($,{text:`계층이 깊어지면 중간 컴포넌트들이 자기는 쓰지도 않는 값을 받아서 아래로 넘기기만 하는 일이 생깁니다(Props Drilling). provide/inject는 그 중간을 건너뛰고 조상이 선언한 값을 후손이 직접 꺼내 쓰게 해 줍니다.`})]),G(`div`,Em,[r[6]||=G(`p`,{class:`root-role`},`조부모 (GrandParent) — 값의 주인`,-1),G(`p`,Dm,[r[1]||=G(`span`,{class:`key`},`themeColor :`,-1),G(`span`,Om,O(t.value),1),G(`button`,{onClick:n},`테마 바꾸기`)]),G(`div`,km,[G(`div`,Am,[r[2]||=G(`p`,{class:`col-title bad`},`A · Props Drilling`,-1),r[3]||=G(`p`,{class:`col-desc`},[q(`값이 `),G(`b`,null,`중간을 통과해`),q(` 내려갑니다.`)],-1),K(vm,{theme:t.value},null,8,[`theme`])]),G(`div`,jm,[r[4]||=G(`p`,{class:`col-title good`},`B · Provide / Inject`,-1),r[5]||=G(`p`,{class:`col-desc`},[q(`값이 `),G(`b`,null,`중간을 건너뛰고`),q(` 바로 갑니다.`)],-1),K(Cm)])])]),r[7]||=G(`p`,{class:`footnote`},[q(` 버튼을 누를 때 `),G(`b`,null,`A의 중간 카드만 번쩍이는지`),q(` 보세요. 값이 그곳을 지나간다는 뜻입니다. 여기는 조부모 → 부모 → 자식 3단계라 차이가 작아 보이지만, 10단계쯤 되면 A는 중간 8곳을 전부 고쳐야 합니다. `)],-1)]))}},[[`__scopeId`,`data-v-8bf7e4c2`]]),Nm={class:`sibling`},Pm={class:`buttons`},Fm=[`onClick`],Im=Q({__name:`SiblingA`,emits:[`send`],setup(e,{emit:t}){let n=t,r=[`안녕!`,`점심 먹었어?`,`과제 다 했어?`];return(e,t)=>(H(),U(`div`,Nm,[t[0]||=G(`p`,{class:`node-role`},`형제 A (보내는 쪽)`,-1),t[1]||=G(`p`,{class:`desc`},`누르면 부모에게 올려보냅니다(emit).`,-1),G(`div`,Pm,[(H(),U(V,null,B(r,e=>G(`button`,{key:e,onClick:t=>n(`send`,e)},O(e),9,Fm)),64))])]))}},[[`__scopeId`,`data-v-6a5f088d`]]),Lm={class:`sibling`},Rm=Q({__name:`SiblingB`,props:{received:{type:String,default:``}},setup(e){return(t,n)=>(H(),U(`div`,Lm,[n[0]||=G(`p`,{class:`node-role`},`형제 B (받는 쪽)`,-1),n[1]||=G(`p`,{class:`desc`},`부모가 내려준 값(props)만 볼 수 있습니다.`,-1),G(`p`,{class:D([`bubble`,{empty:!e.received}])},O(e.received||`아직 받은 말이 없습니다`),3)]))}},[[`__scopeId`,`data-v-c96b2e77`]]),zm=t({default:()=>Wm}),Bm={class:`practice-card`},Vm={class:`parent`},Hm={class:`route`},Um={class:`siblings`},Wm=Q({__name:`SiblingTalkPractice`,setup(e){let t=P(``),n=P(0),r=e=>{n.value=1,setTimeout(()=>{t.value=e,n.value=2,setTimeout(()=>n.value=0,900)},450)};return(e,i)=>(H(),U(`section`,Bm,[G(`h2`,null,[i[0]||=q(` 형제끼리는 부모를 거쳐야 한다 `,-1),K($,{text:`같은 부모 아래 나란히 있는 컴포넌트끼리는 직접 연결된 선이 없습니다. A가 B에게 말하려면 반드시 부모에게 올렸다가(emit) 부모가 다시 B에게 내려줘야(props) 합니다. 부모를 거치는 이 경로가 눈에 보이도록 만들었습니다.`})]),G(`div`,Vm,[i[2]||=G(`p`,{class:`node-role`},`부모 (Parent) — 중계자`,-1),G(`div`,Hm,[G(`span`,{class:D([`leg up`,{on:n.value>=1}])},`① A → 부모 \xA0emit`,2),G(`span`,{class:D([`leg down`,{on:n.value>=2}])},`② 부모 → B \xA0props`,2)]),G(`div`,Um,[K(Im,{onSend:r}),i[1]||=G(`span`,{class:`cut`,"aria-hidden":`true`},`✕ 직접 연결 없음`,-1),K(Rm,{received:t.value},null,8,[`received`])])])]))}},[[`__scopeId`,`data-v-9ac8d55d`]]),Gm={class:`base-card`},Km={class:`slot-zone head`},qm={class:`slot-zone body`},Jm={class:`slot-zone foot`},Ym=Q({__name:`SlotBaseCard`,setup(e){return(e,t)=>(H(),U(`div`,Gm,[G(`div`,Km,[kr(e.$slots,`header`,{},()=>[t[0]||=G(`span`,{class:`fallback`},`header 구멍 (비어 있음)`,-1)],!0)]),G(`div`,qm,[kr(e.$slots,`default`,{},()=>[t[1]||=G(`span`,{class:`fallback`},`기본 구멍 (비어 있음)`,-1)],!0)]),G(`div`,Jm,[kr(e.$slots,`footer`,{},()=>[t[2]||=G(`span`,{class:`fallback`},`footer 구멍 (비어 있음)`,-1)],!0)])]))}},[[`__scopeId`,`data-v-fa66589e`]]),Xm=t({default:()=>nh}),Zm={class:`practice-card`},Qm={class:`deck`},$m={class:`case`},eh={class:`case`},th={class:`case`},nh=Q({__name:`SlotBaseCardPractice`,setup(e){return(e,t)=>(H(),U(`section`,Zm,[G(`h2`,null,[t[0]||=q(` 더해보기 ① BaseCard 하나로 화면 3개 `,-1),K($,{text:`아래 세 카드는 전부 같은 SlotBaseCard.vue 파일입니다. 테두리·모서리·구분선이 똑같은 이유죠. 다른 것은 부모가 header·body·footer 세 구멍에 무엇을 넣었는지뿐입니다. 껍데기를 한 번만 만들어 두고 화면마다 알맹이만 갈아 끼우는 것이 Slot의 목적입니다.`})]),t[9]||=G(`p`,{class:`explain`},[q(` 세 카드 모두 `),G(`b`,null,`같은 파일`),q(`입니다. 껍데기를 고치고 싶으면 `),G(`code`,null,`SlotBaseCard.vue`),q(` 한 곳만 고치면 세 개가 동시에 바뀝니다. `)],-1),G(`div`,Qm,[G(`div`,$m,[t[4]||=G(`p`,{class:`case-label`},`구멍 3개 모두 채움`,-1),K(Ym,null,{header:L(()=>[...t[1]||=[G(`b`,null,`주간 리포트`,-1)]]),footer:L(()=>[...t[2]||=[G(`button`,{type:`button`},`자세히`,-1)]]),default:L(()=>[t[3]||=G(`p`,{class:`line`},`이번 주 방문자가 12% 늘었습니다.`,-1)]),_:1})]),G(`div`,eh,[t[7]||=G(`p`,{class:`case-label`},`footer만 비움`,-1),K(Ym,null,{header:L(()=>[...t[5]||=[G(`b`,null,`공지`,-1)]]),default:L(()=>[t[6]||=G(`p`,{class:`line`},`금요일 18시에 배포가 있습니다.`,-1)]),_:1})]),G(`div`,th,[t[8]||=G(`p`,{class:`case-label`},`아무것도 안 채움`,-1),K(Ym)])]),t[10]||=oa(`<div class="verdict" data-v-1f455799><p class="verdict-title" data-v-1f455799>그럼 Props로 하면 안 되나?</p><div class="verdict-grid" data-v-1f455799><div class="side bad" data-v-1f455799><p class="side-head" data-v-1f455799>❌ Props로 시도</p><pre data-v-1f455799><code data-v-1f455799>&lt;BaseCard title=&quot;주간 리포트&quot; /&gt;</code></pre><p class="side-why" data-v-1f455799> 제목 <b data-v-1f455799>글자</b>는 넘길 수 있습니다. 그런데 위 첫 카드의 footer에는 <b data-v-1f455799>&lt;button&gt; 태그</b>가 들어 있습니다. Props로 버튼을 넘기려면 문자열로 <code data-v-1f455799>&quot;&lt;button&gt;&quot;</code>을 보내야 하는데, 그건 화면이 아니라 그냥 글자입니다. </p></div><div class="side good" data-v-1f455799><p class="side-head" data-v-1f455799>✅ Slot이어야만 하는 이유</p><pre data-v-1f455799><code data-v-1f455799>&lt;template #footer&gt;
  &lt;button @click=&quot;...&quot;&gt;자세히&lt;/button&gt;
&lt;/template&gt;</code></pre><p class="side-why" data-v-1f455799><b data-v-1f455799>태그·이벤트·컴포넌트</b>가 통째로 들어갑니다. 넘기는 것이 값이 아니라 화면 조각이기 때문입니다. <b data-v-1f455799>버튼 하나만 들어가도 Props로는 안 됩니다.</b></p></div></div></div>`,1)]))}},[[`__scopeId`,`data-v-1f455799`]]),rh={class:`list`},ih={class:`fallback`},ah=Q({__name:`SlotItemList`,setup(e){let t=P([{id:1,name:`노트북 거치대`,price:32e3,stock:12},{id:2,name:`기계식 키보드`,price:89e3,stock:0},{id:3,name:`USB-C 허브`,price:45e3,stock:3}]);return(e,n)=>(H(),U(`ul`,rh,[(H(!0),U(V,null,B(t.value,t=>(H(),U(`li`,{key:t.id},[kr(e.$slots,`default`,{item:t},()=>[G(`span`,ih,O(t.name)+` (부모가 그리는 방법을 정하지 않음)`,1)],!0)]))),128))]))}},[[`__scopeId`,`data-v-5164d7f2`]]),oh=t({default:()=>yh}),sh={class:`practice-card`},ch={class:`views`},lh={class:`view`},uh={class:`plain`},dh={class:`view`},fh={class:`row`},ph={class:`price`},mh={class:`view`},hh={class:`row`},gh={key:0,class:`badge sold`},_h={key:1,class:`badge low`},vh={key:2,class:`badge ok`},yh=Q({__name:`SlotListPractice`,setup(e){let t=e=>e.toLocaleString(`ko-KR`)+`원`;return(e,n)=>(H(),U(`section`,sh,[G(`h2`,null,[n[0]||=q(` 더해보기 ② 같은 목록, 부모가 정하는 세 가지 모습 `,-1),K($,{text:`목록 컴포넌트는 '무엇을 반복할지'(데이터와 v-for)만 책임지고, '각 항목을 어떻게 그릴지'는 부모에게 맡깁니다. 아래 세 목록은 전부 같은 SlotItemList.vue이고 데이터도 완전히 같습니다. 부모가 v-slot으로 받은 item을 다르게 그렸을 뿐입니다.`})]),n[4]||=G(`p`,{class:`explain`},[q(` 세 목록 모두 `),G(`b`,null,`같은 컴포넌트 · 같은 데이터`),q(`입니다. 데이터는 `),G(`code`,null,`SlotItemList.vue`),q(` 안에만 있고, 부모는 그리는 방법만 정합니다. `)],-1),G(`div`,ch,[G(`div`,lh,[n[1]||=G(`p`,{class:`view-label`},`A · 이름만`,-1),K(ah,null,{default:L(({item:e})=>[G(`span`,uh,O(e.name),1)]),_:1})]),G(`div`,dh,[n[2]||=G(`p`,{class:`view-label`},`B · 가격 강조`,-1),K(ah,null,{default:L(({item:e})=>[G(`div`,fh,[G(`span`,null,O(e.name),1),G(`b`,ph,O(t(e.price)),1)])]),_:1})]),G(`div`,mh,[n[3]||=G(`p`,{class:`view-label`},`C · 재고 상태`,-1),K(ah,null,{default:L(({item:e})=>[G(`div`,hh,[G(`span`,{class:D({out:e.stock===0})},O(e.name),3),e.stock===0?(H(),U(`span`,gh,`품절`)):e.stock<5?(H(),U(`span`,_h,O(e.stock)+`개 남음`,1)):(H(),U(`span`,vh,`재고 충분`))])]),_:1})])]),n[5]||=G(`p`,{class:`note`},[q(` C의 `),G(`b`,null,`품절 · 임박`),q(` 판단은 목록 컴포넌트가 아니라 `),G(`b`,null,`부모`),q(`가 했습니다. 목록은 `),G(`code`,null,`stock`),q(`이 무슨 뜻인지조차 모릅니다. 그래서 같은 목록을 쇼핑몰에도, 관리자 페이지에도 쓸 수 있습니다. `)],-1)]))}},[[`__scopeId`,`data-v-94406ce4`]]),bh={class:`modal`,role:`dialog`,"aria-modal":`true`},xh={class:`modal-head`},Sh={class:`modal-body`},Ch={class:`modal-foot`},wh=Q({__name:`SlotModal`,props:{open:{type:Boolean,default:!1}},emits:[`close`],setup(e,{emit:t}){let n=t;return(t,r)=>e.open?(H(),U(`div`,{key:0,class:`backdrop`,onClick:r[2]||=Ro(e=>n(`close`),[`self`])},[G(`div`,bh,[G(`header`,xh,[kr(t.$slots,`title`,{},()=>[r[3]||=G(`b`,null,`제목 없음`,-1)],!0),G(`button`,{type:`button`,class:`close`,"aria-label":`닫기`,onClick:r[0]||=e=>n(`close`)},`✕`)]),G(`div`,Sh,[kr(t.$slots,`default`,{},()=>[r[4]||=G(`p`,{class:`fallback`},`본문 구멍 (비어 있음)`,-1)],!0)]),G(`footer`,Ch,[kr(t.$slots,`actions`,{},()=>[G(`button`,{type:`button`,onClick:r[1]||=e=>n(`close`)},`닫기`)],!0)])])])):J(``,!0)}},[[`__scopeId`,`data-v-4b2f4b14`]]),Th=t({default:()=>jh}),Eh={class:`practice-card`},Dh={class:`stage`},Oh={class:`buttons`},kh={key:0,class:`result`},Ah={key:1,class:`hint`},jh=Q({__name:`SlotModalPractice`,setup(e){let t=P(!1),n=P(!1),r=P(``),i=()=>{r.value=`삭제했습니다.`,t.value=!1};return(e,a)=>(H(),U(`section`,Eh,[G(`h2`,null,[a[5]||=q(` 더해보기 ③ 모달 하나로 창 두 개 `,-1),K($,{text:`모달 껍데기(어둡게 덮기·가운데 띄우기·닫기)는 어느 창이든 똑같습니다. 다른 건 제목·내용·버튼뿐이죠. 그래서 그 세 곳만 Named Slot으로 열어 두면, 모달 파일 하나로 확인창·안내창·입력창을 전부 만들 수 있습니다.`})]),a[11]||=G(`p`,{class:`explain`},[q(` 아래 두 버튼은 `),G(`b`,null,`같은 SlotModal.vue`),q(`를 엽니다. 껍데기는 같고 `),G(`code`,null,`#title`),q(` · 본문 · `),G(`code`,null,`#actions`),q(` 세 구멍만 다릅니다. `)],-1),G(`div`,Dh,[G(`div`,Oh,[G(`button`,{type:`button`,onClick:a[0]||=e=>t.value=!0},`삭제 확인창 열기`),G(`button`,{type:`button`,onClick:a[1]||=e=>n.value=!0},`안내창 열기`)]),r.value?(H(),U(`p`,kh,O(r.value),1)):J(``,!0),!t.value&&!n.value?(H(),U(`p`,Ah,[...a[6]||=[q(` 위 버튼을 눌러 보세요. 모달은 `,-1),G(`b`,null,`이 점선 안에서만`,-1),q(` 열립니다. `,-1)]])):J(``,!0),K(wh,{open:t.value,onClose:a[3]||=e=>t.value=!1},{title:L(()=>[...a[7]||=[G(`b`,null,`정말 삭제할까요?`,-1)]]),actions:L(()=>[G(`button`,{type:`button`,onClick:a[2]||=e=>t.value=!1},`취소`),G(`button`,{type:`button`,class:`danger`,onClick:i},`삭제`)]),default:L(()=>[a[8]||=G(`p`,null,`삭제한 항목은 되돌릴 수 없습니다.`,-1)]),_:1},8,[`open`]),K(wh,{open:n.value,onClose:a[4]||=e=>n.value=!1},{title:L(()=>[...a[9]||=[G(`b`,null,`배포 안내`,-1)]]),default:L(()=>[a[10]||=G(`p`,null,`금요일 18시에 서비스가 잠시 중단됩니다.`,-1)]),_:1},8,[`open`])]),a[12]||=G(`p`,{class:`note`},[q(` 안내창은 `),G(`code`,null,`#actions`),q(`를 `),G(`b`,null,`채우지 않았습니다`),q(`. 그래서 SlotModal이 준비해 둔 기본 `),G(`b`,null,`닫기`),q(` 버튼 하나만 나옵니다. 구멍마다 기본값을 넣어 두면 부모가 매번 다 채우지 않아도 됩니다. `)],-1)]))}},[[`__scopeId`,`data-v-c7612aa2`]]),Mh={},Nh={class:`base-card`};function Ph(e,t){return H(),U(`div`,Nh,[kr(e.$slots,`default`,{},()=>[t[0]||=G(`p`,null,`기본 콘텐츠 영역입니다.`,-1)],!0)])}var Fh=Q(Mh,[[`render`,Ph],[`__scopeId`,`data-v-187523ed`]]),Ih={},Lh={class:`base-card`};function Rh(e,t){return H(),U(`div`,Lh,[G(`header`,null,[kr(e.$slots,`header`,{},void 0,!0)]),G(`main`,null,[kr(e.$slots,`default`,{},void 0,!0)])])}var zh=Q(Ih,[[`render`,Rh],[`__scopeId`,`data-v-f11484c5`]]),Bh={class:`base-card`},Vh=Q({__name:`SlotScopedChild`,setup(e){let t=P(`현재 서버 상태 정상`),n=P(150);return(e,r)=>(H(),U(`div`,Bh,[r[1]||=G(`p`,{class:`role`},`하위 컴포넌트 (Child)`,-1),kr(e.$slots,`default`,{text:t.value,count:n.value},()=>[r[0]||=G(`p`,null,`부모가 마크업을 주입하지 않았을 때의 디폴트 화면`,-1)],!0)]))}},[[`__scopeId`,`data-v-54665344`]]),Hh=t({default:()=>Jh}),Uh={class:`practice-card`},Wh={class:`practice-area`},Gh={class:`practice-area`},Kh={class:`practice-area`},qh={class:`display-panel`},Jh=Q({__name:`SlotPractice`,setup(e){return(e,t)=>(H(),U(`section`,Uh,[G(`h2`,null,[t[0]||=q(` Slot — 껍데기는 두고 알맹이만 갈아 끼우기 `,-1),K($,{text:`Props가 '값'을 넘기는 것이라면 Slot은 '화면 조각(HTML)'을 통째로 넘기는 것입니다. 액자를 하나 만들어 두고 사진만 바꿔 끼우는 셈이라, 카드·모달·레이아웃처럼 껍데기는 같고 안쪽만 다른 UI에 씁니다.`})]),G(`div`,Wh,[t[3]||=G(`h3`,null,`1) Default Slot — 이름 없는 구멍 하나`,-1),t[4]||=G(`p`,{class:`explain`},[q(` 같은 `),G(`b`,null,`SlotDefaultChild`),q(` 카드에 서로 다른 내용을 넣었습니다. 마지막 카드는 아무것도 안 넣어서 `),G(`b`,null,`기본값`),q(`이 나옵니다. `)],-1),K(Fh,null,{default:L(()=>[...t[1]||=[G(`p`,null,`단순한 텍스트 문장을 주입합니다.`,-1)]]),_:1}),K(Fh,null,{default:L(()=>[...t[2]||=[G(`h4`,{class:`warn`},`🔥 경고 상태`,-1),G(`button`,null,`확인`,-1)]]),_:1}),K(Fh)]),G(`div`,Gh,[t[7]||=G(`h3`,null,`2) Named Slot — 구멍에 이름을 붙여 여러 개`,-1),t[8]||=G(`p`,{class:`explain`},[G(`b`,null,`#header`),q(` 자리와 이름 없는 `),G(`b`,null,`본문`),q(` 자리에 각각 다른 내용을 넣습니다. `)],-1),K(zh,null,{header:L(()=>[...t[5]||=[G(`h4`,null,`Child 주입 제목`,-1)]]),default:L(()=>[t[6]||=G(`p`,null,` "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..." `,-1)]),_:1})]),G(`div`,Kh,[t[9]||=G(`h3`,null,`3) Scoped Slot — 자식의 데이터를 부모가 받아 쓴다`,-1),t[10]||=G(`p`,{class:`explain`},[q(` 아래 값은 `),G(`b`,null,`자식이 가진 데이터`),q(`인데, 화면에 어떻게 그릴지는 `),G(`b`,null,`부모가`),q(` 정합니다. `)],-1),K(Vh,null,{default:L(e=>[G(`div`,qh,[G(`p`,null,`알림 메시지: `+O(e.text),1),G(`p`,null,`접속자 수: `+O(e.count)+`명`,1)])]),_:1}),K(Vh)])]))}},[[`__scopeId`,`data-v-4d263364`]]),Yh=t({default:()=>Zh}),Xh={class:`practice-card`},Zh=Q({__name:`ComputedCachePractice`,setup(e){let t=P(0),n=P(0),r=()=>(console.log(`❌ 일반 함수 실행됨!`),t.value*2),i=X(()=>(console.log(`✅ Computed 연산 실행됨!`),t.value*2));return(e,a)=>(H(),U(`section`,Xh,[G(`h2`,null,[a[2]||=q(` computed() 캐싱 동작 비교 `,-1),K($,{text:`computed는 의존하는 값이 바뀔 때만 다시 계산하고 결과를 캐싱합니다. 일반 함수는 화면이 다시 그려질 때마다 무조건 재실행됩니다. dummy 버튼을 눌러 콘솔 출력 차이를 확인해 보세요.`})]),G(`p`,null,`count: `+O(t.value)+` | dummy: `+O(n.value),1),G(`button`,{onClick:a[0]||=e=>t.value++},`count 증가 (의존성 변경)`),G(`button`,{onClick:a[1]||=e=>n.value++},`dummy 증가 (무관한 변경)`),G(`p`,null,`일반 함수 결과: `+O(r()),1),G(`p`,null,`Computed 결과: `+O(i.value),1),a[3]||=G(`p`,{class:`console-hint`},[q(` 브라우저 콘솔(F12)을 열고 `),G(`b`,null,`dummy 증가`),q(`를 눌러보세요. 일반 함수만 계속 실행되고 computed는 조용합니다. `)],-1)]))}},[[`__scopeId`,`data-v-5263d813`]]),Qh=t({default:()=>rg}),$h={class:`practice-card`},eg={class:`practice-area`},tg={class:`monitor`},ng={class:`monitor target`},rg=Q({__name:`DeepWatchPractice`,setup(e){let t=P({name:`홍길동`,age:20}),n=P(`아직 반응 없음`),r=P(`아직 반응 없음`);return z(t,e=>{n.value=`[deep 감지] 누군가 변경됨! 현재 이름: ${e.name}, 나이: ${e.age}`},{deep:!0}),z(()=>t.value.age,(e,t)=>{r.value=`[타겟 감지] 나이가 ${t}세 ➡️ ${e}세로 변경됨!`}),(e,i)=>(H(),U(`section`,$h,[G(`h2`,null,[i[2]||=q(` ref 객체 감시 — Deep Watch `,-1),K($,{text:`ref에 객체를 담고 watch(user, ...)만 쓰면 속성 변경을 감지하지 못합니다. 객체 자체(참조)가 바뀐 게 아니기 때문입니다. deep: true로 내부 전체를 감시하거나, 화살표 함수로 특정 속성만 콕 집어 감시해야 합니다.`})]),G(`div`,eg,[i[3]||=G(`h3`,null,`👨‍💻 회원 데이터 조작 panel`,-1),G(`p`,null,`이름: `+O(t.value.name)+` / 나이: `+O(t.value.age)+`세`,1),G(`button`,{onClick:i[0]||=e=>t.value.name=`이순신`},`이름만 변경`),G(`button`,{onClick:i[1]||=e=>t.value.age++},`나이만 변경 (age++)`)]),G(`div`,tg,[i[4]||=G(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) deep: true 모니터 (전체 감시)`,-1),G(`p`,null,O(n.value),1)]),G(`div`,ng,[i[5]||=G(`p`,{class:`monitor-title`},`🎯 2) 화살표 함수 모니터 (나이만 타겟 감시)`,-1),G(`p`,null,O(r.value),1)])]))}},[[`__scopeId`,`data-v-485827f2`]]),ig=t({default:()=>pg}),ag={class:`practice-card`},og={class:`compare`},sg={class:`side`},cg={class:`check`},lg={class:`side highlight`},ug={class:`check`},dg={class:`live`},fg={key:0,class:`submitted`},pg=Q({__name:`FormStatePractice`,setup(e){let t=P(``),n=P(``),r=P(``),i=P(!1),a=()=>{t.value=``,n.value=``,r.value=``,i.value=!1},o=()=>JSON.stringify({name:t.value,email:n.value,age:r.value,agree:i.value},null,1),s={name:``,email:``,age:``,agree:!1},c=Lt({...s}),l=()=>{Object.assign(c,s)},u=()=>JSON.stringify(c,null,1),d=P(``),f=()=>{d.value=`[ref 방식] ${o()}`},p=()=>{d.value=`[reactive 방식] ${u()}`};return(e,s)=>(H(),U(`section`,ag,[G(`h2`,null,[s[8]||=q(` 폼 상태 관리 — ref 여러 개 vs reactive 하나 `,-1),K($,{text:`reactive의 장점은 '관련 있는 값을 한 덩어리로 다룰 수 있다'는 점입니다. 초기화·전송·전달을 객체 단위로 처리할 수 있어 필드가 많아질수록 코드가 짧아집니다. 대신 통째로 재할당하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다.`})]),G(`div`,og,[G(`div`,sg,[s[13]||=G(`h3`,null,`A. ref 4개`,-1),G(`label`,null,[s[9]||=q(`이름 `,-1),R(G(`input`,{"onUpdate:modelValue":s[0]||=e=>t.value=e,type:`text`},null,512),[[Z,t.value]])]),G(`label`,null,[s[10]||=q(`이메일 `,-1),R(G(`input`,{"onUpdate:modelValue":s[1]||=e=>n.value=e,type:`text`},null,512),[[Z,n.value]])]),G(`label`,null,[s[11]||=q(`나이 `,-1),R(G(`input`,{"onUpdate:modelValue":s[2]||=e=>r.value=e,type:`number`},null,512),[[Z,r.value,void 0,{number:!0}]])]),G(`label`,cg,[R(G(`input`,{"onUpdate:modelValue":s[3]||=e=>i.value=e,type:`checkbox`},null,512),[[ko,i.value]]),s[12]||=q(` 약관 동의`,-1)]),G(`div`,{class:`buttons`},[G(`button`,{onClick:f},`전송`),G(`button`,{onClick:a},`초기화`)]),s[14]||=G(`pre`,{class:`code`},`name.value = ''
email.value = ''
age.value = ''
agree.value = false`,-1),s[15]||=G(`p`,{class:`note`},`필드가 늘면 이 줄도 같이 늘어난다`,-1)]),G(`div`,lg,[s[20]||=G(`h3`,null,`B. reactive 1개`,-1),G(`label`,null,[s[16]||=q(`이름 `,-1),R(G(`input`,{"onUpdate:modelValue":s[4]||=e=>c.name=e,type:`text`},null,512),[[Z,c.name]])]),G(`label`,null,[s[17]||=q(`이메일 `,-1),R(G(`input`,{"onUpdate:modelValue":s[5]||=e=>c.email=e,type:`text`},null,512),[[Z,c.email]])]),G(`label`,null,[s[18]||=q(`나이 `,-1),R(G(`input`,{"onUpdate:modelValue":s[6]||=e=>c.age=e,type:`number`},null,512),[[Z,c.age,void 0,{number:!0}]])]),G(`label`,ug,[R(G(`input`,{"onUpdate:modelValue":s[7]||=e=>c.agree=e,type:`checkbox`},null,512),[[ko,c.agree]]),s[19]||=q(` 약관 동의`,-1)]),G(`div`,{class:`buttons`},[G(`button`,{onClick:p},`전송`),G(`button`,{onClick:l},`초기화`)]),s[21]||=G(`pre`,{class:`code`},`Object.assign(form, INITIAL_FORM)`,-1),s[22]||=G(`p`,{class:`note`},`필드가 몇 개든 한 줄로 끝난다`,-1)])]),G(`div`,dg,[G(`div`,null,[s[23]||=G(`p`,{class:`live-label`},`A · ref 4개를 손으로 조립`,-1),G(`pre`,null,O(o()),1)]),G(`div`,null,[s[24]||=G(`p`,{class:`live-label`},`B · reactive 객체를 그대로 사용`,-1),G(`pre`,null,O(u()),1)])]),d.value?(H(),U(`p`,fg,O(d.value),1)):J(``,!0)]))}},[[`__scopeId`,`data-v-be254916`]]),mg=t({default:()=>vg}),hg={class:`practice-card`},gg={class:`practice-area`},_g={class:`monitor`},vg=Q({__name:`MultiWatchPractice`,setup(e){let t=P(`서울`),n=P(`오늘`),r=P(`대기 중...`);return z([t,n],([e,t],[n,i])=>{r.value=`[변경 감지] ${n}(${i}) ➡️ ${e}(${t})`,console.log(`🤖 [통합 API 호출] ${e}의 ${t} 날씨를 불러옵니다...`)}),(e,i)=>(H(),U(`section`,hg,[G(`h2`,null,[i[4]||=q(` 여러 개의 변수 동시 감시 (Multi-Source Watch) `,-1),K($,{text:`watch의 첫 번째 인자에 배열을 넘기면 여러 값을 한 번에 감시합니다. 콜백이 받는 새 값·이전 값도 배열이며, 감시 대상을 적은 순서 그대로 매핑됩니다. 둘 중 하나만 바뀌어도 콜백이 한 번 실행됩니다.`})]),G(`div`,gg,[i[9]||=G(`h3`,null,`날씨 조건 설정`,-1),i[10]||=G(`label`,null,`도시: `,-1),R(G(`select`,{"onUpdate:modelValue":i[0]||=e=>t.value=e},[...i[5]||=[G(`option`,{value:`서울`},`서울`,-1),G(`option`,{value:`수원`},`수원`,-1),G(`option`,{value:`부산`},`부산`,-1)]],512),[[Mo,t.value]]),i[11]||=G(`p`,{class:`field-label`},`날짜:`,-1),G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":i[1]||=e=>n.value=e,type:`radio`,value:`오늘`},null,512),[[jo,n.value]]),i[6]||=q(` 오늘`,-1)]),G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":i[2]||=e=>n.value=e,type:`radio`,value:`내일`},null,512),[[jo,n.value]]),i[7]||=q(` 내일`,-1)]),G(`label`,null,[R(G(`input`,{"onUpdate:modelValue":i[3]||=e=>n.value=e,type:`radio`,value:`주간예보`},null,512),[[jo,n.value]]),i[8]||=q(` 주간예보`,-1)])]),G(`div`,_g,[i[12]||=G(`h3`,null,`통합 모니터링 로그`,-1),G(`p`,null,`현재 상태: `+O(r.value),1)])]))}},[[`__scopeId`,`data-v-25d6c99a`]]),yg=t({default:()=>wg}),bg={class:`practice-card`},xg={class:`practice-area`},Sg={class:`monitor auto`},Cg={class:`monitor target`},wg=Q({__name:`ReactiveArrayWatchPractice`,setup(e){let t=Lt([`서울`,`수원`]),n=P(`대기 중...`),r=P(`대기 중...`);return z(t,(e,t)=>{n.value=`[자동 감시] 배열 변동 발생! 옛날길이인척하는:${t.length} / 현재길이:${e.length}`}),z(()=>[...t],(e,t)=>{r.value=`[스냅샷 감시] 진짜 과거 길이:${t.length} (데이터: ${t}) ➡️ 바뀐 길이:${e.length}`}),(e,i)=>(H(),U(`section`,bg,[G(`h2`,null,[i[2]||=q(` reactive() 배열 감시 — 스냅샷 기법 `,-1),K($,{text:`배열도 객체와 같은 함정이 있습니다. 변수명을 그대로 넘기면 이전 배열과 현재 배열이 같은 것을 가리켜 비교가 불가능합니다. 스프레드로 복사본을 만들어([...cityList]) 감시하면 과거 상태가 그대로 보존됩니다.`})]),G(`div`,xg,[i[4]||=G(`h3`,null,`즐겨찾기 도시 목록 (reactive 배열)`,-1),G(`p`,null,[i[3]||=q(` 현재 등록된 도시: `,-1),G(`strong`,null,O(t),1)]),G(`button`,{onClick:i[0]||=e=>t.push(`부산`)},`부산 추가 (push)`),G(`button`,{onClick:i[1]||=e=>t.pop()},`최근 도시 삭제 (pop)`)]),G(`div`,Sg,[i[5]||=G(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) cityList 변수명 쌩으로 감시`,-1),G(`p`,null,O(n.value),1),i[6]||=G(`small`,null,`※ 주의: 이전 배열과 현재 배열의 내용물·길이가 똑같이 동기화되어 버립니다.`,-1)]),G(`div`,Cg,[i[7]||=G(`p`,{class:`monitor-title`},`🎯 2) () => [...cityList] 복사본 감시`,-1),G(`p`,null,O(r.value),1),i[8]||=G(`small`,null,`※ 성공: 과거 배열에 들어있던 내용물이 지워지지 않고 정상 대조됩니다.`,-1)])]))}},[[`__scopeId`,`data-v-e62c5023`]]),Tg=t({default:()=>Ag}),Eg={class:`practice-card`},Dg={class:`practice-area`},Og={class:`practice-area`},kg=[`onClick`],Ag=Q({__name:`ReactiveStatePractice`,setup(e){let t=Lt({name:`이순신`,age:30}),n=()=>{t.age++},r=Lt([`사과`,`바나나`]),i=()=>{r.push(`과일 ${r.length+1}`)},a=e=>{r.splice(e,1)};return(e,o)=>(H(),U(`section`,Eg,[G(`h2`,null,[o[0]||=q(` 반응형 상태 reactive() 특징 및 주의점 `,-1),K($,{text:`reactive()는 객체·배열 전용이며 .value 없이 바로 접근합니다. 다만 객체를 통째로 재할당(userReactive = { ... })하면 반응성이 끊기고, 원시값에는 쓸 수 없습니다. 그래서 실무는 ref()로 통일하는 추세입니다.`})]),G(`div`,Dg,[o[1]||=G(`h3`,null,`1) 객체(Object) reactive`,-1),G(`p`,null,`이름: `+O(t.name)+` / 나이: `+O(t.age)+`세`,1),G(`button`,{onClick:n},`reactive 나이 한 살 추가`)]),G(`div`,Og,[o[2]||=G(`h3`,null,`2) 배열(Array) reactive`,-1),G(`ul`,null,[(H(!0),U(V,null,B(r,(e,t)=>(H(),U(`li`,{key:t},[q(O(e)+` `,1),G(`button`,{style:{"margin-left":`8px`,padding:`2px 8px`},onClick:e=>a(t)},` 삭제 `,8,kg)]))),128))]),G(`button`,{onClick:i},`과일 항목 추가`)])]))}},[[`__scopeId`,`data-v-524a2c66`]]),jg=t({default:()=>Ig}),Mg={class:`practice-card`},Ng={class:`practice-area`},Pg={class:`monitor auto`},Fg={class:`monitor target`},Ig=Q({__name:`ReactiveWatchPractice`,setup(e){let t=Lt({productName:`노트북`,price:1e3}),n=P(`대기 중...`),r=P(`대기 중...`);return z(t,(e,t)=>{n.value=`[자동 deep] 가격 변동! 이전가격인척하는:${t.price}원 ➡️ 현재가격:${e.price}원`}),z(()=>t.price,(e,t)=>{r.value=`[타겟 조준] 가격이 진짜 올랐음! 옛날값:${t}원 ➡️ 바뀐값:${e}원`}),(e,i)=>(H(),U(`section`,Mg,[G(`h2`,null,[i[1]||=q(` reactive() 데이터 watch 감시 규칙 `,-1),K($,{text:`reactive 객체는 변수명을 그대로 넘기면 deep이 자동으로 켜져 내부 속성 변경까지 잡아냅니다. 다만 이전 값과 현재 값이 같은 객체를 가리켜서 oldVal이 쓸모없어집니다. 이전 값이 필요하면 화살표 함수로 특정 속성만 콕 집어야 합니다.`})]),G(`div`,Ng,[i[2]||=G(`h3`,null,`🛒 상품 정보 관리 (reactive)`,-1),G(`p`,null,`상품명: `+O(t.productName)+` / 가격: `+O(t.price)+`원`,1),G(`button`,{onClick:i[0]||=e=>t.price+=500},`가격 500원 인상`)]),G(`div`,Pg,[i[3]||=G(`p`,{class:`monitor-title`},`👁️‍🗨️ 1) state 변수 통째로 감시 (deep 자동화)`,-1),G(`p`,null,O(n.value),1),i[4]||=G(`small`,null,`※ 주의: 이전 값과 현재 값이 똑같이 찍힌다.`,-1)]),G(`div`,Fg,[i[5]||=G(`p`,{class:`monitor-title`},`🎯 2) () => state.price 콕 집어 감시 (과거 추적)`,-1),G(`p`,null,O(r.value),1),i[6]||=G(`small`,null,`※ 성공: 과거의 원본 가격이 칼같이 보존된다.`,-1)])]))}},[[`__scopeId`,`data-v-50148cb5`]]),Lg=t({default:()=>Ug}),Rg={class:`practice-card`},zg={class:`practice-area`},Bg={class:`log text`},Vg={class:`practice-area`},Hg={class:`log object`},Ug=Q({__name:`RefArrayWatchPractice`,setup(e){let t=P([`홍길동`,`이순신`,`강감찬`]),n=P(`대기 중...`),r=P([{name:`서울`,temp:25},{name:`수원`,temp:22}]),i=P(`대기 중...`);return z(()=>t.value[0],(e,t)=>{n.value=`[방출/영입] 0번 선수 교체: ${t} ➡️ ${e}`}),z(()=>r.value[0],e=>{i.value=`[날씨 변동] 서울의 온도가 현재 ${e.temp}°C 로 변경되었습니다.`},{deep:!0}),(e,a)=>(H(),U(`section`,Rg,[G(`h2`,null,[a[2]||=q(` ref 배열의 특정 인덱스 감시하기 `,-1),K($,{text:`배열의 특정 요소만 감시하려면 화살표 함수로 콕 집어야 합니다. 다만 그 요소가 문자열이면 그대로 동작하지만, 객체라면 { deep: true }가 없으면 내부 속성 변경을 감지하지 못합니다. 가리키는 대상의 타입에 따라 규칙이 달라집니다.`})]),G(`div`,zg,[G(`h3`,null,`🏃‍♂️ 1) 문자열 배열: 현재 0번 멤버 [ `+O(t.value[0])+` ]`,1),G(`button`,{onClick:a[0]||=e=>t.value[0]=`손흥민`},`0번 멤버를 손흥민으로 교체`),G(`p`,Bg,`로그: `+O(n.value),1)]),G(`div`,Vg,[G(`h3`,null,`⛅ 2) 객체형 배열: 현재 `+O(r.value[0].name)+` 기온 [ `+O(r.value[0].temp)+`°C ]`,1),G(`button`,{onClick:a[1]||=e=>r.value[0].temp++},`서울 기온 1도 올리기 (temp++)`),G(`p`,Hg,`로그: `+O(i.value),1)])]))}},[[`__scopeId`,`data-v-b0ee05f5`]]),Wg=t({default:()=>Kg}),Gg={class:`practice-card`},Kg={__name:`RefStatePractice`,setup(e){let t=P(0),n=P(`홍길동`),r=P(!0),i=P([`사과`,`배`]),a=P({name:`이순신`,age:30}),o=()=>{t.value++},s=()=>{a.value.name=`장보고`};return(e,c)=>(H(),U(`section`,Gg,[G(`h2`,null,[c[3]||=q(` 반응형 상태 ref() 기초 `,-1),K($,{text:`ref()는 값을 반응형 상자에 담습니다. script에서는 .value로 상자를 열어야 하고, template에서는 자동 언래핑되어 .value 없이 씁니다. 객체나 배열을 담아도 내부 속성 변경까지 감지됩니다.`})]),G(`p`,null,[c[4]||=q(` Ref 카운트: `,-1),G(`strong`,null,O(t.value),1)]),G(`p`,null,[c[5]||=q(`이름: `,-1),R(G(`input`,{"onUpdate:modelValue":c[0]||=e=>n.value=e},null,512),[[Z,n.value]]),q(O(n.value),1)]),G(`p`,null,`활성 상태: `+O(r.value?`활성`:`비활성`),1),G(`p`,null,`과일 목록: `+O(i.value.join(`, `)),1),G(`p`,null,`사용자 정보: 이름 - `+O(a.value.name)+`, 나이 - `+O(a.value.age),1),G(`button`,{onClick:o},`Ref 변수 증가`),G(`button`,{onClick:c[1]||=e=>r.value=!r.value},`토글`),G(`button`,{onClick:c[2]||=e=>i.value.push(`귤`)},`과일 추가`),G(`button`,{onClick:s},`사용자 이름 변경`)]))}},qg=t({default:()=>o_}),Jg={class:`practice-card`},Yg={class:`todo-input`},Xg=[`disabled`],Zg={class:`filter`},Qg={key:0,class:`todo-list`},$g=[`checked`,`onChange`],e_=[`onKeyup`,`onBlur`],t_=[`onClick`],n_=[`onClick`],r_={key:1,class:`empty`},i_={key:2,class:`empty`},a_={key:3,class:`todo-foot`},o_=Q({__name:`TodoAdvancedPractice`,setup(e){let t=P([{id:1,title:`장보기`,done:!1},{id:2,title:`Vue 복습하기`,done:!0}]),n=P(``),r=3,i=()=>{let e=n.value.trim();e&&(t.value.push({id:r,title:e,done:!1}),r++,n.value=``)},a=e=>{e.done=!e.done},o=e=>{t.value=t.value.filter(t=>t.id!==e)},s=P(null),c=P(``),l=P(null),u=async e=>{s.value=e.id,c.value=e.title,await vn(),l.value?.focus()},d=e=>{if(s.value===null)return;let t=c.value.trim();t&&(e.title=t),s.value=null},f=()=>{s.value=null},p=P(!1),m=X(()=>p.value?t.value.filter(e=>!e.done):t.value),h=X(()=>t.value.filter(e=>!e.done).length),g=X(()=>t.value.length-h.value);return(e,r)=>(H(),U(`section`,Jg,[G(`h2`,null,[r[3]||=q(` 할 일 목록 응용 2 — 잠금 · 수정 · 필터 `,-1),K($,{text:`세 가지를 얹었습니다. ① :disabled로 빈 입력일 때 버튼 잠그기 ② 제목을 클릭해 인라인 수정(수정 중 상태를 ref로 관리) ③ computed로 필터와 집계를 옮기기. computed는 CC06에서 정식으로 배우지만 여기서 미리 써 봅니다.`})]),G(`div`,Yg,[R(G(`input`,{"onUpdate:modelValue":r[0]||=e=>n.value=e,type:`text`,placeholder:`할 일을 입력하고 Enter`,onKeyup:Bo(i,[`enter`])},null,544),[[Z,n.value]]),G(`button`,{disabled:!n.value.trim(),onClick:i},`추가`,8,Xg)]),G(`label`,Zg,[R(G(`input`,{"onUpdate:modelValue":r[1]||=e=>p.value=e,type:`checkbox`},null,512),[[ko,p.value]]),r[4]||=q(` 남은 일만 보기 `,-1)]),m.value.length?(H(),U(`ul`,Qg,[(H(!0),U(V,null,B(m.value,e=>(H(),U(`li`,{key:e.id,class:D({done:e.done})},[G(`input`,{type:`checkbox`,checked:e.done,onChange:t=>a(e)},null,40,$g),s.value===e.id?R((H(),U(`input`,{key:0,ref_for:!0,ref:e=>e&&(l.value=e),"onUpdate:modelValue":r[2]||=e=>c.value=e,class:`edit-input`,onKeyup:[Bo(t=>d(e),[`enter`]),Bo(f,[`esc`])],onBlur:t=>d(e)},null,40,e_)),[[Z,c.value]]):(H(),U(`span`,{key:1,class:`title`,title:`클릭하면 제목을 고칠 수 있습니다`,onClick:t=>u(e)},O(e.title),9,t_)),G(`button`,{onClick:t=>o(e.id)},`삭제`,8,n_)],2))),128))])):t.value.length?(H(),U(`p`,r_,` 🎉 남은 일이 없습니다. 필터를 끄면 완료한 항목을 볼 수 있어요. `)):(H(),U(`p`,i_,`아직 할 일이 없습니다. 위에서 하나 추가해 보세요.`)),t.value.length?(H(),U(`div`,a_,[G(`span`,null,[r[5]||=q(` 전체 `,-1),G(`b`,null,O(t.value.length),1),r[6]||=q(` · 남은 일 `,-1),G(`b`,null,O(h.value),1),r[7]||=q(` · 완료 `,-1),G(`b`,null,O(g.value),1)]),r[8]||=G(`span`,{class:`hint`},`제목을 클릭 → 수정 · Enter 확정 · Esc 취소`,-1)])):J(``,!0)]))}},[[`__scopeId`,`data-v-f5c37e4e`]]),s_=t({default:()=>g_}),c_={class:`practice-card`},l_={class:`todo-input`},u_={key:0,class:`todo-list`},d_=[`checked`,`onChange`],f_={class:`title`},p_=[`onClick`],m_={key:1,class:`empty`},h_={key:2,class:`todo-foot`},g_=Q({__name:`TodoListPractice`,setup(e){let t=P([]),n=P(``),r=1,i=()=>{let e=n.value.trim();e&&(t.value.push({id:r,title:e,done:!1}),r++,n.value=``)},a=e=>{e.done=!e.done},o=e=>{t.value=t.value.filter(t=>t.id!==e)},s=()=>{t.value=t.value.filter(e=>!e.done)};return(e,r)=>(H(),U(`section`,c_,[G(`h2`,null,[r[1]||=q(` 할 일 목록 — ref 배열 응용 `,-1),K($,{text:`ref([])에 객체를 담아 목록을 관리하는 연습입니다. 추가는 push, 삭제는 filter로 새 배열을 만들어 교체합니다. 배열 안 객체의 속성(done)을 직접 바꿔도 ref가 변화를 감지해 화면이 갱신됩니다.`})]),G(`div`,l_,[R(G(`input`,{"onUpdate:modelValue":r[0]||=e=>n.value=e,type:`text`,placeholder:`할 일을 입력하고 Enter`,onKeyup:Bo(i,[`enter`])},null,544),[[Z,n.value]]),G(`button`,{onClick:i},`추가`)]),t.value.length?(H(),U(`ul`,u_,[(H(!0),U(V,null,B(t.value,e=>(H(),U(`li`,{key:e.id,class:D({done:e.done})},[G(`input`,{type:`checkbox`,checked:e.done,onChange:t=>a(e)},null,40,d_),G(`span`,f_,O(e.title),1),G(`button`,{class:`remove`,onClick:t=>o(e.id)},`삭제`,8,p_)],2))),128))])):(H(),U(`p`,m_,`아직 할 일이 없습니다. 위에서 하나 추가해 보세요.`)),t.value.length?(H(),U(`div`,h_,[G(`span`,null,[r[2]||=q(` 전체 `,-1),G(`b`,null,O(t.value.length),1),r[3]||=q(` · 남은 일 `,-1),G(`b`,null,O(t.value.filter(e=>!e.done).length),1),r[4]||=q(` · 완료 `,-1),G(`b`,null,O(t.value.filter(e=>e.done).length),1)]),G(`button`,{onClick:s},`완료한 항목 지우기`)])):J(``,!0)]))}},[[`__scopeId`,`data-v-db2e98ce`]]),__=t({default:()=>x_}),v_={class:`practice-card`},y_={class:`practice-area`},b_={class:`monitor`},x_=Q({__name:`WatchEffectPractice`,setup(e){let t=P(`홍길동`),n=P(20),r=P(`대기 중...`);return Pn(()=>{r.value=`[자동 감지] 이름: ${t.value} / 나이: ${n.value}세`,console.log(`🤖 watchEffect가 내부 변수 변경을 감지하여 실행되었습니다.`)}),(e,i)=>(H(),U(`section`,v_,[G(`h2`,null,[i[2]||=q(` 자동 감시자 watchEffect() `,-1),K($,{text:`watchEffect는 감시 대상을 적지 않습니다. 함수 안에서 읽은 반응형 값이 자동으로 의존성이 됩니다. 그리고 등록되는 즉시 한 번 실행되는 점이 watch와 가장 큰 차이입니다. 대신 이전 값은 받을 수 없습니다.`})]),G(`div`,y_,[G(`p`,null,`이름: `+O(t.value)+` / 나이: `+O(n.value)+`세`,1),G(`button`,{onClick:i[0]||=e=>t.value=`이순신`},`이름을 '이순신'으로 변경`),G(`button`,{onClick:i[1]||=e=>n.value++},`나이 한 살 추가 (age++)`)]),G(`div`,b_,[i[3]||=G(`h3`,null,`👁️‍🗨️ watchEffect 자동 모니터링 시스템`,-1),G(`p`,null,O(r.value),1),i[4]||=G(`small`,null,` ※ 새로고침하자마자 버튼을 안 눌러도 로그가 이미 찍혀있는 특징을 주목하세요! `,-1)])]))}},[[`__scopeId`,`data-v-542ebb87`]]),S_=t({default:()=>E_}),C_={class:`practice-card`},w_={class:`practice-area`},T_={class:`monitor`},E_=Q({__name:`WatchPractice`,setup(e){let t=P(`서울`),n=P(`아직 감시 시스템이 작동하지 않았습니다.`);return z(t,(e,t)=>{n.value=`📍 감시자 발동! [${t}]에서 [${e}]로 변경됨.`,console.log(`🤖 [서버 요청 완료] 기상청 서버에서 ${e}의 날씨 API를 다시 조회합니다...`)}),(e,r)=>(H(),U(`section`,C_,[G(`h2`,null,[r[3]||=q(` 감시자 watch()의 원리와 실무 활용 `,-1),K($,{text:`watch()는 값이 바뀌는 순간 무언가를 실행하는 감시자입니다. 콜백은 (새 값, 이전 값)을 받습니다. 화면에 보여줄 값은 computed로, API 호출·로그 같은 부수 효과는 watch로 처리합니다.`})]),G(`div`,w_,[r[4]||=G(`h3`,null,`🏙️ 지역 선택 제어판`,-1),G(`p`,null,`현재 선택된 도시: `+O(t.value),1),G(`button`,{onClick:r[0]||=e=>t.value=`서울`},`서울 선택`),G(`button`,{onClick:r[1]||=e=>t.value=`수원`},`수원 선택`),G(`button`,{onClick:r[2]||=e=>t.value=`부산`},`부산 선택`)]),G(`div`,T_,[r[5]||=G(`h3`,null,`👁️‍🗨️ 파수꾼(watch) 모니터링 시스템`,-1),G(`p`,null,O(n.value),1),r[6]||=G(`small`,null,`(버튼을 누른 후 브라우저 콘솔창 F12를 확인해 보세요)`,-1)])]))}},[[`__scopeId`,`data-v-f25592fe`]]),D_=`<script setup>
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
`,O_=`<script setup>
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
`,k_=`<script setup>
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
`,A_=`<script setup>
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
`,j_=`<script setup>
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
`,M_=`<script setup>
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
`,N_=`<script setup>
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
`,P_=`<script setup>
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
`,F_=`<script setup>
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
`,I_=`<script setup>
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
`,L_=`<script setup>
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
`,R_=`<script setup>
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
`,z_=`<script setup>
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
`,B_=`<script setup>
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
`,V_=`<script setup>
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
`,H_=`<script setup>
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
`,U_=`<script setup>
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
`,W_=`<script setup>
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
`,G_=`<script setup>
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
`,K_=`<script setup>
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
`,q_=`<script setup>
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
`,J_=`<script setup>
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
`,Y_=`<script setup>
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
`,X_=`<script setup>
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
`,Z_=`<script setup>
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
`,Q_=`<script setup>
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
`,$_=`<script setup>
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
`,ev=`<script setup>
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
`,tv=`<script setup>
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
`,nv=`<script setup>
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
`,rv=`<script setup>
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
`,iv=`<script setup>
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
`,av=Object.assign({"./basic/BindPractice.vue":Kd,"./basic/ConditionalPractice.vue":sf,"./basic/EventPractice.vue":vf,"./basic/ForPractice.vue":Af,"./basic/HtmlTextPractice.vue":Pf,"./basic/ModelPractice.vue":Hf,"./basic/ReactivityPractice.vue":cp,"./basic/SpecialDirectivePractice.vue":dp,"./component/ComponentRegistrationPractice.vue":xp,"./component/LifecyclePractice.vue":Ap,"./component/PropsEmitsPractice.vue":Ip,"./component/PropsFlowPractice.vue":Gp,"./component/PropsReadonlyPractice.vue":cm,"./component/ProvideInjectPractice.vue":wm,"./component/SiblingTalkPractice.vue":zm,"./component/SlotBaseCardPractice.vue":Xm,"./component/SlotListPractice.vue":oh,"./component/SlotModalPractice.vue":Th,"./component/SlotPractice.vue":Hh,"./composition/ComputedCachePractice.vue":Yh,"./composition/DeepWatchPractice.vue":Qh,"./composition/FormStatePractice.vue":ig,"./composition/MultiWatchPractice.vue":mg,"./composition/ReactiveArrayWatchPractice.vue":yg,"./composition/ReactiveStatePractice.vue":Tg,"./composition/ReactiveWatchPractice.vue":jg,"./composition/RefArrayWatchPractice.vue":Lg,"./composition/RefStatePractice.vue":Wg,"./composition/TodoAdvancedPractice.vue":qg,"./composition/TodoListPractice.vue":s_,"./composition/WatchEffectPractice.vue":__,"./composition/WatchPractice.vue":S_}),ov=e=>e.split(`/`).pop().replace(`.vue`,``),sv=Object.fromEntries(Object.entries(av).map(([e,t])=>[ov(e),t.default])),cv=Object.fromEntries(Object.entries(av).map(([e])=>[ov(e),e.replace(`./`,`src/components/practices/`)]));Object.keys(sv).sort();var lv=e=>sv[e]??null,uv=e=>cv[e]??``,dv=Object.fromEntries(Object.entries(Object.assign({"./basic/BindPractice.vue":D_,"./basic/ConditionalPractice.vue":O_,"./basic/EventPractice.vue":k_,"./basic/ForPractice.vue":A_,"./basic/HtmlTextPractice.vue":j_,"./basic/ModelPractice.vue":M_,"./basic/ReactivityPractice.vue":N_,"./basic/SpecialDirectivePractice.vue":P_,"./component/ComponentRegistrationPractice.vue":F_,"./component/LifecyclePractice.vue":I_,"./component/PropsEmitsPractice.vue":L_,"./component/PropsFlowPractice.vue":R_,"./component/PropsReadonlyPractice.vue":z_,"./component/ProvideInjectPractice.vue":B_,"./component/SiblingTalkPractice.vue":V_,"./component/SlotBaseCardPractice.vue":H_,"./component/SlotListPractice.vue":U_,"./component/SlotModalPractice.vue":W_,"./component/SlotPractice.vue":G_,"./composition/ComputedCachePractice.vue":K_,"./composition/DeepWatchPractice.vue":q_,"./composition/FormStatePractice.vue":J_,"./composition/MultiWatchPractice.vue":Y_,"./composition/ReactiveArrayWatchPractice.vue":X_,"./composition/ReactiveStatePractice.vue":Z_,"./composition/ReactiveWatchPractice.vue":Q_,"./composition/RefArrayWatchPractice.vue":$_,"./composition/RefStatePractice.vue":ev,"./composition/TodoAdvancedPractice.vue":tv,"./composition/TodoListPractice.vue":nv,"./composition/WatchEffectPractice.vue":rv,"./composition/WatchPractice.vue":iv})).map(([e,t])=>[ov(e),t])),fv=e=>dv[e]??``,pv=[`id`],mv=[`aria-expanded`,`title`],hv={class:`card-chevron`,"aria-hidden":`true`},gv={class:`head-text`},_v={class:`label`},vv={class:`slide`},yv={key:0,class:`goal`},bv={key:1,class:`card-summary`},xv={class:`head-badges`},Sv={key:0,class:`badge live`},Cv={key:1,class:`tasks`},wv={key:2,class:`fold pitfalls`},Tv={class:`fold-body`},Ev={key:0,class:`compare`},Dv={key:0,class:`bad`},Ov={key:1,class:`good`},kv={class:`why`},Av={key:3,class:`practice-note`},jv={class:`practice-head`},Mv=[`aria-expanded`,`title`],Nv={class:`chevron`,"aria-hidden":`true`},Pv={key:0,class:`count`},Fv={class:`practice-hint`},Iv={class:`practice-main`},Lv={key:0,class:`practice-mounts`},Rv={class:`slot-tools`},zv=[`onClick`],Bv=[`onClick`],Vv={key:1,class:`practice-empty`},Hv={key:2,class:`practice-missing`},Uv=[`aria-expanded`,`title`],Wv={class:`side-chevron`,"aria-hidden":`true`},Gv={class:`side-body`},Kv={key:0,class:`side-block`},qv={class:`side-heading`},Jv=[`onClick`],Yv={class:`guide`},Xv=[`innerHTML`],Zv={class:`guide-see`},Qv=[`innerHTML`],$v={key:0,class:`guide-why`},ey=[`innerHTML`],ty={key:1,class:`group-extras`},ny={key:1,class:`side-block fold extensions`},ry={class:`fold-body`},iy={key:5,class:`fold extensions`},ay={class:`fold-body`},oy=Q({__name:`ChallengeCard`,props:{challenge:{type:Object,required:!0}},setup(e){let t=e,n=X(()=>t.challenge.practices.map(e=>({name:e,component:lv(e)})).filter(e=>e.component)),r=X(()=>t.challenge.practices.filter(e=>!lv(e))),i=X(()=>n.value.length>0),a=X(()=>t.challenge.practiceGuide??[]),o=X(()=>{let e=[];for(let t of a.value)t.practice||e.length===0?e.push({label:t.practice??null,steps:[t]}):e[e.length-1].steps.push(t);return e.map(e=>({...e,extras:l.value.filter(t=>typeof t==`object`&&t.practice===e.label)}))}),s=X(()=>{let e=new Set(o.value.map(e=>e.label));return l.value.filter(t=>typeof t==`string`||!e.has(t.practice))}),c=e=>typeof e==`string`?e:e.text,l=X(()=>t.challenge.extensions??[]),u=X(()=>i.value&&(a.value.length>0||l.value.length>0)),d=P(!0),f=P(!0),p=P(!1),m=X(()=>{let e=[];return t.challenge.tasks?.length&&e.push(`연습 ${t.challenge.tasks.length}`),t.challenge.pitfalls?.length&&e.push(`주의 ${t.challenge.pitfalls.length}`),n.value.length&&e.push(`실습 ${n.value.length}`),e.join(` · `)}),h=X(()=>!u.value&&l.value.length>0),g=Lt({}),_=e=>`${e}-${g[e]??0}`,v=e=>{g[e]=(g[e]??0)+1},y=()=>{n.value.forEach(e=>v(e.name))},b=P(null),x=e=>{b.value=e},S=P(null),C=e=>e.replace(/\s+/g,` `).trim(),ee=(e,t)=>{let n=S.value;if(!n)return;let r=[...n.querySelectorAll(`.practice-slot`)];if(!r.length)return;let i=r.find(t=>{let n=t.querySelector(`h2`);return n&&C(n.textContent)===C(e??``)})??r[t]??r[0];i.scrollIntoView({behavior:`smooth`,block:`center`}),i.classList.add(`is-target`),setTimeout(()=>i.classList.remove(`is-target`),1400)};return(t,g)=>(H(),U(`article`,{id:`challenge-${e.challenge.id}`,ref_key:`cardEl`,ref:S,class:D([`challenge`,[e.challenge.status,{collapsed:!p.value}]])},[G(`header`,{class:`challenge-head`,role:`button`,tabindex:`0`,"aria-expanded":p.value,title:p.value?`이 챌린지 접기`:`이 챌린지 펼치기`,onClick:g[0]||=e=>p.value=!p.value,onKeydown:[g[1]||=Bo(Ro(e=>p.value=!p.value,[`prevent`]),[`enter`]),g[2]||=Bo(Ro(e=>p.value=!p.value,[`prevent`]),[`space`])]},[G(`span`,hv,O(p.value?`▾`:`▸`),1),G(`div`,gv,[G(`p`,_v,[q(O(e.challenge.label)+` `,1),G(`span`,vv,`교안 `+O(e.challenge.slidePage),1)]),G(`h3`,null,O(e.challenge.title),1),p.value?(H(),U(`p`,yv,O(e.challenge.goal),1)):m.value?(H(),U(`p`,bv,O(m.value),1)):J(``,!0)]),G(`div`,xv,[G(`span`,{class:D([`badge`,e.challenge.status])},O(e.challenge.status===`done`?`학습 완료`:`진행 예정`),3),i.value?(H(),U(`span`,Sv,` 실습 `+O(n.value.length)+`개 `,1)):J(``,!0)])],40,mv),p.value?(H(),U(V,{key:0},[e.challenge.lecture?(H(),W(Nd,{key:0,lecture:e.challenge.lecture,"study-range":e.challenge.studyRange},null,8,[`lecture`,`study-range`])):J(``,!0),e.challenge.tasks?.length?(H(),U(`section`,Cv,[g[6]||=G(`p`,{class:`section-label`},`✎ 연습 항목`,-1),G(`ul`,null,[(H(!0),U(V,null,B(e.challenge.tasks,e=>(H(),U(`li`,{key:e},O(e),1))),128))])])):J(``,!0),e.challenge.pitfalls?.length?(H(),U(`details`,wv,[G(`summary`,null,[g[7]||=G(`span`,{"aria-hidden":`true`},`⚠`,-1),g[8]||=q(` 조심할 점 `,-1),G(`b`,null,O(e.challenge.pitfalls.length),1)]),G(`div`,Tv,[(H(!0),U(V,null,B(e.challenge.pitfalls,(e,t)=>(H(),U(`div`,{key:t,class:`pitfall`},[e.bad||e.good?(H(),U(`div`,Ev,[e.bad?(H(),U(`p`,Dv,[g[9]||=G(`span`,null,`❌`,-1),G(`code`,null,O(e.bad),1)])):J(``,!0),e.good?(H(),U(`p`,Ov,[g[10]||=G(`span`,null,`✅`,-1),G(`code`,null,O(e.good),1)])):J(``,!0)])):J(``,!0),G(`p`,kv,O(e.why),1)]))),128))])])):J(``,!0),!i.value&&e.challenge.practiceNote?(H(),U(`p`,Av,[g[11]||=G(`span`,{"aria-hidden":`true`},`✓`,-1),q(` `+O(e.challenge.practiceNote),1)])):(H(),U(`section`,{key:4,class:D([`practice-zone`,{closed:!f.value}])},[G(`header`,jv,[G(`button`,{type:`button`,class:`practice-toggle`,"aria-expanded":f.value,title:f.value?`실습 화면 접기`:`실습 화면 펼치기`,onClick:g[3]||=e=>f.value=!f.value},[G(`span`,Nv,O(f.value?`▾`:`▸`),1),g[12]||=G(`span`,{class:`practice-mark`,"aria-hidden":`true`},`🖥`,-1),g[13]||=G(`span`,{class:`practice-title`},`실습 화면`,-1),i.value?(H(),U(`span`,Pv,O(n.value.length),1)):J(``,!0)],8,Mv),G(`span`,Fv,O(f.value?`직접 눌러보며 동작을 확인하세요`:`접어 둠 · 제목을 눌러 펼치기`),1),n.value.length>1&&f.value?(H(),U(`button`,{key:0,type:`button`,class:`reset-button reset-all`,"aria-label":`실습 전체 초기화`,title:`이 챌린지의 실습을 모두 처음 상태로 되돌립니다`,onClick:y},[...g[14]||=[G(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[G(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),G(`path`,{d:`M20 4v4.5h-4.5`})],-1)]])):J(``,!0)]),R(G(`div`,{class:D([`practice-body`,{"has-guide":u.value,"side-closed":u.value&&!d.value}])},[G(`div`,Iv,[i.value?(H(),U(`div`,Lv,[(H(!0),U(V,null,B(n.value,e=>(H(),U(`div`,{key:e.name,class:`practice-slot`},[G(`div`,Rv,[G(`button`,{type:`button`,class:`icon-button`,"aria-label":`소스 코드 보기`,title:`소스 코드를 새 창으로 엽니다`,onClick:t=>x(e.name)},[...g[15]||=[G(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[G(`path`,{d:`M9 7 4 12l5 5M15 7l5 5-5 5`})],-1)]],8,zv),G(`button`,{type:`button`,class:`icon-button`,"aria-label":`이 실습 초기화`,title:`이 실습만 처음 상태로 되돌립니다 (페이지 새로고침 없음)`,onClick:t=>v(e.name)},[...g[16]||=[G(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[G(`path`,{d:`M20 12a8 8 0 1 1-2.6-5.9`}),G(`path`,{d:`M20 4v4.5h-4.5`})],-1)]],8,Bv)]),(H(),W(Er(e.component),{key:_(e.name)}))]))),128))])):(H(),U(`p`,Vv,[...g[17]||=[q(` 아직 이 챌린지에 연결된 실습 화면이 없습니다. `,-1),G(`code`,null,`src/components/practices/`,-1),q(` 에 컴포넌트를 추가하고 `,-1),G(`code`,null,`curriculum.js`,-1),q(` 의 `,-1),G(`code`,null,`practices`,-1),q(` 에 이름을 넣으면 여기에 나타납니다. `,-1)]])),r.value.length?(H(),U(`p`,Hv,` ⚠ 파일을 찾지 못한 실습: `+O(r.value.join(`, `)),1)):J(``,!0)]),u.value?(H(),U(`aside`,{key:0,class:D([`guide-side`,{collapsed:!d.value}])},[G(`button`,{type:`button`,class:`side-toggle`,"aria-expanded":d.value,title:d.value?`접어서 실습 화면 넓히기`:`실습 도우미 펼치기`,onClick:g[4]||=e=>d.value=!d.value},[g[18]||=G(`span`,{class:`side-toggle-label`},[G(`span`,{"aria-hidden":`true`},`✓`),q(` 실습 도우미 `)],-1),G(`span`,Wv,O(d.value?`›`:`‹`),1)],8,Uv),R(G(`div`,Gv,[a.value.length?(H(),U(`section`,Kv,[G(`p`,qv,[g[19]||=q(` 확인 가이드 `,-1),G(`b`,null,O(a.value.length),1)]),(H(!0),U(V,null,B(o.value,(e,t)=>(H(),U(`div`,{key:t,class:`guide-group`},[e.label?(H(),U(`button`,{key:0,type:`button`,class:`guide-chip`,title:`이 실습으로 이동합니다`,onClick:n=>ee(e.label,t)},[q(O(e.label)+` `,1),g[20]||=G(`span`,{class:`jump`,"aria-hidden":`true`},`↓`,-1)],8,Jv)):J(``,!0),G(`ol`,Yv,[(H(!0),U(V,null,B(e.steps,(e,t)=>(H(),U(`li`,{key:t},[G(`p`,{class:`guide-do`,innerHTML:F(pd)(e.do)},null,8,Xv),G(`p`,Zv,[g[21]||=G(`b`,null,`확인`,-1),g[22]||=q(),G(`span`,{innerHTML:F(pd)(e.see)},null,8,Qv)]),e.why?(H(),U(`p`,$v,[g[23]||=G(`b`,null,`왜`,-1),g[24]||=q(),G(`span`,{innerHTML:F(pd)(e.why)},null,8,ey)])):J(``,!0)]))),128))]),e.extras.length?(H(),U(`div`,ty,[g[25]||=G(`p`,{class:`extras-label`},[G(`span`,{"aria-hidden":`true`},`🚀`),q(` 더 해보기`)],-1),G(`ul`,null,[(H(!0),U(V,null,B(e.extras,(e,t)=>(H(),U(`li`,{key:t},O(c(e)),1))),128))])])):J(``,!0)]))),128))])):J(``,!0),s.value.length?(H(),U(`details`,ny,[G(`summary`,null,[g[26]||=G(`span`,{"aria-hidden":`true`},`🚀`,-1),g[27]||=q(` 더 해보기 (전체) `,-1),G(`b`,null,O(s.value.length),1)]),G(`div`,ry,[G(`ul`,null,[(H(!0),U(V,null,B(s.value,(e,t)=>(H(),U(`li`,{key:t},O(c(e)),1))),128))])])])):J(``,!0)],512),[[Ja,d.value]])],2)):J(``,!0)],2),[[Ja,f.value]])],2)),h.value?(H(),U(`details`,iy,[G(`summary`,null,[g[28]||=G(`span`,{"aria-hidden":`true`},`🚀`,-1),g[29]||=q(` 더 해보기 (심화 응용) `,-1),G(`b`,null,O(l.value.length),1)]),G(`div`,ay,[G(`ul`,null,[(H(!0),U(V,null,B(l.value,(e,t)=>(H(),U(`li`,{key:t},O(c(e)),1))),128))])])])):J(``,!0)],64)):J(``,!0),b.value?(H(),W(Bd,{key:1,path:F(uv)(b.value),code:F(fv)(b.value),onClose:g[5]||=e=>b.value=null},null,8,[`path`,`code`])):J(``,!0)],10,pv))}},[[`__scopeId`,`data-v-6e637b45`]]),sy=[`aria-expanded`],cy={class:`chevron`,"aria-hidden":`true`},ly={class:`orientation-body`},uy={class:`rule`},dy={class:`lead`},fy={class:`cargo`},py={class:`name`},my={class:`payload`},hy={"aria-hidden":`true`},gy=[`innerHTML`],_y={class:`priority`},vy={class:`p-name`},yy={class:`p-weight`},by={class:`p-when`},xy={class:`keep`},Sy=[`innerHTML`],Cy=Q({__name:`ChapterOrientation`,props:{orientation:{type:Object,required:!0}},setup(e){let t=P(!0);return(n,r)=>(H(),U(`section`,{class:D([`orientation`,{closed:!t.value}])},[G(`button`,{class:`orientation-toggle`,type:`button`,"aria-expanded":t.value,onClick:r[0]||=e=>t.value=!t.value},[r[1]||=G(`span`,{class:`marker`,"aria-hidden":`true`},`🧭`,-1),r[2]||=G(`span`,{class:`toggle-title`},`시작하기 전에 — 규칙은 하나뿐입니다`,-1),G(`span`,cy,O(t.value?`−`:`+`),1)],8,sy),R(G(`div`,ly,[G(`p`,uy,O(e.orientation.rule),1),G(`p`,dy,O(e.orientation.lead),1),G(`ul`,fy,[(H(!0),U(V,null,B(e.orientation.cargo,e=>(H(),U(`li`,{key:e.name},[G(`code`,py,O(e.name),1),G(`span`,my,O(e.payload),1),G(`span`,{class:D([`dir`,e.dir===`위로`?`up`:`down`])},[G(`span`,hy,O(e.dir===`위로`?`↑`:`↓`),1),q(` `+O(e.dir),1)],2)]))),128))]),G(`p`,{class:`why`,innerHTML:F(pd)(e.orientation.why)},null,8,gy),r[4]||=G(`p`,{class:`priority-label`},`실제로 쓰는 비중`,-1),G(`ul`,_y,[(H(!0),U(V,null,B(e.orientation.priority,e=>(H(),U(`li`,{key:e.name,class:D(e.level)},[G(`span`,vy,O(e.name),1),G(`span`,yy,O(e.weight),1),G(`span`,by,O(e.when),1)],2))),128))]),G(`p`,xy,[r[3]||=G(`span`,{class:`keep-label`},`이것만은`,-1),G(`span`,{innerHTML:F(pd)(e.orientation.keep)},null,8,Sy)])],512),[[Ja,t.value]])],2))}},[[`__scopeId`,`data-v-bfb97b66`]]),wy={class:`chapter-nav`},Ty={class:`nav-head`},Ey={key:0,class:`nav-title`},Dy=[`title`,`aria-label`],Oy=[`title`,`onClick`],ky={class:`chapter-no`},Ay={key:0,class:`chapter-info`},jy={key:1,class:`chapter-meta`},My=[`title`],Ny={key:0,class:`nav-legend`},Py={key:0},Fy={id:`learning-content`,class:`learning-content`},Iy={class:`chapter-head`},Ly={class:`eyebrow`},Ry={class:`chapter-summary`},zy={class:`topic-chips`},By={key:1,class:`challenge-stack`},Vy={key:2,class:`empty-state`},Hy={key:3,class:`linked-assignments`},Uy={class:`step`},Wy=Q({__name:`LearningView`,setup(e){let t=P(2),n=P(!1),r=X(()=>qo.find(e=>e.id===t.value)),i=X(()=>$o(t.value)),a=X(()=>es(t.value)),o=X(()=>qo.map(e=>{let t=$o(e.id),n=t.filter(e=>e.label.startsWith(`Code Challenge`));return{...e,total:n.length,live:t.filter(e=>e.practices.length>0).length,assignments:es(e.id).length}})),s=()=>{window.scrollTo({top:0,behavior:`smooth`})},c=e=>{t.value=e,document.getElementById(`learning-content`)?.scrollIntoView({behavior:`smooth`,block:`start`})};return(e,l)=>(H(),U(V,null,[l[6]||=G(`section`,{class:`page-intro`},[G(`p`,{class:`eyebrow`},`LEARNING & CODE CHALLENGES`),G(`h1`,null,`학습 & 코드 챌린지`),G(`p`,null,[q(` 왼쪽에서 챕터를 고르면 해당 챕터의 `),G(`strong`,null,`코드 챌린지`),q(`가 열립니다. 각 챌린지는 `),G(`strong`,null,`관련 강의 내용 → 연습 항목 → 실습 화면`),q(` 순서로 이어집니다. `)])],-1),G(`section`,{class:D([`learning-layout`,{"nav-collapsed":n.value}])},[G(`aside`,wy,[G(`div`,Ty,[n.value?J(``,!0):(H(),U(`p`,Ey,`학습 로드맵`)),G(`button`,{type:`button`,class:`nav-toggle`,title:n.value?`메뉴 펼치기`:`메뉴 접기`,"aria-label":n.value?`메뉴 펼치기`:`메뉴 접기`,onClick:l[0]||=e=>n.value=!n.value},O(n.value?`»`:`«`),9,Dy)]),(H(!0),U(V,null,B(o.value,e=>(H(),U(`button`,{key:e.id,type:`button`,class:D([`chapter-item`,{active:e.id===t.value}]),title:n.value?`${e.title} · ${e.slides}`:``,onClick:t=>c(e.id)},[G(`span`,ky,O(String(e.id).padStart(2,`0`)),1),n.value?J(``,!0):(H(),U(`span`,Ay,[G(`b`,null,O(e.title),1),G(`small`,null,O(e.slides),1)])),n.value?J(``,!0):(H(),U(`span`,jy,[G(`i`,{class:D([`dot`,{live:e.live,none:!e.total}]),title:e.total?`코드 챌린지 ${e.total}개${e.live?` · 실습 화면 ${e.live}개`:``}`:`코드 챌린지 없음`},O(e.total||`–`),11,My)]))],10,Oy))),128)),n.value?J(``,!0):(H(),U(`p`,Ny,[...l[1]||=[q(` 숫자 = 코드 챌린지 수 \xA0·\xA0 `,-1),G(`i`,{class:`dot live`},`n`,-1),q(` 실습 화면 있음 `,-1)]])),G(`button`,{type:`button`,class:`to-top`,title:`맨 위로`,"aria-label":`맨 위로 가기`,onClick:s},[l[2]||=G(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`},[G(`path`,{d:`m6 15 6-6 6 6`})],-1),n.value?J(``,!0):(H(),U(`span`,Py,`맨 위로`))])]),G(`div`,Fy,[G(`header`,Iy,[G(`div`,null,[G(`p`,Ly,O(r.value.code)+` · 교안 `+O(r.value.slides),1),G(`h2`,null,O(r.value.title),1),G(`p`,Ry,O(r.value.summary),1),G(`div`,zy,[(H(!0),U(V,null,B(r.value.topics,e=>(H(),U(`span`,{key:e},O(e),1))),128))])])]),r.value.orientation?(H(),W(Cy,{key:0,orientation:r.value.orientation},null,8,[`orientation`])):J(``,!0),i.value.length?(H(),U(`div`,By,[(H(!0),U(V,null,B(i.value,e=>(H(),W(oy,{key:e.id,challenge:e},null,8,[`challenge`]))),128))])):(H(),U(`p`,Vy,[...l[3]||=[q(` 교안 기준으로 이 챕터에는 코드 챌린지가 없습니다. 아래 `,-1),G(`b`,null,`제출 과제`,-1),q(`로 바로 진행합니다. `,-1)]])),a.value.length?(H(),U(`section`,Hy,[l[5]||=G(`p`,{class:`section-label`},`이 챕터의 제출 과제`,-1),(H(!0),U(V,null,B(a.value,e=>(H(),U(`a`,{key:e.id,class:`assignment-link`,href:`#/assignments`},[G(`span`,Uy,O(String(e.id).padStart(2,`0`)),1),G(`span`,null,[G(`b`,null,O(e.title),1),G(`small`,null,O(e.goal),1)]),l[4]||=G(`span`,{class:`arrow`},`→`,-1)]))),128))])):J(``,!0)])],2)],64))}},[[`__scopeId`,`data-v-349ca045`]]),Gy={class:`anatomy`},Ky={class:`intro`},qy={class:`node owner`},Jy={class:`node-head`},Yy={class:`node-name`},Xy={class:`node-role`},Zy=[`onClick`],Qy={key:0,class:`state`},$y={class:`node-note`},eb={class:`children`},tb={key:0,class:`under`},nb={class:`node-head`},rb={class:`node-name`},ib={class:`node-role`},ab=[`onClick`],ob={class:`wires`},sb={class:`wire down`},cb={key:0,class:`none`},lb={key:1},ub={class:`as`},db={class:`wire-desc`},fb={class:`wire up`},pb={key:0,class:`none`},mb={key:1},hb={class:`as`},gb={class:`wire-desc`},_b={class:`node-note`},vb={class:`flows`},yb={class:`flow-title`},bb={class:`steps`},xb={class:`arrow`,"aria-hidden":`true`},Sb={class:`who`},Cb={class:`what`},wb={class:`step-desc`},Tb=[`innerHTML`],Eb=Q({__name:`ResultAnatomy`,props:{anatomy:{type:Object,required:!0}},setup(e){let t=e=>e.includes(`.`)?e:`${e}.vue`,n=P(``),r=e=>n.value=e,i=()=>n.value=``;return(a,o)=>(H(),U(`div`,Gy,[G(`p`,Ky,O(e.anatomy.intro),1),o[4]||=G(`p`,{class:`section`},`컴포넌트 구조`,-1),(H(!0),U(V,null,B(e.anatomy.tree,e=>(H(),U(`div`,{key:e.name,class:`tree`},[G(`div`,qy,[G(`div`,Jy,[G(`code`,Yy,O(t(e.name)),1),G(`span`,Xy,O(e.role),1),G(`button`,{type:`button`,class:`code-link`,onClick:t=>r(e.file)},`코드 보기`,8,Zy)]),e.state?.length?(H(),U(`p`,Qy,[o[0]||=G(`span`,{class:`state-label`},`가진 데이터`,-1),(H(!0),U(V,null,B(e.state,e=>(H(),U(`code`,{key:e},O(e),1))),128))])):J(``,!0),G(`p`,$y,O(e.note),1),G(`ul`,eb,[(H(!0),U(V,null,B(e.children,e=>(H(),U(`li`,{key:e.name,class:D([`node child`,{nested:e.under}])},[e.under?(H(),U(`p`,tb,[o[1]||=G(`span`,{"aria-hidden":`true`},`↳`,-1),q(` `+O(e.under)+` 안에서 쓰입니다 `,1)])):J(``,!0),G(`div`,nb,[G(`code`,rb,O(t(e.name)),1),G(`span`,ib,O(e.role),1),G(`button`,{type:`button`,class:`code-link`,onClick:t=>r(e.file)},` 코드 보기 `,8,ab)]),G(`div`,ob,[G(`div`,sb,[o[2]||=G(`p`,{class:`wire-head`},[G(`span`,{"aria-hidden":`true`},`↓`),q(` 받는다 (props)`)],-1),e.props.length?(H(),U(`ul`,lb,[(H(!0),U(V,null,B(e.props,e=>(H(),U(`li`,{key:e.name},[G(`code`,null,`:`+O(e.name),1),G(`span`,ub,`→ `+O(e.as)+` (`+O(e.type)+`)`,1),G(`span`,db,O(e.desc),1)]))),128))])):(H(),U(`p`,cb,`없음`))]),G(`div`,fb,[o[3]||=G(`p`,{class:`wire-head`},[G(`span`,{"aria-hidden":`true`},`↑`),q(` 올린다 (emits)`)],-1),e.emits.length?(H(),U(`ul`,mb,[(H(!0),U(V,null,B(e.emits,e=>(H(),U(`li`,{key:e.name},[G(`code`,null,`@`+O(e.name),1),G(`span`,hb,O(e.payload),1),G(`span`,gb,O(e.desc),1)]))),128))])):(H(),U(`p`,pb,`없음`))])]),G(`p`,_b,O(e.note),1)],2))),128))])])]))),128)),o[5]||=G(`p`,{class:`section`},`이벤트가 오가는 길`,-1),G(`div`,vb,[(H(!0),U(V,null,B(e.anatomy.flows,e=>(H(),U(`div`,{key:e.title,class:`flow`},[G(`p`,yb,O(e.title),1),G(`ol`,bb,[(H(!0),U(V,null,B(e.steps,(e,t)=>(H(),U(`li`,{key:t,class:D(e.dir)},[G(`span`,xb,O(e.dir===`up`?`↑`:e.dir===`down`?`↓`:`●`),1),G(`span`,Sb,O(e.who),1),G(`code`,Cb,O(e.label),1),G(`span`,wb,O(e.desc),1)],2))),128))])]))),128))]),G(`p`,{class:`point`,innerHTML:F(pd)(e.anatomy.point)},null,8,Tb),n.value?(H(),W(Bd,{key:0,path:F(Fu)(n.value),code:F(Pu)(n.value),onClose:i},null,8,[`path`,`code`])):J(``,!0)]))}},[[`__scopeId`,`data-v-6080f9f4`]]),Db={class:`check-layout`},Ob={class:`checklist-card`},kb={class:`checklist-head`},Ab={class:`track`},jb=[`onUpdate:modelValue`],Mb={class:`side`},Nb={class:`side-card`},Pb={class:`side-card`},Fb={class:`grade-head`},Ib=Q({__name:`SubmissionChecklist`,setup(e){let t=P(Qo.map(e=>({...e,done:!1}))),n=X(()=>t.value.filter(e=>e.done).length),r=X(()=>Math.round(n.value/t.value.length*100));return(e,i)=>(H(),U(`div`,Db,[G(`section`,Ob,[G(`div`,kb,[i[0]||=G(`div`,null,[G(`h2`,null,`최종 제출 체크리스트`),G(`p`,null,`완료한 항목을 체크하면 진행률에 반영됩니다.`)],-1),G(`strong`,null,O(n.value)+` / `+O(t.value.length),1)]),G(`div`,Ab,[G(`i`,{style:E({width:`${r.value}%`})},null,4)]),(H(!0),U(V,null,B(t.value,e=>(H(),U(`label`,{key:e.title,class:D([`check-item`,{done:e.done}])},[R(G(`input`,{"onUpdate:modelValue":t=>e.done=t,type:`checkbox`},null,8,jb),[[ko,e.done]]),G(`span`,null,[G(`b`,null,O(e.title),1),G(`small`,null,O(e.detail),1)])],2))),128))]),G(`aside`,Mb,[G(`section`,Nb,[i[1]||=G(`p`,{class:`side-label`},`제출 조건 · 교안 5쪽`,-1),G(`ul`,null,[(H(!0),U(V,null,B(F(Xo),e=>(H(),U(`li`,{key:e},O(e),1))),128))])]),G(`section`,Pb,[i[2]||=G(`p`,{class:`side-label`},`평가 기준 · 교안 6쪽`,-1),(H(!0),U(V,null,B(F(Zo),e=>(H(),U(`div`,{key:e.grade,class:`grade-row`},[G(`div`,Fb,[G(`b`,null,O(e.grade),1),G(`span`,null,O(e.score),1)]),G(`p`,null,O(e.criteria),1)]))),128))])])]))}},[[`__scopeId`,`data-v-8f40fe26`]]),Lb={class:`hero`},Rb={class:`hero-meter`,"aria-hidden":`true`},zb={class:`meter-count`},Bb={class:`meter-total`},Vb={class:`meter-track`},Hb={class:`stage-tabs`,role:`tablist`},Ub=[`aria-selected`,`onClick`],Wb={class:`tab-no`},Gb={class:`tab-title`},Kb={class:`stage-head`},qb={class:`eyebrow`},Jb={class:`stage-goal`},Yb={class:`stage-frame`},Xb={class:`frame-bar`},Zb={class:`frame-title`},Qb={class:`stage-body`},$b={key:0,class:`stage-note`},ex={key:1,class:`anatomy-fold`},tx={class:`anatomy-body`},nx={key:1,class:`empty-state`},rx={key:2,class:`roadmap`},ix={class:`roadmap-grid`},ax={class:`number`},ox={class:`submission`},sx={class:`submission-body`},cx=Q({__name:`ProjectView`,setup(e){let t=X(()=>Yo.filter(e=>ku(e.result)).map(e=>({...e,component:ku(e.result)}))),n=X(()=>Yo.filter(e=>!ku(e.result)&&e.status!==`done`)),r=P(null),i=X(()=>{let e=t.value;return e.length?e.find(e=>e.id===r.value)??e[e.length-1]:null});return(e,a)=>(H(),U(V,null,[G(`section`,Lb,[a[1]||=G(`div`,{class:`hero-text`},[G(`p`,{class:`eyebrow`},`FINAL PROJECT`),G(`h1`,null,[q(`Weather`),G(`br`),G(`span`,null,`Dashboard`)]),G(`p`,{class:`hero-copy`},[q(` 제출 과제가 한 겹씩 쌓여 완성되는 결과물입니다. 아래에서 단계를 골라 `),G(`strong`,null,`지금까지 만든 앱을 그대로 실행`),q(`해 볼 수 있습니다. `)])],-1),G(`div`,Rb,[G(`span`,zb,O(t.value.length),1),G(`span`,Bb,`/ `+O(F(Yo).length)+` 단계`,1),G(`span`,Vb,[G(`i`,{style:E({width:`${t.value.length/F(Yo).length*100}%`})},null,4)]),a[0]||=G(`span`,{class:`meter-label`},`완성한 단계`,-1)])]),i.value?(H(),U(V,{key:0},[G(`div`,Hb,[(H(!0),U(V,null,B(t.value,e=>(H(),U(`button`,{key:e.id,type:`button`,role:`tab`,class:D([`stage-tab`,{active:e.id===i.value.id}]),"aria-selected":e.id===i.value.id,onClick:t=>r.value=e.id},[G(`span`,Wb,O(String(e.id).padStart(2,`0`)),1),G(`span`,Gb,O(e.title),1)],10,Ub))),128))]),G(`div`,Kb,[G(`div`,null,[G(`p`,qb,`ASSIGNMENT `+O(String(i.value.id).padStart(2,`0`)),1),G(`h2`,null,O(i.value.title),1),G(`p`,Jb,O(i.value.goal),1)]),a[2]||=G(`a`,{class:`to-assignment`,href:`#/assignments`},`요구사항 보기 →`,-1)]),G(`div`,Yb,[G(`div`,Xb,[a[3]||=G(`span`,{class:`dots`,"aria-hidden":`true`},[G(`i`),G(`i`),G(`i`)],-1),G(`span`,Zb,`실행 중 · `+O(i.value.title),1)]),G(`div`,Qb,[(H(),W(Er(i.value.component),{key:i.value.id}))])]),i.value.resultNote?(H(),U(`p`,$b,O(i.value.resultNote),1)):J(``,!0),i.value.anatomy?(H(),U(`details`,ex,[a[4]||=G(`summary`,null,[G(`span`,{class:`fold-mark`,"aria-hidden":`true`},`▶`),G(`span`,{class:`fold-title`},`컴포넌트 구조와 이벤트 흐름`),G(`span`,{class:`fold-hint`},`파일이 어떻게 연결되고 이벤트가 어디로 오가는지`)],-1),G(`div`,tx,[K(Eb,{anatomy:i.value.anatomy},null,8,[`anatomy`])])])):J(``,!0)],64)):(H(),U(`p`,nx,[...a[5]||=[q(` 아직 실행할 수 있는 결과물이 없습니다. 과제를 완성한 뒤 `,-1),G(`code`,null,`src/components/assignments/`,-1),q(` 에 컴포넌트를 넣고 `,-1),G(`code`,null,`curriculum.js`,-1),q(` 의 `,-1),G(`code`,null,`result`,-1),q(` 에 이름을 적어 주세요. `,-1)]])),n.value.length?(H(),U(`section`,rx,[a[6]||=G(`p`,{class:`section-label`},`앞으로 이어 붙일 단계`,-1),G(`div`,ix,[(H(!0),U(V,null,B(n.value,e=>(H(),U(`article`,{key:e.id},[G(`span`,ax,O(String(e.id).padStart(2,`0`)),1),G(`h3`,null,O(e.title),1),G(`p`,null,O(e.goal),1)]))),128))])])):J(``,!0),G(`details`,ox,[a[7]||=G(`summary`,null,[G(`span`,{class:`sum-title`},`제출 전 점검`),G(`span`,{class:`sum-hint`},`체크리스트 · 제출 조건 · 평가 기준`)],-1),G(`div`,sx,[K(Ib)])])],64))}},[[`__scopeId`,`data-v-9a4a8adc`]]),lx=[{id:`editorial`,name:`Editorial`,tagline:`기술 문서`,description:`따뜻한 종이 위에 근접 블랙으로 찍은 인쇄물. 색을 아끼고 여백으로 읽힙니다.`,swatches:[`#f6f4ef`,`#fffefb`,`#0f7a4e`,`#16191c`]},{id:`terminal`,name:`Terminal`,tagline:`다크 IDE`,description:`코드를 오래 보는 화면. 저조도 배경에 형광 민트로 눌러야 할 곳만 밝힙니다.`,swatches:[`#14181f`,`#1b212b`,`#3ddc97`,`#e8edf4`]},{id:`blueprint`,name:`Blueprint`,tagline:`설계도`,description:`모눈종이 위의 도면. 차가운 청색과 각진 모서리로 구조를 드러냅니다.`,swatches:[`#eef1f6`,`#ffffff`,`#1d4ed8`,`#12213a`]}],ux=`inwoo-vue-theme`,dx=`editorial`,fx=e=>lx.some(t=>t.id===e),px=P(dx),mx=e=>{if(fx(e)){px.value=e,document.documentElement.dataset.theme=e;try{localStorage.setItem(ux,e)}catch{}}},hx=()=>{let e=null;try{e=localStorage.getItem(ux)}catch{e=null}mx(fx(e)?e:dx)},gx={class:`block`},_x={class:`theme-grid`},vx=[`aria-pressed`,`onClick`],yx={class:`meta`},bx={class:`name-row`},xx={key:0,class:`badge`},Sx={class:`desc`},Cx=Q({__name:`SettingsView`,setup(e){return(e,t)=>(H(),U(V,null,[t[1]||=G(`section`,{class:`page-intro`},[G(`p`,{class:`eyebrow`},`SETTINGS`),G(`h1`,null,`환경 설정`),G(`p`,null,[q(` 화면 테마를 고를 수 있습니다. 고른 테마는 `),G(`strong`,null,`이 브라우저에 저장`),q(`되어 다음에 열어도 그대로 유지됩니다. `)])],-1),G(`section`,gx,[t[0]||=G(`div`,{class:`block-head`},[G(`p`,{class:`eyebrow`},`APPEARANCE`),G(`h2`,null,`테마`),G(`p`,{class:`block-desc`},`누르면 바로 적용됩니다. 실습 화면의 색은 각 실습 코드가 정한 대로 유지됩니다.`)],-1),G(`div`,_x,[(H(!0),U(V,null,B(F(lx),e=>(H(),U(`button`,{key:e.id,type:`button`,class:D([`theme-card`,{active:F(px)===e.id}]),"aria-pressed":F(px)===e.id,onClick:t=>F(mx)(e.id)},[G(`span`,{class:`preview`,style:E({background:e.swatches[0],borderColor:e.swatches[3]+`22`})},[G(`i`,{class:`bar`,style:E({background:e.swatches[1]})},[G(`em`,{style:E({background:e.swatches[2]})},null,4)],4),G(`i`,{class:`line long`,style:E({background:e.swatches[3],opacity:.85})},null,4),G(`i`,{class:`line`,style:E({background:e.swatches[3],opacity:.35})},null,4),G(`i`,{class:`line mid`,style:E({background:e.swatches[3],opacity:.35})},null,4),G(`i`,{class:`chip`,style:E({background:e.swatches[2]})},null,4)],4),G(`span`,yx,[G(`span`,bx,[G(`b`,null,O(e.name),1),G(`small`,null,O(e.tagline),1),F(px)===e.id?(H(),U(`span`,xx,`사용 중`)):J(``,!0)]),G(`span`,Sx,O(e.description),1)])],10,vx))),128))])]),t[2]||=oa(`<section class="block" data-v-cc84f2a9><div class="block-head" data-v-cc84f2a9><p class="eyebrow" data-v-cc84f2a9>ABOUT</p><h2 data-v-cc84f2a9>이 사이트</h2></div><dl class="facts" data-v-cc84f2a9><dt data-v-cc84f2a9>구성</dt><dd data-v-cc84f2a9>학습 &amp; 코드 챌린지 · 제출 과제 · 최종 결과물</dd><dt data-v-cc84f2a9>내용 출처</dt><dd data-v-cc84f2a9>Full-stack Engineering · Frontend Framework (Vue.js) 교안 276쪽</dd><dt data-v-cc84f2a9>내용 추가</dt><dd data-v-cc84f2a9><code data-v-cc84f2a9>src/data/curriculum.js</code> 한 파일만 고치면 모든 화면에 반영됩니다</dd><dt data-v-cc84f2a9>가이드</dt><dd data-v-cc84f2a9><code data-v-cc84f2a9>docs/CONTENT_GUIDE.md</code></dd></dl></section>`,1)],64))}},[[`__scopeId`,`data-v-cc84f2a9`]]),wx={class:`app-shell`},Tx={class:`app-header`},Ex={class:`main-nav`,"aria-label":`주요 메뉴`},Dx={class:`page-container`},Ox={__name:`App`,setup(e){let t=P(window.location.hash.slice(1)||`/`),n=()=>{t.value=window.location.hash.slice(1)||`/`};mr(()=>window.addEventListener(`hashchange`,n)),vr(()=>window.removeEventListener(`hashchange`,n));let r=X(()=>t.value===`/learning`?Wy:t.value===`/assignments`?$u:t.value===`/project`?cx:t.value===`/settings`?Cx:ld),i=e=>t.value===e;return(e,t)=>(H(),U(`div`,wx,[G(`header`,Tx,[t[0]||=G(`a`,{class:`brand`,href:`#/`},[G(`span`,{class:`brand-mark`},`V`),G(`span`,null,`Vue Learning Lab`)],-1),G(`nav`,Ex,[G(`a`,{href:`#/`,class:D({active:i(`/`)})},`홈`,2),G(`a`,{href:`#/learning`,class:D({active:i(`/learning`)})},` 학습 & 챌린지 `,2),G(`a`,{href:`#/assignments`,class:D({active:i(`/assignments`)})},` 제출 과제 `,2),G(`a`,{href:`#/project`,class:D({active:i(`/project`)})},` 최종 결과물 `,2),G(`a`,{href:`#/settings`,class:D({active:i(`/settings`)})},` 환경 설정 `,2)])]),G(`main`,Dx,[(H(),W(Er(r.value)))])]))}},kx={class:`global-badge`},Ax=Q({__name:`GlobalBadge`,props:{text:{type:String,default:`전역 등록됨`}},setup(e){return(t,n)=>(H(),U(`span`,kx,[n[0]||=G(`i`,{"aria-hidden":`true`},null,-1),q(` `+O(e.text),1)]))}},[[`__scopeId`,`data-v-4c3191a7`]]);hx();var jx=Wo(Ox);jx.component(`GlobalBadge`,Ax),jx.mount(`#app`);