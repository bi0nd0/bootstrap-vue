import { defineComponent as T, toRefs as B, computed as O, ref as _, onMounted as H, openBlock as u, createBlock as w, Teleport as E, createElementVNode as o, mergeProps as S, withModifiers as $, normalizeClass as A, unref as R, renderSlot as l, createElementBlock as j, createCommentVNode as N } from "vue";
import { Modal as x } from "bootstrap";
var i = /* @__PURE__ */ ((t) => (t.SMALL = "sm", t.STANDARD = "", t.LARGE = "lg", t.EXTRA_LARGE = "xl", t))(i || {});
const z = ["onClick"], D = { class: "modal-content" }, G = { class: "modal-header" }, P = ["innerHTML"], V = { class: "modal-body" }, X = ["innerHTML"], q = { class: "modal-footer" }, F = ["innerHTML"], I = ["innerHTML"], W = /* @__PURE__ */ T({
  __name: "Modal",
  props: {
    title: { type: String, default: "" },
    body: { type: String, default: "" },
    textCancel: { type: String, default: "Cancel" },
    textOk: { type: [String, Boolean], default: "Ok" },
    backdrop: {
      type: [String, Boolean],
      default: void 0
    },
    keyboard: { type: Boolean, default: !0 },
    focus: { type: Boolean, default: !0 },
    disableOutsideClick: { type: Boolean, default: !1 },
    okOnly: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: "",
      validator(t) {
        return Object.values(i).includes(t);
      }
    }
  },
  setup(t, { expose: f }) {
    const k = t, {
      backdrop: r,
      keyboard: b,
      focus: p,
      disableOutsideClick: J,
      size: m
    } = B(k), y = O(() => {
      let e = m.value.toLowerCase();
      return !Object.values(i).includes(e) || e == "" ? "" : `modal-${e}`;
    }), d = _();
    let n, a;
    function C() {
      return new Promise((c, K) => {
        n == null || n.show(), a = c;
      });
    }
    function s(e = !0) {
      n == null || n.hide(), typeof a == "function" && a(e);
    }
    function v() {
      n == null || n.toggle();
    }
    H(() => {
      n = new x(d.value, {
        backdrop: r.value,
        keyboard: b.value,
        focus: p.value
      });
    });
    function h(e) {
      r.value !== "static" && console.log(e);
    }
    function g() {
      s(!1);
    }
    function L() {
      s(!1);
    }
    function M() {
      s(!0);
    }
    return f({
      show: C,
      hide: s,
      toggle: v
    }), (e, c) => (u(), w(E, { to: "body" }, [
      o("div", S({
        ref_key: "modalElement",
        ref: d,
        class: "modal fade",
        tabindex: "-1"
      }, { ...e.$attrs }, {
        onClick: $(h, ["prevent"])
      }), [
        o("div", {
          class: A(["modal-dialog", R(y)])
        }, [
          o("div", D, [
            o("div", G, [
              l(e.$slots, "header", {}, () => [
                o("h5", {
                  class: "modal-title",
                  innerHTML: t.title
                }, null, 8, P)
              ]),
              o("button", {
                type: "button",
                class: "btn-close",
                "aria-label": "Close",
                onClick: g
              })
            ]),
            o("div", V, [
              l(e.$slots, "default", {}, () => [
                o("span", { innerHTML: t.body }, null, 8, X)
              ])
            ]),
            o("div", q, [
              l(e.$slots, "footer", {}, () => [
                t.okOnly ? N("", !0) : (u(), j("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: L
                }, [
                  l(e.$slots, "button-cancel", {}, () => [
                    o("span", { innerHTML: t.textCancel }, null, 8, F)
                  ])
                ])),
                o("button", {
                  type: "button",
                  class: "btn btn-primary",
                  onClick: M
                }, [
                  l(e.$slots, "button-ok", {}, () => [
                    o("span", { innerHTML: t.textOk }, null, 8, I)
                  ])
                ])
              ])
            ])
          ])
        ], 2)
      ], 16, z)
    ]));
  }
});
export {
  W as Modal
};
