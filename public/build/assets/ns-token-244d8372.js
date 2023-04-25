import{e as P,p as L,F as N,a as f,n as b}from"./bootstrap-0aabbab9.js";import{_ as d}from"./currency-47ec5b79.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./npm~moment-fbc5633a.js";import"./ns-switch-0a4d4345.js";import S from"./ns-pos-confirm-popup-07a76865.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~vue-upload-component-9e5d4563.js";import"./npm~lodash-f7a36ac5.js";import{b as V}from"./npm~qrcode-5668103e.js";import{m as F}from"./npm~@vue~runtime-dom_-a668b91e.js";import{ae as p,a6 as i,z as l,A as e,az as U,c as u,ax as _,H as m,F as v,ac as g,x as q,y}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as o}from"./npm~@vue~shared_-82b01912.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~sortablejs-9be29f79.js";import"./npm~encode-utf8-f813de00.js";import"./npm~dijkstrajs-59d11638.js";const B={name:"ns-token-output",props:["popup"],data(){return{accessToken:"",qrCodeSRC:""}},mounted(){this.accessToken=this.popup.params.result.data.token.plainTextToken,this.popupCloser(),setTimeout(()=>{this.$refs.token.select(),this.$refs.token.setSelectionRange(0,99999),this.setQRCode()},100)},methods:{__:d,popupResolver:P,popupCloser:L,setQRCode(){V.toDataURL(this.accessToken).then(n=>{this.qrCodeSRC=n}).catch(n=>{console.log(n)})},close(){navigator.clipboard.writeText(this.$refs.token.value),this.popupResolver(!0)}}},j={id:"alert-popup",class:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg"},D={class:"flex items-center justify-center flex-col flex-auto p-4"},I={class:"text-3xl font-body mb-4"},O=["src"],Q={class:"text-xs text-secondary py-2"},Y=e("br",null,null,-1),z={class:"py-4 text-center"},E={class:"action-buttons flex border-t justify-end items-center p-2"};function H(n,s,c,w,r,t){const x=p("ns-button");return i(),l("div",j,[e("div",D,[e("h2",I,o(t.__("API Token")),1),e("img",{id:"token-qrcode",class:"border-2 w-64 h-64",src:r.qrCodeSRC},null,8,O),e("p",Q,o(t.__("This QR code is provided to ease authentication on external applications.")),1),Y,e("p",z,o(t.__(`The API token has been generated. Make sure to copy this code on a safe place as it will only be displayed once.
                If you loose this token, you'll need to revoke it and generate a new one.`)),1),U(e("input",{ref:"token","onUpdate:modelValue":s[0]||(s[0]=h=>r.accessToken=h),readonly:"",type:"text",class:"my-2 p-2 w-full border-2 rounded border-input-edge bg-input-background"},null,512),[[F,r.accessToken]])]),e("div",E,[u(x,{onClick:s[1]||(s[1]=h=>t.close()),type:"info"},{default:_(()=>[m(o(t.__("Copy And Close")),1)]),_:1})])])}const M=T(B,[["render",H]]),G={name:"ns-token",data(){return{validation:new N,tokens:[],isLoading:!1,fields:[{type:"text",label:d("Token Name"),name:"name",description:d("This will be used to identifier the token."),validation:"required"}]}},methods:{__:d,createToken(){if(!this.validation.validateFields(this.fields))return f.error(d("Unable to proceed, the form is not valid.")).subscribe();b.post("/api/users/create-token",this.validation.extractFields(this.fields)).subscribe(async n=>{try{await new Promise((s,c)=>{Popup.show(M,{resolve:s,reject:c,result:n})}),this.loadTokens()}catch(s){console.log(s)}})},revokeToken(n){Popup.show(S,{title:d("Confirm Your Action"),message:d("You're about to delete a token that might be in use by an external app. Deleting will prevent that app from accessing the API. Would you like to proceed ?"),onAction:s=>{s&&b.delete(`/api/users/tokens/${n.id}`).subscribe({next:c=>{this.loadTokens(),f.success(c.message).subscribe()},error:c=>{f.error(c.message||"An unexpected error occured.").subscribe()}})}})},loadTokens(){this.isLoading=!0,b.get("/api/users/tokens").subscribe({next:n=>{this.isLoading=!1,this.tokens=n},error:n=>{f.error("Unable to load the token. An unexpected error occured.").subscribe()}})}},mounted(){this.fields=this.validation.createFields(this.fields),this.loadTokens()}},W={class:"-mx-2"},J={class:"px-2 w-full md:w-1/2"},K={class:"mb-4"},X={class:"my-2"},Z={class:"flex justify-end"},$={class:"py-2 border-b-4 text-center border-box-edge text-xl"},ee={key:0},te={class:"flex flex-col"},oe={class:"text-lg"},se={class:"text-xs text-tertiary"},ne={class:"text-xs text-tertiary"},re={class:"text-xs text-tertiary"},ie={key:1,class:"my-4"},ae={key:2,class:"mt-2"},le={class:"text-center text-tertiary text-sm my-4"};function ce(n,s,c,w,r,t){const x=p("ns-notice"),h=p("ns-field"),C=p("ns-button"),R=p("ns-close-button"),A=p("ns-spinner");return i(),l("div",W,[e("div",J,[e("div",K,[u(x,null,{title:_(()=>[m(o(t.__("About Token")),1)]),description:_(()=>[m(o(t.__(`Token are used to provide a secure access to NexoPOS resources without having to share your personal username and password.
                       Once generated, they doens't expires until you explicitely revoke it.`)),1)]),_:1})]),e("div",X,[(i(!0),l(v,null,g(r.fields,(a,k)=>(i(),q(h,{key:k,field:a},null,8,["field"]))),128)),e("div",Z,[u(C,{onClick:s[0]||(s[0]=a=>t.createToken()),type:"info"},{default:_(()=>[m(o(t.__("Save Token")),1)]),_:1})])]),e("div",null,[e("h3",$,o(t.__("Generated Tokens")),1),r.tokens.length>0&&!r.isLoading?(i(),l("ul",ee,[(i(!0),l(v,null,g(r.tokens,(a,k)=>(i(),l("li",{key:k,class:"p-2 border-b flex justify-between items-center border-box-edge"},[e("div",te,[e("h4",oe,o(a.name),1),e("div",null,[e("ul",null,[e("li",null,[e("span",se,o(t.__("Created"))+": "+o(a.created_at),1)]),e("li",null,[e("span",ne,o(t.__("Last Use"))+": "+o(a.last_used_at||t.__("Never")),1)]),e("li",null,[e("span",re,o(t.__("Expires"))+": "+o(a.expires_at||t.__("Never")),1)])])])]),e("div",null,[u(R,{onClick:de=>t.revokeToken(a),class:"px-2"},{default:_(()=>[m(o(t.__("Revoke")),1)]),_:2},1032,["onClick"])])]))),128))])):y("",!0),r.isLoading?(i(),l("div",ie,[u(A)])):y("",!0),!r.isLoading&&r.tokens.length===0?(i(),l("div",ae,[e("div",le,o(t.__("You haven't yet generated any token for your account. Create one to get started.")),1)])):y("",!0)])])])}const dt=T(G,[["render",ce]]);export{dt as default};
