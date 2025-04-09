import{r as C,T as V,q as $,R,c as r,a as e,j as d,g as y,u as n,t as i,h as g,k as j,b as x,n as A,o as c,i as w}from"./app-c050892b.js";import{_ as B}from"./FormInput-2566d96f.js";import{u as M,a as N}from"./ReCaptcha-55f58cbf.js";const S={class:"flex h-screen justify-center"},T={class:"flex justify-center"},F={class:"w-[20em] mt-40"},Z={class:"flex justify-center mb-5"},E=["src","alt"],L={key:1,class:"text-2xl mb-2"},U={class:"text-2xl text-center"},q={class:"text-center text-sm text-slate-500"},z={key:0,class:"text-sm bg-[green] text-white mb-2 py-2 px-1 text-center rounded"},D={key:1,class:"form-error text-[#b91c1c] text-xs"},K={class:"mt-6"},P={key:0,type:"submit",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full"},G={key:1,type:"button",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full flex justify-center"},O={__name:"Forgot",props:["flash","config","companyConfig"],setup(v){const a=v,p=C(!1),o=V({email:null,recaptcha_response:null}),l=t=>{const s=a.config.find(m=>m.key===t);return s?s.value:""},b=async()=>{if(p.value=!0,l("recaptcha_active")==="1"){const t=await k();o.recaptcha_response=t}o.post("forgot-password",{preserveScroll:!0,onFinish:()=>{p.value=!1}})},k=()=>new Promise(t=>{grecaptcha.ready(()=>{grecaptcha.execute(l("recaptcha_site_key"),{action:"submit"}).then(s=>{t(s)})})});return $(()=>{l("recaptcha_active")==="1"&&M(l("recaptcha_site_key"))}),R(()=>{N(l("recaptcha_site_key"))}),(t,s)=>{var m,u,f,h;return c(),r("div",S,[e("div",T,[e("div",F,[e("div",Z,[d(n(w),{href:"/"},{default:y(()=>[a.companyConfig.logo?(c(),r("img",{key:0,class:"max-w-[180px]",src:"/media/"+a.companyConfig.logo,alt:a.companyConfig.company_name},null,8,E)):(c(),r("h4",L,i(a.companyConfig.company_name),1))]),_:1})]),e("h1",U,i(t.$t("Reset password")),1),e("div",q,[g(i(t.$t("Remembered password?"))+" ",1),d(n(w),{href:"login",class:"text-sm text-primary-600 dark:text-primary-500 border-b hover:border-gray-500"},{default:y(()=>[g(i(t.$t("Login")),1)]),_:1})]),e("form",{onSubmit:s[1]||(s[1]=j(_=>b(),["prevent"])),class:"mt-5"},[(u=(m=a.flash)==null?void 0:m.status)!=null&&u.message?(c(),r("div",z,[e("span",null,i((h=(f=a.flash)==null?void 0:f.status)==null?void 0:h.message),1)])):x("",!0),d(B,{modelValue:n(o).email,"onUpdate:modelValue":s[0]||(s[0]=_=>n(o).email=_),name:t.$t("Email"),error:n(o).errors.email,type:"email",class:A("sm:col-span-6")},null,8,["modelValue","name","error"]),n(o).errors.recaptcha_response?(c(),r("div",D,i(n(o).errors.recaptcha_response),1)):x("",!0),e("div",K,[p.value?(c(),r("button",G,s[2]||(s[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1)]))):(c(),r("button",P,i(t.$t("Send password reset link")),1))])],32)])])])}}};export{O as default};
