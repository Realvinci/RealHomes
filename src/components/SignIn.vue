<template>
  <div class="login">
      <form @submit.prevent="login">
        <h1>Login Form</h1>
        <input type="email" placeholder="Enter email" v-model="email">
        <input type="Password" placeholder="Enter Password" v-model="password">
        <button @click="login" type="submit">Submit</button>
        <button @click="goToUpload">Upload</button>
      </form>
  </div>
</template>

<script>
import {app as app} from '../../firebase' 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
export default {
 name:'login',
 data(){
    return{
       email:'',
       password:'',
       userid:'',
       token:''
    }
 },
 methods:{
    login(){
       
         signInWithEmailAndPassword(auth,this.email,this.password).then((userCredential)=>{
         const user = userCredential        
         console.log(user);
         this.token = user._tokenResponse.idToken
        
        this.saveToken();
        this.goToUpload();
        }).catch((error)=>{
         const errorCode = error.code;
        const errorMessage = error.message;
       })
    },
    goToUpload(){
      this.$router.push('/upload')
    },
     saveToken(){
      try {
        const parsed = JSON.stringify(this.token)
        localStorage.setItem('signinToken',parsed);
      } catch (error) {
        console.log(error);
      }
     }
 }
}
</script>

<style>

</style>