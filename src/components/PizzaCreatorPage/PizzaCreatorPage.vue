<template>
<div>
  <h3 class="centerHeader mx-auto">Currently selected: {{this.selectedSize}}</h3>
    <div class="row">
      <div class="col-md-1"></div>
      <pizza-size class="col-3 p-2" v-for="(size, s) in sizes"
                 v-on:sizeSelect="selectedSize=$event, test"
                  :current-size="selectedSize"
                 :pizza-size="size"
                 :key="s"
      ></pizza-size>
      <div class="col-md-1"></div>

    </div><br>
  <div class="row">
    <div class="col-9 border border-dark">
      <h3 class="centerHeader">Available Toppings</h3>
      <div class="row">
        <pizza-toppings class="col-3 p-2" v-for="(topping, t) in availableToppings"
                        v-on:addATopping="addTopping($event)"
                        :topping="topping"
                        :key="t"
        ></pizza-toppings>
      </div>

    </div>

    <div class=" col-3 border border-dark">
      <h3 class="centerHeader">My Toppings</h3>
      <div class="toppingCart">
        <topping-cart v-for="(topping, t) in selectedToppings"
                      v-on:removeTopping="removeTopping($event)"
                      :topping="topping"
                      :key="t"
        ></topping-cart>
      </div>

    </div>
  </div>
<div class="row">
  <div class="col-9 pt-4">
    <div class="float-right">
      <router-link to="/cart">
        <button @click="confirmPizza(), $emit('addPizza', pizza)" class="checkout ml-auto mr-auto btn btn-success">Confirm & Add</button>
      </router-link>
    </div>
  </div>
  <div class="col-3"></div>
</div>

</div>
</template>

<script>
import PizzaSize from "@/components/PizzaCreatorPage/PizzaSize";
import PizzaToppings from "@/components/PizzaCreatorPage/PIzzaToppings";
import ToppingCart from "@/components/PizzaCreatorPage/ToppingCart";
import {MenuItems} from "@/vue-models/MenuItems";
export default {
name: "PizzaCreatorPage",
  components: {ToppingCart, PizzaToppings, PizzaSize},
  methods : {
    //add topping to pizza
    addTopping(newTopping){
        this.selectedToppings.push(newTopping);
        console.log(this.selectedToppings);
    },
    //removes topping from pizza
    removeTopping(topping) {
        this.selectedToppings.splice(topping, 1);
    },
    //brings together all toppings into a string to store in the menuItem
    confirmPizza(){
        this.pizza.description = this.selectedToppings.join('/')
        this.pizza.selectedOption = this.selectedSize;
    }
  },
  data() {
    return {
      //creates a pizza template
      pizza : new MenuItems('Pizza','','',15.25),
      //stores all available sizes
      sizes : ['Small', 'Medium', 'Large', 'Extra Large', 'Monster'],
      //stores the size of pizza that the user selected
      selectedSize : 'Small',
      //stores the selected toppings from the user
      selectedToppings : [],
      //lists all available toppings for pizzas
      availableToppings : ['Sausage', 'Pepperoni', 'Canadian Bacon', 'Chicken', 'Ham', 'Bacon',
                          'Basil', 'Spinach', 'Mushrooms(Fresh)', 'Mushrooms(Canned)', 'Black Olives',
                          'Green Pepper', 'Onion', 'Broccoli', 'Tomatoes', 'Pineapple', 'Artichoke',
                          'Banana Peppers', 'Garlic', 'Anchovies']

    }
  }
}
</script>

<style scoped>
.toppingCart {
  height: 15rem;
  overflow: auto;
}
.centerHeader {
  text-align: center;
  background-color: #ffc107;
}
</style>