<template>
  <div>
    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      style="color: #0a72af"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" temporary style="height: 100%">
      <v-list density="compact" nav>
        <v-list-item
          active-class="ative_color"
          prepend-icon="mdi-home-account"
          title="Dashboard"
          value="Dashboard"
          @click="$router.push('/admin')"
        >
        </v-list-item>
        <v-list-item
          active-class="ative_color"
          prepend-icon="mdi-shape"
          title="Categories"
          value="Categories"
          @click="$router.push('/admin/categories')"
        ></v-list-item>
        <v-list-item
          active-class="ative_color"
          prepend-icon="mdi-cart-check"
          title="Products"
          value="Products"
          @click="$router.push('/admin/products')"
        ></v-list-item>
        <v-list-item
          active-class="ative_color"
          prepend-icon="mdi-currency-usd"
          title="Orders"
          value="Orders"
          @click="$router.push('/admin/orders')"
        ></v-list-item>
        <v-list-item
          active-class="ative_color"
          prepend-icon="mdi-account"
          title="Users"
          value="Users"
          @click="$router.push('/admin/users')"
        ></v-list-item>
        <v-list-item
          active-class="ative_color"
          prepend-icon="mdi-comment-quote"
          title="Reviews"
          value="Reviews"
          @click="$router.push('/admin/reviews')"
        ></v-list-item>
        <v-list-item
          active-class="ative_color"
          prepend-icon="mdi-account-supervisor"
          title="Supliers"
          value="Supliers"
          @click="$router.push('/admin/supliers')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
