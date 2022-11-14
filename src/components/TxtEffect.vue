<script setup>
import { ref } from "vue";

let typeValue = ref("");
let typeStatus = ref(false);
let displayTextArray = ["closure", "hoisting", "NaN", "callback", "propotype", "slice"];
let typingSpeed = 100;
let erasingSpeed = 100;
let newTextDelay = 2000;
let displayTextArrayIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < displayTextArray[displayTextArrayIndex].length) {
    if (!typeStatus) typeStatus = true;
    typeValue.value +=
      displayTextArray[displayTextArrayIndex].charAt(charIndex);
    charIndex += 1;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus = false;
    setTimeout(eraseText, newTextDelay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    if (!typeStatus) typeStatus = true;
    typeValue.value = displayTextArray[displayTextArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus = false;
    displayTextArrayIndex += 1;
    if (displayTextArrayIndex >= displayTextArray.length)
      displayTextArrayIndex = 0;
    setTimeout(typeText, typingSpeed + 1000);
  }
}

setTimeout(typeText(), newTextDelay + 200);
</script>

<template>
  <p>
    <span> Mi a </span>

    <code>
      <span class="typed-text"> {{ typeValue }}|</span>
    </code>
  </p>
</template>

<style scoped></style>
