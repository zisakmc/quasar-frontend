import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default function useUser() {
  let user = ref([]);
  const getUser = async () => {
    try {
      let response = await axios.get("/api/user");
      user.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { user, getUser };
}
