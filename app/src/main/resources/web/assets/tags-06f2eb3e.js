import{d as k,u as v,bL as A,V,bM as U,J as _,t as y,a5 as $,o as I,R as M,v as b,e as F,g as n,O as q,K as D,b as T,f as h,a6 as S,bN as B,r as G,i as N,bm as O,Y as C}from"./index-9f7eccb0.js";import{_ as Q}from"./VModal.vuevuetypescriptsetuptruelang-e552d784.js";import{_ as w}from"./Multiselect-e19e17b7.js";import{u as L,a as R}from"./vee-validate.esm-d2a0b94e.js";import{c as z,k as E}from"./search-cd9707cd.js";const J=["disabled"],K=k({__name:"AddToTagsModal",props:{tagType:{type:String,required:!0},tags:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(i){const o=i,{handleSubmit:l}=L(),{t:r}=v(),{value:t,errorMessage:e}=R("selectedTags",A().test("required",()=>"valid.required",a=>a.length),{initialValue:[]}),{mutate:u,loading:c,onDone:g}=V({document:U,appApi:!0});g(()=>{o.tagType==="AUDIO"&&_.emit("refetch_app"),_.emit("refetch_by_tag_type",o.tagType),y(r("saved")),$()});const d=l(()=>{u({tagType:o.tagType,tagIds:t.value.map(a=>a.id),items:o.items})});return(a,s)=>{const m=w,f=Q;return I(),M(f,{title:a.$t("add_to_tags")},{body:b(()=>[F(m,{modelValue:n(t),"onUpdate:modelValue":s[0]||(s[0]=p=>q(t)?t.value=p:null),label:"name","track-by":"id",options:i.tags},null,8,["modelValue","options"]),D(T("div",{class:"invalid-feedback"},h(n(e)?a.$t(n(e)):""),513),[[S,n(e)]])]),action:b(()=>[T("button",{type:"button",disabled:n(c),class:"btn",onClick:s[1]||(s[1]=(...p)=>n(d)&&n(d)(...p))},h(a.$t("save")),9,J)]),_:1},8,["title"])}}}),Y=["disabled"],j=k({__name:"RemoveFromTagsModal",props:{tagType:{type:String,required:!0},tags:{type:Array,default:()=>[]},ids:{type:Array,default:()=>[]}},setup(i){const o=i,{handleSubmit:l}=L(),{t:r}=v(),{value:t,errorMessage:e}=R("selectedTags",A().test("required",()=>"valid.required",a=>a.length),{initialValue:[]}),{mutate:u,loading:c,onDone:g}=V({document:B,appApi:!0});g(()=>{o.tagType==="AUDIO"&&_.emit("refetch_app"),_.emit("refetch_by_tag_type",o.tagType),y(r("saved")),$()});const d=l(()=>{u({tagIds:t.value.map(a=>a.id),keys:o.ids})});return(a,s)=>{const m=w,f=Q;return I(),M(f,{title:a.$t("remove_from_tags")},{body:b(()=>[F(m,{modelValue:n(t),"onUpdate:modelValue":s[0]||(s[0]=p=>q(t)?t.value=p:null),label:"name","track-by":"id",options:i.tags},null,8,["modelValue","options"]),D(T("div",{class:"invalid-feedback"},h(n(e)?a.$t(n(e)):""),513),[[S,n(e)]])]),action:b(()=>[T("button",{type:"button",disabled:n(c),class:"btn",onClick:s[1]||(s[1]=(...p)=>n(d)&&n(d)(...p))},h(a.$t("save")),9,Y)]),_:1},8,["title"])}}}),Z=(i,o,l)=>{const{t:r}=v();return{addToTags:()=>{const t=o.value.filter(e=>e.checked);if(t.length===0){y(r("select_first"),"error");return}C(K,{tagType:i,tags:l.value,items:t.map(e=>({key:e.id,title:e.title,size:e.size}))})}}},ee=(i,o,l)=>{const{t:r}=v();return{removeFromTags:()=>{const t=o.value.filter(e=>e.checked);if(t.length===0){y(r("select_first"),"error");return}C(j,{tagType:i,tags:l.value,ids:t.map(e=>e.id)})}}},te=(i,o,l,r)=>{const t=G([]),{t:e}=v();return N({handle:async(u,c)=>{if(c)y(e(c),"error");else if(u){t.value=u.tags;const g=z(o.value);l.tags=[];const d=[];g.forEach(s=>{if(s.name==="text")l.text=s.value;else if(s.name==="tag"){const m=u.tags.find(f=>E(f.name)===s.value);m?(l.tags.push(m),d.push(m.id)):d.push("invalid")}});const a=[...g].filter(s=>s.name!=="tag");d.forEach(s=>{a.push({name:"tag_id",op:"",value:s})}),r(a)}},document:O,variables:{type:i},appApi:!0}),{tags:t}};export{Z as a,ee as b,te as u};