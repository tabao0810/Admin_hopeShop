<template>
  <table cellpadding="10" width="100%">
    <tr>
      <td width="20%">Hình ảnh:</td>
      <td width="80%">
        <input
          type="text"
          v-model="productDetail.image"
          style="width: 100%; padding: 8px"
        />
      </td>
    </tr>
    <tr>
      <td width="20%">Tên sản phẩm:</td>
      <td width="80%">
        <input
          type="text"
          v-model="productDetail.name"
          style="width: 100%; padding: 8px"
        />
      </td>
    </tr>
    <tr>
      <td width="20%">Giá:</td>
      <td width="80%">
        <input
          type="number"
          v-model="productDetail.price"
          style="width: 100%; padding: 8px"
        />
      </td>
    </tr>
    <tr>
      <td width="20%">Giảm giá:</td>
      <td>
        <input
          type="checkbox"
          v-model="productDetail.isSale"
          class="red-input"
        />
      </td>
    </tr>
    <tr v-if="productDetail.isSale">
      <td width="20%">Phần trăm:</td>
      <td>
        <input
          type="number"
          name=""
          id=""
          v-model="productDetail.sale"
          style="padding: 8px"
        />%
      </td>
    </tr>
    <tr v-if="productDetail.sizeClothing">
      <td width="20%">Size:</td>
      <td class="size-input" width="80%">
        <ul class="ks-cboxtags">
          <li>
            <input
              type="checkbox"
              id="checkboxOneSize"
              value="S"
              v-model="productDetail.sizesClothing"
            /><label for="checkboxOneSize">S</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxTwo"
              value="M"
              v-model="productDetail.sizesClothing"
            /><label for="checkboxTwo">M</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxThree"
              value="L"
              v-model="productDetail.sizesClothing"
            /><label for="checkboxThree">L</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFour"
              value="XL"
              v-model="productDetail.sizesClothing"
            /><label for="checkboxFour">XL</label>
          </li>
        </ul>
      </td>
    </tr>
    <tr v-if="productDetail.sizeShoe">
      <td width="20%">Size:</td>
      <td width="80%">
        <ul class="ks-cboxtags">
          <li>
            <input
              type="checkbox"
              id="checkboxOneSize"
              value="35"
              v-model="productDetail.sizesShoe"
            /><label for="checkboxOneSize">35</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxTwoSize"
              value="36"
              v-model="productDetail.sizesShoe"
            /><label for="checkboxTwoSize">36</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxThreeSize"
              value="37"
              v-model="productDetail.sizesShoe"
            /><label for="checkboxThreeSize">37</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFourSize"
              value="38"
              v-model="productDetail.sizesShoe"
            /><label for="checkboxFourSize">38</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFiveSize"
              value="39"
              v-model="productDetail.sizesShoe"
            /><label for="checkboxFiveSize">39</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxSixSize"
              value="40"
              v-model="productDetail.sizesShoe"
            /><label for="checkboxSixSize">40</label>
          </li>
        </ul>
      </td>
    </tr>
    <tr v-if="productDetail.color">
      <td width="20%">Màu săc:</td>
      <td>
        <ul class="ks-cboxtags">
          <li>
            <input
              type="checkbox"
              id="checkboxOneColor"
              value="pink"
              v-model="productDetail.colors"
            /><label for="checkboxOneColor">Pink</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxTwoColor"
              value="black"
              v-model="productDetail.colors"
            /><label for="checkboxTwoColor">Black</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxThreeColor"
              value="gray"
              v-model="productDetail.colors"
            /><label for="checkboxThreeColor">Gray</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFourColor"
              value="red"
              v-model="productDetail.colors"
            /><label for="checkboxFourColor">Red</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFiveColor"
              value="blue"
              v-model="productDetail.colors"
            /><label for="checkboxFiveColor">Blue</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxSixColor"
              value="white"
              v-model="productDetail.colors"
            /><label for="checkboxSixColor">White</label>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td width="20%">Số lượng:</td>
      <td width="80%">
        <input
          type="number"
          v-model="productDetail.quantity"
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
          v-model="productDetail.description"
          cols="30"
          rows="10"
          style="width: 100%; padding: 8px"
        ></textarea>
      </td>
    </tr>
    <tr>
      <td width="20%"></td>
      <td width="80%">
        <button
          @click.prevent="updateProduct(productDetail)"
          class="btn-update"
        >
          <span>Cập nhật</span>
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
// import { reactive, toRefs } from "@vue/reactivity";
// import { useStore } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("products");
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      productDetail: (state) => state.productDetail,
    }),
  },
  methods: {
    ...mapActions({
      updateProduct: "updateProductActions",
    }),
  },
};
</script>

<style>
.red-input {
  accent-color: #ff343b;
  height: 20px;
  width: 20px;
  cursor: pointer;
}
.size-input > label > input {
  accent-color: #ff343b;
  height: 16px;
  width: 16px;
  cursor: pointer;
}

ul.ks-cboxtags {
  list-style: none;
  padding: 0;
}
ul.ks-cboxtags li {
  display: inline;
  margin-right: 8px;
}
ul.ks-cboxtags li label {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(139, 139, 139, 0.3);
  color: #adadad;
  border-radius: 25px;
  white-space: nowrap;
  margin: 3px 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s;
}

ul.ks-cboxtags li label {
  padding: 8px 10px;
  cursor: pointer;
}

ul.ks-cboxtags li label::before {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 14px;
  padding: 2px 6px 2px 2px;
  content: "+";
  transition: transform 0.3s ease-in-out;
}

ul.ks-cboxtags li input[type="checkbox"]:checked + label::before {
  content: "✓";
  transform: rotate(-360deg);
  transition: transform 0.3s ease-in-out;
}

ul.ks-cboxtags li input[type="checkbox"]:checked + label {
  border: 2px solid #1bdbf8;
  background-color: #12bbd4;
  color: #fff;
  transition: all 0.2s;
  font-weight: 500;
  font-size: 14px;
}

ul.ks-cboxtags li input[type="checkbox"] {
  display: absolute;
}
ul.ks-cboxtags li input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}
ul.ks-cboxtags li input[type="checkbox"]:focus + label {
  border: 2px solid #1bdbf8;
}
.btn-update {
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid black;
  float: right;
}
.btn-update:hover {
  background-color: #1bdbf8;
  border: 2px solid #1bdbf8;
  color: white;
  transition: all 0.4s linear;
}
</style>
