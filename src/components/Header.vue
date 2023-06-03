<template>
  <div class="header">
   <h1>RealHomes.</h1>
   <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Agents</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
   </ul>
   <div class="menu">
    <i class="fa-solid fa-bars"></i>
   </div>
   <div class="fonts">
    <i class="fa-solid fa-user"></i>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h1{
  margin: .5em;
  font-style: italic;
  font: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(196, 173, 173);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
 
}
a {
  color: #000;
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 600;
  text-transform: uppercase;
}
.menu{
  display: none;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-bottom: 1px solid rgb(155, 144, 144);
  z-index: 1000;
}
.fonts{
  margin-right: 15px;
  padding: 3px 6px;
}
.fonts ,.fa-solid{
  padding: 3px 6px;
  font-size: 18px;
  color: #000;
}
@media (max-width:480px){
  header{
    flex-direction: column;
    
  }
  ul{
    display: none;
  }
  .fonts{
    display: none;
  }
  .menu{
    display: block;
  }
  .fonts ,.fa{
    display: none;
  }
}
@media (max-width:960px){
  header{
    flex-direction: column;
  }
  ul{
    display: none;
  }
  .menu{
   display: block;
  }
  .fonts ,.fa{
    font-size: 1em;
    display: none;
  }
  a{
    font-size: 1em;
  }
}

@media (min-width:1025px){}
@media (max-width:1280px){}
</style>
