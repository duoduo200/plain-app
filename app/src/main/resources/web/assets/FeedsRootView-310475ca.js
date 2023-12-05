import{a as ae,_ as le}from"./TagFilter.vuevuetypescriptsetuptruelang-92433806.js";import{d as D,r as y,a2 as V,c8 as ie,ak as P,O as U,al as L,o as g,e as C,f as t,t as i,L as Q,R as Y,h as e,am as j,an as H,g as E,_ as de,c9 as ce,u as re,a as ue,p as pe,q as _e,ca as fe,i as me,cb as ve,k as T,v as he,K as be,x as w,y as N,cc as $e,cd as ke,ce as ge,F as G,A as S,w as B,z,bB as K,Y as R,N as Ce,n as q,Q as ye,aH as Fe,cf as xe,a9 as we}from"./index-e23e99bf.js";import{g as O,M as Me}from"./splitpanes.es-951888f8.js";import{u as J,a as W}from"./vee-validate.esm-36997df0.js";import"./EditValueModal-b22371ac.js";const Ae={slot:"headline"},Le={slot:"content"},Ve={class:"form-row"},Ne=["label","error","error-text"],Re={class:"form-row"},qe={class:"form-check-label"},De=["checked"],Qe={slot:"actions"},Ee=["disabled"],Ie=D({__name:"AddFeedModal",props:{done:{type:Function}},setup(M){const d=M,{handleSubmit:b}=J(),f=y(),c=y(!1);function $(o){c.value=o.target.checked}const{mutate:m,loading:F,onDone:k}=V({document:ie,appApi:!0}),{value:l,resetField:v,errorMessage:r}=W("inputValue",P().required());v();function x(){L()}(async()=>{var o;await U(),(o=f.value)==null||o.focus()})();const p=b(()=>{m({url:l.value??"",fetchContent:c.value})});return k(()=>{var o;(o=d.done)==null||o.call(this),L()}),(o,n)=>(g(),C("md-dialog",null,[t("div",Ae,i(o.$t("add_subscription")),1),t("div",Le,[t("div",Ve,[Q(t("md-outlined-text-field",{ref_key:"inputRef",ref:f,label:o.$t("rss_url"),"onUpdate:modelValue":n[0]||(n[0]=u=>j(l)?l.value=u:null),onKeyup:n[1]||(n[1]=H((...u)=>e(p)&&e(p)(...u),["enter"])),error:e(r),"error-text":e(r)?o.$t(e(r)):""},null,40,Ne),[[Y,e(l)]])]),t("div",Re,[t("label",qe,[t("md-checkbox",{"touch-target":"wrapper",onChange:$,checked:c.value},null,40,De),E(" "+i(o.$t("fetch_content_automatically")),1)])])]),t("div",Qe,[t("md-outlined-button",{value:"cancel",onClick:x},i(o.$t("cancel")),1),t("md-filled-button",{value:"save",disabled:e(F),onClick:n[2]||(n[2]=(...u)=>e(p)&&e(p)(...u)),autofocus:""},i(o.$t("save")),9,Ee)])]))}});const Te=de(Ie,[["__scopeId","data-v-cd35ee4b"]]),Ge={slot:"headline"},Se={slot:"content"},Be={class:"form-label"},ze={class:"form-row"},Ke=["label","error","error-text"],Oe={class:"form-row"},Pe={class:"form-check-label"},Ue=["checked"],Ye={slot:"actions"},je=["disabled"],He=D({__name:"FeedModal",props:{data:{type:Object}},setup(M){var x,p;const d=M,{handleSubmit:b}=J(),f=y(),c=y(!1);function $(o){c.value=o.target.checked}const{mutate:m,loading:F,onDone:k}=V({document:ce,appApi:!0}),{value:l,errorMessage:v}=W("inputValue",P().required());l.value=((x=d.data)==null?void 0:x.name)??"",c.value=((p=d.data)==null?void 0:p.fetchContent)??!1,(async()=>{var o;await U(),(o=f.value)==null||o.focus()})();const r=b(()=>{var o;m({id:(o=d.data)==null?void 0:o.id,name:l.value,fetchContent:c.value})});return k(()=>{L()}),(o,n)=>{var u;return g(),C("md-dialog",null,[t("div",Ge,i(o.$t("update_subscription")),1),t("div",Se,[t("div",Be,i((u=M.data)==null?void 0:u.url),1),t("div",ze,[Q(t("md-outlined-text-field",{ref_key:"inputRef",ref:f,class:"form-control",label:o.$t("name"),error:e(v),"error-text":e(v)?o.$t(e(v)):"","onUpdate:modelValue":n[0]||(n[0]=_=>j(l)?l.value=_:null),onKeyup:n[1]||(n[1]=H((..._)=>e(r)&&e(r)(..._),["enter"]))},null,40,Ke),[[Y,e(l)]])]),t("div",Oe,[t("label",Pe,[t("md-checkbox",{"touch-target":"wrapper",onChange:$,checked:c.value},null,40,Ue),E(" "+i(o.$t("fetch_content_automatically")),1)])])]),t("div",Ye,[t("md-outlined-button",{value:"cancel",onClick:n[2]||(n[2]=(..._)=>e(L)&&e(L)(..._))},i(o.$t("cancel")),1),t("md-filled-button",{value:"save",disabled:e(F),onClick:n[3]||(n[3]=(..._)=>e(r)&&e(r)(..._)),autofocus:""},i(o.$t("save")),9,je)])])}}}),Je={class:"page-container"},We={class:"sidebar"},Xe={class:"nav-title"},Ze={style:{position:"relative"}},et=t("md-ripple",null,null,-1),tt=["open"],ot=["onClick"],nt={slot:"headline"},st={class:"nav"},at=["onClick"],lt=["onClick","onContextmenu"],it={class:"main"},_t=D({__name:"FeedsRootView",setup(M){const{t:d}=re(),b=ue(),f=y([]),c=[{text:"add_subscription",click:x},{text:"import_opml_file",click:_},{text:"export_opml_file",click:X}],$=y(!1),m=pe(),F=_e(m.query),k=fe(m.query),l=y(),{refetch:v}=me({handle:(s,a)=>{a?T(d(a),"error"):s&&(f.value=s.feeds)},document:$e,appApi:!0});function r(s){const a=s.target.files;if(!a)return;const A=new FileReader;A.addEventListener("load",()=>{n({content:A.result})},!1),A.readAsText(a[0])}function x(){R(Te,{done:()=>{v()}})}const{mutate:p,onDone:o}=V({document:ke,appApi:!0});o(s=>{ve(s.data.exportFeeds,"application/xml","feeds.xml")});const{mutate:n,onDone:u}=V({document:ge,appApi:!0});u(()=>{T(d("imported")),v()});function _(){l.value.value="",l.value.click()}function X(){p()}function Z(s){const a=Ce([{name:"feed",op:"",value:K(s.name)}]);q(b,`/feeds?q=${ye(a)}`)}function ee(s,a){s.preventDefault(),Fe({x:s.x,y:s.y,items:[{label:d("edit"),onClick:()=>{R(He,{data:a})}},{label:d("delete"),onClick:()=>{R(we,{id:a.id,name:a.name,gql:xe,appApi:!0,typeName:"Feed",done:()=>{q(b,"/feeds")}})}}]})}function te(){q(b,"/feeds")}return(s,a)=>{const A=ae,oe=le,ne=he("router-view"),se=be("tooltip");return g(),C("div",Je,[w(e(Me),null,{default:N(()=>[w(e(O),{size:"20","min-size":"10"},{default:N(()=>[t("div",We,[t("h2",Xe,[E(i(s.$t("page_title.feeds"))+" ",1),t("div",Ze,[Q((g(),C("button",{class:"icon-button",id:"add-feed-ref",onClick:a[0]||(a[0]=()=>$.value=!0)},[et,w(A)])),[[se,e(d)("add_subscription")]]),t("md-menu",{anchor:"add-feed-ref",positioning:"fixed","stay-open-on-focusout":"",quick:"",open:$.value,onClosed:a[1]||(a[1]=()=>$.value=!1)},[(g(),C(G,null,S(c,h=>t("md-menu-item",{onClick:h.click},[t("div",nt,i(s.$t(h.text)),1)],8,ot)),64))],40,tt)])]),t("ul",st,[t("li",{onClick:B(te,["prevent"]),class:z({active:e(m).path==="/feeds"&&!e(F)&&!e(k)})},i(s.$t("all")),11,at),(g(!0),C(G,null,S(f.value,h=>(g(),C("li",{onClick:B(I=>Z(h),["stop","prevent"]),onContextmenu:I=>ee(I,h),class:z({active:e(m).params.feedId===h.id||e(k)&&e(K)(h.name)===e(k)})},i(h.name),43,lt))),256))]),w(oe,{type:"FEED_ENTRY",selected:e(F)},null,8,["selected"])])]),_:1}),w(e(O),null,{default:N(()=>[t("div",it,[w(ne)])]),_:1})]),_:1}),t("input",{ref_key:"fileInput",ref:l,style:{display:"none"},accept:".xml",type:"file",onChange:r},null,544)])}}});export{_t as default};