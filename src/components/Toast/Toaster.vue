<template>
    <Teleport to="body">
        <div id="toast-wrapper">
            <template v-for="[position, group] in toasts" :key="position">
                <div class="toast-group" :class="`${position}`">
                    <template v-for="(options, index) in group" :key="options.id">
                        <Toast v-bind="options" @hidden="onToastHidden(position, options)"/>
                    </template>
                </div>

            </template>
        </div>
    </Teleport>
</template>

<script lang="ts">
/**
 * 
 * this component should be attached just once to the app.
 * once omunted, the toast function is exported, so it is available everywhere in the app:
 * 1. import { toast } from './components/Toast/Toaster.vue'
 * 2. toast(options, position)
 * 
 */

enum TOAST_POSITION {
    TOP_LEFT='top left',
    TOP_CENTER='top center',
    TOP_RIGHT='top right',
    MIDDLE_LEFT='middle left',
    MIDDLE_CENTER='middle center',
    MIDDLE_RIGHT='middle right',
    BOTTOM_LEFT='bottom left',
    BOTTOM_CENTER='bottom center',
    BOTTOM_RIGHT='bottom right',
}

let toast:Function

export { TOAST_POSITION, toast }
</script>

<script setup lang="ts">
import { getCurrentInstance, onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import {default as Toast, Props as ToastProps} from './Toast.vue'
import UIID from '../../utils/UIID'

/**
 * use Toaster options to extend the options available in the template
 * an ID is provided to add uniqueness to the toasts
 */
type ToasterOptions = ToastProps & {id?:string}

const defaultOptions:ToastProps = {
    visible:true,
    title:'',
    subtitle:'',
    body:'',
    animation: true,
    autohide: true,
    delay: 5000,
    variant: undefined,
}

const toasts = ref(new Map<TOAST_POSITION,Set<ToastProps>>())

toast = (options:ToastProps, position:TOAST_POSITION=TOAST_POSITION.TOP_RIGHT) => {
    const uiid = UIID()
    const _options:ToasterOptions = {...defaultOptions, ...options, id:uiid}
    let group = toasts.value.get(position)
    if(!(group instanceof Set)) group = new Set()
    group.add(_options)
    toasts.value.set(position, group)
}

function onToastHidden(position: TOAST_POSITION, options: ToasterOptions) {
    const group = toasts.value.get(position)
    group?.delete(options)
}

defineExpose({toast})

/* onBeforeMount( () => {
    const instance = getCurrentInstance()
    if(instance?.appContext.app.config.globalProperties.__toaster != null) {
        let _toster = instance.appContext.app.config.globalProperties.__toaster
        _toster = null
        // throw new Error("An instance of Toaster is already available");
    }
}) */

</script>

<style scoped>
#toast-wrapper {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top:0;
    left:0;
    pointer-events: none;
}
#toast-wrapper .toast-group {
    position: absolute;
    margin: 10px;
}
#toast-wrapper .toast-group.top {
    top: 0;
}
#toast-wrapper .toast-group.left {
    left: 0;
}
#toast-wrapper .toast-group.center {
    left: 50%;
    transform: translateX(-50%);
}
#toast-wrapper .toast-group.right {
    right: 0;
}
#toast-wrapper .toast-group.middle {
    top: 50%;
    transform: translateY(-50%);
}
#toast-wrapper .toast-group.bottom {
    bottom: 0;
}
#toast-wrapper .toast-group.center.middle {
    transform: translate(-50%, -50%);
}

#toast-wrapper :deep(.toast + .toast) {
    margin: 10px 0;
}
</style>