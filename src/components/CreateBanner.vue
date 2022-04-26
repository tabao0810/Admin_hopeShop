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
        <td width="20%"></td>
        <td width="80%">
          <button @click.prevent="createBanner(banner)" class="btn-update">
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
      banner: {
        image: "",
      },
    };
  },
  methods: {
    UploadImage() {
      this.banner.image = this.$refs.file.files[0];
    },
    async createBanner(banner) {
      const data = new FormData();
      data.append("file", banner.image);
      data.append("upload_preset", "uploads");
      try {
        const uploads = await axios.post(
          "https://api.cloudinary.com/v1_1/dwdezrrqh/upload",
          data
        );
        banner.image = uploads.data.url;
        this.$store.dispatch("banner/createBannerAction", banner);
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style></style>
