import{u as _e,_ as fe,a as he}from"./list-3f4b71c4.js";import{d as me,aa as ke,p as ve,r as f,u as ge,s as ye,a as $e,C as be,ab as we,n as Ce,D as Se,ac as De,E as R,i as Ae,t as Ie,ad as Ve,J as Ue,a3 as qe,ae as Te,H as Be,af as Le,K as Qe,L as x,M as ze,N as Fe,o as l,c as i,e as t,x as h,j as a,O as c,w as m,l as I,g as o,y as Me,P as Pe,F as G,A as Ne,z as Re,k as xe,R as K,f as E,S as H,T as Ge,ag as Ke,B as w,U as C,ah as Ee,$ as He,a9 as je}from"./index-df35a132.js";import{_ as Je}from"./Breadcrumb-120bdd32.js";import{n as Oe}from"./list-6498ebd9.js";function We(D,A){const k=D.findIndex(v=>v.id===A);k!==-1&&D.splice(k,1)}const Xe={class:"v-toolbar"},Ye=["onClick"],Ze={class:"filters"},et={class:"form-row"},tt=["label"],st={class:"buttons"},nt=["onClick"],at={class:"table-responsive"},ot={class:"table"},lt=["checked"],it=t("th",null,null,-1),dt=["onClick"],ut=["checked"],ct={class:"v-center"},pt={class:"nowrap"},rt={class:"action-btns"},_t={key:0,indeterminate:"",class:"spinner-sm"},ft=["onClick"],ht=["onClick"],mt={class:"nowrap"},kt={class:"nowrap"},vt={class:"nowrap"},gt={class:"nowrap"},yt={key:0},$t={colspan:"7"},bt={class:"no-data-placeholder"},S=50,At=me({__name:"AppsView",setup(D){var F,M;const{input:A,upload:k,uploadChanged:v}=ke(),g=ve(),d=f([]),V=f(),{t:j}=ge(),{app:J,fileIdKey:O}=ye($e()),y=be({text:"",tags:[]}),{downloadItems:U}=we(d,"apps.zip"),{downloadFile:W}=Ke(O),q=Ce(),T=q.query,$=f(parseInt(((F=T.page)==null?void 0:F.toString())??"1")),b=f(0),u=f(Se(((M=T.q)==null?void 0:M.toString())??"")),B=De(u.value),p=q.params.type;p&&B.push({name:"type",op:"",value:p});const X=f(R(B)),Y=()=>{k(J.value.downloadsDir)},{selectAll:Z,toggleSelect:L,checked:ee}=_e(d),{loading:te}=Ae({handle:(e,n)=>{n?Ie(j(n),"error"):e&&(d.value=e.packages.map(r=>({...r,checked:!1})),b.value=e.packageCount)},document:Ve,variables:()=>({offset:($.value-1)*S,limit:S,query:X.value}),appApi:!0});Ue($,e=>{p?w(g,`/apps/${p}?page=${e}&q=${C(u.value)}`):w(g,`/apps?page=${e}&q=${C(u.value)}`)});function se(){const e=[];y.text&&e.push({name:"text",op:"",value:y.text}),u.value=R(e),Q(),V.value.dismiss()}function Q(){p?w(g,`/apps/${p}?q=${C(u.value)}`):w(g,`/apps?q=${C(u.value)}`)}const{mutate:ne,onDone:ae}=qe({document:Te,appApi:!0});function oe(e){ae(()=>{e.isUninstalling=!0}),ne({id:e.id})}const{loading:le,load:ie,refetch:de}=Be({handle:(e,n)=>{if(e)for(const r of e.packageStatuses)r.exist||We(d.value,r.id)},document:Le,variables:()=>({ids:d.value.filter(e=>e.isUninstalling).map(e=>e.id)}),appApi:!0}),z=e=>{e.status};return Qe(()=>{x.on("upload_task_done",z);let e=!0;setInterval(()=>{d.value.some(n=>n.isUninstalling)&&!le.value&&(e?(ie(),e=!1):de())},1e3)}),ze(()=>{x.off("upload_task_done",z)}),(e,n)=>{const r=Je,P=Ee,ue=fe,ce=He,pe=je,re=he,_=Fe("tooltip");return l(),i(G,null,[t("div",Xe,[h(r,{current:()=>`${e.$t("page_title.apps")} (${b.value})`},null,8,["current"]),a(ee)?c((l(),i("md-icon-button",{key:0,onClick:n[0]||(n[0]=m((...s)=>a(U)&&a(U)(...s),["stop"]))},[h(P)])),[[_,e.$t("download")]]):I("",!0),t("md-icon-button",{onClick:m(Y,["stop"]),style:{display:"none"}},o(e.$t("install")),9,Ye),h(ue,{ref_key:"searchInputRef",ref:V,modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=s=>u.value=s),search:Q},{filters:Me(()=>[t("div",Ze,[t("div",et,[c(t("md-outlined-text-field",{label:e.$t("keywords"),"onUpdate:modelValue":n[1]||(n[1]=s=>y.text=s),"keyup.enter":"applyAndDoSearch"},null,8,tt),[[Pe,y.text]])]),t("div",st,[t("md-filled-button",{onClick:m(se,["stop"])},o(e.$t("search")),9,nt)])])]),_:1},8,["modelValue"])]),t("div",at,[t("table",ot,[t("thead",null,[t("tr",null,[t("th",null,[t("md-checkbox",{"touch-target":"wrapper",onChange:n[3]||(n[3]=(...s)=>a(L)&&a(L)(...s)),checked:a(Z)},null,40,lt)]),t("th",null,o(e.$t("name")),1),it,t("th",null,o(e.$t("size")),1),t("th",null,o(e.$t("type")),1),t("th",null,o(e.$t("installed_at")),1),t("th",null,o(e.$t("updated_at")),1)])]),t("tbody",null,[(l(!0),i(G,null,Ne(d.value,s=>(l(),i("tr",{key:s.id,class:Re({selected:s.checked}),onClick:m(N=>s.checked=!s.checked,["stop"])},[t("td",null,[t("md-checkbox",{"touch-target":"wrapper",checked:s.checked},null,8,ut)]),t("td",null,[t("strong",ct,o(s.name)+" ("+o(s.version)+")",1),h(ce,{id:s.id,raw:s},null,8,["id","raw"])]),t("td",pt,[t("div",rt,[s.isUninstalling?c((l(),i("md-circular-progress",_t,null,512)),[[_,e.$t("uninstalling")]]):c((l(),i("md-icon-button",{key:1,onClick:m(N=>oe(s),["stop"])},[h(pe)],8,ft)),[[_,e.$t("uninstall")]]),c((l(),i("md-icon-button",{onClick:m(N=>a(W)(s.path,`${s.name.replace(" ","")}-${s.id}.apk`),["stop"])},[h(P)],8,ht)),[[_,e.$t("download")]])])]),t("td",mt,o(a(xe)(s.size)),1),t("td",kt,o(e.$t("app_type."+s.type)),1),t("td",vt,[c((l(),i("span",null,[E(o(a(H)(s.installedAt)),1)])),[[_,a(K)(s.installedAt)]])]),t("td",gt,[c((l(),i("span",null,[E(o(a(H)(s.updatedAt)),1)])),[[_,a(K)(s.updatedAt)]])])],10,dt))),128))]),d.value.length?I("",!0):(l(),i("tfoot",yt,[t("tr",null,[t("td",$t,[t("div",bt,o(e.$t(a(Oe)(a(te)))),1)])])]))])]),b.value>S?(l(),Ge(re,{key:0,modelValue:$.value,"onUpdate:modelValue":n[4]||(n[4]=s=>$.value=s),total:b.value,limit:S},null,8,["modelValue","total"])):I("",!0),t("input",{ref_key:"fileInput",ref:A,style:{display:"none"},type:"file",accept:".apk",multiple:"",onChange:n[5]||(n[5]=(...s)=>a(v)&&a(v)(...s))},null,544)],64)}}});export{At as default};