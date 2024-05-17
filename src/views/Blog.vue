<template>
  <div id="blog">
    <div class="recent-news">
    </div>
    <h1 class="blog-header">
      Recent News
    </h1>
    <div v-for="blog in blogs" :key="blog.id" class="all-posts" >
      <div  class="blog-container" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
        <div class="blog-text">
        <div class="blog-text-container">
          <h3 :style="getBackgroundColor(blog.type)">
            <router-link :to="{params: {id: blog.id}, name: 'blogpost'}">
            {{ blogType[blog.type] }}
            </router-link>    
          </h3>
          <h2>
            <router-link :to="{params: {id: blog.id}, name: 'blogpost'}">
            {{ blog.title }}
            </router-link>  
          </h2>
          <div class="gold-line"></div>
          <p>{{ blog.disting.slice(0,200) }}</p>
          <div class="date">{{ blog.date }}</div>
        </div>
        </div>
        <div class="blog-picture">
          <router-link :to="{params: {id: blog.id}, name: 'blogpost'}">
            <img :src="require('../assets/blog/' + blog.picture)" alt="">
            <div id="read-more">
              <div>Read More </div>
              <img src="../assets/icons/icons8-arrow-50.png" alt="">
            </div>
          </router-link>
        </div>
        
      </div>
    </div>
    <div class="subscribe">
      
      <div class="sub-container">
      
        <div>
        <h1>subscribe</h1>
        <h3>SUBSCRIBE TO OUR NEWSLETTER AND GET 20% DISCOUNT TO YOUR NEXT ORDER.</h3>
        <div class="sub-input">
        <input type="email" id="fname" name="fname" placeholder="Enter your email">
        <button>Subscribe</button>
      </div>
      
      </div>
      
      </div>
      
    </div>

    <!-- <article>
      <BlogPost v-for="(blog, index) in blogs" :key="blog" :index="index" :index2="index2" :blog="blog" :readBlog="readBlog">
      
      
      </BlogPost>
      <div v-for="(blog, index) in blogs" :key="blog" :index="index">
        
        <h2>{{ blog.title }}</h2>
        <span>{{ blog.date }}</span>
        <button @click="getIndex(index)">Read</button>
      </div>
    </article> -->
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import BlogPost from '../components/BlogPost.vue'
import Footer from '../components/Footer.vue'

export default {
  data(){
    return{
      readBlog: true,
      index2: null,
      blogs: [],
      blogType: {
        1 : "Promotion",
        2 : "Event",
        3 : "New Dishes"
      }
      
    }
  },
  async mounted(){
    let blogs = await axios.get("http://localhost:3000/blogs")
    this.blogs = blogs.data
  },
  components:{
    BlogPost,
    Footer
  },
  methods:{
    toggleElement(e){
      this.readBlog = e;
      console.log(this.readBlog);
    },
    getIndex(i){
      this.readBlog = true;
      this.index2 = i;
      console.log(this.index2);
    },
    getBackgroundColor(type){
      switch (type) {
        case 1: return 'background-color: #F03E5A'
        case 2: return 'background-color: #DFA25F'
        case 3: return 'background-color: #8756B5'
          
      
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>

  #blog{
    position: relative;
    width: 100%;
    height: 98vh;
  }
  .recent-news{
    background-image: url("../assets/adda_jazmin-quaynor-35847.jpg");
    height: 40vh;
    background-size: cover;
    filter: brightness(70%);
}

.blog-header{
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

  .all-posts{
    position: relative;
    width: 100%;
    text-align: center;
    align-items: center;
    display: flex;
  }

  .all-posts::before{
    content: "";
    background-image: url("../assets/background_image.png");
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
  }

  .blog-container{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    position: relative;
    display: flex;
    margin-top: 5vh;
    height: 55vh;
    justify-content: space-between;
  }

  .blog-container .blog-text{
    float: left;
    padding: 0 10px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1); 
    outline: 10px solid #fff;  
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .blog-container .blog-text .blog-text-container{
    height: max-content;
    margin: auto;
  }

  .blog-text h2{
    text-transform: uppercase;
    color: #111111;
    font-size: 1.5rem;
    margin: 13px 0px;
    padding: 1vh 4vw;
  }

  .blog-text h2 a{
    text-decoration: none;
    color: #000;
    transition: all .4s ease-in-out;
  }

  .blog-text h2 a:hover{
    text-decoration: underline;
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

  .blog-text p{
    padding: 0 2.2vw;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.5px;
    padding: 0 4vw;
    font-family: 'Prompt', sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
  }

  .blog-text .date{
    font-family: 'Prompt', sans-serif;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    font-weight: 600;
  }

  .blog-container .blog-picture{
    float: right;
    width: 59%;
    border: 1px solid #fff; 
    outline: 10px solid #fff;  
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    display: none;
  }

  .blog-picture #read-more{
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 0.8rem 1.9rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 300;
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 500ms ease-in-out;
    pointer-events: none;
  }

  .blog-picture img:hover ~ #read-more{
    opacity: 1;
    left: 50%;
  }

  #read-more div{
    font-family: 'Prompt', sans-serif;
  }

  #read-more img{
    width: 1.8rem;
    fill: #000;
    margin-left: 5px;
    padding: 0 1px;
  }

  .blog-picture img{
    display: none;
    width: 100%;
    height: 100%;
  }

  .blog-text-container h3{
    font-size: 0.55rem;
    text-transform: uppercase;
    margin: 0 auto;
    width: max-content;
    border-radius: 5px;
    color: #fff;
    font-family: 'Prompt', sans-serif;
    padding: 2px 8px;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .blog-text-container h3 a{
    text-decoration: none;
    color: #fff;
  }

  .subscribe{
    height: max-content;
    background: #fff;
    margin: auto;
    position: relative;
    padding: 10vh 5vw;
  }

  .subscribe::before{
    content: "";
    background-image: url("../assets/background_image.png");
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
  }

  .subscribe .sub-container::before{
    background-image: url("../assets/Blue Topography (1440 x 900).jpeg");
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
  }

  .subscribe .sub-container{
    width: 100%;
    margin: auto;
    height: 60vh;
    position: relative;
    border: 1px solid #fff; 
    outline: 10px solid; 
  }

  .sub-container > div{
    position: relative;
    top: 35%;
    transform: translate(0, -35%);
    height: max-content;
  }

  .sub-container h1{
    font-family: 'Parisienne', cursive;
    color: #DFA25F;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1vh;
    width: 100%;
    text-align: center;
    text-transform: capitalize;
  }
  
  .sub-container h3{
    color: #fff;
    padding: 0 1rem;
    font-size: 1rem;
    margin: 0 auto 4vh auto;
    width: 85%;
    text-align: center;
  }

  .sub-container .sub-input{
    margin-top: 1.5vh;
    margin-left: auto;
    margin-right: auto;
    width: max-content;
    text-align: center;
  }

  .sub-container input{
    padding: 0.8rem 1rem;
    text-align: center;
    font-weight: 300;
    font-family: 'Prompt', sans-serif;
    border: none;
    width: 85%;
    border-radius: 5px;
    margin-bottom: 2vh;
  }

  .sub-container button{
    padding: 0.8rem 1rem;
    background-color: #DFA25F;
    font-family: 'Prompt', sans-serif;
    cursor: pointer;
    color: #fff;
    border: none;
    transition: all 400ms;
    width: 85%;
    border-radius: 5px;
  }

  .sub-container button:hover{
    background-color: #F03E5A;
  }

@media only screen and (min-width: 991px){
  .recent-news{
    height: 60vh;
    background-size: 100% 80vh;
    filter: brightness(50%);
    margin-bottom: 10px;
}

.blog-header{
    font-size: 4rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .blog-container{
    width: 60%;
    height: 50vh;
  }

  .blog-container .blog-text{
    padding: 0;
    width: 40%;
  }

  .blog-text h2{
    font-size: 1.8rem;
  }

  .blog-container .blog-picture{
    display: unset;
  }

  .blog-picture img{
    display: unset;
  }

  .subscribe{
    width: 100%;
    background: #000;
    padding: 10vh 0;
  }

  .subscribe .sub-container{
    width: 40%;
    height: 40vh;
  }

  .sub-container > div{
    top: 50%;
    transform: translate(0, -50%);
  }

  .sub-container h1{
    font-size: 2.7rem;
    margin: 0;
  }
  
  .sub-container h3{
    font-size: 1.3rem;
    margin: 0 auto 1vh auto;
    width: 25vw;
  }

  .sub-container .sub-input{
    display: flex;
  }

  .sub-container input{
    text-align: left;
    width: 60%;
    border-radius: 5px 0 0 5px;
  }

  .sub-container button{

    height: 100%;
    width: 40%;
    border-radius: 0 5px 5px 0;
    text-align: center;
  }

}
</style>