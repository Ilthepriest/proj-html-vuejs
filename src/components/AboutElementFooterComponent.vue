<template>
  <div class="col">
      <font-awesome-icon class="icon" :icon="icone" />
  </div>

</template>

<script>
export default {
    name: 'SiteFooterElementAbout',
    props:{
        icone: String
        
    },
    data() {
    return {
      
    };
  }
}
</script>

<style lang="scss" scoped>
h6{
    color: white;
}

.icon{
    color: white;
    font-size: 22px;
    margin-top: 25px;
}

</style>