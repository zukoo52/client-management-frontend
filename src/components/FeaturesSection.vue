<template>
  <div class="features-section">
    <div class="feature-card">


       <h2>Qualified Tutors</h2><br>
      <img src="@/assets/images/Home/qualified-tutors-icon.png" alt="Qualified Tutors" />
      <h4>  Personalized Learning</h4>
      <p> Choose the best tutor at a price that works for you.</p>
    </div>

    <div class="feature-card">
       <h2>Flexible Learning</h2><br>
      <img src="@/assets//images/Home/flexible-learning-icon.png" alt="Flexible Learning" />
      <h4> Learn on Your Schedule</h4>
     <p> Choose from various scheduling options that fit your busy life.</p>
    </div>

    <div class="feature-card">
      <h2>Affordable Rates</h2><br>
      <img src="@/assets//images/Home/affordable-rates-icon.png" alt="Affordable Rates" />
      <h4> Best Prices</h4>
      <p> Get expert tutoring without breaking the bank.</p>
    </div>

    <div class="feature-card">
      <h2> Convenient Booking</h2><br>
      <img src="@/assets//images/Home/online-booking.png" alt="Affordable Rates" />
      <h4>  Book Tutors with Ease</h4>
      <p>  Schedule sessions effortlessly through our user-friendly platform.</p>
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

  @media (max-width: 950px) {
      flex-direction: column;
      align-items: center;
      padding: 0 5%;
    }
}

.feature-card {
  background-color: #e6e6f1;
  padding: 20px;
  border-radius: 10px;
  width: 20%;
  height: 350px;
  text-align: center;
  box-shadow: 20 10px 10px rgba(165, 13, 13, 0.1);
  font-size: 17px;
  font-family: "Prata", serif;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.25);
  }
  
    @media (max-width: 950px) {
    width: 80%;
    margin-bottom: 20px;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 95%;
    font-size: 15px;
  }
}


.feature-card img {

  margin-bottom: 15px;
  max-width: 100px;
  height: auto;

  @media (max-width: 600px) {
    max-width: 80px;
  }
}

.feature-card h3 {
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
}

.feature-card p {
  color: #050505;
  font-size: 14px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 12px;
  }
}
</style>
