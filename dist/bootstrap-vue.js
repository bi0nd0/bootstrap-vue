var we = Object.defineProperty;
var Se = (e, t, a) => t in e ? we(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var E = (e, t, a) => Se(e, typeof t != "symbol" ? t + "" : t, a);
import { defineComponent as R, toRefs as F, ref as D, watch as Me, onMounted as ee, openBlock as b, createElementBlock as C, normalizeClass as x, renderSlot as g, normalizeProps as A, guardReactiveProps as O, createElementVNode as s, toDisplayString as z, createBlock as X, Teleport as ne, Fragment as I, renderList as K, mergeProps as q, computed as H, getCurrentInstance as se, watchEffect as de, withModifiers as ce, createCommentVNode as J, createVNode as fe, onUnmounted as Be, normalizeStyle as Te, createTextVNode as G, resolveComponent as le, withCtx as Z, unref as Y, withDirectives as pe, vModelSelect as Le, resolveDirective as xe, Transition as De, inject as ve, createApp as ae } from "vue";
import { Toast as Ae, Modal as Oe, Tooltip as He } from "bootstrap";
const ze = { class: "toast-header" }, Ee = ["textContent"], Re = ["textContent"], Pe = { class: "toast-body" }, Ve = ["textContent"], Ie = /* @__PURE__ */ R({
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
    const o = e, v = a, { visible: r, animation: i, autohide: u, delay: f } = F(o), p = D(), _ = D();
    Me(r, (M) => {
      l();
    }, { immediate: !0 });
    function S() {
      p.value.show();
    }
    function k() {
      p.value.hide();
    }
    function T() {
      p.value.dispose();
    }
    function m() {
      p.value.isShown();
    }
    function c() {
      p.value.getOrCreateInstance();
    }
    function y() {
      p.value.getInstance();
    }
    function l() {
      p.value && (r.value === !0 ? S() : k());
    }
    function h() {
      v("hide", p.value);
    }
    function n() {
      v("hidden", p.value);
    }
    function d() {
      v("show", p.value);
    }
    async function w() {
      v("shown", p.value);
    }
    const $ = { show: S, hide: k, dispose: T, isShown: m, getOrCreateInstance: c, getInstance: y };
    return t({ ...$ }), ee(() => {
      _.value.addEventListener("hide.bs.toast", h), _.value.addEventListener("hidden.bs.toast", n), _.value.addEventListener("show.bs.toast", d), _.value.addEventListener("shown.bs.toast", w), p.value = new Ae(_.value, {
        animation: i.value,
        autohide: u.value,
        delay: f.value
      }), l();
    }), (M, B) => (b(), C("div", {
      ref_key: "toastRef",
      ref: _,
      class: x(["toast", [M.variant ? `text-bg-${M.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      g(M.$slots, "header", A(O({ ...$ })), () => [
        s("div", ze, [
          g(M.$slots, "title", A(O({ ...$ })), () => [
            s("strong", {
              class: "me-auto",
              textContent: z(M.title)
            }, null, 8, Ee)
          ], !0),
          g(M.$slots, "subtitle", A(O({ ...$ })), () => [
            s("small", {
              textContent: z(M.subtitle)
            }, null, 8, Re)
          ], !0),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: k
          })
        ])
      ], !0),
      g(M.$slots, "body", A(O({ ...$ })), () => [
        s("div", Pe, [
          g(M.$slots, "default", A(O({ ...$ })), () => [
            s("span", {
              textContent: z(M.body)
            }, null, 8, Ve)
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
}, me = /* @__PURE__ */ j(Ie, [["__scopeId", "data-v-c0cdbae8"]]);
function Ne() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const o = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (a == "x" ? o : o & 3 | 8).toString(16);
  });
}
const Fe = { id: "toast-wrapper" };
let re;
const je = /* @__PURE__ */ R({
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
    }, o = D(/* @__PURE__ */ new Map());
    re = (r, i = "top right") => {
      const u = Ne(), f = { ...a, ...r, id: u };
      let p = o.value.get(i);
      p instanceof Set || (p = /* @__PURE__ */ new Set()), p.add(f), o.value.set(i, p);
    };
    function v(r, i) {
      const u = o.value.get(r);
      u == null || u.delete(i);
    }
    return t({ toast: re }), (r, i) => (b(), X(ne, { to: "body" }, [
      s("div", Fe, [
        (b(!0), C(I, null, K(o.value, ([u, f]) => (b(), C("div", {
          key: u,
          class: x(["toast-group", `${u}`])
        }, [
          (b(!0), C(I, null, K(f, (p, _) => (b(), X(me, q({
            key: p.id,
            ref_for: !0
          }, p, {
            onHidden: (S) => v(u, p)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Ge = /* @__PURE__ */ j(je, [["__scopeId", "data-v-786d1c50"]]);
var N = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(N || {});
const Q = (e, t = "") => {
  let a = e.toLowerCase();
  return !Object.values(N).includes(a) || a == "" ? "" : `${t}${a}`;
}, Ke = { class: "modal-content" }, Ue = { class: "modal-header" }, Ye = ["innerHTML"], Xe = { class: "modal-body" }, qe = ["innerHTML"], We = { class: "modal-footer" }, Je = ["innerHTML"], Qe = ["innerHTML"];
class Ze {
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
E(Ze, "modalStack", new Array());
const he = /* @__PURE__ */ R({
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
      focus: i,
      disableOutsideClick: u,
      size: f,
      btnSize: p
    } = F(o), _ = a, S = H(() => Q(f.value, "modal-")), k = H(() => Q(p.value, "btn-")), T = D();
    let m;
    se();
    let c;
    function y() {
      return new Promise((L, V) => {
        m == null || m.show(), c = L, _("onShown", m);
      });
    }
    function l(B = !0) {
      m == null || m.hide(), typeof c == "function" && c(B), _("onHidden", m);
    }
    function h() {
      m == null || m.toggle();
    }
    ee(() => {
      m = new Oe(T.value, {
        backdrop: v == null ? void 0 : v.value,
        keyboard: r.value,
        focus: i.value
      }), de(() => {
        (o == null ? void 0 : o.visible) === !0 ? m == null || m.show() : m == null || m.hide();
      });
    });
    function n(B) {
      (v == null ? void 0 : v.value) !== "static" && l(!1);
    }
    function d() {
      l(!1);
    }
    function w() {
      l(!1);
    }
    function $() {
      l(!0);
    }
    t({
      modal: m,
      show: y,
      hide: l,
      toggle: h,
      onHeaderCloseClicked: d,
      onCancelClicked: w,
      onOkCLicked: $
    });
    const M = { show: y, hide: l, toggle: h, modal: m };
    return (B, L) => (b(), C("div", q({
      ref_key: "modalElement",
      ref: T,
      class: "modal fade",
      tabindex: "-1"
    }, { ...B.$attrs }, {
      onClick: ce(n, ["self"])
    }), [
      s("div", {
        class: x(["modal-dialog", S.value])
      }, [
        s("div", Ke, [
          s("div", Ue, [
            g(B.$slots, "header", A(O({ ...M })), () => [
              s("h5", {
                class: "modal-title",
                innerHTML: B.title
              }, null, 8, Ye)
            ]),
            s("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: d
            })
          ]),
          s("div", Xe, [
            g(B.$slots, "default", A(O({ ...M })), () => [
              s("span", { innerHTML: B.body }, null, 8, qe)
            ])
          ]),
          s("div", We, [
            g(B.$slots, "footer", A(O({ ...M })), () => [
              B.okOnly ? J("", !0) : (b(), C("button", {
                key: 0,
                type: "button",
                class: x(["btn btn-secondary", k.value]),
                onClick: w
              }, [
                g(B.$slots, "button-cancel", A(O({ ...M })), () => [
                  s("span", { innerHTML: B.textCancel }, null, 8, Je)
                ])
              ], 2)),
              s("button", {
                type: "button",
                class: x(["btn btn-primary", k.value]),
                onClick: $
              }, [
                g(B.$slots, "button-ok", A(O({ ...M })), () => [
                  s("span", { innerHTML: B.textOk }, null, 8, Qe)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16));
  }
}), et = /* @__PURE__ */ R({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const a = D(void 0), o = D({});
    function v(i = {}) {
      var u;
      return i.okOnly = !1, o.value = i, (u = a.value) == null ? void 0 : u.show();
    }
    function r(i = {}) {
      var u;
      return i.okOnly = !0, o.value = i, (u = a.value) == null ? void 0 : u.show();
    }
    return t({ confirm: v, alert: r }), (i, u) => (b(), X(ne, { to: "body" }, [
      fe(he, q({
        ref_key: "modalRef",
        ref: a
      }, { ...o.value }), null, 16)
    ]));
  }
}), tt = {
  "data-header": "",
  class: "border-bottom"
}, ot = { class: "d-flex gap-2 p-2" }, nt = { class: "p-2" }, st = {
  "data-footer": "",
  class: "border-top p-2"
}, at = { class: "buttons" }, lt = /* @__PURE__ */ R({
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
    const a = e, { backdrop: o, disableOutsideClick: v, modal: r, size: i, btnSize: u } = F(a), f = () => document.querySelectorAll("dialog[open]").length, p = 1056, _ = D(p), S = D(!1), k = D(!1), T = D(!1), m = D(), c = H(() => Q(i.value, "modal-")), y = H(() => Q(u.value, "btn-")), l = H(() => ({
      opening: S.value,
      closing: k.value,
      "no-backdrop": o.value === !1
    }));
    let h = null;
    const n = () => {
      const L = f();
      _.value = p + L;
    }, d = async () => (n(), S.value = !0, m.value.addEventListener(
      "animationend",
      () => {
        S.value = !1, T.value = !0;
      },
      { once: !0 }
    ), r.value === !0 ? m.value.showModal() : m.value.show(), new Promise((L, V) => {
      h = L;
    })), w = async (L = !1) => {
      k.value = !0, m.value.addEventListener(
        "animationend",
        () => {
          m.value.close(), k.value = !1, T.value = !1, typeof h == "function" && h(L), h = null;
        },
        { once: !0 }
      );
    }, $ = async () => {
      T.value === !0 ? w() : d();
    }, M = () => {
      o.value === "static" || v.value === !0 || w(!1);
    }, B = { show: d, hide: w, toggle: $, dialog: m };
    if (t({
      show: d,
      hide: w,
      toggle: $
    }), r.value === !0) {
      let L = function(W) {
        o.value === "static" || v.value === !0 || W.target === m.value && w(!1);
      };
      const V = new AbortController();
      ee(() => {
        document.addEventListener("click", (W) => {
          L(W);
        }, { signal: V.signal });
      }), Be(() => {
        V.abort();
      });
    }
    return (L, V) => (b(), C("div", {
      class: "dialog-wrapper",
      style: Te({ zIndex: _.value })
    }, [
      s("div", {
        class: "backdrop",
        onClick: M
      }),
      s("dialog", {
        ref_key: "dialog",
        ref: m,
        class: x(l.value)
      }, [
        s("div", {
          class: x(["content", c.value])
        }, [
          g(L.$slots, "header", A(O({ ...B })), () => [
            s("div", tt, [
              s("div", ot, [
                g(L.$slots, "title", A(O({ ...B })), () => [
                  G(z(L.title), 1)
                ], !0),
                s("button", {
                  class: "ms-auto",
                  type: "button",
                  "data-btn-close": "",
                  "aria-label": "Close",
                  onClick: V[0] || (V[0] = (W) => w(!1))
                })
              ])
            ])
          ], !0),
          s("div", nt, [
            g(L.$slots, "default", A(O({ ...B })), () => [
              G(z(L.body), 1)
            ], !0)
          ]),
          g(L.$slots, "footer", A(O({ ...B })), () => [
            s("div", st, [
              s("div", at, [
                L.okOnly ? J("", !0) : (b(), C("button", {
                  key: 0,
                  type: "button",
                  class: x(["btn btn-secondary", y.value]),
                  onClick: V[1] || (V[1] = (W) => w(!1))
                }, [
                  g(L.$slots, "textCancel", A(O({ ...B })), () => [
                    G(z(L.textCancel), 1)
                  ], !0)
                ], 2)),
                s("button", {
                  type: "button",
                  class: x(["btn btn-primary", y.value]),
                  onClick: V[2] || (V[2] = (W) => w(!0))
                }, [
                  g(L.$slots, "textOk", A(O({ ...B })), () => [
                    G(z(L.textOk), 1)
                  ], !0)
                ], 2)
              ])
            ])
          ], !0)
        ], 2)
      ], 2)
    ], 4));
  }
}), be = /* @__PURE__ */ j(lt, [["__scopeId", "data-v-7bc31432"]]), rt = /* @__PURE__ */ R({
  __name: "DialogManager",
  setup(e, { expose: t }) {
    const a = D(void 0), o = D({});
    function v(i = {}) {
      var u;
      return i.okOnly = !1, o.value = i, (u = a.value) == null ? void 0 : u.show();
    }
    function r(i = {}) {
      var u;
      return i.okOnly = !0, o.value = i, (u = a.value) == null ? void 0 : u.show();
    }
    return t({ confirm: v, alert: r }), (i, u) => (b(), X(ne, { to: "body" }, [
      fe(be, q({
        ref_key: "modalRef",
        ref: a
      }, { ...o.value }), null, 16)
    ]));
  }
}), ut = { "data-first": "" }, it = ["disabled", "innerHTML"], dt = { "data-prev": "" }, ct = ["disabled", "innerHTML"], ft = { key: 0 }, pt = ["innerHTML"], vt = ["onClick"], mt = { "data-next": "" }, ht = ["disabled", "innerHTML"], bt = { "data-last": "" }, yt = ["disabled", "innerHTML"], _t = /* @__PURE__ */ R({
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
    function a(n, d = 0) {
      return [...Array(n).keys()].map((w) => w + d);
    }
    const o = t, v = e, { modelValue: r, maxVisibleButtons: i, hideEllipsis: u } = F(v), f = Math.floor(i.value / 2), p = H(() => {
      let n = i.value, d = r.value <= f ? 1 : r.value - f;
      return r.value >= k.value - f && (d = k.value - n + 1), d < 1 && (d = 1), k.value < n && (n = k.value), a(n, d);
    }), _ = H(() => r.value <= 1), S = H(() => r.value >= k.value), k = H(() => {
      const { perPage: n, totalItems: d } = v;
      return Math.ceil(d / n);
    });
    de(() => {
      k.value > 0 && r.value > k.value && o("update:modelValue", k.value);
    });
    function T(n) {
      const d = i.value - 1;
      return !(u.value === !0 || n === 0 && r.value - f - 1 <= 0 || n === d && r.value + f >= k.value || n > 0 && n < d);
    }
    function m(n) {
      n < 1 && (n = 1), n > k.value && (n = k.value), o("update:modelValue", n);
    }
    function c() {
      o("update:modelValue", 1);
    }
    function y() {
      o("update:modelValue", k.value);
    }
    function l() {
      let n = r.value - 1;
      n < 1 && (n = 1), o("update:modelValue", n);
    }
    function h() {
      let n = r.value + 1;
      n > k.value && (n = k.value), o("update:modelValue", n);
    }
    return (n, d) => (b(), C("ul", {
      class: x(["pagination", n.size])
    }, [
      s("li", ut, [
        s("button", {
          class: "",
          disabled: _.value,
          innerHTML: n.firstText,
          onClick: c
        }, null, 8, it)
      ]),
      s("li", dt, [
        s("button", {
          class: "",
          disabled: _.value,
          innerHTML: n.prevText,
          onClick: l
        }, null, 8, ct)
      ]),
      (b(!0), C(I, null, K(p.value, (w, $) => (b(), C(I, null, [
        T($) ? (b(), C("li", ft, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: n.ellipsisText
          }, null, 8, pt)
        ])) : (b(), C("li", {
          key: 1,
          "data-prev": "",
          class: x({ active: n.modelValue === w })
        }, [
          s("button", {
            class: "",
            onClick: (M) => m(w)
          }, z(w), 9, vt)
        ], 2))
      ], 64))), 256)),
      s("li", mt, [
        s("button", {
          class: "",
          disabled: S.value,
          innerHTML: n.nextText,
          onClick: h
        }, null, 8, ht)
      ]),
      s("li", bt, [
        s("button", {
          class: "",
          disabled: S.value,
          innerHTML: n.lastText,
          onClick: y
        }, null, 8, yt)
      ])
    ], 2));
  }
}), kt = /* @__PURE__ */ j(_t, [["__scopeId", "data-v-2bfd7085"]]), $t = { class: "d-inline" }, Ct = { class: "fw-bold" }, gt = /* @__PURE__ */ R({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = t, { options: v } = F(a), r = H({
      get: () => a.modelValue,
      set: (i) => o("update:modelValue", i)
    });
    return (i, u) => {
      const f = le("b-dropdown-item"), p = le("b-dropdown");
      return b(), X(p, q({
        variant: "outline-primary",
        size: "sm"
      }, { ...i.$attrs }), {
        button: Z(() => [
          s("div", $t, [
            g(i.$slots, "default", { selected: r.value }, () => [
              u[0] || (u[0] = s("span", null, "Per page: ", -1)),
              s("span", Ct, z(r.value), 1)
            ])
          ])
        ]),
        default: Z(() => [
          (b(!0), C(I, null, K(Y(v), (_, S) => (b(), X(f, {
            key: _,
            onClick: (k) => r.value = _,
            active: _ === i.modelValue
          }, {
            default: Z(() => [
              G(z(_), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), wt = ["value"], St = /* @__PURE__ */ R({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = t, { options: v } = F(a), r = H({
      get: () => a.modelValue,
      set: (i) => o("update:modelValue", i)
    });
    return (i, u) => pe((b(), C("select", {
      "onUpdate:modelValue": u[0] || (u[0] = (f) => r.value = f)
    }, [
      (b(!0), C(I, null, K(Y(v), (f, p) => (b(), C("option", {
        key: f,
        value: f
      }, z(f), 9, wt))), 128))
    ], 512)), [
      [Le, r.value]
    ]);
  }
});
var U = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(U || {});
class Mt {
  constructor(t, a = "ASC", o) {
    E(this, "key");
    E(this, "direction");
    E(this, "sortFn");
    this.key = t, this.direction = a, this.sortFn = o;
  }
}
const ue = (e, t) => {
  const a = (u, f) => {
    let p = typeof u, _ = typeof f;
    return p == "number" && p == _;
  }, o = (u, f) => u - f, v = (u, f) => (u = u ?? "", f = f ?? "", u.localeCompare(f)), r = (u, f) => a(u, f) ? o : v, i = [...t];
  return i.sort((u, f) => {
    let p = 0;
    for (let _ of e) {
      let { key: S, direction: k, sortFn: T } = _, m = k === "ASC" ? 1 : -1, c = u[S], y = f[S];
      if (T = typeof T == "function" ? T : r(c, y), p = T(c, y, u, f, t, _, m) * m, p !== 0) return p;
    }
    return p;
  }), i;
}, Bt = ["onClick"], Tt = { class: "th-wrapper" }, Lt = {
  key: 0,
  "data-sort-indicator": ""
}, xt = { class: "sort-index" }, Dt = { class: "sort-direction" }, At = ["onMouseover"], Ot = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Ht = ["colspan"], zt = ["innerHTML"];
class te {
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
const Et = /* @__PURE__ */ R({
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
    const a = (c) => {
      let y = [];
      for (const l of c)
        y = y.concat(Object.keys(l));
      return y = y.filter((l, h) => y.indexOf(l) == h), y;
    }, o = t, v = e, r = D([]), { fields: i, items: u } = F(v), f = H(() => {
      if (v.externalSort || r.value.length == 0) return v.items;
      const c = [...v.items];
      return ue(r.value, c);
    }), p = H(() => {
      let c = i.value, y = [];
      return c.length === 0 && (c = a([...u.value])), c.reduce((l, h, n) => {
        if (typeof h == "string")
          l.push(new te(h, h));
        else if (h instanceof te)
          l.push(h);
        else if (typeof h == "object") {
          const { key: d, label: w, sortable: $, sortFn: M } = h;
          l.push(new te(d, w, $, M));
        }
        return l;
      }, y);
    });
    function _(c) {
      const y = r.value.findIndex((l) => l.key === c.key);
      return y < 0 ? "" : y + 1;
    }
    function S(c) {
      const y = r.value.findIndex((h) => h.key === c.key);
      if (y < 0) return "fas fa-sort";
      const l = r.value[y];
      return l.direction === U.ASC ? "fas fa-sort-up" : l.direction === U.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function k(c) {
      const { key: y } = c, l = r.value.findIndex((h) => h.key === y);
      if (l < 0) {
        const h = new Mt(y, U.ASC, c.sortFn);
        r.value.push(h);
      } else {
        const h = r.value[l], n = h.direction;
        n === U.ASC ? h.direction = U.DESC : n === U.DESC && r.value.splice(l, 1);
      }
      o("sort", r.value, ue);
    }
    function T(c, y, l, h) {
      o("onMouseOverCell", c, y, l, h);
    }
    let m = D(null);
    return ee(() => {
      m.value = se();
    }), (c, y) => (b(), C("table", q({ ...c.$attrs }, {
      class: { striped: c.striped, hover: c.hover }
    }), [
      s("thead", null, [
        (b(!0), C(I, null, K(p.value, (l) => (b(), C("th", {
          key: `thead-${l.key}`,
          class: x({ sortable: l.sortable }),
          onClick: (h) => l.sortable && k(l)
        }, [
          s("span", Tt, [
            g(c.$slots, `head(${l.key})`, {
              field: l,
              data: Y(m),
              value: l.label
            }, () => [
              G(z(l.label), 1)
            ], !0),
            l.sortable ? (b(), C("span", Lt, [
              s("span", xt, z(_(l)), 1),
              s("span", Dt, [
                s("i", {
                  class: x(S(l))
                }, null, 2)
              ])
            ])) : J("", !0)
          ])
        ], 10, Bt))), 128))
      ]),
      s("tbody", null, [
        (b(!0), C(I, null, K(f.value, (l, h) => (b(), C(I, {
          key: `trow-${(l == null ? void 0 : l.id) ?? h}`
        }, [
          g(c.$slots, "row", {
            item: l,
            index: h,
            colspan: p.value.length
          }, void 0, !0),
          s("tr", null, [
            (b(!0), C(I, null, K(p.value, (n) => (b(), C("td", {
              key: `tcell-${n.key + ((l == null ? void 0 : l.id) ?? h)}`,
              class: x({ [`tcell-${n == null ? void 0 : n.key}`]: !0 }),
              onMouseover: (d) => T(d, l, h, n)
            }, [
              g(c.$slots, `cell(${n == null ? void 0 : n.key})`, {
                data: Y(m),
                item: l,
                field: n,
                value: l[n == null ? void 0 : n.key]
              }, () => [
                G(z(l[n == null ? void 0 : n.key]), 1)
              ], !0)
            ], 42, At))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        g(c.$slots, "footer", { data: Y(m) }, void 0, !0)
      ]),
      c.showEmpty && f.value.length === 0 ? (b(), C("tr", Ot, [
        s("td", {
          colspan: p.value.length
        }, [
          g(c.$slots, "empty", {
            items: f.value,
            data: Y(m),
            fields: p.value
          }, () => [
            s("span", { innerHTML: c.emptyText }, null, 8, zt)
          ], !0)
        ], 8, Ht)
      ])) : J("", !0)
    ], 16));
  }
}), Rt = /* @__PURE__ */ j(Et, [["__scopeId", "data-v-b1e9b5de"]]);
var ye = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ye || {});
const Pt = { class: "d-inline-block position-relative" }, Vt = ["disabled"], ie = "data-prevent-close", It = /* @__PURE__ */ R({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: ye.PRIMARY },
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
    const t = D(), a = e, o = D(), { variant: v, centered: r, dropup: i, dropend: u, dropstart: f, menuEnd: p } = F(a), _ = D(!1), S = H(() => {
      const d = [];
      return v != null && v.value && d.push(`btn-${v.value}`), a.size && d.push(`btn-${a.size}`), d;
    }), k = H(() => {
      const d = [];
      return r != null && r.value && d.push("dropdown-center"), i != null && i.value && d.push("dropup"), f != null && f.value && d.push("dropstart"), !(f != null && f.value) && (u != null && u.value) && d.push("dropend"), d.length === 0 ? d.push("dropdown") : d.unshift("btn-group"), d;
    }), T = H(() => {
      const d = [];
      return _.value && d.push("show"), p.value && d.push("dropdown-menu-end"), d;
    });
    function m() {
      _.value = !0;
    }
    function c() {
      _.value = !1;
    }
    function y(d) {
      _.value ? c() : m();
    }
    function l(d) {
      const { target: w } = d;
      (w == null ? void 0 : w.closest(`[${ie}],[${ie}=true]`)) || c();
    }
    function h() {
      _.value && c();
    }
    const n = {
      show: _,
      disabled: a.disabled,
      buttonClasses: S,
      onButtonClicked: y,
      onMenuClicked: l,
      onClickOutside: h,
      open: m,
      close: c
    };
    return (d, w) => {
      const $ = xe("click-outside");
      return b(), C("div", {
        ref_key: "dropDownRef",
        ref: o,
        class: x(k.value)
      }, [
        pe((b(), C("div", Pt, [
          g(d.$slots, "header", A(O({ ...n })), () => [
            s("button", {
              class: x(["btn dropdown-toggle", S.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: y,
              disabled: d.disabled
            }, [
              g(d.$slots, "button", A(O({ ...n })), () => [
                G(z(d.text), 1)
              ], !0)
            ], 10, Vt)
          ], !0),
          s("ul", {
            ref_key: "dropDownMenuRef",
            ref: t,
            class: x(["dropdown-menu", T.value]),
            onClick: l
          }, [
            g(d.$slots, "default", A(O({ ...n })), void 0, !0)
          ], 2)
        ])), [
          [$, h]
        ])
      ], 2);
    };
  }
}), Nt = /* @__PURE__ */ j(It, [["__scopeId", "data-v-f9658383"]]), Ft = ["data-prevent-close"], jt = /* @__PURE__ */ R({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: a } = F(t);
    return (o, v) => (b(), C("li", {
      "data-prevent-close": Y(a) ? "" : null
    }, [
      s("span", {
        class: x(["dropdown-item", { active: o.active }]),
        role: "button",
        tabindex: "0"
      }, [
        g(o.$slots, "default")
      ], 2)
    ], 8, Ft));
  }
}), Gt = {}, Kt = { "data-prevent-close": "" }, Ut = { class: "dropdown-header" };
function Yt(e, t) {
  return b(), C("li", Kt, [
    s("h6", Ut, [
      g(e.$slots, "default")
    ])
  ]);
}
const Xt = /* @__PURE__ */ j(Gt, [["render", Yt]]), qt = {};
function Wt(e, t) {
  return b(), C("li", null, t[0] || (t[0] = [
    s("hr", { class: "dropdown-divider" }, null, -1)
  ]));
}
const Jt = /* @__PURE__ */ j(qt, [["render", Wt]]), Qt = {
  mounted(e, t, a, o) {
    new He(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Zt = (e, t) => {
  function a(r, i) {
    for (; r !== null; ) {
      if (r === i)
        return !0;
      r = r.parentNode;
    }
    return !1;
  }
  const o = new AbortController();
  function v(r, i) {
    document.addEventListener("click", function(u) {
      const f = u.target;
      r && (a(f, r) || i());
    }, { signal: o.signal });
  }
  return v(e, t), o;
}, eo = {
  mounted(e, t, a, o) {
    const v = t.value;
    Zt(e, v);
  }
};
class oe {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
E(oe, "list", /* @__PURE__ */ new Set());
const to = { class: "drawer-content" }, oo = { class: "drawer-header" }, no = ["innerHTML"], so = { class: "drawer-body" }, ao = ["innerHTML"], lo = { class: "drawer-footer" }, ro = ["innerHTML"], uo = ["innerHTML"], io = /* @__PURE__ */ R({
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
      size: i,
      btnSize: u
    } = F(a), f = H(() => Q(i.value, "drawer-")), p = H(() => Q(u.value, "btn-")), _ = D(), S = D(!1), k = se();
    let T;
    async function m() {
      return S.value === !0 ? void 0 : new Promise((M, B) => {
        S.value = !0, T = M;
      });
    }
    function c($ = !0) {
      S.value = !1, typeof T == "function" && T($);
    }
    function y() {
      S.value === !0 ? m() : c(!1);
    }
    function l($) {
      (o == null ? void 0 : o.value) !== "static" && c(!1);
    }
    function h() {
      c(!1);
    }
    function n() {
      c(!1);
    }
    function d() {
      c(!0);
    }
    function w() {
      S.value === !0 ? oe.add(k) : oe.delete(k);
    }
    return t({
      show: m,
      hide: c,
      toggle: y
    }), ($, M) => (b(), X(De, {
      onBeforeEnter: w,
      onAfterLeave: w
    }, {
      default: Z(() => [
        S.value ? (b(), C("div", q({
          key: 0,
          ref_key: "drawerElement",
          ref: _,
          class: "drawer",
          tabindex: "-1"
        }, { ...$.$attrs }, {
          onClick: ce(l, ["self"])
        }), [
          s("div", {
            class: x(["drawer-dialog", f.value])
          }, [
            s("div", to, [
              s("div", oo, [
                g($.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: $.title
                  }, null, 8, no)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: h
                })
              ]),
              s("div", so, [
                g($.$slots, "default", {}, () => [
                  s("span", { innerHTML: $.body }, null, 8, ao)
                ], !0)
              ]),
              s("div", lo, [
                g($.$slots, "footer", {}, () => [
                  $.okOnly ? J("", !0) : (b(), C("button", {
                    key: 0,
                    type: "button",
                    class: x(["ms-auto btn btn-secondary", p.value]),
                    onClick: n
                  }, [
                    g($.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: $.textCancel }, null, 8, ro)
                    ], !0)
                  ], 2)),
                  s("button", {
                    type: "button",
                    class: x(["btn btn-primary", p.value]),
                    onClick: d
                  }, [
                    g($.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: $.textOk }, null, 8, uo)
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
}), co = /* @__PURE__ */ j(io, [["__scopeId", "data-v-2e49e8cb"]]), P = "b", _e = "$toaster", ke = "$modalManager", fo = "$dialogManager";
class $e {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const o = ae(et).mount(t);
      this.component = o;
    }
    return this.component;
  }
}
E($e, "component");
class Ce {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const o = ae(rt).mount(t);
      this.component = o;
    }
    return this.component;
  }
}
E(Ce, "component");
class ge {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const o = ae(Ge).mount(t);
      this.component = o;
    }
    return this.component;
  }
}
E(ge, "component");
function yo() {
  return ve(_e);
}
function _o() {
  return ve(ke);
}
function po(e) {
  e.component(`${P}-drawer`, co), e.component(`${P}-modal`, he), e.component(`${P}-dialog`, be), e.component(`${P}-pagination`, kt), e.component(`${P}-pagination-dropdown`, gt), e.component(`${P}-pagination-select`, St), e.component(`${P}-dropdown`, Nt), e.component(`${P}-dropdown-item`, jt), e.component(`${P}-dropdown-header`, Xt), e.component(`${P}-dropdown-divider`, Jt), e.component(`${P}-table`, Rt), e.component(`${P}-toast`, me);
}
function vo(e) {
  e.directive("tooltip", Qt), e.directive("click-outside", eo);
}
const ko = {
  install(e) {
    po(e), vo(e);
    const t = ge.getComponent(), a = $e.getComponent(), o = Ce.getComponent();
    e.provide(_e, t), e.provide(ke, a), e.provide(fo, o);
  }
};
export {
  ko as BootstrapVue,
  be as DialogBox,
  rt as DialogManager,
  Nt as Dropdown,
  Jt as DropdownDivider,
  Xt as DropdownHeader,
  jt as DropdownItem,
  he as Modal,
  et as ModalManager,
  gt as PageSizeDropdown,
  St as PageSizeSelect,
  kt as Pagination,
  Rt as Table,
  te as TableFieldDefinition,
  me as Toast,
  Ge as Toaster,
  eo as clickOutside,
  Qt as tooltip,
  _o as useModal,
  yo as useToaster
};
