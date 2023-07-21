(function(_,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("bootstrap")):typeof define=="function"&&define.amd?define(["exports","vue","bootstrap"],e):(_=typeof globalThis<"u"?globalThis:_||self,e(_.BootstrapVue={},_.Vue,_.Bootstrap))})(this,function(_,e,V){"use strict";var _t=Object.defineProperty;var yt=(_,e,V)=>e in _?_t(_,e,{enumerable:!0,configurable:!0,writable:!0,value:V}):_[e]=V;var w=(_,e,V)=>(yt(_,typeof e!="symbol"?e+"":e,V),V);const oe={class:"toast-header"},le=["textContent"],se=["textContent"],ae={class:"toast-body"},re=["textContent"],z=e.defineComponent({__name:"Toast",props:{visible:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},body:{default:""},animation:{type:Boolean,default:!0},autohide:{type:Boolean,default:!0},delay:{default:15e3},variant:null},emits:["hide","hidden","show","shown"],setup(t,{expose:n,emit:s}){const c=t,{visible:i,animation:k,autohide:p,delay:a}=e.toRefs(c),d=e.ref(),u=e.ref();e.watch(i,C=>{l()},{immediate:!0});function g(){d.value.show()}function f(){d.value.hide()}function y(){d.value.dispose()}function b(){d.value.isShown()}function m(){d.value.getOrCreateInstance()}function o(){d.value.getInstance()}function l(){d.value&&(i.value===!0?g():f())}function h(){s("hide",d.value)}function r(){s("hidden",d.value)}function $(){s("show",d.value)}async function E(){s("shown",d.value)}return n({show:g,hide:f,dispose:y,isShown:b,getOrCreateInstance:m,getInstance:o}),e.onMounted(()=>{u.value.addEventListener("hide.bs.toast",h),u.value.addEventListener("hidden.bs.toast",r),u.value.addEventListener("show.bs.toast",$),u.value.addEventListener("shown.bs.toast",E),d.value=new V.Toast(u.value,{animation:k.value,autohide:p.value,delay:a.value}),l()}),(C,B)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"toastRef",ref:u,class:e.normalizeClass(["toast",[t.variant?`text-bg-${t.variant}`:""]]),role:"alert","aria-live":"assertive","aria-atomic":"true"},[e.renderSlot(C.$slots,"header",{},()=>[e.createElementVNode("div",oe,[e.renderSlot(C.$slots,"title",{},()=>[e.createElementVNode("strong",{class:"me-auto",textContent:e.toDisplayString(t.title)},null,8,le)]),e.renderSlot(C.$slots,"subtitle",{},()=>[e.createElementVNode("small",{textContent:e.toDisplayString(t.subtitle)},null,8,se)]),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:f})])]),e.renderSlot(C.$slots,"body",{},()=>[e.createElementVNode("div",ae,[e.renderSlot(C.$slots,"default",{},()=>[e.createElementVNode("span",{textContent:e.toDisplayString(t.body)},null,8,re)])])])],2))}});function ce(){let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const c=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(s=="x"?c:c&3|8).toString(16)})}const ie={id:"toast-wrapper"};let O;const de=e.defineComponent({__name:"Toaster",setup(t,{expose:n}){const s={visible:!0,title:"",subtitle:"",body:"",animation:!0,autohide:!0,delay:5e3,variant:void 0},c=e.ref(new Map);O=(k,p="top right")=>{const a=ce(),d={...s,...k,id:a};let u=c.value.get(p);u instanceof Set||(u=new Set),u.add(d),c.value.set(p,u)};function i(k,p){const a=c.value.get(k);a==null||a.delete(p)}return n({toast:O}),(k,p)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",ie,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.value,([a,d])=>(e.openBlock(),e.createElementBlock("div",{key:a,class:e.normalizeClass(["toast-group",`${a}`])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d,(u,g)=>(e.openBlock(),e.createBlock(z,e.mergeProps({key:u.id},u,{onHidden:f=>i(a,u)}),null,16,["onHidden"]))),128))],2))),128))])]))}}),bt="",T=(t,n)=>{const s=t.__vccOpts||t;for(const[c,i]of n)s[c]=i;return s},F=T(de,[["__scopeId","data-v-177f801e"]]);var N=(t=>(t.SMALL="sm",t.STANDARD="",t.LARGE="lg",t.EXTRA_LARGE="xl",t))(N||{});const L=(t,n="")=>{let s=t.toLowerCase();return!Object.values(N).includes(s)||s==""?"":`${n}${s}`},ue=["onClick"],fe={class:"modal-content"},me={class:"modal-header"},pe=["innerHTML"],he={class:"modal-body"},ke=["innerHTML"],_e={class:"modal-footer"},ye=["innerHTML"],be=["innerHTML"];class M{static addToStack(n){n!=null&&this.modalStack.push(n)}static removeFromStack(n){if(n==null)return;const s=this.modalStack.indexOf(n);s<0||this.modalStack.splice(s,1)}static getLast(){const n=this.modalStack.length;if(n!==0)return this.modalStack[n-1]}}w(M,"modalStack",new Array);const A=e.defineComponent({__name:"Modal",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{default:!0},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean,default:!1},okOnly:{type:Boolean,default:!1},size:{default:N.STANDARD},btnSize:{default:N.SMALL}},setup(t,{expose:n}){const s=t,{backdrop:c,keyboard:i,focus:k,disableOutsideClick:p,size:a,btnSize:d}=e.toRefs(s),u=e.computed(()=>L(a.value,"modal-")),g=e.computed(()=>L(d.value,"btn-")),f=e.ref();let y;e.getCurrentInstance();let b;function m(){return new Promise((B,P)=>{const R=M.getLast();R&&R.hide(),M.addToStack(y),y==null||y.show(),b=B})}function o(C=!0){M.removeFromStack(y),y==null||y.hide();const B=M.getLast();B&&B.show(),typeof b=="function"&&b(C)}function l(){y==null||y.toggle()}e.onMounted(()=>{y=new V.Modal(f.value,{backdrop:c==null?void 0:c.value,keyboard:i.value,focus:k.value})});function h(C){(c==null?void 0:c.value)!=="static"&&o(!1)}function r(){o(!1)}function $(){o(!1)}function E(){o(!0)}return n({show:m,hide:o,toggle:l}),(C,B)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({ref_key:"modalElement",ref:f,class:"modal fade",tabindex:"-1"},{...C.$attrs},{onClick:e.withModifiers(h,["self"])}),[e.createElementVNode("div",{class:e.normalizeClass(["modal-dialog",e.unref(u)])},[e.createElementVNode("div",fe,[e.createElementVNode("div",me,[e.renderSlot(C.$slots,"header",{},()=>[e.createElementVNode("h5",{class:"modal-title",innerHTML:t.title},null,8,pe)]),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:r})]),e.createElementVNode("div",he,[e.renderSlot(C.$slots,"default",{},()=>[e.createElementVNode("span",{innerHTML:t.body},null,8,ke)])]),e.createElementVNode("div",_e,[e.renderSlot(C.$slots,"footer",{},()=>[t.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["btn btn-secondary",e.unref(g)]),onClick:$},[e.renderSlot(C.$slots,"button-cancel",{},()=>[e.createElementVNode("span",{innerHTML:t.textCancel},null,8,ye)])],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",e.unref(g)]),onClick:E},[e.renderSlot(C.$slots,"button-ok",{},()=>[e.createElementVNode("span",{innerHTML:t.textOk},null,8,be)])],2)])])])],2)],16,ue))}}),I=e.defineComponent({__name:"ModalManager",setup(t,{expose:n}){const s=e.ref(void 0),c=e.ref({});function i(p={}){var a;return p.okOnly=!1,c.value=p,(a=s.value)==null?void 0:a.show()}function k(p={}){var a;return p.okOnly=!0,c.value=p,(a=s.value)==null?void 0:a.show()}return n({confirm:i,alert:k}),(p,a)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createVNode(A,e.mergeProps({ref_key:"modalRef",ref:s},{...c.value}),null,16)]))}}),Ce={"data-first":""},$e=["disabled","innerHTML"],ge={"data-prev":""},Be=["disabled","innerHTML"],Ee={key:0},we=["innerHTML"],Se=["onClick"],Ve={"data-next":""},Ne=["disabled","innerHTML"],xe={"data-last":""},Te=["disabled","innerHTML"],Me=e.defineComponent({__name:"Pagination",props:{modelValue:{default:1},perPage:{default:5},maxVisibleButtons:{default:5},totalItems:{default:0},hideEllipsis:{type:Boolean,default:!1},hideGotoEndButtons:{type:Boolean,default:!1},firstText:{default:"«"},prevText:{default:"‹"},nextText:{default:"›"},lastText:{default:"»"},ellipsisText:{default:"…"},size:{default:N.STANDARD}},emits:["update:modelValue"],setup(t,{emit:n}){const s=t;function c(r,$=0){return[...Array(r).keys()].map(E=>E+$)}const{modelValue:i,maxVisibleButtons:k,hideEllipsis:p}=e.toRefs(s),a=Math.floor(k.value/2),d=e.computed(()=>{let r=k.value,$=i.value<=a?1:i.value-a;return i.value>=f.value-a&&($=f.value-r+1),$<1&&($=1),f.value<r&&(r=f.value),c(r,$)}),u=e.computed(()=>i.value<=1),g=e.computed(()=>i.value>=f.value),f=e.computed(()=>{const{perPage:r,totalItems:$}=s;return Math.ceil($/r)});e.watchEffect(()=>{f.value>0&&i.value>f.value&&n("update:modelValue",f.value)});function y(r){const $=k.value-1;return!(p.value===!0||r===0&&i.value-a-1<=0||r===$&&i.value+a>=f.value||r>0&&r<$)}function b(r){r<1&&(r=1),r>f.value&&(r=f.value),n("update:modelValue",r)}function m(){n("update:modelValue",1)}function o(){n("update:modelValue",f.value)}function l(){let r=i.value-1;r<1&&(r=1),n("update:modelValue",r)}function h(){let r=i.value+1;r>f.value&&(r=f.value),n("update:modelValue",r)}return(r,$)=>(e.openBlock(),e.createElementBlock("ul",{class:e.normalizeClass(["pagination",t.size])},[e.createElementVNode("li",Ce,[e.createElementVNode("button",{class:"",disabled:e.unref(u),innerHTML:t.firstText,onClick:m},null,8,$e)]),e.createElementVNode("li",ge,[e.createElementVNode("button",{class:"",disabled:e.unref(u),innerHTML:t.prevText,onClick:l},null,8,Be)]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),(E,C)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[y(C)?(e.openBlock(),e.createElementBlock("li",Ee,[e.createElementVNode("button",{disabled:"",class:"",innerHTML:t.ellipsisText},null,8,we)])):(e.openBlock(),e.createElementBlock("li",{key:1,"data-prev":"",class:e.normalizeClass({active:t.modelValue===E})},[e.createElementVNode("button",{class:"",onClick:B=>b(E)},e.toDisplayString(E),9,Se)],2))],64))),256)),e.createElementVNode("li",Ve,[e.createElementVNode("button",{class:"",disabled:e.unref(g),innerHTML:t.nextText,onClick:h},null,8,Ne)]),e.createElementVNode("li",xe,[e.createElementVNode("button",{class:"",disabled:e.unref(g),innerHTML:t.lastText,onClick:o},null,8,Te)])],2))}}),Ct="",j=T(Me,[["__scopeId","data-v-2bfd7085"]]),Le={class:"d-inline"},De=e.createElementVNode("span",null,"Per page: ",-1),ze={class:"fw-bold"},G=e.defineComponent({__name:"PageSizeDropdown",props:{options:{default:()=>[25,50,100]},modelValue:{default:50}},emits:["update:modelValue"],setup(t,{emit:n}){const s=t,{options:c}=e.toRefs(s),i=e.computed({get:()=>s.modelValue,set:k=>n("update:modelValue",k)});return(k,p)=>{const a=e.resolveComponent("b-dropdown-item"),d=e.resolveComponent("b-dropdown");return e.openBlock(),e.createBlock(d,e.mergeProps({variant:"outline-primary",size:"sm"},{...k.$attrs}),{button:e.withCtx(()=>[e.createElementVNode("div",Le,[e.renderSlot(k.$slots,"default",{selected:e.unref(i)},()=>[De,e.createElementVNode("span",ze,e.toDisplayString(e.unref(i)),1)])])]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(c),(u,g)=>(e.openBlock(),e.createBlock(a,{key:u,onClick:f=>i.value=u,active:u===t.modelValue},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(u),1)]),_:2},1032,["onClick","active"]))),128))]),_:3},16)}}}),Ae=["value"],K=e.defineComponent({__name:"PageSizeSelect",props:{options:{default:()=>[25,50,100]},modelValue:{default:50}},emits:["update:modelValue"],setup(t,{emit:n}){const s=t,{options:c}=e.toRefs(s),i=e.computed({get:()=>s.modelValue,set:k=>n("update:modelValue",k)});return(k,p)=>e.withDirectives((e.openBlock(),e.createElementBlock("select",{"onUpdate:modelValue":p[0]||(p[0]=a=>e.isRef(i)?i.value=a:null)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(c),(a,d)=>(e.openBlock(),e.createElementBlock("option",{key:a,value:a},e.toDisplayString(a),9,Ae))),128))],512)),[[e.vModelSelect,e.unref(i)]])}});var x=(t=>(t.ASC="ASC",t.DESC="DESC",t.IGNORE="IGNORE",t))(x||{});class He{constructor(n,s="ASC",c){w(this,"key");w(this,"direction");w(this,"sortFn");this.key=n,this.direction=s,this.sortFn=c}}const U=(t,n)=>{const s=(a,d)=>{let u=typeof a,g=typeof d;return u=="number"&&u==g},c=(a,d)=>a-d,i=(a,d)=>(a=a??"",d=d??"",a.localeCompare(d)),k=(a,d)=>s(a,d)?c:i,p=[...n];return p.sort((a,d)=>{let u=0;for(let g of t){let{key:f,direction:y,sortFn:b}=g,m=y==="ASC"?1:-1,o=a[f],l=d[f];if(b=typeof b=="function"?b:k(o,l),u=b(o,l,a,d,n,g,m)*m,u!==0)return u}return u}),p},Pe=["onClick"],Re={class:"th-wrapper"},Oe={key:0,"data-sort-indicator":""},Fe={class:"sort-index"},Ie={class:"sort-direction"},je=["onMouseover"],Ge={key:0,class:"p-5 text-muted font-italic"},Ke=["colspan"],Ue=["innerHTML"];class D{constructor(n="",s="",c=!1,i){w(this,"key");w(this,"label");w(this,"sortable");w(this,"sortFn");this.key=n,this.label=s,this.sortable=c,this.sortFn=i}}const Ye=e.defineComponent({__name:"Table",props:{fields:{default:()=>[]},items:{default:()=>[]},striped:{type:Boolean,default:!1},hover:{type:Boolean,default:!0},externalSort:{type:Boolean,default:!1},showEmpty:{type:Boolean,default:!1},emptyText:{default:"nothing to display"}},emits:["sort","onMouseOverCell"],setup(t,{emit:n}){const s=t,c=m=>{let o=[];for(const l of m)o=o.concat(Object.keys(l));return o=o.filter((l,h)=>o.indexOf(l)==h),o},i=e.ref([]),{fields:k,items:p}=e.toRefs(s),a=e.computed(()=>{if(s.externalSort||i.value.length==0)return s.items;const m=[...s.items];return U(i.value,m)}),d=e.computed(()=>{let m=k.value,o=[];return m.length===0&&(m=c([...p.value])),m.reduce((l,h,r)=>{if(typeof h=="string")l.push(new D(h,h));else if(h instanceof D)l.push(h);else if(typeof h=="object"){const{key:$,label:E,sortable:C,sortFn:B}=h;l.push(new D($,E,C,B))}return l},o)});function u(m){const o=i.value.findIndex(l=>l.key===m.key);return o<0?"":o+1}function g(m){const o=i.value.findIndex(h=>h.key===m.key);if(o<0)return"fas fa-sort";const l=i.value[o];return l.direction===x.ASC?"fas fa-sort-up":l.direction===x.DESC?"fas fa-sort-down":"far fa-exclamation-triangle"}function f(m){const{key:o}=m,l=i.value.findIndex(h=>h.key===o);if(l<0){const h=new He(o,x.ASC,m.sortFn);i.value.push(h)}else{const h=i.value[l],r=h.direction;r===x.ASC?h.direction=x.DESC:r===x.DESC&&i.value.splice(l,1)}n("sort",i.value,U)}function y(m,o,l,h){n("onMouseOverCell",m,o,l,h)}let b=e.ref(null);return e.onMounted(()=>{b.value=e.getCurrentInstance()}),(m,o)=>(e.openBlock(),e.createElementBlock("table",e.mergeProps({...m.$attrs},{class:{striped:t.striped,hover:t.hover}}),[e.createElementVNode("thead",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),l=>(e.openBlock(),e.createElementBlock("th",{key:`thead-${l.key}`,class:e.normalizeClass({sortable:l.sortable}),onClick:h=>l.sortable&&f(l)},[e.createElementVNode("span",Re,[e.renderSlot(m.$slots,`head(${l.key})`,{field:l,data:e.unref(b),value:l.label},()=>[e.createTextVNode(e.toDisplayString(l.label),1)],!0),l.sortable?(e.openBlock(),e.createElementBlock("span",Oe,[e.createElementVNode("span",Fe,e.toDisplayString(u(l)),1),e.createElementVNode("span",Ie,[e.createElementVNode("i",{class:e.normalizeClass(g(l))},null,2)])])):e.createCommentVNode("",!0)])],10,Pe))),128))]),e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(a),(l,h)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:`trow-${(l==null?void 0:l.id)??h}`},[e.renderSlot(m.$slots,"row",{item:l,index:h,colspan:e.unref(d).length},void 0,!0),e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),r=>(e.openBlock(),e.createElementBlock("td",{key:`tcell-${r.key+((l==null?void 0:l.id)??h)}`,class:e.normalizeClass({[`tcell-${r==null?void 0:r.key}`]:!0}),onMouseover:$=>y($,l,h,r)},[e.renderSlot(m.$slots,`cell(${r==null?void 0:r.key})`,{data:e.unref(b),item:l,field:r,value:l[r==null?void 0:r.key]},()=>[e.createTextVNode(e.toDisplayString(l[r==null?void 0:r.key]),1)],!0)],42,je))),128))])],64))),128))]),e.createElementVNode("tfoot",null,[e.renderSlot(m.$slots,"footer",{data:e.unref(b)},void 0,!0)]),t.showEmpty&&e.unref(a).length===0?(e.openBlock(),e.createElementBlock("tr",Ge,[e.createElementVNode("td",{colspan:e.unref(d).length},[e.renderSlot(m.$slots,"empty",{items:e.unref(a),data:e.unref(b),fields:e.unref(d)},()=>[e.createElementVNode("span",{innerHTML:t.emptyText},null,8,Ue)],!0)],8,Ke)])):e.createCommentVNode("",!0)],16))}}),$t="",Y=T(Ye,[["__scopeId","data-v-7828e531"]]);var q=(t=>(t.PRIMARY="primary",t.SECONDARY="secondary",t.WARNING="warning",t.DANGER="danger",t.INFO="info",t))(q||{});const W=e.defineComponent({__name:"Dropdown",props:{text:{default:""},variant:{default:q.PRIMARY},right:{type:Boolean,default:!1},top:{type:Boolean,default:!1},centered:{type:Boolean},dropup:{type:Boolean},dropend:{type:Boolean},dropstart:{type:Boolean},size:{default:N.STANDARD}},setup(t){const n=t,{variant:s,centered:c,dropup:i,dropend:k,dropstart:p}=e.toRefs(n),a=e.ref(!1),d=e.computed(()=>{const o=[];return s!=null&&s.value&&o.push(`btn-${s.value}`),n.size&&o.push(`btn-${n.size}`),o}),u=e.computed(()=>{const o=[];return c!=null&&c.value&&o.push("dropdown-center"),i!=null&&i.value&&o.push("dropup"),p!=null&&p.value&&o.push("dropstart"),!(p!=null&&p.value)&&(k!=null&&k.value)&&o.push("dropend"),o.length===0?o.push("dropdown"):o.unshift("btn-group"),o});function g(){a.value=!0}function f(){a.value=!1}const y="data-prevent-close";function b(o){a.value?f():g()}function m(o){const{target:l}=o;(l==null?void 0:l.closest(`[${y}],[${y}=true]`))||f()}return(o,l)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(u))},[e.createElementVNode("button",{class:e.normalizeClass(["btn dropdown-toggle",e.unref(d)]),type:"button","aria-expanded":"false",onClick:b},[e.renderSlot(o.$slots,"button",{},()=>[e.createTextVNode(e.toDisplayString(t.text),1)])],2),e.createElementVNode("ul",{class:e.normalizeClass(["dropdown-menu",{show:a.value}]),onClick:m},[e.renderSlot(o.$slots,"default")],2)],2))}}),qe=["data-prevent-close"],X=e.defineComponent({__name:"DropdownItem",props:{active:{type:Boolean},preventClose:{type:Boolean}},emits:["click","item-click"],setup(t,{emit:n}){const s=t,{preventClose:c}=e.toRefs(s);return(i,k)=>(e.openBlock(),e.createElementBlock("li",{"data-prevent-close":e.unref(c)?"":null},[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item",{active:t.active}]),href:"#"},[e.renderSlot(i.$slots,"default")],2)],8,qe))}}),We={},Xe={"data-prevent-close":""},Je={class:"dropdown-header"};function Qe(t,n){return e.openBlock(),e.createElementBlock("li",Xe,[e.createElementVNode("h6",Je,[e.renderSlot(t.$slots,"default")])])}const J=T(We,[["render",Qe]]),Ze={},ve=[e.createElementVNode("hr",{class:"dropdown-divider"},null,-1)];function et(t,n){return e.openBlock(),e.createElementBlock("li",null,ve)}const Q=T(Ze,[["render",et]]),Z={mounted(t,n,s,c){new V.Tooltip(t,{title:n.value,placement:n.arg,trigger:"hover"})}};class H{static add(n){this.list.add(n),document.body.classList.add("drawer-open")}static delete(n){this.list.delete(n),this.list.size===0&&document.body.classList.remove("drawer-open")}}w(H,"list",new Set);const tt=["onClick"],nt={class:"drawer-content"},ot={class:"drawer-header"},lt=["innerHTML"],st={class:"drawer-body"},at=["innerHTML"],rt={class:"drawer-footer"},ct=["innerHTML"],it=["innerHTML"],dt=e.defineComponent({__name:"Drawer",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{default:"static"},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean},okOnly:{type:Boolean,default:!1},size:{default:N.STANDARD},btnSize:{default:N.SMALL},lazy:{type:Boolean,default:!1}},setup(t,{expose:n}){const s=t,{backdrop:c,keyboard:i,focus:k,size:p,btnSize:a}=e.toRefs(s),d=e.computed(()=>L(p.value,"drawer-")),u=e.computed(()=>L(a.value,"btn-")),g=e.ref(),f=e.ref(!1),y=e.getCurrentInstance();let b;async function m(){return f.value===!0?void 0:new Promise((P,R)=>{f.value=!0,b=P})}function o(B=!0){f.value=!1,typeof b=="function"&&b(B)}function l(){f.value===!0?m():o(!1)}function h(B){(c==null?void 0:c.value)!=="static"&&o(!1)}function r(){o(!1)}function $(){o(!1)}function E(){o(!0)}function C(){f.value===!0?H.add(y):H.delete(y)}return n({show:m,hide:o,toggle:l}),(B,P)=>(e.openBlock(),e.createBlock(e.Transition,{onBeforeEnter:C,onAfterLeave:C},{default:e.withCtx(()=>[f.value?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,ref_key:"drawerElement",ref:g,class:"drawer",tabindex:"-1"},{...B.$attrs},{onClick:e.withModifiers(h,["self"])}),[e.createElementVNode("div",{class:e.normalizeClass(["drawer-dialog",e.unref(d)])},[e.createElementVNode("div",nt,[e.createElementVNode("div",ot,[e.renderSlot(B.$slots,"header",{},()=>[e.createElementVNode("h5",{class:"drawer-title",innerHTML:t.title},null,8,lt)],!0),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:r})]),e.createElementVNode("div",st,[e.renderSlot(B.$slots,"default",{},()=>[e.createElementVNode("span",{innerHTML:t.body},null,8,at)],!0)]),e.createElementVNode("div",rt,[e.renderSlot(B.$slots,"footer",{},()=>[t.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["ms-auto btn btn-secondary",e.unref(u)]),onClick:$},[e.renderSlot(B.$slots,"button-cancel",{},()=>[e.createElementVNode("span",{innerHTML:t.textCancel},null,8,ct)],!0)],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",e.unref(u)]),onClick:E},[e.renderSlot(B.$slots,"button-ok",{},()=>[e.createElementVNode("span",{innerHTML:t.textOk},null,8,it)],!0)],2)],!0)])])],2)],16,tt)):e.createCommentVNode("",!0)]),_:3}))}}),Bt="",Et="",ut=T(dt,[["__scopeId","data-v-2e49e8cb"]]),S="b",v="$toaster",ee="$modalManager";class te{static getComponent(){if(!this.component){const n=document.createElement("div");document.body.appendChild(n);const c=e.createApp(I).mount(n);this.component=c}return this.component}}w(te,"component");class ne{static getComponent(){if(!this.component){const n=document.createElement("div");document.body.appendChild(n);const c=e.createApp(F).mount(n);this.component=c}return this.component}}w(ne,"component");function ft(){return e.inject(v)}function mt(){return e.inject(ee)}function pt(t){t.component(`${S}-drawer`,ut),t.component(`${S}-modal`,A),t.component(`${S}-pagination`,j),t.component(`${S}-pagination-dropdown`,G),t.component(`${S}-pagination-select`,K),t.component(`${S}-dropdown`,W),t.component(`${S}-dropdown-item`,X),t.component(`${S}-dropdown-header`,J),t.component(`${S}-dropdown-divider`,Q),t.component(`${S}-table`,Y),t.component(`${S}-toast`,z)}function ht(t){t.directive("tooltip",Z)}const kt={install(t){pt(t),ht(t);const n=ne.getComponent();t.provide(v,n);const s=te.getComponent();t.provide(ee,s)}};_.BootstrapVue=kt,_.Dropdown=W,_.DropdownDivider=Q,_.DropdownHeader=J,_.DropdownItem=X,_.Modal=A,_.ModalManager=I,_.PageSizeDropdown=G,_.PageSizeSelect=K,_.Pagination=j,_.Table=Y,_.TableFieldDefinition=D,_.Toast=z,_.Toaster=F,_.tooltip=Z,_.useModal=mt,_.useToaster=ft,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
