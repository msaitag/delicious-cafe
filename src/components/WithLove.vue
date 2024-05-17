<template>
    <div id="with-love">
        <div class="made-love">
            <img src="../assets/chiefsworld-image.jpeg" alt="" v-motion :initial="{ opacity: 0, y: 100}" :visible-once="{ opacity:1, y:0}">
            <div class="love-content" v-motion :initial="{ opacity: 0, y: 100}" :visible-once="{ opacity:1, y:0}">
                <h2>Chief's Word</h2>
                <h1>Made with love</h1>
                <div class="gold-line"> </div>
                <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn to add fish to their repertoire, but the whole process of cleaning and filleting</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #with-love{
        padding: 50px 0px;
        height: max-content;
        position: relative;
    }

    #with-love::before{
        content: "";
        position: absolute;
        background-image: url("../assets/background_image.png");
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-size: cover;
    } 

    .made-love{
        position: relative;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        text-align: center;
        width: 95%;
    }

    .love-content{
        width: 100%;
        text-align: center;
        margin-top: 40px;
    }

    #with-love img{
        width: 90%;
    }

    #with-love h2{
        font-family: 'Parisienne', cursive;
        color: #DFA25F;
        font-size: 2rem;
        font-weight: 500;
        margin: 0;
    }

    #with-love h1{
        margin: 0;
        font-family: 'Oswald', sans-serif;
        color: #000;
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    #with-love p{
        color: rgba(0, 0, 0, 0.5);
        width: 95%;
        letter-spacing: 1px;
        line-height: 1.5rem;
        word-spacing: -0.2ch;
        font-size: 0.9rem;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Prompt', sans-serif;
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

@media only screen and (min-width: 991px){
    #with-love{
        padding: 100px 0px;
    }

    .made-love{
        display: flex;
        text-align: left;
        width: max-content;
    }

    .love-content{
        width: 450px;
        text-align: left;
        margin: 0;
    }

    #with-love img{
        width: 450px;
        margin-right: 100px;
    }

    #with-love h2{
        font-size: 2.7rem;
    }

    #with-love h1{
        font-size: 2.4rem;
    }

    #with-love p{
        margin: 20px 0 0 0;
        line-height: 1.8rem;
        width: 70%;
    }

    .gold-line{
        margin: 0;
    }
}
</style>