<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUpdated, onUnmounted } from "vue";

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
    emit("remove", item);
};

onMounted(() => {
    console.log("Mounted");
});

onUpdated(() => {
    console.log("Updated");
});

onUnmounted(() => {
    console.log("Unmounted");
});

</script>

<template>
    <div>
        <h1>Item: {{ name }} - Price: {{ price }} - Quantity: {{ quantity }}</h1>

        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <br>
        <button @click="remove">Remove</button>

        <p>Total: {{ total }}</p>
    </div>
</template>

<style scoped></style>
