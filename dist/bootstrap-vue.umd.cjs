(function(_,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("bootstrap")):typeof define=="function"&&define.amd?define(["exports","vue","bootstrap"],e):(_=typeof globalThis<"u"?globalThis:_||self,e(_.BootstrapVue={},_.Vue,_.Bootstrap))})(this,function(_,e,V){"use strict";var gt=Object.defineProperty;var Bt=(_,e,V)=>e in _?gt(_,e,{enumerable:!0,configurable:!0,writable:!0,value:V}):_[e]=V;var w=(_,e,V)=>(Bt(_,typeof e!="symbol"?e+"":e,V),V);const le={class:"toast-header"},se=["textContent"],ae=["textContent"],re={class:"toast-body"},ce=["textContent"],z=e.defineComponent({__name:"Toast",props:{visible:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},body:{default:""},animation:{type:Boolean,default:!0},autohide:{type:Boolean,default:!0},delay:{default:15e3},variant:null},emits:["hide","hidden","show","shown"],setup(t,{expose:n,emit:s}){const r=t,{visible:c,animation:m,autohide:k,delay:o}=e.toRefs(r),d=e.ref(),f=e.ref();e.watch(c,$=>{a()},{immediate:!0});function g(){d.value.show()}function p(){d.value.hide()}function y(){d.value.dispose()}function b(){d.value.isShown()}function h(){d.value.getOrCreateInstance()}function u(){d.value.getInstance()}function a(){d.value&&(c.value===!0?g():p())}function i(){s("hide",d.value)}function l(){s("hidden",d.value)}function C(){s("show",d.value)}async function E(){s("shown",d.value)}return n({show:g,hide:p,dispose:y,isShown:b,getOrCreateInstance:h,getInstance:u}),e.onMounted(()=>{f.value.addEventListener("hide.bs.toast",i),f.value.addEventListener("hidden.bs.toast",l),f.value.addEventListener("show.bs.toast",C),f.value.addEventListener("shown.bs.toast",E),d.value=new V.Toast(f.value,{animation:m.value,autohide:k.value,delay:o.value}),a()}),($,B)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"toastRef",ref:f,class:e.normalizeClass(["toast",[t.variant?`text-bg-${t.variant}`:""]]),role:"alert","aria-live":"assertive","aria-atomic":"true"},[e.renderSlot($.$slots,"header",{},()=>[e.createElementVNode("div",le,[e.renderSlot($.$slots,"title",{},()=>[e.createElementVNode("strong",{class:"me-auto",textContent:e.toDisplayString(t.title)},null,8,se)]),e.renderSlot($.$slots,"subtitle",{},()=>[e.createElementVNode("small",{textContent:e.toDisplayString(t.subtitle)},null,8,ae)]),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:p})])]),e.renderSlot($.$slots,"body",{},()=>[e.createElementVNode("div",re,[e.renderSlot($.$slots,"default",{},()=>[e.createElementVNode("span",{textContent:e.toDisplayString(t.body)},null,8,ce)])])])],2))}});function ie(){let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(s=="x"?r:r&3|8).toString(16)})}const de={id:"toast-wrapper"};let P;const ue=e.defineComponent({__name:"Toaster",setup(t,{expose:n}){const s={visible:!0,title:"",subtitle:"",body:"",animation:!0,autohide:!0,delay:5e3,variant:void 0},r=e.ref(new Map);P=(m,k="top right")=>{const o=ie(),d={...s,...m,id:o};let f=r.value.get(k);f instanceof Set||(f=new Set),f.add(d),r.value.set(k,f)};function c(m,k){const o=r.value.get(m);o==null||o.delete(k)}return n({toast:P}),(m,k)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",de,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.value,([o,d])=>(e.openBlock(),e.createElementBlock("div",{key:o,class:e.normalizeClass(["toast-group",`${o}`])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d,(f,g)=>(e.openBlock(),e.createBlock(z,e.mergeProps({key:f.id},f,{onHidden:p=>c(o,f)}),null,16,["onHidden"]))),128))],2))),128))])]))}}),Et="",x=(t,n)=>{const s=t.__vccOpts||t;for(const[r,c]of n)s[r]=c;return s},F=x(ue,[["__scopeId","data-v-0580e23e"]]);var N=(t=>(t.SMALL="sm",t.STANDARD="",t.LARGE="lg",t.EXTRA_LARGE="xl",t))(N||{});const L=(t,n="")=>{let s=t.toLowerCase();return!Object.values(N).includes(s)||s==""?"":`${n}${s}`},fe=["onClick"],me={class:"modal-content"},pe={class:"modal-header"},he=["innerHTML"],ke={class:"modal-body"},_e=["innerHTML"],ye={class:"modal-footer"},be=["innerHTML"],Ce=["innerHTML"];class M{static addToStack(n){n!=null&&this.modalStack.push(n)}static removeFromStack(n){if(n==null)return;const s=this.modalStack.indexOf(n);s<0||this.modalStack.splice(s,1)}static getLast(){const n=this.modalStack.length;if(n!==0)return this.modalStack[n-1]}}w(M,"modalStack",new Array);const A=e.defineComponent({__name:"Modal",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{default:!0},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean,default:!1},okOnly:{type:Boolean,default:!1},size:{default:N.STANDARD},btnSize:{default:N.SMALL}},setup(t,{expose:n}){const s=t,{backdrop:r,keyboard:c,focus:m,disableOutsideClick:k,size:o,btnSize:d}=e.toRefs(s),f=e.computed(()=>L(o.value,"modal-")),g=e.computed(()=>L(d.value,"btn-")),p=e.ref();let y;e.getCurrentInstance();let b;function h(){return new Promise((B,R)=>{const O=M.getLast();O&&O.hide(),M.addToStack(y),y==null||y.show(),b=B})}function u($=!0){M.removeFromStack(y),y==null||y.hide();const B=M.getLast();B&&B.show(),typeof b=="function"&&b($)}function a(){y==null||y.toggle()}e.onMounted(()=>{y=new V.Modal(p.value,{backdrop:r==null?void 0:r.value,keyboard:c.value,focus:m.value})});function i($){(r==null?void 0:r.value)!=="static"&&u(!1)}function l(){u(!1)}function C(){u(!1)}function E(){u(!0)}return n({show:h,hide:u,toggle:a}),($,B)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({ref_key:"modalElement",ref:p,class:"modal fade",tabindex:"-1"},{...$.$attrs},{onClick:e.withModifiers(i,["self"])}),[e.createElementVNode("div",{class:e.normalizeClass(["modal-dialog",e.unref(f)])},[e.createElementVNode("div",me,[e.createElementVNode("div",pe,[e.renderSlot($.$slots,"header",{},()=>[e.createElementVNode("h5",{class:"modal-title",innerHTML:t.title},null,8,he)]),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:l})]),e.createElementVNode("div",ke,[e.renderSlot($.$slots,"default",{},()=>[e.createElementVNode("span",{innerHTML:t.body},null,8,_e)])]),e.createElementVNode("div",ye,[e.renderSlot($.$slots,"footer",{},()=>[t.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["btn btn-secondary",e.unref(g)]),onClick:C},[e.renderSlot($.$slots,"button-cancel",{},()=>[e.createElementVNode("span",{innerHTML:t.textCancel},null,8,be)])],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",e.unref(g)]),onClick:E},[e.renderSlot($.$slots,"button-ok",{},()=>[e.createElementVNode("span",{innerHTML:t.textOk},null,8,Ce)])],2)])])])],2)],16,fe))}}),I=e.defineComponent({__name:"ModalManager",setup(t,{expose:n}){const s=e.ref(void 0),r=e.ref({});function c(k={}){var o;return k.okOnly=!1,r.value=k,(o=s.value)==null?void 0:o.show()}function m(k={}){var o;return k.okOnly=!0,r.value=k,(o=s.value)==null?void 0:o.show()}return n({confirm:c,alert:m}),(k,o)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createVNode(A,e.mergeProps({ref_key:"modalRef",ref:s},{...r.value}),null,16)]))}}),$e={"data-first":""},ge=["disabled","innerHTML"],Be={"data-prev":""},Ee=["disabled","innerHTML"],we={key:0},Se=["innerHTML"],Ve=["onClick"],Ne={"data-next":""},xe=["disabled","innerHTML"],Te={"data-last":""},Me=["disabled","innerHTML"],Le=e.defineComponent({__name:"Pagination",props:{modelValue:{default:1},perPage:{default:5},maxVisibleButtons:{default:5},totalItems:{default:0},hideEllipsis:{type:Boolean,default:!1},hideGotoEndButtons:{type:Boolean,default:!1},firstText:{default:"«"},prevText:{default:"‹"},nextText:{default:"›"},lastText:{default:"»"},ellipsisText:{default:"…"},size:{default:N.STANDARD}},emits:["update:modelValue"],setup(t,{emit:n}){const s=t;function r(l,C=0){return[...Array(l).keys()].map(E=>E+C)}const{modelValue:c,maxVisibleButtons:m,hideEllipsis:k}=e.toRefs(s),o=Math.floor(m.value/2),d=e.computed(()=>{let l=m.value,C=c.value<=o?1:c.value-o;return c.value>=p.value-o&&(C=p.value-l+1),C<1&&(C=1),p.value<l&&(l=p.value),r(l,C)}),f=e.computed(()=>c.value<=1),g=e.computed(()=>c.value>=p.value),p=e.computed(()=>{const{perPage:l,totalItems:C}=s;return Math.ceil(C/l)});e.watchEffect(()=>{p.value>0&&c.value>p.value&&n("update:modelValue",p.value)});function y(l){const C=m.value-1;return!(k.value===!0||l===0&&c.value-o-1<=0||l===C&&c.value+o>=p.value||l>0&&l<C)}function b(l){l<1&&(l=1),l>p.value&&(l=p.value),n("update:modelValue",l)}function h(){n("update:modelValue",1)}function u(){n("update:modelValue",p.value)}function a(){let l=c.value-1;l<1&&(l=1),n("update:modelValue",l)}function i(){let l=c.value+1;l>p.value&&(l=p.value),n("update:modelValue",l)}return(l,C)=>(e.openBlock(),e.createElementBlock("ul",{class:e.normalizeClass(["pagination",t.size])},[e.createElementVNode("li",$e,[e.createElementVNode("button",{class:"",disabled:e.unref(f),innerHTML:t.firstText,onClick:h},null,8,ge)]),e.createElementVNode("li",Be,[e.createElementVNode("button",{class:"",disabled:e.unref(f),innerHTML:t.prevText,onClick:a},null,8,Ee)]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),(E,$)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[y($)?(e.openBlock(),e.createElementBlock("li",we,[e.createElementVNode("button",{disabled:"",class:"",innerHTML:t.ellipsisText},null,8,Se)])):(e.openBlock(),e.createElementBlock("li",{key:1,"data-prev":"",class:e.normalizeClass({active:t.modelValue===E})},[e.createElementVNode("button",{class:"",onClick:B=>b(E)},e.toDisplayString(E),9,Ve)],2))],64))),256)),e.createElementVNode("li",Ne,[e.createElementVNode("button",{class:"",disabled:e.unref(g),innerHTML:t.nextText,onClick:i},null,8,xe)]),e.createElementVNode("li",Te,[e.createElementVNode("button",{class:"",disabled:e.unref(g),innerHTML:t.lastText,onClick:u},null,8,Me)])],2))}}),wt="",j=x(Le,[["__scopeId","data-v-2bfd7085"]]),De={class:"d-inline"},ze=e.createElementVNode("span",null,"Per page: ",-1),Ae={class:"fw-bold"},G=e.defineComponent({__name:"PageSizeDropdown",props:{options:{default:()=>[25,50,100]},modelValue:{default:50}},emits:["update:modelValue"],setup(t,{emit:n}){const s=t,{options:r}=e.toRefs(s),c=e.computed({get:()=>s.modelValue,set:m=>n("update:modelValue",m)});return(m,k)=>{const o=e.resolveComponent("b-dropdown-item"),d=e.resolveComponent("b-dropdown");return e.openBlock(),e.createBlock(d,e.mergeProps({variant:"outline-primary",size:"sm"},{...m.$attrs}),{button:e.withCtx(()=>[e.createElementVNode("div",De,[e.renderSlot(m.$slots,"default",{selected:e.unref(c)},()=>[ze,e.createElementVNode("span",Ae,e.toDisplayString(e.unref(c)),1)])])]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r),(f,g)=>(e.openBlock(),e.createBlock(o,{key:f,onClick:p=>c.value=f,active:f===t.modelValue},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(f),1)]),_:2},1032,["onClick","active"]))),128))]),_:3},16)}}}),He=["value"],K=e.defineComponent({__name:"PageSizeSelect",props:{options:{default:()=>[25,50,100]},modelValue:{default:50}},emits:["update:modelValue"],setup(t,{emit:n}){const s=t,{options:r}=e.toRefs(s),c=e.computed({get:()=>s.modelValue,set:m=>n("update:modelValue",m)});return(m,k)=>e.withDirectives((e.openBlock(),e.createElementBlock("select",{"onUpdate:modelValue":k[0]||(k[0]=o=>e.isRef(c)?c.value=o:null)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r),(o,d)=>(e.openBlock(),e.createElementBlock("option",{key:o,value:o},e.toDisplayString(o),9,He))),128))],512)),[[e.vModelSelect,e.unref(c)]])}});var T=(t=>(t.ASC="ASC",t.DESC="DESC",t.IGNORE="IGNORE",t))(T||{});class Re{constructor(n,s="ASC",r){w(this,"key");w(this,"direction");w(this,"sortFn");this.key=n,this.direction=s,this.sortFn=r}}const U=(t,n)=>{const s=(o,d)=>{let f=typeof o,g=typeof d;return f=="number"&&f==g},r=(o,d)=>o-d,c=(o,d)=>(o=o??"",d=d??"",o.localeCompare(d)),m=(o,d)=>s(o,d)?r:c,k=[...n];return k.sort((o,d)=>{let f=0;for(let g of t){let{key:p,direction:y,sortFn:b}=g,h=y==="ASC"?1:-1,u=o[p],a=d[p];if(b=typeof b=="function"?b:m(u,a),f=b(u,a,o,d,n,g,h)*h,f!==0)return f}return f}),k},Oe=["onClick"],Pe={class:"th-wrapper"},Fe={key:0,"data-sort-indicator":""},Ie={class:"sort-index"},je={class:"sort-direction"},Ge=["onMouseover"],Ke={key:0,class:"p-5 text-muted font-italic"},Ue=["colspan"],Ye=["innerHTML"];class D{constructor(n="",s="",r=!1,c){w(this,"key");w(this,"label");w(this,"sortable");w(this,"sortFn");this.key=n,this.label=s,this.sortable=r,this.sortFn=c}}const qe=e.defineComponent({__name:"Table",props:{fields:{default:()=>[]},items:{default:()=>[]},striped:{type:Boolean,default:!1},hover:{type:Boolean,default:!0},externalSort:{type:Boolean,default:!1},showEmpty:{type:Boolean,default:!1},emptyText:{default:"nothing to display"}},emits:["sort","onMouseOverCell"],setup(t,{emit:n}){const s=t,r=h=>{let u=[];for(const a of h)u=u.concat(Object.keys(a));return u=u.filter((a,i)=>u.indexOf(a)==i),u},c=e.ref([]),{fields:m,items:k}=e.toRefs(s),o=e.computed(()=>{if(s.externalSort||c.value.length==0)return s.items;const h=[...s.items];return U(c.value,h)}),d=e.computed(()=>{let h=m.value,u=[];return h.length===0&&(h=r([...k.value])),h.reduce((a,i,l)=>{if(typeof i=="string")a.push(new D(i,i));else if(i instanceof D)a.push(i);else if(typeof i=="object"){const{key:C,label:E,sortable:$,sortFn:B}=i;a.push(new D(C,E,$,B))}return a},u)});function f(h){const u=c.value.findIndex(a=>a.key===h.key);return u<0?"":u+1}function g(h){const u=c.value.findIndex(i=>i.key===h.key);if(u<0)return"fas fa-sort";const a=c.value[u];return a.direction===T.ASC?"fas fa-sort-up":a.direction===T.DESC?"fas fa-sort-down":"far fa-exclamation-triangle"}function p(h){const{key:u}=h,a=c.value.findIndex(i=>i.key===u);if(a<0){const i=new Re(u,T.ASC,h.sortFn);c.value.push(i)}else{const i=c.value[a],l=i.direction;l===T.ASC?i.direction=T.DESC:l===T.DESC&&c.value.splice(a,1)}n("sort",c.value,U)}function y(h,u,a,i){n("onMouseOverCell",h,u,a,i)}let b=e.ref(null);return e.onMounted(()=>{b.value=e.getCurrentInstance()}),(h,u)=>(e.openBlock(),e.createElementBlock("table",e.mergeProps({...h.$attrs},{class:{striped:t.striped,hover:t.hover}}),[e.createElementVNode("thead",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),a=>(e.openBlock(),e.createElementBlock("th",{key:`thead-${a.key}`,class:e.normalizeClass({sortable:a.sortable}),onClick:i=>a.sortable&&p(a)},[e.createElementVNode("span",Pe,[e.renderSlot(h.$slots,`head(${a.key})`,{field:a,data:e.unref(b),value:a.label},()=>[e.createTextVNode(e.toDisplayString(a.label),1)],!0),a.sortable?(e.openBlock(),e.createElementBlock("span",Fe,[e.createElementVNode("span",Ie,e.toDisplayString(f(a)),1),e.createElementVNode("span",je,[e.createElementVNode("i",{class:e.normalizeClass(g(a))},null,2)])])):e.createCommentVNode("",!0)])],10,Oe))),128))]),e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(o),(a,i)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:`trow-${(a==null?void 0:a.id)??i}`},[e.renderSlot(h.$slots,"row",{item:a,index:i,colspan:e.unref(d).length},void 0,!0),e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),l=>(e.openBlock(),e.createElementBlock("td",{key:`tcell-${l.key+((a==null?void 0:a.id)??i)}`,class:e.normalizeClass({[`tcell-${l==null?void 0:l.key}`]:!0}),onMouseover:C=>y(C,a,i,l)},[e.renderSlot(h.$slots,`cell(${l==null?void 0:l.key})`,{data:e.unref(b),item:a,field:l,value:a[l==null?void 0:l.key]},()=>[e.createTextVNode(e.toDisplayString(a[l==null?void 0:l.key]),1)],!0)],42,Ge))),128))])],64))),128))]),e.createElementVNode("tfoot",null,[e.renderSlot(h.$slots,"footer",{data:e.unref(b)},void 0,!0)]),t.showEmpty&&e.unref(o).length===0?(e.openBlock(),e.createElementBlock("tr",Ke,[e.createElementVNode("td",{colspan:e.unref(d).length},[e.renderSlot(h.$slots,"empty",{items:e.unref(o),data:e.unref(b),fields:e.unref(d)},()=>[e.createElementVNode("span",{innerHTML:t.emptyText},null,8,Ye)],!0)],8,Ue)])):e.createCommentVNode("",!0)],16))}}),St="",Y=x(qe,[["__scopeId","data-v-7828e531"]]);var q=(t=>(t.PRIMARY="primary",t.SECONDARY="secondary",t.WARNING="warning",t.DANGER="danger",t.INFO="info",t))(q||{});const We={class:"d-inline-block"},Xe=["disabled"],Je=e.defineComponent({__name:"Dropdown",props:{text:{default:""},variant:{default:q.PRIMARY},right:{type:Boolean,default:!1},top:{type:Boolean,default:!1},centered:{type:Boolean},dropup:{type:Boolean},dropend:{type:Boolean},dropstart:{type:Boolean},size:{default:N.STANDARD},disabled:{type:Boolean}},setup(t){const n=t,s=e.ref(),{variant:r,centered:c,dropup:m,dropend:k,dropstart:o}=e.toRefs(n),d=e.ref(!1),f=e.computed(()=>{const i=[];return r!=null&&r.value&&i.push(`btn-${r.value}`),n.size&&i.push(`btn-${n.size}`),i}),g=e.computed(()=>{const i=[];return c!=null&&c.value&&i.push("dropdown-center"),m!=null&&m.value&&i.push("dropup"),o!=null&&o.value&&i.push("dropstart"),!(o!=null&&o.value)&&(k!=null&&k.value)&&i.push("dropend"),i.length===0?i.push("dropdown"):i.unshift("btn-group"),i});function p(){d.value=!0}function y(){d.value=!1}const b="data-prevent-close";function h(i){d.value?y():p()}function u(i){const{target:l}=i;(l==null?void 0:l.closest(`[${b}],[${b}=true]`))||y()}function a(){d.value&&y()}return(i,l)=>{const C=e.resolveDirective("click-outside");return e.openBlock(),e.createElementBlock("div",{ref_key:"dropDownRef",ref:s,class:e.normalizeClass(e.unref(g))},[e.withDirectives((e.openBlock(),e.createElementBlock("div",We,[e.renderSlot(i.$slots,"header",e.normalizeProps(e.guardReactiveProps({buttonClasses:e.unref(f),onButtonClicked:h,disabled:t.disabled})),()=>[e.createElementVNode("button",{class:e.normalizeClass(["btn dropdown-toggle",e.unref(f)]),type:"button","aria-expanded":"false",onClick:h,disabled:t.disabled},[e.renderSlot(i.$slots,"button",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)],!0)],10,Xe)],!0),e.createElementVNode("ul",{class:e.normalizeClass(["dropdown-menu",{show:d.value}]),onClick:u},[e.renderSlot(i.$slots,"default",{},void 0,!0)],2)])),[[C,a]])],2)}}}),Vt="",W=x(Je,[["__scopeId","data-v-44fcc34b"]]),Qe=["data-prevent-close"],X=e.defineComponent({__name:"DropdownItem",props:{active:{type:Boolean},preventClose:{type:Boolean}},setup(t){const n=t,{preventClose:s}=e.toRefs(n);return(r,c)=>(e.openBlock(),e.createElementBlock("li",{"data-prevent-close":e.unref(s)?"":null},[e.createElementVNode("span",{class:e.normalizeClass(["dropdown-item",{active:t.active}]),role:"button",tabindex:"0"},[e.renderSlot(r.$slots,"default")],2)],8,Qe))}}),Ze={},ve={"data-prevent-close":""},et={class:"dropdown-header"};function tt(t,n){return e.openBlock(),e.createElementBlock("li",ve,[e.createElementVNode("h6",et,[e.renderSlot(t.$slots,"default")])])}const J=x(Ze,[["render",tt]]),nt={},ot=[e.createElementVNode("hr",{class:"dropdown-divider"},null,-1)];function lt(t,n){return e.openBlock(),e.createElementBlock("li",null,ot)}const Q=x(nt,[["render",lt]]),Z={mounted(t,n,s,r){new V.Tooltip(t,{title:n.value,placement:n.arg,trigger:"hover"})}},st=(t,n)=>{function s(m,k){for(;m!==null;){if(m===k)return!0;m=m.parentNode}return!1}const r=new AbortController;function c(m,k){document.addEventListener("click",function(o){const d=o.target;m&&(s(d,m)||k())},{signal:r.signal})}return c(t,n),r},v={mounted(t,n,s,r){const c=n.value;st(t,c)}};class H{static add(n){this.list.add(n),document.body.classList.add("drawer-open")}static delete(n){this.list.delete(n),this.list.size===0&&document.body.classList.remove("drawer-open")}}w(H,"list",new Set);const at=["onClick"],rt={class:"drawer-content"},ct={class:"drawer-header"},it=["innerHTML"],dt={class:"drawer-body"},ut=["innerHTML"],ft={class:"drawer-footer"},mt=["innerHTML"],pt=["innerHTML"],ht=e.defineComponent({__name:"Drawer",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{default:"static"},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean},okOnly:{type:Boolean,default:!1},size:{default:N.STANDARD},btnSize:{default:N.SMALL},lazy:{type:Boolean,default:!1}},setup(t,{expose:n}){const s=t,{backdrop:r,keyboard:c,focus:m,size:k,btnSize:o}=e.toRefs(s),d=e.computed(()=>L(k.value,"drawer-")),f=e.computed(()=>L(o.value,"btn-")),g=e.ref(),p=e.ref(!1),y=e.getCurrentInstance();let b;async function h(){return p.value===!0?void 0:new Promise((R,O)=>{p.value=!0,b=R})}function u(B=!0){p.value=!1,typeof b=="function"&&b(B)}function a(){p.value===!0?h():u(!1)}function i(B){(r==null?void 0:r.value)!=="static"&&u(!1)}function l(){u(!1)}function C(){u(!1)}function E(){u(!0)}function $(){p.value===!0?H.add(y):H.delete(y)}return n({show:h,hide:u,toggle:a}),(B,R)=>(e.openBlock(),e.createBlock(e.Transition,{onBeforeEnter:$,onAfterLeave:$},{default:e.withCtx(()=>[p.value?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,ref_key:"drawerElement",ref:g,class:"drawer",tabindex:"-1"},{...B.$attrs},{onClick:e.withModifiers(i,["self"])}),[e.createElementVNode("div",{class:e.normalizeClass(["drawer-dialog",e.unref(d)])},[e.createElementVNode("div",rt,[e.createElementVNode("div",ct,[e.renderSlot(B.$slots,"header",{},()=>[e.createElementVNode("h5",{class:"drawer-title",innerHTML:t.title},null,8,it)],!0),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:l})]),e.createElementVNode("div",dt,[e.renderSlot(B.$slots,"default",{},()=>[e.createElementVNode("span",{innerHTML:t.body},null,8,ut)],!0)]),e.createElementVNode("div",ft,[e.renderSlot(B.$slots,"footer",{},()=>[t.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["ms-auto btn btn-secondary",e.unref(f)]),onClick:C},[e.renderSlot(B.$slots,"button-cancel",{},()=>[e.createElementVNode("span",{innerHTML:t.textCancel},null,8,mt)],!0)],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",e.unref(f)]),onClick:E},[e.renderSlot(B.$slots,"button-ok",{},()=>[e.createElementVNode("span",{innerHTML:t.textOk},null,8,pt)],!0)],2)],!0)])])],2)],16,at)):e.createCommentVNode("",!0)]),_:3}))}}),xt="",Tt="",kt=x(ht,[["__scopeId","data-v-2e49e8cb"]]),S="b",ee="$toaster",te="$modalManager";class ne{static getComponent(){if(!this.component){const n=document.createElement("div");document.body.appendChild(n);const r=e.createApp(I).mount(n);this.component=r}return this.component}}w(ne,"component");class oe{static getComponent(){if(!this.component){const n=document.createElement("div");document.body.appendChild(n);const r=e.createApp(F).mount(n);this.component=r}return this.component}}w(oe,"component");function _t(){return e.inject(ee)}function yt(){return e.inject(te)}function bt(t){t.component(`${S}-drawer`,kt),t.component(`${S}-modal`,A),t.component(`${S}-pagination`,j),t.component(`${S}-pagination-dropdown`,G),t.component(`${S}-pagination-select`,K),t.component(`${S}-dropdown`,W),t.component(`${S}-dropdown-item`,X),t.component(`${S}-dropdown-header`,J),t.component(`${S}-dropdown-divider`,Q),t.component(`${S}-table`,Y),t.component(`${S}-toast`,z)}function Ct(t){t.directive("tooltip",Z),t.directive("click-outside",v)}const $t={install(t){bt(t),Ct(t);const n=oe.getComponent();t.provide(ee,n);const s=ne.getComponent();t.provide(te,s)}};_.BootstrapVue=$t,_.Dropdown=W,_.DropdownDivider=Q,_.DropdownHeader=J,_.DropdownItem=X,_.Modal=A,_.ModalManager=I,_.PageSizeDropdown=G,_.PageSizeSelect=K,_.Pagination=j,_.Table=Y,_.TableFieldDefinition=D,_.Toast=z,_.Toaster=F,_.clickOutside=v,_.tooltip=Z,_.useModal=yt,_.useToaster=_t,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
