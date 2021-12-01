interface ILocationCoordinates {
  lon: number;
  lat: number;
}

interface IWeatherMainData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMainWeatherProperties {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface IWindProperties {
  speed: number;
  deg: number;
}

interface ICloudsAmount {
  all: number;
}

interface ISysData {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherDataType {
  coord?: ILocationCoordinates;
  weather?: IWeatherMainData[];
  base?: string;
  main?: IMainWeatherProperties;
  visibility?: number;
  wind?: IWindProperties;
  clouds?: ICloudsAmount;
  dt?: number;
  sys?: ISysData;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}
