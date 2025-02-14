export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),

    children: [
      {
        path: "/NewClient",
        component: import("@/views/ClientDetails/NewClient.vue"),
      },
    ],
  },
];
