<template>
  <div id="from-menu">
    <div class="menu-content" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
    <h2>More Dishes</h2>
    <h1>From Our Menu</h1>
    <div class="gold-line"></div>
    <div class="menu-items">
    <div class="menu-products" v-for="(coffee, index) in coffees" 
    :key="coffee" 
    :index="index">
        <div class="menu-condition" v-if="index < 4">
        <img :src="require('../assets/products/'+ coffee.link)" alt="">
        <div>
            <h3>{{ coffee.title }}</h3>
            <p>{{ coffee.type }}</p>
        </div>
    </div>
    </div>
    </div>
      <router-link to="/menu">
          <button>View Full Menu</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            coffees: [{"title": "Ice Americano", "id": 1, "price": 20, "type": "cold", "link": "ice-americano.jpg"},
        {"title": "Filter Coffee", "id": 2, "price": 25, "type": "hot", "link": "filter-coffee.jpg"},
        {"title": "Machiato", "id": 3, "price": 15, "type": "hot", "link": "macchiato.jpg"},
        {"title": "Americano", "id": 4, "price": 22, "type": "hot", "link": "americano.jpg"},
        {"title": "Cool Lime", "id": 5, "price": 35, "type": "hot", "link": "cool-lime.jpg"}]
        }
    },
   // async mounted(){
     //   let results = await axios.get("http://localhost:3000/coffees")
       // this.coffees = results.data
   // }

}
</script>

<style scoped>
    #from-menu{
        width: 100%;
        z-index: 2;
        text-align: center;
        position: relative;
        background-color: #fff;
    }

    #from-menu .menu-content{
        margin-left: auto;
        margin-right: auto;
        height: max-content;
        padding: 40px 0;
        width: 95%;
    }

    .menu-items{
        margin-top: 2rem;
        display: grid;
        /* grid-template-columns: auto auto;
        justify-content: space-between; */
    }

    .menu-products .menu-condition{
        display: flex;
        margin: 1.5rem 0;
    }
    
    .menu-products img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        object-fit: fill;
        margin-right: 10px;
    }

    .menu-products .menu-condition div{
        font-family: 'Prompt', sans-serif;
        margin-left: 10px;
    }

    .menu-products h3{
        font-weight: 600;
        text-align: left;
        top: 0;
        text-transform: uppercase;
        font-family: inherit;
        font-size: .9rem;
        left: 0;
    }

    .menu-products p{
        text-align: left;
        bottom: 0;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 400;
        font-size: 0.8rem;
        text-transform: capitalize;
        font-family: inherit;
    }

    h2{
        font-family: 'Parisienne', cursive;
        color: #DFA25F;
        font-size: 2rem;
        font-weight: 500;
        margin: 0;
    }

    h1{
        margin: 0;
        font-family: 'Oswald', sans-serif;
        color: #000;
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .gold-line{
        border-bottom: 1.5px solid #DFA25F;
        border-top: 1.5px solid #DFA25F;
        margin-bottom: 3px;
        max-width: 70px;
        height: 5px;
        margin-left: auto;
        margin-right: auto;
    }

    #from-menu button{
        margin-top: 50px;
        padding: 15px 30px;
        border-radius: 40px;
        border: none;
        background-color: #DFA25F;
        color: #fff;
        font-size: 0.9rem;
        transition: background-color 0.3s ease;
        font-family: 'Prompt', sans-serif;
    }

    #from-menu button:hover{
        background-color: #232D41;
        cursor: pointer;
    }


@media only screen and (min-width: 991px){
    #from-menu{
        padding: 100px;
    }

    #from-menu .menu-content{
        width: 50%;
    }

    .menu-items{
        margin-top: 80px;
        grid-template-columns: auto auto;
        justify-content: space-between;
    }

    .menu-products h3{
        text-align: left;
        font-size: 1rem;
    }

    .menu-products p{
        font-size: 0.8rem;
    }

    h2{
        font-size: 2.7rem;
    }

    h1{
        font-size: 2.4rem;
    }
}
</style>
