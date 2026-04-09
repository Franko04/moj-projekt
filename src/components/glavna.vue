<script setup>
import {ref} from 'vue'
import glavnaSlika from '../assets/Glavnaslika.png'
const prikaziFormu = ref(false);
const poruka = ref('')
const ime = ref('')
const prezime = ref('')
const email = ref('')
const broj = ref('')
const adresa = ref('')
const postanski = ref('')

const potvrdiClanstvo = ()=>{
    if(ime.value && prezime.value && email.value && broj.value && broj.value && adresa.value && postanski.value){
        poruka.value = `${ime.value} uspjesno ste se prijavili`;
    }else{
        poruka.value = "niste sve unijeli";
    }
}


</script>
    <template>
        <div class="glavnaslika">
            <img :src="glavnaSlika">
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/hr/4/47/Hnk_capljina.svg">
            </div>
            <button @click="prikaziFormu = !prikaziFormu">Učlani se</button>
            <div class="forma" v-if="prikaziFormu">
                <h1>Postani clan</h1>
                <h4>Ovdje unesi svoje podatke</h4>
                <form action="" @submit.prevent>
                    <input class="ime" type="text" placeholder="Ime" v-model="ime">
                    <input class="prezime" type="text" placeholder="Prezime" v-model="prezime">
                    <input class="email" type="text" placeholder="E-mail adresa" v-model="email">
                    <input class="broj" type="number" placeholder="Broj telefona" v-model="broj">
                    <input class="adresa" type="text" placeholder="Kucna adresa" v-model="adresa">
                    <input class="postanski" type="number" placeholder="Postanski broj" v-model="postanski">
                    <button class="potvrdi" v-if="prikaziFormu" @click="potvrdiClanstvo">Potvrdi</button>
                    <button class="nazad" v-if="prikaziFormu" @click="prikaziFormu = false">Nazad</button>
                    <h4 class="poruka" v-if="poruka">{{ poruka }}</h4>
                    
                </form>
            </div>
            <div class="overlay" v-if="prikaziFormu">

            </div>

        </div>
    </template>
<style scoped>
.poruka{
    color: #ffffff;
    position: absolute;
    top: 88%;
    left: 35%;
}
.glavnaslika img{
    position: relative;
    width: 100%;
    height: 685px;
}
.glavnaslika button{
    position: absolute;
    top: 77%;
    left: 46%;
    width: 8%;
    height: 6%;
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid yellow;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    z-index: 2;
}

.glavnaslika button:hover{
    cursor: pointer;
    background-color: #000123;
    color: #ffffff;
    border: yellow solid 2px;
}
.logo{
    position: absolute;
    top: 25%;
    left: 46%;
    width: 8%;
    height: 15%;
}
.logo img{
    width: 100%;
    height: auto;
}
.forma{
    position: fixed;
    top: 13%;
    left: 37%;
    width: 26%;
    height: 75%;
    background-color: #000123;
    border-radius: 20px;
    border: 1px yellow solid;
    z-index: 3;
}
.forma h1{
    color: yellow;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.ime{
    height: 45px;
    width: 44%;
    border-radius: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: larger;
    position: absolute;
    left: 4%;
    top: 25%;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
}
.prezime{
    height: 45px;
    width: 44%;
    border-radius: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: larger;
    position: absolute;
    right: 3%;
    top: 25%;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
}
.email{
    height: 45px;
    width: 92%;
    border-radius: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: larger;
    position: absolute;
    right: 3%;
    top: 36%;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
}
.broj{
    height: 45px;
    width: 92%;
    border-radius: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: larger;
    position: absolute;
    right: 3%;
    top: 47%;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
}
.adresa{
    height: 45px;
    width: 92%;
    border-radius: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: larger;
    position: absolute;
    right: 3%;
    top: 58%;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
}
.postanski{
    height: 45px;
    width: 92%;
    border-radius: 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: larger;
    position: absolute;
    right: 3%;
    top: 69%;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
}
.overlay{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
}
form .potvrdi{
    position: absolute;
    top: 84%;
    left: 60%;
    width: 26%;
    height: 7%;
    border: yellow 1px solid;
}

form .nazad{
    position: absolute;
    top: 84%;
    left: 15%;
    width: 26%;
    height: 7%;
    border: yellow 1px solid;
}

</style>