<template>
  <div class="home"></div>

  <div>
    <HomeBanner />
  </div>
  <br />
  <br />
  <div>
    <FeaturesSection />
  </div>
  <br />
  <br />
  <div>
    <SeekInfo />
  </div>
  <br />
  <br />
  <div>
    <HowItWork />
  </div>
  <br />
  <div>
    <TutorList />
  </div>
</template>
<script>
import HomeBanner from "@/components/HomeBanner.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import SeekInfo from "@/components/SeekInfo.vue";
import HowItWork from "@/components/HowItWork.vue";
import TutorList from "@/components/TutorList.vue";
export default {
  components: {
    HomeBanner,
    FeaturesSection,
    SeekInfo,
    HowItWork,
    TutorList,
  },
};
</script>
