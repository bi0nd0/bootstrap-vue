import { default as SIZE } from '../../enums/SIZE';
interface Props {
    modelValue: number;
    perPage: number;
    maxVisibleButtons?: number;
    totalItems: number;
    hideEllipsis?: boolean;
    hideGotoEndButtons?: boolean;
    firstText?: string;
    prevText?: string;
    nextText?: string;
    lastText?: string;
    ellipsisText?: string;
    size?: SIZE;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    size: SIZE;
    modelValue: number;
    perPage: number;
    maxVisibleButtons: number;
    totalItems: number;
    hideEllipsis: boolean;
    hideGotoEndButtons: boolean;
    firstText: string;
    prevText: string;
    nextText: string;
    lastText: string;
    ellipsisText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
