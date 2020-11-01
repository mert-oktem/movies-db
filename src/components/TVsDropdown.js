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
    minWidth: 120,
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
          <InputLabel id="simple-select-label">Category</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            onChange={e => props.onInputChange(e.target.value)}
          >
            <MenuItem value={'airing_today'}>airing_today</MenuItem>
            <MenuItem value={'on_the_air'}>on_the_air</MenuItem>
            <MenuItem value={'popular'}>popular</MenuItem>
            <MenuItem value={'top_rated'}>top_rated</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
}

export default Form
