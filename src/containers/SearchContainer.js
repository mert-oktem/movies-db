import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Loading from '../components/Loading'
import Movies from '../components/Movies'
import { getMovie } from '../services/api'


class SearchContainer extends Component {
  state = {
    isSearched: false,
    movie: {}
  }

  componentDidMount() {
    this.setState({
      isSearched: false
    })
  }

  fetchMovies = e => {
    const { movieName } = this.state
    e.preventDefault()

    this.setState({
      isLoading: true
    })

    getMovie(movieName).then(
      movies => {
        this.setState({
          movies,
          isLoading: false
        })
      },
      error => {
        alert('Error', `Something went wrong! ${error}`)
      }
    )
  }

  render() {
    const { isSearched, movies } = this.state
    return (
      <div>
        {isSearched ? <h1>Please enter a search</h1> : <h1>Please enter a search</h1>}
      </div>
    )
  }
}

export default SearchContainer
