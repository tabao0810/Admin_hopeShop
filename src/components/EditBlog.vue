<template>
  <table cellpadding="10" width="100%">
    <tr>
      <td width="20%">Hình ảnh:</td>
      <td width="80%">
        <!-- <input
          type="text"
          v-model="blogDetail.image"
          style="width: 100%; padding: 8px"
        /> -->
        <img :src="blogDetail.image" style="width: 50%" class="mt-3" alt="" />
        <input type="file" ref="file" @change="UploadImage()" class="mt-2" />
      </td>
    </tr>
    <tr>
      <td width="20%">Tên bài đăng:</td>
      <td width="80%">
        <input
          type="text"
          v-model="blogDetail.description"
          style="width: 100%; padding: 8px"
        />
      </td>
    </tr>
    <tr>
      <td width="20%">Nội dung:</td>
      <td width="80%">
        <textarea
          name=""
          id=""
          cols="70"
          rows="10"
          v-model="blogDetail.text"
        ></textarea>
      </td>
    </tr>
    <tr>
      <td width="20%">Bình luận</td>
      <td width="80%" class="blog_comment">
        <div
          v-for="(cmt, index) in blogDetail.comments"
          :key="index"
          class="blog_cmt"
        >
          <p>{{ cmt.name }}↔{{ cmt.content }}</p>
          <a href="" @click.prevent="deleteCmt(cmt.id)">✕</a>
        </div>
      </td>
    </tr>

    <tr>
      <td width="20%"></td>
      <td width="80%">
        <button @click.prevent="updateProduct(blogDetail)" class="btn-update">
          <span>Cập nhật</span>
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("blogs");
export default {
  computed: {
    ...mapState({
      blogDetail: (state) => state.blogDetail,
    }),
  },
  methods: {
    ...mapActions({
      // updateProduct: "updateBlogEdit",
      deleteCmt: "deleteCommentAction",
    }),
    UploadImage() {
      this.blogDetail.image = this.$refs.file.files[0];
    },
    async updateProduct() {
      const data = new FormData();
      data.append("file", this.blogDetail.image);
      data.append("upload_preset", "uploads");
      try {
        const uploads = await axios.post(
          "https://api.cloudinary.com/v1_1/dwdezrrqh/upload",
          data
        );
        this.blogDetail.image = uploads.data.url;
        this.$store.dispatch("blogs/updateBlogEdit", this.blogDetail);
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style></style>
<style scoped>
.blog_comment {
  background-color: rgb(230, 230, 230);
  border-radius: 10px;
}
.blog_cmt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog_cmt > p {
  margin: 0;
  padding-top: 4px;
}
.blog_cmt > a {
  color: black;
}
.blog_cmt > a:hover {
  color: #ff343b;
}
</style>
