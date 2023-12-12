import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id   : "user",
  state: () => ({
    userInfo: [], 
  }),
  actions: {
    async userData(){
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.userInfo = response.data;
      console.log("res", response.data);
      return response.data
    }
  },
});