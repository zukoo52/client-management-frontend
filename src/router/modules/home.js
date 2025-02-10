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
        path: "/TutorJobs",
        // component : import("..pages/index.vue")
        component: import("@/views/Student/TutorJobs/jobcard.vue"),
      },
    ],
  },
];
