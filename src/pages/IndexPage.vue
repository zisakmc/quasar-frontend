<template>
  <q-page>
    <SliderView />
    <div class="row">
      <CardView />
      <CardView />
      <CardView />
      <CardView />
      <CardView />
    </div>
  </q-page>
</template>

<script setup>
import CardView from "src/components/CardView.vue";
import SliderView from "src/components/SliderView.vue";
</script>
