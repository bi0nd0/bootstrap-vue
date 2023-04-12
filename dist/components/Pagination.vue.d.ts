import type { PropType as __PropType } from 'vue';
declare enum SIZE {
    SMALL = "sm",
    NORMAL = "",
    LARGE = "lg"
}
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    perPage: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    maxVisibleButtons: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    totalItems: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    hideEllipsis: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    hideGotoEndButtons: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    firstText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    prevText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    nextText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    lastText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    ellipsisText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    size: {
        type: __PropType<SIZE>;
        required: true;
        default: SIZE;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    perPage: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    maxVisibleButtons: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    totalItems: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    hideEllipsis: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    hideGotoEndButtons: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    firstText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    prevText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    nextText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    lastText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    ellipsisText: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    size: {
        type: __PropType<SIZE>;
        required: true;
        default: SIZE;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    perPage: number;
    maxVisibleButtons: number;
    totalItems: number;
    hideEllipsis: boolean;
    hideGotoEndButtons: boolean;
    firstText: string;
    prevText: string;
    nextText: string;
    lastText: string;
    ellipsisText: string;
    size: SIZE;
}>;
export default _sfc_main;
