<template>
  <q-card class="q-pa-md">
    <div class="q-pa-md flex justify-start">
      <div class="flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1617727553252-65863c156eb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          style="max-width: 300px"
          class="gt-sm"
        />
      </div>
      <q-form class="item-center q-pa-md col">
        <q-label class="q-mb-md">email</q-label>
        <q-input
          class="q-mb-md q-mt-md"
          outlined
          v-model="email"
          type="email"
          label="email"
        />
        <q-label class="q-mt-md">password</q-label>
        <q-input
          class="q-mt-md"
          outlined
          v-model="password"
          filled
          label="password"
          :type="ispwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="ispwd ? 'visibility_off' : 'visibility'"
              class="pointer-cursor"
              @click="ispwd = !ispwd"
            />
          </template>
        </q-input>
        <q-btn class="q-mt-md" @click="login" label="Login" color="primary" />
      </q-form>
    </div>
  </q-card>
</template>
<script setup>
import { ref } from "vue";
import { api } from "../boot/axios";
const email = ref("");
const password = ref("");
const ispwd = ref(true);
const login = async () => {
  await api.get("/sanctum/csrf-cookie");
  await api.post("/login", {
    email: email.value,
    password: password.value,
  });

  const res = await api.get("/user");
  console.log(res);
};
</script>
