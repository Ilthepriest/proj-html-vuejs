<template>
  <div>
      <h6 class="mb-4">{{title}}</h6>
      <p>{{content}}</p>
  </div>
</template>

<script>
export default {
    name: 'SiteFooterElementGet',
    props:{
        title: String,
        content: String,
    }
}
</script>

<style lang="scss" scoped>
p{
    font-size: 13px;
}

</style>