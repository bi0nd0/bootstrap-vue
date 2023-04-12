<template>

    <Toast visible title="Hello" subtitle="11 mins ago" body="Hello world!"/>
    <div class="mt-2">
      <button class="btn btn-sm btn-primary" @click="randomToast" >Rnadomly positioned Toast!</button>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Toast, Toaster } from '../components';
import { TOAST_POSITION } from '../components/Toast/Toaster.vue';

import {useToaster} from '../plugins/MyPlugin'

// get the toaster from the plugin
const toaster = useToaster()

function randomToast() {
  const values = Object.values(TOAST_POSITION)
  const randomIndex = Math.floor(Math.random() * values.length)
  const position = values[randomIndex]
  toaster.toast({body:`hello world`, title: `${position}`}, position)
  // toast({body:`hello world`, title: `${position}`}, position)
}
</script>

<style scoped>

</style>