/**
 * this static class applies a CSS class to
 * the body element whenever at least a drawer is open
 */

export default class Drawers {
    private static list: Set<any> = new Set()

    static add(item:any) {
        this.list.add(item)
        document.body.classList.add('drawer-open')
    }

    static delete(item:any) {
        this.list.delete(item)
        if(this.list.size===0) document.body.classList.remove('drawer-open')
    }
}