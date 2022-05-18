<template>
  <div class="bg-container">
    <div class="container bg-container py-5">
      <div class="row row-cols-2 py-5 d-flex">
        <div class="col">
          <h3>SPEAKERS</h3>
        </div>
        <div class="col">
          <div class="arrow d-flex justify-content-end">
            <div
              class="
                square_arrow
                p-4
                d-flex
                justify-content-center
                align-items-center
                me-2
              "
              @click="scroll_left"
            >
              <font-awesome-icon icon="fa-solid fa-angle-left" />
            </div>
            <div
              class="
                square_arrow
                p-4
                d-flex
                justify-content-center
                align-items-center
              "
              @click="scroll_right"
            >
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row row-cols-4 py-5 text-center">
          <div class="col">
               <div class="orange position-relative">
                  <div class="icone">
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
                  </div>
                  <img src="@/assets/img/speaker-6.jpg" alt="">
                </div>
              <div class="speaker mt-4">
                    <div>PATRICK SPENCER</div>
                    <p>S&P Analyzer</p>
              </div>
          </div>
          <div class="col">
              <div class="orange position-relative">
                  <div class="icone">
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
                  </div>
                  <img src="@/assets/img/speaker-5.jpg" alt="">
                </div>
              <div class="speaker mt-4">
                    <div>JANET JONES</div>
                    <p>Newyorks Post's GM</p>
              </div>
          </div>
          <div class="col">
              <div class="orange position-relative">
                  <div class="icone">
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
                  </div>
                  <img src="@/assets/img/speaker-4.jpg" alt="">
                  </div>
              <div class="speaker mt-4">
                    <div>MICHAEL DOVER</div>
                    <p>Starbuck's CEO</p>
              </div>
          </div>
          <div class="col">
              <div class="orange position-relative">
                  <div class="icone">
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
                  </div>
                  <img src="@/assets/img/speaker-3.jpg" alt="">
                  </div>
              <div class="speaker mt-4">
                    <div>ANGELINA HOLY</div>
                    <p>Maxii's Manager</p>
              </div>
          </div>
      </div> -->
      <div class="row row-cols-4 d-flex flex-nowrap overflow wrapper">
        <div
          class="col"
          v-for="(speaker, index) in speakers[active].utente"
          :key="index"
        >
          <div class="orange position-relative">
            <div class="icone">
              <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
              <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
              <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
            </div>
            <img :src="speaker.photo" alt="" />
          </div>
          <div class="speaker mt-4">
            <div>{{ speaker.nome }}</div>
            <p>{{ speaker.mansione }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteSpeakers",
  data() {
    return {
      active: 0,
      speakers: [
        {
          utente: [
            {
              nome: "LAURENCE FRANCIS",
              mansione: "Google's UI Designer",
              photo:
                "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-8.jpg",
            },
            {
              nome: "JOHN SUPER DOE",
              mansione: "Yahoo's HR",
              photo:
                "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-7.jpg",
            },
            {
              nome: "PATRICK SPENCER",
              mansione: "S&P Analyzer",
              photo:
                "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-6.jpg",
            },
            {
              nome: "JANET JONES",
              mansione: "Newyork Post's GM",
              photo:
                "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-5.jpg",
            },
            {
              nome: "MICHAEL DOVER",
              mansione: "Starbuck's CEO",
              photo:
                "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-4.jpg",
            },
            {
              nome: "JANET JONES",
              mansione: "Newyork Post's GM",
              photo:
                "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-3.jpg",
            },
            {
              nome: "MATTHEW WHITE",
              mansione: "Facebook's Co-Founder",
              photo:
                "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-2.jpg",
            },
            {
              nome: "JONATHAN ELVES",
              mansione: "Twitter's Co-Founder",
              photo:
                "https://demo.goodlayers.com/thekeynote/wp-content/uploads/2014/12/speaker-1.jpg",
            },
          ],
        },
      ],
    };
  },
  methods: {
    scroll_left() {
      let content = document.querySelector(".wrapper");
      content.scrollLeft -= 330;
    },
    scroll_right() {
      let content = document.querySelector(".wrapper");
      content.scrollLeft += 330;
    },
  },
};
</script>

<style lang="scss" scoped>
.overflow {
  overflow-x: overlay;
}
::-webkit-scrollbar {
  background: transparent;
}
.icone .icon {
  margin-left: 7px;
  margin-right: 7px;
}
.icone {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: white;
  visibility: hidden;
}

.orange {
  background-color: rgba(242, 56, 26);
  width: 300px;
  border-radius: 10px;
}
[class*="orange"]:hover .icone {
  visibility: visible;
}
img:hover {
  opacity: 0.2;
}

.bg-container {
  background-color: #f3f3f3;
}
.square_arrow {
  width: 30px;
  height: 30px;
  background-color: $scarlet;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
h3 {
  font-weight: 600;
  font-size: 36px;
}
img {
  width: 300px;
  border-radius: 10px;
}
.speaker {
  div {
    font-weight: 600;
    font-size: 15px;
  }
  p {
    color: $gray;
    font-size: 13px;
    margin-top: 10px;
  }
}
</style>