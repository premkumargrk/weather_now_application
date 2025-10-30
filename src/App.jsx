// import React, { useState } from "react";

// const App = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState([]);

//   const fetchWeather = async () => {
//     if (!city) return alert("Please enter a city name!");

//     const geoRes = await fetch(
//       `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
//     );
//     const geoData = await geoRes.json();
//     if (!geoData.results || geoData.results.length === 0)
//       return alert("City not found!");

//     const { latitude, longitude, name, country } = geoData.results[0];

//     const weatherRes = await fetch(
//       `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=auto`
//     );

//     const data = await weatherRes.json();
//     setWeather({
//       name,
//       country,
//       temp: data.current.temperature_2m,
//       wind: data.current.wind_speed_10m,
//       humidity: data.current.relative_humidity_2m,
//     });
//     setForecast(data.daily);
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center p-4"
//       style={{ backgroundImage: "url('./assets/weather-img.jpg')" }}>
      
//       {/* Search Card */}
//       <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
//         <h1 className="text-3xl font-bold mb-4 text-gray-800">🌦️ Weather Now</h1>
//         <div className="flex items-center justify-center gap-2">
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="Enter city..."
//             className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//           />
//           <button
//             onClick={fetchWeather}
//             className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition"
//           >
//             Search
//           </button>
//         </div>

//         {/* Weather Info */}
//         {weather && (
//           <div className="mt-6 text-gray-800">
//             <h2 className="text-xl font-semibold">{weather.name}, {weather.country}</h2>
//             <p className="text-5xl font-bold mt-2">{weather.temp}°C</p>
//             <p className="mt-1 text-gray-600">💨 {weather.wind} km/h | 💧 {weather.humidity}%</p>
//           </div>
//         )}
//       </div>

//       {/* Forecast Card */}
//       {forecast.time && (
//         <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-6 mt-6 w-full max-w-4xl">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 7-Day Forecast</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
//             {forecast.time.map((day, index) => (
//               <div key={index} className="bg-white/80 rounded-lg p-4 shadow-md text-center hover:scale-105 transition">
//                 <p className="font-medium">{new Date(day).toDateString().slice(0, 10)}</p>
//                 <p className="text-blue-600 font-semibold">{forecast.temperature_2m_max[index]}° / {forecast.temperature_2m_min[index]}°</p>
//                 <p className="text-gray-600 text-sm">💨 {forecast.wind_speed_10m_max[index]} km/h</p>
//                 <p className="text-gray-600 text-sm">🌧 {forecast.precipitation_sum[index]} mm</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// import React from 'react';

// function App() {
//   return (
//     <div className="container my-5">
//       <div className="card shadow-lg border-0 rounded-4">
//         <div className="card-body p-4">
//           <h2 className="text-center mb-4 text-primary fw-bold">
//             Weather Now App
//           </h2>

//           <div className="mb-3">
//             <label htmlFor="city" className="form-label fw-semibold">
//               Enter City Name
//             </label>
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               id="city"
//               placeholder="e.g. Chennai"
//             />
//           </div>

//           <button className="btn btn-primary w-100 fw-bold">
//             Get Weather
//           </button>

//           <div className="mt-4 text-center">
//             <h5 className="fw-semibold">Temperature: 28°C</h5>
//             <p className="text-muted">Wind Speed: 15 km/h</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// App.jsx
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import WeatherCard from "./components/Weathercard";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState({
//     name: "Chennai",
//     country: "IN",
//     temperature: 31,
//     windspeed: 14,
//   });
//   const [forecast, setForecast] = useState([
//     { date: "2025-10-30", minTemp: 26, maxTemp: 33, wind: 12, rain: 2 },
//     { date: "2025-10-31", minTemp: 27, maxTemp: 34, wind: 15, rain: 0 },
//     { date: "2025-11-01", minTemp: 25, maxTemp: 32, wind: 11, rain: 5 },
//     { date: "2025-11-02", minTemp: 28, maxTemp: 35, wind: 10, rain: 0 },
//   ]);

//   const handleSearch = () => {
//     if (city.trim() === "") return;
//     alert(`Fetching weather for ${city}...`);
//     setCity("");
//   };

//   return (
//     <div
//       className="min-vh-100 d-flex flex-column align-items-center justify-content-center"
//       style={{
//         background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
//       }}
//     >
//       <div className="container py-5">
//         <div className="card shadow-lg border-0 rounded-4 p-4">
//           <h1 className="text-center mb-4 fw-bold text-primary">
//             🌤️ Weather Now
//           </h1>

//           {/* Search Bar */}
//           <div className="input-group mb-4">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter city name..."
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//             <button
//               className="btn btn-primary px-4 fw-semibold"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </div>

//           {/* Weather Display */}
//           <div className="d-flex justify-content-center">
//             <WeatherCard weather={weather} forecast={forecast} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherCard from "./components/Weathercard";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🌍 Function to fetch weather and forecast data
  const fetchWeather = async () => {
    if (!city.trim()) return alert("Please enter a city name!");

    try {
      setLoading(true);

      // Step 1: Get coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0)
        return alert("City not found!");

      const { latitude, longitude, name, country } = geoData.results[0];

      // Step 2: Get weather & forecast
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=auto`
      );
      const data = await weatherRes.json();

      setWeather({
        name,
        country,
        temperature: data.current.temperature_2m,
        windspeed: data.current.wind_speed_10m,
        humidity: data.current.relative_humidity_2m,
      });

      const forecastData = data.daily.time.map((date, i) => ({
        date,
        minTemp: data.daily.temperature_2m_min[i],
        maxTemp: data.daily.temperature_2m_max[i],
        wind: data.daily.wind_speed_10m_max[i],
        rain: data.daily.precipitation_sum[i],
      }));

      setForecast(forecastData);
      setLoading(false);
      setCity("");
    } catch (error) {
      console.error(error);
      alert("Error fetching weather data!");
      setLoading(false);
    }
  };

  // 💡 Trigger fetch when pressing Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
        fontFamily: "Poppins, sans-serif",
        backgroundSize: "cover",
        backgroundImage: "url('.assets/weather-img.jpg')",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <div
          className="card shadow-lg border-0 rounded-5 p-4 mx-auto"
          style={{
            maxWidth: "720px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1 className="text-center mb-4 fw-bold text-primary">
            🌤️ Weather Now
          </h1>

          {/* Search Bar */}
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg rounded-start-pill border-0 shadow-sm"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{
                backgroundColor: "#f8f9fa",
                fontSize: "1.1rem",
              }}
            />
            <button
              className="btn btn-primary px-4 fw-semibold rounded-end-pill"
              onClick={fetchWeather}
              disabled={loading}
              style={{
                background: "linear-gradient(135deg, #007bff, #0dcaf0)",
                border: "none",
                transition: "0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.target.style.background =
                  "linear-gradient(135deg, #0dcaf0, #007bff)")
              }
              onMouseOut={(e) =>
                (e.target.style.background =
                  "linear-gradient(135deg, #007bff, #0dcaf0)")
              }
            >
              {loading ? "Loading..." : "🔍 Search"}
            </button>
          </div>

          {/* Weather Data */}
          {weather && <WeatherCard weather={weather} forecast={forecast} />}
        </div>
      </div>
    </div>
  );
};

export default App;
