<template>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-5">Quản lý đơn hàng</h4>
          <!-- <div class="card-bar-controll">
            <div class="form-group">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tên khách hàng"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model="searchClothing"
                />
                <div class="input-group-append">
                  <button
                    @click="handleSearchClothing(searchClothing)"
                    class="btn btn-sm btn-gradient-primary"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div> -->
          <div class="table-responsive">
            <table class="table" border="1">
              <thead>
                <tr align="center">
                  <th>Họ và tên</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                  <th>Sản phẩm</th>
                  <th>Phí vận chuyển</th>
                  <th>Tổng tiền</th>
                  <th>Thời gian đặt</th>
                  <th>Tình trạng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in getOrders" :key="product._id">
                  <td>
                    {{ product.fullName }}
                  </td>
                  <td>{{ product.phoneNumber }}</td>
                  <td>
                    {{ product.address }},{{ product.commune }},{{
                      product.district
                    }},{{ product.city }}
                  </td>
                  <td>
                    <div
                      class="product-infor-item mt-1"
                      v-for="(pro, index) in product.carts"
                      :key="index"
                    >
                      <div class="product-infor-image">
                        <img :src="pro.image" alt="" />
                        <div class="product-infor-detail">
                          <p class="ml-3">{{ pro.name }}</p>
                          <p class="ml-3">
                            <span class="mr-4" v-if="pro.color"
                              >Size: {{ pro.sizeClothing
                              }}{{ pro.sizeShoe }}</span
                            ><span v-if="pro.color"
                              >Màu sắc: {{ pro.color }}</span
                            >
                          </p>
                        </div>
                        <span class="product-infor-amount">{{
                          pro.amount
                        }}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ formatShip(product.shipcod) }}
                  </td>
                  <td>{{ totalPrice(product) }}</td>
                  <td>
                    {{ formatDate(product.createdAt) }}
                  </td>
                  <td>
                    <select name="" id="" v-model="product.mess">
                      <option value="Chờ xác nhận">Chờ xác nhận</option>
                      <option value="Chờ lấy hàng">Chờ lấy hàng</option>
                      <option value="Đang giao">Đang giao</option>
                      <option value="Giao hàng thành công">
                        Giao hàng thành công
                      </option>
                    </select>
                  </td>
                  <td>
                    <button
                      class="btn-feature btn-update"
                      title="Cập nhật đơn hàng"
                      @click="handleUpdate(product)"
                    >
                      <i class="mdi mdi-update btn-icon-prepend"></i>
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
      :page-count="getPaginationCountOrder"
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
</template>

<script>
import Paginate from "vuejs-paginate-next";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("order");
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 5,
    };
  },
  components: {
    Paginate,
  },
  methods: {
    ...mapActions({
      getAllOrder: "getAllOrdersActions",
      handleUpdate: "updateOrderActions",
    }),
    formatShip(a) {
      const x = Number(a);
      return x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    },
    totalPrice(list) {
      console.log(list);
      const sub = list.carts.reduce(
        (sum, cart) => (sum += cart.amount * this.format_sale(cart)),
        0
      );
      let x = sub + Number(list.shipcod);
      return (x = x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      }));
    },
    format_sale(cartItem) {
      if (cartItem.isSale === true) {
        return cartItem.price - cartItem.price * (cartItem.sale / 100);
      } else {
        return cartItem.price;
      }
    },
    formatDate(a) {
      const time = new Date(a);
      return time.toLocaleString();
    },
    clickCallback(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {
    ...mapState({
      listOrder: (state) => state.Orders,
    }),
    getOrders() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.listOrder.slice(start, end);
    },
    getPaginationCountOrder() {
      return Math.ceil(this.listOrder.length / this.perPage);
    },
  },
  created() {
    this.getAllOrder();
    this.listOrder.map((item) => {
      this.items.push(item);
    });
  },
};
</script>

<style></style>
<style scoped>
.product-infor-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-infor-image {
  display: flex;
  align-items: center;
  position: relative;
}
.product-infor-image > img {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.product-infor-amount {
  position: absolute;
  top: 0px;
  left: 40px;
  border-radius: 50%;
  background-color: #898989;
  width: 20px;
  height: 20px;
  font-size: 14 px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-infor-detail > p {
  font-size: 14px;
  margin: 0;
  text-align: left;
}
.btn-update:hover {
  color: rgb(0, 255, 42);
}
</style>
