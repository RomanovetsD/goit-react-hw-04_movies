import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tvApiService from '../../services/tv-api-service';
import Loader from '../Loader/Loader';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

export default class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ movieId: PropTypes.string.isRequired }),
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    cast: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const movieID = match.params.movieId;

    this.getCredits(movieID);
  }

  getCredits = id => {
    this.setState({ isLoading: true });
    tvApiService
      .fetchCredits(id)
      .then(cast => {
        this.setState({
          cast,
        });
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

  render() {
    const { cast, isLoading, error } = this.state;
    return (
      <section className="cast">
        {error && <ErrorNotification message={error.message} />}
        {isLoading && <Loader />}
        <h2>Cast</h2>
        {cast && (
          <ul className="castList">
            {cast.map(person => (
              <li key={person.cast_id} className="castListItem">
                <object
                  title="This object has text"
                  data={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  type="image/png"
                  width="100"
                />
                <p className="castListName">{person.name}</p>
                <p> Character:{person.character}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}
