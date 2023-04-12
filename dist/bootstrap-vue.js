var oe = Object.defineProperty;
var se = (e, n, s) => n in e ? oe(e, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[n] = s;
var L = (e, n, s) => (se(e, typeof n != "symbol" ? n + "" : n, s), s);
import { defineComponent as D, toRefs as V, ref as S, watch as ae, onMounted as K, openBlock as m, createElementBlock as $, normalizeClass as T, renderSlot as x, createElementVNode as a, toDisplayString as A, createBlock as O, Teleport as U, Fragment as E, renderList as P, mergeProps as R, computed as B, withModifiers as J, unref as C, createCommentVNode as j, createVNode as le, getCurrentInstance as Q, createTextVNode as G, createApp as W } from "vue";
import { Toast as re, Modal as ue, Tooltip as ie } from "bootstrap";
const ce = { class: "toast-header" }, de = ["textContent"], fe = ["textContent"], pe = { class: "toast-body" }, ve = ["textContent"], Y = /* @__PURE__ */ D({
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
  setup(e, { expose: n, emit: s }) {
    const l = e, { visible: i, animation: k, autohide: _, delay: o } = V(l), r = S(), f = S();
    ae(i, (M) => {
      d();
    }, { immediate: !0 });
    function y() {
      r.value.show();
    }
    function h() {
      r.value.hide();
    }
    function g() {
      r.value.dispose();
    }
    function u() {
      r.value.isShown();
    }
    function v() {
      r.value.getOrCreateInstance();
    }
    function t() {
      r.value.getInstance();
    }
    function d() {
      r.value && (i.value === !0 ? y() : h());
    }
    function b() {
      s("hide", r.value);
    }
    function c() {
      s("hidden", r.value);
    }
    function p() {
      s("show", r.value);
    }
    async function w() {
      s("shown", r.value);
    }
    return n({ show: y, hide: h, dispose: g, isShown: u, getOrCreateInstance: v, getInstance: t }), K(() => {
      f.value.addEventListener("hide.bs.toast", b), f.value.addEventListener("hidden.bs.toast", c), f.value.addEventListener("show.bs.toast", p), f.value.addEventListener("shown.bs.toast", w), r.value = new re(f.value, {
        animation: k.value,
        autohide: _.value,
        delay: o.value
      }), d();
    }), (M, ne) => (m(), $("div", {
      ref_key: "toastRef",
      ref: f,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      x(M.$slots, "header", {}, () => [
        a("div", ce, [
          x(M.$slots, "title", {}, () => [
            a("strong", {
              class: "me-auto",
              textContent: A(e.title)
            }, null, 8, de)
          ]),
          x(M.$slots, "subtitle", {}, () => [
            a("small", {
              textContent: A(e.subtitle)
            }, null, 8, fe)
          ]),
          a("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: h
          })
        ])
      ]),
      x(M.$slots, "body", {}, () => [
        a("div", pe, [
          x(M.$slots, "default", {}, () => [
            a("span", {
              textContent: A(e.body)
            }, null, 8, ve)
          ])
        ])
      ])
    ], 2));
  }
});
function he() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(s) {
    const l = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (s == "x" ? l : l & 3 | 8).toString(16);
  });
}
const me = { id: "toast-wrapper" };
let X;
const _e = /* @__PURE__ */ D({
  __name: "Toaster",
  setup(e, { expose: n }) {
    const s = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, l = S(/* @__PURE__ */ new Map());
    X = (k, _ = "top right") => {
      const o = he(), r = { ...s, ...k, id: o };
      let f = l.value.get(_);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(r), l.value.set(_, f);
    };
    function i(k, _) {
      const o = l.value.get(k);
      o == null || o.delete(_);
    }
    return n({ toast: X }), (k, _) => (m(), O(U, { to: "body" }, [
      a("div", me, [
        (m(!0), $(E, null, P(l.value, ([o, r]) => (m(), $("div", {
          key: o,
          class: T(["toast-group", `${o}`])
        }, [
          (m(!0), $(E, null, P(r, (f, y) => (m(), O(Y, R({
            key: f.id
          }, f, {
            onHidden: (h) => i(o, f)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const F = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [l, i] of n)
    s[l] = i;
  return s;
}, ye = /* @__PURE__ */ F(_e, [["__scopeId", "data-v-177f801e"]]);
var z = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(z || {});
const be = ["onClick"], ke = { class: "modal-content" }, $e = { class: "modal-header" }, Ce = ["innerHTML"], xe = { class: "modal-body" }, ge = ["innerHTML"], we = { class: "modal-footer" }, Te = ["innerHTML"], Me = ["innerHTML"], Z = /* @__PURE__ */ D({
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
    size: { default: z.STANDARD }
  },
  setup(e, { expose: n }) {
    const s = e, {
      backdrop: l,
      keyboard: i,
      focus: k,
      disableOutsideClick: _,
      size: o
    } = V(s), r = B(() => {
      let p = o.value.toLowerCase();
      return !Object.values(z).includes(p) || p == "" ? "" : `modal-${p}`;
    }), f = S();
    let y, h;
    function g() {
      return new Promise((w, M) => {
        y == null || y.show(), h = w;
      });
    }
    function u(p = !0) {
      y == null || y.hide(), typeof h == "function" && h(p);
    }
    function v() {
      y == null || y.toggle();
    }
    K(() => {
      y = new ue(f.value, {
        backdrop: l == null ? void 0 : l.value,
        keyboard: i.value,
        focus: k.value
      });
    });
    function t(p) {
      (l == null ? void 0 : l.value) !== "static" && u(!1);
    }
    function d() {
      u(!1);
    }
    function b() {
      u(!1);
    }
    function c() {
      u(!0);
    }
    return n({
      show: g,
      hide: u,
      toggle: v
    }), (p, w) => (m(), O(U, { to: "body" }, [
      a("div", R({
        ref_key: "modalElement",
        ref: f,
        class: "modal fade",
        tabindex: "-1"
      }, { ...p.$attrs }, {
        onClick: J(t, ["self"])
      }), [
        a("div", {
          class: T(["modal-dialog", C(r)])
        }, [
          a("div", ke, [
            a("div", $e, [
              x(p.$slots, "header", {}, () => [
                a("h5", {
                  class: "modal-title",
                  innerHTML: e.title
                }, null, 8, Ce)
              ]),
              a("button", {
                type: "button",
                class: "btn-close",
                "aria-label": "Close",
                onClick: d
              })
            ]),
            a("div", xe, [
              x(p.$slots, "default", {}, () => [
                a("span", { innerHTML: e.body }, null, 8, ge)
              ])
            ]),
            a("div", we, [
              x(p.$slots, "footer", {}, () => [
                e.okOnly ? j("", !0) : (m(), $("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: b
                }, [
                  x(p.$slots, "button-cancel", {}, () => [
                    a("span", { innerHTML: e.textCancel }, null, 8, Te)
                  ])
                ])),
                a("button", {
                  type: "button",
                  class: "btn btn-primary",
                  onClick: c
                }, [
                  x(p.$slots, "button-ok", {}, () => [
                    a("span", { innerHTML: e.textOk }, null, 8, Me)
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 16, be)
    ]));
  }
}), Le = /* @__PURE__ */ D({
  __name: "ModalManager",
  setup(e, { expose: n }) {
    const s = S(void 0), l = S({});
    function i(_ = {}) {
      var o;
      return _.okOnly = !1, l.value = _, (o = s.value) == null ? void 0 : o.show();
    }
    function k(_ = {}) {
      var o;
      return _.okOnly = !0, l.value = _, (o = s.value) == null ? void 0 : o.show();
    }
    return n({ confirm: i, alert: k }), (_, o) => (m(), O(U, { to: "body" }, [
      le(Z, R({
        ref_key: "modalRef",
        ref: s
      }, { ...l.value }), null, 16)
    ]));
  }
}), Be = { "data-first": "" }, Se = ["disabled", "innerHTML"], He = { "data-prev": "" }, Ee = ["disabled", "innerHTML"], Ae = { key: 0 }, De = ["innerHTML"], Ie = ["onClick"], Pe = { "data-next": "" }, Ve = ["disabled", "innerHTML"], Fe = { "data-last": "" }, Oe = ["disabled", "innerHTML"], Re = /* @__PURE__ */ D({
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
    const s = e;
    function l(c, p = 0) {
      return [...Array(c).keys()].map((w) => w + p);
    }
    const { modelValue: i, maxVisibleButtons: k, hideEllipsis: _ } = V(s), o = Math.floor(k.value / 2), r = B(() => {
      let c = k.value, p = i.value <= o ? 1 : i.value - o;
      return i.value >= h.value - o && (p = h.value - c + 1), p < 1 && (p = 1), h.value < c && (c = h.value), l(c, p);
    }), f = B(() => i.value <= 1), y = B(() => i.value >= h.value), h = B(() => {
      const { perPage: c, totalItems: p } = s;
      return Math.ceil(p / c);
    });
    function g(c) {
      const p = k.value - 1;
      return !(_.value === !0 || c === 0 && i.value - o - 1 <= 0 || c === p && i.value + o >= h.value || c > 0 && c < p);
    }
    function u(c) {
      c < 1 && (c = 1), c > h.value && (c = h.value), n("update:modelValue", c);
    }
    function v() {
      n("update:modelValue", 1);
    }
    function t() {
      n("update:modelValue", h.value);
    }
    function d() {
      let c = i.value - 1;
      c < 1 && (c = 1), n("update:modelValue", c);
    }
    function b() {
      let c = i.value + 1;
      c > h.value && (c = h.value), n("update:modelValue", c);
    }
    return (c, p) => (m(), $("ul", {
      class: T(["pagination", e.size])
    }, [
      a("li", Be, [
        a("button", {
          class: "",
          disabled: C(f),
          innerHTML: e.firstText,
          onClick: v
        }, null, 8, Se)
      ]),
      a("li", He, [
        a("button", {
          class: "",
          disabled: C(f),
          innerHTML: e.prevText,
          onClick: d
        }, null, 8, Ee)
      ]),
      (m(!0), $(E, null, P(C(r), (w, M) => (m(), $(E, null, [
        g(M) ? (m(), $("li", Ae, [
          a("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, De)
        ])) : (m(), $("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === w })
        }, [
          a("button", {
            class: "",
            onClick: (ne) => u(w)
          }, A(w), 9, Ie)
        ], 2))
      ], 64))), 256)),
      a("li", Pe, [
        a("button", {
          class: "",
          disabled: C(y),
          innerHTML: e.nextText,
          onClick: b
        }, null, 8, Ve)
      ]),
      a("li", Fe, [
        a("button", {
          class: "",
          disabled: C(y),
          innerHTML: e.lastText,
          onClick: t
        }, null, 8, Oe)
      ])
    ], 2));
  }
});
const Ne = /* @__PURE__ */ F(Re, [["__scopeId", "data-v-30ea78d4"]]);
var I = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(I || {});
class je {
  constructor(n, s = "ASC", l) {
    L(this, "key");
    L(this, "direction");
    L(this, "sortFn");
    this.key = n, this.direction = s, this.sortFn = l;
  }
}
const q = (e, n) => {
  const s = (o, r) => {
    let f = typeof o, y = typeof r;
    return f == "number" && f == y;
  }, l = (o, r) => o - r, i = (o, r) => (o = o ?? "", r = r ?? "", o.localeCompare(r)), k = (o, r) => s(o, r) ? l : i, _ = [...n];
  return _.sort((o, r) => {
    let f = 0;
    for (let y of e) {
      let { key: h, direction: g, sortFn: u } = y, v = g === "ASC" ? 1 : -1, t = o[h], d = r[h];
      if (u = typeof u == "function" ? u : k(t, d), f = u(t, d, o, r, n, y, v) * v, f !== 0)
        return f;
    }
    return f;
  }), _;
}, Ge = ["onClick"], ze = { class: "th-wrapper" }, Ke = {
  key: 0,
  "data-sort-indicator": ""
}, Ue = { class: "sort-index" }, Xe = { class: "sort-direction" }, qe = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Je = ["colspan"], Qe = ["innerHTML"];
class N {
  constructor(n = "", s = "", l = !1, i) {
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
    this.key = n, this.label = s, this.sortable = l, this.sortFn = i;
  }
}
const We = /* @__PURE__ */ D({
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
    const s = e, l = (u) => {
      let v = [];
      for (const t of u)
        v = v.concat(Object.keys(t));
      return v = v.filter((t, d) => v.indexOf(t) == d), v;
    }, i = S([]), { fields: k, items: _ } = V(s), o = B(() => {
      if (s.externalSort || i.value.length == 0)
        return s.items;
      const u = [...s.items];
      return q(i.value, u);
    }), r = B(() => {
      let u = k.value, v = [];
      return u.length === 0 && (u = l([..._.value])), u.reduce((t, d, b) => {
        if (typeof d == "string")
          t.push(new N(d, d));
        else if (d instanceof N)
          t.push(d);
        else if (typeof d == "object") {
          const { key: c, label: p, sortable: w, sortFn: M } = d;
          t.push(new N(c, p, w, M));
        }
        return t;
      }, v);
    });
    function f(u) {
      const v = i.value.findIndex((t) => t.key === u.key);
      return v < 0 ? "" : v + 1;
    }
    function y(u) {
      const v = i.value.findIndex((d) => d.key === u.key);
      if (v < 0)
        return "fas fa-sort";
      const t = i.value[v];
      return t.direction === I.ASC ? "fas fa-sort-up" : t.direction === I.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function h(u) {
      const { key: v } = u, t = i.value.findIndex((d) => d.key === v);
      if (t < 0) {
        const d = new je(v, I.ASC, u.sortFn);
        i.value.push(d);
      } else {
        const d = i.value[t], b = d.direction;
        b === I.ASC ? d.direction = I.DESC : b === I.DESC && i.value.splice(t, 1);
      }
      n("sort", i.value, q);
    }
    let g = S(null);
    return K(() => {
      g.value = Q();
    }), (u, v) => (m(), $("table", R({ ...u.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      a("thead", null, [
        (m(!0), $(E, null, P(C(r), (t) => (m(), $("th", {
          key: `thead-${t.key}`,
          class: T({ sortable: t.sortable }),
          onClick: (d) => t.sortable && h(t)
        }, [
          a("span", ze, [
            x(u.$slots, `head(${t.key})`, {
              field: t,
              data: C(g),
              value: t.label
            }, () => [
              G(A(t.label), 1)
            ], !0),
            t.sortable ? (m(), $("span", Ke, [
              a("span", Ue, A(f(t)), 1),
              a("span", Xe, [
                a("i", {
                  class: T(y(t))
                }, null, 2)
              ])
            ])) : j("", !0)
          ])
        ], 10, Ge))), 128))
      ]),
      a("tbody", null, [
        (m(!0), $(E, null, P(C(o), (t, d) => (m(), $(E, {
          key: `trow-${(t == null ? void 0 : t.id) ?? d}`
        }, [
          x(u.$slots, "row", {
            item: t,
            index: d,
            colspan: C(r).length
          }, void 0, !0),
          a("tr", null, [
            (m(!0), $(E, null, P(C(r), (b) => (m(), $("td", {
              key: `tcell-${b.key + ((t == null ? void 0 : t.id) ?? d)}`,
              class: T({ [`tcell-${b == null ? void 0 : b.key}`]: !0 })
            }, [
              x(u.$slots, `cell(${b == null ? void 0 : b.key})`, {
                data: C(g),
                item: t,
                field: b,
                value: t[b == null ? void 0 : b.key]
              }, () => [
                G(A(t[b == null ? void 0 : b.key]), 1)
              ], !0)
            ], 2))), 128))
          ])
        ], 64))), 128))
      ]),
      a("tfoot", null, [
        x(u.$slots, "footer", { data: C(g) }, void 0, !0)
      ]),
      e.showEmpty && C(o).length === 0 ? (m(), $("tr", qe, [
        a("td", {
          colspan: C(r).length
        }, [
          x(u.$slots, "empty", {
            items: C(o),
            data: C(g),
            fields: C(r)
          }, () => [
            a("span", { innerHTML: e.emptyText }, null, 8, Qe)
          ], !0)
        ], 8, Je)
      ])) : j("", !0)
    ], 16));
  }
});
const Ye = /* @__PURE__ */ F(We, [["__scopeId", "data-v-5556187e"]]), Ze = /* @__PURE__ */ D({
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
    const n = e, { variant: s, centered: l, dropup: i, dropend: k, dropstart: _ } = V(n), o = S(!1), r = B(() => {
      const t = [];
      return s.value && t.push(`btn-${s.value}`), t;
    }), f = B(() => {
      const t = [];
      return l.value && t.push("dropdown-center"), i.value && t.push("dropup"), _.value && t.push("dropstart"), !_.value && k.value && t.push("dropend"), t.length === 0 ? t.push("dropdown") : t.unshift("btn-group"), t;
    });
    function y() {
      o.value = !0;
    }
    function h() {
      o.value = !1;
    }
    const g = "data-prevent-close";
    let u;
    function v(t) {
      const { currentTarget: d } = t;
      o.value ? h() : y(), o.value && (u = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (b) => {
          const { target: c } = b;
          c != null && c.closest(`[${g}],[${g}=true]`) || c === d || (h(), u.abort());
        }, { signal: u.signal });
      }, 0));
    }
    return (t, d) => (m(), $("div", {
      class: T(C(f))
    }, [
      a("button", {
        class: T(["btn dropdown-toggle", C(r)]),
        type: "button",
        "data-bs-toggle": "aaaadropdown",
        "aria-expanded": "false",
        onClick: v
      }, [
        x(t.$slots, "button", {}, () => [
          G(A(e.text), 1)
        ])
      ], 2),
      a("ul", {
        class: T(["dropdown-menu", { show: o.value }])
      }, [
        x(t.$slots, "default")
      ], 2)
    ], 2));
  }
}), et = ["data-prevent-close"], tt = ["onClick"], nt = /* @__PURE__ */ D({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const s = e, { preventClose: l } = V(s);
    function i() {
      const k = Q();
      n("click", k);
    }
    return (k, _) => (m(), $("li", {
      "data-prevent-close": C(l) ? "" : null
    }, [
      a("a", {
        class: T(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: J(i, ["prevent"])
      }, [
        x(k.$slots, "default")
      ], 10, tt)
    ], 8, et));
  }
}), ot = {}, st = { "data-prevent-close": "" }, at = { class: "dropdown-header" };
function lt(e, n) {
  return m(), $("li", st, [
    a("h6", at, [
      x(e.$slots, "default")
    ])
  ]);
}
const rt = /* @__PURE__ */ F(ot, [["render", lt]]), ut = {}, it = /* @__PURE__ */ a("hr", { class: "dropdown-divider" }, null, -1), ct = [
  it
];
function dt(e, n) {
  return m(), $("li", null, ct);
}
const ft = /* @__PURE__ */ F(ut, [["render", dt]]), pt = {
  mounted(e, n, s, l) {
    new ie(e, {
      title: n.value,
      placement: n.arg,
      trigger: "hover"
    });
  }
}, H = "b", vt = "$toaster", ht = "$modalManager";
class ee {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const l = W(Le).mount(n);
      this.component = l;
    }
    return this.component;
  }
}
L(ee, "component");
class te {
  static getComponent() {
    if (!this.component) {
      const n = document.createElement("div");
      document.body.appendChild(n);
      const l = W(ye).mount(n);
      this.component = l;
    }
    return this.component;
  }
}
L(te, "component");
function mt(e) {
  e.component(`${H}-modal`, Z), e.component(`${H}-pagination`, Ne), e.component(`${H}-dropdown`, Ze), e.component(`${H}-dropdown-item`, nt), e.component(`${H}-dropdown-header`, rt), e.component(`${H}-dropdown-divider`, ft), e.component(`${H}-table`, Ye), e.component(`${H}-toast`, Y);
}
function _t(e) {
  e.directive("tooltip", pt);
}
const $t = {
  install(e) {
    mt(e), _t(e);
    const n = te.getComponent();
    e.provide(vt, n);
    const s = ee.getComponent();
    e.provide(ht, s);
  }
};
export {
  $t as BootstrapVue,
  Ze as Dropdown,
  ft as DropdownDivider,
  rt as DropdownHeader,
  nt as DropdownItem,
  Z as Modal,
  Le as ModalManager,
  Ne as Pagination,
  Ye as Table,
  N as TableFieldDefinition,
  Y as Toast,
  ye as Toaster,
  pt as tooltip
};
