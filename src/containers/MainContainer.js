import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import TabContainer from "./TabsContainer";
import Header from "../components/Header";

import { getMovie } from "../services/api";

class RecipesContainer extends Component {
  state = {
    searchQuery: "",
    movies: "",
    dropDownSelection: "movie",
    isSearched: false,
    isTyping: false
  };

  fetchMovies = (e) => {
    getMovie(this.state.dropDownSelection, this.state.searchQuery).then(
      (result) => {
        return this.setState({ movies: result, isSearched: true });
      }
    );
    e.preventDefault();
  };

  handleInputChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });

    if (this.searchQuery != "") {
      this.setState({
        isTyping: true,
      });
    }
    else {
      this.setState({
        isTyping: false,
      });
    }
  }

  getDropDownSelection = (e) => {
    this.setState({
      dropDownSelection: e,
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <SearchBar
          handleInputChange={this.handleInputChange}
          onSubmit={this.fetchMovies}
          getDropDownSelection={this.getDropDownSelection}
        />
        <TabContainer
          movieData={this.state.movies}
          isSearched={this.state.isSearched}
          isTyping={this.state.isTyping}
        />
      </div>
    );
  }
}

export default RecipesContainer;
