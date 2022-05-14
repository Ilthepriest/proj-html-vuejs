<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    
  </div>
</template>

<script>
import SiteHeader from '@/components/HeaderComponent.vue'
import SiteMain from '@/components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
