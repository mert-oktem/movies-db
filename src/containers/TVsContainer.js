import React, { Component } from 'react'
import Loading from '../components/Loading'
import Movies from '../components/Movies'
import { getTVs } from '../services/api'
import Dropdown from '../components/Dropdown'

class TVsContainer extends Component {
  state = {
    movies: [],
    dropDownSelection: "airing_today",
    isLoading: false
  }

  tvShowsDropdownOptions = ["airing_today", "on_the_air", "popular", "top_rated"];

  componentDidMount() {
    this.fetchTVs(this.tvShowsDropdownOptions[0]);
  }

  fetchTVs = e => {
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

  getDropDownSelection = e => {
    this.setState({
      dropDownSelection: e
    })
  }

  render() {
    const { isLoading, movies } = this.state
    return (
      <div>
        <Dropdown
          onDropdownChange={this.fetchTVs}
          dropDownData={this.tvShowsDropdownOptions}
        />
        {isLoading ? <Loading /> : <Movies movies={movies} />}
      </div>
    )
  }
}

export default TVsContainer
