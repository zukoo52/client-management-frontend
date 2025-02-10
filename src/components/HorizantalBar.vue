<template>
  <v-card elevation="2" class="pa-5 card">
    <v-row>
      <v-col lg="10">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-account" color="primary" v-bind="props"> </v-btn>
          </template>
          <v-list>
            <v-list-item @click="$router.push('/admin')">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col lg="2">
        <div class="text-right">
          <span class="font-weight-bold">Test User</span>
          <br />
          <span class="role_text">Admin</span>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {};
</script>
