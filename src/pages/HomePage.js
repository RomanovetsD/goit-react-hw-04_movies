import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import tvApiService from '../services/tv-api-service';

export default class HomePage extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    tvApiService
      .fetchTrending()
      .then(data => {
        this.setState({ results: data.results });
      })
      .catch(err => console.log(err));
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
              <Link to={`${routes.MOVIES}/${result.id}`}>
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
