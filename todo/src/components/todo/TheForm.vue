<template>
    <div>
        <form @submit.prevent="toDoAdd()">
            <input type="text" v-model="newItem" placeholder="Enter new todo item" class="border border-gray-500 rounded-md py-1 px-4"/>
            <button type="submit" class="bg-green-300 ml-6 py-1 px-8 rounded-md">
                Add
            </button>
        </form>
        <TheItem :items="items" />
    </div>
</template>
<script setup>
import { ref } from "vue";
import TheItem from "./TheItem.vue";

const newItem = ref("");
const items = ref([]);

const toDoAdd = () =>{
  console.log("burdaym");
  items.value.push(newItem.value);
  newItem.value = "";
  console.log(items.value);
};
</script>