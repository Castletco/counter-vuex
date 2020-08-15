<template>
  <div>
    <h2>Family</h2>
    <ul>
      <li v-for="movie in familyMovies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FamilyMovieList",
  computed: {
    familyMovies() {
      return this.$store.state.movies.filter(movie => movie.genre === "Family");
    }
  }
};
</script>