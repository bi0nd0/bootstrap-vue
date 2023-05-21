<template>
  <b-pagination v-model="page" :perPage="perPage" :totalItems="totalItems"/>
  <select @change="onChange">
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="25">25</option>
    <option value="50">50</option>
  </select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const page = ref(1)
const perPage = ref(10)
const totalItems = ref(100)

function onChange(event:Event) {
  console.log(event)
  const select:HTMLSelectElement = event.target as HTMLSelectElement
  perPage.value = parseInt(select.value)
}

</script>

<style scoped>

</style>