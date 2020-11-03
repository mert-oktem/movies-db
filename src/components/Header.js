import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'white',
    color: 'black',
    borderStyle: 'solid',
    borderColor: 'black',
    height: '5rem',
    margin: '2rem 2rem 2rem 2rem',
    fontSize: '4em'
  },
}));

function Header(props) {
  const clasess = useStyles();
  return (
    <div>
      <h1 className={clasess.header}>React Movies App</h1>
    </div>
  );
}



export default Header;
