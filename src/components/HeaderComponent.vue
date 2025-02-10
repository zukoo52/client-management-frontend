<template>
  <div class="header_background">
    <div class="mobile_only_view">
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list density="compact" nav>
          <v-menu offset-y>
            <template v-slot:activator="{}">
              <v-list-item @click="$router.push('/')">
                <v-btn block class="nav-btn">Home</v-btn>
              </v-list-item>

              <v-list-item>
                <v-btn block @click="login" v-if="!token" class="nav-btn">Login</v-btn>
                <v-btn block @click="logout" v-else class="nav-btn">Logout</v-btn>
              </v-list-item>

              <v-list-item>
                <v-btn block @click="signup" class="nav-btn">Signup</v-btn>
              </v-list-item>

              <v-list-item>
                <v-btn block @click="$router.push('/TutorJobs')" class="nav-btn">Find Tutor job</v-btn>
              </v-list-item>
            </template>
          </v-menu>
          <v-list-item>
            <v-btn block @click="$router.push('/AllTeachers')" class="nav-btn">Find Tutors</v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn block color="primary" @click="$router.push('/Requesttutor')" outlined class="request-btn">Request Tutor</v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <v-app-bar elevation="4" class="header-bar">
      <div class="mobile_only_view">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" style="color: #0a72af"></v-app-bar-nav-icon>
      </div>
      <v-col class="web_only_view">
        <div class="pl-5 pt-1">
          <router-link to="/">
            <v-img src="@/assets/logo.png" max-height="200" max-width="200"></v-img>
          </router-link>
        </div>
      </v-col>

      <v-spacer></v-spacer>

      <div class="web_only_view">
        <v-list-item class="mr-6">
          <v-btn text class="nav-link" @click="$router.push('/TutorJobs')">Find Tutor job</v-btn>
        </v-list-item>
      </div>

      <div class="web_only_view">
        <v-list-item class="mr-6">
          <v-btn text class="nav-link" @click="$router.push('/AllTeachers')">Find Tutors</v-btn>
        </v-list-item>
      </div>

      <!-- Login/Logout Button -->
      <div class="web_only_view">
        <v-list-item class="mr-6">
          <v-btn text class="nav-link" @click="login" v-if="!token">Login</v-btn>
          <v-btn text class="nav-link" @click="logout" v-else>Logout</v-btn>
        </v-list-item>
      </div>

      <!-- Signup Button -->
      <div class="web_only_view">
        <v-list-item class="mr-6">
          <v-btn text class="nav-link" @click="signup">Signup</v-btn>
        </v-list-item>
      </div>

      <div class="web_only_view">
        <v-list-item class="mr-6">
          <v-btn block color="primary" @click="$router.push('/Requesttutor')" outlined class="request-btn">Request Tutor</v-btn>
        </v-list-item>
      </div>
    </v-app-bar>

    <!-- Signup Dialog -->
    <v-dialog v-model="signupdialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h6">Signup Options</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="login-card" @click="signupAs('student')">
                <v-card-title>Signup as Student</v-card-title>
                <v-card-text>Create a student account</v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card class="login-card" @click="signupAs('teacher')">
                <v-card-title>Signup as Teacher</v-card-title>
                <v-card-text>Create a teacher account</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="signupdialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import userApi from "@/Api/Modules/userApi";
import auth from "@/Api/Modules/auth";
export default {
  data() {
    return {
      drawer: null,
      signupdialog: false,
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    async logout() {
      try {
        await auth.logout();
        this.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("loggedrole");
        this.$router.push("/login");
      } catch (error) {
        console.error("Logout failed:", error);
        alert("Failed to log out. Please try again.");
      }
    },
    login() {
      this.$router.push("/login");
    },
    signup() {
      this.signupdialog = true;
    },
    signupAs(role) {
      if (role === "student") {
        this.$router.push("/Studentsingup");
      } else if (role === "teacher") {
        this.$router.push("/TeacherSignup");
      }
      this.signupdialog = false;
    },
  },
  watch: {
    // Update the token dynamically if it changes in localStorage
    token(newToken) {
      this.token = newToken;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-bar {
  background-color: #2c3e50 !important;
}

.nav-link {
  color: #fff;
  font-family: "Poppins", sans-serif;
}

.request-btn {
  background-color: #3366ff;
  border: 2px solid #3366ff;
  color: white !important;
  text-transform: none;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.25);
  }
}

.login-card {
  color: #fff;
  background-color: #2c3e50;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
  .nav-btn {
    width: 100%;
    display: block;
    text-align: center;
    margin: 5px 0;
    color: white;
    background-color: #2c3e50;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
