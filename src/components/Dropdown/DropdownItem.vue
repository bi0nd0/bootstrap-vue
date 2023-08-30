<template>
    <li :data-prevent-close="preventClose ? '' : null"><span class="dropdown-item" :class="{active:active}" role="button" tabindex="0"><slot></slot></span></li>
</template>



<script setup lang="ts">
import { toRefs } from 'vue';

const props = withDefaults(defineProps<{
    active?:boolean,
    preventClose?:boolean
}>(), {})

const {preventClose} = toRefs(props)
</script>

<style scoped></style>