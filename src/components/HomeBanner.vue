<template>
  <div class="home">
    <div class="hero-banner">
      <!-- Left Section: Text Content -->
      <div class="banner-content">
        <h1 class="headingOne">
          Find The Best Tutor for Any <span class="highlight">Subjects</span>
        </h1>
        <p class="product_heading">
          Connecting students and teachers  in Sri Lanka,<br> wherever you are.
        </p>

        <!-- Action Buttons -->
        <div class="buttons">
          <router-link to="/AllTeachers" class="button">Find All Tutors</router-link>
          <router-link to="/TutorJobs" class="button All-jobs">Find All Jobs</router-link>
        </div>
      </div>

      <!-- Right Section: Image -->
      <div class="banner-image-container">
        <img src="@/assets/images/Home/home_hero_banner.png" alt="Banner Image" class="banner-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
};
</script>

<style scoped lang="scss">
.home {
  background-color: #2c3e50;
  .hero-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    padding: 0 10%;


    @media (max-width: 950px) {
      flex-direction: column;
      height: auto;

      padding: 0 5%;
    }

    .banner-content {
      flex: 1; /* Take 50% of the width */
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;

      .headingOne {
        font-size: 48px;
        font-family: "Prata", serif;
        margin-bottom: 15px;
        color: #fff;

        .highlight {
          color: #f9a825;
        }
        @media (max-width: 768px) {
          font-size: 32px;
          text-align: center;
        }


      }

      .product_heading {
        font-size: 24px;
        font-family: "Prata", serif;
        margin-bottom: 25px;

        @media (max-width: 768px) {
          font-size: 18px;
          text-align: center;
        }
      }

      .buttons {
        display: flex;
        gap: 20px;

        @media (max-width: 900px) {
          flex-direction: column;
          align-items: center;
        }


        .button {
          padding: 10px 25px;
          background-color: #f9a825;
          color: white;
          font-size: 16px;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          transition: transform 0.2s;
  &:hover {
    transform: scale(1.25);}

          &.All-jobs {
            background-color: transparent;
            border: 1px solid white;
          }

          &:hover {
            background-color: darken(#f9a825, 10%);
          }
        }
      }
    }

    .banner-image-container {
      flex: 1; /* Take 50% of the width */
      display: flex;
      justify-content: flex-end;

      .banner-image {
        max-width: 100%;
        height: auto;
        border-radius: 5px;

        @media (max-width: 950px) {
          width: 100%;
          height: auto;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>




