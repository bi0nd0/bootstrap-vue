import type { PropType as __PropType } from 'vue';
import SIZE from '../../enums/SIZE';
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
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    totalItems: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    hideEllipsis: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    hideGotoEndButtons: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    firstText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    prevText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    nextText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    lastText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    ellipsisText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    size: {
        type: __PropType<SIZE | undefined>;
        required: false;
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
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    totalItems: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
    hideEllipsis: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    hideGotoEndButtons: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    firstText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    prevText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    nextText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    lastText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    ellipsisText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    size: {
        type: __PropType<SIZE | undefined>;
        required: false;
        default: SIZE;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    size: SIZE | undefined;
    modelValue: number;
    perPage: number;
    maxVisibleButtons: number | undefined;
    totalItems: number;
    hideEllipsis: boolean | undefined;
    hideGotoEndButtons: boolean | undefined;
    firstText: string | undefined;
    prevText: string | undefined;
    nextText: string | undefined;
    lastText: string | undefined;
    ellipsisText: string | undefined;
}, {}>;
export default _sfc_main;
