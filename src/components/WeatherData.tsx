import React from 'react';
import {GetTime} from '../utility'
import { API_IMAGE_URL } from '../config';

interface WeatherDataProps {
  data: IArticle,
}

const WeatherData: React.FC<WeatherDataProps> = ({ data }) => {
  const { city, temp, desc, wind, humi,icon,timezone } = data;

  const dataAvailable = city && temp ;

return (
<>
    {dataAvailable && ( 
        <div className="container py-4 ">

        <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-8 col-lg-6 col-xl-6">

            <div className="card" >
                <div className="card-body p-4">

                <div className="d-flex">
                    <h6 className="flex-grow-1">{city}</h6>
                    <h6>{GetTime(timezone)}</h6>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                    <h6 className="display-4 mb-0 font-weight-bold tempColor" > {temp}°C </h6>
                    <span className="small iconColor" >{desc}</span>
                </div>

                <div className="d-flex align-items-center">
                    <div className="flex-grow-1" >
                    <div><i className="fas fa-wind fa-fw" ></i> <span className="ms-1"> {wind} km/h </span></div>
                    <div><i className="fas fa-tint fa-fw" ></i> <span className="ms-1"> {humi}% </span></div>
                    </div>
                    <div>
                    <img src={API_IMAGE_URL + icon + "@2x.png"} width="100px" />

                    </div>
                </div>

                </div>
            </div>

            </div>
        </div>

        </div>
    )}
</>

);

};

export default WeatherData;
