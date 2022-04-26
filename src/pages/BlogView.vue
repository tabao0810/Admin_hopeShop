<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Quản lý tin tức</h4>
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
                  <th>Thông tin tn tức</th>
                  <th>Ngày đăng</th>
                  <th>Số bình luận</th>
                  <th>Nội dung</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="blog in getBlog" :key="blog._id">
                  <td>
                    {{ blog._id }}
                  </td>
                  <td>
                    <img :src="blog.image" alt="" /> {{ blog.description }}
                  </td>
                  <td>
                    {{ formatDateBlog(blog.createdAt) }}
                  </td>
                  <td>
                    <span style="font-size: 18px; font-weight: 550">{{
                      blog.comments.length
                    }}</span>
                    bình luận
                  </td>
                  <td>
                    <div class="blog_text">{{ blog.text }}</div>
                  </td>
                  <td>
                    <button
                      class="btn-feature btn-pen"
                      @click="handleOpenModalCartList(blog)"
                    >
                      <i class="mdi mdi-border-color btn-icon-prepend"></i>
                    </button>
                    <button
                      class="btn-feature btn-trash"
                      @click="handleDelete(blog._id)"
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
      :isOpen="isOpenModalCartList"
      :handelCloseModal="handleCloseModalCartList"
    >
      <edit-blog></edit-blog>
    </app-modal>
  </teleport>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalCartAdd"
      :handelCloseModal="handleCloseModalCartAdd"
    >
      <create-blog></create-blog>
    </app-modal>
  </teleport>
</template>

<script>
import EditBlog from "../components/EditBlog.vue";
import CreateBlog from "../components/CreateBlog.vue";
import Paginate from "vuejs-paginate-next";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("blogs");
export default {
  components: {
    Paginate,
    EditBlog,
    CreateBlog,
  },
  computed: {
    ...mapState({
      blogList: (state) => state.blogList,
    }),
    getBlog() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.blogList.slice(start, end);
    },
    getPaginationCountBlog() {
      return Math.ceil(this.blogList.length / this.perPage);
    },
  },
  methods: {
    ...mapActions({
      getAllBlog: "getAllBlogAction",
      handleDelete: "deleteBlogAction",
    }),
    formatDateBlog(a) {
      const time = new Date(a);
      return time.toDateString().slice(3);
    },
    handleOpenModalCartList(a) {
      this.isOpenModalCartList = true;
      this.$store.dispatch("blogs/getSingleBlogAction", a._id); // mở modal
    },
    handleCloseModalCartList() {
      this.isOpenModalCartList = false; // đóng modal
    },
    handleOpenModalCartAdd() {
      this.isOpenModalCartAdd = true;
    },
    handleCloseModalCartAdd() {
      this.isOpenModalCartAdd = false; // đóng modal
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
    this.getAllBlog();
    this.blogList.map((item) => {
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
</style>
