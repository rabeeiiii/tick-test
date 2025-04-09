import{u as E,P as oe,_ as ne,C as ae,a as se}from"./vue-flow-core-43fce45d.js";import{D as T,m as ie,a3 as M,o as n,c as v,J as r,a as w,u as l,f as h,b as p,y as le,I as Y,g as C,F as re,j as k,_ as D,r as de,a4 as H,q as ce,G as X,H as ue}from"./app-c050892b.js";import{_ as fe}from"./start-node.vue_vue_type_script_setup_true_lang-2a306519.js";import ve from"./Buttons-node-45a62821.js";import he from"./List-node-2977dbc8.js";import{_ as me}from"./Media-node.vue_vue_type_script_setup_true_lang-1138f211.js";import{_ as pe}from"./Text-node.vue_vue_type_script_setup_true_lang-b68765b9.js";var f=(e=>(e.Lines="lines",e.Dots="dots",e))(f||{});const U=function({dimensions:e,size:o,color:a}){return Y("path",{stroke:a,"stroke-width":o,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`})},j=function({radius:e,color:o}){return Y("circle",{cx:e,cy:e,r:e,fill:o})};f.Lines+"",f.Dots+"";const we={[f.Dots]:"#81818a",[f.Lines]:"#eee"},ge=["id","x","y","width","height","patternTransform"],_e={key:2,height:"100",width:"100"},$e=["fill"],ye=["x","y","fill"],ze={name:"Background",compatConfig:{MODE:3}},Ce=T({...ze,props:{id:{},variant:{default:()=>f.Dots},gap:{default:20},size:{default:1},lineWidth:{default:1},patternColor:{},color:{},bgColor:{},height:{default:100},width:{default:100},x:{default:0},y:{default:0},offset:{default:2}},setup(e){const{id:o,viewport:a}=E(),i=ie(()=>{const[t,_]=Array.isArray(e.gap)?e.gap:[e.gap,e.gap],$=[t*a.value.zoom||1,_*a.value.zoom||1],m=e.size*a.value.zoom,V=e.variant===f.Dots?[m/e.offset,m/e.offset]:[$[0]/e.offset,$[1]/e.offset];return{scaledGap:$,offset:V,size:m}}),c=M(()=>`pattern-${o}${e.id?`-${e.id}`:""}`),g=M(()=>e.color||e.patternColor||we[e.variant||f.Dots]);return(t,_)=>(n(),v("svg",{class:"vue-flow__background vue-flow__container",style:le({height:`${t.height>100?100:t.height}%`,width:`${t.width>100?100:t.width}%`})},[r(t.$slots,"pattern-container",{id:c.value},()=>[w("pattern",{id:c.value,x:l(a).x%i.value.scaledGap[0],y:l(a).y%i.value.scaledGap[1],width:i.value.scaledGap[0],height:i.value.scaledGap[1],patternTransform:`translate(-${i.value.offset[0]},-${i.value.offset[1]})`,patternUnits:"userSpaceOnUse"},[r(t.$slots,"pattern",{},()=>[t.variant===l(f).Lines?(n(),h(l(U),{key:0,size:t.lineWidth,color:g.value,dimensions:i.value.scaledGap},null,8,["size","color","dimensions"])):t.variant===l(f).Dots?(n(),h(l(j),{key:1,color:g.value,radius:i.value.size/t.offset},null,8,["color","radius"])):p("",!0),t.bgColor?(n(),v("svg",_e,[w("rect",{width:"100%",height:"100%",fill:t.bgColor},null,8,$e)])):p("",!0)])],8,ge)]),w("rect",{x:t.x,y:t.y,width:"100%",height:"100%",fill:`url(#${c.value})`},null,8,ye),r(t.$slots,"default",{id:c.value})],4))}}),ke={name:"ControlButton",compatConfig:{MODE:3}},Ve=(e,o)=>{const a=e.__vccOpts||e;for(const[i,c]of o)a[i]=c;return a},be={class:"vue-flow__controls-button"};function De(e,o,a,i,c,g){return n(),v("button",be,[r(e.$slots,"default")])}const O=Ve(ke,[["render",De]]),He={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},Me=w("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"},null,-1),Be=[Me];function Ie(e,o){return n(),v("svg",He,Be)}const Ne={render:Ie},Oe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5"},Le=w("path",{d:"M0 0h32v4.2H0z"},null,-1),xe=[Le];function Se(e,o){return n(),v("svg",Oe,xe)}const Pe={render:Se},Fe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30"},Ae=w("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"},null,-1),Ee=[Ae];function Te(e,o){return n(),v("svg",Fe,Ee)}const Ze={render:Te},Ge={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},Re=w("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"},null,-1),Xe=[Re];function Ye(e,o){return n(),v("svg",Ge,Xe)}const Ue={render:Ye},je={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},Je=w("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z"},null,-1),We=[Je];function qe(e,o){return n(),v("svg",je,We)}const Ke={render:qe},Qe={name:"Controls",compatConfig:{MODE:3}},et=T({...Qe,props:{showZoom:{type:Boolean,default:!0},showFitView:{type:Boolean,default:!0},showInteractive:{type:Boolean,default:!0},fitViewParams:{},position:{default:()=>oe.BottomLeft}},emits:["zoomIn","zoomOut","fitView","interactionChange"],setup(e,{emit:o}){const{nodesDraggable:a,nodesConnectable:i,elementsSelectable:c,setInteractive:g,zoomIn:t,zoomOut:_,fitView:$,viewport:m,minZoom:V,maxZoom:L}=E(),z=M(()=>a.value||i.value||c.value),x=M(()=>m.value.zoom<=V.value),Z=M(()=>m.value.zoom>=L.value);function b(){t(),o("zoomIn")}function B(){_(),o("zoomOut")}function I(){$(e.fitViewParams),o("fitView")}function S(){g(!z.value),o("interactionChange",!z.value)}return(s,P)=>(n(),h(l(ne),{class:"vue-flow__controls",position:s.position},{default:C(()=>[r(s.$slots,"top"),s.showZoom?(n(),v(re,{key:0},[r(s.$slots,"control-zoom-in",{},()=>[k(O,{class:"vue-flow__controls-zoomin",disabled:Z.value,onClick:b},{default:C(()=>[r(s.$slots,"icon-zoom-in",{},()=>[(n(),h(D(l(Ne))))])]),_:3},8,["disabled"])]),r(s.$slots,"control-zoom-out",{},()=>[k(O,{class:"vue-flow__controls-zoomout",disabled:x.value,onClick:B},{default:C(()=>[r(s.$slots,"icon-zoom-out",{},()=>[(n(),h(D(l(Pe))))])]),_:3},8,["disabled"])])],64)):p("",!0),s.showFitView?r(s.$slots,"control-fit-view",{key:1},()=>[k(O,{class:"vue-flow__controls-fitview",onClick:I},{default:C(()=>[r(s.$slots,"icon-fit-view",{},()=>[(n(),h(D(l(Ze))))])]),_:3})]):p("",!0),s.showInteractive?r(s.$slots,"control-interactive",{key:2},()=>[s.showInteractive?(n(),h(O,{key:0,class:"vue-flow__controls-interactive",onClick:S},{default:C(()=>[z.value?r(s.$slots,"icon-unlock",{key:0},()=>[(n(),h(D(l(Ke))))]):p("",!0),z.value?p("",!0):r(s.$slots,"icon-lock",{key:1},()=>[(n(),h(D(l(Ue))))])]),_:3})):p("",!0)]):p("",!0),r(s.$slots,"default")]),_:3},8,["position"]))}}),tt={nodes:[{type:"LLM",data:{title:"LLM",output:[{name:"output1",type:"",description:"balabala"}]},events:{},id:"1",position:{x:-413.62574973269915,y:110.25705825948319},label:"LLM node"},{type:"code",data:{title:"code",output:[{name:"key0",type:"String",description:"just for test"}]},events:{},id:"2",position:{x:262.70018202243125,y:-104.44788021583054},label:"code node"},{type:"knowledge",data:{title:"knowledge",output:[{name:"output"}]},events:{},id:"3",position:{x:939.64275630104,y:51.1990333957562},label:"knowledge node"}],edges:[{sourceHandle:"1__handle-right",targetHandle:"2__handle-left",type:"default",source:"1",target:"2",data:{},events:{},id:"vueflow__edge-11__handle-right-22__handle-left",sourceX:200.40522146581822,sourceY:488.25689832215323,targetX:253.70017309626013,targetY:364.55198874414043},{sourceHandle:"2__handle-right",targetHandle:"3__handle-left",type:"default",source:"2",target:"3",data:{},events:{},id:"vueflow__edge-22__handle-right-33__handle-left",sourceX:871.6999267177814,sourceY:364.55198874414043,targetX:930.6427473748689,targetY:342.1989975362437}],position:[-151.90460217317343,183.68497815279642],zoom:.5802807591037111,viewport:{x:-151.90460217317343,y:183.68497815279642,zoom:.5802807591037111}},ct=T({__name:"main-canvas",props:["uuid","flow"],emits:["updateStatus","updatePayload"],setup(e,{emit:o}){const a=e,i=de(),c={start:H(fe),list:H(he),buttons:H(ve),media:H(me),text:H(pe)},{findNode:g,nodes:t,edges:_,viewport:$,addNodes:m,addEdges:V,project:L,vueFlowRef:z,onConnect:x,onNodeDragStop:Z,setNodes:b,setEdges:B,setViewport:I,onViewportChange:S}=E();ce(()=>{if(a.flow.metadata){const d=JSON.parse(a.flow.metadata);b(d.nodes||[]),B(d.edges||[]),I(d.viewport||[])}else b([{id:"1",type:"start",label:"start",position:{x:25,y:10},data:{uuid:a.uuid,title:"start",metadata:{fields:[]}}}])}),X([t,_],()=>{P()},{deep:!0}),x(d=>{V(d)}),S(()=>{P()});const s=o,P=()=>{s("updatePayload",JSON.stringify({nodes:t.value,edges:_.value,viewport:$.value}))};function J(d){var R;const y=(R=d.dataTransfer)==null?void 0:R.getData("application/vueflow");if(y==="workflow"){const{nodes:u,edges:A,position:N,zoom:Q}=tt,[ee=0,te=0]=N;b(u),B(A),I({x:ee,y:te,zoom:Q||0});return}const{left:F,top:q}=z.value.getBoundingClientRect(),K=L({x:d.clientX-F,y:d.clientY-q}),G={id:((t.value.length?Math.max(...t.value.map(u=>parseInt(u.id,10)))+1:1)+1).toString(),type:y,position:K,label:`${y} node`,data:{uuid:a.uuid,title:y,metadata:{fields:[]}}};m([G]),ue(()=>{const u=g(G.id),A=X(()=>u.dimensions,N=>{N.width>0&&N.height>0&&u&&(u.position={x:u.position.x-u.dimensions.width/2,y:u.position.y-u.dimensions.height/2},A())},{deep:!0,flush:"post"})})}function W(d){d.preventDefault(),d.dataTransfer&&(d.dataTransfer.dropEffect="move")}return(d,y)=>(n(),v("div",{class:"relative h-full w-full",id:"main-canvas",onDrop:J,onDragover:W},[k(l(se),{modelValue:i.value,"onUpdate:modelValue":y[0]||(y[0]=F=>i.value=F),"node-types":c,"connection-mode":l(ae).Strict},{default:C(()=>[k(l(et)),k(l(Ce))]),_:1},8,["modelValue","connection-mode"])],32))}});export{ct as _};
