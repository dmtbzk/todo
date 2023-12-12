<template>
    <div>
        <TheHeader @visibleSidebar="toggleSidebar"/>
        <TheSidebar v-if="mobileMenuVisible"/>
        <div class="container max-w-[1200px] mx-auto py-16">
          <router-view />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "../components/layout/TheHeader.vue";
import TheSidebar from "../components/layout/TheSidebar.vue";

const mobileMenuVisible = ref(false);


const toggleSidebar = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value
}
</script>