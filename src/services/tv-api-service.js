import { KEY, BASE_URL, QUERY_VALUE, SEARCH } from './constants';
import routes from '../routes';

const fetchMovieDetails = movieId => {
  return fetch(
    `${BASE_URL}${routes.MOVIES}/${movieId}?api_key=${KEY}&language=en-US`,
  ).then(res => res.json());
};

const fetchMovieWithQuery = searchQuery => {
  return fetch(
    `${BASE_URL}${SEARCH}${routes.MOVIES}?api_key=${KEY}&language=en-US${QUERY_VALUE}${searchQuery}&page=1&include_adult=false`,
  )
    .then(res => res.json())
    .then(data => data.results);
};

const fetchCredits = id => {
  return fetch(
    `${BASE_URL}${routes.MOVIES}/${id}${routes.MOVIE_CAST}?api_key=${KEY}`,
  )
    .then(res => res.json())
    .then(data => {
      return data.cast;
    });
};

const fetchReviews = id => {
  return fetch(
    `${BASE_URL}${routes.MOVIES}/${id}${routes.MOVIE_REVIEWS}?api_key=${KEY}`,
  )
    .then(res => res.json())
    .then(data => {
      return data.results;
    });
};

export default {
  fetchMovieWithQuery,
  fetchMovieDetails,
  fetchCredits,
  fetchReviews,
};
