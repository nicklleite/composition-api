<script setup>
import { ref, reactive, toRefs, computed } from "vue";

const props = defineProps({
    cartItem: {
        type: Object,
        required: true,
    }
});

const emit = defineEmits(["remove"]);

const item = reactive(props.cartItem);

const increment = () => {
    item.quantity++;
};

const decrement = () => {
    item.quantity--;
};

const total = computed(() => {
    return item.quantity * item.price;
});

const { name, price, quantity } = toRefs(item);

const remove = () => {
    // alert("Remove item"); // Implement remove item logic here
    emit("remove", item);
};
</script>

<template>
    <div>
        <h1>Item: {{ name }} - Price: {{ price }} - Quantity: {{ quantity }}</h1>

        <button @click="decrement">Decrement</button>
        <button @click="increment">Increment</button>
        <br>
        <button @click="remove">Remove</button>

        <p>Total: {{ total }}</p>
    </div>
</template>

<style scoped></style>
