<template>
  <div class="hero">
    <img src="../assets/pexels-pixabay-358636.jpg" alt="">
    <h1>Find Your Perfect Home.</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
  width: 100%;
  background-size: cover;
  position: relative;
  z-index: -100;
}
.hero{
    margin-bottom: 10px;
}
h1{
    position: absolute;
    text-align: center;
    top: 50%;
    right: 40%;
    color: #fff;
    padding: 10px 20px;
    background: #000;
    opacity: .7;
}
@media (max-width:960px){
    h1{
        text-align: center;
        z-index: 100;
    }
}
</style>