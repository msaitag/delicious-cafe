<template>
  <div id="reservation">
    
    <div class="reserv-us">
    </div>
    <h1 class="reserv-header">
        book a table
    </h1>
    <div class="rezerv-container" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
    <div class="book-container">
      <form action="/action_page.php">       
          <input class="input-wide" type="text" id="fname" name="fname" placeholder="Enter your full name" >
          <div>
            <input type="text" id="fname" name="fname" placeholder="Email adress">
            <input type="email" id="fname" name="fname" placeholder="Phone number"><br>
          </div>
          
          <div>
            <input type="text" id="fname" name="fname" placeholder="Date">
            <input type="email" id="fname" name="fname" placeholder="Time"><br>
          </div>
          
          <select name="cars" id="cars">
            <option value="volvo" selected>1 Person</option>
            <option value="saab">2 Person</option>
            <option value="mercedes">3 Person</option>
            <option value="audi">4 Person</option>
            <option value="volvo">5 Person</option>
            <option value="saab">6 Person</option>
            <option value="mercedes">7 Person</option>
            <option value="audi">8 Person</option>
          </select><br>
          <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Drop us a line or two..."></textarea><br><br>
          <input type="submit" value="Submit Message">
      </form>
    </div>
  </div>
    <GetInTouch></GetInTouch>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import GetInTouch from '@/components/GetInTouch.vue';

export default {
    components:{
        GetInTouch,
        Footer
    }
}
</script>

<style>
#reservation{
    position: relative;
    width: 100%;
    height: 98vh;
  }

.reserv-us{
    background-image: url("../assets/michael-dam-257088.jpg");
    height: 40vh;
    background-size: cover;
    filter: brightness(70%);
}


.reserv-header{
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

  .rezerv-container{
    position: relative;
    width: 100%;
    background-image: url("../assets/background_image.png");
    padding: 5vh 0;
    margin: 1vh 0;
  }

  .book-container{
    text-align: center;
    margin: auto;
    background-color: #fff;
    padding: 5vh 7vw;
    border: solid 5px #DFA25F;
    width: 95%;
  }

  .book-container form > div{
    display: contents;
  }

  form div{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
  }

  form > div input{
    height: 4vh;
    margin: 0 0 2.5vh 0;
    width: 100%;
    padding: 2.5vh 5vw;
    font-weight: 300;
    font-family: 'Prompt', sans-serif;
    background-color: rgba(0, 0, 0, 0.03);
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
    border-radius: 3px;
    transition: all 200ms ease-in-out;
  }

  form > div input:hover{
    background-color: #fff;
  }

  form textarea{
    width: 100%;
    height: 17vh;
    padding: 1vh 5vw;
    font-weight: 300;
    font-family: 'Prompt', sans-serif;
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.03);
    transition: all 200ms ease-in-out;

  }

  form textarea:hover{
    background-color: #fff;
  }

  form input:last-child{
    padding: 1.3vh 5vw;
    border-radius: 25px;
    border: none;
    color: #fff;
    font-family: 'Prompt', sans-serif;
    background-color: #DFA25F;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    font-size: 0.9rem;
  }

  form input:last-child:hover{
    background-color: #232D41;
  }

  .input-wide{
    height: 4vh;
    width: 100%;
    padding: 2.5vh 5vw;
    font-weight: 300;
    font-family: 'Prompt', sans-serif;
    background-color: rgba(0, 0, 0, 0.03);
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
    border-radius: 3px;
    transition: all 200ms ease-in-out;
    margin-bottom: 2.5vh;
  }

  select{
    width: 100%;
    padding: 1.5vh 4vw;
    font-weight: 200;
    font-family: 'Prompt', sans-serif;
    background-color: rgba(0, 0, 0, 0.03);
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
    border-radius: 3px;
    transition: all 200ms ease-in-out;
    margin-bottom: 2.5vh;
    cursor: pointer;
  }

  select:hover{
    background-color: #fff;
  }

  .input-wide:hover{
    background-color: #fff;
  }

@media only screen and (min-width: 991px){

.reserv-us{
    height: 60vh;
    background-size: 100% 80vh;
    filter: brightness(50%);
}


.reserv-header{
    font-size: 4rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .rezerv-container{
    padding: 0;
    margin: 0;
  }

  .book-container{
    padding: 10vh 5vw;
    top: 20%;
    transform: translate(0, -20%);
    width: max-content;
  }

  .book-container form > div{
    display: flex;
  }

  form div{
    width: max-content;
  }

  form > div input{
    margin: 0 1vw 2.5vh 1vw;
    width: 15vw;
    padding: 2.5vh 1vw;
  }

  form textarea{
    width: 32vw;
    padding: 1vh 1vw;
  }

  form input:last-child{
    padding: 1.3vh 1.5vw;
  }

  .input-wide{
    width: 32vw;
    padding: 2.5vh 1vw;
  }

  select{
    width: 32vw;
    padding: 1.5vh 0.8vw;
  }
}
</style>