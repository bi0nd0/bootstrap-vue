/**
 *
 * this component should be attached just once to the app.
 * once omunted, the toast function is exported, so it is available everywhere in the app:
 * 1. import { toast } from './components/Toast/Toaster.vue'
 * 2. toast(options, position)
 *
 */
declare enum TOAST_POSITION {
    TOP_LEFT = "top left",
    TOP_CENTER = "top center",
    TOP_RIGHT = "top right",
    MIDDLE_LEFT = "middle left",
    MIDDLE_CENTER = "middle center",
    MIDDLE_RIGHT = "middle right",
    BOTTOM_LEFT = "bottom left",
    BOTTOM_CENTER = "bottom center",
    BOTTOM_RIGHT = "bottom right"
}
declare let toast: Function;
export { TOAST_POSITION, toast };
declare const _sfc_main: import("vue").DefineComponent<{}, {
    toast: Function;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
