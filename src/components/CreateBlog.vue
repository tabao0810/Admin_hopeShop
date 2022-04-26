<template>
  <form action="" enctype="multipart/form-data">
    <table width="100%" cellpadding="10">
      <tr>
        <td width="20%">Hình ảnh:</td>
        <td width="80%">
          <input type="file" ref="file" @change="UploadImage()" />
        </td>
      </tr>
      <tr>
        <td width="20%">Tên bài đăng:</td>
        <td width="80%">
          <input
            type="text"
            v-model="blog.description"
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
            v-model="blog.text"
          ></textarea>
        </td>
      </tr>
      <tr>
        <td width="20%"></td>
        <td width="80%">
          <button @click.prevent="createBlog(blog)" class="btn-update">
            <span>Thêm</span>
          </button>
        </td>
      </tr>
    </table>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blog: {
        image: "",
        description: "",
        text: "",
      },
    };
  },
  methods: {
    UploadImage() {
      this.blog.image = this.$refs.file.files[0];
    },
    async createBlog(blog) {
      const data = new FormData();
      data.append("file", blog.image);
      data.append("upload_preset", "uploads");
      try {
        const uploads = await axios.post(
          "https://api.cloudinary.com/v1_1/dwdezrrqh/upload",
          data
        );
        blog.image = uploads.data.url;
        this.$store.dispatch("blogs/createBlogAction", blog);
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style></style>
