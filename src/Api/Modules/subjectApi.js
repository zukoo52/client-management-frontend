import { api } from "../index";

export default {
  async getAllSubjects() {
    return await api.get("/subject/allsubject");
  },

  async storeSubject(payload) {
    return await api.post("/subject/storesubject", payload);
  },

  async updateSubject(id, payload) {
    return await api.put(`/subject/updatsubject/${id}`, payload);
  },

  async deleteSubject(id) {
    return await api.delete(`/subject/deletesubject/${id}`).then(() => {
      // window.location.href = "/admin/subjects";
    });
  },
};
