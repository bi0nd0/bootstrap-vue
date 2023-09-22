var be = Object.defineProperty;
var ke = (e, t, n) => t in e ? be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => (ke(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as z, toRefs as V, ref as B, watch as $e, onMounted as Z, openBlock as m, createElementBlock as C, normalizeClass as S, renderSlot as x, normalizeProps as O, guardReactiveProps as E, createElementVNode as l, toDisplayString as R, createBlock as G, Teleport as ae, Fragment as P, renderList as N, mergeProps as K, computed as L, getCurrentInstance as ee, watchEffect as le, withModifiers as re, unref as $, createCommentVNode as Y, createVNode as Ce, resolveComponent as ne, withCtx as W, createTextVNode as X, withDirectives as ie, isRef as we, vModelSelect as ge, resolveDirective as xe, Transition as Te, inject as ue, createApp as ce } from "vue";
import { Toast as Me, Modal as Se, Tooltip as Le } from "bootstrap";
const Be = { class: "toast-header" }, De = ["textContent"], Ae = ["textContent"], He = { class: "toast-body" }, Oe = ["textContent"], Ee = /* @__PURE__ */ z({
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
    const i = e, { visible: r, animation: v, autohide: y, delay: o } = V(i), u = B(), f = B();
    $e(r, (b) => {
      s();
    }, { immediate: !0 });
    function w() {
      u.value.show();
    }
    function p() {
      u.value.hide();
    }
    function k() {
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
    function a() {
      n("hidden", u.value);
    }
    function g() {
      n("show", u.value);
    }
    async function M() {
      n("shown", u.value);
    }
    const d = { show: w, hide: p, dispose: k, isShown: T, getOrCreateInstance: _, getInstance: c };
    return t({ ...d }), Z(() => {
      f.value.addEventListener("hide.bs.toast", h), f.value.addEventListener("hidden.bs.toast", a), f.value.addEventListener("show.bs.toast", g), f.value.addEventListener("shown.bs.toast", M), u.value = new Me(f.value, {
        animation: v.value,
        autohide: y.value,
        delay: o.value
      }), s();
    }), (b, D) => (m(), C("div", {
      ref_key: "toastRef",
      ref: f,
      class: S(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      x(b.$slots, "header", O(E({ ...d })), () => [
        l("div", Be, [
          x(b.$slots, "title", O(E({ ...d })), () => [
            l("strong", {
              class: "me-auto",
              textContent: R(e.title)
            }, null, 8, De)
          ], !0),
          x(b.$slots, "subtitle", O(E({ ...d })), () => [
            l("small", {
              textContent: R(e.subtitle)
            }, null, 8, Ae)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ], !0),
      x(b.$slots, "body", O(E({ ...d })), () => [
        l("div", He, [
          x(b.$slots, "default", O(E({ ...d })), () => [
            l("span", {
              textContent: R(e.body)
            }, null, 8, Oe)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
});
const F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, r] of t)
    n[i] = r;
  return n;
}, de = /* @__PURE__ */ F(Ee, [["__scopeId", "data-v-c0cdbae8"]]);
function Re() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const i = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (n == "x" ? i : i & 3 | 8).toString(16);
  });
}
const ze = { id: "toast-wrapper" };
let oe;
const Pe = /* @__PURE__ */ z({
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
      l("div", ze, [
        (m(!0), C(P, null, N(i.value, ([o, u]) => (m(), C("div", {
          key: o,
          class: S(["toast-group", `${o}`])
        }, [
          (m(!0), C(P, null, N(u, (f, w) => (m(), G(de, K({
            key: f.id
          }, f, {
            onHidden: (p) => r(o, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const Ve = /* @__PURE__ */ F(Pe, [["__scopeId", "data-v-786d1c50"]]);
var I = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(I || {});
const q = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(I).includes(n) || n == "" ? "" : `${t}${n}`;
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
A(U, "modalStack", new Array());
const fe = /* @__PURE__ */ z({
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
    size: { default: I.STANDARD },
    btnSize: { default: I.SMALL },
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
    } = V(n), f = L(() => q(o.value, "modal-")), w = L(() => q(u.value, "btn-")), p = B();
    let k;
    ee();
    let T;
    function _() {
      return new Promise((D, ye) => {
        const te = U.getLast();
        te && te.hide(), U.addToStack(k), k == null || k.show(), T = D;
      });
    }
    function c(b = !0) {
      U.removeFromStack(k), k == null || k.hide();
      const D = U.getLast();
      D && D.show(), typeof T == "function" && T(b);
    }
    function s() {
      k == null || k.toggle();
    }
    Z(() => {
      k = new Se(p.value, {
        backdrop: i == null ? void 0 : i.value,
        keyboard: r.value,
        focus: v.value
      }), le(() => {
        (n == null ? void 0 : n.visible) === !0 ? k == null || k.show() : k == null || k.hide();
      });
    });
    function h(b) {
      (i == null ? void 0 : i.value) !== "static" && c(!1);
    }
    function a() {
      c(!1);
    }
    function g() {
      c(!1);
    }
    function M() {
      c(!0);
    }
    t({
      modal: k,
      show: _,
      hide: c,
      toggle: s,
      onHeaderCloseClicked: a,
      onCancelClicked: g,
      onOkCLicked: M
    });
    const d = { show: _, hide: c, toggle: s, modal: k };
    return (b, D) => (m(), C("div", K({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...b.$attrs }, {
      onClick: re(h, ["self"])
    }), [
      l("div", {
        class: S(["modal-dialog", $(f)])
      }, [
        l("div", Ie, [
          l("div", Fe, [
            x(b.$slots, "header", O(E({ ...d })), () => [
              l("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, je)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: a
            })
          ]),
          l("div", Ge, [
            x(b.$slots, "default", O(E({ ...d })), () => [
              l("span", { innerHTML: e.body }, null, 8, Ke)
            ])
          ]),
          l("div", Ue, [
            x(b.$slots, "footer", O(E({ ...d })), () => [
              e.okOnly ? Y("", !0) : (m(), C("button", {
                key: 0,
                type: "button",
                class: S(["btn btn-secondary", $(w)]),
                onClick: g
              }, [
                x(b.$slots, "button-cancel", O(E({ ...d })), () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, Ye)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: S(["btn btn-primary", $(w)]),
                onClick: M
              }, [
                x(b.$slots, "button-ok", O(E({ ...d })), () => [
                  l("span", { innerHTML: e.textOk }, null, 8, We)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Ne));
  }
}), Xe = /* @__PURE__ */ z({
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
}), qe = { "data-first": "" }, Je = ["disabled", "innerHTML"], Qe = { "data-prev": "" }, Ze = ["disabled", "innerHTML"], et = { key: 0 }, tt = ["innerHTML"], nt = ["onClick"], ot = { "data-next": "" }, st = ["disabled", "innerHTML"], at = { "data-last": "" }, lt = ["disabled", "innerHTML"], rt = /* @__PURE__ */ z({
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
    size: { default: I.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e;
    function i(a, g = 0) {
      return [...Array(a).keys()].map((M) => M + g);
    }
    const { modelValue: r, maxVisibleButtons: v, hideEllipsis: y } = V(n), o = Math.floor(v.value / 2), u = L(() => {
      let a = v.value, g = r.value <= o ? 1 : r.value - o;
      return r.value >= p.value - o && (g = p.value - a + 1), g < 1 && (g = 1), p.value < a && (a = p.value), i(a, g);
    }), f = L(() => r.value <= 1), w = L(() => r.value >= p.value), p = L(() => {
      const { perPage: a, totalItems: g } = n;
      return Math.ceil(g / a);
    });
    le(() => {
      p.value > 0 && r.value > p.value && t("update:modelValue", p.value);
    });
    function k(a) {
      const g = v.value - 1;
      return !(y.value === !0 || a === 0 && r.value - o - 1 <= 0 || a === g && r.value + o >= p.value || a > 0 && a < g);
    }
    function T(a) {
      a < 1 && (a = 1), a > p.value && (a = p.value), t("update:modelValue", a);
    }
    function _() {
      t("update:modelValue", 1);
    }
    function c() {
      t("update:modelValue", p.value);
    }
    function s() {
      let a = r.value - 1;
      a < 1 && (a = 1), t("update:modelValue", a);
    }
    function h() {
      let a = r.value + 1;
      a > p.value && (a = p.value), t("update:modelValue", a);
    }
    return (a, g) => (m(), C("ul", {
      class: S(["pagination", e.size])
    }, [
      l("li", qe, [
        l("button", {
          class: "",
          disabled: $(f),
          innerHTML: e.firstText,
          onClick: _
        }, null, 8, Je)
      ]),
      l("li", Qe, [
        l("button", {
          class: "",
          disabled: $(f),
          innerHTML: e.prevText,
          onClick: s
        }, null, 8, Ze)
      ]),
      (m(!0), C(P, null, N($(u), (M, d) => (m(), C(P, null, [
        k(d) ? (m(), C("li", et, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, tt)
        ])) : (m(), C("li", {
          key: 1,
          "data-prev": "",
          class: S({ active: e.modelValue === M })
        }, [
          l("button", {
            class: "",
            onClick: (b) => T(M)
          }, R(M), 9, nt)
        ], 2))
      ], 64))), 256)),
      l("li", ot, [
        l("button", {
          class: "",
          disabled: $(w),
          innerHTML: e.nextText,
          onClick: h
        }, null, 8, st)
      ]),
      l("li", at, [
        l("button", {
          class: "",
          disabled: $(w),
          innerHTML: e.lastText,
          onClick: c
        }, null, 8, lt)
      ])
    ], 2));
  }
});
const it = /* @__PURE__ */ F(rt, [["__scopeId", "data-v-2bfd7085"]]), ut = { class: "d-inline" }, ct = /* @__PURE__ */ l("span", null, "Per page: ", -1), dt = { class: "fw-bold" }, ft = /* @__PURE__ */ z({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: i } = V(n), r = L({
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
          l("div", ut, [
            x(v.$slots, "default", { selected: $(r) }, () => [
              ct,
              l("span", dt, R($(r)), 1)
            ])
          ])
        ]),
        default: W(() => [
          (m(!0), C(P, null, N($(i), (f, w) => (m(), G(o, {
            key: f,
            onClick: (p) => r.value = f,
            active: f === e.modelValue
          }, {
            default: W(() => [
              X(R(f), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), vt = ["value"], pt = /* @__PURE__ */ z({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: i } = V(n), r = L({
      get: () => n.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    return (v, y) => ie((m(), C("select", {
      "onUpdate:modelValue": y[0] || (y[0] = (o) => we(r) ? r.value = o : null)
    }, [
      (m(!0), C(P, null, N($(i), (o, u) => (m(), C("option", {
        key: o,
        value: o
      }, R(o), 9, vt))), 128))
    ], 512)), [
      [ge, $(r)]
    ]);
  }
});
var j = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(j || {});
class _t {
  constructor(t, n = "ASC", i) {
    A(this, "key");
    A(this, "direction");
    A(this, "sortFn");
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
      let { key: p, direction: k, sortFn: T } = w, _ = k === "ASC" ? 1 : -1, c = o[p], s = u[p];
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
    A(this, "key");
    // age
    A(this, "label");
    // Person age
    A(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    A(this, "sortFn");
    this.key = t, this.label = n, this.sortable = i, this.sortFn = r;
  }
}
const xt = /* @__PURE__ */ z({
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
    }, r = B([]), { fields: v, items: y } = V(n), o = L(() => {
      if (n.externalSort || r.value.length == 0)
        return n.items;
      const _ = [...n.items];
      return se(r.value, _);
    }), u = L(() => {
      let _ = v.value, c = [];
      return _.length === 0 && (_ = i([...y.value])), _.reduce((s, h, a) => {
        if (typeof h == "string")
          s.push(new J(h, h));
        else if (h instanceof J)
          s.push(h);
        else if (typeof h == "object") {
          const { key: g, label: M, sortable: d, sortFn: b } = h;
          s.push(new J(g, M, d, b));
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
      return s.direction === j.ASC ? "fas fa-sort-up" : s.direction === j.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(_) {
      const { key: c } = _, s = r.value.findIndex((h) => h.key === c);
      if (s < 0) {
        const h = new _t(c, j.ASC, _.sortFn);
        r.value.push(h);
      } else {
        const h = r.value[s], a = h.direction;
        a === j.ASC ? h.direction = j.DESC : a === j.DESC && r.value.splice(s, 1);
      }
      t("sort", r.value, se);
    }
    function k(_, c, s, h) {
      t("onMouseOverCell", _, c, s, h);
    }
    let T = B(null);
    return Z(() => {
      T.value = ee();
    }), (_, c) => (m(), C("table", K({ ..._.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (m(!0), C(P, null, N($(u), (s) => (m(), C("th", {
          key: `thead-${s.key}`,
          class: S({ sortable: s.sortable }),
          onClick: (h) => s.sortable && p(s)
        }, [
          l("span", mt, [
            x(_.$slots, `head(${s.key})`, {
              field: s,
              data: $(T),
              value: s.label
            }, () => [
              X(R(s.label), 1)
            ], !0),
            s.sortable ? (m(), C("span", yt, [
              l("span", bt, R(f(s)), 1),
              l("span", kt, [
                l("i", {
                  class: S(w(s))
                }, null, 2)
              ])
            ])) : Y("", !0)
          ])
        ], 10, ht))), 128))
      ]),
      l("tbody", null, [
        (m(!0), C(P, null, N($(o), (s, h) => (m(), C(P, {
          key: `trow-${(s == null ? void 0 : s.id) ?? h}`
        }, [
          x(_.$slots, "row", {
            item: s,
            index: h,
            colspan: $(u).length
          }, void 0, !0),
          l("tr", null, [
            (m(!0), C(P, null, N($(u), (a) => (m(), C("td", {
              key: `tcell-${a.key + ((s == null ? void 0 : s.id) ?? h)}`,
              class: S({ [`tcell-${a == null ? void 0 : a.key}`]: !0 }),
              onMouseover: (g) => k(g, s, h, a)
            }, [
              x(_.$slots, `cell(${a == null ? void 0 : a.key})`, {
                data: $(T),
                item: s,
                field: a,
                value: s[a == null ? void 0 : a.key]
              }, () => [
                X(R(s[a == null ? void 0 : a.key]), 1)
              ], !0)
            ], 42, $t))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        x(_.$slots, "footer", { data: $(T) }, void 0, !0)
      ]),
      e.showEmpty && $(o).length === 0 ? (m(), C("tr", Ct, [
        l("td", {
          colspan: $(u).length
        }, [
          x(_.$slots, "empty", {
            items: $(o),
            data: $(T),
            fields: $(u)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, gt)
          ], !0)
        ], 8, wt)
      ])) : Y("", !0)
    ], 16));
  }
});
const Tt = /* @__PURE__ */ F(xt, [["__scopeId", "data-v-7828e531"]]);
var ve = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ve || {});
const Mt = { class: "d-inline-block position-relative" }, St = ["disabled"], Lt = /* @__PURE__ */ z({
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
    size: { default: I.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(), i = B(), { variant: r, centered: v, dropup: y, dropend: o, dropstart: u, menuEnd: f } = V(t), w = B(!1), p = L(() => {
      const d = [];
      return r != null && r.value && d.push(`btn-${r.value}`), t.size && d.push(`btn-${t.size}`), d;
    }), k = L(() => {
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
    function a(d) {
      const { target: b } = d;
      (b == null ? void 0 : b.closest(`[${s}],[${s}=true]`)) || c();
    }
    function g() {
      w.value && c();
    }
    const M = {
      show: w,
      disabled: t.disabled,
      buttonClasses: p,
      onButtonClicked: h,
      onMenuClicked: a,
      onClickOutside: g,
      open: _,
      close: c
    };
    return (d, b) => {
      const D = xe("click-outside");
      return m(), C("div", {
        ref_key: "dropDownRef",
        ref: i,
        class: S($(k))
      }, [
        ie((m(), C("div", Mt, [
          x(d.$slots, "header", O(E({ ...M })), () => [
            l("button", {
              class: S(["btn dropdown-toggle", $(p)]),
              type: "button",
              "aria-expanded": "false",
              onClick: h,
              disabled: e.disabled
            }, [
              x(d.$slots, "button", {}, () => [
                X(R(e.text), 1)
              ], !0)
            ], 10, St)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: n,
            class: S(["dropdown-menu", $(T)]),
            onClick: a
          }, [
            x(d.$slots, "default", {}, void 0, !0)
          ], 2)
        ])), [
          [D, g]
        ])
      ], 2);
    };
  }
});
const Bt = /* @__PURE__ */ F(Lt, [["__scopeId", "data-v-f986f80f"]]), Dt = ["data-prevent-close"], At = /* @__PURE__ */ z({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = V(t);
    return (i, r) => (m(), C("li", {
      "data-prevent-close": $(n) ? "" : null
    }, [
      l("span", {
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
  return m(), C("li", Ot, [
    l("h6", Et, [
      x(e.$slots, "default")
    ])
  ]);
}
const zt = /* @__PURE__ */ F(Ht, [["render", Rt]]), Pt = {}, Vt = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Nt = [
  Vt
];
function It(e, t) {
  return m(), C("li", null, Nt);
}
const Ft = /* @__PURE__ */ F(Pt, [["render", It]]), jt = {
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
A(Q, "list", /* @__PURE__ */ new Set());
const Ut = ["onClick"], Yt = { class: "drawer-content" }, Wt = { class: "drawer-header" }, Xt = ["innerHTML"], qt = { class: "drawer-body" }, Jt = ["innerHTML"], Qt = { class: "drawer-footer" }, Zt = ["innerHTML"], en = ["innerHTML"], tn = /* @__PURE__ */ z({
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
    size: { default: I.STANDARD },
    btnSize: { default: I.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: i,
      keyboard: r,
      focus: v,
      size: y,
      btnSize: o
    } = V(n), u = L(() => q(y.value, "drawer-")), f = L(() => q(o.value, "btn-")), w = B(), p = B(!1), k = ee();
    let T;
    async function _() {
      return p.value === !0 ? void 0 : new Promise((D, ye) => {
        p.value = !0, T = D;
      });
    }
    function c(b = !0) {
      p.value = !1, typeof T == "function" && T(b);
    }
    function s() {
      p.value === !0 ? _() : c(!1);
    }
    function h(b) {
      (i == null ? void 0 : i.value) !== "static" && c(!1);
    }
    function a() {
      c(!1);
    }
    function g() {
      c(!1);
    }
    function M() {
      c(!0);
    }
    function d() {
      p.value === !0 ? Q.add(k) : Q.delete(k);
    }
    return t({
      show: _,
      hide: c,
      toggle: s
    }), (b, D) => (m(), G(Te, {
      onBeforeEnter: d,
      onAfterLeave: d
    }, {
      default: W(() => [
        p.value ? (m(), C("div", K({
          key: 0,
          ref_key: "drawerElement",
          ref: w,
          class: "drawer",
          tabindex: "-1"
        }, { ...b.$attrs }, {
          onClick: re(h, ["self"])
        }), [
          l("div", {
            class: S(["drawer-dialog", $(u)])
          }, [
            l("div", Yt, [
              l("div", Wt, [
                x(b.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Xt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: a
                })
              ]),
              l("div", qt, [
                x(b.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, Jt)
                ], !0)
              ]),
              l("div", Qt, [
                x(b.$slots, "footer", {}, () => [
                  e.okOnly ? Y("", !0) : (m(), C("button", {
                    key: 0,
                    type: "button",
                    class: S(["ms-auto btn btn-secondary", $(f)]),
                    onClick: g
                  }, [
                    x(b.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, Zt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: S(["btn btn-primary", $(f)]),
                    onClick: M
                  }, [
                    x(b.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, en)
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
const nn = /* @__PURE__ */ F(tn, [["__scopeId", "data-v-2e49e8cb"]]), H = "b", pe = "$toaster", _e = "$modalManager";
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
A(he, "component");
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
A(me, "component");
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
