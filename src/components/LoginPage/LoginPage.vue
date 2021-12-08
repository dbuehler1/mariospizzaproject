<template>
<div>
  <!--Page to Login to an account or redirect to create an account-->
  <span class="signedInStatus text-success pl-5" v-if="authUser!=null">You are Currently Signed In</span>
  <div class="row" v-if="authUser === null">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <h3>Sign In</h3><br>
      <div class="form-group">
        <!--Accepts an email-->
        <label for="Username">Email</label>
        <input id="Username" v-model="Email" type="email" class="form-control"><br>
        <!--Accepts a password-->
        <label for="Password">Password</label>
        <input id="Password" type="password" v-model="Password" class="form-control"><br>
        <br>
          <button class="btn btn-success float-right" @click="$emit('signInEmail' , Email); login()">Sign In</button>
        <!--Redirect to create an account-->
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
    //signs in user based on login credentials collected
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