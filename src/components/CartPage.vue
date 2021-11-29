<template>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <span v-if="cart.length <= 0">No Items in Cart</span>
      <div class="row bg-warning" v-if="cart.length > 0">
        <div class="col-3 border border-dark"><h4>Name</h4></div>
        <div class="col-3 border border-dark"><h4>Description</h4></div>
        <div class="col-3 border border-dark"><h4>Option</h4></div>
        <div class="col-2 border border-dark"><h4>Price</h4></div>
        <div class="col-1"></div>
      </div>
      <cart-page-item v-for="(item, i) in cart"
                      :item="item"
                      :key="i">
      </cart-page-item>
    </div>
    <div class="col-md-3"></div>



  </div>
</template>

<script>
import CartPageItem from "@/components/CartPageItem";
export default {
  name: "CartPage",
  props : {
    cart : Array,
  },
  components : {
    CartPageItem
  }
}
</script>

<style scoped>

</style>