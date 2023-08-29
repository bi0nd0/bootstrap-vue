var _e = Object.defineProperty;
var he = (e, t, n) => t in e ? _e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var B = (e, t, n) => (he(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as O, toRefs as z, ref as A, watch as me, onMounted as Q, openBlock as h, createElementBlock as b, normalizeClass as T, renderSlot as w, createElementVNode as l, toDisplayString as H, createBlock as F, Teleport as oe, Fragment as E, renderList as R, mergeProps as I, computed as L, getCurrentInstance as Z, withModifiers as se, unref as y, createCommentVNode as G, createVNode as ye, watchEffect as be, resolveComponent as ee, withCtx as K, createTextVNode as U, withDirectives as ae, isRef as ke, vModelSelect as $e, resolveDirective as Ce, Transition as we, inject as le, createApp as re } from "vue";
import { Toast as ge, Modal as xe, Tooltip as Se } from "bootstrap";
const Te = { class: "toast-header" }, Me = ["textContent"], Le = ["textContent"], Be = { class: "toast-body" }, Ae = ["textContent"], ie = /* @__PURE__ */ O({
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
    const r = e, { visible: i, animation: v, autohide: m, delay: o } = z(r), c = A(), f = A();
    me(i, (g) => {
      a();
    }, { immediate: !0 });
    function x() {
      c.value.show();
    }
    function p() {
      c.value.hide();
    }
    function k() {
      c.value.dispose();
    }
    function $() {
      c.value.isShown();
    }
    function _() {
      c.value.getOrCreateInstance();
    }
    function d() {
      c.value.getInstance();
    }
    function a() {
      c.value && (i.value === !0 ? x() : p());
    }
    function u() {
      n("hide", c.value);
    }
    function s() {
      n("hidden", c.value);
    }
    function C() {
      n("show", c.value);
    }
    async function M() {
      n("shown", c.value);
    }
    return t({ show: x, hide: p, dispose: k, isShown: $, getOrCreateInstance: _, getInstance: d }), Q(() => {
      f.value.addEventListener("hide.bs.toast", u), f.value.addEventListener("hidden.bs.toast", s), f.value.addEventListener("show.bs.toast", C), f.value.addEventListener("shown.bs.toast", M), c.value = new ge(f.value, {
        animation: v.value,
        autohide: m.value,
        delay: o.value
      }), a();
    }), (g, S) => (h(), b("div", {
      ref_key: "toastRef",
      ref: f,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      w(g.$slots, "header", {}, () => [
        l("div", Te, [
          w(g.$slots, "title", {}, () => [
            l("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, Me)
          ]),
          w(g.$slots, "subtitle", {}, () => [
            l("small", {
              textContent: H(e.subtitle)
            }, null, 8, Le)
          ]),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ]),
      w(g.$slots, "body", {}, () => [
        l("div", Be, [
          w(g.$slots, "default", {}, () => [
            l("span", {
              textContent: H(e.body)
            }, null, 8, Ae)
          ])
        ])
      ])
    ], 2));
  }
});
function De() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (n == "x" ? r : r & 3 | 8).toString(16);
  });
}
const He = { id: "toast-wrapper" };
let te;
const Oe = /* @__PURE__ */ O({
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
    }, r = A(/* @__PURE__ */ new Map());
    te = (v, m = "top right") => {
      const o = De(), c = { ...n, ...v, id: o };
      let f = r.value.get(m);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), r.value.set(m, f);
    };
    function i(v, m) {
      const o = r.value.get(v);
      o == null || o.delete(m);
    }
    return t({ toast: te }), (v, m) => (h(), F(oe, { to: "body" }, [
      l("div", He, [
        (h(!0), b(E, null, R(r.value, ([o, c]) => (h(), b("div", {
          key: o,
          class: T(["toast-group", `${o}`])
        }, [
          (h(!0), b(E, null, R(c, (f, x) => (h(), F(ie, I({
            key: f.id
          }, f, {
            onHidden: (p) => i(o, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const N = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, Ee = /* @__PURE__ */ N(Oe, [["__scopeId", "data-v-0580e23e"]]);
var P = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(P || {});
const Y = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(P).includes(n) || n == "" ? "" : `${t}${n}`;
}, ze = ["onClick"], Re = { class: "modal-content" }, Pe = { class: "modal-header" }, Ve = ["innerHTML"], Ne = { class: "modal-body" }, Fe = ["innerHTML"], Ie = { class: "modal-footer" }, je = ["innerHTML"], Ge = ["innerHTML"];
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
    size: { default: P.STANDARD },
    btnSize: { default: P.SMALL }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: r,
      keyboard: i,
      focus: v,
      disableOutsideClick: m,
      size: o,
      btnSize: c
    } = z(n), f = L(() => Y(o.value, "modal-")), x = L(() => Y(c.value, "btn-")), p = A();
    let k;
    Z();
    let $;
    function _() {
      return new Promise((S, W) => {
        const X = j.getLast();
        X && X.hide(), j.addToStack(k), k == null || k.show(), $ = S;
      });
    }
    function d(g = !0) {
      j.removeFromStack(k), k == null || k.hide();
      const S = j.getLast();
      S && S.show(), typeof $ == "function" && $(g);
    }
    function a() {
      k == null || k.toggle();
    }
    Q(() => {
      k = new xe(p.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: i.value,
        focus: v.value
      });
    });
    function u(g) {
      (r == null ? void 0 : r.value) !== "static" && d(!1);
    }
    function s() {
      d(!1);
    }
    function C() {
      d(!1);
    }
    function M() {
      d(!0);
    }
    return t({
      show: _,
      hide: d,
      toggle: a
    }), (g, S) => (h(), b("div", I({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...g.$attrs }, {
      onClick: se(u, ["self"])
    }), [
      l("div", {
        class: T(["modal-dialog", y(f)])
      }, [
        l("div", Re, [
          l("div", Pe, [
            w(g.$slots, "header", {}, () => [
              l("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Ve)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: s
            })
          ]),
          l("div", Ne, [
            w(g.$slots, "default", {}, () => [
              l("span", { innerHTML: e.body }, null, 8, Fe)
            ])
          ]),
          l("div", Ie, [
            w(g.$slots, "footer", {}, () => [
              e.okOnly ? G("", !0) : (h(), b("button", {
                key: 0,
                type: "button",
                class: T(["btn btn-secondary", y(x)]),
                onClick: C
              }, [
                w(g.$slots, "button-cancel", {}, () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, je)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: T(["btn btn-primary", y(x)]),
                onClick: M
              }, [
                w(g.$slots, "button-ok", {}, () => [
                  l("span", { innerHTML: e.textOk }, null, 8, Ge)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, ze));
  }
}), Ke = /* @__PURE__ */ O({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = A(void 0), r = A({});
    function i(m = {}) {
      var o;
      return m.okOnly = !1, r.value = m, (o = n.value) == null ? void 0 : o.show();
    }
    function v(m = {}) {
      var o;
      return m.okOnly = !0, r.value = m, (o = n.value) == null ? void 0 : o.show();
    }
    return t({ confirm: i, alert: v }), (m, o) => (h(), F(oe, { to: "body" }, [
      ye(ue, I({
        ref_key: "modalRef",
        ref: n
      }, { ...r.value }), null, 16)
    ]));
  }
}), Ue = { "data-first": "" }, Ye = ["disabled", "innerHTML"], We = { "data-prev": "" }, Xe = ["disabled", "innerHTML"], qe = { key: 0 }, Je = ["innerHTML"], Qe = ["onClick"], Ze = { "data-next": "" }, et = ["disabled", "innerHTML"], tt = { "data-last": "" }, nt = ["disabled", "innerHTML"], ot = /* @__PURE__ */ O({
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
    const n = e;
    function r(s, C = 0) {
      return [...Array(s).keys()].map((M) => M + C);
    }
    const { modelValue: i, maxVisibleButtons: v, hideEllipsis: m } = z(n), o = Math.floor(v.value / 2), c = L(() => {
      let s = v.value, C = i.value <= o ? 1 : i.value - o;
      return i.value >= p.value - o && (C = p.value - s + 1), C < 1 && (C = 1), p.value < s && (s = p.value), r(s, C);
    }), f = L(() => i.value <= 1), x = L(() => i.value >= p.value), p = L(() => {
      const { perPage: s, totalItems: C } = n;
      return Math.ceil(C / s);
    });
    be(() => {
      p.value > 0 && i.value > p.value && t("update:modelValue", p.value);
    });
    function k(s) {
      const C = v.value - 1;
      return !(m.value === !0 || s === 0 && i.value - o - 1 <= 0 || s === C && i.value + o >= p.value || s > 0 && s < C);
    }
    function $(s) {
      s < 1 && (s = 1), s > p.value && (s = p.value), t("update:modelValue", s);
    }
    function _() {
      t("update:modelValue", 1);
    }
    function d() {
      t("update:modelValue", p.value);
    }
    function a() {
      let s = i.value - 1;
      s < 1 && (s = 1), t("update:modelValue", s);
    }
    function u() {
      let s = i.value + 1;
      s > p.value && (s = p.value), t("update:modelValue", s);
    }
    return (s, C) => (h(), b("ul", {
      class: T(["pagination", e.size])
    }, [
      l("li", Ue, [
        l("button", {
          class: "",
          disabled: y(f),
          innerHTML: e.firstText,
          onClick: _
        }, null, 8, Ye)
      ]),
      l("li", We, [
        l("button", {
          class: "",
          disabled: y(f),
          innerHTML: e.prevText,
          onClick: a
        }, null, 8, Xe)
      ]),
      (h(!0), b(E, null, R(y(c), (M, g) => (h(), b(E, null, [
        k(g) ? (h(), b("li", qe, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Je)
        ])) : (h(), b("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === M })
        }, [
          l("button", {
            class: "",
            onClick: (S) => $(M)
          }, H(M), 9, Qe)
        ], 2))
      ], 64))), 256)),
      l("li", Ze, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.nextText,
          onClick: u
        }, null, 8, et)
      ]),
      l("li", tt, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.lastText,
          onClick: d
        }, null, 8, nt)
      ])
    ], 2));
  }
});
const st = /* @__PURE__ */ N(ot, [["__scopeId", "data-v-2bfd7085"]]), at = { class: "d-inline" }, lt = /* @__PURE__ */ l("span", null, "Per page: ", -1), rt = { class: "fw-bold" }, it = /* @__PURE__ */ O({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: r } = z(n), i = L({
      get: () => n.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    return (v, m) => {
      const o = ee("b-dropdown-item"), c = ee("b-dropdown");
      return h(), F(c, I({
        variant: "outline-primary",
        size: "sm"
      }, { ...v.$attrs }), {
        button: K(() => [
          l("div", at, [
            w(v.$slots, "default", { selected: y(i) }, () => [
              lt,
              l("span", rt, H(y(i)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (h(!0), b(E, null, R(y(r), (f, x) => (h(), F(o, {
            key: f,
            onClick: (p) => i.value = f,
            active: f === e.modelValue
          }, {
            default: K(() => [
              U(H(f), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), ut = ["value"], ct = /* @__PURE__ */ O({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: r } = z(n), i = L({
      get: () => n.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    return (v, m) => ae((h(), b("select", {
      "onUpdate:modelValue": m[0] || (m[0] = (o) => ke(i) ? i.value = o : null)
    }, [
      (h(!0), b(E, null, R(y(r), (o, c) => (h(), b("option", {
        key: o,
        value: o
      }, H(o), 9, ut))), 128))
    ], 512)), [
      [$e, y(i)]
    ]);
  }
});
var V = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(V || {});
class dt {
  constructor(t, n = "ASC", r) {
    B(this, "key");
    B(this, "direction");
    B(this, "sortFn");
    this.key = t, this.direction = n, this.sortFn = r;
  }
}
const ne = (e, t) => {
  const n = (o, c) => {
    let f = typeof o, x = typeof c;
    return f == "number" && f == x;
  }, r = (o, c) => o - c, i = (o, c) => (o = o ?? "", c = c ?? "", o.localeCompare(c)), v = (o, c) => n(o, c) ? r : i, m = [...t];
  return m.sort((o, c) => {
    let f = 0;
    for (let x of e) {
      let { key: p, direction: k, sortFn: $ } = x, _ = k === "ASC" ? 1 : -1, d = o[p], a = c[p];
      if ($ = typeof $ == "function" ? $ : v(d, a), f = $(d, a, o, c, t, x, _) * _, f !== 0)
        return f;
    }
    return f;
  }), m;
}, ft = ["onClick"], vt = { class: "th-wrapper" }, pt = {
  key: 0,
  "data-sort-indicator": ""
}, _t = { class: "sort-index" }, ht = { class: "sort-direction" }, mt = ["onMouseover"], yt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, bt = ["colspan"], kt = ["innerHTML"];
class q {
  constructor(t = "", n = "", r = !1, i) {
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
    this.key = t, this.label = n, this.sortable = r, this.sortFn = i;
  }
}
const $t = /* @__PURE__ */ O({
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
    const n = e, r = (_) => {
      let d = [];
      for (const a of _)
        d = d.concat(Object.keys(a));
      return d = d.filter((a, u) => d.indexOf(a) == u), d;
    }, i = A([]), { fields: v, items: m } = z(n), o = L(() => {
      if (n.externalSort || i.value.length == 0)
        return n.items;
      const _ = [...n.items];
      return ne(i.value, _);
    }), c = L(() => {
      let _ = v.value, d = [];
      return _.length === 0 && (_ = r([...m.value])), _.reduce((a, u, s) => {
        if (typeof u == "string")
          a.push(new q(u, u));
        else if (u instanceof q)
          a.push(u);
        else if (typeof u == "object") {
          const { key: C, label: M, sortable: g, sortFn: S } = u;
          a.push(new q(C, M, g, S));
        }
        return a;
      }, d);
    });
    function f(_) {
      const d = i.value.findIndex((a) => a.key === _.key);
      return d < 0 ? "" : d + 1;
    }
    function x(_) {
      const d = i.value.findIndex((u) => u.key === _.key);
      if (d < 0)
        return "fas fa-sort";
      const a = i.value[d];
      return a.direction === V.ASC ? "fas fa-sort-up" : a.direction === V.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(_) {
      const { key: d } = _, a = i.value.findIndex((u) => u.key === d);
      if (a < 0) {
        const u = new dt(d, V.ASC, _.sortFn);
        i.value.push(u);
      } else {
        const u = i.value[a], s = u.direction;
        s === V.ASC ? u.direction = V.DESC : s === V.DESC && i.value.splice(a, 1);
      }
      t("sort", i.value, ne);
    }
    function k(_, d, a, u) {
      t("onMouseOverCell", _, d, a, u);
    }
    let $ = A(null);
    return Q(() => {
      $.value = Z();
    }), (_, d) => (h(), b("table", I({ ..._.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (h(!0), b(E, null, R(y(c), (a) => (h(), b("th", {
          key: `thead-${a.key}`,
          class: T({ sortable: a.sortable }),
          onClick: (u) => a.sortable && p(a)
        }, [
          l("span", vt, [
            w(_.$slots, `head(${a.key})`, {
              field: a,
              data: y($),
              value: a.label
            }, () => [
              U(H(a.label), 1)
            ], !0),
            a.sortable ? (h(), b("span", pt, [
              l("span", _t, H(f(a)), 1),
              l("span", ht, [
                l("i", {
                  class: T(x(a))
                }, null, 2)
              ])
            ])) : G("", !0)
          ])
        ], 10, ft))), 128))
      ]),
      l("tbody", null, [
        (h(!0), b(E, null, R(y(o), (a, u) => (h(), b(E, {
          key: `trow-${(a == null ? void 0 : a.id) ?? u}`
        }, [
          w(_.$slots, "row", {
            item: a,
            index: u,
            colspan: y(c).length
          }, void 0, !0),
          l("tr", null, [
            (h(!0), b(E, null, R(y(c), (s) => (h(), b("td", {
              key: `tcell-${s.key + ((a == null ? void 0 : a.id) ?? u)}`,
              class: T({ [`tcell-${s == null ? void 0 : s.key}`]: !0 }),
              onMouseover: (C) => k(C, a, u, s)
            }, [
              w(_.$slots, `cell(${s == null ? void 0 : s.key})`, {
                data: y($),
                item: a,
                field: s,
                value: a[s == null ? void 0 : s.key]
              }, () => [
                U(H(a[s == null ? void 0 : s.key]), 1)
              ], !0)
            ], 42, mt))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        w(_.$slots, "footer", { data: y($) }, void 0, !0)
      ]),
      e.showEmpty && y(o).length === 0 ? (h(), b("tr", yt, [
        l("td", {
          colspan: y(c).length
        }, [
          w(_.$slots, "empty", {
            items: y(o),
            data: y($),
            fields: y(c)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, kt)
          ], !0)
        ], 8, bt)
      ])) : G("", !0)
    ], 16));
  }
});
const Ct = /* @__PURE__ */ N($t, [["__scopeId", "data-v-7828e531"]]);
var ce = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ce || {});
const wt = { class: "d-inline-block" }, gt = ["disabled"], xt = /* @__PURE__ */ O({
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
    size: { default: P.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = A(), { variant: r, centered: i, dropup: v, dropend: m, dropstart: o } = z(t), c = A(!1), f = L(() => {
      const u = [];
      return r != null && r.value && u.push(`btn-${r.value}`), t.size && u.push(`btn-${t.size}`), u;
    }), x = L(() => {
      const u = [];
      return i != null && i.value && u.push("dropdown-center"), v != null && v.value && u.push("dropup"), o != null && o.value && u.push("dropstart"), !(o != null && o.value) && (m != null && m.value) && u.push("dropend"), u.length === 0 ? u.push("dropdown") : u.unshift("btn-group"), u;
    });
    function p() {
      c.value = !0;
    }
    function k() {
      c.value = !1;
    }
    const $ = "data-prevent-close";
    function _(u) {
      c.value ? k() : p();
    }
    function d(u) {
      const { target: s } = u;
      (s == null ? void 0 : s.closest(`[${$}],[${$}=true]`)) || k();
    }
    function a() {
      c.value && k();
    }
    return (u, s) => {
      const C = Ce("click-outside");
      return h(), b("div", {
        ref_key: "dropDownRef",
        ref: n,
        class: T(y(x))
      }, [
        ae((h(), b("div", wt, [
          l("button", {
            class: T(["btn dropdown-toggle", y(f)]),
            type: "button",
            "aria-expanded": "false",
            onClick: _,
            disabled: e.disabled
          }, [
            w(u.$slots, "button", {}, () => [
              U(H(e.text), 1)
            ], !0)
          ], 10, gt),
          l("ul", {
            class: T(["dropdown-menu", { show: c.value }]),
            onClick: d
          }, [
            w(u.$slots, "default", {}, void 0, !0)
          ], 2)
        ])), [
          [C, a]
        ])
      ], 2);
    };
  }
});
const St = /* @__PURE__ */ N(xt, [["__scopeId", "data-v-7cb957c7"]]), Tt = ["data-prevent-close"], Mt = /* @__PURE__ */ O({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = z(t);
    return (r, i) => (h(), b("li", {
      "data-prevent-close": y(n) ? "" : null
    }, [
      l("a", {
        class: T(["dropdown-item", { active: e.active }]),
        role: "button",
        tabindex: "0"
      }, [
        w(r.$slots, "default")
      ], 2)
    ], 8, Tt));
  }
}), Lt = {}, Bt = { "data-prevent-close": "" }, At = { class: "dropdown-header" };
function Dt(e, t) {
  return h(), b("li", Bt, [
    l("h6", At, [
      w(e.$slots, "default")
    ])
  ]);
}
const Ht = /* @__PURE__ */ N(Lt, [["render", Dt]]), Ot = {}, Et = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), zt = [
  Et
];
function Rt(e, t) {
  return h(), b("li", null, zt);
}
const Pt = /* @__PURE__ */ N(Ot, [["render", Rt]]), Vt = {
  mounted(e, t, n, r) {
    new Se(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Nt = (e, t) => {
  function n(v, m) {
    for (; v !== null; ) {
      if (v === m)
        return !0;
      v = v.parentNode;
    }
    return !1;
  }
  const r = new AbortController();
  function i(v, m) {
    document.addEventListener("click", function(o) {
      const c = o.target;
      v && (n(c, v) || m());
    }, { signal: r.signal });
  }
  return i(e, t), r;
}, Ft = {
  mounted(e, t, n, r) {
    const i = t.value;
    Nt(e, i);
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
const It = ["onClick"], jt = { class: "drawer-content" }, Gt = { class: "drawer-header" }, Kt = ["innerHTML"], Ut = { class: "drawer-body" }, Yt = ["innerHTML"], Wt = { class: "drawer-footer" }, Xt = ["innerHTML"], qt = ["innerHTML"], Jt = /* @__PURE__ */ O({
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
    const n = e, {
      backdrop: r,
      keyboard: i,
      focus: v,
      size: m,
      btnSize: o
    } = z(n), c = L(() => Y(m.value, "drawer-")), f = L(() => Y(o.value, "btn-")), x = A(), p = A(!1), k = Z();
    let $;
    async function _() {
      return p.value === !0 ? void 0 : new Promise((W, X) => {
        p.value = !0, $ = W;
      });
    }
    function d(S = !0) {
      p.value = !1, typeof $ == "function" && $(S);
    }
    function a() {
      p.value === !0 ? _() : d(!1);
    }
    function u(S) {
      (r == null ? void 0 : r.value) !== "static" && d(!1);
    }
    function s() {
      d(!1);
    }
    function C() {
      d(!1);
    }
    function M() {
      d(!0);
    }
    function g() {
      p.value === !0 ? J.add(k) : J.delete(k);
    }
    return t({
      show: _,
      hide: d,
      toggle: a
    }), (S, W) => (h(), F(we, {
      onBeforeEnter: g,
      onAfterLeave: g
    }, {
      default: K(() => [
        p.value ? (h(), b("div", I({
          key: 0,
          ref_key: "drawerElement",
          ref: x,
          class: "drawer",
          tabindex: "-1"
        }, { ...S.$attrs }, {
          onClick: se(u, ["self"])
        }), [
          l("div", {
            class: T(["drawer-dialog", y(c)])
          }, [
            l("div", jt, [
              l("div", Gt, [
                w(S.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Kt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: s
                })
              ]),
              l("div", Ut, [
                w(S.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, Yt)
                ], !0)
              ]),
              l("div", Wt, [
                w(S.$slots, "footer", {}, () => [
                  e.okOnly ? G("", !0) : (h(), b("button", {
                    key: 0,
                    type: "button",
                    class: T(["ms-auto btn btn-secondary", y(f)]),
                    onClick: C
                  }, [
                    w(S.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, Xt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: T(["btn btn-primary", y(f)]),
                    onClick: M
                  }, [
                    w(S.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, qt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, It)) : G("", !0)
      ]),
      _: 3
    }));
  }
});
const Qt = /* @__PURE__ */ N(Jt, [["__scopeId", "data-v-2e49e8cb"]]), D = "b", de = "$toaster", fe = "$modalManager";
class ve {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = re(Ke).mount(t);
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
      const r = re(Ee).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
B(pe, "component");
function sn() {
  return le(de);
}
function an() {
  return le(fe);
}
function Zt(e) {
  e.component(`${D}-drawer`, Qt), e.component(`${D}-modal`, ue), e.component(`${D}-pagination`, st), e.component(`${D}-pagination-dropdown`, it), e.component(`${D}-pagination-select`, ct), e.component(`${D}-dropdown`, St), e.component(`${D}-dropdown-item`, Mt), e.component(`${D}-dropdown-header`, Ht), e.component(`${D}-dropdown-divider`, Pt), e.component(`${D}-table`, Ct), e.component(`${D}-toast`, ie);
}
function en(e) {
  e.directive("tooltip", Vt), e.directive("click-outside", Ft);
}
const ln = {
  install(e) {
    Zt(e), en(e);
    const t = pe.getComponent();
    e.provide(de, t);
    const n = ve.getComponent();
    e.provide(fe, n);
  }
};
export {
  ln as BootstrapVue,
  St as Dropdown,
  Pt as DropdownDivider,
  Ht as DropdownHeader,
  Mt as DropdownItem,
  ue as Modal,
  Ke as ModalManager,
  it as PageSizeDropdown,
  ct as PageSizeSelect,
  st as Pagination,
  Ct as Table,
  q as TableFieldDefinition,
  ie as Toast,
  Ee as Toaster,
  Ft as clickOutside,
  Vt as tooltip,
  an as useModal,
  sn as useToaster
};
