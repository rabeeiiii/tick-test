import{D as ct,r as y,G as ft,m as yt,o as u,c as r,j as s,u as n,a as l,f as V,n as i,t as m,g as c,h as x,d as xt,b as p,F as gt,e as _t,w as Vt,an as Tt}from"./app-c050892b.js";import{_ as Bt,E as ht}from"./ellipsis-27f89285.js";import{b as Ut,u as kt,c as T,d as B}from"./vue-flow-core-43fce45d.js";import{_ as Ct}from"./Menubar.vue_vue_type_script_setup_true_lang-db08026a.js";import{_ as N}from"./MenubarItem.vue_vue_type_script_setup_true_lang-00273743.js";import{_ as Lt}from"./MenubarContent.vue_vue_type_script_setup_true_lang-69b841ce.js";import{_ as Nt}from"./MenubarMenu.vue_vue_type_script_setup_true_lang-1981cbba.js";import{_ as wt}from"./MenubarTrigger.vue_vue_type_script_setup_true_lang-7c78496d.js";import{_ as b}from"./FormInput-2566d96f.js";import{_ as Rt}from"./FormSelect-ad20e364.js";import{_ as $t}from"./FormTextArea-ff1d78d7.js";import Et from"./FlowMedia-ffc3ddac.js";import{_ as Dt}from"./_plugin-vue_export-helper-c27b6911.js";import"./createLucideIcon-4e9e2fa9.js";import"./index-bff63384.js";import"./utils-836e31d3.js";import"./index-6bcca514.js";import"./hidden-7c22a505.js";import"./use-text-value-ebf16ccd.js";import"./use-outside-click-24df5687.js";import"./use-resolve-button-type-e9e046d3.js";const Mt={class:"rounded-sm border border-gray-200 bg-white p-3 shadow-md"},Pt={class:"flex flex-col gap-y-2"},St={class:"flex justify-between items-center"},It={class:"flex gap-x-2"},qt={class:"flex flex-col gap-y-1"},zt={key:1,class:"text-base"},At={key:0,class:"flex items-center gap-x-2 bg-red-500 text-white rounded-md px-2 py-2"},Ht={class:"mb-4"},Ft={key:1,class:"mb-4"},Ot={class:"mb-4"},jt={class:"mb-4"},Zt={class:"mb-4"},Gt={class:"flex space-x-4"},Wt=["value"],Jt={class:"ml-2 text-gray-700"},Kt={key:3,class:"border rounded p-3"},Qt={class:"mb-4 relative"},Xt={class:"text-xs text-gray-500"},Yt={class:"mb-4 relative"},te={class:"text-xs text-gray-500"},ee={class:"mb-2 relative"},le={class:"text-xs text-gray-500"},ae={key:4,class:"border rounded p-3"},oe={class:"mb-4"},se={class:"mb-4"},g=20,ne=ct({__name:"Buttons-node",props:{id:{},type:{},selected:{type:Boolean},connectable:{type:[Boolean,Number,String,Function]},position:{},dimensions:{},label:{},isValidTargetPos:{type:Function},isValidSourcePos:{type:Function},parent:{},parentNodeId:{},dragging:{type:Boolean},resizing:{type:Boolean},zIndex:{},targetPosition:{},sourcePosition:{},dragHandle:{},data:{},events:{}},setup(st){var $,E,D,M,P,S,I,q,z,A,H,F,O,j,Z,G,W,J,K,Q,X,Y,tt,et,lt,at,ot;const d=st,U=y("Interactive Buttons"),nt=y(d.data.uuid),e=y({type:"interactive buttons",headerType:((E=($=d.data.metadata)==null?void 0:$.fields)==null?void 0:E.headerType)||"none",headerText:((M=(D=d.data.metadata)==null?void 0:D.fields)==null?void 0:M.headerText)||"",headerMedia:((S=(P=d.data.metadata)==null?void 0:P.fields)==null?void 0:S.headerMedia)||[],body:((q=(I=d.data.metadata)==null?void 0:I.fields)==null?void 0:q.body)||"",footer:((A=(z=d.data.metadata)==null?void 0:z.fields)==null?void 0:A.footer)||"",buttonType:((F=(H=d.data.metadata)==null?void 0:H.fields)==null?void 0:F.buttonType)||"buttons",buttons:{button1:((Z=(j=(O=d.data.metadata)==null?void 0:O.fields)==null?void 0:j.buttons)==null?void 0:Z.button1)||"",button2:((J=(W=(G=d.data.metadata)==null?void 0:G.fields)==null?void 0:W.buttons)==null?void 0:J.button2)||"",button3:((X=(Q=(K=d.data.metadata)==null?void 0:K.fields)==null?void 0:Q.buttons)==null?void 0:X.button3)||""},ctaUrlButton:{displayText:((et=(tt=(Y=d.data.metadata)==null?void 0:Y.fields)==null?void 0:tt.ctaUrlButton)==null?void 0:et.displayText)||"",url:((ot=(at=(lt=d.data.metadata)==null?void 0:lt.fields)==null?void 0:at.ctaUrlButton)==null?void 0:ot.url)||""}}),ut=y([{label:"Reply Buttons",value:"buttons"},{label:"CTA URL Button",value:"cta_url"}]),dt=y([{value:"none",label:"None"},{value:"text",label:"Text"},{value:"image",label:"Image"},{value:"video",label:"Video"},{value:"audio",label:"Audio"},{value:"document",label:"Document"}]);ft(e,o=>{f.node.data.metadata.fields={...o},o.buttons.button1||v("a"),o.buttons.button2||v("b"),o.buttons.button3||v("c"),o.buttonType=="cta_url"?(v("a"),v("b"),v("c")):v("d")},{deep:!0});const k=(o,t)=>t.length<=3,C=y(!1),f=Ut(),{removeNodes:it,nodes:rt,addNodes:mt,removeEdges:w,edges:R}=kt();function v(o){R.value.filter(a=>a.sourceHandle===o).forEach(a=>w(a.id))}function pt(){R.value.filter(o=>o.source===f.id||o.target===f.id).forEach(o=>w(o.id)),it(f.id)}function bt(){const{type:o,position:t,label:a,data:_}=f.node,h={id:(rt.value.length+1).toString(),type:o,position:{x:t.x+100,y:t.y+100},label:a,data:_};mt(h)}const vt=yt(()=>{const o=e.value.buttons.button1!==""||e.value.buttons.button2!==""||e.value.buttons.button3!=="",t=e.value.ctaUrlButton.displayText!==""&&e.value.ctaUrlButton.url!=="",a=_=>/^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/.test(_);return e.value.headerType!==""&&e.value.headerType==="text"&&e.value.headerText===""||e.value.headerType!==""&&e.value.headerType!=="text"&&e.value.headerType!=="none"&&e.value.headerMedia.length===0||e.value.body===""||e.value.buttonType==="buttons"&&!o||e.value.buttonType==="cta_url"&&(!t||!a(e.value.ctaUrlButton.url))});function L(o){return o.length}return(o,t)=>(u(),r("div",Mt,[s(n(B),{type:"target",position:n(T).Left},null,8,["position"]),l("div",Pt,[l("div",St,[l("div",It,[t[14]||(t[14]=l("img",{src:Bt,class:"mt-1 h-4 w-4",alt:"LLM icon"},null,-1)),l("div",qt,[C.value?(u(),V(b,{key:0,modelValue:U.value,"onUpdate:modelValue":t[0]||(t[0]=a=>U.value=a),name:"",type:"text",class:i("col-span-4"),onBlur:t[1]||(t[1]=()=>C.value=!1)},null,8,["modelValue"])):(u(),r("h3",zt,m(U.value),1))])]),s(n(Ct),{class:"border-none"},{default:c(()=>[s(n(Nt),null,{default:c(()=>[s(n(wt),null,{default:c(()=>[s(n(ht))]),_:1}),s(n(Lt),null,{default:c(()=>[s(n(N),{onClick:bt},{default:c(()=>t[15]||(t[15]=[x(" Duplicated ")])),_:1}),s(n(N),{onClick:pt},{default:c(()=>t[16]||(t[16]=[x(" Delete ")])),_:1}),s(n(N),{onClick:t[2]||(t[2]=a=>C.value=!0)},{default:c(()=>t[17]||(t[17]=[x(" Rename ")])),_:1})]),_:1})]),_:1})]),_:1})]),vt.value?(u(),r("div",At,t[18]||(t[18]=[xt('<span data-v-c2f02c53><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-c2f02c53><g fill="none" data-v-c2f02c53><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" data-v-c2f02c53></path><path fill="currentColor" d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1" data-v-c2f02c53></path></g></svg></span><span class="text-sm" data-v-c2f02c53>Please fill all the required fields</span>',2)]))):p("",!0),t[31]||(t[31]=l("span",{class:"text-sm text-gray-500"},"Send interactive buttons or a call to action button to your recipients.",-1)),l("div",Ht,[t[19]||(t[19]=l("label",{class:"text-sm mb-2"},"Header (Optional)",-1)),s(Rt,{modelValue:e.value.headerType,"onUpdate:modelValue":t[3]||(t[3]=a=>e.value.headerType=a),name:"",type:"text",optionClassName:"h-32",options:dt.value,class:i("col-span-4")},null,8,["modelValue","options"])]),e.value.headerType=="text"?(u(),r("div",Ft,[t[20]||(t[20]=l("label",{class:"text-sm mb-2"},[l("span",{class:"text-red-500"},"*"),x(" Header Text")],-1)),s(b,{modelValue:e.value.headerText,"onUpdate:modelValue":t[4]||(t[4]=a=>e.value.headerText=a),name:"",placeholder:"Enter header text",type:"text",class:i("col-span-4")},null,8,["modelValue"])])):p("",!0),e.value.headerType!="text"&&e.value.headerType!="none"?(u(),V(Et,{key:2,modelValue:e.value.headerMedia,"onUpdate:modelValue":t[5]||(t[5]=a=>e.value.headerMedia=a),type:e.value.headerType,uuid:nt.value,nodeId:n(f).id},null,8,["modelValue","type","uuid","nodeId"])):p("",!0),l("div",Ot,[t[21]||(t[21]=l("label",{class:"text-sm mb-2"},[l("span",{class:"text-red-500"},"*"),x(" Body")],-1)),s($t,{modelValue:e.value.body,"onUpdate:modelValue":t[6]||(t[6]=a=>e.value.body=a),placeholder:"Enter the main message for this message type",name:"",type:"text",class:i("col-span-4")},null,8,["modelValue"])]),l("div",jt,[t[22]||(t[22]=l("label",{class:"text-sm mb-2"},"Footer Text (Optional)",-1)),s(b,{modelValue:e.value.footer,"onUpdate:modelValue":t[7]||(t[7]=a=>e.value.footer=a),name:"",placeholder:"Enter footer text",type:"text",class:i("col-span-4")},null,8,["modelValue"])]),l("div",Zt,[t[23]||(t[23]=l("label",{class:"text-sm mb-2"},"Button type:",-1)),l("div",Gt,[(u(!0),r(gt,null,_t(ut.value,(a,_)=>(u(),r("label",{key:_,class:"inline-flex items-center cursor-pointer text-sm"},[Vt(l("input",{type:"radio",value:a.value,"onUpdate:modelValue":t[8]||(t[8]=h=>e.value.buttonType=h),class:"form-radio text-blue-500 focus:ring-0 transition duration-150 ease-in-out"},null,8,Wt),[[Tt,e.value.buttonType]]),l("span",Jt,m(a.label),1)]))),128))])]),e.value.buttonType=="buttons"?(u(),r("div",Kt,[t[27]||(t[27]=l("label",{class:"mb-2"},[l("span",{class:"text-red-500"},"*"),x(" Reply Buttons (atleast 1 button)")],-1)),l("div",Qt,[t[24]||(t[24]=l("label",{class:"text-sm mb-2"},"Button 1 Label",-1)),s(b,{modelValue:e.value.buttons.button1,"onUpdate:modelValue":t[9]||(t[9]=a=>e.value.buttons.button1=a),maxLength:g,type:"text",class:i("col-span-4")},null,8,["modelValue"]),l("span",Xt,m(L(e.value.buttons.button1))+" / "+m(g),1),e.value.buttons.button1?(u(),V(n(B),{key:0,id:"a",type:"source",position:n(T).Right,style:{right:"-25px"},connectable:k},null,8,["position"])):p("",!0)]),l("div",Yt,[t[25]||(t[25]=l("label",{class:"text-sm mb-2"},"Button 2 Label",-1)),s(b,{modelValue:e.value.buttons.button2,"onUpdate:modelValue":t[10]||(t[10]=a=>e.value.buttons.button2=a),maxLength:g,type:"text",class:i("col-span-4")},null,8,["modelValue"]),l("span",te,m(L(e.value.buttons.button2))+" / "+m(g),1),e.value.buttons.button2?(u(),V(n(B),{key:0,id:"b",type:"source",position:n(T).Right,style:{right:"-25px"},connectable:k},null,8,["position"])):p("",!0)]),l("div",ee,[t[26]||(t[26]=l("label",{class:"text-sm mb-2"},"Button 3 Label",-1)),s(b,{modelValue:e.value.buttons.button3,"onUpdate:modelValue":t[11]||(t[11]=a=>e.value.buttons.button3=a),maxLength:g,type:"text",class:i("col-span-4")},null,8,["modelValue"]),l("span",le,m(L(e.value.buttons.button3))+" / "+m(g),1),e.value.buttons.button3?(u(),V(n(B),{key:0,id:"c",type:"source",position:n(T).Right,style:{right:"-25px"},connectable:k},null,8,["position"])):p("",!0)])])):p("",!0),e.value.buttonType=="cta_url"?(u(),r("div",ae,[t[30]||(t[30]=l("label",{class:"text-sm mb-2"},"CTA Button",-1)),l("div",oe,[t[28]||(t[28]=l("label",{class:"text-sm mb-2"},"Display text",-1)),s(b,{modelValue:e.value.ctaUrlButton.displayText,"onUpdate:modelValue":t[12]||(t[12]=a=>e.value.ctaUrlButton.displayText=a),type:"text",class:i("col-span-4")},null,8,["modelValue"])]),l("div",se,[t[29]||(t[29]=l("label",{class:"text-sm mb-2"},"Button URL",-1)),s(b,{modelValue:e.value.ctaUrlButton.url,"onUpdate:modelValue":t[13]||(t[13]=a=>e.value.ctaUrlButton.url=a),type:"url",class:i("col-span-4")},null,8,["modelValue"])]),s(n(B),{id:"d",type:"source",position:n(T).Right},null,8,["position"])])):p("",!0)])]))}});const Le=Dt(ne,[["__scopeId","data-v-c2f02c53"]]);export{Le as default};
