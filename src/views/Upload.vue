<template>
  <div class="upload">
    <Header/>
    <UploadForm/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue';
import UploadForm from '@/components/UploadForm.vue';
export default {
   name:'Upload',
   components:{
    Hero,Header,UploadForm
   }
}
</script>

<style>

</style>