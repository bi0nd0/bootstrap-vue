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
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'


const modal = ref<typeof Modal | null>(null)
async function openModal() {
  const response = await modal.value?.show()
  console.log(response)
}
onMounted( () => {
} )
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
