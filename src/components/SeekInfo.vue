<template>
  <div class="home">
    <div class="hero-banner">
      <!-- Right Section: Image -->
      <div class="banner-image-container">
        <img src="@/assets/images/Home/SeekInfo.png" alt="Banner Image" class="banner-image" />
      </div>

      <!-- Left Section: Text Content -->
      <div class="banner-content">
        <h1 class="headingOne">
          Learn and get a profession without leaving <span class="highlight">Home</span>
        </h1>
        <p class="product_heading">
          Join our platform to learn from the best tutors and gain the skills you need,
          all from the comfort of your home. Our flexible scheduling and certified experts
          ensure the highest quality learning experience.
        </p>

        <!-- Search Bar -->
        <div class="search-bar-container">
          <input
            type="text"
            v-model="searchQuery"
            id="search"
            class="search-bar"
            placeholder="Search for Tutors, Subjects"
          />
          <button class="search-button" @click="handleSearch">
            <img src="@/assets/images/Home/search.png" alt="Search" class="search-icon" />
          </button>
        </div>
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

  .hero-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    padding: 0 10%;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0 5%;
      height: auto;
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

      .search-bar-container {
        position: relative;
        margin-top: 20px;
        width: 100%;
        max-width: 500px;
        display: flex;

        @media (max-width: 480px) {
          flex-direction: column;
        }

        .search-bar {
          flex: 1;
          padding: 12px 20px;
          font-size: 16px;
          border-radius: 25px 0 0 25px;
          border: none;
          background-color: #5a6473;
          color: white;
          box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);

          @media (max-width: 480px) {
            border-radius: 25px;
            margin-bottom: 10px;
          }
        }

        .search-button {
          background-color: #f9a825;
          border: none;
          padding: 12px 20px;
          border-radius: 0 25px 25px 0;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;

          @media (max-width: 480px) {
            width: 100%;
            border-radius: 25px;
          }

          &:hover {
            background-color: darken(#f9a825, 10%);
          }

          .search-icon {
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    .banner-image-container {
      flex: 1;
      display: flex;
      justify-content: center;

      .banner-image {
        max-width: 60%;
        height: 60%;
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
