<template>
  <div class="home">
  <Header/>
  <Hero/>
  <category/>
  <Featured/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import category from '@/components/category.vue'
import Featured from '@/components/Featured.vue'
export default {
  name: 'HomeView',
  components: {
    Header,Hero,category,Featured
  }
}
</script>

<style scoped>

</style>