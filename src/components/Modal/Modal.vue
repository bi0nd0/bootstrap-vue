<template>

    <div ref="modalElement" class="modal fade" tabindex="-1" v-bind="{...$attrs}" @click.self="onBackdropClicked" :style="{zIndex}">
        <div class="modal-dialog" :class="sizeClass" >
            <div class="modal-content">
                <slot name="header" v-bind="{ ...slotData }">
                <div class="modal-header">
                    <slot name="title" v-bind="{ ...slotData }">
                        <h5 class="modal-title" v-html="title"></h5>
                    </slot>
                    <button type="button" class="btn-close" aria-label="Close" @click="onHeaderCloseClicked"></button>
                </div>
                </slot>
                <div class="modal-body">
                    <slot  v-bind="{ ...slotData }">
                        <span v-html="body"></span>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer" v-bind="{ ...slotData }" >
                        <template v-if="!okOnly">
                            <button type="button" class="btn btn-secondary" :class="btnSizeClass" @click="onCancelClicked">
                                <slot name="button-cancel"  v-bind="{ ...slotData }"><span v-html="textCancel"></span></slot>
                            </button>
                        </template>
                        <button type="button" class="btn btn-primary" :class="btnSizeClass" @click="onOkCLicked">
                            <slot name="button-ok"  v-bind="{ ...slotData }"><span v-html="textOk"></span></slot>
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
// define a custom type that can be used a prop type
type BackdropType = boolean | "static"

export interface Props {
    title?: string, 
    body?: string, 
    textCancel?: string, 
    textOk?: string | boolean, 
    backdrop?: BackdropType,
    keyboard?: boolean, 
    focus?: boolean, 
    disableOutsideClick?: boolean, 
    okOnly?: boolean, 
    size?: SIZE,
    btnSize?: SIZE,
    visible?: boolean, 
}
</script>

<script setup lang="ts">
import { ref, toRefs, computed, onMounted, getCurrentInstance, ComponentInternalInstance, watchEffect } from 'vue'
import { Modal } from 'bootstrap'

import SIZE, {useSize} from '../../enums/SIZE'

const props = withDefaults(defineProps<Props>(), {
    title: '',
    body: '',
    textCancel: 'Cancel',
    textOk: 'Ok',
    backdrop: true,
    keyboard: true,
    focus: true,
    disableOutsideClick: false,
    okOnly: false,
    size: SIZE.STANDARD,
    btnSize: SIZE.SMALL,
    visible: false,
})

const {
    backdrop, keyboard,
    focus, disableOutsideClick,
    size, btnSize
} = toRefs(props)

const emit = defineEmits(['onShown','onHidden'])

const sizeClass = computed(() => {
    return useSize(size.value, 'modal-')
})

const btnSizeClass = computed(() => {
    return useSize(btnSize.value, 'btn-')
})

const modalElement = ref()
let modal: Modal | undefined = undefined

const instance:ComponentInternalInstance|null = getCurrentInstance()

const countOpenModals = () => {
  const openModals = document.querySelectorAll('.modal.show')
  return openModals.length
}
// always 
const BASE_Z_INDEX = 1055
const zIndex = ref(BASE_Z_INDEX)
const adjustZIndex = () => {
  const totalOpenModals = countOpenModals()
  zIndex.value = BASE_Z_INDEX + totalOpenModals
}


let showResolve: Function | undefined = undefined
let showReject: Function | undefined = undefined
function show() {
    const promise = new Promise((resolve, reject) => {
        adjustZIndex()
        modal?.show()
        showResolve = resolve
        showReject = reject
        emit('onShown', modal)
    })
    return promise
}

function hide(status=true) {
    modal?.hide()
    if(typeof showResolve === 'function') showResolve(status)
    emit('onHidden', modal)
}

function toggle() {
    modal?.toggle()
}


onMounted( () => {
    modal = new Modal(modalElement.value, {
        backdrop: backdrop?.value,
        keyboard: keyboard.value,
        focus: focus.value,
    })
    watchEffect(() => {
        if (props?.visible === true) modal?.show()
        else modal?.hide()
    })
})

function onBackdropClicked(event: Event) {
    if(backdrop?.value==='static') return
    // if(disableOutsideClick.value) return
    hide(false)
}
function onHeaderCloseClicked() { hide(false) }
function onCancelClicked() { hide(false) }
function onOkCLicked() { hide(true) }

defineExpose({
    modal,
    show,hide,toggle,
    onHeaderCloseClicked,
    onCancelClicked,
    onOkCLicked,
})

const slotData = {show,hide,toggle, modal}

</script>

<style scoped>

</style>