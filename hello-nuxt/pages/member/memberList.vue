<template>
  <nav id="breadcrumbs">
    <ul>
      <li><NuxtLink :to="{ name: 'index' }">TOP</NuxtLink></li>
      <li>{{ PAGE_TITLE }}</li>
      <!-- <li></li> -->
    </ul>
  </nav>
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <p>
      新規登録は<NuxtLink :to="{ name: 'member-memberAdd' }">こちら</NuxtLink
      >から
    </p>
    <p v-if="pending">データ取得中...</p>
    <section v-else>
      <ul>
        <li v-if="isEmptyList">会員情報は存在しません。</li>
        <li v-for="member in memberList" :key="member.id">
          <NuxtLink
            :to="{ name: 'member-memberDetail-id', params: { id: member.id } }"
            >IDが {{ member.id }} の {{ member.name }} さん</NuxtLink
          >
        </li>
      </ul>
    </section>
  </section>
</template>
<script setup lang="ts">
import type { Member } from "@/state/interfaces";

const PAGE_TITLE = "会員リスト";
definePageMeta({
  layout: "member",
});
useHead({
  title: PAGE_TITLE,
});

const asyncData = useLazyFetch("/member-management/members");
const responseData = asyncData.data;
const pending = asyncData.pending;
const memberList = computed((): Member[] => {
  let returnList: Member[] = [];
  if (responseData.value !== null) {
    returnList = responseData.value.data;
  }
  return returnList;
});

const isEmptyList = computed((): boolean => {
  return memberList.value.length == 0;
});
</script>
<style></style>
