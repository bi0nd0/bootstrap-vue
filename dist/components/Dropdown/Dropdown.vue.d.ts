import { default as SIZE } from '../../enums/SIZE';
import { default as Variant } from '../../enums/Variant';
declare function open(): void;
declare function close(): void;
declare function onButtonClicked(event: Event): void;
declare function onMenuClicked(event: Event): void;
declare function onClickOutside(): void;
declare function __VLS_template(): {
    slots: {
        header?(_: {
            show: import('vue').Ref<boolean, boolean>;
            disabled: boolean;
            buttonClasses: import('vue').ComputedRef<(string | object)[]>;
            onButtonClicked: typeof onButtonClicked;
            onMenuClicked: typeof onMenuClicked;
            onClickOutside: typeof onClickOutside;
            open: typeof open;
            close: typeof close;
        }): any;
        button?(_: {
            show: import('vue').Ref<boolean, boolean>;
            disabled: boolean;
            buttonClasses: import('vue').ComputedRef<(string | object)[]>;
            onButtonClicked: typeof onButtonClicked;
            onMenuClicked: typeof onMenuClicked;
            onClickOutside: typeof onClickOutside;
            open: typeof open;
            close: typeof close;
        }): any;
        default?(_: {
            show: import('vue').Ref<boolean, boolean>;
            disabled: boolean;
            buttonClasses: import('vue').ComputedRef<(string | object)[]>;
            onButtonClicked: typeof onButtonClicked;
            onMenuClicked: typeof onMenuClicked;
            onClickOutside: typeof onClickOutside;
            open: typeof open;
            close: typeof close;
        }): any;
    };
    refs: {
        dropDownRef: HTMLDivElement;
        dropDownMenuRef: HTMLUListElement;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    text?: string;
    variant?: Variant;
    right?: boolean;
    top?: boolean;
    centered?: boolean;
    dropup?: boolean;
    dropend?: boolean;
    dropstart?: boolean;
    menuEnd?: boolean;
    size?: SIZE;
    disabled?: boolean;
}, {
    show: import('vue').Ref<boolean, boolean>;
    disabled: boolean;
    buttonClasses: import('vue').ComputedRef<(string | object)[]>;
    onButtonClicked: typeof onButtonClicked;
    onMenuClicked: typeof onMenuClicked;
    onClickOutside: typeof onClickOutside;
    open: typeof open;
    close: typeof close;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    text?: string;
    variant?: Variant;
    right?: boolean;
    top?: boolean;
    centered?: boolean;
    dropup?: boolean;
    dropend?: boolean;
    dropstart?: boolean;
    menuEnd?: boolean;
    size?: SIZE;
    disabled?: boolean;
}> & Readonly<{}>, {
    variant: Variant;
    text: string;
    size: SIZE;
    right: boolean;
    top: boolean;
    menuEnd: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
