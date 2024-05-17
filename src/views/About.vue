<template>
  <div id="about">
    <div class="about-us">
    </div>
    <h1 class="about-header">
      about us
    </h1>
    <WithLove></WithLove>
    <Gallery></Gallery>
    <get-in-touch></get-in-touch>
    <Footer></Footer>
  </div>
</template>

<script>
import WithLove from '../components/WithLove.vue';
import Gallery from '@/components/Gallery.vue';
import Footer from '@/components/Footer.vue';
import GetInTouch from '@/components/GetInTouch.vue';

export default {
  components:{
    WithLove,
    Gallery,
    Footer,
    GetInTouch
  }
}
</script>

<style scoped>
  #about{
    position: relative;
    width: 100%;
    height: 98vh;
  }
  
  .about-us{
    background-image: url("../assets/adda_jazmin-quaynor-35847.jpg");
    height: 40vh;
    background-size: cover;
    filter: brightness(70%);
}

.about-header{
    font-size: 2rem;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    display: flex;
    top: 30%;
    left: 50%;
    height: 60vh;
    transform: translate(-50%, -30%);
  }

@media only screen and (min-width:991px){
  .about-us{
    height: 60vh;
    background-size: 100% 80vh;
    filter: brightness(50%);
    margin-bottom: 10px;
}

.about-header{
    font-size: 4rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>