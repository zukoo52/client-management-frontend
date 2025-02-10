<template>
  
  <v-container>
    <br /><br />
    <v-card max-width="400" class="mx-auto">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email or Username"
            required
            :rules="[required]"
            v-model="form.email"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            :rules="[required]"
            v-model="form.password"
          ></v-text-field>
          <br />
          <v-btn :loading="loading" color="primary" @click="login()"
            >Login</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import authApi from "@/Api/Modules/auth";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      form: {},
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      await authApi.login(this.form);
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
