var pe = Object.defineProperty;
var he = (e, t, n) => t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var B = (e, t, n) => (he(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as O, toRefs as E, ref as D, watch as _e, onMounted as Q, openBlock as p, createElementBlock as b, normalizeClass as T, renderSlot as $, createElementVNode as l, toDisplayString as H, createBlock as N, Teleport as oe, Fragment as z, renderList as P, mergeProps as F, computed as L, getCurrentInstance as Z, withModifiers as se, unref as y, createCommentVNode as G, createVNode as me, watchEffect as ye, resolveComponent as ee, withCtx as K, createTextVNode as U, withDirectives as be, isRef as ke, vModelSelect as $e, Transition as Ce, inject as ae, createApp as le } from "vue";
import { Toast as we, Modal as ge, Tooltip as xe } from "bootstrap";
const Se = { class: "toast-header" }, Te = ["textContent"], Me = ["textContent"], Le = { class: "toast-body" }, Be = ["textContent"], re = /* @__PURE__ */ O({
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
    const u = e, { visible: i, animation: m, autohide: h, delay: a } = E(u), c = D(), d = D();
    _e(i, (w) => {
      s();
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
    function C() {
      c.value.isShown();
    }
    function v() {
      c.value.getOrCreateInstance();
    }
    function o() {
      c.value.getInstance();
    }
    function s() {
      c.value && (i.value === !0 ? x() : f());
    }
    function _() {
      n("hide", c.value);
    }
    function r() {
      n("hidden", c.value);
    }
    function g() {
      n("show", c.value);
    }
    async function M() {
      n("shown", c.value);
    }
    return t({ show: x, hide: f, dispose: k, isShown: C, getOrCreateInstance: v, getInstance: o }), Q(() => {
      d.value.addEventListener("hide.bs.toast", _), d.value.addEventListener("hidden.bs.toast", r), d.value.addEventListener("show.bs.toast", g), d.value.addEventListener("shown.bs.toast", M), c.value = new we(d.value, {
        animation: m.value,
        autohide: h.value,
        delay: a.value
      }), s();
    }), (w, S) => (p(), b("div", {
      ref_key: "toastRef",
      ref: d,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      $(w.$slots, "header", {}, () => [
        l("div", Se, [
          $(w.$slots, "title", {}, () => [
            l("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, Te)
          ]),
          $(w.$slots, "subtitle", {}, () => [
            l("small", {
              textContent: H(e.subtitle)
            }, null, 8, Me)
          ]),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: f
          })
        ])
      ]),
      $(w.$slots, "body", {}, () => [
        l("div", Le, [
          $(w.$slots, "default", {}, () => [
            l("span", {
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
let te;
const De = /* @__PURE__ */ O({
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
    te = (m, h = "top right") => {
      const a = Ae(), c = { ...n, ...m, id: a };
      let d = u.value.get(h);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(c), u.value.set(h, d);
    };
    function i(m, h) {
      const a = u.value.get(m);
      a == null || a.delete(h);
    }
    return t({ toast: te }), (m, h) => (p(), N(oe, { to: "body" }, [
      l("div", He, [
        (p(!0), b(z, null, P(u.value, ([a, c]) => (p(), b("div", {
          key: a,
          class: T(["toast-group", `${a}`])
        }, [
          (p(!0), b(z, null, P(c, (d, x) => (p(), N(re, F({
            key: d.id
          }, d, {
            onHidden: (f) => i(a, d)
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
}, Oe = /* @__PURE__ */ I(De, [["__scopeId", "data-v-177f801e"]]);
var R = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(R || {});
const Y = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(R).includes(n) || n == "" ? "" : `${t}${n}`;
}, ze = ["onClick"], Ee = { class: "modal-content" }, Pe = { class: "modal-header" }, Re = ["innerHTML"], Ve = { class: "modal-body" }, Ne = ["innerHTML"], Fe = { class: "modal-footer" }, Ie = ["innerHTML"], je = ["innerHTML"];
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
    const n = e, {
      backdrop: u,
      keyboard: i,
      focus: m,
      disableOutsideClick: h,
      size: a,
      btnSize: c
    } = E(n), d = L(() => Y(a.value, "modal-")), x = L(() => Y(c.value, "btn-")), f = D();
    let k;
    Z();
    let C;
    function v() {
      return new Promise((S, W) => {
        const X = j.getLast();
        X && X.hide(), j.addToStack(k), k == null || k.show(), C = S;
      });
    }
    function o(w = !0) {
      j.removeFromStack(k), k == null || k.hide();
      const S = j.getLast();
      S && S.show(), typeof C == "function" && C(w);
    }
    function s() {
      k == null || k.toggle();
    }
    Q(() => {
      k = new ge(f.value, {
        backdrop: u == null ? void 0 : u.value,
        keyboard: i.value,
        focus: m.value
      });
    });
    function _(w) {
      (u == null ? void 0 : u.value) !== "static" && o(!1);
    }
    function r() {
      o(!1);
    }
    function g() {
      o(!1);
    }
    function M() {
      o(!0);
    }
    return t({
      show: v,
      hide: o,
      toggle: s
    }), (w, S) => (p(), b("div", F({
      ref_key: "modalElement",
      ref: f,
      class: "modal fade",
      tabindex: "-1"
    }, { ...w.$attrs }, {
      onClick: se(_, ["self"])
    }), [
      l("div", {
        class: T(["modal-dialog", y(d)])
      }, [
        l("div", Ee, [
          l("div", Pe, [
            $(w.$slots, "header", {}, () => [
              l("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Re)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: r
            })
          ]),
          l("div", Ve, [
            $(w.$slots, "default", {}, () => [
              l("span", { innerHTML: e.body }, null, 8, Ne)
            ])
          ]),
          l("div", Fe, [
            $(w.$slots, "footer", {}, () => [
              e.okOnly ? G("", !0) : (p(), b("button", {
                key: 0,
                type: "button",
                class: T(["btn btn-secondary", y(x)]),
                onClick: g
              }, [
                $(w.$slots, "button-cancel", {}, () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, Ie)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: T(["btn btn-primary", y(x)]),
                onClick: M
              }, [
                $(w.$slots, "button-ok", {}, () => [
                  l("span", { innerHTML: e.textOk }, null, 8, je)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, ze));
  }
}), Ge = /* @__PURE__ */ O({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = D(void 0), u = D({});
    function i(h = {}) {
      var a;
      return h.okOnly = !1, u.value = h, (a = n.value) == null ? void 0 : a.show();
    }
    function m(h = {}) {
      var a;
      return h.okOnly = !0, u.value = h, (a = n.value) == null ? void 0 : a.show();
    }
    return t({ confirm: i, alert: m }), (h, a) => (p(), N(oe, { to: "body" }, [
      me(ue, F({
        ref_key: "modalRef",
        ref: n
      }, { ...u.value }), null, 16)
    ]));
  }
}), Ke = { "data-first": "" }, Ue = ["disabled", "innerHTML"], Ye = { "data-prev": "" }, We = ["disabled", "innerHTML"], Xe = { key: 0 }, qe = ["innerHTML"], Je = ["onClick"], Qe = { "data-next": "" }, Ze = ["disabled", "innerHTML"], et = { "data-last": "" }, tt = ["disabled", "innerHTML"], nt = /* @__PURE__ */ O({
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
    function u(r, g = 0) {
      return [...Array(r).keys()].map((M) => M + g);
    }
    const { modelValue: i, maxVisibleButtons: m, hideEllipsis: h } = E(n), a = Math.floor(m.value / 2), c = L(() => {
      let r = m.value, g = i.value <= a ? 1 : i.value - a;
      return i.value >= f.value - a && (g = f.value - r + 1), g < 1 && (g = 1), f.value < r && (r = f.value), u(r, g);
    }), d = L(() => i.value <= 1), x = L(() => i.value >= f.value), f = L(() => {
      const { perPage: r, totalItems: g } = n;
      return Math.ceil(g / r);
    });
    ye(() => {
      f.value > 0 && i.value > f.value && t("update:modelValue", f.value);
    });
    function k(r) {
      const g = m.value - 1;
      return !(h.value === !0 || r === 0 && i.value - a - 1 <= 0 || r === g && i.value + a >= f.value || r > 0 && r < g);
    }
    function C(r) {
      r < 1 && (r = 1), r > f.value && (r = f.value), t("update:modelValue", r);
    }
    function v() {
      t("update:modelValue", 1);
    }
    function o() {
      t("update:modelValue", f.value);
    }
    function s() {
      let r = i.value - 1;
      r < 1 && (r = 1), t("update:modelValue", r);
    }
    function _() {
      let r = i.value + 1;
      r > f.value && (r = f.value), t("update:modelValue", r);
    }
    return (r, g) => (p(), b("ul", {
      class: T(["pagination", e.size])
    }, [
      l("li", Ke, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.firstText,
          onClick: v
        }, null, 8, Ue)
      ]),
      l("li", Ye, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.prevText,
          onClick: s
        }, null, 8, We)
      ]),
      (p(!0), b(z, null, P(y(c), (M, w) => (p(), b(z, null, [
        k(w) ? (p(), b("li", Xe, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, qe)
        ])) : (p(), b("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === M })
        }, [
          l("button", {
            class: "",
            onClick: (S) => C(M)
          }, H(M), 9, Je)
        ], 2))
      ], 64))), 256)),
      l("li", Qe, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.nextText,
          onClick: _
        }, null, 8, Ze)
      ]),
      l("li", et, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.lastText,
          onClick: o
        }, null, 8, tt)
      ])
    ], 2));
  }
});
const ot = /* @__PURE__ */ I(nt, [["__scopeId", "data-v-2bfd7085"]]), st = { class: "d-inline" }, at = /* @__PURE__ */ l("span", null, "Per page: ", -1), lt = { class: "fw-bold" }, rt = /* @__PURE__ */ O({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: u } = E(n), i = L({
      get: () => n.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, h) => {
      const a = ee("b-dropdown-item"), c = ee("b-dropdown");
      return p(), N(c, F({
        variant: "outline-primary",
        size: "sm"
      }, { ...m.$attrs }), {
        button: K(() => [
          l("div", st, [
            $(m.$slots, "default", { selected: y(i) }, () => [
              at,
              l("span", lt, H(y(i)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (p(!0), b(z, null, P(y(u), (d, x) => (p(), N(a, {
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
}), ut = ["value"], it = /* @__PURE__ */ O({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: u } = E(n), i = L({
      get: () => n.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, h) => be((p(), b("select", {
      "onUpdate:modelValue": h[0] || (h[0] = (a) => ke(i) ? i.value = a : null)
    }, [
      (p(!0), b(z, null, P(y(u), (a, c) => (p(), b("option", {
        key: a,
        value: a
      }, H(a), 9, ut))), 128))
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
const ne = (e, t) => {
  const n = (a, c) => {
    let d = typeof a, x = typeof c;
    return d == "number" && d == x;
  }, u = (a, c) => a - c, i = (a, c) => (a = a ?? "", c = c ?? "", a.localeCompare(c)), m = (a, c) => n(a, c) ? u : i, h = [...t];
  return h.sort((a, c) => {
    let d = 0;
    for (let x of e) {
      let { key: f, direction: k, sortFn: C } = x, v = k === "ASC" ? 1 : -1, o = a[f], s = c[f];
      if (C = typeof C == "function" ? C : m(o, s), d = C(o, s, a, c, t, x, v) * v, d !== 0)
        return d;
    }
    return d;
  }), h;
}, dt = ["onClick"], ft = { class: "th-wrapper" }, vt = {
  key: 0,
  "data-sort-indicator": ""
}, pt = { class: "sort-index" }, ht = { class: "sort-direction" }, _t = ["onMouseover"], mt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, yt = ["colspan"], bt = ["innerHTML"];
class q {
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
const kt = /* @__PURE__ */ O({
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
      let o = [];
      for (const s of v)
        o = o.concat(Object.keys(s));
      return o = o.filter((s, _) => o.indexOf(s) == _), o;
    }, i = D([]), { fields: m, items: h } = E(n), a = L(() => {
      if (n.externalSort || i.value.length == 0)
        return n.items;
      const v = [...n.items];
      return ne(i.value, v);
    }), c = L(() => {
      let v = m.value, o = [];
      return v.length === 0 && (v = u([...h.value])), v.reduce((s, _, r) => {
        if (typeof _ == "string")
          s.push(new q(_, _));
        else if (_ instanceof q)
          s.push(_);
        else if (typeof _ == "object") {
          const { key: g, label: M, sortable: w, sortFn: S } = _;
          s.push(new q(g, M, w, S));
        }
        return s;
      }, o);
    });
    function d(v) {
      const o = i.value.findIndex((s) => s.key === v.key);
      return o < 0 ? "" : o + 1;
    }
    function x(v) {
      const o = i.value.findIndex((_) => _.key === v.key);
      if (o < 0)
        return "fas fa-sort";
      const s = i.value[o];
      return s.direction === V.ASC ? "fas fa-sort-up" : s.direction === V.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function f(v) {
      const { key: o } = v, s = i.value.findIndex((_) => _.key === o);
      if (s < 0) {
        const _ = new ct(o, V.ASC, v.sortFn);
        i.value.push(_);
      } else {
        const _ = i.value[s], r = _.direction;
        r === V.ASC ? _.direction = V.DESC : r === V.DESC && i.value.splice(s, 1);
      }
      t("sort", i.value, ne);
    }
    function k(v, o, s, _) {
      t("onMouseOverCell", v, o, s, _);
    }
    let C = D(null);
    return Q(() => {
      C.value = Z();
    }), (v, o) => (p(), b("table", F({ ...v.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (p(!0), b(z, null, P(y(c), (s) => (p(), b("th", {
          key: `thead-${s.key}`,
          class: T({ sortable: s.sortable }),
          onClick: (_) => s.sortable && f(s)
        }, [
          l("span", ft, [
            $(v.$slots, `head(${s.key})`, {
              field: s,
              data: y(C),
              value: s.label
            }, () => [
              U(H(s.label), 1)
            ], !0),
            s.sortable ? (p(), b("span", vt, [
              l("span", pt, H(d(s)), 1),
              l("span", ht, [
                l("i", {
                  class: T(x(s))
                }, null, 2)
              ])
            ])) : G("", !0)
          ])
        ], 10, dt))), 128))
      ]),
      l("tbody", null, [
        (p(!0), b(z, null, P(y(a), (s, _) => (p(), b(z, {
          key: `trow-${(s == null ? void 0 : s.id) ?? _}`
        }, [
          $(v.$slots, "row", {
            item: s,
            index: _,
            colspan: y(c).length
          }, void 0, !0),
          l("tr", null, [
            (p(!0), b(z, null, P(y(c), (r) => (p(), b("td", {
              key: `tcell-${r.key + ((s == null ? void 0 : s.id) ?? _)}`,
              class: T({ [`tcell-${r == null ? void 0 : r.key}`]: !0 }),
              onMouseover: (g) => k(g, s, _, r)
            }, [
              $(v.$slots, `cell(${r == null ? void 0 : r.key})`, {
                data: y(C),
                item: s,
                field: r,
                value: s[r == null ? void 0 : r.key]
              }, () => [
                U(H(s[r == null ? void 0 : r.key]), 1)
              ], !0)
            ], 42, _t))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        $(v.$slots, "footer", { data: y(C) }, void 0, !0)
      ]),
      e.showEmpty && y(a).length === 0 ? (p(), b("tr", mt, [
        l("td", {
          colspan: y(c).length
        }, [
          $(v.$slots, "empty", {
            items: y(a),
            data: y(C),
            fields: y(c)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, bt)
          ], !0)
        ], 8, yt)
      ])) : G("", !0)
    ], 16));
  }
});
const $t = /* @__PURE__ */ I(kt, [["__scopeId", "data-v-7828e531"]]);
var ie = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ie || {});
const Ct = /* @__PURE__ */ O({
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
    const t = e, { variant: n, centered: u, dropup: i, dropend: m, dropstart: h } = E(t), a = D(!1), c = L(() => {
      const o = [];
      return n != null && n.value && o.push(`btn-${n.value}`), t.size && o.push(`btn-${t.size}`), o;
    }), d = L(() => {
      const o = [];
      return u != null && u.value && o.push("dropdown-center"), i != null && i.value && o.push("dropup"), h != null && h.value && o.push("dropstart"), !(h != null && h.value) && (m != null && m.value) && o.push("dropend"), o.length === 0 ? o.push("dropdown") : o.unshift("btn-group"), o;
    });
    function x() {
      a.value = !0;
    }
    function f() {
      a.value = !1;
    }
    const k = "data-prevent-close";
    function C(o) {
      a.value ? f() : x();
    }
    function v(o) {
      const { target: s } = o;
      (s == null ? void 0 : s.closest(`[${k}],[${k}=true]`)) || f();
    }
    return (o, s) => (p(), b("div", {
      class: T(y(d))
    }, [
      l("button", {
        class: T(["btn dropdown-toggle", y(c)]),
        type: "button",
        "aria-expanded": "false",
        onClick: C
      }, [
        $(o.$slots, "button", {}, () => [
          U(H(e.text), 1)
        ])
      ], 2),
      l("ul", {
        class: T(["dropdown-menu", { show: a.value }]),
        onClick: v
      }, [
        $(o.$slots, "default")
      ], 2)
    ], 2));
  }
}), wt = ["data-prevent-close"], gt = /* @__PURE__ */ O({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click", "item-click"],
  setup(e, { emit: t }) {
    const n = e, { preventClose: u } = E(n);
    return (i, m) => (p(), b("li", {
      "data-prevent-close": y(u) ? "" : null
    }, [
      l("a", {
        class: T(["dropdown-item", { active: e.active }]),
        href: "#"
      }, [
        $(i.$slots, "default")
      ], 2)
    ], 8, wt));
  }
}), xt = {}, St = { "data-prevent-close": "" }, Tt = { class: "dropdown-header" };
function Mt(e, t) {
  return p(), b("li", St, [
    l("h6", Tt, [
      $(e.$slots, "default")
    ])
  ]);
}
const Lt = /* @__PURE__ */ I(xt, [["render", Mt]]), Bt = {}, At = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Ht = [
  At
];
function Dt(e, t) {
  return p(), b("li", null, Ht);
}
const Ot = /* @__PURE__ */ I(Bt, [["render", Dt]]), zt = {
  mounted(e, t, n, u) {
    new xe(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
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
const Et = ["onClick"], Pt = { class: "drawer-content" }, Rt = { class: "drawer-header" }, Vt = ["innerHTML"], Nt = { class: "drawer-body" }, Ft = ["innerHTML"], It = { class: "drawer-footer" }, jt = ["innerHTML"], Gt = ["innerHTML"], Kt = /* @__PURE__ */ O({
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
      size: h,
      btnSize: a
    } = E(n), c = L(() => Y(h.value, "drawer-")), d = L(() => Y(a.value, "btn-")), x = D(), f = D(!1), k = Z();
    let C;
    async function v() {
      return f.value === !0 ? void 0 : new Promise((W, X) => {
        f.value = !0, C = W;
      });
    }
    function o(S = !0) {
      f.value = !1, typeof C == "function" && C(S);
    }
    function s() {
      f.value === !0 ? v() : o(!1);
    }
    function _(S) {
      (u == null ? void 0 : u.value) !== "static" && o(!1);
    }
    function r() {
      o(!1);
    }
    function g() {
      o(!1);
    }
    function M() {
      o(!0);
    }
    function w() {
      f.value === !0 ? J.add(k) : J.delete(k);
    }
    return t({
      show: v,
      hide: o,
      toggle: s
    }), (S, W) => (p(), N(Ce, {
      onBeforeEnter: w,
      onAfterLeave: w
    }, {
      default: K(() => [
        f.value ? (p(), b("div", F({
          key: 0,
          ref_key: "drawerElement",
          ref: x,
          class: "drawer",
          tabindex: "-1"
        }, { ...S.$attrs }, {
          onClick: se(_, ["self"])
        }), [
          l("div", {
            class: T(["drawer-dialog", y(c)])
          }, [
            l("div", Pt, [
              l("div", Rt, [
                $(S.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Vt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: r
                })
              ]),
              l("div", Nt, [
                $(S.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, Ft)
                ], !0)
              ]),
              l("div", It, [
                $(S.$slots, "footer", {}, () => [
                  e.okOnly ? G("", !0) : (p(), b("button", {
                    key: 0,
                    type: "button",
                    class: T(["ms-auto btn btn-secondary", y(d)]),
                    onClick: g
                  }, [
                    $(S.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, jt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: T(["btn btn-primary", y(d)]),
                    onClick: M
                  }, [
                    $(S.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, Gt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Et)) : G("", !0)
      ]),
      _: 3
    }));
  }
});
const Ut = /* @__PURE__ */ I(Kt, [["__scopeId", "data-v-2e49e8cb"]]), A = "b", ce = "$toaster", de = "$modalManager";
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
      const u = le(Oe).mount(t);
      this.component = u;
    }
    return this.component;
  }
}
B(ve, "component");
function Qt() {
  return ae(ce);
}
function Zt() {
  return ae(de);
}
function Yt(e) {
  e.component(`${A}-drawer`, Ut), e.component(`${A}-modal`, ue), e.component(`${A}-pagination`, ot), e.component(`${A}-pagination-dropdown`, rt), e.component(`${A}-pagination-select`, it), e.component(`${A}-dropdown`, Ct), e.component(`${A}-dropdown-item`, gt), e.component(`${A}-dropdown-header`, Lt), e.component(`${A}-dropdown-divider`, Ot), e.component(`${A}-table`, $t), e.component(`${A}-toast`, re);
}
function Wt(e) {
  e.directive("tooltip", zt);
}
const en = {
  install(e) {
    Yt(e), Wt(e);
    const t = ve.getComponent();
    e.provide(ce, t);
    const n = fe.getComponent();
    e.provide(de, n);
  }
};
export {
  en as BootstrapVue,
  Ct as Dropdown,
  Ot as DropdownDivider,
  Lt as DropdownHeader,
  gt as DropdownItem,
  ue as Modal,
  Ge as ModalManager,
  rt as PageSizeDropdown,
  it as PageSizeSelect,
  ot as Pagination,
  $t as Table,
  q as TableFieldDefinition,
  re as Toast,
  Oe as Toaster,
  zt as tooltip,
  Zt as useModal,
  Qt as useToaster
};
