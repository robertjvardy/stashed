import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "100%"
  }
}));

const VerticalTabs = props => {
  const { tabs } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tabs.map(tab => (
          <Tab
            label={tab.label}
            id={`vertical-tab-${tab.index}`}
            aria-controls={`vertical-tabpanel-${tab.index}`}
          />
        ))}
      </Tabs>
      {tabs.map(content => (
        <Typography
          component="div"
          role="tabpanel"
          hidden={value !== content.id}
          id={`vertical-tabpanel-${content.id}`}
          aria-labelledby={`vertical-tab-${content.id}`}
        >
          <Box p={3}>{content.component}</Box>
        </Typography>
      ))}
    </div>
  );
};

export default VerticalTabs;
