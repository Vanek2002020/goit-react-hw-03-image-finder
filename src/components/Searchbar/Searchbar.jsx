import React, { Component } from 'react';

import s from 'components/Searchbar/Searchbar.module.css';

import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please type the query', {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.SearchForm__button}>
              <span className={s.SearchForm__label}>Search</span>
            </button>

            <input
              className={s.SearchForm__input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="searchQuery"
              value={searchQuery}
              onChange={this.handleQueryChange}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
