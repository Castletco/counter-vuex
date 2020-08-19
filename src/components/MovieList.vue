<template>
    <div>
        <h2>{{ genre }}</h2>
        <MovieListItem v-for="movie in movies" :movie="movie" :key="movie.id" />
    </div>
</template>


<script>
import MovieListItem from "@/components/MovieListItem.vue";

export default {
    name: "MovieList",
    components: {
      MovieListItem
    },
    props: {
      genre: String
    },
    computed: {
      movies() {
      return this.$store.getters
        .sortedMoviesByGenre(this.genre)
        .sort((movieA, movieB) => movieB.score - movieA.score);
      }
    }
};
</script>
