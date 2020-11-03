import React, { Component } from 'react'
import Loading from '../components/Loading'
import Movies from '../components/Movies'
import { getMovies } from '../services/api'
import Dropdown from '../components/Dropdown'

class MoviesContainer extends Component {
  state = {
    movies: [],
    isLoading: false
  }

  moviesDropdownOptions = ["now_playing", "popular", "top_rated", "upcoming"];

  componentDidMount() {
    this.fetchMovies(this.moviesDropdownOptions[0]);
  }

  fetchMovies = event => {
    this.setState({
      isLoading: true
    })

    getMovies(event).then(
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
    const { isLoading, movies } = this.state
    return (
      <div>
        <Dropdown
          onDropdownChange={this.fetchMovies}
          dropDownData={this.moviesDropdownOptions}
        />
        {isLoading ? <Loading /> : <Movies movies={movies} />}
      </div>
    )
  }
}

export default MoviesContainer
