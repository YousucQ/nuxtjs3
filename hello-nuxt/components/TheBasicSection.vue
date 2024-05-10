<template>
  <section>
    <h1>会員</h1>
    <p>全会員の保有ポイントの合計 {{ totalPoints }}</p>
    <OneMember
      v-for="id in memberList.keys()"
      :key="id"
      :id="id"
    />
  </section>
</template>
<script setup lang="ts">
import type { Member } from "@/state/interfaces";

const memberList = useState<Map<number, Member>>("memberList");

const totalPoints = computed((): number => {
  let total = 0;
  for(const member of memberList.value.values()) {
    total += member.points;
  }
  return total;
});

// const onIncrementPoint = (id: number): void => {
//   const member = memberList.value.get(id);
//   if(member !== undefined) {
//     member.points++;
//   }
// }
</script>
<style>
  section {
    border: blue 1px solid;
    margin: 10px;
  }
</style>