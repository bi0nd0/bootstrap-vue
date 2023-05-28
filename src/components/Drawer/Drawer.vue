<template>

    <Transition>
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
                                    <button type="button" class="ms-auto btn btn-secondary" @click="onCancelClicked">
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
    size?: SIZE
}

</script>

<script setup lang="ts">
import { ref, Ref, toRefs, computed, onMounted, getCurrentInstance, ComponentInternalInstance } from 'vue'
import SIZE from '../../enums/Size'

const props = withDefaults(defineProps<Props>(), {
    title: '',
    body: '',
    textCancel: 'Cancel',
    textOk: 'Ok',
    backdrop: 'static', //true,
    keyboard: true,
    focus: true,
    okOnly: false,
    size: SIZE.STANDARD
})

const {
    backdrop, keyboard,
    focus,
    size,
} = toRefs(props)

const sizeClass = computed(() => {
    let normalSize: string = size.value.toLowerCase()
    if(!Object.values(SIZE).includes(normalSize as SIZE)) return ''
    if(normalSize=='') return ''
    return `drawer-${normalSize}`
})

const drawerElement = ref()

const open:Ref<boolean> = ref(false)

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

defineExpose({
    show,hide,toggle,
})

</script>

<style scoped>
.drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0 0 0 / .3);
    --padding: 10px;
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
}
.drawer-header {
    display: flex;
    padding: var(--padding);
    vertical-align: center;
    border-bottom: solid 1px #eaeaea;
    position: relative;
}
.drawer-header .btn-close {
    margin-left: auto;
}
.drawer-body {
    flex: 1;
    overflow: auto;
    padding: var(--padding);
}
.drawer-footer {
    display: flex;
    padding: var(--padding);
    gap: 5px;
    border-top: solid 1px #eaeaea;
}

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
    transform: translateX(10%);
}
.v-enter-to .drawer-dialog,
.v-leave-from .drawer-dialog
{
    transform: translateX(0);
}
</style>