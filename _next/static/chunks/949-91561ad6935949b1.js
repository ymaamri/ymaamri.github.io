(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return f},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",l="navigate",u="restore",a="server-patch",f="prefetch",i="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=n._(r(7294)),l=r(4532),u=r(3353),a=r(1410),f=r(9064),i=r(370),c=r(9955),s=r(4224),d=r(508),p=r(1516),y=r(4266),v=r(3991),h=new Set;function b(e,t,r,n,o,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(h.has(l))return;h.add(l)}let a=l?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function O(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:m,prefetch:_=null,passHref:g,replace:C,shallow:E,scroll:P,locale:j,onClick:T,onMouseEnter:M,onTouchStart:R,legacyBehavior:k=!1,...A}=e;r=m,k&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let N=!1!==_,w=null===_?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,I=o.default.useContext(c.RouterContext),x=o.default.useContext(s.AppRouterContext),S=null!=I?I:x,L=!I,{href:U,as:K}=o.default.useMemo(()=>{if(!I){let e=O(a);return{href:e,as:h?O(h):e}}let[e,t]=(0,l.resolveHref)(I,a,!0);return{href:e,as:h?(0,l.resolveHref)(I,h):t||e}},[I,a,h]),F=o.default.useRef(U),H=o.default.useRef(K);k&&(n=o.default.Children.only(r));let z=k?n&&"object"==typeof n&&n.ref:t,[D,V,q]=(0,d.useIntersection)({rootMargin:"200px"}),B=o.default.useCallback(e=>{(H.current!==K||F.current!==U)&&(q(),H.current=K,F.current=U),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[K,z,U,q,D]);o.default.useEffect(()=>{S&&V&&N&&b(S,U,K,{locale:j},{kind:w},L)},[K,U,V,j,N,null==I?void 0:I.locale,S,L,w]);let G={ref:B,onClick(e){k||"function"!=typeof T||T(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,l,a,f,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:i,scroll:f}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};c?o.default.startTransition(y):y()}(e,S,U,K,C,E,P,j,L,N)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(N||!L)&&b(S,U,K,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:w},L)},onTouchStart(e){k||"function"!=typeof R||R(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(N||!L)&&b(S,U,K,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:w},L)}};if((0,f.isAbsoluteUrl)(K))G.href=K;else if(!k||g||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(K,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);G.href=t||(0,y.addBasePath)((0,i.addLocale)(K,e,null==I?void 0:I.defaultLocale))}return k?o.default.cloneElement(n,G):o.default.createElement("a",{...A,...G},r)}),_=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let n=r(7294),o=r(29),l="function"==typeof IntersectionObserver,u=new Map,a=[];function f(e){let{rootRef:t,rootMargin:r,disabled:f}=e,i=f||!l,[c,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,r,t,c,d.current]);let y=(0,n.useCallback)(()=>{s(!1)},[]);return[p,c,y]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5569)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return f}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function f(e){return function(t){return n.createElement(i,u({attr:u({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,u({key:r},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var r,o=e.attr,l=e.size,f=e.title,i=a(e,["attr","size","title"]),c=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),f&&n.createElement("title",null,f),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}}]);