<script>
import Header from '../components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>


<template>
        <header class="HomeHeader">
    </header>
    <body>
        <br>
        <h2>Home</h2>
        <div class= "home-body">
            <br>
            <p>FindersKeepers that helps you filter through restaurants all over the world based on your preferences!</p>
            <br>
            <p>Go to the FindersKeepers tab, select your preferences using the dropdown menus and look through your results.</p>
            <p>Recommendations will appear and if you click on any of them, you will be brought to a page that displays more details on the restaurant. </p>
            <p>Only a select number of restaurants are shown and they may not encompass every country/cuisine. You can filter through the restaurants by country, cuisine, price, and ratings.</p>
            <br>
            <p id="happy-eating">Have fun finding restaurants and happy eating!</p>
        </div>
    </body>
</template>


<style>
.home-body{
    font-family: 'Courier New', Courier, monospace;
    background-color: #EFEBCE;
}
body{
    background-color: #EFEBCE;
}
#happy-eating{
    text-align: center;
    text-decoration: #BB8588 dotted underline;
}
h2{
  margin-top:0%;
  text-align: center;
  text-decoration: #D8A48F underline;
}
header{
  margin-bottom:3%;
}
</style>