<template>
    <Navigation />   
    <div class="wrapper">
        <div class="inner">
            <div class="row">
                <div class="col" v-for="cam in cameraList" :key="cam">
                    <a @click="goToCameraDetails(cam.cameraId)"><img src="../assets/cam.png" /></a>
                    <h2> {{cam.cameraId}} </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex'
    import router from '../router';
    import Navigation from './Navigation.vue'


    export default {
        name: 'Home',
        components: {
            Navigation,
        },
        created() {
            this.getCameraList()
        },
        computed: {
            ...mapState([
                'cameraList',
            ])
        },
        methods: {
            ...mapActions([
                'getCameraList'
            ]),
            goToCameraDetails(id) {
                router.push({name: 'camera', params: {id: id}})
            }
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
        width: 80%;
    }
    .col {
        text-align: center;
    }
    a {
        cursor: pointer;
    }
</style>
