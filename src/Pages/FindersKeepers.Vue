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
        <h2>FindersKeepers</h2>
    </header>
<!--- Change 'Select' and make one for each category (cuisine, rating, price etc.)-->
<v-select class ="dropdowns"
  label="Select a Country" 
  :items="['India', 'Australia', 'Brazil', 'Canada', 'Indonesia', 'New Zealand', 'Phillipines', 'Qatar', 'Singapore', 'South Africa', 'Sri Lanka', 'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States']"
></v-select>
<v-select class ="dropdowns"
  label="Select a Cuisine" 
  :items="['Bar Food', "Cafe", "Desserts", "Beverages", "Italian", "Japanese", "Indian", "American", "Fast Food"]"
></v-select>
<v-select class ="dropdowns"
  label= "Select a Price Range" 
  :items="['1', '2', '3', '4']"
></v-select>,
<v-select class ="dropdowns"
  label="Select a Rating" 
  :items="['0-1', '1-2', '2-3', '3-4']"
></v-select>
</template>


<style>
.dropdowns {
  width:23%;
  font-family: Arial, Helvetica, sans-serif;
  float: left;
  margin:1%;
}

</style>