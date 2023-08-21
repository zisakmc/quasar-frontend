import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default function useProduct() {
  let product = ref([]);
  const getProduct = async () => {
    try {
      let response = await axios.get("http://localhost:8000/api/product");
      product.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { product, getProduct };
}
