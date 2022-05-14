<template>
  <main>
        <SiteJumbo />
        <SiteWho />
        <SiteSubscribe />
        <SiteSpeakers />
  </main>
</template>

<script>
import SiteJumbo from '@/components/JumbotronComponent.vue'
import SiteWho from '@/components/WhoComponent.vue'
import SiteSubscribe from '@/components/SubscribeComponent.vue'
import SiteSpeakers from '@/components/SpeakersComponent.vue'
export default {
    name: 'SiteMain',
    components:{
        SiteJumbo,
        SiteWho,
        SiteSubscribe,
        SiteSpeakers
    }
}
</script>

<style>

</style>