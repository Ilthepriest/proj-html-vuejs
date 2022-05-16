<template>
  <div>
      <h6>{{title}}</h6>
      <div class="d-flex align-items-center py-1">
        <font-awesome-icon class="icon" :icon="icone" />
        <p class="ms-3 mb-0">{{content}}</p>
      </div>
      
      
  </div>
</template>

<script>
export default {
    name: 'SiteFooterElementNews',
    props:{
        title: String,
        content: String,
        icone: String
    }
}
</script>

<style lang="scss" scoped>
.icon{
    color: white;
    font-size: 10px;
}
p{
  font-size: 11px;
}
</style>