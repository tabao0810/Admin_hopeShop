<template>
  <tr >
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{user.name}}
    </td>
    <td>{{user.age}}</td>
    <td>
      <label  
      v-for="(leaguage,index) in user.programmingLanguage" :key="index" 
      class="badge badge-gradient-primary mr-2"
      >{{leaguage}}</label>      
    </td>
    <td>{{user.gender}}</td>
    <td>
      <button type="button"
       class="mr-2 btn btn-gradient-danger btn-icon-text"
       @click="handleRemove(user.id)">
        <i 
        class="mdi mdi-delete btn-icon-prepend"        
        ></i> Remove
      </button>
      <button type="button" 
      class="btn btn-gradient-info btn-icon-text"
      @click="handleOpenModalEdit"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
   <teleport to="#app">
      <app-modal
        :isOpen="isOpenModalEdit"
        :handelCloseModal="handleCloseModalEdit"
      >
        <form-add-user :userDetail="user"></form-add-user>
      </app-modal>
    </teleport>
</template>

<script>
import FormAddUser from './FormAddUser.vue'
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('user')
export default {
  components:{
    FormAddUser
  },
  data(){
    return{
      isOpenModalEdit:false
    }
  },
  props:{
    user:{
      type:Object
    }
  },
  methods:{
     handleOpenModalEdit() {
      this.isOpenModalEdit = true; // mở modal
    },
    handleCloseModalEdit() {
      this.isOpenModalEdit = false; // đóng modal
    },
    ...mapActions({
      handleRemove:"removeUserAction",
    })
  }
};
</script>

<style></style>
