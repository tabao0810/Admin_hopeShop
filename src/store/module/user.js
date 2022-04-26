import {  getAllUserApi,deleteUserApi } from "../../apis/user";

const state = ()=>{
    return{
        userList:[
           
        ],
        searchName:"",
    }
};
const getters = {
    userListByBoy(state){
        return state.userList.filter((user)=> user.gender ==='Nam')
    },
    userListByName(state){
        const {userList,searchName} = state;
        return userList.filter((user) => 
        user.lastName.toLowerCase().includes(searchName.toLowerCase()))
    }
};
const mutations ={
    /**Bắt buộc phải đồng bộ */
    setSearchNameMutation(state,payload){
        state.searchName = payload;
    },
    
    setUserListMutation(state,payload){
            state.userList = payload;
    },   
    
};
const actions = {
    /**Xử lý bất đồng bộ */
    setSearchNameAction(context, payload){
        context.commit("setSearchNameMutation", payload)
    },   
    async removeUserAction(context,payload){
        if(confirm("Bạn có chắc chắn xóa khách hàng này") == true){
        await deleteUserApi(payload);        
        context.dispatch("getAllUserAction");
        }else{
        context.dispatch("getAllUserAction");
        }
    },   
   async getAllUserAction(context){       
        const payload = await getAllUserApi();      
        context.commit("setUserListMutation",payload);
    },
    
};

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}