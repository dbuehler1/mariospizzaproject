<template>
<div>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <h3>Create Account</h3><br>
      <div class="form-group">
        <label for="Username">Email</label>
        <input id="Username" v-model="Email" type="text" class="form-control"><br>
        <label for="Password">Password</label>
        <input id="Password" v-model="Password" type="password" class="form-control"><br>
        <label for="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" v-model="ConfirmPassword" type="password" class="form-control"><br><br>
        <router-link to="/login">
          <button class="btn btn-success float-right" @click="createAccount">Create Account</button>
        </router-link>

      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</div>
</template>

<script>
// import {db} from "@/vue-models";
// import Customer from "@/vue-models/Customer";
import firebase from 'firebase'

export default {
name: "CreateAccount",
  data(){
    return{
      Email : '',
      Password : '',
      ConfirmPassword : '',
      customer : {},
    }
  },
  methods : {
    createAccount() {
      if(this.ConfirmPassword === this.Password){
        firebase.auth()
            .createUserWithEmailAndPassword(this.Email, this.Password)
            .catch(function() {
              // let errorCode = error.code;
              // let errorMessage = error.message;
            })
        console.log('signed in as', this.Email);
        firebase.auth()
            .signInWithEmailAndPassword(this.Email, this.Password)
            .catch(function(error) {
              // let errorCode = error.code;
              // let errorMessage = error.message;
              console.log(error);
            });
      }
      else {
        alert('Passwords Do Not Match!');
        console.log('Passwords Do Not Match');

      }

    },
  }
}
</script>

<style scoped>

</style>