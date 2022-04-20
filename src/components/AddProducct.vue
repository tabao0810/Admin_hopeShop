<template>
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
        <input
          type="text"
          v-model="product.image"
          style="width: 100%; padding: 8px"
        />
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
    <tr>
      <td>Màu săc:</td>
      <td>
        <ul class="ks-cboxtags">
          <li>
            <input
              type="checkbox"
              id="checkboxOneColor"
              value="pink"
              v-model="product.colors"
            /><label for="checkboxOneColor">Pink</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxTwoColor"
              value="black"
              v-model="product.colors"
            /><label for="checkboxTwoColor">Black</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxThreeColor"
              value="gray"
              v-model="product.colors"
            /><label for="checkboxThreeColor">Gray</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFourColor"
              value="red"
              v-model="product.colors"
            /><label for="checkboxFourColor">Red</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFiveColor"
              value="blue"
              v-model="product.colors"
            /><label for="checkboxFiveColor">Blue</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxSixColor"
              value="white"
              v-model="product.colors"
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
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const product = reactive({
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
    });
    const addProduct = () => {
      if (product.typeProduct.length !== 0) {
        if (product.image.length !== 0) {
          if (product.name.length !== 0) {
            if (product.price.length !== 0) {
              const data = {
                typeProduct: product.typeProduct,
                image: product.image,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                isSale: product.isSale,
                sale: product.sale,
                sizesClothing: product.sizesClothing,
                sizesShoe: product.sizesShoe,
                colors: product.colors,
              };
              store.dispatch("product/createProductAction", data);
            } else {
              alert("Bạn chưa điền giá sản phẩm");
            }
          } else {
            alert("Bạn chưa điền tên sản phẩm");
          }
        } else {
          alert("Bạn chưa thêm ảnh cho sản phẩm");
        }
      } else {
        alert("Bạn chưa chọn loại sản phẩm");
      }
    };
    return { product: product, addProduct };
  },
};
</script>

<style></style>
