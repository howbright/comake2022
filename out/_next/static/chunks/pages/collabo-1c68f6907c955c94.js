(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{7948:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(3366),o=n(7462),i=n(7294),a=n(6010),l=n(7192),s=n(7623),c=n(1496),u=n(8979);function f(t){return(0,u.Z)("MuiContainer",t)}(0,n(6087).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var h=n(8216),d=n(5893);const m=["className","component","disableGutters","fixed","maxWidth"],p=(0,c.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${(0,h.Z)(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}})((({theme:t,ownerState:e})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})),(({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce(((e,n)=>{const r=t.breakpoints.values[n];return 0!==r&&(e[t.breakpoints.up(n)]={maxWidth:`${r}${t.breakpoints.unit}`}),e}),{})),(({theme:t,ownerState:e})=>(0,o.Z)({},"xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}})));var b=i.forwardRef((function(t,e){const n=(0,s.Z)({props:t,name:"MuiContainer"}),{className:i,component:c="div",disableGutters:u=!1,fixed:b=!1,maxWidth:Z="lg"}=n,x=(0,r.Z)(n,m),g=(0,o.Z)({},n,{component:c,disableGutters:u,fixed:b,maxWidth:Z}),v=(t=>{const{classes:e,fixed:n,disableGutters:r,maxWidth:o}=t,i={root:["root",o&&`maxWidth${(0,h.Z)(String(o))}`,n&&"fixed",r&&"disableGutters"]};return(0,l.Z)(i,f,e)})(g);return(0,d.jsx)(p,(0,o.Z)({as:c,ownerState:g,className:(0,a.Z)(v.root,i),ref:e},x))}))},1615:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collabo",function(){return n(9408)}])},1405:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(5944),o=(n(7294),n(2293)),i=n(7357),a=n(155),l=n(3321),s=n(6540);function c(){return(0,r.tZ)(i.Z,{sx:{flexGrow:1},children:(0,r.tZ)(o.Z,{position:"static",children:(0,r.BX)(a.Z,{children:[(0,r.tZ)(i.Z,{component:"img",sx:{width:90},alt:"logo",src:"https://howbright.github.io/comake2022/COMAKE_LOGO_W.png"}),(0,r.tZ)(i.Z,{flex:1}),(0,r.tZ)(l.Z,{variant:"contained",startIcon:(0,r.tZ)(s.Z,{}),color:"secondary",children:"\uc0c8 \uacc4\uc57d\uc11c"})]})})})}},2174:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var r=n(5944),o=n(7294),i=(n(1405),n(7357)),a=n(8815),l=n(1528),s=n(2359),c=n(5113),u=n(1023),f=n(1163),h=n(6638),d=n(2684),m=n(2133),p=n(7962);function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t){var e=(0,f.useRouter)(),n=Z(o.useState(0),2),b=n[0],x=n[1],g=o.useRef(null);return o.useEffect((function(){g.current.ownerDocument.body.scrollTop=0,console.log(e.pathname),"/"===e.pathname?x(0):"/collabo"===e.pathname?x(1):"/document-box"===e.pathname?x(2):"/templates"===e.pathname&&x(3)})),(0,r.BX)(i.Z,{sx:{pb:7},ref:g,children:[(0,r.tZ)(a.ZP,{}),(0,r.tZ)(c.Z,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:(0,r.BX)(l.Z,{showLabels:!0,value:b,onChange:function(t,e){},children:[(0,r.tZ)(s.Z,{label:"\ud648",icon:(0,r.tZ)(h.Z,{}),LinkComponent:u.C,href:"https://howbright.github.io/comake2022/"}),(0,r.tZ)(s.Z,{label:"\ucf5c\ub77c\ubcf4 \uc791\uc131",icon:(0,r.tZ)(d.Z,{}),LinkComponent:u.C,href:"https://howbright.github.io/comake2022/collabo"}),(0,r.tZ)(s.Z,{label:"\uacc4\uc57d\uc11c\ud568",icon:(0,r.tZ)(m.Z,{}),LinkComponent:u.C,href:"https://howbright.github.io/comake2022/document-box"}),(0,r.tZ)(s.Z,{label:"\uacc4\uc57d\uc11c \uc591\uc2dd",icon:(0,r.tZ)(p.Z,{}),LinkComponent:u.C,href:"https://howbright.github.io/comake2022/templates"})]})})]})}function g(t){var e=t.children;return(0,r.BX)(r.HY,{children:[(0,r.tZ)("div",{children:e}),(0,r.tZ)(x,{})]})}},9408:function(t,e,n){"use strict";n.r(e);var r=n(5944),o=(n(7294),n(7948)),i=n(5861),a=n(7357),l=n(2174);e.default=function(){return(0,r.tZ)(l.Z,{children:(0,r.tZ)(o.Z,{maxWidth:"lg",children:(0,r.tZ)(a.Z,{sx:{my:4,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,r.tZ)(i.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"\uc5ec\uae30\ub294 \ucf5c\ub77c\ubcf4 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4."})})})})}},1023:function(t,e,n){"use strict";var r=n(5944),o=n(7294),i=n(6010),a=n(1163),l=n(1664),s=n(122);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){c(t,e,n[e])}))}return t}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var h=(0,n(1496).ZP)("a")({}),d=o.forwardRef((function(t,e){var n=t.to,o=t.linkAs,i=(t.href,t.replace),a=t.scroll,s=t.shallow,c=t.prefetch,d=t.locale,m=f(t,["to","linkAs","href","replace","scroll","shallow","prefetch","locale"]);return(0,r.tZ)(l.default,{href:n,prefetch:c,as:o,replace:i,scroll:a,shallow:s,passHref:!0,locale:d,children:(0,r.tZ)(h,u({ref:e},m))})})),m=o.forwardRef((function(t,e){var n=t.activeClassName,o=void 0===n?"active":n,l=t.as,m=t.className,p=t.href,b=t.noLinkStyle,Z=(t.role,f(t,["activeClassName","as","className","href","noLinkStyle","role"])),x=(0,a.useRouter)(),g="string"===typeof p?p:p.pathname,v=(0,i.Z)(m,c({},o,x.pathname===g&&o));return"string"===typeof p&&(0===p.indexOf("http")||0===p.indexOf("mailto:"))?b?(0,r.tZ)(h,u({className:v,href:p,ref:e},Z)):(0,r.tZ)(s.Z,u({className:v,href:p,ref:e},Z)):b?(0,r.tZ)(d,u({className:v,ref:e,to:p},Z)):(0,r.tZ)(s.Z,u({component:d,linkAs:l,className:v,ref:e,to:p},Z))}));e.C=m}},function(t){t.O(0,[133,252,774,888,179],(function(){return e=1615,t(t.s=e);var e}));var e=t.O();_N_E=e}]);