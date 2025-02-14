<template>
  <div class="home"></div>

  <div>
    <HomeBanner />
  </div>
   <divider></divider>
 <div>
    <SeekInfo />
  </div>
</template>
<script>
import HomeBanner from "@/components/HomeBanner.vue";
import SeekInfo from "@/components/SeekInfo.vue";
export default {
  components: {
    HomeBanner,
    SeekInfo,

  },
};
</script>
