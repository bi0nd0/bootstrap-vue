var _e = Object.defineProperty;
var he = (e, t, o) => t in e ? _e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var B = (e, t, o) => (he(e, typeof t != "symbol" ? t + "" : t, o), o);
import { defineComponent as O, toRefs as E, ref as D, watch as me, onMounted as Q, openBlock as _, createElementBlock as b, normalizeClass as M, renderSlot as C, createElementVNode as l, toDisplayString as H, createBlock as F, Teleport as oe, Fragment as z, renderList as P, mergeProps as I, computed as L, getCurrentInstance as Z, withModifiers as se, unref as y, createCommentVNode as G, createVNode as ye, watchEffect as be, resolveComponent as ee, withCtx as K, createTextVNode as U, withDirectives as ae, isRef as ke, vModelSelect as $e, resolveDirective as Ce, normalizeProps as we, guardReactiveProps as ge, Transition as xe, inject as le, createApp as re } from "vue";
import { Toast as Se, Modal as Te, Tooltip as Me } from "bootstrap";
const Le = { class: "toast-header" }, Be = ["textContent"], De = ["textContent"], Ae = { class: "toast-body" }, He = ["textContent"], ie = /* @__PURE__ */ O({
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
  setup(e, { expose: t, emit: o }) {
    const r = e, { visible: i, animation: f, autohide: h, delay: s } = E(r), u = D(), d = D();
    me(i, (g) => {
      a();
    }, { immediate: !0 });
    function x() {
      u.value.show();
    }
    function v() {
      u.value.hide();
    }
    function k() {
      u.value.dispose();
    }
    function w() {
      u.value.isShown();
    }
    function p() {
      u.value.getOrCreateInstance();
    }
    function c() {
      u.value.getInstance();
    }
    function a() {
      u.value && (i.value === !0 ? x() : v());
    }
    function m() {
      o("hide", u.value);
    }
    function n() {
      o("hidden", u.value);
    }
    function $() {
      o("show", u.value);
    }
    async function T() {
      o("shown", u.value);
    }
    return t({ show: x, hide: v, dispose: k, isShown: w, getOrCreateInstance: p, getInstance: c }), Q(() => {
      d.value.addEventListener("hide.bs.toast", m), d.value.addEventListener("hidden.bs.toast", n), d.value.addEventListener("show.bs.toast", $), d.value.addEventListener("shown.bs.toast", T), u.value = new Se(d.value, {
        animation: f.value,
        autohide: h.value,
        delay: s.value
      }), a();
    }), (g, S) => (_(), b("div", {
      ref_key: "toastRef",
      ref: d,
      class: M(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(g.$slots, "header", {}, () => [
        l("div", Le, [
          C(g.$slots, "title", {}, () => [
            l("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, Be)
          ]),
          C(g.$slots, "subtitle", {}, () => [
            l("small", {
              textContent: H(e.subtitle)
            }, null, 8, De)
          ]),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: v
          })
        ])
      ]),
      C(g.$slots, "body", {}, () => [
        l("div", Ae, [
          C(g.$slots, "default", {}, () => [
            l("span", {
              textContent: H(e.body)
            }, null, 8, He)
          ])
        ])
      ])
    ], 2));
  }
});
function Oe() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (o == "x" ? r : r & 3 | 8).toString(16);
  });
}
const ze = { id: "toast-wrapper" };
let te;
const Ee = /* @__PURE__ */ O({
  __name: "Toaster",
  setup(e, { expose: t }) {
    const o = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, r = D(/* @__PURE__ */ new Map());
    te = (f, h = "top right") => {
      const s = Oe(), u = { ...o, ...f, id: s };
      let d = r.value.get(h);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(u), r.value.set(h, d);
    };
    function i(f, h) {
      const s = r.value.get(f);
      s == null || s.delete(h);
    }
    return t({ toast: te }), (f, h) => (_(), F(oe, { to: "body" }, [
      l("div", ze, [
        (_(!0), b(z, null, P(r.value, ([s, u]) => (_(), b("div", {
          key: s,
          class: M(["toast-group", `${s}`])
        }, [
          (_(!0), b(z, null, P(u, (d, x) => (_(), F(ie, I({
            key: d.id
          }, d, {
            onHidden: (v) => i(s, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const N = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, i] of t)
    o[r] = i;
  return o;
}, Pe = /* @__PURE__ */ N(Ee, [["__scopeId", "data-v-0580e23e"]]);
var R = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(R || {});
const Y = (e, t = "") => {
  let o = e.toLowerCase();
  return !Object.values(R).includes(o) || o == "" ? "" : `${t}${o}`;
}, Re = ["onClick"], Ve = { class: "modal-content" }, Ne = { class: "modal-header" }, Fe = ["innerHTML"], Ie = { class: "modal-body" }, je = ["innerHTML"], Ge = { class: "modal-footer" }, Ke = ["innerHTML"], Ue = ["innerHTML"];
class j {
  static addToStack(t) {
    t != null && this.modalStack.push(t);
  }
  static removeFromStack(t) {
    if (t == null)
      return;
    const o = this.modalStack.indexOf(t);
    o < 0 || this.modalStack.splice(o, 1);
  }
  static getLast() {
    const t = this.modalStack.length;
    if (t !== 0)
      return this.modalStack[t - 1];
  }
}
B(j, "modalStack", new Array());
const ue = /* @__PURE__ */ O({
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
    size: { default: R.STANDARD },
    btnSize: { default: R.SMALL }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: r,
      keyboard: i,
      focus: f,
      disableOutsideClick: h,
      size: s,
      btnSize: u
    } = E(o), d = L(() => Y(s.value, "modal-")), x = L(() => Y(u.value, "btn-")), v = D();
    let k;
    Z();
    let w;
    function p() {
      return new Promise((S, W) => {
        const X = j.getLast();
        X && X.hide(), j.addToStack(k), k == null || k.show(), w = S;
      });
    }
    function c(g = !0) {
      j.removeFromStack(k), k == null || k.hide();
      const S = j.getLast();
      S && S.show(), typeof w == "function" && w(g);
    }
    function a() {
      k == null || k.toggle();
    }
    Q(() => {
      k = new Te(v.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: i.value,
        focus: f.value
      });
    });
    function m(g) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function n() {
      c(!1);
    }
    function $() {
      c(!1);
    }
    function T() {
      c(!0);
    }
    return t({
      show: p,
      hide: c,
      toggle: a
    }), (g, S) => (_(), b("div", I({
      ref_key: "modalElement",
      ref: v,
      class: "modal fade",
      tabindex: "-1"
    }, { ...g.$attrs }, {
      onClick: se(m, ["self"])
    }), [
      l("div", {
        class: M(["modal-dialog", y(d)])
      }, [
        l("div", Ve, [
          l("div", Ne, [
            C(g.$slots, "header", {}, () => [
              l("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Fe)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: n
            })
          ]),
          l("div", Ie, [
            C(g.$slots, "default", {}, () => [
              l("span", { innerHTML: e.body }, null, 8, je)
            ])
          ]),
          l("div", Ge, [
            C(g.$slots, "footer", {}, () => [
              e.okOnly ? G("", !0) : (_(), b("button", {
                key: 0,
                type: "button",
                class: M(["btn btn-secondary", y(x)]),
                onClick: $
              }, [
                C(g.$slots, "button-cancel", {}, () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, Ke)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: M(["btn btn-primary", y(x)]),
                onClick: T
              }, [
                C(g.$slots, "button-ok", {}, () => [
                  l("span", { innerHTML: e.textOk }, null, 8, Ue)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Re));
  }
}), Ye = /* @__PURE__ */ O({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const o = D(void 0), r = D({});
    function i(h = {}) {
      var s;
      return h.okOnly = !1, r.value = h, (s = o.value) == null ? void 0 : s.show();
    }
    function f(h = {}) {
      var s;
      return h.okOnly = !0, r.value = h, (s = o.value) == null ? void 0 : s.show();
    }
    return t({ confirm: i, alert: f }), (h, s) => (_(), F(oe, { to: "body" }, [
      ye(ue, I({
        ref_key: "modalRef",
        ref: o
      }, { ...r.value }), null, 16)
    ]));
  }
}), We = { "data-first": "" }, Xe = ["disabled", "innerHTML"], qe = { "data-prev": "" }, Je = ["disabled", "innerHTML"], Qe = { key: 0 }, Ze = ["innerHTML"], et = ["onClick"], tt = { "data-next": "" }, nt = ["disabled", "innerHTML"], ot = { "data-last": "" }, st = ["disabled", "innerHTML"], at = /* @__PURE__ */ O({
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
    size: { default: R.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function r(n, $ = 0) {
      return [...Array(n).keys()].map((T) => T + $);
    }
    const { modelValue: i, maxVisibleButtons: f, hideEllipsis: h } = E(o), s = Math.floor(f.value / 2), u = L(() => {
      let n = f.value, $ = i.value <= s ? 1 : i.value - s;
      return i.value >= v.value - s && ($ = v.value - n + 1), $ < 1 && ($ = 1), v.value < n && (n = v.value), r(n, $);
    }), d = L(() => i.value <= 1), x = L(() => i.value >= v.value), v = L(() => {
      const { perPage: n, totalItems: $ } = o;
      return Math.ceil($ / n);
    });
    be(() => {
      v.value > 0 && i.value > v.value && t("update:modelValue", v.value);
    });
    function k(n) {
      const $ = f.value - 1;
      return !(h.value === !0 || n === 0 && i.value - s - 1 <= 0 || n === $ && i.value + s >= v.value || n > 0 && n < $);
    }
    function w(n) {
      n < 1 && (n = 1), n > v.value && (n = v.value), t("update:modelValue", n);
    }
    function p() {
      t("update:modelValue", 1);
    }
    function c() {
      t("update:modelValue", v.value);
    }
    function a() {
      let n = i.value - 1;
      n < 1 && (n = 1), t("update:modelValue", n);
    }
    function m() {
      let n = i.value + 1;
      n > v.value && (n = v.value), t("update:modelValue", n);
    }
    return (n, $) => (_(), b("ul", {
      class: M(["pagination", e.size])
    }, [
      l("li", We, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.firstText,
          onClick: p
        }, null, 8, Xe)
      ]),
      l("li", qe, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.prevText,
          onClick: a
        }, null, 8, Je)
      ]),
      (_(!0), b(z, null, P(y(u), (T, g) => (_(), b(z, null, [
        k(g) ? (_(), b("li", Qe, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Ze)
        ])) : (_(), b("li", {
          key: 1,
          "data-prev": "",
          class: M({ active: e.modelValue === T })
        }, [
          l("button", {
            class: "",
            onClick: (S) => w(T)
          }, H(T), 9, et)
        ], 2))
      ], 64))), 256)),
      l("li", tt, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.nextText,
          onClick: m
        }, null, 8, nt)
      ]),
      l("li", ot, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.lastText,
          onClick: c
        }, null, 8, st)
      ])
    ], 2));
  }
});
const lt = /* @__PURE__ */ N(at, [["__scopeId", "data-v-2bfd7085"]]), rt = { class: "d-inline" }, it = /* @__PURE__ */ l("span", null, "Per page: ", -1), ut = { class: "fw-bold" }, ct = /* @__PURE__ */ O({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, { options: r } = E(o), i = L({
      get: () => o.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    return (f, h) => {
      const s = ee("b-dropdown-item"), u = ee("b-dropdown");
      return _(), F(u, I({
        variant: "outline-primary",
        size: "sm"
      }, { ...f.$attrs }), {
        button: K(() => [
          l("div", rt, [
            C(f.$slots, "default", { selected: y(i) }, () => [
              it,
              l("span", ut, H(y(i)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (_(!0), b(z, null, P(y(r), (d, x) => (_(), F(s, {
            key: d,
            onClick: (v) => i.value = d,
            active: d === e.modelValue
          }, {
            default: K(() => [
              U(H(d), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), dt = ["value"], ft = /* @__PURE__ */ O({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, { options: r } = E(o), i = L({
      get: () => o.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    return (f, h) => ae((_(), b("select", {
      "onUpdate:modelValue": h[0] || (h[0] = (s) => ke(i) ? i.value = s : null)
    }, [
      (_(!0), b(z, null, P(y(r), (s, u) => (_(), b("option", {
        key: s,
        value: s
      }, H(s), 9, dt))), 128))
    ], 512)), [
      [$e, y(i)]
    ]);
  }
});
var V = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(V || {});
class vt {
  constructor(t, o = "ASC", r) {
    B(this, "key");
    B(this, "direction");
    B(this, "sortFn");
    this.key = t, this.direction = o, this.sortFn = r;
  }
}
const ne = (e, t) => {
  const o = (s, u) => {
    let d = typeof s, x = typeof u;
    return d == "number" && d == x;
  }, r = (s, u) => s - u, i = (s, u) => (s = s ?? "", u = u ?? "", s.localeCompare(u)), f = (s, u) => o(s, u) ? r : i, h = [...t];
  return h.sort((s, u) => {
    let d = 0;
    for (let x of e) {
      let { key: v, direction: k, sortFn: w } = x, p = k === "ASC" ? 1 : -1, c = s[v], a = u[v];
      if (w = typeof w == "function" ? w : f(c, a), d = w(c, a, s, u, t, x, p) * p, d !== 0)
        return d;
    }
    return d;
  }), h;
}, pt = ["onClick"], _t = { class: "th-wrapper" }, ht = {
  key: 0,
  "data-sort-indicator": ""
}, mt = { class: "sort-index" }, yt = { class: "sort-direction" }, bt = ["onMouseover"], kt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, $t = ["colspan"], Ct = ["innerHTML"];
class q {
  constructor(t = "", o = "", r = !1, i) {
    B(this, "key");
    // age
    B(this, "label");
    // Person age
    B(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    B(this, "sortFn");
    this.key = t, this.label = o, this.sortable = r, this.sortFn = i;
  }
}
const wt = /* @__PURE__ */ O({
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
    const o = e, r = (p) => {
      let c = [];
      for (const a of p)
        c = c.concat(Object.keys(a));
      return c = c.filter((a, m) => c.indexOf(a) == m), c;
    }, i = D([]), { fields: f, items: h } = E(o), s = L(() => {
      if (o.externalSort || i.value.length == 0)
        return o.items;
      const p = [...o.items];
      return ne(i.value, p);
    }), u = L(() => {
      let p = f.value, c = [];
      return p.length === 0 && (p = r([...h.value])), p.reduce((a, m, n) => {
        if (typeof m == "string")
          a.push(new q(m, m));
        else if (m instanceof q)
          a.push(m);
        else if (typeof m == "object") {
          const { key: $, label: T, sortable: g, sortFn: S } = m;
          a.push(new q($, T, g, S));
        }
        return a;
      }, c);
    });
    function d(p) {
      const c = i.value.findIndex((a) => a.key === p.key);
      return c < 0 ? "" : c + 1;
    }
    function x(p) {
      const c = i.value.findIndex((m) => m.key === p.key);
      if (c < 0)
        return "fas fa-sort";
      const a = i.value[c];
      return a.direction === V.ASC ? "fas fa-sort-up" : a.direction === V.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function v(p) {
      const { key: c } = p, a = i.value.findIndex((m) => m.key === c);
      if (a < 0) {
        const m = new vt(c, V.ASC, p.sortFn);
        i.value.push(m);
      } else {
        const m = i.value[a], n = m.direction;
        n === V.ASC ? m.direction = V.DESC : n === V.DESC && i.value.splice(a, 1);
      }
      t("sort", i.value, ne);
    }
    function k(p, c, a, m) {
      t("onMouseOverCell", p, c, a, m);
    }
    let w = D(null);
    return Q(() => {
      w.value = Z();
    }), (p, c) => (_(), b("table", I({ ...p.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (_(!0), b(z, null, P(y(u), (a) => (_(), b("th", {
          key: `thead-${a.key}`,
          class: M({ sortable: a.sortable }),
          onClick: (m) => a.sortable && v(a)
        }, [
          l("span", _t, [
            C(p.$slots, `head(${a.key})`, {
              field: a,
              data: y(w),
              value: a.label
            }, () => [
              U(H(a.label), 1)
            ], !0),
            a.sortable ? (_(), b("span", ht, [
              l("span", mt, H(d(a)), 1),
              l("span", yt, [
                l("i", {
                  class: M(x(a))
                }, null, 2)
              ])
            ])) : G("", !0)
          ])
        ], 10, pt))), 128))
      ]),
      l("tbody", null, [
        (_(!0), b(z, null, P(y(s), (a, m) => (_(), b(z, {
          key: `trow-${(a == null ? void 0 : a.id) ?? m}`
        }, [
          C(p.$slots, "row", {
            item: a,
            index: m,
            colspan: y(u).length
          }, void 0, !0),
          l("tr", null, [
            (_(!0), b(z, null, P(y(u), (n) => (_(), b("td", {
              key: `tcell-${n.key + ((a == null ? void 0 : a.id) ?? m)}`,
              class: M({ [`tcell-${n == null ? void 0 : n.key}`]: !0 }),
              onMouseover: ($) => k($, a, m, n)
            }, [
              C(p.$slots, `cell(${n == null ? void 0 : n.key})`, {
                data: y(w),
                item: a,
                field: n,
                value: a[n == null ? void 0 : n.key]
              }, () => [
                U(H(a[n == null ? void 0 : n.key]), 1)
              ], !0)
            ], 42, bt))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        C(p.$slots, "footer", { data: y(w) }, void 0, !0)
      ]),
      e.showEmpty && y(s).length === 0 ? (_(), b("tr", kt, [
        l("td", {
          colspan: y(u).length
        }, [
          C(p.$slots, "empty", {
            items: y(s),
            data: y(w),
            fields: y(u)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, Ct)
          ], !0)
        ], 8, $t)
      ])) : G("", !0)
    ], 16));
  }
});
const gt = /* @__PURE__ */ N(wt, [["__scopeId", "data-v-7828e531"]]);
var ce = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ce || {});
const xt = { class: "d-inline-block" }, St = ["disabled"], Tt = /* @__PURE__ */ O({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: ce.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    size: { default: R.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = D(), { variant: r, centered: i, dropup: f, dropend: h, dropstart: s } = E(t), u = D(!1), d = L(() => {
      const n = [];
      return r != null && r.value && n.push(`btn-${r.value}`), t.size && n.push(`btn-${t.size}`), n;
    }), x = L(() => {
      const n = [];
      return i != null && i.value && n.push("dropdown-center"), f != null && f.value && n.push("dropup"), s != null && s.value && n.push("dropstart"), !(s != null && s.value) && (h != null && h.value) && n.push("dropend"), n.length === 0 ? n.push("dropdown") : n.unshift("btn-group"), n;
    });
    function v() {
      u.value = !0;
    }
    function k() {
      u.value = !1;
    }
    const w = "data-prevent-close";
    function p(n) {
      u.value ? k() : v();
    }
    function c(n) {
      const { target: $ } = n;
      ($ == null ? void 0 : $.closest(`[${w}],[${w}=true]`)) || k();
    }
    function a() {
      u.value && k();
    }
    const m = {
      show: u,
      disabled: t.disabled,
      buttonClasses: d,
      onButtonClicked: p,
      onMenuClicked: c,
      onClickOutside: a,
      open: v,
      close: k
    };
    return (n, $) => {
      const T = Ce("click-outside");
      return _(), b("div", {
        ref_key: "dropDownRef",
        ref: o,
        class: M(y(x))
      }, [
        ae((_(), b("div", xt, [
          C(n.$slots, "header", we(ge({ ...m })), () => [
            l("button", {
              class: M(["btn dropdown-toggle", y(d)]),
              type: "button",
              "aria-expanded": "false",
              onClick: p,
              disabled: e.disabled
            }, [
              C(n.$slots, "button", {}, () => [
                U(H(e.text), 1)
              ], !0)
            ], 10, St)
          ], !0),
          l("ul", {
            class: M(["dropdown-menu", { show: u.value }]),
            onClick: c
          }, [
            C(n.$slots, "default", {}, void 0, !0)
          ], 2)
        ])), [
          [T, a]
        ])
      ], 2);
    };
  }
});
const Mt = /* @__PURE__ */ N(Tt, [["__scopeId", "data-v-5d4985d5"]]), Lt = ["data-prevent-close"], Bt = /* @__PURE__ */ O({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: o } = E(t);
    return (r, i) => (_(), b("li", {
      "data-prevent-close": y(o) ? "" : null
    }, [
      l("span", {
        class: M(["dropdown-item", { active: e.active }]),
        role: "button",
        tabindex: "0"
      }, [
        C(r.$slots, "default")
      ], 2)
    ], 8, Lt));
  }
}), Dt = {}, At = { "data-prevent-close": "" }, Ht = { class: "dropdown-header" };
function Ot(e, t) {
  return _(), b("li", At, [
    l("h6", Ht, [
      C(e.$slots, "default")
    ])
  ]);
}
const zt = /* @__PURE__ */ N(Dt, [["render", Ot]]), Et = {}, Pt = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Rt = [
  Pt
];
function Vt(e, t) {
  return _(), b("li", null, Rt);
}
const Nt = /* @__PURE__ */ N(Et, [["render", Vt]]), Ft = {
  mounted(e, t, o, r) {
    new Me(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, It = (e, t) => {
  function o(f, h) {
    for (; f !== null; ) {
      if (f === h)
        return !0;
      f = f.parentNode;
    }
    return !1;
  }
  const r = new AbortController();
  function i(f, h) {
    document.addEventListener("click", function(s) {
      const u = s.target;
      f && (o(u, f) || h());
    }, { signal: r.signal });
  }
  return i(e, t), r;
}, jt = {
  mounted(e, t, o, r) {
    const i = t.value;
    It(e, i);
  }
};
class J {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
B(J, "list", /* @__PURE__ */ new Set());
const Gt = ["onClick"], Kt = { class: "drawer-content" }, Ut = { class: "drawer-header" }, Yt = ["innerHTML"], Wt = { class: "drawer-body" }, Xt = ["innerHTML"], qt = { class: "drawer-footer" }, Jt = ["innerHTML"], Qt = ["innerHTML"], Zt = /* @__PURE__ */ O({
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
    size: { default: R.STANDARD },
    btnSize: { default: R.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: r,
      keyboard: i,
      focus: f,
      size: h,
      btnSize: s
    } = E(o), u = L(() => Y(h.value, "drawer-")), d = L(() => Y(s.value, "btn-")), x = D(), v = D(!1), k = Z();
    let w;
    async function p() {
      return v.value === !0 ? void 0 : new Promise((W, X) => {
        v.value = !0, w = W;
      });
    }
    function c(S = !0) {
      v.value = !1, typeof w == "function" && w(S);
    }
    function a() {
      v.value === !0 ? p() : c(!1);
    }
    function m(S) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function n() {
      c(!1);
    }
    function $() {
      c(!1);
    }
    function T() {
      c(!0);
    }
    function g() {
      v.value === !0 ? J.add(k) : J.delete(k);
    }
    return t({
      show: p,
      hide: c,
      toggle: a
    }), (S, W) => (_(), F(xe, {
      onBeforeEnter: g,
      onAfterLeave: g
    }, {
      default: K(() => [
        v.value ? (_(), b("div", I({
          key: 0,
          ref_key: "drawerElement",
          ref: x,
          class: "drawer",
          tabindex: "-1"
        }, { ...S.$attrs }, {
          onClick: se(m, ["self"])
        }), [
          l("div", {
            class: M(["drawer-dialog", y(u)])
          }, [
            l("div", Kt, [
              l("div", Ut, [
                C(S.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Yt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: n
                })
              ]),
              l("div", Wt, [
                C(S.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, Xt)
                ], !0)
              ]),
              l("div", qt, [
                C(S.$slots, "footer", {}, () => [
                  e.okOnly ? G("", !0) : (_(), b("button", {
                    key: 0,
                    type: "button",
                    class: M(["ms-auto btn btn-secondary", y(d)]),
                    onClick: $
                  }, [
                    C(S.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, Jt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: M(["btn btn-primary", y(d)]),
                    onClick: T
                  }, [
                    C(S.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, Qt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Gt)) : G("", !0)
      ]),
      _: 3
    }));
  }
});
const en = /* @__PURE__ */ N(Zt, [["__scopeId", "data-v-2e49e8cb"]]), A = "b", de = "$toaster", fe = "$modalManager";
class ve {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = re(Ye).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
B(ve, "component");
class pe {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = re(Pe).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
B(pe, "component");
function ln() {
  return le(de);
}
function rn() {
  return le(fe);
}
function tn(e) {
  e.component(`${A}-drawer`, en), e.component(`${A}-modal`, ue), e.component(`${A}-pagination`, lt), e.component(`${A}-pagination-dropdown`, ct), e.component(`${A}-pagination-select`, ft), e.component(`${A}-dropdown`, Mt), e.component(`${A}-dropdown-item`, Bt), e.component(`${A}-dropdown-header`, zt), e.component(`${A}-dropdown-divider`, Nt), e.component(`${A}-table`, gt), e.component(`${A}-toast`, ie);
}
function nn(e) {
  e.directive("tooltip", Ft), e.directive("click-outside", jt);
}
const un = {
  install(e) {
    tn(e), nn(e);
    const t = pe.getComponent();
    e.provide(de, t);
    const o = ve.getComponent();
    e.provide(fe, o);
  }
};
export {
  un as BootstrapVue,
  Mt as Dropdown,
  Nt as DropdownDivider,
  zt as DropdownHeader,
  Bt as DropdownItem,
  ue as Modal,
  Ye as ModalManager,
  ct as PageSizeDropdown,
  ft as PageSizeSelect,
  lt as Pagination,
  gt as Table,
  q as TableFieldDefinition,
  ie as Toast,
  Pe as Toaster,
  jt as clickOutside,
  Ft as tooltip,
  rn as useModal,
  ln as useToaster
};
