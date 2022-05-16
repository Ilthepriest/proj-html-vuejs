<template>
    <div class="footer">
        <SiteFooterTop />
        <SiteFooterBottom />
    </div>
    
</template>

<script>
import SiteFooterTop from '@/components/FooterTopComponent.vue'
import SiteFooterBottom from '@/components/FooterBottomComponent.vue'
export default {
    name: 'SiteFooter',
    components:{
        SiteFooterTop,
        SiteFooterBottom
    }

}
</script>

<style>

</style>