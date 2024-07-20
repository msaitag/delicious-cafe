<template>
  <div id="location">
    <div class="location-container" >
    <div class="easy-find" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
        <div class="find-text">
            <div class="find-text-container">
            <img src="../assets/icons/icons8-signpost-64.png" alt="">
            <h2>Easy to Find</h2>
            <div class="gold-line"></div>
            <p>Delicious Cafe, 1649 Norman Street, Los Angeles, 90011</p>
            <span>info@cafedomain.com</span>
            <span>8 (800) 316-06-42</span>
        </div>
        </div>
        <div class="find-map"></div>
    </div>
    <div class="open-hours" v-motion :initial="{ opacity: 0, y: 200}" :visible-once="{ opacity:1, y:0}">
        <div class="open-hours-container">
        <h2>Welcome</h2>
        <h1>Opening Hours</h1>
        <ul>
            <li><p>Monday</p><div></div><p>8AM-10PM</p></li>
            <li><p>Tuesday</p><div></div><p>8AM-10PM</p></li>
            <li><p>Wednesday</p><div></div><p>8AM-10PM</p></li>
            <li><p>Thursday</p><div></div><p>8AM-10PM</p></li>
            <li><p>Friday</p><div></div><p>8AM-10PM</p></li>
            <li><p>Saturday</p><div></div><p>8AM-10PM</p></li>
            <li><p>Sunday</p><div></div><p>8AM-10PM</p></li>    
        </ul>
          <router-link to="/reservation"><button>Reservation</button></router-link>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #location{
        padding: 50px 0px;
        position: relative;
    }

    #location::before{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url("../assets/background_image.png");
        background-size: cover;
    }

    .location-container{
        position: relative;
        width: 95%;
        display: grid;
        margin-left: auto;
        margin-right: auto;
    }

    .easy-find{
        width: 100%;
        background-color: #fff;
        height: 500px;
    }

    .easy-find .find-text{
        width: 95%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        outline: 10px solid #fff;
        position: relative;
        padding: 50px 0;
        margin-left: auto;
        margin-right: auto;
        height: 100%;
    }

    .easy-find .find-text .find-text-container{
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
    }

    .find-text img{
        width: 3.5rem;
    }

    .find-text h2{
        text-transform: uppercase;
        color: #111111;
        font-size: 1.5rem;
        margin: 13px 0px;
    }

    .find-text p{
        font-family: 'Prompt', sans-serif;
        width: 80%;
        margin: 15px auto;
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.5);
    }

    .find-text span{
        display: block;
        font-family: 'Prompt', sans-serif;
        font-size: 0.95rem;
        margin-bottom: 15px;
        color: #6D6D6D;
    }

    .find-text span:last-child{
        color: #F47488;
    }

    .easy-find .find-map{
        background-color: #fff;   
        width: 95%;
        border: 1px solid #fff; 
        outline: 10px solid #fff;  
        margin-left: auto;
        margin-right: auto;
    }

    .open-hours{
        background-color: #252F46;
        border: 1px solid #fff;
        outline: 10px solid #252F46;
        position: relative;
        height: 500px;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .open-hours .open-hours-container{
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        text-align: center;
    }

    .open-hours h2{
        font-family: 'Parisienne', cursive;
        color: #D79D5E;
        font-size: 2rem;
        font-weight: 500;
        margin: 0;
        filter: brightness(120%);
    }

    .open-hours h1{
        margin: 0px 0px 20px 0px;
        font-family: 'Oswald', sans-serif;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
    }

    .open-hours ul{
        list-style: none;
    }

    .open-hours li{
        color: #fff;
        display: grid;
        grid-template-columns: max-content auto max-content;
        line-height: 0.3rem;
        margin: 0px 40px;
    }

    .open-hours li p:first-child{
        text-align: left;
        font-family: 'Prompt', sans-serif;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .open-hours li p:last-child{
        text-align: right;
        font-family: 'Prompt', sans-serif;
        font-size: 0.9rem;
    }


    .open-hours li div{
        border-bottom: 2px dotted rgba(255, 255, 255, 0.2);
        margin-bottom: 12px;

    }

   
    .open-hours button{
        margin-top: 10px;
        padding: 10px 20px;
        border-radius: 40px;
        border: none;
        background-color: #DFA25F;
        color: #fff;
        font-size: 0.8rem;
        transition: background-color 0.3s ease;
        font-family: 'Prompt', sans-serif;
    }

    .open-hours button:hover{
        background-color: #fff;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
    }

    .gold-line{
        border-bottom: 1.5px solid #DFA25F;
        border-top: 1.5px solid #DFA25F;
        margin: 0px auto;
        max-width: 70px;
        height: 4px;
    }

@media only screen and (min-width: 991px){
    #location{
        padding: 100px 0px;
    }

    .location-container{
        width: 70%;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
    }

    .easy-find{
        width: 42vw;
        display: flex;
    }

    .easy-find .find-text{
        width: 50%;
        padding: 0;
        margin: 0;
    }


    .find-text img{
        width: 5rem;
    }

    .find-text h2{
        font-size: 1.8rem;
    }

    .easy-find .find-map{
        width: 50%;
        height: 100%;  
        margin: 0;
    }

    .open-hours{
        width: 23vw;
        margin: 0;
    }

    .open-hours h2{
        font-size: 2.3rem;
    }

    .open-hours h1{
        font-size: 1.8rem;
    }
 
    .gold-line{
        border-bottom: 1.5px solid #DFA25F;
        border-top: 1.5px solid #DFA25F;
        margin: 0px auto;
        max-width: 70px;
        height: 4px;
    }
}

</style>
