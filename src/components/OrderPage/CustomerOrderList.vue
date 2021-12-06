<template>
  <div>
  <div v-for="order in orders" :key="order.id">
    <div class="row Statuses">
      <div class="col-md-3" v-bind:class="{'bg-success text-light': order.status==='PENDING'}">Pending</div>
      <div class="col-md-3" v-bind:class="{'bg-success text-light': order.status==='PREP'}">Prep</div>
      <div class="col-md-3" v-bind:class="{'bg-success text-light': order.status==='BAKE'}">Bake</div>
      <div class="col-md-3" v-bind:class="{'bg-success text-light': order.status==='READY'}">Ready</div>
    </div>

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

</style>