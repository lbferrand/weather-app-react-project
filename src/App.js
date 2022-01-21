import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="footer">
          <p>This project was coded by </p>
          <a
            className="Luciana Ferrand-link"
            href="https://www.lbferrandportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luciana Bautista Ferrand
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
        </footer>
      </div>
    </div>
  );
}

export default App;
