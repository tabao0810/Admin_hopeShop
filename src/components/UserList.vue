<template>
  <tbody>
    <user-item
      v-for="(user, index) in userListByName"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("user");
export default {
  components: {
    UserItem,
  },
  computed: {
    loading() {
      return false;
    },
    ...mapState({
      userList: (state) => state.userList,
    }),
    ...mapGetters({
      userListByBoy: "userListByBoy",
      userListByName: "userListByName",
    }),
  },
  methods: {
    ...mapActions({
      getAllUser: "getAllUserAction",
    }),
  },
  created() {
    this.getAllUser();
  },
  // computed:mapState([
  //   'userList'
  // ]),-->cach 2 it su dung<--
};
</script>

<style></style>
