import { Plugin } from 'vue';
declare class EventBus {
    private listeners;
    /**
     * Emit an event with the given name and data
     * @param eventName The name of the event to emit
     * @param args The arguments to pass to the event listener functions
     */
    emit(eventName: string, ...args: any[]): void;
    /**
     * Register an event listener for the given event
     * @param eventName The name of the event to listen for
     * @param listener The function to call when the event is emitted
     */
    on(eventName: string, listener: (...args: any[]) => void): void;
    /**
     * Remove an event listener for the given event
     * @param eventName The name of the event to remove the listener from
     * @param listener The function to remove
     */
    off(eventName: string, listener: (...args: any[]) => void): void;
}
declare const EventBusPlugin: Plugin;
export { EventBusPlugin as default, EventBus };
