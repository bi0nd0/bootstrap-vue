import { App, createVNode, render, defineComponent, Component, createApp } from 'vue';
import {default as Toaster, toast} from '../components/Toast/Toaster.vue';

// Define the plugin object
const MyPlugin = {
  install(app: App) {
    // Create a virtual DOM node for the component
    const target: HTMLDivElement = document.createElement('div')
    document.body.appendChild(target)
    const myApp = createApp(Toaster)
    const component = myApp.mount(target)
    app.config.globalProperties.toaster = component


  }
};

export default MyPlugin;