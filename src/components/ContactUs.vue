<template>
    <router-link to="/contact"><div id="contact-us">
        <div v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
        <img src="../assets/icons/icons8-ringing-phone-100.png" alt="">
        <h1>Contact Us</h1>
        </div>
        </div>
        </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>

    a{
        text-decoration: none;   
    }

    #contact-us{
        height: 30vh;
        width: 100%;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        border: 10px solid white;
        transition: border 0.3s ease-in-out;
        text-align: center;
        display: flex;  
        align-items: center;    
    }

    #contact-us::before{
        content: "";
        background-image: url("../assets/Blue Topography (1440 x 900).jpeg");
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-size: contain;
    }

    #contact-us:hover{
        border: 10px solid #DFA25F;
    }

    #contact-us div{
        position: absolute;
        left: 0;
        right: 0;
        height: max-content;
    }

    #contact-us img{
        width: 4rem;
    }

    #contact-us h1{
        color: white; 
        text-transform: uppercase;
        font-size: 2rem;
        margin: 0;
    }

    @media only screen and (min-width: 991px){
    #contact-us img{
        width: 4rem;
    }

    #contact-us h1{
        font-size: 2.6rem !important;
    }

}
</style>