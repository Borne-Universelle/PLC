/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=i.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t));}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new s(i,t,o)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return (t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,b=m?m.emptyScript:"",f=p.reactiveElementPolyfillSupport,g=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t);}catch(t){o=null;}}return o}},y=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&a(this.prototype,t,i);}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t;}};return {get(){return i?.call(this)},set(e){const r=i?.call(this);s.call(this,e),this.requestUpdate(t,r,o);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const o of e)this.createProperty(o,t[o]);}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o);}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t));}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const o=e.attribute;return !1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ((o,i)=>{if(e)o.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i);}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,e,o){this._$AK(t,o);}_$EC(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null;}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=s.fromAttribute(e,t.type),this._$Em=null;}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??y)(this[t],e))return;this.P(t,e,o);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o);}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU();}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[g("elementProperties")]=new Map,_[g("finalized")]=new Map,f?.({ReactiveElement:_}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,k=x.trustedTypes,$=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+A,E=`<${S}>`,z=document,T=()=>z.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,L="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,B=/>/g,R=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),U=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),j=new WeakMap,W=z.createTreeWalker(z,129);function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,i=[];let s,r=2===e?"<svg>":"",n=D;for(let e=0;e<o;e++){const o=t[e];let l,a,c=-1,h=0;for(;h<o.length&&(n.lastIndex=h,a=n.exec(o),null!==a);)h=n.lastIndex,n===D?"!--"===a[1]?n=M:void 0!==a[1]?n=B:void 0!==a[2]?(I.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=R):void 0!==a[3]&&(n=R):n===R?">"===a[0]?(n=s??D,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?R:'"'===a[3]?F:V):n===F||n===V?n=R:n===M||n===B?n=D:(n=R,s=void 0);const d=n===R&&t[e+1].startsWith("/>")?" ":"";r+=n===D?o+E:c>=0?(i.push(l),o.slice(0,c)+C+o.slice(c)+A+d):o+A+(-2===c?e:d);}return [q(t,r+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class Y{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const n=t.length-1,l=this.parts,[a,c]=K(t,e);if(this.el=Y.createElement(a,o),W.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(i=W.nextNode())&&l.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[r++],o=i.getAttribute(t).split(A),n=/([.?@])?(.*)/.exec(e);l.push({type:1,index:s,name:n[2],strings:o,ctor:"."===n[1]?Q:"?"===n[1]?tt:"@"===n[1]?et:G}),i.removeAttribute(t);}else t.startsWith(A)&&(l.push({type:6,index:s}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(A),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],T()),W.nextNode(),l.push({type:2,index:++s});i.append(t[e],T());}}}else if(8===i.nodeType)if(i.data===S)l.push({type:2,index:s});else {let t=-1;for(;-1!==(t=i.data.indexOf(A,t+1));)l.push({type:7,index:s}),t+=A.length-1;}s++;}}static createElement(t,e){const o=z.createElement("template");return o.innerHTML=t,o}}function X(t,e,o=t,i){if(e===U)return e;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=O(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(e=X(t,s._$AS(t,e.values),s,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??z).importNode(e,!0);W.currentNode=i;let s=W.nextNode(),r=0,n=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new J(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new ot(s,this,t)),this._$AV.push(e),l=o[++n];}r!==l?.index&&(s=W.nextNode(),r++);}return W.currentNode=z,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++;}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==H&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t;}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Y.createElement(q(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else {const t=new Z(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t;}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new Y(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new J(this.S(T()),this.S(T()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i);}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=H;}_$AI(t,e=this,o,i){const s=this.strings;let r=!1;if(void 0===s)t=X(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==U,r&&(this._$AH=t);else {const i=t;let n,l;for(t=s[0],n=0;n<s.length-1;n++)l=X(this,i[o+n],e,n),l===U&&(l=this._$AH[n]),r||=!O(l)||l!==this._$AH[n],l===H?t=H:t!==H&&(t+=(l??"")+s[n+1]),this._$AH[n]=l;}r&&!i&&this.j(t);}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class Q extends G{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===H?void 0:t;}}class tt extends G{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H);}}class et extends G{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5;}_$AI(t,e=this){if((t=X(this,t,e,0)??H)===U)return;const o=this._$AH,i=t===H&&o!==H||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==H&&(o===H||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class ot{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o;}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t);}}const it=x.litHtmlPolyfillSupport;it?.(Y,J),(x.litHtmlVersions??=[]).push("3.1.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let st=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=o?.renderBefore??null;i._$litPart$=s=new J(e.insertBefore(T(),t),t,void 0,o??{});}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return U}};st._$litElement$=!0,st.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:st});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:st}),(globalThis.litElementVersions??=[]).push("4.0.6");var nt=r`
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
`,lt="";function at(t){lt=t;}var ct={name:"default",resolver:t=>function(t=""){if(!lt){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)at(e.getAttribute("data-shoelace"));else {const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),at(o.split("/").slice(0,-1).join("/"));}}return lt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},ht={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},dt=[ct,{name:"system",resolver:t=>t in ht?`data:image/svg+xml,${encodeURIComponent(ht[t])}`:""}],ut=[];function pt(t){return dt.find((e=>e.name===t))}var mt=r`
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
`,bt=Object.defineProperty,ft=Object.defineProperties,gt=Object.getOwnPropertyDescriptor,vt=Object.getOwnPropertyDescriptors,yt=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,xt=(t,e,o)=>e in t?bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,kt=(t,e)=>{for(var o in e||(e={}))wt.call(e,o)&&xt(t,o,e[o]);if(yt)for(var o of yt(e))_t.call(e,o)&&xt(t,o,e[o]);return t},$t=(t,e)=>ft(t,vt(e)),Ct=(t,e,o,i)=>{for(var s,r=i>1?void 0:i?gt(e,o):e,n=t.length-1;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&bt(e,o,r),r};function At(t,e){const o=kt({waitUntilFirstUpdate:!1},e);return (e,i)=>{const{update:s}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),r=this[s];e!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,r));}})),s.call(this,t);};}}var St=r`
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
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const Et={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},zt=(t=Et,e,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,t),"accessor"===i){const{name:i}=o;return {set(o){const s=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,s,t);},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];e.call(this,o),this.requestUpdate(i,s,t);}}throw Error("Unsupported decorator location: "+i)};function Tt(t){return (e,o)=>"object"==typeof o?zt(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Ot(t){return Tt({...t,state:!0,attribute:!1})}
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
function Pt(t,e){return (e,o,i)=>((t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o))(e,o,{get(){return (e=>e.renderRoot?.querySelector(t)??null)(this)}})}var Lt=class extends st{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((([t,e])=>{this.constructor.define(t,e);}));}emit(t,e){const o=new CustomEvent(t,kt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o);}catch(i){customElements.define(t,class extends e{},o);}return}let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),s&&r&&s===r||console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`);}};Lt.version="2.16.0",Lt.dependencies={},Ct([Tt()],Lt.prototype,"dir",2),Ct([Tt()],Lt.prototype,"lang",2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Dt=t=>void 0===t.strings,Mt={};var Bt,Rt=Symbol(),Vt=Symbol(),Ft=new Map,It=class extends Lt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default";}async resolveIcon(t,e){var o;let i;if(null==e?void 0:e.spriteSheet){this.svg=N`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return "function"==typeof e.mutator&&e.mutator(o),this.svg}try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return 410===i.status?Rt:Vt}catch(t){return Vt}try{const t=document.createElement("div");t.innerHTML=await i.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return Rt;Bt||(Bt=new DOMParser);const s=Bt.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Rt}catch(t){return Rt}}connectedCallback(){var t;super.connectedCallback(),t=this,ut.push(t);}firstUpdated(){this.initialRender=!0,this.setIcon();}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,ut=ut.filter((e=>e!==t));}getIconSource(){const t=pt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"));}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?pt(this.library):void 0;if(!e)return void(this.svg=null);let s=Ft.get(e);if(s||(s=this.resolveIcon(e,i),Ft.set(e,s)),!this.initialRender)return;const r=await s;if(r===Vt&&Ft.delete(e),e===this.getIconSource().url)if(((t,e)=>void 0!==t?._$litType$)(r))this.svg=r;else switch(r){case Vt:case Rt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(t=null==i?void 0:i.mutator)||t.call(i,this.svg),this.emit("sl-load");}}render(){return this.svg}};It.styles=[St,mt],Ct([Ot()],It.prototype,"svg",2),Ct([Tt({reflect:!0})],It.prototype,"name",2),Ct([Tt()],It.prototype,"src",2),Ct([Tt()],It.prototype,"label",2),Ct([Tt({reflect:!0})],It.prototype,"library",2),Ct([At("label")],It.prototype,"handleLabelChange",1),Ct([At(["name","src","library"])],It.prototype,"setIcon",1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt=1,Ut=2,Ht=3,jt=4,Wt=t=>(...e)=>({_$litDirective$:t,values:e});class qt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=Wt(class extends qt{constructor(t){if(super(t),t.type!==Nt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)));}return U}}),Yt=Symbol.for(""),Xt=t=>{if(t?.r===Yt)return t?._$litStatic$},Zt=(t,...e)=>({_$litStatic$:e.reduce(((e,o,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]),r:Yt}),Jt=new Map,Gt=(t=>(e,...o)=>{const i=o.length;let s,r;const n=[],l=[];let a,c=0,h=!1;for(;c<i;){for(a=e[c];c<i&&void 0!==(r=o[c],s=Xt(r));)a+=s+e[++c],h=!0;c!==i&&l.push(r),n.push(a),c++;}if(c===i&&n.push(e[i]),h){const t=n.join("$$lit$$");void 0===(e=Jt.get(t))&&(n.raw=n,Jt.set(t,e=n)),o=l;}return t(e,...o)})(N),Qt=t=>t??H;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var te=class extends Lt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1;}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleFocus(){this.hasFocus=!0,this.emit("sl-focus");}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation());}click(){this.button.click();}focus(t){this.button.focus(t);}blur(){this.button.blur();}render(){const t=!!this.href,e=t?Zt`a`:Zt`button`;return Gt`
      <${e}
        part="base"
        class=${Kt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Qt(t?void 0:this.disabled)}
        type=${Qt(t?void 0:"button")}
        href=${Qt(t?this.href:void 0)}
        target=${Qt(t?this.target:void 0)}
        download=${Qt(t?this.download:void 0)}
        rel=${Qt(t&&this.target?"noreferrer noopener":void 0)}
        role=${Qt(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Qt(this.name)}
          library=${Qt(this.library)}
          src=${Qt(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};te.styles=[St,nt],te.dependencies={"sl-icon":It},Ct([Pt(".icon-button")],te.prototype,"button",2),Ct([Ot()],te.prototype,"hasFocus",2),Ct([Tt()],te.prototype,"name",2),Ct([Tt()],te.prototype,"library",2),Ct([Tt()],te.prototype,"src",2),Ct([Tt()],te.prototype,"href",2),Ct([Tt()],te.prototype,"target",2),Ct([Tt()],te.prototype,"download",2),Ct([Tt()],te.prototype,"label",2),Ct([Tt({type:Boolean,reflect:!0})],te.prototype,"disabled",2);var ee=new Map,oe=new WeakMap;function ie(t,e){return "rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function se(t,e){ee.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e));}function re(t,e,o){const i=oe.get(t);if(null==i?void 0:i[e])return ie(i[e],o.dir);const s=ee.get(e);return s?ie(s,o.dir):{keyframes:[],options:{duration:0}}}function ne(t,e){return new Promise((o=>{t.addEventListener(e,(function i(s){s.target===t&&(t.removeEventListener(e,i),o());}));}))}function le(t,e,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,$t(kt({},o),{duration:ae()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0});}))}function ae(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ce(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{t.cancel(),requestAnimationFrame(e);})))))}var he=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate();},(this.host=t).addController(this),this.slotNames=e;}hasDefaultSlot(){return [...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return !0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return !1;if(!e.hasAttribute("slot"))return !0}return !1}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return "[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange);}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange);}};const de=new Set,ue=new MutationObserver(ve),pe=new Map;let me,be=document.documentElement.dir||"ltr",fe=document.documentElement.lang||navigator.language;function ge(...t){t.map((t=>{const e=t.$code.toLowerCase();pe.has(e)?pe.set(e,Object.assign(Object.assign({},pe.get(e)),t)):pe.set(e,t),me||(me=t);})),ve();}function ve(){be=document.documentElement.dir||"ltr",fe=document.documentElement.lang||navigator.language,[...de.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate();}));}ue.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});let ye=class{constructor(t){this.host=t,this.host.addController(this);}hostConnected(){de.add(this.host);}hostDisconnected(){de.delete(this.host);}dir(){return `${this.host.dir||be}`.toLowerCase()}lang(){return `${this.host.lang||fe}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),s=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return {locale:i,language:s,region:r,primary:pe.get(`${s}-${r}`),secondary:pe.get(s)}}exists(t,e){var o;const{primary:i,secondary:s}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||s&&s[t]||e.includeFallback&&me&&me[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else {if(!me||!me[t])return console.error(`No translation found for: ${String(t)}`),String(t);s=me[t];}return "function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var we={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ge(we);var _e=we,xe=class extends ye{};ge(_e);var ke=r`
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
`,$e=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Ce=class extends Lt{constructor(){super(...arguments),this.hasSlotController=new he(this,"icon","suffix"),this.localize=new xe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0;}firstUpdated(){this.base.hidden=!this.open;}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration));}handleCloseClick(){this.hide();}handleMouseMove(){this.restartAutoHide();}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ce(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=re(this,"alert.show",{dir:this.localize.dir()});await le(this.base,t,e),this.emit("sl-after-show");}else {this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ce(this.base);const{keyframes:t,options:e}=re(this,"alert.hide",{dir:this.localize.dir()});await le(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide");}}handleDurationChange(){this.restartAutoHide();}async show(){if(!this.open)return this.open=!0,ne(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ne(this,"sl-after-hide")}async toast(){return new Promise((t=>{null===$e.parentElement&&document.body.append($e),$e.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show();})),this.addEventListener("sl-after-hide",(()=>{$e.removeChild(this),t(),null===$e.querySelector("sl-alert")&&$e.remove();}),{once:!0});}))}render(){return N`
      <div
        part="base"
        class=${Kt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
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
    `}};Ce.styles=[St,ke],Ce.dependencies={"sl-icon-button":te},Ct([Pt('[part~="base"]')],Ce.prototype,"base",2),Ct([Tt({type:Boolean,reflect:!0})],Ce.prototype,"open",2),Ct([Tt({type:Boolean,reflect:!0})],Ce.prototype,"closable",2),Ct([Tt({reflect:!0})],Ce.prototype,"variant",2),Ct([Tt({type:Number})],Ce.prototype,"duration",2),Ct([At("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1),Ct([At("duration")],Ce.prototype,"handleDurationChange",1),se("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),se("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Ce.define("sl-alert");var Ae=r`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Se=class extends Lt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1;}render(){return N`
      <span
        part="base"
        class=${Kt({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Se.styles=[St,Ae],Ct([Tt({reflect:!0})],Se.prototype,"variant",2),Ct([Tt({type:Boolean,reflect:!0})],Se.prototype,"pill",2),Ct([Tt({type:Boolean,reflect:!0})],Se.prototype,"pulse",2),Se.define("sl-badge");var Ee=r`
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
`,ze=class extends Lt{constructor(){super(...arguments),this.localize=new xe(this);}render(){return N`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ze.styles=[St,Ee];var Te=new WeakMap,Oe=new WeakMap,Pe=new WeakMap,Le=new WeakSet,De=new WeakMap,Me=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),s="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!s&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach((e=>{t.formData.append(o,e.toString());})):t.formData.append(o,i.toString()));},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=Te.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,!0);}))),!this.form||this.form.noValidate||o||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation());},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),De.set(this.host,[]);},this.handleInteraction=t=>{const e=De.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0);},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return !1}return !0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return !1}return !0},(this.host=t).addController(this),this.options=kt({form:t=>{const e=t.form;if(e){const o=t.getRootNode().querySelector(`#${e}`);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e);}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),De.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction);}));}hostDisconnected(){this.detachForm(),De.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction);}));}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid);}attachForm(t){t?(this.form=t,Te.has(this.form)?Te.get(this.form).add(this.host):Te.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Oe.has(this.form)||(Oe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Pe.has(this.form)||(Pe.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0;}detachForm(){if(!this.form)return;const t=Te.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Oe.has(this.form)&&(this.form.reportValidity=Oe.get(this.form),Oe.delete(this.form)),Pe.has(this.form)&&(this.form.checkValidity=Pe.get(this.form),Pe.delete(this.form)),this.form=void 0));}setUserInteracted(t,e){e?Le.add(t):Le.delete(t),t.requestUpdate();}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t));}))),this.form.append(o),o.click(),o.remove();}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t);}submit(t){this.doAction("submit",t);}setValidity(t){const e=this.host,o=Boolean(Le.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o);}updateValidity(){const t=this.host;this.setValidity(t.validity.valid);}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault();}},Be=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze($t(kt({},Be),{valid:!1,valueMissing:!0})),Object.freeze($t(kt({},Be),{valid:!1,customError:!0}));var Re=r`
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
    border-color: var(--sl-input-border-color);
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
    border-color: var(--sl-input-border-color);
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

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
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
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Ve=class extends Lt{constructor(){super(...arguments),this.formControlController=new Me(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new he(this,"[default]","prefix","suffix"),this.localize=new xe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener";}get validity(){return this.isButton()?this.button.validity:Be}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity();}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleFocus(){this.hasFocus=!0,this.emit("sl-focus");}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this);}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t);}isButton(){return !this.href}isLink(){return !!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled);}click(){this.button.click();}focus(t){this.button.focus(t);}blur(){this.button.blur();}checkValidity(){return !this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return !this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity());}render(){const t=this.isLink(),e=t?Zt`a`:Zt`button`;return Gt`
      <${e}
        part="base"
        class=${Kt({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Qt(t?void 0:this.disabled)}
        type=${Qt(t?void 0:this.type)}
        title=${this.title}
        name=${Qt(t?void 0:this.name)}
        value=${Qt(t?void 0:this.value)}
        href=${Qt(t?this.href:void 0)}
        target=${Qt(t?this.target:void 0)}
        download=${Qt(t?this.download:void 0)}
        rel=${Qt(t?this.rel:void 0)}
        role=${Qt(t?void 0:"button")}
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
        ${this.caret?Gt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Gt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Ve.styles=[St,Re],Ve.dependencies={"sl-icon":It,"sl-spinner":ze},Ct([Pt(".button")],Ve.prototype,"button",2),Ct([Ot()],Ve.prototype,"hasFocus",2),Ct([Ot()],Ve.prototype,"invalid",2),Ct([Tt()],Ve.prototype,"title",2),Ct([Tt({reflect:!0})],Ve.prototype,"variant",2),Ct([Tt({reflect:!0})],Ve.prototype,"size",2),Ct([Tt({type:Boolean,reflect:!0})],Ve.prototype,"caret",2),Ct([Tt({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2),Ct([Tt({type:Boolean,reflect:!0})],Ve.prototype,"loading",2),Ct([Tt({type:Boolean,reflect:!0})],Ve.prototype,"outline",2),Ct([Tt({type:Boolean,reflect:!0})],Ve.prototype,"pill",2),Ct([Tt({type:Boolean,reflect:!0})],Ve.prototype,"circle",2),Ct([Tt()],Ve.prototype,"type",2),Ct([Tt()],Ve.prototype,"name",2),Ct([Tt()],Ve.prototype,"value",2),Ct([Tt()],Ve.prototype,"href",2),Ct([Tt()],Ve.prototype,"target",2),Ct([Tt()],Ve.prototype,"rel",2),Ct([Tt()],Ve.prototype,"download",2),Ct([Tt()],Ve.prototype,"form",2),Ct([Tt({attribute:"formaction"})],Ve.prototype,"formAction",2),Ct([Tt({attribute:"formenctype"})],Ve.prototype,"formEnctype",2),Ct([Tt({attribute:"formmethod"})],Ve.prototype,"formMethod",2),Ct([Tt({attribute:"formnovalidate",type:Boolean})],Ve.prototype,"formNoValidate",2),Ct([Tt({attribute:"formtarget"})],Ve.prototype,"formTarget",2),Ct([At("disabled",{waitUntilFirstUpdate:!0})],Ve.prototype,"handleDisabledChange",1),Ve.define("sl-button");var Fe=r`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ie=new WeakMap;function Ne(t){let e=Ie.get(t);return e||(e=window.getComputedStyle(t,null),Ie.set(t,e)),e}function Ue(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1))return !1;if(t.hasAttribute("disabled"))return !1;if(t.closest("[inert]"))return !1;if("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))return !1;if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ne(t);return "hidden"!==e.visibility&&"none"!==e.display}(t))return !1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return !0;if(t.hasAttribute("tabindex"))return !0;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return !0;return !!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=Ne(t),{overflowY:o,overflowX:i}=e;return "scroll"===o||"scroll"===i||"auto"===o&&"auto"===i&&(t.scrollHeight>t.clientHeight&&"auto"===o||!(!(t.scrollWidth>t.clientWidth)||"auto"!==i))}(t)}function He(t){var e,o;const i=function(t){const e=new WeakMap,o=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]"))return;if(e.has(s))return;e.set(s,!0),!o.includes(s)&&Ue(s)&&o.push(s),s instanceof HTMLSlotElement&&function(t,e){var o;return (null==(o=t.getRootNode({composed:!0}))?void 0:o.host)!==e}(s,t)&&s.assignedElements({flatten:!0}).forEach((t=>{i(t);})),null!==s.shadowRoot&&"open"===s.shadowRoot.mode&&i(s.shadowRoot);}for(const t of s.children)i(t);}return i(t),o.sort(((t,e)=>{const o=Number(t.getAttribute("tabindex"))||0;return (Number(e.getAttribute("tabindex"))||0)-o}))}(t);return {start:null!=(e=i[0])?e:null,end:null!=(o=i[i.length-1])?o:null}}var je=r`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const We=Math.min,qe=Math.max,Ke=Math.round,Ye=Math.floor,Xe=t=>({x:t,y:t}),Ze={left:"right",right:"left",bottom:"top",top:"bottom"},Je={start:"end",end:"start"};function Ge(t,e,o){return qe(t,We(e,o))}function Qe(t,e){return "function"==typeof t?t(e):t}function to(t){return t.split("-")[0]}function eo(t){return t.split("-")[1]}function oo(t){return "x"===t?"y":"x"}function io(t){return "y"===t?"height":"width"}function so(t){return ["top","bottom"].includes(to(t))?"y":"x"}function ro(t){return oo(so(t))}function no(t){return t.replace(/start|end/g,(t=>Je[t]))}function lo(t){return t.replace(/left|right|bottom|top/g,(t=>Ze[t]))}function ao(t){return "number"!=typeof t?function(t){return {top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function co(t){const{x:e,y:o,width:i,height:s}=t;return {width:i,height:s,top:o,left:e,right:e+i,bottom:o+s,x:e,y:o}}function ho(t,e,o){let{reference:i,floating:s}=t;const r=so(e),n=ro(e),l=io(n),a=to(e),c="y"===r,h=i.x+i.width/2-s.width/2,d=i.y+i.height/2-s.height/2,u=i[l]/2-s[l]/2;let p;switch(a){case"top":p={x:h,y:i.y-s.height};break;case"bottom":p={x:h,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:d};break;case"left":p={x:i.x-s.width,y:d};break;default:p={x:i.x,y:i.y};}switch(eo(e)){case"start":p[n]-=u*(o&&c?-1:1);break;case"end":p[n]+=u*(o&&c?-1:1);}return p}async function uo(t,e){var o;void 0===e&&(e={});const{x:i,y:s,platform:r,rects:n,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=Qe(e,t),m=ao(p),b=l[u?"floating"===d?"reference":"floating":d],f=co(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(b)))||o?b:b.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),g="floating"===d?{x:i,y:s,width:n.floating.width,height:n.floating.height}:n.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=co(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:v,strategy:a}):g);return {top:(f.top-w.top+m.top)/y.y,bottom:(w.bottom-f.bottom+m.bottom)/y.y,left:(f.left-w.left+m.left)/y.x,right:(w.right-f.right+m.right)/y.x}}function po(t){return fo(t)?(t.nodeName||"").toLowerCase():"#document"}function mo(t){var e;return (null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function bo(t){var e;return null==(e=(fo(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function fo(t){return t instanceof Node||t instanceof mo(t).Node}function go(t){return t instanceof Element||t instanceof mo(t).Element}function vo(t){return t instanceof HTMLElement||t instanceof mo(t).HTMLElement}function yo(t){return "undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof mo(t).ShadowRoot)}function wo(t){const{overflow:e,overflowX:o,overflowY:i,display:s}=Ao(t);return /auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(s)}function _o(t){return ["table","td","th"].includes(po(t))}function xo(t){return [":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return !1}}))}function ko(t){const e=$o(),o=Ao(t);return "none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((t=>(o.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(o.contain||"").includes(t)))}function $o(){return !("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Co(t){return ["html","body","#document"].includes(po(t))}function Ao(t){return mo(t).getComputedStyle(t)}function So(t){return go(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Eo(t){if("html"===po(t))return t;const e=t.assignedSlot||t.parentNode||yo(t)&&t.host||bo(t);return yo(e)?e.host:e}function zo(t){const e=Eo(t);return Co(e)?t.ownerDocument?t.ownerDocument.body:t.body:vo(e)&&wo(e)?e:zo(e)}function To(t,e,o){var i;void 0===e&&(e=[]),void 0===o&&(o=!0);const s=zo(t),r=s===(null==(i=t.ownerDocument)?void 0:i.body),n=mo(s);return r?e.concat(n,n.visualViewport||[],wo(s)?s:[],n.frameElement&&o?To(n.frameElement):[]):e.concat(s,To(s,[],o))}function Oo(t){const e=Ao(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=vo(t),r=s?t.offsetWidth:o,n=s?t.offsetHeight:i,l=Ke(o)!==r||Ke(i)!==n;return l&&(o=r,i=n),{width:o,height:i,$:l}}function Po(t){return go(t)?t:t.contextElement}function Lo(t){const e=Po(t);if(!vo(e))return Xe(1);const o=e.getBoundingClientRect(),{width:i,height:s,$:r}=Oo(e);let n=(r?Ke(o.width):o.width)/i,l=(r?Ke(o.height):o.height)/s;return n&&Number.isFinite(n)||(n=1),l&&Number.isFinite(l)||(l=1),{x:n,y:l}}const Do=Xe(0);function Mo(t){const e=mo(t);return $o()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Do}function Bo(t,e,o,i){void 0===e&&(e=!1),void 0===o&&(o=!1);const s=t.getBoundingClientRect(),r=Po(t);let n=Xe(1);e&&(i?go(i)&&(n=Lo(i)):n=Lo(t));const l=function(t,e,o){return void 0===e&&(e=!1),!(!o||e&&o!==mo(t))&&e}(r,o,i)?Mo(r):Xe(0);let a=(s.left+l.x)/n.x,c=(s.top+l.y)/n.y,h=s.width/n.x,d=s.height/n.y;if(r){const t=mo(r),e=i&&go(i)?mo(i):i;let o=t,s=o.frameElement;for(;s&&i&&e!==o;){const t=Lo(s),e=s.getBoundingClientRect(),i=Ao(s),r=e.left+(s.clientLeft+parseFloat(i.paddingLeft))*t.x,n=e.top+(s.clientTop+parseFloat(i.paddingTop))*t.y;a*=t.x,c*=t.y,h*=t.x,d*=t.y,a+=r,c+=n,o=mo(s),s=o.frameElement;}}return co({width:h,height:d,x:a,y:c})}function Ro(t){return Bo(bo(t)).left+So(t).scrollLeft}function Vo(t,e,o){let i;if("viewport"===e)i=function(t,e){const o=mo(t),i=bo(t),s=o.visualViewport;let r=i.clientWidth,n=i.clientHeight,l=0,a=0;if(s){r=s.width,n=s.height;const t=$o();(!t||t&&"fixed"===e)&&(l=s.offsetLeft,a=s.offsetTop);}return {width:r,height:n,x:l,y:a}}(t,o);else if("document"===e)i=function(t){const e=bo(t),o=So(t),i=t.ownerDocument.body,s=qe(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=qe(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-o.scrollLeft+Ro(t);const l=-o.scrollTop;return "rtl"===Ao(i).direction&&(n+=qe(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:n,y:l}}(bo(t));else if(go(e))i=function(t,e){const o=Bo(t,!0,"fixed"===e),i=o.top+t.clientTop,s=o.left+t.clientLeft,r=vo(t)?Lo(t):Xe(1);return {width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:s*r.x,y:i*r.y}}(e,o);else {const o=Mo(t);i={...e,x:e.x-o.x,y:e.y-o.y};}return co(i)}function Fo(t,e){const o=Eo(t);return !(o===e||!go(o)||Co(o))&&("fixed"===Ao(o).position||Fo(o,e))}function Io(t,e,o){const i=vo(e),s=bo(e),r="fixed"===o,n=Bo(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=Xe(0);if(i||!i&&!r)if(("body"!==po(e)||wo(s))&&(l=So(e)),i){const t=Bo(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop;}else s&&(a.x=Ro(s));return {x:n.left+l.scrollLeft-a.x,y:n.top+l.scrollTop-a.y,width:n.width,height:n.height}}function No(t){return "static"===Ao(t).position}function Uo(t,e){return vo(t)&&"fixed"!==Ao(t).position?e?e(t):t.offsetParent:null}function Ho(t,e){const o=mo(t);if(xo(t))return o;if(!vo(t)){let e=Eo(t);for(;e&&!Co(e);){if(go(e)&&!No(e))return e;e=Eo(e);}return o}let i=Uo(t,e);for(;i&&_o(i)&&No(i);)i=Uo(i,e);return i&&Co(i)&&No(i)&&!ko(i)?o:i||function(t){let e=Eo(t);for(;vo(e)&&!Co(e);){if(xo(e))return null;if(ko(e))return e;e=Eo(e);}return null}(t)||o}const jo={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:i,strategy:s}=t;const r="fixed"===s,n=bo(i),l=!!e&&xo(e.floating);if(i===n||l&&r)return o;let a={scrollLeft:0,scrollTop:0},c=Xe(1);const h=Xe(0),d=vo(i);if((d||!d&&!r)&&(("body"!==po(i)||wo(n))&&(a=So(i)),vo(i))){const t=Bo(i);c=Lo(i),h.x=t.x+i.clientLeft,h.y=t.y+i.clientTop;}return {width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+h.x,y:o.y*c.y-a.scrollTop*c.y+h.y}},getDocumentElement:bo,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t;const r=[..."clippingAncestors"===o?xo(e)?[]:function(t,e){const o=e.get(t);if(o)return o;let i=To(t,[],!1).filter((t=>go(t)&&"body"!==po(t))),s=null;const r="fixed"===Ao(t).position;let n=r?Eo(t):t;for(;go(n)&&!Co(n);){const e=Ao(n),o=ko(n);o||"fixed"!==e.position||(s=null),(r?!o&&!s:!o&&"static"===e.position&&s&&["absolute","fixed"].includes(s.position)||wo(n)&&!o&&Fo(t,n))?i=i.filter((t=>t!==n)):s=e,n=Eo(n);}return e.set(t,i),i}(e,this._c):[].concat(o),i],n=r[0],l=r.reduce(((t,o)=>{const i=Vo(e,o,s);return t.top=qe(i.top,t.top),t.right=We(i.right,t.right),t.bottom=We(i.bottom,t.bottom),t.left=qe(i.left,t.left),t}),Vo(e,n,s));return {width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Ho,getElementRects:async function(t){const e=this.getOffsetParent||Ho,o=this.getDimensions,i=await o(t.floating);return {reference:Io(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:o}=Oo(t);return {width:e,height:o}},getScale:Lo,isElement:go,isRTL:function(t){return "rtl"===Ao(t).direction}};function Wo(t,e,o,i){void 0===i&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:n="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=i,c=Po(t),h=s||r?[...c?To(c):[],...To(e)]:[];h.forEach((t=>{s&&t.addEventListener("scroll",o,{passive:!0}),r&&t.addEventListener("resize",o);}));const d=c&&l?function(t,e){let o,i=null;const s=bo(t);function r(){var t;clearTimeout(o),null==(t=i)||t.disconnect(),i=null;}return function n(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),r();const{left:c,top:h,width:d,height:u}=t.getBoundingClientRect();if(l||e(),!d||!u)return;const p={rootMargin:-Ye(h)+"px "+-Ye(s.clientWidth-(c+d))+"px "+-Ye(s.clientHeight-(h+u))+"px "+-Ye(c)+"px",threshold:qe(0,We(1,a))||1};let m=!0;function b(t){const e=t[0].intersectionRatio;if(e!==a){if(!m)return n();e?n(!1,e):o=setTimeout((()=>{n(!1,1e-7);}),1e3);}m=!1;}try{i=new IntersectionObserver(b,{...p,root:s.ownerDocument});}catch(t){i=new IntersectionObserver(b,p);}i.observe(t);}(!0),r}(c,o):null;let u,p=-1,m=null;n&&(m=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=m)||t.observe(e);}))),o();})),c&&!a&&m.observe(c),m.observe(e));let b=a?Bo(t):null;return a&&function e(){const i=Bo(t);!b||i.x===b.x&&i.y===b.y&&i.width===b.width&&i.height===b.height||o();b=i,u=requestAnimationFrame(e);}(),o(),()=>{var t;h.forEach((t=>{s&&t.removeEventListener("scroll",o),r&&t.removeEventListener("resize",o);})),null==d||d(),null==(t=m)||t.disconnect(),m=null,a&&cancelAnimationFrame(u);}}const qo=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:s,y:r,placement:n,middlewareData:l}=e,a=await async function(t,e){const{placement:o,platform:i,elements:s}=t,r=await(null==i.isRTL?void 0:i.isRTL(s.floating)),n=to(o),l=eo(o),a="y"===so(o),c=["left","top"].includes(n)?-1:1,h=r&&a?-1:1,d=Qe(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof m&&(p="end"===l?-1*m:m),a?{x:p*h,y:u*c}:{x:u*c,y:p*h}}(e,t);return n===(null==(o=l.offset)?void 0:o.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:s+a.x,y:r+a.y,data:{...a,placement:n}}}}},Ko=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:l={fn:t=>{let{x:e,y:o}=t;return {x:e,y:o}}},...a}=Qe(t,e),c={x:o,y:i},h=await uo(e,a),d=so(to(s)),u=oo(d);let p=c[u],m=c[d];if(r){const t="y"===u?"bottom":"right";p=Ge(p+h["y"===u?"top":"left"],p,p-h[t]);}if(n){const t="y"===d?"bottom":"right";m=Ge(m+h["y"===d?"top":"left"],m,m-h[t]);}const b=l.fn({...e,[u]:p,[d]:m});return {...b,data:{x:b.x-o,y:b.y-i}}}}},Yo=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:r,rects:n,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:b=!0,...f}=Qe(t,e);if(null!=(o=r.arrow)&&o.alignmentOffset)return {};const g=to(s),v=so(l),y=to(l)===l,w=await(null==a.isRTL?void 0:a.isRTL(c.floating)),_=u||(y||!b?[lo(l)]:function(t){const e=lo(t);return [no(t),e,no(e)]}(l)),x="none"!==m;!u&&x&&_.push(...function(t,e,o,i){const s=eo(t);let r=function(t,e,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:i:e?i:s;case"left":case"right":return e?r:n;default:return []}}(to(t),"start"===o,i);return s&&(r=r.map((t=>t+"-"+s)),e&&(r=r.concat(r.map(no)))),r}(l,b,m,w));const k=[l,..._],$=await uo(e,f),C=[];let A=(null==(i=r.flip)?void 0:i.overflows)||[];if(h&&C.push($[g]),d){const t=function(t,e,o){void 0===o&&(o=!1);const i=eo(t),s=ro(t),r=io(s);let n="x"===s?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=lo(n)),[n,lo(n)]}(s,n,w);C.push($[t[0]],$[t[1]]);}if(A=[...A,{placement:s,overflows:C}],!C.every((t=>t<=0))){var S,E;const t=((null==(S=r.flip)?void 0:S.index)||0)+1,e=k[t];if(e)return {data:{index:t,overflows:A},reset:{placement:e}};let o=null==(E=A.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:E.placement;if(!o)switch(p){case"bestFit":{var z;const t=null==(z=A.filter((t=>{if(x){const e=so(t.placement);return e===v||"y"===e}return !0})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:z[0];t&&(o=t);break}case"initialPlacement":o=l;}if(s!==o)return {reset:{placement:o}}}return {}}}},Xo=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:s,elements:r}=e,{apply:n=()=>{},...l}=Qe(t,e),a=await uo(e,l),c=to(o),h=eo(o),d="y"===so(o),{width:u,height:p}=i.floating;let m,b;"top"===c||"bottom"===c?(m=c,b=h===(await(null==s.isRTL?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(b=c,m="end"===h?"top":"bottom");const f=p-a.top-a.bottom,g=u-a.left-a.right,v=We(p-a[m],f),y=We(u-a[b],g),w=!e.middlewareData.shift;let _=v,x=y;if(d?x=h||w?We(y,g):g:_=h||w?We(v,f):f,w&&!h){const t=qe(a.left,0),e=qe(a.right,0),o=qe(a.top,0),i=qe(a.bottom,0);d?x=u-2*(0!==t||0!==e?t+e:qe(a.left,a.right)):_=p-2*(0!==o||0!==i?o+i:qe(a.top,a.bottom));}await n({...e,availableWidth:x,availableHeight:_});const k=await s.getDimensions(r.floating);return u!==k.width||p!==k.height?{reset:{rects:!0}}:{}}}},Zo=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:s,rects:r,platform:n,elements:l,middlewareData:a}=e,{element:c,padding:h=0}=Qe(t,e)||{};if(null==c)return {};const d=ao(h),u={x:o,y:i},p=ro(s),m=io(p),b=await n.getDimensions(c),f="y"===p,g=f?"top":"left",v=f?"bottom":"right",y=f?"clientHeight":"clientWidth",w=r.reference[m]+r.reference[p]-u[p]-r.floating[m],_=u[p]-r.reference[p],x=await(null==n.getOffsetParent?void 0:n.getOffsetParent(c));let k=x?x[y]:0;k&&await(null==n.isElement?void 0:n.isElement(x))||(k=l.floating[y]||r.floating[m]);const $=w/2-_/2,C=k/2-b[m]/2-1,A=We(d[g],C),S=We(d[v],C),E=A,z=k-b[m]-S,T=k/2-b[m]/2+$,O=Ge(E,T,z),P=!a.arrow&&null!=eo(s)&&T!==O&&r.reference[m]/2-(T<E?A:S)-b[m]/2<0,L=P?T<E?T-E:T-z:0;return {[p]:u[p]+L,data:{[p]:O,centerOffset:T-O-L,...P&&{alignmentOffset:L}},reset:P}}}),Jo=(t,e,o)=>{const i=new Map,s={platform:jo,...o},r={...s.platform,_c:i};return (async(t,e,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:n}=o,l=r.filter(Boolean),a=await(null==n.isRTL?void 0:n.isRTL(e));let c=await n.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:d}=ho(c,i,a),u=i,p={},m=0;for(let o=0;o<l.length;o++){const{name:r,fn:b}=l[o],{x:f,y:g,data:v,reset:y}=await b({x:h,y:d,initialPlacement:i,placement:u,strategy:s,middlewareData:p,rects:c,platform:n,elements:{reference:t,floating:e}});h=null!=f?f:h,d=null!=g?g:d,p={...p,[r]:{...p[r],...v}},y&&m<=50&&(m++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await n.getElementRects({reference:t,floating:e,strategy:s}):y.rects),({x:h,y:d}=ho(c,u,a))),o=-1);}return {x:h,y:d,placement:u,strategy:s,middlewareData:p}})(t,e,{...s,platform:r})};function Go(t){return function(t){for(let e=t;e;e=Qo(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=Qo(t);e;e=Qo(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return e;if("BODY"===e.tagName)return e}}return null}(t)}function Qo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var ti=class extends Lt{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let o=0,i=0,s=0,r=0,n=0,l=0,a=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(o=t.left,i=t.bottom,s=t.right,r=t.bottom,n=e.left,l=e.top,a=e.right,c=e.top):(o=e.left,i=e.bottom,s=e.right,r=e.bottom,n=t.left,l=t.top,a=t.right,c=t.top):t.left<e.left?(o=t.right,i=t.top,s=e.left,r=e.top,n=t.right,l=t.bottom,a=e.left,c=e.bottom):(o=e.right,i=e.top,s=t.left,r=t.top,n=e.right,l=e.bottom,a=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`);}};}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start();}disconnectedCallback(){super.disconnectedCallback(),this.stop();}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition());}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor);}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start();}start(){this.anchorEl&&(this.cleanup=Wo(this.anchorEl,this.popup,(()=>{this.reposition();})));}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t();}))}reposition(){if(!this.active||!this.anchorEl)return;const t=[qo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Xo({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:"";}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Yo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Ko({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Xo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width");}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Zo({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>jo.getOffsetParent(t,Go):jo.getOffsetParent;Jo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:$t(kt({},jo),{getOffsetParent:e})}).then((({x:t,y:e,middlewareData:o,placement:i})=>{const s=this.matches(":dir(rtl)"),r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let i="",n="",l="",a="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",n=s?o:"",a=s?"":o;}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n=s?"":o,a=s?o:"",l="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";}else "center"===this.arrowPlacement?(a="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(a="number"==typeof t?`${t}px`:"",i="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:i,right:n,bottom:l,left:a,[r]:"calc(var(--arrow-size-diagonal) * -1)"});}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition");}render(){return N`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Kt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Kt({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?N`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ti.styles=[St,je],Ct([Pt(".popup")],ti.prototype,"popup",2),Ct([Pt(".popup__arrow")],ti.prototype,"arrowEl",2),Ct([Tt()],ti.prototype,"anchor",2),Ct([Tt({type:Boolean,reflect:!0})],ti.prototype,"active",2),Ct([Tt({reflect:!0})],ti.prototype,"placement",2),Ct([Tt({reflect:!0})],ti.prototype,"strategy",2),Ct([Tt({type:Number})],ti.prototype,"distance",2),Ct([Tt({type:Number})],ti.prototype,"skidding",2),Ct([Tt({type:Boolean})],ti.prototype,"arrow",2),Ct([Tt({attribute:"arrow-placement"})],ti.prototype,"arrowPlacement",2),Ct([Tt({attribute:"arrow-padding",type:Number})],ti.prototype,"arrowPadding",2),Ct([Tt({type:Boolean})],ti.prototype,"flip",2),Ct([Tt({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],ti.prototype,"flipFallbackPlacements",2),Ct([Tt({attribute:"flip-fallback-strategy"})],ti.prototype,"flipFallbackStrategy",2),Ct([Tt({type:Object})],ti.prototype,"flipBoundary",2),Ct([Tt({attribute:"flip-padding",type:Number})],ti.prototype,"flipPadding",2),Ct([Tt({type:Boolean})],ti.prototype,"shift",2),Ct([Tt({type:Object})],ti.prototype,"shiftBoundary",2),Ct([Tt({attribute:"shift-padding",type:Number})],ti.prototype,"shiftPadding",2),Ct([Tt({attribute:"auto-size"})],ti.prototype,"autoSize",2),Ct([Tt()],ti.prototype,"sync",2),Ct([Tt({type:Object})],ti.prototype,"autoSizeBoundary",2),Ct([Tt({attribute:"auto-size-padding",type:Number})],ti.prototype,"autoSizePadding",2),Ct([Tt({attribute:"hover-bridge",type:Boolean})],ti.prototype,"hoverBridge",2);var ei=class extends Lt{constructor(){super(...arguments),this.localize=new xe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger());},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e,o;const i=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?null==(o=null==(e=document.activeElement)?void 0:e.shadowRoot)?void 0:o.activeElement:document.activeElement;this.containingElement&&(null==i?void 0:i.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide();}));}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide();},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger());};}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this);}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0);}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide();}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus();}getMenu(){return this.panel.assignedElements({flatten:!0}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger());}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(i),i.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(s),s.focus());})));}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault();}handleTriggerSlotChange(){this.updateAccessibleTrigger();}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find((t=>He(t).start));let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t;}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false");}}async show(){if(!this.open)return this.open=!0,ne(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ne(this,"sl-after-hide")}reposition(){this.popup.reposition();}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger();}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown);}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy();}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ce(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=re(this,"dropdown.show",{dir:this.localize.dir()});await le(this.popup.popup,t,e),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),await ce(this);const{keyframes:t,options:e}=re(this,"dropdown.hide",{dir:this.localize.dir()});await le(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide");}}render(){return N`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${Qt(this.sync?this.sync:void 0)}
        class=${Kt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};ei.styles=[St,Fe],ei.dependencies={"sl-popup":ti},Ct([Pt(".dropdown")],ei.prototype,"popup",2),Ct([Pt(".dropdown__trigger")],ei.prototype,"trigger",2),Ct([Pt(".dropdown__panel")],ei.prototype,"panel",2),Ct([Tt({type:Boolean,reflect:!0})],ei.prototype,"open",2),Ct([Tt({reflect:!0})],ei.prototype,"placement",2),Ct([Tt({type:Boolean,reflect:!0})],ei.prototype,"disabled",2),Ct([Tt({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ei.prototype,"stayOpenOnSelect",2),Ct([Tt({attribute:!1})],ei.prototype,"containingElement",2),Ct([Tt({type:Number})],ei.prototype,"distance",2),Ct([Tt({type:Number})],ei.prototype,"skidding",2),Ct([Tt({type:Boolean})],ei.prototype,"hoist",2),Ct([Tt({reflect:!0})],ei.prototype,"sync",2),Ct([At("open",{waitUntilFirstUpdate:!0})],ei.prototype,"handleOpenChange",1),se("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),se("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),ei.define("sl-dropdown"),It.define("sl-icon");var oi=r`
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
`,ii=(t="value")=>(e,o)=>{const i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(e,r,n){var l;const a=i.getPropertyOptions(t);if(e===("string"==typeof a.attribute?a.attribute:t)){const e=a.converter||v,i=("function"==typeof e?e:null!=(l=null==e?void 0:e.fromAttribute)?l:v.fromAttribute)(n,a.type);this[t]!==i&&(this[o]=i);}s.call(this,e,r,n);};},si=r`
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
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const ri=Wt(class extends qt{constructor(t){if(super(t),t.type!==Ht&&t.type!==Nt&&t.type!==jt)throw Error("The `live` directive is not allowed on child or event bindings");if(!Dt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===U||e===H)return e;const o=t.element,i=t.name;if(t.type===Ht){if(e===o[i])return U}else if(t.type===jt){if(!!e===o.hasAttribute(i))return U}else if(t.type===Nt&&o.getAttribute(i)===e+"")return U;return ((t,e=Mt)=>{t._$AH=e;})(t),e}});var ni=class extends Lt{constructor(){super(...arguments),this.formControlController=new Me(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new he(this,"help-text","label"),this.localize=new xe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0;}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value;}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value;}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleChange(){this.value=this.input.value,this.emit("sl-change");}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus();}handleFocus(){this.hasFocus=!0,this.emit("sl-focus");}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t);}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit();}));}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible;}handleDisabledChange(){this.formControlController.setValidity(this.disabled);}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity();}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity();}focus(t){this.input.focus(t);}blur(){this.input.blur();}select(){this.input.select();}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o);}setRangeText(t,e,o,i="preserve"){const s=null!=e?e:this.input.selectionStart,r=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value);}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker();}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value);}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value);}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return N`
      <div
        part="form-control"
        class=${Kt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${Kt({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${Qt(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Qt(this.placeholder)}
              minlength=${Qt(this.minlength)}
              maxlength=${Qt(this.maxlength)}
              min=${Qt(this.min)}
              max=${Qt(this.max)}
              step=${Qt(this.step)}
              .value=${ri(this.value)}
              autocapitalize=${Qt(this.autocapitalize)}
              autocomplete=${Qt(this.autocomplete)}
              autocorrect=${Qt(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Qt(this.pattern)}
              enterkeyhint=${Qt(this.enterkeyhint)}
              inputmode=${Qt(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?N`
                  <button
                    part="clear-button"
                    class="input__clear"
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
    `}};ni.styles=[St,si,oi],ni.dependencies={"sl-icon":It},Ct([Pt(".input__control")],ni.prototype,"input",2),Ct([Ot()],ni.prototype,"hasFocus",2),Ct([Tt()],ni.prototype,"title",2),Ct([Tt({reflect:!0})],ni.prototype,"type",2),Ct([Tt()],ni.prototype,"name",2),Ct([Tt()],ni.prototype,"value",2),Ct([ii()],ni.prototype,"defaultValue",2),Ct([Tt({reflect:!0})],ni.prototype,"size",2),Ct([Tt({type:Boolean,reflect:!0})],ni.prototype,"filled",2),Ct([Tt({type:Boolean,reflect:!0})],ni.prototype,"pill",2),Ct([Tt()],ni.prototype,"label",2),Ct([Tt({attribute:"help-text"})],ni.prototype,"helpText",2),Ct([Tt({type:Boolean})],ni.prototype,"clearable",2),Ct([Tt({type:Boolean,reflect:!0})],ni.prototype,"disabled",2),Ct([Tt()],ni.prototype,"placeholder",2),Ct([Tt({type:Boolean,reflect:!0})],ni.prototype,"readonly",2),Ct([Tt({attribute:"password-toggle",type:Boolean})],ni.prototype,"passwordToggle",2),Ct([Tt({attribute:"password-visible",type:Boolean})],ni.prototype,"passwordVisible",2),Ct([Tt({attribute:"no-spin-buttons",type:Boolean})],ni.prototype,"noSpinButtons",2),Ct([Tt({reflect:!0})],ni.prototype,"form",2),Ct([Tt({type:Boolean,reflect:!0})],ni.prototype,"required",2),Ct([Tt()],ni.prototype,"pattern",2),Ct([Tt({type:Number})],ni.prototype,"minlength",2),Ct([Tt({type:Number})],ni.prototype,"maxlength",2),Ct([Tt()],ni.prototype,"min",2),Ct([Tt()],ni.prototype,"max",2),Ct([Tt()],ni.prototype,"step",2),Ct([Tt()],ni.prototype,"autocapitalize",2),Ct([Tt()],ni.prototype,"autocorrect",2),Ct([Tt()],ni.prototype,"autocomplete",2),Ct([Tt({type:Boolean})],ni.prototype,"autofocus",2),Ct([Tt()],ni.prototype,"enterkeyhint",2),Ct([Tt({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],ni.prototype,"spellcheck",2),Ct([Tt()],ni.prototype,"inputmode",2),Ct([At("disabled",{waitUntilFirstUpdate:!0})],ni.prototype,"handleDisabledChange",1),Ct([At("step",{waitUntilFirstUpdate:!0})],ni.prototype,"handleStepChange",1),Ct([At("value",{waitUntilFirstUpdate:!0})],ni.prototype,"handleValueChange",1),ni.define("sl-input");var li=r`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,ai=class extends Lt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu");}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath(),i=o.find((t=>{var o;return e.includes((null==(o=null==t?void 0:t.getAttribute)?void 0:o.call(t,"role"))||"")}));if(!i)return;if(o.find((t=>{var e;return "menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))}))!==this)return;const s=i;"checkbox"===s.type&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}});}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click();}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?i++:"ArrowUp"===t.key?i--:"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus());}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e);}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0]);}isMenuItem(t){var e;return "sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return [...this.defaultSlot.assignedElements({flatten:!0})].filter((t=>!(t.inert||!this.isMenuItem(t))))}getCurrentItem(){return this.getAllItems().find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){this.getAllItems().forEach((e=>{e.setAttribute("tabindex",e===t?"0":"-1");}));}render(){return N`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ai.styles=[St,li],Ct([Pt("slot")],ai.prototype,"defaultSlot",2),ai.define("sl-menu");var ci=r`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const hi=(t,e)=>{const o=t._$AN;if(void 0===o)return !1;for(const t of o)t._$AO?.(e,!1),hi(t,e);return !0},di=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e;}while(0===o?.size)},ui=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),bi(e);}};function pi(t){void 0!==this._$AN?(di(this),this._$AM=t,ui(this)):this._$AM=t;}function mi(t,e=!1,o=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=o;t<i.length;t++)hi(i[t],!1),di(i[t]);else null!=i&&(hi(i,!1),di(i));else hi(this,t);}const bi=t=>{t.type==Ut&&(t._$AP??=mi,t._$AQ??=pi);};class fi extends qt{constructor(){super(...arguments),this._$AN=void 0;}_$AT(t,e,o){super._$AT(t,e,o),ui(this),this.isConnected=t._$AU;}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(hi(this,t),di(this));}setValue(t){if(Dt(this._$Ct))this._$Ct._$AI(t,this);else {const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0);}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gi{}const vi=new WeakMap,yi=Wt(class extends fi{render(t){return H}update(t,[e]){const o=e!==this.Y;return o&&void 0!==this.Y&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),H}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let o=vi.get(e);void 0===o&&(o=new WeakMap,vi.set(e,o)),void 0!==o.get(this.Y)&&this.Y.call(this.ht,void 0),o.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t);}else this.Y.value=t;}get lt(){return "function"==typeof this.Y?vi.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0);}reconnected(){this.rt(this.ct);}});var wi=class{constructor(t,e){this.popupRef=new gi,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`);},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu();},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t);}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu();},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu();},this.handlePopupMouseover=t=>{t.stopPropagation();},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter((t=>"sl-menu"===t.localName))[0],o=this.host.matches(":dir(rtl)");if(!e)return;const{left:i,top:s,width:r,height:n}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+n}px`);},(this.host=t).addController(this),this.hasSlotController=e;}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners();}hostDisconnected(){this.removeListeners();}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners();}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0);}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1);}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let o=null;for(const t of e.assignedElements())if(o=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==o.length)break;if(o&&0!==o.length){o[0].setAttribute("tabindex","0");for(let t=1;t!==o.length;++t)o[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then((()=>{o[0]instanceof HTMLElement&&o[0].focus();})),this.host.requestUpdate()));}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate());}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(!0);}),this.submenuOpenDelay)):this.setSubmenuState(!0);}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1);}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce(((t,o)=>{var i;const s=null!=(i=e.get(o))?i:new CSSUnitValue(0,"px");return t-(s instanceof CSSUnitValue?s:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=o;}isExpanded(){return !!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t=this.host.matches(":dir(rtl)");return this.isConnected?N`
      <sl-popup
        ${yi(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:N` <slot name="submenu" hidden></slot> `}},_i=class extends Lt{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new he(this,"submenu"),this.submenuController=new wi(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation());},this.handleMouseOver=t=>{this.focus(),t.stopPropagation();};}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver);}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver);}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t;}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked");}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false");}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"));}getTextLabel(){return function(t){if(!t)return "";const e=t.assignedNodes({flatten:!0});let o="";return [...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent);})),o}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.matches(":dir(rtl)"),e=this.submenuController.isExpanded();return N`
      <div
        id="anchor"
        part="base"
        class=${Kt({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};_i.styles=[St,ci],_i.dependencies={"sl-icon":It,"sl-popup":ti,"sl-spinner":ze},Ct([Pt("slot:not([name])")],_i.prototype,"defaultSlot",2),Ct([Pt(".menu-item")],_i.prototype,"menuItem",2),Ct([Tt()],_i.prototype,"type",2),Ct([Tt({type:Boolean,reflect:!0})],_i.prototype,"checked",2),Ct([Tt()],_i.prototype,"value",2),Ct([Tt({type:Boolean,reflect:!0})],_i.prototype,"loading",2),Ct([Tt({type:Boolean,reflect:!0})],_i.prototype,"disabled",2),Ct([At("checked")],_i.prototype,"handleCheckedChange",1),Ct([At("disabled")],_i.prototype,"handleDisabledChange",1),Ct([At("type")],_i.prototype,"handleTypeChange",1),_i.define("sl-menu-item");var xi=r`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,ki=class extends Lt{constructor(){super(...arguments),this.localize=new xe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1;}handleRemoveClick(){this.emit("sl-remove");}render(){return N`
      <span
        part="base"
        class=${Kt({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?N`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};ki.styles=[St,xi],ki.dependencies={"sl-icon-button":te},Ct([Tt({reflect:!0})],ki.prototype,"variant",2),Ct([Tt({reflect:!0})],ki.prototype,"size",2),Ct([Tt({type:Boolean,reflect:!0})],ki.prototype,"pill",2),Ct([Tt({type:Boolean})],ki.prototype,"removable",2);var $i=r`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Suffix */
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
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

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function Ci(t,e,o="vertical",i="smooth"){const s=function(t,e){return {top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),r=s.top+e.scrollTop,n=s.left+e.scrollLeft,l=e.scrollLeft,a=e.scrollLeft+e.offsetWidth,c=e.scrollTop,h=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(n<l?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>a&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),"vertical"!==o&&"both"!==o||(r<c?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>h&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}));}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ai extends qt{constructor(t){if(super(t),this.it=H,t.type!==Ut)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||null==t)return this._t=void 0,this.it=t;if(t===U)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ai.directiveName="unsafeHTML",Ai.resultType=1;const Si=Wt(Ai);var Ei=class extends Lt{constructor(){super(...arguments),this.formControlController=new Me(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new he(this,"help-text","label"),this.localize=new xe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>N`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide();},this.handleDocumentKeyDown=t=>{const e=t.target,o=null!==e.closest(".select__clear"),i=null!==e.closest("sl-icon-button");if(!o&&!i){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),o=e.indexOf(this.currentOption);let i=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(i=o+1,i>e.length-1&&(i=0)):"ArrowUp"===t.key?(i=o-1,i<0&&(i=e.length-1)):"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),this.setCurrentOption(e[i]);}if(1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show();}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e){if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide();};}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1;}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}));});}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy();}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus");}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleLabelClick(){this.displayInput.focus();}handleComboboxMouseDown(t){const e=t.composedPath().some((t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase()));this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open);}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t));}handleClearClick(t){t.stopPropagation(),""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then((()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change");})));}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault();}handleOptionClick(t){const e=t.target.closest("sl-option"),o=this.value;e&&!e.disabled&&(this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then((()=>this.displayInput.focus({preventScroll:!0}))),this.value!==o&&this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=[];customElements.get("sl-option")?(t.forEach((t=>o.push(t.value))),this.setSelectedOptions(t.filter((t=>e.includes(t.value))))):customElements.whenDefined("sl-option").then((()=>this.handleDefaultSlotChange()));}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})));}getAllOptions(){return [...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach((t=>{t.current=!1,t.tabIndex=-1;})),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus());}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach((t=>t.selected=!1)),o.length&&o.forEach((t=>t.selected=!0)),this.selectionChanged();}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged();}selectionChanged(){var t,e,o,i;this.selectedOptions=this.getAllOptions().filter((t=>t.selected)),this.multiple?(this.value=this.selectedOptions.map((t=>t.value)),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=null!=(e=null==(t=this.selectedOptions[0])?void 0:t.value)?e:"",this.displayLabel=null!=(i=null==(o=this.selectedOptions[0])?void 0:o.getTextLabel())?i:""),this.updateComplete.then((()=>{this.formControlController.updateValidity();}));}get tags(){return this.selectedOptions.map(((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return N`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof o?Si(o):o}
        </div>`}return e===this.maxOptionsVisible?N`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:N``}))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t);}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange());}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter((t=>e.includes(t.value))));}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ce(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame((()=>{this.setCurrentOption(this.currentOption);}));const{keyframes:t,options:e}=re(this,"select.show",{dir:this.localize.dir()});await le(this.popup.popup,t,e),this.currentOption&&Ci(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),await ce(this);const{keyframes:t,options:e}=re(this,"select.hide",{dir:this.localize.dir()});await le(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide");}}async show(){if(!this.open&&!this.disabled)return this.open=!0,ne(this,"sl-after-show");this.open=!1;}async hide(){if(this.open&&!this.disabled)return this.open=!1,ne(this,"sl-after-hide");this.open=!1;}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity();}focus(t){this.displayInput.focus(t);}blur(){this.displayInput.blur();}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&0===this.value.length;return N`
      <div
        part="form-control"
        class=${Kt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Kt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?N`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?N`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
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
    `}};Ei.styles=[St,si,$i],Ei.dependencies={"sl-icon":It,"sl-popup":ti,"sl-tag":ki},Ct([Pt(".select")],Ei.prototype,"popup",2),Ct([Pt(".select__combobox")],Ei.prototype,"combobox",2),Ct([Pt(".select__display-input")],Ei.prototype,"displayInput",2),Ct([Pt(".select__value-input")],Ei.prototype,"valueInput",2),Ct([Pt(".select__listbox")],Ei.prototype,"listbox",2),Ct([Ot()],Ei.prototype,"hasFocus",2),Ct([Ot()],Ei.prototype,"displayLabel",2),Ct([Ot()],Ei.prototype,"currentOption",2),Ct([Ot()],Ei.prototype,"selectedOptions",2),Ct([Tt()],Ei.prototype,"name",2),Ct([Tt({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],Ei.prototype,"value",2),Ct([ii()],Ei.prototype,"defaultValue",2),Ct([Tt({reflect:!0})],Ei.prototype,"size",2),Ct([Tt()],Ei.prototype,"placeholder",2),Ct([Tt({type:Boolean,reflect:!0})],Ei.prototype,"multiple",2),Ct([Tt({attribute:"max-options-visible",type:Number})],Ei.prototype,"maxOptionsVisible",2),Ct([Tt({type:Boolean,reflect:!0})],Ei.prototype,"disabled",2),Ct([Tt({type:Boolean})],Ei.prototype,"clearable",2),Ct([Tt({type:Boolean,reflect:!0})],Ei.prototype,"open",2),Ct([Tt({type:Boolean})],Ei.prototype,"hoist",2),Ct([Tt({type:Boolean,reflect:!0})],Ei.prototype,"filled",2),Ct([Tt({type:Boolean,reflect:!0})],Ei.prototype,"pill",2),Ct([Tt()],Ei.prototype,"label",2),Ct([Tt({reflect:!0})],Ei.prototype,"placement",2),Ct([Tt({attribute:"help-text"})],Ei.prototype,"helpText",2),Ct([Tt({reflect:!0})],Ei.prototype,"form",2),Ct([Tt({type:Boolean,reflect:!0})],Ei.prototype,"required",2),Ct([Tt()],Ei.prototype,"getTag",2),Ct([At("disabled",{waitUntilFirstUpdate:!0})],Ei.prototype,"handleDisabledChange",1),Ct([At("value",{waitUntilFirstUpdate:!0})],Ei.prototype,"handleValueChange",1),Ct([At("open",{waitUntilFirstUpdate:!0})],Ei.prototype,"handleOpenChange",1),se("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),se("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Ei.define("sl-select");var zi=r`
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
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Ti=class extends Lt{constructor(){super(...arguments),this.formControlController=new Me(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new he(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText="";}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleBlur(){this.hasFocus=!1,this.emit("sl-blur");}handleInput(){this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t);}handleClick(){this.checked=!this.checked,this.emit("sl-change");}handleFocus(){this.hasFocus=!0,this.emit("sl-focus");}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"));}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity();}handleDisabledChange(){this.formControlController.setValidity(!0);}click(){this.input.click();}focus(t){this.input.focus(t);}blur(){this.input.blur();}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return N`
      <div
        class=${Kt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${Kt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Qt(this.value)}
            .checked=${ri(this.checked)}
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
    `}};Ti.styles=[St,si,zi],Ct([Pt('input[type="checkbox"]')],Ti.prototype,"input",2),Ct([Ot()],Ti.prototype,"hasFocus",2),Ct([Tt()],Ti.prototype,"title",2),Ct([Tt()],Ti.prototype,"name",2),Ct([Tt()],Ti.prototype,"value",2),Ct([Tt({reflect:!0})],Ti.prototype,"size",2),Ct([Tt({type:Boolean,reflect:!0})],Ti.prototype,"disabled",2),Ct([Tt({type:Boolean,reflect:!0})],Ti.prototype,"checked",2),Ct([ii("checked")],Ti.prototype,"defaultChecked",2),Ct([Tt({reflect:!0})],Ti.prototype,"form",2),Ct([Tt({type:Boolean,reflect:!0})],Ti.prototype,"required",2),Ct([Tt({attribute:"help-text"})],Ti.prototype,"helpText",2),Ct([At("checked",{waitUntilFirstUpdate:!0})],Ti.prototype,"handleCheckedChange",1),Ct([At("disabled",{waitUntilFirstUpdate:!0})],Ti.prototype,"handleDisabledChange",1),Ti.define("sl-switch");

const template$g = document.createElement('template');

template$g.innerHTML = `
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
      let $template = template$g.content.cloneNode(true);
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

const template$f = document.createElement('template');
template$f.innerHTML = `
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
      this.appendChild(template$f.content.cloneNode(true));
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

const TTL = 500;
const MAX_TRIES = 5;

class Socket {
    static resources = {}
    static defaultSocket = undefined

    constructor(url, targets = {}, ttl = 1000) {
        // Core properties
        this.url = url;
        this.targets = targets;
        this.state = "INITIAL";
        this.websocket = undefined;
        this.lrh = Date.now();  // Last received heartbeat
        this.ttl = ttl | TTL;   // Time to live
        this.retries = 0;
        this.isDisabled = true;
        this.queue = [];
        this.initialStateReceived = false;

        // Bind methods to maintain proper 'this' context
        this.watchdog = this.watchdog.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.heartbeat = this.heartbeat.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.connect = this.connect.bind(this);
        this.disable = this.disable.bind(this);
        this.enable = this.enable.bind(this);

        // Initialize socket
        Socket.register(url, this);
        this.addTarget("heartbeat", this.heartbeat);
        this.connect(url);
        Socket.defaultSocket = this;
    }

    // -------- Connection Management -------- //
    connect(url, callback = () => {}) {
        console.info("Connecting websocket: ws://" + url);
        this.websocket = undefined;
        this.state = CONNECTING;
        this.connectCallback = callback;

        try {
            this.websocket = new WebSocket("ws://" + url);
            this.websocket.onopen = this.onOpen;
            this.websocket.onclose = this.onClose;
            this.websocket.onmessage = this.onMessage;
            this.websocket.onerror = (event) => {
                console.error("WebSocket error observed:", event);
            };
        } catch (e) {
            Logging.error("WebSocket connection error:", e);
            this.state = FAILED;
        }
        return this;
    }

    disconnect() {
        if (this.websocket?.readyState === 1) {
            this.websocket.close();
        }
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
        this.state = DISCONNECTED;
        this.retries = 0;
    }

    reconnect() {
        if (this.retries > MAX_TRIES) {
            this.disconnect();
        } else {
            this.retries++;
            if (this.websocket) {
                this.websocket.close();
            }
            this.connect(this.url, this.connectCallback);
            this.state = RECONNECT;
        }
    }

    // -------- State Management -------- //
    enable() {
        if (this.isDisabled) {
            for (let key in this.targets) {
                if (parseInt(key)) {
                    this.targets[key]("enable");
                }
            }
            this.isDisabled = false;
        }
    }

    disable() {
        if (!this.isDisabled) {
            for (let key in this.targets) {
                if (parseInt(key)) {
                    this.targets[key]("disable");
                }
            }
            this.isDisabled = true;
        }
    }

    // -------- Message Handling -------- //
    onMessage(msg) {
        // Skip heartbeat logging
        if (msg.data !== `{"heartbeat": "heartbeat"}` && msg.data !== `{"heartbeat":"true"}`) {
            Logging.debug("SOCKET RECEIVED:\n ", msg.data);
        }

        if (this.state !== CONNECTED) {
            this.state = CONNECTED;
        }

        // Process any queued messages
        this.processQueue();

        try {
            const data = JSON.parse(msg.data);
            const key = Object.keys(data)[0];
            this.lrh = Date.now();

            if (key === "states") {
                // Handle state updates
                data[key].forEach(state => {
                    if (state.hash && this.targets.hasOwnProperty(state.hash)) {
                        this.targets[state.hash](state.value, state.descriptor);
                    }
                });
                
                // Mark initial state as received if this is first states message
                if (!this.initialStateReceived) {
                    this.initialStateReceived = true;
                    this.enable();  // Enable components after receiving initial state
                }
            } else if (this.targets.hasOwnProperty(key)) {
                this.targets[key](data[key]);
            }
        } catch (e) {
            Logging.error("Error processing message:", e);
        }
    }

    sendMessage(key, msg) {
        const data = { [key]: msg };

        // Queue message if socket isn't ready
        if (this.websocket.readyState !== 1) {
            this.queue.push({ key, msg });
            Logging.debug("Queuing message:", data);
            return this;
        }

        // Log non-heartbeat messages
        if (key !== "heartbeat") {
            Logging.debug("SOCKET SENDING:", data);
        }

        this.websocket.send(JSON.stringify(data));
        return this;
    }

    processQueue() {
        if (this.queue.length > 0) {
            // Process queued messages with slight delay between each
            this.queue.forEach((item, index) => {
                setTimeout(() => {
                    this.sendMessage(item.key, item.msg);
                }, index * 5);
            });
            this.queue = [];
        }
    }

    // -------- Lifecycle Events -------- //
    onOpen(event) {
        if (this.websocket.readyState === 1) {
            this.state = CONNECTING;
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.interval = window.setInterval(this.watchdog, this.ttl);
            
            this.heartbeat();
            window.success("WebSocket connection established");
            this.connectCallback();
            this.sendMessage("allStatesRequest", true);
        }
    }

    onClose(event) {
        Logging.warn('Connection closed', event);
        this.disable();
        
        if (event.code === 1000) {
            window.warn("WebSocket closed normally\n" + event);
        } else {
            console.error("WebSocket closed abnormally with code " + event.code);
        }
        this.state = DISCONNECTED;
    }

    // -------- Heartbeat & Watchdog -------- //
    heartbeat(msg = true) {
        this.lrh = Date.now();
        this.sendMessage("heartbeat", msg);
    }

    watchdog() {
        const elapsed = Date.now() - this.lrh;

        if (this.state === CONNECTING || this.state === RECONNECT) {
            this.state = WAITING;
            this.heartbeat();
        } else if (this.state === FAILED) {
            this.reconnect();
        } else if (this.state === WAITING && elapsed > 2 * this.ttl) {
            this.disable();
            this.disconnect();
            this.interval = setInterval(() => {
                this.reconnect();
            }, 5000);
        } else if (elapsed > this.ttl) {
            this.sendMessage("heartbeat", false);
            this.state = WAITING;
        }
    }

    // -------- Target Management -------- //
    static register(name, socket) {
        if (Socket.resources[name]) {
            Logging.warn("Socket", "Overwriting existing socket registration");
        }
        Socket.resources[name] = socket;
    }

    addTarget(name, fn) {
        console.log(`Registering target: ${name}`);
        this.targets[name] = fn;
        return this;
    }

    setTarget(name, fn) {
        console.log(`Setting target: ${name}`);
        this.targets[name] = fn;
        return this;
    }

    removeTarget(name) {
        console.log(`Removing target: ${name}`);
        delete this.targets[name];
        return this;
    }
}

window.WS = Socket;

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

const template$e = document.createElement('template');
template$e.innerHTML = `
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
        this.appendChild(template$e.content.cloneNode(true));
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

const template$d = document.createElement('template');

template$d.innerHTML = `
    <style>
        @import url("static/css/style.css");
        .hw-section {
            flex-wrap: wrap;
        }
        .hidden {
            visibility: hidden;
            height: 0;
            width: 0;
            margin: 0;
            padding: 0;
        }
    </style>
    <div class="hw-section">
        <button id="toggle-visibility"><span id="buttonText">Toggle</span></button>
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
        const buttonText = this.querySelector("#buttonText");
        const card = this.querySelector('.card');
        if (card) {
            if (this._isVisible) {
                card.classList.remove('hidden');
                buttonText.textContent = "Toggle";
            } else {
                card.classList.add('hidden');
                buttonText.innerHTML = this._descriptor.name.replace(/ /g, "<br>");
            }
        }
    }

    render() {
        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        let $template = template$d.content.cloneNode(true);
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

let $template = document.createElement("template");
$template.innerHTML = `
`;

class ConnectedElement extends HTMLElement {
  constructor() {
      super();
      // Core properties
      this._descriptor = {};
      this._value = {};
      this.url = this.getAttribute('url');
      this.configurable = this.getAttribute('configurable');
      this.socket = Socket.defaultSocket;
      this.isRendering = false;

      // Bind methods to maintain proper 'this' context
      this.onclick = this.onclick.bind(this);
      this.onchange = this.onchange.bind(this);
      this.onsubmit = this.onsubmit.bind(this);
      this.update = this.update.bind(this);
      this.render = this.render.bind(this);
  }

  // -------- Update & Rendering -------- //
  update(val, descriptor) {
      // Log updates for debugging
      if (this._descriptor.hash) {
          console.log(`Updating element with hash: ${this._descriptor.hash}, value:`, val, 'descriptor:', descriptor);
      }

      // Handle enable/disable commands
      if (val === "enable" || val === "disable") {
          val === "enable" ? this.enable() : this.disable();
          return;
      }

      let shouldRender = false;

      // Update descriptor if provided
      if (descriptor) {
          // Register for updates if getting hash for first time
          if (!this._descriptor.hash && descriptor.hash) {
              this.socket.setTarget(descriptor.hash, this.update);
          }
          this._descriptor = { ...this._descriptor, ...descriptor };
          shouldRender = true;
      }

      // Update value if provided
      if (val !== undefined) {
          this._value = val;
          shouldRender = true;
      }

      // Schedule render if needed
      if (shouldRender && !this.isRendering) {
          this.isRendering = true;
          Promise.resolve().then(() => {
              this.render();
              this.isRendering = false;
          });
      }
  }

  // -------- Enable/Disable Management -------- //
  disable() {
      if (!this.parentNode.querySelector(".overlay")) {
          let $parent = this.parentNode;
          let $overlay = document.createElement("div");
          $parent.style.position = "relative";
          $overlay.classList.add("overlay");
          $parent.appendChild($overlay);
      }
  }

  enable() {
      console.log("Re-enabling interface");
      const overlay = this.parentNode.querySelector(".overlay");
      if (overlay) {
          overlay.remove();
      }
  }

  // -------- Properties -------- //
  get value() {
      return this._value;
  }

  set value(val) {
      // Delegate to update to maintain single source of truth
      this.update(val, null);
  }

  get descriptor() {
      return this._descriptor;
  }

  set descriptor(val) {
      // Delegate to update to maintain single source of truth
      this.update(null, val);
  }

  get children() {
      const children = this.descriptor.children || [];
      const $children = [];

      for (let child of children) {
          // Verify component exists
          if (!customElements.get(child.component)) {
              console.error(`Component ${child.component} not found`);
              continue;
          }

          // Create child element
          const $child = document.createElement("div");
          $child.innerHTML = `<${child.component}></${child.component}>`;
          $child.firstChild.descriptor = child;
          $children.push($child);
      }

      return $children;
  }

  // -------- Lifecycle Methods -------- //
  connectedCallback() {
      // Register for updates if we have a hash
      if (this._descriptor.hash) {
          this.socket.setTarget(this._descriptor.hash, this.update);
      }

      // Initial render
      if (!this.isRendering) {
          this.isRendering = true;
          Promise.resolve().then(() => {
              this.render();
              this.isRendering = false;
          });
      }
  }

  // -------- Event Handlers -------- //
  // These must be implemented by child classes
  onclick(e) {
      throw new Error(`${this.constructor.name} must implement onclick`);
  }

  onchange(e) {
      throw new Error(`${this.constructor.name} must implement onchange`);
  }

  onsubmit(e) {
      throw new Error(`${this.constructor.name} must implement onsubmit`);
  }

  // -------- Abstract Methods -------- //
  render() {
      throw new Error(`${this.constructor.name} must implement render`);
  }
}

// Uncomment the following line to define the custom element
//customElements.define('hw-module', HwModule);

const template$c = document.createElement('template');

template$c.innerHTML = `
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
          for (let child of this._descriptor.children){
              let $child = document.createElement("div", {is:child.component});
              $child.innerHTML = `<${child.component}></${child.component}>`;
              $child.firstChild.descriptor = child;
              $children.push($child);
          }
      }
      return $children
  }


  render(){
      let $template = template$c.content.cloneNode(true);
      // Depending on variant, set values
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

window.customElements.define('no-show', NoShow);

const template$b = document.createElement('template');

template$b.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <span>
            <span class="label">A label</span>
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
        let $template = template$b.content.cloneNode(true);
        let $switch = $template.querySelector("sl-switch");
        // 1. Set label for switch
        let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        const disable = this._descriptor.disable;
        $template.querySelector(".label").innerText = name;
        // 2. Set checked value for switch
        $switch.checked = this._value;
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
    }
}

window.customElements.define('rx-bool', RxBool);

/**
 * The RxIndicator component is a visual indicator that blinks to reflect some state. 
 * It uses a simple dot element to represent its current state, and when the component is active, 
 * it blinks the dot in an on/off pattern.

Associated Parameters:

name: Label for the indicator.
value: Controls whether the indicator is blinking (true) or off (false).
disable: Disables or enables the blinking effect.
Events:

The blinking effect occurs based on the internal state and is refreshed periodically.

 */

const template$a = document.createElement('template');

// Creates a blinker effect
template$a.innerHTML = `
    <style>
        .dot {
            height: 1.5rem;
            width: 1.5rem;
            margin: 0.5rem 1rem;
            background-color: #5d5d5d;
            border-radius: 50%;
            display: inline;
            transition: background-color 0.3s ease-in, box-shadow 0.5s ease-in;
        }
        .dot.on {
            background-color: var(--on-color, #4CAF50); /* Default to green if no custom color is set */
            box-shadow: 0 0 1rem var(--on-color, #4CAF50);
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

class RxIndicator extends ConnectedElement {
    constructor() {
        super();
        this._value = true;
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    blink($indicator) {
        if ($indicator.classList.contains("on")) {
            $indicator.classList.remove("on");
        } else {
            $indicator.classList.add("on");
        }
    }

    render() {
        const disable = this._descriptor.disable;
        const inverse = this._descriptor.inverse;
        const blinkactive = this._descriptor.blink;
        const color = this._descriptor.color|| "#4CAF50";
        let $template = template$a.content.cloneNode(true);
        let $indicator = $template.querySelector(".dot");
        // 1. Set label for switch
        let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        $template.querySelector(".label").innerText = name;
        // 2. Determine the effective value based on 'inverse'
        const effectiveValue = inverse ? !this.value : this.value;
        // 2. Set checked value for switch
        //$switch.checked = this._value
        if (effectiveValue) {
            if (blinkactive){
            setInterval(this.blink, 500, $indicator);
            $indicator.style.setProperty('--on-color', color);
            }else {
                $indicator.style.setProperty('--on-color', color);
                $indicator.classList.add("on");
            }
        }
        if (!effectiveValue){
            $indicator.classList.remove("on");
        }
        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('rx-indicator', RxIndicator);

/**
 * RxLabel Web Component
 * 
 * This custom element creates a stylish label that can display a current state
 * with dynamic color coding and optional blinking effect.
 * 
 * Features:
 * - Displays a label with a customizable name
 * - Shows a current state text value
 * - Changes text color based on the state (neutral, success, warning, danger)
 * - Optional blinking effect for emphasis
 * 
 * Configuration parameters:
 * - name (string): The label text to display before the state value
 * - state (string): The current state, affects text color. Possible values: "neutral" (default), "success", "warning", "danger"
 * - isBlinking (boolean): Whether the state value should blink
 * 
 * JSON Configuration example:
    {
      "name": "States Routines",
      "hardware": "Kincony_KC868_A8S",
      "component": "hw-section",
      "type": "ModbusWriteHoldingRegister",
      "address": 2,
      "children": [
        {
          "id": 1,
          "name": "Current State:",
          "state": "neutral",
          "isBlinking": false,
          "component": "rx-label",
          "hash": 1708159393
        }
      ]
    },
 */

const template$9 = document.createElement('template');

template$9.innerHTML = `
        <style>
            .state-tag {
                --sl-color-neutral-0: white;
                --sl-color-success-200: green;
                --sl-color-warning-200: orange;
                --sl-color-danger-200: red;
                background-color: var(--sl-color-neutral-50);
                padding: 0.1rem;
                border-radius: var(--sl-border-radius-medium);
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
            .blinking {
                animation: blink 1s ease-in-out infinite;
            }
            .label-name {
                font-weight: bold;
            }
        </style>
        <div class="card">
            <span class="label-name">Current State:</span><br>
            <span id="stateTag" class="state-tag"></span>
        </div>
        `;

class RxLabel extends ConnectedElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template$9.content.cloneNode(true));
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.stateTag = this.shadowRoot.getElementById('stateTag');
        this.labelName = this.shadowRoot.querySelector('.label-name');
    }

    render() {
        const value = this._value || "-";
        const name = this._descriptor.name || "Current State:";
        const state = this._descriptor.state || "neutral";
        const isBlinking = this._descriptor.isBlinking;
        const disable = this._descriptor.disable;

        this.labelName.textContent = name;
        this.stateTag.textContent = value;

        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
        // Set color based on state
        switch (state) {
            case "success":
                this.stateTag.style.color = 'var(--sl-color-success-600)';
                break;
            case "warning":
                this.stateTag.style.color = 'var(--sl-color-warning-600)';
                break;
            case "danger":
                this.stateTag.style.color = 'var(--sl-color-danger-600)';
                break;
            default:
                this.stateTag.style.color = 'var(--sl-color-neutral-0)';
        }

        // Toggle blinking animation
        if (isBlinking) {
            this.stateTag.classList.add('blinking');
        } else {
            this.stateTag.classList.remove('blinking');
        }
    }
}

window.customElements.define('rx-label', RxLabel);

/**
 * Level Bar Component
 * 
 * The `RxLevelBar` component is a customizable visual indicator for monitoring a value within a defined range.
 * It can be oriented vertically or horizontally and supports alarms and warnings based on specified thresholds.
 * This component adjusts its display based on the provided configuration and the current value,
 * making it ideal for real-time monitoring and alerting.
 * 
 * JSON Configuration Parameters:
 * - name: Title name (e.g., "Temperature Level")
 * - orientation: Orientation of the bar, 'vertical' or 'horizontal' (e.g., "vertical")
 * - barLength: Custom length for the level indicator bar (e.g., "500px")
 *              If not specified, defaults to "200px".
 *              For vertical orientation, this sets the height of the bar.
 *              For horizontal orientation, this sets the width of the bar. 
 * - unit: Unit of measurement (e.g., "°C")
 * - max: Maximum displayable value on top of the level bar (e.g., 100)
 * - min: Minimum displayable value at the bottom of the level bar (e.g., -100)
 * - isLabelAlarmWarningOn: Boolean value to display the alarm and warning labels (e.g., true)
 * - alarmHigh: Threshold for high alarm (consigne + alarmHigh) (e.g., 75)
 * - warningHigh: Threshold for high warning (consigne + warningHigh) (e.g., 25)
 * - consigne: Target value or setpoint (e.g., 0)
 * - warningLow: Threshold for low warning (consigne + warningLow) (e.g., 25)
 * - alarmLow: Threshold for low alarm (consigne + alarmLow) (e.g., 75)
 * 
 * JSON Full Usage Example:
   {
      "name": "Analogic Level",
      "hardware": "Kincony_KC868_A8S",
      "component": "hw-section",
      "type": "ModbusWriteHoldingRegister",
      "address": 2,
      "children": [
        {
          "id": 1,
          "component": "rx-level-bar",
          "orientation": "vertical",
          "barLength": "200px",
          "unit": "°C",
          "max": 100,
          "min": -100,
          "isLabelAlarmWarningOn": true,
          "alarmHigh": 75,
          "warningHigh": 25,
          "consigne": 0,
          "warningLow": 25,
          "alarmLow": 75,
          "hash": 1708159391
        }
      ]
    },
 */

const template$8 = document.createElement('template');

template$8.innerHTML = `
<style>
    .card {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        gap: 0.75em;
    }
    .container {
        display: flex;
        justify-content: space-evenly;
        gap: 0.5em;
    }
    .horizontal-reverse {
        flex-direction: row-reverse;
    }
    .horizontal {
        flex-direction: row;
    }
    .vertical {
        flex-direction: column;
    }
    .labels-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        min-width: 4em;
    }
    .bar-container {
        display: flex;
        align-items: center;
        gap: 0.25em;
    }
    .level-indicator {
        background-color: #ddd;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        display: flex;
    }
    .vertical-level {
        width: 40px;
        height: 200px;
        flex-direction: column-reverse;
    }
    .horizontal-level {
        height: 40px;
        width: 200px;
        flex-direction: row;
    }
    .level-bar {
        background-color: "var(--sl-color-success-400)";
    }
    .vertical .level-bar {
        width: 100%;
    }
    .horizontal .level-bar {
        height: 100%;
    }
    .indicator-bar {
        position: absolute;
    }
    .vertical-level .indicator-bar {
        width: 100%;
        height: 2px;
    }
    .horizontal-level .indicator-bar {
        height: 100%;
        width: 2px;
    }
    .warning-indicator {
        background-color: var(--sl-color-warning-400);
    }
    .alarm-indicator {
        background-color: var(--sl-color-danger-400);
    }
    .current {
        color: "var(--sl-color-success-600)";
        font-size: 28px;
        text-align: center;
    }
    .alarm-high-label, .alarm-low-label, .warning-high-label, .warning-low-label {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .alarm-low-label {
        color: var(--sl-color-danger-600);
    }
    .warning-low-label {
        color: var(--sl-color-warning-600);
    }
    .warning-high-label {
        color: var(--sl-color-warning-600);
    }
    .alarm-high-label {
        color: var(--sl-color-danger-600);
    }
    .min, .max {
        color: white;
        text-align: center;
    }
    .bold {
        font-weight: bold;
    }
    .level-bar-font-size {
        font-size: 20px;
    }
</style>

<div class="card">
    <span class="title level-bar-font-size bold">TITLE</span>
    <div class="container">
        <div class="labels-container level-bar-font-size bold">
            <span class="alarm-high-label"></span>
            <span class="warning-high-label"></span>
            <span class="warning-low-label"></span>
            <span class="alarm-low-label"></span>
        </div>
        <div class="bar-container level-bar-font-size bold">
            <span class="max">MAX</span>
            <div class="level-indicator">
                <div class="level-bar"></div>
                <div class="indicator-bar warning-indicator warning-low"></div>
                <div class="indicator-bar warning-indicator warning-high"></div>
                <div class="indicator-bar alarm-indicator alarm-low"></div>
                <div class="indicator-bar alarm-indicator alarm-high"></div>
            </div>
            <span class="min">MIN</span>
        </div>
        <div class="labels-container level-bar-font-size bold"></div>
    </div>
    <div class="horizontal">
        <span class="current">CURRENT</span>
        <span class="unit current">UNIT</span>
    </div>
</div>
`;

class RxLevelBar extends ConnectedElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template$8.content.cloneNode(true));
        this._current = parseFloat(this.getAttribute('current'));
        this._max = parseFloat(this.getAttribute('max'));
        this._min = parseFloat(this.getAttribute('min'));
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.render();
    }

    static get observedAttributes() {
        return ['current'];
    }

    // ------------------ Callback Methods ------------------ //
    render() {
        const disable = this._descriptor.disable;
        const container = this.shadowRoot.querySelector('.container');
        const labelsContainer = this.shadowRoot.querySelector('.labels-container');
        const barContainer = this.shadowRoot.querySelector('.bar-container');
        const levelIndicator = this.shadowRoot.querySelector('.level-indicator');
        const bar = this.shadowRoot.querySelector('.level-bar');
        const title = this.shadowRoot.querySelector('.title');

        const alarm_high_label = this.shadowRoot.querySelector('.alarm-high-label');
        const warning_high_label = this.shadowRoot.querySelector('.warning-high-label');
        const warning_low_label = this.shadowRoot.querySelector('.warning-low-label');
        const alarm_low_label = this.shadowRoot.querySelector('.alarm-low-label');

        const max_label = this.shadowRoot.querySelector('.max');
        const alarm_high_indicator = this.shadowRoot.querySelector('.alarm-high');
        const warning_high_indicator = this.shadowRoot.querySelector('.warning-high');
        const warning_low_indicator = this.shadowRoot.querySelector('.warning-low');
        const alarm_low_indicator = this.shadowRoot.querySelector('.alarm-low');
        const min_label = this.shadowRoot.querySelector('.min');
        const current_label = this.shadowRoot.querySelector('.current');
        const unit_label = this.shadowRoot.querySelector('.unit');

        alarm_high_indicator.style.display = 'none';
        warning_high_indicator.style.display = 'none';
        warning_low_indicator.style.display = 'none';
        alarm_low_indicator.style.display = 'none';

        alarm_high_label.style.display = 'none';
        alarm_low_label.style.display = 'none';
        warning_high_label.style.display = 'none';
        warning_low_label.style.display = 'none';

        const current = this._value;
        const name = this._descriptor.name;
        const orientation = this._descriptor.orientation;
        const barLength = this._descriptor.barLength || "200px";
        const unit = this._descriptor.unit;
        const max = this._descriptor.max || 100;
        const min = this._descriptor.min || 0;
        const isLabelAlarmWarningOn = this._descriptor.isLabelAlarmWarningOn || false;
        const alarmHigh = this._descriptor.alarmHigh;
        const warningHigh = this._descriptor.warningHigh;
        const consigne = this._descriptor.consigne || 0;
        const warningLow = this._descriptor.warningLow;
        const alarmLow = this._descriptor.alarmLow;
        // Colors:
        const defaultBarColor = "var(--sl-color-success-500)";
        const dangerBarColor = "var(--sl-color-danger-600)";
        const warningBarColor = "var(--sl-color-warning-600)";
        const defaultCurrentColor = "var(--sl-color-success-600)";
        const dangerCurrentColor = "var(--sl-color-danger-600)";
        const warningCurrentColor = "var(--sl-color-warning-600)";

        title.textContent = name;
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }

        // Adjust display based on orientation
        if (orientation === 'horizontal') {
            container.classList.add('vertical');
            container.classList.remove('horizontal');
            labelsContainer.classList.add('horizontal-reverse');
            labelsContainer.classList.remove('vertical');
            barContainer.classList.add('horizontal-reverse');
            barContainer.classList.remove('vertical');
            levelIndicator.classList.add('horizontal-level');
            levelIndicator.classList.remove('vertical-level');
            levelIndicator.style.width = barLength;
            levelIndicator.style.height = '40px';
        } else {
            container.classList.add('horizontal');
            container.classList.remove('vertical');
            labelsContainer.classList.add('vertical');
            labelsContainer.classList.remove('horizontal');
            barContainer.classList.add('vertical');
            barContainer.classList.remove('horizontal');
            levelIndicator.classList.add('vertical-level');
            levelIndicator.classList.remove('horizontal-level');
            levelIndicator.style.height = barLength;
            levelIndicator.style.width = '40px';
        }

        max_label.textContent = max;
        min_label.textContent = min;

        const range = max - min;
        var percentage = 0;
        if (current > min){
            percentage = ((current - min) / range) * 100;
        }

        if (orientation === 'horizontal') {
            bar.style.width = `${percentage}%`;
            bar.style.height = '100%';
        } else {
            bar.style.height = `${percentage}%`;
            bar.style.width = '100%';
        }
        current_label.textContent = current;

        // Set current label with two decimal places
        current_label.textContent = current ? parseFloat(current).toFixed(2) : '0.00';


        // Calculate and set the positions of the warning and alarm bars
        const setBarPosition = (bar, value) => {
            if (bar) {
                const positionPercentage = ((value - min) / range) * 100;
                if (orientation === 'horizontal') {
                    bar.style.left = `${positionPercentage}%`;
                } else {
                    bar.style.bottom = `${positionPercentage}%`;
                }
                bar.style.display = 'block'; 
            }
        };

        // Determine the background color based on the current level
        let backgroundColor = defaultBarColor;
        let currentColor = defaultCurrentColor;

        if (warningHigh !== undefined) {
            const warningHighThreshold = consigne + warningHigh;
            if (isLabelAlarmWarningOn){
                warning_high_label.style.display = 'block';
                warning_high_label.textContent = warningHighThreshold;
            }
            setBarPosition(warning_high_indicator, warningHighThreshold);
            if (current >= warningHighThreshold) {
                backgroundColor = warningBarColor;
                currentColor = warningCurrentColor;
            }
        } 
        if (warningLow !== undefined) {
            const warningLowThreshold = consigne - warningLow;
            if (isLabelAlarmWarningOn){
                warning_low_label.style.display = 'block';
                warning_low_label.textContent = warningLowThreshold;
            }
            setBarPosition(warning_low_indicator, warningLowThreshold);
            if (current <= warningLowThreshold) {
                backgroundColor = warningBarColor;
                currentColor = warningCurrentColor;
            }
        }
        if (alarmHigh !== undefined) {
            const alarmHighThreshold = consigne + alarmHigh;
            if (isLabelAlarmWarningOn){
                alarm_high_label.style.display = 'block';
                alarm_high_label.textContent = alarmHighThreshold;
            }
            setBarPosition(alarm_high_indicator, alarmHighThreshold);
            if (current >= alarmHighThreshold) {
                backgroundColor = dangerBarColor;
                currentColor = dangerCurrentColor;
            }
        } 
        if (alarmLow !== undefined) {
            const alarmLowThreshold = consigne - alarmLow;
            if (isLabelAlarmWarningOn){
                alarm_low_label.style.display = 'block';
                alarm_low_label.textContent = alarmLowThreshold;
            }
            setBarPosition(alarm_low_indicator, alarmLowThreshold);
            if (current <= alarmLowThreshold) {
                backgroundColor = dangerBarColor;
                currentColor = dangerCurrentColor;
            }
        }

        bar.style.backgroundColor = backgroundColor;
        current_label.style.color = currentColor;
        unit_label.textContent = unit;
        unit_label.style.color = currentColor;
    }
}

window.customElements.define('rx-level-bar', RxLevelBar);

const template$7 = document.createElement('template');

template$7.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <span>
            <span class="label">A label</span><br>
            <sl-input disabled pill type="number" style="margin-top:10px;" ></sl-input>
        </span>
    </div>
    `;

class RxNumeric extends ConnectedElement {
    constructor() {
        super();
        this._value = false;
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    render() {
        const disable = this._descriptor.disable;
        let $template = template$7.content.cloneNode(true);
        let $input = $template.querySelector("sl-input");
        // 1. Set label for switch
        $template.querySelector(".label").innerText = this._descriptor.name;
        // 2. Set the float value with two decimal places
        $input.value = this._value ? parseFloat(this._value).toFixed(2) : '0.00';
        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('rx-numeric', RxNumeric);

const template$6 = document.createElement('template');

template$6.innerHTML = `
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
      let $template = template$6.content.cloneNode(true);
      let $switch = $template.querySelector("sl-switch");
      let label = this.descriptor.name[0].toUpperCase() + this.descriptor.name.slice(1);
      $template.querySelector(".label").innerText = label;
      // Add event listener
      $switch.addEventListener("sl-change", this.onclick);
      // Reset switch value to descriptor value
      $switch.checked = !!this._value;
      const disable = this._descriptor.disable;

      if (disable) {
          this.disable();
      } else {
          this.enable();
      }
      // Clean component and append template
      while (this.firstChild) {
          this.removeChild(this.firstChild);
      }
      this.appendChild($template);
  }
}

window.customElements.define('tx-bool', TxBool);

/**
 * TxButtonHold Component
 *
 * Description:
 * This component extends ConnectedElement to create a customizable button 
 * that triggers actions on mouse/touch hold. It utilizes a template with 
 * HTML and CSS to render the button, and uses event listeners to handle 
 * touch and mouse events. The button's appearance and behavior are 
 * controlled via descriptors passed to the component.
 *
 * Functionality:
 * - `TxButtonHold` is a button that sends a message to the server when 
 *   pressed and held (onmousedown/touchstart) and sends a different message 
 *   when released (onmouseup/touchend).
 * - The messages are sent through a WebSocket connection using the 
 *   `Socket` class from the engine.
 * - Button visual attributes such as label, color, and disable state 
 *   are dynamically set based on the `_descriptor` object.
 * 
 * Descriptors:
 * 1. `_descriptor.name`: Sets the button's label, with the first letter capitalized.
 * 2. `_descriptor.color`: Sets the button's color variant. The available options are:
 *    - `success`: Green
 *    - `danger`: Red
 *    - `neutral`: Gray
 *    - `warning`: Orange
 *    If no color is provided, the button defaults to the `primary` variant.
 * 3. `_descriptor.disable`: If set to `true`, the button will be disabled.
 * 4. `_descriptor.hash`: Unique identifier used when sending state messages 
 *    through the WebSocket connection.
 * 
 * Event Handling:
 * - `onmousedown`/`touchstart`: Sends a `true` value for the button state 
 *   via the WebSocket to indicate the button is held.
 * - `onmouseup`/`touchend`: Sends a `false` value to indicate the button 
 *   has been released.
 *
 * Dependencies:
 * - `Socket`: Handles WebSocket communication.
 * - `ConnectedElement`: Base class for web component.
 * - `Logging`: Provides debug and warning logging utilities.
 */

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
    }

    onmousedown(e) {
        Logging.debug("BoolInput sl-change", e);
        Logging.warn("BoolInput hash|value: ", this._value);
        //this.define(this._value)
        console.log("onmousedown descriptor");
        console.log(this._descriptor);

        let hash = this._descriptor.hash;
        Socket.defaultSocket.sendMessage("states", [{hash:hash, value:true}]);
    }
    onmouseup(e) {
        Logging.debug("BoolInput sl-change", e);
        Logging.warn("BoolInput hash|value: ", this._value);
        //this.define(this._value)
        console.log("onmousedown descriptor");
        console.log(this._descriptor);

        let hash = this._descriptor.hash;
        Socket.defaultSocket.sendMessage("states", [{ hash: hash, value: false }]);
    }

    render() {
        const disable = this._descriptor.disable;
        const color = this._descriptor.color;
        let $template = template$5.content.cloneNode(true);
        let $button = $template.querySelector("sl-button");
        let label = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        $button.innerText = label;
        // Check if the device supports touch events
        if ('ontouchstart' in window) {
            // Add touch event listeners
            $button.addEventListener("touchstart", this.onmousedown, { passive: true });
            $button.addEventListener("touchend", this.onmouseup, { passive: true });
        } else {
            // Add mouse event listeners
            $button.addEventListener("mousedown", this.onmousedown);
            $button.addEventListener("mouseup", this.onmouseup);
        }
        // Apply color to the button
        if (color) {
            $button.variant = color; // 'sucess= green 'danger= red', 'neutral= gray' 'warning= orange' .

        }else {
            $button.variant = "primary";
        }

        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }

}

window.customElements.define('tx-button-hold', TxButtonHold);

/**
 * TxButton Component
 *
 * Description:
 * This component extends `ConnectedElement` to create a customizable button 
 * that sends a message when clicked. It uses a template with HTML and CSS 
 * for rendering and manages its behavior using descriptors passed as attributes.
 * The button also interacts with a WebSocket connection through the `Socket` class 
 * to send data when triggered.
 *
 * Functionality:
 * - `TxButton` is a button that, when clicked, sends a state message via a WebSocket 
 *   connection. The message contains a hash and a boolean value.
 * - The appearance of the button is dynamically configured based on the provided 
 *   descriptors for label, color, and disable state.
 * 
 * Descriptors:
 * 1. `_descriptor.name`: Defines the button's label. The first letter will be capitalized 
 *    automatically.
 * 2. `_descriptor.color`: Sets the visual color variant of the button. Available options are:
 *    - `success`: Green
 *    - `danger`: Red
 *    - `neutral`: Gray
 *    - `warning`: Orange
 *    - If no color is specified, the button defaults to the `primary` variant.
 * 3. `_descriptor.disable`: If set to `true`, the button will be rendered in a disabled state.
 * 4. `_descriptor.hash`: A unique identifier used when sending messages through the WebSocket.
 *    This hash is included in the message payload.
 * 
 * Event Handling:
 * - `click`: When the button is clicked, it triggers the `onclick` method. This method:
 *   - Logs the event for debugging purposes.
 *   - Sends a message through the WebSocket with the hash from the `_descriptor` 
 *     and a `true` value for the state.
 *
 * Dependencies:
 * - `Socket`: Handles WebSocket communication with the server.
 * - `ConnectedElement`: A base class for the custom web component.
 * - `Logging`: Provides debugging and warning utilities for event logging.
 * 
 * Template & Styling:
 * - The button uses a shadow DOM template containing a `<sl-button>` within a styled `<div>` card.
 * - The component imports external styles from `static/css/style.css`.
 * 
 * Methods:
 * - `onclick(event)`: Triggered on button click; sends a message through the WebSocket.
 * - `render()`: Initializes and configures the button based on descriptors, adding 
 *   appropriate event listeners and setting the button's label, color, and state.
 * - `update()`: Used to refresh the component as needed.
 */

const template$4 = document.createElement('template');

template$4.innerHTML = `
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
    const disable = this._descriptor.disable;
    const color = this._descriptor.color;
    let $template = template$4.content.cloneNode(true);
    let $button = $template.querySelector("sl-button");
    let label = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
    $button.addEventListener("click", this.onclick);
    $button.innerText = label;

    // Apply color to the button
    if (color) {
      $button.variant = color; // 'sucess= green 'danger= red', 'neutral= gray' 'warning= orange' .

    }else {
      $button.variant = "primary";
  }
    // Clean component and append template
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
    this.appendChild($template);
    if (disable) {
      this.disable();
  } else {
      this.enable();
  }
}
}

window.customElements.define('tx-button', TxButton);

/**
 * TxDropdown Component
 * 
 * This component creates a customizable dropdown menu using Shoelace elements.
 * It's designed to allow users to select from a list of predefined options,
 * with the ability to update a remote state via a socket connection upon selection.
 * The component updates its state and sends a message through a Socket
 * connection whenever a new item is selected. It also maintains the selected
 * state visually using checkboxes.
 * 
 * Configuration Parameters:
 * - name: String that appears as the default text on the dropdown button
 *         and serves as a label for the dropdown.
 *         Example: "Routines de découpage"
 * 
 * - items: Array of strings representing the selectable options in the dropdown.
 *          Each item will be displayed as a checkbox menu item.
 *          Example: ["Cut 1", "Cut 2", "Cut 3"]
 * 
 * JSON config example:
    {
      "name": "Dropdowns Routines",
      "hardware": "Kincony_KC868_A8S",
      "component": "hw-section",
      "type": "ModbusWriteHoldingRegister",
      "address": 2,
      "children": [
        {
          "id": 1,
          "name": "Cutting routines",
          "component": "tx-dropdown",
          "items": ["Cut 1", "Cut 2", "Cut 3"],
          "hash": 1708159392
        }
      ]
    },
 */


const template$3 = document.createElement('template');
template$3.innerHTML = `
    <div class="dropdown-selection">
        <sl-dropdown>
            <sl-button slot="trigger" caret></sl-button>
            <sl-menu class="dropdown-menu">
            </sl-menu>
        </sl-dropdown>
    </div>
`;

class TxDropdown extends ConnectedElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template$3.content.cloneNode(true));

        this.dropdown = this.shadowRoot.querySelector('sl-dropdown');
        this.buttonTitle = this.shadowRoot.querySelector('sl-button');
        this.menu = this.shadowRoot.querySelector('.dropdown-menu');
        
        this.items = [];
        this.selectedValue = null;

        // Bind the event handler to the class instance
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    connectedCallback() {
        this.updateFromDescriptor();
        // Add event listener here, only once
        this.menu.addEventListener('sl-select', this.handleItemClick);
    }

    disconnectedCallback() {
        // Remove event listener when component is disconnected
        this.menu.removeEventListener('sl-select', this.handleItemClick);
    }

    updateFromDescriptor() {
        if (this._descriptor) {
            this.name = this._descriptor.name || "Selection";
            this.items = this._descriptor.items || [];
            this.buttonTitle.textContent = this.name;
            this.populateMenu();
        }
    }

    populateMenu() {
        this.menu.innerHTML = '';
        this.items.forEach(item => {
            const menuItem = document.createElement('sl-menu-item');
            menuItem.textContent = item;
            menuItem.value = item;
            menuItem.type = 'checkbox';
            menuItem.checked = item === this.selectedValue;
            this.menu.appendChild(menuItem);
        });
    }

    handleItemClick(event) {
        const selectedItem = event.detail.item;
        
        if (selectedItem.value === this.selectedValue) {
            return; // Do nothing if the same item is selected again
        }

        this.menu.querySelectorAll('sl-menu-item').forEach(item => {
            item.checked = item === selectedItem;
        });

        this.selectedValue = selectedItem.value;
        this.buttonTitle.textContent = selectedItem.textContent;

        if (this._descriptor && this._descriptor.hash) {
            let hash = this._descriptor.hash;
            let value = selectedItem.value;
            console.log("Sending value: ", value);
            Socket.defaultSocket.sendMessage("states", [{ "hash": hash, "value": value }]);
        }

        this.dropdown.hide();
    }

    render() {
        const disable = this._descriptor.disable;
        this.updateFromDescriptor();
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('tx-dropdown', TxDropdown);

/**
 * TxNumeric Component
 *
 * Description:
 * This component extends `ConnectedElement` to create a numeric input field with a button 
 * that allows the user to input and submit numeric values within specified limits. The component 
 * uses a WebSocket connection via the `Socket` class to send the input value to a server upon validation.
 * It offers dynamic control over input restrictions and behavior based on descriptors provided.
 *
 * Functionality:
 * - Provides an input field where users can enter a numeric value.
 * - Includes a "Go" button to submit the value to the server via a WebSocket connection.
 * - Validates the input against specified high and low limits.
 * - Uses descriptors to configure the label, value limits, and disable state of the component.
 *
 * Descriptors:
 * 1. `_descriptor.name`: Sets the label displayed above the input field.
 * 2. `_descriptor.high`: Defines the upper limit for the numeric input. If not provided, defaults to positive infinity.
 * 3. `_descriptor.low`: Defines the lower limit for the numeric input. If not provided, defaults to negative infinity.
 * 4. `_descriptor.disable`: If set to `true`, the input and button will be disabled.
 * 5. `_descriptor.hash`: A unique identifier used when sending messages through the WebSocket. 
 *    This hash is included in the message payload.
 *
 * Event Handling:
 * - `onchange(event)`: Triggered when the input value changes. It validates the input against the defined limits:
 *   - If the value is valid, it updates the component's state and sends the new value through the WebSocket.
 *   - If the value is invalid, it displays an alert and resets the input to the last valid value.
 * - `onsubmit()`: Triggered when the "Go" button is clicked. It checks the current input value:
 *   - If the value is valid, it sends the value through the WebSocket.
 *   - If the value is invalid, it displays an alert to the user.
 *
 * Dependencies:
 * - `Socket`: Handles WebSocket communication with the server.
 * - `ConnectedElement`: A base class for creating custom web components.
 *
 * Template & Styling:
 * - The component uses a shadow DOM template containing a numeric `<sl-input>` and a `<sl-button>` for submission.
 * - Includes a label for user instruction.
 * - Imports external CSS from `static/css/style.css` for styling.
 *
 * Methods:
 * - `isValid(value)`: Checks if the given value falls within the specified high and low limits.
 * - `onchange(event)`: Handles input changes, validates the input, and updates the component's state.
 * - `onsubmit()`: Handles the "Go" button click, validating the input and sending it via the WebSocket if valid.
 * - `render()`: Configures and displays the component based on the descriptors, adding appropriate event listeners and setting initial values.
 */

const template$2 = document.createElement('template');

template$2.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
            <span class="label">A label</span>
            <div style="display:flex; justify-content:space-around; margin-top:10px">
            <sl-input style="max-width: 8rem" type="number"></sl-input>
            <sl-button type="primary">Go</sl-button>
            </div>
    </div>
    `;

class TxNumeric extends ConnectedElement {
    constructor() {
        super();
        // Initialize value
        this.value = null;
        // Set default limits to be without restrictions
        this.highLimit = Number.POSITIVE_INFINITY;
        this.lowLimit = Number.NEGATIVE_INFINITY;
    }

    // Validate the value against the limits
    isValid(value) {
        return value >= this.lowLimit && value <= this.highLimit;
    }

    onchange(e){
        let newValue = parseFloat(e.target.value);
        // Validate the value
        if (this.isValid(newValue)) {
            this.value = newValue;
            let hash = this._descriptor.hash;
            Socket.defaultSocket.sendMessage("states", [{hash: hash, value: this.value}]);
        } else {
            // Handle invalid input
            alert(`Value must be between ${this.lowLimit} and ${this.highLimit}`);
            e.target.value = this.value; // Reset to the last valid value
        }
    }

    onsubmit(){
        // Only submit if the current value is valid
        if (this.isValid(this.value)) {
            Socket.defaultSocket.sendMessage("states", [{hash: this._descriptor.hash, value: this.value}]);
        } else {
            alert(`Value must be between ${this.lowLimit} and ${this.highLimit}`);
        }
    }

    render() {
        const disable = this._descriptor.disable;

        // Set limits from descriptor if available, otherwise use default unlimited values
        this.highLimit = this._descriptor.high !== undefined ? this._descriptor.high : Number.POSITIVE_INFINITY; 
        this.lowLimit = this._descriptor.low !== undefined ? this._descriptor.low : Number.NEGATIVE_INFINITY;

        // 1. Select components
        let $template = template$2.content.cloneNode(true);
        let $input = $template.querySelector("sl-input");
        let $button = $template.querySelector("sl-button");

        // 2. Set label and event listener
        $template.querySelector(".label").innerText = this._descriptor.name;
        $input.addEventListener("sl-change", this.onchange.bind(this));
        $button.addEventListener("click", this.onsubmit.bind(this));
        $input.value = this.value;

        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
        
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('tx-numeric', TxNumeric);

const templateSlider = document.createElement('template');

templateSlider.innerHTML = `
    <style>
        @import url("static/css/style.css");

        .slider-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .slider-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        .slider {
            -webkit-appearance: none;
            width: 100%;
            height: 10px;
            background: linear-gradient(to right, var(--sl-color-sky-600) 50%, #ccc 50%);
            outline: none;
            opacity: 0.7;
            transition: opacity 0.2s, background 0.2s;
        }

        /* Firefox */
        .slider::-moz-range-track {
            background: transparent;
        }

        .slider::-webkit-slider-runnable-track {
            background: transparent;
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--sl-color-sky-600);
            cursor: pointer;
        }

        .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--sl-color-sky-600);
            cursor: pointer;
            transition: background 0.2s;
        }

        .range-label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .min-value, .max-value {
            font-size: 0.8rem;
        }

        .current-value {
            text-align: center;
            margin-top: 10px;
            font-size: 1rem;
            font-weight: bold;
        }

        .label {
            text-align: center;
            margin-bottom: 10px;
        }
    </style>

    <div class="card slider-container">
        <span class="label">TxSlider</span>
        <div class="slider-wrapper">
            <span class="min-value">0</span>
            <input class="slider" type="range" min="0" max="100" step="1">
            <span class="max-value">100</span>
        </div>
        <div class="current-value">0</div>
    </div>
`;

class TxSlider extends ConnectedElement {
    constructor() {
        super();
        this._value = 0;    // Default slider value
        this._low = 0;      // Default low value
        this._high = 100;   // Default high value

        // Bind event handlers
        this.onInput = this.onInput.bind(this);
        this.onChange = this.onChange.bind(this);
        this.render = this.render.bind(this);
    }

    /**
     * Handler for the 'input' event.
     * Updates the slider's gradient and current value in real-time.
     */
    onInput(e) {
        const slider = e.target;
        this._value = slider.value;

        // Update the slider track gradient
        this.updateSliderTrack(slider);

        // Update the displayed current value
        const currentValueElem = this.querySelector(".current-value");
        if (currentValueElem) {
            currentValueElem.innerText = this._value;
        }
    }

    /**
     * Handler for the 'change' event.
     * Sends the final slider value to the server via Socket.
     */
    onChange(e) {
        const slider = e.target;
        this._value = slider.value;
        const hash = this._descriptor.hash;

        // Send the final value to the server
        Socket.defaultSocket.sendMessage("states", [{ hash: hash, value: this._value }]);
    }

    /**
     * Updates the slider's background gradient based on its current value.
     * @param {HTMLElement} slider - The slider input element.
     */
    updateSliderTrack(slider) {
        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        const val = parseFloat(slider.value);

        // Calculate percentage for value
        const percentage = ((val - min) / (max - min)) * 100;

        // Retrieve the CSS variable value
        const activeColor = "var(--sl-color-sky-600)";

        // Set the gradient using the CSS variable
        slider.style.background = `linear-gradient(to right, ${activeColor} ${percentage}%, #ccc ${percentage}%)`;
    }

    /**
     * Renders the slider component based on the descriptor.
     */
    render() {
        const disable = this._descriptor.disable;
        this._low = this._descriptor.low !== undefined ? this._descriptor.low : 0;    // Use descriptor low, default to 0
        this._high = this._descriptor.high !== undefined ? this._descriptor.high : 100; // Use descriptor high, default to 100
        this._value = this._descriptor.value !== undefined ? this._descriptor.value : this._value; // Use descriptor value or retain the last set value

        // Clone the template
        const $template = templateSlider.content.cloneNode(true);
        const $slider = $template.querySelector(".slider");
        const $currentValue = $template.querySelector(".current-value");
        const $minValue = $template.querySelector(".min-value");
        const $maxValue = $template.querySelector(".max-value");

        // Set label
        $template.querySelector(".label").innerText = this._descriptor.name || "TxSlider";

        // Set low and high values for the slider
        $slider.min = this._low;
        $slider.max = this._high;

        // Update displayed min and max values
        $minValue.innerText = this._low;
        $maxValue.innerText = this._high;

        // Initialize the slider value and update the track colors
        $slider.value = this._value;
        this.updateSliderTrack($slider);  // Initial track color update

        // Set the displayed current value
        $currentValue.innerText = this._value;

        // Add event listeners for 'input' and 'change' events
        $slider.addEventListener("input", this.onInput);
        $slider.addEventListener("change", this.onChange);

        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);

        // Handle disable state
        $slider.disabled = !!disable;
    }

    /**
     * Specifies which attributes to observe for changes.
     */
    static get observedAttributes() {
        return ['descriptor'];
    }

    /**
     * Callback when observed attributes change.
     * @param {string} name - Name of the attribute.
     * @param {string} oldValue - Previous value.
     * @param {string} newValue - New value.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'descriptor') {
            try {
                this._descriptor = JSON.parse(newValue);
                this.render();
            } catch (e) {
                console.error("Failed to parse descriptor:", e);
            }
        }
    }

    /**
     * Called when the element is added to the DOM.
     */
    connectedCallback() {
        if (this.hasAttribute('descriptor')) {
            try {
                this._descriptor = JSON.parse(this.getAttribute('descriptor'));
            } catch (e) {
                console.error("Failed to parse descriptor on connection:", e);
                this._descriptor = {};
            }
        } else {
            this._descriptor = {};
        }
        this.render();
    }
}

window.customElements.define('tx-slider', TxSlider);

/**
 * TxString
 * 
 * A custom web component that provides a text input field with validation and socket communication capabilities.
 * 
 * This component extends the `ConnectedElement` class and is designed to handle user input for strings with configurable
 * length constraints. It integrates with a WebSocket to send validated input data to the server, ensuring real-time
 * synchronization of state across the application.
 * 
 * Features:
 * - **Dynamic Validation:** Ensures that the input string adheres to specified minimum and maximum length constraints.
 * - **Real-Time Communication:** Utilizes a WebSocket connection to send validated input data immediately upon change or submission.
 * - **Customizable UI:** Renders a styled card with a label, input field, and submit button, allowing for easy integration into forms.
 * - **Descriptor-Based Configuration:** Accepts a descriptor to dynamically set properties like `name`, `maxLength`, `minLength`, and `disable` state.
 * 
 * Usage:
 * ```html
 * <tx-string></tx-string>
 * ```
 * 
 * Example:
 * ```javascript
 * // Descriptor example
 * const descriptor = {
 *   name: "Username",
 *   maxLength: 20,
 *   minLength: 5,
 *   disable: false,
 *   hash: "unique-element-hash"
 * };
 * 
 * // Initialize the component with the descriptor
 * const txStringElement = document.createElement('tx-string');
 * txStringElement.descriptor = descriptor;
 * document.body.appendChild(txStringElement);
 * ```
 * 
 * 
 * Methods:
 * - **constructor():** Initializes default values and sets up the component.
 * - **isValid(value):** Validates the input string against `minLength` and `maxLength`.
 * - **onchange(e):** Handles input changes, validates the new value, and sends it via WebSocket if valid.
 * - **onsubmit():** Submits the current value if it passes validation.
 * - **render():** Renders the component's HTML template, sets up event listeners, and applies descriptor configurations.
 * 
 * Events:
 * - **sl-change:** Triggered when the input value changes.
 * - **click:** Triggered when the submit button is clicked.
 * 
 * Error Handling:
 * - Alerts the user if the input does not meet the length requirements and reverts to the last valid value.
 * 
 * Custom Element Definition:
 * - Registered as `<tx-string>` in the browser's custom elements registry.
 * 
 * @class TxString
 * @extends ConnectedElement
 */

const template$1 = document.createElement('template');

template$1.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
            <span class="label">A label</span>
            <div style="display:flex; justify-content:space-around; margin-top:10px">
            <sl-input style="max-width: 15rem" type="text"></sl-input>
            <sl-button type="primary">Submit</sl-button>
            </div>
    </div>
    `;

class TxString extends ConnectedElement {
    constructor() {
        super();
        // Initialize value
        this.value = '';
        // Set default length limits for the string
        this.maxLength = Number.POSITIVE_INFINITY; // No max length by default
        this.minLength = 0; // No min length by default
    }

    // Validate the string length against the limits
    isValid(value) {
        return value.length >= this.minLength && value.length <= this.maxLength;
    }

    onchange(e){
        let newValue = e.target.value;
        // Validate the string length
        if (this.isValid(newValue)) {
            this.value = newValue;
            let hash = this._descriptor.hash;
            Socket.defaultSocket.sendMessage("states", [{hash: hash, value: this.value}]);
        } else {
            // Handle invalid input
            alert(`String length must be between ${this.minLength} and ${this.maxLength} characters.`);
            e.target.value = this.value; // Reset to the last valid value
        }
    }

    onsubmit(){
        // Only submit if the current string length is valid
        if (this.isValid(this.value)) {
            Socket.defaultSocket.sendMessage("states", [{hash: this._descriptor.hash, value: this.value}]);
        } else {
            alert(`String length must be between ${this.minLength} and ${this.maxLength} characters.`);
        }
    }

    render() {
        const disable = this._descriptor.disable;

        // Set length limits from descriptor if available, otherwise use default unlimited values
        this.maxLength = this._descriptor.maxLength !== undefined ? this._descriptor.maxLength : Number.POSITIVE_INFINITY; 
        this.minLength = this._descriptor.minLength !== undefined ? this._descriptor.minLength : 0;

        // 1. Select components
        let $template = template$1.content.cloneNode(true);
        let $input = $template.querySelector("sl-input");
        let $button = $template.querySelector("sl-button");

        // 2. Set label and event listener
        $template.querySelector(".label").innerText = this._descriptor.name;
        $input.addEventListener("sl-change", this.onchange.bind(this));
        $button.addEventListener("click", this.onsubmit.bind(this));
        $input.value = this.value;

        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild($template);
        
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('tx-string', TxString);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var jsQR_min = {exports: {}};

/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/jsqr@1.4.0/dist/jsQR.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */

(function (module, exports) {
	!function(o,e){module.exports=e();}("undefined"!=typeof self?self:commonjsGlobal,(function(){return function(o){var e={};function r(t){if(e[t])return e[t].exports;var c=e[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}return r.m=o,r.c=e,r.d=function(o,e,t){r.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:t});},r.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},r.p="",r(r.s=3)}([function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o;}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return !(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0;},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c);},o}();e.BitMatrix=t;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(2);e.addOrSubtractGF=function(o,e){return o^e};var c=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var c=1,s=0;s<this.size;s++)this.expTable[s]=c,(c*=2)>=this.size&&(c=(c^this.primitive)&this.size-1);for(s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new t.default(this,Uint8ClampedArray.from([0])),this.one=new t.default(this,Uint8ClampedArray.from([1]));}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new t.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can't take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=c;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else {this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c];}}else this.coefficients=e;}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){var r;if(this.isZero())return e;if(e.isZero())return this;var c=this.coefficients,s=e.coefficients;c.length>s.length&&(c=(r=[s,c])[0],s=r[1]);for(var a=new Uint8ClampedArray(s.length),n=s.length-c.length,d=0;d<n;d++)a[d]=s[d];for(d=n;d<s.length;d++)a[d]=t.addOrSubtractGF(c[d-n],s[d]);return new o(this.field,a)},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,n=new Uint8ClampedArray(c+a-1),d=0;d<c;d++)for(var l=r[d],i=0;i<a;i++)n[d+i]=t.addOrSubtractGF(n[d+i],this.field.multiply(l,s[i]));return new o(this.field,n)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach((function(o){e=t.addOrSubtractGF(e,o);})),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(4),c=r(5),s=r(11),a=r(12);function n(o){var e=a.locate(o);if(!e)return null;for(var r=0,t=e;r<t.length;r++){var n=t[r],d=s.extract(o,n),l=c.decode(d.matrix);if(l)return {binaryData:l.bytes,data:l.text,chunks:l.chunks,version:l.version,location:{topRightCorner:d.mappingFunction(n.dimension,0),topLeftCorner:d.mappingFunction(0,0),bottomRightCorner:d.mappingFunction(n.dimension,n.dimension),bottomLeftCorner:d.mappingFunction(0,n.dimension),topRightFinderPattern:n.topRight,topLeftFinderPattern:n.topLeft,bottomLeftFinderPattern:n.bottomLeft,bottomRightAlignmentPattern:n.alignmentPattern}}}return null}var d={inversionAttempts:"attemptBoth"};function l(o,e,r,c){void 0===c&&(c={});var s=d;Object.keys(s||{}).forEach((function(o){s[o]=c[o]||s[o];}));var a="attemptBoth"===s.inversionAttempts||"invertFirst"===s.inversionAttempts,l="onlyInvert"===s.inversionAttempts||"invertFirst"===s.inversionAttempts,i=t.binarize(o,e,r,a),B=i.binarized,k=i.inverted,u=n(l?k:B);return u||"attemptBoth"!==s.inversionAttempts&&"invertFirst"!==s.inversionAttempts||(u=n(l?B:k)),u}l.default=l,e.default=l;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(0);function c(o,e,r){return o<e?e:o>r?r:o}var s=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e);}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r;},o}();e.binarize=function(o,e,r,a){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var n=new s(e,r),d=0;d<e;d++)for(var l=0;l<r;l++){var i=o[4*(l*e+d)+0],B=o[4*(l*e+d)+1],k=o[4*(l*e+d)+2];n.set(d,l,.2126*i+.7152*B+.0722*k);}for(var u=Math.ceil(e/8),C=Math.ceil(r/8),m=new s(u,C),f=0;f<C;f++)for(var w=0;w<u;w++){var P=0,v=1/0,h=0;for(l=0;l<8;l++)for(d=0;d<8;d++){var y=n.get(8*w+d,8*f+l);P+=y,v=Math.min(v,y),h=Math.max(h,y);}var p=P/Math.pow(8,2);if(h-v<=24&&(p=v/2,f>0&&w>0)){var b=(m.get(w,f-1)+2*m.get(w-1,f)+m.get(w-1,f-1))/4;v<b&&(p=b);}m.set(w,f,p);}var g=t.BitMatrix.createEmpty(e,r),x=null;for(a&&(x=t.BitMatrix.createEmpty(e,r)),f=0;f<C;f++)for(w=0;w<u;w++){for(var M=c(w,2,u-3),L=c(f,2,C-3),N=(P=0,-2);N<=2;N++)for(var I=-2;I<=2;I++)P+=m.get(M+N,L+I);var O=P/25;for(N=0;N<8;N++)for(I=0;I<8;I++){d=8*w+N,l=8*f+I;var z=n.get(d,l);g.set(d,l,z<=O),a&&x.set(d,l,!(z<=O));}}return a?{binarized:g,inverted:x}:{binarized:g}};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(0),c=r(6),s=r(9),a=r(10);function n(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function d(o,e){return e<<1|o}var l=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],i=[function(o){return (o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return (o.y+o.x)%3==0},function(o){return (Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return (o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return ((o.y+o.x)%2+o.y*o.x%3)%2==0}];function B(o,e,r){for(var c=i[r.dataMask],s=o.height,a=function(o){var e=17+4*o.versionNumber,r=t.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var c=0,s=o.alignmentPatternCenters;c<s.length;c++)for(var a=s[c],n=0,d=o.alignmentPatternCenters;n<d.length;n++){var l=d[n];6===a&&6===l||6===a&&l===e-7||a===e-7&&6===l||r.setRegion(a-2,l-2,5,5,!0);}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}(e),n=[],l=0,B=0,k=!0,u=s-1;u>0;u-=2){6===u&&u--;for(var C=0;C<s;C++)for(var m=k?s-1-C:C,f=0;f<2;f++){var w=u-f;if(!a.get(w,m)){B++;var P=o.get(w,m);c({y:m,x:w})&&(P=!P),l=d(P,l),8===B&&(n.push(l),B=0,l=0);}}k=!k;}return n}function k(o){var e=function(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return a.VERSIONS[r-1];for(var t=0,c=5;c>=0;c--)for(var s=e-9;s>=e-11;s--)t=d(o.get(s,c),t);var l=0;for(s=5;s>=0;s--)for(c=e-9;c>=e-11;c--)l=d(o.get(s,c),l);for(var i,B=1/0,k=0,u=a.VERSIONS;k<u.length;k++){var C=u[k];if(C.infoBits===t||C.infoBits===l)return C;var m=n(t,C.infoBits);m<B&&(i=C,B=m),(m=n(l,C.infoBits))<B&&(i=C,B=m);}return B<=3?i:void 0}(o);if(!e)return null;var r=function(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=d(o.get(r,8),e));for(var t=7;t>=0;t--)6!==t&&(e=d(o.get(8,t),e));var c=o.height,s=0;for(t=c-1;t>=c-7;t--)s=d(o.get(8,t),s);for(r=c-8;r<c;r++)s=d(o.get(r,8),s);for(var a=1/0,i=null,B=0,k=l;B<k.length;B++){var u=k[B],C=u.bits,m=u.formatInfo;if(C===e||C===s)return m;var f=n(e,C);f<a&&(i=m,a=f),e!==s&&(f=n(s,C))<a&&(i=m,a=f);}return a<=3?i:null}(o);if(!r)return null;var t=function(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach((function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock;})),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,n=0;n<a;n++)for(var d=0,l=c;d<l.length;d++)l[d].codewords.push(o.shift());if(t.ecBlocks.length>1){var i=t.ecBlocks[0].numBlocks,B=t.ecBlocks[1].numBlocks;for(n=0;n<B;n++)c[i+n].codewords.push(o.shift());}for(;o.length>0;)for(var k=0,u=c;k<u.length;k++)u[k].codewords.push(o.shift());return c}(B(o,e,r),e,r.errorCorrectionLevel);if(!t)return null;for(var i=t.reduce((function(o,e){return o+e.numDataCodewords}),0),k=new Uint8ClampedArray(i),u=0,C=0,m=t;C<m.length;C++){var f=m[C],w=s.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)k[u++]=w[P];}try{return c.decode(k,e.versionNumber)}catch(o){return null}}e.decode=function(o){if(null==o)return null;var e=k(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return k(o)};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t,c,s=r(7),a=r(8);function n(o,e){for(var r=[],t="",c=[10,12,14][e],s=o.readBits(c);s>=3;){if((l=o.readBits(10))>=1e3)throw new Error("Invalid numeric value above 999");var a=Math.floor(l/100),n=Math.floor(l/10)%10,d=l%10;r.push(48+a,48+n,48+d),t+=a.toString()+n.toString()+d.toString(),s-=3;}if(2===s){if((l=o.readBits(7))>=100)throw new Error("Invalid numeric value above 99");a=Math.floor(l/10),n=l%10;r.push(48+a,48+n),t+=a.toString()+n.toString();}else if(1===s){var l;if((l=o.readBits(4))>=10)throw new Error("Invalid numeric value above 9");r.push(48+l),t+=l.toString();}return {bytes:r,text:t}}!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci";}(t=e.Mode||(e.Mode={})),function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI";}(c||(c={}));var d=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function l(o,e){for(var r=[],t="",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),n=Math.floor(a/45),l=a%45;r.push(d[n].charCodeAt(0),d[l].charCodeAt(0)),t+=d[n]+d[l],s-=2;}if(1===s){n=o.readBits(6);r.push(d[n].charCodeAt(0)),t+=d[n];}return {bytes:r,text:t}}function i(o,e){for(var r=[],t="",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var n=o.readBits(8);r.push(n);}try{t+=decodeURIComponent(r.map((function(o){return "%"+("0"+o.toString(16)).substr(-2)})).join(""));}catch(o){}return {bytes:r,text:t}}function B(o,e){for(var r=[],t="",c=[8,10,12][e],s=o.readBits(c),n=0;n<s;n++){var d=o.readBits(13),l=Math.floor(d/192)<<8|d%192;l+=l<7936?33088:49472,r.push(l>>8,255&l),t+=String.fromCharCode(a.shiftJISTable[l]);}return {bytes:r,text:t}}e.decode=function(o,e){for(var r,a,d,k,u=new s.BitStream(o),C=e<=9?0:e<=26?1:2,m={text:"",bytes:[],chunks:[],version:e};u.available()>=4;){var f=u.readBits(4);if(f===c.Terminator)return m;if(f===c.ECI)0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(7)}):0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(14)}):0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(21)}):m.chunks.push({type:t.ECI,assignmentNumber:-1});else if(f===c.Numeric){var w=n(u,C);m.text+=w.text,(r=m.bytes).push.apply(r,w.bytes),m.chunks.push({type:t.Numeric,text:w.text});}else if(f===c.Alphanumeric){var P=l(u,C);m.text+=P.text,(a=m.bytes).push.apply(a,P.bytes),m.chunks.push({type:t.Alphanumeric,text:P.text});}else if(f===c.Byte){var v=i(u,C);m.text+=v.text,(d=m.bytes).push.apply(d,v.bytes),m.chunks.push({type:t.Byte,bytes:v.bytes,text:v.text});}else if(f===c.Kanji){var h=B(u,C);m.text+=h.text,(k=m.bytes).push.apply(k,h.bytes),m.chunks.push({type:t.Kanji,bytes:h.bytes,text:h.text});}}if(0===u.available()||0===u.readBits(u.available()))return m};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o;}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=255>>8-t<<(s=r-t);e=(this.bytes[this.byteOffset]&c)>>s,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++);}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var s;c=255>>(s=8-o)<<s;e=e<<o|(this.bytes[this.byteOffset]&c)>>s,this.bitOffset+=o;}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=r(2);e.decode=function(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var s=new t.default(285,256,0),a=new c.default(s,r),n=new Uint8ClampedArray(e),d=!1,l=0;l<e;l++){var i=a.evaluateAt(s.exp(l+s.generatorBase));n[n.length-1-l]=i,0!==i&&(d=!0);}if(!d)return r;var B=new c.default(s,n),k=function(o,e,r,t){var c;e.degree()<r.degree()&&(e=(c=[r,e])[0],r=c[1]);for(var s=e,a=r,n=o.zero,d=o.one;a.degree()>=t/2;){var l=s,i=n;if(n=d,(s=a).isZero())return null;a=l;for(var B=o.zero,k=s.getCoefficient(s.degree()),u=o.inverse(k);a.degree()>=s.degree()&&!a.isZero();){var C=a.degree()-s.degree(),m=o.multiply(a.getCoefficient(a.degree()),u);B=B.addOrSubtract(o.buildMonomial(C,m)),a=a.addOrSubtract(s.multiplyByMonomial(C,m));}if(d=B.multiplyPoly(n).addOrSubtract(i),a.degree()>=s.degree())return null}var f=d.getCoefficient(0);if(0===f)return null;var w=o.inverse(f);return [d.multiply(w),a.multiply(w)]}(s,s.buildMonomial(e,1),B,e);if(null===k)return null;var u=function(o,e){var r=e.degree();if(1===r)return [e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}(s,k[0]);if(null==u)return null;for(var C=function(o,e,r){for(var c=r.length,s=new Array(c),a=0;a<c;a++){for(var n=o.inverse(r[a]),d=1,l=0;l<c;l++)a!==l&&(d=o.multiply(d,t.addOrSubtractGF(1,o.multiply(r[l],n))));s[a]=o.multiply(e.evaluateAt(n),o.inverse(d)),0!==o.generatorBase&&(s[a]=o.multiply(s[a],n));}return s}(s,k[1],u),m=0;m<u.length;m++){var f=r.length-1-s.log(u[m]);if(f<0)return null;r[f]=t.addOrSubtractGF(r[f],C[m]);}return r};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}];},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=r(0);function c(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return {a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,n=t.x-r.x,d=e.y-r.y,l=t.y-r.y,i=a*l-n*d,B=(c*l-n*s)/i,k=(a*s-c*d)/i;return {a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}e.extract=function(o,e){for(var r,s,a=function(o,e,r,t){var s=c(o,e,r,t);return {a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),n=c(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),d=(s=a,{a11:(r=n).a11*s.a11+r.a21*s.a12+r.a31*s.a13,a12:r.a12*s.a11+r.a22*s.a12+r.a32*s.a13,a13:r.a13*s.a11+r.a23*s.a12+r.a33*s.a13,a21:r.a11*s.a21+r.a21*s.a22+r.a31*s.a23,a22:r.a12*s.a21+r.a22*s.a22+r.a32*s.a23,a23:r.a13*s.a21+r.a23*s.a22+r.a33*s.a23,a31:r.a11*s.a31+r.a21*s.a32+r.a31*s.a33,a32:r.a12*s.a31+r.a22*s.a32+r.a32*s.a33,a33:r.a13*s.a31+r.a23*s.a32+r.a33*s.a33}),l=t.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=d.a13*o+d.a23*e+d.a33;return {x:(d.a11*o+d.a21*e+d.a31)/r,y:(d.a12*o+d.a22*e+d.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=i(k+.5,B+.5);l.set(k,B,o.get(Math.floor(u.x),Math.floor(u.y)));}return {matrix:l,mappingFunction:i}};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:!0});var t=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};function c(o){return o.reduce((function(o,e){return o+e}))}function s(o,e,r,c){var s,a,n,d,l=[{x:Math.floor(o.x),y:Math.floor(o.y)}],i=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);i?(s=Math.floor(o.y),a=Math.floor(o.x),n=Math.floor(e.y),d=Math.floor(e.x)):(s=Math.floor(o.x),a=Math.floor(o.y),n=Math.floor(e.x),d=Math.floor(e.y));for(var B=Math.abs(n-s),k=Math.abs(d-a),u=Math.floor(-B/2),C=s<n?1:-1,m=a<d?1:-1,f=!0,w=s,P=a;w!==n+C;w+=C){var v=i?P:w,h=i?w:P;if(r.get(v,h)!==f&&(f=!f,l.push({x:v,y:h}),l.length===c+1))break;if((u+=k)>0){if(P===d)break;P+=m,u-=B;}}for(var y=[],p=0;p<c;p++)l[p]&&l[p+1]?y.push(t(l[p],l[p+1])):y.push(0);return y}function a(o,e,r,t){var c,a=e.y-o.y,n=e.x-o.x,d=s(o,e,r,Math.ceil(t/2)),l=s(o,{x:o.x-n,y:o.y-a},r,Math.ceil(t/2)),i=d.shift()+l.shift()-1;return (c=l.concat(i)).concat.apply(c,d)}function n(o,e){var r=c(o)/c(e),t=0;return e.forEach((function(e,c){t+=Math.pow(o[c]-e*r,2);})),{averageSize:r,error:t}}function d(o,e,r){try{var t=a(o,{x:-1,y:o.y},r,e.length),c=a(o,{x:o.x,y:-1},r,e.length),s=a(o,{x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},r,e.length),d=a(o,{x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},r,e.length),l=n(t,e),i=n(c,e),B=n(s,e),k=n(d,e),u=Math.sqrt(l.error*l.error+i.error*i.error+B.error*B.error+k.error*k.error),C=(l.averageSize+i.averageSize+B.averageSize+k.averageSize)/4;return u+(Math.pow(l.averageSize-C,2)+Math.pow(i.averageSize-C,2)+Math.pow(B.averageSize-C,2)+Math.pow(k.averageSize-C,2))/C}catch(o){return 1/0}}function l(o,e){for(var r=Math.round(e.x);o.get(r,Math.round(e.y));)r--;for(var t=Math.round(e.x);o.get(t,Math.round(e.y));)t++;for(var c=(r+t)/2,s=Math.round(e.y);o.get(Math.round(c),s);)s--;for(var a=Math.round(e.y);o.get(Math.round(c),a);)a++;return {x:c,y:(s+a)/2}}function i(o,e,r,s,n){var l,i,B;try{l=function(o,e,r,s){var n=(c(a(o,r,s,5))/7+c(a(o,e,s,5))/7+c(a(r,o,s,5))/7+c(a(e,o,s,5))/7)/4;if(n<1)throw new Error("Invalid module size");var d=Math.round(t(o,e)/n),l=Math.round(t(o,r)/n),i=Math.floor((d+l)/2)+7;switch(i%4){case 0:i++;break;case 2:i--;}return {dimension:i,moduleSize:n}}(s,r,n,o),i=l.dimension,B=l.moduleSize;}catch(o){return null}var k=r.x-s.x+n.x,u=r.y-s.y+n.y,C=(t(s,n)+t(s,r))/2/B,m=1-3/C,f={x:s.x+m*(k-s.x),y:s.y+m*(u-s.y)},w=e.map((function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,s=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(s))){var a=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];c(a);return {x:r,y:s,score:d({x:Math.floor(r),y:Math.floor(s)},[1,1,1],o)+t({x:r,y:s},f)}}})).filter((function(o){return !!o})).sort((function(o,e){return o.score-e.score}));return {alignmentPattern:C>=15&&w.length?w[0]:f,dimension:i}}e.locate=function(o){for(var e=[],r=[],s=[],a=[],n=function(t){for(var n=0,d=!1,l=[0,0,0,0,0],i=function(e){var s=o.get(e,t);if(s===d)n++;else {l=[l[1],l[2],l[3],l[4],n],n=1,d=s;var i=c(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!s,k=c(l.slice(-3))/3,u=Math.abs(l[2]-k)<k&&Math.abs(l[3]-k)<k&&Math.abs(l[4]-k)<k&&s;if(B){var C=e-l[3]-l[4],m=C-l[2],f={startX:m,endX:C,y:t};(w=r.filter((function(o){return m>=o.bottom.startX&&m<=o.bottom.endX||C>=o.bottom.startX&&m<=o.bottom.endX||m<=o.bottom.startX&&C>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<1.5&&l[2]/(o.bottom.endX-o.bottom.startX)>.5}))).length>0?w[0].bottom=f:r.push({top:f,bottom:f});}if(u){var w,P=e-l[4],v=P-l[3];f={startX:v,y:t,endX:P};(w=a.filter((function(o){return v>=o.bottom.startX&&v<=o.bottom.endX||P>=o.bottom.startX&&v<=o.bottom.endX||v<=o.bottom.startX&&P>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<1.5&&l[2]/(o.bottom.endX-o.bottom.startX)>.5}))).length>0?w[0].bottom=f:a.push({top:f,bottom:f});}}},B=-1;B<=o.width;B++)i(B);e.push.apply(e,r.filter((function(o){return o.bottom.y!==t&&o.bottom.y-o.top.y>=2}))),r=r.filter((function(o){return o.bottom.y===t})),s.push.apply(s,a.filter((function(o){return o.bottom.y!==t}))),a=a.filter((function(o){return o.bottom.y===t}));},B=0;B<=o.height;B++)n(B);e.push.apply(e,r.filter((function(o){return o.bottom.y-o.top.y>=2}))),s.push.apply(s,a);var k=e.filter((function(o){return o.bottom.y-o.top.y>=2})).map((function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,t=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(t))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=c(s)/s.length;return {score:d({x:Math.round(r),y:Math.round(t)},[1,1,3,1,1],o),x:r,y:t,size:a}}})).filter((function(o){return !!o})).sort((function(o,e){return o.score-e.score})).map((function(o,e,r){if(e>4)return null;var t=r.filter((function(o,r){return e!==r})).map((function(e){return {x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}})).sort((function(o,e){return o.score-e.score}));if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return {points:[o].concat(t.slice(0,2)),score:c}})).filter((function(o){return !!o})).sort((function(o,e){return o.score-e.score}));if(0===k.length)return null;var u=function(o,e,r){var c,s,a,n,d,l,i,B=t(o,e),k=t(e,r),u=t(o,r);return k>=B&&k>=u?(d=(c=[e,o,r])[0],l=c[1],i=c[2]):u>=k&&u>=B?(d=(s=[o,e,r])[0],l=s[1],i=s[2]):(d=(a=[o,r,e])[0],l=a[1],i=a[2]),(i.x-l.x)*(d.y-l.y)-(i.y-l.y)*(d.x-l.x)<0&&(d=(n=[i,d])[0],i=n[1]),{bottomLeft:d,topLeft:l,topRight:i}}(k[0].points[0],k[0].points[1],k[0].points[2]),C=u.topRight,m=u.topLeft,f=u.bottomLeft,w=i(o,s,C,m,f),P=[];w&&P.push({alignmentPattern:{x:w.alignmentPattern.x,y:w.alignmentPattern.y},bottomLeft:{x:f.x,y:f.y},dimension:w.dimension,topLeft:{x:m.x,y:m.y},topRight:{x:C.x,y:C.y}});var v=l(o,C),h=l(o,m),y=l(o,f),p=i(o,s,v,h,y);return p&&P.push({alignmentPattern:{x:p.alignmentPattern.x,y:p.alignmentPattern.y},bottomLeft:{x:y.x,y:y.y},topLeft:{x:h.x,y:h.y},topRight:{x:v.x,y:v.y},dimension:p.dimension}),0===P.length?null:P};}]).default}));
	
} (jsQR_min));

/**
 * TxQr Component
 * 
 * Description:
 * This component implements a QR code scanner with both camera and file upload options.
 * It supports JSON QR codes and sends the decoded data through the Socket system.
 */


const template = document.createElement('template');

template.innerHTML = `
    <style>
        @import url("static/css/style.css");
        
        .scanner-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .scanner-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 90%;
            max-height: 90%;
            position: relative;
        }

        .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            background: none;
            border: none;
            font-size: 24px;
            padding: 5px;
            color: #666;
        }

        .close-button:hover {
            color: #000;
        }

        .capture-options {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin: 20px 0;
        }

        .camera-container {
            position: relative;
            width: 100%;
            max-width: 640px;
            margin: 0 auto;
            display: none;
        }

        #qr-video {
            width: 100%;
            max-width: 640px;
            height: auto;
            background: #000;
            border-radius: 4px;
        }

        .scan-overlay {
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
        }

        #qr-canvas {
            display: none;
        }

        .fallback-text {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 14px;
        }

        .error-message {
            color: #dc3545;
            text-align: center;
            padding: 10px;
            margin-top: 10px;
            font-size: 14px;
        }

        .success-message {
            color: #28a745;
            text-align: center;
            padding: 10px;
            margin-top: 10px;
            font-size: 14px;
        }
            .validation-container {
            display: none;
            margin-top: 20px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 4px;
        }

        .validation-container.active {
            display: block;
        }

        .parameter-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }

        .parameter-label {
            font-weight: bold;
            color: #333;
        }

        .parameter-value {
            color: #666;
        }

        .validation-buttons {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 15px;
        }
    </style>
    <div class="card">
        <sl-button></sl-button>
    </div>
    <div class="scanner-modal">
        <div class="scanner-content">
            <button class="close-button">&times;</button>
            <div class="capture-options">
                <sl-button class="camera-button" variant="primary">Use Camera</sl-button>
            </div>
            <div class="camera-container">
                <video id="qr-video" autoplay playsinline></video>
                <canvas class="scan-overlay"></canvas>
            </div>
            <canvas id="qr-canvas"></canvas>
            <div class="error-message"></div>
            <div class="success-message"></div>
            <div class="validation-container">
                <h3 style="color: black;">Verify Parameters</h3>
                <div class="parameters-list"></div>
                <div class="validation-buttons">
                    <sl-button class="confirm-button" variant="success">Confirm</sl-button>
                    <sl-button class="retry-button" variant="danger">Retry</sl-button>
                </div>
            </div>
            <div class="fallback-text">
                Position the QR code in the camera view
            </div>
        </div>
    </div>
`;

class TxQr extends ConnectedElement {
    constructor() {
        super();
        this.scanning = false;
        this.videoStream = null;
        this.jsQR = null;
        this.lastDetectedData = null;

        // Bind methods
        this.onClick = this.onClick.bind(this);
        this.closeScanner = this.closeScanner.bind(this);
        this.handleCamera = this.handleCamera.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.scanQRCode = this.scanQRCode.bind(this);
        this.render = this.render.bind(this);
    }

    async loadJsQR() {
        if (window.jsQR) {
            return window.jsQR;
        } else {
            throw new Error('jsQR library not found');
        }
    }
    showValidation(data) {
        const validationContainer = this.querySelector('.validation-container');
        const parametersList = this.querySelector('.parameters-list');
        const cameraContainer = this.querySelector('.camera-container');
        this.showSuccess('QR Code detected! Validating parameters...');
        
        // Pause scanning while validating
        this.scanning = false;
        
        // Hide camera view
        cameraContainer.style.display = 'none';
        
        // Clear previous parameters
        parametersList.innerHTML = '';
        
        // Add parameters for validation
        Object.entries(data).forEach(([key, value]) => {
            const row = document.createElement('div');
            row.className = 'parameter-row';
            row.innerHTML = `
                <span class="parameter-label">${key}:</span>
                <span class="parameter-value">${value}</span>
            `;
            parametersList.appendChild(row);
        });
        
        // Show validation container
        validationContainer.classList.add('active');
        
        // Store data for later use
        this.lastDetectedData = data;
    }
    
    handleValidation() {
        const confirmButton = this.querySelector('.confirm-button');
        const retryButton = this.querySelector('.retry-button');
        
        confirmButton.addEventListener('click', () => {
            if (this.lastDetectedData) {
                // Hide validation container
                const validationContainer = this.querySelector('.validation-container');
                validationContainer.classList.remove('active');
                
                // Show camera container
                const cameraContainer = this.querySelector('.camera-container');
                cameraContainer.style.display = 'block';

                // Send data through socket
                Socket.defaultSocket.sendMessage("states", [{
                    hash: this._descriptor.hash,
                    value: this.lastDetectedData
                }]);
                
                // Close scanner
                this.closeScanner();
                this.showSuccess('Parameters saved successfully!');
            }
        });
        
        retryButton.addEventListener('click', () => {
            // Hide validation container
            const validationContainer = this.querySelector('.validation-container');
            validationContainer.classList.remove('active');
            
            // Show camera container
            const cameraContainer = this.querySelector('.camera-container');
            cameraContainer.style.display = 'block';

            const errorDiv = this.querySelector('.error-message');
            const successDiv = this.querySelector('.success-message');
            errorDiv.style.display = 'none';
            successDiv.style.display = 'none';
            
            // Resume scanning
            this.scanning = true;
            this.scanQRCode();
        });
    }
    showError(message) {
        const errorDiv = this.querySelector('.error-message');
        const successDiv = this.querySelector('.success-message');
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
            successDiv.style.display = 'none';
        }
        Logging.warn(message);
    }

    showSuccess(message) {
        const errorDiv = this.querySelector('.error-message');
        const successDiv = this.querySelector('.success-message');
        if (successDiv) {
            successDiv.textContent = message;
            successDiv.style.display = 'block';
            errorDiv.style.display = 'none';
        }
        Logging.debug(message);
    }

    async handleCamera() {
        try {
            const errorDiv = this.querySelector('.error-message');
            const successDiv = this.querySelector('.success-message');
            errorDiv.style.display = 'none';
            successDiv.style.display = 'none';

            console.log('Starting camera initialization...');
            const cameraContainer = this.querySelector('.camera-container');
            const video = this.querySelector('#qr-video');
            
            // Load jsQR if not already loaded
            console.log('Loading jsQR library...');
            this.jsQR = await this.loadJsQR();
            if (!this.jsQR) {
                throw new Error('Failed to load jsQR library');
            }
            console.log('jsQR library loaded successfully');
            
            // Make sure video element is properly set up
            video.setAttribute('autoplay', '');
            video.setAttribute('playsinline', '');
            
            console.log('Requesting camera access...');
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: 'environment'
                }
            });
            
            // Ensure video track is active
            const videoTrack = stream.getVideoTracks()[0];
            if (!videoTrack) {
                throw new Error('No video track available');
            }
            
            console.log('Camera accessed successfully:', videoTrack.label);
            console.log('Video track active:', videoTrack.enabled);
            
            // Set the stream
            video.srcObject = stream;
            this.videoStream = stream;
            
            // Show the container first
            cameraContainer.style.display = 'block';
            
            // Handle video events
            video.onloadedmetadata = () => {
                console.log('Video metadata loaded');
                // Explicitly call play()
                video.play()
                    .then(() => {
                        console.log('Video playing, initializing QR scanning...');
                        // Important: Set scanning to true BEFORE starting scan
                        this.scanning = true;
                        // Start scanning immediately
                        requestAnimationFrame(() => this.scanQRCode());
                    })
                    .catch(err => {
                        console.error('Play error:', err);
                        this.showError(`Failed to play video: ${err.message}`);
                    });
            };
            
            // Add error handler
            video.onerror = (err) => {
                console.error('Video error:', err);
                this.showError(`Video error: ${err.message}`);
            };
            
        } catch (error) {
            console.error('Camera setup error:', error);
            this.showError(`Camera error: ${error.message}`);
        }
    }

    async processImage(file) {
        try {
            // Load jsQR if not already loaded
            this.jsQR = await this.loadJsQR();

            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = () => {
                const canvas = this.querySelector('#qr-canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = this.jsQR(imageData.data, imageData.width, imageData.height);

                if (code) {
                    try {
                        const qrData = JSON.parse(code.data);
                        this.showSuccess(`QR Code detected: ${JSON.stringify(qrData, null, 2)}`);
                        Socket.defaultSocket.sendMessage("states", [{
                            hash: this._descriptor.hash,
                            value: qrData
                        }]);
                    } catch (e) {
                        this.showError('Invalid QR Code format. Expected JSON data.');
                    }
                } else {
                    this.showError('No QR code found in image.');
                }

                URL.revokeObjectURL(img.src);
            };

            img.onerror = () => {
                this.showError('Error loading image.');
                URL.revokeObjectURL(img.src);
            };
        } catch (error) {
            this.showError(`Error processing image: ${error.message}`);
        }
    }

    scanQRCode() {
        if (!this.scanning || !this.jsQR) {
            console.log('Scanning stopped or jsQR not loaded');
            return;
        }
    
        const video = this.querySelector('#qr-video');
        const canvas = this.querySelector('#qr-canvas');
        const overlay = this.querySelector('.scan-overlay');
        
        if (video.readyState !== 4 || !video.videoWidth || !video.videoHeight) {
            requestAnimationFrame(() => this.scanQRCode());
            return;
        }
    
        // Calculate the scaling factor between video and display size
        const scale = video.offsetWidth / video.videoWidth;
        
        // Set canvas to video dimensions for processing
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Set overlay to displayed video size for correct visual positioning
        overlay.width = video.offsetWidth;
        overlay.height = video.offsetHeight;
        
        const ctx = canvas.getContext('2d');
        const overlayCtx = overlay.getContext('2d');
    
        try {
            // Draw current frame from video to canvas for processing
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            // Attempt to find QR code in the image
            const code = this.jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });
    
            // Clear previous overlay drawings
            overlayCtx.clearRect(0, 0, overlay.width, overlay.height);
    
            if (code) {
                console.log("QR Code found!", code.data);
                
                // Draw green border around detected QR code
                overlayCtx.strokeStyle = '#00FF00';
                overlayCtx.lineWidth = 4;
                overlayCtx.beginPath();
                overlayCtx.moveTo(code.location.topLeftCorner.x * scale, code.location.topLeftCorner.y * scale);
                overlayCtx.lineTo(code.location.topRightCorner.x * scale, code.location.topRightCorner.y * scale);
                overlayCtx.lineTo(code.location.bottomRightCorner.x * scale, code.location.bottomRightCorner.y * scale);
                overlayCtx.lineTo(code.location.bottomLeftCorner.x * scale, code.location.bottomLeftCorner.y * scale);
                overlayCtx.lineTo(code.location.topLeftCorner.x * scale, code.location.topLeftCorner.y * scale);
                overlayCtx.stroke();
    
                try {
                    // Try to parse the QR code data as JSON
                    const qrData = JSON.parse(code.data);
                    console.log('Parsed QR data:', qrData);
                    
                    // Show validation UI instead of immediately sending data
                    this.showValidation(qrData);
                    
                    // Stop scanning while showing validation
                    this.scanning = false;
                    
                } catch (e) {
                    console.warn('Invalid JSON in QR code:', e);
                    overlayCtx.strokeStyle = '#FF0000';
                    overlayCtx.stroke();
                    this.showError('Invalid QR Code format. Expected JSON data.');
                }
            } else {
                // No QR code found, draw red scanning guide
                overlayCtx.strokeStyle = '#FF0000';
                overlayCtx.lineWidth = 2;
                overlayCtx.strokeRect(
                    overlay.width * 0.2,
                    overlay.height * 0.2,
                    overlay.width * 0.6,
                    overlay.height * 0.6
                );
            }
        } catch (error) {
            console.error('Scanning error:', error);
        }
    
        // Continue scanning if not paused
        if (this.scanning) {
            requestAnimationFrame(() => this.scanQRCode());
        } else {
            console.log('Scanning paused for validation');
        }
    }

    closeCamera() {
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(track => track.stop());
            this.videoStream = null;
        }
        const video = this.querySelector('#qr-video');
        if (video) {
            video.srcObject = null;
        }
        const cameraContainer = this.querySelector('.camera-container');
        if (cameraContainer) {
            cameraContainer.style.display = 'none';
        }
        this.scanning = false;
    }

    onClick(e) {
        const modal = this.querySelector('.scanner-modal');
        modal.style.display = 'flex';
    }

    closeScanner() {
        this.closeCamera();
        const modal = this.querySelector('.scanner-modal');
        if (modal) {
            modal.style.display = 'none';
        }
        // Reset messages
        const errorDiv = this.querySelector('.error-message');
        const successDiv = this.querySelector('.success-message');
        if (errorDiv) errorDiv.style.display = 'none';
        if (successDiv) successDiv.style.display = 'none';
        const fallbackText = this.querySelector('.fallback-text');
        if (fallbackText) {
            fallbackText.textContent = 'Select how you want to scan the QR code';
        }
    }

    render() {
        const disable = this._descriptor.disable;
        const color = this._descriptor.color;
        let $template = template.content.cloneNode(true);
        let $button = $template.querySelector("sl-button");
        let label = this._descriptor?.name?.[0]?.toUpperCase() + 
                   this._descriptor?.name?.slice(1) || 'Scan QR';
        
        $button.addEventListener("click", this.onClick);
        $button.innerText = label;

        if (color) {
            $button.variant = color;
        } else {
            $button.variant = "primary";
        }

        // Clean component and append template
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        
        this.appendChild($template);

        // Add event listeners
        this.handleValidation();

        const closeButton = this.querySelector('.close-button');
        closeButton.addEventListener('click', this.closeScanner);

        const cameraButton = this.querySelector('.camera-button');
        cameraButton.addEventListener('click', this.handleCamera);

        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }

    disconnectedCallback() {
        this.closeScanner();
    }
}

window.customElements.define('tx-qr', TxQr);

class HTTP {
    
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
}

window.Http = HTTP;

// Complete Shoelace Bundle Compressed:
// import "./build/shoelace.bundle.min.js";


// ---------------------------- //
//       Socket connection      //
// ---------------------------- //

const LOCAL_SOCKET_URL = window.location.hostname + "/ws";
// const ESP32_SOCKET_URL = window.location.hostname + "/ws";
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
