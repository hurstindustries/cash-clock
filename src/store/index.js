import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let interval;

export default new Vuex.Store({
  state: {
    hourlyRate: 0,
    hoursPerDay: 8,
    clockRunning: false,
    elapsedTime: 0,
  },
  getters: {
    hourlyRate: state => state.hourlyRate,
    hoursPerDay: state => state.hoursPerDay,
  },
  mutations: {
    SET_HOURLY_RATE: (state, payload) => {
      state.hourlyRate = payload;
    },
    SET_HOURS_PER_DAY: (state, payload) => {
      state.hoursPerDay = payload;
    },
    START: state => {
      state.clockRunning = true;
    },
    STOP: state => {
      state.clockRunning = false;
    },
    RESET: state => {
      state.elapsedTime = 0;
    },
    TICK: state => {
      state.elapsedTime++;
    },
  },
  actions: {
    setHourlyRate: async ({ commit }, payload) => {
      commit('SET_HOURLY_RATE', payload);
    },
    setHoursPerDay: async ({ commit }, payload) => {
      commit('SET_HOURS_PER_DAY', payload);
    },
    start: async ({ commit, state }) => {
      interval = setInterval(() => {
        if (state.elapsedTime < 8 * 60 * 60 * 1000) {
          commit('TICK');
        } else {
          commit('STOP');
        }
      }, 1000);

      commit('START');
    },
    stop: async ({ commit }) => {
      commit('STOP');
      clearInterval(interval);
    },
    reset: async ({ commit }) => {
      commit('RESET');
      commit('STOP');
      clearInterval(interval);
    },
  },
  modules: {},
});
