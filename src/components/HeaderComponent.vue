<template>
  <header>
      <div class="container">
          <div class="row-col-2 d-flex py-5">
              <div class="col">
                  <img src="@/assets/img/logo.png" alt="">
              </div>
              <div class="col">
                  <nav>
                      <Sitenav />
                  </nav>
              </div>
          </div>
      </div>
  </header>
</template>


<script>
import Sitenav from '@/components/NavComponent.vue'
export default {
  name: 'SiteHeader',   
  components: {
    Sitenav
  }
}
</script>

<style lang="scss" scoped>

</style>