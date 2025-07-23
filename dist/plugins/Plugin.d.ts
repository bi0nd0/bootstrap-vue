import { App } from 'vue';
import { default as Toaster } from '../components/Toast/Toaster.vue';
import { default as ModalManager } from '../components/Modal/ModalManager.vue';
import { default as DialogManager } from '../components/Dialog/DialogManager.vue';
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
/**
 * Returns the toaster instance. Equivalent to using `$toaster` inside
 * templates.
 */
declare function useDialog(): typeof DialogManager;
declare const MyPlugin: {
    install(app: App): void;
};
export { MyPlugin as default, useToaster, useModal, useDialog };
