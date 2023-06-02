import type { PropType as __PropType } from 'vue';
import VARIANT from '../../enums/Variant';
export interface Props {
    visible?: boolean;
    title: string;
    subtitle: string;
    body: string;
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
        type: __PropType<string>;
        required: true;
        default: string;
    };
    subtitle: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    body: {
        type: __PropType<string>;
        required: true;
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
}, {
    show: () => void;
    hide: () => void;
    dispose: () => void;
    isShown: () => void;
    getOrCreateInstance: () => void;
    getInstance: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("show" | "hide" | "hidden" | "shown")[], "show" | "hide" | "hidden" | "shown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    title: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    subtitle: {
        type: __PropType<string>;
        required: true;
        default: string;
    };
    body: {
        type: __PropType<string>;
        required: true;
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
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
}, {
    animation: boolean | undefined;
    delay: number | undefined;
    title: string;
    body: string;
    visible: boolean | undefined;
    subtitle: string;
    autohide: boolean | undefined;
}>;
export default _sfc_main;
