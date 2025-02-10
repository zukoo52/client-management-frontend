<template>
  <div class="home">
    <div class="hero-banner">

      <!-- Left Section: Text Content -->
      <div class="banner-content">
        <h1 class="headingOne">
          TUTOR <span class="highlight">LIST</span>
        </h1>

        <h2>Find the Best Teachers Across Sri Lanka</h2>
        <p class="product_heading">
          Our top-rated tutors are available for all subjects,
          backed by excellent student reviews. Choose the perfect tutor to help you succeed!
        </p>
      </div>
    </div>

    <!-- Horizontal Scroller Section  -->
    <div class="scroller-section">
      <div class="scroller-container">
        <div class="scroller-item">
          <img src="@/assets/images/Home/2.jpg" alt="image1" />
          <div class="info-overlay">
            <h3>John Doe</h3>
            <p>Mathematics</p>
          </div>
        </div>
        <div class="scroller-item">
          <img src="@/assets/images/Home/3.jpg" alt="image2" />
          <div class="info-overlay">
            <h3>Jane Smith</h3>
            <p>Science</p>
          </div>
        </div>
        <div class="scroller-item">
          <img src="@/assets/images/Home/4.jpg" alt="image3" />
          <div class="info-overlay">
            <h3>David Lee</h3>
            <p>English</p>
          </div>
        </div>
        <div class="scroller-item">
          <img src="@/assets/images/Home/5.jpg" alt="image4" />
          <div class="info-overlay">
            <h3>Emily Brown</h3>
            <p>History</p>
          </div>
        </div>
        <div class="scroller-item">
          <img src="@/assets/images/Home/6.jpg" alt="image5" />
          <div class="info-overlay">
            <h3>Michael White</h3>
            <p>Geography</p>
          </div>
        </div>
        <div class="scroller-item">
          <img src="@/assets/images/Home/7.jpg" alt="image6" />
          <div class="info-overlay">
            <h3>Sarah Green</h3>
            <p>Physics</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  background-color: #2c3e50;

  .hero-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    .banner-content {
      flex: 1;
      display: flex;
      width: 30%;
      flex-direction: column;
      justify-content: center;
      color: white;
      text-align: center;

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
        font-size: 16px;
        font-family: "Prata", serif;
        margin-bottom: 0px;
        text-align: center;
      }

      @media (max-width: 768px) {
        width: 60%;
        .headingOne {
          font-size: 36px;
        }
        .product_heading {
          font-size: 14px;
        }
      }

      @media (max-width: 480px) {
        width: 80%;
        .headingOne {
          font-size: 28px;
        }
        .product_heading {
          font-size: 12px;
        }
      }
    }
  }

  .scroller-section {
    width: 100%;
    margin: 0 auto;
    overflow-x: auto;
    padding: 0px 0;

    .scroller-container {
      display: flex;
      gap: 20px;
      padding-bottom: 20px;

      @media (max-width: 768px) {
        gap: 10px;
      }

      @media (max-width: 480px) {
        gap: 5px;
      }

      .scroller-item {
        position: relative;
        flex-shrink: 0;

        img {
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out;
          cursor: pointer;
          width: 300px;

          &:hover {
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            height: 150px;
            width: 250px;
          }

          @media (max-width: 480px) {
            height: 120px;
            width: 200px;
          }
        }

        .info-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 10px;
          text-align: center;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;

          h3 {
            margin: 0;
            font-size: 18px;
            font-weight: bold;

            @media (max-width: 768px) {
              font-size: 16px;
            }

            @media (max-width: 480px) {
              font-size: 14px;
            }
          }

          p {
            margin: 0;
            font-size: 14px;

            @media (max-width: 768px) {
              font-size: 12px;
            }

            @media (max-width: 480px) {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
