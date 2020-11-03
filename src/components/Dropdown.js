import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const getStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = (props) => {
  const classes = getStyles();
  const { dropDownData = [], onDropdownChange } = props;

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
      <Select 
      native label="Category" 
      inputProps={{ name: "category", id: "outlined-age-native-simple"}} 
      onChange={(e) => props.onDropdownChange(e.target.value)}>
        {dropDownData.map((category) => ( <option key={category} value={category}> {category} </option> ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
