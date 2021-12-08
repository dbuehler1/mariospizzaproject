<template>
  <div>
    <h1 class="bg-warning">Mario's Natural Roman Pizza & Pasta</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
      <!--Navigation-->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item p-2">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="nav-item  p-2">
              <router-link to="/menu">Menu</router-link>
            </li>
            <li class="nav-item  p-2" v-if="authUser != null">
              <router-link to="/cart">Cart <span class="badge bg-light">{{myCart.length}}</span> </router-link>
            </li>
            <li class="nav-item  p-2" v-if="authUser != null">
              <router-link to="/order">Order</router-link>
            </li>
            <li class="nav-item  p-2">
              <router-link to="/contact">Contact</router-link>
            </li>
            <li class="nav-item  p-2" v-if="authUser != null">
              <router-link to="/backEndOrder">Order Manager</router-link>
            </li>
          </ul>
      <router-link to="/login" v-if="authUser === null">
        <button class="btn btn-success float-right">Sign In</button>
      </router-link>
      <router-link to="/login" v-if="authUser != null">
        <button class="btn btn-danger float-right" @click="logOut">Sign Out</button>
      </router-link>
    </nav><br>
    <router-view v-on:passToApp="myCart.addItem($event),myTotal()"
                 v-on:addPizza="myCart.addItem($event), myTotal()"
                 v-on:removeItem="myCart.removeItem($event), myTotal()"
                 v-on:calcTotal="myTotal"
                 v-on:addOrder="addOrder($event)"


                 :authUser="this.authUser"
                 :my-cart="myCart"
                 :total = total

    ></router-view>
  </div>
</template>
<script>

import {db} from "@/vue-models";

import Cart from "@/vue-models/Cart"
import Order from "@/vue-models/Order";
import firebase from 'firebase'

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
    //Add an order and store name and email of signed in user with the order
    addOrder(name){
      this.order = new Order((name + ''), this.authUser.email);
      this.order.addItems(this.myCart);
      this.myCart.splice(0);
      //push order with email to the collection 'orders' in firebase
      db.collection(Order.collectionName)
      .add(this.order.toFirestore())
      .then(docRef => {
        console.log('order Added', docRef)
      })
    },
    //Log out user
    logOut() {
      firebase.auth().signOut();
    }
  },
  data() {
    return {
      //myCart stores cart on page
      myCart : new Cart(),
      //authUser stores the logged in user
      authUser: null,
      //total stores cart total
      total : 0,
      //order stores a new blank order
      order : new Order(''),
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        //assigns logged in user
        console.log('signed in as ' , user);
        this.authUser = user;
      }
      else {
       console.log('not signed in');
       this.authUser = null;
      }
    })
  }
}
</script>
<style>
h1 {
  text-align: center;
}
</style>
