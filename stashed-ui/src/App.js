import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ContentContainer from "./Components/ContentContainer/ContentContainer";

function App() {
  const [tickers, setTickers] = useState(["AAPL", "TSLA", "APT"]);
  return (
    <div className="App">
      <NavBar />
      <ContentContainer tickers={tickers} />
    </div>
  );
}

export default App;
