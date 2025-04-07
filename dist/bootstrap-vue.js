var Re = Object.defineProperty;
var Ie = (e, n, l) => n in e ? Re(e, n, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[n] = l;
var N = (e, n, l) => Ie(e, typeof n != "symbol" ? n + "" : n, l);
import { defineComponent as P, toRefs as Y, ref as B, watch as _e, onMounted as ie, openBlock as y, createElementBlock as S, normalizeClass as O, renderSlot as w, normalizeProps as E, guardReactiveProps as D, createElementVNode as s, toDisplayString as I, createBlock as ne, Teleport as ce, Fragment as G, renderList as Z, mergeProps as oe, computed as H, getCurrentInstance as pe, watchEffect as ke, withModifiers as ge, createCommentVNode as le, createVNode as we, onUnmounted as Pe, normalizeStyle as Ne, createTextVNode as W, resolveComponent as me, withCtx as re, unref as te, withDirectives as $e, vModelSelect as Ve, resolveDirective as Fe, nextTick as Ge, Transition as je, inject as fe, createApp as ve } from "vue";
import { Toast as Ke, Modal as Ue, Tooltip as qe } from "bootstrap";
const Xe = { class: "toast-header" }, Ye = ["textContent"], We = ["textContent"], Ze = { class: "toast-body" }, Je = ["textContent"], Qe = /* @__PURE__ */ P({
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
  setup(e, { expose: n, emit: l }) {
    const t = e, d = l, { visible: r, animation: u, autohide: a, delay: f } = Y(t), c = B(), $ = B();
    _e(r, (C) => {
      i();
    }, { immediate: !0 });
    function M() {
      c.value.show();
    }
    function b() {
      c.value.hide();
    }
    function g() {
      c.value.dispose();
    }
    function v() {
      c.value.isShown();
    }
    function p() {
      c.value.getOrCreateInstance();
    }
    function _() {
      c.value.getInstance();
    }
    function i() {
      c.value && (r.value === !0 ? M() : b());
    }
    function h() {
      d("hide", c.value);
    }
    function o() {
      d("hidden", c.value);
    }
    function L() {
      d("show", c.value);
    }
    async function A() {
      d("shown", c.value);
    }
    const k = { show: M, hide: b, dispose: g, isShown: v, getOrCreateInstance: p, getInstance: _ };
    return n({ ...k }), ie(() => {
      $.value.addEventListener("hide.bs.toast", h), $.value.addEventListener("hidden.bs.toast", o), $.value.addEventListener("show.bs.toast", L), $.value.addEventListener("shown.bs.toast", A), c.value = new Ke($.value, {
        animation: u.value,
        autohide: a.value,
        delay: f.value
      }), i();
    }), (C, m) => (y(), S("div", {
      ref_key: "toastRef",
      ref: $,
      class: O(["toast", [C.variant ? `text-bg-${C.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      w(C.$slots, "header", E(D({ ...k })), () => [
        s("div", Xe, [
          w(C.$slots, "title", E(D({ ...k })), () => [
            s("strong", {
              class: "me-auto",
              textContent: I(C.title)
            }, null, 8, Ye)
          ], !0),
          w(C.$slots, "subtitle", E(D({ ...k })), () => [
            s("small", {
              textContent: I(C.subtitle)
            }, null, 8, We)
          ], !0),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: b
          })
        ])
      ], !0),
      w(C.$slots, "body", E(D({ ...k })), () => [
        s("div", Ze, [
          w(C.$slots, "default", E(D({ ...k })), () => [
            s("span", {
              textContent: I(C.body)
            }, null, 8, Je)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), K = (e, n) => {
  const l = e.__vccOpts || e;
  for (const [t, d] of n)
    l[t] = d;
  return l;
}, Ce = /* @__PURE__ */ K(Qe, [["__scopeId", "data-v-c0cdbae8"]]);
function et() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(l) {
    const t = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (l == "x" ? t : t & 3 | 8).toString(16);
  });
}
const tt = { id: "toast-wrapper" };
let he;
const nt = /* @__PURE__ */ P({
  __name: "Toaster",
  setup(e, { expose: n }) {
    const l = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, t = B(/* @__PURE__ */ new Map());
    he = (r, u = "top right") => {
      const a = et(), f = { ...l, ...r, id: a };
      let c = t.value.get(u);
      c instanceof Set || (c = /* @__PURE__ */ new Set()), c.add(f), t.value.set(u, c);
    };
    function d(r, u) {
      const a = t.value.get(r);
      a == null || a.delete(u);
    }
    return n({ toast: he }), (r, u) => (y(), ne(ce, { to: "body" }, [
      s("div", tt, [
        (y(!0), S(G, null, Z(t.value, ([a, f]) => (y(), S("div", {
          key: a,
          class: O(["toast-group", `${a}`])
        }, [
          (y(!0), S(G, null, Z(f, (c, $) => (y(), ne(Ce, oe({
            key: c.id,
            ref_for: !0
          }, c, {
            onHidden: (M) => d(a, c)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), ot = /* @__PURE__ */ K(nt, [["__scopeId", "data-v-786d1c50"]]), Me = () => {
  let e = [];
  function n() {
    e = [], document.querySelectorAll("*").forEach((t) => {
      const d = getComputedStyle(t);
      d.position === "sticky" && (e.push({ element: t, originalPosition: d.position }), t.style.position = "relative");
    });
  }
  function l() {
    e.forEach((t) => {
      t.element.style.position = t.originalPosition;
    });
  }
  return { removeStickyElements: n, restoreStickyElements: l };
};
var j = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(j || {});
const ae = (e, n = "") => {
  let l = e.toLowerCase();
  return !Object.values(j).includes(l) || l == "" ? "" : `${n}${l}`;
}, st = { class: "modal-content" }, lt = { class: "modal-header" }, at = ["innerHTML"], rt = { class: "modal-body" }, it = ["innerHTML"], ut = { class: "modal-footer" }, dt = ["innerHTML"], ct = ["innerHTML"];
typeof window < "u" && !window._managedModals && (window._managedModals = []);
const pt = /* @__PURE__ */ P({
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
    size: { default: j.STANDARD },
    btnSize: { default: j.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: n, emit: l }) {
    const t = e, {
      backdrop: d,
      keyboard: r,
      focus: u,
      disableOutsideClick: a,
      size: f,
      btnSize: c
    } = Y(t), $ = l, M = H(() => ae(f.value, "modal-")), b = H(() => ae(c.value, "btn-")), g = B();
    let v;
    const p = pe(), _ = () => document.querySelectorAll(".modal.show").length, i = () => typeof window < "u" && window._managedModals ? window._managedModals : [], h = 1055, o = B(h), L = () => {
      const x = _();
      o.value = h + x;
    };
    let A;
    const k = Me();
    function C() {
      return new Promise((Q, X) => {
        if (!g.value) return;
        k.removeStickyElements(), L(), g.value.classList.add("managed-modal");
        const se = i(), ze = se.length + 1, He = {
          element: g.value,
          priority: ze,
          instance: p
        };
        se.push(He), g.value.addEventListener("shown.bs.modal", () => {
          U();
        }, { once: !0 }), v == null || v.show(), A = Q, $("onShown", v);
      });
    }
    function m(x = !0) {
      if (!g.value) return;
      const Q = i(), X = Q.findIndex((se) => se.element === g.value);
      X > -1 && Q.splice(X, 1), g.value.addEventListener("hidden.bs.modal", () => {
        g.value && (g.value.style.display = ""), U();
      }, { once: !0 }), v == null || v.hide(), typeof A == "function" && A(x), $("onHidden", v), k.restoreStickyElements();
    }
    function z() {
      v == null || v.toggle();
    }
    const U = () => {
      const x = i();
      if (x.length === 0) return;
      x.sort((X, se) => X.priority - se.priority);
      const Q = x[x.length - 1];
      x.forEach((X) => {
        X.element !== Q.element ? X.element.style.opacity = "0" : X.element.style.opacity = "1";
      });
    };
    ie(() => {
      v = new Ue(g.value, {
        backdrop: d == null ? void 0 : d.value,
        keyboard: r.value,
        focus: u.value
      }), g.value.classList.add("managed-modal"), ke(() => {
        (t == null ? void 0 : t.visible) === !0 ? v == null || v.show() : v == null || v.hide();
      });
    });
    function F(x) {
      (d == null ? void 0 : d.value) !== "static" && m(!1);
    }
    function T() {
      m(!1);
    }
    function R() {
      m(!1);
    }
    function q() {
      m(!0);
    }
    n({
      modal: v,
      show: C,
      hide: m,
      toggle: z,
      onHeaderCloseClicked: T,
      onCancelClicked: R,
      onOkCLicked: q
    });
    const J = { show: C, hide: m, toggle: z, modal: v };
    return (x, Q) => (y(), S("div", oe({
      ref_key: "modalElement",
      ref: g,
      class: "modal fade",
      tabindex: "-1"
    }, { ...x.$attrs }, {
      onClick: ge(F, ["self"]),
      style: { zIndex: o.value }
    }), [
      s("div", {
        class: O(["modal-dialog", M.value])
      }, [
        s("div", st, [
          w(x.$slots, "header", E(D({ ...J })), () => [
            s("div", lt, [
              w(x.$slots, "title", E(D({ ...J })), () => [
                s("h5", {
                  class: "modal-title",
                  innerHTML: x.title
                }, null, 8, at)
              ], !0),
              w(x.$slots, "header-close-button", E(D({ ...J })), () => [
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: T
                })
              ], !0)
            ])
          ], !0),
          s("div", rt, [
            w(x.$slots, "default", E(D({ ...J })), () => [
              s("span", { innerHTML: x.body }, null, 8, it)
            ], !0)
          ]),
          s("div", ut, [
            w(x.$slots, "footer", E(D({ ...J })), () => [
              x.okOnly ? le("", !0) : (y(), S("button", {
                key: 0,
                type: "button",
                class: O(["btn btn-secondary", b.value]),
                onClick: R
              }, [
                w(x.$slots, "button-cancel", E(D({ ...J })), () => [
                  s("span", { innerHTML: x.textCancel }, null, 8, dt)
                ], !0)
              ], 2)),
              s("button", {
                type: "button",
                class: O(["btn btn-primary", b.value]),
                onClick: q
              }, [
                w(x.$slots, "button-ok", E(D({ ...J })), () => [
                  s("span", { innerHTML: x.textOk }, null, 8, ct)
                ], !0)
              ], 2)
            ], !0)
          ])
        ])
      ], 2)
    ], 16));
  }
}), Se = /* @__PURE__ */ K(pt, [["__scopeId", "data-v-b8ba4eaa"]]), ft = /* @__PURE__ */ P({
  __name: "ModalManager",
  setup(e, { expose: n }) {
    const l = B(void 0), t = B({});
    function d(u = {}) {
      var a;
      return u.okOnly = !1, t.value = u, (a = l.value) == null ? void 0 : a.show();
    }
    function r(u = {}) {
      var a;
      return u.okOnly = !0, t.value = u, (a = l.value) == null ? void 0 : a.show();
    }
    return n({ confirm: d, alert: r }), (u, a) => (y(), ne(ce, { to: "body" }, [
      we(Se, oe({
        ref_key: "modalRef",
        ref: l
      }, { ...t.value }), null, 16)
    ]));
  }
}), vt = {
  "data-header": "",
  class: "border-bottom"
}, mt = { class: "d-flex gap-2 p-2" }, ht = { class: "p-2" }, yt = {
  "data-footer": "",
  class: "border-top p-2"
}, bt = { class: "buttons" }, _t = /* @__PURE__ */ P({
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
    size: { default: j.STANDARD },
    btnSize: { default: j.SMALL },
    visible: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !1 }
  },
  setup(e, { expose: n }) {
    const l = e, { backdrop: t, disableOutsideClick: d, modal: r, size: u, btnSize: a } = Y(l), f = () => document.querySelectorAll("dialog[open]").length, c = 1056, $ = B(c), M = B(!1), b = B(!1), g = B(!1), v = B(), p = B(!1), _ = H(() => ae(u.value, "modal-")), i = H(() => ae(a.value, "btn-")), h = H(() => ({
      opening: M.value,
      closing: b.value,
      "no-backdrop": t.value === !1,
      static: p.value
    }));
    let o = null;
    const L = () => {
      const T = f();
      $.value = c + T;
    }, A = Me(), k = async () => (L(), A.removeStickyElements(), M.value = !0, v.value.addEventListener(
      "animationend",
      () => {
        M.value = !1, g.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? v.value.showModal() : v.value.show(), new Promise((T, R) => {
      o = T;
    })), C = async (T = !1) => {
      b.value = !0, v.value.addEventListener(
        "animationend",
        () => {
          v.value.close(), b.value = !1, g.value = !1, typeof o == "function" && o(T), o = null, A.restoreStickyElements();
        },
        { once: !0 }
      );
    }, m = async () => {
      g.value === !0 ? C() : k();
    }, z = () => {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 200);
    }, U = () => {
      if (t.value === "static" || d.value === !0) {
        z();
        return;
      }
      C(!1);
    };
    if (r.value === !0) {
      let T = function(q) {
        if (t.value === "static" || d.value === !0) {
          z();
          return;
        }
        q.target === v.value && C(!1);
      };
      const R = new AbortController();
      ie(() => {
        document.addEventListener("click", (q) => {
          T(q);
        }, { signal: R.signal });
      }), Pe(() => {
        R.abort();
      });
    }
    const F = { show: k, hide: C, toggle: m, dialog: v };
    return n({
      show: k,
      hide: C,
      toggle: m
    }), (T, R) => (y(), S("div", {
      class: "dialog-wrapper",
      style: Ne({ zIndex: $.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: U
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: v,
        class: O(h.value)
      }, [
        s("div", {
          class: O(["content", _.value])
        }, [
          w(T.$slots, "header", E(D({ ...F })), () => [
            s("div", vt, [
              s("div", mt, [
                w(T.$slots, "title", E(D({ ...F })), () => [
                  W(I(T.title), 1)
                ], !0),
                w(T.$slots, "header-close-button", {}, () => [
                  s("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: R[0] || (R[0] = (q) => C(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          s("div", ht, [
            w(T.$slots, "default", E(D({ ...F })), () => [
              W(I(T.body), 1)
            ], !0)
          ]),
          w(T.$slots, "footer", E(D({ ...F })), () => [
            s("div", yt, [
              s("div", bt, [
                T.okOnly ? le("", !0) : (y(), S("button", {
                  key: 0,
                  type: "button",
                  class: O(["btn btn-secondary", i.value]),
                  onClick: R[1] || (R[1] = (q) => C(!1))
                }, [
                  w(T.$slots, "textCancel", E(D({ ...F })), () => [
                    W(I(T.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: O(["btn btn-primary", i.value]),
                  onClick: R[2] || (R[2] = (q) => C(!0))
                }, [
                  w(T.$slots, "textOk", E(D({ ...F })), () => [
                    W(I(T.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), Be = /* @__PURE__ */ K(_t, [["__scopeId", "data-v-0990c791"]]), kt = /* @__PURE__ */ P({
  __name: "DialogManager",
  setup(e, { expose: n }) {
    const l = B(void 0), t = B({});
    function d(u = {}) {
      var a;
      return u.okOnly = !1, t.value = u, (a = l.value) == null ? void 0 : a.show();
    }
    function r(u = {}) {
      var a;
      return u.okOnly = !0, t.value = u, (a = l.value) == null ? void 0 : a.show();
    }
    return n({ confirm: d, alert: r }), (u, a) => (y(), ne(ce, { to: "body" }, [
      we(Be, oe({
        ref_key: "modalRef",
        ref: l
      }, { ...t.value }), null, 16)
    ]));
  }
}), gt = { "data-first": "" }, wt = ["disabled", "innerHTML"], $t = { "data-prev": "" }, Ct = ["disabled", "innerHTML"], Mt = { key: 0 }, St = ["innerHTML"], Bt = ["onClick"], Lt = { "data-next": "" }, Tt = ["disabled", "innerHTML"], xt = { "data-last": "" }, At = ["disabled", "innerHTML"], Et = /* @__PURE__ */ P({
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
    size: { default: j.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    function l(o, L = 0) {
      return [...Array(o).keys()].map((A) => A + L);
    }
    const t = n, d = e, { modelValue: r, maxVisibleButtons: u, hideEllipsis: a } = Y(d), f = Math.floor(u.value / 2), c = H(() => {
      let o = u.value, L = r.value <= f ? 1 : r.value - f;
      return r.value >= b.value - f && (L = b.value - o + 1), L < 1 && (L = 1), b.value < o && (o = b.value), l(o, L);
    }), $ = H(() => r.value <= 1), M = H(() => r.value >= b.value), b = H(() => {
      const { perPage: o, totalItems: L } = d;
      return Math.ceil(L / o);
    });
    ke(() => {
      b.value > 0 && r.value > b.value && t("update:modelValue", b.value);
    });
    function g(o) {
      const L = u.value - 1;
      return !(a.value === !0 || o === 0 && r.value - f - 1 <= 0 || o === L && r.value + f >= b.value || o > 0 && o < L);
    }
    function v(o) {
      o < 1 && (o = 1), o > b.value && (o = b.value), t("update:modelValue", o);
    }
    function p() {
      t("update:modelValue", 1);
    }
    function _() {
      t("update:modelValue", b.value);
    }
    function i() {
      let o = r.value - 1;
      o < 1 && (o = 1), t("update:modelValue", o);
    }
    function h() {
      let o = r.value + 1;
      o > b.value && (o = b.value), t("update:modelValue", o);
    }
    return (o, L) => (y(), S("ul", {
      class: O(["pagination", o.size])
    }, [
      s("li", gt, [
        s("button", {
          class: "",
          disabled: $.value,
          innerHTML: o.firstText,
          onClick: p
        }, null, 8, wt)
      ]),
      s("li", $t, [
        s("button", {
          class: "",
          disabled: $.value,
          innerHTML: o.prevText,
          onClick: i
        }, null, 8, Ct)
      ]),
      (y(!0), S(G, null, Z(c.value, (A, k) => (y(), S(G, null, [
        g(k) ? (y(), S("li", Mt, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: o.ellipsisText
          }, null, 8, St)
        ])) : (y(), S("li", {
          key: 1,
          "data-prev": "",
          class: O({ active: o.modelValue === A })
        }, [
          s("button", {
            class: "",
            onClick: (C) => v(A)
          }, I(A), 9, Bt)
        ], 2))
      ], 64))), 256)),
      s("li", Lt, [
        s("button", {
          class: "",
          disabled: M.value,
          innerHTML: o.nextText,
          onClick: h
        }, null, 8, Tt)
      ]),
      s("li", xt, [
        s("button", {
          class: "",
          disabled: M.value,
          innerHTML: o.lastText,
          onClick: _
        }, null, 8, At)
      ])
    ], 2));
  }
}), Dt = /* @__PURE__ */ K(Et, [["__scopeId", "data-v-2bfd7085"]]), Ot = { class: "d-inline" }, zt = { class: "fw-bold" }, Ht = /* @__PURE__ */ P({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, t = n, { options: d } = Y(l), r = H({
      get: () => l.modelValue,
      set: (u) => t("update:modelValue", u)
    });
    return (u, a) => {
      const f = me("b-dropdown-item"), c = me("b-dropdown");
      return y(), ne(c, oe({
        variant: "outline-primary",
        size: "sm"
      }, { ...u.$attrs }), {
        button: re(() => [
          s("div", Ot, [
            w(u.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = s("span", null, "Per page: ", -1)),
              s("span", zt, I(r.value), 1)
            ])
          ])
        ]),
        default: re(() => [
          (y(!0), S(G, null, Z(te(d), ($, M) => (y(), ne(f, {
            key: $,
            onClick: (b) => r.value = $,
            active: $ === u.modelValue
          }, {
            default: re(() => [
              W(I($), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Rt = ["value"], It = /* @__PURE__ */ P({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = e, t = n, { options: d } = Y(l), r = H({
      get: () => l.modelValue,
      set: (u) => t("update:modelValue", u)
    });
    return (u, a) => $e((y(), S("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (f) => r.value = f)
    }, [
      (y(!0), S(G, null, Z(te(d), (f, c) => (y(), S("option", {
        key: f,
        value: f
      }, I(f), 9, Rt))), 128))
    ], 512)), [
      [Ve, r.value]
    ]);
  }
});
var ee = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(ee || {});
class Pt {
  constructor(n, l = "ASC", t) {
    N(this, "key");
    N(this, "direction");
    N(this, "sortFn");
    this.key = n, this.direction = l, this.sortFn = t;
  }
}
const ye = (e, n) => {
  const l = (a, f) => {
    let c = typeof a, $ = typeof f;
    return c == "number" && c == $;
  }, t = (a, f) => a - f, d = (a, f) => (a = a ?? "", f = f ?? "", a.localeCompare(f)), r = (a, f) => l(a, f) ? t : d, u = [...n];
  return u.sort((a, f) => {
    let c = 0;
    for (let $ of e) {
      let { key: M, direction: b, sortFn: g } = $, v = b === "ASC" ? 1 : -1, p = a[M], _ = f[M];
      if (g = typeof g == "function" ? g : r(p, _), c = g(p, _, a, f, n, $, v) * v, c !== 0) return c;
    }
    return c;
  }), u;
}, Nt = ["onClick"], Vt = { class: "th-wrapper" }, Ft = {
  key: 0,
  "data-sort-indicator": ""
}, Gt = { class: "sort-index" }, jt = { class: "sort-direction" }, Kt = ["onMouseover"], Ut = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, qt = ["colspan"], Xt = ["innerHTML"];
class ue {
  constructor(n = "", l = "", t = !1, d) {
    N(this, "key");
    // age
    N(this, "label");
    // Person age
    N(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    N(this, "sortFn");
    this.key = n, this.label = l, this.sortable = t, this.sortFn = d;
  }
}
const Yt = /* @__PURE__ */ P({
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
    const l = (p) => {
      let _ = [];
      for (const i of p)
        _ = _.concat(Object.keys(i));
      return _ = _.filter((i, h) => _.indexOf(i) == h), _;
    }, t = n, d = e, r = B([]), { fields: u, items: a } = Y(d), f = H(() => {
      if (d.externalSort || r.value.length == 0) return d.items;
      const p = [...d.items];
      return ye(r.value, p);
    }), c = H(() => {
      let p = u.value, _ = [];
      return p.length === 0 && (p = l([...a.value])), p.reduce((i, h, o) => {
        if (typeof h == "string")
          i.push(new ue(h, h));
        else if (h instanceof ue)
          i.push(h);
        else if (typeof h == "object") {
          const { key: L, label: A, sortable: k, sortFn: C } = h;
          i.push(new ue(L, A, k, C));
        }
        return i;
      }, _);
    });
    function $(p) {
      const _ = r.value.findIndex((i) => i.key === p.key);
      return _ < 0 ? "" : _ + 1;
    }
    function M(p) {
      const _ = r.value.findIndex((h) => h.key === p.key);
      if (_ < 0) return "fas fa-sort";
      const i = r.value[_];
      return i.direction === ee.ASC ? "fas fa-sort-up" : i.direction === ee.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function b(p) {
      const { key: _ } = p, i = r.value.findIndex((h) => h.key === _);
      if (i < 0) {
        const h = new Pt(_, ee.ASC, p.sortFn);
        r.value.push(h);
      } else {
        const h = r.value[i], o = h.direction;
        o === ee.ASC ? h.direction = ee.DESC : o === ee.DESC && r.value.splice(i, 1);
      }
      t("sort", r.value, ye);
    }
    function g(p, _, i, h) {
      t("onMouseOverCell", p, _, i, h);
    }
    let v = B(null);
    return ie(() => {
      v.value = pe();
    }), (p, _) => (y(), S("table", oe({ ...p.$attrs }, {
      class: { striped: p.striped, hover: p.hover }
    }), [
      s("thead", null, [
        (y(!0), S(G, null, Z(c.value, (i) => (y(), S("th", {
          key: `thead-${i.key}`,
          class: O({ sortable: i.sortable }),
          onClick: (h) => i.sortable && b(i)
        }, [
          s("span", Vt, [
            w(p.$slots, `head(${i.key})`, {
              field: i,
              data: te(v),
              value: i.label
            }, () => [
              W(I(i.label), 1)
            ], !0),
            i.sortable ? (y(), S("span", Ft, [
              s("span", Gt, I($(i)), 1),
              s("span", jt, [
                s("i", {
                  class: O(M(i))
                }, null, 2)
              ])
            ])) : le("", !0)
          ])
        ], 10, Nt))), 128))
      ]),
      s("tbody", null, [
        (y(!0), S(G, null, Z(f.value, (i, h) => (y(), S(G, {
          key: `trow-${(i == null ? void 0 : i.id) ?? h}`
        }, [
          w(p.$slots, "row", {
            item: i,
            index: h,
            colspan: c.value.length
          }, void 0, !0),
          s("tr", null, [
            (y(!0), S(G, null, Z(c.value, (o) => (y(), S("td", {
              key: `tcell-${o.key + ((i == null ? void 0 : i.id) ?? h)}`,
              class: O({ [`tcell-${o == null ? void 0 : o.key}`]: !0 }),
              onMouseover: (L) => g(L, i, h, o)
            }, [
              w(p.$slots, `cell(${o == null ? void 0 : o.key})`, {
                data: te(v),
                item: i,
                field: o,
                value: i[o == null ? void 0 : o.key]
              }, () => [
                W(I(i[o == null ? void 0 : o.key]), 1)
              ], !0)
            ], 42, Kt))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        w(p.$slots, "footer", { data: te(v) }, void 0, !0)
      ]),
      p.showEmpty && f.value.length === 0 ? (y(), S("tr", Ut, [
        s("td", {
          colspan: c.value.length
        }, [
          w(p.$slots, "empty", {
            items: f.value,
            data: te(v),
            fields: c.value
          }, () => [
            s("span", { innerHTML: p.emptyText }, null, 8, Xt)
          ], !0)
        ], 8, qt)
      ])) : le("", !0)
    ], 16));
  }
}), Wt = /* @__PURE__ */ K(Yt, [["__scopeId", "data-v-b1e9b5de"]]);
var Le = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(Le || {});
const Zt = { class: "d-inline-block position-relative" }, Jt = ["disabled"], be = "data-prevent-close", Qt = /* @__PURE__ */ P({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: Le.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: j.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: n, emit: l }) {
    const t = B(), d = e, r = B(), u = B(!1), a = B(d.variant), f = B(d.centered), c = B(d.dropup), $ = B(d.dropend), M = B(d.dropstart), b = B(d.menuEnd), g = l, v = H(() => {
      const m = [];
      return a != null && a.value && m.push(`btn-${a.value}`), d.size && m.push(`btn-${d.size}`), m;
    }), p = H(() => {
      const m = [];
      return f != null && f.value && m.push("dropdown-center"), c != null && c.value && m.push("dropup"), M != null && M.value && m.push("dropstart"), !(M != null && M.value) && ($ != null && $.value) && m.push("dropend"), m.length === 0 && m.push("dropdown"), m.unshift("btn-group"), m;
    }), _ = H(() => {
      const m = [];
      return u.value && m.push("show"), b.value && m.push("dropdown-menu-end"), m;
    }), i = () => {
      if (!u.value) return;
      const m = r.value.getBoundingClientRect(), z = t.value.getBoundingClientRect(), U = window.innerHeight - m.bottom, F = m.top, T = window.innerWidth - m.right, R = m.left;
      c.value = U < z.height && F >= z.height, b.value = T < z.width && R >= z.width;
    };
    async function h() {
      u.value = !0, await Ge(), i();
    }
    function o() {
      u.value = !1;
    }
    function L(m) {
      u.value ? o() : h();
    }
    function A(m) {
      const { target: z } = m;
      (z == null ? void 0 : z.closest(`[${be}],[${be}=true]`)) || o();
    }
    function k() {
      u.value && o();
    }
    _e(u, (m, z) => {
      typeof z > "u" || m !== z && (g("toggle", { show: m }), m === !0 ? g("open", { show: m }) : g("close", { show: m }));
    }, { immediate: !0 });
    const C = {
      show: u,
      disabled: d.disabled,
      buttonClasses: v,
      onButtonClicked: L,
      onMenuClicked: A,
      onClickOutside: k,
      open: h,
      close: o
    };
    return n({
      ...C
    }), (m, z) => {
      const U = Fe("click-outside");
      return y(), S("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: O([p.value, "dropdown-wrapper"])
      }, [
        $e((y(), S("div", Zt, [
          w(m.$slots, "header", E(D({ ...C })), () => [
            s("button", {
              class: O(["btn dropdown-toggle", v.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: L,
              disabled: m.disabled
            }, [
              w(m.$slots, "button", E(D({ ...C })), () => [
                W(I(m.text), 1)
              ], !0)
            ], 10, Jt)
          ], !0),
          s("ul", {
            ref_key: "dropDownMenuRef",
            ref: t,
            class: O(["dropdown-menu", _.value]),
            onClick: A
          }, [
            w(m.$slots, "default", E(D({ ...C })), void 0, !0)
          ], 2)
        ])), [
          [U, k]
        ])
      ], 2);
    };
  }
}), en = /* @__PURE__ */ K(Qt, [["__scopeId", "data-v-4910c394"]]), tn = ["data-prevent-close"], nn = /* @__PURE__ */ P({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const n = e, { preventClose: l } = Y(n);
    return (t, d) => (y(), S("li", {
      "data-prevent-close": te(l) ? "" : null
    }, [
      s("span", {
        class: O(["dropdown-item", { active: t.active }]),
        role: "button",
        tabindex: "0"
      }, [
        w(t.$slots, "default")
      ], 2)
    ], 8, tn));
  }
}), on = {}, sn = { "data-prevent-close": "" }, ln = { class: "dropdown-header" };
function an(e, n) {
  return y(), S("li", sn, [
    s("h6", ln, [
      w(e.$slots, "default")
    ])
  ]);
}
const rn = /* @__PURE__ */ K(on, [["render", an]]), un = {};
function dn(e, n) {
  return y(), S("li", null, n[0] || (n[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const cn = /* @__PURE__ */ K(un, [["render", dn]]), pn = {
  mounted(e, n, l, t) {
    new qe(e, {
      title: n.value,
      placement: n.arg,
      trigger: "hover"
    });
  }
}, fn = (e, n) => {
  function l(r, u) {
    for (; r !== null; ) {
      if (r === u)
        return !0;
      r = r.parentNode;
    }
    return !1;
  }
  const t = new AbortController();
  function d(r, u) {
    document.addEventListener("click", function(a) {
      const f = a.target;
      r && (l(f, r) || u());
    }, { signal: t.signal });
  }
  return d(e, n), t;
}, vn = {
  mounted(e, n, l, t) {
    const d = n.value;
    fn(e, d);
  }
};
class de {
  static add(n) {
    this.list.add(n), document.body.classList.add("drawer-open");
  }
  static delete(n) {
    this.list.delete(n), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
N(de, "list", /* @__PURE__ */ new Set());
const mn = { class: "drawer-content" }, hn = { class: "drawer-header" }, yn = ["innerHTML"], bn = { class: "drawer-body" }, _n = ["innerHTML"], kn = { class: "drawer-footer" }, gn = ["innerHTML"], wn = ["innerHTML"], $n = /* @__PURE__ */ P({
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
    size: { default: j.STANDARD },
    btnSize: { default: j.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: n }) {
    const l = e, {
      backdrop: t,
      keyboard: d,
      focus: r,
      size: u,
      btnSize: a
    } = Y(l), f = H(() => ae(u.value, "drawer-")), c = H(() => ae(a.value, "btn-")), $ = B(), M = B(!1), b = pe();
    let g;
    async function v() {
      return M.value === !0 ? void 0 : new Promise((C, m) => {
        M.value = !0, g = C;
      });
    }
    function p(k = !0) {
      M.value = !1, typeof g == "function" && g(k);
    }
    function _() {
      M.value === !0 ? v() : p(!1);
    }
    function i(k) {
      (t == null ? void 0 : t.value) !== "static" && p(!1);
    }
    function h() {
      p(!1);
    }
    function o() {
      p(!1);
    }
    function L() {
      p(!0);
    }
    function A() {
      M.value === !0 ? de.add(b) : de.delete(b);
    }
    return n({
      show: v,
      hide: p,
      toggle: _
    }), (k, C) => (y(), ne(je, {
      onBeforeEnter: A,
      onAfterLeave: A
    }, {
      default: re(() => [
        M.value ? (y(), S("div", oe({
          key: 0,
          ref_key: "drawerElement",
          ref: $,
          class: "drawer",
          tabindex: "-1"
        }, { ...k.$attrs }, {
          onClick: ge(i, ["self"])
        }), [
          s("div", {
            class: O(["drawer-dialog", f.value])
          }, [
            s("div", mn, [
              s("div", hn, [
                w(k.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: k.title
                  }, null, 8, yn)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: h
                })
              ]),
              s("div", bn, [
                w(k.$slots, "default", {}, () => [
                  s("span", { innerHTML: k.body }, null, 8, _n)
                ], !0)
              ]),
              s("div", kn, [
                w(k.$slots, "footer", {}, () => [
                  k.okOnly ? le("", !0) : (y(), S("button", {
                    key: 0,
                    type: "button",
                    class: O(["ms-auto btn btn-secondary", c.value]),
                    onClick: o
                  }, [
                    w(k.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: k.textCancel }, null, 8, gn)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: O(["btn btn-primary", c.value]),
                    onClick: L
                  }, [
                    w(k.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: k.textOk }, null, 8, wn)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : le("", !0)
      ]),
      _: 3
    }));
  }
}), Cn = /* @__PURE__ */ K($n, [["__scopeId", "data-v-2e49e8cb"]]), V = "b", Te = "$toaster", xe = "$modalManager", Ae = "$dialogManager";
class Ee {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const t = ve(ft).mount(n);
      this.component = t;
    }
    return this.component;
  }
}
N(Ee, "component");
class De {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const t = ve(kt).mount(n);
      this.component = t;
    }
    return this.component;
  }
}
N(De, "component");
class Oe {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const t = ve(ot).mount(n);
      this.component = t;
    }
    return this.component;
  }
}
N(Oe, "component");
function xn() {
  return fe(Te);
}
function An() {
  return fe(xe);
}
function En() {
  return fe(Ae);
}
function Mn(e) {
  e.component(`${V}-drawer`, Cn), e.component(`${V}-modal`, Se), e.component(`${V}-dialog`, Be), e.component(`${V}-pagination`, Dt), e.component(`${V}-pagination-dropdown`, Ht), e.component(`${V}-pagination-select`, It), e.component(`${V}-dropdown`, en), e.component(`${V}-dropdown-item`, nn), e.component(`${V}-dropdown-header`, rn), e.component(`${V}-dropdown-divider`, cn), e.component(`${V}-table`, Wt), e.component(`${V}-toast`, Ce);
}
function Sn(e) {
  e.directive("tooltip", pn), e.directive("click-outside", vn);
}
const Dn = {
  install(e) {
    Mn(e), Sn(e);
    const n = Oe.getComponent(), l = Ee.getComponent(), t = De.getComponent();
    e.provide(Te, n), e.provide(xe, l), e.provide(Ae, t);
  }
};
export {
  Dn as BootstrapVue,
  Be as DialogBox,
  kt as DialogManager,
  en as Dropdown,
  cn as DropdownDivider,
  rn as DropdownHeader,
  nn as DropdownItem,
  Se as Modal,
  ft as ModalManager,
  Ht as PageSizeDropdown,
  It as PageSizeSelect,
  Dt as Pagination,
  Wt as Table,
  ue as TableFieldDefinition,
  Ce as Toast,
  ot as Toaster,
  vn as clickOutside,
  pn as tooltip,
  En as useDialog,
  An as useModal,
  xn as useToaster
};
