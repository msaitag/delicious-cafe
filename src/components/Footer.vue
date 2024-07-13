<template>
  <div id="footer">
    <div class="footer-container" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
        <div class="footer-item">
            <h2>Contact Info</h2>
            <p>
                Delicious Cafe, 1649 Norman Street,  Los Angeles, 90011
            </p>
            <a class="link-gold" href="">
                hello@deliciouscafe.com
            </a>
            <a href="">
                8 (800) 316-06-42
            </a>
            <div class="social-acc"><a href="https://twitter.com/"><img src="../assets/icons/icons8-twitter-30.png" alt=""></a><a href="https://www.facebook.com/"><img src="../assets/icons/icons8-facebook-f-30.png" alt=""></a><a href="https://www.instagram.com/"><img src="../assets/icons/icons8-instagram-30.png" alt=""></a></div>
        </div>
        <div class="footer-item"><h2>Navigation</h2>
            <router-link to="/" class="footer-navigation">Home</router-link> 
            <router-link to="/menu" class="footer-navigation">Menu</router-link>
            <router-link to="/blog" class="footer-navigation">Blog</router-link>
            <router-link to="/about" class="footer-navigation">About</router-link>
            <router-link to="/contact" class="footer-navigation">Contact</router-link>
        </div>
        <div class="footer-item"><h2>Recent Posts</h2>
            <div v-for="(blog, index) in blogs" :key="blog" :index="index">
            <li class="footer-posts" v-if="index < 3">

                <h3>{{ blog.date }}</h3>
                <a href="/"><p>{{ blog.title }}</p></a>
                
            </li>
        </div>
        <a class="view-more" href="">View All Posts</a>
        </div>
        <div class="footer-item"><h2>Instagram</h2>
            <div class="footer-insta">
            <div v-for="(coffee, index) in coffees" :key="coffee" :index="index">
                    <img v-if="index < 5" :src="require('../assets/products/'+ coffee.link)" alt="">
            </div>
        </div>
        <a class="view-more" href="">View More Photos</a>
        </div>
    </div>
    <div class="created-by">
        Created with&nbsp;<img src="../assets/59f1b3b9ffa06300013b6b90_heart-icon.svg">&nbsp;by MSAG
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
        blogs: [{"title": "barcecue party tips for amazing event", "id": 1, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "brooke-lark-254998.jpg", "date": "July 30, 2017", "type": 1},
        {"title": "The principles of scientific cooking", "id": 2, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "chuttersnap-348313.jpg", "date": "September 24, 2017", "type": 2},
        {"title": "Cooking for one", "id": 3, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "brooke-lark-275181.jpg", "date": "November 3, 2017", "type": 3},
        {"title": "what about need to know oil fondue", "id": 4, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "michael-browning-188999.jpg", "date": "August 9, 2017", "type": 1},
        {"title": "types of cookware pots and pans", "id": 5, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "tim-wright-299897.jpg", "date": "October 19, 2017", "type": 2}],
        coffees: [{"title": "Ice Americano", "id": 1, "price": 20, "type": "cold", "link": "ice-americano.jpg"},
        {"title": "Filter Coffee", "id": 2, "price": 25, "type": "hot", "link": "filter-coffee.jpg"},
        {"title": "Machiato", "id": 3, "price": 15, "type": "hot", "link": "macchiato.jpg"},
        {"title": "Americano", "id": 4, "price": 22, "type": "hot", "link": "americano.jpg"},
        {"title": "Cool Lime", "id": 5, "price": 35, "type": "hot", "link": "cool-lime.jpg"}]
    }
    },
    // async mounted(){
    //    let blogs = await axios.get("http://localhost:3000/blogs")
    //    this.blogs = blogs.data

//        let coffees = await axios.get("http://localhost:3000/coffees")
  //      this.coffees = coffees.data
    //}
}
</script>

<style scoped>
    #footer{
        height: max-content;
        position: relative;
        display: grid;  
        margin-bottom: -10px;
        margin-left: -5px;
        margin-right: -5px;
    }

    #footer::before{
        content: "";
        background-image: url("../assets/Blue Topography (1440 x 900).jpeg");
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: auto;
        /* filter: grayscale(30%); */
    }

    .footer-container{
        z-index: 2;
        width: 90%;
        display: grid;
        margin: auto;
    }

    .footer-container .footer-item{
        color: #fff;
        margin-top: 40px;
    }

    .footer-item h2{
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
        font-size: 1rem;
        margin-bottom: 30px;
    }

    .footer-item p{
        font-size: 0.9rem;
        letter-spacing: 1px;
        font-weight: 300;
    }

    .footer-item a:link{
        text-decoration: none;
    }

    .footer-item a{
        display: block;
        margin-bottom: 10px;
        font-weight: 300;
        font-size: 0.9rem;
        letter-spacing: 1.5px;
        color: #fff;
    }

    .footer-item a:hover{
        text-decoration: underline;
    }

    .footer-item .link-gold{
        color: #D79D5E;
        font-weight: 400;
    }

    .footer-item .social-acc{
    display: flex;
    margin-top: 20px;
  }
  .footer-item .social-acc a{
    margin-right: 10px;
  }

  .footer-item .social-acc img{
    width: 2.5rem;
    border: solid rgb(255, 255, 255, 0.5);
    border-width: thin;
    border-radius: 5px;
    padding: 10px;
    transition: 0.3s;
    margin-top: 20px;
  }

  .footer-item .social-acc img:hover{
    background-color: #DFA25F;
    
  }

    .footer-item .footer-navigation{
        margin-bottom: 20px;
        font-size: 0.9rem;
        font-weight: 300;
    }

    .footer-item .footer-posts{
        list-style-type: none;
        margin-bottom: 25px;
        border-bottom: rgba(255, 255, 255, 0.3) solid 1px;
    }

    .footer-posts h3{
        font-size: 0.8rem;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.6);
        font-family: 'Prompt', sans-serif;
        margin: 0;
    }

    .footer-posts p{
        margin-top: 5px;
        font-weight: 400;
        text-transform: capitalize;
        cursor: pointer;
    }

    .footer-item .footer-insta{
        display: grid;
        grid-template-columns: auto auto auto;
        margin-left: -1vw;
        /* grid-gap: 1vw; */
    }

    .footer-insta img{
        width: 30vw;
        height: 30vw;
        padding: 0.5vw 1vw;
    }

    .footer-item .view-more{
        margin-top: 20px;
        font-size: 0.75rem;
        font-family: 'Prompt', sans-serif;
        color: #fff;
        font-weight: 500;
        letter-spacing: 1px;
    }

    .created-by{
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 3;
        position: relative;
        bottom: 0;
        width: 100%;
        height: 100px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 300;
        font-family: 'Prompt', sans-serif;
        font-size: 0.9rem;
    }

@media only screen and (min-width: 991px){
    #footer{
        height: 60vh;
        margin-left: auto;
        margin-right: auto;
        border-bottom: none;
        border-top: 10px solid #fff;
        border-bottom: 10px solid #fff;
        position: relative;
    }

    .footer-container{
        width: 70%;
        grid-template-columns: 25% 20% 30% 25%;
    }

    .footer-container .footer-item{
        justify-content: space-between;
        margin: 20px;
        margin-top: 10px;
        align-items: center;
    }

    .footer-item h2{
        font-size: 1.2rem;
    }

  .footer-item .social-acc img{
    margin: 0;
  }

    .footer-item .footer-insta{
        grid-template-columns: 33% 33% 33%;
        grid-gap: 10px;
        margin-left: 0;
    }

    .footer-insta img{
        width: 100%;
        height: 90px;
        padding: 0;
    }

    .created-by{
        position: absolute;
    }
}
</style>
