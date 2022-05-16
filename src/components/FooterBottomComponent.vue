<template>
  <div class="bg_footer_bottom d-flex align-items-center">
      <div class="container">
          <div class="row row-cols-2">
              <div class="col">
                  <p>@Copyright GoodLayers, All Right Reserved</p>
              </div>
              <div class="col text-end">
                  <p>About Us | Accomodation | Call For Paper | Contact us</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SiteFooterBottom'
}
</script>

<style lang="scss" scoped>
.bg_footer_bottom{
    background-color: #161616;
    height: 70px;
    p{
        color: $gray;
        margin-bottom: 0px;
    }
}
</style>