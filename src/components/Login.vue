<template>
    <div class="wrapper">
        <div class="inner">
            <img src="../assets/logo.png" />

            <form @submit.prevent="handleSubmit">        

                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Email" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Password" />
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-primary">Login</button>
                </div>
                <p v-if="loginError">Login error: <span>{{ loginError }}</span></p>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            ...mapState([
                'loginError',
            ])
        },
        methods: {
            ...mapActions([
                'doLogin'
            ]),
            handleSubmit() {
                this.doLogin({
                    email: this.email,
                    password: this.password
                });               

            }
        }
    }
</script>

<style scoped>
    img {
        width: 95%;
        height: auto;
    } 

  .inner {
    width: 450px;
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
    text-align: center;
    margin-top: 15px;
  }

  span {
    color: red;
  }

 
</style>


