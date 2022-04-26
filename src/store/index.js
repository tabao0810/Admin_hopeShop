import {createStore} from "vuex";
import user from './module/user';
import products from './module/products';
import order from './module/order';
import blogs from "./module/blogs";
import brands from './module/brands';
import banner from './module/banner'
const store = createStore({
    modules:{
        user : user,
        products,
        order,
        blogs,
        brands,
        banner
    },
});
export default store;