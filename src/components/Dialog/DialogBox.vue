<template>
  <div class="dialog-wrapper" :style="{zIndex}">
    <div class="backdrop" @click="onBackdropClicked"></div>
    <dialog ref="dialog" :class="classes">
      <div class="content" :class="sizeClass">
        <slot name="header" v-bind="{ ...slotData }">
          <div data-header class="border-bottom">
            <div class="d-flex gap-2 p-2">
              <slot name="title" v-bind="{ ...slotData }">{{ title }}</slot>
              <slot name="header-close-button">
                <button
                  class="ms-auto"
                  type="button"
                  data-btn-close
                  aria-label="Close"
                  @click="hide(false)"
                ></button>
              </slot>
            </div>
          </div>
        </slot>
        <div class="p-2">
          <slot v-bind="{ ...slotData }">{{ body }}</slot>
        </div>
        <slot name="footer" v-bind="{ ...slotData }">
          <div data-footer class="border-top p-2">
            <div class="buttons">
              <button
                type="button"
                class="btn btn-secondary"
                :class="btnSizeClass"
                @click="hide(false)"
                v-if="!okOnly"
              >
                <slot name="textCancel" v-bind="{ ...slotData }">{{textCancel}}</slot>
              </button>
              <button
                type="button"
                class="btn btn-primary"
                :class="btnSizeClass"
                @click="hide(true)"
              >
                <slot name="textOk" v-bind="{ ...slotData }">{{textOk}}</slot>
              </button>
            </div>
          </div>
        </slot>
      </div>
    </dialog>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import SIZE, { useSize } from "../../enums/SIZE";
import { computed } from "vue";
import { onMounted } from "vue";
import { onUnmounted } from "vue";
import { toRefs } from "vue";
import { useStickyElementManager } from "../../utils";

type BackdropType = boolean | "static";

export interface Props {
  title?: string;
  body?: string;
  textCancel?: string;
  textOk?: string | boolean;
  backdrop?: BackdropType;
  keyboard?: boolean;
  focus?: boolean;
  disableOutsideClick?: boolean;
  okOnly?: boolean;
  size?: SIZE;
  btnSize?: SIZE;
  visible?: boolean;
  modal?: boolean;
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  title: "",
  body: "",
  textCancel: "Cancel",
  textOk: "Ok",
  backdrop: true,
  keyboard: true,
  focus: true,
  disableOutsideClick: false,
  okOnly: false,
  size: SIZE.STANDARD,
  btnSize: SIZE.SMALL,
  visible: false, // TODO
  modal: false, // wheter will be on top of everything
});

const { backdrop, disableOutsideClick, modal, size, btnSize} = toRefs(props)

const countOpenDialogs = () => {
  const openDialogs = document.querySelectorAll('dialog[open]')
  return openDialogs.length
}
// always 
const BASE_Z_INDEX = 1056
const zIndex = ref(BASE_Z_INDEX)

const opening = ref(false);
const closing = ref(false);
const isOpen = ref(false);
const dialog = ref();
const staticClass = ref(false)

const sizeClass = computed(() => {
    return useSize(size.value, 'modal-')
})

const btnSizeClass = computed(() => {
    return useSize(btnSize.value, 'btn-')
})

const classes = computed(() => ({
  opening: opening.value,
  closing: closing.value,
  'no-backdrop': backdrop.value === false,
  'static': staticClass.value,
}));

let resolve: ((value: boolean) => void) | null = null;
let reject: ((reason?: any) => void) | null = null;

const adjustZIndex = () => {
  const totalOpenDialogs = countOpenDialogs()
  zIndex.value = BASE_Z_INDEX + totalOpenDialogs
}

const stickyManager = useStickyElementManager();
const show = async () => {
  adjustZIndex()
  // Remove sticky elements
  stickyManager.removeStickyElements();

  opening.value = true;
  dialog.value.addEventListener(
    "animationend",
    () => {
      opening.value = false;
      isOpen.value = true;
    },
    { once: true }
  );
  if(modal.value===true) {
    dialog.value.showModal();
  }else {
    dialog.value.show();
  }

  return new Promise<boolean>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
};

const hide = async (result = false) => {
  closing.value = true;
  dialog.value.addEventListener(
    "animationend",
    () => {
      dialog.value.close();
      closing.value = false;
      isOpen.value = false;
      // this.dialog.remove();
      if (typeof resolve === "function") {
        resolve(result); // result is true if OK is clicked
      }
      resolve = null;
      reject = null;
      // Restore sticky elements after modal animation ends
      stickyManager.restoreStickyElements();
    },
    { once: true }
  );
};

const toggle = async () => {
  if (isOpen.value === true) hide();
  else show();
};

const showNoCloseAnimation = () => {
  staticClass.value = true
    setTimeout(() => {
      staticClass.value = false
    }, 200);
}

const onBackdropClicked = () => {
  if(backdrop.value === 'static' || disableOutsideClick.value === true) {
    showNoCloseAnimation()
    return
  }
  // The backdrop was clicked
  hide(false); // Or handle it in another way, such as resolving the promise
}

/**
 * handle when it behaves like a modal and has a ::backdrop
 */
if(modal.value === true) {
  function handleBackdropClick(event: Event) {
    if(backdrop.value === 'static' || disableOutsideClick.value === true) {
      showNoCloseAnimation()
      return
    }
    if (event.target === dialog.value) {
      // The backdrop was clicked
      hide(false); // Or handle it in another way, such as resolving the promise
    }
  }
  
  // manage backdrop click
  const backdropController = new AbortController()
  onMounted(() => {
    document.addEventListener('click', (e) => {
        handleBackdropClick(e)
      }, {signal: backdropController.signal})
  })
  onUnmounted(() => {
    backdropController.abort()
  })
}

const slotData = { show, hide, toggle, dialog };

defineExpose({
  show,
  hide,
  toggle,
});
</script>

<style scoped>
.dialog-wrapper {
  z-index: 1056;
  position: fixed;
}
/* Overlay */
dialog::backdrop {
  /* background-color: rgba(0, 0, 0, 0.5); */
  opacity: 0;
}

/* Dialog */
dialog {
  /* box-shadow: 0 3px 5px -2px hsl(220 40% 2% / calc(25% + 3%)),
    0 7px 14px -5px hsl(220 40% 2% / calc(25% + 5%)),
    0 0 0 100vw rgba(0, 0, 0, 0.5); */
    background-color: transparent;
    border: none;
    
    position: fixed;
    padding: 0;
    top: 30px;
    overflow: visible;
    transition: transform 300ms ease-in-out;
  }
  
  .content::before {
    content: '';
    width: 100vw;
    position: relative;
    display: block;
  }

dialog .content {
    max-width: 500px;
    border: 1px solid rgba(0, 0, 0, 0.175);
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    background-color: white;
    color: black;
    padding: 0;
    margin: auto;
}
dialog.static {
  transform: scale(1.02);
}

div:has(>dialog[open]:not(.no-backdrop)) .backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

/* .modal[open]::backdrop {
  animation: fade-in 500ms forwards;
} */
dialog[open] .content {
  animation: slide-down 300ms forwards, fade-in 500ms forwards;
}
/* .modal[open]::backdrop {
  animation: fade-in 500ms forwards;
} */

dialog.closing .content {
  display: block;
  pointer-events: none;
  inset: 0;
  animation: slide-up 300ms forwards, fade-out 500ms forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50px);
  }
}

dialog [data-btn-close] {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
  border: 0;
  border-radius: 0.375rem;
  opacity: 0.5;
  outline: none;
}

[data-footer] .buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

[data-header] .header-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}
</style>
