<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile">
        <a href="#" class="nav-link">
          <div class="nav-profile-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-D9mBDX6f_gmMIqKuv15oeCqPDyP-RxpaPQ8ACOaQ6ZXBhCU_gLbu5-WEWiHKj3MQvw&usqp=CAU"
              alt="profile"
            />
            <span class="login-status online"></span>
            <!--change to offline or busy as needed-->
          </div>
          <div class="nav-profile-text d-flex flex-column">
            <span class="font-weight-bold mb-2">Hường Trần</span>
            <span class="text-secondary text-small">Shop Owner</span>
          </div>
          <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
        </a>
      </li>
      <li class="nav-item">
        <router-link to="/thehome" class="nav-link" href="">
          <span class="menu-title">Dashboard</span>
          <i class="mdi mdi-home menu-icon"></i>
        </router-link>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#ui-basic"
          aria-expanded="false"
          aria-controls="ui-basic"
        >
          <span class="menu-title">Quản lý</span>
          <i class="menu-arrow"></i>
          <i class="mdi mdi-crosshairs-gps menu-icon"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <router-link to="/products" class="nav-link" href=""
                >Quản lý sản phẩm</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/order" class="nav-link" href=""
                >Quản lý đơn hàng</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/users" class="nav-link" href=""
                >Quản lý người dùng</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link" href=""
                >Quản lý tin tức</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/brand" class="nav-link" href=""
                >Quản lý thương hiệu</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/banner" class="nav-link" href=""
                >Quản lý Banner</router-link
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link to="/chart" class="nav-link" href="">
          <span class="menu-title">Thống kê doanh thu</span>
          <i class="mdi mdi-contacts menu-icon"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
