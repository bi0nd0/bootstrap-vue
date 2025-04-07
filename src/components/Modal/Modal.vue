<template>

    <div ref="modalElement" class="modal fade" tabindex="-1" v-bind="{...$attrs}" @click.self="onBackdropClicked" :style="{zIndex}">
        <div class="modal-dialog" :class="sizeClass" >
            <div class="modal-content">
                <slot name="header" v-bind="{ ...slotData }">
                <div class="modal-header">
                    <slot name="title" v-bind="{ ...slotData }">
                        <h5 class="modal-title" v-html="title"></h5>
                    </slot>
                    <slot name="header-close-button" v-bind="{ ...slotData }">
                        <button type="button" class="btn-close" aria-label="Close" @click="onHeaderCloseClicked"></button>
                    </slot>
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

// Define modal manager interface for TypeScript
interface ManagedModal {
    element: HTMLElement;
    priority: number;
    instance: ComponentInternalInstance | null;
}

// Create a properly typed global state
declare global {
    interface Window {
        _managedModals: ManagedModal[];
    }
}
// Static array to keep track of all managed modals across component instances
if (typeof window !== 'undefined' && !window._managedModals) {
    window._managedModals = [];
}
</script>

<script setup lang="ts">

import { ref, toRefs, computed, onMounted, getCurrentInstance, ComponentInternalInstance, watchEffect } from 'vue'
import { Modal } from 'bootstrap'
import { useStickyElementManager } from '../../utils'

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

// Safe access to global modal registry
const getManagedModals = (): ManagedModal[] => {
    return (typeof window !== 'undefined' && window._managedModals) ? window._managedModals : [];
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

const stickyManager = useStickyElementManager()

function show() {
    const promise = new Promise((resolve, reject) => {
        if (!modalElement.value) return

        stickyManager.removeStickyElements()
        adjustZIndex()

        // Mark the modal as managed
        modalElement.value.classList.add('managed-modal')

        // Add the modal to our tracked list before showing it
        const managedModals = getManagedModals()
        const priority = managedModals.length + 1
        const modalInfo: ManagedModal = {
            element: modalElement.value,
            priority: priority,
            instance: instance
        }
        
        managedModals.push(modalInfo)
        
        // Add a shown event listener to update visibility after Bootstrap's show
        modalElement.value.addEventListener('shown.bs.modal', () => {
            updateModalVisibility()
        }, { once: true })

        modal?.show()
        showResolve = resolve
        showReject = reject
        emit('onShown', modal)
    })
    return promise
}

function hide(status=true) {
    if (!modalElement.value) return
    
    // First remove this modal from our tracking array
    const managedModals = getManagedModals()
    const index = managedModals.findIndex(item => item.element === modalElement.value)
    if (index > -1) {
        managedModals.splice(index, 1)
    }
    
    // After modal is fully hidden, update visibility of remaining modals
    modalElement.value.addEventListener('hidden.bs.modal', () => {
        // Reset any inline styles we added
        if (modalElement.value) {
            modalElement.value.style.display = ''
        }
        
        // Update visibility for remaining modals
        updateModalVisibility()
    }, { once: true })

    modal?.hide()

    if(typeof showResolve === 'function') showResolve(status)
    emit('onHidden', modal)
    stickyManager.restoreStickyElements()
}

function toggle() {
    modal?.toggle()
}

// Function to hide all modals except the one with the highest priority
const updateModalVisibility = () => {
    const managedModals = getManagedModals()
    if (managedModals.length === 0) return
    
    // Sort by priority (higher value = more recently shown)
    managedModals.sort((a, b) => {
        return a.priority - b.priority
    })
    
    // Get the most recently shown modal (last in the array)
    const topModal = managedModals[managedModals.length - 1]
    
    // Hide all modals except the top one
    managedModals.forEach(item => {
        if (item.element !== topModal.element) {
            // Hide the modal visually but keep Bootstrap's show class
            // item.element.style.display = 'none'
            item.element.style.opacity = '0'
        } else {
            // Show the top modal
            // item.element.style.display = 'block'
            item.element.style.opacity = '1'
        }
    })
}

onMounted( () => {
    modal = new Modal(modalElement.value, {
        backdrop: backdrop?.value,
        keyboard: keyboard.value,
        focus: focus.value,
    })
    // Add the managed class to identify our modals
    modalElement.value.classList.add('managed-modal')

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
:global(body > div.modal-backdrop.show:has(~ .modal-backdrop.show)) {
    opacity: 0;
}
</style>