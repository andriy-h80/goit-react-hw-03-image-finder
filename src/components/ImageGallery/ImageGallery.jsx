import React, { Component } from 'react';
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
    state = {
        searchName: null,
        loading: false,
        error: null,
    }
    
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.imageSearchName !== this.props.imageSearchName) {

            this.setState({ loading: true });
            fetch(`https://pixabay.com/api/?q=${this.props.imageSearchName}&page=1&key=34772509-2b3ff3d3039847d74197d09be&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => response.json())
            .then(searchName => this.setState({ searchName }))
            .catch(error => this.setState({ error }))
            .finally(this.setState({ loading: false }));
        }
    }

    render() {
        const { searchName, loading, error } = this.state;
        const { imageSearchName } = this.props;
      
        return (
        <div>
            <h3>ImageGallery</h3>
            {error && <h4>Sorry, {imageSearchName} does not exist</h4>}
            {loading && <div>Downloading...</div>}
            {!imageSearchName && <div>Введіть ключове слово для пошуку</div>}
            {searchName && (
            <div>
                <p>{imageSearchName}</p>
                <img
                 src={searchName.hits[0].previewURL}
                 alt={imageSearchName}
                 width="300"
                />
            </div>)}
        </div>
      );
    }
  };