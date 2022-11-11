<script setup>
import HeaderView from "./views/HeaderView.vue";
import SidebarView from "./views/SidebarView.vue";
import FooterView from "./views/FooterView.vue";
</script>

<template>
  <header-view></header-view>
  <main>
    <sidebar-view></sidebar-view>
    <router-view></router-view>
  </main>

  <footer-view></footer-view>
</template>

<style scoped></style>
