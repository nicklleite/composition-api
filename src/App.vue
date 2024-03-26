<script setup>
import { ref } from "vue";
import CartItem from "./components/CartItem.vue";

const items = ref([
    { id: 1, name: "Product 10", price: 100, quantity: 1 },
    { id: 2, name: "Product 20", price: 200, quantity: 1 },
    { id: 3, name: "Product 30", price: 300, quantity: 1 },
]);

const handleRemove = (item) => {
    items.value = items.value.filter((i) => {
        return i.id !== item.id;
    });
    console.log("Items", items.value);
    // console.log("Remove item", item);
};

</script>

<template>
    <CartItem v-for="(item, key) in items" :cart-item="item" :key="key" @remove="handleRemove" />
</template>

<style scoped></style>
