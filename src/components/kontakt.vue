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
        <a href="https://www.whatsapp.com/"><img class="ikona" id="face" :src="WhatsappSlika"></a>
        <a href="https://www.facebook.com/"><img class="ikona" id="whats" :src="FacebookSlika"></a>
        
    </div>

</template>

<style scoped>

    .ikona{
        width: 4%;
        filter: invert(100%);
    }
    #insta{
        position: absolute;
        top: 70%;
        left: 40%;
    }
    #face{
        position: absolute;
        top: 70%;
        left: 48%;
    }
    #whats{
        position: absolute;
        top: 70%;
        left: 56%;
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