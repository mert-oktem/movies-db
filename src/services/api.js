import axios from 'axios'

import { APP_ID, APP_KEY, BASE_URL } from '../config/api_config'


// Search movie
export const getMovie = async (e, movieName) => {
  try {

    const response = await axios.get(
      `${BASE_URL}search/${e}?api_key=${APP_KEY}}&query=${movieName}`
    )

    const movie = response.data.results

    return movie
  } catch (error) {
    throw error
  } 
}

// GET movies
export const getMovies = async e => {
  try {

    const response = await axios.get(
      `${BASE_URL}movie/${e}?api_key=${APP_KEY}`
    )
    const movies = response.data.results

    return movies
  } catch (error) {
    throw error
  } 
}

  // GET TVs
  export const getTVs = async e => {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${e}?api_key=${APP_KEY}`
      )
      const TVs = response.data.results
  
      return TVs
    } catch (error) {
      throw error
    } 
}