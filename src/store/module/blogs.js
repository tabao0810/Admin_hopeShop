import { getAllBlogsApi, getSingleBlogApi, updateBlogApi,createBlogApi,deleteBlogApi } from "@/apis/blogs"

const state = () => {
    return{
        blogList : [
       
      ],
      blogDetail:{

      }
    }
}
const mutations={
  getAllBlogMutation(state,payload){
    state.blogList = payload.reverse();
  },

  setBlogDetailMutation(state,payload){
    state.blogDetail = payload
  },
  setCommetMutation(state,payload){
      state.blogDetail.comments.unshift(payload)
  },
  deleteCommentMutation(state,payload){
     const index = state.blogDetail.comments.findIndex((cmt) => cmt.id === payload)
     if(index !== -1){
                state.blogDetail.comments.splice(index,1)
        }else{
            alert('khong co')
        }
  }

}

const actions={
  async getAllBlogAction(context){
    const payload = await getAllBlogsApi();
    context.commit("getAllBlogMutation",payload)
  },

   async getSingleBlogAction(context,payload){   
       const blogDetail =  await getSingleBlogApi(payload);      
       context.commit("setBlogDetailMutation",blogDetail)
    },
  async updateBlogAction({state}){
      await updateBlogApi(state.blogDetail);        
  },
  deleteCommentAction(context,payload){
      context.commit("deleteCommentMutation",payload)
  },
  async deleteBlogAction(context,payload){
    if(confirm("Bạn có chắc chắn xóa tin này") == true){
      await deleteBlogApi(payload);
      context.dispatch("getAllBlogAction");
    }else{
      context.dispatch("getAllBlogAction");

    }
  },
 
  addCommentAction(context,payload){
    console.log(payload);
    context.commit("setCommetMutation",payload);
    context.dispatch("updateBlogAction")
  },
  async updateBlogEdit(context,payload){
      await updateBlogApi(payload);
      context.dispatch("getAllBlogAction")
  },
  async createBlogAction(context,payload){
      await createBlogApi(payload);
    context.dispatch("getAllBlogAction");
  }
 
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
    
}