import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {

      isLogin: sessionStorage.isLogin != undefined? JSON.parse(sessionStorage.isLogin): false,
      cartCount: sessionStorage.cartItems != undefined? JSON.parse(sessionStorage.cartItems).length: 0, 
      token :sessionStorage.token != undefined? JSON.parse(sessionStorage.token) : null, 
      user :sessionStorage.user != undefined? JSON.parse(sessionStorage.user) : null, 

    }
  },
  mutations: {

    setUser(state, user){
      console.log({state,user})
      state.user = user
      sessionStorage.setItem('user', JSON.stringify(user));
    },

    setToken(state, token){
      console.log({state,token})
      state.token = token
      sessionStorage.setItem('token', JSON.stringify(token));
    },

    loginStatus(state, isLogin){
      state.isLogin = isLogin
      sessionStorage.setItem('isLogin', JSON.stringify(isLogin));
    },

    updateCartCount(state, val){
        state.cartCount += val 
    },

  }
})

export default store

