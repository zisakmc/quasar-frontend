<template>
  <q-card class="flex q-pa-md q-mt-lg">
    <div class="justify-center q-mt-xs">
      <q-avatar size="7em">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </div>
    <div class="q-pa-lg col">
      <q-form>
        <div class="q-qutter-y-md">
          <q-label>User Name</q-label>
          <q-input outlined v-model="usersName" label="User Name" />
          <q-label>email</q-label>
          <q-input outlined v-model="email" label="email" />
          <q-label>Address</q-label>
          <q-input outlined v-model="address" label="Address" />
          <q-label>Phone Number</q-label>
          <q-input
            outlined
            v-model="phoneNumber"
            label="Phone Number"
            type="number"
          />
          <q-btn label="summit" />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script setup>
import useUser from "app/src/js/composable/user";
import { onMounted, ref } from "vue";

//const { user, getUser } = useUser();
//onMounted(getUser);

const usersName = ref("");
const email = ref("");
const address = ref("");
const phoneNumber = ref("");
</script>
