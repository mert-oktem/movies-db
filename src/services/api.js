import axios from 'axios'

import { API_KEY, BASE_URL } from '../config/api_config'


// Search movie
export const getSearchResults = async (type, query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/${type}?api_key=${APP_KEY}}&query=${query}`
    )

    const movie = response.data.results

    return movie
  } catch (error) {
    throw error
  } 
}

// GET movies
export const getMovies = async category => {
  try {

    const response = await axios.get(
      `${BASE_URL}movie/${category}?api_key=${APP_KEY}`
    )
    const movies = response.data.results

    return movies
  } catch (error) {
    throw error
  } 
}

  // GET TVs
  export const getTVShows = async category => {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${category}?api_key=${APP_KEY}`
      )
      const TVs = response.data.results
  
      return TVs
    } catch (error) {
      throw error
    } 
}