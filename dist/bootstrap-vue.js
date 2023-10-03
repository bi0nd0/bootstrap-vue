var ke = Object.defineProperty;
var $e = (e, t, n) => t in e ? ke(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => ($e(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as E, toRefs as P, ref as D, watch as Ce, onMounted as Z, openBlock as y, createElementBlock as $, normalizeClass as M, renderSlot as g, normalizeProps as L, guardReactiveProps as B, createElementVNode as l, toDisplayString as O, createBlock as G, Teleport as le, Fragment as z, renderList as V, mergeProps as K, computed as x, getCurrentInstance as ee, watchEffect as re, withModifiers as ue, createCommentVNode as Y, createVNode as we, resolveComponent as ne, withCtx as W, unref as j, createTextVNode as X, withDirectives as ie, vModelSelect as ge, resolveDirective as Se, Transition as Te, inject as ce, createApp as de } from "vue";
import { Toast as Me, Modal as xe, Tooltip as Le } from "bootstrap";
const Be = { class: "toast-header" }, De = ["textContent"], Ae = ["textContent"], He = { class: "toast-body" }, Oe = ["textContent"], Ee = /* @__PURE__ */ E({
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
    const r = e, { visible: u, animation: _, autohide: b, delay: s } = P(r), i = D(), f = D();
    Ce(u, (c) => {
      a();
    }, { immediate: !0 });
    function w() {
      i.value.show();
    }
    function h() {
      i.value.hide();
    }
    function k() {
      i.value.dispose();
    }
    function S() {
      i.value.isShown();
    }
    function p() {
      i.value.getOrCreateInstance();
    }
    function d() {
      i.value.getInstance();
    }
    function a() {
      i.value && (u.value === !0 ? w() : h());
    }
    function m() {
      n("hide", i.value);
    }
    function o() {
      n("hidden", i.value);
    }
    function C() {
      n("show", i.value);
    }
    async function v() {
      n("shown", i.value);
    }
    const T = { show: w, hide: h, dispose: k, isShown: S, getOrCreateInstance: p, getInstance: d };
    return t({ ...T }), Z(() => {
      f.value.addEventListener("hide.bs.toast", m), f.value.addEventListener("hidden.bs.toast", o), f.value.addEventListener("show.bs.toast", C), f.value.addEventListener("shown.bs.toast", v), i.value = new Me(f.value, {
        animation: _.value,
        autohide: b.value,
        delay: s.value
      }), a();
    }), (c, R) => (y(), $("div", {
      ref_key: "toastRef",
      ref: f,
      class: M(["toast", [c.variant ? `text-bg-${c.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      g(c.$slots, "header", L(B({ ...T })), () => [
        l("div", Be, [
          g(c.$slots, "title", L(B({ ...T })), () => [
            l("strong", {
              class: "me-auto",
              textContent: O(c.title)
            }, null, 8, De)
          ], !0),
          g(c.$slots, "subtitle", L(B({ ...T })), () => [
            l("small", {
              textContent: O(c.subtitle)
            }, null, 8, Ae)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: h
          })
        ])
      ], !0),
      g(c.$slots, "body", L(B({ ...T })), () => [
        l("div", He, [
          g(c.$slots, "default", L(B({ ...T })), () => [
            l("span", {
              textContent: O(c.body)
            }, null, 8, Oe)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
});
const I = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, u] of t)
    n[r] = u;
  return n;
}, pe = /* @__PURE__ */ I(Ee, [["__scopeId", "data-v-c0cdbae8"]]);
function ze() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (n == "x" ? r : r & 3 | 8).toString(16);
  });
}
const Re = { id: "toast-wrapper" };
let oe;
const Pe = /* @__PURE__ */ E({
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
    }, r = D(/* @__PURE__ */ new Map());
    oe = (_, b = "top right") => {
      const s = ze(), i = { ...n, ..._, id: s };
      let f = r.value.get(b);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(i), r.value.set(b, f);
    };
    function u(_, b) {
      const s = r.value.get(_);
      s == null || s.delete(b);
    }
    return t({ toast: oe }), (_, b) => (y(), G(le, { to: "body" }, [
      l("div", Re, [
        (y(!0), $(z, null, V(r.value, ([s, i]) => (y(), $("div", {
          key: s,
          class: M(["toast-group", `${s}`])
        }, [
          (y(!0), $(z, null, V(i, (f, w) => (y(), G(pe, K({
            key: f.id
          }, f, {
            onHidden: (h) => u(s, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const Ve = /* @__PURE__ */ I(Pe, [["__scopeId", "data-v-786d1c50"]]);
var N = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(N || {});
const q = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(N).includes(n) || n == "" ? "" : `${t}${n}`;
}, Ne = ["onClick"], Ie = { class: "modal-content" }, Fe = { class: "modal-header" }, je = ["innerHTML"], Ge = { class: "modal-body" }, Ke = ["innerHTML"], Ue = { class: "modal-footer" }, Ye = ["innerHTML"], We = ["innerHTML"];
class U {
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
A(U, "modalStack", new Array());
const fe = /* @__PURE__ */ E({
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
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: r,
      keyboard: u,
      focus: _,
      disableOutsideClick: b,
      size: s,
      btnSize: i
    } = P(n), f = x(() => q(s.value, "modal-")), w = x(() => q(i.value, "btn-")), h = D();
    let k;
    ee();
    let S;
    function p() {
      return new Promise((R, be) => {
        const te = U.getLast();
        te && te.hide(), U.addToStack(k), k == null || k.show(), S = R;
      });
    }
    function d(c = !0) {
      U.removeFromStack(k), k == null || k.hide();
      const R = U.getLast();
      R && R.show(), typeof S == "function" && S(c);
    }
    function a() {
      k == null || k.toggle();
    }
    Z(() => {
      k = new xe(h.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: u.value,
        focus: _.value
      }), re(() => {
        (n == null ? void 0 : n.visible) === !0 ? k == null || k.show() : k == null || k.hide();
      });
    });
    function m(c) {
      (r == null ? void 0 : r.value) !== "static" && d(!1);
    }
    function o() {
      d(!1);
    }
    function C() {
      d(!1);
    }
    function v() {
      d(!0);
    }
    t({
      modal: k,
      show: p,
      hide: d,
      toggle: a,
      onHeaderCloseClicked: o,
      onCancelClicked: C,
      onOkCLicked: v
    });
    const T = { show: p, hide: d, toggle: a, modal: k };
    return (c, R) => (y(), $("div", K({
      ref_key: "modalElement",
      ref: h,
      class: "modal fade",
      tabindex: "-1"
    }, { ...c.$attrs }, {
      onClick: ue(m, ["self"])
    }), [
      l("div", {
        class: M(["modal-dialog", f.value])
      }, [
        l("div", Ie, [
          l("div", Fe, [
            g(c.$slots, "header", L(B({ ...T })), () => [
              l("h5", {
                class: "modal-title",
                innerHTML: c.title
              }, null, 8, je)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: o
            })
          ]),
          l("div", Ge, [
            g(c.$slots, "default", L(B({ ...T })), () => [
              l("span", { innerHTML: c.body }, null, 8, Ke)
            ])
          ]),
          l("div", Ue, [
            g(c.$slots, "footer", L(B({ ...T })), () => [
              c.okOnly ? Y("", !0) : (y(), $("button", {
                key: 0,
                type: "button",
                class: M(["btn btn-secondary", w.value]),
                onClick: C
              }, [
                g(c.$slots, "button-cancel", L(B({ ...T })), () => [
                  l("span", { innerHTML: c.textCancel }, null, 8, Ye)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: M(["btn btn-primary", w.value]),
                onClick: v
              }, [
                g(c.$slots, "button-ok", L(B({ ...T })), () => [
                  l("span", { innerHTML: c.textOk }, null, 8, We)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Ne));
  }
}), Xe = /* @__PURE__ */ E({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = D(void 0), r = D({});
    function u(b = {}) {
      var s;
      return b.okOnly = !1, r.value = b, (s = n.value) == null ? void 0 : s.show();
    }
    function _(b = {}) {
      var s;
      return b.okOnly = !0, r.value = b, (s = n.value) == null ? void 0 : s.show();
    }
    return t({ confirm: u, alert: _ }), (b, s) => (y(), G(le, { to: "body" }, [
      we(fe, K({
        ref_key: "modalRef",
        ref: n
      }, { ...r.value }), null, 16)
    ]));
  }
}), qe = { "data-first": "" }, Je = ["disabled", "innerHTML"], Qe = { "data-prev": "" }, Ze = ["disabled", "innerHTML"], et = { key: 0 }, tt = ["innerHTML"], nt = ["onClick"], ot = { "data-next": "" }, st = ["disabled", "innerHTML"], at = { "data-last": "" }, lt = ["disabled", "innerHTML"], rt = /* @__PURE__ */ E({
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
    function r(o, C = 0) {
      return [...Array(o).keys()].map((v) => v + C);
    }
    const { modelValue: u, maxVisibleButtons: _, hideEllipsis: b } = P(n), s = Math.floor(_.value / 2), i = x(() => {
      let o = _.value, C = u.value <= s ? 1 : u.value - s;
      return u.value >= h.value - s && (C = h.value - o + 1), C < 1 && (C = 1), h.value < o && (o = h.value), r(o, C);
    }), f = x(() => u.value <= 1), w = x(() => u.value >= h.value), h = x(() => {
      const { perPage: o, totalItems: C } = n;
      return Math.ceil(C / o);
    });
    re(() => {
      h.value > 0 && u.value > h.value && t("update:modelValue", h.value);
    });
    function k(o) {
      const C = _.value - 1;
      return !(b.value === !0 || o === 0 && u.value - s - 1 <= 0 || o === C && u.value + s >= h.value || o > 0 && o < C);
    }
    function S(o) {
      o < 1 && (o = 1), o > h.value && (o = h.value), t("update:modelValue", o);
    }
    function p() {
      t("update:modelValue", 1);
    }
    function d() {
      t("update:modelValue", h.value);
    }
    function a() {
      let o = u.value - 1;
      o < 1 && (o = 1), t("update:modelValue", o);
    }
    function m() {
      let o = u.value + 1;
      o > h.value && (o = h.value), t("update:modelValue", o);
    }
    return (o, C) => (y(), $("ul", {
      class: M(["pagination", o.size])
    }, [
      l("li", qe, [
        l("button", {
          class: "",
          disabled: f.value,
          innerHTML: o.firstText,
          onClick: p
        }, null, 8, Je)
      ]),
      l("li", Qe, [
        l("button", {
          class: "",
          disabled: f.value,
          innerHTML: o.prevText,
          onClick: a
        }, null, 8, Ze)
      ]),
      (y(!0), $(z, null, V(i.value, (v, T) => (y(), $(z, null, [
        k(T) ? (y(), $("li", et, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: o.ellipsisText
          }, null, 8, tt)
        ])) : (y(), $("li", {
          key: 1,
          "data-prev": "",
          class: M({ active: o.modelValue === v })
        }, [
          l("button", {
            class: "",
            onClick: (c) => S(v)
          }, O(v), 9, nt)
        ], 2))
      ], 64))), 256)),
      l("li", ot, [
        l("button", {
          class: "",
          disabled: w.value,
          innerHTML: o.nextText,
          onClick: m
        }, null, 8, st)
      ]),
      l("li", at, [
        l("button", {
          class: "",
          disabled: w.value,
          innerHTML: o.lastText,
          onClick: d
        }, null, 8, lt)
      ])
    ], 2));
  }
});
const ut = /* @__PURE__ */ I(rt, [["__scopeId", "data-v-2bfd7085"]]), it = { class: "d-inline" }, ct = /* @__PURE__ */ l("span", null, "Per page: ", -1), dt = { class: "fw-bold" }, pt = /* @__PURE__ */ E({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: r } = P(n), u = x({
      get: () => n.modelValue,
      set: (_) => t("update:modelValue", _)
    });
    return (_, b) => {
      const s = ne("b-dropdown-item"), i = ne("b-dropdown");
      return y(), G(i, K({
        variant: "outline-primary",
        size: "sm"
      }, { ..._.$attrs }), {
        button: W(() => [
          l("div", it, [
            g(_.$slots, "default", { selected: u.value }, () => [
              ct,
              l("span", dt, O(u.value), 1)
            ])
          ])
        ]),
        default: W(() => [
          (y(!0), $(z, null, V(j(r), (f, w) => (y(), G(s, {
            key: f,
            onClick: (h) => u.value = f,
            active: f === _.modelValue
          }, {
            default: W(() => [
              X(O(f), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), ft = ["value"], vt = /* @__PURE__ */ E({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: r } = P(n), u = x({
      get: () => n.modelValue,
      set: (_) => t("update:modelValue", _)
    });
    return (_, b) => ie((y(), $("select", {
      "onUpdate:modelValue": b[0] || (b[0] = (s) => u.value = s)
    }, [
      (y(!0), $(z, null, V(j(r), (s, i) => (y(), $("option", {
        key: s,
        value: s
      }, O(s), 9, ft))), 128))
    ], 512)), [
      [ge, u.value]
    ]);
  }
});
var F = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(F || {});
class _t {
  constructor(t, n = "ASC", r) {
    A(this, "key");
    A(this, "direction");
    A(this, "sortFn");
    this.key = t, this.direction = n, this.sortFn = r;
  }
}
const se = (e, t) => {
  const n = (s, i) => {
    let f = typeof s, w = typeof i;
    return f == "number" && f == w;
  }, r = (s, i) => s - i, u = (s, i) => (s = s ?? "", i = i ?? "", s.localeCompare(i)), _ = (s, i) => n(s, i) ? r : u, b = [...t];
  return b.sort((s, i) => {
    let f = 0;
    for (let w of e) {
      let { key: h, direction: k, sortFn: S } = w, p = k === "ASC" ? 1 : -1, d = s[h], a = i[h];
      if (S = typeof S == "function" ? S : _(d, a), f = S(d, a, s, i, t, w, p) * p, f !== 0)
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
class J {
  constructor(t = "", n = "", r = !1, u) {
    A(this, "key");
    // age
    A(this, "label");
    // Person age
    A(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    A(this, "sortFn");
    this.key = t, this.label = n, this.sortable = r, this.sortFn = u;
  }
}
const St = /* @__PURE__ */ E({
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
    const n = e, r = (p) => {
      let d = [];
      for (const a of p)
        d = d.concat(Object.keys(a));
      return d = d.filter((a, m) => d.indexOf(a) == m), d;
    }, u = D([]), { fields: _, items: b } = P(n), s = x(() => {
      if (n.externalSort || u.value.length == 0)
        return n.items;
      const p = [...n.items];
      return se(u.value, p);
    }), i = x(() => {
      let p = _.value, d = [];
      return p.length === 0 && (p = r([...b.value])), p.reduce((a, m, o) => {
        if (typeof m == "string")
          a.push(new J(m, m));
        else if (m instanceof J)
          a.push(m);
        else if (typeof m == "object") {
          const { key: C, label: v, sortable: T, sortFn: c } = m;
          a.push(new J(C, v, T, c));
        }
        return a;
      }, d);
    });
    function f(p) {
      const d = u.value.findIndex((a) => a.key === p.key);
      return d < 0 ? "" : d + 1;
    }
    function w(p) {
      const d = u.value.findIndex((m) => m.key === p.key);
      if (d < 0)
        return "fas fa-sort";
      const a = u.value[d];
      return a.direction === F.ASC ? "fas fa-sort-up" : a.direction === F.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function h(p) {
      const { key: d } = p, a = u.value.findIndex((m) => m.key === d);
      if (a < 0) {
        const m = new _t(d, F.ASC, p.sortFn);
        u.value.push(m);
      } else {
        const m = u.value[a], o = m.direction;
        o === F.ASC ? m.direction = F.DESC : o === F.DESC && u.value.splice(a, 1);
      }
      t("sort", u.value, se);
    }
    function k(p, d, a, m) {
      t("onMouseOverCell", p, d, a, m);
    }
    let S = D(null);
    return Z(() => {
      S.value = ee();
    }), (p, d) => (y(), $("table", K({ ...p.$attrs }, {
      class: { striped: p.striped, hover: p.hover }
    }), [
      l("thead", null, [
        (y(!0), $(z, null, V(i.value, (a) => (y(), $("th", {
          key: `thead-${a.key}`,
          class: M({ sortable: a.sortable }),
          onClick: (m) => a.sortable && h(a)
        }, [
          l("span", mt, [
            g(p.$slots, `head(${a.key})`, {
              field: a,
              data: j(S),
              value: a.label
            }, () => [
              X(O(a.label), 1)
            ], !0),
            a.sortable ? (y(), $("span", yt, [
              l("span", bt, O(f(a)), 1),
              l("span", kt, [
                l("i", {
                  class: M(w(a))
                }, null, 2)
              ])
            ])) : Y("", !0)
          ])
        ], 10, ht))), 128))
      ]),
      l("tbody", null, [
        (y(!0), $(z, null, V(s.value, (a, m) => (y(), $(z, {
          key: `trow-${(a == null ? void 0 : a.id) ?? m}`
        }, [
          g(p.$slots, "row", {
            item: a,
            index: m,
            colspan: i.value.length
          }, void 0, !0),
          l("tr", null, [
            (y(!0), $(z, null, V(i.value, (o) => (y(), $("td", {
              key: `tcell-${o.key + ((a == null ? void 0 : a.id) ?? m)}`,
              class: M({ [`tcell-${o == null ? void 0 : o.key}`]: !0 }),
              onMouseover: (C) => k(C, a, m, o)
            }, [
              g(p.$slots, `cell(${o == null ? void 0 : o.key})`, {
                data: j(S),
                item: a,
                field: o,
                value: a[o == null ? void 0 : o.key]
              }, () => [
                X(O(a[o == null ? void 0 : o.key]), 1)
              ], !0)
            ], 42, $t))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        g(p.$slots, "footer", { data: j(S) }, void 0, !0)
      ]),
      p.showEmpty && s.value.length === 0 ? (y(), $("tr", Ct, [
        l("td", {
          colspan: i.value.length
        }, [
          g(p.$slots, "empty", {
            items: s.value,
            data: j(S),
            fields: i.value
          }, () => [
            l("span", { innerHTML: p.emptyText }, null, 8, gt)
          ], !0)
        ], 8, wt)
      ])) : Y("", !0)
    ], 16));
  }
});
const Tt = /* @__PURE__ */ I(St, [["__scopeId", "data-v-b1e9b5de"]]);
var ve = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ve || {});
const Mt = { class: "d-inline-block position-relative" }, xt = ["disabled"], ae = "data-prevent-close", Lt = /* @__PURE__ */ E({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: ve.PRIMARY },
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
    const t = e, n = D(), r = D(), { variant: u, centered: _, dropup: b, dropend: s, dropstart: i, menuEnd: f } = P(t), w = D(!1), h = x(() => {
      const v = [];
      return u != null && u.value && v.push(`btn-${u.value}`), t.size && v.push(`btn-${t.size}`), v;
    }), k = x(() => {
      const v = [];
      return _ != null && _.value && v.push("dropdown-center"), b != null && b.value && v.push("dropup"), i != null && i.value && v.push("dropstart"), !(i != null && i.value) && (s != null && s.value) && v.push("dropend"), v.length === 0 ? v.push("dropdown") : v.unshift("btn-group"), v;
    }), S = x(() => {
      const v = [];
      return w.value && v.push("show"), f.value && v.push("dropdown-menu-end"), v;
    });
    function p() {
      w.value = !0;
    }
    function d() {
      w.value = !1;
    }
    function a(v) {
      w.value ? d() : p();
    }
    function m(v) {
      const { target: T } = v;
      (T == null ? void 0 : T.closest(`[${ae}],[${ae}=true]`)) || d();
    }
    function o() {
      w.value && d();
    }
    const C = {
      show: w,
      disabled: t.disabled,
      buttonClasses: h,
      onButtonClicked: a,
      onMenuClicked: m,
      onClickOutside: o,
      open: p,
      close: d
    };
    return (v, T) => {
      const c = Se("click-outside");
      return y(), $("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: M(k.value)
      }, [
        ie((y(), $("div", Mt, [
          g(v.$slots, "header", L(B({ ...C })), () => [
            l("button", {
              class: M(["btn dropdown-toggle", h.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: a,
              disabled: v.disabled
            }, [
              g(v.$slots, "button", L(B({ ...C })), () => [
                X(O(v.text), 1)
              ], !0)
            ], 10, xt)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: n,
            class: M(["dropdown-menu", S.value]),
            onClick: m
          }, [
            g(v.$slots, "default", L(B({ ...C })), void 0, !0)
          ], 2)
        ])), [
          [c, o]
        ])
      ], 2);
    };
  }
});
const Bt = /* @__PURE__ */ I(Lt, [["__scopeId", "data-v-f9658383"]]), Dt = ["data-prevent-close"], At = /* @__PURE__ */ E({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = P(t);
    return (r, u) => (y(), $("li", {
      "data-prevent-close": j(n) ? "" : null
    }, [
      l("span", {
        class: M(["dropdown-item", { active: r.active }]),
        role: "button",
        tabindex: "0"
      }, [
        g(r.$slots, "default")
      ], 2)
    ], 8, Dt));
  }
}), Ht = {}, Ot = { "data-prevent-close": "" }, Et = { class: "dropdown-header" };
function zt(e, t) {
  return y(), $("li", Ot, [
    l("h6", Et, [
      g(e.$slots, "default")
    ])
  ]);
}
const Rt = /* @__PURE__ */ I(Ht, [["render", zt]]), Pt = {}, Vt = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Nt = [
  Vt
];
function It(e, t) {
  return y(), $("li", null, Nt);
}
const Ft = /* @__PURE__ */ I(Pt, [["render", It]]), jt = {
  mounted(e, t, n, r) {
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
  const r = new AbortController();
  function u(_, b) {
    document.addEventListener("click", function(s) {
      const i = s.target;
      _ && (n(i, _) || b());
    }, { signal: r.signal });
  }
  return u(e, t), r;
}, Kt = {
  mounted(e, t, n, r) {
    const u = t.value;
    Gt(e, u);
  }
};
class Q {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
A(Q, "list", /* @__PURE__ */ new Set());
const Ut = ["onClick"], Yt = { class: "drawer-content" }, Wt = { class: "drawer-header" }, Xt = ["innerHTML"], qt = { class: "drawer-body" }, Jt = ["innerHTML"], Qt = { class: "drawer-footer" }, Zt = ["innerHTML"], en = ["innerHTML"], tn = /* @__PURE__ */ E({
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
      backdrop: r,
      keyboard: u,
      focus: _,
      size: b,
      btnSize: s
    } = P(n), i = x(() => q(b.value, "drawer-")), f = x(() => q(s.value, "btn-")), w = D(), h = D(!1), k = ee();
    let S;
    async function p() {
      return h.value === !0 ? void 0 : new Promise((R, be) => {
        h.value = !0, S = R;
      });
    }
    function d(c = !0) {
      h.value = !1, typeof S == "function" && S(c);
    }
    function a() {
      h.value === !0 ? p() : d(!1);
    }
    function m(c) {
      (r == null ? void 0 : r.value) !== "static" && d(!1);
    }
    function o() {
      d(!1);
    }
    function C() {
      d(!1);
    }
    function v() {
      d(!0);
    }
    function T() {
      h.value === !0 ? Q.add(k) : Q.delete(k);
    }
    return t({
      show: p,
      hide: d,
      toggle: a
    }), (c, R) => (y(), G(Te, {
      onBeforeEnter: T,
      onAfterLeave: T
    }, {
      default: W(() => [
        h.value ? (y(), $("div", K({
          key: 0,
          ref_key: "drawerElement",
          ref: w,
          class: "drawer",
          tabindex: "-1"
        }, { ...c.$attrs }, {
          onClick: ue(m, ["self"])
        }), [
          l("div", {
            class: M(["drawer-dialog", i.value])
          }, [
            l("div", Yt, [
              l("div", Wt, [
                g(c.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: c.title
                  }, null, 8, Xt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: o
                })
              ]),
              l("div", qt, [
                g(c.$slots, "default", {}, () => [
                  l("span", { innerHTML: c.body }, null, 8, Jt)
                ], !0)
              ]),
              l("div", Qt, [
                g(c.$slots, "footer", {}, () => [
                  c.okOnly ? Y("", !0) : (y(), $("button", {
                    key: 0,
                    type: "button",
                    class: M(["ms-auto btn btn-secondary", f.value]),
                    onClick: C
                  }, [
                    g(c.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: c.textCancel }, null, 8, Zt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: M(["btn btn-primary", f.value]),
                    onClick: v
                  }, [
                    g(c.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: c.textOk }, null, 8, en)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Ut)) : Y("", !0)
      ]),
      _: 3
    }));
  }
});
const nn = /* @__PURE__ */ I(tn, [["__scopeId", "data-v-2e49e8cb"]]), H = "b", _e = "$toaster", he = "$modalManager";
class me {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = de(Xe).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
A(me, "component");
class ye {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = de(Ve).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
A(ye, "component");
function un() {
  return ce(_e);
}
function cn() {
  return ce(he);
}
function on(e) {
  e.component(`${H}-drawer`, nn), e.component(`${H}-modal`, fe), e.component(`${H}-pagination`, ut), e.component(`${H}-pagination-dropdown`, pt), e.component(`${H}-pagination-select`, vt), e.component(`${H}-dropdown`, Bt), e.component(`${H}-dropdown-item`, At), e.component(`${H}-dropdown-header`, Rt), e.component(`${H}-dropdown-divider`, Ft), e.component(`${H}-table`, Tt), e.component(`${H}-toast`, pe);
}
function sn(e) {
  e.directive("tooltip", jt), e.directive("click-outside", Kt);
}
const dn = {
  install(e) {
    on(e), sn(e);
    const t = ye.getComponent();
    e.provide(_e, t);
    const n = me.getComponent();
    e.provide(he, n);
  }
};
export {
  dn as BootstrapVue,
  Bt as Dropdown,
  Ft as DropdownDivider,
  Rt as DropdownHeader,
  At as DropdownItem,
  fe as Modal,
  Xe as ModalManager,
  pt as PageSizeDropdown,
  vt as PageSizeSelect,
  ut as Pagination,
  Tt as Table,
  J as TableFieldDefinition,
  pe as Toast,
  Ve as Toaster,
  Kt as clickOutside,
  jt as tooltip,
  cn as useModal,
  un as useToaster
};
