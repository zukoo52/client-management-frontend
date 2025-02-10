export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),

    // Singup Route

    children: [
      {
        path: "/TeacherSignup",
        component: import("@/views/Teacher/TeacherSignup.vue"),

      },
      {
        path: "/Studentsingup",
        component: import("@/views/Student/StudentSingUp.vue"),

      },
    ],
  },
];
