import Chatbox from './index.js';

export default {
  install: function (Vue, options) {
    Vue.component('vue-chatbox', Chatbox);
  }
};