import React from "react";
import logo from "./chibi.gif";
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>ربيع الأغنيااات</code>
        </p>
        <ul>
          <li>
            <a
              className="App-link"
              href="https://www.instagram.com/techorad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/raghadalafeef/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        
      </header>
      <div className='App-content'>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
