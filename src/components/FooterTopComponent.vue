<template>
  <div class="bg_footer">
      <div class="container py-5">
          <div class="row row-cols-4">
              <div class="col">
                  <div class="aboutUs" v-for="(link, index) in about" :key="index">
                      <h6 class="mb-4">{{link.title}}</h6>
                      <p>{{link.content}}</p>
                  </div>
                  <div class="row row-cols-7 pe-5">
                    <SiteFooterElementAbout :icone="link.icone" v-for="(link, index) in about" :key="index"/>
                  </div>
              </div>
              <div class="col">
                  <SiteFooterElementNews :title="link.title" :content="link.content" :icone="link.icone" v-for="(link, index) in news" :key="index"/>
              </div>
              <div class="col button">
                  <SiteFooterElementGet :title="link.title" :content="link.content" :button="link.button" v-for="(link, index) in get" :key="index"/>
                  <button type="button" class="btn btn-primary color_button px-4 py-3">CHECK OUT TICKETS!</button>
              </div>
              <div class="col">
                  <h6 class="mb-4" v-for="(link, index) in gallery" :key="index">{{link.title}}</h6>
                  <div class="row row-cols-4 g-3">
                    <SiteFooterElementGallery  :link="link"  v-for="(link, index) in gallery" :key="index"/>
                  </div>
              </div>
          </div>
            
      </div>
  </div>
</template>

<script>
import SiteFooterElementAbout from '@/components/AboutElementFooterComponent.vue'
import SiteFooterElementNews from '@/components/NewsElementFooterComponent.vue'
import SiteFooterElementGet from '@/components/GetElementFooterComponent.vue'
import SiteFooterElementGallery from '@/components/GalleryElementFooterComponent.vue'


export default {
    name: 'SiteFooterTop',
    components:{
        SiteFooterElementAbout,
        SiteFooterElementNews, 
        SiteFooterElementGet,
        SiteFooterElementGallery
    },
     data() {
      return {
          about: [
              {
                  title: "ABOUT US",
                  content: "Cum sociis natoque penatibus et",
                  icone: "fa-brands fa-facebook-square"
                  
              },
              {
                 content: "magnis dis parturient montes,",
                 icone: "fa-brands fa-twitter"
              },
              {
                  content: "nascetur riduculus mus.",
                  icone: "fa-brands fa-linkedin"
              },
              {
                  icone: "fa-brands fa-google-plus-square"
              },
              {
                 icone: "fa-brands fa-pinterest-square"
              },
              {
                  icone: "fa-brands fa-flickr"    
              }
              
          ],
          news:[
              {
                  title: "RECENT NEWS"
              },
              {
                  content: "SEM PORTA MOLLIS PARTURIENT",
                  icone: "a-solid fa-angle-right"
              },
              {
                  content: "NULLAM LOREM MATTIS PURUS",
                  icone: "a-solid fa-angle-right"
              },
              {
                  content: "NIBH SEM SIT ULLAMCORPER",
                  icone: "a-solid fa-angle-right"
              },
              {
                  content: "DONEC LUCTUS IMPERDIET",
                  icone: "a-solid fa-angle-right"
              },
              {
                  content:"MAGNA PARS STUDIORUM",
                  icone: "a-solid fa-angle-right"
              }
          ],
          get: [
              {
                  title: "GET YOUR SEAT!",
              },
              {
                  content: "Book for your seat before it's too rate."
              },
              {
                  content: "We provide variety of ticket options."
              }
          ],
          gallery: [
              {
                  title: "GALLERY FROM LAST YEAR",
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/12/photodune-7770665-two-white-coffee-mug-with-diy-decoration-on-vintage-effect-m-150x150.jpg"
              },    
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/12/photodune-8523683-speaker-at-business-convention-and-presentation-m-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/12/photodune-6745579-modern-creative-man-relaxing-on-workspace-m-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/12/photodune-8522811-speaker-at-business-conference-and-presentation-m-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/12/photodune-8797753-multiethnic-people-with-startup-business-talking-in-a-cafe-m-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/11/card04-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/12/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on-a-old-table-m-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/12/photodune-6745585-modern-creative-workspace-m-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/11/6426608875_186070f8ca_o-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/11/card01-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/11/13349065283_64d09b067c_o-150x150.jpg"
              },
              {
                  img: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2013/12/photodune-8795110-overhead-of-essentials-denim-clothes-m-150x150.jpg"
              }
          ]
      }
  }
}
</script>

<style lang="scss">
.bg_footer{
    background-color: #212121;
    h6{
        color: white;
        font-size: 12px;
    }
    p{
        color: $gray;
    }
    .color_button{
        background-color: $scarlet !important;
        border-color: $scarlet;
        font-weight: 600;
        box-shadow: 0px 5px 0px 0px $darkVibrant;
        color: white;
    }
    .aboutUs{
        p{
            margin-bottom: -20px;
            font-size: 13px;
        }
    }
    .button{
        button{
            font-size: 11px;
        }
    }
}
</style>