import { api } from "../index";

export default {
  async getAllClientDetails() {
    return await api.get("/Client/AllClientDetails");
  },

  async storeClientDetails(payload) {
    return await api.post("/Client/StoreClientDetails", payload);
  },

  async updateClientDetails(id, payload) {
    return await api.put(`/Client/UpdateClientDetails/${id}`, payload); 
  },

  async deleteClientDetails(id) {
    return await api.delete(`/Client/DeleteClientDetails/${id}`);
  },
};
