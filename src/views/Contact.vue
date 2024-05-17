<template>
  <div id="contact">
    <div class="contact-us">
    </div>
    <h1 class="contact-header">
      Contact
    </h1>
    <ContactInfo></ContactInfo>
    <Location></Location>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import ContactInfo from '../components/ContactInfo.vue'
import Location from '../components/Location.vue'

export default {
  components:{
    ContactInfo,
    Footer,
    Location
  }
}
</script>

<style scoped>
   #contact{
    position: relative;
    width: 100%;
    height: 98vh;
  }

  .contact-us{
    background-image: url("../assets/adda_jazmin-quaynor-35847.jpg");
    height: 40vh;
    background-size: cover;
    filter: brightness(70%);
}

.contact-header{
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

@media only screen and (min-width: 991px){
  .contact-us{
    height: 60vh;
    background-size: 100% 80vh;
    filter: brightness(50%);
}

.contact-header{
    font-size: 4rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>