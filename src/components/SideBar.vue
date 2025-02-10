<template>
  <div class="sidebar">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      permanent
    >
      <div class="background">
        <div class="d-flex justify-content-start">
          <div class="pt-5">
            <v-img
              width="100px"
              src="@/assets/images/360_F_90672947_9o36fMzvYpFoS2cvgxACFUR0wleV5Yq5.jpg"
            ></v-img>
          </div>
          <div class="pt-10">
            <span class="font-wight-bold heading">E-Tutor</span>
          </div>
        </div>

        <div class="ml-5 pt-5">
          <v-list nav>
            <v-list-item
              active-class="ative_color"
              prepend-icon="mdi-home-account"
              title="Dashboard"
              value="Dashboard"
              @click="$router.push('/admin')"
            >
            </v-list-item>
          </v-list>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.ative_color {
  background-color: rgb(40, 156, 210);
  color: white;
}
</style>
