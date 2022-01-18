import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <footer className="footer">
        <p>This project was coded by Luciana B Ferrand</p>
        <a
          className="Luciana Ferrand-link"
          href="https://www.lbferrandportfolio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My website
          <br />
          <a
            className="github-link"
            href="https://github.com/lbferrand/weather-app-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on GitHub
          </a>
        </a>
      </footer>
    </div>
  );
}

export default App;
