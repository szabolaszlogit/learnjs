<script setup>
import JsQuestion from "../components/JsQuestion.vue";
import { questions } from "../assets/questions";
</script>

<template>
  <article>
    <js-question v-for="(question, index) in questions">
      <template #question
        ><p class="question">{{index}}. {{ question.q }}</p></template
      >
      <template #answer><p  class="answer">{{ question.a }}</p></template>

      <template v-if="question.code != null" #code>
        <code>
          <pre>{{ question.code }}</pre>
        </code></template
      >
    </js-question>
  </article>
</template>

<style>
.question {
  background-color: var(--red);
  color: var(--white);
  padding:1rem;
}

.answer{
    background-color:#f9f9f9;
    padding: 1rem
}
</style>
