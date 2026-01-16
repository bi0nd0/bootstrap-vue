<template>
    <div ref="dropDownRef" :class="dropdownClasses" class="dropdown-wrapper">
        <div ref="triggerRef" class="d-inline-block position-relative" v-click-outside="onClickOutside">
            <slot name="header" v-bind="{ ...slotData }">
                <button class="btn dropdown-toggle" :class="buttonClasses" type="button" aria-expanded="false" @click="onButtonClicked" :disabled="disabled">
                    <slot name="button" v-bind="{ ...slotData }">{{ text }}</slot>
                </button>
            </slot>
            <Teleport v-if="isTeleporting" :to="resolvedMenuContainer">
                <ul ref="dropDownMenuRef" class="dropdown-menu" :class="dropdownMenuClasses" :style="menuInlineStyles" @click="onMenuClicked">
                    <slot v-bind="{ ...slotData }"></slot>
                </ul>
            </Teleport>
            <ul v-else ref="dropDownMenuRef" class="dropdown-menu" :class="dropdownMenuClasses" @click="onMenuClicked">
                <slot v-bind="{ ...slotData }"></slot>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch, reactive, onBeforeUnmount } from 'vue';
import SIZE from '../../enums/SIZE'
import Variant from '../../enums/Variant'

type MenuContainer = string | HTMLElement
type MenuStyles = {
    top: string
    left: string
    minWidth: string
    position: 'fixed'
    zIndex: string
    right: string
}

const PORTAL_Z_INDEX = 1050
const WINDOW_SCROLL_EVENT = 'scroll'
const WINDOW_RESIZE_EVENT = 'resize'

const dropDownMenuRef = ref<HTMLUListElement | null>(null)

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
    appendToBody?:boolean,
    menuContainer?:MenuContainer,
}>(), {
    text: '',
    variant: Variant.PRIMARY,
    right: false,
    top: false,
    menuEnd: false,
    size: SIZE.STANDARD,
    appendToBody: false
})

const dropDownRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const show = ref(false)

// Create independent refs initialized with prop values
const adjustedVariant = ref(props.variant);
const adjustedCentered = ref(props.centered);
const adjustedDropup = ref(props.dropup);
const adjustedDropend = ref(props.dropend);
const adjustedDropstart = ref(props.dropstart);
const adjustedMenuEnd = ref(props.menuEnd);

const resolvedMenuContainer = computed<MenuContainer | null>(() => {
    if (!props.appendToBody) return null
    if (props.menuContainer) return props.menuContainer
    if (typeof document === 'undefined') return null
    return document.body
})

const isTeleporting = computed(() => props.appendToBody && resolvedMenuContainer.value !== null)

const menuStyles = reactive<MenuStyles>({
    top: '0px',
    left: '0px',
    minWidth: '0px',
    position: 'fixed',
    zIndex: String(PORTAL_Z_INDEX),
    right: 'auto',
})

const menuInlineStyles = computed(() => (isTeleporting.value ? menuStyles : undefined))

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

const getTriggerRect = () => {
    const triggerEl = triggerRef.value
    if (!triggerEl) return null
    return triggerEl.getBoundingClientRect()
}

const getMenuRect = () => {
    const menuEl = dropDownMenuRef.value
    if (!menuEl) return null
    return menuEl.getBoundingClientRect()
}

const adjustPosition = () => {
    if (!show.value) return
    // Check if there's enough space below the button
    const buttonRect = getTriggerRect()
    const dropdownRect = getMenuRect()
    if (!buttonRect || !dropdownRect) return

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

const updateMenuPosition = () => {
    if (!isTeleporting.value || !show.value) return
    const buttonRect = getTriggerRect()
    const menuRect = getMenuRect()
    if (!buttonRect || !menuRect) return

    // Keep teleported menus aligned to the trigger using viewport coordinates.
    let top = buttonRect.bottom
    let left = buttonRect.left

    if (adjustedDropstart.value) {
        top = buttonRect.top
        left = buttonRect.left - menuRect.width
    } else if (adjustedDropend.value) {
        top = buttonRect.top
        left = buttonRect.right
    } else {
        if (adjustedDropup.value) {
            top = buttonRect.top - menuRect.height
        }
        if (adjustedMenuEnd.value) {
            left = buttonRect.right - menuRect.width
        }
    }

    menuStyles.top = `${Math.round(top)}px`
    menuStyles.left = `${Math.round(left)}px`
    menuStyles.minWidth = `${Math.round(buttonRect.width)}px`
    menuStyles.position = 'fixed'
    menuStyles.zIndex = String(PORTAL_Z_INDEX)
    menuStyles.right = 'auto'
}

let hasWindowListeners = false
const onWindowUpdated = () => {
    adjustPosition()
    updateMenuPosition()
}

const addWindowListeners = () => {
    if (hasWindowListeners || typeof window === 'undefined') return
    // Capture scroll events so nested containers keep the menu aligned.
    window.addEventListener(WINDOW_SCROLL_EVENT, onWindowUpdated, true)
    window.addEventListener(WINDOW_RESIZE_EVENT, onWindowUpdated)
    hasWindowListeners = true
}

const removeWindowListeners = () => {
    if (!hasWindowListeners || typeof window === 'undefined') return
    window.removeEventListener(WINDOW_SCROLL_EVENT, onWindowUpdated, true)
    window.removeEventListener(WINDOW_RESIZE_EVENT, onWindowUpdated)
    hasWindowListeners = false
}



async function open() {
    show.value = true
    await nextTick();
    adjustPosition()
    if (isTeleporting.value) {
        updateMenuPosition()
        addWindowListeners()
    }
}
function close() {
    show.value = false
    removeWindowListeners()
}

const PREVENT_CLOSE_ATTRIBUTE = 'data-prevent-close'

function onButtonClicked(event:Event) {
    show.value ? close() : open()
}

function onMenuClicked(event:Event) {
    const { target } = event
    const preventClose = (target as Element)?.closest(`[${PREVENT_CLOSE_ATTRIBUTE}],[${PREVENT_CLOSE_ATTRIBUTE}=true]`)
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
    if (!value) removeWindowListeners()
}, {immediate: true})

onBeforeUnmount(() => {
    removeWindowListeners()
})

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
  z-index: 1024;
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
