<template>
  <div id="book-table">
    <div class="book-content" v-motion :initial="{ opacity: 0, y: 300}" :visible-once="{ opacity:1, y: 0}">
    <h2>Reservation</h2>
    <h1>Book Your Table</h1>
    <div class="gold-line"> </div>
    <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history.</p>
      <router-link to="/reservation"><button>Book a Table</button></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #book-table{
        width: 100%;
        position: relative;
        border: 10px solid #fff;
        height: max-content;
    }

    #book-table::before{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        content: "";
        background-image: url("../assets/image.webp");
        background-size: cover;
        height: 100%;
        z-index: -3;
        margin: 15px;
        background-position: 100% 50%;
        filter: brightness(110%);
    }

    #book-table .book-content{
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        padding: 100px 0px;
        left: 0;
        right: 0;
    }

    #book-table h2{
        font-family: 'Parisienne', cursive;
        color: #DFA25F;
        font-size: 2rem;
        font-weight: 500;
        margin: 0;
    }

    #book-table h1{
        margin: 0;
        font-family: 'Oswald', sans-serif;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    #book-table p{
        color: #fff;
        font-family: 'Prompt', sans-serif;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 1px;
        line-height: 1.7rem;
        word-spacing: -0.2ch;
        font-size: 0.9rem;
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

    #book-table button{
        margin-top: 30px;
        padding: 15px 30px;
        border-radius: 40px;
        border: none;
        background-color: #DFA25F;
        color: #fff;
        font-size: 0.9rem;
        transition: background-color 0.3s ease;
        font-family: 'Prompt', sans-serif;
    }

    #book-table button:hover{
        background-color: #232D41;
        cursor: pointer;
    }

@media only screen and (min-width: 991px){
    #book-table .book-content{
        width: 50%;
    }

    #book-table h2{
        font-size: 2.7rem;
    }

    #book-table h1{
        font-size: 2.4rem;
    }

    #book-table p{
        width: 70%;
        font-size: 1rem;
    }

}
</style>
