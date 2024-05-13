<template>
  <section>
    サーバでエラーを<button v-on:click="onThrowErrorClick">発生</button>
  </section>
</template>
<script setup lang="ts">
const onThrowErrorClick = async (): Promise<void> => {
  const asyncData = await useFetch("/api/generateError");
  const errorValue = asyncData.error.value;
  if (errorValue !== null) {
    throw createError({
      message: `サーバでエラーが発生しました: ${errorValue.message}`,
      statusCode: errorValue.statusCode,
      statusMessage: errorValue.statusMessage,
      fatal: true,
    });
  }
};
</script>
<style></style>
