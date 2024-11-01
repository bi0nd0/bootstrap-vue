var Se = Object.defineProperty;
var Be = (e, o, l) => o in e ? Se(e, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[o] = l;
var R = (e, o, l) => Be(e, typeof o != "symbol" ? o + "" : o, l);
import { defineComponent as H, toRefs as N, ref as D, watch as Te, onMounted as oe, openBlock as b, createElementBlock as g, normalizeClass as O, renderSlot as C, normalizeProps as x, guardReactiveProps as A, createElementVNode as s, toDisplayString as E, createBlock as W, Teleport as le, Fragment as P, renderList as U, mergeProps as Z, computed as z, getCurrentInstance as ae, watchEffect as fe, withModifiers as pe, createCommentVNode as J, createVNode as ve, onUnmounted as Le, normalizeStyle as De, createTextVNode as K, resolveComponent as ue, withCtx as te, unref as q, withDirectives as me, vModelSelect as xe, resolveDirective as Ae, Transition as Oe, inject as he, createApp as re } from "vue";
import { Toast as ze, Modal as Ee, Tooltip as He } from "bootstrap";
const Re = { class: "toast-header" }, Ie = ["textContent"], Pe = ["textContent"], Ve = { class: "toast-body" }, Ne = ["textContent"], Fe = /* @__PURE__ */ H({
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
  setup(e, { expose: o, emit: l }) {
    const n = e, v = l, { visible: a, animation: i, autohide: r, delay: c } = N(n), f = D(), k = D();
    Te(a, (L) => {
      u();
    }, { immediate: !0 });
    function M() {
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
    function d() {
      f.value.getOrCreateInstance();
    }
    function _() {
      f.value.getInstance();
    }
    function u() {
      f.value && (a.value === !0 ? M() : $());
    }
    function y() {
      v("hide", f.value);
    }
    function t() {
      v("hidden", f.value);
    }
    function p() {
      v("show", f.value);
    }
    async function S() {
      v("shown", f.value);
    }
    const h = { show: M, hide: $, dispose: T, isShown: m, getOrCreateInstance: d, getInstance: _ };
    return o({ ...h }), oe(() => {
      k.value.addEventListener("hide.bs.toast", y), k.value.addEventListener("hidden.bs.toast", t), k.value.addEventListener("show.bs.toast", p), k.value.addEventListener("shown.bs.toast", S), f.value = new ze(k.value, {
        animation: i.value,
        autohide: r.value,
        delay: c.value
      }), u();
    }), (L, X) => (b(), g("div", {
      ref_key: "toastRef",
      ref: k,
      class: O(["toast", [L.variant ? `text-bg-${L.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(L.$slots, "header", x(A({ ...h })), () => [
        s("div", Re, [
          C(L.$slots, "title", x(A({ ...h })), () => [
            s("strong", {
              class: "me-auto",
              textContent: E(L.title)
            }, null, 8, Ie)
          ], !0),
          C(L.$slots, "subtitle", x(A({ ...h })), () => [
            s("small", {
              textContent: E(L.subtitle)
            }, null, 8, Pe)
          ], !0),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: $
          })
        ])
      ], !0),
      C(L.$slots, "body", x(A({ ...h })), () => [
        s("div", Ve, [
          C(L.$slots, "default", x(A({ ...h })), () => [
            s("span", {
              textContent: E(L.body)
            }, null, 8, Ne)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), G = (e, o) => {
  const l = e.__vccOpts || e;
  for (const [n, v] of o)
    l[n] = v;
  return l;
}, be = /* @__PURE__ */ G(Fe, [["__scopeId", "data-v-c0cdbae8"]]);
function je() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(l) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (l == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Ge = { id: "toast-wrapper" };
let ie;
const Ke = /* @__PURE__ */ H({
  __name: "Toaster",
  setup(e, { expose: o }) {
    const l = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, n = D(/* @__PURE__ */ new Map());
    ie = (a, i = "top right") => {
      const r = je(), c = { ...l, ...a, id: r };
      let f = n.value.get(i);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), n.value.set(i, f);
    };
    function v(a, i) {
      const r = n.value.get(a);
      r == null || r.delete(i);
    }
    return o({ toast: ie }), (a, i) => (b(), W(le, { to: "body" }, [
      s("div", Ge, [
        (b(!0), g(P, null, U(n.value, ([r, c]) => (b(), g("div", {
          key: r,
          class: O(["toast-group", `${r}`])
        }, [
          (b(!0), g(P, null, U(c, (f, k) => (b(), W(be, Z({
            key: f.id,
            ref_for: !0
          }, f, {
            onHidden: (M) => v(r, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Ue = /* @__PURE__ */ G(Ke, [["__scopeId", "data-v-786d1c50"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const Q = (e, o = "") => {
  let l = e.toLowerCase();
  return !Object.values(V).includes(l) || l == "" ? "" : `${o}${l}`;
}, Xe = { class: "modal-content" }, Ye = { class: "modal-header" }, qe = ["innerHTML"], We = { class: "modal-body" }, Ze = ["innerHTML"], Je = { class: "modal-footer" }, Qe = ["innerHTML"], et = ["innerHTML"], ye = /* @__PURE__ */ H({
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
  setup(e, { expose: o, emit: l }) {
    const n = e, {
      backdrop: v,
      keyboard: a,
      focus: i,
      disableOutsideClick: r,
      size: c,
      btnSize: f
    } = N(n), k = l, M = z(() => Q(c.value, "modal-")), $ = z(() => Q(f.value, "btn-")), T = D();
    let m;
    ae();
    const d = () => document.querySelectorAll(".modal.show").length, _ = 1055, u = D(_), y = () => {
      const w = d();
      u.value = _ + w;
    };
    let t;
    function p() {
      return new Promise((j, ho) => {
        y(), m == null || m.show(), t = j, k("onShown", m);
      });
    }
    function S(w = !0) {
      m == null || m.hide(), typeof t == "function" && t(w), k("onHidden", m);
    }
    function h() {
      m == null || m.toggle();
    }
    oe(() => {
      m = new Ee(T.value, {
        backdrop: v == null ? void 0 : v.value,
        keyboard: a.value,
        focus: i.value
      }), fe(() => {
        (n == null ? void 0 : n.visible) === !0 ? m == null || m.show() : m == null || m.hide();
      });
    });
    function L(w) {
      (v == null ? void 0 : v.value) !== "static" && S(!1);
    }
    function X() {
      S(!1);
    }
    function ee() {
      S(!1);
    }
    function F() {
      S(!0);
    }
    o({
      modal: m,
      show: p,
      hide: S,
      toggle: h,
      onHeaderCloseClicked: X,
      onCancelClicked: ee,
      onOkCLicked: F
    });
    const B = { show: p, hide: S, toggle: h, modal: m };
    return (w, j) => (b(), g("div", Z({
      ref_key: "modalElement",
      ref: T,
      class: "modal fade",
      tabindex: "-1"
    }, { ...w.$attrs }, {
      onClick: pe(L, ["self"]),
      style: { zIndex: u.value }
    }), [
      s("div", {
        class: O(["modal-dialog", M.value])
      }, [
        s("div", Xe, [
          C(w.$slots, "header", x(A({ ...B })), () => [
            s("div", Ye, [
              C(w.$slots, "title", x(A({ ...B })), () => [
                s("h5", {
                  class: "modal-title",
                  innerHTML: w.title
                }, null, 8, qe)
              ]),
              C(w.$slots, "header-close-button", x(A({ ...B })), () => [
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: X
                })
              ])
            ])
          ]),
          s("div", We, [
            C(w.$slots, "default", x(A({ ...B })), () => [
              s("span", { innerHTML: w.body }, null, 8, Ze)
            ])
          ]),
          s("div", Je, [
            C(w.$slots, "footer", x(A({ ...B })), () => [
              w.okOnly ? J("", !0) : (b(), g("button", {
                key: 0,
                type: "button",
                class: O(["btn btn-secondary", $.value]),
                onClick: ee
              }, [
                C(w.$slots, "button-cancel", x(A({ ...B })), () => [
                  s("span", { innerHTML: w.textCancel }, null, 8, Qe)
                ])
              ], 2)),
              s("button", {
                type: "button",
                class: O(["btn btn-primary", $.value]),
                onClick: F
              }, [
                C(w.$slots, "button-ok", x(A({ ...B })), () => [
                  s("span", { innerHTML: w.textOk }, null, 8, et)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16));
  }
}), tt = /* @__PURE__ */ H({
  __name: "ModalManager",
  setup(e, { expose: o }) {
    const l = D(void 0), n = D({});
    function v(i = {}) {
      var r;
      return i.okOnly = !1, n.value = i, (r = l.value) == null ? void 0 : r.show();
    }
    function a(i = {}) {
      var r;
      return i.okOnly = !0, n.value = i, (r = l.value) == null ? void 0 : r.show();
    }
    return o({ confirm: v, alert: a }), (i, r) => (b(), W(le, { to: "body" }, [
      ve(ye, Z({
        ref_key: "modalRef",
        ref: l
      }, { ...n.value }), null, 16)
    ]));
  }
}), ot = {
  "data-header": "",
  class: "border-bottom"
}, nt = { class: "d-flex gap-2 p-2" }, st = { class: "p-2" }, lt = {
  "data-footer": "",
  class: "border-top p-2"
}, at = { class: "buttons" }, rt = /* @__PURE__ */ H({
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
    const l = e, { backdrop: n, disableOutsideClick: v, modal: a, size: i, btnSize: r } = N(l), c = () => document.querySelectorAll("dialog[open]").length, f = 1056, k = D(f), M = D(!1), $ = D(!1), T = D(!1), m = D(), d = D(!1), _ = z(() => Q(i.value, "modal-")), u = z(() => Q(r.value, "btn-")), y = z(() => ({
      opening: M.value,
      closing: $.value,
      "no-backdrop": n.value === !1,
      static: d.value
    }));
    let t = null;
    const p = () => {
      const B = c();
      k.value = f + B;
    }, S = async () => (p(), M.value = !0, m.value.addEventListener(
      "animationend",
      () => {
        M.value = !1, T.value = !0;
      },
      { once: !0 }
    ), a.value === !0 ? m.value.showModal() : m.value.show(), new Promise((B, w) => {
      t = B;
    })), h = async (B = !1) => {
      $.value = !0, m.value.addEventListener(
        "animationend",
        () => {
          m.value.close(), $.value = !1, T.value = !1, typeof t == "function" && t(B), t = null;
        },
        { once: !0 }
      );
    }, L = async () => {
      T.value === !0 ? h() : S();
    }, X = () => {
      d.value = !0, setTimeout(() => {
        d.value = !1;
      }, 200);
    }, ee = () => {
      if (n.value === "static" || v.value === !0) {
        X();
        return;
      }
      h(!1);
    };
    if (a.value === !0) {
      let B = function(j) {
        if (n.value === "static" || v.value === !0) {
          X();
          return;
        }
        j.target === m.value && h(!1);
      };
      const w = new AbortController();
      oe(() => {
        document.addEventListener("click", (j) => {
          B(j);
        }, { signal: w.signal });
      }), Le(() => {
        w.abort();
      });
    }
    const F = { show: S, hide: h, toggle: L, dialog: m };
    return o({
      show: S,
      hide: h,
      toggle: L
    }), (B, w) => (b(), g("div", {
      class: "dialog-wrapper",
      style: De({ zIndex: k.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: ee
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: m,
        class: O(y.value)
      }, [
        s("div", {
          class: O(["content", _.value])
        }, [
          C(B.$slots, "header", x(A({ ...F })), () => [
            s("div", ot, [
              s("div", nt, [
                C(B.$slots, "title", x(A({ ...F })), () => [
                  K(E(B.title), 1)
                ], !0),
                C(B.$slots, "header-close-button", {}, () => [
                  s("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: w[0] || (w[0] = (j) => h(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          s("div", st, [
            C(B.$slots, "default", x(A({ ...F })), () => [
              K(E(B.body), 1)
            ], !0)
          ]),
          C(B.$slots, "footer", x(A({ ...F })), () => [
            s("div", lt, [
              s("div", at, [
                B.okOnly ? J("", !0) : (b(), g("button", {
                  key: 0,
                  type: "button",
                  class: O(["btn btn-secondary", u.value]),
                  onClick: w[1] || (w[1] = (j) => h(!1))
                }, [
                  C(B.$slots, "textCancel", x(A({ ...F })), () => [
                    K(E(B.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: O(["btn btn-primary", u.value]),
                  onClick: w[2] || (w[2] = (j) => h(!0))
                }, [
                  C(B.$slots, "textOk", x(A({ ...F })), () => [
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
}), _e = /* @__PURE__ */ G(rt, [["__scopeId", "data-v-dbfc8b0f"]]), ut = /* @__PURE__ */ H({
  __name: "DialogManager",
  setup(e, { expose: o }) {
    const l = D(void 0), n = D({});
    function v(i = {}) {
      var r;
      return i.okOnly = !1, n.value = i, (r = l.value) == null ? void 0 : r.show();
    }
    function a(i = {}) {
      var r;
      return i.okOnly = !0, n.value = i, (r = l.value) == null ? void 0 : r.show();
    }
    return o({ confirm: v, alert: a }), (i, r) => (b(), W(le, { to: "body" }, [
      ve(_e, Z({
        ref_key: "modalRef",
        ref: l
      }, { ...n.value }), null, 16)
    ]));
  }
}), it = { "data-first": "" }, dt = ["disabled", "innerHTML"], ct = { "data-prev": "" }, ft = ["disabled", "innerHTML"], pt = { key: 0 }, vt = ["innerHTML"], mt = ["onClick"], ht = { "data-next": "" }, bt = ["disabled", "innerHTML"], yt = { "data-last": "" }, _t = ["disabled", "innerHTML"], kt = /* @__PURE__ */ H({
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
    function l(t, p = 0) {
      return [...Array(t).keys()].map((S) => S + p);
    }
    const n = o, v = e, { modelValue: a, maxVisibleButtons: i, hideEllipsis: r } = N(v), c = Math.floor(i.value / 2), f = z(() => {
      let t = i.value, p = a.value <= c ? 1 : a.value - c;
      return a.value >= $.value - c && (p = $.value - t + 1), p < 1 && (p = 1), $.value < t && (t = $.value), l(t, p);
    }), k = z(() => a.value <= 1), M = z(() => a.value >= $.value), $ = z(() => {
      const { perPage: t, totalItems: p } = v;
      return Math.ceil(p / t);
    });
    fe(() => {
      $.value > 0 && a.value > $.value && n("update:modelValue", $.value);
    });
    function T(t) {
      const p = i.value - 1;
      return !(r.value === !0 || t === 0 && a.value - c - 1 <= 0 || t === p && a.value + c >= $.value || t > 0 && t < p);
    }
    function m(t) {
      t < 1 && (t = 1), t > $.value && (t = $.value), n("update:modelValue", t);
    }
    function d() {
      n("update:modelValue", 1);
    }
    function _() {
      n("update:modelValue", $.value);
    }
    function u() {
      let t = a.value - 1;
      t < 1 && (t = 1), n("update:modelValue", t);
    }
    function y() {
      let t = a.value + 1;
      t > $.value && (t = $.value), n("update:modelValue", t);
    }
    return (t, p) => (b(), g("ul", {
      class: O(["pagination", t.size])
    }, [
      s("li", it, [
        s("button", {
          class: "",
          disabled: k.value,
          innerHTML: t.firstText,
          onClick: d
        }, null, 8, dt)
      ]),
      s("li", ct, [
        s("button", {
          class: "",
          disabled: k.value,
          innerHTML: t.prevText,
          onClick: u
        }, null, 8, ft)
      ]),
      (b(!0), g(P, null, U(f.value, (S, h) => (b(), g(P, null, [
        T(h) ? (b(), g("li", pt, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: t.ellipsisText
          }, null, 8, vt)
        ])) : (b(), g("li", {
          key: 1,
          "data-prev": "",
          class: O({ active: t.modelValue === S })
        }, [
          s("button", {
            class: "",
            onClick: (L) => m(S)
          }, E(S), 9, mt)
        ], 2))
      ], 64))), 256)),
      s("li", ht, [
        s("button", {
          class: "",
          disabled: M.value,
          innerHTML: t.nextText,
          onClick: y
        }, null, 8, bt)
      ]),
      s("li", yt, [
        s("button", {
          class: "",
          disabled: M.value,
          innerHTML: t.lastText,
          onClick: _
        }, null, 8, _t)
      ])
    ], 2));
  }
}), $t = /* @__PURE__ */ G(kt, [["__scopeId", "data-v-2bfd7085"]]), Ct = { class: "d-inline" }, gt = { class: "fw-bold" }, wt = /* @__PURE__ */ H({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const l = e, n = o, { options: v } = N(l), a = z({
      get: () => l.modelValue,
      set: (i) => n("update:modelValue", i)
    });
    return (i, r) => {
      const c = ue("b-dropdown-item"), f = ue("b-dropdown");
      return b(), W(f, Z({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: te(() => [
          s("div", Ct, [
            C(i.$slots, "default", { selected: a.value }, () => [
              r[0] || (r[0] = s("span", null, "Per page: ", -1)),
              s("span", gt, E(a.value), 1)
            ])
          ])
        ]),
        default: te(() => [
          (b(!0), g(P, null, U(q(v), (k, M) => (b(), W(c, {
            key: k,
            onClick: ($) => a.value = k,
            active: k === i.modelValue
          }, {
            default: te(() => [
              K(E(k), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Mt = ["value"], St = /* @__PURE__ */ H({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const l = e, n = o, { options: v } = N(l), a = z({
      get: () => l.modelValue,
      set: (i) => n("update:modelValue", i)
    });
    return (i, r) => me((b(), g("select", {
      "onUpdate:modelValue": r[0] || (r[0] = (c) => a.value = c)
    }, [
      (b(!0), g(P, null, U(q(v), (c, f) => (b(), g("option", {
        key: c,
        value: c
      }, E(c), 9, Mt))), 128))
    ], 512)), [
      [xe, a.value]
    ]);
  }
});
var Y = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(Y || {});
class Bt {
  constructor(o, l = "ASC", n) {
    R(this, "key");
    R(this, "direction");
    R(this, "sortFn");
    this.key = o, this.direction = l, this.sortFn = n;
  }
}
const de = (e, o) => {
  const l = (r, c) => {
    let f = typeof r, k = typeof c;
    return f == "number" && f == k;
  }, n = (r, c) => r - c, v = (r, c) => (r = r ?? "", c = c ?? "", r.localeCompare(c)), a = (r, c) => l(r, c) ? n : v, i = [...o];
  return i.sort((r, c) => {
    let f = 0;
    for (let k of e) {
      let { key: M, direction: $, sortFn: T } = k, m = $ === "ASC" ? 1 : -1, d = r[M], _ = c[M];
      if (T = typeof T == "function" ? T : a(d, _), f = T(d, _, r, c, o, k, m) * m, f !== 0) return f;
    }
    return f;
  }), i;
}, Tt = ["onClick"], Lt = { class: "th-wrapper" }, Dt = {
  key: 0,
  "data-sort-indicator": ""
}, xt = { class: "sort-index" }, At = { class: "sort-direction" }, Ot = ["onMouseover"], zt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Et = ["colspan"], Ht = ["innerHTML"];
class ne {
  constructor(o = "", l = "", n = !1, v) {
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
    this.key = o, this.label = l, this.sortable = n, this.sortFn = v;
  }
}
const Rt = /* @__PURE__ */ H({
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
    const l = (d) => {
      let _ = [];
      for (const u of d)
        _ = _.concat(Object.keys(u));
      return _ = _.filter((u, y) => _.indexOf(u) == y), _;
    }, n = o, v = e, a = D([]), { fields: i, items: r } = N(v), c = z(() => {
      if (v.externalSort || a.value.length == 0) return v.items;
      const d = [...v.items];
      return de(a.value, d);
    }), f = z(() => {
      let d = i.value, _ = [];
      return d.length === 0 && (d = l([...r.value])), d.reduce((u, y, t) => {
        if (typeof y == "string")
          u.push(new ne(y, y));
        else if (y instanceof ne)
          u.push(y);
        else if (typeof y == "object") {
          const { key: p, label: S, sortable: h, sortFn: L } = y;
          u.push(new ne(p, S, h, L));
        }
        return u;
      }, _);
    });
    function k(d) {
      const _ = a.value.findIndex((u) => u.key === d.key);
      return _ < 0 ? "" : _ + 1;
    }
    function M(d) {
      const _ = a.value.findIndex((y) => y.key === d.key);
      if (_ < 0) return "fas fa-sort";
      const u = a.value[_];
      return u.direction === Y.ASC ? "fas fa-sort-up" : u.direction === Y.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function $(d) {
      const { key: _ } = d, u = a.value.findIndex((y) => y.key === _);
      if (u < 0) {
        const y = new Bt(_, Y.ASC, d.sortFn);
        a.value.push(y);
      } else {
        const y = a.value[u], t = y.direction;
        t === Y.ASC ? y.direction = Y.DESC : t === Y.DESC && a.value.splice(u, 1);
      }
      n("sort", a.value, de);
    }
    function T(d, _, u, y) {
      n("onMouseOverCell", d, _, u, y);
    }
    let m = D(null);
    return oe(() => {
      m.value = ae();
    }), (d, _) => (b(), g("table", Z({ ...d.$attrs }, {
      class: { striped: d.striped, hover: d.hover }
    }), [
      s("thead", null, [
        (b(!0), g(P, null, U(f.value, (u) => (b(), g("th", {
          key: `thead-${u.key}`,
          class: O({ sortable: u.sortable }),
          onClick: (y) => u.sortable && $(u)
        }, [
          s("span", Lt, [
            C(d.$slots, `head(${u.key})`, {
              field: u,
              data: q(m),
              value: u.label
            }, () => [
              K(E(u.label), 1)
            ], !0),
            u.sortable ? (b(), g("span", Dt, [
              s("span", xt, E(k(u)), 1),
              s("span", At, [
                s("i", {
                  class: O(M(u))
                }, null, 2)
              ])
            ])) : J("", !0)
          ])
        ], 10, Tt))), 128))
      ]),
      s("tbody", null, [
        (b(!0), g(P, null, U(c.value, (u, y) => (b(), g(P, {
          key: `trow-${(u == null ? void 0 : u.id) ?? y}`
        }, [
          C(d.$slots, "row", {
            item: u,
            index: y,
            colspan: f.value.length
          }, void 0, !0),
          s("tr", null, [
            (b(!0), g(P, null, U(f.value, (t) => (b(), g("td", {
              key: `tcell-${t.key + ((u == null ? void 0 : u.id) ?? y)}`,
              class: O({ [`tcell-${t == null ? void 0 : t.key}`]: !0 }),
              onMouseover: (p) => T(p, u, y, t)
            }, [
              C(d.$slots, `cell(${t == null ? void 0 : t.key})`, {
                data: q(m),
                item: u,
                field: t,
                value: u[t == null ? void 0 : t.key]
              }, () => [
                K(E(u[t == null ? void 0 : t.key]), 1)
              ], !0)
            ], 42, Ot))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        C(d.$slots, "footer", { data: q(m) }, void 0, !0)
      ]),
      d.showEmpty && c.value.length === 0 ? (b(), g("tr", zt, [
        s("td", {
          colspan: f.value.length
        }, [
          C(d.$slots, "empty", {
            items: c.value,
            data: q(m),
            fields: f.value
          }, () => [
            s("span", { innerHTML: d.emptyText }, null, 8, Ht)
          ], !0)
        ], 8, Et)
      ])) : J("", !0)
    ], 16));
  }
}), It = /* @__PURE__ */ G(Rt, [["__scopeId", "data-v-b1e9b5de"]]);
var ke = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ke || {});
const Pt = { class: "d-inline-block position-relative" }, Vt = ["disabled"], ce = "data-prevent-close", Nt = /* @__PURE__ */ H({
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
  setup(e) {
    const o = D(), l = e, n = D(), { variant: v, centered: a, dropup: i, dropend: r, dropstart: c, menuEnd: f } = N(l), k = D(!1), M = z(() => {
      const p = [];
      return v != null && v.value && p.push(`btn-${v.value}`), l.size && p.push(`btn-${l.size}`), p;
    }), $ = z(() => {
      const p = [];
      return a != null && a.value && p.push("dropdown-center"), i != null && i.value && p.push("dropup"), c != null && c.value && p.push("dropstart"), !(c != null && c.value) && (r != null && r.value) && p.push("dropend"), p.length === 0 ? p.push("dropdown") : p.unshift("btn-group"), p;
    }), T = z(() => {
      const p = [];
      return k.value && p.push("show"), f.value && p.push("dropdown-menu-end"), p;
    });
    function m() {
      k.value = !0;
    }
    function d() {
      k.value = !1;
    }
    function _(p) {
      k.value ? d() : m();
    }
    function u(p) {
      const { target: S } = p;
      (S == null ? void 0 : S.closest(`[${ce}],[${ce}=true]`)) || d();
    }
    function y() {
      k.value && d();
    }
    const t = {
      show: k,
      disabled: l.disabled,
      buttonClasses: M,
      onButtonClicked: _,
      onMenuClicked: u,
      onClickOutside: y,
      open: m,
      close: d
    };
    return (p, S) => {
      const h = Ae("click-outside");
      return b(), g("div", {
        ref_key: "dropDownRef",
        ref: n,
        class: O($.value)
      }, [
        me((b(), g("div", Pt, [
          C(p.$slots, "header", x(A({ ...t })), () => [
            s("button", {
              class: O(["btn dropdown-toggle", M.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: _,
              disabled: p.disabled
            }, [
              C(p.$slots, "button", x(A({ ...t })), () => [
                K(E(p.text), 1)
              ], !0)
            ], 10, Vt)
          ], !0),
          s("ul", {
            ref_key: "dropDownMenuRef",
            ref: o,
            class: O(["dropdown-menu", T.value]),
            onClick: u
          }, [
            C(p.$slots, "default", x(A({ ...t })), void 0, !0)
          ], 2)
        ])), [
          [h, y]
        ])
      ], 2);
    };
  }
}), Ft = /* @__PURE__ */ G(Nt, [["__scopeId", "data-v-f9658383"]]), jt = ["data-prevent-close"], Gt = /* @__PURE__ */ H({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const o = e, { preventClose: l } = N(o);
    return (n, v) => (b(), g("li", {
      "data-prevent-close": q(l) ? "" : null
    }, [
      s("span", {
        class: O(["dropdown-item", { active: n.active }]),
        role: "button",
        tabindex: "0"
      }, [
        C(n.$slots, "default")
      ], 2)
    ], 8, jt));
  }
}), Kt = {}, Ut = { "data-prevent-close": "" }, Xt = { class: "dropdown-header" };
function Yt(e, o) {
  return b(), g("li", Ut, [
    s("h6", Xt, [
      C(e.$slots, "default")
    ])
  ]);
}
const qt = /* @__PURE__ */ G(Kt, [["render", Yt]]), Wt = {};
function Zt(e, o) {
  return b(), g("li", null, o[0] || (o[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Jt = /* @__PURE__ */ G(Wt, [["render", Zt]]), Qt = {
  mounted(e, o, l, n) {
    new He(e, {
      title: o.value,
      placement: o.arg,
      trigger: "hover"
    });
  }
}, eo = (e, o) => {
  function l(a, i) {
    for (; a !== null; ) {
      if (a === i)
        return !0;
      a = a.parentNode;
    }
    return !1;
  }
  const n = new AbortController();
  function v(a, i) {
    document.addEventListener("click", function(r) {
      const c = r.target;
      a && (l(c, a) || i());
    }, { signal: n.signal });
  }
  return v(e, o), n;
}, to = {
  mounted(e, o, l, n) {
    const v = o.value;
    eo(e, v);
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
const oo = { class: "drawer-content" }, no = { class: "drawer-header" }, so = ["innerHTML"], lo = { class: "drawer-body" }, ao = ["innerHTML"], ro = { class: "drawer-footer" }, uo = ["innerHTML"], io = ["innerHTML"], co = /* @__PURE__ */ H({
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
    const l = e, {
      backdrop: n,
      keyboard: v,
      focus: a,
      size: i,
      btnSize: r
    } = N(l), c = z(() => Q(i.value, "drawer-")), f = z(() => Q(r.value, "btn-")), k = D(), M = D(!1), $ = ae();
    let T;
    async function m() {
      return M.value === !0 ? void 0 : new Promise((L, X) => {
        M.value = !0, T = L;
      });
    }
    function d(h = !0) {
      M.value = !1, typeof T == "function" && T(h);
    }
    function _() {
      M.value === !0 ? m() : d(!1);
    }
    function u(h) {
      (n == null ? void 0 : n.value) !== "static" && d(!1);
    }
    function y() {
      d(!1);
    }
    function t() {
      d(!1);
    }
    function p() {
      d(!0);
    }
    function S() {
      M.value === !0 ? se.add($) : se.delete($);
    }
    return o({
      show: m,
      hide: d,
      toggle: _
    }), (h, L) => (b(), W(Oe, {
      onBeforeEnter: S,
      onAfterLeave: S
    }, {
      default: te(() => [
        M.value ? (b(), g("div", Z({
          key: 0,
          ref_key: "drawerElement",
          ref: k,
          class: "drawer",
          tabindex: "-1"
        }, { ...h.$attrs }, {
          onClick: pe(u, ["self"])
        }), [
          s("div", {
            class: O(["drawer-dialog", c.value])
          }, [
            s("div", oo, [
              s("div", no, [
                C(h.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: h.title
                  }, null, 8, so)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: y
                })
              ]),
              s("div", lo, [
                C(h.$slots, "default", {}, () => [
                  s("span", { innerHTML: h.body }, null, 8, ao)
                ], !0)
              ]),
              s("div", ro, [
                C(h.$slots, "footer", {}, () => [
                  h.okOnly ? J("", !0) : (b(), g("button", {
                    key: 0,
                    type: "button",
                    class: O(["ms-auto btn btn-secondary", f.value]),
                    onClick: t
                  }, [
                    C(h.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: h.textCancel }, null, 8, uo)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: O(["btn btn-primary", f.value]),
                    onClick: p
                  }, [
                    C(h.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: h.textOk }, null, 8, io)
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
}), fo = /* @__PURE__ */ G(co, [["__scopeId", "data-v-2e49e8cb"]]), I = "b", $e = "$toaster", Ce = "$modalManager", po = "$dialogManager";
class ge {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const n = re(tt).mount(o);
      this.component = n;
    }
    return this.component;
  }
}
R(ge, "component");
class we {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const n = re(ut).mount(o);
      this.component = n;
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
      const n = re(Ue).mount(o);
      this.component = n;
    }
    return this.component;
  }
}
R(Me, "component");
function ko() {
  return he($e);
}
function $o() {
  return he(Ce);
}
function vo(e) {
  e.component(`${I}-drawer`, fo), e.component(`${I}-modal`, ye), e.component(`${I}-dialog`, _e), e.component(`${I}-pagination`, $t), e.component(`${I}-pagination-dropdown`, wt), e.component(`${I}-pagination-select`, St), e.component(`${I}-dropdown`, Ft), e.component(`${I}-dropdown-item`, Gt), e.component(`${I}-dropdown-header`, qt), e.component(`${I}-dropdown-divider`, Jt), e.component(`${I}-table`, It), e.component(`${I}-toast`, be);
}
function mo(e) {
  e.directive("tooltip", Qt), e.directive("click-outside", to);
}
const Co = {
  install(e) {
    vo(e), mo(e);
    const o = Me.getComponent(), l = ge.getComponent(), n = we.getComponent();
    e.provide($e, o), e.provide(Ce, l), e.provide(po, n);
  }
};
export {
  Co as BootstrapVue,
  _e as DialogBox,
  ut as DialogManager,
  Ft as Dropdown,
  Jt as DropdownDivider,
  qt as DropdownHeader,
  Gt as DropdownItem,
  ye as Modal,
  tt as ModalManager,
  wt as PageSizeDropdown,
  St as PageSizeSelect,
  $t as Pagination,
  It as Table,
  ne as TableFieldDefinition,
  be as Toast,
  Ue as Toaster,
  to as clickOutside,
  Qt as tooltip,
  $o as useModal,
  ko as useToaster
};
