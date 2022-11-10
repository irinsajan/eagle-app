<template>
    <div class="list-wrapper">
        <div class="list-inner">
        </div>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'Home',
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
        }
    }


    
</script>

<style scoped>
    .list-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #0091DA;
    }

    .list-inner {
        width: 450px;
        margin: auto;
        background-color: #EFEFEF;
        padding: 40px 55px 45px 55px;
        border-radius: 15px;
    }
</style>
