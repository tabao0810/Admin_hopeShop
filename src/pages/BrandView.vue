<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Quản lý thương hiệu</h4>
          <div class="card-bar-controll">
            <div class="mb-4">
              <button
                type="button"
                class="mr-2 btn btn-info btn-icon-text"
                @click="handleOpenModalCartAdd"
              >
                <i class="mdi mdi-account-plus btn-icon-prepend"></i> ADD
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table" border="1">
              <thead>
                <tr align="center">
                  <th>ID</th>
                  <th>Thông tin thương hiệu</th>
                  <th>Ngày tạo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="brand in getBrand" :key="brand._id">
                  <td>
                    {{ brand._id }}
                  </td>
                  <td>
                    <img
                      :src="brand.image"
                      style="width: 50%; height: 50%"
                      alt=""
                    />
                  </td>
                  <td>{{ formatDateBrand(brand.createdAt) }}</td>
                  <td>
                    <button
                      class="btn-feature btn-trash"
                      @click="handleDelete(brand._id)"
                    >
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
      :page-count="getPaginationCountBlog"
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
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalCartAdd"
      :handelCloseModal="handleCloseModalCartAdd"
    >
      <create-brand></create-brand>
    </app-modal>
  </teleport>
</template>

<script>
import CreateBrand from "../components/CreateBrand.vue";
import Paginate from "vuejs-paginate-next";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("brands");
export default {
  components: {
    Paginate,
    CreateBrand,
  },
  computed: {
    ...mapState({
      listBrand: (state) => state.listBrand,
    }),
    getBrand() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.listBrand.slice(start, end);
    },
    getPaginationCountBlog() {
      return Math.ceil(this.listBrand.length / this.perPage);
    },
  },
  methods: {
    ...mapActions({
      getAllBrand: "getAllBrandsAction",
      handleDelete: "deleteBrandAction",
    }),
    formatDateBrand(a) {
      const time = new Date(a);
      return time.toDateString().slice(3);
    },
    // handleOpenModalCartList(a) {
    //   this.isOpenModalCartList = true;
    //     this.$store.dispatch("blogs/getSingleBlogAction", a._id); // mở modal
    // },
    // handleCloseModalCartList() {
    //   this.isOpenModalCartList = false; // đóng modal
    // },
    handleOpenModalCartAdd() {
      this.isOpenModalCartAdd = true;
    },
    handleCloseModalCartAdd() {
      this.isOpenModalCartAdd = false; // đóng modal
    },
    clickCallback(pagenum) {
      this.currentPage = Number(pagenum);
    },
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 5,
      isOpenModalCartList: false,
      isOpenModalCartAdd: false,
    };
  },
  created() {
    this.getAllBrand();
    this.listBrand.map((item) => {
      this.items.push(item);
    });
  },
};
</script>

<style scoped>
.blog_text {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table th img,
.table td img {
  border-radius: 0;
}
</style>
