<template>
    <div class="bg-slate-200 shadow-md shadow-slate-300 py-4">
        <div class="container max-w-[1200px] px-8 mx-auto md:px-0">
            <div class="flex items-center flex-row justify-between">
                <div>
                    <h1>
                        Logo
                    </h1>
                </div>
                <div class="flex items-center flex-row space-x-8">
                    <div>
                        <ul class="flex justify-end list-none mb-0 space-x-4">
                            <li>
                                About Us
                            </li>
                            <li>
                                Contact Us
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <AlignJustify  color="black" size="16" @click="openSidebar"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { AlignJustify } from "lucide-vue-next";

const emit = defineEmits(["visibleSidebar"]);

const openSidebar = () => {
  emit("visibleSidebar");
};
</script>