var ie = Object.defineProperty;
var ue = (e, n, s) => n in e ? ie(e, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[n] = s;
var M = (e, n, s) => (ue(e, typeof n != "symbol" ? n + "" : n, s), s);
import { defineComponent as A, toRefs as P, ref as S, watch as ce, onMounted as J, openBlock as b, createElementBlock as C, normalizeClass as L, renderSlot as w, createElementVNode as o, toDisplayString as D, createBlock as G, Teleport as Z, Fragment as E, renderList as V, mergeProps as j, computed as B, getCurrentInstance as K, withModifiers as Q, unref as g, createCommentVNode as N, createVNode as de, watchEffect as fe, createTextVNode as X, Transition as ve, withCtx as pe, inject as ee, createApp as te } from "vue";
import { Toast as he, Modal as me, Tooltip as _e } from "bootstrap";
const ye = { class: "toast-header" }, be = ["textContent"], ke = ["textContent"], $e = { class: "toast-body" }, Ce = ["textContent"], ne = /* @__PURE__ */ A({
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
    const l = e, { visible: i, animation: $, autohide: h, delay: a } = P(l), u = S(), c = S();
    ce(i, (T) => {
      f();
    }, { immediate: !0 });
    function _() {
      u.value.show();
    }
    function v() {
      u.value.hide();
    }
    function x() {
      u.value.dispose();
    }
    function r() {
      u.value.isShown();
    }
    function m() {
      u.value.getOrCreateInstance();
    }
    function t() {
      u.value.getInstance();
    }
    function f() {
      u.value && (i.value === !0 ? _() : v());
    }
    function k() {
      s("hide", u.value);
    }
    function d() {
      s("hidden", u.value);
    }
    function p() {
      s("show", u.value);
    }
    async function y() {
      s("shown", u.value);
    }
    return n({ show: _, hide: v, dispose: x, isShown: r, getOrCreateInstance: m, getInstance: t }), J(() => {
      c.value.addEventListener("hide.bs.toast", k), c.value.addEventListener("hidden.bs.toast", d), c.value.addEventListener("show.bs.toast", p), c.value.addEventListener("shown.bs.toast", y), u.value = new he(c.value, {
        animation: $.value,
        autohide: h.value,
        delay: a.value
      }), f();
    }), (T, I) => (b(), C("div", {
      ref_key: "toastRef",
      ref: c,
      class: L(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      w(T.$slots, "header", {}, () => [
        o("div", ye, [
          w(T.$slots, "title", {}, () => [
            o("strong", {
              class: "me-auto",
              textContent: D(e.title)
            }, null, 8, be)
          ]),
          w(T.$slots, "subtitle", {}, () => [
            o("small", {
              textContent: D(e.subtitle)
            }, null, 8, ke)
          ]),
          o("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: v
          })
        ])
      ]),
      w(T.$slots, "body", {}, () => [
        o("div", $e, [
          w(T.$slots, "default", {}, () => [
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
const xe = /* @__PURE__ */ A({
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
    W = ($, h = "top right") => {
      const a = we(), u = { ...s, ...$, id: a };
      let c = l.value.get(h);
      c instanceof Set || (c = /* @__PURE__ */ new Set()), c.add(u), l.value.set(h, c);
    };
    function i($, h) {
      const a = l.value.get($);
      a == null || a.delete(h);
    }
    return n({ toast: W }), ($, h) => (b(), G(Z, { to: "body" }, [
      o("div", ge, [
        (b(!0), C(E, null, V(l.value, ([a, u]) => (b(), C("div", {
          key: a,
          class: L(["toast-group", `${a}`])
        }, [
          (b(!0), C(E, null, V(u, (c, _) => (b(), G(ne, j({
            key: c.id
          }, c, {
            onHidden: (v) => i(a, c)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const F = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [l, i] of n)
    s[l] = i;
  return s;
}, Te = /* @__PURE__ */ F(xe, [["__scopeId", "data-v-177f801e"]]);
var z = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(z || {});
const Le = ["onClick"], Me = { class: "modal-content" }, Se = { class: "modal-header" }, Be = ["innerHTML"], He = { class: "modal-body" }, Ae = ["innerHTML"], Ee = { class: "modal-footer" }, De = ["innerHTML"], Oe = ["innerHTML"];
class R {
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
M(R, "modalStack", new Array());
const oe = /* @__PURE__ */ A({
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
    size: { default: z.STANDARD }
  },
  setup(e, { expose: n }) {
    const s = e, {
      backdrop: l,
      keyboard: i,
      focus: $,
      disableOutsideClick: h,
      size: a
    } = P(s), u = B(() => {
      let p = a.value.toLowerCase();
      return !Object.values(z).includes(p) || p == "" ? "" : `modal-${p}`;
    }), c = S();
    let _;
    K();
    let v;
    function x() {
      return new Promise((y, T) => {
        const I = R.getLast();
        I && I.hide(), R.addToStack(_), _ == null || _.show(), v = y;
      });
    }
    function r(p = !0) {
      R.removeFromStack(_), _ == null || _.hide();
      const y = R.getLast();
      y && y.show(), typeof v == "function" && v(p);
    }
    function m() {
      _ == null || _.toggle();
    }
    J(() => {
      _ = new me(c.value, {
        backdrop: l == null ? void 0 : l.value,
        keyboard: i.value,
        focus: $.value
      });
    });
    function t(p) {
      (l == null ? void 0 : l.value) !== "static" && r(!1);
    }
    function f() {
      r(!1);
    }
    function k() {
      r(!1);
    }
    function d() {
      r(!0);
    }
    return n({
      show: x,
      hide: r,
      toggle: m
    }), (p, y) => (b(), C("div", j({
      ref_key: "modalElement",
      ref: c,
      class: "modal fade",
      tabindex: "-1"
    }, { ...p.$attrs }, {
      onClick: Q(t, ["self"])
    }), [
      o("div", {
        class: L(["modal-dialog", g(u)])
      }, [
        o("div", Me, [
          o("div", Se, [
            w(p.$slots, "header", {}, () => [
              o("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Be)
            ]),
            o("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: f
            })
          ]),
          o("div", He, [
            w(p.$slots, "default", {}, () => [
              o("span", { innerHTML: e.body }, null, 8, Ae)
            ])
          ]),
          o("div", Ee, [
            w(p.$slots, "footer", {}, () => [
              e.okOnly ? N("", !0) : (b(), C("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary",
                onClick: k
              }, [
                w(p.$slots, "button-cancel", {}, () => [
                  o("span", { innerHTML: e.textCancel }, null, 8, De)
                ])
              ])),
              o("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: d
              }, [
                w(p.$slots, "button-ok", {}, () => [
                  o("span", { innerHTML: e.textOk }, null, 8, Oe)
                ])
              ])
            ])
          ])
        ])
      ], 2)
    ], 16, Le));
  }
}), Pe = /* @__PURE__ */ A({
  __name: "ModalManager",
  setup(e, { expose: n }) {
    const s = S(void 0), l = S({});
    function i(h = {}) {
      var a;
      return h.okOnly = !1, l.value = h, (a = s.value) == null ? void 0 : a.show();
    }
    function $(h = {}) {
      var a;
      return h.okOnly = !0, l.value = h, (a = s.value) == null ? void 0 : a.show();
    }
    return n({ confirm: i, alert: $ }), (h, a) => (b(), G(Z, { to: "body" }, [
      de(oe, j({
        ref_key: "modalRef",
        ref: s
      }, { ...l.value }), null, 16)
    ]));
  }
}), Ve = { "data-first": "" }, Fe = ["disabled", "innerHTML"], Ie = { "data-prev": "" }, Re = ["disabled", "innerHTML"], Ne = { key: 0 }, ze = ["innerHTML"], je = ["onClick"], Ge = { "data-next": "" }, Ke = ["disabled", "innerHTML"], Ue = { "data-last": "" }, Xe = ["disabled", "innerHTML"], qe = /* @__PURE__ */ A({
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
    function l(d, p = 0) {
      return [...Array(d).keys()].map((y) => y + p);
    }
    const { modelValue: i, maxVisibleButtons: $, hideEllipsis: h } = P(s), a = Math.floor($.value / 2), u = B(() => {
      let d = $.value, p = i.value <= a ? 1 : i.value - a;
      return i.value >= v.value - a && (p = v.value - d + 1), p < 1 && (p = 1), v.value < d && (d = v.value), l(d, p);
    }), c = B(() => i.value <= 1), _ = B(() => i.value >= v.value), v = B(() => {
      const { perPage: d, totalItems: p } = s;
      return Math.ceil(p / d);
    });
    fe(() => {
      v.value > 0 && i.value > v.value && n("update:modelValue", v.value);
    });
    function x(d) {
      const p = $.value - 1;
      return !(h.value === !0 || d === 0 && i.value - a - 1 <= 0 || d === p && i.value + a >= v.value || d > 0 && d < p);
    }
    function r(d) {
      d < 1 && (d = 1), d > v.value && (d = v.value), n("update:modelValue", d);
    }
    function m() {
      n("update:modelValue", 1);
    }
    function t() {
      n("update:modelValue", v.value);
    }
    function f() {
      let d = i.value - 1;
      d < 1 && (d = 1), n("update:modelValue", d);
    }
    function k() {
      let d = i.value + 1;
      d > v.value && (d = v.value), n("update:modelValue", d);
    }
    return (d, p) => (b(), C("ul", {
      class: L(["pagination", e.size])
    }, [
      o("li", Ve, [
        o("button", {
          class: "",
          disabled: g(c),
          innerHTML: e.firstText,
          onClick: m
        }, null, 8, Fe)
      ]),
      o("li", Ie, [
        o("button", {
          class: "",
          disabled: g(c),
          innerHTML: e.prevText,
          onClick: f
        }, null, 8, Re)
      ]),
      (b(!0), C(E, null, V(g(u), (y, T) => (b(), C(E, null, [
        x(T) ? (b(), C("li", Ne, [
          o("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, ze)
        ])) : (b(), C("li", {
          key: 1,
          "data-prev": "",
          class: L({ active: e.modelValue === y })
        }, [
          o("button", {
            class: "",
            onClick: (I) => r(y)
          }, D(y), 9, je)
        ], 2))
      ], 64))), 256)),
      o("li", Ge, [
        o("button", {
          class: "",
          disabled: g(_),
          innerHTML: e.nextText,
          onClick: k
        }, null, 8, Ke)
      ]),
      o("li", Ue, [
        o("button", {
          class: "",
          disabled: g(_),
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
  const s = (a, u) => {
    let c = typeof a, _ = typeof u;
    return c == "number" && c == _;
  }, l = (a, u) => a - u, i = (a, u) => (a = a ?? "", u = u ?? "", a.localeCompare(u)), $ = (a, u) => s(a, u) ? l : i, h = [...n];
  return h.sort((a, u) => {
    let c = 0;
    for (let _ of e) {
      let { key: v, direction: x, sortFn: r } = _, m = x === "ASC" ? 1 : -1, t = a[v], f = u[v];
      if (r = typeof r == "function" ? r : $(t, f), c = r(t, f, a, u, n, _, m) * m, c !== 0)
        return c;
    }
    return c;
  }), h;
}, We = ["onClick"], Ye = { class: "th-wrapper" }, Ze = {
  key: 0,
  "data-sort-indicator": ""
}, et = { class: "sort-index" }, tt = { class: "sort-direction" }, nt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, ot = ["colspan"], st = ["innerHTML"];
class U {
  constructor(n = "", s = "", l = !1, i) {
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
    this.key = n, this.label = s, this.sortable = l, this.sortFn = i;
  }
}
const at = /* @__PURE__ */ A({
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
      return m = m.filter((t, f) => m.indexOf(t) == f), m;
    }, i = S([]), { fields: $, items: h } = P(s), a = B(() => {
      if (s.externalSort || i.value.length == 0)
        return s.items;
      const r = [...s.items];
      return Y(i.value, r);
    }), u = B(() => {
      let r = $.value, m = [];
      return r.length === 0 && (r = l([...h.value])), r.reduce((t, f, k) => {
        if (typeof f == "string")
          t.push(new U(f, f));
        else if (f instanceof U)
          t.push(f);
        else if (typeof f == "object") {
          const { key: d, label: p, sortable: y, sortFn: T } = f;
          t.push(new U(d, p, y, T));
        }
        return t;
      }, m);
    });
    function c(r) {
      const m = i.value.findIndex((t) => t.key === r.key);
      return m < 0 ? "" : m + 1;
    }
    function _(r) {
      const m = i.value.findIndex((f) => f.key === r.key);
      if (m < 0)
        return "fas fa-sort";
      const t = i.value[m];
      return t.direction === O.ASC ? "fas fa-sort-up" : t.direction === O.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function v(r) {
      const { key: m } = r, t = i.value.findIndex((f) => f.key === m);
      if (t < 0) {
        const f = new Qe(m, O.ASC, r.sortFn);
        i.value.push(f);
      } else {
        const f = i.value[t], k = f.direction;
        k === O.ASC ? f.direction = O.DESC : k === O.DESC && i.value.splice(t, 1);
      }
      n("sort", i.value, Y);
    }
    let x = S(null);
    return J(() => {
      x.value = K();
    }), (r, m) => (b(), C("table", j({ ...r.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      o("thead", null, [
        (b(!0), C(E, null, V(g(u), (t) => (b(), C("th", {
          key: `thead-${t.key}`,
          class: L({ sortable: t.sortable }),
          onClick: (f) => t.sortable && v(t)
        }, [
          o("span", Ye, [
            w(r.$slots, `head(${t.key})`, {
              field: t,
              data: g(x),
              value: t.label
            }, () => [
              X(D(t.label), 1)
            ], !0),
            t.sortable ? (b(), C("span", Ze, [
              o("span", et, D(c(t)), 1),
              o("span", tt, [
                o("i", {
                  class: L(_(t))
                }, null, 2)
              ])
            ])) : N("", !0)
          ])
        ], 10, We))), 128))
      ]),
      o("tbody", null, [
        (b(!0), C(E, null, V(g(a), (t, f) => (b(), C(E, {
          key: `trow-${(t == null ? void 0 : t.id) ?? f}`
        }, [
          w(r.$slots, "row", {
            item: t,
            index: f,
            colspan: g(u).length
          }, void 0, !0),
          o("tr", null, [
            (b(!0), C(E, null, V(g(u), (k) => (b(), C("td", {
              key: `tcell-${k.key + ((t == null ? void 0 : t.id) ?? f)}`,
              class: L({ [`tcell-${k == null ? void 0 : k.key}`]: !0 })
            }, [
              w(r.$slots, `cell(${k == null ? void 0 : k.key})`, {
                data: g(x),
                item: t,
                field: k,
                value: t[k == null ? void 0 : k.key]
              }, () => [
                X(D(t[k == null ? void 0 : k.key]), 1)
              ], !0)
            ], 2))), 128))
          ])
        ], 64))), 128))
      ]),
      o("tfoot", null, [
        w(r.$slots, "footer", { data: g(x) }, void 0, !0)
      ]),
      e.showEmpty && g(a).length === 0 ? (b(), C("tr", nt, [
        o("td", {
          colspan: g(u).length
        }, [
          w(r.$slots, "empty", {
            items: g(a),
            data: g(x),
            fields: g(u)
          }, () => [
            o("span", { innerHTML: e.emptyText }, null, 8, st)
          ], !0)
        ], 8, ot)
      ])) : N("", !0)
    ], 16));
  }
});
const lt = /* @__PURE__ */ F(at, [["__scopeId", "data-v-5556187e"]]), rt = /* @__PURE__ */ A({
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
    const n = e, { variant: s, centered: l, dropup: i, dropend: $, dropstart: h } = P(n), a = S(!1), u = B(() => {
      const t = [];
      return s.value && t.push(`btn-${s.value}`), t;
    }), c = B(() => {
      const t = [];
      return l != null && l.value && t.push("dropdown-center"), i != null && i.value && t.push("dropup"), h != null && h.value && t.push("dropstart"), !(h != null && h.value) && ($ != null && $.value) && t.push("dropend"), t.length === 0 ? t.push("dropdown") : t.unshift("btn-group"), t;
    });
    function _() {
      a.value = !0;
    }
    function v() {
      a.value = !1;
    }
    const x = "data-prevent-close";
    let r;
    function m(t) {
      const { currentTarget: f } = t;
      a.value ? v() : _(), a.value && (r = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (k) => {
          const { target: d } = k;
          d != null && d.closest(`[${x}],[${x}=true]`) || d === f || (v(), r.abort());
        }, { signal: r.signal });
      }, 0));
    }
    return (t, f) => (b(), C("div", {
      class: L(g(c))
    }, [
      o("button", {
        class: L(["btn dropdown-toggle", g(u)]),
        type: "button",
        "data-bs-toggle": "aaaadropdown",
        "aria-expanded": "false",
        onClick: m
      }, [
        w(t.$slots, "button", {}, () => [
          X(D(e.text), 1)
        ])
      ], 2),
      o("ul", {
        class: L(["dropdown-menu", { show: a.value }])
      }, [
        w(t.$slots, "default")
      ], 2)
    ], 2));
  }
}), it = ["data-prevent-close"], ut = ["onClick"], ct = /* @__PURE__ */ A({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const s = e, { preventClose: l } = P(s);
    function i() {
      const $ = K();
      n("click", $);
    }
    return ($, h) => (b(), C("li", {
      "data-prevent-close": g(l) ? "" : null
    }, [
      o("a", {
        class: L(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: Q(i, ["prevent"])
      }, [
        w($.$slots, "default")
      ], 10, ut)
    ], 8, it));
  }
}), dt = {}, ft = { "data-prevent-close": "" }, vt = { class: "dropdown-header" };
function pt(e, n) {
  return b(), C("li", ft, [
    o("h6", vt, [
      w(e.$slots, "default")
    ])
  ]);
}
const ht = /* @__PURE__ */ F(dt, [["render", pt]]), mt = {}, _t = /* @__PURE__ */ o("hr", { class: "dropdown-divider" }, null, -1), yt = [
  _t
];
function bt(e, n) {
  return b(), C("li", null, yt);
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
const Ct = ["onClick"], wt = { class: "drawer-content" }, gt = { class: "drawer-header" }, xt = ["innerHTML"], Tt = { class: "drawer-body" }, Lt = ["innerHTML"], Mt = { class: "drawer-footer" }, St = ["innerHTML"], Bt = ["innerHTML"], Ht = /* @__PURE__ */ A({
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
    size: { default: z.STANDARD },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: n }) {
    const s = e, {
      backdrop: l,
      keyboard: i,
      focus: $,
      size: h
    } = P(s), a = B(() => {
      let y = h.value.toLowerCase();
      return !Object.values(z).includes(y) || y == "" ? "" : `drawer-${y}`;
    }), u = S(), c = S(!1), _ = K();
    let v;
    async function x() {
      return c.value === !0 ? void 0 : new Promise((T, I) => {
        c.value = !0, v = T;
      });
    }
    function r(y = !0) {
      c.value = !1, typeof v == "function" && v(y);
    }
    function m() {
      c.value === !0 ? x() : r(!1);
    }
    function t(y) {
      (l == null ? void 0 : l.value) !== "static" && r(!1);
    }
    function f() {
      r(!1);
    }
    function k() {
      r(!1);
    }
    function d() {
      r(!0);
    }
    function p() {
      c.value === !0 ? q.add(_) : q.delete(_);
    }
    return n({
      show: x,
      hide: r,
      toggle: m
    }), (y, T) => (b(), G(ve, {
      onBeforeEnter: p,
      onAfterLeave: p
    }, {
      default: pe(() => [
        c.value ? (b(), C("div", j({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...y.$attrs }, {
          onClick: Q(t, ["self"])
        }), [
          o("div", {
            class: L(["drawer-dialog", g(a)])
          }, [
            o("div", wt, [
              o("div", gt, [
                w(y.$slots, "header", {}, () => [
                  o("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, xt)
                ], !0),
                o("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: f
                })
              ]),
              o("div", Tt, [
                w(y.$slots, "default", {}, () => [
                  o("span", { innerHTML: e.body }, null, 8, Lt)
                ], !0)
              ]),
              o("div", Mt, [
                w(y.$slots, "footer", {}, () => [
                  e.okOnly ? N("", !0) : (b(), C("button", {
                    key: 0,
                    type: "button",
                    class: "ms-auto btn btn-secondary",
                    onClick: k
                  }, [
                    w(y.$slots, "button-cancel", {}, () => [
                      o("span", { innerHTML: e.textCancel }, null, 8, St)
                    ], !0)
                  ])),
                  o("button", {
                    type: "button",
                    class: "btn btn-primary",
                    onClick: d
                  }, [
                    w(y.$slots, "button-ok", {}, () => [
                      o("span", { innerHTML: e.textOk }, null, 8, Bt)
                    ], !0)
                  ])
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Ct)) : N("", !0)
      ]),
      _: 3
    }));
  }
});
const At = /* @__PURE__ */ F(Ht, [["__scopeId", "data-v-bdb8c958"]]), H = "b", se = "$toaster", ae = "$modalManager";
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
function Et(e) {
  e.component(`${H}-drawer`, At), e.component(`${H}-modal`, oe), e.component(`${H}-pagination`, Je), e.component(`${H}-dropdown`, rt), e.component(`${H}-dropdown-item`, ct), e.component(`${H}-dropdown-header`, ht), e.component(`${H}-dropdown-divider`, kt), e.component(`${H}-table`, lt), e.component(`${H}-toast`, ne);
}
function Dt(e) {
  e.directive("tooltip", $t);
}
const Rt = {
  install(e) {
    Et(e), Dt(e);
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
