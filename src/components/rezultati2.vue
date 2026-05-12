<script setup>
    import { ref, onMounted } from 'vue';
    import { supabase } from '../../utils/supabase';

    const rezultati = ref([])
     async function dohvatiRezultate(){
          const {data, error} = await supabase
          .from('Rezultati')
          .select ('domacin, gost, golovidomacin, golovigost, mjesto, Datum')
          
          if (error){
               console.error(error.message)
               return
          }
          rezultati.value = data;
          console.log(data)

         
          
    }

    onMounted(()=>{
     dohvatiRezultate()
    })
</script>

<template>
    <div class="glavni">
        <h1>Rezultati</h1>

        <div class="nazivi">
            <p>Kolo</p>
            <p>Domacin</p>
            <p>Rezultat</p>
            <p>Gost</p>
            <p>Datum</p>
            <p>Mjesto</p>
        </div>

        <div class="sporedni" v-for ="(rezultat, index) in rezultati" :key="index">
            <p>{{ index + 1 }}</p>
            <p id="zuto">{{ rezultat.domacin }}</p>
            <p>{{ rezultat.golovidomacin }}</p>
            <p>{{ rezultat.golovigost }}</p>
            <p id="zuto">{{ rezultat.gost }}</p>
            <p>{{ rezultat.Datum }}</p>
            <p>{{ rezultat.mjesto }}</p>
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
        border-radius: 5px;
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