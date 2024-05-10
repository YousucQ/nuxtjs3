<template>
  <p v-if="pending">データ取得中...</p>
  <section v-else>
    <h2>{{ selectedCity.name }} の天気</h2>
    <p>{{ weatherDescription }}</p>
  </section>
  <p>リストに<NuxtLink :to="{ name: 'index' }">戻る</NuxtLink></p>
</template>
<script setup lang="ts">
import type { City } from "@/state/interfaces";

const route = useRoute();
const cityList = useState<Map<number, City>>("cityList");

const selectedCity = computed((): City => {
  const idNo = Number(route.params.id);
  return cityList.value.get(idNo) as City;
});
const asyncData = useWeatherInfoFetcher(selectedCity.value);

// const weatherDescription = ref("");
// const params: {
//   lang: string;
//   q: string;
//   appid: string;
// } = {
//   lang: "ja",
//   q: selectedCity.value.q,
//   appid: "a1bedd41ace7e5b960451cfcea2ae584",
// };

// const asyncData = useLazyAsyncData(
//   `/WeatherInfo/${route.params.id}`,
//   (): Promise<any> => {
//     const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
//     const params: {
//       lang: string;
//       q: string;
//       appid: string;
//     } = {
//       lang: "ja",
//       q: selectedCity.value.q,
//       //APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
//       appid: "a1bedd41ace7e5b960451cfcea2ae584",
//     };
//     const queryParams = new URLSearchParams(params);
//     const urlFull = `${weatherInfoUrl}?${queryParams}`;
//     const response = $fetch(urlFull);
//     return response;
//   },
//   {
//     // pick: ["weather"],
//     transform: (data: any): string => {
//       const weatherArray = data.weather;
//       const weather = weatherArray[0];
//       return weather.description;
//     },
//   }

//   // "https://api.openweathermap.org/data/2.5/weather",
//   // {
//   //   key: `/WeatherInfo/${route.params.id}`,
//   //   query: params,
//   //   transform: (data: any): string => {
//   //     const weatherArray = data.weather;
//   //     const weather = weatherArray[0];
//   //     return weather.description;
//   //   },
//   // }
// );
// console.log("data = " + data);
// console.dir(data);
// const weather = data.value.weather[0];
// const weatherInfoUrl = "";
// const queryParams = new URLSearchParams(params);
// const urlFull = `${weatherInfoUrl}?${queryParams}`;
// const response = await $fetch(urlFull) as any
const weatherDescription = asyncData.data;
const pending = asyncData.pending;
</script>
<style></style>
