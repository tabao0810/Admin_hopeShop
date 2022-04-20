import TheDashboard from '../components/TheDashboard.vue'
import ProductView from '../pages/ProductView.vue'
import UserView from '../pages/UserView.vue'
import OrderView from '../pages/OrderView.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:"/thehome", component: TheDashboard,
        alias:'/'
    },
    {
        path:"/products",component:ProductView,
        
    },
    {
        path:"/users",component:UserView,
        
    },
    {
        path:"/order",component:OrderView,
    }
    
    

];
const router = createRouter({
    history:createWebHistory(),
    routes: routes,
    linkActiveClass : "active"
})
export default router;