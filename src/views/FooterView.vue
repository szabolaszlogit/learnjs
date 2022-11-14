<script setup></script>

<template>
  <footer>
    <nav>
      <router-link class="nav-item" to="/kapcsolat">Kapcsolat</router-link>
      <img
        class="nav-item"
        src="/logo.svg"
        alt="logo"
        style="width: 32px; height: auto"
      />
    </nav>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--grey-font);
  color: var(--white);
  padding: 1rem;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item {
  margin: 0.3rem;
}

a {
  color: var(--white);
  text-decoration: none;
}

img {
  width: 32px;
  height: auto;
}

@media screen and (min-width: 575px) {
  nav {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
