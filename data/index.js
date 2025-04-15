/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(undefined===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=true,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const o=this.t;if(e&&undefined===t){const e=undefined!==o&&1===o.length;e&&(t=i.get(o)),undefined===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t));}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new s(i,t,o)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return (t=>new s("string"==typeof t?t:t+"",undefined,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,b=p.trustedTypes,m=b?b.emptyScript:"",g=p.reactiveElementPolyfillSupport,f=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t);}catch(t){o=null;}}return o}},y=(t,e)=>!n(t,e),w={attribute:true,type:String,converter:v,reflect:false,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=false),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);undefined!==i&&l(this.prototype,t,i);}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t;}};return {get(){return i?.call(this)},set(e){const r=i?.call(this);s.call(this,e),this.requestUpdate(t,r,o);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),undefined!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const o of e)this.createProperty(o,t[o]);}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(undefined!==e)for(const[t,o]of e)this.elementProperties.set(t,o);}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);undefined!==o&&this._$Eh.set(o,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t));}else undefined!==t&&e.push(a(t));return e}static _$Eu(t,e){const o=e.attribute;return  false===o?undefined:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():undefined}constructor(){super(),this._$Ep=undefined,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),undefined!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ((o,i)=>{if(e)o.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),s=t.litNonce;undefined!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i);}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,e,o){this._$AK(t,o);}_$EC(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(undefined!==i&&true===o.reflect){const s=(undefined!==o.converter?.toAttribute?o.converter:v).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null;}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(undefined!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:undefined!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=s.fromAttribute(e,t.type),this._$Em=null;}}requestUpdate(t,e,o){if(undefined!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??y)(this[t],e))return;this.P(t,e,o);} false===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),true===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=undefined;}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t) true!==o.wrapped||this._$AL.has(e)||undefined===this[e]||this.P(e,this[e],o);}let t=false;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU();}catch(e){throw t=false,this._$EU(),e}t&&this._$AE(e);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[f("elementProperties")]=new Map,_[f("finalized")]=new Map,g?.({ReactiveElement:_}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,k=x.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:t=>t}):undefined,$="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+z,A=`<${S}>`,E=document,T=()=>E.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,D="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,B=/>/g,I=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,R=/"/g,M=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),H=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),W=new WeakMap,q=E.createTreeWalker(E,129);function j(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return undefined!==C?C.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,i=[];let s,r=2===e?"<svg>":3===e?"<math>":"",a=P;for(let e=0;e<o;e++){const o=t[e];let n,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=F:undefined!==l[1]?a=B:undefined!==l[2]?(M.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=I):undefined!==l[3]&&(a=I):a===I?">"===l[0]?(a=s??P,c=-1):undefined===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=undefined===l[3]?I:'"'===l[3]?R:V):a===R||a===V?a=I:a===F||a===B?a=P:(a=I,s=undefined);const h=a===I&&t[e+1].startsWith("/>")?" ":"";r+=a===P?o+A:c>=0?(i.push(n),o.slice(0,c)+$+o.slice(c)+z+h):o+z+(-2===c?e:h);}return [j(t,r+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const a=t.length-1,n=this.parts,[l,c]=K(t,e);if(this.el=Y.createElement(l,o),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(i=q.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith($)){const e=c[r++],o=i.getAttribute(t).split(z),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:a[2],strings:o,ctor:"."===a[1]?Q:"?"===a[1]?tt:"@"===a[1]?et:J}),i.removeAttribute(t);}else t.startsWith(z)&&(n.push({type:6,index:s}),i.removeAttribute(t));if(M.test(i.tagName)){const t=i.textContent.split(z),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],T()),q.nextNode(),n.push({type:2,index:++s});i.append(t[e],T());}}}else if(8===i.nodeType)if(i.data===S)n.push({type:2,index:s});else {let t=-1;for(;-1!==(t=i.data.indexOf(z,t+1));)n.push({type:7,index:s}),t+=z.length-1;}s++;}}static createElement(t,e){const o=E.createElement("template");return o.innerHTML=t,o}}function X(t,e,o=t,i){if(e===H)return e;let s=undefined!==i?o._$Co?.[i]:o._$Cl;const r=O(e)?undefined:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(false),undefined===r?s=undefined:(s=new r(t),s._$AT(t,o,i)),undefined!==i?(o._$Co??=[])[i]=s:o._$Cl=s),undefined!==s&&(e=X(t,s._$AS(t,e.values),s,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=undefined,this._$AD=t,this._$AM=e;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??E).importNode(e,true);q.currentNode=i;let s=q.nextNode(),r=0,a=0,n=o[0];for(;undefined!==n;){if(r===n.index){let e;2===n.type?e=new G(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new ot(s,this,t)),this._$AV.push(e),n=o[++a];}r!==n?.index&&(s=q.nextNode(),r++);}return q.currentNode=E,i}p(t){let e=0;for(const o of this._$AV) undefined!==o&&(undefined!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++;}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=N,this._$AN=undefined,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return undefined!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==H&&this._(t):undefined!==t._$litType$?this.$(t):undefined!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==N&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t;}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(undefined===o.el&&(o.el=Y.createElement(j(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else {const t=new Z(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t;}}_$AC(t){let e=W.get(t.strings);return undefined===e&&W.set(t.strings,e=new Y(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new G(this.O(T()),this.O(T()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i);}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(false,true,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e;}}setConnected(t){ undefined===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=N,this._$AN=undefined,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N;}_$AI(t,e=this,o,i){const s=this.strings;let r=false;if(undefined===s)t=X(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else {const i=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=X(this,i[o+a],e,a),n===H&&(n=this._$AH[a]),r||=!O(n)||n!==this._$AH[a],n===N?t=N:t!==N&&(t+=(n??"")+s[a+1]),this._$AH[a]=n;}r&&!i&&this.j(t);}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class Q extends J{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===N?undefined:t;}}class tt extends J{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==N);}}class et extends J{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5;}_$AI(t,e=this){if((t=X(this,t,e,0)??N)===H)return;const o=this._$AH,i=t===N&&o!==N||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==N&&(o===N||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class ot{constructor(t,e,o){this.element=t,this.type=6,this._$AN=undefined,this._$AM=e,this.options=o;}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t);}}const it=x.litHtmlPolyfillSupport;it?.(Y,G),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let st=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=undefined;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const i=o?.renderBefore??e;let s=i._$litPart$;if(undefined===s){const t=o?.renderBefore??null;i._$litPart$=s=new G(e.insertBefore(T(),t),t,undefined,o??{});}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return H}};st._$litElement$=true,st.finalized=true,globalThis.litElementHydrateSupport?.({LitElement:st});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:st}),(globalThis.litElementVersions??=[]).push("4.1.1");var at=r`
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
`,lt="";function ct(t){lt=t;}var dt={name:"default",resolver:t=>function(t=""){if(!lt){const t=[...document.getElementsByTagName("script")],e=t.find((t=>t.hasAttribute("data-shoelace")));if(e)ct(e.getAttribute("data-shoelace"));else {const e=t.find((t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src)));let o="";e&&(o=e.getAttribute("src")),ct(o.split("/").slice(0,-1).join("/"));}}return lt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},ht={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},ut=[dt,{name:"system",resolver:t=>t in ht?`data:image/svg+xml,${encodeURIComponent(ht[t])}`:""}],pt=[];function bt(t){return ut.find((e=>e.name===t))}var mt=Object.defineProperty,gt=Object.defineProperties,ft=Object.getOwnPropertyDescriptor,vt=Object.getOwnPropertyDescriptors,yt=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,xt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),kt=t=>{throw TypeError(t)},Ct=(t,e,o)=>e in t?mt(t,e,{enumerable:true,configurable:true,writable:true,value:o}):t[e]=o,$t=(t,e)=>{for(var o in e||(e={}))wt.call(e,o)&&Ct(t,o,e[o]);if(yt)for(var o of yt(e))_t.call(e,o)&&Ct(t,o,e[o]);return t},zt=(t,e)=>gt(t,vt(e)),St=(t,e,o,i)=>{for(var s,r=i>1?undefined:i?ft(e,o):e,a=t.length-1;a>=0;a--)(s=t[a])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&mt(e,o,r),r},At=(t,e,o)=>e.has(t)||kt("Cannot "+o),Et=function(t,e){this[0]=t,this[1]=e;},Tt=t=>{var e,o=t[xt("asyncIterator")],i=false,s={};return null==o?(o=t[xt("iterator")](),e=t=>s[t]=e=>o[t](e)):(o=o.call(t),e=t=>s[t]=e=>{if(i){if(i=false,"throw"===t)throw e;return e}return i=true,{done:false,value:new Et(new Promise((i=>{var s=o[t](e);s instanceof Object||kt("Object expected"),i(s);})),1)}}),s[xt("iterator")]=()=>s,e("next"),"throw"in o?e("throw"):s.throw=t=>{throw t},"return"in o&&e("return"),s};function Ot(t,e){const o=$t({waitUntilFirstUpdate:false},e);return (e,i)=>{const{update:s}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach((e=>{const s=e;if(t.has(s)){const e=t.get(s),r=this[s];e!==r&&(o.waitUntilFirstUpdate&&!this.hasUpdated||this[i](e,r));}})),s.call(this,t);};}}var Lt=r`
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
 */;const Dt={attribute:true,type:String,converter:v,reflect:false,hasChanged:y},Pt=(t=Dt,e,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(undefined===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,t),"accessor"===i){const{name:i}=o;return {set(o){const s=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,s,t);},init(e){return undefined!==e&&this.P(i,undefined,t),e}}}if("setter"===i){const{name:i}=o;return function(o){const s=this[i];e.call(this,o),this.requestUpdate(i,s,t);}}throw Error("Unsupported decorator location: "+i)};function Ft(t){return (e,o)=>"object"==typeof o?Pt(t,e,o):((t,e,o)=>{const i=e.hasOwnProperty(o);return e.constructor.createProperty(o,i?{...t,wrapped:true}:t),i?Object.getOwnPropertyDescriptor(e,o):undefined})(t,e,o)
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
const Ut=t=>undefined===t.strings,Ht={};var Nt,Wt=Symbol(),qt=Symbol(),jt=new Map,Kt=class extends Mt{constructor(){super(...arguments),this.initialRender=false,this.svg=null,this.label="",this.library="default";}async resolveIcon(t,e){var o;let i;if(null==e?undefined:e.spriteSheet)return this.svg=U`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return 410===i.status?Wt:qt}catch(t){return qt}try{const t=document.createElement("div");t.innerHTML=await i.text();const e=t.firstElementChild;if("svg"!==(null==(o=null==e?void 0:e.tagName)?void 0:o.toLowerCase()))return Wt;Nt||(Nt=new DOMParser);const s=Nt.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Wt}catch(t){return Wt}}connectedCallback(){var t;super.connectedCallback(),t=this,pt.push(t);}firstUpdated(){this.initialRender=true,this.setIcon();}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,pt=pt.filter((e=>e!==t));}getIconSource(){const t=bt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:true}:{url:this.src,fromLibrary:false}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"));}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?bt(this.library):undefined;if(!e)return void(this.svg=null);let s=jt.get(e);if(s||(s=this.resolveIcon(e,i),jt.set(e,s)),!this.initialRender)return;const r=await s;if(r===qt&&jt.delete(e),e===this.getIconSource().url)if(((t,e)=>undefined!==t?._$litType$)(r)){if(this.svg=r,i){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof i.mutator&&t&&i.mutator(t);}}else switch(r){case qt:case Wt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(true),null==(t=null==i?undefined:i.mutator)||t.call(i,this.svg),this.emit("sl-load");}}render(){return this.svg}};Kt.styles=[Lt,nt],St([Bt()],Kt.prototype,"svg",2),St([Ft({reflect:true})],Kt.prototype,"name",2),St([Ft()],Kt.prototype,"src",2),St([Ft()],Kt.prototype,"label",2),St([Ft({reflect:true})],Kt.prototype,"library",2),St([Ot("label")],Kt.prototype,"handleLabelChange",1),St([Ot(["name","src","library"])],Kt.prototype,"setIcon",1);
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
 */const te=Jt(class extends Qt{constructor(t){if(super(t),t.type!==Yt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(undefined===this.st){this.st=new Set,undefined!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)));}return H}}),ee=Symbol.for(""),oe=t=>{if(t?.r===ee)return t?._$litStatic$},ie=(t,...e)=>({_$litStatic$:e.reduce(((e,o,i)=>e+(t=>{if(undefined!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]),r:ee}),se=new Map,re=(t=>(e,...o)=>{const i=o.length;let s,r;const a=[],n=[];let l,c=0,d=false;for(;c<i;){for(l=e[c];c<i&&undefined!==(r=o[c],s=oe(r));)l+=s+e[++c],d=true;c!==i&&n.push(r),a.push(l),c++;}if(c===i&&a.push(e[i]),d){const t=a.join("$$lit$$");undefined===(e=se.get(t))&&(a.raw=a,se.set(t,e=a)),o=n;}return t(e,...o)})(U),ae=t=>t??N;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne=class extends Mt{constructor(){super(...arguments),this.hasFocus=false,this.label="",this.disabled=false;}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation());}click(){this.button.click();}focus(t){this.button.focus(t);}blur(){this.button.blur();}render(){const t=!!this.href,e=t?ie`a`:ie`button`;return re`
      <${e}
        part="base"
        class=${te({"icon-button":true,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${ae(t?undefined:this.disabled)}
        type=${ae(t?undefined:"button")}
        href=${ae(t?this.href:undefined)}
        target=${ae(t?this.target:undefined)}
        download=${ae(t?this.download:undefined)}
        rel=${ae(t&&this.target?"noreferrer noopener":undefined)}
        role=${ae(t?undefined:"button")}
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
    `}};ne.styles=[Lt,at],ne.dependencies={"sl-icon":Kt},St([Vt(".icon-button")],ne.prototype,"button",2),St([Bt()],ne.prototype,"hasFocus",2),St([Ft()],ne.prototype,"name",2),St([Ft()],ne.prototype,"library",2),St([Ft()],ne.prototype,"src",2),St([Ft()],ne.prototype,"href",2),St([Ft()],ne.prototype,"target",2),St([Ft()],ne.prototype,"download",2),St([Ft()],ne.prototype,"label",2),St([Ft({type:Boolean,reflect:true})],ne.prototype,"disabled",2);var le=new Map,ce=new WeakMap;function de(t,e){return "rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function he(t,e){le.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e));}function ue(t,e,o){const i=ce.get(t);if(null==i?undefined:i[e])return de(i[e],o.dir);const s=le.get(e);return s?de(s,o.dir):{keyframes:[],options:{duration:0}}}function pe(t,e){return new Promise((o=>{t.addEventListener(e,(function i(s){s.target===t&&(t.removeEventListener(e,i),o());}));}))}function be(t,e,o){return new Promise((i=>{if((null==o?undefined:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,zt($t({},o),{duration:ge()?0:o.duration}));s.addEventListener("cancel",i,{once:true}),s.addEventListener("finish",i,{once:true});}))}function me(t){return (t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function ge(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function fe(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{t.cancel(),requestAnimationFrame(e);})))))}var ve=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate();},(this.host=t).addController(this),this.slotNames=e;}hasDefaultSlot(){return [...this.host.childNodes].some((t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return  true;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return  false;if(!e.hasAttribute("slot"))return  true}return  false}))}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return "[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange);}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange);}};const ye=new Set,we=new Map;let _e,xe="ltr",ke="en";const Ce="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&undefined!==document.documentElement;if(Ce){const t=new MutationObserver(ze);xe=document.documentElement.dir||"ltr",ke=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:true,attributeFilter:["dir","lang"]});}function $e(...t){t.map((t=>{const e=t.$code.toLowerCase();we.has(e)?we.set(e,Object.assign(Object.assign({},we.get(e)),t)):we.set(e,t),_e||(_e=t);})),ze();}function ze(){Ce&&(xe=document.documentElement.dir||"ltr",ke=document.documentElement.lang||navigator.language),[...ye.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate();}));}let Se=class{constructor(t){this.host=t,this.host.addController(this);}hostConnected(){ye.add(this.host);}hostDisconnected(){ye.delete(this.host);}dir(){return `${this.host.dir||xe}`.toLowerCase()}lang(){return `${this.host.lang||ke}`.toLowerCase()}getTranslationData(t){var e,o;const i=new Intl.Locale(t.replace(/_/g,"-")),s=null==i?undefined:i.language.toLowerCase(),r=null!==(o=null===(e=null==i?undefined:i.region)||undefined===e?undefined:e.toLowerCase())&&undefined!==o?o:"";return {locale:i,language:s,region:r,primary:we.get(`${s}-${r}`),secondary:we.get(s)}}exists(t,e){var o;const{primary:i,secondary:s}=this.getTranslationData(null!==(o=e.lang)&&undefined!==o?o:this.lang());return e=Object.assign({includeFallback:false},e),!!(i&&i[t]||s&&s[t]||e.includeFallback&&_e&&_e[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else {if(!_e||!_e[t])return console.error(`No translation found for: ${String(t)}`),String(t);s=_e[t];}return "function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var Ae={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};$e(Ae);var Ee=Ae,Te=class extends Se{};$e(Ee);var Oe=r`
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
    `}};Ie.styles=[Lt,Be];var Ve=new WeakMap,Re=new WeakMap,Me=new WeakMap,Ue=new WeakSet,He=new WeakMap,Ne=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),s="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!s&&"string"==typeof o&&o.length>0&&undefined!==i&&(Array.isArray(i)?i.forEach((e=>{t.formData.append(o,e.toString());})):t.formData.append(o,i.toString()));},this.handleFormSubmit=t=>{var e;const o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=Ve.get(this.form))||e.forEach((t=>{this.setUserInteracted(t,true);}))),!this.form||this.form.noValidate||o||i(this.host)||(t.preventDefault(),t.stopImmediatePropagation());},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,false),He.set(this.host,[]);},this.handleInteraction=t=>{const e=He.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,true);},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return  false}return  true},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return  false}return  true},(this.host=t).addController(this),this.options=$t({form:t=>{const e=t.form;if(e){const o=t.getRootNode().querySelector(`#${e}`);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e);}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),He.set(this.host,[]),this.options.assumeInteractionOn.forEach((t=>{this.host.addEventListener(t,this.handleInteraction);}));}hostDisconnected(){this.detachForm(),He.delete(this.host),this.options.assumeInteractionOn.forEach((t=>{this.host.removeEventListener(t,this.handleInteraction);}));}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid);}attachForm(t){t?(this.form=t,Ve.has(this.form)?Ve.get(this.form).add(this.host):Ve.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Re.has(this.form)||(Re.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Me.has(this.form)||(Me.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=undefined;}detachForm(){if(!this.form)return;const t=Ve.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Re.has(this.form)&&(this.form.reportValidity=Re.get(this.form),Re.delete(this.form)),Me.has(this.form)&&(this.form.checkValidity=Me.get(this.form),Me.delete(this.form)),this.form=undefined));}setUserInteracted(t,e){e?Ue.add(t):Ue.delete(t),t.requestUpdate();}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((t=>{e.hasAttribute(t)&&o.setAttribute(t,e.getAttribute(t));}))),this.form.append(o),o.click(),o.remove();}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t);}submit(t){this.doAction("submit",t);}setValidity(t){const e=this.host,o=Boolean(Ue.has(e)),i=Boolean(e.required);e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o);}updateValidity(){const t=this.host;this.setValidity(t.validity.valid);}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:false,composed:false,cancelable:true,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault();}},We=Object.freeze({badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valid:true,valueMissing:false});Object.freeze(zt($t({},We),{valid:false,valueMissing:true})),Object.freeze(zt($t({},We),{valid:false,customError:true}));var qe=r`
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
        ?disabled=${ae(t?undefined:this.disabled)}
        type=${ae(t?undefined:this.type)}
        title=${this.title}
        name=${ae(t?undefined:this.name)}
        value=${ae(t?undefined:this.value)}
        href=${ae(t&&!this.disabled?this.href:undefined)}
        target=${ae(t?this.target:undefined)}
        download=${ae(t?this.download:undefined)}
        rel=${ae(t?this.rel:undefined)}
        role=${ae(t?undefined:"button")}
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
`,Ge=(t="value")=>(e,o)=>{const i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(e,r,a){var n;const l=i.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||v,i=("function"==typeof e?e:null!=(n=null==e?undefined:e.fromAttribute)?n:v.fromAttribute)(a,l.type);this[t]!==i&&(this[o]=i);}s.call(this,e,r,a);};},Je=r`
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
 */;const Qe=Jt(class extends Qt{constructor(t){if(super(t),t.type!==Zt&&t.type!==Yt&&t.type!==Gt)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ut(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===H||e===N)return e;const o=t.element,i=t.name;if(t.type===Zt){if(e===o[i])return H}else if(t.type===Gt){if(!!e===o.hasAttribute(i))return H}else if(t.type===Yt&&o.getAttribute(i)===e+"")return H;return ((t,e=Ht)=>{t._$AH=e;})(t),e}});var to=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{value:t=>t.checked?t.value||"on":undefined,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new ve(this,"help-text"),this.hasFocus=false,this.title="",this.name="",this.size="medium",this.disabled=false,this.checked=false,this.indeterminate=false,this.defaultChecked=false,this.form="",this.required=false,this.helpText="";}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleClick(){this.checked=!this.checked,this.indeterminate=false,this.emit("sl-change");}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleInput(){this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleDisabledChange(){this.formControlController.setValidity(this.disabled);}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity();}click(){this.input.click();}focus(t){this.input.focus(t);}blur(){this.input.blur();}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return U`
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
    `}};to.styles=[Lt,Je,Ze],to.dependencies={"sl-icon":Kt},St([Vt('input[type="checkbox"]')],to.prototype,"input",2),St([Bt()],to.prototype,"hasFocus",2),St([Ft()],to.prototype,"title",2),St([Ft()],to.prototype,"name",2),St([Ft()],to.prototype,"value",2),St([Ft({reflect:true})],to.prototype,"size",2),St([Ft({type:Boolean,reflect:true})],to.prototype,"disabled",2),St([Ft({type:Boolean,reflect:true})],to.prototype,"checked",2),St([Ft({type:Boolean,reflect:true})],to.prototype,"indeterminate",2),St([Ge("checked")],to.prototype,"defaultChecked",2),St([Ft({reflect:true})],to.prototype,"form",2),St([Ft({type:Boolean,reflect:true})],to.prototype,"required",2),St([Ft({attribute:"help-text"})],to.prototype,"helpText",2),St([Ot("disabled",{waitUntilFirstUpdate:true})],to.prototype,"handleDisabledChange",1),St([Ot(["checked","indeterminate"],{waitUntilFirstUpdate:true})],to.prototype,"handleStateChange",1),to.define("sl-checkbox");var eo=new WeakMap;function oo(t){let e=eo.get(t);return e||(e=window.getComputedStyle(t,null),eo.set(t,e)),e}function io(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1))return  false;if(t.hasAttribute("disabled"))return  false;if(t.closest("[inert]"))return  false;if("input"===e&&"radio"===t.getAttribute("type")&&!t.hasAttribute("checked"))return  false;if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:false,checkVisibilityCSS:true});const e=oo(t);return "hidden"!==e.visibility&&"none"!==e.display}(t))return  false;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return  true;if(t.hasAttribute("tabindex"))return  true;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return  true;return !!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=oo(t),{overflowY:o,overflowX:i}=e;return "scroll"===o||"scroll"===i||"auto"===o&&"auto"===i&&(t.scrollHeight>t.clientHeight&&"auto"===o||!(!(t.scrollWidth>t.clientWidth)||"auto"!==i))}(t)}function so(t){const e=new WeakMap,o=[];return function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]"))return;if(e.has(s))return;e.set(s,true),!o.includes(s)&&io(s)&&o.push(s),s instanceof HTMLSlotElement&&function(t,e){var o;return (null==(o=t.getRootNode({composed:true}))?undefined:o.host)!==e}(s,t)&&s.assignedElements({flatten:true}).forEach((t=>{i(t);})),null!==s.shadowRoot&&"open"===s.shadowRoot.mode&&i(s.shadowRoot);}for(const t of s.children)i(t);}(t),o.sort(((t,e)=>{const o=Number(t.getAttribute("tabindex"))||0;return (Number(e.getAttribute("tabindex"))||0)-o}))}function*ro(t=document.activeElement){null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*Tt(ro(t.shadowRoot.activeElement))));}var ao=[],no=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus();},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const o=[...ro()].pop();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=so(this.element);let s=i.findIndex((t=>t===o));this.previousFocus=this.currentFocus;const r="forward"===this.tabDirection?1:-1;for(;;){s+r>=i.length?s=0:s+r<0?s=i.length-1:s+=r,this.previousFocus=this.currentFocus;const o=i[s];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(o&&this.possiblyHasTabbableChildren(o))return;t.preventDefault(),this.currentFocus=o,null==(e=this.currentFocus)||e.focus({preventScroll:false});const a=[...ro()];if(a.includes(this.currentFocus)||!a.includes(this.previousFocus))break}setTimeout((()=>this.checkFocus()));},this.handleKeyUp=()=>{this.tabDirection="forward";},this.element=t,this.elementsWithTabbableControls=["iframe"];}activate(){ao.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp);}deactivate(){ao=ao.filter((t=>t!==this.element)),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp);}isActive(){return ao[ao.length-1]===this.element}activateExternal(){this.isExternalActivated=true;}deactivateExternal(){this.isExternalActivated=false;}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=so(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i="forward"===this.tabDirection?e:o;"function"==typeof(null==i?undefined:i.focus)&&(this.currentFocus=i,i.focus({preventScroll:false}));}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};var lo=new Set;function co(t){if(lo.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`);}}function ho(t){lo.delete(t),0===lo.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"));}function uo(t,e,o="vertical",i="smooth"){const s=function(t,e){return {top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),r=s.top+e.scrollTop,a=s.left+e.scrollLeft,n=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;"horizontal"!==o&&"both"!==o||(a<n?e.scrollTo({left:a,behavior:i}):a+t.clientWidth>l&&e.scrollTo({left:a-e.offsetWidth+t.clientWidth,behavior:i})),"vertical"!==o&&"both"!==o||(r<c?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>d&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}));}var po=r`
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
`,bo=class extends Mt{constructor(){super(...arguments),this.hasSlotController=new ve(this,"footer"),this.localize=new Te(this),this.modal=new no(this),this.open=false,this.label="",this.noHeader=false,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"));};}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),co(this));}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),ho(this),this.removeOpenListeners();}requestClose(t){if(this.emit("sl-request-close",{cancelable:true,detail:{source:t}}).defaultPrevented){const t=ue(this,"dialog.denyClose",{dir:this.localize.dir()});be(this.panel,t.keyframes,t.options);}else this.hide();}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown);}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown);}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),co(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([fe(this.dialog),fe(this.overlay)]),this.dialog.hidden=false,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:true}).defaultPrevented||(t?t.focus({preventScroll:true}):this.panel.focus({preventScroll:true})),t&&t.setAttribute("autofocus","");}));const e=ue(this,"dialog.show",{dir:this.localize.dir()}),o=ue(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,e.keyframes,e.options),be(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([fe(this.dialog),fe(this.overlay)]);const t=ue(this,"dialog.hide",{dir:this.localize.dir()}),e=ue(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=true;})),be(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=true;}))]),this.dialog.hidden=true,this.overlay.hidden=false,this.panel.hidden=false,ho(this);const o=this.originalTrigger;"function"==typeof(null==o?undefined:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide");}}async show(){if(!this.open)return this.open=true,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=false,pe(this,"sl-after-hide")}render(){return U`
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
          aria-label=${ae(this.noHeader?this.label:undefined)}
          aria-labelledby=${ae(this.noHeader?undefined:"title")}
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
`;function go(t){return t.charAt(0).toUpperCase()+t.slice(1)}var fo=class extends Mt{constructor(){super(...arguments),this.hasSlotController=new ve(this,"footer"),this.localize=new Te(this),this.modal=new no(this),this.open=false,this.label="",this.placement="end",this.contained=false,this.noHeader=false,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"));};}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),co(this)));}disconnectedCallback(){super.disconnectedCallback(),ho(this),this.removeOpenListeners();}requestClose(t){if(this.emit("sl-request-close",{cancelable:true,detail:{source:t}}).defaultPrevented){const t=ue(this,"drawer.denyClose",{dir:this.localize.dir()});be(this.panel,t.keyframes,t.options);}else this.hide();}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown);}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy();}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),co(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([fe(this.drawer),fe(this.overlay)]),this.drawer.hidden=false,requestAnimationFrame((()=>{this.emit("sl-initial-focus",{cancelable:true}).defaultPrevented||(t?t.focus({preventScroll:true}):this.panel.focus({preventScroll:true})),t&&t.setAttribute("autofocus","");}));const e=ue(this,`drawer.show${go(this.placement)}`,{dir:this.localize.dir()}),o=ue(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,e.keyframes,e.options),be(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ho(this)),await Promise.all([fe(this.drawer),fe(this.overlay)]);const t=ue(this,`drawer.hide${go(this.placement)}`,{dir:this.localize.dir()}),e=ue(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,e.keyframes,e.options).then((()=>{this.overlay.hidden=true;})),be(this.panel,t.keyframes,t.options).then((()=>{this.panel.hidden=true;}))]),this.drawer.hidden=true,this.overlay.hidden=false,this.panel.hidden=false;const o=this.originalTrigger;"function"==typeof(null==o?undefined:o.focus)&&setTimeout((()=>o.focus())),this.emit("sl-after-hide");}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),co(this)),this.open&&this.contained&&(this.modal.deactivate(),ho(this));}async show(){if(!this.open)return this.open=true,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=false,pe(this,"sl-after-hide")}render(){return U`
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
          aria-label=${ae(this.noHeader?this.label:undefined)}
          aria-labelledby=${ae(this.noHeader?undefined:"title")}
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
`;const wo=Math.min,_o=Math.max,xo=Math.round,ko=Math.floor,Co=t=>({x:t,y:t}),$o={left:"right",right:"left",bottom:"top",top:"bottom"},zo={start:"end",end:"start"};function So(t,e,o){return _o(t,wo(e,o))}function Ao(t,e){return "function"==typeof t?t(e):t}function Eo(t){return t.split("-")[0]}function To(t){return t.split("-")[1]}function Oo(t){return "x"===t?"y":"x"}function Lo(t){return "y"===t?"height":"width"}function Do(t){return ["top","bottom"].includes(Eo(t))?"y":"x"}function Po(t){return Oo(Do(t))}function Fo(t){return t.replace(/start|end/g,(t=>zo[t]))}function Bo(t){return t.replace(/left|right|bottom|top/g,(t=>$o[t]))}function Io(t){return "number"!=typeof t?function(t){return {top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Vo(t){const{x:e,y:o,width:i,height:s}=t;return {width:i,height:s,top:o,left:e,right:e+i,bottom:o+s,x:e,y:o}}function Ro(t,e,o){let{reference:i,floating:s}=t;const r=Do(e),a=Po(e),n=Lo(a),l=Eo(e),c="y"===r,d=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,u=i[n]/2-s[n]/2;let p;switch(l){case "top":p={x:d,y:i.y-s.height};break;case "bottom":p={x:d,y:i.y+i.height};break;case "right":p={x:i.x+i.width,y:h};break;case "left":p={x:i.x-s.width,y:h};break;default:p={x:i.x,y:i.y};}switch(To(e)){case "start":p[a]-=u*(o&&c?-1:1);break;case "end":p[a]+=u*(o&&c?-1:1);}return p}async function Mo(t,e){var o;undefined===e&&(e={});const{x:i,y:s,platform:r,rects:a,elements:n,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=false,padding:p=0}=Ao(e,t),b=Io(p),m=n[u?"floating"===h?"reference":"floating":h],g=Vo(await r.getClippingRect({element:null==(o=await(null==r.isElement?undefined:r.isElement(m)))||o?m:m.contextElement||await(null==r.getDocumentElement?undefined:r.getDocumentElement(n.floating)),boundary:c,rootBoundary:d,strategy:l})),f="floating"===h?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==r.getOffsetParent?undefined:r.getOffsetParent(n.floating)),y=await(null==r.isElement?undefined:r.isElement(v))&&await(null==r.getScale?undefined:r.getScale(v))||{x:1,y:1},w=Vo(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:f,offsetParent:v,strategy:l}):f);return {top:(g.top-w.top+b.top)/y.y,bottom:(w.bottom-g.bottom+b.bottom)/y.y,left:(g.left-w.left+b.left)/y.x,right:(w.right-g.right+b.right)/y.x}}function Uo(){return "undefined"!=typeof window}function Ho(t){return qo(t)?(t.nodeName||"").toLowerCase():"#document"}function No(t){var e;return (null==t||null==(e=t.ownerDocument)?undefined:e.defaultView)||window}function Wo(t){var e;return null==(e=(qo(t)?t.ownerDocument:t.document)||window.document)?undefined:e.documentElement}function qo(t){return !!Uo()&&(t instanceof Node||t instanceof No(t).Node)}function jo(t){return !!Uo()&&(t instanceof Element||t instanceof No(t).Element)}function Ko(t){return !!Uo()&&(t instanceof HTMLElement||t instanceof No(t).HTMLElement)}function Yo(t){return !(!Uo()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof No(t).ShadowRoot)}function Xo(t){const{overflow:e,overflowX:o,overflowY:i,display:s}=ei(t);return /auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(s)}function Zo(t){return ["table","td","th"].includes(Ho(t))}function Go(t){return [":popover-open",":modal"].some((e=>{try{return t.matches(e)}catch(t){return  false}}))}function Jo(t){const e=Qo(),o=jo(t)?ei(t):t;return ["transform","translate","scale","rotate","perspective"].some((t=>!!o[t]&&"none"!==o[t]))||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||["transform","translate","scale","rotate","perspective","filter"].some((t=>(o.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(o.contain||"").includes(t)))}function Qo(){return !("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ti(t){return ["html","body","#document"].includes(Ho(t))}function ei(t){return No(t).getComputedStyle(t)}function oi(t){return jo(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ii(t){if("html"===Ho(t))return t;const e=t.assignedSlot||t.parentNode||Yo(t)&&t.host||Wo(t);return Yo(e)?e.host:e}function si(t){const e=ii(t);return ti(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ko(e)&&Xo(e)?e:si(e)}function ri(t,e,o){var i;undefined===e&&(e=[]),undefined===o&&(o=true);const s=si(t),r=s===(null==(i=t.ownerDocument)?undefined:i.body),a=No(s);if(r){const t=ai(a);return e.concat(a,a.visualViewport||[],Xo(s)?s:[],t&&o?ri(t):[])}return e.concat(s,ri(s,[],o))}function ai(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ni(t){const e=ei(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Ko(t),r=s?t.offsetWidth:o,a=s?t.offsetHeight:i,n=xo(o)!==r||xo(i)!==a;return n&&(o=r,i=a),{width:o,height:i,$:n}}function li(t){return jo(t)?t:t.contextElement}function ci(t){const e=li(t);if(!Ko(e))return Co(1);const o=e.getBoundingClientRect(),{width:i,height:s,$:r}=ni(e);let a=(r?xo(o.width):o.width)/i,n=(r?xo(o.height):o.height)/s;return a&&Number.isFinite(a)||(a=1),n&&Number.isFinite(n)||(n=1),{x:a,y:n}}const di=Co(0);function hi(t){const e=No(t);return Qo()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:di}function ui(t,e,o,i){ undefined===e&&(e=false),undefined===o&&(o=false);const s=t.getBoundingClientRect(),r=li(t);let a=Co(1);e&&(i?jo(i)&&(a=ci(i)):a=ci(t));const n=function(t,e,o){return undefined===e&&(e=false),!(!o||e&&o!==No(t))&&e}(r,o,i)?hi(r):Co(0);let l=(s.left+n.x)/a.x,c=(s.top+n.y)/a.y,d=s.width/a.x,h=s.height/a.y;if(r){const t=No(r),e=i&&jo(i)?No(i):i;let o=t,s=ai(o);for(;s&&i&&e!==o;){const t=ci(s),e=s.getBoundingClientRect(),i=ei(s),r=e.left+(s.clientLeft+parseFloat(i.paddingLeft))*t.x,a=e.top+(s.clientTop+parseFloat(i.paddingTop))*t.y;l*=t.x,c*=t.y,d*=t.x,h*=t.y,l+=r,c+=a,o=No(s),s=ai(o);}}return Vo({width:d,height:h,x:l,y:c})}function pi(t,e){const o=oi(t).scrollLeft;return e?e.left+o:ui(Wo(t)).left+o}function bi(t,e,o){ undefined===o&&(o=false);const i=t.getBoundingClientRect();return {x:i.left+e.scrollLeft-(o?0:pi(t,i)),y:i.top+e.scrollTop}}function mi(t,e,o){let i;if("viewport"===e)i=function(t,e){const o=No(t),i=Wo(t),s=o.visualViewport;let r=i.clientWidth,a=i.clientHeight,n=0,l=0;if(s){r=s.width,a=s.height;const t=Qo();(!t||t&&"fixed"===e)&&(n=s.offsetLeft,l=s.offsetTop);}return {width:r,height:a,x:n,y:l}}(t,o);else if("document"===e)i=function(t){const e=Wo(t),o=oi(t),i=t.ownerDocument.body,s=_o(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=_o(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-o.scrollLeft+pi(t);const n=-o.scrollTop;return "rtl"===ei(i).direction&&(a+=_o(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:a,y:n}}(Wo(t));else if(jo(e))i=function(t,e){const o=ui(t,true,"fixed"===e),i=o.top+t.clientTop,s=o.left+t.clientLeft,r=Ko(t)?ci(t):Co(1);return {width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:s*r.x,y:i*r.y}}(e,o);else {const o=hi(t);i={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height};}return Vo(i)}function gi(t,e){const o=ii(t);return !(o===e||!jo(o)||ti(o))&&("fixed"===ei(o).position||gi(o,e))}function fi(t,e,o){const i=Ko(e),s=Wo(e),r="fixed"===o,a=ui(t,true,r,e);let n={scrollLeft:0,scrollTop:0};const l=Co(0);if(i||!i&&!r)if(("body"!==Ho(e)||Xo(s))&&(n=oi(e)),i){const t=ui(e,true,r,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop;}else s&&(l.x=pi(s));const c=!s||i||r?Co(0):bi(s,n);return {x:a.left+n.scrollLeft-l.x-c.x,y:a.top+n.scrollTop-l.y-c.y,width:a.width,height:a.height}}function vi(t){return "static"===ei(t).position}function yi(t,e){if(!Ko(t)||"fixed"===ei(t).position)return null;if(e)return e(t);let o=t.offsetParent;return Wo(t)===o&&(o=o.ownerDocument.body),o}function wi(t,e){const o=No(t);if(Go(t))return o;if(!Ko(t)){let e=ii(t);for(;e&&!ti(e);){if(jo(e)&&!vi(e))return e;e=ii(e);}return o}let i=yi(t,e);for(;i&&Zo(i)&&vi(i);)i=yi(i,e);return i&&ti(i)&&vi(i)&&!Jo(i)?o:i||function(t){let e=ii(t);for(;Ko(e)&&!ti(e);){if(Jo(e))return e;if(Go(e))return null;e=ii(e);}return null}(t)||o}const _i={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:i,strategy:s}=t;const r="fixed"===s,a=Wo(i),n=!!e&&Go(e.floating);if(i===a||n&&r)return o;let l={scrollLeft:0,scrollTop:0},c=Co(1);const d=Co(0),h=Ko(i);if((h||!h&&!r)&&(("body"!==Ho(i)||Xo(a))&&(l=oi(i)),Ko(i))){const t=ui(i);c=ci(i),d.x=t.x+i.clientLeft,d.y=t.y+i.clientTop;}const u=!a||h||r?Co(0):bi(a,l,true);return {width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+d.x+u.x,y:o.y*c.y-l.scrollTop*c.y+d.y+u.y}},getDocumentElement:Wo,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t;const r=[..."clippingAncestors"===o?Go(e)?[]:function(t,e){const o=e.get(t);if(o)return o;let i=ri(t,[],false).filter((t=>jo(t)&&"body"!==Ho(t))),s=null;const r="fixed"===ei(t).position;let a=r?ii(t):t;for(;jo(a)&&!ti(a);){const e=ei(a),o=Jo(a);o||"fixed"!==e.position||(s=null),(r?!o&&!s:!o&&"static"===e.position&&s&&["absolute","fixed"].includes(s.position)||Xo(a)&&!o&&gi(t,a))?i=i.filter((t=>t!==a)):s=e,a=ii(a);}return e.set(t,i),i}(e,this._c):[].concat(o),i],a=r[0],n=r.reduce(((t,o)=>{const i=mi(e,o,s);return t.top=_o(i.top,t.top),t.right=wo(i.right,t.right),t.bottom=wo(i.bottom,t.bottom),t.left=_o(i.left,t.left),t}),mi(e,a,s));return {width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},getOffsetParent:wi,getElementRects:async function(t){const e=this.getOffsetParent||wi,o=this.getDimensions,i=await o(t.floating);return {reference:fi(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:o}=ni(t);return {width:e,height:o}},getScale:ci,isElement:jo,isRTL:function(t){return "rtl"===ei(t).direction}};function xi(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ki(t,e,o,i){ undefined===i&&(i={});const{ancestorScroll:s=true,ancestorResize:r=true,elementResize:a="function"==typeof ResizeObserver,layoutShift:n="function"==typeof IntersectionObserver,animationFrame:l=false}=i,c=li(t),d=s||r?[...c?ri(c):[],...ri(e)]:[];d.forEach((t=>{s&&t.addEventListener("scroll",o,{passive:true}),r&&t.addEventListener("resize",o);}));const h=c&&n?function(t,e){let o,i=null;const s=Wo(t);function r(){var t;clearTimeout(o),null==(t=i)||t.disconnect(),i=null;}return function a(n,l){ undefined===n&&(n=false),undefined===l&&(l=1),r();const c=t.getBoundingClientRect(),{left:d,top:h,width:u,height:p}=c;if(n||e(),!u||!p)return;const b={rootMargin:-ko(h)+"px "+-ko(s.clientWidth-(d+u))+"px "+-ko(s.clientHeight-(h+p))+"px "+-ko(d)+"px",threshold:_o(0,wo(1,l))||1};let m=true;function g(e){const i=e[0].intersectionRatio;if(i!==l){if(!m)return a();i?a(false,i):o=setTimeout((()=>{a(false,1e-7);}),1e3);}1!==i||xi(c,t.getBoundingClientRect())||a(),m=false;}try{i=new IntersectionObserver(g,{...b,root:s.ownerDocument});}catch(t){i=new IntersectionObserver(g,b);}i.observe(t);}(true),r}(c,o):null;let u,p=-1,b=null;a&&(b=new ResizeObserver((t=>{let[i]=t;i&&i.target===c&&b&&(b.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var t;null==(t=b)||t.observe(e);}))),o();})),c&&!l&&b.observe(c),b.observe(e));let m=l?ui(t):null;return l&&function e(){const i=ui(t);m&&!xi(m,i)&&o();m=i,u=requestAnimationFrame(e);}(),o(),()=>{var t;d.forEach((t=>{s&&t.removeEventListener("scroll",o),r&&t.removeEventListener("resize",o);})),null==h||h(),null==(t=b)||t.disconnect(),b=null,l&&cancelAnimationFrame(u);}}const Ci=function(t){return undefined===t&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:s,y:r,placement:a,middlewareData:n}=e,l=await async function(t,e){const{placement:o,platform:i,elements:s}=t,r=await(null==i.isRTL?undefined:i.isRTL(s.floating)),a=Eo(o),n=To(o),l="y"===Do(o),c=["left","top"].includes(a)?-1:1,d=r&&l?-1:1,h=Ao(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:b}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return n&&"number"==typeof b&&(p="end"===n?-1*b:b),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}(e,t);return a===(null==(o=n.offset)?undefined:o.placement)&&null!=(i=n.arrow)&&i.alignmentOffset?{}:{x:s+l.x,y:r+l.y,data:{...l,placement:a}}}}},$i=function(t){return undefined===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:s}=e,{mainAxis:r=true,crossAxis:a=false,limiter:n={fn:t=>{let{x:e,y:o}=t;return {x:e,y:o}}},...l}=Ao(t,e),c={x:o,y:i},d=await Mo(e,l),h=Do(Eo(s)),u=Oo(h);let p=c[u],b=c[h];if(r){const t="y"===u?"bottom":"right";p=So(p+d["y"===u?"top":"left"],p,p-d[t]);}if(a){const t="y"===h?"bottom":"right";b=So(b+d["y"===h?"top":"left"],b,b-d[t]);}const m=n.fn({...e,[u]:p,[h]:b});return {...m,data:{x:m.x-o,y:m.y-i,enabled:{[u]:r,[h]:a}}}}}},zi=function(t){return undefined===t&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:r,rects:a,initialPlacement:n,platform:l,elements:c}=e,{mainAxis:d=true,crossAxis:h=true,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:m=true,...g}=Ao(t,e);if(null!=(o=r.arrow)&&o.alignmentOffset)return {};const f=Eo(s),v=Do(n),y=Eo(n)===n,w=await(null==l.isRTL?undefined:l.isRTL(c.floating)),_=u||(y||!m?[Bo(n)]:function(t){const e=Bo(t);return [Fo(t),e,Fo(e)]}(n)),x="none"!==b;!u&&x&&_.push(...function(t,e,o,i){const s=To(t);let r=function(t,e,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case "top":case "bottom":return o?e?s:i:e?i:s;case "left":case "right":return e?r:a;default:return []}}(Eo(t),"start"===o,i);return s&&(r=r.map((t=>t+"-"+s)),e&&(r=r.concat(r.map(Fo)))),r}(n,m,b,w));const k=[n,..._],C=await Mo(e,g),$=[];let z=(null==(i=r.flip)?undefined:i.overflows)||[];if(d&&$.push(C[f]),h){const t=function(t,e,o){ undefined===o&&(o=false);const i=To(t),s=Po(t),r=Lo(s);let a="x"===s?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Bo(a)),[a,Bo(a)]}(s,a,w);$.push(C[t[0]],C[t[1]]);}if(z=[...z,{placement:s,overflows:$}],!$.every((t=>t<=0))){var S,A;const t=((null==(S=r.flip)?undefined:S.index)||0)+1,e=k[t];if(e)return {data:{index:t,overflows:z},reset:{placement:e}};let o=null==(A=z.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?undefined:A.placement;if(!o)switch(p){case "bestFit":{var E;const t=null==(E=z.filter((t=>{if(x){const e=Do(t.placement);return e===v||"y"===e}return  true})).map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?undefined:E[0];t&&(o=t);break}case "initialPlacement":o=n;}if(s!==o)return {reset:{placement:o}}}return {}}}},Si=function(t){return undefined===t&&(t={}),{name:"size",options:t,async fn(e){var o,i;const{placement:s,rects:r,platform:a,elements:n}=e,{apply:l=()=>{},...c}=Ao(t,e),d=await Mo(e,c),h=Eo(s),u=To(s),p="y"===Do(s),{width:b,height:m}=r.floating;let g,f;"top"===h||"bottom"===h?(g=h,f=u===(await(null==a.isRTL?undefined:a.isRTL(n.floating))?"start":"end")?"left":"right"):(f=h,g="end"===u?"top":"bottom");const v=m-d.top-d.bottom,y=b-d.left-d.right,w=wo(m-d[g],v),_=wo(b-d[f],y),x=!e.middlewareData.shift;let k=w,C=_;if(null!=(o=e.middlewareData.shift)&&o.enabled.x&&(C=y),null!=(i=e.middlewareData.shift)&&i.enabled.y&&(k=v),x&&!u){const t=_o(d.left,0),e=_o(d.right,0),o=_o(d.top,0),i=_o(d.bottom,0);p?C=b-2*(0!==t||0!==e?t+e:_o(d.left,d.right)):k=m-2*(0!==o||0!==i?o+i:_o(d.top,d.bottom));}await l({...e,availableWidth:C,availableHeight:k});const $=await a.getDimensions(n.floating);return b!==$.width||m!==$.height?{reset:{rects:true}}:{}}}},Ai=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:s,rects:r,platform:a,elements:n,middlewareData:l}=e,{element:c,padding:d=0}=Ao(t,e)||{};if(null==c)return {};const h=Io(d),u={x:o,y:i},p=Po(s),b=Lo(p),m=await a.getDimensions(c),g="y"===p,f=g?"top":"left",v=g?"bottom":"right",y=g?"clientHeight":"clientWidth",w=r.reference[b]+r.reference[p]-u[p]-r.floating[b],_=u[p]-r.reference[p],x=await(null==a.getOffsetParent?undefined:a.getOffsetParent(c));let k=x?x[y]:0;k&&await(null==a.isElement?undefined:a.isElement(x))||(k=n.floating[y]||r.floating[b]);const C=w/2-_/2,$=k/2-m[b]/2-1,z=wo(h[f],$),S=wo(h[v],$),A=z,E=k-m[b]-S,T=k/2-m[b]/2+C,O=So(A,T,E),L=!l.arrow&&null!=To(s)&&T!==O&&r.reference[b]/2-(T<A?z:S)-m[b]/2<0,D=L?T<A?T-A:T-E:0;return {[p]:u[p]+D,data:{[p]:O,centerOffset:T-O-D,...L&&{alignmentOffset:D}},reset:L}}}),Ei=(t,e,o)=>{const i=new Map,s={platform:_i,...o},r={...s.platform,_c:i};return (async(t,e,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:a}=o,n=r.filter(Boolean),l=await(null==a.isRTL?undefined:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:h}=Ro(c,i,l),u=i,p={},b=0;for(let o=0;o<n.length;o++){const{name:r,fn:m}=n[o],{x:g,y:f,data:v,reset:y}=await m({x:d,y:h,initialPlacement:i,placement:u,strategy:s,middlewareData:p,rects:c,platform:a,elements:{reference:t,floating:e}});d=null!=g?g:d,h=null!=f?f:h,p={...p,[r]:{...p[r],...v}},y&&b<=50&&(b++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=true===y.rects?await a.getElementRects({reference:t,floating:e,strategy:s}):y.rects),({x:d,y:h}=Ro(c,u,l))),o=-1);}return {x:d,y:h,placement:u,strategy:s,middlewareData:p}})(t,e,{...s,platform:r})};function Ti(t){return function(t){for(let e=t;e;e=Oi(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=Oi(t);e;e=Oi(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||Jo(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function Oi(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var Li=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this),this.active=false,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=false,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=false,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=false,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=false,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let o=0,i=0,s=0,r=0,a=0,n=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(o=t.left,i=t.bottom,s=t.right,r=t.bottom,a=e.left,n=e.top,l=e.right,c=e.top):(o=e.left,i=e.bottom,s=e.right,r=e.bottom,a=t.left,n=t.top,l=t.right,c=t.top):t.left<e.left?(o=t.right,i=t.top,s=e.left,r=e.top,a=t.right,n=t.bottom,l=e.left,c=e.bottom):(o=e.right,i=e.top,s=t.left,r=t.top,a=e.right,n=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`);}};}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start();}disconnectedCallback(){super.disconnectedCallback(),this.stop();}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition());}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor);}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:true})[0]),this.anchorEl&&this.active&&this.start();}start(){this.anchorEl&&this.active&&(this.cleanup=ki(this.anchorEl,this.popup,(()=>{this.reposition();})));}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=undefined,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t();}))}reposition(){if(!this.active||!this.anchorEl)return;const t=[Ci({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Si({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:"";}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(zi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push($i({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Si({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width");}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ai({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>_i.getOffsetParent(t,Ti):_i.getOffsetParent;Ei(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:zt($t({},_i),{getOffsetParent:e})}).then((({x:t,y:e,middlewareData:o,placement:i})=>{const s="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=o.arrow.x,e=o.arrow.y;let i="",a="",n="",l="";if("start"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=s?o:"",l=s?"":o;}else if("end"===this.arrowPlacement){const o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=s?"":o,l=s?o:"",n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";}else "center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",i="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:n,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"});}})),requestAnimationFrame((()=>this.updateHoverBridge())),this.emit("sl-reposition");}render(){return U`
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
    `}};Li.styles=[Lt,yo],St([Vt(".popup")],Li.prototype,"popup",2),St([Vt(".popup__arrow")],Li.prototype,"arrowEl",2),St([Ft()],Li.prototype,"anchor",2),St([Ft({type:Boolean,reflect:true})],Li.prototype,"active",2),St([Ft({reflect:true})],Li.prototype,"placement",2),St([Ft({reflect:true})],Li.prototype,"strategy",2),St([Ft({type:Number})],Li.prototype,"distance",2),St([Ft({type:Number})],Li.prototype,"skidding",2),St([Ft({type:Boolean})],Li.prototype,"arrow",2),St([Ft({attribute:"arrow-placement"})],Li.prototype,"arrowPlacement",2),St([Ft({attribute:"arrow-padding",type:Number})],Li.prototype,"arrowPadding",2),St([Ft({type:Boolean})],Li.prototype,"flip",2),St([Ft({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],Li.prototype,"flipFallbackPlacements",2),St([Ft({attribute:"flip-fallback-strategy"})],Li.prototype,"flipFallbackStrategy",2),St([Ft({type:Object})],Li.prototype,"flipBoundary",2),St([Ft({attribute:"flip-padding",type:Number})],Li.prototype,"flipPadding",2),St([Ft({type:Boolean})],Li.prototype,"shift",2),St([Ft({type:Object})],Li.prototype,"shiftBoundary",2),St([Ft({attribute:"shift-padding",type:Number})],Li.prototype,"shiftPadding",2),St([Ft({attribute:"auto-size"})],Li.prototype,"autoSize",2),St([Ft()],Li.prototype,"sync",2),St([Ft({type:Object})],Li.prototype,"autoSizeBoundary",2),St([Ft({attribute:"auto-size-padding",type:Number})],Li.prototype,"autoSizePadding",2),St([Ft({attribute:"hover-bridge",type:Boolean})],Li.prototype,"hoverBridge",2);var Di=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this),this.open=false,this.placement="bottom-start",this.disabled=false,this.stayOpenOnSelect=false,this.distance=0,this.skidding=0,this.hoist=false,this.sync=undefined,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger());},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?undefined:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();setTimeout((()=>{var t,e,o;const i=(null==(t=this.containingElement)?undefined:t.getRootNode())instanceof ShadowRoot?null==(o=null==(e=document.activeElement)?undefined:e.shadowRoot)?undefined:o.activeElement:document.activeElement;this.containingElement&&(null==i?undefined:i.closest(this.containingElement.tagName.toLowerCase()))===this.containingElement||this.hide();}));}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide();},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger());};}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this);}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=true);}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide();}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:true})[0];"function"==typeof(null==t?undefined:t.focus)&&t.focus();}getMenu(){return this.panel.assignedElements({flatten:true}).find((t=>"sl-menu"===t.tagName.toLowerCase()))}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger());}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then((()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(i),i.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(s),s.focus());})));}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault();}handleTriggerSlotChange(){this.updateAccessibleTrigger();}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:true}).find((t=>function(t){var e,o;const i=so(t);return {start:null!=(e=i[0])?e:null,end:null!=(o=i[i.length-1])?o:null}}(t).start));let e;if(t){switch(t.tagName.toLowerCase()){case "sl-button":case "sl-icon-button":e=t.button;break;default:e=t;}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false");}}async show(){if(!this.open)return this.open=true,pe(this,"sl-after-show")}async hide(){if(this.open)return this.open=false,pe(this,"sl-after-hide")}reposition(){this.popup.reposition();}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger();}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown);}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy();}async handleOpenChange(){if(this.disabled)this.open=false;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await fe(this),this.panel.hidden=false,this.popup.active=true;const{keyframes:t,options:e}=ue(this,"dropdown.show",{dir:this.localize.dir()});await be(this.popup.popup,t,e),this.emit("sl-after-show");}else {this.emit("sl-hide"),this.removeOpenListeners(),await fe(this);const{keyframes:t,options:e}=ue(this,"dropdown.hide",{dir:this.localize.dir()});await be(this.popup.popup,t,e),this.panel.hidden=true,this.popup.active=false,this.emit("sl-after-hide");}}render(){return U`
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
        sync=${ae(this.sync?this.sync:undefined)}
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
`,Fi=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ve(this,"help-text","label"),this.localize=new Te(this),this.hasFocus=false,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=false,this.pill=false,this.label="",this.helpText="",this.clearable=false,this.disabled=false,this.placeholder="",this.readonly=false,this.passwordToggle=false,this.passwordVisible=false,this.noSpinButtons=false,this.form="",this.required=false,this.spellcheck=true;}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?undefined:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value;}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?undefined:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value;}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleChange(){this.value=this.input.value,this.emit("sl-change");}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus();}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout((()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit();}));}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible;}handleDisabledChange(){this.formControlController.setValidity(this.disabled);}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity();}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity();}focus(t){this.input.focus(t);}blur(){this.input.blur();}select(){this.input.select();}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o);}setRangeText(t,e,o,i="preserve"){const s=null!=e?e:this.input.selectionStart,r=null!=o?o:this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value);}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker();}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value);}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value);}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=!!this.label||!!t,i=!!this.helpText||!!e,s=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return U`
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
`,Ii=class extends Mt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu");}handleClick(t){const e=["menuitem","menuitemcheckbox"],o=t.composedPath(),i=o.find((t=>{var o;return e.includes((null==(o=null==t?undefined:t.getAttribute)?undefined:o.call(t,"role"))||"")}));if(!i)return;if(o.find((t=>{var e;return "menu"===(null==(e=null==t?undefined:t.getAttribute)?undefined:e.call(t,"role"))}))!==this)return;const s=i;"checkbox"===s.type&&(s.checked=!s.checked),this.emit("sl-select",{detail:{item:s}});}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click();}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?i++:"ArrowUp"===t.key?i--:"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus());}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e);}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0]);}isMenuItem(t){var e;return "sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return [...this.defaultSlot.assignedElements({flatten:true})].filter((t=>!(t.inert||!this.isMenuItem(t))))}getCurrentItem(){return this.getAllItems().find((t=>"0"===t.getAttribute("tabindex")))}setCurrentItem(t){this.getAllItems().forEach((e=>{e.setAttribute("tabindex",e===t?"0":"-1");}));}render(){return U`
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
 */;const Ri=(t,e)=>{const o=t._$AN;if(undefined===o)return  false;for(const t of o)t._$AO?.(e,false),Ri(t,e);return  true},Mi=t=>{let e,o;do{if(undefined===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e;}while(0===o?.size)},Ui=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(undefined===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Wi(e);}};function Hi(t){ undefined!==this._$AN?(Mi(this),this._$AM=t,Ui(this)):this._$AM=t;}function Ni(t,e=false,o=0){const i=this._$AH,s=this._$AN;if(undefined!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=o;t<i.length;t++)Ri(i[t],false),Mi(i[t]);else null!=i&&(Ri(i,false),Mi(i));else Ri(this,t);}const Wi=t=>{t.type==Xt&&(t._$AP??=Ni,t._$AQ??=Hi);};class qi extends Qt{constructor(){super(...arguments),this._$AN=undefined;}_$AT(t,e,o){super._$AT(t,e,o),Ui(this),this.isConnected=t._$AU;}_$AO(t,e=true){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Ri(this,t),Mi(this));}setValue(t){if(Ut(this._$Ct))this._$Ct._$AI(t,this);else {const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0);}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ji{}const Ki=new WeakMap,Yi=Jt(class extends qi{render(t){return N}update(t,[e]){const o=e!==this.Y;return o&&undefined!==this.Y&&this.rt(undefined),(o||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),N}rt(t){if(this.isConnected||(t=undefined),"function"==typeof this.Y){const e=this.ht??globalThis;let o=Ki.get(e);undefined===o&&(o=new WeakMap,Ki.set(e,o)),undefined!==o.get(this.Y)&&this.Y.call(this.ht,undefined),o.set(this.Y,t),undefined!==t&&this.Y.call(this.ht,t);}else this.Y.value=t;}get lt(){return "function"==typeof this.Y?Ki.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(undefined);}reconnected(){this.rt(this.ct);}});var Xi=class{constructor(t,e){this.popupRef=new ji,this.enableSubmenuTimer=-1,this.isConnected=false,this.isPopupConnected=false,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`);},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu();},this.handleKeyDown=t=>{switch(t.key){case "Escape":case "Tab":this.disableSubmenu();break;case "ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case "ArrowRight":case "Enter":case " ":this.handleSubmenuEntry(t);}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?undefined:e.startsWith("menuitem")))&&this.disableSubmenu();},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu();},this.handlePopupMouseover=t=>{t.stopPropagation();},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?undefined:t.assignedElements({flatten:true}).filter((t=>"sl-menu"===t.localName))[0],o="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:i,top:s,width:r,height:a}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?i+r:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${s+a}px`);},(this.host=t).addController(this),this.hasSlotController=e;}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners();}hostDisconnected(){this.removeListeners();}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners();}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=true),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=true);}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=false),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=false);}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let o=null;for(const t of e.assignedElements())if(o=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==o.length)break;if(o&&0!==o.length){o[0].setAttribute("tabindex","0");for(let t=1;t!==o.length;++t)o[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(false),this.host.updateComplete.then((()=>{o[0]instanceof HTMLElement&&o[0].focus();})),this.host.requestUpdate()));}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate());}enableSubmenu(t=true){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(true);}),this.submenuOpenDelay)):this.setSubmenuState(true);}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(false);}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?undefined:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce(((t,o)=>{var i;const s=null!=(i=e.get(o))?i:new CSSUnitValue(0,"px");return t-(s instanceof CSSUnitValue?s:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=o;}isExpanded(){return !!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?U`
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
    `:U` <slot name="submenu" hidden></slot> `}},Zi=class extends Mt{constructor(){super(...arguments),this.localize=new Te(this),this.type="normal",this.checked=false,this.value="",this.loading=false,this.disabled=false,this.hasSlotController=new ve(this,"submenu"),this.submenuController=new Xi(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation());},this.handleMouseOver=t=>{this.focus(),t.stopPropagation();};}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver);}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver);}handleDefaultSlotChange(){const t=this.getTextLabel();undefined!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:true,composed:false,cancelable:false})):this.cachedTextLabel=t;}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=false,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked");}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false");}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"));}getTextLabel(){return function(t){if(!t)return "";const e=t.assignedNodes({flatten:true});let o="";return [...e].forEach((t=>{t.nodeType===Node.TEXT_NODE&&(o+=t.textContent);})),o}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return U`
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
 */;class os extends Qt{constructor(t){if(super(t),this.it=N,t.type!==Xt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===N||null==t)return this._t=undefined,this.it=t;if(t===H)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}os.directiveName="unsafeHTML",os.resultType=1;const is=Jt(os);var ss=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ve(this,"help-text","label"),this.localize=new Te(this),this.typeToSelectString="",this.hasFocus=false,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=false,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=false,this.maxOptionsVisible=3,this.disabled=false,this.clearable=false,this.open=false,this.hoist=false,this.filled=false,this.pill=false,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=false,this.getTag=t=>U`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide();},this.handleDocumentKeyDown=t=>{const e=t.target,o=null!==e.closest(".select__clear"),i=null!==e.closest("sl-icon-button");if(!o&&!i){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:true})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=true,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:true})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),o=e.indexOf(this.currentOption);let i=Math.max(0,o);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(i=o+1,i>e.length-1&&(i=0)):"ArrowUp"===t.key?(i=o-1,i<0&&(i=e.length-1)):"Home"===t.key?i=0:"End"===t.key&&(i=e.length-1),this.setCurrentOption(e[i]);}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show();}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout((()=>this.typeToSelectString=""),1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e){if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide();};}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=true,this._value=t);}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.handleDefaultSlotChange();})),this.open=false;}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:true}));});}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy();}handleFocus(){this.hasFocus=true,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus");}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleLabelClick(){this.displayInput.focus();}handleComboboxMouseDown(t){const e=t.composedPath().some((t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase()));this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:true}),this.open=!this.open);}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t));}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=true,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:true}),this.updateComplete.then((()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change");})));}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault();}handleOptionClick(t){const e=t.target.closest("sl-option"),o=this.value;e&&!e.disabled&&(this.valueHasChanged=true,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then((()=>this.displayInput.focus({preventScroll:true}))),this.value!==o&&this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:true})));}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then((()=>this.handleDefaultSlotChange()));const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,o=Array.isArray(e)?e:[e],i=[];t.forEach((t=>i.push(t.value))),this.setSelectedOptions(t.filter((t=>o.includes(t.value))));}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=true,this.disabled||(this.toggleOptionSelection(e,false),this.updateComplete.then((()=>{this.emit("sl-input"),this.emit("sl-change");})));}getAllOptions(){return [...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach((t=>{t.current=false,t.tabIndex=-1;})),t&&(this.currentOption=t,t.current=true,t.tabIndex=0,t.focus());}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach((t=>t.selected=false)),o.length&&o.forEach((t=>t.selected=true)),this.selectionChanged();}toggleOptionSelection(t,e){t.selected=true===e||false===e?e:!t.selected,this.selectionChanged();}selectionChanged(){var t,e,o;const i=this.getAllOptions();this.selectedOptions=i.filter((t=>t.selected));const s=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map((t=>t.value)),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else {const i=this.selectedOptions[0];this.value=null!=(t=null==i?undefined:i.value)?t:"",this.displayLabel=null!=(o=null==(e=null==i?undefined:i.getTextLabel)?undefined:e.call(i))?o:"";}this.valueHasChanged=s,this.updateComplete.then((()=>{this.formControlController.updateValidity();}));}get tags(){return this.selectedOptions.map(((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return U`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
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
`,as=class extends Mt{constructor(){super(...arguments),this.formControlController=new Ne(this,{value:t=>t.checked?t.value||"on":undefined,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new ve(this,"help-text"),this.hasFocus=false,this.title="",this.name="",this.size="medium",this.disabled=false,this.checked=false,this.defaultChecked=false,this.form="",this.required=false,this.helpText="";}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity();}handleBlur(){this.hasFocus=false,this.emit("sl-blur");}handleInput(){this.emit("sl-input");}handleInvalid(t){this.formControlController.setValidity(false),this.formControlController.emitInvalidEvent(t);}handleClick(){this.checked=!this.checked,this.emit("sl-change");}handleFocus(){this.hasFocus=true,this.emit("sl-focus");}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=false,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=true,this.emit("sl-change"),this.emit("sl-input"));}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity();}handleDisabledChange(){this.formControlController.setValidity(true);}click(){this.input.click();}focus(t){this.input.focus(t);}blur(){this.input.blur();}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity();}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return U`
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
`,us=class extends Mt{constructor(){super(...arguments),this.observedElements=[],this.disabled=false;}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((t=>{this.emit("sl-resize",{detail:{entries:t}});})),this.disabled||this.startObserver();}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver();}handleSlotChange(){this.disabled||this.startObserver();}startObserver(){const t=this.shadowRoot.querySelector("slot");if(null!==t){const e=t.assignedElements({flatten:true});this.observedElements.forEach((t=>this.resizeObserver.unobserve(t))),this.observedElements=[],e.forEach((t=>{this.resizeObserver.observe(t),this.observedElements.push(t);}));}}stopObserver(){this.resizeObserver.disconnect();}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver();}render(){return U` <slot @slotchange=${this.handleSlotChange}></slot> `}};us.styles=[Lt,hs],St([Ft({type:Boolean,reflect:true})],us.prototype,"disabled",2),St([Ot("disabled",{waitUntilFirstUpdate:true})],us.prototype,"handleDisabledChange",1);var ps=class extends Mt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Te(this),this.hasScrollControls=false,this.shouldHideScrollStartButton=false,this.shouldHideScrollEndButton=false,this.placement="top",this.activation="auto",this.noScrollControls=false,this.fixedScrollControls=false,this.scrollOffset=1;}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.repositionIndicator(),this.updateScrollControls();})),this.mutationObserver=new MutationObserver((t=>{if(t.some((t=>!["aria-labelledby","aria-controls"].includes(t.attributeName)))&&setTimeout((()=>this.setAriaLabels())),t.some((t=>"disabled"===t.attributeName)))this.syncTabsAndPanels();else if(t.some((t=>"active"===t.attributeName))){const e=t.filter((t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase())).map((t=>t.target)),o=e.find((t=>t.active));o&&this.setActiveTab(o);}})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:true,childList:true,subtree:true}),this.resizeObserver.observe(this.nav),t.then((()=>{new IntersectionObserver(((t,e)=>{var o;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(o=this.getActiveTab())?o:this.tabs[0],{emitEvents:false}),e.unobserve(t[0].target));})).observe(this.tabGroup);}));}));}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav));}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return [...this.body.assignedElements()].filter((t=>"sl-tab-panel"===t.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((t=>t.active))}handleClick(t){const e=t.target.closest("sl-tab");(null==e?undefined:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"});}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?undefined:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=this.tabs.find((t=>t.matches(":focus"))),o="rtl"===this.localize.dir();let i=null;if("sl-tab"===(null==e?undefined:e.tagName.toLowerCase())){if("Home"===t.key)i=this.focusableTabs[0];else if("End"===t.key)i=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex((t=>t===e));i=this.findNextFocusableTab(t,"backward");}else if(["top","bottom"].includes(this.placement)&&t.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex((t=>t===e));i=this.findNextFocusableTab(t,"forward");}if(!i)return;i.tabIndex=0,i.focus({preventScroll:true}),"auto"===this.activation?this.setActiveTab(i,{scrollBehavior:"smooth"}):this.tabs.forEach((t=>{t.tabIndex=t===i?0:-1;})),["top","bottom"].includes(this.placement)&&uo(i,this.nav,"horizontal"),t.preventDefault();}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"});}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"});}setActiveTab(t,e){if(e=$t({emitEvents:true,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach((t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1;})),this.panels.forEach((t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?undefined:e.panel)})),this.syncIndicator(),["top","bottom"].includes(this.placement)&&uo(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}));}}setAriaLabels(){this.tabs.forEach((t=>{const e=this.panels.find((e=>e.name===t.panel));e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")));}));}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,i="rtl"===this.localize.dir(),s=this.getAllTabs(),r=s.slice(0,s.indexOf(t)).reduce(((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight})),{left:0,top:0});switch(this.placement){case "top":case "bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?-1*r.left+"px":`${r.left}px`;break;case "start":case "end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${r.top}px`;}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((t=>!t.disabled)),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then((()=>this.updateScrollControls()));}findNextFocusableTab(t,e){let o=null;const i="forward"===e?1:-1;let s=t+i;for(;t<this.tabs.length;){if(o=this.tabs[s]||null,null===o){o="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;s+=i;}return o}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd());}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return "rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=false:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons();}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none";}show(t){const e=this.tabs.find((e=>e.panel===t));e&&this.setActiveTab(e,{scrollBehavior:"smooth"});}render(){const t="rtl"===this.localize.dir();return U`
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

// Add new components to log here:
const ComponentType = {
    DEBUG: 'debug',
    NOTIFICATION: 'notification',
    HEARTBEAT: 'heartbeat',
    WATCHDOG: 'socket-watchdog',
    PING_PONG: 'socket-ping-pong',
    SOCKET: 'socket',
    HW_IMAGE_SECTION: 'hw-image-section',
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
    TX_QR: 'tx-qr',
    TX_SLIDER: 'tx-slider',
    TX_STRING: 'tx-string'
};

// And here:
const componentLabels = {
    [ComponentType.DEBUG]: ComponentType.DEBUG,
    [ComponentType.NOTIFICATION]: ComponentType.NOTIFICATION,
    [ComponentType.HEARTBEAT]: ComponentType.HEARTBEAT,
    [ComponentType.WATCHDOG]: ComponentType.WATCHDOG,
    [ComponentType.PING_PONG]: ComponentType.PING_PONG,
    [ComponentType.SOCKET]: ComponentType.SOCKET,
    [ComponentType.HW_IMAGE_SECTION]: ComponentType.HW_IMAGE_SECTION,
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
    [ComponentType.TX_QR]: ComponentType.TX_QR,
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
            
            <sl-icon-button name="bug-fill" id="debug-toggle" style="font-size: 1.1rem; opacity: 0.6;"></sl-icon-button>
            
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
        
        const checkboxes = this.shadowRoot.querySelectorAll('#logging-components sl-checkbox');
        Logger.log(ComponentType.DEBUG, 'Found checkboxes for loading:', checkboxes.length);
        
        if (savedSettings) {
            try {
                const settings = new Set(JSON.parse(savedSettings));
                checkboxes.forEach(checkbox => {
                    checkbox.checked = settings.has(checkbox.value);
                });
            } catch (error) {
                Logger.error(ComponentType.DEBUG, 'Error parsing saved settings:', error);
                // If there's an error parsing, enable all components by default
                checkboxes.forEach(checkbox => checkbox.checked = true);
                this.shadowRoot.getElementById('toggle-all').checked = true;
            }
        } else {
            // If no saved settings exist, enable all components by default
            checkboxes.forEach(checkbox => checkbox.checked = true);
            this.shadowRoot.getElementById('toggle-all').checked = true;
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
                // If there's an error parsing, enable all components by default
                this.#enabledComponents = new Set(Object.values(ComponentType));
            }
        } else {
            // If no saved settings exist, enable all components by default
            this.#enabledComponents = new Set(Object.values(ComponentType));
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
		
		// Log the current state and elapsed time regularly
		Logger.log(ComponentType.WATCHDOG, 
			`Watchdog check - State: ${this.state}, Elapsed time: ${elapsed}ms, TTL: ${this.ttl}ms`
		);
	
		if (this.state === CONNECTING || this.state === RECONNECT) {
			Logger.warn(ComponentType.WATCHDOG, "CONNECTING");
			this.state = WAITING;
			this.heartbeat();
		}
		else if (this.state === FAILED) {
			Logger.error(ComponentType.WATCHDOG, "FAILED");
			this.reconnect();
		}
		else if (this.state === WAITING && elapsed > 3*this.ttl) {
			Logger.warn(ComponentType.WATCHDOG, 
				`Connection stale - Last heartbeat: ${elapsed}ms ago, Threshold: ${3*this.ttl}ms`
			);
			window.warn("Connection stale, attempting to reconnect");
			this.disable();
			this.disconnect();
			Logger.error(ComponentType.SOCKET, "Socket is disconnected. Will close the socket");
			this.interval = setInterval(() => {
				Logger.error(ComponentType.WATCHDOG, "Trying to reconnect after disconnection");
				this.reconnect();    
			}, 5000);
		}
		else if (elapsed > this.ttl) {
			Logger.log(ComponentType.WATCHDOG, 
				`TTL exceeded - Last heartbeat: ${elapsed}ms ago, Threshold: ${this.ttl}ms`
			);
			this.sendMessage("heartbeat", false);
			this.state = WAITING;
		}
	
		if (this.state === CONNECTED) {
			this.enable();
		}
	}
	
	disable() {
		// Disable interface
		if (!this.isDisabled) {
			// Call disable on all targets, not just numeric ones
			for (let key in this.targets) {
				// Check if the target is a function that can handle "disable"
				if (typeof this.targets[key] === 'function') {
					try {
						this.targets[key]("disable");
					} catch (e) {
						// Some targets might not handle the "disable" string command
						// Silent fail for targets that don't implement the expected interface
					}
				}
			}

			window.warn("Connection lost, interface disabled");
			
			// Also notify all ConnectedElement instances
			ConnectedElement.instances.forEach(instance => {
				if (instance && typeof instance.disable === 'function') {
					instance.disable();
				}
			});
		}
		// Update state
		this.isDisabled = true;
	}
	
	enable() {
		// Enable interface
		if (this.isDisabled) {
			// Call enable on all targets, not just numeric ones
			for (let key in this.targets) {
				// Check if the target is a function that can handle "enable"
				if (typeof this.targets[key] === 'function') {
					try {
						this.targets[key]("enable");
					} catch (e) {
						// Silent fail for targets that don't implement the expected interface
					}
				}
			}

			window.success("Connection restored");
			
			// Also notify all ConnectedElement instances
			ConnectedElement.instances.forEach(instance => {
				if (instance && typeof instance.enable === 'function') {
					instance.enable();
				}
			});
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
	connect(url, callback=()=>{}) {
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
			
			// Add protocol ping/pong logging
			this.websocket.addEventListener('ping', (event) => {
				Logger.log(ComponentType.PING_PONG, 'Protocol PING received from server');
				this.lrh = Date.now(); // Update last received heartbeat
			});
	
			this.websocket.addEventListener('pong', (event) => {
				Logger.log(ComponentType.PING_PONG, 'Protocol PONG received from server');
				this.lrh = Date.now(); // Update last received heartbeat
			});
	
			this.websocket.onerror = function(event) {
				Logger.error(ComponentType.SOCKET, "WebSocket error observed", event);
			};
		} catch (e) {
			Logger.error(ComponentType.SOCKET, "Error while trying to connect: ", e);
			this.state = FAILED;
		}
		return this;
	}

	/**
	 * Reconnects websocket on timeout
	 *
	 * Keeps the interval, closes the websocket and reopens a new one
	 */
	reconnect(){
		if (this.retries > MAX_TRIES) {
			this.disconnect();
			window.error("Connection failed after maximum retry attempts");
		}
		else {
			if (this.websocket)
				this.websocket.close();
			window.notify(`Attempting to reconnect (try ${this.retries}/${MAX_TRIES})`);
			this.connect(this.url, this.connectCallback);
			this.state = RECONNECT;
			this.retries += 1;
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
		window.notify("Websocket disconnected");
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
			window.notify(`Retrieved pending states for ${hash}`);
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
			// Log all heartbeat-related messages
			if (data.heartbeat !== undefined) {
				Logger.log(ComponentType.HEARTBEAT, 
					`Application heartbeat received - Value: ${data.heartbeat}, Time: ${new Date().toISOString()}`
				);
				this.lrh = Date.now();
			}
		} catch (e) {
			Logger.error(ComponentType.SOCKET, "Error while validating in Socket.onMessage", e);
		}
		let keys = Object.keys(data);
		let key = keys[0];
		// 2. Validate target
		if (key !== "states" && !this.targets.hasOwnProperty(keys)) {
			Logger.warn(ComponentType.SOCKET, Object.keys(this.targets));
			Logger.error(ComponentType.SOCKET, "Functor", "No target in socket for:" + key );
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
			return
		}
		// If not heartbeat, show data
		if (key !== "heartbeat"){
			Logger.log(ComponentType.SOCKET, "SOCKET SENDING:\n", data);
		}
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
			window.warn("Websocket closed normally with code: \n" + event.code);
		} else {
			Logger.warn(ComponentType.SOCKET, this.state);
			Logger.error(ComponentType.SOCKET, "Websocket closed abnormally with code "+ event.code);
			window.error(`Websocket disconnected with error code: ${event.code}`);
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
        // Special handling for socket-level enable/disable commands
        // These are treated as overrides that don't change the descriptor
        if (val === "disable") {
            this._socketDisabled = true;
            this._applyDisabledState();
            return;
        } else if (val === "enable") {
            this._socketDisabled = false;
            this._applyDisabledState();
            return;
        }

        if (this._descriptor.hash) {
            Logger.log(ComponentType.CONNECTED_ELEMENT, `Updating element with hash: ${this._descriptor.hash}, value:`, val, 'descriptor:', descriptor);
        }

        if (val !== undefined) {
            this.value = val;
        }

        if (descriptor) {
            this.descriptor = descriptor;
            // Descriptor changes will trigger _applyDisabledState via the descriptor setter
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

    /**
     * Internal method to determine if component should be disabled
     * Prioritizes socket state over descriptor
     */
    _shouldBeDisabled() {
        // Socket disabled state overrides descriptor
        if (this._socketDisabled === true) {
            return true;
        }
        // Otherwise use descriptor value
        return this._descriptor.disable === true;
    }

    /**
     * Apply the correct disabled state based on socket state and descriptor
     */
    _applyDisabledState() {
        if (this._socketDisabled) {
            // Disabled by socket - use red overlay
            this._updateOverlayClass('overlay-red');
        } else if (this._descriptor.disable === true) {
            // Disabled by descriptor - use gray overlay
            this._updateOverlayClass('overlay-gray');
        } else {
            // Not disabled - remove any overlay
            this._removeDisabledOverlay();
        }
    }

    /**
     * Updates overlay with the appropriate class without creating duplicates
     */
    _updateOverlayClass(desiredClass) {
        if (!this.isConnected) return;

        const target = this.shadowRoot || this;
        const container = target.querySelector('.card') || this;

        // Ensure container has relative positioning
        container.style.position = 'relative';

        // Check if overlay already exists
        let overlay = container.querySelector('.overlay');

        if (!overlay) {
            // Create new overlay if none exists
            overlay = document.createElement('div');
            overlay.classList.add('overlay');
            container.appendChild(overlay);
        }

        // Update class - remove any existing overlay classes first
        overlay.classList.remove('overlay-red', 'overlay-gray');
        overlay.classList.add(desiredClass);

        Logger.log(ComponentType.CONNECTED_ELEMENT,
            `Overlay updated to ${desiredClass} for: ${this._descriptor.hash || 'unknown'}`);
    }

    /**
     * Internal method to remove the disabled overlay
     */
    _removeDisabledOverlay() {
        if (!this.isConnected) return;

        const target = this.shadowRoot || this;
        const container = target.querySelector('.card') || this;
        const overlay = container.querySelector('.overlay');

        if (overlay) {
            overlay.remove();
            Logger.log(ComponentType.CONNECTED_ELEMENT, `Overlay removed from: ${this._descriptor.hash || 'unknown'}`);
        }
    }

    /**
     *  Updates component overlay state
     */
    updateDisabledState() {
        this._applyDisabledState();
    }

    /**
     * Legacy method maintained for compatibility with components TODO: remove and use instead updateDisabledState()
     */
    disable() {
        this._applyDisabledState();
    }

    /**
     * Legacy method maintained for compatibility with components TODO: remove and use instead updateDisabledState()
     */
    enable() {
        this._applyDisabledState();
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
        const oldDescriptor = { ...this._descriptor };

        if (!this._descriptor.hash && val.hash) {
            this.socket.setTarget(val.hash, this.update);
        }

        this._descriptor = { ...this._descriptor, ...val };

        if (val.hash) {
            this._descriptor.hash = val.hash;
        }

        // Check if the disable property has changed
        if (oldDescriptor.disable !== this._descriptor.disable) {
            Logger.log(ComponentType.CONNECTED_ELEMENT,
                `Disable state changed in descriptor: ${oldDescriptor.disable} -> ${this._descriptor.disable} for ${this._descriptor.hash || 'unknown'}`);
            this._applyDisabledState();
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

        // Apply the correct disabled state after connection
        this._applyDisabledState();

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

const template$i = document.createElement('template');
template$i.innerHTML = `
    
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
        
        this.shadowRoot.appendChild(template$i.content.cloneNode(true));
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

// hw-navbar.js

const template$h = document.createElement('template');

template$h.innerHTML = `
    <style>
        :host {
            display: block;
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
    </style>
    <nav class="tab-navigation">
        <sl-tab-group></sl-tab-group>
    </nav>
`;

class HwNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template$h.content.cloneNode(true));
        
        this._pages = [];
        this._currentPage = 0;
        this._tabGroup = this.shadowRoot.querySelector('sl-tab-group');
        
        this._onTabChange = this._onTabChange.bind(this);
    }

    connectedCallback() {
        this._tabGroup.addEventListener('sl-tab-show', this._onTabChange);
    }

    disconnectedCallback() {
        this._tabGroup.removeEventListener('sl-tab-show', this._onTabChange);
    }

    async _onTabChange(event) {
        const panelId = event.detail.name;
        const index = parseInt(panelId.replace('panel-', ''));
        
        // Prevent circular updates
        if (index !== this._currentPage) {
            // Store the old page index
            const oldPage = this._currentPage;
            
            // Try to switch page
            const success = await this._attemptPageSwitch(index);
            
            // If page switch failed (e.g., due to password), revert to old tab
            if (!success) {
                requestAnimationFrame(() => {
                    this._tabGroup.show(`panel-${oldPage}`);
                });
            }
        }
    }

    async _attemptPageSwitch(index) {
        const page = this._pages[index];
        
        if (page.password) {
            if (!passwordManager.isUnlocked(`page-${page.PageName}`)) {
                // Dispatch event to hide content
                this.dispatchEvent(new CustomEvent('hide-content'));
                
                const result = await PasswordManager.showPasswordDialog(`Enter password for ${page.PageName}`);
                if (!result) {
                    // Dispatch event to show content back if user cancels
                    this.dispatchEvent(new CustomEvent('show-content'));
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
                        // Dispatch event to show content back if password is invalid
                        this.dispatchEvent(new CustomEvent('show-content'));
                        return false;
                    }
                } catch (error) {
                    console.error('Password validation failed:', error);
                    window.notify({
                        type: "error",
                        name: "Access Denied",
                        desc: "Failed to validate password"
                    });
                    // Dispatch event to show content back if validation fails
                    this.dispatchEvent(new CustomEvent('show-content'));
                    return false;
                }
            }
        }
        
        // If we get here, the page switch was successful
        this._currentPage = index;
        
        // Dispatch page change event
        this.dispatchEvent(new CustomEvent('page-change', {
            detail: {
                pageIndex: index,
                pageName: page.PageName
            }
        }));
        
        // Dispatch event to show content
        this.dispatchEvent(new CustomEvent('show-content'));
        return true;
    }

    set pages(pages) {
        this._pages = pages;
        this._renderTabs();
    }

    get pages() {
        return this._pages;
    }

    set currentPage(index) {
        if (index >= 0 && index < this._pages.length && index !== this._currentPage) {
            this._currentPage = index;
            requestAnimationFrame(() => {
                this._tabGroup.show(`panel-${index}`);
            });
        }
    }

    get currentPage() {
        return this._currentPage;
    }

    _renderTabs() {
        // Clear existing tabs
        this._tabGroup.innerHTML = '';
        
        // Create tabs for each page
        this._pages.forEach((page, index) => {
            const tab = document.createElement('sl-tab');
            tab.setAttribute('slot', 'nav');
            tab.setAttribute('panel', `panel-${index}`);
            tab.textContent = page.PageName;
            this._tabGroup.appendChild(tab);
        });
        
        // Set initial active tab
        requestAnimationFrame(() => {
            this._tabGroup.show(`panel-${this._currentPage}`);
        });
    }
}

window.customElements.define('hw-navbar', HwNavbar);

// Used in hw-dynamic.js

const getPageLayout = (orientation) => {
    switch (orientation?.toLowerCase()) {
        case 'horizontal':
            return 'horizontal-wrap';
        case 'vertical':
        default:
            return 'vertical';
    }
};

const template$g = document.createElement('template');

template$g.innerHTML = `
    <style>
        @import url("static/css/style.css");
        @import url("static/css/layout.css");
        @import url("static/css/hw-module.css");

        .section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .section h3 {
            margin: 0;
            padding: 0.5rem 0;
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
            flex: 1 1 300px;
            min-width: 0;
            max-width: 100%;
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
    <div class="section">
        <h3 class="section-title"></h3>
        <div class="section-content"></div>
    </div>
`;

class HwSection extends HTMLElement {
    constructor() {
        super();
        this._section = null;
        this._configProvider = null;
        this._socket = null;
        this._registeredComponents = this._getRegisteredComponents();
        this._validComponentTypes = this._getValidComponentTypes();
        
        this._isLocked = false;
        
        this.unlockSection = this.unlockSection.bind(this);
        this.unlockComponent = this.unlockComponent.bind(this);
    }

    connectedCallback() {
        try {
            this.appendChild(template$g.content.cloneNode(true));
            
            this._sectionTitle = this.querySelector('.section-title');
            this._sectionContent = this.querySelector('.section-content');
            this._sectionElement = this.querySelector('.section');
            
            if (this._section) {
                this.render();
            }
        } catch (error) {
            console.error('Error during section component initialization:', error);
            this._notifyError('Initialization Error', `Failed to initialize section component: ${error.message}`);
        }
    }

    disconnectedCallback() {
        try {
            // Remove any event listeners
            if (this._isLocked) {
                this._sectionElement.removeEventListener('click', this.unlockSection);
            }
            
            // Clear any locked component listeners
            const lockedComponents = this.querySelectorAll('.locked-component');
            lockedComponents.forEach(component => {
                component.removeEventListener('click', this.unlockComponent);
            });
        } catch (error) {
            console.error('Error during section component cleanup:', error);
            this._notifyError('Cleanup Error', `Failed to cleanup section component resources: ${error.message}`);
        }
    }

    _getRegisteredComponents() {
        // Get all registered custom elements to check against when creating components
        const registeredComponents = new Set();
        for (const key in window.customElements.registry) {
            registeredComponents.add(key.toLowerCase());
        }
        return registeredComponents;
    }

    _getValidComponentTypes() {
        const validTypes = new Set();
        
        // Add all ComponentType values
        Object.values(ComponentType).forEach(type => {
            validTypes.add(type.toLowerCase());
        });
        
        // Add rx- and tx- prefixed components
        Object.values(ComponentType).forEach(type => {
            if (type.startsWith('rx-') || type.startsWith('tx-') || type.startsWith('hw-')) {
                validTypes.add(type.toLowerCase());
            }
        });
        
        return validTypes;
    }

    _isValidComponent(componentType) {
        if (!componentType) return false;
        
        const lowercaseType = componentType.toLowerCase();
        
        // First check if it's registered in the browser
        if (this._registeredComponents.has(lowercaseType)) {
            return true;
        }
        
        // Then check if it's in our ComponentType dictionary or has rx-/tx- prefix
        if (this._validComponentTypes.has(lowercaseType)) {
            return true;
        }
        
        // Special case: Allow any component with rx- or tx- prefix
        if (lowercaseType.startsWith('rx-') || lowercaseType.startsWith('tx-') || lowercaseType.startsWith('hw-')) {
            return true;
        }
        
        return false;
    }

    findConfigForHash(hash) {
        if (!this._configProvider) {
            this._notifyError('Config Error', 'No config provider set');
            return null;
        }
        
        return this._configProvider(hash);
    }

    async unlockSection() {
        try {
            if (!this._section || !this._section.SectionName) {
                throw new Error('Invalid section data');
            }

            const result = await PasswordManager.showPasswordDialog(`Enter password for ${this._section.SectionName}`);
            if (!result) return;

            try {
                const validationResult = await passwordManager.validatePassword('section', this._section.SectionName, result);
                if (!validationResult.valid) {
                    this._notifyError('Access Denied', 'Invalid password for section access');
                    return;
                }
                this._isLocked = false;
                this.render();
            } catch (error) {
                console.error('Password validation failed:', error);
                this._notifyError('Authentication Error', `Failed to validate password: ${error.message}`);
            }
        } catch (error) {
            console.error('Error unlocking section:', error);
            this._notifyError('Authentication Error', `Error during section unlock process: ${error.message}`);
        }
    }

    createLockedComponent(node) {
        try {
            if (!node || !node.hash) {
                throw new Error('Invalid component data');
            }

            const wrapper = document.createElement('div');
            wrapper.className = 'locked-component';

            const label = document.createElement('span');
            label.textContent = (node.name || `Component ${node.hash}`) + ' (Protected)';

            wrapper.appendChild(label);
            wrapper.dataset.nodeHash = node.hash;
            wrapper.addEventListener('click', () => this.unlockComponent(node));

            return wrapper;
        } catch (error) {
            console.error('Error creating locked component:', error);
            this._notifyError('Render Error', `Failed to create locked component: ${error.message}`);
            return document.createElement('div'); // Return empty div to avoid layout issues
        }
    }

    async unlockComponent(node) {
        try {
            if (!node || !node.hash) {
                throw new Error('Invalid component data');
            }

            const componentName = node.name || `Component ${node.hash}`;
            const result = await PasswordManager.showPasswordDialog(`Enter password for ${componentName}`);
            if (!result) return;

            try {
                // Try the new validation method first
                const validationResult = await passwordManager.validatePassword('component', node.hash.toString(), result);
                if (validationResult.valid) {
                    this.render();
                    return;
                }
            } catch (validationError) {
                console.warn('Password validation through config failed, falling back to interface passwords:', validationError);
                // Continue to fallback method
            }

            // If we get here, try using the password from the interface
            if (node.password === undefined) {
                this._notifyError('Authentication Error', `No password defined for component "${componentName}"`);
                return;
            }

            if (result === node.password) {
                passwordManager._unlockedItems.set(`component-${node.hash}`, {
                    timestamp: Date.now(),
                    duration: 5 * 60 * 1000 // 5 minutes
                });
                this.render();
                return;
            }

            // If both methods fail, show error
            this._notifyError('Access Denied', 'Invalid password for component access');
        } catch (error) {
            console.error('Error unlocking component:', error);
            this._notifyError('Authentication Error', `Error during component unlock process: ${error.message}`);
        }
    }

    render() {
        try {
            if (!this._sectionTitle || !this._sectionContent || !this._sectionElement) {
                return;
            }
            if (!this._section) {
                throw new Error('No section data provided');
            }

            if (!this._section.SectionName) {
                throw new Error('Section is missing a name');
            }

            // Check if section is locked
            if (this._section.password && !passwordManager.isUnlocked(`section-${this._section.SectionName}`)) {
                this._renderLockedSection();
                return;
            }
            
            // Remove any previous lock event listener
            if (this._isLocked) {
                this._sectionElement.removeEventListener('click', this.unlockSection);
                this._isLocked = false;
            }

            // Update section title and clear locked state
            this._sectionTitle.textContent = this._section.SectionName;
            this._sectionElement.classList.remove('locked');
            
            // Clear content area
            this._sectionContent.innerHTML = '';
            
            // Apply orientation class based on section.orientation
            if (!this._section.orientation) {
                this._notifyWarning('Layout Warning', `Section "${this._section.SectionName}" is missing orientation, defaulting to vertical`);
                this._section.orientation = 'vertical';
            }

            this._sectionContent.className = getPageLayout(this._section.orientation);

            // Check if using custom component or default rendering
            if (!this._section.component) {
                this._renderDefaultSection();
            } else {
                this._renderCustomSection();
            }
        } catch (error) {
            console.error(`Error rendering section "${this._section?.SectionName}":`, error);
            this._notifyError('Render Error', `Failed to render section: ${error.message}`);
        }
    }

    _renderLockedSection() {
        try {
            // Set locked appearance
            this._sectionElement.classList.add('locked');
            this._sectionTitle.textContent = this._section.SectionName + ' (Protected)';
            this._sectionContent.innerHTML = '';
            
            // Add click event to unlock
            this._sectionElement.addEventListener('click', this.unlockSection);
            this._isLocked = true;
        } catch (error) {
            console.error('Error rendering locked section:', error);
            this._notifyError('Render Error', `Failed to render locked section: ${error.message}`);
        }
    }

    _renderDefaultSection() {
        try {
            if (!this._section.NodesList || !Array.isArray(this._section.NodesList)) {
                this._notifyWarning('Content Warning', `Section "${this._section.SectionName}" has no components`);
                return;
            }

            this._section.NodesList.forEach(node => {
                try {
                    if (!node.hash) {
                        throw new Error(`Component in section "${this._section.SectionName}" is missing a hash`);
                    }

                    const configForNode = this.findConfigForHash(node.hash);
                    if (!configForNode) {
                        throw new Error(`Configuration for hash ${node.hash} not found`);
                    }

                    if (node.password && !passwordManager.isUnlocked(`component-${node.hash}`)) {
                        this._sectionContent.appendChild(this.createLockedComponent(node));
                    } else {
                        if (!node.component) {
                            throw new Error(`Component with hash ${node.hash} is missing component type`);
                        }

                        // Check if component type is registered
                        if (!this._isValidComponent(node.component)) {
                            throw new Error(`Unknown component type: ${node.component}`);
                        }

                        const wrapper = document.createElement('div');
                        const dockHtml = `<hw-dock></hw-dock>`;
                        wrapper.innerHTML = dockHtml;
                        const dock = wrapper.firstChild;

                        if (!dock) {
                            throw new Error('Failed to create hw-dock element');
                        }

                        this._sectionContent.appendChild(dock);

                        requestAnimationFrame(() => {
                            try {
                                const childForHash = configForNode.children.find(child => child.hash === node.hash);

                                if (!childForHash) {
                                    throw new Error(`Child configuration for hash ${node.hash} not found`);
                                }

                                const descriptor = {
                                    ...configForNode,
                                    children: [{
                                        ...childForHash,
                                        ...node
                                    }]
                                };

                                dock.descriptor = descriptor;
                                if (this._socket) {
                                    dock.socket = this._socket;
                                }
                            } catch (descriptorError) {
                                console.error('Error setting descriptor:', descriptorError);
                                this._notifyError('Component Error', `Failed to initialize component ${node.name || node.hash}: ${descriptorError.message}`);
                            }
                        });
                    }
                } catch (nodeError) {
                    console.error('Error creating component:', nodeError);
                    this._notifyError('Component Error', nodeError.message);
                }
            });
        } catch (error) {
            console.error('Error rendering default section:', error);
            this._notifyError('Render Error', `Failed to render default section: ${error.message}`);
        }
    }

    _renderCustomSection() {
        try {
            // Check if custom component type exists
            if (!this._isValidComponent(this._section.component)) {
                throw new Error(`Unknown section component type: ${this._section.component}`);
            }

            // Create the custom component
            const customComponent = document.createElement(this._section.component);
            
            // Set the descriptor for the custom component
            try {
                if (!this._section.NodesList || !Array.isArray(this._section.NodesList)) {
                    this._notifyWarning('Content Warning', `Custom section "${this._section.SectionName}" has no components`);
                    this._section.NodesList = [];
                }

                const sectionDescriptor = {
                    ...this._section,
                    children: this._section.NodesList.map(node => {
                        if (!node.hash) {
                            throw new Error(`Component in custom section "${this._section.SectionName}" is missing a hash`);
                        }

                        const configForNode = this.findConfigForHash(node.hash);
                        if (!configForNode) {
                            throw new Error(`Configuration for hash ${node.hash} not found`);
                        }

                        const childForHash = configForNode.children.find(child => child.hash === node.hash);
                        if (!childForHash) {
                            throw new Error(`Child configuration for hash ${node.hash} not found`);
                        }

                        return {
                            ...childForHash,
                            ...node
                        };
                    })
                };

                customComponent.descriptor = sectionDescriptor;

                if (this._socket) {
                    customComponent.socket = this._socket;
                }
            } catch (descriptorError) {
                console.error('Error setting section descriptor:', descriptorError);
                this._notifyError('Section Error', `Failed to initialize custom section "${this._section.SectionName}": ${descriptorError.message}`);
            }

            // Clear and append the custom component
            this._sectionContent.innerHTML = '';
            this._sectionContent.appendChild(customComponent);
        } catch (error) {
            console.error('Error rendering custom section:', error);
            this._notifyError('Render Error', `Failed to render custom section: ${error.message}`);
        }
    }

    // Setters and getters
    set section(section) {
        this._section = section;
        this.render();
    }

    get section() {
        return this._section;
    }

    set configProvider(provider) {
        if (typeof provider !== 'function') {
            throw new Error('Config provider must be a function');
        }
        this._configProvider = provider;
    }

    set socket(socket) {
        this._socket = socket;
        // Update socket for all docks if already rendered
        this.querySelectorAll('hw-dock').forEach(dock => {
            dock.socket = socket;
        });
    }

    get socket() {
        return this._socket;
    }

    // Helper methods for notifications
    _notifyError(name, desc) {
        if (window.notify) {
            window.notify({
                type: "error",
                name: name,
                desc: desc
            });
        } else {
            console.error(`${name}: ${desc}`);
        }
    }

    _notifyWarning(name, desc) {
        if (window.notify) {
            window.notify({
                type: "warning",
                name: name,
                desc: desc
            });
        } else {
            console.warn(`${name}: ${desc}`);
        }
    }

    _notifyInfo(name, desc) {
        if (window.notify) {
            window.notify({
                type: "info",
                name: name,
                desc: desc
            });
        } else {
            console.info(`${name}: ${desc}`);
        }
    }
}

window.customElements.define('hw-section', HwSection);

const template$f = document.createElement('template');

template$f.innerHTML = `
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
    </style>
    <div class="dynamic-layout">
        <hw-navbar></hw-navbar>
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

        this.handlePageChange = this.handlePageChange.bind(this);
        this.hidePageContent = this.hidePageContent.bind(this);
        this.showPageContent = this.showPageContent.bind(this);
        this.findConfigForHash = this.findConfigForHash.bind(this);
    }

    connectedCallback() {
        try {
            this.appendChild(template$f.content.cloneNode(true));

            // Get the navbar component
            this._navbar = this.querySelector('hw-navbar');

            if (!this._navbar) {
                throw new Error('Navbar component not found');
            }

            // Add event listeners
            this._navbar.addEventListener('page-change', this.handlePageChange);
            this._navbar.addEventListener('hide-content', this.hidePageContent);
            this._navbar.addEventListener('show-content', this.showPageContent);

            this.loadConfigurations();
        } catch (error) {
            console.error('Error during component initialization:', error);
            this._notifyError('Initialization Error', `Failed to initialize component: ${error.message}`);
        }
    }

    disconnectedCallback() {
        try {
            // Remove event listeners
            if (this._navbar) {
                this._navbar.removeEventListener('page-change', this.handlePageChange);
                this._navbar.removeEventListener('hide-content', this.hidePageContent);
                this._navbar.removeEventListener('show-content', this.showPageContent);
            }
        } catch (error) {
            console.error('Error during component cleanup:', error);
            this._notifyError('Cleanup Error', `Failed to cleanup component resources: ${error.message}`);
        }
    }

    handlePageChange(event) {
        try {
            if (!event || !event.detail || typeof event.detail.pageIndex !== 'number') {
                throw new Error('Invalid page change event');
            }

            this._currentPage = event.detail.pageIndex;

            if (this._interface &&
                (!this._interface.pages ||
                    !Array.isArray(this._interface.pages) ||
                    this._currentPage >= this._interface.pages.length)) {
                throw new Error(`Invalid page index: ${this._currentPage}`);
            }

            this.renderCurrentPage();
        } catch (error) {
            console.error('Error handling page change:', error);
            this._notifyError('Navigation Error', `Failed to change page: ${error.message}`);
        }
    }

    async loadConfigurations() {
        try {
            if (!this.url) {
                throw new Error('No URL provided for configuration');
            }

            const configResponse = await fetch(this.url);
            const interfacePath = new URL('interface.json', window.location.href).href;
            const interfaceResponse = await fetch(interfacePath);

            if (!configResponse.ok) {
                throw new Error(`Failed to load configuration: ${configResponse.status} ${configResponse.statusText}`);
            }

            if (!interfaceResponse.ok) {
                throw new Error(`Failed to load interface: ${interfaceResponse.status} ${interfaceResponse.statusText}`);
            }

            try {
                this._config = await configResponse.json();
            } catch (jsonError) {
                throw new Error(`Invalid JSON in configuration file: ${jsonError.message}`);
            }

            try {
                this._interface = await interfaceResponse.json();
            } catch (jsonError) {
                throw new Error(`Invalid JSON in interface file: ${jsonError.message}`);
            }

            // Validate configuration structure
            if (!this._config || !this._config.children || !Array.isArray(this._config.children)) {
                throw new Error('Invalid configuration structure: missing or invalid children array');
            }

            // Validate interface structure
            if (!this._interface || !this._interface.pages || !Array.isArray(this._interface.pages)) {
                throw new Error('Invalid interface structure: missing or invalid pages array');
            }

            this.render();
        } catch (error) {
            console.error('Failed to load configurations:', error);
            this._notifyError('Configuration Error', `Failed loading configurations: ${error.message}`);
        }
    }

    findConfigForHash(hash) {
        if (!this._config || !this._config.children) {
            this._notifyError('Config Error', 'Invalid configuration structure');
            return null;
        }

        for (const configSection of this._config.children) {
            if (!configSection.children || !Array.isArray(configSection.children)) {
                continue;
            }

            for (const child of configSection.children) {
                if (child.hash === hash) {
                    return configSection;
                }
            }
        }

        // Notify if hash not found
        this._notifyError('Component Error', `Component with hash ${hash} not found in configuration`);
        return null;
    }

    hidePageContent() {
        try {
            const pageContent = this.querySelector('.page-content');
            if (pageContent) {
                pageContent.style.display = 'none';
            } else {
                throw new Error('Page content element not found');
            }
        } catch (error) {
            console.error('Error hiding page content:', error);
            this._notifyError('UI Error', `Failed to hide page content: ${error.message}`);
        }
    }

    showPageContent() {
        try {
            const pageContent = this.querySelector('.page-content');
            if (pageContent) {
                pageContent.style.display = '';
            } else {
                throw new Error('Page content element not found');
            }
        } catch (error) {
            console.error('Error showing page content:', error);
            this._notifyError('UI Error', `Failed to show page content: ${error.message}`);
        }
    }

    async _showPasswordPromptForPage(page) {
        try {
            if (!page || !page.PageName) {
                throw new Error('Invalid page data');
            }

            const result = await PasswordManager.showPasswordDialog(`Enter password for page ${page.PageName}`);
            if (!result) return;

            try {
                const validationResult = await passwordManager.validatePassword('page', page.PageName, result);
                if (!validationResult.valid) {
                    this._notifyError('Access Denied', 'Invalid password for page access');
                    return;
                }
                this.renderCurrentPage();
            } catch (validationError) {
                console.error('Password validation failed:', validationError);

                // Fallback to direct password check
                if (result === page.password) {
                    passwordManager._unlockedItems.set(`page-${page.PageName}`, {
                        timestamp: Date.now(),
                        duration: 5 * 60 * 1000 // 5 minutes
                    });
                    this.renderCurrentPage();
                    return;
                }

                this._notifyError('Authentication Error', 'Failed to validate page password');
            }
        } catch (error) {
            console.error('Error showing password prompt for page:', error);
            this._notifyError('Authentication Error', `Error during page unlock process: ${error.message}`);
        }
    }

    renderCurrentPage() {
        try {
            if (!this._interface || !this._interface.pages) {
                throw new Error('Interface or pages not loaded');
            }

            if (this._currentPage < 0 || this._currentPage >= this._interface.pages.length) {
                throw new Error(`Invalid page index: ${this._currentPage}`);
            }

            const pageContent = this.querySelector('.page-content');
            if (!pageContent) {
                throw new Error('Page content element not found');
            }

            pageContent.innerHTML = '';

            const currentPage = this._interface.pages[this._currentPage];

            // Check if page is password protected
            if (currentPage.password && !passwordManager.isUnlocked(`page-${currentPage.PageName}`)) {
                this._showPasswordPromptForPage(currentPage);
                return;
            }

            if (!currentPage.sections || !Array.isArray(currentPage.sections)) {
                this._notifyWarning('Page Warning', `Page "${currentPage.PageName}" has no sections`);
                return;
            }

            // Create hw-section elements for each section in the page
            currentPage.sections.forEach(section => {
                try {
                    const sectionElement = document.createElement('hw-section');
                    
                    // Set the config provider function to allow section to look up configs
                    sectionElement.configProvider = this.findConfigForHash;
                    
                    // Set the section data
                    sectionElement.section = section;
                    
                    // Set socket if available
                    if (this._socket) {
                        sectionElement.socket = this._socket;
                    }
                    
                    pageContent.appendChild(sectionElement);
                } catch (sectionError) {
                    console.error('Error creating section element:', sectionError);
                    this._notifyError('Render Error', `Failed to create section element: ${sectionError.message}`);
                }
            });
        } catch (error) {
            console.error('Error rendering page:', error);
            this._notifyError('Render Error', `Failed to render page: ${error.message}`);
        }
    }

    render() {
        try {
            if (!this._interface || !this._config) {
                throw new Error('Interface or configuration not loaded');
            }

            const editor = this.querySelector('interface-editor');
            if (editor && this._socket) {
                editor.socket = this._socket;
            }

            if (!this._navbar) {
                throw new Error('Navbar component not found');
            }

            // Set the pages for the navbar
            this._navbar.pages = this._interface.pages;
            this._navbar.currentPage = this._currentPage;

            this.renderCurrentPage();
        } catch (error) {
            console.error('Error during render:', error);
            this._notifyError('Render Error', `Failed to render interface: ${error.message}`);
        }
    }

    set socket(socket) {
        try {
            this._socket = socket;
            
            // Update socket for all hw-section elements
            this.querySelectorAll('hw-section').forEach(section => {
                section.socket = socket;
            });
        } catch (error) {
            console.error('Error setting socket:', error);
            this._notifyError('Connection Error', `Failed to set socket: ${error.message}`);
        }
    }

    get socket() {
        return this._socket;
    }

    // Helper methods for notifications
    _notifyError(name, desc) {
        if (window.notify) {
            window.notify({
                type: "error",
                name: name,
                desc: desc
            });
        } else {
            console.error(`${name}: ${desc}`);
        }
    }

    _notifyWarning(name, desc) {
        if (window.notify) {
            window.notify({
                type: "warning",
                name: name,
                desc: desc
            });
        } else {
            console.warn(`${name}: ${desc}`);
        }
    }

    _notifyInfo(name, desc) {
        if (window.notify) {
            window.notify({
                type: "info",
                name: name,
                desc: desc
            });
        } else {
            console.info(`${name}: ${desc}`);
        }
    }
}

window.customElements.define('hw-dynamic', HwDynamic);

const template$e = document.createElement('template');

template$e.innerHTML = `
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
      let $template = template$e.content.cloneNode(true);
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

const template$d = document.createElement('template');
template$d.innerHTML = `
     <style>
       @import url("static/css/style.css")
     </style>
      
     <div class="alert-toast"></div>
`;

class HwNotification extends HTMLElement {
    constructor() {
        super();
        // Create a div element to represent the card
        this.appendChild(template$d.content.cloneNode(true));
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

    connectedCallback() {
        // Get the JSON URL from the "url" parameter
        if (Socket.defaultSocket) {
            Socket.defaultSocket.setTarget("notification", this.notify);
        } else {
            Logger.warn(ComponentType.NOTIFICATION, "No default socket when trying to register hw-notification");
        }
    }

    escapeHtml(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }

    error(message, duration = 10000) {
        let msg = { type: "error", name: "Error", desc: message };
        let variant = "danger";
        let icon = "exclamation-circle";
        this.notify(msg, variant, icon, duration);
        Logger.log(ComponentType.NOTIFICATION, "Error: ", {"msg":msg, "variant":variant, "icon":icon,});
    }

    warn(message, duration = 5000) {
        let msg = { type: "warning", name: "Warning", desc: message };
        console.info("Warning notification:\n", message);
        let variant = "warning";
        let icon = "exclamation-triangle";
        this.notify(msg, variant, icon, duration);
        Logger.log(ComponentType.NOTIFICATION, "Warn: ", {"msg":msg, "variant":variant, "icon":icon,});
    }

    success(message, duration = 2000) {
        let msg = { type: "success", name: "Success", desc: message };
        let variant = "success";
        let icon = "check-circle";
        this.notify(msg, variant, icon, duration);
        Logger.log(ComponentType.NOTIFICATION, "Success: ", {"msg":msg, "variant":variant, "icon":icon,});
    }
    // Custom function to emit toast notifications
    notify(message, variant = 'primary', icon = 'info-circle', duration = 10000) {
        // Ensure message is an object with required properties
        if (typeof message === 'string') {
            // Convert string messages to proper format
            message = {
                type: "info",
                name: "Information",
                desc: message
            };
        } else if (!message.desc) {
            // Skip notifications with missing required fields
            console.warn("Notification received without required name/desc fields:", message);
            return;
        }

        switch (message["type"]) {
            case "fatal":
                variant = "danger";
                icon = "exclamation-octagon-fill";
                duration = "auto";
                Logger.log(ComponentType.NOTIFICATION, "Fatal Error: ", {"msg":message, "variant":variant, "icon":icon,});
                break;
            case "error":
            case "danger":
                variant = "danger";
                icon = "exclamation-circle";
                duration = 10000;
                Logger.log(ComponentType.NOTIFICATION, "Error: ", {"msg":message, "variant":variant, "icon":icon,});
                break;
            case "warning":
                variant = "warning";
                icon = "exclamation-triangle";
                duration = 10000;
                Logger.log(ComponentType.NOTIFICATION, "Warning: ", {"msg":message, "variant":variant, "icon":icon,});
                break;
            case "info":
            case "primary":
                variant = "primary";
                icon = "info-circle";
                duration = 5000;
                Logger.log(ComponentType.NOTIFICATION, "Info: ", {"msg":message, "variant":variant, "icon":icon,});
                break;
            case "success":
                variant = "success";
                icon = "check-circle";
                duration = 4000;
                Logger.log(ComponentType.NOTIFICATION, "Success: ", {"msg":message, "variant":variant, "icon":icon,});
                break;
        }

        const $alert = Object.assign(document.createElement('sl-alert'), {
            variant,
            closable: true,
            duration: duration,
            countdown: "rtl",
            innerHTML: `
                <sl-icon name="${icon}" slot="icon"></sl-icon>
                <b> ${this.escapeHtml(message["name"])} </b>
                <br>
                ${this.escapeHtml(message["desc"])}
            `
        });

        document.body.append($alert);
        $alert.toast();

        // Dispatch an event for the notification center to capture
        const notificationEvent = new CustomEvent('hw-notification', {
            detail: {
                message,
                variant,
                icon,
                timestamp: new Date()
            },
            bubbles: true,
            composed: true
        });
        document.dispatchEvent(notificationEvent);
        
        return;
    }

    render() {
    }

}

customElements.define('hw-notification', HwNotification);

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
                if (node.component !== 'hw-image-section') {
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

window.customElements.define('hw-image-section', ImageSection);

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
        const hasValidTooltip = this._descriptor?.tooltip && 
                              typeof this._descriptor.tooltip === 'string' && 
                              this._descriptor.tooltip.trim() !== '';
        
        if (hasValidTooltip) {
            // Set both the content property and attribute
            this._tooltip.content = this._descriptor.tooltip;
            this._tooltip.setAttribute('content', this._descriptor.tooltip);
            this._iconButton.label = this._descriptor.tooltip;
            this.removeAttribute('hidden');
            // Logger.log(ComponentType.RX_TOOLTIP, `(render) hash: ${this._descriptor.hash}, tooltip: ${this._descriptor.tooltip}`);
        } else {
            this._tooltip.content = '';
            this._tooltip.removeAttribute('content');
            this._iconButton.label = '';
            this.setAttribute('hidden', '');
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
        
        // Clone template once
        this.appendChild(template$b.content.cloneNode(true));
        
        // Store references
        this.$switch = this.querySelector("sl-switch");
        this.$label = this.querySelector(".label");
        
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }
    
    render() {
        // Update existing elements instead of recreating
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);
        
        // Update content
        let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        this.$label.innerText = name;
        this.$switch.checked = this._value;
        Logger.log(ComponentType.RX_BOOL, `(render) name: ${name}, hash: ${this._descriptor.hash}, value: ${this._value}`);
        
        const disable = this._descriptor.disable;
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('rx-bool', RxBool);

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
            transition: background-color 0.4s ease-in, box-shadow 0.5s ease-in;
        }
        .dot.on {
            background-color: var(--on-color, #4CAF50);
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
        
        // Clone template once
        this.appendChild(template$a.content.cloneNode(true));
        
        // Store references
        this.$indicator = this.querySelector(".dot");
        this.$label = this.querySelector(".label");
        
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.blink = this.blink.bind(this);
        
        // Store blink interval ID to allow cleanup
        this.blinkIntervalId = null;
    }

    blink() {
        if (this.$indicator.classList.contains("on")) {
            this.$indicator.classList.remove("on");
        } else {
            this.$indicator.classList.add("on");
        }
    }

    render() {
        // Update existing elements instead of recreating
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);
        
        // Update content
        let name = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        this.$label.innerText = name;
        
        const inverse = this._descriptor.inverse;
        const blinkActive = this._descriptor.blink;
        const color = this._descriptor.color || "lime";
        
        // Determine the effective value based on 'inverse'
        const effectiveValue = inverse ? !this._value : this._value;
        Logger.log(ComponentType.RX_INDICATOR, `(render) name: ${name}, hash: ${this._descriptor.hash}, value: ${this._value}`);
        
        // Clear previous blink interval if it exists
        if (this.blinkIntervalId) {
            clearInterval(this.blinkIntervalId);
            this.blinkIntervalId = null;
        }
        
        // Set indicator state based on effective value
        this.$indicator.style.setProperty('--on-color', color);
        
        if (effectiveValue) {
            if (blinkActive) {
                this.blinkIntervalId = setInterval(this.blink, 500);
            } else {
                this.$indicator.classList.add("on");
            }
        } else {
            this.$indicator.classList.remove("on");
        }
        
        const disable = this._descriptor.disable;
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
    
    // Clean up when element is removed from DOM
    disconnectedCallback() {
        if (this.blinkIntervalId) {
            clearInterval(this.blinkIntervalId);
            this.blinkIntervalId = null;
        }
        super.disconnectedCallback && super.disconnectedCallback();
    }
}

window.customElements.define('rx-indicator', RxIndicator);

const templateLabel = document.createElement('template');
templateLabel.innerHTML = `
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
            <span class="state-tag"></span>
        </div>
    `;

class RxLabel extends ConnectedElement {
    constructor() {
        super();

        // Initialize the component once
        this.appendChild(templateLabel.content.cloneNode(true));

        // Store references to DOM elements
        this.$stateTag = this.querySelector('.state-tag');
        this.$labelName = this.querySelector('.label-name');

        // Bind methods
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    render() {
        // Update tooltip
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);

        const value = this._value || "-";
        const name = this._descriptor.name || "Current State:";
        const state = this._descriptor.state || "neutral";
        const isBlinking = this._descriptor.isBlinking;
        const disable = this._descriptor.disable;

        // Update content
        this.$stateTag.textContent = value;
        this.$labelName.textContent = name;
        Logger.log(ComponentType.RX_LABEL, `(render) name: ${name}, hash: ${this._descriptor.hash}, value: ${value}`);

        // Update state color
        switch (state) {
            case "success":
                this.$stateTag.style.color = 'var(--sl-color-success-600)';
                break;
            case "warning":
                this.$stateTag.style.color = 'var(--sl-color-warning-600)';
                break;
            case "danger":
                this.$stateTag.style.color = 'var(--sl-color-danger-600)';
                break;
            default:
                this.$stateTag.style.color = 'var(--sl-color-neutral-0)';
        }

        // Update blinking state
        if (isBlinking) {
            this.$stateTag.classList.add('blinking');
        } else {
            this.$stateTag.classList.remove('blinking');
        }

        // Handle disable state
        if (disable) {
            this.disable();
        } else {
            this.enable();
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

const template$9 = document.createElement('template');
template$9.innerHTML = `
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
        this.shadowRoot.appendChild(template$9.content.cloneNode(true));
        
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
        this.innerHTML = template$8.innerHTML;
        this._current = parseFloat(this.getAttribute('current'));
        this._max = parseFloat(this.getAttribute('max'));
        this._min = parseFloat(this.getAttribute('min'));
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        
        // Cache DOM elements after initialization
        this.cacheElements();
        
        this.render();
    }
    
    // Cache DOM elements to avoid repeated queries
    cacheElements() {
        this.elements = {
            container: this.querySelector('.container'),
            labelsContainer: this.querySelector('.labels-container'),
            barContainer: this.querySelector('.bar-container'),
            levelIndicator: this.querySelector('.level-indicator'),
            bar: this.querySelector('.level-bar'),
            title: this.querySelector('.title'),
            alarmHighLabel: this.querySelector('.alarm-high-label'),
            warningHighLabel: this.querySelector('.warning-high-label'),
            warningLowLabel: this.querySelector('.warning-low-label'),
            alarmLowLabel: this.querySelector('.alarm-low-label'),
            maxLabel: this.querySelector('.max'),
            alarmHighIndicator: this.querySelector('.alarm-high'),
            warningHighIndicator: this.querySelector('.warning-high'),
            warningLowIndicator: this.querySelector('.warning-low'),
            alarmLowIndicator: this.querySelector('.alarm-low'),
            minLabel: this.querySelector('.min'),
            currentLabel: this.querySelector('.current'),
            unitLabel: this.querySelector('.unit'),
            tooltip: this.querySelector("rx-tooltip")
        };
    }

    // ------------------ Callback Methods ------------------ //
    render() {
        const { 
            container, labelsContainer, barContainer, levelIndicator, bar, title,
            alarmHighLabel, warningHighLabel, warningLowLabel, alarmLowLabel,
            maxLabel, alarmHighIndicator, warningHighIndicator, warningLowIndicator, 
            alarmLowIndicator, minLabel, currentLabel, unitLabel, tooltip
        } = this.elements;
        
        const disable = this._descriptor.disable;
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

        Logger.log(ComponentType.RX_LEVEL_BAR, `(render) name: ${name}, hash: ${this._descriptor.hash}, value: ${current}`);

        // Reset indicator displays
        this.resetIndicators(alarmHighIndicator, warningHighIndicator, warningLowIndicator, alarmLowIndicator);
        this.resetLabels(alarmHighLabel, warningHighLabel, warningLowLabel, alarmLowLabel);

        tooltipUpdate(tooltip, this._descriptor.tooltip);
        title.textContent = name;
        
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }

        // Apply orientation styling
        this.applyOrientation(orientation, barLength, container, labelsContainer, barContainer, levelIndicator);

        // Set value labels
        maxLabel.textContent = max;
        minLabel.textContent = min;

        // Calculate and display the bar percentage
        const range = max - min;
        let percentage = current > min ? ((current - min) / range) * 100 : 0;
        this.setBarSize(orientation, bar, percentage);
        
        // Set current label with two decimal places
        currentLabel.textContent = current ? parseFloat(current).toFixed(2) : '0.00';

        // Set indicator positions and determine colors
        const { backgroundColor, currentColor } = this.setIndicators(
            orientation, isLabelAlarmWarningOn, current, min, max, range, consigne,
            warningHigh, warningLow, alarmHigh, alarmLow,
            warningHighIndicator, warningLowIndicator, alarmHighIndicator, alarmLowIndicator,
            warningHighLabel, warningLowLabel, alarmHighLabel, alarmLowLabel,
            defaultBarColor, warningBarColor, dangerBarColor,
            defaultCurrentColor, warningCurrentColor, dangerCurrentColor
        );

        // Apply colors
        bar.style.backgroundColor = backgroundColor;
        currentLabel.style.color = currentColor;
        unitLabel.textContent = unit;
        unitLabel.style.color = currentColor;
    }
    
    resetIndicators(...indicators) {
        indicators.forEach(indicator => {
            if (indicator) indicator.style.display = 'none';
        });
    }
    
    resetLabels(...labels) {
        labels.forEach(label => {
            if (label) label.style.display = 'none';
        });
    }
    
    applyOrientation(orientation, barLength, container, labelsContainer, barContainer, levelIndicator) {
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
    }
    
    setBarSize(orientation, bar, percentage) {
        if (orientation === 'horizontal') {
            bar.style.width = `${percentage}%`;
            bar.style.height = '100%';
        } else {
            bar.style.height = `${percentage}%`;
            bar.style.width = '100%';
        }
    }
    
    setIndicators(
        orientation, isLabelAlarmWarningOn, current, min, max, range, consigne,
        warningHigh, warningLow, alarmHigh, alarmLow,
        warningHighIndicator, warningLowIndicator, alarmHighIndicator, alarmLowIndicator,
        warningHighLabel, warningLowLabel, alarmHighLabel, alarmLowLabel,
        defaultBarColor, warningBarColor, dangerBarColor,
        defaultCurrentColor, warningCurrentColor, dangerCurrentColor
    ) {
        let backgroundColor = defaultBarColor;
        let currentColor = defaultCurrentColor;
        
        // Helper function to set indicator position
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
        
        // Check warning high
        if (warningHigh !== undefined) {
            const warningHighThreshold = consigne + warningHigh;
            if (isLabelAlarmWarningOn) {
                warningHighLabel.style.display = 'block';
                warningHighLabel.textContent = warningHighThreshold;
            }
            setBarPosition(warningHighIndicator, warningHighThreshold);
            if (current >= warningHighThreshold) {
                backgroundColor = warningBarColor;
                currentColor = warningCurrentColor;
            }
        }
        
        // Check warning low
        if (warningLow !== undefined) {
            const warningLowThreshold = consigne - warningLow;
            if (isLabelAlarmWarningOn) {
                warningLowLabel.style.display = 'block';
                warningLowLabel.textContent = warningLowThreshold;
            }
            setBarPosition(warningLowIndicator, warningLowThreshold);
            if (current <= warningLowThreshold) {
                backgroundColor = warningBarColor;
                currentColor = warningCurrentColor;
            }
        }
        
        // Check alarm high
        if (alarmHigh !== undefined) {
            const alarmHighThreshold = consigne + alarmHigh;
            if (isLabelAlarmWarningOn) {
                alarmHighLabel.style.display = 'block';
                alarmHighLabel.textContent = alarmHighThreshold;
            }
            setBarPosition(alarmHighIndicator, alarmHighThreshold);
            if (current >= alarmHighThreshold) {
                backgroundColor = dangerBarColor;
                currentColor = dangerCurrentColor;
            }
        }
        
        // Check alarm low
        if (alarmLow !== undefined) {
            const alarmLowThreshold = consigne - alarmLow;
            if (isLabelAlarmWarningOn) {
                alarmLowLabel.style.display = 'block';
                alarmLowLabel.textContent = alarmLowThreshold;
            }
            setBarPosition(alarmLowIndicator, alarmLowThreshold);
            if (current <= alarmLowThreshold) {
                backgroundColor = dangerBarColor;
                currentColor = dangerCurrentColor;
            }
        }
        
        return { backgroundColor, currentColor };
    }
}

window.customElements.define('rx-level-bar', RxLevelBar);

const template$7 = document.createElement('template');
template$7.innerHTML = `
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

        // Clone template once
        this.appendChild(template$7.content.cloneNode(true));

        // Store references
        this.$input = this.querySelector("sl-input");
        this.$label = this.querySelector(".label");

        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    formatNumber(number, digits) {
        // If it's an integer, return it as is
        if (Number.isInteger(number)) {
            return number.toString();
        }

        // Otherwise, format with specified decimal places
        return number.toFixed(digits);
    }

    render() {
        // Update existing elements instead of recreating
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);

        // Update label content
        this.$label.innerText = this._descriptor.name;

        Logger.log(ComponentType.RX_NUMERIC, `(render) name: ${this._descriptor.name}, hash: ${this._descriptor.hash}, value: ${this._value}`);

        // Get the number of decimal places from descriptor, default to 2
        const nbDigitsAp = this._descriptor.nb_digits_ap !== undefined ? this._descriptor.nb_digits_ap : 2;

        // Format the numeric value
        let displayValue = '0';
        if (this._value) {
            const number = parseFloat(this._value);
            displayValue = this.formatNumber(number, nbDigitsAp);
        }

        this.$input.value = displayValue;

        const disable = this._descriptor.disable;
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('rx-numeric', RxNumeric);

const templateBool = document.createElement('template');
templateBool.innerHTML = `
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
        
        // Initialize the component once
        this.appendChild(templateBool.content.cloneNode(true));
        
        // Store references to DOM elements
        this.$switch = this.querySelector("sl-switch");
        this.$label = this.querySelector(".label");
        this.$tooltip = this.querySelector("rx-tooltip");
        
        // Bind methods
        this.onclick = this.onclick.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        
        // Add event listener (once)
        this.$switch.addEventListener("sl-change", this.onclick);
    }

    onclick(e) {
        let hash = this._descriptor.hash;
        let value = e.target.checked;
        Logger.log(ComponentType.TX_BOOL, `(onclick) hash, value : ${hash}, ${value}`);
        Socket.defaultSocket.sendMessage("states", [{hash:hash, value:value}]);
    }

    render() {
        // Update tooltip
        tooltipUpdate(this.$tooltip, this._descriptor.tooltip);

        const label = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        const disable = this._descriptor.disable;
        
        Logger.log(ComponentType.TX_BOOL, `(render) name: ${label}, hash: ${this._descriptor.hash}, value: ${this._value}`);
        
        // Update content
        this.$label.textContent = label;
        
        // Update switch state without triggering the event
        this.$switch.checked = !!this._value;
        
        // Handle disable state
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('tx-bool', TxBool);

const template$6 = document.createElement('template');
template$6.innerHTML = `
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

        // Clone template once
        this.appendChild(template$6.content.cloneNode(true));

        // Store references
        this.$button = this.querySelector("sl-button");

        // Bind methods
        this.onmousedown = this.onmousedown.bind(this);
        this.onmouseup = this.onmouseup.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);

        // Set up event listeners
        if ('ontouchstart' in window) {
            // Add touch event listeners
            this.$button.addEventListener("touchstart", this.onmousedown, { passive: true });
            this.$button.addEventListener("touchend", this.onmouseup, { passive: true });
        } else {
            // Add mouse event listeners
            this.$button.addEventListener("mousedown", this.onmousedown);
            this.$button.addEventListener("mouseup", this.onmouseup);
        }
    }

    onmousedown(e) {
        const hash = this._descriptor.hash;
        Logger.log(ComponentType.TX_BUTTON_HOLD, `(onmousedown) hash, value : ${hash}, ${true}`);
        Socket.defaultSocket.sendMessage("states", [{ hash: hash, value: true }]);
    }

    onmouseup(e) {
        const hash = this._descriptor.hash;
        Logger.log(ComponentType.TX_BUTTON_HOLD, `(onmouseup) hash, value : ${hash}, ${false}`);
        Socket.defaultSocket.sendMessage("states", [{ hash: hash, value: false }]);
    }

    render() {
        // Update tooltip
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);

        // Update content
        const label = this._descriptor.name[0].toUpperCase() + this._descriptor.name.slice(1);
        this.$button.innerText = label;

        Logger.log(ComponentType.TX_BUTTON_HOLD, `(render) name: ${label}, hash: ${this._descriptor.hash}, value: ${this._value}`);

        // Apply color to the button
        const color = this._descriptor.color;
        this.$button.variant = color || "primary";

        // Handle disabled state
        const disable = this._descriptor.disable;
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('tx-button-hold', TxButtonHold);

const templateDropdown = document.createElement('template');
templateDropdown.innerHTML = `
        <style>
            sl-dropdown {
                width: 100%;
            }
    
            sl-button {
                width: 100%;
            }
        </style>
    
        <div class="card">
            <div class="tooltip-container">
                <sl-dropdown>
                    <sl-button slot="trigger" caret>Select</sl-button>
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
        this._items = [];
        this._selectedValue = null;

        // Clone template once during construction
        this.appendChild(templateDropdown.content.cloneNode(true));

        // Store references to DOM elements
        this.dropdown = this.querySelector('sl-dropdown');
        this.button = this.querySelector('sl-button');
        this.menu = this.querySelector('.dropdown-menu');

        // Bind methods
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        // Add event listener
        this.menu.addEventListener('sl-select', this.handleSelect);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Clean up event listener
        this.menu.removeEventListener('sl-select', this.handleSelect);
    }

    handleSelect(event) {
        const selectedItem = event.detail.item;

        if (selectedItem.value === this._selectedValue) {
            return;
        }

        this._selectedValue = selectedItem.value;
        this.button.textContent = this._selectedValue;

        // Update checkmarks in menu
        this.menu.querySelectorAll('sl-menu-item').forEach(item => {
            item.checked = item.value === this._selectedValue;
        });

        if (this._descriptor && this._descriptor.hash) {
            Logger.log(ComponentType.TX_DROPDOWN, `handleSelect: ${this._descriptor.hash}: ${this._selectedValue}`);
            Socket.defaultSocket.sendMessage("states", [{
                "hash": this._descriptor.hash,
                "value": this._selectedValue
            }]);
        }

        this.dropdown.hide();
    }

    render() {
        // Update tooltip
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);

        // Update items from descriptor
        const newItems = this._descriptor.items || [];
        const disable = this._descriptor.disable;

        // Only rebuild menu if items have changed
        if (JSON.stringify(this._items) !== JSON.stringify(newItems)) {
            this._items = newItems;
            this.menu.innerHTML = '';
            this._items.forEach(item => {
                const menuItem = document.createElement('sl-menu-item');
                menuItem.textContent = item;
                menuItem.value = item;
                menuItem.type = 'checkbox';
                menuItem.checked = item === this._selectedValue;
                this.menu.appendChild(menuItem);
            });
        }

        // Check if this._value is one of the items and select it if it is
        if (this._value && typeof this._value === 'string' && this._items.includes(this._value)) {
            this._selectedValue = this._value;
        }
        // If no selected value yet, use default from descriptor if available
        else if (this._descriptor.default &&
            this._items.includes(this._descriptor.default) &&
            !this._selectedValue) {
            this._selectedValue = this._descriptor.default;
        }

        // Update button text
        this.button.textContent = this._selectedValue || this._descriptor.name || "Select";

        // Update checked states
        this.menu.querySelectorAll('sl-menu-item').forEach(item => {
            item.checked = item.value === this._selectedValue;
        });

        // Handle disable state
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
        Logger.log(ComponentType.TX_DROPDOWN, `(render) hash: ${this._descriptor.hash}, value: ${this._selectedValue}, items: [${this._items}]`);
    }
}

window.customElements.define('tx-dropdown', TxDropdown);

const template$5 = document.createElement('template');
template$5.innerHTML = `
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
        this.shadowRoot.appendChild(template$5.content.cloneNode(true));

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

const template$4 = document.createElement('template');
template$4.innerHTML = `
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
        
        // Clone template once
        this.appendChild(template$4.content.cloneNode(true));
        
        // Store references
        this.$input = this.querySelector("sl-input");
        this.$button = this.querySelector("sl-button");
        this.$label = this.querySelector(".label");
        
        // Bind methods
        this.onchange = this.onchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        
        // Set up event listeners
        this.$input.addEventListener("sl-change", this.onchange);
        this.$button.addEventListener("click", this.onsubmit);
    }

    // Validate the value against the limits
    isValid(value) {
        return value >= this.lowLimit && value <= this.highLimit;
    }

    onchange(e) {
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

    onsubmit() {
        // Only submit if the current value is valid
        if (this.isValid(this.value)) {
            Socket.defaultSocket.sendMessage("states", [{hash: this._descriptor.hash, value: this.value}]);
        } else {
            alert(`Value must be between ${this.lowLimit} and ${this.highLimit}`);
        }
    }

    render() {
        // Update limits from descriptor if available
        this.highLimit = this._descriptor.high !== undefined ? this._descriptor.high : Number.POSITIVE_INFINITY; 
        this.lowLimit = this._descriptor.low !== undefined ? this._descriptor.low : Number.NEGATIVE_INFINITY;

        Logger.log(ComponentType.TX_NUMERIC, `(render) name: ${this._descriptor.name}, hash: ${this._descriptor.hash}, value: ${this._value}`);

        // Update existing elements instead of recreating
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);
        
        // Update content
        this.$label.innerText = this._descriptor.name;
        this.$input.value = this.value;
        
        const disable = this._descriptor.disable;
        if (disable) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

window.customElements.define('tx-numeric', TxNumeric);

var jsQR_min$2 = {exports: {}};

/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/jsqr@1.4.0/dist/jsQR.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var jsQR_min$1 = jsQR_min$2.exports;

var hasRequiredJsQR_min;

function requireJsQR_min () {
	if (hasRequiredJsQR_min) return jsQR_min$2.exports;
	hasRequiredJsQR_min = 1;
	(function (module, exports) {
		!function(o,e){module.exports=e();}("undefined"!=typeof self?self:jsQR_min$1,(function(){return function(o){var e={};function r(t){if(e[t])return e[t].exports;var c=e[t]={i:t,l:false,exports:{}};return o[t].call(c.exports,c,c.exports,r),c.l=true,c.exports}return r.m=o,r.c=e,r.d=function(o,e,t){r.o(o,e)||Object.defineProperty(o,e,{configurable:false,enumerable:true,get:t});},r.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(e,"a",e),e},r.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},r.p="",r(r.s=3)}([function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o;}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return !(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0;},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c);},o}();e.BitMatrix=t;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=r(2);e.addOrSubtractGF=function(o,e){return o^e};var c=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var c=1,s=0;s<this.size;s++)this.expTable[s]=c,(c*=2)>=this.size&&(c=(c^this.primitive)&this.size-1);for(s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new t.default(this,Uint8ClampedArray.from([0])),this.one=new t.default(this,Uint8ClampedArray.from([1]));}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new t.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can't take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=c;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else {this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c];}}else this.coefficients=e;}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){var r;if(this.isZero())return e;if(e.isZero())return this;var c=this.coefficients,s=e.coefficients;c.length>s.length&&(c=(r=[s,c])[0],s=r[1]);for(var a=new Uint8ClampedArray(s.length),n=s.length-c.length,d=0;d<n;d++)a[d]=s[d];for(d=n;d<s.length;d++)a[d]=t.addOrSubtractGF(c[d-n],s[d]);return new o(this.field,a)},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,n=new Uint8ClampedArray(c+a-1),d=0;d<c;d++)for(var l=r[d],i=0;i<a;i++)n[d+i]=t.addOrSubtractGF(n[d+i],this.field.multiply(l,s[i]));return new o(this.field,n)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach((function(o){e=t.addOrSubtractGF(e,o);})),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=r(4),c=r(5),s=r(11),a=r(12);function n(o){var e=a.locate(o);if(!e)return null;for(var r=0,t=e;r<t.length;r++){var n=t[r],d=s.extract(o,n),l=c.decode(d.matrix);if(l)return {binaryData:l.bytes,data:l.text,chunks:l.chunks,version:l.version,location:{topRightCorner:d.mappingFunction(n.dimension,0),topLeftCorner:d.mappingFunction(0,0),bottomRightCorner:d.mappingFunction(n.dimension,n.dimension),bottomLeftCorner:d.mappingFunction(0,n.dimension),topRightFinderPattern:n.topRight,topLeftFinderPattern:n.topLeft,bottomLeftFinderPattern:n.bottomLeft,bottomRightAlignmentPattern:n.alignmentPattern}}}return null}var d={inversionAttempts:"attemptBoth"};function l(o,e,r,c){ undefined===c&&(c={});var s=d;Object.keys(s).forEach((function(o){s[o]=c[o]||s[o];}));var a="attemptBoth"===s.inversionAttempts||"invertFirst"===s.inversionAttempts,l="onlyInvert"===s.inversionAttempts||"invertFirst"===s.inversionAttempts,i=t.binarize(o,e,r,a),B=i.binarized,k=i.inverted,u=n(l?k:B);return u||"attemptBoth"!==s.inversionAttempts&&"invertFirst"!==s.inversionAttempts||(u=n(l?B:k)),u}l.default=l,e.default=l;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=r(0);function c(o,e,r){return o<e?e:o>r?r:o}var s=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e);}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r;},o}();e.binarize=function(o,e,r,a){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var n=new s(e,r),d=0;d<e;d++)for(var l=0;l<r;l++){var i=o[4*(l*e+d)+0],B=o[4*(l*e+d)+1],k=o[4*(l*e+d)+2];n.set(d,l,.2126*i+.7152*B+.0722*k);}for(var u=Math.ceil(e/8),C=Math.ceil(r/8),m=new s(u,C),f=0;f<C;f++)for(var w=0;w<u;w++){var P=0,v=1/0,h=0;for(l=0;l<8;l++)for(d=0;d<8;d++){var y=n.get(8*w+d,8*f+l);P+=y,v=Math.min(v,y),h=Math.max(h,y);}var p=P/Math.pow(8,2);if(h-v<=24&&(p=v/2,f>0&&w>0)){var b=(m.get(w,f-1)+2*m.get(w-1,f)+m.get(w-1,f-1))/4;v<b&&(p=b);}m.set(w,f,p);}var g=t.BitMatrix.createEmpty(e,r),x=null;for(a&&(x=t.BitMatrix.createEmpty(e,r)),f=0;f<C;f++)for(w=0;w<u;w++){for(var M=c(w,2,u-3),L=c(f,2,C-3),N=(P=0,-2);N<=2;N++)for(var I=-2;I<=2;I++)P+=m.get(M+N,L+I);var O=P/25;for(N=0;N<8;N++)for(I=0;I<8;I++){d=8*w+N,l=8*f+I;var z=n.get(d,l);g.set(d,l,z<=O),a&&x.set(d,l,!(z<=O));}}return a?{binarized:g,inverted:x}:{binarized:g}};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=r(0),c=r(6),s=r(9),a=r(10);function n(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function d(o,e){return e<<1|o}var l=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],i=[function(o){return (o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return (o.y+o.x)%3==0},function(o){return (Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return (o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return ((o.y+o.x)%2+o.y*o.x%3)%2==0}];function B(o,e,r){for(var c=i[r.dataMask],s=o.height,a=function(o){var e=17+4*o.versionNumber,r=t.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,true),r.setRegion(e-8,0,8,9,true),r.setRegion(0,e-8,9,8,true);for(var c=0,s=o.alignmentPatternCenters;c<s.length;c++)for(var a=s[c],n=0,d=o.alignmentPatternCenters;n<d.length;n++){var l=d[n];6===a&&6===l||6===a&&l===e-7||a===e-7&&6===l||r.setRegion(a-2,l-2,5,5,true);}return r.setRegion(6,9,1,e-17,true),r.setRegion(9,6,e-17,1,true),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,true),r.setRegion(0,e-11,6,3,true)),r}(e),n=[],l=0,B=0,k=true,u=s-1;u>0;u-=2){6===u&&u--;for(var C=0;C<s;C++)for(var m=k?s-1-C:C,f=0;f<2;f++){var w=u-f;if(!a.get(w,m)){B++;var P=o.get(w,m);c({y:m,x:w})&&(P=!P),l=d(P,l),8===B&&(n.push(l),B=0,l=0);}}k=!k;}return n}function k(o){var e=function(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return a.VERSIONS[r-1];for(var t=0,c=5;c>=0;c--)for(var s=e-9;s>=e-11;s--)t=d(o.get(s,c),t);var l=0;for(s=5;s>=0;s--)for(c=e-9;c>=e-11;c--)l=d(o.get(s,c),l);for(var i,B=1/0,k=0,u=a.VERSIONS;k<u.length;k++){var C=u[k];if(C.infoBits===t||C.infoBits===l)return C;var m=n(t,C.infoBits);m<B&&(i=C,B=m),(m=n(l,C.infoBits))<B&&(i=C,B=m);}return B<=3?i:undefined}(o);if(!e)return null;var r=function(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=d(o.get(r,8),e));for(var t=7;t>=0;t--)6!==t&&(e=d(o.get(8,t),e));var c=o.height,s=0;for(t=c-1;t>=c-7;t--)s=d(o.get(8,t),s);for(r=c-8;r<c;r++)s=d(o.get(r,8),s);for(var a=1/0,i=null,B=0,k=l;B<k.length;B++){var u=k[B],C=u.bits,m=u.formatInfo;if(C===e||C===s)return m;var f=n(e,C);f<a&&(i=m,a=f),e!==s&&(f=n(s,C))<a&&(i=m,a=f);}return a<=3?i:null}(o);if(!r)return null;var t=function(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach((function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock;})),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,n=0;n<a;n++)for(var d=0,l=c;d<l.length;d++)l[d].codewords.push(o.shift());if(t.ecBlocks.length>1){var i=t.ecBlocks[0].numBlocks,B=t.ecBlocks[1].numBlocks;for(n=0;n<B;n++)c[i+n].codewords.push(o.shift());}for(;o.length>0;)for(var k=0,u=c;k<u.length;k++)u[k].codewords.push(o.shift());return c}(B(o,e,r),e,r.errorCorrectionLevel);if(!t)return null;for(var i=t.reduce((function(o,e){return o+e.numDataCodewords}),0),k=new Uint8ClampedArray(i),u=0,C=0,m=t;C<m.length;C++){var f=m[C],w=s.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)k[u++]=w[P];}try{return c.decode(k,e.versionNumber)}catch(o){return null}}e.decode=function(o){if(null==o)return null;var e=k(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return k(o)};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t,c,s=r(7),a=r(8);function n(o,e){for(var r=[],t="",c=[10,12,14][e],s=o.readBits(c);s>=3;){if((l=o.readBits(10))>=1e3)throw new Error("Invalid numeric value above 999");var a=Math.floor(l/100),n=Math.floor(l/10)%10,d=l%10;r.push(48+a,48+n,48+d),t+=a.toString()+n.toString()+d.toString(),s-=3;}if(2===s){if((l=o.readBits(7))>=100)throw new Error("Invalid numeric value above 99");a=Math.floor(l/10),n=l%10;r.push(48+a,48+n),t+=a.toString()+n.toString();}else if(1===s){var l;if((l=o.readBits(4))>=10)throw new Error("Invalid numeric value above 9");r.push(48+l),t+=l.toString();}return {bytes:r,text:t}}!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci";}(t=e.Mode||(e.Mode={})),function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI";}(c||(c={}));var d=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function l(o,e){for(var r=[],t="",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),n=Math.floor(a/45),l=a%45;r.push(d[n].charCodeAt(0),d[l].charCodeAt(0)),t+=d[n]+d[l],s-=2;}if(1===s){n=o.readBits(6);r.push(d[n].charCodeAt(0)),t+=d[n];}return {bytes:r,text:t}}function i(o,e){for(var r=[],t="",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var n=o.readBits(8);r.push(n);}try{t+=decodeURIComponent(r.map((function(o){return "%"+("0"+o.toString(16)).substr(-2)})).join(""));}catch(o){}return {bytes:r,text:t}}function B(o,e){for(var r=[],t="",c=[8,10,12][e],s=o.readBits(c),n=0;n<s;n++){var d=o.readBits(13),l=Math.floor(d/192)<<8|d%192;l+=l<7936?33088:49472,r.push(l>>8,255&l),t+=String.fromCharCode(a.shiftJISTable[l]);}return {bytes:r,text:t}}e.decode=function(o,e){for(var r,a,d,k,u=new s.BitStream(o),C=e<=9?0:e<=26?1:2,m={text:"",bytes:[],chunks:[],version:e};u.available()>=4;){var f=u.readBits(4);if(f===c.Terminator)return m;if(f===c.ECI)0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(7)}):0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(14)}):0===u.readBits(1)?m.chunks.push({type:t.ECI,assignmentNumber:u.readBits(21)}):m.chunks.push({type:t.ECI,assignmentNumber:-1});else if(f===c.Numeric){var w=n(u,C);m.text+=w.text,(r=m.bytes).push.apply(r,w.bytes),m.chunks.push({type:t.Numeric,text:w.text});}else if(f===c.Alphanumeric){var P=l(u,C);m.text+=P.text,(a=m.bytes).push.apply(a,P.bytes),m.chunks.push({type:t.Alphanumeric,text:P.text});}else if(f===c.Byte){var v=i(u,C);m.text+=v.text,(d=m.bytes).push.apply(d,v.bytes),m.chunks.push({type:t.Byte,bytes:v.bytes,text:v.text});}else if(f===c.Kanji){var h=B(u,C);m.text+=h.text,(k=m.bytes).push.apply(k,h.bytes),m.chunks.push({type:t.Kanji,bytes:h.bytes,text:h.text});}}if(0===u.available()||0===u.readBits(u.available()))return m};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o;}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=255>>8-t<<(s=r-t);e=(this.bytes[this.byteOffset]&c)>>s,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++);}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var s;c=255>>(s=8-o)<<s;e=e<<o|(this.bytes[this.byteOffset]&c)>>s,this.bitOffset+=o;}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t;},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=r(1),c=r(2);e.decode=function(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var s=new t.default(285,256,0),a=new c.default(s,r),n=new Uint8ClampedArray(e),d=false,l=0;l<e;l++){var i=a.evaluateAt(s.exp(l+s.generatorBase));n[n.length-1-l]=i,0!==i&&(d=true);}if(!d)return r;var B=new c.default(s,n),k=function(o,e,r,t){var c;e.degree()<r.degree()&&(e=(c=[r,e])[0],r=c[1]);for(var s=e,a=r,n=o.zero,d=o.one;a.degree()>=t/2;){var l=s,i=n;if(n=d,(s=a).isZero())return null;a=l;for(var B=o.zero,k=s.getCoefficient(s.degree()),u=o.inverse(k);a.degree()>=s.degree()&&!a.isZero();){var C=a.degree()-s.degree(),m=o.multiply(a.getCoefficient(a.degree()),u);B=B.addOrSubtract(o.buildMonomial(C,m)),a=a.addOrSubtract(s.multiplyByMonomial(C,m));}if(d=B.multiplyPoly(n).addOrSubtract(i),a.degree()>=s.degree())return null}var f=d.getCoefficient(0);if(0===f)return null;var w=o.inverse(f);return [d.multiply(w),a.multiply(w)]}(s,s.buildMonomial(e,1),B,e);if(null===k)return null;var u=function(o,e){var r=e.degree();if(1===r)return [e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}(s,k[0]);if(null==u)return null;for(var C=function(o,e,r){for(var c=r.length,s=new Array(c),a=0;a<c;a++){for(var n=o.inverse(r[a]),d=1,l=0;l<c;l++)a!==l&&(d=o.multiply(d,t.addOrSubtractGF(1,o.multiply(r[l],n))));s[a]=o.multiply(e.evaluateAt(n),o.inverse(d)),0!==o.generatorBase&&(s[a]=o.multiply(s[a],n));}return s}(s,k[1],u),m=0;m<u.length;m++){var f=r.length-1-s.log(u[m]);if(f<0)return null;r[f]=t.addOrSubtractGF(r[f],C[m]);}return r};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}];},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=r(0);function c(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return {a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,n=t.x-r.x,d=e.y-r.y,l=t.y-r.y,i=a*l-n*d,B=(c*l-n*s)/i,k=(a*s-c*d)/i;return {a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}e.extract=function(o,e){for(var r,s,a=function(o,e,r,t){var s=c(o,e,r,t);return {a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),n=c(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),d=(s=a,{a11:(r=n).a11*s.a11+r.a21*s.a12+r.a31*s.a13,a12:r.a12*s.a11+r.a22*s.a12+r.a32*s.a13,a13:r.a13*s.a11+r.a23*s.a12+r.a33*s.a13,a21:r.a11*s.a21+r.a21*s.a22+r.a31*s.a23,a22:r.a12*s.a21+r.a22*s.a22+r.a32*s.a23,a23:r.a13*s.a21+r.a23*s.a22+r.a33*s.a23,a31:r.a11*s.a31+r.a21*s.a32+r.a31*s.a33,a32:r.a12*s.a31+r.a22*s.a32+r.a32*s.a33,a33:r.a13*s.a31+r.a23*s.a32+r.a33*s.a33}),l=t.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=d.a13*o+d.a23*e+d.a33;return {x:(d.a11*o+d.a21*e+d.a31)/r,y:(d.a12*o+d.a22*e+d.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=i(k+.5,B+.5);l.set(k,B,o.get(Math.floor(u.x),Math.floor(u.y)));}return {matrix:l,mappingFunction:i}};},function(o,e,r){Object.defineProperty(e,"__esModule",{value:true});var t=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};function c(o){return o.reduce((function(o,e){return o+e}))}function s(o,e,r,c){var s,a,n,d,l=[{x:Math.floor(o.x),y:Math.floor(o.y)}],i=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);i?(s=Math.floor(o.y),a=Math.floor(o.x),n=Math.floor(e.y),d=Math.floor(e.x)):(s=Math.floor(o.x),a=Math.floor(o.y),n=Math.floor(e.x),d=Math.floor(e.y));for(var B=Math.abs(n-s),k=Math.abs(d-a),u=Math.floor(-B/2),C=s<n?1:-1,m=a<d?1:-1,f=true,w=s,P=a;w!==n+C;w+=C){var v=i?P:w,h=i?w:P;if(r.get(v,h)!==f&&(f=!f,l.push({x:v,y:h}),l.length===c+1))break;if((u+=k)>0){if(P===d)break;P+=m,u-=B;}}for(var y=[],p=0;p<c;p++)l[p]&&l[p+1]?y.push(t(l[p],l[p+1])):y.push(0);return y}function a(o,e,r,t){var c,a=e.y-o.y,n=e.x-o.x,d=s(o,e,r,Math.ceil(t/2)),l=s(o,{x:o.x-n,y:o.y-a},r,Math.ceil(t/2)),i=d.shift()+l.shift()-1;return (c=l.concat(i)).concat.apply(c,d)}function n(o,e){var r=c(o)/c(e),t=0;return e.forEach((function(e,c){t+=Math.pow(o[c]-e*r,2);})),{averageSize:r,error:t}}function d(o,e,r){try{var t=a(o,{x:-1,y:o.y},r,e.length),c=a(o,{x:o.x,y:-1},r,e.length),s=a(o,{x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},r,e.length),d=a(o,{x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},r,e.length),l=n(t,e),i=n(c,e),B=n(s,e),k=n(d,e),u=Math.sqrt(l.error*l.error+i.error*i.error+B.error*B.error+k.error*k.error),C=(l.averageSize+i.averageSize+B.averageSize+k.averageSize)/4;return u+(Math.pow(l.averageSize-C,2)+Math.pow(i.averageSize-C,2)+Math.pow(B.averageSize-C,2)+Math.pow(k.averageSize-C,2))/C}catch(o){return 1/0}}function l(o,e){for(var r=Math.round(e.x);o.get(r,Math.round(e.y));)r--;for(var t=Math.round(e.x);o.get(t,Math.round(e.y));)t++;for(var c=(r+t)/2,s=Math.round(e.y);o.get(Math.round(c),s);)s--;for(var a=Math.round(e.y);o.get(Math.round(c),a);)a++;return {x:c,y:(s+a)/2}}function i(o,e,r,s,n){var l,i,B;try{l=function(o,e,r,s){var n=(c(a(o,r,s,5))/7+c(a(o,e,s,5))/7+c(a(r,o,s,5))/7+c(a(e,o,s,5))/7)/4;if(n<1)throw new Error("Invalid module size");var d=Math.round(t(o,e)/n),l=Math.round(t(o,r)/n),i=Math.floor((d+l)/2)+7;switch(i%4){case 0:i++;break;case 2:i--;}return {dimension:i,moduleSize:n}}(s,r,n,o),i=l.dimension,B=l.moduleSize;}catch(o){return null}var k=r.x-s.x+n.x,u=r.y-s.y+n.y,C=(t(s,n)+t(s,r))/2/B,m=1-3/C,f={x:s.x+m*(k-s.x),y:s.y+m*(u-s.y)},w=e.map((function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,s=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(s))){var a=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];c(a);return {x:r,y:s,score:d({x:Math.floor(r),y:Math.floor(s)},[1,1,1],o)+t({x:r,y:s},f)}}})).filter((function(o){return !!o})).sort((function(o,e){return o.score-e.score}));return {alignmentPattern:C>=15&&w.length?w[0]:f,dimension:i}}e.locate=function(o){for(var e=[],r=[],s=[],a=[],n=function(t){for(var n=0,d=false,l=[0,0,0,0,0],i=function(e){var s=o.get(e,t);if(s===d)n++;else {l=[l[1],l[2],l[3],l[4],n],n=1,d=s;var i=c(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!s,k=c(l.slice(-3))/3,u=Math.abs(l[2]-k)<k&&Math.abs(l[3]-k)<k&&Math.abs(l[4]-k)<k&&s;if(B){var C=e-l[3]-l[4],m=C-l[2],f={startX:m,endX:C,y:t};(w=r.filter((function(o){return m>=o.bottom.startX&&m<=o.bottom.endX||C>=o.bottom.startX&&m<=o.bottom.endX||m<=o.bottom.startX&&C>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<1.5&&l[2]/(o.bottom.endX-o.bottom.startX)>.5}))).length>0?w[0].bottom=f:r.push({top:f,bottom:f});}if(u){var w,P=e-l[4],v=P-l[3];f={startX:v,y:t,endX:P};(w=a.filter((function(o){return v>=o.bottom.startX&&v<=o.bottom.endX||P>=o.bottom.startX&&v<=o.bottom.endX||v<=o.bottom.startX&&P>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<1.5&&l[2]/(o.bottom.endX-o.bottom.startX)>.5}))).length>0?w[0].bottom=f:a.push({top:f,bottom:f});}}},B=-1;B<=o.width;B++)i(B);e.push.apply(e,r.filter((function(o){return o.bottom.y!==t&&o.bottom.y-o.top.y>=2}))),r=r.filter((function(o){return o.bottom.y===t})),s.push.apply(s,a.filter((function(o){return o.bottom.y!==t}))),a=a.filter((function(o){return o.bottom.y===t}));},B=0;B<=o.height;B++)n(B);e.push.apply(e,r.filter((function(o){return o.bottom.y-o.top.y>=2}))),s.push.apply(s,a);var k=e.filter((function(o){return o.bottom.y-o.top.y>=2})).map((function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,t=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(t))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=c(s)/s.length;return {score:d({x:Math.round(r),y:Math.round(t)},[1,1,3,1,1],o),x:r,y:t,size:a}}})).filter((function(o){return !!o})).sort((function(o,e){return o.score-e.score})).map((function(o,e,r){if(e>4)return null;var t=r.filter((function(o,r){return e!==r})).map((function(e){return {x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}})).sort((function(o,e){return o.score-e.score}));if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return {points:[o].concat(t.slice(0,2)),score:c}})).filter((function(o){return !!o})).sort((function(o,e){return o.score-e.score}));if(0===k.length)return null;var u=function(o,e,r){var c,s,a,n,d,l,i,B=t(o,e),k=t(e,r),u=t(o,r);return k>=B&&k>=u?(d=(c=[e,o,r])[0],l=c[1],i=c[2]):u>=k&&u>=B?(d=(s=[o,e,r])[0],l=s[1],i=s[2]):(d=(a=[o,r,e])[0],l=a[1],i=a[2]),(i.x-l.x)*(d.y-l.y)-(i.y-l.y)*(d.x-l.x)<0&&(d=(n=[i,d])[0],i=n[1]),{bottomLeft:d,topLeft:l,topRight:i}}(k[0].points[0],k[0].points[1],k[0].points[2]),C=u.topRight,m=u.topLeft,f=u.bottomLeft,w=i(o,s,C,m,f),P=[];w&&P.push({alignmentPattern:{x:w.alignmentPattern.x,y:w.alignmentPattern.y},bottomLeft:{x:f.x,y:f.y},dimension:w.dimension,topLeft:{x:m.x,y:m.y},topRight:{x:C.x,y:C.y}});var v=l(o,C),h=l(o,m),y=l(o,f),p=i(o,s,v,h,y);return p&&P.push({alignmentPattern:{x:p.alignmentPattern.x,y:p.alignmentPattern.y},bottomLeft:{x:y.x,y:y.y},topLeft:{x:h.x,y:h.y},topRight:{x:v.x,y:v.y},dimension:p.dimension}),0===P.length?null:P};}]).default}));
		
	} (jsQR_min$2));
	return jsQR_min$2.exports;
}

requireJsQR_min();

const template$3 = document.createElement('template');

template$3.innerHTML = `
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
        } else if (jsQR_min.exports && jsQR_min.exports.default) {
            return jsQR_min.exports.default;
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
        console.warn(message);
    }

    showSuccess(message) {
        const errorDiv = this.querySelector('.error-message');
        const successDiv = this.querySelector('.success-message');
        if (successDiv) {
            successDiv.textContent = message;
            successDiv.style.display = 'block';
            errorDiv.style.display = 'none';
        }
        console.debug(message);
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
            const code = jsQR_min.exports.default(imageData.data, imageData.width, imageData.height, {
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
        let $template = template$3.content.cloneNode(true);
        let $button = $template.querySelector("sl-button");
        let label = this._descriptor?.name?.[0]?.toUpperCase() + 
                   this._descriptor?.name?.slice(1) || 'Scan QR';
        
        $button.addEventListener("click", this.onClick);
        $button.innerText = label;

        Logger.log(ComponentType.TX_QR, `(render) name: ${this._descriptor.name}, hash: ${this._descriptor.hash}, value: ${this._value}`);

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

const template$2 = document.createElement('template');
template$2.innerHTML = `
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
            padding-bottom: 0.5rem;
        }

        .value-label {
            text-align: center;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--sl-color-primary-600);
            margin-top: 0.25rem;
        }

        .range-label {
            font-size: 0.875rem;
            color: var(--sl-color-primary-600);
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
        
        // Clone template once
        this.appendChild(template$2.content.cloneNode(true));
        
        // Store references
        this.$slider = this.querySelector("sl-range");
        this.$valueLabel = this.querySelector(".value-label");
        this.$minLabel = this.querySelector(".range-label.min");
        this.$maxLabel = this.querySelector(".range-label.max");
        this.$title = this.querySelector(".label");
        
        // Bind methods
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        // Add event listeners
        this.$slider.addEventListener("sl-input", this.handleInput);
        this.$slider.addEventListener("sl-change", this.handleChange);
    }

    handleInput(event) {
        this._value = parseFloat(event.target.value);
        // Update the displayed current value
        this.$valueLabel.textContent = this._value;
    }

    handleChange(event) {
        this._value = parseFloat(event.target.value);
        const hash = this._descriptor.hash;
        if (hash) {
            Socket.defaultSocket.sendMessage("states", [{ hash: hash, value: this._value }]);
        }
    }

    render() {
        // Get descriptor values
        this._low = this._descriptor.low !== undefined ? this._descriptor.low : 0;
        this._high = this._descriptor.high !== undefined ? this._descriptor.high : 100;
        this._value = this._descriptor.value !== undefined ? this._descriptor.value : this._value;
        
        Logger.log(ComponentType.TX_SLIDER, `(render) name: ${this._descriptor.name}, hash: ${this._descriptor.hash}, value: ${this._value}`);

        // Update tooltip
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);

        // Update title/name
        this.$title.textContent = this._descriptor.name || "TxSlider";

        // Configure the slider
        this.$slider.min = this._low;
        this.$slider.max = this._high;
        this.$slider.value = this._value;

        // Update labels
        this.$minLabel.textContent = this._low;
        this.$maxLabel.textContent = this._high;
        this.$valueLabel.textContent = this._value;
        
        // Handle disabled state
        const disable = this._descriptor.disable;
        if (disable) {
            this.disable();
            this.$slider.disabled = true;
        } else {
            this.enable();
            this.$slider.disabled = false;
        }
    }
}

window.customElements.define('tx-slider', TxSlider);

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
            <sl-input style="max-width: 10rem" type="text"></sl-input>
            <sl-button type="primary">Send</sl-button>
        </div>
    </div>
    `;

class TxString extends ConnectedElement {
    constructor() {
        super();
        this.value = '';
        this.maxLength = Number.POSITIVE_INFINITY;
        this.minLength = 0;
        
        // Clone template once
        this.appendChild(template$1.content.cloneNode(true));
        
        // Store references
        this.$input = this.querySelector("sl-input");
        this.$button = this.querySelector("sl-button");
        this.$label = this.querySelector(".label");
        
        // Bind event handlers
        this.onchange = this.onchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        this.render = this.render.bind(this);
        
        // Add event listeners
        this.$input.addEventListener("sl-change", this.onchange);
        this.$button.addEventListener("click", this.onsubmit);
    }

    isValid(value) {
        return value.length >= this.minLength && value.length <= this.maxLength;
    }

    onchange(e) {
        let newValue = e.target.value;
        if (this.isValid(newValue)) {
            this.value = newValue;
            let hash = this._descriptor.hash;
            Socket.defaultSocket.sendMessage("states", [{hash: hash, value: this.value}]);
        } else {
            alert(`String length must be between ${this.minLength} and ${this.maxLength} characters.`);
            e.target.value = this.value;
        }
    }

    onsubmit() {
        if (this.isValid(this.value)) {
            Socket.defaultSocket.sendMessage("states", [{hash: this._descriptor.hash, value: this.value}]);
        } else {
            alert(`String length must be between ${this.minLength} and ${this.maxLength} characters.`);
        }
    }

    render() {
        // Update tooltip
        tooltipUpdate(this.querySelector("rx-tooltip"), this._descriptor.tooltip);
        
        // Update content
        this.$label.innerText = this._descriptor.name;
        this.$input.value = this.value;
        
        // Set length limits from descriptor
        this.maxLength = this._descriptor.maxLength !== undefined ? this._descriptor.maxLength : Number.POSITIVE_INFINITY; 
        this.minLength = this._descriptor.minLength !== undefined ? this._descriptor.minLength : 0;
        
        Logger.log(ComponentType.TX_STRING, `(render) name: ${this._descriptor.name}, hash: ${this._descriptor.hash}, value: ${this.value}`);
        
        const disable = this._descriptor.disable;
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
        this.availableNodes = [];
        this.configData = null;
        this.interfaceData = null;
        this.rendererDescriptors = null;
        this.currentFile = 'interface.json';
        this.jsonFiles = ['interface.json', 'config.json'];
        this.fileContentResolve = null;
        this.fileContentReject = null;

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .edit-btn {
                    --sl-button-height-medium: 0.5rem;
                    --sl-button-padding-x: 0.5rem;
                }

                .interface-edit-card {
                    padding: 1px;
                    opacity: 0.6;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(4px);
                    transform: scale(0.85);
                    z-index: 1000;
                }

                .interface-edit-card:hover {
                    opacity: 1;
                    background: rgba(var(--sl-color-neutral-0-rgb), 0.8);
                    transform: scale(1);
                }

                .main-editor {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80vw;
                    height: 80vh;
                    background: rgba(var(--sl-color-neutral-0-rgb), 0.95);
                    border: 1px solid var(--sl-color-neutral-300);
                    border-radius: 8px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    z-index: 9000;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                }

                .main-editor-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 8999;
                }

                .edit-tools {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 10px;
                    flex-wrap: wrap;
                }

                .edit-tools sl-button {
                    --sl-button-height-medium: 0.5rem !important;
                    --sl-button-padding-x: 0.5rem !important;
                    white-space: nowrap;
                    width: auto !important;
                }

                sl-button::part(base) {
                    height: 0.5rem !important;
                    padding: 0 0.5rem !important;
                    width: auto !important;
                }

                .file-selector {
                    margin-bottom: 10px;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                }

                .file-selector select {
                    width: 250px;
                    padding: 8px;
                    border: 1px solid var(--sl-color-neutral-300);
                    border-radius: 4px;
                    background: rgba(var(--sl-color-neutral-50-rgb), 0.7);
                    color: var(--sl-color-neutral-1000);
                }

                .file-selector sl-button {
                    width: auto !important;
                }

                textarea {
                    flex: 1;
                    font-family: monospace;
                    padding: 10px;
                    background: rgba(var(--sl-color-neutral-50-rgb), 0.7);
                    color: var(--sl-color-neutral-1000);
                    border: 1px solid var(--sl-color-neutral-300);
                    border-radius: 4px;
                    resize: none;
                }

                .dialog-footer {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                }

                .dialog-footer sl-button {
                    width: auto !important;
                }

                .modal-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    background: rgba(0, 0, 0, 0.5);
                }

                .modal-dialog {
                    width: 500px;
                    max-width: 90vw;
                    max-height: 80vh;
                    background: var(--sl-color-neutral-0);
                    border-radius: 8px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                    overflow-y: auto;
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    border-bottom: 1px solid var(--sl-color-neutral-200);
                    padding-bottom: 10px;
                }

                .modal-header h3 {
                    margin: 0;
                }

                .modal-body {
                    flex: 1;
                    overflow-y: auto;
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    margin-top: 20px;
                    border-top: 1px solid var(--sl-color-neutral-200);
                    padding-top: 10px;
                }

                .form-row {
                    margin-bottom: 15px;
                }

                .component-properties {
                    margin-top: 15px;
                    padding: 15px;
                    border: 1px solid var(--sl-color-neutral-300);
                    border-radius: 4px;
                }

                .component-properties-title {
                    margin-bottom: 10px;
                    font-weight: bold;
                }

                .component-property {
                    margin-bottom: 10px;
                }

                .hidden {
                    display: none !important;
                }

                select {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid var(--sl-color-neutral-300);
                    border-radius: 4px;
                    background: rgba(var(--sl-color-neutral-50-rgb), 0.7);
                    color: var(--sl-color-neutral-1000);
                }

                select:required:invalid {
                    border-color: var(--sl-color-danger-500);
                }
                
                .loading-indicator {
                    display: none;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    background: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    z-index: 10001;
                }
                
                .loading-indicator.active {
                    display: block;
                }
            </style>

            <div class="interface-edit-card">
                <sl-icon-button name="pencil" class="edit-btn" style="font-size: 1.1rem;"></sl-icon-button>
            </div>
        `;

        this.appendChild(template.content.cloneNode(true));
    }

    async fetchJsonFiles() {
        return new Promise((resolve, reject) => {
            let timeoutId;
            try {
                const isESP32 = this.socket?.url?.includes('/ws');
                if (!isESP32 || !this.socket) {
                    console.warn('No WebSocket connection, using default files');
                    this.jsonFiles = ['interface.json', 'config.json'];
                    resolve(this.jsonFiles);
                    return;
                }

                // Configurer le handler pour la réponse de directory
                const messageHandler = (files) => {
                    console.log("Directory response received:", files);
                    const jsonFiles = files
                        .filter(file => file.endsWith('.json'))
                        .map(file => file.startsWith('/') ? file.substring(1) : file);

                    this.jsonFiles = jsonFiles.length > 0 ? jsonFiles : ['interface.json', 'config.json'];

                    if (!this.jsonFiles.includes(this.currentFile)) {
                        this.currentFile = this.jsonFiles[0];
                    }

                    this.socket.removeTarget("Directory");
                    clearTimeout(timeoutId);
                    resolve(this.jsonFiles);
                };

                // Enregistrer le handler pour les réponses de directory
                this.socket.setTarget("Directory", messageHandler);

                // Formuler EXACTEMENT la même demande que dans le code original
                console.log("Sending directory request");
                const request = {
                    "directory": true,
                    "filter": "*.json"
                };

                // Envoyer la demande via WebSocket exactement comme avant
                const jsonMessage = JSON.stringify(request);
                console.log("Sending:", jsonMessage);
                this.socket.websocket.send(jsonMessage);

                // Configurer un timeout pour éviter de bloquer indéfiniment
                timeoutId = setTimeout(() => {
                    if (this.socket) {
                        this.socket.removeTarget("Directory");
                    }
                    console.warn('WebSocket timeout, falling back to default files');
                    this.jsonFiles = ['interface.json', 'config.json'];
                    resolve(this.jsonFiles);
                }, 5000);
            } catch (err) {
                if (this.socket) {
                    this.socket.removeTarget("Directory");
                }
                clearTimeout(timeoutId);
                console.error('Error fetching files, using defaults:', err);
                this.jsonFiles = ['interface.json', 'config.json'];
                reject(err);
            }
        });
    }

    createInterface() {
        this.removeExistingInterfaces();

        const mainEditor = document.createElement('div');
        mainEditor.className = 'main-editor-backdrop';
        mainEditor.innerHTML = `
            <div class="main-editor">
                <div class="file-selector">
                    <label for="json-file-select">Select JSON File:</label>
                    <select id="json-file-select" required></select>
                    <sl-button class="upload-btn" variant="default">Upload JSON</sl-button>
                    <sl-button class="download-btn" variant="default">Download JSON</sl-button>
                    <input type="file" id="json-upload" accept=".json" style="display: none;">
                </div>
                <div class="edit-tools">
                </div>
                <textarea spellcheck="false"></textarea>
                <div class="dialog-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="save-btn" variant="primary">Save</sl-button>
                </div>
            </div>
            <div class="loading-indicator">
                <p>Loading file content...</p>
            </div>
        `;

        document.body.appendChild(mainEditor);
        this.mainEditorBackdrop = mainEditor;
        this.mainEditor = mainEditor.querySelector('.main-editor');
        this.textarea = mainEditor.querySelector('textarea');
        this.editTools = mainEditor.querySelector('.edit-tools');
        this.fileSelect = mainEditor.querySelector('#json-file-select');
        this.uploadBtn = mainEditor.querySelector('.upload-btn');
        this.downloadBtn = mainEditor.querySelector('.download-btn');
        this.fileInput = mainEditor.querySelector('#json-upload');
        this.cancelBtn = mainEditor.querySelector('.cancel-btn');
        this.saveBtn = mainEditor.querySelector('.save-btn');
        this.loadingIndicator = mainEditor.querySelector('.loading-indicator');

        this.populateFileSelector();
        this.updateEditorState(this.currentFile);

        this.uploadBtn.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', () => this.uploadFile());
        this.downloadBtn.addEventListener('click', () => this.downloadFile());
        this.cancelBtn.addEventListener('click', () => this.closeEditor());
        this.saveBtn.addEventListener('click', () => this.saveChanges());

        this.mainEditorBackdrop.addEventListener('click', (event) => {
            if (event.target === this.mainEditorBackdrop) this.closeEditor();
        });

        this.editBtn = this.querySelector('.edit-btn');
        this.editBtn.addEventListener('click', () => this.openEditor());

        this.fileSelect.addEventListener('change', (event) => {
            this.currentFile = event.target.value;
            this.updateEditorState(this.currentFile);
            this.loadFileContent();
        });
    }

    async uploadFile() {
        const file = this.fileInput.files[0];
        if (!file || !file.name.endsWith('.json')) {
            window.notify({ type: "error", name: "Error", desc: "Please select a .json file" });
            console.log('Fichier invalide ou non sélectionné:', file);
            return;
        }
        console.log('Fichier sélectionné:', file.name, 'Taille:', file.size);

        const reader = new FileReader();
        reader.onload = async (e) => {
            const content = e.target.result;
            console.log('1. Contenu brut lu par FileReader:', content.substring(0, 100) + '...');

            try {
                // Étape 1 : Vérification du JSON
                console.log('2. Tentative de parsing JSON...');
                const parsedJson = JSON.parse(content);
                console.log('3. JSON parsé avec succès');

                // Étape 2 : Mise à jour de l'interface (sans upload serveur)
                window.notify({ type: "success", name: "Success", desc: `${file.name} loaded locally` });
                console.log('4. Mise à jour des fichiers JSON locaux...');
                if (!this.jsonFiles.includes(file.name)) {
                    this.jsonFiles.push(file.name); // Ajouter le fichier à la liste locale
                }
                this.populateFileSelector();
                this.currentFile = file.name;
                this.fileSelect.value = file.name;

                if (!this.mainEditorBackdrop || !this.textarea) {
                    console.log('5. Éditeur non existant, création...');
                    this.createInterface();
                }
                this.textarea.value = content;
                console.log('6. Textarea mis à jour');
                this.updateEditorState(this.currentFile);
                console.log('7. État de l\'éditeur mis à jour pour:', this.currentFile);
            } catch (err) {
                window.notify({ type: "error", name: "Error", desc: "Invalid JSON format" });
                console.error('Erreur détectée:', err.message);
                console.error('Détails de l\'erreur:', err);
            }
        };
        reader.onerror = (e) => {
            window.notify({ type: "error", name: "Error", desc: "Erreur lors de la lecture du fichier" });
            console.error('Erreur de FileReader:', e);
        };
        console.log('Lecture du fichier en cours...');
        reader.readAsText(file);
    }

    downloadFile() {
        const content = this.textarea.value;
        try {
            JSON.parse(content);
            const blob = new Blob([content], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = this.currentFile;
            a.click();
            URL.revokeObjectURL(url);
            window.notify({ type: "success", name: "Success", desc: `${this.currentFile} downloaded` });
        } catch (err) {
            window.notify({ type: "error", name: "Error", desc: "Invalid JSON format" });
        }
    }

    populateFileSelector() {
        this.fileSelect.innerHTML = '';
        this.jsonFiles.forEach(file => {
            const option = document.createElement('option');
            option.value = file;
            option.textContent = file;
            this.fileSelect.appendChild(option);
        });
        this.fileSelect.value = this.currentFile;
    }

    updateEditorState(file) {
        this.updateToolsBasedOnFile(file);
        if (file === 'config.json') {
            this.textarea.setAttribute('readonly', 'true');
        } else {
            this.textarea.removeAttribute('readonly');
        }
    }

    updateToolsBasedOnFile(file) {
        this.editTools.innerHTML = '';

        if (file === 'interface.json') {
            this.editTools.innerHTML = `
                <sl-button class="add-section-btn" variant="success">Add Section</sl-button>
                <sl-button class="add-node-btn" variant="primary">Add Node to Section</sl-button>
                <sl-button class="remove-node-btn" variant="danger">Remove Node</sl-button>
                <sl-button class="remove-section-btn" variant="danger">Remove Section</sl-button>
            `;
        } else if (file === 'config.json') {
            this.editTools.innerHTML = `
                <sl-button class="add-wifi-btn" variant="success">Add WiFi</sl-button>
                <sl-button class="edit-wifi-btn" variant="primary">Edit WiFi</sl-button>
                <sl-button class="remove-wifi-btn" variant="danger">Remove WiFi</sl-button>
                <sl-button class="edit-node-name-btn" variant="primary">Edit Node Names</sl-button>
                <sl-button class="edit-password-btn" variant="primary">Edit Passwords</sl-button>
            `;
        }

        this.forceButtonStyles();

        // Attach event handlers
        this.mainEditor.querySelector('.add-section-btn')?.addEventListener('click', () => this.showAddSectionDialog());
        this.mainEditor.querySelector('.add-node-btn')?.addEventListener('click', () => this.showAddNodeDialog());
        this.mainEditor.querySelector('.remove-node-btn')?.addEventListener('click', () => this.showRemoveNodeDialog());
        this.mainEditor.querySelector('.remove-section-btn')?.addEventListener('click', () => this.showRemoveSectionDialog());
        this.mainEditor.querySelector('.add-wifi-btn')?.addEventListener('click', () => this.showAddWifiDialog());
        this.mainEditor.querySelector('.edit-wifi-btn')?.addEventListener('click', () => this.showEditWifiDialog());
        this.mainEditor.querySelector('.remove-wifi-btn')?.addEventListener('click', () => this.showRemoveWifiDialog());
        this.mainEditor.querySelector('.edit-node-name-btn')?.addEventListener('click', () => this.showEditNodeNameDialog());
        this.mainEditor.querySelector('.edit-password-btn')?.addEventListener('click', () => this.showEditPasswordDialog());
    }

    forceButtonStyles() {
        const buttons = this.mainEditor?.querySelectorAll('.edit-tools sl-button, .file-selector sl-button, .dialog-footer sl-button') || [];
        buttons.forEach(button => {
            button.style.setProperty('--sl-button-height-medium', '0.5rem', 'important');
            button.style.setProperty('--sl-button-padding-x', '0.5rem', 'important');

            const shadowRoot = button.shadowRoot;
            if (shadowRoot) {
                const base = shadowRoot.querySelector('.button__base');
                if (base) {
                    base.style.height = '0.5rem';
                    base.style.padding = '0 0.5rem';
                    base.style.width = 'auto';
                }
            }
        });
    }

    async openEditor() {
        try {
            await this.fetchJsonFiles();
            this.createInterface();
            await this.loadFileContent();
            await this.loadConfigData();
            await this.loadRendererDescriptors();
            this.forceButtonStyles();
        } catch (err) {
            console.error('Editor error:', err);
            window.notify({
                type: "error",
                name: "Error",
                desc: `Failed to load ${this.currentFile} configuration`
            });
            this.removeExistingInterfaces();
        }
    }

    async loadFileContent() {
        try {
            this.showLoading(true);
            console.log(`Loading file content for: ${this.currentFile}`);

            // Use HTTP fetch as the only method
            const response = await fetch(`/${this.currentFile}`);

            if (!response.ok) {
                throw new Error(`HTTP request failed with status ${response.status}`);
            }

            const content = await response.text();
            const parsedContent = JSON.parse(content);

            // Update the interface and store the data
            this.textarea.value = JSON.stringify(parsedContent, null, 2);

            if (this.currentFile === 'config.json') {
                this.configData = parsedContent;
            } else if (this.currentFile === 'interface.json') {
                this.interfaceData = parsedContent;
            } else if (this.currentFile === 'renderers.json') {
                this.rendererDescriptors = parsedContent;
            }

            console.log(`Successfully loaded ${this.currentFile}`);

        } catch (err) {
            console.error('Error loading file content:', err);
            window.notify({
                type: "error",
                name: "Error",
                desc: `Failed to load ${this.currentFile}: ${err.message}`
            });
        } finally {
            this.showLoading(false);
        }
    }

    showLoading(show) {
        if (this.loadingIndicator) {
            if (show) {
                this.loadingIndicator.classList.add('active');
            } else {
                this.loadingIndicator.classList.remove('active');
            }
        }
    }

    closeEditor() {
        if (this.mainEditorBackdrop) {
            this.mainEditorBackdrop.remove();
            this.mainEditorBackdrop = null;
        }
        document.querySelectorAll('.modal-container').forEach(modal => modal.remove());
    }

    async saveChanges() {
        try {
            const content = this.textarea.value;
            JSON.parse(content); // Validate JSON format

            if (!this.socket) {
                throw new Error("Socket not available");
            }

            this.showLoading(true);

            // Send the save command via WebSocket
            const filePath = this.currentFile.startsWith('/')
                ? this.currentFile
                : '/' + this.currentFile;

            this.socket.sendMessage("saveFile", [{
                path: filePath,
                data: content
            }]);

            window.notify({
                type: "success",
                name: "Success",
                desc: `${this.currentFile} saved to ESP32`
            });

            this.closeEditor();

            // Request state refresh
            this.socket.sendMessage("allStatesRequest", true);
        } catch (err) {
            console.error('Save failed:', err);
            window.notify({
                type: "error",
                name: "Error",
                desc: err instanceof SyntaxError ? "Invalid JSON format" : `Failed to save ${this.currentFile}: ${err.message}`
            });
        } finally {
            this.showLoading(false);
        }
    }

    connectedCallback() {
        this.editBtn = this.querySelector('.edit-btn');
        if (this.editBtn) {
            this.editBtn.addEventListener('click', () => this.openEditor());
        }
    }

    disconnectedCallback() {
        this.removeExistingInterfaces();
        this.editBtn?.removeEventListener('click', this.openEditor);

        // Clean up event listeners
        if (this.uploadBtn) this.uploadBtn.removeEventListener('click', () => this.fileInput.click());
        if (this.fileInput) this.fileInput.removeEventListener('change', () => this.uploadFile());
        if (this.downloadBtn) this.downloadBtn.removeEventListener('click', () => this.downloadFile());
        if (this.cancelBtn) this.cancelBtn.removeEventListener('click', () => this.closeEditor());
        if (this.saveBtn) this.saveBtn.removeEventListener('click', () => this.saveChanges());
        if (this.fileSelect) this.fileSelect.removeEventListener('change', () => { });

        // Clean up socket targets
        if (this.socket) {
            this.socket.removeTarget("directory");
        }
    }

    render() { }
    update() { }

    // Méthodes d'édition pour l'interface.json
    showAddSectionDialog() {
        // Vérifier que nous avons chargé les données d'interface
        if (!this.interfaceData || !this.interfaceData.pages) {
            this.interfaceData = JSON.parse(this.textarea.value);
            if (!this.interfaceData.pages) {
                window.notify({
                    type: "error",
                    name: "Error",
                    desc: "Invalid interface structure. 'pages' not found."
                });
                return;
            }
        }

        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Add New Section</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="page-select">Select Page:</label>
                        <select id="page-select" required>
                            ${this.interfaceData.pages.map((page, idx) =>
            `<option value="${idx}">${page.PageName}</option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="section-name">Section Name:</label>
                        <input type="text" id="section-name" required>
                    </div>
                    <div class="form-row">
                        <label for="section-orientation">Orientation:</label>
                        <select id="section-orientation">
                            <option value="horizontal">Horizontal</option>
                            <option value="vertical">Vertical</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="success">Add Section</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event handlers
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const pageIndex = parseInt(modal.querySelector('#page-select').value);
            const sectionName = modal.querySelector('#section-name').value.trim();
            const orientation = modal.querySelector('#section-orientation').value;

            if (!sectionName) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "Section name is required"
                });
                return;
            }

            // Create new section
            const newSection = {
                SectionName: sectionName,
                orientation: orientation,
                NodesList: []
            };

            // Add to the selected page
            const page = this.interfaceData.pages[pageIndex];
            if (!page.sections) {
                page.sections = [];
            }
            page.sections.push(newSection);

            // Update the textarea with the modified data
            this.textarea.value = JSON.stringify(this.interfaceData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `Section "${sectionName}" added to page "${page.PageName}"`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    showAddNodeDialog() {
        // Parse current textarea content
        try {
            this.interfaceData = JSON.parse(this.textarea.value);
        } catch (error) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Invalid JSON format in editor"
            });
            return;
        }

        if (!this.interfaceData || !this.interfaceData.pages || !this.availableNodes) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Required data not loaded"
            });
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Add Node to Section</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="node-page-select">Select Page:</label>
                        <select id="node-page-select" required>
                            ${this.interfaceData.pages.map((page, idx) =>
            `<option value="${idx}">${page.PageName}</option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="node-section-select">Select Section:</label>
                        <select id="node-section-select" required>
                            <option value="">Select a page first</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="component-type">Component Type:</label>
                        <select id="component-type" required>
                            <option value="rx-label">Label (display)</option>
                            <option value="rx-indicator">Indicator (display)</option>
                            <option value="rx-level-bar">Level bar (display)</option>
                            <option value="rx-numeric">Numeric (display)</option>
                            <option value="tx-button">Button</option>
                            <option value="tx-button-hold">Hold Button</option>
                            <option value="tx-bool">Switch</option>
                            <option value="tx-dropdown">Dropdown</option>
                            <option value="tx-numeric">Numeric Input</option>
                            <option value="tx-slider">Slider</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="node-select">Select Node:</label>
                        <select id="node-select" required>
                            <option value="">Loading nodes...</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="node-name">Display Name:</label>
                        <input type="text" id="node-name" required>
                    </div>
                    <div id="component-properties" class="component-properties">
                        <div class="component-properties-title">Component Properties</div>
                        <!-- Dynamic properties will be added here -->
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="success">Add Node</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Element references
        const pageSelect = modal.querySelector('#node-page-select');
        const sectionSelect = modal.querySelector('#node-section-select');
        const componentTypeSelect = modal.querySelector('#component-type');
        const nodeSelect = modal.querySelector('#node-select');
        const nodeName = modal.querySelector('#node-name');
        const componentProperties = modal.querySelector('#component-properties');

        // Update sections when page changes
        const updateSections = () => {
            const pageIndex = parseInt(pageSelect.value);
            const page = this.interfaceData.pages[pageIndex];

            sectionSelect.innerHTML = '';

            if (page.sections && page.sections.length > 0) {
                page.sections.forEach((section, idx) => {
                    const option = document.createElement('option');
                    option.value = idx;
                    option.textContent = section.SectionName;
                    sectionSelect.appendChild(option);
                });
            } else {
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "No sections found";
                sectionSelect.appendChild(option);
            }
        };

        // Update node list
        const updateNodesList = () => {
            nodeSelect.innerHTML = '';

            if (!this.availableNodes || this.availableNodes.length === 0) {
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "No nodes available";
                nodeSelect.appendChild(option);
                return;
            }

            this.availableNodes.forEach(node => {
                const option = document.createElement('option');
                option.value = node.hash;
                option.textContent = `${node.name} (${node.hash})`;
                nodeSelect.appendChild(option);
            });

            // Set the first node as selected and update name field
            if (this.availableNodes.length > 0) {
                nodeSelect.value = this.availableNodes[0].hash;
                nodeName.value = this.availableNodes[0].name;
            }
        };

        // Update component properties
        const updateComponentProperties = () => {
            const componentType = componentTypeSelect.value;
            componentProperties.innerHTML = '<div class="component-properties-title">Component Properties</div>';

            // Get renderer descriptors for this component type
            this.rendererDescriptors && this.rendererDescriptors[componentType];

            // Add common properties
            this.addComponentProperty(componentProperties, 'color', 'Color', 'select', false, [
                { value: 'primary', label: 'Primary (blue)' },
                { value: 'success', label: 'Success (green)' },
                { value: 'warning', label: 'Warning (yellow)' },
                { value: 'danger', label: 'Danger (red)' },
                { value: 'neutral', label: 'Neutral (gray)' }
            ]);

            // Add component-specific properties based on type
            if (componentType === 'tx-bool') {
                this.addComponentProperty(componentProperties, 'disable', 'Disabled', 'checkbox');
            } else if (componentType === 'tx-button' || componentType === 'tx-button-hold') ; else if (componentType === 'tx-dropdown') {
                this.addComponentProperty(componentProperties, 'items', 'Items (comma separated)', 'textarea');
            } else if (componentType === 'tx-numeric') {
                this.addComponentProperty(componentProperties, 'min', 'Minimum', 'number');
                this.addComponentProperty(componentProperties, 'max', 'Maximum', 'number');
                this.addComponentProperty(componentProperties, 'readonly', 'Read Only', 'checkbox');
            } else if (componentType === 'tx-slider') {
                this.addComponentProperty(componentProperties, 'min', 'Minimum', 'number');
                this.addComponentProperty(componentProperties, 'max', 'Maximum', 'number');
            } else if (componentType === 'rx-indicator') {
                this.addComponentProperty(componentProperties, 'color', 'Color', 'text');
                this.addComponentProperty(componentProperties, 'blink', 'Blinking', 'checkbox');
            }
        };

        // Initialize component properties
        updateComponentProperties();

        // Initialize sections list for the first page
        updateSections();

        // Initialize nodes list
        updateNodesList();

        // Event listeners
        pageSelect.addEventListener('change', updateSections);
        componentTypeSelect.addEventListener('change', updateComponentProperties);
        nodeSelect.addEventListener('change', () => {
            // Update node name when selection changes
            const selectedHash = nodeSelect.value;
            const selectedNode = this.availableNodes.find(node => node.hash.toString() === selectedHash);
            if (selectedNode) {
                nodeName.value = selectedNode.name;
            }
        });

        // Cancel button
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());

        // Confirm button
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const pageIndex = parseInt(pageSelect.value);
            const sectionIndex = parseInt(sectionSelect.value);
            const componentType = componentTypeSelect.value;
            const selectedHash = nodeSelect.value;
            const displayName = nodeName.value.trim();

            if (!displayName) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "Display name is required"
                });
                return;
            }

            // Create new node object
            const newNode = {
                name: displayName,
                component: componentType,
                hash: parseInt(selectedHash)
            };

            // Add properties
            const props = this.getComponentProperties(componentProperties);
            Object.assign(newNode, props);

            // Add node to the selected section
            const page = this.interfaceData.pages[pageIndex];
            const section = page.sections[sectionIndex];

            if (!section.NodesList) {
                section.NodesList = [];
            }

            section.NodesList.push(newNode);

            // Update the textarea
            this.textarea.value = JSON.stringify(this.interfaceData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `Node "${displayName}" added to section "${section.SectionName}"`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    showRemoveNodeDialog() {
        // Parse current textarea content
        try {
            this.interfaceData = JSON.parse(this.textarea.value);
        } catch (error) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Invalid JSON format in editor"
            });
            return;
        }

        if (!this.interfaceData || !this.interfaceData.pages) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Interface data not loaded"
            });
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Remove Node</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="remove-page-select">Select Page:</label>
                        <select id="remove-page-select" required>
                            ${this.interfaceData.pages.map((page, idx) =>
            `<option value="${idx}">${page.PageName}</option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="remove-section-select">Select Section:</label>
                        <select id="remove-section-select" required>
                            <option value="">Select a page first</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="remove-node-select">Select Node to Remove:</label>
                        <select id="remove-node-select" required>
                            <option value="">Select a section first</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="danger">Remove Node</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Element references
        const pageSelect = modal.querySelector('#remove-page-select');
        const sectionSelect = modal.querySelector('#remove-section-select');
        const nodeSelect = modal.querySelector('#remove-node-select');

        // Update sections when page changes
        const updateSections = () => {
            const pageIndex = parseInt(pageSelect.value);
            const page = this.interfaceData.pages[pageIndex];

            sectionSelect.innerHTML = '';

            if (page.sections && page.sections.length > 0) {
                page.sections.forEach((section, idx) => {
                    const option = document.createElement('option');
                    option.value = idx;
                    option.textContent = section.SectionName;
                    sectionSelect.appendChild(option);
                });

                // Trigger node update for the first section
                sectionSelect.value = "0";
                updateNodes();
            } else {
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "No sections found";
                sectionSelect.appendChild(option);

                // Clear node select
                nodeSelect.innerHTML = '';
                const emptyOption = document.createElement('option');
                emptyOption.value = "";
                emptyOption.textContent = "No sections available";
                nodeSelect.appendChild(emptyOption);
            }
        };

        // Update nodes when section changes
        const updateNodes = () => {
            const pageIndex = parseInt(pageSelect.value);
            const sectionIndex = parseInt(sectionSelect.value);

            if (isNaN(pageIndex) || isNaN(sectionIndex)) {
                nodeSelect.innerHTML = '';
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "Invalid selection";
                nodeSelect.appendChild(option);
                return;
            }

            const page = this.interfaceData.pages[pageIndex];
            const section = page.sections[sectionIndex];

            nodeSelect.innerHTML = '';

            if (section.NodesList && section.NodesList.length > 0) {
                section.NodesList.forEach((node, idx) => {
                    const option = document.createElement('option');
                    option.value = idx;
                    option.textContent = node.name || `Node ${idx + 1}`;
                    nodeSelect.appendChild(option);
                });
            } else {
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "No nodes found";
                nodeSelect.appendChild(option);
            }
        };

        // Initialize sections list for the first page
        updateSections();

        // Event listeners
        pageSelect.addEventListener('change', updateSections);
        sectionSelect.addEventListener('change', updateNodes);

        // Cancel button
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());

        // Confirm button
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const pageIndex = parseInt(pageSelect.value);
            const sectionIndex = parseInt(sectionSelect.value);
            const nodeIndex = parseInt(nodeSelect.value);

            if (isNaN(pageIndex) || isNaN(sectionIndex) || isNaN(nodeIndex)) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "Please select a page, section, and node"
                });
                return;
            }

            // Remove the node
            const page = this.interfaceData.pages[pageIndex];
            const section = page.sections[sectionIndex];
            const nodeName = section.NodesList[nodeIndex].name || `Node ${nodeIndex + 1}`;

            section.NodesList.splice(nodeIndex, 1);

            // Update the textarea
            this.textarea.value = JSON.stringify(this.interfaceData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `Node "${nodeName}" removed successfully`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    showRemoveSectionDialog() {
        // Parse current textarea content
        try {
            this.interfaceData = JSON.parse(this.textarea.value);
        } catch (error) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Invalid JSON format in editor"
            });
            return;
        }

        if (!this.interfaceData || !this.interfaceData.pages) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Interface data not loaded"
            });
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Remove Section</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="remove-section-page-select">Select Page:</label>
                        <select id="remove-section-page-select" required>
                            ${this.interfaceData.pages.map((page, idx) =>
            `<option value="${idx}">${page.PageName}</option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="remove-section-select">Select Section to Remove:</label>
                        <select id="remove-section-select" required>
                            <option value="">Select a page first</option>
                        </select>
                    </div>
                    <div class="warning-message" style="color: #dc3545; margin-top: 10px;">
                        Warning: This will remove all nodes in the section!
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="danger">Remove Section</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Element references
        const pageSelect = modal.querySelector('#remove-section-page-select');
        const sectionSelect = modal.querySelector('#remove-section-select');

        // Update sections when page changes
        const updateSections = () => {
            const pageIndex = parseInt(pageSelect.value);
            const page = this.interfaceData.pages[pageIndex];

            sectionSelect.innerHTML = '';

            if (page.sections && page.sections.length > 0) {
                page.sections.forEach((section, idx) => {
                    const option = document.createElement('option');
                    option.value = idx;
                    option.textContent = section.SectionName;
                    sectionSelect.appendChild(option);
                });
            } else {
                const option = document.createElement('option');
                option.value = "";
                option.textContent = "No sections found";
                sectionSelect.appendChild(option);
            }
        };

        // Initialize sections list for the first page
        updateSections();

        // Event listeners
        pageSelect.addEventListener('change', updateSections);

        // Cancel button
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());

        // Confirm button
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const pageIndex = parseInt(pageSelect.value);
            const sectionIndex = parseInt(sectionSelect.value);

            if (isNaN(pageIndex) || isNaN(sectionIndex)) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "Please select a page and section"
                });
                return;
            }

            // Remove the section
            const page = this.interfaceData.pages[pageIndex];
            const sectionName = page.sections[sectionIndex].SectionName;

            page.sections.splice(sectionIndex, 1);

            // Update the textarea
            this.textarea.value = JSON.stringify(this.interfaceData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `Section "${sectionName}" removed successfully`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    // Méthodes pour l'édition du fichier config.json
    showAddWifiDialog() {
        // Parse current textarea content
        try {
            this.configData = JSON.parse(this.textarea.value);
        } catch (error) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Invalid JSON format in editor"
            });
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Add WiFi Configuration</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="wifi-name">Connection Name:</label>
                        <input type="text" id="wifi-name" required placeholder="Home WiFi">
                    </div>
                    <div class="form-row">
                        <label for="wifi-ssid">SSID:</label>
                        <input type="text" id="wifi-ssid" required placeholder="MyNetwork">
                    </div>
                    <div class="form-row">
                        <label for="wifi-pwd">Password:</label>
                        <input type="password" id="wifi-pwd" required placeholder="password">
                    </div>
                    <div class="form-row">
                        <label for="wifi-dhcp">DHCP:</label>
                        <input type="checkbox" id="wifi-dhcp" checked>
                    </div>
                    <div id="static-ip-fields" style="display: none;">
                        <div class="form-row">
                            <label for="wifi-ip">IP Address:</label>
                            <input type="text" id="wifi-ip" placeholder="192.168.1.100">
                        </div>
                        <div class="form-row">
                            <label for="wifi-dns">DNS Server:</label>
                            <input type="text" id="wifi-dns" placeholder="8.8.8.8">
                        </div>
                        <div class="form-row">
                            <label for="wifi-gateway">Gateway:</label>
                            <input type="text" id="wifi-gateway" placeholder="192.168.1.1">
                        </div>
                        <div class="form-row">
                            <label for="wifi-mask">Subnet Mask:</label>
                            <input type="text" id="wifi-mask" placeholder="255.255.255.0">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="success">Add WiFi</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Element references
        const dhcpCheckbox = modal.querySelector('#wifi-dhcp');
        const staticIpFields = modal.querySelector('#static-ip-fields');

        // Toggle static IP fields based on DHCP checkbox
        dhcpCheckbox.addEventListener('change', () => {
            staticIpFields.style.display = dhcpCheckbox.checked ? 'none' : 'block';
        });

        // Cancel button
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());

        // Confirm button
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const name = modal.querySelector('#wifi-name').value.trim();
            const ssid = modal.querySelector('#wifi-ssid').value.trim();
            const pwd = modal.querySelector('#wifi-pwd').value;
            const dhcp = dhcpCheckbox.checked;

            if (!name || !ssid || !pwd) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "Connection name, SSID, and Password are required"
                });
                return;
            }

            // Create new WiFi config
            const newWifi = {
                name: name,
                ssid: ssid,
                pwd: pwd,
                dhcp: dhcp
            };

            if (!dhcp) {
                const ip = modal.querySelector('#wifi-ip').value.trim();
                const dns = modal.querySelector('#wifi-dns').value.trim();
                const gateway = modal.querySelector('#wifi-gateway').value.trim();
                const mask = modal.querySelector('#wifi-mask').value.trim();

                if (!ip || !dns || !gateway || !mask) {
                    window.notify({
                        type: "error",
                        name: "Validation Error",
                        desc: "IP, DNS, Gateway, and Subnet Mask are required for static IP"
                    });
                    return;
                }

                newWifi.ip = ip;
                newWifi.dns = dns;
                newWifi.gateway = gateway;
                newWifi.mask = mask;
            }

            // Find where to add the WiFi config in the config data
            let wifiArray = null;
            let wifiConfigItem = null;

            // Look for the WiFi array in the config
            if (this.configData.config && Array.isArray(this.configData.config)) {
                for (const item of this.configData.config) {
                    if (item.Wifi && Array.isArray(item.Wifi)) {
                        wifiArray = item.Wifi;
                        wifiConfigItem = item;
                        break;
                    }
                }
            }

            // If no WiFi array found, create one
            if (!wifiArray) {
                wifiConfigItem = { Wifi: [] };
                wifiArray = wifiConfigItem.Wifi;

                if (!this.configData.config) {
                    this.configData.config = [];
                }

                this.configData.config.push(wifiConfigItem);
            }

            // Add the new WiFi config
            wifiArray.push(newWifi);

            // Update the textarea
            this.textarea.value = JSON.stringify(this.configData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `WiFi configuration "${name}" added successfully`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    showEditWifiDialog() {
        // Parse current textarea content
        try {
            this.configData = JSON.parse(this.textarea.value);
        } catch (error) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Invalid JSON format in editor"
            });
            return;
        }

        // Extract WiFi configs
        const wifiConfigs = [];
        if (this.configData.config && Array.isArray(this.configData.config)) {
            for (const item of this.configData.config) {
                if (item.Wifi && Array.isArray(item.Wifi)) {
                    for (const wifi of item.Wifi) {
                        wifiConfigs.push(wifi);
                    }
                    break;
                }
            }
        }

        if (wifiConfigs.length === 0) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "No WiFi configurations found"
            });
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Edit WiFi Configuration</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="wifi-select">Select WiFi:</label>
                        <select id="wifi-select" required>
                            ${wifiConfigs.map((wifi, idx) =>
            `<option value="${idx}">${wifi.name}</option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="edit-wifi-name">Connection Name:</label>
                        <input type="text" id="edit-wifi-name" required>
                    </div>
                    <div class="form-row">
                        <label for="edit-wifi-ssid">SSID:</label>
                        <input type="text" id="edit-wifi-ssid" required>
                    </div>
                    <div class="form-row">
                        <label for="edit-wifi-pwd">Password:</label>
                        <input type="password" id="edit-wifi-pwd" required>
                    </div>
                    <div class="form-row">
                        <label for="edit-wifi-dhcp">DHCP:</label>
                        <input type="checkbox" id="edit-wifi-dhcp">
                    </div>
                    <div id="edit-static-ip-fields">
                        <div class="form-row">
                            <label for="edit-wifi-ip">IP Address:</label>
                            <input type="text" id="edit-wifi-ip">
                        </div>
                        <div class="form-row">
                            <label for="edit-wifi-dns">DNS Server:</label>
                            <input type="text" id="edit-wifi-dns">
                        </div>
                        <div class="form-row">
                            <label for="edit-wifi-gateway">Gateway:</label>
                            <input type="text" id="edit-wifi-gateway">
                        </div>
                        <div class="form-row">
                            <label for="edit-wifi-mask">Subnet Mask:</label>
                            <input type="text" id="edit-wifi-mask">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="success">Save Changes</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Element references
        const wifiSelect = modal.querySelector('#wifi-select');
        const nameInput = modal.querySelector('#edit-wifi-name');
        const ssidInput = modal.querySelector('#edit-wifi-ssid');
        const pwdInput = modal.querySelector('#edit-wifi-pwd');
        const dhcpCheckbox = modal.querySelector('#edit-wifi-dhcp');
        const staticIpFields = modal.querySelector('#edit-static-ip-fields');
        const ipInput = modal.querySelector('#edit-wifi-ip');
        const dnsInput = modal.querySelector('#edit-wifi-dns');
        const gatewayInput = modal.querySelector('#edit-wifi-gateway');
        const maskInput = modal.querySelector('#edit-wifi-mask');

        // Function to update form with selected WiFi
        const updateForm = () => {
            const selectedIndex = parseInt(wifiSelect.value);
            const wifi = wifiConfigs[selectedIndex];

            nameInput.value = wifi.name || '';
            ssidInput.value = wifi.ssid || '';
            pwdInput.value = wifi.pwd || '';
            dhcpCheckbox.checked = !!wifi.dhcp;

            // Update static IP fields
            staticIpFields.style.display = wifi.dhcp ? 'none' : 'block';
            ipInput.value = wifi.ip || '';
            dnsInput.value = wifi.dns || '';
            gatewayInput.value = wifi.gateway || '';
            maskInput.value = wifi.mask || '';
        };

        // Initialize form
        updateForm();

        // Event listeners
        wifiSelect.addEventListener('change', updateForm);
        dhcpCheckbox.addEventListener('change', () => {
            staticIpFields.style.display = dhcpCheckbox.checked ? 'none' : 'block';
        });

        // Cancel button
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());

        // Confirm button
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const selectedIndex = parseInt(wifiSelect.value);
            const name = nameInput.value.trim();
            const ssid = ssidInput.value.trim();
            const pwd = pwdInput.value;
            const dhcp = dhcpCheckbox.checked;

            if (!name || !ssid || !pwd) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "Connection name, SSID, and Password are required"
                });
                return;
            }

            // Update WiFi config
            const wifi = wifiConfigs[selectedIndex];
            wifi.name = name;
            wifi.ssid = ssid;
            wifi.pwd = pwd;
            wifi.dhcp = dhcp;

            if (!dhcp) {
                const ip = ipInput.value.trim();
                const dns = dnsInput.value.trim();
                const gateway = gatewayInput.value.trim();
                const mask = maskInput.value.trim();

                if (!ip || !dns || !gateway || !mask) {
                    window.notify({
                        type: "error",
                        name: "Validation Error",
                        desc: "IP, DNS, Gateway, and Subnet Mask are required for static IP"
                    });
                    return;
                }

                wifi.ip = ip;
                wifi.dns = dns;
                wifi.gateway = gateway;
                wifi.mask = mask;
            } else {
                // Remove static IP fields if DHCP is enabled
                delete wifi.ip;
                delete wifi.dns;
                delete wifi.gateway;
                delete wifi.mask;
            }

            // Update the textarea
            this.textarea.value = JSON.stringify(this.configData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `WiFi configuration "${name}" updated successfully`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    showRemoveWifiDialog() {
        // Parse current textarea content
        try {
            this.configData = JSON.parse(this.textarea.value);
        } catch (error) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Invalid JSON format in editor"
            });
            return;
        }

        // Extract WiFi configs
        let wifiArray = null;
        if (this.configData.config && Array.isArray(this.configData.config)) {
            for (const item of this.configData.config) {
                if (item.Wifi && Array.isArray(item.Wifi)) {
                    wifiArray = item.Wifi;
                    break;
                }
            }
        }

        if (!wifiArray || wifiArray.length === 0) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "No WiFi configurations found"
            });
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Remove WiFi Configuration</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="remove-wifi-select">Select WiFi to Remove:</label>
                        <select id="remove-wifi-select" required>
                            ${wifiArray.map((wifi, idx) =>
            `<option value="${idx}">${wifi.name}</option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="warning-message" style="color: #dc3545; margin-top: 10px;">
                        Warning: This action cannot be undone!
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="danger">Remove WiFi</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Element references
        const wifiSelect = modal.querySelector('#remove-wifi-select');

        // Cancel button
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());

        // Confirm button
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const selectedIndex = parseInt(wifiSelect.value);
            const wifiName = wifiArray[selectedIndex].name;

            // Remove the WiFi config
            wifiArray.splice(selectedIndex, 1);

            // Update the textarea
            this.textarea.value = JSON.stringify(this.configData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `WiFi configuration "${wifiName}" removed successfully`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    showEditNodeNameDialog() {
        // Parse current textarea content
        try {
            this.configData = JSON.parse(this.textarea.value);
        } catch (error) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Invalid JSON format in editor"
            });
            return;
        }

        // Extract nodes with hashes
        const nodes = [];
        const extractNodes = (obj, path = '') => {
            if (!obj) return;

            if (obj.hash && obj.name) {
                nodes.push({
                    hash: obj.hash,
                    name: obj.name,
                    path: path,
                    object: obj
                });
            }

            if (obj.children && Array.isArray(obj.children)) {
                obj.children.forEach((child, index) => {
                    extractNodes(child, path ? `${path} > ${obj.name || 'Child'} ${index + 1}` : obj.name || `Child ${index + 1}`);
                });
            }
        };

        extractNodes(this.configData);

        if (nodes.length === 0) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "No nodes found with hash values"
            });
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Edit Node Name</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="node-select">Select Node:</label>
                        <select id="node-select" required>
                            ${nodes.map((node, idx) =>
            `<option value="${idx}">${node.name} (${node.hash})</option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="node-path">Path:</label>
                        <input type="text" id="node-path" readonly>
                    </div>
                    <div class="form-row">
                        <label for="node-hash">Hash:</label>
                        <input type="text" id="node-hash" readonly>
                    </div>
                    <div class="form-row">
                        <label for="node-name">Name:</label>
                        <input type="text" id="node-name" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="success">Save Changes</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Element references
        const nodeSelect = modal.querySelector('#node-select');
        modal.querySelector('#node-path');
        modal.querySelector('#node-hash');
        const nameInput = modal.querySelector('#node-name');

        // Function to update form with selected node
        const updateForm = () => {
            const selectedIndex = parseInt(nodeSelect.value);
            const node = nodes[selectedIndex];

            // pathInput.value = node.path || 'Root';
            // hashInput.value = node.hash;
            nameInput.value = node.name || '';
        };

        // Initialize form
        updateForm();

        // Event listeners
        nodeSelect.addEventListener('change', updateForm);

        // Cancel button
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());

        // Confirm button
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const selectedIndex = parseInt(nodeSelect.value);
            const newName = nameInput.value.trim();

            if (!newName) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "Node name is required"
                });
                return;
            }

            // Update node name
            const node = nodes[selectedIndex];
            const oldName = node.name;
            node.object.name = newName;

            // Update the textarea
            this.textarea.value = JSON.stringify(this.configData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `Node name changed from "${oldName}" to "${newName}"`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    showEditPasswordDialog() {
        // Parse current textarea content
        try {
            this.configData = JSON.parse(this.textarea.value);
        } catch (error) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "Invalid JSON format in editor"
            });
            return;
        }

        // Extract pages with passwords
        const pages = [];
        if (this.interfaceData && this.interfaceData.pages) {
            this.interfaceData.pages.forEach((page, index) => {
                if (page.password) {
                    pages.push({
                        index: index,
                        name: page.PageName,
                        password: page.password,
                        type: 'page',
                        object: page
                    });
                }

                // Check for sections with passwords
                if (page.sections) {
                    page.sections.forEach((section, sectionIndex) => {
                        if (section.password) {
                            pages.push({
                                index: sectionIndex,
                                pageIndex: index,
                                name: section.SectionName,
                                password: section.password,
                                type: 'section',
                                object: section,
                                pageName: page.PageName
                            });
                        }
                    });
                }
            });
        }

        if (pages.length === 0) {
            window.notify({
                type: "error",
                name: "Error",
                desc: "No pages or sections with passwords found"
            });
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-container';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>Edit Passwords</h3>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <label for="password-select">Select Page/Section:</label>
                        <select id="password-select" required>
                            ${pages.map((item, idx) =>
            `<option value="${idx}">${item.type === 'page' ? 'Page' : 'Section'}: ${item.name}${item.type === 'section' ? ` (in ${item.pageName})` : ''}</option>`
        ).join('')}
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="current-password">Current Password:</label>
                        <input type="text" id="current-password" readonly>
                    </div>
                    <div class="form-row">
                        <label for="new-password">New Password:</label>
                        <input type="password" id="new-password" required>
                    </div>
                    <div class="form-row">
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <sl-button class="cancel-btn" variant="default">Cancel</sl-button>
                    <sl-button class="confirm-btn" variant="success">Save Password</sl-button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Element references
        const passwordSelect = modal.querySelector('#password-select');
        const currentPasswordInput = modal.querySelector('#current-password');
        const newPasswordInput = modal.querySelector('#new-password');
        const confirmPasswordInput = modal.querySelector('#confirm-password');

        // Function to update form with selected item
        const updateForm = () => {
            const selectedIndex = parseInt(passwordSelect.value);
            const item = pages[selectedIndex];
            currentPasswordInput.value = item.password || '';
        };

        // Initialize form
        updateForm();

        // Event listeners
        passwordSelect.addEventListener('change', updateForm);

        // Cancel button
        modal.querySelector('.cancel-btn').addEventListener('click', () => modal.remove());

        // Confirm button
        modal.querySelector('.confirm-btn').addEventListener('click', () => {
            const selectedIndex = parseInt(passwordSelect.value);
            const newPassword = newPasswordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (!newPassword) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "New password is required"
                });
                return;
            }

            if (newPassword !== confirmPassword) {
                window.notify({
                    type: "error",
                    name: "Validation Error",
                    desc: "Passwords do not match"
                });
                return;
            }

            // Update password
            const item = pages[selectedIndex];
            item.object.password = newPassword;

            // Update the textarea with the changed interface data
            this.textarea.value = JSON.stringify(this.interfaceData, null, 2);

            window.notify({
                type: "success",
                name: "Success",
                desc: `Password updated for ${item.type} "${item.name}"`
            });

            modal.remove();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (event) => {
            if (event.target === modal) modal.remove();
        });
    }

    addComponentProperty(container, name, label, type, required = false, options = null) {
        const property = document.createElement('div');
        property.className = 'form-row';

        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        labelElement.setAttribute('for', `prop-${name}`);
        property.appendChild(labelElement);

        let input;

        if (type === 'select' && options) {
            input = document.createElement('select');
            input.id = `prop-${name}`;
            input.name = name;
            input.required = required;

            options.forEach(option => {
                const optionEl = document.createElement('option');
                optionEl.value = option.value;
                optionEl.textContent = option.label;
                input.appendChild(optionEl);
            });
        } else if (type === 'checkbox') {
            input = document.createElement('input');
            input.type = 'checkbox';
            input.id = `prop-${name}`;
            input.name = name;
        } else if (type === 'textarea') {
            input = document.createElement('textarea');
            input.id = `prop-${name}`;
            input.name = name;
            input.required = required;
            input.rows = 3;
        } else {
            input = document.createElement('input');
            input.type = type;
            input.id = `prop-${name}`;
            input.name = name;
            input.required = required;
        }

        property.appendChild(input);
        container.appendChild(property);

        return input;
    }

    getComponentProperties(container) {
        const properties = {};

        container.querySelectorAll('input, select, textarea').forEach(input => {
            if (input.name) {
                if (input.type === 'checkbox') {
                    properties[input.name] = input.checked;
                } else if (input.tagName.toLowerCase() === 'textarea' && input.name === 'items') {
                    // Split comma-separated items into an array
                    const items = input.value.split(',').map(item => item.trim()).filter(item => item.length > 0);
                    properties[input.name] = items;
                } else if (input.type === 'number') {
                    const value = parseFloat(input.value);
                    properties[input.name] = isNaN(value) ? null : value;
                } else {
                    properties[input.name] = input.value;
                }
            }
        });

        return properties;
    }

    async loadConfigData() {
        console.log('Loading config data...');

        // If we've already loaded config.json in the current session, use that data
        if (this.currentFile === 'config.json' && this.textarea?.value) {
            try {
                this.configData = JSON.parse(this.textarea.value);
                // Extract available nodes from config
                this.availableNodes = this.extractNodesFromConfig(this.configData);
                return;
            } catch (err) {
                console.error('Error parsing config data from textarea:', err);
            }
        }

        // If we don't have config data yet, load it via HTTP fetch
        try {
            // Save current file
            const currentFileSaved = this.currentFile;

            // Temporarily switch to config.json
            this.currentFile = 'config.json';

            // Fetch config.json via HTTP
            const response = await fetch('/config.json');
            if (!response.ok) {
                throw new Error(`HTTP request failed with status ${response.status}`);
            }

            const content = await response.text();
            const configData = JSON.parse(content);
            this.configData = configData;

            // Extract nodes
            if (this.configData) {
                this.availableNodes = this.extractNodesFromConfig(this.configData);
            }

            // Restore original file
            this.currentFile = currentFileSaved;

            console.log('Successfully loaded config data');
        } catch (err) {
            console.error('Error loading config data:', err);
            window.notify({
                type: "warning",
                name: "Warning",
                desc: "Failed to load node definitions from config.json"
            });
        }
    }

    async loadRendererDescriptors() {
        console.log('Loading renderer descriptors...');

        try {
            // Save current file
            const currentFileSaved = this.currentFile;

            // Temporarily switch to renderers.json
            this.currentFile = 'renderers.json';

            // Fetch renderers.json via HTTP
            const response = await fetch('/renderers.json');
            if (!response.ok) {
                throw new Error(`HTTP request failed with status ${response.status}`);
            }

            const content = await response.text();
            const renderersData = JSON.parse(content);
            this.rendererDescriptors = renderersData;

            // Restore original file
            this.currentFile = currentFileSaved;

            console.log('Successfully loaded renderer descriptors');
        } catch (err) {
            console.error('Error loading renderer descriptors:', err);
            // Use fallback descriptors
            this.rendererDescriptors = {
                "rx-label": {
                    "name": { "type": "string", "required": true },
                    "state": { "type": "string", "enum": ["neutral", "success", "warning", "danger"] },
                    "isBlinking": { "type": "boolean", "default": false }
                },
                "rx-level-bar": {
                    "name": { "type": "string", "required": true },
                    "orientation": { "type": "string", "enum": ["vertical", "horizontal"], "default": "vertical" },
                    "unit": { "type": "string", "default": "" },
                    "max": { "type": "number", "default": 100 },
                    "min": { "type": "number", "default": 0 },
                    "isLabelAlarmWarningOn": { "type": "boolean", "default": false }
                },
                "tx-bool": {
                    "name": { "type": "string", "required": true },
                    "disable": { "type": "boolean", "default": false }
                },
                "tx-button": {
                    "name": { "type": "string", "required": true },
                    "color": { "type": "string", "enum": ["primary", "success", "warning", "danger", "neutral"], "default": "primary" },
                    "disable": { "type": "boolean", "default": false }
                },
                "tx-slider": {
                    "name": { "type": "string", "required": true },
                    "min": { "type": "number", "default": 0 },
                    "max": { "type": "number", "default": 100 }
                },
                "tx-numeric": {
                    "name": { "type": "string", "required": true },
                    "min": { "type": "number", "default": null },
                    "max": { "type": "number", "default": null }
                },
                "tx-dropdown": {
                    "name": { "type": "string", "required": true },
                    "items": { "type": "array", "items": { "type": "string" }, "default": [] }
                }
            };
            console.warn('Using fallback renderer descriptors due to load failure');
        }
    }

    extractNodesFromConfig(config) {
        console.log('Extracting nodes from config...');
        const nodes = [];

        // Fonction récursive pour extraire les nodes
        const extractNode = (node, parentInfo = '') => {
            if (!node) return;

            // Si le node a un hash, l'ajouter à la liste
            if (node.hash !== undefined && node.name) {
                nodes.push({
                    hash: node.hash,
                    name: node.name,
                    path: parentInfo,
                    type: node.component || node.type || 'unknown'
                });
            }

            // Traiter les enfants récursivement
            if (node.children && Array.isArray(node.children)) {
                const newParentInfo = parentInfo ? `${parentInfo} > ${node.name || 'Child'}` : (node.name || 'Root');
                node.children.forEach(child => {
                    extractNode(child, newParentInfo);
                });
            }
        };

        // Parcourir la structure principale
        if (config.children && Array.isArray(config.children)) {
            config.children.forEach(section => {
                extractNode(section);
            });
        }

        // Trier par nom pour une meilleure expérience utilisateur
        nodes.sort((a, b) => a.name.localeCompare(b.name));

        console.log(`Extracted ${nodes.length} nodes from config`);
        return nodes;
    }

    removeExistingInterfaces() {
        if (this.mainEditorBackdrop) {
            this.mainEditorBackdrop.remove();
            this.mainEditorBackdrop = null;
        }
        document.querySelectorAll('.modal-container').forEach(el => el.remove());
    }
}

customElements.define('interface-editor', InterfaceEditor);

const template = document.createElement('template');
template.innerHTML = `
     <style>       
       .notification-btn::part(base) {
         position: relative;
       }
       
       .notification-drawer {
         width: 350px;
         max-width: 100%;
         height: 100vh;
         position: fixed;
         top: 0;
         right: 0;
         z-index: 1000;
         background: var(--sl-panel-background-color);
         box-shadow: var(--sl-shadow-large);
         overflow-y: auto;
         transform: translateX(100%);
         transition: transform 0.3s ease;
       }
       
       .notification-drawer.open {
         transform: translateX(0);
       }
       
       .notification-header {
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 16px;
         border-bottom: 1px solid var(--sl-color-neutral-200);
       }
       
       .notification-list {
            padding: 10px;
        }

        .notification-card {
            margin-bottom: 16px;
            box-shadow: var(--sl-shadow-x-small);
            border-bottom: 1px solid var(--sl-color-neutral-200);
            padding-bottom: 8px;
        }

        .notification-card:last-child {
            margin-bottom: 10px;
            border-bottom: none;
        }

        .notification-card::part(base) {
            border-radius: var(--sl-border-radius-medium);
        }
       
       .no-notifications {
         padding: 20px;
         text-align: center;
         color: var(--sl-color-neutral-500);
       }
       
       .overlay {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(0, 0, 0, 0.5);
         z-index: 999;
         opacity: 0;
         visibility: hidden;
         transition: opacity 0.3s ease;
       }
       
       .overlay.open {
         opacity: 1;
         visibility: visible;
       }
     </style>
     
     <sl-button size="small" circle class="notification-btn">
       <sl-icon name="bell-fill" label="notifications"></sl-icon>
       <!-- <sl-icon name="bell-slash-fill" label="notifications"></sl-icon> -->
       <sl-badge pill></sl-badge>
     </sl-button>
     
     <div class="overlay"></div>
     
     <div class="notification-drawer">
       <div class="notification-header">
         <h2>Notifications</h2>
         <div>
           <sl-switch size="small">
             <span slot="label">Store notifications</span>
           </sl-switch>
           <sl-button size="small" variant="text">
             <sl-icon name="trash" slot="prefix"></sl-icon>
             Clear All
           </sl-button>
         </div>
       </div>
       <div class="notification-list"></div>
     </div>
`;

class NotificationCenter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        // DOM elements
        this.notificationBtn = this.shadowRoot.querySelector('.notification-btn');
        this.badge = this.shadowRoot.querySelector('sl-badge');
        this.drawer = this.shadowRoot.querySelector('.notification-drawer');
        this.notificationList = this.shadowRoot.querySelector('.notification-list');
        this.storeSwitch = this.shadowRoot.querySelector('sl-switch');
        this.clearAllBtn = this.shadowRoot.querySelector('sl-button[variant="text"]');
        this.overlay = this.shadowRoot.querySelector('.overlay');
        this.bellIcon = this.shadowRoot.querySelector('sl-icon');
        
        // State
        this.notifications = [];
        this.isOpen = false;
        this.storeNotifications = localStorage.getItem('storeNotifications') !== 'false';
        
        // Bind methods
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.addNotification = this.addNotification.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.removeNotification = this.removeNotification.bind(this);
        this.toggleStoreNotifications = this.toggleStoreNotifications.bind(this);
        
        // Set initial state
        this.updateBadge();
        this.storeSwitch.checked = this.storeNotifications;
        this.updateBellIcon();
        
        // Load stored notifications
        this.loadStoredNotifications();
    }

    connectedCallback() {
        // Event listeners
        this.notificationBtn.addEventListener('click', this.toggleDrawer);
        this.overlay.addEventListener('click', this.closeDrawer);
        this.clearAllBtn.addEventListener('click', this.clearAll);
        this.storeSwitch.addEventListener('sl-change', this.toggleStoreNotifications);
        
        // Register with notification system
        if (window.notify && window.error && window.warn && window.success) {
            // Store original notification functions
            this.originalNotify = window.notify;
            this.originalError = window.error;
            this.originalWarn = window.warn;
            this.originalSuccess = window.success;
            
            // Override notification functions to capture notifications
            window.notify = (message, variant = 'primary', icon = 'info-circle', duration = 10000) => {
                this.originalNotify(message, variant, icon, duration);
                this.addNotification(message, variant, icon);
            };
            
            window.error = (message, duration = 10000) => {
                this.originalError(message, duration);
                let msg = { type: "error", name: "Error", desc: message };
                this.addNotification(msg, 'danger', 'exclamation-circle');
            };
            
            window.warn = (message, duration = 5000) => {
                this.originalWarn(message, duration);
                let msg = { type: "warning", name: "Warning", desc: message };
                this.addNotification(msg, 'warning', 'exclamation-triangle');
            };
            
            window.success = (message, duration = 2000) => {
                this.originalSuccess(message, duration);
                let msg = { type: "success", name: "Success", desc: message };
                this.addNotification(msg, 'success', 'check-circle');
            };

            document.addEventListener('hw-notification', (event) => {
                this.addNotification(
                    event.detail.message,
                    event.detail.variant,
                    event.detail.icon
                );
            });
        } else {
            Logger.warn(ComponentType.NOTIFICATION, "Notification functions not available when initializing notification center");
        }
    }
    
    disconnectedCallback() {
        // Remove event listeners
        this.notificationBtn.removeEventListener('click', this.toggleDrawer);
        this.overlay.removeEventListener('click', this.closeDrawer);
        this.clearAllBtn.removeEventListener('click', this.clearAll);
        this.storeSwitch.removeEventListener('sl-change', this.toggleStoreNotifications);
        
        // Restore original notification functions
        if (this.originalNotify) window.notify = this.originalNotify;
        if (this.originalError) window.error = this.originalError;
        if (this.originalWarn) window.warn = this.originalWarn;
        if (this.originalSuccess) window.success = this.originalSuccess;
    }
    
    toggleDrawer() {
        this.isOpen = !this.isOpen;
        this.drawer.classList.toggle('open', this.isOpen);
        this.overlay.classList.toggle('open', this.isOpen);
        document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }
    
    closeDrawer() {
        this.isOpen = false;
        this.drawer.classList.remove('open');
        this.overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    
    addNotification(message, variant, icon) {
        if (!this.storeNotifications) return;
        
        // Format message if it's a string
        if (typeof message === 'string') {
            message = {
                type: variant || 'info',
                name: variant === 'danger' ? 'Error' : 
                      variant === 'warning' ? 'Warning' :
                      variant === 'success' ? 'Success' : 'Information',
                desc: message
            };
        }
        
        // Add timestamp
        const notification = {
            id: Date.now(),
            message,
            variant,
            icon,
            timestamp: new Date()
        };
        
        // Add to state
        this.notifications.unshift(notification);
        
        // Update UI
        this.renderNotifications();
        this.updateBadge();
        
        // Store notifications
        this.storeNotificationsToLocalStorage();
    }
    
    removeNotification(id) {
        this.notifications = this.notifications.filter(notification => notification.id !== id);
        this.renderNotifications();
        this.updateBadge();
        this.storeNotificationsToLocalStorage();
    }
    
    clearAll() {
        this.notifications = [];
        this.renderNotifications();
        this.updateBadge();
        this.storeNotificationsToLocalStorage();
    }
    
    updateBadge() {
        const count = this.notifications.length;
        
        if (count === 0) {
            // Remove the badge element completely when count is zero
            this.badge.style.display = 'none';
        } else {
            // Show the badge and update the count
            this.badge.style.display = '';
            this.badge.textContent = count;
        }
    }

    getIconColorForVariant(variant) {
        switch (variant) {
            case 'danger':
                return 'var(--sl-color-danger-600)';
            case 'warning':
                return 'var(--sl-color-warning-600)';
            case 'success':
                return 'var(--sl-color-success-600)';
            case 'primary':
                return 'var(--sl-color-primary-600)';
            case 'info':
                return 'var(--sl-color-info-600)';
            default:
                return 'inherit';
        }
    }
    
    renderNotifications() {
        this.notificationList.innerHTML = '';
        
        if (this.notifications.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'no-notifications';
            emptyMessage.textContent = 'No notifications';
            this.notificationList.appendChild(emptyMessage);
            return;
        }
        
        this.notifications.forEach(notification => {
            const card = document.createElement('sl-card');
            card.className = 'notification-card';
            
            // Get icon color based on variant
            const iconColor = this.getIconColorForVariant(notification.variant);
            
            card.innerHTML = `
                <div slot="header" style="display: flex; align-items: center;">
                    <sl-icon name="${notification.icon}" style="margin-right: 8px; color: ${iconColor};"></sl-icon>
                    <strong>${notification.message.name}</strong>
                    <sl-icon-button name="x" style="margin-left: auto;" data-id="${notification.id}"></sl-icon-button>
                </div>
                <div>${notification.message.desc}</div>
                <div slot="footer" style="font-size: 0.8rem; color: var(--sl-color-neutral-500);">
                    ${this.formatTimestamp(notification.timestamp)}
                </div>
            `;
            card.setAttribute('variant', notification.variant);
            
            // Add event listener to delete button
            const deleteBtn = card.querySelector('sl-icon-button');
            deleteBtn.addEventListener('click', () => {
                this.removeNotification(parseInt(deleteBtn.dataset.id));
            });
            
            this.notificationList.appendChild(card);
        });
    }
    
    formatTimestamp(timestamp) {
        if (!(timestamp instanceof Date)) {
            timestamp = new Date(timestamp);
        }
        
        return timestamp.toLocaleString();
    }
    
    toggleStoreNotifications(event) {
        this.storeNotifications = event.target.checked;
        localStorage.setItem('storeNotifications', this.storeNotifications);
        
        // Update bell icon
        this.updateBellIcon();
        
        // If turning off, clear all notifications
        if (!this.storeNotifications) {
            this.clearAll();
        }
    }
    
    updateBellIcon() {
        this.bellIcon.name = this.storeNotifications ? 'bell-fill' : 'bell-slash-fill';
    }
    
    loadStoredNotifications() {
        try {
            const stored = localStorage.getItem('notifications');
            if (stored) {
                this.notifications = JSON.parse(stored);
                // Convert timestamp strings back to Date objects
                this.notifications.forEach(notification => {
                    notification.timestamp = new Date(notification.timestamp);
                });
                this.renderNotifications();
                this.updateBadge();
            }
        } catch (error) {
            Logger.error(ComponentType.NOTIFICATION, 'Failed to load stored notifications', error);
            // Reset if there's an error
            localStorage.removeItem('notifications');
            this.notifications = [];
        }
    }
    
    storeNotificationsToLocalStorage() {
        if (this.storeNotifications) {
            localStorage.setItem('notifications', JSON.stringify(this.notifications));
        } else {
            localStorage.removeItem('notifications');
        }
    }
}

customElements.define('notification-center', NotificationCenter);

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
