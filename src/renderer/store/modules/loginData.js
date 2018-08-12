import axios from 'axios'
import { stat } from 'fs';

const state = {
    isLogedIn: false,
    accessToken: '',

    //user Info
    name: '',
    email: '',
    pic: ''

}

const getters = {
    isUserLogedIn(state) {
        return state.isLogedIn;
    },
    getAccessToken(state) {
        return state.accessToken;
    },
    userData(state){
        return state;
    }
}

const mutations = {
    logInUser(state, acquiredAccessToken) {
        state.isLogedIn = true;
        state.accessToken = acquiredAccessToken;
    },
    logOutUser(state) {
        state.pic = '';
        state.name = '';
        state.email = '';
        state.accessToken = '';
        state.isLogedIn = false;
    },
    getUserData(state, acquiredUserData) {
        state.name = acquiredUserData.name;
        state.email = acquiredUserData.email;
        state.pic = acquiredUserData.picture;
    }
}

const actions = {
    getUserData(context) {
        var url =   `https://www.googleapis.com/oauth2/v2/userinfo?fields=email%2Cname%2Cpicture`+`&access_token=${state.accessToken}`;
        axios.get(url)
            .then(function (response) {
                context.commit('getUserData',response.data);                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}