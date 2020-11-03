import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dropdown from "./Dropdown";

const getStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    color: "white",
    background: "blue",
    marginLeft: '1%'
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5rem",
  },
  textField: {
    minWidth: 500,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 0,
    marginBottom: 0
  },
  dropDown: {
    marginLeft: '5%'
  }
}));

const SearchBar = (props) => {
  const classes = getStyles();
  const searchOptions = ["movie", "multi", "tv"];

  return (
    <form
      onSubmit={props.onSubmit}
      className={classes.form}
    >
      <TextField
        label="Search"
        name="movieName"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={(e) => props.handleInputChange(e)}
      />
      <Dropdown 
      className={classes.dropDown}
        onDropdownChange={(e) => props.getDropDownSelection(e)}
        dropDownData = {searchOptions}
      />
      <Button 
      variant="outlined" 
      className={classes.button} 
      type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
