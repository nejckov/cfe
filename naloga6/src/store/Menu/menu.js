import { getters } from './getters.js';
import { actions } from './actions.js';
import { mutations } from './mutations.js';


const state = {
  menu: [
    {
      title: 'Izdelki',
    },
    {
      title: 'Košarica',
    },
    {
      title: 'O nas',
    },
    {
      title: 'Zaposlitev',
    }
  ]
}


export default {
  state,
  getters,
  mutations,
  actions
};
