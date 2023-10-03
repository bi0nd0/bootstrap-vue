<template>
    <div>
      <NavMenu>
        <template v-slot="{ hide }">
            <MenuItem><span @click="hide">asdad</span></MenuItem>
            <MenuItem><span @click="hide">asdad</span></MenuItem>
            <MenuItem><span @click="hide">asdad</span></MenuItem>
            <NavMenu>
              <MenuItem><span @click="hide">asdad</span></MenuItem>
              <MenuItem><span @click="hide">asdad</span></MenuItem>
              <MenuItem><span @click="hide">asdad</span></MenuItem>
            </NavMenu>
        </template>
      </NavMenu>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from '../components/Menu/NavMenu.vue'
import MenuItem from '../components/Menu/MenuItem.vue'


</script>

<style scoped>

</style>