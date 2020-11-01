import React, { Component } from 'react'
import Form from '../components/SearchBar'
import Loading from '../components/Loading'
import Movies from '../components/Movies'
import TabContainer from './TabsContainer'

import { getMovie } from '../services/api'

class RecipesContainer extends Component {
  state = {
    searchQuery: '',
    movies: '',
    dropDownSelection: ''
  }

  fetchMovies = e => {
    e.preventDefault();
    console.log(this.state.searchQuery + this.state.dropDownSelection)
  }

  handleInputChange = e => {
    this.setState({
      searchQuery: e.target.value
    })
    console.log('Input' + e.target.value)
  }

  getDropDownSelection = e => {
    this.setState({
      dropDownSelection: e
    })
    console.log('Dropdown:' + e)
  }

  render() {
    return (
      <div>
        <Form
          onChange={this.handleInputChange}
          onSubmit={this.fetchMovies}
          getDropDownSelection={this.getDropDownSelection}
        />
        <TabContainer></TabContainer>
      </div>
    )
  }
}

export default RecipesContainer
