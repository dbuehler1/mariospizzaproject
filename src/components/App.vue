<template>
  <div>
    <h1 class="bg-warning">Mario's Natural Roman Pizza & Pasta</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning">


          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item col-lg-2 p-2">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="nav-item col-lg-2 p-2">
              <router-link to="/menu">Menu</router-link>
            </li>
            <li class="nav-item col-mlg-2 p-2">
              <router-link to="/cart">Cart <span class="badge bg-light">{{myCart.length}}</span> </router-link>
            </li>
            <li class="nav-item col-lg-2 p-2">
              <router-link to="/order">Order</router-link>
            </li>
            <li class="nav-item col-lg-2 p-2">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>


    </nav><br>
<!--    //Pass once, rename to be the same-->
    <router-view v-on:passToApp="myCart.addItem($event),myTotal()"
                 v-on:addPizza="myCart.addItem($event), myTotal()"
                 v-on:removeItem="myCart.removeItem($event), myTotal()"
                 v-on:calcTotal="myTotal"
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
import Cart from "@/vue-models/Cart"

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
    }
  },
  data() {
    return {
      myCart : new Cart(),
      total : 0,
    }
  }
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
