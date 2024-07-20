<template>
  <div id="new-flavors">
    <div class="reveal" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
    <h2>Discover</h2>
    <h1>New Flavors</h1>
    <div class="gold-line"> </div>
    <div class="gold-line"> </div>
    <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn to add fish to their repertoire, but the whole process of cleaning and filleting fresh fish is a little scary to them. The process of cleaning and filleting fresh fish is relatively simple once the steps are understood.  To begin, you must clean your fresh fish properly in order to maintain it’s quality.</p>
    
    <router-link to="/about"><button>More About Us</button></router-link>

    </div>
  </div>
</template>

<script>
export default {
    methods:{
        
    },
    async mounted(){
        
    }
}
</script>

<style scoped>


    #new-flavors{
        padding: 50px 0;

        position: relative;
        width: 100%;
        height: max-content;
        z-index: 2;
        text-align: center;
        align-items: center;
        background-color: #fff;
    }

    #new-flavors .reveal{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        height: max-content;
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
        margin-bottom: 10px;
    }

    .gold-line{
        border-bottom: 1.5px solid #DFA25F;
        max-width: 70px;
        margin: 0 auto 3px auto;
    }

    p{
        text-align: center;
        margin-top: 20px;
        color: rgba(0, 0, 0, 0.4);
        font-size: 0.9rem;
        letter-spacing: 1.2px;
        line-height: 1.8;
        word-spacing: 4px;
    }

    #new-flavors button{
        margin-top: 40px;
        padding: 15px 30px;
        border-radius: 40px;
        border: none;
        background-color: #DFA25F;
        color: #fff;
        font-size: 0.9rem;
        transition: background-color 0.3s ease;
        font-family: 'Prompt', sans-serif;

    }

    #new-flavors button:hover{
        background-color: #232D41;
        cursor: pointer;
    }


@media only screen 
  and (min-width: 991px) 
  { 
    #new-flavors{
        height: max-content;
        display: flex;
    }

    #new-flavors .reveal{
        width: 50%;
        transform: translateY(300px);
        transition: all 1s ease-in-out;
    }

    .active{
        transform: translateY(0);
    }

    h2{
        font-size: 2.7rem;
    }

    h1{
        font-size: 2.4rem;
        margin-bottom: 20px;
    }

    p{
        text-align: justify;
        margin-top: 60px;
        column-count: 2;
        column-gap: 40px;
        font-size: 1rem;
        line-height: 1.6;
    }
} 

    
</style>
