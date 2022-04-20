import { createUserApi, getAllUserApi, removeUserApi, updateUserApi } from "../../apis/user";

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
    addUserMutation(state,payload){
        state.userList.push(payload);
    },
    removeUserMutation(state,payload){
        const index = state.userList.findIndex((user) => user.id === payload)
        if(index !== -1){
                state.userList.splice(index,1)
        }else{
            alert('khong co')
        }
    },
    updateUserMutation(state,payload){
        const index = state.userList.findIndex((user) => user.id === payload.id)
            if(index !== -1){
                    state.userList[index] = payload
            }else{
                alert('loi');
            }
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
   async addUserAction(context,payload){
       const res = await createUserApi(payload);
       console.log(res);
        //gọi lại action getAllUserAction
        context.dispatch("getAllUserAction")
    },
    async removeUserAction(context,payload){
        await removeUserApi(payload);        
        context.dispatch("getAllUserAction")
    },
    async updateUserAction(context,payload){
        await updateUserApi(payload);
        context.dispatch("getAllUserAction")        
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