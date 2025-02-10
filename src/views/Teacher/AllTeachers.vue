<template>
  <div>
    <p class="header">All <span style="color: #ffc02f">Teachers</span></p>

    <!-- Page Banner Section -->
    <div class="HomeBanner">
      <div class="text-section">
        <h2>
          Learn from the
          <span class="text-section-highlight">Best Tutors</span> Across
          <span class="text-section-highlight1">Sri Lanka</span>
        </h2>
      </div>
      <div class="content-section">
        <p>
          <i>
            Our trusted tutors are dedicated professionals,<br />
            ensuring personalized, high-quality education<br />
            across various subjects for students of all ages.
          </i>
        </p>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="search-bar-container">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="searchText"
              label="Search"
              hide-details
              solo
              flat
              variant="outlined"
              color="#F9A825"
              :style="{ backgroundColor: '#FFFFFF' }"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <br />

    <!-- Tutor Cards -->
    <div class="pa-4">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(tutor, index) in filteredTutors"
          :key="tutor.id"
        >
          <v-card variant="outlined" color="#F9A825">
            <v-sheet color="#FFFFFF" class="pa-4">
              <p class="title">
                <i
                  >Knowledge & Dedication at<br />
                  Your Service!</i
                >
              </p>
              <br />

              <!-- Card Image -->
              <div class="d-flex">
                <v-avatar size="64" class="mr-4">
                  <img
                    src="@/assets/images/othere pages images/tutor.png"
                    alt="Profile Image"
                  />
                </v-avatar>

                <div class="d-flex flex-column">
                  <p class="name"><strong>Name:</strong> {{ tutor.name }}</p>
                  <p class="email"><strong>Email:</strong> {{ tutor.email }}</p>
                  <p class="availability">
                    <strong>Availability:</strong>
                    <span class="availabily-text">Mon-Fri, 10 AM - 6 PM</span>
                  </p>

                  <div class="info-item rating d-flex align-center">
                    <strong>Rating:</strong>
                    <v-rating
                      v-model="tutor.rating"
                      color="red"
                      dense
                      readonly
                    ></v-rating>
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import userApi from "@/Api/Modules/userApi";

export default {
  data() {
    return {
      tutors: [],
      searchText: "",
    };
  },
  computed: {
    filteredTutors() {
      return this.tutors.filter(
        (tutor) =>
          tutor.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          tutor.email.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  async mounted() {
    await this.getAllTeachers();
  },
  methods: {
    async getAllTeachers() {
      try {
        const res = await userApi.allTeachers();
        this.tutors = res.data.data;
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    },
  },
};
</script>

<style scoped>
.text-section-highlight,
.text-section-highlight1 {
  color: #f9a825;
}
.content-section {
}
.header {
  font-family: Inria Serif;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  background-color: #14536d;
  color: #ffffff;
  padding: 20px 0;
  padding-top: 75px;
  height: 250px;
}
.HomeBanner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  text-align: center;
  height: auto;
}
.text-section,
.content-section {
  font-size: 24px;
  padding: 10px;
  text-align: center;
}
@media (min-width: 600px) {
  .HomeBanner {
    flex-direction: row;
    height: 300px;
  }
  .text-section {
    flex: 1;
    font-size: 28px;
    padding-left: 200px;
  }
  .content-section {
    flex: 1;
    font-size: 20px;
    padding-left: 100px;
    font-weight: 500;
  }
}
.search-bar-container {
  width: 100%;
}
.name,
.email,
.availability {
  font-size: 18px;
  color: #110b01;
  padding-left: 10px;
  padding-bottom: 5px;
}
.availabily-text {
  font-size: 16px;
  font-weight: 500;
}
.title {
  text-align: center;
  font-size: 20px;
  font-weight: 1000;
  padding-right: 25px;
}
.v-avatar img {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}
.info-item {
  font-family: Inria Serif;
  font-size: 18px;
  margin-bottom: 4px;
  color: #f9a825;
}
.rating {
  font-size: 20px;
  margin-top: 8px;
  padding-top: 10px;
  padding-left: 10px;
}
</style>
