import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="footer">
          <p>This project was coded by Luciana Bautista Ferrand</p>
          <a
            className="Luciana Ferrand-link"
            href="https://www.lbferrandportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My website
          </a>
          <br />
          <a
            className="github-link"
            href="https://github.com/lbferrand/weather-app-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on GitHub
          </a>
          <br />
          <div>
            <img
              src="https://hitwebcounter.com/counter/counter.php?page=7928745&style=0033&nbdigits=4&type=page&initCount=0"
              title="Free Counter"
              alt="web counter"
              border="0"
            />
            <p>Visitors</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
