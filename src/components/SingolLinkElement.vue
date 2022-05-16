<template>
  <div class="ancor_tag">
    <li>
        <a href="#">{{type}}</a>
    </li>
  </div>
</template>

<script>
export default {
    name: 'SiteLinkComponent',
    props: {
        type: String
    }  
}
</script>

<style lang="scss" scoped>
.ancor_tag:first-child{
    a{
        color: $lightVibrant;
        border-bottom: 3px solid $lightVibrant;
        padding-bottom: 10px;
    }
}

.ancor_tag li a:hover{
    border-bottom: 3px solid $lightVibrant;
    padding-bottom: 10px;
    color: $scarlet;
}
.ancor_tag{
    li{
        list-style: none; 
        padding: 0 10px;
    }
    a{
        text-decoration: none;
        color: $gray;
        font-weight: bold;
        border-bottom: 1px solid transparent;
        font-size: 13px;
        padding: 0 20px;
    }
}

</style>