export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),

    // login Route

    children: [
      {
        path: "/login",
        component: import("@/views/Login.vue"),
      },
    ],
  },
];
