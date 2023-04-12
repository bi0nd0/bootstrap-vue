/**
 * this plugin exposes components, features, and directive
 * to the app
 */
import { App } from 'vue';
import { default as Toaster } from '../components/Toast/Toaster.vue';
import { default as ModalManager } from '../components/Modal/ModalManager.vue';
/**
 * Returns the toaster instance. Equivalent to using `$toaster` inside
 * templates.
 */
declare function useToaster(): typeof Toaster;
/**
 * Returns the toaster instance. Equivalent to using `$toaster` inside
 * templates.
 */
declare function useModal(): typeof ModalManager;
declare const MyPlugin: {
    install(app: App): void;
};
export { MyPlugin as default, useToaster, useModal };
