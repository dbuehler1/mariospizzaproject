<template>
  <div class="row">
    <div class="col-lg-9">
      <h2 class="sectionHeader bg-warning p-3">Menu</h2>
      <div class="pr-3">
        <div class="row border border-dark p-2">


          <menu-item class="col-3 p-2" v-for="(item, i) in menu"
                     v-on:passToMenu="$emit('passToApp', $event)"
                     :item="item"
                     :key="i"
          ></menu-item>


        </div>
      </div>

    </div>
    <div class="col-lg-3">
      <h2 class="sectionHeader bg-warning p-3">Your cart</h2>
      <cart-list class="cartComp" :my-cart="myCart"
                 v-on:removeCartItem="$emit('removeItem', $event)" :total="total">
      </cart-list>

    </div>
    <div class="pl-3">
      <router-link to="/pizzas">
        <button class=" checkout btn btn-success">Build a Pizza  <i class="fas fa-tools"></i></button>
      </router-link>
    </div>

  </div>

</template>

<script>
import Menu from "@/vue-models/Menu";
import MenuItem from "@/components/MenuPage/MenuItem";
import {MenuItems} from "@/vue-models/MenuItems.js";
import CartList from "@/components/MenuPage/CartList";

export default {
name: "Menu",
  components:
      {MenuItem, CartList},

  props : {
    myCart : Array,
    total: Number,
  },
  methods : {

  },
  data() {
    return {
      menu: new Menu()
          .addItem(new MenuItems('Garlic Bread', ['marinara', 'other'], 'Pizza ipsum dolor amet in pork platter garlic, sint buffalo sauce spinach non garlic sauce anim pizza roll. White pizza bacon & tomato bbq rib parmesan large Chicago style. Qui officia platter, chicken chicken wing aliqua red onions fugiat deserunt sausage bacon & tomato reprehenderit green bell peppers hawaiian.', 3.25))
          .addItem(new MenuItems('test one', ['t1 option', 't1 option2'], 'Pizza ipsum dolor amet in pork platter garlic, sint buffalo sauce spinach non garlic sauce anim pizza roll. White pizza bacon & tomato bbq rib parmesan large Chicago style. Qui officia platter, chicken chicken wing aliqua red onions fugiat deserunt sausage bacon & tomato reprehenderit green bell peppers hawaiian.', 8.95))
          .addItem(new MenuItems('test two', ['N/A'], 'Pizza ipsum dolor amet in pork platter garlic, sint buffalo sauce spinach non garlic sauce anim pizza roll. White pizza bacon & tomato bbq rib parmesan large Chicago style. Qui officia platter, chicken chicken wing aliqua red onions fugiat deserunt sausage bacon & tomato reprehenderit green bell peppers hawaiian.', 4.25)),
          // .addItem(new MenuItems('test three', 'N/A', 'N/A', 5.75))
          // .addItem(new MenuItems('test four', 'N/A', 'N/A', 2.55))
          // .addItem(new MenuItems('test five', 'N/A', 'N/A', 1.25))
          // .addItem(new MenuItems('test six', 'N/A', 'N/A', 9.45))
          // .addItem(new MenuItems('test seven', 'N/A', 'N/A', 4.25))
          // .addItem(new MenuItems('test eight', 'N/A', 'N/A', 5.15))
          // .addItem(new MenuItems('test nine', 'N/A', 'N/A', 6.30))
          // .addItem(new MenuItems('test ten', 'N/A', 'N/A', 9.25))
          // .addItem(new MenuItems('test eleven', 'N/A', 'N/A', 15.25)),



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