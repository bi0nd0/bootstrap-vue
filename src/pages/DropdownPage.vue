<template>

    <Dropdown>
      <template #button>select...</template>
      <DropdownHeader>this is an header</DropdownHeader>
      <DropdownItem>test</DropdownItem>
      <DropdownItem active>this is active</DropdownItem>
      <DropdownDivider/>
      <DropdownItem prevent-close>do not close on click</DropdownItem>
    </Dropdown>

</template>

<script setup lang="ts">
import { Dropdown, DropdownItem,DropdownHeader, DropdownDivider } from '../components'
</script>

<style scoped>

</style>