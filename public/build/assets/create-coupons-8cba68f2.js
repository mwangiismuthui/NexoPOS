import{F as C,a as p,n as b}from"./bootstrap-0aabbab9.js";import{_ as m}from"./currency-47ec5b79.js";import{m as T}from"./npm~@vue~runtime-dom_-a668b91e.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as g,a6 as r,z as l,c as k,y as h,F as u,A as i,ad as v,H as _,az as O,ac as c,x as B}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as f,z as F}from"./npm~@vue~shared_-82b01912.js";import"./npm~lodash-f7a36ac5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";const N={name:"ns-create-coupons",mounted(){this.loadForm()},computed:{validTabs(){if(this.form){const e=[];for(let t in this.form.tabs)["selected_products","selected_categories","selected_groups","selected_customers"].includes(t)&&e.push(this.form.tabs[t]);return e}return[]},activeValidTab(){return this.validTabs.filter(e=>e.active)[0]},generalTab(){const e=[];for(let t in this.form.tabs)["general"].includes(t)&&e.push(this.form.tabs[t]);return e}},data(){return{formValidation:new C,form:{},nsSnackBar:p,nsHttpClient:b,options:new Array(40).fill("").map((e,t)=>({label:"Foo"+t,value:"bar"+t}))}},props:["submit-method","submit-url","return-url","src","rules"],methods:{__:m,setTabActive(e){this.validTabs.forEach(t=>t.active=!1),e.active=!0},submit(){if(this.formValidation.validateForm(this.form).length>0)return p.error(m("Unable to proceed the form is not valid."),m("Okay")).subscribe();if(this.submitUrl===void 0)return p.error(m("No submit URL was provided"),m("Okay")).subscribe();this.formValidation.disableForm(this.form);const e={...this.formValidation.extractForm(this.form)};b[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe(t=>{if(t.status==="success")return document.location=this.returnUrl;this.formValidation.enableForm(this.form)},t=>{p.error(t.message||m("An unexpected error occurred."),void 0,{duration:5e3}).subscribe(),t.status==="failed"&&this.formValidation.triggerError(this.form,t.data),this.formValidation.enableForm(this.form)})},handleGlobalChange(e){this.globallyChecked=e,this.rows.forEach(t=>t.$checked=e)},loadForm(){b.get(`${this.src}`).subscribe(t=>{this.form=this.parseForm(t.form)})},parseForm(e){e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0];let t=0;for(let n in e.tabs)t===1&&e.tabs[n].active===void 0&&(e.tabs[n].active=!0),e.tabs[n].active=e.tabs[n].active===void 0?!1:e.tabs[n].active,e.tabs[n].fields=this.formValidation.createFields(e.tabs[n].fields),t++;return e},addOption(e){const t=this.options.indexOf(e);t>=0&&(this.options[t].selected=!this.options[t].selected)},removeOption({option:e,index:t}){e.selected=!1},getRuleForm(){return this.form.ruleForm},addRule(){this.form.rules.push(this.getRuleForm())},removeRule(e){this.form.rules.splice(e,1)}}},R={class:"form flex-auto flex flex-col",id:"crud-form"},A={key:0,class:"flex items-center justify-center flex-auto"},j={class:"flex flex-col"},z={class:"flex justify-between items-center"},E={for:"title",class:"font-bold my-2 text-primary"},S={for:"title",class:"text-sm my-2"},q=["href"],L=["disabled"],M=["disabled"],D={key:0,class:"text-xs text-primary py-1"},H={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},G={class:"px-4 w-full md:w-1/2"},P={class:"px-4 w-full md:w-1/2"},I={id:"tabbed-card"},J={id:"card-header",class:"flex ml-4 flex-wrap ns-tab"},K=["onClick"],Q={class:"ns-tab-item"},W={class:"shadow p-2 rounded"};function X(e,t,n,Y,s,a){const V=g("ns-spinner"),x=g("ns-field");return r(),l("div",R,[Object.values(s.form).length===0?(r(),l("div",A,[k(V)])):h("",!0),Object.values(s.form).length>0?(r(),l(u,{key:1},[i("div",j,[i("div",z,[i("label",E,[v(e.$slots,"title",{},()=>[_("No title Provided")])]),i("div",S,[e.returnUrl?(r(),l("a",{key:0,href:e.returnUrl,class:"rounded-full border ns-inset-button error px-2 py-1"},f(a.__("Return")),9,q)):h("",!0)])]),i("div",{class:F([s.form.main.disabled?"disabled":s.form.main.errors.length>0?"error":"info","input-group flex border-2 rounded overflow-hidden"])},[O(i("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.main.value=o),onBlur:t[1]||(t[1]=o=>s.formValidation.checkField(s.form.main)),onChange:t[2]||(t[2]=o=>s.formValidation.checkField(s.form.main)),disabled:s.form.main.disabled,type:"text",class:"flex-auto text-primary outline-none h-10 px-2"},null,40,L),[[T,s.form.main.value]]),i("button",{disabled:s.form.main.disabled,onClick:t[3]||(t[3]=o=>a.submit()),class:"outline-none px-4 h-10"},[v(e.$slots,"save",{},()=>[_(f(a.__("Save")),1)])],8,M)],2),s.form.main.description&&s.form.main.errors.length===0?(r(),l("p",D,f(s.form.main.description),1)):h("",!0),(r(!0),l(u,null,c(s.form.main.errors,(o,d)=>(r(),l("p",{class:"text-xs py-1 text-error-tertiary",key:d},[i("span",null,[v(e.$slots,"error-required",{},()=>[_(f(o.identifier),1)])])]))),128))]),i("div",H,[i("div",G,[(r(!0),l(u,null,c(a.generalTab,(o,d)=>(r(),l("div",{class:"rounded ns-box shadow p-2",key:d},[(r(!0),l(u,null,c(o.fields,(y,w)=>(r(),B(x,{key:w,field:y},null,8,["field"]))),128))]))),128))]),i("div",P,[i("div",I,[i("div",J,[(r(!0),l(u,null,c(a.validTabs,(o,d)=>(r(),l("div",{onClick:y=>a.setTabActive(o),class:F([o.active?"active":"inactive","tab cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg"]),key:d},f(o.label),11,K))),128))]),i("div",Q,[i("div",W,[(r(!0),l(u,null,c(a.activeValidTab.fields,(o,d)=>(r(),l("div",{class:"flex flex-col",key:d},[k(x,{field:o},null,8,["field"])]))),128))])])])])])],64)):h("",!0)])}const ke=U(N,[["render",X]]);export{ke as default};
