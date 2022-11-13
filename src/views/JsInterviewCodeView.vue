<script setup>
import JsQuestion from "../components/JsQuestion.vue";
import { questions } from "../assets/code";
</script>

<template>
  <article>
    <js-question v-for="(question, index) in questions">
      <template #question
        ><div class="question">{{index}}. <span v-html="question.q"></span></div></template
      >
    
      <template #answer><p  class="answer" v-html="question.a"></p></template>

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
    padding: 1rem;
    line-height: 1.7rem;
}
</style>
