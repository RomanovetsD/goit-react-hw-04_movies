import { KEY, BASE_URL, QUERY_VALUE, SEARCH, TRENDING } from './constants';
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

const fetchReviews = id => {
  return fetch(`${BASE_URL}${routes.MOVIES}/${id}/reviews?api_key=${KEY}`)
    .then(res => res.json())
    .then(data => {
      return data.results;
    });
};

const fetchCredits = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5f7ac1b9f858cfa7079e5dbc9197589b`,
  )
    .then(res => res.json())
    .then(data => {
      return data.cast;
    });
};

// https://api.themoviedb.org/3/movie/${id}/credits?api_key=5f7ac1b9f858cfa7079e5dbc9197589b
// ${BASE_URL}${routes.MOVIES}/${id}/credits?api_key=${KEY}

const fetchTrending = () => {
  return fetch(`${BASE_URL}/${TRENDING}?api_key=${KEY}`).then(res =>
    res.json(),
  );
};

export default {
  fetchMovieWithQuery,
  fetchMovieDetails,
  fetchReviews,
  fetchTrending,
  fetchCredits,
};
