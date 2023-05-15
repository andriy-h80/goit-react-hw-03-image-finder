import React, { Component } from 'react';
import ErrorImageView from '../ErrorImageView/ErrorImageView';
import getImages from '../../services/fetchAPI';
import Loader from '../Loader/Loader';
import { ImageGalleryStyled, Text } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
    state = {
        searchName: null,
        images: [],
        error: null,
        status: 'idle',
        page: 1,
        totalPages: 0,
        showModal: false,
        modalData: { img: '', tags: '' },
    }

    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        const { imageSearchName } = this.props;

        if (prevProps.imageSearchName !== imageSearchName) {
            this.setState({
                images: [],
                page: 1,
            })
        }

        if (prevProps.imageSearchName !== imageSearchName || prevState.page !== page) {
            getImages(imageSearchName, page)
            .then(images => {
                this.setState({
                    images: 
                        page === 1 ? images.hits : [...prevState.images, ...images.hits],
                    totalPages: Math.floor(images.totalHits / 12),
                    status: 'resolved',
                    // page: page,
                })
                console.log(page);
            })    
            .catch(error => {
                this.setState({ error, status: 'rejected' });
            })
            console.log(page);
        }

        // if (prevState.page !== page && prevState.page >= 1) {
        //     getImages(imageSearchName, page)
        //     .then(images => {
        //         this.setState(prevState => ({
        //             images: [...prevState.images, ...images.hits],
        //             totalPages: Math.floor(images.totalHits / 12),
        //             status: 'resolved',
        //         }))
        //     })    
        //     .catch(error => {
        //         this.setState({ error, status: 'rejected' });
        //     }) 
        //      console.log(page);
        // }    
    }

    handleLoadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
    };

    setModalData = modalData => {
        this.setState({ modalData, showModal: true });
    };
    
    handleModalClose = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { images, error, status, page, totalPages, showModal, modalData } = this.state;

        if (status === 'idle') {
            return <Text>Let's try find something!</Text>;
        }
      
        if (status === 'pending') {
            return <Loader />;
        }

        if (status === 'rejected') {
            return <ErrorImageView message={error.message} />;
        }

        if (images.length === 0) {
            return <ErrorImageView message={`Sorry, we can't find ${this.props.imageSearchName}`} />;
        }

        if (status === 'resolved') {
            return (
                <>
                <ImageGalleryStyled>
                    {images.map(image => (
                        <ImageGalleryItem
                            key={image.id}
                            webformatURL={image.webformatURL}
                            tags={image.tags}
                            largeImageURL={image.largeImageURL}
                            onImageClick={this.setModalData}
                        />
                    ))}
                </ImageGalleryStyled>
                {images.length > 0 && status !== 'pending' && page <= totalPages && (
                    <Button onClick={this.handleLoadMore}>Load More</Button>
                )}
                {showModal && (
                    <Modal modalData={modalData} onClose={this.handleModalClose} />
                )}
                </>
            )
        }
    }
}

ImageGallery.propTypes = {
    imageSearchName: PropTypes.string.isRequired,
}
