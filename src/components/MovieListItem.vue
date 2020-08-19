<template>
    <div class="movie">
        <h5>{{ movie.title }}</h5>
        <span class="score">score: {{ movie.score }}</span>
        <div class="voting-buttons-container">
        <button @click="incrementMovieScore(movie.id)">Upvote</button>
        <button @click="decrementMovieScore(movie.id)">Downvote</button>
        </div>
    </div>
</template>


<script>
    import { mapMutations } from "vuex";
  
  export default {
    name: "MovieListItem",
    props: {
      movie: {
        id: Number,
        score: Number,
        title: String,
        genre: String
      }
    },
    methods: {
      ...mapMutations(["incrementMovieScore", "decrementMovieScore"])
    }
  };
</script>

