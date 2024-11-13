var xe = Object.defineProperty;
var Ae = (e, o, l) => o in e ? xe(e, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[o] = l;
var P = (e, o, l) => Ae(e, typeof o != "symbol" ? o + "" : o, l);
import { defineComponent as I, toRefs as U, ref as L, watch as ve, onMounted as ne, openBlock as y, createElementBlock as M, normalizeClass as O, renderSlot as g, normalizeProps as D, guardReactiveProps as E, createElementVNode as s, toDisplayString as R, createBlock as J, Teleport as ae, Fragment as F, renderList as Y, mergeProps as Q, computed as H, getCurrentInstance as re, watchEffect as me, withModifiers as he, createCommentVNode as ee, createVNode as ye, onUnmounted as De, normalizeStyle as Ee, createTextVNode as X, resolveComponent as ce, withCtx as oe, unref as Z, withDirectives as be, vModelSelect as Oe, resolveDirective as ze, nextTick as He, Transition as Re, inject as ie, createApp as ue } from "vue";
import { Toast as Ie, Modal as Pe, Tooltip as Ne } from "bootstrap";
const Ve = { class: "toast-header" }, Fe = ["textContent"], Ge = ["textContent"], je = { class: "toast-body" }, Ke = ["textContent"], Ue = /* @__PURE__ */ I({
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
    const t = e, c = l, { visible: r, animation: i, autohide: a, delay: f } = U(t), d = L(), $ = L();
    ve(r, (C) => {
      u();
    }, { immediate: !0 });
    function w() {
      d.value.show();
    }
    function k() {
      d.value.hide();
    }
    function x() {
      d.value.dispose();
    }
    function v() {
      d.value.isShown();
    }
    function p() {
      d.value.getOrCreateInstance();
    }
    function _() {
      d.value.getInstance();
    }
    function u() {
      d.value && (r.value === !0 ? w() : k());
    }
    function b() {
      c("hide", d.value);
    }
    function n() {
      c("hidden", d.value);
    }
    function T() {
      c("show", d.value);
    }
    async function A() {
      c("shown", d.value);
    }
    const h = { show: w, hide: k, dispose: x, isShown: v, getOrCreateInstance: p, getInstance: _ };
    return o({ ...h }), ne(() => {
      $.value.addEventListener("hide.bs.toast", b), $.value.addEventListener("hidden.bs.toast", n), $.value.addEventListener("show.bs.toast", T), $.value.addEventListener("shown.bs.toast", A), d.value = new Ie($.value, {
        animation: i.value,
        autohide: a.value,
        delay: f.value
      }), u();
    }), (C, m) => (y(), M("div", {
      ref_key: "toastRef",
      ref: $,
      class: O(["toast", [C.variant ? `text-bg-${C.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      g(C.$slots, "header", D(E({ ...h })), () => [
        s("div", Ve, [
          g(C.$slots, "title", D(E({ ...h })), () => [
            s("strong", {
              class: "me-auto",
              textContent: R(C.title)
            }, null, 8, Fe)
          ], !0),
          g(C.$slots, "subtitle", D(E({ ...h })), () => [
            s("small", {
              textContent: R(C.subtitle)
            }, null, 8, Ge)
          ], !0),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: k
          })
        ])
      ], !0),
      g(C.$slots, "body", D(E({ ...h })), () => [
        s("div", je, [
          g(C.$slots, "default", D(E({ ...h })), () => [
            s("span", {
              textContent: R(C.body)
            }, null, 8, Ke)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), q = (e, o) => {
  const l = e.__vccOpts || e;
  for (const [t, c] of o)
    l[t] = c;
  return l;
}, _e = /* @__PURE__ */ q(Ue, [["__scopeId", "data-v-c0cdbae8"]]);
function qe() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(l) {
    const t = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (l == "x" ? t : t & 3 | 8).toString(16);
  });
}
const Xe = { id: "toast-wrapper" };
let de;
const Ye = /* @__PURE__ */ I({
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
    }, t = L(/* @__PURE__ */ new Map());
    de = (r, i = "top right") => {
      const a = qe(), f = { ...l, ...r, id: a };
      let d = t.value.get(i);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(f), t.value.set(i, d);
    };
    function c(r, i) {
      const a = t.value.get(r);
      a == null || a.delete(i);
    }
    return o({ toast: de }), (r, i) => (y(), J(ae, { to: "body" }, [
      s("div", Xe, [
        (y(!0), M(F, null, Y(t.value, ([a, f]) => (y(), M("div", {
          key: a,
          class: O(["toast-group", `${a}`])
        }, [
          (y(!0), M(F, null, Y(f, (d, $) => (y(), J(_e, Q({
            key: d.id,
            ref_for: !0
          }, d, {
            onHidden: (w) => c(a, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), We = /* @__PURE__ */ q(Ye, [["__scopeId", "data-v-786d1c50"]]), ke = () => {
  let e = [];
  function o() {
    e = [], document.querySelectorAll("*").forEach((t) => {
      const c = getComputedStyle(t);
      c.position === "sticky" && (e.push({ element: t, originalPosition: c.position }), t.style.position = "relative");
    });
  }
  function l() {
    e.forEach((t) => {
      t.element.style.position = t.originalPosition;
    });
  }
  return { removeStickyElements: o, restoreStickyElements: l };
};
var G = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(G || {});
const te = (e, o = "") => {
  let l = e.toLowerCase();
  return !Object.values(G).includes(l) || l == "" ? "" : `${o}${l}`;
}, Ze = { class: "modal-content" }, Je = { class: "modal-header" }, Qe = ["innerHTML"], et = { class: "modal-body" }, tt = ["innerHTML"], ot = { class: "modal-footer" }, nt = ["innerHTML"], st = ["innerHTML"], ge = /* @__PURE__ */ I({
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
    size: { default: G.STANDARD },
    btnSize: { default: G.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: o, emit: l }) {
    const t = e, {
      backdrop: c,
      keyboard: r,
      focus: i,
      disableOutsideClick: a,
      size: f,
      btnSize: d
    } = U(t), $ = l, w = H(() => te(f.value, "modal-")), k = H(() => te(d.value, "btn-")), x = L();
    let v;
    re();
    const p = () => document.querySelectorAll(".modal.show").length, _ = 1055, u = L(_), b = () => {
      const S = p();
      u.value = _ + S;
    };
    let n;
    const T = ke();
    function A() {
      return new Promise((K, _o) => {
        T.removeStickyElements(), b(), v == null || v.show(), n = K, $("onShown", v);
      });
    }
    function h(S = !0) {
      v == null || v.hide(), typeof n == "function" && n(S), $("onHidden", v), T.restoreStickyElements();
    }
    function C() {
      v == null || v.toggle();
    }
    ne(() => {
      v = new Pe(x.value, {
        backdrop: c == null ? void 0 : c.value,
        keyboard: r.value,
        focus: i.value
      }), me(() => {
        (t == null ? void 0 : t.visible) === !0 ? v == null || v.show() : v == null || v.hide();
      });
    });
    function m(S) {
      (c == null ? void 0 : c.value) !== "static" && h(!1);
    }
    function z() {
      h(!1);
    }
    function j() {
      h(!1);
    }
    function V() {
      h(!0);
    }
    o({
      modal: v,
      show: A,
      hide: h,
      toggle: C,
      onHeaderCloseClicked: z,
      onCancelClicked: j,
      onOkCLicked: V
    });
    const B = { show: A, hide: h, toggle: C, modal: v };
    return (S, K) => (y(), M("div", Q({
      ref_key: "modalElement",
      ref: x,
      class: "modal fade",
      tabindex: "-1"
    }, { ...S.$attrs }, {
      onClick: he(m, ["self"]),
      style: { zIndex: u.value }
    }), [
      s("div", {
        class: O(["modal-dialog", w.value])
      }, [
        s("div", Ze, [
          g(S.$slots, "header", D(E({ ...B })), () => [
            s("div", Je, [
              g(S.$slots, "title", D(E({ ...B })), () => [
                s("h5", {
                  class: "modal-title",
                  innerHTML: S.title
                }, null, 8, Qe)
              ]),
              g(S.$slots, "header-close-button", D(E({ ...B })), () => [
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: z
                })
              ])
            ])
          ]),
          s("div", et, [
            g(S.$slots, "default", D(E({ ...B })), () => [
              s("span", { innerHTML: S.body }, null, 8, tt)
            ])
          ]),
          s("div", ot, [
            g(S.$slots, "footer", D(E({ ...B })), () => [
              S.okOnly ? ee("", !0) : (y(), M("button", {
                key: 0,
                type: "button",
                class: O(["btn btn-secondary", k.value]),
                onClick: j
              }, [
                g(S.$slots, "button-cancel", D(E({ ...B })), () => [
                  s("span", { innerHTML: S.textCancel }, null, 8, nt)
                ])
              ], 2)),
              s("button", {
                type: "button",
                class: O(["btn btn-primary", k.value]),
                onClick: V
              }, [
                g(S.$slots, "button-ok", D(E({ ...B })), () => [
                  s("span", { innerHTML: S.textOk }, null, 8, st)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16));
  }
}), lt = /* @__PURE__ */ I({
  __name: "ModalManager",
  setup(e, { expose: o }) {
    const l = L(void 0), t = L({});
    function c(i = {}) {
      var a;
      return i.okOnly = !1, t.value = i, (a = l.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, t.value = i, (a = l.value) == null ? void 0 : a.show();
    }
    return o({ confirm: c, alert: r }), (i, a) => (y(), J(ae, { to: "body" }, [
      ye(ge, Q({
        ref_key: "modalRef",
        ref: l
      }, { ...t.value }), null, 16)
    ]));
  }
}), at = {
  "data-header": "",
  class: "border-bottom"
}, rt = { class: "d-flex gap-2 p-2" }, it = { class: "p-2" }, ut = {
  "data-footer": "",
  class: "border-top p-2"
}, ct = { class: "buttons" }, dt = /* @__PURE__ */ I({
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
    size: { default: G.STANDARD },
    btnSize: { default: G.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const l = e, { backdrop: t, disableOutsideClick: c, modal: r, size: i, btnSize: a } = U(l), f = () => document.querySelectorAll("dialog[open]").length, d = 1056, $ = L(d), w = L(!1), k = L(!1), x = L(!1), v = L(), p = L(!1), _ = H(() => te(i.value, "modal-")), u = H(() => te(a.value, "btn-")), b = H(() => ({
      opening: w.value,
      closing: k.value,
      "no-backdrop": t.value === !1,
      static: p.value
    }));
    let n = null;
    const T = () => {
      const B = f();
      $.value = d + B;
    }, A = ke(), h = async () => (T(), A.removeStickyElements(), w.value = !0, v.value.addEventListener(
      "animationend",
      () => {
        w.value = !1, x.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? v.value.showModal() : v.value.show(), new Promise((B, S) => {
      n = B;
    })), C = async (B = !1) => {
      k.value = !0, v.value.addEventListener(
        "animationend",
        () => {
          v.value.close(), k.value = !1, x.value = !1, typeof n == "function" && n(B), n = null, A.restoreStickyElements();
        },
        { once: !0 }
      );
    }, m = async () => {
      x.value === !0 ? C() : h();
    }, z = () => {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 200);
    }, j = () => {
      if (t.value === "static" || c.value === !0) {
        z();
        return;
      }
      C(!1);
    };
    if (r.value === !0) {
      let B = function(K) {
        if (t.value === "static" || c.value === !0) {
          z();
          return;
        }
        K.target === v.value && C(!1);
      };
      const S = new AbortController();
      ne(() => {
        document.addEventListener("click", (K) => {
          B(K);
        }, { signal: S.signal });
      }), De(() => {
        S.abort();
      });
    }
    const V = { show: h, hide: C, toggle: m, dialog: v };
    return o({
      show: h,
      hide: C,
      toggle: m
    }), (B, S) => (y(), M("div", {
      class: "dialog-wrapper",
      style: Ee({ zIndex: $.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: j
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: v,
        class: O(b.value)
      }, [
        s("div", {
          class: O(["content", _.value])
        }, [
          g(B.$slots, "header", D(E({ ...V })), () => [
            s("div", at, [
              s("div", rt, [
                g(B.$slots, "title", D(E({ ...V })), () => [
                  X(R(B.title), 1)
                ], !0),
                g(B.$slots, "header-close-button", {}, () => [
                  s("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: S[0] || (S[0] = (K) => C(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          s("div", it, [
            g(B.$slots, "default", D(E({ ...V })), () => [
              X(R(B.body), 1)
            ], !0)
          ]),
          g(B.$slots, "footer", D(E({ ...V })), () => [
            s("div", ut, [
              s("div", ct, [
                B.okOnly ? ee("", !0) : (y(), M("button", {
                  key: 0,
                  type: "button",
                  class: O(["btn btn-secondary", u.value]),
                  onClick: S[1] || (S[1] = (K) => C(!1))
                }, [
                  g(B.$slots, "textCancel", D(E({ ...V })), () => [
                    X(R(B.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: O(["btn btn-primary", u.value]),
                  onClick: S[2] || (S[2] = (K) => C(!0))
                }, [
                  g(B.$slots, "textOk", D(E({ ...V })), () => [
                    X(R(B.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), $e = /* @__PURE__ */ q(dt, [["__scopeId", "data-v-0990c791"]]), pt = /* @__PURE__ */ I({
  __name: "DialogManager",
  setup(e, { expose: o }) {
    const l = L(void 0), t = L({});
    function c(i = {}) {
      var a;
      return i.okOnly = !1, t.value = i, (a = l.value) == null ? void 0 : a.show();
    }
    function r(i = {}) {
      var a;
      return i.okOnly = !0, t.value = i, (a = l.value) == null ? void 0 : a.show();
    }
    return o({ confirm: c, alert: r }), (i, a) => (y(), J(ae, { to: "body" }, [
      ye($e, Q({
        ref_key: "modalRef",
        ref: l
      }, { ...t.value }), null, 16)
    ]));
  }
}), ft = { "data-first": "" }, vt = ["disabled", "innerHTML"], mt = { "data-prev": "" }, ht = ["disabled", "innerHTML"], yt = { key: 0 }, bt = ["innerHTML"], _t = ["onClick"], kt = { "data-next": "" }, gt = ["disabled", "innerHTML"], $t = { "data-last": "" }, Ct = ["disabled", "innerHTML"], wt = /* @__PURE__ */ I({
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
    size: { default: G.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    function l(n, T = 0) {
      return [...Array(n).keys()].map((A) => A + T);
    }
    const t = o, c = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: a } = U(c), f = Math.floor(i.value / 2), d = H(() => {
      let n = i.value, T = r.value <= f ? 1 : r.value - f;
      return r.value >= k.value - f && (T = k.value - n + 1), T < 1 && (T = 1), k.value < n && (n = k.value), l(n, T);
    }), $ = H(() => r.value <= 1), w = H(() => r.value >= k.value), k = H(() => {
      const { perPage: n, totalItems: T } = c;
      return Math.ceil(T / n);
    });
    me(() => {
      k.value > 0 && r.value > k.value && t("update:modelValue", k.value);
    });
    function x(n) {
      const T = i.value - 1;
      return !(a.value === !0 || n === 0 && r.value - f - 1 <= 0 || n === T && r.value + f >= k.value || n > 0 && n < T);
    }
    function v(n) {
      n < 1 && (n = 1), n > k.value && (n = k.value), t("update:modelValue", n);
    }
    function p() {
      t("update:modelValue", 1);
    }
    function _() {
      t("update:modelValue", k.value);
    }
    function u() {
      let n = r.value - 1;
      n < 1 && (n = 1), t("update:modelValue", n);
    }
    function b() {
      let n = r.value + 1;
      n > k.value && (n = k.value), t("update:modelValue", n);
    }
    return (n, T) => (y(), M("ul", {
      class: O(["pagination", n.size])
    }, [
      s("li", ft, [
        s("button", {
          class: "",
          disabled: $.value,
          innerHTML: n.firstText,
          onClick: p
        }, null, 8, vt)
      ]),
      s("li", mt, [
        s("button", {
          class: "",
          disabled: $.value,
          innerHTML: n.prevText,
          onClick: u
        }, null, 8, ht)
      ]),
      (y(!0), M(F, null, Y(d.value, (A, h) => (y(), M(F, null, [
        x(h) ? (y(), M("li", yt, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: n.ellipsisText
          }, null, 8, bt)
        ])) : (y(), M("li", {
          key: 1,
          "data-prev": "",
          class: O({ active: n.modelValue === A })
        }, [
          s("button", {
            class: "",
            onClick: (C) => v(A)
          }, R(A), 9, _t)
        ], 2))
      ], 64))), 256)),
      s("li", kt, [
        s("button", {
          class: "",
          disabled: w.value,
          innerHTML: n.nextText,
          onClick: b
        }, null, 8, gt)
      ]),
      s("li", $t, [
        s("button", {
          class: "",
          disabled: w.value,
          innerHTML: n.lastText,
          onClick: _
        }, null, 8, Ct)
      ])
    ], 2));
  }
}), St = /* @__PURE__ */ q(wt, [["__scopeId", "data-v-2bfd7085"]]), Mt = { class: "d-inline" }, Bt = { class: "fw-bold" }, Tt = /* @__PURE__ */ I({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const l = e, t = o, { options: c } = U(l), r = H({
      get: () => l.modelValue,
      set: (i) => t("update:modelValue", i)
    });
    return (i, a) => {
      const f = ce("b-dropdown-item"), d = ce("b-dropdown");
      return y(), J(d, Q({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: oe(() => [
          s("div", Mt, [
            g(i.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = s("span", null, "Per page: ", -1)),
              s("span", Bt, R(r.value), 1)
            ])
          ])
        ]),
        default: oe(() => [
          (y(!0), M(F, null, Y(Z(c), ($, w) => (y(), J(f, {
            key: $,
            onClick: (k) => r.value = $,
            active: $ === i.modelValue
          }, {
            default: oe(() => [
              X(R($), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Lt = ["value"], xt = /* @__PURE__ */ I({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const l = e, t = o, { options: c } = U(l), r = H({
      get: () => l.modelValue,
      set: (i) => t("update:modelValue", i)
    });
    return (i, a) => be((y(), M("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (f) => r.value = f)
    }, [
      (y(!0), M(F, null, Y(Z(c), (f, d) => (y(), M("option", {
        key: f,
        value: f
      }, R(f), 9, Lt))), 128))
    ], 512)), [
      [Oe, r.value]
    ]);
  }
});
var W = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(W || {});
class At {
  constructor(o, l = "ASC", t) {
    P(this, "key");
    P(this, "direction");
    P(this, "sortFn");
    this.key = o, this.direction = l, this.sortFn = t;
  }
}
const pe = (e, o) => {
  const l = (a, f) => {
    let d = typeof a, $ = typeof f;
    return d == "number" && d == $;
  }, t = (a, f) => a - f, c = (a, f) => (a = a ?? "", f = f ?? "", a.localeCompare(f)), r = (a, f) => l(a, f) ? t : c, i = [...o];
  return i.sort((a, f) => {
    let d = 0;
    for (let $ of e) {
      let { key: w, direction: k, sortFn: x } = $, v = k === "ASC" ? 1 : -1, p = a[w], _ = f[w];
      if (x = typeof x == "function" ? x : r(p, _), d = x(p, _, a, f, o, $, v) * v, d !== 0) return d;
    }
    return d;
  }), i;
}, Dt = ["onClick"], Et = { class: "th-wrapper" }, Ot = {
  key: 0,
  "data-sort-indicator": ""
}, zt = { class: "sort-index" }, Ht = { class: "sort-direction" }, Rt = ["onMouseover"], It = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Pt = ["colspan"], Nt = ["innerHTML"];
class se {
  constructor(o = "", l = "", t = !1, c) {
    P(this, "key");
    // age
    P(this, "label");
    // Person age
    P(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    P(this, "sortFn");
    this.key = o, this.label = l, this.sortable = t, this.sortFn = c;
  }
}
const Vt = /* @__PURE__ */ I({
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
    const l = (p) => {
      let _ = [];
      for (const u of p)
        _ = _.concat(Object.keys(u));
      return _ = _.filter((u, b) => _.indexOf(u) == b), _;
    }, t = o, c = e, r = L([]), { fields: i, items: a } = U(c), f = H(() => {
      if (c.externalSort || r.value.length == 0) return c.items;
      const p = [...c.items];
      return pe(r.value, p);
    }), d = H(() => {
      let p = i.value, _ = [];
      return p.length === 0 && (p = l([...a.value])), p.reduce((u, b, n) => {
        if (typeof b == "string")
          u.push(new se(b, b));
        else if (b instanceof se)
          u.push(b);
        else if (typeof b == "object") {
          const { key: T, label: A, sortable: h, sortFn: C } = b;
          u.push(new se(T, A, h, C));
        }
        return u;
      }, _);
    });
    function $(p) {
      const _ = r.value.findIndex((u) => u.key === p.key);
      return _ < 0 ? "" : _ + 1;
    }
    function w(p) {
      const _ = r.value.findIndex((b) => b.key === p.key);
      if (_ < 0) return "fas fa-sort";
      const u = r.value[_];
      return u.direction === W.ASC ? "fas fa-sort-up" : u.direction === W.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function k(p) {
      const { key: _ } = p, u = r.value.findIndex((b) => b.key === _);
      if (u < 0) {
        const b = new At(_, W.ASC, p.sortFn);
        r.value.push(b);
      } else {
        const b = r.value[u], n = b.direction;
        n === W.ASC ? b.direction = W.DESC : n === W.DESC && r.value.splice(u, 1);
      }
      t("sort", r.value, pe);
    }
    function x(p, _, u, b) {
      t("onMouseOverCell", p, _, u, b);
    }
    let v = L(null);
    return ne(() => {
      v.value = re();
    }), (p, _) => (y(), M("table", Q({ ...p.$attrs }, {
      class: { striped: p.striped, hover: p.hover }
    }), [
      s("thead", null, [
        (y(!0), M(F, null, Y(d.value, (u) => (y(), M("th", {
          key: `thead-${u.key}`,
          class: O({ sortable: u.sortable }),
          onClick: (b) => u.sortable && k(u)
        }, [
          s("span", Et, [
            g(p.$slots, `head(${u.key})`, {
              field: u,
              data: Z(v),
              value: u.label
            }, () => [
              X(R(u.label), 1)
            ], !0),
            u.sortable ? (y(), M("span", Ot, [
              s("span", zt, R($(u)), 1),
              s("span", Ht, [
                s("i", {
                  class: O(w(u))
                }, null, 2)
              ])
            ])) : ee("", !0)
          ])
        ], 10, Dt))), 128))
      ]),
      s("tbody", null, [
        (y(!0), M(F, null, Y(f.value, (u, b) => (y(), M(F, {
          key: `trow-${(u == null ? void 0 : u.id) ?? b}`
        }, [
          g(p.$slots, "row", {
            item: u,
            index: b,
            colspan: d.value.length
          }, void 0, !0),
          s("tr", null, [
            (y(!0), M(F, null, Y(d.value, (n) => (y(), M("td", {
              key: `tcell-${n.key + ((u == null ? void 0 : u.id) ?? b)}`,
              class: O({ [`tcell-${n == null ? void 0 : n.key}`]: !0 }),
              onMouseover: (T) => x(T, u, b, n)
            }, [
              g(p.$slots, `cell(${n == null ? void 0 : n.key})`, {
                data: Z(v),
                item: u,
                field: n,
                value: u[n == null ? void 0 : n.key]
              }, () => [
                X(R(u[n == null ? void 0 : n.key]), 1)
              ], !0)
            ], 42, Rt))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        g(p.$slots, "footer", { data: Z(v) }, void 0, !0)
      ]),
      p.showEmpty && f.value.length === 0 ? (y(), M("tr", It, [
        s("td", {
          colspan: d.value.length
        }, [
          g(p.$slots, "empty", {
            items: f.value,
            data: Z(v),
            fields: d.value
          }, () => [
            s("span", { innerHTML: p.emptyText }, null, 8, Nt)
          ], !0)
        ], 8, Pt)
      ])) : ee("", !0)
    ], 16));
  }
}), Ft = /* @__PURE__ */ q(Vt, [["__scopeId", "data-v-b1e9b5de"]]);
var Ce = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(Ce || {});
const Gt = { class: "d-inline-block position-relative" }, jt = ["disabled"], fe = "data-prevent-close", Kt = /* @__PURE__ */ I({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: Ce.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: G.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: o, emit: l }) {
    const t = L(), c = e, r = L(), i = L(!1), a = L(c.variant), f = L(c.centered), d = L(c.dropup), $ = L(c.dropend), w = L(c.dropstart), k = L(c.menuEnd), x = l, v = H(() => {
      const m = [];
      return a != null && a.value && m.push(`btn-${a.value}`), c.size && m.push(`btn-${c.size}`), m;
    }), p = H(() => {
      const m = [];
      return f != null && f.value && m.push("dropdown-center"), d != null && d.value && m.push("dropup"), w != null && w.value && m.push("dropstart"), !(w != null && w.value) && ($ != null && $.value) && m.push("dropend"), m.length === 0 && m.push("dropdown"), m.unshift("btn-group"), m;
    }), _ = H(() => {
      const m = [];
      return i.value && m.push("show"), k.value && m.push("dropdown-menu-end"), m;
    }), u = () => {
      if (!i.value) return;
      const m = r.value.getBoundingClientRect(), z = t.value.getBoundingClientRect(), j = window.innerHeight - m.bottom, V = m.top, B = window.innerWidth - m.right, S = m.left;
      d.value = j < z.height && V >= z.height, k.value = B < z.width && S >= z.width;
    };
    async function b() {
      i.value = !0, await He(), u();
    }
    function n() {
      i.value = !1;
    }
    function T(m) {
      i.value ? n() : b();
    }
    function A(m) {
      const { target: z } = m;
      (z == null ? void 0 : z.closest(`[${fe}],[${fe}=true]`)) || n();
    }
    function h() {
      i.value && n();
    }
    ve(i, (m, z) => {
      typeof z > "u" || m !== z && (x("toggle", { show: m }), m === !0 ? x("open", { show: m }) : x("close", { show: m }));
    }, { immediate: !0 });
    const C = {
      show: i,
      disabled: c.disabled,
      buttonClasses: v,
      onButtonClicked: T,
      onMenuClicked: A,
      onClickOutside: h,
      open: b,
      close: n
    };
    return o({
      ...C
    }), (m, z) => {
      const j = ze("click-outside");
      return y(), M("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: O([p.value, "dropdown-wrapper"])
      }, [
        be((y(), M("div", Gt, [
          g(m.$slots, "header", D(E({ ...C })), () => [
            s("button", {
              class: O(["btn dropdown-toggle", v.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: T,
              disabled: m.disabled
            }, [
              g(m.$slots, "button", D(E({ ...C })), () => [
                X(R(m.text), 1)
              ], !0)
            ], 10, jt)
          ], !0),
          s("ul", {
            ref_key: "dropDownMenuRef",
            ref: t,
            class: O(["dropdown-menu", _.value]),
            onClick: A
          }, [
            g(m.$slots, "default", D(E({ ...C })), void 0, !0)
          ], 2)
        ])), [
          [j, h]
        ])
      ], 2);
    };
  }
}), Ut = /* @__PURE__ */ q(Kt, [["__scopeId", "data-v-2264cc51"]]), qt = ["data-prevent-close"], Xt = /* @__PURE__ */ I({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const o = e, { preventClose: l } = U(o);
    return (t, c) => (y(), M("li", {
      "data-prevent-close": Z(l) ? "" : null
    }, [
      s("span", {
        class: O(["dropdown-item", { active: t.active }]),
        role: "button",
        tabindex: "0"
      }, [
        g(t.$slots, "default")
      ], 2)
    ], 8, qt));
  }
}), Yt = {}, Wt = { "data-prevent-close": "" }, Zt = { class: "dropdown-header" };
function Jt(e, o) {
  return y(), M("li", Wt, [
    s("h6", Zt, [
      g(e.$slots, "default")
    ])
  ]);
}
const Qt = /* @__PURE__ */ q(Yt, [["render", Jt]]), eo = {};
function to(e, o) {
  return y(), M("li", null, o[0] || (o[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const oo = /* @__PURE__ */ q(eo, [["render", to]]), no = {
  mounted(e, o, l, t) {
    new Ne(e, {
      title: o.value,
      placement: o.arg,
      trigger: "hover"
    });
  }
}, so = (e, o) => {
  function l(r, i) {
    for (; r !== null; ) {
      if (r === i)
        return !0;
      r = r.parentNode;
    }
    return !1;
  }
  const t = new AbortController();
  function c(r, i) {
    document.addEventListener("click", function(a) {
      const f = a.target;
      r && (l(f, r) || i());
    }, { signal: t.signal });
  }
  return c(e, o), t;
}, lo = {
  mounted(e, o, l, t) {
    const c = o.value;
    so(e, c);
  }
};
class le {
  static add(o) {
    this.list.add(o), document.body.classList.add("drawer-open");
  }
  static delete(o) {
    this.list.delete(o), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
P(le, "list", /* @__PURE__ */ new Set());
const ao = { class: "drawer-content" }, ro = { class: "drawer-header" }, io = ["innerHTML"], uo = { class: "drawer-body" }, co = ["innerHTML"], po = { class: "drawer-footer" }, fo = ["innerHTML"], vo = ["innerHTML"], mo = /* @__PURE__ */ I({
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
    size: { default: G.STANDARD },
    btnSize: { default: G.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: o }) {
    const l = e, {
      backdrop: t,
      keyboard: c,
      focus: r,
      size: i,
      btnSize: a
    } = U(l), f = H(() => te(i.value, "drawer-")), d = H(() => te(a.value, "btn-")), $ = L(), w = L(!1), k = re();
    let x;
    async function v() {
      return w.value === !0 ? void 0 : new Promise((C, m) => {
        w.value = !0, x = C;
      });
    }
    function p(h = !0) {
      w.value = !1, typeof x == "function" && x(h);
    }
    function _() {
      w.value === !0 ? v() : p(!1);
    }
    function u(h) {
      (t == null ? void 0 : t.value) !== "static" && p(!1);
    }
    function b() {
      p(!1);
    }
    function n() {
      p(!1);
    }
    function T() {
      p(!0);
    }
    function A() {
      w.value === !0 ? le.add(k) : le.delete(k);
    }
    return o({
      show: v,
      hide: p,
      toggle: _
    }), (h, C) => (y(), J(Re, {
      onBeforeEnter: A,
      onAfterLeave: A
    }, {
      default: oe(() => [
        w.value ? (y(), M("div", Q({
          key: 0,
          ref_key: "drawerElement",
          ref: $,
          class: "drawer",
          tabindex: "-1"
        }, { ...h.$attrs }, {
          onClick: he(u, ["self"])
        }), [
          s("div", {
            class: O(["drawer-dialog", f.value])
          }, [
            s("div", ao, [
              s("div", ro, [
                g(h.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: h.title
                  }, null, 8, io)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: b
                })
              ]),
              s("div", uo, [
                g(h.$slots, "default", {}, () => [
                  s("span", { innerHTML: h.body }, null, 8, co)
                ], !0)
              ]),
              s("div", po, [
                g(h.$slots, "footer", {}, () => [
                  h.okOnly ? ee("", !0) : (y(), M("button", {
                    key: 0,
                    type: "button",
                    class: O(["ms-auto btn btn-secondary", d.value]),
                    onClick: n
                  }, [
                    g(h.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: h.textCancel }, null, 8, fo)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: O(["btn btn-primary", d.value]),
                    onClick: T
                  }, [
                    g(h.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: h.textOk }, null, 8, vo)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : ee("", !0)
      ]),
      _: 3
    }));
  }
}), ho = /* @__PURE__ */ q(mo, [["__scopeId", "data-v-2e49e8cb"]]), N = "b", we = "$toaster", Se = "$modalManager", Me = "$dialogManager";
class Be {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const t = ue(lt).mount(o);
      this.component = t;
    }
    return this.component;
  }
}
P(Be, "component");
class Te {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const t = ue(pt).mount(o);
      this.component = t;
    }
    return this.component;
  }
}
P(Te, "component");
class Le {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const t = ue(We).mount(o);
      this.component = t;
    }
    return this.component;
  }
}
P(Le, "component");
function Co() {
  return ie(we);
}
function wo() {
  return ie(Se);
}
function So() {
  return ie(Me);
}
function yo(e) {
  e.component(`${N}-drawer`, ho), e.component(`${N}-modal`, ge), e.component(`${N}-dialog`, $e), e.component(`${N}-pagination`, St), e.component(`${N}-pagination-dropdown`, Tt), e.component(`${N}-pagination-select`, xt), e.component(`${N}-dropdown`, Ut), e.component(`${N}-dropdown-item`, Xt), e.component(`${N}-dropdown-header`, Qt), e.component(`${N}-dropdown-divider`, oo), e.component(`${N}-table`, Ft), e.component(`${N}-toast`, _e);
}
function bo(e) {
  e.directive("tooltip", no), e.directive("click-outside", lo);
}
const Mo = {
  install(e) {
    yo(e), bo(e);
    const o = Le.getComponent(), l = Be.getComponent(), t = Te.getComponent();
    e.provide(we, o), e.provide(Se, l), e.provide(Me, t);
  }
};
export {
  Mo as BootstrapVue,
  $e as DialogBox,
  pt as DialogManager,
  Ut as Dropdown,
  oo as DropdownDivider,
  Qt as DropdownHeader,
  Xt as DropdownItem,
  ge as Modal,
  lt as ModalManager,
  Tt as PageSizeDropdown,
  xt as PageSizeSelect,
  St as Pagination,
  Ft as Table,
  se as TableFieldDefinition,
  _e as Toast,
  We as Toaster,
  lo as clickOutside,
  no as tooltip,
  So as useDialog,
  wo as useModal,
  Co as useToaster
};
