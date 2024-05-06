<script>
import Header from '../components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>


<template>
    <header class="Home-header">
    </header>
<body>
  <br>
<h2>FindersKeepers</h2>
<!--- Change 'Select' and make one for each category (cuisine, rating, price etc.)-->
<v-select class ="dropdowns"
  label="Select a Country" 
  :items="['Any','India', 'Australia', 'Brazil', 'Canada', 'Indonesia', 'New Zealand', 'Phillipines', 'Qatar', 'Singapore', 'South Africa', 'Sri Lanka', 'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States']"
></v-select>
<v-select class ="dropdowns"
  label="Select a Cuisine" 
  :items="['Any','Bar Food', 'Cafe', 'Desserts', 'Bakery', 'Beverages', 'Fast Food', 'Healthy Food', 'Street Food', 'Pizza', 'Burgers', 'Mediterranean', 'Italian', 'Japanese', 'Indian', 'American', 'Chinese', 'Thai', 'Mexican']"
></v-select>
<v-select class ="dropdowns"
  label= "Select a Price Range" 
  :items="['Any', '$', '$$', '$$$', '$$$$']"
></v-select>,
<v-select class ="dropdowns"
  label="Select a Rating" 
  :items="['Any','0-1', '1-2', '2-3', '3-4']"
></v-select>
</body>
</template>


<style>
h2{
  margin-top:0%;
  text-align: center;
  text-decoration: #D8A48F underline;
}
header{
  margin-bottom:3%;
}
.dropdowns {
  width:23%;
  font-family: 'Courier New', Courier, monospace;
  float: left;
  margin-left:1.68%;
  margin-top: 3.5%;
}

body{
  background-color: #EFEBCE;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

</style>