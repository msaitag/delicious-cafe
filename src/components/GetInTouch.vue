<template>
  <div id="get-in-touch">
    <div class="touch-items" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
        <div>
            <img src="../assets/location-icon.png" alt="">
            <div class="gold-line"></div>
            <p>Delicious Cafe, 1649 Norman Street,  Los Angeles, 90011</p>
        </div>
        <div>
            <img src="../assets/phone-icon.png" alt="">
            <div class="gold-line"></div>
            <p>Delicious Cafe, 1649 Norman Street,  Los Angeles, 90011</p>
        </div>
        <div>
            <img src="../assets/mail-icon.png" alt="">
            <div class="gold-line"></div>
            <p>Delicious Cafe, 1649 Norman Street,  Los Angeles, 90011</p>
        </div>
        <div>
            <img src="../assets/chat-icon.png" alt="">
            <div class="gold-line"></div>
            <p>Delicious Cafe, 1649 Norman Street,  Los Angeles, 90011</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  components:{
    
  }

}
</script>

<style scoped>
#get-in-touch{
    background-color: #fff;
    position: relative;
    z-index: 3;
  }

  .touch-items {
    display: grid;
    justify-content: space-between;
    padding: 15px 0;

  }

    .touch-items > div{
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 7vh 1vw;
    }

    .touch-items img{
      width: 15vw;
      margin-bottom: 1.5vh;
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

    .touch-items p{
      margin-top: 1.5vh;
      font-family: 'Prompt', sans-serif;
      padding: 0 3vw;
      font-weight: 300;
      font-size: 0.9rem;
    }

@media only screen and (min-width: 991px){

  .touch-items {
    grid-template-columns: 25% 25% 25% 25%;
    padding: 15px 10px;
  }

    .touch-items > div{
      padding: 4vh 1vw;
    }

    .touch-items img{
      width: 3vw;
    }

}
</style>