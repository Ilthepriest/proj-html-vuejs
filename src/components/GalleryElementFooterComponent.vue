<template>
  <div class="col ">
      <div class="img">
          <img class="img-fluid" :src="link.img" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name: 'SiteFooterElementGallery',
    props:{
       link: String
    }
}
</script>

<style lang="scss" scoped>

</style>