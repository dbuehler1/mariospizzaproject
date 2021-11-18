<template>
  <div>
    <h1 class="bg-warning">Mario's Natural Roman Pizza & Pasta</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning">


          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item col-lg-2">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item col-lg-2">
              <a class="nav-link disabled">Menu</a>
            </li>
            <li class="nav-item col-mlg-2">
              <a class="nav-link disabled">Cart <span class="badge bg-secondary">{{myCart.length}}</span> </a>
            </li>
            <li class="nav-item col-lg-2">
              <a class="nav-link disabled">Order</a>
            </li>
            <li class="nav-item col-lg-2">
              <a class="nav-link disabled">Contact</a>
            </li>
          </ul>


    </nav>
    <Home></Home>
    <Menu v-on:passToApp="myCart.addItem($event)" :my-cart="myCart"></Menu>



  </div>
</template>

<script>


import Home from "@/components/Home";
import Menu from "@/components/Menu";
import Cart from "@/vue-models/Cart"

export default {
  name: 'App',
  components: {

    Menu,
    Home

  },
  methods : {

  },
  data() {
    return {
      myCart : new Cart()
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
