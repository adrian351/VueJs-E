//         // por defecto
// import Cookies from 'js.cookie';
//  import axios from 'axios';

// // const token = Cookies.get('id_token');

// const apiLogin = "https://127.0.0.1:8000/api/";


// export default{

//    setUserLogged(userLogged) {
//         Cookies.set("userLogged", userLogged);
//    },
//    getUserLogged() {
//      return Cookies.get("userLogged");
//    },
//    registrar(name, firtsName, phone_number, email, password) {
//      const user = { name, firtsName, phone_number, email, password };
//      return axios.post(apiLogin + "register", user);
//     },
//    login(email, password) {
//      const user = { email, password };
//      return axios.post(apiLogin + "login", user);
//    }
// };

export const state = () => ({
    isLoggedIn: false
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    }
};

export const actions = {
    setAuthStatus({ commit, state }, payload) {
        commit('setIsLoggedIn', payload);
        const cookieParams = {
            isLoggedIn: state.isLoggedIn
        };

        this.$cookies.set('auth', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7 
        });
    }
};




