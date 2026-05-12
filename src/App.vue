<script setup>
    import { ref, onMounted } from 'vue'
    import { supabase } from '../utils/supabase'
</script>

<template>
  <div class="app"></div>
  <RouterView />
</template>

<style scoped>
  html, body, #app{
    margin: 0;
  }  

</style>
