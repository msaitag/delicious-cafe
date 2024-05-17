<template>
  <div id="beautiful-interior">
    <ul>
        <li class="li-left">
            <img class="interior-img" src="../assets/cake-chair.jpg" alt="" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
            <div class="interior-text div-right" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
                <div class="interior-content">
                    <div class="interior-child">
                <img src="../assets//icons/icons8-sofa-64.png" alt="">
                <h1>Beautiful Interior</h1>
                <div class="gold-line"></div>
                <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn to add fish to their repertoire.</p>
                </div>
                </div>
            </div>
        </li>
        <li class="li-right">
            <img class="interior-img img-right" src="../assets/food-vagetable-snacks.jpg" alt="" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
            <div class="interior-text div-left" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
                <div class="interior-content">
                    <div class="interior-child">
                <img src="../assets/icons/icons8-apple-64.png" alt="">
                <h1>Only Fresh Food</h1>
                <div class="gold-line"></div>
                <p>Fish is one of the most wholesome foods that man can eat. In fact, people have been eating fish throughout human history. These days, many cooks yearn to add fish to their repertoire.</p>
                </div>
            </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #beautiful-interior{
        height: max-content;
        position: relative;
        width: 100%;
        padding: 30px 0;
    }

    #beautiful-interior::before{
        content: "";
        position: absolute;
        background-image: url("../assets/background_image.png");
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-size: cover;
    } 

    #beautiful-interior ul{
        list-style-type: none;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        z-index: 2;
        text-align: center;
    }

    #beautiful-interior ul li{
        margin-bottom: 40px;
    }

    #beautiful-interior .interior-img{
        width: 95%;
        object-fit: fill;
    }

    .interior-content{
        width: 88%;
        margin-left: auto;
        margin-right: auto;
        height: max-content;
        font-family: 'Prompt', sans-serif;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1); 
        outline: 13px solid #fff;  
        text-align: center;
        padding: 10px;
    }

    .interior-content h1{
        text-transform: uppercase;
        font-size: 1.5rem;
    }

    .interior-content p{
        color: rgba(0, 0, 0, 0.5);
        font-family: inherit;
        font-size: 0.9rem;
    }

    .gold-line{
        border-top: 1.5px solid #DFA25F;
        border-bottom: 1.5px solid #DFA25F;
        height: 5px;
        max-width: 70px;
        margin-left: auto;
        margin-right: auto;
    }

@media only screen and (min-width: 991px){
    #beautiful-interior{
        padding: 50px;
    } 

    #beautiful-interior ul{
        width: 60vw;
        left: 0;
        right: 0;
    }

    #beautiful-interior ul li{
        height: 60vh;
        width: 60vw;
        position: relative;
        display: flex;
        align-items: center;
    }

    #beautiful-interior ul li:first-child{
        margin-bottom: 120px;
    }

    #beautiful-interior .interior-img{
        height: 100%;
        width: 60%;
    }

    #beautiful-interior .interior-text{
        width: 28vw;
        height: 60vw;
        display: flex;
        position: relative;
    }

    .interior-content{
        width: 100%;
        transform: translateY(-50%);
        top: 50%;
        position: relative;
        height: 20vw;
    }

    .interior-content .interior-child{
        height: max-content;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        padding: 0 2vw;
    }

    .interior-content img{
        width: 3vw;
    }

    .interior-content h1{
        font-size: 1.5vw;
    }

    .interior-content p{
        font-size: .8vw;
    }

    #beautiful-interior .div-right{
        right: 0;
        position: absolute;
    }

    #beautiful-interior .div-left{
        left: 0;
        position: absolute;
    }

    #beautiful-interior .img-right{
        right: 0;
        position: absolute;
    }
}
</style>