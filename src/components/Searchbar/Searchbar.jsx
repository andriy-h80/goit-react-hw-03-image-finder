import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const styles = { form: { matginBottom: 20 } };

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
        <header className='searchbar'>
            <form onSubmit={this.handleSubmit} style={styles.form} className='form'>
                <button type='submit' className='button'>
                    <ImSearch style={{ marginRight: 8 }} />
                    <span className='button-label'>Search</span>
                </button>
                <input
                    className='input'
                    type='text'
                    autoComplete='off'
                    placeholder='Search images and photos'
                    value={this.state.value}
                    onChange={this.handleChange}
                />

            </form>
        </header>
      );
    }
  };

  Searchbar.propTypes = {
    onSearchFormSubmit: PropTypes.func.isRequired,
  };
  