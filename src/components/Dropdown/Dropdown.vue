<template>
    <div :class="dropdownClasses">
    <button class="btn dropdown-toggle" :class="buttonClasses" type="button" data-bs-toggle="aaaadropdown" aria-expanded="false" @click="onButtonClicked">
        <slot name="button">{{ text }}</slot>
    </button>
    <ul class="dropdown-menu" :class="{show: show}">
        <slot></slot>
    </ul>
    </div>
</template>

<script lang="ts">
enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    WARNING = 'warning',
    DANGER = 'danger',
    INFO = 'info'
}
</script>

<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';

const props = withDefaults(defineProps<{
    text?:string,
    variant?:Variant,
    right?:boolean,
    top?:boolean,
    centered?:boolean,
    dropup?:boolean,
    dropend?:boolean,
    dropstart?:boolean,
}>(), {
    text: '',
    variant: Variant.PRIMARY,
    right: false,
    top: false,
})

const { variant, centered, dropup, dropend, dropstart } = toRefs(props)
const show = ref(false)

const buttonClasses = computed( () => {
    const _classes:Array<string|object> = []
    if(variant.value) _classes.push(`btn-${variant.value}`)
    return _classes
} )

const dropdownClasses = computed( () => {
    const _classes:Array<string|object> = []
    if(centered?.value) _classes.push('dropdown-center')
    if(dropup?.value) _classes.push('dropup')
    if(dropstart?.value) _classes.push('dropstart')
    if(!dropstart?.value && dropend?.value) _classes.push('dropend')
    if(_classes.length===0) _classes.push('dropdown')
    else _classes.unshift('btn-group')
    return _classes
} )

function open() {
    show.value = true
}
function close() {
    show.value = false
}

const preventCloseAttribute = 'data-prevent-close'

let controller:AbortController
function onButtonClicked(event:Event) {
    const {currentTarget:button} = event
    
    show.value ? close() : open()
    if(show.value) {
        controller = new AbortController()
        setTimeout(() => {
            window.addEventListener('click', (e:Event) => {
                const { target } = e
                const preventClose = (target as Element)?.closest(`[${preventCloseAttribute}],[${preventCloseAttribute}=true]`)
                if(preventClose || (target === button)) return
                close()
                controller.abort()
            }, {signal: controller.signal})
        }, 0)
    }
}

</script>

<style scoped>

</style>