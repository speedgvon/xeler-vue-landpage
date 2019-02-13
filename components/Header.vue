<template>
    <div id="home" class="header-3 demo-main new-demo has-gradient">
          <div class="container">
            <div class="header-3-content row">
              <div class="columna-1 col-md-5 col-sm-12">
                  <p class="lead">Leader in Cryptocurrency Exchange</p>
                <h1 class="has-line mb-20 dark-text"><span class="bold">BUY AND SELL</span> <span class="digital">Digital currency</span> </h1>
                 <div class="subscribe-newsletter">
                <form>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <input type="text" placeholder="Enter your Email Address">
                  <label><input type="submit" class="more-btn" value="Get Started"></label>
                </form>
             </div>
              </div>
              <div class="col-md-7 hidden-sm hidden-xs">          
              </div>
            </div>
          <div class="row">
            <p class="crypto">Cryptocurrency</p>
            <div class="crypto-column service-box-one col-md-2 col-sm-6 col-xs-12" v-for="moneda in coins" :key="moneda.id">
              <div class="icon-box"><i :class="'icono-'+ moneda.icono"></i></div>
              <div class="inner-box text-left">
                  <h5>{{moneda.name}}</h5>
                  <div class="text">{{moneda.buy}}<i class="fa fa-arrow-up"></i></div>
              </div>
            </div>
          </div>
          </div>
      </div>
</template>


<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Header',
  data() {

    return {
      coins: [],
      intervalo: null
    }
  },
  mounted(){
    this.monedas()
  },
  beforeMount(){
    this.intervalo = setInterval (()=> {
      this.monedas()
    }, 5000)
  },
    methods: {
      monedas() {
        axios.get('https://api.globalcoins.co/v1/ticker')
        .then((respuesta => {
          this.coins = respuesta.data.data
          console.log(respuesta.data.data)
        }))
      }
    }
}
</script>

<style>

    .digital {
      font-size: 1.1em;
    }

    .crypto-column {
      margin-right: 30px;
    }

    .crypto {
      margin-left: 15px;
    }

    .fa-arrow-up {
      float: right;
      padding-right: 10px;
    }
    
    .service-box-one {
    padding-right: 5px !important;
    padding-left: 5px !important;
    }

    .fa-envelope {
    padding-left: 10px;
  }
    .fa {
      margin-left: 10px;
    }
  .icono-bitcoin{
    padding: 20px;
    background-position: 5px 30%;  
    background-repeat: no-repeat;
    background-image: url("../assets/btc.png");
}
.icono-bitcoin-cash{
    padding: 20px;
    background-position: 5px 30%;  
    background-repeat: no-repeat;
    background-image: url("../assets/bch.png");
}
.icono-ethereum{
    padding: 20px;
    background-position: 5px 30%;  
    background-repeat: no-repeat;
    background-image: url("../assets/eth.png");
}
.icono-litecoin{
    padding: 20px;
    background-position: 5px 30%;  
    background-repeat: no-repeat;
    background-image: url("../assets/ltc.png");
}
.icono-dash{
    padding: 20px;
    background-position: 5px 30%;  
    background-repeat: no-repeat;
    background-image: url("../assets/dash.png");
}
</style>
