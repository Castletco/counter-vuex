import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'The Hangover', genre: 'Comedy' },
      { id: 2, title: 'I Love You Man', genre: 'Comedy' },
      { id: 3, title: 'Liar Liar', genre: 'Comedy' },
      { id: 4, title: 'Cars', genre: 'Family' },
      { id: 5, title: 'Toy Story', genre: 'Family' },
      { id: 6, title: 'Wreck it! Ralph', genre: 'Family' },
    ]
  },
  mutations: {
   
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
