<script setup>
import { ref } from "vue";
import NavLinks from "../components/NavLinks.vue";

const isActive = ref(false);
</script>

<template>
  <header>
    <div class="hamburger header-item" v-on:click="isActive = !isActive">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        width="32"
        viewBox="0 0 48 48"
        v-if="isActive === false"
      >
        <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        width="32"
        viewBox="0 0 48 48"
        v-if="isActive === true"
      >
        <path
          d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
        />
      </svg>
    </div>
    <img src="../../favicon-32x32.png" alt="logo" />
    <div class="header-item">LearnJs</div>
  </header>

  <nav
    class="sidebar"
    :class="{ in: isActive }"
    v-on:click="isActive = !isActive"
  >
    <div>
      <nav-links />
    </div>
  </nav>
</template>

<style scoped>
header {
  background-color: var(--yellow);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 600;
  color: var(--black);
  box-shadow: 0 2px 5px grey;
  margin-bottom: 5px;
}

.header-item {
  padding: 1rem;
}

.hamburger {
  display: flex;
}

.sidebar {
  position: absolute;
  left: -100%;
  z-index: 100;
  background-color: var(--grey);
  padding: 1rem 3rem 1rem 1rem;
  line-height: 2rem;
  transition: left 0.6s ease-out;
}

.in {
  left: 0;
}

@media screen and (min-width: 575px) {
  header {
    justify-content: center;
  }

  .hamburger {
    display: none;
  }

  .sidebar {
    display: none;
  }
}
</style>
