import{_ as u}from"./currency-47ec5b79.js";import{F as k,a as d,b as l,n as b}from"./bootstrap-0aabbab9.js";import{g as w}from"./components-3b83ada4.js";import{x as C}from"./npm~@vue~reactivity_-481192b6.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as v,a6 as a,z as n,A as m,F as _,ac as g,y as p,c as x,x as A,ag as B,ax as D,ad as V,H as E}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{z as H,U as h}from"./npm~@vue~shared_-82b01912.js";import"./npm~numeral-faf61dd1.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~currency.js-57f74176.js";import"./npm~lodash-f7a36ac5.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-0ec1b34a.js";import"./npm~form-data-87061074.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./ns-alert-popup-883dcb0b.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./ns-switch-0a4d4345.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./ns-pos-confirm-popup-07a76865.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./ns-paginate-19e98260.js";import"./npm~vue-upload-component-9e5d4563.js";import"./ns-numpad-plus-f3ffaa01.js";import"./ns-pos-loading-popup-f38cabd2.js";import"./ns-prompt-popup-64b67141.js";const N={name:"ns-settings",props:["url"],components:{nsField:w},data(){return{validation:new k,form:{},test:""}},computed:{formDefined(){return Object.values(this.form).length>0},activeTab(){for(let t in this.form.tabs)if(this.form.tabs[t].active===!0)return this.form.tabs[t]}},mounted(){const t=window.location.href,e=new URL(t);this.loadSettingsForm(e.searchParams.get("tab")||null)},methods:{__:u,loadComponent(t){return C(nsExtraComponents[t])},async submitForm(){if(this.validation.validateForm(this.form).length>0)return d.error(u("Unable to proceed the form is not valid.")).subscribe();this.validation.disableForm(this.form);const t=this.validation.extractForm(this.form),e=l.applyFilters("ns-before-saved",()=>new Promise((s,i)=>b.post(this.url,t).subscribe({next:c=>{s(c)},error:c=>{i(c)}})));try{const s=await e(t);this.validation.enableForm(this.form),this.loadSettingsForm(),s.data&&s.data.results&&s.data.results.forEach(i=>{i.status==="failed"?d.error(i.message).subscribe():d.success(i.message).subscribe()}),l.doAction("ns-settings-saved",{result:s,instance:this}),d.success(s.message).subscribe()}catch(s){this.validation.enableForm(this.form),this.validation.triggerFieldsErrors(this.form,s),l.doAction("ns-settings-failed",{error:s,instance:this}),d.error(s.message||u("Unable to proceed the form is not valid.")).subscribe()}},setActive(t){for(let e in this.form.tabs)this.form.tabs[e].active=!1;t.active=!0,l.doAction("ns-settings-change-tab",{tab:t,instance:this})},loadSettingsForm(t=null){b.get(this.url).subscribe(e=>{let s=0;t=e.tabs[t]!==void 0?t:null;for(let i in e.tabs)this.formDefined?e.tabs[i].active=this.form.tabs[i].active:(e.tabs[i].active=!1,(t===null&&s===0||t!==null&&i===t)&&(e.tabs[i].active=!0)),s++,e.tabs[i].fields===void 0&&(e.tabs[i].fields=[]);this.form=this.validation.createForm(e),l.doAction("ns-settings-loaded",this),l.doAction("ns-settings-change-tab",{tab:this.activeTab,instance:this})})}}},T={key:0,id:"tabbed-card",class:"ns-tab"},U={id:"card-header",class:"flex flex-wrap ml-4"},j=["onClick"],z={key:0,class:"ml-2 rounded-full ns-inset-button error active text-sm h-6 w-6 flex items-center justify-center"},L={class:"card-body ns-tab-item"},P={class:"shadow rounded"},R={class:"-mx-4 flex flex-wrap p-2"},O={class:"flex flex-col my-2"},q={key:1,class:"w-full px-4"},G={key:0,class:"ns-tab-item-footer border-t p-2 flex justify-end"};function I(t,e,s,i,c,r){const y=v("ns-field"),F=v("ns-button");return r.formDefined?(a(),n("div",T,[m("div",U,[(a(!0),n(_,null,g(c.form.tabs,(o,f)=>(a(),n("div",{class:H([o.active?"active":"inactive","tab cursor-pointer flex items-center px-4 py-2 rounded-tl-lg rounded-tr-lg"]),onClick:J=>r.setActive(o),key:f},[m("span",null,h(o.label),1),o.errors&&o.errors.length>0?(a(),n("span",z,h(o.errors.length),1)):p("",!0)],10,j))),128))]),m("div",L,[m("div",P,[m("div",R,[r.activeTab.fields?(a(!0),n(_,{key:0},g(r.activeTab.fields,(o,f)=>(a(),n("div",{class:"w-full px-4 md:w-1/2 lg:w-1/3",key:f},[m("div",O,[x(y,{field:o},null,8,["field"])])]))),128)):p("",!0),r.activeTab.component?(a(),n("div",q,[(a(),A(B(r.loadComponent(r.activeTab.component).value)))])):p("",!0)]),r.activeTab.fields&&r.activeTab.fields.length>0?(a(),n("div",G,[x(F,{onClick:e[0]||(e[0]=o=>r.submitForm()),type:"info"},{default:D(()=>[V(t.$slots,"submit-button",{},()=>[E(h(r.__("Save Settings")),1)])]),_:3})])):p("",!0)])])])):p("",!0)}const Wt=S(N,[["render",I]]);export{Wt as default};
