import{T as A,r as B,f as D,g as N,o as p,a as e,c as _,t as n,j as r,h as E,u as o,i as J,k as z,n as m,e as L,F as Y}from"./app-c050892b.js";import q from"./App-5cbfef82.js";import{_ as c}from"./FormInput-2566d96f.js";import{_ as j}from"./FormSelect-ad20e364.js";import{_ as O}from"./FormToggleSwitch-81ca429d.js";import{t as g}from"./index-6bcca514.js";import"./Sidebar-fb5d09b5.js";import"./Menu-cafee48c.js";import"./ProfileModal-9224dc90.js";import"./FormPhoneInput-bc730371.js";/* empty css                      */import"./transition-205df371.js";import"./hidden-7c22a505.js";import"./use-outside-click-24df5687.js";import"./micro-task-89dcd6af.js";import"./tabs-675d133b.js";import"./use-resolve-button-type-e9e046d3.js";import"./LangToggle-9231f076.js";import"./use-text-value-ebf16ccd.js";import"./MobileSidebar-12e2ab74.js";import"./index-aa438030.js";/* empty css              */const G={class:"p-8 rounded-[5px] text-[#000] overflow-y-scroll"},H={class:"flex justify-between"},I={key:0,class:"text-xl mb-1"},K={key:1,class:"text-xl mb-1"},Q={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},R={key:0,class:"ml-1 mt-1"},W={key:1,class:"ml-1 mt-1"},X={class:"sm:flex border-b py-5"},ee={class:"hidden sm:block sm:w-[40%] mb-1"},se={class:"text-sm text-gray-500 tracking-[0px]"},te={class:"sm:w-[60%] sm:flex space-x-6"},ae={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},oe={class:"sm:flex border-b py-5"},le={class:"hidden sm:block sm:w-[40%] mb-1"},ie={class:"text-sm text-gray-500 tracking-[0px]"},ne={class:"sm:w-[60%] sm:flex space-x-6"},re={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},me={class:"sm:flex border-b py-5"},de={class:"hidden sm:block w-[40%] mb-1"},pe={class:"text-sm text-gray-500 tracking-[0px]"},ce={class:"sm:w-[60%] sm:flex space-x-6"},ue={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},_e={class:"sm:flex py-5 border-b"},ge={class:"hidden sm:block w-[40%] mb-1"},he={class:"text-sm text-gray-500 tracking-[0px]"},ve={class:"sm:w-[60%]"},fe={class:"bg-orange-100 p-2 rounded-md shadow-sm sm:w-[80%] mb-4 flex items-center gap-x-1"},be={class:"text-sm leading-6"},xe={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},we={class:"sm:flex py-5 border-b"},ye={class:"hidden sm:block w-[40%] mb-1"},Ve={class:"text-sm text-gray-500 tracking-[0px]"},$e={class:"text-xs text-slate-700"},ke={class:"sm:w-[60%]"},Ue={class:"sm:w-[80%] grid gap-x-6 gap-y-4 sm:grid-cols-6"},Se={class:"sm:col-span-3"},Ce={class:"text-sm mb-2"},Be={class:"py-5 sm:flex"},Ne={class:"w-[40%]"},je={class:"text-sm text-gray-500 tracking-[0px]"},Oe={class:"text-xs text-slate-700 flex items-center"},Me={class:"sm:w-[20%]"},Fe={class:"py-6"},Pe={type:"submit",class:"float-right flex items-center space-x-4 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},os={__name:"Show",props:{title:String,plan:Object,addons:Object},setup(h){var v,f,b,x,w,y,V,$,k,U,S,C;const i=h,d=(t,l)=>{if(t){const s=JSON.parse(t);return(s==null?void 0:s[l])??null}else return null},M=(t,l)=>{if(t){const s=JSON.parse(t);return s!=null&&s[l]?s[l]:i.addons.reduce((u,T)=>(u[T]=!1,u),{})}return i.addons.reduce((s,u)=>(s[u]=!1,s),{})},a=A({name:(v=i.plan)==null?void 0:v.name,price:(f=i.plan)==null?void 0:f.price,period:(b=i.plan)==null?void 0:b.period,status:(x=i.plan)==null?void 0:x.status,campaign_limit:d((w=i.plan)==null?void 0:w.metadata,"campaign_limit")??"-1",message_limit:d((y=i.plan)==null?void 0:y.metadata,"message_limit")??"-1",contacts_limit:d((V=i.plan)==null?void 0:V.metadata,"contacts_limit")??"-1",canned_replies_limit:d(($=i.plan)==null?void 0:$.metadata,"canned_replies_limit")??"-1",team_limit:d((k=i.plan)==null?void 0:k.metadata,"team_limit")??"-1",receive_messages_after_expiration:d((U=i.plan)==null?void 0:U.metadata,"receive_messages_after_expiration")==1||d((S=i.plan)==null?void 0:S.metadata,"receive_messages_after_expiration")==null,addons:M((C=i.plan)==null?void 0:C.metadata,"addons")}),F=B([{value:"active",label:g("active")},{value:"inactive",label:g("inactive")}]),P=B([{value:"monthly",label:g("Monthly")},{value:"yearly",label:g("Yearly")}]),Z=async()=>{const t=i.plan?window.location.pathname:"/admin/plans";a[i.plan?"put":"post"](t,{preserveScroll:!0})};return(t,l)=>(p(),D(q,null,{default:N(()=>[e("div",G,[e("div",H,[e("div",null,[i.plan===null?(p(),_("h1",I,n(t.$t("Create plan")),1)):(p(),_("h1",K,n(t.$t("Update plan")),1)),e("p",Q,[l[11]||(l[11]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),i.plan===null?(p(),_("span",R,n(t.$t("Create plan")),1)):(p(),_("span",W,n(t.$t("Update plan")),1))])]),e("div",null,[r(o(J),{href:"/admin/plans",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:N(()=>[E(n(t.$t("Back")),1)]),_:1})])]),e("form",{onSubmit:l[10]||(l[10]=z(s=>Z(),["prevent"])),class:"bg-white border py-5 px-5 rounded-[0.5rem]"},[e("div",X,[e("div",ee,[e("h1",se,n(t.$t("Name")),1)]),e("div",te,[e("div",ae,[r(c,{modelValue:o(a).name,"onUpdate:modelValue":l[0]||(l[0]=s=>o(a).name=s),name:t.$t("Name"),error:o(a).errors.name,type:"text",class:m("sm:col-span-6")},null,8,["modelValue","name","error"])])])]),e("div",oe,[e("div",le,[e("h1",ie,n(t.$t("Status")),1)]),e("div",ne,[e("div",re,[r(j,{modelValue:o(a).status,"onUpdate:modelValue":l[1]||(l[1]=s=>o(a).status=s),options:F.value,error:o(a).errors.status,name:t.$t("Status"),class:m("sm:col-span-6"),placeholder:t.$t("Select status")},null,8,["modelValue","options","error","name","placeholder"])])])]),e("div",me,[e("div",de,[e("h1",pe,n(t.$t("Pricing details")),1)]),e("div",ce,[e("div",ue,[r(c,{modelValue:o(a).price,"onUpdate:modelValue":l[2]||(l[2]=s=>o(a).price=s),name:t.$t("Price"),error:o(a).errors.price,type:"number",class:m("sm:col-span-3")},null,8,["modelValue","name","error"]),r(j,{modelValue:o(a).period,"onUpdate:modelValue":l[3]||(l[3]=s=>o(a).period=s),options:P.value,error:o(a).errors.period,name:t.$t("Period"),class:m("sm:col-span-3"),placeholder:t.$t("Select period")},null,8,["modelValue","options","error","name","placeholder"])])])]),e("div",_e,[e("div",ge,[e("h1",he,n(t.$t("Plan limit")),1)]),e("div",ve,[e("div",fe,[l[12]||(l[12]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("p",be,n(t.$t("For unlimited usage, set -1 as the value")),1)]),e("div",xe,[r(c,{modelValue:o(a).campaign_limit,"onUpdate:modelValue":l[4]||(l[4]=s=>o(a).campaign_limit=s),name:t.$t("Campaign limit"),error:o(a).errors.campaign_limit,type:"number",class:m("sm:col-span-3")},null,8,["modelValue","name","error"]),r(c,{modelValue:o(a).message_limit,"onUpdate:modelValue":l[5]||(l[5]=s=>o(a).message_limit=s),name:t.$t("Message limit"),error:o(a).errors.message_limit,type:"number",class:m("sm:col-span-3")},null,8,["modelValue","name","error"]),r(c,{modelValue:o(a).contacts_limit,"onUpdate:modelValue":l[6]||(l[6]=s=>o(a).contacts_limit=s),name:t.$t("Contacts limit"),error:o(a).errors.contacts_limit,type:"number",class:m("sm:col-span-3")},null,8,["modelValue","name","error"]),r(c,{modelValue:o(a).canned_replies_limit,"onUpdate:modelValue":l[7]||(l[7]=s=>o(a).canned_replies_limit=s),name:t.$t("Canned replies limit"),error:o(a).errors.canned_replies_limit,type:"number",class:m("sm:col-span-3")},null,8,["modelValue","name","error"]),r(c,{modelValue:o(a).team_limit,"onUpdate:modelValue":l[8]||(l[8]=s=>o(a).team_limit=s),name:t.$t("User limit"),error:o(a).errors.team_limit,type:"number",class:m("sm:col-span-3")},null,8,["modelValue","name","error"])])])]),e("div",we,[e("div",ye,[e("h1",Ve,n(t.$t("Addons access")),1),e("p",$e,n(t.$t("Select addons that are available in this plan")),1)]),e("div",ke,[e("div",Ue,[(p(!0),_(Y,null,L(h.addons,s=>(p(),_("div",Se,[e("div",Ce,n(s),1),r(O,{modelValue:o(a).addons[s],"onUpdate:modelValue":u=>o(a).addons[s]=u},null,8,["modelValue","onUpdate:modelValue"])]))),256))])])]),e("div",Be,[e("div",Ne,[e("h1",je,n(t.$t("Enable message reception after plan expiration")),1),e("div",Oe,[e("span",null,n(t.$t("Toggle this setting to allow or block inbound messages when a user's subscription plan has ended.")),1)])]),e("div",Me,[r(O,{modelValue:o(a).receive_messages_after_expiration,"onUpdate:modelValue":l[9]||(l[9]=s=>o(a).receive_messages_after_expiration=s),class:"float-left"},null,8,["modelValue"])])]),e("div",Fe,[e("button",Pe,n(t.$t("Save")),1)])],32)])]),_:1}))}};export{os as default};
