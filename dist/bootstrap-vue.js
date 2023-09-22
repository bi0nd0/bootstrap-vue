var be = Object.defineProperty;
var ke = (e, t, n) => t in e ? be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var D = (e, t, n) => (ke(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as E, toRefs as z, ref as B, watch as $e, onMounted as Z, openBlock as m, createElementBlock as $, normalizeClass as S, renderSlot as x, createElementVNode as a, toDisplayString as O, createBlock as G, Teleport as ae, Fragment as R, renderList as P, mergeProps as K, computed as L, getCurrentInstance as ee, watchEffect as le, withModifiers as re, unref as k, normalizeProps as F, guardReactiveProps as j, createCommentVNode as Y, createVNode as Ce, resolveComponent as ne, withCtx as W, createTextVNode as X, withDirectives as ie, isRef as we, vModelSelect as ge, resolveDirective as xe, Transition as Te, inject as ue, createApp as ce } from "vue";
import { Toast as Me, Modal as Se, Tooltip as Le } from "bootstrap";
const Be = { class: "toast-header d-flex align-items-start" }, De = ["textContent"], Ae = ["textContent"], He = { class: "toast-body" }, Oe = ["textContent"], Ee = /* @__PURE__ */ E({
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
  setup(e, { expose: t, emit: n }) {
    const i = e, { visible: r, animation: v, autohide: y, delay: o } = z(i), u = B(), f = B();
    $e(r, (d) => {
      s();
    }, { immediate: !0 });
    function w() {
      u.value.show();
    }
    function p() {
      u.value.hide();
    }
    function b() {
      u.value.dispose();
    }
    function T() {
      u.value.isShown();
    }
    function _() {
      u.value.getOrCreateInstance();
    }
    function c() {
      u.value.getInstance();
    }
    function s() {
      u.value && (r.value === !0 ? w() : p());
    }
    function h() {
      n("hide", u.value);
    }
    function l() {
      n("hidden", u.value);
    }
    function g() {
      n("show", u.value);
    }
    async function M() {
      n("shown", u.value);
    }
    return t({ show: w, hide: p, dispose: b, isShown: T, getOrCreateInstance: _, getInstance: c }), Z(() => {
      f.value.addEventListener("hide.bs.toast", h), f.value.addEventListener("hidden.bs.toast", l), f.value.addEventListener("show.bs.toast", g), f.value.addEventListener("shown.bs.toast", M), u.value = new Me(f.value, {
        animation: v.value,
        autohide: y.value,
        delay: o.value
      }), s();
    }), (d, C) => (m(), $("div", {
      ref_key: "toastRef",
      ref: f,
      class: S(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      x(d.$slots, "header", {}, () => [
        a("div", Be, [
          a("div", null, [
            x(d.$slots, "title", {}, () => [
              a("strong", {
                class: "d-block",
                textContent: O(e.title)
              }, null, 8, De)
            ], !0),
            x(d.$slots, "subtitle", {}, () => [
              a("small", {
                textContent: O(e.subtitle)
              }, null, 8, Ae)
            ], !0)
          ]),
          a("div", { class: "ms-auto" }, [
            a("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: p
            })
          ])
        ])
      ], !0),
      x(d.$slots, "body", {}, () => [
        a("div", He, [
          x(d.$slots, "default", {}, () => [
            a("span", {
              textContent: O(e.body)
            }, null, 8, Oe)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
});
const N = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, de = /* @__PURE__ */ N(Ee, [["__scopeId", "data-v-7482662b"]]);
function Re() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const i = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (n == "x" ? i : i & 3 | 8).toString(16);
  });
}
const ze = { id: "toast-wrapper" };
let oe;
const Pe = /* @__PURE__ */ E({
  __name: "Toaster",
  setup(e, { expose: t }) {
    const n = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, i = B(/* @__PURE__ */ new Map());
    oe = (v, y = "top right") => {
      const o = Re(), u = { ...n, ...v, id: o };
      let f = i.value.get(y);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(u), i.value.set(y, f);
    };
    function r(v, y) {
      const o = i.value.get(v);
      o == null || o.delete(y);
    }
    return t({ toast: oe }), (v, y) => (m(), G(ae, { to: "body" }, [
      a("div", ze, [
        (m(!0), $(R, null, P(i.value, ([o, u]) => (m(), $("div", {
          key: o,
          class: S(["toast-group", `${o}`])
        }, [
          (m(!0), $(R, null, P(u, (f, w) => (m(), G(de, K({
            key: f.id
          }, f, {
            onHidden: (p) => r(o, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const Ve = /* @__PURE__ */ N(Pe, [["__scopeId", "data-v-786d1c50"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const q = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(V).includes(n) || n == "" ? "" : `${t}${n}`;
}, Ne = ["onClick"], Ie = { class: "modal-content" }, Fe = { class: "modal-header" }, je = ["innerHTML"], Ge = { class: "modal-body" }, Ke = ["innerHTML"], Ue = { class: "modal-footer" }, Ye = ["innerHTML"], We = ["innerHTML"];
class U {
  static addToStack(t) {
    t != null && this.modalStack.push(t);
  }
  static removeFromStack(t) {
    if (t == null)
      return;
    const n = this.modalStack.indexOf(t);
    n < 0 || this.modalStack.splice(n, 1);
  }
  static getLast() {
    const t = this.modalStack.length;
    if (t !== 0)
      return this.modalStack[t - 1];
  }
}
D(U, "modalStack", new Array());
const fe = /* @__PURE__ */ E({
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
    btnSize: { default: V.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: i,
      keyboard: r,
      focus: v,
      disableOutsideClick: y,
      size: o,
      btnSize: u
    } = z(n), f = L(() => q(o.value, "modal-")), w = L(() => q(u.value, "btn-")), p = B();
    let b;
    ee();
    let T;
    function _() {
      return new Promise((A, ye) => {
        const te = U.getLast();
        te && te.hide(), U.addToStack(b), b == null || b.show(), T = A;
      });
    }
    function c(C = !0) {
      U.removeFromStack(b), b == null || b.hide();
      const A = U.getLast();
      A && A.show(), typeof T == "function" && T(C);
    }
    function s() {
      b == null || b.toggle();
    }
    Z(() => {
      b = new Se(p.value, {
        backdrop: i == null ? void 0 : i.value,
        keyboard: r.value,
        focus: v.value
      }), le(() => {
        (n == null ? void 0 : n.visible) === !0 ? b == null || b.show() : b == null || b.hide();
      });
    });
    function h(C) {
      (i == null ? void 0 : i.value) !== "static" && c(!1);
    }
    function l() {
      c(!1);
    }
    function g() {
      c(!1);
    }
    function M() {
      c(!0);
    }
    t({
      modal: b,
      show: _,
      hide: c,
      toggle: s,
      onHeaderCloseClicked: l,
      onCancelClicked: g,
      onOkCLicked: M
    });
    const d = { show: _, hide: c, toggle: s, modal: b };
    return (C, A) => (m(), $("div", K({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...C.$attrs }, {
      onClick: re(h, ["self"])
    }), [
      a("div", {
        class: S(["modal-dialog", k(f)])
      }, [
        a("div", Ie, [
          a("div", Fe, [
            x(C.$slots, "header", F(j({ ...d })), () => [
              a("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, je)
            ]),
            a("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: l
            })
          ]),
          a("div", Ge, [
            x(C.$slots, "default", F(j({ ...d })), () => [
              a("span", { innerHTML: e.body }, null, 8, Ke)
            ])
          ]),
          a("div", Ue, [
            x(C.$slots, "footer", F(j({ ...d })), () => [
              e.okOnly ? Y("", !0) : (m(), $("button", {
                key: 0,
                type: "button",
                class: S(["btn btn-secondary", k(w)]),
                onClick: g
              }, [
                x(C.$slots, "button-cancel", F(j({ ...d })), () => [
                  a("span", { innerHTML: e.textCancel }, null, 8, Ye)
                ])
              ], 2)),
              a("button", {
                type: "button",
                class: S(["btn btn-primary", k(w)]),
                onClick: M
              }, [
                x(C.$slots, "button-ok", F(j({ ...d })), () => [
                  a("span", { innerHTML: e.textOk }, null, 8, We)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Ne));
  }
}), Xe = /* @__PURE__ */ E({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = B(void 0), i = B({});
    function r(y = {}) {
      var o;
      return y.okOnly = !1, i.value = y, (o = n.value) == null ? void 0 : o.show();
    }
    function v(y = {}) {
      var o;
      return y.okOnly = !0, i.value = y, (o = n.value) == null ? void 0 : o.show();
    }
    return t({ confirm: r, alert: v }), (y, o) => (m(), G(ae, { to: "body" }, [
      Ce(fe, K({
        ref_key: "modalRef",
        ref: n
      }, { ...i.value }), null, 16)
    ]));
  }
}), qe = { "data-first": "" }, Je = ["disabled", "innerHTML"], Qe = { "data-prev": "" }, Ze = ["disabled", "innerHTML"], et = { key: 0 }, tt = ["innerHTML"], nt = ["onClick"], ot = { "data-next": "" }, st = ["disabled", "innerHTML"], at = { "data-last": "" }, lt = ["disabled", "innerHTML"], rt = /* @__PURE__ */ E({
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
    const n = e;
    function i(l, g = 0) {
      return [...Array(l).keys()].map((M) => M + g);
    }
    const { modelValue: r, maxVisibleButtons: v, hideEllipsis: y } = z(n), o = Math.floor(v.value / 2), u = L(() => {
      let l = v.value, g = r.value <= o ? 1 : r.value - o;
      return r.value >= p.value - o && (g = p.value - l + 1), g < 1 && (g = 1), p.value < l && (l = p.value), i(l, g);
    }), f = L(() => r.value <= 1), w = L(() => r.value >= p.value), p = L(() => {
      const { perPage: l, totalItems: g } = n;
      return Math.ceil(g / l);
    });
    le(() => {
      p.value > 0 && r.value > p.value && t("update:modelValue", p.value);
    });
    function b(l) {
      const g = v.value - 1;
      return !(y.value === !0 || l === 0 && r.value - o - 1 <= 0 || l === g && r.value + o >= p.value || l > 0 && l < g);
    }
    function T(l) {
      l < 1 && (l = 1), l > p.value && (l = p.value), t("update:modelValue", l);
    }
    function _() {
      t("update:modelValue", 1);
    }
    function c() {
      t("update:modelValue", p.value);
    }
    function s() {
      let l = r.value - 1;
      l < 1 && (l = 1), t("update:modelValue", l);
    }
    function h() {
      let l = r.value + 1;
      l > p.value && (l = p.value), t("update:modelValue", l);
    }
    return (l, g) => (m(), $("ul", {
      class: S(["pagination", e.size])
    }, [
      a("li", qe, [
        a("button", {
          class: "",
          disabled: k(f),
          innerHTML: e.firstText,
          onClick: _
        }, null, 8, Je)
      ]),
      a("li", Qe, [
        a("button", {
          class: "",
          disabled: k(f),
          innerHTML: e.prevText,
          onClick: s
        }, null, 8, Ze)
      ]),
      (m(!0), $(R, null, P(k(u), (M, d) => (m(), $(R, null, [
        b(d) ? (m(), $("li", et, [
          a("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, tt)
        ])) : (m(), $("li", {
          key: 1,
          "data-prev": "",
          class: S({ active: e.modelValue === M })
        }, [
          a("button", {
            class: "",
            onClick: (C) => T(M)
          }, O(M), 9, nt)
        ], 2))
      ], 64))), 256)),
      a("li", ot, [
        a("button", {
          class: "",
          disabled: k(w),
          innerHTML: e.nextText,
          onClick: h
        }, null, 8, st)
      ]),
      a("li", at, [
        a("button", {
          class: "",
          disabled: k(w),
          innerHTML: e.lastText,
          onClick: c
        }, null, 8, lt)
      ])
    ], 2));
  }
});
const it = /* @__PURE__ */ N(rt, [["__scopeId", "data-v-2bfd7085"]]), ut = { class: "d-inline" }, ct = /* @__PURE__ */ a("span", null, "Per page: ", -1), dt = { class: "fw-bold" }, ft = /* @__PURE__ */ E({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: i } = z(n), r = L({
      get: () => n.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    return (v, y) => {
      const o = ne("b-dropdown-item"), u = ne("b-dropdown");
      return m(), G(u, K({
        variant: "outline-primary",
        size: "sm"
      }, { ...v.$attrs }), {
        button: W(() => [
          a("div", ut, [
            x(v.$slots, "default", { selected: k(r) }, () => [
              ct,
              a("span", dt, O(k(r)), 1)
            ])
          ])
        ]),
        default: W(() => [
          (m(!0), $(R, null, P(k(i), (f, w) => (m(), G(o, {
            key: f,
            onClick: (p) => r.value = f,
            active: f === e.modelValue
          }, {
            default: W(() => [
              X(O(f), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), vt = ["value"], pt = /* @__PURE__ */ E({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: i } = z(n), r = L({
      get: () => n.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    return (v, y) => ie((m(), $("select", {
      "onUpdate:modelValue": y[0] || (y[0] = (o) => we(r) ? r.value = o : null)
    }, [
      (m(!0), $(R, null, P(k(i), (o, u) => (m(), $("option", {
        key: o,
        value: o
      }, O(o), 9, vt))), 128))
    ], 512)), [
      [ge, k(r)]
    ]);
  }
});
var I = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(I || {});
class _t {
  constructor(t, n = "ASC", i) {
    D(this, "key");
    D(this, "direction");
    D(this, "sortFn");
    this.key = t, this.direction = n, this.sortFn = i;
  }
}
const se = (e, t) => {
  const n = (o, u) => {
    let f = typeof o, w = typeof u;
    return f == "number" && f == w;
  }, i = (o, u) => o - u, r = (o, u) => (o = o ?? "", u = u ?? "", o.localeCompare(u)), v = (o, u) => n(o, u) ? i : r, y = [...t];
  return y.sort((o, u) => {
    let f = 0;
    for (let w of e) {
      let { key: p, direction: b, sortFn: T } = w, _ = b === "ASC" ? 1 : -1, c = o[p], s = u[p];
      if (T = typeof T == "function" ? T : v(c, s), f = T(c, s, o, u, t, w, _) * _, f !== 0)
        return f;
    }
    return f;
  }), y;
}, ht = ["onClick"], mt = { class: "th-wrapper" }, yt = {
  key: 0,
  "data-sort-indicator": ""
}, bt = { class: "sort-index" }, kt = { class: "sort-direction" }, $t = ["onMouseover"], Ct = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, wt = ["colspan"], gt = ["innerHTML"];
class J {
  constructor(t = "", n = "", i = !1, r) {
    D(this, "key");
    // age
    D(this, "label");
    // Person age
    D(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    D(this, "sortFn");
    this.key = t, this.label = n, this.sortable = i, this.sortFn = r;
  }
}
const xt = /* @__PURE__ */ E({
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
    const n = e, i = (_) => {
      let c = [];
      for (const s of _)
        c = c.concat(Object.keys(s));
      return c = c.filter((s, h) => c.indexOf(s) == h), c;
    }, r = B([]), { fields: v, items: y } = z(n), o = L(() => {
      if (n.externalSort || r.value.length == 0)
        return n.items;
      const _ = [...n.items];
      return se(r.value, _);
    }), u = L(() => {
      let _ = v.value, c = [];
      return _.length === 0 && (_ = i([...y.value])), _.reduce((s, h, l) => {
        if (typeof h == "string")
          s.push(new J(h, h));
        else if (h instanceof J)
          s.push(h);
        else if (typeof h == "object") {
          const { key: g, label: M, sortable: d, sortFn: C } = h;
          s.push(new J(g, M, d, C));
        }
        return s;
      }, c);
    });
    function f(_) {
      const c = r.value.findIndex((s) => s.key === _.key);
      return c < 0 ? "" : c + 1;
    }
    function w(_) {
      const c = r.value.findIndex((h) => h.key === _.key);
      if (c < 0)
        return "fas fa-sort";
      const s = r.value[c];
      return s.direction === I.ASC ? "fas fa-sort-up" : s.direction === I.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(_) {
      const { key: c } = _, s = r.value.findIndex((h) => h.key === c);
      if (s < 0) {
        const h = new _t(c, I.ASC, _.sortFn);
        r.value.push(h);
      } else {
        const h = r.value[s], l = h.direction;
        l === I.ASC ? h.direction = I.DESC : l === I.DESC && r.value.splice(s, 1);
      }
      t("sort", r.value, se);
    }
    function b(_, c, s, h) {
      t("onMouseOverCell", _, c, s, h);
    }
    let T = B(null);
    return Z(() => {
      T.value = ee();
    }), (_, c) => (m(), $("table", K({ ..._.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      a("thead", null, [
        (m(!0), $(R, null, P(k(u), (s) => (m(), $("th", {
          key: `thead-${s.key}`,
          class: S({ sortable: s.sortable }),
          onClick: (h) => s.sortable && p(s)
        }, [
          a("span", mt, [
            x(_.$slots, `head(${s.key})`, {
              field: s,
              data: k(T),
              value: s.label
            }, () => [
              X(O(s.label), 1)
            ], !0),
            s.sortable ? (m(), $("span", yt, [
              a("span", bt, O(f(s)), 1),
              a("span", kt, [
                a("i", {
                  class: S(w(s))
                }, null, 2)
              ])
            ])) : Y("", !0)
          ])
        ], 10, ht))), 128))
      ]),
      a("tbody", null, [
        (m(!0), $(R, null, P(k(o), (s, h) => (m(), $(R, {
          key: `trow-${(s == null ? void 0 : s.id) ?? h}`
        }, [
          x(_.$slots, "row", {
            item: s,
            index: h,
            colspan: k(u).length
          }, void 0, !0),
          a("tr", null, [
            (m(!0), $(R, null, P(k(u), (l) => (m(), $("td", {
              key: `tcell-${l.key + ((s == null ? void 0 : s.id) ?? h)}`,
              class: S({ [`tcell-${l == null ? void 0 : l.key}`]: !0 }),
              onMouseover: (g) => b(g, s, h, l)
            }, [
              x(_.$slots, `cell(${l == null ? void 0 : l.key})`, {
                data: k(T),
                item: s,
                field: l,
                value: s[l == null ? void 0 : l.key]
              }, () => [
                X(O(s[l == null ? void 0 : l.key]), 1)
              ], !0)
            ], 42, $t))), 128))
          ])
        ], 64))), 128))
      ]),
      a("tfoot", null, [
        x(_.$slots, "footer", { data: k(T) }, void 0, !0)
      ]),
      e.showEmpty && k(o).length === 0 ? (m(), $("tr", Ct, [
        a("td", {
          colspan: k(u).length
        }, [
          x(_.$slots, "empty", {
            items: k(o),
            data: k(T),
            fields: k(u)
          }, () => [
            a("span", { innerHTML: e.emptyText }, null, 8, gt)
          ], !0)
        ], 8, wt)
      ])) : Y("", !0)
    ], 16));
  }
});
const Tt = /* @__PURE__ */ N(xt, [["__scopeId", "data-v-7828e531"]]);
var ve = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ve || {});
const Mt = { class: "d-inline-block position-relative" }, St = ["disabled"], Lt = /* @__PURE__ */ E({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: ve.PRIMARY },
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
    const t = e, n = B(), i = B(), { variant: r, centered: v, dropup: y, dropend: o, dropstart: u, menuEnd: f } = z(t), w = B(!1), p = L(() => {
      const d = [];
      return r != null && r.value && d.push(`btn-${r.value}`), t.size && d.push(`btn-${t.size}`), d;
    }), b = L(() => {
      const d = [];
      return v != null && v.value && d.push("dropdown-center"), y != null && y.value && d.push("dropup"), u != null && u.value && d.push("dropstart"), !(u != null && u.value) && (o != null && o.value) && d.push("dropend"), d.length === 0 ? d.push("dropdown") : d.unshift("btn-group"), d;
    }), T = L(() => {
      const d = [];
      return w.value && d.push("show"), f.value && d.push("dropdown-menu-end"), d;
    });
    function _() {
      w.value = !0;
    }
    function c() {
      w.value = !1;
    }
    const s = "data-prevent-close";
    function h(d) {
      w.value ? c() : _();
    }
    function l(d) {
      const { target: C } = d;
      (C == null ? void 0 : C.closest(`[${s}],[${s}=true]`)) || c();
    }
    function g() {
      w.value && c();
    }
    const M = {
      show: w,
      disabled: t.disabled,
      buttonClasses: p,
      onButtonClicked: h,
      onMenuClicked: l,
      onClickOutside: g,
      open: _,
      close: c
    };
    return (d, C) => {
      const A = xe("click-outside");
      return m(), $("div", {
        ref_key: "dropDownRef",
        ref: i,
        class: S(k(b))
      }, [
        ie((m(), $("div", Mt, [
          x(d.$slots, "header", F(j({ ...M })), () => [
            a("button", {
              class: S(["btn dropdown-toggle", k(p)]),
              type: "button",
              "aria-expanded": "false",
              onClick: h,
              disabled: e.disabled
            }, [
              x(d.$slots, "button", {}, () => [
                X(O(e.text), 1)
              ], !0)
            ], 10, St)
          ], !0),
          a("ul", {
            ref_key: "dropDownMenuRef",
            ref: n,
            class: S(["dropdown-menu", k(T)]),
            onClick: l
          }, [
            x(d.$slots, "default", {}, void 0, !0)
          ], 2)
        ])), [
          [A, g]
        ])
      ], 2);
    };
  }
});
const Bt = /* @__PURE__ */ N(Lt, [["__scopeId", "data-v-f986f80f"]]), Dt = ["data-prevent-close"], At = /* @__PURE__ */ E({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = z(t);
    return (i, r) => (m(), $("li", {
      "data-prevent-close": k(n) ? "" : null
    }, [
      a("span", {
        class: S(["dropdown-item", { active: e.active }]),
        role: "button",
        tabindex: "0"
      }, [
        x(i.$slots, "default")
      ], 2)
    ], 8, Dt));
  }
}), Ht = {}, Ot = { "data-prevent-close": "" }, Et = { class: "dropdown-header" };
function Rt(e, t) {
  return m(), $("li", Ot, [
    a("h6", Et, [
      x(e.$slots, "default")
    ])
  ]);
}
const zt = /* @__PURE__ */ N(Ht, [["render", Rt]]), Pt = {}, Vt = /* @__PURE__ */ a("hr", { class: "dropdown-divider" }, null, -1), Nt = [
  Vt
];
function It(e, t) {
  return m(), $("li", null, Nt);
}
const Ft = /* @__PURE__ */ N(Pt, [["render", It]]), jt = {
  mounted(e, t, n, i) {
    new Le(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Gt = (e, t) => {
  function n(v, y) {
    for (; v !== null; ) {
      if (v === y)
        return !0;
      v = v.parentNode;
    }
    return !1;
  }
  const i = new AbortController();
  function r(v, y) {
    document.addEventListener("click", function(o) {
      const u = o.target;
      v && (n(u, v) || y());
    }, { signal: i.signal });
  }
  return r(e, t), i;
}, Kt = {
  mounted(e, t, n, i) {
    const r = t.value;
    Gt(e, r);
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
D(Q, "list", /* @__PURE__ */ new Set());
const Ut = ["onClick"], Yt = { class: "drawer-content" }, Wt = { class: "drawer-header" }, Xt = ["innerHTML"], qt = { class: "drawer-body" }, Jt = ["innerHTML"], Qt = { class: "drawer-footer" }, Zt = ["innerHTML"], en = ["innerHTML"], tn = /* @__PURE__ */ E({
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
    const n = e, {
      backdrop: i,
      keyboard: r,
      focus: v,
      size: y,
      btnSize: o
    } = z(n), u = L(() => q(y.value, "drawer-")), f = L(() => q(o.value, "btn-")), w = B(), p = B(!1), b = ee();
    let T;
    async function _() {
      return p.value === !0 ? void 0 : new Promise((A, ye) => {
        p.value = !0, T = A;
      });
    }
    function c(C = !0) {
      p.value = !1, typeof T == "function" && T(C);
    }
    function s() {
      p.value === !0 ? _() : c(!1);
    }
    function h(C) {
      (i == null ? void 0 : i.value) !== "static" && c(!1);
    }
    function l() {
      c(!1);
    }
    function g() {
      c(!1);
    }
    function M() {
      c(!0);
    }
    function d() {
      p.value === !0 ? Q.add(b) : Q.delete(b);
    }
    return t({
      show: _,
      hide: c,
      toggle: s
    }), (C, A) => (m(), G(Te, {
      onBeforeEnter: d,
      onAfterLeave: d
    }, {
      default: W(() => [
        p.value ? (m(), $("div", K({
          key: 0,
          ref_key: "drawerElement",
          ref: w,
          class: "drawer",
          tabindex: "-1"
        }, { ...C.$attrs }, {
          onClick: re(h, ["self"])
        }), [
          a("div", {
            class: S(["drawer-dialog", k(u)])
          }, [
            a("div", Yt, [
              a("div", Wt, [
                x(C.$slots, "header", {}, () => [
                  a("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Xt)
                ], !0),
                a("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: l
                })
              ]),
              a("div", qt, [
                x(C.$slots, "default", {}, () => [
                  a("span", { innerHTML: e.body }, null, 8, Jt)
                ], !0)
              ]),
              a("div", Qt, [
                x(C.$slots, "footer", {}, () => [
                  e.okOnly ? Y("", !0) : (m(), $("button", {
                    key: 0,
                    type: "button",
                    class: S(["ms-auto btn btn-secondary", k(f)]),
                    onClick: g
                  }, [
                    x(C.$slots, "button-cancel", {}, () => [
                      a("span", { innerHTML: e.textCancel }, null, 8, Zt)
                    ], !0)
                  ], 2)),
                  a("button", {
                    type: "button",
                    class: S(["btn btn-primary", k(f)]),
                    onClick: M
                  }, [
                    x(C.$slots, "button-ok", {}, () => [
                      a("span", { innerHTML: e.textOk }, null, 8, en)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Ut)) : Y("", !0)
      ]),
      _: 3
    }));
  }
});
const nn = /* @__PURE__ */ N(tn, [["__scopeId", "data-v-2e49e8cb"]]), H = "b", pe = "$toaster", _e = "$modalManager";
class he {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const i = ce(Xe).mount(t);
      this.component = i;
    }
    return this.component;
  }
}
D(he, "component");
class me {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const i = ce(Ve).mount(t);
      this.component = i;
    }
    return this.component;
  }
}
D(me, "component");
function un() {
  return ue(pe);
}
function cn() {
  return ue(_e);
}
function on(e) {
  e.component(`${H}-drawer`, nn), e.component(`${H}-modal`, fe), e.component(`${H}-pagination`, it), e.component(`${H}-pagination-dropdown`, ft), e.component(`${H}-pagination-select`, pt), e.component(`${H}-dropdown`, Bt), e.component(`${H}-dropdown-item`, At), e.component(`${H}-dropdown-header`, zt), e.component(`${H}-dropdown-divider`, Ft), e.component(`${H}-table`, Tt), e.component(`${H}-toast`, de);
}
function sn(e) {
  e.directive("tooltip", jt), e.directive("click-outside", Kt);
}
const dn = {
  install(e) {
    on(e), sn(e);
    const t = me.getComponent();
    e.provide(pe, t);
    const n = he.getComponent();
    e.provide(_e, n);
  }
};
export {
  dn as BootstrapVue,
  Bt as Dropdown,
  Ft as DropdownDivider,
  zt as DropdownHeader,
  At as DropdownItem,
  fe as Modal,
  Xe as ModalManager,
  ft as PageSizeDropdown,
  pt as PageSizeSelect,
  it as Pagination,
  Tt as Table,
  J as TableFieldDefinition,
  de as Toast,
  Ve as Toaster,
  Kt as clickOutside,
  jt as tooltip,
  cn as useModal,
  un as useToaster
};
