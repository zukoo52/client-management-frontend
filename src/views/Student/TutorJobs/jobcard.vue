<template>
  <div>
    <p class="header">All Tutor <span style="color: #ffc02f">Jobs</span></p>
    <div :style="{ backgroundColor: '#14536D' }">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field
              v-model="searchText"
              label="Search"
              hide-details
              solo
              flat
              rounded
              :style="{ backgroundColor: '#FFF9F9' }"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="pa-4">
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="(tutorjob, index) in tutorjobs" :key="index">
          <v-card class="tutor-card" variant="outlined">
            <v-sheet color="#FFF9F9" class="pa-4">
              <p class="name">{{ tutorjob.job_title }}</p>
              <br />
              <p class="subject">{{ tutorjob.subject.subject_name }}</p>

              <p>{{ tutorjob.job_description }}</p>
              <p class="Grade">
                Grade : {{ tutorjob.Grade }} | Delivery Mode :
                {{ tutorjob.Meeting_type }} 
              </p>

              <p>{{ tutorjob.additional_details }}</p>

              <p class="Grade">Payment Mode : {{ tutorjob.payment_type }} | Budget : {{ tutorjob.budget }}</p>

              <br />

              <p>Posted by {{ tutorjob.student.name }}</p>

              <br />
              <center>
                <v-btn
                  size="small"
                  color="#14536D"
                  padding-bottom="16px"
                @click="$router.push(`/bidProposal/${tutorjob.id}`)"
                  >Bid Quote</v-btn>
                
              </center>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import tutorJobApi from "@/Api/Modules/tutorJobApi";

import MoshImage from "@/assets/images/Mosh.png";
import RafehImage from "@/assets/images/Rafah.png";
import ElonImage from "@/assets/images/Elon.png";
import JeffImage from "@/assets/images/Jeff.png";
export default {
  data() {
    return {
      tutors: [

      ],
      tutorjobs:[],
    };
  },

  async mounted() {
    await this.getAllTutorJobs();

    const tutorjobId = this.$route.params.id;
    console.log("Tutor Job ID:", tutorjobId);

    
  },
  methods: {
    async getAllTutorJobs() {
      try {
        const res = await tutorJobApi.getAllTutorJobs();
        console.log(res.data.data);
        this.tutorjobs = res.data.data;
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    },
  },
};
</script>

<style scoped>
.oval-image-container {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}
.name {
  font-family: Inria Serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 47.96px;
  text-align: center;
  color: #14536d;
}
.subject {
  font-family: Inria Serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  color: #14536d;
}
.Grade {
  font-family: Inria Serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: #14536d;
}
.header {
  font-family: Inria Serif;
  font-size: 128px;
  font-weight: 700;
  line-height: 153.47px;
  text-align: center;
  background-color: #14536d;
}
.search {
  box-shadow: 0px 4px 4px 0px #00000040;
}

.tutor-card {
  display: flex;
  flex-direction: column;
  height: 100%; /* Ensures card takes full height of column */
}

@media (max-width: 600px) {
  .header {
    font-size: 48px;
    line-height: 1.2;
    padding: 10px;
  }
  .name {
    font-size: 24px;
  }
  .subject {
    font-size: 18px;
  }
  .Grade {
    font-size: 16px;
  }
  .mobile-btn {
    width: 100%;
  }
}
</style> 
    
    
      
    