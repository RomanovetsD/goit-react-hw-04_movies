import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=5f7ac1b9f858cfa7079e5dbc9197589b',
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data.results });
      });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <hr className="hrline" />
        <h1>Trending today</h1>
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <Link to={`/movie/${result.id}`}>
                {result.name}
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
