import {getAllOrdersApi, updateOrderApi} from "../../apis/order";

const state= ()=>{
    return{
        Orders:[

        ],
       
    }
}
const getters={
    
}
const mutations={
    setAllOrder(state,payload){
        state.Orders = payload.reverse();
    },    
}

const actions ={

        async getAllOrdersActions(context){
            const payload = await getAllOrdersApi();
            context.commit('setAllOrder',payload)
            context.dispatch("loadUserLoginFromLocalStorage")
        },
        async updateOrderActions(context,payload){
            await updateOrderApi(payload);
            context.dispatch("getAllOrdersActions")
        }
    
}

export default {
    namespaced:true,
    state,  
    getters,  
    mutations,
    actions
}