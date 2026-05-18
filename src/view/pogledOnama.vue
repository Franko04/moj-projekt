<script setup>
    import Navigacija from '../components/navigacija.vue'
    import Onama from '../components/onama.vue'
    import Kontakt from '../components/kontakt.vue'
</script>

<template>
  <div>
    <Navigacija />
  </div>

  <div class="onama">
    <h1>O nama</h1>
  </div>

  <div>
    <Onama />
  </div>

  <div>
    <Kontakt />
  </div>
</template>

<style scoped>
    .onama{
            background-color: rgb(12, 0, 58);
            height: 130px;
        }
        .onama h1{
            margin: 0%;
            color: yellow;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            padding-top: 50px;
        }
</style>