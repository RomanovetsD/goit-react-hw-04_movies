const fetchMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=5f7ac1b9f858cfa7079e5dbc9197589b&language=en-US`,
  ).then(res => res.json());
};

const fetchMovieWithQuery = searchQuery => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5f7ac1b9f858cfa7079e5dbc9197589b&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  )
    .then(res => res.json())
    .then(data => data.results);
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

const fetchReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=5f7ac1b9f858cfa7079e5dbc9197589b`,
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
