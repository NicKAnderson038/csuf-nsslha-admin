<template>
  <v-app light class="app">
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style scoped>
.app {
  background: linear-gradient(to bottom right, #800080, #0000ff);
}
</style>
