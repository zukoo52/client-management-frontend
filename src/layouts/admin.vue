<template>
  <v-app>
    <div>
      <v-row>
        <v-col lg="2" md="2" cols="12">
          <div class="webview">
            <SideBar />
          </div>
          <div class="mobileview">
            <MobileSideBar /></div
        ></v-col>
        <v-col lg="10" md="10" cols="12">
          <div class="horizantal_paddings pt-4 horizantal">
            <HorizantlBar />
            <div class="mt-12"></div>
            <h2>{{ $route.meta.pageTitle }}</h2>
            <div class="content">
              <router-view />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import MobileSideBar from "@/components/MobileSideBar.vue";
import HorizantlBar from "@/components/HorizantalBar.vue";
export default {
  components: {
    SideBar,
    MobileSideBar,
    HorizantlBar,
  },
};
</script>
<style lang="scss" scoped></style>
