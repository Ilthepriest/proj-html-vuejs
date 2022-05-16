<template>
  <div>
      <div class="container">
          <div class="row row-cols-3 py-5">
              <div class="col">
                  <div class="d-flex">
                    <font-awesome-icon icon="fa-solid fa-trophy" class="color_icon" />
                    <div class="ms-5">
                        <h3>WHO WE ARE</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sit aliquid deserunt nemo expedita quos voluptatum eligendi a animi dicta.</p>
                        <i class="italic">Learn More</i>
                    </div>
                  </div>
                 
              </div>
              <div class="col">
                  <div class="d-flex">
                    <font-awesome-icon icon="fa-solid fa-bolt-lightning" class="color_icon" />
                    <div class="ms-5">
                        <h3>WHAT WE DO</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sit aliquid deserunt nemo expedita quos voluptatum eligendi a animi dicta  deserunt.</p>
                        <i class="italic">Learn More</i>
                    </div>
                  </div>
                  
              </div>
              <div class="col">
                  <div class="d-flex">
                    <font-awesome-icon icon="fa-solid fa-question" class="color_icon" />
                    <div class="ms-5">
                        <h3>WHY US?</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sit aliquid deserunt nemo expedita quos voluptatum eligendi a animi dicta  deserunt.</p>
                        <i class="italic">Learn More</i>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SiteWho'
}
</script>

<style lang="scss" scoped>
.col{
    p{
        color: $cloud;
        font-size: 13px;
    }
    .italic{
        color: $froly;
        font-size: 15px;
    }
}
.color_icon{
    color: $cloud;
    font-size: 30px;
}
h3{
    font-size: 14px;
    font-weight: 600;
}
</style>