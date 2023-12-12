<template>
    <div>
        <h1>
            User Data
        </h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Body
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in paginatedUserData" :key="user.id">
                    <td>
                        {{ user.title }}
                    </td>
                    <td>
                        {{ user.body }}
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <div class="flex flex-row items-center space-x-3">
                <button v-for="total in totalPages" :key="total.id" @click="currentPageDefine(total)"
                        :class="{'bg-black text-white' : total === currentPage}"
                >
                    {{ total }}
                </button>
            </div>
            <button @click="prevPage" :disabled="currentPage === 1">
                Previous Page
            </button>
            <span>{{ currentPage }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">
                Next Page
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
const userData = ref([]);
const currentPage = ref(1);
const pageSize = 10; 

onMounted(() => {
  listData();
});

const listData = async () => {
  const response = await userStore.userData();
  userData.value = response;
  currentPage.value = 1;
};

const paginatedUserData = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return userData.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(userData.value.length / pageSize));

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const currentPageDefine = (total) => {
  console.log(total);
  currentPage.value = total ;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>
