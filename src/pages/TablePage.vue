<template>
  <b-table :fields="table.fields" :items="table.items" striped
  @onMouseOverCell="onMouseOverCell"
  ></b-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Field } from '../components/Table';

const table = reactive(
  {
    fields: [
      'name','last_name',
      new Field('age', 'Age', false),
      {key: 'asda',label:'as da sdasd',sortable:false,sortFn: () =>({})}
    ],
    items:[
      {name:'John', last_name: 'Doe', age:42},
      {name:'John', last_name: 'Doe', age:42},
      {name:'John', last_name: 'Doe', age:42},
      {name:'John', last_name: 'Doe', age:42},
      {name:'John', last_name: 'Doe', age:42},
      {name:'John', last_name: 'Doe', age:42},
      {name:'John', last_name: 'Doe', age:42},
    ],
  }
)

function onMouseOverCell($event:Event, item:any, itemIndex:number, field:Field) {
  console.log('cell', $event.target)
  console.log(($event.target as Element).closest('tr'))
}
</script>

<style scoped>

</style>