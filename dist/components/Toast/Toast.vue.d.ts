import { default as VARIANT } from '../../enums/Variant';
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
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<Props, {
    show: () => void;
    hide: () => void;
    dispose: () => void;
    isShown: () => void;
    getOrCreateInstance: () => void;
    getInstance: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    hide: (...args: any[]) => void;
    hidden: (...args: any[]) => void;
    show: (...args: any[]) => void;
    shown: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
}>, {
    visible: boolean;
    title: string;
    subtitle: string;
    body: string;
    animation: boolean;
    autohide: boolean;
    delay: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    header?(_: {
        show: () => void;
        hide: () => void;
        dispose: () => void;
        isShown: () => void;
        getOrCreateInstance: () => void;
        getInstance: () => void;
    }): any;
    title?(_: {
        show: () => void;
        hide: () => void;
        dispose: () => void;
        isShown: () => void;
        getOrCreateInstance: () => void;
        getInstance: () => void;
    }): any;
    subtitle?(_: {
        show: () => void;
        hide: () => void;
        dispose: () => void;
        isShown: () => void;
        getOrCreateInstance: () => void;
        getInstance: () => void;
    }): any;
    body?(_: {
        show: () => void;
        hide: () => void;
        dispose: () => void;
        isShown: () => void;
        getOrCreateInstance: () => void;
        getInstance: () => void;
    }): any;
    default?(_: {
        show: () => void;
        hide: () => void;
        dispose: () => void;
        isShown: () => void;
        getOrCreateInstance: () => void;
        getInstance: () => void;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
