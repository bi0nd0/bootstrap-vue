<template>
  <div class="p-5">

    <h1>Bootstrap Vue</h1>
    <Modal ref="modal" body="Hello world" title="Warning">
      <input type="file" />
    </Modal>
    <div class="d-flex flex-column gap-2">
      
      <div>
        <h3>Modal</h3>
        <div>
          <button class="btn btn-sm btn-primary" @click="openModal" >Open modal</button>
        </div>
      </div>

      <div>
        <h3>Tooltips</h3>
        <div class="ms-5">
          <div><span v-tooltip:top="`top`">top tooltip</span></div>
          <div><span v-tooltip:left="`left`">left tooltip</span></div>
          <div><span v-tooltip:right="`right`">right tooltip</span></div>
          <div><span v-tooltip:bottom="`bottom`">bottom tooltip</span></div>
        </div>
      </div>

      <div>
        <h1>Toast</h1>
        <Toaster ref="toasterRef"/>
        <Toast show title="Hello" subtitle="11 mins ago" body="Hello world!"/>
        <div>
          <button class="btn btn-sm btn-primary" @click="randomToast" >Rnadomly positioned Toast!</button>
        </div>
      </div>

      <div>
        <h1>Table</h1>
        <Table :fields="table.fields" :items="table.items"></Table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import {Modal, Toast, Toaster, Table } from './components'
import { toast } from './components/Toast/Toaster.vue'
import { Field } from './components/Table';

import { TOAST_POSITION } from './components/Toast/Toaster.vue';


const modal = ref<typeof Modal | null>(null)
async function openModal() {
  const response = await modal.value?.show()
  console.log(response)
}

const toasterRef = ref()

function randomToast() {
  const values = Object.values(TOAST_POSITION)
  const randomIndex = Math.floor(Math.random() * values.length)
  const position = values[randomIndex]
  toasterRef.value.toast({body:`hello world`, title: `${position}`}, position)
  // toast({body:`hello world`, title: `${position}`}, position)
}

const table = reactive(
  {
    fields: ['name','last_name', new Field('age', 'Age', false), {key: 'asda',label:'as da sdasd',sortable:false,sortFn: () =>({})}],
    items:[{name:'francesco', last_name: 'delacqua', age:42}],
  }
)


</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
