<template>
  <div class="d-flex flex-column gap-2">
    <b-dropdown>
      <template #button>select...</template>
      <b-dropdown-header>this is an header</b-dropdown-header>
      <b-dropdown-item>test</b-dropdown-item>
      <b-dropdown-item active>this is active</b-dropdown-item>
      <b-dropdown-divider/>
      <b-dropdown-item prevent-close>do not close on click</b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown variant="success" size="sm">
      <template #button>
        <i class="fas fa-trash fa-fw"></i>
        <span>hello world</span>
      </template>
      <b-dropdown-header>this is an header</b-dropdown-header>
      <b-dropdown-item>test</b-dropdown-item>
      <b-dropdown-item active>this is active</b-dropdown-item>
      <b-dropdown-divider/>
      <b-dropdown-item prevent-close>do not close on click</b-dropdown-item>
      <b-dropdown-item prevent-close>
        <input type="checkbox" name="" id="">
      </b-dropdown-item>
    </b-dropdown>
  </div>
    
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>