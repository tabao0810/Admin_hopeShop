const state = ()=>{
    return{
        admin:{
           account:"adminHope",
           password:"admin123"
        },
        adminAction:{
            account:"",
            password:""
        }
    }
};

const mutations ={
  LoginPageMutation(state,payload){
        if(payload.account == state.admin.account && payload.password == state.admin.password){
            localStorage.setItem("adminAction",JSON.stringify(payload))
        }else{
            alert("Tài khoản hoặc mật khẩu không đúng!!")
        }
  },
  setAdminFromLocal(state,payload){
      if(localStorage.getItem("adminAction")){
          state.adminAction.account = payload.account;
          state.adminAction.password = payload.password;

      }else{
          state.adminAction.account ='';
          state.adminAction.password = '';
      }
  }
    
};
const actions = {
   loginPageAction(context,payload){       
       context.commit("LoginPageMutation",payload)
   },
   loadAdminFromLocal(context){
       let adminActive =null;
       if(localStorage.getItem("adminAction")){
           adminActive = JSON.parse(localStorage.getItem("adminAction"));           
           context.commit("setAdminFromLocal",adminActive)
       }
   },
   LogoutPageAction(context){
        if(confirm('Bạn có chắc chắn muốn đăng xuất') == true){                
         if(localStorage.getItem('adminAction')){            
            localStorage.removeItem('adminAction')
        }
        }else{
            context.dispatch("loadAdminFromLocal")
        }
   }
    
};

export default {
    namespaced:true,
    state,    
    mutations,
    actions
}