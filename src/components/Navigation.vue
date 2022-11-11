<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
            <router-link to="/home" class="navbar-brand"><img src="../assets/logo-eagle.png" /></router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/home" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a @click="logOut" class="nav-link">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'Navigation',
        methods: {
            ...mapActions([
                'logOut'
            ]),
        }
    }
        
</script>

<style scoped>
    .navbar-light {
        background-color: #EFEFEF;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    }

    img {
        width: 80px;
        height: 80px;
    }
    a {
        cursor: pointer;
    }
</style>