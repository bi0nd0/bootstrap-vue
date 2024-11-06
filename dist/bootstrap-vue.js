var Te = Object.defineProperty;
var De = (e, t, l) => t in e ? Te(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var I = (e, t, l) => De(e, typeof t != "symbol" ? t + "" : t, l);
import { defineComponent as R, toRefs as F, ref as L, watch as pe, onMounted as oe, openBlock as _, createElementBlock as g, normalizeClass as O, renderSlot as C, normalizeProps as x, guardReactiveProps as A, createElementVNode as s, toDisplayString as H, createBlock as Z, Teleport as le, Fragment as N, renderList as X, mergeProps as J, computed as z, getCurrentInstance as ae, watchEffect as ve, withModifiers as me, createCommentVNode as Q, createVNode as he, onUnmounted as Le, normalizeStyle as xe, createTextVNode as U, resolveComponent as ie, withCtx as te, unref as W, withDirectives as be, vModelSelect as Ae, resolveDirective as Oe, Transition as ze, inject as re, createApp as ue } from "vue";
import { Toast as Ee, Modal as He, Tooltip as Re } from "bootstrap";
const Ie = { class: "toast-header" }, Pe = ["textContent"], Ne = ["textContent"], Ve = { class: "toast-body" }, Fe = ["textContent"], je = /* @__PURE__ */ R({
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
  setup(e, { expose: t, emit: l }) {
    const n = e, f = l, { visible: u, animation: i, autohide: a, delay: v } = F(n), c = L(), k = L();
    pe(u, (d) => {
      r();
    }, { immediate: !0 });
    function S() {
      c.value.show();
    }
    function b() {
      c.value.hide();
    }
    function D() {
      c.value.dispose();
    }
    function m() {
      c.value.isShown();
    }
    function p() {
      c.value.getOrCreateInstance();
    }
    function $() {
      c.value.getInstance();
    }
    function r() {
      c.value && (u.value === !0 ? S() : b());
    }
    function y() {
      f("hide", c.value);
    }
    function o() {
      f("hidden", c.value);
    }
    function B() {
      f("show", c.value);
    }
    async function T() {
      f("shown", c.value);
    }
    const h = { show: S, hide: b, dispose: D, isShown: m, getOrCreateInstance: p, getInstance: $ };
    return t({ ...h }), oe(() => {
      k.value.addEventListener("hide.bs.toast", y), k.value.addEventListener("hidden.bs.toast", o), k.value.addEventListener("show.bs.toast", B), k.value.addEventListener("shown.bs.toast", T), c.value = new Ee(k.value, {
        animation: i.value,
        autohide: a.value,
        delay: v.value
      }), r();
    }), (d, E) => (_(), g("div", {
      ref_key: "toastRef",
      ref: k,
      class: O(["toast", [d.variant ? `text-bg-${d.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(d.$slots, "header", x(A({ ...h })), () => [
        s("div", Ie, [
          C(d.$slots, "title", x(A({ ...h })), () => [
            s("strong", {
              class: "me-auto",
              textContent: H(d.title)
            }, null, 8, Pe)
          ], !0),
          C(d.$slots, "subtitle", x(A({ ...h })), () => [
            s("small", {
              textContent: H(d.subtitle)
            }, null, 8, Ne)
          ], !0),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: b
          })
        ])
      ], !0),
      C(d.$slots, "body", x(A({ ...h })), () => [
        s("div", Ve, [
          C(d.$slots, "default", x(A({ ...h })), () => [
            s("span", {
              textContent: H(d.body)
            }, null, 8, Fe)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), K = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, f] of t)
    l[n] = f;
  return l;
}, ye = /* @__PURE__ */ K(je, [["__scopeId", "data-v-c0cdbae8"]]);
function Ge() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(l) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (l == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Ke = { id: "toast-wrapper" };
let de;
const Ue = /* @__PURE__ */ R({
  __name: "Toaster",
  setup(e, { expose: t }) {
    const l = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, n = L(/* @__PURE__ */ new Map());
    de = (u, i = "top right") => {
      const a = Ge(), v = { ...l, ...u, id: a };
      let c = n.value.get(i);
      c instanceof Set || (c = /* @__PURE__ */ new Set()), c.add(v), n.value.set(i, c);
    };
    function f(u, i) {
      const a = n.value.get(u);
      a == null || a.delete(i);
    }
    return t({ toast: de }), (u, i) => (_(), Z(le, { to: "body" }, [
      s("div", Ke, [
        (_(!0), g(N, null, X(n.value, ([a, v]) => (_(), g("div", {
          key: a,
          class: O(["toast-group", `${a}`])
        }, [
          (_(!0), g(N, null, X(v, (c, k) => (_(), Z(ye, J({
            key: c.id,
            ref_for: !0
          }, c, {
            onHidden: (S) => f(a, c)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Xe = /* @__PURE__ */ K(Ue, [["__scopeId", "data-v-786d1c50"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const ee = (e, t = "") => {
  let l = e.toLowerCase();
  return !Object.values(V).includes(l) || l == "" ? "" : `${t}${l}`;
}, Ye = { class: "modal-content" }, qe = { class: "modal-header" }, We = ["innerHTML"], Ze = { class: "modal-body" }, Je = ["innerHTML"], Qe = { class: "modal-footer" }, et = ["innerHTML"], tt = ["innerHTML"], _e = /* @__PURE__ */ R({
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
    size: { default: V.STANDARD },
    btnSize: { default: V.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: t, emit: l }) {
    const n = e, {
      backdrop: f,
      keyboard: u,
      focus: i,
      disableOutsideClick: a,
      size: v,
      btnSize: c
    } = F(n), k = l, S = z(() => ee(v.value, "modal-")), b = z(() => ee(c.value, "btn-")), D = L();
    let m;
    ae();
    const p = () => document.querySelectorAll(".modal.show").length, $ = 1055, r = L($), y = () => {
      const w = p();
      r.value = $ + w;
    };
    let o;
    function B() {
      return new Promise((G, ho) => {
        y(), m == null || m.show(), o = G, k("onShown", m);
      });
    }
    function T(w = !0) {
      m == null || m.hide(), typeof o == "function" && o(w), k("onHidden", m);
    }
    function h() {
      m == null || m.toggle();
    }
    oe(() => {
      m = new He(D.value, {
        backdrop: f == null ? void 0 : f.value,
        keyboard: u.value,
        focus: i.value
      }), ve(() => {
        (n == null ? void 0 : n.visible) === !0 ? m == null || m.show() : m == null || m.hide();
      });
    });
    function d(w) {
      (f == null ? void 0 : f.value) !== "static" && T(!1);
    }
    function E() {
      T(!1);
    }
    function Y() {
      T(!1);
    }
    function j() {
      T(!0);
    }
    t({
      modal: m,
      show: B,
      hide: T,
      toggle: h,
      onHeaderCloseClicked: E,
      onCancelClicked: Y,
      onOkCLicked: j
    });
    const M = { show: B, hide: T, toggle: h, modal: m };
    return (w, G) => (_(), g("div", J({
      ref_key: "modalElement",
      ref: D,
      class: "modal fade",
      tabindex: "-1"
    }, { ...w.$attrs }, {
      onClick: me(d, ["self"]),
      style: { zIndex: r.value }
    }), [
      s("div", {
        class: O(["modal-dialog", S.value])
      }, [
        s("div", Ye, [
          C(w.$slots, "header", x(A({ ...M })), () => [
            s("div", qe, [
              C(w.$slots, "title", x(A({ ...M })), () => [
                s("h5", {
                  class: "modal-title",
                  innerHTML: w.title
                }, null, 8, We)
              ]),
              C(w.$slots, "header-close-button", x(A({ ...M })), () => [
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: E
                })
              ])
            ])
          ]),
          s("div", Ze, [
            C(w.$slots, "default", x(A({ ...M })), () => [
              s("span", { innerHTML: w.body }, null, 8, Je)
            ])
          ]),
          s("div", Qe, [
            C(w.$slots, "footer", x(A({ ...M })), () => [
              w.okOnly ? Q("", !0) : (_(), g("button", {
                key: 0,
                type: "button",
                class: O(["btn btn-secondary", b.value]),
                onClick: Y
              }, [
                C(w.$slots, "button-cancel", x(A({ ...M })), () => [
                  s("span", { innerHTML: w.textCancel }, null, 8, et)
                ])
              ], 2)),
              s("button", {
                type: "button",
                class: O(["btn btn-primary", b.value]),
                onClick: j
              }, [
                C(w.$slots, "button-ok", x(A({ ...M })), () => [
                  s("span", { innerHTML: w.textOk }, null, 8, tt)
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
    const l = L(void 0), n = L({});
    function f(i = {}) {
      var a;
      return i.okOnly = !1, n.value = i, (a = l.value) == null ? void 0 : a.show();
    }
    function u(i = {}) {
      var a;
      return i.okOnly = !0, n.value = i, (a = l.value) == null ? void 0 : a.show();
    }
    return t({ confirm: f, alert: u }), (i, a) => (_(), Z(le, { to: "body" }, [
      he(_e, J({
        ref_key: "modalRef",
        ref: l
      }, { ...n.value }), null, 16)
    ]));
  }
}), nt = {
  "data-header": "",
  class: "border-bottom"
}, st = { class: "d-flex gap-2 p-2" }, lt = { class: "p-2" }, at = {
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
    size: { default: V.STANDARD },
    btnSize: { default: V.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const l = e, { backdrop: n, disableOutsideClick: f, modal: u, size: i, btnSize: a } = F(l), v = () => document.querySelectorAll("dialog[open]").length, c = 1056, k = L(c), S = L(!1), b = L(!1), D = L(!1), m = L(), p = L(!1), $ = z(() => ee(i.value, "modal-")), r = z(() => ee(a.value, "btn-")), y = z(() => ({
      opening: S.value,
      closing: b.value,
      "no-backdrop": n.value === !1,
      static: p.value
    }));
    let o = null;
    const B = () => {
      const M = v();
      k.value = c + M;
    }, T = async () => (B(), S.value = !0, m.value.addEventListener(
      "animationend",
      () => {
        S.value = !1, D.value = !0;
      },
      { once: !0 }
    ), u.value === !0 ? m.value.showModal() : m.value.show(), new Promise((M, w) => {
      o = M;
    })), h = async (M = !1) => {
      b.value = !0, m.value.addEventListener(
        "animationend",
        () => {
          m.value.close(), b.value = !1, D.value = !1, typeof o == "function" && o(M), o = null;
        },
        { once: !0 }
      );
    }, d = async () => {
      D.value === !0 ? h() : T();
    }, E = () => {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 200);
    }, Y = () => {
      if (n.value === "static" || f.value === !0) {
        E();
        return;
      }
      h(!1);
    };
    if (u.value === !0) {
      let M = function(G) {
        if (n.value === "static" || f.value === !0) {
          E();
          return;
        }
        G.target === m.value && h(!1);
      };
      const w = new AbortController();
      oe(() => {
        document.addEventListener("click", (G) => {
          M(G);
        }, { signal: w.signal });
      }), Le(() => {
        w.abort();
      });
    }
    const j = { show: T, hide: h, toggle: d, dialog: m };
    return t({
      show: T,
      hide: h,
      toggle: d
    }), (M, w) => (_(), g("div", {
      class: "dialog-wrapper",
      style: xe({ zIndex: k.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: Y
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: m,
        class: O(y.value)
      }, [
        s("div", {
          class: O(["content", $.value])
        }, [
          C(M.$slots, "header", x(A({ ...j })), () => [
            s("div", nt, [
              s("div", st, [
                C(M.$slots, "title", x(A({ ...j })), () => [
                  U(H(M.title), 1)
                ], !0),
                C(M.$slots, "header-close-button", {}, () => [
                  s("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: w[0] || (w[0] = (G) => h(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          s("div", lt, [
            C(M.$slots, "default", x(A({ ...j })), () => [
              U(H(M.body), 1)
            ], !0)
          ]),
          C(M.$slots, "footer", x(A({ ...j })), () => [
            s("div", at, [
              s("div", rt, [
                M.okOnly ? Q("", !0) : (_(), g("button", {
                  key: 0,
                  type: "button",
                  class: O(["btn btn-secondary", r.value]),
                  onClick: w[1] || (w[1] = (G) => h(!1))
                }, [
                  C(M.$slots, "textCancel", x(A({ ...j })), () => [
                    U(H(M.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: O(["btn btn-primary", r.value]),
                  onClick: w[2] || (w[2] = (G) => h(!0))
                }, [
                  C(M.$slots, "textOk", x(A({ ...j })), () => [
                    U(H(M.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), ke = /* @__PURE__ */ K(ut, [["__scopeId", "data-v-dbfc8b0f"]]), it = /* @__PURE__ */ R({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const l = L(void 0), n = L({});
    function f(i = {}) {
      var a;
      return i.okOnly = !1, n.value = i, (a = l.value) == null ? void 0 : a.show();
    }
    function u(i = {}) {
      var a;
      return i.okOnly = !0, n.value = i, (a = l.value) == null ? void 0 : a.show();
    }
    return t({ confirm: f, alert: u }), (i, a) => (_(), Z(le, { to: "body" }, [
      he(ke, J({
        ref_key: "modalRef",
        ref: l
      }, { ...n.value }), null, 16)
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
    size: { default: V.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function l(o, B = 0) {
      return [...Array(o).keys()].map((T) => T + B);
    }
    const n = t, f = e, { modelValue: u, maxVisibleButtons: i, hideEllipsis: a } = F(f), v = Math.floor(i.value / 2), c = z(() => {
      let o = i.value, B = u.value <= v ? 1 : u.value - v;
      return u.value >= b.value - v && (B = b.value - o + 1), B < 1 && (B = 1), b.value < o && (o = b.value), l(o, B);
    }), k = z(() => u.value <= 1), S = z(() => u.value >= b.value), b = z(() => {
      const { perPage: o, totalItems: B } = f;
      return Math.ceil(B / o);
    });
    ve(() => {
      b.value > 0 && u.value > b.value && n("update:modelValue", b.value);
    });
    function D(o) {
      const B = i.value - 1;
      return !(a.value === !0 || o === 0 && u.value - v - 1 <= 0 || o === B && u.value + v >= b.value || o > 0 && o < B);
    }
    function m(o) {
      o < 1 && (o = 1), o > b.value && (o = b.value), n("update:modelValue", o);
    }
    function p() {
      n("update:modelValue", 1);
    }
    function $() {
      n("update:modelValue", b.value);
    }
    function r() {
      let o = u.value - 1;
      o < 1 && (o = 1), n("update:modelValue", o);
    }
    function y() {
      let o = u.value + 1;
      o > b.value && (o = b.value), n("update:modelValue", o);
    }
    return (o, B) => (_(), g("ul", {
      class: O(["pagination", o.size])
    }, [
      s("li", dt, [
        s("button", {
          class: "",
          disabled: k.value,
          innerHTML: o.firstText,
          onClick: p
        }, null, 8, ct)
      ]),
      s("li", ft, [
        s("button", {
          class: "",
          disabled: k.value,
          innerHTML: o.prevText,
          onClick: r
        }, null, 8, pt)
      ]),
      (_(!0), g(N, null, X(c.value, (T, h) => (_(), g(N, null, [
        D(h) ? (_(), g("li", vt, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: o.ellipsisText
          }, null, 8, mt)
        ])) : (_(), g("li", {
          key: 1,
          "data-prev": "",
          class: O({ active: o.modelValue === T })
        }, [
          s("button", {
            class: "",
            onClick: (d) => m(T)
          }, H(T), 9, ht)
        ], 2))
      ], 64))), 256)),
      s("li", bt, [
        s("button", {
          class: "",
          disabled: S.value,
          innerHTML: o.nextText,
          onClick: y
        }, null, 8, yt)
      ]),
      s("li", _t, [
        s("button", {
          class: "",
          disabled: S.value,
          innerHTML: o.lastText,
          onClick: $
        }, null, 8, kt)
      ])
    ], 2));
  }
}), Ct = /* @__PURE__ */ K($t, [["__scopeId", "data-v-2bfd7085"]]), gt = { class: "d-inline" }, wt = { class: "fw-bold" }, Mt = /* @__PURE__ */ R({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = t, { options: f } = F(l), u = z({
      get: () => l.modelValue,
      set: (i) => n("update:modelValue", i)
    });
    return (i, a) => {
      const v = ie("b-dropdown-item"), c = ie("b-dropdown");
      return _(), Z(c, J({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: te(() => [
          s("div", gt, [
            C(i.$slots, "default", { selected: u.value }, () => [
              a[0] || (a[0] = s("span", null, "Per page: ", -1)),
              s("span", wt, H(u.value), 1)
            ])
          ])
        ]),
        default: te(() => [
          (_(!0), g(N, null, X(W(f), (k, S) => (_(), Z(v, {
            key: k,
            onClick: (b) => u.value = k,
            active: k === i.modelValue
          }, {
            default: te(() => [
              U(H(k), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), St = ["value"], Bt = /* @__PURE__ */ R({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = t, { options: f } = F(l), u = z({
      get: () => l.modelValue,
      set: (i) => n("update:modelValue", i)
    });
    return (i, a) => be((_(), g("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (v) => u.value = v)
    }, [
      (_(!0), g(N, null, X(W(f), (v, c) => (_(), g("option", {
        key: v,
        value: v
      }, H(v), 9, St))), 128))
    ], 512)), [
      [Ae, u.value]
    ]);
  }
});
var q = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(q || {});
class Tt {
  constructor(t, l = "ASC", n) {
    I(this, "key");
    I(this, "direction");
    I(this, "sortFn");
    this.key = t, this.direction = l, this.sortFn = n;
  }
}
const ce = (e, t) => {
  const l = (a, v) => {
    let c = typeof a, k = typeof v;
    return c == "number" && c == k;
  }, n = (a, v) => a - v, f = (a, v) => (a = a ?? "", v = v ?? "", a.localeCompare(v)), u = (a, v) => l(a, v) ? n : f, i = [...t];
  return i.sort((a, v) => {
    let c = 0;
    for (let k of e) {
      let { key: S, direction: b, sortFn: D } = k, m = b === "ASC" ? 1 : -1, p = a[S], $ = v[S];
      if (D = typeof D == "function" ? D : u(p, $), c = D(p, $, a, v, t, k, m) * m, c !== 0) return c;
    }
    return c;
  }), i;
}, Dt = ["onClick"], Lt = { class: "th-wrapper" }, xt = {
  key: 0,
  "data-sort-indicator": ""
}, At = { class: "sort-index" }, Ot = { class: "sort-direction" }, zt = ["onMouseover"], Et = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Ht = ["colspan"], Rt = ["innerHTML"];
class ne {
  constructor(t = "", l = "", n = !1, f) {
    I(this, "key");
    // age
    I(this, "label");
    // Person age
    I(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    I(this, "sortFn");
    this.key = t, this.label = l, this.sortable = n, this.sortFn = f;
  }
}
const It = /* @__PURE__ */ R({
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
    const l = (p) => {
      let $ = [];
      for (const r of p)
        $ = $.concat(Object.keys(r));
      return $ = $.filter((r, y) => $.indexOf(r) == y), $;
    }, n = t, f = e, u = L([]), { fields: i, items: a } = F(f), v = z(() => {
      if (f.externalSort || u.value.length == 0) return f.items;
      const p = [...f.items];
      return ce(u.value, p);
    }), c = z(() => {
      let p = i.value, $ = [];
      return p.length === 0 && (p = l([...a.value])), p.reduce((r, y, o) => {
        if (typeof y == "string")
          r.push(new ne(y, y));
        else if (y instanceof ne)
          r.push(y);
        else if (typeof y == "object") {
          const { key: B, label: T, sortable: h, sortFn: d } = y;
          r.push(new ne(B, T, h, d));
        }
        return r;
      }, $);
    });
    function k(p) {
      const $ = u.value.findIndex((r) => r.key === p.key);
      return $ < 0 ? "" : $ + 1;
    }
    function S(p) {
      const $ = u.value.findIndex((y) => y.key === p.key);
      if ($ < 0) return "fas fa-sort";
      const r = u.value[$];
      return r.direction === q.ASC ? "fas fa-sort-up" : r.direction === q.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function b(p) {
      const { key: $ } = p, r = u.value.findIndex((y) => y.key === $);
      if (r < 0) {
        const y = new Tt($, q.ASC, p.sortFn);
        u.value.push(y);
      } else {
        const y = u.value[r], o = y.direction;
        o === q.ASC ? y.direction = q.DESC : o === q.DESC && u.value.splice(r, 1);
      }
      n("sort", u.value, ce);
    }
    function D(p, $, r, y) {
      n("onMouseOverCell", p, $, r, y);
    }
    let m = L(null);
    return oe(() => {
      m.value = ae();
    }), (p, $) => (_(), g("table", J({ ...p.$attrs }, {
      class: { striped: p.striped, hover: p.hover }
    }), [
      s("thead", null, [
        (_(!0), g(N, null, X(c.value, (r) => (_(), g("th", {
          key: `thead-${r.key}`,
          class: O({ sortable: r.sortable }),
          onClick: (y) => r.sortable && b(r)
        }, [
          s("span", Lt, [
            C(p.$slots, `head(${r.key})`, {
              field: r,
              data: W(m),
              value: r.label
            }, () => [
              U(H(r.label), 1)
            ], !0),
            r.sortable ? (_(), g("span", xt, [
              s("span", At, H(k(r)), 1),
              s("span", Ot, [
                s("i", {
                  class: O(S(r))
                }, null, 2)
              ])
            ])) : Q("", !0)
          ])
        ], 10, Dt))), 128))
      ]),
      s("tbody", null, [
        (_(!0), g(N, null, X(v.value, (r, y) => (_(), g(N, {
          key: `trow-${(r == null ? void 0 : r.id) ?? y}`
        }, [
          C(p.$slots, "row", {
            item: r,
            index: y,
            colspan: c.value.length
          }, void 0, !0),
          s("tr", null, [
            (_(!0), g(N, null, X(c.value, (o) => (_(), g("td", {
              key: `tcell-${o.key + ((r == null ? void 0 : r.id) ?? y)}`,
              class: O({ [`tcell-${o == null ? void 0 : o.key}`]: !0 }),
              onMouseover: (B) => D(B, r, y, o)
            }, [
              C(p.$slots, `cell(${o == null ? void 0 : o.key})`, {
                data: W(m),
                item: r,
                field: o,
                value: r[o == null ? void 0 : o.key]
              }, () => [
                U(H(r[o == null ? void 0 : o.key]), 1)
              ], !0)
            ], 42, zt))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        C(p.$slots, "footer", { data: W(m) }, void 0, !0)
      ]),
      p.showEmpty && v.value.length === 0 ? (_(), g("tr", Et, [
        s("td", {
          colspan: c.value.length
        }, [
          C(p.$slots, "empty", {
            items: v.value,
            data: W(m),
            fields: c.value
          }, () => [
            s("span", { innerHTML: p.emptyText }, null, 8, Rt)
          ], !0)
        ], 8, Ht)
      ])) : Q("", !0)
    ], 16));
  }
}), Pt = /* @__PURE__ */ K(It, [["__scopeId", "data-v-b1e9b5de"]]);
var $e = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))($e || {});
const Nt = { class: "d-inline-block position-relative" }, Vt = ["disabled"], fe = "data-prevent-close", Ft = /* @__PURE__ */ R({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: $e.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: V.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: t, emit: l }) {
    const n = L(), f = e, u = L(), { variant: i, centered: a, dropup: v, dropend: c, dropstart: k, menuEnd: S } = F(f), b = L(!1), D = l, m = z(() => {
      const d = [];
      return i != null && i.value && d.push(`btn-${i.value}`), f.size && d.push(`btn-${f.size}`), d;
    }), p = z(() => {
      const d = [];
      return a != null && a.value && d.push("dropdown-center"), v != null && v.value && d.push("dropup"), k != null && k.value && d.push("dropstart"), !(k != null && k.value) && (c != null && c.value) && d.push("dropend"), d.length === 0 ? d.push("dropdown") : d.unshift("btn-group"), d;
    }), $ = z(() => {
      const d = [];
      return b.value && d.push("show"), S.value && d.push("dropdown-menu-end"), d;
    });
    function r() {
      b.value = !0;
    }
    function y() {
      b.value = !1;
    }
    function o(d) {
      b.value ? y() : r();
    }
    function B(d) {
      const { target: E } = d;
      (E == null ? void 0 : E.closest(`[${fe}],[${fe}=true]`)) || y();
    }
    function T() {
      b.value && y();
    }
    pe(b, (d, E) => {
      typeof E > "u" || d !== E && (D("toggle", { show: d }), d === !0 ? D("open", { show: d }) : D("close", { show: d }));
    }, { immediate: !0 });
    const h = {
      show: b,
      disabled: f.disabled,
      buttonClasses: m,
      onButtonClicked: o,
      onMenuClicked: B,
      onClickOutside: T,
      open: r,
      close: y
    };
    return t({
      ...h
    }), (d, E) => {
      const Y = Oe("click-outside");
      return _(), g("div", {
        ref_key: "dropDownRef",
        ref: u,
        class: O(p.value)
      }, [
        be((_(), g("div", Nt, [
          C(d.$slots, "header", x(A({ ...h })), () => [
            s("button", {
              class: O(["btn dropdown-toggle", m.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: o,
              disabled: d.disabled
            }, [
              C(d.$slots, "button", x(A({ ...h })), () => [
                U(H(d.text), 1)
              ], !0)
            ], 10, Vt)
          ], !0),
          s("ul", {
            ref_key: "dropDownMenuRef",
            ref: n,
            class: O(["dropdown-menu", $.value]),
            onClick: B
          }, [
            C(d.$slots, "default", x(A({ ...h })), void 0, !0)
          ], 2)
        ])), [
          [Y, T]
        ])
      ], 2);
    };
  }
}), jt = /* @__PURE__ */ K(Ft, [["__scopeId", "data-v-bc227c5d"]]), Gt = ["data-prevent-close"], Kt = /* @__PURE__ */ R({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: l } = F(t);
    return (n, f) => (_(), g("li", {
      "data-prevent-close": W(l) ? "" : null
    }, [
      s("span", {
        class: O(["dropdown-item", { active: n.active }]),
        role: "button",
        tabindex: "0"
      }, [
        C(n.$slots, "default")
      ], 2)
    ], 8, Gt));
  }
}), Ut = {}, Xt = { "data-prevent-close": "" }, Yt = { class: "dropdown-header" };
function qt(e, t) {
  return _(), g("li", Xt, [
    s("h6", Yt, [
      C(e.$slots, "default")
    ])
  ]);
}
const Wt = /* @__PURE__ */ K(Ut, [["render", qt]]), Zt = {};
function Jt(e, t) {
  return _(), g("li", null, t[0] || (t[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Qt = /* @__PURE__ */ K(Zt, [["render", Jt]]), eo = {
  mounted(e, t, l, n) {
    new Re(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, to = (e, t) => {
  function l(u, i) {
    for (; u !== null; ) {
      if (u === i)
        return !0;
      u = u.parentNode;
    }
    return !1;
  }
  const n = new AbortController();
  function f(u, i) {
    document.addEventListener("click", function(a) {
      const v = a.target;
      u && (l(v, u) || i());
    }, { signal: n.signal });
  }
  return f(e, t), n;
}, oo = {
  mounted(e, t, l, n) {
    const f = t.value;
    to(e, f);
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
I(se, "list", /* @__PURE__ */ new Set());
const no = { class: "drawer-content" }, so = { class: "drawer-header" }, lo = ["innerHTML"], ao = { class: "drawer-body" }, ro = ["innerHTML"], uo = { class: "drawer-footer" }, io = ["innerHTML"], co = ["innerHTML"], fo = /* @__PURE__ */ R({
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
    size: { default: V.STANDARD },
    btnSize: { default: V.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const l = e, {
      backdrop: n,
      keyboard: f,
      focus: u,
      size: i,
      btnSize: a
    } = F(l), v = z(() => ee(i.value, "drawer-")), c = z(() => ee(a.value, "btn-")), k = L(), S = L(!1), b = ae();
    let D;
    async function m() {
      return S.value === !0 ? void 0 : new Promise((d, E) => {
        S.value = !0, D = d;
      });
    }
    function p(h = !0) {
      S.value = !1, typeof D == "function" && D(h);
    }
    function $() {
      S.value === !0 ? m() : p(!1);
    }
    function r(h) {
      (n == null ? void 0 : n.value) !== "static" && p(!1);
    }
    function y() {
      p(!1);
    }
    function o() {
      p(!1);
    }
    function B() {
      p(!0);
    }
    function T() {
      S.value === !0 ? se.add(b) : se.delete(b);
    }
    return t({
      show: m,
      hide: p,
      toggle: $
    }), (h, d) => (_(), Z(ze, {
      onBeforeEnter: T,
      onAfterLeave: T
    }, {
      default: te(() => [
        S.value ? (_(), g("div", J({
          key: 0,
          ref_key: "drawerElement",
          ref: k,
          class: "drawer",
          tabindex: "-1"
        }, { ...h.$attrs }, {
          onClick: me(r, ["self"])
        }), [
          s("div", {
            class: O(["drawer-dialog", v.value])
          }, [
            s("div", no, [
              s("div", so, [
                C(h.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: h.title
                  }, null, 8, lo)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: y
                })
              ]),
              s("div", ao, [
                C(h.$slots, "default", {}, () => [
                  s("span", { innerHTML: h.body }, null, 8, ro)
                ], !0)
              ]),
              s("div", uo, [
                C(h.$slots, "footer", {}, () => [
                  h.okOnly ? Q("", !0) : (_(), g("button", {
                    key: 0,
                    type: "button",
                    class: O(["ms-auto btn btn-secondary", c.value]),
                    onClick: o
                  }, [
                    C(h.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: h.textCancel }, null, 8, io)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: O(["btn btn-primary", c.value]),
                    onClick: B
                  }, [
                    C(h.$slots, "button-ok", {}, () => [
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
}), po = /* @__PURE__ */ K(fo, [["__scopeId", "data-v-2e49e8cb"]]), P = "b", Ce = "$toaster", ge = "$modalManager", we = "$dialogManager";
class Me {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ue(ot).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
I(Me, "component");
class Se {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ue(it).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
I(Se, "component");
class Be {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const n = ue(Xe).mount(t);
      this.component = n;
    }
    return this.component;
  }
}
I(Be, "component");
function ko() {
  return re(Ce);
}
function $o() {
  return re(ge);
}
function Co() {
  return re(we);
}
function vo(e) {
  e.component(`${P}-drawer`, po), e.component(`${P}-modal`, _e), e.component(`${P}-dialog`, ke), e.component(`${P}-pagination`, Ct), e.component(`${P}-pagination-dropdown`, Mt), e.component(`${P}-pagination-select`, Bt), e.component(`${P}-dropdown`, jt), e.component(`${P}-dropdown-item`, Kt), e.component(`${P}-dropdown-header`, Wt), e.component(`${P}-dropdown-divider`, Qt), e.component(`${P}-table`, Pt), e.component(`${P}-toast`, ye);
}
function mo(e) {
  e.directive("tooltip", eo), e.directive("click-outside", oo);
}
const go = {
  install(e) {
    vo(e), mo(e);
    const t = Be.getComponent(), l = Me.getComponent(), n = Se.getComponent();
    e.provide(Ce, t), e.provide(ge, l), e.provide(we, n);
  }
};
export {
  go as BootstrapVue,
  ke as DialogBox,
  it as DialogManager,
  jt as Dropdown,
  Qt as DropdownDivider,
  Wt as DropdownHeader,
  Kt as DropdownItem,
  _e as Modal,
  ot as ModalManager,
  Mt as PageSizeDropdown,
  Bt as PageSizeSelect,
  Ct as Pagination,
  Pt as Table,
  ne as TableFieldDefinition,
  ye as Toast,
  Xe as Toaster,
  oo as clickOutside,
  eo as tooltip,
  Co as useDialog,
  $o as useModal,
  ko as useToaster
};
