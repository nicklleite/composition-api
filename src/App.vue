<script setup>
import CartItem from "./components/CartItem.vue";
import useCart from "./useCart";

const { items, addItem, removeItem } = useCart();

addItem({ id: 1, name: "Product 10", price: 100, quantity: 1 });


</script>

<template>
    <CartItem v-for="(item, key) in items" :cart-item="item" :key="key" @remove="removeItem" />
</template>

<style scoped></style>
