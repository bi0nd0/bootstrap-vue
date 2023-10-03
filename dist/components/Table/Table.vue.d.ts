import type { PropType as __PropType } from 'vue';
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
declare const _sfc_main: import("vue").DefineComponent<{
    fields: {
        type: __PropType<TableField[]>;
        required: true;
        default: () => TableField[];
    };
    items: {
        type: __PropType<any[]>;
        required: true;
        default: () => any[];
    };
    striped: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    hover: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    externalSort: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showEmpty: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    emptyText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("sort" | "onMouseOverCell")[], "sort" | "onMouseOverCell", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fields: {
        type: __PropType<TableField[]>;
        required: true;
        default: () => TableField[];
    };
    items: {
        type: __PropType<any[]>;
        required: true;
        default: () => any[];
    };
    striped: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    hover: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    externalSort: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showEmpty: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    emptyText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    onSort?: ((...args: any[]) => any) | undefined;
    onOnMouseOverCell?: ((...args: any[]) => any) | undefined;
}, {
    hover: boolean | undefined;
    fields: TableField[];
    items: any[];
    striped: boolean | undefined;
    externalSort: boolean | undefined;
    showEmpty: boolean | undefined;
    emptyText: string | undefined;
}, {}>;
export default _sfc_main;
