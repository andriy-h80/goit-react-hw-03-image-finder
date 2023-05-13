import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Container } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    value: '',
  }

  handleSearchFormSubmit = searchFormValue => {
    this.setState({ value: searchFormValue });
  }

  render() {
    return (
      <Container>
      <Searchbar onSearchFormSubmit={this.handleSearchFormSubmit}/>
      <ImageGallery imageSearchName={this.state.value} /> 
      <ToastContainer position="top-center" autoClose={3000}/>
      </Container>
    );
  }
};
