<template>
  <div class="signUp">
    <form @submit.prevent="SignUp({email:email,password:password})">
        <h1>Sign Up</h1>
        <h3>Already a member?</h3>
         <router-link to="">Log In</router-link>
         <input type="email" placeholder="Email" v-model="email">
         <input type="password" v-model="password">
         <button @submit="SignUp({email:email,password:password})">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {app as app} from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore"; 

const db = getFirestore(app);

export default {
 name:'SignUp',
data(){
  return{
    email:'',
    password:''
  }
},
 methods:{
  async SignUp(){
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth,this.email,this.password)
    .then((userCredential)=>{
        const user = userCredential.user
        console.log(user);
        //this.AddUser();
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    })
  },
    async AddUser(){
      try {
        const docRef = await addDoc(collection(db,"users"),{name:this.email,password:this.password,role:"User"});
        console.log("Document written with ID: ",docRef.id);
      } catch (error) {
        console.log("Error adding document: ",error);
      }
    }
  //...mapActions(['SignUp'])
 }
}
</script>

<style>

</style>