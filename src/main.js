import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './components/SharedPage/App.vue'
import Home from './components/HomePage/Home'
import Menu from "@/components/MenuPage/Menu";
import CartPage from "@/components/CartPage/CartPage";
import PizzaCreatorPage from "@/components/PizzaCreatorPage/PizzaCreatorPage";
import OrderPage from "@/components/OrderPage/OrderPage";
import BackEndOrderPage from "@/components/BackEndOrder/BackEndOrderPage";
import ContactPage from "@/components/ContactPage/ContactPage";
import LoginPage from "@/components/LoginPage/LoginPage";
import {firestorePlugin} from 'vuefire'
import CreateAccount from "@/components/LoginPage/CreateAccount";
// import firebase from 'firebase/app'
// import 'firebase/firestore'

const routes = [
  // {path: '/', component: App},
  {path: '/home', component: Home, props: true},
  {path: '/menu', component: Menu, props: true},
  {path: '/cart', component: CartPage, props: true},
  {path: '/pizzas', component: PizzaCreatorPage, props: true},
  {path: '/order', component: OrderPage, props: true},
  {path: '/backEndOrder', component: BackEndOrderPage, props: true},
  {path: '/contact', component: ContactPage},
  {path: '/login', component: LoginPage},
  {path: '/createAccount', component: CreateAccount}

]
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
})
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el:'#app',
  router,
})

