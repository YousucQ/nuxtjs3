import type { City } from "@/state/interfaces";

export const useWeatherInfoFetcher = (city: City) => {
  const config = useRuntimeConfig();
  const asyncData = useLazyAsyncData(
    `useWeatherInfoFetcher-${city.id}`,
    (): Promise<any> => {
      // const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
      const params: {
        lang: string;
        q: string;
        appid: string;
      } = {
        lang: "ja",
        q: city.q,
        //APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
        appid: config.public.weathermapAppid,
      };
      const queryParams = new URLSearchParams(params);
      const urlFull = `${config.public.weatherInfoUrl}?${queryParams}`;
      const response = $fetch(urlFull);
      return response;
    },
    {
      // pick: ["weather"],
      transform: (data: any): string => {
        const weatherArray = data.weather;
        const weather = weatherArray[0];
        return weather.description;
      },
    }

    // "https://api.openweathermap.org/data/2.5/weather",
    // {
    //   key: `/WeatherInfo/${route.params.id}`,
    //   query: params,
    //   transform: (data: any): string => {
    //     const weatherArray = data.weather;
    //     const weather = weatherArray[0];
    //     return weather.description;
    //   },
    // }
  );
  return asyncData;
};
