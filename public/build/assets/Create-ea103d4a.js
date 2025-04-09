import{r as d,T as h,G as w,q as x,f as y,g as p,o as _,a as o,t as a,j as i,h as $,u as l,i as V,k as j,n}from"./app-63c352f8.js";import k from"./App-ab3770eb.js";import{_ as C}from"./FormInput-a9577592.js";import{_ as B}from"./FormSelect-51609345.js";import{_ as U}from"./FormSelectCombo-c89301fe.js";import{_ as M}from"./FormTextArea-c069c065.js";import"./Sidebar-7ba13270.js";import"./Menu-a985a654.js";import"./ProfileModal-7fdd08ae.js";import"./FormPhoneInput-ba9f060e.js";/* empty css                      */import"./transition-513441a0.js";import"./hidden-1ba5fb48.js";import"./use-text-value-34fc6a1a.js";import"./micro-task-89dcd6af.js";import"./tabs-14de339e.js";import"./LangToggle-130b0b55.js";import"./index-245abe8c.js";import"./MobileSidebar-b0e564de.js";import"./index-445d2961.js";/* empty css              */import"./use-tree-walker-396017f0.js";const S={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},D={class:"md:flex justify-between hidden"},H={class:"text-xl mb-1"},L={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},N={class:"ml-1 mt-1"},Z={class:"mt-5 mb-5 grid md:grid-cols-2 gap-x-8 gap-y-8"},A={class:"flex justify-end py-2"},E={type:"submit",class:"self-end flex items-center space-x-4 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},ae={__name:"Create",props:["title","categories"],setup(c){const f=c,m=d(null),r=h({subject:null,category:null,message:null,user:null}),u=d([]);d([]);function g(t,e){fetch("/admin/users?search="+t,{headers:{Accept:"application/json"}}).then(s=>s.json()).then(s=>{e(s.rows)}).catch(s=>{console.error("Error fetching users:",s)})}const b=t=>t.map(e=>({value:e.id,label:e.name})),v=()=>{r.post("/admin/support")};return w(m,t=>{r.user=t==null?void 0:t.value}),x(()=>{u.value=b(f.categories)}),(t,e)=>(_(),y(k,null,{default:p(()=>[o("div",S,[o("div",D,[o("div",null,[o("h1",H,a(t.$t("Create ticket")),1),o("p",L,[e[5]||(e[5]=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),o("span",N,a(t.$t("Have an issue? Describe it in detail below")),1)])]),o("div",null,[i(l(V),{href:"/admin/support",class:"flex items-center space-x-4 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>[e[6]||(e[6]=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},[o("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.841 5.28a.75.75 0 0 0-1.06-1.06L1.53 7.47L1 8l.53.53l3.25 3.25a.75.75 0 0 0 1.061-1.06l-1.97-1.97H14.25a.75.75 0 0 0 0-1.5H3.871l1.97-1.97Z","clip-rule":"evenodd"})],-1)),$(" "+a(t.$t("Back")),1)]),_:1})])]),o("form",{onSubmit:e[4]||(e[4]=j(s=>v(),["prevent"])),class:"bg-white py-5 px-5 rounded-[0.5rem] md:w-2/3"},[o("div",Z,[i(C,{modelValue:l(r).subject,"onUpdate:modelValue":e[0]||(e[0]=s=>l(r).subject=s),name:t.$t("Subject"),type:"text",error:l(r).errors.subject,class:n("col-span-2"),labelClass:"mb-0"},null,8,["modelValue","name","error"]),i(B,{modelValue:l(r).category,"onUpdate:modelValue":e[1]||(e[1]=s=>l(r).category=s),name:t.$t("Category"),options:u.value,error:l(r).errors.category,class:n("col-span-2 md:col-span-1"),placeholder:"Select Category"},null,8,["modelValue","name","options","error"]),i(U,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=s=>m.value=s),name:t.$t("User"),loadOptions:g,error:l(r).errors.user,class:n("col-span-2 md:col-span-1"),placeholder:"Enter user email"},null,8,["modelValue","name","error"]),i(M,{modelValue:l(r).message,"onUpdate:modelValue":e[3]||(e[3]=s=>l(r).message=s),name:t.$t("Description"),type:"text",showLabel:!0,error:l(r).errors.message,textAreaRows:5,class:n("col-span-2 mb-10")},null,8,["modelValue","name","error"])]),o("div",A,[o("button",E,a(t.$t("Create ticket")),1)])],32)])]),_:1}))}};export{ae as default};
