<template>
  <div class="featured">
    <h1>Featured Products.</h1>
      <div class="boxes">
         <div class="box" v-for="(house,i) in getHouses" :key="i">
            <img :src="house.imageUrl">
            <h3 class="price">{{ house.price }}</h3>
            <h3>{{ house.name }}</h3>
            <div>
                <i class="fa-solid fa-location-dot"></i>
                <a href="#">Talba Road</a>
            </div>
            <p>{{ house.description }}</p>
         </div>
        
      </div>
     
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
name:'Featured',
  computed:{
    ...mapGetters(['getHouses']),
  },
  methods:{
    ...mapActions(['readData'])
  },
  created(){
    this.readData();
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .boxes{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin: 0 auto;
    width: 80%;
  }
  img{
    width: 100%;
   
  }
  .price{
    position: relative;
    top: 0%;
    left: 0%;
    background: orange;
    padding: 10px 20px;
    margin-top: -10px;
  }
  .box{
    width: 400px;
    border: 1px solid #000;
  }
</style>