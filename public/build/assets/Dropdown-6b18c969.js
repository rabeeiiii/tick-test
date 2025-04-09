import{D as k,r as h,m as S,V as B,q as L,R as j,S as K,H as R,W as V,o as U,f as q,g as x,a as H,j as D,u as O,J as $,Z as z,n as J}from"./app-63c352f8.js";import{w as Q,h as W,o as f,u as Z,H as w,t as E,i as Y,b as A,d as c,v as G,N as C,_,O as X}from"./hidden-1ba5fb48.js";import{y as ee,c as te,l as P,p as ae,b as ne,u as le,x as oe,a as y}from"./use-text-value-34fc6a1a.js";import{p as ue}from"./use-tree-walker-396017f0.js";var se=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(se||{}),re=(a=>(a[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a))(re||{});function ie(a){requestAnimationFrame(()=>requestAnimationFrame(a))}let N=Symbol("MenuContext");function T(a){let d=V(N,null);if(d===null){let m=new Error(`<${a} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,T),m}return d}let ce=k({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(a,{slots:d,attrs:m}){let g=h(1),e=h(null),p=h(null),r=h([]),I=h(""),i=h(null),o=h(1);function t(l=u=>u){let u=i.value!==null?r.value[i.value]:null,s=X(l(r.value.slice()),b=>f(b.dataRef.domRef)),n=u?s.indexOf(u):null;return n===-1&&(n=null),{items:s,activeItemIndex:n}}let v={menuState:g,buttonRef:e,itemsRef:p,items:r,searchQuery:I,activeItemIndex:i,activationTrigger:o,closeMenu:()=>{g.value=1,i.value=null},openMenu:()=>g.value=0,goToItem(l,u,s){let n=t(),b=oe(l===y.Specific?{focus:y.Specific,id:u}:{focus:l},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:M=>M.id,resolveDisabled:M=>M.dataRef.disabled});I.value="",i.value=b,o.value=s??1,r.value=n.items},search(l){let u=I.value!==""?0:1;I.value+=l.toLowerCase();let s=(i.value!==null?r.value.slice(i.value+u).concat(r.value.slice(0,i.value+u)):r.value).find(b=>b.dataRef.textValue.startsWith(I.value)&&!b.dataRef.disabled),n=s?r.value.indexOf(s):-1;n===-1||n===i.value||(i.value=n,o.value=1)},clearSearch(){I.value=""},registerItem(l,u){let s=t(n=>[...n,{id:l,dataRef:u}]);r.value=s.items,i.value=s.activeItemIndex,o.value=1},unregisterItem(l){let u=t(s=>{let n=s.findIndex(b=>b.id===l);return n!==-1&&s.splice(n,1),s});r.value=u.items,i.value=u.activeItemIndex,o.value=1}};return ee([e,p],(l,u)=>{var s;v.closeMenu(),Q(u,W.Loose)||(l.preventDefault(),(s=f(e))==null||s.focus())},S(()=>g.value===0)),B(N,v),te(S(()=>Z(g.value,{0:P.Open,1:P.Closed}))),()=>{let l={open:g.value===0,close:v.closeMenu};return w({ourProps:{},theirProps:a,slot:l,slots:d,attrs:m,name:"Menu"})}}}),de=k({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${E()}`}},setup(a,{attrs:d,slots:m,expose:g}){let e=T("MenuButton");g({el:e.buttonRef,$el:e.buttonRef});function p(o){switch(o.key){case c.Space:case c.Enter:case c.ArrowDown:o.preventDefault(),o.stopPropagation(),e.openMenu(),R(()=>{var t;(t=f(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(y.First)});break;case c.ArrowUp:o.preventDefault(),o.stopPropagation(),e.openMenu(),R(()=>{var t;(t=f(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(y.Last)});break}}function r(o){switch(o.key){case c.Space:o.preventDefault();break}}function I(o){a.disabled||(e.menuState.value===0?(e.closeMenu(),R(()=>{var t;return(t=f(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(o.preventDefault(),e.openMenu(),ie(()=>{var t;return(t=f(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let i=Y(S(()=>({as:a.as,type:d.type})),e.buttonRef);return()=>{var o;let t={open:e.menuState.value===0},{id:v,...l}=a,u={ref:e.buttonRef,id:v,type:i.value,"aria-haspopup":"menu","aria-controls":(o=f(e.itemsRef))==null?void 0:o.id,"aria-expanded":e.menuState.value===0,onKeydown:p,onKeyup:r,onClick:I};return w({ourProps:u,theirProps:l,slot:t,attrs:d,slots:m,name:"MenuButton"})}}}),pe=k({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${E()}`}},setup(a,{attrs:d,slots:m,expose:g}){let e=T("MenuItems"),p=h(null);g({el:e.itemsRef,$el:e.itemsRef}),ue({container:S(()=>f(e.itemsRef)),enabled:S(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function r(t){var v;switch(p.value&&clearTimeout(p.value),t.key){case c.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case c.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let l=e.items.value[e.activeItemIndex.value];(v=f(l.dataRef.domRef))==null||v.click()}e.closeMenu(),_(f(e.buttonRef));break;case c.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(y.Next);case c.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(y.Previous);case c.Home:case c.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(y.First);case c.End:case c.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(y.Last);case c.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),R(()=>{var l;return(l=f(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case c.Tab:t.preventDefault(),t.stopPropagation(),e.closeMenu(),R(()=>G(f(e.buttonRef),t.shiftKey?C.Previous:C.Next));break;default:t.key.length===1&&(e.search(t.key),p.value=setTimeout(()=>e.clearSearch(),350));break}}function I(t){switch(t.key){case c.Space:t.preventDefault();break}}let i=ae(),o=S(()=>i!==null?(i.value&P.Open)===P.Open:e.menuState.value===0);return()=>{var t,v;let l={open:e.menuState.value===0},{id:u,...s}=a,n={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(v=f(e.buttonRef))==null?void 0:v.id,id:u,onKeydown:r,onKeyup:I,role:"menu",tabIndex:0,ref:e.itemsRef};return w({ourProps:n,theirProps:s,slot:l,attrs:d,slots:m,features:A.RenderStrategy|A.Static,visible:o.value,name:"MenuItems"})}}}),be=k({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${E()}`}},setup(a,{slots:d,attrs:m,expose:g}){let e=T("MenuItem"),p=h(null);g({el:p,$el:p});let r=S(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===a.id:!1),I=ne(p),i=S(()=>({disabled:a.disabled,get textValue(){return I()},domRef:p}));L(()=>e.registerItem(a.id,i)),j(()=>e.unregisterItem(a.id)),K(()=>{e.menuState.value===0&&r.value&&e.activationTrigger.value!==0&&R(()=>{var n,b;return(b=(n=f(p))==null?void 0:n.scrollIntoView)==null?void 0:b.call(n,{block:"nearest"})})});function o(n){if(a.disabled)return n.preventDefault();e.closeMenu(),_(f(e.buttonRef))}function t(){if(a.disabled)return e.goToItem(y.Nothing);e.goToItem(y.Specific,a.id)}let v=le();function l(n){v.update(n)}function u(n){v.wasMoved(n)&&(a.disabled||r.value||e.goToItem(y.Specific,a.id,0))}function s(n){v.wasMoved(n)&&(a.disabled||r.value&&e.goToItem(y.Nothing))}return()=>{let{disabled:n}=a,b={active:r.value,disabled:n,close:e.closeMenu},{id:M,...F}=a;return w({ourProps:{id:M,ref:p,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:o,onFocus:t,onPointerenter:l,onMouseenter:l,onPointermove:u,onMousemove:u,onPointerleave:s,onMouseleave:s},theirProps:{...m,...F},slot:b,attrs:m,slots:d,name:"MenuItem"})}}});const Ie={__name:"Dropdown",props:{align:{type:String,default:"right"}},setup(a){const d=a;return(m,g)=>(U(),q(O(ce),{as:"div",class:"relative inline-block text-left"},{default:x(()=>[H("div",null,[D(O(de),{as:"template"},{default:x(()=>[$(m.$slots,"default")]),_:3})]),D(z,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:x(()=>[D(O(pe),{class:J([{"right-0 origin-top-right":d.align==="right","left-0 origin-top-left":d.align==="left","top-[-135px] left-0 origin-top-left":d.align==="top-left"},"z-10 absolute mt-2 w-32 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"])},{default:x(()=>[$(m.$slots,"items")]),_:3},8,["class"])]),_:3})]),_:3}))}};export{Ie as _,be as y};
