var Be = Object.defineProperty;
var Te = (e, o, a) => o in e ? Be(e, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[o] = a;
var R = (e, o, a) => Te(e, typeof o != "symbol" ? o + "" : o, a);
import { defineComponent as H, toRefs as N, ref as L, watch as De, onMounted as oe, openBlock as y, createElementBlock as g, normalizeClass as O, renderSlot as $, normalizeProps as x, guardReactiveProps as A, createElementVNode as s, toDisplayString as E, createBlock as W, Teleport as le, Fragment as P, renderList as U, mergeProps as Z, computed as z, getCurrentInstance as ae, watchEffect as pe, withModifiers as ve, createCommentVNode as J, createVNode as me, onUnmounted as Le, normalizeStyle as xe, createTextVNode as K, resolveComponent as ie, withCtx as te, unref as q, withDirectives as he, vModelSelect as Ae, resolveDirective as Oe, Transition as ze, inject as re, createApp as ue } from "vue";
import { Toast as Ee, Modal as He, Tooltip as Re } from "bootstrap";
const Ie = { class: "toast-header" }, Pe = ["textContent"], Ve = ["textContent"], Ne = { class: "toast-body" }, Fe = ["textContent"], je = /* @__PURE__ */ H({
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
  setup(e, { expose: o, emit: a }) {
    const t = e, m = a, { visible: l, animation: d, autohide: r, delay: p } = N(t), i = L(), w = L();
    De(l, (T) => {
      u();
    }, { immediate: !0 });
    function C() {
      i.value.show();
    }
    function k() {
      i.value.hide();
    }
    function D() {
      i.value.dispose();
    }
    function v() {
      i.value.isShown();
    }
    function c() {
      i.value.getOrCreateInstance();
    }
    function b() {
      i.value.getInstance();
    }
    function u() {
      i.value && (l.value === !0 ? C() : k());
    }
    function _() {
      m("hide", i.value);
    }
    function n() {
      m("hidden", i.value);
    }
    function S() {
      m("show", i.value);
    }
    async function f() {
      m("shown", i.value);
    }
    const h = { show: C, hide: k, dispose: D, isShown: v, getOrCreateInstance: c, getInstance: b };
    return o({ ...h }), oe(() => {
      w.value.addEventListener("hide.bs.toast", _), w.value.addEventListener("hidden.bs.toast", n), w.value.addEventListener("show.bs.toast", S), w.value.addEventListener("shown.bs.toast", f), i.value = new Ee(w.value, {
        animation: d.value,
        autohide: r.value,
        delay: p.value
      }), u();
    }), (T, X) => (y(), g("div", {
      ref_key: "toastRef",
      ref: w,
      class: O(["toast", [T.variant ? `text-bg-${T.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      $(T.$slots, "header", x(A({ ...h })), () => [
        s("div", Ie, [
          $(T.$slots, "title", x(A({ ...h })), () => [
            s("strong", {
              class: "me-auto",
              textContent: E(T.title)
            }, null, 8, Pe)
          ], !0),
          $(T.$slots, "subtitle", x(A({ ...h })), () => [
            s("small", {
              textContent: E(T.subtitle)
            }, null, 8, Ve)
          ], !0),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: k
          })
        ])
      ], !0),
      $(T.$slots, "body", x(A({ ...h })), () => [
        s("div", Ne, [
          $(T.$slots, "default", x(A({ ...h })), () => [
            s("span", {
              textContent: E(T.body)
            }, null, 8, Fe)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), G = (e, o) => {
  const a = e.__vccOpts || e;
  for (const [t, m] of o)
    a[t] = m;
  return a;
}, be = /* @__PURE__ */ G(je, [["__scopeId", "data-v-c0cdbae8"]]);
function Ge() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const t = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (a == "x" ? t : t & 3 | 8).toString(16);
  });
}
const Ke = { id: "toast-wrapper" };
let de;
const Ue = /* @__PURE__ */ H({
  __name: "Toaster",
  setup(e, { expose: o }) {
    const a = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, t = L(/* @__PURE__ */ new Map());
    de = (l, d = "top right") => {
      const r = Ge(), p = { ...a, ...l, id: r };
      let i = t.value.get(d);
      i instanceof Set || (i = /* @__PURE__ */ new Set()), i.add(p), t.value.set(d, i);
    };
    function m(l, d) {
      const r = t.value.get(l);
      r == null || r.delete(d);
    }
    return o({ toast: de }), (l, d) => (y(), W(le, { to: "body" }, [
      s("div", Ke, [
        (y(!0), g(P, null, U(t.value, ([r, p]) => (y(), g("div", {
          key: r,
          class: O(["toast-group", `${r}`])
        }, [
          (y(!0), g(P, null, U(p, (i, w) => (y(), W(be, Z({
            key: i.id,
            ref_for: !0
          }, i, {
            onHidden: (C) => m(r, i)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Xe = /* @__PURE__ */ G(Ue, [["__scopeId", "data-v-786d1c50"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const Q = (e, o = "") => {
  let a = e.toLowerCase();
  return !Object.values(V).includes(a) || a == "" ? "" : `${o}${a}`;
}, Ye = { class: "modal-content" }, qe = { class: "modal-header" }, We = ["innerHTML"], Ze = { class: "modal-body" }, Je = ["innerHTML"], Qe = { class: "modal-footer" }, et = ["innerHTML"], tt = ["innerHTML"], ye = /* @__PURE__ */ H({
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
  setup(e, { expose: o, emit: a }) {
    const t = e, {
      backdrop: m,
      keyboard: l,
      focus: d,
      disableOutsideClick: r,
      size: p,
      btnSize: i
    } = N(t), w = a, C = z(() => Q(p.value, "modal-")), k = z(() => Q(i.value, "btn-")), D = L();
    let v;
    ae();
    const c = () => document.querySelectorAll(".modal.show").length, b = 1055, u = L(b), _ = () => {
      const M = c();
      u.value = b + M;
    };
    let n;
    function S() {
      return new Promise((j, ho) => {
        _(), v == null || v.show(), n = j, w("onShown", v);
      });
    }
    function f(M = !0) {
      v == null || v.hide(), typeof n == "function" && n(M), w("onHidden", v);
    }
    function h() {
      v == null || v.toggle();
    }
    oe(() => {
      v = new He(D.value, {
        backdrop: m == null ? void 0 : m.value,
        keyboard: l.value,
        focus: d.value
      }), pe(() => {
        (t == null ? void 0 : t.visible) === !0 ? v == null || v.show() : v == null || v.hide();
      });
    });
    function T(M) {
      (m == null ? void 0 : m.value) !== "static" && f(!1);
    }
    function X() {
      f(!1);
    }
    function ee() {
      f(!1);
    }
    function F() {
      f(!0);
    }
    o({
      modal: v,
      show: S,
      hide: f,
      toggle: h,
      onHeaderCloseClicked: X,
      onCancelClicked: ee,
      onOkCLicked: F
    });
    const B = { show: S, hide: f, toggle: h, modal: v };
    return (M, j) => (y(), g("div", Z({
      ref_key: "modalElement",
      ref: D,
      class: "modal fade",
      tabindex: "-1"
    }, { ...M.$attrs }, {
      onClick: ve(T, ["self"]),
      style: { zIndex: u.value }
    }), [
      s("div", {
        class: O(["modal-dialog", C.value])
      }, [
        s("div", Ye, [
          $(M.$slots, "header", x(A({ ...B })), () => [
            s("div", qe, [
              $(M.$slots, "title", x(A({ ...B })), () => [
                s("h5", {
                  class: "modal-title",
                  innerHTML: M.title
                }, null, 8, We)
              ]),
              $(M.$slots, "header-close-button", x(A({ ...B })), () => [
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: X
                })
              ])
            ])
          ]),
          s("div", Ze, [
            $(M.$slots, "default", x(A({ ...B })), () => [
              s("span", { innerHTML: M.body }, null, 8, Je)
            ])
          ]),
          s("div", Qe, [
            $(M.$slots, "footer", x(A({ ...B })), () => [
              M.okOnly ? J("", !0) : (y(), g("button", {
                key: 0,
                type: "button",
                class: O(["btn btn-secondary", k.value]),
                onClick: ee
              }, [
                $(M.$slots, "button-cancel", x(A({ ...B })), () => [
                  s("span", { innerHTML: M.textCancel }, null, 8, et)
                ])
              ], 2)),
              s("button", {
                type: "button",
                class: O(["btn btn-primary", k.value]),
                onClick: F
              }, [
                $(M.$slots, "button-ok", x(A({ ...B })), () => [
                  s("span", { innerHTML: M.textOk }, null, 8, tt)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16));
  }
}), ot = /* @__PURE__ */ H({
  __name: "ModalManager",
  setup(e, { expose: o }) {
    const a = L(void 0), t = L({});
    function m(d = {}) {
      var r;
      return d.okOnly = !1, t.value = d, (r = a.value) == null ? void 0 : r.show();
    }
    function l(d = {}) {
      var r;
      return d.okOnly = !0, t.value = d, (r = a.value) == null ? void 0 : r.show();
    }
    return o({ confirm: m, alert: l }), (d, r) => (y(), W(le, { to: "body" }, [
      me(ye, Z({
        ref_key: "modalRef",
        ref: a
      }, { ...t.value }), null, 16)
    ]));
  }
}), nt = {
  "data-header": "",
  class: "border-bottom"
}, st = { class: "d-flex gap-2 p-2" }, lt = { class: "p-2" }, at = {
  "data-footer": "",
  class: "border-top p-2"
}, rt = { class: "buttons" }, ut = /* @__PURE__ */ H({
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
  setup(e, { expose: o }) {
    const a = e, { backdrop: t, disableOutsideClick: m, modal: l, size: d, btnSize: r } = N(a), p = () => document.querySelectorAll("dialog[open]").length, i = 1056, w = L(i), C = L(!1), k = L(!1), D = L(!1), v = L(), c = L(!1), b = z(() => Q(d.value, "modal-")), u = z(() => Q(r.value, "btn-")), _ = z(() => ({
      opening: C.value,
      closing: k.value,
      "no-backdrop": t.value === !1,
      static: c.value
    }));
    let n = null;
    const S = () => {
      const B = p();
      w.value = i + B;
    }, f = async () => (S(), C.value = !0, v.value.addEventListener(
      "animationend",
      () => {
        C.value = !1, D.value = !0;
      },
      { once: !0 }
    ), l.value === !0 ? v.value.showModal() : v.value.show(), new Promise((B, M) => {
      n = B;
    })), h = async (B = !1) => {
      k.value = !0, v.value.addEventListener(
        "animationend",
        () => {
          v.value.close(), k.value = !1, D.value = !1, typeof n == "function" && n(B), n = null;
        },
        { once: !0 }
      );
    }, T = async () => {
      D.value === !0 ? h() : f();
    }, X = () => {
      c.value = !0, setTimeout(() => {
        c.value = !1;
      }, 200);
    }, ee = () => {
      if (t.value === "static" || m.value === !0) {
        X();
        return;
      }
      h(!1);
    };
    if (l.value === !0) {
      let B = function(j) {
        if (t.value === "static" || m.value === !0) {
          X();
          return;
        }
        j.target === v.value && h(!1);
      };
      const M = new AbortController();
      oe(() => {
        document.addEventListener("click", (j) => {
          B(j);
        }, { signal: M.signal });
      }), Le(() => {
        M.abort();
      });
    }
    const F = { show: f, hide: h, toggle: T, dialog: v };
    return o({
      show: f,
      hide: h,
      toggle: T
    }), (B, M) => (y(), g("div", {
      class: "dialog-wrapper",
      style: xe({ zIndex: w.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: ee
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: v,
        class: O(_.value)
      }, [
        s("div", {
          class: O(["content", b.value])
        }, [
          $(B.$slots, "header", x(A({ ...F })), () => [
            s("div", nt, [
              s("div", st, [
                $(B.$slots, "title", x(A({ ...F })), () => [
                  K(E(B.title), 1)
                ], !0),
                $(B.$slots, "header-close-button", {}, () => [
                  s("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: M[0] || (M[0] = (j) => h(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          s("div", lt, [
            $(B.$slots, "default", x(A({ ...F })), () => [
              K(E(B.body), 1)
            ], !0)
          ]),
          $(B.$slots, "footer", x(A({ ...F })), () => [
            s("div", at, [
              s("div", rt, [
                B.okOnly ? J("", !0) : (y(), g("button", {
                  key: 0,
                  type: "button",
                  class: O(["btn btn-secondary", u.value]),
                  onClick: M[1] || (M[1] = (j) => h(!1))
                }, [
                  $(B.$slots, "textCancel", x(A({ ...F })), () => [
                    K(E(B.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: O(["btn btn-primary", u.value]),
                  onClick: M[2] || (M[2] = (j) => h(!0))
                }, [
                  $(B.$slots, "textOk", x(A({ ...F })), () => [
                    K(E(B.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), _e = /* @__PURE__ */ G(ut, [["__scopeId", "data-v-dbfc8b0f"]]), it = /* @__PURE__ */ H({
  __name: "DialogManager",
  setup(e, { expose: o }) {
    const a = L(void 0), t = L({});
    function m(d = {}) {
      var r;
      return d.okOnly = !1, t.value = d, (r = a.value) == null ? void 0 : r.show();
    }
    function l(d = {}) {
      var r;
      return d.okOnly = !0, t.value = d, (r = a.value) == null ? void 0 : r.show();
    }
    return o({ confirm: m, alert: l }), (d, r) => (y(), W(le, { to: "body" }, [
      me(_e, Z({
        ref_key: "modalRef",
        ref: a
      }, { ...t.value }), null, 16)
    ]));
  }
}), dt = { "data-first": "" }, ct = ["disabled", "innerHTML"], ft = { "data-prev": "" }, pt = ["disabled", "innerHTML"], vt = { key: 0 }, mt = ["innerHTML"], ht = ["onClick"], bt = { "data-next": "" }, yt = ["disabled", "innerHTML"], _t = { "data-last": "" }, kt = ["disabled", "innerHTML"], $t = /* @__PURE__ */ H({
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
  setup(e, { emit: o }) {
    function a(n, S = 0) {
      return [...Array(n).keys()].map((f) => f + S);
    }
    const t = o, m = e, { modelValue: l, maxVisibleButtons: d, hideEllipsis: r } = N(m), p = Math.floor(d.value / 2), i = z(() => {
      let n = d.value, S = l.value <= p ? 1 : l.value - p;
      return l.value >= k.value - p && (S = k.value - n + 1), S < 1 && (S = 1), k.value < n && (n = k.value), a(n, S);
    }), w = z(() => l.value <= 1), C = z(() => l.value >= k.value), k = z(() => {
      const { perPage: n, totalItems: S } = m;
      return Math.ceil(S / n);
    });
    pe(() => {
      k.value > 0 && l.value > k.value && t("update:modelValue", k.value);
    });
    function D(n) {
      const S = d.value - 1;
      return !(r.value === !0 || n === 0 && l.value - p - 1 <= 0 || n === S && l.value + p >= k.value || n > 0 && n < S);
    }
    function v(n) {
      n < 1 && (n = 1), n > k.value && (n = k.value), t("update:modelValue", n);
    }
    function c() {
      t("update:modelValue", 1);
    }
    function b() {
      t("update:modelValue", k.value);
    }
    function u() {
      let n = l.value - 1;
      n < 1 && (n = 1), t("update:modelValue", n);
    }
    function _() {
      let n = l.value + 1;
      n > k.value && (n = k.value), t("update:modelValue", n);
    }
    return (n, S) => (y(), g("ul", {
      class: O(["pagination", n.size])
    }, [
      s("li", dt, [
        s("button", {
          class: "",
          disabled: w.value,
          innerHTML: n.firstText,
          onClick: c
        }, null, 8, ct)
      ]),
      s("li", ft, [
        s("button", {
          class: "",
          disabled: w.value,
          innerHTML: n.prevText,
          onClick: u
        }, null, 8, pt)
      ]),
      (y(!0), g(P, null, U(i.value, (f, h) => (y(), g(P, null, [
        D(h) ? (y(), g("li", vt, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: n.ellipsisText
          }, null, 8, mt)
        ])) : (y(), g("li", {
          key: 1,
          "data-prev": "",
          class: O({ active: n.modelValue === f })
        }, [
          s("button", {
            class: "",
            onClick: (T) => v(f)
          }, E(f), 9, ht)
        ], 2))
      ], 64))), 256)),
      s("li", bt, [
        s("button", {
          class: "",
          disabled: C.value,
          innerHTML: n.nextText,
          onClick: _
        }, null, 8, yt)
      ]),
      s("li", _t, [
        s("button", {
          class: "",
          disabled: C.value,
          innerHTML: n.lastText,
          onClick: b
        }, null, 8, kt)
      ])
    ], 2));
  }
}), Ct = /* @__PURE__ */ G($t, [["__scopeId", "data-v-2bfd7085"]]), gt = { class: "d-inline" }, wt = { class: "fw-bold" }, Mt = /* @__PURE__ */ H({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, t = o, { options: m } = N(a), l = z({
      get: () => a.modelValue,
      set: (d) => t("update:modelValue", d)
    });
    return (d, r) => {
      const p = ie("b-dropdown-item"), i = ie("b-dropdown");
      return y(), W(i, Z({
        variant: "outline-primary",
        size: "sm"
      }, { ...d.$attrs }), {
        button: te(() => [
          s("div", gt, [
            $(d.$slots, "default", { selected: l.value }, () => [
              r[0] || (r[0] = s("span", null, "Per page: ", -1)),
              s("span", wt, E(l.value), 1)
            ])
          ])
        ]),
        default: te(() => [
          (y(!0), g(P, null, U(q(m), (w, C) => (y(), W(p, {
            key: w,
            onClick: (k) => l.value = w,
            active: w === d.modelValue
          }, {
            default: te(() => [
              K(E(w), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), St = ["value"], Bt = /* @__PURE__ */ H({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = e, t = o, { options: m } = N(a), l = z({
      get: () => a.modelValue,
      set: (d) => t("update:modelValue", d)
    });
    return (d, r) => he((y(), g("select", {
      "onUpdate:modelValue": r[0] || (r[0] = (p) => l.value = p)
    }, [
      (y(!0), g(P, null, U(q(m), (p, i) => (y(), g("option", {
        key: p,
        value: p
      }, E(p), 9, St))), 128))
    ], 512)), [
      [Ae, l.value]
    ]);
  }
});
var Y = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Y || {});
class Tt {
  constructor(o, a = "ASC", t) {
    R(this, "key");
    R(this, "direction");
    R(this, "sortFn");
    this.key = o, this.direction = a, this.sortFn = t;
  }
}
const ce = (e, o) => {
  const a = (r, p) => {
    let i = typeof r, w = typeof p;
    return i == "number" && i == w;
  }, t = (r, p) => r - p, m = (r, p) => (r = r ?? "", p = p ?? "", r.localeCompare(p)), l = (r, p) => a(r, p) ? t : m, d = [...o];
  return d.sort((r, p) => {
    let i = 0;
    for (let w of e) {
      let { key: C, direction: k, sortFn: D } = w, v = k === "ASC" ? 1 : -1, c = r[C], b = p[C];
      if (D = typeof D == "function" ? D : l(c, b), i = D(c, b, r, p, o, w, v) * v, i !== 0) return i;
    }
    return i;
  }), d;
}, Dt = ["onClick"], Lt = { class: "th-wrapper" }, xt = {
  key: 0,
  "data-sort-indicator": ""
}, At = { class: "sort-index" }, Ot = { class: "sort-direction" }, zt = ["onMouseover"], Et = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Ht = ["colspan"], Rt = ["innerHTML"];
class ne {
  constructor(o = "", a = "", t = !1, m) {
    R(this, "key");
    // age
    R(this, "label");
    // Person age
    R(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    R(this, "sortFn");
    this.key = o, this.label = a, this.sortable = t, this.sortFn = m;
  }
}
const It = /* @__PURE__ */ H({
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
  setup(e, { emit: o }) {
    const a = (c) => {
      let b = [];
      for (const u of c)
        b = b.concat(Object.keys(u));
      return b = b.filter((u, _) => b.indexOf(u) == _), b;
    }, t = o, m = e, l = L([]), { fields: d, items: r } = N(m), p = z(() => {
      if (m.externalSort || l.value.length == 0) return m.items;
      const c = [...m.items];
      return ce(l.value, c);
    }), i = z(() => {
      let c = d.value, b = [];
      return c.length === 0 && (c = a([...r.value])), c.reduce((u, _, n) => {
        if (typeof _ == "string")
          u.push(new ne(_, _));
        else if (_ instanceof ne)
          u.push(_);
        else if (typeof _ == "object") {
          const { key: S, label: f, sortable: h, sortFn: T } = _;
          u.push(new ne(S, f, h, T));
        }
        return u;
      }, b);
    });
    function w(c) {
      const b = l.value.findIndex((u) => u.key === c.key);
      return b < 0 ? "" : b + 1;
    }
    function C(c) {
      const b = l.value.findIndex((_) => _.key === c.key);
      if (b < 0) return "fas fa-sort";
      const u = l.value[b];
      return u.direction === Y.ASC ? "fas fa-sort-up" : u.direction === Y.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function k(c) {
      const { key: b } = c, u = l.value.findIndex((_) => _.key === b);
      if (u < 0) {
        const _ = new Tt(b, Y.ASC, c.sortFn);
        l.value.push(_);
      } else {
        const _ = l.value[u], n = _.direction;
        n === Y.ASC ? _.direction = Y.DESC : n === Y.DESC && l.value.splice(u, 1);
      }
      t("sort", l.value, ce);
    }
    function D(c, b, u, _) {
      t("onMouseOverCell", c, b, u, _);
    }
    let v = L(null);
    return oe(() => {
      v.value = ae();
    }), (c, b) => (y(), g("table", Z({ ...c.$attrs }, {
      class: { striped: c.striped, hover: c.hover }
    }), [
      s("thead", null, [
        (y(!0), g(P, null, U(i.value, (u) => (y(), g("th", {
          key: `thead-${u.key}`,
          class: O({ sortable: u.sortable }),
          onClick: (_) => u.sortable && k(u)
        }, [
          s("span", Lt, [
            $(c.$slots, `head(${u.key})`, {
              field: u,
              data: q(v),
              value: u.label
            }, () => [
              K(E(u.label), 1)
            ], !0),
            u.sortable ? (y(), g("span", xt, [
              s("span", At, E(w(u)), 1),
              s("span", Ot, [
                s("i", {
                  class: O(C(u))
                }, null, 2)
              ])
            ])) : J("", !0)
          ])
        ], 10, Dt))), 128))
      ]),
      s("tbody", null, [
        (y(!0), g(P, null, U(p.value, (u, _) => (y(), g(P, {
          key: `trow-${(u == null ? void 0 : u.id) ?? _}`
        }, [
          $(c.$slots, "row", {
            item: u,
            index: _,
            colspan: i.value.length
          }, void 0, !0),
          s("tr", null, [
            (y(!0), g(P, null, U(i.value, (n) => (y(), g("td", {
              key: `tcell-${n.key + ((u == null ? void 0 : u.id) ?? _)}`,
              class: O({ [`tcell-${n == null ? void 0 : n.key}`]: !0 }),
              onMouseover: (S) => D(S, u, _, n)
            }, [
              $(c.$slots, `cell(${n == null ? void 0 : n.key})`, {
                data: q(v),
                item: u,
                field: n,
                value: u[n == null ? void 0 : n.key]
              }, () => [
                K(E(u[n == null ? void 0 : n.key]), 1)
              ], !0)
            ], 42, zt))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        $(c.$slots, "footer", { data: q(v) }, void 0, !0)
      ]),
      c.showEmpty && p.value.length === 0 ? (y(), g("tr", Et, [
        s("td", {
          colspan: i.value.length
        }, [
          $(c.$slots, "empty", {
            items: p.value,
            data: q(v),
            fields: i.value
          }, () => [
            s("span", { innerHTML: c.emptyText }, null, 8, Rt)
          ], !0)
        ], 8, Ht)
      ])) : J("", !0)
    ], 16));
  }
}), Pt = /* @__PURE__ */ G(It, [["__scopeId", "data-v-b1e9b5de"]]);
var ke = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ke || {});
const Vt = { class: "d-inline-block position-relative" }, Nt = ["disabled"], fe = "data-prevent-close", Ft = /* @__PURE__ */ H({
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
    size: { default: V.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e, { expose: o }) {
    const a = L(), t = e, m = L(), { variant: l, centered: d, dropup: r, dropend: p, dropstart: i, menuEnd: w } = N(t), C = L(!1), k = z(() => {
      const f = [];
      return l != null && l.value && f.push(`btn-${l.value}`), t.size && f.push(`btn-${t.size}`), f;
    }), D = z(() => {
      const f = [];
      return d != null && d.value && f.push("dropdown-center"), r != null && r.value && f.push("dropup"), i != null && i.value && f.push("dropstart"), !(i != null && i.value) && (p != null && p.value) && f.push("dropend"), f.length === 0 ? f.push("dropdown") : f.unshift("btn-group"), f;
    }), v = z(() => {
      const f = [];
      return C.value && f.push("show"), w.value && f.push("dropdown-menu-end"), f;
    });
    function c() {
      C.value = !0;
    }
    function b() {
      C.value = !1;
    }
    function u(f) {
      C.value ? b() : c();
    }
    function _(f) {
      const { target: h } = f;
      (h == null ? void 0 : h.closest(`[${fe}],[${fe}=true]`)) || b();
    }
    function n() {
      C.value && b();
    }
    const S = {
      show: C,
      disabled: t.disabled,
      buttonClasses: k,
      onButtonClicked: u,
      onMenuClicked: _,
      onClickOutside: n,
      open: c,
      close: b
    };
    return o({
      ...S
    }), (f, h) => {
      const T = Oe("click-outside");
      return y(), g("div", {
        ref_key: "dropDownRef",
        ref: m,
        class: O(D.value)
      }, [
        he((y(), g("div", Vt, [
          $(f.$slots, "header", x(A({ ...S })), () => [
            s("button", {
              class: O(["btn dropdown-toggle", k.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: u,
              disabled: f.disabled
            }, [
              $(f.$slots, "button", x(A({ ...S })), () => [
                K(E(f.text), 1)
              ], !0)
            ], 10, Nt)
          ], !0),
          s("ul", {
            ref_key: "dropDownMenuRef",
            ref: a,
            class: O(["dropdown-menu", v.value]),
            onClick: _
          }, [
            $(f.$slots, "default", x(A({ ...S })), void 0, !0)
          ], 2)
        ])), [
          [T, n]
        ])
      ], 2);
    };
  }
}), jt = /* @__PURE__ */ G(Ft, [["__scopeId", "data-v-79c677ae"]]), Gt = ["data-prevent-close"], Kt = /* @__PURE__ */ H({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const o = e, { preventClose: a } = N(o);
    return (t, m) => (y(), g("li", {
      "data-prevent-close": q(a) ? "" : null
    }, [
      s("span", {
        class: O(["dropdown-item", { active: t.active }]),
        role: "button",
        tabindex: "0"
      }, [
        $(t.$slots, "default")
      ], 2)
    ], 8, Gt));
  }
}), Ut = {}, Xt = { "data-prevent-close": "" }, Yt = { class: "dropdown-header" };
function qt(e, o) {
  return y(), g("li", Xt, [
    s("h6", Yt, [
      $(e.$slots, "default")
    ])
  ]);
}
const Wt = /* @__PURE__ */ G(Ut, [["render", qt]]), Zt = {};
function Jt(e, o) {
  return y(), g("li", null, o[0] || (o[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Qt = /* @__PURE__ */ G(Zt, [["render", Jt]]), eo = {
  mounted(e, o, a, t) {
    new Re(e, {
      title: o.value,
      placement: o.arg,
      trigger: "hover"
    });
  }
}, to = (e, o) => {
  function a(l, d) {
    for (; l !== null; ) {
      if (l === d)
        return !0;
      l = l.parentNode;
    }
    return !1;
  }
  const t = new AbortController();
  function m(l, d) {
    document.addEventListener("click", function(r) {
      const p = r.target;
      l && (a(p, l) || d());
    }, { signal: t.signal });
  }
  return m(e, o), t;
}, oo = {
  mounted(e, o, a, t) {
    const m = o.value;
    to(e, m);
  }
};
class se {
  static add(o) {
    this.list.add(o), document.body.classList.add("drawer-open");
  }
  static delete(o) {
    this.list.delete(o), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
R(se, "list", /* @__PURE__ */ new Set());
const no = { class: "drawer-content" }, so = { class: "drawer-header" }, lo = ["innerHTML"], ao = { class: "drawer-body" }, ro = ["innerHTML"], uo = { class: "drawer-footer" }, io = ["innerHTML"], co = ["innerHTML"], fo = /* @__PURE__ */ H({
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
  setup(e, { expose: o }) {
    const a = e, {
      backdrop: t,
      keyboard: m,
      focus: l,
      size: d,
      btnSize: r
    } = N(a), p = z(() => Q(d.value, "drawer-")), i = z(() => Q(r.value, "btn-")), w = L(), C = L(!1), k = ae();
    let D;
    async function v() {
      return C.value === !0 ? void 0 : new Promise((T, X) => {
        C.value = !0, D = T;
      });
    }
    function c(h = !0) {
      C.value = !1, typeof D == "function" && D(h);
    }
    function b() {
      C.value === !0 ? v() : c(!1);
    }
    function u(h) {
      (t == null ? void 0 : t.value) !== "static" && c(!1);
    }
    function _() {
      c(!1);
    }
    function n() {
      c(!1);
    }
    function S() {
      c(!0);
    }
    function f() {
      C.value === !0 ? se.add(k) : se.delete(k);
    }
    return o({
      show: v,
      hide: c,
      toggle: b
    }), (h, T) => (y(), W(ze, {
      onBeforeEnter: f,
      onAfterLeave: f
    }, {
      default: te(() => [
        C.value ? (y(), g("div", Z({
          key: 0,
          ref_key: "drawerElement",
          ref: w,
          class: "drawer",
          tabindex: "-1"
        }, { ...h.$attrs }, {
          onClick: ve(u, ["self"])
        }), [
          s("div", {
            class: O(["drawer-dialog", p.value])
          }, [
            s("div", no, [
              s("div", so, [
                $(h.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: h.title
                  }, null, 8, lo)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: _
                })
              ]),
              s("div", ao, [
                $(h.$slots, "default", {}, () => [
                  s("span", { innerHTML: h.body }, null, 8, ro)
                ], !0)
              ]),
              s("div", uo, [
                $(h.$slots, "footer", {}, () => [
                  h.okOnly ? J("", !0) : (y(), g("button", {
                    key: 0,
                    type: "button",
                    class: O(["ms-auto btn btn-secondary", i.value]),
                    onClick: n
                  }, [
                    $(h.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: h.textCancel }, null, 8, io)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: O(["btn btn-primary", i.value]),
                    onClick: S
                  }, [
                    $(h.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: h.textOk }, null, 8, co)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : J("", !0)
      ]),
      _: 3
    }));
  }
}), po = /* @__PURE__ */ G(fo, [["__scopeId", "data-v-2e49e8cb"]]), I = "b", $e = "$toaster", Ce = "$modalManager", ge = "$dialogManager";
class we {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const t = ue(ot).mount(o);
      this.component = t;
    }
    return this.component;
  }
}
R(we, "component");
class Me {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const t = ue(it).mount(o);
      this.component = t;
    }
    return this.component;
  }
}
R(Me, "component");
class Se {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const t = ue(Xe).mount(o);
      this.component = t;
    }
    return this.component;
  }
}
R(Se, "component");
function ko() {
  return re($e);
}
function $o() {
  return re(Ce);
}
function Co() {
  return re(ge);
}
function vo(e) {
  e.component(`${I}-drawer`, po), e.component(`${I}-modal`, ye), e.component(`${I}-dialog`, _e), e.component(`${I}-pagination`, Ct), e.component(`${I}-pagination-dropdown`, Mt), e.component(`${I}-pagination-select`, Bt), e.component(`${I}-dropdown`, jt), e.component(`${I}-dropdown-item`, Kt), e.component(`${I}-dropdown-header`, Wt), e.component(`${I}-dropdown-divider`, Qt), e.component(`${I}-table`, Pt), e.component(`${I}-toast`, be);
}
function mo(e) {
  e.directive("tooltip", eo), e.directive("click-outside", oo);
}
const go = {
  install(e) {
    vo(e), mo(e);
    const o = Se.getComponent(), a = we.getComponent(), t = Me.getComponent();
    e.provide($e, o), e.provide(Ce, a), e.provide(ge, t);
  }
};
export {
  go as BootstrapVue,
  _e as DialogBox,
  it as DialogManager,
  jt as Dropdown,
  Qt as DropdownDivider,
  Wt as DropdownHeader,
  Kt as DropdownItem,
  ye as Modal,
  ot as ModalManager,
  Mt as PageSizeDropdown,
  Bt as PageSizeSelect,
  Ct as Pagination,
  Pt as Table,
  ne as TableFieldDefinition,
  be as Toast,
  Xe as Toaster,
  oo as clickOutside,
  eo as tooltip,
  Co as useDialog,
  $o as useModal,
  ko as useToaster
};
