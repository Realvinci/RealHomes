<template>
  <div class="category">
    <div>
        <input type="text" placeholder="Enter Keyword">
    </div>
    <div>
        <select name="number" id="num">
            <option value="single">Single</option>
            <option value="self-con">Self-Con</option>
            <option value="Two-bedroom">Two-bedroom</option>
        </select>
    </div>
    <div>
        <select name="price" id="price">
        <option value="150">150</option>
        <option value="120">120</option>
        <option value="50">50</option>
        </select>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .category{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width: 60%;
    margin: 0 auto;
    background-color: #fff;
    padding: 10px;
    box-shadow: 5px 10px #888;
    
    border: 1px solid;
    margin-bottom: 20px;
 }
 select{
    padding: 15px 25px;
 }
 input{
    padding: 15px 25px;
 }
</style>