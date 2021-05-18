
 import Cookies from 'js.cookie';
 import axios from 'axios';

const apiLogin = "https://127.0.0.1:8000/api/auth/";


export const state = () =>({
    isLoggedIn  : false,
    userLoggedIn : ''
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
   },
   
}
export  const actions = {  
    getUserLogged() {
        return Cookies.get("userLogged");
      }, 
    async registrar(name, firtsName, phone_number, email, password) {
     const user = { name, firtsName, phone_number, email, password };
     const response = await  axios.post(`${apiLogin}/register`, user).then((res) => {
        this.result = res.data,

        console.log(response);
        console.log(res.data);
        console.log(result)

     })
    },
    async login(email, password) {
     const user = { email, password };
     const response = await  axios.post(`${apiLogin}/login`, user).then((res) => {
         this.resultado = res.data,

        console.log(response)
        console.log(res.data)
        console.log(resultado)
     })
   }
 };


//  export const state = () => ({
//     isLoggedIn: false,
//     status : '',
//     token : localStorage.getItem('token') || '',
//     user : {}
// });

// export const mutations = {

//     setIsLoggedIn(state, payload) {
//         state.isLoggedIn = payload;
//     },

//     auth_request(state ){
//         state.status = 'loading'
//       },
//     auth_success(state, token, user){
//         state.status = 'success'
//         state.token = token
//         state.user = user
//       },
//     auth_error(state){
//         state.status = 'error'
//       },
//     logout(state){
//         state.status = ''
//         state.token = ''
//       },
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
//     },
//     login({commit}, user){
//         return new Promise((resolve, reject) => {
//           commit('auth_request')
//           axios({url: 'http://localhost:3000/auth/login', data: user, method: 'POST' })
//           .then(resp => {
//             const token = resp.data.token
//             const user = resp.data.user
//             localStorage.setItem('token', token)
//             axios.defaults.headers.common['Authorization'] = token
//             commit('auth_success', token, user)
//             resolve(resp)
//           })
//           .catch(err => {
//             commit('auth_error')
//             localStorage.removeItem('token')
//             reject(err)
//           })
//           console.log(resp)
//         })
//     },
//     register({commit}, user){
//         return new Promise((resolve, reject) => {
//           commit('auth_request')
//           axios({url: 'http://localhost:3000/auth/register', data: user, method: 'POST' })
//           .then(resp => {
//             const token = resp.data.token
//             const user = resp.data.user
//             localStorage.setItem('token', token)
//             axios.defaults.headers.common['Authorization'] = token
//             commit('auth_success', token, user)
//             resolve(resp)
//           })
//           .catch(err => {
//             commit('auth_error', err)
//             localStorage.removeItem('token')
//             reject(err)
//           })
//         })
//       },
//  };






