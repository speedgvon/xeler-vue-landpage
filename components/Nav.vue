<template>
    <nav class="navbar main-navigation navbar-fixed-top has-shadow">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand dark-text" href="#"><img src="../assets/xeler.png" alt="logo"></a>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
              <ul class="nav navbar-nav navbar-right">
                <li><a class="btn-home" href="#">Sign in</a></li>
                <li><a class="btn-services" href="#">Sign up</a></li>
                <li><a href="#" class="btn btn-default btn-outline gradient-btn invisible">Download Now</a></li>
              </ul>
              
            </div>
          </div>
        </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Nav',
  mounted(){
    this.$nextTick(()=> {
       $(window).on('scroll', function () {
        var wScroll = $(window).scrollTop();

        if (wScroll > 0) {
            $('.navbar').addClass('sticky');
            $('btn-home').addClass('')
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
    })
  },
}
</script>
<style scoped>
  .btn-home {
    padding: 5px 10px; 
    border-radius: 10px; 
    margin-top: 10px;
  }
  .btn-services {
    padding: 5px 10px; 
    border-radius: 10px; 
    border: solid 1px; 
    margin-top: 10px;
  }
</style>
