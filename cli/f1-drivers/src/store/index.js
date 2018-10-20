import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drivers: []
  },
  mutations: {
    fetchDrivers(state, payload) {
      state.drivers = payload.drivers;
    },
    addDriver(state, payload) {
      state.drivers.push(payload.driver);
    },
    removeDriver(state, payload) {
      state.drivers = state.drivers.filter(driver => driver.id !== payload.id);
    }
  },
  actions: {
    async fetchDrivers(store) {
      const drivers = await axios.get('drivers.json').then(res => res.data.drivers);

      store.commit({
        type: 'fetchDrivers',
        drivers
      });
    },
    addDriver(store, payload) {
      store.commit({
        type: 'addDriver',
        driver: payload
      });
    },
    removeDriver(store, payload) {
      store.commit({
        type: 'removeDriver',
        id: payload
      });
    }
  }, 
  plugins: [
    createLogger()
  ]
});
