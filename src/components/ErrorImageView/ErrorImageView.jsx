import errorImage from '../error.jpg';
import {  ErrorBox, ErrorImage, Message } from './ErrorImageView.styled';
import PropTypes from 'prop-types';

export default function ErrorImageView({ message }) {
    return (
        <ErrorBox role='alert'>
            <ErrorImage src={errorImage} width='240' alt='laydownandcry' />
            <Message>{message}</Message>
        </ErrorBox>
    );
};

ErrorImageView.propTypes = {
    message: PropTypes.string,
};
