<template>
    <div  class="cart">
        <h3>Your Cart</h3>
        <p v-show="!products.length">
            <i>Please  add some products  to cart.</i>
        </p>
        <ul>
            <li  v-for="product in products">
                {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
            </li>
        </ul>
        <p>Total:{{ total | currency('￥',4) }}</p>
        <p>
            <button  :disabled="!products.length"  @click="checkout(products)">Checkout</button>
        </p>
        <p  v-show="checkoutStatus">Checkout {{ checkoutStatus}}.</p>
    </div>
</template>

<script>
import {  mapGetters,mapState ,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState({
                checkoutStatus:state=> state.cart.checkoutStatus               
            }),
            ...mapGetters("cart", {
                products: "cartProducts",
                total:"cartTotalPrice"
            })
        },
        methods:{
            // checkout (products ) {
            //     this.$store.dispatch("cart/checkout",products)
            // }
            //还可以这样写。。。
            ...mapActions({
                    checkout (dispatch , products) {
                        dispatch("cart/checkout",products)
                    }
                }
            )
        }
    }
</script>

<style>

</style>
