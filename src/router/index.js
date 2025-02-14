import homeRoute from "./modules/home";
import AllClients from "./modules/ClientsDetails/AllClients,js";
import NewClient  from "./modules/ClientsDetails/NewClient"


import { createRouter, createWebHistory } from "vue-router";

const routes = [
  ...homeRoute,
  ...AllClients,
  ...NewClient
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
