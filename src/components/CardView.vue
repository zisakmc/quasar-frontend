<template>
  <div v-if="product.length === 0">
    <h1 class="q-pa-md text-semibold">
      No product Available please wait for update
    </h1>
  </div>
  <div
    v-for="products in product"
    :key="products.id"
    class="row items-start q-qutter-md q-pa-md"
  >
    <div>
      <q-card class="my-card" flat bordered>
        <!-- product image -->
        <div class="q-ma-xs items-center">
          <q-img
            class="fixed-image"
            :src="getPath(products.image)"
            alt="image"
          />
        </div>
        <div class="row q-pa-sm">
          <div class="col">
            <q-item-section class="q-mt-md q-gutter-md text-h6 text-bold">
              <!-- name of the product -->
              <q-item-label> {{ products.name }}</q-item-label>
            </q-item-section>

            <q-badge outline color="orange" label="Available" />
          </div>
          <div class="col1">
            <q-item-section class="q-ma-sm">
              <!-- price of the product -->
              <q-item-label class="text-bold"
                >${{ products.price }}</q-item-label
              >
            </q-item-section>
          </div>
        </div>
        <q-item-section class="q-ma-md">
          <!-- product description -->
          <p>{{ products.description }}</p>
        </q-item-section>
        <div class="row q-ma-sm no-wrap items-center">
          <q-rating
            v-model="rating"
            icon="star_border"
            size="1.0em"
            icon-selected="star"
            color="yellow-8"
            readonly
          />
          <!-- TODO: -->
          <span class="text-caption text-grey-9 q-ml-sm">3 (553) </span>
        </div>
        <q-card-actions align="around">
          <q-btn
            flat
            style="background: whitesmoke"
            color="black"
            icon="shopping_bag"
            label="Add to bag"
            size="sm"
          />
          <q-btn
            flat
            style="background: whitesmoke"
            color="black"
            icon="shopping_cart"
            label="Buy Now"
            size="sm"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import useProduct from "src/js/composable/product";
import { api } from "src/boot/axios";
const { product, getProduct } = useProduct();
onMounted(getProduct);

function getPath(image) {
  const base = api.defaults.baseURL + "/";
  return base + image;
}

const rating = ref(3);
</script>
<style>
.fixed-image {
  object-fit: cover;
  height: 150px;
  max-width: 265px;
}
</style>
