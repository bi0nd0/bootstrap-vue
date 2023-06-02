var ce = Object.defineProperty;
var de = (e, t, s) => t in e ? ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var S = (e, t, s) => (de(e, typeof t != "symbol" ? t + "" : t, s), s);
import { defineComponent as D, toRefs as V, ref as A, watch as fe, onMounted as Q, openBlock as h, createElementBlock as $, normalizeClass as L, renderSlot as g, createElementVNode as a, toDisplayString as H, createBlock as F, Teleport as te, Fragment as E, renderList as O, mergeProps as I, computed as M, getCurrentInstance as X, withModifiers as W, unref as C, createCommentVNode as j, createVNode as pe, watchEffect as ve, resolveComponent as Y, withCtx as K, createTextVNode as U, withDirectives as he, isRef as me, vModelSelect as _e, Transition as ye, inject as ne, createApp as oe } from "vue";
import { Toast as be, Modal as ke, Tooltip as $e } from "bootstrap";
const we = { class: "toast-header" }, Ce = ["textContent"], ge = ["textContent"], xe = { class: "toast-body" }, Te = ["textContent"], se = /* @__PURE__ */ D({
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
  setup(e, { expose: t, emit: s }) {
    const l = e, { visible: r, animation: m, autohide: v, delay: o } = V(l), u = A(), c = A();
    fe(r, (T) => {
      f();
    }, { immediate: !0 });
    function y() {
      u.value.show();
    }
    function p() {
      u.value.hide();
    }
    function x() {
      u.value.dispose();
    }
    function i() {
      u.value.isShown();
    }
    function b() {
      u.value.getOrCreateInstance();
    }
    function n() {
      u.value.getInstance();
    }
    function f() {
      u.value && (r.value === !0 ? y() : p());
    }
    function w() {
      s("hide", u.value);
    }
    function d() {
      s("hidden", u.value);
    }
    function _() {
      s("show", u.value);
    }
    async function k() {
      s("shown", u.value);
    }
    return t({ show: y, hide: p, dispose: x, isShown: i, getOrCreateInstance: b, getInstance: n }), Q(() => {
      c.value.addEventListener("hide.bs.toast", w), c.value.addEventListener("hidden.bs.toast", d), c.value.addEventListener("show.bs.toast", _), c.value.addEventListener("shown.bs.toast", k), u.value = new be(c.value, {
        animation: m.value,
        autohide: v.value,
        delay: o.value
      }), f();
    }), (T, R) => (h(), $("div", {
      ref_key: "toastRef",
      ref: c,
      class: L(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      g(T.$slots, "header", {}, () => [
        a("div", we, [
          g(T.$slots, "title", {}, () => [
            a("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, Ce)
          ]),
          g(T.$slots, "subtitle", {}, () => [
            a("small", {
              textContent: H(e.subtitle)
            }, null, 8, ge)
          ]),
          a("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ]),
      g(T.$slots, "body", {}, () => [
        a("div", xe, [
          g(T.$slots, "default", {}, () => [
            a("span", {
              textContent: H(e.body)
            }, null, 8, Te)
          ])
        ])
      ])
    ], 2));
  }
});
function Le() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(s) {
    const l = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (s == "x" ? l : l & 3 | 8).toString(16);
  });
}
const Se = { id: "toast-wrapper" };
let Z;
const Me = /* @__PURE__ */ D({
  __name: "Toaster",
  setup(e, { expose: t }) {
    const s = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, l = A(/* @__PURE__ */ new Map());
    Z = (m, v = "top right") => {
      const o = Le(), u = { ...s, ...m, id: o };
      let c = l.value.get(v);
      c instanceof Set || (c = /* @__PURE__ */ new Set()), c.add(u), l.value.set(v, c);
    };
    function r(m, v) {
      const o = l.value.get(m);
      o == null || o.delete(v);
    }
    return t({ toast: Z }), (m, v) => (h(), F(te, { to: "body" }, [
      a("div", Se, [
        (h(!0), $(E, null, O(l.value, ([o, u]) => (h(), $("div", {
          key: o,
          class: L(["toast-group", `${o}`])
        }, [
          (h(!0), $(E, null, O(u, (c, y) => (h(), F(se, I({
            key: c.id
          }, c, {
            onHidden: (p) => r(o, c)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const z = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, r] of t)
    s[l] = r;
  return s;
}, Be = /* @__PURE__ */ z(Me, [["__scopeId", "data-v-177f801e"]]);
var G = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(G || {});
const He = ["onClick"], Ae = { class: "modal-content" }, De = { class: "modal-header" }, Ee = ["innerHTML"], Ve = { class: "modal-body" }, Oe = ["innerHTML"], Pe = { class: "modal-footer" }, Fe = ["innerHTML"], Ie = ["innerHTML"];
class N {
  static addToStack(t) {
    t != null && this.modalStack.push(t);
  }
  static removeFromStack(t) {
    if (t == null)
      return;
    const s = this.modalStack.indexOf(t);
    s < 0 || (this.modalStack.splice(s, 1), console.log(this.modalStack));
  }
  static getLast() {
    const t = this.modalStack.length;
    if (t !== 0)
      return this.modalStack[t - 1];
  }
}
S(N, "modalStack", new Array());
const ae = /* @__PURE__ */ D({
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
    size: { default: G.STANDARD }
  },
  setup(e, { expose: t }) {
    const s = e, {
      backdrop: l,
      keyboard: r,
      focus: m,
      disableOutsideClick: v,
      size: o
    } = V(s), u = M(() => {
      let _ = o.value.toLowerCase();
      return !Object.values(G).includes(_) || _ == "" ? "" : `modal-${_}`;
    }), c = A();
    let y;
    X();
    let p;
    function x() {
      return new Promise((k, T) => {
        const R = N.getLast();
        R && R.hide(), N.addToStack(y), y == null || y.show(), p = k;
      });
    }
    function i(_ = !0) {
      N.removeFromStack(y), y == null || y.hide();
      const k = N.getLast();
      k && k.show(), typeof p == "function" && p(_);
    }
    function b() {
      y == null || y.toggle();
    }
    Q(() => {
      y = new ke(c.value, {
        backdrop: l == null ? void 0 : l.value,
        keyboard: r.value,
        focus: m.value
      });
    });
    function n(_) {
      (l == null ? void 0 : l.value) !== "static" && i(!1);
    }
    function f() {
      i(!1);
    }
    function w() {
      i(!1);
    }
    function d() {
      i(!0);
    }
    return t({
      show: x,
      hide: i,
      toggle: b
    }), (_, k) => (h(), $("div", I({
      ref_key: "modalElement",
      ref: c,
      class: "modal fade",
      tabindex: "-1"
    }, { ..._.$attrs }, {
      onClick: W(n, ["self"])
    }), [
      a("div", {
        class: L(["modal-dialog", C(u)])
      }, [
        a("div", Ae, [
          a("div", De, [
            g(_.$slots, "header", {}, () => [
              a("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Ee)
            ]),
            a("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: f
            })
          ]),
          a("div", Ve, [
            g(_.$slots, "default", {}, () => [
              a("span", { innerHTML: e.body }, null, 8, Oe)
            ])
          ]),
          a("div", Pe, [
            g(_.$slots, "footer", {}, () => [
              e.okOnly ? j("", !0) : (h(), $("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary",
                onClick: w
              }, [
                g(_.$slots, "button-cancel", {}, () => [
                  a("span", { innerHTML: e.textCancel }, null, 8, Fe)
                ])
              ])),
              a("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: d
              }, [
                g(_.$slots, "button-ok", {}, () => [
                  a("span", { innerHTML: e.textOk }, null, 8, Ie)
                ])
              ])
            ])
          ])
        ])
      ], 2)
    ], 16, He));
  }
}), ze = /* @__PURE__ */ D({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const s = A(void 0), l = A({});
    function r(v = {}) {
      var o;
      return v.okOnly = !1, l.value = v, (o = s.value) == null ? void 0 : o.show();
    }
    function m(v = {}) {
      var o;
      return v.okOnly = !0, l.value = v, (o = s.value) == null ? void 0 : o.show();
    }
    return t({ confirm: r, alert: m }), (v, o) => (h(), F(te, { to: "body" }, [
      pe(ae, I({
        ref_key: "modalRef",
        ref: s
      }, { ...l.value }), null, 16)
    ]));
  }
}), Re = { "data-first": "" }, Ne = ["disabled", "innerHTML"], je = { "data-prev": "" }, Ge = ["disabled", "innerHTML"], Ke = { key: 0 }, Ue = ["innerHTML"], Xe = ["onClick"], qe = { "data-next": "" }, Je = ["disabled", "innerHTML"], Qe = { "data-last": "" }, We = ["disabled", "innerHTML"], Ye = /* @__PURE__ */ D({
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
  setup(e, { emit: t }) {
    const s = e;
    function l(d, _ = 0) {
      return [...Array(d).keys()].map((k) => k + _);
    }
    const { modelValue: r, maxVisibleButtons: m, hideEllipsis: v } = V(s), o = Math.floor(m.value / 2), u = M(() => {
      let d = m.value, _ = r.value <= o ? 1 : r.value - o;
      return r.value >= p.value - o && (_ = p.value - d + 1), _ < 1 && (_ = 1), p.value < d && (d = p.value), l(d, _);
    }), c = M(() => r.value <= 1), y = M(() => r.value >= p.value), p = M(() => {
      const { perPage: d, totalItems: _ } = s;
      return Math.ceil(_ / d);
    });
    ve(() => {
      p.value > 0 && r.value > p.value && t("update:modelValue", p.value);
    });
    function x(d) {
      const _ = m.value - 1;
      return !(v.value === !0 || d === 0 && r.value - o - 1 <= 0 || d === _ && r.value + o >= p.value || d > 0 && d < _);
    }
    function i(d) {
      d < 1 && (d = 1), d > p.value && (d = p.value), t("update:modelValue", d);
    }
    function b() {
      t("update:modelValue", 1);
    }
    function n() {
      t("update:modelValue", p.value);
    }
    function f() {
      let d = r.value - 1;
      d < 1 && (d = 1), t("update:modelValue", d);
    }
    function w() {
      let d = r.value + 1;
      d > p.value && (d = p.value), t("update:modelValue", d);
    }
    return (d, _) => (h(), $("ul", {
      class: L(["pagination", e.size])
    }, [
      a("li", Re, [
        a("button", {
          class: "",
          disabled: C(c),
          innerHTML: e.firstText,
          onClick: b
        }, null, 8, Ne)
      ]),
      a("li", je, [
        a("button", {
          class: "",
          disabled: C(c),
          innerHTML: e.prevText,
          onClick: f
        }, null, 8, Ge)
      ]),
      (h(!0), $(E, null, O(C(u), (k, T) => (h(), $(E, null, [
        x(T) ? (h(), $("li", Ke, [
          a("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Ue)
        ])) : (h(), $("li", {
          key: 1,
          "data-prev": "",
          class: L({ active: e.modelValue === k })
        }, [
          a("button", {
            class: "",
            onClick: (R) => i(k)
          }, H(k), 9, Xe)
        ], 2))
      ], 64))), 256)),
      a("li", qe, [
        a("button", {
          class: "",
          disabled: C(y),
          innerHTML: e.nextText,
          onClick: w
        }, null, 8, Je)
      ]),
      a("li", Qe, [
        a("button", {
          class: "",
          disabled: C(y),
          innerHTML: e.lastText,
          onClick: n
        }, null, 8, We)
      ])
    ], 2));
  }
});
const Ze = /* @__PURE__ */ z(Ye, [["__scopeId", "data-v-2d1d30d9"]]), et = { class: "d-inline" }, tt = /* @__PURE__ */ a("span", null, "Per page: ", -1), nt = { class: "fw-bold" }, ot = /* @__PURE__ */ D({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, { options: l } = V(s), r = M({
      get: () => s.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, v) => {
      const o = Y("b-dropdown-item"), u = Y("b-dropdown");
      return h(), F(u, I({
        variant: "outline-primary",
        size: "sm"
      }, { ...m.$attrs }), {
        button: K(() => [
          a("div", et, [
            g(m.$slots, "default", { selected: C(r) }, () => [
              tt,
              a("span", nt, H(C(r)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (h(!0), $(E, null, O(C(l), (c, y) => (h(), F(o, {
            key: c,
            onClick: (p) => r.value = c
          }, {
            default: K(() => [
              U(H(c), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), st = ["value"], at = /* @__PURE__ */ D({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, { options: l } = V(s), r = M({
      get: () => s.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, v) => he((h(), $("select", {
      "onUpdate:modelValue": v[0] || (v[0] = (o) => me(r) ? r.value = o : null)
    }, [
      (h(!0), $(E, null, O(C(l), (o, u) => (h(), $("option", {
        key: o,
        value: o
      }, H(o), 9, st))), 128))
    ], 512)), [
      [_e, C(r)]
    ]);
  }
});
var P = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(P || {});
class lt {
  constructor(t, s = "ASC", l) {
    S(this, "key");
    S(this, "direction");
    S(this, "sortFn");
    this.key = t, this.direction = s, this.sortFn = l;
  }
}
const ee = (e, t) => {
  const s = (o, u) => {
    let c = typeof o, y = typeof u;
    return c == "number" && c == y;
  }, l = (o, u) => o - u, r = (o, u) => (o = o ?? "", u = u ?? "", o.localeCompare(u)), m = (o, u) => s(o, u) ? l : r, v = [...t];
  return v.sort((o, u) => {
    let c = 0;
    for (let y of e) {
      let { key: p, direction: x, sortFn: i } = y, b = x === "ASC" ? 1 : -1, n = o[p], f = u[p];
      if (i = typeof i == "function" ? i : m(n, f), c = i(n, f, o, u, t, y, b) * b, c !== 0)
        return c;
    }
    return c;
  }), v;
}, rt = ["onClick"], it = { class: "th-wrapper" }, ut = {
  key: 0,
  "data-sort-indicator": ""
}, ct = { class: "sort-index" }, dt = { class: "sort-direction" }, ft = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, pt = ["colspan"], vt = ["innerHTML"];
class q {
  constructor(t = "", s = "", l = !1, r) {
    S(this, "key");
    // age
    S(this, "label");
    // Person age
    S(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    S(this, "sortFn");
    this.key = t, this.label = s, this.sortable = l, this.sortFn = r;
  }
}
const ht = /* @__PURE__ */ D({
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
  setup(e, { emit: t }) {
    const s = e, l = (i) => {
      let b = [];
      for (const n of i)
        b = b.concat(Object.keys(n));
      return b = b.filter((n, f) => b.indexOf(n) == f), b;
    }, r = A([]), { fields: m, items: v } = V(s), o = M(() => {
      if (s.externalSort || r.value.length == 0)
        return s.items;
      const i = [...s.items];
      return ee(r.value, i);
    }), u = M(() => {
      let i = m.value, b = [];
      return i.length === 0 && (i = l([...v.value])), i.reduce((n, f, w) => {
        if (typeof f == "string")
          n.push(new q(f, f));
        else if (f instanceof q)
          n.push(f);
        else if (typeof f == "object") {
          const { key: d, label: _, sortable: k, sortFn: T } = f;
          n.push(new q(d, _, k, T));
        }
        return n;
      }, b);
    });
    function c(i) {
      const b = r.value.findIndex((n) => n.key === i.key);
      return b < 0 ? "" : b + 1;
    }
    function y(i) {
      const b = r.value.findIndex((f) => f.key === i.key);
      if (b < 0)
        return "fas fa-sort";
      const n = r.value[b];
      return n.direction === P.ASC ? "fas fa-sort-up" : n.direction === P.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(i) {
      const { key: b } = i, n = r.value.findIndex((f) => f.key === b);
      if (n < 0) {
        const f = new lt(b, P.ASC, i.sortFn);
        r.value.push(f);
      } else {
        const f = r.value[n], w = f.direction;
        w === P.ASC ? f.direction = P.DESC : w === P.DESC && r.value.splice(n, 1);
      }
      t("sort", r.value, ee);
    }
    let x = A(null);
    return Q(() => {
      x.value = X();
    }), (i, b) => (h(), $("table", I({ ...i.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      a("thead", null, [
        (h(!0), $(E, null, O(C(u), (n) => (h(), $("th", {
          key: `thead-${n.key}`,
          class: L({ sortable: n.sortable }),
          onClick: (f) => n.sortable && p(n)
        }, [
          a("span", it, [
            g(i.$slots, `head(${n.key})`, {
              field: n,
              data: C(x),
              value: n.label
            }, () => [
              U(H(n.label), 1)
            ], !0),
            n.sortable ? (h(), $("span", ut, [
              a("span", ct, H(c(n)), 1),
              a("span", dt, [
                a("i", {
                  class: L(y(n))
                }, null, 2)
              ])
            ])) : j("", !0)
          ])
        ], 10, rt))), 128))
      ]),
      a("tbody", null, [
        (h(!0), $(E, null, O(C(o), (n, f) => (h(), $(E, {
          key: `trow-${(n == null ? void 0 : n.id) ?? f}`
        }, [
          g(i.$slots, "row", {
            item: n,
            index: f,
            colspan: C(u).length
          }, void 0, !0),
          a("tr", null, [
            (h(!0), $(E, null, O(C(u), (w) => (h(), $("td", {
              key: `tcell-${w.key + ((n == null ? void 0 : n.id) ?? f)}`,
              class: L({ [`tcell-${w == null ? void 0 : w.key}`]: !0 })
            }, [
              g(i.$slots, `cell(${w == null ? void 0 : w.key})`, {
                data: C(x),
                item: n,
                field: w,
                value: n[w == null ? void 0 : w.key]
              }, () => [
                U(H(n[w == null ? void 0 : w.key]), 1)
              ], !0)
            ], 2))), 128))
          ])
        ], 64))), 128))
      ]),
      a("tfoot", null, [
        g(i.$slots, "footer", { data: C(x) }, void 0, !0)
      ]),
      e.showEmpty && C(o).length === 0 ? (h(), $("tr", ft, [
        a("td", {
          colspan: C(u).length
        }, [
          g(i.$slots, "empty", {
            items: C(o),
            data: C(x),
            fields: C(u)
          }, () => [
            a("span", { innerHTML: e.emptyText }, null, 8, vt)
          ], !0)
        ], 8, pt)
      ])) : j("", !0)
    ], 16));
  }
});
const mt = /* @__PURE__ */ z(ht, [["__scopeId", "data-v-5556187e"]]), _t = /* @__PURE__ */ D({
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
    const t = e, { variant: s, centered: l, dropup: r, dropend: m, dropstart: v } = V(t), o = A(!1), u = M(() => {
      const n = [];
      return s.value && n.push(`btn-${s.value}`), n;
    }), c = M(() => {
      const n = [];
      return l != null && l.value && n.push("dropdown-center"), r != null && r.value && n.push("dropup"), v != null && v.value && n.push("dropstart"), !(v != null && v.value) && (m != null && m.value) && n.push("dropend"), n.length === 0 ? n.push("dropdown") : n.unshift("btn-group"), n;
    });
    function y() {
      o.value = !0;
    }
    function p() {
      o.value = !1;
    }
    const x = "data-prevent-close";
    let i;
    function b(n) {
      const { currentTarget: f } = n;
      o.value ? p() : y(), o.value && (i = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (w) => {
          const { target: d } = w;
          d != null && d.closest(`[${x}],[${x}=true]`) || d === f || (p(), i.abort());
        }, { signal: i.signal });
      }, 0));
    }
    return (n, f) => (h(), $("div", {
      class: L(C(c))
    }, [
      a("button", {
        class: L(["btn dropdown-toggle", C(u)]),
        type: "button",
        "data-bs-toggle": "aaaadropdown",
        "aria-expanded": "false",
        onClick: b
      }, [
        g(n.$slots, "button", {}, () => [
          U(H(e.text), 1)
        ])
      ], 2),
      a("ul", {
        class: L(["dropdown-menu", { show: o.value }])
      }, [
        g(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), yt = ["data-prevent-close"], bt = ["onClick"], kt = /* @__PURE__ */ D({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const s = e, { preventClose: l } = V(s);
    function r() {
      const m = X();
      t("click", m);
    }
    return (m, v) => (h(), $("li", {
      "data-prevent-close": C(l) ? "" : null
    }, [
      a("a", {
        class: L(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: W(r, ["prevent"])
      }, [
        g(m.$slots, "default")
      ], 10, bt)
    ], 8, yt));
  }
}), $t = {}, wt = { "data-prevent-close": "" }, Ct = { class: "dropdown-header" };
function gt(e, t) {
  return h(), $("li", wt, [
    a("h6", Ct, [
      g(e.$slots, "default")
    ])
  ]);
}
const xt = /* @__PURE__ */ z($t, [["render", gt]]), Tt = {}, Lt = /* @__PURE__ */ a("hr", { class: "dropdown-divider" }, null, -1), St = [
  Lt
];
function Mt(e, t) {
  return h(), $("li", null, St);
}
const Bt = /* @__PURE__ */ z(Tt, [["render", Mt]]), Ht = {
  mounted(e, t, s, l) {
    new $e(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
};
class J {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
S(J, "list", /* @__PURE__ */ new Set());
const At = ["onClick"], Dt = { class: "drawer-content" }, Et = { class: "drawer-header" }, Vt = ["innerHTML"], Ot = { class: "drawer-body" }, Pt = ["innerHTML"], Ft = { class: "drawer-footer" }, It = ["innerHTML"], zt = ["innerHTML"], Rt = /* @__PURE__ */ D({
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
    size: { default: G.STANDARD },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const s = e, {
      backdrop: l,
      keyboard: r,
      focus: m,
      size: v
    } = V(s), o = M(() => {
      let k = v.value.toLowerCase();
      return !Object.values(G).includes(k) || k == "" ? "" : `drawer-${k}`;
    }), u = A(), c = A(!1), y = X();
    let p;
    async function x() {
      return c.value === !0 ? void 0 : new Promise((T, R) => {
        c.value = !0, p = T;
      });
    }
    function i(k = !0) {
      c.value = !1, typeof p == "function" && p(k);
    }
    function b() {
      c.value === !0 ? x() : i(!1);
    }
    function n(k) {
      (l == null ? void 0 : l.value) !== "static" && i(!1);
    }
    function f() {
      i(!1);
    }
    function w() {
      i(!1);
    }
    function d() {
      i(!0);
    }
    function _() {
      c.value === !0 ? J.add(y) : J.delete(y);
    }
    return t({
      show: x,
      hide: i,
      toggle: b
    }), (k, T) => (h(), F(ye, {
      onBeforeEnter: _,
      onAfterLeave: _
    }, {
      default: K(() => [
        c.value ? (h(), $("div", I({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...k.$attrs }, {
          onClick: W(n, ["self"])
        }), [
          a("div", {
            class: L(["drawer-dialog", C(o)])
          }, [
            a("div", Dt, [
              a("div", Et, [
                g(k.$slots, "header", {}, () => [
                  a("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Vt)
                ], !0),
                a("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: f
                })
              ]),
              a("div", Ot, [
                g(k.$slots, "default", {}, () => [
                  a("span", { innerHTML: e.body }, null, 8, Pt)
                ], !0)
              ]),
              a("div", Ft, [
                g(k.$slots, "footer", {}, () => [
                  e.okOnly ? j("", !0) : (h(), $("button", {
                    key: 0,
                    type: "button",
                    class: "ms-auto btn btn-secondary",
                    onClick: w
                  }, [
                    g(k.$slots, "button-cancel", {}, () => [
                      a("span", { innerHTML: e.textCancel }, null, 8, It)
                    ], !0)
                  ])),
                  a("button", {
                    type: "button",
                    class: "btn btn-primary",
                    onClick: d
                  }, [
                    g(k.$slots, "button-ok", {}, () => [
                      a("span", { innerHTML: e.textOk }, null, 8, zt)
                    ], !0)
                  ])
                ], !0)
              ])
            ])
          ], 2)
        ], 16, At)) : j("", !0)
      ]),
      _: 3
    }));
  }
});
const Nt = /* @__PURE__ */ z(Rt, [["__scopeId", "data-v-bdb8c958"]]), B = "b", le = "$toaster", re = "$modalManager";
class ie {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const l = oe(ze).mount(t);
      this.component = l;
    }
    return this.component;
  }
}
S(ie, "component");
class ue {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const l = oe(Be).mount(t);
      this.component = l;
    }
    return this.component;
  }
}
S(ue, "component");
function qt() {
  return ne(le);
}
function Jt() {
  return ne(re);
}
function jt(e) {
  e.component(`${B}-drawer`, Nt), e.component(`${B}-modal`, ae), e.component(`${B}-pagination`, Ze), e.component(`${B}-pagination-dropdown`, ot), e.component(`${B}-pagination-select`, at), e.component(`${B}-dropdown`, _t), e.component(`${B}-dropdown-item`, kt), e.component(`${B}-dropdown-header`, xt), e.component(`${B}-dropdown-divider`, Bt), e.component(`${B}-table`, mt), e.component(`${B}-toast`, se);
}
function Gt(e) {
  e.directive("tooltip", Ht);
}
const Qt = {
  install(e) {
    jt(e), Gt(e);
    const t = ue.getComponent();
    e.provide(le, t);
    const s = ie.getComponent();
    e.provide(re, s);
  }
};
export {
  Qt as BootstrapVue,
  _t as Dropdown,
  Bt as DropdownDivider,
  xt as DropdownHeader,
  kt as DropdownItem,
  ae as Modal,
  ze as ModalManager,
  ot as PageSizeDropdown,
  at as PageSizeSelect,
  Ze as Pagination,
  mt as Table,
  q as TableFieldDefinition,
  se as Toast,
  Be as Toaster,
  Ht as tooltip,
  Jt as useModal,
  qt as useToaster
};
