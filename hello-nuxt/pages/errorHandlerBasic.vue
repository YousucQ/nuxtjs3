<template>
  <NuxtErrorBoundary>
    <ErrorGenaratorBasic />
    <template v-slot:error="{ error }">
      <p>エラーが発生しました!!!</p>
      <p>{{ error }}</p>
      <button v-on:click="onResetButtonClick(error)">エラーを解消</button>
    </template>
  </NuxtErrorBoundary>

  <p>
    <nuxt-link :to="{ name: 'index' }"> 戻る </nuxt-link>
  </p>
</template>
<script setup lang="ts">
const onResetButtonClick = (error: Ref) => {
  error.value = null;
};
</script>
<style lang=""></style>
