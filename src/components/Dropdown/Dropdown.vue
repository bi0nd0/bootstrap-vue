<template>
    <div ref="dropDownRef" :class="dropdownClasses" class="dropdown-wrapper">
        <div class="d-inline-block position-relative" v-click-outside="onClickOutside">
            <slot name="header" v-bind="{ ...slotData }">
                <button class="btn dropdown-toggle" :class="buttonClasses" type="button" aria-expanded="false" @click="onButtonClicked" :disabled="disabled">
                    <slot name="button" v-bind="{ ...slotData }">{{ text }}</slot>
                </button>
            </slot>
            <ul ref="dropDownMenuRef" class="dropdown-menu" :class="dropdownMenuClasses" @click="onMenuClicked">
                <slot v-bind="{ ...slotData }"></slot>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs, nextTick, watch } from 'vue';
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
    menuEnd?:boolean,
    size?: SIZE,
    disabled?:boolean,
}>(), {
    text: '',
    variant: Variant.PRIMARY,
    right: false,
    top: false,
    menuEnd: false,
    size: SIZE.STANDARD
})

const dropDownRef = ref()
const show = ref(false)

// Create independent refs initialized with prop values
const adjustedVariant = ref(props.variant);
const adjustedCentered = ref(props.centered);
const adjustedDropup = ref(props.dropup);
const adjustedDropend = ref(props.dropend);
const adjustedDropstart = ref(props.dropstart);
const adjustedMenuEnd = ref(props.menuEnd);


const emit = defineEmits(['open','close', 'toggle'])

const buttonClasses = computed( () => {
    const _classes:Array<string|object> = []
    if(adjustedVariant?.value) _classes.push(`btn-${adjustedVariant.value}`)
    if(props.size) _classes.push(`btn-${props.size}`)
    return _classes
} )

const dropdownClasses = computed( () => {
    const _classes:Array<string|object> = []
    if(adjustedCentered?.value) _classes.push('dropdown-center')
    if(adjustedDropup?.value) _classes.push('dropup')
    if(adjustedDropstart?.value) _classes.push('dropstart')
    if(!adjustedDropstart?.value && adjustedDropend?.value) _classes.push('dropend')
    if(_classes.length===0) _classes.push('dropdown')
    _classes.unshift('btn-group')
    return _classes
} )

const dropdownMenuClasses = computed( () => {
    const _classes:Array<string|object> = []
    if(show.value) _classes.push('show')
    if(adjustedMenuEnd.value) _classes.push('dropdown-menu-end')
    return _classes
} )

/* ----- */

const adjustPosition = () => {
    if (!show.value) return
    // Check if there's enough space below the button
    const buttonRect = dropDownRef.value.getBoundingClientRect();
    const dropdownRect = dropDownMenuRef.value.getBoundingClientRect();

    const spaceBelow = window.innerHeight - buttonRect.bottom;
    const spaceAbove = buttonRect.top;
    const spaceRight = window.innerWidth - buttonRect.right;
    const spaceLeft = buttonRect.left;

    // Adjust vertical position
    adjustedDropup.value = spaceBelow < dropdownRect.height && spaceAbove >= dropdownRect.height;

    // Adjust horizontal alignment
    adjustedMenuEnd.value = spaceRight < dropdownRect.width && spaceLeft >= dropdownRect.width;
}
/* ----- */



async function open() {
    show.value = true
    await nextTick();
    adjustPosition()
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

watch(show, (value, oldValue) => {
    if(typeof oldValue === 'undefined') return
    if(value===oldValue) return
    emit('toggle', {show: value})
    if(value===true) emit('open', {show: value})
    else emit('close', {show: value})
}, {immediate: true})

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

defineExpose({
    ...slotData,
})

</script>

<style scoped>
.dropdown-wrapper {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  left: 0;
  top: 100%;
}

.dropstart .dropdown-menu {
  right: 100%;
  left: auto;
  top: 0;
}

.dropdown-menu.dropdown-menu-end {
  right: 0;
  left: auto;
}

.dropend .dropdown-menu {
  left: 100%;
  top: 0;
}

.dropup .dropdown-menu {
  bottom: 100%;
  top: auto; /* Override top for dropup */
}
</style>