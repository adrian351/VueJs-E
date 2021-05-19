
 import Cookies from 'js.cookie';
 import axios from 'axios';

const apiLogin = "https://127.0.0.1:8000/api/auth/";


export const state = () =>({
    isLoggedIn  : false,
    userLoggedIn : '',
    user: null
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
   },

   LogOut(state){
        state.user = null
   }
   
}
export  const actions = {  
    setAuthStatus({ commit, state }, payload) {
        commit('setIsLoggedIn', payload);
        const cookieParams = {
            isLoggedIn: state.isLoggedIn
        };
        this.$cookies.set('auth', cookieParams, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7 
        });
    },

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
    },

    async LogOut({commit}){
        let user = null
        commit('logout', user)
    }
};

export const getters = {
    setAuthStatus: state => !!state.isLoggedIn
};


export default  {
    state, 
    getters,
    actions,
    mutations
}


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
//  };






