var pe = Object.defineProperty;
var he = (e, t, n) => t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var B = (e, t, n) => (he(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as E, toRefs as z, ref as D, watch as _e, onMounted as Z, openBlock as _, createElementBlock as b, normalizeClass as S, renderSlot as C, createElementVNode as r, toDisplayString as H, createBlock as N, Teleport as se, Fragment as O, renderList as P, mergeProps as F, computed as L, getCurrentInstance as W, withModifiers as ee, unref as y, createCommentVNode as G, createVNode as me, watchEffect as ye, resolveComponent as te, withCtx as K, createTextVNode as U, withDirectives as be, isRef as ke, vModelSelect as $e, Transition as Ce, inject as ae, createApp as le } from "vue";
import { Toast as we, Modal as ge, Tooltip as xe } from "bootstrap";
const Te = { class: "toast-header" }, Se = ["textContent"], Me = ["textContent"], Le = { class: "toast-body" }, Be = ["textContent"], re = /* @__PURE__ */ E({
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
    const u = e, { visible: i, animation: m, autohide: p, delay: o } = z(u), c = D(), d = D();
    _e(i, (w) => {
      l();
    }, { immediate: !0 });
    function x() {
      c.value.show();
    }
    function f() {
      c.value.hide();
    }
    function k() {
      c.value.dispose();
    }
    function $() {
      c.value.isShown();
    }
    function v() {
      c.value.getOrCreateInstance();
    }
    function s() {
      c.value.getInstance();
    }
    function l() {
      c.value && (i.value === !0 ? x() : f());
    }
    function h() {
      n("hide", c.value);
    }
    function a() {
      n("hidden", c.value);
    }
    function g() {
      n("show", c.value);
    }
    async function M() {
      n("shown", c.value);
    }
    return t({ show: x, hide: f, dispose: k, isShown: $, getOrCreateInstance: v, getInstance: s }), Z(() => {
      d.value.addEventListener("hide.bs.toast", h), d.value.addEventListener("hidden.bs.toast", a), d.value.addEventListener("show.bs.toast", g), d.value.addEventListener("shown.bs.toast", M), c.value = new we(d.value, {
        animation: m.value,
        autohide: p.value,
        delay: o.value
      }), l();
    }), (w, T) => (_(), b("div", {
      ref_key: "toastRef",
      ref: d,
      class: S(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(w.$slots, "header", {}, () => [
        r("div", Te, [
          C(w.$slots, "title", {}, () => [
            r("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, Se)
          ]),
          C(w.$slots, "subtitle", {}, () => [
            r("small", {
              textContent: H(e.subtitle)
            }, null, 8, Me)
          ]),
          r("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: f
          })
        ])
      ]),
      C(w.$slots, "body", {}, () => [
        r("div", Le, [
          C(w.$slots, "default", {}, () => [
            r("span", {
              textContent: H(e.body)
            }, null, 8, Be)
          ])
        ])
      ])
    ], 2));
  }
});
function Ae() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const u = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (n == "x" ? u : u & 3 | 8).toString(16);
  });
}
const He = { id: "toast-wrapper" };
let ne;
const De = /* @__PURE__ */ E({
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
    }, u = D(/* @__PURE__ */ new Map());
    ne = (m, p = "top right") => {
      const o = Ae(), c = { ...n, ...m, id: o };
      let d = u.value.get(p);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(c), u.value.set(p, d);
    };
    function i(m, p) {
      const o = u.value.get(m);
      o == null || o.delete(p);
    }
    return t({ toast: ne }), (m, p) => (_(), N(se, { to: "body" }, [
      r("div", He, [
        (_(!0), b(O, null, P(u.value, ([o, c]) => (_(), b("div", {
          key: o,
          class: S(["toast-group", `${o}`])
        }, [
          (_(!0), b(O, null, P(c, (d, x) => (_(), N(re, F({
            key: d.id
          }, d, {
            onHidden: (f) => i(o, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const I = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [u, i] of t)
    n[u] = i;
  return n;
}, Ee = /* @__PURE__ */ I(De, [["__scopeId", "data-v-177f801e"]]);
var R = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(R || {});
const Y = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(R).includes(n) || n == "" ? "" : `${t}${n}`;
}, Oe = ["onClick"], ze = { class: "modal-content" }, Pe = { class: "modal-header" }, Re = ["innerHTML"], Ve = { class: "modal-body" }, Ne = ["innerHTML"], Fe = { class: "modal-footer" }, Ie = ["innerHTML"], je = ["innerHTML"];
class j {
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
B(j, "modalStack", new Array());
const ue = /* @__PURE__ */ E({
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
    const n = e, {
      backdrop: u,
      keyboard: i,
      focus: m,
      disableOutsideClick: p,
      size: o,
      btnSize: c
    } = z(n), d = L(() => Y(o.value, "modal-")), x = L(() => Y(c.value, "btn-")), f = D();
    let k;
    W();
    let $;
    function v() {
      return new Promise((T, X) => {
        const q = j.getLast();
        q && q.hide(), j.addToStack(k), k == null || k.show(), $ = T;
      });
    }
    function s(w = !0) {
      j.removeFromStack(k), k == null || k.hide();
      const T = j.getLast();
      T && T.show(), typeof $ == "function" && $(w);
    }
    function l() {
      k == null || k.toggle();
    }
    Z(() => {
      k = new ge(f.value, {
        backdrop: u == null ? void 0 : u.value,
        keyboard: i.value,
        focus: m.value
      });
    });
    function h(w) {
      (u == null ? void 0 : u.value) !== "static" && s(!1);
    }
    function a() {
      s(!1);
    }
    function g() {
      s(!1);
    }
    function M() {
      s(!0);
    }
    return t({
      show: v,
      hide: s,
      toggle: l
    }), (w, T) => (_(), b("div", F({
      ref_key: "modalElement",
      ref: f,
      class: "modal fade",
      tabindex: "-1"
    }, { ...w.$attrs }, {
      onClick: ee(h, ["self"])
    }), [
      r("div", {
        class: S(["modal-dialog", y(d)])
      }, [
        r("div", ze, [
          r("div", Pe, [
            C(w.$slots, "header", {}, () => [
              r("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Re)
            ]),
            r("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: a
            })
          ]),
          r("div", Ve, [
            C(w.$slots, "default", {}, () => [
              r("span", { innerHTML: e.body }, null, 8, Ne)
            ])
          ]),
          r("div", Fe, [
            C(w.$slots, "footer", {}, () => [
              e.okOnly ? G("", !0) : (_(), b("button", {
                key: 0,
                type: "button",
                class: S(["btn btn-secondary", y(x)]),
                onClick: g
              }, [
                C(w.$slots, "button-cancel", {}, () => [
                  r("span", { innerHTML: e.textCancel }, null, 8, Ie)
                ])
              ], 2)),
              r("button", {
                type: "button",
                class: S(["btn btn-primary", y(x)]),
                onClick: M
              }, [
                C(w.$slots, "button-ok", {}, () => [
                  r("span", { innerHTML: e.textOk }, null, 8, je)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Oe));
  }
}), Ge = /* @__PURE__ */ E({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = D(void 0), u = D({});
    function i(p = {}) {
      var o;
      return p.okOnly = !1, u.value = p, (o = n.value) == null ? void 0 : o.show();
    }
    function m(p = {}) {
      var o;
      return p.okOnly = !0, u.value = p, (o = n.value) == null ? void 0 : o.show();
    }
    return t({ confirm: i, alert: m }), (p, o) => (_(), N(se, { to: "body" }, [
      me(ue, F({
        ref_key: "modalRef",
        ref: n
      }, { ...u.value }), null, 16)
    ]));
  }
}), Ke = { "data-first": "" }, Ue = ["disabled", "innerHTML"], Ye = { "data-prev": "" }, We = ["disabled", "innerHTML"], Xe = { key: 0 }, qe = ["innerHTML"], Je = ["onClick"], Qe = { "data-next": "" }, Ze = ["disabled", "innerHTML"], et = { "data-last": "" }, tt = ["disabled", "innerHTML"], nt = /* @__PURE__ */ E({
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
    const n = e;
    function u(a, g = 0) {
      return [...Array(a).keys()].map((M) => M + g);
    }
    const { modelValue: i, maxVisibleButtons: m, hideEllipsis: p } = z(n), o = Math.floor(m.value / 2), c = L(() => {
      let a = m.value, g = i.value <= o ? 1 : i.value - o;
      return i.value >= f.value - o && (g = f.value - a + 1), g < 1 && (g = 1), f.value < a && (a = f.value), u(a, g);
    }), d = L(() => i.value <= 1), x = L(() => i.value >= f.value), f = L(() => {
      const { perPage: a, totalItems: g } = n;
      return Math.ceil(g / a);
    });
    ye(() => {
      f.value > 0 && i.value > f.value && t("update:modelValue", f.value);
    });
    function k(a) {
      const g = m.value - 1;
      return !(p.value === !0 || a === 0 && i.value - o - 1 <= 0 || a === g && i.value + o >= f.value || a > 0 && a < g);
    }
    function $(a) {
      a < 1 && (a = 1), a > f.value && (a = f.value), t("update:modelValue", a);
    }
    function v() {
      t("update:modelValue", 1);
    }
    function s() {
      t("update:modelValue", f.value);
    }
    function l() {
      let a = i.value - 1;
      a < 1 && (a = 1), t("update:modelValue", a);
    }
    function h() {
      let a = i.value + 1;
      a > f.value && (a = f.value), t("update:modelValue", a);
    }
    return (a, g) => (_(), b("ul", {
      class: S(["pagination", e.size])
    }, [
      r("li", Ke, [
        r("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.firstText,
          onClick: v
        }, null, 8, Ue)
      ]),
      r("li", Ye, [
        r("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.prevText,
          onClick: l
        }, null, 8, We)
      ]),
      (_(!0), b(O, null, P(y(c), (M, w) => (_(), b(O, null, [
        k(w) ? (_(), b("li", Xe, [
          r("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, qe)
        ])) : (_(), b("li", {
          key: 1,
          "data-prev": "",
          class: S({ active: e.modelValue === M })
        }, [
          r("button", {
            class: "",
            onClick: (T) => $(M)
          }, H(M), 9, Je)
        ], 2))
      ], 64))), 256)),
      r("li", Qe, [
        r("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.nextText,
          onClick: h
        }, null, 8, Ze)
      ]),
      r("li", et, [
        r("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.lastText,
          onClick: s
        }, null, 8, tt)
      ])
    ], 2));
  }
});
const ot = /* @__PURE__ */ I(nt, [["__scopeId", "data-v-2bfd7085"]]), st = { class: "d-inline" }, at = /* @__PURE__ */ r("span", null, "Per page: ", -1), lt = { class: "fw-bold" }, rt = /* @__PURE__ */ E({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: u } = z(n), i = L({
      get: () => n.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, p) => {
      const o = te("b-dropdown-item"), c = te("b-dropdown");
      return _(), N(c, F({
        variant: "outline-primary",
        size: "sm"
      }, { ...m.$attrs }), {
        button: K(() => [
          r("div", st, [
            C(m.$slots, "default", { selected: y(i) }, () => [
              at,
              r("span", lt, H(y(i)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (_(!0), b(O, null, P(y(u), (d, x) => (_(), N(o, {
            key: d,
            onClick: (f) => i.value = d,
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
}), ut = ["value"], it = /* @__PURE__ */ E({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: u } = z(n), i = L({
      get: () => n.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, p) => be((_(), b("select", {
      "onUpdate:modelValue": p[0] || (p[0] = (o) => ke(i) ? i.value = o : null)
    }, [
      (_(!0), b(O, null, P(y(u), (o, c) => (_(), b("option", {
        key: o,
        value: o
      }, H(o), 9, ut))), 128))
    ], 512)), [
      [$e, y(i)]
    ]);
  }
});
var V = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(V || {});
class ct {
  constructor(t, n = "ASC", u) {
    B(this, "key");
    B(this, "direction");
    B(this, "sortFn");
    this.key = t, this.direction = n, this.sortFn = u;
  }
}
const oe = (e, t) => {
  const n = (o, c) => {
    let d = typeof o, x = typeof c;
    return d == "number" && d == x;
  }, u = (o, c) => o - c, i = (o, c) => (o = o ?? "", c = c ?? "", o.localeCompare(c)), m = (o, c) => n(o, c) ? u : i, p = [...t];
  return p.sort((o, c) => {
    let d = 0;
    for (let x of e) {
      let { key: f, direction: k, sortFn: $ } = x, v = k === "ASC" ? 1 : -1, s = o[f], l = c[f];
      if ($ = typeof $ == "function" ? $ : m(s, l), d = $(s, l, o, c, t, x, v) * v, d !== 0)
        return d;
    }
    return d;
  }), p;
}, dt = ["onClick"], ft = { class: "th-wrapper" }, vt = {
  key: 0,
  "data-sort-indicator": ""
}, pt = { class: "sort-index" }, ht = { class: "sort-direction" }, _t = ["onMouseover"], mt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, yt = ["colspan"], bt = ["innerHTML"];
class J {
  constructor(t = "", n = "", u = !1, i) {
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
    this.key = t, this.label = n, this.sortable = u, this.sortFn = i;
  }
}
const kt = /* @__PURE__ */ E({
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
    const n = e, u = (v) => {
      let s = [];
      for (const l of v)
        s = s.concat(Object.keys(l));
      return s = s.filter((l, h) => s.indexOf(l) == h), s;
    }, i = D([]), { fields: m, items: p } = z(n), o = L(() => {
      if (n.externalSort || i.value.length == 0)
        return n.items;
      const v = [...n.items];
      return oe(i.value, v);
    }), c = L(() => {
      let v = m.value, s = [];
      return v.length === 0 && (v = u([...p.value])), v.reduce((l, h, a) => {
        if (typeof h == "string")
          l.push(new J(h, h));
        else if (h instanceof J)
          l.push(h);
        else if (typeof h == "object") {
          const { key: g, label: M, sortable: w, sortFn: T } = h;
          l.push(new J(g, M, w, T));
        }
        return l;
      }, s);
    });
    function d(v) {
      const s = i.value.findIndex((l) => l.key === v.key);
      return s < 0 ? "" : s + 1;
    }
    function x(v) {
      const s = i.value.findIndex((h) => h.key === v.key);
      if (s < 0)
        return "fas fa-sort";
      const l = i.value[s];
      return l.direction === V.ASC ? "fas fa-sort-up" : l.direction === V.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function f(v) {
      const { key: s } = v, l = i.value.findIndex((h) => h.key === s);
      if (l < 0) {
        const h = new ct(s, V.ASC, v.sortFn);
        i.value.push(h);
      } else {
        const h = i.value[l], a = h.direction;
        a === V.ASC ? h.direction = V.DESC : a === V.DESC && i.value.splice(l, 1);
      }
      t("sort", i.value, oe);
    }
    function k(v, s, l, h) {
      t("onMouseOverCell", v, s, l, h);
    }
    let $ = D(null);
    return Z(() => {
      $.value = W();
    }), (v, s) => (_(), b("table", F({ ...v.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      r("thead", null, [
        (_(!0), b(O, null, P(y(c), (l) => (_(), b("th", {
          key: `thead-${l.key}`,
          class: S({ sortable: l.sortable }),
          onClick: (h) => l.sortable && f(l)
        }, [
          r("span", ft, [
            C(v.$slots, `head(${l.key})`, {
              field: l,
              data: y($),
              value: l.label
            }, () => [
              U(H(l.label), 1)
            ], !0),
            l.sortable ? (_(), b("span", vt, [
              r("span", pt, H(d(l)), 1),
              r("span", ht, [
                r("i", {
                  class: S(x(l))
                }, null, 2)
              ])
            ])) : G("", !0)
          ])
        ], 10, dt))), 128))
      ]),
      r("tbody", null, [
        (_(!0), b(O, null, P(y(o), (l, h) => (_(), b(O, {
          key: `trow-${(l == null ? void 0 : l.id) ?? h}`
        }, [
          C(v.$slots, "row", {
            item: l,
            index: h,
            colspan: y(c).length
          }, void 0, !0),
          r("tr", null, [
            (_(!0), b(O, null, P(y(c), (a) => (_(), b("td", {
              key: `tcell-${a.key + ((l == null ? void 0 : l.id) ?? h)}`,
              class: S({ [`tcell-${a == null ? void 0 : a.key}`]: !0 }),
              onMouseover: (g) => k(g, l, h, a)
            }, [
              C(v.$slots, `cell(${a == null ? void 0 : a.key})`, {
                data: y($),
                item: l,
                field: a,
                value: l[a == null ? void 0 : a.key]
              }, () => [
                U(H(l[a == null ? void 0 : a.key]), 1)
              ], !0)
            ], 42, _t))), 128))
          ])
        ], 64))), 128))
      ]),
      r("tfoot", null, [
        C(v.$slots, "footer", { data: y($) }, void 0, !0)
      ]),
      e.showEmpty && y(o).length === 0 ? (_(), b("tr", mt, [
        r("td", {
          colspan: y(c).length
        }, [
          C(v.$slots, "empty", {
            items: y(o),
            data: y($),
            fields: y(c)
          }, () => [
            r("span", { innerHTML: e.emptyText }, null, 8, bt)
          ], !0)
        ], 8, yt)
      ])) : G("", !0)
    ], 16));
  }
});
const $t = /* @__PURE__ */ I(kt, [["__scopeId", "data-v-7828e531"]]);
var ie = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ie || {});
const Ct = /* @__PURE__ */ E({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: ie.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    size: { default: R.STANDARD }
  },
  setup(e) {
    const t = e, { variant: n, centered: u, dropup: i, dropend: m, dropstart: p } = z(t), o = D(!1), c = L(() => {
      const s = [];
      return n != null && n.value && s.push(`btn-${n.value}`), t.size && s.push(`btn-${t.size}`), s;
    }), d = L(() => {
      const s = [];
      return u != null && u.value && s.push("dropdown-center"), i != null && i.value && s.push("dropup"), p != null && p.value && s.push("dropstart"), !(p != null && p.value) && (m != null && m.value) && s.push("dropend"), s.length === 0 ? s.push("dropdown") : s.unshift("btn-group"), s;
    });
    function x() {
      o.value = !0;
    }
    function f() {
      o.value = !1;
    }
    const k = "data-prevent-close";
    let $;
    function v(s) {
      const { currentTarget: l } = s;
      o.value ? f() : x(), o.value && ($ = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (h) => {
          const { target: a } = h;
          a != null && a.closest(`[${k}],[${k}=true]`) || a === l || (f(), $.abort());
        }, { signal: $.signal });
      }, 0));
    }
    return (s, l) => (_(), b("div", {
      class: S(y(d))
    }, [
      r("button", {
        class: S(["btn dropdown-toggle", y(c)]),
        type: "button",
        "aria-expanded": "false",
        onClick: v
      }, [
        C(s.$slots, "button", {}, () => [
          U(H(e.text), 1)
        ])
      ], 2),
      r("ul", {
        class: S(["dropdown-menu", { show: o.value }])
      }, [
        C(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), wt = ["data-prevent-close"], gt = ["onClick"], xt = /* @__PURE__ */ E({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, { preventClose: u } = z(n);
    function i() {
      const m = W();
      t("click", m);
    }
    return (m, p) => (_(), b("li", {
      "data-prevent-close": y(u) ? "" : null
    }, [
      r("a", {
        class: S(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: ee(i, ["prevent"])
      }, [
        C(m.$slots, "default")
      ], 10, gt)
    ], 8, wt));
  }
}), Tt = {}, St = { "data-prevent-close": "" }, Mt = { class: "dropdown-header" };
function Lt(e, t) {
  return _(), b("li", St, [
    r("h6", Mt, [
      C(e.$slots, "default")
    ])
  ]);
}
const Bt = /* @__PURE__ */ I(Tt, [["render", Lt]]), At = {}, Ht = /* @__PURE__ */ r("hr", { class: "dropdown-divider" }, null, -1), Dt = [
  Ht
];
function Et(e, t) {
  return _(), b("li", null, Dt);
}
const Ot = /* @__PURE__ */ I(At, [["render", Et]]), zt = {
  mounted(e, t, n, u) {
    new xe(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
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
B(Q, "list", /* @__PURE__ */ new Set());
const Pt = ["onClick"], Rt = { class: "drawer-content" }, Vt = { class: "drawer-header" }, Nt = ["innerHTML"], Ft = { class: "drawer-body" }, It = ["innerHTML"], jt = { class: "drawer-footer" }, Gt = ["innerHTML"], Kt = ["innerHTML"], Ut = /* @__PURE__ */ E({
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
    const n = e, {
      backdrop: u,
      keyboard: i,
      focus: m,
      size: p,
      btnSize: o
    } = z(n), c = L(() => Y(p.value, "drawer-")), d = L(() => Y(o.value, "btn-")), x = D(), f = D(!1), k = W();
    let $;
    async function v() {
      return f.value === !0 ? void 0 : new Promise((X, q) => {
        f.value = !0, $ = X;
      });
    }
    function s(T = !0) {
      f.value = !1, typeof $ == "function" && $(T);
    }
    function l() {
      f.value === !0 ? v() : s(!1);
    }
    function h(T) {
      (u == null ? void 0 : u.value) !== "static" && s(!1);
    }
    function a() {
      s(!1);
    }
    function g() {
      s(!1);
    }
    function M() {
      s(!0);
    }
    function w() {
      f.value === !0 ? Q.add(k) : Q.delete(k);
    }
    return t({
      show: v,
      hide: s,
      toggle: l
    }), (T, X) => (_(), N(Ce, {
      onBeforeEnter: w,
      onAfterLeave: w
    }, {
      default: K(() => [
        f.value ? (_(), b("div", F({
          key: 0,
          ref_key: "drawerElement",
          ref: x,
          class: "drawer",
          tabindex: "-1"
        }, { ...T.$attrs }, {
          onClick: ee(h, ["self"])
        }), [
          r("div", {
            class: S(["drawer-dialog", y(c)])
          }, [
            r("div", Rt, [
              r("div", Vt, [
                C(T.$slots, "header", {}, () => [
                  r("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Nt)
                ], !0),
                r("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: a
                })
              ]),
              r("div", Ft, [
                C(T.$slots, "default", {}, () => [
                  r("span", { innerHTML: e.body }, null, 8, It)
                ], !0)
              ]),
              r("div", jt, [
                C(T.$slots, "footer", {}, () => [
                  e.okOnly ? G("", !0) : (_(), b("button", {
                    key: 0,
                    type: "button",
                    class: S(["ms-auto btn btn-secondary", y(d)]),
                    onClick: g
                  }, [
                    C(T.$slots, "button-cancel", {}, () => [
                      r("span", { innerHTML: e.textCancel }, null, 8, Gt)
                    ], !0)
                  ], 2)),
                  r("button", {
                    type: "button",
                    class: S(["btn btn-primary", y(d)]),
                    onClick: M
                  }, [
                    C(T.$slots, "button-ok", {}, () => [
                      r("span", { innerHTML: e.textOk }, null, 8, Kt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Pt)) : G("", !0)
      ]),
      _: 3
    }));
  }
});
const Yt = /* @__PURE__ */ I(Ut, [["__scopeId", "data-v-2e49e8cb"]]), A = "b", ce = "$toaster", de = "$modalManager";
class fe {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const u = le(Ge).mount(t);
      this.component = u;
    }
    return this.component;
  }
}
B(fe, "component");
class ve {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const u = le(Ee).mount(t);
      this.component = u;
    }
    return this.component;
  }
}
B(ve, "component");
function Zt() {
  return ae(ce);
}
function en() {
  return ae(de);
}
function Wt(e) {
  e.component(`${A}-drawer`, Yt), e.component(`${A}-modal`, ue), e.component(`${A}-pagination`, ot), e.component(`${A}-pagination-dropdown`, rt), e.component(`${A}-pagination-select`, it), e.component(`${A}-dropdown`, Ct), e.component(`${A}-dropdown-item`, xt), e.component(`${A}-dropdown-header`, Bt), e.component(`${A}-dropdown-divider`, Ot), e.component(`${A}-table`, $t), e.component(`${A}-toast`, re);
}
function Xt(e) {
  e.directive("tooltip", zt);
}
const tn = {
  install(e) {
    Wt(e), Xt(e);
    const t = ve.getComponent();
    e.provide(ce, t);
    const n = fe.getComponent();
    e.provide(de, n);
  }
};
export {
  tn as BootstrapVue,
  Ct as Dropdown,
  Ot as DropdownDivider,
  Bt as DropdownHeader,
  xt as DropdownItem,
  ue as Modal,
  Ge as ModalManager,
  rt as PageSizeDropdown,
  it as PageSizeSelect,
  ot as Pagination,
  $t as Table,
  J as TableFieldDefinition,
  re as Toast,
  Ee as Toaster,
  zt as tooltip,
  en as useModal,
  Zt as useToaster
};
