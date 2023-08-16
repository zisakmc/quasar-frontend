<template>
  <div class="col-sm-5 col-md-3">
    <div class="q-pa-md">
      <q-card class="my-card q-pa-md" flat bordered>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        <div class="row">
          <div class="col">
            <q-item-section class="q-mt-md q-gutter-md text-h6 text-bold">
              <q-item-label>Product</q-item-label>
            </q-item-section>

            <q-badge outline color="orange" label="Available" />
          </div>
          <div class="col1">
            <q-item-section class="q-ma-sm">
              <q-item-label class="text-bold">$2838</q-item-label>
            </q-item-section>
          </div>
        </div>
        <q-item-section class="q-ma-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            impedit sunt corporis, doloribus earum tenetur modi iste sequi minus
          </p>
        </q-item-section>
        <q-item-section class="q-mt-md">
          <q-rating
            v-model="rating"
            icon="star_border"
            size="2.4em"
            icon-selected="star"
            color="yellow-8"
            readonly
          />
        </q-item-section>
        <div class="flex justify-between q-ma-md">
          <q-card-actions align="left">
            <q-btn
              flat
              style="background: whitesmoke"
              color="black"
              icon="shopping_bag"
              label="Add to bag"
            />
          </q-card-actions>

          <q-card-actions align="right">
            <q-btn
              flat
              style="background: whitesmoke"
              color="black"
              icon="shopping_cart"
              label="Buy Now"
            />
          </q-card-actions>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const rating = ref(3);
</script>
