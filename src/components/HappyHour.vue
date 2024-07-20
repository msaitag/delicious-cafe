<template>
  <div id="happy-hour">
    <ul>
        <li>
            <div class="delicious_food food-event" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
                <div>
                <h3>Delicious Food</h3>
                <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history.</p>
                  <router-link to="/menu">
          <button>View Menus</button>
        </router-link>
                
                </div>
            </div>
            <div class="special_events food-event" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
                <div>
                <h3>Special Events</h3>
                <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history.</p>
                  <router-link to="/blog">
          <button>Go to Blog</button>
        </router-link>
                </div>
            </div>
        </li>
        <li >
            <div class="welcome_atmosphere" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
                <h3>Welcoming Atmosphere</h3>
                <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn to add fish to their repertoire.</p>
            </div>
            <div class="happy_hour" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
                <span>15-18 PM</span>
                <h1>Happy Hour</h1>
                <h3>Buy 1 Drink, Get 1 Free</h3>
                <img src="../assets/icons8-cocktail-100.png" alt="">
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #happy-hour{
        padding: 40px 0;
        height: max-content;
        position: relative;
        z-index: 2;
    }

    #happy-hour::before{
        content: "";
        position: absolute;
        background-image: url("../assets/background_image.png");
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-size: cover;
    } 

    #happy-hour ul{
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        width: 95%;
        list-style-type: none;
        position: relative;
    }

    #happy-hour ul li:first-child{
        display: grid;
        text-align: center;
        margin-bottom: 30px;
    }

    #happy-hour ul li:last-child{
        display: grid;
    }

    #happy-hour .food-event{
        padding: 70px 5px;
        height: max-content;
        position: relative;
        margin-bottom: 20px;
    }

    #happy-hour .delicious_food::before{
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: cover;
        background-image: url("../assets/ontheroadcooking.png");
        filter: brightness(60%);
    }

    #happy-hour .food-event div{
        position: relative;
        color: #fff;
    }

    #happy-hour .food-event h3{
        text-transform: uppercase;
        font-size: 1.5rem;
        margin: 0;
    }

    #happy-hour .food-event p{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 1.3px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.8rem;
        line-height: 1.3rem;
        font-family: 'Prompt', sans-serif;
        font-weight: 500;
    }

    #happy-hour .special_events::before{
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: cover;
        position: absolute;
        background-image: url("../assets/small-mid-sizedbar.jpg");
        filter: brightness(60%);
    }

    #happy-hour button{
        margin-top: 10px;
        padding: 10px 20px;
        border-radius: 40px;
        border: none;
        background-color: #DFA25F;
        color: #fff;
        font-size: 0.75rem;
        transition: background-color 0.3s ease;
        font-family: 'Prompt', sans-serif;
    }

    #happy-hour button:hover{
        background-color: #fff;
        color: #000;
        cursor: pointer;
    }

    #happy-hour .welcome_atmosphere{
        background-color: #fff;
        padding: 20px 35px;
        box-shadow: grey 0.1px 0.1px 1px;
        border-left: 5px solid #DFA25F;
        margin-bottom: 30px;
        margin-top: -30px;
    }

    #happy-hour .welcome_atmosphere h3{
        text-transform: uppercase;
        font-size: 1.2rem;
    }

    #happy-hour .welcome_atmosphere p{
        font-family: 'Prompt', sans-serif;
        font-size: 0.9rem;
        line-height: 1.4rem;
        color: rgba(0, 0, 0, 0.5);
    }

    #happy-hour .happy_hour{
        padding: 30px 35px;
        background-color: #F03E5A;
        border: 1px solid #fff;
        outline: 10px solid #F03E5A;
        color: #fff;
        position: relative;
        width: 95%;
        margin: auto;
    }  

    #happy-hour .happy_hour span{  
        font-size: 0.6rem;
        border: 1px solid #fff;
        padding: 3px 10px;
        margin: 0;
        border-radius: 3px;
    }
    #happy-hour .happy_hour h1{    
        text-transform: uppercase;
        font-size: 1.5rem;
        margin: 10px 0px;
    }
    #happy-hour .happy_hour h3{    
        text-transform: uppercase;
        font-size: .9rem;
        margin: 0;
    }

    #happy-hour .happy_hour img{
        position: absolute;
        top: 10px;
        right: 20px;
        width: 9rem;
        opacity: 0.5;
    }
@media only screen and (min-width: 991px){
        #happy-hour{
        padding: 100px;
    }

    #happy-hour ul{
        width: 70%;
    }

    #happy-hour ul li:first-child{
        grid-template-columns: 48% 48%;
        justify-content: space-between;
    }

    #happy-hour ul li:last-child{
        grid-template-columns: 58% 38%;
        justify-content: space-between;
    }

    #happy-hour .food-event h3{
        font-size: 1.8rem;
    }

    #happy-hour .food-event p{
        font-size: 0.85rem;
    }

    #happy-hour button:hover{
        background-color: #fff;
        color: #000;
        cursor: pointer;
    }

    #happy-hour .welcome_atmosphere{
        margin: 0;
    }

    #happy-hour .welcome_atmosphere h3{
        font-size: 1.4rem;
    }

    #happy-hour .welcome_atmosphere p{
        font-size: 0.9rem;
    }

    #happy-hour .happy_hour{
        width: 100%;
        height: 100%;
    }  

    #happy-hour .happy_hour h1{
        font-size: 2.5rem;
    }

    #happy-hour .happy_hour h3{
        font-size: 1.1rem;
    }

    #happy-hour .happy_hour img{
        width: 10rem;
        top: 15px;
        right: 33px;
    }
    }
</style>
