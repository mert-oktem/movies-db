import React, { Component } from 'react'
import TVsDropdown from '../components/TVsDropdown'
import Loading from '../components/Loading'
import TVs from '../components/TVs'
import { getTVs } from '../services/api'

class TVsContainer extends Component {
  state = {
    movies: [],
    isLoading: false
  }

  fetchTVs = e => {
    //e.preventDefault()

    this.setState({
      isLoading: true
    })

    getTVs(e).then(
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
        <TVsDropdown
          onInputChange={this.fetchTVs}
        />
        {isLoading ? <Loading /> : <TVs tvs={movies} />}
      </div>
    )
  }
}

export default TVsContainer
