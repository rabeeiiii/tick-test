import{r as y,T as Y,q,O as G,c as a,a as t,d as W,t as e,j as b,g as p,u,b as l,F as z,o,h as c,i as g,f as x,n as f,e as J,k as O}from"./app-c050892b.js";import{E as K,_ as Q}from"./App-170faeae.js";import{_ as X}from"./BillingTable-02e45ded.js";import{_ as tt}from"./Modal-7bb604e7.js";import{_ as et}from"./FormInput-2566d96f.js";import{P as st}from"./pusher-9742745c.js";import"./Sidebar-a8d58c80.js";import"./Menu-ad2c6fd2.js";import"./ProfileModal-9224dc90.js";import"./FormPhoneInput-bc730371.js";/* empty css                      */import"./FormSelect-ad20e364.js";import"./index-6bcca514.js";import"./hidden-7c22a505.js";import"./use-text-value-ebf16ccd.js";import"./use-outside-click-24df5687.js";import"./use-resolve-button-type-e9e046d3.js";import"./transition-205df371.js";import"./micro-task-89dcd6af.js";import"./tabs-675d133b.js";import"./LangToggle-9231f076.js";import"./OrganizationModal-f0a32070.js";import"./index-aa438030.js";import"./MobileSidebar-33703517.js";/* empty css              */import"./debounce-a2c3c022.js";import"./_baseGetTag-4cbd9caa.js";import"./Table-9ac0d727.js";import"./Pagination-63b638cd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TableHeaderRowItem-cc06c3e8.js";import"./TableBodyRowItem-2063894c.js";const it={key:0,class:"fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"},nt={class:"bg-white p-6 rounded-lg shadow-lg text-center text-sm"},ot={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},at={class:"flex justify-between mt-8 md:mt-0"},lt={class:"text-xl mb-1"},rt={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},ut={class:"ml-1 mt-1"},dt={key:0,class:"bg-red-500 p-5 w-100 mb-4 rounded-[0.5rem] flex justify-between items-center space-x-4 text-white"},ct={class:"flex items-center space-x-4"},pt={key:0,class:"text-sm"},mt={key:1,class:"text-sm"},bt={class:"float-right"},gt={class:"md:flex bg-slate-100 md:bg-white shadow-sm p-5 rounded-[0.5rem] space-y-6"},ft={class:"md:w-[50%]"},ht={class:"mb-5"},vt={class:"text-sm text-gray-500 tracking-[0px]"},yt={key:0,class:"text-[18px]"},xt={key:1,class:"text-[18px]"},wt={key:0,class:"flex gap-x-3"},_t={class:"text-sm text-gray-500 tracking-[0px]"},kt={class:"text-sm"},$t={class:"text-sm text-gray-500 tracking-[0px]"},Mt={class:"text-sm"},St={class:"text-sm text-gray-500 tracking-[0px]"},Pt={class:"text-sm"},Ct={key:1,class:"flex space-x-6"},At={class:"text-sm text-gray-500 tracking-[0px]"},Tt={class:"text-sm"},Nt={class:"md:w-[50%]"},Zt={class:"bg-slate-100 md:bg-gray-50 p-5 md:px-0 rounded-[0.5rem] mt-10 w-full"},Bt={class:"w-full"},Vt={class:"mb-5"},Rt={class:"text-xl tracking-[0px]"},jt={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},Et={class:"ml-1 mt-1"},It={class:"w-100"},Lt={class:"text-2xl mb-4"},zt={class:"text-sm"},Ot={class:"text-sm mt-4 mb-2"},Dt={class:"grid grid-cols-2 gap-2"},Ft={class:"flex items-center"},Ht=["onClick"],Ut={key:0,class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Yt=["onClick"],qt={class:"form-error text-[#b91c1c] text-xs mt-2"},Gt={class:"mt-6 flex"},Wt=["disabled"],Jt={key:0,class:"flex space-x-1"},Kt={key:1,class:"flex space-x-1"},Te={__name:"Index",props:["subscription","rows","filters","subscriptionIsActive","subscriptionDetails","methods","isPaymentLoading","pusherSettings","organizationId","setting"],setup(h){const i=h;y(i.subscription.data);const v=y(!1),m=y(!1),d=Y({amount:null,method:null}),w=s=>{d.method=s};function _(){v.value=!0}function D(){v.value=!1}const F=async()=>{m.value=!0,d.post("/pay",{preserveScroll:!0,onFinish:()=>{m.value=!1}})};return q(()=>{i.pusherSettings.pusher_app_key!=null&&i.pusherSettings.pusher_app_cluster!=null&&(window.Pusher=st,window.Echo=new K({broadcaster:"pusher",key:i.pusherSettings.pusher_app_key,cluster:i.pusherSettings.pusher_app_cluster,encrypted:!0}),window.Echo.channel("payments.ch"+i.organizationId).listen("NewPaymentEvent",s=>{G.visit("/billing",{})}))}),(s,n)=>(o(),a(z,null,[h.isPaymentLoading?(o(),a("div",it,[t("div",nt,[n[4]||(n[4]=W('<div class="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple0" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple1" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple2" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path></svg></div>',1)),t("p",null,e(s.$t("Please wait as the payment is being processed!")),1),b(u(g),{href:"billing",class:"underline"},{default:p(()=>[c(e(s.$t("Go to billing")),1)]),_:1})])])):l("",!0),b(Q,null,{default:p(()=>{var k,$,M,S,P,C,A,T,N,Z,B,V,R,j,E,I,L;return[t("div",ot,[t("div",at,[t("div",null,[t("h2",lt,e(s.$t("Billing and subscription")),1),t("p",rt,[n[5]||(n[5]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),t("span",ut,e(s.$t("View and manage your billing history")),1)])])]),h.subscriptionIsActive?l("",!0):(o(),a("div",dt,[t("div",ct,[n[8]||(n[8]=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 56 56"},[t("path",{fill:"currentColor",d:"M9.965 50.207h36.07c3.985 0 6.469-2.86 6.469-6.469c0-1.078-.281-2.18-.867-3.187L33.567 9.074c-1.22-2.133-3.352-3.281-5.555-3.281c-2.18 0-4.336 1.148-5.579 3.281l-18.07 31.5a6.253 6.253 0 0 0-.867 3.164c0 3.61 2.508 6.469 6.469 6.469m.047-3.68c-1.641 0-2.72-1.336-2.72-2.789c0-.422.071-.914.306-1.406l18.046-31.477c.516-.89 1.454-1.312 2.368-1.312c.914 0 1.804.398 2.32 1.312l18.047 31.5c.234.47.351.961.351 1.383c0 1.453-1.125 2.79-2.742 2.79Zm18-12.117c1.125 0 1.78-.656 1.804-1.875l.328-12.351c.024-1.196-.914-2.086-2.156-2.086c-1.265 0-2.156.867-2.133 2.062l.305 12.375c.023 1.196.68 1.875 1.852 1.875m0 7.617c1.359 0 2.53-1.078 2.53-2.437c0-1.383-1.148-2.438-2.53-2.438c-1.383 0-2.532 1.078-2.532 2.438c0 1.336 1.172 2.437 2.532 2.437"})])],-1)),((k=i.subscription)==null?void 0:k.status)==="trial"?(o(),a("h2",pt,[c(e(s.$t("Your trial period is over"))+" ",1),n[6]||(n[6]=t("br",null,null,-1)),c(" "+e(s.$t("Please subscribe to a plan to continue using the app"))+".",1)])):l("",!0),(($=i.subscription)==null?void 0:$.status)==="active"?(o(),a("h2",mt,[c(e(s.$t("We were unable to autorenew your subscription"))+" ",1),n[7]||(n[7]=t("br",null,null,-1)),c(" "+e(s.$t("To continue using the app, please make a payment of"))+" "+e((M=i.subscriptionDetails)==null?void 0:M.accountBalance)+".",1)])):l("",!0)]),t("div",null,[t("div",bt,[((S=i.subscription)==null?void 0:S.status)==="trial"?(o(),x(u(g),{key:0,href:"/subscription",type:"button",class:"rounded-md bg-white text-gray-600 px-3 py-2 text-sm shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>[c(e(s.$t("Subscribe")),1)]),_:1})):l("",!0),((P=i.subscription)==null?void 0:P.status)==="active"&&i.setting.enable_custom_payment==1?(o(),a("button",{key:1,onClick:n[0]||(n[0]=r=>_()),type:"button",class:"rounded-md bg-white text-gray-600 px-3 py-2 text-sm shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},e(s.$t("Add payment")),1)):l("",!0)])])])),t("div",gt,[t("div",ft,[t("div",ht,[t("h2",vt,e(s.$t("Plan details")),1),((C=i.subscription)==null?void 0:C.status)==="trial"?(o(),a("h2",yt,e(s.$t("Trial period")),1)):l("",!0),((A=i.subscription)==null?void 0:A.status)==="active"?(o(),a("h2",xt,e((N=(T=i.subscription)==null?void 0:T.plan)==null?void 0:N.name),1)):l("",!0)]),((Z=i.subscription)==null?void 0:Z.status)!="trial"?(o(),a("div",wt,[t("div",null,[t("h2",_t,e(s.$t("Start date")),1),t("span",kt,e((B=i.subscription)==null?void 0:B.start_date),1)]),t("div",null,[t("h2",$t,e(s.$t("Next billing date")),1),t("span",Mt,e((V=i.subscription)==null?void 0:V.valid_until),1)]),t("div",null,[t("h2",St,e(s.$t("Account balance")),1),t("span",Pt,e((R=i.subscriptionDetails)==null?void 0:R.accountBalance),1)])])):l("",!0),((j=i.subscription)==null?void 0:j.status)==="trial"?(o(),a("div",Ct,[t("div",null,[t("h2",At,e(s.$t("Trial expires on")),1),t("span",Tt,e((E=i.subscription)==null?void 0:E.valid_until),1)])])):l("",!0)]),t("div",Nt,[t("div",{class:f(["md:float-right gap-y-2 gap-x-3",i.setting.enable_custom_payment==0?"flex":"grid grid-cols-2"])},[i.setting.enable_custom_payment==1?(o(),a("button",{key:0,onClick:n[1]||(n[1]=r=>_()),type:"button",class:"w-full capitalize rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2 col-span-2 md:col-span-1 text-center"},e(s.$t("Add payment")),1)):l("",!0),((I=i.subscription)==null?void 0:I.status)==="trial"?(o(),x(u(g),{key:1,href:"/subscription",class:"w-full rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 col-span-2 md:col-span-1 text-center"},{default:p(()=>[c(e(s.$t("Subscribe to plan")),1)]),_:1})):l("",!0),((L=i.subscription)==null?void 0:L.status)==="active"?(o(),x(u(g),{key:2,href:"/subscription",class:"w-full rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 col-span-2 md:col-span-1 text-center"},{default:p(()=>[c(e(s.$t("Upgrade subscription")),1)]),_:1})):l("",!0)],2)])]),t("div",Zt,[t("div",Bt,[t("div",Vt,[t("h2",Rt,e(s.$t("Invoices")),1),t("p",jt,[t("span",Et,e(s.$t("You can view your invoices and past billing details here")),1)])]),t("div",It,[b(X,{rows:i.rows,filters:i.filters},null,8,["rows","filters"])])])])]),b(tt,{label:s.label,isOpen:v.value},{default:p(()=>[t("form",{onSubmit:n[3]||(n[3]=O(r=>F(),["prevent"])),class:"gap-y-4"},[t("h2",Lt,e(s.$t("Add payment")),1),t("p",zt,e(s.$t("Add your own custom amount")),1),b(et,{modelValue:u(d).amount,"onUpdate:modelValue":n[2]||(n[2]=r=>u(d).amount=r),error:u(d).errors.amount,name:"",type:"number",class:f("w-100")},null,8,["modelValue","error"]),t("h2",Ot,e(s.$t("Pay via")),1),t("div",Dt,[(o(!0),a(z,null,J(i.methods,(r,H)=>(o(),a("div",{key:H,class:""},[t("div",Ft,[t("label",{onClick:U=>w(r.name),for:"myCheckbox",class:"cursor-pointer"},[t("div",{class:f(["w-5 h-5 border border-gray-400 rounded-md flex items-center justify-center",u(d).method===r.name?"bg-[#000]":""])},[u(d).method===r.name?(o(),a("svg",Ut,n[9]||(n[9]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]))):l("",!0)],2)],8,Ht),t("span",{onClick:U=>w(r.name),class:"ml-2 text-sm cursor-pointer"},e(r.name),9,Yt)])]))),128))]),t("div",qt,e(u(d).errors.method),1),t("div",Gt,[t("button",{type:"button",onClick:O(D,["self"]),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},e(s.$t("Cancel")),1),t("button",{class:f(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":m.value}]),disabled:m.value},[m.value?(o(),a("span",Jt,[n[10]||(n[10]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),t("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[t("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1)),t("span",null,e(s.$t("Processing")),1)])):(o(),a("span",Kt,[n[11]||(n[11]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"})],-1)),t("span",null,e(s.$t("Continue")),1)]))],10,Wt)])],32)]),_:1},8,["label","isOpen"])]}),_:1})],64))}};export{Te as default};
