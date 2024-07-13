<template>
  <div id="special-dishes">
    <div class="special-dishes-child" v-motion :initial="{ opacity: 0, y: 100}" :visible-once="{ opacity:1, y:0}">
        <h2>Menu</h2>
        <h1>Special Dishes</h1>
        <div class="gold-line"></div>
        <div class="gold-line"></div>
        <div>
        <div class="menu-section" v-for="(coffee, index) in coffees" :key="coffee" :index="index" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
            <div v-if="index < 3">
                <img :src="require('../assets/products/'+ coffee.link)" alt="">
                <div class="coffee-info">
                    <h4>{{ coffee.title }}</h4>
                    <p>{{ coffee.type }}</p>
                </div>
                
            
            </div>
            
        </div>
         </div>
        <button>View Full Menu</button>
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

     //   let results = await axios.get("http://localhost:3000/coffees");
       // this.coffees = results.data;

       // console.log(this.coffees)
   // }

}
</script>

<style scoped>
#special-dishes{
        padding: 50px 0;
        position: relative;
        width: 100%;
        z-index: 2;
        height: max-content;
        text-align: center;
        align-items: center;
    }

    #special-dishes::before{
        content: "";
        background-image: url("../assets/background_image.png");
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-size: cover;
    }

    #special-dishes > div{
        position: relative;
        margin-left: auto;
        margin-right: auto;
        height: max-content;
        text-align: center;
        width: 100%;
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
        margin-bottom: 3px;
        max-width: 70px;
        margin-left: auto;
        margin-right: auto;
    }

    #special-dishes button{
        padding: 15px 30px;
        border-radius: 40px;
        border: none;
        background-color: #DFA25F;
        color: #fff;
        font-size: 0.9rem;
        transition: background-color 0.3s ease;
        font-family: 'Prompt', sans-serif;
    }

    #special-dishes button:hover{
        background-color: #232D41;
        cursor: pointer;
    }

    .menu-section{
        margin-top: 50px;
    }

    .menu-section img{
        height: 250px;
        width: 95%;
        object-fit: fill;
        margin-top: -10px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }

    .coffee-info h4{
        margin-bottom: -10px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 1px;
        word-spacing: 3px;
        display: flex;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .coffee-info p{
        font-weight: 500;
        text-transform: capitalize;
        font-size: 0.8rem;
        letter-spacing: 1px;   
        color: rgba(0, 0, 0, 0.4);
        display: flex;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

@media only screen and (min-width: 991px){
    #special-dishes{
        height: max-content;
        display: flex;
    }

    #special-dishes > div{
        width: 60%;
    }

    h2{   
        font-size: 2.7rem;
    }

    h1{
        font-size: 2.4rem;
    }

    .menu-section{
        float: left;
    }

    .menu-section img{
        height: 18vw;
        width: 18vw;
        margin: 20px .8vw -10px .8vw;
    }
    
    .coffee-info{
        padding: 0px 20px 20px 20px;
    }

    .coffee-info h4{
        margin-bottom: -5px;
        width: 100%;
    }
    .coffee-info p{
        width: 100%;
    }
}
</style>
