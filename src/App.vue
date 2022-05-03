<template>
  <admin-page v-if="adminAction.account !== ''"></admin-page>
  <login-page v-else></login-page>
</template>

<script>
import { useStore } from "vuex";
import AdminPage from "./pages/AdminPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("login");
export default {
  name: "App",
  components: {
    AdminPage,
    LoginPage,
  },
  setup() {
    const store = useStore();
    store.dispatch("login/loadAdminFromLocal");
  },
  computed: {
    ...mapState({
      adminAction: (state) => state.adminAction,
    }),
  },
};
</script>

<style lang="scss"></style>
<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.table thead th,
.card .card-title {
  font-family: "Roboto", sans-serif;
}
</style>
