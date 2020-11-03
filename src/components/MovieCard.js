import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const getStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    flex: '1 1',
    marginTop: '10%'
  },
  media: {
    width: 300,
    height: 500
  }
}))

const MovieCard = props => {
  const classes = getStyles()
  const { key, imageUrl, title, overview, release_date, popularity } = props

  return (
    <Card key={key} className={classes.root}>
      <CardMedia className={classes.media} image={imageUrl} title={title} />
      <CardContent className={classes.content}>
            <CardHeader title={title} />
            <Typography variant='body2' color='textSecondary' component='p'>
              Release Date: {release_date} | Popularity: {popularity}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Overview: {overview}
            </Typography>
      </CardContent>
    </Card>
  )
}

export default MovieCard
