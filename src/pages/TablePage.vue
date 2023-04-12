<template>
  <Table :fields="table.fields" :items="table.items" striped></Table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Table } from '../components'
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
</script>

<style scoped>

</style>