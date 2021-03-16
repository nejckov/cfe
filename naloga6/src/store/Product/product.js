import { getters } from './getters.js';
import { mutations } from './mutations.js';
import { actions } from './actions.js';


const state = {
  products: [],
  product: {
    img: String,
    title: String,
  },
  filterProducts: {
    img: '',
    title: '',
  }
};




export default {
  getters,
  mutations,
  actions,
  state
};
