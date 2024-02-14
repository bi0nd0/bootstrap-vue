var $e = Object.defineProperty;
var we = (e, t, o) => t in e ? $e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var O = (e, t, o) => (we(e, typeof t != "symbol" ? t + "" : t, o), o);
import { defineComponent as R, toRefs as V, ref as H, watch as Ce, onMounted as te, openBlock as m, createElementBlock as w, normalizeClass as L, renderSlot as C, normalizeProps as D, guardReactiveProps as A, createElementVNode as l, toDisplayString as z, createBlock as K, Teleport as ie, Fragment as P, renderList as N, mergeProps as U, computed as B, getCurrentInstance as ne, watchEffect as ue, withModifiers as ce, createCommentVNode as X, createVNode as ge, resolveComponent as se, withCtx as q, unref as G, createTextVNode as J, withDirectives as de, vModelSelect as Se, resolveDirective as Te, Transition as Me, inject as pe, createApp as fe } from "vue";
import { Toast as xe, Modal as Le, Tooltip as Be } from "bootstrap";
const De = { class: "toast-header" }, Ae = ["textContent"], He = ["textContent"], Oe = { class: "toast-body" }, Ee = ["textContent"], ze = /* @__PURE__ */ R({
  __name: "Toast",
  props: {
    visible: { type: Boolean, default: !1 },
    title: { default: "" },
    subtitle: { default: "" },
    body: { default: "" },
    animation: { type: Boolean, default: !0 },
    autohide: { type: Boolean, default: !0 },
    delay: { default: 15e3 },
    variant: {}
  },
  emits: ["hide", "hidden", "show", "shown"],
  setup(e, { expose: t, emit: o }) {
    const a = e, f = o, { visible: r, animation: v, autohide: d, delay: u } = V(a), p = H(), b = H();
    Ce(r, (S) => {
      s();
    }, { immediate: !0 });
    function g() {
      p.value.show();
    }
    function $() {
      p.value.hide();
    }
    function M() {
      p.value.dispose();
    }
    function _() {
      p.value.isShown();
    }
    function i() {
      p.value.getOrCreateInstance();
    }
    function y() {
      p.value.getInstance();
    }
    function s() {
      p.value && (r.value === !0 ? g() : $());
    }
    function h() {
      f("hide", p.value);
    }
    function n() {
      f("hidden", p.value);
    }
    function c() {
      f("show", p.value);
    }
    async function T() {
      f("shown", p.value);
    }
    const k = { show: g, hide: $, dispose: M, isShown: _, getOrCreateInstance: i, getInstance: y };
    return t({ ...k }), te(() => {
      b.value.addEventListener("hide.bs.toast", h), b.value.addEventListener("hidden.bs.toast", n), b.value.addEventListener("show.bs.toast", c), b.value.addEventListener("shown.bs.toast", T), p.value = new xe(b.value, {
        animation: v.value,
        autohide: d.value,
        delay: u.value
      }), s();
    }), (S, x) => (m(), w("div", {
      ref_key: "toastRef",
      ref: b,
      class: L(["toast", [S.variant ? `text-bg-${S.variant}` : ""]]),
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true"
    }, [
      C(S.$slots, "header", D(A({ ...k })), () => [
        l("div", De, [
          C(S.$slots, "title", D(A({ ...k })), () => [
            l("strong", {
              class: "me-auto",
              textContent: z(S.title)
            }, null, 8, Ae)
          ], !0),
          C(S.$slots, "subtitle", D(A({ ...k })), () => [
            l("small", {
              textContent: z(S.subtitle)
            }, null, 8, He)
          ], !0),
          l("button", {
            type: "button",
            class: "btn-close",
            "aria-label": "Close",
            onClick: $
          })
        ])
      ], !0),
      C(S.$slots, "body", D(A({ ...k })), () => [
        l("div", Oe, [
          C(S.$slots, "default", D(A({ ...k })), () => [
            l("span", {
              textContent: z(S.body)
            }, null, 8, Ee)
          ], !0)
        ])
      ], !0)
    ], 2));
  }
});
const F = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, f] of t)
    o[a] = f;
  return o;
}, ve = /* @__PURE__ */ F(ze, [["__scopeId", "data-v-c0cdbae8"]]);
function Re() {
  let e = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o) {
    const a = (e + Math.random() * 16) % 16 | 0;
    return e = Math.floor(e / 16), (o == "x" ? a : a & 3 | 8).toString(16);
  });
}
const Pe = { id: "toast-wrapper" };
let ae;
const Ve = /* @__PURE__ */ R({
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
    }, a = H(/* @__PURE__ */ new Map());
    ae = (r, v = "top right") => {
      const d = Re(), u = { ...o, ...r, id: d };
      let p = a.value.get(v);
      p instanceof Set || (p = /* @__PURE__ */ new Set()), p.add(u), a.value.set(v, p);
    };
    function f(r, v) {
      const d = a.value.get(r);
      d == null || d.delete(v);
    }
    return t({ toast: ae }), (r, v) => (m(), K(ie, { to: "body" }, [
      l("div", Pe, [
        (m(!0), w(P, null, N(a.value, ([d, u]) => (m(), w("div", {
          key: d,
          class: L(["toast-group", `${d}`])
        }, [
          (m(!0), w(P, null, N(u, (p, b) => (m(), K(ve, U({
            key: p.id
          }, p, {
            onHidden: (g) => f(d, p)
          }), null, 16, ["onHidden"]))), 128))
        ], 2))), 128))
      ])
    ]));
  }
});
const Ne = /* @__PURE__ */ F(Ve, [["__scopeId", "data-v-786d1c50"]]);
var I = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(I || {});
const Q = (e, t = "") => {
  let o = e.toLowerCase();
  return !Object.values(I).includes(o) || o == "" ? "" : `${t}${o}`;
}, Ie = { class: "modal-content" }, Fe = { class: "modal-header" }, je = ["innerHTML"], Ge = { class: "modal-body" }, Ke = ["innerHTML"], Ue = { class: "modal-footer" }, Ye = ["innerHTML"], We = ["innerHTML"];
class W {
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
O(W, "modalStack", new Array());
const _e = /* @__PURE__ */ R({
  __name: "Modal",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { type: [Boolean, String], default: !0 },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    size: { default: I.STANDARD },
    btnSize: { default: I.SMALL },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["onShown", "onHidden"],
  setup(e, { expose: t, emit: o }) {
    const a = e, {
      backdrop: f,
      keyboard: r,
      focus: v,
      disableOutsideClick: d,
      size: u,
      btnSize: p
    } = V(a), b = o, g = B(() => Q(u.value, "modal-")), $ = B(() => Q(p.value, "btn-")), M = H();
    let _;
    ne();
    let i;
    function y() {
      return new Promise((Y, sn) => {
        const oe = W.getLast();
        oe && oe.hide(), W.addToStack(_), _ == null || _.show(), i = Y, b("onShown", _);
      });
    }
    function s(x = !0) {
      W.removeFromStack(_), _ == null || _.hide();
      const Y = W.getLast();
      Y && Y.show(), typeof i == "function" && i(x), b("onHidden", _);
    }
    function h() {
      _ == null || _.toggle();
    }
    te(() => {
      _ = new Le(M.value, {
        backdrop: f == null ? void 0 : f.value,
        keyboard: r.value,
        focus: v.value
      }), ue(() => {
        (a == null ? void 0 : a.visible) === !0 ? _ == null || _.show() : _ == null || _.hide();
      });
    });
    function n(x) {
      (f == null ? void 0 : f.value) !== "static" && s(!1);
    }
    function c() {
      s(!1);
    }
    function T() {
      s(!1);
    }
    function k() {
      s(!0);
    }
    t({
      modal: _,
      show: y,
      hide: s,
      toggle: h,
      onHeaderCloseClicked: c,
      onCancelClicked: T,
      onOkCLicked: k
    });
    const S = { show: y, hide: s, toggle: h, modal: _ };
    return (x, Y) => (m(), w("div", U({
      ref_key: "modalElement",
      ref: M,
      class: "modal fade",
      tabindex: "-1"
    }, { ...x.$attrs }, {
      onClick: ce(n, ["self"])
    }), [
      l("div", {
        class: L(["modal-dialog", g.value])
      }, [
        l("div", Ie, [
          l("div", Fe, [
            C(x.$slots, "header", D(A({ ...S })), () => [
              l("h5", {
                class: "modal-title",
                innerHTML: x.title
              }, null, 8, je)
            ]),
            l("button", {
              type: "button",
              class: "btn-close",
              "aria-label": "Close",
              onClick: c
            })
          ]),
          l("div", Ge, [
            C(x.$slots, "default", D(A({ ...S })), () => [
              l("span", { innerHTML: x.body }, null, 8, Ke)
            ])
          ]),
          l("div", Ue, [
            C(x.$slots, "footer", D(A({ ...S })), () => [
              x.okOnly ? X("", !0) : (m(), w("button", {
                key: 0,
                type: "button",
                class: L(["btn btn-secondary", $.value]),
                onClick: T
              }, [
                C(x.$slots, "button-cancel", D(A({ ...S })), () => [
                  l("span", { innerHTML: x.textCancel }, null, 8, Ye)
                ])
              ], 2)),
              l("button", {
                type: "button",
                class: L(["btn btn-primary", $.value]),
                onClick: k
              }, [
                C(x.$slots, "button-ok", D(A({ ...S })), () => [
                  l("span", { innerHTML: x.textOk }, null, 8, We)
                ])
              ], 2)
            ])
          ])
        ])
      ], 2)
    ], 16));
  }
}), Xe = /* @__PURE__ */ R({
  __name: "ModalManager",
  setup(e, { expose: t }) {
    const o = H(void 0), a = H({});
    function f(v = {}) {
      var d;
      return v.okOnly = !1, a.value = v, (d = o.value) == null ? void 0 : d.show();
    }
    function r(v = {}) {
      var d;
      return v.okOnly = !0, a.value = v, (d = o.value) == null ? void 0 : d.show();
    }
    return t({ confirm: f, alert: r }), (v, d) => (m(), K(ie, { to: "body" }, [
      ge(_e, U({
        ref_key: "modalRef",
        ref: o
      }, { ...a.value }), null, 16)
    ]));
  }
}), qe = { "data-first": "" }, Je = ["disabled", "innerHTML"], Qe = { "data-prev": "" }, Ze = ["disabled", "innerHTML"], et = { key: 0 }, tt = ["innerHTML"], nt = ["onClick"], ot = { "data-next": "" }, st = ["disabled", "innerHTML"], at = { "data-last": "" }, lt = ["disabled", "innerHTML"], rt = /* @__PURE__ */ R({
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
    size: { default: I.STANDARD }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    function o(n, c = 0) {
      return [...Array(n).keys()].map((T) => T + c);
    }
    const a = t, f = e, { modelValue: r, maxVisibleButtons: v, hideEllipsis: d } = V(f), u = Math.floor(v.value / 2), p = B(() => {
      let n = v.value, c = r.value <= u ? 1 : r.value - u;
      return r.value >= $.value - u && (c = $.value - n + 1), c < 1 && (c = 1), $.value < n && (n = $.value), o(n, c);
    }), b = B(() => r.value <= 1), g = B(() => r.value >= $.value), $ = B(() => {
      const { perPage: n, totalItems: c } = f;
      return Math.ceil(c / n);
    });
    ue(() => {
      $.value > 0 && r.value > $.value && a("update:modelValue", $.value);
    });
    function M(n) {
      const c = v.value - 1;
      return !(d.value === !0 || n === 0 && r.value - u - 1 <= 0 || n === c && r.value + u >= $.value || n > 0 && n < c);
    }
    function _(n) {
      n < 1 && (n = 1), n > $.value && (n = $.value), a("update:modelValue", n);
    }
    function i() {
      a("update:modelValue", 1);
    }
    function y() {
      a("update:modelValue", $.value);
    }
    function s() {
      let n = r.value - 1;
      n < 1 && (n = 1), a("update:modelValue", n);
    }
    function h() {
      let n = r.value + 1;
      n > $.value && (n = $.value), a("update:modelValue", n);
    }
    return (n, c) => (m(), w("ul", {
      class: L(["pagination", n.size])
    }, [
      l("li", qe, [
        l("button", {
          class: "",
          disabled: b.value,
          innerHTML: n.firstText,
          onClick: i
        }, null, 8, Je)
      ]),
      l("li", Qe, [
        l("button", {
          class: "",
          disabled: b.value,
          innerHTML: n.prevText,
          onClick: s
        }, null, 8, Ze)
      ]),
      (m(!0), w(P, null, N(p.value, (T, k) => (m(), w(P, null, [
        M(k) ? (m(), w("li", et, [
          l("button", {
            disabled: "",
            class: "",
            innerHTML: n.ellipsisText
          }, null, 8, tt)
        ])) : (m(), w("li", {
          key: 1,
          "data-prev": "",
          class: L({ active: n.modelValue === T })
        }, [
          l("button", {
            class: "",
            onClick: (S) => _(T)
          }, z(T), 9, nt)
        ], 2))
      ], 64))), 256)),
      l("li", ot, [
        l("button", {
          class: "",
          disabled: g.value,
          innerHTML: n.nextText,
          onClick: h
        }, null, 8, st)
      ]),
      l("li", at, [
        l("button", {
          class: "",
          disabled: g.value,
          innerHTML: n.lastText,
          onClick: y
        }, null, 8, lt)
      ])
    ], 2));
  }
});
const it = /* @__PURE__ */ F(rt, [["__scopeId", "data-v-2bfd7085"]]), ut = { class: "d-inline" }, ct = /* @__PURE__ */ l("span", null, "Per page: ", -1), dt = { class: "fw-bold" }, pt = /* @__PURE__ */ R({
  __name: "PageSizeDropdown",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, { options: f } = V(o), r = B({
      get: () => o.modelValue,
      set: (v) => a("update:modelValue", v)
    });
    return (v, d) => {
      const u = se("b-dropdown-item"), p = se("b-dropdown");
      return m(), K(p, U({
        variant: "outline-primary",
        size: "sm"
      }, { ...v.$attrs }), {
        button: q(() => [
          l("div", ut, [
            C(v.$slots, "default", { selected: r.value }, () => [
              ct,
              l("span", dt, z(r.value), 1)
            ])
          ])
        ]),
        default: q(() => [
          (m(!0), w(P, null, N(G(f), (b, g) => (m(), K(u, {
            key: b,
            onClick: ($) => r.value = b,
            active: b === v.modelValue
          }, {
            default: q(() => [
              J(z(b), 1)
            ]),
            _: 2
          }, 1032, ["onClick", "active"]))), 128))
        ]),
        _: 3
      }, 16);
    };
  }
}), ft = ["value"], vt = /* @__PURE__ */ R({
  __name: "PageSizeSelect",
  props: {
    options: { default: () => [25, 50, 100] },
    modelValue: { default: 50 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, { options: f } = V(o), r = B({
      get: () => o.modelValue,
      set: (v) => a("update:modelValue", v)
    });
    return (v, d) => de((m(), w("select", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => r.value = u)
    }, [
      (m(!0), w(P, null, N(G(f), (u, p) => (m(), w("option", {
        key: u,
        value: u
      }, z(u), 9, ft))), 128))
    ], 512)), [
      [Se, r.value]
    ]);
  }
});
var j = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e.IGNORE = "IGNORE", e))(j || {});
class _t {
  constructor(t, o = "ASC", a) {
    O(this, "key");
    O(this, "direction");
    O(this, "sortFn");
    this.key = t, this.direction = o, this.sortFn = a;
  }
}
const le = (e, t) => {
  const o = (d, u) => {
    let p = typeof d, b = typeof u;
    return p == "number" && p == b;
  }, a = (d, u) => d - u, f = (d, u) => (d = d ?? "", u = u ?? "", d.localeCompare(u)), r = (d, u) => o(d, u) ? a : f, v = [...t];
  return v.sort((d, u) => {
    let p = 0;
    for (let b of e) {
      let { key: g, direction: $, sortFn: M } = b, _ = $ === "ASC" ? 1 : -1, i = d[g], y = u[g];
      if (M = typeof M == "function" ? M : r(i, y), p = M(i, y, d, u, t, b, _) * _, p !== 0)
        return p;
    }
    return p;
  }), v;
}, ht = ["onClick"], mt = { class: "th-wrapper" }, yt = {
  key: 0,
  "data-sort-indicator": ""
}, bt = { class: "sort-index" }, kt = { class: "sort-direction" }, $t = ["onMouseover"], wt = {
  key: 0,
  class: "p-5 text-muted font-italic"
}, Ct = ["colspan"], gt = ["innerHTML"];
class Z {
  constructor(t = "", o = "", a = !1, f) {
    O(this, "key");
    // age
    O(this, "label");
    // Person age
    O(this, "sortable");
    // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    O(this, "sortFn");
    this.key = t, this.label = o, this.sortable = a, this.sortFn = f;
  }
}
const St = /* @__PURE__ */ R({
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
    const o = (i) => {
      let y = [];
      for (const s of i)
        y = y.concat(Object.keys(s));
      return y = y.filter((s, h) => y.indexOf(s) == h), y;
    }, a = t, f = e, r = H([]), { fields: v, items: d } = V(f), u = B(() => {
      if (f.externalSort || r.value.length == 0)
        return f.items;
      const i = [...f.items];
      return le(r.value, i);
    }), p = B(() => {
      let i = v.value, y = [];
      return i.length === 0 && (i = o([...d.value])), i.reduce((s, h, n) => {
        if (typeof h == "string")
          s.push(new Z(h, h));
        else if (h instanceof Z)
          s.push(h);
        else if (typeof h == "object") {
          const { key: c, label: T, sortable: k, sortFn: S } = h;
          s.push(new Z(c, T, k, S));
        }
        return s;
      }, y);
    });
    function b(i) {
      const y = r.value.findIndex((s) => s.key === i.key);
      return y < 0 ? "" : y + 1;
    }
    function g(i) {
      const y = r.value.findIndex((h) => h.key === i.key);
      if (y < 0)
        return "fas fa-sort";
      const s = r.value[y];
      return s.direction === j.ASC ? "fas fa-sort-up" : s.direction === j.DESC ? "fas fa-sort-down" : "far fa-exclamation-triangle";
    }
    function $(i) {
      const { key: y } = i, s = r.value.findIndex((h) => h.key === y);
      if (s < 0) {
        const h = new _t(y, j.ASC, i.sortFn);
        r.value.push(h);
      } else {
        const h = r.value[s], n = h.direction;
        n === j.ASC ? h.direction = j.DESC : n === j.DESC && r.value.splice(s, 1);
      }
      a("sort", r.value, le);
    }
    function M(i, y, s, h) {
      a("onMouseOverCell", i, y, s, h);
    }
    let _ = H(null);
    return te(() => {
      _.value = ne();
    }), (i, y) => (m(), w("table", U({ ...i.$attrs }, {
      class: { striped: i.striped, hover: i.hover }
    }), [
      l("thead", null, [
        (m(!0), w(P, null, N(p.value, (s) => (m(), w("th", {
          key: `thead-${s.key}`,
          class: L({ sortable: s.sortable }),
          onClick: (h) => s.sortable && $(s)
        }, [
          l("span", mt, [
            C(i.$slots, `head(${s.key})`, {
              field: s,
              data: G(_),
              value: s.label
            }, () => [
              J(z(s.label), 1)
            ], !0),
            s.sortable ? (m(), w("span", yt, [
              l("span", bt, z(b(s)), 1),
              l("span", kt, [
                l("i", {
                  class: L(g(s))
                }, null, 2)
              ])
            ])) : X("", !0)
          ])
        ], 10, ht))), 128))
      ]),
      l("tbody", null, [
        (m(!0), w(P, null, N(u.value, (s, h) => (m(), w(P, {
          key: `trow-${(s == null ? void 0 : s.id) ?? h}`
        }, [
          C(i.$slots, "row", {
            item: s,
            index: h,
            colspan: p.value.length
          }, void 0, !0),
          l("tr", null, [
            (m(!0), w(P, null, N(p.value, (n) => (m(), w("td", {
              key: `tcell-${n.key + ((s == null ? void 0 : s.id) ?? h)}`,
              class: L({ [`tcell-${n == null ? void 0 : n.key}`]: !0 }),
              onMouseover: (c) => M(c, s, h, n)
            }, [
              C(i.$slots, `cell(${n == null ? void 0 : n.key})`, {
                data: G(_),
                item: s,
                field: n,
                value: s[n == null ? void 0 : n.key]
              }, () => [
                J(z(s[n == null ? void 0 : n.key]), 1)
              ], !0)
            ], 42, $t))), 128))
          ])
        ], 64))), 128))
      ]),
      l("tfoot", null, [
        C(i.$slots, "footer", { data: G(_) }, void 0, !0)
      ]),
      i.showEmpty && u.value.length === 0 ? (m(), w("tr", wt, [
        l("td", {
          colspan: p.value.length
        }, [
          C(i.$slots, "empty", {
            items: u.value,
            data: G(_),
            fields: p.value
          }, () => [
            l("span", { innerHTML: i.emptyText }, null, 8, gt)
          ], !0)
        ], 8, Ct)
      ])) : X("", !0)
    ], 16));
  }
});
const Tt = /* @__PURE__ */ F(St, [["__scopeId", "data-v-b1e9b5de"]]);
var he = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.WARNING = "warning", e.DANGER = "danger", e.INFO = "info", e))(he || {});
const Mt = { class: "d-inline-block position-relative" }, xt = ["disabled"], re = "data-prevent-close", Lt = /* @__PURE__ */ R({
  __name: "Dropdown",
  props: {
    text: { default: "" },
    variant: { default: he.PRIMARY },
    right: { type: Boolean, default: !1 },
    top: { type: Boolean, default: !1 },
    centered: { type: Boolean },
    dropup: { type: Boolean },
    dropend: { type: Boolean },
    dropstart: { type: Boolean },
    menuEnd: { type: Boolean, default: !1 },
    size: { default: I.STANDARD },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = H(), o = e, a = H(), { variant: f, centered: r, dropup: v, dropend: d, dropstart: u, menuEnd: p } = V(o), b = H(!1), g = B(() => {
      const c = [];
      return f != null && f.value && c.push(`btn-${f.value}`), o.size && c.push(`btn-${o.size}`), c;
    }), $ = B(() => {
      const c = [];
      return r != null && r.value && c.push("dropdown-center"), v != null && v.value && c.push("dropup"), u != null && u.value && c.push("dropstart"), !(u != null && u.value) && (d != null && d.value) && c.push("dropend"), c.length === 0 ? c.push("dropdown") : c.unshift("btn-group"), c;
    }), M = B(() => {
      const c = [];
      return b.value && c.push("show"), p.value && c.push("dropdown-menu-end"), c;
    });
    function _() {
      b.value = !0;
    }
    function i() {
      b.value = !1;
    }
    function y(c) {
      b.value ? i() : _();
    }
    function s(c) {
      const { target: T } = c;
      (T == null ? void 0 : T.closest(`[${re}],[${re}=true]`)) || i();
    }
    function h() {
      b.value && i();
    }
    const n = {
      show: b,
      disabled: o.disabled,
      buttonClasses: g,
      onButtonClicked: y,
      onMenuClicked: s,
      onClickOutside: h,
      open: _,
      close: i
    };
    return (c, T) => {
      const k = Te("click-outside");
      return m(), w("div", {
        ref_key: "dropDownRef",
        ref: a,
        class: L($.value)
      }, [
        de((m(), w("div", Mt, [
          C(c.$slots, "header", D(A({ ...n })), () => [
            l("button", {
              class: L(["btn dropdown-toggle", g.value]),
              type: "button",
              "aria-expanded": "false",
              onClick: y,
              disabled: c.disabled
            }, [
              C(c.$slots, "button", D(A({ ...n })), () => [
                J(z(c.text), 1)
              ], !0)
            ], 10, xt)
          ], !0),
          l("ul", {
            ref_key: "dropDownMenuRef",
            ref: t,
            class: L(["dropdown-menu", M.value]),
            onClick: s
          }, [
            C(c.$slots, "default", D(A({ ...n })), void 0, !0)
          ], 2)
        ])), [
          [k, h]
        ])
      ], 2);
    };
  }
});
const Bt = /* @__PURE__ */ F(Lt, [["__scopeId", "data-v-f9658383"]]), Dt = ["data-prevent-close"], At = /* @__PURE__ */ R({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean },
    preventClose: { type: Boolean }
  },
  setup(e) {
    const t = e, { preventClose: o } = V(t);
    return (a, f) => (m(), w("li", {
      "data-prevent-close": G(o) ? "" : null
    }, [
      l("span", {
        class: L(["dropdown-item", { active: a.active }]),
        role: "button",
        tabindex: "0"
      }, [
        C(a.$slots, "default")
      ], 2)
    ], 8, Dt));
  }
}), Ht = {}, Ot = { "data-prevent-close": "" }, Et = { class: "dropdown-header" };
function zt(e, t) {
  return m(), w("li", Ot, [
    l("h6", Et, [
      C(e.$slots, "default")
    ])
  ]);
}
const Rt = /* @__PURE__ */ F(Ht, [["render", zt]]), Pt = {}, Vt = /* @__PURE__ */ l("hr", { class: "dropdown-divider" }, null, -1), Nt = [
  Vt
];
function It(e, t) {
  return m(), w("li", null, Nt);
}
const Ft = /* @__PURE__ */ F(Pt, [["render", It]]), jt = {
  mounted(e, t, o, a) {
    new Be(e, {
      title: t.value,
      placement: t.arg,
      trigger: "hover"
    });
  }
}, Gt = (e, t) => {
  function o(r, v) {
    for (; r !== null; ) {
      if (r === v)
        return !0;
      r = r.parentNode;
    }
    return !1;
  }
  const a = new AbortController();
  function f(r, v) {
    document.addEventListener("click", function(d) {
      const u = d.target;
      r && (o(u, r) || v());
    }, { signal: a.signal });
  }
  return f(e, t), a;
}, Kt = {
  mounted(e, t, o, a) {
    const f = t.value;
    Gt(e, f);
  }
};
class ee {
  static add(t) {
    this.list.add(t), document.body.classList.add("drawer-open");
  }
  static delete(t) {
    this.list.delete(t), this.list.size === 0 && document.body.classList.remove("drawer-open");
  }
}
O(ee, "list", /* @__PURE__ */ new Set());
const Ut = { class: "drawer-content" }, Yt = { class: "drawer-header" }, Wt = ["innerHTML"], Xt = { class: "drawer-body" }, qt = ["innerHTML"], Jt = { class: "drawer-footer" }, Qt = ["innerHTML"], Zt = ["innerHTML"], en = /* @__PURE__ */ R({
  __name: "Drawer",
  props: {
    title: { default: "" },
    body: { default: "" },
    textCancel: { default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: { type: [Boolean, String], default: "static" },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean },
    okOnly: { type: Boolean, default: !1 },
    size: { default: I.STANDARD },
    btnSize: { default: I.SMALL },
    lazy: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const o = e, {
      backdrop: a,
      keyboard: f,
      focus: r,
      size: v,
      btnSize: d
    } = V(o), u = B(() => Q(v.value, "drawer-")), p = B(() => Q(d.value, "btn-")), b = H(), g = H(!1), $ = ne();
    let M;
    async function _() {
      return g.value === !0 ? void 0 : new Promise((S, x) => {
        g.value = !0, M = S;
      });
    }
    function i(k = !0) {
      g.value = !1, typeof M == "function" && M(k);
    }
    function y() {
      g.value === !0 ? _() : i(!1);
    }
    function s(k) {
      (a == null ? void 0 : a.value) !== "static" && i(!1);
    }
    function h() {
      i(!1);
    }
    function n() {
      i(!1);
    }
    function c() {
      i(!0);
    }
    function T() {
      g.value === !0 ? ee.add($) : ee.delete($);
    }
    return t({
      show: _,
      hide: i,
      toggle: y
    }), (k, S) => (m(), K(Me, {
      onBeforeEnter: T,
      onAfterLeave: T
    }, {
      default: q(() => [
        g.value ? (m(), w("div", U({
          key: 0,
          ref_key: "drawerElement",
          ref: b,
          class: "drawer",
          tabindex: "-1"
        }, { ...k.$attrs }, {
          onClick: ce(s, ["self"])
        }), [
          l("div", {
            class: L(["drawer-dialog", u.value])
          }, [
            l("div", Ut, [
              l("div", Yt, [
                C(k.$slots, "header", {}, () => [
                  l("h5", {
                    class: "drawer-title",
                    innerHTML: k.title
                  }, null, 8, Wt)
                ], !0),
                l("button", {
                  type: "button",
                  class: "btn-close",
                  "aria-label": "Close",
                  onClick: h
                })
              ]),
              l("div", Xt, [
                C(k.$slots, "default", {}, () => [
                  l("span", { innerHTML: k.body }, null, 8, qt)
                ], !0)
              ]),
              l("div", Jt, [
                C(k.$slots, "footer", {}, () => [
                  k.okOnly ? X("", !0) : (m(), w("button", {
                    key: 0,
                    type: "button",
                    class: L(["ms-auto btn btn-secondary", p.value]),
                    onClick: n
                  }, [
                    C(k.$slots, "button-cancel", {}, () => [
                      l("span", { innerHTML: k.textCancel }, null, 8, Qt)
                    ], !0)
                  ], 2)),
                  l("button", {
                    type: "button",
                    class: L(["btn btn-primary", p.value]),
                    onClick: c
                  }, [
                    C(k.$slots, "button-ok", {}, () => [
                      l("span", { innerHTML: k.textOk }, null, 8, Zt)
                    ], !0)
                  ], 2)
                ], !0)
              ])
            ])
          ], 2)
        ], 16)) : X("", !0)
      ]),
      _: 3
    }));
  }
});
const tn = /* @__PURE__ */ F(en, [["__scopeId", "data-v-2e49e8cb"]]), E = "b", me = "$toaster", ye = "$modalManager";
class be {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const a = fe(Xe).mount(t);
      this.component = a;
    }
    return this.component;
  }
}
O(be, "component");
class ke {
  static getComponent() {
    if (!this.component) {
      const t = document.createElement("div");
      document.body.appendChild(t);
      const a = fe(Ne).mount(t);
      this.component = a;
    }
    return this.component;
  }
}
O(ke, "component");
function un() {
  return pe(me);
}
function cn() {
  return pe(ye);
}
function nn(e) {
  e.component(`${E}-drawer`, tn), e.component(`${E}-modal`, _e), e.component(`${E}-pagination`, it), e.component(`${E}-pagination-dropdown`, pt), e.component(`${E}-pagination-select`, vt), e.component(`${E}-dropdown`, Bt), e.component(`${E}-dropdown-item`, At), e.component(`${E}-dropdown-header`, Rt), e.component(`${E}-dropdown-divider`, Ft), e.component(`${E}-table`, Tt), e.component(`${E}-toast`, ve);
}
function on(e) {
  e.directive("tooltip", jt), e.directive("click-outside", Kt);
}
const dn = {
  install(e) {
    nn(e), on(e);
    const t = ke.getComponent(), o = be.getComponent();
    e.provide(me, t), e.provide(ye, o);
  }
};
export {
  dn as BootstrapVue,
  Bt as Dropdown,
  Ft as DropdownDivider,
  Rt as DropdownHeader,
  At as DropdownItem,
  _e as Modal,
  Xe as ModalManager,
  pt as PageSizeDropdown,
  vt as PageSizeSelect,
  it as Pagination,
  Tt as Table,
  Z as TableFieldDefinition,
  ve as Toast,
  Ne as Toaster,
  Kt as clickOutside,
  jt as tooltip,
  cn as useModal,
  un as useToaster
};
