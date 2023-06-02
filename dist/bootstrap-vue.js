var de = Object.defineProperty;
var fe = (e, t, o) => t in e ? de(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var L = (e, t, o) => (fe(e, typeof t != "symbol" ? t + "" : t, o), o);
import { defineComponent as D, toRefs as O, ref as H, watch as pe, onMounted as q, openBlock as h, createElementBlock as $, normalizeClass as S, renderSlot as g, createElementVNode as a, toDisplayString as A, createBlock as z, Teleport as te, Fragment as E, renderList as P, mergeProps as N, computed as M, getCurrentInstance as Y, withModifiers as J, unref as C, createCommentVNode as G, createVNode as ve, watchEffect as he, resolveComponent as Q, withCtx as K, createTextVNode as U, withDirectives as me, isRef as _e, vModelSelect as ye, Transition as be, inject as ne, createApp as oe } from "vue";
import { Toast as ke, Modal as $e, Tooltip as we } from "bootstrap";
const Ce = { class: "toast-header" }, ge = ["textContent"], xe = ["textContent"], Te = { class: "toast-body" }, Se = ["textContent"], se = /* @__PURE__ */ D({
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
    const l = e, { visible: r, animation: m, autohide: v, delay: s } = O(l), u = H(), c = H();
    pe(r, (T) => {
      f();
    }, { immediate: !0 });
    function y() {
      u.value.show();
    }
    function p() {
      u.value.hide();
    }
    function x() {
      u.value.dispose();
    }
    function i() {
      u.value.isShown();
    }
    function b() {
      u.value.getOrCreateInstance();
    }
    function n() {
      u.value.getInstance();
    }
    function f() {
      u.value && (r.value === !0 ? y() : p());
    }
    function w() {
      o("hide", u.value);
    }
    function d() {
      o("hidden", u.value);
    }
    function _() {
      o("show", u.value);
    }
    async function k() {
      o("shown", u.value);
    }
    return t({ show: y, hide: p, dispose: x, isShown: i, getOrCreateInstance: b, getInstance: n }), q(() => {
      c.value.addEventListener("hide.bs.toast", w), c.value.addEventListener("hidden.bs.toast", d), c.value.addEventListener("show.bs.toast", _), c.value.addEventListener("shown.bs.toast", k), u.value = new ke(c.value, {
        animation: m.value,
        autohide: v.value,
        delay: s.value
      }), f();
    }), (T, I) => (h(), $("div", {
      ref_key: "toastRef",
      ref: c,
      class: S(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      g(T.$slots, "header", {}, () => [
        a("div", Ce, [
          g(T.$slots, "title", {}, () => [
            a("strong", {
              class: "me-auto",
              textContent: A(e.title)
            }, null, 8, ge)
          ]),
          g(T.$slots, "subtitle", {}, () => [
            a("small", {
              textContent: A(e.subtitle)
            }, null, 8, xe)
          ]),
          a("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ]),
      g(T.$slots, "body", {}, () => [
        a("div", Te, [
          g(T.$slots, "default", {}, () => [
            a("span", {
              textContent: A(e.body)
            }, null, 8, Se)
          ])
        ])
      ])
    ], 2));
  }
});
function Le() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const l = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (o == "x" ? l : l & 3 | 8).toString(16);
  });
}
const Me = { id: "toast-wrapper" };
let Z;
const Be = /* @__PURE__ */ D({
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
    }, l = H(/* @__PURE__ */ new Map());
    Z = (m, v = "top right") => {
      const s = Le(), u = { ...o, ...m, id: s };
      let c = l.value.get(v);
      c instanceof Set || (c = /* @__PURE__ */ new Set()), c.add(u), l.value.set(v, c);
    };
    function r(m, v) {
      const s = l.value.get(m);
      s == null || s.delete(v);
    }
    return t({ toast: Z }), (m, v) => (h(), z(te, { to: "body" }, [
      a("div", Me, [
        (h(!0), $(E, null, P(l.value, ([s, u]) => (h(), $("div", {
          key: s,
          class: S(["toast-group", `${s}`])
        }, [
          (h(!0), $(E, null, P(u, (c, y) => (h(), z(se, N({
            key: c.id
          }, c, {
            onHidden: (p) => r(s, c)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const F = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, r] of t)
    o[l] = r;
  return o;
}, Ae = /* @__PURE__ */ F(Be, [["__scopeId", "data-v-177f801e"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const He = ["onClick"], De = { class: "modal-content" }, Ee = { class: "modal-header" }, Oe = ["innerHTML"], Pe = { class: "modal-body" }, Re = ["innerHTML"], Ve = { class: "modal-footer" }, ze = ["innerHTML"], Ne = ["innerHTML"];
class j {
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
L(j, "modalStack", new Array());
const ae = /* @__PURE__ */ D({
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
    size: { default: V.STANDARD }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: l,
      keyboard: r,
      focus: m,
      disableOutsideClick: v,
      size: s
    } = O(o), u = M(() => {
      let _ = s.value.toLowerCase();
      return !Object.values(V).includes(_) || _ == "" ? "" : `modal-${_}`;
    }), c = H();
    let y;
    Y();
    let p;
    function x() {
      return new Promise((k, T) => {
        const I = j.getLast();
        I && I.hide(), j.addToStack(y), y == null || y.show(), p = k;
      });
    }
    function i(_ = !0) {
      j.removeFromStack(y), y == null || y.hide();
      const k = j.getLast();
      k && k.show(), typeof p == "function" && p(_);
    }
    function b() {
      y == null || y.toggle();
    }
    q(() => {
      y = new $e(c.value, {
        backdrop: l == null ? void 0 : l.value,
        keyboard: r.value,
        focus: m.value
      });
    });
    function n(_) {
      (l == null ? void 0 : l.value) !== "static" && i(!1);
    }
    function f() {
      i(!1);
    }
    function w() {
      i(!1);
    }
    function d() {
      i(!0);
    }
    return t({
      show: x,
      hide: i,
      toggle: b
    }), (_, k) => (h(), $("div", N({
      ref_key: "modalElement",
      ref: c,
      class: "modal fade",
      tabindex: "-1"
    }, { ..._.$attrs }, {
      onClick: J(n, ["self"])
    }), [
      a("div", {
        class: S(["modal-dialog", C(u)])
      }, [
        a("div", De, [
          a("div", Ee, [
            g(_.$slots, "header", {}, () => [
              a("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Oe)
            ]),
            a("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: f
            })
          ]),
          a("div", Pe, [
            g(_.$slots, "default", {}, () => [
              a("span", { innerHTML: e.body }, null, 8, Re)
            ])
          ]),
          a("div", Ve, [
            g(_.$slots, "footer", {}, () => [
              e.okOnly ? G("", !0) : (h(), $("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary",
                onClick: w
              }, [
                g(_.$slots, "button-cancel", {}, () => [
                  a("span", { innerHTML: e.textCancel }, null, 8, ze)
                ])
              ])),
              a("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: d
              }, [
                g(_.$slots, "button-ok", {}, () => [
                  a("span", { innerHTML: e.textOk }, null, 8, Ne)
                ])
              ])
            ])
          ])
        ])
      ], 2)
    ], 16, He));
  }
}), Fe = /* @__PURE__ */ D({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const o = H(void 0), l = H({});
    function r(v = {}) {
      var s;
      return v.okOnly = !1, l.value = v, (s = o.value) == null ? void 0 : s.show();
    }
    function m(v = {}) {
      var s;
      return v.okOnly = !0, l.value = v, (s = o.value) == null ? void 0 : s.show();
    }
    return t({ confirm: r, alert: m }), (v, s) => (h(), z(te, { to: "body" }, [
      ve(ae, N({
        ref_key: "modalRef",
        ref: o
      }, { ...l.value }), null, 16)
    ]));
  }
}), Ie = { "data-first": "" }, je = ["disabled", "innerHTML"], Ge = { "data-prev": "" }, Ke = ["disabled", "innerHTML"], Ue = { key: 0 }, Ye = ["innerHTML"], We = ["onClick"], Xe = { "data-next": "" }, qe = ["disabled", "innerHTML"], Je = { "data-last": "" }, Qe = ["disabled", "innerHTML"], Ze = /* @__PURE__ */ D({
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
    const o = e;
    function l(d, _ = 0) {
      return [...Array(d).keys()].map((k) => k + _);
    }
    const { modelValue: r, maxVisibleButtons: m, hideEllipsis: v } = O(o), s = Math.floor(m.value / 2), u = M(() => {
      let d = m.value, _ = r.value <= s ? 1 : r.value - s;
      return r.value >= p.value - s && (_ = p.value - d + 1), _ < 1 && (_ = 1), p.value < d && (d = p.value), l(d, _);
    }), c = M(() => r.value <= 1), y = M(() => r.value >= p.value), p = M(() => {
      const { perPage: d, totalItems: _ } = o;
      return Math.ceil(_ / d);
    });
    he(() => {
      p.value > 0 && r.value > p.value && t("update:modelValue", p.value);
    });
    function x(d) {
      const _ = m.value - 1;
      return !(v.value === !0 || d === 0 && r.value - s - 1 <= 0 || d === _ && r.value + s >= p.value || d > 0 && d < _);
    }
    function i(d) {
      d < 1 && (d = 1), d > p.value && (d = p.value), t("update:modelValue", d);
    }
    function b() {
      t("update:modelValue", 1);
    }
    function n() {
      t("update:modelValue", p.value);
    }
    function f() {
      let d = r.value - 1;
      d < 1 && (d = 1), t("update:modelValue", d);
    }
    function w() {
      let d = r.value + 1;
      d > p.value && (d = p.value), t("update:modelValue", d);
    }
    return (d, _) => (h(), $("ul", {
      class: S(["pagination", e.size])
    }, [
      a("li", Ie, [
        a("button", {
          class: "",
          disabled: C(c),
          innerHTML: e.firstText,
          onClick: b
        }, null, 8, je)
      ]),
      a("li", Ge, [
        a("button", {
          class: "",
          disabled: C(c),
          innerHTML: e.prevText,
          onClick: f
        }, null, 8, Ke)
      ]),
      (h(!0), $(E, null, P(C(u), (k, T) => (h(), $(E, null, [
        x(T) ? (h(), $("li", Ue, [
          a("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Ye)
        ])) : (h(), $("li", {
          key: 1,
          "data-prev": "",
          class: S({ active: e.modelValue === k })
        }, [
          a("button", {
            class: "",
            onClick: (I) => i(k)
          }, A(k), 9, We)
        ], 2))
      ], 64))), 256)),
      a("li", Xe, [
        a("button", {
          class: "",
          disabled: C(y),
          innerHTML: e.nextText,
          onClick: w
        }, null, 8, qe)
      ]),
      a("li", Je, [
        a("button", {
          class: "",
          disabled: C(y),
          innerHTML: e.lastText,
          onClick: n
        }, null, 8, Qe)
      ])
    ], 2));
  }
});
const et = /* @__PURE__ */ F(Ze, [["__scopeId", "data-v-2bfd7085"]]), tt = { class: "d-inline" }, nt = /* @__PURE__ */ a("span", null, "Per page: ", -1), ot = { class: "fw-bold" }, st = /* @__PURE__ */ D({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, { options: l } = O(o), r = M({
      get: () => o.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, v) => {
      const s = Q("b-dropdown-item"), u = Q("b-dropdown");
      return h(), z(u, N({
        variant: "outline-primary",
        size: "sm"
      }, { ...m.$attrs }), {
        button: K(() => [
          a("div", tt, [
            g(m.$slots, "default", { selected: C(r) }, () => [
              nt,
              a("span", ot, A(C(r)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (h(!0), $(E, null, P(C(l), (c, y) => (h(), z(s, {
            key: c,
            onClick: (p) => r.value = c
          }, {
            default: K(() => [
              U(A(c), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), at = ["value"], lt = /* @__PURE__ */ D({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, { options: l } = O(o), r = M({
      get: () => o.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, v) => me((h(), $("select", {
      "onUpdate:modelValue": v[0] || (v[0] = (s) => _e(r) ? r.value = s : null)
    }, [
      (h(!0), $(E, null, P(C(l), (s, u) => (h(), $("option", {
        key: s,
        value: s
      }, A(s), 9, at))), 128))
    ], 512)), [
      [ye, C(r)]
    ]);
  }
});
var R = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(R || {});
class rt {
  constructor(t, o = "ASC", l) {
    L(this, "key");
    L(this, "direction");
    L(this, "sortFn");
    this.key = t, this.direction = o, this.sortFn = l;
  }
}
const ee = (e, t) => {
  const o = (s, u) => {
    let c = typeof s, y = typeof u;
    return c == "number" && c == y;
  }, l = (s, u) => s - u, r = (s, u) => (s = s ?? "", u = u ?? "", s.localeCompare(u)), m = (s, u) => o(s, u) ? l : r, v = [...t];
  return v.sort((s, u) => {
    let c = 0;
    for (let y of e) {
      let { key: p, direction: x, sortFn: i } = y, b = x === "ASC" ? 1 : -1, n = s[p], f = u[p];
      if (i = typeof i == "function" ? i : m(n, f), c = i(n, f, s, u, t, y, b) * b, c !== 0)
        return c;
    }
    return c;
  }), v;
}, it = ["onClick"], ut = { class: "th-wrapper" }, ct = {
  key: 0,
  "data-sort-indicator": ""
}, dt = { class: "sort-index" }, ft = { class: "sort-direction" }, pt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, vt = ["colspan"], ht = ["innerHTML"];
class W {
  constructor(t = "", o = "", l = !1, r) {
    L(this, "key");
    // age
    L(this, "label");
    // Person age
    L(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    L(this, "sortFn");
    this.key = t, this.label = o, this.sortable = l, this.sortFn = r;
  }
}
const mt = /* @__PURE__ */ D({
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
  setup(e, { emit: t }) {
    const o = e, l = (i) => {
      let b = [];
      for (const n of i)
        b = b.concat(Object.keys(n));
      return b = b.filter((n, f) => b.indexOf(n) == f), b;
    }, r = H([]), { fields: m, items: v } = O(o), s = M(() => {
      if (o.externalSort || r.value.length == 0)
        return o.items;
      const i = [...o.items];
      return ee(r.value, i);
    }), u = M(() => {
      let i = m.value, b = [];
      return i.length === 0 && (i = l([...v.value])), i.reduce((n, f, w) => {
        if (typeof f == "string")
          n.push(new W(f, f));
        else if (f instanceof W)
          n.push(f);
        else if (typeof f == "object") {
          const { key: d, label: _, sortable: k, sortFn: T } = f;
          n.push(new W(d, _, k, T));
        }
        return n;
      }, b);
    });
    function c(i) {
      const b = r.value.findIndex((n) => n.key === i.key);
      return b < 0 ? "" : b + 1;
    }
    function y(i) {
      const b = r.value.findIndex((f) => f.key === i.key);
      if (b < 0)
        return "fas fa-sort";
      const n = r.value[b];
      return n.direction === R.ASC ? "fas fa-sort-up" : n.direction === R.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(i) {
      const { key: b } = i, n = r.value.findIndex((f) => f.key === b);
      if (n < 0) {
        const f = new rt(b, R.ASC, i.sortFn);
        r.value.push(f);
      } else {
        const f = r.value[n], w = f.direction;
        w === R.ASC ? f.direction = R.DESC : w === R.DESC && r.value.splice(n, 1);
      }
      t("sort", r.value, ee);
    }
    let x = H(null);
    return q(() => {
      x.value = Y();
    }), (i, b) => (h(), $("table", N({ ...i.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      a("thead", null, [
        (h(!0), $(E, null, P(C(u), (n) => (h(), $("th", {
          key: `thead-${n.key}`,
          class: S({ sortable: n.sortable }),
          onClick: (f) => n.sortable && p(n)
        }, [
          a("span", ut, [
            g(i.$slots, `head(${n.key})`, {
              field: n,
              data: C(x),
              value: n.label
            }, () => [
              U(A(n.label), 1)
            ], !0),
            n.sortable ? (h(), $("span", ct, [
              a("span", dt, A(c(n)), 1),
              a("span", ft, [
                a("i", {
                  class: S(y(n))
                }, null, 2)
              ])
            ])) : G("", !0)
          ])
        ], 10, it))), 128))
      ]),
      a("tbody", null, [
        (h(!0), $(E, null, P(C(s), (n, f) => (h(), $(E, {
          key: `trow-${(n == null ? void 0 : n.id) ?? f}`
        }, [
          g(i.$slots, "row", {
            item: n,
            index: f,
            colspan: C(u).length
          }, void 0, !0),
          a("tr", null, [
            (h(!0), $(E, null, P(C(u), (w) => (h(), $("td", {
              key: `tcell-${w.key + ((n == null ? void 0 : n.id) ?? f)}`,
              class: S({ [`tcell-${w == null ? void 0 : w.key}`]: !0 })
            }, [
              g(i.$slots, `cell(${w == null ? void 0 : w.key})`, {
                data: C(x),
                item: n,
                field: w,
                value: n[w == null ? void 0 : w.key]
              }, () => [
                U(A(n[w == null ? void 0 : w.key]), 1)
              ], !0)
            ], 2))), 128))
          ])
        ], 64))), 128))
      ]),
      a("tfoot", null, [
        g(i.$slots, "footer", { data: C(x) }, void 0, !0)
      ]),
      e.showEmpty && C(s).length === 0 ? (h(), $("tr", pt, [
        a("td", {
          colspan: C(u).length
        }, [
          g(i.$slots, "empty", {
            items: C(s),
            data: C(x),
            fields: C(u)
          }, () => [
            a("span", { innerHTML: e.emptyText }, null, 8, ht)
          ], !0)
        ], 8, vt)
      ])) : G("", !0)
    ], 16));
  }
});
const _t = /* @__PURE__ */ F(mt, [["__scopeId", "data-v-5556187e"]]);
var le = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(le || {});
const yt = /* @__PURE__ */ D({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: le.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    size: { default: V.STANDARD }
  },
  setup(e) {
    const t = e, { variant: o, centered: l, dropup: r, dropend: m, dropstart: v } = O(t), s = H(!1), u = M(() => {
      const n = [];
      return o != null && o.value && n.push(`btn-${o.value}`), t.size && n.push(`btn-${t.size}`), n;
    }), c = M(() => {
      const n = [];
      return l != null && l.value && n.push("dropdown-center"), r != null && r.value && n.push("dropup"), v != null && v.value && n.push("dropstart"), !(v != null && v.value) && (m != null && m.value) && n.push("dropend"), n.length === 0 ? n.push("dropdown") : n.unshift("btn-group"), n;
    });
    function y() {
      s.value = !0;
    }
    function p() {
      s.value = !1;
    }
    const x = "data-prevent-close";
    let i;
    function b(n) {
      const { currentTarget: f } = n;
      s.value ? p() : y(), s.value && (i = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (w) => {
          const { target: d } = w;
          d != null && d.closest(`[${x}],[${x}=true]`) || d === f || (p(), i.abort());
        }, { signal: i.signal });
      }, 0));
    }
    return (n, f) => (h(), $("div", {
      class: S(C(c))
    }, [
      a("button", {
        class: S(["btn dropdown-toggle", C(u)]),
        type: "button",
        "aria-expanded": "false",
        onClick: b
      }, [
        g(n.$slots, "button", {}, () => [
          U(A(e.text), 1)
        ])
      ], 2),
      a("ul", {
        class: S(["dropdown-menu", { show: s.value }])
      }, [
        g(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), bt = ["data-prevent-close"], kt = ["onClick"], $t = /* @__PURE__ */ D({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, { preventClose: l } = O(o);
    function r() {
      const m = Y();
      t("click", m);
    }
    return (m, v) => (h(), $("li", {
      "data-prevent-close": C(l) ? "" : null
    }, [
      a("a", {
        class: S(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: J(r, ["prevent"])
      }, [
        g(m.$slots, "default")
      ], 10, kt)
    ], 8, bt));
  }
}), wt = {}, Ct = { "data-prevent-close": "" }, gt = { class: "dropdown-header" };
function xt(e, t) {
  return h(), $("li", Ct, [
    a("h6", gt, [
      g(e.$slots, "default")
    ])
  ]);
}
const Tt = /* @__PURE__ */ F(wt, [["render", xt]]), St = {}, Lt = /* @__PURE__ */ a("hr", { class: "dropdown-divider" }, null, -1), Mt = [
  Lt
];
function Bt(e, t) {
  return h(), $("li", null, Mt);
}
const At = /* @__PURE__ */ F(St, [["render", Bt]]), Ht = {
  mounted(e, t, o, l) {
    new we(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
};
class X {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
L(X, "list", /* @__PURE__ */ new Set());
const Dt = ["onClick"], Et = { class: "drawer-content" }, Ot = { class: "drawer-header" }, Pt = ["innerHTML"], Rt = { class: "drawer-body" }, Vt = ["innerHTML"], zt = { class: "drawer-footer" }, Nt = ["innerHTML"], Ft = ["innerHTML"], It = /* @__PURE__ */ D({
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
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: l,
      keyboard: r,
      focus: m,
      size: v
    } = O(o), s = M(() => {
      let k = v.value.toLowerCase();
      return !Object.values(V).includes(k) || k == "" ? "" : `drawer-${k}`;
    }), u = H(), c = H(!1), y = Y();
    let p;
    async function x() {
      return c.value === !0 ? void 0 : new Promise((T, I) => {
        c.value = !0, p = T;
      });
    }
    function i(k = !0) {
      c.value = !1, typeof p == "function" && p(k);
    }
    function b() {
      c.value === !0 ? x() : i(!1);
    }
    function n(k) {
      (l == null ? void 0 : l.value) !== "static" && i(!1);
    }
    function f() {
      i(!1);
    }
    function w() {
      i(!1);
    }
    function d() {
      i(!0);
    }
    function _() {
      c.value === !0 ? X.add(y) : X.delete(y);
    }
    return t({
      show: x,
      hide: i,
      toggle: b
    }), (k, T) => (h(), z(be, {
      onBeforeEnter: _,
      onAfterLeave: _
    }, {
      default: K(() => [
        c.value ? (h(), $("div", N({
          key: 0,
          ref_key: "drawerElement",
          ref: u,
          class: "drawer",
          tabindex: "-1"
        }, { ...k.$attrs }, {
          onClick: J(n, ["self"])
        }), [
          a("div", {
            class: S(["drawer-dialog", C(s)])
          }, [
            a("div", Et, [
              a("div", Ot, [
                g(k.$slots, "header", {}, () => [
                  a("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Pt)
                ], !0),
                a("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: f
                })
              ]),
              a("div", Rt, [
                g(k.$slots, "default", {}, () => [
                  a("span", { innerHTML: e.body }, null, 8, Vt)
                ], !0)
              ]),
              a("div", zt, [
                g(k.$slots, "footer", {}, () => [
                  e.okOnly ? G("", !0) : (h(), $("button", {
                    key: 0,
                    type: "button",
                    class: "ms-auto btn btn-secondary",
                    onClick: w
                  }, [
                    g(k.$slots, "button-cancel", {}, () => [
                      a("span", { innerHTML: e.textCancel }, null, 8, Nt)
                    ], !0)
                  ])),
                  a("button", {
                    type: "button",
                    class: "btn btn-primary",
                    onClick: d
                  }, [
                    g(k.$slots, "button-ok", {}, () => [
                      a("span", { innerHTML: e.textOk }, null, 8, Ft)
                    ], !0)
                  ])
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Dt)) : G("", !0)
      ]),
      _: 3
    }));
  }
});
const jt = /* @__PURE__ */ F(It, [["__scopeId", "data-v-3aae3241"]]), B = "b", re = "$toaster", ie = "$modalManager";
class ue {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const l = oe(Fe).mount(t);
      this.component = l;
    }
    return this.component;
  }
}
L(ue, "component");
class ce {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const l = oe(Ae).mount(t);
      this.component = l;
    }
    return this.component;
  }
}
L(ce, "component");
function Xt() {
  return ne(re);
}
function qt() {
  return ne(ie);
}
function Gt(e) {
  e.component(`${B}-drawer`, jt), e.component(`${B}-modal`, ae), e.component(`${B}-pagination`, et), e.component(`${B}-pagination-dropdown`, st), e.component(`${B}-pagination-select`, lt), e.component(`${B}-dropdown`, yt), e.component(`${B}-dropdown-item`, $t), e.component(`${B}-dropdown-header`, Tt), e.component(`${B}-dropdown-divider`, At), e.component(`${B}-table`, _t), e.component(`${B}-toast`, se);
}
function Kt(e) {
  e.directive("tooltip", Ht);
}
const Jt = {
  install(e) {
    Gt(e), Kt(e);
    const t = ce.getComponent();
    e.provide(re, t);
    const o = ue.getComponent();
    e.provide(ie, o);
  }
};
export {
  Jt as BootstrapVue,
  yt as Dropdown,
  At as DropdownDivider,
  Tt as DropdownHeader,
  $t as DropdownItem,
  ae as Modal,
  Fe as ModalManager,
  st as PageSizeDropdown,
  lt as PageSizeSelect,
  et as Pagination,
  _t as Table,
  W as TableFieldDefinition,
  se as Toast,
  Ae as Toaster,
  Ht as tooltip,
  qt as useModal,
  Xt as useToaster
};
