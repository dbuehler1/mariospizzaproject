<template>
  <div >
  <div class="border border-dark" v-for="order in orders" :key="order.id">
    <h3 class="bg-warning">Pickup Alias: {{order.customerName}}</h3>

    <div class="row Statuses">
      <div class="col-md-3 border border-dark" v-bind:class="{'bg-danger text-light': order.status==='PENDING'}">Pending</div>
      <div class="col-md-3 border border-dark" v-bind:class="{'bg-warning text-light': order.status==='PREP'}">Prep</div>
      <div class="col-md-3 border border-dark" v-bind:class="{'bg-info text-light': order.status==='BAKE'}">Bake</div>
      <div class="col-md-3 border border-dark" v-bind:class="{'bg-success text-light': order.status==='READY'}">Ready</div>
    </div><br><br>

  </div>
  </div>
</template>

<script>
import {db} from "@/vue-models";

export default {
name: "CustomerOrderList",
  props : {
    authUser : {required: true}
  },
  firestore() {
    console.log(this.authUser.email);
    return {orders: db.collection('orders').where("CustomerId", "==", this.authUser.email),}
  },
  data(){
    return{
      orders : [],

    }
  },
}
</script>

<style scoped>
.Statuses {
  text-align: center;
  font-size: 16pt;
  font-weight: bold;
  background-color: lightgray;
}
</style>