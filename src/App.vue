<script>
import FindersKeepers from './Pages/FindersKeepers.vue'
import Details from './Pages/Details.vue'
import Home from './Pages/Homepage.vue'
import Header from './components/Header.vue'

//command, option i for the chrome thingy to see fails
// hi y'all, going to number the changes (there are 4) so it's clear to you. 
// 1. create a routes object with all your navbar routes
// see https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
const routes = {
  '/': Home,
  '/finderskeepers': FindersKeepers,
  '/details': Details
}
export default {
  data() {
    // 2. change the currentPath to be the value of the routes variable (instead of just a string
    return {
      currentPath: routes['/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = routes[window.location.hash.slice(1)];
    });
  },
  components: {
   FindersKeepers,
   Details,
   Home,
   Header
  }
}
</script>

<template>
      <Header />
</template>

<style>

</style>