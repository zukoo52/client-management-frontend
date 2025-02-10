import { api } from "../index";

export default {
  // login route
  async login(payload) {
    return await api.post("/login", payload).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loggedrole", res.data.roles[0].name);
      window.location.href = "/";
    });
  },

  // logout route
  async logout() {
    return await api.get("/logout").then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("loggedrole");

      window.location.href = "/";
    });
  },
  //Registration Routes [Singup]
  async register(payload) {
    return await api.post("/register", payload).then((res) => {
      alert("Registration successful! Please log in.");
      window.location.href = "/login";

    }).catch((error) => {
      console.error("Registration error:", error);
      alert("error in registration. Please try again brother.");
    });
  },

};
