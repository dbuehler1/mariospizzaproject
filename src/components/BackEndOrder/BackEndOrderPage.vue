<template><div >
  <!--For the time being, hard coded a singular email to be permitted to view this page-->
  <h2 class="pl-5" v-if="authUser.email !== 'test2@mail.com'">Oops! Nothing to See Here!</h2>
<div v-if="(this.orders.length > 0) && (authUser.email ==='test2@mail.com')">

  <div class="row">
    <div class="col-md-8">
      <!--Displays selectable statuses of orders-->
      <div class="row Statuses">
        <div class="col-md-3 border border-dark" @click="setPending" v-bind:class="{'bg-success text-light border border-dark': currentOrder.status==='PENDING'}">Pending</div>
        <div class="col-md-3 border border-dark" @click="setPrep" v-bind:class="{'bg-success text-light border border-dark': currentOrder.status==='PREP'}">Prep</div>
        <div class="col-md-3 border border-dark" @click="setBake" v-bind:class="{'bg-success text-light border border-dark': currentOrder.status==='BAKE'}">Bake</div>
        <div class="col-md-3 border border-dark" @click="setReady" v-bind:class="{'bg-success text-light border border-dark': currentOrder.status==='READY'}">Ready</div>
      </div>

      <div class="row border border-dark OrderHeader">
        <div class="col-md-12"><h3>Order Items</h3></div>
      </div>

      <div class="row pb-2 border border-dark OrderItem">
        <div class="col-md-4">
          <h4>Item Name</h4>
        </div>
        <div class="col-md-4">
          <h4>Item Description</h4>
        </div>
        <div class="col-md-4">
          <h4>Item Option</h4>
        </div>
      </div>
      <!--Lists all menu items in an order-->
      <order-items v-for="(item, i) in currentOrder.items"
                   :item="item"
                   :key="i">
      </order-items>
    </div>
    <div class="col-md-4">
      <div class="row OrderHeader">
          <div class="col-md-12 border border-dark">
            Orders
          </div>
      </div>
      <div class="row border border-dark OrderHeader">
        <div class="col-1 OrderHeader border border-dark"><h3>#</h3></div>
        <div class="col-9 OrderHeader border border-dark"><h3>Order Name</h3></div>
        <div class="col-2 OrderHeader border border-dark"><h3>Status</h3></div>
      </div>
      <div class="orders">
        <!--Lists out all of the orders-->
      <order-list v-for="(order, o) in orders"
                  :order="order"
                  :num="o"
                  :key="o"
                  v-on:selectOrder="selectOrder($event)"

      ></order-list>
      </div>
    </div>
  </div>


</div>
</div>
</template>

<script>
import OrderItems from "@/components/BackEndOrder/OrderItems";
import OrderList from "@/components/BackEndOrder/OrderList";
import {db} from "@/vue-models";
export default {
name: "BackEndOrderPage",
  components: {OrderList, OrderItems},
  props : {
    // orders : Array,
    authUser : {required: true}
  },
  methods : {
    selectOrder(order) {
      console.log(this.currentOrder);
      console.log(order);
      this.currentOrder = this.orders[this.orders.indexOf(order)];

    },
    //set status of order to pending
    setPending() {
      this.currentOrder.status = 'PENDING';
      this.updateOrder();
    },
    //set status of order to prep
    setPrep() {
      this.currentOrder.status = 'PREP';
      this.updateOrder();
    },
    //set status of order to bake
    setBake() {
      this.currentOrder.status = 'BAKE';
      this.updateOrder();
    },
    //set status of order to ready
    setReady() {
      this.currentOrder.status = 'READY';
      this.updateOrder();
    },
    //Updates the status of the order
    updateOrder() {
      db.collection('orders').doc(this.currentOrder.id).update(this.currentOrder)
          .catch(error => {
            console.error(error);
          })
    }
  },
  firestore : {
  //grabs all orders from firestore and stores them in local array: 'orders'
    orders: db.collection("orders")
  },
  data() {
    return {
      //holds the order that was selected
      currentOrder : {},
      //holds a collection of all of the orders
      orders : [],
    }
  },
}
</script>

<style scoped>
  .Statuses{
    background-color: white;
    text-align: center;
    font-size: 16pt;
  }
  .Statuses :hover {
    cursor: pointer;
    text-align: center;
    font-size: 20pt;
    font-weight: bold;
    background-color: goldenrod;
  }
  .OrderItem {
    background-color: #ffc107;
    font-weight: bold;
  }
  .OrderHeader {
    font-size: 16pt;
    text-align: center;
    background-color: #ffc107;
  }
  .orders {
    height: 35rem;
    overflow: auto;
  }
</style>