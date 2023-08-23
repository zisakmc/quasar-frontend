import { ref } from "vue";
import { api } from "../../boot/axios";
import { useRoute } from "vue-router";

export default function useProduct() {
  let product = ref([]);
  const getProduct = async () => {
    try {
      let response = await api.get("/api/product");
      product.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { product, getProduct };
}
