<template>
  <div class="container py-5">
    <div class="row row-cols-2 py-5">
      <div class="col">
        <h3 class="mb-5">PRESENTATION</h3>
        <div class="vimeo">
          <iframe src="https://player.vimeo.com/video/84467622?h=0d19bc51bf&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col">
        <h3 class="mb-5">TWITTER FEED</h3>
        <div class="d-flex">
          <div><img src="@/assets/img/icons8-twitter-48.png" alt=""></div>
          <div class="px-3">
            <p>Stand out and be vibrant with some of the best bright adn bold templates <br> on <span>@Envato</span> Elements.And ass a splash of c... <span>https://t.co/jFrsnzEjk7</span></p>
            <p class="my-4 ">3 days ago</p>
          </div>
        </div>
        <div class="d-flex">
          <div><img src="@/assets/img/icons8-twitter-48.png" alt=""></div>
          <div class="px-3">
            <p>Stand out and be vibrant with some of the best bright adn bold templates <br> on <span>@Envato</span> Elements.And ass a splash of c... <span>https://t.co/jFrsnzEjk7</span></p>
            <p class="my-4">3 days ago</p>
          </div>
        </div>
        <div class="d-flex">
          <div><img src="@/assets/img/icons8-twitter-48.png" alt=""></div>
          <div class="px-3">
            <p>Stand out and be vibrant with some of the best bright adn bold templates <br> on <span>@Envato</span> Elements.And ass a splash of c... <span>https://t.co/jFrsnzEjk7</span></p>
            <p class="my-4">3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SiteVimeo'
}
</script>

<style lang="scss" scoped>
.container{
  h3{
    font-weight: 600;
    font-size: 26px;
  }
  p{
    color: $gray;
    font-size: 13px;
  }
  span{
    color: $scarlet;
  }
}

</style>