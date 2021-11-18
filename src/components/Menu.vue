<template>
  <div class="row">
    <div class="col-lg-9">
      <h2 class="sectionHeader bg-warning p-3">Menu</h2>
      <div class="pr-3">
        <div class="row border border-dark p-2">


          <menu-item class="col-2 p-2" v-for="(item, i) in menu"
                     v-on:passToMenu="$emit('passToApp', $event)"
                     v-on:updateTotal="myTotal"
                     :item="item"
                     :key="i"
          ></menu-item>


        </div>
      </div>

    </div>
    <div class="col-lg-3">
      <h2 class="sectionHeader bg-warning p-3">Your cart</h2>
      <cart-list class="cartComp" :my-cart="myCart"
                 v-on:removeCartItem="myCart.removeItem($event)" :total="total"
                  v-on:deletedItemPrice="myTotal">
      </cart-list>
    </div>
  </div>

</template>

<script>
import Menu from "@/vue-models/Menu";
import MenuItem from "@/components/MenuItem";
import {MenuItems} from "@/vue-models/MenuItems.js";
import CartList from "@/components/CartList";

export default {
name: "Menu",
  components:
      {MenuItem, CartList},

  props : {
    myCart : Array,
  },
  methods : {
    myTotal() {
      this.total = 0;
      this.myCart.forEach((item) => {
        console.log(item);
          this.total += item.price;
      } )
      // console.log(this.total);
    }

  },
  data() {
    return {
      menu: new Menu()
          .addItem(new MenuItems('Garlic Bread', 'N/A', 'N/A', 3.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25))
          .addItem(new MenuItems('test', 'N/A', 'N/A', 5.25)),


      total : 0,
          // .addItem(new MenuItems('Garlic Bread', 'N/A', 'N/A', 3.25))
    }
  }
}
</script>

<style scoped>
.sectionHeader {

  text-align: center;
}
</style>