<template>
  <v-footer class="footer_background pa-6">
    <v-row class="main_margin">
      <!-- footer left section -->
      <v-col lg="4" md="4" cols="12">
        <div class="pl-5 ">
          <v-img src="@/assets/logo.png" max-height="200" max-width="200">
          </v-img>
          <br />
          <div class="our_mission">
            <p>
              Our mission is to connect students with qualified tutors and
              provide personalized learning experiences that help them achieve
              their academic goals.
            </p>
          </div>
          <!-- Email.Phone numbers and Address Details -->
        </div>

        <p class="pt-3 left_para"></p>
        <div class="mobile_header pt-6"></div>
      </v-col>

      <!-- footer right section -->
      <v-col lg="8" md="8" cols="12">
        <div class="right_col_margin">
          <!-- footer right section contact icons -->
          <v-row class="right_col_margin_ inner1 d-flex justify-content">
            <v-col cols="12" lg="3" md="3">
              <div class="d-flex justify-content">
                <div class="ml-2">
                  <span class="right_icon_header">Find Tutor job</span>
                </div>
              </div>
            </v-col>

            <v-col cols="6" lg="3" md="3">
              <div class="d-flex justify-content">
                <div class="ml-2">
                  <span class="right_icon_header">Find Tutors</span>
                </div>
              </div>

              <!-- <div class="pt-4">
                <span class="right_icon_text"></span>
              </div> -->
            </v-col>

            <v-col cols="6" lg="3" md="3">
              <div class="d-flex justify-content">
                <div class="ml-2">
                  <span class="right_icon_header">Login</span>
                </div>
              </div>

              <div class="pt-4">
                <a
                  href="https://wa.me/+94772444191"
                  style="text-decoration: none"
                  target="_blank"
                  class="right_icon_text"
                >
                </a>
              </div>
            </v-col>

            <v-col cols="12" lg="3" md="3">
              <div class="d-flex justify-content-center">
                <div class="ml-2">
                  <span class="right_icon_header">Singup</span>
                </div>
              </div>

              <div class="pt-4"></div>
            </v-col>
          </v-row>
          <br /><br />
          <hr class="hr_margin hr_width" />
          <br /><br />

          <!-- Email.Phone numbers and Address Details -->
          <div class="d-flex justify-content-end">
            <div class="footer_address">
              <v-img
                src="@/assets/images/address.png"
                width="50px"
                class="mr-3"
              ></v-img>
              <p>
                Email: info@onlinetutor.com<br />
                Phone: +1-123-456-7890<br />
                Address: 123 Tutor Lane,<br />
                Education City
              </p>
            </div>
          </div>

        </div>
      </v-col>
    </v-row>
  </v-footer>

  <!-- current year below section -->
  <div class="footer_section_below pt-4">
    <span class="copy_write_text"
      >Copyright © {{ new Date().getFullYear() }} - All rights reserved |
      <strong>Online Tutor Booking System</strong> | AIO_IT
    </span>
  </div>
</template>

<script>
export default {
  components: {},

  data() {},
  methods: {},
};
</script>

