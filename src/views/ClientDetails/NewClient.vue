<template>
  <v-container class="main-container">
    <h1 class="form-title">Add a New Client</h1>
    <v-row justify="center">
      <v-col lg="8" md="10" sm="12">
        <v-card class="form-card">
          <v-card-text>
            <v-form ref="form" @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12">
                  <p class="input-label">Full Name</p>
                  <v-text-field
                    v-model="formData.name"
                    class="input-field"
                    placeholder="Full Name"
                    variant="outlined"
                    :rules="[v => !!v || 'Name is required']"
                    required
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
                    :rules="[
                      v => !!v || 'Email is required',
                      v => /.+@.+\..+/.test(v) || 'Email must be valid'
                    ]"
                    required
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
                    :rules="[
                      v => !!v || 'Phone number is required',
                      v => v.length >= 10 || 'Phone number must be at least 10 digits'
                    ]"
                    required
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
                    :rules="[v => !!v || 'Address is required']"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row justify="center" class="mt-4">
                <v-btn class="cancel-btn" color="#FF5252" @click="cancel" :disabled="loading">
                  Cancel
                </v-btn>
                <v-btn
                  class="submit-btn"
                  color="#388E3C"
                  @click="submitForm"
                  :loading="loading"
                >
                  Submit
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Debug Info (remove in production) -->
    <v-row v-if="debugInfo" class="mt-4">
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <pre>{{ debugInfo }}</pre>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import clientApi from "@/Api/Modules/clientApi";
import { toast } from "@/Toast/toast";

export default {
  data() {
    return {
      loading: false,
      debugInfo: null,
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
    async submitForm() {
      this.debugInfo = null;
      if (!this.$refs.form.validate()) {
        toast("Please fill in all required fields correctly", "error");
        return;
      }

      this.loading = true;
      try {
        this.debugInfo = {
          requestPayload: this.formData,
          apiEndpoint: '/Client/StoreClientDetails'
        };

        const response = await clientApi.storeClientDetails(this.formData);
        
        this.debugInfo = {
          ...this.debugInfo,
          response: response.data
        };

        if (response.data.success || response.status === 201) {
          toast("Client created successfully", "success");
          // Wait for the toast to be visible
          setTimeout(() => {
            this.$router.push("/client-details/all-clients");
          }, 1000);
        } else {
          throw new Error(response.data.message || 'Failed to create client');
        }
      } catch (error) {
        console.error("Error creating client:", error);
        this.debugInfo = {
          ...this.debugInfo,
          error: {
            message: error.message,
            response: error.response?.data
          }
        };
        
        let errorMessage = 'Failed to create client';
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        } else if (error.response?.data?.error) {
          errorMessage = error.response.data.error;
        }
        
        toast(errorMessage, "error");
      } finally {
        this.loading = false;
      }
    },
    cancel() {
      if (this.loading) return;
      
      if (confirm("Are you sure you want to cancel? Any unsaved changes will be lost.")) {
        this.$router.push("/client-details/all-clients");
      }
    },
    resetForm() {
      if (this.$refs.form) {
        this.$refs.form.reset();
      }
      this.formData = {
        name: "",
        email: "",
        phone: "",
        company: "",
        address: ""
      };
      this.debugInfo = null;
    }
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
