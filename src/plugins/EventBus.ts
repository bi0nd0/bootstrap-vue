import { App, Plugin } from 'vue';

class EventBus {
  private listeners: Record<string, ((...args: any[]) => void)[]> = {};

  /**
   * Emit an event with the given name and data
   * @param eventName The name of the event to emit
   * @param args The arguments to pass to the event listener functions
   */
  emit(eventName: string, ...args: any[]) {
    if (!this.listeners[eventName]) {
      return;
    }
    this.listeners[eventName].forEach((listener) => {
      listener(...args);
    });
  }

  /**
   * Register an event listener for the given event
   * @param eventName The name of the event to listen for
   * @param listener The function to call when the event is emitted
   */
  on(eventName: string, listener: (...args: any[]) => void) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(listener);
  }

  /**
   * Remove an event listener for the given event
   * @param eventName The name of the event to remove the listener from
   * @param listener The function to remove
   */
  off(eventName: string, listener: (...args: any[]) => void) {
    if (!this.listeners[eventName]) {
      return;
    }
    this.listeners[eventName] = this.listeners[eventName].filter((l) => l !== listener);
  }
}

// Create a new instance of the event bus
const eventBus = new EventBus();

// Define the plugin object
const EventBusPlugin: Plugin = {
  install(app: App) {
    // Make the event bus available to all components through the global properties
    app.config.globalProperties.$eventBus = eventBus;
  }
};

export { EventBusPlugin as default, EventBus};
