<script>
import FindersKeepers from 'Pages/FindersKeepers.Vue'
import Details from 'Pages/Footer.Vue'
import Home from 'Pages/Homepage.Vue'

// hi y'all, going to number the changes (there are 4) so it's clear to you. 
// 1. create a routes object with all your navbar routes
// see https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
const routes = {
  '/': null,
  '/finderskeepers': FindersKeepers,
  '/details': Details,
  '/home' : Home
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
   Home
  }
}
</script>

<template>
  <Header />
  <!-- 4. change this to be a dynamic component, and add :is="currentPath" as a directive -->
  <component :is="currentPath" />
  <Footer />
</template>

<style></style>