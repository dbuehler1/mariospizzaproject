import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './components/App.vue'
import Home from './components/Home'
import Menu from "@/components/Menu";
import CartPage from "@/components/CartPage";
import PizzaCreatorPage from "@/components/PizzaCreatorPage";
import OrderPage from "@/components/OrderPage";
import BackEndOrderPage from "@/components/BackEndOrderPage";
import ContactPage from "@/components/ContactPage";

const routes = [
  // {path: '/', component: App},
  {path: '/home', component: Home, props: true},
  {path: '/menu', component: Menu, props: true},
  {path: '/cart', component: CartPage, props: true},
  {path: '/pizzas', component: PizzaCreatorPage, props: true},
  {path: '/order', component: OrderPage, props: true},
  {path: '/backEndOrder', component: BackEndOrderPage, props: true},
  {path: '/contact', component: ContactPage}

]
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el:'#app',
  router,
})
