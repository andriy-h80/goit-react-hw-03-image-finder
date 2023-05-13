import React, { Component } from 'react';
import { Header, SearchForm, SearchFormBtn, SearchFormLabel, SearchFormInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({ value: event.currentTarget.value.toLowerCase() })
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.value.trim() === '') {
            toast('What are you searching for?');
            return;
        };
        this.props.onSearchFormSubmit(this.state.value);
        this.setState({ value: '' });
    }

    render() {
      return (
        <Header>
            <SearchForm onSubmit={this.handleSubmit}>
                <SearchFormBtn type='submit'>
                    <ImSearch size={20}/>
                    <SearchFormLabel>Search</SearchFormLabel>
                </SearchFormBtn>
                <SearchFormInput
                    className='input'
                    type='text'
                    autoComplete='off'
                    placeholder='Search images and photos'
                    value={this.state.value}
                    onChange={this.handleChange}
                />

            </SearchForm>
        </Header>
      );
    }
  };

  Searchbar.propTypes = {
    onSearchFormSubmit: PropTypes.func.isRequired,
  };
  