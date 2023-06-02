<template>
  <b-pagination v-model="page" :perPage="perPage" :totalItems="totalItems"/>
  <b-pagination-dropdown v-model="perPage" :options="perPageOptions" size="sm"/>
  <b-pagination-select v-model="perPage" :options="perPageOptions"/>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const page = ref(1)
const perPage = ref(10)
const perPageOptions = ref([5,10,25,50])
const totalItems = ref(100)

</script>

<style scoped>

</style>