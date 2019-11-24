import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import HomePages from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MoviesDetailsPage from '../../pages/MoviesDetailsPage';
import routes from '../../routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path={routes.HOME} component={HomePages} />
        <Route path={routes.MOVIE_DETAILS} component={MoviesDetailsPage} />
        <Route path={routes.MOVIES} component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
