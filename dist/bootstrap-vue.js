var ie = Object.defineProperty;
var ue = (e, n, s) => n in e ? ie(e, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[n] = s;
var M = (e, n, s) => (ue(e, typeof n != "symbol" ? n + "" : n, s), s);
import { defineComponent as E, toRefs as P, ref as S, watch as ce, onMounted as J, openBlock as y, createElementBlock as $, normalizeClass as T, renderSlot as C, createElementVNode as o, toDisplayString as D, createBlock as G, Teleport as Z, Fragment as A, renderList as V, mergeProps as z, computed as B, getCurrentInstance as K, withModifiers as Q, unref as w, createCommentVNode as R, createVNode as de, watchEffect as fe, createTextVNode as X, Transition as ve, withCtx as pe, inject as ee, createApp as te } from "vue";
import { Toast as he, Modal as me, Tooltip as _e } from "bootstrap";
const ye = { class: "toast-header" }, be = ["textContent"], ke = ["textContent"], $e = { class: "toast-body" }, Ce = ["textContent"], ne = /* @__PURE__ */ E({
  __name: "Toast",
  props: {
    visible: { type: Boolean, default: !1 },
    title: { default: "" },
    subtitle: { default: "" },
    body: { default: "" },
    animation: { type: Boolean, default: !0 },
    autohide: { type: Boolean, default: !0 },
    delay: { default: 15e3 },
    variant: null
  },
  emits: ["hide", "hidden", "show", "shown"],
  setup(e, { expose: n, emit: s }) {
    const l = e, { visible: u, animation: k, autohide: h, delay: a } = P(l), c = S(), f = S();
    ce(u, (L) => {
      v();
    }, { immediate: !0 });
    function _() {
      c.value.show();
    }
    function p() {
      c.value.hide();
    }
    function g() {
      c.value.dispose();
    }
    function r() {
      c.value.isShown();
    }
    function m() {
      c.value.getOrCreateInstance();
    }
    function t() {
      c.value.getInstance();
    }
    function v() {
      c.value && (u.value === !0 ? _() : p());
    }
    function b() {
      s("hide", c.value);
    }
    function d() {
      s("hidden", c.value);
    }
    function i() {
      s("show", c.value);
    }
    async function x() {
      s("shown", c.value);
    }
    return n({ show: _, hide: p, dispose: g, isShown: r, getOrCreateInstance: m, getInstance: t }), J(() => {
      f.value.addEventListener("hide.bs.toast", b), f.value.addEventListener("hidden.bs.toast", d), f.value.addEventListener("show.bs.toast", i), f.value.addEventListener("shown.bs.toast", x), c.value = new he(f.value, {
        animation: k.value,
        autohide: h.value,
        delay: a.value
      }), v();
    }), (L, j) => (y(), $("div", {
      ref_key: "toastRef",
      ref: f,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(L.$slots, "header", {}, () => [
        o("div", ye, [
          C(L.$slots, "title", {}, () => [
            o("strong", {
              class: "me-auto",
              textContent: D(e.title)
            }, null, 8, be)
          ]),
          C(L.$slots, "subtitle", {}, () => [
            o("small", {
              textContent: D(e.subtitle)
            }, null, 8, ke)
          ]),
          o("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ]),
      C(L.$slots, "body", {}, () => [
        o("div", $e, [
          C(L.$slots, "default", {}, () => [
            o("span", {
              textContent: D(e.body)
            }, null, 8, Ce)
          ])
        ])
      ])
    ], 2));
  }
});
function we() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(s) {
    const l = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (s == "x" ? l : l & 3 | 8).toString(16);
  });
}
const ge = { id: "toast-wrapper" };
let W;
const xe = /* @__PURE__ */ E({
  __name: "Toaster",
  setup(e, { expose: n }) {
    const s = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, l = S(/* @__PURE__ */ new Map());
    W = (k, h = "top right") => {
      const a = we(), c = { ...s, ...k, id: a };
      let f = l.value.get(h);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), l.value.set(h, f);
    };
    function u(k, h) {
      const a = l.value.get(k);
      a == null || a.delete(h);
    }
    return n({ toast: W }), (k, h) => (y(), G(Z, { to: "body" }, [
      o("div", ge, [
        (y(!0), $(A, null, V(l.value, ([a, c]) => (y(), $("div", {
          key: a,
          class: T(["toast-group", `${a}`])
        }, [
          (y(!0), $(A, null, V(c, (f, _) => (y(), G(ne, z({
            key: f.id
          }, f, {
            onHidden: (p) => u(a, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const F = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [l, u] of n)
    s[l] = u;
  return s;
}, Te = /* @__PURE__ */ F(xe, [["__scopeId", "data-v-177f801e"]]);
var N = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(N || {});
const Le = ["onClick"], Me = { class: "modal-content" }, Se = { class: "modal-header" }, Be = ["innerHTML"], He = { class: "modal-body" }, Ee = ["innerHTML"], Ae = { class: "modal-footer" }, De = ["innerHTML"], Oe = ["innerHTML"];
class I {
  static addToStack(n) {
    n != null && this.modalStack.push(n);
  }
  static removeFromStack(n) {
    if (n == null)
      return;
    const s = this.modalStack.indexOf(n);
    s < 0 || (this.modalStack.splice(s, 1), console.log(this.modalStack));
  }
  static getLast() {
    const n = this.modalStack.length;
    if (n !== 0)
      return this.modalStack[n - 1];
  }
}
M(I, "modalStack", new Array());
const oe = /* @__PURE__ */ E({
  __name: "Modal",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { default: !0 },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    size: { default: N.STANDARD }
  },
  setup(e, { expose: n }) {
    const s = e, {
      backdrop: l,
      keyboard: u,
      focus: k,
      disableOutsideClick: h,
      size: a
    } = P(s), c = B(() => {
      let i = a.value.toLowerCase();
      return !Object.values(N).includes(i) || i == "" ? "" : `modal-${i}`;
    }), f = S();
    let _;
    K();
    let p;
    function g() {
      return new Promise((x, L) => {
        const j = I.getLast();
        j && j.hide(), I.addToStack(_), _ == null || _.show(), p = x;
      });
    }
    function r(i = !0) {
      I.removeFromStack(_), _ == null || _.hide();
      const x = I.getLast();
      x && x.show(), typeof p == "function" && p(i);
    }
    function m() {
      _ == null || _.toggle();
    }
    J(() => {
      _ = new me(f.value, {
        backdrop: l == null ? void 0 : l.value,
        keyboard: u.value,
        focus: k.value
      });
    });
    function t(i) {
      (l == null ? void 0 : l.value) !== "static" && r(!1);
    }
    function v() {
      r(!1);
    }
    function b() {
      r(!1);
    }
    function d() {
      r(!0);
    }
    return n({
      show: g,
      hide: r,
      toggle: m
    }), (i, x) => (y(), $("div", z({
      ref_key: "modalElement",
      ref: f,
      class: "modal fade",
      tabindex: "-1"
    }, { ...i.$attrs }, {
      onClick: Q(t, ["self"])
    }), [
      o("div", {
        class: T(["modal-dialog", w(c)])
      }, [
        o("div", Me, [
          o("div", Se, [
            C(i.$slots, "header", {}, () => [
              o("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Be)
            ]),
            o("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: v
            })
          ]),
          o("div", He, [
            C(i.$slots, "default", {}, () => [
              o("span", { innerHTML: e.body }, null, 8, Ee)
            ])
          ]),
          o("div", Ae, [
            C(i.$slots, "footer", {}, () => [
              e.okOnly ? R("", !0) : (y(), $("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary",
                onClick: b
              }, [
                C(i.$slots, "button-cancel", {}, () => [
                  o("span", { innerHTML: e.textCancel }, null, 8, De)
                ])
              ])),
              o("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: d
              }, [
                C(i.$slots, "button-ok", {}, () => [
                  o("span", { innerHTML: e.textOk }, null, 8, Oe)
                ])
              ])
            ])
          ])
        ])
      ], 2)
    ], 16, Le));
  }
}), Pe = /* @__PURE__ */ E({
  __name: "ModalManager",
  setup(e, { expose: n }) {
    const s = S(void 0), l = S({});
    function u(h = {}) {
      var a;
      return h.okOnly = !1, l.value = h, (a = s.value) == null ? void 0 : a.show();
    }
    function k(h = {}) {
      var a;
      return h.okOnly = !0, l.value = h, (a = s.value) == null ? void 0 : a.show();
    }
    return n({ confirm: u, alert: k }), (h, a) => (y(), G(Z, { to: "body" }, [
      de(oe, z({
        ref_key: "modalRef",
        ref: s
      }, { ...l.value }), null, 16)
    ]));
  }
}), Ve = { "data-first": "" }, Fe = ["disabled", "innerHTML"], Ie = { "data-prev": "" }, Re = ["disabled", "innerHTML"], Ne = { key: 0 }, ze = ["innerHTML"], je = ["onClick"], Ge = { "data-next": "" }, Ke = ["disabled", "innerHTML"], Ue = { "data-last": "" }, Xe = ["disabled", "innerHTML"], qe = /* @__PURE__ */ E({
  __name: "Pagination",
  props: {
    modelValue: { default: 1 },
    perPage: { default: 5 },
    maxVisibleButtons: { default: 5 },
    totalItems: { default: 0 },
    hideEllipsis: { type: Boolean, default: !1 },
    hideGotoEndButtons: { type: Boolean, default: !1 },
    firstText: { default: "«" },
    prevText: { default: "‹" },
    nextText: { default: "›" },
    lastText: { default: "»" },
    ellipsisText: { default: "…" },
    size: {
      default: ""
      /* NORMAL */
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const s = e;
    function l(d, i = 0) {
      return [...Array(d).keys()].map((x) => x + i);
    }
    const { modelValue: u, maxVisibleButtons: k, hideEllipsis: h } = P(s), a = Math.floor(k.value / 2), c = B(() => {
      let d = k.value, i = u.value <= a ? 1 : u.value - a;
      return u.value >= p.value - a && (i = p.value - d + 1), i < 1 && (i = 1), p.value < d && (d = p.value), l(d, i);
    }), f = B(() => u.value <= 1), _ = B(() => u.value >= p.value), p = B(() => {
      const { perPage: d, totalItems: i } = s;
      return Math.ceil(i / d);
    });
    fe(() => {
      p.value > 0 && u.value > p.value && n("update:modelValue", p.value);
    });
    function g(d) {
      const i = k.value - 1;
      return !(h.value === !0 || d === 0 && u.value - a - 1 <= 0 || d === i && u.value + a >= p.value || d > 0 && d < i);
    }
    function r(d) {
      d < 1 && (d = 1), d > p.value && (d = p.value), n("update:modelValue", d);
    }
    function m() {
      n("update:modelValue", 1);
    }
    function t() {
      n("update:modelValue", p.value);
    }
    function v() {
      let d = u.value - 1;
      d < 1 && (d = 1), n("update:modelValue", d);
    }
    function b() {
      let d = u.value + 1;
      d > p.value && (d = p.value), n("update:modelValue", d);
    }
    return (d, i) => (y(), $("ul", {
      class: T(["pagination", e.size])
    }, [
      o("li", Ve, [
        o("button", {
          class: "",
          disabled: w(f),
          innerHTML: e.firstText,
          onClick: m
        }, null, 8, Fe)
      ]),
      o("li", Ie, [
        o("button", {
          class: "",
          disabled: w(f),
          innerHTML: e.prevText,
          onClick: v
        }, null, 8, Re)
      ]),
      (y(!0), $(A, null, V(w(c), (x, L) => (y(), $(A, null, [
        g(L) ? (y(), $("li", Ne, [
          o("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, ze)
        ])) : (y(), $("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === x })
        }, [
          o("button", {
            class: "",
            onClick: (j) => r(x)
          }, D(x), 9, je)
        ], 2))
      ], 64))), 256)),
      o("li", Ge, [
        o("button", {
          class: "",
          disabled: w(_),
          innerHTML: e.nextText,
          onClick: b
        }, null, 8, Ke)
      ]),
      o("li", Ue, [
        o("button", {
          class: "",
          disabled: w(_),
          innerHTML: e.lastText,
          onClick: t
        }, null, 8, Xe)
      ])
    ], 2));
  }
});
const Je = /* @__PURE__ */ F(qe, [["__scopeId", "data-v-6b815ca0"]]);
var O = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(O || {});
class Qe {
  constructor(n, s = "ASC", l) {
    M(this, "key");
    M(this, "direction");
    M(this, "sortFn");
    this.key = n, this.direction = s, this.sortFn = l;
  }
}
const Y = (e, n) => {
  const s = (a, c) => {
    let f = typeof a, _ = typeof c;
    return f == "number" && f == _;
  }, l = (a, c) => a - c, u = (a, c) => (a = a ?? "", c = c ?? "", a.localeCompare(c)), k = (a, c) => s(a, c) ? l : u, h = [...n];
  return h.sort((a, c) => {
    let f = 0;
    for (let _ of e) {
      let { key: p, direction: g, sortFn: r } = _, m = g === "ASC" ? 1 : -1, t = a[p], v = c[p];
      if (r = typeof r == "function" ? r : k(t, v), f = r(t, v, a, c, n, _, m) * m, f !== 0)
        return f;
    }
    return f;
  }), h;
}, We = ["onClick"], Ye = { class: "th-wrapper" }, Ze = {
  key: 0,
  "data-sort-indicator": ""
}, et = { class: "sort-index" }, tt = { class: "sort-direction" }, nt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, ot = ["colspan"], st = ["innerHTML"];
class U {
  constructor(n = "", s = "", l = !1, u) {
    M(this, "key");
    // age
    M(this, "label");
    // Person age
    M(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    M(this, "sortFn");
    this.key = n, this.label = s, this.sortable = l, this.sortFn = u;
  }
}
const at = /* @__PURE__ */ E({
  __name: "Table",
  props: {
    fields: { default: () => [] },
    items: { default: () => [] },
    striped: { type: Boolean, default: !1 },
    hover: { type: Boolean, default: !0 },
    externalSort: { type: Boolean, default: !1 },
    showEmpty: { type: Boolean, default: !1 },
    emptyText: { default: "nothing to display" }
  },
  emits: ["sort"],
  setup(e, { emit: n }) {
    const s = e, l = (r) => {
      let m = [];
      for (const t of r)
        m = m.concat(Object.keys(t));
      return m = m.filter((t, v) => m.indexOf(t) == v), m;
    }, u = S([]), { fields: k, items: h } = P(s), a = B(() => {
      if (s.externalSort || u.value.length == 0)
        return s.items;
      const r = [...s.items];
      return Y(u.value, r);
    }), c = B(() => {
      let r = k.value, m = [];
      return r.length === 0 && (r = l([...h.value])), r.reduce((t, v, b) => {
        if (typeof v == "string")
          t.push(new U(v, v));
        else if (v instanceof U)
          t.push(v);
        else if (typeof v == "object") {
          const { key: d, label: i, sortable: x, sortFn: L } = v;
          t.push(new U(d, i, x, L));
        }
        return t;
      }, m);
    });
    function f(r) {
      const m = u.value.findIndex((t) => t.key === r.key);
      return m < 0 ? "" : m + 1;
    }
    function _(r) {
      const m = u.value.findIndex((v) => v.key === r.key);
      if (m < 0)
        return "fas fa-sort";
      const t = u.value[m];
      return t.direction === O.ASC ? "fas fa-sort-up" : t.direction === O.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(r) {
      const { key: m } = r, t = u.value.findIndex((v) => v.key === m);
      if (t < 0) {
        const v = new Qe(m, O.ASC, r.sortFn);
        u.value.push(v);
      } else {
        const v = u.value[t], b = v.direction;
        b === O.ASC ? v.direction = O.DESC : b === O.DESC && u.value.splice(t, 1);
      }
      n("sort", u.value, Y);
    }
    let g = S(null);
    return J(() => {
      g.value = K();
    }), (r, m) => (y(), $("table", z({ ...r.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      o("thead", null, [
        (y(!0), $(A, null, V(w(c), (t) => (y(), $("th", {
          key: `thead-${t.key}`,
          class: T({ sortable: t.sortable }),
          onClick: (v) => t.sortable && p(t)
        }, [
          o("span", Ye, [
            C(r.$slots, `head(${t.key})`, {
              field: t,
              data: w(g),
              value: t.label
            }, () => [
              X(D(t.label), 1)
            ], !0),
            t.sortable ? (y(), $("span", Ze, [
              o("span", et, D(f(t)), 1),
              o("span", tt, [
                o("i", {
                  class: T(_(t))
                }, null, 2)
              ])
            ])) : R("", !0)
          ])
        ], 10, We))), 128))
      ]),
      o("tbody", null, [
        (y(!0), $(A, null, V(w(a), (t, v) => (y(), $(A, {
          key: `trow-${(t == null ? void 0 : t.id) ?? v}`
        }, [
          C(r.$slots, "row", {
            item: t,
            index: v,
            colspan: w(c).length
          }, void 0, !0),
          o("tr", null, [
            (y(!0), $(A, null, V(w(c), (b) => (y(), $("td", {
              key: `tcell-${b.key + ((t == null ? void 0 : t.id) ?? v)}`,
              class: T({ [`tcell-${b == null ? void 0 : b.key}`]: !0 })
            }, [
              C(r.$slots, `cell(${b == null ? void 0 : b.key})`, {
                data: w(g),
                item: t,
                field: b,
                value: t[b == null ? void 0 : b.key]
              }, () => [
                X(D(t[b == null ? void 0 : b.key]), 1)
              ], !0)
            ], 2))), 128))
          ])
        ], 64))), 128))
      ]),
      o("tfoot", null, [
        C(r.$slots, "footer", { data: w(g) }, void 0, !0)
      ]),
      e.showEmpty && w(a).length === 0 ? (y(), $("tr", nt, [
        o("td", {
          colspan: w(c).length
        }, [
          C(r.$slots, "empty", {
            items: w(a),
            data: w(g),
            fields: w(c)
          }, () => [
            o("span", { innerHTML: e.emptyText }, null, 8, st)
          ], !0)
        ], 8, ot)
      ])) : R("", !0)
    ], 16));
  }
});
const lt = /* @__PURE__ */ F(at, [["__scopeId", "data-v-5556187e"]]), rt = /* @__PURE__ */ E({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: {
      default: "primary"
      /* PRIMARY */
    },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean }
  },
  setup(e) {
    const n = e, { variant: s, centered: l, dropup: u, dropend: k, dropstart: h } = P(n), a = S(!1), c = B(() => {
      const t = [];
      return s.value && t.push(`btn-${s.value}`), t;
    }), f = B(() => {
      const t = [];
      return l != null && l.value && t.push("dropdown-center"), u != null && u.value && t.push("dropup"), h != null && h.value && t.push("dropstart"), !(h != null && h.value) && (k != null && k.value) && t.push("dropend"), t.length === 0 ? t.push("dropdown") : t.unshift("btn-group"), t;
    });
    function _() {
      a.value = !0;
    }
    function p() {
      a.value = !1;
    }
    const g = "data-prevent-close";
    let r;
    function m(t) {
      const { currentTarget: v } = t;
      a.value ? p() : _(), a.value && (r = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (b) => {
          const { target: d } = b;
          d != null && d.closest(`[${g}],[${g}=true]`) || d === v || (p(), r.abort());
        }, { signal: r.signal });
      }, 0));
    }
    return (t, v) => (y(), $("div", {
      class: T(w(f))
    }, [
      o("button", {
        class: T(["btn dropdown-toggle", w(c)]),
        type: "button",
        "data-bs-toggle": "aaaadropdown",
        "aria-expanded": "false",
        onClick: m
      }, [
        C(t.$slots, "button", {}, () => [
          X(D(e.text), 1)
        ])
      ], 2),
      o("ul", {
        class: T(["dropdown-menu", { show: a.value }])
      }, [
        C(t.$slots, "default")
      ], 2)
    ], 2));
  }
}), it = ["data-prevent-close"], ut = ["onClick"], ct = /* @__PURE__ */ E({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const s = e, { preventClose: l } = P(s);
    function u() {
      const k = K();
      n("click", k);
    }
    return (k, h) => (y(), $("li", {
      "data-prevent-close": w(l) ? "" : null
    }, [
      o("a", {
        class: T(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: Q(u, ["prevent"])
      }, [
        C(k.$slots, "default")
      ], 10, ut)
    ], 8, it));
  }
}), dt = {}, ft = { "data-prevent-close": "" }, vt = { class: "dropdown-header" };
function pt(e, n) {
  return y(), $("li", ft, [
    o("h6", vt, [
      C(e.$slots, "default")
    ])
  ]);
}
const ht = /* @__PURE__ */ F(dt, [["render", pt]]), mt = {}, _t = /* @__PURE__ */ o("hr", { class: "dropdown-divider" }, null, -1), yt = [
  _t
];
function bt(e, n) {
  return y(), $("li", null, yt);
}
const kt = /* @__PURE__ */ F(mt, [["render", bt]]), $t = {
  mounted(e, n, s, l) {
    new _e(e, {
      title: n.value,
      placement: n.arg,
      trigger: "hover"
    });
  }
};
class q {
  static add(n) {
    this.list.add(n), document.body.classList.add("drawer-open");
  }
  static delete(n) {
    this.list.delete(n), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
M(q, "list", /* @__PURE__ */ new Set());
const Ct = ["onClick"], wt = { class: "drawer-content" }, gt = { class: "drawer-header" }, xt = ["innerHTML"], Tt = { class: "drawer-body" }, Lt = ["innerHTML"], Mt = { class: "drawer-footer" }, St = ["innerHTML"], Bt = ["innerHTML"], Ht = /* @__PURE__ */ E({
  __name: "Drawer",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { default: "static" },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean },
    okOnly: { type: Boolean, default: !1 },
    size: { default: N.STANDARD }
  },
  setup(e, { expose: n }) {
    const s = e, {
      backdrop: l,
      keyboard: u,
      focus: k,
      size: h
    } = P(s), a = B(() => {
      let i = h.value.toLowerCase();
      return !Object.values(N).includes(i) || i == "" ? "" : `drawer-${i}`;
    }), c = S(), f = S(!1), _ = K();
    let p;
    async function g() {
      return f.value === !0 ? void 0 : new Promise((x, L) => {
        q.add(_), f.value = !0, p = x;
      });
    }
    function r(i = !0) {
      q.delete(_), f.value = !1, typeof p == "function" && p(i);
    }
    function m() {
      f.value === !0 ? g() : r(!1);
    }
    function t(i) {
      (l == null ? void 0 : l.value) !== "static" && r(!1);
    }
    function v() {
      r(!1);
    }
    function b() {
      r(!1);
    }
    function d() {
      r(!0);
    }
    return n({
      show: g,
      hide: r,
      toggle: m
    }), (i, x) => (y(), G(ve, null, {
      default: pe(() => [
        f.value ? (y(), $("div", z({
          key: 0,
          ref_key: "drawerElement",
          ref: c,
          class: "drawer",
          tabindex: "-1"
        }, { ...i.$attrs }, {
          onClick: Q(t, ["self"])
        }), [
          o("div", {
            class: T(["drawer-dialog", w(a)])
          }, [
            o("div", wt, [
              o("div", gt, [
                C(i.$slots, "header", {}, () => [
                  o("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, xt)
                ], !0),
                o("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: v
                })
              ]),
              o("div", Tt, [
                C(i.$slots, "default", {}, () => [
                  o("span", { innerHTML: e.body }, null, 8, Lt)
                ], !0)
              ]),
              o("div", Mt, [
                C(i.$slots, "footer", {}, () => [
                  e.okOnly ? R("", !0) : (y(), $("button", {
                    key: 0,
                    type: "button",
                    class: "ms-auto btn btn-secondary",
                    onClick: b
                  }, [
                    C(i.$slots, "button-cancel", {}, () => [
                      o("span", { innerHTML: e.textCancel }, null, 8, St)
                    ], !0)
                  ])),
                  o("button", {
                    type: "button",
                    class: "btn btn-primary",
                    onClick: d
                  }, [
                    C(i.$slots, "button-ok", {}, () => [
                      o("span", { innerHTML: e.textOk }, null, 8, Bt)
                    ], !0)
                  ])
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Ct)) : R("", !0)
      ]),
      _: 3
    }));
  }
});
const Et = /* @__PURE__ */ F(Ht, [["__scopeId", "data-v-ebfa20dc"]]), H = "b", se = "$toaster", ae = "$modalManager";
class le {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const l = te(Pe).mount(n);
      this.component = l;
    }
    return this.component;
  }
}
M(le, "component");
class re {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const l = te(Te).mount(n);
      this.component = l;
    }
    return this.component;
  }
}
M(re, "component");
function Ft() {
  return ee(se);
}
function It() {
  return ee(ae);
}
function At(e) {
  e.component(`${H}-drawer`, Et), e.component(`${H}-modal`, oe), e.component(`${H}-pagination`, Je), e.component(`${H}-dropdown`, rt), e.component(`${H}-dropdown-item`, ct), e.component(`${H}-dropdown-header`, ht), e.component(`${H}-dropdown-divider`, kt), e.component(`${H}-table`, lt), e.component(`${H}-toast`, ne);
}
function Dt(e) {
  e.directive("tooltip", $t);
}
const Rt = {
  install(e) {
    At(e), Dt(e);
    const n = re.getComponent();
    e.provide(se, n);
    const s = le.getComponent();
    e.provide(ae, s);
  }
};
export {
  Rt as BootstrapVue,
  rt as Dropdown,
  kt as DropdownDivider,
  ht as DropdownHeader,
  ct as DropdownItem,
  oe as Modal,
  Pe as ModalManager,
  Je as Pagination,
  lt as Table,
  U as TableFieldDefinition,
  ne as Toast,
  Te as Toaster,
  $t as tooltip,
  It as useModal,
  Ft as useToaster
};
