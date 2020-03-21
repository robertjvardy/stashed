import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { SideDrawer } from "./components/SideDrawer";
import Drawer from "@material-ui/core/Drawer";
import "./styles.css";

const Layout = props => {
  const [state, setState] = useState({
    left: false
  });
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
    <>
      <NavBar toggleDrawer={toggleDrawer} />
      <div id="mainContent">{props.children}</div>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        <SideDrawer
        // addTicker={addTicker}
        />
      </Drawer>
    </>
  );
};

export default Layout;
