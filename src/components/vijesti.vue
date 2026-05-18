<script setup>

import Button from './Button.vue';
import { ref, onMounted } from 'vue';
import { supabase } from '../../utils/supabase';

    const vijesti = ref([])
     async function dohvatiVijesti(){
          const {data, error} = await supabase
          .from('Vijesti')
          .select ('Naziv, Mjesto, Datum, Slika')
          .order('id', { ascending: false });
          
          if (error){
               console.error(error.message)
               return
          }
          vijesti.value = data;
          console.log(data)
    }

    onMounted(()=>{
     dohvatiVijesti()
    })




</script>

<template>
   
    <div class="glavni" v-if="vijesti.length > 0">
        <div class="lijevi1">
            <div class="slika1">
                <img :src="vijesti[0].Slika">
            </div>
            <div class="text1">
                
                <h1>{{ vijesti[0].Naziv }}</h1>
                <h5>{{ vijesti[0].Datum }} {{ vijesti[0].Mjesto }}</h5>
            </div>
        </div>

        <div class="lijevakartica1">
            <div class="malaslika">
                <img :src="vijesti[1].Slika">
            </div>
            <div class="malitext">
                <h2>{{ vijesti[1].Naziv }}</h2>
                <h5>{{ vijesti[1].Datum }} {{ vijesti[1].Mjesto }}</h5>
            </div>
        </div>

        <div class="lijevakartica2">
            <div class="malaslika">
                <img :src="vijesti[2].Slika">
            </div>
            <div class="malitext">
                <h2>{{ vijesti[2].Naziv }}</h2>
                <h5>{{ vijesti[2].Datum }} {{ vijesti[2].Mjesto }}</h5>
            </div>
        </div>

        <div class="lijevakartica3">
            <div class="malaslika">
                <img :src="vijesti[3].Slika">
            </div>
            <div class="malitext">
                <h2>{{ vijesti[3].Naziv }}</h2>
                <h5>{{ vijesti[3].Datum }} {{ vijesti[3].Mjesto }}</h5>
            </div>
        </div>

        <div class="lijevakartica4">
            <div class="malaslika">
                <img :src="vijesti[4].Slika">
            </div>
            <div class="malitext">
                <h2>{{ vijesti[4].Naziv }}</h2>
                <h5>{{ vijesti[4].Datum }} {{ vijesti[4].Mjesto }}</h5>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .glavni{
        position: relative;
        width: 100%;
        height: 740px;
        background-color: #00011d;
        margin-top: -7px;
    }

    .lijevi1{
        position: absolute;
        left: 2%;
        top: 3%;
        background-color: rgb(12, 0, 58);
        border-radius: 20px;
        width: 48%;
        height: 94%;
    }
    .slika1{
        
        width: 100%;
        height: 75%;
        border-radius: 20px 20px 0px 0px;
    }
    .text1{
        width: 85%;
        height: 7%;
        position: absolute;
        left: 10%;
        top: 82%;
        border-left: yellow solid 4px;
    }
    .text1 h1{
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        position: absolute;
        margin: 0%;
        left: 15px;
        font-size: 30px;
    }
    .text1 h5{
        color: rgb(117, 117, 117);
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        position: absolute;
        top: 12%;
        left: 15px;
    }
    .lijevakartica1{
        width: 46%;
        position: absolute;
        top: 3%;
        right: 2%;
        height: 20%;
        background-color: rgb(12, 0, 58);
        border-radius: 20px;
    }
    .lijevakartica2{
        width: 46%;
        position: absolute;
        top: 27.5%;
        right: 2%;
        height: 20%;
        background-color: rgb(12, 0, 58);
        border-radius: 20px;
    }
    .lijevakartica3{
        width: 46%;
        position: absolute;
        top: 52.5%;
        right: 2%;
        height: 20%;
        background-color: rgb(12, 0, 58);
        border-radius: 20px;
    }
    .lijevakartica4{
        width: 46%;
        position: absolute;
        top: 77%;
        right: 2%;
        height: 20%;
        background-color: rgb(12, 0, 58);
        border-radius: 20px;
    }
    .malaslika{
        height: 100%;
        width: 30%;
        border-radius: 20px 0px 0px 20px;
    }
    .malitext{
        position: absolute;
        top: 32%;
        left: 33%;
        height: 30%;
        width: 60%;
        border-left: solid 4px yellow;
    }
    .malitext h2{
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        position: absolute;
        left: 3%;
    }
    .malitext h5{
        color: rgb(117, 117, 117);
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        position: absolute;
        left: 3%;
    }

    .dugme{
        width: 100px;
        height: 40px;
        margin-left: 500px;
        border-radius: 10px;
        border: solid 1px white;
        color: white;
        background-color: #00011d;
        margin-top: 60px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    .dugme2{
        width: 80px;
        height: 30px;
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-color: #00011d;
        position: relative;
        margin-top: 60px;
        margin-left: 360px;
        border-radius: 10px;
        border: solid 1px white;
    }
    :hover .dugme{
        
    }
    
</style>