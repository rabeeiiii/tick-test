import{r as g,T as _,f as h,g as f,o as d,a as t,t as n,j as l,k as c,u as s,n as u,c as b}from"./app-c050892b.js";import w from"./Layout-3bf76d33.js";import x from"./FlowsTable-11cc9b05.js";import{_ as y}from"./FormInput-2566d96f.js";import{_ as $}from"./FormTextArea-ff1d78d7.js";import{_ as C}from"./Modal-7bb604e7.js";import{P as V}from"./Pagination-63b638cd.js";import"./App-170faeae.js";import"./Sidebar-a8d58c80.js";import"./Menu-ad2c6fd2.js";import"./ProfileModal-9224dc90.js";import"./FormPhoneInput-bc730371.js";/* empty css                      */import"./FormSelect-ad20e364.js";import"./index-6bcca514.js";import"./hidden-7c22a505.js";import"./use-text-value-ebf16ccd.js";import"./use-outside-click-24df5687.js";import"./use-resolve-button-type-e9e046d3.js";import"./transition-205df371.js";import"./micro-task-89dcd6af.js";import"./tabs-675d133b.js";import"./LangToggle-9231f076.js";import"./OrganizationModal-f0a32070.js";import"./index-aa438030.js";import"./MobileSidebar-33703517.js";/* empty css              */import"./pusher-9742745c.js";import"./debounce-a2c3c022.js";import"./_baseGetTag-4cbd9caa.js";import"./AlertModal-64456e2e.js";import"./useAlertModal-73045e55.js";import"./TableHeaderRowItem-cc06c3e8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TableBodyRowItem-2063894c.js";import"./Dropdown-67734127.js";import"./use-tree-walker-228f32d6.js";import"./DropdownItem-5974481b.js";const k={class:"md:h-[90vh]"},A={class:"flex justify-center items-center"},S={class:"md:w-[60em]"},B={class:"bg-white border border-slate-200 rounded-lg py-2 text-sm pb-4 px-4 mb-20"},M={class:"w-full py-2 mb-2 mt-2"},N={class:"flex w-full mb-4"},j={class:"text-md"},O={class:"text-[16px]"},Z={class:"flex items-center mt-1 text-slate-500"},D={class:"ml-auto"},F={class:"w-5/5"},P={class:"px-4 pb-4"},T={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},U={class:"mt-4 flex"},z=["disabled"],E={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},I={key:1},At={__name:"Index",props:["rows","filters","aimodule","fbmodule"],setup(a){const m=a,p=g(!1),e=_({name:null,description:null}),v=()=>{e.post("/automation/flows",{preserveScroll:!0,onSuccess:()=>{router.visit("/automation/ai",{preserveState:!1})}})};return(i,o)=>(d(),h(w,{aimodule:a.aimodule,fbmodule:a.fbmodule},{default:f(()=>[t("div",k,[t("div",A,[t("div",S,[t("div",B,[t("div",M,[t("div",N,[t("div",j,[t("h4",O,n(i.$t("My Automations")),1),t("span",Z,n(i.$t("Respond automatically to messages based on your own criteria")),1)]),t("div",D,[t("button",{onClick:o[0]||(o[0]=r=>{p.value=!0}),class:"float-right rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},n(i.$t("New Automation")),1)])]),t("div",F,[l(x,{rows:m.rows,filters:m.filters},null,8,["rows","filters"]),t("div",P,[l(V,{class:"mt-3",pagination:m.rows.meta},null,8,["pagination"])])])])])])])]),l(C,{label:i.$t("Create Automation"),isOpen:p.value},{default:f(()=>[t("div",T,[t("form",{onSubmit:o[4]||(o[4]=c(r=>v(),["prevent"])),class:"grid gap-x-6 gap-y-4 sm:grid-cols-6"},[l(y,{modelValue:s(e).name,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).name=r),error:s(e).errors.name,name:i.$t("Name"),type:"text",class:u("sm:col-span-6")},null,8,["modelValue","error","name"]),l($,{modelValue:s(e).description,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).description=r),error:s(e).errors.description,name:i.$t("Description"),class:u("sm:col-span-6")},null,8,["modelValue","error","name"]),t("div",U,[t("button",{type:"button",onClick:o[3]||(o[3]=c(r=>p.value=!1,["self"])),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},n(i.$t("Cancel")),1),t("button",{class:u(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":s(e).processing}]),disabled:s(e).processing},[s(e).processing?(d(),b("svg",E,o[5]||(o[5]=[t("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),t("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[t("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(d(),b("span",I,n(i.$t("Save")),1))],10,z)])],32)])]),_:1},8,["label","isOpen"])]),_:1},8,["aimodule","fbmodule"]))}};export{At as default};
