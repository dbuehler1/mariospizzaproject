<template>
<div>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <h3>Create Account</h3><br>
      <div class="form-group">
        <label for="Username">Username</label>
        <input id="Username" v-model="Username" type="text" class="form-control"><br>
        <label for="Password">Password</label>
        <input id="Password" v-model="Password" type="text" class="form-control"><br><br>
        <router-link to="/menu">
          <button class="btn btn-success float-right" @click="createAccount, $emit('createAccount', customer)">Create Account</button>
        </router-link>

      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</div>
</template>

<script>
import {db} from "@/vue-models";
import Customer from "@/vue-models/Customer";

export default {
name: "CreateAccount",
  data(){
    return{
      Username : '',
      Password : '',
      customer : {},
    }
  },
  methods : {
    createAccount() {
      this.customer = new Customer(this.Username, this.Password)
      db.collection(Customer.collectionName)
          .add(this.customer.toFirestore())
          .then(docRef => {
            console.log('Customer Added', docRef)
          })
    }
  }
}
</script>

<style scoped>

</style>