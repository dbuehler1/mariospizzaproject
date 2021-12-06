<template>
<div>
  <span class="signedInStatus text-success pl-5" v-if="authUser!=null">You are Currently Signed In</span>
  <div class="row" v-if="authUser === null">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <h3>Sign In</h3><br>
      <div class="form-group">
        <label for="Username">Email</label>
        <input id="Username" v-model="Email" type="text" class="form-control"><br>
        <label for="Password">Password</label>
        <input id="Password" type="password" v-model="Password" class="form-control"><br>

        <br>

          <button class="btn btn-success float-right" @click="login">Sign In</button>

        <router-link to="/createAccount">
          <button class="btn btn-secondary float-right">Create Account</button>
        </router-link>


      </div>
    </div>
    <div class="col-md-4"></div>
  </div>

</div>
</template>

<script>
import firebase from 'firebase'
// import {query, where } from "firebase/firestore";
// import {db} from "@/vue-models";

export default {
name: "LoginPage",
  data() {
    return {
      Email : '',
      Password : '',
      customer : {},
    }
  },
  props : {
    authUser : {required: true}
  },
  methods : {

    login() {
      firebase.auth()
      .signInWithEmailAndPassword(this.Email, this.Password)
      .catch(function(error) {
        // let errorCode = error.code;
        // let errorMessage = error.message;
        alert('Invalid Username or Password');
        console.log(error);
      });
      console.log('signed in as: ', this.Email);
    },

  },

  // firestore : {
  //   customer: query(db.collection("customers"), where("username", "==", "this.Username")),
  // },
}
</script>

<style scoped>
.LogIn {
  align-content: center;
  text-align: center;
}
.signedInStatus {
  text-align: center;
}
</style>