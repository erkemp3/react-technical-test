import React from "react";
import "../styles/App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="NASA Logo"
        className="nasa-img"
      />
      <Search />
    </div>
  );
}

export default App;
