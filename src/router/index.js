import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from '../App'
import MoviesContainer from '../containers/MoviesContainer'
import SearchContainer from '../containers/SearchContainer'
import TVsContainer from '../containers/TVsContainer'



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/movies' component={MoviesContainer} exact />
      <Route path='/search/:query' component={SearchContainer} exact />
      <Route path='/tv' component={TVsContainer} exact />

    </Switch>
  </BrowserRouter>
)

export default Router
