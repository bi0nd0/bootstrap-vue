import MainLayout from '../layouts/MainLayout.vue'
import HomePage from '../pages/HomePage.vue'
import ModalPage from '../pages/ModalPage.vue'
import DialogPage from '../pages/DialogPage.vue'
import DrawerPage from '../pages/DrawerPage.vue'
import ToastPage from '../pages/ToastPage.vue'
import TablePage from '../pages/TablePage.vue'
import TooltipsPage from '../pages/TooltipsPage.vue'
import DropdownPage from '../pages/DropdownPage.vue'
import PaginationPage from '../pages/PaginationPage.vue'

const routes = [
    { path: '/', component: MainLayout, children: [
        { path: '', component: HomePage },
        { path: 'drawer', name:'drawer', component: DrawerPage },
        { path: 'modal', name:'modal', component: ModalPage },
        { path: 'dialog', name:'dialog', component: DialogPage },
        { path: 'toast', name:'toast', component: ToastPage },
        { path: 'table', name:'table', component: TablePage },
        { path: 'tooltips', name:'tooltips', component: TooltipsPage },
        { path: 'dropdown', name:'dropdown', component: DropdownPage },
        { path: 'pagination', name:'pagination', component: PaginationPage },
    ] },
]

export default routes