<template>
  <div>
      <div class="container py-5">
          <div class="row row-cols-3 py-4 color_text">
              <div class="col-3">
                  <h3>PROGRAM</h3>
              </div>
              <div class="col-6 text-star">
                  <p>This conference run trought all 4 days from 23-26 May 2016.</p>
                  <p>We also provide free lunch and coffee break in each day.</p>
              </div>
              <div class="col-3 d-flex justify-content-end">
                  <i class="italic">View Full Program</i>
              </div>
          </div>
          <div class="row row-cols-6">
              <div class="col square_day active">
                  <div class="ms-3">
                        <p class="mb-0">DAY 1</p>
                        <div>23 May 2016</div>
                  </div>
              </div>
              <div class="col square_day">
                  <div class="ms-3">
                        <p class="mb-0">DAY 2</p>
                        <div>23 May 2030</div>
                  </div>
              </div>
              <div class="col square_day">
                   <div class="ms-3">
                        <p class="mb-0">DAY 2</p>
                        <div>24 May 2030</div>
                  </div>
              </div>
              <div class="col square_day">
                   <div class="ms-3">
                        <p class="mb-0">DAY 2</p>
                        <div>25 May 2030</div>
                  </div>
              </div>
              <div class="col square_day">
                   <div class="ms-3">
                        <p class="mb-0">DAY 2</p>
                        <div>26 May 2030</div>
                  </div>
              </div>
              <div class="col square_day">
              </div>
          </div>
          <div class="row row.cols-2 bg_color color_text p-5">
              <div class="col">
                  <div class="d-flex flex-column orariDestinazioni">
                      <div class="d-flex">
                            <font-awesome-icon icon="fa-solid fa-clock" class="bg_icon" />
                            <p class="ms-4">09:00-10:30</p>
                      </div>
                      <div class="d-flex">
                          <font-awesome-icon icon="fa-solid fa-location-arrow" class="bg_icon" />
                          <p class="ms-4">ROOM A</p>
                      </div>
                      <div class="d-flex">
                          <font-awesome-icon icon="fa-solid fa-user" class="bg_icon" />
                          <p class="ms-4" id="color_froly">LAURANCE FRANCIS</p>
                      </div>
                  </div>
              </div>
              <div class="col-9 introduction">
                  <h5>WELCOMING AND INTRODUCTION</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At debitis totam quas similique culpa cumque, eos, sunt suscipit itaque, quod ad. Doloremque quam placeat saepe enim minus cupiditate nostrum distinctio, in voluptate provident odio voluptates. Sapiente, tempore sunt?</p>
                  <img src="@/assets/img/speaker-8-150x150.jpg" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.square_day{
    padding: 10px;
    background-color: orangered;
    border-right: 1px solid $muted;
   p{
        color: white;
        font-size: 16px;
        font-weight: 600;
    }
    div{
        color: white;
        font-size: 13px;
    }
}
.active{
    background-color: #C72B11;
}
.bg_color{
    background-color: #F3F3F3;
}
.introduction{
    img{
        width: 70px;
        border-radius: 10px;
    }
    p{
        font-size: 13px !important;
    }
}
.color_text{
    p{
        color: $gray;
        font-size: 14px;
    }
}
.italic{
    color: $froly;
    font-size: 15px;
}
#color_froly{
    color: $froly;
}
.bg_icon{
    color: $gray;
    font-size: 20px;
}
h3{
    font-size: 36px;
    font-weight: 600;
}
h5{ 
    font-size: 22px;
}
.orariDestinazioni{
    p{
        font-size: 12px;
    }
}
</style>