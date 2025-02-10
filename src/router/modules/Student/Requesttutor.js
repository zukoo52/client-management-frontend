export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),

    children: [
      {
        path: "/Requesttutor",
        component: import("@/views/Student/Requesttutor.vue"),
      },
    ],
  },
];
