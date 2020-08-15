<template>
    <div class="hello">
        <p>{{ count }}</p>
        <button @click="onClick()">Click Me!</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      onClick() {
        this.$store.commit('increment')
      }
    }
}
</script>
