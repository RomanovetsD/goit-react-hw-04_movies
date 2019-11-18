import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import tvApiService from '../services/tv-api-service';
import Loader from '../components/Loader';
import ErrorNotification from '../components/ErrorNotification';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

export default class MoviesDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
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

  moveToPreviousPage = () => {
    const { history } = this.props;
    history.goBack();
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
                src={`https://image.tmdb.org/t/p/w300/${result.poster_path}`}
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
