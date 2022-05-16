<template>
    <div class="bg_jumbo d-flex align-items-center">
        <div class="container text-center">
            <div class="row row-cols-4">
                <div class="col">
                    <div class="square_opacity-1 d-flex flex-column justify-content-center">
                        <div class="font_size">3339</div>
                        <p>DAYS</p>
                    </div>
                </div>
                <div class="col">
                    <div class="square_opacity-2 d-flex flex-column justify-content-center">
                        <div class="font_size">18</div>
                        <p>HOURS</p>
                </div>
                </div>
                <div class="col">
                    <div class="square_opacity-3 d-flex flex-column justify-content-center">
                        <div class="font_size">28</div>
                        <p>MINS</p>
                </div>
                </div>
                <div class="col">
                        <div class="square_opacity-4 d-flex flex-column justify-content-center">
                        <div class="font_size">17</div>
                        <p>SECS</p>
                </div>
                </div>
            </div>
            <h3 class="mt-5 mb-5">SUBSCRIBE FOR UPDATES</h3>
            
            <form  class="mb-3 d-flex justify-content-center">
                <input type="email" class="form-control w-50" id="exampleInputEmail1" placeholder="Please fill your email" aria-describedby="emailHelp">
                <button type="button" class="btn btn-primary color_button px-4 py-3 ms-5">SUBSCRIBE</button>
            </form> 
                
        </div>
    </div>

</template>

<script>
export default {
    name: 'SiteJumbo',   
    components: {
        
  }
}
</script>

<style lang="scss" scoped>
.bg_jumbo{
    background-image: url(@/assets/img/coutdown-bg1.jpg);
    background-repeat: no-repeat;
    height: 650px;
    background-size: cover;
    background-position: center;
}.container{
    h3{
        color: black;
        font-size: 20px;
        font-weight: 600;
    }
    .color_button{
        background-color: $scarlet;
        border-color: $scarlet;
        font-weight: 600;
        box-shadow: 0px 5px 0px 0px $darkVibrant;
    }

    [class|=square_opacity]{
        background-color: rgba(47, 47, 46, 0.9);
        width: 250px;
        height: 200px;
        color: white;
        border-radius: 10px;
        font-size: 20px;
    }
    .square_opacity-2{
        background-color: rgba(47, 47, 46, 0.8);
    }
    .square_opacity-3{
        background-color: rgba(47, 47, 46, 0.6);
    }
    .square_opacity-4{
        background-color: rgba(47, 47, 46, 0.4);
    }
    .font_size{
        font-size: 60px;
        font-weight: 600;
    }
    input{
        color: red;
        padding: 20px;
    }
    ::placeholder{
        color: $cloud;
    }

}
</style>
