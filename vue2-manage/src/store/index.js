import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const SET_USERNAME = "SET_USERNAME";
const SET_USERID = "SET_USERID";
const SET_TOKEN = "SET_TOKEN";

export default new Vuex.Store({
  state: {
    userName: sessionStorage.getItem("userName"),
    userId: sessionStorage.getItem("userId"),
    token: sessionStorage.getItem("token")
  },
  mutations: {
    [SET_USERNAME](state, userName) {
      state.userName = userName;
    },
    [SET_USERID](state, userId) {
      state.userId = userId;
    },
    [SET_TOKEN](state, token) {
      state.token = token;
    }
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit("SET_USERNAME", userInfo.userName);
      commit("SET_USERID", userInfo.userId);
      commit("SET_TOKEN", userInfo.token);
      sessionStorage.setItem("userName", userInfo.userName);
      sessionStorage.setItem("userId", userInfo.userId);
      sessionStorage.setItem("token", userInfo.token);
    }
  },
  modules: {}
});
