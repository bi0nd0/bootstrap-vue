var Ue = Object.defineProperty;
var je = (e, n, a) => n in e ? Ue(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a;
var j = (e, n, a) => je(e, typeof n != "symbol" ? n + "" : n, a);
import { defineComponent as V, toRefs as ee, ref as L, watch as Se, onMounted as fe, openBlock as y, createElementBlock as C, normalizeClass as O, renderSlot as w, normalizeProps as D, guardReactiveProps as A, createElementVNode as s, toDisplayString as H, createBlock as se, Teleport as pe, Fragment as q, renderList as oe, mergeProps as re, computed as R, getCurrentInstance as he, watchEffect as Te, withModifiers as Le, createCommentVNode as ue, createVNode as Be, onUnmounted as Ke, normalizeStyle as Ee, createTextVNode as ne, resolveComponent as _e, withCtx as ce, unref as ae, withDirectives as xe, vModelSelect as Xe, reactive as qe, onBeforeUnmount as Ye, resolveDirective as Ze, nextTick as Je, Transition as Qe, inject as ye, createApp as be } from "vue";
import { Toast as et, Modal as tt, Tooltip as nt } from "bootstrap";
const ot = { class: "toast-header" }, st = ["textContent"], lt = ["textContent"], at = { class: "toast-body" }, rt = ["textContent"], it = /* @__PURE__ */ V({
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
  setup(e, { expose: n, emit: a }) {
    const t = e, r = a, { visible: u, animation: f, autohide: l, delay: v } = ee(t), c = L(), g = L();
    Se(u, (M) => {
      i();
    }, { immediate: !0 });
    function S() {
      c.value.show();
    }
    function b() {
      c.value.hide();
    }
    function $() {
      c.value.dispose();
    }
    function m() {
      c.value.isShown();
    }
    function p() {
      c.value.getOrCreateInstance();
    }
    function h() {
      c.value.getInstance();
    }
    function i() {
      c.value && (u.value === !0 ? S() : b());
    }
    function _() {
      r("hide", c.value);
    }
    function o() {
      r("hidden", c.value);
    }
    function B() {
      r("show", c.value);
    }
    async function x() {
      r("shown", c.value);
    }
    const k = { show: S, hide: b, dispose: $, isShown: m, getOrCreateInstance: p, getInstance: h };
    return n({ ...k }), fe(() => {
      g.value.addEventListener("hide.bs.toast", _), g.value.addEventListener("hidden.bs.toast", o), g.value.addEventListener("show.bs.toast", B), g.value.addEventListener("shown.bs.toast", x), c.value = new et(g.value, {
        animation: f.value,
        autohide: l.value,
        delay: v.value
      }), i();
    }), (M, P) => (y(), C("div", {
      ref_key: "toastRef",
      ref: g,
      class: O(["toast", [M.variant ? `text-bg-${M.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      w(M.$slots, "header", D(A({ ...k })), () => [
        s("div", ot, [
          w(M.$slots, "title", D(A({ ...k })), () => [
            s("strong", {
              class: "me-auto",
              textContent: H(M.title)
            }, null, 8, st)
          ], !0),
          w(M.$slots, "subtitle", D(A({ ...k })), () => [
            s("small", {
              textContent: H(M.subtitle)
            }, null, 8, lt)
          ], !0),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: b
          })
        ])
      ], !0),
      w(M.$slots, "body", D(A({ ...k })), () => [
        s("div", at, [
          w(M.$slots, "default", D(A({ ...k })), () => [
            s("span", {
              textContent: H(M.body)
            }, null, 8, rt)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), Z = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, r] of n)
    a[t] = r;
  return a;
}, De = /* @__PURE__ */ Z(it, [["__scopeId", "data-v-c0cdbae8"]]);
function ut() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const t = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (a == "x" ? t : t & 3 | 8).toString(16);
  });
}
const dt = { id: "toast-wrapper" };
let ge;
const ct = /* @__PURE__ */ V({
  __name: "Toaster",
  setup(e, { expose: n }) {
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
    ge = (u, f = "top right") => {
      const l = ut(), v = { ...a, ...u, id: l };
      let c = t.value.get(f);
      c instanceof Set || (c = /* @__PURE__ */ new Set()), c.add(v), t.value.set(f, c);
    };
    function r(u, f) {
      const l = t.value.get(u);
      l == null || l.delete(f);
    }
    return n({ toast: ge }), (u, f) => (y(), se(pe, { to: "body" }, [
      s("div", dt, [
        (y(!0), C(q, null, oe(t.value, ([l, v]) => (y(), C("div", {
          key: l,
          class: O(["toast-group", `${l}`])
        }, [
          (y(!0), C(q, null, oe(v, (c, g) => (y(), se(De, re({
            key: c.id,
            ref_for: !0
          }, c, {
            onHidden: (S) => r(l, c)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), ft = /* @__PURE__ */ Z(ct, [["__scopeId", "data-v-786d1c50"]]), Ae = () => {
  let e = [];
  function n() {
    e = [], document.querySelectorAll("*").forEach((t) => {
      const r = getComputedStyle(t);
      r.position === "sticky" && (e.push({ element: t, originalPosition: r.position }), t.style.position = "relative");
    });
  }
  function a() {
    e.forEach((t) => {
      t.element.style.position = t.originalPosition;
    });
  }
  return { removeStickyElements: n, restoreStickyElements: a };
};
var Y = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(Y || {});
const de = (e, n = "") => {
  let a = e.toLowerCase();
  return !Object.values(Y).includes(a) || a == "" ? "" : `${n}${a}`;
}, pt = { class: "modal-content" }, vt = { class: "modal-header" }, mt = ["innerHTML"], ht = { class: "modal-body" }, yt = ["innerHTML"], bt = { class: "modal-footer" }, _t = ["innerHTML"], gt = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const kt = /* @__PURE__ */ V({
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
    size: { default: Y.STANDARD },
    btnSize: { default: Y.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: n, emit: a }) {
    const t = e, {
      backdrop: r,
      keyboard: u,
      focus: f,
      disableOutsideClick: l,
      size: v,
      btnSize: c
    } = ee(t), g = a, S = R(() => de(v.value, "modal-")), b = R(() => de(c.value, "btn-")), $ = L();
    let m;
    const p = he(), h = () => document.querySelectorAll(".modal.show").length, i = () => typeof window < "u" && window._managedModals ? window._managedModals : [], _ = 1055, o = L(_), B = () => {
      const T = h();
      o.value = _ + T;
    };
    let x;
    const k = Ae();
    function M() {
      return new Promise((X, G) => {
        if (!$.value) return;
        k.removeStickyElements(), B(), $.value.classList.add("managed-modal");
        const U = i(), d = U.length + 1, z = {
          element: $.value,
          priority: d,
          instance: p
        };
        U.push(z), $.value.addEventListener("shown.bs.modal", () => {
          J();
        }, { once: !0 }), m == null || m.show(), x = X, g("onShown", m);
      });
    }
    function P(T = !0) {
      if (!$.value) return;
      const X = i(), G = X.findIndex((U) => U.element === $.value);
      G > -1 && X.splice(G, 1), $.value.addEventListener("hidden.bs.modal", () => {
        $.value && ($.value.style.display = ""), J();
      }, { once: !0 }), m == null || m.hide(), typeof x == "function" && x(T), g("onHidden", m), k.restoreStickyElements();
    }
    function te() {
      m == null || m.toggle();
    }
    const J = () => {
      const T = i();
      if (T.length === 0) return;
      T.sort((G, U) => G.priority - U.priority);
      const X = T[T.length - 1];
      T.forEach((G) => {
        G.element !== X.element ? G.element.style.opacity = "0" : G.element.style.opacity = "1";
      });
    };
    fe(() => {
      m = new tt($.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: u.value,
        focus: f.value
      }), $.value.classList.add("managed-modal"), Te(() => {
        (t == null ? void 0 : t.visible) === !0 ? m == null || m.show() : m == null || m.hide();
      });
    });
    function N(T) {
      (r == null ? void 0 : r.value) !== "static" && P(!1);
    }
    function E() {
      P(!1);
    }
    function I() {
      P(!1);
    }
    function F() {
      P(!0);
    }
    n({
      modal: m,
      show: M,
      hide: P,
      toggle: te,
      onHeaderCloseClicked: E,
      onCancelClicked: I,
      onOkCLicked: F
    });
    const W = { show: M, hide: P, toggle: te, modal: m };
    return (T, X) => (y(), C("div", re({
      ref_key: "modalElement",
      ref: $,
      class: "modal fade",
      tabindex: "-1"
    }, { ...T.$attrs }, {
      onClick: Le(N, ["self"]),
      style: { zIndex: o.value }
    }), [
      s("div", {
        class: O(["modal-dialog", S.value])
      }, [
        s("div", pt, [
          w(T.$slots, "header", D(A({ ...W })), () => [
            s("div", vt, [
              w(T.$slots, "title", D(A({ ...W })), () => [
                s("h5", {
                  class: "modal-title",
                  innerHTML: T.title
                }, null, 8, mt)
              ], !0),
              w(T.$slots, "header-close-button", D(A({ ...W })), () => [
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: E
                })
              ], !0)
            ])
          ], !0),
          s("div", ht, [
            w(T.$slots, "default", D(A({ ...W })), () => [
              s("span", { innerHTML: T.body }, null, 8, yt)
            ], !0)
          ]),
          s("div", bt, [
            w(T.$slots, "footer", D(A({ ...W })), () => [
              T.okOnly ? ue("", !0) : (y(), C("button", {
                key: 0,
                type: "button",
                class: O(["btn btn-secondary", b.value]),
                onClick: I
              }, [
                w(T.$slots, "button-cancel", D(A({ ...W })), () => [
                  s("span", { innerHTML: T.textCancel }, null, 8, _t)
                ], !0)
              ], 2)),
              s("button", {
                type: "button",
                class: O(["btn btn-primary", b.value]),
                onClick: F
              }, [
                w(T.$slots, "button-ok", D(A({ ...W })), () => [
                  s("span", { innerHTML: T.textOk }, null, 8, gt)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), Oe = /* @__PURE__ */ Z(kt, [["__scopeId", "data-v-b8ba4eaa"]]), wt = /* @__PURE__ */ V({
  __name: "ModalManager",
  setup(e, { expose: n }) {
    const a = L(void 0), t = L({});
    function r(f = {}) {
      var l;
      return f.okOnly = !1, t.value = f, (l = a.value) == null ? void 0 : l.show();
    }
    function u(f = {}) {
      var l;
      return f.okOnly = !0, t.value = f, (l = a.value) == null ? void 0 : l.show();
    }
    return n({ confirm: r, alert: u }), (f, l) => (y(), se(pe, { to: "body" }, [
      Be(Oe, re({
        ref_key: "modalRef",
        ref: a
      }, { ...t.value }), null, 16)
    ]));
  }
}), $t = {
  "data-header": "",
  class: "border-bottom"
}, Ct = { class: "d-flex gap-2 p-2" }, Mt = { class: "p-2" }, St = {
  "data-footer": "",
  class: "border-top p-2"
}, Tt = { class: "buttons" }, Lt = /* @__PURE__ */ V({
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
    size: { default: Y.STANDARD },
    btnSize: { default: Y.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: n }) {
    const a = e, { backdrop: t, disableOutsideClick: r, modal: u, size: f, btnSize: l } = ee(a), v = () => document.querySelectorAll("dialog[open]").length, c = 1056, g = L(c), S = L(!1), b = L(!1), $ = L(!1), m = L(), p = L(!1), h = R(() => de(f.value, "modal-")), i = R(() => de(l.value, "btn-")), _ = R(() => ({
      opening: S.value,
      closing: b.value,
      "no-backdrop": t.value === !1,
      static: p.value
    }));
    let o = null;
    const B = () => {
      const E = v();
      g.value = c + E;
    }, x = Ae(), k = async () => (B(), x.removeStickyElements(), S.value = !0, m.value.addEventListener(
      "animationend",
      () => {
        S.value = !1, $.value = !0;
      },
      { once: !0 }
    ), u.value === !0 ? m.value.showModal() : m.value.show(), new Promise((E, I) => {
      o = E;
    })), M = async (E = !1) => {
      b.value = !0, m.value.addEventListener(
        "animationend",
        () => {
          m.value.close(), b.value = !1, $.value = !1, typeof o == "function" && o(E), o = null, x.restoreStickyElements();
        },
        { once: !0 }
      );
    }, P = async () => {
      $.value === !0 ? M() : k();
    }, te = () => {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 200);
    }, J = () => {
      if (t.value === "static" || r.value === !0) {
        te();
        return;
      }
      M(!1);
    };
    if (u.value === !0) {
      let E = function(F) {
        if (t.value === "static" || r.value === !0) {
          te();
          return;
        }
        F.target === m.value && M(!1);
      };
      const I = new AbortController();
      fe(() => {
        document.addEventListener("click", (F) => {
          E(F);
        }, { signal: I.signal });
      }), Ke(() => {
        I.abort();
      });
    }
    const N = { show: k, hide: M, toggle: P, dialog: m };
    return n({
      show: k,
      hide: M,
      toggle: P
    }), (E, I) => (y(), C("div", {
      class: "dialog-wrapper",
      style: Ee({ zIndex: g.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: J
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: m,
        class: O(_.value)
      }, [
        s("div", {
          class: O(["content", h.value])
        }, [
          w(E.$slots, "header", D(A({ ...N })), () => [
            s("div", $t, [
              s("div", Ct, [
                w(E.$slots, "title", D(A({ ...N })), () => [
                  ne(H(E.title), 1)
                ], !0),
                w(E.$slots, "header-close-button", {}, () => [
                  s("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: I[0] || (I[0] = (F) => M(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          s("div", Mt, [
            w(E.$slots, "default", D(A({ ...N })), () => [
              ne(H(E.body), 1)
            ], !0)
          ]),
          w(E.$slots, "footer", D(A({ ...N })), () => [
            s("div", St, [
              s("div", Tt, [
                E.okOnly ? ue("", !0) : (y(), C("button", {
                  key: 0,
                  type: "button",
                  class: O(["btn btn-secondary", i.value]),
                  onClick: I[1] || (I[1] = (F) => M(!1))
                }, [
                  w(E.$slots, "textCancel", D(A({ ...N })), () => [
                    ne(H(E.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: O(["btn btn-primary", i.value]),
                  onClick: I[2] || (I[2] = (F) => M(!0))
                }, [
                  w(E.$slots, "textOk", D(A({ ...N })), () => [
                    ne(H(E.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), Re = /* @__PURE__ */ Z(Lt, [["__scopeId", "data-v-0990c791"]]), Bt = /* @__PURE__ */ V({
  __name: "DialogManager",
  setup(e, { expose: n }) {
    const a = L(void 0), t = L({});
    function r(f = {}) {
      var l;
      return f.okOnly = !1, t.value = f, (l = a.value) == null ? void 0 : l.show();
    }
    function u(f = {}) {
      var l;
      return f.okOnly = !0, t.value = f, (l = a.value) == null ? void 0 : l.show();
    }
    return n({ confirm: r, alert: u }), (f, l) => (y(), se(pe, { to: "body" }, [
      Be(Re, re({
        ref_key: "modalRef",
        ref: a
      }, { ...t.value }), null, 16)
    ]));
  }
}), Et = { "data-first": "" }, xt = ["disabled", "innerHTML"], Dt = { "data-prev": "" }, At = ["disabled", "innerHTML"], Ot = { key: 0 }, Rt = ["innerHTML"], zt = ["onClick"], It = { "data-next": "" }, Ht = ["disabled", "innerHTML"], Pt = { "data-last": "" }, Nt = ["disabled", "innerHTML"], Vt = /* @__PURE__ */ V({
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
    size: { default: Y.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    function a(o, B = 0) {
      return [...Array(o).keys()].map((x) => x + B);
    }
    const t = n, r = e, { modelValue: u, maxVisibleButtons: f, hideEllipsis: l } = ee(r), v = Math.floor(f.value / 2), c = R(() => {
      let o = f.value, B = u.value <= v ? 1 : u.value - v;
      return u.value >= b.value - v && (B = b.value - o + 1), B < 1 && (B = 1), b.value < o && (o = b.value), a(o, B);
    }), g = R(() => u.value <= 1), S = R(() => u.value >= b.value), b = R(() => {
      const { perPage: o, totalItems: B } = r;
      return Math.ceil(B / o);
    });
    Te(() => {
      b.value > 0 && u.value > b.value && t("update:modelValue", b.value);
    });
    function $(o) {
      const B = f.value - 1;
      return !(l.value === !0 || o === 0 && u.value - v - 1 <= 0 || o === B && u.value + v >= b.value || o > 0 && o < B);
    }
    function m(o) {
      o < 1 && (o = 1), o > b.value && (o = b.value), t("update:modelValue", o);
    }
    function p() {
      t("update:modelValue", 1);
    }
    function h() {
      t("update:modelValue", b.value);
    }
    function i() {
      let o = u.value - 1;
      o < 1 && (o = 1), t("update:modelValue", o);
    }
    function _() {
      let o = u.value + 1;
      o > b.value && (o = b.value), t("update:modelValue", o);
    }
    return (o, B) => (y(), C("ul", {
      class: O(["pagination", o.size])
    }, [
      s("li", Et, [
        s("button", {
          class: "",
          disabled: g.value,
          innerHTML: o.firstText,
          onClick: p
        }, null, 8, xt)
      ]),
      s("li", Dt, [
        s("button", {
          class: "",
          disabled: g.value,
          innerHTML: o.prevText,
          onClick: i
        }, null, 8, At)
      ]),
      (y(!0), C(q, null, oe(c.value, (x, k) => (y(), C(q, null, [
        $(k) ? (y(), C("li", Ot, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: o.ellipsisText
          }, null, 8, Rt)
        ])) : (y(), C("li", {
          key: 1,
          "data-prev": "",
          class: O({ active: o.modelValue === x })
        }, [
          s("button", {
            class: "",
            onClick: (M) => m(x)
          }, H(x), 9, zt)
        ], 2))
      ], 64))), 256)),
      s("li", It, [
        s("button", {
          class: "",
          disabled: S.value,
          innerHTML: o.nextText,
          onClick: _
        }, null, 8, Ht)
      ]),
      s("li", Pt, [
        s("button", {
          class: "",
          disabled: S.value,
          innerHTML: o.lastText,
          onClick: h
        }, null, 8, Nt)
      ])
    ], 2));
  }
}), Ft = /* @__PURE__ */ Z(Vt, [["__scopeId", "data-v-2bfd7085"]]), Wt = { class: "d-inline" }, Gt = { class: "fw-bold" }, Ut = /* @__PURE__ */ V({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const a = e, t = n, { options: r } = ee(a), u = R({
      get: () => a.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    return (f, l) => {
      const v = _e("b-dropdown-item"), c = _e("b-dropdown");
      return y(), se(c, re({
        variant: "outline-primary",
        size: "sm"
      }, { ...f.$attrs }), {
        button: ce(() => [
          s("div", Wt, [
            w(f.$slots, "default", { selected: u.value }, () => [
              l[0] || (l[0] = s("span", null, "Per page: ", -1)),
              s("span", Gt, H(u.value), 1)
            ])
          ])
        ]),
        default: ce(() => [
          (y(!0), C(q, null, oe(ae(r), (g, S) => (y(), se(v, {
            key: g,
            onClick: (b) => u.value = g,
            active: g === f.modelValue
          }, {
            default: ce(() => [
              ne(H(g), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), jt = ["value"], Kt = /* @__PURE__ */ V({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const a = e, t = n, { options: r } = ee(a), u = R({
      get: () => a.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    return (f, l) => xe((y(), C("select", {
      "onUpdate:modelValue": l[0] || (l[0] = (v) => u.value = v)
    }, [
      (y(!0), C(q, null, oe(ae(r), (v, c) => (y(), C("option", {
        key: v,
        value: v
      }, H(v), 9, jt))), 128))
    ], 512)), [
      [Xe, u.value]
    ]);
  }
});
var le = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(le || {});
class Xt {
  constructor(n, a = "ASC", t) {
    j(this, "key");
    j(this, "direction");
    j(this, "sortFn");
    this.key = n, this.direction = a, this.sortFn = t;
  }
}
const ke = (e, n) => {
  const a = (l, v) => {
    let c = typeof l, g = typeof v;
    return c == "number" && c == g;
  }, t = (l, v) => l - v, r = (l, v) => (l = l ?? "", v = v ?? "", l.localeCompare(v)), u = (l, v) => a(l, v) ? t : r, f = [...n];
  return f.sort((l, v) => {
    let c = 0;
    for (let g of e) {
      let { key: S, direction: b, sortFn: $ } = g, m = b === "ASC" ? 1 : -1, p = l[S], h = v[S];
      if ($ = typeof $ == "function" ? $ : u(p, h), c = $(p, h, l, v, n, g, m) * m, c !== 0) return c;
    }
    return c;
  }), f;
}, qt = ["onClick"], Yt = { class: "th-wrapper" }, Zt = {
  key: 0,
  "data-sort-indicator": ""
}, Jt = { class: "sort-index" }, Qt = { class: "sort-direction" }, en = ["onMouseover"], tn = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, nn = ["colspan"], on = ["innerHTML"];
class ve {
  constructor(n = "", a = "", t = !1, r) {
    j(this, "key");
    // age
    j(this, "label");
    // Person age
    j(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    j(this, "sortFn");
    this.key = n, this.label = a, this.sortable = t, this.sortFn = r;
  }
}
const sn = /* @__PURE__ */ V({
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
  setup(e, { emit: n }) {
    const a = (p) => {
      let h = [];
      for (const i of p)
        h = h.concat(Object.keys(i));
      return h = h.filter((i, _) => h.indexOf(i) == _), h;
    }, t = n, r = e, u = L([]), { fields: f, items: l } = ee(r), v = R(() => {
      if (r.externalSort || u.value.length == 0) return r.items;
      const p = [...r.items];
      return ke(u.value, p);
    }), c = R(() => {
      let p = f.value, h = [];
      return p.length === 0 && (p = a([...l.value])), p.reduce((i, _, o) => {
        if (typeof _ == "string")
          i.push(new ve(_, _));
        else if (_ instanceof ve)
          i.push(_);
        else if (typeof _ == "object") {
          const { key: B, label: x, sortable: k, sortFn: M } = _;
          i.push(new ve(B, x, k, M));
        }
        return i;
      }, h);
    });
    function g(p) {
      const h = u.value.findIndex((i) => i.key === p.key);
      return h < 0 ? "" : h + 1;
    }
    function S(p) {
      const h = u.value.findIndex((_) => _.key === p.key);
      if (h < 0) return "fas fa-sort";
      const i = u.value[h];
      return i.direction === le.ASC ? "fas fa-sort-up" : i.direction === le.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function b(p) {
      const { key: h } = p, i = u.value.findIndex((_) => _.key === h);
      if (i < 0) {
        const _ = new Xt(h, le.ASC, p.sortFn);
        u.value.push(_);
      } else {
        const _ = u.value[i], o = _.direction;
        o === le.ASC ? _.direction = le.DESC : o === le.DESC && u.value.splice(i, 1);
      }
      t("sort", u.value, ke);
    }
    function $(p, h, i, _) {
      t("onMouseOverCell", p, h, i, _);
    }
    let m = L(null);
    return fe(() => {
      m.value = he();
    }), (p, h) => (y(), C("table", re({ ...p.$attrs }, {
      class: { striped: p.striped, hover: p.hover }
    }), [
      s("thead", null, [
        (y(!0), C(q, null, oe(c.value, (i) => (y(), C("th", {
          key: `thead-${i.key}`,
          class: O({ sortable: i.sortable }),
          onClick: (_) => i.sortable && b(i)
        }, [
          s("span", Yt, [
            w(p.$slots, `head(${i.key})`, {
              field: i,
              data: ae(m),
              value: i.label
            }, () => [
              ne(H(i.label), 1)
            ], !0),
            i.sortable ? (y(), C("span", Zt, [
              s("span", Jt, H(g(i)), 1),
              s("span", Qt, [
                s("i", {
                  class: O(S(i))
                }, null, 2)
              ])
            ])) : ue("", !0)
          ])
        ], 10, qt))), 128))
      ]),
      s("tbody", null, [
        (y(!0), C(q, null, oe(v.value, (i, _) => (y(), C(q, {
          key: `trow-${(i == null ? void 0 : i.id) ?? _}`
        }, [
          w(p.$slots, "row", {
            item: i,
            index: _,
            colspan: c.value.length
          }, void 0, !0),
          s("tr", null, [
            (y(!0), C(q, null, oe(c.value, (o) => (y(), C("td", {
              key: `tcell-${o.key + ((i == null ? void 0 : i.id) ?? _)}`,
              class: O({ [`tcell-${o == null ? void 0 : o.key}`]: !0 }),
              onMouseover: (B) => $(B, i, _, o)
            }, [
              w(p.$slots, `cell(${o == null ? void 0 : o.key})`, {
                data: ae(m),
                item: i,
                field: o,
                value: i[o == null ? void 0 : o.key]
              }, () => [
                ne(H(i[o == null ? void 0 : o.key]), 1)
              ], !0)
            ], 42, en))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        w(p.$slots, "footer", { data: ae(m) }, void 0, !0)
      ]),
      p.showEmpty && v.value.length === 0 ? (y(), C("tr", tn, [
        s("td", {
          colspan: c.value.length
        }, [
          w(p.$slots, "empty", {
            items: v.value,
            data: ae(m),
            fields: c.value
          }, () => [
            s("span", { innerHTML: p.emptyText }, null, 8, on)
          ], !0)
        ], 8, nn)
      ])) : ue("", !0)
    ], 16));
  }
}), ln = /* @__PURE__ */ Z(sn, [["__scopeId", "data-v-b1e9b5de"]]);
var ze = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ze || {});
const an = ["disabled"], we = 1050, $e = "scroll", Ce = "resize", Me = "data-prevent-close", rn = /* @__PURE__ */ V({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: ze.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: Y.STANDARD },
    disabled: { type: Boolean },
    appendToBody: { type: Boolean, default: !1 },
    menuContainer: {}
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: n, emit: a }) {
    const t = L(null), r = e, u = L(null), f = L(null), l = L(!1), v = L(r.variant), c = L(r.centered), g = L(r.dropup), S = L(r.dropend), b = L(r.dropstart), $ = L(r.menuEnd), m = R(() => r.appendToBody ? r.menuContainer ? r.menuContainer : typeof document > "u" ? null : document.body : null), p = R(() => r.appendToBody && m.value !== null), h = qe({
      top: "0px",
      left: "0px",
      minWidth: "0px",
      position: "fixed",
      zIndex: String(we),
      right: "auto"
    }), i = R(() => p.value ? h : void 0), _ = a, o = R(() => {
      const d = [];
      return v != null && v.value && d.push(`btn-${v.value}`), r.size && d.push(`btn-${r.size}`), d;
    }), B = R(() => {
      const d = [];
      return c != null && c.value && d.push("dropdown-center"), g != null && g.value && d.push("dropup"), b != null && b.value && d.push("dropstart"), !(b != null && b.value) && (S != null && S.value) && d.push("dropend"), d.length === 0 && d.push("dropdown"), d.unshift("btn-group"), d;
    }), x = R(() => {
      const d = [];
      return l.value && d.push("show"), $.value && d.push("dropdown-menu-end"), d;
    }), k = () => {
      const d = f.value;
      return d ? d.getBoundingClientRect() : null;
    }, M = () => {
      const d = t.value;
      return d ? d.getBoundingClientRect() : null;
    }, P = () => {
      if (!l.value) return;
      const d = k(), z = M();
      if (!d || !z) return;
      const Q = window.innerHeight - d.bottom, ie = d.top, We = window.innerWidth - d.right, Ge = d.left;
      g.value = Q < z.height && ie >= z.height, $.value = We < z.width && Ge >= z.width;
    }, te = () => {
      if (!p.value || !l.value) return;
      const d = k(), z = M();
      if (!d || !z) return;
      let Q = d.bottom, ie = d.left;
      b.value ? (Q = d.top, ie = d.left - z.width) : S.value ? (Q = d.top, ie = d.right) : (g.value && (Q = d.top - z.height), $.value && (ie = d.right - z.width)), h.top = `${Math.round(Q)}px`, h.left = `${Math.round(ie)}px`, h.minWidth = `${Math.round(d.width)}px`, h.position = "fixed", h.zIndex = String(we), h.right = "auto";
    };
    let J = !1;
    const N = () => {
      P(), te();
    }, E = () => {
      J || typeof window > "u" || (window.addEventListener($e, N, !0), window.addEventListener(Ce, N), J = !0);
    }, I = () => {
      !J || typeof window > "u" || (window.removeEventListener($e, N, !0), window.removeEventListener(Ce, N), J = !1);
    };
    async function F() {
      l.value = !0, await Je(), P(), p.value && (te(), E());
    }
    function W() {
      l.value = !1, I();
    }
    function T(d) {
      l.value ? W() : F();
    }
    function X(d) {
      const { target: z } = d;
      (z == null ? void 0 : z.closest(`[${Me}],[${Me}=true]`)) || W();
    }
    function G() {
      l.value && W();
    }
    Se(l, (d, z) => {
      typeof z > "u" || d !== z && (_("toggle", { show: d }), d === !0 ? _("open", { show: d }) : _("close", { show: d }), d || I());
    }, { immediate: !0 }), Ye(() => {
      I();
    });
    const U = {
      show: l,
      disabled: r.disabled,
      buttonClasses: o,
      onButtonClicked: T,
      onMenuClicked: X,
      onClickOutside: G,
      open: F,
      close: W
    };
    return n({
      ...U
    }), (d, z) => {
      const Q = Ze("click-outside");
      return y(), C("div", {
        ref_key: "dropDownRef",
        ref: u,
        class: O([B.value, "dropdown-wrapper"])
      }, [
        xe((y(), C("div", {
          ref_key: "triggerRef",
          ref: f,
          class: "d-inline-block position-relative"
        }, [
          w(d.$slots, "header", D(A({ ...U })), () => [
            s("button", {
              class: O(["btn dropdown-toggle", o.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: T,
              disabled: d.disabled
            }, [
              w(d.$slots, "button", D(A({ ...U })), () => [
                ne(H(d.text), 1)
              ], !0)
            ], 10, an)
          ], !0),
          p.value ? (y(), se(pe, {
            key: 0,
            to: m.value
          }, [
            s("ul", {
              ref_key: "dropDownMenuRef",
              ref: t,
              class: O(["dropdown-menu", x.value]),
              style: Ee(i.value),
              onClick: X
            }, [
              w(d.$slots, "default", D(A({ ...U })), void 0, !0)
            ], 6)
          ], 8, ["to"])) : (y(), C("ul", {
            key: 1,
            ref_key: "dropDownMenuRef",
            ref: t,
            class: O(["dropdown-menu", x.value]),
            onClick: X
          }, [
            w(d.$slots, "default", D(A({ ...U })), void 0, !0)
          ], 2))
        ])), [
          [Q, G]
        ])
      ], 2);
    };
  }
}), un = /* @__PURE__ */ Z(rn, [["__scopeId", "data-v-c0157a2f"]]), dn = ["data-prevent-close"], cn = /* @__PURE__ */ V({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const n = e, { preventClose: a } = ee(n);
    return (t, r) => (y(), C("li", {
      "data-prevent-close": ae(a) ? "" : null
    }, [
      s("span", {
        class: O(["dropdown-item", { active: t.active }]),
        role: "button",
        tabindex: "0"
      }, [
        w(t.$slots, "default")
      ], 2)
    ], 8, dn));
  }
}), fn = {}, pn = { "data-prevent-close": "" }, vn = { class: "dropdown-header" };
function mn(e, n) {
  return y(), C("li", pn, [
    s("h6", vn, [
      w(e.$slots, "default")
    ])
  ]);
}
const hn = /* @__PURE__ */ Z(fn, [["render", mn]]), yn = {};
function bn(e, n) {
  return y(), C("li", null, n[0] || (n[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const _n = /* @__PURE__ */ Z(yn, [["render", bn]]), gn = {
  mounted(e, n, a, t) {
    new nt(e, {
      title: n.value,
      placement: n.arg,
      trigger: "hover"
    });
  }
}, kn = (e, n) => {
  function a(u, f) {
    for (; u !== null; ) {
      if (u === f)
        return !0;
      u = u.parentNode;
    }
    return !1;
  }
  const t = new AbortController();
  function r(u, f) {
    document.addEventListener("click", function(l) {
      const v = l.target;
      u && (a(v, u) || f());
    }, { signal: t.signal });
  }
  return r(e, n), t;
}, wn = {
  mounted(e, n, a, t) {
    const r = n.value;
    kn(e, r);
  }
};
class me {
  static add(n) {
    this.list.add(n), document.body.classList.add("drawer-open");
  }
  static delete(n) {
    this.list.delete(n), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
j(me, "list", /* @__PURE__ */ new Set());
const $n = { class: "drawer-content" }, Cn = { class: "drawer-header" }, Mn = ["innerHTML"], Sn = { class: "drawer-body" }, Tn = ["innerHTML"], Ln = { class: "drawer-footer" }, Bn = ["innerHTML"], En = ["innerHTML"], xn = /* @__PURE__ */ V({
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
    size: { default: Y.STANDARD },
    btnSize: { default: Y.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: n }) {
    const a = e, {
      backdrop: t,
      keyboard: r,
      focus: u,
      size: f,
      btnSize: l
    } = ee(a), v = R(() => de(f.value, "drawer-")), c = R(() => de(l.value, "btn-")), g = L(), S = L(!1), b = he();
    let $;
    async function m() {
      return S.value === !0 ? void 0 : new Promise((M, P) => {
        S.value = !0, $ = M;
      });
    }
    function p(k = !0) {
      S.value = !1, typeof $ == "function" && $(k);
    }
    function h() {
      S.value === !0 ? m() : p(!1);
    }
    function i(k) {
      (t == null ? void 0 : t.value) !== "static" && p(!1);
    }
    function _() {
      p(!1);
    }
    function o() {
      p(!1);
    }
    function B() {
      p(!0);
    }
    function x() {
      S.value === !0 ? me.add(b) : me.delete(b);
    }
    return n({
      show: m,
      hide: p,
      toggle: h
    }), (k, M) => (y(), se(Qe, {
      onBeforeEnter: x,
      onAfterLeave: x
    }, {
      default: ce(() => [
        S.value ? (y(), C("div", re({
          key: 0,
          ref_key: "drawerElement",
          ref: g,
          class: "drawer",
          tabindex: "-1"
        }, { ...k.$attrs }, {
          onClick: Le(i, ["self"])
        }), [
          s("div", {
            class: O(["drawer-dialog", v.value])
          }, [
            s("div", $n, [
              s("div", Cn, [
                w(k.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: k.title
                  }, null, 8, Mn)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: _
                })
              ]),
              s("div", Sn, [
                w(k.$slots, "default", {}, () => [
                  s("span", { innerHTML: k.body }, null, 8, Tn)
                ], !0)
              ]),
              s("div", Ln, [
                w(k.$slots, "footer", {}, () => [
                  k.okOnly ? ue("", !0) : (y(), C("button", {
                    key: 0,
                    type: "button",
                    class: O(["ms-auto btn btn-secondary", c.value]),
                    onClick: o
                  }, [
                    w(k.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: k.textCancel }, null, 8, Bn)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: O(["btn btn-primary", c.value]),
                    onClick: B
                  }, [
                    w(k.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: k.textOk }, null, 8, En)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : ue("", !0)
      ]),
      _: 3
    }));
  }
}), Dn = /* @__PURE__ */ Z(xn, [["__scopeId", "data-v-2e49e8cb"]]), K = "b", Ie = "$toaster", He = "$modalManager", Pe = "$dialogManager";
class Ne {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const t = be(wt).mount(n);
      this.component = t;
    }
    return this.component;
  }
}
j(Ne, "component");
class Ve {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const t = be(Bt).mount(n);
      this.component = t;
    }
    return this.component;
  }
}
j(Ve, "component");
class Fe {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const t = be(ft).mount(n);
      this.component = t;
    }
    return this.component;
  }
}
j(Fe, "component");
function Hn() {
  return ye(Ie);
}
function Pn() {
  return ye(He);
}
function Nn() {
  return ye(Pe);
}
function An(e) {
  e.component(`${K}-drawer`, Dn), e.component(`${K}-modal`, Oe), e.component(`${K}-dialog`, Re), e.component(`${K}-pagination`, Ft), e.component(`${K}-pagination-dropdown`, Ut), e.component(`${K}-pagination-select`, Kt), e.component(`${K}-dropdown`, un), e.component(`${K}-dropdown-item`, cn), e.component(`${K}-dropdown-header`, hn), e.component(`${K}-dropdown-divider`, _n), e.component(`${K}-table`, ln), e.component(`${K}-toast`, De);
}
function On(e) {
  e.directive("tooltip", gn), e.directive("click-outside", wn);
}
const Vn = {
  install(e) {
    An(e), On(e);
    const n = Fe.getComponent(), a = Ne.getComponent(), t = Ve.getComponent();
    e.provide(Ie, n), e.provide(He, a), e.provide(Pe, t);
  }
};
export {
  Vn as BootstrapVue,
  Re as DialogBox,
  Bt as DialogManager,
  un as Dropdown,
  _n as DropdownDivider,
  hn as DropdownHeader,
  cn as DropdownItem,
  Oe as Modal,
  wt as ModalManager,
  Ut as PageSizeDropdown,
  Kt as PageSizeSelect,
  Ft as Pagination,
  ln as Table,
  ve as TableFieldDefinition,
  De as Toast,
  ft as Toaster,
  wn as clickOutside,
  gn as tooltip,
  Nn as useDialog,
  Pn as useModal,
  Hn as useToaster
};
