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
    <p v-if="pending">データ送信中...</p>
    <template v-else>
      <p>情報を入力し、登録ボタンをクリックしてください。</p>
      <form v-on:submit.prevent="onAdd">
        <dl>
          <dt><label for="addId">ID&nbsp;</label></dt>
          <dd>
            <input
              type="number"
              id="addId"
              v-model.number="member.id"
              required
            />
          </dd>
          <dt><label for="addName">名前&nbsp;</label></dt>
          <dd>
            <input type="text" id="addName" v-model="member.name" required />
          </dd>
          <dt><label for="addEmail">メールアドレス&nbsp;</label></dt>
          <dd>
            <input type="email" id="addEmail" v-model="member.email" required />
          </dd>
          <dt><label for="addPoints">保有ポイント&nbsp;</label></dt>
          <dd>
            <input
              type="number"
              id="addPoints"
              v-model.number="member.points"
              required
            />
          </dd>
          <dt><label for="addNote">備考&nbsp;</label></dt>
          <dd><textarea id="addNote" v-model="member.note"></textarea></dd>
        </dl>
        <button type="submit">登録</button>
      </form>
    </template>
  </section>
</template>
<script setup lang="ts">
import type { Member } from "@/state/interfaces";
const PAGE_TITLE = "会員情報追加";
definePageMeta({
  layout: "member",
});
useHead({
  title: PAGE_TITLE,
});

const router = useRouter();
// const memberList = useState<Map<number, Member>>('memberList');
const member: Member = reactive({
  id: 0,
  name: "",
  email: "",
  points: 0,
  note: "",
});

const pending = ref(false);
const onAdd = async (): Promise<void> => {
  pending.value = true;
  const asyncData = await useFetch("/member-management/members", {
    method: "POST",
    body: member,
  });
  if (asyncData.data.value !== null && asyncData.data.value?.result === 1) {
    router.push({ name: "member-memberList" });
  }
};
</script>
<style></style>
