import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getWeather } from "./redux/weather/action";
import { Dispatch } from "redux";
import WeatherData from './components/WeatherData';

function App() {
  const [loader, setLoading] = useState(true);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    const successHandler = (position:any) => {
      const data = {city:'',lat:position.coords.latitude,lon:position.coords.longitude };
      dispatch(getWeather(data));
      setLoading(false)
    };
    const errorHandler = (error:any) => {
      console.log(error);
      setLoading(false)

    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);


  const { weatherData, loading, error }: WeatherState = useSelector(
    (state: WeatherState) => state,
    shallowEqual
  );

  const onSubmit = React.useCallback(
    (weather:any) => dispatch(getWeather(weather)),
    [dispatch]
  );

  return (
    <div className="App">
      <section className="App-header">
        <Form onSubmit={onSubmit} />  
        {loading || loader ? (
          <p className="LoadingClass"><i className="fas fa-spin fa-spinner fa-2x LoadingClass" ></i><br/>Loading...</p>
        ) : error ? (
          <p className='errorClass'>Error: {error}</p>
        ) : (
          <WeatherData  data={weatherData} />
        )}
      </section>
    </div>
  );
}

export default App;
