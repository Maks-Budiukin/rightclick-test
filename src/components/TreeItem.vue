<template>
    <li class="pl-4">
        <p>&#8594; {{ item.name }}</p>
        <ul v-if="item.children.length">
            <TreeItem v-for="item in item.children" :key="item.id" :item="item" />
        </ul>
    </li>
</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>