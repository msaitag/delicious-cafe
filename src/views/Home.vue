<template>
  <div id="homePage">
    <carousel id="carousel" v-for="(image, index) in images" 
    :key="image"
    :index="index"
    :visibleImage="visibleImage">

    <img class="slider" :src="require('../assets/'+image)">

    <carousel-text v-for="(text, index) in texts" 
    :key="text"
    :index="index"
    :visibleImage="visibleImage">

    <div class="h3">{{ text.h1 }}</div>
    <div class="h1">{{ text.h2 }}</div>
    <div class="gold-line"></div>
    <div class="p">{{ text.p }}</div>
    <router-link :to="{link :text.link}"><button class="btn">{{text.btn}}</button></router-link>

    </carousel-text>
    <ul>
      <li><a href=""><img class="phone-icon" src="../assets/icons/icons8-phone-30.png" alt=""><span class="phone-span">90 (553) 820-78-89</span></a></li>
      <li class="social-acc"><a href="https://twitter.com/"><img src="../assets/icons/icons8-twitter-30.png" alt=""></a><a href="https://www.facebook.com/"><img src="../assets/icons/icons8-facebook-f-30.png" alt=""></a><a href="https://www.instagram.com/"><img src="../assets/icons/icons8-instagram-30.png" alt=""></a></li>
    </ul>
  </carousel>
  <button class="down-arrow"><img src="../assets/icons/icons8-expand-arrow-30.png" alt=""></button>
  </div>
  <new-flavors></new-flavors>
  <special-dishes></special-dishes>
  <contact-us></contact-us>
  <beautiful-interior></beautiful-interior>
  <from-menu></from-menu>
  <happy-hour></happy-hour>
  <book-table></book-table>
  <with-love></with-love>
  <gallery></gallery>
  <location></location>
  <Footer></Footer>
</template>

<script>
import NewFlavors from '../components/NewFlavors.vue'
import Carousel from '../components/Carousel.vue'
import CarouselText from '../components/CarouselText.vue'
import SpecialDishes from '../components/SpecialDishes.vue'
import ContactUs from '../components/ContactUs.vue'
import BeautifulInterior from '../components/BeautifulInterior.vue'
import FromMenu from '../components/FromMenu.vue'
import HappyHour from '../components/HappyHour.vue'
import BookTable from '../components/BookTable.vue'
import WithLove from '../components/WithLove.vue'
import Gallery from '../components/Gallery.vue'
import Location from '../components/Location.vue'
import Footer from '../components/Footer.vue'

export default {
  data(){
    return {
      images: [
        'kris-atomic-3b2tADGAWnU-unsplash.jpg',
        'breakslow-UMUCQcDdLws-unsplash.jpg',
        'mahdiar-mahmoodi-0XmMGAsIVvc-unsplash (1).jpg'
      ],

      texts: [{h1:"Welcome to", h2:"delicious café", p:"Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history.", btn:"Contact", link: "/contact"},
      {h1:"Explore", h2:"tasty menu dishes", p:"Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history2.", btn:"View Menu Items", link: "/menu"}, 
      {h1:"Join to", h2:"special events", p:"Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history3.", btn:"Learn More", link: "/blog"}],

      visibleImage : 0
      
    }
  },
  components : {
    Carousel,
    CarouselText,
    NewFlavors,
    SpecialDishes,
    ContactUs,
    BeautifulInterior,
    FromMenu,
    HappyHour,
    BookTable,
    WithLove,
    Gallery,
    Location,
    Footer
  },
  beforeMount(){
    setInterval(()=>{
      if(this.visibleImage == 2){
        this.visibleImage = 0
      }else{
        this.visibleImage ++
      }
    }, 7000)
  }

}
</script>

<style scoped>
  #homePage {
    width: 100%;
    height: 98vh;
    position: relative;
    }
  
  #homePage .slider{
    object-fit: cover;
    width: 100%;
    height: 98vh;
    object-position: 100% 50%;
    filter: brightness(60%);
  }
  #homePage .h3{
    font-family: 'Parisienne', cursive;
    color: #DFA25F;
    font-weight: 100;
    font-size: 3rem;
    margin: 0;
    padding: 0;
  }
  #homePage .h1{
    margin: 0 0 2vh 0;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0;
    font-size: 2rem ;
  }

  .gold-line{
      border-bottom: 1.5px solid #DFA25F;
      border-top: 1.5px solid #DFA25F;
      margin-bottom: 10px;
      max-width: 70px;
      height: 5px;
      margin-left: auto;
      margin-right: auto;
    }

  #homePage .p{
    margin: 3vh 0 0 0;
    color: #fff; 
    font-weight: 300;
    font-family: 'Prompt', sans-serif;
    font-size: .9rem;
  }
  #homePage .btn{
    margin-top: 40px;
    padding: 15px 30px;
    border-radius: 40px;
    border: none;
    color: #fff;
    background-color: #DFA25F;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;
    font-family: 'Prompt', sans-serif;
  }
  #homePage .btn:hover{
    cursor: pointer;
    background-color: #232D41;
  }

  #carousel ul{
    position: absolute;
    bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }

  #carousel .slider{
      object-fit: fill;
    }

  #carousel ul li a{
    display: flex;
    align-items: center;
    text-decoration: none;
    width: max-content;
  }
  #carousel .phone-icon{
    width: 1.6rem;
    margin-right: 0px ;
  }

  #carousel ul li span{
    color: #fff;
    margin-bottom: 2px;
    font-size: 1rem ;
  }
  #carousel ul li a:hover .phone-span{
    text-decoration: underline;
  }

  #carousel .social-acc{
    display: flex;
  }
  #carousel .social-acc a{
    margin-left: 10px;
  }

  #carousel .social-acc img{
    width: 2.5rem;
    border: solid rgb(255, 255, 255, 0.5);
    border-width: thin;
    border-radius: 5px;
    padding: 10px;
    transition: 0.3s;
  }

  #carousel .social-acc img:hover{
    background-color: #DFA25F;
    
  }

  .down-arrow{
    position: absolute;
    bottom: -30px;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 50px;
    border: none;
    border-radius: 100%;   
    background-color: #fff;
    cursor: pointer;
    text-align: center;
  }

  .down-arrow img{
    width: 1.5rem;
    display: flex;
    left: 50%;
    transform: translateX(1.1rem);
    margin-top: -20px;
  }

@media only screen and (min-width: 991px) {

  #homePage .h3{
    font-size: 4rem;
  }

  #homePage .h1{
    font-size: 4.7rem;   
    margin: 0; 
  }

  #homePage .p{
    margin: 0;
    font-size: 1rem;
  }

  #carousel ul{
    width: 60%;
  }

  #carousel .phone-icon{
    margin-right: 12px;
  }

  #carousel ul li span{
    font-size: 1.1rem;
  }
}
</style>
