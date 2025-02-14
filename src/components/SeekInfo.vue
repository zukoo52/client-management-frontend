<template>
  <div class="home">
    <div class="hero-banner">
      <!-- Right Section: Image -->
      <div class="banner-image-container">
        <img src="@/assets/images/Home/Section01/Home_Banner_01.gif" alt="Banner Image" class="banner-image" />
      </div>

      <!-- Left Section: Text Content -->
      <div class="banner-content">
        <h1 class="headingOne">
           <span class="highlight">Manage</span>  Your Clients
        </h1>
        <p class="product_heading">
          <ul class="feature-list">
          <li>✅ <strong>Task Automation</strong> – AStreamline client management by automating basic CRUD operations, reducing manual effort.</li>
          <li>✅ <strong>Easy Scheduling</strong> –  Efficiently manage client records with a simple interface for adding, editing, and removing client details.</li>
          <li>✅ <strong>Client Insights</strong> –  View detailed client information</li>
          <li>✅ <strong>Secure Document Storage</strong> – Keep all important documents in one place.</li>
          <li>✅ <strong>Customizable Workflows</strong> – A Adapt the system to specific business needs with flexible CRUD operations and user-friendly UI.</li>
        </ul>
        </p>

        <!-- Search Bar -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {

        console.log("Searching for:", this.searchQuery);
      } else {
        console.log("Please enter a search term.");
      }
    },
  },
};
</script>


<style scoped lang="scss">
.home {
  background-color: #2c3e50;
  @media (max-width: 768px) {
    width: 100%;}
  .hero-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    padding: 0 10%;

    @media (max-width: 768px) {
      padding-top: 10px;
      flex-direction: column;
      padding: 0 5%;
     // height: auto;
    }

    @media (max-width: 480px) {
      padding: 0 2%;
    }

    .banner-content {
      flex: 1;
      display: flex;
      width: 30%;
      flex-direction: column;
      justify-content: center;
      color: white;

      @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
      }

      @media (max-width: 480px) {
        .headingOne {
          font-size: 32px; // Decrease font size for smaller screens
        }

        .product_heading {
          font-size: 18px;
        }
      }

      .headingOne {
        font-size: 48px;
        font-family: "Prata", serif;
        margin-bottom: 15px;
        color: #fff;

        .highlight {
          color: #f9a825;
        }
      }

      .product_heading {
        font-size: 24px;
        font-family: "Prata", serif;
        margin-bottom: 25px;
      }


    }

    .banner-image-container {
      flex: 1;
      display: flex;
      justify-content: center;

      .banner-image {
        max-width: 90%;
        height: 400px;
        border-radius: 5px;

        @media (max-width: 768px) {
          max-width: 80%;
          height: auto;

        }

        @media (max-width: 480px) {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
