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
                <v-btn block @click="$router.push('/NewClient')" class="nav-btn">Add New Client</v-btn>
              </v-list-item>
            </template>
          </v-menu>
          <v-list-item>
            <v-btn block @click="$router.push('/AllClients')" class="nav-btn">View Clients</v-btn>
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
            <v-img src="@/assets/logo.png" max-height="100" max-width="100"></v-img>
          </router-link>
        </div>
      </v-col>

      <v-spacer></v-spacer>









      <div class="web_only_view">
        <v-list-item class="mr-6">
          <v-btn block class="AddNewbtn" @click="$router.push('/NewClient')" outlined >Add New Client</v-btn>
        </v-list-item>
      </div>
      <div class="web_only_view">
        <v-list-item class="mr-6">
          <v-btn block color="primary" @click="$router.push('/AllClients')" outlined class="request-btn">View Clients</v-btn>
        </v-list-item>
      </div>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      drawer: null,
      signupdialog: false,
      token: localStorage.getItem("token"),
    };
  },
  methods: {
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>
.header-bar {
  background-color: #1E3A8A
   !important;
   padding-left: 100px;
   padding-right: 100px;
   @media (max-width: 768px) {
    padding-left:0;
        }

        @media (max-width: 600px) {
          padding-left:0;
        }

        @media (max-width: 1024px) {
          padding-left:0;
        }

   }

.nav-link {
  color: #fff;
  font-family: "Poppins", sans-serif;
}

.request-btn {
  background-color: #2196F3;
  border: 2px solid #dce4db;
  color: white !important;
  text-transform: none;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.25);
  }
}
.AddNewbtn{
  background-color: #4CAF50;
  border: 2px solid #dce4db;
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
