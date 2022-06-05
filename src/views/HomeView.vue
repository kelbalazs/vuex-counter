<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<div
    :style="{color: $store.state.colourCode}"
   class="counter">
  {{$store.state.counter}}
</div>
<div class="counter-squared">
  {{$store.state.counter}}
  <sup>2</sup> =
  {{counterSquared}}
</div>
<div class="buttons">
  <button @click="$store.dispatch('decreaseCounter')">-</button>
  <button @click="$store.dispatch('increaseCounter')">+</button>
</div>
<input 
  v-model="colourCode"
  placeholder="Enter colour code"
  type="text">
  </div>
</template>

<script>
export default {
  name: 'Home',

  computed: {
    colourCode:{
      get() {
        return this.$store.state.colourCode
      },

      set(newValue){
        this.$store.dispatch('setColourCode', newValue)
      }
    },
    ...mapGetters([
      'counterSquared'
    ])
  }

}


</script>


<style>
  div {
    margin-bottom: 10px;
  }
  .counter {
    font-size: 80px;
  }
  .buttons button {
    font-size: 40px;
    width: 100px;
    margin: 0 10 px;
  }
</style>