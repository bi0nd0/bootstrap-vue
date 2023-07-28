<template>
    <li :data-prevent-close="preventClose ? '' : null"><a class="dropdown-item" :class="{active:active}" href="#" @click.prevent><slot></slot></a></li>
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