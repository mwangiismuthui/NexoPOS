import{t as h,n as m,a as _}from"./bootstrap-0aabbab9.js";import{_ as d,b as v}from"./currency-47ec5b79.js";import b from"./ns-pos-confirm-popup-07a76865.js";import{h as x}from"./components-3b83ada4.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as k,a6 as l,z as c,A as i,y as p,F as y,ac as w,c as N}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as a,z as C}from"./npm~@vue~shared_-82b01912.js";import"./npm~lodash-f7a36ac5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";import"./ns-alert-popup-883dcb0b.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./ns-switch-0a4d4345.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./ns-paginate-19e98260.js";import"./npm~vue-upload-component-9e5d4563.js";import"./ns-numpad-plus-f3ffaa01.js";import"./ns-pos-loading-popup-f38cabd2.js";import"./ns-prompt-popup-64b67141.js";const E={name:"ns-notifications",data(){return{notifications:[],visible:!1,interval:null}},components:{nsCloseButton:x},mounted(){document.addEventListener("click",this.checkClickedItem),ns.websocket.enabled?Echo.private("ns.private-channel").listen("App\\Events\\NotificationDispatchedEvent",t=>{this.pushNotificationIfNew(t.notification)}).listen("App\\Events\\NotificationDeletedEvent",t=>{this.deleteNotificationIfExists(t.notification)}):this.interval=setInterval(()=>{this.loadNotifications()},15e3),this.loadNotifications()},unmounted(){clearInterval(this.interval)},methods:{__:d,timespan:h,nsNumberAbbreviate:v,pushNotificationIfNew(t){this.notifications.filter(o=>o.id===t.id).length>0||this.notifications.push(t)},deleteNotificationIfExists(t){const e=this.notifications.filter(o=>o.id===t.id);if(e.length>0){const o=this.notifications.indexOf(e[0]);this.notifications.splice(o,1)}},deleteAll(){Popup.show(b,{title:d("Confirm Your Action"),message:d("Would you like to clear all the notifications ?"),onAction:t=>{t&&m.delete("/api/notifications/all").subscribe(e=>{_.success(e.message).subscribe()})}})},checkClickedItem(t){let e;document.getElementById("notification-center")?e=document.getElementById("notification-center").contains(t.srcElement):e=!1;const o=document.getElementById("notification-button").contains(t.srcElement);!e&&!o&&this.visible&&(this.visible=!1)},loadNotifications(){m.get("/api/notifications").subscribe(t=>{this.notifications=t})},triggerLink(t){if(t.url!=="url")return window.open(t.url,"_blank")},closeNotice(t,e){m.delete(`/api/notifications/${e.id}`).subscribe(o=>{this.loadNotifications()}),t.stopPropagation()}}},I={id:"notificaton-wrapper"},A={key:0,class:"relative float-right"},B={class:"absolute -ml-6 -mt-8"},j={class:"bg-info-tertiary text-white w-8 h-8 rounded-full text-xs flex items-center justify-center"},z=i("i",{class:"las la-bell"},null,-1),L={key:0,class:"h-0 w-0",id:"notification-center"},P={class:"absolute left-0 top-0 sm:relative w-screen zoom-out-entrance anim-duration-300 h-5/7-screen sm:w-64 sm:h-108 flex flex-row-reverse"},V={class:"z-50 sm:rounded-lg shadow-lg h-full w-full md:mt-2 overflow-y-hidden flex flex-col"},D=i("h3",{class:"font-semibold hover:text-info-primary"},"Close",-1),F=[D],S={class:"overflow-y-auto flex flex-col flex-auto"},H=["onClick"],O={class:"flex items-center justify-between"},U={class:"font-semibold"},W={class:"py-1 text-sm"},Y={class:"flex justify-end"},q={class:"text-xs date"},G={key:0,class:"h-full w-full flex items-center justify-center"},J={class:"flex flex-col items-center"},K=i("i",{class:"las la-laugh-wink text-5xl text-primary"},null,-1),M={class:"text-secondary text-sm"},Q={class:"cursor-pointer clear-all"};function R(t,e,o,T,s,r){const u=k("ns-close-button");return l(),c("div",I,[i("div",{id:"notification-button",onClick:e[0]||(e[0]=n=>s.visible=!s.visible),class:C([s.visible?"panel-visible border-0 shadow-lg":"border panel-hidden","hover:shadow-lg hover:border-opacity-0 rounded-full h-12 w-12 cursor-pointer font-bold text-2xl justify-center items-center flex"])},[s.notifications.length>0?(l(),c("div",A,[i("div",B,[i("div",j,a(r.nsNumberAbbreviate(s.notifications.length,"abbreviate")),1)])])):p("",!0),z],2),s.visible?(l(),c("div",L,[i("div",P,[i("div",V,[i("div",{onClick:e[1]||(e[1]=n=>s.visible=!1),class:"sm:hidden p-2 cursor-pointer flex items-center justify-center border-b border-gray-200"},F),i("div",S,[(l(!0),c(y,null,w(s.notifications,n=>(l(),c("div",{key:n.id,class:"notification-card notice border-b"},[i("div",{class:"p-2 cursor-pointer",onClick:f=>r.triggerLink(n)},[i("div",O,[i("h1",U,a(n.title),1),N(u,{onClick:f=>r.closeNotice(f,n)},null,8,["onClick"])]),i("p",W,a(n.description),1),i("div",Y,[i("span",q,a(r.timespan(n.updated_at)),1)])],8,H)]))),128)),s.notifications.length===0?(l(),c("div",G,[i("div",J,[K,i("p",M,a(r.__("Nothing to care about !")),1)])])):p("",!0)]),i("div",Q,[i("h3",{onClick:e[2]||(e[2]=n=>r.deleteAll()),class:"text-sm p-2 flex items-center justify-center w-full font-semibold"},a(r.__("Clear All")),1)])])])])):p("",!0)])}const ti=g(E,[["render",R]]);export{ti as default};
