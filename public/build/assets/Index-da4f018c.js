import S from"./App-5cbfef82.js";import{T as O,r as x,O as F,o as d,c as f,a as e,w as L,v as R,u,b as $,d as z,j as t,g as o,h as l,t as i,F as k,e as D,f as T,n as Z,l as H,i as I}from"./app-c050892b.js";import{d as U}from"./debounce-a2c3c022.js";import{_ as q}from"./AlertModal-64456e2e.js";import{u as E}from"./useAlertModal-73045e55.js";/* empty css              */import{_ as G}from"./Table-9ac0d727.js";import{T as J,a as K,_ as v}from"./TableHeaderRowItem-cc06c3e8.js";import{T as P,a as Q,_ as b}from"./TableBodyRowItem-2063894c.js";import{_ as W}from"./Dropdown-67734127.js";import{_ as X,a as C}from"./DropdownItem-5974481b.js";import"./Sidebar-fb5d09b5.js";import"./Menu-cafee48c.js";import"./ProfileModal-9224dc90.js";import"./FormInput-2566d96f.js";import"./FormPhoneInput-bc730371.js";/* empty css                      */import"./FormSelect-ad20e364.js";import"./index-6bcca514.js";import"./hidden-7c22a505.js";import"./use-text-value-ebf16ccd.js";import"./use-outside-click-24df5687.js";import"./use-resolve-button-type-e9e046d3.js";import"./transition-205df371.js";import"./micro-task-89dcd6af.js";import"./tabs-675d133b.js";import"./LangToggle-9231f076.js";import"./MobileSidebar-12e2ab74.js";import"./index-aa438030.js";import"./_baseGetTag-4cbd9caa.js";import"./Pagination-63b638cd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-tree-walker-228f32d6.js";const Y={class:"md:bg-white flex items-center border border-primary md:border-none md:shadow-sm h-12 md:h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-xl md:text-sm"},ee=["placeholder"],te={key:1,class:"pr-2"},oe={__name:"RoleTable",props:{rows:{type:Object,required:!0},filters:{type:Object}},emits:["delete"],setup(c,{emit:w}){const n=c,{isOpenAlert:m,openAlert:N,confirmAlert:B}=E(),V=O({test:null}),j=r=>{V.delete("/admin/team/role/"+r)},M=r=>r===n.rows.data.length-1,p=x({search:n.filters.search}),h=x(!1),A=()=>{p.value.search=null,_()},g=U(()=>{h.value=!0,_()},1e3),_=()=>{F.visit("/admin/team/roles",{method:"get",data:p.value})};return(r,s)=>(d(),f(k,null,[e("div",Y,[s[6]||(s[6]=e("span",{class:"pl-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1)),L(e("input",{onInput:s[0]||(s[0]=(...a)=>u(g)&&u(g)(...a)),"onUpdate:modelValue":s[1]||(s[1]=a=>p.value.search=a),type:"text",class:"outline-none px-4 w-full",placeholder:r.$t("Search roles")},null,40,ee),[[R,p.value.search]]),h.value===!1&&p.value.search?(d(),f("button",{key:0,onClick:A,type:"button",class:"pr-2"},s[4]||(s[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1)]))):$("",!0),h.value?(d(),f("span",te,s[5]||(s[5]=[z('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1)]))):$("",!0)]),t(G,{rows:c.rows},{default:o(()=>[t(J,null,{default:o(()=>[t(K,null,{default:o(()=>[t(v,{position:"first"},{default:o(()=>[l(i(r.$t("Name")),1)]),_:1}),t(v,null,{default:o(()=>[l(i(r.$t("Last updated")),1)]),_:1}),t(v,{position:"last"})]),_:1})]),_:1}),t(P,null,{default:o(()=>[(d(!0),f(k,null,D(c.rows.data,(a,y)=>(d(),T(Q,{key:y,class:Z(M(y)?"":"border-b")},{default:o(()=>[t(b,{position:"first",class:"capitalize"},{default:o(()=>[l(i(a.name),1)]),_:2},1024),t(b,{class:"hidden sm:table-cell"},{default:o(()=>[l(i(a.updated_at),1)]),_:2},1024),t(b,{position:"last"},{default:o(()=>[t(W,{align:"right",class:"mt-2"},{items:o(()=>[t(X,null,{default:o(()=>[t(C,{href:"/admin/team/roles/"+a.uuid},{default:o(()=>[l(i(r.$t("View/edit")),1)]),_:2},1032,["href"]),t(C,{as:"button",onClick:ne=>u(N)(a.uuid)},{default:o(()=>[l(i(r.$t("Delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),default:o(()=>[s[7]||(s[7]=e("button",{class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},[e("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"})])])],-1))]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"]),t(q,{modelValue:u(m),"onUpdate:modelValue":s[2]||(s[2]=a=>H(m)?m.value=a:null),onConfirm:s[3]||(s[3]=()=>u(B)(j)),label:r.$t("Delete row"),description:r.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},se={class:"bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto"},re={class:"flex justify-between"},ae={class:"text-xl mb-1"},ie={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},le={class:"ml-1 mt-1"},Ie={__name:"Index",props:{title:String,rows:Object,filters:Object},setup(c){const w=c;return(n,m)=>(d(),T(S,null,{default:o(()=>[e("div",se,[e("div",re,[e("div",null,[e("h1",ae,i(n.$t("Admin roles")),1),e("p",ie,[m[0]||(m[0]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("span",le,i(n.$t("Manage roles")),1)])]),e("div",null,[t(u(I),{href:"/admin/team/roles/create",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:o(()=>[l(i(n.$t("Add role")),1)]),_:1})])]),t(oe,{rows:w.rows,filters:w.filters},null,8,["rows","filters"])])]),_:1}))}};export{Ie as default};
