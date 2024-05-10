<script setup lang="ts">
import type { City } from "@/state/interfaces";

//都市情報リストをステートから取得。
const cityList = useState<Map<number, City>>("cityList");
</script>

<template>
  <h1>TOP</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>TOP</li>
    </ul>
  </nav>
  <section>
    <p>
      <NuxtLink v-bind:to="{ name: 'member-memberList' }">
        会員管理はこちら
      </NuxtLink>
    </p>
  </section>

  <!-- <section>
    <h2>都市リスト</h2>
    <ul>
      <li v-for="[id, city] in cityList" v-bind:key="id">
        <NuxtLink v-bind:to="{ name: 'WeatherInfo-id', params: { id: id } }">
          {{ city.name }}の天気
        </NuxtLink>
      </li>
    </ul>
  </section> -->
</template>

<!-- <template>
  <section>
    <label>
      表示するお天気ポイント
      <select v-model="selectedCityId">
        <option v-for="[id, city] in cityList" :key="id" :value="id">
          {{ city.name }}
        </option>
      </select>
    </label>
  </section>
  <p v-if="pending">データ取得中...</p>
  <section v-else>
    <h2>{{ data?.cityName }}</h2>
    <p>{{ data?.description }}</p>
  </section>
</template>
<script setup lang="ts">
import type { City, WeatherInfoData } from "@/state/interfaces";

const cityList = useState<Map<number, City>>("cityList");
const selectedCityId = ref(1853909);
const asyncData = await useAsyncData(
  // `/WeatherInfo/${route.params.id}`,
  (): Promise<any> => {
    const selectedCity = cityList.value.get(selectedCityId.value) as City;
    const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
    const params: {
      lang: string;
      q: string;
      appid: string;
    } = {
      lang: "ja",
      q: selectedCity.q,
      //APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
      appid: "a1bedd41ace7e5b960451cfcea2ae584",
    };
    const queryParams = new URLSearchParams(params);
    const urlFull = `${weatherInfoUrl}?${queryParams}`;
    const response = $fetch(urlFull);
    return response;
  },
  {
    // pick: ["weather"],
    transform: (data: any): WeatherInfoData => {
      const weatherArray = data.weather;
      const weather = weatherArray[0];
      return {
        cityName: `${data.name} の天気`,
        description: weather.description,
      };
    },
    watch: [selectedCityId],
  }
);

// const selectedCityInit = cityList.value.get(selectedCityId.value) as City;
// const selectedCity = ref(selectedCityInit);

const pending = asyncData.pending;
const data = asyncData.data;
// const refresh = asyncData.refresh;

// const onCityChanged = () => {
//   selectedCity.value = cityList.value.get(selectedCityId.value) as City;
//   refresh();
// };
</script> -->
