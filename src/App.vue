<template>
  <nav>
    <div class="nav-container">
    <router-link class="delicious" to="/">cafe</router-link> 
    <img @click="toggle" id="dropDown" src="./assets/icons/bars-solid.svg" alt="">
    <div id="dropdown" class="nav-links hide">
    <router-link to="/">Home</router-link> 
    <router-link to="/menu">Menu</router-link>
    <router-link to="/blog" :comment = "comment">Blog</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/reservation">Reservation</router-link>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods:{
      toggle(){ 
        document.getElementById("dropdown").classList.toggle("show")}
    },
    created(){
      window.onclick = function(e) {
        if (!event.target.matches('#dropDown')){
          var dropdown = document.getElementById("dropdown")
          if(dropdown.classList.contains('show')){
            dropdown.classList.remove('show')
          }
        }
      }
    }
  }
</script>

<style>  
  .delicious{
    margin-left: 20px;
    margin-top: -10px;
  }
*{
  box-sizing: border-box;
  padding: 0;
  font-family: 'Oswald', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;  
}

nav {
  position: relative;
}

nav .nav-container{
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 20px;
}

nav #dropDown{
  width: 1.1rem;
  position: absolute;
  right: 20px;
  top: 0;
  fill: #fff;

}

nav .nav-container .logo{
  position: absolute;
  display: block;
  left: 20px;
}

nav .nav-container .nav-links{
  margin-top: 40px;
  background-color: #fff;
  overflow: hidden;
  height: 0;
  transition: all linear 300ms;
}

.show{
  height: 340px !important;
}

nav .nav-links a{
  display: block;
  text-align: center;
  color: #000;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  box-shadow: .5px 1px rgba(0, 0, 0, .1);
}

nav a{
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

nav a:hover{
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #DFA25F;
}

nav a:last-child{
  background-color: #DFA25F;
  padding: 12px 0;
  width: 100%;
  margin: 13px auto 0 auto;  
  font-size: .8rem;
  border-radius: 2rem;
  text-decoration: none !important;
  transition: all 200ms ease-in-out;
  text-transform: capitalize;
  font-family: 'Prompt', sans-serif;
  color: #fff;
  font-weight: 400;
}

nav a:last-child:hover{
  background-color: #232D41;
}


@media only screen and (min-width: 991px){
  .delicious{
    margin-top: 0px;
    margin-left: 0px;
  }

*{
  box-sizing: border-box;
  padding: 0;
  font-family: 'Oswald', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;  
}

nav {
  position: relative;
}

nav .nav-container{
  align-items: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 25px;
  display: flex;
}

nav #dropDown{
  width: unset;
  position: unset;
  right: unset;
  top: unset;
  fill: unset;
  display: none;
}

nav .nav-container .logo{
  position: unset;
  display: unset;
  left: unset;
}

nav .nav-container .nav-links{
  margin-top: unset;
  background-color: unset;
  overflow: unset;
  height: unset;
  transition: unset;
  right: 0;
  align-items: center;
  position: absolute;
  display: flex;
}

.show{
  height: unset;
}

nav .nav-links a{
  display: unset;
  text-align: unset;
  color: #fff;
  padding: unset;
  border-bottom: unset;
  box-shadow: unset;
}

nav a{
  font-weight: 500;
  margin-right: 40px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 15px;
}

nav a:hover{
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #DFA25F;
}

nav a:last-child{
  background-color: #DFA25F;
  padding: 1vh 1vw;
  width: unset;
  margin: 0;
  font-size: .8rem;
  border-radius: 2rem;
  text-decoration: none !important;
  transition: all 200ms ease-in-out;
  text-transform: capitalize;
  font-family: 'Prompt', sans-serif;
  color: #fff;
  font-weight: unset;
}

nav a:last-child:hover{
  background-color: #232D41;
}
}
</style>
