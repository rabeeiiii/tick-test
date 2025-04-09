import{_ as u}from"./App-170faeae.js";import{f as g,g as o,o as p,a as t,t as r,n as l,j as n,u as i,i as a,c as v,b as w,J as x}from"./app-c050892b.js";import"./Sidebar-a8d58c80.js";import"./Menu-ad2c6fd2.js";import"./Modal-7bb604e7.js";import"./transition-205df371.js";import"./hidden-7c22a505.js";import"./use-outside-click-24df5687.js";import"./micro-task-89dcd6af.js";import"./ProfileModal-9224dc90.js";import"./FormInput-2566d96f.js";import"./FormPhoneInput-bc730371.js";/* empty css                      */import"./FormSelect-ad20e364.js";import"./index-6bcca514.js";import"./use-text-value-ebf16ccd.js";import"./use-resolve-button-type-e9e046d3.js";import"./tabs-675d133b.js";import"./LangToggle-9231f076.js";import"./OrganizationModal-f0a32070.js";import"./index-aa438030.js";import"./MobileSidebar-33703517.js";/* empty css              */import"./pusher-9742745c.js";const f={class:"bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:py-8 md:pl-8 md:pr-0 rounded-[5px] text-[#000] overflow-y-hidden"},b={class:"flex justify-between"},k={class:"text-xl mb-1"},$={class:"mb-6 flex items-center text-sm leading-6"},C={class:"ml-1 mt-1"},B={class:"flex mt-4"},L={class:"md:w-1/5 bg-white border border-slate-200 h-[fit-content] rounded-lg pb-10 md:block hidden"},V={class:"pt-2 space-y-1 text-sm mb-2 px-2"},_={class:"overflow-hidden text-ellipsis"},y={class:"md:w-4/5 bg-white md:bg-inherit md:px-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto"},Y={__name:"Layout",props:["modules"],setup(c){const m=c,d=e=>{const s=m.modules.find(h=>h.name===e);return s&&s.status===1};return(e,s)=>(p(),g(u,null,{default:o(()=>[t("div",f,[t("div",b,[t("div",null,[t("h2",k,r(e.$t("General settings")),1),t("p",$,[s[0]||(s[0]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),t("span",C,r(e.$t("Update your organization settings")),1)])])]),t("div",B,[t("div",L,[t("ul",V,[t("li",{class:l(["hover:bg-slate-50 hover:text-black rounded-[5px] px-1 truncate cursor-pointer",e.$page.url==="/settings"?"bg-slate-50 text-black":""])},[n(i(a),{rel:"noopener noreferrer",href:"/settings",class:"flex items-center p-2 space-x-3 rounded-md"},{default:o(()=>[s[1]||(s[1]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[t("path",{d:"M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"}),t("path",{d:"m19.622 10.395l-1.097-2.65L20 6l-2-2l-1.735 1.483l-2.707-1.113L12.935 2h-1.954l-.632 2.401l-2.645 1.115L6 4L4 6l1.453 1.789l-1.08 2.657L2 11v2l2.401.656L5.516 16.3L4 18l2 2l1.791-1.46l2.606 1.072L11 22h2l.604-2.387l2.651-1.098C16.697 18.832 18 20 18 20l2-2l-1.484-1.75l1.098-2.652l2.386-.62V11z"})])],-1)),t("span",null,r(e.$t("General settings")),1)]),_:1})],2),t("li",{class:l(["hover:bg-slate-50 hover:text-black rounded-[5px] px-1 truncate cursor-pointer",e.$page.url.startsWith("/settings/whatsapp")?"bg-slate-50 text-black":""])},[n(i(a),{rel:"noopener noreferrer",href:"/settings/whatsapp",class:"flex items-center p-2 space-x-3 rounded-md"},{default:o(()=>[s[2]||(s[2]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"})],-1)),t("div",_,r(e.$t("Whatsapp settings")),1)]),_:1})],2),t("li",{class:l(["hover:bg-slate-50 hover:text-black rounded-[5px] px-1 truncate cursor-pointer",e.$page.url.startsWith("/settings/contacts")?"bg-slate-50 text-black":""])},[n(i(a),{rel:"noopener noreferrer",href:"/settings/contacts",class:"flex items-center p-2 space-x-3 rounded-md"},{default:o(()=>[s[3]||(s[3]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8"})],-1)),t("span",null,r(e.$t("Contact fields")),1)]),_:1})],2),t("li",{class:l(["hover:bg-slate-50 hover:text-black rounded-[5px] px-1 truncate cursor-pointer",e.$page.url.startsWith("/settings/tickets")?"bg-slate-50 text-black":""])},[n(i(a),{rel:"noopener noreferrer",href:"/settings/tickets",class:"flex items-center p-2 space-x-3 rounded-md"},{default:o(()=>[s[4]||(s[4]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M4 4a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2a2 2 0 0 1-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1-2-2a2 2 0 0 1 2-2V6a2 2 0 0 0-2-2zm0 2h16v2.54c-1.24.71-2 2.03-2 3.46s.76 2.75 2 3.46V18H4v-2.54c1.24-.71 2-2.03 2-3.46s-.76-2.75-2-3.46z"})],-1)),t("span",null,r(e.$t("Ticket settings")),1)]),_:1})],2),d("AI Assistant")||d("Flow builder")?(p(),v("li",{key:0,class:l(["hover:bg-slate-50 hover:text-black rounded-[5px] px-1 truncate cursor-pointer",e.$page.url.startsWith("/settings/automation")?"bg-slate-50 text-black":""])},[n(i(a),{rel:"noopener noreferrer",href:"/settings/automation",class:"flex items-center p-2 space-x-3 rounded-md"},{default:o(()=>[s[5]||(s[5]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 32 32"},[t("path",{fill:"currentColor",d:"M16 27c-3.6 0-7.1-1.8-9.2-5H12v-2H4v8h2v-3.7c2.5 3 6.1 4.7 10 4.7zm15-4v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V15h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H17v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V29h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3m-4-15h5.2C21.9 4.9 15.1 3.5 10 6.8c-3.1 2-5 5.5-5 9.2H3C3 8.8 8.8 3 16 3c3.9 0 7.5 1.7 10 4.7V4h2v8h-8z"})],-1)),t("span",null,r(e.$t("Automation settings")),1)]),_:1})],2)):w("",!0)])]),t("div",y,[x(e.$slots,"default")])])])]),_:3}))}};export{Y as default};
