import{r as y,T as c,f as V,g as v,o as u,a as n,t as d,j as a,u as l,n as r,c as g,k as x}from"./app-c050892b.js";import h from"./App-7f8a8175.js";import{_ as m}from"./FormInput-2566d96f.js";import"./App-5cbfef82.js";import"./Sidebar-fb5d09b5.js";import"./Menu-cafee48c.js";import"./ProfileModal-9224dc90.js";import"./FormPhoneInput-bc730371.js";/* empty css                      */import"./FormSelect-ad20e364.js";import"./index-6bcca514.js";import"./hidden-7c22a505.js";import"./use-text-value-ebf16ccd.js";import"./use-outside-click-24df5687.js";import"./use-resolve-button-type-e9e046d3.js";import"./transition-205df371.js";import"./micro-task-89dcd6af.js";import"./tabs-675d133b.js";import"./LangToggle-9231f076.js";import"./MobileSidebar-12e2ab74.js";import"./index-aa438030.js";/* empty css              */import"./Sidebar-49b18214.js";const w={class:"text-xl mb-1"},$={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},k={class:"ml-1 mt-1"},C={class:"space-y-12"},U={class:"pb-12"},B={class:"grid gap-3 grid-cols-2 pb-6 border-b md:w-2/3"},A={class:"mt-6 flex items-center justify-end gap-x-6 md:w-2/3"},Z={type:"button",class:"text-sm leading-6 text-gray-900"},j=["disabled"],S={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},M={key:1},ie={__name:"Billing",props:{config:{type:Object,required:!0}},setup(b){const _=b,s=t=>{const o=_.config.find(i=>i.key===t);return o?o.value:""},p=y(!1),e=c({billing_name:s("billing_name"),invoice_prefix:s("invoice_prefix"),billing_tax_id:s("billing_tax_id"),billing_phone_1:s("billing_phone_1"),billing_phone_2:s("billing_phone_2"),billing_address:s("billing_address"),billing_city:s("billing_city"),billing_state:s("billing_state"),billing_postal_code:s("billing_postal_code"),billing_country:s("billing_country")}),f=async()=>{e.put("/admin/settings?type=billing",{preserveScroll:!0})};return(t,o)=>(u(),V(h,null,{default:v(()=>[n("div",null,[n("h2",w,d(t.$t("Billing info")),1),n("p",$,[o[11]||(o[11]=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[n("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),n("span",k,d(t.$t("Configure the information to be seen in your invoices")),1)])]),n("form",{onSubmit:o[10]||(o[10]=x(i=>f(),["prevent"]))},[n("div",C,[n("div",U,[n("div",B,[a(m,{modelValue:l(e).billing_name,"onUpdate:modelValue":o[0]||(o[0]=i=>l(e).billing_name=i),name:t.$t("Vendor name"),error:l(e).errors.billing_name,type:"text",class:r("col-span-2")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).invoice_prefix,"onUpdate:modelValue":o[1]||(o[1]=i=>l(e).invoice_prefix=i),name:t.$t("Invoice prefix"),error:l(e).errors.invoice_prefix,type:"text",class:r("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).billing_tax_id,"onUpdate:modelValue":o[2]||(o[2]=i=>l(e).billing_tax_id=i),name:t.$t("Tax number"),error:l(e).errors.billing_tax_id,type:"text",class:r("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).billing_phone_1,"onUpdate:modelValue":o[3]||(o[3]=i=>l(e).billing_phone_1=i),name:t.$t("Phone"),error:l(e).errors.billing_phone_1,type:"text",class:r("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).billing_phone_2,"onUpdate:modelValue":o[4]||(o[4]=i=>l(e).billing_phone_2=i),name:t.$t("Phone 2"),error:l(e).errors.billing_phone_2,type:"text",class:r("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).billing_address,"onUpdate:modelValue":o[5]||(o[5]=i=>l(e).billing_address=i),name:t.$t("Address"),error:l(e).errors.billing_address,type:"text",class:r("col-span-2")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).billing_city,"onUpdate:modelValue":o[6]||(o[6]=i=>l(e).billing_city=i),name:t.$t("City"),error:l(e).errors.billing_city,type:"text",class:r("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).billing_state,"onUpdate:modelValue":o[7]||(o[7]=i=>l(e).billing_state=i),name:t.$t("State"),error:l(e).errors.billing_state,type:"text",class:r("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).billing_postal_code,"onUpdate:modelValue":o[8]||(o[8]=i=>l(e).billing_postal_code=i),name:t.$t("Zip code"),error:l(e).errors.billing_postal_code,type:"text",class:r("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:l(e).billing_country,"onUpdate:modelValue":o[9]||(o[9]=i=>l(e).billing_country=i),name:t.$t("Country"),error:l(e).errors.billing_country,type:"text",class:r("col-span-1")},null,8,["modelValue","name","error"])]),n("div",A,[n("button",Z,d(t.$t("Cancel")),1),n("button",{class:r(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":p.value}]),disabled:p.value},[p.value?(u(),g("svg",S,o[12]||(o[12]=[n("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),n("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[n("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(u(),g("span",M,d(t.$t("Save")),1))],10,j)])])])],32)]),_:1}))}};export{ie as default};
