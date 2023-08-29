var _e = Object.defineProperty;
var me = (e, t, n) => t in e ? _e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var D = (e, t, n) => (me(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as E, toRefs as z, ref as B, watch as be, onMounted as q, openBlock as _, createElementBlock as C, normalizeClass as T, renderSlot as M, createElementVNode as a, toDisplayString as O, createBlock as j, Teleport as se, Fragment as R, renderList as P, mergeProps as G, computed as L, getCurrentInstance as Z, withModifiers as le, unref as $, createCommentVNode as U, createVNode as ye, watchEffect as ke, resolveComponent as te, withCtx as Y, createTextVNode as W, withDirectives as ae, isRef as $e, vModelSelect as Ce, resolveDirective as ge, Transition as we, inject as re, createApp as ie } from "vue";
import { Toast as xe, Modal as Me, Tooltip as Se } from "bootstrap";
const Te = { class: "toast-header" }, Le = ["textContent"], Be = ["textContent"], Ae = { class: "toast-body" }, De = ["textContent"], ue = /* @__PURE__ */ E({
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
    const r = e, { visible: i, animation: v, autohide: m, delay: o } = z(r), u = B(), f = B();
    be(i, (y) => {
      l();
    }, { immediate: !0 });
    function S() {
      u.value.show();
    }
    function p() {
      u.value.hide();
    }
    function g() {
      u.value.dispose();
    }
    function x() {
      u.value.isShown();
    }
    function h() {
      u.value.getOrCreateInstance();
    }
    function d() {
      u.value.getInstance();
    }
    function l() {
      u.value && (i.value === !0 ? S() : p());
    }
    function b() {
      n("hide", u.value);
    }
    function s() {
      n("hidden", u.value);
    }
    function c() {
      n("show", u.value);
    }
    async function w() {
      n("shown", u.value);
    }
    return t({ show: S, hide: p, dispose: g, isShown: x, getOrCreateInstance: h, getInstance: d }), q(() => {
      f.value.addEventListener("hide.bs.toast", b), f.value.addEventListener("hidden.bs.toast", s), f.value.addEventListener("show.bs.toast", c), f.value.addEventListener("shown.bs.toast", w), u.value = new xe(f.value, {
        animation: v.value,
        autohide: m.value,
        delay: o.value
      }), l();
    }), (y, k) => (_(), C("div", {
      ref_key: "toastRef",
      ref: f,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      M(y.$slots, "header", {}, () => [
        a("div", Te, [
          M(y.$slots, "title", {}, () => [
            a("strong", {
              class: "me-auto",
              textContent: O(e.title)
            }, null, 8, Le)
          ]),
          M(y.$slots, "subtitle", {}, () => [
            a("small", {
              textContent: O(e.subtitle)
            }, null, 8, Be)
          ]),
          a("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ]),
      M(y.$slots, "body", {}, () => [
        a("div", Ae, [
          M(y.$slots, "default", {}, () => [
            a("span", {
              textContent: O(e.body)
            }, null, 8, De)
          ])
        ])
      ])
    ], 2));
  }
});
function He() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (n == "x" ? r : r & 3 | 8).toString(16);
  });
}
const Oe = { id: "toast-wrapper" };
let ne;
const Ee = /* @__PURE__ */ E({
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
    }, r = B(/* @__PURE__ */ new Map());
    ne = (v, m = "top right") => {
      const o = He(), u = { ...n, ...v, id: o };
      let f = r.value.get(m);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(u), r.value.set(m, f);
    };
    function i(v, m) {
      const o = r.value.get(v);
      o == null || o.delete(m);
    }
    return t({ toast: ne }), (v, m) => (_(), j(se, { to: "body" }, [
      a("div", Oe, [
        (_(!0), C(R, null, P(r.value, ([o, u]) => (_(), C("div", {
          key: o,
          class: T(["toast-group", `${o}`])
        }, [
          (_(!0), C(R, null, P(u, (f, S) => (_(), j(ue, G({
            key: f.id
          }, f, {
            onHidden: (p) => i(o, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, Re = /* @__PURE__ */ F(Ee, [["__scopeId", "data-v-0580e23e"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const X = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(V).includes(n) || n == "" ? "" : `${t}${n}`;
}, ze = ["onClick"], Pe = { class: "modal-content" }, Ve = { class: "modal-header" }, Ie = ["innerHTML"], Ne = { class: "modal-body" }, Fe = ["innerHTML"], je = { class: "modal-footer" }, Ge = ["innerHTML"], Ke = ["innerHTML"];
class K {
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
D(K, "modalStack", new Array());
const ce = /* @__PURE__ */ E({
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
    btnSize: { default: V.SMALL }
  },
  setup(e, { expose: t }) {
    const n = e, {
      backdrop: r,
      keyboard: i,
      focus: v,
      disableOutsideClick: m,
      size: o,
      btnSize: u
    } = z(n), f = L(() => X(o.value, "modal-")), S = L(() => X(u.value, "btn-")), p = B();
    let g;
    Z();
    let x;
    function h() {
      return new Promise((k, A) => {
        const I = K.getLast();
        I && I.hide(), K.addToStack(g), g == null || g.show(), x = k;
      });
    }
    function d(y = !0) {
      K.removeFromStack(g), g == null || g.hide();
      const k = K.getLast();
      k && k.show(), typeof x == "function" && x(y);
    }
    function l() {
      g == null || g.toggle();
    }
    q(() => {
      g = new Me(p.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: i.value,
        focus: v.value
      });
    });
    function b(y) {
      (r == null ? void 0 : r.value) !== "static" && d(!1);
    }
    function s() {
      d(!1);
    }
    function c() {
      d(!1);
    }
    function w() {
      d(!0);
    }
    return t({
      show: h,
      hide: d,
      toggle: l
    }), (y, k) => (_(), C("div", G({
      ref_key: "modalElement",
      ref: p,
      class: "modal fade",
      tabindex: "-1"
    }, { ...y.$attrs }, {
      onClick: le(b, ["self"])
    }), [
      a("div", {
        class: T(["modal-dialog", $(f)])
      }, [
        a("div", Pe, [
          a("div", Ve, [
            M(y.$slots, "header", {}, () => [
              a("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Ie)
            ]),
            a("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: s
            })
          ]),
          a("div", Ne, [
            M(y.$slots, "default", {}, () => [
              a("span", { innerHTML: e.body }, null, 8, Fe)
            ])
          ]),
          a("div", je, [
            M(y.$slots, "footer", {}, () => [
              e.okOnly ? U("", !0) : (_(), C("button", {
                key: 0,
                type: "button",
                class: T(["btn btn-secondary", $(S)]),
                onClick: c
              }, [
                M(y.$slots, "button-cancel", {}, () => [
                  a("span", { innerHTML: e.textCancel }, null, 8, Ge)
                ])
              ], 2)),
              a("button", {
                type: "button",
                class: T(["btn btn-primary", $(S)]),
                onClick: w
              }, [
                M(y.$slots, "button-ok", {}, () => [
                  a("span", { innerHTML: e.textOk }, null, 8, Ke)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, ze));
  }
}), Ue = /* @__PURE__ */ E({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const n = B(void 0), r = B({});
    function i(m = {}) {
      var o;
      return m.okOnly = !1, r.value = m, (o = n.value) == null ? void 0 : o.show();
    }
    function v(m = {}) {
      var o;
      return m.okOnly = !0, r.value = m, (o = n.value) == null ? void 0 : o.show();
    }
    return t({ confirm: i, alert: v }), (m, o) => (_(), j(se, { to: "body" }, [
      ye(ce, G({
        ref_key: "modalRef",
        ref: n
      }, { ...r.value }), null, 16)
    ]));
  }
}), Ye = { "data-first": "" }, We = ["disabled", "innerHTML"], Xe = { "data-prev": "" }, qe = ["disabled", "innerHTML"], Je = { key: 0 }, Qe = ["innerHTML"], Ze = ["onClick"], et = { "data-next": "" }, tt = ["disabled", "innerHTML"], nt = { "data-last": "" }, ot = ["disabled", "innerHTML"], st = /* @__PURE__ */ E({
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
    function r(s, c = 0) {
      return [...Array(s).keys()].map((w) => w + c);
    }
    const { modelValue: i, maxVisibleButtons: v, hideEllipsis: m } = z(n), o = Math.floor(v.value / 2), u = L(() => {
      let s = v.value, c = i.value <= o ? 1 : i.value - o;
      return i.value >= p.value - o && (c = p.value - s + 1), c < 1 && (c = 1), p.value < s && (s = p.value), r(s, c);
    }), f = L(() => i.value <= 1), S = L(() => i.value >= p.value), p = L(() => {
      const { perPage: s, totalItems: c } = n;
      return Math.ceil(c / s);
    });
    ke(() => {
      p.value > 0 && i.value > p.value && t("update:modelValue", p.value);
    });
    function g(s) {
      const c = v.value - 1;
      return !(m.value === !0 || s === 0 && i.value - o - 1 <= 0 || s === c && i.value + o >= p.value || s > 0 && s < c);
    }
    function x(s) {
      s < 1 && (s = 1), s > p.value && (s = p.value), t("update:modelValue", s);
    }
    function h() {
      t("update:modelValue", 1);
    }
    function d() {
      t("update:modelValue", p.value);
    }
    function l() {
      let s = i.value - 1;
      s < 1 && (s = 1), t("update:modelValue", s);
    }
    function b() {
      let s = i.value + 1;
      s > p.value && (s = p.value), t("update:modelValue", s);
    }
    return (s, c) => (_(), C("ul", {
      class: T(["pagination", e.size])
    }, [
      a("li", Ye, [
        a("button", {
          class: "",
          disabled: $(f),
          innerHTML: e.firstText,
          onClick: h
        }, null, 8, We)
      ]),
      a("li", Xe, [
        a("button", {
          class: "",
          disabled: $(f),
          innerHTML: e.prevText,
          onClick: l
        }, null, 8, qe)
      ]),
      (_(!0), C(R, null, P($(u), (w, y) => (_(), C(R, null, [
        g(y) ? (_(), C("li", Je, [
          a("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Qe)
        ])) : (_(), C("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === w })
        }, [
          a("button", {
            class: "",
            onClick: (k) => x(w)
          }, O(w), 9, Ze)
        ], 2))
      ], 64))), 256)),
      a("li", et, [
        a("button", {
          class: "",
          disabled: $(S),
          innerHTML: e.nextText,
          onClick: b
        }, null, 8, tt)
      ]),
      a("li", nt, [
        a("button", {
          class: "",
          disabled: $(S),
          innerHTML: e.lastText,
          onClick: d
        }, null, 8, ot)
      ])
    ], 2));
  }
});
const lt = /* @__PURE__ */ F(st, [["__scopeId", "data-v-2bfd7085"]]), at = { class: "d-inline" }, rt = /* @__PURE__ */ a("span", null, "Per page: ", -1), it = { class: "fw-bold" }, ut = /* @__PURE__ */ E({
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
      const o = te("b-dropdown-item"), u = te("b-dropdown");
      return _(), j(u, G({
        variant: "outline-primary",
        size: "sm"
      }, { ...v.$attrs }), {
        button: Y(() => [
          a("div", at, [
            M(v.$slots, "default", { selected: $(i) }, () => [
              rt,
              a("span", it, O($(i)), 1)
            ])
          ])
        ]),
        default: Y(() => [
          (_(!0), C(R, null, P($(r), (f, S) => (_(), j(o, {
            key: f,
            onClick: (p) => i.value = f,
            active: f === e.modelValue
          }, {
            default: Y(() => [
              W(O(f), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), ct = ["value"], dt = /* @__PURE__ */ E({
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
    return (v, m) => ae((_(), C("select", {
      "onUpdate:modelValue": m[0] || (m[0] = (o) => $e(i) ? i.value = o : null)
    }, [
      (_(!0), C(R, null, P($(r), (o, u) => (_(), C("option", {
        key: o,
        value: o
      }, O(o), 9, ct))), 128))
    ], 512)), [
      [Ce, $(i)]
    ]);
  }
});
var N = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(N || {});
class ft {
  constructor(t, n = "ASC", r) {
    D(this, "key");
    D(this, "direction");
    D(this, "sortFn");
    this.key = t, this.direction = n, this.sortFn = r;
  }
}
const oe = (e, t) => {
  const n = (o, u) => {
    let f = typeof o, S = typeof u;
    return f == "number" && f == S;
  }, r = (o, u) => o - u, i = (o, u) => (o = o ?? "", u = u ?? "", o.localeCompare(u)), v = (o, u) => n(o, u) ? r : i, m = [...t];
  return m.sort((o, u) => {
    let f = 0;
    for (let S of e) {
      let { key: p, direction: g, sortFn: x } = S, h = g === "ASC" ? 1 : -1, d = o[p], l = u[p];
      if (x = typeof x == "function" ? x : v(d, l), f = x(d, l, o, u, t, S, h) * h, f !== 0)
        return f;
    }
    return f;
  }), m;
}, vt = ["onClick"], pt = { class: "th-wrapper" }, ht = {
  key: 0,
  "data-sort-indicator": ""
}, _t = { class: "sort-index" }, mt = { class: "sort-direction" }, bt = ["onMouseover"], yt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, kt = ["colspan"], $t = ["innerHTML"];
class J {
  constructor(t = "", n = "", r = !1, i) {
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
    this.key = t, this.label = n, this.sortable = r, this.sortFn = i;
  }
}
const Ct = /* @__PURE__ */ E({
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
    const n = e, r = (h) => {
      let d = [];
      for (const l of h)
        d = d.concat(Object.keys(l));
      return d = d.filter((l, b) => d.indexOf(l) == b), d;
    }, i = B([]), { fields: v, items: m } = z(n), o = L(() => {
      if (n.externalSort || i.value.length == 0)
        return n.items;
      const h = [...n.items];
      return oe(i.value, h);
    }), u = L(() => {
      let h = v.value, d = [];
      return h.length === 0 && (h = r([...m.value])), h.reduce((l, b, s) => {
        if (typeof b == "string")
          l.push(new J(b, b));
        else if (b instanceof J)
          l.push(b);
        else if (typeof b == "object") {
          const { key: c, label: w, sortable: y, sortFn: k } = b;
          l.push(new J(c, w, y, k));
        }
        return l;
      }, d);
    });
    function f(h) {
      const d = i.value.findIndex((l) => l.key === h.key);
      return d < 0 ? "" : d + 1;
    }
    function S(h) {
      const d = i.value.findIndex((b) => b.key === h.key);
      if (d < 0)
        return "fas fa-sort";
      const l = i.value[d];
      return l.direction === N.ASC ? "fas fa-sort-up" : l.direction === N.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(h) {
      const { key: d } = h, l = i.value.findIndex((b) => b.key === d);
      if (l < 0) {
        const b = new ft(d, N.ASC, h.sortFn);
        i.value.push(b);
      } else {
        const b = i.value[l], s = b.direction;
        s === N.ASC ? b.direction = N.DESC : s === N.DESC && i.value.splice(l, 1);
      }
      t("sort", i.value, oe);
    }
    function g(h, d, l, b) {
      t("onMouseOverCell", h, d, l, b);
    }
    let x = B(null);
    return q(() => {
      x.value = Z();
    }), (h, d) => (_(), C("table", G({ ...h.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      a("thead", null, [
        (_(!0), C(R, null, P($(u), (l) => (_(), C("th", {
          key: `thead-${l.key}`,
          class: T({ sortable: l.sortable }),
          onClick: (b) => l.sortable && p(l)
        }, [
          a("span", pt, [
            M(h.$slots, `head(${l.key})`, {
              field: l,
              data: $(x),
              value: l.label
            }, () => [
              W(O(l.label), 1)
            ], !0),
            l.sortable ? (_(), C("span", ht, [
              a("span", _t, O(f(l)), 1),
              a("span", mt, [
                a("i", {
                  class: T(S(l))
                }, null, 2)
              ])
            ])) : U("", !0)
          ])
        ], 10, vt))), 128))
      ]),
      a("tbody", null, [
        (_(!0), C(R, null, P($(o), (l, b) => (_(), C(R, {
          key: `trow-${(l == null ? void 0 : l.id) ?? b}`
        }, [
          M(h.$slots, "row", {
            item: l,
            index: b,
            colspan: $(u).length
          }, void 0, !0),
          a("tr", null, [
            (_(!0), C(R, null, P($(u), (s) => (_(), C("td", {
              key: `tcell-${s.key + ((l == null ? void 0 : l.id) ?? b)}`,
              class: T({ [`tcell-${s == null ? void 0 : s.key}`]: !0 }),
              onMouseover: (c) => g(c, l, b, s)
            }, [
              M(h.$slots, `cell(${s == null ? void 0 : s.key})`, {
                data: $(x),
                item: l,
                field: s,
                value: l[s == null ? void 0 : s.key]
              }, () => [
                W(O(l[s == null ? void 0 : s.key]), 1)
              ], !0)
            ], 42, bt))), 128))
          ])
        ], 64))), 128))
      ]),
      a("tfoot", null, [
        M(h.$slots, "footer", { data: $(x) }, void 0, !0)
      ]),
      e.showEmpty && $(o).length === 0 ? (_(), C("tr", yt, [
        a("td", {
          colspan: $(u).length
        }, [
          M(h.$slots, "empty", {
            items: $(o),
            data: $(x),
            fields: $(u)
          }, () => [
            a("span", { innerHTML: e.emptyText }, null, 8, $t)
          ], !0)
        ], 8, kt)
      ])) : U("", !0)
    ], 16));
  }
});
const gt = /* @__PURE__ */ F(Ct, [["__scopeId", "data-v-7828e531"]]);
var de = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(de || {});
const wt = { class: "d-inline-block" }, xt = ["disabled"], Mt = /* @__PURE__ */ E({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: de.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    size: { default: V.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = B(), { variant: r, centered: i, dropup: v, dropend: m, dropstart: o } = z(t), u = B(!1), f = L(() => {
      const c = [];
      return r != null && r.value && c.push(`btn-${r.value}`), t.size && c.push(`btn-${t.size}`), c;
    }), S = L(() => {
      const c = [];
      return i != null && i.value && c.push("dropdown-center"), v != null && v.value && c.push("dropup"), o != null && o.value && c.push("dropstart"), !(o != null && o.value) && (m != null && m.value) && c.push("dropend"), c.length === 0 ? c.push("dropdown") : c.unshift("btn-group"), c;
    });
    function p() {
      u.value = !0;
    }
    function g() {
      u.value = !1;
    }
    const x = "data-prevent-close";
    function h(c) {
      u.value ? g() : p();
    }
    function d(c) {
      const { target: w } = c;
      (w == null ? void 0 : w.closest(`[${x}],[${x}=true]`)) || g();
    }
    function l() {
      u.value && g();
    }
    const b = (c, w, y = {}) => {
      const k = new IntersectionObserver((A, I) => {
        A.forEach((ee) => {
          console.log(ee), w(ee);
        });
      });
      return k.observe(c), k;
    }, s = B();
    return q(() => {
      b(s.value, (c) => {
        if (c.isIntersecting) {
          if (console.log("Element is intersecting!"), c.intersectionRatio < 1) {
            const w = c.boundingClientRect, y = c.intersectionRect, k = {
              top: Math.max(0, w.top - y.top),
              right: Math.max(0, w.right - y.right),
              bottom: Math.max(0, w.bottom - y.bottom),
              left: Math.max(0, w.left - y.left)
            };
            let A = 0;
            k.left !== 0 ? A = k.left : k.right !== 0 && (A = -k.right);
            let I = 0;
            k.top !== 0 ? A = k.top : k.bottom !== 0 && (A = -k.bottom), s.value.style.transform = `translate(${A}px, ${I}px)`, console.log(A, I, k);
          }
        } else
          console.log("Element is not intersecting!");
      });
    }), (c, w) => {
      const y = ge("click-outside");
      return _(), C("div", {
        ref_key: "dropDownRef",
        ref: n,
        class: T($(S))
      }, [
        ae((_(), C("div", wt, [
          a("button", {
            class: T(["btn dropdown-toggle", $(f)]),
            type: "button",
            "aria-expanded": "false",
            onClick: h,
            disabled: e.disabled
          }, [
            M(c.$slots, "button", {}, () => [
              W(O(e.text), 1)
            ], !0)
          ], 10, xt),
          a("ul", {
            ref_key: "menuRef",
            ref: s,
            class: T(["dropdown-menu", { show: u.value }]),
            onClick: d
          }, [
            M(c.$slots, "default", {}, void 0, !0)
          ], 2)
        ])), [
          [y, l]
        ])
      ], 2);
    };
  }
});
const St = /* @__PURE__ */ F(Mt, [["__scopeId", "data-v-fec78fab"]]), Tt = ["data-prevent-close"], Lt = /* @__PURE__ */ E({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = z(t);
    return (r, i) => (_(), C("li", {
      "data-prevent-close": $(n) ? "" : null
    }, [
      a("a", {
        class: T(["dropdown-item", { active: e.active }]),
        role: "button",
        tabindex: "0"
      }, [
        M(r.$slots, "default")
      ], 2)
    ], 8, Tt));
  }
}), Bt = {}, At = { "data-prevent-close": "" }, Dt = { class: "dropdown-header" };
function Ht(e, t) {
  return _(), C("li", At, [
    a("h6", Dt, [
      M(e.$slots, "default")
    ])
  ]);
}
const Ot = /* @__PURE__ */ F(Bt, [["render", Ht]]), Et = {}, Rt = /* @__PURE__ */ a("hr", { class: "dropdown-divider" }, null, -1), zt = [
  Rt
];
function Pt(e, t) {
  return _(), C("li", null, zt);
}
const Vt = /* @__PURE__ */ F(Et, [["render", Pt]]), It = {
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
      const u = o.target;
      v && (n(u, v) || m());
    }, { signal: r.signal });
  }
  return i(e, t), r;
}, Ft = {
  mounted(e, t, n, r) {
    const i = t.value;
    Nt(e, i);
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
const jt = ["onClick"], Gt = { class: "drawer-content" }, Kt = { class: "drawer-header" }, Ut = ["innerHTML"], Yt = { class: "drawer-body" }, Wt = ["innerHTML"], Xt = { class: "drawer-footer" }, qt = ["innerHTML"], Jt = ["innerHTML"], Qt = /* @__PURE__ */ E({
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
      backdrop: r,
      keyboard: i,
      focus: v,
      size: m,
      btnSize: o
    } = z(n), u = L(() => X(m.value, "drawer-")), f = L(() => X(o.value, "btn-")), S = B(), p = B(!1), g = Z();
    let x;
    async function h() {
      return p.value === !0 ? void 0 : new Promise((A, I) => {
        p.value = !0, x = A;
      });
    }
    function d(k = !0) {
      p.value = !1, typeof x == "function" && x(k);
    }
    function l() {
      p.value === !0 ? h() : d(!1);
    }
    function b(k) {
      (r == null ? void 0 : r.value) !== "static" && d(!1);
    }
    function s() {
      d(!1);
    }
    function c() {
      d(!1);
    }
    function w() {
      d(!0);
    }
    function y() {
      p.value === !0 ? Q.add(g) : Q.delete(g);
    }
    return t({
      show: h,
      hide: d,
      toggle: l
    }), (k, A) => (_(), j(we, {
      onBeforeEnter: y,
      onAfterLeave: y
    }, {
      default: Y(() => [
        p.value ? (_(), C("div", G({
          key: 0,
          ref_key: "drawerElement",
          ref: S,
          class: "drawer",
          tabindex: "-1"
        }, { ...k.$attrs }, {
          onClick: le(b, ["self"])
        }), [
          a("div", {
            class: T(["drawer-dialog", $(u)])
          }, [
            a("div", Gt, [
              a("div", Kt, [
                M(k.$slots, "header", {}, () => [
                  a("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Ut)
                ], !0),
                a("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: s
                })
              ]),
              a("div", Yt, [
                M(k.$slots, "default", {}, () => [
                  a("span", { innerHTML: e.body }, null, 8, Wt)
                ], !0)
              ]),
              a("div", Xt, [
                M(k.$slots, "footer", {}, () => [
                  e.okOnly ? U("", !0) : (_(), C("button", {
                    key: 0,
                    type: "button",
                    class: T(["ms-auto btn btn-secondary", $(f)]),
                    onClick: c
                  }, [
                    M(k.$slots, "button-cancel", {}, () => [
                      a("span", { innerHTML: e.textCancel }, null, 8, qt)
                    ], !0)
                  ], 2)),
                  a("button", {
                    type: "button",
                    class: T(["btn btn-primary", $(f)]),
                    onClick: w
                  }, [
                    M(k.$slots, "button-ok", {}, () => [
                      a("span", { innerHTML: e.textOk }, null, 8, Jt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, jt)) : U("", !0)
      ]),
      _: 3
    }));
  }
});
const Zt = /* @__PURE__ */ F(Qt, [["__scopeId", "data-v-2e49e8cb"]]), H = "b", fe = "$toaster", ve = "$modalManager";
class pe {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = ie(Ue).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
D(pe, "component");
class he {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = ie(Re).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
D(he, "component");
function ln() {
  return re(fe);
}
function an() {
  return re(ve);
}
function en(e) {
  e.component(`${H}-drawer`, Zt), e.component(`${H}-modal`, ce), e.component(`${H}-pagination`, lt), e.component(`${H}-pagination-dropdown`, ut), e.component(`${H}-pagination-select`, dt), e.component(`${H}-dropdown`, St), e.component(`${H}-dropdown-item`, Lt), e.component(`${H}-dropdown-header`, Ot), e.component(`${H}-dropdown-divider`, Vt), e.component(`${H}-table`, gt), e.component(`${H}-toast`, ue);
}
function tn(e) {
  e.directive("tooltip", It), e.directive("click-outside", Ft);
}
const rn = {
  install(e) {
    en(e), tn(e);
    const t = he.getComponent();
    e.provide(fe, t);
    const n = pe.getComponent();
    e.provide(ve, n);
  }
};
export {
  rn as BootstrapVue,
  St as Dropdown,
  Vt as DropdownDivider,
  Ot as DropdownHeader,
  Lt as DropdownItem,
  ce as Modal,
  Ue as ModalManager,
  ut as PageSizeDropdown,
  dt as PageSizeSelect,
  lt as Pagination,
  gt as Table,
  J as TableFieldDefinition,
  ue as Toast,
  Re as Toaster,
  Ft as clickOutside,
  It as tooltip,
  an as useModal,
  ln as useToaster
};
