# 🌤️ Weather Now

A responsive React application that allows users to check the **current weather conditions** and a **7-day forecast** for any city using the **Open-Meteo API**.

---

## 🚀 Live Demo
🔗 **Deployed on Vercel:** [https://weather-note-app.vercel.app](https://weather-note-app.vercel.app/)

---

## 💬 Working with AI 
I collaborated with **ChatGPT (GPT-5)** to plan, build, debug, and refine this project.  

---

## 🧩 Features
- 🌍 Search for any city worldwide
- 🌡️ Displays current temperature, humidity, and wind speed
- 📅 Shows 7-day weather forecast with daily high/low temperatures
- ☁️ Interactive and responsive card-based UI
- 🎨 Styled using **Bootstrap** and custom CSS
- ⚡ Built with **Vite + React.js**

---

## 🛠️ Tech Stack
- **Frontend:** React.js (Vite)
- **Styling:** Bootstrap, CSS
- **API:** [Open-Meteo API](https://open-meteo.com/)
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## 🧠 How It Works
1. User enters a city name in the search bar.
2. On pressing `Enter` or clicking **Search**, the app fetches:
   - Latitude & Longitude (via Open-Meteo Geocoding API)
   - Current & 7-day forecast weather data (via Open-Meteo API)
3. Weather details are displayed dynamically in a responsive card layout.

---

## 🧾 Project Setup (for local development)

# Clone the repo
git clone https://github.com/premkumargrk/weather-now-application.git

# Navigate into the folder
cd weather-now-application

# Install dependencies
npm install

# Run the app locally
npm run dev
