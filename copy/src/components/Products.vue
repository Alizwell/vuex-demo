<template>
  <div>
      <h3>Products</h3>
      <ul>
          <li  v-for="item  in Products">
              {{item.name}}-${{item.price}}<br>
            <button  @click="addToCart(item)">add to cart</button>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
      ...mapState([ "Products" ])
  },
  methods: {
      addToCart ( item ) {
          this.$store.commit('addToCount',item.price);
          this.$store.commit('addToShopList',item);
      },      
  }
};
</script>
<style lang="css">
</style>