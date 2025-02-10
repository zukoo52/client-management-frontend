<template>
  <div class="HowItWork_section">
    <div class="heading">
      <h1 class="headingOne">
        Find The Best <span class="highlight">Tutor</span> for Any <span class="highlight">Subjects</span>
      </h1>
    </div>

    <div class="features-section">
      <div class="feature-card">
        <h2>STEP 01</h2><br>
        <h4> Fill Out the Form</h4><br>
        <img src="@/assets/images/Home/step 8.png" alt="Qualified Tutors" />
      </div>

      <div class="feature-card">
        <h2>STEP 02</h2><br>
        <h4> Compare Bids from Tutors</h4><br>
        <img src="@/assets/images/Home/Gif/step 2.gif" alt="Flexible Learning" />
      </div>

      <div class="feature-card">
        <h2>STEP 03</h2><br>
        <h4>Choose the Best Tutor</h4><br>
        <img src="@/assets/images/Home/Gif/step 3.gif" alt="Affordable Rates" />
      </div>

      <div class="feature-card">
        <h2>STEP 04</h2><br>
        <h4> Start Learning</h4><br>
        <img src="@/assets/images/Home/Gif/step 4.gif" alt="Convenient Booking" />
      </div>
    </div><br>
    <div class="buttons">
      <a href="#" class="button">LEARN MORE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
};
</script>

<style scoped>
.features-section {
  display: flex;
  justify-content: space-around;
  margin: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 10px;
  }
}

.feature-card {
  background-color: #cdc4b6;
  padding: 20px;
  border-radius: 5px;
  border-color: #0e0a0a;
  width: 20%;
  height: 280px;
  text-align: center;
  box-shadow: 25px 25px 25px rgba(12, 0, 18, 0.1);
  font-size: 17px;
  font-family: "Prata", serif;
  transition: transform 0.2s;

  @media (max-width: 768px) {
    width: 40%;
    margin: 10px;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 80%;
    margin-bottom: 20px;
  }
}

.feature-card:hover {
  transform: scale(1.25);

  @media (max-width: 480px) {
    transform: none;
  }
}

.feature-card img {
  margin-bottom: 15px;
  max-width: 100%;
  height: auto;

  @media (max-width: 480px) {
    width: 60%;
  }
}

.HowItWork_section .heading {
  margin-bottom: 20px;
}

.headingOne {
  font-size: 48px;
  font-family: "Prata", serif;
  margin-bottom: 15px;
  color: #0e0a0a;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
}

.highlight {
  color: #f9a825;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button {
  padding: 10px 25px;
  background-color: #f9a825;
  color: rgb(245, 244, 244);
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s;

  @media (max-width: 480px) {
    width: 80%;
    text-align: center;
  }
}

.button:hover {
  background-color: #837866;
  transform: scale(1.1);
}
</style>
