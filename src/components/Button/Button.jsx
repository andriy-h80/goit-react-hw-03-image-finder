import React from 'react';
import LoadMoreBtn from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
      <LoadMoreBtn type='button' onClick={onClick} aria-label="Load more">
        Load more..
      </LoadMoreBtn>
    );
  };
  
  Button.propTypes = {
    onClick: PropTypes.func,
  };

  export default Button;
