var I=Object.defineProperty;var q=(t,e,n)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var s=(t,e,n)=>(q(t,typeof e!="symbol"?e+"":e,n),n);import{c0 as P,c1 as y,c2 as x,c3 as p,c4 as N,o as $,e as O,f as T}from"./index-6d72ad8d.js";function E(t,e){for(var n=-1,i=t.length;++n<i&&P(e,t[n],0)>-1;);return n}var S=/^\s+/;function l(t,e,n){if(t=y(t),t&&(n||e===void 0))return t.replace(S,"");if(!t||!(e=x(e)))return t;var i=p(t),r=E(i,p(e));return N(i,r).join("")}class C{constructor(){s(this,"type","all");s(this,"value","")}parse(e){const n=e.indexOf(":");n===-1?this.type=e:(this.type=e.slice(0,n),this.value=e.slice(n+1))}getText(e,n,i){var c,f;let r="";switch(this.type){case"all":r=e("all_devices");break;case"mac":r=((c=n.find(u=>u.mac===this.value))==null?void 0:c.name)??this.value;break;case"iface":r=((f=i.find(u=>u.ifName==this.value))==null?void 0:f.name)??this.value;break}return r}toValue(){return this.type=="all"?this.type:`${this.type}:${this.value}`}}function h(t){return A(t)?!0:o(t)}function o(t){return/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(t)}function A(t){return/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/.test(t)}function k(t){if(t.includes(":")){if(o(t))return!0;let e="",n="";if(t.includes("]:")&&t.startsWith("[")){const i=t.split("]:");e=l(i[0],"["),n=i[1]}else{const i=t.split(":");e=i[0],n=i[1]}return h(e)&&a(n)}return h(t)}function a(t){return t.includes(",")?t.split(",").every(d):d(t)}function d(t){if(/^[0-9]{1,5}|([0-9]{1,5}\\-[0-9]{1,5})$/.test(t))if(t.includes("-")){const e=t.split("-"),n=parseInt(e[0]),i=parseInt(e[1]);return n>=1&&n<i&&n<65536&&i>0&&i<65536}else{const e=parseInt(t);return e>=1&&e<=65535}return!1}function b(t){if(t.includes(":")){if(F(t))return!0;let e="",n="";if(t.includes("]:")&&t.startsWith("[")){const i=t.split("]:");e=l(i[0],"["),n=i[1]}else{const i=t.split(":");e=i[0],n=i[1]}return m(e)&&a(n)}return m(t)}function R(t){const e=t.split("/");if(e.length!==2)return!1;const n=parseInt(e[1]);return A(e[0])&&n>=0&&n<=32}function F(t){const e=t.split("/");if(e.length!==2)return!1;const n=parseInt(e[1]);return o(e[0])&&n>32&&n<=128}function m(t){return R(t)?!0:F(t)}function _(t,e){let n=t;return e&&(n=l(t,"*.")),/[a-z0-9]{2}/.test(n)?!0:new RegExp("^(?=.{1,253}\\.?$)(?:(?!-|[^.]+_)[A-Za-z0-9-_]{1,63}(?<!-)(?:\\.|$)){2,}$").test(n)}function g(t){if(t.includes(":")){const e=t.split(":"),n=e[0],i=e[1];return _(n,!0)&&a(i)}return _(t,!0)}var W=(t=>(t.IP="ip",t.NET="net",t.DNS="dns",t.REMOTE_PORT="remote_port",t.INTERNET="internet",t.INTERFACE="iface",t.LIST="list",t))(W||{});class j{constructor(){s(this,"type","dns");s(this,"value","")}parse(e){const n=e.indexOf(":");n===-1?this.type=e:(this.type=e.slice(0,n),this.value=e.slice(n+1))}static hasInput(e){return["ip","net","dns","remote_port"].includes(e)}static hint(e){switch(e){case"ip":return"10.10.10.2";case"net":return"10.10.10.0/24";case"dns":return"example.com";case"remote_port":return"1419"}return""}static isValid(e,n){switch(e){case"ip":return k(n);case"net":return b(n);case"dns":return g(n);case"remote_port":return a(n)}return!0}getText(e,n){var i;return this.type=="internet"?e("target_type.internet"):this.type=="iface"?this.value?((i=n.find(r=>r.ifName==this.value))==null?void 0:i.name)??this.value:e("all_local_networks"):this.type=="remote_port"?e("remote_port",{port:this.value}):this.value}toValue(){return!this.value||this.type==="internet"?this.type:`${this.type}:${this.value}`}}const B={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},M=T("path",{fill:"currentColor",d:"M12.025 16q-.6 0-1.012-.425t-.363-1q.075-1.05.5-1.825t1.35-1.6q1.025-.9 1.563-1.563t.537-1.512q0-1.025-.687-1.7T12 5.7q-.8 0-1.363.338t-.912.837q-.35.5-.862.675t-.988-.025q-.575-.25-.787-.825t.087-1.075Q7.9 4.5 9.125 3.75T12 3q2.625 0 4.038 1.462t1.412 3.513q0 1.25-.537 2.138t-1.688 2.012q-.85.8-1.2 1.3t-.475 1.15q-.1.625-.525 1.025t-1 .4ZM12 22q-.825 0-1.413-.588T10 20q0-.825.588-1.413T12 18q.825 0 1.413.588T14 20q0 .825-.588 1.413T12 22Z"},null,-1),V=[M];function Z(t,e){return $(),O("svg",B,V)}const v={name:"material-symbols-question-mark-rounded",render:Z};export{C as A,W as T,v as _,j as a};