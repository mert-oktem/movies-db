import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const getStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = props => {
    const classes = getStyles()
    return (
        <div>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel id="simple-select-label">Search Type</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            onChange={e => props.onInputChange(e)}
          >
            <MenuItem value={'movie'}>movie</MenuItem>
            <MenuItem value={'multi'}>multi</MenuItem>
            <MenuItem value={'tv'}>tv</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
}

export default Form
