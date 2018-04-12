import Chatbox from './index.js';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-chatbox', Chatbox);
  }
};