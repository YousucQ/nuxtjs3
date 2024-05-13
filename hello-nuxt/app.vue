<template>
  <!-- <NuxtLayout>
    <NuxtPage />
  </NuxtLayout> -->

  <NuxtPage />

  <!-- <header>
    <h1>{{ SITE_TITLE }}</h1>
  </header>
  <main>
    <NuxtPage />
  </main> -->
</template>
<!-- <script setup lang="ts">
// import type { City } from "@/state/interfaces";
import type { Member } from "@/state/interfaces";

useState<Map<number, Member>>("memberList", (): Map<number, Member> => {
  const memberListInit = new Map<number, Member>();
  memberListInit.set(33456, {
    id: 33456,
    name: "田中太郎",
    email: "bow@example.com",
    points: 35,
    note: "初回入会特典あり。",
  });
  memberListInit.set(47783, {
    id: 47783,
    name: "鈴木二郎",
    email: "mue@example.com",
    points: 53,
  });
  return memberListInit;
});

const SITE_TITLE = "サーバーサンプル";
useHead({
  titleTemplate: (titleChunk: string | undefined): string => {
    let title = SITE_TITLE;
    if (titleChunk !== undefined) {
      title = `${titleChunk} | ${SITE_TITLE}`;
    }
    return title;
  },
  // titleTemplate: `%s | ${SITE_TITLE}`
});
//会員情報リストをステートとして用意。
// useState<Map<number, City>>("cityList", (): Map<number, City> => {
//   const cityListInit = new Map<number, City>();
//   cityListInit.set(1853909, { id: 1853909, name: "大阪", q: "Osaka" });
//   cityListInit.set(1859171, { id: 1859171, name: "神戸", q: "Kobe" });
//   cityListInit.set(1862627, { id: 1862627, name: "姫路", q: "Himeji" });
//   return cityListInit;
// });

// useState<Map<number, City>>(
//   "CityList",
//   (): Map<number, City> => {
//     const cityListInit = new Map<number, City>();
//     cityListInit.set(33456, {
//       id: 33456,
//       name: "田中太郎",
//       email: "tanaka@gmail.com",
//       points: 35,
//       note: "初回特典あり",
//     });
//     cityListInit.set(47783, {
//       id: 47783,
//       name: "鈴木小次郎",
//       email: "suzuki@gmail.com",
//       points: 53,
//     });
//     return cityListInit;
//   }
// );
</script> -->
<style>
main {
  border: blue 1px solid;
  padding: 10px;
}
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs {
  margin-left: 10px;
}
#breadcrumbs ul {
  padding-left: 0;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li:before {
  content: " > ";
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>
