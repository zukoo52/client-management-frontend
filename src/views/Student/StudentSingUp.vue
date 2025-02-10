<template>
  <div class="signup-container">
    <h1>Student Registration</h1>
    <p>Please fill in the information below to sign up as a Student:</p>
    <form @submit.prevent="submitForm" class="signup-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>

      <div class="form-group">
        <label for="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" v-model="formData.password_confirmation" required />
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="formData.address" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="formData.phone" required />
      </div>

      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="formData.gender" required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" class="submit-button">Register</button>
    </form>
  </div>
</template>

<script>
import AuthApi from "@/Api/Modules/auth";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "",
        phone: "",
        gender: "",
        role: "student"
      }
    };
  },
  methods: {
    async submitForm() {
      try {

        await AuthApi.register(this.formData);
        alert("Registration successful! Please log in.");
        this.$router.push("/login");
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please check the provided information.");
      }
    }
  }
};
</script>

<style scoped>
.signup-container {
  max-width: 600px;
  margin: 32px auto;
  padding: 32px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

p {
  text-align: center;
  margin-bottom: 24px;
  color: #666;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 8px;
}

input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border 0.3s;
}

input:focus, select:focus {
  border-color: #F9A825;
}

.submit-button {
  background-color: #14536D;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0faade;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .signup-container {
    padding: 24px;
  }

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
    margin-bottom: 16px;
  }

  .form-group {
    gap: 8px;
  }

  input, select {
    padding: 6px;
    font-size: 14px;
  }

  .submit-button {
    padding: 10px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .signup-container {
    padding: 16px;
    margin: 16px auto;
  }

  h1 {
    font-size: 19px;
  }

  p {
    font-size: 12px;
  }

  .submit-button {
    padding: 8px;
    font-size: 13px;
  }
}
</style>

