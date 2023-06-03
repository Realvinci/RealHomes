import Vue from 'vue'
import Vuex from 'vuex'
import {app as app} from '../../firebase'
//import { getStorage, ref } from "firebase/storage";
//import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
const db = getFirestore(app)
const auth = getAuth(app)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     house:{
       name:'',
       price:'',
       agent:'',
       agentnumber:'',
       description:'',
       imageUrl:''
     },
     file:null,
     houses:[],
  },
  getters: {
    getHouse(state){
     return state.house
    },
    getHouses(state){
      return state.houses
    }
  },
  mutations: {
   upload(state,payload){
    state.house = {
      name:payload.name,
      price:payload.price,
      agentnumber:payload.agentnumber,
      description:payload.description,
      imageUrl:payload.imageUrl
    }
   },
   data(state,payload){
    payload.forEach((doc)=>{
      state.houses.push(doc.data())
    })
   }
  },
  actions: {
     async uploadInfo({commit},payload){
      try {
        const docRef = await addDoc(collection(db,"houses"),payload);
        console.log("Document written with ID : ",docRef.id)
        commit('upload',payload);
      } catch (error) {
        console.log("Error adding document: ",e)
      }
     },
    async readData({commit},payload){
      const querySnapshot = await getDocs(collection(db,"houses"));
      commit('data',querySnapshot);
    },
    getFile({commit},){
      
    },
     async SignUp(payload){
     auth = getAuth();
     await createUserWithEmailAndPassword(auth,payload)
     .then((userCredential)=>{
      const user = userCredential.user;
     }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
     })
    },
    
    }
  
})

