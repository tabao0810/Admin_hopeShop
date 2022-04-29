<template>
  <div class="px-5">
    <h1>Thống kê doanh số</h1>
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
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("order");
const userAction = createNamespacedHelpers("user");
const userState = createNamespacedHelpers("user");
export default {
  data() {
    return {
      month: 0,
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
  },
  computed: {
    ...mapGetters({
      ListPricebyMonth: "ListPricebyMonth",
    }),
    ...userState.mapState({
      userList: (state) => state.userList,
    }),
  },
  created() {
    this.getAllOrder();
    this.getAllUser();
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
</style>
