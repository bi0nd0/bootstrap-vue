import { ComponentInternalInstance } from 'vue';
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
}
interface ManagedModal {
    element: HTMLElement;
    priority: number;
    instance: ComponentInternalInstance | null;
}
declare global {
    interface Window {
        _managedModals: ManagedModal[];
    }
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<Props, {
    modal: undefined;
    show: () => Promise<unknown>;
    hide: (status?: boolean) => void;
    toggle: () => void;
    onHeaderCloseClicked: () => void;
    onCancelClicked: () => void;
    onOkCLicked: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onHidden: (...args: any[]) => void;
    onShown: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onOnHidden?: ((...args: any[]) => any) | undefined;
    onOnShown?: ((...args: any[]) => any) | undefined;
}>, {
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, {
    header?(_: {
        show: () => Promise<unknown>;
        hide: (status?: boolean) => void;
        toggle: () => void;
        modal: undefined;
    }): any;
    title?(_: {
        show: () => Promise<unknown>;
        hide: (status?: boolean) => void;
        toggle: () => void;
        modal: undefined;
    }): any;
    "header-close-button"?(_: {
        show: () => Promise<unknown>;
        hide: (status?: boolean) => void;
        toggle: () => void;
        modal: undefined;
    }): any;
    default?(_: {
        show: () => Promise<unknown>;
        hide: (status?: boolean) => void;
        toggle: () => void;
        modal: undefined;
    }): any;
    footer?(_: {
        show: () => Promise<unknown>;
        hide: (status?: boolean) => void;
        toggle: () => void;
        modal: undefined;
    }): any;
    "button-cancel"?(_: {
        show: () => Promise<unknown>;
        hide: (status?: boolean) => void;
        toggle: () => void;
        modal: undefined;
    }): any;
    "button-ok"?(_: {
        show: () => Promise<unknown>;
        hide: (status?: boolean) => void;
        toggle: () => void;
        modal: undefined;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
