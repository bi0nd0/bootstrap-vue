// Define a type for sticky element storage
type StickyElement = {
    element: HTMLElement;
    originalPosition: string;
};


const useStickyElementManager = () => {
    let stickyElements: StickyElement[] = [];

    // Function to detect and remove sticky position
    function removeStickyElements(): void {
        stickyElements = []
        document.querySelectorAll<HTMLElement>('*').forEach((el) => {
            const style = getComputedStyle(el);
            if (style.position === 'sticky') {
                stickyElements.push({ element: el, originalPosition: style.position });
                el.style.position = 'relative'; // Temporarily change position
            }
        });
    }
    
    // Function to restore sticky position
    function restoreStickyElements(): void {
        stickyElements.forEach((item) => {
            item.element.style.position = item.originalPosition;
        });
    }
    return {removeStickyElements, restoreStickyElements}
}


export {type StickyElement, useStickyElementManager}