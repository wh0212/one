<template>
  <div class="home">
    <home-header></home-header>
	<home-nav></home-nav>
  </div>
</template>

<script>
import HomeHeader from './Components/homeheader'
import HomeNav from './Components/homenav.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
	HomeNav
  }
}
</script>
