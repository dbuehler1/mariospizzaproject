<template>
  <div>
    <h1 class="bg-warning">Mario's Natural Roman Pizza & Pasta</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning">


          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item p-2">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="nav-item  p-2">
              <router-link to="/menu">Menu</router-link>
            </li>
            <li class="nav-item  p-2" v-if="signedIn === true">
              <router-link to="/cart">Cart <span class="badge bg-light">{{myCart.length}}</span> </router-link>
            </li>
            <li class="nav-item  p-2" v-if="signedIn === true">
              <router-link to="/order">Order</router-link>
            </li>
            <li class="nav-item  p-2">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
<!--      <button class="btn btn-success" @click="addOrder">Submit Order</button>-->
      <router-link to="/login" v-if="signedIn===false">
        <button class="btn btn-success float-right">Sign In</button>
      </router-link>
      <router-link to="/login" v-if="signedIn===true">
        <button class="btn btn-danger float-right" @click="signedIn = false">Sign Out</button>
      </router-link>
    </nav><br>
<!--    //Pass once, rename to be the same-->
    <router-view v-on:passToApp="myCart.addItem($event),myTotal()"
                 v-on:addPizza="myCart.addItem($event), myTotal()"
                 v-on:removeItem="myCart.removeItem($event), myTotal()"
                 v-on:calcTotal="myTotal"
                 v-on:addOrder="addOrder($event)"
                 v-on:createAccount="signedIn = true"
                 :orders="orders"
                 :currentOrder="orders[0]"
                 :my-cart="myCart"
                 :total = total

    ></router-view>
<!--    <Home></Home>-->
<!--    <Menu ></Menu>-->



  </div>
</template>

<script>


// import Home from "@/components/Home";
// import Menu from "@/components/Menu";
import {db} from "@/vue-models";

import Cart from "@/vue-models/Cart"
import Order from "@/vue-models/Order";


export default {
  name: 'App',
  components: {

    // Menu,
    // Home

  },
  methods : {
    myTotal() {
      this.total = 0;
      this.myCart.forEach((item) => {
        this.total += item.price;

        console.log('price', item.price);
        console.log('total', this.total);
      } )
    },
    addOrder(name){
      this.order = new Order(name + '');
      this.order.addItems(this.myCart);
      // this.orders.push(this.order);
      this.myCart.splice(0);
      // this.testOrder.setPrep();
      db.collection(Order.collectionName)
      .add(this.order.toFirestore())
      .then(docRef => {
        console.log('order Added', docRef)
      })
    },
    // signIn(customerDetails){
    //   if(customerDetails.customer.username === customerDetails.username && customerDetails.customer.password === customerDetails.password){
    //       this.signedIn = true;
    //   }
    // },
  },
  data() {
    return {
      myCart : new Cart(),
      // testOrder : new Order(this.myCart),
      total : 0,
      orders : [],
      order : new Order(''),
      signedIn : false,
    }
  },

}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

h1 {
  text-align: center;
}
.cartComp {
  padding: 2rem;
}

</style>
