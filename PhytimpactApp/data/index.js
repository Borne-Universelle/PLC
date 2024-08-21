(function () {
  'use strict';

  !function(){/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=i.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t));}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new r(i,t,o)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return (t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,b=p.trustedTypes,m=b?b.emptyScript:"",v=p.reactiveElementPolyfillSupport,f=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t);}catch(t){o=null;}}return o}},y=(t,e)=>!a(t,e),w={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&l(this.prototype,t,i);}}static getPropertyDescriptor(t,e,o){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t;}};return {get(){return i?.call(this)},set(e){const s=i?.call(this);r.call(this,e),this.requestUpdate(t,s,o);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const o of e)this.createProperty(o,t[o]);}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o);}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t));}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const o=e.attribute;return !1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ((o,i)=>{if(e)o.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i);}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,e,o){this._$AK(t,o);}_$EC(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:g).toAttribute(e,o.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null;}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null;}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??y)(this[t],e))return;this.P(t,e,o);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o);}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU();}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[f("elementProperties")]=new Map,_[f("finalized")]=new Map,v?.({ReactiveElement:_}),(p.reactiveElementVersions??=[]).push("2.0.4");
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const $=globalThis,k=$.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,z="?"+A,S=`<${z}>`,E=document,V=()=>E.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,M="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,U=/>/g,D=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,B=/"/g,H=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),I=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),j=new WeakMap,q=E.createTreeWalker(E,129);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,i=[];let r,s=2===e?"<svg>":"",n=F;for(let e=0;e<o;e++){const o=t[e];let a,l,c=-1,d=0;for(;d<o.length&&(n.lastIndex=d,l=n.exec(o),null!==l);)d=n.lastIndex,n===F?"!--"===l[1]?n=L:void 0!==l[1]?n=U:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=r??F,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?D:'"'===l[3]?B:O):n===B||n===O?n=D:n===L||n===U?n=F:(n=D,r=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";s+=n===F?o+S:c>=0?(i.push(a),o.slice(0,c)+C+o.slice(c)+A+h):o+A+(-2===c?e:h);}return [W(t,s+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class X{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,s=0;const n=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=X.createElement(l,o),q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(i=q.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[s++],o=i.getAttribute(t).split(A),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:o,ctor:"."===n[1]?Q:"?"===n[1]?tt:"@"===n[1]?et:Y}),i.removeAttribute(t);}else t.startsWith(A)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(H.test(i.tagName)){const t=i.textContent.split(A),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],V()),q.nextNode(),a.push({type:2,index:++r});i.append(t[e],V());}}}else if(8===i.nodeType)if(i.data===z)a.push({type:2,index:r});else {let t=-1;for(;-1!==(t=i.data.indexOf(A,t+1));)a.push({type:7,index:r}),t+=A.length-1;}r++;}}static createElement(t,e){const o=E.createElement("template");return o.innerHTML=t,o}}function Z(t,e,o=t,i){if(e===I)return e;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const s=T(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??E).importNode(e,!0);q.currentNode=i;let r=q.nextNode(),s=0,n=0,a=o[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new G(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=o[++n];}s!==a?.index&&(r=q.nextNode(),s++);}return q.currentNode=E,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++;}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),T(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==R&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t;}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=X.createElement(W(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else {const t=new J(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t;}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new X(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new G(this.S(V()),this.S(V()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i);}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=R;}_$AI(t,e=this,o,i){const r=this.strings;let s=!1;if(void 0===r)t=Z(this,t,e,0),s=!T(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else {const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Z(this,i[o+n],e,n),a===I&&(a=this._$AH[n]),s||=!T(a)||a!==this._$AH[n],a===R?t=R:t!==R&&(t+=(a??"")+r[n+1]),this._$AH[n]=a;}s&&!i&&this.j(t);}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class Q extends Y{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===R?void 0:t;}}class tt extends Y{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==R);}}class et extends Y{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5;}_$AI(t,e=this){if((t=Z(this,t,e,0)??R)===I)return;const o=this._$AH,i=t===R&&o!==R||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==R&&(o===R||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class ot{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o;}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t);}}const it=$.litHtmlPolyfillSupport;it?.(X,G),($.litHtmlVersions??=[]).push("3.1.2");
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  let rt=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=o?.renderBefore??null;i._$litPart$=r=new G(e.insertBefore(V(),t),t,void 0,o??{});}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return I}};rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const st=globalThis.litElementPolyfillSupport;st?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.4");var nt=s`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const at=new Set,lt=new MutationObserver(bt),ct=new Map;let dt,ht=document.documentElement.dir||"ltr",ut=document.documentElement.lang||navigator.language;function pt(...t){t.map((t=>{const e=t.$code.toLowerCase();ct.has(e)?ct.set(e,Object.assign(Object.assign({},ct.get(e)),t)):ct.set(e,t),dt||(dt=t);})),bt();}function bt(){ht=document.documentElement.dir||"ltr",ut=document.documentElement.lang||navigator.language,[...at.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate();}));}lt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});let mt=class{constructor(t){this.host=t,this.host.addController(this);}hostConnected(){at.add(this.host);}hostDisconnected(){at.delete(this.host);}dir(){return `${this.host.dir||ht}`.toLowerCase()}lang(){return `${this.host.lang||ut}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),r=null==i?void 0:i.language.toLowerCase(),s=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return {locale:i,language:r,region:s,primary:ct.get(`${r}-${s}`),secondary:ct.get(r)}}exists(t,e){var o;const{primary:i,secondary:r}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||r&&r[t]||e.includeFallback&&dt&&dt[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let r;if(o&&o[t])r=o[t];else if(i&&i[t])r=i[t];else {if(!dt||!dt[t])return console.error(`No translation found for: ${String(t)}`),String(t);r=dt[t];}return "function"==typeof r?r(...e):r}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var vt={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};pt(vt);var ft=vt,gt=class extends mt{};pt(ft);var yt=s`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,wt=Object.defineProperty,_t=Object.defineProperties,$t=Object.getOwnPropertyDescriptor,kt=Object.getOwnPropertyDescriptors,xt=Object.getOwnPropertySymbols,Ct=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,zt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),St=(t,e,o)=>e in t?wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Et=(t,e)=>{for(var o in e||(e={}))Ct.call(e,o)&&St(t,o,e[o]);if(xt)for(var o of xt(e))At.call(e,o)&&St(t,o,e[o]);return t},Vt=(t,e)=>_t(t,kt(e)),Tt=(t,e,o,i)=>{for(var r,s=i>1?void 0:i?$t(e,o):e,n=t.length-1;n>=0;n--)(r=t[n])&&(s=(i?r(e,o,s):r(s))||s);return i&&s&&wt(e,o,s),s},Pt=function(t,e){this[0]=t,this[1]=e;},Mt=t=>{var e,o=t[zt("asyncIterator")],i=!1,r={};return null==o?(o=t[zt("iterator")](),e=t=>r[t]=e=>o[t](e)):(o=o.call(t),e=t=>r[t]=e=>{if(i){if(i=!1,"throw"===t)throw e;return e}return i=!0,{done:!1,value:new Pt(new Promise((i=>{var r=o[t](e);if(!(r instanceof Object))throw TypeError("Object expected");i(r);})),1)}}),r[zt("iterator")]=()=>r,e("next"),"throw"in o?e("throw"):r.throw=t=>{throw t},"return"in o&&e("return"),r};
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const Ft={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:y},Lt=(t=Ft,e,o)=>{const{kind:i,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(o.name,t),"accessor"===i){const{name:i}=o;return {set(o){const r=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,r,t);},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];e.call(this,o),this.requestUpdate(i,r,t);}}throw Error("Unsupported decorator location: "+i)};function Ut(t){return (e,o)=>"object"==typeof o?Lt(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function Dt(t){return Ut({...t,state:!0,attribute:!1})}
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const Ot=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o)
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;function Bt(t,e){return (o,i,r)=>{const s=e=>e.renderRoot?.querySelector(t)??null;return Ot(o,i,{get(){return s(this)}})}}var Ht=class extends rt{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([t,e])=>{this.constructor.define(t,e);}));}emit(t,e){const o=new CustomEvent(t,Et({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i)return void customElements.define(t,class extends e{},o);let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in i&&i.version&&(s=" v"+i.version),r&&s&&r===s||console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`);}};Ht.version="2.14.0",Ht.dependencies={},Tt([Ut()],Ht.prototype,"dir",2),Tt([Ut()],Ht.prototype,"lang",2);var Nt=class extends Ht{constructor(){super(...arguments),this.localize=new gt(this);}render(){return N`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Nt.styles=[yt,nt];var It=new WeakMap,Rt=new WeakMap,jt=new WeakMap,qt=new WeakSet,Wt=new WeakMap,Kt=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!r&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach((e=>{t.formData.append(o,e.toString());})):t.formData.append(o,i.toString()));},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=It.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0);}))),!this.form||this.form.noValidate||o||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation());},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Wt.set(this.host,[]);},this.handleInteraction=t=>{const e=Wt.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0);},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return !1}return !0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return !1}return !0},(this.host=t).addController(this),this.options=Et({form:t=>{const e=t.form;if(e){const o=t.getRootNode().getElementById(e);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e);}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Wt.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction);}));}hostDisconnected(){this.detachForm(),Wt.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction);}));}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid);}attachForm(t){t?(this.form=t,It.has(this.form)?It.get(this.form).add(this.host):It.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Rt.has(this.form)||(Rt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),jt.has(this.form)||(jt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0;}detachForm(){if(!this.form)return;const t=It.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Rt.has(this.form)&&(this.form.reportValidity=Rt.get(this.form),Rt.delete(this.form)),jt.has(this.form)&&(this.form.checkValidity=jt.get(this.form),jt.delete(this.form)),this.form=void 0));}setUserInteracted(t,e){e?qt.add(t):qt.delete(t),t.requestUpdate();}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t));}))),this.form.append(o),o.click(),o.remove();}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t);}submit(t){this.doAction("submit",t);}setValidity(t){const e=this.host,o=Boolean(qt.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o);}updateValidity(){const t=this.host;this.setValidity(t.validity.valid);}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault();}},Xt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Vt(Et({},Xt),{valid:!1,valueMissing:!0})),Object.freeze(Vt(Et({},Xt),{valid:!1,customError:!0}));var Zt=s`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Jt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate();},(this.host=t).addController(this),this.slotNames=e;}hasDefaultSlot(){return [...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return !0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return !1;if(!e.hasAttribute("slot"))return !0}return !1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return "[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange);}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange);}},Gt="";function Yt(t){Gt=t;}var Qt={name:"default",resolver:t=>function(t=""){if(!Gt){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)Yt(e.getAttribute("data-shoelace"));else {const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),Yt(o.split("/").slice(0,-1).join("/"));}}return Gt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},te={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},ee=[Qt,{name:"system",resolver:t=>t in te?`data:image/svg+xml,${encodeURIComponent(te[t])}`:""}],oe=[];function ie(t){return ee.find((e=>e.name===t))}var re=s`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function se(t,e){const o=Et({waitUntilFirstUpdate:!1},e);return (e,i)=>{const{update:r}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const r=e;if(t.has(r)){const e=t.get(r),s=this[r];e!==s&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,s));}})),r.call(this,t);};}}
  /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const ne={};var ae,le=Symbol(),ce=Symbol(),de=new Map,he=class extends Ht{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default";}async resolveIcon(t,e){var o;let i;if(null==e?void 0:e.spriteSheet)return N`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return 410===i.status?le:ce}catch(t){return ce}try{const t=document.createElement("div");t.innerHTML=await i.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return le;ae||(ae=new DOMParser);const r=ae.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):le}catch(t){return le}}connectedCallback(){var t;super.connectedCallback(),t=this,oe.push(t);}firstUpdated(){this.initialRender=!0,this.setIcon();}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,oe=oe.filter((e=>e!==t));}getIconSource(){const t=ie(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"));}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?ie(this.library):void 0;if(!e)return void(this.svg=null);let r=de.get(e);if(r||(r=this.resolveIcon(e,i),de.set(e,r)),!this.initialRender)return;const s=await r;if(s===ce&&de.delete(e),e===this.getIconSource().url)if(((t,e)=>void 0!==t?._$litType$)(s))this.svg=s;else switch(s){case ce:case le:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(t=null==i?void 0:i.mutator)||t.call(i,this.svg),this.emit("sl-load");}}render(){return this.svg}};he.styles=[yt,re],Tt([Dt()],he.prototype,"svg",2),Tt([Ut({reflect:!0})],he.prototype,"name",2),Tt([Ut()],he.prototype,"src",2),Tt([Ut()],he.prototype,"label",2),Tt([Ut({reflect:!0})],he.prototype,"library",2),Tt([se("label")],he.prototype,"handleLabelChange",1),Tt([se(["name","src","library"])],he.prototype,"setIcon",1);
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const ue=1,pe=2,be=3,me=4,ve=t=>(...e)=>({_$litDirective$:t,values:e});let fe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
  /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const ge=ve(class extends fe{constructor(t){if(super(t),t.type!==ue||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)));}return I}}),ye=Symbol.for(""),we=t=>{if(t?.r===ye)return t?._$litStatic$},_e=(t,...e)=>({_$litStatic$:e.reduce(((e,o,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]),r:ye}),$e=new Map,ke=(t=>(e,...o)=>{const i=o.length;let r,s;const n=[],a=[];let l,c=0,d=!1;for(;c<i;){for(l=e[c];c<i&&void 0!==(s=o[c],r=we(s));)l+=r+e[++c],d=!0;c!==i&&a.push(s),n.push(l),c++;}if(c===i&&n.push(e[i]),d){const t=n.join("$$lit$$");void 0===(e=$e.get(t))&&(n.raw=n,$e.set(t,e=n)),o=a;}return t(e,...o)})(N),xe=t=>t??R;
  /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var Ce=class extends Ht{constructor(){super(...arguments),this.formControlController=new Kt(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Jt(this,"[default]","prefix","suffix"),this.localize=new gt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener";}get validity(){return this.isButton()?this.button.validity:Xt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity();}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleFocus(){this.hasFocus=!0,this.emit("sl-focus");}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this);}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t);}isButton(){return !this.href}isLink(){return !!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled);}click(){this.button.click();}focus(t){this.button.focus(t);}blur(){this.button.blur();}checkValidity(){return !this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return !this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity());}render(){const t=this.isLink(),e=t?_e`a`:_e`button`;return ke`
      <${e}
        part="base"
        class=${ge({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${xe(t?void 0:this.disabled)}
        type=${xe(t?void 0:this.type)}
        title=${this.title}
        name=${xe(t?void 0:this.name)}
        value=${xe(t?void 0:this.value)}
        href=${xe(t?this.href:void 0)}
        target=${xe(t?this.target:void 0)}
        download=${xe(t?this.download:void 0)}
        rel=${xe(t?this.rel:void 0)}
        role=${xe(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?ke` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ke`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Ce.styles=[yt,Zt],Ce.dependencies={"sl-icon":he,"sl-spinner":Nt},Tt([Bt(".button")],Ce.prototype,"button",2),Tt([Dt()],Ce.prototype,"hasFocus",2),Tt([Dt()],Ce.prototype,"invalid",2),Tt([Ut()],Ce.prototype,"title",2),Tt([Ut({reflect:!0})],Ce.prototype,"variant",2),Tt([Ut({reflect:!0})],Ce.prototype,"size",2),Tt([Ut({type:Boolean,reflect:!0})],Ce.prototype,"caret",2),Tt([Ut({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2),Tt([Ut({type:Boolean,reflect:!0})],Ce.prototype,"loading",2),Tt([Ut({type:Boolean,reflect:!0})],Ce.prototype,"outline",2),Tt([Ut({type:Boolean,reflect:!0})],Ce.prototype,"pill",2),Tt([Ut({type:Boolean,reflect:!0})],Ce.prototype,"circle",2),Tt([Ut()],Ce.prototype,"type",2),Tt([Ut()],Ce.prototype,"name",2),Tt([Ut()],Ce.prototype,"value",2),Tt([Ut()],Ce.prototype,"href",2),Tt([Ut()],Ce.prototype,"target",2),Tt([Ut()],Ce.prototype,"rel",2),Tt([Ut()],Ce.prototype,"download",2),Tt([Ut()],Ce.prototype,"form",2),Tt([Ut({attribute:"formaction"})],Ce.prototype,"formAction",2),Tt([Ut({attribute:"formenctype"})],Ce.prototype,"formEnctype",2),Tt([Ut({attribute:"formmethod"})],Ce.prototype,"formMethod",2),Tt([Ut({attribute:"formnovalidate",type:Boolean})],Ce.prototype,"formNoValidate",2),Tt([Ut({attribute:"formtarget"})],Ce.prototype,"formTarget",2),Tt([se("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1),Ce.define("sl-button"),he.define("sl-icon");var Ae=s`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,ze=s`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Se=(t="value")=>(e,o)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(e,s,n){var a;const l=i.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||g,i=("function"==typeof e?e:null!=(a=null==e?void 0:e.fromAttribute)?a:g.fromAttribute)(n,l.type);this[t]!==i&&(this[o]=i);}r.call(this,e,s,n);};}
  /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;const Ee=ve(class extends fe{constructor(t){if(super(t),t.type!==be&&t.type!==ue&&t.type!==me)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===I||e===R)return e;const o=t.element,i=t.name;if(t.type===be){if(e===o[i])return I}else if(t.type===me){if(!!e===o.hasAttribute(i))return I}else if(t.type===ue&&o.getAttribute(i)===e+"")return I;return ((t,e=ne)=>{t._$AH=e;})(t),e}});var Ve=class extends Ht{constructor(){super(...arguments),this.formControlController=new Kt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Jt(this,"help-text","label"),this.localize=new gt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0;}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value;}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value;}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleChange(){this.value=this.input.value,this.emit("sl-change");}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation();}handleFocus(){this.hasFocus=!0,this.emit("sl-focus");}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t);}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit();}));}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible;}handleDisabledChange(){this.formControlController.setValidity(this.disabled);}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity();}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity();}focus(t){this.input.focus(t);}blur(){this.input.blur();}select(){this.input.select();}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o);}setRangeText(t,e,o,i="preserve"){const r=null!=e?e:this.input.selectionStart,s=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,r,s,i),this.value!==this.input.value&&(this.value=this.input.value);}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker();}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value);}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value);}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&!this.readonly,s=r&&("number"==typeof this.value||this.value.length>0);return N`
      <div
        part="form-control"
        class=${ge({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ge({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${xe(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${xe(this.placeholder)}
              minlength=${xe(this.minlength)}
              maxlength=${xe(this.maxlength)}
              min=${xe(this.min)}
              max=${xe(this.max)}
              step=${xe(this.step)}
              .value=${Ee(this.value)}
              autocapitalize=${xe(this.autocapitalize)}
              autocomplete=${xe(this.autocomplete)}
              autocorrect=${xe(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${xe(this.pattern)}
              enterkeyhint=${xe(this.enterkeyhint)}
              inputmode=${xe(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?N`
                  <button
                    part="clear-button"
                    class=${ge({input__clear:!0,"input__clear--visible":s})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?N`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?N`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:N`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ve.styles=[yt,Ae,ze],Ve.dependencies={"sl-icon":he},Tt([Bt(".input__control")],Ve.prototype,"input",2),Tt([Dt()],Ve.prototype,"hasFocus",2),Tt([Ut()],Ve.prototype,"title",2),Tt([Ut({reflect:!0})],Ve.prototype,"type",2),Tt([Ut()],Ve.prototype,"name",2),Tt([Ut()],Ve.prototype,"value",2),Tt([Se()],Ve.prototype,"defaultValue",2),Tt([Ut({reflect:!0})],Ve.prototype,"size",2),Tt([Ut({type:Boolean,reflect:!0})],Ve.prototype,"filled",2),Tt([Ut({type:Boolean,reflect:!0})],Ve.prototype,"pill",2),Tt([Ut()],Ve.prototype,"label",2),Tt([Ut({attribute:"help-text"})],Ve.prototype,"helpText",2),Tt([Ut({type:Boolean})],Ve.prototype,"clearable",2),Tt([Ut({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2),Tt([Ut()],Ve.prototype,"placeholder",2),Tt([Ut({type:Boolean,reflect:!0})],Ve.prototype,"readonly",2),Tt([Ut({attribute:"password-toggle",type:Boolean})],Ve.prototype,"passwordToggle",2),Tt([Ut({attribute:"password-visible",type:Boolean})],Ve.prototype,"passwordVisible",2),Tt([Ut({attribute:"no-spin-buttons",type:Boolean})],Ve.prototype,"noSpinButtons",2),Tt([Ut({reflect:!0})],Ve.prototype,"form",2),Tt([Ut({type:Boolean,reflect:!0})],Ve.prototype,"required",2),Tt([Ut()],Ve.prototype,"pattern",2),Tt([Ut({type:Number})],Ve.prototype,"minlength",2),Tt([Ut({type:Number})],Ve.prototype,"maxlength",2),Tt([Ut()],Ve.prototype,"min",2),Tt([Ut()],Ve.prototype,"max",2),Tt([Ut()],Ve.prototype,"step",2),Tt([Ut()],Ve.prototype,"autocapitalize",2),Tt([Ut()],Ve.prototype,"autocorrect",2),Tt([Ut()],Ve.prototype,"autocomplete",2),Tt([Ut({type:Boolean})],Ve.prototype,"autofocus",2),Tt([Ut()],Ve.prototype,"enterkeyhint",2),Tt([Ut({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Ve.prototype,"spellcheck",2),Tt([Ut()],Ve.prototype,"inputmode",2),Tt([se("disabled",{waitUntilFirstUpdate:!0})],Ve.prototype,"handleDisabledChange",1),Tt([se("step",{waitUntilFirstUpdate:!0})],Ve.prototype,"handleStepChange",1),Tt([se("value",{waitUntilFirstUpdate:!0})],Ve.prototype,"handleValueChange",1),Ve.define("sl-input");var Te=s`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;
  /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  const Pe="important",Me=" !"+Pe,Fe=ve(class extends fe{constructor(t){if(super(t),t.type!==ue||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,o)=>{const i=t[o];return null==i?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:o}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?o.removeProperty(t):o[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(Me);t.includes("-")||e?o.setProperty(t,e?i.slice(0,-11):i,e?Pe:""):o[t]=i;}}return I}});
  /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class Le extends fe{constructor(t){if(super(t),this.it=R,t.type!==pe)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||null==t)return this._t=void 0,this.it=t;if(t===I)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Le.directiveName="unsafeHTML",Le.resultType=1;const Ue=ve(Le);var De=class extends Ht{constructor(){super(...arguments),this.localize=new gt(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>';}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e="rtl"===this.localize.dir(),{left:o,right:i,width:r}=this.rating.getBoundingClientRect();return function(t,e,o){const i=t=>Object.is(t,-0)?0:t;return i(t<e?e:t>o?o:t)}(e?this.roundToPrecision((i-t)/r*this.max,this.precision):this.roundToPrecision((t-o)/r*this.max,this.precision),0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"));}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1);}handleKeyDown(t){const e="ltr"===this.localize.dir(),o="rtl"===this.localize.dir(),i=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault();}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault();}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==i&&this.emit("sl-change");}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t);}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t);}handleMouseLeave(){this.isHovering=!1;}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault();}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t);}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault();}roundToPrecision(t,e=.5){const o=1/e;return Math.ceil(t*o)/o}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}});}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}});}focus(t){this.rating.focus(t);}blur(){this.rating.blur();}render(){const t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys());let o=0;return o=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,N`
      <div
        part="base"
        class=${ge({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map((e=>o>e&&o<e+1?N`
                <span
                  class=${ge({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===e+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${Fe({clipPath:t?`inset(0 ${100*(o-e)}% 0 0)`:`inset(0 0 0 ${100*(o-e)}%)`})}
                  >
                    ${Ue(this.getSymbol(e+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Fe({clipPath:t?`inset(0 0 0 ${100-100*(o-e)}%)`:`inset(0 ${100-100*(o-e)}% 0 0)`})}
                  >
                    ${Ue(this.getSymbol(e+1))}
                  </div>
                </span>
              `:N`
              <span
                class=${ge({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===e+1,"rating__symbol--active":o>=e+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Ue(this.getSymbol(e+1))}
              </span>
            `))}
        </span>
      </div>
    `}};De.styles=[yt,Te],De.dependencies={"sl-icon":he},Tt([Bt(".rating")],De.prototype,"rating",2),Tt([Dt()],De.prototype,"hoverValue",2),Tt([Dt()],De.prototype,"isHovering",2),Tt([Ut()],De.prototype,"label",2),Tt([Ut({type:Number})],De.prototype,"value",2),Tt([Ut({type:Number})],De.prototype,"max",2),Tt([Ut({type:Number})],De.prototype,"precision",2),Tt([Ut({type:Boolean,reflect:!0})],De.prototype,"readonly",2),Tt([Ut({type:Boolean,reflect:!0})],De.prototype,"disabled",2),Tt([Ut()],De.prototype,"getSymbol",2),Tt([function(t){return (e,o)=>{const i="function"==typeof e?e:e[o];Object.assign(i,t);}}({passive:!0})],De.prototype,"handleTouchMove",1),Tt([se("hoverValue")],De.prototype,"handleHoverValueChange",1),Tt([se("isHovering")],De.prototype,"handleIsHoveringChange",1),De.define("sl-rating");var Oe=s`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Be=class extends Ht{constructor(){super(...arguments),this.formControlController=new Kt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new Jt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText="";}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleInput(){this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t);}handleClick(){this.checked=!this.checked,this.emit("sl-change");}handleFocus(){this.hasFocus=!0,this.emit("sl-focus");}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"));}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity();}handleDisabledChange(){this.formControlController.setValidity(!0);}click(){this.input.click();}focus(t){this.input.focus(t);}blur(){this.input.blur();}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return N`
      <div
        class=${ge({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${ge({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${xe(this.value)}
            .checked=${Ee(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Be.styles=[yt,Ae,Oe],Tt([Bt('input[type="checkbox"]')],Be.prototype,"input",2),Tt([Dt()],Be.prototype,"hasFocus",2),Tt([Ut()],Be.prototype,"title",2),Tt([Ut()],Be.prototype,"name",2),Tt([Ut()],Be.prototype,"value",2),Tt([Ut({reflect:!0})],Be.prototype,"size",2),Tt([Ut({type:Boolean,reflect:!0})],Be.prototype,"disabled",2),Tt([Ut({type:Boolean,reflect:!0})],Be.prototype,"checked",2),Tt([Se("checked")],Be.prototype,"defaultChecked",2),Tt([Ut({reflect:!0})],Be.prototype,"form",2),Tt([Ut({type:Boolean,reflect:!0})],Be.prototype,"required",2),Tt([Ut({attribute:"help-text"})],Be.prototype,"helpText",2),Tt([se("checked",{waitUntilFirstUpdate:!0})],Be.prototype,"handleCheckedChange",1),Tt([se("disabled",{waitUntilFirstUpdate:!0})],Be.prototype,"handleDisabledChange",1),Be.define("sl-switch");var He=s`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Ne=new WeakMap;function Ie(t){let e=Ne.get(t);return e||(e=window.getComputedStyle(t,null),Ne.set(t,e)),e}function Re(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1))return !1;if(t.hasAttribute("disabled"))return !1;if(t.closest("[inert]"))return !1;if("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))return !1;if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ie(t);return "hidden"!==e.visibility&&"none"!==e.display}(t))return !1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return !0;if(t.hasAttribute("tabindex"))return !0;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return !0;return !!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=Ie(t),{overflowY:o,overflowX:i}=e;return "scroll"===o||"scroll"===i||"auto"===o&&"auto"===i&&(t.scrollHeight>t.clientHeight&&"auto"===o||!(!(t.scrollWidth>t.clientWidth)||"auto"!==i))}(t)}function je(t){const e=new WeakMap,o=[];return function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]"))return;if(e.has(r))return;e.set(r,!0),!o.includes(r)&&Re(r)&&o.push(r),r instanceof HTMLSlotElement&&function(t,e){var o;return (null==(o=t.getRootNode({composed:!0}))?void 0:o.host)!==e}(r,t)&&r.assignedElements({flatten:!0}).forEach((t=>{i(t);})),null!==r.shadowRoot&&"open"===r.shadowRoot.mode&&i(r.shadowRoot);}for(const t of r.children)i(t);}(t),o.sort(((t,e)=>{const o=Number(t.getAttribute("tabindex"))||0;return (Number(e.getAttribute("tabindex"))||0)-o}))}function*qe(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*Mt(qe(t.shadowRoot.activeElement))));}var We=[],Ke=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus();},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const o=[...qe()].pop();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=je(this.element);let r=i.findIndex((t=>t===o));this.previousFocus=this.currentFocus;const s="forward"===this.tabDirection?1:-1;for(;;){r+s>=i.length?r=0:r+s<0?r=i.length-1:r+=s,this.previousFocus=this.currentFocus;const o=i[r];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(o&&this.possiblyHasTabbableChildren(o))return;t.preventDefault(),this.currentFocus=o,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const n=[...qe()];if(n.includes(this.currentFocus)||!n.includes(this.previousFocus))break}setTimeout((()=>this.checkFocus()));},this.handleKeyUp=()=>{this.tabDirection="forward";},this.element=t,this.elementsWithTabbableControls=["iframe"];}activate(){We.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp);}deactivate(){We=We.filter((t=>t!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp);}isActive(){return We[We.length-1]===this.element}activateExternal(){this.isExternalActivated=!0;}deactivateExternal(){this.isExternalActivated=!1;}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=je(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i="forward"===this.tabDirection?e:o;"function"==typeof(null==i?void 0:i.focus)&&(this.currentFocus=i,i.focus({preventScroll:!1}));}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Xe=new Set;function Ze(t){if(Xe.add(t),!document.body.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`);}}function Je(t){Xe.delete(t),0===Xe.size&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"));}var Ge=s`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Ye=class extends Ht{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1;}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleFocus(){this.hasFocus=!0,this.emit("sl-focus");}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation());}click(){this.button.click();}focus(t){this.button.focus(t);}blur(){this.button.blur();}render(){const t=!!this.href,e=t?_e`a`:_e`button`;return ke`
      <${e}
        part="base"
        class=${ge({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${xe(t?void 0:this.disabled)}
        type=${xe(t?void 0:"button")}
        href=${xe(t?this.href:void 0)}
        target=${xe(t?this.target:void 0)}
        download=${xe(t?this.download:void 0)}
        rel=${xe(t&&this.target?"noreferrer noopener":void 0)}
        role=${xe(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${xe(this.name)}
          library=${xe(this.library)}
          src=${xe(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Ye.styles=[yt,Ge],Ye.dependencies={"sl-icon":he},Tt([Bt(".icon-button")],Ye.prototype,"button",2),Tt([Dt()],Ye.prototype,"hasFocus",2),Tt([Ut()],Ye.prototype,"name",2),Tt([Ut()],Ye.prototype,"library",2),Tt([Ut()],Ye.prototype,"src",2),Tt([Ut()],Ye.prototype,"href",2),Tt([Ut()],Ye.prototype,"target",2),Tt([Ut()],Ye.prototype,"download",2),Tt([Ut()],Ye.prototype,"label",2),Tt([Ut({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);var Qe=new Map,to=new WeakMap;function eo(t,e){return "rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function oo(t,e){Qe.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e));}function io(t,e,o){const i=to.get(t);if(null==i?void 0:i[e])return eo(i[e],o.dir);const r=Qe.get(e);return r?eo(r,o.dir):{keyframes:[],options:{duration:0}}}function ro(t,e){return new Promise((o=>{t.addEventListener(e,(function i(r){r.target===t&&(t.removeEventListener(e,i),o());}));}))}function so(t,e,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,Vt(Et({},o),{duration:no()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0});}))}function no(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ao(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{t.cancel(),requestAnimationFrame(e);})))))}function lo(t){return t.charAt(0).toUpperCase()+t.slice(1)}var co=class extends Ht{constructor(){super(...arguments),this.hasSlotController=new Jt(this,"footer"),this.localize=new gt(this),this.modal=new Ke(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"));};}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ze(this)));}disconnectedCallback(){var t;super.disconnectedCallback(),Je(this),null==(t=this.closeWatcher)||t.destroy();}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=io(this,"drawer.denyClose",{dir:this.localize.dir()});so(this.panel,t.keyframes,t.options);}else this.hide();}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown);}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy();}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ze(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ao(this.drawer),ao(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","");}));const e=io(this,`drawer.show${lo(this.placement)}`,{dir:this.localize.dir()}),o=io(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([so(this.panel,e.keyframes,e.options),so(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Je(this)),await Promise.all([ao(this.drawer),ao(this.overlay)]);const t=io(this,`drawer.hide${lo(this.placement)}`,{dir:this.localize.dir()}),e=io(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([so(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0;})),so(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0;}))]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide");}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ze(this)),this.open&&this.contained&&(this.modal.deactivate(),Je(this));}async show(){if(!this.open)return this.open=!0,ro(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ro(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${ge({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${xe(this.noHeader?this.label:void 0)}
          aria-labelledby=${xe(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":N`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};co.styles=[yt,He],co.dependencies={"sl-icon-button":Ye},Tt([Bt(".drawer")],co.prototype,"drawer",2),Tt([Bt(".drawer__panel")],co.prototype,"panel",2),Tt([Bt(".drawer__overlay")],co.prototype,"overlay",2),Tt([Ut({type:Boolean,reflect:!0})],co.prototype,"open",2),Tt([Ut({reflect:!0})],co.prototype,"label",2),Tt([Ut({reflect:!0})],co.prototype,"placement",2),Tt([Ut({type:Boolean,reflect:!0})],co.prototype,"contained",2),Tt([Ut({attribute:"no-header",type:Boolean,reflect:!0})],co.prototype,"noHeader",2),Tt([se("open",{waitUntilFirstUpdate:!0})],co.prototype,"handleOpenChange",1),Tt([se("contained",{waitUntilFirstUpdate:!0})],co.prototype,"handleNoModalChange",1),oo("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),oo("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),oo("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),oo("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),oo("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),oo("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),oo("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),oo("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),oo("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),oo("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),oo("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),co.define("sl-drawer");var ho=s`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,uo=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),po=class extends Ht{constructor(){super(...arguments),this.hasSlotController=new Jt(this,"icon","suffix"),this.localize=new gt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0;}firstUpdated(){this.base.hidden=!this.open;}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration));}handleCloseClick(){this.hide();}handleMouseMove(){this.restartAutoHide();}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ao(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=io(this,"alert.show",{dir:this.localize.dir()});await so(this.base,t,e),this.emit("sl-after-show");}else {this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ao(this.base);const{keyframes:t,options:e}=io(this,"alert.hide",{dir:this.localize.dir()});await so(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide");}}handleDurationChange(){this.restartAutoHide();}async show(){if(!this.open)return this.open=!0,ro(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ro(this,"sl-after-hide")}async toast(){return new Promise((t=>{null===uo.parentElement&&document.body.append(uo),uo.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show();})),this.addEventListener("sl-after-hide",(()=>{uo.removeChild(this),t(),null===uo.querySelector("sl-alert")&&uo.remove();}),{once:!0});}))}render(){return N`
      <div
        part="base"
        class=${ge({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?N`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};po.styles=[yt,ho],po.dependencies={"sl-icon-button":Ye},Tt([Bt('[part~="base"]')],po.prototype,"base",2),Tt([Ut({type:Boolean,reflect:!0})],po.prototype,"open",2),Tt([Ut({type:Boolean,reflect:!0})],po.prototype,"closable",2),Tt([Ut({reflect:!0})],po.prototype,"variant",2),Tt([Ut({type:Number})],po.prototype,"duration",2),Tt([se("open",{waitUntilFirstUpdate:!0})],po.prototype,"handleOpenChange",1),Tt([se("duration")],po.prototype,"handleDurationChange",1),oo("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),oo("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),po.define("sl-alert");var bo=s`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,mo=class extends Ht{constructor(){super(...arguments),this.hasSlotController=new Jt(this,"footer"),this.localize=new gt(this),this.modal=new Ke(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"));};}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ze(this));}disconnectedCallback(){var t;super.disconnectedCallback(),this.modal.deactivate(),Je(this),null==(t=this.closeWatcher)||t.destroy();}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=io(this,"dialog.denyClose",{dir:this.localize.dir()});so(this.panel,t.keyframes,t.options);}else this.hide();}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown);}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown);}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ze(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ao(this.dialog),ao(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","");}));const e=io(this,"dialog.show",{dir:this.localize.dir()}),o=io(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([so(this.panel,e.keyframes,e.options),so(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ao(this.dialog),ao(this.overlay)]);const t=io(this,"dialog.hide",{dir:this.localize.dir()}),e=io(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([so(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=!0;})),so(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=!0;}))]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Je(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide");}}async show(){if(!this.open)return this.open=!0,ro(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ro(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${ge({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${xe(this.noHeader?this.label:void 0)}
          aria-labelledby=${xe(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":N`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};mo.styles=[yt,bo],mo.dependencies={"sl-icon-button":Ye},Tt([Bt(".dialog")],mo.prototype,"dialog",2),Tt([Bt(".dialog__panel")],mo.prototype,"panel",2),Tt([Bt(".dialog__overlay")],mo.prototype,"overlay",2),Tt([Ut({type:Boolean,reflect:!0})],mo.prototype,"open",2),Tt([Ut({reflect:!0})],mo.prototype,"label",2),Tt([Ut({attribute:"no-header",type:Boolean,reflect:!0})],mo.prototype,"noHeader",2),Tt([se("open",{waitUntilFirstUpdate:!0})],mo.prototype,"handleOpenChange",1),oo("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),oo("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),oo("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),oo("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),oo("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),mo.define("sl-dialog"),Yt("/static/shoelace");}();

  class Logging {
      static log(val1, val2) {
          let caller = log.caller().name;
          console.log(val1, val2, caller);
      }
     static dev(val1, val2) {
         console.log(val1, val2);
     }

      static debug(val1, val2) {
          console.info(val1, val2);
      }

     static warn(val1, val2) {
         if (val2)
             console.warn(val1, val2);
         else
             console.warn(val1);
     }

     static error(val1, val2) {
         if (!val2)
             console.error("Logging error:", val1);
         else
             console.error(val1, val2);
         //console.error(val2)
     }
  }

  let DISCONNECTED = "DISCONNECTED";
  let CONNECTED = "CONNECTED";
  let CONNECTING = "CONNECTING";
  let FAILED = "FAILED";
  let WAITING = "WAITING";
  let RECONNECT = "RECONNECT";

  const TTL = 2500;
  const MAX_TRIES = 5;

  class Socket {

  	static resources = {}
  	static defaultSocket = undefined

      constructor(url, targets={}, ttl = 2500) {
  		// 0. Init state
          this.url = url;
  		this.targets = targets;
  		this.listeners = targets;
  		this.state = "INITIAL";
  		this.connection = undefined;
  		this.websocket = undefined;
  		this.lrh = Date.now(); 				// Last received heartbeat
  		this.ttl = ttl | TTL;						// Time to live
  		this.retries = 0;
  		this.isDisabled = true;
  		this.queue = [];
  		// 1. Bindings
  		this.watchdog = this.watchdog.bind(this);
  		this.onMessage = this.onMessage.bind(this);
  		this.sendMessage = this.sendMessage.bind(this);
  		this.heartbeat = this.heartbeat.bind(this);
  		this.onOpen = this.onOpen.bind(this);
  		this.onClose = this.onClose.bind(this);
  		this.connect = this.connect.bind(this);
  		this.disconnect = this.disconnect.bind(this);
  		this.reconnect = this.reconnect.bind(this);
  		this.disable = this.disable.bind(this);
  		this.enable = this.enable.bind(this);

  		// 2. Log
  		Socket.register(url, this);
  		this.addTarget("heartbeat", this.heartbeat);
  		// 3. Connect and set watchdog
  		this.connect(url);
  		Socket.defaultSocket = this;
      }

  	/* ---------------------------- */
  	/*     STAY ALIVE FUNCTIONS     */
  	/* ---------------------------- */
  	/**
  	 *  Resets the time of the last received heartbeat (lrh) and sends a heartbeat
  	 *
  	 * @param {string} [msg=true] - The message to include in the heartbeat
  	 */
  	heartbeat(msg=true){
  		this.lrh = Date.now();
  		this.sendMessage("heartbeat", msg);
  	}

  	/**
  	 * Run this function to verify and update the state of the connection
  	 * with the distant machine
  	 *
  	 * States transitions are:
  	 * [CONNECTING] -> [WAITING], [CONNECTED] -> [WAITING],
  	 * [CONNECTING] -> [CONNECTED], [CONNECTED] -> [WAITING]
  	 * [FAILED] -> reconnect(), [WAITING] -> reconnect()
  	 *
  	 */
  	watchdog() {
    console.warn("SOCKET STATE", this.state)
  		let elapsed = Date.now() - this.lrh;
  		// 1. If connecting, set to WAITING
  		if (this.state === CONNECTING || this.state === RECONNECT){
  			Logging.warn("Socket", "CONNECTING");
        console.warn("SETTING TO WAITING")
  			this.state = WAITING;
  			this.heartbeat();
  		}
  		// If connection faslied, try to reconnect
  		else if (this.state === FAILED){
  			Logging.error("Socket", "socket failed");
  			this.reconnect();
  		}
  		// If client was already waiting and ttl is up, try to reconnect
  		else if (this.state === WAITING && elapsed > 2*this.ttl){
  			this.disable();
  			this.disconnect();
  			// 1.1 Reset socket
  			Logging.error("Socket", "Socket is disconnected. Will close the socket");
  			this.interval = setInterval(()=> {
  				Logging.error("Socket", "try to reconnect after disconnection");
  				this.reconnect();	
  			} , 60000);
  			
  		}
  		// If ttl is up, set to WAITING
  		else if (elapsed > this.ttl) {
  			this.sendMessage("heartbeat", false);
  			this.state = WAITING;
  			Logging.debug("watchdog updated state, elapsed time: " +elapsed, WAITING);
  			elapsed = Date.now();
  		}
  		// Update interface
  		if (this.state === CONNECTED){
  			this.enable();
  		}
  	}
  	
  	disable() {
  		// Disable interface
  		if (!this.isDisabled) {
  			for (let key in this.targets){
  				if (parseInt(key))
  					this.targets[key]("disable");
  			}
  		}
  		// Update state
  		this.isDisabled = true;
  	}
  	
  	enable() {
  		// Enable interface
  		if (this.isDisabled) {
  			for (let key in this.targets){
  				if (parseInt(key))
  					this.targets[key]("enable");
  			}
  		}
  		// Update state
  		this.isDisabled = false;
  	}

  	/* ---------------------------- */
  	/*    CONNECTIVITY FUNCTIONS    */
  	/* ---------------------------- */
  	/**
  	 * Connects the object to the distant machine at "url" via this.websocket
  	 *
  	 * @param url
  	 * @returns {Socket}
  	 */
  	connect(url, callback=()=>{}){
  		console.info("Connecting websocket: ws://" + url);
  		this.websocket = undefined;
  		this.state = CONNECTING;
  		this.connectCallback = callback;

  		try {
  			this.websocket = new WebSocket("ws://" + url);
  			this.websocket.onopen = this.onOpen;
  			this.websocket.onclose = this.onClose;
  			this.websocket.onmessage = this.onMessage;
  			this.websocket.onerror = function(event) {
  									let reconnectButton = `<button onclick="()=>connectTo('${url}')" class='btn center reconnect'>Reconnection</button>`;
  									//window.error("WebSocket error observed");
  								};
  		} catch (e) {
  			Logging.error("Erreur sur le websocket: ", e);
  			this.state = FAILED;
  		}
  		return this
  	}

  	/**
  	 * Reconnects websocket on timeout
  	 *
  	 * Keeps the interval, closes the websocket and reopens a new one
  	 */
  	reconnect(){
    console.warn("IN RECNNECT()")
  		if (this.retries > MAX_TRIES)
  			this.disconnect();
  		else {
  			this.retries += 1;
  			if (this.websocket)
  				this.websocket.close();
  			this.connect(this.url, this.connectCallback);
  			this.state = RECONNECT;
  		}
  	}

  	/**
  	 * Close connection and clean up socket
  	 */
  	disconnect(){
    console.warn("IN DISCONNECT()")
  		if (this.websocket.readystate === 1) {
  			websocket.close();
  		}
  		if (this.interval) {
  			clearInterval(this.interval);
  			this.interval = undefined;
  		}
  		Logging.dev("Websocket successfully disconnected");
  		this.state = DISCONNECTED;
  		this.retries = 0;
  	}

      static baseURL(action) {
          return "/api/";
      }

      static rpc(method_name, args={}, kwargs={}, onSuccess=()=>{}) {
          let data= JSON.stringify({method_name: method_name, args:args, kwargs:kwargs});
          HTTP.post('rpc', data, onSuccess, ()=>{alert("FAIL");});

      }

  	/**
  	 * Register a created socket in the Socket.resources registry
  	 * @param {string} name - The name to register the socket under
  	 * @param {Socket} socket - The socket to be registered
  	 */
  	static register(name, socket){
  		if (Socket.resources[name])
  			Logging.warn("Socket", "Overwriting resource in registration");
  		Socket.resources[name] = socket;
  	}

  	/**
  	 * Unregister a socket from the Socket.resources
  	 * @param {string} name - The name of the socket to remove
  	 */
  	static unregister(name) {
  		Socket.resources[name].disconnect();
  		delete Socket.resources[name];
  	}

  	/**
  	 * Register a target for this socket
  	 * @param {string} name - Target function name
  	 * @param {function} fn - callable to be registered
  	 */
  	addTarget(name, fn) {
  		this.targets[name] = fn;
  		return this
  	}

  	setTarget(name, fn) {
  		this.targets[name] = fn;
  		return this
  	}

  	removeTarget(name) {
  		delete this.targets[name];
  		return this
  	}

  	/* ------------------------------------------ */
  	/*              Websocket functions           */
  	/* ------------------------------------------ */

  	/**
  	 * Function parsing and dispatching messages
  	 * @param msg
  	 */
  	onMessage(msg){
      			console.warn("SOCKET RECEIVED:\n ",msg.data);

  		let queueMsg;
  		let queueKey = undefined;
  		// 0. Show module response and update state
  		let data = undefined;
  		if (msg.data !== `{"heartbeat": "heartbeat"}` && msg.data !== `{"heartbeat":"true"}`) {
  			Logging.debug("SOCKET RECEIVED:\n ",msg.data);
  		}
  		if (this.state !== CONNECTED) {
  			this.state = CONNECTED;
  		}
  		if (this.queue.length > 0){
  			for (let i = 0; i < this.queue.length; i++){
  				// Copy str to variable
  				queueKey = `${this.queue[i].key}`;
  				queueMsg = `${this.queue[i].msg}`;
  				// Iteratively send messages
  				setTimeout(()=>this.sendMessage(queueKey, queueMsg), i*5);
  			}
  			this.queue = [];
  		}
  		// 1. Take appropriate action
  		try {
  			data = JSON.parse(msg.data);
  		} catch (e) {
  			Logging.error("Error while validating in Socket.onMessage", e);
  		}
  		let keys = Object.keys(data);
  		let key = keys[0];
  		// 2. Validate target
  		if (key !== "states" && !this.targets.hasOwnProperty(keys)) {
  			Logging.warn(Object.keys(this.targets));
  			Logging.error("Functor", "No target in socket for:" + key );
  			//throw new Error("Socket has no target " + data.target )
  		}
  		// 2.1 Update last received heartbeat
  		// logging.debug("Watchdog update")
  		this.lrh = Date.now();
  		// 3. Run target
  		if (key === "states"){
  			data[key].map((x) => {
  				// Make sure the target exists
  				if (!this.targets.hasOwnProperty(x.hash)){
  					console.error("Socket has no target\n", x.hash);
  					//throw new Error("Socket has no target " + x.hash )
  				}
  				else {
  					// Execute the target
  					this.targets[x.hash](x.value);
  				}
  			});
  		}
  		else {
  			this.targets[key](data[key]);
  		}
  	}

  	/**
  	 * Post information on client socket
  	 * @param key - The name of the client function
  	 * @param msg - Params for the client
  	 */
  	sendMessage(key, msg) {
  		// 1. Prepare data to be sent
  		let data = {};
  		data[key] = msg;
      console.warn("SOCKET sendMessage()\n", data)
  		// 2. If not connected, cue the message
  		if (this.websocket.readyState !== 1){
  			this.queue.push({key:key, msg:msg});
  			Logging.debug("Cueing message", data);
  			//this.websocket.send(JSON.stringify({heartbeat: true}))
  			return
  		}
  		// If not heartbeat, show data
  		if (key !== "heartbeat"){
  			Logging.debug("SOCKET SENDING:\n", data);
  		}
  		//this.websocket.send("{\"heartbeat\": \"heartbeat\"})
  		//this.websocket.send(JSON.stringify({...data}))
  		this.websocket.send(JSON.stringify(data));

  		return this
  	}

  	/**
  	 * Function running when a websocket is opened
  	 *
  	 * Currently only logs to dev
  	 * @param event
  	 */
  	onOpen(event) {
  		if (this.websocket.readyState == 1);
  		this.state = CONNECTING;
  		if (this.interval)
  			clearInterval(this.interval);
  		this.interval = window.setInterval(this.watchdog, this.ttl);
  		this.heartbeat();
  		window.success("Websocket connection established");
  		this.connectCallback();
  		this.sendMessage("allStatesRequest", true);
  	}

  	/**
  	 *
  	 * Function running when a websocket is closed
  	 * @param event
  	 */
  	onClose(event) {
  		Logging.warn('Connection closed', event);
  		
  		
  		this.disable();

  		if (event.code == 1000){
  			window.warn("Websocket closed normally \n" + event);
  		} else {
  			console.warn(this.state);
  			console.error("Websocket closed abnormally with code "+ event.code );
  		}
  		this.state = DISCONNECTED;
  	}


  }

  window.WS = Socket;

  //import "./hw-section.js"

  let $template = document.createElement("template");

  $template.innerHTML = `
`;

  class ConnectedElement extends HTMLElement {
      constructor() {
          super();
          this._descriptor = {};
          this._value = {};
          this.url = this.getAttribute('url');
          this.configurable = this.getAttribute('configurable');
          // Connect to the socket
          // this.socket = Socket.resources[this.url]
          this.socket = Socket.defaultSocket;

          this.onclick = this.onclick.bind(this);
          this.onchange = this.onchange.bind(this);
          this.onsubmit = this.onsubmit.bind(this);
          this.update = this.update.bind(this);
          this.render = this.render.bind(this);
      }

      // ------------------ Callback Methods ------------------ //
      update(val){
          if (val === "disable")
              this.disable();
          else if (val === "enable")
              this.enable();
          else
              this.value = val;
      }

      describe(val){
          this.descriptor = val;
      }

      onclick(e){
          throw new Error("ConnectedElement interface does not implement onclick")
      }

      onchange(e){
          throw new Error("ConnectedElement interface does not implement onchange")
      }

      onsubmit(e){
          throw new Error("ConnectedElement interface does not implement onsubmit")
      }

       disable() {
  		     if (!this.parentNode.querySelector(".overlay")){
  		  	     let $parent = this.parentNode;
  		  	     let $overlay = document.createElement("div");
  		  	     $parent.style.position = "relative";
  		  	     $overlay.classList.add("overlay");
  		  	     $parent.appendChild($overlay);
  		     }
           //$child.parentNode.insertBefore($overlay, $child)
           //$overlay.appendChild($child)
       }

       enable() {
          console.log("Re-enbaling interface");
  		   if (this.parentNode.querySelector(".overlay")) {
  			   this.parentNode.querySelector(".overlay").remove();
  		   }
       }
      // ----------- Properties Getters and setters ------------ //

      set value(val){
          console.warn("Setting value", this._descriptor.hash, val);
          this._value = val;
          this.render();
      }

      get value(){
          return this._value
      }

      set descriptor(val){
          // The rerendering nullify any state changes that might have occured during the lifecycle
          // Might create some problems that need to be solved
          if (this._descriptor !== undefined && this._descriptor.hash){
              Socket.defaultSocket.removeTarget(this._descriptor.hash);
          }
          this._descriptor = val;
          //this.socket.setTarget(this._descriptor.hash, this.update)
          if (this._descriptor.hash) {
              console.warn("Setting descriptor", val.hash);
              Socket.defaultSocket.setTarget(this._descriptor.hash, this.update);
          }
          else {
              console.warn("Setting hashless descriptor", val.name);
          }
          this.render();
      }

      get descriptor(){
          return this._descriptor
      }

      get children() {
          let children = this.descriptor.children;
          let $children = [];
          console.log(this.descriptor);
          console.log(this.querySelector('.children'));

          for (let child of children) {
              // Create children element
              let $child = document.createElement("div");
              // Render child to HTML node and set value
              $child.innerHTML = `<${child.component}></${child.component}>`;
              $child.firstChild.descriptor = child;
              // Add to children array
              $children.push($child);
          }

          // Append children to DOM
          return $children
      }

      // ------------------ Lifecycle methods ------------------ //

      connectedCallback() {
          
          if (this._descriptor.hash) {
              Socket.defaultSocket.sendMessage("get", this._descriptor.hash);
          }
      }

      render() {
          throw new Error("Connected element interface does not implement render")
      }
  }

  //customElements.define('hw-module', HwModule);

  const template$f = document.createElement('template');

  // Creates a blinker effect
  template$f.innerHTML = `
    <style>
        .dot {
            height: 2rem;
            width: 2rem;
            margin: 0.5rem 1rem;
            background-color: #5d5d5d;
            border-radius: 50%;
            display: inline;
            transition: background-color 0.3s ease-in, box-shadow 0.5s ease-in;
        }
        .gon.dot {
            background-color: #4CAF50;
            box-shadow: 0 0 1rem #87ff88;
        }
       .label {
           display: inline;
       }
        
    </style>
    <div class="card">
        <span class="label">Indicator</span>
        <span class="dot"></span>
    </div>
    `;

  class RxIndicatorGreen extends ConnectedElement {
      constructor() {
          super();
          this._value = true;
          this.update = this.update.bind(this);
          this.render = this.render.bind(this);
      }

      render() {
          let $template = template$f.content.cloneNode(true);
          let $indicator = $template.querySelector(".dot");
          // 1. Set label for switch
          let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
          $template.querySelector(".label").innerText = name;
          // 2. Set checked value for switch
          //$switch.checked = this._value
          if (this.value) {
              // If the value is truthy, keep the indicator lit
              $indicator.classList.add("gon");
          } else {
              // If the value is falsy, turn off the indicator
              $indicator.classList.remove("gon");
          }
          // Clean component and append template
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
          this.appendChild($template);
      }
  }

  window.customElements.define('rx-greenlight', RxIndicatorGreen);

  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/switch/switch.js';
  const template$e = document.createElement('template');

  // Creates a blinker effect
  template$e.innerHTML = `
    <style>
        .dot {
            height: 2rem;
            width: 2rem;
            margin: 0.5rem 1rem;
            background-color: #5d5d5d;
            border-radius: 50%;
            display: inline;
            transition: background-color 0.3s ease-in, box-shadow 0.5s ease-in;
        }
        .ron.dot {
            background-color: #ff0000;
            box-shadow: 0 0 1rem #ff0000;
        }
       .label {
           display: inline;
       }
        
    </style>
    <div class="card">
        <span class="label">Indicator</span>
        <span class="dot"></span>
    </div>
    `;

  class RxIndicatorRed extends ConnectedElement {
      constructor() {
          super();
          this._value = true;
          this.update = this.update.bind(this);
          this.render = this.render.bind(this);
      }

      render() {
          let $template = template$e.content.cloneNode(true);
          let $indicator = $template.querySelector(".dot");
          // 1. Set label for switch
          let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
          $template.querySelector(".label").innerText = name;
          // 2. Set checked value for switch
          //$switch.checked = this._value
          if (this.value) {
              // If the value is truthy, keep the indicator lit
          $indicator.classList.add("ron");
          } else {
          // If the value is falsy, turn off the indicator
          $indicator.classList.remove("ron");
          }
          // Clean component and append template
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
          this.appendChild($template);
      }
  }

  window.customElements.define('rx-redlight', RxIndicatorRed);

  const template$d = document.createElement('template');

  // Creates a blinker effect
  template$d.innerHTML = `
    <style>
        .dot {
            height: 2rem;
            width: 2rem;
            margin: 0.5rem 1rem;
            background-color: #5d5d5d;
            border-radius: 50%;
            display: inline;
            transition: background-color 0.3s ease-in, box-shadow 0.5s ease-in;
        }
        .ron.dot {
            background-color: #ff0000;
            box-shadow: 0 0 1rem #ff0000;
        }
       .label {
           display: inline;
       }
        
    </style>
    <div class="card">
        <span class="label">Indicator</span>
        <span class="dot"></span>
    </div>
    `;

  class RxNoShow extends ConnectedElement {
      constructor() {
          super();
          this._value = true;
          this.update = this.update.bind(this);
          this.render = this.render.bind(this);
      }

      render() {
          let $template = template$d.content.cloneNode(true);
          $template.querySelector(".dot");
          // 1. Set label for switch
          let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
          $template.querySelector(".label").innerText = name;
          // Clean component and append template
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
      }
  }

  window.customElements.define('rx-no-show', RxNoShow);

  const template$c = document.createElement('template');

  template$c.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <span>
            <sl-switch></sl-switch>
            : <span class="label">A label</span>
        </span>
    </div>
    `;

  class BoolInput extends HTMLElement {
    constructor() {
      super();
      this._value = {};
    }

    set value(val){
      console.warn("bool-input set value", val);
      this._value = val;
      this.render();
    }

    connectedCallback() {
        this.render();
    }

    onclick(){
        // TODO: Add onclick event
    }

    render() {
        let $template = template$c.content.cloneNode(true);
        $template.querySelector(".label").innerText = this._value.name;
        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
    }
  }

  window.customElements.define('bool-input', BoolInput);

  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/switch/switch.js';
  const template$b = document.createElement('template');

  template$b.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <span>
            <sl-switch></sl-switch>
            <span class="label">A label</span>
        </span>
    </div>
    `;

  class TxBool extends ConnectedElement {
    constructor() {
        super();
        //this.onclick = this.onclick.bind(this)
        //this.update = this.update.bind(this)
        //this.render = this.render.bind(this)
    }

    onclick(e){
        Logging.debug("BoolInput sl-change", e);
        Logging.warn("BoolInput hash|value: ", this._value);
        //this.define(this._value)
        let hash = this._descriptor.hash;
        let value = e.target.checked;
        Socket.defaultSocket.sendMessage("states", [{hash:hash, value:value}]);
    }

    render() {
        let $template = template$b.content.cloneNode(true);
        let $switch = $template.querySelector("sl-switch");
        let label = this.descriptor.name[0].toUpperCase() + this.descriptor.name.slice(1);
        $template.querySelector(".label").innerText = label;
        // Add event listener
        $switch.addEventListener("sl-change", this.onclick);
        // Reset switch value to descriptor value
        $switch.checked = !!this._value;
        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
    }
  }

  window.customElements.define('tx-bool', TxBool);

  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/switch/switch.js';
  const template$a = document.createElement('template');

  template$a.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <span>
            <span class="label">A label</span>: 
            <sl-switch disabled></sl-switch>
        </span>
    </div>
    `;

  class RxBool extends ConnectedElement {
      constructor() {
          super();
          this._value = false;
          this.update = this.update.bind(this);
          this.render = this.render.bind(this);
      }


      render() {
          let $template = template$a.content.cloneNode(true);
          let $switch = $template.querySelector("sl-switch");
          // 1. Set label for switch
          let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
          $template.querySelector(".label").innerText = name;
          // 2. Set checked value for switch
          $switch.checked = this._value;
          // Clean component and append template
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
          this.appendChild($template);
      }
  }

  window.customElements.define('rx-bool', RxBool);

  const template$9 = document.createElement('template');

  template$9.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
            <span class="label">A label</span>:
            <div style="display:flex; justify-content:space-around">
            <sl-input style="max-width: 8rem" type="number"></sl-input>
            <sl-button type="primary">Go</sl-button>
            </div>
    </div>
    `;

  class TxUint extends ConnectedElement {
      constructor() {
          super();
      }

      onchange(e){
          let hash = this._descriptor.hash;
          this.value = e.target.value;
          Socket.defaultSocket.sendMessage("states", [{hash:hash, value:this.value}]);
      }

      onsubmit(){
          //console.info("Tx-uint onsubmit target", e.target.value)
          Socket.defaultSocket.sendMessage("states", [{hash:this._descriptor.hash, value:this.value}]);
      }

      render() {
          // 1. Select components
          let $template = template$9.content.cloneNode(true);
          let $input = $template.querySelector("sl-input");
          let $button = $template.querySelector("sl-button");
          // 2. Set label and event listener
          $template.querySelector(".label").innerText = this._descriptor.name;
          $input.addEventListener("sl-change", this.onchange);
          $button.addEventListener("click", this.onsubmit);
          $input.value = this.value;
          // Clean component and append template
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
          this.appendChild($template);
      }
  }

  window.customElements.define('tx-uint', TxUint);

  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/switch/switch.js';
  const template$8 = document.createElement('template');

  template$8.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <span>
            <span class="label">A label</span>:<br>
            <sl-input disabled pill type="number"></sl-input>
        </span>
    </div>
    `;

  class RxUint extends ConnectedElement {
      constructor() {
          super();
          this._value = false;
          this.update = this.update.bind(this);
          this.render = this.render.bind(this);
      }


      render() {
          let $template = template$8.content.cloneNode(true);
          let $input = $template.querySelector("sl-input");
          // 1. Set label for switch
          $template.querySelector(".label").innerText = this._descriptor.name;
          // 2. Set checked value for switch
          $input.value = this._value;
          // Clean component and append template
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
          this.appendChild($template);
      }
  }

  window.customElements.define('rx-uint', RxUint);

  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/switch/switch.js';
  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/button/button.js';
  const template$7 = document.createElement('template');

  template$7.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <sl-button></sl-button>
    </div>
    `;

  class TxButton extends ConnectedElement {
    constructor() {
        super();
        this.onclick = this.onclick.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    onclick(e){
        Logging.debug("BoolInput sl-change", e);
        Logging.warn("BoolInput hash|value: ", this._value);
        //this.define(this._value)
        let hash = this._descriptor.hash;
        Socket.defaultSocket.sendMessage("states", [{hash:hash, value:true}]);
    }

    render() {
        let $template = template$7.content.cloneNode(true);
        let $button = $template.querySelector("sl-button");
        let label = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        $button.addEventListener("click", this.onclick);
        $button.innerText = label;
        $button.variant = "primary";

        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
    }
  }

  window.customElements.define('tx-button', TxButton);

  const template$6 = document.createElement('template');

  template$6.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <h2>Section title</h2>
        <div class="details row">
           
        </div>
        <div class="children">
        </div>
    
    </div>
    `;

  class HwDock extends HTMLElement {
      constructor() {
          super();
          this._descriptor = {name:"", type:"", component:"", children:[]};
          this.render();
      }

      set descriptor(val){
          this._descriptor = val;
          this.render();
      }
      set value(val){
          this._value = val;
          this.render();
      }

    get children(){
        let $children = [];
        for (let child of this._descriptor.children){
            if (customElements.get(child.component) === undefined){
                  console.error(`Component ${child.component} not found`);
                  continue
            }
            let $child = document.createElement("div", {is:child.component});
            $child.innerHTML = `<${child.component}></${child.component}>`;
            $child.firstChild.descriptor = child;
            $children.push($child);
        }
        return $children
    }

    connectedCallback() {
    }

    render(){
        let $template = template$6.content.cloneNode(true);
        // Set values
        $template.querySelector("h2").innerText = this._descriptor.name;
        //$template.querySelector(".hardware").innerText = this._descriptor.hardware
        //$template.querySelector(".type").innerText = this._descriptor.type
        // Append children
        this.children.map((child) => {
            $template.querySelector(".children").appendChild(child);
        });
        // Clean component and append template
        while(this.firstChild){
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
    }
  }

  window.customElements.define('hw-dock', HwDock);

  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/switch/switch.js';
  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/button/button.js';
  const template$5 = document.createElement('template');

  template$5.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <sl-button></sl-button>
    </div>
    `;

  class TxButtonHold extends ConnectedElement {
    constructor() {
        super();
        this.onclick = this.onclick.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.onmousedown = this.onmousedown.bind(this);
        this.onmouseup = this.onmouseup.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onpointerup = this.onPointerUp.bind(this);
        this.onPointerDown = this.onPointerDown.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
    }

    onmousedown(e){
        Logging.debug("BoolInput sl-change", e);
        Logging.warn("BoolInput hash|value: ", this._value);
        //this.define(this._value)
        console.log("onmousedown descriptor");
        console.log(this._descriptor);

        let hash = this._descriptor.hash;
        Socket.defaultSocket.sendMessage("states", [{hash:hash, value:true}]);
    }
    onmouseup(e){
       Logging.debug("BoolInput sl-change", e);
       Logging.warn("BoolInput hash|value: ", this._value);
       //this.define(this._value)
       let hash = this._descriptor.hash;
       Socket.defaultSocket.sendMessage("states", [{hash:hash, value:false}]);
       //alert("Mouse up");
    }

    
    render() {
        let $template = template$5.content.cloneNode(true);
        let $button = $template.querySelector("sl-button");
        let label = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        $button.addEventListener("mousedown", this.onmousedown);
        $button.addEventListener("mouseup", this.onmouseup);
        $button.addEventListener("touchStart", this.onmousedown, {passive:true});
        $button.addEventListener("touchEnd", this.onmouseup, {passive:true});
       // $button.addEventListener("touchmove", this.onTouchMove, {passive:true});
        $button.addEventListener("pointerup", this.onmouseup, {passive:true});
        $button.addEventListener("pointerdown", this.onmousedown, {passive:true});   

        $button.innerText = label;
        $button.variant = "primary";

        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
    }
  }

  window.customElements.define('tx-button-hold', TxButtonHold);

  const template$4 = document.createElement('template');

  template$4.innerHTML = `
    <style>
        @import url("static/css/style.css");
        .hw-section {
            flex-wrap: wrap;
        }
        .hidden {
            visibility: hidden;
            height: 0;
            width:0;
            margin: 0;
            padding: 0;
        }
    </style>
    <div class="hw-section">
        <button id="toggle-visibility">Toggle</button>
        <div class="card">
            <h2>Section title</h2>
            <div class="details row"></div>
            <div class="children"></div>
        </div>
    </div>
`;

  class HwSection extends HTMLElement {
      constructor() {
          super();
          this._descriptor = { name: "", type: "", component: "", children: [] };
          this._isVisible = true;
      }

      set descriptor(val) {
          this._descriptor = val;
          this.render();
      }

      set value(val) {
          this._value = val;
          this.render();
      }

      get children() {
          let $children = [];
          for (let child of this._descriptor.children) {
              if (customElements.get(child.component) === undefined) {
                  console.error(`Component ${child.component} not found`);
                  continue;
              }
              let $child = document.createElement("div", { is: child.component });
              $child.innerHTML = `<${child.component}></${child.component}>`;
              $child.firstChild.descriptor = child;
              $children.push($child);
          }
          return $children;
      }

      connectedCallback() {
          const toggleButton = this.querySelector("#toggle-visibility");
          if (toggleButton) {
              toggleButton.addEventListener('click', () => this.toggleVisibility());
          }
      }

      toggleVisibility() {
          this._isVisible = !this._isVisible;
          this.updateVisibility();
      }

      updateVisibility() {
          const card = this.querySelector('.card');
          if (card) {
              if (this._isVisible) {
                  card.classList.remove('hidden');
              } else {
                  card.classList.add('hidden');
              }
          }
      }

      render() {
          // Clean component and append template
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
          let $template = template$4.content.cloneNode(true);
          // Set values
          $template.querySelector("h2").innerText = this._descriptor.name;
          // Append children
          this.children.forEach((child) => {
              $template.querySelector(".children").appendChild(child);
          });
          this.appendChild($template);
          // Apply the hidden class if necessary
          this.updateVisibility();
      }
  }

  window.customElements.define('hw-section', HwSection);

  Object.defineProperty( Date.prototype,
      'toStringDM', {value:
              (date) => {
                  return date.getDate() + '-' + date.getMonth();
              }
      });

  Object.defineProperty( Date.prototype,
      'toStringDMY', {value:
              (date) => {
                  return date.getDate() + '-' + date.getMonth() +'-' + date.getFullYear();
              }
      });

  Object.defineProperty(Date.prototype, 'timeNow', {value: getCurrentTime});

  function getCurrentTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    if (minute < 10)
        minute = "0" + minute;
    if (hour < 10)
        hour = "0" + hour;
    return hour + ":" + minute;
  }

  //import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/alert/alert.js';
  //import '@shoelace-style/shoelace/dist/components/alert/alert.js';
  //import "../dist/shoelace-shoelace.ace.ace.bundle.js";

  const template$3 = document.createElement('template');
  template$3.innerHTML = `
     <style>
       @import url("static/css/style.css")
     </style>
      
     <div class="alert-toast">
    </div>
`;

  class HwNotification extends HTMLElement {
      constructor() {
          super();
          // Create a div element to represent the card
          this.appendChild(template$3.content.cloneNode(true));
          this.socket = this.getAttribute('socket');
          this.url = this.getAttribute('url');
          // Bind functions
          this.notify = this.notify.bind(this);
          this.error = this.error.bind(this);
          this.warn = this.warn.bind(this);
          this.render = this.render.bind(this);
          // Connect to the socket
          window.notify = this.notify;
          window.error = this.error;
          window.warn = this.warn;
          window.success = this.success;
      }


     // set socket(val){
        //  this._socket = val
        //  val.addTarget("notification", this.notify)
     // }
      connectedCallback() {
          // Get the JSON URL from the "url" parameter
          if (Socket.defaultSocket){
              Socket.defaultSocket.setTarget("notification", this.notify);
          } else {
              console.warn("No default socket when trying to register hw-notification");
          }
      }

      escapeHtml(html) {
          const div = document.createElement('div');
          div.textContent = html;
          return div.innerHTML;
      }

      error(message, duration=7200000){
          let msg = {type:"error", name:"Error", desc:message};
          let variant = "danger";
          let icon = "exclamation-circle";
          msg.desc = msg.desc +  " at " + getCurrentTime();
          this.notify(msg, variant, icon, duration);
      }

      warn(message, duration=5000){
          let msg = {type:"warning", name:"Warning", desc:message};
          console.info("Warning notification:\n", message);
          let variant = "warning";
          let icon = "exclamation-triangle";
          this.notify(msg, variant, icon, duration);
      }

      success(message, duration=2000){
          let msg = {type:"success", name:"Success", desc:message};
          let variant = "success";
          let icon = "check-circle";
          this.notify(msg, variant, icon, duration);
      }
      // Custom function to emit toast notifications
      notify(message, variant = 'primary', icon = 'info-circle', duration = 10000) {
          switch (message["type"]) {
              case "error":
              case "danger":
                  variant = "danger";
                  icon = "exclamation-circle";
                  duration = 7200000;
                  break;
              case "warning":
                  variant = "warning";
                  icon = "exclamation-triangle";
                  duration = 99000;
                  break;
              case "info":
              case "primary":
                  variant = "primary";
                  icon = "info-circle";
                  break;
              case "success":
                  variant = "success";
                  icon = "check-circle";
                  duration = 5000;
                  break;
          }

          const $alert = Object.assign(document.createElement('sl-alert'), {
              variant,
              closable: true,
              duration: duration,
              innerHTML: `
                <sl-icon name="${icon}" slot="icon"></sl-icon>
                <b> ${this.escapeHtml(message["name"])} </b>
                <br>
                ${this.escapeHtml(message["desc"])}
            `
          });

        document.body.append($alert);
        $alert.toast();
        return
      }

      render(){
      }

  }

  customElements.define('hw-notification', HwNotification);

  const template$2 = document.createElement('template');

  template$2.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div style="display:none">
        <h4></h4>
        <span class="hardware"></span>
        <div class="children">
        </div>
    </div>
    `;

  class NoShow extends ConnectedElement {
      constructor() {
          super();
          this._descriptor = {name:"", type:"", component:"", children:[], variant:""};
      }

    get children(){
        let $children = [];
        if (this._descriptor.children){
          console.error("B4 create element children")
          for (let child of this._descriptor.children){
                let $child = document.createElement("div", {is:child.component});
                $child.innerHTML = `<${child.component}></${child.component}>`;
                $child.firstChild.descriptor = child;
                $children.push($child);
            }
            console.error("AFTER create element children")

        }
        return $children
    }


    render(){
        let $template = template$2.content.cloneNode(true);
        // Depending on variant, set values
        if (this._descriptor.children)
        console.error("B4 create element children im remder")
        this.children.map((child) => {
            $template.querySelector(".children").appendChild(child);
        });
        if (this._descriptor.children)
        console.error("After create element children im remder")
        // Clean component and append template
        while(this.firstChild){
            this.removeChild(this.firstChild);
        }
        if (this._descriptor.children)
        console.error("B4 appendChild element children")
        this.appendChild($template);
        if (this._descriptor.children)
        console.error("AFTER appendChild element children")
    }
  }

  window.customElements.define('no-show', NoShow);

  const template$1 = document.createElement('template');
  template$1.innerHTML = `
      <style>
        @import url("static/css/style.css")
        @import url("static/css/hw-module.css")
      </style>
      <!--
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.4/jsoneditor.min.js" integrity="sha512-hSJSpJNR/FjAyUSBgpG7SBJG41vuv27GCkuCprVuQNn657EPO/y3Y0NYpoat3E0L8RNorpbFR7XCpSVuHGA+Eg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      -->
      <div class="card">
      <!--
        <sl-drawer label="Drawer" class="drawer-deny-close">
            <json-editor></json-editor>
            This drawer will not close when you click on the overlay.
            <sl-button slot="footer" variant="primary">Close</sl-button>
        </sl-drawer>
        <sl-icon-button class="edit-module" name="pencil-square"></sl-icon-button>
        -->
        <h2 class="title"></h2>
        <div class="details">
          <div class="hardware"></div>
          <div class="addr"></div>
        </div>
        <div class="children row"></div>
        <div class="peripherals"></div>
      </div>
`;
  class HwModule extends HTMLElement {
    constructor() {
        super();
        // Create a div element to represent the card
        this.appendChild(template$1.content.cloneNode(true));
        this.socket = this.getAttribute('socket');
        this.url = this.getAttribute('url');
    }

    getConfig(){
      const jsonUrl = this.url;
      // Load the JSON data from the specified URL
      fetch(jsonUrl)
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          //this.connect()
          // Display the data in the card
          this.render();
        })
        .catch((error) => {
          console.error('Failed to load JSON data:', error);
        });

    }

    renderChild(child){
        return HTMLChild
    }


    get children() {
        let children = this.data.children;
        let $children = [];

        for (let child of children) {
            // Create children element
            let $child = document.createElement("div");
            // Render child to HTML node and set value
            $child.innerHTML = `<${child.component}></${child.component}>`;
            $child.firstChild.descriptor = child;
            //$child.firstChild.value = child
            // Add to children array
            $children.push($child);
        }

        // Append children to DOM
        return $children
    }

    connectedCallback() {
      // Get the JSON URL from the "url" parameter
      this.getConfig();

      // Add interactive event listeners
      //const drawer = document.querySelector('.drawer-deny-close');
      //const openButton = drawer.nextElementSibling;
      //const closeButton = drawer.querySelector('sl-button[variant="primary"]');

      //openButton.addEventListener('click', () => drawer.show());
      //closeButton.addEventListener('click', () => drawer.hide());

    }

    render() {
        this.data;
        // Set component info
        //this.querySelector('.title').textContent = data.name.toUpperCase();
        //this.querySelector('.hardware').textContent = `Hardware:\n ${data.type}`;
        //this.querySelector('.addr').textContent = `IP: \n ${data.addr}`;
        // this.querySelector("json-editor").value = JSON.stringify(this.data, null, 2)
        //console.warn(JSON.stringify(this.data, null, 2))

        // Render children
        this.children.map((child) => {
            this.querySelector('.children').appendChild(child);
        });
    }
  }

  customElements.define('hw-module', HwModule);

  //import ace from "ace";

  const template = document.createElement('template');
  template.innerHTML = `
    <div id="editor">
        function foo(items) {
        var x = "All this is syntax highlighted";
        return x;
        }
    </div>
    `;

  class JsonEditor extends HTMLElement {
      constructor() {
          super();
          this._value = {};
      }

      connectedCallback() {
          this.render();
      }

      set value(val){
          this._value = val;
          this.render();
      }

      pull(){
          // TODO Code to pull JSON form backend
          let json = "function foo(items) {\n    var x = \"All this is syntax highlighted\";\n    return x;\n}";
          editor.setValue(json);
      }

      push(){
          let json = editor.getValue();
          // TODO Code to push JSON to backend
          console.log(json);
      }

      config(){
          if (!!ace){
              ace.edit("editor");
              //editor.setTheme("ace/theme/monokai");
              //editor.session.setMode("ace/mode/javascript");
          }

          //editor.setTheme("ace/theme/twilight");
      }

      render(){
          let $template = template.content.cloneNode(true);
          $template.querySelector("#editor").innerHTML = this._value;
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
          this.appendChild($template);
          this.config();
      }
  }

  window.customElements.define('json-editor', JsonEditor);

  let HTTP$1 = class HTTP {
      
      constructor() {
          console.log("HTTPPPPPP");
      }
      
      static baseURL(action) {
          return "/api/";
      }
      
      static rpc(method_name, args={}, kwargs={}, onSuccess=()=>{}) {
          let data= JSON.stringify({method_name: method_name, args:args, kwargs:kwargs});
          HTTP.post('rpc', data, onSuccess, ()=>{alert("FAIL");});
          
      }
      

      static get(url, onSuccess, onError) {
          console.log("GET: "+ url);
          let token = window.localStorage['jwtToken'];
          let header = new Headers();
          if(token) {
              header.append('x-access-token', `${token}`);
          }

          fetch(url, {
              method: 'GET',
              headers: header
          }).then((resp) => {
              if(resp.ok) {
                  console.log(resp);
                  console.log(resp.body);
                  return resp.json();
              }
              else if(this.checkIfUnauthorized(resp)) {
                  window.location = "/#login";
              }
              else {
                  resp.json().then((json) => {
                      onError(json.error);
                  });
              }
          }).then((resp) => {
              let response = resp; console.log(resp);
              if(response && response.hasOwnProperty('token')) {
                  window.localStorage['jwtToken'] = response.token;
              }
              console.log(url, onSuccess);
              onSuccess(response);

          });/*.catch((e) => {
              console.log(e)
              console.log(e.lineNumber)
              console.log(e.filename)
              onError(e.message);
          });

          */
      }

      static put(url, data, onSuccess, onError) {
          let token = window.localStorage['jwtToken'];
          let header = new Headers();
      
          // 0.0 Authorization
          if(token)
              header.append('x-access-token', `${token}`);
          // 0.1 Stringify if data is object
          if (typeof data == "object")
              data = JSON.stringify(data);
          // 0.2 Header
          header.append('Content-Type', 'application/json');
          // 0.3 Debug print
          console.log("PUT: "+ url);
          console.log(JSON.parse(data));

          fetch(url, {
              method: 'PUT',
              headers: header,
              body: JSON.stringify(data)
          }).then((resp) => {
              if(resp.ok) {
                  return resp.json();
              }
              else if(this.checkIfUnauthorized(resp)) {
                  window.location = "/#login";
              }
              else {
                  resp.json().then((json) => {
                      onError(json.error);
                  });
              }
          }).then((resp) => {
              if(resp.hasOwnProperty('token')) {
                  window.localStorage['jwtToken'] = resp.token;
              }
              onSuccess(resp);
          }).catch((e) => {
              console.log(e);
              onError(e.message);
          });
      }

      static post(url, data, onSuccess, onError) {
          let token = window.localStorage['jwtToken'];
          let header = new Headers();
      
          // 0.0 Authorization
          if(token)
              header.append('x-access-token', `${token}`);
          // 0.1 Stringify if data is object
          if (typeof data == "object")
              data = JSON.stringify(data);
          // 0.2 Header
          header.append('Content-Type', 'application/json');
          // 0.3 Debug print
          console.log("POST: "+ url, JSON.parse(data));

          fetch(url, {
              method: 'POST',
              headers: header,
              body: JSON.stringify(data)
          }).then((resp) => {
              if(resp.ok) {
                  return resp.json();
              }
              else if(this.checkIfUnauthorized(resp)) {
                  window.location = "/#login";
              }
              else {
                  resp.json().then((json) => {
                      onError(json.error + resp.toString());
                  });
              }
          }).then((resp) => {
              if(resp.hasOwnProperty('token')) {
                  window.localStorage['jwtToken'] = resp.token;
              }
              onSuccess(resp);
          }).catch((e) => {
              console.log(e);
              onError(e.message);
          });
      }

      static remove(url, onSuccess, onError) {
          let token = window.localStorage['jwtToken'];
          let header = new Headers();
          if(token) {
              header.append('x-access-token', `${token}`);
          }

          fetch(url, {
              method: 'DELETE',
              headers: header
          }).then((resp) => {
              if(resp.ok) {
                  return resp.json();
              }
              else if(this.checkIfUnauthorized(resp)) {
                  window.location = "/#login";
              }
              else {
                  resp.json().then((json) => {
                      onError(json.error);
                  });
              }
          }).then((resp) => {
              onSuccess(resp);
          }).catch((e) => {
              onError(e.message);
          });
      }

      static checkIfUnauthorized(res) {
          if(res.status == 401) {
              return true;
          }
          return false;
      }
      
      static checkValidCode(res) {
          if (res.status==200){
              console.log("OK");
              return true
          }
          else if (res.status==201){
              console.log("CREATED");
              return true
          }
          else if (res.status==203){
              console.log("ACCEPTED");
              return true
          }
          else if (res.status >= 200 && res.status < 300) {
              return true;
          }
          return false;
      }
      
      static checkRessource(res){
          switch (res.status) {
              case 404:
                  console.log("Ressource not found");
                  return false
              case 301:
                  console.log("Moved permanently");
                  return false
              case 308:
                  console.log("Permanent redirect");
                  return false
              case 400:
                  console.log("Bad Request");
                  return false
              case 500:
                  console.log("Internal Server Error");
                  return false
          }
          return true
      }
  };

  window.Http = HTTP$1;

  console.info("Version", "0.3.0");


  // ---------------------------- //
  //       Socket connection      //
  // ---------------------------- //



  //const $notification = document.createElement("hw-notification");
  //const SOCKET_URL = "localhost:80" + "/ws";

  //const LOCAL_SOCKET_URL = "localhost:5050";
  const LOCAL_SOCKET_URL = window.location.hostname + "/ws";
  let socket = undefined;
  // 1. Create socket
  try {
      socket = new Socket(LOCAL_SOCKET_URL);
      //socket = new Socket(ESP32_SOCKET_URL)
  } catch (e) {
      console.error("Failed to connect to ESP32, will try to connect to local websocket...");
      try {
          socket = new Socket(LOCAL_SOCKET_URL);
          //socket = new Socket(LOCAL_SOCKET_URL)
      }
      catch (e) {
          console.error("Failed all websocket attempts. Make sure there is a websocket available to connect to");
          Logging.error(e);
      }
  }
  try {
      const $notification$ = `<hw-notification></hw-notification>`;
      document.body.insertAdjacentHTML("beforebegin", $notification$);
      let $notification = document.querySelector("hw-notification");
      $notification.socket = socket;
  } catch (e) {
      Logging.error(e);
  }

})();
