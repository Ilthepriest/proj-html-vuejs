<template>
  <main>
        <SiteJumbo />
        <SiteWho />
        <SiteSubscribe />
        <SiteSpeakers />
        <SiteProgram />
        <SiteMap />
        <SiteLocation />
        <SiteNews />
  </main>
</template>

<script>
import SiteJumbo from '@/components/JumbotronComponent.vue'
import SiteWho from '@/components/WhoComponent.vue'
import SiteSubscribe from '@/components/SubscribeComponent.vue'
import SiteSpeakers from '@/components/SpeakersComponent.vue'
import SiteProgram from '@/components/ProgramComponent.vue'
import SiteMap from '@/components/MapComponent.vue'
import SiteLocation from '@/components/LocationComponent.vue'
import SiteNews from '@/components/RecentNewsComponent.vue'
export default {
    name: 'SiteMain',
    components:{
        SiteJumbo,
        SiteWho,
        SiteSubscribe,
        SiteSpeakers,
        SiteProgram,
        SiteMap,
        SiteLocation,
        SiteNews
    }
}
</script>

<style>

</style>