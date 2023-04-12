import type { PropType as __PropType } from 'vue';
declare enum Variant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    WARNING = "warning",
    DANGER = "danger",
    INFO = "info"
}
declare const _sfc_main: import("vue").DefineComponent<{
    text: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<Variant | undefined>;
        required: false;
        default: Variant;
    };
    right: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    top: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    centered: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    dropup: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    dropend: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    dropstart: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    variant: {
        type: __PropType<Variant | undefined>;
        required: false;
        default: Variant;
    };
    right: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    top: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    centered: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    dropup: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    dropend: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    dropstart: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}>>, {
    top: boolean | undefined;
    right: boolean | undefined;
    text: string | undefined;
    variant: Variant | undefined;
}>;
export default _sfc_main;
