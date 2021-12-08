<template>
  <div class="row">
    <div class="col-lg-9">
      <div class="row">
        <div class="col-3 bg-warning"></div>
        <div class="col-6 bg-warning">
          <h2 class="sectionHeader p-1">Menu</h2>
        </div>
        <div class="col-3 bg-warning pt-2">
          <router-link to="/pizzas">
            <button class="checkout btn btn-success float-right" v-if="authUser != null">Build a Pizza  <i class="fas fa-tools"></i></button>
          </router-link>
        </div>
      </div>

      <div class="pr-3">
        <div class="row border border-dark p-2">
          <menu-item class="col-3 p-2" v-for="(item, i) in menu"
                     v-on:passToMenu="$emit('passToApp', $event)"
                     :item="item"
                     :authUser = authUser
                     :key="i"
          ></menu-item>
        </div>
      </div>

    </div>
    <div class="col-lg-3" v-if="authUser != null">
      <h2 class="sectionHeader bg-warning p-3">Your cart</h2>
      <cart-list class="cartComp" :my-cart="myCart"
                 v-on:removeCartItem="$emit('removeItem', $event)" :total="total">
      </cart-list>

    </div>
    <div class="pl-3"><br><br><br><br>

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
    authUser : {required: true}
  },
  methods : {

  },
  data() {
    return {
      //stores all menu items on the page with a name, selectable options, price and category
      menu: new Menu()
          .addItem(new MenuItems('Garlic Bread', ['N/A'], '', 3.25, 'Appetizer'))
          .addItem(new MenuItems('Cheese Garlic Bread', ['N/A'], '', 4.25, 'Appetizer'))
          .addItem(new MenuItems('Seasoned Potato Wedges', ['N/A'], 'Served with sour cream', 4.75, 'Appetizer'))
          .addItem(new MenuItems('Mozzarella Sticks', ['N/A'], '', 4.75, 'Appetizer'))
          .addItem(new MenuItems('Mozzarella Sticks (Family)', ['N/A'], '', 8.75, 'Appetizer'))
          .addItem(new MenuItems('Monster Mozzarella Sticks', ['N/A'], 'Wonton wrapped, served with marinara sauce', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Breaded Mushrooms', ['marinara', 'ranch'], 'N/A', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Broccoli Poppers', ['N/A'], 'Bacon, broccoli and cheddar cheese filled', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Bosco Sticks', ['N/A'], 'Cheese filled bread sticks, served with marinara sauce', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Breadsticks', ['N/A'], 'N/A', 4.75, 'Appetizer'))
          .addItem(new MenuItems('Zucchini Sticks', ['N/A'], 'Breaded zucchini sticks served with ranch dressing', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Chicken Strips', ['Ranch', 'BBQ Sauce'], 'Crispy chicken strips served with ranch dressing or BBQ sauce', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Jalepeno Poppers', ['N/A'], 'Cream cheese filled', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Drum Sticks', ['Buffalo Sauce', 'BBQ Sauce'], '', 5.95, 'Appetizer'))
          .addItem(new MenuItems('Garlic Bread', ['marinara', 'other'], 'Pizza ipsum dolor amet in pork platter garlic, sint buffalo sauce spinach non garlic sauce anim pizza roll. White pizza bacon & tomato bbq rib parmesan large Chicago style. Qui officia platter, chicken chicken wing aliqua red onions fugiat deserunt sausage bacon & tomato reprehenderit green bell peppers hawaiian.', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Garlic Bread', ['marinara', 'other'], 'Pizza ipsum dolor amet in pork platter garlic, sint buffalo sauce spinach non garlic sauce anim pizza roll. White pizza bacon & tomato bbq rib parmesan large Chicago style. Qui officia platter, chicken chicken wing aliqua red onions fugiat deserunt sausage bacon & tomato reprehenderit green bell peppers hawaiian.', 6.75, 'Appetizer'))
    }
  }
}
</script>

<style scoped>
.sectionHeader {
  text-align: center;
}
</style>