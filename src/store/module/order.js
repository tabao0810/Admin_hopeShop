import {getAllOrdersApi, updateOrderApi} from "../../apis/order";

const state= ()=>{
    return{
        Orders:[

        ],
       month:0,
    }
}
const getters={
    ListPricebyMonth(state){
        const pro = state.Orders.filter(function(a) {            
            let date = new Date(a.createdAt)            
            return date.getMonth() === Number(state.month)
            })                    
        return pro                 
    },
    ListPricebyDay(state){
        const pro = state.Orders.filter(function(a) {            
            let date = new Date(a.createdAt)            
            return date.getDate() === 18
            }) 
            
        return pro                 
    },
}
const mutations={
    setAllOrder(state,payload){
        state.Orders = payload.reverse();
    },   
    searchMonthMutation(state,payload){
        state.month = payload
    }
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
            alert("Cập nhật thành công")
        },
        searchMonthAction(context,payload){
            context.commit("searchMonthMutation",payload)
        }
    
}

export default {
    namespaced:true,
    state,  
    getters,  
    mutations,
    actions
}