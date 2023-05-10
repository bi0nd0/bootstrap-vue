<template>
    <div>
      <b-modal ref="modalRef" body="Hello world" title="Warning">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae facere nam facilis repudiandae adipisci perspiciatis consequatur dolore ad eveniet praesentium. Culpa eius vero laborum vel alias quaerat cum, ex in.</p>
      </b-modal>
      <button class="btn btn-sm btn-primary" @click="openModal" >Open modal</button>


      <b-modal ref="modalRef1" body="Hello world" title="Warning">
        <p>1</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat nobis exercitationem, asperiores culpa dolorem laborum explicabo unde ab consectetur perspiciatis molestias dicta eveniet, velit quo illo officiis fugit accusantium!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat nobis exercitationem, asperiores culpa dolorem laborum explicabo unde ab consectetur perspiciatis molestias dicta eveniet, velit quo illo officiis fugit accusantium!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat nobis exercitationem, asperiores culpa dolorem laborum explicabo unde ab consectetur perspiciatis molestias dicta eveniet, velit quo illo officiis fugit accusantium!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat nobis exercitationem, asperiores culpa dolorem laborum explicabo unde ab consectetur perspiciatis molestias dicta eveniet, velit quo illo officiis fugit accusantium!</p>
      </b-modal>
      <b-modal ref="modalRef2" body="Hello world" title="Warning">
        <p>2</p>
      </b-modal>

    <div class="mt-2 d-flex gap-2">
      <button class="btn btn-sm btn-primary" @click="openAlert" >Open alert</button>
      <button class="btn btn-sm btn-primary" @click="openConfirm" >Open confirm</button>
      <button class="btn btn-sm btn-primary" @click="openMultiple" >Open multiple</button>
    </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../components/Modal/Modal.vue'
import { useModal } from '../plugins/Plugin';

const modal = useModal()

const modalRef = ref<typeof Modal | null>(null)

async function openModal() {
  const response = await modalRef.value?.show()
  console.log('response:', response)
}

async function openAlert() {
  const response = await modal.alert({title: 'alert', body: 'some text'})
  console.log('response:', response)
}
async function openConfirm() {
  const response = await modal.confirm({title: 'confirm', body: 'some text'})
  console.log('response:', response)
}

const modalRef1 = ref<typeof Modal | null>(null)
const modalRef2 = ref<typeof Modal | null>(null)
function openMultiple() {
  modalRef1.value?.show()
  setTimeout( () => {
    modalRef2.value?.show()
  }, 1000)
}

</script>

<style scoped>

</style>