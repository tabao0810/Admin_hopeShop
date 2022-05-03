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
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheSideBar from "../components/TheSideBar.vue";
export default {
  components: {
    TheHeader,
    TheSideBar,
  },
};
</script>

<style></style>
