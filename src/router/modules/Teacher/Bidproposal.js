export default [
  {
    path: "/",
    component: import("@/layouts/default.vue"),

    // login Route

    children: [
      {
        path: "/bidProposal/:id",
        component: import("@/pages/BidProposalForm.vue"),
      },
    ],
  },
];
