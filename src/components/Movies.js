import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard'

const getStyles = makeStyles(theme => ({
  root: {
    margin: '5em 0'
  }
}))

const Movies = props => {
  const classes = getStyles()
  const baseImageURL = 'http://image.tmdb.org/t/p/w185/'
  return (
    <div className='container'>
      <Grid container className={classes.root} spacing={5}>
        {props.movies.map(movie => {
          const { id, title, release_date, overview, popularity, poster_path } = movie
          return (
            <Grid item xs={12}>
              <MovieCard
                key={id}
                id={id}
                title={title}
                imageUrl={baseImageURL + poster_path}
                release_date={release_date}
                overview={overview}
                popularity={popularity}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Movies
