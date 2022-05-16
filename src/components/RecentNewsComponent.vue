<template>
  <div class="container py-5">
    <div class="row row-cols-2">
      <div class="col">
        <h3>RECENT NEWS</h3>
      </div>
      <div class="col text-end">
        <i class="italic">Read All News</i>
      </div>
    </div>
    <div class="row row-cols-3">
      <div class="col">
        <img
          src="@/assets/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (2).jpg"
          alt=""
        />
        <div class="carD">
          <p class="mt-3">03 Dec 2013 / 0 Comments</p>
          <h6>SEDIAL EIUSMOD TEMPOR</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            aliquid amet officiis eligendi consectetur, dignissimos repellat eos
            cupiditate asperiores possimus!
          </p>
          <i class="italic">Read More</i>
        </div>
      </div>
      <div class="col">
        <img
          src="@/assets/img/photodune-8522811-speaker-at-business-conference-and-present (2).jpg"
          alt=""
        />
        <div class="carD">
          <p class="mt-3">03 Dec 2013 / 0 Comments</p>
          <h6>SEDIAL EIUSMOD TEMPOR</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            aliquid amet officiis eligendi consectetur, dignissimos repellat eos
            cupiditate asperiores possimus!
          </p>
          <i class="italic">Read More</i>
        </div>
      </div>
      <div class="col">
        <img
          src="@/assets/img/photodune-8797753-multiethnic-people-with-startup-business-t (2).jpg"
          alt=""
        />
        <div class="carD">
          <p class="mt-3">03 Dec 2013 / 0 Comments</p>
          <h6>SEDIAL EIUSMOD TEMPOR</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            aliquid amet officiis eligendi consectetur, dignissimos repellat eos
            cupiditate asperiores possimus!
          </p>
          <i class="italic">Read More</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteNews",
};
</script>

<style lang="scss" scoped>
.container {
  img {
    width: 400px;
  }
  .carD {
    width: 300px;
  }
}
h3{
  font-size: 26px;
  margin-bottom: 40px;
}
h3,h6{
    font-weight: 600;
}
h6{
  font-size: 18px;
}
.italic{
    color: $scarlet;
}
p{
    color: $gray;
    font-size: 13px;
}
i{
  font-size: 15px;
}
.carD p:first-child{
  font-size: 14px;
}
</style>