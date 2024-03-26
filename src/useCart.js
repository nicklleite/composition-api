import { ref } from "vue"

export default function useCart() {
    const items = ref([])

    const addItem = (item) => {
        items.value.push(item)
    }

    const removeItem = (index) => {
        items.value.splice(index, 1)
    }

    return {
        items,
        addItem,
        removeItem
    }
}