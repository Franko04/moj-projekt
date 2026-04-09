<script setup>
import Navigacija from './components/navigacija.vue'
import Glavna from './components/glavna.vue'
import Vijesti from './components/vijesti.vue'
import Onama from './components/onama.vue'
import Rezultati from './components/rezultati.vue'

</script>

<template>
  <div>
    <Navigacija />
  </div>

  <div>
    <Glavna />
  </div>

  <div>
    <Vijesti />
  </div>

  <div>
    <Onama />
  </div>

  <div>
    <Rezultati />
  </div>
  
</template>

<style>
  html, body, #app{
    margin: 0;
  }  

</style>
