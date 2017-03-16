import { PipeTransform } from '@angular/core';
/**
 * Column property that indicates how to retrieve this column's
 * value from a row.
 * 'a.deep.value', 'normalprop', 0 (numeric)
 */
export declare type TableColumnProp = string | number;
/**
 * Column Type
 * @type {object}
 */
export interface TableColumn {
    $$id?: string;
    $$oldWidth?: number;
    isExpressive?: boolean;
    frozenLeft?: boolean;
    frozenRight?: boolean;
    flexGrow?: number;
    minWidth?: number;
    maxWidth?: number;
    width?: number;
    resizeable?: boolean;
    comparator?: any;
    pipe?: PipeTransform;
    sortable?: boolean;
    draggable?: boolean;
    canAutoResize?: boolean;
    name?: string;
    prop?: TableColumnProp;
    cellTemplate?: any;
    headerTemplate?: any;
}
