<template>
  <div class="bg_sponsor py-5">
    <div class="container text-center py-5">
        <h3>SPONSOR</h3>
        <p class="mt-4">Maecenas faucibus mollis interdum.Nullam id dolor <br> id nibh ultricies vehicula ut id elit.</p>
         <div class="row row-cols-6 mt-5">
        <div class="col">
            <img src="@/assets/img/banner-1.jpg" alt="">
        </div>
        <div class="col">
            <img src="@/assets/img/banner-2.jpg" alt="">
        </div>
        <div class="col">
            <img src="@/assets/img/banner-3.jpg" alt="">
        </div>
        <div class="col">
            <img src="@/assets/img/banner-4.jpg" alt="">
        </div>
        <div class="col">
            <img src="@/assets/img/banner-5.jpg" alt="">
        </div>
        <div class="col">
            <img src="@/assets/img/banner-6.jpg" alt="">
        </div>
    </div>
    </div> 
  </div>
</template>

<script>
export default {
    name: 'SiteSponsot'
}
</script>

<style lang="scss" scoped>
.bg_sponsor{
    background-color: #F6F6F6;
    h3{
        font-weight: 600;
        font-size: 37px;
    }
    p{
        color: $gray;
        font-size: 14px;
    }
}
</style>