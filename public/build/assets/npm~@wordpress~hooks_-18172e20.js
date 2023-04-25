function y(e){return typeof e!="string"||e===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function h(e){return typeof e!="string"||e===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function _(e,u){return function(r,t,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10;const l=e[u];if(!h(r)||!y(t))return;if(typeof n!="function"){console.error("The hook callback must be a function.");return}if(typeof s!="number"){console.error("If specified, the hook priority must be a number.");return}const c={callback:n,priority:s,namespace:t};if(l[r]){const o=l[r].handlers;let i;for(i=o.length;i>0&&!(s>=o[i-1].priority);i--);i===o.length?o[i]=c:o.splice(i,0,c),l.__current.forEach(d=>{d.name===r&&d.currentIndex>=i&&d.currentIndex++})}else l[r]={handlers:[c],runs:0};r!=="hookAdded"&&e.doAction("hookAdded",r,t,n,s)}}function a(e,u){let f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return function(t,n){const s=e[u];if(!h(t)||!f&&!y(n))return;if(!s[t])return 0;let l=0;if(f)l=s[t].handlers.length,s[t]={runs:s[t].runs,handlers:[]};else{const c=s[t].handlers;for(let o=c.length-1;o>=0;o--)c[o].namespace===n&&(c.splice(o,1),l++,s.__current.forEach(i=>{i.name===t&&i.currentIndex>=o&&i.currentIndex--}))}return t!=="hookRemoved"&&e.doAction("hookRemoved",t,n),l}}function g(e,u){return function(r,t){const n=e[u];return typeof t<"u"?r in n&&n[r].handlers.some(s=>s.namespace===t):r in n}}function p(e,u){let f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return function(t){const n=e[u];n[t]||(n[t]={handlers:[],runs:0}),n[t].runs++;const s=n[t].handlers;for(var l=arguments.length,c=new Array(l>1?l-1:0),o=1;o<l;o++)c[o-1]=arguments[o];if(!s||!s.length)return f?c[0]:void 0;const i={name:t,currentIndex:0};for(n.__current.push(i);i.currentIndex<s.length;){const b=s[i.currentIndex].callback.apply(null,c);f&&(c[0]=b),i.currentIndex++}if(n.__current.pop(),f)return c[0]}}function A(e,u){return function(){var r,t;const n=e[u];return(r=(t=n.__current[n.__current.length-1])===null||t===void 0?void 0:t.name)!==null&&r!==void 0?r:null}}function H(e,u){return function(r){const t=e[u];return typeof r>"u"?typeof t.__current[0]<"u":t.__current[0]?r===t.__current[0].name:!1}}function v(e,u){return function(r){const t=e[u];if(h(r))return t[r]&&t[r].runs?t[r].runs:0}}class m{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=_(this,"actions"),this.addFilter=_(this,"filters"),this.removeAction=a(this,"actions"),this.removeFilter=a(this,"filters"),this.hasAction=g(this,"actions"),this.hasFilter=g(this,"filters"),this.removeAllActions=a(this,"actions",!0),this.removeAllFilters=a(this,"filters",!0),this.doAction=p(this,"actions"),this.applyFilters=p(this,"filters",!0),this.currentAction=A(this,"actions"),this.currentFilter=A(this,"filters"),this.doingAction=H(this,"actions"),this.doingFilter=H(this,"filters"),this.didAction=v(this,"actions"),this.didFilter=v(this,"filters")}}function x(){return new m}x();export{x as c};
