import { ComponentInternalInstance } from 'vue';
export declare class Field {
    key: string;
    label: string;
    sortable: boolean;
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
    sortFn?: Function;
    constructor(key?: string, label?: string, sortable?: boolean, sortFn?: Function);
}
type TableField = string | Field;
interface Props {
    fields: Array<TableField>;
    items: Array<any>;
    striped?: boolean;
    hover?: boolean;
    externalSort?: boolean;
    showEmpty?: boolean;
    emptyText?: string;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    sort: (...args: any[]) => void;
    onMouseOverCell: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onSort?: ((...args: any[]) => any) | undefined;
    onOnMouseOverCell?: ((...args: any[]) => any) | undefined;
}>, {
    fields: Array<TableField>;
    items: Array<any>;
    striped: boolean;
    hover: boolean;
    externalSort: boolean;
    showEmpty: boolean;
    emptyText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>, Partial<Record<`head(${string})`, (_: {
    field: Field;
    data: ComponentInternalInstance | null;
    value: string;
}) => any>> & Partial<Record<`cell(${string})`, (_: {
    data: ComponentInternalInstance | null;
    item: any;
    field: Field;
    value: any;
}) => any>> & {
    row?(_: {
        item: any;
        index: number;
        colspan: number;
    }): any;
    footer?(_: {
        data: ComponentInternalInstance | null;
    }): any;
    empty?(_: {
        items: any[];
        data: ComponentInternalInstance | null;
        fields: Field[];
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
