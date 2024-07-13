<template>
<div id="blog-post">
<div v-for="blog in blogs" :key="blog.id" >
  <div v-if="this.$route.params.id == blog.id">
    <img class="blog-image" :src="require('../assets/blog/'+ blog.picture)" alt="">
    <div class="blog-title">
      <h1 >{{ blog.title }}</h1>
      <div class="gold-line"> </div>
      <div class="gold-line"> </div>
      <p>{{ blog.date }}</p>
    </div>
  </div>

</div>
</div>
<!-- <transition v-if="readBlog" id="blog-post" name="blog" mode="in-out">
  <div v-show="index === index2">
    <img class="blog-image" :src="require('../assets/blog/'+ blog.picture)" alt="">
    <div class="blog-title">
      <h1 >{{ blog.title }}</h1>
      <div class="gold-line"> </div>
      <div class="gold-line"> </div>
      <p>{{ blog.date }}</p>
    </div>
    <div class="blog-content">
      
    </div>
  </div>
</transition> -->
</template>

<script>
import axios from 'axios'

export default {
    // props:[
    //     'index2', 'index', 'blog', 'readBlog'
    // ],
    data(){
        return{
            blogs: [{"title": "barcecue party tips for amazing event", "id": 1, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "brooke-lark-254998.jpg", "date": "July 30, 2017", "type": 1},
        {"title": "The principles of scientific cooking", "id": 2, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "chuttersnap-348313.jpg", "date": "September 24, 2017", "type": 2},
        {"title": "Cooking for one", "id": 3, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "brooke-lark-275181.jpg", "date": "November 3, 2017", "type": 3},
        {"title": "what about need to know oil fondue", "id": 4, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "michael-browning-188999.jpg", "date": "August 9, 2017", "type": 1},
        {"title": "types of cookware pots and pans", "id": 5, "content": "So how is any writer supposed to pen a stunning piece of advertising copy — copy that sizzles and sells? The following tips will jumpstart your creative thinking and help you write a better ad.", "disting": "Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy", "picture": "tim-wright-299897.jpg", "date": "October 19, 2017", "type": 2}]
        }
    },
    // async mounted(){
     // let blogs = await axios.get("http://localhost:3000/blogs")
     // this.blogs = blogs.data
   // }
}
</script>

<style scoped>
  #blog-post{
    position: relative;
    width: 100%;
    height: 98vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: #fff;
    justify-content: center;
  }

  #blog-post .blog-image{
    position: absolute;
    width: 100%;
    height: 80vh;
    object-fit: cover;
    filter: brightness(50%);
  }

  #blog-post .blog-title{
    position: absolute;
    top: 50%;
    left: 50%;
    height: 60vh;
    transform: translate(-50%, -50%);
    text-align: center;
    
  }

  .blog-title h1{
    font-size: 5rem;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 2vh;
  }

  .blog-title .gold-line{
    border-bottom: 1.5px solid #FFC272;
    margin-bottom: 3px;
    max-width: 70px;
    margin-left: auto;
    margin-right: auto;
  }

  .blog-title p{
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Prompt', sans-serif;

  }

</style>
