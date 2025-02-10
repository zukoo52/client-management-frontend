<template>
  <v-container class="all">
  <div class="bgcolor">
    <div class="requesttutor"></div>

    <p class="rheader">
      Request a Tutor<span style="color:background:#000000;"></span>
    </p>
    <v-container>
      <div class="ftext">
        <p>
          Tell us what you need help with, and we'll connect you with the
          perfect tutor. Fill out the form below to get started!<span
            style="color:background: #000000;"
          ></span>
        </p>
      </div>

      <v-row>
        <v-col lg="12">
          <p class="atext">
            Request Heading:<span style="color:background: #000000;"></span>
          </p>
          <br /><br />

          <p class="aatext">
            Shortly describe what kind of tutor you need<span
              style="color:background:#00000080;"
            ></span>
          </p>

          <div >
            <v-text-field
              v-model="form.job_title"
              label="Looking for a Physics Tutor for A/L Exams"
              :style="{ backgroundColor: '#F5F5F5' }"
            >
            </v-text-field>
          </div>
        </v-col>

        <v-col lg="12">
          <div>
            <p class="atext">
              Request Description:<span
                style="color:background: #000000;"
              ></span>
            </p>
            <br /><br />
          </div>

          <div>
            <p class="aatext">
              Add more details about your learning needs, specific topics, or
              challenges you’re facing.<span
                style="color:background:#ffff;"
              ></span>
            </p>
          </div>

          <div >
            <v-text-field
              v-model="form.job_description"
              label="I need assistance with Newton’s laws and motion problems in Physics."
              :style="{ backgroundColor: '#fffff' }"
            >
            </v-text-field>
          </div>
        </v-col>

        <v-col lg="12">
          <div>
            <p class="atext">
              Subject:<span style="color:background: #000000;"></span>
            </p>
            <br /><br />
          </div>

          <div>
            <p class="aatext">
              Choose your subject from the dropdown list. If your subject isn't
              listed, you can add a new one.<span
                style="color:background:#00000080;"
              ></span>
            </p>
          </div>

          <v-autocomplete
            label="Select Subject"
            :items="subjects"
            item-title="subject_name"
            v-model="form.subject_id"
            @update:model-value="test"
            return-object
          ></v-autocomplete>
        </v-col>

        <v-col lg="12">
          <div>
            <p class="atext">
              Grade:<span style="color:background: #000000;"></span>
            </p>
            <br /><br />
          </div>

          <div>
            <p class="aatext">
              Select your current grade level to ensure the tutor matches your
              curriculum.<span style="color:background:#00000080;"></span>
            </p>
          </div>

          <v-autocomplete
            :items="[
              'Primary',
              'Middle School',
              'High School',
              'Collage',
              'University',
            ]"
            variant="solo-inverted"
            v-model="form.Grade"
          ></v-autocomplete>
        </v-col>

        <v-col lg="12">
          <div>
            <p class="atext">
              Meeting Type:<span style="color:background: #000000;"></span>
            </p>
            <br /><br />
          </div>

          <div>
            <p class="aatext">
              Choose how you prefer the sessions to be conducted<span
                style="color:background:#00000080;"
              ></span>
            </p>
          </div>

          <v-autocomplete
            :items="['Online', 'In-Person', 'Hybrid']"
            variant="solo-inverted"
            v-model="form.Meeting_type"
          ></v-autocomplete>
        </v-col>

        <v-col lg="12">
          <div>
            <p class="atext">
              Payment Preferences:<span
                style="color:background: #000000;"
              ></span>
            </p>
            <br /><br />
          </div>

          <div>
            <p class="aatext">
              Select the payment you are willing to offer for tutoring services
              and select the type of payment<span
                style="color:background:#00000080;"
              ></span>
            </p>
          </div>
        </v-col>

        <v-col lg="6" cols="12">
          <div class="btext" elevation="20">Payment Rate</div>

          <v-text-field
            label="1000"
            :style="{ backgroundColor: '#fffff' }"
            v-model="form.payment_rate"
          >
          </v-text-field>
        </v-col>

        <v-col lg="6" cols="12">
          <div class="btext" elevation="20">Payment Type</div>

          <v-autocomplete
            :items="['Per Hour', 'Per Session', 'Per Month']"
            variant="solo-inverted"
            v-model="form.payment_type"
          ></v-autocomplete>
        </v-col>
        <v-col>
          <div>
            <p class="atext">
              Additional Details Optional:<span
                style="color:background: #000000;"
              ></span>
            </p>
            <br /><br />
          </div>

          <div>
            <p class="aatext">
              Provide any specific details about your learning needs or
              challenges to help us find the best tutor for you.<span
                style="color:background:#00000080;"
              ></span>
            </p>
          </div>

          <v-textarea
            label="Write Here"
            v-model="form.additional_details"
          ></v-textarea>
        </v-col>

        <v-col cols="12">
          <v-btn
            class="subtn"
            color="#14536D"
            border="dable lg"
            elevation="25"
            width="900px"
            height="50px"
            align="center"
            :loading="loading"
            @click="addRequest()"
            >Submit</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
  </v-container>
</template>
<script>
import tutorJobApi from "@/Api/Modules/tutorJobApi";
import subjectApi from "@/Api/Modules/subjectApi";
export default {
  data() {
    return {
      form: {},
      loading: false,
      subjects: [],
    };
  },

  async created() {
    await this.allSubject();
  },

  methods: {
    // all subjects

    async allSubject() {
      await subjectApi
        .getAllSubjects()
        .then((res) => {
          this.subjects = res.data.data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    async addRequest() {
      this.loading = true;
      await tutorJobApi
        .storeTutorJob(this.form)
        .then((res) => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    test(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped>
/* General Styles */

.bgcolor {
  padding: 16px;
  background-color: #ffffff;
}

.rheader {
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
}

.ftext, .atext, .aatext {
  font-size: 26px;
  margin-bottom: 8px;
}


.ftf, .btext {
  margin-bottom: 16px;
  font-size: 20px;
}

.subtn {
  background-color: #14536D;
  color: #fff;
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  font-size: 16px;
  height: 50px;
}

/* Mobile Specific Styles */
@media (max-width: 600px) {
  .bgcolor {
    padding: 8px;
  }

  .rheader {
    font-size: 40px;
    margin-bottom: 0px;
  }

  .ftext, .atext, .aatext {
    font-size: 20px;

  }

   .btext {
    margin-bottom: 10px;
  }

  v-container {
    padding: 0;
  }

  v-row {
    margin: 0;
  }

  v-col {
    width: 100%;
    margin-bottom: 16px;
  }

  .subtn {
    max-width: 100%;
    font-size: 14px;
    height: 45px;
  }

  .v-text-field, .v-autocomplete, .v-textarea {
    font-size: 14px;
  }
}
</style>


