<template>
  <div>
    <h2 class="pl-5" v-if="authUser === null">Oops! Nothing to See Here!</h2>
  <div class="row" v-if="authUser != null">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <span v-if="myCart.length <= 0">No Items in Cart</span>
      <div class="row bg-warning" v-if="myCart.length > 0">
        <div class="col-3 border border-dark"><h4>Name</h4></div>
        <div class="col-3 border border-dark"><h4>Description</h4></div>
        <div class="col-3 border border-dark"><h4>Option</h4></div>
        <div class="col-2 border border-dark"><h4>Price</h4></div>
        <div class="col-1"></div>
      </div>
      <cart-page-item v-for="(item, i) in myCart"
                      v-on:removeItem="$emit('removeItem', $event)"
                      :item="item"
                      :key="i">
      </cart-page-item>
      <div class="float-right pr-10 text-right" >

      </div>
    </div>
    <div class="col-md-3"></div>



  </div>
    <div class="row" v-if="myCart.length > 0">
      <div class="col-3">

      </div>
      <div class="col-6"><br>
        <div class="totals float-right">
          This order is for:
          <div class="form-group">
            <input type="text" v-model="CustomerName" class="form-control">
          </div>
          Subtotal: ${{this.total.toFixed(2)}} <br>
          Tax: ${{(this.total * .05).toFixed(2)}}<br>
          Total: ${{(this.total + this.total * .05).toFixed(2)}}<br>
        </div><br><br><br><br><br><br><br><br>
        <router-link to="/order">
          <button class="btn btn-success float-right" v-if="myCart.length >= 1" @click="$emit('addOrder', CustomerName)">Submit Order</button>
        </router-link>


      </div>
      <div class="col-3"></div>
    </div>

  </div>
</template>

<script>
import CartPageItem from "@/components/CartPage/CartPageItem";
export default {
  name: "CartPage",
  props : {
    myCart : Array,
    total : Number,
    authUser: {required: true},
  },
  components : {
    CartPageItem
  },
  data() {
    return {
      CustomerName : '',
    }
  }
}
</script>

<style scoped>
.totals {
  text-align: right;
}
</style>