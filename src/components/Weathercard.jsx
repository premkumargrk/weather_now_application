// import React from "react";

// const WeatherCard = ({ weather, forecast }) => {
//   return (
//     <div className="text-center">
//       <h2 className="text-2xl font-semibold mb-3">
//         {weather.name}, {weather.country}
//       </h2>

//       <div className="bg-blue-100 rounded-xl p-6 shadow-md inline-block mb-8">
//         <p className="text-5xl font-bold text-blue-700 mb-2">
//           {weather.temperature}°C
//         </p>
//         <p className="text-gray-700">💨 {weather.windspeed} km/h Wind</p>
//       </div>

//       <h3 className="text-lg font-medium text-gray-700 mb-4">
//         🌤️ 7-Day Forecast
//       </h3>
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//         {forecast.map((day, i) => (
//           <div
//             key={i}
//             className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm"
//           >
//             <p className="font-semibold">{new Date(day.date).toDateString()}</p>
//             <p className="text-blue-700 mt-2">
//               🌡️ {day.minTemp}°C / {day.maxTemp}°C
//             </p>
//             <p className="text-gray-600 text-sm">
//               💨 {day.wind} km/h • 🌧️ {day.rain} mm
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;


// WeatherCard.jsx
import React from "react";

const WeatherCard = ({ weather, forecast }) => {
  return (
    <div className="text-center w-100">
      <h2 className="fw-semibold mb-3 text-secondary">
        {weather.name}, {weather.country}
      </h2>

      <div className="bg-light rounded-4 p-4 shadow-sm d-inline-block mb-4">
        <p className="display-4 fw-bold text-primary mb-1">
          {weather.temperature}°C
        </p>
        <p className="text-muted">💨 {weather.windspeed} km/h Wind</p>
      </div>

      <h4 className="fw-semibold text-secondary mb-3">🌤️ 7-Day Forecast</h4>
      <div className="row g-3 justify-content-center">
        {forecast.map((day, i) => (
          <div key={i} className="col-10 col-md-4 col-lg-3">
            <div className="card bg-white shadow-sm border-0 rounded-4 p-3">
              <p className="fw-semibold mb-1">
                {new Date(day.date).toDateString()}
              </p>
              <p className="text-primary fw-medium">
                🌡️ {day.minTemp}°C / {day.maxTemp}°C
              </p>
              <p className="text-muted small">
                💨 {day.wind} km/h • 🌧️ {day.rain} mm
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
