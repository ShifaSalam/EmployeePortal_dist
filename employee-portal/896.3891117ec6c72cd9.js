(self.webpackChunkEmployeePortal=self.webpackChunkEmployeePortal||[]).push([[896],{896:function(ht){ht.exports=function(){"use strict";function w(a){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(a)}function j(a,n){return(j=Object.setPrototypeOf||function(s,c){return s.__proto__=c,s})(a,n)}function Z(a,n,o){return(Z=function Et(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(c,b,y){var N=[null];N.push.apply(N,b);var X=new(Function.bind.apply(c,N));return y&&j(X,y.prototype),X}).apply(null,arguments)}function R(a){return function At(a){if(Array.isArray(a))return ce(a)}(a)||function yt(a){if(typeof Symbol<"u"&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function gt(a,n){if(a){if("string"==typeof a)return ce(a,n);var o=Object.prototype.toString.call(a).slice(8,-1);if("Object"===o&&a.constructor&&(o=a.constructor.name),"Map"===o||"Set"===o)return Array.from(a);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ce(a,n)}}(a)||function St(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(a,n){(null==n||n>a.length)&&(n=a.length);for(var o=0,s=new Array(n);o<n;o++)s[o]=a[o];return s}var bt=Object.hasOwnProperty,He=Object.setPrototypeOf,Ot=Object.isFrozen,Rt=Object.getPrototypeOf,Lt=Object.getOwnPropertyDescriptor,E=Object.freeze,g=Object.seal,Mt=Object.create,ze=typeof Reflect<"u"&&Reflect,J=ze.apply,me=ze.construct;J||(J=function(n,o,s){return n.apply(o,s)}),E||(E=function(n){return n}),g||(g=function(n){return n}),me||(me=function(n,o){return Z(n,R(o))});var Nt=S(Array.prototype.forEach),Ge=S(Array.prototype.pop),Y=S(Array.prototype.push),Q=S(String.prototype.toLowerCase),pe=S(String.prototype.toString),We=S(String.prototype.match),L=S(String.prototype.replace),Dt=S(String.prototype.indexOf),wt=S(String.prototype.trim),v=S(RegExp.prototype.test),de=function Ct(a){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return me(a,o)}}(TypeError);function S(a){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];return J(a,n,s)}}function l(a,n,o){var s;o=null!==(s=o)&&void 0!==s?s:Q,He&&He(a,null);for(var c=n.length;c--;){var b=n[c];if("string"==typeof b){var y=o(b);y!==b&&(Ot(n)||(n[c]=y),b=y)}a[b]=!0}return a}function x(a){var o,n=Mt(null);for(o in a)!0===J(bt,a,[o])&&(n[o]=a[o]);return n}function ee(a,n){for(;null!==a;){var o=Lt(a,n);if(o){if(o.get)return S(o.get);if("function"==typeof o.value)return S(o.value)}a=Rt(a)}return function s(c){return console.warn("fallback value for",c),null}}var Be=E(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Te=E(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ve=E(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),It=E(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),_e=E(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),xt=E(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),$e=E(["#text"]),je=E(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),he=E(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ye=E(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),te=E(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),kt=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Pt=g(/<%[\w\W]*|[\w\W]*%>/gm),Ft=g(/\${[\w\W]*}/gm),Ut=g(/^data-[\-\w.\u00B7-\uFFFF]/),Ht=g(/^aria-[\-\w]+$/),zt=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Gt=g(/^(?:\w+script|data):/i),Wt=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Bt=g(/^html$/i),$t=g(/^[a-z][.\w]*(-[.\w]+)+$/i);return function Xe(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:typeof window>"u"?null:window,n=function(e){return Xe(e)};if(n.version="2.5.5",n.removed=[],!a||!a.document||9!==a.document.nodeType)return n.isSupported=!1,n;var o=a.document,s=a.document,c=a.DocumentFragment,b=a.HTMLTemplateElement,y=a.Node,N=a.Element,k=a.NodeFilter,X=a.NamedNodeMap,Vt=void 0===X?a.NamedNodeMap||a.MozNamedAttrMap:X,qt=a.HTMLFormElement,Kt=a.DOMParser,re=a.trustedTypes,ae=N.prototype,Zt=ee(ae,"cloneNode"),Jt=ee(ae,"nextSibling"),Qt=ee(ae,"childNodes"),Ee=ee(ae,"parentNode");if("function"==typeof b){var Ae=s.createElement("template");Ae.content&&Ae.content.ownerDocument&&(s=Ae.content.ownerDocument)}var M=function(n,o){if("object"!==w(n)||"function"!=typeof n.createPolicy)return null;var s=null,c="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(c)&&(s=o.currentScript.getAttribute(c));var b="dompurify"+(s?"#"+s:"");try{return n.createPolicy(b,{createHTML:function(N){return N},createScriptURL:function(N){return N}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}}(re,o),ye=M?M.createHTML(""):"",ge=s.implementation,er=s.createNodeIterator,tr=s.createDocumentFragment,rr=s.getElementsByTagName,ar=o.importNode,Ve={};try{Ve=x(s).documentMode?s.documentMode:{}}catch{}var D={};n.isSupported="function"==typeof Ee&&ge&&void 0!==ge.createHTMLDocument&&9!==Ve;var F,T,Se=kt,be=Pt,Oe=Ft,nr=Ut,ir=Ht,or=Gt,qe=Wt,lr=$t,Re=zt,p=null,Ke=l({},[].concat(R(Be),R(Te),R(ve),R(_e),R($e))),d=null,Ze=l({},[].concat(R(je),R(he),R(Ye),R(te))),f=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,Le=null,Je=!0,Me=!0,Qe=!1,et=!0,H=!1,Ne=!0,P=!1,De=!1,we=!1,z=!1,ie=!1,oe=!1,tt=!0,rt=!1,Ce=!0,q=!1,G={},W=null,at=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),nt=null,it=l({},["audio","video","img","source","image","track"]),Ie=null,ot=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),le="http://www.w3.org/1998/Math/MathML",se="http://www.w3.org/2000/svg",C="http://www.w3.org/1999/xhtml",B=C,xe=!1,ke=null,ur=l({},[le,se,C],pe),fr=["application/xhtml+xml","text/html"],$=null,mr=s.createElement("form"),lt=function(e){return e instanceof RegExp||e instanceof Function},Pe=function(e){$&&$===e||((!e||"object"!==w(e))&&(e={}),e=x(e),F=F=-1===fr.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,T="application/xhtml+xml"===F?pe:Q,p="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,T):Ke,d="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,T):Ze,ke="ALLOWED_NAMESPACES"in e?l({},e.ALLOWED_NAMESPACES,pe):ur,Ie="ADD_URI_SAFE_ATTR"in e?l(x(ot),e.ADD_URI_SAFE_ATTR,T):ot,nt="ADD_DATA_URI_TAGS"in e?l(x(it),e.ADD_DATA_URI_TAGS,T):it,W="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,T):at,V="FORBID_TAGS"in e?l({},e.FORBID_TAGS,T):{},Le="FORBID_ATTR"in e?l({},e.FORBID_ATTR,T):{},G="USE_PROFILES"in e&&e.USE_PROFILES,Je=!1!==e.ALLOW_ARIA_ATTR,Me=!1!==e.ALLOW_DATA_ATTR,Qe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,et=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,H=e.SAFE_FOR_TEMPLATES||!1,Ne=!1!==e.SAFE_FOR_XML,P=e.WHOLE_DOCUMENT||!1,z=e.RETURN_DOM||!1,ie=e.RETURN_DOM_FRAGMENT||!1,oe=e.RETURN_TRUSTED_TYPE||!1,we=e.FORCE_BODY||!1,tt=!1!==e.SANITIZE_DOM,rt=e.SANITIZE_NAMED_PROPS||!1,Ce=!1!==e.KEEP_CONTENT,q=e.IN_PLACE||!1,Re=e.ALLOWED_URI_REGEXP||Re,B=e.NAMESPACE||C,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),H&&(Me=!1),ie&&(z=!0),G&&(p=l({},R($e)),d=[],!0===G.html&&(l(p,Be),l(d,je)),!0===G.svg&&(l(p,Te),l(d,he),l(d,te)),!0===G.svgFilters&&(l(p,ve),l(d,he),l(d,te)),!0===G.mathMl&&(l(p,_e),l(d,Ye),l(d,te))),e.ADD_TAGS&&(p===Ke&&(p=x(p)),l(p,e.ADD_TAGS,T)),e.ADD_ATTR&&(d===Ze&&(d=x(d)),l(d,e.ADD_ATTR,T)),e.ADD_URI_SAFE_ATTR&&l(Ie,e.ADD_URI_SAFE_ATTR,T),e.FORBID_CONTENTS&&(W===at&&(W=x(W)),l(W,e.FORBID_CONTENTS,T)),Ce&&(p["#text"]=!0),P&&l(p,["html","head","body"]),p.table&&(l(p,["tbody"]),delete V.tbody),E&&E(e),$=e)},st=l({},["mi","mo","mn","ms","mtext"]),ut=l({},["foreignobject","annotation-xml"]),pr=l({},["title","style","font","a","script"]),ue=l({},Te);l(ue,ve),l(ue,It);var Fe=l({},_e);l(Fe,xt);var O=function(e){Y(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=ye}catch{e.remove()}}},fe=function(e,t){try{Y(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{Y(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!d[e])if(z||ie)try{O(t)}catch{}else try{t.setAttribute(e,"")}catch{}},ft=function(e){var t,r;if(we)e="<remove></remove>"+e;else{var u=We(e,/^[\r\n\t ]+/);r=u&&u[0]}"application/xhtml+xml"===F&&B===C&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var A=M?M.createHTML(e):e;if(B===C)try{t=(new Kt).parseFromString(A,F)}catch{}if(!t||!t.documentElement){t=ge.createDocument(B,"template",null);try{t.documentElement.innerHTML=xe?ye:A}catch{}}var h=t.body||t.documentElement;return e&&r&&h.insertBefore(s.createTextNode(r),h.childNodes[0]||null),B===C?rr.call(t,P?"html":"body")[0]:P?t.documentElement:h},ct=function(e){return er.call(e.ownerDocument||e,e,k.SHOW_ELEMENT|k.SHOW_COMMENT|k.SHOW_TEXT|k.SHOW_PROCESSING_INSTRUCTION|k.SHOW_CDATA_SECTION,null,!1)},mt=function(e){return e instanceof qt&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof Vt)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},K=function(e){return"object"===w(y)?e instanceof y:e&&"object"===w(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},I=function(e,t,r){D[e]&&Nt(D[e],function(u){u.call(n,t,r,$)})},pt=function(e){var t;if(I("beforeSanitizeElements",e,null),mt(e)||v(/[\u0080-\uFFFF]/,e.nodeName))return O(e),!0;var r=T(e.nodeName);if(I("uponSanitizeElement",e,{tagName:r,allowedTags:p}),e.hasChildNodes()&&!K(e.firstElementChild)&&(!K(e.content)||!K(e.content.firstElementChild))&&v(/<[/\w]/g,e.innerHTML)&&v(/<[/\w]/g,e.textContent)||"select"===r&&v(/<template/i,e.innerHTML)||7===e.nodeType||Ne&&8===e.nodeType&&v(/<[/\w]/g,e.data))return O(e),!0;if(!p[r]||V[r]){if(!V[r]&&Tt(r)&&(f.tagNameCheck instanceof RegExp&&v(f.tagNameCheck,r)||f.tagNameCheck instanceof Function&&f.tagNameCheck(r)))return!1;if(Ce&&!W[r]){var u=Ee(e)||e.parentNode,A=Qt(e)||e.childNodes;if(A&&u)for(var _=A.length-1;_>=0;--_){var U=Zt(A[_],!0);U.__removalCount=(e.__removalCount||0)+1,u.insertBefore(U,Jt(e))}}return O(e),!0}return e instanceof N&&!function(e){var t=Ee(e);(!t||!t.tagName)&&(t={namespaceURI:B,tagName:"template"});var r=Q(e.tagName),u=Q(t.tagName);return!!ke[e.namespaceURI]&&(e.namespaceURI===se?t.namespaceURI===C?"svg"===r:t.namespaceURI===le?"svg"===r&&("annotation-xml"===u||st[u]):!!ue[r]:e.namespaceURI===le?t.namespaceURI===C?"math"===r:t.namespaceURI===se?"math"===r&&ut[u]:!!Fe[r]:e.namespaceURI===C?!(t.namespaceURI===se&&!ut[u]||t.namespaceURI===le&&!st[u])&&!Fe[r]&&(pr[r]||!ue[r]):!("application/xhtml+xml"!==F||!ke[e.namespaceURI]))}(e)||("noscript"===r||"noembed"===r||"noframes"===r)&&v(/<\/no(script|embed|frames)/i,e.innerHTML)?(O(e),!0):(H&&3===e.nodeType&&(t=L(t=e.textContent,Se," "),t=L(t,be," "),t=L(t,Oe," "),e.textContent!==t&&(Y(n.removed,{element:e.cloneNode()}),e.textContent=t)),I("afterSanitizeElements",e,null),!1)},dt=function(e,t,r){if(tt&&("id"===t||"name"===t)&&(r in s||r in mr))return!1;if((!Me||Le[t]||!v(nr,t))&&(!Je||!v(ir,t)))if(!d[t]||Le[t]){if(!(Tt(e)&&(f.tagNameCheck instanceof RegExp&&v(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&v(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||"is"===t&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&v(f.tagNameCheck,r)||f.tagNameCheck instanceof Function&&f.tagNameCheck(r))))return!1}else if(!Ie[t]&&!v(Re,L(r,qe,""))&&("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Dt(r,"data:")||!nt[e])&&(!Qe||v(or,L(r,qe,"")))&&r)return!1;return!0},Tt=function(e){return"annotation-xml"!==e&&We(e,lr)},vt=function(e){var t,r,u,A;I("beforeSanitizeAttributes",e,null);var h=e.attributes;if(h){var _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:d};for(A=h.length;A--;){var m=(t=h[A]).name,Ue=t.namespaceURI;if(r="value"===m?t.value:wt(t.value),u=T(m),_.attrName=u,_.attrValue=r,_.keepAttr=!0,_.forceKeepAttr=void 0,I("uponSanitizeAttribute",e,_),r=_.attrValue,!_.forceKeepAttr&&(fe(m,e),_.keepAttr)){if(!et&&v(/\/>/i,r)){fe(m,e);continue}if(Ne&&v(/((--!?|])>)|<\/(style|title)/i,r)){fe(m,e);continue}H&&(r=L(r,Se," "),r=L(r,be," "),r=L(r,Oe," "));var _t=T(e.nodeName);if(dt(_t,u,r)){if(rt&&("id"===u||"name"===u)&&(fe(m,e),r="user-content-"+r),M&&"object"===w(re)&&"function"==typeof re.getAttributeType&&!Ue)switch(re.getAttributeType(_t,u)){case"TrustedHTML":r=M.createHTML(r);break;case"TrustedScriptURL":r=M.createScriptURL(r)}try{Ue?e.setAttributeNS(Ue,m,r):e.setAttribute(m,r),mt(e)?O(e):Ge(n.removed)}catch{}}}}I("afterSanitizeAttributes",e,null)}},Tr=function i(e){var t,r=ct(e);for(I("beforeSanitizeShadowDOM",e,null);t=r.nextNode();)I("uponSanitizeShadowNode",t,null),!pt(t)&&(t.content instanceof c&&i(t.content),vt(t));I("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var t,r,u,A,h,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((xe=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!K(i)){if("function"!=typeof i.toString)throw de("toString is not a function");if("string"!=typeof(i=i.toString()))throw de("dirty is not a string, aborting")}if(!n.isSupported){if("object"===w(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof i)return a.toStaticHTML(i);if(K(i))return a.toStaticHTML(i.outerHTML)}return i}if(De||Pe(e),n.removed=[],"string"==typeof i&&(q=!1),q){if(i.nodeName){var _=T(i.nodeName);if(!p[_]||V[_])throw de("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof y)1===(r=(t=ft("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===r.nodeName||"HTML"===r.nodeName?t=r:t.appendChild(r);else{if(!z&&!H&&!P&&-1===i.indexOf("<"))return M&&oe?M.createHTML(i):i;if(!(t=ft(i)))return z?null:oe?ye:""}t&&we&&O(t.firstChild);for(var U=ct(q?i:t);u=U.nextNode();)3===u.nodeType&&u===A||pt(u)||(u.content instanceof c&&Tr(u.content),vt(u),A=u);if(A=null,q)return i;if(z){if(ie)for(h=tr.call(t.ownerDocument);t.firstChild;)h.appendChild(t.firstChild);else h=t;return(d.shadowroot||d.shadowrootmod)&&(h=ar.call(o,h,!0)),h}var m=P?t.outerHTML:t.innerHTML;return P&&p["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&v(Bt,t.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+m),H&&(m=L(m,Se," "),m=L(m,be," "),m=L(m,Oe," ")),M&&oe?M.createHTML(m):m},n.setConfig=function(i){Pe(i),De=!0},n.clearConfig=function(){$=null,De=!1},n.isValidAttribute=function(i,e,t){$||Pe({});var r=T(i),u=T(e);return dt(r,u,t)},n.addHook=function(i,e){"function"==typeof e&&(D[i]=D[i]||[],Y(D[i],e))},n.removeHook=function(i){if(D[i])return Ge(D[i])},n.removeHooks=function(i){D[i]&&(D[i]=[])},n.removeAllHooks=function(){D={}},n}()}()}}]);