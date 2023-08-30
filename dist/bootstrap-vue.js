var he = Object.defineProperty;
var _e = (e, t, n) => t in e ? he(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var B = (e, t, n) => (_e(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as O, toRefs as E, ref as A, watch as me, onMounted as Q, openBlock as _, createElementBlock as b, normalizeClass as T, renderSlot as $, createElementVNode as l, toDisplayString as H, createBlock as F, Teleport as oe, Fragment as z, renderList as P, mergeProps as I, computed as L, getCurrentInstance as Z, withModifiers as se, unref as y, createCommentVNode as G, createVNode as ye, watchEffect as be, resolveComponent as ee, withCtx as K, createTextVNode as U, withDirectives as ae, isRef as ke, vModelSelect as $e, resolveDirective as Ce, normalizeProps as we, guardReactiveProps as ge, Transition as xe, inject as le, createApp as re } from "vue";
import { Toast as Se, Modal as Te, Tooltip as Me } from "bootstrap";
const Le = { class: "toast-header" }, Be = ["textContent"], Ae = ["textContent"], De = { class: "toast-body" }, He = ["textContent"], ie = /* @__PURE__ */ O({
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
    const r = e, { visible: i, animation: v, autohide: m, delay: o } = E(r), c = A(), f = A();
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
    function C() {
      c.value.isShown();
    }
    function h() {
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
    function w() {
      n("show", c.value);
    }
    async function M() {
      n("shown", c.value);
    }
    return t({ show: x, hide: p, dispose: k, isShown: C, getOrCreateInstance: h, getInstance: d }), Q(() => {
      f.value.addEventListener("hide.bs.toast", u), f.value.addEventListener("hidden.bs.toast", s), f.value.addEventListener("show.bs.toast", w), f.value.addEventListener("shown.bs.toast", M), c.value = new Se(f.value, {
        animation: v.value,
        autohide: m.value,
        delay: o.value
      }), a();
    }), (g, S) => (_(), b("div", {
      ref_key: "toastRef",
      ref: f,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      $(g.$slots, "header", {}, () => [
        l("div", Le, [
          $(g.$slots, "title", {}, () => [
            l("strong", {
              class: "me-auto",
              textContent: H(e.title)
            }, null, 8, Be)
          ]),
          $(g.$slots, "subtitle", {}, () => [
            l("small", {
              textContent: H(e.subtitle)
            }, null, 8, Ae)
          ]),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: p
          })
        ])
      ]),
      $(g.$slots, "body", {}, () => [
        l("div", De, [
          $(g.$slots, "default", {}, () => [
            l("span", {
              textContent: H(e.body)
            }, null, 8, He)
          ])
        ])
      ])
    ], 2));
  }
});
function Oe() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (n == "x" ? r : r & 3 | 8).toString(16);
  });
}
const ze = { id: "toast-wrapper" };
let te;
const Ee = /* @__PURE__ */ O({
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
      const o = Oe(), c = { ...n, ...v, id: o };
      let f = r.value.get(m);
      f instanceof Set || (f = /* @__PURE__ */ new Set()), f.add(c), r.value.set(m, f);
    };
    function i(v, m) {
      const o = r.value.get(v);
      o == null || o.delete(m);
    }
    return t({ toast: te }), (v, m) => (_(), F(oe, { to: "body" }, [
      l("div", ze, [
        (_(!0), b(z, null, P(r.value, ([o, c]) => (_(), b("div", {
          key: o,
          class: T(["toast-group", `${o}`])
        }, [
          (_(!0), b(z, null, P(c, (f, x) => (_(), F(ie, I({
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
}, Pe = /* @__PURE__ */ N(Ee, [["__scopeId", "data-v-0580e23e"]]);
var R = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(R || {});
const Y = (e, t = "") => {
  let n = e.toLowerCase();
  return !Object.values(R).includes(n) || n == "" ? "" : `${t}${n}`;
}, Re = ["onClick"], Ve = { class: "modal-content" }, Ne = { class: "modal-header" }, Fe = ["innerHTML"], Ie = { class: "modal-body" }, je = ["innerHTML"], Ge = { class: "modal-footer" }, Ke = ["innerHTML"], Ue = ["innerHTML"];
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
      backdrop: r,
      keyboard: i,
      focus: v,
      disableOutsideClick: m,
      size: o,
      btnSize: c
    } = E(n), f = L(() => Y(o.value, "modal-")), x = L(() => Y(c.value, "btn-")), p = A();
    let k;
    Z();
    let C;
    function h() {
      return new Promise((S, W) => {
        const X = j.getLast();
        X && X.hide(), j.addToStack(k), k == null || k.show(), C = S;
      });
    }
    function d(g = !0) {
      j.removeFromStack(k), k == null || k.hide();
      const S = j.getLast();
      S && S.show(), typeof C == "function" && C(g);
    }
    function a() {
      k == null || k.toggle();
    }
    Q(() => {
      k = new Te(p.value, {
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
    function w() {
      d(!1);
    }
    function M() {
      d(!0);
    }
    return t({
      show: h,
      hide: d,
      toggle: a
    }), (g, S) => (_(), b("div", I({
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
        l("div", Ve, [
          l("div", Ne, [
            $(g.$slots, "header", {}, () => [
              l("h5", {
                class: "modal-title",
                innerHTML: e.title
              }, null, 8, Fe)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: s
            })
          ]),
          l("div", Ie, [
            $(g.$slots, "default", {}, () => [
              l("span", { innerHTML: e.body }, null, 8, je)
            ])
          ]),
          l("div", Ge, [
            $(g.$slots, "footer", {}, () => [
              e.okOnly ? G("", !0) : (_(), b("button", {
                key: 0,
                type: "button",
                class: T(["btn btn-secondary", y(x)]),
                onClick: w
              }, [
                $(g.$slots, "button-cancel", {}, () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, Ke)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: T(["btn btn-primary", y(x)]),
                onClick: M
              }, [
                $(g.$slots, "button-ok", {}, () => [
                  l("span", { innerHTML: e.textOk }, null, 8, Ue)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16, Re));
  }
}), Ye = /* @__PURE__ */ O({
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
    return t({ confirm: i, alert: v }), (m, o) => (_(), F(oe, { to: "body" }, [
      ye(ue, I({
        ref_key: "modalRef",
        ref: n
      }, { ...r.value }), null, 16)
    ]));
  }
}), We = { "data-first": "" }, Xe = ["disabled", "innerHTML"], qe = { "data-prev": "" }, Je = ["disabled", "innerHTML"], Qe = { key: 0 }, Ze = ["innerHTML"], et = ["onClick"], tt = { "data-next": "" }, nt = ["disabled", "innerHTML"], ot = { "data-last": "" }, st = ["disabled", "innerHTML"], at = /* @__PURE__ */ O({
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
    function r(s, w = 0) {
      return [...Array(s).keys()].map((M) => M + w);
    }
    const { modelValue: i, maxVisibleButtons: v, hideEllipsis: m } = E(n), o = Math.floor(v.value / 2), c = L(() => {
      let s = v.value, w = i.value <= o ? 1 : i.value - o;
      return i.value >= p.value - o && (w = p.value - s + 1), w < 1 && (w = 1), p.value < s && (s = p.value), r(s, w);
    }), f = L(() => i.value <= 1), x = L(() => i.value >= p.value), p = L(() => {
      const { perPage: s, totalItems: w } = n;
      return Math.ceil(w / s);
    });
    be(() => {
      p.value > 0 && i.value > p.value && t("update:modelValue", p.value);
    });
    function k(s) {
      const w = v.value - 1;
      return !(m.value === !0 || s === 0 && i.value - o - 1 <= 0 || s === w && i.value + o >= p.value || s > 0 && s < w);
    }
    function C(s) {
      s < 1 && (s = 1), s > p.value && (s = p.value), t("update:modelValue", s);
    }
    function h() {
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
    return (s, w) => (_(), b("ul", {
      class: T(["pagination", e.size])
    }, [
      l("li", We, [
        l("button", {
          class: "",
          disabled: y(f),
          innerHTML: e.firstText,
          onClick: h
        }, null, 8, Xe)
      ]),
      l("li", qe, [
        l("button", {
          class: "",
          disabled: y(f),
          innerHTML: e.prevText,
          onClick: a
        }, null, 8, Je)
      ]),
      (_(!0), b(z, null, P(y(c), (M, g) => (_(), b(z, null, [
        k(g) ? (_(), b("li", Qe, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Ze)
        ])) : (_(), b("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === M })
        }, [
          l("button", {
            class: "",
            onClick: (S) => C(M)
          }, H(M), 9, et)
        ], 2))
      ], 64))), 256)),
      l("li", tt, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.nextText,
          onClick: u
        }, null, 8, nt)
      ]),
      l("li", ot, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.lastText,
          onClick: d
        }, null, 8, st)
      ])
    ], 2));
  }
});
const lt = /* @__PURE__ */ N(at, [["__scopeId", "data-v-2bfd7085"]]), rt = { class: "d-inline" }, it = /* @__PURE__ */ l("span", null, "Per page: ", -1), ut = { class: "fw-bold" }, ct = /* @__PURE__ */ O({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: r } = E(n), i = L({
      get: () => n.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    return (v, m) => {
      const o = ee("b-dropdown-item"), c = ee("b-dropdown");
      return _(), F(c, I({
        variant: "outline-primary",
        size: "sm"
      }, { ...v.$attrs }), {
        button: K(() => [
          l("div", rt, [
            $(v.$slots, "default", { selected: y(i) }, () => [
              it,
              l("span", ut, H(y(i)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (_(!0), b(z, null, P(y(r), (f, x) => (_(), F(o, {
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
}), dt = ["value"], ft = /* @__PURE__ */ O({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { options: r } = E(n), i = L({
      get: () => n.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    return (v, m) => ae((_(), b("select", {
      "onUpdate:modelValue": m[0] || (m[0] = (o) => ke(i) ? i.value = o : null)
    }, [
      (_(!0), b(z, null, P(y(r), (o, c) => (_(), b("option", {
        key: o,
        value: o
      }, H(o), 9, dt))), 128))
    ], 512)), [
      [$e, y(i)]
    ]);
  }
});
var V = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(V || {});
class vt {
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
      let { key: p, direction: k, sortFn: C } = x, h = k === "ASC" ? 1 : -1, d = o[p], a = c[p];
      if (C = typeof C == "function" ? C : v(d, a), f = C(d, a, o, c, t, x, h) * h, f !== 0)
        return f;
    }
    return f;
  }), m;
}, pt = ["onClick"], ht = { class: "th-wrapper" }, _t = {
  key: 0,
  "data-sort-indicator": ""
}, mt = { class: "sort-index" }, yt = { class: "sort-direction" }, bt = ["onMouseover"], kt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, $t = ["colspan"], Ct = ["innerHTML"];
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
const wt = /* @__PURE__ */ O({
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
      for (const a of h)
        d = d.concat(Object.keys(a));
      return d = d.filter((a, u) => d.indexOf(a) == u), d;
    }, i = A([]), { fields: v, items: m } = E(n), o = L(() => {
      if (n.externalSort || i.value.length == 0)
        return n.items;
      const h = [...n.items];
      return ne(i.value, h);
    }), c = L(() => {
      let h = v.value, d = [];
      return h.length === 0 && (h = r([...m.value])), h.reduce((a, u, s) => {
        if (typeof u == "string")
          a.push(new q(u, u));
        else if (u instanceof q)
          a.push(u);
        else if (typeof u == "object") {
          const { key: w, label: M, sortable: g, sortFn: S } = u;
          a.push(new q(w, M, g, S));
        }
        return a;
      }, d);
    });
    function f(h) {
      const d = i.value.findIndex((a) => a.key === h.key);
      return d < 0 ? "" : d + 1;
    }
    function x(h) {
      const d = i.value.findIndex((u) => u.key === h.key);
      if (d < 0)
        return "fas fa-sort";
      const a = i.value[d];
      return a.direction === V.ASC ? "fas fa-sort-up" : a.direction === V.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function p(h) {
      const { key: d } = h, a = i.value.findIndex((u) => u.key === d);
      if (a < 0) {
        const u = new vt(d, V.ASC, h.sortFn);
        i.value.push(u);
      } else {
        const u = i.value[a], s = u.direction;
        s === V.ASC ? u.direction = V.DESC : s === V.DESC && i.value.splice(a, 1);
      }
      t("sort", i.value, ne);
    }
    function k(h, d, a, u) {
      t("onMouseOverCell", h, d, a, u);
    }
    let C = A(null);
    return Q(() => {
      C.value = Z();
    }), (h, d) => (_(), b("table", I({ ...h.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (_(!0), b(z, null, P(y(c), (a) => (_(), b("th", {
          key: `thead-${a.key}`,
          class: T({ sortable: a.sortable }),
          onClick: (u) => a.sortable && p(a)
        }, [
          l("span", ht, [
            $(h.$slots, `head(${a.key})`, {
              field: a,
              data: y(C),
              value: a.label
            }, () => [
              U(H(a.label), 1)
            ], !0),
            a.sortable ? (_(), b("span", _t, [
              l("span", mt, H(f(a)), 1),
              l("span", yt, [
                l("i", {
                  class: T(x(a))
                }, null, 2)
              ])
            ])) : G("", !0)
          ])
        ], 10, pt))), 128))
      ]),
      l("tbody", null, [
        (_(!0), b(z, null, P(y(o), (a, u) => (_(), b(z, {
          key: `trow-${(a == null ? void 0 : a.id) ?? u}`
        }, [
          $(h.$slots, "row", {
            item: a,
            index: u,
            colspan: y(c).length
          }, void 0, !0),
          l("tr", null, [
            (_(!0), b(z, null, P(y(c), (s) => (_(), b("td", {
              key: `tcell-${s.key + ((a == null ? void 0 : a.id) ?? u)}`,
              class: T({ [`tcell-${s == null ? void 0 : s.key}`]: !0 }),
              onMouseover: (w) => k(w, a, u, s)
            }, [
              $(h.$slots, `cell(${s == null ? void 0 : s.key})`, {
                data: y(C),
                item: a,
                field: s,
                value: a[s == null ? void 0 : s.key]
              }, () => [
                U(H(a[s == null ? void 0 : s.key]), 1)
              ], !0)
            ], 42, bt))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        $(h.$slots, "footer", { data: y(C) }, void 0, !0)
      ]),
      e.showEmpty && y(o).length === 0 ? (_(), b("tr", kt, [
        l("td", {
          colspan: y(c).length
        }, [
          $(h.$slots, "empty", {
            items: y(o),
            data: y(C),
            fields: y(c)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, Ct)
          ], !0)
        ], 8, $t)
      ])) : G("", !0)
    ], 16));
  }
});
const gt = /* @__PURE__ */ N(wt, [["__scopeId", "data-v-7828e531"]]);
var ce = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ce || {});
const xt = { class: "d-inline-block" }, St = ["disabled"], Tt = /* @__PURE__ */ O({
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
    size: { default: R.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = A(), { variant: r, centered: i, dropup: v, dropend: m, dropstart: o } = E(t), c = A(!1), f = L(() => {
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
    const C = "data-prevent-close";
    function h(u) {
      c.value ? k() : p();
    }
    function d(u) {
      const { target: s } = u;
      (s == null ? void 0 : s.closest(`[${C}],[${C}=true]`)) || k();
    }
    function a() {
      c.value && k();
    }
    return (u, s) => {
      const w = Ce("click-outside");
      return _(), b("div", {
        ref_key: "dropDownRef",
        ref: n,
        class: T(y(x))
      }, [
        ae((_(), b("div", xt, [
          $(u.$slots, "header", we(ge({ buttonClasses: y(f), onButtonClicked: h, disabled: e.disabled })), () => [
            l("button", {
              class: T(["btn dropdown-toggle", y(f)]),
              type: "button",
              "aria-expanded": "false",
              onClick: h,
              disabled: e.disabled
            }, [
              $(u.$slots, "button", {}, () => [
                U(H(e.text), 1)
              ], !0)
            ], 10, St)
          ], !0),
          l("ul", {
            class: T(["dropdown-menu", { show: c.value }]),
            onClick: d
          }, [
            $(u.$slots, "default", {}, void 0, !0)
          ], 2)
        ])), [
          [w, a]
        ])
      ], 2);
    };
  }
});
const Mt = /* @__PURE__ */ N(Tt, [["__scopeId", "data-v-44fcc34b"]]), Lt = ["data-prevent-close"], Bt = /* @__PURE__ */ O({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: n } = E(t);
    return (r, i) => (_(), b("li", {
      "data-prevent-close": y(n) ? "" : null
    }, [
      l("a", {
        class: T(["dropdown-item", { active: e.active }]),
        role: "button",
        tabindex: "0"
      }, [
        $(r.$slots, "default")
      ], 2)
    ], 8, Lt));
  }
}), At = {}, Dt = { "data-prevent-close": "" }, Ht = { class: "dropdown-header" };
function Ot(e, t) {
  return _(), b("li", Dt, [
    l("h6", Ht, [
      $(e.$slots, "default")
    ])
  ]);
}
const zt = /* @__PURE__ */ N(At, [["render", Ot]]), Et = {}, Pt = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Rt = [
  Pt
];
function Vt(e, t) {
  return _(), b("li", null, Rt);
}
const Nt = /* @__PURE__ */ N(Et, [["render", Vt]]), Ft = {
  mounted(e, t, n, r) {
    new Me(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, It = (e, t) => {
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
}, jt = {
  mounted(e, t, n, r) {
    const i = t.value;
    It(e, i);
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
const Gt = ["onClick"], Kt = { class: "drawer-content" }, Ut = { class: "drawer-header" }, Yt = ["innerHTML"], Wt = { class: "drawer-body" }, Xt = ["innerHTML"], qt = { class: "drawer-footer" }, Jt = ["innerHTML"], Qt = ["innerHTML"], Zt = /* @__PURE__ */ O({
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
      backdrop: r,
      keyboard: i,
      focus: v,
      size: m,
      btnSize: o
    } = E(n), c = L(() => Y(m.value, "drawer-")), f = L(() => Y(o.value, "btn-")), x = A(), p = A(!1), k = Z();
    let C;
    async function h() {
      return p.value === !0 ? void 0 : new Promise((W, X) => {
        p.value = !0, C = W;
      });
    }
    function d(S = !0) {
      p.value = !1, typeof C == "function" && C(S);
    }
    function a() {
      p.value === !0 ? h() : d(!1);
    }
    function u(S) {
      (r == null ? void 0 : r.value) !== "static" && d(!1);
    }
    function s() {
      d(!1);
    }
    function w() {
      d(!1);
    }
    function M() {
      d(!0);
    }
    function g() {
      p.value === !0 ? J.add(k) : J.delete(k);
    }
    return t({
      show: h,
      hide: d,
      toggle: a
    }), (S, W) => (_(), F(xe, {
      onBeforeEnter: g,
      onAfterLeave: g
    }, {
      default: K(() => [
        p.value ? (_(), b("div", I({
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
            l("div", Kt, [
              l("div", Ut, [
                $(S.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, Yt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: s
                })
              ]),
              l("div", Wt, [
                $(S.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, Xt)
                ], !0)
              ]),
              l("div", qt, [
                $(S.$slots, "footer", {}, () => [
                  e.okOnly ? G("", !0) : (_(), b("button", {
                    key: 0,
                    type: "button",
                    class: T(["ms-auto btn btn-secondary", y(f)]),
                    onClick: w
                  }, [
                    $(S.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, Jt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: T(["btn btn-primary", y(f)]),
                    onClick: M
                  }, [
                    $(S.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, Qt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Gt)) : G("", !0)
      ]),
      _: 3
    }));
  }
});
const en = /* @__PURE__ */ N(Zt, [["__scopeId", "data-v-2e49e8cb"]]), D = "b", de = "$toaster", fe = "$modalManager";
class ve {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const r = re(Ye).mount(t);
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
      const r = re(Pe).mount(t);
      this.component = r;
    }
    return this.component;
  }
}
B(pe, "component");
function ln() {
  return le(de);
}
function rn() {
  return le(fe);
}
function tn(e) {
  e.component(`${D}-drawer`, en), e.component(`${D}-modal`, ue), e.component(`${D}-pagination`, lt), e.component(`${D}-pagination-dropdown`, ct), e.component(`${D}-pagination-select`, ft), e.component(`${D}-dropdown`, Mt), e.component(`${D}-dropdown-item`, Bt), e.component(`${D}-dropdown-header`, zt), e.component(`${D}-dropdown-divider`, Nt), e.component(`${D}-table`, gt), e.component(`${D}-toast`, ie);
}
function nn(e) {
  e.directive("tooltip", Ft), e.directive("click-outside", jt);
}
const un = {
  install(e) {
    tn(e), nn(e);
    const t = pe.getComponent();
    e.provide(de, t);
    const n = ve.getComponent();
    e.provide(fe, n);
  }
};
export {
  un as BootstrapVue,
  Mt as Dropdown,
  Nt as DropdownDivider,
  zt as DropdownHeader,
  Bt as DropdownItem,
  ue as Modal,
  Ye as ModalManager,
  ct as PageSizeDropdown,
  ft as PageSizeSelect,
  lt as Pagination,
  gt as Table,
  q as TableFieldDefinition,
  ie as Toast,
  Pe as Toaster,
  jt as clickOutside,
  Ft as tooltip,
  rn as useModal,
  ln as useToaster
};
