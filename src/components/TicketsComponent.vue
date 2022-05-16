<template>
  <div class="bg_container d-flex flex-column justify-content-center">
      <h3 class="text-center pb-4">TICKETS</h3>
      <div class="container">
          <div class="row .row-cols-3">
          <div class="col">
              <div class="tickets_card text-center">
                  <div class="header_tickets p-4">
                      <h5>ONE DAY PASS</h5>
                      <h6 class="mb-0">FREE</h6>
                  </div>
                  <div class="body_tickets p-4 d-flex flex-column">
                      <i>One day Access</i>
                      <i>Cofee Break</i>
                      <i>Lunch (International Buffet)</i>
                      <i>Document Sheets</i>
                      <i class="mb-0">50USD Voucher For Next Event</i>
                  </div>
                  <div class="footer_tickets p-3">
                      <p class="mb-0">BOOK NOW</p>
                  </div>
              </div>
          </div>
          <div class="col">
              <div class="tickets_card text-center">
                  <div class="header_tickets p-4">
                      <h5>FOUR DAY PASSES</h5>
                      <h6 class="mb-0">750.00 USD</h6>
                      <div class="featured">Featured!</div>
                  </div>
                  <div class="body_tickets p-4 d-flex flex-column">
                      <i>Four day Access</i>
                      <i>Cofee Break</i>
                      <i>Lunch (International Buffet)</i>
                      <i>Document Sheets</i>
                      <i class="mb-0">100USD Voucher For Next Event</i>
                  </div>
                  <div class="footer_tickets p-3">
                      <p class="mb-0">BOOK NOW</p>
                  </div>
              </div>
          </div>
          <div class="col">
              <div class="tickets_card text-center">
                  <div class="header_tickets p-4">
                      <h5>TWO DAY PASS</h5>
                      <h6 class="mb-0">580.00 USD</h6>
                  </div>
                  <div class="body_tickets p-4 d-flex flex-column">
                      <i>Two day Access</i>
                      <i>Cofee Break</i>
                      <i>Lunch (International Buffet)</i>
                      <i>Document Sheets</i>
                      <i class="mb-0">70USD Voucher For Next Event</i>
                  </div>
                  <div class="footer_tickets p-3">
                      <p class="mb-0">BOOK NOW</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SiteTickets'
}
</script>

<style lang="scss" scoped>
.bg_container{
    background-image: url(@/assets/img/ticket-bg.jpg);
    height: 700px;
    background-position: center;
    h3{
        color: white;
        font-weight: 600;
        font-size: 36px;
    }
    .header_tickets{
        background-color: #E9E9E9;
        position: relative;
        overflow: hidden;
        
        .featured{
            background-color: #F72B0C;
            color: white;
            position: absolute;
            top: 65px;
            right: -25px;
            padding: 8px 0;
            font-size: 13px;
            text-align: center;
            width: 128px;
            transform: rotate(45deg);
            transform-origin: 100% 0%;
        }
    }
    h5{
        font-size: 19px;
    }
    h5,h6{
        font-weight: 600;
    }
    h6{
        color: $scarlet;
    }
    i{
        font-size: 15px;
    }
    p{
        font-size: 13px;
    }
    .body_tickets{
        background-color: #F9F9F9;
        i{
            color: $gray;
            padding: 10px;
        }
    }
    .footer_tickets{
        background-color: $scarlet;
        p{
            font-weight: 600;
            color: white;
        }
    }
}
</style>