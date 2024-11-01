import { default as SIZE } from '../../enums/SIZE';
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
    modal?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<Props, {
    show: () => Promise<boolean>;
    hide: (result?: boolean) => Promise<void>;
    toggle: () => Promise<void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    focus: boolean;
    visible: boolean;
    title: string;
    body: string;
    size: SIZE;
    textCancel: string;
    textOk: string | boolean;
    backdrop: BackdropType;
    keyboard: boolean;
    disableOutsideClick: boolean;
    okOnly: boolean;
    btnSize: SIZE;
    modal: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    header?(_: {
        show: () => Promise<boolean>;
        hide: (result?: boolean) => Promise<void>;
        toggle: () => Promise<void>;
        dialog: import('vue').Ref<any, any>;
    }): any;
    title?(_: {
        show: () => Promise<boolean>;
        hide: (result?: boolean) => Promise<void>;
        toggle: () => Promise<void>;
        dialog: import('vue').Ref<any, any>;
    }): any;
    "header-close-button"?(_: {}): any;
    default?(_: {
        show: () => Promise<boolean>;
        hide: (result?: boolean) => Promise<void>;
        toggle: () => Promise<void>;
        dialog: import('vue').Ref<any, any>;
    }): any;
    footer?(_: {
        show: () => Promise<boolean>;
        hide: (result?: boolean) => Promise<void>;
        toggle: () => Promise<void>;
        dialog: import('vue').Ref<any, any>;
    }): any;
    textCancel?(_: {
        show: () => Promise<boolean>;
        hide: (result?: boolean) => Promise<void>;
        toggle: () => Promise<void>;
        dialog: import('vue').Ref<any, any>;
    }): any;
    textOk?(_: {
        show: () => Promise<boolean>;
        hide: (result?: boolean) => Promise<void>;
        toggle: () => Promise<void>;
        dialog: import('vue').Ref<any, any>;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
