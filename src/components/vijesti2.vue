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
    <div class="vj"><h1>Vijesti</h1></div>
    <div class="glavni">
        <div class="sporedni" v-for="vijest in vijesti">
            <div class="slika">
                <img class="sli" :src="vijest.Slika">
            </div>
            <div class="datumimjesto">
                <p class="dim">{{ vijest.Datum }} / {{ vijest.Mjesto }}</p>
            </div>
            <div class="naziv">
                <p class="naz">{{ vijest.Naziv }}</p>
            </div>
        </div>
    </div>

</template>

<style scoped>

.vj h1{
    margin: 0%;
    color: yellow;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    padding-top: 50px;
}
.vj{
    background-color: rgb(12, 0, 58);
    margin: 0px;
    width: 100%;
    height: 100px;
}
.glavni{
    width: 100%;
    min-height: 500px;
    background-color: rgb(12, 0, 58);
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.sporedni{
    min-height: 400px;
    background-color: #00011d;
    border-radius: 20px;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
}
.slika{
    width: 100%;
    height: 68%;

}
.datumimjesto{
    width: 50%;
    height: 10%;
}
.naziv{
    width: 99.5%;
    height: 20%;
}
.dim{
    color: rgb(99, 99, 99);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
}
.naz{
    color: rgb(255, 255, 255);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    float: left;
    margin-left: 10px;
    font-size: 30px;
    line-height: 1.1;
    text-align: left;
}
.sli{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0% 0%;
}

</style>