/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=true,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=i.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t));}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new s(i,t,o)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return (t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,b=p.trustedTypes,m=b?b.emptyScript:"",g=p.reactiveElementPolyfillSupport,f=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t);}catch(t){o=null;}}return o}},y=(t,e)=>!n(t,e),w={attribute:true,type:String,converter:v,reflect:false,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=false),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&l(this.prototype,t,i);}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t;}};return {get(){return i?.call(this)},set(e){const r=i?.call(this);s.call(this,e),this.requestUpdate(t,r,o);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const o of e)this.createProperty(o,t[o]);}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o);}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t));}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const o=e.attribute;return  false===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ((o,i)=>{if(e)o.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i);}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,e,o){this._$AK(t,o);}_$EC(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&true===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null;}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=s.fromAttribute(e,t.type),this._$Em=null;}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??y)(this[t],e))return;this.P(t,e,o);} false===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),true===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t) true!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o);}let t=false;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU();}catch(e){throw t=false,this._$EU(),e}t&&this._$AE(e);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[f("elementProperties")]=new Map,_[f("finalized")]=new Map,g?.({ReactiveElement:_}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,k=x.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+z,A=`<${S}>`,E=document,T=()=>E.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,D="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,B=/>/g,I=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,R=/"/g,M=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),H=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),W=new WeakMap,q=E.createTreeWalker(E,129);function j(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,i=[];let s,r=2===e?"<svg>":3===e?"<math>":"",a=P;for(let e=0;e<o;e++){const o=t[e];let n,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=F:void 0!==l[1]?a=B:void 0!==l[2]?(M.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=I):void 0!==l[3]&&(a=I):a===I?">"===l[0]?(a=s??P,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?I:'"'===l[3]?R:V):a===R||a===V?a=I:a===F||a===B?a=P:(a=I,s=void 0);const h=a===I&&t[e+1].startsWith("/>")?" ":"";r+=a===P?o+A:c>=0?(i.push(n),o.slice(0,c)+$+o.slice(c)+z+h):o+z+(-2===c?e:h);}return [j(t,r+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const a=t.length-1,n=this.parts,[l,c]=K(t,e);if(this.el=Y.createElement(l,o),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(i=q.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith($)){const e=c[r++],o=i.getAttribute(t).split(z),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?Q:"?"===a[1]?tt:"@"===a[1]?et:J}),i.removeAttribute(t);}else t.startsWith(z)&&(n.push({type:6,index:s}),i.removeAttribute(t));if(M.test(i.tagName)){const t=i.textContent.split(z),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],T()),q.nextNode(),n.push({type:2,index:++s});i.append(t[e],T());}}}else if(8===i.nodeType)if(i.data===S)n.push({type:2,index:s});else {let t=-1;for(;-1!==(t=i.data.indexOf(z,t+1));)n.push({type:7,index:s}),t+=z.length-1;}s++;}}static createElement(t,e){const o=E.createElement("template");return o.innerHTML=t,o}}function X(t,e,o=t,i){if(e===H)return e;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const r=O(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(false),void 0===r?s=void 0:(s=new r(t),s._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(e=X(t,s._$AS(t,e.values),s,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??E).importNode(e,true);q.currentNode=i;let s=q.nextNode(),r=0,a=0,n=o[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new G(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new ot(s,this,t)),this._$AV.push(e),n=o[++a];}r!==n?.index&&(s=q.nextNode(),r++);}return q.currentNode=E,i}p(t){let e=0;for(const o of this._$AV) void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++;}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==N&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t;}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Y.createElement(j(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else {const t=new Z(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t;}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Y(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new G(this.O(T()),this.O(T()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i);}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(false,true,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N;}_$AI(t,e=this,o,i){const s=this.strings;let r=false;if(void 0===s)t=X(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else {const i=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=X(this,i[o+a],e,a),n===H&&(n=this._$AH[a]),r||=!O(n)||n!==this._$AH[a],n===N?t=N:t!==N&&(t+=(n??"")+s[a+1]),this._$AH[a]=n;}r&&!i&&this.j(t);}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class Q extends J{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===N?void 0:t;}}class tt extends J{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N);}}class et extends J{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5;}_$AI(t,e=this){if((t=X(this,t,e,0)??N)===H)return;const o=this._$AH,i=t===N&&o!==N||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==N&&(o===N||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class ot{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o;}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t);}}const it=x.litHtmlPolyfillSupport;it?.(Y,G),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let st=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=o?.renderBefore??null;i._$litPart$=s=new G(e.insertBefore(T(),t),t,void 0,o??{});}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return H}};st._$litElement$=true,st.finalized=true,globalThis.litElementHydrateSupport?.({LitElement:st});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:st}),(globalThis.litElementVersions??=[]).push("4.1.1");var at=r`
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
`,nt=r`
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
`,lt="";function ct(t){lt=t;}var dt={name:"default",resolver:t=>function(t=""){if(!lt){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)ct(e.getAttribute("data-shoelace"));else {const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),ct(o.split("/").slice(0,-1).join("/"));}}return lt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},ht={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},ut=[dt,{name:"system",resolver:t=>t in ht?`data:image/svg+xml,${encodeURIComponent(ht[t])}`:""}],pt=[];function bt(t){return ut.find((e=>e.name===t))}var mt=Object.defineProperty,gt=Object.defineProperties,ft=Object.getOwnPropertyDescriptor,vt=Object.getOwnPropertyDescriptors,yt=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,xt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),kt=t=>{throw TypeError(t)},Ct=(t,e,o)=>e in t?mt(t,e,{enumerable:true,configurable:true,writable:true,value:o}):t[e]=o,$t=(t,e)=>{for(var o in e||(e={}))wt.call(e,o)&&Ct(t,o,e[o]);if(yt)for(var o of yt(e))_t.call(e,o)&&Ct(t,o,e[o]);return t},zt=(t,e)=>gt(t,vt(e)),St=(t,e,o,i)=>{for(var s,r=i>1?void 0:i?ft(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&mt(e,o,r),r},At=(t,e,o)=>e.has(t)||kt("Cannot "+o),Et=function(t,e){this[0]=t,this[1]=e;},Tt=t=>{var e,o=t[xt("asyncIterator")],i=false,s={};return null==o?(o=t[xt("iterator")](),e=t=>s[t]=e=>o[t](e)):(o=o.call(t),e=t=>s[t]=e=>{if(i){if(i=false,"throw"===t)throw e;return e}return i=true,{done:false,value:new Et(new Promise((i=>{var s=o[t](e);s instanceof Object||kt("Object expected"),i(s);})),1)}}),s[xt("iterator")]=()=>s,e("next"),"throw"in o?e("throw"):s.throw=t=>{throw t},"return"in o&&e("return"),s};function Ot(t,e){const o=$t({waitUntilFirstUpdate:false},e);return (e,i)=>{const{update:s}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),r=this[s];e!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,r));}})),s.call(this,t);};}}var Lt=r`
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
 */;const Dt={attribute:true,type:String,converter:v,reflect:false,hasChanged:y},Pt=(t=Dt,e,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,t),"accessor"===i){const{name:i}=o;return {set(o){const s=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,s,t);},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];e.call(this,o),this.requestUpdate(i,s,t);}}throw Error("Unsupported decorator location: "+i)};function Ft(t){return (e,o)=>"object"==typeof o?Pt(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,i?{...t,wrapped:true}:t),i?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Bt(t){return Ft({...t,state:true,attribute:false})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It(t){return (e,o)=>{const i="function"==typeof e?e:e[o];Object.assign(i,t);}}
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
function Vt(t,e){return (e,o,i)=>((t,e,o)=>(o.configurable=true,o.enumerable=true,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o))(e,o,{get(){return (e=>e.renderRoot?.querySelector(t)??null)(this)}})}var Rt,Mt=class extends st{constructor(){var t,e,o;super(),t=this,o=false,(e=Rt).has(t)?kt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([t,e])=>{this.constructor.define(t,e);}));}emit(t,e){const o=new CustomEvent(t,$t({bubbles:true,cancelable:false,composed:true,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){try{customElements.define(t,e,o);}catch(i){customElements.define(t,class extends e{},o);}return}let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),s&&r&&s===r||console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`);}attributeChangedCallback(t,e,o){var i,s;At(i=this,s=Rt,"read from private field"),s.get(i)||(this.constructor.elementProperties.forEach(((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e]);})),((t,e,o,i)=>{At(t,e,"write to private field"),e.set(t,o);})(this,Rt,true)),super.attributeChangedCallback(t,e,o);}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach(((e,o)=>{t.has(o)&&null==this[o]&&(this[o]=e);}));}};Rt=new WeakMap,Mt.version="2.19.1",Mt.dependencies={},St([Ft()],Mt.prototype,"dir",2),St([Ft()],Mt.prototype,"lang",2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ut=t=>void 0===t.strings,Ht={};var Nt,Wt=Symbol(),qt=Symbol(),jt=new Map,Kt=class extends Mt{constructor(){super(...arguments),this.initialRender=false,this.svg=null,this.label="",this.library="default";}async resolveIcon(t,e){var o;let i;if(null==e?void 0:e.spriteSheet)return this.svg=U`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return 410===i.status?Wt:qt}catch(t){return qt}try{const t=document.createElement("div");t.innerHTML=await i.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return Wt;Nt||(Nt=new DOMParser);const s=Nt.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Wt}catch(t){return Wt}}connectedCallback(){var t;super.connectedCallback(),t=this,pt.push(t);}firstUpdated(){this.initialRender=true,this.setIcon();}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,pt=pt.filter((e=>e!==t));}getIconSource(){const t=bt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:true}:{url:this.src,fromLibrary:false}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"));}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?bt(this.library):void 0;if(!e)return void(this.svg=null);let s=jt.get(e);if(s||(s=this.resolveIcon(e,i),jt.set(e,s)),!this.initialRender)return;const r=await s;if(r===qt&&jt.delete(e),e===this.getIconSource().url)if(((t,e)=>void 0!==t?._$litType$)(r)){if(this.svg=r,i){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof i.mutator&&t&&i.mutator(t);}}else switch(r){case qt:case Wt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(true),null==(t=null==i?void 0:i.mutator)||t.call(i,this.svg),this.emit("sl-load");}}render(){return this.svg}};Kt.styles=[Lt,nt],St([Bt()],Kt.prototype,"svg",2),St([Ft({reflect:true})],Kt.prototype,"name",2),St([Ft()],Kt.prototype,"src",2),St([Ft()],Kt.prototype,"label",2),St([Ft({reflect:true})],Kt.prototype,"library",2),St([Ot("label")],Kt.prototype,"handleLabelChange",1),St([Ot(["name","src","library"])],Kt.prototype,"setIcon",1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yt=1,Xt=2,Zt=3,Gt=4,Jt=t=>(...e)=>({_$litDirective$:t,values:e});let Qt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=Jt(class extends Qt{constructor(t){if(super(t),t.type!==Yt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)));}return H}}),ee=Symbol.for(""),oe=t=>{if(t?.r===ee)return t?._$litStatic$},ie=(t,...e)=>({_$litStatic$:e.reduce(((e,o,i)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]),r:ee}),se=new Map,re=(t=>(e,...o)=>{const i=o.length;let s,r;const a=[],n=[];let l,c=0,d=false;for(;c<i;){for(l=e[c];c<i&&void 0!==(r=o[c],s=oe(r));)l+=s+e[++c],d=true;c!==i&&n.push(r),a.push(l),c++;}if(c===i&&a.push(e[i]),d){const t=a.join("$$lit$$");void 0===(e=se.get(t))&&(a.raw=a,se.set(t,e=a)),o=n;}return t(e,...o)})(U),ae=t=>t??N;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne=class extends Mt{constructor(){super(...arguments),this.hasFocus=false,this.label="",this.disabled=false;}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation());}click(){this.button.click();}focus(t){this.button.focus(t);}blur(){this.button.blur();}render(){const t=!!this.href,e=t?ie`a`:ie`button`;return re`
      <${e}
        part="base"
        class=${te({"icon-button":true,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${ae(t?void 0:this.disabled)}
        type=${ae(t?void 0:"button")}
        href=${ae(t?this.href:void 0)}
        target=${ae(t?this.target:void 0)}
        download=${ae(t?this.download:void 0)}
        rel=${ae(t&&this.target?"noreferrer noopener":void 0)}
        role=${ae(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${ae(this.name)}
          library=${ae(this.library)}
          src=${ae(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};ne.styles=[Lt,at],ne.dependencies={"sl-icon":Kt},St([Vt(".icon-button")],ne.prototype,"button",2),St([Bt()],ne.prototype,"hasFocus",2),St([Ft()],ne.prototype,"name",2),St([Ft()],ne.prototype,"library",2),St([Ft()],ne.prototype,"src",2),St([Ft()],ne.prototype,"href",2),St([Ft()],ne.prototype,"target",2),St([Ft()],ne.prototype,"download",2),St([Ft()],ne.prototype,"label",2),St([Ft({type:Boolean,reflect:true})],ne.prototype,"disabled",2);var le=new Map,ce=new WeakMap;function de(t,e){return "rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function he(t,e){le.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e));}function ue(t,e,o){const i=ce.get(t);if(null==i?void 0:i[e])return de(i[e],o.dir);const s=le.get(e);return s?de(s,o.dir):{keyframes:[],options:{duration:0}}}function pe(t,e){return new Promise((o=>{t.addEventListener(e,(function i(s){s.target===t&&(t.removeEventListener(e,i),o());}));}))}function be(t,e,o){return new Promise((i=>{if((null==o?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,zt($t({},o),{duration:ge()?0:o.duration}));s.addEventListener("cancel",i,{once:true}),s.addEventListener("finish",i,{once:true});}))}function me(t){return (t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function ge(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function fe(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{t.cancel(),requestAnimationFrame(e);})))))}var ve=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate();},(this.host=t).addController(this),this.slotNames=e;}hasDefaultSlot(){return [...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return  true;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return  false;if(!e.hasAttribute("slot"))return  true}return  false}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return "[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange);}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange);}};const ye=new Set,we=new Map;let _e,xe="ltr",ke="en";const Ce="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Ce){const t=new MutationObserver(ze);xe=document.documentElement.dir||"ltr",ke=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:true,attributeFilter:["dir","lang"]});}function $e(...t){t.map((t=>{const e=t.$code.toLowerCase();we.has(e)?we.set(e,Object.assign(Object.assign({},we.get(e)),t)):we.set(e,t),_e||(_e=t);})),ze();}function ze(){Ce&&(xe=document.documentElement.dir||"ltr",ke=document.documentElement.lang||navigator.language),[...ye.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate();}));}let Se=class{constructor(t){this.host=t,this.host.addController(this);}hostConnected(){ye.add(this.host);}hostDisconnected(){ye.delete(this.host);}dir(){return `${this.host.dir||xe}`.toLowerCase()}lang(){return `${this.host.lang||ke}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),s=null==i?void 0:i.language.toLowerCase(),r=null!==(o=null===(e=null==i?void 0:i.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==o?o:"";return {locale:i,language:s,region:r,primary:we.get(`${s}-${r}`),secondary:we.get(s)}}exists(t,e){var o;const{primary:i,secondary:s}=this.getTranslationData(null!==(o=e.lang)&&void 0!==o?o:this.lang());return e=Object.assign({includeFallback:false},e),!!(i&&i[t]||s&&s[t]||e.includeFallback&&_e&&_e[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else {if(!_e||!_e[t])return console.error(`No translation found for: ${String(t)}`),String(t);s=_e[t];}return "function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var Ae={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};$e(Ae);var Ee=Ae,Te=class extends Se{};$e(Ee);var Oe=r`
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
    overflow: hidden;
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

  .alert--has-countdown {
    border-bottom: none;
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

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Le=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),De=class extends Mt{constructor(){super(...arguments),this.hasSlotController=new ve(this,"icon","suffix"),this.localize=new Te(this),this.open=false,this.closable=false,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration;}firstUpdated(){this.base.hidden=!this.open;}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval((()=>{this.remainingTime-=100;}),100));}pauseAutoHide(){var t;null==(t=this.countdownAnimation)||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval);}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.remainingTime),this.remainingTimeInterval=window.setInterval((()=>{this.remainingTime-=100;}),100),null==(t=this.countdownAnimation)||t.play());}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",o="0";this.countdownAnimation=t.animate([{width:e},{width:o}],{duration:this.duration,easing:"linear"});}}handleCloseClick(){this.hide();}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await fe(this.base),this.base.hidden=false;const{keyframes:t,options:e}=ue(this,"alert.show",{dir:this.localize.dir()});await be(this.base,t,e),this.emit("sl-after-show");}else {this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await fe(this.base);const{keyframes:t,options:e}=ue(this,"alert.hide",{dir:this.localize.dir()});await be(this.base,t,e),this.base.hidden=true,this.emit("sl-after-hide");}}handleDurationChange(){this.restartAutoHide();}async show(){if(!this.open)return this.open=true,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=false,pe(this,"sl-after-hide")}async toast(){return new Promise((t=>{this.handleCountdownChange(),null===Le.parentElement&&document.body.append(Le),Le.appendChild(this),requestAnimationFrame((()=>{this.clientWidth,this.show();})),this.addEventListener("sl-after-hide",(()=>{Le.removeChild(this),t(),null===Le.querySelector("sl-alert")&&Le.remove();}),{once:true});}))}render(){return U`
      <div
        part="base"
        class=${te({alert:true,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?U`
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

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?U`
              <div
                class=${te({alert__countdown:true,"alert__countdown--ltr":"ltr"===this.countdown})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};De.styles=[Lt,Oe],De.dependencies={"sl-icon-button":ne},St([Vt('[part~="base"]')],De.prototype,"base",2),St([Vt(".alert__countdown-elapsed")],De.prototype,"countdownElement",2),St([Ft({type:Boolean,reflect:true})],De.prototype,"open",2),St([Ft({type:Boolean,reflect:true})],De.prototype,"closable",2),St([Ft({reflect:true})],De.prototype,"variant",2),St([Ft({type:Number})],De.prototype,"duration",2),St([Ft({type:String,reflect:true})],De.prototype,"countdown",2),St([Bt()],De.prototype,"remainingTime",2),St([Ot("open",{waitUntilFirstUpdate:true})],De.prototype,"handleOpenChange",1),St([Ot("duration")],De.prototype,"handleDurationChange",1),he("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),he("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),De.define("sl-alert");var Pe=r`
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
`,Fe=class extends Mt{constructor(){super(...arguments),this.variant="primary",this.pill=false,this.pulse=false;}render(){return U`
      <span
        part="base"
        class=${te({badge:true,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Fe.styles=[Lt,Pe],St([Ft({reflect:true})],Fe.prototype,"variant",2),St([Ft({type:Boolean,reflect:true})],Fe.prototype,"pill",2),St([Ft({type:Boolean,reflect:true})],Fe.prototype,"pulse",2),Fe.define("sl-badge");var Be=r`
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
`,Ie=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this);}render(){return U`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ie.styles=[Lt,Be];var Ve=new WeakMap,Re=new WeakMap,Me=new WeakMap,Ue=new WeakSet,He=new WeakMap,Ne=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),s="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!s&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach((e=>{t.formData.append(o,e.toString());})):t.formData.append(o,i.toString()));},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=Ve.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,true);}))),!this.form||this.form.noValidate||o||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation());},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,false),He.set(this.host,[]);},this.handleInteraction=t=>{const e=He.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,true);},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return  false}return  true},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return  false}return  true},(this.host=t).addController(this),this.options=$t({form:t=>{const e=t.form;if(e){const o=t.getRootNode().querySelector(`#${e}`);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e);}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),He.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction);}));}hostDisconnected(){this.detachForm(),He.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction);}));}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid);}attachForm(t){t?(this.form=t,Ve.has(this.form)?Ve.get(this.form).add(this.host):Ve.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Re.has(this.form)||(Re.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Me.has(this.form)||(Me.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0;}detachForm(){if(!this.form)return;const t=Ve.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Re.has(this.form)&&(this.form.reportValidity=Re.get(this.form),Re.delete(this.form)),Me.has(this.form)&&(this.form.checkValidity=Me.get(this.form),Me.delete(this.form)),this.form=void 0));}setUserInteracted(t,e){e?Ue.add(t):Ue.delete(t),t.requestUpdate();}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t));}))),this.form.append(o),o.click(),o.remove();}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t);}submit(t){this.doAction("submit",t);}setValidity(t){const e=this.host,o=Boolean(Ue.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o);}updateValidity(){const t=this.host;this.setValidity(t.validity.valid);}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:false,composed:false,cancelable:true,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault();}},We=Object.freeze({badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valid:true,valueMissing:false});Object.freeze(zt($t({},We),{valid:false,valueMissing:true})),Object.freeze(zt($t({},We),{valid:false,customError:true}));var qe=r`
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
`,je=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ve(this,"[default]","prefix","suffix"),this.localize=new Te(this),this.hasFocus=false,this.invalid=false,this.title="",this.variant="default",this.size="medium",this.caret=false,this.disabled=false,this.loading=false,this.outline=false,this.pill=false,this.circle=false,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener";}get validity(){return this.isButton()?this.button.validity:We}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity();}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this);}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}isButton(){return !this.href}isLink(){return !!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled);}click(){this.button.click();}focus(t){this.button.focus(t);}blur(){this.button.blur();}checkValidity(){return !this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return !this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity());}render(){const t=this.isLink(),e=t?ie`a`:ie`button`;return re`
      <${e}
        part="base"
        class=${te({button:true,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${ae(t?void 0:this.disabled)}
        type=${ae(t?void 0:this.type)}
        title=${this.title}
        name=${ae(t?void 0:this.name)}
        value=${ae(t?void 0:this.value)}
        href=${ae(t&&!this.disabled?this.href:void 0)}
        target=${ae(t?this.target:void 0)}
        download=${ae(t?this.download:void 0)}
        rel=${ae(t?this.rel:void 0)}
        role=${ae(t?void 0:"button")}
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
        ${this.caret?re` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?re`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};je.styles=[Lt,qe],je.dependencies={"sl-icon":Kt,"sl-spinner":Ie},St([Vt(".button")],je.prototype,"button",2),St([Bt()],je.prototype,"hasFocus",2),St([Bt()],je.prototype,"invalid",2),St([Ft()],je.prototype,"title",2),St([Ft({reflect:true})],je.prototype,"variant",2),St([Ft({reflect:true})],je.prototype,"size",2),St([Ft({type:Boolean,reflect:true})],je.prototype,"caret",2),St([Ft({type:Boolean,reflect:true})],je.prototype,"disabled",2),St([Ft({type:Boolean,reflect:true})],je.prototype,"loading",2),St([Ft({type:Boolean,reflect:true})],je.prototype,"outline",2),St([Ft({type:Boolean,reflect:true})],je.prototype,"pill",2),St([Ft({type:Boolean,reflect:true})],je.prototype,"circle",2),St([Ft()],je.prototype,"type",2),St([Ft()],je.prototype,"name",2),St([Ft()],je.prototype,"value",2),St([Ft()],je.prototype,"href",2),St([Ft()],je.prototype,"target",2),St([Ft()],je.prototype,"rel",2),St([Ft()],je.prototype,"download",2),St([Ft()],je.prototype,"form",2),St([Ft({attribute:"formaction"})],je.prototype,"formAction",2),St([Ft({attribute:"formenctype"})],je.prototype,"formEnctype",2),St([Ft({attribute:"formmethod"})],je.prototype,"formMethod",2),St([Ft({attribute:"formnovalidate",type:Boolean})],je.prototype,"formNoValidate",2),St([Ft({attribute:"formtarget"})],je.prototype,"formTarget",2),St([Ot("disabled",{waitUntilFirstUpdate:true})],je.prototype,"handleDisabledChange",1),je.define("sl-button");var Ke=r`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ye=class extends Mt{constructor(){super(...arguments),this.disableRole=false,this.label="";}handleFocus(t){const e=Xe(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",true);}handleBlur(t){const e=Xe(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",false);}handleMouseOver(t){const e=Xe(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",true);}handleMouseOut(t){const e=Xe(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",false);}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:true})];t.forEach((e=>{const o=t.indexOf(e),i=Xe(e);i&&(i.toggleAttribute("data-sl-button-group__button",true),i.toggleAttribute("data-sl-button-group__button--first",0===o),i.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),i.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),i.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===i.tagName.toLowerCase()));}));}render(){return U`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function Xe(t){var e;const o="sl-button, sl-radio-button";return null!=(e=t.closest(o))?e:t.querySelector(o)}Ye.styles=[Lt,Ke],St([Vt("slot")],Ye.prototype,"defaultSlot",2),St([Bt()],Ye.prototype,"disableRole",2),St([Ft()],Ye.prototype,"label",2),Ye.define("sl-button-group");var Ze=r`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ge=(t="value")=>(e,o)=>{const i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(e,r,a){var n;const l=i.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||v,i=("function"==typeof e?e:null!=(n=null==e?void 0:e.fromAttribute)?n:v.fromAttribute)(a,l.type);this[t]!==i&&(this[o]=i);}s.call(this,e,r,a);};},Je=r`
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
 */;const Qe=Jt(class extends Qt{constructor(t){if(super(t),t.type!==Zt&&t.type!==Yt&&t.type!==Gt)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ut(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===H||e===N)return e;const o=t.element,i=t.name;if(t.type===Zt){if(e===o[i])return H}else if(t.type===Gt){if(!!e===o.hasAttribute(i))return H}else if(t.type===Yt&&o.getAttribute(i)===e+"")return H;return ((t,e=Ht)=>{t._$AH=e;})(t),e}});var to=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new ve(this,"help-text"),this.hasFocus=false,this.title="",this.name="",this.size="medium",this.disabled=false,this.checked=false,this.indeterminate=false,this.defaultChecked=false,this.form="",this.required=false,this.helpText="";}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleClick(){this.checked=!this.checked,this.indeterminate=false,this.emit("sl-change");}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleInput(){this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleDisabledChange(){this.formControlController.setValidity(this.disabled);}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity();}click(){this.input.click();}focus(t){this.input.focus(t);}blur(){this.input.blur();}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return U`
      <div
        class=${te({"form-control":true,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${te({checkbox:true,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ae(this.value)}
            .indeterminate=${Qe(this.indeterminate)}
            .checked=${Qe(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?U`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?U`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
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
    `}};to.styles=[Lt,Je,Ze],to.dependencies={"sl-icon":Kt},St([Vt('input[type="checkbox"]')],to.prototype,"input",2),St([Bt()],to.prototype,"hasFocus",2),St([Ft()],to.prototype,"title",2),St([Ft()],to.prototype,"name",2),St([Ft()],to.prototype,"value",2),St([Ft({reflect:true})],to.prototype,"size",2),St([Ft({type:Boolean,reflect:true})],to.prototype,"disabled",2),St([Ft({type:Boolean,reflect:true})],to.prototype,"checked",2),St([Ft({type:Boolean,reflect:true})],to.prototype,"indeterminate",2),St([Ge("checked")],to.prototype,"defaultChecked",2),St([Ft({reflect:true})],to.prototype,"form",2),St([Ft({type:Boolean,reflect:true})],to.prototype,"required",2),St([Ft({attribute:"help-text"})],to.prototype,"helpText",2),St([Ot("disabled",{waitUntilFirstUpdate:true})],to.prototype,"handleDisabledChange",1),St([Ot(["checked","indeterminate"],{waitUntilFirstUpdate:true})],to.prototype,"handleStateChange",1),to.define("sl-checkbox");var eo=new WeakMap;function oo(t){let e=eo.get(t);return e||(e=window.getComputedStyle(t,null),eo.set(t,e)),e}function io(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1))return  false;if(t.hasAttribute("disabled"))return  false;if(t.closest("[inert]"))return  false;if("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))return  false;if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:false,checkVisibilityCSS:true});const e=oo(t);return "hidden"!==e.visibility&&"none"!==e.display}(t))return  false;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return  true;if(t.hasAttribute("tabindex"))return  true;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return  true;return !!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=oo(t),{overflowY:o,overflowX:i}=e;return "scroll"===o||"scroll"===i||"auto"===o&&"auto"===i&&(t.scrollHeight>t.clientHeight&&"auto"===o||!(!(t.scrollWidth>t.clientWidth)||"auto"!==i))}(t)}function so(t){const e=new WeakMap,o=[];return function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]"))return;if(e.has(s))return;e.set(s,true),!o.includes(s)&&io(s)&&o.push(s),s instanceof HTMLSlotElement&&function(t,e){var o;return (null==(o=t.getRootNode({composed:true}))?void 0:o.host)!==e}(s,t)&&s.assignedElements({flatten:true}).forEach((t=>{i(t);})),null!==s.shadowRoot&&"open"===s.shadowRoot.mode&&i(s.shadowRoot);}for(const t of s.children)i(t);}(t),o.sort(((t,e)=>{const o=Number(t.getAttribute("tabindex"))||0;return (Number(e.getAttribute("tabindex"))||0)-o}))}function*ro(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*Tt(ro(t.shadowRoot.activeElement))));}var ao=[],no=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus();},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const o=[...ro()].pop();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=so(this.element);let s=i.findIndex((t=>t===o));this.previousFocus=this.currentFocus;const r="forward"===this.tabDirection?1:-1;for(;;){s+r>=i.length?s=0:s+r<0?s=i.length-1:s+=r,this.previousFocus=this.currentFocus;const o=i[s];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(o&&this.possiblyHasTabbableChildren(o))return;t.preventDefault(),this.currentFocus=o,null==(e=this.currentFocus)||e.focus({preventScroll:false});const a=[...ro()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout((()=>this.checkFocus()));},this.handleKeyUp=()=>{this.tabDirection="forward";},this.element=t,this.elementsWithTabbableControls=["iframe"];}activate(){ao.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp);}deactivate(){ao=ao.filter((t=>t!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp);}isActive(){return ao[ao.length-1]===this.element}activateExternal(){this.isExternalActivated=true;}deactivateExternal(){this.isExternalActivated=false;}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=so(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i="forward"===this.tabDirection?e:o;"function"==typeof(null==i?void 0:i.focus)&&(this.currentFocus=i,i.focus({preventScroll:false}));}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};var lo=new Set;function co(t){if(lo.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`);}}function ho(t){lo.delete(t),0===lo.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"));}function uo(t,e,o="vertical",i="smooth"){const s=function(t,e){return {top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),r=s.top+e.scrollTop,a=s.left+e.scrollLeft,n=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(a<n?e.scrollTo({left:a,behavior:i}):a+t.clientWidth>l&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:i})),"vertical"!==o&&"both"!==o||(r<c?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>d&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}));}var po=r`
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
`,bo=class extends Mt{constructor(){super(...arguments),this.hasSlotController=new ve(this,"footer"),this.localize=new Te(this),this.modal=new no(this),this.open=false,this.label="",this.noHeader=false,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"));};}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),co(this));}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ho(this),this.removeOpenListeners();}requestClose(t){if(this.emit("sl-request-close",{cancelable:true,detail:{source:t}}).defaultPrevented){const t=ue(this,"dialog.denyClose",{dir:this.localize.dir()});be(this.panel,t.keyframes,t.options);}else this.hide();}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown);}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown);}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),co(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([fe(this.dialog),fe(this.overlay)]),this.dialog.hidden=false,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:true}).defaultPrevented||(t?t.focus({preventScroll:true}):this.panel.focus({preventScroll:true})),t&&t.setAttribute("autofocus","");}));const e=ue(this,"dialog.show",{dir:this.localize.dir()}),o=ue(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,e.keyframes,e.options),be(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([fe(this.dialog),fe(this.overlay)]);const t=ue(this,"dialog.hide",{dir:this.localize.dir()}),e=ue(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=true;})),be(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=true;}))]),this.dialog.hidden=true,this.overlay.hidden=false,this.panel.hidden=false,ho(this);const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide");}}async show(){if(!this.open)return this.open=true,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=false,pe(this,"sl-after-hide")}render(){return U`
      <div
        part="base"
        class=${te({dialog:true,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ae(this.noHeader?this.label:void 0)}
          aria-labelledby=${ae(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":U`
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
    `}};bo.styles=[Lt,po],bo.dependencies={"sl-icon-button":ne},St([Vt(".dialog")],bo.prototype,"dialog",2),St([Vt(".dialog__panel")],bo.prototype,"panel",2),St([Vt(".dialog__overlay")],bo.prototype,"overlay",2),St([Ft({type:Boolean,reflect:true})],bo.prototype,"open",2),St([Ft({reflect:true})],bo.prototype,"label",2),St([Ft({attribute:"no-header",type:Boolean,reflect:true})],bo.prototype,"noHeader",2),St([Ot("open",{waitUntilFirstUpdate:true})],bo.prototype,"handleOpenChange",1),he("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),he("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),he("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),he("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),he("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),bo.define("sl-dialog");var mo=r`
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
`;function go(t){return t.charAt(0).toUpperCase()+t.slice(1)}var fo=class extends Mt{constructor(){super(...arguments),this.hasSlotController=new ve(this,"footer"),this.localize=new Te(this),this.modal=new no(this),this.open=false,this.label="",this.placement="end",this.contained=false,this.noHeader=false,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"));};}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),co(this)));}disconnectedCallback(){super.disconnectedCallback(),ho(this),this.removeOpenListeners();}requestClose(t){if(this.emit("sl-request-close",{cancelable:true,detail:{source:t}}).defaultPrevented){const t=ue(this,"drawer.denyClose",{dir:this.localize.dir()});be(this.panel,t.keyframes,t.options);}else this.hide();}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown);}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy();}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),co(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([fe(this.drawer),fe(this.overlay)]),this.drawer.hidden=false,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:true}).defaultPrevented||(t?t.focus({preventScroll:true}):this.panel.focus({preventScroll:true})),t&&t.setAttribute("autofocus","");}));const e=ue(this,`drawer.show${go(this.placement)}`,{dir:this.localize.dir()}),o=ue(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,e.keyframes,e.options),be(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ho(this)),await Promise.all([fe(this.drawer),fe(this.overlay)]);const t=ue(this,`drawer.hide${go(this.placement)}`,{dir:this.localize.dir()}),e=ue(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=true;})),be(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=true;}))]),this.drawer.hidden=true,this.overlay.hidden=false,this.panel.hidden=false;const o=this.originalTrigger;"function"==typeof(null==o?void 0:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide");}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),co(this)),this.open&&this.contained&&(this.modal.deactivate(),ho(this));}async show(){if(!this.open)return this.open=true,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=false,pe(this,"sl-after-hide")}render(){return U`
      <div
        part="base"
        class=${te({drawer:true,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${ae(this.noHeader?this.label:void 0)}
          aria-labelledby=${ae(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":U`
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
    `}};fo.styles=[Lt,mo],fo.dependencies={"sl-icon-button":ne},St([Vt(".drawer")],fo.prototype,"drawer",2),St([Vt(".drawer__panel")],fo.prototype,"panel",2),St([Vt(".drawer__overlay")],fo.prototype,"overlay",2),St([Ft({type:Boolean,reflect:true})],fo.prototype,"open",2),St([Ft({reflect:true})],fo.prototype,"label",2),St([Ft({reflect:true})],fo.prototype,"placement",2),St([Ft({type:Boolean,reflect:true})],fo.prototype,"contained",2),St([Ft({attribute:"no-header",type:Boolean,reflect:true})],fo.prototype,"noHeader",2),St([Ot("open",{waitUntilFirstUpdate:true})],fo.prototype,"handleOpenChange",1),St([Ot("contained",{waitUntilFirstUpdate:true})],fo.prototype,"handleNoModalChange",1),he("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),he("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),he("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),he("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),he("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),he("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),he("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),he("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),he("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),he("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),he("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),fo.define("sl-drawer");var vo=r`
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
`,yo=r`
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
`;const wo=Math.min,_o=Math.max,xo=Math.round,ko=Math.floor,Co=t=>({x:t,y:t}),$o={left:"right",right:"left",bottom:"top",top:"bottom"},zo={start:"end",end:"start"};function So(t,e,o){return _o(t,wo(e,o))}function Ao(t,e){return "function"==typeof t?t(e):t}function Eo(t){return t.split("-")[0]}function To(t){return t.split("-")[1]}function Oo(t){return "x"===t?"y":"x"}function Lo(t){return "y"===t?"height":"width"}function Do(t){return ["top","bottom"].includes(Eo(t))?"y":"x"}function Po(t){return Oo(Do(t))}function Fo(t){return t.replace(/start|end/g,(t=>zo[t]))}function Bo(t){return t.replace(/left|right|bottom|top/g,(t=>$o[t]))}function Io(t){return "number"!=typeof t?function(t){return {top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Vo(t){const{x:e,y:o,width:i,height:s}=t;return {width:i,height:s,top:o,left:e,right:e+i,bottom:o+s,x:e,y:o}}function Ro(t,e,o){let{reference:i,floating:s}=t;const r=Do(e),a=Po(e),n=Lo(a),l=Eo(e),c="y"===r,d=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,u=i[n]/2-s[n]/2;let p;switch(l){case "top":p={x:d,y:i.y-s.height};break;case "bottom":p={x:d,y:i.y+i.height};break;case "right":p={x:i.x+i.width,y:h};break;case "left":p={x:i.x-s.width,y:h};break;default:p={x:i.x,y:i.y};}switch(To(e)){case "start":p[a]-=u*(o&&c?-1:1);break;case "end":p[a]+=u*(o&&c?-1:1);}return p}async function Mo(t,e){var o;void 0===e&&(e={});const{x:i,y:s,platform:r,rects:a,elements:n,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=false,padding:p=0}=Ao(e,t),b=Io(p),m=n[u?"floating"===h?"reference":"floating":h],g=Vo(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(m)))||o?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(n.floating)),boundary:c,rootBoundary:d,strategy:l})),f="floating"===h?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(n.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=Vo(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:f,offsetParent:v,strategy:l}):f);return {top:(g.top-w.top+b.top)/y.y,bottom:(w.bottom-g.bottom+b.bottom)/y.y,left:(g.left-w.left+b.left)/y.x,right:(w.right-g.right+b.right)/y.x}}function Uo(){return "undefined"!=typeof window}function Ho(t){return qo(t)?(t.nodeName||"").toLowerCase():"#document"}function No(t){var e;return (null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Wo(t){var e;return null==(e=(qo(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function qo(t){return !!Uo()&&(t instanceof Node||t instanceof No(t).Node)}function jo(t){return !!Uo()&&(t instanceof Element||t instanceof No(t).Element)}function Ko(t){return !!Uo()&&(t instanceof HTMLElement||t instanceof No(t).HTMLElement)}function Yo(t){return !(!Uo()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof No(t).ShadowRoot)}function Xo(t){const{overflow:e,overflowX:o,overflowY:i,display:s}=ei(t);return /auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(s)}function Zo(t){return ["table","td","th"].includes(Ho(t))}function Go(t){return [":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return  false}}))}function Jo(t){const e=Qo(),o=jo(t)?ei(t):t;return ["transform","translate","scale","rotate","perspective"].some((t=>!!o[t]&&"none"!==o[t]))||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some((t=>(o.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(o.contain||"").includes(t)))}function Qo(){return !("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ti(t){return ["html","body","#document"].includes(Ho(t))}function ei(t){return No(t).getComputedStyle(t)}function oi(t){return jo(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ii(t){if("html"===Ho(t))return t;const e=t.assignedSlot||t.parentNode||Yo(t)&&t.host||Wo(t);return Yo(e)?e.host:e}function si(t){const e=ii(t);return ti(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ko(e)&&Xo(e)?e:si(e)}function ri(t,e,o){var i;void 0===e&&(e=[]),void 0===o&&(o=true);const s=si(t),r=s===(null==(i=t.ownerDocument)?void 0:i.body),a=No(s);if(r){const t=ai(a);return e.concat(a,a.visualViewport||[],Xo(s)?s:[],t&&o?ri(t):[])}return e.concat(s,ri(s,[],o))}function ai(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ni(t){const e=ei(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Ko(t),r=s?t.offsetWidth:o,a=s?t.offsetHeight:i,n=xo(o)!==r||xo(i)!==a;return n&&(o=r,i=a),{width:o,height:i,$:n}}function li(t){return jo(t)?t:t.contextElement}function ci(t){const e=li(t);if(!Ko(e))return Co(1);const o=e.getBoundingClientRect(),{width:i,height:s,$:r}=ni(e);let a=(r?xo(o.width):o.width)/i,n=(r?xo(o.height):o.height)/s;return a&&Number.isFinite(a)||(a=1),n&&Number.isFinite(n)||(n=1),{x:a,y:n}}const di=Co(0);function hi(t){const e=No(t);return Qo()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:di}function ui(t,e,o,i){ void 0===e&&(e=false),void 0===o&&(o=false);const s=t.getBoundingClientRect(),r=li(t);let a=Co(1);e&&(i?jo(i)&&(a=ci(i)):a=ci(t));const n=function(t,e,o){return void 0===e&&(e=false),!(!o||e&&o!==No(t))&&e}(r,o,i)?hi(r):Co(0);let l=(s.left+n.x)/a.x,c=(s.top+n.y)/a.y,d=s.width/a.x,h=s.height/a.y;if(r){const t=No(r),e=i&&jo(i)?No(i):i;let o=t,s=ai(o);for(;s&&i&&e!==o;){const t=ci(s),e=s.getBoundingClientRect(),i=ei(s),r=e.left+(s.clientLeft+parseFloat(i.paddingLeft))*t.x,a=e.top+(s.clientTop+parseFloat(i.paddingTop))*t.y;l*=t.x,c*=t.y,d*=t.x,h*=t.y,l+=r,c+=a,o=No(s),s=ai(o);}}return Vo({width:d,height:h,x:l,y:c})}function pi(t,e){const o=oi(t).scrollLeft;return e?e.left+o:ui(Wo(t)).left+o}function bi(t,e,o){ void 0===o&&(o=false);const i=t.getBoundingClientRect();return {x:i.left+e.scrollLeft-(o?0:pi(t,i)),y:i.top+e.scrollTop}}function mi(t,e,o){let i;if("viewport"===e)i=function(t,e){const o=No(t),i=Wo(t),s=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,n=0,l=0;if(s){r=s.width,a=s.height;const t=Qo();(!t||t&&"fixed"===e)&&(n=s.offsetLeft,l=s.offsetTop);}return {width:r,height:a,x:n,y:l}}(t,o);else if("document"===e)i=function(t){const e=Wo(t),o=oi(t),i=t.ownerDocument.body,s=_o(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=_o(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+pi(t);const n=-o.scrollTop;return "rtl"===ei(i).direction&&(a+=_o(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:a,y:n}}(Wo(t));else if(jo(e))i=function(t,e){const o=ui(t,true,"fixed"===e),i=o.top+t.clientTop,s=o.left+t.clientLeft,r=Ko(t)?ci(t):Co(1);return {width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:s*r.x,y:i*r.y}}(e,o);else {const o=hi(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height};}return Vo(i)}function gi(t,e){const o=ii(t);return !(o===e||!jo(o)||ti(o))&&("fixed"===ei(o).position||gi(o,e))}function fi(t,e,o){const i=Ko(e),s=Wo(e),r="fixed"===o,a=ui(t,true,r,e);let n={scrollLeft:0,scrollTop:0};const l=Co(0);if(i||!i&&!r)if(("body"!==Ho(e)||Xo(s))&&(n=oi(e)),i){const t=ui(e,true,r,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop;}else s&&(l.x=pi(s));const c=!s||i||r?Co(0):bi(s,n);return {x:a.left+n.scrollLeft-l.x-c.x,y:a.top+n.scrollTop-l.y-c.y,width:a.width,height:a.height}}function vi(t){return "static"===ei(t).position}function yi(t,e){if(!Ko(t)||"fixed"===ei(t).position)return null;if(e)return e(t);let o=t.offsetParent;return Wo(t)===o&&(o=o.ownerDocument.body),o}function wi(t,e){const o=No(t);if(Go(t))return o;if(!Ko(t)){let e=ii(t);for(;e&&!ti(e);){if(jo(e)&&!vi(e))return e;e=ii(e);}return o}let i=yi(t,e);for(;i&&Zo(i)&&vi(i);)i=yi(i,e);return i&&ti(i)&&vi(i)&&!Jo(i)?o:i||function(t){let e=ii(t);for(;Ko(e)&&!ti(e);){if(Jo(e))return e;if(Go(e))return null;e=ii(e);}return null}(t)||o}const _i={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:i,strategy:s}=t;const r="fixed"===s,a=Wo(i),n=!!e&&Go(e.floating);if(i===a||n&&r)return o;let l={scrollLeft:0,scrollTop:0},c=Co(1);const d=Co(0),h=Ko(i);if((h||!h&&!r)&&(("body"!==Ho(i)||Xo(a))&&(l=oi(i)),Ko(i))){const t=ui(i);c=ci(i),d.x=t.x+i.clientLeft,d.y=t.y+i.clientTop;}const u=!a||h||r?Co(0):bi(a,l,true);return {width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x+u.x,y:o.y*c.y-l.scrollTop*c.y+d.y+u.y}},getDocumentElement:Wo,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t;const r=[..."clippingAncestors"===o?Go(e)?[]:function(t,e){const o=e.get(t);if(o)return o;let i=ri(t,[],false).filter((t=>jo(t)&&"body"!==Ho(t))),s=null;const r="fixed"===ei(t).position;let a=r?ii(t):t;for(;jo(a)&&!ti(a);){const e=ei(a),o=Jo(a);o||"fixed"!==e.position||(s=null),(r?!o&&!s:!o&&"static"===e.position&&s&&["absolute","fixed"].includes(s.position)||Xo(a)&&!o&&gi(t,a))?i=i.filter((t=>t!==a)):s=e,a=ii(a);}return e.set(t,i),i}(e,this._c):[].concat(o),i],a=r[0],n=r.reduce(((t,o)=>{const i=mi(e,o,s);return t.top=_o(i.top,t.top),t.right=wo(i.right,t.right),t.bottom=wo(i.bottom,t.bottom),t.left=_o(i.left,t.left),t}),mi(e,a,s));return {width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},getOffsetParent:wi,getElementRects:async function(t){const e=this.getOffsetParent||wi,o=this.getDimensions,i=await o(t.floating);return {reference:fi(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:o}=ni(t);return {width:e,height:o}},getScale:ci,isElement:jo,isRTL:function(t){return "rtl"===ei(t).direction}};function xi(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ki(t,e,o,i){ void 0===i&&(i={});const{ancestorScroll:s=true,ancestorResize:r=true,elementResize:a="function"==typeof ResizeObserver,layoutShift:n="function"==typeof IntersectionObserver,animationFrame:l=false}=i,c=li(t),d=s||r?[...c?ri(c):[],...ri(e)]:[];d.forEach((t=>{s&&t.addEventListener("scroll",o,{passive:true}),r&&t.addEventListener("resize",o);}));const h=c&&n?function(t,e){let o,i=null;const s=Wo(t);function r(){var t;clearTimeout(o),null==(t=i)||t.disconnect(),i=null;}return function a(n,l){ void 0===n&&(n=false),void 0===l&&(l=1),r();const c=t.getBoundingClientRect(),{left:d,top:h,width:u,height:p}=c;if(n||e(),!u||!p)return;const b={rootMargin:-ko(h)+"px "+-ko(s.clientWidth-(d+u))+"px "+-ko(s.clientHeight-(h+p))+"px "+-ko(d)+"px",threshold:_o(0,wo(1,l))||1};let m=true;function g(e){const i=e[0].intersectionRatio;if(i!==l){if(!m)return a();i?a(false,i):o=setTimeout((()=>{a(false,1e-7);}),1e3);}1!==i||xi(c,t.getBoundingClientRect())||a(),m=false;}try{i=new IntersectionObserver(g,{...b,root:s.ownerDocument});}catch(t){i=new IntersectionObserver(g,b);}i.observe(t);}(true),r}(c,o):null;let u,p=-1,b=null;a&&(b=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&b&&(b.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=b)||t.observe(e);}))),o();})),c&&!l&&b.observe(c),b.observe(e));let m=l?ui(t):null;return l&&function e(){const i=ui(t);m&&!xi(m,i)&&o();m=i,u=requestAnimationFrame(e);}(),o(),()=>{var t;d.forEach((t=>{s&&t.removeEventListener("scroll",o),r&&t.removeEventListener("resize",o);})),null==h||h(),null==(t=b)||t.disconnect(),b=null,l&&cancelAnimationFrame(u);}}const Ci=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:s,y:r,placement:a,middlewareData:n}=e,l=await async function(t,e){const{placement:o,platform:i,elements:s}=t,r=await(null==i.isRTL?void 0:i.isRTL(s.floating)),a=Eo(o),n=To(o),l="y"===Do(o),c=["left","top"].includes(a)?-1:1,d=r&&l?-1:1,h=Ao(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:b}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return n&&"number"==typeof b&&(p="end"===n?-1*b:b),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}(e,t);return a===(null==(o=n.offset)?void 0:o.placement)&&null!=(i=n.arrow)&&i.alignmentOffset?{}:{x:s+l.x,y:r+l.y,data:{...l,placement:a}}}}},$i=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:s}=e,{mainAxis:r=true,crossAxis:a=false,limiter:n={fn:t=>{let{x:e,y:o}=t;return {x:e,y:o}}},...l}=Ao(t,e),c={x:o,y:i},d=await Mo(e,l),h=Do(Eo(s)),u=Oo(h);let p=c[u],b=c[h];if(r){const t="y"===u?"bottom":"right";p=So(p+d["y"===u?"top":"left"],p,p-d[t]);}if(a){const t="y"===h?"bottom":"right";b=So(b+d["y"===h?"top":"left"],b,b-d[t]);}const m=n.fn({...e,[u]:p,[h]:b});return {...m,data:{x:m.x-o,y:m.y-i,enabled:{[u]:r,[h]:a}}}}}},zi=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:r,rects:a,initialPlacement:n,platform:l,elements:c}=e,{mainAxis:d=true,crossAxis:h=true,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:m=true,...g}=Ao(t,e);if(null!=(o=r.arrow)&&o.alignmentOffset)return {};const f=Eo(s),v=Do(n),y=Eo(n)===n,w=await(null==l.isRTL?void 0:l.isRTL(c.floating)),_=u||(y||!m?[Bo(n)]:function(t){const e=Bo(t);return [Fo(t),e,Fo(e)]}(n)),x="none"!==b;!u&&x&&_.push(...function(t,e,o,i){const s=To(t);let r=function(t,e,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case "top":case "bottom":return o?e?s:i:e?i:s;case "left":case "right":return e?r:a;default:return []}}(Eo(t),"start"===o,i);return s&&(r=r.map((t=>t+"-"+s)),e&&(r=r.concat(r.map(Fo)))),r}(n,m,b,w));const k=[n,..._],C=await Mo(e,g),$=[];let z=(null==(i=r.flip)?void 0:i.overflows)||[];if(d&&$.push(C[f]),h){const t=function(t,e,o){ void 0===o&&(o=false);const i=To(t),s=Po(t),r=Lo(s);let a="x"===s?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Bo(a)),[a,Bo(a)]}(s,a,w);$.push(C[t[0]],C[t[1]]);}if(z=[...z,{placement:s,overflows:$}],!$.every((t=>t<=0))){var S,A;const t=((null==(S=r.flip)?void 0:S.index)||0)+1,e=k[t];if(e)return {data:{index:t,overflows:z},reset:{placement:e}};let o=null==(A=z.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:A.placement;if(!o)switch(p){case "bestFit":{var E;const t=null==(E=z.filter((t=>{if(x){const e=Do(t.placement);return e===v||"y"===e}return  true})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:E[0];t&&(o=t);break}case "initialPlacement":o=n;}if(s!==o)return {reset:{placement:o}}}return {}}}},Si=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:s,rects:r,platform:a,elements:n}=e,{apply:l=()=>{},...c}=Ao(t,e),d=await Mo(e,c),h=Eo(s),u=To(s),p="y"===Do(s),{width:b,height:m}=r.floating;let g,f;"top"===h||"bottom"===h?(g=h,f=u===(await(null==a.isRTL?void 0:a.isRTL(n.floating))?"start":"end")?"left":"right"):(f=h,g="end"===u?"top":"bottom");const v=m-d.top-d.bottom,y=b-d.left-d.right,w=wo(m-d[g],v),_=wo(b-d[f],y),x=!e.middlewareData.shift;let k=w,C=_;if(null!=(o=e.middlewareData.shift)&&o.enabled.x&&(C=y),null!=(i=e.middlewareData.shift)&&i.enabled.y&&(k=v),x&&!u){const t=_o(d.left,0),e=_o(d.right,0),o=_o(d.top,0),i=_o(d.bottom,0);p?C=b-2*(0!==t||0!==e?t+e:_o(d.left,d.right)):k=m-2*(0!==o||0!==i?o+i:_o(d.top,d.bottom));}await l({...e,availableWidth:C,availableHeight:k});const $=await a.getDimensions(n.floating);return b!==$.width||m!==$.height?{reset:{rects:true}}:{}}}},Ai=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:s,rects:r,platform:a,elements:n,middlewareData:l}=e,{element:c,padding:d=0}=Ao(t,e)||{};if(null==c)return {};const h=Io(d),u={x:o,y:i},p=Po(s),b=Lo(p),m=await a.getDimensions(c),g="y"===p,f=g?"top":"left",v=g?"bottom":"right",y=g?"clientHeight":"clientWidth",w=r.reference[b]+r.reference[p]-u[p]-r.floating[b],_=u[p]-r.reference[p],x=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c));let k=x?x[y]:0;k&&await(null==a.isElement?void 0:a.isElement(x))||(k=n.floating[y]||r.floating[b]);const C=w/2-_/2,$=k/2-m[b]/2-1,z=wo(h[f],$),S=wo(h[v],$),A=z,E=k-m[b]-S,T=k/2-m[b]/2+C,O=So(A,T,E),L=!l.arrow&&null!=To(s)&&T!==O&&r.reference[b]/2-(T<A?z:S)-m[b]/2<0,D=L?T<A?T-A:T-E:0;return {[p]:u[p]+D,data:{[p]:O,centerOffset:T-O-D,...L&&{alignmentOffset:D}},reset:L}}}),Ei=(t,e,o)=>{const i=new Map,s={platform:_i,...o},r={...s.platform,_c:i};return (async(t,e,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=r.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:h}=Ro(c,i,l),u=i,p={},b=0;for(let o=0;o<n.length;o++){const{name:r,fn:m}=n[o],{x:g,y:f,data:v,reset:y}=await m({x:d,y:h,initialPlacement:i,placement:u,strategy:s,middlewareData:p,rects:c,platform:a,elements:{reference:t,floating:e}});d=null!=g?g:d,h=null!=f?f:h,p={...p,[r]:{...p[r],...v}},y&&b<=50&&(b++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=true===y.rects?await a.getElementRects({reference:t,floating:e,strategy:s}):y.rects),({x:d,y:h}=Ro(c,u,l))),o=-1);}return {x:d,y:h,placement:u,strategy:s,middlewareData:p}})(t,e,{...s,platform:r})};function Ti(t){return function(t){for(let e=t;e;e=Oi(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=Oi(t);e;e=Oi(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||Jo(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function Oi(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var Li=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this),this.active=false,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=false,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=false,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=false,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=false,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let o=0,i=0,s=0,r=0,a=0,n=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(o=t.left,i=t.bottom,s=t.right,r=t.bottom,a=e.left,n=e.top,l=e.right,c=e.top):(o=e.left,i=e.bottom,s=e.right,r=e.bottom,a=t.left,n=t.top,l=t.right,c=t.top):t.left<e.left?(o=t.right,i=t.top,s=e.left,r=e.top,a=t.right,n=t.bottom,l=e.left,c=e.bottom):(o=e.right,i=e.top,s=t.left,r=t.top,a=e.right,n=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`);}};}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start();}disconnectedCallback(){super.disconnectedCallback(),this.stop();}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition());}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor);}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:true})[0]),this.anchorEl&&this.active&&this.start();}start(){this.anchorEl&&this.active&&(this.cleanup=ki(this.anchorEl,this.popup,(()=>{this.reposition();})));}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t();}))}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ci({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Si({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:"";}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(zi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push($i({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Si({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width");}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ai({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>_i.getOffsetParent(t,Ti):_i.getOffsetParent;Ei(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:zt($t({},_i),{getOffsetParent:e})}).then((({x:t,y:e,middlewareData:o,placement:i})=>{const s="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let i="",a="",n="",l="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?o:"",l=s?"":o;}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":o,l=s?o:"",n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";}else "center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",i="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:n,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"});}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition");}render(){return U`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${te({"popup-hover-bridge":true,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${te({popup:true,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?U`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Li.styles=[Lt,yo],St([Vt(".popup")],Li.prototype,"popup",2),St([Vt(".popup__arrow")],Li.prototype,"arrowEl",2),St([Ft()],Li.prototype,"anchor",2),St([Ft({type:Boolean,reflect:true})],Li.prototype,"active",2),St([Ft({reflect:true})],Li.prototype,"placement",2),St([Ft({reflect:true})],Li.prototype,"strategy",2),St([Ft({type:Number})],Li.prototype,"distance",2),St([Ft({type:Number})],Li.prototype,"skidding",2),St([Ft({type:Boolean})],Li.prototype,"arrow",2),St([Ft({attribute:"arrow-placement"})],Li.prototype,"arrowPlacement",2),St([Ft({attribute:"arrow-padding",type:Number})],Li.prototype,"arrowPadding",2),St([Ft({type:Boolean})],Li.prototype,"flip",2),St([Ft({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],Li.prototype,"flipFallbackPlacements",2),St([Ft({attribute:"flip-fallback-strategy"})],Li.prototype,"flipFallbackStrategy",2),St([Ft({type:Object})],Li.prototype,"flipBoundary",2),St([Ft({attribute:"flip-padding",type:Number})],Li.prototype,"flipPadding",2),St([Ft({type:Boolean})],Li.prototype,"shift",2),St([Ft({type:Object})],Li.prototype,"shiftBoundary",2),St([Ft({attribute:"shift-padding",type:Number})],Li.prototype,"shiftPadding",2),St([Ft({attribute:"auto-size"})],Li.prototype,"autoSize",2),St([Ft()],Li.prototype,"sync",2),St([Ft({type:Object})],Li.prototype,"autoSizeBoundary",2),St([Ft({attribute:"auto-size-padding",type:Number})],Li.prototype,"autoSizePadding",2),St([Ft({attribute:"hover-bridge",type:Boolean})],Li.prototype,"hoverBridge",2);var Di=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this),this.open=false,this.placement="bottom-start",this.disabled=false,this.stayOpenOnSelect=false,this.distance=0,this.skidding=0,this.hoist=false,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger());},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e,o;const i=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?null==(o=null==(e=document.activeElement)?void 0:e.shadowRoot)?void 0:o.activeElement:document.activeElement;this.containingElement&&(null==i?void 0:i.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide();}));}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide();},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger());};}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this);}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=true);}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide();}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:true})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus();}getMenu(){return this.panel.assignedElements({flatten:true}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger());}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(i),i.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(s),s.focus());})));}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault();}handleTriggerSlotChange(){this.updateAccessibleTrigger();}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:true}).find((t=>function(t){var e,o;const i=so(t);return {start:null!=(e=i[0])?e:null,end:null!=(o=i[i.length-1])?o:null}}(t).start));let e;if(t){switch(t.tagName.toLowerCase()){case "sl-button":case "sl-icon-button":e=t.button;break;default:e=t;}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false");}}async show(){if(!this.open)return this.open=true,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=false,pe(this,"sl-after-hide")}reposition(){this.popup.reposition();}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger();}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown);}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy();}async handleOpenChange(){if(this.disabled)this.open=false;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await fe(this),this.panel.hidden=false,this.popup.active=true;const{keyframes:t,options:e}=ue(this,"dropdown.show",{dir:this.localize.dir()});await be(this.popup.popup,t,e),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),await fe(this);const{keyframes:t,options:e}=ue(this,"dropdown.hide",{dir:this.localize.dir()});await be(this.popup.popup,t,e),this.panel.hidden=true,this.popup.active=false,this.emit("sl-after-hide");}}render(){return U`
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
        sync=${ae(this.sync?this.sync:void 0)}
        class=${te({dropdown:true,"dropdown--open":this.open})}
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
    `}};Di.styles=[Lt,vo],Di.dependencies={"sl-popup":Li},St([Vt(".dropdown")],Di.prototype,"popup",2),St([Vt(".dropdown__trigger")],Di.prototype,"trigger",2),St([Vt(".dropdown__panel")],Di.prototype,"panel",2),St([Ft({type:Boolean,reflect:true})],Di.prototype,"open",2),St([Ft({reflect:true})],Di.prototype,"placement",2),St([Ft({type:Boolean,reflect:true})],Di.prototype,"disabled",2),St([Ft({attribute:"stay-open-on-select",type:Boolean,reflect:true})],Di.prototype,"stayOpenOnSelect",2),St([Ft({attribute:false})],Di.prototype,"containingElement",2),St([Ft({type:Number})],Di.prototype,"distance",2),St([Ft({type:Number})],Di.prototype,"skidding",2),St([Ft({type:Boolean})],Di.prototype,"hoist",2),St([Ft({reflect:true})],Di.prototype,"sync",2),St([Ot("open",{waitUntilFirstUpdate:true})],Di.prototype,"handleOpenChange",1),he("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),he("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Di.define("sl-dropdown"),Kt.define("sl-icon"),ne.define("sl-icon-button");var Pi=r`
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
`,Fi=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ve(this,"help-text","label"),this.localize=new Te(this),this.hasFocus=false,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=false,this.pill=false,this.label="",this.helpText="",this.clearable=false,this.disabled=false,this.placeholder="",this.readonly=false,this.passwordToggle=false,this.passwordVisible=false,this.noSpinButtons=false,this.form="",this.required=false,this.spellcheck=true;}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value;}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value;}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleChange(){this.value=this.input.value,this.emit("sl-change");}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus();}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit();}));}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible;}handleDisabledChange(){this.formControlController.setValidity(this.disabled);}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity();}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity();}focus(t){this.input.focus(t);}blur(){this.input.blur();}select(){this.input.select();}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o);}setRangeText(t,e,o,i="preserve"){const s=null!=e?e:this.input.selectionStart,r=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value);}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker();}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value);}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value);}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return U`
      <div
        part="form-control"
        class=${te({"form-control":true,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${te({input:true,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${ae(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ae(this.placeholder)}
              minlength=${ae(this.minlength)}
              maxlength=${ae(this.maxlength)}
              min=${ae(this.min)}
              max=${ae(this.max)}
              step=${ae(this.step)}
              .value=${Qe(this.value)}
              autocapitalize=${ae(this.autocapitalize)}
              autocomplete=${ae(this.autocomplete)}
              autocorrect=${ae(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ae(this.pattern)}
              enterkeyhint=${ae(this.enterkeyhint)}
              inputmode=${ae(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?U`
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
            ${this.passwordToggle&&!this.disabled?U`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?U`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:U`
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
    `}};Fi.styles=[Lt,Je,Pi],Fi.dependencies={"sl-icon":Kt},St([Vt(".input__control")],Fi.prototype,"input",2),St([Bt()],Fi.prototype,"hasFocus",2),St([Ft()],Fi.prototype,"title",2),St([Ft({reflect:true})],Fi.prototype,"type",2),St([Ft()],Fi.prototype,"name",2),St([Ft()],Fi.prototype,"value",2),St([Ge()],Fi.prototype,"defaultValue",2),St([Ft({reflect:true})],Fi.prototype,"size",2),St([Ft({type:Boolean,reflect:true})],Fi.prototype,"filled",2),St([Ft({type:Boolean,reflect:true})],Fi.prototype,"pill",2),St([Ft()],Fi.prototype,"label",2),St([Ft({attribute:"help-text"})],Fi.prototype,"helpText",2),St([Ft({type:Boolean})],Fi.prototype,"clearable",2),St([Ft({type:Boolean,reflect:true})],Fi.prototype,"disabled",2),St([Ft()],Fi.prototype,"placeholder",2),St([Ft({type:Boolean,reflect:true})],Fi.prototype,"readonly",2),St([Ft({attribute:"password-toggle",type:Boolean})],Fi.prototype,"passwordToggle",2),St([Ft({attribute:"password-visible",type:Boolean})],Fi.prototype,"passwordVisible",2),St([Ft({attribute:"no-spin-buttons",type:Boolean})],Fi.prototype,"noSpinButtons",2),St([Ft({reflect:true})],Fi.prototype,"form",2),St([Ft({type:Boolean,reflect:true})],Fi.prototype,"required",2),St([Ft()],Fi.prototype,"pattern",2),St([Ft({type:Number})],Fi.prototype,"minlength",2),St([Ft({type:Number})],Fi.prototype,"maxlength",2),St([Ft()],Fi.prototype,"min",2),St([Ft()],Fi.prototype,"max",2),St([Ft()],Fi.prototype,"step",2),St([Ft()],Fi.prototype,"autocapitalize",2),St([Ft()],Fi.prototype,"autocorrect",2),St([Ft()],Fi.prototype,"autocomplete",2),St([Ft({type:Boolean})],Fi.prototype,"autofocus",2),St([Ft()],Fi.prototype,"enterkeyhint",2),St([Ft({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Fi.prototype,"spellcheck",2),St([Ft()],Fi.prototype,"inputmode",2),St([Ot("disabled",{waitUntilFirstUpdate:true})],Fi.prototype,"handleDisabledChange",1),St([Ot("step",{waitUntilFirstUpdate:true})],Fi.prototype,"handleStepChange",1),St([Ot("value",{waitUntilFirstUpdate:true})],Fi.prototype,"handleValueChange",1),Fi.define("sl-input");var Bi=r`
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
`,Ii=class extends Mt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu");}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath(),i=o.find((t=>{var o;return e.includes((null==(o=null==t?void 0:t.getAttribute)?void 0:o.call(t,"role"))||"")}));if(!i)return;if(o.find((t=>{var e;return "menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))}))!==this)return;const s=i;"checkbox"===s.type&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}});}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click();}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?i++:"ArrowUp"===t.key?i--:"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus());}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e);}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0]);}isMenuItem(t){var e;return "sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return [...this.defaultSlot.assignedElements({flatten:true})].filter((t=>!(t.inert||!this.isMenuItem(t))))}getCurrentItem(){return this.getAllItems().find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){this.getAllItems().forEach((e=>{e.setAttribute("tabindex",e===t?"0":"-1");}));}render(){return U`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Ii.styles=[Lt,Bi],St([Vt("slot")],Ii.prototype,"defaultSlot",2),Ii.define("sl-menu");var Vi=r`
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
 */;const Ri=(t,e)=>{const o=t._$AN;if(void 0===o)return  false;for(const t of o)t._$AO?.(e,false),Ri(t,e);return  true},Mi=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e;}while(0===o?.size)},Ui=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Wi(e);}};function Hi(t){ void 0!==this._$AN?(Mi(this),this._$AM=t,Ui(this)):this._$AM=t;}function Ni(t,e=false,o=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=o;t<i.length;t++)Ri(i[t],false),Mi(i[t]);else null!=i&&(Ri(i,false),Mi(i));else Ri(this,t);}const Wi=t=>{t.type==Xt&&(t._$AP??=Ni,t._$AQ??=Hi);};class qi extends Qt{constructor(){super(...arguments),this._$AN=void 0;}_$AT(t,e,o){super._$AT(t,e,o),Ui(this),this.isConnected=t._$AU;}_$AO(t,e=true){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Ri(this,t),Mi(this));}setValue(t){if(Ut(this._$Ct))this._$Ct._$AI(t,this);else {const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0);}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ji{}const Ki=new WeakMap,Yi=Jt(class extends qi{render(t){return N}update(t,[e]){const o=e!==this.Y;return o&&void 0!==this.Y&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),N}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let o=Ki.get(e);void 0===o&&(o=new WeakMap,Ki.set(e,o)),void 0!==o.get(this.Y)&&this.Y.call(this.ht,void 0),o.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t);}else this.Y.value=t;}get lt(){return "function"==typeof this.Y?Ki.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0);}reconnected(){this.rt(this.ct);}});var Xi=class{constructor(t,e){this.popupRef=new ji,this.enableSubmenuTimer=-1,this.isConnected=false,this.isPopupConnected=false,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`);},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu();},this.handleKeyDown=t=>{switch(t.key){case "Escape":case "Tab":this.disableSubmenu();break;case "ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case "ArrowRight":case "Enter":case " ":this.handleSubmenuEntry(t);}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu();},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu();},this.handlePopupMouseover=t=>{t.stopPropagation();},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:true}).filter((t=>"sl-menu"===t.localName))[0],o="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:i,top:s,width:r,height:a}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+a}px`);},(this.host=t).addController(this),this.hasSlotController=e;}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners();}hostDisconnected(){this.removeListeners();}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners();}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=true),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=true);}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=false),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=false);}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let o=null;for(const t of e.assignedElements())if(o=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==o.length)break;if(o&&0!==o.length){o[0].setAttribute("tabindex","0");for(let t=1;t!==o.length;++t)o[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(false),this.host.updateComplete.then((()=>{o[0]instanceof HTMLElement&&o[0].focus();})),this.host.requestUpdate()));}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate());}enableSubmenu(t=true){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(true);}),this.submenuOpenDelay)):this.setSubmenuState(true);}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(false);}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce(((t,o)=>{var i;const s=null!=(i=e.get(o))?i:new CSSUnitValue(0,"px");return t-(s instanceof CSSUnitValue?s:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=o;}isExpanded(){return !!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?U`
      <sl-popup
        ${Yi(this.popupRef)}
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
    `:U` <slot name="submenu" hidden></slot> `}},Zi=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this),this.type="normal",this.checked=false,this.value="",this.loading=false,this.disabled=false,this.hasSlotController=new ve(this,"submenu"),this.submenuController=new Xi(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation());},this.handleMouseOver=t=>{this.focus(),t.stopPropagation();};}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver);}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver);}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:true,composed:false,cancelable:false})):this.cachedTextLabel=t;}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=false,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked");}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false");}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"));}getTextLabel(){return function(t){if(!t)return "";const e=t.assignedNodes({flatten:true});let o="";return [...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent);})),o}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return U`
      <div
        id="anchor"
        part="base"
        class=${te({"menu-item":true,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?U` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Zi.styles=[Lt,Vi],Zi.dependencies={"sl-icon":Kt,"sl-popup":Li,"sl-spinner":Ie},St([Vt("slot:not([name])")],Zi.prototype,"defaultSlot",2),St([Vt(".menu-item")],Zi.prototype,"menuItem",2),St([Ft()],Zi.prototype,"type",2),St([Ft({type:Boolean,reflect:true})],Zi.prototype,"checked",2),St([Ft()],Zi.prototype,"value",2),St([Ft({type:Boolean,reflect:true})],Zi.prototype,"loading",2),St([Ft({type:Boolean,reflect:true})],Zi.prototype,"disabled",2),St([Ot("checked")],Zi.prototype,"handleCheckedChange",1),St([Ot("disabled")],Zi.prototype,"handleDisabledChange",1),St([Ot("type")],Zi.prototype,"handleTypeChange",1),Zi.define("sl-menu-item");var Gi=r`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Ji=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this),this.hasSlotController=new ve(this,"help-text","label"),this.localize=new Te(this),this.hasFocus=false,this.hasTooltip=false,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=false,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0;}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.syncRange())),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then((()=>{this.syncRange(),this.resizeObserver.observe(this.input);}));}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this.input);}handleChange(){this.emit("sl-change");}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange();}handleBlur(){this.hasFocus=false,this.hasTooltip=false,this.emit("sl-blur");}handleFocus(){this.hasFocus=true,this.hasTooltip=true,this.emit("sl-focus");}handleThumbDragStart(){this.hasTooltip=true;}handleThumbDragEnd(){this.hasTooltip=false;}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%");}syncTooltip(t){if(null!==this.output){const e=this.input.offsetWidth,o=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=e*t;if("rtl"===this.localize.dir()){const r=`${e-s}px + ${t} * ${i}`;this.output.style.translate=`calc((${r} - ${o/2}px - ${i} / 2))`;}else {const e=`${s}px - ${t} * ${i}`;this.output.style.translate=`calc(${e} - ${o/2}px + ${i} / 2)`;}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange();}handleDisabledChange(){this.formControlController.setValidity(this.disabled);}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then((()=>this.syncTooltip(t)));}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}focus(t){this.input.focus(t);}blur(){this.input.blur();}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value));}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value));}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e;return U`
      <div
        part="form-control"
        class=${te({"form-control":true,"form-control--medium":true,"form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${te({range:true,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${ae(this.name)}
              ?disabled=${this.disabled}
              min=${ae(this.min)}
              max=${ae(this.max)}
              step=${ae(this.step)}
              .value=${Qe(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":U`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `}
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
    `}};Ji.styles=[Lt,Je,Gi],St([Vt(".range__control")],Ji.prototype,"input",2),St([Vt(".range__tooltip")],Ji.prototype,"output",2),St([Bt()],Ji.prototype,"hasFocus",2),St([Bt()],Ji.prototype,"hasTooltip",2),St([Ft()],Ji.prototype,"title",2),St([Ft()],Ji.prototype,"name",2),St([Ft({type:Number})],Ji.prototype,"value",2),St([Ft()],Ji.prototype,"label",2),St([Ft({attribute:"help-text"})],Ji.prototype,"helpText",2),St([Ft({type:Boolean,reflect:true})],Ji.prototype,"disabled",2),St([Ft({type:Number})],Ji.prototype,"min",2),St([Ft({type:Number})],Ji.prototype,"max",2),St([Ft({type:Number})],Ji.prototype,"step",2),St([Ft()],Ji.prototype,"tooltip",2),St([Ft({attribute:false})],Ji.prototype,"tooltipFormatter",2),St([Ft({reflect:true})],Ji.prototype,"form",2),St([Ge()],Ji.prototype,"defaultValue",2),St([It({passive:true})],Ji.prototype,"handleThumbDragStart",1),St([Ot("value",{waitUntilFirstUpdate:true})],Ji.prototype,"handleValueChange",1),St([Ot("disabled",{waitUntilFirstUpdate:true})],Ji.prototype,"handleDisabledChange",1),St([Ot("hasTooltip",{waitUntilFirstUpdate:true})],Ji.prototype,"syncRange",1),Ji.define("sl-range");var Qi=r`
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
`,ts=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this),this.variant="neutral",this.size="medium",this.pill=false,this.removable=false;}handleRemoveClick(){this.emit("sl-remove");}render(){return U`
      <span
        part="base"
        class=${te({tag:true,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?U`
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
    `}};ts.styles=[Lt,Qi],ts.dependencies={"sl-icon-button":ne},St([Ft({reflect:true})],ts.prototype,"variant",2),St([Ft({reflect:true})],ts.prototype,"size",2),St([Ft({type:Boolean,reflect:true})],ts.prototype,"pill",2),St([Ft({type:Boolean})],ts.prototype,"removable",2);var es=r`
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

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
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

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
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

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
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

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
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
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;class os extends Qt{constructor(t){if(super(t),this.it=N,t.type!==Xt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===N||null==t)return this._t=void 0,this.it=t;if(t===H)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}os.directiveName="unsafeHTML",os.resultType=1;const is=Jt(os);var ss=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ve(this,"help-text","label"),this.localize=new Te(this),this.typeToSelectString="",this.hasFocus=false,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=false,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=false,this.maxOptionsVisible=3,this.disabled=false,this.clearable=false,this.open=false,this.hoist=false,this.filled=false,this.pill=false,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=false,this.getTag=t=>U`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide();},this.handleDocumentKeyDown=t=>{const e=t.target,o=null!==e.closest(".select__clear"),i=null!==e.closest("sl-icon-button");if(!o&&!i){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:true})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=true,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:true})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),o=e.indexOf(this.currentOption);let i=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(i=o+1,i>e.length-1&&(i=0)):"ArrowUp"===t.key?(i=o-1,i<0&&(i=e.length-1)):"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),this.setCurrentOption(e[i]);}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show();}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e){if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide();};}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=true,this._value=t);}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.handleDefaultSlotChange();})),this.open=false;}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:true}));});}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy();}handleFocus(){this.hasFocus=true,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus");}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleLabelClick(){this.displayInput.focus();}handleComboboxMouseDown(t){const e=t.composedPath().some((t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase()));this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:true}),this.open=!this.open);}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t));}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=true,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:true}),this.updateComplete.then((()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change");})));}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault();}handleOptionClick(t){const e=t.target.closest("sl-option"),o=this.value;e&&!e.disabled&&(this.valueHasChanged=true,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then((()=>this.displayInput.focus({preventScroll:true}))),this.value!==o&&this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:true})));}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then((()=>this.handleDefaultSlotChange()));const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,o=Array.isArray(e)?e:[e],i=[];t.forEach((t=>i.push(t.value))),this.setSelectedOptions(t.filter((t=>o.includes(t.value))));}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=true,this.disabled||(this.toggleOptionSelection(e,false),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})));}getAllOptions(){return [...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach((t=>{t.current=false,t.tabIndex=-1;})),t&&(this.currentOption=t,t.current=true,t.tabIndex=0,t.focus());}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach((t=>t.selected=false)),o.length&&o.forEach((t=>t.selected=true)),this.selectionChanged();}toggleOptionSelection(t,e){t.selected=true===e||false===e?e:!t.selected,this.selectionChanged();}selectionChanged(){var t,e,o;const i=this.getAllOptions();this.selectedOptions=i.filter((t=>t.selected));const s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map((t=>t.value)),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else {const i=this.selectedOptions[0];this.value=null!=(t=null==i?void 0:i.value)?t:"",this.displayLabel=null!=(o=null==(e=null==i?void 0:i.getTextLabel)?void 0:e.call(i))?o:"";}this.valueHasChanged=s,this.updateComplete.then((()=>{this.formControlController.updateValidity();}));}get tags(){return this.selectedOptions.map(((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return U`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof o?is(o):o}
        </div>`}return e===this.maxOptionsVisible?U`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:U``}))}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}handleDisabledChange(){this.disabled&&(this.open=false,this.handleOpenChange());}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t;}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t;}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter((t=>e.includes(t.value))));}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await fe(this),this.listbox.hidden=false,this.popup.active=true,requestAnimationFrame((()=>{this.setCurrentOption(this.currentOption);}));const{keyframes:t,options:e}=ue(this,"select.show",{dir:this.localize.dir()});await be(this.popup.popup,t,e),this.currentOption&&uo(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),await fe(this);const{keyframes:t,options:e}=ue(this,"select.hide",{dir:this.localize.dir()});await be(this.popup.popup,t,e),this.listbox.hidden=true,this.popup.active=false,this.emit("sl-after-hide");}}async show(){if(!this.open&&!this.disabled)return this.open=true,pe(this,"sl-after-show");this.open=false;}async hide(){if(this.open&&!this.disabled)return this.open=false,pe(this,"sl-after-hide");this.open=false;}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity();}focus(t){this.displayInput.focus(t);}blur(){this.displayInput.blur();}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return U`
      <div
        part="form-control"
        class=${te({"form-control":true,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${te({select:true,"select--standard":true,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
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

              ${this.multiple?U`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${s?U`
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
    `}};ss.styles=[Lt,Je,es],ss.dependencies={"sl-icon":Kt,"sl-popup":Li,"sl-tag":ts},St([Vt(".select")],ss.prototype,"popup",2),St([Vt(".select__combobox")],ss.prototype,"combobox",2),St([Vt(".select__display-input")],ss.prototype,"displayInput",2),St([Vt(".select__value-input")],ss.prototype,"valueInput",2),St([Vt(".select__listbox")],ss.prototype,"listbox",2),St([Bt()],ss.prototype,"hasFocus",2),St([Bt()],ss.prototype,"displayLabel",2),St([Bt()],ss.prototype,"currentOption",2),St([Bt()],ss.prototype,"selectedOptions",2),St([Bt()],ss.prototype,"valueHasChanged",2),St([Ft()],ss.prototype,"name",2),St([Bt()],ss.prototype,"value",1),St([Ft({attribute:"value"})],ss.prototype,"defaultValue",2),St([Ft({reflect:true})],ss.prototype,"size",2),St([Ft()],ss.prototype,"placeholder",2),St([Ft({type:Boolean,reflect:true})],ss.prototype,"multiple",2),St([Ft({attribute:"max-options-visible",type:Number})],ss.prototype,"maxOptionsVisible",2),St([Ft({type:Boolean,reflect:true})],ss.prototype,"disabled",2),St([Ft({type:Boolean})],ss.prototype,"clearable",2),St([Ft({type:Boolean,reflect:true})],ss.prototype,"open",2),St([Ft({type:Boolean})],ss.prototype,"hoist",2),St([Ft({type:Boolean,reflect:true})],ss.prototype,"filled",2),St([Ft({type:Boolean,reflect:true})],ss.prototype,"pill",2),St([Ft()],ss.prototype,"label",2),St([Ft({reflect:true})],ss.prototype,"placement",2),St([Ft({attribute:"help-text"})],ss.prototype,"helpText",2),St([Ft({reflect:true})],ss.prototype,"form",2),St([Ft({type:Boolean,reflect:true})],ss.prototype,"required",2),St([Ft()],ss.prototype,"getTag",2),St([Ot("disabled",{waitUntilFirstUpdate:true})],ss.prototype,"handleDisabledChange",1),St([Ot(["defaultValue","value"],{waitUntilFirstUpdate:true})],ss.prototype,"handleValueChange",1),St([Ot("open",{waitUntilFirstUpdate:true})],ss.prototype,"handleOpenChange",1),he("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),he("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),ss.define("sl-select");var rs=r`
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
`,as=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new ve(this,"help-text"),this.hasFocus=false,this.title="",this.name="",this.size="medium",this.disabled=false,this.checked=false,this.defaultChecked=false,this.form="",this.required=false,this.helpText="";}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleInput(){this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}handleClick(){this.checked=!this.checked,this.emit("sl-change");}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=false,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=true,this.emit("sl-change"),this.emit("sl-input"));}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity();}handleDisabledChange(){this.formControlController.setValidity(true);}click(){this.input.click();}focus(t){this.input.focus(t);}blur(){this.input.blur();}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return U`
      <div
        class=${te({"form-control":true,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${te({switch:true,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${ae(this.value)}
            .checked=${Qe(this.checked)}
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
    `}};as.styles=[Lt,Je,rs],St([Vt('input[type="checkbox"]')],as.prototype,"input",2),St([Bt()],as.prototype,"hasFocus",2),St([Ft()],as.prototype,"title",2),St([Ft()],as.prototype,"name",2),St([Ft()],as.prototype,"value",2),St([Ft({reflect:true})],as.prototype,"size",2),St([Ft({type:Boolean,reflect:true})],as.prototype,"disabled",2),St([Ft({type:Boolean,reflect:true})],as.prototype,"checked",2),St([Ge("checked")],as.prototype,"defaultChecked",2),St([Ft({reflect:true})],as.prototype,"form",2),St([Ft({type:Boolean,reflect:true})],as.prototype,"required",2),St([Ft({attribute:"help-text"})],as.prototype,"helpText",2),St([Ot("checked",{waitUntilFirstUpdate:true})],as.prototype,"handleCheckedChange",1),St([Ot("disabled",{waitUntilFirstUpdate:true})],as.prototype,"handleDisabledChange",1),as.define("sl-switch");var ns=r`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,ls=0,cs=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this),this.attrId=++ls,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=false,this.closable=false,this.disabled=false,this.tabIndex=0;}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab");}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close");}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false");}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0;}render(){return this.id=this.id.length>0?this.id:this.componentId,U`
      <div
        part="base"
        class=${te({tab:true,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?U`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};cs.styles=[Lt,ns],cs.dependencies={"sl-icon-button":ne},St([Vt(".tab")],cs.prototype,"tab",2),St([Ft({reflect:true})],cs.prototype,"panel",2),St([Ft({type:Boolean,reflect:true})],cs.prototype,"active",2),St([Ft({type:Boolean,reflect:true})],cs.prototype,"closable",2),St([Ft({type:Boolean,reflect:true})],cs.prototype,"disabled",2),St([Ft({type:Number,reflect:true})],cs.prototype,"tabIndex",2),St([Ot("active")],cs.prototype,"handleActiveChange",1),St([Ot("disabled")],cs.prototype,"handleDisabledChange",1),cs.define("sl-tab");var ds=r`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,hs=r`
  :host {
    display: contents;
  }
`,us=class extends Mt{constructor(){super(...arguments),this.observedElements=[],this.disabled=false;}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((t=>{this.emit("sl-resize",{detail:{entries:t}});})),this.disabled||this.startObserver();}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver();}handleSlotChange(){this.disabled||this.startObserver();}startObserver(){const t=this.shadowRoot.querySelector("slot");if(null!==t){const e=t.assignedElements({flatten:true});this.observedElements.forEach((t=>this.resizeObserver.unobserve(t))),this.observedElements=[],e.forEach((t=>{this.resizeObserver.observe(t),this.observedElements.push(t);}));}}stopObserver(){this.resizeObserver.disconnect();}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver();}render(){return U` <slot @slotchange=${this.handleSlotChange}></slot> `}};us.styles=[Lt,hs],St([Ft({type:Boolean,reflect:true})],us.prototype,"disabled",2),St([Ot("disabled",{waitUntilFirstUpdate:true})],us.prototype,"handleDisabledChange",1);var ps=class extends Mt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Te(this),this.hasScrollControls=false,this.shouldHideScrollStartButton=false,this.shouldHideScrollEndButton=false,this.placement="top",this.activation="auto",this.noScrollControls=false,this.fixedScrollControls=false,this.scrollOffset=1;}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.repositionIndicator(),this.updateScrollControls();})),this.mutationObserver=new MutationObserver((t=>{if(t.some((t=>!["aria-labelledby","aria-controls"].includes(t.attributeName)))&&setTimeout((()=>this.setAriaLabels())),t.some((t=>"disabled"===t.attributeName)))this.syncTabsAndPanels();else if(t.some((t=>"active"===t.attributeName))){const e=t.filter((t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase())).map((t=>t.target)),o=e.find((t=>t.active));o&&this.setActiveTab(o);}})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:true,childList:true,subtree:true}),this.resizeObserver.observe(this.nav),t.then((()=>{new IntersectionObserver(((t,e)=>{var o;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(o=this.getActiveTab())?o:this.tabs[0],{emitEvents:false}),e.unobserve(t[0].target));})).observe(this.tabGroup);}));}));}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav));}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return [...this.body.assignedElements()].filter((t=>"sl-tab-panel"===t.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((t=>t.active))}handleClick(t){const e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"});}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=this.tabs.find((t=>t.matches(":focus"))),o="rtl"===this.localize.dir();let i=null;if("sl-tab"===(null==e?void 0:e.tagName.toLowerCase())){if("Home"===t.key)i=this.focusableTabs[0];else if("End"===t.key)i=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex((t=>t===e));i=this.findNextFocusableTab(t,"backward");}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex((t=>t===e));i=this.findNextFocusableTab(t,"forward");}if(!i)return;i.tabIndex=0,i.focus({preventScroll:true}),"auto"===this.activation?this.setActiveTab(i,{scrollBehavior:"smooth"}):this.tabs.forEach((t=>{t.tabIndex=t===i?0:-1;})),["top","bottom"].includes(this.placement)&&uo(i,this.nav,"horizontal"),t.preventDefault();}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"});}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"});}setActiveTab(t,e){if(e=$t({emitEvents:true,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach((t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1;})),this.panels.forEach((t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)})),this.syncIndicator(),["top","bottom"].includes(this.placement)&&uo(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}));}}setAriaLabels(){this.tabs.forEach((t=>{const e=this.panels.find((e=>e.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")));}));}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,i="rtl"===this.localize.dir(),s=this.getAllTabs(),r=s.slice(0,s.indexOf(t)).reduce(((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight})),{left:0,top:0});switch(this.placement){case "top":case "bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?-1*r.left+"px":`${r.left}px`;break;case "start":case "end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${r.top}px`;}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((t=>!t.disabled)),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then((()=>this.updateScrollControls()));}findNextFocusableTab(t,e){let o=null;const i="forward"===e?1:-1;let s=t+i;for(;t<this.tabs.length;){if(o=this.tabs[s]||null,null===o){o="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;s+=i;}return o}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd());}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return "rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=false:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons();}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none";}show(t){const e=this.tabs.find((e=>e.panel===t));e&&this.setActiveTab(e,{scrollBehavior:"smooth"});}render(){const t="rtl"===this.localize.dir();return U`
      <div
        part="base"
        class=${te({"tab-group":true,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?U`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${te({"tab-group__scroll-button":true,"tab-group__scroll-button--start":true,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?U`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${te({"tab-group__scroll-button":true,"tab-group__scroll-button--end":true,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ps.styles=[Lt,ds],ps.dependencies={"sl-icon-button":ne,"sl-resize-observer":us},St([Vt(".tab-group")],ps.prototype,"tabGroup",2),St([Vt(".tab-group__body")],ps.prototype,"body",2),St([Vt(".tab-group__nav")],ps.prototype,"nav",2),St([Vt(".tab-group__indicator")],ps.prototype,"indicator",2),St([Bt()],ps.prototype,"hasScrollControls",2),St([Bt()],ps.prototype,"shouldHideScrollStartButton",2),St([Bt()],ps.prototype,"shouldHideScrollEndButton",2),St([Ft()],ps.prototype,"placement",2),St([Ft()],ps.prototype,"activation",2),St([Ft({attribute:"no-scroll-controls",type:Boolean})],ps.prototype,"noScrollControls",2),St([Ft({attribute:"fixed-scroll-controls",type:Boolean})],ps.prototype,"fixedScrollControls",2),St([It({passive:true})],ps.prototype,"updateScrollButtons",1),St([Ot("noScrollControls",{waitUntilFirstUpdate:true})],ps.prototype,"updateScrollControls",1),St([Ot("placement",{waitUntilFirstUpdate:true})],ps.prototype,"syncIndicator",1),ps.define("sl-tab-group");var bs=(t,e)=>{let o=0;return function(...i){window.clearTimeout(o),o=window.setTimeout((()=>{t.call(this,...i);}),e);}},ms=(t,e,o)=>{const i=t[e];t[e]=function(...t){i.call(this,...t),o.call(this,i,...t);};};if(!("onscrollend"in window)){const t=new Set,e=new WeakMap,o=e=>{for(const o of e.changedTouches)t.add(o.identifier);},i=e=>{for(const o of e.changedTouches)t.delete(o.identifier);};document.addEventListener("touchstart",o,true),document.addEventListener("touchend",i,true),document.addEventListener("touchcancel",i,true),ms(EventTarget.prototype,"addEventListener",(function(o,i){if("scrollend"!==i)return;const s=bs((()=>{t.size?s():this.dispatchEvent(new Event("scrollend"));}),100);o.call(this,"scroll",s,{passive:true}),e.set(this,s);})),ms(EventTarget.prototype,"removeEventListener",(function(t,o){if("scrollend"!==o)return;const i=e.get(this);i&&t.call(this,"scroll",i,{passive:true});}));}var gs=r`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,fs=0,vs=class extends Mt{constructor(){super(...arguments),this.attrId=++fs,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=false;}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel");}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true");}render(){return U`
      <slot
        part="base"
        class=${te({"tab-panel":true,"tab-panel--active":this.active})}
      ></slot>
    `}};vs.styles=[Lt,gs],St([Ft({reflect:true})],vs.prototype,"name",2),St([Ft({type:Boolean,reflect:true})],vs.prototype,"active",2),St([Ot("active")],vs.prototype,"handleActiveChange",1),vs.define("sl-tab-panel");var ys=r`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,ws=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ve(this,"help-text","label"),this.hasFocus=false,this.title="",this.name="",this.value="",this.size="medium",this.filled=false,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=false,this.readonly=false,this.form="",this.required=false,this.spellcheck=true,this.defaultValue="";}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.updateComplete.then((()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input);}));}firstUpdated(){this.formControlController.updateValidity();}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&(null==(t=this.resizeObserver)||t.unobserve(this.input));}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change");}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleInput(){this.value=this.input.value,this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height="";}handleDisabledChange(){this.formControlController.setValidity(this.disabled);}handleRowsChange(){this.setTextareaHeight();}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight();}focus(t){this.input.focus(t);}blur(){this.input.blur();}select(){this.input.select();}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o);}setRangeText(t,e,o,i="preserve"){const s=null!=e?e:this.input.selectionStart,r=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight());}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e;return U`
      <div
        part="form-control"
        class=${te({"form-control":true,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${te({textarea:true,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${ae(this.name)}
              .value=${Qe(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ae(this.placeholder)}
              rows=${ae(this.rows)}
              minlength=${ae(this.minlength)}
              maxlength=${ae(this.maxlength)}
              autocapitalize=${ae(this.autocapitalize)}
              autocorrect=${ae(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${ae(this.spellcheck)}
              enterkeyhint=${ae(this.enterkeyhint)}
              inputmode=${ae(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${"auto"!==this.resize}></div>
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
    `}};ws.styles=[Lt,Je,ys],St([Vt(".textarea__control")],ws.prototype,"input",2),St([Vt(".textarea__size-adjuster")],ws.prototype,"sizeAdjuster",2),St([Bt()],ws.prototype,"hasFocus",2),St([Ft()],ws.prototype,"title",2),St([Ft()],ws.prototype,"name",2),St([Ft()],ws.prototype,"value",2),St([Ft({reflect:true})],ws.prototype,"size",2),St([Ft({type:Boolean,reflect:true})],ws.prototype,"filled",2),St([Ft()],ws.prototype,"label",2),St([Ft({attribute:"help-text"})],ws.prototype,"helpText",2),St([Ft()],ws.prototype,"placeholder",2),St([Ft({type:Number})],ws.prototype,"rows",2),St([Ft()],ws.prototype,"resize",2),St([Ft({type:Boolean,reflect:true})],ws.prototype,"disabled",2),St([Ft({type:Boolean,reflect:true})],ws.prototype,"readonly",2),St([Ft({reflect:true})],ws.prototype,"form",2),St([Ft({type:Boolean,reflect:true})],ws.prototype,"required",2),St([Ft({type:Number})],ws.prototype,"minlength",2),St([Ft({type:Number})],ws.prototype,"maxlength",2),St([Ft()],ws.prototype,"autocapitalize",2),St([Ft()],ws.prototype,"autocorrect",2),St([Ft()],ws.prototype,"autocomplete",2),St([Ft({type:Boolean})],ws.prototype,"autofocus",2),St([Ft()],ws.prototype,"enterkeyhint",2),St([Ft({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],ws.prototype,"spellcheck",2),St([Ft()],ws.prototype,"inputmode",2),St([Ge()],ws.prototype,"defaultValue",2),St([Ot("disabled",{waitUntilFirstUpdate:true})],ws.prototype,"handleDisabledChange",1),St([Ot("rows",{waitUntilFirstUpdate:true})],ws.prototype,"handleRowsChange",1),St([Ot("value",{waitUntilFirstUpdate:true})],ws.prototype,"handleValueChange",1),ws.define("sl-textarea");var _s=r`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,xs=class extends Mt{constructor(){super(),this.localize=new Te(this),this.content="",this.placement="top",this.disabled=false,this.distance=8,this.open=false,this.skidding=0,this.trigger="hover focus",this.hoist=false,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide();},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show());},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show();},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide());},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=me(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.show()),t);}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=me(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout((()=>this.hide()),t);}},this.addEventListener("blur",this.handleBlur,true),this.addEventListener("focus",this.handleFocus,true),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut);}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown);}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=true,this.popup.reposition());}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide();}):document.addEventListener("keydown",this.handleDocumentKeyDown),await fe(this.body),this.body.hidden=false,this.popup.active=true;const{keyframes:e,options:o}=ue(this,"tooltip.show",{dir:this.localize.dir()});await be(this.popup.popup,e,o),this.popup.reposition(),this.emit("sl-after-show");}else {this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await fe(this.body);const{keyframes:t,options:o}=ue(this,"tooltip.hide",{dir:this.localize.dir()});await be(this.popup.popup,t,o),this.popup.active=false,this.body.hidden=true,this.emit("sl-after-hide");}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition());}handleDisabledChange(){this.disabled&&this.open&&this.hide();}async show(){if(!this.open)return this.open=true,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=false,pe(this,"sl-after-hide")}render(){return U`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${te({tooltip:true,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};xs.styles=[Lt,_s],xs.dependencies={"sl-popup":Li},St([Vt("slot:not([name])")],xs.prototype,"defaultSlot",2),St([Vt(".tooltip__body")],xs.prototype,"body",2),St([Vt("sl-popup")],xs.prototype,"popup",2),St([Ft()],xs.prototype,"content",2),St([Ft()],xs.prototype,"placement",2),St([Ft({type:Boolean,reflect:true})],xs.prototype,"disabled",2),St([Ft({type:Number})],xs.prototype,"distance",2),St([Ft({type:Boolean,reflect:true})],xs.prototype,"open",2),St([Ft({type:Number})],xs.prototype,"skidding",2),St([Ft()],xs.prototype,"trigger",2),St([Ft({type:Boolean})],xs.prototype,"hoist",2),St([Ot("open",{waitUntilFirstUpdate:true})],xs.prototype,"handleOpenChange",1),St([Ot(["content","distance","hoist","placement","skidding"])],xs.prototype,"handleOptionsChange",1),St([Ot("disabled")],xs.prototype,"handleDisabledChange",1),he("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),he("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),xs.define("sl-tooltip");

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

    static async showPasswordDialog(prompt) {
        return new Promise((resolve) => {
            const dialog = document.createElement('sl-dialog');
            const input = document.createElement('sl-input');
            const unlockBtn = document.createElement('sl-button');
            const cancelBtn = document.createElement('sl-button');
    
            dialog.setAttribute('label', prompt || 'Enter Password');
            
            input.type = 'password';
            input.placeholder = 'Enter password';
            input.style.width = '100%';
            input.style.marginBottom = '1rem';
    
            unlockBtn.setAttribute('slot', 'footer');
            unlockBtn.setAttribute('variant', 'primary');
            unlockBtn.textContent = 'Unlock';
    
            cancelBtn.setAttribute('slot', 'footer');
            cancelBtn.setAttribute('variant', 'default');
            cancelBtn.textContent = 'Cancel';
    
            dialog.appendChild(input);
            dialog.appendChild(unlockBtn);
            dialog.appendChild(cancelBtn);
    
            let unlockClicked = false;
    
            const handleClose = (value) => {
                unlockClicked = true;
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
    
            dialog.addEventListener('sl-hide', (event) => {
                if (!unlockClicked) {
                    resolve(null);
                    dialog.remove();
                }
            });
    
            document.body.appendChild(dialog);
    
            requestAnimationFrame(() => {
                dialog.setAttribute('open', '');
                input.focus();
            });
        });
    }
}

const passwordManager = new PasswordManager();

// Used in hw-dynamic.js
function getSectionLayout(orientation) {
    return `flex-container ${orientation === 'horizontal' ? 'horizontal-layout' : 'vertical-layout'}`;
}

const getPageLayout = (orientation) => {
    switch (orientation?.toLowerCase()) {
        case 'horizontal':
            return 'horizontal-wrap';
        case 'vertical':
        default:
            return 'vertical';
    }
};

// Add new components to log here:
const ComponentType = {
    DEBUG: 'debug',
    HEARTBEAT: 'heartbeat',
    SOCKET: 'socket',
    CONNECTED_ELEMENT: 'connected-element',
    RX_BOOL: 'rx-bool',
    RX_GRAPH: 'rx-graph',
    RX_INDICATOR: 'rx-indicator',
    RX_LABEL: 'rx-label',
    RX_LEVEL_BAR: 'rx-level-bar',
    RX_NUMERIC: 'rx-numeric',
    RX_TOOLTIP: 'rx-tooltip',
    TX_BOOL: 'tx-bool',
    TX_BUTTON_HOLD: 'tx-button-hold',
    TX_DROPDOWN: 'tx-dropdown',
    TX_DROPDOWNGRAPH: 'tx-dropdowngraph',
    TX_NUMERIC: 'tx-numeric',
    TX_SLIDER: 'tx-slider',
    TX_STRING: 'tx-string'
};
// And here:
const componentLabels = {
    [ComponentType.DEBUG]: ComponentType.DEBUG,
    [ComponentType.HEARTBEAT]: ComponentType.HEARTBEAT,
    [ComponentType.SOCKET]: ComponentType.SOCKET,
    [ComponentType.CONNECTED_ELEMENT]: ComponentType.CONNECTED_ELEMENT,
    [ComponentType.RX_BOOL]: ComponentType.RX_BOOL,
    [ComponentType.RX_GRAPH]: ComponentType.RX_GRAPH,
    [ComponentType.RX_INDICATOR]: ComponentType.RX_INDICATOR,
    [ComponentType.RX_LABEL]: ComponentType.RX_LABEL,
    [ComponentType.RX_LEVEL_BAR]: ComponentType.RX_LEVEL_BAR,
    [ComponentType.RX_NUMERIC]: ComponentType.RX_NUMERIC,
    [ComponentType.RX_TOOLTIP]: ComponentType.RX_TOOLTIP,
    [ComponentType.TX_BOOL]: ComponentType.TX_BOOL,
    [ComponentType.TX_BUTTON_HOLD]: ComponentType.TX_BUTTON_HOLD,
    [ComponentType.TX_DROPDOWN]: ComponentType.TX_DROPDOWN,
    [ComponentType.TX_DROPDOWNGRAPH]: ComponentType.TX_DROPDOWNGRAPH,
    [ComponentType.TX_NUMERIC]: ComponentType.TX_NUMERIC,
    [ComponentType.TX_SLIDER]: ComponentType.TX_SLIDER,
    [ComponentType.TX_STRING]: ComponentType.TX_STRING,
};

class DebugDrawer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        // Wait for a moment to ensure components are rendered
        setTimeout(() => {
            this.loadSettings();
        }, 100);
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/static/css/shoelace.bundle.css" />
            <style>
                :host {
                    display: block;
                }
                .debug-container {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                #logging-components {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                sl-checkbox::part(base) {
                    color: white;
                }
            </style>
            
            <sl-icon-button name="bug-fill" id="debug-toggle" style="font-size: 1.1rem;"></sl-icon-button>
            
            <sl-drawer label="Debug Settings" placement="start" class="drawer-placement-start" style="--size: 300px;" id="debug-drawer">
                <div class="debug-container">
                    <sl-checkbox id="toggle-all">Toggle All Components</sl-checkbox>
                    <sl-divider></sl-divider>
                    <div id="logging-components">
                        <!-- Checkboxes will be injected here -->
                    </div>
                    <sl-divider></sl-divider>
                    <div style="display: flex; gap: 10px; justify-content: flex-end;">
                        <sl-button variant="primary" id="save-settings">Save</sl-button>
                        <sl-button variant="default" id="close-drawer">Close</sl-button>
                    </div>
                </div>
            </sl-drawer>
        `;
    }

    setupEventListeners() {
        const drawer = this.shadowRoot.getElementById('debug-drawer');
        const toggleAll = this.shadowRoot.getElementById('toggle-all');
        const debugToggle = this.shadowRoot.getElementById('debug-toggle');
        const saveButton = this.shadowRoot.getElementById('save-settings');
        const closeButton = this.shadowRoot.getElementById('close-drawer');

        debugToggle?.addEventListener('click', () => {
            drawer?.show();
        });

        closeButton?.addEventListener('click', () => {
            drawer?.hide();
        });

        saveButton?.addEventListener('click', () => {
            this.saveSettings();
            drawer?.hide();
        });

        toggleAll?.addEventListener('sl-change', (event) => {
            Logger.log(ComponentType.DEBUG, 'Toggle all changed:', event.target.checked);
            const checkAll = event.target.checked;
            const checkboxes = this.shadowRoot.querySelectorAll('#logging-components sl-checkbox');
            Logger.log(ComponentType.DEBUG, 'Found checkboxes:', checkboxes.length);
            checkboxes.forEach(checkbox => {
                checkbox.checked = checkAll;
            });
        });
    }

    initializeComponents() {
        Logger.log(ComponentType.DEBUG, 'Initializing components');
        const container = this.shadowRoot.getElementById('logging-components');
        if (!container) {
            Logger.error(ComponentType.DEBUG, 'Log components container not found');
            return;
        }
        
        container.innerHTML = ''; // Clear existing checkboxes
        
        Object.entries(componentLabels).forEach(([type, label]) => {
            const checkbox = document.createElement('sl-checkbox');
            checkbox.value = type;
            checkbox.textContent = label;
            // Add change event listener to individual checkboxes
            checkbox.addEventListener('sl-change', (event) => {
                Logger.log(ComponentType.DEBUG, `Checkbox ${type} changed:`, event.target.checked);
            });
            container.appendChild(checkbox);
        });
        
        Logger.log(ComponentType.DEBUG, 'Components initialized:', container.children.length);
    }

    loadSettings() {
        Logger.log(ComponentType.DEBUG, 'Loading settings');
        this.initializeComponents();
        const savedSettings = localStorage.getItem('debugComponents');
        Logger.log(ComponentType.DEBUG, 'Loaded saved settings:', savedSettings);
        
        if (savedSettings) {
            try {
                const settings = new Set(JSON.parse(savedSettings));
                const checkboxes = this.shadowRoot.querySelectorAll('#logging-components sl-checkbox');
                Logger.log(ComponentType.DEBUG, 'Found checkboxes for loading:', checkboxes.length);
                
                checkboxes.forEach(checkbox => {
                    checkbox.checked = settings.has(checkbox.value);
                    // Logger.log(ComponentType.DEBUG, `Setting ${checkbox.value} to ${checkbox.checked}`);
                });
            } catch (error) {
                Logger.error(ComponentType.DEBUG, 'Error parsing saved settings:', error);
            }
        }
    }

    saveSettings() {
        Logger.log(ComponentType.DEBUG, 'Saving settings');
        const checkboxes = this.shadowRoot.querySelectorAll('#logging-components sl-checkbox');
        Logger.log(ComponentType.DEBUG, 'Found checkboxes for saving:', checkboxes.length);
        
        const selected = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        
        Logger.log(ComponentType.DEBUG, 'Selected components:', selected);
        localStorage.setItem('debugComponents', JSON.stringify(selected));
        
        // Dispatch event for Logger class to update
        window.dispatchEvent(new CustomEvent('debug-settings-changed', {
            detail: { components: selected }
        }));
    }
}

// Register the web component
customElements.define('debug-drawer', DebugDrawer);

class Logger {
    static #enabledComponents = new Set();

    static {
        Logger.log(ComponentType.DEBUG, 'Initializing Logger');
        this.#loadEnabledComponents();
        window.addEventListener('debug-settings-changed', (event) => {
            Logger.log(ComponentType.DEBUG, 'Debug settings changed:', event.detail.components);
            this.#enabledComponents = new Set(event.detail.components);
        });
    }

    static #loadEnabledComponents() {
        const saved = localStorage.getItem('debugComponents');
        Logger.log(ComponentType.DEBUG, 'Logger loading saved components:', saved);
        if (saved) {
            try {
                this.#enabledComponents = new Set(JSON.parse(saved));
            } catch (error) {
                Logger.error(ComponentType.DEBUG, 'Error loading enabled components:', error);
                this.#enabledComponents = new Set();
            }
        }
    }

    static isEnabled(component) {
        return this.#enabledComponents.has(component);
    }

    static log(component, message, ...args) {
        if (!this.isEnabled(component)) return;
        const timestamp = new Date().toLocaleString()+"\n";
        console.groupCollapsed(`${timestamp}[${component}] ${message}`, ...args);
        console.trace();
        console.groupEnd();
    }

    static warn(component, message, ...args) {
        if (!this.isEnabled(component)) return;
        console.warn(`[${component}] ${message}`, ...args);
    }

    static error(component, message, ...args) {
        if (!this.isEnabled(component)) return;
        console.error(`[${component}] ${message}`, ...args);
    }
}

let DISCONNECTED = "DISCONNECTED";
let CONNECTED = "CONNECTED";
let CONNECTING = "CONNECTING";
let FAILED = "FAILED";
let WAITING = "WAITING";
let RECONNECT = "RECONNECT";

const TTL = 1000;
const MAX_TRIES = 5;

class Socket {

	static resources = {}
	static defaultSocket = undefined

    constructor(url, targets={}, ttl = TTL) {
		// 0. Init state
        this.url = url;
		this.targets = targets;
		this.listeners = targets;
		this.state = "INITIAL";
		this.connection = undefined;
		this.websocket = undefined;
		this.lrh = Date.now(); 				// Last received heartbeat
		this.ttl = ttl;						// Time to live
		this.retries = 0;
		this.isDisabled = true;
		this.queue = [];
		this.initialStatesLoaded = false;
		this.pendingStates = {}; // { [hash]: [state1, state2, ...] }
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

		// Update all ConnectedElements to use this new socket
		ConnectedElement.instances.forEach(instance => {
			instance.socket = this; // Update their socket reference
			if (instance._descriptor?.hash) {
				// Re-register their hash target on the new socket
				this.setTarget(instance._descriptor.hash, instance.update);
			}
		});
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
			Logger.warn(ComponentType.SOCKET, "CONNECTING");
			this.state = WAITING;
			this.heartbeat();
		}
		// If connection faslied, try to reconnect
		else if (this.state === FAILED){
			Logger.error(ComponentType.SOCKET, "FAILED");
			this.reconnect();
		}
		// If client was already waiting and ttl is up, try to reconnect
		else if (this.state === WAITING && elapsed > 2*this.ttl){
			this.disable();
			this.disconnect();
			// 1.1 Reset socket
			Logger.error(ComponentType.SOCKET, "Socket is disconnected. Will close the socket");
			this.interval = setInterval(()=> {
				Logger.error(ComponentType.SOCKET, "Trying to reconnect after disconnection");
				this.reconnect();	
			} , 5000);
			
		}
		// If ttl is up, set to WAITING
		else if (elapsed > this.ttl) {
			this.sendMessage("heartbeat", false);
			this.state = WAITING;
			Logger.log(ComponentType.HEARTBEAT, 'watchdog updated state, elapsed time: '+elapsed, WAITING);
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
		Logger.log(ComponentType.SOCKET, "Connecting websocket: ws://" + url);
		this.initialStatesLoaded = false;
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
			Logger.error(ComponentType.SOCKET, "Error while trying to connect: ", e);
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
		Logger.warn(ComponentType.SOCKET, "Websocket successfully disconnected");
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
			Logger.warn(ComponentType.SOCKET, "Overwriting resource in registration");
		Socket.resources[name] = socket;
	}

	/**
	 * Unregister a socket from the Socket.resources
	 * @param {string} name - The name of the socket to remove
	 */
	static unregister(name) {
		Logger.warn(ComponentType.SOCKET, "Unregistering");
		Socket.resources[name].disconnect();
		delete Socket.resources[name];
	}

	/**
     * Process pending states for a newly registered hash
     * @param {string} hash - The hash to process pending states for
     */
    processPendingStates(hash) {
        if (this.pendingStates[hash]) {
            this.pendingStates[hash].forEach(({ value, descriptor }) => {
                this.targets[hash](value, descriptor);
            });
            delete this.pendingStates[hash];
			Logger.warn(ComponentType.SOCKET, `Socket retrieved hash states: ${hash} from the pending states buffer`);
        }
    }

	/**
	 * Register a target for this socket
	 * @param {string} name - Target function name
	 * @param {function} fn - callable to be registered
	 */
	addTarget(name, fn) {
        Logger.log(ComponentType.SOCKET, `Registering target: ${name}`);
        this.targets[name] = fn;
        this.processPendingStates(name); // Process any pending states
        return this;
    }

    setTarget(name, fn) {
        Logger.log(ComponentType.SOCKET, `Setting target: ${name}`);
        this.targets[name] = fn;
        this.processPendingStates(name); // Process any pending states
        return this;
    }

    removeTarget(name) {
        Logger.log(ComponentType.SOCKET, `Removing target: ${name}`);
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
			Logger.log(ComponentType.SOCKET, "SOCKET RECEIVED:\n ",msg.data);
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
			Logger.error(ComponentType.SOCKET, "Error while validating in Socket.onMessage", e);
		}
		let keys = Object.keys(data);
		let key = keys[0];
		// 2. Validate target
		if (key !== "states" && !this.targets.hasOwnProperty(keys)) {
			Logger.warn(ComponentType.SOCKET, Object.keys(this.targets));
			Logger.error(ComponentType.SOCKET, "Functor", "No target in socket for:" + key );
			//throw new Error("Socket has no target " + data.target )
		}
		// 2.1 Update last received heartbeat
		this.lrh = Date.now();
		// 3. Run target
		if (key === "states") {
			data[key].forEach((x) => {
				if (!this.targets.hasOwnProperty(x.hash)) {
					Logger.warn(ComponentType.SOCKET, `Socket has no target for hash: ${x.hash} \nAdding it to the pending states buffer`);
					// Buffer the state update
					if (!this.pendingStates[x.hash]) {
						this.pendingStates[x.hash] = [];
					}
					this.pendingStates[x.hash].push({
						value: x.value,
						descriptor: x.descriptor
					});
				} else {
					this.targets[x.hash](x.value, x.descriptor);
				}
			});
			// Notify when initial states are loaded
			if (!this.initialStatesLoaded) {
				this.initialStatesLoaded = true;
				Logger.log(ComponentType.SOCKET, "All states loaded from the server.");
				if (this.targets.notification) {
					this.targets.notification({
						type: "success",
						name: "System Ready",
						desc: "All states loaded from the server."
					});
				}
				this.sendMessage("initialStatesLoaded", true);
			}
        }
        else {
            if (this.targets.hasOwnProperty(key)) {
                this.targets[key](data[key]);
            } else {
                Logger.error(ComponentType.SOCKET, `Socket has no target for key: ${key}`);
                Logger.log(ComponentType.SOCKET, 'Available targets:', Object.keys(this.targets));
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
			Logger.log(ComponentType.SOCKET, "Cueing message", data);
			//this.websocket.send(JSON.stringify({heartbeat: true}))
			return
		}
		// If not heartbeat, show data
		if (key !== "heartbeat"){
			Logger.log(ComponentType.SOCKET, "SOCKET SENDING:\n", data);
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
		Logger.warn(ComponentType.SOCKET, 'Connection closed', event);
		this.initialStatesLoaded = false;
		
		
		this.disable();

		if (event.code == 1000){
			window.warn("Websocket closed normally \n" + event);
		} else {
			Logger.warn(ComponentType.SOCKET, this.state);
			Logger.error(ComponentType.SOCKET, "Websocket closed abnormally with code "+ event.code );
		}
		this.state = DISCONNECTED;
	}


}

window.WS = Socket;

class ConnectedElement extends HTMLElement {

    static instances = new Set();

    constructor() {
        super();
        ConnectedElement.instances.add(this);
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
            Logger.log(ComponentType.CONNECTED_ELEMENT, `Updating element with hash: ${this._descriptor.hash}, value:`, val, 'descriptor:', descriptor);
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
                Logger.error(ComponentType.CONNECTED_ELEMENT, `Component ${child.component} not found`);
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

    disconnectedCallback() {
        ConnectedElement.instances.delete(this);
    }

    render() {
        throw new Error("Connected element interface does not implement render");
    }
}

const template$h = document.createElement('template');
template$h.innerHTML = `
    
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
        
        this.shadowRoot.appendChild(template$h.content.cloneNode(true));
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

const template$g = document.createElement('template');

template$g.innerHTML = `
    <style>
        @import url("static/css/style.css");
        @import url("static/css/layout.css");
        @import url("static/css/hw-module.css");

        .dynamic-layout {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .tab-navigation {
            padding: 0.5rem;
            flex-direction: row;
            flex-wrap: wrap;
            background-color: var(--sl-color-neutral-100);
            border-radius: var(--sl-border-radius-medium);
        }
        .tab-navigation sl-tab-group {
            width: 100%;
        }
        .tab-navigation sl-tab::part(base) {
            color: var(--sl-color-neutral-700);
            font-weight: var(--sl-font-weight-semibold);
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

        .horizontal-wrap {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
            align-items: flex-start;
        }

        .horizontal-wrap > * {
            flex: 1 1 300px; /* Base width of 300px, but allows growing and shrinking */
            min-width: 0; /* Prevents flex items from overflowing */
            max-width: 100%; /* Ensures items don't exceed container width */
        }

        .vertical {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .vertical > * {
            width: 100%;
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

    connectedCallback() {
        this.appendChild(template$g.content.cloneNode(true));
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
            window.notify({
                type: "error",
                name: "Invalid JSON",
                desc: "Failed loading the JSON configs"
            });
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
        const result = await PasswordManager.showPasswordDialog(`Enter password for ${section.SectionName}`);
        if (!result) return;

        try {
            const validationResult = await passwordManager.validatePassword('section', section.SectionName, result);
            if (!validationResult.valid) {
                window.notify({
                    type: "error",
                    name: "Access Denied",
                    desc: "Invalid password for section access"
                });
                return;
            }
            this.renderCurrentPage();
        } catch (error) {
            console.error('Password validation failed:', error);
            window.notify({
                type: "error",
                name: "Access Denied",
                desc: "Failed to validate password"
            });
        }
    }

    createSection(section) {
        if (section.password && !passwordManager.isUnlocked(`section-${section.SectionName}`)) {
            return this.createLockedSection(section);
        }
    
        // If no custom component specified or if it's hw-section, create default section
        if (!section.component || section.component === 'hw-section') {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'section';
            
            const title = document.createElement('h3');
            title.textContent = section.SectionName;
            sectionEl.appendChild(title);
    
            const content = document.createElement('div');
            // Apply orientation class based on section.orientation
            content.className = getPageLayout(section.orientation);
    
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
        sectionEl.className = `section ${getPageLayout(section.orientation)}`;
        
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
        const result = await PasswordManager.showPasswordDialog(`Enter password for ${node.name}`);
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
        
        // Create the tab group only once
        const tabGroup = document.createElement('sl-tab-group');
        
        // Create tabs for each page
        this._interface.pages.forEach((page, index) => {
            const tab = document.createElement('sl-tab');
            tab.setAttribute('slot', 'nav');
            tab.setAttribute('panel', `panel-${index}`);
            tab.textContent = page.PageName;
            tabGroup.appendChild(tab);
        });
        
        // Set initial active tab
        requestAnimationFrame(() => {
            tabGroup.show(`panel-${this._currentPage}`);
        });
        
        // Add event listener for tab changes
        tabGroup.addEventListener('sl-tab-show', async (event) => {
            const panelId = event.detail.name;
            const index = parseInt(panelId.replace('panel-', ''));
            
            // Prevent circular updates
            if (index !== this._currentPage) {
                // Store the old page index
                const oldPage = this._currentPage;
                
                // Try to switch page
                await this.switchPage(index);
                
                // If page switch failed (e.g., due to password), revert to old tab
                if (this._currentPage === oldPage) {
                    requestAnimationFrame(() => {
                        tabGroup.show(`panel-${oldPage}`);
                    });
                }
            }
        });
        
        nav.appendChild(tabGroup);
    }

    hidePageContent() {
        const pageContent = this.querySelector('.page-content');
        if (pageContent) {
            pageContent.style.display = 'none';
        }
    }
    
    showPageContent() {
        const pageContent = this.querySelector('.page-content');
        if (pageContent) {
            pageContent.style.display = '';
        }
    }
    
    async switchPage(index) {
        const page = this._interface.pages[index];
        
        if (page.password) {
          console.log("Password found:", page.password);
            if (!passwordManager.isUnlocked(`page-${page.PageName}`)) {
                // Hide content before showing dialog
                this.hidePageContent();
                
                const result = await PasswordManager.showPasswordDialog(`Enter password for ${page.PageName}`);
                if (!result) {
                    // Show content back if user cancels
                    this.showPageContent();
                    return false;
                }
                
                try {
                    const validationResult = await passwordManager.validatePassword('page', page.PageName, result);
                    if (!validationResult.valid) {
                        window.notify({
                            type: "error",
                            name: "Access Denied",
                            desc: "Invalid password for page access"
                        });
                        // Show content back if password is invalid
                        this.showPageContent();
                        return false;
                    }
                } catch (error) {
                    console.error('Password validation failed:', error);
                    window.notify({
                        type: "error",
                        name: "Access Denied",
                        desc: "Invalid password for page access"
                    });
                    // Show content back if validation fails
                    this.showPageContent();
                    return false;
                }
            }
        }
    
        this._currentPage = index;
        this.renderCurrentPage();
        // Content will be visible after rendering
        this.showPageContent();
        return true;
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

const template$f = document.createElement('template');

template$f.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
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
      let $template = template$f.content.cloneNode(true);

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

// Used in hw-notification.js
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

    error(message, duration=10000){
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
                duration = 10000;
                break;
            case "warning":
                variant = "warning";
                icon = "exclamation-triangle";
                duration = 5000;
                break;
            case "info":
            case "primary":
                variant = "primary";
                icon = "info-circle";
                break;
            case "success":
                variant = "success";
                icon = "check-circle";
                duration = 2000;
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
        @import url("static/css/layout.css");
        .hw-section {
            flex-wrap: wrap;
            width: 100%;
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

        const childrenContainer = $template.querySelector(".children");
        childrenContainer.className = getSectionLayout(this._descriptor.orientation);

        this.appendChild($template);
        // Apply the hidden class if necessary
        this.updateVisibility();
    }
}

window.customElements.define('hw-section', HwSection);

const template$c = document.createElement('template');
template$c.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }
        :host([hidden]) {
            display: none;
        }
    </style>
    <sl-tooltip trigger="click">
        <sl-icon-button name="info-circle"></sl-icon-button>
    </sl-tooltip>
`;

class RxTooltip extends ConnectedElement {
    static get observedAttributes() {
        return ['tooltip-content'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template$c.content.cloneNode(true));
        this._tooltip = this.shadowRoot.querySelector('sl-tooltip');
        this._iconButton = this.shadowRoot.querySelector('sl-icon-button');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'tooltip-content' && oldValue !== newValue) {
            this._descriptor = { tooltip: newValue };
            this.render();
        }
    }

    render() {
        // console.log('RxTooltip render called with descriptor:', this._descriptor);
        const hasValidTooltip = this._descriptor?.tooltip && 
                              typeof this._descriptor.tooltip === 'string' && 
                              this._descriptor.tooltip.trim() !== '';
        
        if (hasValidTooltip) {
            // Set both the content property and attribute
            this._tooltip.content = this._descriptor.tooltip;
            this._tooltip.setAttribute('content', this._descriptor.tooltip);
            this._iconButton.label = this._descriptor.tooltip;
            this.removeAttribute('hidden');
            // console.log('Tooltip content set to:', this._descriptor.tooltip);
        } else {
            this._tooltip.content = '';
            this._tooltip.removeAttribute('content');
            this._iconButton.label = '';
            this.setAttribute('hidden', '');
            // console.log('Tooltip hidden due to invalid content');
        }

        // Force the tooltip to update
        if (this._tooltip.requestUpdate) {
            this._tooltip.requestUpdate();
        }
    }

}

// Used in all the other components render method
function tooltipUpdate($tooltip, tooltipContent) {
    // Set tooltip content using attribute instead of trying to set _descriptor directly
    if (tooltipContent && typeof tooltipContent === 'string' && tooltipContent.trim() !== '') {
        $tooltip.setAttribute('tooltip-content', tooltipContent);
    } else {
        $tooltip.removeAttribute('tooltip-content');
    }
}

window.customElements.define('rx-tooltip', RxTooltip);

const template$b = document.createElement('template');
template$b.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <div class="tooltip-container">
            <span>
                <span class="label">A label</span>
                <sl-switch disabled></sl-switch>
            </span>
            <rx-tooltip></rx-tooltip>
        </div>
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

        tooltipUpdate($template.querySelector("rx-tooltip"), this._descriptor.tooltip);

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
template$a.innerHTML = `
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
        .dot.on {
            background-color: var(--on-color, #4CAF50); /* Default to green if no custom color is set */
            box-shadow: 0 0 1rem var(--on-color, #87ff88);
        }
       .label {
           display: inline;
       }
        
    </style>
    <div class="card">
        <div class="tooltip-container">
            <span class="label">Indicator</span>
            <rx-tooltip></rx-tooltip>
        </div>
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
        const color = this._descriptor.color|| "lime";
        let $template = template$a.content.cloneNode(true);
        let $indicator = $template.querySelector(".dot");

        tooltipUpdate($template.querySelector("rx-tooltip"), this._descriptor.tooltip);

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
            <div class="tooltip-container">
                <span class="label-name">Current State:</span>
                <rx-tooltip></rx-tooltip>
            </div>
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

        tooltipUpdate(this.shadowRoot.querySelector("rx-tooltip"), this._descriptor.tooltip);

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

const template$8 = document.createElement('template');
template$8.innerHTML = `
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
        this.shadowRoot.appendChild(template$8.content.cloneNode(true));
        
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

const template$7 = document.createElement('template');

template$7.innerHTML = `
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
    <div class="tooltip-container">
        <span class="title level-bar-font-size bold">TITLE</span>
        <rx-tooltip></rx-tooltip>
    </div>
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
        this.shadowRoot.appendChild(template$7.content.cloneNode(true));
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

        tooltipUpdate(this.shadowRoot.querySelector("rx-tooltip"), this._descriptor.tooltip);

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

const template$6 = document.createElement('template');
template$6.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <div class="tooltip-container">
            <span class="label">A label</span>
            <rx-tooltip></rx-tooltip>
        </div>
        <sl-input disabled pill type="number" style="margin-top:10px;" ></sl-input>
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
        let $template = template$6.content.cloneNode(true);
        let $input = $template.querySelector("sl-input");

        tooltipUpdate($template.querySelector("rx-tooltip"), this._descriptor.tooltip);

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

const template$5 = document.createElement('template');
template$5.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <div class="tooltip-container">
            <span>
                <sl-switch></sl-switch>
                <span class="label">A label</span>
            </span>
            <rx-tooltip></rx-tooltip>
        </div>
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
        //this.define(this._value)
        let hash = this._descriptor.hash;
        let value = e.target.checked;
       // Logger.debug(ComponentType.TX_BOOL, `onclick: ${hash}:${value}`);
        Socket.defaultSocket.sendMessage("states", [{hash:hash, value:value}]);
    }

    render() {
        let $template = template$5.content.cloneNode(true);
        let $switch = $template.querySelector("sl-switch");

        tooltipUpdate($template.querySelector("rx-tooltip"), this._descriptor.tooltip);

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
 * - `debug`: Provides debug and warning logging utilities.
 */


const template$4 = document.createElement('template');
template$4.innerHTML = `
    <style>
        @import url("static/css/style.css")
    </style>
    <div class="card">
        <div class="tooltip-container">
            <sl-button></sl-button>
            <rx-tooltip></rx-tooltip>
        </div>
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
        let hash = this._descriptor.hash;
      //  Logger.debug(ComponentType.TX_BUTTON_HOLD, `onmousedown: ${hash}:${true}`);
        Socket.defaultSocket.sendMessage("states", [{hash:hash, value:true}]);
    }
    onmouseup(e) {
        let hash = this._descriptor.hash;
       // Logger.debug(ComponentType.TX_BUTTON_HOLD, `onmouseup: ${hash}:${false}`);
        Socket.defaultSocket.sendMessage("states", [{ hash: hash, value: false }]);
    }

    render() {
        const disable = this._descriptor.disable;
        const color = this._descriptor.color;
        let $template = template$4.content.cloneNode(true);
        let $button = $template.querySelector("sl-button");

        tooltipUpdate($template.querySelector("rx-tooltip"), this._descriptor.tooltip);

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
          "default": "Cut 2",
          "hash": 1708159392
        }
      ]
    },
 */


const template$3 = document.createElement('template');
template$3.innerHTML = `
    <div class="dropdown-selection">
        <div class="tooltip-container">
            <sl-dropdown>
                <sl-button slot="trigger" caret></sl-button>
                <sl-menu class="dropdown-menu">
                </sl-menu>
            </sl-dropdown>
            <rx-tooltip></rx-tooltip>
        </div>
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
            
            // Check for default value in descriptor
            if (this._descriptor.default && this.items.includes(this._descriptor.default)) {
                this.selectedValue = this._descriptor.default;
                this.buttonTitle.textContent = this.selectedValue;
            } else {
                this.buttonTitle.textContent = this.name;
            }
            
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

        tooltipUpdate(this.shadowRoot.querySelector("rx-tooltip"), this._descriptor.tooltip);

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
        <div class="tooltip-container">
            <sl-dropdown>
                <sl-button slot="trigger" caret></sl-button>
                <sl-menu class="dropdown-menu">
                </sl-menu>
            </sl-dropdown>
            <rx-tooltip></rx-tooltip>
        </div>
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
        tooltipUpdate(this.shadowRoot.querySelector("rx-tooltip"), this._descriptor.tooltip);
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
        <div class="tooltip-container">
            <span class="label">A label</span>
            <rx-tooltip></rx-tooltip>
        </div>
        <div style="display:flex; justify-content:space-around; margin-top:10px">
            <sl-input style="max-width: 8rem" type="number"></sl-input>
            <sl-button type="primary">Send</sl-button>
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

        tooltipUpdate($template.querySelector("rx-tooltip"), this._descriptor.tooltip);

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
        @import url("static/css/style.css")
        .slider-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;
        }

        .slider-content {
            display: flex;
            align-items: center;
            width: 100%;
            gap: 1rem;

        .value-label {
            text-align: center;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--sl-color-primary-600);
            margin-top: 0.25rem;
        }

        .range-label {
            font-size: 0.75rem;
            color: var(--sl-color-neutral-600);
            flex-shrink: 0;
            width: 2.5rem;
        }

        .range-label.min {
            text-align: right;
        }

        .range-label.max {
            text-align: left;
        }

        sl-range {
            --thumb-size: 20px;
            flex-grow: 1;
        }
    </style>

    <div class="card">
        <div class="tooltip-container">
            <span class="label">TxSlider</span>
            <rx-tooltip></rx-tooltip>
        </div>
        <div class="slider-container">
            <div class="slider-content">
                <span class="range-label min">0</span>
                <sl-range min="0" max="100" style="
                    --track-color-active: var(--sl-color-primary-600);
                    --track-color-inactive: var(--sl-color-primary-100);
                "></sl-range>
                <span class="range-label max">100</span>
            </div>
            <div class="value-label">0</div>
        </div>
    </div>
`;

class TxSlider extends ConnectedElement {
    constructor() {
        super();
        this._value = 0;
        this._low = 0;
        this._high = 100;
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleInput(event) {
        const slider = event.target;
        this._value = parseFloat(slider.value);

        // Update the displayed current value
        const valueLabel = this.querySelector(".value-label");
        if (valueLabel) {
            valueLabel.textContent = this._value;
        }
    }

    handleChange(event) {
        
        const slider = event.target;
        this._value = parseFloat(slider.value);
        const hash = this._descriptor.hash;
        console.log(this._value);
        if (hash) {
            Socket.defaultSocket.sendMessage("states", [{ hash: hash, value: this._value }]);
        }
    }

    render() {
        const disable = this._descriptor.disable;
        this._low = this._descriptor.low !== undefined ? this._descriptor.low : 0;
        this._high = this._descriptor.high !== undefined ? this._descriptor.high : 100;
        this._value = this._descriptor.value !== undefined ? this._descriptor.value : this._value;

        // Clone the template
        const template = templateSlider.content.cloneNode(true);
        const slider = template.querySelector("sl-range");
        const valueLabel = template.querySelector(".value-label");
        const minValue = template.querySelector(".range-label.min");
        const maxValue = template.querySelector(".range-label.max");
        const title = template.querySelector(".label");

        // Update tooltip
        tooltipUpdate(template.querySelector("rx-tooltip"), this._descriptor.tooltip);

        // Set title/name
        title.textContent = this._descriptor.name || "TxSlider";

        // Configure the slider
        slider.min = this._low;
        slider.max = this._high;
        slider.value = this._value;
        slider.disabled = !!disable;

        // Update labels
        minValue.textContent = this._low;
        maxValue.textContent = this._high;
        valueLabel.textContent = this._value;

        // Remove any existing listeners before adding new ones
        const oldSlider = this.querySelector("sl-range");
        if (oldSlider) {
            oldSlider.removeEventListener("sl-input", this.handleInput);
            oldSlider.removeEventListener("sl-change", this.handleChange);
        }

        // Add event listeners using Shoelace's custom events
        slider.addEventListener("sl-input", this.handleInput);
        slider.addEventListener("sl-change", this.handleChange);

        // Replace existing content
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.appendChild(template);
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
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
        <div class="tooltip-container">
            <span class="label">A label</span>
            <rx-tooltip></rx-tooltip>
        </div>
        <div style="display:flex; justify-content:space-around; margin-top:10px">
            <sl-input style="max-width: 10rem" type="text"></sl-input>
            <sl-button type="primary">Send</sl-button>
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

        tooltipUpdate($template.querySelector("rx-tooltip"), this._descriptor.tooltip);

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
            
            // Check if we're using ESP32 by examining socket URL
            const isESP32 = this.socket?.url?.includes('/ws');
            
            if (isESP32) {
                // Send via WebSocket for ESP32
                const message = {
                    saveFile: true,
                    path: "/interface.json",
                    data: content
                };
                
                this.socket.sendMessage("saveFile", [message]);
                
                window.notify({
                    type: "success",
                    name: "Success",
                    desc: "Interface configuration sent to ESP32"
                });
            } else {
                // Send via HTTP POST for development server
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
            }
            
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
  Logger.error(ComponentType.SOCKET, "Failed to connect to ESP32, will try to connect to local websocket...");
  try {
    socket = new Socket(LOCAL_SOCKET_URL);
  }
  catch (e) {
    Logger.error(ComponentType.SOCKET, 'Failed all websocket attempts. Make sure there is a websocket available to connect to', e);
  }
}
try {
  const $notification$ = `<hw-notification></hw-notification>`;
  document.body.insertAdjacentHTML("beforebegin", $notification$);
  let $notification = document.querySelector("hw-notification");
  $notification.socket = socket;
} catch (e) {
  Logger.error(ComponentType.SOCKET, 'Failed to connect', e);
}
