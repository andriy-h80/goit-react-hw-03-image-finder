import React from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, onClick }) => (
    <ImageGalleryItemStyled>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={onClick}
      />
    </ImageGalleryItemStyled>
  );
  
  ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  export default ImageGalleryItem;
  