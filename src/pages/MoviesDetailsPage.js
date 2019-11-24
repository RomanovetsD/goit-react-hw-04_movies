import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import tvApiService from '../services/tv-api-service';
import Loader from '../components/Loader/Loader';
import routes from '../routes';
import { CAST_IMAGE } from '../services/constants';
import ErrorNotification from '../components/ErrorNotification/ErrorNotification';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

export default class MoviesDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({ movieId: PropTypes.string.isRequired }),
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = { result: null, isLoading: false, error: null };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    tvApiService
      .fetchMovieDetails(movieId)
      .then(result => {
        this.setState({ result });
      })
      .catch(error => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  // eslint-disable-next-line consistent-return
  moveToPreviousPage = () => {
    const { location, history } = this.props;
    if (!location.state) {
      return history.push(`${routes.MOVIES}`);
    }

    history.push({
      pathname: `${routes.MOVIES}`,
      state: { from: 'location' },
    });
  };

  render() {
    const { result, isLoading, error } = this.state;
    const { match } = this.props;
    return (
      <section>
        {error && <ErrorNotification message={error.message} />}
        {isLoading && <Loader />}
        <hr className="hrline" />
        <h2 className="film_title">Movie Details</h2>

        {result && (
          <>
            <button
              className="back_button"
              onClick={this.moveToPreviousPage}
              type="button"
            >
              ← GO BACK
            </button>
            <div className="film_description">
              <img
                src={`${CAST_IMAGE}${result.poster_path}`}
                alt={result.title}
                className="movie_img"
              />
              <div className="film_details">
                <h1>{result.original_title}</h1>
                <p>
                  <b>Overview</b>
                  <br /> {result.overview}
                </p>
                <p>
                  <b>Vote average:</b> {result.vote_average * 10} %
                </p>
                <p>
                  <b>Genres:</b> <br />
                  {result.genres
                    ? result.genres.map(el => el.name).join(', ')
                    : 'No information about film'}
                </p>
              </div>
            </div>
            <hr className="hrline" />
            <div className="details_additional">
              <h2>Additional information</h2>
              <ul className="details_list">
                <li>
                  <Link to={`${match.url}/cast`}> Cast </Link>
                </li>
                <li>
                  <Link to={`${match.url}/reviews`}> Reviews </Link>
                </li>
              </ul>
              <hr className="hrline" />
              <Switch>
                <Route path={`${match.path}/cast`} component={Cast} />
                <Route path={`${match.path}/reviews`} component={Reviews} />
              </Switch>
            </div>
          </>
        )}
      </section>
    );
  }
}
