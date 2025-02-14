<template>
  <div>
    <p class="header"> <span style="color: #ffc02f">Client </span> List</p>

    <!-- Search Bar -->
    <div class="search-bar-container">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="searchText"
              label="Search by phone number"
              hide-details
              solo
              flat
              variant="outlined"
              color="#F9A825"
              :style="{ backgroundColor: '#FFFFFF' }"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <br />

    <!-- Client Cards -->
    <div class="pa-4">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(client, index) in filteredClients"
          :key="client.id"
        >
          <v-card variant="outlined" color="#F9A825">
            <v-sheet color="#FFFFFF" class="pa-4">
              <br />

              <!-- Card Content -->
              <div class="d-flex">
                <div class="d-flex flex-column">
                  <p class="name"><strong>Name:</strong> {{ client.name }}</p>
                  <p class="email"><strong>Email:</strong> {{ client.email }}</p>
                  <p class="availability"><strong>Phone Number:</strong> {{ client.phone }}</p>
                  <p class="email"><strong>Company:</strong> {{ client.company }}</p>
                  <p class="email"><strong>Address:</strong> {{ client.address }}</p>
                </div>

                <!-- Action Buttons -->
                <div class="CardButtons">
                  <v-btn color="amber darken-2" class="mr-2" @click="openEditDialog(client)">
                    📝 Update
                  </v-btn>
                  <v-btn color="red darken-2" @click="deleteClient(client.id, index)">
                    ❌ Delete
                  </v-btn>
                </div>
              </div>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Update Dialog -->
    <v-dialog v-model="editDialog" persistent max-width="500px">
      <v-card>
        <v-card-title class="headline"> Edit Client Details </v-card-title>
        <v-card-text>
          <v-text-field v-model="editedClient.phone" label="Phone Number" outlined></v-text-field>
          <v-text-field v-model="editedClient.address" label="Address" outlined></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="editDialog = false">Cancel</v-btn>
          <v-btn color="green darken-2" @click="saveEdit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import clientApi from "@/Api/Modules/clientApi";

export default {
  data() {
    return {
      clients: [],
      searchText: "",
      editDialog: false,
      editedClient: {
        id: null,
        phone: "",
        address: ""
      },
    };
  },
  computed: {
    filteredClients() {
      const searchLower = this.searchText.toLowerCase();
      return this.clients.filter((client) =>
        client.phone?.toLowerCase().includes(searchLower)
      );
    },
  },
  async mounted() {
    await this.getAllClients();
  },
  methods: {
    async getAllClients() {
      try {
        const response = await clientApi.getAllClientDetails();
        this.clients = response.data.data || [];
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    },
    openEditDialog(client) {
      this.editedClient = { ...client };
      this.editDialog = true;
    },
    async saveEdit() {
      try {
        await clientApi.updateClientDetails(this.editedClient.id, this.editedClient);
        const index = this.clients.findIndex((c) => c.id === this.editedClient.id);
        if (index !== -1) {
          this.clients[index] = { ...this.editedClient };
        }
        this.editDialog = false;
        alert("Client updated successfully!");
      } catch (error) {
        console.error("Error updating client:", error);
        alert("Failed to update client.");
      }
    },
    async deleteClient(id, index) {
      if (confirm("Are you sure you want to delete this client?")) {
        try {
          await clientApi.deleteClientDetails(id);
          this.clients.splice(index, 1);
          alert("Client deleted successfully!");
        } catch (error) {
          console.error("Error deleting client:", error);
          alert("Failed to delete client.");
        }
      }
    },
  },
};
</script>

<style scoped>
.text-section-highlight,
.text-section-highlight1 {
  color: #f9a825;
}
.header {
  font-family: Inria Serif;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  background-color: #2C3E50;
  color: #ffffff;
  padding: 20px 0;
  padding-top: 75px;
  height: 250px;
}
.search-bar-container {
  width: 100%;
}
.name,
.email,
.availability {
  font-size: 18px;
  color: #110b01;
  padding-left: 10px;
  padding-bottom: 5px;
}
.CardButtons {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  align-items: flex-start;
}
.v-btn {
  margin: 5px 0;
}
</style>
