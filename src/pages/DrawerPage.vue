<template>
    <div>

      <b-drawer ref="drawerRef" body="Hello world" title="Warning">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae facere nam facilis repudiandae adipisci perspiciatis consequatur dolore ad eveniet praesentium. Culpa eius vero laborum vel alias quaerat cum, ex in.</p>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <b-drawer ref="innerDrawerRef" body="Hello world" title="Warning">
          <p>this is an inner drawer</p>
        </b-drawer>
        <button class="btn btn-sm btn-primary" @click="openInnerDrawer" >Open inner drawer</button>
      </b-drawer>
      <button class="btn btn-sm btn-primary" @click="openDrawer" >Open drawer</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Drawer from '../components/Drawer/Drawer.vue'


const drawerRef = ref<typeof Drawer | null>(null)

async function openDrawer() {
  const response = await drawerRef.value?.show()
  console.log('response:', response)
}

const innerDrawerRef = ref<typeof Drawer | null>(null)

async function openInnerDrawer() {
  const response = await innerDrawerRef.value?.show()
  console.log('response:', response)
}



</script>

<style scoped>

</style>