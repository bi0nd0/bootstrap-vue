var ke = Object.defineProperty;
var $e = (e, t, n) => t in e ? ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var H = (e, t, n) => ($e(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as z, toRefs as P, ref as A, watch as Ce, onMounted as ee, openBlock as k, createElementBlock as $, normalizeClass as M, renderSlot as w, normalizeProps as B, guardReactiveProps as D, createElementVNode as r, toDisplayString as E, createBlock as K, Teleport as re, Fragment as R, renderList as V, mergeProps as U, computed as L, getCurrentInstance as te, watchEffect as ue, withModifiers as ie, createCommentVNode as W, createVNode as we, resolveComponent as oe, withCtx as X, unref as j, createTextVNode as q, withDirectives as de, vModelSelect as ge, resolveDirective as Se, Transition as Te, inject as ce, createApp as pe } from "vue";
import { Toast as Me, Modal as xe, Tooltip as Le } from "bootstrap";
const Be = { class: "toast-header" }, De = ["textContent"], Ae = ["textContent"], He = { class: "toast-body" }, Oe = ["textContent"], Ee = /* @__PURE__ */ z({
  __name: "Toast",
  props: {
    visible: { type: Boolean, default: !1 },
    title: { default: "" },
    subtitle: { default: "" },
    body: { default: "" },
    animation: { type: Boolean, default: !0 },
    autohide: { type: Boolean, default: !0 },
    delay: { default: 15e3 },
    variant: {}
  },
  emits: ["hide", "hidden", "show", "shown"],
  setup(e, { expose: t, emit: n }) {
    const i = e, { visible: a, animation: _, autohide: b, delay: l } = P(i), u = A(), f = A();
    Ce(a, (m) => {
      s();
    }, { immediate: !0 });
    function g() {
      u.value.show();
    }
    function h() {
      u.value.hide();
    }
    function x() {
      u.value.dispose();
    }
    function c() {
      u.value.isShown();
    }
    function d() {
      u.value.getOrCreateInstance();
    }
    function p() {
      u.value.getInstance();
    }
    function s() {
      u.value && (a.value === !0 ? g() : h());
    }
    function y() {
      n("hide", u.value);
    }
    function o() {
      n("hidden", u.value);
    }
    function C() {
      n("show", u.value);
    }
    async function v() {
      n("shown", u.value);
    }
    const S = { show: g, hide: h, dispose: x, isShown: c, getOrCreateInstance: d, getInstance: p };
    return t({ ...S }), ee(() => {
      f.value.addEventListener("hide.bs.toast", y), f.value.addEventListener("hidden.bs.toast", o), f.value.addEventListener("show.bs.toast", C), f.value.addEventListener("shown.bs.toast", v), u.value = new Me(f.value, {
        animation: _.value,
        autohide: b.value,
        delay: l.value
      }), s();
    }), (m, T) => (k(), $("div", {
      ref_key: "toastRef",
      ref: f,
      class: M(["toast", [m.variant ? `text-bg-${m.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      w(m.$slots, "header", B(D({ ...S })), () => [
        r("div", Be, [
          w(m.$slots, "title", B(D({ ...S })), () => [
            r("strong", {
              class: "me-auto",
              textContent: E(m.title)
            }, null, 8, De)
          ], !0),
          w(m.$slots, "subtitle", B(D({ ...S })), () => [
            r("small", {
              textContent: E(m.subtitle)
            }, null, 8, Ae)
          ], !0),
          r("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: h
          })
        ])
      ], !0),
      w(m.$slots, "body", B(D({ ...S })), () => [
        r("div", He, [
          w(m.$slots, "default", B(D({ ...S })), () => [
            r("span", {
              textContent: E(m.body)
            }, null, 8, Oe)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
});
const I = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, fe = /* @__PURE__ */ I(Ee, [["__scopeId", "data-v-c0cdbae8"]]);
function ze() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const i = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (n == "x" ? i : i & 3 | 8).toString(16);
  });
}
const Re = { id: "toast-wrapper" };
let se;
const Pe = /* @__PURE__ */ z({
  __name: "Toaster",
  setup(e, { expose: t }) {
    const n = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, i = A(/* @__PURE__ */ new Map());
    se = (_, b = "top right") => {
      const l = ze(), u = { ...n, ..._, id: l };
      let f = i.value.get(b);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(u), i.value.set(b, f);
    };
    function a(_, b) {
      const l = i.value.get(_);
      l == null || l.delete(b);
    }
    return t({ toast: se }), (_, b) => (k(), K(re, { to: "body" }, [
      r("div", Re, [
        (k(!0), $(R, null, V(i.value, ([l, u]) => (k(), $("div", {
          key: l,
          class: M(["toast-group", `${l}`])
        }, [
          (k(!0), $(R, null, V(u, (f, g) => (k(), K(fe, U({
            key: f.id
          }, f, {
            onHidden: (h) => a(l, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const Ve = /* @__PURE__ */ I(Pe, [["__scopeId", "data-v-786d1c50"]]);
var N = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(N || {});
const J = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(N).includes(n) || n == "" ? "" : `${t}${n}`;
}, Ne = ["onClick"], Ie = { class: "modal-content" }, Fe = { class: "modal-header" }, je = ["innerHTML"], Ge = { class: "modal-body" }, Ke = ["innerHTML"], Ue = { class: "modal-footer" }, Ye = ["innerHTML"], We = ["innerHTML"];
class Y {
  static addToStack(t) {
    t != null && this.modalStack.push(t);
  }
  static removeFromStack(t) {
    if (t == null)
      return;
    const n = this.modalStack.indexOf(t);
    n < 0 || this.modalStack.splice(n, 1);
  }
  static getLast() {
    const t = this.modalStack.length;
    if (t !== 0)
      return this.modalStack[t - 1];
  }
}
H(Y, "modalStack", new Array());
const ve = /* @__PURE__ */ z({
  __name: "Modal",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { type: [Boolean, String], default: !0 },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    size: { default: N.STANDARD },
    btnSize: { default: N.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: t, emit: n }) {
    const i = e, {
      backdrop: a,
      keyboard: _,
      focus: b,
      disableOutsideClick: l,
      size: u,
      btnSize: f
    } = P(i), g = L(() => J(u.value, "modal-")), h = L(() => J(f.value, "btn-")), x = A();
    let c;
    te();
    let d;
    function p() {
      return new Promise((G, an) => {
        const ne = Y.getLast();
        ne && ne.hide(), Y.addToStack(c), c == null || c.show(), d = G, n("onShown", c);
      });
    }
    function s(T = !0) {
      Y.removeFromStack(c), c == null || c.hide();
      const G = Y.getLast();
      G && G.show(), typeof d == "function" && d(T), n("onHidden", c);
    }
    function y() {
      c == null || c.toggle();
    }
    ee(() => {
      c = new xe(x.value, {
        backdrop: a == null ? void 0 : a.value,
        keyboard: _.value,
        focus: b.value
      }), ue(() => {
        (i == null ? void 0 : i.visible) === !0 ? c == null || c.show() : c == null || c.hide();
      });
    });
    function o(T) {
      (a == null ? void 0 : a.value) !== "static" && s(!1);
    }
    function C() {
      s(!1);
    }
    function v() {
      s(!1);
    }
    function S() {
      s(!0);
    }
    t({
      modal: c,
      show: p,
      hide: s,
      toggle: y,
      onHeaderCloseClicked: C,
      onCancelClicked: v,
      onOkCLicked: S
    });
    const m = { show: p, hide: s, toggle: y, modal: c };
    return (T, G) => (k(), $("div", U({
      ref_key: "modalElement",
      ref: x,
      class: "modal fade",
      tabindex: "-1"
    }, { ...T.$attrs }, {
      onClick: ie(o, ["self"])
    }), [
      r("div", {
        class: M(["modal-dialog", g.value])
      }, [
        r("div", Ie, [
          r("div", Fe, [
            w(T.$slots, "header", B(D({ ...m })), () => [
              r("h5", {
                class: "modal-title",
                innerHTML: T.title
              }, null, 8, je)
            ]),
            r("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: C
            })
          ]),
          r("div", Ge, [
            w(T.$slots, "default", B(D({ ...m })), () => [
              r("span", { innerHTML: T.body }, null, 8, Ke)
            ])
          ]),
          r("div", Ue, [
            w(T.$slots, "footer", B(D({ ...m })), () => [
              T.okOnly ? W("", !0) : (k(), $("button", {
                key: 0,
                type: "button",
                class: M(["btn btn-secondary", h.value]),
                onClick: v
              }, [
                w(T.$slots, "button-cancel", B(D({ ...m })), () => [
                  r("span", { innerHTML: T.textCancel }, null, 8, Ye)
                ])
              ], 2)),
              r("button", {
                type: "button",
                class: M(["btn btn-primary", h.value]),
                onClick: S
              }, [
                w(T.$slots, "button-ok", B(D({ ...m })), () => [
                  r("span", { innerHTML: T.textOk }, null, 8, We)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Ne));
  }
}), Xe = /* @__PURE__ */ z({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = A(void 0), i = A({});
    function a(b = {}) {
      var l;
      return b.okOnly = !1, i.value = b, (l = n.value) == null ? void 0 : l.show();
    }
    function _(b = {}) {
      var l;
      return b.okOnly = !0, i.value = b, (l = n.value) == null ? void 0 : l.show();
    }
    return t({ confirm: a, alert: _ }), (b, l) => (k(), K(re, { to: "body" }, [
      we(ve, U({
        ref_key: "modalRef",
        ref: n
      }, { ...i.value }), null, 16)
    ]));
  }
}), qe = { "data-first": "" }, Je = ["disabled", "innerHTML"], Qe = { "data-prev": "" }, Ze = ["disabled", "innerHTML"], et = { key: 0 }, tt = ["innerHTML"], nt = ["onClick"], ot = { "data-next": "" }, st = ["disabled", "innerHTML"], at = { "data-last": "" }, lt = ["disabled", "innerHTML"], rt = /* @__PURE__ */ z({
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
    size: { default: N.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e;
    function i(o, C = 0) {
      return [...Array(o).keys()].map((v) => v + C);
    }
    const { modelValue: a, maxVisibleButtons: _, hideEllipsis: b } = P(n), l = Math.floor(_.value / 2), u = L(() => {
      let o = _.value, C = a.value <= l ? 1 : a.value - l;
      return a.value >= h.value - l && (C = h.value - o + 1), C < 1 && (C = 1), h.value < o && (o = h.value), i(o, C);
    }), f = L(() => a.value <= 1), g = L(() => a.value >= h.value), h = L(() => {
      const { perPage: o, totalItems: C } = n;
      return Math.ceil(C / o);
    });
    ue(() => {
      h.value > 0 && a.value > h.value && t("update:modelValue", h.value);
    });
    function x(o) {
      const C = _.value - 1;
      return !(b.value === !0 || o === 0 && a.value - l - 1 <= 0 || o === C && a.value + l >= h.value || o > 0 && o < C);
    }
    function c(o) {
      o < 1 && (o = 1), o > h.value && (o = h.value), t("update:modelValue", o);
    }
    function d() {
      t("update:modelValue", 1);
    }
    function p() {
      t("update:modelValue", h.value);
    }
    function s() {
      let o = a.value - 1;
      o < 1 && (o = 1), t("update:modelValue", o);
    }
    function y() {
      let o = a.value + 1;
      o > h.value && (o = h.value), t("update:modelValue", o);
    }
    return (o, C) => (k(), $("ul", {
      class: M(["pagination", o.size])
    }, [
      r("li", qe, [
        r("button", {
          class: "",
          disabled: f.value,
          innerHTML: o.firstText,
          onClick: d
        }, null, 8, Je)
      ]),
      r("li", Qe, [
        r("button", {
          class: "",
          disabled: f.value,
          innerHTML: o.prevText,
          onClick: s
        }, null, 8, Ze)
      ]),
      (k(!0), $(R, null, V(u.value, (v, S) => (k(), $(R, null, [
        x(S) ? (k(), $("li", et, [
          r("button", {
            disabled: "",
            class: "",
            innerHTML: o.ellipsisText
          }, null, 8, tt)
        ])) : (k(), $("li", {
          key: 1,
          "data-prev": "",
          class: M({ active: o.modelValue === v })
        }, [
          r("button", {
            class: "",
            onClick: (m) => c(v)
          }, E(v), 9, nt)
        ], 2))
      ], 64))), 256)),
      r("li", ot, [
        r("button", {
          class: "",
          disabled: g.value,
          innerHTML: o.nextText,
          onClick: y
        }, null, 8, st)
      ]),
      r("li", at, [
        r("button", {
          class: "",
          disabled: g.value,
          innerHTML: o.lastText,
          onClick: p
        }, null, 8, lt)
      ])
    ], 2));
  }
});
const ut = /* @__PURE__ */ I(rt, [["__scopeId", "data-v-2bfd7085"]]), it = { class: "d-inline" }, dt = /* @__PURE__ */ r("span", null, "Per page: ", -1), ct = { class: "fw-bold" }, pt = /* @__PURE__ */ z({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: i } = P(n), a = L({
      get: () => n.modelValue,
      set: (_) => t("update:modelValue", _)
    });
    return (_, b) => {
      const l = oe("b-dropdown-item"), u = oe("b-dropdown");
      return k(), K(u, U({
        variant: "outline-primary",
        size: "sm"
      }, { ..._.$attrs }), {
        button: X(() => [
          r("div", it, [
            w(_.$slots, "default", { selected: a.value }, () => [
              dt,
              r("span", ct, E(a.value), 1)
            ])
          ])
        ]),
        default: X(() => [
          (k(!0), $(R, null, V(j(i), (f, g) => (k(), K(l, {
            key: f,
            onClick: (h) => a.value = f,
            active: f === _.modelValue
          }, {
            default: X(() => [
              q(E(f), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), ft = ["value"], vt = /* @__PURE__ */ z({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: i } = P(n), a = L({
      get: () => n.modelValue,
      set: (_) => t("update:modelValue", _)
    });
    return (_, b) => de((k(), $("select", {
      "onUpdate:modelValue": b[0] || (b[0] = (l) => a.value = l)
    }, [
      (k(!0), $(R, null, V(j(i), (l, u) => (k(), $("option", {
        key: l,
        value: l
      }, E(l), 9, ft))), 128))
    ], 512)), [
      [ge, a.value]
    ]);
  }
});
var F = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(F || {});
class _t {
  constructor(t, n = "ASC", i) {
    H(this, "key");
    H(this, "direction");
    H(this, "sortFn");
    this.key = t, this.direction = n, this.sortFn = i;
  }
}
const ae = (e, t) => {
  const n = (l, u) => {
    let f = typeof l, g = typeof u;
    return f == "number" && f == g;
  }, i = (l, u) => l - u, a = (l, u) => (l = l ?? "", u = u ?? "", l.localeCompare(u)), _ = (l, u) => n(l, u) ? i : a, b = [...t];
  return b.sort((l, u) => {
    let f = 0;
    for (let g of e) {
      let { key: h, direction: x, sortFn: c } = g, d = x === "ASC" ? 1 : -1, p = l[h], s = u[h];
      if (c = typeof c == "function" ? c : _(p, s), f = c(p, s, l, u, t, g, d) * d, f !== 0)
        return f;
    }
    return f;
  }), b;
}, ht = ["onClick"], mt = { class: "th-wrapper" }, yt = {
  key: 0,
  "data-sort-indicator": ""
}, bt = { class: "sort-index" }, kt = { class: "sort-direction" }, $t = ["onMouseover"], Ct = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, wt = ["colspan"], gt = ["innerHTML"];
class Q {
  constructor(t = "", n = "", i = !1, a) {
    H(this, "key");
    // age
    H(this, "label");
    // Person age
    H(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    H(this, "sortFn");
    this.key = t, this.label = n, this.sortable = i, this.sortFn = a;
  }
}
const St = /* @__PURE__ */ z({
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
  emits: ["sort", "onMouseOverCell"],
  setup(e, { emit: t }) {
    const n = e, i = (d) => {
      let p = [];
      for (const s of d)
        p = p.concat(Object.keys(s));
      return p = p.filter((s, y) => p.indexOf(s) == y), p;
    }, a = A([]), { fields: _, items: b } = P(n), l = L(() => {
      if (n.externalSort || a.value.length == 0)
        return n.items;
      const d = [...n.items];
      return ae(a.value, d);
    }), u = L(() => {
      let d = _.value, p = [];
      return d.length === 0 && (d = i([...b.value])), d.reduce((s, y, o) => {
        if (typeof y == "string")
          s.push(new Q(y, y));
        else if (y instanceof Q)
          s.push(y);
        else if (typeof y == "object") {
          const { key: C, label: v, sortable: S, sortFn: m } = y;
          s.push(new Q(C, v, S, m));
        }
        return s;
      }, p);
    });
    function f(d) {
      const p = a.value.findIndex((s) => s.key === d.key);
      return p < 0 ? "" : p + 1;
    }
    function g(d) {
      const p = a.value.findIndex((y) => y.key === d.key);
      if (p < 0)
        return "fas fa-sort";
      const s = a.value[p];
      return s.direction === F.ASC ? "fas fa-sort-up" : s.direction === F.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function h(d) {
      const { key: p } = d, s = a.value.findIndex((y) => y.key === p);
      if (s < 0) {
        const y = new _t(p, F.ASC, d.sortFn);
        a.value.push(y);
      } else {
        const y = a.value[s], o = y.direction;
        o === F.ASC ? y.direction = F.DESC : o === F.DESC && a.value.splice(s, 1);
      }
      t("sort", a.value, ae);
    }
    function x(d, p, s, y) {
      t("onMouseOverCell", d, p, s, y);
    }
    let c = A(null);
    return ee(() => {
      c.value = te();
    }), (d, p) => (k(), $("table", U({ ...d.$attrs }, {
      class: { striped: d.striped, hover: d.hover }
    }), [
      r("thead", null, [
        (k(!0), $(R, null, V(u.value, (s) => (k(), $("th", {
          key: `thead-${s.key}`,
          class: M({ sortable: s.sortable }),
          onClick: (y) => s.sortable && h(s)
        }, [
          r("span", mt, [
            w(d.$slots, `head(${s.key})`, {
              field: s,
              data: j(c),
              value: s.label
            }, () => [
              q(E(s.label), 1)
            ], !0),
            s.sortable ? (k(), $("span", yt, [
              r("span", bt, E(f(s)), 1),
              r("span", kt, [
                r("i", {
                  class: M(g(s))
                }, null, 2)
              ])
            ])) : W("", !0)
          ])
        ], 10, ht))), 128))
      ]),
      r("tbody", null, [
        (k(!0), $(R, null, V(l.value, (s, y) => (k(), $(R, {
          key: `trow-${(s == null ? void 0 : s.id) ?? y}`
        }, [
          w(d.$slots, "row", {
            item: s,
            index: y,
            colspan: u.value.length
          }, void 0, !0),
          r("tr", null, [
            (k(!0), $(R, null, V(u.value, (o) => (k(), $("td", {
              key: `tcell-${o.key + ((s == null ? void 0 : s.id) ?? y)}`,
              class: M({ [`tcell-${o == null ? void 0 : o.key}`]: !0 }),
              onMouseover: (C) => x(C, s, y, o)
            }, [
              w(d.$slots, `cell(${o == null ? void 0 : o.key})`, {
                data: j(c),
                item: s,
                field: o,
                value: s[o == null ? void 0 : o.key]
              }, () => [
                q(E(s[o == null ? void 0 : o.key]), 1)
              ], !0)
            ], 42, $t))), 128))
          ])
        ], 64))), 128))
      ]),
      r("tfoot", null, [
        w(d.$slots, "footer", { data: j(c) }, void 0, !0)
      ]),
      d.showEmpty && l.value.length === 0 ? (k(), $("tr", Ct, [
        r("td", {
          colspan: u.value.length
        }, [
          w(d.$slots, "empty", {
            items: l.value,
            data: j(c),
            fields: u.value
          }, () => [
            r("span", { innerHTML: d.emptyText }, null, 8, gt)
          ], !0)
        ], 8, wt)
      ])) : W("", !0)
    ], 16));
  }
});
const Tt = /* @__PURE__ */ I(St, [["__scopeId", "data-v-b1e9b5de"]]);
var _e = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(_e || {});
const Mt = { class: "d-inline-block position-relative" }, xt = ["disabled"], le = "data-prevent-close", Lt = /* @__PURE__ */ z({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: _e.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: N.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = A(), i = A(), { variant: a, centered: _, dropup: b, dropend: l, dropstart: u, menuEnd: f } = P(t), g = A(!1), h = L(() => {
      const v = [];
      return a != null && a.value && v.push(`btn-${a.value}`), t.size && v.push(`btn-${t.size}`), v;
    }), x = L(() => {
      const v = [];
      return _ != null && _.value && v.push("dropdown-center"), b != null && b.value && v.push("dropup"), u != null && u.value && v.push("dropstart"), !(u != null && u.value) && (l != null && l.value) && v.push("dropend"), v.length === 0 ? v.push("dropdown") : v.unshift("btn-group"), v;
    }), c = L(() => {
      const v = [];
      return g.value && v.push("show"), f.value && v.push("dropdown-menu-end"), v;
    });
    function d() {
      g.value = !0;
    }
    function p() {
      g.value = !1;
    }
    function s(v) {
      g.value ? p() : d();
    }
    function y(v) {
      const { target: S } = v;
      (S == null ? void 0 : S.closest(`[${le}],[${le}=true]`)) || p();
    }
    function o() {
      g.value && p();
    }
    const C = {
      show: g,
      disabled: t.disabled,
      buttonClasses: h,
      onButtonClicked: s,
      onMenuClicked: y,
      onClickOutside: o,
      open: d,
      close: p
    };
    return (v, S) => {
      const m = Se("click-outside");
      return k(), $("div", {
        ref_key: "dropDownRef",
        ref: i,
        class: M(x.value)
      }, [
        de((k(), $("div", Mt, [
          w(v.$slots, "header", B(D({ ...C })), () => [
            r("button", {
              class: M(["btn dropdown-toggle", h.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: s,
              disabled: v.disabled
            }, [
              w(v.$slots, "button", B(D({ ...C })), () => [
                q(E(v.text), 1)
              ], !0)
            ], 10, xt)
          ], !0),
          r("ul", {
            ref_key: "dropDownMenuRef",
            ref: n,
            class: M(["dropdown-menu", c.value]),
            onClick: y
          }, [
            w(v.$slots, "default", B(D({ ...C })), void 0, !0)
          ], 2)
        ])), [
          [m, o]
        ])
      ], 2);
    };
  }
});
const Bt = /* @__PURE__ */ I(Lt, [["__scopeId", "data-v-f9658383"]]), Dt = ["data-prevent-close"], At = /* @__PURE__ */ z({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = P(t);
    return (i, a) => (k(), $("li", {
      "data-prevent-close": j(n) ? "" : null
    }, [
      r("span", {
        class: M(["dropdown-item", { active: i.active }]),
        role: "button",
        tabindex: "0"
      }, [
        w(i.$slots, "default")
      ], 2)
    ], 8, Dt));
  }
}), Ht = {}, Ot = { "data-prevent-close": "" }, Et = { class: "dropdown-header" };
function zt(e, t) {
  return k(), $("li", Ot, [
    r("h6", Et, [
      w(e.$slots, "default")
    ])
  ]);
}
const Rt = /* @__PURE__ */ I(Ht, [["render", zt]]), Pt = {}, Vt = /* @__PURE__ */ r("hr", { class: "dropdown-divider" }, null, -1), Nt = [
  Vt
];
function It(e, t) {
  return k(), $("li", null, Nt);
}
const Ft = /* @__PURE__ */ I(Pt, [["render", It]]), jt = {
  mounted(e, t, n, i) {
    new Le(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Gt = (e, t) => {
  function n(_, b) {
    for (; _ !== null; ) {
      if (_ === b)
        return !0;
      _ = _.parentNode;
    }
    return !1;
  }
  const i = new AbortController();
  function a(_, b) {
    document.addEventListener("click", function(l) {
      const u = l.target;
      _ && (n(u, _) || b());
    }, { signal: i.signal });
  }
  return a(e, t), i;
}, Kt = {
  mounted(e, t, n, i) {
    const a = t.value;
    Gt(e, a);
  }
};
class Z {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
H(Z, "list", /* @__PURE__ */ new Set());
const Ut = ["onClick"], Yt = { class: "drawer-content" }, Wt = { class: "drawer-header" }, Xt = ["innerHTML"], qt = { class: "drawer-body" }, Jt = ["innerHTML"], Qt = { class: "drawer-footer" }, Zt = ["innerHTML"], en = ["innerHTML"], tn = /* @__PURE__ */ z({
  __name: "Drawer",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { type: [Boolean, String], default: "static" },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean },
    okOnly: { type: Boolean, default: !1 },
    size: { default: N.STANDARD },
    btnSize: { default: N.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: i,
      keyboard: a,
      focus: _,
      size: b,
      btnSize: l
    } = P(n), u = L(() => J(b.value, "drawer-")), f = L(() => J(l.value, "btn-")), g = A(), h = A(!1), x = te();
    let c;
    async function d() {
      return h.value === !0 ? void 0 : new Promise((T, G) => {
        h.value = !0, c = T;
      });
    }
    function p(m = !0) {
      h.value = !1, typeof c == "function" && c(m);
    }
    function s() {
      h.value === !0 ? d() : p(!1);
    }
    function y(m) {
      (i == null ? void 0 : i.value) !== "static" && p(!1);
    }
    function o() {
      p(!1);
    }
    function C() {
      p(!1);
    }
    function v() {
      p(!0);
    }
    function S() {
      h.value === !0 ? Z.add(x) : Z.delete(x);
    }
    return t({
      show: d,
      hide: p,
      toggle: s
    }), (m, T) => (k(), K(Te, {
      onBeforeEnter: S,
      onAfterLeave: S
    }, {
      default: X(() => [
        h.value ? (k(), $("div", U({
          key: 0,
          ref_key: "drawerElement",
          ref: g,
          class: "drawer",
          tabindex: "-1"
        }, { ...m.$attrs }, {
          onClick: ie(y, ["self"])
        }), [
          r("div", {
            class: M(["drawer-dialog", u.value])
          }, [
            r("div", Yt, [
              r("div", Wt, [
                w(m.$slots, "header", {}, () => [
                  r("h5", {
                    class: "drawer-title",
                    innerHTML: m.title
                  }, null, 8, Xt)
                ], !0),
                r("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: o
                })
              ]),
              r("div", qt, [
                w(m.$slots, "default", {}, () => [
                  r("span", { innerHTML: m.body }, null, 8, Jt)
                ], !0)
              ]),
              r("div", Qt, [
                w(m.$slots, "footer", {}, () => [
                  m.okOnly ? W("", !0) : (k(), $("button", {
                    key: 0,
                    type: "button",
                    class: M(["ms-auto btn btn-secondary", f.value]),
                    onClick: C
                  }, [
                    w(m.$slots, "button-cancel", {}, () => [
                      r("span", { innerHTML: m.textCancel }, null, 8, Zt)
                    ], !0)
                  ], 2)),
                  r("button", {
                    type: "button",
                    class: M(["btn btn-primary", f.value]),
                    onClick: v
                  }, [
                    w(m.$slots, "button-ok", {}, () => [
                      r("span", { innerHTML: m.textOk }, null, 8, en)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Ut)) : W("", !0)
      ]),
      _: 3
    }));
  }
});
const nn = /* @__PURE__ */ I(tn, [["__scopeId", "data-v-2e49e8cb"]]), O = "b", he = "$toaster", me = "$modalManager";
class ye {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const i = pe(Xe).mount(t);
      this.component = i;
    }
    return this.component;
  }
}
H(ye, "component");
class be {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const i = pe(Ve).mount(t);
      this.component = i;
    }
    return this.component;
  }
}
H(be, "component");
function dn() {
  return ce(he);
}
function cn() {
  return ce(me);
}
function on(e) {
  e.component(`${O}-drawer`, nn), e.component(`${O}-modal`, ve), e.component(`${O}-pagination`, ut), e.component(`${O}-pagination-dropdown`, pt), e.component(`${O}-pagination-select`, vt), e.component(`${O}-dropdown`, Bt), e.component(`${O}-dropdown-item`, At), e.component(`${O}-dropdown-header`, Rt), e.component(`${O}-dropdown-divider`, Ft), e.component(`${O}-table`, Tt), e.component(`${O}-toast`, fe);
}
function sn(e) {
  e.directive("tooltip", jt), e.directive("click-outside", Kt);
}
const pn = {
  install(e) {
    on(e), sn(e);
    const t = be.getComponent(), n = ye.getComponent();
    e.runWithContext(() => {
      e.provide(he, t), e.provide(me, n);
    });
  }
};
export {
  pn as BootstrapVue,
  Bt as Dropdown,
  Ft as DropdownDivider,
  Rt as DropdownHeader,
  At as DropdownItem,
  ve as Modal,
  Xe as ModalManager,
  pt as PageSizeDropdown,
  vt as PageSizeSelect,
  ut as Pagination,
  Tt as Table,
  Q as TableFieldDefinition,
  fe as Toast,
  Ve as Toaster,
  Kt as clickOutside,
  jt as tooltip,
  cn as useModal,
  dn as useToaster
};
