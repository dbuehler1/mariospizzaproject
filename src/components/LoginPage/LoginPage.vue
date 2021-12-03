<template>
<div>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <h3>Sign In</h3><br>
      <div class="form-group">
        <label for="Username">Username</label>
        <input id="Username" v-model="Username" type="text" class="form-control"><br>
        <label for="Password">Password</label>
        <input id="Password" v-model="Password" type="text" class="form-control"><br><br>
        <router-link to="/createAccount">
          <button class="btn btn-secondary float-right">Create Account</button>
        </router-link>

        <router-link to="/home">
          <button class="btn btn-success float-right" @click="$emit('signIn', {customer, Username, Password})">Sign In</button>
        </router-link>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>

</div>
</template>

<script>
// import {query, where } from "firebase/firestore";
// import {db} from "@/vue-models";

export default {
name: "LoginPage",
  data() {
    return {
      Username : '',
      Password : '',
      customer : {},
    }
  },
  methods : {

  },
  // firestore : {
  //   customer: query(db.collection("customers"), where("username", "==", this.Username)),
  // },
}
</script>

<style scoped>
.LogIn {
  align-content: center;
  text-align: center;
}
</style>