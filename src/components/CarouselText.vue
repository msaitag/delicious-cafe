<template>
  <transition name="text" mode="in-out">
    <div class="carouselText" v-show="visibleImage === index">
      <slot></slot>
    </div>
  </transition>
  </template>
  
  <script>
  export default {
    props:['visibleImage', 'index'],
    data(){
      return{
  
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @media only screen and (max-width: 480px) {
    .carouselText{
      width: 80% !important;
    }
  }

    .carouselText{
      position: absolute;
      top: 45%;
      transform: translateY(-50%);
      text-align: center;
      left: 0;
      right: 0;    
      width: 40%;  
      margin-left: auto;
      margin-right: auto;
    }

    .text-enter-active{
      animation: enterAnimation 1s ease-in-out;
    }

    .text-leave-active{
      animation: leaveAnimation 1s ease-in-out;
    }

  @keyframes enterAnimation {
    from{opacity: 0}
    to{opacity: 1}
  }

  @keyframes leaveAnimation {
    from{opacity: 1}
    to{opacity: 0}
  }
  </style>
  