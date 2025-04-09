import{T as j,r as $,O as E,o as u,c as m,a as e,w as Me,v as Ze,u as t,b as _,d as Ae,j as d,g,h as V,t as i,F as P,e as Te,f as $e,n as v,l as Se,m as Be,G as Ce,k as U,K as Fe}from"./app-c050892b.js";import Ie from"./Layout-3bf76d33.js";import{t as ye}from"./index-6bcca514.js";import{d as De}from"./debounce-a2c3c022.js";import{_ as Ne}from"./AlertModal-64456e2e.js";import{u as Ue}from"./useAlertModal-73045e55.js";/* empty css              */import{a as je,_ as D,T as Oe}from"./TableHeaderRowItem-cc06c3e8.js";import{a as ze,_ as N,T as Le}from"./TableBodyRowItem-2063894c.js";import{_ as Ee}from"./Dropdown-67734127.js";import{_ as H}from"./FormInput-2566d96f.js";import{_ as Ve}from"./Modal-7bb604e7.js";import{_ as xe}from"./FormSelect-ad20e364.js";import{_ as Pe}from"./FormTextArea-ff1d78d7.js";import{_ as ke}from"./FormToggleSwitch-81ca429d.js";import{P as He}from"./Pagination-63b638cd.js";import"./App-170faeae.js";import"./Sidebar-a8d58c80.js";import"./Menu-ad2c6fd2.js";import"./ProfileModal-9224dc90.js";import"./FormPhoneInput-bc730371.js";/* empty css                      */import"./transition-205df371.js";import"./hidden-7c22a505.js";import"./use-outside-click-24df5687.js";import"./micro-task-89dcd6af.js";import"./tabs-675d133b.js";import"./use-resolve-button-type-e9e046d3.js";import"./LangToggle-9231f076.js";import"./OrganizationModal-f0a32070.js";import"./use-text-value-ebf16ccd.js";import"./index-aa438030.js";import"./MobileSidebar-33703517.js";import"./pusher-9742745c.js";import"./_baseGetTag-4cbd9caa.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-tree-walker-228f32d6.js";const Ke={class:"bg-slate-100 md:bg-slate-50 flex items-center border border-primary md:border-none md:shadow-sm h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-sm"},Re=["placeholder"],Xe={key:1,class:"pr-2"},qe={class:"bg-slate-100 md:bg-slate-50 rounded-[0.5rem]"},We={class:"w-full"},Ge=["onClick"],Je={__name:"DocumentTable",props:{rows:{type:Object,required:!0},filters:{type:Object}},emits:["delete"],setup(C,{emit:A}){const M=C,{isOpenAlert:c,openAlert:T,confirmAlert:y}=Ue(),x=j({test:null}),k=f=>{x.delete("/automation/upload/document/"+f)},r=f=>f===M.rows.data.length-1,l=$({search:M.filters.search}),Z=$(!1),F=()=>{l.value.search=null,B()},S=De(()=>{Z.value=!0,B()},1e3),B=()=>{E.visit("/automation/ai",{method:"get",data:l.value})},I=f=>f?f.charAt(0).toUpperCase()+f.slice(1):"";return(f,p)=>(u(),m(P,null,[e("div",Ke,[p[6]||(p[6]=e("span",{class:"pl-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1)),Me(e("input",{onInput:p[0]||(p[0]=(...o)=>t(S)&&t(S)(...o)),"onUpdate:modelValue":p[1]||(p[1]=o=>l.value.search=o),type:"text",class:"outline-none px-4 w-full bg-slate-100 md:bg-slate-50",placeholder:f.$t("Search by title")},null,40,Re),[[Ze,l.value.search]]),Z.value===!1&&l.value.search?(u(),m("button",{key:0,onClick:F,type:"button",class:"pr-2"},p[4]||(p[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1)]))):_("",!0),Z.value?(u(),m("span",Xe,p[5]||(p[5]=[Ae('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1)]))):_("",!0)]),e("div",qe,[e("table",We,[d(Oe,null,{default:g(()=>[d(je,null,{default:g(()=>[d(D,{position:"first"},{default:g(()=>[V(i(f.$t("Title")),1)]),_:1}),d(D,null,{default:g(()=>[V(i(f.$t("Source")),1)]),_:1}),d(D,null,{default:g(()=>[V(i(f.$t("Status")),1)]),_:1}),d(D,null,{default:g(()=>[V(i(f.$t("Last updated")),1)]),_:1}),d(D,{position:"last"})]),_:1})]),_:1}),d(Le,null,{default:g(()=>[(u(!0),m(P,null,Te(C.rows.data,(o,a)=>(u(),$e(ze,{key:a,class:v(r(a)?"":"border-b")},{default:g(()=>[d(N,{position:"first",class:"capitalize"},{default:g(()=>[V(i(o.title),1)]),_:2},1024),d(N,{class:"hidden sm:table-cell"},{default:g(()=>[V(i(o.source),1)]),_:2},1024),d(N,{class:"hidden sm:table-cell"},{default:g(()=>[V(i(f.$t(I(o.status))),1)]),_:2},1024),d(N,{class:"hidden sm:table-cell"},{default:g(()=>[V(i(o.updated_at),1)]),_:2},1024),d(N,{position:"last"},{default:g(()=>[d(Ee,{align:"right",class:"mt-2"},{default:g(()=>[e("button",{onClick:h=>t(T)(o.uuid),class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},p[7]||(p[7]=[e("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"})])],-1)]),8,Ge)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})])]),d(Ne,{modelValue:t(c),"onUpdate:modelValue":p[2]||(p[2]=o=>Se(c)?c.value=o:null),onConfirm:p[3]||(p[3]=()=>t(y)(k)),label:f.$t("Delete row"),description:f.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},Qe={class:"block text-sm leading-6 text-gray-900 mt-4 mb-1"},Ye={class:"max-w-md w-full gap-y-8"},et={class:"space-y-6"},tt={for:"file-upload",class:"text-center cursor-pointer"},st={class:"flex text-sm text-gray-600"},ot={class:"relative bg-white rounded-md"},lt={class:"pl-1"},at={class:"text-xs text-gray-500"},it={class:"text-xs text-gray-500"},rt={class:"rounded-md p-1 bg-slate-50 text-center text-sm flex items-center gap-x-1"},nt={key:0,class:"form-error text-[#b91c1c] text-xs"},dt={class:"mt-5"},ut={class:"flex justify-center mt-2 w-full"},ct={key:0,class:"w-full inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"},mt={__name:"DocumentUploadModal",props:["type","modelValue"],emits:["update:modelValue"],setup(C,{emit:A}){const M=C,c=A;Be(()=>Fe().props.flash.status);const T=ye("Upload Document"),y=$(M.modelValue),x=$(null),k=$(x.value),r=$(null),l=j({title:null,file:null});Ce(()=>M.modelValue,o=>{y.value=o});const Z=o=>{o.preventDefault();const a=o.target.files[0];S(a)},F=o=>{o.preventDefault();const a=o.dataTransfer.files[0];S(a)};function S(o){if(!["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/plain"].includes(o.type)){alert(ye("please select a PDF, Word, or TXT file"));return}x.value=o.name,k.value=B(x.value,28),l.file=o}const B=(o,a)=>{if(o.length<=a)return o;const h=Math.floor(a/2),O=o.slice(0,h),z=o.slice(-h);return`${O}...${z}`};function I(){l.file=null}function f(){const o=new FormData;o.append("title",l.title),o.append("file",l.file),l.post("/automation/upload/document",{preserveScroll:!0,onProgress:a=>{r.value="pending"},onSuccess:()=>{l.reset(),r.value="complete",p()},onError:a=>{r.value=null}})}function p(){y.value=!1,c("update:modelValue",!1),setTimeout(()=>{r.value=null,l.reset(),l.clearErrors()},500)}return(o,a)=>(u(),$e(Ve,{label:t(T),isOpen:y.value,closeBtn:!0,onClose:a[5]||(a[5]=h=>p())},{default:g(()=>[d(H,{modelValue:t(l).title,"onUpdate:modelValue":a[0]||(a[0]=h=>t(l).title=h),error:t(l).errors.title,name:"Title",type:"text",class:v("mt-4")},null,8,["modelValue","error"]),e("div",Qe,i(o.$t("Document (PDF, word or TXT file)")),1),e("div",Ye,[e("div",et,[t(l).file==null?(u(),m("div",{key:0,onDragover:a[2]||(a[2]=U(()=>{},["prevent"])),onDrop:F,class:v(["flex justify-center px-6 pt-5 pb-6 shadow-sm outline-none ring-1 ring-inset rounded-md",t(l).errors.file?"ring-[#b91c1c]":"ring-gray-300"])},[e("input",{type:"file",class:"sr-only",accept:".pdf,.txt,.doc,.docx",ref:"fileInput",id:"file-upload",onChange:a[1]||(a[1]=h=>Z(h))},null,544),e("label",tt,[e("div",null,[a[7]||(a[7]=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("g",{fill:"none"},[e("path",{fill:"currentColor",d:"m15.393 4.054l-.502.557l.502-.557Zm3.959 3.563l-.502.557l.502-.557Zm2.302 2.537l-.685.305l.685-.305ZM3.172 20.828l.53-.53l-.53.53Zm17.656 0l-.53-.53l.53.53ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h2.5Zm18.5-.437V14h2.5v-.437h-1.5ZM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563l-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h2.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14v1.5ZM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489h-1.5Zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h2.5Zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14v-1.5Z"}),e("path",{stroke:"currentColor","stroke-width":"1.5",d:"M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4"})])],-1)),e("div",st,[e("div",ot,[e("span",null,i(o.$t("Click to upload a file")),1)]),e("p",lt,i(o.$t("Or drag and drop")),1)]),e("p",at,i(o.$t("PDF, Word or TXT files only")),1),e("p",it,[V(i(o.$t("Maximum size"))+" ",1),a[6]||(a[6]=e("b",null,"20MB",-1))])])])],34)):(u(),m("div",{key:1,class:v(["flex justify-center px-6 pt-5 pb-6 shadow-sm outline-none ring-1 ring-inset rounded-md",t(l).errors.file?"ring-[#b91c1c]":"ring-gray-300"])},[e("div",null,[a[9]||(a[9]=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("g",{fill:"none"},[e("path",{fill:"currentColor",d:"m15.393 4.054l-.502.557l.502-.557Zm3.959 3.563l-.502.557l.502-.557Zm2.302 2.537l-.685.305l.685-.305ZM3.172 20.828l.53-.53l-.53.53Zm17.656 0l-.53-.53l.53.53ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h2.5Zm18.5-.437V14h2.5v-.437h-1.5ZM14.891 4.61l3.959 3.563l1.003-1.115l-3.958-3.563l-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h2.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239c1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489c.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01c-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153c1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811c-1.027.138-2.382.14-4.289.14v1.5ZM21.25 14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869c.155-1.15.153-2.625.153-4.489h-1.5Zm-18.5-4c0-1.907.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h2.5Zm7.28-8.75c-1.875 0-3.356-.002-4.511.153c-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811c1.033-.138 2.395-.14 4.312-.14v-1.5Z"}),e("path",{stroke:"currentColor","stroke-width":"1.5",d:"M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4"})])],-1)),e("div",rt,[e("span",null,i(k.value),1),e("span",{onClick:a[3]||(a[3]=h=>I()),class:"bg-slate-200 rounded-full cursor-pointer"},a[8]||(a[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 20 20"},[e("g",{fill:"black"},[e("path",{d:"M6.854 13.854a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708.708z"}),e("path",{d:"M6.146 6.854a.5.5 0 1 1 .708-.708l7 7a.5.5 0 0 1-.708.708z"})])],-1)]))])])],2))]),t(l).errors.file?(u(),m("span",nt,i(t(l).errors.file),1)):_("",!0)]),e("div",dt,[e("div",ut,[t(l).processing?(u(),m("div",ct,a[10]||(a[10]=[e("svg",{class:"mx-auto text-white",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"white","stroke-dasharray":"15","stroke-dashoffset":"15","stroke-linecap":"round","stroke-width":"2",d:"M12 3C16.9706 3 21 7.02944 21 12"},[e("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),e("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})])],-1)]))):(u(),m("button",{key:1,type:"button",onClick:a[4]||(a[4]=h=>f()),class:"w-full inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"},i(o.$t("Upload")),1))])])]),_:1},8,["label","isOpen"]))}},pt={class:"md:h-[90vh]"},ft={class:"flex justify-center items-center"},vt={class:"md:w-[60em]"},gt={class:"bg-white border border-slate-200 rounded-lg pt-2 text-sm mb-4 px-4 mb-20"},bt={class:"w-full py-2 mb-4 mt-2"},ht={class:"flex w-full"},wt={class:"text-md"},_t={class:"text-[16px]"},yt={class:"mb-1 text-slate-500"},xt={class:"ml-auto"},kt={class:"flex items-center gap-x-3"},$t={key:2},Ct={class:"flex items-center justify-between px-4 pt-2 pb-4"},Vt={class:"text-[16px]"},Mt={class:"text-slate-500"},Zt={class:"w-[10%]"},At={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Tt={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},St={key:0},Bt={class:"flex space-x-10 border-b w-full px-4 py-6"},Ft={class:"w-[70%]"},It={class:"text-slate-600"},Dt={class:"text-xs text-slate-700 flex items-center"},Nt={class:"w-[30%]"},Ut={class:"flex space-x-10 border-b w-full px-4 py-6"},jt={class:"w-[40%]"},Ot={class:"text-slate-600"},zt={class:"text-xs text-slate-700 flex items-center"},Lt={class:"w-[60%]"},Et={class:"flex space-x-10 border-b w-full px-4 py-6"},Pt={class:"w-[40%]"},Ht={class:"text-slate-600"},Kt={class:"text-xs text-slate-700 flex items-center"},Rt={class:"w-[60%]"},Xt={class:"flex px-4 pt-1"},qt={class:"ml-auto mt-2"},Wt=["disabled"],Gt={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Jt={key:1},Qt={key:1,class:"bg-white border border-slate-200 rounded-lg py-2 text-sm mb-20 pb-4 px-4"},Yt={class:"w-full py-2 mb-4 mt-2"},es={class:"flex w-full mb-4"},ts={class:"text-md w-[70%]"},ss={class:"text-[16px]"},os={class:"flex items-center mt-1 text-slate-500"},ls={class:"ml-auto w-[40%]"},as={class:"float-right flex items-center gap-x-2"},is={class:"w-5/5"},rs={class:"px-4 pb-4"},ns={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},ds={class:"sm:col-span-6 border rounded-md p-2"},us={class:v("sm:col-span-6")},cs={class:"block text-sm leading-6 text-gray-900 mb-1"},ms={class:"sm:col-span-6 border rounded-md p-2"},ps={class:"flex sm:col-span-6 grid grid-cols-6"},fs={class:v("sm:col-span-3")},vs={class:"block text-sm leading-6 text-gray-900 mb-1"},gs={class:"sm:col-span-6 bg-[#ffe5b4] rounded-md px-3 py-1 mt-2"},bs={class:"block text-xs leading-6 text-gray-900"},hs={class:"mt-4 flex"},ws=["disabled"],_s={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},ys={key:1},ao={__name:"Index",props:["rows","filters","settings","aimodule","fbmodule","models","voices"],setup(C){var p,o,a,h,O,z,K,R,X,q,W,G,J,Q,Y,ee,te,se,oe,le,ae,ie,re,ne;const A=C,M=$(A.settings.metadata),c=$(M.value?JSON.parse(M.value):null),T=$(!1),y=$(!1),x=$(!1),k=j({active:((o=(p=c.value)==null?void 0:p.ai)==null?void 0:o.active)??!1}),r=j({active:((h=(a=c.value)==null?void 0:a.ai)==null?void 0:h.active)??!1,api_key:((z=(O=c.value)==null?void 0:O.ai)==null?void 0:z.api_key)??null,model:((R=(K=c.value)==null?void 0:K.ai)==null?void 0:R.model)??null,voice:((q=(X=c.value)==null?void 0:X.ai)==null?void 0:q.voice)??null,allow_audio_response:((G=(W=c.value)==null?void 0:W.ai)==null?void 0:G.allow_audio_response)??null,max_tokens:((Q=(J=c.value)==null?void 0:J.ai)==null?void 0:Q.max_tokens)??null,temperature:((ee=(Y=c.value)==null?void 0:Y.ai)==null?void 0:ee.temperature)??null,ai_chat_form_active:((se=(te=c.value)==null?void 0:te.ai)==null?void 0:se.ai_chat_form_active)??!1}),l=j({enable_automatic_responses:((le=(oe=c.value)==null?void 0:oe.ai)==null?void 0:le.enable_automatic_responses)??!1,start_keywords:((ie=(ae=c.value)==null?void 0:ae.ai)==null?void 0:ie.start_keywords)??null,stop_keywords:((ne=(re=c.value)==null?void 0:re.ai)==null?void 0:ne.stop_keywords)??null}),Z=()=>{x.value=!x.value},F=()=>{k.active=!k.active,B()},S=()=>{l.enable_automatic_responses=!l.enable_automatic_responses},B=async()=>{k.post("/automation/ai/activate",{preserveScroll:!0})},I=()=>{r.post("/automation/ai/setup",{preserveScroll:!0,onSuccess:()=>{E.visit("/automation/ai",{preserveState:!1})}})},f=()=>{l.post("/automation/ai/assistant-setup",{preserveScroll:!0,onSuccess:()=>{E.visit("/automation/ai",{preserveState:!1})}})};return Ce(()=>r.model,n=>{n!=="gpt-4o-audio-preview"&&(r.allow_audio_response=!1)}),(n,s)=>(u(),m(P,null,[d(Ie,{aimodule:C.aimodule,fbmodule:C.fbmodule},{default:g(()=>{var L,de,ue,ce,me,pe,fe,ve,ge,be,he,we;return[e("div",pt,[e("div",ft,[e("div",vt,[e("div",gt,[e("div",bt,[e("div",ht,[e("div",wt,[e("h4",_t,i(n.$t("Enable AI Assistant")),1),e("div",yt,i(n.$t("Activate AI-generated responses in your conversations")),1)]),e("div",xt,[e("div",kt,[((de=(L=c.value)==null?void 0:L.ai)==null?void 0:de.api_key)!=null?(u(),m("div",{key:0,class:v(["w-12 h-6 flex items-center bg-gray-300 rounded-full p-1",{"bg-primary":t(k).active}]),onClick:s[0]||(s[0]=b=>F(n.active))},[e("div",{class:v(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-6":t(k).active}])},null,2)],2)):_("",!0),((ce=(ue=c.value)==null?void 0:ue.ai)==null?void 0:ce.api_key)==null?(u(),m("div",{key:1,class:v(["w-12 h-6 flex items-center bg-gray-300 rounded-full p-1",{"bg-primary":t(r).active}]),onClick:s[1]||(s[1]=b=>{t(r).active=!0,y.value=!0})},[e("div",{class:v(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-6":t(r).active}])},null,2)],2)):_("",!0),((pe=(me=c.value)==null?void 0:me.ai)==null?void 0:pe.api_key)!=null?(u(),m("div",$t," | ")):_("",!0),((ve=(fe=c.value)==null?void 0:fe.ai)==null?void 0:ve.api_key)!=null?(u(),m("button",{key:3,onClick:s[2]||(s[2]=b=>y.value=!0),class:"bg-primary text-white h-8 rounded-lg text-[13px] px-3 w-fit"},i(n.$t("Update")),1)):_("",!0)])])])])]),((be=(ge=c.value)==null?void 0:ge.ai)==null?void 0:be.api_key)!=null?(u(),m("form",{key:0,onSubmit:s[8]||(s[8]=U(b=>f(),["prevent"])),class:"bg-white border border-slate-200 rounded-lg py-2 text-sm mb-4 pb-4"},[e("div",Ct,[e("div",{onClick:s[3]||(s[3]=b=>Z()),class:"w-[90%] cursor-pointer"},[e("h4",Vt,i(n.$t("AI Assistant Setup")),1),e("div",Mt,i(n.$t("Setup keywords for AI assistance")),1)]),e("div",Zt,[e("button",{type:"button",onClick:s[4]||(s[4]=b=>Z()),class:"hover:bg-slate-50 rounded-full p-1 float-right"},[x.value?(u(),m("svg",At,s[19]||(s[19]=[e("path",{fill:"black","fill-rule":"evenodd",d:"M16.53 14.03a.75.75 0 0 1-1.06 0L12 10.56l-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06","clip-rule":"evenodd"},null,-1)]))):_("",!0),x.value?_("",!0):(u(),m("svg",Tt,s[20]||(s[20]=[e("path",{fill:"black","fill-rule":"evenodd",d:"M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0","clip-rule":"evenodd"},null,-1)])))])])]),x.value?(u(),m("div",St,[e("div",Bt,[e("div",Ft,[e("span",It,i(n.$t("Enable automatic AI assistance for new conversations")),1),e("div",Dt,[e("span",null,i(n.$t("Turn on this option to let users automatically get help from the AI whenever they start a new conversation or ticket. If enabled, this will override the keywords set for initiating AI chat.")),1)])]),e("div",Nt,[e("div",{class:v(["ml-auto w-12 h-6 flex items-center bg-gray-300 rounded-full p-1",{"bg-primary":t(l).enable_automatic_responses}]),onClick:s[5]||(s[5]=b=>S())},[e("div",{class:v(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-6":t(l).enable_automatic_responses}])},null,2)],2)])]),e("div",Ut,[e("div",jt,[e("span",Ot,i(n.$t("Keyword(s) to start the AI agent")),1),e("div",zt,[e("span",null,i(n.$t("Set word or phrase")),1)])]),e("div",Lt,[d(H,{modelValue:t(l).start_keywords,"onUpdate:modelValue":s[6]||(s[6]=b=>t(l).start_keywords=b),error:t(l).errors.start_keywords,name:"",type:"text",class:v("col-span-4")},null,8,["modelValue","error"])])]),e("div",Et,[e("div",Pt,[e("span",Ht,i(n.$t("Keyword(s) to stop the AI agent")),1),e("div",Kt,[e("span",null,i(n.$t("Set word or phrase")),1)])]),e("div",Rt,[d(Pe,{modelValue:t(l).stop_keywords,"onUpdate:modelValue":s[7]||(s[7]=b=>t(l).stop_keywords=b),error:t(l).errors.stop_keywords,name:"",type:"text",class:v("col-span-4")},null,8,["modelValue","error"])])]),e("div",Xt,[e("div",qt,[e("button",{type:"submit",class:"float-right bg-primary text-white h-8 rounded-lg text-[13px] px-3 w-fit",disabled:t(l).processing},[t(l).processing?(u(),m("svg",Gt,s[21]||(s[21]=[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(u(),m("span",Jt,i(n.$t("Save")),1))],8,Wt)])])])):_("",!0)],32)):_("",!0),((we=(he=c.value)==null?void 0:he.ai)==null?void 0:we.api_key)!=null?(u(),m("div",Qt,[e("div",Yt,[e("div",es,[e("div",ts,[e("h4",ss,i(n.$t("Knowledge Base")),1),e("span",os,i(n.$t("Enhance your AI assistant by uploading information to improve client interactions.")),1)]),e("div",ls,[e("div",as,[e("button",{onClick:s[9]||(s[9]=b=>T.value=!0),class:"rounded-md bg-primary px-3 h-8 text-[13px] text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},i(n.$t("Upload Documents")),1)])])]),e("div",is,[d(Je,{rows:A.rows,filters:A.filters},null,8,["rows","filters"]),e("div",rs,[d(He,{class:"mt-3",pagination:A.rows.meta},null,8,["pagination"])])])])])):_("",!0)])])]),d(Ve,{label:n.$t("AI Assistant Setup"),isOpen:y.value},{default:g(()=>{var b,_e;return[e("div",ns,[e("form",{onSubmit:s[17]||(s[17]=U(w=>I(),["prevent"])),class:"grid gap-x-6 gap-y-4 sm:grid-cols-6"},[d(H,{modelValue:t(r).api_key,"onUpdate:modelValue":s[10]||(s[10]=w=>t(r).api_key=w),error:t(r).errors.api_key,name:n.$t("OpenAI API Key"),type:"password",class:v("sm:col-span-6")},null,8,["modelValue","error","name"]),d(xe,{modelValue:t(r).model,"onUpdate:modelValue":s[11]||(s[11]=w=>t(r).model=w),error:t(r).errors.model,name:n.$t("Model"),type:"text",options:C.models,class:v("sm:col-span-6")},null,8,["modelValue","error","name","options"]),e("div",ds,[e("div",us,[e("label",cs,i(n.$t("Integrate AI assistant into chat form")),1),d(ke,{modelValue:t(r).ai_chat_form_active,"onUpdate:modelValue":s[12]||(s[12]=w=>t(r).ai_chat_form_active=w),error:t(r).errors.ai_chat_form_active,class:v("sm:col-span-6")},null,8,["modelValue","error"])])]),e("div",ms,[e("div",ps,[e("div",fs,[e("label",vs,i(n.$t("Activate audio responses")),1),d(ke,{modelValue:t(r).allow_audio_response,"onUpdate:modelValue":s[13]||(s[13]=w=>t(r).allow_audio_response=w),error:t(r).errors.allow_audio_response,class:v("sm:col-span-6"),disabled:t(r).model!="gpt-4o-audio-preview"},null,8,["modelValue","error","disabled"])]),d(xe,{modelValue:t(r).voice,"onUpdate:modelValue":s[14]||(s[14]=w=>t(r).voice=w),error:t(r).errors.voice,name:n.$t("Audio voice"),type:"text",options:C.voices,class:v("sm:col-span-3")},null,8,["modelValue","error","name","options"])]),e("div",gs,[e("span",bs,i(n.$t("Audio responses require the gpt-4o-audio-preview model.")),1)])]),e("div",hs,[((_e=(b=c.value)==null?void 0:b.ai)==null?void 0:_e.api_key)==null?(u(),m("button",{key:0,type:"button",onClick:s[15]||(s[15]=U(w=>{y.value=!1,t(r).active=!1},["self"])),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},i(n.$t("Cancel")),1)):(u(),m("button",{key:1,type:"button",onClick:s[16]||(s[16]=U(w=>y.value=!1,["self"])),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},i(n.$t("Cancel")),1)),e("button",{class:v(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":t(k).processing}]),disabled:t(r).processing},[t(r).processing?(u(),m("svg",_s,s[22]||(s[22]=[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(u(),m("span",ys,i(n.$t("Save")),1))],10,ws)])],32)])]}),_:1},8,["label","isOpen"])]}),_:1},8,["aimodule","fbmodule"]),d(mt,{type:"contact",modelValue:T.value,"onUpdate:modelValue":s[18]||(s[18]=L=>T.value=L)},null,8,["modelValue"])],64))}};export{ao as default};
