import { ref } from "vue";
import axios from "axios";

export default function useProduct() {
  let projuct = ref([]);
  const getProduct = async () => {
    try {
      let response = await axios.get("/api/user");
      product.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { product, getProduct };
}
