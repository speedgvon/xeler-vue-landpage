<template>
   <section id="services" class="special-feat padding-top-small padding-bottom-small">
      <h2 class="has-line dark-text"> <span class="manage">Why you should choose us</span></h2> 
         <div class="container">
            <div class="col-md-4 col-sm-6 testimonials-style-two">
                  <div class="item ">
                     <div class="testimonial-item">
                        <div class="inner-box">
                           <figure class="author-thumb img-circle"><img class="img-circle" src="../assets/a.png" alt="image"></figure>
                           <div class="info">Instant trading</div>
                           <div class="text">Once your deposit is confirmed, you can start buying and selling Bitcoin, Ethereum, Litecoin and other cryptocurrency second after. </div>
                        </div>
                     </div>
                  </div>
               </div>
            <div class="col-md-4 col-sm-6 testimonials-style-two">
                  <div class="item ">
                     <div class="testimonial-item">
                        <div class="inner-box">
                           <figure class="author-thumb img-circle"><img class="img-circle" src="../assets/b.png" alt="image"></figure>
                           <div class="info">Instant KYC</div>
                           <div class="text">All our fees are transparent, upfront and listen when you make a purchase</div>
                        </div>
                     </div>
                  </div>
               </div>
            <div class="col-md-4 col-sm-6 testimonials-style-two">
                  <div class="item ">
                     <div class="testimonial-item">
                        <div class="inner-box">
                           <figure class="author-thumb img-circle"><img class="img-circle" src="../assets/c.png" alt="image"></figure>
                           <div class="info">Most Secure</div>
                           <div class="text">To keep your funds secure, we store 98% of digital funds in an offline, secure wallet.</div>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
   </section>
</template>

<style scoped>
h2 {
   display: grid;
}
span {
   font-weight: 600;
   font-size: 30px;
}
img {
   width: 100px;
}
</style>

<script>
export default {
  name: 'Services',
  props: {
    msg: String
  }
}
</script>


