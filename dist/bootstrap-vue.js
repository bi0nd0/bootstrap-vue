import { defineComponent as T, toRefs as B, computed as O, ref as _, onMounted as H, openBlock as u, createBlock as w, Teleport as E, createElementVNode as o, mergeProps as S, withModifiers as $, normalizeClass as A, unref as R, renderSlot as s, createElementBlock as j, createCommentVNode as N } from "vue";
import { Modal as x } from "bootstrap";
var r = /* @__PURE__ */ ((e) => (e.SMALL = "sm", e.STANDARD = "", e.LARGE = "lg", e.EXTRA_LARGE = "xl", e))(r || {});
const z = ["onClick"], D = { class: "modal-content" }, G = { class: "modal-header" }, P = ["innerHTML"], V = { class: "modal-body" }, X = ["innerHTML"], q = { class: "modal-footer" }, F = ["innerHTML"], I = ["innerHTML"], W = /* @__PURE__ */ T({
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
        return Object.values(r).includes(e);
      }
    }
  },
  setup(e, { expose: f }) {
    const m = e, {
      backdrop: l,
      keyboard: y,
      focus: k,
      disableOutsideClick: J,
      size: b
    } = B(m), p = O(() => {
      let t = b.value.toLowerCase();
      return !Object.values(r).includes(t) || t == "" ? "" : `modal-${t}`;
    }), d = _();
    let n, i;
    function C() {
      return new Promise((c, K) => {
        n == null || n.show(), i = c;
      });
    }
    function a(t = !0) {
      n == null || n.hide(), typeof i == "function" && i(t);
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
    function h(t) {
      l == null || l.value;
    }
    function L() {
      a(!1);
    }
    function M() {
      a(!1);
    }
    function g() {
      a(!0);
    }
    return f({
      show: C,
      hide: a,
      toggle: v
    }), (t, c) => (u(), w(E, { to: "body" }, [
      o("div", S({
        ref_key: "modalElement",
        ref: d,
        class: "modal fade",
        tabindex: "-1"
      }, { ...t.$attrs }, {
        onClick: $(h, ["prevent"])
      }), [
        o("div", {
          class: A(["modal-dialog", R(p)])
        }, [
          o("div", D, [
            o("div", G, [
              s(t.$slots, "header", {}, () => [
                o("h5", {
                  class: "modal-title",
                  innerHTML: e.title
                }, null, 8, P)
              ]),
              o("button", {
                type: "button",
                class: "btn-close",
                "aria-label": "Close",
                onClick: L
              })
            ]),
            o("div", V, [
              s(t.$slots, "default", {}, () => [
                o("span", { innerHTML: e.body }, null, 8, X)
              ])
            ]),
            o("div", q, [
              s(t.$slots, "footer", {}, () => [
                e.okOnly ? N("", !0) : (u(), j("button", {
                  key: 0,
                  type: "button",
                  class: "btn btn-secondary",
                  onClick: M
                }, [
                  s(t.$slots, "button-cancel", {}, () => [
                    o("span", { innerHTML: e.textCancel }, null, 8, F)
                  ])
                ])),
                o("button", {
                  type: "button",
                  class: "btn btn-primary",
                  onClick: g
                }, [
                  s(t.$slots, "button-ok", {}, () => [
                    o("span", { innerHTML: e.textOk }, null, 8, I)
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
