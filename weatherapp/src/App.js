import { useState, useEffect, useRef } from "react";
import { Search } from "./components/Search";
import { Weather } from "./components/Weather";

export default function App() {
  const KEY = "f7c4048827a0adb12ec9a5c8a4d9ebe1";
  const limit = 1;
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState("");

  const lat = useRef();
  const lon = useRef();

  const geocodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=${limit}&appid=${KEY}`;
  const apiWithExclude = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${KEY}`;
  const apiWithoutExclude = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${KEY}`;

  useEffect(
    function () {
      async function fetchGeocode() {
        try {
          setIsLoading(true);
          const res = await fetch(geocodeURL);

          if (!res.ok)
            throw new Error("Something wrong with fetching geocode.");

          const data = await res.json();
          console.log(data[0].name, data[0].state, data[0].lat, data[0].lon);
          lat.current = data[0].lat;
          lon.current = data[0].lon;

          if (data.Response === "False") throw new Error("City not found.");

          setLocation(`${data[0].name}, ${data[0].state}`);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchGeocode();
    },
    [search, geocodeURL]
  );

  useEffect(
    function () {
      async function fetchWeather() {
        try {
          setIsLoading(true);
          const res = await fetch(apiWithoutExclude);
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchWeather();
    },
    [apiWithoutExclude]
  );

  return (
    <>
      <h1>Weather Application</h1>
      <p>Today's forecast :D</p>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      {isLoading ? "Is Loading..." : <Weather location={location} />}
    </>
  );
}
