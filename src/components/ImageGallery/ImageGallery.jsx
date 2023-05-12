import React, { Component } from 'react';
import ErrorImageView from '../ErrorImageView/ErrorImageView';
import Loader from '../Loader/Loader';
// import ImageGallery from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';


export default class ImageGallery extends Component {
    state = {
        searchName: null,
        // loading: false,
        error: null,
        status: 'idle'
    }
    
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.imageSearchName !== this.props.imageSearchName) {

            this.setState({ status: 'pending' });
            fetch(`https://pixabay.com/api/?q=${this.props.imageSearchName}&page=1&key=34772509-2b3ff3d3039847d74197d09be&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(
                    new Error(`Sorry, {imageSearchName} does not exist `)
                )
            })
            .then(searchName => this.setState({ searchName, status: 'resolved' }))
            .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }

    render() {
        const { searchName, error, status } = this.state;
        const { imageSearchName } = this.props;

        if (status === 'idle') {
            return <div>Введіть ключове слово для пошуку</div>;
        }
      
        if (status === 'pending') {
            return <Loader />;
        }

        if (status === 'rejected') {
            return <ErrorImageView message={error.message} />;
        }

        // if (status === 'resolved') {
        //     return <ImageGalleryItem /> 
        // }

        return (
            <div>
            <p>{imageSearchName}</p>
            <img
             src={searchName.hits[0].previewURL}
             alt={imageSearchName}
             width="300"
            />
            </div>
            )
    }
  };
  