import TheDashboard from '../components/TheDashboard.vue'
import ProductView from '../pages/ProductView.vue'
import UserView from '../pages/UserView.vue'
import OrderView from '../pages/OrderView.vue'
import BlogView from '../pages/BlogView.vue'
import BrandView from '../pages/BrandView.vue'
import BannerView from '../pages/BannerView.vue'
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
    },
    {
        path:"/blog",component:BlogView,
    },
    {
        path:"/brand",component:BrandView,
    },
    {
        path:"/banner",component:BannerView,
    }
    
    

];
const router = createRouter({
    history:createWebHistory(),
    routes: routes,
    linkActiveClass : "active"
})
export default router;