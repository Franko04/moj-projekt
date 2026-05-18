<script setup>
import {ref} from 'vue'

</script>
    <template>
        <div class="navigacija">
            <RouterLink to="/">Pocetna</RouterLink>
            <a href="#uclanise">Uclani se</a>
            <RouterLink to="/vijesti">Vijesti</RouterLink>
            <RouterLink to="/onama">O nama</RouterLink>
            <RouterLink to="/rezultati">Rezultati</RouterLink>
            <a href="#prijavise">Raspored</a>

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