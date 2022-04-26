<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Quản lý quần áo</h4>
          <div class="card-bar-controll">
            <div class="form-group">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tên sản phẩm"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="searchClothing"
                />
                <div class="input-group-append">
                  <button
                    @click="handleSearchClothing(searchClothing)"
                    class="btn btn-sm btn-info"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div>
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
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Sale</th>
                  <th>Size</th>
                  <th>Màu sắc</th>
                  <th>Số lượng</th>
                  <th>Mô tả</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in getClothings" :key="product._id">
                  <td>
                    <img :src="product.image" alt="" />
                    {{ product.name }}
                  </td>
                  <td>{{ product.price }}</td>
                  <td>
                    <span v-if="product.isSale">-{{ product.sale }}%</span>
                  </td>
                  <td>
                    <label
                      v-for="(sizeClothing, index) in product.sizesClothing"
                      :key="index"
                      class="badge badge-info mr-2"
                      >{{ sizeClothing }}</label
                    >
                  </td>
                  <td>
                    <label
                      v-for="(color, index) in product.colors"
                      :key="index"
                      class="badge badge-info mr-2 text-uppercase"
                      >{{ color }}</label
                    >
                  </td>
                  <td>{{ product.quantity }}</td>
                  <td class="product-des">
                    <span>{{ product.description }}</span>
                  </td>
                  <td>
                    <button
                      class="btn-feature btn-pen"
                      @click="handleOpenModalCartList(product)"
                    >
                      <i class="mdi mdi-border-color btn-icon-prepend"></i>
                    </button>
                    <button
                      class="btn-feature btn-trash"
                      @click="handleDelete(product._id)"
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
      :page-count="getPaginationCountClothing"
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
  <hr />
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Quản lý phụ kiện</h4>
          <div class="card-bar-controll">
            <div class="form-group">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tên sản phẩm"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="searchAccesory"
                />
                <div class="input-group-append">
                  <button
                    @click="handleSearchAccesory(searchAccesory)"
                    class="btn btn-sm btn-info"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div>
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
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Sale</th>
                  <th>Số lượng</th>
                  <th>Mô tả</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in getAccessory" :key="product._id">
                  <td>
                    <img :src="product.image" alt="" />
                    {{ product.name }}
                  </td>
                  <td>{{ product.price }}</td>
                  <td>
                    <span v-if="product.isSale">-{{ product.sale }}%</span>
                  </td>
                  <td>{{ product.quantity }}</td>
                  <td class="product-des">
                    <span>{{ product.description }}</span>
                  </td>
                  <td>
                    <button
                      class="btn-feature btn-pen"
                      @click="handleOpenModalCartList(product)"
                    >
                      <i class="mdi mdi-border-color btn-icon-prepend"></i>
                    </button>
                    <button
                      class="btn-feature btn-trash"
                      @click="handleDelete(product._id)"
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
      :page-count="getPaginationCountAccesory"
      :page-range="2"
      :margin-pages="2"
      :click-handler="clickCallbackAccesory"
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
  <hr />
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Quản lý túi xách</h4>
          <div class="card-bar-controll">
            <div class="form-group">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tên sản phẩm"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="searchBag"
                />
                <div class="input-group-append">
                  <button
                    @click="handleSearchBag(searchBag)"
                    class="btn btn-sm btn-info"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div>
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
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Sale</th>
                  <th>Màu sắc</th>
                  <th>Số lượng</th>
                  <th>Mô tả</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in getBag" :key="product._id">
                  <td>
                    <img :src="product.image" alt="" />
                    {{ product.name }}
                  </td>
                  <td>{{ product.price }}</td>
                  <td>
                    <span v-if="product.isSale">-{{ product.sale }}%</span>
                  </td>
                  <td>
                    <label
                      v-for="(color, index) in product.colors"
                      :key="index"
                      class="badge badge-info mr-2 text-uppercase"
                      >{{ color }}</label
                    >
                  </td>
                  <td>{{ product.quantity }}</td>
                  <td class="product-des">
                    <span>{{ product.description }}</span>
                  </td>
                  <td>
                    <button
                      class="btn-feature btn-pen"
                      @click="handleOpenModalCartList(product)"
                    >
                      <i class="mdi mdi-border-color btn-icon-prepend"></i>
                    </button>
                    <button
                      class="btn-feature btn-trash"
                      @click="handleDelete(product._id)"
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
      :page-count="getPaginationCountBag"
      :page-range="2"
      :margin-pages="2"
      :click-handler="clickCallbackBag"
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
  <hr />
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Quản lý giày</h4>
          <div class="card-bar-controll">
            <div class="form-group">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tên sản phẩm"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="searchShoe"
                />
                <div class="input-group-append">
                  <button
                    @click="handleSearchShoe(searchShoe)"
                    class="btn btn-sm btn-info"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div>
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
                  <th>Hình ảnh</th>
                  <th>Giá</th>
                  <th>Sale</th>
                  <th>Size</th>
                  <th>Màu sắc</th>
                  <th>Số lượng</th>
                  <th>Mô tả</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in getShoe" :key="product._id">
                  <td>
                    <img :src="product.image" alt="" />
                    {{ product.name }}
                  </td>
                  <td>{{ product.price }}</td>
                  <td>
                    <span v-if="product.isSale">-{{ product.sale }}%</span>
                  </td>
                  <td>
                    <label
                      v-for="(sizeShoe, index) in product.sizesShoe"
                      :key="index"
                      class="badge badge-info mr-2"
                      >{{ sizeShoe }}</label
                    >
                  </td>
                  <td>
                    <label
                      v-for="(color, index) in product.colors"
                      :key="index"
                      class="badge badge-info mr-2 text-uppercase"
                      >{{ color }}</label
                    >
                  </td>
                  <td>{{ product.quantity }}</td>
                  <td class="product-des">
                    <span>{{ product.description }}</span>
                  </td>
                  <td>
                    <button
                      class="btn-feature btn-pen"
                      @click="handleOpenModalCartList(product)"
                    >
                      <i class="mdi mdi-border-color btn-icon-prepend"></i>
                    </button>
                    <button
                      class="btn-feature btn-trash"
                      @click="handleDelete(product._id)"
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
      :page-count="getPaginationCountShoe"
      :page-range="2"
      :margin-pages="2"
      :click-handler="clickCallbackShoe"
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
      <edit-view :productDetail="productDetail"></edit-view>
    </app-modal>
  </teleport>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalCartAdd"
      :handelCloseModal="handleCloseModalCartAdd"
    >
      <add-product></add-product>
    </app-modal>
  </teleport>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import EditView from "../components/EditView.vue";
import AddProduct from "../components/AddProducct.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters } =
  createNamespacedHelpers("products");
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      currentPageAcc: 1,
      currentPageBag: 1,
      currentPageShoe: 1,
      perPage: 5,
      isOpenModalCartList: false, // đóng modal
      isOpenModalCartAdd: false, // đóng modal
      searchClothing: "",
      searchAccesory: "",
      searchBag: "",
      searchShoe: "",
    };
  },
  components: {
    Paginate,
    EditView,
    AddProduct,
  },
  computed: {
    ...mapState({
      productList: (state) => state.productList,
      productDetail: (state) => state.productDetail,
    }),
    ...mapGetters({
      productListClothing: "productClothingListByName",
      productListAccessory: "productAccessoryListByName",
      productListBag: "productBagListByName",
      productListShoe: "productShoeListByName",
    }),
    getClothings() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListClothing.slice(start, end);
    },
    getAccessory() {
      let start = (this.currentPageAcc - 1) * this.perPage;
      let end = this.currentPageAcc * this.perPage;
      return this.productListAccessory.slice(start, end);
    },
    getBag() {
      let start = (this.currentPageBag - 1) * this.perPage;
      let end = this.currentPageBag * this.perPage;
      return this.productListBag.slice(start, end);
    },
    getShoe() {
      let start = (this.currentPageShoe - 1) * this.perPage;
      let end = this.currentPageShoe * this.perPage;
      return this.productListShoe.slice(start, end);
    },
    getPaginationCountClothing() {
      return Math.ceil(this.productListClothing.length / this.perPage);
    },
    getPaginationCountAccesory() {
      return Math.ceil(this.productListAccessory.length / this.perPage);
    },
    getPaginationCountBag() {
      return Math.ceil(this.productListBag.length / this.perPage);
    },
    getPaginationCountShoe() {
      return Math.ceil(this.productListShoe.length / this.perPage);
    },
  },
  methods: {
    ...mapActions({
      getAllProduct: "getAllProductAction",
      getSingleProduct: "getSingleProductsAction",
      handleDelete: "deleteProductActions",
      handleSearchClothing: "searchClothingAction",
      handleSearchAccesory: "searchAccessoryAction",
      handleSearchBag: "searchBagAction",
      handleSearchShoe: "searchShoeAction",
    }),
    clickCallback(pagenum) {
      this.currentPage = Number(pagenum);
    },
    clickCallbackAccesory(pagenum) {
      this.currentPageAcc = Number(pagenum);
    },
    clickCallbackBag(pagenum) {
      this.currentPageBag = Number(pagenum);
    },
    clickCallbackShoe(pagenum) {
      this.currentPageShoe = Number(pagenum);
    },
    handleOpenModalCartList(a) {
      this.isOpenModalCartList = true;
      this.$store.dispatch("products/getSingleProductsAction", a._id); // mở modal
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
  created() {
    this.getAllProduct();
    this.productListClothing.map((item) => {
      this.items.push(item);
    });
    this.productListAccessory.map((item) => {
      this.items.push(item);
    });
    this.productListBag.map((item) => {
      this.items.push(item);
    });
    this.productListShoe.map((item) => {
      this.items.push(item);
    });
  },
};
</script>

<style>
.product-des > span {
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.page-link,
.page-item {
  cursor: pointer;
}
.shop_paginatin {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}
.btn-feature {
  background-color: transparent;
  border: none;
  padding: 0px 10px;
  font-size: 20px;
}
.btn-pen:hover {
  color: #1bdbf8;
}
.btn-trash:hover {
  color: red;
}
</style>
