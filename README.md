# Weather API Proxy

A simple Node.js Express server that exposes a single route to fetch current weather data for a given country using the [WeatherAPI](https://www.weatherapi.com/). This project is the back-end project for the Worktable's Full Stack Developer hiring test.

## ✨ Features

- Connects to WeatherAPI to fetch real-time weather
- Accepts a country identifier as a request parameter
- Returns weather data in JSON format

## 🚀 Tech Stack

**Backend:** Node.js, Express  
**Environment Management:** dotenv

## 📦 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/joao-tripoli/countries-api.git
cd countries-api
pnpm i
```

Create a `.env` file in the root directory and add your API key:

```env
WEATHER_API_KEY=your_weatherapi_key_here
```

Start the development server:

```bash
pnpm dev
```

## 📡 API Endpoint

### `GET /weather/current/Brazil`

**Example Request:**

```
GET http://localhost:3001/api/weather/current/Brazil
```

## 📁 Folder Structure

```
.
├── src/                # Source code for the server
│   └── index.js        # Main server entry point
│   └── handlers/       # Request handlers for API endpoints
│   └── router/         # API route definitions
├── package.json
```

└── README.md

```

## 🔍 What I Focused On

- Clean and minimal Express setup
- Secure API key handling with dotenv
- Clear and simple route interface

## 🙋‍♂️ About Me

This project was built as part of a technical interview challenge.
If you have any questions or want to discuss it further, feel free to reach out:

João Matheus Tripoli – [LinkedIn](https://www.linkedin.com/in/joao-tripoli/)
```
