<template>
    <table v-bind="{...$attrs}" :class="{striped:striped, hover:hover}">
        <thead>
            <template v-for="field in mappedFields" :key="`thead-${field.key}`">
                <th :class="{sortable: field.sortable}" @click="field.sortable && sortBy(field)">
                    <span class="th-wrapper">
                        <slot :name="`head(${field.key})`"
                        :field="field" :data="instance" :value="field.label"
                        >{{field.label}}</slot>
                        <span data-sort-indicator v-if="field.sortable">
                            <span class="sort-index">{{ sortIndex(field) }}</span>
                            <span class="sort-direction"><i :class="sortIcon(field)"></i></span>
                        </span>
                    </span>
                </th>
            </template>
        </thead>
        <tbody>
            <template v-for="(item, itemIndex) in sortedItems" :key="`trow-${item?.id ?? itemIndex}`">
                <slot name="row" :item="item" :index="itemIndex" :colspan="mappedFields.length"></slot>
                <tr @mouseover="onMouseOverRow($event, item, itemIndex)">
                    <template v-for="field in mappedFields" :key="`tcell-${field.key + (item?.id ?? itemIndex)}`">
                        <td :class="{ [`tcell-${field?.key}`]: true }"><slot :name="`cell(${field?.key})`"
                            :data="instance" :item="item" :field="field"
                            :value="item[field?.key]"
                            @mouseover="onMouseOverCell($event, item, itemIndex, field)"
                        >{{item[field?.key]}}</slot></td>
                    </template>
                </tr>
            </template>
        </tbody>
        <tfoot>
            <slot name="footer" :data="instance"></slot>
        </tfoot>

        <template v-if="showEmpty && sortedItems.length===0">
            <tr class="p-5 text-muted font-italic">
                <td :colspan="mappedFields.length">
                    <slot name="empty" :items="sortedItems" :data="instance" :fields="mappedFields"><span v-html="emptyText"></span></slot>
                </td>
            </tr>
        </template>
    </table>
</template>


<script lang="ts">

export class Field {
    key:string // age
    label:string // Person age
    sortable:boolean // true
    /**
     * optional sorting logic for the field
     * a sort function accepts 2 parameters (a,b)
     * and follows the sorting rules
     */
     sortFn?:Function

     constructor(key:string='', label:string='', sortable:boolean=false, sortFn?:Function) {
        this.key = key
        this.label = label
        this.sortable = sortable
        this.sortFn = sortFn
     }
}

type FieldType = {
    key:string
    label:string
    sortable:boolean
    sortFn?:Function
}

type TableField = string | Field
interface Props {
    fields: Array<TableField>,
    items: Array<any>,
    striped?: boolean,
    hover?: boolean,
    externalSort?: boolean,
    showEmpty?: boolean,
    emptyText?: string
}

</script>
<script setup lang="ts">
import { ref, computed, toRefs, onMounted, getCurrentInstance, ComponentInternalInstance } from 'vue'
import type { Ref } from 'vue'

import {SORTDIRECTION, SortRule, multiSort} from './Sorter'

const extractKeysFromList = (items:any[]) => {
    let keys:any[] = []
    for (const item of items) {
        keys = keys.concat(Object.keys(item))
    }
    // remove duplicates
    keys = keys.filter( (item, index) => keys.indexOf(item) == index )
    return keys
}

const emit = defineEmits(['sort','onMouseOverRow','onMouseOverRow'])

const props = withDefaults(defineProps<Props>(), {
    fields:() => [] as Array<TableField>,
    items: () => [] as Array<any>,
    striped: false,
    hover: true,
    externalSort: false, // sort externally
    showEmpty: false,
    emptyText: 'nothing to display',
})

const sorts:Ref<Array<SortRule>> = ref([])

const {fields, items} = toRefs(props)

const sortedItems = computed( () => {
    if(props.externalSort || sorts.value.length==0) return props.items
    const items = [...props.items]
    let sorted = multiSort(sorts.value, items)
    return sorted
})
/**
 * map fields to Field objects
 */
const mappedFields = computed( () => {
    let _fields = fields.value
    let _results = [] as Field[]
    if(_fields.length===0) {
        _fields = extractKeysFromList([...items.value])
    }
    return _fields.reduce((carry, field, index) => {
        if(typeof field == 'string') {
            carry.push(new Field(field, field))
        }else if(field instanceof Field){
            carry.push(field)
        }else if(typeof field == 'object') {
            const {key, label, sortable, sortFn} = field
            carry.push(new Field(key, label, sortable, sortFn))
        }
        return carry
    }, _results)
})

function sortIndex(field:Field) {
    const index = sorts.value.findIndex(item => item.key === field.key)
    if(index<0) return ''
    return index+1
}
function sortIcon(field:Field) {
    const index = sorts.value.findIndex(item => item.key === field.key)
    if(index<0) return `fas fa-sort`
    const sortRule = sorts.value[index]
    if(sortRule.direction===SORTDIRECTION.ASC) return `fas fa-sort-up`
    else if(sortRule.direction===SORTDIRECTION.DESC) return `fas fa-sort-down`
    else return `far fa-exclamation-triangle`
}
function sortBy(field:Field) {
    const { key } = field
    const index = sorts.value.findIndex(item => item.key === key)
    if(index<0) {
        const sortItem = new SortRule(key, SORTDIRECTION.ASC, field.sortFn)
        sorts.value.push(sortItem)
    } else {
        const sortItem = sorts.value[index]
        const direction = sortItem.direction
        if(direction===SORTDIRECTION.ASC) sortItem.direction = SORTDIRECTION.DESC
        else if(direction===SORTDIRECTION.DESC) {
            sorts.value.splice(index,1)
        }
    }
    emit('sort', sorts.value, multiSort)
}

function onMouseOverRow($event:Event, item:any, itemIndex:number) {
    emit('onMouseOverRow', [$event, item, itemIndex])
}
function onMouseOverCell($event:Event, item:any, itemIndex:number, field:Field)
{
    emit('onMouseOverRow', [$event, item, itemIndex, field])
}

let instance:Ref<ComponentInternalInstance|null> = ref(null)
onMounted( () => {
    instance.value = getCurrentInstance()
})



</script>

<style scoped>
table {
    --border-color: #dee2e6;
    border: 1px solid var(--border-color);
    table-layout: fixed;
    word-break: break-all;
    width: 100%;
} 
table th,
table td {
    padding: 2px 10px;
    border: solid 1px var(--border-color);
    position: relative;
}
th.sortable {
    cursor: pointer;
}
th  .th-wrapper {
    display: flex;
}
th [data-sort-indicator] {
    margin-left: auto;
    display: flex;
    align-items: center;
}
th [data-sort-indicator] .sort-index {
    font-size: 9px;
}
th [data-sort-indicator] .sort-direction {
    /* fixed weight */
    text-align: center;
    width: 1.25em;
}

.striped tr:nth-child( even ) {

}
.striped tr:nth-child( odd ) {
    background-color: rgba(0,0,0,.05);
}
.hover tr:hover {
    background-color: rgba(0,0,0,.075);
}

</style>