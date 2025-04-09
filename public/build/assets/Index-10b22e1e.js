import{r as y,T as Y,q,O as G,c as a,a as e,d as W,t as s,j as b,g as p,u,b as l,F as z,o,h as c,i as g,f as x,n as f,e as J,k as O}from"./app-63c352f8.js";import{E as K,_ as Q}from"./App-6e8ea588.js";import{_ as X}from"./BillingTable-a6e1708a.js";import{_ as ee}from"./Modal-77090c91.js";import{_ as se}from"./FormInput-a9577592.js";import{P as te}from"./pusher-7ce92ece.js";import"./Sidebar-5b826529.js";import"./Menu-6dca8104.js";import"./ProfileModal-7fdd08ae.js";import"./FormPhoneInput-ba9f060e.js";/* empty css                      */import"./FormSelect-51609345.js";import"./index-245abe8c.js";import"./hidden-1ba5fb48.js";import"./use-text-value-34fc6a1a.js";import"./transition-513441a0.js";import"./micro-task-89dcd6af.js";import"./tabs-14de339e.js";import"./LangToggle-130b0b55.js";import"./index-445d2961.js";import"./MobileSidebar-4ae9ad81.js";/* empty css              */import"./debounce-56258666.js";import"./_baseGetTag-05d5263a.js";import"./Table-e6473b46.js";import"./Pagination-83ad7c1b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TableHeaderRowItem-175c9fe6.js";import"./TableBodyRowItem-161fb705.js";const ie={key:0,class:"fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"},ne={class:"bg-white p-6 rounded-lg shadow-lg text-center text-sm"},oe={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},ae={class:"flex justify-between mt-8 md:mt-0"},le={class:"text-xl mb-1"},re={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},ue={class:"ml-1 mt-1"},de={key:0,class:"bg-red-500 p-5 w-100 mb-4 rounded-[0.5rem] flex justify-between items-center space-x-4 text-white"},ce={class:"flex items-center space-x-4"},pe={key:0,class:"text-sm"},me={key:1,class:"text-sm"},be={class:"float-right"},ge={class:"md:flex bg-slate-100 md:bg-white shadow-sm p-5 rounded-[0.5rem] space-y-6"},fe={class:"md:w-[50%]"},he={class:"mb-5"},ve={class:"text-sm text-gray-500 tracking-[0px]"},ye={key:0,class:"text-[18px]"},xe={key:1,class:"text-[18px]"},we={key:0,class:"flex gap-x-3"},_e={class:"text-sm text-gray-500 tracking-[0px]"},ke={class:"text-sm"},$e={class:"text-sm text-gray-500 tracking-[0px]"},Me={class:"text-sm"},Se={class:"text-sm text-gray-500 tracking-[0px]"},Pe={class:"text-sm"},Ce={key:1,class:"flex space-x-6"},Ae={class:"text-sm text-gray-500 tracking-[0px]"},Te={class:"text-sm"},Ne={class:"md:w-[50%]"},Ze={class:"bg-slate-100 md:bg-gray-50 p-5 md:px-0 rounded-[0.5rem] mt-10 w-full"},Be={class:"w-full"},Ve={class:"mb-5"},Re={class:"text-xl tracking-[0px]"},je={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},Ee={class:"ml-1 mt-1"},Ie={class:"w-100"},Le={class:"text-2xl mb-4"},ze={class:"text-sm"},Oe={class:"text-sm mt-4 mb-2"},De={class:"grid grid-cols-2 gap-2"},Fe={class:"flex items-center"},He=["onClick"],Ue={key:0,class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Ye=["onClick"],qe={class:"form-error text-[#b91c1c] text-xs mt-2"},Ge={class:"mt-6 flex"},We=["disabled"],Je={key:0,class:"flex space-x-1"},Ke={key:1,class:"flex space-x-1"},Ps={__name:"Index",props:["subscription","rows","filters","subscriptionIsActive","subscriptionDetails","methods","isPaymentLoading","pusherSettings","organizationId","setting"],setup(h){const i=h;y(i.subscription.data);const v=y(!1),m=y(!1),d=Y({amount:null,method:null}),w=t=>{d.method=t};function _(){v.value=!0}function D(){v.value=!1}const F=async()=>{m.value=!0,d.post("/pay",{preserveScroll:!0,onFinish:()=>{m.value=!1}})};return q(()=>{i.pusherSettings.pusher_app_key!=null&&i.pusherSettings.pusher_app_cluster!=null&&(window.Pusher=te,window.Echo=new K({broadcaster:"pusher",key:i.pusherSettings.pusher_app_key,cluster:i.pusherSettings.pusher_app_cluster,encrypted:!0}),window.Echo.channel("payments.ch"+i.organizationId).listen("NewPaymentEvent",t=>{G.visit("/billing",{})}))}),(t,n)=>(o(),a(z,null,[h.isPaymentLoading?(o(),a("div",ie,[e("div",ne,[n[4]||(n[4]=W('<div class="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple0" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple1" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple2" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path></svg></div>',1)),e("p",null,s(t.$t("Please wait as the payment is being processed!")),1),b(u(g),{href:"billing",class:"underline"},{default:p(()=>[c(s(t.$t("Go to billing")),1)]),_:1})])])):l("",!0),b(Q,null,{default:p(()=>{var k,$,M,S,P,C,A,T,N,Z,B,V,R,j,E,I,L;return[e("div",oe,[e("div",ae,[e("div",null,[e("h2",le,s(t.$t("Billing and subscription")),1),e("p",re,[n[5]||(n[5]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("span",ue,s(t.$t("View and manage your billing history")),1)])])]),h.subscriptionIsActive?l("",!0):(o(),a("div",de,[e("div",ce,[n[8]||(n[8]=e("span",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 56 56"},[e("path",{fill:"currentColor",d:"M9.965 50.207h36.07c3.985 0 6.469-2.86 6.469-6.469c0-1.078-.281-2.18-.867-3.187L33.567 9.074c-1.22-2.133-3.352-3.281-5.555-3.281c-2.18 0-4.336 1.148-5.579 3.281l-18.07 31.5a6.253 6.253 0 0 0-.867 3.164c0 3.61 2.508 6.469 6.469 6.469m.047-3.68c-1.641 0-2.72-1.336-2.72-2.789c0-.422.071-.914.306-1.406l18.046-31.477c.516-.89 1.454-1.312 2.368-1.312c.914 0 1.804.398 2.32 1.312l18.047 31.5c.234.47.351.961.351 1.383c0 1.453-1.125 2.79-2.742 2.79Zm18-12.117c1.125 0 1.78-.656 1.804-1.875l.328-12.351c.024-1.196-.914-2.086-2.156-2.086c-1.265 0-2.156.867-2.133 2.062l.305 12.375c.023 1.196.68 1.875 1.852 1.875m0 7.617c1.359 0 2.53-1.078 2.53-2.437c0-1.383-1.148-2.438-2.53-2.438c-1.383 0-2.532 1.078-2.532 2.438c0 1.336 1.172 2.437 2.532 2.437"})])],-1)),((k=i.subscription)==null?void 0:k.status)==="trial"?(o(),a("h2",pe,[c(s(t.$t("Your trial period is over"))+" ",1),n[6]||(n[6]=e("br",null,null,-1)),c(" "+s(t.$t("Please subscribe to a plan to continue using the app"))+".",1)])):l("",!0),(($=i.subscription)==null?void 0:$.status)==="active"?(o(),a("h2",me,[c(s(t.$t("We were unable to autorenew your subscription"))+" ",1),n[7]||(n[7]=e("br",null,null,-1)),c(" "+s(t.$t("To continue using the app, please make a payment of"))+" "+s((M=i.subscriptionDetails)==null?void 0:M.accountBalance)+".",1)])):l("",!0)]),e("div",null,[e("div",be,[((S=i.subscription)==null?void 0:S.status)==="trial"?(o(),x(u(g),{key:0,href:"/subscription",type:"button",class:"rounded-md bg-white text-gray-600 px-3 py-2 text-sm shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>[c(s(t.$t("Subscribe")),1)]),_:1})):l("",!0),((P=i.subscription)==null?void 0:P.status)==="active"&&i.setting.enable_custom_payment==1?(o(),a("button",{key:1,onClick:n[0]||(n[0]=r=>_()),type:"button",class:"rounded-md bg-white text-gray-600 px-3 py-2 text-sm shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},s(t.$t("Add payment")),1)):l("",!0)])])])),e("div",ge,[e("div",fe,[e("div",he,[e("h2",ve,s(t.$t("Plan details")),1),((C=i.subscription)==null?void 0:C.status)==="trial"?(o(),a("h2",ye,s(t.$t("Trial period")),1)):l("",!0),((A=i.subscription)==null?void 0:A.status)==="active"?(o(),a("h2",xe,s((N=(T=i.subscription)==null?void 0:T.plan)==null?void 0:N.name),1)):l("",!0)]),((Z=i.subscription)==null?void 0:Z.status)!="trial"?(o(),a("div",we,[e("div",null,[e("h2",_e,s(t.$t("Start date")),1),e("span",ke,s((B=i.subscription)==null?void 0:B.start_date),1)]),e("div",null,[e("h2",$e,s(t.$t("Next billing date")),1),e("span",Me,s((V=i.subscription)==null?void 0:V.valid_until),1)]),e("div",null,[e("h2",Se,s(t.$t("Account balance")),1),e("span",Pe,s((R=i.subscriptionDetails)==null?void 0:R.accountBalance),1)])])):l("",!0),((j=i.subscription)==null?void 0:j.status)==="trial"?(o(),a("div",Ce,[e("div",null,[e("h2",Ae,s(t.$t("Trial expires on")),1),e("span",Te,s((E=i.subscription)==null?void 0:E.valid_until),1)])])):l("",!0)]),e("div",Ne,[e("div",{class:f(["md:float-right gap-y-2 gap-x-3",i.setting.enable_custom_payment==0?"flex":"grid grid-cols-2"])},[i.setting.enable_custom_payment==1?(o(),a("button",{key:0,onClick:n[1]||(n[1]=r=>_()),type:"button",class:"w-full capitalize rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2 col-span-2 md:col-span-1 text-center"},s(t.$t("Add payment")),1)):l("",!0),((I=i.subscription)==null?void 0:I.status)==="trial"?(o(),x(u(g),{key:1,href:"/subscription",class:"w-full rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 col-span-2 md:col-span-1 text-center"},{default:p(()=>[c(s(t.$t("Subscribe to plan")),1)]),_:1})):l("",!0),((L=i.subscription)==null?void 0:L.status)==="active"?(o(),x(u(g),{key:2,href:"/subscription",class:"w-full rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 col-span-2 md:col-span-1 text-center"},{default:p(()=>[c(s(t.$t("Upgrade subscription")),1)]),_:1})):l("",!0)],2)])]),e("div",Ze,[e("div",Be,[e("div",Ve,[e("h2",Re,s(t.$t("Invoices")),1),e("p",je,[e("span",Ee,s(t.$t("You can view your invoices and past billing details here")),1)])]),e("div",Ie,[b(X,{rows:i.rows,filters:i.filters},null,8,["rows","filters"])])])])]),b(ee,{label:t.label,isOpen:v.value},{default:p(()=>[e("form",{onSubmit:n[3]||(n[3]=O(r=>F(),["prevent"])),class:"gap-y-4"},[e("h2",Le,s(t.$t("Add payment")),1),e("p",ze,s(t.$t("Add your own custom amount")),1),b(se,{modelValue:u(d).amount,"onUpdate:modelValue":n[2]||(n[2]=r=>u(d).amount=r),error:u(d).errors.amount,name:"",type:"number",class:f("w-100")},null,8,["modelValue","error"]),e("h2",Oe,s(t.$t("Pay via")),1),e("div",De,[(o(!0),a(z,null,J(i.methods,(r,H)=>(o(),a("div",{key:H,class:""},[e("div",Fe,[e("label",{onClick:U=>w(r.name),for:"myCheckbox",class:"cursor-pointer"},[e("div",{class:f(["w-5 h-5 border border-gray-400 rounded-md flex items-center justify-center",u(d).method===r.name?"bg-[#000]":""])},[u(d).method===r.name?(o(),a("svg",Ue,n[9]||(n[9]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]))):l("",!0)],2)],8,He),e("span",{onClick:U=>w(r.name),class:"ml-2 text-sm cursor-pointer"},s(r.name),9,Ye)])]))),128))]),e("div",qe,s(u(d).errors.method),1),e("div",Ge,[e("button",{type:"button",onClick:O(D,["self"]),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},s(t.$t("Cancel")),1),e("button",{class:f(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":m.value}]),disabled:m.value},[m.value?(o(),a("span",Je,[n[10]||(n[10]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1)),e("span",null,s(t.$t("Processing")),1)])):(o(),a("span",Ke,[n[11]||(n[11]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"})],-1)),e("span",null,s(t.$t("Continue")),1)]))],10,We)])],32)]),_:1},8,["label","isOpen"])]}),_:1})],64))}};export{Ps as default};
