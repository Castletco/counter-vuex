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
  getters: {
    sortedMoviesByGenre: state => genre => {
      const filteredMovies = state.movies.filter(
      movie => movie.genre === genre
      );
      return filteredMovies.sort(
        (movieA, movieB) => movieB.score - movieA.score
      );
    },
  },
  mutations: {
    incrementMovieScore(state, movieId) {
      const movieToIncrement = state.movies.find(movie => movie.id === movieId);
      const updatedMovie = {
        ...movieToIncrement,
        score: movieToIncrement.score + 1,
      };
      state.movies = [
        updatedMovie,
        ...state.movies.filter(movie => movie.id !== movieId),
      ];
    },
    decrementMovieScore(state, movieId) {
      const movieToDecrement = state.movies.find(movie => movie.id === movieId);
      const updatedMovie = {
        ...movieToDecrement,
        score: movieToDecrement.score - 1,
      };
      state.movies = [
        updatedMovie,
        ...state.movies.filter(movie => movie.id !== movieId),
      ];
    },
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
