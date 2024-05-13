<template>
  <ErrorGenaratorFatal />
  <p>
    <nuxt-link :to="{ name: 'index' }"> 戻る </nuxt-link>
  </p>
</template>
<!-- <script setup lang="ts">
const onResetButtonClick = async (error: Ref) => {
  await navigateTo("/");
  error.value = null;
  console.log("error.value = " + error.value);
};
</script>
<style lang=""></style> -->
