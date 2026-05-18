<script setup>
    import { ref, onMounted } from 'vue';
    import { supabase } from '../../utils/supabase';

    const raspored = ref([])
     async function dohvatiRaspored(){
          const {data, error} = await supabase
          .from('Raspored')
          .select ('domacin, gost, golovidomacina, golovigosta, mjesto, datum')
          
          if (error){
               console.error(error.message)
               return
          }
          raspored.value = data;
          console.log(data)

         
          
    }

    onMounted(()=>{
     dohvatiRaspored()
    })
</script>

<template>
    <div class="glavni">
        <h1>Raspored</h1>

        <div class="nazivi">
            <p>Kolo</p>
            <p>Domacin</p>
            <p>Rezultat</p>
            <p>Gost</p>
            <p>Datum</p>
            <p>Mjesto</p>
        </div>

        <div class="sporedni" v-for ="(rasp, index) in raspored" :key="index">
            <p>{{ index + 1 }}</p>
            <p id="zuto">{{ rasp.domacin }}</p>
            <p>{{ rasp.golovidomacina }}</p>
            <p>{{ rasp.golovigosta }}</p>
            <p id="zuto">{{ rasp.gost }}</p>
            <p>{{ rasp.datum }}</p>
            <p>{{ rasp.mjesto }}</p>
        </div>
    </div>

</template>

<style scoped>
    h1{
        margin-bottom: 20px;
        color: yellow;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        padding-top: 0px;
    }
    .glavni {
        width: 100%;
        min-height: 50vh;
        background-color: rgb(12, 0, 58);
        display: flex;
        flex-direction: column; 
        align-items: center;    
        gap: 15px;           
        padding: 20px 0;        
    }
    .nazivi{
        width: 90%;
        height: 30px;
        color: white;
        display: grid;
        grid-template-columns: 0.5fr 2fr 1fr 2fr 1.5fr 1.5fr;
        align-items: center;
    }
    .sporedni {
        width: 90%;             
        background-color: #00011d;
        height: 40px;
        border-radius: 10px;
        color: white;           
        display: grid;
        grid-template-columns: 0.5fr 2fr 0.5fr 0.5fr 2fr 1.5fr 1.5fr;
        align-items: center;
        padding: 10px;
    }

    p{
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    #zuto{
        color: yellow;
    }

</style>