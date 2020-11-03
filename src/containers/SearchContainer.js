import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router";

import Loading from "../components/Loading";
import Movies from "../components/Movies";
import { getMovie } from "../services/api";

class SearchContainer extends Component {
  state = {
    isSearched: false,
  };

  componentDidMount() {
    this.setState({
      isSearched: false,
    });
  }

  render() {
    if (this.props.isSearchedShow) {
      if (this.props.movie.length == 0) {
        return (
          <h1>No results</h1>
        )
      }
      else {
        return (
          <Movies movies={this.props.movie}></Movies> 
        )
      }
    }
    else {
      return (
        <div>
          {this.props.isTyping ? <h1>Please initiate a search</h1> : (<h1>Please enter a search</h1>)}
        </div>
      );
    }

  }
}

export default SearchContainer;
