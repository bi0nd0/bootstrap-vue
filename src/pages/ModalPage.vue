<template>
    <div>
      <Modal ref="modal" body="Hello world" title="Warning">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae facere nam facilis repudiandae adipisci perspiciatis consequatur dolore ad eveniet praesentium. Culpa eius vero laborum vel alias quaerat cum, ex in.</p>
      </Modal>
      <button class="btn btn-sm btn-primary" @click="openModal" >Open modal</button>
      
    <ModalService ref="modalServiceRef" />
    <div class="mt-2 d-flex gap-2">
      <button class="btn btn-sm btn-primary" @click="openAlert" >Open alert</button>
      <button class="btn btn-sm btn-primary" @click="openConfirm" >Open confirm</button>
    </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Modal} from '../components'
import ModalService from '../components/Modal/ModalService.vue'


const modal = ref<typeof Modal | null>(null)

async function openModal() {
  const response = await modal.value?.show()
  console.log('response:', response)
}

const modalServiceRef = ref<typeof ModalService | null>(null)
async function openAlert() {
  const response = await (modalServiceRef.value as typeof ModalService).alert({title: 'alert', body: 'some text'})
  console.log('response:', response)
}
async function openConfirm() {
  const response = await (modalServiceRef.value as typeof ModalService).confirm({title: 'confirm', body: 'some text'})
  console.log('response:', response)
}
</script>

<style scoped>

</style>