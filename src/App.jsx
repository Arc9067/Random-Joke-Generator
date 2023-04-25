import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "f12c5606d8msh59ce1e7d2c4555ap17113fjsn8b25c1a4821d",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    },
  };
  const url = "https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes";

  useEffect(() => {
    async function fetching() {
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const joke = JSON.parse(result);
        const output = joke[0].joke;
        setJoke(output);
      } catch (error) {
        console.error(error);
      }
    }
    fetching();
  }, []);

  async function handleClick() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const joke = JSON.parse(result);
      const output = joke[0].joke;
      setJoke(output);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1>generate random jokes</h1>
      <p>{joke}</p>
      {joke && <button onClick={handleClick}>click to refresh</button>}
    </div>
  );
}

export default App;
