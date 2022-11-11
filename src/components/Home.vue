<!-- User home component showing list of cameras -->
<template>
    <Navigation />   
    <div class="wrapper">
        <div class="inner">
            <div class="row">
                <!-- Displayed only when a API error occurs -->
                <p v-if="errorMessage">Error: <span>{{ errorMessage }}</span></p>
                <!-- showing list of cameras -->
                <div class="col" v-for="cam in cameraList" :key="cam">
                    <!-- linking each cam to its own page -->
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
                'errorMessage',
            ])
        },
        methods: {
            ...mapActions([
                'getCameraList'
            ]),
            goToCameraDetails(id) {
                //routing to specific camera page by passing cameraId as parameter
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
