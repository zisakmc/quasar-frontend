import profile from "../pages/ProfilePage.vue";
import order from "../pages/OrderPage.vue";
import about from "../pages/AboutPage.vue";
import login from "../pages/LoginPage.vue";
import ShoppingKart from "../pages/ShoppingKart.vue";
const routes = [
  {
    name: "login",
    path: "/login",
    component: login,
    meta: {
      middleware: "guest",
      title: "login",
    },
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/profile",
        name: "profile",
        component: profile,
      },
      {
        path: "/order",
        name: "order",
        component: order,
      },
      {
        path: "/about",
        name: "about",
        component: about,
      },
      {
        path: "/shoppingKart",
        name: "shoppingKart",
        component: ShoppingKart,
      },
    ],
    meta: {
      middleware: "auth",
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
