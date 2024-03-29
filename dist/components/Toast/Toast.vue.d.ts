import type { PropType as __PropType } from 'vue';
import VARIANT from '../../enums/Variant';
export interface Props {
    visible?: boolean;
    title?: string;
    subtitle?: string;
    body?: string;
    animation?: boolean;
    autohide?: boolean;
    delay?: number;
    variant?: VARIANT;
}
declare const _sfc_main: import("vue").DefineComponent<{
    visible: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    subtitle: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    body: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    animation: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    autohide: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    delay: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    variant: {
        type: __PropType<VARIANT | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "hidden" | "show" | "shown")[], "hide" | "hidden" | "show" | "shown", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    title: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    subtitle: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    body: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    animation: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    autohide: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    delay: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    variant: {
        type: __PropType<VARIANT | undefined>;
        required: false;
    };
}>> & {
    onShown?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}, {
    animation: boolean | undefined;
    delay: number | undefined;
    title: string | undefined;
    body: string | undefined;
    visible: boolean | undefined;
    subtitle: string | undefined;
    autohide: boolean | undefined;
}, {}>;
export default _sfc_main;
