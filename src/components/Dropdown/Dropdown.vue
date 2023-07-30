<template>
    <div ref="dropDownRef" :class="dropdownClasses">
        <div class="d-inline-block" v-click-outside="onClickOutside">
            <button class="btn dropdown-toggle" :class="buttonClasses" type="button" aria-expanded="false" @click="onButtonClicked" :disabled="disabled">
                <slot name="button">{{ text }}</slot>
            </button>
            <ul ref="menuRef" class="dropdown-menu" :class="{show: show}" @click="onMenuClicked">
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs, onMounted } from 'vue';
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
    disabled?:boolean,
}>(), {
    text: '',
    variant: Variant.PRIMARY,
    right: false,
    top: false,
    size: SIZE.STANDARD
})

const dropDownRef = ref()
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

const useIntersectionObserver = (targetElement:Element, callback:Function, options={}) => {
    const intersectionObserver = new IntersectionObserver((entries, options) => {
        entries.forEach(entry => {
            console.log(entry)
            callback(entry)
        });
    });

    intersectionObserver.observe(targetElement);
    return intersectionObserver
}

const menuRef = ref()
let observer
onMounted(() =>{
    observer = useIntersectionObserver(menuRef.value, (entry:IntersectionObserverEntry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            // The target element is intersecting the viewport
            console.log('Element is intersecting!');
            if(entry.intersectionRatio<1) {
                const rect1 = entry.boundingClientRect
                const rect2 = entry.intersectionRect

                const overlap = {
                    top: Math.max(0, rect1.top - rect2.top),
                    right: Math.max(0, rect1.right - rect2.right),
                    bottom: Math.max(0, rect1.bottom - rect2.bottom),
                    left: Math.max(0, rect1.left - rect2.left),
                }
                let x = 0
                if(overlap.left !== 0) x = overlap.left
                else if(overlap.right !== 0) x = -overlap.right
                let y = 0
                if(overlap.top !== 0) x = overlap.top
                else if(overlap.bottom !== 0) x = -overlap.bottom
                
                
                menuRef.value.style.transform = `translate(${x}px, ${y}px)`
                console.log(x, y, overlap)
                /* let rect = menuRef.value.parentNode?.getBoundingClientRect();
                console.log('overlapping', rect, entry.intersectionRect)
                const adjustment = rect.right - entry.intersectionRect.right
                console.log(adjustment)
                const delta = entry.intersectionRect.width - entry.boundingClientRect.width + adjustment
                menuRef.value.style.transform = `translateX(${delta}px)` */
            }
        } else {
            // The target element is NOT intersecting the viewport
            console.log('Element is not intersecting!');
        }
    })
})
</script>

<style scoped>
.dropstart .dropdown-menu {
    position: absolute;
    right:100%;
    top: 0;
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