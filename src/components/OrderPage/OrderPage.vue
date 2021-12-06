<template>
  <div>
    test text
    <h2 class="pl-5" v-if="authUser === null">Oops! Nothing to See Here!</h2>
    <customer-order-list v-else-if="authUser.uid" :authUser="authUser"></customer-order-list>

  </div>
</template>

<script>
// import {db} from "@/vue-models";
import CustomerOrderList from "@/components/OrderPage/CustomerOrderList";
export default {
name: "OrderPage",
  components : {
  CustomerOrderList
  },
  props : {

    authUser : {required: true}
  },

  computed : {

  }
}
</script>

<style scoped>
.Statuses {
  text-align: center;
  font-size: 20pt;
  font-weight: bold;
  background-color: #ffc107;
}
</style>