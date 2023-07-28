/**
 * this plugin exposes components, features, and directive
 * to the app
 */

import { App, createApp, ComponentPublicInstance, inject } from 'vue'

// component managers
import { default as Toaster } from '../components/Toast/Toaster.vue'
import { default as ModalManager } from '../components/Modal/ModalManager.vue'

// components
import Drawer from '../components/Drawer/Drawer.vue'
import Modal from '../components/Modal/Modal.vue'
import Pagination from '../components/Pagination/Pagination.vue'
import PageSizeDropdown from '../components/Pagination/PageSizeDropdown.vue'
import PageSizeSelect from '../components/Pagination/PageSizeSelect.vue'
import Dropdown from '../components/Dropdown/Dropdown.vue'
import DropdownItem from '../components/Dropdown/DropdownItem.vue'
import DropdownHeader from '../components/Dropdown/DropdownHeader.vue'
import DropdownDivider from '../components/Dropdown/DropdownDivider.vue'
import Table from '../components/Table/Table.vue'
import Toast from '../components/Toast/Toast.vue'

// directives
import tooltip from '../directives/tooltip'
import clickOutside from '../directives/clickOutside'

// constants
const componentPrefix = 'b'
const toasterKey = '$toaster'
const modalKey = '$modalManager'

/**
 * singleton class that adds
 * a component to the DOM
 */
class ModalManagerSingleton {
  
  static component:ComponentPublicInstance
  
  static getComponent() {
    // this, in static conetxt, refers to the class
    if(!this.component) {
      // Create a virtual DOM node for the component
      const target: HTMLDivElement = document.createElement('div')
      document.body.appendChild(target)
      const myApp = createApp(ModalManager)
      const mounted = myApp.mount(target)
      this.component = mounted
    }
    return this.component
  }
}

/**
 * singleton class that adds
 * a component to the DOM
 */
class ToasterSingleton {
  
  static component:ComponentPublicInstance
  
  static getComponent() {
    // this, in static conetxt, refers to the class
    if(!this.component) {
      // Create a virtual DOM node for the component
      const target: HTMLDivElement = document.createElement('div')
      document.body.appendChild(target)
      const myApp = createApp(Toaster)
      const mounted = myApp.mount(target)
      this.component = mounted
    }
    return this.component
  }
  
}

/**
 * Returns the toaster instance. Equivalent to using `$toaster` inside
 * templates.
 */
function useToaster(): typeof Toaster {
  return inject(toasterKey)!
}

/**
 * Returns the toaster instance. Equivalent to using `$toaster` inside
 * templates.
 */
function useModal(): typeof ModalManager {
  return inject(modalKey)!
}

/**
 * register all components
 * @param app 
 */
function registerComponents(app: App) {
  app.component(`${componentPrefix}-drawer`, Drawer)
  app.component(`${componentPrefix}-modal`, Modal)
  app.component(`${componentPrefix}-pagination`, Pagination)
  app.component(`${componentPrefix}-pagination-dropdown`, PageSizeDropdown)
  app.component(`${componentPrefix}-pagination-select`, PageSizeSelect)
  app.component(`${componentPrefix}-dropdown`, Dropdown)
  app.component(`${componentPrefix}-dropdown-item`, DropdownItem)
  app.component(`${componentPrefix}-dropdown-header`, DropdownHeader)
  app.component(`${componentPrefix}-dropdown-divider`, DropdownDivider)
  app.component(`${componentPrefix}-table`, Table)
  app.component(`${componentPrefix}-toast`, Toast)
}

/**
 * 
 * @param app register directives
 */
function registerDirectives(app: App) {
  app.directive('tooltip', tooltip)
  app.directive('click-outside', clickOutside)
}

// Define the plugin object
const MyPlugin = {
  install(app: App) {
    registerComponents(app)
    registerDirectives(app)

    const toaster = ToasterSingleton.getComponent()
    app.provide(toasterKey, toaster)

    const modalManager = ModalManagerSingleton.getComponent()
    app.provide(modalKey, modalManager)

  }
};

export {MyPlugin as default, useToaster, useModal};