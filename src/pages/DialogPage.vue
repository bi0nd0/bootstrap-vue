<template>
    <div>
      <b-dialog title="Auto open" visible>
        <p>This opened automatically</p>
      </b-dialog>
      <b-dialog ref="dialogRefInner">
          <p>this is inner</p>
        </b-dialog>
      <b-dialog ref="dialogRef" body="Hello world" title="Warning" backdrop="static">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae facere nam facilis repudiandae adipisci perspiciatis consequatur dolore ad eveniet praesentium. Culpa eius vero laborum vel alias quaerat cum, ex in.</p>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        
        <button class="btn btn-sm btn-primary" @click="openInner" >Open inner modal</button>
      </b-dialog>

      <button class="btn btn-sm btn-primary" @click="openModal" >Open modal</button>


      <b-dialog ref="dialogRef1" body="Hello world" title="Warning">
        <p>1</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat nobis exercitationem, asperiores culpa dolorem laborum explicabo unde ab consectetur perspiciatis molestias dicta eveniet, velit quo illo officiis fugit accusantium!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat nobis exercitationem, asperiores culpa dolorem laborum explicabo unde ab consectetur perspiciatis molestias dicta eveniet, velit quo illo officiis fugit accusantium!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat nobis exercitationem, asperiores culpa dolorem laborum explicabo unde ab consectetur perspiciatis molestias dicta eveniet, velit quo illo officiis fugit accusantium!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat nobis exercitationem, asperiores culpa dolorem laborum explicabo unde ab consectetur perspiciatis molestias dicta eveniet, velit quo illo officiis fugit accusantium!</p>
      </b-dialog>
      <b-dialog ref="dialogRef2" body="Hello world" title="Warning">
        <p>2</p>
      </b-dialog>

    <div class="mt-2 d-flex gap-2">
      <button class="btn btn-sm btn-primary" @click="openAlert" >Open alert</button>
      <button class="btn btn-sm btn-primary" @click="openConfirm" >Open confirm</button>
      <button class="btn btn-sm btn-primary" @click="openMultiple" >Open multiple</button>
    </div>

    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illum aspernatur omnis esse? Reiciendis tempora sapiente aut corrupti placeat corporis magni dicta, facere, quibusdam velit incidunt temporibus voluptates quas.</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illum aspernatur omnis esse? Reiciendis tempora sapiente aut corrupti placeat corporis magni dicta, facere, quibusdam velit incidunt temporibus voluptates quas.</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illum aspernatur omnis esse? Reiciendis tempora sapiente aut corrupti placeat corporis magni dicta, facere, quibusdam velit incidunt temporibus voluptates quas.</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illum aspernatur omnis esse? Reiciendis tempora sapiente aut corrupti placeat corporis magni dicta, facere, quibusdam velit incidunt temporibus voluptates quas.</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illum aspernatur omnis esse? Reiciendis tempora sapiente aut corrupti placeat corporis magni dicta, facere, quibusdam velit incidunt temporibus voluptates quas.</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illum aspernatur omnis esse? Reiciendis tempora sapiente aut corrupti placeat corporis magni dicta, facere, quibusdam velit incidunt temporibus voluptates quas.</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illum aspernatur omnis esse? Reiciendis tempora sapiente aut corrupti placeat corporis magni dicta, facere, quibusdam velit incidunt temporibus voluptates quas.</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illum aspernatur omnis esse? Reiciendis tempora sapiente aut corrupti placeat corporis magni dicta, facere, quibusdam velit incidunt temporibus voluptates quas.</span>
      <div style="position: sticky; bottom: 0;">
        <span>sss</span>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DialogBox from '../components/Dialog/DialogBox.vue'
import { useDialog } from '../plugins/Plugin';

const dialog = useDialog()

const dialogRef = ref<typeof DialogBox | null>(null)

async function openModal() {
  const response = await dialogRef.value?.show()
  console.log('response:', response)
}

async function openAlert() {
  const response = await dialog.alert({title: 'alert', body: 'some text'})
  console.log('response:', response)
}
async function openConfirm() {
  const response = await dialog.confirm({title: 'confirm', body: 'some text'})
  console.log('response:', response)
}

const dialogRef1 = ref<typeof DialogBox | null>(null)
const dialogRef2 = ref<typeof DialogBox | null>(null)
function openMultiple() {
  dialogRef1.value?.show()
  setTimeout( () => {
    dialogRef2.value?.show()
  }, 1000)
}

const dialogRefInner = ref<typeof DialogBox | null>(null)
async function openInner() {
  const response = await dialogRefInner.value?.show()
  console.log(response)
}

</script>

<style scoped>

</style>