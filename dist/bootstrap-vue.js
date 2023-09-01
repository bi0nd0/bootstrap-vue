var ye = Object.defineProperty;
var be = (e, t, o) => t in e ? ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var B = (e, t, o) => (be(e, typeof t != "symbol" ? t + "" : t, o), o);
import { defineComponent as O, toRefs as E, ref as D, watch as ke, onMounted as Z, openBlock as _, createElementBlock as b, normalizeClass as M, renderSlot as C, createElementVNode as l, toDisplayString as H, createBlock as G, Teleport as ae, Fragment as z, renderList as R, mergeProps as K, computed as L, getCurrentInstance as ee, withModifiers as le, unref as y, normalizeProps as I, guardReactiveProps as j, createCommentVNode as Y, createVNode as $e, watchEffect as Ce, resolveComponent as ne, withCtx as W, createTextVNode as X, withDirectives as re, isRef as we, vModelSelect as ge, resolveDirective as xe, Transition as Se, inject as ie, createApp as ue } from "vue";
import { Toast as Te, Modal as Me, Tooltip as Le } from "bootstrap";
const Be = { class: "toast-header" }, De = ["textContent"], Ae = ["textContent"], He = { class: "toast-body" }, Oe = ["textContent"], ce = /* @__PURE__ */ O({
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
    ke(i, (S) => {
      a();
    }, { immediate: !0 });
    function x() {
      u.value.show();
    }
    function v() {
      u.value.hide();
    }
    function k() {
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
    function m() {
      o("hide", u.value);
    }
    function n() {
      o("hidden", u.value);
    }
    function $() {
      o("show", u.value);
    }
    async function T() {
      o("shown", u.value);
    }
    return t({ show: x, hide: v, dispose: k, isShown: w, getOrCreateInstance: p, getInstance: c }), Z(() => {
      d.value.addEventListener("hide.bs.toast", m), d.value.addEventListener("hidden.bs.toast", n), d.value.addEventListener("show.bs.toast", $), d.value.addEventListener("shown.bs.toast", T), u.value = new Te(d.value, {
        animation: f.value,
        autohide: h.value,
        delay: s.value
      }), a();
    }), (S, g) => (_(), b("div", {
      ref_key: "toastRef",
      ref: d,
      class: M(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(S.$slots, "header", {}, () => [
        l("div", Be, [
          C(S.$slots, "title", {}, () => [
            l("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, De)
          ]),
          C(S.$slots, "subtitle", {}, () => [
            l("small", {
              textContent: H(e.subtitle)
            }, null, 8, Ae)
          ]),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: v
          })
        ])
      ]),
      C(S.$slots, "body", {}, () => [
        l("div", He, [
          C(S.$slots, "default", {}, () => [
            l("span", {
              textContent: H(e.body)
            }, null, 8, Oe)
          ])
        ])
      ])
    ], 2));
  }
});
function ze() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (o == "x" ? r : r & 3 | 8).toString(16);
  });
}
const Ee = { id: "toast-wrapper" };
let oe;
const Pe = /* @__PURE__ */ O({
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
      const s = ze(), u = { ...o, ...f, id: s };
      let d = r.value.get(h);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(u), r.value.set(h, d);
    };
    function i(f, h) {
      const s = r.value.get(f);
      s == null || s.delete(h);
    }
    return t({ toast: oe }), (f, h) => (_(), G(ae, { to: "body" }, [
      l("div", Ee, [
        (_(!0), b(z, null, R(r.value, ([s, u]) => (_(), b("div", {
          key: s,
          class: M(["toast-group", `${s}`])
        }, [
          (_(!0), b(z, null, R(u, (d, x) => (_(), G(ce, K({
            key: d.id
          }, d, {
            onHidden: (v) => i(s, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const F = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, i] of t)
    o[r] = i;
  return o;
}, Re = /* @__PURE__ */ F(Pe, [["__scopeId", "data-v-0580e23e"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const q = (e, t = "") => {
  let o = e.toLowerCase();
  return !Object.values(V).includes(o) || o == "" ? "" : `${t}${o}`;
}, Ve = ["onClick"], Ne = { class: "modal-content" }, Fe = { class: "modal-header" }, Ie = ["innerHTML"], je = { class: "modal-body" }, Ge = ["innerHTML"], Ke = { class: "modal-footer" }, Ue = ["innerHTML"], Ye = ["innerHTML"];
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
const de = /* @__PURE__ */ O({
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
    btnSize: { default: V.SMALL }
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
    let k;
    ee();
    let w;
    function p() {
      return new Promise((P, me) => {
        const te = U.getLast();
        te && te.hide(), U.addToStack(k), k == null || k.show(), w = P;
      });
    }
    function c(g = !0) {
      U.removeFromStack(k), k == null || k.hide();
      const P = U.getLast();
      P && P.show(), typeof w == "function" && w(g);
    }
    function a() {
      k == null || k.toggle();
    }
    Z(() => {
      k = new Me(v.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: i.value,
        focus: f.value
      });
    });
    function m(g) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function n() {
      c(!1);
    }
    function $() {
      c(!1);
    }
    function T() {
      c(!0);
    }
    t({
      modal: k,
      show: p,
      hide: c,
      toggle: a,
      onHeaderCloseClicked: n,
      onCancelClicked: $,
      onOkCLicked: T
    });
    const S = { show: p, hide: c, toggle: a, modal: k };
    return (g, P) => (_(), b("div", K({
      ref_key: "modalElement",
      ref: v,
      class: "modal fade",
      tabindex: "-1"
    }, { ...g.$attrs }, {
      onClick: le(m, ["self"])
    }), [
      l("div", {
        class: M(["modal-dialog", y(d)])
      }, [
        l("div", Ne, [
          l("div", Fe, [
            C(g.$slots, "header", I(j({ ...S })), () => [
              l("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Ie)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: n
            })
          ]),
          l("div", je, [
            C(g.$slots, "default", I(j({ ...S })), () => [
              l("span", { innerHTML: e.body }, null, 8, Ge)
            ])
          ]),
          l("div", Ke, [
            C(g.$slots, "footer", I(j({ ...S })), () => [
              e.okOnly ? Y("", !0) : (_(), b("button", {
                key: 0,
                type: "button",
                class: M(["btn btn-secondary", y(x)]),
                onClick: $
              }, [
                C(g.$slots, "button-cancel", I(j({ ...S })), () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, Ue)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: M(["btn btn-primary", y(x)]),
                onClick: T
              }, [
                C(g.$slots, "button-ok", I(j({ ...S })), () => [
                  l("span", { innerHTML: e.textOk }, null, 8, Ye)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Ve));
  }
}), We = /* @__PURE__ */ O({
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
      $e(de, K({
        ref_key: "modalRef",
        ref: o
      }, { ...r.value }), null, 16)
    ]));
  }
}), Xe = { "data-first": "" }, qe = ["disabled", "innerHTML"], Je = { "data-prev": "" }, Qe = ["disabled", "innerHTML"], Ze = { key: 0 }, et = ["innerHTML"], tt = ["onClick"], nt = { "data-next": "" }, ot = ["disabled", "innerHTML"], st = { "data-last": "" }, at = ["disabled", "innerHTML"], lt = /* @__PURE__ */ O({
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
      return [...Array(n).keys()].map((T) => T + $);
    }
    const { modelValue: i, maxVisibleButtons: f, hideEllipsis: h } = E(o), s = Math.floor(f.value / 2), u = L(() => {
      let n = f.value, $ = i.value <= s ? 1 : i.value - s;
      return i.value >= v.value - s && ($ = v.value - n + 1), $ < 1 && ($ = 1), v.value < n && (n = v.value), r(n, $);
    }), d = L(() => i.value <= 1), x = L(() => i.value >= v.value), v = L(() => {
      const { perPage: n, totalItems: $ } = o;
      return Math.ceil($ / n);
    });
    Ce(() => {
      v.value > 0 && i.value > v.value && t("update:modelValue", v.value);
    });
    function k(n) {
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
    function m() {
      let n = i.value + 1;
      n > v.value && (n = v.value), t("update:modelValue", n);
    }
    return (n, $) => (_(), b("ul", {
      class: M(["pagination", e.size])
    }, [
      l("li", Xe, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.firstText,
          onClick: p
        }, null, 8, qe)
      ]),
      l("li", Je, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.prevText,
          onClick: a
        }, null, 8, Qe)
      ]),
      (_(!0), b(z, null, R(y(u), (T, S) => (_(), b(z, null, [
        k(S) ? (_(), b("li", Ze, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, et)
        ])) : (_(), b("li", {
          key: 1,
          "data-prev": "",
          class: M({ active: e.modelValue === T })
        }, [
          l("button", {
            class: "",
            onClick: (g) => w(T)
          }, H(T), 9, tt)
        ], 2))
      ], 64))), 256)),
      l("li", nt, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.nextText,
          onClick: m
        }, null, 8, ot)
      ]),
      l("li", st, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.lastText,
          onClick: c
        }, null, 8, at)
      ])
    ], 2));
  }
});
const rt = /* @__PURE__ */ F(lt, [["__scopeId", "data-v-2bfd7085"]]), it = { class: "d-inline" }, ut = /* @__PURE__ */ l("span", null, "Per page: ", -1), ct = { class: "fw-bold" }, dt = /* @__PURE__ */ O({
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
          l("div", it, [
            C(f.$slots, "default", { selected: y(i) }, () => [
              ut,
              l("span", ct, H(y(i)), 1)
            ])
          ])
        ]),
        default: W(() => [
          (_(!0), b(z, null, R(y(r), (d, x) => (_(), G(s, {
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
}), ft = ["value"], vt = /* @__PURE__ */ O({
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
    return (f, h) => re((_(), b("select", {
      "onUpdate:modelValue": h[0] || (h[0] = (s) => we(i) ? i.value = s : null)
    }, [
      (_(!0), b(z, null, R(y(r), (s, u) => (_(), b("option", {
        key: s,
        value: s
      }, H(s), 9, ft))), 128))
    ], 512)), [
      [ge, y(i)]
    ]);
  }
});
var N = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(N || {});
class pt {
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
      let { key: v, direction: k, sortFn: w } = x, p = k === "ASC" ? 1 : -1, c = s[v], a = u[v];
      if (w = typeof w == "function" ? w : f(c, a), d = w(c, a, s, u, t, x, p) * p, d !== 0)
        return d;
    }
    return d;
  }), h;
}, _t = ["onClick"], ht = { class: "th-wrapper" }, mt = {
  key: 0,
  "data-sort-indicator": ""
}, yt = { class: "sort-index" }, bt = { class: "sort-direction" }, kt = ["onMouseover"], $t = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Ct = ["colspan"], wt = ["innerHTML"];
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
const gt = /* @__PURE__ */ O({
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
      return c = c.filter((a, m) => c.indexOf(a) == m), c;
    }, i = D([]), { fields: f, items: h } = E(o), s = L(() => {
      if (o.externalSort || i.value.length == 0)
        return o.items;
      const p = [...o.items];
      return se(i.value, p);
    }), u = L(() => {
      let p = f.value, c = [];
      return p.length === 0 && (p = r([...h.value])), p.reduce((a, m, n) => {
        if (typeof m == "string")
          a.push(new J(m, m));
        else if (m instanceof J)
          a.push(m);
        else if (typeof m == "object") {
          const { key: $, label: T, sortable: S, sortFn: g } = m;
          a.push(new J($, T, S, g));
        }
        return a;
      }, c);
    });
    function d(p) {
      const c = i.value.findIndex((a) => a.key === p.key);
      return c < 0 ? "" : c + 1;
    }
    function x(p) {
      const c = i.value.findIndex((m) => m.key === p.key);
      if (c < 0)
        return "fas fa-sort";
      const a = i.value[c];
      return a.direction === N.ASC ? "fas fa-sort-up" : a.direction === N.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function v(p) {
      const { key: c } = p, a = i.value.findIndex((m) => m.key === c);
      if (a < 0) {
        const m = new pt(c, N.ASC, p.sortFn);
        i.value.push(m);
      } else {
        const m = i.value[a], n = m.direction;
        n === N.ASC ? m.direction = N.DESC : n === N.DESC && i.value.splice(a, 1);
      }
      t("sort", i.value, se);
    }
    function k(p, c, a, m) {
      t("onMouseOverCell", p, c, a, m);
    }
    let w = D(null);
    return Z(() => {
      w.value = ee();
    }), (p, c) => (_(), b("table", K({ ...p.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (_(!0), b(z, null, R(y(u), (a) => (_(), b("th", {
          key: `thead-${a.key}`,
          class: M({ sortable: a.sortable }),
          onClick: (m) => a.sortable && v(a)
        }, [
          l("span", ht, [
            C(p.$slots, `head(${a.key})`, {
              field: a,
              data: y(w),
              value: a.label
            }, () => [
              X(H(a.label), 1)
            ], !0),
            a.sortable ? (_(), b("span", mt, [
              l("span", yt, H(d(a)), 1),
              l("span", bt, [
                l("i", {
                  class: M(x(a))
                }, null, 2)
              ])
            ])) : Y("", !0)
          ])
        ], 10, _t))), 128))
      ]),
      l("tbody", null, [
        (_(!0), b(z, null, R(y(s), (a, m) => (_(), b(z, {
          key: `trow-${(a == null ? void 0 : a.id) ?? m}`
        }, [
          C(p.$slots, "row", {
            item: a,
            index: m,
            colspan: y(u).length
          }, void 0, !0),
          l("tr", null, [
            (_(!0), b(z, null, R(y(u), (n) => (_(), b("td", {
              key: `tcell-${n.key + ((a == null ? void 0 : a.id) ?? m)}`,
              class: M({ [`tcell-${n == null ? void 0 : n.key}`]: !0 }),
              onMouseover: ($) => k($, a, m, n)
            }, [
              C(p.$slots, `cell(${n == null ? void 0 : n.key})`, {
                data: y(w),
                item: a,
                field: n,
                value: a[n == null ? void 0 : n.key]
              }, () => [
                X(H(a[n == null ? void 0 : n.key]), 1)
              ], !0)
            ], 42, kt))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        C(p.$slots, "footer", { data: y(w) }, void 0, !0)
      ]),
      e.showEmpty && y(s).length === 0 ? (_(), b("tr", $t, [
        l("td", {
          colspan: y(u).length
        }, [
          C(p.$slots, "empty", {
            items: y(s),
            data: y(w),
            fields: y(u)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, wt)
          ], !0)
        ], 8, Ct)
      ])) : Y("", !0)
    ], 16));
  }
});
const xt = /* @__PURE__ */ F(gt, [["__scopeId", "data-v-7828e531"]]);
var fe = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(fe || {});
const St = { class: "d-inline-block" }, Tt = ["disabled"], Mt = /* @__PURE__ */ O({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: fe.PRIMARY },
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
    function k() {
      u.value = !1;
    }
    const w = "data-prevent-close";
    function p(n) {
      u.value ? k() : v();
    }
    function c(n) {
      const { target: $ } = n;
      ($ == null ? void 0 : $.closest(`[${w}],[${w}=true]`)) || k();
    }
    function a() {
      u.value && k();
    }
    const m = {
      show: u,
      disabled: t.disabled,
      buttonClasses: d,
      onButtonClicked: p,
      onMenuClicked: c,
      onClickOutside: a,
      open: v,
      close: k
    };
    return (n, $) => {
      const T = xe("click-outside");
      return _(), b("div", {
        ref_key: "dropDownRef",
        ref: o,
        class: M(y(x))
      }, [
        re((_(), b("div", St, [
          C(n.$slots, "header", I(j({ ...m })), () => [
            l("button", {
              class: M(["btn dropdown-toggle", y(d)]),
              type: "button",
              "aria-expanded": "false",
              onClick: p,
              disabled: e.disabled
            }, [
              C(n.$slots, "button", {}, () => [
                X(H(e.text), 1)
              ], !0)
            ], 10, Tt)
          ], !0),
          l("ul", {
            class: M(["dropdown-menu", { show: u.value }]),
            onClick: c
          }, [
            C(n.$slots, "default", {}, void 0, !0)
          ], 2)
        ])), [
          [T, a]
        ])
      ], 2);
    };
  }
});
const Lt = /* @__PURE__ */ F(Mt, [["__scopeId", "data-v-5d4985d5"]]), Bt = ["data-prevent-close"], Dt = /* @__PURE__ */ O({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: o } = E(t);
    return (r, i) => (_(), b("li", {
      "data-prevent-close": y(o) ? "" : null
    }, [
      l("span", {
        class: M(["dropdown-item", { active: e.active }]),
        role: "button",
        tabindex: "0"
      }, [
        C(r.$slots, "default")
      ], 2)
    ], 8, Bt));
  }
}), At = {}, Ht = { "data-prevent-close": "" }, Ot = { class: "dropdown-header" };
function zt(e, t) {
  return _(), b("li", Ht, [
    l("h6", Ot, [
      C(e.$slots, "default")
    ])
  ]);
}
const Et = /* @__PURE__ */ F(At, [["render", zt]]), Pt = {}, Rt = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Vt = [
  Rt
];
function Nt(e, t) {
  return _(), b("li", null, Vt);
}
const Ft = /* @__PURE__ */ F(Pt, [["render", Nt]]), It = {
  mounted(e, t, o, r) {
    new Le(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, jt = (e, t) => {
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
}, Gt = {
  mounted(e, t, o, r) {
    const i = t.value;
    jt(e, i);
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
const Kt = ["onClick"], Ut = { class: "drawer-content" }, Yt = { class: "drawer-header" }, Wt = ["innerHTML"], Xt = { class: "drawer-body" }, qt = ["innerHTML"], Jt = { class: "drawer-footer" }, Qt = ["innerHTML"], Zt = ["innerHTML"], en = /* @__PURE__ */ O({
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
    } = E(o), u = L(() => q(h.value, "drawer-")), d = L(() => q(s.value, "btn-")), x = D(), v = D(!1), k = ee();
    let w;
    async function p() {
      return v.value === !0 ? void 0 : new Promise((P, me) => {
        v.value = !0, w = P;
      });
    }
    function c(g = !0) {
      v.value = !1, typeof w == "function" && w(g);
    }
    function a() {
      v.value === !0 ? p() : c(!1);
    }
    function m(g) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function n() {
      c(!1);
    }
    function $() {
      c(!1);
    }
    function T() {
      c(!0);
    }
    function S() {
      v.value === !0 ? Q.add(k) : Q.delete(k);
    }
    return t({
      show: p,
      hide: c,
      toggle: a
    }), (g, P) => (_(), G(Se, {
      onBeforeEnter: S,
      onAfterLeave: S
    }, {
      default: W(() => [
        v.value ? (_(), b("div", K({
          key: 0,
          ref_key: "drawerElement",
          ref: x,
          class: "drawer",
          tabindex: "-1"
        }, { ...g.$attrs }, {
          onClick: le(m, ["self"])
        }), [
          l("div", {
            class: M(["drawer-dialog", y(u)])
          }, [
            l("div", Ut, [
              l("div", Yt, [
                C(g.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Wt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: n
                })
              ]),
              l("div", Xt, [
                C(g.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, qt)
                ], !0)
              ]),
              l("div", Jt, [
                C(g.$slots, "footer", {}, () => [
                  e.okOnly ? Y("", !0) : (_(), b("button", {
                    key: 0,
                    type: "button",
                    class: M(["ms-auto btn btn-secondary", y(d)]),
                    onClick: $
                  }, [
                    C(g.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, Qt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: M(["btn btn-primary", y(d)]),
                    onClick: T
                  }, [
                    C(g.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, Zt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Kt)) : Y("", !0)
      ]),
      _: 3
    }));
  }
});
const tn = /* @__PURE__ */ F(en, [["__scopeId", "data-v-2e49e8cb"]]), A = "b", ve = "$toaster", pe = "$modalManager";
class _e {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = ue(We).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
B(_e, "component");
class he {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = ue(Re).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
B(he, "component");
function rn() {
  return ie(ve);
}
function un() {
  return ie(pe);
}
function nn(e) {
  e.component(`${A}-drawer`, tn), e.component(`${A}-modal`, de), e.component(`${A}-pagination`, rt), e.component(`${A}-pagination-dropdown`, dt), e.component(`${A}-pagination-select`, vt), e.component(`${A}-dropdown`, Lt), e.component(`${A}-dropdown-item`, Dt), e.component(`${A}-dropdown-header`, Et), e.component(`${A}-dropdown-divider`, Ft), e.component(`${A}-table`, xt), e.component(`${A}-toast`, ce);
}
function on(e) {
  e.directive("tooltip", It), e.directive("click-outside", Gt);
}
const cn = {
  install(e) {
    nn(e), on(e);
    const t = he.getComponent();
    e.provide(ve, t);
    const o = _e.getComponent();
    e.provide(pe, o);
  }
};
export {
  cn as BootstrapVue,
  Lt as Dropdown,
  Ft as DropdownDivider,
  Et as DropdownHeader,
  Dt as DropdownItem,
  de as Modal,
  We as ModalManager,
  dt as PageSizeDropdown,
  vt as PageSizeSelect,
  rt as Pagination,
  xt as Table,
  J as TableFieldDefinition,
  ce as Toast,
  Re as Toaster,
  Gt as clickOutside,
  It as tooltip,
  un as useModal,
  rn as useToaster
};
