import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    value: '',

  }

  handleSearchFormSubmit = searchFormValue => {
    this.setState({ value: searchFormValue });
    // console.log(searchFormValue);
  }


  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          // color: '#010101'
        }}
      >
      <Searchbar onSearchFormSubmit={this.handleSearchFormSubmit}/>
      <ImageGallery imageSearchName={this.state.value} /> 

      <ToastContainer position="top-center" autoClose={3000}/>
      </div>
    );
  }
};


// 34772509-2b3ff3d3039847d74197d09be