import{r as h,o as a,c as s,a as l,t as d,d as f,b as p,n as b}from"./app-c050892b.js";const x={for:"name",class:"block text-sm leading-6 text-gray-900 mb-2"},v={class:"flex items-center gap-x-3"},w={key:0,class:"h-20 w-48 rounded-lg border-2 border-dashed overflow-hidden"},k=["src"],S={key:1,class:"border-2 border-dashed h-20 w-48 flex rounded-lg items-center justify-center"},V=["disabled"],y={key:0,class:"form-error text-[#b91c1c] text-xs"},L={__name:"FormImageLogo",props:{modelValue:File,name:String,label:String,className:String,error:String,disabled:Boolean,imageUrl:String},emits:["update:modelValue"],setup(e,{emit:c}){const i=h(e.imageUrl),m=c,g=r=>{const t=r.target.files[0];if(t&&t.size>5242880)alert("File size exceeds the limit. Max allowed size: 5242880 bytes"),r.target.value=null;else{const n=new FileReader;n.onload=u=>{i.value=u.target.result},m("update:modelValue",t),n.readAsDataURL(t)}};return(r,o)=>(a(),s("div",{class:b(e.className)},[l("label",x,d(e.name),1),l("div",v,[i.value?(a(),s("div",w,[l("img",{src:i.value,alt:"",class:"object-contain w-full h-full"},null,8,k)])):(a(),s("div",S,o[0]||(o[0]=[f('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z"></path><circle cx="8.5" cy="8.5" r="2.5"></circle><path d="M14.526 12.621L6 22h12.133A3.867 3.867 0 0 0 22 18.133V18c0-.466-.175-.645-.49-.99l-4.03-4.395a2 2 0 0 0-2.954.006Z"></path></g></svg>',1)]))),l("input",{type:"file",class:"",accept:".png, .jpg",id:"file-upload",onChange:g,disabled:e.disabled},null,40,V)]),e.error?(a(),s("div",y,d(e.error),1)):p("",!0)],2))}};export{L as _};
