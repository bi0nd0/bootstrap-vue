import MainLayout from '../layouts/MainLayout.vue'
import ModalPage from '../pages/ModalPage.vue'
import DrawerPage from '../pages/DrawerPage.vue'
import ToastPage from '../pages/ToastPage.vue'
import TablePage from '../pages/TablePage.vue'
import TooltipsPage from '../pages/TooltipsPage.vue'
import DropdownPage from '../pages/DropdownPage.vue'
import PaginationPage from '../pages/PaginationPage.vue'

const routes = [
    { path: '/', component: MainLayout, children: [
        { path: '', component: ModalPage },
        { path: 'drawer', name:'drawer', component: DrawerPage },
        { path: 'modal', name:'modal', component: ModalPage },
        { path: 'toast', name:'toast', component: ToastPage },
        { path: 'table', name:'table', component: TablePage },
        { path: 'tooltips', name:'tooltips', component: TooltipsPage },
        { path: 'dropdown', name:'dropdown', component: DropdownPage },
        { path: 'pagination', name:'pagination', component: PaginationPage },
    ] },
]

export default routes