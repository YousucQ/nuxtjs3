<template>
  <nav id="breadcrumbs">
    <ul>
      <li><NuxtLink :to="{ name: 'index' }">TOP</NuxtLink></li>
      <li>
        <NuxtLink :to="{ name: 'member-memberList' }">会員リスト</NuxtLink>
      </li>
      <li>{{ PAGE_TITLE }}</li>
    </ul>
  </nav>
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <p v-if="pending">データ取得中...</p>
    <dl v-else>
      <dt>ID</dt>
      <dd>{{ member?.id }}</dd>
      <dt>名前</dt>
      <dd>{{ member?.name }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ member?.email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ member?.points }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>
<script setup lang="ts">
import type { Member } from "@/state/interfaces";

const PAGE_TITLE = "会員詳細情報";
definePageMeta({
  layout: "member",
});
useHead({
  title: PAGE_TITLE,
});

const route = useRoute();
// const memberList = useState<Map<number, Member>>('memberList');
const asyncData = useLazyFetch(`/member-management/members/${route.params.id}`);
const responseData = asyncData.data;
const pending = asyncData.pending;

const member = computed((): Member | undefined => {
  return responseData.value?.data[0];
});

const localNote = computed((): string => {
  let localNote = "--";
  if (member.value !== undefined && member.value.note !== undefined) {
    localNote = member.value.note;
  }
  return localNote;
});
</script>
<style></style>
