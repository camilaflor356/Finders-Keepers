<script>
import Header from '../components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>


<template>

<!--- Change 'Select' and make one for each category (cuisine, rating, price etc.)-->
<v-select
  label="Cuisine" 
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
></v-select>
<br>
</template>


<style>
v-select {
  /* edit width */
  color:blue;
  width: 20pt;
}
</style>