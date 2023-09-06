import{b as rt,u as pt,_ as _t,a as mt}from"./list-ecca0f33.js";import{_ as ht}from"./call-outline-rounded-e3ae2fe9.js";import{_ as ft}from"./FieldId-7a42c5ae.js";import{l as bt,_ as gt}from"./Multiselect-6a97b930.js";import{_ as vt,a as yt}from"./label-outline-rounded-f959da46.js";import{_ as kt}from"./delete-outline-rounded-fee50069.js";import{_ as $t}from"./Breadcrumb-d5bdebe4.js";import{d as Ct,q as Vt,s as Tt,a as wt,r as h,u as St,C as qt,p as At,D as Dt,E as z,G as Lt,X as It,H as Mt,I as Ut,t as Bt,Y as Qt,K as Gt,L as Nt,M as Rt,Z as Ft,$ as Kt,o as a,c as d,e,f as r,j as l,F as k,w as p,l as S,y as Et,g as n,N as q,O as zt,P as jt,Q as j,R as Ot,A as O,z as Pt,k as xt,U as P,a0 as Ht,S as Xt,T as Yt,B as $,V as C,a1 as Zt,a2 as Jt}from"./index-5f5c60b6.js";import{n as Wt}from"./list-6498ebd9.js";import{_ as te}from"./DeleteConfirm.vuevuetypescriptsetuptruelang-42857978.js";import{u as ee,a as se,b as oe}from"./tags-d534ff65.js";import"./VModal.vuevuetypescriptsetuptruelang-61cd4dae.js";import"./vee-validate.esm-e0a551fe.js";const ne={class:"v-toolbar"},le={class:"right-actions"},ae=["title"],ie=["title"],ce=["title"],ue={class:"row mb-3"},de={class:"col-md-3 col-form-label"},re={class:"col-md-9"},pe=["onKeyup"],_e={class:"row mb-3"},me={class:"col-md-3 col-form-label"},he={class:"col-md-9"},fe={class:"actions"},be=["onClick"],ge={class:"table"},ve=e("th",null,"ID",-1),ye={class:"actions one"},ke=["onClick"],$e=["onUpdate:modelValue"],Ce={key:0,class:"spinner spinner-sm"},Ve={class:"nowrap"},Te={class:"badge"},we=["title"],Se={class:"actions one"},qe=["onClick"],Ae={key:0},De={colspan:"10"},Le={class:"no-data-placeholder"},Pe=Ct({__name:"CallsView",setup(Ie){var K,E;const f=Vt(),{app:x}=Tt(wt()),i=h([]),{t:A}=St(),c=qt({text:"",tags:[]}),b="CALL",D=At(),L=D.query,g=h(parseInt(((K=L.page)==null?void 0:K.toString())??"1")),v=50,y=h(0),u=h(Dt(((E=L.q)==null?void 0:E.toString())??"")),I=h(""),{tags:V}=ee(b,u,c,async t=>{_&&t.push({name:"type",op:"",value:Z[_].toString()}),I.value=z(t),await Lt(),Y()}),{addToTags:M}=se(b,i,V),{removeFromTags:U}=oe(b,i,V),{deleteItems:B}=rt(It,()=>{G()},i),H=Mt(()=>i.value.some(t=>t.checked)),{selectAll:T,toggleSelect:Q}=pt(i),{loading:X,load:Y,refetch:G}=Ut({handle:(t,o)=>{o?Bt(A(o),"error"):t&&(i.value=t.calls.map(w=>({...w,checked:!1})),y.value=t.callCount)},document:Qt,variables:()=>({offset:(g.value-1)*v,limit:v,query:I.value}),appApi:!0}),_=D.params.type,Z={incoming:1,outgoing:2,missed:3};Gt(g,t=>{_?$(f,`/calls/${_}?page=${t}&q=${C(u.value)}`):$(f,`/calls?page=${t}&q=${C(u.value)}`)});function N(){const t=[];for(const o of c.tags)t.push({name:"tag",op:"",value:bt.kebabCase(o.name)});c.text&&t.push({name:"text",op:"",value:c.text}),u.value=z(t),R()}function R(){_?$(f,`/calls/${_}?q=${C(u.value)}`):$(f,`/calls?q=${C(u.value)}`)}Nt(()=>{Rt.on("refetch_by_tag_type",t=>{t===b&&G()})});function J(t){if(!t)return"";const o=[];return t.isp&&o.push(A("phone_isp_type."+t.isp)),t.city===t.province?o.push(t.city):o.push(`${t.province}${t.city}`),o.join(", ")}const F=h(""),{mutate:W,loading:tt}=Ft({document:Kt,appApi:!0});function et(t){F.value=t.id,W({number:t.number})}function st(t){Zt(te,{id:t.id,name:t.id,gql:Jt`
      mutation DeleteCall($id: ID!) {
        deleteCalls(ids: [$id])
      }
    `,appApi:!0,typeName:"Call"})}return(t,o)=>{const w=$t,ot=kt,nt=vt,lt=yt,at=gt,it=_t,ct=ft,ut=ht,dt=mt;return a(),d(k,null,[e("div",ne,[r(w,{current:()=>`${t.$t("page_title.calls")} (${y.value})`},null,8,["current"]),e("div",le,[l(H)?(a(),d(k,{key:0},[e("button",{type:"button",class:"btn btn-action",onClick:o[0]||(o[0]=p((...s)=>l(B)&&l(B)(...s),["stop"])),title:t.$t("delete")},[r(ot,{class:"bi"})],8,ae),e("button",{type:"button",class:"btn btn-action",onClick:o[1]||(o[1]=p((...s)=>l(M)&&l(M)(...s),["stop"])),title:t.$t("add_to_tags")},[r(nt,{class:"bi"})],8,ie),e("button",{type:"button",class:"btn btn-action",onClick:o[2]||(o[2]=p((...s)=>l(U)&&l(U)(...s),["stop"])),title:t.$t("remove_from_tags")},[r(lt,{class:"bi"})],8,ce)],64)):S("",!0),r(it,{modelValue:u.value,"onUpdate:modelValue":o[5]||(o[5]=s=>u.value=s),search:R},{filters:Et(()=>[e("div",ue,[e("label",de,n(t.$t("keywords")),1),e("div",re,[q(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>c.text=s),class:"form-control",onKeyup:jt(N,["enter"])},null,40,pe),[[zt,c.text]])])]),e("div",_e,[e("label",me,n(t.$t("tags")),1),e("div",he,[r(at,{modelValue:c.tags,"onUpdate:modelValue":o[4]||(o[4]=s=>c.tags=s),label:"name","track-by":"id",options:l(V)},null,8,["modelValue","options"])])]),e("div",fe,[e("button",{type:"button",class:"btn",onClick:p(N,["stop"])},n(t.$t("search")),9,be)])]),_:1},8,["modelValue"])])]),e("table",ge,[e("thead",null,[e("tr",null,[e("th",null,[q(e("input",{class:"form-check-input",type:"checkbox",onChange:o[6]||(o[6]=(...s)=>l(Q)&&l(Q)(...s)),"onUpdate:modelValue":o[7]||(o[7]=s=>Ot(T)?T.value=s:null)},null,544),[[j,l(T)]])]),ve,e("th",null,n(t.$t("name")),1),e("th",null,n(t.$t("phone_number")),1),e("th",null,n(t.$t("phone_geo")),1),e("th",null,n(t.$t("duration")),1),e("th",null,n(t.$t("type")),1),e("th",null,n(t.$t("tags")),1),e("th",null,n(t.$t("started_at")),1),e("th",ye,n(t.$t("actions")),1)])]),e("tbody",null,[(a(!0),d(k,null,O(i.value,s=>(a(),d("tr",{key:s.id,class:Pt({checked:s.checked}),onClick:p(m=>s.checked=!s.checked,["stop"])},[e("td",null,[q(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":m=>s.checked=m},null,8,$e),[[j,s.checked]])]),e("td",null,[r(ct,{id:s.id,raw:s},null,8,["id","raw"])]),e("td",null,n(s.name),1),e("td",null,[xt(n(s.number)+" ",1),l(tt)&&F.value===s.id?(a(),d("i",Ce)):(a(),P(ut,{key:1,class:"bi bi-btn",onClick:p(m=>et(s),["stop"])},null,8,["onClick"]))]),e("td",null,n(J(s.geo)),1),e("td",null,n(l(Ht)(s.duration)),1),e("td",Ve,n(t.$t("call_type."+s.type)),1),e("td",null,[(a(!0),d(k,null,O(s.tags,m=>(a(),d("span",Te,n(m.name),1))),256))]),e("td",{class:"nowrap",title:l(Xt)(s.startedAt)},n(l(Yt)(s.startedAt)),9,we),e("td",Se,[e("a",{href:"#",class:"v-link",onClick:p(m=>st(s),["stop"])},n(t.$t("delete")),9,qe)])],10,ke))),128))]),i.value.length?S("",!0):(a(),d("tfoot",Ae,[e("tr",null,[e("td",De,[e("div",Le,n(t.$t(l(Wt)(l(X),l(x).permissions,"READ_CALL_LOG"))),1)])])]))]),y.value>v?(a(),P(dt,{key:0,modelValue:g.value,"onUpdate:modelValue":o[8]||(o[8]=s=>g.value=s),total:y.value,limit:v},null,8,["modelValue","total"])):S("",!0)],64)}}});export{Pe as default};