import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
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
          placeholder="Search  movies..."
          onChange={this.onChange}
          className="input"
          pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
          required
          oninvalid="setCustomValidity('Имя должно содержать 2-20 символов')"
          onInput="setCustomValidity('')"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
