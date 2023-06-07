var pe = Object.defineProperty;
var he = (e, t, o) => t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var B = (e, t, o) => (he(e, typeof t != "symbol" ? t + "" : t, o), o);
import { defineComponent as O, toRefs as E, ref as D, watch as _e, onMounted as Z, openBlock as _, createElementBlock as b, normalizeClass as S, renderSlot as $, createElementVNode as l, toDisplayString as H, createBlock as N, Teleport as se, Fragment as R, renderList as z, mergeProps as F, computed as L, getCurrentInstance as X, withModifiers as ee, unref as y, createCommentVNode as K, createVNode as me, watchEffect as ye, resolveComponent as te, withCtx as U, createTextVNode as Y, withDirectives as be, isRef as ke, vModelSelect as $e, Transition as we, inject as ae, createApp as le } from "vue";
import { Toast as Ce, Modal as ge, Tooltip as xe } from "bootstrap";
const Te = { class: "toast-header" }, Se = ["textContent"], Me = ["textContent"], Le = { class: "toast-body" }, Be = ["textContent"], re = /* @__PURE__ */ O({
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
    const u = e, { visible: i, animation: m, autohide: h, delay: a } = E(u), c = D(), d = D();
    _e(i, (w) => {
      p();
    }, { immediate: !0 });
    function g() {
      c.value.show();
    }
    function v() {
      c.value.hide();
    }
    function k() {
      c.value.dispose();
    }
    function C() {
      c.value.isShown();
    }
    function T() {
      c.value.getOrCreateInstance();
    }
    function s() {
      c.value.getInstance();
    }
    function p() {
      c.value && (i.value === !0 ? g() : v());
    }
    function r() {
      o("hide", c.value);
    }
    function n() {
      o("hidden", c.value);
    }
    function f() {
      o("show", c.value);
    }
    async function M() {
      o("shown", c.value);
    }
    return t({ show: g, hide: v, dispose: k, isShown: C, getOrCreateInstance: T, getInstance: s }), Z(() => {
      d.value.addEventListener("hide.bs.toast", r), d.value.addEventListener("hidden.bs.toast", n), d.value.addEventListener("show.bs.toast", f), d.value.addEventListener("shown.bs.toast", M), c.value = new Ce(d.value, {
        animation: m.value,
        autohide: h.value,
        delay: a.value
      }), p();
    }), (w, x) => (_(), b("div", {
      ref_key: "toastRef",
      ref: d,
      class: S(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      $(w.$slots, "header", {}, () => [
        l("div", Te, [
          $(w.$slots, "title", {}, () => [
            l("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, Se)
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
            onClick: v
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
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const u = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (o == "x" ? u : u & 3 | 8).toString(16);
  });
}
const He = { id: "toast-wrapper" };
let ne;
const De = /* @__PURE__ */ O({
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
    }, u = D(/* @__PURE__ */ new Map());
    ne = (m, h = "top right") => {
      const a = Ae(), c = { ...o, ...m, id: a };
      let d = u.value.get(h);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(c), u.value.set(h, d);
    };
    function i(m, h) {
      const a = u.value.get(m);
      a == null || a.delete(h);
    }
    return t({ toast: ne }), (m, h) => (_(), N(se, { to: "body" }, [
      l("div", He, [
        (_(!0), b(R, null, z(u.value, ([a, c]) => (_(), b("div", {
          key: a,
          class: S(["toast-group", `${a}`])
        }, [
          (_(!0), b(R, null, z(c, (d, g) => (_(), N(re, F({
            key: d.id
          }, d, {
            onHidden: (v) => i(a, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const I = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [u, i] of t)
    o[u] = i;
  return o;
}, Oe = /* @__PURE__ */ I(De, [["__scopeId", "data-v-177f801e"]]);
var P = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(P || {});
const W = (e, t = "") => {
  let o = e.toLowerCase();
  return !Object.values(P).includes(o) || o == "" ? "" : `${t}${o}`;
}, Re = ["onClick"], Ee = { class: "modal-content" }, ze = { class: "modal-header" }, Pe = ["innerHTML"], Ve = { class: "modal-body" }, Ne = ["innerHTML"], Fe = { class: "modal-footer" }, Ie = ["innerHTML"], je = ["innerHTML"];
class G {
  static addToStack(t) {
    t != null && this.modalStack.push(t);
  }
  static removeFromStack(t) {
    if (t == null)
      return;
    const o = this.modalStack.indexOf(t);
    o < 0 || (this.modalStack.splice(o, 1), console.log(this.modalStack));
  }
  static getLast() {
    const t = this.modalStack.length;
    if (t !== 0)
      return this.modalStack[t - 1];
  }
}
B(G, "modalStack", new Array());
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
    size: { default: P.STANDARD },
    btnSize: { default: P.SMALL }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: u,
      keyboard: i,
      focus: m,
      disableOutsideClick: h,
      size: a,
      btnSize: c
    } = E(o), d = L(() => W(a.value, "modal-")), g = L(() => W(c.value, "btn-")), v = D();
    let k;
    X();
    let C;
    function T() {
      return new Promise((x, j) => {
        const q = G.getLast();
        q && q.hide(), G.addToStack(k), k == null || k.show(), C = x;
      });
    }
    function s(w = !0) {
      G.removeFromStack(k), k == null || k.hide();
      const x = G.getLast();
      x && x.show(), typeof C == "function" && C(w);
    }
    function p() {
      k == null || k.toggle();
    }
    Z(() => {
      k = new ge(v.value, {
        backdrop: u == null ? void 0 : u.value,
        keyboard: i.value,
        focus: m.value
      });
    });
    function r(w) {
      (u == null ? void 0 : u.value) !== "static" && s(!1);
    }
    function n() {
      s(!1);
    }
    function f() {
      s(!1);
    }
    function M() {
      s(!0);
    }
    return t({
      show: T,
      hide: s,
      toggle: p
    }), (w, x) => (_(), b("div", F({
      ref_key: "modalElement",
      ref: v,
      class: "modal fade",
      tabindex: "-1"
    }, { ...w.$attrs }, {
      onClick: ee(r, ["self"])
    }), [
      l("div", {
        class: S(["modal-dialog", y(d)])
      }, [
        l("div", Ee, [
          l("div", ze, [
            $(w.$slots, "header", {}, () => [
              l("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Pe)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: n
            })
          ]),
          l("div", Ve, [
            $(w.$slots, "default", {}, () => [
              l("span", { innerHTML: e.body }, null, 8, Ne)
            ])
          ]),
          l("div", Fe, [
            $(w.$slots, "footer", {}, () => [
              e.okOnly ? K("", !0) : (_(), b("button", {
                key: 0,
                type: "button",
                class: S(["btn btn-secondary", y(g)]),
                onClick: f
              }, [
                $(w.$slots, "button-cancel", {}, () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, Ie)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: S(["btn btn-primary", y(g)]),
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
    ], 16, Re));
  }
}), Ge = /* @__PURE__ */ O({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const o = D(void 0), u = D({});
    function i(h = {}) {
      var a;
      return h.okOnly = !1, u.value = h, (a = o.value) == null ? void 0 : a.show();
    }
    function m(h = {}) {
      var a;
      return h.okOnly = !0, u.value = h, (a = o.value) == null ? void 0 : a.show();
    }
    return t({ confirm: i, alert: m }), (h, a) => (_(), N(se, { to: "body" }, [
      me(ue, F({
        ref_key: "modalRef",
        ref: o
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
    size: { default: P.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function u(n, f = 0) {
      return [...Array(n).keys()].map((M) => M + f);
    }
    const { modelValue: i, maxVisibleButtons: m, hideEllipsis: h } = E(o), a = Math.floor(m.value / 2), c = L(() => {
      let n = m.value, f = i.value <= a ? 1 : i.value - a;
      return i.value >= v.value - a && (f = v.value - n + 1), f < 1 && (f = 1), v.value < n && (n = v.value), u(n, f);
    }), d = L(() => i.value <= 1), g = L(() => i.value >= v.value), v = L(() => {
      const { perPage: n, totalItems: f } = o;
      return Math.ceil(f / n);
    });
    ye(() => {
      v.value > 0 && i.value > v.value && t("update:modelValue", v.value);
    });
    function k(n) {
      const f = m.value - 1;
      return !(h.value === !0 || n === 0 && i.value - a - 1 <= 0 || n === f && i.value + a >= v.value || n > 0 && n < f);
    }
    function C(n) {
      n < 1 && (n = 1), n > v.value && (n = v.value), t("update:modelValue", n);
    }
    function T() {
      t("update:modelValue", 1);
    }
    function s() {
      t("update:modelValue", v.value);
    }
    function p() {
      let n = i.value - 1;
      n < 1 && (n = 1), t("update:modelValue", n);
    }
    function r() {
      let n = i.value + 1;
      n > v.value && (n = v.value), t("update:modelValue", n);
    }
    return (n, f) => (_(), b("ul", {
      class: S(["pagination", e.size])
    }, [
      l("li", Ke, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.firstText,
          onClick: T
        }, null, 8, Ue)
      ]),
      l("li", Ye, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.prevText,
          onClick: p
        }, null, 8, We)
      ]),
      (_(!0), b(R, null, z(y(c), (M, w) => (_(), b(R, null, [
        k(w) ? (_(), b("li", Xe, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, qe)
        ])) : (_(), b("li", {
          key: 1,
          "data-prev": "",
          class: S({ active: e.modelValue === M })
        }, [
          l("button", {
            class: "",
            onClick: (x) => C(M)
          }, H(M), 9, Je)
        ], 2))
      ], 64))), 256)),
      l("li", Qe, [
        l("button", {
          class: "",
          disabled: y(g),
          innerHTML: e.nextText,
          onClick: r
        }, null, 8, Ze)
      ]),
      l("li", et, [
        l("button", {
          class: "",
          disabled: y(g),
          innerHTML: e.lastText,
          onClick: s
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
    const o = e, { options: u } = E(o), i = L({
      get: () => o.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, h) => {
      const a = te("b-dropdown-item"), c = te("b-dropdown");
      return _(), N(c, F({
        variant: "outline-primary",
        size: "sm"
      }, { ...m.$attrs }), {
        button: U(() => [
          l("div", st, [
            $(m.$slots, "default", { selected: y(i) }, () => [
              at,
              l("span", lt, H(y(i)), 1)
            ])
          ])
        ]),
        default: U(() => [
          (_(!0), b(R, null, z(y(u), (d, g) => (_(), N(a, {
            key: d,
            onClick: (v) => i.value = d,
            active: d === e.modelValue
          }, {
            default: U(() => [
              Y(H(d), 1)
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
    const o = e, { options: u } = E(o), i = L({
      get: () => o.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, h) => be((_(), b("select", {
      "onUpdate:modelValue": h[0] || (h[0] = (a) => ke(i) ? i.value = a : null)
    }, [
      (_(!0), b(R, null, z(y(u), (a, c) => (_(), b("option", {
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
  constructor(t, o = "ASC", u) {
    B(this, "key");
    B(this, "direction");
    B(this, "sortFn");
    this.key = t, this.direction = o, this.sortFn = u;
  }
}
const oe = (e, t) => {
  const o = (a, c) => {
    let d = typeof a, g = typeof c;
    return d == "number" && d == g;
  }, u = (a, c) => a - c, i = (a, c) => (a = a ?? "", c = c ?? "", a.localeCompare(c)), m = (a, c) => o(a, c) ? u : i, h = [...t];
  return h.sort((a, c) => {
    let d = 0;
    for (let g of e) {
      let { key: v, direction: k, sortFn: C } = g, T = k === "ASC" ? 1 : -1, s = a[v], p = c[v];
      if (C = typeof C == "function" ? C : m(s, p), d = C(s, p, a, c, t, g, T) * T, d !== 0)
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
class J {
  constructor(t = "", o = "", u = !1, i) {
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
    this.key = t, this.label = o, this.sortable = u, this.sortFn = i;
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
  emits: ["sort", "onMouseOverRow", "onMouseOverRow"],
  setup(e, { emit: t }) {
    const o = e, u = (s) => {
      let p = [];
      for (const r of s)
        p = p.concat(Object.keys(r));
      return p = p.filter((r, n) => p.indexOf(r) == n), p;
    }, i = D([]), { fields: m, items: h } = E(o), a = L(() => {
      if (o.externalSort || i.value.length == 0)
        return o.items;
      const s = [...o.items];
      return oe(i.value, s);
    }), c = L(() => {
      let s = m.value, p = [];
      return s.length === 0 && (s = u([...h.value])), s.reduce((r, n, f) => {
        if (typeof n == "string")
          r.push(new J(n, n));
        else if (n instanceof J)
          r.push(n);
        else if (typeof n == "object") {
          const { key: M, label: w, sortable: x, sortFn: j } = n;
          r.push(new J(M, w, x, j));
        }
        return r;
      }, p);
    });
    function d(s) {
      const p = i.value.findIndex((r) => r.key === s.key);
      return p < 0 ? "" : p + 1;
    }
    function g(s) {
      const p = i.value.findIndex((n) => n.key === s.key);
      if (p < 0)
        return "fas fa-sort";
      const r = i.value[p];
      return r.direction === V.ASC ? "fas fa-sort-up" : r.direction === V.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function v(s) {
      const { key: p } = s, r = i.value.findIndex((n) => n.key === p);
      if (r < 0) {
        const n = new ct(p, V.ASC, s.sortFn);
        i.value.push(n);
      } else {
        const n = i.value[r], f = n.direction;
        f === V.ASC ? n.direction = V.DESC : f === V.DESC && i.value.splice(r, 1);
      }
      t("sort", i.value, oe);
    }
    function k(s, p, r) {
      t("onMouseOverRow", s, p, r);
    }
    function C(s, p, r, n) {
      t("onMouseOverRow", s, p, r, n);
    }
    let T = D(null);
    return Z(() => {
      T.value = X();
    }), (s, p) => (_(), b("table", F({ ...s.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (_(!0), b(R, null, z(y(c), (r) => (_(), b("th", {
          key: `thead-${r.key}`,
          class: S({ sortable: r.sortable }),
          onClick: (n) => r.sortable && v(r)
        }, [
          l("span", ft, [
            $(s.$slots, `head(${r.key})`, {
              field: r,
              data: y(T),
              value: r.label
            }, () => [
              Y(H(r.label), 1)
            ], !0),
            r.sortable ? (_(), b("span", vt, [
              l("span", pt, H(d(r)), 1),
              l("span", ht, [
                l("i", {
                  class: S(g(r))
                }, null, 2)
              ])
            ])) : K("", !0)
          ])
        ], 10, dt))), 128))
      ]),
      l("tbody", null, [
        (_(!0), b(R, null, z(y(a), (r, n) => (_(), b(R, {
          key: `trow-${(r == null ? void 0 : r.id) ?? n}`
        }, [
          $(s.$slots, "row", {
            item: r,
            index: n,
            colspan: y(c).length
          }, void 0, !0),
          l("tr", {
            onMouseover: (f) => k(f, r, n)
          }, [
            (_(!0), b(R, null, z(y(c), (f) => (_(), b("td", {
              key: `tcell-${f.key + ((r == null ? void 0 : r.id) ?? n)}`,
              class: S({ [`tcell-${f == null ? void 0 : f.key}`]: !0 })
            }, [
              $(s.$slots, `cell(${f == null ? void 0 : f.key})`, {
                data: y(T),
                item: r,
                field: f,
                value: r[f == null ? void 0 : f.key],
                onMouseover: (M) => C(M, r, n, f)
              }, () => [
                Y(H(r[f == null ? void 0 : f.key]), 1)
              ], !0)
            ], 2))), 128))
          ], 40, _t)
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        $(s.$slots, "footer", { data: y(T) }, void 0, !0)
      ]),
      e.showEmpty && y(a).length === 0 ? (_(), b("tr", mt, [
        l("td", {
          colspan: y(c).length
        }, [
          $(s.$slots, "empty", {
            items: y(a),
            data: y(T),
            fields: y(c)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, bt)
          ], !0)
        ], 8, yt)
      ])) : K("", !0)
    ], 16));
  }
});
const $t = /* @__PURE__ */ I(kt, [["__scopeId", "data-v-81b88e08"]]);
var ie = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ie || {});
const wt = /* @__PURE__ */ O({
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
    size: { default: P.STANDARD }
  },
  setup(e) {
    const t = e, { variant: o, centered: u, dropup: i, dropend: m, dropstart: h } = E(t), a = D(!1), c = L(() => {
      const s = [];
      return o != null && o.value && s.push(`btn-${o.value}`), t.size && s.push(`btn-${t.size}`), s;
    }), d = L(() => {
      const s = [];
      return u != null && u.value && s.push("dropdown-center"), i != null && i.value && s.push("dropup"), h != null && h.value && s.push("dropstart"), !(h != null && h.value) && (m != null && m.value) && s.push("dropend"), s.length === 0 ? s.push("dropdown") : s.unshift("btn-group"), s;
    });
    function g() {
      a.value = !0;
    }
    function v() {
      a.value = !1;
    }
    const k = "data-prevent-close";
    let C;
    function T(s) {
      const { currentTarget: p } = s;
      a.value ? v() : g(), a.value && (C = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (r) => {
          const { target: n } = r;
          n != null && n.closest(`[${k}],[${k}=true]`) || n === p || (v(), C.abort());
        }, { signal: C.signal });
      }, 0));
    }
    return (s, p) => (_(), b("div", {
      class: S(y(d))
    }, [
      l("button", {
        class: S(["btn dropdown-toggle", y(c)]),
        type: "button",
        "aria-expanded": "false",
        onClick: T
      }, [
        $(s.$slots, "button", {}, () => [
          Y(H(e.text), 1)
        ])
      ], 2),
      l("ul", {
        class: S(["dropdown-menu", { show: a.value }])
      }, [
        $(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ct = ["data-prevent-close"], gt = ["onClick"], xt = /* @__PURE__ */ O({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, { preventClose: u } = E(o);
    function i() {
      const m = X();
      t("click", m);
    }
    return (m, h) => (_(), b("li", {
      "data-prevent-close": y(u) ? "" : null
    }, [
      l("a", {
        class: S(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: ee(i, ["prevent"])
      }, [
        $(m.$slots, "default")
      ], 10, gt)
    ], 8, Ct));
  }
}), Tt = {}, St = { "data-prevent-close": "" }, Mt = { class: "dropdown-header" };
function Lt(e, t) {
  return _(), b("li", St, [
    l("h6", Mt, [
      $(e.$slots, "default")
    ])
  ]);
}
const Bt = /* @__PURE__ */ I(Tt, [["render", Lt]]), At = {}, Ht = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Dt = [
  Ht
];
function Ot(e, t) {
  return _(), b("li", null, Dt);
}
const Rt = /* @__PURE__ */ I(At, [["render", Ot]]), Et = {
  mounted(e, t, o, u) {
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
const zt = ["onClick"], Pt = { class: "drawer-content" }, Vt = { class: "drawer-header" }, Nt = ["innerHTML"], Ft = { class: "drawer-body" }, It = ["innerHTML"], jt = { class: "drawer-footer" }, Gt = ["innerHTML"], Kt = ["innerHTML"], Ut = /* @__PURE__ */ O({
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
    size: { default: P.STANDARD },
    btnSize: { default: P.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: u,
      keyboard: i,
      focus: m,
      size: h,
      btnSize: a
    } = E(o), c = L(() => W(h.value, "drawer-")), d = L(() => W(a.value, "btn-")), g = D(), v = D(!1), k = X();
    let C;
    async function T() {
      return v.value === !0 ? void 0 : new Promise((j, q) => {
        v.value = !0, C = j;
      });
    }
    function s(x = !0) {
      v.value = !1, typeof C == "function" && C(x);
    }
    function p() {
      v.value === !0 ? T() : s(!1);
    }
    function r(x) {
      (u == null ? void 0 : u.value) !== "static" && s(!1);
    }
    function n() {
      s(!1);
    }
    function f() {
      s(!1);
    }
    function M() {
      s(!0);
    }
    function w() {
      v.value === !0 ? Q.add(k) : Q.delete(k);
    }
    return t({
      show: T,
      hide: s,
      toggle: p
    }), (x, j) => (_(), N(we, {
      onBeforeEnter: w,
      onAfterLeave: w
    }, {
      default: U(() => [
        v.value ? (_(), b("div", F({
          key: 0,
          ref_key: "drawerElement",
          ref: g,
          class: "drawer",
          tabindex: "-1"
        }, { ...x.$attrs }, {
          onClick: ee(r, ["self"])
        }), [
          l("div", {
            class: S(["drawer-dialog", y(c)])
          }, [
            l("div", Pt, [
              l("div", Vt, [
                $(x.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Nt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: n
                })
              ]),
              l("div", Ft, [
                $(x.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, It)
                ], !0)
              ]),
              l("div", jt, [
                $(x.$slots, "footer", {}, () => [
                  e.okOnly ? K("", !0) : (_(), b("button", {
                    key: 0,
                    type: "button",
                    class: S(["ms-auto btn btn-secondary", y(d)]),
                    onClick: f
                  }, [
                    $(x.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, Gt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: S(["btn btn-primary", y(d)]),
                    onClick: M
                  }, [
                    $(x.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, Kt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, zt)) : K("", !0)
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
      const u = le(Oe).mount(t);
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
  e.component(`${A}-drawer`, Yt), e.component(`${A}-modal`, ue), e.component(`${A}-pagination`, ot), e.component(`${A}-pagination-dropdown`, rt), e.component(`${A}-pagination-select`, it), e.component(`${A}-dropdown`, wt), e.component(`${A}-dropdown-item`, xt), e.component(`${A}-dropdown-header`, Bt), e.component(`${A}-dropdown-divider`, Rt), e.component(`${A}-table`, $t), e.component(`${A}-toast`, re);
}
function Xt(e) {
  e.directive("tooltip", Et);
}
const tn = {
  install(e) {
    Wt(e), Xt(e);
    const t = ve.getComponent();
    e.provide(ce, t);
    const o = fe.getComponent();
    e.provide(de, o);
  }
};
export {
  tn as BootstrapVue,
  wt as Dropdown,
  Rt as DropdownDivider,
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
  Oe as Toaster,
  Et as tooltip,
  en as useModal,
  Zt as useToaster
};
