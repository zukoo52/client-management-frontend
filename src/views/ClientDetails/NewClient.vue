<template>
  <v-container class="main-container">
    <h1 class="form-title">Add a New Client</h1>
    <v-row justify="center">
      <v-col lg="8" md="10" sm="12">
        <v-card class="form-card">
          <v-card-text>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <p class="input-label">Full Name</p>
                  <v-text-field
                    v-model="formData.name"
                    class="input-field"
                    placeholder="Full Name"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <p class="input-label">Email Address</p>
                  <v-text-field
                    v-model="formData.email"
                    class="input-field"
                    placeholder="Email Address"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <p class="input-label">Phone Number</p>
                  <v-text-field
                    v-model="formData.phone"
                    class="input-field"
                    placeholder="Phone Number"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <p class="input-label">Company</p>
                  <v-text-field
                    v-model="formData.company"
                    class="input-field"
                    placeholder="Company"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <p class="input-label">Address</p>
                  <v-textarea
                    v-model="formData.address"
                    class="input-field"
                    placeholder="Address"
                    variant="outlined"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row justify="center" class="mt-4">

                <v-btn
                  class="submit-btn"
                  color="#388E3C"
                  :loading="loading"
                  @click="addRequest"
                >
                  Submit
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import clientApi from "@/Api/Modules/clientApi";

export default {
  data() {
    return {
      loading: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        company: "",
        address: ""
      }
    };
  },
  methods: {
    async addRequest() {
      this.loading = true;
      try {
        await clientApi.storeClientDetails(this.formData);
        this.loading = false;
        this.$router.go(0); // Refresh page after successful form submission
      } catch (error) {
        this.loading = false;
      }
    },
   
  }
};
</script>

<style scoped>
.main-container {
  margin-top: 50px;
  padding-bottom: 50px;
}
.form-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #2C3E50;
}
.form-card {
  background: #F8F9FD;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.input-label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #2C3E50;
}
.input-field {
  width: 100%;
  border-radius: 8px;
}
.cancel-btn {
  margin-right: 10px;
  min-width: 120px;
}
.submit-btn {
  margin-left: 10px;
  min-width: 120px;
}
</style>
