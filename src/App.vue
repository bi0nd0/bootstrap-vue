<template>
    <h1>Bootstrap Vue</h1>
    <ul>
      <li><router-link :to="{ name: 'modal' }">modal</router-link></li>
      <li><router-link :to="{ name: 'toast' }">toast</router-link></li>
      <li><router-link :to="{ name: 'table' }">table</router-link></li>
      <li><router-link :to="{ name: 'tooltips' }">tooltips</router-link></li>
      <li><router-link :to="{ name: 'dropdown' }">dropdown</router-link></li>
      <li><router-link :to="{ name: 'pagination' }">pagination</router-link></li>
    </ul>

    <div class="p-2">
      <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
