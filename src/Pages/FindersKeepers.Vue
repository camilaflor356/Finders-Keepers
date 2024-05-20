<script>
import Header from '../components/Header.vue'
import axios from 'axios'

export default {
  data() {
    return {
      restaurants: [

      ],
      countryValue: "",
      cuisineValue: "",
      priceValue: "",
      ratingValue: "",
      countryCodes: [
        {
          India: 1,
          Australia: 14,
          Brazil: 30,
          Canada: 37,
          Indonesia: 94,
          NewZealand: 148,
          Phillipines: 162,
          Qatar: 166,
          Singapore: 184,
          SouthAfrica: 189,
          SriLanka: 191,
          Turkey: 208,
          UnitedArabEmirates: 214,
          UnitedKingdom: 216,
        },
      ],
    }
  },
  components: {
    Header,
  },
  methods: {
    filterString(columnName, columnValue) {
      return
      // if the column value is any, the filter string should be empty
      // otherwise, the filter string will be columnName = columnValue
    },
    showRestaurants() {
      //one big function to filter through everything
      let cuisineOption = this.cuisineValue;
      if (cuisineOption == "any") {
        cuisineOption = "";
      }
      let countryOption = this.countryValue
      if (countryOption == "any") {
        countryOption = "";
      } else {
        countryOption = countryOption.split(' ').filter(Boolean).join('');
        console.log(countryOption)
      }
      //https://www.geeksforgeeks.org/string-strip-in-javascript/

      // include country code
      let ratingOption = this.ratingValue
      if (ratingOption == "any") {
        ratingOption = "";
      }
      let priceOption = this.priceValue
      if (priceOption == "any") {
        priceOption = "";
      }
      if (priceOption == "$") {
        priceOption = 1;
      }
      if (priceOption == "$$") {
        priceOption = 2;
      }
      if (priceOption == "$$$") {
        priceOption = 3;
      }
      if (priceOption == "$$$$") {
        priceOption = 4;
      }

      axios.get("http://localhost:4000/finderskeepers/" + cuisineOption).then(response => {
        this.restaurants = response.data;
        console.log(response.data)
      })
      // const query = 'SELECT "Country code", "Cuisine", "Price range", "Aggregate rating" FROM restaurants WHERE "Cuisine" = ?'

      // db.all(query, [cuisineOption], (error, result) => {
      //   if (error) {
      //   console.error(error.message);
      //   response.status(400).json({ error: error.message });
      //   return;
      // }
      // if (result) {
      //   response.json(result);
      // } else {
      // response.sendStatus(404);
      // }
      // axios.get(zomatoRest.db).then(response => {
      //        //this.articles = response.data; 
      //    })
    },
  }
  //const query = 'SELECT "Country code", "Cuisine", "Price range", "Aggregate rating" FROM restaurants WHERE "Country" = ?'
  //look at index.js and draw inspiration from there
  //const countryQuery = 'SELECT "Country code", "Cuisine", "Price range", "Aggregate rating" FROM restaurants WHERE "Country" = ?'
  //const cuisineQuery = 'SELECT "Country code", "Cuisine", "Price range", "Aggregate rating" FROM restaurants WHERE "Cuisine" = ?'
  //const priceQuery = 'SELECT "Country code", "Cuisine", "Price range", "Aggregate rating" FROM restaurants WHERE "Price range" = ?'
  //const ratingQuery = 'SELECT "Country code", "Cuisine", "Price range", "Aggregate rating" from restaurants WHERE "Aggregate rating" = ?'
}
</script>


<template>
  <header class="Home-header">
  </header>

  <body>
    <br>
    <h2>FindersKeepers</h2>
    <!--- Change 'Select' and make one for each category (cuisine, rating, price etc.)-->
    <v-select id='countryDropdown' class="dropdowns" v-model="countryValue" label="Select a Country"
      :items="['Any', 'India', 'Australia', 'Brazil', 'Canada', 'Indonesia', 'New Zealand', 'Phillipines', 'Qatar', 'Singapore', 'South Africa', 'Sri Lanka', 'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States']"></v-select>

    <v-select id='cuisineDropdown' class="dropdowns" v-model="cuisineValue" label="Select a Cuisine"
      :items="['Any', 'Bar Food', 'Cafe', 'Desserts', 'Bakery', 'Beverages', 'Fast Food', 'Healthy Food', 'Street Food', 'Pizza', 'Burgers', 'Mediterranean', 'Italian', 'Japanese', 'Indian', 'American', 'Chinese', 'Thai', 'Mexican']"></v-select>

    <v-select id='priceDropdown' class="dropdowns" v-model="priceValue" label="Select a Price Range"
      :items="['Any', '$', '$$', '$$$', '$$$$']"></v-select>

    <v-select id='ratingDropdown' class="dropdowns" v-model="ratingValue" label="Select a Rating"
      :items="['Any', '0', '1', '2', '3', '4']"></v-select>

    <button id="showButton" v-on:click="showRestaurants">Show Restaurants</button>

    <!-- TODO: show all restaurants here -->
    <div v-for="r in restaurants">
      {{  r['Restaurant Name'] }} 
      {{ r['Price range'] }}
      <!-- map prices back -->
    </div>
  </body>
</template>


<style>
h2 {
  margin-top: 0%;
  text-align: center;
  text-decoration: #D8A48F underline;
}

header {
  margin-bottom: 3%;
}

.dropdowns {
  width: 23%;
  font-family: 'Courier New', Courier, monospace;
  float: left;
  margin-left: 1.68%;
  margin-top: 3.5%;
}

body {
  background-color: #EFEBCE;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

#showButton {
  background-color: #D8A48F;
  display: block;
  margin: auto;
  margin-top: 12%;
  padding: 7px;
}

#showButton:hover {
  background: #D6CE93;
  text-decoration: #A3A380 wavy underline;
}
</style>