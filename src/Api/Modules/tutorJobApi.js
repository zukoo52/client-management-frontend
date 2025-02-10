import { api } from "../index";

export default {
  async getAllTutorJobs() {
    return await api.get("/tuturjob/allTutorJob");
  },

  async storeTutorJob(payload) {
    return await api.post("/tuturjob/storeTutorJob", payload);
  },

  async updateTutorJob(id, payload) {
    return await api.put(`/tuturjob/updateTutorJob/${id}`, payload);
  },

  async deleteTutorJob(id) {
    return await api.delete(`/tuturjob/deleteTutorJob/${id}`).then(() => {
      // window.location.href = "/admin/tutorJobs";
    });
  },

  async showTutorJob(payload) {
    return await api.post(`/tuturjob/showtutorjob`, payload);
  },

};
