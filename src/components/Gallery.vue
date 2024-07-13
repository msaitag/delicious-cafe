<template>
  <div id="gallery">
    <div class="gallery-items" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
    <div @click="start"  class="gallery-photo" v-for="(photo, index) in gallery" :key="photo" :index="index" >
     <img :src="require('../assets/products/' + photo.link)" alt="">
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['index'],
  data(){
    return{
      gallery :[{"title": "Ice Americano", "id": 1, "price": 20, "type": "cold", "link": "ice-americano.jpg"},
        {"title": "Filter Coffee", "id": 2, "price": 25, "type": "hot", "link": "filter-coffee.jpg"},
        {"title": "Machiato", "id": 3, "price": 15, "type": "hot", "link": "macchiato.jpg"},
        {"title": "Americano", "id": 4, "price": 22, "type": "hot", "link": "americano.jpg"},
        {"title": "Cool Lime", "id": 5, "price": 35, "type": "hot", "link": "cool-lime.jpg"}],
      clicked: false
    }
  },
  // async mounted(){
   // let result = await axios.get("http://localhost:3000/coffees");
   // this.gallery = result.data;
 // },
  methods:{
    start(){
      this.clicked = true
      console.log(this.clicked)
    }
  }

}
</script>

<style scoped>
  #gallery{
    background-color: #fff;
    position: relative;
    z-index: 3;
  }

  .gallery-items {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 1vw 0;
  }

  .gallery-photo img{
    width: 47.5vw;
    object-fit: fill;
    height: 47.5vw;
  }

@media only screen and (min-width: 991px){
  .gallery-items {
    grid-template-columns: auto auto auto auto auto;
    padding: 15px 10px;
  }


  .gallery-photo img{
    width: 19vw;
    object-fit:fill;
    height: 19vw;
  }
}
</style>
