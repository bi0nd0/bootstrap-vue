<template>
    <Teleport to="body">
        <div ref="modalElement" class="modal fade" tabindex="-1" v-bind="{...$attrs}" @click.prevent="onBackdropClicked">
            <div class="modal-dialog" :class="sizeClass" >
                <div class="modal-content">
                    <div class="modal-header">
                        <slot name="header">
                            <h5 class="modal-title" v-html="title"></h5>
                        </slot>
                        <button type="button" class="btn-close" aria-label="Close" @click="onHeaderCloseClicked"></button>
                    </div>
                    <div class="modal-body">
                        <slot>
                            <span v-html="body"></span>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <template v-if="!okOnly">
                                <button type="button" class="btn btn-secondary" @click="onCancelClicked">
                                    <slot name="button-cancel"><span v-html="textCancel"></span></slot>
                                </button>
                            </template>
                            <button type="button" class="btn btn-primary" @click="onOkCLicked">
                                <slot name="button-ok"><span v-html="textOk"></span></slot>
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { PropType, ref, toRefs, computed, onMounted } from 'vue'
import { Modal } from 'bootstrap'

import SIZE from '../enums/Size'

// define a custom type that can be used a prop type
type BackdropType = boolean | "static" | undefined;

const props = defineProps({
    title: { type: String, default: '' },
    body: { type: String, default: '' },
    textCancel: { type: String, default: 'Cancel' },
    textOk: { type: [String, Boolean], default: 'Ok' },
    backdrop: {
        type: [String, Boolean] as PropType<BackdropType>,
        default: undefined as boolean | "static" | undefined
    },
    keyboard: { type: Boolean, default: true },
    focus: { type: Boolean, default: true },
    disableOutsideClick: { type: Boolean, default: false },
    okOnly: { type: Boolean, default: false },
    size: {
        type: String,
        default: '',
        validator(value: string) {

          // The value must match one of these strings
          return Object.values(SIZE).includes(value as SIZE)
        }
    }
})

const {
    backdrop, keyboard,
    focus, disableOutsideClick,
    size,
} = toRefs(props)

const sizeClass = computed(() => {
    let normalSize: string = size.value.toLowerCase()
    if(!Object.values(SIZE).includes(normalSize as SIZE)) return ''
    if(normalSize=='') return ''
    return `modal-${normalSize}`
})

const modalElement = ref()
let modal: Modal | undefined = undefined

let showResolve: Function | undefined = undefined
let showReject: Function | undefined = undefined
function show() {
    const promise = new Promise((resolve, reject) => {
        modal?.show()
        showResolve = resolve
        showReject = reject
    })
    return promise
}

function hide(status=true) {
    modal?.hide()
    if(typeof showResolve === 'function') showResolve(status)
}

function toggle() {
    modal?.toggle()
}

onMounted( () => {
     modal = new Modal(modalElement.value, {
        backdrop: backdrop.value,
        keyboard: keyboard.value,
        focus: focus.value,
     })
})

function onBackdropClicked(event: Event) {
    if(backdrop.value==='static') return
    console.log(event)
    // if(disableOutsideClick.value) return
    // hide(false)
}
function onHeaderCloseClicked() { hide(false) }
function onCancelClicked() { hide(false) }
function onOkCLicked() { hide(true) }

defineExpose({
    show,hide,toggle,
})

</script>

<style scoped>

</style>