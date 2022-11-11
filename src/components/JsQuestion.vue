<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<template>
  <section>
    <slot name="question"></slot>
    <p class="show-answer" v-on:click="isActive = !isActive">
      <span v-if="!isActive">Válasz mutatása </span
      ><svg v-if="!isActive" height="24" width="24" viewBox="0 0 48 48">
        <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" /></svg
      ><span v-if="isActive">Válasz elrejtése</span
      ><svg v-if="isActive" height="24" width="24" viewBox="0 0 48 48">
        <path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z" />
      </svg>
    </p>

    <div v-bind:class="isActive ? 'show' : 'hiden'">
      <slot name="answer"></slot>
      <slot name="code"></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
}
.show-answer {
  display: flex;
  align-items: center;
  background-color: var(--yellow);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
}

.show-answer:hover {
  box-shadow: inset 100vw 0 0 0 var(--blue);
  color: var(--white);
}
svg {
  fill: var(--grey-font);
}

.show {
  max-height: max-content;
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 1s linear;
}
.hiden {
  visibility: hidden;
  opacity: 0;
  max-height: 0;
}
</style>
