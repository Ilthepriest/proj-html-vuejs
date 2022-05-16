<template>
    <div class="bg_jumbo d-flex align-items-center">
        <div class="container text-center">
            <h1>Conference on</h1>
            <h2>Social Networks</h2>
            <img src="@/assets/img/1-item-2.jpg" alt="">
            <div class="event_comunication py-2">
                <span>23-26 MAY 2019</span>
                <span>/</span>
                <span class="span_fontSize">SANS FRANCISO</span>
                <span>/</span>
                <span>8 SPEAKERS</span>
            </div>
            <button type="button" class="btn btn-primary color_button px-4 py-3 mt-3">REGISTER ONLINE</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'SiteJumbo',   
    components: {
        
  }
}
</script>

<style lang="scss" scoped>
.bg_jumbo{
    background-image: url(@/assets/img/slider-1-bg.jpg);
    background-repeat: no-repeat;
    height: 800px;
    background-size: cover;
    background-position: center;
}.container{
    h1{
        font-size: 55px;
    }
    h1,h2{
        color: white;
    }
    h2{
        font-weight: 900;
        font-size: 85px;
    }
    .event_comunication{
        span{
            padding: 0 10px;
            color: white;
            font-weight: 600;
        }
    }
    .color_button{
        background-color: $scarlet;
        border-color: $scarlet;
        font-weight: 600;
    }
    .span_fontSize{
        font-size: 17px;
    }
}
</style>