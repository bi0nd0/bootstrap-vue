<template>

    <b-toast visible title="Hello" subtitle="11 mins ago" body="Hello world!"/>
    <b-toast visible>
      <template #header="{hide}">
        <div class="d-flex">
          <span class="me-auto">Hello</span>
          <button class="btn-close" @click="hide()"></button>
        </div>
        </template>
      Hello world
    </b-toast>
    <div class="mt-2">
      <button class="btn btn-sm btn-primary" @click="randomToast" >Randomly positioned Toast!</button>
    </div>

</template>

<script setup lang="ts">
import { TOAST_POSITION } from '../components/Toast/Toaster.vue';

import {useToaster} from '../plugins/Plugin'

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