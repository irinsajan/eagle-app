import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router';


export default createStore({
    state: {
        loginError: null,
        accessToken: null,
        cameraList: [],
        cameraData: {},
    },
    mutations: {
        loginStop: (state, errorMessage) => {
            state.loginError = errorMessage;
        },
        updateAccessToken: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        updateCameraList: (state, cameraList) => {
            state.cameraList = cameraList;
        },
        updateCameraData: (state, cameraData) => {
            state.cameraData = cameraData;
        }
    },
    actions: {
        doLogin({ commit }, loginData) {
            axios.defaults.headers = {
                Authorization: "Basic ZGV2X3Rlc3Q6M0gxQmY2bUNjdElncEN1enZybnlla2YzVmhBVUVuS0o=",
                Accept: "application/json",
            }

            axios
                .post("http://localhost:8080/oauth/token?grant_type=password&scope=write&username=" + loginData.email + "&password=" + loginData.password)
                .then(response => {
                    localStorage.setItem('accessToken', response.data.access_token);
                    commit('loginStop', null);
                    commit('updateAccessToken', response.data.access_token);
                    router.push({name: 'home'})
                })
                .catch(error => {
                    commit('loginStop', error.response.data.error);
                    commit('updateAccessToken', null);
                })
        },

        getCameraList({state, commit}) {
            axios.defaults.headers = {
                Authorization: "Bearer" + state.accessToken
            }

            axios
                .get("http://localhost:8080/rest/v2.4/cameras/")
                .then(response => {
                    commit('updateCameraList', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getCameraData({state, commit}, cameraId) {
            console.log(cameraId)
            axios.defaults.headers = {
                Authorization: "Bearer" + state.accessToken
            }

            axios
                .get("http://localhost:8080/rest/v2.4/cameras/" + cameraId)
                .then(response => {
                    commit('updateCameraData', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        logOut() {
            router.push({name: 'login'})
        }

    },
    getters: {

    },
    modules: {

    }
})