import homeRoute from "./modules/home";
import dashboardRoute from "./modules/AdminSide/dashboard";
import TutorJobs from "./modules/Student/TutorJobs";
import AllTeachers from "./modules/Teacher/AllTeachers,js";
import { createRouter, createWebHistory } from "vue-router";
import Requesttutor from "./modules/Student/Requesttutor";
import Bidproposal from "./modules/Teacher/Bidproposal";
import login from "./modules/login";
import StudentSingUp from "./modules/singup";
import TeacherSignup from "./modules/singup";

const routes = [
  ...homeRoute,
  ...dashboardRoute,
  ...TutorJobs,
  ...AllTeachers,
  ...Requesttutor,
  ...Bidproposal,
  ...login,
  ...StudentSingUp,
  ...TeacherSignup,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
