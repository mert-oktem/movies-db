import React, { Component } from 'react'
import MoviesDropdown from '../components/MoviesDropdown'
import Loading from '../components/Loading'
import Movies from '../components/Movies'
import { getMovies } from '../services/api'

class MoviesContainer extends Component {
  state = {
    movies: [],
    isLoading: false
  }

  fetchMovies = e => {
    //e.preventDefault()

    this.setState({
      isLoading: true
    })

    getMovies(e).then(
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
        <MoviesDropdown
          onInputChange={this.fetchMovies}
        />
        {isLoading ? <Loading /> : <Movies movies={movies} />}
      </div>
    )
  }
}

export default MoviesContainer
