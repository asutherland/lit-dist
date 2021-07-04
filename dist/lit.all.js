/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var t,e,i,s;const n=globalThis.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,l="?"+r,a=`<${l}>`,h=document,d=(t="")=>h.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,p=t=>{var e;return u(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,m=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,y=/'/g,b=/"/g,w=/^(?:script|style|textarea)$/i,S=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),C=S(1),E=S(2),P=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),O=new WeakMap,_=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new L(e.insertBefore(d(),t),t,void 0,i)}return r.I(t),r},x=h.createTreeWalker(h,129,null,!1),$=(t,e)=>{const i=t.length-1,s=[];let n,l=2===e?"<svg>":"",h=v;for(let e=0;e<i;e++){const i=t[e];let o,d,c=-1,u=0;for(;u<i.length&&(h.lastIndex=u,d=h.exec(i),null!==d);)u=h.lastIndex,h===v?"!--"===d[1]?h=f:void 0!==d[1]?h=m:void 0!==d[2]?(w.test(d[2])&&(n=RegExp("</"+d[2],"g")),h=g):void 0!==d[3]&&(h=g):h===g?">"===d[0]?(h=null!=n?n:v,c=-1):void 0===d[1]?c=-2:(c=h.lastIndex-d[2].length,o=d[1],h=void 0===d[3]?g:'"'===d[3]?b:y):h===b||h===y?h=g:h===f||h===m?h=v:(h=g,n=void 0);const p=h===g&&t[e+1].startsWith("/>")?" ":"";l+=h===v?i+a:c>=0?(s.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+r+p):i+r+(-2===c?(s.push(void 0),e):p)}const d=l+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==o?o.createHTML(d):d,s]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,a=0;const h=t.length-1,c=this.parts,[u,p]=$(t,e);if(this.el=U.createElement(u,i),x.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=x.nextNode())&&c.length<h;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(r)){const i=p[a++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(r),e=/([.?@])?(.*)/.exec(i);c.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?R:"@"===e[1]?z:k})}else c.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(w.test(s.tagName)){const t=s.textContent.split(r),e=t.length-1;if(e>0){s.textContent=n?n.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],d()),x.nextNode(),c.push({type:2,index:++o});s.append(t[e],d())}}}else if(8===s.nodeType)if(s.data===l)c.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(r,t+1));)c.push({type:7,index:o}),t+=r.length-1}o++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function T(t,e,i=t,s){var n,o,r,l;if(e===P)return e;let a=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const h=c(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a.O)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,i,s)),void 0!==s?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=T(t,a.S(t,e.values),a,s)),e}class N{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);x.currentNode=n;let o=x.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new L(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new M(o,this,t)),this.l.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(o=x.nextNode(),r++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class L{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=T(this,t,e),c(t)?t===A||null==t||""===t?(this.H!==A&&this.R(),this.H=A):t!==this.H&&t!==P&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):p(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(h.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=U.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new N(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new U(t)),e}g(t){u(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new L(this.k(d()),this.k(d()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class k{constructor(t,e,i,s,n){this.type=1,this.H=A,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(A),this.strings=i):this.H=A}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=T(this,t,e,0),o=!c(t)||t!==this.H&&t!==P,o&&(this.H=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=T(this,s[i+r],e,r),l===P&&(l=this.H[r]),o||(o=!c(l)||l!==this.H[r]),l===A?t=A:t!==A&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!s&&this.W(t)}W(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===A?void 0:t}}class R extends k{constructor(){super(...arguments),this.type=4}W(t){t&&t!==A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class z extends k{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=T(this,t,e,0))&&void 0!==i?i:A)===P)return;const s=this.H,n=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==A&&(s===A||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class M{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){T(this,t)}}const I={Z:"$lit$",U:r,Y:l,q:1,X:$,tt:N,it:p,st:T,et:L,ot:k,nt:R,rt:z,lt:H,ht:M};null===(e=(t=globalThis).litHtmlPlatformSupport)||void 0===e||e.call(t,U,L),(null!==(i=(s=globalThis).litHtmlVersions)&&void 0!==i?i:s.litHtmlVersions=[]).push("2.0.0-rc.3");const j=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol();class B{constructor(t,e){if(e!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return j&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const D=new Map,W=t=>{let e=D.get(t);return void 0===e&&D.set(t,e=new B(t,F)),e},V=t=>W("string"==typeof t?t:t+""),q=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(t instanceof B)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return W(i)},X=(t,e)=>{j?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))},Y=j?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return V(e)})(t):t;var K,Z,J,Q;const G={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},tt=(t,e)=>e!==t&&(e==e||t==t),et={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:tt};class it extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||et}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Y(t))}else void 0!==t&&e.push(Y(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return X(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=et){var s,n;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:G.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,e){var i,s,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:G.fromAttribute;this.Πh=r,this[r]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||tt)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var st,nt,ot,rt,lt,at;it.finalized=!0,it.elementProperties=new Map,it.elementStyles=[],it.shadowRootOptions={mode:"open"},null===(Z=(K=globalThis).reactiveElementPlatformSupport)||void 0===Z||Z.call(K,{ReactiveElement:it}),(null!==(J=(Q=globalThis).reactiveElementVersions)&&void 0!==J?J:Q.reactiveElementVersions=[]).push("1.0.0-rc.2");const ht=it;(null!==(st=(at=globalThis).litElementVersions)&&void 0!==st?st:at.litElementVersions=[]).push("3.0.0-rc.2");class dt extends it{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=_(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return P}}dt.finalized=!0,dt._$litElement$=!0,null===(ot=(nt=globalThis).litElementHydrateSupport)||void 0===ot||ot.call(nt,{LitElement:dt}),null===(lt=(rt=globalThis).litElementPlatformSupport)||void 0===lt||lt.call(rt,{LitElement:dt});const ct={K:(t,e,i)=>{t.K(e,i)},L:t=>t.L},ut=(t,...e)=>({strTag:!0,strings:t,values:e}),pt=t=>"string"!=typeof t&&"strTag"in t,vt=(t,e,i)=>{let s=t[0];for(let n=1;n<t.length;n++)s+=e[i?i[n-1]:n-1],s+=t[n];return s},ft=t=>pt(t)?vt(t.strings,t.values):t;class mt{constructor(t){this.__litLocalizeEventHandler=t=>{"ready"===t.detail.status&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener("lit-localize-status",this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener("lit-localize-status",this.__litLocalizeEventHandler)}}const gt=t=>t.addController(new mt(t)),yt=()=>t=>"function"==typeof t?wt(t):bt(t),bt=({kind:t,elements:e})=>({kind:t,elements:e,finisher(t){t.addInitializer(gt)}}),wt=t=>(t.addInitializer(gt),t),St=[];for(let t=0;t<256;t++)St[t]=(t>>4&15).toString(16)+(15&t).toString(16);function Ct(t,e){return(e?"h":"s")+function(t){let e=0,i=8997,s=0,n=33826,o=0,r=40164,l=0,a=52210;for(let h=0;h<t.length;h++)i^=t.charCodeAt(h),e=435*i,s=435*n,o=435*r,l=435*a,o+=i<<8,l+=n<<8,s+=e>>>16,i=65535&e,o+=s>>>16,n=65535&s,a=l+(o>>>16)&65535,r=65535&o;return St[a>>8]+St[255&a]+St[r>>8]+St[255&r]+St[n>>8]+St[255&n]+St[i>>8]+St[255&i]}("string"==typeof t?t:t.join(""))}class Et{constructor(){this.settled=!1,this.promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e}))}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}function Pt(t){window.dispatchEvent(new CustomEvent("lit-localize-status",{detail:t}))}let At,Ot,_t,xt,$t,Ut="",Tt=new Et;Tt.resolve();let Nt=0;const Lt=()=>Ut,kt=t=>{if(t===(null!=At?At:Ut))return Tt.promise;if(!_t||!xt)throw new Error("Internal error");if(!_t.has(t))throw new Error("Invalid locale code");Nt++;const e=Nt;At=t,Tt.settled&&(Tt=new Et),Pt({status:"loading",loadingLocale:t});return(t===Ot?Promise.resolve({templates:void 0}):xt(t)).then((i=>{Nt===e&&(Ut=t,At=void 0,$t=i.templates,Pt({status:"ready",readyLocale:t}),Tt.resolve())}),(i=>{Nt===e&&(Pt({status:"error",errorLocale:t,errorMessage:i.toString()}),Tt.reject(i))})),Tt.promise};function Ht(t,e){var i;if($t){const s=null!==(i=null==e?void 0:e.id)&&void 0!==i?i:function(t){const e="string"==typeof t?t:t.strings;let i=zt.get(e);void 0===i&&(i=Ct(e,"string"!=typeof t&&!("strTag"in t)),zt.set(e,i));return i}(t),n=$t[s];if(n){if("string"==typeof n)return n;if("strTag"in n)return vt(n.strings,t.values,n.values);{let e=Rt.get(n);return void 0===e&&(e=n.values,Rt.set(n,e)),n.values=e.map((e=>t.values[e])),n}}}return ft(t)}const Rt=new WeakMap,zt=new Map;let Mt=ft,It=!1;function jt(t){if(It)throw new Error("lit-localize can only be configured once");Mt=t,It=!0}var Ft=Object.freeze({__proto__:null,get msg(){return Mt},_installMsgImplementation:jt,LOCALE_STATUS_EVENT:"lit-localize-status",str:ut,isStrTagged:pt,joinStringsAndValues:vt,updateWhenLocaleChanges:gt,localized:yt,configureLocalization:t=>(jt(Ht),Ut=Ot=t.sourceLocale,_t=new Set(t.targetLocales),_t.add(t.sourceLocale),xt=t.loadLocale,{getLocale:Lt,setLocale:kt}),configureTransformLocalization:t=>{jt(ft);const e=t.sourceLocale;return{getLocale:()=>e}}});const Bt=2,Dt=6,Wt=t=>(...e)=>({_$litDirective$:t,values:e});const Vt=(t,e)=>{var i,s;const n=t.N;if(void 0===n)return!1;for(const t of n)null===(s=(i=t).O)||void 0===s||s.call(i,e,!1),Vt(t,e);return!0},qt=t=>{let e,i;do{if(void 0===(e=t.M))break;i=e.N,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},Xt=t=>{for(let e;e=t.M;t=e){let i=e.N;if(void 0===i)e.N=i=new Set;else if(i.has(t))break;i.add(t),Zt(e)}};function Yt(t){void 0!==this.N?(qt(this),this.M=t,Xt(this)):this.M=t}function Kt(t,e=!1,i=0){const s=this.H,n=this.N;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)Vt(s[t],!1),qt(s[t]);else null!=s&&(Vt(s,!1),qt(s));else Vt(this,t)}const Zt=t=>{var e,i,s,n;t.type==Bt&&(null!==(e=(s=t).P)&&void 0!==e||(s.P=Kt),null!==(i=(n=t).Q)&&void 0!==i||(n.Q=Yt))};class Jt extends class{constructor(t){}T(t,e,i){this.Σdt=t,this.M=e,this.Σct=i}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this.isConnected=!0,this.ut=P,this.N=void 0}T(t,e,i){super.T(t,e,i),Xt(this)}O(t,e=!0){this.at(t),e&&(Vt(this,t),qt(this))}at(t){var e,i;t!==this.isConnected&&(t?(this.isConnected=!0,this.ut!==P&&(this.setValue(this.ut),this.ut=P),null===(e=this.reconnected)||void 0===e||e.call(this)):(this.isConnected=!1,null===(i=this.disconnected)||void 0===i||i.call(this)))}S(t,e){if(!this.isConnected)throw Error(`AsyncDirective ${this.constructor.name} was rendered while its tree was disconnected.`);return super.S(t,e)}setValue(t){if(this.isConnected)if((t=>void 0===t.strings)(this.Σdt))this.Σdt.I(t,this);else{const e=[...this.Σdt.H];e[this.Σct]=t,this.Σdt.I(e,this,0)}else this.ut=t}disconnected(){}reconnected(){}}const Qt=new WeakMap;let Gt=0;const te=new Map,ee=new WeakSet,ie=()=>new Promise((t=>requestAnimationFrame(t))),se=[{opacity:0}],ne=se,oe=(t,e)=>{const i=t-e;return 0===i?void 0:i},re=(t,e)=>{const i=t/e;return 1===i?void 0:i},le={left:(t,e)=>{const i=oe(t,e);return{value:i,transform:i&&`translateX(${i}px)`}},top:(t,e)=>{const i=oe(t,e);return{value:i,transform:i&&`translateY(${i}px)`}},width:(t,e)=>{const i=re(t,e);return{value:i,transform:i&&`scaleX(${i})`}},height:(t,e)=>{const i=re(t,e);return{value:i,transform:i&&`scaleY(${i})`}}},ae={duration:333,easing:"ease-in-out"},he=["left","top","width","height","opacity","color","background"],de=new WeakMap;class ce extends Jt{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===Bt)throw Error("The `flip` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;null===(t=this.resolveFinished)||void 0===t||t.call(this),this.finished=new Promise((t=>{this.h=t}))}async resolveFinished(){var t;null===(t=this.h)||void 0===t||t.call(this),this.h=void 0}render(t){return A}getController(){return Qt.get(this.l)}isDisabled(){var t;return this.options.disabled||(null===(t=this.getController())||void 0===t?void 0:t.disabled)}update(t,[e]){var i;const s=void 0===this.l;return s&&(this.l=null===(i=t.options)||void 0===i?void 0:i.host,this.l.addController(this),this.element=t.element,de.set(this.element,this)),this.optionsOrCallback=e,(s||"function"!=typeof e)&&this.u(e),this.render(e)}u(t){var e,i;t=null!=t?t:{};const s=this.getController();void 0!==s&&((t={...s.flipOptions,...t}).animationOptions={...s.flipOptions.animationOptions,...t.animationOptions}),null!==(e=(i=t).properties)&&void 0!==e||(i.properties=he),this.options=t}v(){const t={},e=this.element.getBoundingClientRect(),i=getComputedStyle(this.element);return this.options.properties.forEach((s=>{var n;const o=null!==(n=e[s])&&void 0!==n?n:le[s]?void 0:i[s],r=Number(o);t[s]=isNaN(r)?o+"":r})),t}p(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((t,e)=>{if(Array.isArray(t)){if(Array.isArray(e)&&e.length===t.length&&t.every(((t,i)=>t===e[i])))return!1}else if(e===t)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;"function"==typeof this.optionsOrCallback&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=null!==(t=this.t)&&void 0!==t?t:this.element.parentNode,this.i=this.element.nextSibling)}hostUpdated(){this.flip()}reconnected(){}disconnected(){this.flipDisconnect()}resetStyles(){var t;void 0!==this._&&(this.element.setAttribute("style",null!==(t=this._)&&void 0!==t?t:""),this._=void 0)}commitStyles(){var t,e;this._=this.element.getAttribute("style"),null===(t=this.animation)||void 0===t||t.commitStyles(),null===(e=this.animation)||void 0===e||e.cancel()}async flip(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.beforeBeginFlip(),await ie;const e=this.j(),i=this.$(this.options.animationOptions,e),s=this.v();if(void 0!==this.g){const{from:i,to:n}=this.k(this.g,s,e);this.log("measured",[this.g,s,i,n]),t=this.calculateFrames(i,n)}else{const i=te.get(this.options.inId);if(i){te.delete(this.options.inId);const{from:n,to:o}=this.k(i,s,e);t=this.calculateFrames(n,o),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,Gt++,t.forEach((t=>t.zIndex=Gt))}else this.options.in&&(t=[...this.options.in,{}])}this.beginFlip();const n=await this.animate(t,i);this.completeFlip(n)}async flipDisconnect(){var t;if(!this.o)return;if(void 0!==this.options.id&&te.set(this.options.id,this.g),void 0===this.options.out)return;if(this.beforeBeginFlip(),await ie(),null===(t=this.t)||void 0===t?void 0:t.isConnected){const t=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.v();this.log("stabilizing out");const e=this.g.left-t.left,i=this.g.top-t.top;!("static"===getComputedStyle(this.element).position)||0===e&&0===i||(this.element.style.position="relative"),0!==e&&(this.element.style.left=e+"px"),0!==i&&(this.element.style.top=i+"px")}}const e=this.$(this.options.animationOptions);this.beginFlip();const i=await this.animate(this.options.out,e);this.completeFlip(i),this.element.remove()}beforeBeginFlip(){this.createFinished()}beginFlip(){var t,e;null===(e=(t=this.options).onStart)||void 0===e||e.call(t,this)}completeFlip(t){var e,i;t&&(null===(i=(e=this.options).onComplete)||void 0===i||i.call(e,this)),this.g=void 0,this.flipProps=void 0,this.frames=void 0,this.resolveFinished()}j(){const t=[];for(let e=this.element.parentNode;e;e=null==e?void 0:e.parentNode){const i=de.get(e);i&&!i.isDisabled()&&i&&t.push(i)}return t}get isHostRendered(){const t=ee.has(this.l);return t||this.l.updateComplete.then((()=>{ee.add(this.l)})),t}$(t,e=this.j()){const i={...ae};return e.forEach((t=>Object.assign(i,t.options.animationOptions))),Object.assign(i,t),i}k(t,e,i){t={...t},e={...e};const s=i.map((t=>t.flipProps)).filter((t=>void 0!==t));let n=1,o=1;return void 0!==s&&(s.forEach((t=>{t.width&&(n/=t.width),t.height&&(o/=t.height)})),void 0!==t.left&&void 0!==e.left&&(t.left=n*t.left,e.left=n*e.left),void 0!==t.top&&void 0!==e.top&&(t.top=o*t.top,e.top=o*e.top)),{from:t,to:e}}calculateFrames(t,e,i=!1){var s;const n={},o={};let r=!1;const l={};for(const i in e){const a=t[i],h=e[i];if(i in le){const t=le[i];if(void 0===a||void 0===h)continue;const e=t(a,h);void 0!==e.transform&&(l[i]=e.value,r=!0,n.transform=`${null!==(s=n.transform)&&void 0!==s?s:""} ${e.transform}`)}else a!==h&&void 0!==a&&void 0!==h&&(r=!0,n[i]=a,o[i]=h)}return n.transformOrigin=o.transformOrigin=i?"center center":"top left",this.flipProps=l,r?[n,o]:void 0}async animate(t,e=this.options.animationOptions){if(this.frames=t,this.isAnimating()||this.isDisabled())return!1;if(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0===t)return!1;this.log("animate",[t,e]),this.animation=this.element.animate(t,e);const i=this.getController();null==i||i.add(this);try{await this.animation.finished}catch(t){}return null==i||i.remove(this),!0}isAnimating(){var t,e;return"running"===(null===(t=this.animation)||void 0===t?void 0:t.playState)||(null===(e=this.animation)||void 0===e?void 0:e.pending)}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}}const ue=Wt(ce),pe=["top","right","bottom","left"];class ve extends Jt{constructor(t){if(super(t),t.type!==Dt)throw Error("The `position` directive must be used in attribute position.")}render(t,e){return A}update(t,[e,i]){var s;return void 0===this.l&&(this.l=null===(s=t.options)||void 0===s?void 0:s.host,this.l.addController(this)),this.U=t.element,this.W=e,this.X=null!=i?i:["left","top","width","height"],this.render(e,i)}hostUpdated(){this.Y()}Y(){var t,e;const i="function"==typeof this.W?this.W():null===(t=this.W)||void 0===t?void 0:t.value,s=i.offsetParent;if(void 0===i||!s)return;const n=i.getBoundingClientRect(),o=s.getBoundingClientRect();null===(e=this.X)||void 0===e||e.forEach((t=>{const e=pe.includes(t)?n[t]-o[t]:n[t];this.U.style[t]=e+"px"}))}}const fe=Wt(ve);var me=Object.freeze({__proto__:null,Flip:ce,animationFrame:ie,defaultAnimationOptions:ae,defaultCssProperties:he,fade:ne,fadeIn:[{opacity:0},{opacity:1}],fadeInSlow:[{opacity:0},{opacity:.25,offset:.75},{opacity:1}],fadeOut:se,flip:ue,flyAbove:[{transform:"translateY(-100%) scale(0)",opacity:0}],flyBelow:[{transform:"translateY(100%) scale(0)",opacity:0}],flyLeft:[{transform:"translateX(-100%) scale(0)",opacity:0}],flyRight:[{transform:"translateX(100%) scale(0)",opacity:0}],none:[{}],transformProps:le,FlipController:class{constructor(t,e){this.startPaused=!1,this.disabled=!1,this.flips=new Set,this.pendingComplete=!1,this.host=t,this.flipOptions=e.flipOptions||{},this.startPaused=!!e.startPaused,this.disabled=!!e.disabled,this.onComplete=e.onComplete,Qt.set(this.host,this)}async add(t){var e,i;this.flips.add(t),this.startPaused&&(null===(e=t.animation)||void 0===e||e.pause()),this.pendingComplete=!0,await t.finished,this.pendingComplete&&!this.isAnimating&&(this.pendingComplete=!1,null===(i=this.onComplete)||void 0===i||i.call(this))}remove(t){this.flips.delete(t)}pause(){this.flips.forEach((t=>{var e;return null===(e=t.animation)||void 0===e?void 0:e.pause()}))}play(){this.flips.forEach((t=>{var e;return null===(e=t.animation)||void 0===e?void 0:e.play()}))}cancel(){this.flips.forEach((t=>{var e;return null===(e=t.animation)||void 0===e?void 0:e.cancel()})),this.flips.clear()}finish(){this.flips.forEach((t=>{var e;return null===(e=t.animation)||void 0===e?void 0:e.finish()})),this.flips.clear()}togglePlay(){this.isPlaying?this.pause():this.play()}get isAnimating(){return this.flips.size>0}get isPlaying(){return Array.from(this.flips).some((t=>{var e;return"running"===(null===(e=t.animation)||void 0===e?void 0:e.playState)}))}async finished(){await Promise.all(Array.from(this.flips).map((t=>t.finished)))}},flipControllers:Qt,Position:ve,position:fe});const ge=new Set(["children","localName","ref","style","className"]),ye=new WeakMap,be=(t,e,i,s,n)=>{const o=null==n?void 0:n[e];void 0!==o?i!==s&&((t,e,i)=>{let s=ye.get(t);void 0===s&&ye.set(t,s=new Map);let n=s.get(e);void 0!==i?void 0===n?(s.set(e,n={handleEvent:i}),t.addEventListener(e,n)):n.handleEvent=i:void 0!==n&&(s.delete(e),t.removeEventListener(e,n))})(t,o,i):t[e]=i};var we=Object.freeze({__proto__:null,createComponent:(t,e,i,s)=>{const n=t.Component,o=t.createElement,r=new Set(Object.keys(null!=s?s:{}));for(const t in i.prototype)t in HTMLElement.prototype||(ge.has(t)?console.warn(`${e} contains property ${t} which is a React reserved property. It will be used by React and not set on the element.`):r.add(t));class l extends n{constructor(){super(...arguments),this.t=null}o(t){if(null!==this.t)for(const e in this.i)be(this.t,e,this.props[e],t?t[e]:void 0,s)}componentDidMount(){this.o()}componentDidUpdate(t){this.o(t)}render(){const t=this.props.l;void 0!==this.h&&this.u===t||(this.h=e=>{null===this.t&&(this.t=e),null!==t&&((t,e)=>{"function"==typeof t?t(e):t.current=e})(t,e),this.u=t});const i={ref:this.h};this.i={};for(const[t,e]of Object.entries(this.props))r.has(t)?this.i[t]=e:i["className"===t?"class":t]=e;return o(e,i)}}return t.forwardRef(((t,e)=>o(l,{...t,l:e},null==t?void 0:t.children)))}}),Se=Object.freeze({__proto__:null});const Ce=Symbol();const Ee={motion:me,react:we,ssrClient:Se,task:Object.freeze({__proto__:null,Task:class{constructor(t,e,i){this.t=[],this.i=0,this.status=0,this.h=t,this.h.addController(this),this.o=e,this.l=i,this.taskComplete=new Promise(((t,e)=>{this.u=t,this.v=e}))}hostUpdated(){this.m()}async m(){const t=this.l();if(this.p(t)){let e,i;2!==this.status&&3!==this.status||(this.taskComplete=new Promise(((t,e)=>{this.u=t,this.v=e}))),this.status=1,this.g=void 0,this._=void 0,this.h.requestUpdate();const s=++this.i;try{e=await this.o(t)}catch(t){i=t}this.i===s&&(e===Ce?this.status=0:(void 0===i?(this.status=2,this.u(e)):(this.status=3,this.v(i)),this._=e,this.g=i),this.h.requestUpdate())}}get value(){return this._}get error(){return this.g}render(t){var e,i,s,n;switch(this.status){case 0:return null===(e=t.initial)||void 0===e?void 0:e.call(t);case 1:return null===(i=t.pending)||void 0===i?void 0:i.call(t);case 2:return null===(s=t.complete)||void 0===s?void 0:s.call(t,this.value);case 3:return null===(n=t.error)||void 0===n?void 0:n.call(t,this.error);default:this.status}}p(t){let e=0;const i=this.t;this.t=t;for(const s of t){if(tt(s,i[e]))return!0;e++}return!1}},TaskStatus:{INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},initialState:Ce})};export{B as CSSResult,dt as LitElement,it as ReactiveElement,ht as UpdatingElement,I as _Σ,ct as _Φ,X as adoptStyles,q as css,G as defaultConverter,Y as getCompatibleStyle,C as html,Ee as labs,Ft as locallize,P as noChange,tt as notEqual,A as nothing,_ as render,j as supportsAdoptingStyleSheets,E as svg,V as unsafeCSS};
