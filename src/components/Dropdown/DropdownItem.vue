<template>
    <li :data-prevent-close="preventClose ? '' : null"><a class="dropdown-item" :class="{active:active}" href="#" @click.prevent="onClick" ><slot></slot></a></li>
</template>



<script setup lang="ts">
import { getCurrentInstance, toRefs } from 'vue';


const emit = defineEmits(['click'])
const props = withDefaults(defineProps<{
    active?:boolean,
    preventClose?:boolean
}>(), {})

const {preventClose} = toRefs(props)

function onClick() {
    const instance = getCurrentInstance()
    emit('click', instance)
}
</script>

<style scoped>

</style>