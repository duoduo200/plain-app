import{u as Be,_ as Me,a as Ue,b as Ne}from"./list-e47b1e18.js";import{d as He,aA as Le,a as Qe,r as I,u as xe,c as Ge,s as Oe,B as Ke,D as We,p as Xe,C as je,aB as Je,ac as Pe,aC as Ye,E as Ze,G as et,H as tt,I as f,J as ot,K as st,e as a,f as o,x as c,h as t,F as S,L as m,w as _,j as k,M as U,y as lt,A as N,t as u,N as nt,O as at,k as it,aD as dt,aI as ct,n as ce,Q as ue,o as n,R as ut,a6 as _e,V as re,z as _t,av as pe,aF as H,m as rt,aw as pt,ax as mt,ai as ht,W as vt,Y as gt,Z as ft,X as kt,aq as yt,aG as bt,aH as wt,aa as Ct,aj as $t,$ as Tt,a0 as Vt,a1 as It,_ as St}from"./index-cf9632a1.js";import{_ as Dt}from"./upload-rounded-5ef62b23.js";import{_ as At,a as Rt}from"./grid-view-outline-rounded-d168f243.js";import{_ as zt}from"./Breadcrumb-460d4b41.js";import{u as Et,a as Ft}from"./tags-2315a9a3.js";import"./vee-validate.esm-5fd8773e.js";const r=A=>(pt("data-v-4365b18c"),A=A(),mt(),A),qt={class:"v-toolbar"},Bt=r(()=>o("md-ripple",null,null,-1)),Mt=r(()=>o("md-ripple",null,null,-1)),Ut=r(()=>o("md-ripple",null,null,-1)),Nt=["onClick"],Ht=r(()=>o("md-ripple",null,null,-1)),Lt=["onClick"],Qt=r(()=>o("md-ripple",null,null,-1)),xt={class:"filters"},Gt=["label"],Ot={class:"form-label"},Kt=["label","selected","onClick"],Wt={class:"buttons"},Xt=["onClick"],jt={key:0,class:"image-container",style:{"margin-bottom":"24px"}},Jt=["onClick","onContextmenu"],Pt=["src"],Yt={class:"duration"},Zt={key:1,class:"no-data-placeholder"},eo={key:2,class:"table-responsive"},to={class:"table"},oo=["checked","indeterminate"],so=r(()=>o("th",null,"ID",-1)),lo=r(()=>o("th",null,null,-1)),no=r(()=>o("th",null,null,-1)),ao=["onClick"],io=["checked"],co=["src","onClick"],uo={class:"nowrap"},_o={class:"action-btns"},ro=["onClick"],po=r(()=>o("md-ripple",null,null,-1)),mo=["onClick"],ho=r(()=>o("md-ripple",null,null,-1)),vo=["onClick"],go=r(()=>o("md-ripple",null,null,-1)),fo={class:"nowrap"},ko={class:"nowrap"},yo={key:0},bo={colspan:"8"},wo={class:"no-data-placeholder"},D=48,Co=He({__name:"VideosView",setup(A){var ne,ae;const me=Le(),i=Qe(),h=I([]),L=I(),{t:C}=xe(),Q=Ge(),{app:x,urlTokenKey:q}=Oe(Q),v=Ke({text:"",tags:[]}),d=We.VIDEO,G=Xe().query,$=I(parseInt(((ne=G.page)==null?void 0:ne.toString())??"1")),y=I(je(((ae=G.q)==null?void 0:ae.toString())??"")),T=I(""),{tags:R}=Et(d,y,v,async e=>{T.value=nt(e),await at(),be()}),{addToTags:he}=Ft(d,h,R),{deleteItems:ve,deleteItem:O}=Je(),{allChecked:K,realAllChecked:z,selectRealAll:ge,allCheckedAlertVisible:fe,clearSelection:E,toggleAllChecked:W,toggleItemChecked:X,toggleRow:ke,total:b,checked:j}=Be(h),{downloadItems:ye}=Pe(q,d,h,E,"videos.zip"),{downloadFile:J}=ht(q),B=Ye(()=>h.value.map(e=>({src:pe(e.fileId),name:H(e.path),duration:e.duration,size:e.size,path:e.path,data:e,type:d}))),{loading:P,load:be,refetch:M}=Ze({handle:async(e,l)=>{if(l)it(C(l),"error");else if(e){const w=[];for(const V of e.videos)w.push({...V,checked:!1,fileId:dt(q.value,V.path)});h.value=w,b.value=e.videoCount}},document:ct,variables:()=>({offset:($.value-1)*D,limit:D,query:T.value}),appApi:!0});function we(){ce(i,`/videos?page=${$.value}&q=${ue(y.value)}`)}function Y(e){Q.lightbox={sources:B.value,index:e,visible:!0}}et($,()=>{we()});function Ce(e){v.tags.includes(e)?vt(v.tags,l=>l.id===e.id):v.tags.push(e)}function Z(e){gt(ft,{type:d,tags:R.value,item:{key:e.id,title:e.title,size:e.size},selected:R.value.filter(l=>e.tags.some(w=>w.id===l.id))})}function $e(){y.value=kt(v),ee(),L.value.dismiss()}function ee(){ce(i,`/videos?q=${ue(y.value)}`)}function Te(){i.videoViewType==="grid"?i.videoViewType="list":i.videoViewType="grid"}function Ve(){me.push("/files"),yt(bt,{message:C("upload_videos")})}function Ie(e,l){e.preventDefault(),wt({x:e.x,y:e.y,items:[{label:C("add_to_tags"),onClick:()=>{Z(l)}},{label:C("download"),onClick:()=>{J(l.path,H(l.path).replace(" ","-"))}},{label:C("delete"),onClick:()=>{O(d,l)}}]})}const te=e=>{e.type===d&&(E(),M())},oe=e=>{e.type===d&&M()},se=e=>{e.type===d&&(E(),M())},le=()=>{b.value--};return tt(()=>{f.on("item_tags_updated",oe),f.on("items_tags_updated",te),f.on("media_item_deleted",le),f.on("media_items_deleted",se)}),ot(()=>{f.off("item_tags_updated",oe),f.off("items_tags_updated",te),f.off("media_item_deleted",le),f.off("media_items_deleted",se)}),(e,l)=>{const w=zt,V=Ct,ie=$t,de=Tt,Se=At,De=Rt,Ae=Dt,Re=Me,ze=Ue,Ee=Vt,Fe=It,qe=Ne,g=st("tooltip");return n(),a(S,null,[o("div",qt,[c(w,{current:()=>`${e.$t("page_title.videos")} (${t(b)})`},null,8,["current"]),t(j)&&t(i).videoViewType==="list"?(n(),a(S,{key:0},[m((n(),a("button",{class:"icon-button",onClick:l[0]||(l[0]=_(s=>t(ve)(t(d),h.value,t(z),T.value),["stop"]))},[Bt,c(V)])),[[g,e.$t("delete")]]),m((n(),a("button",{class:"icon-button",onClick:l[1]||(l[1]=_(s=>t(ye)(t(z),T.value),["stop"]))},[Mt,c(ie)])),[[g,e.$t("download")]]),m((n(),a("button",{class:"icon-button",onClick:l[2]||(l[2]=_(s=>t(he)(t(z),T.value),["stop"]))},[Ut,c(de)])),[[g,e.$t("add_to_tags")]])],64)):k("",!0),m((n(),a("button",{class:"icon-button",onClick:_(Te,["prevent"])},[Ht,t(i).videoViewType==="list"?(n(),U(Se,{key:0})):k("",!0),t(i).videoViewType==="grid"?(n(),U(De,{key:1})):k("",!0)],8,Nt)),[[g,e.$t(t(i).videoViewType==="list"?"view_as_grid":"view_as_list")]]),m((n(),a("button",{class:"icon-button",onClick:_(Ve,["prevent"])},[Qt,c(Ae)],8,Lt)),[[g,e.$t("upload")]]),c(Re,{ref_key:"searchInputRef",ref:L,modelValue:y.value,"onUpdate:modelValue":l[4]||(l[4]=s=>y.value=s),search:ee},{filters:lt(()=>[o("div",xt,[m(o("md-outlined-text-field",{label:e.$t("keywords"),"onUpdate:modelValue":l[3]||(l[3]=s=>v.text=s),"keyup.enter":"applyAndDoSearch"},null,8,Gt),[[ut,v.text]]),o("label",Ot,u(e.$t("tags")),1),o("md-chip-set",null,[(n(!0),a(S,null,N(t(R),s=>(n(),a("md-filter-chip",{key:s.id,label:s.name,selected:v.tags.includes(s),onClick:F=>Ce(s)},null,8,Kt))),128))]),o("div",Wt,[o("md-filled-button",{onClick:_($e,["stop"])},u(e.$t("search")),9,Xt)])])]),_:1},8,["modelValue"])]),t(i).videoViewType==="grid"?(n(),a("div",jt,[(n(!0),a(S,null,N(B.value,(s,F)=>(n(),a("div",{class:"item",onClick:p=>Y(F),onContextmenu:p=>Ie(p,s.data)},[o("img",{class:"image",src:s.src+"&w=300&h=300"},null,8,Pt),o("span",Yt,u(t(_e)(s.duration)),1)],40,Jt))),256))])):k("",!0),t(i).videoViewType==="grid"&&B.value.length===0?(n(),a("div",Zt,u(e.$t(t(re)(t(P),t(x).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):k("",!0),c(ze,{limit:D,total:t(b),"all-checked-alert-visible":t(fe),"real-all-checked":t(z),"select-real-all":t(ge),"clear-selection":t(E)},null,8,["total","all-checked-alert-visible","real-all-checked","select-real-all","clear-selection"]),t(i).videoViewType==="list"?(n(),a("div",eo,[o("table",to,[o("thead",null,[o("tr",null,[o("th",null,[o("md-checkbox",{"touch-target":"wrapper",onChange:l[5]||(l[5]=(...s)=>t(W)&&t(W)(...s)),checked:t(K),indeterminate:!t(K)&&t(j)},null,40,oo)]),so,lo,o("th",null,u(e.$t("name")),1),no,o("th",null,u(e.$t("tags")),1),o("th",null,u(e.$t("duration")),1),o("th",null,u(e.$t("file_size")),1)])]),o("tbody",null,[(n(!0),a(S,null,N(h.value,(s,F)=>(n(),a("tr",{key:s.id,class:_t({selected:s.checked}),onClick:_(p=>t(ke)(s),["stop"])},[o("td",null,[o("md-checkbox",{"touch-target":"wrapper",onChange:l[6]||(l[6]=(...p)=>t(X)&&t(X)(...p)),checked:s.checked},null,40,io)]),o("td",null,[c(Ee,{id:s.id,raw:s},null,8,["id","raw"])]),o("td",null,[o("img",{class:"img-video",src:t(pe)(s.fileId)+"&w=300&h=300",width:"50",height:"50",style:{cursor:"pointer"},onClick:_(p=>Y(F),["stop"])},null,8,co)]),o("td",null,u(s.title),1),o("td",uo,[o("div",_o,[m((n(),a("button",{class:"icon-button",onClick:_(p=>t(O)(t(d),s),["stop"])},[po,c(V)],8,ro)),[[g,e.$t("delete")]]),m((n(),a("button",{class:"icon-button",onClick:_(p=>t(J)(s.path,t(H)(s.path).replace(" ","-")),["stop"])},[ho,c(ie)],8,mo)),[[g,e.$t("download")]]),m((n(),a("button",{class:"icon-button",onClick:_(p=>Z(s),["stop"])},[go,c(de)],8,vo)),[[g,e.$t("add_to_tags")]])])]),o("td",null,[c(Fe,{tags:s.tags,type:t(d)},null,8,["tags","type"])]),o("td",fo,u(t(_e)(s.duration)),1),o("td",ko,u(t(rt)(s.size)),1)],10,ao))),128))]),h.value.length?k("",!0):(n(),a("tfoot",yo,[o("tr",null,[o("td",bo,[o("div",wo,u(e.$t(t(re)(t(P),t(x).permissions,"WRITE_EXTERNAL_STORAGE"))),1)])])]))])])):k("",!0),t(b)>D?(n(),U(qe,{key:3,modelValue:$.value,"onUpdate:modelValue":l[7]||(l[7]=s=>$.value=s),total:t(b),limit:D},null,8,["modelValue","total"])):k("",!0)],64)}}});const zo=St(Co,[["__scopeId","data-v-4365b18c"]]);export{zo as default};