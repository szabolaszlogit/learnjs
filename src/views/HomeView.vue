<script setup>
import { reactive } from "vue";
import txtEffect from "../components/TxtEffect.vue";

const plans = reactive([
  { icon: "fa-brands fa-vuejs", txt: "Vue" },
  { icon: "fa-brands fa-node-js", txt: "Node" },
  { icon: "fa-solid fa-database", txt: "MongoDB" },
  { txt: "  Design Patterns" },
]);
</script>

<template>
  <article>
    <h1>
      Ismeretek a <font-awesome-icon icon="fa-brands fa-js " /> JavaScript
      nyelvről
    </h1>
    <txt-effect></txt-effect>
    <hr>
    <p>A tartalom bővül..</p>
    <p>Tervek:</p>
    <ul>
      <li v-for="plan in plans">
        <font-awesome-icon :icon="plan.icon" class="icon" v-if="plan.icon" />{{
          plan.txt
        }}
      </li>
    </ul>
    <hr />
    <div>
      <a href="https://github.com/szabolaszlogit/learnjs" target="_blank"
        >Ez az oldal a githubon
        <font-awesome-icon icon="fa-solid fa-up-right-from-square"
      /></a>
    </div>
  </article>
</template>

<style scoped>
h1 {
  font-size: 1.4rem;
}
.icon {
  margin-right: 1rem;
  color: blue;
}
</style>
