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
    lazy?: boolean;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<Props, {
    show: () => Promise<unknown>;
    hide: (status?: boolean) => void;
    toggle: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    lazy: boolean;
    focus: boolean;
    title: string;
    body: string;
    size: SIZE;
    textCancel: string;
    textOk: string | boolean;
    backdrop: BackdropType;
    keyboard: boolean;
    okOnly: boolean;
    btnSize: SIZE;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    header?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
    "button-cancel"?(_: {}): any;
    "button-ok"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
