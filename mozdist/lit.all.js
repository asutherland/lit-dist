/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * This file is vendored from https://github.com/mstriemer/lit-dist/blob/custom-export/dist/lit.all.js.
 * If changes are required, they happen in import_all.js in that repo and then `npm run build` and
 * the following change is made (which should get automated if we keep using this):
 *
 * There is an innerHTML usage which does not work with our sanitization of
 * innerHTML. When updating this file that needs to be changed to the following
 * (in static createElement currently a member of U):
 *
 * static createElement(t,e){
 *   const parser = new DOMParser();
 *   const doc = parser.parseFromString(
 *     `<template>${t}</template>`,
 *     "text/html"
 *   );
 *   let i = document.importNode(doc.querySelector("template"), true);
 *   return i;
 * }
 */

const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class s{constructor(t,s){if(s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const i=new Map,n=t=>{let n=i.get(t);return void 0===n&&i.set(t,n=new s(t,e)),n},r=t=>n("string"==typeof t?t:t+""),o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return n(i)},l=(e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s)}))},h=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;var a,d,c,u;const p={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class g extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this.Πp(s,e);void 0!==i&&(this.Πm.set(i,s),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static"Πp"(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,s){this.K(t,s)}"Πj"(t,e,s=f){var i,n;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:p.toAttribute)(e,s.type);this.Πh=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this.Πh=null}}K(t,e){var s,i,n;const r=this.constructor,o=r.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=r.getPropertyOptions(o),l=t.converter,h=null!==(n=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:p.fromAttribute;this.Πh=o,this[o]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const s=this.L;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(s)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var y,m,b,S;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null===(d=(a=globalThis).reactiveElementPlatformSupport)||void 0===d||d.call(a,{ReactiveElement:g}),(null!==(c=(u=globalThis).reactiveElementVersions)&&void 0!==c?c:u.reactiveElementVersions=[]).push("1.0.0-rc.2");const w=globalThis.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,A="?"+C,$=`<${A}>`,E=document,P=(t="")=>E.createComment(t),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,H=t=>{var e;return U(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,M=/>/g,R=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,_=/"/g,B=/^(?:script|style|textarea)$/i,L=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),z=L(1),I=L(2),j=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),D=new WeakMap,W=(t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new F(e.insertBefore(P(),t),t,void 0,s)}return o.I(t),o},q=E.createTreeWalker(E,129,null,!1),K=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=k;for(let e=0;e<s;e++){const s=t[e];let l,h,a=-1,d=0;for(;d<s.length&&(o.lastIndex=d,h=o.exec(s),null!==h);)d=o.lastIndex,o===k?"!--"===h[1]?o=N:void 0!==h[1]?o=M:void 0!==h[2]?(B.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=R):void 0!==h[3]&&(o=R):o===R?">"===h[0]?(o=null!=n?n:k,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?R:'"'===h[3]?_:O):o===_||o===O?o=R:o===N||o===M?o=k:(o=R,n=void 0);const c=o===R&&t[e+1].startsWith("/>")?" ":"";r+=o===k?s+$:a>=0?(i.push(l),s.slice(0,a)+"$lit$"+s.slice(a)+C+c):s+C+(-2===a?(i.push(void 0),e):c)}const l=r+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==x?x.createHTML(l):l,i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[h,a]=K(t,e);if(this.el=Z.createElement(h,s),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=q.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(C)){const s=a[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(C),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?G:"@"===e[1]?tt:X})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(B.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],P()),q.nextNode(),l.push({type:2,index:++n});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)l.push({type:7,index:n}),t+=C.length-1}n++}}
static createElement(t,e){
  const parser = new DOMParser();
  const doc = parser.parseFromString(
    `<template>${t}</template>`,
    "text/html"
  );
  let i = document.importNode(doc.querySelector("template"), true);
  return i;
}
}function Q(t,e,s=t,i){var n,r,o,l;if(e===j)return e;let h=void 0!==i?null===(n=s.Σi)||void 0===n?void 0:n[i]:s.Σo;const a=T(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h.O)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,s,i)),void 0!==i?(null!==(o=(l=s).Σi)&&void 0!==o?o:l.Σi=[])[i]=h:s.Σo=h),void 0!==h&&(e=Q(t,h.S(t,e.values),h,i)),e}class J{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:s},parts:i}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(s,!0);q.currentNode=n;let r=q.nextNode(),o=0,l=0,h=i[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new F(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new et(r,this,t)),this.l.push(e),h=i[++l]}o!==(null==h?void 0:h.index)&&(r=q.nextNode(),o++)}return n}v(t){let e=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,e),e+=s.strings.length-2):s.I(t[e])),e++}}class F{constructor(t,e,s,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=s,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=Q(this,t,e),T(t)?t===V||null==t||""===t?(this.H!==V&&this.R(),this.H=V):t!==this.H&&t!==j&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):H(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(E.createTextNode(t)),this.H=t}_(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=Z.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(s);else{const t=new J(n,this),e=t.u(this.options);t.v(s),this.$(e),this.H=t}}C(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new Z(t)),e}g(t){U(this.H)||(this.H=[],this.R());const e=this.H;let s,i=0;for(const n of t)i===e.length?e.push(s=new F(this.k(P()),this.k(P()),this,this.options)):s=e[i],s.I(n),i++;i<e.length&&(this.R(s&&s.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class X{constructor(t,e,s,i,n){this.type=1,this.H=V,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(V),this.strings=s):this.H=V}get tagName(){return this.element.tagName}I(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=Q(this,t,e,0),r=!T(t)||t!==this.H&&t!==j,r&&(this.H=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=Q(this,i[s+o],e,o),l===j&&(l=this.H[o]),r||(r=!T(l)||l!==this.H[o]),l===V?t=V:t!==V&&(t+=(null!=l?l:"")+n[o+1]),this.H[o]=l}r&&!i&&this.W(t)}W(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===V?void 0:t}}class G extends X{constructor(){super(...arguments),this.type=4}W(t){t&&t!==V?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class tt extends X{constructor(){super(...arguments),this.type=5}I(t,e=this){var s;if((t=null!==(s=Q(this,t,e,0))&&void 0!==s?s:V)===j)return;const i=this.H,n=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==V&&(i===V||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,s;"function"==typeof this.H?this.H.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class et{constructor(t,e,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=s}I(t){Q(this,t)}}const st={Z:"$lit$",U:C,Y:A,q:1,X:K,tt:J,it:H,st:Q,et:F,ot:X,nt:G,rt:tt,lt:Y,ht:et};var it,nt,rt,ot,lt,ht;null===(m=(y=globalThis).litHtmlPlatformSupport)||void 0===m||m.call(y,Z,F),(null!==(b=(S=globalThis).litHtmlVersions)&&void 0!==b?b:S.litHtmlVersions=[]).push("2.0.0-rc.3");const at=g;(null!==(it=(ht=globalThis).litElementVersions)&&void 0!==it?it:ht.litElementVersions=[]).push("3.0.0-rc.2");class dt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();super.update(t),this.Φt=W(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return j}}dt.finalized=!0,dt._$litElement$=!0,null===(rt=(nt=globalThis).litElementHydrateSupport)||void 0===rt||rt.call(nt,{LitElement:dt}),null===(lt=(ot=globalThis).litElementPlatformSupport)||void 0===lt||lt.call(ot,{LitElement:dt});const ct={K:(t,e,s)=>{t.K(e,s)},L:t=>t.L},ut=1,pt=2,vt=3,ft=4,gt=t=>(...e)=>({_$litDirective$:t,values:e});class yt{constructor(t){}T(t,e,s){this.Σdt=t,this.M=e,this.Σct=s}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{et:mt}=st,bt=(t,e)=>{var s,i;return void 0===e?void 0!==(null===(s=t)||void 0===s?void 0:s._$litType$):(null===(i=t)||void 0===i?void 0:i._$litType$)===e},St=t=>void 0===t.strings,wt=()=>document.createComment(""),xt=(t,e,s)=>{var i;const n=t.A.parentNode,r=void 0===e?t.B:e.A;if(void 0===s){const e=n.insertBefore(wt(),r),i=n.insertBefore(wt(),r);s=new mt(e,i,t,t.options)}else{const e=s.B.nextSibling,o=s.M!==t;if(o&&(null===(i=s.Q)||void 0===i||i.call(s,t),s.M=t),e!==r||o){let t=s.A;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return s},Ct=(t,e,s=t)=>(t.I(e,s),t),At={},$t=(t,e=At)=>t.H=e,Et=t=>t.H,Pt=t=>{var e;null===(e=t.P)||void 0===e||e.call(t,!1,!0);let s=t.A;const i=t.B.nextSibling;for(;s!==i;){const t=s.nextSibling;s.remove(),s=t}},Tt=t=>{t.R()},Ut=(t,e)=>{var s,i;const n=t.N;if(void 0===n)return!1;for(const t of n)null===(i=(s=t).O)||void 0===i||i.call(s,e,!1),Ut(t,e);return!0},Ht=t=>{let e,s;do{if(void 0===(e=t.M))break;s=e.N,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},kt=t=>{for(let e;e=t.M;t=e){let s=e.N;if(void 0===s)e.N=s=new Set;else if(s.has(t))break;s.add(t),Rt(e)}};function Nt(t){void 0!==this.N?(Ht(this),this.M=t,kt(this)):this.M=t}function Mt(t,e=!1,s=0){const i=this.H,n=this.N;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)Ut(i[t],!1),Ht(i[t]);else null!=i&&(Ut(i,!1),Ht(i));else Ut(this,t)}const Rt=t=>{var e,s,i,n;t.type==pt&&(null!==(e=(i=t).P)&&void 0!==e||(i.P=Mt),null!==(s=(n=t).Q)&&void 0!==s||(n.Q=Nt))};class Ot extends yt{constructor(){super(...arguments),this.isConnected=!0,this.ut=j,this.N=void 0}T(t,e,s){super.T(t,e,s),kt(this)}O(t,e=!0){this.at(t),e&&(Ut(this,t),Ht(this))}at(t){var e,s;t!==this.isConnected&&(t?(this.isConnected=!0,this.ut!==j&&(this.setValue(this.ut),this.ut=j),null===(e=this.reconnected)||void 0===e||e.call(this)):(this.isConnected=!1,null===(s=this.disconnected)||void 0===s||s.call(this)))}S(t,e){if(!this.isConnected)throw Error(`AsyncDirective ${this.constructor.name} was rendered while its tree was disconnected.`);return super.S(t,e)}setValue(t){if(this.isConnected)if(St(this.Σdt))this.Σdt.I(t,this);else{const e=[...this.Σdt.H];e[this.Σct]=t,this.Σdt.I(e,this,0)}else this.ut=t}disconnected(){}reconnected(){}}const _t=gt(class extends Ot{constructor(t){if(super(t),t.type!==pt)throw Error("asyncAppend can only be used in child expressions")}render(t,e){return j}update(t,[e,s]){if(e!==this.vt)return this.vt=e,this.Σft(t,s),j}async"Σft"(t,e){let s=0;const{vt:i}=this;for await(let n of i){if(this.vt!==i)break;this.wt&&await this.wt,0===s&&Tt(t),void 0!==e&&(n=e(n,s));const r=xt(t);Ct(r,n),s++}}disconnected(){this.wt=new Promise((t=>this.yt=t))}reconnected(){this.wt=void 0,this.yt()}}),Bt=gt(class extends Ot{render(t,e){return j}update(t,[e,s]){if(e!==this.vt)return this.vt=e,this.Σft(s),j}async"Σft"(t){let e=0;const{vt:s}=this;for await(let i of s){if(this.vt!==s)break;this.wt&&await this.wt,void 0!==t&&(i=t(i,e)),this.setValue(i),e++}}disconnected(){this.wt=new Promise((t=>this.yt=t))}reconnected(){this.wt=void 0,this.yt()}}),Lt=gt(class extends yt{constructor(t){super(t),this._t=new WeakMap}render(t){return[t]}update(t,[e]){if(bt(this.vt)&&(!bt(e)||this.vt.strings!==e.strings)){const e=Et(t).pop();let s=this._t.get(this.vt.strings);if(void 0===s){const t=document.createDocumentFragment();s=W(V,t),this._t.set(this.vt.strings,s)}$t(s,[e]),xt(s,void 0,e),e.setConnected(!1)}if(bt(e)){if(!bt(this.vt)||this.vt.strings!==e.strings){const s=this._t.get(e.strings);if(void 0!==s){const e=Et(s).pop();Tt(t),xt(t,void 0,e),$t(t,[e]),e.setConnected(!0)}}this.vt=e}else this.vt=void 0;return this.render(e)}}),zt=gt(class extends yt{constructor(t){var e;if(super(t),t.type!==ut||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((e=>t[e])).join(" ")}update(t,[e]){if(void 0===this.bt){this.bt=new Set;for(const t in e)e[t]&&this.bt.add(t);return this.render(e)}const s=t.element.classList;this.bt.forEach((t=>{t in e||(s.remove(t),this.bt.delete(t))}));for(const t in e){const i=!!e[t];i!==this.bt.has(t)&&(i?(s.add(t),this.bt.add(t)):(s.remove(t),this.bt.delete(t)))}return j}}),It={},jt=gt(class extends yt{constructor(){super(...arguments),this.$t=It}render(t,e){return e()}update(t,[e,s]){if(Array.isArray(e)){if(Array.isArray(this.$t)&&this.$t.length===e.length&&e.every(((t,e)=>t===this.$t[e])))return j}else if(this.$t===e)return j;return this.$t=Array.isArray(e)?Array.from(e):e,this.render(e,s)}}),Vt=t=>null!=t?t:V,Dt=gt(class extends yt{constructor(t){if(super(t),t.type!==vt&&t.type!==ut&&t.type!==ft)throw Error("The `live` directive is not allowed on child or event bindings");if(!St(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===j||e===V)return e;const s=t.element,i=t.name;if(t.type===vt){if(e===s[i])return j}else if(t.type===ft){if(!!e===s.hasAttribute(i))return j}else if(t.type===ut&&s.getAttribute(i)===e+"")return j;return $t(t),e}}),Wt=new WeakMap,qt=gt(class extends Ot{render(t){return V}update(t,[e]){var s;const i=e!==this.gt;return i&&void 0!==this.gt&&this.xt(void 0),(i||this.Tt!==this.Et)&&(this.gt=e,this.At=null===(s=t.options)||void 0===s?void 0:s.host,this.xt(this.Et=t.element)),V}xt(t){"function"==typeof this.gt?(void 0!==Wt.get(this.gt)&&this.gt.call(this.At,void 0),Wt.set(this.gt,t),void 0!==t&&this.gt.call(this.At,t)):this.gt.value=t}get Tt(){var t;return"function"==typeof this.gt?Wt.get(this.gt):null===(t=this.gt)||void 0===t?void 0:t.value}disconnected(){this.Tt===this.Et&&this.xt(void 0)}reconnected(){this.xt(this.Et)}}),Kt=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},Zt=gt(class extends yt{constructor(t){if(super(t),t.type!==pt)throw Error("repeat() can only be used in text expressions")}Mt(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const n=[],r=[];let o=0;for(const e of t)n[o]=i?i(e,o):o,r[o]=s(e,o),o++;return{values:r,keys:n}}render(t,e,s){return this.Mt(t,e,s).values}update(t,[e,s,i]){var n;const r=Et(t),{values:o,keys:l}=this.Mt(e,s,i);if(!r)return this.Pt=l,o;const h=null!==(n=this.Pt)&&void 0!==n?n:this.Pt=[],a=[];let d,c,u=0,p=r.length-1,v=0,f=o.length-1;for(;u<=p&&v<=f;)if(null===r[u])u++;else if(null===r[p])p--;else if(h[u]===l[v])a[v]=Ct(r[u],o[v]),u++,v++;else if(h[p]===l[f])a[f]=Ct(r[p],o[f]),p--,f--;else if(h[u]===l[f])a[f]=Ct(r[u],o[f]),xt(t,a[f+1],r[u]),u++,f--;else if(h[p]===l[v])a[v]=Ct(r[p],o[v]),xt(t,r[u],r[p]),p--,v++;else if(void 0===d&&(d=Kt(l,v,f),c=Kt(h,u,p)),d.has(h[u]))if(d.has(h[p])){const e=c.get(l[v]),s=void 0!==e?r[e]:null;if(null===s){const e=xt(t,r[u]);Ct(e,o[v]),a[v]=e}else a[v]=Ct(s,o[v]),xt(t,r[u],s),r[e]=null;v++}else Pt(r[p]),p--;else Pt(r[u]),u++;for(;v<=f;){const e=xt(t,a[f+1]);Ct(e,o[v]),a[v++]=e}for(;u<=p;){const t=r[u++];null!==t&&Pt(t)}return this.Pt=l,$t(t,a),j}}),Qt=gt(class extends yt{constructor(t){var e;if(super(t),t.type!==ut||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.St){this.St=new Set;for(const t in e)this.St.add(t);return this.render(e)}this.St.forEach((t=>{null==e[t]&&(this.St.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in e){const i=e[t];null!=i&&(this.St.add(t),t.includes("-")?s.setProperty(t,i):s[t]=i)}return j}}),Jt=gt(class extends yt{constructor(t){if(super(t),t.type!==pt)throw Error("templateContent can only be used in child bindings")}render(t){return this.kt===t?j:(this.kt=t,document.importNode(t.content,!0))}}),Ft=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,Xt=gt(class extends Ot{constructor(){super(...arguments),this.Ct=2147483647,this.Rt=[]}render(...t){var e;return null!==(e=t.find((t=>!Ft(t))))&&void 0!==e?e:j}update(t,e){const s=this.Rt;let i=s.length;this.Rt=e;for(let t=0;t<e.length&&!(t>this.Ct);t++){const n=e[t];if(!Ft(n))return this.Ct=t,n;t<i&&n===s[t]||(this.Ct=2147483647,i=0,Promise.resolve(n).then((t=>{const e=this.Rt.indexOf(n);e>-1&&e<this.Ct&&(this.Ct=e,this.setValue(t))})))}return j}});export{s as CSSResult,dt as LitElement,g as ReactiveElement,at as UpdatingElement,st as _Σ,ct as _Φ,l as adoptStyles,_t as asyncAppend,Bt as asyncReplace,Lt as cache,zt as classMap,o as css,p as defaultConverter,h as getCompatibleStyle,jt as guard,z as html,Vt as ifDefined,Dt as live,j as noChange,v as notEqual,V as nothing,qt as ref,W as render,Zt as repeat,Qt as styleMap,t as supportsAdoptingStyleSheets,I as svg,Jt as templateContent,r as unsafeCSS,Xt as until};