<template>
  <div class="form-container">
    <h2>SUBMIT YOUR BID</h2>

    <!-- Display Job Details (Fetched from Database) -->
    <section>
      <h3>Details About Job</h3>

      <label for="jobTitle">Job Title:</label>
      <input
        v-model="tutorJob.job_title"
        type="text"
        id="jobTitle"
        class="input-field"
        disabled
      />

      <label for="jobSummary">Job Summary:</label>
      <textarea
        v-model="tutorJob.job_description"
        id="jobSummary"
        class="input-field"
        disabled
      ></textarea>
    </section>

    <section class="grid-2-cols">
      <label for="meetingTime">Preferred Meeting Type:</label>
      <input
        v-model="tutorJob.Meeting_type"
        id="proposalRate"
        class="input-field"
        disabled
      />

      <label for="proposalRate">Payment Type:</label>
      <input
        v-model="tutorJob.payment_type"
        id="proposalRate"
        class="input-field"
        disabled
      />

      <label for="proposalRate">Proposal Rate:</label>
      <input
        v-model="tutorJob.payment_rate"
        type="number"
        id="proposalRate"
        class="input-field"
        disabled
      />
    </section>
    <br />
    <!-- Application Form -->
    <form @submit.prevent="submitApplication">
      <section>
        <h3>Application Form</h3>

        <label for="priceRate">Price Rate:</label>
        <input
          v-model="form.priceRate"
          type="number"
          id="priceRate"
          class="input-field"
        />

        <label for="application">Why You're Applying:</label>
        <textarea
          v-model="form.application"
          id="application"
          class="input-field"
        ></textarea>
      </section>

      <!-- Submit Button for Application -->
      <button class="submit-button" :disabled="loading2">
        Submit Application
      </button>
    </form>
  </div>

  <!-- <div>
    <FooterComponent />
  </div> -->
</template>

<script>
import bidProposalApi from "@/Api/Modules/bidProposalApi";
import tutorJobApi from "@/Api/Modules/tutorJobApi";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
  data() {
    return {
      tutorJob: {},
      form: {
        priceRate: "",
        application: "",
      },
      loading2: false,
    };
  },

  async created() {
    await this.showTutorJob();
  },
  methods: {
    async submitApplication() {
      this.loading2 = true;
    

      const applicationData = {
        tutor_jobs_id: this.$route.params.id,
        proposal_details: this.form.application,
        bid_price: this.form.priceRate, 
        status : 'Pending',
  
      };

      console.log("Application Data:", applicationData);
     
    try {
      // Submit the application data object to the API
      const res = await bidProposalApi.storeBidProposal(applicationData);
      console.log("Application Submitted:", res);
    } catch (error) {
      console.error("Error Submitting Application:", error);
    } finally {
      this.loading2 = false;
    }
  
    },

    async showTutorJob() {
      const payload = {
        id: this.$route.params.id,
      };
      const res = await tutorJobApi.showTutorJob(payload);

      this.tutorJob = res.data.data;
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff9f9;
}

h2 {
  text-align: center;
}

h3 {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-top: 15px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.grid-2-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.submit-button {
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background-color: #14536d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #0056b3;
}

@media (max-width: 600px) {
  .form-container {
    width: 95%;
    margin: 20px auto;
    padding: 15px;
  }

  .grid-2-cols {
    grid-template-columns: 1fr;
  }
}
</style>
