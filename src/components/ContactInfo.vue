<template>
  <div id="contact-info">
    <div class="contact-container">
      <h1>Contact Us</h1>
      <h2>Let's Get in Touch</h2>
      <div class="gold-line">

      </div>
      <div class="form-container" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
        <form action="/action_page.php">
          <div>
            <input type="text" id="fname" name="fname" placeholder="Enter your name"><br><br>
            <input type="email" id="fname" name="fname" placeholder="Enter your email"><br><br>
          </div>
          <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Drop us a line or two..."></textarea><br><br>
          <input type="submit" value="Submit Message">
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  #contact-info{
    height: 80vh;
    position: relative;
  }

  .contact-container{
    width: 90%;
    text-align: center;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    margin: auto;
  }

  .contact-container h1{
    font-family: 'Parisienne', cursive;
    color: #DFA25F;
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
  }

  .contact-container h2{
    margin: 0;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    color: #000;
    font-size: 1.5rem;
  }

  .gold-line{
    border-bottom: 1.5px solid #DFA25F;
    border-top: 1.5px solid #DFA25F;
    margin-bottom: 3px;
    margin-top: 2vh;
    max-width: 70px;
    height: 5px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-container .form-container{
    margin-top: 5vh;
  }

  .form-container form > div{
    display: contents;
  }

  form > div input{
    height: 4vh;
    margin: 0 1vw;
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
    margin-top: 2vh;
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
    width: 100%;
    padding: 1.3vh 2.5vw;
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

@media only screen and (min-width: 991px){
  
  .contact-container{
    width: max-content;
  }

  .contact-container h1{
    font-size: 2.2rem;
  }

  .contact-container h2{
    font-size: 2.2rem;
  }

  .form-container form > div{
    display: flex;
  }

  form > div input{
    width: 15vw;
    padding: 2.5vh 1vw;
  }

  form textarea{
    width: 32vw;
    padding: 1vh 1vw;
  }

  form input:last-child{
    width: max-content;
    padding: 1.3vh 1.5vw;
  }
}
</style>