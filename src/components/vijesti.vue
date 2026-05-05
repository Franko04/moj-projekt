<script setup>
import {ref} from 'vue'
import Button from './Button.vue';



const sveVijesti=ref([
    {id: 1, datum: "22.3.2026.", lokacija: "Visisci", naslov: "Capljina bolja od Visica", slika:"https://caportal.net/wp-content/uploads/2025/04/HNK-Capljina-NK-Ljubuski-2025_5249.jpg"},
    {id: 2, datum: "20.3.2026", lokacija: "Capljina", naslov: "Capljina na Bjelavama protiv Kruseva", slika: "https://caportal.net/wp-content/uploads/2025/06/hnk-capljina-nk-jedinstvo-bihac-8.jpg"},
    {id: 3, datum: "13.3.2026", lokacija: "Capljina", naslov: "Zavrsetak polusezone na 1. mjestu", slika: "https://caportal.net/wp-content/uploads/2025/07/prozivka-hnk-capljina-7.jpg"},
    {id: 4, datum: "6.3.2026", lokacija: "Citluk", naslov: "Poraz od Brotnja u Citluku", slika: "https://caportal.net/wp-content/uploads/2025/06/hnk-capljina-nk-jedinstvo-bihac-8.jpg"},
    {id: 5, datum: "1.3.2026", lokacija: "Klis", naslov: "Pobjeda u Butrovic polju 7 0", slika: "https://caportal.net/wp-content/uploads/2025/07/prozivka-hnk-capljina-7.jpg"}
])
const glavnaVijest=sveVijesti.value[0];
const ostaleVijesti=sveVijesti.value.slice(1);


</script>

<template>
   
    <div class="glavni">
        <div class="lijevi1">
            <div class="slika1" :style="{ backgroundImage: `url(${glavnaVijest.slika})`, backgroundSize: 'cover' }"></div>
            <div class="text1">
                
                <h1>{{ glavnaVijest.naslov }}</h1>
                <h5>{{ glavnaVijest.lokacija }} {{ glavnaVijest.datum }}</h5>
                <Button label="Vise" class="dugme"/>
            </div>
        </div>

        <div class="lijevakartica" v-for="(vijest, index) in ostaleVijesti" :key="vijest.id" :style="{ top: (4 + (index * 24)) + '%' }">
            <div class="malaslika" :style="{ backgroundImage: `url(${vijest.slika})`, backgroundSize: 'cover' }"></div>
            <div class="malitext">
                <h2>{{ vijest.naslov }}</h2>
                <h5>{{ vijest.lokacija }} {{ vijest.datum }}</h5>
                <Button label="Vise" class="dugme2"/>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
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
        background-color: #000249;
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
        font-family: tahoma;
        position: absolute;
        margin: 0%;
        left: 15px;
        font-size: 30px;
    }
    .text1 h5{
        color: rgb(117, 117, 117);
        font-family: tahoma;
        position: absolute;
        top: 12%;
        left: 15px;
    }
    .lijevakartica{
        width: 46%;
        position: absolute;
        top: 3%;
        right: 2%;
        height: 20%;
        background-color: #000249;
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
        font-family: tahoma;
        position: absolute;
        left: 3%;
    }
    .malitext h5{
        color: rgb(117, 117, 117);
        font-family: tahoma;
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