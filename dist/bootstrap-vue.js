var re = Object.defineProperty;
var ue = (e, n, a) => n in e ? re(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[n] = a;
var M = (e, n, a) => (ue(e, typeof n != "symbol" ? n + "" : n, a), a);
import { defineComponent as E, toRefs as P, ref as S, watch as ie, onMounted as X, openBlock as _, createElementBlock as $, normalizeClass as T, renderSlot as C, createElementVNode as s, toDisplayString as D, createBlock as G, Teleport as Y, Fragment as A, renderList as V, mergeProps as j, computed as B, getCurrentInstance as q, withModifiers as J, unref as g, createCommentVNode as R, createVNode as ce, watchEffect as de, createTextVNode as U, Transition as fe, withCtx as ve, inject as Z, createApp as ee } from "vue";
import { Toast as pe, Modal as he, Tooltip as me } from "bootstrap";
const ye = { class: "toast-header" }, _e = ["textContent"], be = ["textContent"], ke = { class: "toast-body" }, $e = ["textContent"], te = /* @__PURE__ */ E({
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
  setup(e, { expose: n, emit: a }) {
    const r = e, { visible: u, animation: k, autohide: h, delay: l } = P(r), i = S(), d = S();
    ie(u, (L) => {
      f();
    }, { immediate: !0 });
    function m() {
      i.value.show();
    }
    function v() {
      i.value.hide();
    }
    function w() {
      i.value.dispose();
    }
    function c() {
      i.value.isShown();
    }
    function y() {
      i.value.getOrCreateInstance();
    }
    function t() {
      i.value.getInstance();
    }
    function f() {
      i.value && (u.value === !0 ? m() : v());
    }
    function b() {
      a("hide", i.value);
    }
    function o() {
      a("hidden", i.value);
    }
    function p() {
      a("show", i.value);
    }
    async function x() {
      a("shown", i.value);
    }
    return n({ show: m, hide: v, dispose: w, isShown: c, getOrCreateInstance: y, getInstance: t }), X(() => {
      d.value.addEventListener("hide.bs.toast", b), d.value.addEventListener("hidden.bs.toast", o), d.value.addEventListener("show.bs.toast", p), d.value.addEventListener("shown.bs.toast", x), i.value = new pe(d.value, {
        animation: k.value,
        autohide: h.value,
        delay: l.value
      }), f();
    }), (L, z) => (_(), $("div", {
      ref_key: "toastRef",
      ref: d,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(L.$slots, "header", {}, () => [
        s("div", ye, [
          C(L.$slots, "title", {}, () => [
            s("strong", {
              class: "me-auto",
              textContent: D(e.title)
            }, null, 8, _e)
          ]),
          C(L.$slots, "subtitle", {}, () => [
            s("small", {
              textContent: D(e.subtitle)
            }, null, 8, be)
          ]),
          s("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: v
          })
        ])
      ]),
      C(L.$slots, "body", {}, () => [
        s("div", ke, [
          C(L.$slots, "default", {}, () => [
            s("span", {
              textContent: D(e.body)
            }, null, 8, $e)
          ])
        ])
      ])
    ], 2));
  }
});
function Ce() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (a == "x" ? r : r & 3 | 8).toString(16);
  });
}
const we = { id: "toast-wrapper" };
let Q;
const ge = /* @__PURE__ */ E({
  __name: "Toaster",
  setup(e, { expose: n }) {
    const a = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, r = S(/* @__PURE__ */ new Map());
    Q = (k, h = "top right") => {
      const l = Ce(), i = { ...a, ...k, id: l };
      let d = r.value.get(h);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(i), r.value.set(h, d);
    };
    function u(k, h) {
      const l = r.value.get(k);
      l == null || l.delete(h);
    }
    return n({ toast: Q }), (k, h) => (_(), G(Y, { to: "body" }, [
      s("div", we, [
        (_(!0), $(A, null, V(r.value, ([l, i]) => (_(), $("div", {
          key: l,
          class: T(["toast-group", `${l}`])
        }, [
          (_(!0), $(A, null, V(i, (d, m) => (_(), G(te, j({
            key: d.id
          }, d, {
            onHidden: (v) => u(l, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const F = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [r, u] of n)
    a[r] = u;
  return a;
}, xe = /* @__PURE__ */ F(ge, [["__scopeId", "data-v-177f801e"]]);
var N = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(N || {});
const Te = ["onClick"], Le = { class: "modal-content" }, Me = { class: "modal-header" }, Se = ["innerHTML"], Be = { class: "modal-body" }, He = ["innerHTML"], Ee = { class: "modal-footer" }, Ae = ["innerHTML"], De = ["innerHTML"];
class I {
  static addToStack(n) {
    n != null && this.modalStack.push(n);
  }
  static removeFromStack(n) {
    if (n == null)
      return;
    const a = this.modalStack.indexOf(n);
    a < 0 || (this.modalStack.splice(a, 1), console.log(this.modalStack));
  }
  static getLast() {
    const n = this.modalStack.length;
    if (n !== 0)
      return this.modalStack[n - 1];
  }
}
M(I, "modalStack", new Array());
const ne = /* @__PURE__ */ E({
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
    size: { default: N.STANDARD }
  },
  setup(e, { expose: n }) {
    const a = e, {
      backdrop: r,
      keyboard: u,
      focus: k,
      disableOutsideClick: h,
      size: l
    } = P(a), i = B(() => {
      let p = l.value.toLowerCase();
      return !Object.values(N).includes(p) || p == "" ? "" : `modal-${p}`;
    }), d = S();
    let m;
    q();
    let v;
    function w() {
      return new Promise((x, L) => {
        const z = I.getLast();
        z && z.hide(), I.addToStack(m), m == null || m.show(), v = x;
      });
    }
    function c(p = !0) {
      I.removeFromStack(m), m == null || m.hide();
      const x = I.getLast();
      x && x.show(), typeof v == "function" && v(p);
    }
    function y() {
      m == null || m.toggle();
    }
    X(() => {
      m = new he(d.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: u.value,
        focus: k.value
      });
    });
    function t(p) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function f() {
      c(!1);
    }
    function b() {
      c(!1);
    }
    function o() {
      c(!0);
    }
    return n({
      show: w,
      hide: c,
      toggle: y
    }), (p, x) => (_(), $("div", j({
      ref_key: "modalElement",
      ref: d,
      class: "modal fade",
      tabindex: "-1"
    }, { ...p.$attrs }, {
      onClick: J(t, ["self"])
    }), [
      s("div", {
        class: T(["modal-dialog", g(i)])
      }, [
        s("div", Le, [
          s("div", Me, [
            C(p.$slots, "header", {}, () => [
              s("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Se)
            ]),
            s("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: f
            })
          ]),
          s("div", Be, [
            C(p.$slots, "default", {}, () => [
              s("span", { innerHTML: e.body }, null, 8, He)
            ])
          ]),
          s("div", Ee, [
            C(p.$slots, "footer", {}, () => [
              e.okOnly ? R("", !0) : (_(), $("button", {
                key: 0,
                type: "button",
                class: "btn btn-secondary",
                onClick: b
              }, [
                C(p.$slots, "button-cancel", {}, () => [
                  s("span", { innerHTML: e.textCancel }, null, 8, Ae)
                ])
              ])),
              s("button", {
                type: "button",
                class: "btn btn-primary",
                onClick: o
              }, [
                C(p.$slots, "button-ok", {}, () => [
                  s("span", { innerHTML: e.textOk }, null, 8, De)
                ])
              ])
            ])
          ])
        ])
      ], 2)
    ], 16, Te));
  }
}), Oe = /* @__PURE__ */ E({
  __name: "ModalManager",
  setup(e, { expose: n }) {
    const a = S(void 0), r = S({});
    function u(h = {}) {
      var l;
      return h.okOnly = !1, r.value = h, (l = a.value) == null ? void 0 : l.show();
    }
    function k(h = {}) {
      var l;
      return h.okOnly = !0, r.value = h, (l = a.value) == null ? void 0 : l.show();
    }
    return n({ confirm: u, alert: k }), (h, l) => (_(), G(Y, { to: "body" }, [
      ce(ne, j({
        ref_key: "modalRef",
        ref: a
      }, { ...r.value }), null, 16)
    ]));
  }
}), Pe = { "data-first": "" }, Ve = ["disabled", "innerHTML"], Fe = { "data-prev": "" }, Ie = ["disabled", "innerHTML"], Re = { key: 0 }, Ne = ["innerHTML"], je = ["onClick"], ze = { "data-next": "" }, Ge = ["disabled", "innerHTML"], Ke = { "data-last": "" }, Ue = ["disabled", "innerHTML"], Xe = /* @__PURE__ */ E({
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
    size: {
      default: ""
      /* NORMAL */
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const a = e;
    function r(o, p = 0) {
      return [...Array(o).keys()].map((x) => x + p);
    }
    const { modelValue: u, maxVisibleButtons: k, hideEllipsis: h } = P(a), l = Math.floor(k.value / 2), i = B(() => {
      let o = k.value, p = u.value <= l ? 1 : u.value - l;
      return u.value >= v.value - l && (p = v.value - o + 1), p < 1 && (p = 1), v.value < o && (o = v.value), r(o, p);
    }), d = B(() => u.value <= 1), m = B(() => u.value >= v.value), v = B(() => {
      const { perPage: o, totalItems: p } = a;
      return Math.ceil(p / o);
    });
    de(() => {
      v.value > 0 && u.value > v.value && n("update:modelValue", v.value);
    });
    function w(o) {
      const p = k.value - 1;
      return !(h.value === !0 || o === 0 && u.value - l - 1 <= 0 || o === p && u.value + l >= v.value || o > 0 && o < p);
    }
    function c(o) {
      o < 1 && (o = 1), o > v.value && (o = v.value), n("update:modelValue", o);
    }
    function y() {
      n("update:modelValue", 1);
    }
    function t() {
      n("update:modelValue", v.value);
    }
    function f() {
      let o = u.value - 1;
      o < 1 && (o = 1), n("update:modelValue", o);
    }
    function b() {
      let o = u.value + 1;
      o > v.value && (o = v.value), n("update:modelValue", o);
    }
    return (o, p) => (_(), $("ul", {
      class: T(["pagination", e.size])
    }, [
      s("li", Pe, [
        s("button", {
          class: "",
          disabled: g(d),
          innerHTML: e.firstText,
          onClick: y
        }, null, 8, Ve)
      ]),
      s("li", Fe, [
        s("button", {
          class: "",
          disabled: g(d),
          innerHTML: e.prevText,
          onClick: f
        }, null, 8, Ie)
      ]),
      (_(!0), $(A, null, V(g(i), (x, L) => (_(), $(A, null, [
        w(L) ? (_(), $("li", Re, [
          s("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Ne)
        ])) : (_(), $("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === x })
        }, [
          s("button", {
            class: "",
            onClick: (z) => c(x)
          }, D(x), 9, je)
        ], 2))
      ], 64))), 256)),
      s("li", ze, [
        s("button", {
          class: "",
          disabled: g(m),
          innerHTML: e.nextText,
          onClick: b
        }, null, 8, Ge)
      ]),
      s("li", Ke, [
        s("button", {
          class: "",
          disabled: g(m),
          innerHTML: e.lastText,
          onClick: t
        }, null, 8, Ue)
      ])
    ], 2));
  }
});
const qe = /* @__PURE__ */ F(Xe, [["__scopeId", "data-v-6b815ca0"]]);
var O = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(O || {});
class Je {
  constructor(n, a = "ASC", r) {
    M(this, "key");
    M(this, "direction");
    M(this, "sortFn");
    this.key = n, this.direction = a, this.sortFn = r;
  }
}
const W = (e, n) => {
  const a = (l, i) => {
    let d = typeof l, m = typeof i;
    return d == "number" && d == m;
  }, r = (l, i) => l - i, u = (l, i) => (l = l ?? "", i = i ?? "", l.localeCompare(i)), k = (l, i) => a(l, i) ? r : u, h = [...n];
  return h.sort((l, i) => {
    let d = 0;
    for (let m of e) {
      let { key: v, direction: w, sortFn: c } = m, y = w === "ASC" ? 1 : -1, t = l[v], f = i[v];
      if (c = typeof c == "function" ? c : k(t, f), d = c(t, f, l, i, n, m, y) * y, d !== 0)
        return d;
    }
    return d;
  }), h;
}, Qe = ["onClick"], We = { class: "th-wrapper" }, Ye = {
  key: 0,
  "data-sort-indicator": ""
}, Ze = { class: "sort-index" }, et = { class: "sort-direction" }, tt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, nt = ["colspan"], ot = ["innerHTML"];
class K {
  constructor(n = "", a = "", r = !1, u) {
    M(this, "key");
    // age
    M(this, "label");
    // Person age
    M(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    M(this, "sortFn");
    this.key = n, this.label = a, this.sortable = r, this.sortFn = u;
  }
}
const st = /* @__PURE__ */ E({
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
    const a = e, r = (c) => {
      let y = [];
      for (const t of c)
        y = y.concat(Object.keys(t));
      return y = y.filter((t, f) => y.indexOf(t) == f), y;
    }, u = S([]), { fields: k, items: h } = P(a), l = B(() => {
      if (a.externalSort || u.value.length == 0)
        return a.items;
      const c = [...a.items];
      return W(u.value, c);
    }), i = B(() => {
      let c = k.value, y = [];
      return c.length === 0 && (c = r([...h.value])), c.reduce((t, f, b) => {
        if (typeof f == "string")
          t.push(new K(f, f));
        else if (f instanceof K)
          t.push(f);
        else if (typeof f == "object") {
          const { key: o, label: p, sortable: x, sortFn: L } = f;
          t.push(new K(o, p, x, L));
        }
        return t;
      }, y);
    });
    function d(c) {
      const y = u.value.findIndex((t) => t.key === c.key);
      return y < 0 ? "" : y + 1;
    }
    function m(c) {
      const y = u.value.findIndex((f) => f.key === c.key);
      if (y < 0)
        return "fas fa-sort";
      const t = u.value[y];
      return t.direction === O.ASC ? "fas fa-sort-up" : t.direction === O.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function v(c) {
      const { key: y } = c, t = u.value.findIndex((f) => f.key === y);
      if (t < 0) {
        const f = new Je(y, O.ASC, c.sortFn);
        u.value.push(f);
      } else {
        const f = u.value[t], b = f.direction;
        b === O.ASC ? f.direction = O.DESC : b === O.DESC && u.value.splice(t, 1);
      }
      n("sort", u.value, W);
    }
    let w = S(null);
    return X(() => {
      w.value = q();
    }), (c, y) => (_(), $("table", j({ ...c.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      s("thead", null, [
        (_(!0), $(A, null, V(g(i), (t) => (_(), $("th", {
          key: `thead-${t.key}`,
          class: T({ sortable: t.sortable }),
          onClick: (f) => t.sortable && v(t)
        }, [
          s("span", We, [
            C(c.$slots, `head(${t.key})`, {
              field: t,
              data: g(w),
              value: t.label
            }, () => [
              U(D(t.label), 1)
            ], !0),
            t.sortable ? (_(), $("span", Ye, [
              s("span", Ze, D(d(t)), 1),
              s("span", et, [
                s("i", {
                  class: T(m(t))
                }, null, 2)
              ])
            ])) : R("", !0)
          ])
        ], 10, Qe))), 128))
      ]),
      s("tbody", null, [
        (_(!0), $(A, null, V(g(l), (t, f) => (_(), $(A, {
          key: `trow-${(t == null ? void 0 : t.id) ?? f}`
        }, [
          C(c.$slots, "row", {
            item: t,
            index: f,
            colspan: g(i).length
          }, void 0, !0),
          s("tr", null, [
            (_(!0), $(A, null, V(g(i), (b) => (_(), $("td", {
              key: `tcell-${b.key + ((t == null ? void 0 : t.id) ?? f)}`,
              class: T({ [`tcell-${b == null ? void 0 : b.key}`]: !0 })
            }, [
              C(c.$slots, `cell(${b == null ? void 0 : b.key})`, {
                data: g(w),
                item: t,
                field: b,
                value: t[b == null ? void 0 : b.key]
              }, () => [
                U(D(t[b == null ? void 0 : b.key]), 1)
              ], !0)
            ], 2))), 128))
          ])
        ], 64))), 128))
      ]),
      s("tfoot", null, [
        C(c.$slots, "footer", { data: g(w) }, void 0, !0)
      ]),
      e.showEmpty && g(l).length === 0 ? (_(), $("tr", tt, [
        s("td", {
          colspan: g(i).length
        }, [
          C(c.$slots, "empty", {
            items: g(l),
            data: g(w),
            fields: g(i)
          }, () => [
            s("span", { innerHTML: e.emptyText }, null, 8, ot)
          ], !0)
        ], 8, nt)
      ])) : R("", !0)
    ], 16));
  }
});
const at = /* @__PURE__ */ F(st, [["__scopeId", "data-v-5556187e"]]), lt = /* @__PURE__ */ E({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: {
      default: "primary"
      /* PRIMARY */
    },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean }
  },
  setup(e) {
    const n = e, { variant: a, centered: r, dropup: u, dropend: k, dropstart: h } = P(n), l = S(!1), i = B(() => {
      const t = [];
      return a.value && t.push(`btn-${a.value}`), t;
    }), d = B(() => {
      const t = [];
      return r != null && r.value && t.push("dropdown-center"), u != null && u.value && t.push("dropup"), h != null && h.value && t.push("dropstart"), !(h != null && h.value) && (k != null && k.value) && t.push("dropend"), t.length === 0 ? t.push("dropdown") : t.unshift("btn-group"), t;
    });
    function m() {
      l.value = !0;
    }
    function v() {
      l.value = !1;
    }
    const w = "data-prevent-close";
    let c;
    function y(t) {
      const { currentTarget: f } = t;
      l.value ? v() : m(), l.value && (c = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (b) => {
          const { target: o } = b;
          o != null && o.closest(`[${w}],[${w}=true]`) || o === f || (v(), c.abort());
        }, { signal: c.signal });
      }, 0));
    }
    return (t, f) => (_(), $("div", {
      class: T(g(d))
    }, [
      s("button", {
        class: T(["btn dropdown-toggle", g(i)]),
        type: "button",
        "data-bs-toggle": "aaaadropdown",
        "aria-expanded": "false",
        onClick: y
      }, [
        C(t.$slots, "button", {}, () => [
          U(D(e.text), 1)
        ])
      ], 2),
      s("ul", {
        class: T(["dropdown-menu", { show: l.value }])
      }, [
        C(t.$slots, "default")
      ], 2)
    ], 2));
  }
}), rt = ["data-prevent-close"], ut = ["onClick"], it = /* @__PURE__ */ E({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, { preventClose: r } = P(a);
    function u() {
      const k = q();
      n("click", k);
    }
    return (k, h) => (_(), $("li", {
      "data-prevent-close": g(r) ? "" : null
    }, [
      s("a", {
        class: T(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: J(u, ["prevent"])
      }, [
        C(k.$slots, "default")
      ], 10, ut)
    ], 8, rt));
  }
}), ct = {}, dt = { "data-prevent-close": "" }, ft = { class: "dropdown-header" };
function vt(e, n) {
  return _(), $("li", dt, [
    s("h6", ft, [
      C(e.$slots, "default")
    ])
  ]);
}
const pt = /* @__PURE__ */ F(ct, [["render", vt]]), ht = {}, mt = /* @__PURE__ */ s("hr", { class: "dropdown-divider" }, null, -1), yt = [
  mt
];
function _t(e, n) {
  return _(), $("li", null, yt);
}
const bt = /* @__PURE__ */ F(ht, [["render", _t]]), kt = {
  mounted(e, n, a, r) {
    new me(e, {
      title: n.value,
      placement: n.arg,
      trigger: "hover"
    });
  }
}, $t = ["onClick"], Ct = { class: "drawer-content" }, wt = { class: "drawer-header" }, gt = ["innerHTML"], xt = { class: "drawer-body" }, Tt = ["innerHTML"], Lt = { class: "drawer-footer" }, Mt = ["innerHTML"], St = ["innerHTML"], Bt = /* @__PURE__ */ E({
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
    size: { default: N.STANDARD }
  },
  setup(e, { expose: n }) {
    const a = e, {
      backdrop: r,
      keyboard: u,
      focus: k,
      size: h
    } = P(a), l = B(() => {
      let o = h.value.toLowerCase();
      return !Object.values(N).includes(o) || o == "" ? "" : `drawer-${o}`;
    }), i = S(), d = S(!1);
    let m;
    async function v() {
      return d.value === !0 ? void 0 : new Promise((p, x) => {
        d.value = !0, m = p;
      });
    }
    function w(o = !0) {
      d.value = !1, typeof m == "function" && m(o);
    }
    function c() {
      d.value === !0 ? v() : w(!1);
    }
    function y(o) {
      (r == null ? void 0 : r.value) !== "static" && w(!1);
    }
    function t() {
      w(!1);
    }
    function f() {
      w(!1);
    }
    function b() {
      w(!0);
    }
    return n({
      show: v,
      hide: w,
      toggle: c
    }), (o, p) => (_(), G(fe, null, {
      default: ve(() => [
        d.value ? (_(), $("div", j({
          key: 0,
          ref_key: "drawerElement",
          ref: i,
          class: "drawer",
          tabindex: "-1"
        }, { ...o.$attrs }, {
          onClick: J(y, ["self"])
        }), [
          s("div", {
            class: T(["drawer-dialog", g(l)])
          }, [
            s("div", Ct, [
              s("div", wt, [
                C(o.$slots, "header", {}, () => [
                  s("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, gt)
                ], !0),
                s("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: t
                })
              ]),
              s("div", xt, [
                C(o.$slots, "default", {}, () => [
                  s("span", { innerHTML: e.body }, null, 8, Tt)
                ], !0)
              ]),
              s("div", Lt, [
                C(o.$slots, "footer", {}, () => [
                  e.okOnly ? R("", !0) : (_(), $("button", {
                    key: 0,
                    type: "button",
                    class: "ms-auto btn btn-secondary",
                    onClick: f
                  }, [
                    C(o.$slots, "button-cancel", {}, () => [
                      s("span", { innerHTML: e.textCancel }, null, 8, Mt)
                    ], !0)
                  ])),
                  s("button", {
                    type: "button",
                    class: "btn btn-primary",
                    onClick: b
                  }, [
                    C(o.$slots, "button-ok", {}, () => [
                      s("span", { innerHTML: e.textOk }, null, 8, St)
                    ], !0)
                  ])
                ], !0)
              ])
            ])
          ], 2)
        ], 16, $t)) : R("", !0)
      ]),
      _: 3
    }));
  }
});
const Ht = /* @__PURE__ */ F(Bt, [["__scopeId", "data-v-5e91756e"]]), H = "b", oe = "$toaster", se = "$modalManager";
class ae {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const r = ee(Oe).mount(n);
      this.component = r;
    }
    return this.component;
  }
}
M(ae, "component");
class le {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const r = ee(xe).mount(n);
      this.component = r;
    }
    return this.component;
  }
}
M(le, "component");
function Vt() {
  return Z(oe);
}
function Ft() {
  return Z(se);
}
function Et(e) {
  e.component(`${H}-drawer`, Ht), e.component(`${H}-modal`, ne), e.component(`${H}-pagination`, qe), e.component(`${H}-dropdown`, lt), e.component(`${H}-dropdown-item`, it), e.component(`${H}-dropdown-header`, pt), e.component(`${H}-dropdown-divider`, bt), e.component(`${H}-table`, at), e.component(`${H}-toast`, te);
}
function At(e) {
  e.directive("tooltip", kt);
}
const It = {
  install(e) {
    Et(e), At(e);
    const n = le.getComponent();
    e.provide(oe, n);
    const a = ae.getComponent();
    e.provide(se, a);
  }
};
export {
  It as BootstrapVue,
  lt as Dropdown,
  bt as DropdownDivider,
  pt as DropdownHeader,
  it as DropdownItem,
  ne as Modal,
  Oe as ModalManager,
  qe as Pagination,
  at as Table,
  K as TableFieldDefinition,
  te as Toast,
  xe as Toaster,
  kt as tooltip,
  Ft as useModal,
  Vt as useToaster
};
