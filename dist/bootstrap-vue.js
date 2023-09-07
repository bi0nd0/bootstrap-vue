var be = Object.defineProperty;
var ke = (e, t, o) => t in e ? be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var B = (e, t, o) => (ke(e, typeof t != "symbol" ? t + "" : t, o), o);
import { defineComponent as O, toRefs as E, ref as D, watch as $e, onMounted as Z, openBlock as _, createElementBlock as k, normalizeClass as M, renderSlot as C, createElementVNode as l, toDisplayString as H, createBlock as G, Teleport as ae, Fragment as z, renderList as R, mergeProps as K, computed as L, getCurrentInstance as ee, watchEffect as le, withModifiers as re, unref as b, normalizeProps as F, guardReactiveProps as j, createCommentVNode as Y, createVNode as Ce, resolveComponent as ne, withCtx as W, createTextVNode as X, withDirectives as ie, isRef as we, vModelSelect as ge, resolveDirective as xe, Transition as Te, inject as ue, createApp as ce } from "vue";
import { Toast as Se, Modal as Me, Tooltip as Le } from "bootstrap";
const Be = { class: "toast-header" }, De = ["textContent"], Ae = ["textContent"], He = { class: "toast-body" }, Oe = ["textContent"], ze = /* @__PURE__ */ O({
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
  setup(e, { expose: t, emit: o }) {
    const r = e, { visible: i, animation: f, autohide: h, delay: s } = E(r), u = D(), d = D();
    $e(i, (T) => {
      a();
    }, { immediate: !0 });
    function x() {
      u.value.show();
    }
    function v() {
      u.value.hide();
    }
    function m() {
      u.value.dispose();
    }
    function w() {
      u.value.isShown();
    }
    function p() {
      u.value.getOrCreateInstance();
    }
    function c() {
      u.value.getInstance();
    }
    function a() {
      u.value && (i.value === !0 ? x() : v());
    }
    function y() {
      o("hide", u.value);
    }
    function n() {
      o("hidden", u.value);
    }
    function $() {
      o("show", u.value);
    }
    async function S() {
      o("shown", u.value);
    }
    return t({ show: x, hide: v, dispose: m, isShown: w, getOrCreateInstance: p, getInstance: c }), Z(() => {
      d.value.addEventListener("hide.bs.toast", y), d.value.addEventListener("hidden.bs.toast", n), d.value.addEventListener("show.bs.toast", $), d.value.addEventListener("shown.bs.toast", S), u.value = new Se(d.value, {
        animation: f.value,
        autohide: h.value,
        delay: s.value
      }), a();
    }), (T, g) => (_(), k("div", {
      ref_key: "toastRef",
      ref: d,
      class: M(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(T.$slots, "header", {}, () => [
        l("div", Be, [
          C(T.$slots, "title", {}, () => [
            l("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, De)
          ], !0),
          C(T.$slots, "subtitle", {}, () => [
            l("small", {
              textContent: H(e.subtitle)
            }, null, 8, Ae)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: v
          })
        ])
      ], !0),
      C(T.$slots, "body", {}, () => [
        l("div", He, [
          C(T.$slots, "default", {}, () => [
            l("span", {
              textContent: H(e.body)
            }, null, 8, Oe)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
});
const N = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, i] of t)
    o[r] = i;
  return o;
}, de = /* @__PURE__ */ N(ze, [["__scopeId", "data-v-df34c64d"]]);
function Ee() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (o == "x" ? r : r & 3 | 8).toString(16);
  });
}
const Pe = { id: "toast-wrapper" };
let oe;
const Re = /* @__PURE__ */ O({
  __name: "Toaster",
  setup(e, { expose: t }) {
    const o = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, r = D(/* @__PURE__ */ new Map());
    oe = (f, h = "top right") => {
      const s = Ee(), u = { ...o, ...f, id: s };
      let d = r.value.get(h);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(u), r.value.set(h, d);
    };
    function i(f, h) {
      const s = r.value.get(f);
      s == null || s.delete(h);
    }
    return t({ toast: oe }), (f, h) => (_(), G(ae, { to: "body" }, [
      l("div", Pe, [
        (_(!0), k(z, null, R(r.value, ([s, u]) => (_(), k("div", {
          key: s,
          class: M(["toast-group", `${s}`])
        }, [
          (_(!0), k(z, null, R(u, (d, x) => (_(), G(de, K({
            key: d.id
          }, d, {
            onHidden: (v) => i(s, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const Ve = /* @__PURE__ */ N(Re, [["__scopeId", "data-v-786d1c50"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const q = (e, t = "") => {
  let o = e.toLowerCase();
  return !Object.values(V).includes(o) || o == "" ? "" : `${t}${o}`;
}, Ne = ["onClick"], Ie = { class: "modal-content" }, Fe = { class: "modal-header" }, je = ["innerHTML"], Ge = { class: "modal-body" }, Ke = ["innerHTML"], Ue = { class: "modal-footer" }, Ye = ["innerHTML"], We = ["innerHTML"];
class U {
  static addToStack(t) {
    t != null && this.modalStack.push(t);
  }
  static removeFromStack(t) {
    if (t == null)
      return;
    const o = this.modalStack.indexOf(t);
    o < 0 || this.modalStack.splice(o, 1);
  }
  static getLast() {
    const t = this.modalStack.length;
    if (t !== 0)
      return this.modalStack[t - 1];
  }
}
B(U, "modalStack", new Array());
const fe = /* @__PURE__ */ O({
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
    size: { default: V.STANDARD },
    btnSize: { default: V.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: r,
      keyboard: i,
      focus: f,
      disableOutsideClick: h,
      size: s,
      btnSize: u
    } = E(o), d = L(() => q(s.value, "modal-")), x = L(() => q(u.value, "btn-")), v = D();
    let m;
    ee();
    let w;
    function p() {
      return new Promise((P, ye) => {
        const te = U.getLast();
        te && te.hide(), U.addToStack(m), m == null || m.show(), w = P;
      });
    }
    function c(g = !0) {
      U.removeFromStack(m), m == null || m.hide();
      const P = U.getLast();
      P && P.show(), typeof w == "function" && w(g);
    }
    function a() {
      m == null || m.toggle();
    }
    Z(() => {
      m = new Me(v.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: i.value,
        focus: f.value
      }), le(() => {
        (o == null ? void 0 : o.visible) === !0 ? m == null || m.show() : m == null || m.hide();
      });
    });
    function y(g) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function n() {
      c(!1);
    }
    function $() {
      c(!1);
    }
    function S() {
      c(!0);
    }
    t({
      modal: m,
      show: p,
      hide: c,
      toggle: a,
      onHeaderCloseClicked: n,
      onCancelClicked: $,
      onOkCLicked: S
    });
    const T = { show: p, hide: c, toggle: a, modal: m };
    return (g, P) => (_(), k("div", K({
      ref_key: "modalElement",
      ref: v,
      class: "modal fade",
      tabindex: "-1"
    }, { ...g.$attrs }, {
      onClick: re(y, ["self"])
    }), [
      l("div", {
        class: M(["modal-dialog", b(d)])
      }, [
        l("div", Ie, [
          l("div", Fe, [
            C(g.$slots, "header", F(j({ ...T })), () => [
              l("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, je)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: n
            })
          ]),
          l("div", Ge, [
            C(g.$slots, "default", F(j({ ...T })), () => [
              l("span", { innerHTML: e.body }, null, 8, Ke)
            ])
          ]),
          l("div", Ue, [
            C(g.$slots, "footer", F(j({ ...T })), () => [
              e.okOnly ? Y("", !0) : (_(), k("button", {
                key: 0,
                type: "button",
                class: M(["btn btn-secondary", b(x)]),
                onClick: $
              }, [
                C(g.$slots, "button-cancel", F(j({ ...T })), () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, Ye)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: M(["btn btn-primary", b(x)]),
                onClick: S
              }, [
                C(g.$slots, "button-ok", F(j({ ...T })), () => [
                  l("span", { innerHTML: e.textOk }, null, 8, We)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Ne));
  }
}), Xe = /* @__PURE__ */ O({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const o = D(void 0), r = D({});
    function i(h = {}) {
      var s;
      return h.okOnly = !1, r.value = h, (s = o.value) == null ? void 0 : s.show();
    }
    function f(h = {}) {
      var s;
      return h.okOnly = !0, r.value = h, (s = o.value) == null ? void 0 : s.show();
    }
    return t({ confirm: i, alert: f }), (h, s) => (_(), G(ae, { to: "body" }, [
      Ce(fe, K({
        ref_key: "modalRef",
        ref: o
      }, { ...r.value }), null, 16)
    ]));
  }
}), qe = { "data-first": "" }, Je = ["disabled", "innerHTML"], Qe = { "data-prev": "" }, Ze = ["disabled", "innerHTML"], et = { key: 0 }, tt = ["innerHTML"], nt = ["onClick"], ot = { "data-next": "" }, st = ["disabled", "innerHTML"], at = { "data-last": "" }, lt = ["disabled", "innerHTML"], rt = /* @__PURE__ */ O({
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
    size: { default: V.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function r(n, $ = 0) {
      return [...Array(n).keys()].map((S) => S + $);
    }
    const { modelValue: i, maxVisibleButtons: f, hideEllipsis: h } = E(o), s = Math.floor(f.value / 2), u = L(() => {
      let n = f.value, $ = i.value <= s ? 1 : i.value - s;
      return i.value >= v.value - s && ($ = v.value - n + 1), $ < 1 && ($ = 1), v.value < n && (n = v.value), r(n, $);
    }), d = L(() => i.value <= 1), x = L(() => i.value >= v.value), v = L(() => {
      const { perPage: n, totalItems: $ } = o;
      return Math.ceil($ / n);
    });
    le(() => {
      v.value > 0 && i.value > v.value && t("update:modelValue", v.value);
    });
    function m(n) {
      const $ = f.value - 1;
      return !(h.value === !0 || n === 0 && i.value - s - 1 <= 0 || n === $ && i.value + s >= v.value || n > 0 && n < $);
    }
    function w(n) {
      n < 1 && (n = 1), n > v.value && (n = v.value), t("update:modelValue", n);
    }
    function p() {
      t("update:modelValue", 1);
    }
    function c() {
      t("update:modelValue", v.value);
    }
    function a() {
      let n = i.value - 1;
      n < 1 && (n = 1), t("update:modelValue", n);
    }
    function y() {
      let n = i.value + 1;
      n > v.value && (n = v.value), t("update:modelValue", n);
    }
    return (n, $) => (_(), k("ul", {
      class: M(["pagination", e.size])
    }, [
      l("li", qe, [
        l("button", {
          class: "",
          disabled: b(d),
          innerHTML: e.firstText,
          onClick: p
        }, null, 8, Je)
      ]),
      l("li", Qe, [
        l("button", {
          class: "",
          disabled: b(d),
          innerHTML: e.prevText,
          onClick: a
        }, null, 8, Ze)
      ]),
      (_(!0), k(z, null, R(b(u), (S, T) => (_(), k(z, null, [
        m(T) ? (_(), k("li", et, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, tt)
        ])) : (_(), k("li", {
          key: 1,
          "data-prev": "",
          class: M({ active: e.modelValue === S })
        }, [
          l("button", {
            class: "",
            onClick: (g) => w(S)
          }, H(S), 9, nt)
        ], 2))
      ], 64))), 256)),
      l("li", ot, [
        l("button", {
          class: "",
          disabled: b(x),
          innerHTML: e.nextText,
          onClick: y
        }, null, 8, st)
      ]),
      l("li", at, [
        l("button", {
          class: "",
          disabled: b(x),
          innerHTML: e.lastText,
          onClick: c
        }, null, 8, lt)
      ])
    ], 2));
  }
});
const it = /* @__PURE__ */ N(rt, [["__scopeId", "data-v-2bfd7085"]]), ut = { class: "d-inline" }, ct = /* @__PURE__ */ l("span", null, "Per page: ", -1), dt = { class: "fw-bold" }, ft = /* @__PURE__ */ O({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, { options: r } = E(o), i = L({
      get: () => o.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    return (f, h) => {
      const s = ne("b-dropdown-item"), u = ne("b-dropdown");
      return _(), G(u, K({
        variant: "outline-primary",
        size: "sm"
      }, { ...f.$attrs }), {
        button: W(() => [
          l("div", ut, [
            C(f.$slots, "default", { selected: b(i) }, () => [
              ct,
              l("span", dt, H(b(i)), 1)
            ])
          ])
        ]),
        default: W(() => [
          (_(!0), k(z, null, R(b(r), (d, x) => (_(), G(s, {
            key: d,
            onClick: (v) => i.value = d,
            active: d === e.modelValue
          }, {
            default: W(() => [
              X(H(d), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), vt = ["value"], pt = /* @__PURE__ */ O({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, { options: r } = E(o), i = L({
      get: () => o.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    return (f, h) => ie((_(), k("select", {
      "onUpdate:modelValue": h[0] || (h[0] = (s) => we(i) ? i.value = s : null)
    }, [
      (_(!0), k(z, null, R(b(r), (s, u) => (_(), k("option", {
        key: s,
        value: s
      }, H(s), 9, vt))), 128))
    ], 512)), [
      [ge, b(i)]
    ]);
  }
});
var I = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(I || {});
class _t {
  constructor(t, o = "ASC", r) {
    B(this, "key");
    B(this, "direction");
    B(this, "sortFn");
    this.key = t, this.direction = o, this.sortFn = r;
  }
}
const se = (e, t) => {
  const o = (s, u) => {
    let d = typeof s, x = typeof u;
    return d == "number" && d == x;
  }, r = (s, u) => s - u, i = (s, u) => (s = s ?? "", u = u ?? "", s.localeCompare(u)), f = (s, u) => o(s, u) ? r : i, h = [...t];
  return h.sort((s, u) => {
    let d = 0;
    for (let x of e) {
      let { key: v, direction: m, sortFn: w } = x, p = m === "ASC" ? 1 : -1, c = s[v], a = u[v];
      if (w = typeof w == "function" ? w : f(c, a), d = w(c, a, s, u, t, x, p) * p, d !== 0)
        return d;
    }
    return d;
  }), h;
}, ht = ["onClick"], mt = { class: "th-wrapper" }, yt = {
  key: 0,
  "data-sort-indicator": ""
}, bt = { class: "sort-index" }, kt = { class: "sort-direction" }, $t = ["onMouseover"], Ct = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, wt = ["colspan"], gt = ["innerHTML"];
class J {
  constructor(t = "", o = "", r = !1, i) {
    B(this, "key");
    // age
    B(this, "label");
    // Person age
    B(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    B(this, "sortFn");
    this.key = t, this.label = o, this.sortable = r, this.sortFn = i;
  }
}
const xt = /* @__PURE__ */ O({
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
    const o = e, r = (p) => {
      let c = [];
      for (const a of p)
        c = c.concat(Object.keys(a));
      return c = c.filter((a, y) => c.indexOf(a) == y), c;
    }, i = D([]), { fields: f, items: h } = E(o), s = L(() => {
      if (o.externalSort || i.value.length == 0)
        return o.items;
      const p = [...o.items];
      return se(i.value, p);
    }), u = L(() => {
      let p = f.value, c = [];
      return p.length === 0 && (p = r([...h.value])), p.reduce((a, y, n) => {
        if (typeof y == "string")
          a.push(new J(y, y));
        else if (y instanceof J)
          a.push(y);
        else if (typeof y == "object") {
          const { key: $, label: S, sortable: T, sortFn: g } = y;
          a.push(new J($, S, T, g));
        }
        return a;
      }, c);
    });
    function d(p) {
      const c = i.value.findIndex((a) => a.key === p.key);
      return c < 0 ? "" : c + 1;
    }
    function x(p) {
      const c = i.value.findIndex((y) => y.key === p.key);
      if (c < 0)
        return "fas fa-sort";
      const a = i.value[c];
      return a.direction === I.ASC ? "fas fa-sort-up" : a.direction === I.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function v(p) {
      const { key: c } = p, a = i.value.findIndex((y) => y.key === c);
      if (a < 0) {
        const y = new _t(c, I.ASC, p.sortFn);
        i.value.push(y);
      } else {
        const y = i.value[a], n = y.direction;
        n === I.ASC ? y.direction = I.DESC : n === I.DESC && i.value.splice(a, 1);
      }
      t("sort", i.value, se);
    }
    function m(p, c, a, y) {
      t("onMouseOverCell", p, c, a, y);
    }
    let w = D(null);
    return Z(() => {
      w.value = ee();
    }), (p, c) => (_(), k("table", K({ ...p.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (_(!0), k(z, null, R(b(u), (a) => (_(), k("th", {
          key: `thead-${a.key}`,
          class: M({ sortable: a.sortable }),
          onClick: (y) => a.sortable && v(a)
        }, [
          l("span", mt, [
            C(p.$slots, `head(${a.key})`, {
              field: a,
              data: b(w),
              value: a.label
            }, () => [
              X(H(a.label), 1)
            ], !0),
            a.sortable ? (_(), k("span", yt, [
              l("span", bt, H(d(a)), 1),
              l("span", kt, [
                l("i", {
                  class: M(x(a))
                }, null, 2)
              ])
            ])) : Y("", !0)
          ])
        ], 10, ht))), 128))
      ]),
      l("tbody", null, [
        (_(!0), k(z, null, R(b(s), (a, y) => (_(), k(z, {
          key: `trow-${(a == null ? void 0 : a.id) ?? y}`
        }, [
          C(p.$slots, "row", {
            item: a,
            index: y,
            colspan: b(u).length
          }, void 0, !0),
          l("tr", null, [
            (_(!0), k(z, null, R(b(u), (n) => (_(), k("td", {
              key: `tcell-${n.key + ((a == null ? void 0 : a.id) ?? y)}`,
              class: M({ [`tcell-${n == null ? void 0 : n.key}`]: !0 }),
              onMouseover: ($) => m($, a, y, n)
            }, [
              C(p.$slots, `cell(${n == null ? void 0 : n.key})`, {
                data: b(w),
                item: a,
                field: n,
                value: a[n == null ? void 0 : n.key]
              }, () => [
                X(H(a[n == null ? void 0 : n.key]), 1)
              ], !0)
            ], 42, $t))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        C(p.$slots, "footer", { data: b(w) }, void 0, !0)
      ]),
      e.showEmpty && b(s).length === 0 ? (_(), k("tr", Ct, [
        l("td", {
          colspan: b(u).length
        }, [
          C(p.$slots, "empty", {
            items: b(s),
            data: b(w),
            fields: b(u)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, gt)
          ], !0)
        ], 8, wt)
      ])) : Y("", !0)
    ], 16));
  }
});
const Tt = /* @__PURE__ */ N(xt, [["__scopeId", "data-v-7828e531"]]);
var ve = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ve || {});
const St = { class: "d-inline-block" }, Mt = ["disabled"], Lt = /* @__PURE__ */ O({
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
    size: { default: V.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = D(), { variant: r, centered: i, dropup: f, dropend: h, dropstart: s } = E(t), u = D(!1), d = L(() => {
      const n = [];
      return r != null && r.value && n.push(`btn-${r.value}`), t.size && n.push(`btn-${t.size}`), n;
    }), x = L(() => {
      const n = [];
      return i != null && i.value && n.push("dropdown-center"), f != null && f.value && n.push("dropup"), s != null && s.value && n.push("dropstart"), !(s != null && s.value) && (h != null && h.value) && n.push("dropend"), n.length === 0 ? n.push("dropdown") : n.unshift("btn-group"), n;
    });
    function v() {
      u.value = !0;
    }
    function m() {
      u.value = !1;
    }
    const w = "data-prevent-close";
    function p(n) {
      u.value ? m() : v();
    }
    function c(n) {
      const { target: $ } = n;
      ($ == null ? void 0 : $.closest(`[${w}],[${w}=true]`)) || m();
    }
    function a() {
      u.value && m();
    }
    const y = {
      show: u,
      disabled: t.disabled,
      buttonClasses: d,
      onButtonClicked: p,
      onMenuClicked: c,
      onClickOutside: a,
      open: v,
      close: m
    };
    return (n, $) => {
      const S = xe("click-outside");
      return _(), k("div", {
        ref_key: "dropDownRef",
        ref: o,
        class: M(b(x))
      }, [
        ie((_(), k("div", St, [
          C(n.$slots, "header", F(j({ ...y })), () => [
            l("button", {
              class: M(["btn dropdown-toggle", b(d)]),
              type: "button",
              "aria-expanded": "false",
              onClick: p,
              disabled: e.disabled
            }, [
              C(n.$slots, "button", {}, () => [
                X(H(e.text), 1)
              ], !0)
            ], 10, Mt)
          ], !0),
          l("ul", {
            class: M(["dropdown-menu", { show: u.value }]),
            onClick: c
          }, [
            C(n.$slots, "default", {}, void 0, !0)
          ], 2)
        ])), [
          [S, a]
        ])
      ], 2);
    };
  }
});
const Bt = /* @__PURE__ */ N(Lt, [["__scopeId", "data-v-5d4985d5"]]), Dt = ["data-prevent-close"], At = /* @__PURE__ */ O({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: o } = E(t);
    return (r, i) => (_(), k("li", {
      "data-prevent-close": b(o) ? "" : null
    }, [
      l("span", {
        class: M(["dropdown-item", { active: e.active }]),
        role: "button",
        tabindex: "0"
      }, [
        C(r.$slots, "default")
      ], 2)
    ], 8, Dt));
  }
}), Ht = {}, Ot = { "data-prevent-close": "" }, zt = { class: "dropdown-header" };
function Et(e, t) {
  return _(), k("li", Ot, [
    l("h6", zt, [
      C(e.$slots, "default")
    ])
  ]);
}
const Pt = /* @__PURE__ */ N(Ht, [["render", Et]]), Rt = {}, Vt = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Nt = [
  Vt
];
function It(e, t) {
  return _(), k("li", null, Nt);
}
const Ft = /* @__PURE__ */ N(Rt, [["render", It]]), jt = {
  mounted(e, t, o, r) {
    new Le(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Gt = (e, t) => {
  function o(f, h) {
    for (; f !== null; ) {
      if (f === h)
        return !0;
      f = f.parentNode;
    }
    return !1;
  }
  const r = new AbortController();
  function i(f, h) {
    document.addEventListener("click", function(s) {
      const u = s.target;
      f && (o(u, f) || h());
    }, { signal: r.signal });
  }
  return i(e, t), r;
}, Kt = {
  mounted(e, t, o, r) {
    const i = t.value;
    Gt(e, i);
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
B(Q, "list", /* @__PURE__ */ new Set());
const Ut = ["onClick"], Yt = { class: "drawer-content" }, Wt = { class: "drawer-header" }, Xt = ["innerHTML"], qt = { class: "drawer-body" }, Jt = ["innerHTML"], Qt = { class: "drawer-footer" }, Zt = ["innerHTML"], en = ["innerHTML"], tn = /* @__PURE__ */ O({
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
    size: { default: V.STANDARD },
    btnSize: { default: V.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: r,
      keyboard: i,
      focus: f,
      size: h,
      btnSize: s
    } = E(o), u = L(() => q(h.value, "drawer-")), d = L(() => q(s.value, "btn-")), x = D(), v = D(!1), m = ee();
    let w;
    async function p() {
      return v.value === !0 ? void 0 : new Promise((P, ye) => {
        v.value = !0, w = P;
      });
    }
    function c(g = !0) {
      v.value = !1, typeof w == "function" && w(g);
    }
    function a() {
      v.value === !0 ? p() : c(!1);
    }
    function y(g) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function n() {
      c(!1);
    }
    function $() {
      c(!1);
    }
    function S() {
      c(!0);
    }
    function T() {
      v.value === !0 ? Q.add(m) : Q.delete(m);
    }
    return t({
      show: p,
      hide: c,
      toggle: a
    }), (g, P) => (_(), G(Te, {
      onBeforeEnter: T,
      onAfterLeave: T
    }, {
      default: W(() => [
        v.value ? (_(), k("div", K({
          key: 0,
          ref_key: "drawerElement",
          ref: x,
          class: "drawer",
          tabindex: "-1"
        }, { ...g.$attrs }, {
          onClick: re(y, ["self"])
        }), [
          l("div", {
            class: M(["drawer-dialog", b(u)])
          }, [
            l("div", Yt, [
              l("div", Wt, [
                C(g.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Xt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: n
                })
              ]),
              l("div", qt, [
                C(g.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, Jt)
                ], !0)
              ]),
              l("div", Qt, [
                C(g.$slots, "footer", {}, () => [
                  e.okOnly ? Y("", !0) : (_(), k("button", {
                    key: 0,
                    type: "button",
                    class: M(["ms-auto btn btn-secondary", b(d)]),
                    onClick: $
                  }, [
                    C(g.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, Zt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: M(["btn btn-primary", b(d)]),
                    onClick: S
                  }, [
                    C(g.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, en)
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
const nn = /* @__PURE__ */ N(tn, [["__scopeId", "data-v-2e49e8cb"]]), A = "b", pe = "$toaster", _e = "$modalManager";
class he {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = ce(Xe).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
B(he, "component");
class me {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = ce(Ve).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
B(me, "component");
function un() {
  return ue(pe);
}
function cn() {
  return ue(_e);
}
function on(e) {
  e.component(`${A}-drawer`, nn), e.component(`${A}-modal`, fe), e.component(`${A}-pagination`, it), e.component(`${A}-pagination-dropdown`, ft), e.component(`${A}-pagination-select`, pt), e.component(`${A}-dropdown`, Bt), e.component(`${A}-dropdown-item`, At), e.component(`${A}-dropdown-header`, Pt), e.component(`${A}-dropdown-divider`, Ft), e.component(`${A}-table`, Tt), e.component(`${A}-toast`, de);
}
function sn(e) {
  e.directive("tooltip", jt), e.directive("click-outside", Kt);
}
const dn = {
  install(e) {
    on(e), sn(e);
    const t = me.getComponent();
    e.provide(pe, t);
    const o = he.getComponent();
    e.provide(_e, o);
  }
};
export {
  dn as BootstrapVue,
  Bt as Dropdown,
  Ft as DropdownDivider,
  Pt as DropdownHeader,
  At as DropdownItem,
  fe as Modal,
  Xe as ModalManager,
  ft as PageSizeDropdown,
  pt as PageSizeSelect,
  it as Pagination,
  Tt as Table,
  J as TableFieldDefinition,
  de as Toast,
  Ve as Toaster,
  Kt as clickOutside,
  jt as tooltip,
  cn as useModal,
  un as useToaster
};
