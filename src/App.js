import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="footer">
          <p>This project was coded by Luciana B Ferrand</p>
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
        </footer>
      </div>
    </div>
  );
}

export default App;
