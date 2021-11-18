<template>
<div class=" border border-dark">

  <div class="cartHeaders row">
    <div class="p-2 col-md-5">Name</div>
    <div class="p-2 col-md-5">Price</div>
    <div class="p-2 col-md-2"></div>
  </div>

  <cart-list-item class="pt-2 pb-2 pl-0 border-top border-dark" v-for="(item, i) in myCart"
                  v-on:passToCart="$emit('removeCartItem', $event)"
                  v-on:deletedItemPrice="$emit('deletedItemPrice')"
                  :item="item"
                  :key="i"
  ></cart-list-item>
  <div class="cartHeaders row border-top border-dark ">
    <div class="p-2 col-md-5">Total:</div>
    <div class="p-2 col-md-5">${{total}}</div>
    <div class="p-2 col-md-2"></div>
  </div>
  <button class="checkout btn btn-success">Checkout <span class="badge bg-secondary">{{myCart.length}}</span></button>
  <br>

</div>
</template>

<script>
// import Cart from "@/vue-models/Cart";
import CartListItem from "@/components/CartListItem";
export default {
name: "CartList",
  components: {CartListItem},
  props : {
      myCart : Array,
      total : Number,
  },
  // data() {
  //   return {
  //     total : this.myCart.forEach(p => p.price + this.total),
  //
  //   }
  // }

}
</script>

<style scoped>
.checkout {
  float: right;
  /*margin-right: 0;*/
  /*display: block;*/
  /*text-align: right;*/
}
.cartHeaders {
  font-weight: bold;
}
</style>