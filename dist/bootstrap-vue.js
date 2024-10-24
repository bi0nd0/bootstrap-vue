var Me = Object.defineProperty;
var Te = (e, t, a) => t in e ? Me(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var E = (e, t, a) => Te(e, typeof t != "symbol" ? t + "" : t, a);
import { defineComponent as R, toRefs as F, ref as B, watch as Be, onMounted as oe, openBlock as y, createElementBlock as C, normalizeClass as L, renderSlot as g, normalizeProps as A, guardReactiveProps as O, createElementVNode as s, toDisplayString as z, createBlock as q, Teleport as ae, Fragment as I, renderList as K, mergeProps as W, computed as H, getCurrentInstance as le, watchEffect as fe, withModifiers as pe, createCommentVNode as Q, createVNode as ve, onUnmounted as Le, normalizeStyle as xe, createTextVNode as G, resolveComponent as ue, withCtx as te, unref as X, withDirectives as me, vModelSelect as De, resolveDirective as Ae, Transition as Oe, inject as he, createApp as re } from "vue";
import { Toast as He, Modal as ze, Tooltip as Ee } from "bootstrap";
const Re = { class: "toast-header" }, Pe = ["textContent"], Ve = ["textContent"], Ie = { class: "toast-body" }, Ne = ["textContent"], Fe = /* @__PURE__ */ R({
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
  setup(e, { expose: t, emit: a }) {
    const o = e, v = a, { visible: r, animation: d, autohide: u, delay: c } = F(o), f = B(), k = B();
    Be(r, (S) => {
      l();
    }, { immediate: !0 });
    function w() {
      f.value.show();
    }
    function $() {
      f.value.hide();
    }
    function T() {
      f.value.dispose();
    }
    function m() {
      f.value.isShown();
    }
    function i() {
      f.value.getOrCreateInstance();
    }
    function _() {
      f.value.getInstance();
    }
    function l() {
      f.value && (r.value === !0 ? w() : $());
    }
    function b() {
      v("hide", f.value);
    }
    function n() {
      v("hidden", f.value);
    }
    function p() {
      v("show", f.value);
    }
    async function M() {
      v("shown", f.value);
    }
    const h = { show: w, hide: $, dispose: T, isShown: m, getOrCreateInstance: i, getInstance: _ };
    return t({ ...h }), oe(() => {
      k.value.addEventListener("hide.bs.toast", b), k.value.addEventListener("hidden.bs.toast", n), k.value.addEventListener("show.bs.toast", p), k.value.addEventListener("shown.bs.toast", M), f.value = new He(k.value, {
        animation: d.value,
        autohide: u.value,
        delay: c.value
      }), l();
    }), (S, x) => (y(), C("div", {
      ref_key: "toastRef",
      ref: k,
      class: L(["toast", [S.variant ? `text-bg-${S.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      g(S.$slots, "header", A(O({ ...h })), () => [
        s("div", Re, [
          g(S.$slots, "title", A(O({ ...h })), () => [
            s("strong", {
              class: "me-auto",
              textContent: z(S.title)
            }, null, 8, Pe)
          ], !0),
          g(S.$slots, "subtitle", A(O({ ...h })), () => [
            s("small", {
              textContent: z(S.subtitle)
            }, null, 8, Ve)
          ], !0),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: $
          })
        ])
      ], !0),
      g(S.$slots, "body", A(O({ ...h })), () => [
        s("div", Ie, [
          g(S.$slots, "default", A(O({ ...h })), () => [
            s("span", {
              textContent: z(S.body)
            }, null, 8, Ne)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), j = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, v] of t)
    a[o] = v;
  return a;
}, be = /* @__PURE__ */ j(Fe, [["__scopeId", "data-v-c0cdbae8"]]);
function je() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const o = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (a == "x" ? o : o & 3 | 8).toString(16);
  });
}
const Ge = { id: "toast-wrapper" };
let ie;
const Ke = /* @__PURE__ */ R({
  __name: "Toaster",
  setup(e, { expose: t }) {
    const a = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, o = B(/* @__PURE__ */ new Map());
    ie = (r, d = "top right") => {
      const u = je(), c = { ...a, ...r, id: u };
      let f = o.value.get(d);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), o.value.set(d, f);
    };
    function v(r, d) {
      const u = o.value.get(r);
      u == null || u.delete(d);
    }
    return t({ toast: ie }), (r, d) => (y(), q(ae, { to: "body" }, [
      s("div", Ge, [
        (y(!0), C(I, null, K(o.value, ([u, c]) => (y(), C("div", {
          key: u,
          class: L(["toast-group", `${u}`])
        }, [
          (y(!0), C(I, null, K(c, (f, k) => (y(), q(be, W({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (w) => v(u, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Ue = /* @__PURE__ */ j(Ke, [["__scopeId", "data-v-786d1c50"]]);
var N = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(N || {});
const Z = (e, t = "") => {
  let a = e.toLowerCase();
  return !Object.values(N).includes(a) || a == "" ? "" : `${t}${a}`;
}, Ye = { class: "modal-content" }, Xe = { class: "modal-header" }, qe = ["innerHTML"], We = { class: "modal-body" }, Je = ["innerHTML"], Qe = { class: "modal-footer" }, Ze = ["innerHTML"], et = ["innerHTML"];
class tt {
  static addToStack(t) {
    t != null && this.modalStack.push(t);
  }
  static removeFromStack(t) {
    if (t == null) return;
    const a = this.modalStack.indexOf(t);
    a < 0 || this.modalStack.splice(a, 1);
  }
  static getLast() {
    const t = this.modalStack.length;
    if (t !== 0)
      return this.modalStack[t - 1];
  }
}
E(tt, "modalStack", new Array());
const ye = /* @__PURE__ */ R({
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
  setup(e, { expose: t, emit: a }) {
    const o = e, {
      backdrop: v,
      keyboard: r,
      focus: d,
      disableOutsideClick: u,
      size: c,
      btnSize: f
    } = F(o), k = a, w = H(() => Z(c.value, "modal-")), $ = H(() => Z(f.value, "btn-")), T = B();
    let m;
    le();
    let i;
    function _() {
      return new Promise((ee, U) => {
        m == null || m.show(), i = ee, k("onShown", m);
      });
    }
    function l(x = !0) {
      m == null || m.hide(), typeof i == "function" && i(x), k("onHidden", m);
    }
    function b() {
      m == null || m.toggle();
    }
    oe(() => {
      m = new ze(T.value, {
        backdrop: v == null ? void 0 : v.value,
        keyboard: r.value,
        focus: d.value
      }), fe(() => {
        (o == null ? void 0 : o.visible) === !0 ? m == null || m.show() : m == null || m.hide();
      });
    });
    function n(x) {
      (v == null ? void 0 : v.value) !== "static" && l(!1);
    }
    function p() {
      l(!1);
    }
    function M() {
      l(!1);
    }
    function h() {
      l(!0);
    }
    t({
      modal: m,
      show: _,
      hide: l,
      toggle: b,
      onHeaderCloseClicked: p,
      onCancelClicked: M,
      onOkCLicked: h
    });
    const S = { show: _, hide: l, toggle: b, modal: m };
    return (x, ee) => (y(), C("div", W({
      ref_key: "modalElement",
      ref: T,
      class: "modal fade",
      tabindex: "-1"
    }, { ...x.$attrs }, {
      onClick: pe(n, ["self"])
    }), [
      s("div", {
        class: L(["modal-dialog", w.value])
      }, [
        s("div", Ye, [
          s("div", Xe, [
            g(x.$slots, "header", A(O({ ...S })), () => [
              s("h5", {
                class: "modal-title",
                innerHTML: x.title
              }, null, 8, qe)
            ]),
            s("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: p
            })
          ]),
          s("div", We, [
            g(x.$slots, "default", A(O({ ...S })), () => [
              s("span", { innerHTML: x.body }, null, 8, Je)
            ])
          ]),
          s("div", Qe, [
            g(x.$slots, "footer", A(O({ ...S })), () => [
              x.okOnly ? Q("", !0) : (y(), C("button", {
                key: 0,
                type: "button",
                class: L(["btn btn-secondary", $.value]),
                onClick: M
              }, [
                g(x.$slots, "button-cancel", A(O({ ...S })), () => [
                  s("span", { innerHTML: x.textCancel }, null, 8, Ze)
                ])
              ], 2)),
              s("button", {
                type: "button",
                class: L(["btn btn-primary", $.value]),
                onClick: h
              }, [
                g(x.$slots, "button-ok", A(O({ ...S })), () => [
                  s("span", { innerHTML: x.textOk }, null, 8, et)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16));
  }
}), ot = /* @__PURE__ */ R({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const a = B(void 0), o = B({});
    function v(d = {}) {
      var u;
      return d.okOnly = !1, o.value = d, (u = a.value) == null ? void 0 : u.show();
    }
    function r(d = {}) {
      var u;
      return d.okOnly = !0, o.value = d, (u = a.value) == null ? void 0 : u.show();
    }
    return t({ confirm: v, alert: r }), (d, u) => (y(), q(ae, { to: "body" }, [
      ve(ye, W({
        ref_key: "modalRef",
        ref: a
      }, { ...o.value }), null, 16)
    ]));
  }
}), nt = {
  "data-header": "",
  class: "border-bottom"
}, st = { class: "d-flex gap-2 p-2" }, at = { class: "p-2" }, lt = {
  "data-footer": "",
  class: "border-top p-2"
}, rt = { class: "buttons" }, ut = /* @__PURE__ */ R({
  __name: "DialogBox",
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
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const a = e, { backdrop: o, disableOutsideClick: v, modal: r, size: d, btnSize: u } = F(a), c = () => document.querySelectorAll("dialog[open]").length, f = 1056, k = B(f), w = B(!1), $ = B(!1), T = B(!1), m = B(), i = B(!1), _ = H(() => Z(d.value, "modal-")), l = H(() => Z(u.value, "btn-")), b = H(() => ({
      opening: w.value,
      closing: $.value,
      "no-backdrop": o.value === !1,
      static: i.value
    }));
    let n = null;
    const p = () => {
      const D = c();
      k.value = f + D;
    }, M = async () => (p(), w.value = !0, m.value.addEventListener(
      "animationend",
      () => {
        w.value = !1, T.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? m.value.showModal() : m.value.show(), new Promise((D, V) => {
      n = D;
    })), h = async (D = !1) => {
      $.value = !0, m.value.addEventListener(
        "animationend",
        () => {
          m.value.close(), $.value = !1, T.value = !1, typeof n == "function" && n(D), n = null;
        },
        { once: !0 }
      );
    }, S = async () => {
      T.value === !0 ? h() : M();
    }, x = () => {
      i.value = !0, setTimeout(() => {
        i.value = !1;
      }, 200);
    }, ee = () => {
      if (o.value === "static" || v.value === !0) {
        x();
        return;
      }
      h(!1);
    };
    if (r.value === !0) {
      let D = function(J) {
        if (o.value === "static" || v.value === !0) {
          x();
          return;
        }
        J.target === m.value && h(!1);
      };
      const V = new AbortController();
      oe(() => {
        document.addEventListener("click", (J) => {
          D(J);
        }, { signal: V.signal });
      }), Le(() => {
        V.abort();
      });
    }
    const U = { show: M, hide: h, toggle: S, dialog: m };
    return t({
      show: M,
      hide: h,
      toggle: S
    }), (D, V) => (y(), C("div", {
      class: "dialog-wrapper",
      style: xe({ zIndex: k.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: ee
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: m,
        class: L(b.value)
      }, [
        s("div", {
          class: L(["content", _.value])
        }, [
          g(D.$slots, "header", A(O({ ...U })), () => [
            s("div", nt, [
              s("div", st, [
                g(D.$slots, "title", A(O({ ...U })), () => [
                  G(z(D.title), 1)
                ], !0),
                s("button", {
                  class: "ms-auto",
                  type: "button",
                  "data-btn-close": "",
                  "aria-label": "Close",
                  onClick: V[0] || (V[0] = (J) => h(!1))
                })
              ])
            ])
          ], !0),
          s("div", at, [
            g(D.$slots, "default", A(O({ ...U })), () => [
              G(z(D.body), 1)
            ], !0)
          ]),
          g(D.$slots, "footer", A(O({ ...U })), () => [
            s("div", lt, [
              s("div", rt, [
                D.okOnly ? Q("", !0) : (y(), C("button", {
                  key: 0,
                  type: "button",
                  class: L(["btn btn-secondary", l.value]),
                  onClick: V[1] || (V[1] = (J) => h(!1))
                }, [
                  g(D.$slots, "textCancel", A(O({ ...U })), () => [
                    G(z(D.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: L(["btn btn-primary", l.value]),
                  onClick: V[2] || (V[2] = (J) => h(!0))
                }, [
                  g(D.$slots, "textOk", A(O({ ...U })), () => [
                    G(z(D.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), _e = /* @__PURE__ */ j(ut, [["__scopeId", "data-v-c26e4b3c"]]), it = /* @__PURE__ */ R({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const a = B(void 0), o = B({});
    function v(d = {}) {
      var u;
      return d.okOnly = !1, o.value = d, (u = a.value) == null ? void 0 : u.show();
    }
    function r(d = {}) {
      var u;
      return d.okOnly = !0, o.value = d, (u = a.value) == null ? void 0 : u.show();
    }
    return t({ confirm: v, alert: r }), (d, u) => (y(), q(ae, { to: "body" }, [
      ve(_e, W({
        ref_key: "modalRef",
        ref: a
      }, { ...o.value }), null, 16)
    ]));
  }
}), dt = { "data-first": "" }, ct = ["disabled", "innerHTML"], ft = { "data-prev": "" }, pt = ["disabled", "innerHTML"], vt = { key: 0 }, mt = ["innerHTML"], ht = ["onClick"], bt = { "data-next": "" }, yt = ["disabled", "innerHTML"], _t = { "data-last": "" }, kt = ["disabled", "innerHTML"], $t = /* @__PURE__ */ R({
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
    function a(n, p = 0) {
      return [...Array(n).keys()].map((M) => M + p);
    }
    const o = t, v = e, { modelValue: r, maxVisibleButtons: d, hideEllipsis: u } = F(v), c = Math.floor(d.value / 2), f = H(() => {
      let n = d.value, p = r.value <= c ? 1 : r.value - c;
      return r.value >= $.value - c && (p = $.value - n + 1), p < 1 && (p = 1), $.value < n && (n = $.value), a(n, p);
    }), k = H(() => r.value <= 1), w = H(() => r.value >= $.value), $ = H(() => {
      const { perPage: n, totalItems: p } = v;
      return Math.ceil(p / n);
    });
    fe(() => {
      $.value > 0 && r.value > $.value && o("update:modelValue", $.value);
    });
    function T(n) {
      const p = d.value - 1;
      return !(u.value === !0 || n === 0 && r.value - c - 1 <= 0 || n === p && r.value + c >= $.value || n > 0 && n < p);
    }
    function m(n) {
      n < 1 && (n = 1), n > $.value && (n = $.value), o("update:modelValue", n);
    }
    function i() {
      o("update:modelValue", 1);
    }
    function _() {
      o("update:modelValue", $.value);
    }
    function l() {
      let n = r.value - 1;
      n < 1 && (n = 1), o("update:modelValue", n);
    }
    function b() {
      let n = r.value + 1;
      n > $.value && (n = $.value), o("update:modelValue", n);
    }
    return (n, p) => (y(), C("ul", {
      class: L(["pagination", n.size])
    }, [
      s("li", dt, [
        s("button", {
          class: "",
          disabled: k.value,
          innerHTML: n.firstText,
          onClick: i
        }, null, 8, ct)
      ]),
      s("li", ft, [
        s("button", {
          class: "",
          disabled: k.value,
          innerHTML: n.prevText,
          onClick: l
        }, null, 8, pt)
      ]),
      (y(!0), C(I, null, K(f.value, (M, h) => (y(), C(I, null, [
        T(h) ? (y(), C("li", vt, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: n.ellipsisText
          }, null, 8, mt)
        ])) : (y(), C("li", {
          key: 1,
          "data-prev": "",
          class: L({ active: n.modelValue === M })
        }, [
          s("button", {
            class: "",
            onClick: (S) => m(M)
          }, z(M), 9, ht)
        ], 2))
      ], 64))), 256)),
      s("li", bt, [
        s("button", {
          class: "",
          disabled: w.value,
          innerHTML: n.nextText,
          onClick: b
        }, null, 8, yt)
      ]),
      s("li", _t, [
        s("button", {
          class: "",
          disabled: w.value,
          innerHTML: n.lastText,
          onClick: _
        }, null, 8, kt)
      ])
    ], 2));
  }
}), Ct = /* @__PURE__ */ j($t, [["__scopeId", "data-v-2bfd7085"]]), gt = { class: "d-inline" }, wt = { class: "fw-bold" }, St = /* @__PURE__ */ R({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = t, { options: v } = F(a), r = H({
      get: () => a.modelValue,
      set: (d) => o("update:modelValue", d)
    });
    return (d, u) => {
      const c = ue("b-dropdown-item"), f = ue("b-dropdown");
      return y(), q(f, W({
        variant: "outline-primary",
        size: "sm"
      }, { ...d.$attrs }), {
        button: te(() => [
          s("div", gt, [
            g(d.$slots, "default", { selected: r.value }, () => [
              u[0] || (u[0] = s("span", null, "Per page: ", -1)),
              s("span", wt, z(r.value), 1)
            ])
          ])
        ]),
        default: te(() => [
          (y(!0), C(I, null, K(X(v), (k, w) => (y(), q(c, {
            key: k,
            onClick: ($) => r.value = k,
            active: k === d.modelValue
          }, {
            default: te(() => [
              G(z(k), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Mt = ["value"], Tt = /* @__PURE__ */ R({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = t, { options: v } = F(a), r = H({
      get: () => a.modelValue,
      set: (d) => o("update:modelValue", d)
    });
    return (d, u) => me((y(), C("select", {
      "onUpdate:modelValue": u[0] || (u[0] = (c) => r.value = c)
    }, [
      (y(!0), C(I, null, K(X(v), (c, f) => (y(), C("option", {
        key: c,
        value: c
      }, z(c), 9, Mt))), 128))
    ], 512)), [
      [De, r.value]
    ]);
  }
});
var Y = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Y || {});
class Bt {
  constructor(t, a = "ASC", o) {
    E(this, "key");
    E(this, "direction");
    E(this, "sortFn");
    this.key = t, this.direction = a, this.sortFn = o;
  }
}
const de = (e, t) => {
  const a = (u, c) => {
    let f = typeof u, k = typeof c;
    return f == "number" && f == k;
  }, o = (u, c) => u - c, v = (u, c) => (u = u ?? "", c = c ?? "", u.localeCompare(c)), r = (u, c) => a(u, c) ? o : v, d = [...t];
  return d.sort((u, c) => {
    let f = 0;
    for (let k of e) {
      let { key: w, direction: $, sortFn: T } = k, m = $ === "ASC" ? 1 : -1, i = u[w], _ = c[w];
      if (T = typeof T == "function" ? T : r(i, _), f = T(i, _, u, c, t, k, m) * m, f !== 0) return f;
    }
    return f;
  }), d;
}, Lt = ["onClick"], xt = { class: "th-wrapper" }, Dt = {
  key: 0,
  "data-sort-indicator": ""
}, At = { class: "sort-index" }, Ot = { class: "sort-direction" }, Ht = ["onMouseover"], zt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Et = ["colspan"], Rt = ["innerHTML"];
class ne {
  constructor(t = "", a = "", o = !1, v) {
    E(this, "key");
    // age
    E(this, "label");
    // Person age
    E(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    E(this, "sortFn");
    this.key = t, this.label = a, this.sortable = o, this.sortFn = v;
  }
}
const Pt = /* @__PURE__ */ R({
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
    const a = (i) => {
      let _ = [];
      for (const l of i)
        _ = _.concat(Object.keys(l));
      return _ = _.filter((l, b) => _.indexOf(l) == b), _;
    }, o = t, v = e, r = B([]), { fields: d, items: u } = F(v), c = H(() => {
      if (v.externalSort || r.value.length == 0) return v.items;
      const i = [...v.items];
      return de(r.value, i);
    }), f = H(() => {
      let i = d.value, _ = [];
      return i.length === 0 && (i = a([...u.value])), i.reduce((l, b, n) => {
        if (typeof b == "string")
          l.push(new ne(b, b));
        else if (b instanceof ne)
          l.push(b);
        else if (typeof b == "object") {
          const { key: p, label: M, sortable: h, sortFn: S } = b;
          l.push(new ne(p, M, h, S));
        }
        return l;
      }, _);
    });
    function k(i) {
      const _ = r.value.findIndex((l) => l.key === i.key);
      return _ < 0 ? "" : _ + 1;
    }
    function w(i) {
      const _ = r.value.findIndex((b) => b.key === i.key);
      if (_ < 0) return "fas fa-sort";
      const l = r.value[_];
      return l.direction === Y.ASC ? "fas fa-sort-up" : l.direction === Y.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function $(i) {
      const { key: _ } = i, l = r.value.findIndex((b) => b.key === _);
      if (l < 0) {
        const b = new Bt(_, Y.ASC, i.sortFn);
        r.value.push(b);
      } else {
        const b = r.value[l], n = b.direction;
        n === Y.ASC ? b.direction = Y.DESC : n === Y.DESC && r.value.splice(l, 1);
      }
      o("sort", r.value, de);
    }
    function T(i, _, l, b) {
      o("onMouseOverCell", i, _, l, b);
    }
    let m = B(null);
    return oe(() => {
      m.value = le();
    }), (i, _) => (y(), C("table", W({ ...i.$attrs }, {
      class: { striped: i.striped, hover: i.hover }
    }), [
      s("thead", null, [
        (y(!0), C(I, null, K(f.value, (l) => (y(), C("th", {
          key: `thead-${l.key}`,
          class: L({ sortable: l.sortable }),
          onClick: (b) => l.sortable && $(l)
        }, [
          s("span", xt, [
            g(i.$slots, `head(${l.key})`, {
              field: l,
              data: X(m),
              value: l.label
            }, () => [
              G(z(l.label), 1)
            ], !0),
            l.sortable ? (y(), C("span", Dt, [
              s("span", At, z(k(l)), 1),
              s("span", Ot, [
                s("i", {
                  class: L(w(l))
                }, null, 2)
              ])
            ])) : Q("", !0)
          ])
        ], 10, Lt))), 128))
      ]),
      s("tbody", null, [
        (y(!0), C(I, null, K(c.value, (l, b) => (y(), C(I, {
          key: `trow-${(l == null ? void 0 : l.id) ?? b}`
        }, [
          g(i.$slots, "row", {
            item: l,
            index: b,
            colspan: f.value.length
          }, void 0, !0),
          s("tr", null, [
            (y(!0), C(I, null, K(f.value, (n) => (y(), C("td", {
              key: `tcell-${n.key + ((l == null ? void 0 : l.id) ?? b)}`,
              class: L({ [`tcell-${n == null ? void 0 : n.key}`]: !0 }),
              onMouseover: (p) => T(p, l, b, n)
            }, [
              g(i.$slots, `cell(${n == null ? void 0 : n.key})`, {
                data: X(m),
                item: l,
                field: n,
                value: l[n == null ? void 0 : n.key]
              }, () => [
                G(z(l[n == null ? void 0 : n.key]), 1)
              ], !0)
            ], 42, Ht))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        g(i.$slots, "footer", { data: X(m) }, void 0, !0)
      ]),
      i.showEmpty && c.value.length === 0 ? (y(), C("tr", zt, [
        s("td", {
          colspan: f.value.length
        }, [
          g(i.$slots, "empty", {
            items: c.value,
            data: X(m),
            fields: f.value
          }, () => [
            s("span", { innerHTML: i.emptyText }, null, 8, Rt)
          ], !0)
        ], 8, Et)
      ])) : Q("", !0)
    ], 16));
  }
}), Vt = /* @__PURE__ */ j(Pt, [["__scopeId", "data-v-b1e9b5de"]]);
var ke = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ke || {});
const It = { class: "d-inline-block position-relative" }, Nt = ["disabled"], ce = "data-prevent-close", Ft = /* @__PURE__ */ R({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: ke.PRIMARY },
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
    const t = B(), a = e, o = B(), { variant: v, centered: r, dropup: d, dropend: u, dropstart: c, menuEnd: f } = F(a), k = B(!1), w = H(() => {
      const p = [];
      return v != null && v.value && p.push(`btn-${v.value}`), a.size && p.push(`btn-${a.size}`), p;
    }), $ = H(() => {
      const p = [];
      return r != null && r.value && p.push("dropdown-center"), d != null && d.value && p.push("dropup"), c != null && c.value && p.push("dropstart"), !(c != null && c.value) && (u != null && u.value) && p.push("dropend"), p.length === 0 ? p.push("dropdown") : p.unshift("btn-group"), p;
    }), T = H(() => {
      const p = [];
      return k.value && p.push("show"), f.value && p.push("dropdown-menu-end"), p;
    });
    function m() {
      k.value = !0;
    }
    function i() {
      k.value = !1;
    }
    function _(p) {
      k.value ? i() : m();
    }
    function l(p) {
      const { target: M } = p;
      (M == null ? void 0 : M.closest(`[${ce}],[${ce}=true]`)) || i();
    }
    function b() {
      k.value && i();
    }
    const n = {
      show: k,
      disabled: a.disabled,
      buttonClasses: w,
      onButtonClicked: _,
      onMenuClicked: l,
      onClickOutside: b,
      open: m,
      close: i
    };
    return (p, M) => {
      const h = Ae("click-outside");
      return y(), C("div", {
        ref_key: "dropDownRef",
        ref: o,
        class: L($.value)
      }, [
        me((y(), C("div", It, [
          g(p.$slots, "header", A(O({ ...n })), () => [
            s("button", {
              class: L(["btn dropdown-toggle", w.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: _,
              disabled: p.disabled
            }, [
              g(p.$slots, "button", A(O({ ...n })), () => [
                G(z(p.text), 1)
              ], !0)
            ], 10, Nt)
          ], !0),
          s("ul", {
            ref_key: "dropDownMenuRef",
            ref: t,
            class: L(["dropdown-menu", T.value]),
            onClick: l
          }, [
            g(p.$slots, "default", A(O({ ...n })), void 0, !0)
          ], 2)
        ])), [
          [h, b]
        ])
      ], 2);
    };
  }
}), jt = /* @__PURE__ */ j(Ft, [["__scopeId", "data-v-f9658383"]]), Gt = ["data-prevent-close"], Kt = /* @__PURE__ */ R({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: a } = F(t);
    return (o, v) => (y(), C("li", {
      "data-prevent-close": X(a) ? "" : null
    }, [
      s("span", {
        class: L(["dropdown-item", { active: o.active }]),
        role: "button",
        tabindex: "0"
      }, [
        g(o.$slots, "default")
      ], 2)
    ], 8, Gt));
  }
}), Ut = {}, Yt = { "data-prevent-close": "" }, Xt = { class: "dropdown-header" };
function qt(e, t) {
  return y(), C("li", Yt, [
    s("h6", Xt, [
      g(e.$slots, "default")
    ])
  ]);
}
const Wt = /* @__PURE__ */ j(Ut, [["render", qt]]), Jt = {};
function Qt(e, t) {
  return y(), C("li", null, t[0] || (t[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Zt = /* @__PURE__ */ j(Jt, [["render", Qt]]), eo = {
  mounted(e, t, a, o) {
    new Ee(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, to = (e, t) => {
  function a(r, d) {
    for (; r !== null; ) {
      if (r === d)
        return !0;
      r = r.parentNode;
    }
    return !1;
  }
  const o = new AbortController();
  function v(r, d) {
    document.addEventListener("click", function(u) {
      const c = u.target;
      r && (a(c, r) || d());
    }, { signal: o.signal });
  }
  return v(e, t), o;
}, oo = {
  mounted(e, t, a, o) {
    const v = t.value;
    to(e, v);
  }
};
class se {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
E(se, "list", /* @__PURE__ */ new Set());
const no = { class: "drawer-content" }, so = { class: "drawer-header" }, ao = ["innerHTML"], lo = { class: "drawer-body" }, ro = ["innerHTML"], uo = { class: "drawer-footer" }, io = ["innerHTML"], co = ["innerHTML"], fo = /* @__PURE__ */ R({
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
    const a = e, {
      backdrop: o,
      keyboard: v,
      focus: r,
      size: d,
      btnSize: u
    } = F(a), c = H(() => Z(d.value, "drawer-")), f = H(() => Z(u.value, "btn-")), k = B(), w = B(!1), $ = le();
    let T;
    async function m() {
      return w.value === !0 ? void 0 : new Promise((S, x) => {
        w.value = !0, T = S;
      });
    }
    function i(h = !0) {
      w.value = !1, typeof T == "function" && T(h);
    }
    function _() {
      w.value === !0 ? m() : i(!1);
    }
    function l(h) {
      (o == null ? void 0 : o.value) !== "static" && i(!1);
    }
    function b() {
      i(!1);
    }
    function n() {
      i(!1);
    }
    function p() {
      i(!0);
    }
    function M() {
      w.value === !0 ? se.add($) : se.delete($);
    }
    return t({
      show: m,
      hide: i,
      toggle: _
    }), (h, S) => (y(), q(Oe, {
      onBeforeEnter: M,
      onAfterLeave: M
    }, {
      default: te(() => [
        w.value ? (y(), C("div", W({
          key: 0,
          ref_key: "drawerElement",
          ref: k,
          class: "drawer",
          tabindex: "-1"
        }, { ...h.$attrs }, {
          onClick: pe(l, ["self"])
        }), [
          s("div", {
            class: L(["drawer-dialog", c.value])
          }, [
            s("div", no, [
              s("div", so, [
                g(h.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: h.title
                  }, null, 8, ao)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: b
                })
              ]),
              s("div", lo, [
                g(h.$slots, "default", {}, () => [
                  s("span", { innerHTML: h.body }, null, 8, ro)
                ], !0)
              ]),
              s("div", uo, [
                g(h.$slots, "footer", {}, () => [
                  h.okOnly ? Q("", !0) : (y(), C("button", {
                    key: 0,
                    type: "button",
                    class: L(["ms-auto btn btn-secondary", f.value]),
                    onClick: n
                  }, [
                    g(h.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: h.textCancel }, null, 8, io)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: L(["btn btn-primary", f.value]),
                    onClick: p
                  }, [
                    g(h.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: h.textOk }, null, 8, co)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : Q("", !0)
      ]),
      _: 3
    }));
  }
}), po = /* @__PURE__ */ j(fo, [["__scopeId", "data-v-2e49e8cb"]]), P = "b", $e = "$toaster", Ce = "$modalManager", vo = "$dialogManager";
class ge {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const o = re(ot).mount(t);
      this.component = o;
    }
    return this.component;
  }
}
E(ge, "component");
class we {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const o = re(it).mount(t);
      this.component = o;
    }
    return this.component;
  }
}
E(we, "component");
class Se {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const o = re(Ue).mount(t);
      this.component = o;
    }
    return this.component;
  }
}
E(Se, "component");
function ko() {
  return he($e);
}
function $o() {
  return he(Ce);
}
function mo(e) {
  e.component(`${P}-drawer`, po), e.component(`${P}-modal`, ye), e.component(`${P}-dialog`, _e), e.component(`${P}-pagination`, Ct), e.component(`${P}-pagination-dropdown`, St), e.component(`${P}-pagination-select`, Tt), e.component(`${P}-dropdown`, jt), e.component(`${P}-dropdown-item`, Kt), e.component(`${P}-dropdown-header`, Wt), e.component(`${P}-dropdown-divider`, Zt), e.component(`${P}-table`, Vt), e.component(`${P}-toast`, be);
}
function ho(e) {
  e.directive("tooltip", eo), e.directive("click-outside", oo);
}
const Co = {
  install(e) {
    mo(e), ho(e);
    const t = Se.getComponent(), a = ge.getComponent(), o = we.getComponent();
    e.provide($e, t), e.provide(Ce, a), e.provide(vo, o);
  }
};
export {
  Co as BootstrapVue,
  _e as DialogBox,
  it as DialogManager,
  jt as Dropdown,
  Zt as DropdownDivider,
  Wt as DropdownHeader,
  Kt as DropdownItem,
  ye as Modal,
  ot as ModalManager,
  St as PageSizeDropdown,
  Tt as PageSizeSelect,
  Ct as Pagination,
  Vt as Table,
  ne as TableFieldDefinition,
  be as Toast,
  Ue as Toaster,
  oo as clickOutside,
  eo as tooltip,
  $o as useModal,
  ko as useToaster
};
