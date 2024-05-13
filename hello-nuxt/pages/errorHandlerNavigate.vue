<template>
  <NuxtErrorBoundary>
    <ErrorGeneratorImmediate />
    <template v-slot:error="{ error }">
      <p>エラーが発生しました!!!</p>
      <p>{{ error }}</p>
      <button v-on:click="onBackButtonClick">エラーを解消</button>
    </template>
  </NuxtErrorBoundary>

  <p>
    <nuxt-link :to="{ name: 'index' }"> 戻る </nuxt-link>
  </p>
</template>
<script setup lang="ts">
const onBackButtonClick = () => {
  clearError({ redirect: "https://yahoo.co.jp" });
};

// const onResetButtonClick = async (error: Ref) => {
//   await navigateTo("/");
//   error.value = null;
//   console.log("error.value = " + error.value);
// };
</script>
<style lang=""></style>
