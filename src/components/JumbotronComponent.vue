<template>
    <div class="position-relative">
        <vueper-slides slide-image-inside>
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :content="slide.content" :video="slide.video" ></vueper-slide>
        </vueper-slides>
        <div class="container position_absolute">
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
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css' 
export default {
    name: 'SiteJumbo',   
    components: {
         VueperSlides, VueperSlide
  },
  data(){
      return {
          slides:[
        {
            image: require("@/assets/img/slider-1-bg.jpg"),

        },
        {
            image: require("@/assets/img/photodune-8522811-speaker-at-business-conference-and-present (2).jpg")
        },
        {
            video: {
                url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
                props: { 
                    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                 }
                }
        }
    ]
      }
  }
}
</script>

<style lang="scss" scoped>
.container{
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
.position_absolute{
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}

// slider

.vueperslide {
  /* background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB); */
}

.vueperslide__image {
  
  background-position: bottom !important;
}

.vueperslides--fixed-height { height: 500px; }
.vueperslide__title {
  font-size: 7em;
  opacity: 0.6;

}
</style>