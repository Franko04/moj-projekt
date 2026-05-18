<script setup>
    import {onMounted, ref} from 'vue'
import { supabase } from '../../utils/supabase'
const i=1;
const poredak = ref([])
     async function dohvatiPoredak(){
          const {data, error} = await supabase
          .from('Poredak')
          .select ('Ekipa, Bodovi')
          .order('Bodovi', {ascending: false})
          .limit(8)
          
          if (error){
               console.error(error.message)
               return
          }
          poredak.value = data;
          console.log(data)
    }

    onMounted(()=>{
     dohvatiPoredak()
    })

</script>

<template>
    <div class="glavni">
        <div class="prethodna">
          
        </div>

        <div class="tablica">
          <div class="mjesta" v-for="mjesto in poredak">
               <div>
                    <h2 class="poz">{{ i++ }}</h2>
               </div>
               <div>
                    <h2>{{ mjesto.Ekipa }}</h2>
               </div>
               <div>
                    <h2>{{ mjesto.Bodovi }}</h2>
               </div>
          </div>
        </div>

          <div class="iduca">

          </div>
          
     </div>   
</template>

<style scoped>
.poz{
     padding-left: 40%;
}
h2{
     color: white;
     font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
     padding-top: 7px;
     float: left;
     padding-left: 10%;
}
.mjesta{
     display: grid;
     grid-template-columns: 1fr 5fr 1fr;
}

   .mjesta{
     width: 100%;
     height: 12.3%;
     border-bottom: solid white 1px;
   }  
   .glavni{
        background-color: rgb(12, 0, 58);
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
        border: 1px solid white;
   }
   .tablica{
        background-color: #00011d;
        border: 1px solid white;
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
        border: 1px solid white;
   }
</style>