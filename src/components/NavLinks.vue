<script setup>
import { links } from "../assets/links";
</script>

<template>
        <nav v-for="link in links">
      <RouterLink :to="link.to">{{ link.txt }}</RouterLink>
    </nav>
</template>

<style></style>