import { api } from "../index";

export default {
  async allTeachers() {
    return await api.get("/teachers");
  },


  async registerUser(payload) {
    return await api.post("/register", payload);
  },

  async updateUser(id, payload) {
    return await api.put(`/usermanagement/${id}`, payload);
  },

  async deleteUser(id) {
    return await api.delete(`/usermanagement/${id}`).then(() => {
      // window.location.href = "/admin/users";
    });
  },
};
