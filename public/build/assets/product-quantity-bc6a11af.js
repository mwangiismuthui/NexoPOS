import{p as P,a as m,P as x}from"./bootstrap-0aabbab9.js";import{_ as c}from"./currency-47ec5b79.js";import{n as v,a as k}from"./ns-numpad-plus-f3ffaa01.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as p,a6 as l,z as _,c as f,y as d,A as a,x as b}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as h}from"./npm~@vue~shared_-82b01912.js";const Q={name:"ns-pos-quantity-popup",props:["popup"],components:{nsNumpad:v,nsNumpadPlus:k},data(){return{finalValue:1,virtualStock:null,options:{},optionsSubscription:null,allSelected:!0,isLoading:!1}},beforeDestroy(){this.optionsSubscription.unsubscribe()},mounted(){this.optionsSubscription=POS.options.subscribe(s=>{this.options=s}),this.popup.params.product.quantity&&(this.finalValue=this.popup.params.product.quantity),this.popupCloser()},unmounted(){nsHotPress.destroy("pos-quantity-numpad"),nsHotPress.destroy("pos-quantity-backspace"),nsHotPress.destroy("pos-quantity-enter")},methods:{__:c,popupCloser:P,closePopup(){this.popup.params.reject(!1),this.popup.close()},updateQuantity(s){this.finalValue=s},defineQuantity(s){const{product:t,data:o}=this.popup.params;if(s===0)return m.error(c("Please provide a quantity")).subscribe();if(t.$original().stock_management==="enabled"&&t.$original().type==="materialized"){const r=POS.getStockUsage(t.$original().id,o.unit_quantity_id)-(t.quantity||0);if(s>parseFloat(o.$quantities().quantity)-r)return m.error(c("Unable to add the product, there is not enough stock. Remaining %s").replace("%s",o.$quantities().quantity-r)).subscribe()}this.resolve({quantity:s})},resolve(s){this.popup.params.resolve(s),this.popup.close()}}},w={class:"ns-box shadow min-h-2/5-screen w-3/4-screen md:w-3/5-screen lg:w-2/5-screen xl:w-2/5-screen relative"},V={key:0,id:"loading-overlay",style:{background:"rgb(202 202 202 / 49%)"},class:"flex w-full h-full absolute top-O left-0 items-center justify-center"},N={class:"flex-shrink-0 flex justify-between items-center p-2 border-b ns-box-header"},C={class:"text-xl font-bold text-primary text-center"},O={id:"screen",class:"h-24 border-b primary ns-box-body flex items-center justify-center"},B={class:"font-bold text-3xl"};function U(s,t,o,r,e,i){const y=p("ns-spinner"),u=p("ns-close-button"),g=p("ns-numpad"),q=p("ns-numpad-plus");return l(),_("div",w,[e.isLoading?(l(),_("div",V,[f(y)])):d("",!0),a("div",N,[a("div",null,[a("h1",C,h(i.__("Define Quantity")),1)]),a("div",null,[f(u,{onClick:t[0]||(t[0]=n=>i.closePopup())})])]),a("div",O,[a("h1",B,h(e.finalValue),1)]),e.options.ns_pos_numpad==="default"?(l(),b(g,{key:1,floating:e.options.ns_pos_allow_decimal_quantities,onChanged:t[1]||(t[1]=n=>i.updateQuantity(n)),onNext:t[2]||(t[2]=n=>i.defineQuantity(n)),value:e.finalValue},null,8,["floating","value"])):d("",!0),e.options.ns_pos_numpad==="advanced"?(l(),b(q,{key:2,onChanged:t[3]||(t[3]=n=>i.updateQuantity(n)),onNext:t[4]||(t[4]=n=>i.defineQuantity(n)),value:e.finalValue},null,8,["value"])):d("",!0)])}const j=S(Q,[["render",U]]);class R{constructor(t){this.product=t}run(t){return new Promise((o,r)=>{const e=this.product;if(POS.options.getValue().ns_pos_show_quantity!==!1||!POS.processingAddQueue)x.show(j,{resolve:o,reject:r,product:e,data:t});else{if(e.$original().stock_management==="enabled"&&e.$original().type==="materialized"){const u=POS.getStockUsage(e.$original().id,t.unit_quantity_id)-(e.quantity||0);if(1>parseFloat(t.$quantities().quantity)-u)return m.error(c("Unable to add the product, there is not enough stock. Remaining %s").replace("%s",(t.$quantities().quantity-u).toString())).subscribe()}o({quantity:1})}})}}export{R as P};
