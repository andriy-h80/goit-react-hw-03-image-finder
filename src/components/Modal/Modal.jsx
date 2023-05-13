import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled, ModalImage, ModalDescr } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.modalData;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyled >
          <ModalImage src={largeImageURL} alt={tags} />
          <ModalDescr>{tags}</ModalDescr>
        </ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onModalClose: PropTypes.func,
};