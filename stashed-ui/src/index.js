import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://www.alphavantage.co/";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// TODO add redux
