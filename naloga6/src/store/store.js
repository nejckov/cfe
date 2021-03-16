import Vue from 'vue';
import Vuex from 'vuex';
import ajax from 'ajax';

Vue.use(Vuex);

import Menu from './Menu/menu.js';
import Product from './Product/product.js';

export const store = new Vuex.Store({
  modules: {
    Menu,
    Product,
  },
  data() {
    return {

    }
  },

});
