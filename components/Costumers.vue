<template>
   <section id="test" class="testimonial padding-top-small padding-bottom-small">
       <h2 class="has-line dark-text"> <span class="manage">Read what our coustumers says about us.</span></h2>   
          <div class="container text-center">
                  <div class="col-md-6 col-sm-8 col-xs-12 testimonials-style-two">
                     <!--testimonial Item-->
                     <div class="item ">
                        <div class="testimonial-item has-shadow">
                           <div class="inner-box">
                              <img class="img-circle" src="../assets/author-thumb-1.jpg" alt="image">
                              <div class="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative strategy collaborative foster further the overall value proposition. </div>
                              <div class="info">Thomas Barkley - <span class="designation">Founder</span></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-6 col-sm-8 col-xs-12 testimonials-style-two">
                     <!--testimonial Item-->
                     <div class="item ">
                        <div class="testimonial-item has-shadow">
                           <div class="inner-box">
                               <img class="img-circle" src="../assets/author-thumb-2.jpg" alt="image">
                              <div class="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative strategy collaborative foster further the overall value proposition. </div>
                              <div class="info">Thomas Barkley - <span class="designation">Founder</span></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6 col-sm-8 col-xs-12 testimonials-style-two">
                     <!--testimonial Item-->
                     <div class="item ">
                        <div class="testimonial-item has-shadow">
                           <div class="inner-box">
                              <img class="img-circle" src="../assets/author-thumb-1.jpg" alt="image">
                              <div class="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative strategy collaborative foster further the overall value proposition. </div>
                              <div class="info">Thomas Barkley - <span class="designation">Founder</span></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-6 col-sm-8 col-xs-12 testimonials-style-two">
                     <!--testimonial Item-->
                     <div class="item ">
                        <div class="testimonial-item has-shadow">
                           <div class="inner-box">
                               <img class="img-circle" src="../assets/author-thumb-2.jpg" alt="image">
                              <div class="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative strategy collaborative foster further the overall value proposition. </div>
                              <div class="info">Thomas Barkley - <span class="designation">Founder</span></div>
                           </div>
                        </div>
                     </div>
                  </div>
          </div>               
        </section>
</template>

<script>
export default {
  name: 'Costumers',
  props: {
    msg: String
  }
}
</script>

<style scoped>
    h2 {
   display: grid;
}
    section {
        background-color: #f8faff;
    }
    img {
        float: left;
        margin-left: -75px;
    }
    .col-md-6 {
    width: 400px;
    margin-top: 40px;
    margin-left: 60px;
}
</style>

