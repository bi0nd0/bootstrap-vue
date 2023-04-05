import {Tooltip} from 'bootstrap'
import { VNode, Directive } from 'vue'

type Placement =  Tooltip.PopoverPlacement | (() => Tooltip.PopoverPlacement) | undefined
// type Options = Partial<Tooltip.Options> | undefined

const tooltipDirecive: Directive = {
    mounted(el: HTMLElement, binding, _vnode, _prevVnode) {
        new Tooltip(el, {
            title: binding.value,
            placement: binding.arg as Placement,
            trigger: 'hover',
        })
    }
}
export default tooltipDirecive