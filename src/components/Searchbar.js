import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = { value: '' };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={value}
          onChange={this.onChange}
          className="input"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
