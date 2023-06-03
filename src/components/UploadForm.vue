<template>
  <div class="form">
      <form @submit.prevent="uploadInfo({name:housedata.name,price:housedata.price,agent:housedata.agent,agentnumber:housedata.agentnumber,description:housedata.description,imageUrl:housedata.imageurl})">
        <div class="form">
        <label for="Name">Name</label>
        <input type="text" placeholder="Enter lodge Name" v-model="housedata.name">
         <label for="price">Price</label>
        <input type="number" placeholder="Enter Price" v-model="housedata.price">
        <label for="agent">Agent</label>
        <input type="text" placeholder="Enter Agent Name." v-model="housedata.agent">
        <label for="number">Agent's Number</label>
        <input type="text" placeholder="Enter Agent Number" v-model="housedata.agentnumber">
        <label for="Direction">Location</label>
        <label for="Description">Description</label>
        <textarea name="" id="" cols="30" v-model="housedata.description" rows="10"></textarea>
        <label for="image">Upload image</label>
        <input type="file" @change="getFile()" name="file" id="file"> 
        <input type="submit">
       </div>
      </form>
      <img :src="housedata.imageurl">
      <button @click="readData()">click</button>
      <button @click="uploadImage()">uploadImage</button>
      <p>{{ getHouses }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getFirestore } from "firebase/firestore";
import {app as app} from "../../firebase";
import { collection, addDoc ,getDocs} from "firebase/firestore"; 
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";


const db = getFirestore(app);
const storage = getStorage(app);
export default {
 name:'uploadForm',
 data(){
  return{
    housedata:{
      name:'',
      price:'',
      agent:'',
      agentnumber:'',
      description:'',
      imageurl:''
    },
    file:null
  }
 },
 methods:{
    ...mapActions(['uploadInfo','readData']),
    getFile(){
     this.file = event.target.files[0];
    },
    uploadImage(){
       const metadata = {
       contentType:'image/jpeg'
       };
     
       //upload file and metadata to the object 
       
       const storageRef = ref(storage,'houses/' + this.file.name);
      
       const uploadTask = uploadBytesResumable(storageRef,this.file,metadata);

      //Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',(snapshot)=>{
        //Get task progress,including the number of bytes uploaded and the total number of bytes
        const progress =(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch(snapshot.state){
          case 'paused':
            console.log('Upload is paused');
            break;
            case 'running':
              console.log('Upload is running');
            break;
        }
      },
       (error)=>{
        switch(error.code){
          case 'storage/unauthorized':
            //User doesnt have permission to access the object
            break;
          case 'storage/canceled':
            //User cancelled the upload
            break;
          case 'storage/unknown':
            //Unknown error occured, inspect error.serverResposnse
            break;
        }
       },
       ()=>{
        //Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          console.log('File available at',downloadURL);
          this.housedata.imageurl = downloadURL

        });
       }
      )
    }
 },
 computed:{
    ...mapGetters(['getHouses'])
 }
}
</script>

<style>
.form{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
}
input{
  padding: 10px 20px;
}
</style>