<template>
  <div class="link_Menu">
      <ul class="d-flex">
          <SiteLinkComponent :type="link.type" v-for="(link, index) in links" :key="index"/>
          <font-awesome-icon icon="fa-solid fa-minus" class="rotate icon" />
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon"/>
      </ul>
  </div>
</template>

<script>
import SiteLinkComponent from '@/components/SingolLinkElement.vue'
export default {
    name: 'SiteNav',
    components: {
      SiteLinkComponent
    },

  data() {
      return {
          links: [
              {
                  type: "Home"
              },
              {
                  type: "Pages"
              },
              {
                  type: "Program"
              },
              {
                  type: "Tickets"
              },
              {
                  type: "Speakers"
              },
              {
                  type: "Papers"
              },
              {
                  type: "Blog"
              },
              {
                  type: "Shorcodes"
              }
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
.rotate{
    transform: rotate(90deg);
}
.icon{
    font-size: 20px;
    color: $gray;
    padding: 0 10px;
}
</style>