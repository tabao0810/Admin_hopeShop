<template>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <the-header></the-header>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <the-side-bar></the-side-bar>
      <!-- partial -->
      <main class="main-panel">
        <router-view></router-view>
        <!-- content-wrapper ends -->
        <!-- partial -->
      </main>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <courses-list />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheSideBar from "./components/TheSideBar.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheSideBar,
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
