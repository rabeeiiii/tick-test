import{o as r,c as n,a,t as s,n as l,b as m}from"./app-c050892b.js";const u=["type","value","placeholder","disabled","required"],g={key:0,class:"form-error text-[#b91c1c] text-xs"},x={__name:"FormInput",props:{modelValue:[String,Number],label:String,name:String,placeholder:String,type:String,className:String,labelClass:String,required:Boolean,error:String,disabled:Boolean},emits:["update:modelValue"],setup(e,{emit:o}){const d=e,i=o,c=t=>{i("update:modelValue",t.target.value)};return(t,b)=>(r(),n("div",{class:l(e.className)},[a("label",{for:"name",class:l(["block text-sm leading-6 text-gray-900",e.labelClass])},s(e.label??e.name),3),a("div",null,[a("input",{class:l(["block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6",e.error?"ring-[#b91c1c]":"ring-gray-300"]),type:e.type,value:d.modelValue,onInput:c,step:"any",placeholder:e.placeholder,disabled:e.disabled,required:e.required},null,42,u)]),e.error?(r(),n("div",g,s(e.error),1)):m("",!0)],2))}};export{x as _};
