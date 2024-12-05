// src/services/EventService.js
import axios from 'axios';

const apiUrl = 'https://api.example.com/events';

export default {
  getEvents() {
    return axios.get(apiUrl);
  },
};
