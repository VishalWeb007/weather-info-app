import * as actionTypes from './type';

const initialState: WeatherState = {
  weatherData: {
    city: '',
    temp: '',
    desc: '',
    wind: '',
    humi: '',
    icon:'',
    date:'',
    timezone:''
  },
  msg: '',
  loading: false,
  error: '',
};

const reducer = (
  state: WeatherState = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case actionTypes.WEATHER_PENDING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case actionTypes.WEATHER_SUCCESS:
      const data = action.data;
      const newData: IArticle = {
        city: data.name,
        temp: data.main.temp,
        desc: data.weather[0].description,
        wind: data.wind.speed,
        humi: data.main.humidity,
        icon:data.weather[0].icon,
        date:data.dt,
        timezone:data.timezone
      };
      return {
        ...state,
        weatherData: newData,
        loading: false,
        error: '',
      };
    case actionTypes.WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.msg, // Assuming the action.msg contains the error message
      };
    default:
      return state;
  }
};

export default reducer;
