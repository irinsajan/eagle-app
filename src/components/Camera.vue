<template>
    <Navigation />   
    <div class="wrapper">
        <div class="inner">
            <img src="../assets/cam.png" />
            <p><b>Camera ID:</b> {{cameraData.cameraId}}</p>
            <p><b>Name:</b> {{cameraData.name}}</p>
            <p><b>Device Type ID:</b> {{cameraData.deviceTypeId}}</p>
            <p><b>Eth MAC Address:</b> {{cameraData.ethMacAddress}}</p>
            <p><b>Zone ID:</b> {{cameraData.zoneId}}</p>
            <p><b>Account ID:</b> {{cameraData.accountId}}</p>
        </div>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex'
    import Navigation from './Navigation.vue'


    export default {
        name: 'Camera', 
        components: {
            Navigation,
        },
        props: ['id'],
        created() {
            this.getCameraData(this.id)
        },
        computed: {
            ...mapState([
                'cameraData',
            ])
        },
        methods: {
            ...mapActions([
                'getCameraData'
            ]),
        }
    }

</script>

<style scoped>
    img {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
    }

    .inner {
        width: 450px;
        text-align: center;
    }

    @media screen and (max-width: 580px) {
        .inner {
            width: 380px;
        }
    }

    @media screen and (max-width: 420px) {
        .inner {
            width: 340px;
        }
    }

    p {
        text-align: left;
        margin-top: 15px;
    }

</style>
