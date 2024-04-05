interface IArticle {
  city: string;
  temp: string;
  desc: string;
  wind: string;
  humi: integer;
  icon:string;
  date:interger;
  timezone:integer;
}

interface weatherForm {
  city: string;
  lat: number| undefined;
  lon: number| undefined;
}

type WeatherState = {
  weatherData: IArticle;
  msg : string,
  loading: boolean,
  error:string
};

type WeatherAction = {
  type: string;
  data: any;
  msg : string,
  
};

type DispatchType = (args: WeatherAction) => WeatherAction;
