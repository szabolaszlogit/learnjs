<script setup>
import NavLinks from "../components/NavLinks.vue";
</script>

<template>
  <aside>
    <nav-links />
  </aside>
</template>

<style scoped>
aside {
  display: none;
}

@media screen and (min-width: 575px) {
  aside {
    display: flex;
    flex-direction: column;
    background-color: var(--grey);
    padding: 1rem 3rem 1rem 1rem;
    line-height: 2rem;
  }
}
</style>
