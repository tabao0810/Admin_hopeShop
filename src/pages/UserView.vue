<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Quản lý người dùng</h4>
          <div class="card-bar-controll">
            <div class="form-group">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tên người dùng"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="searchUser"
                />
                <div class="input-group-append">
                  <button
                    @click="handleSearchName(searchUser)"
                    class="btn btn-sm btn-gradient-primary"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table" border="1">
              <thead>
                <tr align="center">
                  <th>Họ</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in getUsers" :key="user._id">
                  <td>
                    {{ user.firstName }}
                  </td>
                  <td>{{ user.lastName }}</td>
                  <td>
                    {{ user.email }}
                  </td>
                  <td>
                    {{ user.password }}
                  </td>
                  <td>
                    <button
                      class="btn-feature btn-pen"
                      @click="handleOpenModalCartList(product)"
                    >
                      <i class="mdi mdi-border-color btn-icon-prepend"></i>
                    </button>
                    <button class="btn-feature btn-trash">
                      <i class="mdi mdi-delete btn-icon-prepend"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination shop_paginatin">
    <paginate
      :page-count="getPaginationCountUser"
      :page-range="2"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'←'"
      :next-text="'→'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :hide-prev-next="true"
    >
    </paginate>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters } = createNamespacedHelpers("user");
export default {
  components: {
    Paginate,
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 10,
      searchUser: "",
    };
  },
  computed: {
    ...mapState({
      userList: (state) => state.userList,
    }),
    ...mapGetters({
      userList: "userListByName",
    }),
    getUsers() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.userList.slice(start, end);
    },
    getPaginationCountUser() {
      return Math.ceil(this.userList.length / this.perPage);
    },
  },
  methods: {
    clickCallback(pagenum) {
      this.currentPage = Number(pagenum);
    },
    ...mapActions({
      getAllUser: "getAllUserAction",
      handleSearchName: "setSearchNameAction",
    }),
  },
  created() {
    this.getAllUser();
    this.userList.map((item) => {
      this.items.push(item);
    });
  },
};
</script>

<style></style>
