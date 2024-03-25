<script setup>
import { ref, reactive, toRef, toRefs, computed, watch, watchEffect } from "vue";

const message = ref("message");

const item = reactive({
    name: "Item",
    price: 100,
    quantity: 1,
});

const increment = () => {
    item.quantity++;
};

const decrement = () => {
    item.quantity--;
};

const changeItem = () => {
    item.name = "New Item";
    item.price = 200;
};

const total = computed(() => {
    return item.quantity * item.price;
});

const { name, price, quantity } = toRefs(item);

// Lazy by default
// Eager -> immediate: true
// watch(total, (newValue, oldValue) => {
//     console.log("oldValue", oldValue);
//     console.log("newValue", newValue);
// }, { immediate: true });

// To watch a object, use a function to return the object as a parameter
watch(() => item.quantity, () => {
    if (item.quantity === 5) {
        alert("You cannot add more than 5 items.")

    }
}, { immediate: true });

watchEffect(() => {
    console.log("Price changed: ", item.price);
})

// toRef
// const nameRef = toRef(item, "name");
// console.log(nameRef.value);
// item.name = "New Product";
// console.log(nameRef.value);

// toRefs
// const { name, price } = toRefs(item);
// console.log("name", itemRef.name.value);
// console.log("price", itemRef.price.value);

// item.name = "New Product (toRefs)";
// item.price = 300;

// console.log("name", itemRef.name.value);
// console.log("price", itemRef.price.value);
</script>

<template>
    <div>
        <h1>{{ message }}</h1>

        <p>Item: {{ name }} - Price: {{ price }}</p>
        <button @click="changeItem">Change Item</button>
        <button @click="price++">Increment Price</button>

        <p>Quantity: {{ quantity }}</p>
        <button @click="decrement">Decrement</button>
        <button @click="increment">Increment</button>

        <p>Total: {{ total }}</p>
    </div>
</template>

<style scoped></style>
