<template>
<p class="header">All Tutor <span style="color: #FFC02F;">Jobs</span></p>

<v-container>
<v-row justify="center">
  <v-col cols="8">
    <v-text-field
      v-model="searchText"
      label="Search"
      placeholder="Enter your search query"
     
      outlined
      rounded
    ></v-text-field>
  </v-col>
</v-row>
</v-container>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style scoped>
.header {
  font-family: Inria Serif;
  font-size: 128px;
  font-weight: 700;
  line-height: 153.47px;
  text-align: center;
  background-color:#14536D ;
}
.search{

    box-shadow: 0px 4px 4px 0px #00000040;
   

}
</style>
