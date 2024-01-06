import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>JOKES:{jokes.length}</h1>
      <p>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <p>{joke.title}</p>
            <p>{joke.content}</p>
          </div>
        ))}
      </p>
    </>
  );
}

export default App;
