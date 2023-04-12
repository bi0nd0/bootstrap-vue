var W = Object.defineProperty;
var Y = (e, a, r) => a in e ? W(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r;
var S = (e, a, r) => (Y(e, typeof a != "symbol" ? a + "" : a, r), r);
import { defineComponent as A, toRefs as F, ref as I, watch as Z, onMounted as G, openBlock as b, createElementBlock as m, normalizeClass as T, renderSlot as C, createElementVNode as n, toDisplayString as H, createBlock as O, Teleport as X, Fragment as M, renderList as D, mergeProps as z, computed as B, withModifiers as q, unref as $, createCommentVNode as N, getCurrentInstance as J, createTextVNode as R } from "vue";
import { Toast as ee, Modal as te, Tooltip as ne } from "bootstrap";
const oe = { class: "toast-header" }, se = ["textContent"], ae = ["textContent"], le = { class: "toast-body" }, re = ["textContent"], ue = /* @__PURE__ */ A({
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
  setup(e, { expose: a, emit: r }) {
    const f = e, { visible: i, animation: k, autohide: x, delay: o } = F(f), s = I(), d = I();
    Z(i, (L) => {
      c();
    }, { immediate: !0 });
    function _() {
      s.value.show();
    }
    function h() {
      s.value.hide();
    }
    function g() {
      s.value.dispose();
    }
    function l() {
      s.value.isShown();
    }
    function p() {
      s.value.getOrCreateInstance();
    }
    function t() {
      s.value.getInstance();
    }
    function c() {
      s.value && (i.value === !0 ? _() : h());
    }
    function y() {
      r("hide", s.value);
    }
    function u() {
      r("hidden", s.value);
    }
    function v() {
      r("show", s.value);
    }
    async function w() {
      r("shown", s.value);
    }
    return a({ show: _, hide: h, dispose: g, isShown: l, getOrCreateInstance: p, getInstance: t }), G(() => {
      d.value.addEventListener("hide.bs.toast", y), d.value.addEventListener("hidden.bs.toast", u), d.value.addEventListener("show.bs.toast", v), d.value.addEventListener("shown.bs.toast", w), s.value = new ee(d.value, {
        animation: k.value,
        autohide: x.value,
        delay: o.value
      }), c();
    }), (L, Q) => (b(), m("div", {
      ref_key: "toastRef",
      ref: d,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(L.$slots, "header", {}, () => [
        n("div", oe, [
          C(L.$slots, "title", {}, () => [
            n("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, se)
          ]),
          C(L.$slots, "subtitle", {}, () => [
            n("small", {
              textContent: H(e.subtitle)
            }, null, 8, ae)
          ]),
          n("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: h
          })
        ])
      ]),
      C(L.$slots, "body", {}, () => [
        n("div", le, [
          C(L.$slots, "default", {}, () => [
            n("span", {
              textContent: H(e.body)
            }, null, 8, re)
          ])
        ])
      ])
    ], 2));
  }
});
function ie() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    const f = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (r == "x" ? f : f & 3 | 8).toString(16);
  });
}
const ce = { id: "toast-wrapper" };
let U;
const de = /* @__PURE__ */ A({
  __name: "Toaster",
  setup(e, { expose: a }) {
    const r = {
      visible: !0,
      title: "",
      subtitle: "",
      body: "",
      animation: !0,
      autohide: !0,
      delay: 5e3,
      variant: void 0
    }, f = I(/* @__PURE__ */ new Map());
    U = (k, x = "top right") => {
      const o = ie(), s = { ...r, ...k, id: o };
      let d = f.value.get(x);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(s), f.value.set(x, d);
    };
    function i(k, x) {
      const o = f.value.get(k);
      o == null || o.delete(x);
    }
    return a({ toast: U }), (k, x) => (b(), O(X, { to: "body" }, [
      n("div", ce, [
        (b(!0), m(M, null, D(f.value, ([o, s]) => (b(), m("div", {
          key: o,
          class: T(["toast-group", `${o}`])
        }, [
          (b(!0), m(M, null, D(s, (d, _) => (b(), O(ue, z({
            key: d.id
          }, d, {
            onHidden: (h) => i(o, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const P = (e, a) => {
  const r = e.__vccOpts || e;
  for (const [f, i] of a)
    r[f] = i;
  return r;
}, nt = /* @__PURE__ */ P(de, [["__scopeId", "data-v-177f801e"]]);
var j = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(j || {});
const fe = ["onClick"], ve = { class: "modal-content" }, pe = { class: "modal-header" }, he = ["innerHTML"], _e = { class: "modal-body" }, ye = ["innerHTML"], be = { class: "modal-footer" }, me = ["innerHTML"], ke = ["innerHTML"], ot = /* @__PURE__ */ A({
  __name: "Modal",
  props: {
    title: { type: String, default: "" },
    body: { type: String, default: "" },
    textCancel: { type: String, default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: {
      type: [String, Boolean],
      default: !0
    },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: "",
      validator(e) {
        return Object.values(j).includes(e);
      }
    }
  },
  setup(e, { expose: a }) {
    const r = e, {
      backdrop: f,
      keyboard: i,
      focus: k,
      disableOutsideClick: x,
      size: o
    } = F(r), s = B(() => {
      let v = o.value.toLowerCase();
      return !Object.values(j).includes(v) || v == "" ? "" : `modal-${v}`;
    }), d = I();
    let _, h;
    function g() {
      return new Promise((w, L) => {
        _ == null || _.show(), h = w;
      });
    }
    function l(v = !0) {
      _ == null || _.hide(), typeof h == "function" && h(v);
    }
    function p() {
      _ == null || _.toggle();
    }
    G(() => {
      _ = new te(d.value, {
        backdrop: f == null ? void 0 : f.value,
        keyboard: i.value,
        focus: k.value
      });
    });
    function t(v) {
      (f == null ? void 0 : f.value) !== "static" && l(!1);
    }
    function c() {
      l(!1);
    }
    function y() {
      l(!1);
    }
    function u() {
      l(!0);
    }
    return a({
      show: g,
      hide: l,
      toggle: p
    }), (v, w) => (b(), O(X, { to: "body" }, [
      n("div", z({
        ref_key: "modalElement",
        ref: d,
        class: "modal fade",
        tabindex: "-1"
      }, { ...v.$attrs }, {
        onClick: q(t, ["self"])
      }), [
        n("div", {
          class: T(["modal-dialog", $(s)])
        }, [
          n("div", ve, [
            n("div", pe, [
              C(v.$slots, "header", {}, () => [
                n("h5", {
                  class: "modal-title",
                  innerHTML: e.title
                }, null, 8, he)
              ]),
              n("button", {
                type: "button",
                class: "btn-close",
                "aria-label": "Close",
                onClick: c
              })
            ]),
            n("div", _e, [
              C(v.$slots, "default", {}, () => [
                n("span", { innerHTML: e.body }, null, 8, ye)
              ])
            ]),
            n("div", be, [
              C(v.$slots, "footer", {}, () => [
                e.okOnly ? N("", !0) : (b(), m("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: y
                }, [
                  C(v.$slots, "button-cancel", {}, () => [
                    n("span", { innerHTML: e.textCancel }, null, 8, me)
                  ])
                ])),
                n("button", {
                  type: "button",
                  class: "btn btn-primary",
                  onClick: u
                }, [
                  C(v.$slots, "button-ok", {}, () => [
                    n("span", { innerHTML: e.textOk }, null, 8, ke)
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 16, fe)
    ]));
  }
}), $e = { "data-first": "" }, xe = ["disabled", "innerHTML"], Ce = { "data-prev": "" }, ge = ["disabled", "innerHTML"], we = { key: 0 }, Te = ["innerHTML"], Le = ["onClick"], Be = { "data-next": "" }, Se = ["disabled", "innerHTML"], Me = { "data-last": "" }, He = ["disabled", "innerHTML"], Ee = /* @__PURE__ */ A({
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
  setup(e, { emit: a }) {
    const r = e;
    function f(u, v = 0) {
      return [...Array(u).keys()].map((w) => w + v);
    }
    const { modelValue: i, maxVisibleButtons: k, hideEllipsis: x } = F(r), o = Math.floor(k.value / 2), s = B(() => {
      let u = k.value, v = i.value <= o ? 1 : i.value - o;
      return i.value >= h.value - o && (v = h.value - u + 1), v < 1 && (v = 1), h.value < u && (u = h.value), f(u, v);
    }), d = B(() => i.value <= 1), _ = B(() => i.value >= h.value), h = B(() => {
      const { perPage: u, totalItems: v } = r;
      return Math.ceil(v / u);
    });
    function g(u) {
      const v = k.value - 1;
      return !(x.value === !0 || u === 0 && i.value - o - 1 <= 0 || u === v && i.value + o >= h.value || u > 0 && u < v);
    }
    function l(u) {
      u < 1 && (u = 1), u > h.value && (u = h.value), a("update:modelValue", u);
    }
    function p() {
      a("update:modelValue", 1);
    }
    function t() {
      a("update:modelValue", h.value);
    }
    function c() {
      let u = i.value - 1;
      u < 1 && (u = 1), a("update:modelValue", u);
    }
    function y() {
      let u = i.value + 1;
      u > h.value && (u = h.value), a("update:modelValue", u);
    }
    return (u, v) => (b(), m("ul", {
      class: T(["pagination", e.size])
    }, [
      n("li", $e, [
        n("button", {
          class: "",
          disabled: $(d),
          innerHTML: e.firstText,
          onClick: p
        }, null, 8, xe)
      ]),
      n("li", Ce, [
        n("button", {
          class: "",
          disabled: $(d),
          innerHTML: e.prevText,
          onClick: c
        }, null, 8, ge)
      ]),
      (b(!0), m(M, null, D($(s), (w, L) => (b(), m(M, null, [
        g(L) ? (b(), m("li", we, [
          n("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Te)
        ])) : (b(), m("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === w })
        }, [
          n("button", {
            class: "",
            onClick: (Q) => l(w)
          }, H(w), 9, Le)
        ], 2))
      ], 64))), 256)),
      n("li", Be, [
        n("button", {
          class: "",
          disabled: $(_),
          innerHTML: e.nextText,
          onClick: y
        }, null, 8, Se)
      ]),
      n("li", Me, [
        n("button", {
          class: "",
          disabled: $(_),
          innerHTML: e.lastText,
          onClick: t
        }, null, 8, He)
      ])
    ], 2));
  }
});
const st = /* @__PURE__ */ P(Ee, [["__scopeId", "data-v-30ea78d4"]]);
var E = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(E || {});
class Ie {
  constructor(a, r = "ASC", f) {
    S(this, "key");
    S(this, "direction");
    S(this, "sortFn");
    this.key = a, this.direction = r, this.sortFn = f;
  }
}
const K = (e, a) => {
  const r = (o, s) => {
    let d = typeof o, _ = typeof s;
    return d == "number" && d == _;
  }, f = (o, s) => o - s, i = (o, s) => (o = o ?? "", s = s ?? "", o.localeCompare(s)), k = (o, s) => r(o, s) ? f : i, x = [...a];
  return x.sort((o, s) => {
    let d = 0;
    for (let _ of e) {
      let { key: h, direction: g, sortFn: l } = _, p = g === "ASC" ? 1 : -1, t = o[h], c = s[h];
      if (l = typeof l == "function" ? l : k(t, c), d = l(t, c, o, s, a, _, p) * p, d !== 0)
        return d;
    }
    return d;
  }), x;
}, Ae = ["onClick"], De = { class: "th-wrapper" }, Fe = {
  key: 0,
  "data-sort-indicator": ""
}, Pe = { class: "sort-index" }, Ve = { class: "sort-direction" }, Oe = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Ne = ["colspan"], Re = ["innerHTML"];
class V {
  constructor(a = "", r = "", f = !1, i) {
    S(this, "key");
    // age
    S(this, "label");
    // Person age
    S(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    S(this, "sortFn");
    this.key = a, this.label = r, this.sortable = f, this.sortFn = i;
  }
}
const je = /* @__PURE__ */ A({
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
  setup(e, { emit: a }) {
    const r = e, f = (l) => {
      let p = [];
      for (const t of l)
        p = p.concat(Object.keys(t));
      return p = p.filter((t, c) => p.indexOf(t) == c), p;
    }, i = I([]), { fields: k, items: x } = F(r), o = B(() => {
      if (r.externalSort || i.value.length == 0)
        return r.items;
      const l = [...r.items];
      return K(i.value, l);
    }), s = B(() => {
      let l = k.value, p = [];
      return l.length === 0 && (l = f([...x.value])), l.reduce((t, c, y) => {
        if (typeof c == "string")
          t.push(new V(c, c));
        else if (c instanceof V)
          t.push(c);
        else if (typeof c == "object") {
          const { key: u, label: v, sortable: w, sortFn: L } = c;
          t.push(new V(u, v, w, L));
        }
        return t;
      }, p);
    });
    function d(l) {
      const p = i.value.findIndex((t) => t.key === l.key);
      return p < 0 ? "" : p + 1;
    }
    function _(l) {
      const p = i.value.findIndex((c) => c.key === l.key);
      if (p < 0)
        return "fas fa-sort";
      const t = i.value[p];
      return t.direction === E.ASC ? "fas fa-sort-up" : t.direction === E.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function h(l) {
      const { key: p } = l, t = i.value.findIndex((c) => c.key === p);
      if (t < 0) {
        const c = new Ie(p, E.ASC, l.sortFn);
        i.value.push(c);
      } else {
        const c = i.value[t], y = c.direction;
        y === E.ASC ? c.direction = E.DESC : y === E.DESC && i.value.splice(t, 1);
      }
      a("sort", i.value, K);
    }
    let g = I(null);
    return G(() => {
      g.value = J();
    }), (l, p) => (b(), m("table", z({ ...l.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      n("thead", null, [
        (b(!0), m(M, null, D($(s), (t) => (b(), m("th", {
          key: `thead-${t.key}`,
          class: T({ sortable: t.sortable }),
          onClick: (c) => t.sortable && h(t)
        }, [
          n("span", De, [
            C(l.$slots, `head(${t.key})`, {
              field: t,
              data: $(g),
              value: t.label
            }, () => [
              R(H(t.label), 1)
            ], !0),
            t.sortable ? (b(), m("span", Fe, [
              n("span", Pe, H(d(t)), 1),
              n("span", Ve, [
                n("i", {
                  class: T(_(t))
                }, null, 2)
              ])
            ])) : N("", !0)
          ])
        ], 10, Ae))), 128))
      ]),
      n("tbody", null, [
        (b(!0), m(M, null, D($(o), (t, c) => (b(), m(M, {
          key: `trow-${(t == null ? void 0 : t.id) ?? c}`
        }, [
          C(l.$slots, "row", {
            item: t,
            index: c,
            colspan: $(s).length
          }, void 0, !0),
          n("tr", null, [
            (b(!0), m(M, null, D($(s), (y) => (b(), m("td", {
              key: `tcell-${y.key + ((t == null ? void 0 : t.id) ?? c)}`,
              class: T({ [`tcell-${y == null ? void 0 : y.key}`]: !0 })
            }, [
              C(l.$slots, `cell(${y == null ? void 0 : y.key})`, {
                data: $(g),
                item: t,
                field: y,
                value: t[y == null ? void 0 : y.key]
              }, () => [
                R(H(t[y == null ? void 0 : y.key]), 1)
              ], !0)
            ], 2))), 128))
          ])
        ], 64))), 128))
      ]),
      n("tfoot", null, [
        C(l.$slots, "footer", { data: $(g) }, void 0, !0)
      ]),
      e.showEmpty && $(o).length === 0 ? (b(), m("tr", Oe, [
        n("td", {
          colspan: $(s).length
        }, [
          C(l.$slots, "empty", {
            items: $(o),
            data: $(g),
            fields: $(s)
          }, () => [
            n("span", { innerHTML: e.emptyText }, null, 8, Re)
          ], !0)
        ], 8, Ne)
      ])) : N("", !0)
    ], 16));
  }
});
const at = /* @__PURE__ */ P(je, [["__scopeId", "data-v-5556187e"]]), lt = /* @__PURE__ */ A({
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
    const a = e, { variant: r, centered: f, dropup: i, dropend: k, dropstart: x } = F(a), o = I(!1), s = B(() => {
      const t = [];
      return r.value && t.push(`btn-${r.value}`), t;
    }), d = B(() => {
      const t = [];
      return f.value && t.push("dropdown-center"), i.value && t.push("dropup"), x.value && t.push("dropstart"), !x.value && k.value && t.push("dropend"), t.length === 0 ? t.push("dropdown") : t.unshift("btn-group"), t;
    });
    function _() {
      o.value = !0;
    }
    function h() {
      o.value = !1;
    }
    const g = "data-prevent-close";
    let l;
    function p(t) {
      const { currentTarget: c } = t;
      o.value ? h() : _(), o.value && (l = new AbortController(), setTimeout(() => {
        window.addEventListener("click", (y) => {
          const { target: u } = y;
          u != null && u.closest(`[${g}],[${g}=true]`) || u === c || (h(), l.abort());
        }, { signal: l.signal });
      }, 0));
    }
    return (t, c) => (b(), m("div", {
      class: T($(d))
    }, [
      n("button", {
        class: T(["btn dropdown-toggle", $(s)]),
        type: "button",
        "data-bs-toggle": "aaaadropdown",
        "aria-expanded": "false",
        onClick: p
      }, [
        C(t.$slots, "button", {}, () => [
          R(H(e.text), 1)
        ])
      ], 2),
      n("ul", {
        class: T(["dropdown-menu", { show: o.value }])
      }, [
        C(t.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ge = ["data-prevent-close"], ze = ["onClick"], rt = /* @__PURE__ */ A({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: a }) {
    const r = e, { preventClose: f } = F(r);
    function i() {
      const k = J();
      a("click", k);
    }
    return (k, x) => (b(), m("li", {
      "data-prevent-close": $(f) ? "" : null
    }, [
      n("a", {
        class: T(["dropdown-item", { active: e.active }]),
        href: "#",
        onClick: q(i, ["prevent"])
      }, [
        C(k.$slots, "default")
      ], 10, ze)
    ], 8, Ge));
  }
}), Ue = {}, Ke = { "data-prevent-close": "" }, Xe = { class: "dropdown-header" };
function qe(e, a) {
  return b(), m("li", Ke, [
    n("h6", Xe, [
      C(e.$slots, "default")
    ])
  ]);
}
const ut = /* @__PURE__ */ P(Ue, [["render", qe]]), Je = {}, Qe = /* @__PURE__ */ n("hr", { class: "dropdown-divider" }, null, -1), We = [
  Qe
];
function Ye(e, a) {
  return b(), m("li", null, We);
}
const it = /* @__PURE__ */ P(Je, [["render", Ye]]), ct = {
  mounted(e, a, r, f) {
    new ne(e, {
      title: a.value,
      placement: a.arg,
      trigger: "hover"
    });
  }
};
export {
  lt as Dropdown,
  it as DropdownDivider,
  ut as DropdownHeader,
  rt as DropdownItem,
  ot as Modal,
  st as Pagination,
  at as Table,
  V as TableFieldDefinition,
  ue as Toast,
  nt as Toaster,
  ct as tooltip
};
