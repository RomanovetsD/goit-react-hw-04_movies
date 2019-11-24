import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tvApiService from '../../services/tv-api-service';
import Loader from '../Loader/Loader';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieId: PropTypes.string.isRequired,
      }),
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    reviews: [],
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
      .fetchReviews(id)
      .then(reviews => {
        this.setState({
          reviews,
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
    const { reviews, isLoading, error } = this.state;

    return (
      <section className="reviews">
        {error && <ErrorNotification message={error.message} />}
        {isLoading && <Loader />}
        <h2>Reviews</h2>
        {reviews && (
          <ul className="reviewsList">
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>`{review.content}`</p>
              </li>
            ))}
          </ul>
        )}
        {reviews.length === 0 && <p>There are no reviews for this movie</p>}
      </section>
    );
  }
}
