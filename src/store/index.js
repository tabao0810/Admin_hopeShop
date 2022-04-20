import {createStore} from "vuex";
import user from './module/user';
import products from './module/products'
import order from './module/order'
const store = createStore({
    modules:{
        user : user,
        products,
        order
    },
});
export default store;