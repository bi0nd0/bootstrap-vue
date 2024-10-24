<template>
    <Teleport to="body">
        <DialogBox ref="modalRef" v-bind="{...props}"></DialogBox>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import {default as DialogBox, Props} from './DialogBox.vue'

const modalRef:Ref<typeof DialogBox | undefined> = ref(undefined)
const props:Ref<Props> = ref({})

function confirm(args:Props={}) {
    args.okOnly = false
    props.value = args
    return modalRef.value?.show()
}
function alert(args:Props={}) {
    args.okOnly = true
    props.value = args
    return modalRef.value?.show()
}

defineExpose({confirm, alert,})

</script>

<style scoped>

</style>