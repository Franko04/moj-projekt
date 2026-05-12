<script setup>
    import {onMounted, ref} from 'vue'
    import Button from './Button.vue'
import { supabase } from '../../utils/supabase'

</script>

<template>
    <div class="glavni">
        <div class="prethodna">
          
        </div>

        <div class="tablica">

        </div>

        <div class="iduca">
          
        </div>
        <Button label="Vise" class="dugme2"/>
    </div>
</template>

<style scoped>


   .glavni{
        background-color: #000249;
        width: 100%;
        height: 500px;
        margin-top: 0px;
        display: flex;
        position: relative;
   }
   .dugme2{
        width: 70px;
        border: white solid 1px;
        background-color: #00011d;
        border-radius: 8px;
        height: 35px;
        position: absolute;
        bottom: 20px;
        right: 20px;  
   }

   .prethodna{
        background-color: #00011d;
        width: 25%;
        height: 50%;
        border-radius: 20px;
        margin-right: 7.5%;
        margin-left: 5%;
        margin-top: 7.5%;
   }
   .tablica{
        background-color: #00011d;
        width: 25%;
        height: 70%;
        border-radius: 20px;
        margin-top: 4%;
        margin-right: 7.5%;
   }
   .iduca{
        background-color: #00011d;
        width: 25%;
        height: 50%;
        border-radius: 20px;
        margin-top: 7.5%;
   }
</style>