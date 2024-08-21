(function () {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3=globalThis,e$9=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$7=new WeakMap;let n$5 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$9&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$7.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new n$5("string"==typeof t?t:t+"",void 0,s$3),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$5(o,t,s$3)},S$1=(s,o)=>{if(e$9)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$9?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{is:i$3,defineProperty:e$8,getOwnPropertyDescriptor:r$4,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$6,getPrototypeOf:n$4}=Object,a$2=globalThis,c$1=a$2.trustedTypes,l$3=c$1?c$1.emptyScript:"",p$1=a$2.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$2={toAttribute(t,s){switch(s){case Boolean:t=t?l$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$2=(t,s)=>!i$3(t,s),y$1={attribute:!0,type:String,converter:u$2,reflect:!1,hasChanged:f$2};Symbol.metadata??=Symbol("metadata"),a$2.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$8(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$4(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$6(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$2).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$2;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$2)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$2.reactiveElementVersions??=[]).push("2.0.4");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=globalThis,i$2=t$2.trustedTypes,s$2=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$7="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$5="?"+h,n$3=`<${o$5}>`,r$3=document,l$2=()=>r$3.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$1=Array.isArray,u$1=t=>a$1(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m$1=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$3.createTreeWalker(r$3,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$2?s$2.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f$1;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$1?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$1):void 0!==u[3]&&(c=m$1):c===m$1?">"===u[0]?(c=r??f$1,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$1:'"'===u[3]?g:p):c===g||c===p?c=m$1:c===v||c===_?c=f$1:(c=m$1,r=void 0);const x=c===m$1&&t[i+1].startsWith("/>")?" ":"";l+=c===f$1?s+n$3:d>=0?(o.push(a),s.slice(0,d)+e$7+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$7)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$2()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$2());}}}else if(8===r.nodeType)if(r.data===o$5)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$3).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$3,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u$1(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$3.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l$2()),this.S(l$2()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$2.litHtmlPolyfillSupport;Z?.(V,M),(t$2.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l$2(),t),t,void 0,s??{});}return h._$AI(t),h};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let s$1 = class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}};s$1._$litElement$=!0,s$1[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$1});const r$2=globalThis.litElementPolyfillSupport;r$2?.({LitElement:s$1});(globalThis.litElementVersions??=[]).push("4.0.4");

  // src/components/spinner/spinner.styles.ts
  var spinner_styles_default = i$4`
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
`;

  const connectedElements = new Set();
  const documentElementObserver = new MutationObserver(update);
  const translations = new Map();
  let documentDirection = document.documentElement.dir || 'ltr';
  let documentLanguage = document.documentElement.lang || navigator.language;
  let fallback;
  documentElementObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir', 'lang']
  });
  function registerTranslation(...translation) {
      translation.map(t => {
          const code = t.$code.toLowerCase();
          if (translations.has(code)) {
              translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
          }
          else {
              translations.set(code, t);
          }
          if (!fallback) {
              fallback = t;
          }
      });
      update();
  }
  function update() {
      documentDirection = document.documentElement.dir || 'ltr';
      documentLanguage = document.documentElement.lang || navigator.language;
      [...connectedElements.keys()].map((el) => {
          if (typeof el.requestUpdate === 'function') {
              el.requestUpdate();
          }
      });
  }
  let LocalizeController$1 = class LocalizeController {
      constructor(host) {
          this.host = host;
          this.host.addController(this);
      }
      hostConnected() {
          connectedElements.add(this.host);
      }
      hostDisconnected() {
          connectedElements.delete(this.host);
      }
      dir() {
          return `${this.host.dir || documentDirection}`.toLowerCase();
      }
      lang() {
          return `${this.host.lang || documentLanguage}`.toLowerCase();
      }
      getTranslationData(lang) {
          var _a, _b;
          const locale = new Intl.Locale(lang.replace(/_/g, '-'));
          const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
          const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
          const primary = translations.get(`${language}-${region}`);
          const secondary = translations.get(language);
          return { locale, language, region, primary, secondary };
      }
      exists(key, options) {
          var _a;
          const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
          options = Object.assign({ includeFallback: false }, options);
          if ((primary && primary[key]) ||
              (secondary && secondary[key]) ||
              (options.includeFallback && fallback && fallback[key])) {
              return true;
          }
          return false;
      }
      term(key, ...args) {
          const { primary, secondary } = this.getTranslationData(this.lang());
          let term;
          if (primary && primary[key]) {
              term = primary[key];
          }
          else if (secondary && secondary[key]) {
              term = secondary[key];
          }
          else if (fallback && fallback[key]) {
              term = fallback[key];
          }
          else {
              console.error(`No translation found for: ${String(key)}`);
              return String(key);
          }
          if (typeof term === 'function') {
              return term(...args);
          }
          return term;
      }
      date(dateToFormat, options) {
          dateToFormat = new Date(dateToFormat);
          return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
      }
      number(numberToFormat, options) {
          numberToFormat = Number(numberToFormat);
          return isNaN(numberToFormat) ? '' : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
      }
      relativeTime(value, unit, options) {
          return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
      }
  };

  // src/translations/en.ts
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0)
        return "No options selected";
      if (num === 1)
        return "1 option selected";
      return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
  };
  registerTranslation(translation);
  var en_default = translation;

  var LocalizeController = class extends LocalizeController$1 {
  };
  registerTranslation(en_default);

  // src/styles/component.styles.ts
  var component_styles_default = i$4`
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
`;

  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => {
    return (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")];
    var isAwait = false;
    var method;
    var it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k) => it[k] = (x) => obj[k](x);
    } else {
      obj = obj.call(value);
      method = (k) => it[k] = (v) => {
        if (isAwait) {
          isAwait = false;
          if (k === "throw")
            throw v;
          return v;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x = obj[k](v);
            if (!(x instanceof Object))
              throw TypeError("Object expected");
            resolve(x);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
      throw x;
    }, "return" in obj && method("return"), it;
  };

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$4={attribute:!0,type:String,converter:u$2,reflect:!1,hasChanged:f$2},r$1=(t=o$4,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$2(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function r(r){return n$2({...r,state:!0,attribute:!1})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  function t$1(t){return (n,o)=>{const c="function"==typeof n?n:n[o];Object.assign(c,t);}}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$6=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$5(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$6(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$6(n,s,{get(){return o(this)}})}}

  var ShoelaceElement = class extends s$1 {
    constructor() {
      super();
      Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
        this.constructor.define(name, component);
      });
    }
    emit(name, options) {
      const event = new CustomEvent(name, __spreadValues({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      this.dispatchEvent(event);
      return event;
    }
    /* eslint-enable */
    static define(name, elementConstructor = this, options = {}) {
      const currentlyRegisteredConstructor = customElements.get(name);
      if (!currentlyRegisteredConstructor) {
        customElements.define(name, class extends elementConstructor {
        }, options);
        return;
      }
      let newVersion = " (unknown version)";
      let existingVersion = newVersion;
      if ("version" in elementConstructor && elementConstructor.version) {
        newVersion = " v" + elementConstructor.version;
      }
      if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
        existingVersion = " v" + currentlyRegisteredConstructor.version;
      }
      if (newVersion && existingVersion && newVersion === existingVersion) {
        return;
      }
      console.warn(
        `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
      );
    }
  };
  /* eslint-disable */
  // @ts-expect-error This is auto-injected at build time.
  ShoelaceElement.version = "2.14.0";
  ShoelaceElement.dependencies = {};
  __decorateClass([
    n$2()
  ], ShoelaceElement.prototype, "dir", 2);
  __decorateClass([
    n$2()
  ], ShoelaceElement.prototype, "lang", 2);

  var SlSpinner = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController(this);
    }
    render() {
      return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
  };
  SlSpinner.styles = [component_styles_default, spinner_styles_default];

  // src/internal/form.ts
  var formCollections = /* @__PURE__ */ new WeakMap();
  var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
  var checkValidityOverloads = /* @__PURE__ */ new WeakMap();
  var userInteractedControls = /* @__PURE__ */ new WeakSet();
  var interactions = /* @__PURE__ */ new WeakMap();
  var FormControlController = class {
    constructor(host, options) {
      this.handleFormData = (event) => {
        const disabled = this.options.disabled(this.host);
        const name = this.options.name(this.host);
        const value = this.options.value(this.host);
        const isButton = this.host.tagName.toLowerCase() === "sl-button";
        if (this.host.isConnected && !disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
          if (Array.isArray(value)) {
            value.forEach((val) => {
              event.formData.append(name, val.toString());
            });
          } else {
            event.formData.append(name, value.toString());
          }
        }
      };
      this.handleFormSubmit = (event) => {
        var _a;
        const disabled = this.options.disabled(this.host);
        const reportValidity = this.options.reportValidity;
        if (this.form && !this.form.noValidate) {
          (_a = formCollections.get(this.form)) == null ? void 0 : _a.forEach((control) => {
            this.setUserInteracted(control, true);
          });
        }
        if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleFormReset = () => {
        this.options.setValue(this.host, this.options.defaultValue(this.host));
        this.setUserInteracted(this.host, false);
        interactions.set(this.host, []);
      };
      this.handleInteraction = (event) => {
        const emittedEvents = interactions.get(this.host);
        if (!emittedEvents.includes(event.type)) {
          emittedEvents.push(event.type);
        }
        if (emittedEvents.length === this.options.assumeInteractionOn.length) {
          this.setUserInteracted(this.host, true);
        }
      };
      this.checkFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element of elements) {
            if (typeof element.checkValidity === "function") {
              if (!element.checkValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      this.reportFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element of elements) {
            if (typeof element.reportValidity === "function") {
              if (!element.reportValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      (this.host = host).addController(this);
      this.options = __spreadValues({
        form: (input) => {
          const formId = input.form;
          if (formId) {
            const root = input.getRootNode();
            const form = root.getElementById(formId);
            if (form) {
              return form;
            }
          }
          return input.closest("form");
        },
        name: (input) => input.name,
        value: (input) => input.value,
        defaultValue: (input) => input.defaultValue,
        disabled: (input) => {
          var _a;
          return (_a = input.disabled) != null ? _a : false;
        },
        reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
        checkValidity: (input) => typeof input.checkValidity === "function" ? input.checkValidity() : true,
        setValue: (input, value) => input.value = value,
        assumeInteractionOn: ["sl-input"]
      }, options);
    }
    hostConnected() {
      const form = this.options.form(this.host);
      if (form) {
        this.attachForm(form);
      }
      interactions.set(this.host, []);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.addEventListener(event, this.handleInteraction);
      });
    }
    hostDisconnected() {
      this.detachForm();
      interactions.delete(this.host);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.removeEventListener(event, this.handleInteraction);
      });
    }
    hostUpdated() {
      const form = this.options.form(this.host);
      if (!form) {
        this.detachForm();
      }
      if (form && this.form !== form) {
        this.detachForm();
        this.attachForm(form);
      }
      if (this.host.hasUpdated) {
        this.setValidity(this.host.validity.valid);
      }
    }
    attachForm(form) {
      if (form) {
        this.form = form;
        if (formCollections.has(this.form)) {
          formCollections.get(this.form).add(this.host);
        } else {
          formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
        }
        this.form.addEventListener("formdata", this.handleFormData);
        this.form.addEventListener("submit", this.handleFormSubmit);
        this.form.addEventListener("reset", this.handleFormReset);
        if (!reportValidityOverloads.has(this.form)) {
          reportValidityOverloads.set(this.form, this.form.reportValidity);
          this.form.reportValidity = () => this.reportFormValidity();
        }
        if (!checkValidityOverloads.has(this.form)) {
          checkValidityOverloads.set(this.form, this.form.checkValidity);
          this.form.checkValidity = () => this.checkFormValidity();
        }
      } else {
        this.form = void 0;
      }
    }
    detachForm() {
      if (!this.form)
        return;
      const formCollection = formCollections.get(this.form);
      if (!formCollection) {
        return;
      }
      formCollection.delete(this.host);
      if (formCollection.size <= 0) {
        this.form.removeEventListener("formdata", this.handleFormData);
        this.form.removeEventListener("submit", this.handleFormSubmit);
        this.form.removeEventListener("reset", this.handleFormReset);
        if (reportValidityOverloads.has(this.form)) {
          this.form.reportValidity = reportValidityOverloads.get(this.form);
          reportValidityOverloads.delete(this.form);
        }
        if (checkValidityOverloads.has(this.form)) {
          this.form.checkValidity = checkValidityOverloads.get(this.form);
          checkValidityOverloads.delete(this.form);
        }
        this.form = void 0;
      }
    }
    setUserInteracted(el, hasInteracted) {
      if (hasInteracted) {
        userInteractedControls.add(el);
      } else {
        userInteractedControls.delete(el);
      }
      el.requestUpdate();
    }
    doAction(type, submitter) {
      if (this.form) {
        const button = document.createElement("button");
        button.type = type;
        button.style.position = "absolute";
        button.style.width = "0";
        button.style.height = "0";
        button.style.clipPath = "inset(50%)";
        button.style.overflow = "hidden";
        button.style.whiteSpace = "nowrap";
        if (submitter) {
          button.name = submitter.name;
          button.value = submitter.value;
          ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
            if (submitter.hasAttribute(attr)) {
              button.setAttribute(attr, submitter.getAttribute(attr));
            }
          });
        }
        this.form.append(button);
        button.click();
        button.remove();
      }
    }
    /** Returns the associated `<form>` element, if one exists. */
    getForm() {
      var _a;
      return (_a = this.form) != null ? _a : null;
    }
    /** Resets the form, restoring all the control to their default value */
    reset(submitter) {
      this.doAction("reset", submitter);
    }
    /** Submits the form, triggering validation and form data injection. */
    submit(submitter) {
      this.doAction("submit", submitter);
    }
    /**
     * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
     * the host element immediately, i.e. before Lit updates the component in the next update.
     */
    setValidity(isValid) {
      const host = this.host;
      const hasInteracted = Boolean(userInteractedControls.has(host));
      const required = Boolean(host.required);
      host.toggleAttribute("data-required", required);
      host.toggleAttribute("data-optional", !required);
      host.toggleAttribute("data-invalid", !isValid);
      host.toggleAttribute("data-valid", isValid);
      host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
      host.toggleAttribute("data-user-valid", isValid && hasInteracted);
    }
    /**
     * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
     * that affects constraint validation changes so the component receives the correct validity states.
     */
    updateValidity() {
      const host = this.host;
      this.setValidity(host.validity.valid);
    }
    /**
     * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
     * If the `sl-invalid` event will be cancelled then the original `invalid`
     * event (which may have been passed as argument) will also be cancelled.
     * If no original `invalid` event has been passed then the `sl-invalid`
     * event will be cancelled before being dispatched.
     */
    emitInvalidEvent(originalInvalidEvent) {
      const slInvalidEvent = new CustomEvent("sl-invalid", {
        bubbles: false,
        composed: false,
        cancelable: true,
        detail: {}
      });
      if (!originalInvalidEvent) {
        slInvalidEvent.preventDefault();
      }
      if (!this.host.dispatchEvent(slInvalidEvent)) {
        originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
      }
    }
  };
  var validValidityState = Object.freeze({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
  });
  Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    valueMissing: true
  }));
  Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    customError: true
  }));

  // src/components/button/button.styles.ts
  var button_styles_default = i$4`
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
`;

  // src/internal/slot.ts
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = (event) => {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "sl-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
  };

  // src/utilities/base-path.ts
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = "") {
    if (!basePath) {
      const scripts = [...document.getElementsByTagName("script")];
      const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
      if (configScript) {
        setBasePath(configScript.getAttribute("data-shoelace"));
      } else {
        const fallbackScript = scripts.find((s) => {
          return /shoelace(\.min)?\.js($|\?)/.test(s.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src);
        });
        let path = "";
        if (fallbackScript) {
          path = fallbackScript.getAttribute("src");
        }
        setBasePath(path.split("/").slice(0, -1).join("/"));
      }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
  }

  // src/components/icon/library.default.ts
  var library = {
    name: "default",
    resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
  };
  var library_default_default = library;

  // src/components/icon/library.system.ts
  var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
  };
  var systemLibrary = {
    name: "system",
    resolver: (name) => {
      if (name in icons) {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      }
      return "";
    }
  };
  var library_system_default = systemLibrary;

  // src/components/icon/library.ts
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.find((lib) => lib.name === name);
  }

  // src/components/icon/icon.styles.ts
  var icon_styles_default = i$4`
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
`;

  // src/internal/watch.ts
  function watch(propertyName, options) {
    const resolvedOptions = __spreadValues({
      waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName) => {
      const { update } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update.call(this, changedProps);
      };
    };
  }

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e$4=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,f=o=>void 0===o.strings,u={},m=(o,t=u)=>o._$AH=t;

  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser;
  var iconCache = /* @__PURE__ */ new Map();
  var SlIcon = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.initialRender = false;
      this.svg = null;
      this.label = "";
      this.library = "default";
    }
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    async resolveIcon(url, library) {
      var _a;
      let fileData;
      if (library == null ? void 0 : library.spriteSheet) {
        return x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
      }
      try {
        fileData = await fetch(url, { mode: "cors" });
        if (!fileData.ok)
          return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
      } catch (e) {
        return RETRYABLE_ERROR;
      }
      try {
        const div = document.createElement("div");
        div.innerHTML = await fileData.text();
        const svg = div.firstElementChild;
        if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg")
          return CACHEABLE_ERROR;
        if (!parser)
          parser = new DOMParser();
        const doc = parser.parseFromString(svg.outerHTML, "text/html");
        const svgEl = doc.body.querySelector("svg");
        if (!svgEl)
          return CACHEABLE_ERROR;
        svgEl.part.add("svg");
        return document.adoptNode(svgEl);
      } catch (e) {
        return CACHEABLE_ERROR;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated() {
      this.initialRender = true;
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getIconSource() {
      const library = getIconLibrary(this.library);
      if (this.name && library) {
        return {
          url: library.resolver(this.name),
          fromLibrary: true
        };
      }
      return {
        url: this.src,
        fromLibrary: false
      };
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === "string" && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    async setIcon() {
      var _a;
      const { url, fromLibrary } = this.getIconSource();
      const library = fromLibrary ? getIconLibrary(this.library) : void 0;
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = this.resolveIcon(url, library);
        iconCache.set(url, iconResolver);
      }
      if (!this.initialRender) {
        return;
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getIconSource().url) {
        return;
      }
      if (e$4(svg)) {
        this.svg = svg;
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.emit("sl-error");
          break;
        default:
          this.svg = svg.cloneNode(true);
          (_a = library == null ? void 0 : library.mutator) == null ? void 0 : _a.call(library, this.svg);
          this.emit("sl-load");
      }
    }
    render() {
      return this.svg;
    }
  };
  SlIcon.styles = [component_styles_default, icon_styles_default];
  __decorateClass([
    r()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlIcon.prototype, "name", 2);
  __decorateClass([
    n$2()
  ], SlIcon.prototype, "src", 2);
  __decorateClass([
    n$2()
  ], SlIcon.prototype, "label", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlIcon.prototype, "library", 2);
  __decorateClass([
    watch("label")
  ], SlIcon.prototype, "handleLabelChange", 1);
  __decorateClass([
    watch(["name", "src", "library"])
  ], SlIcon.prototype, "setIcon", 1);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$3=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e$2=e$3(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)));}return w}});

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e$1=Symbol.for(""),o$3=t=>{if(t?.r===e$1)return t?._$litStatic$},s=(t,...r)=>({_$litStatic$:r.reduce(((r,e,o)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[o+1]),t[0]),r:e$1}),a=new Map,l$1=t=>(r,...e)=>{const i=e.length;let s,l;const n=[],u=[];let c,$=0,f=!1;for(;$<i;){for(c=r[$];$<i&&void 0!==(l=e[$],s=o$3(l));)c+=s+r[++$],f=!0;$!==i&&u.push(l),n.push(c),$++;}if($===i&&n.push(r[i]),f){const t=n.join("$$lit$$");void 0===(r=a.get(t))&&(n.raw=n,a.set(t,r=n)),e=u;}return t(r,...e)},n$1=l$1(x);

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$2=o=>o??T;

  var SlButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["click"]
      });
      this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
      this.localize = new LocalizeController(this);
      this.hasFocus = false;
      this.invalid = false;
      this.title = "";
      this.variant = "default";
      this.size = "medium";
      this.caret = false;
      this.disabled = false;
      this.loading = false;
      this.outline = false;
      this.pill = false;
      this.circle = false;
      this.type = "button";
      this.name = "";
      this.value = "";
      this.href = "";
      this.rel = "noreferrer noopener";
    }
    /** Gets the validity state object */
    get validity() {
      if (this.isButton()) {
        return this.button.validity;
      }
      return validValidityState;
    }
    /** Gets the validation message */
    get validationMessage() {
      if (this.isButton()) {
        return this.button.validationMessage;
      }
      return "";
    }
    firstUpdated() {
      if (this.isButton()) {
        this.formControlController.updateValidity();
      }
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick() {
      if (this.type === "submit") {
        this.formControlController.submit(this);
      }
      if (this.type === "reset") {
        this.formControlController.reset(this);
      }
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    isButton() {
      return this.href ? false : true;
    }
    isLink() {
      return this.href ? true : false;
    }
    handleDisabledChange() {
      if (this.isButton()) {
        this.formControlController.setValidity(this.disabled);
      }
    }
    /** Simulates a click on the button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the button. */
    blur() {
      this.button.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      if (this.isButton()) {
        return this.button.checkValidity();
      }
      return true;
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      if (this.isButton()) {
        return this.button.reportValidity();
      }
      return true;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      if (this.isButton()) {
        this.button.setCustomValidity(message);
        this.formControlController.updateValidity();
      }
    }
    render() {
      const isLink = this.isLink();
      const tag = isLink ? s`a` : s`button`;
      return n$1`
      <${tag}
        part="base"
        class=${e$2({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${o$2(isLink ? void 0 : this.disabled)}
        type=${o$2(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o$2(isLink ? void 0 : this.name)}
        value=${o$2(isLink ? void 0 : this.value)}
        href=${o$2(isLink ? this.href : void 0)}
        target=${o$2(isLink ? this.target : void 0)}
        download=${o$2(isLink ? this.download : void 0)}
        rel=${o$2(isLink ? this.rel : void 0)}
        role=${o$2(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? n$1` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? n$1`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${tag}>
    `;
    }
  };
  SlButton.styles = [component_styles_default, button_styles_default];
  SlButton.dependencies = {
    "sl-icon": SlIcon,
    "sl-spinner": SlSpinner
  };
  __decorateClass([
    e$5(".button")
  ], SlButton.prototype, "button", 2);
  __decorateClass([
    r()
  ], SlButton.prototype, "hasFocus", 2);
  __decorateClass([
    r()
  ], SlButton.prototype, "invalid", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "title", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlButton.prototype, "variant", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlButton.prototype, "size", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlButton.prototype, "caret", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlButton.prototype, "disabled", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlButton.prototype, "loading", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlButton.prototype, "outline", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlButton.prototype, "pill", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlButton.prototype, "circle", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "type", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "name", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "value", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "href", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "target", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "rel", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "download", 2);
  __decorateClass([
    n$2()
  ], SlButton.prototype, "form", 2);
  __decorateClass([
    n$2({ attribute: "formaction" })
  ], SlButton.prototype, "formAction", 2);
  __decorateClass([
    n$2({ attribute: "formenctype" })
  ], SlButton.prototype, "formEnctype", 2);
  __decorateClass([
    n$2({ attribute: "formmethod" })
  ], SlButton.prototype, "formMethod", 2);
  __decorateClass([
    n$2({ attribute: "formnovalidate", type: Boolean })
  ], SlButton.prototype, "formNoValidate", 2);
  __decorateClass([
    n$2({ attribute: "formtarget" })
  ], SlButton.prototype, "formTarget", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlButton.prototype, "handleDisabledChange", 1);

  SlButton.define("sl-button");

  SlIcon.define("sl-icon");

  // src/styles/form-control.styles.ts
  var form_control_styles_default = i$4`
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
`;

  // src/components/input/input.styles.ts
  var input_styles_default = i$4`
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
`;

  // src/internal/default-value.ts
  var defaultValue = (propertyName = "value") => (proto, key) => {
    const ctor = proto.constructor;
    const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
    ctor.prototype.attributeChangedCallback = function(name, old, value) {
      var _a;
      const options = ctor.getPropertyOptions(propertyName);
      const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
      if (name === attributeName) {
        const converter = options.converter || u$2;
        const fromAttribute = typeof converter === "function" ? converter : (_a = converter == null ? void 0 : converter.fromAttribute) != null ? _a : u$2.fromAttribute;
        const newValue = fromAttribute(value, options.type);
        if (this[propertyName] !== newValue) {
          this[key] = newValue;
        }
      }
      attributeChangedCallback.call(this, name, old, value);
    };
  };

  /**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const l=e$3(class extends i$1{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===w||t$1===T)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return w}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return w}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return w;return m(i),t$1}});

  var SlInput = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.localize = new LocalizeController(this);
      this.hasFocus = false;
      this.title = "";
      // make reactive to pass through
      this.__numberInput = Object.assign(document.createElement("input"), { type: "number" });
      this.__dateInput = Object.assign(document.createElement("input"), { type: "date" });
      this.type = "text";
      this.name = "";
      this.value = "";
      this.defaultValue = "";
      this.size = "medium";
      this.filled = false;
      this.pill = false;
      this.label = "";
      this.helpText = "";
      this.clearable = false;
      this.disabled = false;
      this.placeholder = "";
      this.readonly = false;
      this.passwordToggle = false;
      this.passwordVisible = false;
      this.noSpinButtons = false;
      this.form = "";
      this.required = false;
      this.spellcheck = true;
    }
    //
    // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
    // can be set before the component is rendered.
    //
    /**
     * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
     */
    get valueAsDate() {
      var _a;
      this.__dateInput.type = this.type;
      this.__dateInput.value = this.value;
      return ((_a = this.input) == null ? void 0 : _a.valueAsDate) || this.__dateInput.valueAsDate;
    }
    set valueAsDate(newValue) {
      this.__dateInput.type = this.type;
      this.__dateInput.valueAsDate = newValue;
      this.value = this.__dateInput.value;
    }
    /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
    get valueAsNumber() {
      var _a;
      this.__numberInput.value = this.value;
      return ((_a = this.input) == null ? void 0 : _a.valueAsNumber) || this.__numberInput.valueAsNumber;
    }
    set valueAsNumber(newValue) {
      this.__numberInput.valueAsNumber = newValue;
      this.value = this.__numberInput.value;
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleChange() {
      this.value = this.input.value;
      this.emit("sl-change");
    }
    handleClearClick(event) {
      this.value = "";
      this.emit("sl-clear");
      this.emit("sl-input");
      this.emit("sl-change");
      this.input.focus();
      event.stopPropagation();
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleInput() {
      this.value = this.input.value;
      this.formControlController.updateValidity();
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleKeyDown(event) {
      const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (event.key === "Enter" && !hasModifier) {
        setTimeout(() => {
          if (!event.defaultPrevented && !event.isComposing) {
            this.formControlController.submit();
          }
        });
      }
    }
    handlePasswordToggle() {
      this.passwordVisible = !this.passwordVisible;
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleStepChange() {
      this.input.step = String(this.step);
      this.formControlController.updateValidity();
    }
    async handleValueChange() {
      await this.updateComplete;
      this.formControlController.updateValidity();
    }
    /** Sets focus on the input. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the input. */
    blur() {
      this.input.blur();
    }
    /** Selects all the text in the input. */
    select() {
      this.input.select();
    }
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
      this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    /** Replaces a range of text with a new string. */
    setRangeText(replacement, start, end, selectMode = "preserve") {
      const selectionStart = start != null ? start : this.input.selectionStart;
      const selectionEnd = end != null ? end : this.input.selectionEnd;
      this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
    showPicker() {
      if ("showPicker" in HTMLInputElement.prototype) {
        this.input.showPicker();
      }
    }
    /** Increments the value of a numeric input type by the value of the step attribute. */
    stepUp() {
      this.input.stepUp();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Decrements the value of a numeric input type by the value of the step attribute. */
    stepDown() {
      this.input.stepDown();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const hasClearIcon = this.clearable && !this.disabled && !this.readonly;
      const isClearIconVisible = hasClearIcon && (typeof this.value === "number" || this.value.length > 0);
      return x`
      <div
        part="form-control"
        class=${e$2({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e$2({
      input: true,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${o$2(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o$2(this.placeholder)}
              minlength=${o$2(this.minlength)}
              maxlength=${o$2(this.maxlength)}
              min=${o$2(this.min)}
              max=${o$2(this.max)}
              step=${o$2(this.step)}
              .value=${l(this.value)}
              autocapitalize=${o$2(this.autocapitalize)}
              autocomplete=${o$2(this.autocomplete)}
              autocorrect=${o$2(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${o$2(this.pattern)}
              enterkeyhint=${o$2(this.enterkeyhint)}
              inputmode=${o$2(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon ? x`
                  <button
                    part="clear-button"
                    class=${e$2({
      input__clear: true,
      "input__clear--visible": isClearIconVisible
    })}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.passwordToggle && !this.disabled ? x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? x`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : x`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlInput.styles = [component_styles_default, form_control_styles_default, input_styles_default];
  SlInput.dependencies = { "sl-icon": SlIcon };
  __decorateClass([
    e$5(".input__control")
  ], SlInput.prototype, "input", 2);
  __decorateClass([
    r()
  ], SlInput.prototype, "hasFocus", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "title", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlInput.prototype, "type", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "name", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "value", 2);
  __decorateClass([
    defaultValue()
  ], SlInput.prototype, "defaultValue", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlInput.prototype, "size", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlInput.prototype, "filled", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlInput.prototype, "pill", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "label", 2);
  __decorateClass([
    n$2({ attribute: "help-text" })
  ], SlInput.prototype, "helpText", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlInput.prototype, "clearable", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlInput.prototype, "disabled", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "placeholder", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlInput.prototype, "readonly", 2);
  __decorateClass([
    n$2({ attribute: "password-toggle", type: Boolean })
  ], SlInput.prototype, "passwordToggle", 2);
  __decorateClass([
    n$2({ attribute: "password-visible", type: Boolean })
  ], SlInput.prototype, "passwordVisible", 2);
  __decorateClass([
    n$2({ attribute: "no-spin-buttons", type: Boolean })
  ], SlInput.prototype, "noSpinButtons", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlInput.prototype, "form", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlInput.prototype, "required", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "pattern", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlInput.prototype, "minlength", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlInput.prototype, "maxlength", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "min", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "max", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "step", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "autocapitalize", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "autocorrect", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "autocomplete", 2);
  __decorateClass([
    n$2({ type: Boolean })
  ], SlInput.prototype, "autofocus", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "enterkeyhint", 2);
  __decorateClass([
    n$2({
      type: Boolean,
      converter: {
        // Allow "true|false" attribute values but keep the property boolean
        fromAttribute: (value) => !value || value === "false" ? false : true,
        toAttribute: (value) => value ? "true" : "false"
      }
    })
  ], SlInput.prototype, "spellcheck", 2);
  __decorateClass([
    n$2()
  ], SlInput.prototype, "inputmode", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("step", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleStepChange", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleValueChange", 1);

  SlInput.define("sl-input");

  // src/components/rating/rating.styles.ts
  var rating_styles_default = i$4`
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

  // src/internal/math.ts
  function clamp(value, min, max) {
    const noNegativeZero = (n) => Object.is(n, -0) ? 0 : n;
    if (value < min) {
      return noNegativeZero(min);
    }
    if (value > max) {
      return noNegativeZero(max);
    }
    return noNegativeZero(value);
  }

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const n="important",i=" !"+n,o$1=e$3(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||t$1.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e;}}return w}});

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class e extends i$1{constructor(i){if(super(i),this.it=T,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===T||null==r)return this._t=void 0,this.it=r;if(r===w)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$3(e);

  var SlRating = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController(this);
      this.hoverValue = 0;
      this.isHovering = false;
      this.label = "";
      this.value = 0;
      this.max = 5;
      this.precision = 1;
      this.readonly = false;
      this.disabled = false;
      this.getSymbol = () => '<sl-icon name="star-fill" library="system"></sl-icon>';
    }
    getValueFromMousePosition(event) {
      return this.getValueFromXCoordinate(event.clientX);
    }
    getValueFromTouchPosition(event) {
      return this.getValueFromXCoordinate(event.touches[0].clientX);
    }
    getValueFromXCoordinate(coordinate) {
      const isRtl = this.localize.dir() === "rtl";
      const { left, right, width } = this.rating.getBoundingClientRect();
      const value = isRtl ? this.roundToPrecision((right - coordinate) / width * this.max, this.precision) : this.roundToPrecision((coordinate - left) / width * this.max, this.precision);
      return clamp(value, 0, this.max);
    }
    handleClick(event) {
      if (this.disabled) {
        return;
      }
      this.setValue(this.getValueFromMousePosition(event));
      this.emit("sl-change");
    }
    setValue(newValue) {
      if (this.disabled || this.readonly) {
        return;
      }
      this.value = newValue === this.value ? 0 : newValue;
      this.isHovering = false;
    }
    handleKeyDown(event) {
      const isLtr = this.localize.dir() === "ltr";
      const isRtl = this.localize.dir() === "rtl";
      const oldValue = this.value;
      if (this.disabled || this.readonly) {
        return;
      }
      if (event.key === "ArrowDown" || isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
        const decrement = event.shiftKey ? 1 : this.precision;
        this.value = Math.max(0, this.value - decrement);
        event.preventDefault();
      }
      if (event.key === "ArrowUp" || isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
        const increment = event.shiftKey ? 1 : this.precision;
        this.value = Math.min(this.max, this.value + increment);
        event.preventDefault();
      }
      if (event.key === "Home") {
        this.value = 0;
        event.preventDefault();
      }
      if (event.key === "End") {
        this.value = this.max;
        event.preventDefault();
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
      }
    }
    handleMouseEnter(event) {
      this.isHovering = true;
      this.hoverValue = this.getValueFromMousePosition(event);
    }
    handleMouseMove(event) {
      this.hoverValue = this.getValueFromMousePosition(event);
    }
    handleMouseLeave() {
      this.isHovering = false;
    }
    handleTouchStart(event) {
      this.isHovering = true;
      this.hoverValue = this.getValueFromTouchPosition(event);
      event.preventDefault();
    }
    handleTouchMove(event) {
      this.hoverValue = this.getValueFromTouchPosition(event);
    }
    handleTouchEnd(event) {
      this.isHovering = false;
      this.setValue(this.hoverValue);
      this.emit("sl-change");
      event.preventDefault();
    }
    roundToPrecision(numberToRound, precision = 0.5) {
      const multiplier = 1 / precision;
      return Math.ceil(numberToRound * multiplier) / multiplier;
    }
    handleHoverValueChange() {
      this.emit("sl-hover", {
        detail: {
          phase: "move",
          value: this.hoverValue
        }
      });
    }
    handleIsHoveringChange() {
      this.emit("sl-hover", {
        detail: {
          phase: this.isHovering ? "start" : "end",
          value: this.hoverValue
        }
      });
    }
    /** Sets focus on the rating. */
    focus(options) {
      this.rating.focus(options);
    }
    /** Removes focus from the rating. */
    blur() {
      this.rating.blur();
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      const counter = Array.from(Array(this.max).keys());
      let displayValue = 0;
      if (this.disabled || this.readonly) {
        displayValue = this.value;
      } else {
        displayValue = this.isHovering ? this.hoverValue : this.value;
      }
      return x`
      <div
        part="base"
        class=${e$2({
      rating: true,
      "rating--readonly": this.readonly,
      "rating--disabled": this.disabled,
      "rating--rtl": isRtl
    })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
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
          ${counter.map((index) => {
      if (displayValue > index && displayValue < index + 1) {
        return x`
                <span
                  class=${e$2({
          rating__symbol: true,
          "rating__partial-symbol-container": true,
          "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1
        })}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${o$1({
          clipPath: isRtl ? `inset(0 ${(displayValue - index) * 100}% 0 0)` : `inset(0 0 0 ${(displayValue - index) * 100}%)`
        })}
                  >
                    ${o(this.getSymbol(index + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${o$1({
          clipPath: isRtl ? `inset(0 0 0 ${100 - (displayValue - index) * 100}%)` : `inset(0 ${100 - (displayValue - index) * 100}% 0 0)`
        })}
                  >
                    ${o(this.getSymbol(index + 1))}
                  </div>
                </span>
              `;
      }
      return x`
              <span
                class=${e$2({
        rating__symbol: true,
        "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1,
        "rating__symbol--active": displayValue >= index + 1
      })}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${o(this.getSymbol(index + 1))}
              </span>
            `;
    })}
        </span>
      </div>
    `;
    }
  };
  SlRating.styles = [component_styles_default, rating_styles_default];
  SlRating.dependencies = { "sl-icon": SlIcon };
  __decorateClass([
    e$5(".rating")
  ], SlRating.prototype, "rating", 2);
  __decorateClass([
    r()
  ], SlRating.prototype, "hoverValue", 2);
  __decorateClass([
    r()
  ], SlRating.prototype, "isHovering", 2);
  __decorateClass([
    n$2()
  ], SlRating.prototype, "label", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlRating.prototype, "value", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlRating.prototype, "max", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlRating.prototype, "precision", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlRating.prototype, "readonly", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlRating.prototype, "disabled", 2);
  __decorateClass([
    n$2()
  ], SlRating.prototype, "getSymbol", 2);
  __decorateClass([
    t$1({ passive: true })
  ], SlRating.prototype, "handleTouchMove", 1);
  __decorateClass([
    watch("hoverValue")
  ], SlRating.prototype, "handleHoverValueChange", 1);
  __decorateClass([
    watch("isHovering")
  ], SlRating.prototype, "handleIsHoveringChange", 1);

  SlRating.define("sl-rating");

  // src/components/switch/switch.styles.ts
  var switch_styles_default = i$4`
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
`;

  var SlSwitch = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        value: (control) => control.checked ? control.value || "on" : void 0,
        defaultValue: (control) => control.defaultChecked,
        setValue: (control, checked) => control.checked = checked
      });
      this.hasSlotController = new HasSlotController(this, "help-text");
      this.hasFocus = false;
      this.title = "";
      this.name = "";
      this.size = "medium";
      this.disabled = false;
      this.checked = false;
      this.defaultChecked = false;
      this.form = "";
      this.required = false;
      this.helpText = "";
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleInput() {
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleClick() {
      this.checked = !this.checked;
      this.emit("sl-change");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.checked = false;
        this.emit("sl-change");
        this.emit("sl-input");
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.checked = true;
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleCheckedChange() {
      this.input.checked = this.checked;
      this.formControlController.updateValidity();
    }
    handleDisabledChange() {
      this.formControlController.setValidity(true);
    }
    /** Simulates a click on the switch. */
    click() {
      this.input.click();
    }
    /** Sets focus on the switch. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the switch. */
    blur() {
      this.input.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      return x`
      <div
        class=${e$2({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="base"
          class=${e$2({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus,
      "switch--small": this.size === "small",
      "switch--medium": this.size === "medium",
      "switch--large": this.size === "large"
    })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o$2(this.value)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
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
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlSwitch.styles = [component_styles_default, form_control_styles_default, switch_styles_default];
  __decorateClass([
    e$5('input[type="checkbox"]')
  ], SlSwitch.prototype, "input", 2);
  __decorateClass([
    r()
  ], SlSwitch.prototype, "hasFocus", 2);
  __decorateClass([
    n$2()
  ], SlSwitch.prototype, "title", 2);
  __decorateClass([
    n$2()
  ], SlSwitch.prototype, "name", 2);
  __decorateClass([
    n$2()
  ], SlSwitch.prototype, "value", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlSwitch.prototype, "size", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "disabled", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "checked", 2);
  __decorateClass([
    defaultValue("checked")
  ], SlSwitch.prototype, "defaultChecked", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlSwitch.prototype, "form", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "required", 2);
  __decorateClass([
    n$2({ attribute: "help-text" })
  ], SlSwitch.prototype, "helpText", 2);
  __decorateClass([
    watch("checked", { waitUntilFirstUpdate: true })
  ], SlSwitch.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlSwitch.prototype, "handleDisabledChange", 1);

  SlSwitch.define("sl-switch");

  // src/components/drawer/drawer.styles.ts
  var drawer_styles_default = i$4`
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
`;

  // src/internal/tabbable.ts
  var computedStyleMap = /* @__PURE__ */ new WeakMap();
  function getCachedComputedStyle(el) {
    let computedStyle = computedStyleMap.get(el);
    if (!computedStyle) {
      computedStyle = window.getComputedStyle(el, null);
      computedStyleMap.set(el, computedStyle);
    }
    return computedStyle;
  }
  function isVisible(el) {
    if (typeof el.checkVisibility === "function") {
      return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
    }
    const computedStyle = getCachedComputedStyle(el);
    return computedStyle.visibility !== "hidden" && computedStyle.display !== "none";
  }
  function isOverflowingAndTabbable(el) {
    const computedStyle = getCachedComputedStyle(el);
    const { overflowY, overflowX } = computedStyle;
    if (overflowY === "scroll" || overflowX === "scroll") {
      return true;
    }
    if (overflowY !== "auto" || overflowX !== "auto") {
      return false;
    }
    const isOverflowingY = el.scrollHeight > el.clientHeight;
    if (isOverflowingY && overflowY === "auto") {
      return true;
    }
    const isOverflowingX = el.scrollWidth > el.clientWidth;
    if (isOverflowingX && overflowX === "auto") {
      return true;
    }
    return false;
  }
  function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    const tabindex = Number(el.getAttribute("tabindex"));
    const hasTabindex = el.hasAttribute("tabindex");
    if (hasTabindex && (isNaN(tabindex) || tabindex <= -1)) {
      return false;
    }
    if (el.hasAttribute("disabled")) {
      return false;
    }
    if (el.closest("[inert]")) {
      return false;
    }
    if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
      return false;
    }
    if (!isVisible(el)) {
      return false;
    }
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
      return true;
    }
    if (el.hasAttribute("tabindex")) {
      return true;
    }
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
      return true;
    }
    const isNativelyTabbable = [
      "button",
      "input",
      "select",
      "textarea",
      "a",
      "audio",
      "video",
      "summary",
      "iframe"
    ].includes(tag);
    if (isNativelyTabbable) {
      return true;
    }
    return isOverflowingAndTabbable(el);
  }
  function getSlottedChildrenOutsideRootElement(slotElement, root) {
    var _a;
    return ((_a = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a.host) !== root;
  }
  function getTabbableElements(root) {
    const walkedEls = /* @__PURE__ */ new WeakMap();
    const tabbableElements = [];
    function walk(el) {
      if (el instanceof Element) {
        if (el.hasAttribute("inert") || el.closest("[inert]")) {
          return;
        }
        if (walkedEls.has(el)) {
          return;
        }
        walkedEls.set(el, true);
        if (!tabbableElements.includes(el) && isTabbable(el)) {
          tabbableElements.push(el);
        }
        if (el instanceof HTMLSlotElement && getSlottedChildrenOutsideRootElement(el, root)) {
          el.assignedElements({ flatten: true }).forEach((assignedEl) => {
            walk(assignedEl);
          });
        }
        if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
          walk(el.shadowRoot);
        }
      }
      for (const e of el.children) {
        walk(e);
      }
    }
    walk(root);
    return tabbableElements.sort((a, b) => {
      const aTabindex = Number(a.getAttribute("tabindex")) || 0;
      const bTabindex = Number(b.getAttribute("tabindex")) || 0;
      return bTabindex - aTabindex;
    });
  }

  // src/internal/active-elements.ts
  function* activeElements(activeElement = document.activeElement) {
    if (activeElement === null || activeElement === void 0)
      return;
    yield activeElement;
    if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") {
      yield* __yieldStar(activeElements(activeElement.shadowRoot.activeElement));
    }
  }
  function getDeepestActiveElement() {
    return [...activeElements()].pop();
  }

  // src/internal/modal.ts
  var activeModals = [];
  var Modal = class {
    constructor(element) {
      this.tabDirection = "forward";
      this.handleFocusIn = () => {
        if (!this.isActive())
          return;
        this.checkFocus();
      };
      this.handleKeyDown = (event) => {
        var _a;
        if (event.key !== "Tab" || this.isExternalActivated)
          return;
        if (!this.isActive())
          return;
        const currentActiveElement = getDeepestActiveElement();
        this.previousFocus = currentActiveElement;
        if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) {
          return;
        }
        if (event.shiftKey) {
          this.tabDirection = "backward";
        } else {
          this.tabDirection = "forward";
        }
        const tabbableElements = getTabbableElements(this.element);
        let currentFocusIndex = tabbableElements.findIndex((el) => el === currentActiveElement);
        this.previousFocus = this.currentFocus;
        const addition = this.tabDirection === "forward" ? 1 : -1;
        while (true) {
          if (currentFocusIndex + addition >= tabbableElements.length) {
            currentFocusIndex = 0;
          } else if (currentFocusIndex + addition < 0) {
            currentFocusIndex = tabbableElements.length - 1;
          } else {
            currentFocusIndex += addition;
          }
          this.previousFocus = this.currentFocus;
          const nextFocus = (
            /** @type {HTMLElement} */
            tabbableElements[currentFocusIndex]
          );
          if (this.tabDirection === "backward") {
            if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) {
              return;
            }
          }
          if (nextFocus && this.possiblyHasTabbableChildren(nextFocus)) {
            return;
          }
          event.preventDefault();
          this.currentFocus = nextFocus;
          (_a = this.currentFocus) == null ? void 0 : _a.focus({ preventScroll: false });
          const allActiveElements = [...activeElements()];
          if (allActiveElements.includes(this.currentFocus) || !allActiveElements.includes(this.previousFocus)) {
            break;
          }
        }
        setTimeout(() => this.checkFocus());
      };
      this.handleKeyUp = () => {
        this.tabDirection = "forward";
      };
      this.element = element;
      this.elementsWithTabbableControls = ["iframe"];
    }
    /** Activates focus trapping. */
    activate() {
      activeModals.push(this.element);
      document.addEventListener("focusin", this.handleFocusIn);
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);
    }
    /** Deactivates focus trapping. */
    deactivate() {
      activeModals = activeModals.filter((modal) => modal !== this.element);
      this.currentFocus = null;
      document.removeEventListener("focusin", this.handleFocusIn);
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);
    }
    /** Determines if this modal element is currently active or not. */
    isActive() {
      return activeModals[activeModals.length - 1] === this.element;
    }
    /** Activates external modal behavior and temporarily disables focus trapping. */
    activateExternal() {
      this.isExternalActivated = true;
    }
    /** Deactivates external modal behavior and re-enables focus trapping. */
    deactivateExternal() {
      this.isExternalActivated = false;
    }
    checkFocus() {
      if (this.isActive() && !this.isExternalActivated) {
        const tabbableElements = getTabbableElements(this.element);
        if (!this.element.matches(":focus-within")) {
          const start = tabbableElements[0];
          const end = tabbableElements[tabbableElements.length - 1];
          const target = this.tabDirection === "forward" ? start : end;
          if (typeof (target == null ? void 0 : target.focus) === "function") {
            this.currentFocus = target;
            target.focus({ preventScroll: false });
          }
        }
      }
    }
    possiblyHasTabbableChildren(element) {
      return this.elementsWithTabbableControls.includes(element.tagName.toLowerCase()) || element.hasAttribute("controls");
    }
  };

  // src/internal/offset.ts

  // src/internal/scroll.ts
  var locks = /* @__PURE__ */ new Set();
  function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    if (!document.body.classList.contains("sl-scroll-lock")) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.classList.add("sl-scroll-lock");
      document.body.style.setProperty("--sl-scroll-lock-size", `${scrollbarWidth}px`);
    }
  }
  function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
      document.body.classList.remove("sl-scroll-lock");
      document.body.style.removeProperty("--sl-scroll-lock-size");
    }
  }

  // src/components/icon-button/icon-button.styles.ts
  var icon_button_styles_default = i$4`
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
`;

  var SlIconButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasFocus = false;
      this.label = "";
      this.disabled = false;
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    /** Simulates a click on the icon button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the icon button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the icon button. */
    blur() {
      this.button.blur();
    }
    render() {
      const isLink = this.href ? true : false;
      const tag = isLink ? s`a` : s`button`;
      return n$1`
      <${tag}
        part="base"
        class=${e$2({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${o$2(isLink ? void 0 : this.disabled)}
        type=${o$2(isLink ? void 0 : "button")}
        href=${o$2(isLink ? this.href : void 0)}
        target=${o$2(isLink ? this.target : void 0)}
        download=${o$2(isLink ? this.download : void 0)}
        rel=${o$2(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${o$2(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${o$2(this.name)}
          library=${o$2(this.library)}
          src=${o$2(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
    }
  };
  SlIconButton.styles = [component_styles_default, icon_button_styles_default];
  SlIconButton.dependencies = { "sl-icon": SlIcon };
  __decorateClass([
    e$5(".icon-button")
  ], SlIconButton.prototype, "button", 2);
  __decorateClass([
    r()
  ], SlIconButton.prototype, "hasFocus", 2);
  __decorateClass([
    n$2()
  ], SlIconButton.prototype, "name", 2);
  __decorateClass([
    n$2()
  ], SlIconButton.prototype, "library", 2);
  __decorateClass([
    n$2()
  ], SlIconButton.prototype, "src", 2);
  __decorateClass([
    n$2()
  ], SlIconButton.prototype, "href", 2);
  __decorateClass([
    n$2()
  ], SlIconButton.prototype, "target", 2);
  __decorateClass([
    n$2()
  ], SlIconButton.prototype, "download", 2);
  __decorateClass([
    n$2()
  ], SlIconButton.prototype, "label", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlIconButton.prototype, "disabled", 2);

  // src/utilities/animation-registry.ts
  var defaultAnimationRegistry = /* @__PURE__ */ new Map();
  var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
  function ensureAnimation(animation) {
    return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
  }
  function getLogicalAnimation(animation, dir) {
    if (dir.toLowerCase() === "rtl") {
      return {
        keyframes: animation.rtlKeyframes || animation.keyframes,
        options: animation.options
      };
    }
    return animation;
  }
  function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
  }
  function getAnimation(el, animationName, options) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation == null ? void 0 : customAnimation[animationName]) {
      return getLogicalAnimation(customAnimation[animationName], options.dir);
    }
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) {
      return getLogicalAnimation(defaultAnimation, options.dir);
    }
    return {
      keyframes: [],
      options: { duration: 0 }
    };
  }

  // src/internal/event.ts
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }

  // src/internal/animate.ts
  function animateTo(el, keyframes, options) {
    return new Promise((resolve) => {
      if ((options == null ? void 0 : options.duration) === Infinity) {
        throw new Error("Promise-based animations must be finite.");
      }
      const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
        duration: prefersReducedMotion() ? 0 : options.duration
      }));
      animation.addEventListener("cancel", resolve, { once: true });
      animation.addEventListener("finish", resolve, { once: true });
    });
  }
  function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query.matches;
  }
  function stopAnimations(el) {
    return Promise.all(
      el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          animation.cancel();
          requestAnimationFrame(resolve);
        });
      })
    );
  }

  // src/internal/string.ts
  function uppercaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // src/components/drawer/drawer.component.ts
  var SlDrawer = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer");
      this.localize = new LocalizeController(this);
      this.modal = new Modal(this);
      this.open = false;
      this.label = "";
      this.placement = "end";
      this.contained = false;
      this.noHeader = false;
      this.handleDocumentKeyDown = (event) => {
        if (this.contained) {
          return;
        }
        if (event.key === "Escape" && this.modal.isActive() && this.open) {
          event.stopImmediatePropagation();
          this.requestClose("keyboard");
        }
      };
    }
    firstUpdated() {
      this.drawer.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        if (!this.contained) {
          this.modal.activate();
          lockBodyScrolling(this);
        }
      }
    }
    disconnectedCallback() {
      var _a;
      super.disconnectedCallback();
      unlockBodyScrolling(this);
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    }
    requestClose(source) {
      const slRequestClose = this.emit("sl-request-close", {
        cancelable: true,
        detail: { source }
      });
      if (slRequestClose.defaultPrevented) {
        const animation = getAnimation(this, "drawer.denyClose", { dir: this.localize.dir() });
        animateTo(this.panel, animation.keyframes, animation.options);
        return;
      }
      this.hide();
    }
    addOpenListeners() {
      var _a;
      if ("CloseWatcher" in window) {
        (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
        if (!this.contained) {
          this.closeWatcher = new CloseWatcher();
          this.closeWatcher.onclose = () => this.requestClose("keyboard");
        }
      } else {
        document.addEventListener("keydown", this.handleDocumentKeyDown);
      }
    }
    removeOpenListeners() {
      var _a;
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        this.originalTrigger = document.activeElement;
        if (!this.contained) {
          this.modal.activate();
          lockBodyScrolling(this);
        }
        const autoFocusTarget = this.querySelector("[autofocus]");
        if (autoFocusTarget) {
          autoFocusTarget.removeAttribute("autofocus");
        }
        await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
        this.drawer.hidden = false;
        requestAnimationFrame(() => {
          const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
          if (!slInitialFocus.defaultPrevented) {
            if (autoFocusTarget) {
              autoFocusTarget.focus({ preventScroll: true });
            } else {
              this.panel.focus({ preventScroll: true });
            }
          }
          if (autoFocusTarget) {
            autoFocusTarget.setAttribute("autofocus", "");
          }
        });
        const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
          dir: this.localize.dir()
        });
        const overlayAnimation = getAnimation(this, "drawer.overlay.show", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
        ]);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        if (!this.contained) {
          this.modal.deactivate();
          unlockBodyScrolling(this);
        }
        await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
        const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
          dir: this.localize.dir()
        });
        const overlayAnimation = getAnimation(this, "drawer.overlay.hide", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
            this.overlay.hidden = true;
          }),
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
            this.panel.hidden = true;
          })
        ]);
        this.drawer.hidden = true;
        this.overlay.hidden = false;
        this.panel.hidden = false;
        const trigger = this.originalTrigger;
        if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
          setTimeout(() => trigger.focus());
        }
        this.emit("sl-after-hide");
      }
    }
    handleNoModalChange() {
      if (this.open && !this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
      if (this.open && this.contained) {
        this.modal.deactivate();
        unlockBodyScrolling(this);
      }
    }
    /** Shows the drawer. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the drawer */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      return x`
      <div
        part="base"
        class=${e$2({
      drawer: true,
      "drawer--open": this.open,
      "drawer--top": this.placement === "top",
      "drawer--end": this.placement === "end",
      "drawer--bottom": this.placement === "bottom",
      "drawer--start": this.placement === "start",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--rtl": this.localize.dir() === "rtl",
      "drawer--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${o$2(this.noHeader ? this.label : void 0)}
          aria-labelledby=${o$2(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? x`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
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
                      @click=${() => this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
  };
  SlDrawer.styles = [component_styles_default, drawer_styles_default];
  SlDrawer.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass([
    e$5(".drawer")
  ], SlDrawer.prototype, "drawer", 2);
  __decorateClass([
    e$5(".drawer__panel")
  ], SlDrawer.prototype, "panel", 2);
  __decorateClass([
    e$5(".drawer__overlay")
  ], SlDrawer.prototype, "overlay", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlDrawer.prototype, "open", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlDrawer.prototype, "label", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlDrawer.prototype, "placement", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlDrawer.prototype, "contained", 2);
  __decorateClass([
    n$2({ attribute: "no-header", type: Boolean, reflect: true })
  ], SlDrawer.prototype, "noHeader", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDrawer.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch("contained", { waitUntilFirstUpdate: true })
  ], SlDrawer.prototype, "handleNoModalChange", 1);
  setDefaultAnimation("drawer.showTop", {
    keyframes: [
      { opacity: 0, translate: "0 -100%" },
      { opacity: 1, translate: "0 0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideTop", {
    keyframes: [
      { opacity: 1, translate: "0 0" },
      { opacity: 0, translate: "0 -100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showEnd", {
    keyframes: [
      { opacity: 0, translate: "100%" },
      { opacity: 1, translate: "0" }
    ],
    rtlKeyframes: [
      { opacity: 0, translate: "-100%" },
      { opacity: 1, translate: "0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideEnd", {
    keyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "100%" }
    ],
    rtlKeyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "-100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showBottom", {
    keyframes: [
      { opacity: 0, translate: "0 100%" },
      { opacity: 1, translate: "0 0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideBottom", {
    keyframes: [
      { opacity: 1, translate: "0 0" },
      { opacity: 0, translate: "0 100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showStart", {
    keyframes: [
      { opacity: 0, translate: "-100%" },
      { opacity: 1, translate: "0" }
    ],
    rtlKeyframes: [
      { opacity: 0, translate: "100%" },
      { opacity: 1, translate: "0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideStart", {
    keyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "-100%" }
    ],
    rtlKeyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.denyClose", {
    keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("drawer.overlay.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("drawer.overlay.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250 }
  });

  SlDrawer.define("sl-drawer");

  // src/components/alert/alert.styles.ts
  var alert_styles_default = i$4`
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
`;

  var toastStack = Object.assign(document.createElement("div"), { className: "sl-toast-stack" });
  var SlAlert = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "icon", "suffix");
      this.localize = new LocalizeController(this);
      this.open = false;
      this.closable = false;
      this.variant = "primary";
      this.duration = Infinity;
    }
    firstUpdated() {
      this.base.hidden = !this.open;
    }
    restartAutoHide() {
      clearTimeout(this.autoHideTimeout);
      if (this.open && this.duration < Infinity) {
        this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
      }
    }
    handleCloseClick() {
      this.hide();
    }
    handleMouseMove() {
      this.restartAutoHide();
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        if (this.duration < Infinity) {
          this.restartAutoHide();
        }
        await stopAnimations(this.base);
        this.base.hidden = false;
        const { keyframes, options } = getAnimation(this, "alert.show", { dir: this.localize.dir() });
        await animateTo(this.base, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        clearTimeout(this.autoHideTimeout);
        await stopAnimations(this.base);
        const { keyframes, options } = getAnimation(this, "alert.hide", { dir: this.localize.dir() });
        await animateTo(this.base, keyframes, options);
        this.base.hidden = true;
        this.emit("sl-after-hide");
      }
    }
    handleDurationChange() {
      this.restartAutoHide();
    }
    /** Shows the alert. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the alert */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
     * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
     * calling this method again. The returned promise will resolve after the alert is hidden.
     */
    async toast() {
      return new Promise((resolve) => {
        if (toastStack.parentElement === null) {
          document.body.append(toastStack);
        }
        toastStack.appendChild(this);
        requestAnimationFrame(() => {
          this.clientWidth;
          this.show();
        });
        this.addEventListener(
          "sl-after-hide",
          () => {
            toastStack.removeChild(this);
            resolve();
            if (toastStack.querySelector("sl-alert") === null) {
              toastStack.remove();
            }
          },
          { once: true }
        );
      });
    }
    render() {
      return x`
      <div
        part="base"
        class=${e$2({
      alert: true,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--has-icon": this.hasSlotController.test("icon"),
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger"
    })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
    }
  };
  SlAlert.styles = [component_styles_default, alert_styles_default];
  SlAlert.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass([
    e$5('[part~="base"]')
  ], SlAlert.prototype, "base", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlAlert.prototype, "open", 2);
  __decorateClass([
    n$2({ type: Boolean, reflect: true })
  ], SlAlert.prototype, "closable", 2);
  __decorateClass([
    n$2({ reflect: true })
  ], SlAlert.prototype, "variant", 2);
  __decorateClass([
    n$2({ type: Number })
  ], SlAlert.prototype, "duration", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlAlert.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch("duration")
  ], SlAlert.prototype, "handleDurationChange", 1);
  setDefaultAnimation("alert.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("alert.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 250, easing: "ease" }
  });

  SlAlert.define("sl-alert");

  // Set the base path to the folder you copied Shoelace's assets to
  setBasePath('/dist/shoelace');

  // <sl-button>, <sl-icon>, <sl-input>, and <sl-rating> are ready to use!

})();
