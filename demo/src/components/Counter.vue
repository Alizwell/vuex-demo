<template>
  <div>
    <div v-on:click="increment">
      {{ count }} : {{ id }} : {{ name }} : {{todo}}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "Vuex";
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState({
      id: "id",
      name: "name"
    }),
    ...mapGetters({
      todo: "doneTodos"
    })
  },
  methods: {
    // increment() {
    //   this.$store.commit("increment");
    // }
    // ...mapMutations(["increment"])
    ...mapActions({
      increment () {
        this.$store.dispatch({
          type:'increment',
          amount:10
        });
      }
    })
  }
};
</script>


<style lang="css">
</style>