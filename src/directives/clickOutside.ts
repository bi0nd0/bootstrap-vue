import { VNode, Directive } from 'vue'

const useClickOutside = (targetElement: HTMLElement | null, callback: CallableFunction) => {

    function isDescendantOf(element: ParentNode | null, ancestor: HTMLElement) {
        // Check if the element or any of its parents is the ancestor
        while (element !== null) {
            if (element === ancestor) {
                return true;
            }
            element = element.parentNode;
        }
        return false;
    }
    const abortController = new AbortController()
    
    function handleClickOutside(targetElement: HTMLElement | null, callback: CallableFunction) {
        document.addEventListener("click", function (event) {
            const clickedElement = event.target as ParentNode | null;
            if(!targetElement) return
            // Check if the clicked element is not the target element or its descendant
            if (!isDescendantOf(clickedElement, targetElement)) {
                callback();
            }
        }, { signal: abortController.signal });
    }

    handleClickOutside(targetElement, callback);

    return abortController
}
  

  
  

const directive: Directive = {
    mounted(el: HTMLElement, binding, _vnode, _prevVnode) {
       const callback = binding.value
       useClickOutside(el, callback)
    }
}
export default directive