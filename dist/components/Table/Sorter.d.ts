declare enum SORTDIRECTION {
    ASC = "ASC",
    DESC = "DESC",
    IGNORE = "IGNORE"
}
declare class SortRule {
    key: string;
    direction: SORTDIRECTION;
    sortFn?: Function;
    constructor(key: string, direction?: SORTDIRECTION, sortFn?: Function);
}
/**
 *
 * @param {SortRule[]} sortRules [{key, direction}]
 * @param {Array} items
 */
declare const multiSort: (sortRules: SortRule[], items: string[] | number[]) => (string | number)[];
export { SORTDIRECTION, SortRule, multiSort };
