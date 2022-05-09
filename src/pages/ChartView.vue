<template>
  <div class="px-5">
    <h1>Thống kê doanh số</h1>
    <div class="date-pick">
      <select
        name=""
        id=""
        v-model="month"
        class="selectBox"
        @change="changeSelect"
      >
        <option value="0">Tháng 1</option>
        <option value="1">Tháng 2</option>
        <option value="2">Tháng 3</option>
        <option value="3">Tháng 4</option>
        <option value="4">Tháng 5</option>
        <option value="5">Tháng 6</option>
        <option value="6">Tháng 7</option>
        <option value="7">Tháng 8</option>
        <option value="8">Tháng 9</option>
        <option value="9">Tháng 10</option>
        <option value="10">Tháng 11</option>
        <option value="11">Tháng 12</option>
      </select>
      <select
        name=""
        id=""
        v-model="year"
        class="selectBox"
        @change="changeSelectYear"
      >
        <option value="2020">Năm 2020</option>
        <option value="2021">Năm 2021</option>
        <option value="2022">Năm 2022</option>
        <option value="2023">Năm 2023</option>
        <option value="2024">Năm 2024</option>
      </select>
    </div>
  </div>
  <div class="row mt-5 px-5">
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-danger card-img-holder text-white">
        <div class="card-body">
          <img
            src="assets/images/dashboard/circle.svg"
            class="card-img-absolute"
            alt="circle-image"
          />
          <h4 class="font-weight-normal mb-3">
            Tổng đơn hàng
            <i class="mdi mdi-chart-line mdi-24px float-right"></i>
          </h4>
          <h2 class="mb-5">{{ ListPricebyMonth.length }} đơn</h2>
        </div>
      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-info card-img-holder text-white">
        <div class="card-body">
          <img
            src="assets/images/dashboard/circle.svg"
            class="card-img-absolute"
            alt="circle-image"
          />
          <h4 class="font-weight-normal mb-3">
            Tổng doanh thu
            <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
          </h4>
          <h2 class="mb-5">{{ sumTotal(ListPricebyMonth) }}</h2>
        </div>
      </div>
    </div>
    <div class="col-md-4 stretch-card grid-margin">
      <div class="card bg-gradient-success card-img-holder text-white">
        <div class="card-body">
          <img
            src="assets/images/dashboard/circle.svg"
            class="card-img-absolute"
            alt="circle-image"
          />
          <h4 class="font-weight-normal mb-3">
            Khách hàng đăng kí
            <i class="mdi mdi-diamond mdi-24px float-right"></i>
          </h4>
          <h2 class="mb-5">
            {{ userList.length }} <span class="txt-user">khách hàng</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Các đơn hàng trong tháng</h4>
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
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("order");
const userAction = createNamespacedHelpers("user");
const userState = createNamespacedHelpers("user");
import Paginate from "vuejs-paginate-next";
export default {
  components: {
    Paginate,
  },
  data() {
    return {
      month: 0,
      year: 2020,
      items: [],
      currentPage: 1,
      perPage: 5,
    };
  },
  methods: {
    ...mapActions({
      getAllOrder: "getAllOrdersActions",
    }),
    ...userAction.mapActions({
      getAllUser: "getAllUserAction",
    }),
    changeSelect() {
      this.$store.dispatch("order/searchMonthAction", this.month);
    },
    changeSelectYear() {
      this.$store.dispatch("order/searchYearAction", this.year);
    },
    format_sale(cartItem) {
      if (cartItem.isSale === true) {
        return cartItem.price - cartItem.price * (cartItem.sale / 100);
      } else {
        return cartItem.price;
      }
    },
    sumTotal(list) {
      const arr = list.map((ord) => ord.carts);
      let sumTotal = 0;
      for (let i = 0; i < arr.length; i++) {
        const sub = arr[i].reduce(
          (sum, cart) => (sum += cart.amount * this.format_sale(cart)),
          0
        );
        sumTotal += sub;
      }
      return sumTotal.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    },
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
    formatDate(a) {
      const time = new Date(a);
      return time.toLocaleString();
    },
  },
  computed: {
    ...mapGetters({
      ListPricebyMonth: "ListPricebyMonth",
    }),
    ...userState.mapState({
      userList: (state) => state.userList,
    }),
    getOrders() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.ListPricebyMonth.slice(start, end);
    },
    getPaginationCountOrder() {
      return Math.ceil(this.ListPricebyMonth.length / this.perPage);
    },
  },
  created() {
    this.getAllOrder();
    this.getAllUser();
    this.ListPricebyMonth.map((item) => {
      this.items.push(item);
    });
  },
};
</script>

<style>
.selectBox {
  padding: 10px;
  cursor: pointer;
  width: 100%;
}
.selectBox > option {
  font-size: 16px;
  padding: 8px;
}
.txt-user {
  font-size: 18px;
}
.date-pick {
  display: flex;
}
</style>
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
</style>
