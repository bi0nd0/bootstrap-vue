import { App, createApp, ComponentPublicInstance, inject } from 'vue';
import { default as Toaster } from '../components/Toast/Toaster.vue';

class ToastSingleton {
  
  static component:ComponentPublicInstance
  
  static getToaster() {
    if(!ToastSingleton.component) {
      // Create a virtual DOM node for the component
      const target: HTMLDivElement = document.createElement('div')
      document.body.appendChild(target)
      const myApp = createApp(Toaster)
      const mounted = myApp.mount(target)
      ToastSingleton.component = mounted
    }
    return ToastSingleton.component
  }
  
}

const toasterKey = '$toaster'

/**
 * Returns the toaster instance. Equivalent to using `$toaster` inside
 * templates.
 */
function useToaster(): typeof Toaster {
  return inject(toasterKey)!
}


// Define the plugin object
const MyPlugin = {
  install(app: App) {
    const toaster = ToastSingleton.getToaster()
    // app.config.globalProperties.$toaster = toaster
    app.provide(toasterKey, toaster)
  }
};

export {MyPlugin as default, useToaster};