import React from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onImageClick }) => (

    <ImageGalleryItemStyled 
      onClick={event => {
        event.preventDefault();
        onImageClick({ largeImageURL, tags });
      }}
    >
    <Image
      src={webformatURL}
      alt={tags}
      loading="lazy"
    />
    </ImageGalleryItemStyled>
  );

  

  ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onImageClick: PropTypes.func.isRequired,
  };
  
  export default ImageGalleryItem;
