import{r as O,T as A,f as y,g as S,o as u,a as l,c,t as d,j as m,h as P,u as s,i as Z,k as D,n,b as z}from"./app-c050892b.js";import E from"./App-5cbfef82.js";import{_ as F}from"./FormImage-e289e311.js";import{_ as i}from"./FormInput-2566d96f.js";import{_ as M}from"./FormPhoneInput-bc730371.js";import{_ as T}from"./FormSelect-ad20e364.js";import"./Sidebar-fb5d09b5.js";import"./Menu-cafee48c.js";import"./ProfileModal-9224dc90.js";import"./transition-205df371.js";import"./hidden-7c22a505.js";import"./use-outside-click-24df5687.js";import"./micro-task-89dcd6af.js";import"./tabs-675d133b.js";import"./use-resolve-button-type-e9e046d3.js";import"./LangToggle-9231f076.js";/* empty css                      */import"./index-6bcca514.js";import"./use-text-value-ebf16ccd.js";import"./MobileSidebar-12e2ab74.js";import"./index-aa438030.js";/* empty css              */const J={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},L={class:"md:flex justify-between hidden"},R={key:0,class:"text-xl mb-1"},q={key:1,class:"text-xl mb-1"},G={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},H={key:0,class:"ml-1 mt-1"},I={key:1,class:"ml-1 mt-1"},K={class:"sm:flex border-b py-5"},Q={class:"hidden sm:block sm:w-[40%] mb-1"},W={class:"text-sm text-gray-500 tracking-[0px]"},X={class:"sm:w-[60%] sm:flex space-x-6"},Y={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},ee={class:"sm:flex py-5"},se={class:"hidden sm:block w-[40%] mb-1"},re={class:"text-sm text-gray-500 tracking-[0px]"},oe={class:"sm:w-[60%] sm:flex space-x-6"},te={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},le={class:"py-6"},ae={type:"submit",class:"float-right flex items-center space-x-4 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},ze={__name:"Show",props:{title:String,user:Object,roles:Object},setup(B){var V,v,g,b,w,x,h,$,_,k,U;const a=B;O(null);const f=(o,r)=>{if(o){const p=JSON.parse(o);return(p==null?void 0:p[r])??null}else return null},e=A({first_name:(V=a.user)==null?void 0:V.first_name,last_name:(v=a.user)==null?void 0:v.last_name,email:(g=a.user)==null?void 0:g.email,phone:(b=a.user)==null?void 0:b.phone,role:(x=(w=a.user)==null?void 0:w.role)==null?void 0:x.uuid,password:null,password_confirmation:null,avatar:null,street:f((h=a.user)==null?void 0:h.address,"street"),city:f(($=a.user)==null?void 0:$.address,"city"),state:f((_=a.user)==null?void 0:_.address,"state"),zip:f((k=a.user)==null?void 0:k.address,"zip"),country:f((U=a.user)==null?void 0:U.address,"country")}),j=()=>a.roles.map(o=>({value:o.uuid,label:o.name})),N=async()=>{const o=a.user?window.location.pathname:"/admin/team/users";e[a.user?"put":"post"](o,{preserveScroll:!0})};return(o,r)=>(u(),y(E,null,{default:S(()=>{var p,C;return[l("div",J,[l("div",L,[l("div",null,[a.user===null?(u(),c("h1",R,d(o.$t("Create user")),1)):(u(),c("h1",q,d(o.$t("Update user")),1)),l("p",G,[r[14]||(r[14]=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[l("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),a.user===null?(u(),c("span",H,d(o.$t("Create administrative user and assign role")),1)):(u(),c("span",I,d(o.$t("Update administrative user and assign role")),1))])]),l("div",null,[m(s(Z),{href:"/admin/team/users",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:S(()=>[P(d(o.$t("Back")),1)]),_:1})])]),l("form",{onSubmit:r[13]||(r[13]=D(t=>N(),["prevent"])),class:"bg-white md:border py-5 px-5 rounded-[0.5rem]"},[l("div",K,[l("div",Q,[l("h1",W,d(o.$t("Personally identifiable information")),1)]),l("div",X,[l("div",Y,[m(F,{modelValue:s(e).avatar,"onUpdate:modelValue":r[0]||(r[0]=t=>s(e).avatar=t),name:"Avatar",error:s(e).errors.avatar,label:o.$t("Upload image"),imageUrl:(p=a.user)!=null&&p.avatar?"/media/"+((C=a.user)==null?void 0:C.avatar):null,class:n("sm:col-span-6")},null,8,["modelValue","error","label","imageUrl"]),m(i,{modelValue:s(e).first_name,"onUpdate:modelValue":r[1]||(r[1]=t=>s(e).first_name=t),name:o.$t("First name"),error:s(e).errors.first_name,type:"text",class:n("sm:col-span-3")},null,8,["modelValue","name","error"]),m(i,{modelValue:s(e).last_name,"onUpdate:modelValue":r[2]||(r[2]=t=>s(e).last_name=t),name:o.$t("Last name"),error:s(e).errors.last_name,type:"text",class:n("sm:col-span-3")},null,8,["modelValue","name","error"]),m(i,{modelValue:s(e).email,"onUpdate:modelValue":r[3]||(r[3]=t=>s(e).email=t),name:o.$t("Email"),error:s(e).errors.email,type:"text",class:n("sm:col-span-3")},null,8,["modelValue","name","error"]),m(M,{modelValue:s(e).phone,"onUpdate:modelValue":r[4]||(r[4]=t=>s(e).phone=t),name:o.$t("Phone"),error:s(e).errors.phone,type:"text",class:n("sm:col-span-3")},null,8,["modelValue","name","error"]),m(T,{modelValue:s(e).role,"onUpdate:modelValue":r[5]||(r[5]=t=>s(e).role=t),name:o.$t("Role"),error:s(e).errors.role,options:j(),type:"text",class:n("sm:col-span-6")},null,8,["modelValue","name","error","options"]),a.user?z("",!0):(u(),y(i,{key:0,modelValue:s(e).password,"onUpdate:modelValue":r[6]||(r[6]=t=>s(e).password=t),name:o.$t("Password"),error:s(e).errors.password,type:"password",class:n("sm:col-span-3")},null,8,["modelValue","name","error"])),a.user?z("",!0):(u(),y(i,{key:1,modelValue:s(e).password_confirmation,"onUpdate:modelValue":r[7]||(r[7]=t=>s(e).password_confirmation=t),name:o.$t("Confirm password"),error:s(e).errors.password_confirmation,type:"password",class:n("sm:col-span-3")},null,8,["modelValue","name","error"]))])])]),l("div",ee,[l("div",se,[l("h1",re,d(o.$t("Address details")),1)]),l("div",oe,[l("div",te,[m(i,{modelValue:s(e).street,"onUpdate:modelValue":r[8]||(r[8]=t=>s(e).street=t),name:o.$t("Street"),error:s(e).errors.street,type:"text",class:n("sm:col-span-6")},null,8,["modelValue","name","error"]),m(i,{modelValue:s(e).city,"onUpdate:modelValue":r[9]||(r[9]=t=>s(e).city=t),name:o.$t("City"),error:s(e).errors.city,type:"text",class:n("sm:col-span-3")},null,8,["modelValue","name","error"]),m(i,{modelValue:s(e).state,"onUpdate:modelValue":r[10]||(r[10]=t=>s(e).state=t),name:o.$t("State"),error:s(e).errors.state,type:"text",class:n("sm:col-span-3")},null,8,["modelValue","name","error"]),m(i,{modelValue:s(e).zip,"onUpdate:modelValue":r[11]||(r[11]=t=>s(e).zip=t),name:o.$t("Zip code"),error:s(e).errors.zip,type:"text",class:n("sm:col-span-3")},null,8,["modelValue","name","error"]),m(i,{modelValue:s(e).country,"onUpdate:modelValue":r[12]||(r[12]=t=>s(e).country=t),name:o.$t("Country"),error:s(e).errors.country,type:"text",class:n("sm:col-span-3")},null,8,["modelValue","name","error"])])])]),l("div",le,[l("button",ae,d(o.$t("Save")),1)])],32)])]}),_:1}))}};export{ze as default};
