<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Quản lý Slide</h4>
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
                  <th>Thông tin slide</th>
                  <th>Ngày tạo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="banner in getBanner" :key="banner._id">
                  <td>
                    {{ banner._id }}
                  </td>
                  <td>
                    <img
                      :src="banner.image"
                      style="width: 50%; height: 50%"
                      alt=""
                    />
                  </td>
                  <td>{{ formatDateBrand(banner.createdAt) }}</td>
                  <td>
                    <button
                      class="btn-feature btn-trash"
                      @click="handleDelete(banner._id)"
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
      :page-count="getPaginationCountBanner"
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
      <create-banner></create-banner>
    </app-modal>
  </teleport>
</template>

<script>
import CreateBanner from "../components/CreateBanner.vue";
import Paginate from "vuejs-paginate-next";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("banner");
export default {
  components: {
    Paginate,
    CreateBanner,
  },
  computed: {
    ...mapState({
      listBanner: (state) => state.listBanner,
    }),
    getBanner() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.listBanner.slice(start, end);
    },
    getPaginationCountBanner() {
      return Math.ceil(this.listBanner.length / this.perPage);
    },
  },
  methods: {
    ...mapActions({
      getAllBanner: "getAllBannerAction",
      handleDelete: "deleteBannerAction",
    }),
    formatDateBrand(a) {
      const time = new Date(a);
      return time.toDateString().slice(3);
    },
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
    this.getAllBanner();
    this.listBanner.map((item) => {
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
