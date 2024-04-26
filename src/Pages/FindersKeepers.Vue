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
  label="Select a Cuisine" 
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
></v-select>
<br>
</template>


<style>
.dropdowns {
  width:30%;
  font-family: Arial, Helvetica, sans-serif;
}

</style>