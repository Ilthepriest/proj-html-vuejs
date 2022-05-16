<template>
<div class="bg-container">
  <div class="container bg-container py-5">
      <div class="row row-cols-2 py-5 d-flex">
          <div class="col">
             <h3>SPEAKERS</h3> 
          </div>
          <div class="col">
              <div class="arrow d-flex justify-content-end">
                  <div class="square_arrow p-4 d-flex justify-content-center align-items-center me-2">
                      <font-awesome-icon icon="fa-solid fa-angle-left" />
                  </div>
                  <div class="square_arrow p-4 d-flex justify-content-center align-items-center">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                  </div>
              </div>
          </div>
      </div>
      <div class="row row-cols-4 py-5 text-center">
          <div class="col">
              <img src="@/assets/img/speaker-6.jpg" alt="">
              <div class="speaker mt-4">
                    <div>PATRICK SPENCER</div>
                    <p>S&P Analyzer</p>
              </div>
          </div>
          <div class="col">
              <img src="@/assets/img/speaker-5.jpg" alt="">
              <div class="speaker mt-4">
                    <div>JANET JONES</div>
                    <p>Newyorks Post's GM</p>
              </div>
          </div>
          <div class="col">
              <img src="@/assets/img/speaker-4.jpg" alt="">
              <div class="speaker mt-4">
                    <div>MICHAEL DOVER</div>
                    <p>Starbuck's CEO</p>
              </div>
          </div>
          <div class="col">
              <img src="@/assets/img/speaker-3.jpg" alt="">
              <div class="speaker mt-4">
                    <div>ANGELINA HOLY</div>
                    <p>Maxii's Manager</p>
              </div>
          </div>
      </div>

  </div>
</div>  
</template>

<script>
export default {
    name: 'SiteSpeakers'
}
</script>

<style lang="scss" scoped>
.bg-container{
    background-color: #F3F3F3;
}
.square_arrow{
    width: 30px;
    height: 30px;
    background-color: $scarlet;
    color: white;
    border-radius: 5px;
}
h3{
    font-weight: 600;
    font-size: 36px;
}
img{
    width: 300px;
    border-radius: 10px ;
}
.speaker{
    div{
        font-weight: 600;
        font-size: 15px;
    }
    p{
        color: $gray;
        font-size: 13px;
        margin-top: 10px;
    }
}
</style>