import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./scenes/Dashboard";
import EquityDetails from "./scenes/EquityDetails/EquityDetails";

const tempData = [
  { ticker: "AAPL" },
  { ticker: "TSLA" },
  { ticker: "MSFT" },
  { ticker: "AAPL" },
  { ticker: "TSLA" },
  { ticker: "MSFT" },
  { ticker: "TSLA" },
  { ticker: "MSFT" }
];

const App = () => {
  const routes = (
    <Switch>
      <Route
        path="/equityDetails/:ticker"
        render={({ match }) => <EquityDetails ticker={match.params.ticker} />}
      />
      <Route
        path="/"
        strict
        exact
        render={() => <Dashboard equities={tempData} />}
      />
    </Switch>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
