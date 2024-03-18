import { useEffect, useReducer } from "react";
import { convertToFlag } from "./helpers/helpers";
import Weather from "./components/Weather";

const initialState = {
  isLoading: false,
  weather: {},
  location: "",
  displayLocation: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "changeLocation":
      return { ...state, location: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload };
    case "displayLocation":
      return { ...state, displayLocation: action.payload };
    case "displayWeather":
      return { ...state, weather: action.payload };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ isLoading, weather, location, displayLocation }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchWeather() {
      if (location.length < 2)
        dispatch({ type: "displayWeather", payload: {} });

      dispatch({ type: "loading", payload: true });

      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const geoData = await geoRes.json();
        console.log(geoData);

        if (!geoData.results) throw new Error("Location not found");

        const { latitude, longitude, timezone, name, country_code } =
          geoData.results.at(0);
        dispatch({
          type: "displayLocation",
          payload: `${name} ${convertToFlag(country_code)}`,
        });

        console.log(displayLocation);

        // 2) Getting actual weather
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
        );
        const weatherData = await weatherRes.json();
        dispatch({ type: "displayWeather", payload: weatherData.daily });
      } catch (error) {
        console.log(error);
      } finally {
        dispatch({ type: "loading", payload: false });
      }
    }

    fetchWeather();
  }, [location, displayLocation]);

  return (
    <div className="app">
      <h1>Classy Weather</h1>
      <input
        type="text"
        value={location}
        onChange={(e) =>
          dispatch({ type: "changeLocation", payload: e.target.value })
        }
        placeholder="Search from location..."
      />
      {isLoading && <p className="loader">Loading...</p>}
      {weather.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </div>
  );
}

export default App;
