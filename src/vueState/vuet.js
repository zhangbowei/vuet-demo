import Vue from 'vue'
import Vuet from 'vuet'
import user from './user'

Vue.use(Vuet);

export default new Vuet({
  modules: {
    user
  }
});
