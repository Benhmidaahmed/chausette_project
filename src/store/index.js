// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    events: [],
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
  },
  actions: {
    fetchEvents({ commit }) {
      // Simuler la récupération d'événements depuis une API
      const events = [
        { id: 1, name: 'Événement 1' },
        { id: 2, name: 'Événement 2' },
      ];
      commit('setEvents', events);
    },
  },
});
