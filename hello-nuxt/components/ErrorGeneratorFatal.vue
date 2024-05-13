<template>
  <section>
    致命的なエラーを<button v-on:click="onThrowErrorClick">発生</button>
  </section>
</template>
<script setup lang="ts">
const onThrowErrorClick = () => {
  throw createError({
    message: "致命的な疑似エラー",
    fatal: true,
  });
};
</script>
<style></style>
