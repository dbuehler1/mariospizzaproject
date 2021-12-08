<template>
  <div class="row">
    <div class="col-lg-9">
      <div class="row">
        <div class="col-3 bg-warning">
          <div class="form-group float-left pl-4 pt-2">

            <select id="category" type="text" class="form-control" v-model="category">
              <option value="All" selected>All</option>
              <option>Appetizer</option>
              <option>Salads</option>
              <option>Sandwiches</option>
              <option>Friday Fish Fry</option>
              <option>Pasta</option>
              <option>Dinners</option>
              <option>Beverages</option>
            </select>
          </div>
        </div>
        <div class="col-6 bg-warning">
          <h2 class="sectionHeader p-1" v-if="category === ''">Select a Category</h2>
          <h2 class="sectionHeader p-1" v-if="category !== ''">{{ category }}</h2>
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
                     :selected-category="category"
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
      category : 'All',
      //stores all menu items on the page with a name, selectable options, price and category
      menu: new Menu()
          //Appetizers
          .addItem(new MenuItems('Garlic Bread', ['N/A'], 'N/A', 3.25, 'Appetizer'))
          .addItem(new MenuItems('Cheese Garlic Bread', ['N/A'], 'N/A', 4.25, 'Appetizer'))
          .addItem(new MenuItems('Seasoned Potato Wedges', ['N/A'], 'Served with sour cream', 4.75, 'Appetizer'))
          .addItem(new MenuItems('Mozzarella Sticks', ['N/A'], 'N/A', 4.75, 'Appetizer'))
          .addItem(new MenuItems('Mozzarella Sticks (Family)', ['N/A'], 'N/A', 8.75, 'Appetizer'))
          .addItem(new MenuItems('Monster Mozzarella Sticks', ['N/A'], 'Wonton wrapped, served with marinara sauce', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Breaded Mushrooms', ['marinara', 'ranch'], 'N/A', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Broccoli Poppers', ['N/A'], 'Bacon, broccoli and cheddar cheese filled', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Bosco Sticks', ['N/A'], 'Cheese filled bread sticks, served with marinara sauce', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Breadsticks', ['N/A'], 'N/A', 4.75, 'Appetizer'))
          .addItem(new MenuItems('Zucchini Sticks', ['N/A'], 'Breaded zucchini sticks served with ranch dressing', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Chicken Strips', ['Ranch', 'BBQ Sauce'], 'Crispy chicken strips served with ranch dressing or BBQ sauce', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Jalepeno Poppers', ['N/A'], 'Cream cheese filled', 6.75, 'Appetizer'))
          .addItem(new MenuItems('Drum Sticks', ['Buffalo Sauce', 'BBQ Sauce'], 'N/A', 5.95, 'Appetizer'))
          //Salads
          .addItem(new MenuItems('Antipasto Salad', ['ranch', 'vinaigrette'], 'A bountiful serving of romaine lettuce with salami, ham, provolone cheese, tomatoes, black olives, red onions, artichoke hearts and pepper rings. Served with our house dressing or your choice of dressings. Anchovies available upon request.', 8.95, 'Salads'))
          .addItem(new MenuItems('Caesar Salad', ['Crispy Chicken', 'Grilled Chicken'], 'Romaine lettuce tossed in Caesar dressing topped with mozzarella and Parmesan cheeses and croutons Add Crispy or Grilled Chicken for an additional $3.00', 7.95, 'Salads'))
          .addItem(new MenuItems('Marios Italian Salad', ['ranch', 'vinaigrette'], 'A bed of romaine lettuce topped with pepperoni, black olives and mozzarella cheese. Available with your choice of dressing.', 6.95, 'Salads'))
          .addItem(new MenuItems('Dinner Salad', ['N/A'], 'Cucumber, red onion and tomatoes over a bed of lettuce', 3.95, 'Salads'))
          //Sandwiches
          .addItem(new MenuItems('Italian Sausage', ['N/A'], 'Sausage link covered in marinara sauce with sautéed green peppers and onions and topped with mozzarella cheese on a French roll.', 8.95, 'Sandwiches'))
          .addItem(new MenuItems('Meatball Sandwich', ['N/A'], 'Italian meatballs topped with marinara sauce and mozzarella cheese on a French roll.', 8.95, 'Sandwiches'))
          .addItem(new MenuItems('Italian Beef', ['N/A'], 'Italian beef topped with mozzarella cheese on a French roll. Served with Au Jus on the side.', 8.95, 'Sandwiches'))
          .addItem(new MenuItems('Grilled Chicken Bacon Ranch', ['N/A'], 'Grilled chicken strips, provolone, bacon, lettuce, tomato, and red onion, topped with ranch dressing', 8.95, 'Sandwiches'))
          .addItem(new MenuItems('Italian Hoagie', ['N/A'], 'Italian sausage patty covered with marinara and mozzarella cheese on a French roll.', 8.95, 'Sandwiches'))
          .addItem(new MenuItems('Chicken Sandwich', ['Grilled Chicken', 'Crispy Chicken'], 'Your choice of grilled chicken strips or crispy chicken topped with provolone, lettuce, tomato, and mayo', 8.95, 'Sandwiches'))
          //Pasta
          .addItem(new MenuItems('Mama Mario\'s Spaghetti', ['N/A'], 'A generous potion of pasta topped with a homemade marinara sauce. Served with meatballs or Italian sausage.', 8.95, 'Pasta'))
          .addItem(new MenuItems('Ravioli', ['N/A'], 'Pillows of ravioli stuffed with your choice of cheese or meat, smothered with marinara sauce and topped with cheese. Baked to perfection.', 9.95, 'Pasta'))
          .addItem(new MenuItems('Ravioli Alfredo', ['N/A'], 'Pillows of ravioli stuffed with your choice of cheese or meat, smothered in our homemade Alfredo sauce', 12.95, 'Pasta'))
          .addItem(new MenuItems('Baked Mostaccioli', ['N/A'], 'Pasta tossed in marinara sauce, topped with mozzarella and baked to perfection.', 8.95, 'Pasta'))
          .addItem(new MenuItems('Baked Lasagna', ['N/A'], 'Lasagna noodles layered with our special blend of sauce, Italian sausage and mozzarella', 13.95, 'Pasta'))
          .addItem(new MenuItems('Fettuccini Alfredo', ['N/A'], 'Your choice of Italian sausage or chicken served on a bed of fettuccini, tossed with green peppers, onions and mushrooms. Smothered in our special Alfredo sauce.', 13.95, 'Pasta'))
          .addItem(new MenuItems('Plain Fettuccini with Alfredo Sauce', ['N/A'], 'N/A', 9.95, 'Pasta'))
          .addItem(new MenuItems('Pasta with Potatoes', ['N/A'], 'Sautéed potatoes, sausage, bacon, onion, green pepper and mushrooms tossed with spaghetti.', 13.95, 'Pasta'))
          .addItem(new MenuItems('Penne al Pesto', ['N/A'], 'Penne pasta with chicken tossed in a creamy pesto sauce', 12.95, 'Pasta'))
          //Friday Fish Fry
          .addItem(new MenuItems('Friday Fish Fry', ['N/A'], 'Breaded Icelandic Cod served with seasoned potato wedges or potato pancakes, fritters, cole slaw, tarter sauce and apple sauce. (Baked Cod is also available.) Simply the Best!', 10.95, 'Friday Fish Fry'))

          .addItem(new MenuItems('Italian Sampler', ['N/A'], 'Cheese and meat ravioli, meatballs and Italian sausage topped with marinara and mozzarella', 12.95, 'Dinners'))
          .addItem(new MenuItems('Mario\'s Feast', ['N/A'], 'Chicken parmesan, lasagna and a side of fettuccine alfredo', 14.95, 'Dinners'))
          .addItem(new MenuItems('Stuffed Shrimp ', ['N/A'], 'Lightly breaded crab and herb stuffed shrimp served over a bed of fettuccine alfredo', 12.95, 'Dinners'))
          .addItem(new MenuItems('Shrimp Dinner', ['N/A'], 'A pound of our jumbo fantail shrimp, served with cocktail sauce and French fries', 14.95, 'Dinners'))
          .addItem(new MenuItems('Chicken Parmesan', ['N/A'], 'Lightly breaded chicken breast topped with marinara and mozzarella. Served with mostaccioli.', 12.95, 'Dinners'))
          .addItem(new MenuItems('Chicken Luigi', ['N/A'], 'Chicken breast sautéed in lemon butter and white wine sauce, topped with mushrooms, served with a side of fettuccini alfredo', 12.95, 'Dinners'))

          .addItem(new MenuItems('Single Can', ['Pepsi', 'Dr. Pepper', 'Mtn Dew'], '', 1.00, 'Beverages'))
          .addItem(new MenuItems('Six Pack', ['Pepsi', 'Dr. Pepper', 'Mtn Dew'], '', 4.50, 'Beverages'))
    }

  }
}
</script>

<style scoped>
.sectionHeader {
  text-align: center;
}
</style>