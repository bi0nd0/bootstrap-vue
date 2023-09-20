<template>
    <div ref="dropDownRef" :class="dropdownClasses">
        <div class="d-inline-block position-relative" v-click-outside="onClickOutside">
            <slot name="header" v-bind="{ ...slotData }">
                <button class="btn dropdown-toggle" :class="buttonClasses" type="button" aria-expanded="false" @click="onButtonClicked" :disabled="disabled">
                    <slot name="button">{{ text }}</slot>
                </button>
            </slot>
            <ul ref="dropDownMenuRef" class="dropdown-menu" :class="dropdownMenuClasses" @click="onMenuClicked">
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs, onMounted } from 'vue';
import SIZE from '../../enums/SIZE'
import Variant from '../../enums/Variant'

const dropDownMenuRef = ref()

const props = withDefaults(defineProps<{
    text?:string,
    variant?:Variant,
    right?:boolean,
    top?:boolean,
    centered?:boolean,
    dropup?:boolean,
    dropend?:boolean,
    dropstart?:boolean,
    dropdownMenuEnd?:boolean,
    size?: SIZE,
    disabled?:boolean,
}>(), {
    text: '',
    variant: Variant.PRIMARY,
    right: false,
    top: false,
    dropdownMenuEnd: false,
    size: SIZE.STANDARD
})

const dropDownRef = ref()
const { variant, centered, dropup, dropend, dropstart, dropdownMenuEnd } = toRefs(props)
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

const dropdownMenuClasses = computed( () => {
    const _classes:Array<string|object> = []
    if(show.value) _classes.push('show')
    if(dropdownMenuEnd.value) _classes.push('dropdown-menu-end')
    return _classes
} )

function open() {
    show.value = true
}
function close() {
    show.value = false
}

const preventCloseAttribute = 'data-prevent-close'

function onButtonClicked(event:Event) {
    show.value ? close() : open()
}

function onMenuClicked(event:Event) {
    const { target } = event
    const preventClose = (target as Element)?.closest(`[${preventCloseAttribute}],[${preventCloseAttribute}=true]`)
    if (!preventClose) close()
}

function onClickOutside() {
    if(!show.value) return
    close()
}

const slotData = {
    show,
    disabled: props.disabled,
    buttonClasses,
    onButtonClicked,
    onMenuClicked,
    onClickOutside,
    open,
    close,
}

</script>

<style scoped>
.dropstart .dropdown-menu {
    position: absolute;
    right:100%;
    top: 0;
}
.dropdown-menu.dropdown-menu-end {
    right: 0;
}
.dropend .dropdown-menu {
    position: absolute;
    left:100%;
    top: 0;
}
.dropup .dropdown-menu {
    position: absolute;
    bottom: 100%;
}
</style>