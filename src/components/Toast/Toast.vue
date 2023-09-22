<template>
    <div ref="toastRef" class="toast" :class="[variant ? `text-bg-${variant}` : '']" role="alert" aria-live="assertive" aria-atomic="true">
        <slot name="header" v-bind="{...slotData}">
            <div class="toast-header">
                <slot name="title" v-bind="{...slotData}">
                    <strong class="me-auto" v-text="title"></strong>
                </slot>
                <slot name="subtitle" v-bind="{...slotData}">
                    <small v-text="subtitle"></small>
                </slot>
                <button type="button" class="btn-close" aria-label="Close" @click="hide"></button>
            </div>
        </slot>
        <slot name="body" v-bind="{...slotData}">
            <div class="toast-body">
                <slot v-bind="{...slotData}">
                    <span v-text="body"></span>
                </slot>
            </div>
        </slot>
    </div>
</template>

<script lang="ts">
export interface Props {
    visible?: boolean,
    title?: string,
    subtitle?: string,
    body?: string,
    animation?: boolean,
    autohide?: boolean,
    delay?: number,
    variant?: VARIANT,
}
</script>

<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from 'vue'
import VARIANT from '../../enums/Variant'
import { Toast } from 'bootstrap'



const props =  withDefaults(defineProps<Props>(), {
    visible: false,
    title: '',
    subtitle: '',
    body: '',
    animation: true,
    autohide: true,
    delay: 15000,
})

const emit = defineEmits(['hide','hidden','show','shown'])
const {visible, animation, autohide, delay} = toRefs(props)
const toast = ref()
const toastRef = ref()

watch(visible, (value) => {
    shouldShow()
}, {immediate: true})


function show() { toast.value.show() }
function hide() { toast.value.hide() }
function dispose() { toast.value.dispose() }
function isShown() { toast.value.isShown() }
function getOrCreateInstance() { toast.value.getOrCreateInstance() }
function getInstance() { toast.value.getInstance() }
function shouldShow() {
    if(!toast.value) return
    if(visible.value===true) show()
    else hide()
}

function onHide() { emit('hide', toast.value) }
function onHidden() { emit('hidden', toast.value)}
function onShow() { emit('show', toast.value)}
async function onShown() { emit('shown', toast.value)}

const slotData = {show,hide,dispose,isShown,getOrCreateInstance,getInstance}

defineExpose({...slotData})

onMounted( () => {
    toastRef.value.addEventListener('hide.bs.toast', onHide)
    toastRef.value.addEventListener('hidden.bs.toast', onHidden)
    toastRef.value.addEventListener('show.bs.toast', onShow)
    toastRef.value.addEventListener('shown.bs.toast', onShown)

    toast.value = new Toast(toastRef.value, {
        animation: animation.value,
        autohide: autohide.value,
        delay: delay.value
    })
    shouldShow()
})

</script>

<style scoped>
.toast {
    position: relative;
    z-index: 9999;
}
</style>