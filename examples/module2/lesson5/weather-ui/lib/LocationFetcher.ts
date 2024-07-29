import axios from 'axios';
import { LocationWeather, LocationWeatherUS } from '../models/LocationWeather';
import { parseLocation } from './LocationParser';
import { WeatherRequest } from '../models/WeatherRequest';

function isUSResponse(data: LocationWeather | LocationWeatherUS): data is LocationWeatherUS {
  return 'Weather' in data.weatherDetails;
}

function parseData(data: LocationWeather | LocationWeatherUS): LocationWeather {
  if (isUSResponse(data)) {
    return {
      city: data.city,
      country: data.country,
      weatherDetails: data.weatherDetails.Weather.map(weather => ({
        ...weather,
        averageTemperature: weather.average_temperature
      }))
    };
  }
  return data;
}

async function getWeatherData(
  request: WeatherRequest
): Promise<LocationWeather> {
  const { data } = await axios.get<LocationWeather | LocationWeatherUS>(
    `/api/weather?city=${request.city}&country=${request.country}`
  );


  return parseData(data);
}

export async function fetchWeather(
  locationQuery: string
): Promise<LocationWeather | null> {
  const request = parseLocation(locationQuery);

  if (!request) {
    return null;
  }

  try {
    return await getWeatherData({
      city: request.city,
      country: request.country
    });
  } catch {
    throw new Error(
      `Cannot fetch weather data for provided location: ${request.city}, ${request.country}`
    );
  }
}
