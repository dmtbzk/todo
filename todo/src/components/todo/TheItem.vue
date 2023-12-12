<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item }}
            </li>
        </ul>
        item
    </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps(["items"]);
</script>