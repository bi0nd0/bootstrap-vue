<template>
    <select v-model="selected">
        <template v-for="(option, index) in options" :key="option">
            <option :value="option">{{option}}</option>
        </template>
    </select>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

export interface Props {
    options: number[],
    modelValue: number,
}

const props = withDefaults(defineProps<Props>(), {
    options: () => [25,50,100],
    modelValue:50 
})

const emit = defineEmits(['update:modelValue'])

const {options} = toRefs(props)

const selected = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
})

</script>

<style scoped>

</style>