<template>
  <div>
    <div @click="onButtonClicked">
      <slot name="button" v-bind="{ ...slotData }">
        <span>menu ></span>
      </slot>
    </div>

    <template v-if="_open">
      <slot name="header" v-bind="{ ...slotData }"></slot>
      <slot v-bind="{ ...slotData }"></slot>
      <slot name="footer" v-bind="{ ...slotData }"></slot>
    </template>
  </div>
</template>

<script lang="ts">
export interface Props {
  button?: string;
  size?: SIZE;
  open?: boolean;
}
</script>

<script setup lang="ts">
import { provide, ref, toRefs, watchEffect } from "vue";
import SIZE, { useSize } from "../../enums/SIZE";

const props = withDefaults(defineProps<Props>(), {
  button: "",
  size: SIZE.STANDARD,
  open: false,
});

const { open } = toRefs(props);
const _open = ref(false);
const children = ref(new Set());

const show = () => (_open.value = true);
const hide = () => (_open.value = false);
const toggle = () => (_open.value = !_open.value);

function onButtonClicked() {
  toggle();
}

let slotData: {
  toggle: FunctionType;
  show: FunctionType;
  hide: FunctionType;
  children: Set<any>;
} = { toggle, show, hide, children }

watchEffect(() => {
  _open.value = open.value;
});
</script>

<style scoped></style>
