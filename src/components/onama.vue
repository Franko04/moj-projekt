<script setup>
    import {ref} from 'vue'
    const aktivno = ref('povijest');
    const postavi = (naziv)=>{
        aktivno.value = naziv;
    };
</script>

<template>
    <div class="histori">
        <nav>
            <button @click="postavi('povijest')">Povijest</button>
            <button @click="postavi('boje')">Boje</button>
            <button @click="postavi('grb')">Grb</button>
            <button @click="postavi('stadion')" href="#stadion">Stadion</button>
            <button @click="postavi('navijaci')" href="#navijaci">Navijaci</button>
        </nav>
        
        <div class="lijevo1">
            <h2 id="pov">HNK ČAPLJINA JE OSNOVANA</h2>
                <h1>1945.</h1>
        </div>
        <div class="desno1">
            <h1 v-if="aktivno==='povijest'">Povijest kluba</h1>
            <h4 v-if="aktivno==='povijest'">Prvo spominjanje savremenog oblika sporta u čapljinskom kraju veže se za kraj 19. i početak 20. vijeka. Naime, u doba Austro-Ugarske dolazi do osnivanja pojedinih sportskih grupa (uglavnom vezanih uz škole), a uz razne atletske discipline spominju se i igre s loptom. Prvo spominjanje nogometa i osnivanje nogometnog kluba datira iz 1919. godine, a vezano je za Aleksu Spahića iz Čapljine. Spahić je kao praški student u ljeto te godine donio prvu nogometnu loptu u čapljinski kraj, da bi već u jesen bio osnovan i nogometni klub koji je po neretvanskim uskocima nazvan „Uskok“. Uz „Uskok“, čapljinski klub iz tog vremena imao je i narodno ime „Valok“ ili „Valog“ što je bila izvedenica iz češke riječi valka, što znači rat, a valok je trebao označavati ratnika. Narodno ime je izgleda bilo prilično popularno pa je tako zabilježeno da je „Valog“ igrao utakmice sa klubovima iz Hercegovine, poput Zrinjskog, Veleža ili Leotara.</h4>
            
            <h1 v-if="aktivno==='boje'">Boje kluba</h1>
            <h4 v-if="aktivno==='boje'">Boje kluba Hnk Capljine su plava i zuta. To su ujedno i boje grada. Kroz povijest koristile su se takodjer plava, crna i crvena. Boje dresova su svijetlo plava koja predstavlja nebo i zuta koja pretstavlja Sunce. Boja stolica na tribinama je crvena. Boje na grbu su takodjer u proslosti bile crvene</h4>
        
            <h1 v-if="aktivno==='grb'">Grb kluba</h1>
            <h4 v-if="aktivno==='grb'">Grb naseg kluba je u obliku stita. Podijeljen je u tri dijela. U vrhu na lijevoj strani nalazi se sahovnica koja predstavlja nas narod. U desnom dijelu grba je povijsni toranj u Pocitelju koji je simbol grada. I u trecem dijelu nalazi se Sv Franjo zastitnik naseg grada pored kojeg se nalaze i dvije caplje po kojima je grad dobio ime. Ovaj grb je ujedno i grb grada Capljine jedino sto ga cini razlicitim jes naviv kluba u vrhu te lopta koja se nalazi na sahovnici</h4>

            <h1 v-if="aktivno==='stadion'">Bjelave</h1>
            <h4 v-if="aktivno==='stadion'">Stadion Bjelave napravljen je 1978. godine. Do tada je Capljina svoje utakmice igrala na stadionu u Tasovcicima tadasnjem stadionu Uskoka. Renovacija stadiona odrdjena je 2021. godine. Takodjer imamo i teren sa umjetnom travom za mlade na stadionu Uskok koji je takodjer renoviran iste godine. </h4>

            <h1 v-if="aktivno==='navijaci'">Patrioti</h1>
            <h4 v-if="aktivno==='navijaci'">Patrioti su skupina najvjernijih navijaca Hnk Capljine koji nas podrzavau na svakoj domacoj utakmici a i gostujucoj. Navijacka skupina krenula je sa radom 2007 godine koje je osnovao Igor Colic Rus. Najveca posjecenost na nasem stadionu bila je protiv GOSK a iz gabela 2014. godine. Grupa je na kratko prestala s radom no ponovno su se vratili jaci nego ikad zahvaljujuci Mirku Brkicu pokretacu i vodji danasnjih patriota.</h4>
        </div>
    </div>
</template>

<style scoped>

    
    .histori{
            
            background-image: 
                linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), /* Crni sloj (60% prozirnosti) */
                url('../assets/histori.png');
            width: 99.9%;
            height: 65%;
            position: absolute;
            top: 1480px;
        }
       
        .lijevo1{
            width: 600px;
            height: 340px;
            position: absolute;
            top: 65px;
            border-right: yellow solid 4px;

        }
        
        .desno1{
            width: 890px;
            height: 380px;
            position: relative;
            top: 20px;
            left: 604px;
        }

        .lijevo1 h2{
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            color: white;
            font-size: 60px;
            position: absolute;
            left: 60px;
            top: 50px;
        }

        .lijevo1 h1{
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            color: yellow;
            font-size: 150px;
            position: absolute;
            top: 190px;
            left: 170px;
            margin: 30px;
        }

        .desno1 h1{
            margin-left: 20px;
            color: yellow;
            margin-top: 60px;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }

        .desno1 h4{
            margin: 20px;
            color: white;
        }
        nav{
            position: absolute;
            margin: 0px;
            color: white;
            background-color: rgb(0, 0, 77);
            text-decoration: none;
        }
        button{
            color: white;
            text-decoration: none;
            margin: 5px;
            background-color: transparent;
            border: transparent;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }
        button:hover{
            color: yellow;
            cursor: pointer;
        }
</style>