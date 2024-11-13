type StickyElement = {
    element: HTMLElement;
    originalPosition: string;
};
declare const useStickyElementManager: () => {
    removeStickyElements: () => void;
    restoreStickyElements: () => void;
};
export { type StickyElement, useStickyElementManager };
