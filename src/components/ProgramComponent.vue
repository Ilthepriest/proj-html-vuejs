<template>
  <div>
      <div class="container py-5">
          <div class="row row-cols-3 py-4 color_text">
              <div class="col-3">
                  <h3>PROGRAM</h3>
              </div>
              <div class="col-6 text-star">
                  <p>This conference run trought all 4 days from 23-26 May 2016.</p>
                  <p>We also provide free lunch and coffee break in each day.</p>
              </div>
              <div class="col-3 d-flex justify-content-end">
                  <i class="italic">View Full Program</i>
              </div>
          </div>
          <!-- <div class="row row-cols-6">
              <div class="col square_day active">
                  <div class="ms-3">
                        <p class="mb-0">DAY 1</p>
                        <div>23 May 2016</div>
                  </div>
              </div>
              <div class="col square_day">
                  <div class="ms-3">
                        <p class="mb-0">DAY 2</p>
                        <div>23 May 2030</div>
                  </div>
              </div>
              <div class="col square_day">
                   <div class="ms-3">
                        <p class="mb-0">DAY 2</p>
                        <div>24 May 2030</div>
                  </div>
              </div>
              <div class="col square_day">
                   <div class="ms-3">
                        <p class="mb-0">DAY 2</p>
                        <div>25 May 2030</div>
                  </div>
              </div>
              <div class="col square_day">
                   <div class="ms-3">
                        <p class="mb-0">DAY 2</p>
                        <div>26 May 2030</div>
                  </div>
              </div>
              <div class="col square_day">
              </div>
          </div> -->
          <!-- <div class="row row.cols-2 bg_color color_text p-5">
              <div class="col">
                  <div class="d-flex flex-column orariDestinazioni">
                      <div class="d-flex">
                            <font-awesome-icon icon="fa-solid fa-clock" class="bg_icon" />
                            <p class="ms-4">09:00-10:30</p>
                      </div>
                      <div class="d-flex">
                          <font-awesome-icon icon="fa-solid fa-location-arrow" class="bg_icon" />
                          <p class="ms-4">ROOM A</p>
                      </div>
                      <div class="d-flex">
                          <font-awesome-icon icon="fa-solid fa-user" class="bg_icon" />
                          <p class="ms-4" id="color_froly">LAURANCE FRANCIS</p>
                      </div>
                  </div>
              </div>
              <div class="col-9 introduction">
                  <h5>WELCOMING AND INTRODUCTION</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At debitis totam quas similique culpa cumque, eos, sunt suscipit itaque, quod ad. Doloremque quam placeat saepe enim minus cupiditate nostrum distinctio, in voluptate provident odio voluptates. Sapiente, tempore sunt?</p>
                  <img src="@/assets/img/speaker-8-150x150.jpg" alt="">
              </div>
          </div> -->
            <div class="row row-cols-6">
                <div class="col square_day" v-for="(program, index) in programs" :key="index" @click="clickDay(index)">
                    <p class="ms-3">{{program.day}}</p>
                    <div class="ms-3">{{program.data}}</div>
                </div>
                <div class="rectangle_info bg_color color_text p-4 mb-1"  v-for="(program, index) in programs[active].content" :key="index">
                    <div class="row row-cols-2">
                        <div class="col-2 orariDestinazioni">
                            <div class="d-flex">
                                <font-awesome-icon icon="fa-solid fa-clock" class="bg_icon"  v-if="program.ore"/>
                                <p class="ms-3">{{program.ore}}</p>
                            </div>
                            <div class="d-flex">
                                <font-awesome-icon icon="fa-solid fa-location-arrow" class="bg_icon"  v-if="program.destinazione"/>
                                <p class="ms-3">{{program.destinazione}}</p>
                            </div>
                            <div class="d-flex">
                                <font-awesome-icon icon="fa-solid fa-user" class="bg_icon"  v-if="program.speaker"/>
                                <div class="d-flex flex-column">
                                    <p class="ms-3" id="color_froly">{{program.speaker}}</p>
                                    <p class="ms-3" id="color_froly">{{program.speaker2}}</p>
                                    <p class="ms-3" id="color_froly">{{program.speaker3}}</p>
                                </div>
                            </div>
                            </div>
                            
                        <div class="col-10 introduction">
                            <h5>{{program.title}}</h5>
                            <p>{{program.text}}</p>
                            <div id="color_froly" class="bold">{{program.oraPranzo}}</div>
                            <h2 class="bold">{{program.descrizione}}</h2>
                            <img :src="program.image" alt="">
                            <img :src="program.image2" alt="">
                            <img :src="program.image3" alt="">
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active: 0,
        programs:[
            {
                day: "DAY 1",
                data: "23 May 2016",
                content: [
                    {
                        ore: "09:00 - 10:30",
                        destinazione: "ROOM A",
                        speaker: "LAURENCE FRANCIS",
                        title: "WELCOMING AND INTRODUCTION",
                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur natus incidunt officiis ad nemo molestiae fuga quia corrupti dolores consequatur",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-8-150x150.jpg",
                        id: 213,
                    }
                ]
            },

            {
                day: "DAY 2",
                data: "23 May 2016",
                content: [
                    {
                        ore: "10:30 - 10:00",
                        destinazione: "ROOM ALEXANDER X",    
                        speaker:"PATRICK SPENCER",
                        speaker2: "JONATHAN ELVES",
                        title: "GATHERING DEMAND INFORMATION",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-6-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-1-150x150.jpg",
                        id: 2342,
                    },
                    {
                        oraPranzo: "12:00 - 13:00",
                        descrizione: "INTERMISSION & LUNCH BREAK"
                    },
                    {
                        ore: "13:00 - 14:30",
                        destinazione: "ROOM C",
                        speaker: "JANET JONES",
                        speaker2: "ANGELINA HOLY",
                        title: "SETTING UP YOUR BUSINESS PLAN",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-5-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-3-150x150.jpg",
                        id: 2342,
                    },
                    {
                        ore: "14:30 - 16:00",
                        destinazione: "ROOM C",
                        speaker: "MATTHEW WHITE",
                        title: "FINDING SUPPLIER",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-2-150x150.jpg",
                        id: 2342,
                    }
                ]
            },
            
            {
                day: "DAY 3",
                data: "24 May 2016",
                content: [
                    {
                        ore: "9:00 - 10:30",
                        destinazione: "ROOM A",
                        speaker: "JANET JONES",  
                        speaker2: "MICHAEL DOVER",
                        speaker3: "ANGELINA HOLY",
                        title: "DEALING WITH SUPPLIER",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-5-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-4-150x150.jpg",
                        image3: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-3-150x150.jpg",
                        id: 2672,
                    },
                    {
                        ore: "9:00 - 10:30",
                        destinazione: "ROOM D",
                        speaker: "JOHN SUPER DOE", 
                        speaker2: "PATRICK SPENCER",
                        title: "MARKETING THEORY",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-7-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-6-150x150.jpg",
                        id: 2672, 
                    },
                    {
                        ore: "10:30 - 12:00",
                        destinazione: "ROOM b",
                        speaker: "JOHN SUPER DOE",
                        speaker2: "JONATHAN ELVES",
                        title: "WHAT TO DO BEFORE START CREATING PRODUCT",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-7-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-1-150x150.jpg",
                        id: 2672,
                    },
                    {
                        oraPranzo: "12:00 - 13:00",
                        descrizione: "INTERMISSION & LUNCH BREAK"
                    },
                    {
                        ore: "13:00 - 14:30",
                        destinazione: "ROOM C",
                        speaker: "LAURENT FRANCIS", 
                        speaker2: "ANGELINA HOLY",
                        title: "CREATING PRODUCTIVITY 1",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-8-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-3-150x150.jpg",
                        id: 2672,
                    },
                    {
                        ore: "14:30 - 16:00",
                        destinazione: "ROOM C",
                        speaker: "ANGELINA HOLY",
                        speaker2: "JONATHAN ELVES",
                        title: "CREATING PRODUCTIVITY 2",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-3-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-1-150x150.jpg",
                        id: 2672,
                    }
                ]
            },
            {
                day: "DAY 4",
                data: "25 May 2030",
                content: [
                    {
                        ore: "10:00 - 12:00",
                        destinazione: "ROOM A",
                        speaker: "PATRICK SPENCER", 
                        speaker2: "MICHAEL DOVER",
                        title: "PRODUCT LINES",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-6-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-4-150x150.jpg",
                        id: 2672,
                    },
                    {
                        oraPranzo: "12:00 - 13:00",
                        descrizione: "INTERMISSION & LUNCH BREAK"
                    },
                    {
                        ore: "13:00 - 14:30",
                        destinazione: "ROOM D",
                        speaker: "ANGELINA HOLY",
                        title: "QUALITY CONTROL",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-3-150x150.jpg",
                        id: 2672, 
                    },
                    {
                        ore: "14:30 - 16:00",
                        destinazione: "ROOM D",
                        speaker: "JOHN SUPER DOE",
                        title: "FURNISHING PROCESS",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-7-150x150.jpg",
                        id: 2672,
                    }
                ]
            },
            {
                day: "DAY 5",
                data: "26 May 2030",
                content: [
                    {
                        ore: "09:00 - 10:30",
                        destinazione: "ROOM B",
                        speaker: "LAURENCE FRANCIS", 
                        speaker2: "JANET JONES",
                        title: "PRODUCT PRESENTATION",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-8-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-5-150x150.jpg",
                        id: 2672,
                    },
                    {
                        ore: "10:30 - 12:00",
                        destinazione: "ROOM C",
                        speaker: "MICHAEL DOVER",
                        title: "MARKETING YOUR PRODUCT",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-4-150x150.jpg",
                        id: 2672, 
                    },
                    {
                        oraPranzo: "12:00 - 13:00",
                        descrizione: "INTERMISSION & LUNCH BREAK"
                    },
                    {
                        ore: "13:00 - 14:30",
                        destinazione: "ROOM C",
                        speaker: "JOHN SUPER DOE",
                        speaker2: "PATRICK SPENCER",
                        title: "SOCIAL MEDIA CAN HELP",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-7-150x150.jpg",
                        image2: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-6-150x150.jpg",
                        id: 2672,
                    },
                    {
                        ore: "14:30 - 16:00",
                        destinazione: "ROOM A",
                        speaker: "MATTHEW WHITE",
                        title: "ENDING SESSION",
                        text: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                        image: "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-2-150x150.jpg",
                        id: 2672,
                    }
                ]
            },
            {

            }
        ],
        }
    }, 
     methods:{
        clickDay(i){
            this.active = i
            console.log("mi hai clickato");
        }
    }
}
</script>

<style lang="scss" scoped>
.bold{
    font-weight: 600;
    font-size: 26px;
}

.rectangle_info{
    width: 100%;
    height: 250px;
}
.square_day{
    padding: 10px;
    background-color: orangered;
    border-right: 1px solid $muted;
    cursor: pointer;
   p{
        color: white;
        font-size: 16px;
        font-weight: 600;
    }
    div{
        color: white;
        font-size: 13px;
    }
}
.active{
    background-color: #C72B11;
}
.bg_color{
    background-color: #F3F3F3;
}
.introduction{
    img{
        width: 70px;
        border-radius: 10px;
    }
    p{
        font-size: 13px !important;
    }
}
.color_text{
    p{
        color: $gray;
        font-size: 14px;
    }
}
.italic{
    color: $froly;
    font-size: 15px;
}
#color_froly{
    color: $froly;
}
.bg_icon{
    color: $gray;
    font-size: 15px;
}
h3{
    font-size: 36px;
    font-weight: 600;
}
h5{ 
    font-size: 22px;
}
.orariDestinazioni{
    p{
        font-size: 12px;
    }
}
</style>