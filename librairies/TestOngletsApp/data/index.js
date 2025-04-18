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

class PasswordManager {
    constructor() {
        this._unlockedItems = new Map();
        this._config = null;
        this.loadConfig();
    }

    async loadConfig() {
        try {
            const response = await fetch('/config.json');
            if (!response.ok) throw new Error('Failed to load config');
            this._config = await response.json();
        } catch (error) {
            console.error('Failed to load password configuration:', error);
        }
    }

    getPasswordFromConfig(type, id) {
        if (!this._config?.security?.passwords) return null;
        
        const passwords = this._config.security.passwords;
        switch (type) {
            case 'page':
                return passwords.pages?.[id];
            case 'section':
                return passwords.sections?.[id];
            case 'component':
                return passwords.components?.[id];
            default:
                return null;
        }
    }

    isUnlocked(id) {
        if (!this._unlockedItems.has(id)) return false;
        const { timestamp, duration } = this._unlockedItems.get(id);
        
        if (Date.now() - timestamp > duration) {
            this._unlockedItems.delete(id);
            return false;
        }
        return true;
    }

    async validatePassword(type, id, inputPassword) {
        const correctPassword = this.getPasswordFromConfig(type, id);
        
        if (!correctPassword) {
            return {
                valid: false,
                message: "Password configuration not found"
            };
        }

        const isValid = inputPassword === correctPassword;
        if (isValid) {
            this._unlockedItems.set(`${type}-${id}`, {
                timestamp: Date.now(),
                duration: 5 * 60 * 1000 // 5 minutes default duration
            });
        }

        return {
            valid: isValid,
            message: isValid ? "Password validated" : "Invalid password"
        };
    }

    lock(id) {
        this._unlockedItems.delete(id);
    }
}

const passwordManager = new PasswordManager();

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

    constructor(url, targets={}, ttl = 1000) {
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
		let elapsed = Date.now() - this.lrh;
		// 1. If connecting, set to WAITING
		if (this.state === CONNECTING || this.state === RECONNECT){
			Logging.warn("Socket", "CONNECTING");
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
			} , 5000);
			
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

	/* ------------------------------------------ */
	/*              Websocket functions           */
	/* ------------------------------------------ */

	/**
	 * Function parsing and dispatching messages
	 * @param msg
	 */
	onMessage(msg){
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
		if (key === "states") {
            data[key].forEach((x) => {
                console.log(`Received state update for hash: ${x.hash}`);
                if (!this.targets.hasOwnProperty(x.hash)) {
                    console.error(`Socket has no target for hash: ${x.hash}`);
                    console.log('Available targets:', Object.keys(this.targets));
                } else {
                    // Execute the target with value and/or descriptor
                    this.targets[x.hash](x.value, x.descriptor);
                }
            });
        }
        else {
            if (this.targets.hasOwnProperty(key)) {
                this.targets[key](data[key]);
            } else {
                console.error(`Socket has no target for key: ${key}`);
                console.log('Available targets:', Object.keys(this.targets));
            }
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

class ConnectedElement extends HTMLElement {
    constructor() {
        super();
        this._descriptor = {};
        this._value = {};
        this.url = this.getAttribute('url');
        this.configurable = this.getAttribute('configurable');
        this.socket = Socket.defaultSocket;
        this.onclick = this.onclick.bind(this);
        this.onchange = this.onchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    update(val, descriptor) {
        if (this._descriptor.hash) {
            console.log(`Updating element with hash: ${this._descriptor.hash}, value:`, val, 'descriptor:', descriptor);
        }
        
        if (val !== undefined) {
            this.value = val;
        }
        
        if (descriptor) {
            this.descriptor = descriptor;
        }
    }

    describe(val) {
        this.descriptor = val;
    }

    onclick(e) {
        throw new Error("ConnectedElement interface does not implement onclick")
    }

    onchange(e) {
        throw new Error("ConnectedElement interface does not implement onchange")
    }

    onsubmit(e) {
        throw new Error("ConnectedElement interface does not implement onsubmit")
    }

    disable() {
        if (this.isConnected) {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            
            // Handle both shadow DOM and light DOM
            const target = this.shadowRoot || this;
            const container = target.querySelector('.card') || this;
            
            if (!container.querySelector('.overlay')) {
                container.style.position = 'relative';
                container.appendChild(overlay);
            }
        }
    }

    enable() {
        if (this.isConnected) {
            // Handle both shadow DOM and light DOM
            const target = this.shadowRoot || this;
            const container = target.querySelector('.card') || this;
            const overlay = container.querySelector('.overlay');
            
            if (overlay) {
                overlay.remove();
            }
        }
    }

    set value(val) {
        if (val !== undefined) {
            this._value = val;
            if (this.isConnected) {
                this.render();
            }
        }
    }

    get value() {
        return this._value;
    }

    set descriptor(val) {
        if (!this._descriptor.hash && val.hash) {
            this.socket.setTarget(val.hash, this.update);
        }
        
        this._descriptor = { ...this._descriptor, ...val };
        
        if (val.hash) {
            this._descriptor.hash = val.hash;
        }
        
        if (this.isConnected) {
            this.render();
        }
    }

    get descriptor() {
        return this._descriptor;
    }

    get children() {
        let children = this.descriptor.children || [];
        let $children = [];

        for (let child of children) {
            if (!customElements.get(child.component)) {
                console.error(`Component ${child.component} not found`);
                continue;
            }
            let $child = document.createElement("div");
            $child.innerHTML = `<${child.component}></${child.component}>`;
            $child.firstChild.descriptor = child;
            $children.push($child);
        }

        return $children;
    }

    connectedCallback() {
        this.render();
        if (this._descriptor.hash) {
            this.socket.sendMessage("get", this._descriptor.hash);
        }
    }

    render() {
        throw new Error("Connected element interface does not implement render");
    }
}

const template$k = document.createElement('template');
template$k.innerHTML = `
    
<style>
    .edit-controls {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1000;
    }

    .edit-toolbar {
        position: fixed;
        top: 4rem;
        right: 1rem;
        background: var(--sl-color-neutral-50);
        padding: 1rem;
        border-radius: var(--sl-border-radius-medium);
        box-shadow: var(--sl-shadow-large);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        display: none;
    }

    .edit-toolbar.active {
        display: flex;
    }

    /* Dialog styling */

    sl-dialog:not([open]) {
        display: none !important;
    }
    sl-dialog::part(base) {
        --width: 500px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        display: none;
    }
    
    sl-dialog[open]::part(base) {
        display: block;
    }

    sl-dialog::part(panel) {
        max-height: 80vh;
        overflow-y: auto;
    }

    sl-dialog {
        display: none;
    }

    sl-dialog[open] {
        display: contents;
    }

    .edit-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    /* Component editor */
    .component-editor {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--sl-color-neutral-0);
        padding: 1.5rem;
        border-radius: var(--sl-border-radius-medium);
        box-shadow: var(--sl-shadow-x-large);
        z-index: 1100;
        min-width: 400px;
        max-width: 90vw;
        max-height: 90vh;
        overflow-y: auto;
    }

    .hidden {
        display: none;
    }

    .edit-overlay {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(0, 0, 0, 0.5);
        border-radius: var(--sl-border-radius-medium);
        padding: 0.25rem;
        display: none;
        gap: 0.25rem;
    }

    .editable {
        position: relative;
    }

    .editable:hover .edit-overlay {
        display: flex;
    }

    .editable:hover {
        outline: 2px dashed var(--sl-color-primary-500);
        outline-offset: 2px;
    }

    .button-group {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-end;
        padding: 1rem;
    }

    .select-group, .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }

    sl-select, sl-input {
        width: 100%;
    }
</style>

    <!-- Edit Mode Toggle -->
    <div class="edit-controls">
        <sl-button variant="primary" id="editButton">
            Edit Mode
        </sl-button>
    </div>

    <!-- Edit Toolbar -->
    <div class="edit-toolbar" id="editToolbar">
        <sl-button variant="primary" id="addNodeBtn">
            Add Node
        </sl-button>
        <sl-button variant="success" id="addSectionBtn">
            Add Section
        </sl-button>
        <sl-button variant="success" id="addPageBtn">
            Add Page
        </sl-button>
        <sl-button variant="primary" id="saveChangesBtn">
            Save Changes
        </sl-button>
        <sl-button variant="warning" id="revertChangesBtn">
            Revert Changes
        </sl-button>
    </div>

    <!-- Node Editor Dialog -->
    <sl-dialog id="nodeEditor" label="Edit Node" open="false">
        <div class="edit-form">
            <!-- Node Selection -->
            <div class="select-group">
                <sl-select id="nodeSelect" label="Select Node" clearable>
                </sl-select>
            </div>

            <!-- Renderer Selection -->
            <div class="select-group">
                <sl-select id="rendererSelect" label="Select Renderer" clearable>
                </sl-select>
            </div>

            <!-- Descriptor Properties -->
            <div id="descriptorProperties">
            </div>
        </div>
        <div slot="footer" class="button-group">
            <sl-button variant="primary" id="saveNodeBtn">Save</sl-button>
            <sl-button variant="default" id="cancelNodeBtn">Cancel</sl-button>
        </div>
    </sl-dialog>

    <!-- Section Editor Dialog -->
    <sl-dialog id="sectionEditor" label="Add Section" open="false">
        <div class="edit-form">
            <sl-input id="sectionName" label="Section Name"></sl-input>
            <sl-select id="sectionOrientation" label="Orientation">
                <sl-option value="horizontal">Horizontal</sl-option>
                <sl-option value="vertical">Vertical</sl-option>
            </sl-select>
        </div>
        <div slot="footer" class="button-group">
            <sl-button variant="primary" id="saveSectionBtn">Save</sl-button>
            <sl-button variant="default" id="cancelSectionBtn">Cancel</sl-button>
        </div>
    </sl-dialog>

    <!-- Page Editor Dialog -->
    <sl-dialog id="pageEditor" label="Add Page" open="false">
        <div class="edit-form">
            <sl-input id="pageName" label="Page Name"></sl-input>
            <sl-input id="pagePassword" type="password" label="Page Password (Optional)"></sl-input>
        </div>
        <div slot="footer" class="button-group">
            <sl-button variant="primary" id="savePageBtn">Save</sl-button>
            <sl-button variant="default" id="cancelPageBtn">Cancel</sl-button>
        </div>
    </sl-dialog>
`;

class EditMode extends ConnectedElement {
    constructor() {
        super();
        this.isEditMode = false;
        this.config = null;
        this.interface = null;
        this.rendererDescriptors = {};
        this.originalConfig = null;

        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.appendChild(template$k.content.cloneNode(true));
    }

    async connectedCallback() {
    try {
        // Hide all dialogs on initialization
        this.shadowRoot.querySelectorAll('sl-dialog').forEach(dialog => {
            dialog.removeAttribute('open');
            dialog.style.display = 'none';
        });

        await this.initializeData();
        await this.initializeUI();
        this.setupEventListeners();
    } catch (error) {
        console.error('EditMode: Initialization error:', error);
    }
}

    async initializeUI() {
        // Wait a frame to ensure DOM is ready
        await new Promise(resolve => requestAnimationFrame(resolve));
        
        // Verify elements exist
        const nodeSelect = this.shadowRoot.getElementById('nodeSelect');
        const rendererSelect = this.shadowRoot.getElementById('rendererSelect');

        if (!nodeSelect || !rendererSelect) {
            console.error('Required select elements not found');
            return;
        }

        // Only populate if we have data
        if (this.config) {
            this.populateNodeSelect();
        }
        if (this.rendererDescriptors) {
            this.populateRendererSelect();
        }
    }

    async initializeData() {
        try {
            await Promise.all([
                this.loadConfig(),
                this.loadRendererDescriptors(),
                this.loadInterfaceData()
            ]);
            console.log('EditMode: Data initialized');
        } catch (error) {
            console.error('EditMode: Failed to initialize data:', error);
            throw error;
        }
    }


    async loadConfig() {
        console.log('EditMode: Loading config');
        try {
            const response = await fetch('/config.json');
            if (!response.ok) throw new Error('Failed to load config.json');
            this.config = await response.json();
            this.originalConfig = JSON.parse(JSON.stringify(this.config));
            this.populateNodeSelect();
            console.log('EditMode: Config loaded');
        } catch (error) {
            console.error('EditMode: Config load error:', error);
            throw error;
        }
    }

    async loadInterfaceData() {
        console.log('EditMode: Loading interface');
        try {
            const response = await fetch('/interface.json');
            if (!response.ok) throw new Error('Failed to load interface.json');
            this.interface = await response.json();
            console.log('EditMode: Interface loaded');
        } catch (error) {
            console.error('EditMode: Interface load error:', error);
            throw error;
        }
    }

    async loadRendererDescriptors() {
        console.log('EditMode: Loading renderer descriptors');
        try {
            const response = await fetch('/renderers.json');
            if (!response.ok) throw new Error('Failed to load renderers.json');
            this.rendererDescriptors = await response.json();
            this.populateRendererSelect();
            console.log('EditMode: Renderer descriptors loaded');
        } catch (error) {
            console.error('EditMode: Renderer descriptors load error:', error);
            throw error;
        }
    }

    toggleEditMode() {
        console.log('EditMode: Toggling edit mode');
        this.isEditMode = !this.isEditMode;
        const toolbar = this.shadowRoot.getElementById('editToolbar');
        
        if (this.isEditMode) {
            toolbar.classList.add('active');
            this.makeElementsEditable();
        } else {
            toolbar.classList.remove('active');
            this.removeEditableElements();
        }
    }

    makeElementsEditable() {
        console.log('EditMode: Making elements editable');
        document.querySelectorAll('[id^="component-"]').forEach(component => {
            component.classList.add('editable');
            const overlay = document.createElement('div');
            overlay.className = 'edit-overlay';
            overlay.innerHTML = `
                <sl-icon-button name="pencil" class="edit-btn"></sl-icon-button>
                <sl-icon-button name="trash" class="delete-btn"></sl-icon-button>
            `;
            
            overlay.querySelector('.edit-btn').addEventListener('click', () => {
                console.log('EditMode: Edit button clicked for component', component);
                this.editComponent(component);
            });
            
            overlay.querySelector('.delete-btn').addEventListener('click', () => {
                console.log('EditMode: Delete button clicked for component', component);
                this.deleteComponent(component);
            });
            
            component.appendChild(overlay);
        });
    }

    removeEditableElements() {
        console.log('EditMode: Removing editable elements');
        document.querySelectorAll('.editable').forEach(element => {
            element.classList.remove('editable');
            const overlay = element.querySelector('.edit-overlay');
            if (overlay) {
                overlay.remove();
            }
        });
    }

    setupEventListeners() {
        // Edit mode toggle
        const editButton = this.shadowRoot.getElementById('editButton');
        if (editButton) {
            editButton.addEventListener('click', () => this.toggleEditMode());
        }

        // Toolbar buttons
        // Add Node button setup
        const addNodeBtn = this.shadowRoot.getElementById('addNodeBtn');
        console.log('Add Node button found:', addNodeBtn); // Debug button find

        if (addNodeBtn) {
            addNodeBtn.addEventListener('click', () => {
                console.log('Add Node button clicked');
                this.showNodeEditor();
            });
        } else {
            console.error('Add Node button not found');
        }
        this.shadowRoot.getElementById('addSectionBtn')?.addEventListener('click', () => this.showSectionEditor());
        this.shadowRoot.getElementById('addPageBtn')?.addEventListener('click', () => this.showPageEditor());
        this.shadowRoot.getElementById('saveChangesBtn')?.addEventListener('click', () => this.saveAllChanges());
        this.shadowRoot.getElementById('revertChangesBtn')?.addEventListener('click', () => this.revertChanges());

        // Dialog buttons
         
        const nodeDialog = this.shadowRoot.getElementById('nodeEditor');
        this.shadowRoot.getElementById('saveNodeBtn')?.addEventListener('click', () => {
            this.saveNodeChanges();
            nodeDialog.removeAttribute('open');
        });

        this.shadowRoot.getElementById('cancelNodeBtn')?.addEventListener('click', () => {
            nodeDialog.removeAttribute('open');
        });

        this.shadowRoot.getElementById('cancelSectionBtn')?.addEventListener('click', () => sectionDialog.close());

        const pageDialog = this.shadowRoot.getElementById('pageEditor');
        this.shadowRoot.getElementById('savePageBtn')?.addEventListener('click', () => {
            this.savePageChanges();
            pageDialog.close();
        });

        this.shadowRoot.getElementById('cancelPageBtn')?.addEventListener('click', () => pageDialog.close());
    }

    async editComponent(component) {
        const dialog = this.shadowRoot.getElementById('nodeEditor');
        this.currentEditingComponent = component;
        
        // Load current component data
        const data = component.descriptor;
        if (data) {
            this.shadowRoot.getElementById('nodeSelect').value = data.node || '';
            this.shadowRoot.getElementById('rendererSelect').value = data.renderer || '';
            await this.updateDescriptorProperties(data.descriptor);
        }
        
        dialog.show();
    }

    populateNodeSelect() {
        console.log('Populating node select');
        const nodeSelect = this.shadowRoot.getElementById('nodeSelect');
        if (!nodeSelect) {
            console.error('Node select not found');
            return;
        }

        nodeSelect.innerHTML = '<option value="">Select a node...</option>';

        const addNodes = (nodes, prefix = '') => {
            nodes.forEach(node => {
                if (node.name) {
                    const option = document.createElement('option');
                    option.value = JSON.stringify(node);
                    option.textContent = prefix + node.name;
                    nodeSelect.appendChild(option);
                }

                if (node.children) {
                    addNodes(node.children, prefix + '- ');
                }
            });
        };

        if (this.config && this.config.children) {
            addNodes(this.config.children);
        } else {
            console.error('No config or children found');
        }
    }

    populateRendererSelect() {
        console.log('Populating renderer select');
        const rendererSelect = this.shadowRoot.getElementById('rendererSelect');
        if (!rendererSelect) {
            console.error('Renderer select not found');
            return;
        }

        rendererSelect.innerHTML = '<option value="">Select a renderer...</option>';
        
        Object.keys(this.rendererDescriptors).forEach(renderer => {
            const option = document.createElement('option');
            option.value = renderer;
            option.textContent = renderer;
            rendererSelect.appendChild(option);
        });
    }
    
    handleNodeSelection(event) {
        console.log('Node selected:', event.target.value);
        if (!event.target.value) return;
    
        try {
            const nodeData = JSON.parse(event.target.value);
            this.selectedNode = nodeData;
            
            // If node has a type, preselect the renderer
            if (nodeData.type) {
                const rendererSelect = this.shadowRoot.getElementById('rendererSelect');
                rendererSelect.value = nodeData.type;
                this.handleRendererSelection({ target: rendererSelect });
            }
        } catch (error) {
            console.error('Error parsing node data:', error);
        }
    }
    
    handleRendererSelection(event) {
        const rendererType = event.target.value;
        if (!rendererType) {
            this.clearDescriptorProperties();
            return;
        }
    
        const descriptor = this.rendererDescriptors[rendererType];
        if (descriptor) {
            this.updateDescriptorProperties(descriptor);
        }
    }
    
    clearDescriptorProperties() {
        const propertiesContainer = this.shadowRoot.getElementById('descriptorProperties');
        propertiesContainer.innerHTML = '';
    }
    
    updateDescriptorProperties(descriptor) {
        const propertiesContainer = this.shadowRoot.getElementById('descriptorProperties');
        propertiesContainer.innerHTML = '';
    
        Object.entries(descriptor).forEach(([prop, schema]) => {
            const group = document.createElement('div');
            group.className = 'property-group';
    
            const label = document.createElement('label');
            label.className = 'property-label';
            label.textContent = prop;
            group.appendChild(label);
    
            let input;
            if (schema.enum) {
                // Create select for enum types
                input = document.createElement('select');
                input.className = 'component-select';
                schema.enum.forEach(value => {
                    const option = document.createElement('option');
                    option.value = value;
                    option.textContent = value;
                    input.appendChild(option);
                });
            } else if (schema.type === 'boolean') {
                // Create checkbox for boolean
                input = document.createElement('sl-switch');
                input.checked = schema.default || false;
            } else if (schema.type === 'array') {
                // Create textarea for array
                input = document.createElement('sl-textarea');
                input.placeholder = 'Enter values, one per line';
                if (schema.default) {
                    input.value = schema.default.join('\n');
                }
            } else {
                // Default to text/number input
                input = document.createElement('sl-input');
                input.type = schema.type === 'number' ? 'number' : 'text';
                input.placeholder = schema.description || '';
                if (schema.default !== undefined) {
                    input.value = schema.default;
                }
            }
    
            input.id = `prop-${prop}`;
            input.required = schema.required || false;
            group.appendChild(input);
            propertiesContainer.appendChild(group);
        });
    }
    
    removeEditableElements() {
        document.querySelectorAll('.editable').forEach(element => {
            element.classList.remove('editable');
            const overlay = element.querySelector('.edit-overlay');
            if (overlay) {
                overlay.remove();
            }
        });
    }
    
    deleteComponent(component) {
        if (confirm('Are you sure you want to delete this component?')) {
            component.remove();
            this.saveChangesToConfig();
        }
    }
    
    async saveAllChanges() {
        try {
            // Save both config and interface changes
            await Promise.all([
                fetch('/save-config', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 1234'
                    },
                    body: JSON.stringify(this.config)
                }),
                fetch('/save-interface', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 1234'
                    },
                    body: JSON.stringify(this.interface)
                })
            ]);

            window.notify({
                type: 'success',
                name: 'Success',
                desc: 'Changes saved successfully'
            });
        } catch (error) {
            window.notify({
                type: 'error',
                name: 'Error',
                desc: 'Failed to save changes'
            });
        }
    }

    async revertChanges() {
        if (confirm('Are you sure you want to revert all changes?')) {
            this.config = JSON.parse(JSON.stringify(this.originalConfig));
            window.location.reload();  // Reload the page to reflect reverted changes
        }
    }

    showNodeEditor(existingData = null) {
        const dialog = this.shadowRoot.getElementById('nodeEditor');
        if (!dialog) {
            console.error('Node editor dialog not found');
            return;
        }
    
        if (existingData) {
            this.shadowRoot.getElementById('nodeSelect').value = existingData.node || '';
            this.shadowRoot.getElementById('rendererSelect').value = existingData.renderer || '';
            this.updateDescriptorProperties(existingData.descriptor);
        } else {
            this.shadowRoot.getElementById('nodeSelect').value = '';
            this.shadowRoot.getElementById('rendererSelect').value = '';
            this.clearDescriptorProperties();
        }
    
        // Use the proper Shoelace dialog API
        dialog.setAttribute('open', '');
    }

    showSectionEditor(existingData = null) {
        const dialog = this.shadowRoot.getElementById('sectionEditor');
        if (!dialog) return;

        if (existingData) {
            this.shadowRoot.getElementById('sectionName').value = existingData.name || '';
            this.shadowRoot.getElementById('sectionOrientation').value = existingData.orientation || 'vertical';
        } else {
            this.shadowRoot.getElementById('sectionName').value = '';
            this.shadowRoot.getElementById('sectionOrientation').value = 'vertical';
        }

        dialog.show();
    }

    showPageEditor(existingData = null) {
        const dialog = this.shadowRoot.getElementById('pageEditor');
        if (!dialog) return;

        if (existingData) {
            this.shadowRoot.getElementById('pageName').value = existingData.name || '';
            this.shadowRoot.getElementById('pagePassword').value = existingData.password || '';
        } else {
            this.shadowRoot.getElementById('pageName').value = '';
            this.shadowRoot.getElementById('pagePassword').value = '';
        }

        dialog.show();
    }

    clearDescriptorProperties() {
        const propertiesContainer = this.shadowRoot.getElementById('descriptorProperties');
        if (propertiesContainer) {
            propertiesContainer.innerHTML = '';
        }
    }

    async saveNodeChanges() {
        console.log('EditMode: Saving node changes');
        const nodeData = {
            node: this.shadowRoot.getElementById('nodeSelect').value,
            renderer: this.shadowRoot.getElementById('rendererSelect').value,
            descriptor: this.collectDescriptorValues()
        };

        try {
            // Validate required fields
            if (!nodeData.node || !nodeData.renderer) {
                throw new Error('Node and renderer are required');
            }

            // Update config
            if (this.currentEditingComponent) {
                // Update existing component
                this.updateComponentInConfig(this.currentEditingComponent.id, nodeData);
            } else {
                // Add new component
                this.addComponentToConfig(nodeData);
            }

            // Hide dialog
            this.shadowRoot.getElementById('nodeEditor').hide();
            
            // Show success notification
            window.notify({
                type: 'success',
                name: 'Success',
                desc: 'Node changes saved'
            });
        } catch (error) {
            window.notify({
                type: 'error',
                name: 'Error',
                desc: error.message
            });
        }
    }

    async saveSectionChanges() {
        console.log('EditMode: Saving section changes');
        const sectionData = {
            name: this.shadowRoot.getElementById('sectionName').value,
            orientation: this.shadowRoot.getElementById('sectionOrientation').value,
            NodesList: []
        };

        try {
            // Validate required fields
            if (!sectionData.name) {
                throw new Error('Section name is required');
            }

            // Update interface
            this.addSectionToInterface(sectionData);

            // Hide dialog
            this.shadowRoot.getElementById('sectionEditor').hide();
            
            // Show success notification
            window.notify({
                type: 'success',
                name: 'Success',
                desc: 'Section added successfully'
            });
        } catch (error) {
            window.notify({
                type: 'error',
                name: 'Error',
                desc: error.message
            });
        }
    }

    async savePageChanges() {
        console.log('EditMode: Saving page changes');
        const pageData = {
            PageName: this.shadowRoot.getElementById('pageName').value,
            password: this.shadowRoot.getElementById('pagePassword').value || undefined,
            sections: []
        };

        try {
            // Validate required fields
            if (!pageData.PageName) {
                throw new Error('Page name is required');
            }

            // Update interface
            this.addPageToInterface(pageData);

            // Hide dialog
            this.shadowRoot.getElementById('pageEditor').hide();
            
            // Show success notification
            window.notify({
                type: 'success',
                name: 'Success',
                desc: 'Page added successfully'
            });
        } catch (error) {
            window.notify({
                type: 'error',
                name: 'Error',
                desc: error.message
            });
        }
    }

    collectDescriptorValues() {
        const values = {};
        const propertiesContainer = this.shadowRoot.getElementById('descriptorProperties');
        
        propertiesContainer.querySelectorAll('[id^="prop-"]').forEach(input => {
            const propName = input.id.replace('prop-', '');
            let value = input.value;

            // Handle different input types
            if (input.type === 'number') {
                value = Number(value);
            } else if (input.type === 'checkbox') {
                value = input.checked;
            }

            values[propName] = value;
        });

        return values;
    }

    updateComponentInConfig(componentId, nodeData) {
        // Find and update the component in config
        // Implementation depends on your config structure
        console.log('Updating component:', componentId, nodeData);
    }

    addComponentToConfig(nodeData) {
        // Add new component to config
        // Implementation depends on your config structure
        console.log('Adding new component:', nodeData);
    }

    addSectionToInterface(sectionData) {
        // Add new section to current page
        if (this.interface && this.interface.pages) {
            const currentPage = this.interface.pages[0]; // Or get current page another way
            if (currentPage) {
                currentPage.sections.push(sectionData);
            }
        }
    }

    addPageToInterface(pageData) {
        // Add new page to interface
        if (this.interface) {
            this.interface.pages.push(pageData);
        }
    }
}
window.customElements.define('edit-mode', EditMode);

const template$j = document.createElement('template');

template$j.innerHTML = `
    <style>
        @import url("static/css/style.css");
        @import url("static/css/hw-module.css");

        .dynamic-layout {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .tab-navigation {
            display: flex;
            gap: 0.5rem;
            padding: 0.5rem;
            background-color: var(--sl-color-neutral-100);
            border-radius: var(--sl-border-radius-medium);
        }

        .section {
            background-color: var(--sl-color-neutral-50);
            border-radius: var(--sl-border-radius-medium);
            padding: 1rem;
            margin-bottom: 1rem;
        }
            .locked {
            opacity: 0.7;
            cursor: pointer;
        }
        
        .locked-component {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border: 1px solid var(--sl-color-neutral-300);
            border-radius: var(--sl-border-radius-medium);
            cursor: pointer;
        }
        
        .locked-component:hover {
            background: var(--sl-color-neutral-100);
        }
    </style>
    <div class="dynamic-layout">
        <interface-editor></interface-editor>
        <nav class="tab-navigation"></nav>
        <div class="page-content"></div>
    </div>
`;

class HwDynamic extends HTMLElement {
    constructor() {
        super();
        this._config = null;
        this._interface = null;
        this._currentPage = 0;
        this.url = this.getAttribute('url');
        this.socket = this.getAttribute('socket');

        this.unlockSection = this.unlockSection.bind(this);
        this.unlockComponent = this.unlockComponent.bind(this);
    }

    async showPasswordDialog(prompt) {
        return new Promise((resolve) => {
            // Create elements
            const dialog = document.createElement('sl-dialog');
            const input = document.createElement('sl-input');
            const unlockBtn = document.createElement('sl-button');
            const cancelBtn = document.createElement('sl-button');
    
            // Configure dialog
            dialog.setAttribute('label', prompt || 'Enter Password');
            
            // Configure input
            input.type = 'password';
            input.placeholder = 'Enter password';
            input.style.width = '100%';
            input.style.marginBottom = '1rem';
    
            // Configure buttons
            unlockBtn.setAttribute('slot', 'footer');
            unlockBtn.setAttribute('variant', 'primary');
            unlockBtn.textContent = 'Unlock';
    
            cancelBtn.setAttribute('slot', 'footer');
            cancelBtn.setAttribute('variant', 'default');
            cancelBtn.textContent = 'Cancel';
    
            // Add elements to dialog
            dialog.appendChild(input);
            dialog.appendChild(unlockBtn);
            dialog.appendChild(cancelBtn);
    
            // Add event listeners
            const handleClose = (value) => {
                resolve(value);
                dialog.remove();
            };
    
            unlockBtn.addEventListener('click', () => handleClose(input.value));
            cancelBtn.addEventListener('click', () => handleClose(null));
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    handleClose(input.value);
                }
            });
    
            // Add dialog to document and show it
            document.body.appendChild(dialog);
    
            // Let the browser process the elements
            requestAnimationFrame(() => {
                dialog.setAttribute('open', '');
                input.focus();
            });
        });
    }

    async checkPasswordProtection(item, itemType) {
        if (!item.password) return true;
        
        const itemId = item.hash || item.PageName || item.SectionName;
        const unlockId = `${itemType}-${itemId}`;
        
        if (passwordManager.isUnlocked(unlockId)) {
            return true;
        }
    
        const password = await this.showPasswordDialog(`Enter password for ${item.name || itemId}`);
        if (!password) return false;
    
        // Try both validation methods
        try {
            const validationResult = await passwordManager.validatePassword(itemType, itemId.toString(), password);
            if (validationResult.valid) {
                return true;
            }
        } catch (error) {
            console.warn('Password validation through config failed, falling back to interface passwords');
        }
    
        // Fallback to interface password
        if (password === item.password) {
            passwordManager._unlockedItems.set(unlockId, {
                timestamp: Date.now(),
                duration: 5 * 60 * 1000
            });
            return true;
        }
    
        window.notify({
            type: "error",
            name: "Password Error",
            desc: "Invalid password"
        });
        
        return false;
    }

    connectedCallback() {
        this.appendChild(template$j.content.cloneNode(true));
        this.loadConfigurations();
    }

    async loadConfigurations() {
        try {
            const configResponse = await fetch(this.url);
            const interfacePath = new URL('interface.json', window.location.href).href;
            const interfaceResponse = await fetch(interfacePath);

            if (!configResponse.ok || !interfaceResponse.ok) {
                throw new Error('Failed to load configurations');
            }

            this._config = await configResponse.json();
            this._interface = await interfaceResponse.json();
            
            this.render();
        } catch (error) {
            console.error('Failed to load configurations:', error);
        }
    }

    findConfigForHash(hash) {
        for (const configSection of this._config.children) {
            for (const child of configSection.children) {
                if (child.hash === hash) {
                    return configSection;
                }
            }
        }
        return null;
    }

    createLockedSection(section) {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'section locked';
        
        const title = document.createElement('h3');
        title.textContent = section.SectionName + ' (Protected)';  // Added '(Protected)' to show it's locked
        
        sectionEl.appendChild(title);
        sectionEl.addEventListener('click', () => this.unlockSection(section));
        
        return sectionEl;
    }

    async unlockSection(section) {
        const result = await this.showPasswordDialog(`Enter password for ${section.SectionName}`);
        if (!result) return;
        
        try {
            const validationResult = await passwordManager.validatePassword('section', section.SectionName, result);
            if (!validationResult.valid) {
                // Fall back to old method
                const unlocked = passwordManager.unlock(
                    `section-${section.SectionName}`,
                    result,
                    section.password
                );
                
                if (!unlocked) {
                    window.notify({
                        type: "error",
                        name: "Access Denied",
                        desc: "Invalid password for section access"
                    });
                    return;
                }
            }
        } catch (error) {
            // If validatePassword fails, use old method
            const unlocked = passwordManager.unlock(
                `section-${section.SectionName}`,
                result,
                section.password
            );
            
            if (!unlocked) {
                window.notify({
                    type: "error",
                    name: "Access Denied",
                    desc: "Invalid password for section access"
                });
                return;
            }
        }
        
        this.renderCurrentPage();
    }


    createSection(section) {
        if (section.password && !passwordManager.isUnlocked(`section-${section.SectionName}`)) {
            return this.createLockedSection(section);
        }
    
        // If no custom component specified or if it's hw-section, create default section
        if (!section.component || section.component === 'hw-section') {
            const sectionEl = document.createElement('div');
            sectionEl.className = `section ${section.orientation || 'vertical'}`;
            
            const title = document.createElement('h3');
            title.textContent = section.SectionName;
            sectionEl.appendChild(title);
    
            const content = document.createElement('div');
            content.className = 'section-content';
    
            section.NodesList.forEach(node => {
                const configForNode = this.findConfigForHash(node.hash);
                
                if (configForNode) {
                    if (node.password && !passwordManager.isUnlocked(`component-${node.hash}`)) {
                        content.appendChild(this.createLockedComponent(node));
                    } else {
                        const wrapper = document.createElement('div');
                        const dockHtml = `<hw-dock></hw-dock>`;
                        wrapper.innerHTML = dockHtml;
                        const dock = wrapper.firstChild;
                        
                        content.appendChild(dock);
                        
                        requestAnimationFrame(() => {
                            const descriptor = {
                                ...configForNode,
                                children: [{
                                    ...configForNode.children.find(child => child.hash === node.hash),
                                    ...node
                                }]
                            };
                            dock.descriptor = descriptor;
                            if (this._socket) {
                                dock.socket = this._socket;
                            }
                        });
                    }
                }
            });
    
            sectionEl.appendChild(content);
            return sectionEl;
        }
    
        // Handle custom section renderer
        const sectionEl = document.createElement(section.component);
        sectionEl.className = `section ${section.orientation || 'vertical'}`;
        
        // Set the section descriptor
        const sectionDescriptor = {
            ...section,
            children: section.NodesList.map(node => {
                const configForNode = this.findConfigForHash(node.hash);
                return {
                    ...configForNode?.children.find(child => child.hash === node.hash),
                    ...node
                };
            })
        };
        
        sectionEl.descriptor = sectionDescriptor;
    
        if (this._socket) {
            sectionEl.socket = this._socket;
        }
    
        return sectionEl;
    }

    createLockedComponent(node) {
        const wrapper = document.createElement('div');
        wrapper.className = 'locked-component';
        
        const label = document.createElement('span');
        label.textContent = node.name + ' (Protected)';  // Added '(Protected)' to show it's locked
        
        wrapper.appendChild(label);
        wrapper.addEventListener('click', () => this.unlockComponent(node));
        
        return wrapper;
    }

    async unlockComponent(node) {
        const result = await this.showPasswordDialog(`Enter password for ${node.name}`);
        if (!result) return;
        
        try {
            // Try the new validation method first
            const validationResult = await passwordManager.validatePassword('component', node.hash.toString(), result);
            if (validationResult.valid) {
                this.renderCurrentPage();
                return;
            }
        } catch (error) {
            console.warn('Password validation through config failed, falling back to interface passwords');
        }
    
        // If we get here, try using the password from the interface
        if (result === node.password) {
            passwordManager._unlockedItems.set(`component-${node.hash}`, {
                timestamp: Date.now(),
                duration: 5 * 60 * 1000 // 5 minutes
            });
            this.renderCurrentPage();
            return;
        }
    
        // If both methods fail, show error
        window.notify({
            type: "error",
            name: "Access Denied",
            desc: "Invalid password for component access"
        });
    }

    createNavigation() {
        const nav = this.querySelector('.tab-navigation');
        nav.innerHTML = '';
        
        this._interface.pages.forEach((page, index) => {
            const button = document.createElement('sl-button');
            button.variant = this._currentPage === index ? 'primary' : 'default';
            button.textContent = page.PageName;
            button.addEventListener('click', () => this.switchPage(index));
            nav.appendChild(button);
        });
    }

    async switchPage(index) {
        const page = this._interface.pages[index];
        
        if (page.password) {
            if (!passwordManager.isUnlocked(`page-${page.PageName}`)) {
                const result = await this.showPasswordDialog(`Enter password for ${page.PageName}`);
                if (!result) return; // User cancelled
                
                // Try both methods - first the new validatePassword
                try {
                    const validationResult = await passwordManager.validatePassword('page', page.PageName, result);
                    if (!validationResult.valid) {
                        // Fall back to the old unlock method if validation fails
                        const unlocked = passwordManager.unlock(
                            `page-${page.PageName}`,
                            result,
                            page.password
                        );
                        
                        if (!unlocked) {
                            window.notify({
                                type: "error",
                                name: "Access Denied",
                                desc: "Invalid password for page access"
                            });
                            return;
                        }
                    }
                } catch (error) {
                    // If validatePassword fails, try the old unlock method
                    const unlocked = passwordManager.unlock(
                        `page-${page.PageName}`,
                        result,
                        page.password
                    );
                    
                    if (!unlocked) {
                        window.notify({
                            type: "error",
                            name: "Access Denied",
                            desc: "Invalid password for page access"
                        });
                        return;
                    }
                }
            }
        }
    
        this._currentPage = index;
        this.renderCurrentPage();
        this.createNavigation();
    }

    renderCurrentPage() {
        const pageContent = this.querySelector('.page-content');
        pageContent.innerHTML = '';
        
        const currentPage = this._interface.pages[this._currentPage];
        currentPage.sections.forEach(section => {
            pageContent.appendChild(this.createSection(section));
        });
    }

    render() {
        if (!this._interface || !this._config) return;

        const editor = this.querySelector('interface-editor');
        if (editor && this._socket) {
            editor.socket = this._socket;
    }
        this.createNavigation();
        this.renderCurrentPage();

    }

    set socket(socket) {
        this._socket = socket;
        // Update socket for all docks
        this.querySelectorAll('hw-dock').forEach(dock => {
            dock.socket = socket;
        });
    }

    get socket() {
        return this._socket;
    }
}

window.customElements.define('hw-dynamic', HwDynamic);

const template$i = document.createElement('template');

template$i.innerHTML = `
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
      let $template = template$i.content.cloneNode(true);
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

const template$h = document.createElement('template');
template$h.innerHTML = `
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
        this.appendChild(template$h.content.cloneNode(true));
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

const template$g = document.createElement('template');

template$g.innerHTML = `
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
        let $template = template$g.content.cloneNode(true);
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

const template$f = document.createElement('template');

template$f.innerHTML = `
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
      let $template = template$f.content.cloneNode(true);
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

const template$e = document.createElement('template');

template$e.innerHTML = `
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
        let $template = template$e.content.cloneNode(true);
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
 * Similar to RxIndicator, the rx-greenlight component represents a green indicator light but with no blinking. 
 * This green light version might be used for signaling positive or "go" conditions.

Associated Parameters:

name: The label for the indicator.
inverse: Inverts the on off behavior based on the boolean value of this descriptor field.
value: Controls whether the indicator is on or off.
disable: Controls whether the indicator is enabled or disabled.
Events:

The light get on, showing a green circle based on the value and the inverse flag.

 */

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
        const inverse = this._descriptor.inverse;
        const disable = this._descriptor.disable;
        let $template = template$d.content.cloneNode(true);
        let $indicator = $template.querySelector(".dot");
        // 1. Set label for switch
        let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        $template.querySelector(".label").innerText = name;
        // 2. Handle indicator state with respect to inverse
        if (inverse) {
            // Inverse the behavior: add "ron" when value is falsy, remove when truthy
            if (!this.value) {
                $indicator.classList.add("gon");
            } else {
                $indicator.classList.remove("gon");
            }
        } else {
            // Regular behavior: add "ron" when value is truthy, remove when falsy
            if (this.value) {
                $indicator.classList.add("gon");
            } else {
                $indicator.classList.remove("gon");
            }
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

window.customElements.define('rx-greenlight', RxIndicatorGreen);

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

const template$c = document.createElement('template');

// Creates a blinker effect
template$c.innerHTML = `
    <style>
        .dot {
            height: 1rem;
            width: 1rem;
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
        let $template = template$c.content.cloneNode(true);
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

const template$b = document.createElement('template');

template$b.innerHTML = `
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
        this.shadowRoot.appendChild(template$b.content.cloneNode(true));
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

class GraphRenderer {
    constructor(container) {
        this.container = container;
        this._data = new Map();
        this._nodes = new Map();
        this._initialized = false;
        this._maxPoints = 50;
        this._yScale = { min: null, max: null };
        this._d3Loaded = false;
    }

    async initialize() {
        await this.loadD3();
        this.initGraph();
    }

    async loadD3() {
        if (window.d3) {
            this._d3Loaded = true;
            return;
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js';
            script.onload = () => {
                this._d3Loaded = true;
                resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    initGraph() {
        if (!this._d3Loaded) return;

        const { width, height } = this.container.getBoundingClientRect();

        this._margin = { top: 20, right: 30, bottom: 30, left: 40 };
        this._width = width - this._margin.left - this._margin.right;
        this._height = height - this._margin.top - this._margin.bottom;

        // Create SVG
        this._svg = d3.select(this.container)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${this._margin.left},${this._margin.top})`);

        // Create scales
        this._xScale = d3.scaleTime().range([0, this._width]);
        this._yScale = d3.scaleLinear().range([this._height, 0]);

        // Create axes
        this._xAxis = this._svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${this._height})`);

        this._yAxis = this._svg.append('g')
            .attr('class', 'y-axis');

        // Add grid
        this._svg.append('g')
            .attr('class', 'grid')
            .style('stroke-dasharray', '3,3')
            .style('stroke-opacity', '0.2');

        this._initialized = true;
    }

    addNode(hash, name) {
        if (!this._nodes.has(hash)) {
            const color = d3.schemeCategory10[this._nodes.size % 10];
            this._nodes.set(hash, { color, name });
            this._data.set(hash, []);
        }
    }

    removeNode(hash) {
        this._nodes.delete(hash);
        this._data.delete(hash);
        this.render();
    }

    getNodeColor(hash) {
        return this._nodes.get(hash)?.color;
    }

    addDataPoint(hash, value) {
        if (!this._nodes.has(hash)) return;

        // Validate and convert value
        let numValue;
        if (typeof value === 'boolean') {
            numValue = value ? 1 : 0;
        } else {
            numValue = Number(value);
            if (isNaN(numValue)) {
                console.warn(`Invalid value for hash ${hash}:`, value);
                return;
            }
        }

        const time = new Date();
        if (!this._data.has(hash)) {
            this._data.set(hash, []);
        }

        const dataPoints = this._data.get(hash);
        dataPoints.push({ 
            time, 
            value: numValue,
            raw: value // Store original value for reference
        });

        if (dataPoints.length > this._maxPoints) {
            dataPoints.shift();
        }

        this.render();
    }

    setScale(type, value) {
        this._yScale[type] = value;
        this.render();
    }

    resetScale() {
        this._yScale.min = null;
        this._yScale.max = null;
        this.render();
    }

    setMaxPoints(value) {
        this._maxPoints = value;
        this._data.forEach(points => {
            while (points.length > value) {
                points.shift();
            }
        });
        this.render();
    }

    render() {
        if (!this._initialized || this._data.size === 0) return;

        // Filter out invalid values and get valid ranges
        const allValues = [];
        const allTimes = [];
        this._data.forEach(points => {
            points.forEach(point => {
                if (!isNaN(point.value)) {
                    allValues.push(point.value);
                    allTimes.push(point.time);
                }
            });
        });

        if (allValues.length === 0 || allTimes.length === 0) return;

        // Calculate domains with padding
        const minValue = Math.min(0, ...allValues);
        const maxValue = Math.max(1, ...allValues);
        const padding = Math.max(0.1, (maxValue - minValue) * 0.1);

        // Set domains
        this._yScale.domain([
            this._yScale.min ?? (minValue - padding),
            this._yScale.max ?? (maxValue + padding)
        ]);

        const timeExtent = d3.extent(allTimes);
        this._xScale.domain(timeExtent);

        // Update axes
        this._xAxis.transition()
            .duration(300)
            .call(d3.axisBottom(this._xScale)
                .ticks(5)
                .tickFormat(d => d.toLocaleTimeString()));

        this._yAxis.transition()
            .duration(300)
            .call(d3.axisLeft(this._yScale));

        // Update grid
        this._svg.select('.grid')
            .transition()
            .duration(300)
            .call(d3.axisLeft(this._yScale)
                .tickSize(-this._width)
                .tickFormat(''));

        // Create line generator with defined() to handle invalid values
        const line = d3.line()
            .defined(d => !isNaN(d.value)) // Skip invalid values
            .x(d => this._xScale(d.time))
            .y(d => this._yScale(d.value))
            .curve(d3.curveStep);

        // Update lines
        const lines = this._svg.selectAll('.data-line')
            .data([...this._data.entries()], d => d[0]);

        // Remove old lines
        lines.exit().remove();

        // Add new lines
        const linesEnter = lines.enter()
            .append('path')
            .attr('class', 'data-line')
            .attr('clip-path', 'url(#clip)')
            .attr('fill', 'none')
            .attr('stroke-width', 2);

        // Update all lines
        lines.merge(linesEnter)
            .attr('stroke', d => this._nodes.get(d[0]).color)
            .transition()
            .duration(300)
            .attr('d', d => line(d[1].filter(point => !isNaN(point.value))));
    }

    cleanup() {
        if (this._svg) {
            this._svg.remove();
        }
        this._initialized = false;
    }
}

const template$a = document.createElement('template');
template$a.innerHTML = `
    <style>
        .card {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 1rem;
        }

        .graph-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .graph-container {
            flex: 1;
            min-height: 400px;
            position: relative;
        }

        .controls-panel {
            display: flex;
            gap: 1rem;
            align-items: center;
            background: var(--sl-color-neutral-50);
            padding: 0.5rem;
            border-radius: var(--sl-border-radius-medium);
        }

        .node-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .node-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem 0.5rem;
            background: var(--sl-color-neutral-100);
            border-radius: var(--sl-border-radius-small);
        }

        .node-color {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .remove-node {
            cursor: pointer;
            color: var(--sl-color-danger-600);
            padding: 2px 6px;
            border-radius: 50%;
        }

        .remove-node:hover {
            background: var(--sl-color-danger-100);
        }

        .scale-controls {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        .scale-controls input {
            width: 80px;
            padding: 4px 8px;
            border: 1px solid var(--sl-color-neutral-300);
            border-radius: var(--sl-border-radius-small);
            background: var(--sl-color-neutral-0);
        }

        .scale-controls button {
            padding: 4px 8px;
            border: 1px solid var(--sl-color-neutral-300);
            border-radius: var(--sl-border-radius-small);
            background: var(--sl-color-neutral-0);
            cursor: pointer;
        }
        .data-line {
        stroke-linecap: square;
        stroke-linejoin: miter;
        vector-effect: non-scaling-stroke;
        }

        .data-dots circle {
            stroke: var(--sl-color-neutral-0);
            stroke-width: 1;
            transition: r 0.2s ease;
        }

        .data-dots circle:hover {
            r: 5;
            stroke-width: 2;
        }

        .scale-controls button:hover {
            background: var(--sl-color-neutral-100);
        }
    </style>
    <div class="card">
        <div class="graph-header">
            <div class="node-list"></div>
            <div class="controls-panel">
                <div class="scale-controls">
                    <label>Y-Scale:</label>
                    <input type="number" class="y-min" placeholder="Min">
                    <input type="number" class="y-max" placeholder="Max">
                    <button class="reset-scale">Reset</button>
                </div>
                <div class="points-control">
                    <label>Points:</label>
                    <input type="number" class="max-points" value="50" min="10" max="1000">
                </div>
            </div>
        </div>
        <div class="graph-container"></div>
    </div>
`;

class RxGraph extends ConnectedElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template$a.content.cloneNode(true));
        
        this._nodes = new Map();
        this._maxPoints = 50;
        this._graphRenderer = null;
        
        // Bind methods
        this.addNode = this.addNode.bind(this);
        this.removeNode = this.removeNode.bind(this);
        this.setupEventListeners = this.setupEventListeners.bind(this);
        this.handleScaleChange = this.handleScaleChange.bind(this);
        this.handleMaxPointsChange = this.handleMaxPointsChange.bind(this);
    }

    async connectedCallback() {
        super.connectedCallback();
        this._graphRenderer = new GraphRenderer(
            this.shadowRoot.querySelector('.graph-container')
        );
        await this._graphRenderer.initialize();
        this.setupEventListeners();
    }

    disconnectedCallback() {
        this._nodes.forEach((node) => {
            if (this.socket) {
                this.socket.removeTarget(node.id);
            }
        });
        this._graphRenderer?.cleanup();
    }

    setupEventListeners() {
        const yMin = this.shadowRoot.querySelector('.y-min');
        const yMax = this.shadowRoot.querySelector('.y-max');
        const resetBtn = this.shadowRoot.querySelector('.reset-scale');
        const maxPoints = this.shadowRoot.querySelector('.max-points');

        yMin.addEventListener('change', () => this.handleScaleChange('min', yMin.value));
        yMax.addEventListener('change', () => this.handleScaleChange('max', yMax.value));
        resetBtn.addEventListener('click', () => this.handleScaleReset());
        maxPoints.addEventListener('change', this.handleMaxPointsChange);
    }

    addNode(hash, name, type) {
        if (!this._nodes.has(hash)) {
            const node = {
                id: hash,
                name: name || `Node ${hash}`,
                type: type || 'default'
            };
            this._nodes.set(hash, node);
            this._graphRenderer?.addNode(hash, name);
            this.updateNodeList();
            
            if (this.socket) {
                this.socket.setTarget(hash, (value) => this.update(value, { hash }));
            }
        }
    }

    removeNode(hash) {
        if (this._nodes.has(hash)) {
            if (this.socket) {
                this.socket.removeTarget(hash);
            }
            this._nodes.delete(hash);
            this._graphRenderer?.removeNode(hash);
            this.updateNodeList();
        }
    }

    updateNodeList() {
        const nodeList = this.shadowRoot.querySelector('.node-list');
        nodeList.innerHTML = '';

        this._nodes.forEach((node) => {
            const nodeItem = document.createElement('div');
            nodeItem.className = 'node-item';
            nodeItem.innerHTML = `
                <div class="node-color" style="background: ${this._graphRenderer.getNodeColor(node.id)}"></div>
                <span>${node.name}</span>
                <span class="remove-node" data-hash="${node.id}">×</span>
            `;
            nodeItem.querySelector('.remove-node').addEventListener('click', 
                () => this.removeNode(node.id)
            );
            nodeList.appendChild(nodeItem);
        });
    }

    update(value, descriptor) {
        if (descriptor?.hash && this._nodes.has(descriptor.hash)) {
            this._graphRenderer?.addDataPoint(
                descriptor.hash,
                typeof value === 'boolean' ? (value ? 1 : 0) : Number(value)
            );
        }
    }

    handleScaleChange(type, value) {
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
            this._graphRenderer?.setScale(type, numValue);
        }
    }

    handleScaleReset() {
        this.shadowRoot.querySelector('.y-min').value = '';
        this.shadowRoot.querySelector('.y-max').value = '';
        this._graphRenderer?.resetScale();
    }

    handleMaxPointsChange(event) {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value >= 10) {
            this._maxPoints = value;
            this._graphRenderer?.setMaxPoints(value);
        }
    }

    render() {
        // Required by ConnectedElement interface
        this._graphRenderer?.render();
    }
}

window.customElements.define('rx-graph', RxGraph);

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

const template$9 = document.createElement('template');

template$9.innerHTML = `
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
        this.shadowRoot.appendChild(template$9.content.cloneNode(true));
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

const template$8 = document.createElement('template');

template$8.innerHTML = `
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
        let $template = template$8.content.cloneNode(true);
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

/**
 * Similar to rx-greenlight. It represents a red indicator light but with no blinking. 
 * This red light version might be used for signaling error or unwanted state.

Associated Parameters:

name: The label for the indicator.
inverse: Inverts the on off behavior based on the boolean value of this descriptor field.
value: Controls whether the indicator is on or off.
disable: Controls whether the indicator is enabled or disabled.
Events:

The light get on, showing a red circle based on the value and the inverse flag.

 */

const template$7 = document.createElement('template');

// Creates a blinker effect
template$7.innerHTML = `
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
        const inverse = this._descriptor.inverse;
        const disable = this._descriptor.disable;
        let $template = template$7.content.cloneNode(true);
        let $indicator = $template.querySelector(".dot");
        // 1. Set label for switch
        let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        $template.querySelector(".label").innerText = name;
       
        // 2. Handle indicator state with respect to inverse
        if (inverse) {
            // Inverse the behavior: add "ron" when value is falsy, remove when truthy
            if (!this.value) {
                $indicator.classList.add("ron");
            } else {
                $indicator.classList.remove("ron");
            }
        } else {
            // Regular behavior: add "ron" when value is truthy, remove when falsy
            if (this.value) {
                $indicator.classList.add("ron");
            } else {
                $indicator.classList.remove("ron");
            }
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

window.customElements.define('rx-redlight', RxIndicatorRed);

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

const template$2 = document.createElement('template');
template$2.innerHTML = `
    <div class="dropdown-selection">
        <sl-dropdown>
            <sl-button slot="trigger" caret></sl-button>
            <sl-menu class="dropdown-menu">
            </sl-menu>
        </sl-dropdown>
    </div>
`;

class TxDropdownGraph extends ConnectedElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template$2.content.cloneNode(true));

        this.dropdown = this.shadowRoot.querySelector('sl-dropdown');
        this.buttonTitle = this.shadowRoot.querySelector('sl-button');
        this.menu = this.shadowRoot.querySelector('.dropdown-menu');
        
        this.items = [];
        this.selectedValue = null;
        this.addedNodes = new Set();

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    connectedCallback() {
        this.menu.addEventListener('sl-select', this.handleItemClick);
        this.buttonTitle.textContent = this._descriptor?.name || "Select Component";
        this.loadConfig();
    }

    disconnectedCallback() {
        this.menu.removeEventListener('sl-select', this.handleItemClick);
    }

    findGraphComponent() {
        // Get out of shadow DOM
        let element = this;
        while (element.getRootNode().host) {
            element = element.getRootNode().host;
        }
    
        // Get parent div with class 'section' that contains this component
        let section = element.closest('.section');
        if (!section) {
            console.log('No section found');
            return null;
        }
    
        // Find the section content
        const sectionContent = section.querySelector('.section-content');
        if (!sectionContent) {
            console.log('No section content found');
            return null;
        }
    
        // Look for the second hw-dock (should contain our graph)
        const hwDocks = sectionContent.querySelectorAll('hw-dock');
        if (hwDocks.length < 2) {
            console.log('Not enough hw-docks found:', hwDocks.length);
            return null;
        }
    
        // The second hw-dock should contain our graph
        const graphDock = hwDocks[1];
        let graphDiv = document.createElement('rx-graph');
        
        // Add it to the children div
        const childrenDiv = graphDock.querySelector('.children');
        if (childrenDiv) {
            // Only add if it's not already there
            if (!childrenDiv.querySelector('rx-graph')) {
                childrenDiv.appendChild(graphDiv);
            }
            return childrenDiv.querySelector('rx-graph');
        }
    
        console.log('Could not find or create graph component');
        return null;
    }

    async loadConfig() {
        try {
            const response = await fetch('/config.json');
            if (!response.ok) throw new Error('Failed to load config');
            const config = await response.json();
            this.processConfig(config);
        } catch (error) {
            console.error('Error loading config:', error);
        }
    }

    processConfig(config) {
        this.items = [];
        
        const processNode = (node) => {
            if (node.hash) {
                this.items.push({
                    hash: node.hash,
                    name: node.name || `${node.hash}`
                });
            }
            
            if (node.children && Array.isArray(node.children)) {
                node.children.forEach(processNode);
            }
        };

        if (config.children && Array.isArray(config.children)) {
            config.children.forEach(processNode);
        }

        this.updateMenu();
    }

    updateMenu() {
        this.menu.innerHTML = '';

        this.items
            .filter(item => !this.addedNodes.has(item.hash))
            .forEach(item => {
                const menuItem = document.createElement('sl-menu-item');
                menuItem.value = item.hash;
                menuItem.textContent = item.name ? `${item.name} (${item.hash})` : `${item.hash}`;
                this.menu.appendChild(menuItem);
            });
    }

    handleItemClick(event) {
        const selectedHash = event.detail.item.value;
        console.log('Selected hash:', selectedHash);
        
        const selectedItem = this.items.find(item => 
            item.hash.toString() === selectedHash.toString()
        );
        console.log('Selected item:', selectedItem);
        
        if (!selectedItem) return;

        const graphComponent = this.findGraphComponent();
        console.log('Found graph component:', graphComponent);
        
        if (graphComponent && typeof graphComponent.addNode === 'function') {
            console.log('Adding node:', selectedHash, selectedItem.name);
            graphComponent.addNode(selectedHash, selectedItem.name || selectedHash);
            this.addedNodes.add(selectedHash);
            this.updateMenu();
        } else if (graphComponent) {
            console.error('Found component but no addNode method. Available methods:', 
                Object.getOwnPropertyNames(Object.getPrototypeOf(graphComponent)));
        } else {
            console.error('No graph component found');
        }
        
        this.dropdown.hide();
    }

    render() {
        this.buttonTitle.textContent = this._descriptor?.name || "Select Component";
    }
}

window.customElements.define('tx-dropdowngraph', TxDropdownGraph);

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

const template$1 = document.createElement('template');

template$1.innerHTML = `
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

const template = document.createElement('template');

template.innerHTML = `
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
        let $template = template.content.cloneNode(true);
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

class InterfaceEditor extends ConnectedElement {
    constructor() {
        super();
        this.versions = [];
        this.maxVersions = 10;
        
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .edit-btn {
                    --sl-button-font-size-medium: 0.5rem;
                    --sl-button-height-medium: .5rem;
                    --sl-button-padding-x: 0.5rem;
                }

                .interface-edit-card {
                    position: fixed;
                    top: 10px;
                    right: 10px;
                    background: rgba(var(--sl-color-neutral-0-rgb), 0.3);
                    padding: 4px;
                    border-radius: 4px;
                    opacity: 0.2;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(4px);
                    transform: scale(0.85);
                }

                .interface-edit-card:hover {
                    opacity: 1;
                    background: rgba(var(--sl-color-neutral-0-rgb), 0.8);
                    transform: scale(1);
                }
                
                dialog {
                    width: 40vw;
                    height: 60vh;
                    background: rgba(var(--sl-color-neutral-0-rgb), 0.5);
                    border: 1px solid var(--sl-color-neutral-300);
                    border-radius: 8px;
                    padding: 20px;
                    resize: both;
                    overflow: auto;
                    min-width: 10vw;
                    min-height: 10vh;
                    position: fixed;
                }

                dialog::backdrop {
                    background: rgba(0, 0, 0, 0.75);
                }

                dialog:hover {
                    border-color: var(--sl-color-neutral-400);
                }

                textarea {
                    width: 100%;
                    height: calc(90% - 100px);
                    font-family: monospace;
                    font-size: 14px;
                    padding: 10px;
                    background: rgba(var(--sl-color-neutral-50-rgb), 0.7);
                    color: var(--sl-color-neutral-1000);
                    border: 1px solid var(--sl-color-neutral-300);
                    border-radius: 4px;
                    resize: none;
                }

                .version-controls {
                    margin-bottom: 10px;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    background: rgba(var(--sl-color-neutral-0-rgb), 0.8);
                    padding: 8px;
                    border-radius: 4px;
                }

                .version-info {
                    color: var(--sl-color-neutral-600);
                    font-size: 14px;
                }

                .dialog-footer {
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    background: rgba(var(--sl-color-neutral-0-rgb), 0.8);
                    padding: 8px;
                    border-radius: 4px;
                }

                .dialog-footer sl-button {
                    margin-left: 10px;
                }

                sl-select {
                    min-width: 300px;
                }

                /* Custom resize handle */
                dialog::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 20px;
                    height: 20px;
                    cursor: se-resize;
                    background: linear-gradient(
                        135deg,
                        transparent 50%,
                        var(--sl-color-neutral-300) 50%
                    );
                    border-bottom-right-radius: 4px;
                }
            </style>
            <div class="interface-edit-card">
                <sl-button class="edit-btn" variant="primary">Edit Interface</sl-button>
            </div>
            <dialog>
                <div class="version-controls">
                    <sl-button class="save-ref-btn" variant="warning">Save Reference Version</sl-button>
                    <sl-button class="delete-version-btn" variant="danger" disabled>Delete Version</sl-button>
                    <span class="version-info"></span>
                </div>
                <textarea spellcheck="false"></textarea>
                <div class="dialog-footer">
                    <div class="version-actions">
                        <sl-select class="version-select" placeholder="Load Version" hoist>
                            <sl-menu>
                                <sl-menu-item value="">Current</sl-menu-item>
                            </sl-menu>
                        </sl-select>
                    </div>
                    <div>
                        <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                        <sl-button class="save-btn" variant="primary">Save</sl-button>
                    </div>
                </div>
            </dialog>
        `;
        
        this.appendChild(template.content.cloneNode(true));
        this.initElements();
        this.initListeners();
        this.loadVersions();
    }

    initElements() {
        this.dialog = this.querySelector('dialog');
        this.textarea = this.querySelector('textarea');
        this.versionInfo = this.querySelector('.version-info');
        this.versionSelect = this.querySelector('.version-select');
        this.editBtn = this.querySelector('.edit-btn');
        this.saveVersionBtn = this.querySelector('.save-version-btn');
        this.saveRefBtn = this.querySelector('.save-ref-btn');
        this.cancelBtn = this.querySelector('.cancel-btn');
        this.saveBtn = this.querySelector('.save-btn');
        this.deleteVersionBtn = this.querySelector('.delete-version-btn');

        // Verify all elements are found
        const elements = {
            dialog: this.dialog,
            textarea: this.textarea,
            versionInfo: this.versionInfo,
            versionSelect: this.versionSelect,
            editBtn: this.editBtn,
            saveRefBtn: this.saveRefBtn,
            deleteVersionBtn: this.deleteVersionBtn,
            cancelBtn: this.cancelBtn,
            saveBtn: this.saveBtn
        };
        // Check if any element is missing
        for (const [name, element] of Object.entries(elements)) {
            if (!element) {
                console.error(`Missing element: ${name}`);
            }
        }
    }

    initListeners() {
        if (this.editBtn) {
            this.editBtn.addEventListener('click', () => this.openEditor());
        }
        if (this.saveRefBtn) {
            this.saveRefBtn.addEventListener('click', () => this.saveRefVersion());
        }
        if (this.deleteVersionBtn) {
            this.deleteVersionBtn.addEventListener('click', () => {
                // Get currently loaded version from version info
                const currentVersionText = this.versionInfo.textContent;
                console.log("Current version info:", currentVersionText);
                this.deleteVersion(currentVersionText);
            });
        }
        if (this.cancelBtn) {
            this.cancelBtn.addEventListener('click', () => this.closeEditor());
        }
        if (this.saveBtn) {
            this.saveBtn.addEventListener('click', () => this.saveChanges());
        }
        if (this.versionSelect) {
            this.versionSelect.addEventListener('sl-select', (event) => {
                const selectedValue = event.detail.item.value;
                console.log('Version selected:', selectedValue);
                this.loadVersion(selectedValue);
                if (this.deleteVersionBtn) {
                    this.deleteVersionBtn.disabled = !selectedValue;
                }
                // Store current selection for delete operation
                this.currentSelectedVersion = selectedValue;
            });
        }
    }

    async saveRefVersion() {
        const version = {
            content: this.textarea.value,
            timestamp: new Date().toISOString(),
            number: this.versions.length + 1
        };
    
        try {
            JSON.parse(version.content);
            
            if (this.versions.length >= this.maxVersions) {
                window.notify({
                    type: "warning",
                    name: "Version Limit",
                    desc: `Maximum ${this.maxVersions} versions reached. Delete old versions to save new ones.`
                });
                return;
            }
    
            this.versions.push(version);
            localStorage.setItem('interfaceVersions', JSON.stringify(this.versions));
            this.updateVersionSelect();
    
            window.notify({
                type: "success",
                name: "Version Saved",
                desc: `Version ${version.number} saved successfully`
            });
        } catch (err) {
            window.notify({
                type: "error",
                name: "Version Save Failed",
                desc: "Invalid JSON format"
            });
        }
    }

    deleteVersion(versionInfo) {
        console.log("Attempting to delete version", versionInfo);
        
        // If no version is loaded, we can't delete
        if (!versionInfo || versionInfo === 'Current Version') {
            console.log("No version selected for deletion");
            return;
        }
    
        // Extract version number from version info (e.g., "Version 1 - 2024...")
        const match = versionInfo.match(/Version (\d+)/);
        if (!match) {
            console.log("Could not extract version number from:", versionInfo);
            return;
        }
    
        const versionNumber = parseInt(match[1]);
        console.log("Deleting version number:", versionNumber);
    
        // Find version index by number
        const versionIndex = this.versions.findIndex(v => v.number === versionNumber);
        if (versionIndex === -1) {
            console.log("Version not found:", versionNumber);
            return;
        }
    
        if (confirm(`Are you sure you want to delete version ${versionNumber}?`)) {
            // Remove the version
            this.versions.splice(versionIndex, 1);
            
            // Renumber remaining versions
            this.versions.forEach((v, i) => {
                v.number = i + 1;
            });
    
            // Save to localStorage
            localStorage.setItem('interfaceVersions', JSON.stringify(this.versions));
            
            // Update the UI
            this.updateVersionSelect();
            this.deleteVersionBtn.disabled = true;
            this.versionSelect.value = '';
            
            // Reset to current version
            this.reloadCurrentVersion();
            
            window.notify({
                type: "success",
                name: "Version Deleted",
                desc: `Version ${versionNumber} deleted successfully`
            });
        }
    }

    loadVersion(index) {
        console.log('Loading version index:', index);
        if (index === '' || index === undefined) {
            // Reset to current version
            this.reloadCurrentVersion();
            return;
        }
        
        const version = this.versions[parseInt(index)];
        console.log('Loading version:', version);
        if (version) {
            this.textarea.value = version.content;
            const date = new Date(version.timestamp).toLocaleString();
            this.versionInfo.textContent = `Version ${version.number} - ${date}`;
        }
    }

    async reloadCurrentVersion() {
    try {
        const response = await fetch('/interface.json');
        const content = await response.text();
        const parsedContent = JSON.parse(content);
        this.textarea.value = JSON.stringify(parsedContent, null, 2);
        this.versionInfo.textContent = 'Current Version';
    } catch (err) {
        console.error('Error loading current version:', err);
        window.notify({
            type: "error",
            name: "Error",
            desc: "Failed to load current version"
        });
    }
}

    updateVersionSelect() {
        const menu = document.createElement('sl-menu');
        menu.innerHTML = `<sl-menu-item value="">Current</sl-menu-item>`;
        
        this.versions.forEach((v, i) => {
            const date = new Date(v.timestamp).toLocaleString();
            const menuItem = document.createElement('sl-menu-item');
            menuItem.value = i.toString();
            menuItem.textContent = `Version ${v.number} - ${date}`;
            menu.appendChild(menuItem);
        });
        
        this.versionSelect.innerHTML = '';
        this.versionSelect.appendChild(menu);
    }


    async loadVersions() {
        try {
            const stored = localStorage.getItem('interfaceVersions');
            if (stored) {
                const parsed = JSON.parse(stored);
                this.versions = Array.isArray(parsed) ? parsed : [];
            } else {
                this.versions = [];
            }
            this.updateVersionSelect();
        } catch (err) {
            console.error('Error loading versions:', err);
            this.versions = [];
            localStorage.removeItem('interfaceVersions');
        }
    }

    async openEditor() {
        try {
            const response = await fetch('/interface.json');
            const content = await response.text();
            const parsedContent = JSON.parse(content);
            this.textarea.value = JSON.stringify(parsedContent, null, 2);
            this.versionInfo.textContent = 'Current Version';
            this.dialog.showModal();
        } catch (err) {
            console.error('Editor error:', err);
            window.notify({
                type: "error",
                name: "Error",
                desc: "Failed to load interface configuration"
            });
        }
    }

    closeEditor() {
        this.dialog.close();
        this.versionInfo.textContent = '';
        this.versionSelect.value = '';
    }

    async saveChanges() {
        try {
            const content = this.textarea.value;
            // Validate JSON
            JSON.parse(content);
            
            const response = await fetch('/api/save-interface', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: content })
            });
            
            if (!response.ok) throw new Error('Save failed');
            
            window.notify({
                type: "success",
                name: "Success",
                desc: "Interface configuration saved successfully"
            });
            
            this.closeEditor();
            
            if (this.socket) {
                this.socket.sendMessage("allStatesRequest", true);
            }
        } catch (err) {
            console.error('Save failed:', err);
            window.notify({
                type: "error",
                name: "Error",
                desc: err instanceof SyntaxError ? "Invalid JSON format" : "Failed to save changes"
            });
        }
    }

    disconnectedCallback() {
        if (this.dialog && this.dialog.parentNode) {
            this.dialog.parentNode.removeChild(this.dialog);
        }
        // Remove all event listeners
        this.editBtn?.removeEventListener('click', this.openEditor);
        this.saveVersionBtn?.removeEventListener('click', this.saveVersion);
        this.saveRefBtn?.removeEventListener('click', () => this.saveVersion(true));
        this.cancelBtn?.removeEventListener('click', this.closeEditor);
        this.saveBtn?.removeEventListener('click', this.saveChanges);
        this.versionSelect?.removeEventListener('sl-change', this.loadVersion);
    }

    // Required ConnectedElement overrides
    connectedCallback() {}
    render() {}
    update() {}
}

customElements.define('interface-editor', InterfaceEditor);

class ImageSection extends ConnectedElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isEditMode = false;
        this.snapToGrid = false;
        this.gridSize = 20;
        this._initialized = false;
        this._interfaceConfig = null;

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    color: var(--sl-color-neutral-400);
                }

                .image-section {
                    background-color: transparent;
                    border-radius: var(--sl-border-radius-medium);
                    color: var(--sl-color-neutral-900);
                    padding: 1rem;
                    margin-bottom: 1rem;
                    position: relative;
                }

                .editor-container {
                    position: relative;
                    width: 100%;
                    min-height: 400px;
                    border: 2px solid var(--sl-color-neutral-400);
                    border-radius: var(--sl-border-radius-medium);
                    overflow: hidden;
                    margin-bottom: 1rem;
                    background-color: transparent;
                }

                .background-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                }

                .nodes-container {
                    position: relative;
                    width: 100%;
                    min-height: 400px;
                }

                .node-container {
                    position: absolute;
                    background-color: transparent !important;
                    border-radius: 4px;
                    cursor: grab;
                    transition: transform 0.2s;
                    z-index: 2;
                }

                .node-container hw-dock {
                    background: transparent !important;
                }

                .node-container hw-dock > .card {
                    background: transparent !important;
                    border: none;
                    box-shadow: none;
                    margin: 0;
                    padding: 0;
                    color: var(--sl-color-neutral-400);
                }

                .node-container hw-dock .card {
                    background-color: transparent !important;
                    color: var(--node-text-color, var(--sl-color-neutral-900));
                }

                .node-container hw-dock h2,
                .node-container hw-dock .details {
                    display: none;
                }

                /* Ensure all nested elements are transparent */
                .node-container > * {
                    background-color: transparent !important;
                }

                .edit-mode .node-container {
                    border: 1px dashed var(--sl-color-primary-400);
                }

                .controls {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    padding: 0.5rem;
                }

                .edit-mode {
                    border: 2px dashed var(--sl-color-primary-400);
                }

                .hidden {
                    display: none;
                }
            </style>

            <div class="image-section">
                <h3></h3>
                <div class="controls">
                    <sl-button id="edit-toggle" variant="primary">Edit Mode</sl-button>
                    <sl-switch id="snap-toggle" class="hidden">Snap to Grid</sl-switch>
                    <sl-button id="upload-image" variant="neutral">Set Background</sl-button>
                </div>
                <div class="editor-container">
                    <div class="background-image"></div>
                    <div class="nodes-container"></div>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        if (!this._initialized) {
            // Load the interface configuration
            await this.loadInterfaceConfig();
    
            // Now that the configuration is loaded, set up event listeners
            this.setupEventListeners();
            this._initialized = true;
        }
        super.connectedCallback();
    }

    async loadInterfaceConfig() {
        try {
            const response = await fetch('/interface.json');
            const config = await response.json();
            this._interfaceConfig = config;
    
            const sectionName = this._descriptor?.SectionName;
            console.log("Loading section:", sectionName);
    
            if (!sectionName) {
                console.error('SectionName is not defined in descriptor.');
                return;
            }
    
            const sectionConfig = this.findSection(config, sectionName);
            if (sectionConfig) {
                console.log("Section config found:", sectionConfig.section);
    
                // Read NodesTextColor
                this.nodesTextColor = sectionConfig.section.NodesTextColor || '#FFFFFF';
                console.log("Loaded NodesTextColor:", this.nodesTextColor);
    
                // Set the CSS variable --node-text-color
                this.shadowRoot.querySelector('.image-section').style.setProperty('--node-text-color', this.nodesTextColor);
    
                // Read background image
                this.backgroundImage = sectionConfig.section.backgroundImage || null;
    
                // Read edit mode flag
                this.isEditable = sectionConfig.section.edit !== false;
                console.log("Edit mode enabled:", this.isEditable);
    
                // **Read new keys for dimensions and scaling**
                this.editorWidth = sectionConfig.section.width || '100%';
                this.editorHeight = sectionConfig.section.height || 'auto';
                this.backgroundScale = sectionConfig.section.backgroundScale || 1.0;
                console.log("Loaded dimensions:", this.editorWidth, this.editorHeight);
                console.log("Loaded background scale:", this.backgroundScale);
            } else {
                console.warn(`Section "${sectionName}" not found in configuration.`);
                // Set default values
                this.nodesTextColor = '#FFFFFF';
                this.isEditable = true;
                this.editorWidth = '100%';
                this.editorHeight = 'auto';
                this.backgroundScale = 1.0;
            }
    
            return config;
        } catch (err) {
            console.error('Failed to load interface configuration:', err);
            return null;
        }
    }

    findSection(config, sectionName) {
        for (const page of config.pages) {
            const section = page.sections.find(s => s.SectionName === sectionName);
            if (section) {
                return { page, section };
            }
        }
        return null;
    }

    setupEventListeners() {
        const editButton = this.shadowRoot.querySelector('#edit-toggle');
        const snapToggle = this.shadowRoot.querySelector('#snap-toggle');
        const saveButton = this.shadowRoot.querySelector('#save-nodes');
        const uploadButton = this.shadowRoot.querySelector('#upload-image');
        const editor = this.shadowRoot.querySelector('.editor-container');

        if (editButton) editButton.addEventListener('click', () => this.toggleEditMode());
        if (snapToggle) snapToggle.addEventListener('sl-change', (e) => this.snapToGrid = e.target.checked);
        if (saveButton) saveButton.addEventListener('click', () => this.saveNodes());
        if (uploadButton) uploadButton.addEventListener('click', () => this.promptForImage());
        if (editor) editor.addEventListener('dblclick', (e) => {
            if (this.isEditMode) this.addNodeOnDoubleClick(e);
        });
    }

    promptForImage() {
        const imageUrl = prompt('Enter image URL or base64 data:', '');
        if (imageUrl) {
            const backgroundImage = this.shadowRoot.querySelector('.background-image');
            backgroundImage.style.backgroundImage = `url('${imageUrl}')`;
            this._descriptor.backgroundImage = imageUrl;
        }
    }

    toggleEditMode() {
        this.isEditMode = !this.isEditMode;
        const editor = this.shadowRoot.querySelector('.editor-container');
        const snapToggle = this.shadowRoot.querySelector('#snap-toggle');
        this.shadowRoot.querySelector('#save-nodes');
    
        if (this.isEditMode) {
            editor.classList.add('edit-mode');
            editor.classList.remove('edit-mode-off');
            snapToggle.classList.remove('hidden');
    
            // Show positions of nodes
            this.showNodePositions();
        } else {
            editor.classList.remove('edit-mode');
            editor.classList.add('edit-mode-off');
            snapToggle.classList.add('hidden');
    
            // Hide positions of nodes
            this.hideNodePositions();
        }
    }

    showNodePositions() {
        const nodesContainer = this.shadowRoot.querySelector('.nodes-container');
        const nodes = Array.from(nodesContainer.children);
    
        nodes.forEach(node => {
            let positionLabel = node.querySelector('.position-label');
            if (!positionLabel) {
                positionLabel = document.createElement('div');
                positionLabel.classList.add('position-label');
                positionLabel.style.position = 'absolute';
                positionLabel.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                positionLabel.style.padding = '2px 5px';
                positionLabel.style.fontSize = '10px';
                positionLabel.style.borderRadius = '3px';
                positionLabel.style.pointerEvents = 'none';
                node.appendChild(positionLabel);
            }
    
            positionLabel.textContent = `x: ${parseFloat(node.style.left) || 0}, y: ${parseFloat(node.style.top) || 0}`;
            positionLabel.style.top = '-20px'; // Position above the node
            positionLabel.style.left = '0';
    
            // Apply the dynamically loaded text color
            const color = this.nodesTextColor || '#FFFFFF';
            console.log(`Applying node text color: ${color}`);
            positionLabel.style.color = color;
        });
    }
    
    hideNodePositions() {
        const nodesContainer = this.shadowRoot.querySelector('.nodes-container');
        const nodes = Array.from(nodesContainer.children);
    
        nodes.forEach(node => {
            const positionLabel = node.querySelector('.position-label');
            if (positionLabel) {
                positionLabel.remove();
            }
        });
    }

    addNode(x, y, nodeConfig) {
        try {
            const container = document.createElement('div');
            container.classList.add('node-container');
            container.style.left = `${x}px`;
            container.style.top = `${y}px`;
            container.dataset.hash = nodeConfig.hash;
    
            // Add to nodes container
            const nodesContainer = this.shadowRoot.querySelector('.nodes-container');
            nodesContainer.appendChild(container);
    
            // Create hw-dock using innerHTML
            container.innerHTML = '<hw-dock class="embedded-dock"></hw-dock>';
            const dock = container.querySelector('hw-dock');
    
            // Set the node text color on the dock component
            dock.style.setProperty('--node-text-color', this.nodesTextColor);
    
            // Set up dragging
            this.setupNodeDragging(container);
    
            // Configure the dock after it's created
            requestAnimationFrame(() => {
                dock.descriptor = {
                    name: nodeConfig.name,
                    type: nodeConfig.type || "ModbusWriteHoldingRegister",
                    children: [nodeConfig]
                };
                if (this.socket) {
                    dock.socket = this.socket;
                }
            });
        } catch (error) {
            console.error('Error adding node:', error, nodeConfig);
        }
    }

    setupNodeDragging(node) {
        node.addEventListener('mousedown', (event) => {
            if (!this.isEditMode) return;
            
            node.classList.add('dragging');
            const startX = event.clientX - node.offsetLeft;
            const startY = event.clientY - node.offsetTop;
    
            const onMouseMove = (e) => {
                const x = e.clientX - startX;
                const y = e.clientY - startY;
    
                const position = this.snapToGrid
                    ? this.snapToGridPosition(x, y)
                    : { x, y };
    
                node.style.left = `${position.x}px`;
                node.style.top = `${position.y}px`;
    
                // Update the position label if in edit mode
                if (this.isEditMode) {
                    const positionLabel = node.querySelector('.position-label');
                    if (positionLabel) {
                        positionLabel.textContent = `x: ${position.x}, y: ${position.y}`;
                    }
                }
            };
    
            const onMouseUp = () => {
                node.classList.remove('dragging');
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };
    
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        });
    }

    snapToGridPosition(x, y) {
        return {
            x: Math.round(x / this.gridSize) * this.gridSize,
            y: Math.round(y / this.gridSize) * this.gridSize,
        };
    }

    render() {
        const title = this.shadowRoot.querySelector('h3');
        title.textContent = this._descriptor?.SectionName || 'Image Section';
    
        const backgroundImage = this.shadowRoot.querySelector('.background-image');
        if (this.backgroundImage) {
            backgroundImage.style.backgroundImage = `url('${this.backgroundImage}')`;
            backgroundImage.style.backgroundSize = `${this.backgroundScale * 100}%`; // Apply background scaling
        }
    
        // **Apply dimensions to the editor container**
        const editor = this.shadowRoot.querySelector('.editor-container');
        if (editor) {
            editor.style.width = this.editorWidth;
            editor.style.height = this.editorHeight;
        }
    
        // Hide or show the edit buttons based on 'isEditable'
        const editButton = this.shadowRoot.querySelector('#edit-toggle');
        const uploadButton = this.shadowRoot.querySelector('#upload-image');
    
        if (!this.isEditable) {
            editButton.classList.add('hidden');
            uploadButton.classList.add('hidden');
        } else {
            editButton.classList.remove('hidden');
            uploadButton.classList.remove('hidden');
        }
    
        // Clear and rebuild nodes
        const nodesContainer = this.shadowRoot.querySelector('.nodes-container');
        nodesContainer.innerHTML = '';
    
        // Use saved positions from state if available
        const savedPositions = this._value?.positions || [];
    
        if (this._descriptor?.NodesList) {
            this._descriptor.NodesList.forEach(node => {
                if (node.component !== 'image-section') {
                    const savedPosition = savedPositions.find(p => p.hash === node.hash);
                    const x = savedPosition?.x || node.position?.x || 50;
                    const y = savedPosition?.y || node.position?.y || 50;
                    this.addNode(x, y, node);
                }
            });
        }
    }

    async update(val, descriptor) {
        if (val !== undefined) {
            this._value = val;
        }
        if (descriptor) {
            this._descriptor = descriptor;
    
            // Now that we have the descriptor, load the interface config
            await this.loadInterfaceConfig();
        }
        this.render();
    }
}

window.customElements.define('image-section', ImageSection);

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
