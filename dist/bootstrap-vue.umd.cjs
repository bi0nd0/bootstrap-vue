(function(g,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("bootstrap")):typeof define=="function"&&define.amd?define(["exports","vue","bootstrap"],e):(g=typeof globalThis<"u"?globalThis:g||self,e(g.BootstrapVue={},g.Vue,g.Bootstrap))})(this,function(g,e,L){"use strict";var Tt=Object.defineProperty;var Lt=(g,e,L)=>e in g?Tt(g,e,{enumerable:!0,configurable:!0,writable:!0,value:L}):g[e]=L;var z=(g,e,L)=>Lt(g,typeof e!="symbol"?e+"":e,L);const me={class:"toast-header"},fe=["textContent"],ke=["textContent"],he={class:"toast-body"},ye=["textContent"],be=e.defineComponent({__name:"Toast",props:{visible:{type:Boolean,default:!1},title:{default:""},subtitle:{default:""},body:{default:""},animation:{type:Boolean,default:!0},autohide:{type:Boolean,default:!0},delay:{default:15e3},variant:{}},emits:["hide","hidden","show","shown"],setup(t,{expose:l,emit:i}){const o=t,k=i,{visible:a,animation:d,autohide:s,delay:m}=e.toRefs(o),c=e.ref(),B=e.ref();e.watch(a,S=>{r()},{immediate:!0});function C(){c.value.show()}function _(){c.value.hide()}function V(){c.value.dispose()}function f(){c.value.isShown()}function p(){c.value.getOrCreateInstance()}function y(){c.value.getInstance()}function r(){c.value&&(a.value===!0?C():_())}function b(){k("hide",c.value)}function n(){k("hidden",c.value)}function $(){k("show",c.value)}async function u(){k("shown",c.value)}const h={show:C,hide:_,dispose:V,isShown:f,getOrCreateInstance:p,getInstance:y};return l({...h}),e.onMounted(()=>{B.value.addEventListener("hide.bs.toast",b),B.value.addEventListener("hidden.bs.toast",n),B.value.addEventListener("show.bs.toast",$),B.value.addEventListener("shown.bs.toast",u),c.value=new L.Toast(B.value,{animation:d.value,autohide:s.value,delay:m.value}),r()}),(S,A)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"toastRef",ref:B,class:e.normalizeClass(["toast",[S.variant?`text-bg-${S.variant}`:""]]),role:"alert","aria-live":"assertive","aria-atomic":"true"},[e.renderSlot(S.$slots,"header",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("div",me,[e.renderSlot(S.$slots,"title",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("strong",{class:"me-auto",textContent:e.toDisplayString(S.title)},null,8,fe)],!0),e.renderSlot(S.$slots,"subtitle",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("small",{textContent:e.toDisplayString(S.subtitle)},null,8,ke)],!0),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:_})])],!0),e.renderSlot(S.$slots,"body",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("div",he,[e.renderSlot(S.$slots,"default",e.normalizeProps(e.guardReactiveProps({...h})),()=>[e.createElementVNode("span",{textContent:e.toDisplayString(S.body)},null,8,ye)],!0)])],!0)],2))}}),M=(t,l)=>{const i=t.__vccOpts||t;for(const[o,k]of l)i[o]=k;return i},I=M(be,[["__scopeId","data-v-c0cdbae8"]]);function _e(){let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){const o=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?o:o&3|8).toString(16)})}const ge={id:"toast-wrapper"};let q;const K=M(e.defineComponent({__name:"Toaster",setup(t,{expose:l}){const i={visible:!0,title:"",subtitle:"",body:"",animation:!0,autohide:!0,delay:5e3,variant:void 0},o=e.ref(new Map);q=(a,d="top right")=>{const s=_e(),m={...i,...a,id:s};let c=o.value.get(d);c instanceof Set||(c=new Set),c.add(m),o.value.set(d,c)};function k(a,d){const s=o.value.get(a);s==null||s.delete(d)}return l({toast:q}),(a,d)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createElementVNode("div",ge,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.value,([s,m])=>(e.openBlock(),e.createElementBlock("div",{key:s,class:e.normalizeClass(["toast-group",`${s}`])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m,(c,B)=>(e.openBlock(),e.createBlock(I,e.mergeProps({key:c.id,ref_for:!0},c,{onHidden:C=>k(s,c)}),null,16,["onHidden"]))),128))],2))),128))])]))}}),[["__scopeId","data-v-786d1c50"]]);var D=(t=>(t.SMALL="sm",t.STANDARD="",t.LARGE="lg",t.EXTRA_LARGE="xl",t))(D||{});const O=(t,l="")=>{let i=t.toLowerCase();return!Object.values(D).includes(i)||i==""?"":`${l}${i}`},Ce={class:"modal-content"},Be={class:"modal-header"},Ee=["innerHTML"],$e={class:"modal-body"},we=["innerHTML"],Se={class:"modal-footer"},Ve=["innerHTML"],Ne=["innerHTML"],F=e.defineComponent({__name:"Modal",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{type:[Boolean,String],default:!0},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean,default:!1},okOnly:{type:Boolean,default:!1},size:{default:D.STANDARD},btnSize:{default:D.SMALL},visible:{type:Boolean,default:!1}},emits:["onShown","onHidden"],setup(t,{expose:l,emit:i}){const o=t,{backdrop:k,keyboard:a,focus:d,disableOutsideClick:s,size:m,btnSize:c}=e.toRefs(o),B=i,C=e.computed(()=>O(m.value,"modal-")),_=e.computed(()=>O(c.value,"btn-")),V=e.ref();let f;e.getCurrentInstance();const p=()=>document.querySelectorAll(".modal.show").length,y=1055,r=e.ref(y),b=()=>{const E=p();r.value=y+E};let n;function $(){return new Promise((T,Ot)=>{b(),f==null||f.show(),n=T,B("onShown",f)})}function u(E=!0){f==null||f.hide(),typeof n=="function"&&n(E),B("onHidden",f)}function h(){f==null||f.toggle()}e.onMounted(()=>{f=new L.Modal(V.value,{backdrop:k==null?void 0:k.value,keyboard:a.value,focus:d.value}),e.watchEffect(()=>{(o==null?void 0:o.visible)===!0?f==null||f.show():f==null||f.hide()})});function S(E){(k==null?void 0:k.value)!=="static"&&u(!1)}function A(){u(!1)}function H(){u(!1)}function P(){u(!0)}l({modal:f,show:$,hide:u,toggle:h,onHeaderCloseClicked:A,onCancelClicked:H,onOkCLicked:P});const w={show:$,hide:u,toggle:h,modal:f};return(E,T)=>(e.openBlock(),e.createElementBlock("div",e.mergeProps({ref_key:"modalElement",ref:V,class:"modal fade",tabindex:"-1"},{...E.$attrs},{onClick:e.withModifiers(S,["self"]),style:{zIndex:r.value}}),[e.createElementVNode("div",{class:e.normalizeClass(["modal-dialog",C.value])},[e.createElementVNode("div",Ce,[e.renderSlot(E.$slots,"header",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("div",Be,[e.renderSlot(E.$slots,"title",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("h5",{class:"modal-title",innerHTML:E.title},null,8,Ee)]),e.renderSlot(E.$slots,"header-close-button",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:A})])])]),e.createElementVNode("div",$e,[e.renderSlot(E.$slots,"default",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("span",{innerHTML:E.body},null,8,we)])]),e.createElementVNode("div",Se,[e.renderSlot(E.$slots,"footer",e.normalizeProps(e.guardReactiveProps({...w})),()=>[E.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["btn btn-secondary",_.value]),onClick:H},[e.renderSlot(E.$slots,"button-cancel",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("span",{innerHTML:E.textCancel},null,8,Ve)])],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",_.value]),onClick:P},[e.renderSlot(E.$slots,"button-ok",e.normalizeProps(e.guardReactiveProps({...w})),()=>[e.createElementVNode("span",{innerHTML:E.textOk},null,8,Ne)])],2)])])])],2)],16))}}),U=e.defineComponent({__name:"ModalManager",setup(t,{expose:l}){const i=e.ref(void 0),o=e.ref({});function k(d={}){var s;return d.okOnly=!1,o.value=d,(s=i.value)==null?void 0:s.show()}function a(d={}){var s;return d.okOnly=!0,o.value=d,(s=i.value)==null?void 0:s.show()}return l({confirm:k,alert:a}),(d,s)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createVNode(F,e.mergeProps({ref_key:"modalRef",ref:i},{...o.value}),null,16)]))}}),ze={"data-header":"",class:"border-bottom"},De={class:"d-flex gap-2 p-2"},Me={class:"p-2"},Pe={"data-footer":"",class:"border-top p-2"},Te={class:"buttons"},Le=e.defineComponent({__name:"DialogBox",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{type:[Boolean,String],default:!0},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean,default:!1},okOnly:{type:Boolean,default:!1},size:{default:D.STANDARD},btnSize:{default:D.SMALL},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:!1}},setup(t,{expose:l}){const i=t,{backdrop:o,disableOutsideClick:k,modal:a,size:d,btnSize:s}=e.toRefs(i),m=()=>document.querySelectorAll("dialog[open]").length,c=1056,B=e.ref(c),C=e.ref(!1),_=e.ref(!1),V=e.ref(!1),f=e.ref(),p=e.ref(!1),y=e.computed(()=>O(d.value,"modal-")),r=e.computed(()=>O(s.value,"btn-")),b=e.computed(()=>({opening:C.value,closing:_.value,"no-backdrop":o.value===!1,static:p.value}));let n=null;const $=()=>{const w=m();B.value=c+w},u=async()=>($(),C.value=!0,f.value.addEventListener("animationend",()=>{C.value=!1,V.value=!0},{once:!0}),a.value===!0?f.value.showModal():f.value.show(),new Promise((w,E)=>{n=w})),h=async(w=!1)=>{_.value=!0,f.value.addEventListener("animationend",()=>{f.value.close(),_.value=!1,V.value=!1,typeof n=="function"&&n(w),n=null},{once:!0})},S=async()=>{V.value===!0?h():u()},A=()=>{p.value=!0,setTimeout(()=>{p.value=!1},200)},H=()=>{if(o.value==="static"||k.value===!0){A();return}h(!1)};if(a.value===!0){let w=function(T){if(o.value==="static"||k.value===!0){A();return}T.target===f.value&&h(!1)};const E=new AbortController;e.onMounted(()=>{document.addEventListener("click",T=>{w(T)},{signal:E.signal})}),e.onUnmounted(()=>{E.abort()})}const P={show:u,hide:h,toggle:S,dialog:f};return l({show:u,hide:h,toggle:S}),(w,E)=>(e.openBlock(),e.createElementBlock("div",{class:"dialog-wrapper",style:e.normalizeStyle({zIndex:B.value})},[e.createElementVNode("div",{class:"backdrop",onClick:H}),e.createElementVNode("dialog",{ref_key:"dialog",ref:f,class:e.normalizeClass(b.value)},[e.createElementVNode("div",{class:e.normalizeClass(["content",y.value])},[e.renderSlot(w.$slots,"header",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createElementVNode("div",ze,[e.createElementVNode("div",De,[e.renderSlot(w.$slots,"title",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createTextVNode(e.toDisplayString(w.title),1)],!0),e.renderSlot(w.$slots,"header-close-button",{},()=>[e.createElementVNode("button",{class:"ms-auto",type:"button","data-btn-close":"","aria-label":"Close",onClick:E[0]||(E[0]=T=>h(!1))})],!0)])])],!0),e.createElementVNode("div",Me,[e.renderSlot(w.$slots,"default",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createTextVNode(e.toDisplayString(w.body),1)],!0)]),e.renderSlot(w.$slots,"footer",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createElementVNode("div",Pe,[e.createElementVNode("div",Te,[w.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["btn btn-secondary",r.value]),onClick:E[1]||(E[1]=T=>h(!1))},[e.renderSlot(w.$slots,"textCancel",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createTextVNode(e.toDisplayString(w.textCancel),1)],!0)],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",r.value]),onClick:E[2]||(E[2]=T=>h(!0))},[e.renderSlot(w.$slots,"textOk",e.normalizeProps(e.guardReactiveProps({...P})),()=>[e.createTextVNode(e.toDisplayString(w.textOk),1)],!0)],2)])])],!0)],2)],2)],4))}}),j=M(Le,[["__scopeId","data-v-dbfc8b0f"]]),X=e.defineComponent({__name:"DialogManager",setup(t,{expose:l}){const i=e.ref(void 0),o=e.ref({});function k(d={}){var s;return d.okOnly=!1,o.value=d,(s=i.value)==null?void 0:s.show()}function a(d={}){var s;return d.okOnly=!0,o.value=d,(s=i.value)==null?void 0:s.show()}return l({confirm:k,alert:a}),(d,s)=>(e.openBlock(),e.createBlock(e.Teleport,{to:"body"},[e.createVNode(j,e.mergeProps({ref_key:"modalRef",ref:i},{...o.value}),null,16)]))}}),Re={"data-first":""},Ae=["disabled","innerHTML"],Oe={"data-prev":""},xe=["disabled","innerHTML"],He={key:0},Ie=["innerHTML"],Fe=["onClick"],je={"data-next":""},Ge=["disabled","innerHTML"],qe={"data-last":""},Ke=["disabled","innerHTML"],Ue=e.defineComponent({__name:"Pagination",props:{modelValue:{default:1},perPage:{default:5},maxVisibleButtons:{default:5},totalItems:{default:0},hideEllipsis:{type:Boolean,default:!1},hideGotoEndButtons:{type:Boolean,default:!1},firstText:{default:"«"},prevText:{default:"‹"},nextText:{default:"›"},lastText:{default:"»"},ellipsisText:{default:"…"},size:{default:D.STANDARD}},emits:["update:modelValue"],setup(t,{emit:l}){function i(n,$=0){return[...Array(n).keys()].map(u=>u+$)}const o=l,k=t,{modelValue:a,maxVisibleButtons:d,hideEllipsis:s}=e.toRefs(k),m=Math.floor(d.value/2),c=e.computed(()=>{let n=d.value,$=a.value<=m?1:a.value-m;return a.value>=_.value-m&&($=_.value-n+1),$<1&&($=1),_.value<n&&(n=_.value),i(n,$)}),B=e.computed(()=>a.value<=1),C=e.computed(()=>a.value>=_.value),_=e.computed(()=>{const{perPage:n,totalItems:$}=k;return Math.ceil($/n)});e.watchEffect(()=>{_.value>0&&a.value>_.value&&o("update:modelValue",_.value)});function V(n){const $=d.value-1;return!(s.value===!0||n===0&&a.value-m-1<=0||n===$&&a.value+m>=_.value||n>0&&n<$)}function f(n){n<1&&(n=1),n>_.value&&(n=_.value),o("update:modelValue",n)}function p(){o("update:modelValue",1)}function y(){o("update:modelValue",_.value)}function r(){let n=a.value-1;n<1&&(n=1),o("update:modelValue",n)}function b(){let n=a.value+1;n>_.value&&(n=_.value),o("update:modelValue",n)}return(n,$)=>(e.openBlock(),e.createElementBlock("ul",{class:e.normalizeClass(["pagination",n.size])},[e.createElementVNode("li",Re,[e.createElementVNode("button",{class:"",disabled:B.value,innerHTML:n.firstText,onClick:p},null,8,Ae)]),e.createElementVNode("li",Oe,[e.createElementVNode("button",{class:"",disabled:B.value,innerHTML:n.prevText,onClick:r},null,8,xe)]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.value,(u,h)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[V(h)?(e.openBlock(),e.createElementBlock("li",He,[e.createElementVNode("button",{disabled:"",class:"",innerHTML:n.ellipsisText},null,8,Ie)])):(e.openBlock(),e.createElementBlock("li",{key:1,"data-prev":"",class:e.normalizeClass({active:n.modelValue===u})},[e.createElementVNode("button",{class:"",onClick:S=>f(u)},e.toDisplayString(u),9,Fe)],2))],64))),256)),e.createElementVNode("li",je,[e.createElementVNode("button",{class:"",disabled:C.value,innerHTML:n.nextText,onClick:b},null,8,Ge)]),e.createElementVNode("li",qe,[e.createElementVNode("button",{class:"",disabled:C.value,innerHTML:n.lastText,onClick:y},null,8,Ke)])],2))}}),Y=M(Ue,[["__scopeId","data-v-2bfd7085"]]),Xe={class:"d-inline"},Ye={class:"fw-bold"},W=e.defineComponent({__name:"PageSizeDropdown",props:{options:{default:()=>[25,50,100]},modelValue:{default:50}},emits:["update:modelValue"],setup(t,{emit:l}){const i=t,o=l,{options:k}=e.toRefs(i),a=e.computed({get:()=>i.modelValue,set:d=>o("update:modelValue",d)});return(d,s)=>{const m=e.resolveComponent("b-dropdown-item"),c=e.resolveComponent("b-dropdown");return e.openBlock(),e.createBlock(c,e.mergeProps({variant:"outline-primary",size:"sm"},{...d.$attrs}),{button:e.withCtx(()=>[e.createElementVNode("div",Xe,[e.renderSlot(d.$slots,"default",{selected:a.value},()=>[s[0]||(s[0]=e.createElementVNode("span",null,"Per page: ",-1)),e.createElementVNode("span",Ye,e.toDisplayString(a.value),1)])])]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(k),(B,C)=>(e.openBlock(),e.createBlock(m,{key:B,onClick:_=>a.value=B,active:B===d.modelValue},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(B),1)]),_:2},1032,["onClick","active"]))),128))]),_:3},16)}}}),We=["value"],Z=e.defineComponent({__name:"PageSizeSelect",props:{options:{default:()=>[25,50,100]},modelValue:{default:50}},emits:["update:modelValue"],setup(t,{emit:l}){const i=t,o=l,{options:k}=e.toRefs(i),a=e.computed({get:()=>i.modelValue,set:d=>o("update:modelValue",d)});return(d,s)=>e.withDirectives((e.openBlock(),e.createElementBlock("select",{"onUpdate:modelValue":s[0]||(s[0]=m=>a.value=m)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(k),(m,c)=>(e.openBlock(),e.createElementBlock("option",{key:m,value:m},e.toDisplayString(m),9,We))),128))],512)),[[e.vModelSelect,a.value]])}});var R=(t=>(t.ASC="ASC",t.DESC="DESC",t.IGNORE="IGNORE",t))(R||{});class Ze{constructor(l,i="ASC",o){z(this,"key");z(this,"direction");z(this,"sortFn");this.key=l,this.direction=i,this.sortFn=o}}const J=(t,l)=>{const i=(s,m)=>{let c=typeof s,B=typeof m;return c=="number"&&c==B},o=(s,m)=>s-m,k=(s,m)=>(s=s??"",m=m??"",s.localeCompare(m)),a=(s,m)=>i(s,m)?o:k,d=[...l];return d.sort((s,m)=>{let c=0;for(let B of t){let{key:C,direction:_,sortFn:V}=B,f=_==="ASC"?1:-1,p=s[C],y=m[C];if(V=typeof V=="function"?V:a(p,y),c=V(p,y,s,m,l,B,f)*f,c!==0)return c}return c}),d},Je=["onClick"],Qe={class:"th-wrapper"},ve={key:0,"data-sort-indicator":""},et={class:"sort-index"},tt={class:"sort-direction"},ot=["onMouseover"],nt={key:0,class:"p-5 text-muted font-italic"},lt=["colspan"],at=["innerHTML"];class x{constructor(l="",i="",o=!1,k){z(this,"key");z(this,"label");z(this,"sortable");z(this,"sortFn");this.key=l,this.label=i,this.sortable=o,this.sortFn=k}}const Q=M(e.defineComponent({__name:"Table",props:{fields:{default:()=>[]},items:{default:()=>[]},striped:{type:Boolean,default:!1},hover:{type:Boolean,default:!0},externalSort:{type:Boolean,default:!1},showEmpty:{type:Boolean,default:!1},emptyText:{default:"nothing to display"}},emits:["sort","onMouseOverCell"],setup(t,{emit:l}){const i=p=>{let y=[];for(const r of p)y=y.concat(Object.keys(r));return y=y.filter((r,b)=>y.indexOf(r)==b),y},o=l,k=t,a=e.ref([]),{fields:d,items:s}=e.toRefs(k),m=e.computed(()=>{if(k.externalSort||a.value.length==0)return k.items;const p=[...k.items];return J(a.value,p)}),c=e.computed(()=>{let p=d.value,y=[];return p.length===0&&(p=i([...s.value])),p.reduce((r,b,n)=>{if(typeof b=="string")r.push(new x(b,b));else if(b instanceof x)r.push(b);else if(typeof b=="object"){const{key:$,label:u,sortable:h,sortFn:S}=b;r.push(new x($,u,h,S))}return r},y)});function B(p){const y=a.value.findIndex(r=>r.key===p.key);return y<0?"":y+1}function C(p){const y=a.value.findIndex(b=>b.key===p.key);if(y<0)return"fas fa-sort";const r=a.value[y];return r.direction===R.ASC?"fas fa-sort-up":r.direction===R.DESC?"fas fa-sort-down":"far fa-exclamation-triangle"}function _(p){const{key:y}=p,r=a.value.findIndex(b=>b.key===y);if(r<0){const b=new Ze(y,R.ASC,p.sortFn);a.value.push(b)}else{const b=a.value[r],n=b.direction;n===R.ASC?b.direction=R.DESC:n===R.DESC&&a.value.splice(r,1)}o("sort",a.value,J)}function V(p,y,r,b){o("onMouseOverCell",p,y,r,b)}let f=e.ref(null);return e.onMounted(()=>{f.value=e.getCurrentInstance()}),(p,y)=>(e.openBlock(),e.createElementBlock("table",e.mergeProps({...p.$attrs},{class:{striped:p.striped,hover:p.hover}}),[e.createElementVNode("thead",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.value,r=>(e.openBlock(),e.createElementBlock("th",{key:`thead-${r.key}`,class:e.normalizeClass({sortable:r.sortable}),onClick:b=>r.sortable&&_(r)},[e.createElementVNode("span",Qe,[e.renderSlot(p.$slots,`head(${r.key})`,{field:r,data:e.unref(f),value:r.label},()=>[e.createTextVNode(e.toDisplayString(r.label),1)],!0),r.sortable?(e.openBlock(),e.createElementBlock("span",ve,[e.createElementVNode("span",et,e.toDisplayString(B(r)),1),e.createElementVNode("span",tt,[e.createElementVNode("i",{class:e.normalizeClass(C(r))},null,2)])])):e.createCommentVNode("",!0)])],10,Je))),128))]),e.createElementVNode("tbody",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(m.value,(r,b)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:`trow-${(r==null?void 0:r.id)??b}`},[e.renderSlot(p.$slots,"row",{item:r,index:b,colspan:c.value.length},void 0,!0),e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(c.value,n=>(e.openBlock(),e.createElementBlock("td",{key:`tcell-${n.key+((r==null?void 0:r.id)??b)}`,class:e.normalizeClass({[`tcell-${n==null?void 0:n.key}`]:!0}),onMouseover:$=>V($,r,b,n)},[e.renderSlot(p.$slots,`cell(${n==null?void 0:n.key})`,{data:e.unref(f),item:r,field:n,value:r[n==null?void 0:n.key]},()=>[e.createTextVNode(e.toDisplayString(r[n==null?void 0:n.key]),1)],!0)],42,ot))),128))])],64))),128))]),e.createElementVNode("tfoot",null,[e.renderSlot(p.$slots,"footer",{data:e.unref(f)},void 0,!0)]),p.showEmpty&&m.value.length===0?(e.openBlock(),e.createElementBlock("tr",nt,[e.createElementVNode("td",{colspan:c.value.length},[e.renderSlot(p.$slots,"empty",{items:m.value,data:e.unref(f),fields:c.value},()=>[e.createElementVNode("span",{innerHTML:p.emptyText},null,8,at)],!0)],8,lt)])):e.createCommentVNode("",!0)],16))}}),[["__scopeId","data-v-b1e9b5de"]]);var v=(t=>(t.PRIMARY="primary",t.SECONDARY="secondary",t.WARNING="warning",t.DANGER="danger",t.INFO="info",t))(v||{});const st={class:"d-inline-block position-relative"},rt=["disabled"],ee="data-prevent-close",ct=e.defineComponent({__name:"Dropdown",props:{text:{default:""},variant:{default:v.PRIMARY},right:{type:Boolean,default:!1},top:{type:Boolean,default:!1},centered:{type:Boolean},dropup:{type:Boolean},dropend:{type:Boolean},dropstart:{type:Boolean},menuEnd:{type:Boolean,default:!1},size:{default:D.STANDARD},disabled:{type:Boolean}},setup(t,{expose:l}){const i=e.ref(),o=t,k=e.ref(),{variant:a,centered:d,dropup:s,dropend:m,dropstart:c,menuEnd:B}=e.toRefs(o),C=e.ref(!1),_=e.computed(()=>{const u=[];return a!=null&&a.value&&u.push(`btn-${a.value}`),o.size&&u.push(`btn-${o.size}`),u}),V=e.computed(()=>{const u=[];return d!=null&&d.value&&u.push("dropdown-center"),s!=null&&s.value&&u.push("dropup"),c!=null&&c.value&&u.push("dropstart"),!(c!=null&&c.value)&&(m!=null&&m.value)&&u.push("dropend"),u.length===0?u.push("dropdown"):u.unshift("btn-group"),u}),f=e.computed(()=>{const u=[];return C.value&&u.push("show"),B.value&&u.push("dropdown-menu-end"),u});function p(){C.value=!0}function y(){C.value=!1}function r(u){C.value?y():p()}function b(u){const{target:h}=u;(h==null?void 0:h.closest(`[${ee}],[${ee}=true]`))||y()}function n(){C.value&&y()}const $={show:C,disabled:o.disabled,buttonClasses:_,onButtonClicked:r,onMenuClicked:b,onClickOutside:n,open:p,close:y};return l({...$}),(u,h)=>{const S=e.resolveDirective("click-outside");return e.openBlock(),e.createElementBlock("div",{ref_key:"dropDownRef",ref:k,class:e.normalizeClass(V.value)},[e.withDirectives((e.openBlock(),e.createElementBlock("div",st,[e.renderSlot(u.$slots,"header",e.normalizeProps(e.guardReactiveProps({...$})),()=>[e.createElementVNode("button",{class:e.normalizeClass(["btn dropdown-toggle",_.value]),type:"button","aria-expanded":"false",onClick:r,disabled:u.disabled},[e.renderSlot(u.$slots,"button",e.normalizeProps(e.guardReactiveProps({...$})),()=>[e.createTextVNode(e.toDisplayString(u.text),1)],!0)],10,rt)],!0),e.createElementVNode("ul",{ref_key:"dropDownMenuRef",ref:i,class:e.normalizeClass(["dropdown-menu",f.value]),onClick:b},[e.renderSlot(u.$slots,"default",e.normalizeProps(e.guardReactiveProps({...$})),void 0,!0)],2)])),[[S,n]])],2)}}}),te=M(ct,[["__scopeId","data-v-79c677ae"]]),it=["data-prevent-close"],oe=e.defineComponent({__name:"DropdownItem",props:{active:{type:Boolean},preventClose:{type:Boolean}},setup(t){const l=t,{preventClose:i}=e.toRefs(l);return(o,k)=>(e.openBlock(),e.createElementBlock("li",{"data-prevent-close":e.unref(i)?"":null},[e.createElementVNode("span",{class:e.normalizeClass(["dropdown-item",{active:o.active}]),role:"button",tabindex:"0"},[e.renderSlot(o.$slots,"default")],2)],8,it))}}),dt={},pt={"data-prevent-close":""},ut={class:"dropdown-header"};function mt(t,l){return e.openBlock(),e.createElementBlock("li",pt,[e.createElementVNode("h6",ut,[e.renderSlot(t.$slots,"default")])])}const ne=M(dt,[["render",mt]]),ft={};function kt(t,l){return e.openBlock(),e.createElementBlock("li",null,l[0]||(l[0]=[e.createElementVNode("hr",{class:"dropdown-divider"},null,-1)]))}const le=M(ft,[["render",kt]]),ae={mounted(t,l,i,o){new L.Tooltip(t,{title:l.value,placement:l.arg,trigger:"hover"})}},ht=(t,l)=>{function i(a,d){for(;a!==null;){if(a===d)return!0;a=a.parentNode}return!1}const o=new AbortController;function k(a,d){document.addEventListener("click",function(s){const m=s.target;a&&(i(m,a)||d())},{signal:o.signal})}return k(t,l),o},se={mounted(t,l,i,o){const k=l.value;ht(t,k)}};class G{static add(l){this.list.add(l),document.body.classList.add("drawer-open")}static delete(l){this.list.delete(l),this.list.size===0&&document.body.classList.remove("drawer-open")}}z(G,"list",new Set);const yt={class:"drawer-content"},bt={class:"drawer-header"},_t=["innerHTML"],gt={class:"drawer-body"},Ct=["innerHTML"],Bt={class:"drawer-footer"},Et=["innerHTML"],$t=["innerHTML"],wt=e.defineComponent({__name:"Drawer",props:{title:{default:""},body:{default:""},textCancel:{default:"Cancel"},textOk:{type:[String,Boolean],default:"Ok"},backdrop:{type:[Boolean,String],default:"static"},keyboard:{type:Boolean,default:!0},focus:{type:Boolean,default:!0},disableOutsideClick:{type:Boolean},okOnly:{type:Boolean,default:!1},size:{default:D.STANDARD},btnSize:{default:D.SMALL},lazy:{type:Boolean,default:!1}},setup(t,{expose:l}){const i=t,{backdrop:o,keyboard:k,focus:a,size:d,btnSize:s}=e.toRefs(i),m=e.computed(()=>O(d.value,"drawer-")),c=e.computed(()=>O(s.value,"btn-")),B=e.ref(),C=e.ref(!1),_=e.getCurrentInstance();let V;async function f(){return C.value===!0?void 0:new Promise((S,A)=>{C.value=!0,V=S})}function p(h=!0){C.value=!1,typeof V=="function"&&V(h)}function y(){C.value===!0?f():p(!1)}function r(h){(o==null?void 0:o.value)!=="static"&&p(!1)}function b(){p(!1)}function n(){p(!1)}function $(){p(!0)}function u(){C.value===!0?G.add(_):G.delete(_)}return l({show:f,hide:p,toggle:y}),(h,S)=>(e.openBlock(),e.createBlock(e.Transition,{onBeforeEnter:u,onAfterLeave:u},{default:e.withCtx(()=>[C.value?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,ref_key:"drawerElement",ref:B,class:"drawer",tabindex:"-1"},{...h.$attrs},{onClick:e.withModifiers(r,["self"])}),[e.createElementVNode("div",{class:e.normalizeClass(["drawer-dialog",m.value])},[e.createElementVNode("div",yt,[e.createElementVNode("div",bt,[e.renderSlot(h.$slots,"header",{},()=>[e.createElementVNode("h5",{class:"drawer-title",innerHTML:h.title},null,8,_t)],!0),e.createElementVNode("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:b})]),e.createElementVNode("div",gt,[e.renderSlot(h.$slots,"default",{},()=>[e.createElementVNode("span",{innerHTML:h.body},null,8,Ct)],!0)]),e.createElementVNode("div",Bt,[e.renderSlot(h.$slots,"footer",{},()=>[h.okOnly?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:e.normalizeClass(["ms-auto btn btn-secondary",c.value]),onClick:n},[e.renderSlot(h.$slots,"button-cancel",{},()=>[e.createElementVNode("span",{innerHTML:h.textCancel},null,8,Et)],!0)],2)),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["btn btn-primary",c.value]),onClick:$},[e.renderSlot(h.$slots,"button-ok",{},()=>[e.createElementVNode("span",{innerHTML:h.textOk},null,8,$t)],!0)],2)],!0)])])],2)],16)):e.createCommentVNode("",!0)]),_:3}))}}),St=M(wt,[["__scopeId","data-v-2e49e8cb"]]),N="b",re="$toaster",ce="$modalManager",ie="$dialogManager";class de{static getComponent(){if(!this.component){const l=document.createElement("div");document.body.appendChild(l);const o=e.createApp(U).mount(l);this.component=o}return this.component}}z(de,"component");class pe{static getComponent(){if(!this.component){const l=document.createElement("div");document.body.appendChild(l);const o=e.createApp(X).mount(l);this.component=o}return this.component}}z(pe,"component");class ue{static getComponent(){if(!this.component){const l=document.createElement("div");document.body.appendChild(l);const o=e.createApp(K).mount(l);this.component=o}return this.component}}z(ue,"component");function Vt(){return e.inject(re)}function Nt(){return e.inject(ce)}function zt(){return e.inject(ie)}function Dt(t){t.component(`${N}-drawer`,St),t.component(`${N}-modal`,F),t.component(`${N}-dialog`,j),t.component(`${N}-pagination`,Y),t.component(`${N}-pagination-dropdown`,W),t.component(`${N}-pagination-select`,Z),t.component(`${N}-dropdown`,te),t.component(`${N}-dropdown-item`,oe),t.component(`${N}-dropdown-header`,ne),t.component(`${N}-dropdown-divider`,le),t.component(`${N}-table`,Q),t.component(`${N}-toast`,I)}function Mt(t){t.directive("tooltip",ae),t.directive("click-outside",se)}const Pt={install(t){Dt(t),Mt(t);const l=ue.getComponent(),i=de.getComponent(),o=pe.getComponent();t.provide(re,l),t.provide(ce,i),t.provide(ie,o)}};g.BootstrapVue=Pt,g.DialogBox=j,g.DialogManager=X,g.Dropdown=te,g.DropdownDivider=le,g.DropdownHeader=ne,g.DropdownItem=oe,g.Modal=F,g.ModalManager=U,g.PageSizeDropdown=W,g.PageSizeSelect=Z,g.Pagination=Y,g.Table=Q,g.TableFieldDefinition=x,g.Toast=I,g.Toaster=K,g.clickOutside=se,g.tooltip=ae,g.useDialog=zt,g.useModal=Nt,g.useToaster=Vt,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
