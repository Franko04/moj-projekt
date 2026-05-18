<script setup>
    import {ref} from 'vue'
    import InstagramSlika from '../assets/instagram.png'
    import WhatsappSlika from '../assets/whatsapp.png'
    import FacebookSlika from '../assets/facebook.png'

</script>

<template>
    <div class="glavni">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/hr/4/47/Hnk_capljina.svg" alt="">
        <a href="https://www.instagram.com/"><img class="ikona" id="insta" :src="InstagramSlika"></a>
        <a href="https://www.whatsapp.com/"><img class="ikona" id="whats" :src="WhatsappSlika"></a>
        <a href="https://www.facebook.com/"><img class="ikona" id="face" :src="FacebookSlika"></a>
        
    </div>
    <div class="copy">
        <h4>Copyright © 2026 HNK Capljina - Capljina. Sva prava zadržana.</h4>
    </div>
    
    <div class="developed">
        <h4>Developed by Franko Coric</h4>
    </div>

</template>

<style scoped>
    .developed{
        padding-top: 2%;
        padding-bottom: 2%;
        color: white;
        background-color: #00011d;
    }
    h4{
        margin: 0%;
    }
    .copy{
        background-color: #00011d;
        color: white;
    }
    
    h2{
        color: yellow;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        margin: 0%;
    }
    .ikona{
        width: 3%;
        filter: invert(100%);
    }
    #insta{
        position: absolute;
        top: 70%;
        left: 42%;
    }
    #face{
        position: absolute;
        top: 70%;
        left: 55%;
    }
    #whats{
        position: absolute;
        top: 70%;
        left: 48.5%;
    }
    .logo{
        width: 7%;
        position: absolute;
        top: 20px;
        left: 46.5%;
    }
    .glavni{
        width: 100%;
        height: 250px;
        background: #00011d;
        position: relative;
    }
</style>