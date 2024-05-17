<template>
  <transition name="image" mode="in-out">
  <div class="carousel" v-show="visibleImage === index">
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
    
  }

  .carousel{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

  }

  .image-enter-active{
    animation: enterAnimation 1s ease-in-out;
  }
  .image-leave-active{
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
