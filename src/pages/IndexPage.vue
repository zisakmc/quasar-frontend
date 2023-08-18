<template>
  <q-page>
    <SliderView />

    <div class="row">
      <CardView
        v-for="products in product"
        :key="products.id"
        product="{{
        products.name
        }}"
        price="2389"
        description="hellothe"
      />
    </div>
  </q-page>
</template>

<script setup>
import CardView from "src/components/CardView.vue";
import SliderView from "src/components/SliderView.vue";

import onMounted from "vue";
import useProduct from "src/js/composable/product";

const { product, getProduct } = useProduct();
onMounted(getProduct);
</script>
