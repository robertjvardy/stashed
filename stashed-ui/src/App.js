import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PannelsContainer from "./Components/PannelsContainer/PannelsContainer";
import { Route, Switch } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import EquityDetails from "./Components/EquityDetails/EquityDetails";

function App() {
  const [tickers, setTickers] = useState(["AAPL", "TSLA"]);
  const [state, setState] = useState({
    left: false
  });

  // extract this
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  return (
    <div className="App">
      <NavBar handleDrawerToggle={toggleDrawer} />
      <div className="main-content">
        <Switch>
          <Route
            path="/equity/:ticker"
            strict
            sensitive
            render={({ match }) => (
              <EquityDetails ticker={match.params.ticker} />
            )}
          />
          <Route
            path="/"
            render={() => <PannelsContainer tickers={tickers} />}
          />
        </Switch>
        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
          <SideDrawer />
        </Drawer>
      </div>
    </div>
  );
}

export default App;
