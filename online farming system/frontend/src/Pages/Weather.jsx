import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('en');

  // OpenWeatherMap API key
  const API_KEY = '1348dfef5fdcb65657d7d4a0867f3391';

  const content = {
    en: {
      title: "Weather Forecast",
      searchPlaceholder: "Enter city name...",
      search: "Search",
      temperature: "Temperature",
      humidity: "Humidity",
      windSpeed: "Wind Speed",
      description: "Description",
      feelsLike: "Feels Like",
      pressure: "Pressure",
      visibility: "Visibility",
      sunrise: "Sunrise",
      sunset: "Sunset",
      error: "City not found. Please try again.",
      loading: "Loading weather data...",
      toggleLang: "தமிழில் மொழிபெயர் செய்ய"
    },
    ta: {
      title: "வானிலை முன்னறிவிப்பு",
      searchPlaceholder: "நகரத்தின் பெயரை உள்ளிடவும்...",
      search: "தேடு",
      temperature: "வெப்பநிலை",
      humidity: "ஈரப்பதம்",
      windSpeed: "காற்றின் வேகம்",
      description: "விவரம்",
      feelsLike: "உணரப்படும் வெப்பநிலை",
      pressure: "அழுத்தம்",
      visibility: "பார்வை தூரம்",
      sunrise: "சூரிய உதயம்",
      sunset: "சூரிய அஸ்தமனம்",
      error: "நகரம் கண்டுபிடிக்கப்படவில்லை. மீண்டும் முயற்சிக்கவும்.",
      loading: "வானிலை தகவல்களை ஏற்றுகிறது...",
      toggleLang: "Translate to English"
    }
  };

  const tamilTranslations = {
    'clear sky': 'தெளிவான வானம்',
    'few clouds': 'சிறிது மேகமூட்டம்',
    'scattered clouds': 'சிதறிய மேகங்கள்',
    'broken clouds': 'துண்டு மேகங்கள்',
    'shower rain': 'மழைப்பொழிவு',
    'rain': 'மழை',
    'thunderstorm': 'இடியுடன் கூடிய மழை',
    'snow': 'பனி',
    'mist': 'மூடுபனி',
    'moderate rain': 'மிதமான மழை',
    'light rain': 'லேசான மழை',
    'heavy rain': 'கனமழை',
    'overcast clouds': 'மேக மூட்டம்',
    'haze': 'பனிமூட்டம்',
  };

  const lang = content[language];

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString(language === 'en' ? 'en-US' : 'ta-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const translateDescription = (desc) => {
    if (language === 'ta') {
      return tamilTranslations[desc.toLowerCase()] || desc;
    }
    return desc;
  };

  const searchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );

      if (response.data) {
        setWeather({
          ...response.data,
          main: {
            ...response.data.main,
            temp: Math.round(response.data.main.temp),
            feels_like: Math.round(response.data.main.feels_like)
          }
        });
      } else {
        setError(lang.error);
      }
    } catch (err) {
      console.error('Weather API Error:', err);
      if (err.response && err.response.status === 404) {
        setError('City not found. Please check the spelling and try again.');
      } else if (err.response && err.response.status === 401) {
        setError('API key error. Please try again later.');
      } else if (err.response && err.response.status === 429) {
        setError('Too many requests. Please try again in a few minutes.');
      } else {
        setError('Unable to fetch weather data. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <div className="header">
        <h1>{lang.title}</h1>
        <button 
          className="lang-toggle"
          onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
        >
          {lang.toggleLang}
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={lang.searchPlaceholder}
          onKeyPress={(e) => e.key === 'Enter' && searchWeather()}
        />
        <button onClick={searchWeather}>{lang.search}</button>
      </div>

      {loading && <div className="loading">{lang.loading}</div>}
      {error && <div className="error">{error}</div>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <div className="weather-grid">
            <div className="weather-item">
              <span className="label">{lang.temperature}:</span>
              <span className="value">{weather.main.temp}°C</span>
            </div>
            <div className="weather-item">
              <span className="label">{lang.feelsLike}:</span>
              <span className="value">{weather.main.feels_like}°C</span>
            </div>
            <div className="weather-item">
              <span className="label">{lang.humidity}:</span>
              <span className="value">{weather.main.humidity}%</span>
            </div>
            <div className="weather-item">
              <span className="label">{lang.windSpeed}:</span>
              <span className="value">{weather.wind.speed} m/s</span>
            </div>
            <div className="weather-item">
              <span className="label">{lang.pressure}:</span>
              <span className="value">{weather.main.pressure} hPa</span>
            </div>
            <div className="weather-item">
              <span className="label">{lang.visibility}:</span>
              <span className="value">{weather.visibility / 1000} km</span>
            </div>
            <div className="weather-item">
              <span className="label">{lang.sunrise}:</span>
              <span className="value">{formatTime(weather.sys.sunrise)}</span>
            </div>
            <div className="weather-item">
              <span className="label">{lang.sunset}:</span>
              <span className="value">{formatTime(weather.sys.sunset)}</span>
            </div>
            <div className="weather-item description">
              <span className="label">{lang.description}:</span>
              <span className="value">
                {translateDescription(weather.weather[0].description)}
              </span>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
