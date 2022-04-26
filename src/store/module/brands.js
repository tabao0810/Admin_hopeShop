import { getAllBrandsApi,createBrandApi, deleteBrandApi } from "../../apis/brands";

const state =()=>{
    return{
        listBrand:[]
    }

}
const mutations={
    setAllBrandsMutation(state,payload){
        state.listBrand = payload.reverse();
    },

}
const actions ={
   async getAllBrandsAction(context){
    const payload = await getAllBrandsApi();
    context.commit("setAllBrandsMutation",payload)
    },
    async createBrandAction(context,payload){
        await createBrandApi(payload);
        context.dispatch("getAllBrandsAction")
    },
    async deleteBrandAction(context,payload){
        if(confirm("Bạn có chắc chắn xóa thương hiệu này") == true){
        await deleteBrandApi(payload);
        context.dispatch("getAllBrandsAction")
        }else{
            context.dispatch("getAllBrandsAction")
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
    
}