<template>
<div class=" border border-dark">

  <div class="pl-4 cartHeaders row">
    <div class="p-2 col-md-5">Name</div>
    <div class="p-2 col-md-5">Price</div>
    <div class="p-2 col-md-2"></div>
  </div>
  <div class="myCart">
    <!--Displays a mini cart with limited information to update the user about the cost of their order-->
    <cart-list-item class="pt-2 pb-2 pl-0 border-top border-dark" v-for="(item, i) in myCart"
                    v-on:passToCart="$emit('removeCartItem', $event)"
                    v-on:deletedItemPrice="$emit('deletedItemPrice')"
                    :item="item"
                    :key="i"
    ></cart-list-item>
  </div>

  <div class="pl-4 cartHeaders row  ">
    <div class="p-2 col-md-5 border-top border-dark">Total:</div>
    <div class="p-2 col-md-5 border-top border-dark">${{this.total.toFixed(2)}}</div>
    <div class="p-2 col-md-2 border-top border-dark"></div>
  </div>
  <!--Redirects user to the cart page-->
  <div class="pr-3">
    <router-link to="/cart">
      <button class="checkout btn btn-success">Checkout <span class="badge bg-secondary">{{myCart.length}}</span></button>
    </router-link>
    <br><br><br>
  </div>


</div>
</template>

<script>
// import Cart from "@/vue-models/Cart";
import CartListItem from "@/components/MenuPage/CartListItem";
export default {
name: "CartList",
  components: {CartListItem},
  props : {
      myCart : Array,
      total : Number,
  },

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
.myCart {
  height: 20rem;
  overflow: auto;
}
</style>