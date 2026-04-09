<script setup>
import {ref} from 'vue'


</script>
    <template>
        <div class="navigacija">
            <a href="#pocetna">Pocetna</a>
            <a href="#uclanise">Uclani se</a>
            <a href="#vijesti">Vijesti</a>
            <a href="#onama">O nama</a>
            <a href="#rezultati">Rezultati</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#prijavise">Prijavi se</a>

        </div>
    </template>

<style scoped>
    .navigacija{
        background-color: #00011d;
        color: white;
        width: 100%;
        height: 60px;
    }
    .navigacija a{
        color: white;
        text-decoration: none;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        display: inline-block; 
        padding: 20px 50px;
    }
    a:hover{
        color: yellow;
    }

</style>