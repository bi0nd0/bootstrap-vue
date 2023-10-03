import type { PropType as __PropType } from 'vue';
export interface Props {
    options: number[];
    modelValue: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: __PropType<number[]>;
        required: true;
        default: () => number[];
    };
    modelValue: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: __PropType<number[]>;
        required: true;
        default: () => number[];
    };
    modelValue: {
        type: __PropType<number>;
        required: true;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    options: number[];
}, {}>;
export default _sfc_main;
