<template>
    <ul>
        <li  v-for="item  in products">
            {{item.title}}-{{item.price | currency }}
            <br>
        <button  :disabled="!item.inventory"   @click="addProductToCart(item)">add to cart</button>
        </li>
    </ul>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  computed: mapState({
      products: state=> state.products.all
  })
  ,
  methods: mapActions("cart",["addProductToCart"]),
  created () {
      this.$store.dispatch("products/getAllProducts")
  }
};
</script>
