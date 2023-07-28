var he = Object.defineProperty;
var _e = (e, t, o) => t in e ? he(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var B = (e, t, o) => (_e(e, typeof t != "symbol" ? t + "" : t, o), o);
import { defineComponent as O, toRefs as z, ref as H, watch as me, onMounted as Q, openBlock as m, createElementBlock as b, normalizeClass as T, renderSlot as $, createElementVNode as l, toDisplayString as D, createBlock as N, Teleport as oe, Fragment as E, renderList as P, mergeProps as F, computed as L, getCurrentInstance as Z, withModifiers as se, unref as y, createCommentVNode as G, createVNode as ye, watchEffect as be, resolveComponent as ee, withCtx as K, createTextVNode as U, withDirectives as ae, isRef as ke, vModelSelect as $e, resolveDirective as Ce, Transition as we, inject as le, createApp as re } from "vue";
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
  setup(e, { expose: t, emit: o }) {
    const r = e, { visible: i, animation: f, autohide: p, delay: s } = z(r), u = H(), d = H();
    me(i, (w) => {
      n();
    }, { immediate: !0 });
    function x() {
      u.value.show();
    }
    function v() {
      u.value.hide();
    }
    function k() {
      u.value.dispose();
    }
    function C() {
      u.value.isShown();
    }
    function _() {
      u.value.getOrCreateInstance();
    }
    function c() {
      u.value.getInstance();
    }
    function n() {
      u.value && (i.value === !0 ? x() : v());
    }
    function h() {
      o("hide", u.value);
    }
    function a() {
      o("hidden", u.value);
    }
    function g() {
      o("show", u.value);
    }
    async function M() {
      o("shown", u.value);
    }
    return t({ show: x, hide: v, dispose: k, isShown: C, getOrCreateInstance: _, getInstance: c }), Q(() => {
      d.value.addEventListener("hide.bs.toast", h), d.value.addEventListener("hidden.bs.toast", a), d.value.addEventListener("show.bs.toast", g), d.value.addEventListener("shown.bs.toast", M), u.value = new ge(d.value, {
        animation: f.value,
        autohide: p.value,
        delay: s.value
      }), n();
    }), (w, S) => (m(), b("div", {
      ref_key: "toastRef",
      ref: d,
      class: T(["toast", [e.variant ? `text-bg-${e.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      $(w.$slots, "header", {}, () => [
        l("div", Te, [
          $(w.$slots, "title", {}, () => [
            l("strong", {
              class: "me-auto",
              textContent: D(e.title)
            }, null, 8, Me)
          ]),
          $(w.$slots, "subtitle", {}, () => [
            l("small", {
              textContent: D(e.subtitle)
            }, null, 8, Le)
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
        l("div", Be, [
          $(w.$slots, "default", {}, () => [
            l("span", {
              textContent: D(e.body)
            }, null, 8, Ae)
          ])
        ])
      ])
    ], 2));
  }
});
function De() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const r = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (o == "x" ? r : r & 3 | 8).toString(16);
  });
}
const He = { id: "toast-wrapper" };
let te;
const Oe = /* @__PURE__ */ O({
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
    }, r = H(/* @__PURE__ */ new Map());
    te = (f, p = "top right") => {
      const s = De(), u = { ...o, ...f, id: s };
      let d = r.value.get(p);
      d instanceof Set || (d = /* @__PURE__ */ new Set()), d.add(u), r.value.set(p, d);
    };
    function i(f, p) {
      const s = r.value.get(f);
      s == null || s.delete(p);
    }
    return t({ toast: te }), (f, p) => (m(), N(oe, { to: "body" }, [
      l("div", He, [
        (m(!0), b(E, null, P(r.value, ([s, u]) => (m(), b("div", {
          key: s,
          class: T(["toast-group", `${s}`])
        }, [
          (m(!0), b(E, null, P(u, (d, x) => (m(), N(ie, F({
            key: d.id
          }, d, {
            onHidden: (v) => i(s, d)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const I = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, i] of t)
    o[r] = i;
  return o;
}, Ee = /* @__PURE__ */ I(Oe, [["__scopeId", "data-v-177f801e"]]);
var V = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(V || {});
const Y = (e, t = "") => {
  let o = e.toLowerCase();
  return !Object.values(V).includes(o) || o == "" ? "" : `${t}${o}`;
}, ze = ["onClick"], Pe = { class: "modal-content" }, Ve = { class: "modal-header" }, Re = ["innerHTML"], Ne = { class: "modal-body" }, Fe = ["innerHTML"], Ie = { class: "modal-footer" }, je = ["innerHTML"], Ge = ["innerHTML"];
class j {
  static addToStack(t) {
    t != null && this.modalStack.push(t);
  }
  static removeFromStack(t) {
    if (t == null)
      return;
    const o = this.modalStack.indexOf(t);
    o < 0 || this.modalStack.splice(o, 1);
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
    size: { default: V.STANDARD },
    btnSize: { default: V.SMALL }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: r,
      keyboard: i,
      focus: f,
      disableOutsideClick: p,
      size: s,
      btnSize: u
    } = z(o), d = L(() => Y(s.value, "modal-")), x = L(() => Y(u.value, "btn-")), v = H();
    let k;
    Z();
    let C;
    function _() {
      return new Promise((S, W) => {
        const X = j.getLast();
        X && X.hide(), j.addToStack(k), k == null || k.show(), C = S;
      });
    }
    function c(w = !0) {
      j.removeFromStack(k), k == null || k.hide();
      const S = j.getLast();
      S && S.show(), typeof C == "function" && C(w);
    }
    function n() {
      k == null || k.toggle();
    }
    Q(() => {
      k = new xe(v.value, {
        backdrop: r == null ? void 0 : r.value,
        keyboard: i.value,
        focus: f.value
      });
    });
    function h(w) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function a() {
      c(!1);
    }
    function g() {
      c(!1);
    }
    function M() {
      c(!0);
    }
    return t({
      show: _,
      hide: c,
      toggle: n
    }), (w, S) => (m(), b("div", F({
      ref_key: "modalElement",
      ref: v,
      class: "modal fade",
      tabindex: "-1"
    }, { ...w.$attrs }, {
      onClick: se(h, ["self"])
    }), [
      l("div", {
        class: T(["modal-dialog", y(d)])
      }, [
        l("div", Pe, [
          l("div", Ve, [
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
              onClick: a
            })
          ]),
          l("div", Ne, [
            $(w.$slots, "default", {}, () => [
              l("span", { innerHTML: e.body }, null, 8, Fe)
            ])
          ]),
          l("div", Ie, [
            $(w.$slots, "footer", {}, () => [
              e.okOnly ? G("", !0) : (m(), b("button", {
                key: 0,
                type: "button",
                class: T(["btn btn-secondary", y(x)]),
                onClick: g
              }, [
                $(w.$slots, "button-cancel", {}, () => [
                  l("span", { innerHTML: e.textCancel }, null, 8, je)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: T(["btn btn-primary", y(x)]),
                onClick: M
              }, [
                $(w.$slots, "button-ok", {}, () => [
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
    const o = H(void 0), r = H({});
    function i(p = {}) {
      var s;
      return p.okOnly = !1, r.value = p, (s = o.value) == null ? void 0 : s.show();
    }
    function f(p = {}) {
      var s;
      return p.okOnly = !0, r.value = p, (s = o.value) == null ? void 0 : s.show();
    }
    return t({ confirm: i, alert: f }), (p, s) => (m(), N(oe, { to: "body" }, [
      ye(ue, F({
        ref_key: "modalRef",
        ref: o
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
    size: { default: V.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function r(a, g = 0) {
      return [...Array(a).keys()].map((M) => M + g);
    }
    const { modelValue: i, maxVisibleButtons: f, hideEllipsis: p } = z(o), s = Math.floor(f.value / 2), u = L(() => {
      let a = f.value, g = i.value <= s ? 1 : i.value - s;
      return i.value >= v.value - s && (g = v.value - a + 1), g < 1 && (g = 1), v.value < a && (a = v.value), r(a, g);
    }), d = L(() => i.value <= 1), x = L(() => i.value >= v.value), v = L(() => {
      const { perPage: a, totalItems: g } = o;
      return Math.ceil(g / a);
    });
    be(() => {
      v.value > 0 && i.value > v.value && t("update:modelValue", v.value);
    });
    function k(a) {
      const g = f.value - 1;
      return !(p.value === !0 || a === 0 && i.value - s - 1 <= 0 || a === g && i.value + s >= v.value || a > 0 && a < g);
    }
    function C(a) {
      a < 1 && (a = 1), a > v.value && (a = v.value), t("update:modelValue", a);
    }
    function _() {
      t("update:modelValue", 1);
    }
    function c() {
      t("update:modelValue", v.value);
    }
    function n() {
      let a = i.value - 1;
      a < 1 && (a = 1), t("update:modelValue", a);
    }
    function h() {
      let a = i.value + 1;
      a > v.value && (a = v.value), t("update:modelValue", a);
    }
    return (a, g) => (m(), b("ul", {
      class: T(["pagination", e.size])
    }, [
      l("li", Ue, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.firstText,
          onClick: _
        }, null, 8, Ye)
      ]),
      l("li", We, [
        l("button", {
          class: "",
          disabled: y(d),
          innerHTML: e.prevText,
          onClick: n
        }, null, 8, Xe)
      ]),
      (m(!0), b(E, null, P(y(u), (M, w) => (m(), b(E, null, [
        k(w) ? (m(), b("li", qe, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: e.ellipsisText
          }, null, 8, Je)
        ])) : (m(), b("li", {
          key: 1,
          "data-prev": "",
          class: T({ active: e.modelValue === M })
        }, [
          l("button", {
            class: "",
            onClick: (S) => C(M)
          }, D(M), 9, Qe)
        ], 2))
      ], 64))), 256)),
      l("li", Ze, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.nextText,
          onClick: h
        }, null, 8, et)
      ]),
      l("li", tt, [
        l("button", {
          class: "",
          disabled: y(x),
          innerHTML: e.lastText,
          onClick: c
        }, null, 8, nt)
      ])
    ], 2));
  }
});
const st = /* @__PURE__ */ I(ot, [["__scopeId", "data-v-2bfd7085"]]), at = { class: "d-inline" }, lt = /* @__PURE__ */ l("span", null, "Per page: ", -1), rt = { class: "fw-bold" }, it = /* @__PURE__ */ O({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, { options: r } = z(o), i = L({
      get: () => o.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    return (f, p) => {
      const s = ee("b-dropdown-item"), u = ee("b-dropdown");
      return m(), N(u, F({
        variant: "outline-primary",
        size: "sm"
      }, { ...f.$attrs }), {
        button: K(() => [
          l("div", at, [
            $(f.$slots, "default", { selected: y(i) }, () => [
              lt,
              l("span", rt, D(y(i)), 1)
            ])
          ])
        ]),
        default: K(() => [
          (m(!0), b(E, null, P(y(r), (d, x) => (m(), N(s, {
            key: d,
            onClick: (v) => i.value = d,
            active: d === e.modelValue
          }, {
            default: K(() => [
              U(D(d), 1)
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
    const o = e, { options: r } = z(o), i = L({
      get: () => o.modelValue,
      set: (f) => t("update:modelValue", f)
    });
    return (f, p) => ae((m(), b("select", {
      "onUpdate:modelValue": p[0] || (p[0] = (s) => ke(i) ? i.value = s : null)
    }, [
      (m(!0), b(E, null, P(y(r), (s, u) => (m(), b("option", {
        key: s,
        value: s
      }, D(s), 9, ut))), 128))
    ], 512)), [
      [$e, y(i)]
    ]);
  }
});
var R = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(R || {});
class dt {
  constructor(t, o = "ASC", r) {
    B(this, "key");
    B(this, "direction");
    B(this, "sortFn");
    this.key = t, this.direction = o, this.sortFn = r;
  }
}
const ne = (e, t) => {
  const o = (s, u) => {
    let d = typeof s, x = typeof u;
    return d == "number" && d == x;
  }, r = (s, u) => s - u, i = (s, u) => (s = s ?? "", u = u ?? "", s.localeCompare(u)), f = (s, u) => o(s, u) ? r : i, p = [...t];
  return p.sort((s, u) => {
    let d = 0;
    for (let x of e) {
      let { key: v, direction: k, sortFn: C } = x, _ = k === "ASC" ? 1 : -1, c = s[v], n = u[v];
      if (C = typeof C == "function" ? C : f(c, n), d = C(c, n, s, u, t, x, _) * _, d !== 0)
        return d;
    }
    return d;
  }), p;
}, ft = ["onClick"], vt = { class: "th-wrapper" }, pt = {
  key: 0,
  "data-sort-indicator": ""
}, ht = { class: "sort-index" }, _t = { class: "sort-direction" }, mt = ["onMouseover"], yt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, bt = ["colspan"], kt = ["innerHTML"];
class q {
  constructor(t = "", o = "", r = !1, i) {
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
    this.key = t, this.label = o, this.sortable = r, this.sortFn = i;
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
    const o = e, r = (_) => {
      let c = [];
      for (const n of _)
        c = c.concat(Object.keys(n));
      return c = c.filter((n, h) => c.indexOf(n) == h), c;
    }, i = H([]), { fields: f, items: p } = z(o), s = L(() => {
      if (o.externalSort || i.value.length == 0)
        return o.items;
      const _ = [...o.items];
      return ne(i.value, _);
    }), u = L(() => {
      let _ = f.value, c = [];
      return _.length === 0 && (_ = r([...p.value])), _.reduce((n, h, a) => {
        if (typeof h == "string")
          n.push(new q(h, h));
        else if (h instanceof q)
          n.push(h);
        else if (typeof h == "object") {
          const { key: g, label: M, sortable: w, sortFn: S } = h;
          n.push(new q(g, M, w, S));
        }
        return n;
      }, c);
    });
    function d(_) {
      const c = i.value.findIndex((n) => n.key === _.key);
      return c < 0 ? "" : c + 1;
    }
    function x(_) {
      const c = i.value.findIndex((h) => h.key === _.key);
      if (c < 0)
        return "fas fa-sort";
      const n = i.value[c];
      return n.direction === R.ASC ? "fas fa-sort-up" : n.direction === R.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function v(_) {
      const { key: c } = _, n = i.value.findIndex((h) => h.key === c);
      if (n < 0) {
        const h = new dt(c, R.ASC, _.sortFn);
        i.value.push(h);
      } else {
        const h = i.value[n], a = h.direction;
        a === R.ASC ? h.direction = R.DESC : a === R.DESC && i.value.splice(n, 1);
      }
      t("sort", i.value, ne);
    }
    function k(_, c, n, h) {
      t("onMouseOverCell", _, c, n, h);
    }
    let C = H(null);
    return Q(() => {
      C.value = Z();
    }), (_, c) => (m(), b("table", F({ ..._.$attrs }, {
      class: { striped: e.striped, hover: e.hover }
    }), [
      l("thead", null, [
        (m(!0), b(E, null, P(y(u), (n) => (m(), b("th", {
          key: `thead-${n.key}`,
          class: T({ sortable: n.sortable }),
          onClick: (h) => n.sortable && v(n)
        }, [
          l("span", vt, [
            $(_.$slots, `head(${n.key})`, {
              field: n,
              data: y(C),
              value: n.label
            }, () => [
              U(D(n.label), 1)
            ], !0),
            n.sortable ? (m(), b("span", pt, [
              l("span", ht, D(d(n)), 1),
              l("span", _t, [
                l("i", {
                  class: T(x(n))
                }, null, 2)
              ])
            ])) : G("", !0)
          ])
        ], 10, ft))), 128))
      ]),
      l("tbody", null, [
        (m(!0), b(E, null, P(y(s), (n, h) => (m(), b(E, {
          key: `trow-${(n == null ? void 0 : n.id) ?? h}`
        }, [
          $(_.$slots, "row", {
            item: n,
            index: h,
            colspan: y(u).length
          }, void 0, !0),
          l("tr", null, [
            (m(!0), b(E, null, P(y(u), (a) => (m(), b("td", {
              key: `tcell-${a.key + ((n == null ? void 0 : n.id) ?? h)}`,
              class: T({ [`tcell-${a == null ? void 0 : a.key}`]: !0 }),
              onMouseover: (g) => k(g, n, h, a)
            }, [
              $(_.$slots, `cell(${a == null ? void 0 : a.key})`, {
                data: y(C),
                item: n,
                field: a,
                value: n[a == null ? void 0 : a.key]
              }, () => [
                U(D(n[a == null ? void 0 : a.key]), 1)
              ], !0)
            ], 42, mt))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        $(_.$slots, "footer", { data: y(C) }, void 0, !0)
      ]),
      e.showEmpty && y(s).length === 0 ? (m(), b("tr", yt, [
        l("td", {
          colspan: y(u).length
        }, [
          $(_.$slots, "empty", {
            items: y(s),
            data: y(C),
            fields: y(u)
          }, () => [
            l("span", { innerHTML: e.emptyText }, null, 8, kt)
          ], !0)
        ], 8, bt)
      ])) : G("", !0)
    ], 16));
  }
});
const Ct = /* @__PURE__ */ I($t, [["__scopeId", "data-v-7828e531"]]);
var ce = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(ce || {});
const wt = { class: "d-inline-block" }, gt = /* @__PURE__ */ O({
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
    size: { default: V.STANDARD }
  },
  setup(e) {
    const t = e, { variant: o, centered: r, dropup: i, dropend: f, dropstart: p } = z(t), s = H(!1), u = L(() => {
      const n = [];
      return o != null && o.value && n.push(`btn-${o.value}`), t.size && n.push(`btn-${t.size}`), n;
    }), d = L(() => {
      const n = [];
      return r != null && r.value && n.push("dropdown-center"), i != null && i.value && n.push("dropup"), p != null && p.value && n.push("dropstart"), !(p != null && p.value) && (f != null && f.value) && n.push("dropend"), n.length === 0 ? n.push("dropdown") : n.unshift("btn-group"), n;
    });
    function x() {
      s.value = !0;
    }
    function v() {
      s.value = !1;
    }
    const k = "data-prevent-close";
    function C(n) {
      s.value ? v() : x();
    }
    function _(n) {
      const { target: h } = n;
      (h == null ? void 0 : h.closest(`[${k}],[${k}=true]`)) || v();
    }
    function c() {
      s.value && v();
    }
    return (n, h) => {
      const a = Ce("click-outside");
      return m(), b("div", {
        class: T(y(d))
      }, [
        ae((m(), b("div", wt, [
          l("button", {
            class: T(["btn dropdown-toggle", y(u)]),
            type: "button",
            "aria-expanded": "false",
            onClick: C
          }, [
            $(n.$slots, "button", {}, () => [
              U(D(e.text), 1)
            ])
          ], 2),
          l("ul", {
            class: T(["dropdown-menu", { show: s.value }]),
            onClick: _
          }, [
            $(n.$slots, "default")
          ], 2)
        ])), [
          [a, c]
        ])
      ], 2);
    };
  }
}), xt = ["data-prevent-close"], St = /* @__PURE__ */ O({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  emits: ["click", "item-click"],
  setup(e, { emit: t }) {
    const o = e, { preventClose: r } = z(o);
    return (i, f) => (m(), b("li", {
      "data-prevent-close": y(r) ? "" : null
    }, [
      l("a", {
        class: T(["dropdown-item", { active: e.active }]),
        href: "#"
      }, [
        $(i.$slots, "default")
      ], 2)
    ], 8, xt));
  }
}), Tt = {}, Mt = { "data-prevent-close": "" }, Lt = { class: "dropdown-header" };
function Bt(e, t) {
  return m(), b("li", Mt, [
    l("h6", Lt, [
      $(e.$slots, "default")
    ])
  ]);
}
const At = /* @__PURE__ */ I(Tt, [["render", Bt]]), Dt = {}, Ht = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Ot = [
  Ht
];
function Et(e, t) {
  return m(), b("li", null, Ot);
}
const zt = /* @__PURE__ */ I(Dt, [["render", Et]]), Pt = {
  mounted(e, t, o, r) {
    new Se(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Vt = (e, t) => {
  function o(f, p) {
    for (; f !== null; ) {
      if (f === p)
        return !0;
      f = f.parentNode;
    }
    return !1;
  }
  const r = new AbortController();
  function i(f, p) {
    document.addEventListener("click", function(s) {
      const u = s.target;
      f && (o(u, f) || p());
    }, { signal: r.signal });
  }
  return i(e, t), r;
}, Rt = {
  mounted(e, t, o, r) {
    const i = t.value;
    Vt(e, i);
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
const Nt = ["onClick"], Ft = { class: "drawer-content" }, It = { class: "drawer-header" }, jt = ["innerHTML"], Gt = { class: "drawer-body" }, Kt = ["innerHTML"], Ut = { class: "drawer-footer" }, Yt = ["innerHTML"], Wt = ["innerHTML"], Xt = /* @__PURE__ */ O({
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
    const o = e, {
      backdrop: r,
      keyboard: i,
      focus: f,
      size: p,
      btnSize: s
    } = z(o), u = L(() => Y(p.value, "drawer-")), d = L(() => Y(s.value, "btn-")), x = H(), v = H(!1), k = Z();
    let C;
    async function _() {
      return v.value === !0 ? void 0 : new Promise((W, X) => {
        v.value = !0, C = W;
      });
    }
    function c(S = !0) {
      v.value = !1, typeof C == "function" && C(S);
    }
    function n() {
      v.value === !0 ? _() : c(!1);
    }
    function h(S) {
      (r == null ? void 0 : r.value) !== "static" && c(!1);
    }
    function a() {
      c(!1);
    }
    function g() {
      c(!1);
    }
    function M() {
      c(!0);
    }
    function w() {
      v.value === !0 ? J.add(k) : J.delete(k);
    }
    return t({
      show: _,
      hide: c,
      toggle: n
    }), (S, W) => (m(), N(we, {
      onBeforeEnter: w,
      onAfterLeave: w
    }, {
      default: K(() => [
        v.value ? (m(), b("div", F({
          key: 0,
          ref_key: "drawerElement",
          ref: x,
          class: "drawer",
          tabindex: "-1"
        }, { ...S.$attrs }, {
          onClick: se(h, ["self"])
        }), [
          l("div", {
            class: T(["drawer-dialog", y(u)])
          }, [
            l("div", Ft, [
              l("div", It, [
                $(S.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: e.title
                  }, null, 8, jt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: a
                })
              ]),
              l("div", Gt, [
                $(S.$slots, "default", {}, () => [
                  l("span", { innerHTML: e.body }, null, 8, Kt)
                ], !0)
              ]),
              l("div", Ut, [
                $(S.$slots, "footer", {}, () => [
                  e.okOnly ? G("", !0) : (m(), b("button", {
                    key: 0,
                    type: "button",
                    class: T(["ms-auto btn btn-secondary", y(d)]),
                    onClick: g
                  }, [
                    $(S.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: e.textCancel }, null, 8, Yt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: T(["btn btn-primary", y(d)]),
                    onClick: M
                  }, [
                    $(S.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: e.textOk }, null, 8, Wt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16, Nt)) : G("", !0)
      ]),
      _: 3
    }));
  }
});
const qt = /* @__PURE__ */ I(Xt, [["__scopeId", "data-v-2e49e8cb"]]), A = "b", de = "$toaster", fe = "$modalManager";
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
function nn() {
  return le(de);
}
function on() {
  return le(fe);
}
function Jt(e) {
  e.component(`${A}-drawer`, qt), e.component(`${A}-modal`, ue), e.component(`${A}-pagination`, st), e.component(`${A}-pagination-dropdown`, it), e.component(`${A}-pagination-select`, ct), e.component(`${A}-dropdown`, gt), e.component(`${A}-dropdown-item`, St), e.component(`${A}-dropdown-header`, At), e.component(`${A}-dropdown-divider`, zt), e.component(`${A}-table`, Ct), e.component(`${A}-toast`, ie);
}
function Qt(e) {
  e.directive("tooltip", Pt), e.directive("click-outside", Rt);
}
const sn = {
  install(e) {
    Jt(e), Qt(e);
    const t = pe.getComponent();
    e.provide(de, t);
    const o = ve.getComponent();
    e.provide(fe, o);
  }
};
export {
  sn as BootstrapVue,
  gt as Dropdown,
  zt as DropdownDivider,
  At as DropdownHeader,
  St as DropdownItem,
  ue as Modal,
  Ke as ModalManager,
  it as PageSizeDropdown,
  ct as PageSizeSelect,
  st as Pagination,
  Ct as Table,
  q as TableFieldDefinition,
  ie as Toast,
  Ee as Toaster,
  Rt as clickOutside,
  Pt as tooltip,
  on as useModal,
  nn as useToaster
};
