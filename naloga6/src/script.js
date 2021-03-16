import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import 'bootstrap';
import JQuery from 'jquery';

window.$ = JQuery;
// window.$ = noConflict();
import { routes } from './routes.js';
import { store } from './store/store.js';

import ajax from 'ajax';

import MainComponent from './components/MainComponent.vue';

new Vue({
  el: '#app',
  render: h => h(MainComponent),
  store,
});
