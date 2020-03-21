import React, { useState } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./SideDrawer.css";
import { AddEquityModal } from "./components/AddEquityModal";

const SideDrawer = props => {
  //   const { addTicker } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="list" role="presentation">
      <List>
        {["Inbox", "Starred", "Send email", "Watch Lists"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        <ListItem button key="Add Stock" onClick={() => handleOpen()}>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Add Equity" />
        </ListItem>
      </List>
      <AddEquityModal
        // addTicker={addTicker}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default SideDrawer;
