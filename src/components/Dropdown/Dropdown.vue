<template>
    <div :class="dropdownClasses">
        <button class="btn dropdown-toggle" :class="buttonClasses" type="button" aria-expanded="false" @click="onButtonClicked">
            <slot name="button">{{ text }}</slot>
        </button>
        <ul class="dropdown-menu" :class="{show: show}" @click="onMenuClicked">
            <slot></slot>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import SIZE from '../../enums/SIZE'
import Variant from '../../enums/Variant'

const props = withDefaults(defineProps<{
    text?:string,
    variant?:Variant,
    right?:boolean,
    top?:boolean,
    centered?:boolean,
    dropup?:boolean,
    dropend?:boolean,
    dropstart?:boolean,
    size?: SIZE,
}>(), {
    text: '',
    variant: Variant.PRIMARY,
    right: false,
    top: false,
    size: SIZE.STANDARD
})

const { variant, centered, dropup, dropend, dropstart } = toRefs(props)
const show = ref(false)

const buttonClasses = computed( () => {
    const _classes:Array<string|object> = []
    if(variant?.value) _classes.push(`btn-${variant.value}`)
    if(props.size) _classes.push(`btn-${props.size}`)
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
    show.value ? close() : open()
}

function onMenuClicked(event:Event) {
    const { target } = event
    const preventClose = (target as Element)?.closest(`[${preventCloseAttribute}],[${preventCloseAttribute}=true]`)
    if (!preventClose) close()
}

</script>

<style scoped>

</style>