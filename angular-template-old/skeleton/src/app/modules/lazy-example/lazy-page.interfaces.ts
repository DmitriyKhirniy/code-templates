export interface WeatherItem {
  siteCode: string;
  siteName: string;
  latitude: number;
  longitude: number;
  sky: string;
  description: string;
  temperature: string;
  relativeHumidity: string;
  updatedTime: string;
  precipitationHr: string;
  snow: string;
}

export type WeatherResponse = { weathercurrent: WeatherItem };
