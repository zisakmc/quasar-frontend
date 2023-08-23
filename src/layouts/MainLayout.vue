<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-indigo">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <RouterLink to="/" class="text-white text-bold"> E-corp </RouterLink>
        </q-toolbar-title>
        <div class="gt-sm flex justify-center q-pl-md text-bold text-lg">
          <div>
            <ul>
              <RouterLink to="/" class="text-white">Home</RouterLink>
            </ul>
          </div>
          <div>
            <ul>
              <RouterLink to="/#" class="text-white">Service</RouterLink>
            </ul>
          </div>
          <div>
            <ul>
              <RouterLink to="/about" class="text-white">About</RouterLink>
            </ul>
          </div>
        </div>

        <div>
          <RouterLink to="/shoppingKart">
            <q-btn
              flat
              dense
              round
              icon="shopping_cart"
              color="white"
              class="q-ma-sm"
            >
              <q-badge color="red" floating class="q-ml-md">4</q-badge>
            </q-btn>
          </RouterLink>
          <q-avatar class="q-mr-md">
            <img src="https://cdn.quasar.dev/img/avatar.png" />

            <!--TODO:-->
            <q-fab v-model="fab" color="primary" direction="down">
              <q-fab-action
                color="primary"
                @click="onClick"
                icon="mail"
                label="Email"
              />
              <q-fab-action
                color="secondary"
                @click="onClick"
                icon="alarm"
                label="Alarm"
              />
            </q-fab>
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Dashboard </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "profiles",
    icon: "person",
    link: "profile",
  },
  {
    title: "Order",
    caption: "Track your order",
    icon: "local_shipping",
    link: "order",
  },
  {
    title: "Bag",
    caption: "Items in the bags",
    icon: "shopping_bag",
    link: "shoppingKart",
  },
  {
    title: "Shopping kart",
    caption: "Check your kart",
    icon: "shopping_cart",
    link: "shoppingKart",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      fab: ref(true),
      onClick() {},
    };
  },
});
</script>
