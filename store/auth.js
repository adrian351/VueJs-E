import axios from 'axios';

const apiLogin = "https://reqres.in/api/";


export default{

    setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
      },
      getUserLogged() {
        return Cookies.get("userLogged");
      },
      register(email, password) {
        const user = { email, password };
        return axios.post(ENDPOINT_PATH + "regiser", user);
      },
      login(email, password) {
        const user = { email, password };
        return axios.post(ENDPOINT_PATH + "login", user);
      }
};


// export const state = () => ({
//     isLoggedIn: false
// });

// export const mutations = {
//     setIsLoggedIn(state, payload) {
//         state.isLoggedIn = payload;
//     }
// };

// export const actions = {
//     setAuthStatus({ commit, state }, payload) {
//         commit('setIsLoggedIn', payload);
//         const cookieParams = {
//             isLoggedIn: state.isLoggedIn
//         };

//         this.$cookies.set('auth', cookieParams, {
//             path: '/',
//             maxAge: 60 * 60 * 24 * 7 
//         });
//     }
// };




