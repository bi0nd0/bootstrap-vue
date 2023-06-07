var pe = Object.defineProperty;
var he = (e, n, o) => n in e ? pe(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o;
var B = (e, n, o) => (he(e, typeof n != "symbol" ? n + "" : n, o), o);
import { defineComponent as E, toRefs as O, ref as D, watch as me, onMounted as Z, openBlock as h, createElementBlock as k, normalizeClass as S, renderSlot as C, createElementVNode as a, toDisplayString as H, createBlock as N, Teleport as se, Fragment as z, renderList as P, mergeProps as F, computed as M, getCurrentInstance as W, withModifiers as ee, unref as y, createCommentVNode as G, createVNode as _e, watchEffect as ye, resolveComponent as te, withCtx as K, createTextVNode as U, withDirectives as be, isRef as ke, vModelSelect as $e, Transition as Ce, inject as ae, createApp as le } from "vue";
import { Toast as we, Modal as ge, Tooltip as xe } from "bootstrap";
const Te = { class: "toast-header" }, Se = ["textContent"], Le = ["textContent"], Me = { class: "toast-body" }, Be = ["textContent"], re = /* @__PURE__ */ E({
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
  setup(e, { expose: n, emit: o }) {
    const l = e, { visible: r, animation: m, autohide: p, delay: s } = O(l), i = D(), c = D();
    me(r, (w) => {
      v();
    }, { immediate: !0 });
    function g() {
      i.value.show();
    }
    function f() {
      i.value.hide();
    }
    function b() {
      i.value.dispose();
    }
    function u() {
      i.value.isShown();
    }
    function _() {
      i.value.getOrCreateInstance();
    }
    function t() {
      i.value.getInstance();
    }
    function v() {
      i.value && (r.value === !0 ? g() : f());
    }
    function $() {
      o("hide", i.value);
    }
    function d() {
      o("hidden", i.value);
    }
    function x() {
      o("show", i.value);
    }
    async function L() {
      o("shown", i.value);
    }
    return n({ show: g, hide: f, dispose: b, isShown: u, getOrCreateInstance: _, getInstance: t }), Z(() => {
      c.value.addEventListener("hide.bs.toast", $), c.value.addEventListener("hidden.bs.toast", d), c.value.addEventListener("show.bs.toast", x), c.value.addEventListener("shown.bs.toast", L), i.value = new we(c.value, {
        animation: m.value,
        autohide: p.value,
        delay: s.value
      }), v();
    }), (w, T) => (h(), k("div", {
      ref_key: "toastRef",
      ref: c,
      class: S(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(w.$slots, "header", {}, () => [
        a("div", Te, [
          C(w.$slots, "title", {}, () => [
            a("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, Se)
          ]),
          C(w.$slots, "subtitle", {}, () => [
            a("small", {
              textContent: H(e.subtitle)
            }, null, 8, Le)
          ]),
          a("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: f
          })
        ])
      ]),
      C(w.$slots, "body", {}, () => [
        a("div", Me, [
          C(w.$slots, "default", {}, () => [
            a("span", {
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
    const l = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (o == "x" ? l : l & 3 | 8).toString(16);
  });
}
const He = { id: "toast-wrapper" };
let ne;
const De = /* @__PURE__ */ E({
  __name: "Toaster",
  setup(e, { expose: n }) {
    const o = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, l = D(/* @__PURE__ */ new Map());
    ne = (m, p = "top right") => {
      const s = Ae(), i = { ...o, ...m, id: s };
      let c = l.value.get(p);
      c instanceof Set || (c = /* @__PURE__ */ new Set()), c.add(i), l.value.set(p, c);
    };
    function r(m, p) {
      const s = l.value.get(m);
      s == null || s.delete(p);
    }
    return n({ toast: ne }), (m, p) => (h(), N(se, { to: "body" }, [
      a("div", He, [
        (h(!0), k(z, null, P(l.value, ([s, i]) => (h(), k("div", {
          key: s,
          class: S(["toast-group", `${s}`])
        }, [
          (h(!0), k(z, null, P(i, (c, g) => (h(), N(re, F({
            key: c.id
          }, c, {
            onHidden: (f) => r(s, c)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const I = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [l, r] of n)
    o[l] = r;
  return o;
}, Ee = /* @__PURE__ */ I(De, [["__scopeId", "data-v-177f801e"]]);
var R = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(R || {});
const Y = (e, n = "") => {
  let o = e.toLowerCase();
  return !Object.values(R).includes(o) || o == "" ? "" : `${n}${o}`;
}, ze = ["onClick"], Oe = { class: "modal-content" }, Pe = { class: "modal-header" }, Re = ["innerHTML"], Ve = { class: "modal-body" }, Ne = ["innerHTML"], Fe = { class: "modal-footer" }, Ie = ["innerHTML"], je = ["innerHTML"];
class j {
  static addToStack(n) {
    n != null && this.modalStack.push(n);
  }
  static removeFromStack(n) {
    if (n == null)
      return;
    const o = this.modalStack.indexOf(n);
    o < 0 || (this.modalStack.splice(o, 1), console.log(this.modalStack));
  }
  static getLast() {
    const n = this.modalStack.length;
    if (n !== 0)
      return this.modalStack[n - 1];
  }
}
B(j, "modalStack", new Array());
const ie = /* @__PURE__ */ E({
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
  setup(e, { expose: n }) {
    const o = e, {
      backdrop: l,
      keyboard: r,
      focus: m,
      disableOutsideClick: p,
      size: s,
      btnSize: i
    } = O(o), c = M(() => Y(s.value, "modal-")), g = M(() => Y(i.value, "btn-")), f = D();
    let b;
    W();
    let u;
    function _() {
      return new Promise((T, X) => {
        const q = j.getLast();
        q && q.hide(), j.addToStack(b), b == null || b.show(), u = T;
      });
    }
    function t(w = !0) {
      j.removeFromStack(b), b == null || b.hide();
      const T = j.getLast();
      T && T.show(), typeof u == "function" && u(w);
    }
    function v() {
      b == null || b.toggle();
    }
    Z(() => {
      b = new ge(f.value, {
        backdrop: l == null ? void 0 : l.value,
        keyboard: r.value,
        focus: m.value
      });
    });
    function $(w) {
      (l == null ? void 0 : l.value) !== "static" && t(!1);
    }
    function d() {
      t(!1);
    }
    function x() {
      t(!1);
    }
    function L() {
      t(!0);
    }
    return n({
      show: _,
      hide: t,
      toggle: v
    }), (w, T) => (h(), k("div", F({
      ref_key: "modalElement",
      ref: f,
      class: "modal fade",
      tabindex: "-1"
    }, { ...w.$attrs }, {
      onClick: ee($, ["self"])
    }), [
      a("div", {
        class: S(["modal-dialog", y(c)])
      }, [
        a("div", Oe, [
          a("div", Pe, [
            C(w.$slots, "header", {}, () => [
              a("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Re)
            ]),
            a("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: d
            })
          ]),
          a("div", Ve, [
            C(w.$slots, "default", {}, () => [
              a("span", { innerHTML: e.body }, null, 8, Ne)
            ])
          ]),
          a("div", Fe, [
            C(w.$slots, "footer", {}, () => [
              e.okOnly ? G("", !0) : (h(), k("button", {
                key: 0,
                type: "button",
                class: S(["btn btn-secondary", y(g)]),
                onClick: x
              }, [
                C(w.$slots, "button-cancel", {}, () => [
                  a("span", { innerHTML: e.textCancel }, null, 8, Ie)
                ])
              ], 2)),
              a("button", {
                type: "button",
                class: S(["btn btn-primary", y(g)]),
                onClick: L
              }, [
                C(w.$slots, "button-ok", {}, () => [
                  a("span", { innerHTML: e.textOk }, null, 8, je)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, ze));
  }
}), Ge = /* @__PURE__ */ E({
  __name: "ModalManager",
  setup(e, { expose: n }) {
    const o = D(void 0), l = D({});
    function r(p = {}) {
      var s;
      return p.okOnly = !1, l.value = p, (s = o.value) == null ? void 0 : s.show();
    }
    function m(p = {}) {
      var s;
      return p.okOnly = !0, l.value = p, (s = o.value) == null ? void 0 : s.show();
    }
    return n({ confirm: r, alert: m }), (p, s) => (h(), N(se, { to: "body" }, [
      _e(ie, F({
        ref_key: "modalRef",
        ref: o
      }, { ...l.value }), null, 16)
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
  setup(e, { emit: n }) {
    const o = e;
    function l(d, x = 0) {
      return [...Array(d).keys()].map((L) => L + x);
    }
    const { modelValue: r, maxVisibleButtons: m, hideEllipsis: p } = O(o), s = Math.floor(m.value / 2), i = M(() => {
      let d = m.value, x = r.value <= s ? 1 : r.value - s;
      return r.value >= f.value - s && (x = f.value - d + 1), x < 1 && (x = 1), f.value < d && (d = f.value), l(d, x);
    }), c = M(() => r.value <= 1), g = M(() => r.value >= f.value), f = M(() => {
      const { perPage: d, totalItems: x } = o;
      return Math.ceil(x / d);
    });
    ye(() => {
      f.value > 0 && r.value > f.value && n("update:modelValue", f.value);
    });
    function b(d) {
      const x = m.value - 1;
      return !(p.value === !0 || d === 0 && r.value - s - 1 <= 0 || d === x && r.value + s >= f.value || d > 0 && d < x);
    }
    function u(d) {
      d < 1 && (d = 1), d > f.value && (d = f.value), n("update:modelValue", d);
    }
    function _() {
      n("update:modelValue", 1);
    }
    function t() {
      n("update:modelValue", f.value);
    }
    function v() {
      let d = r.value - 1;
      d < 1 && (d = 1), n("update:modelValue", d);
    }
    function $() {
      let d = r.value + 1;
      d > f.value && (d = f.value), n("update:modelValue", d);
    }
    return (d, x) => (h(), k("ul", {
      class: S(["pagination", e.size])
    }, [
      a("li", Ke, [
        a("button", {
          class: "",
          disabled: y(c),
          innerHTML: e.firstText,
          onClick: _
        }, null, 8, Ue)
      ]),
      a("li", Ye, [
        a("button", {
          class: "",
          disabled: y(c),
          innerHTML: e.prevText,
          onClick: v
        }, null, 8, We)
      ]),
      (h(!0), k(z, null, P(y(i), (L, w) => (h(), k(z, null, [
        b(w) ? (h(), k("li", Xe, [
          a("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, qe)
        ])) : (h(), k("li", {
          key: 1,
          "data-prev": "",
          class: S({ active: e.modelValue === L })
        }, [
          a("button", {
            class: "",
            onClick: (T) => u(L)
          }, H(L), 9, Je)
        ], 2))
      ], 64))), 256)),
      a("li", Qe, [
        a("button", {
          class: "",
          disabled: y(g),
          innerHTML: e.nextText,
          onClick: $
        }, null, 8, Ze)
      ]),
      a("li", et, [
        a("button", {
          class: "",
          disabled: y(g),
          innerHTML: e.lastText,
          onClick: t
        }, null, 8, tt)
      ])
    ], 2));
  }
});
const ot = /* @__PURE__ */ I(nt, [["__scopeId", "data-v-2bfd7085"]]), st = { class: "d-inline" }, at = /* @__PURE__ */ a("span", null, "Per page: ", -1), lt = { class: "fw-bold" }, rt = /* @__PURE__ */ E({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const o = e, { options: l } = O(o), r = M({
      get: () => o.modelValue,
      set: (m) => n("update:modelValue", m)
    });
    return (m, p) => {
      const s = te("b-dropdown-item"), i = te("b-dropdown");
      return h(), N(i, F({
        variant: "outline-primary",
        size: "sm"
      }, { ...m.$attrs }), {
        button: K(() => [
          a("div", st, [
            C(m.$slots, "default", { selected: y(r) }, () => [
              at,
              a("span", lt, H(y(r)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (h(!0), k(z, null, P(y(l), (c, g) => (h(), N(s, {
            key: c,
            onClick: (f) => r.value = c,
            active: c === e.modelValue
          }, {
            default: K(() => [
              U(H(c), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), it = ["value"], ut = /* @__PURE__ */ E({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const o = e, { options: l } = O(o), r = M({
      get: () => o.modelValue,
      set: (m) => n("update:modelValue", m)
    });
    return (m, p) => be((h(), k("select", {
      "onUpdate:modelValue": p[0] || (p[0] = (s) => ke(r) ? r.value = s : null)
    }, [
      (h(!0), k(z, null, P(y(l), (s, i) => (h(), k("option", {
        key: s,
        value: s
      }, H(s), 9, it))), 128))
    ], 512)), [
      [$e, y(r)]
    ]);
  }
});
var V = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(V || {});
class ct {
  constructor(n, o = "ASC", l) {
    B(this, "key");
    B(this, "direction");
    B(this, "sortFn");
    this.key = n, this.direction = o, this.sortFn = l;
  }
}
const oe = (e, n) => {
  const o = (s, i) => {
    let c = typeof s, g = typeof i;
    return c == "number" && c == g;
  }, l = (s, i) => s - i, r = (s, i) => (s = s ?? "", i = i ?? "", s.localeCompare(i)), m = (s, i) => o(s, i) ? l : r, p = [...n];
  return p.sort((s, i) => {
    let c = 0;
    for (let g of e) {
      let { key: f, direction: b, sortFn: u } = g, _ = b === "ASC" ? 1 : -1, t = s[f], v = i[f];
      if (u = typeof u == "function" ? u : m(t, v), c = u(t, v, s, i, n, g, _) * _, c !== 0)
        return c;
    }
    return c;
  }), p;
}, dt = ["onClick"], ft = { class: "th-wrapper" }, vt = {
  key: 0,
  "data-sort-indicator": ""
}, pt = { class: "sort-index" }, ht = { class: "sort-direction" }, mt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, _t = ["colspan"], yt = ["innerHTML"];
class J {
  constructor(n = "", o = "", l = !1, r) {
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
    this.key = n, this.label = o, this.sortable = l, this.sortFn = r;
  }
}
const bt = /* @__PURE__ */ E({
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
  emits: ["sort"],
  setup(e, { emit: n }) {
    const o = e, l = (u) => {
      let _ = [];
      for (const t of u)
        _ = _.concat(Object.keys(t));
      return _ = _.filter((t, v) => _.indexOf(t) == v), _;
    }, r = D([]), { fields: m, items: p } = O(o), s = M(() => {
      if (o.externalSort || r.value.length == 0)
        return o.items;
      const u = [...o.items];
      return oe(r.value, u);
    }), i = M(() => {
      let u = m.value, _ = [];
      return u.length === 0 && (u = l([...p.value])), u.reduce((t, v, $) => {
        if (typeof v == "string")
          t.push(new J(v, v));
        else if (v instanceof J)
          t.push(v);
        else if (typeof v == "object") {
          const { key: d, label: x, sortable: L, sortFn: w } = v;
          t.push(new J(d, x, L, w));
        }
        return t;
      }, _);
    });
    function c(u) {
      const _ = r.value.findIndex((t) => t.key === u.key);
      return _ < 0 ? "" : _ + 1;
    }
    function g(u) {
      const _ = r.value.findIndex((v) => v.key === u.key);
      if (_ < 0)
        return "fas fa-sort";
      const t = r.value[_];
      return t.direction === V.ASC ? "fas fa-sort-up" : t.direction === V.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function f(u) {
      const { key: _ } = u, t = r.value.findIndex((v) => v.key === _);
      if (t < 0) {
        const v = new ct(_, V.ASC, u.sortFn);
        r.value.push(v);
      } else {
        const v = r.value[t], $ = v.direction;
        $ === V.ASC ? v.direction = V.DESC : $ === V.DESC && r.value.splice(t, 1);
      }
      n("sort", r.value, oe);
    }
    let b = D(null);
    return Z(() => {
      b.value = W();
    }), (u, _) => (h(), k("table", F({ ...u.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      a("thead", null, [
        (h(!0), k(z, null, P(y(i), (t) => (h(), k("th", {
          key: `thead-${t.key}`,
          class: S({ sortable: t.sortable }),
          onClick: (v) => t.sortable && f(t)
        }, [
          a("span", ft, [
            C(u.$slots, `head(${t.key})`, {
              field: t,
              data: y(b),
              value: t.label
            }, () => [
              U(H(t.label), 1)
            ], !0),
            t.sortable ? (h(), k("span", vt, [
              a("span", pt, H(c(t)), 1),
              a("span", ht, [
                a("i", {
                  class: S(g(t))
                }, null, 2)
              ])
            ])) : G("", !0)
          ])
        ], 10, dt))), 128))
      ]),
      a("tbody", null, [
        (h(!0), k(z, null, P(y(s), (t, v) => (h(), k(z, {
          key: `trow-${(t == null ? void 0 : t.id) ?? v}`
        }, [
          C(u.$slots, "row", {
            item: t,
            index: v,
            colspan: y(i).length
          }, void 0, !0),
          a("tr", null, [
            (h(!0), k(z, null, P(y(i), ($) => (h(), k("td", {
              key: `tcell-${$.key + ((t == null ? void 0 : t.id) ?? v)}`,
              class: S({ [`tcell-${$ == null ? void 0 : $.key}`]: !0 })
            }, [
              C(u.$slots, `cell(${$ == null ? void 0 : $.key})`, {
                data: y(b),
                item: t,
                field: $,
                value: t[$ == null ? void 0 : $.key]
              }, () => [
                U(H(t[$ == null ? void 0 : $.key]), 1)
              ], !0)
            ], 2))), 128))
          ])
        ], 64))), 128))
      ]),
      a("tfoot", null, [
        C(u.$slots, "footer", { data: y(b) }, void 0, !0)
      ]),
      e.showEmpty && y(s).length === 0 ? (h(), k("tr", mt, [
        a("td", {
          colspan: y(i).length
        }, [
          C(u.$slots, "empty", {
            items: y(s),
            data: y(b),
            fields: y(i)
          }, () => [
            a("span", { innerHTML: e.emptyText }, null, 8, yt)
          ], !0)
        ], 8, _t)
      ])) : G("", !0)
    ], 16));
  }
});
const kt = /* @__PURE__ */ I(bt, [["__scopeId", "data-v-5556187e"]]);
var ue = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ue || {});
const $t = /* @__PURE__ */ E({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: ue.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    size: { default: R.STANDARD }
  },
  setup(e) {
    const n = e, { variant: o, centered: l, dropup: r, dropend: m, dropstart: p } = O(n), s = D(!1), i = M(() => {
      const t = [];
      return o != null && o.value && t.push(`btn-${o.value}`), n.size && t.push(`btn-${n.size}`), t;
    }), c = M(() => {
      const t = [];
      return l != null && l.value && t.push("dropdown-center"), r != null && r.value && t.push("dropup"), p != null && p.value && t.push("dropstart"), !(p != null && p.value) && (m != null && m.value) && t.push("dropend"), t.length === 0 ? t.push("dropdown") : t.unshift("btn-group"), t;
    });
    function g() {
      s.value = !0;
    }
    function f() {
      s.value = !1;
    }
    const b = "data-prevent-close";
    let u;
    function _(t) {
      const { currentTarget: v } = t;
      s.value ? f() : g(), s.value && (u = new AbortController(), setTimeout(() => {
        window.addEventListener("click", ($) => {
          const { target: d } = $;
          d != null && d.closest(`[${b}],[${b}=true]`) || d === v || (f(), u.abort());
        }, { signal: u.signal });
      }, 0));
    }
    return (t, v) => (h(), k("div", {
      class: S(y(c))
    }, [
      a("button", {
        class: S(["btn dropdown-toggle", y(i)]),
        type: "button",
        "aria-expanded": "false",
        onClick: _
      }, [
        C(t.$slots, "button", {}, () => [
          U(H(e.text), 1)
        ])
      ], 2),
      a("ul", {
        class: S(["dropdown-menu", { show: s.value }])
      }, [
        C(t.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ct = ["data-prevent-close"], wt = ["onClick"], gt = /* @__PURE__ */ E({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const o = e, { preventClose: l } = O(o);
    function r() {
      const m = W();
      n("click", m);
    }
    return (m, p) => (h(), k("li", {
      "data-prevent-close": y(l) ? "" : null
    }, [
      a("a", {
        class: S(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: ee(r, ["prevent"])
      }, [
        C(m.$slots, "default")
      ], 10, wt)
    ], 8, Ct));
  }
}), xt = {}, Tt = { "data-prevent-close": "" }, St = { class: "dropdown-header" };
function Lt(e, n) {
  return h(), k("li", Tt, [
    a("h6", St, [
      C(e.$slots, "default")
    ])
  ]);
}
const Mt = /* @__PURE__ */ I(xt, [["render", Lt]]), Bt = {}, At = /* @__PURE__ */ a("hr", { class: "dropdown-divider" }, null, -1), Ht = [
  At
];
function Dt(e, n) {
  return h(), k("li", null, Ht);
}
const Et = /* @__PURE__ */ I(Bt, [["render", Dt]]), zt = {
  mounted(e, n, o, l) {
    new xe(e, {
      title: n.value,
      placement: n.arg,
      trigger: "hover"
    });
  }
};
class Q {
  static add(n) {
    this.list.add(n), document.body.classList.add("drawer-open");
  }
  static delete(n) {
    this.list.delete(n), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
B(Q, "list", /* @__PURE__ */ new Set());
const Ot = ["onClick"], Pt = { class: "drawer-content" }, Rt = { class: "drawer-header" }, Vt = ["innerHTML"], Nt = { class: "drawer-body" }, Ft = ["innerHTML"], It = { class: "drawer-footer" }, jt = ["innerHTML"], Gt = ["innerHTML"], Kt = /* @__PURE__ */ E({
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
  setup(e, { expose: n }) {
    const o = e, {
      backdrop: l,
      keyboard: r,
      focus: m,
      size: p,
      btnSize: s
    } = O(o), i = M(() => Y(p.value, "drawer-")), c = M(() => Y(s.value, "btn-")), g = D(), f = D(!1), b = W();
    let u;
    async function _() {
      return f.value === !0 ? void 0 : new Promise((X, q) => {
        f.value = !0, u = X;
      });
    }
    function t(T = !0) {
      f.value = !1, typeof u == "function" && u(T);
    }
    function v() {
      f.value === !0 ? _() : t(!1);
    }
    function $(T) {
      (l == null ? void 0 : l.value) !== "static" && t(!1);
    }
    function d() {
      t(!1);
    }
    function x() {
      t(!1);
    }
    function L() {
      t(!0);
    }
    function w() {
      f.value === !0 ? Q.add(b) : Q.delete(b);
    }
    return n({
      show: _,
      hide: t,
      toggle: v
    }), (T, X) => (h(), N(Ce, {
      onBeforeEnter: w,
      onAfterLeave: w
    }, {
      default: K(() => [
        f.value ? (h(), k("div", F({
          key: 0,
          ref_key: "drawerElement",
          ref: g,
          class: "drawer",
          tabindex: "-1"
        }, { ...T.$attrs }, {
          onClick: ee($, ["self"])
        }), [
          a("div", {
            class: S(["drawer-dialog", y(i)])
          }, [
            a("div", Pt, [
              a("div", Rt, [
                C(T.$slots, "header", {}, () => [
                  a("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Vt)
                ], !0),
                a("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: d
                })
              ]),
              a("div", Nt, [
                C(T.$slots, "default", {}, () => [
                  a("span", { innerHTML: e.body }, null, 8, Ft)
                ], !0)
              ]),
              a("div", It, [
                C(T.$slots, "footer", {}, () => [
                  e.okOnly ? G("", !0) : (h(), k("button", {
                    key: 0,
                    type: "button",
                    class: S(["ms-auto btn btn-secondary", y(c)]),
                    onClick: x
                  }, [
                    C(T.$slots, "button-cancel", {}, () => [
                      a("span", { innerHTML: e.textCancel }, null, 8, jt)
                    ], !0)
                  ], 2)),
                  a("button", {
                    type: "button",
                    class: S(["btn btn-primary", y(c)]),
                    onClick: L
                  }, [
                    C(T.$slots, "button-ok", {}, () => [
                      a("span", { innerHTML: e.textOk }, null, 8, Gt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Ot)) : G("", !0)
      ]),
      _: 3
    }));
  }
});
const Ut = /* @__PURE__ */ I(Kt, [["__scopeId", "data-v-2e49e8cb"]]), A = "b", ce = "$toaster", de = "$modalManager";
class fe {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const l = le(Ge).mount(n);
      this.component = l;
    }
    return this.component;
  }
}
B(fe, "component");
class ve {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const l = le(Ee).mount(n);
      this.component = l;
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
  e.component(`${A}-drawer`, Ut), e.component(`${A}-modal`, ie), e.component(`${A}-pagination`, ot), e.component(`${A}-pagination-dropdown`, rt), e.component(`${A}-pagination-select`, ut), e.component(`${A}-dropdown`, $t), e.component(`${A}-dropdown-item`, gt), e.component(`${A}-dropdown-header`, Mt), e.component(`${A}-dropdown-divider`, Et), e.component(`${A}-table`, kt), e.component(`${A}-toast`, re);
}
function Wt(e) {
  e.directive("tooltip", zt);
}
const en = {
  install(e) {
    Yt(e), Wt(e);
    const n = ve.getComponent();
    e.provide(ce, n);
    const o = fe.getComponent();
    e.provide(de, o);
  }
};
export {
  en as BootstrapVue,
  $t as Dropdown,
  Et as DropdownDivider,
  Mt as DropdownHeader,
  gt as DropdownItem,
  ie as Modal,
  Ge as ModalManager,
  rt as PageSizeDropdown,
  ut as PageSizeSelect,
  ot as Pagination,
  kt as Table,
  J as TableFieldDefinition,
  re as Toast,
  Ee as Toaster,
  zt as tooltip,
  Zt as useModal,
  Qt as useToaster
};
