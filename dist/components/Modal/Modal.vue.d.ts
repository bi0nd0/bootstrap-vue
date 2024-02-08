import type { PropType as __PropType } from 'vue';
import SIZE from '../../enums/SIZE';
type BackdropType = boolean | "static";
export interface Props {
    title?: string;
    body?: string;
    textCancel?: string;
    textOk?: string | boolean;
    backdrop?: BackdropType;
    keyboard?: boolean;
    focus?: boolean;
    disableOutsideClick?: boolean;
    okOnly?: boolean;
    size?: SIZE;
    btnSize?: SIZE;
    visible?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    title: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    body: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    textCancel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    textOk: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: string;
    };
    backdrop: {
        type: __PropType<BackdropType | undefined>;
        required: false;
        default: boolean;
    };
    keyboard: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    focus: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    disableOutsideClick: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    okOnly: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    size: {
        type: __PropType<SIZE | undefined>;
        required: false;
        default: SIZE;
    };
    btnSize: {
        type: __PropType<SIZE | undefined>;
        required: false;
        default: SIZE;
    };
    visible: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onShown" | "onHidden")[], "onShown" | "onHidden", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    body: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    textCancel: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    textOk: {
        type: __PropType<string | boolean | undefined>;
        required: false;
        default: string;
    };
    backdrop: {
        type: __PropType<BackdropType | undefined>;
        required: false;
        default: boolean;
    };
    keyboard: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    focus: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    disableOutsideClick: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    okOnly: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    size: {
        type: __PropType<SIZE | undefined>;
        required: false;
        default: SIZE;
    };
    btnSize: {
        type: __PropType<SIZE | undefined>;
        required: false;
        default: SIZE;
    };
    visible: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    onOnShown?: ((...args: any[]) => any) | undefined;
    onOnHidden?: ((...args: any[]) => any) | undefined;
}, {
    focus: boolean | undefined;
    title: string | undefined;
    body: string | undefined;
    textCancel: string | undefined;
    textOk: string | boolean | undefined;
    backdrop: BackdropType | undefined;
    keyboard: boolean | undefined;
    disableOutsideClick: boolean | undefined;
    okOnly: boolean | undefined;
    size: SIZE | undefined;
    btnSize: SIZE | undefined;
    visible: boolean | undefined;
}, {}>;
export default _sfc_main;
