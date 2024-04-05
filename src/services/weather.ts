import axios from 'axios';
import { API_WEATHER_URL, API_GEO_URL, API_KEY,TEMP_UNIT } from '../config';

export const fetchCityData = async (formData:any) => {
    let lat, lon; 
    try {
        if (formData.city === '') {
            lat = formData.lat;
            lon = formData.lon;
        } else {
            // Call geoLocation function to get coordinates
            const geoResponse = await geoLocation(formData.city);
            if(geoResponse ==''){
                throw new Error(' Invalid city! ');
            }
            if (geoResponse) {
                const data  = geoResponse[0];
                lat = data.lat; 
                lon = data.lon; 
            }
        }
        // Call weather API using coordinates
        const weatherResponse = await axios.get(`${API_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${TEMP_UNIT}`);
        return weatherResponse.data;
    } catch (error:any) {
        throw new Error('Error fetching city data: ' + error.message);
    }
};


export const geoLocation = async (city: string) => {
    try {
        const response = await axios.get(`${API_GEO_URL}?q=${city}&limit=1&appid=${API_KEY}`);
        return response.data;
    } catch (error:any) {
        throw new Error('Error fetching geolocation data: ' + error.message);
    }
};
