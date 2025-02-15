<template>
  <div class="home">
    <div class="hero-banner">
      <!-- Left Section: Text Content -->
      <div class="banner-content">
        <h1 class="headingOne">
          Effortless Client Management at Your
          <span class="highlight">Fingertips!</span>
        </h1>
        <p class="product_heading">
          Streamline your business with a simple,powerful,<br />
          and intuitive client management system. Add, edit, <br />and track
          clients with ease—all in one place
        </p>

        <!-- Action Buttons -->
        <div class="buttons">
          <router-link to="/NewClient" class="button"
            >Add New Client</router-link
          >
          <router-link to="/AllClients" class="button2"
            >View Clients</router-link
          >
        </div>
      </div>

      <!-- Right Section: Image -->
      <div class="banner-image-container">
        <img
          src="@/assets/images/Home/Section01/image2.png"
          alt="Banner Image"
          class="banner-image"
        />
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
  background-color: #3d5a80;
  .hero-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    padding: 0 10%;
    padding-top: 30px;

    @media (max-width: 950px) {
      flex-direction: column;
      height: auto;

      padding: 0 5%;
    }

    .banner-content {
      flex: 1;
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
          background-color: #ee6c4d;
          color: white;
          font-size: 16px;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          transition: transform 0.2s;
          &:hover {
            transform: scale(1.25);
          }

          &.All-jobs {
            background-color: transparent;
            border: 1px solid white;
          }

          &:hover {
            background-color: darken(#f9a825, 10%);
          }
        }
        .button2 {
          padding: 10px 25px;
          background-color: #eeb416;
          color: white;
          font-size: 16px;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          transition: transform 0.2s;
          &:hover {
            transform: scale(1.25);
          }

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
      flex: 1;
      display: flex;
      justify-content: flex-end;
      height: 100%;

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
