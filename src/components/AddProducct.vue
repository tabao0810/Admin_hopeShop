<template>
  <form action="" enctype="multipart/form-data">
    <table width="100%" cellpadding="10">
      <tr>
        <td width="20%">Loại sản phẩm:</td>
        <td width="80%">
          <select
            name="loaiSanPham"
            id="loaiSanPham"
            v-model="product.typeProduct"
            style="width: 100%; padding: 8px"
          >
            <option disabled value="">Chọn loại sản phẩm</option>
            <option value="Quần áo">Quần áo</option>
            <option value="Phụ kiện">Phụ kiện thời trang</option>
            <option value="Túi">Túi xách,Ví</option>
            <option value="Giày">Giày,Sneaker</option>
          </select>
        </td>
      </tr>
      <tr>
        <td width="20%">Hình ảnh:</td>
        <td width="80%">
          <!-- <input
          type="text"
          v-model="product.image"
          style="width: 100%; padding: 8px"
        /> -->
          <input type="file" ref="file" @change="handleUpload()" />
        </td>
      </tr>
      <tr>
        <td width="20%">Tên sản phẩm:</td>
        <td width="80%">
          <input
            type="text"
            v-model="product.name"
            style="width: 100%; padding: 8px"
          />
        </td>
      </tr>
      <tr>
        <td width="20%">Giá:</td>
        <td width="80%">
          <input
            type="number"
            v-model="product.price"
            style="width: 100%; padding: 8px"
          />
        </td>
      </tr>
      <tr>
        <td width="20%">Giảm giá:</td>
        <td>
          <input type="checkbox" v-model="product.isSale" class="red-input" />
        </td>
      </tr>
      <tr v-if="product.isSale">
        <td width="20%">Phần trăm:</td>
        <td>
          <input
            type="number"
            name=""
            id=""
            v-model="product.sale"
            style="padding: 8px"
          />%
        </td>
      </tr>
      <tr v-if="product.typeProduct === 'Quần áo'">
        <td width="20%">Size:</td>
        <td width="80%">
          <ul class="ks-cboxtags">
            <li>
              <input
                type="checkbox"
                id="checkboxOneSize"
                value="S"
                v-model="product.sizesClothing"
              /><label for="checkboxOneSize">S</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxTwo"
                value="M"
                v-model="product.sizesClothing"
              /><label for="checkboxTwo">M</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxThree"
                value="L"
                v-model="product.sizesClothing"
              /><label for="checkboxThree">L</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxFour"
                value="XL"
                v-model="product.sizesClothing"
              /><label for="checkboxFour">XL</label>
            </li>
          </ul>
        </td>
      </tr>
      <tr v-if="product.typeProduct === 'Giày'">
        <td>Size:</td>
        <td>
          <ul class="ks-cboxtags">
            <li>
              <input
                type="checkbox"
                id="checkboxOneSize"
                value="35"
                v-model="product.sizesShoe"
              /><label for="checkboxOneSize">35</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxTwoSize"
                value="36"
                v-model="product.sizesShoe"
              /><label for="checkboxTwoSize">36</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxThreeSize"
                value="37"
                v-model="product.sizesShoe"
              /><label for="checkboxThreeSize">37</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxFourSize"
                value="38"
                v-model="product.sizesShoe"
              /><label for="checkboxFourSize">38</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxFiveSize"
                value="39"
                v-model="product.sizesShoe"
              /><label for="checkboxFiveSize">39</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxSixSize"
                value="40"
                v-model="product.sizesShoe"
              /><label for="checkboxSixSize">40</label>
            </li>
          </ul>
        </td>
      </tr>
      <tr v-if="product.typeProduct !== 'Phụ kiện'">
        <td>Màu săc:</td>
        <td>
          <ul class="ks-cboxtags">
            <li>
              <input
                type="checkbox"
                id="checkboxOneColor"
                value="pink"
                v-model="product.colors"
              /><label for="checkboxOneColor">Hồng</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxTwoColor"
                value="black"
                v-model="product.colors"
              /><label for="checkboxTwoColor">Đen</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxThreeColor"
                value="gray"
                v-model="product.colors"
              /><label for="checkboxThreeColor">Xám</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxFourColor"
                value="red"
                v-model="product.colors"
              /><label for="checkboxFourColor">Đỏ</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxFiveColor"
                value="blue"
                v-model="product.colors"
              /><label for="checkboxFiveColor">Xanh</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxSixColor"
                value="white"
                v-model="product.colors"
              /><label for="checkboxSixColor">Trắng</label>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td width="20%">Số lượng:</td>
        <td width="80%">
          <input
            type="number"
            v-model="product.quantity"
            style="width: 100%; padding: 8px"
          />
        </td>
      </tr>
      <tr>
        <td width="20%">Mô tả:</td>
        <td width="80%">
          <textarea
            name=""
            id=""
            v-model="product.description"
            cols="30"
            rows="10"
            style="width: 100%; padding: 8px"
          ></textarea>
        </td>
      </tr>
      <tr>
        <td width="20%"></td>
        <td width="80%">
          <button @click.prevent="addProduct(product)" class="btn-update">
            <span>Thêm</span>
          </button>
        </td>
      </tr>
    </table>
  </form>
</template>

<script>
// import { reactive } from "@vue/reactivity";
// import { useStore } from "vuex";
import axios from "axios";
export default {
  // setup() {
  //   const store = useStore();
  //   const formData = new FormData();
  //   const product = reactive({
  //     typeProduct: "",
  //     selectedFile: "",
  //     name: "",
  //     price: 0,
  //     quantity: 0,
  //     isSale: false,
  //     sale: 0,
  //     sizesClothing: [],
  //     sizesShoe: [],
  //     colors: [],
  //   });
  //   const onFileChange = (e) => {
  //     const selectedFile = e.target.files[0]; // accessing file
  //     selectedFile = selectedFile;
  //   };
  //   const addProduct = () => {
  //     if (product.typeProduct.length !== 0) {
  //       if (product.image.length !== 0) {
  //         if (product.name.length !== 0) {
  //           if (product.price.length !== 0) {
  //             const data = {
  //               typeProduct: product.typeProduct,
  //               image: formData.append("file", this.selectedFile),
  //               name: product.name,
  //               price: product.price,
  //               quantity: product.quantity,
  //               isSale: product.isSale,
  //               sale: product.sale,
  //               sizesClothing: product.sizesClothing,
  //               sizesShoe: product.sizesShoe,
  //               colors: product.colors,
  //             };
  //             console.log(data);
  //             store.dispatch("product", data);
  //           } else {
  //             alert("Bạn chưa điền giá sản phẩm");
  //           }
  //         } else {
  //           alert("Bạn chưa điền tên sản phẩm");
  //         }
  //       } else {
  //         alert("Bạn chưa thêm ảnh cho sản phẩm");
  //       }
  //     } else {
  //       alert("Bạn chưa chọn loại sản phẩm");
  //     }
  //   };
  //   return { product: product, addProduct, onFileChange };
  // },
  data() {
    return {
      product: {
        typeProduct: "",
        image: "",
        name: "",
        price: 0,
        quantity: 0,
        isSale: false,
        sale: 0,
        sizesClothing: [],
        sizesShoe: [],
        colors: [],
      },
    };
  },
  methods: {
    handleUpload() {
      this.product.image = this.$refs.file.files[0];
    },
    async addProduct(product) {
      const data = new FormData();
      data.append("file", product.image);
      data.append("upload_preset", "uploads");
      try {
        const uploads = await axios.post(
          "https://api.cloudinary.com/v1_1/dwdezrrqh/upload",
          data
        );
        product.image = uploads.data.url;
        this.$store.dispatch("products/createProductAction", product);
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style></style>
