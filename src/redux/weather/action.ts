import * as actionTypes from "./type";
import {fetchCityData} from "../../services/weather"
import { Dispatch } from 'redux';

export function getWeather(formData: any) {

  return async (dispatch: Dispatch<WeatherAction>) => {
    dispatch({
      type: actionTypes.WEATHER_PENDING,
      data:{},
      msg:'Pending'
    }); // Dispatch a pending action

    try {
      const data = await fetchCityData(formData); // Make the API call to fetch city data
      console.log(data, 'action');

      const action: WeatherAction = {
        type: actionTypes.WEATHER_SUCCESS,
        data,
        msg: 'success'
      };
      
      dispatch(action); // Dispatch the success action
    } catch (error:any) {
      console.error('Error fetching city data:', error);
      
      const errorAction: WeatherAction = {
        type: actionTypes.WEATHER_ERROR,
        msg: error.message,
        data:{}
      };
      
      dispatch(errorAction); // Dispatch the error action
    }
  };
}




