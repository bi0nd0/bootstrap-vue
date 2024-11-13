var Te = Object.defineProperty;
var Le = (e, o, l) => o in e ? Te(e, o, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[o] = l;
var N = (e, o, l) => Le(e, typeof o != "symbol" ? o + "" : o, l);
import { defineComponent as P, toRefs as K, ref as T, watch as fe, onMounted as oe, openBlock as b, createElementBlock as M, normalizeClass as z, renderSlot as $, normalizeProps as D, guardReactiveProps as O, createElementVNode as s, toDisplayString as R, createBlock as Z, Teleport as le, Fragment as G, renderList as Y, mergeProps as J, computed as E, getCurrentInstance as ae, watchEffect as ve, withModifiers as me, createCommentVNode as Q, createVNode as he, onUnmounted as xe, normalizeStyle as Ae, createTextVNode as X, resolveComponent as ie, withCtx as te, unref as W, withDirectives as be, vModelSelect as De, resolveDirective as Oe, nextTick as ze, Transition as Ee, inject as re, createApp as ue } from "vue";
import { Toast as He, Modal as Re, Tooltip as Ie } from "bootstrap";
const Pe = { class: "toast-header" }, Ne = ["textContent"], Ve = ["textContent"], Fe = { class: "toast-body" }, Ge = ["textContent"], je = /* @__PURE__ */ P({
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
    const n = e, c = l, { visible: r, animation: u, autohide: a, delay: f } = K(n), d = T(), g = T();
    fe(r, (x) => {
      i();
    }, { immediate: !0 });
    function C() {
      d.value.show();
    }
    function k() {
      d.value.hide();
    }
    function A() {
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
    function i() {
      d.value && (r.value === !0 ? C() : k());
    }
    function y() {
      c("hide", d.value);
    }
    function t() {
      c("hidden", d.value);
    }
    function B() {
      c("show", d.value);
    }
    async function L() {
      c("shown", d.value);
    }
    const h = { show: C, hide: k, dispose: A, isShown: v, getOrCreateInstance: p, getInstance: _ };
    return o({ ...h }), oe(() => {
      g.value.addEventListener("hide.bs.toast", y), g.value.addEventListener("hidden.bs.toast", t), g.value.addEventListener("show.bs.toast", B), g.value.addEventListener("shown.bs.toast", L), d.value = new He(g.value, {
        animation: u.value,
        autohide: a.value,
        delay: f.value
      }), i();
    }), (x, m) => (b(), M("div", {
      ref_key: "toastRef",
      ref: g,
      class: z(["toast", [x.variant ? `text-bg-${x.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      $(x.$slots, "header", D(O({ ...h })), () => [
        s("div", Pe, [
          $(x.$slots, "title", D(O({ ...h })), () => [
            s("strong", {
              class: "me-auto",
              textContent: R(x.title)
            }, null, 8, Ne)
          ], !0),
          $(x.$slots, "subtitle", D(O({ ...h })), () => [
            s("small", {
              textContent: R(x.subtitle)
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
      $(x.$slots, "body", D(O({ ...h })), () => [
        s("div", Fe, [
          $(x.$slots, "default", D(O({ ...h })), () => [
            s("span", {
              textContent: R(x.body)
            }, null, 8, Ge)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
}), U = (e, o) => {
  const l = e.__vccOpts || e;
  for (const [n, c] of o)
    l[n] = c;
  return l;
}, ye = /* @__PURE__ */ U(je, [["__scopeId", "data-v-c0cdbae8"]]);
function Ke() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(l) {
    const n = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (l == "x" ? n : n & 3 | 8).toString(16);
  });
}
const Ue = { id: "toast-wrapper" };
let ce;
const Xe = /* @__PURE__ */ P({
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
    }, n = T(/* @__PURE__ */ new Map());
    ce = (r, u = "top right") => {
      const a = Ke(), f = { ...l, ...r, id: a };
      let d = n.value.get(u);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(f), n.value.set(u, d);
    };
    function c(r, u) {
      const a = n.value.get(r);
      a == null || a.delete(u);
    }
    return o({ toast: ce }), (r, u) => (b(), Z(le, { to: "body" }, [
      s("div", Ue, [
        (b(!0), M(G, null, Y(n.value, ([a, f]) => (b(), M("div", {
          key: a,
          class: z(["toast-group", `${a}`])
        }, [
          (b(!0), M(G, null, Y(f, (d, g) => (b(), Z(ye, J({
            key: d.id,
            ref_for: !0
          }, d, {
            onHidden: (C) => c(a, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ U(Xe, [["__scopeId", "data-v-786d1c50"]]);
var j = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(j || {});
const ee = (e, o = "") => {
  let l = e.toLowerCase();
  return !Object.values(j).includes(l) || l == "" ? "" : `${o}${l}`;
}, qe = { class: "modal-content" }, We = { class: "modal-header" }, Ze = ["innerHTML"], Je = { class: "modal-body" }, Qe = ["innerHTML"], et = { class: "modal-footer" }, tt = ["innerHTML"], ot = ["innerHTML"], _e = /* @__PURE__ */ P({
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
  setup(e, { expose: o, emit: l }) {
    const n = e, {
      backdrop: c,
      keyboard: r,
      focus: u,
      disableOutsideClick: a,
      size: f,
      btnSize: d
    } = K(n), g = l, C = E(() => ee(f.value, "modal-")), k = E(() => ee(d.value, "btn-")), A = T();
    let v;
    ae();
    const p = () => document.querySelectorAll(".modal.show").length, _ = 1055, i = T(_), y = () => {
      const w = p();
      i.value = _ + w;
    };
    let t;
    function B() {
      return new Promise((F, bo) => {
        y(), v == null || v.show(), t = F, g("onShown", v);
      });
    }
    function L(w = !0) {
      v == null || v.hide(), typeof t == "function" && t(w), g("onHidden", v);
    }
    function h() {
      v == null || v.toggle();
    }
    oe(() => {
      v = new Re(A.value, {
        backdrop: c == null ? void 0 : c.value,
        keyboard: r.value,
        focus: u.value
      }), ve(() => {
        (n == null ? void 0 : n.visible) === !0 ? v == null || v.show() : v == null || v.hide();
      });
    });
    function x(w) {
      (c == null ? void 0 : c.value) !== "static" && L(!1);
    }
    function m() {
      L(!1);
    }
    function H() {
      L(!1);
    }
    function I() {
      L(!0);
    }
    o({
      modal: v,
      show: B,
      hide: L,
      toggle: h,
      onHeaderCloseClicked: m,
      onCancelClicked: H,
      onOkCLicked: I
    });
    const S = { show: B, hide: L, toggle: h, modal: v };
    return (w, F) => (b(), M("div", J({
      ref_key: "modalElement",
      ref: A,
      class: "modal fade",
      tabindex: "-1"
    }, { ...w.$attrs }, {
      onClick: me(x, ["self"]),
      style: { zIndex: i.value }
    }), [
      s("div", {
        class: z(["modal-dialog", C.value])
      }, [
        s("div", qe, [
          $(w.$slots, "header", D(O({ ...S })), () => [
            s("div", We, [
              $(w.$slots, "title", D(O({ ...S })), () => [
                s("h5", {
                  class: "modal-title",
                  innerHTML: w.title
                }, null, 8, Ze)
              ]),
              $(w.$slots, "header-close-button", D(O({ ...S })), () => [
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: m
                })
              ])
            ])
          ]),
          s("div", Je, [
            $(w.$slots, "default", D(O({ ...S })), () => [
              s("span", { innerHTML: w.body }, null, 8, Qe)
            ])
          ]),
          s("div", et, [
            $(w.$slots, "footer", D(O({ ...S })), () => [
              w.okOnly ? Q("", !0) : (b(), M("button", {
                key: 0,
                type: "button",
                class: z(["btn btn-secondary", k.value]),
                onClick: H
              }, [
                $(w.$slots, "button-cancel", D(O({ ...S })), () => [
                  s("span", { innerHTML: w.textCancel }, null, 8, tt)
                ])
              ], 2)),
              s("button", {
                type: "button",
                class: z(["btn btn-primary", k.value]),
                onClick: I
              }, [
                $(w.$slots, "button-ok", D(O({ ...S })), () => [
                  s("span", { innerHTML: w.textOk }, null, 8, ot)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16));
  }
}), nt = /* @__PURE__ */ P({
  __name: "ModalManager",
  setup(e, { expose: o }) {
    const l = T(void 0), n = T({});
    function c(u = {}) {
      var a;
      return u.okOnly = !1, n.value = u, (a = l.value) == null ? void 0 : a.show();
    }
    function r(u = {}) {
      var a;
      return u.okOnly = !0, n.value = u, (a = l.value) == null ? void 0 : a.show();
    }
    return o({ confirm: c, alert: r }), (u, a) => (b(), Z(le, { to: "body" }, [
      he(_e, J({
        ref_key: "modalRef",
        ref: l
      }, { ...n.value }), null, 16)
    ]));
  }
}), st = {
  "data-header": "",
  class: "border-bottom"
}, lt = { class: "d-flex gap-2 p-2" }, at = { class: "p-2" }, rt = {
  "data-footer": "",
  class: "border-top p-2"
}, ut = { class: "buttons" }, it = /* @__PURE__ */ P({
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
  setup(e, { expose: o }) {
    const l = e, { backdrop: n, disableOutsideClick: c, modal: r, size: u, btnSize: a } = K(l), f = () => document.querySelectorAll("dialog[open]").length, d = 1056, g = T(d), C = T(!1), k = T(!1), A = T(!1), v = T(), p = T(!1), _ = E(() => ee(u.value, "modal-")), i = E(() => ee(a.value, "btn-")), y = E(() => ({
      opening: C.value,
      closing: k.value,
      "no-backdrop": n.value === !1,
      static: p.value
    }));
    let t = null;
    const B = () => {
      const S = f();
      g.value = d + S;
    }, L = async () => (B(), C.value = !0, v.value.addEventListener(
      "animationend",
      () => {
        C.value = !1, A.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? v.value.showModal() : v.value.show(), new Promise((S, w) => {
      t = S;
    })), h = async (S = !1) => {
      k.value = !0, v.value.addEventListener(
        "animationend",
        () => {
          v.value.close(), k.value = !1, A.value = !1, typeof t == "function" && t(S), t = null;
        },
        { once: !0 }
      );
    }, x = async () => {
      A.value === !0 ? h() : L();
    }, m = () => {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 200);
    }, H = () => {
      if (n.value === "static" || c.value === !0) {
        m();
        return;
      }
      h(!1);
    };
    if (r.value === !0) {
      let S = function(F) {
        if (n.value === "static" || c.value === !0) {
          m();
          return;
        }
        F.target === v.value && h(!1);
      };
      const w = new AbortController();
      oe(() => {
        document.addEventListener("click", (F) => {
          S(F);
        }, { signal: w.signal });
      }), xe(() => {
        w.abort();
      });
    }
    const I = { show: L, hide: h, toggle: x, dialog: v };
    return o({
      show: L,
      hide: h,
      toggle: x
    }), (S, w) => (b(), M("div", {
      class: "dialog-wrapper",
      style: Ae({ zIndex: g.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: H
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: v,
        class: z(y.value)
      }, [
        s("div", {
          class: z(["content", _.value])
        }, [
          $(S.$slots, "header", D(O({ ...I })), () => [
            s("div", st, [
              s("div", lt, [
                $(S.$slots, "title", D(O({ ...I })), () => [
                  X(R(S.title), 1)
                ], !0),
                $(S.$slots, "header-close-button", {}, () => [
                  s("button", {
                    class: "ms-auto",
                    type: "button",
                    "data-btn-close": "",
                    "aria-label": "Close",
                    onClick: w[0] || (w[0] = (F) => h(!1))
                  })
                ], !0)
              ])
            ])
          ], !0),
          s("div", at, [
            $(S.$slots, "default", D(O({ ...I })), () => [
              X(R(S.body), 1)
            ], !0)
          ]),
          $(S.$slots, "footer", D(O({ ...I })), () => [
            s("div", rt, [
              s("div", ut, [
                S.okOnly ? Q("", !0) : (b(), M("button", {
                  key: 0,
                  type: "button",
                  class: z(["btn btn-secondary", i.value]),
                  onClick: w[1] || (w[1] = (F) => h(!1))
                }, [
                  $(S.$slots, "textCancel", D(O({ ...I })), () => [
                    X(R(S.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: z(["btn btn-primary", i.value]),
                  onClick: w[2] || (w[2] = (F) => h(!0))
                }, [
                  $(S.$slots, "textOk", D(O({ ...I })), () => [
                    X(R(S.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), ke = /* @__PURE__ */ U(it, [["__scopeId", "data-v-dbfc8b0f"]]), ct = /* @__PURE__ */ P({
  __name: "DialogManager",
  setup(e, { expose: o }) {
    const l = T(void 0), n = T({});
    function c(u = {}) {
      var a;
      return u.okOnly = !1, n.value = u, (a = l.value) == null ? void 0 : a.show();
    }
    function r(u = {}) {
      var a;
      return u.okOnly = !0, n.value = u, (a = l.value) == null ? void 0 : a.show();
    }
    return o({ confirm: c, alert: r }), (u, a) => (b(), Z(le, { to: "body" }, [
      he(ke, J({
        ref_key: "modalRef",
        ref: l
      }, { ...n.value }), null, 16)
    ]));
  }
}), dt = { "data-first": "" }, pt = ["disabled", "innerHTML"], ft = { "data-prev": "" }, vt = ["disabled", "innerHTML"], mt = { key: 0 }, ht = ["innerHTML"], bt = ["onClick"], yt = { "data-next": "" }, _t = ["disabled", "innerHTML"], kt = { "data-last": "" }, $t = ["disabled", "innerHTML"], gt = /* @__PURE__ */ P({
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
  setup(e, { emit: o }) {
    function l(t, B = 0) {
      return [...Array(t).keys()].map((L) => L + B);
    }
    const n = o, c = e, { modelValue: r, maxVisibleButtons: u, hideEllipsis: a } = K(c), f = Math.floor(u.value / 2), d = E(() => {
      let t = u.value, B = r.value <= f ? 1 : r.value - f;
      return r.value >= k.value - f && (B = k.value - t + 1), B < 1 && (B = 1), k.value < t && (t = k.value), l(t, B);
    }), g = E(() => r.value <= 1), C = E(() => r.value >= k.value), k = E(() => {
      const { perPage: t, totalItems: B } = c;
      return Math.ceil(B / t);
    });
    ve(() => {
      k.value > 0 && r.value > k.value && n("update:modelValue", k.value);
    });
    function A(t) {
      const B = u.value - 1;
      return !(a.value === !0 || t === 0 && r.value - f - 1 <= 0 || t === B && r.value + f >= k.value || t > 0 && t < B);
    }
    function v(t) {
      t < 1 && (t = 1), t > k.value && (t = k.value), n("update:modelValue", t);
    }
    function p() {
      n("update:modelValue", 1);
    }
    function _() {
      n("update:modelValue", k.value);
    }
    function i() {
      let t = r.value - 1;
      t < 1 && (t = 1), n("update:modelValue", t);
    }
    function y() {
      let t = r.value + 1;
      t > k.value && (t = k.value), n("update:modelValue", t);
    }
    return (t, B) => (b(), M("ul", {
      class: z(["pagination", t.size])
    }, [
      s("li", dt, [
        s("button", {
          class: "",
          disabled: g.value,
          innerHTML: t.firstText,
          onClick: p
        }, null, 8, pt)
      ]),
      s("li", ft, [
        s("button", {
          class: "",
          disabled: g.value,
          innerHTML: t.prevText,
          onClick: i
        }, null, 8, vt)
      ]),
      (b(!0), M(G, null, Y(d.value, (L, h) => (b(), M(G, null, [
        A(h) ? (b(), M("li", mt, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: t.ellipsisText
          }, null, 8, ht)
        ])) : (b(), M("li", {
          key: 1,
          "data-prev": "",
          class: z({ active: t.modelValue === L })
        }, [
          s("button", {
            class: "",
            onClick: (x) => v(L)
          }, R(L), 9, bt)
        ], 2))
      ], 64))), 256)),
      s("li", yt, [
        s("button", {
          class: "",
          disabled: C.value,
          innerHTML: t.nextText,
          onClick: y
        }, null, 8, _t)
      ]),
      s("li", kt, [
        s("button", {
          class: "",
          disabled: C.value,
          innerHTML: t.lastText,
          onClick: _
        }, null, 8, $t)
      ])
    ], 2));
  }
}), Ct = /* @__PURE__ */ U(gt, [["__scopeId", "data-v-2bfd7085"]]), wt = { class: "d-inline" }, Mt = { class: "fw-bold" }, St = /* @__PURE__ */ P({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const l = e, n = o, { options: c } = K(l), r = E({
      get: () => l.modelValue,
      set: (u) => n("update:modelValue", u)
    });
    return (u, a) => {
      const f = ie("b-dropdown-item"), d = ie("b-dropdown");
      return b(), Z(d, J({
        variant: "outline-primary",
        size: "sm"
      }, { ...u.$attrs }), {
        button: te(() => [
          s("div", wt, [
            $(u.$slots, "default", { selected: r.value }, () => [
              a[0] || (a[0] = s("span", null, "Per page: ", -1)),
              s("span", Mt, R(r.value), 1)
            ])
          ])
        ]),
        default: te(() => [
          (b(!0), M(G, null, Y(W(c), (g, C) => (b(), Z(f, {
            key: g,
            onClick: (k) => r.value = g,
            active: g === u.modelValue
          }, {
            default: te(() => [
              X(R(g), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), Bt = ["value"], Tt = /* @__PURE__ */ P({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const l = e, n = o, { options: c } = K(l), r = E({
      get: () => l.modelValue,
      set: (u) => n("update:modelValue", u)
    });
    return (u, a) => be((b(), M("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (f) => r.value = f)
    }, [
      (b(!0), M(G, null, Y(W(c), (f, d) => (b(), M("option", {
        key: f,
        value: f
      }, R(f), 9, Bt))), 128))
    ], 512)), [
      [De, r.value]
    ]);
  }
});
var q = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(q || {});
class Lt {
  constructor(o, l = "ASC", n) {
    N(this, "key");
    N(this, "direction");
    N(this, "sortFn");
    this.key = o, this.direction = l, this.sortFn = n;
  }
}
const de = (e, o) => {
  const l = (a, f) => {
    let d = typeof a, g = typeof f;
    return d == "number" && d == g;
  }, n = (a, f) => a - f, c = (a, f) => (a = a ?? "", f = f ?? "", a.localeCompare(f)), r = (a, f) => l(a, f) ? n : c, u = [...o];
  return u.sort((a, f) => {
    let d = 0;
    for (let g of e) {
      let { key: C, direction: k, sortFn: A } = g, v = k === "ASC" ? 1 : -1, p = a[C], _ = f[C];
      if (A = typeof A == "function" ? A : r(p, _), d = A(p, _, a, f, o, g, v) * v, d !== 0) return d;
    }
    return d;
  }), u;
}, xt = ["onClick"], At = { class: "th-wrapper" }, Dt = {
  key: 0,
  "data-sort-indicator": ""
}, Ot = { class: "sort-index" }, zt = { class: "sort-direction" }, Et = ["onMouseover"], Ht = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Rt = ["colspan"], It = ["innerHTML"];
class ne {
  constructor(o = "", l = "", n = !1, c) {
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
    this.key = o, this.label = l, this.sortable = n, this.sortFn = c;
  }
}
const Pt = /* @__PURE__ */ P({
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
      for (const i of p)
        _ = _.concat(Object.keys(i));
      return _ = _.filter((i, y) => _.indexOf(i) == y), _;
    }, n = o, c = e, r = T([]), { fields: u, items: a } = K(c), f = E(() => {
      if (c.externalSort || r.value.length == 0) return c.items;
      const p = [...c.items];
      return de(r.value, p);
    }), d = E(() => {
      let p = u.value, _ = [];
      return p.length === 0 && (p = l([...a.value])), p.reduce((i, y, t) => {
        if (typeof y == "string")
          i.push(new ne(y, y));
        else if (y instanceof ne)
          i.push(y);
        else if (typeof y == "object") {
          const { key: B, label: L, sortable: h, sortFn: x } = y;
          i.push(new ne(B, L, h, x));
        }
        return i;
      }, _);
    });
    function g(p) {
      const _ = r.value.findIndex((i) => i.key === p.key);
      return _ < 0 ? "" : _ + 1;
    }
    function C(p) {
      const _ = r.value.findIndex((y) => y.key === p.key);
      if (_ < 0) return "fas fa-sort";
      const i = r.value[_];
      return i.direction === q.ASC ? "fas fa-sort-up" : i.direction === q.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function k(p) {
      const { key: _ } = p, i = r.value.findIndex((y) => y.key === _);
      if (i < 0) {
        const y = new Lt(_, q.ASC, p.sortFn);
        r.value.push(y);
      } else {
        const y = r.value[i], t = y.direction;
        t === q.ASC ? y.direction = q.DESC : t === q.DESC && r.value.splice(i, 1);
      }
      n("sort", r.value, de);
    }
    function A(p, _, i, y) {
      n("onMouseOverCell", p, _, i, y);
    }
    let v = T(null);
    return oe(() => {
      v.value = ae();
    }), (p, _) => (b(), M("table", J({ ...p.$attrs }, {
      class: { striped: p.striped, hover: p.hover }
    }), [
      s("thead", null, [
        (b(!0), M(G, null, Y(d.value, (i) => (b(), M("th", {
          key: `thead-${i.key}`,
          class: z({ sortable: i.sortable }),
          onClick: (y) => i.sortable && k(i)
        }, [
          s("span", At, [
            $(p.$slots, `head(${i.key})`, {
              field: i,
              data: W(v),
              value: i.label
            }, () => [
              X(R(i.label), 1)
            ], !0),
            i.sortable ? (b(), M("span", Dt, [
              s("span", Ot, R(g(i)), 1),
              s("span", zt, [
                s("i", {
                  class: z(C(i))
                }, null, 2)
              ])
            ])) : Q("", !0)
          ])
        ], 10, xt))), 128))
      ]),
      s("tbody", null, [
        (b(!0), M(G, null, Y(f.value, (i, y) => (b(), M(G, {
          key: `trow-${(i == null ? void 0 : i.id) ?? y}`
        }, [
          $(p.$slots, "row", {
            item: i,
            index: y,
            colspan: d.value.length
          }, void 0, !0),
          s("tr", null, [
            (b(!0), M(G, null, Y(d.value, (t) => (b(), M("td", {
              key: `tcell-${t.key + ((i == null ? void 0 : i.id) ?? y)}`,
              class: z({ [`tcell-${t == null ? void 0 : t.key}`]: !0 }),
              onMouseover: (B) => A(B, i, y, t)
            }, [
              $(p.$slots, `cell(${t == null ? void 0 : t.key})`, {
                data: W(v),
                item: i,
                field: t,
                value: i[t == null ? void 0 : t.key]
              }, () => [
                X(R(i[t == null ? void 0 : t.key]), 1)
              ], !0)
            ], 42, Et))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        $(p.$slots, "footer", { data: W(v) }, void 0, !0)
      ]),
      p.showEmpty && f.value.length === 0 ? (b(), M("tr", Ht, [
        s("td", {
          colspan: d.value.length
        }, [
          $(p.$slots, "empty", {
            items: f.value,
            data: W(v),
            fields: d.value
          }, () => [
            s("span", { innerHTML: p.emptyText }, null, 8, It)
          ], !0)
        ], 8, Rt)
      ])) : Q("", !0)
    ], 16));
  }
}), Nt = /* @__PURE__ */ U(Pt, [["__scopeId", "data-v-b1e9b5de"]]);
var $e = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))($e || {});
const Vt = { class: "d-inline-block position-relative" }, Ft = ["disabled"], pe = "data-prevent-close", Gt = /* @__PURE__ */ P({
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
    size: { default: j.STANDARD },
    disabled: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: o, emit: l }) {
    const n = T(), c = e, r = T(), u = T(!1), a = T(c.variant), f = T(c.centered), d = T(c.dropup), g = T(c.dropend), C = T(c.dropstart), k = T(c.menuEnd), A = l, v = E(() => {
      const m = [];
      return a != null && a.value && m.push(`btn-${a.value}`), c.size && m.push(`btn-${c.size}`), m;
    }), p = E(() => {
      const m = [];
      return f != null && f.value && m.push("dropdown-center"), d != null && d.value && m.push("dropup"), C != null && C.value && m.push("dropstart"), !(C != null && C.value) && (g != null && g.value) && m.push("dropend"), m.length === 0 && m.push("dropdown"), m.unshift("btn-group"), m;
    }), _ = E(() => {
      const m = [];
      return u.value && m.push("show"), k.value && m.push("dropdown-menu-end"), m;
    }), i = () => {
      if (!u.value) return;
      const m = r.value.getBoundingClientRect(), H = n.value.getBoundingClientRect(), I = window.innerHeight - m.bottom, S = m.top, w = window.innerWidth - m.right, F = m.left;
      d.value = I < H.height && S >= H.height, k.value = w < H.width && F >= H.width;
    };
    async function y() {
      u.value = !0, await ze(), i();
    }
    function t() {
      u.value = !1;
    }
    function B(m) {
      u.value ? t() : y();
    }
    function L(m) {
      const { target: H } = m;
      (H == null ? void 0 : H.closest(`[${pe}],[${pe}=true]`)) || t();
    }
    function h() {
      u.value && t();
    }
    fe(u, (m, H) => {
      typeof H > "u" || m !== H && (A("toggle", { show: m }), m === !0 ? A("open", { show: m }) : A("close", { show: m }));
    }, { immediate: !0 });
    const x = {
      show: u,
      disabled: c.disabled,
      buttonClasses: v,
      onButtonClicked: B,
      onMenuClicked: L,
      onClickOutside: h,
      open: y,
      close: t
    };
    return o({
      ...x
    }), (m, H) => {
      const I = Oe("click-outside");
      return b(), M("div", {
        ref_key: "dropDownRef",
        ref: r,
        class: z([p.value, "dropdown-wrapper"])
      }, [
        be((b(), M("div", Vt, [
          $(m.$slots, "header", D(O({ ...x })), () => [
            s("button", {
              class: z(["btn dropdown-toggle", v.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: B,
              disabled: m.disabled
            }, [
              $(m.$slots, "button", D(O({ ...x })), () => [
                X(R(m.text), 1)
              ], !0)
            ], 10, Ft)
          ], !0),
          s("ul", {
            ref_key: "dropDownMenuRef",
            ref: n,
            class: z(["dropdown-menu", _.value]),
            onClick: L
          }, [
            $(m.$slots, "default", D(O({ ...x })), void 0, !0)
          ], 2)
        ])), [
          [I, h]
        ])
      ], 2);
    };
  }
}), jt = /* @__PURE__ */ U(Gt, [["__scopeId", "data-v-2264cc51"]]), Kt = ["data-prevent-close"], Ut = /* @__PURE__ */ P({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const o = e, { preventClose: l } = K(o);
    return (n, c) => (b(), M("li", {
      "data-prevent-close": W(l) ? "" : null
    }, [
      s("span", {
        class: z(["dropdown-item", { active: n.active }]),
        role: "button",
        tabindex: "0"
      }, [
        $(n.$slots, "default")
      ], 2)
    ], 8, Kt));
  }
}), Xt = {}, Yt = { "data-prevent-close": "" }, qt = { class: "dropdown-header" };
function Wt(e, o) {
  return b(), M("li", Yt, [
    s("h6", qt, [
      $(e.$slots, "default")
    ])
  ]);
}
const Zt = /* @__PURE__ */ U(Xt, [["render", Wt]]), Jt = {};
function Qt(e, o) {
  return b(), M("li", null, o[0] || (o[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const eo = /* @__PURE__ */ U(Jt, [["render", Qt]]), to = {
  mounted(e, o, l, n) {
    new Ie(e, {
      title: o.value,
      placement: o.arg,
      trigger: "hover"
    });
  }
}, oo = (e, o) => {
  function l(r, u) {
    for (; r !== null; ) {
      if (r === u)
        return !0;
      r = r.parentNode;
    }
    return !1;
  }
  const n = new AbortController();
  function c(r, u) {
    document.addEventListener("click", function(a) {
      const f = a.target;
      r && (l(f, r) || u());
    }, { signal: n.signal });
  }
  return c(e, o), n;
}, no = {
  mounted(e, o, l, n) {
    const c = o.value;
    oo(e, c);
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
N(se, "list", /* @__PURE__ */ new Set());
const so = { class: "drawer-content" }, lo = { class: "drawer-header" }, ao = ["innerHTML"], ro = { class: "drawer-body" }, uo = ["innerHTML"], io = { class: "drawer-footer" }, co = ["innerHTML"], po = ["innerHTML"], fo = /* @__PURE__ */ P({
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
  setup(e, { expose: o }) {
    const l = e, {
      backdrop: n,
      keyboard: c,
      focus: r,
      size: u,
      btnSize: a
    } = K(l), f = E(() => ee(u.value, "drawer-")), d = E(() => ee(a.value, "btn-")), g = T(), C = T(!1), k = ae();
    let A;
    async function v() {
      return C.value === !0 ? void 0 : new Promise((x, m) => {
        C.value = !0, A = x;
      });
    }
    function p(h = !0) {
      C.value = !1, typeof A == "function" && A(h);
    }
    function _() {
      C.value === !0 ? v() : p(!1);
    }
    function i(h) {
      (n == null ? void 0 : n.value) !== "static" && p(!1);
    }
    function y() {
      p(!1);
    }
    function t() {
      p(!1);
    }
    function B() {
      p(!0);
    }
    function L() {
      C.value === !0 ? se.add(k) : se.delete(k);
    }
    return o({
      show: v,
      hide: p,
      toggle: _
    }), (h, x) => (b(), Z(Ee, {
      onBeforeEnter: L,
      onAfterLeave: L
    }, {
      default: te(() => [
        C.value ? (b(), M("div", J({
          key: 0,
          ref_key: "drawerElement",
          ref: g,
          class: "drawer",
          tabindex: "-1"
        }, { ...h.$attrs }, {
          onClick: me(i, ["self"])
        }), [
          s("div", {
            class: z(["drawer-dialog", f.value])
          }, [
            s("div", so, [
              s("div", lo, [
                $(h.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: h.title
                  }, null, 8, ao)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: y
                })
              ]),
              s("div", ro, [
                $(h.$slots, "default", {}, () => [
                  s("span", { innerHTML: h.body }, null, 8, uo)
                ], !0)
              ]),
              s("div", io, [
                $(h.$slots, "footer", {}, () => [
                  h.okOnly ? Q("", !0) : (b(), M("button", {
                    key: 0,
                    type: "button",
                    class: z(["ms-auto btn btn-secondary", d.value]),
                    onClick: t
                  }, [
                    $(h.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: h.textCancel }, null, 8, co)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: z(["btn btn-primary", d.value]),
                    onClick: B
                  }, [
                    $(h.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: h.textOk }, null, 8, po)
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
}), vo = /* @__PURE__ */ U(fo, [["__scopeId", "data-v-2e49e8cb"]]), V = "b", ge = "$toaster", Ce = "$modalManager", we = "$dialogManager";
class Me {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const n = ue(nt).mount(o);
      this.component = n;
    }
    return this.component;
  }
}
N(Me, "component");
class Se {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const n = ue(ct).mount(o);
      this.component = n;
    }
    return this.component;
  }
}
N(Se, "component");
class Be {
  static getComponent() {
    if (!this.component) {
      const o = document.createElement("div");
      document.body.appendChild(o);
      const n = ue(Ye).mount(o);
      this.component = n;
    }
    return this.component;
  }
}
N(Be, "component");
function $o() {
  return re(ge);
}
function go() {
  return re(Ce);
}
function Co() {
  return re(we);
}
function mo(e) {
  e.component(`${V}-drawer`, vo), e.component(`${V}-modal`, _e), e.component(`${V}-dialog`, ke), e.component(`${V}-pagination`, Ct), e.component(`${V}-pagination-dropdown`, St), e.component(`${V}-pagination-select`, Tt), e.component(`${V}-dropdown`, jt), e.component(`${V}-dropdown-item`, Ut), e.component(`${V}-dropdown-header`, Zt), e.component(`${V}-dropdown-divider`, eo), e.component(`${V}-table`, Nt), e.component(`${V}-toast`, ye);
}
function ho(e) {
  e.directive("tooltip", to), e.directive("click-outside", no);
}
const wo = {
  install(e) {
    mo(e), ho(e);
    const o = Be.getComponent(), l = Me.getComponent(), n = Se.getComponent();
    e.provide(ge, o), e.provide(Ce, l), e.provide(we, n);
  }
};
export {
  wo as BootstrapVue,
  ke as DialogBox,
  ct as DialogManager,
  jt as Dropdown,
  eo as DropdownDivider,
  Zt as DropdownHeader,
  Ut as DropdownItem,
  _e as Modal,
  nt as ModalManager,
  St as PageSizeDropdown,
  Tt as PageSizeSelect,
  Ct as Pagination,
  Nt as Table,
  ne as TableFieldDefinition,
  ye as Toast,
  Ye as Toaster,
  no as clickOutside,
  to as tooltip,
  Co as useDialog,
  go as useModal,
  $o as useToaster
};
