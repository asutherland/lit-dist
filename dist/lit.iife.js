/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var lit=function(t){"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return e&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,o=t=>{let e=n.get(t);return void 0===e&&n.set(t,e=new s(t,i)),e},r=t=>o("string"==typeof t?t:t+""),l=(t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))},h=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return r(e)})(t):t;var a,d,c,u;const p={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=f){var s,n;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:p.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,e){var i,s,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:p.fromAttribute;this.Πh=r,this[r]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var g,y,S,b;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(d=(a=globalThis).reactiveElementPlatformSupport)||void 0===d||d.call(a,{ReactiveElement:m}),(null!==(c=(u=globalThis).reactiveElementVersions)&&void 0!==c?c:u.reactiveElementVersions=[]).push("1.0.0-rc.2");const w=globalThis.trustedTypes,C=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,E="?"+x,P=`<${E}>`,U=document,$=(t="")=>U.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,T=t=>{var e;return H(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,R=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,L=/"/g,_=/^(?:script|style|textarea)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),z=B(1),I=B(2),j=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,D=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Y(e.insertBefore($(),t),t,void 0,i)}return r.I(t),r},q=U.createTreeWalker(U,129,null,!1),K=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,d=0;for(;d<i.length&&(r.lastIndex=d,h=r.exec(i),null!==h);)d=r.lastIndex,r===N?"!--"===h[1]?r=O:void 0!==h[1]?r=R:void 0!==h[2]?(_.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=k):void 0!==h[3]&&(r=k):r===k?">"===h[0]?(r=null!=n?n:N,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?k:'"'===h[3]?L:M):r===L||r===M?r=k:r===O||r===R?r=N:(r=k,n=void 0);const c=r===k&&t[e+1].startsWith("/>")?" ":"";o+=r===N?i+P:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+x+c):i+x+(-2===a?(s.push(void 0),e):c)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==C?C.createHTML(l):l,s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=K(t,e);if(this.el=Z.createElement(h,i),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=q.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const i=a[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Q:"@"===e[1]?tt:F})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(_.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],$()),q.nextNode(),l.push({type:2,index:++n});s.append(t[e],$())}}}else if(8===s.nodeType)if(s.data===E)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)l.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){var n,o,r,l;if(e===j)return e;let h=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const a=A(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h.O)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,s)),void 0!==s?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[s]=h:i.Σo=h),void 0!==h&&(e=J(t,h.S(t,e.values),h,s)),e}class X{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:U).importNode(i,!0);q.currentNode=n;let o=q.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new Y(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new et(o,this,t)),this.l.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=q.nextNode(),r++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class Y{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=J(this,t,e),A(t)?t===V||null==t||""===t?(this.H!==V&&this.R(),this.H=V):t!==this.H&&t!==j&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):T(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(U.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=Z.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new X(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}g(t){H(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new Y(this.k($()),this.k($()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class F{constructor(t,e,i,s,n){this.type=1,this.H=V,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(V),this.strings=i):this.H=V}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=J(this,t,e,0),o=!A(t)||t!==this.H&&t!==j,o&&(this.H=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=J(this,s[i+r],e,r),l===j&&(l=this.H[r]),o||(o=!A(l)||l!==this.H[r]),l===V?t=V:t!==V&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!s&&this.W(t)}W(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends F{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===V?void 0:t}}class Q extends F{constructor(){super(...arguments),this.type=4}W(t){t&&t!==V?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class tt extends F{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=J(this,t,e,0))&&void 0!==i?i:V)===j)return;const s=this.H,n=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==V&&(s===V||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){J(this,t)}}const it={Z:"$lit$",U:x,Y:E,q:1,X:K,tt:X,it:T,st:J,et:Y,ot:F,nt:Q,rt:tt,lt:G,ht:et};var st,nt,ot,rt,lt,ht;null===(y=(g=globalThis).litHtmlPlatformSupport)||void 0===y||y.call(g,Z,Y),(null!==(S=(b=globalThis).litHtmlVersions)&&void 0!==S?S:b.litHtmlVersions=[]).push("2.0.0-rc.3");const at=m;(null!==(st=(ht=globalThis).litElementVersions)&&void 0!==st?st:ht.litElementVersions=[]).push("3.0.0-rc.2");class dt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=D(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return j}}dt.finalized=!0,dt._$litElement$=!0,null===(ot=(nt=globalThis).litElementHydrateSupport)||void 0===ot||ot.call(nt,{LitElement:dt}),null===(lt=(rt=globalThis).litElementPlatformSupport)||void 0===lt||lt.call(rt,{LitElement:dt});return t.CSSResult=s,t.LitElement=dt,t.ReactiveElement=m,t.UpdatingElement=at,t._Σ=it,t._Φ={K:(t,e,i)=>{t.K(e,i)},L:t=>t.L},t.adoptStyles=l,t.css=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return o(i)},t.defaultConverter=p,t.getCompatibleStyle=h,t.html=z,t.noChange=j,t.notEqual=v,t.nothing=V,t.render=D,t.supportsAdoptingStyleSheets=e,t.svg=I,t.unsafeCSS=r,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
