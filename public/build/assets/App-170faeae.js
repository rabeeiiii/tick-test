import{r as w,m as b,K as p,G as V,q as M,c as Q,j as A,a as C,J as W,n as X,F as K,o as $}from"./app-c050892b.js";import D from"./Sidebar-a8d58c80.js";import{l as J}from"./index-aa438030.js";import G from"./MobileSidebar-33703517.js";/* empty css              */import{P as H}from"./pusher-9742745c.js";function I(r){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},I(r)}function a(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function N(r,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function c(r,i,n){return i&&N(r.prototype,i),n&&N(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}function S(){return S=Object.assign||function(r){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},S.apply(this,arguments)}function l(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&O(r,i)}function g(r){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},g(r)}function O(r,i){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(r,i)}function U(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Y(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Z(r,i){if(i&&(typeof i=="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Y(r)}function h(r){var i=U();return function(){var t=g(r),e;if(i){var s=g(this).constructor;e=Reflect.construct(t,arguments,s)}else e=t.apply(this,arguments);return Z(this,e)}}var j=function(){function r(){a(this,r)}return c(r,[{key:"listenForWhisper",value:function(n,t){return this.listen(".client-"+n,t)}},{key:"notification",value:function(n){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",n)}},{key:"stopListeningForWhisper",value:function(n,t){return this.stopListening(".client-"+n,t)}}]),r}(),x=function(){function r(i){a(this,r),this.namespace=i}return c(r,[{key:"format",value:function(n){return n.charAt(0)==="."||n.charAt(0)==="\\"?n.substr(1):(this.namespace&&(n=this.namespace+"."+n),n.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(n){this.namespace=n}}]),r}(),_=function(r){l(n,r);var i=h(n);function n(t,e,s){var o;return a(this,n),o=i.call(this),o.name=e,o.pusher=t,o.options=s,o.eventFormatter=new x(o.options.namespace),o.subscribe(),o}return c(n,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(e,s){return this.on(this.eventFormatter.format(e),s),this}},{key:"listenToAll",value:function(e){var s=this;return this.subscription.bind_global(function(o,v){if(!o.startsWith("pusher:")){var d=s.options.namespace.replace(/\./g,"\\"),f=o.startsWith(d)?o.substring(d.length+1):"."+o;e(f,v)}}),this}},{key:"stopListening",value:function(e,s){return s?this.subscription.unbind(this.eventFormatter.format(e),s):this.subscription.unbind(this.eventFormatter.format(e)),this}},{key:"stopListeningToAll",value:function(e){return e?this.subscription.unbind_global(e):this.subscription.unbind_global(),this}},{key:"subscribed",value:function(e){return this.on("pusher:subscription_succeeded",function(){e()}),this}},{key:"error",value:function(e){return this.on("pusher:subscription_error",function(s){e(s)}),this}},{key:"on",value:function(e,s){return this.subscription.bind(e,s),this}}]),n}(j),ee=function(r){l(n,r);var i=h(n);function n(){return a(this,n),i.apply(this,arguments)}return c(n,[{key:"whisper",value:function(e,s){return this.pusher.channels.channels[this.name].trigger("client-".concat(e),s),this}}]),n}(_),ne=function(r){l(n,r);var i=h(n);function n(){return a(this,n),i.apply(this,arguments)}return c(n,[{key:"whisper",value:function(e,s){return this.pusher.channels.channels[this.name].trigger("client-".concat(e),s),this}}]),n}(_),te=function(r){l(n,r);var i=h(n);function n(){return a(this,n),i.apply(this,arguments)}return c(n,[{key:"here",value:function(e){return this.on("pusher:subscription_succeeded",function(s){e(Object.keys(s.members).map(function(o){return s.members[o]}))}),this}},{key:"joining",value:function(e){return this.on("pusher:member_added",function(s){e(s.info)}),this}},{key:"whisper",value:function(e,s){return this.pusher.channels.channels[this.name].trigger("client-".concat(e),s),this}},{key:"leaving",value:function(e){return this.on("pusher:member_removed",function(s){e(s.info)}),this}}]),n}(_),z=function(r){l(n,r);var i=h(n);function n(t,e,s){var o;return a(this,n),o=i.call(this),o.events={},o.listeners={},o.name=e,o.socket=t,o.options=s,o.eventFormatter=new x(o.options.namespace),o.subscribe(),o}return c(n,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(e,s){return this.on(this.eventFormatter.format(e),s),this}},{key:"stopListening",value:function(e,s){return this.unbindEvent(this.eventFormatter.format(e),s),this}},{key:"subscribed",value:function(e){return this.on("connect",function(s){e(s)}),this}},{key:"error",value:function(e){return this}},{key:"on",value:function(e,s){var o=this;return this.listeners[e]=this.listeners[e]||[],this.events[e]||(this.events[e]=function(v,d){o.name===v&&o.listeners[e]&&o.listeners[e].forEach(function(f){return f(d)})},this.socket.on(e,this.events[e])),this.listeners[e].push(s),this}},{key:"unbind",value:function(){var e=this;Object.keys(this.events).forEach(function(s){e.unbindEvent(s)})}},{key:"unbindEvent",value:function(e,s){this.listeners[e]=this.listeners[e]||[],s&&(this.listeners[e]=this.listeners[e].filter(function(o){return o!==s})),(!s||this.listeners[e].length===0)&&(this.events[e]&&(this.socket.removeListener(e,this.events[e]),delete this.events[e]),delete this.listeners[e])}}]),n}(j),B=function(r){l(n,r);var i=h(n);function n(){return a(this,n),i.apply(this,arguments)}return c(n,[{key:"whisper",value:function(e,s){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(e),data:s}),this}}]),n}(z),ie=function(r){l(n,r);var i=h(n);function n(){return a(this,n),i.apply(this,arguments)}return c(n,[{key:"here",value:function(e){return this.on("presence:subscribed",function(s){e(s.map(function(o){return o.user_info}))}),this}},{key:"joining",value:function(e){return this.on("presence:joining",function(s){return e(s.user_info)}),this}},{key:"whisper",value:function(e,s){return this.socket.emit("client event",{channel:this.name,event:"client-".concat(e),data:s}),this}},{key:"leaving",value:function(e){return this.on("presence:leaving",function(s){return e(s.user_info)}),this}}]),n}(B),m=function(r){l(n,r);var i=h(n);function n(){return a(this,n),i.apply(this,arguments)}return c(n,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(e,s){return this}},{key:"listenToAll",value:function(e){return this}},{key:"stopListening",value:function(e,s){return this}},{key:"subscribed",value:function(e){return this}},{key:"error",value:function(e){return this}},{key:"on",value:function(e,s){return this}}]),n}(j),R=function(r){l(n,r);var i=h(n);function n(){return a(this,n),i.apply(this,arguments)}return c(n,[{key:"whisper",value:function(e,s){return this}}]),n}(m),re=function(r){l(n,r);var i=h(n);function n(){return a(this,n),i.apply(this,arguments)}return c(n,[{key:"here",value:function(e){return this}},{key:"joining",value:function(e){return this}},{key:"whisper",value:function(e,s){return this}},{key:"leaving",value:function(e){return this}}]),n}(m),T=function(){function r(i){a(this,r),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",userAuthentication:{endpoint:"/broadcasting/user-auth",headers:{}},broadcaster:"pusher",csrfToken:null,bearerToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(i),this.connect()}return c(r,[{key:"setOptions",value:function(n){this.options=S(this._defaultOptions,n);var t=this.csrfToken();return t&&(this.options.auth.headers["X-CSRF-TOKEN"]=t,this.options.userAuthentication.headers["X-CSRF-TOKEN"]=t),t=this.options.bearerToken,t&&(this.options.auth.headers.Authorization="Bearer "+t,this.options.userAuthentication.headers.Authorization="Bearer "+t),n}},{key:"csrfToken",value:function(){var n;return typeof window<"u"&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:typeof document<"u"&&typeof document.querySelector=="function"&&(n=document.querySelector('meta[name="csrf-token"]'))?n.getAttribute("content"):null}}]),r}(),se=function(r){l(n,r);var i=h(n);function n(){var t;return a(this,n),t=i.apply(this,arguments),t.channels={},t}return c(n,[{key:"connect",value:function(){typeof this.options.client<"u"?this.pusher=this.options.client:this.options.Pusher?this.pusher=new this.options.Pusher(this.options.key,this.options):this.pusher=new Pusher(this.options.key,this.options)}},{key:"signin",value:function(){this.pusher.signin()}},{key:"listen",value:function(e,s,o){return this.channel(e).listen(s,o)}},{key:"channel",value:function(e){return this.channels[e]||(this.channels[e]=new _(this.pusher,e,this.options)),this.channels[e]}},{key:"privateChannel",value:function(e){return this.channels["private-"+e]||(this.channels["private-"+e]=new ee(this.pusher,"private-"+e,this.options)),this.channels["private-"+e]}},{key:"encryptedPrivateChannel",value:function(e){return this.channels["private-encrypted-"+e]||(this.channels["private-encrypted-"+e]=new ne(this.pusher,"private-encrypted-"+e,this.options)),this.channels["private-encrypted-"+e]}},{key:"presenceChannel",value:function(e){return this.channels["presence-"+e]||(this.channels["presence-"+e]=new te(this.pusher,"presence-"+e,this.options)),this.channels["presence-"+e]}},{key:"leave",value:function(e){var s=this,o=[e,"private-"+e,"private-encrypted-"+e,"presence-"+e];o.forEach(function(v,d){s.leaveChannel(v)})}},{key:"leaveChannel",value:function(e){this.channels[e]&&(this.channels[e].unsubscribe(),delete this.channels[e])}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),n}(T),oe=function(r){l(n,r);var i=h(n);function n(){var t;return a(this,n),t=i.apply(this,arguments),t.channels={},t}return c(n,[{key:"connect",value:function(){var e=this,s=this.getSocketIO();return this.socket=s(this.options.host,this.options),this.socket.on("reconnect",function(){Object.values(e.channels).forEach(function(o){o.subscribe()})}),this.socket}},{key:"getSocketIO",value:function(){if(typeof this.options.client<"u")return this.options.client;if(typeof io<"u")return io;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(e,s,o){return this.channel(e).listen(s,o)}},{key:"channel",value:function(e){return this.channels[e]||(this.channels[e]=new z(this.socket,e,this.options)),this.channels[e]}},{key:"privateChannel",value:function(e){return this.channels["private-"+e]||(this.channels["private-"+e]=new B(this.socket,"private-"+e,this.options)),this.channels["private-"+e]}},{key:"presenceChannel",value:function(e){return this.channels["presence-"+e]||(this.channels["presence-"+e]=new ie(this.socket,"presence-"+e,this.options)),this.channels["presence-"+e]}},{key:"leave",value:function(e){var s=this,o=[e,"private-"+e,"presence-"+e];o.forEach(function(v){s.leaveChannel(v)})}},{key:"leaveChannel",value:function(e){this.channels[e]&&(this.channels[e].unsubscribe(),delete this.channels[e])}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),n}(T),ue=function(r){l(n,r);var i=h(n);function n(){var t;return a(this,n),t=i.apply(this,arguments),t.channels={},t}return c(n,[{key:"connect",value:function(){}},{key:"listen",value:function(e,s,o){return new m}},{key:"channel",value:function(e){return new m}},{key:"privateChannel",value:function(e){return new R}},{key:"encryptedPrivateChannel",value:function(e){return new R}},{key:"presenceChannel",value:function(e){return new re}},{key:"leave",value:function(e){}},{key:"leaveChannel",value:function(e){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),n}(T),ae=function(){function r(i){a(this,r),this.options=i,this.connect(),this.options.withoutInterceptors||this.registerInterceptors()}return c(r,[{key:"channel",value:function(n){return this.connector.channel(n)}},{key:"connect",value:function(){this.options.broadcaster=="pusher"?this.connector=new se(this.options):this.options.broadcaster=="socket.io"?this.connector=new oe(this.options):this.options.broadcaster=="null"?this.connector=new ue(this.options):typeof this.options.broadcaster=="function"&&(this.connector=new this.options.broadcaster(this.options))}},{key:"disconnect",value:function(){this.connector.disconnect()}},{key:"join",value:function(n){return this.connector.presenceChannel(n)}},{key:"leave",value:function(n){this.connector.leave(n)}},{key:"leaveChannel",value:function(n){this.connector.leaveChannel(n)}},{key:"leaveAllChannels",value:function(){for(var n in this.connector.channels)this.leaveChannel(n)}},{key:"listen",value:function(n,t,e){return this.connector.listen(n,t,e)}},{key:"private",value:function(n){return this.connector.privateChannel(n)}},{key:"encryptedPrivate",value:function(n){return this.connector.encryptedPrivateChannel(n)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"registerInterceptors",value:function(){typeof Vue=="function"&&Vue.http&&this.registerVueRequestInterceptor(),typeof axios=="function"&&this.registerAxiosRequestInterceptor(),typeof jQuery=="function"&&this.registerjQueryAjaxSetup(),(typeof Turbo>"u"?"undefined":I(Turbo))==="object"&&this.registerTurboRequestInterceptor()}},{key:"registerVueRequestInterceptor",value:function(){var n=this;Vue.http.interceptors.push(function(t,e){n.socketId()&&t.headers.set("X-Socket-ID",n.socketId()),e()})}},{key:"registerAxiosRequestInterceptor",value:function(){var n=this;axios.interceptors.request.use(function(t){return n.socketId()&&(t.headers["X-Socket-Id"]=n.socketId()),t})}},{key:"registerjQueryAjaxSetup",value:function(){var n=this;typeof jQuery.ajax<"u"&&jQuery.ajaxPrefilter(function(t,e,s){n.socketId()&&s.setRequestHeader("X-Socket-Id",n.socketId())})}},{key:"registerTurboRequestInterceptor",value:function(){var n=this;document.addEventListener("turbo:before-fetch-request",function(t){t.detail.fetchOptions.headers["X-Socket-Id"]=n.socketId()})}}]),r}();let P=null;function ce(r,i){return P||(window.Pusher=H,P=new ae({broadcaster:"pusher",key:r,cluster:i,encrypted:!0})),P}const le={class:"md:min-h-screen flex flex-col w-full min-w-0"},he={__name:"App",setup(r){const i=w(!0),n=b(()=>p().props.auth.user),t=b(()=>p().props.config),e=b(()=>p().props.organization),s=b(()=>p().props.organizations),o=b(()=>p().props.title),v=b(()=>p().props.allowCreate),d=w(p().props.unreadMessages),f=w(null);V(()=>[p().props.flash,{deep:!0}],()=>{p().props.flash.status!=null&&J(p().props.flash.status.message,{autoClose:3e3})});const F=()=>{i.value=!i.value},E=y=>{const u=t.value.find(k=>k.key===y);return u?u.value:""},L=()=>{const u=(e.value.metadata?JSON.parse(e.value.metadata):{}).notifications||{};u!=null&&u.enable_sound&&f.value&&(f.value.src=u==null?void 0:u.tone,f.value.volume=(u==null?void 0:u.volume)||1)},q=()=>{f.value&&f.value.play().catch(y=>{console.warn("Audio playback failed:",y)})};return M(()=>{L(),ce(E("pusher_app_key"),E("pusher_app_cluster")).channel("chats.ch"+e.value.id).listen("NewChatEvent",u=>{const k=u.chat;k[0].value.deleted_at==null&&k[0].value.type==="inbound"&&(q(),d.value+=1)})}),(y,u)=>($(),Q(K,null,[A(G,{user:n.value,config:t.value,organization:e.value,organizations:s.value,title:o.value,displayCreateBtn:v.value,displayTopBar:i.value},null,8,["user","config","organization","organizations","title","displayCreateBtn","displayTopBar"]),C("div",{class:X(["md:mt-0 md:pt-0 flex md:h-screen w-full tracking-[0.3px] bg-gray-300/10",i.value===!1?"mt-0 pt-0":""])},[A(D,{user:n.value,config:t.value,organization:e.value,organizations:s.value,unreadMessages:d.value},null,8,["user","config","organization","organizations","unreadMessages"]),C("div",le,[W(y.$slots,"default",{user:n.value,toggleNavBar:F,onTestEmit:u[0]||(u[0]=(...k)=>y.doSomething&&y.doSomething(...k))})])],2),C("audio",{ref_key:"audioPlayer",ref:f,allow:"autoplay"},null,512)],64))}},be=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));export{be as A,ae as E,he as _,ce as g};
