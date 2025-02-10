export default [
  {
    path: "/admin",
    component: import("@/layouts/admin.vue"),

    children: [
      {
        path: "/",
        // component : import("..pages/index.vue")
        component: import("@/views/AdminSide/Dashboard.vue"),
      },
    ],
  },
];
