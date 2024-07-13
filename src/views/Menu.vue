<template>
  <div id="menu">
    <div class="menu-grid">
    </div>
    <h1 class="menu-header">
        Menu: Grid
      </h1>
      <div class="menu-container">
        <div v-motion :initial="{ opacity: 0, y: 100}" :visible-once="{ opacity:1, y:0}">
          <h2>Menu</h2>
          <h1>Breakfast</h1>
          <div class="gold-line"> </div>
          <div class="gold-line"> </div>
          <div class="menu-item">
          <div v-for="(item, index) in breakfasts" :key="item" :index="index" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
            <img :src="require('../assets/menu/'+ item.image)" alt="">
            <h2 class="item-title">{{ item.title }}</h2>
            <p>{{ item.ingredients }}</p>
          </div>
        </div>
        </div>
        <div v-motion :initial="{ opacity: 0, y: 300}" :visible-once="{ opacity:1, y:0}">
          <h2>Menu</h2>
          <h1>Lunch</h1>
          <div class="gold-line"> </div>
          <div class="gold-line"> </div>
          <div class="menu-item">
          <div v-for="(item, index) in lunchs" :key="item" :index="index" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
            <img :src="require('../assets/menu/'+ item.image)" alt="">
            <h2 class="item-title">{{ item.title }}</h2>
            <p>{{ item.ingredients }}</p>
          </div>
        </div>
        </div>
        <div v-motion :initial="{ opacity: 0, y: 300}" :visible-once="{ opacity:1, y:0}">
          <h2>Menu</h2>
          <h1>dinner</h1>
          <div class="gold-line"> </div>
          <div class="gold-line"> </div>
          <div class="menu-item">
          <div v-for="(item, index) in dinners" :key="item" :index="index" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
            <img :src="require('../assets/menu/'+ item.image)" alt="">
            <h2 class="item-title">{{ item.title }}</h2>
            <p>{{ item.ingredients }}</p>
          </div>
        </div>
        </div>
        
      </div>
      <Footer></Footer>
  </div>
  
</template>

<script>
import axios from "axios"
import Footer from "../components/Footer.vue"

export default {
  data(){
    return{
      breakfasts: [],
      lunchs:[],
      dinners:[]
    }
  },
  async mounted(){
     let breakfasts = await axios.get("https://delicious-cafe.onrender.com/breakfast")
     this.breakfasts = breakfasts.data

     let lunchs = await axios.get("https://delicious-cafe.onrender.com/lunch")
     this.lunchs = lunchs.data

     let dinners = await axios.get("https://delicious-cafe.onrender.com/dinner")
     this.dinners = dinners.data
  },
  components: {
    Footer
  }
}
</script>

<style scoped>
  #menu{
    position: relative;
    width: 100%;
    height: 98vh;
  }

  .menu-grid{
    background-image: url("../assets/ian-baldwin-49824.jpg");
    height: 40vh;
    background-size: cover;
    filter: brightness(70%);
  }

  #menu .menu-header{
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

  #menu .menu-container{
    margin-bottom: 10vh;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    height: max-content;
    text-align: center;
  }

  .menu-container > div{
    margin-top: 10vh;
  }

  .menu-container h2{
    font-family: 'Parisienne', cursive;
    color: #DFA25F;
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
  }

  .menu-container h1{
    margin: 0;
    font-family: 'Oswald', sans-serif;
    color: #000;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .menu-container .gold-line{
    border-bottom: 1.5px solid #DFA25F;
    margin-bottom: 3px;
    max-width: 70px;
    margin-left: auto;
    margin-right: auto;
  }

  .menu-container .menu-item{
    display: grid;
    margin-top: 3vh;
  }

  .menu-item img{
    margin-top: 2.5vh;
    width: 100%;
  }

  .menu-item .item-title{
    font-family: 'Oswald', sans-serif;
    font-size: .9rem;
    text-align: left;
    text-transform: uppercase;
    color: #000;
    letter-spacing: 1px;
    margin: 0;
    width: 100%;
  }

  .menu-item p{
    width: 100%;
    text-align: left;
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 300;
    font-family: 'Prompt', sans-serif;
    font-size: 0.75rem;
    text-transform: capitalize;
  }

@media only screen and (min-width: 991px){

  .menu-grid{
    height: 60vh;
    background-size: 100% 80vh;
  }

  #menu .menu-header{
    font-size: 4rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  #menu .menu-container{
    width: 60%;
  }

  .menu-container h2{
    font-size: 2.7rem;
  }

  .menu-container h1{
    font-size: 2.4rem;
  }

  .menu-container .menu-item{
    grid-template-columns: auto auto auto;
    grid-gap: 2vw;
  }

  .menu-item img{
    margin-left: -5px;
    width: 18vw;
  }

  .menu-item .item-title{
    font-size: 1rem;
  }

  .menu-item p{
    width: 18vw;
    font-size: 0.8rem;
  }
}

</style>
