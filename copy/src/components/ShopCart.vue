<template>
    <div>
        <h3>Your Cart</h3>
        <ul  v-if="shopList.length > 0">
            <li  v-for="item  in  shopList">
                {{item.name}}--{{item.length}}
            </li>
        </ul>
        <p v-else><i>Please add some products to cart.</i></p>
        <p>Total:{{total}}</p>
        <button  @click="checkout">check out</button>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters({
                total:'getCount',
                shopList:'getShopList'
            })
        },
        methods:{
            checkout () {

            }
        }
    }
</script>

<style>

</style>
