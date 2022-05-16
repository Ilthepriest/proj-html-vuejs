<template>
  <div class="bg_image d-flex flex-column align-items-center justify-content-center">
      <h3>LOCATION</h3>
      <h4 class="mt-4">GD BUILDING, GRAND CONFERENCE ROOM</h4>
      <div class="d-flex justify-content-center">
            <font-awesome-icon icon="fa-solid fa-location-arrow" class="color_icon" />
            <p>11 GD Building, River Mall, New York, USA 8879</p>
      </div>
      <p class="color_text">Check For Accommodations Here</p>
      <img class="mb-2 mt-3" src="@/assets/img/1-item-2.jpg" alt="">
      <div class="d-flex justify-content-center">
          <font-awesome-icon icon="fa-solid fa-phone" />
          <p class="ms-3">+1-112-222-3344</p>
          <font-awesome-icon icon="fa-solid fa-envelope" class="ms-5"/>
          <p class="ms-3">Contact@TheKeynoteTheme.com</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SiteLocation'
}
</script>

<style lang="scss" scoped>
.bg_image{
    background-image: url(@/assets/img/location-bg.jpg);
    height: 500px;
    background-position: center;
    color: white;
    .color_icon{
        color: white;
        font-size: 20px;
        margin-right: 16px;
    }
    .color_text{
        color: red;
    }
    h3{
        font-size: 37px;
        font-weight: 600;
    }
    h4{
        font-weight: 600;
        font-size: 24px;
    }
    p{
        font-size: 15px;
    }
}
</style>