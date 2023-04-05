import { defineComponent as T, toRefs as B, computed as O, ref as _, onMounted as H, openBlock as u, createBlock as w, Teleport as E, createElementVNode as o, mergeProps as S, withModifiers as $, normalizeClass as A, unref as R, renderSlot as s, createElementBlock as j, createCommentVNode as N } from "vue";
import { Modal as x } from "bootstrap";
var r = /* @__PURE__ */ ((t) => (t.SMALL = "sm", t.STANDARD = "", t.LARGE = "lg", t.EXTRA_LARGE = "xl", t))(r || {});
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
        return Object.values(r).includes(t);
      }
    }
  },
  setup(t, { expose: f }) {
    const m = t, {
      backdrop: l,
      keyboard: y,
      focus: k,
      disableOutsideClick: J,
      size: b
    } = B(m), p = O(() => {
      let e = b.value.toLowerCase();
      return !Object.values(r).includes(e) || e == "" ? "" : `modal-${e}`;
    }), d = _();
    let n, i;
    function C() {
      return new Promise((c, K) => {
        n == null || n.show(), i = c;
      });
    }
    function a(e = !0) {
      n == null || n.hide(), typeof i == "function" && i(e);
    }
    function v() {
      n == null || n.toggle();
    }
    H(() => {
      n = new x(d.value, {
        backdrop: l == null ? void 0 : l.value,
        keyboard: y.value,
        focus: k.value
      });
    });
    function h(e) {
      (l == null ? void 0 : l.value) !== "static" && console.log(e);
    }
    function g() {
      a(!1);
    }
    function L() {
      a(!1);
    }
    function M() {
      a(!0);
    }
    return f({
      show: C,
      hide: a,
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
          class: A(["modal-dialog", R(p)])
        }, [
          o("div", D, [
            o("div", G, [
              s(e.$slots, "header", {}, () => [
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
              s(e.$slots, "default", {}, () => [
                o("span", { innerHTML: t.body }, null, 8, X)
              ])
            ]),
            o("div", q, [
              s(e.$slots, "footer", {}, () => [
                t.okOnly ? N("", !0) : (u(), j("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: L
                }, [
                  s(e.$slots, "button-cancel", {}, () => [
                    o("span", { innerHTML: t.textCancel }, null, 8, F)
                  ])
                ])),
                o("button", {
                  type: "button",
                  class: "btn btn-primary",
                  onClick: M
                }, [
                  s(e.$slots, "button-ok", {}, () => [
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
