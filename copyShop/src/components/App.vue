<template>
    <div>
        <h1>Shopping  Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <Products/>         
        <hr>
        <ShopCart/>
    </div>
</template>

<script>
import Products from './Products.vue'
import ShopCart from './ShopCart.vue'

export  default {
    components:{ Products, ShopCart }
}

</script>


