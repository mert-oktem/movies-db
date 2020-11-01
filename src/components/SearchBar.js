import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import SearchDropdown from './SearchDropDown'

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    marginTop: '25px',
    color: 'white',
    background: 'blue'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "5rem"
  },
  textField: {
    minWidth: 500,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const Form = props => {
  const classes = getStyles()

  return (
    <form onSubmit={props.onSubmit} className={classes.form} onChange={props.onChange}>
      <TextField
        label='Search'
        name='movieName'
        className={classes.textField}
        margin='normal'
        variant='outlined'
      />
      <SearchDropdown
      onInputChange={e => props.getDropDownSelection(e.target.value)}
      ></SearchDropdown>
      <Button variant='outlined' className={classes.button} type='submit'>
        Search
      </Button>
    </form>
  )
}

export default Form
