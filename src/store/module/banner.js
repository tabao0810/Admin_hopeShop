import { getAllBannerApi,createBannerApi,deleteBannerApi } from "../../apis/banner";

const state =()=>{
    return{
        listBanner:[]
    }

}
const mutations={
    setAllBannerMutation(state,payload){
        state.listBanner = payload.reverse();
    },

}
const actions ={
   async getAllBannerAction(context){
    const payload = await getAllBannerApi();
    context.commit("setAllBannerMutation",payload)
    },
    async createBannerAction(context,payload){
        await createBannerApi(payload);
        context.dispatch("getAllBannerAction")
    },
    async deleteBannerAction(context,payload){
        if(confirm("Bạn có chắc chắn xóa slide này") == true){
        await deleteBannerApi(payload);
        context.dispatch("getAllBannerAction")
        }else{
            context.dispatch("getAllBannerAction")
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
    
}