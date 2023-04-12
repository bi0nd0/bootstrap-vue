<template>

    <b-dropdown>
      <template #button>select...</template>
      <b-dropdown-header>this is an header</b-dropdown-header>
      <b-dropdown-item>test</b-dropdown-item>
      <b-dropdown-item active>this is active</b-dropdown-item>
      <b-dropdown-divider/>
      <b-dropdown-item prevent-close>do not close on click</b-dropdown-item>
    </b-dropdown>

</template>

<script setup lang="ts">
</script>

<style scoped>

</style>