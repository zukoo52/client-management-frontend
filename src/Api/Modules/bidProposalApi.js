import { api } from "../index";

export default {
  async getAllBidProposals() {
    return await api.get("/BidProposal/allBidProposal");
  },

  async storeBidProposal(payload) {
    return await api.post("/BidProposal/storeBidProposal", payload);
  },

  async updateBidProposal(id, payload) {
    return await api.put(`/BidProposal/updateBidProposal/${id}`, payload);
  },

  async deleteBidProposal(id) {
    return await api.delete(`/BidProposal/deleteBidProposal/${id}`).then(() => {
    //  window.location.href = "/admin/bidProposals";
    });
  },
};
