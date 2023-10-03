<template>
  <div>
      <slot></slot>
  </div>
</template>

<script setup>
import { inject, getCurrentInstance, onMounted, onUnmounted } from 'vue';

let instance = null

function onMenuItemClicked() {
  // menu?.toggle()
}


</script>

<style scoped></style>
