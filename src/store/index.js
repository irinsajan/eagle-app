import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router';


export default createStore({
    state: {
        loginError: null,
        refreshToken: null,
        cameraList: [],
        cameraData: {},
    },
    mutations: {
        //helps to display login error on login page, if any
        loginStop: (state, errorMessage) => {
            state.loginError = errorMessage;
        },
        updateRefreshToken: (state, refreshToken) => {
            state.refreshToken = refreshToken;
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
            //fetches and stores refresh_token upon login
            axios.defaults.headers = {
                Authorization: "Basic ZGV2X3Rlc3Q6M0gxQmY2bUNjdElncEN1enZybnlla2YzVmhBVUVuS0o=",
                Accept: "application/json",
            }

            axios
                .post("http://localhost:8080/oauth/token?grant_type=password&scope=write&username=" + loginData.email + "&password=" + loginData.password)
                .then(response => {
                    localStorage.setItem('refreshToken', response.data.refresh_token);
                    commit('loginStop', null);
                    commit('updateRefreshToken', response.data.refresh_token);
                    router.push({name: 'home'})
                })
                .catch(error => {
                    //displays error if login fails
                    commit('loginStop', error.response.data.error);
                    commit('updateRefreshToken', null);
                })
        },

        fetchRefreshToken({ commit }) {
            //fetches refresh_token from localStorage whenever required
            commit('updateRefreshToken', localStorage.getItem('refreshToken'));
        },

        setAuthHeader({ dispatch }) {
            //setting authorisation header for all calls to get access token
            dispatch('fetchRefreshToken')

            axios.defaults.headers = {
                Authorization: "Basic ZGV2X3Rlc3Q6M0gxQmY2bUNjdElncEN1enZybnlla2YzVmhBVUVuS0o=",
                Accept: "application/json",
            }
        },

        getCameraList({ state, commit, dispatch }) {
            //to get the list of cameras on the user home page
            dispatch('setAuthHeader')

            axios
                .post("http://localhost:8080/oauth/token?grant_type=refresh_token&scope=write&refresh_token=" + state.refreshToken)
                .then(response => {
                    axios.defaults.headers = {
                        Authorization: "Bearer" + response.data.access_token,
                        Accept: "application/json",
                    }
        
                    axios
                        .get("http://localhost:8080/rest/v2.4/cameras/")
                        .then(response1 => {
                            commit('updateCameraList', response1.data)
                        })
                        .catch(error1 => console.log(error1))
                })
                .catch(error => console.log(error))
                   
            
        },

        getCameraData({ state, commit, dispatch }, cameraId) {
            //to get the details of a specific camera
            dispatch('setAuthHeader')

            axios
                .post("http://localhost:8080/oauth/token?grant_type=refresh_token&scope=write&refresh_token=" + state.refreshToken)
                .then(response => {
                    axios.defaults.headers = {
                        Authorization: "Bearer" + response.data.access_token,
                        Accept: "application/json",

                    }

                    axios
                        .get("http://localhost:8080/rest/v2.4/cameras/" + cameraId)
                        .then(response1 => {
                            commit('updateCameraData', response1.data)
                        })
                        .catch(error1 => console.log(error1))
                })
                .catch(error => console.log(error))

            
        },

        logOut({ state, dispatch }) {
            //log out function to route to login page and to delete the tokens as well
            dispatch('setAuthHeader')

            axios
                .post("http://localhost:8080/oauth/token?grant_type=refresh_token&scope=write&refresh_token=" + state.refreshToken)
                .then(response => {
                    axios.defaults.headers = {
                        Authorization: "Bearer" + response.data.access_token,
                        Accept: "application/json",
                    }

                    axios.delete("http://localhost:8080/rest/v2.0/users/self/tokens/current")    
                })

            router.push({name: 'login'})
            
        }

    },
    getters: {

    },
    modules: {

    }
})