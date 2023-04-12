<template>
    <div>
    <Modal ref="modal" body="Hello world" title="Warning">
      <input type="file" />
    </Modal>
    <button class="btn btn-sm btn-primary" @click="openModal" >Open modal</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Modal} from '../components'

const modal = ref<typeof Modal | null>(null)

async function openModal() {
  const response = await modal.value?.show()
  console.log(response)
}
</script>

<style scoped>

</style>