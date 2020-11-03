import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import MoviesContainer from "./MoviesContainer";
import TVsContainer from "./TVsContainer";
import SearchContainer from "./SearchContainer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    textColor: "gray",
    borderStyle: "solid",
    borderWidth: "1px",
    marginTop: "5rem",
    margin: "15px",
  },
  appBar: {
    backgroundColor: "#D3D3D3",
    color: "gray",
  },
}));

export default function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const { movieData, isSearched, isTyping } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          TabIndicatorProps={{ style: { background: "blue" } }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Movie" href="/movies" {...a11yProps(0)} />
          <LinkTab label="Search" href="/search" {...a11yProps(1)} />
          <LinkTab label="TV" href="/tv" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MoviesContainer></MoviesContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchContainer
          movie={movieData}
          isSearchedShow={isSearched}
          isTyping={isTyping}
        ></SearchContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TVsContainer></TVsContainer>
      </TabPanel>
    </div>
  );
}
