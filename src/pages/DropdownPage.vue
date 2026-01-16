<template>
  <div class="d-flex flex-column gap-2">
    <b-dropdown @open="onOpened" @close="onClosed" @toggle="onToggle">
      <template #button>select...</template>
      <b-dropdown-header>this is an header</b-dropdown-header>
      <b-dropdown-item>test</b-dropdown-item>
      <b-dropdown-item active>this is active</b-dropdown-item>
      <b-dropdown-divider/>
      <b-dropdown-item prevent-close>do not close on click</b-dropdown-item>
    </b-dropdown>

    <b-dropdown>
      <template #header="{ onButtonClicked, disabled, buttonClasses}">
        <button @click="onButtonClicked" :disabled="disabled" :class="buttonClasses">
          select...
        </button>
      </template>
      <b-dropdown-header>this is an header</b-dropdown-header>
      <b-dropdown-item>test</b-dropdown-item>
      <b-dropdown-item active>this is active</b-dropdown-item>
      <b-dropdown-divider/>
      <b-dropdown-item prevent-close>do not close on click</b-dropdown-item>
    </b-dropdown>
    
    <b-dropdown variant="success" size="sm">
      <template #button>
        <i class="fas fa-trash fa-fw"></i>
        <span>hello world</span>
      </template>
      <b-dropdown-header>this is an header</b-dropdown-header>
      <b-dropdown-item>test</b-dropdown-item>
      <b-dropdown-item active>this is active</b-dropdown-item>
      <b-dropdown-divider/>
      <b-dropdown-item prevent-close>do not close on click</b-dropdown-item>
      <b-dropdown-item prevent-close>
        <input type="checkbox" name="" id="">
      </b-dropdown-item>
    </b-dropdown>
  </div>
  <div class="d-flex justify-content-end">
    <b-dropdown variant="success" size="sm" dropdown-menu-end>
      <template #button>
        <i class="fas fa-trash fa-fw"></i>
        <span>hello world</span>
      </template>
      <b-dropdown-header>this is an header</b-dropdown-header>
      <b-dropdown-item>test</b-dropdown-item>
      <b-dropdown-item active>this is active</b-dropdown-item>
      <b-dropdown-divider/>
      <b-dropdown-item prevent-close>do not close on click</b-dropdown-item>
      <b-dropdown-item prevent-close>
        <input type="checkbox" name="" id="">
      </b-dropdown-item>
    </b-dropdown>
  </div>
  <!-- Smoke-test containers: compare teleported vs inline dropdown clipping. -->
  <div class="overflow-test">
    <div class="fw-semibold mb-1">append-to-body</div>
    <b-dropdown append-to-body>
      <template #button>overflow test</template>
      <b-dropdown-item v-for="item in overflowItems" :key="item">{{ item }}</b-dropdown-item>
    </b-dropdown>
  </div>
  <div class="overflow-test">
    <div class="fw-semibold mb-1">inline</div>
    <b-dropdown>
      <template #button>overflow test</template>
      <b-dropdown-item v-for="item in overflowItems" :key="item">{{ item }}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script setup lang="ts">
const overflowItems = Array.from({ length: 12 }, (_, index) => `Overflow item ${index + 1}`)

function onOpened(event: Event) {
  console.log('onOpened', event)
}
function onClosed(event: Event) {
  console.log('onClosed', event)
}
function onToggle(event: Event) {
  console.log('onToggle', event)
}
</script>

<style scoped>
.overflow-test {
  width: 240px;
  height: 120px;
  overflow: hidden;
  border: 1px dashed #6c757d;
  padding: 0.5rem;
}
</style>
