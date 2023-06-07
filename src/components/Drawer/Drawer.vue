<template>

    <Transition @before-enter="onAnimation" @after-leave="onAnimation">
        <template v-if="open">
            <div ref="drawerElement" class="drawer" tabindex="-1" v-bind="{...$attrs}" @click.self="onBackdropClicked">
                <div class="drawer-dialog" :class="sizeClass" >
                    <div class="drawer-content">
                        <div class="drawer-header">
                            <slot name="header">
                                <h5 class="drawer-title" v-html="title"></h5>
                            </slot>
                            <button type="button" class="btn-close" aria-label="Close" @click="onHeaderCloseClicked"></button>
                        </div>
                        <div class="drawer-body">
                            <slot>
                                <span v-html="body"></span>
                            </slot>
                        </div>
                        <div class="drawer-footer">
                            <slot name="footer">
                                <template v-if="!okOnly">
                                    <button type="button" class="ms-auto btn btn-secondary" :class="btnSizeClass" @click="onCancelClicked">
                                        <slot name="button-cancel"><span v-html="textCancel"></span></slot>
                                    </button>
                                </template>
                                <button type="button" class="btn btn-primary" :class="btnSizeClass" @click="onOkCLicked">
                                    <slot name="button-ok"><span v-html="textOk"></span></slot>
                                </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Transition>
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
    lazy?: boolean // not yet implemented
}

</script>

<script setup lang="ts">
import { ref, Ref, toRefs, computed, getCurrentInstance, ComponentInternalInstance, watch } from 'vue'
import SIZE, {useSize} from '../../enums/SIZE'
import Drawers from './Drawers'

const props = withDefaults(defineProps<Props>(), {
    title: '',
    body: '',
    textCancel: 'Cancel',
    textOk: 'Ok',
    backdrop: 'static', //true,
    keyboard: true,
    focus: true,
    okOnly: false,
    size: SIZE.STANDARD,
    btnSize: SIZE.SMALL,
    lazy: false,
})

const {
    backdrop, keyboard,
    focus,
    size,btnSize,
} = toRefs(props)

const sizeClass = computed(() => {
    return useSize(size.value, 'drawer-')
})

const btnSizeClass = computed(() => {
    return useSize(btnSize.value, 'btn-')
})

const drawerElement = ref()

const open:Ref<boolean> = ref(false)
const instance:ComponentInternalInstance|null = getCurrentInstance()



// if(Array.isArray(window.__DRAWERS)) drawerWindow.__DRAWERS = new Set()


const applyBodyStyle = () => {
    document.body.classList.add('drawer-open')
}

const removeBodyStyle = () => {
    document.body.classList.remove('drawer-open')
}

let showResolve: Function | undefined = undefined
let showReject: Function | undefined = undefined
async function show() {
    if(open.value===true) return
    const promise = new Promise((resolve, reject) => {
        open.value = true
        showResolve = resolve
        showReject = reject
    })
    return promise
}

function hide(status=true) {
    open.value = false
    if(typeof showResolve === 'function') showResolve(status)
}

function toggle() {
    if(open.value===true) show()
    else hide(false)
}

function onBackdropClicked(event: Event) {
    if(backdrop?.value==='static') return
    // if(disableOutsideClick.value) return
    hide(false)
}
function onHeaderCloseClicked() { hide(false) }
function onCancelClicked() { hide(false) }
function onOkCLicked() { hide(true) }
function onAnimation() {
    if(open.value===true) {
        Drawers.add(instance)
    }else {
        Drawers.delete(instance)
    }
}

defineExpose({
    show,hide,toggle,
})

</script>

<style>
body.drawer-open {
    overflow: hidden;
}
</style>

<style scoped>
.drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / 0.15);
    --b-padding: 1rem;
    --b-border-color: #dee2e6;
}
.drawer-dialog {
    max-width: 856px;
    height: 100%;
    margin-left: auto;
    background-color: rgb(255 255 255);
}
.drawer-sm {

}
.drawer-lg {

}
.drawer-xl {

}
.drawer-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important
}
.drawer-header {
    display: flex;
    padding: var(--b-padding);
    vertical-align: center;
    border-bottom: solid 1px var(--b-border-color);
    position: relative;
}
.drawer-header .btn-close {
    margin-left: auto;
}

.drawer-body {
    flex: 1;
    overflow: auto;
    padding: var(--b-padding);
}
.drawer-footer {
    display: flex;
    padding: var(--b-padding);
    gap: 5px;
    border-top: solid 1px var(--b-border-color);
}
/* transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 300ms ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-active .drawer-dialog,
.v-leave-active .drawer-dialog {
  transition: transform 300ms ease;
}

.v-enter-from .drawer-dialog,
.v-leave-to .drawer-dialog
{
    transform: translateX(100px);
}
.v-enter-to .drawer-dialog,
.v-leave-from .drawer-dialog
{
    transform: translateX(0);
}
</style>