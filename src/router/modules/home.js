export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),

    children: [
      {
        path: "/",
        // component : import("..pages/index.vue")
        component: import("@/views/home.vue"),
      },
      {
        path: "/NewClient",
        component: import("@/views/ClientDetails/NewClient.vue"),


      },
    ],
  },
];
