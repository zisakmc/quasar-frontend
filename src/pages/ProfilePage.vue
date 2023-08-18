<template>
  <q-card class="flex q-pa-md q-mt-lg">
    <div class="flex justify-center q-mt-xs">
      <q-avatar size="7em">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </div>
    <div class="flex-col q-pa-md">
      <q-item-section class="text-weight-medium">
        <table>
          <th>
            <td>Name</td>
            <td>email</td>
            <td>phone</td>
          </th>
          <tbody>
            <div v-for="users in user" :key="users.id">
<tr>
  <td>{{ users.name }}</td>
  <td>{{ users.email}}</td>
  <td>{{ users.phone }}</td>
</tr>

            </div>
          </tbody>
        </table>
      </q-item-section>
    </div>
  </q-card>
</template>

<script setup>
import useUser from "app/src/js/composable/user";
import { onMounted } from "vue";

const { user,getUser } = useUser();
onMounted(getUser);
</script>
