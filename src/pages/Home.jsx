import  { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import {
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";



function Home() {
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=ff9b41622f994b1287a73535210809&q=Guwahati&days=3"
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  const formatDate = (date) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const data = [
    { name: "Jan 1", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Jan 2", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Jan 3", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Jan 4", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Jan 5", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jan 6", uv: 0, pv: 0, amt: 0 },
    { name: "Jan 7", uv: 0, pv: 0, amt: 0 },
  ];

  return (
    <main className="main-container">
      {/* Weather Section */}
      <div className="weather-section">
        {weatherData ? (
          <div className="weather-card bg-white shadow rounded-lg p-5">
            <h2 className="font-bold text-gray-800 text-lg">{formatDate(new Date())}</h2>
            <div className="flex mt-4 mb-2">
              <div className="flex-1">
                <div className="text-gray-600 text-sm">
                  {weatherData.location.name}, {weatherData.location.region}
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  {weatherData.current.temp_c} &deg;C
                </div>
                <div className="text-xs text-gray-600">
                  {weatherData.current.condition.text}
                </div>
              </div>
              <div className="w-24">
                <img
                  src={`https:${weatherData.current.condition.icon}`}
                  alt={weatherData.current.condition.text}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex space-x-2 justify-between border-t">
              {weatherData.forecast.forecastday.map((forecast, key) => (
                <div className="flex-1 text-center pt-3" key={key}>
                  <div className="text-xs text-gray-500">
                    {forecast.date.split("-").reverse().join("/")}
                  </div>
                  <img
                    src={`https:${forecast.day.condition.icon}`}
                    alt={forecast.day.condition.text}
                    loading="lazy"
                    className="mx-auto"
                  />
                  <div className="font-semibold text-gray-800 mt-1.5">
                    {forecast.day.maxtemp_c} &deg;C
                  </div>
                  <div className="text-xs text-gray-600">
                    {forecast.day.condition.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="weather-card bg-white shadow rounded-lg p-5 animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="flex">
              <div className="flex-1 space-y-3">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        )}
      </div>

      
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>VIEWS</h3>
            <FaEye className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>LIKES</h3>
            <AiOutlineLike className="card_icon" />
          </div>
          <h1>120</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className="charts">
        <div style={{ width: "100%", height: "300px" }}>
          
        </div>

        <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
          
        </div>
      </div>
    </main>
  );
}

export default Home;
